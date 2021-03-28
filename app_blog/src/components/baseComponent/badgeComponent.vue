<template>
    <div id="badge-wrap">
        <el-badge :value="badgeValue" :max="max" :is-dot="isDot" :hidden="hidden" class="badge-item">
        </el-badge>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                badgeValue: '',
                max: null,
                isDot: false,
                hidden: false,
                showZero: false,
                size: 'medium'   // 徽标尺寸。large / medium / small / min（默认 medium）
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
                            if (that.para.logoValue !== undefined) {
                                if (that.para.logoValue.$table === undefined) {
                                    console.error('$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.logoValue.$table) !== '[object Object]') {
                                    console.error('$table格式错误！');
                                    return
                                }
                                if (that.para.logoValue.$value === undefined) {
                                    console.error('$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.logoValue.$value) !== '[object Array]') {
                                    console.error('$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.max !== undefined && typeof Number(that.attr.max) !== 'number') {
                                console.error('max格式错误！');
                                return
                            }
                            if (that.attr.hidden !== undefined && typeof that.attr.hidden !== 'boolean') {
                                console.error('hidden格式错误！');
                                return
                            }
                            if (that.attr.isDot !== undefined && typeof that.attr.isDot !== 'boolean') {
                                console.error('isDot格式错误！');
                                return
                            }
                            if (that.attr.showZero !== undefined && typeof that.attr.showZero !== 'boolean') {
                                console.error('showZero格式错误！');
                                return
                            }
                            if (that.attr.size !== undefined && typeof that.attr.size !== 'string') {
                                console.error('size格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.max !== undefined) {
                                that.max = that.attr.max;
                            }
                            if (that.attr.hidden !== undefined) {
                                that.hidden = that.attr.hidden;
                            }
                            if (that.attr.isDot !== undefined) {
                                that.isDot = that.attr.isDot;
                            }
                            if (that.attr.showZero !== undefined) {
                                that.showZero = that.attr.showZero;
                            }
                            if (that.attr.size !== undefined) {
                                that.size = that.attr.size;
                            }

                            if (JSON.stringify(that.para.logoValue.$table) === "{}") {
                                // 为内存数据：
                                if (typeof that.para.logoValue.$value[0] === 'number' || typeof that.para.logoValue.$value[0] === 'string') {
                                    that.badgeValue = that.para.logoValue.$value[0];
                                    if (that.attr.max && typeof Number(that.badgeValue) !== 'number') {
                                        console.error('当传入max属性，徽标数必须为number类型！');
                                        return
                                    }
                                } else {
                                    console.error('徽标数格式错误！');
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
                            dbData.id = that.para.logoValue.$value;
                            for (let key in that.para.logoValue.$table) {
                                tableName = key;
                                dbData[that.para.logoValue.$table[tableName]] = [];
                            }
                            that.sys.api.recordRead(tableName, dbData, function () {
                                if (typeof dbData[that.para.logoValue.$table[tableName]][0] === 'number' || typeof dbData[that.para.logoValue.$table[tableName]][0] === 'string') {
                                    that.badgeValue = dbData[that.para.logoValue.$table[tableName]][0];
                                    if (that.attr.max && typeof that.badgeValue !== 'number') {
                                        console.error('当传入max属性，徽标数必须为number类型！');
                                        return
                                    }
                                } else {
                                    console.error('徽标数格式错误！');
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
                                let badgeWrap = document.getElementById('badge-wrap');
                                let $badgeContent = $('#badge-wrap .el-badge__content');
                                switch (that.size) {
                                    case 'large':
                                        $badgeContent.addClass('el-badge-large');
                                        break;
                                    case 'medium':
                                        $badgeContent.addClass('el-badge-medium');
                                        break;
                                    case 'small':
                                        $badgeContent.addClass('el-badge-small');
                                        break;
                                    case 'min':
                                        $badgeContent.addClass('el-badge-min');
                                        break;
                                }
                                if (that.isDot) {
                                    badgeWrap.style.right = '-5px';
                                    badgeWrap.style.top = '-5px';
                                }
                                if (!that.showZero && !that.isDot && Number(that.badgeValue) === 0) {
                                    that.hidden = true;
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
            dataRefresh: function () {
                this.startModule(function () {
                }, function (error) {
                    console.error(error);
                })
            }
        }
    }

</script>
<style lang="scss">
    #badge-wrap {
        position: absolute;
        top: $lm-badge-wrap-top;
        right: $lm-badge-wrap-right;

        .el-badge {
            position: relative;
            vertical-align: middle;
            display: inline-block
        }

        .el-badge__content {
            text-align: center;
            white-space: nowrap;
            color: $lm-badge-content-color !important;
            background-color: $lm-badge-content-background-color !important;
            font-family: $lm-badge-content-font-family !important;
            font-weight: $lm-badge-content-font-weight !important;
            border-radius: $lm-badge-content-border-radius;
            border: $lm-badge-content-border !important;
        }

        .el-badge-large {
            font-size: $lm-badge-content-large-font-size !important;
            padding: $lm-badge-content-large-padding;
            height: $lm-badge-content-large-height;
            line-height: $lm-badge-content-large-line-height !important;
        }
        .el-badge-medium {
            font-size: $lm-badge-content-medium-font-size !important;
            padding: $lm-badge-content-medium-padding;
            height: $lm-badge-content-medium-height;
            line-height: $lm-badge-content-medium-line-height !important;
        }
        .el-badge-small {
            font-size: $lm-badge-content-small-font-size !important;
            padding: $lm-badge-content-small-padding;
            height: $lm-badge-content-small-height;
            line-height: $lm-badge-content-small-line-height !important;
        }
        .el-badge-min {
            font-size: $lm-badge-content-min-font-size !important;
            padding: $lm-badge-content-min-padding;
            height: $lm-badge-content-min-height;
            line-height: $lm-badge-content-min-line-height !important;
        }

        .el-badge__content.is-dot {
            height: $lm-badge-dot-width;
            width: $lm-badge-dot-height;
            padding: 0;
            right: 0;
            border-radius: 50%
        }
    }
</style>