<template>
</template>
<script>
    import Vue from 'vue';
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                messageValue: {
                    icon: '',
                    content: ''
                },
                messageData: '',
                showIcon: false,   // 是否显示字体图标
                size: 'medium',    // 提示框尺寸。large / medium / small / min（默认 medium）
                showClose: false,   // 是否显示关闭按钮
                center: false,    // 文本是否居中显示
                duration: 3000,   // 消息框自动关闭时间
                closed: false,  // 消息框是否已经关闭
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
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
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
                            if (that.attr.showIcon !== undefined && typeof that.attr.showIcon !== 'boolean') {
                                console.error('showIcon格式错误！');
                                return
                            }
                            if (that.attr.size !== undefined && typeof that.attr.size !== 'string') {
                                console.error('size格式错误！');
                                return
                            }
                            if (that.attr.showClose !== undefined && typeof that.attr.showClose !== 'boolean') {
                                console.error('showClose格式错误！');
                                return
                            }
                            if (that.attr.center !== undefined && typeof that.attr.center !== 'boolean') {
                                console.error('center格式错误！');
                                return
                            }
                            if (that.attr.duration !== undefined && typeof that.attr.duration !== 'number') {
                                console.error('duration格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if(that.attr.showIcon !== undefined) {
                                that.showIcon = that.attr.showIcon;
                            }
                            if(that.attr.center !== undefined) {
                                that.center = that.attr.center;
                            }
                            if(that.attr.showClose !== undefined) {
                                that.showClose = that.attr.showClose;
                            }
                            if(that.attr.duration !== undefined) {
                                that.duration = that.attr.duration;
                            }
                            if(that.attr.size !== undefined) {
                                that.size = that.attr.size;
                            }

                            if (JSON.stringify(that.para.message.$table) === "{}") {
                                // 为内存数据：
                                if(that.para.message.$value.length === 2) {
                                    that.messageValue.content = that.para.message.$value[0];
                                    that.messageValue.icon = that.para.message.$value[1];
                                } else {
                                    console.error('$value参数格式错误！');
                                    return
                                }
                                para.nStep = 'init';
                                dbFlag += 1;
                                break;
                            } else {
                                // 为表格数据：
                                para.nStep = 'getValue';
                                dbFlag += 1;
                                break;
                            }
                        case 'getValue':
                            let tableName;
                            dbData = {};
                            dbData.id = that.para.message.$value;
                            for(let key in that.para.message.$table) {
                                tableName = key;
                                dbData[that.para.message.$table[tableName]] = [];
                            }
                            that.sys.api.recordRead(tableName, dbData, function () {
                                if(dbData[that.para.message.$table[tableName]][0].length === 2) {
                                    that.messageValue.content = dbData[that.para.message.$table[tableName]][0][0];
                                    that.messageValue.icon = dbData[that.para.message.$table[tableName]][0][1];
                                } else {
                                    console.error('$value参数格式错误！');
                                    return
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
                                if(that.showIcon) {
                                    iconClass = that.messageValue.icon;
                                } else {
                                    iconClass = '';
                                }
                                that.messageData = that.$message({
                                    showClose: that.showClose,
                                    duration: that.duration,
                                    center: that.center,
                                    iconClass: iconClass,
                                    message: that.messageValue.content,
                                    onClose: function () {
                                        that.callModuleEventPort('closeEvent', []);
                                    }
                                });

                                // 不同尺寸大小：
                                switch (that.size) {
                                    case 'large':
                                        $('.el-message').addClass('el-message-large');
                                        break;
                                    case 'medium':
                                        $('.el-message').addClass('el-message-medium');
                                        break;
                                    case 'small':
                                        $('.el-message').addClass('el-message-small');
                                        break;
                                    case 'min':
                                        $('.el-message').addClass('el-message-min');
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
            closeMessage() {
                this.messageData.close();
            }
        }
    }

</script>
<style lang="scss">
    .el-message__closeBtn:focus, .el-message__content:focus {
        outline-width: 0
    }

    .el-message {
        min-width: auto;
        font-family: $lm-message-wrap-font-family;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: $lm-message-wrap-border-radius;
        border: $lm-message-wrap-border;
        position: fixed;
        left: $lm-message-left;
        top: $lm-message-top;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        color: $lm-message-wrap-color;
        background-color: $lm-message-wrap-background-color;
        -webkit-transition: $lm-message-transition1;
        transition: $lm-message-transition1;
        transition: $lm-message-transition2;
        transition: $lm-message-transition3;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .el-message-large {
        padding: $lm-message-wrap-large-padding;
        width: $lm-message-wrap-large-width;
    }
    .el-message-medium {
        padding: $lm-message-wrap-medium-padding;
        width: $lm-message-wrap-medium-width;
    }
    .el-message-small {
        padding: $lm-message-wrap-small-padding;
        width: $lm-message-wrap-small-width;
    }
    .el-message-min {
        padding:$lm-message-wrap-min-padding;
        width: $lm-message-wrap-min-width;
    }

    .el-message.is-center {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .el-message.is-closable .el-message__content {
        padding-right: $lm-message-content-padding-right
    }

    .el-message p {
        margin: 0
    }

    .el-message i:first-child {
        margin-right: $lm-message-icon-margin-right;
        color: $lm-message-icon-color
    }

    .el-message__content {
        padding: 0;
        font-size: $lm-message-wrap-font-size;
        line-height: 1
    }

    .el-message__closeBtn {
        position: absolute;
        top: $lm-message-close-btn-top;
        right: $lm-message-close-btn-right;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer;
        color: $lm-message-close-btn-color;
        font-size: $lm-message-wrap-font-size
    }

    .el-message__closeBtn:hover {
        color: $lm-message-close-btn-hover-color
    }

    .el-message-fade-enter, .el-message-fade-leave-active {
        opacity: 0;
        -webkit-transform: translate(-50%, -100%);
        transform: translate(-50%, -100%)
    }
</style>