<template>
    <div id="popover-wrap">
        <el-popover
                :title="popoverValue.title"
                :content="popoverValue.desc"
                :word-wrap="wordWrap"
                :trigger="trigger"
                :confirm="confirm"
                :ok-text="okText"
                :cancel-text="cancelText"
                :is-html="isHtml"
                :disabled="disabled"
                :offset="offset"
                :open-delay="openDelay"
                @confirmEvent="getConfirm"
                @cancelEvent="getCancel"
                :placement="placement"
                :reference="reference">
        </el-popover>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                popoverValue: {
                    title: '',
                    desc: '',
                },
                reference: '',
                trigger: 'click',   // 触发方式，可选值为hover（悬停）click（点击）focus（聚焦）,在confirm模式下，只有click有效(默认为click)
                placement: 'bottom',  // Tooltip 的出现位置。top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end(默认为bottom)
                disabled: false,  // 是否禁用提示框(默认为false)
                confirm: false,  // 是否开启对话框模式(默认为false)
                okText: '确定',  // 确定按钮的文字，只在 confirm 模式下有效(默认为“确定”)
                cancelText: '取消',  // 取消按钮的文字，只在 confirm 模式下有效(默认为“取消”)
                offset: 0,    // 出现位置的偏移量(默认为0)
                openDelay: 0,    // 延迟出现，单位毫秒(默认为0)
                wordWrap: false,   // 开启后，超出指定宽度文本将自动换行，并两端对齐(默认为false)
                isHtml: false,   // 是否以HTML标签形式解析((默认为false)
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
            getConfirm: function() {
                this.callModuleEventPort('enterEvent', []);
            },
            getCancel: function() {
                this.callModuleEventPort('cancelEvent', []);
            },
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
                            if (that.para.balloon !== undefined) {
                                if (that.para.balloon.$table === undefined) {
                                    console.error('balloon的$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.balloon.$table) !== '[object Object]') {
                                    console.error('balloon的$table格式错误！');
                                    return
                                }
                                if (that.para.balloon.$value === undefined) {
                                    console.error('balloon的$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.balloon.$value) !== '[object Array]') {
                                    console.error('balloon的$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.trigger !== undefined && typeof that.attr.trigger !== 'string') {
                                console.error('trigger格式错误！');
                                return
                            }
                            if (that.attr.placement !== undefined && typeof that.attr.placement !== 'string') {
                                console.error('placement格式错误！');
                                return
                            }
                            if (that.attr.disabled !== undefined && typeof that.attr.disabled !== 'boolean') {
                                console.error('disabled格式错误！');
                                return
                            }
                            if (that.attr.confirm !== undefined && typeof that.attr.confirm !== 'boolean') {
                                console.error('confirm格式错误！');
                                return
                            }
                            if (that.attr.okText !== undefined && typeof that.attr.okText !== 'string') {
                                console.error('okText格式错误！');
                                return
                            }
                            if (that.attr.cancelText !== undefined && typeof that.attr.cancelText !== 'string') {
                                console.error('cancelText格式错误！');
                                return
                            }
                            if (that.attr.offset !== undefined && typeof that.attr.offset !== 'number') {
                                console.error('offset格式错误！');
                                return
                            }
                            if (that.attr.openDelay !== undefined && typeof that.attr.openDelay !== 'number') {
                                console.error('openDelay格式错误！');
                                return
                            }
                            if (that.attr.transfer !== undefined && typeof that.attr.transfer !== 'boolean') {
                                console.error('transfer格式错误！');
                                return
                            }
                            if (that.attr.wordWrap !== undefined && typeof that.attr.wordWrap !== 'boolean') {
                                console.error('wordWrap格式错误！');
                                return
                            }
                            if (that.attr.isHtml !== undefined && typeof that.attr.isHtml !== 'boolean') {
                                console.error('isHtml格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.trigger !== undefined) {
                                that.trigger = that.attr.trigger;
                            }
                            if (that.attr.placement !== undefined) {
                                that.placement = that.attr.placement;
                            }
                            if (that.attr.disabled !== undefined) {
                                that.disabled = that.attr.disabled;
                            }
                            if (that.attr.confirm !== undefined) {
                                that.confirm = that.attr.confirm;
                            }
                            if (that.attr.okText !== undefined) {
                                that.okText = that.attr.okText;
                            }
                            if (that.attr.cancelText !== undefined) {
                                that.cancelText = that.attr.cancelText;
                            }
                            if (that.attr.offset !== undefined) {
                                that.offset = that.attr.offset;
                            }
                            if (that.attr.openDelay !== undefined) {
                                that.openDelay = that.attr.openDelay;
                            }
                            if (that.attr.transfer !== undefined) {
                                that.transfer = that.attr.transfer;
                            }
                            if (that.attr.wordWrap !== undefined) {
                                that.wordWrap = that.attr.wordWrap;
                            }
                            if (that.attr.isHtml !== undefined) {
                                that.isHtml = that.attr.isHtml;
                            }
                            if (that.attr.reference) {
                                that.reference = that.attr.reference;
                            } else {
                                console.error('属性reference不能为空！');
                                return
                            }

                            if (JSON.stringify(that.para.balloon.$table) === "{}") {
                                // 为内存数据：
                                if (that.para.balloon.$value.length === 2) {
                                    that.popoverValue.title = that.para.balloon.$value[0];
                                    that.popoverValue.desc = that.para.balloon.$value[1];
                                } else {
                                    console.error('$value参数格式错误！');
                                    return
                                }
                                para.nStep = 'end';
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
                            dbData.id = that.para.balloon.$value;
                            for (let key in that.para.balloon.$table) {
                                tableName = key;
                                dbData[that.para.balloon.$table[tableName]] = [];
                            }
                            that.sys.api.recordRead(tableName, dbData, function () {
                                if (dbData[that.para.balloon.$table[tableName]][0].length === 2) {
                                    that.popoverValue.title = dbData[that.para.balloon.$table[tableName]][0][0];
                                    that.popoverValue.desc = dbData[that.para.balloon.$table[tableName]][0][1];
                                } else {
                                    console.error('$value参数格式错误！');
                                    return
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
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
            }
        }
    }

</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    #popover-wrap {
        .el-popper .popper__arrow, .el-popper .popper__arrow::after {
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid
        }

        .el-popper .popper__arrow {
            border-width: $lm-popover-arrow-size;
            -webkit-filter: $lm-popover-arrow-filter;
            filter: $lm-popover-arrow-filter
        }

        .el-popper .popper__arrow::after {
            content: " ";
            border-width: $lm-popover-arrow-size
        }

        .el-popper[x-placement^=top] {
            margin-bottom: #{$lm-popover-arrow-size + 6}
        }

        .el-popper[x-placement^=top] .popper__arrow {
            bottom: -$lm-popover-arrow-size;
            left: 50%;
            margin-right: #{$lm-popover-arrow-size / 2};
            border-top-color: $lm-popover-border-color;
            border-bottom-width: 0
        }

        .el-popper[x-placement^=top] .popper__arrow::after {
            bottom: 1px;
            margin-left: -$lm-popover-arrow-size;
            border-top-color: $lm-popover-white-color;
            border-bottom-width: 0
        }

        .el-popper[x-placement^=bottom] {
            margin-top: #{$lm-popover-arrow-size + 6}
        }

        .el-popper[x-placement^=bottom] .popper__arrow {
            top: -$lm-popover-arrow-size;
            left: 50%;
            margin-right: #{$lm-popover-arrow-size / 2};
            border-top-width: 0;
            border-bottom-color: $lm-popover-border-color
        }

        .el-popper[x-placement^=bottom] .popper__arrow::after {
            top: 1px;
            margin-left: -$lm-popover-arrow-size;
            border-top-width: 0;
            border-bottom-color: $lm-popover-white-color
        }

        .el-popper[x-placement^=right] {
            margin-left: #{$lm-popover-arrow-size + 6}
        }

        .el-popper[x-placement^=right] .popper__arrow {
            top: 50%;
            left: $lm-popover-arrow-size;
            margin-bottom: #{$lm-popover-arrow-size / 2};
            border-right-color: $lm-popover-border-color;
            border-left-width: 0
        }

        .el-popper[x-placement^=right] .popper__arrow::after {
            bottom: -$lm-popover-arrow-size;
            left: 1px;
            border-right-color: $lm-popover-white-color;
            border-left-width: 0
        }

        .el-popper[x-placement^=left] {
            margin-right: #{$lm-popover-arrow-size + 6}
        }

        .el-popper[x-placement^=left] .popper__arrow {
            top: 50%;
            right: -$lm-popover-arrow-size;
            margin-bottom: #{$lm-popover-arrow-size / 2};
            border-right-width: 0;
            border-left-color: $lm-popover-border-color
        }

        .el-popper[x-placement^=left] .popper__arrow::after {
            right: 1px;
            bottom: -$lm-popover-arrow-size;
            margin-left: -$lm-popover-arrow-size;
            border-right-width: 0;
            border-left-color: $lm-popover-white-color
        }

        .el-popover {
            position: absolute;
            background: $lm-popover-background-color;
            min-width: $lm-popover-min-width;
            width: $lm-popover-width;
            border-radius: $lm-popover-border-radius;
            border: $lm-popover-border-width $lm-popover-border-style $lm-popover-border-color;
            padding: $lm-popover-wrap-padding;
            z-index: 2000;
            color: $lm-popover-text-regular-color;
            line-height: $lm-popover-line-height;
            text-align: justify;
            font-family: $lm-popover-font-family;
            font-size: $lm-popover-base-font-size;
            -webkit-box-shadow: $lm-popover-box-shadow;
            box-shadow: $lm-popover-box-shadow
        }

        .el-popover .popover-content {
            overflow-x: hidden
        }

        .el-popover .content-word-nowrap {
            white-space: nowrap;
            overflow-x: auto
        }

        .el-popover--plain {
            padding: $lm-popover-plain-padding
        }

        .el-popover__title {
            color: $lm-popover-text-primary-color;
            font-size: $lm-popover-large-font-size;
            line-height: 1;
            margin-bottom: $lm-popover-title-margin-bottom;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
        }

        .el-popover:focus, .el-popover:focus:active, .el-popover__reference:focus:hover, .el-popover__reference:focus:not(.focusing) {
            outline-width: 0
        }

        .el-popover .btns {
            margin-top: $lm-popover-btns-margin-top;
            overflow: hidden
        }

        .el-popover .btns .cancel-btn, .el-popover .btns .confirm-btn {
            float: right;
            font-size: $lm-popover-small-font-size;
            line-height: $lm-popover-btn-line-height;
            border-radius: $lm-popover-border-radius;
            cursor: pointer
        }

        .el-popover .btns .confirm-btn {
            margin-left: $lm-popover-confirm-btn-margin-left;
            background-color: $lm-popover-primary-color;
            color: $lm-popover-white-color;
            padding: $lm-popover-confirm-btn-padding
        }

        .el-popover .btns .cancel-btn {
            color: $lm-popover-primary-color
        }
    }
</style>