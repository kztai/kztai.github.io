<template>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                notificationValue: {
                    title: '',
                    desc: '',
                    icon: ''
                },
                notification: '',
                center: false,
                showIcon: false,
                position: 'top-right',      // 自定义弹出位置。top-right/top-left/bottom-right/bottom-left(默认为top-right)
                duration: 4500,
                showClose: false,
                offset: 0,
                size: 'medium'     // 提示框尺寸。large / medium / small / min（默认 medium）

            }
        },
        computed: {},

        watch: {
            para: {
                handler: function (val, oldVal) {
                    var $this = this;
                    Object.assign($this, $this.sys.lib);
                    if (val.$api && val.$isShow && val.$isMounted && !$this.$lodash.isEqual(val, oldVal)) {
                        $this.pvt_isSubModuleStarted = true;
                        $this.startModule(function () {
                            setTimeout(function () {
                                if ($this.$parent.subModuleActivatedEvent) {
                                    $this.$parent.subModuleActivatedEvent($this.refId);
                                }
                            }, 0);
                        }, function () {

                        });
                    } else if (oldVal) {
                        setTimeout(function () {
                            if ($this.$parent.subModuleActivatedEvent) {
                                $this.$parent.subModuleActivatedEvent($this.refId);
                            }
                        }, 0);
                    }
                },
                deep: true,
                immediate: true,
            },
        },
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true;
            }
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let fieldArr;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    typeObj: {}
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            // 判断para传值合法性：
                            if (that.para.message !== undefined) {
                                if (that.para.message.$table === undefined) {
                                    console.error('$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.message.$table) !== '[object Object]') {
                                    console.error('$table格式错误！');
                                    return
                                }
                                if (that.para.message.$value === undefined) {
                                    console.error('$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.message.$value) !== '[object Array]') {
                                    console.error('$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.position !== undefined && typeof that.attr.position !== 'string') {
                                console.error('position格式错误！');
                                return
                            }
                            if (that.attr.size !== undefined && typeof that.attr.size !== 'string') {
                                console.error('size格式错误！');
                                return
                            }
                            if (that.attr.duration !== undefined && typeof that.attr.duration !== 'number') {
                                console.error('duration格式错误！');
                                return
                            }
                            if (that.attr.center !== undefined && typeof that.attr.center !== 'boolean') {
                                console.error('center格式错误！');
                                return
                            }
                            if (that.attr.offset !== undefined && typeof that.attr.offset !== 'number') {
                                console.error('offset格式错误！');
                                return
                            }
                            if (that.attr.showIcon !== undefined && typeof that.attr.showIcon !== 'boolean') {
                                console.error('showIcon格式错误！');
                                return
                            }
                            if (that.attr.showClose !== undefined && typeof that.attr.showClose !== 'boolean') {
                                console.error('showClose格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.showIcon !== undefined) {
                                that.showIcon = that.attr.showIcon;
                            }
                            if (that.attr.center !== undefined) {
                                that.center = that.attr.center;
                            }
                            if (that.attr.showClose !== undefined) {
                                that.showClose = that.attr.showClose;
                            }
                            if (that.attr.offset !== undefined) {
                                that.offset = that.attr.offset;
                            }
                            if (that.attr.duration !== undefined) {
                                that.duration = that.attr.duration;
                            }
                            if (that.attr.size !== undefined) {
                                that.size = that.attr.size;
                            }
                            if (that.attr.position !== undefined) {
                                that.position = that.attr.position;
                            }

                            if (that.para.message && that.para.message.$value.length === 3) {
                                // 为内存数据：
                                that.notificationValue.title = that.para.message.$value[0];
                                that.notificationValue.desc = that.para.message.$value[1];
                                that.notificationValue.icon = that.para.message.$value[2];
                                para.nStep = 'init';
                                dbFlag += 1;
                                break;
                            } else {
                                // 为表格数据：
                                tableName = Object.keys(that.para.message.$table)[0];
                                fieldArr = that.para.message.$table[tableName];
                                para.nStep = 'fieldType';
                                dbFlag += 1;
                                break;
                            }
                        case 'fieldType':
                            if(para.i > fieldArr.length - 1) {
                                para.i = 0;
                                para.nStep = 'getValue';
                                dbFlag += 1;
                                break;
                            }

                            that.sys.api.typeOfTable(tableName, fieldArr[para.i], function (result) {
                                para.typeObj[fieldArr[para.i]] = result;
                                para.i++;
                                para.nStep = 'fieldType';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getValue':
                            dbData = {};
                            dbData.id = that.para.message.$value;
                            for(let j = 0; j < fieldArr.length; j++) {
                                dbData[fieldArr[j]] = [];
                            }

                            that.sys.api.recordRead(tableName, dbData, function () {
                                for(let j = 0; j < fieldArr.length; j++) {
                                    if(para.typeObj[fieldArr[j]] === 'string') {
                                        that.notificationValue.title = dbData[fieldArr[j]][0];
                                    } else if(para.typeObj[fieldArr[j]] === 'text') {
                                        that.notificationValue.desc = dbData[fieldArr[j]][0];
                                    } else if(para.typeObj[fieldArr[j]] === 'picture') {
                                        that.notificationValue.icon = dbData[fieldArr[j]][0][0].fileName;
                                    }
                                }

                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'init':
                            this.$nextTick(function () {
                                let iconClass;
                                if (that.showIcon) {
                                    iconClass = that.notificationValue.icon;
                                } else {
                                    iconClass = '';
                                }
                                that.notification = this.$notify({
                                    title: that.notificationValue.title,
                                    message: that.notificationValue.desc,
                                    duration: that.duration,
                                    showClose: that.showClose,
                                    offset: that.offset,
                                    position: that.position,
                                    iconClass: iconClass,
                                    onClose: function () {
                                        that.callModuleEventPort('closeEvent', []);
                                    },
                                    onClick: function () {
                                        that.callModuleEventPort('clickMessageEvent', []);
                                    }
                                });

                                if (that.center) {
                                    $('.el-notification .el-notification__group').css('margin', '0 auto');
                                    $('.el-notification .el-notification__icon').css('margin-right', '13px');
                                }

                                switch (that.size) {
                                    case 'large':
                                        $('.el-notification').addClass('el-notification-large');
                                        break;
                                    case 'medium':
                                        $('.el-notification').addClass('el-notification-medium');
                                        break;
                                    case 'small':
                                        $('.el-notification').addClass('el-notification-small');
                                        break;
                                    case 'min':
                                        $('.el-notification').addClass('el-notification-min');
                                        break;
                                }

                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
            closeMessage: function () {
                this.notification.close();
            }
        }
    }

</script>
<style lang="scss">
   .el-notification {
        font-family: $lm-notification-font-family !important;
        background-color: $lm-notification-background-color !important;
        border: $lm-notification-border !important;
        box-shadow: $lm-notification-box-shadow !important;
        border-radius: $lm-notification-border-radius !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: $lm-notification-border;
        position: fixed;
        -webkit-box-shadow: $lm-notification-box-shadow;
        -webkit-transition: $lm-notification-transition1;
        transition: $lm-notification-transition1;
        transition: $lm-notification-transition2;
        transition: $lm-notification-transition3;
        overflow: hidden
    }
    .el-notification-large {
        width: $lm-notification-large-width !important;
        padding: $lm-notification-large-padding-top $lm-notification-large-padding-right $lm-notification-large-padding-bottom $lm-notification-large-padding-left !important;
    }
    .el-notification-medium {
        width: $lm-notification-medium-width !important;
        padding: $lm-notification-medium-padding-top $lm-notification-medium-padding-right $lm-notification-medium-padding-bottom $lm-notification-medium-padding-left !important;
    }
    .el-notification-small {
        width: $lm-notification-small-width !important;
        padding: $lm-notification-small-padding-top $lm-notification-small-padding-right $lm-notification-small-padding-bottom $lm-notification-small-padding-left !important;
    }
    .el-notification-min {
        width: $lm-notification-min-width !important;
        padding: $lm-notification-min-padding-top $lm-notification-min-padding-right $lm-notification-min-padding-bottom $lm-notification-min-padding-left !important;
    }

    .el-notification-fade-enter.right {
        right: $lm-notification-fade-right;
        -webkit-transform: $lm-notification-fade-right-transform;
        transform: $lm-notification-fade-right-transform
    }

    .el-notification-fade-enter.left {
        left: $lm-notification-fade-left;
        -webkit-transform: $lm-notification-fade-left-transform;
        transform: $lm-notification-fade-left-transform
    }

    .el-notification-fade-leave-active {
        opacity: 0
    }

    .el-notification.right {
        right: $lm-notification-right
    }

    .el-notification.left {
        left: $lm-notification-left
    }

    .el-notification__group {
        margin-left: $lm-notification-group-margin-left;
        margin-right: $lm-notification-group-margin-right
    }

    .el-notification__title {
        margin: 0;
        font-size: $lm-notification-large-font-size !important;
        font-weight: $lm-notification-title-font-weight !important;
        color: $lm-notification-title-color !important;
    }

    .el-notification__content {
        margin: 6px 0 0;
        text-align: justify;
        font-size: $lm-notification-base-font-size !important;
        color: $lm-notification-content-color !important;
        line-height: $lm-notification-content-line-height !important;
    }

    .el-notification__content p {
        margin: 0
    }

    .el-notification__icon {
        height: $lm-notification-icon-width;
        width: $lm-notification-icon-height;
        font-size: $lm-notification-large-font-size !important;
        color: $lm-notification-icon-color !important;
    }

    .el-notification__closeBtn {
        position: absolute;
        top: $lm-notification-close-btn-top;
        right: $lm-notification-close-btn-right;
        cursor: pointer;
        font-size: $lm-notification-base-font-size !important;
        color: $lm-notification-close-btn-color !important;
    }

    .el-notification__closeBtn:hover {
        color: $lm-notification-close-btn-hover-color !important;
    }
</style>