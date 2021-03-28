<template>
    <div id="alert-wrap">
        <el-alert
                :class="{'el-alert-large':size==='large', 'el-alert-medium':size==='medium', 'el-alert-small':size==='small', 'el-alert-min':size==='min'}"
                :title="alertValue.title"
                :description="alertValue.desc"
                :center="center"
                :close-text="closeText"
                :closable="closable"
                @close="closeAlert">
        </el-alert>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                alertValue: {
                    title: '',
                    desc: '',
                    icon: ''
                },
                closable: true,
                center: false,
                closeText: '',
                showIcon: false,
                size: 'medium'
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
                            if (that.para.caution !== undefined) {
                                if (that.para.caution.$table === undefined) {
                                    console.error('$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.caution.$table) !== '[object Object]') {
                                    console.error('$table格式错误！');
                                    return
                                }
                                if (that.para.caution.$value === undefined) {
                                    console.error('$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.caution.$value) !== '[object Array]') {
                                    console.error('$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.closeText !== undefined && typeof that.attr.closeText !== 'string') {
                                console.error('closeText格式错误！');
                                return
                            }
                            if (that.attr.size !== undefined && typeof that.attr.size !== 'string') {
                                console.error('size格式错误！');
                                return
                            }
                            if (that.attr.closable !== undefined && typeof that.attr.closable !== 'boolean') {
                                console.error('closable格式错误！');
                                return
                            }
                            if (that.attr.center !== undefined && typeof that.attr.center !== 'boolean') {
                                console.error('center格式错误！');
                                return
                            }
                            if (that.attr.showIcon !== undefined && typeof that.attr.showIcon !== 'boolean') {
                                console.error('showIcon格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.showIcon !== undefined) {
                                that.showIcon = that.attr.showIcon;
                            }
                            if (that.attr.center !== undefined) {
                                that.center = that.attr.center;
                            }
                            if (that.attr.closable !== undefined) {
                                that.closable = that.attr.closable;
                            }
                            if (that.attr.closeText !== undefined) {
                                that.closeText = that.attr.closeText;
                            }
                            if (that.attr.size !== undefined) {
                                that.size = that.attr.size;
                            }

                            if (JSON.stringify(that.para.caution.$table) === "{}") {
                                // 为内存数据：
                                if (that.para.caution.$value.length === 3) {
                                    that.alertValue.title = that.para.caution.$value[0];
                                    that.alertValue.desc = that.para.caution.$value[1];
                                    that.alertValue.icon = that.para.caution.$value[2];
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
                            dbData.id = that.para.caution.$value;
                            for (let key in that.para.caution.$table) {
                                tableName = key;
                                dbData[that.para.caution.$table[tableName]] = [];
                            }
                            that.sys.api.recordRead(tableName, dbData, function () {
                                if (dbData[that.para.caution.$table[tableName]][0].length === 3) {
                                    that.alertValue.title = dbData[that.para.caution.$table[tableName]][0][0];
                                    that.alertValue.desc = dbData[that.para.caution.$table[tableName]][0][1];
                                    that.alertValue.icon = dbData[that.para.caution.$table[tableName]][0][2];
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
                                if (that.showIcon && that.alertValue.icon) {
                                    let iconStr = "<i class='alert-icon " + that.alertValue.icon + "'></i>";
                                    $("#alert-wrap .el-alert .el-alert__content").before(iconStr);
                                    if (that.alertValue.desc && that.alertValue.title) {
                                        $('#alert-wrap .alert-icon').addClass('el-alert__icon-big');
                                        $('#alert-wrap .el-alert__title').addClass('el-alert__title-big');
                                    } else {
                                        $('#alert-wrap .alert-icon').addClass('el-alert__icon');
                                        $('#alert-wrap .el-alert__icon').css('margin-top', '4px');
                                    }
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
            closeAlert: function () {
                this.callModuleEventPort('closeEvent', []);
            }
        }
    }

</script>
<style lang="scss">
    #alert-wrap {
        .el-alert {
            margin: 0 !important;
            border-radius: $lm-alert-content-border-radius !important;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            position: relative;
            background-color: $lm-alert-background-color;
            overflow: hidden;
            opacity: 1;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-transition: $lm-alert-transition;
            transition: $lm-alert-transition
        }

        .el-alert-large {
            width: $lm-alert-content-large-width !important;
            padding: $lm-alert-content-large-padding !important;
        }
        .el-alert-medium {
            width: $lm-alert-content-medium-width !important;
            padding: $lm-alert-content-medium-padding !important;
        }
        .el-alert-small {
            width: $lm-alert-content-small-width !important;
            padding: $lm-alert-content-small-padding !important;
        }
        .el-alert-min {
            width: $lm-alert-content-min-width !important;
            padding: $lm-alert-content-min-padding !important;
        }

        .el-alert-fade-enter, .el-alert-fade-leave-active {
            opacity: 0
        }

        .el-alert.is-center {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center
        }

        .el-alert--info {
            background-color: $lm-alert-info-background-color !important;
            color: $lm-alert-info-color !important;
        }

        .el-alert--info .el-alert__description {
            color: $lm-alert-info-color !important;
        }

        .el-alert__content {
            display: table-cell;
            padding: $lm-alert-el-content-padding !important;
        }

        .el-alert__icon {
            font-size: $lm-alert-icon-normal-font-size;
            width: $lm-alert-icon-normal-width
        }

        .el-alert__icon-big {
            font-size: $lm-alert-icon-big-font-size;
            width: $lm-alert-icon-big-width
        }

        .el-alert__title.is-bold {
            font-weight: $lm-alert-bold-font-weight
        }

        .el-alert__title {
            font-weight: $lm-alert-normal-font-weight;
            font-size: $lm-alert-title-font-size !important;
            line-height: $lm-alert-title-line-height !important;
        }

        .el-alert__title-big {
            font-weight: $lm-alert-bold-font-weight !important;
        }

        .el-alert .el-alert__description {
            font-size: $lm-alert-description-font-size !important;
            margin: $lm-alert-description-margin !important;
        }

        .el-alert__closebtn {
            opacity: 1;
            position: absolute;
            cursor: pointer;
            color: $lm-alert-close-btn-color;
            font-size: $lm-alert-close-btn-font-size;
            top: $lm-alert-close-btn-top;
            right: $lm-alert-close-btn-right;
        }

        .el-alert__closebtn.is-customed {
            font-style: normal;
            font-size: $lm-alert-close-btn-font-size;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>