<template>
    <div id="collapse-wrap">
        <el-collapse :data="collapseValue" :accordion="accordion" :icon-class="icon" :props="defaultProps" @node-click="collapseClick">
        </el-collapse>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                accordion: false,
                icon: '',
                size: 'medium',
                collapseValue: [],
                defaultProps: {
                    children: 'children',
                    label: 'label',
                    content: 'content',
                    collapseTable: 'collapseTable',
                    collapseId: 'collapseId'
                },
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
            collapseClick(val) {
                this.callModuleEventPort('changeEvent', [val.collapseId, val.collapseTable, val.label]);
            },
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0
                };
                that.mac = mac.mac;

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            that.activeNames = [];
                            that.collapseValue = [];
                            that.treeNodeData = {
                                id: {},
                                table: {}
                            };

                            // 判断para传值合法性：
                            if (that.para.foldData !== undefined) {
                                if (that.para.foldData.$table === undefined) {
                                    console.error('$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.foldData.$table) !== '[object Object]') {
                                    console.error('$table格式错误！');
                                    return
                                }
                                if (that.para.foldData.$value === undefined) {
                                    console.error('$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.foldData.$value) !== '[object Array]') {
                                    console.error('$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.accordion !== undefined && typeof that.attr.accordion !== 'boolean') {
                                console.error('accordion格式错误！');
                                return
                            }
                            if (that.attr.icon !== undefined && typeof that.attr.icon !== 'string') {
                                console.error('icon格式错误！');
                                return
                            }
                            if (that.attr.size !== undefined && typeof that.attr.size !== 'string') {
                                console.error('size格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.accordion !== undefined) {
                                that.accordion = that.attr.accordion;
                            }
                            if (that.attr.size !== undefined) {
                                that.size = that.attr.size;
                            }
                            if (that.attr.icon !== undefined) {
                                that.icon = that.attr.icon;
                            }

                            // 为表格数据：
                            para.nStep = 'getValue';
                            dbFlag += 1;
                            break;
                        case 'getValue':
                            this.createTreeData(that.para.foldData.$table, null, function (result) {
                               that.collapseValue = result;
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'init':
                            this.$nextTick(function () {
                                switch (that.size) {
                                    case 'large':
                                        $('#collapse-wrap').addClass('collapse-wrap-large');
                                        break;
                                    case 'medium':
                                        $('#collapse-wrap').addClass('collapse-wrap-medium');
                                        break;
                                    case 'small':
                                        $('#collapse-wrap').addClass('collapse-wrap-small');
                                        break;
                                    case 'min':
                                        $('#collapse-wrap').addClass('collapse-wrap-min');
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
            createTreeData: function (data, parentRecord, successCallBack, errorCallBack) {
                let $this = this;
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0,
                        i: 0,
                        typeObj: {}
                    };
                    successCallBack = null
                }
                let para = errorCallBack,
                    dbFlag = 0;
                while (1) {
                    dbFlag = 0;
                    console.log('para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            para.treeData = [];
                            para.num = 0;
                            para.tableNameArr = Object.keys(data);
                            para.nStep = 'queryTableData';
                            dbFlag++;
                            break;
                        case 'queryTableData':
                            if (para.num < para.tableNameArr.length) {
                                if (para.tableNameArr[para.num] === '$parentName') {
                                    para.num++;
                                    dbFlag++;
                                    break
                                }
                                para.fieldName = data[para.tableNameArr[para.num]].$fieldName;
                                para.tableData = {};
                                para.tableData[$this.mac.fd.id] = [];
                                for(let i = 0; i < para.fieldName.length; i++) {
                                    para.tableData[para.fieldName[i]] = [];
                                }
                                para.condition = null;
                                para.parentRecord = '';
                                if (parentRecord === null) {
                                    if ($this.para.foldData.$value.parentRecord) {
                                        para.condition = $this.para.foldData.$value.condition;
                                        para.parentRecord = $this.para.foldData.$value.parentRecord
                                    } else {
                                        para.condition = $this.mac.fd.id + '=[' + $this.para.foldData.$value + ']'
                                    }
                                } else {
                                    para.parentRecord = parentRecord
                                }
                                $this.sys.api.recordQuery(para.tableNameArr[para.num], para.parentRecord, para.condition, para.tableData, function (result) {
                                    para.treeDataNum = 0;
                                    para.nStep = 'fieldType';
                                    if (++dbFlag === 2) {
                                        $this.createTreeData(data, parentRecord, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallback)
                            } else {

                            }
                            break;
                        case 'fieldType':
                            if(para.i > para.fieldName.length - 1) {
                                para.i = 0;
                                para.nStep = 'setTreeData';
                                dbFlag += 1;
                                break;
                            }

                            if(para.i===0) {
                                para.typeObj[para.fieldName[para.i]] = 1;
                            } else {
                                para.typeObj[para.fieldName[para.i]] = 7;
                            }
                            para.i++;
                            para.nStep = 'fieldType';
                            dbFlag++;

                            // $this.sys.api.typeofTable(para.tableNameArr[para.num], para.fieldName[para.i], function (result) {
                            //     para.typeObj[para.fieldName[para.i]] = result;
                            //     para.i++;
                            //     para.nStep = 'fieldType';
                            //     if (++dbFlag === 2) {
                            //         $this.createTreeData(data, parentRecord, successCallBack, errorCallBack)
                            //     }
                            // }, function () {
                            // });
                            break;
                        case 'setTreeData':
                            if (para.treeDataNum < para.tableData[$this.mac.fd.id].length) {
                                let label;
                                let content;
                                for(let j = 0; j < para.fieldName.length; j++) {
                                    if(para.typeObj[para.fieldName[j]] == 1) {
                                        label = para.tableData[para.fieldName[j]][para.treeDataNum];
                                    } else if(para.typeObj[para.fieldName[j]] == 7) {
                                        content = para.tableData[para.fieldName[j]][para.treeDataNum];
                                    }
                                }

                                para.treeNode = {
                                    collapseId: para.tableData[$this.mac.fd.id][para.treeDataNum],
                                    collapseTable: para.tableNameArr[para.num],
                                    label: label,
                                    content: content,
                                    children: []
                                };

                                para.subTable = Object.keys(data[para.tableNameArr[para.num]]);
                                if (para.subTable.length > 1) {    // 有子表
                                    para.subTableNum = 0;
                                    para.nStep = 'setSubData'
                                } else {// 无子表
                                    para.treeData.push(para.treeNode);
                                    para.treeDataNum++
                                }
                                dbFlag++
                            } else {
                                para.nStep = 'end';
                                dbFlag++
                            }
                            break;
                        case 'setSubData':
                            if (para.subTableNum < para.subTable.length) {
                                if (para.subTable[para.subTableNum] === '$fieldName') {
                                    para.subTableNum++;
                                    dbFlag++;
                                    break
                                }
                                let subPara = {};
                                subPara[para.subTable[para.subTableNum]] = data[para.tableNameArr[para.num]][para.subTable[para.subTableNum]];
                                $this.createTreeData(subPara, [para.tableData[$this.mac.fd.id][para.treeDataNum]], function (result) {
                                    para.treeNode.children = para.treeNode.children.concat(result);
                                    para.subTableNum++;
                                    if (++dbFlag === 2) {
                                        $this.createTreeData(data, parentRecord, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            } else {
                                para.treeData.push(para.treeNode);
                                para.treeDataNum++;
                                para.nStep = 'setTreeData';
                                dbFlag++
                            }
                            break;
                        case 'end':
                            para.successCallBack(para.treeData);
                            break
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
        }
    }

</script>
<style lang="scss">
    .collapse-wrap-large {
        width: $lm-collapse-wrap-large-width;
    }

    .collapse-wrap-medium {
        width: $lm-collapse-wrap-medium-width;
    }

    .collapse-wrap-small {
        width: $lm-collapse-wrap-small-width;
    }

    .collapse-wrap-min {
        width: $lm-collapse-wrap-min-width;
    }

    #collapse-wrap {
        font-family: $lm-collapse-font-family;

        .el-fade-in-enter, .el-fade-in-leave-active, .el-fade-in-linear-enter, .el-fade-in-linear-leave, .el-fade-in-linear-leave-active, .fade-in-linear-enter, .fade-in-linear-leave, .fade-in-linear-leave-active {
            opacity: 0
        }

        .fade-in-linear-enter-active, .fade-in-linear-leave-active {
            -webkit-transition: $lm-collapse-fade-linear-transition;
            transition: $lm-collapse-fade-linear-transition
        }

        .el-fade-in-linear-enter-active, .el-fade-in-linear-leave-active {
            -webkit-transition: $lm-collapse-fade-linear-transition;
            transition: $lm-collapse-fade-linear-transition
        }

        .el-fade-in-enter-active, .el-fade-in-leave-active {
            -webkit-transition: $lm-collapse-fade-in-transition;
            transition: $lm-collapse-fade-in-transition
        }

        .el-zoom-in-center-enter-active, .el-zoom-in-center-leave-active {
            -webkit-transition: $lm-collapse-zoom-in-transition;
            transition: $lm-collapse-zoom-in-transition
        }

        .el-zoom-in-center-enter, .el-zoom-in-center-leave-active {
            opacity: 0;
            -webkit-transform: scaleX(0);
            transform: scaleX(0)
        }

        .el-zoom-in-top-enter-active, .el-zoom-in-top-leave-active {
            opacity: 1;
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transition: $lm-collapse-md-fade-transition1;
            transition: $lm-collapse-md-fade-transition1;
            transition: $lm-collapse-md-fade-transition2;
            transition: $lm-collapse-md-fade-transition3;
            -webkit-transform-origin: center top;
            transform-origin: center top
        }

        .el-zoom-in-top-enter, .el-zoom-in-top-leave-active {
            opacity: 0;
            -webkit-transform: scaleY(0);
            transform: scaleY(0)
        }

        .el-zoom-in-bottom-enter-active, .el-zoom-in-bottom-leave-active {
            opacity: 1;
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transition: $lm-collapse-md-fade-transition1;
            transition: $lm-collapse-md-fade-transition1;
            transition: $lm-collapse-md-fade-transition2;
            transition: $lm-collapse-md-fade-transition3;
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom
        }

        .el-zoom-in-bottom-enter, .el-zoom-in-bottom-leave-active {
            opacity: 0;
            -webkit-transform: scaleY(0);
            transform: scaleY(0)
        }

        .el-zoom-in-left-enter-active, .el-zoom-in-left-leave-active {
            opacity: 1;
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
            -webkit-transition: $lm-collapse-md-fade-transition1;
            transition: $lm-collapse-md-fade-transition1;
            transition: $lm-collapse-md-fade-transition2;
            transition: $lm-collapse-md-fade-transition3;
            -webkit-transform-origin: top left;
            transform-origin: top left
        }

        .el-zoom-in-left-enter, .el-zoom-in-left-leave-active {
            opacity: 0;
            -webkit-transform: scale(.45, .45);
            transform: scale(.45, .45)
        }

        .collapse-transition {
            -webkit-transition: $lm-collapse-transition;
            transition: $lm-collapse-transition
        }

        .horizontal-collapse-transition {
            -webkit-transition: $lm-collapse-horizontal-transition;
            transition: $lm-collapse-horizontal-transition
        }

        .el-list-enter-active, .el-list-leave-active {
            -webkit-transition: $lm-collapse-list-transition;
            transition: $lm-collapse-list-transition
        }

        .el-list-enter, .el-list-leave-active {
            opacity: 0;
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px)
        }

        .el-opacity-transition {
            -webkit-transition: $lm-collapse-opacity-transition;
            transition: $lm-collapse-opacity-transition
        }


        .lm-title-float {
            background-color: $lm-collapse-title-background-color;
            padding: $lm-collapse-title-padding
        }

        .lm-content-wrap {
            line-height: $lm-collapse-large-line-height;
            font-size: $lm-collapse-base-font-size;
            border: $lm-collapse-border;
            border-top: none;
            overflow: hidden;
            white-space: normal;
            word-break: break-all;
            padding: $lm-collapse-wrap-padding;
        }

        .el-tree {
            position: relative;
            cursor: default;
            background: $lm-collapse-content-background-color;
            color: $lm-collapse-text-regular-color
        }

        .el-tree__empty-block {
            position: relative;
            min-height: $lm-collapse-empty-min-height;
            text-align: center;
            width: 100%;
            height: 100%
        }

        .el-tree__empty-text {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            color: $lm-collapse-text-secondary-color
        }

        .el-tree-node {
            white-space: nowrap;
            outline: 0;
            margin-bottom: $lm-collapse-item-margin-bottom
        }

        .el-tree-node__content {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding-right: $lm-collapse-content-padding-right;
            padding-top: $lm-collapse-content-padding-top;
            padding-bottom: $lm-collapse-content-padding-top;
            cursor: pointer;
            font-weight: $lm-collapse-base-font-weight;
        }

        .el-tree-node__content:first-child {
            padding-top: 0
        }

        .el-tree.is-dragging .el-tree-node__content {
            cursor: move
        }

        .el-tree.is-dragging .el-tree-node__content * {
            pointer-events: none
        }

        .el-tree.is-dragging.is-drop-not-allow .el-tree-node__content {
            cursor: not-allowed
        }

        .el-tree-node__expand-icon {
            cursor: pointer;
            color: $lm-collapse-icon-color;
            font-size: $lm-collapse-base-font-size;
            margin-right: $lm-collapse-icon-margin-right;
            -webkit-transform: rotate(0);
            transform: rotate(0);
            -webkit-transition: $lm-collapse-icon-transition1;
            transition: $lm-collapse-icon-transition1;
            transition: $lm-collapse-icon-transition2;
            transition: $lm-collapse-icon-transition3
        }

        .el-tree-node__expand-icon.expanded {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg)
        }

        .el-tree-node__label {
            font-size: $lm-collapse-large-font-size;
        }

        .el-tree-node > .el-tree-node__children {
            overflow: hidden;
            background-color: transparent
        }

        .el-tree-node.is-expanded > .el-tree-node__children {
            display: block
        }
    }
</style>