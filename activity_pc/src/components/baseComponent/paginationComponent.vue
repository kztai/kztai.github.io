<template>
    <div id="pagination-wrap">
        <el-pagination
                v-if="visible"
                @current-change="pageChange"
                :layout="layout"
                :page-size="pageSize"
                :pager-count="pagerCount"
                :background="background"
                :small="small"
                :current-page.sync="currentPage"
                :prevText="prevText"
                :nextText="nextText"
                :disabled="disabled"
                :total="total">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                currentPage: 1,
                visible: false,
                layout: "prev, pager, next",
                small: false,
                background: false,
                pageSize: 10,
                total: 1,
                simple: false,
                pagerCount: 7,
                prevText: '',
                nextText: '',
                disabled: false

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
            pageChange: function (index) {
                this.callModuleEventPort('currentChangeEvent', [index]);
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
                            if (that.para.currentPage !== undefined) {
                                if (that.para.currentPage.$table === undefined) {
                                    console.error('value的$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.currentPage.$table) !== '[object Object]') {
                                    console.error('value的$table格式错误！');
                                    return
                                }
                                if (that.para.currentPage.$value === undefined) {
                                    console.error('value的$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.currentPage.$value) !== '[object Array]') {
                                    console.error('value的$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.disabled !== undefined && typeof that.attr.disabled !== 'boolean') {
                                console.error('disabled格式错误！');
                                return
                            }
                            if (that.attr.small !== undefined && typeof that.attr.small !== 'boolean') {
                                console.error('small格式错误！');
                                return
                            }
                            if (that.attr.background !== undefined && typeof that.attr.background !== 'boolean') {
                                console.error('background格式错误！');
                                return
                            }
                            if (that.attr.pageSize !== undefined && typeof that.attr.pageSize !== 'number') {
                                console.error('pageSize格式错误！');
                                return
                            }
                            if (that.attr.simple !== undefined && typeof that.attr.simple !== 'boolean') {
                                console.error('simple格式错误！');
                                return
                            }
                            if (that.attr.total !== undefined && typeof that.attr.total !== 'number') {
                                console.error('total格式错误！');
                                return
                            }
                            if (that.attr.pagerCount !== undefined && typeof that.attr.pagerCount !== 'number') {
                                console.error('pagerCount格式错误！');
                                return
                            }
                            if (that.attr.prevText !== undefined && typeof that.attr.prevText !== 'string') {
                                console.error('prevText格式错误！');
                                return
                            }
                            if (that.attr.nextText !== undefined && typeof that.attr.nextText !== 'string') {
                                console.error('nextText格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.disabled !== undefined) {
                                that.disabled = that.attr.disabled;
                            }
                            if (that.attr.small !== undefined) {
                                that.small = that.attr.small;
                            }
                            if (that.attr.background !== undefined) {
                                that.background = that.attr.background;
                            }
                            if (that.attr.pageSize !== undefined) {
                                that.pageSize = that.attr.pageSize;
                            }
                            if (that.attr.pagerCount !== undefined) {
                                that.pagerCount = that.attr.pagerCount;
                            }
                            if (that.attr.simple !== undefined) {
                                that.simple = that.attr.simple;
                            }
                            if (that.attr.total !== undefined) {
                                that.total = that.attr.total;
                            }
                            if (that.attr.prevText !== undefined) {
                                that.prevText = that.attr.prevText;
                            }
                            if (that.attr.nextText !== undefined) {
                                that.nextText = that.attr.nextText;
                            }

                            if (JSON.stringify(that.para.currentPage.$table) === "{}") {
                                // 为内存数据：
                                that.currentPage = that.para.currentPage.$value[0];
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
                            dbData.id = that.para.currentPage.$value;
                            for (let key in that.para.currentPage.$table) {
                                tableName = key;
                                dbData[that.para.currentPage.$table[tableName][0]] = [];
                            }
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.currentPage = dbData[that.para.currentPage.$table[tableName][0]][0];
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'init':
                            if(that.simple) {
                                that.layout = 'prev, jumper, next'
                            }
                            that.visible = true;
                            if(that.disabled && that.simple) {
                                that.$nextTick(function () {
                                    document.querySelector('.el-pagination__jump').className += ' el-pagination__disabled';
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            } else {
                                para.nStep = 'end';
                                dbFlag += 1;
                            }
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
   #pagination-wrap {

        .el-input {
            position: relative;
            font-size: $lm-pagination-base-font-size;
            display: inline-block;
            width: 100%
        }


        .el-input__inner {
            -webkit-appearance: none;
            background-color: $lm-pagination-white-color;
            background-image: none;
            border-radius: $lm-pagination-border-radius;
            border: $lm-pagination-border;
            box-sizing: border-box;
            color: $lm-pagination-regular-color;
            display: inline-block;
            font-size: inherit;
            outline: 0;
            -webkit-transition: $lm-pagination-input-transition;
            transition: $lm-pagination-input-transition;
            width: 100%
        }

        .el-pagination {
            font-family: $lm-pagination-font-family;
            white-space: nowrap;
            padding: $lm-pagination-wrap-padding;
            color: $lm-pagination-text-primary-color;
            font-weight: $lm-pagination-wrap-font-weight
        }

        .el-pagination::after, .el-pagination::before {
            display: table;
            content: ""
        }

        .el-pagination::after {
            clear: both
        }

        .el-pagination button, .el-pagination span:not([class*=suffix]) {
            display: inline-block;
            font-size: $lm-pagination-small-font-size;
            min-width: $lm-pagination-button-min-width;
            height: $lm-pagination-wrap-height;
            line-height: $lm-pagination-wrap-height;
            vertical-align: top;
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }

        .el-pagination .el-input__inner {
            text-align: center;
            -moz-appearance: textfield;
            line-height: normal
        }

        .el-pagination button {
            border: none;
            padding: $lm-pagination-button-padding;
            background: 0 0
        }

        .el-pagination button:focus {
            outline: 0
        }

        .el-pagination button:hover {
            color: $lm-pagination-primary-color
        }

        .el-pagination button:disabled {
            color: $lm-pagination-disabled-color;
            background-color: $lm-pagination-white-color;
            cursor: not-allowed
        }

        .el-pagination .btn-next, .el-pagination .btn-prev {
            background: center center no-repeat $lm-pagination-white-color;
            background-size: $lm-pagination-arrow-background-size;
            cursor: pointer;
            margin: 0;
            color: $lm-pagination-text-primary-color
        }

        .el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon {
            display: block;
            font-size: $lm-pagination-mini-font-size;
            font-weight: $lm-pagination-wrap-font-weight
        }

        .el-pagination .btn-prev {
            padding-right: $lm-pagination-prev-padding-right
        }

        .el-pagination .btn-next {
            padding-left: $lm-pagination-next-padding-left
        }

        .el-pagination .el-pager li.disabled {
            color: $lm-pagination-disabled-color;
            cursor: not-allowed
        }

        .el-pager li, .el-pager li.btn-quicknext:hover, .el-pager li.btn-quickprev:hover {
            cursor: pointer
        }

        .el-pagination--small .btn-next, .el-pagination--small .btn-prev, .el-pagination--small .el-pager li, .el-pagination--small .el-pager li.btn-quicknext, .el-pagination--small .el-pager li.btn-quickprev, .el-pagination--small .el-pager li:last-child {
            border-color: transparent;
            font-size: $lm-pagination-mini-font-size;
            line-height: $lm-pagination-small-wrap-height;
            height: $lm-pagination-small-wrap-height;
            min-width: $lm-pagination-small-wrap-height
        }

        .el-pagination--small .arrow.disabled {
            visibility: hidden
        }

        .el-pagination--small .more::before, .el-pagination--small li.more::before {
            line-height: $lm-pagination-small-icon-line-height
        }

        .el-pagination--small button, .el-pagination--small span:not([class*=suffix]) {
            height: $lm-pagination-small-wrap-height;
            line-height: $lm-pagination-small-wrap-height
        }

        .el-pagination--small .el-pagination__editor, .el-pagination--small .el-pagination__editor.el-input .el-input__inner {
            height: $lm-pagination-small-wrap-height
        }

        .el-pagination__jump {
            margin-left: 0;
            font-weight: $lm-pagination-jumper-font-weight;
            color: $lm-pagination-regular-color;
            .jump_separator, .jump_pageCount {
                display: inline !important;
                font-size: $lm-pagination-small-font-size;
            }
            .jump_separator {
                padding: $lm-pagination-separator-padding;
            }
        }


        .el-pagination__jump .el-input__inner {
            padding: $lm-pagination-input-padding
        }

        .el-pagination__rightwrapper {
            float: right
        }

        .el-pagination__editor {
            line-height: $lm-pagination-editor-line-height;
            padding: $lm-pagination-editor-padding;
            height: $lm-pagination-wrap-height;
            text-align: center;
            margin: $lm-pagination-editor-margin;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border-radius: $lm-pagination-border-radius
        }

        .el-pager, .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev {
            padding: 0
        }

        .el-pagination__editor.el-input {
            width: $lm-pagination-input-width;
        }

        .el-pagination__editor.el-input .el-input__inner {
            height: $lm-pagination-small-wrap-height;
        }

        .el-pagination__editor.el-input:not([class*=is-disabled]) .el-input__inner {
            cursor: pointer;
            &:hover {
                border-color: $lm-pagination-primary-color;
            }
        }

        .el-pagination__disabled .el-input__inner {
            cursor: not-allowed !important;
            color: $lm-pagination-disabled-color !important;
        }

        .el-pagination__editor .el-input__inner::-webkit-inner-spin-button, .el-pagination__editor .el-input__inner::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0
        }

        .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
            margin: $lm-pagination-button-margin;
            background-color: $lm-pagination-background-color;
            color: $lm-pagination-regular-color;
            min-width: $lm-pagination-button-min-width;
            border-radius: $lm-pagination-small-border-radius
        }

        .el-pagination.is-background .btn-next.disabled, .el-pagination.is-background .btn-next:disabled, .el-pagination.is-background .btn-prev.disabled, .el-pagination.is-background .btn-prev:disabled, .el-pagination.is-background .el-pager li.disabled {
            color: $lm-pagination-disabled-color
        }

        .el-pagination.is-background .el-pager li:not(.disabled):hover {
            color: $lm-pagination-primary-color
        }

        .el-pagination.is-background .el-pager li:not(.disabled).active {
            background-color: $lm-pagination-primary-color;
            color: $lm-pagination-white-color
        }

        .el-pagination.is-background.el-pagination--small .btn-next, .el-pagination.is-background.el-pagination--small .btn-prev, .el-pagination.is-background.el-pagination--small .el-pager li {
            margin: $lm-pagination-small-button-margin;
            min-width: $lm-pagination-small-button-min-width
        }

        .el-pager, .el-pager li {
            vertical-align: top;
            display: inline-block;
            margin: 0
        }

        .el-pager {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            list-style: none;
            font-size: 0
        }

        .el-pager .more::before {
            line-height: $lm-pagination-icon-line-height
        }

        .el-pager li {
            padding: $lm-pagination-pager-padding;
            background: $lm-pagination-white-color;
            font-size: $lm-pagination-small-font-size;
            min-width: $lm-pagination-button-min-width;
            height: $lm-pagination-wrap-height;
            line-height: $lm-pagination-wrap-height;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            text-align: center
        }

        .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
            line-height: $lm-pagination-wrap-height;
            color: $lm-pagination-text-primary-color
        }

        .el-pager li.btn-quicknext.disabled, .el-pager li.btn-quickprev.disabled {
            color: $lm-pagination-disabled-color
        }

        .el-pager li.active + li {
            border-left: 0
        }

        .el-pager li:hover {
            color: $lm-pagination-primary-color
        }

        .el-pager li.active {
            color: $lm-pagination-primary-color;
            cursor: default
        }
    }
</style>
