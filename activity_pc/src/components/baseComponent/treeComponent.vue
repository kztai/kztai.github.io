<template>
    <div class="tree_component">
        <div
                v-if="attrData.headerIsShow"
                :class="{'tree-title': true, 'tree-title-medium': attrData.size === 'medium', 'tree-title-small': attrData.size === 'small', 'tree-title-mini': attrData.size === 'mini'}"
                :title="attrData.title"
                :style="{paddingRight: (attrData.addButtonIsShow || attrData.delButtonIsShow || attrData.refreshButtonIsShow) ? '5px' : ''}">
            <div v-if="attrData.refreshButtonIsShow" class="tree-title-button el-icon-refresh" title="刷新"
                 @click="headerButtonClick(3)"></div>
            <div v-if="attrData.delButtonIsShow" class="tree-title-button el-icon-minus" title="删除"
                 @click="headerButtonClick(2)"></div>
            <div v-if="attrData.addButtonIsShow" class="tree-title-button el-icon-plus" title="新增"
                 @click="headerButtonClick(1)"></div>
            <span>{{attrData.title}}</span>
        </div>
        <div :class="{'treelist-content': true, 'treelist-content-height': attrData.headerIsShow}" ref="mytreeBox">
            <div style="overflow: auto; height: 100%">
                <el-tree
                        ref="mytree"
                        class="treelist-content-tree"
                        :empty-text="attrData.emptyText"
                        :data="treeData"
                        :default-expand-all="attrData.defaultExpandAll"
                        :default-expanded-keys="setKey"
                        :indent="attrData.indent"
                        :expand-on-click-node="attrData.expandOnClickNode"
                        :highlight-current="true"
                        :show-checkbox="attrData.showCheckbox"
                        @mousedown.native=""
                        @node-click="elementLightEvent"
                        @node-expand="nodeOpen"
                        @node-collapse="nodeClose"
                        node-key="id">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span
                            :class="{'tree-node-medium': attrData.size === 'medium', 'tree-node-small': attrData.size === 'small', 'tree-node-mini': attrData.size === 'mini'}"
                            :data-drag="attrData.drag ? attrData.nodrag ? attrData.nodrag.indexOf(data.id) == -1?'true' : 'false' : 'true' : false"
                            :style="{color: attrData.nodrag?attrData.nodrag.indexOf(data.id) != -1?attrData.nodragColor?attrData.nodragColor:'':attrData.color?attrData.color:'':'', cursor: attrData.drag?(attrData.nodrag?attrData.nodrag.indexOf(data.id) == -1?true:false:true)?'pointer':'no-drop':'pointer'}">
                        {{ node.label }}
                    </span>
                </span>
                </el-tree>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tree',
        data: function () {
            return {
                pvt_isSubModuleStarted: false,
                setKey: [],
                setKeySave: [],
                emptyText: '暂无数据',
                expandOnClickNode: true,
                indent: 16,
                defaultTreesData: {
                    para: {
                        treeData: {
                            $table: '',
                            $field: [],
                            $value: [{
                                id: 'a1',
                                parentRecordid: '',
                                label: '一级一',
                                tableName: '',
                                children: [
                                    {
                                        id: 'a2',
                                        parentRecordid: '',
                                        label: '二级一',
                                        tableName: '',
                                        children: [
                                            {
                                                id: 'a3',
                                                parentRecordid: '',
                                                label: '三级一',
                                                tableName: ''
                                            }
                                        ]
                                    }
                                ]
                            }]
                        },
                        parentTable: {
                            $table: '',
                            $field: [],
                            $value: []
                        }
                    },
                    attr: {
                        title: '树列表标题',
                        headerIsShow: true,
                        emptyText: '暂无数据',
                        expandOnClickNode: true,
                        indent: 16,
                        defaultExpandAll: false,
                        showCheckbox: false,
                        drag: false,
                        nodrag: [],
                        nodragColor: '#999',
                        color: '',
                        size: 'small',
                        defaultChecked: {id: '', table: ''},
                        addButtonIsShow: true,
                        delButtonIsShow: true,
                        refreshButtonIsShow: true,
                        cursorIsShow: false
                    }
                },
                treeData: [],
                checkedNode: '',
                isRefresh: true
            }
        },
        inject: ['sys'],
        props: ['refId', 'para', 'attr'],
        watch: {
            para: {
                handler: function (val, oldVal) {
                    let $this = this
                    if (val && val.$api && val.$isShow && val.$isMounted && !$this.$lodash.isEqual(val, oldVal)) {
                        Object.assign($this, $this.sys.lib)
                        $this.pvt_isSubModuleStarted = true
                        $this.startModule(function () {
                            setTimeout(function () {
                                if ($this.$parent.subModuleActivatedEvent) {
                                    $this.$parent.subModuleActivatedEvent($this.refId)
                                }
                            }, 0)
                        }, function () {

                        })
                    } else if (oldVal) {
                        setTimeout(function () {
                            if ($this.$parent.subModuleActivatedEvent) {
                                $this.$parent.subModuleActivatedEvent($this.refId)
                            }
                        }, 0)
                    }
                },
                deep: true,
                immediate: true
            }
        },
        computed: {
            paraData: function () {
                if (this.para !== undefined) {
                    this.defaultTreesData.para = this.para
                }
                return this.defaultTreesData.para
            },
            attrData: function () {
                if (this.attr !== undefined) {
                    for (let i in this.defaultTreesData.attr) {
                        if (this.attr[i] !== undefined) {
                            this.defaultTreesData.attr[i] = this.attr[i]
                        }
                    }
                }
                return this.defaultTreesData.attr
            }
        },
        components: {},
        methods: {
            elementLightEvent: function () {
                let $this = this
                $this.checkedNode = $this.$refs.mytree.getCurrentNode()
                let tableData = {
                    $table: $this.checkedNode.tableName,
                    $field: [$this.checkedNode.tableField],
                    $value: [$this.checkedNode.tableId]
                }
                if ($this.para.treeData.$table === '') {
                    tableData = {
                        $table: '',
                        $field: [],
                        $value: [arguments[0].id]
                    }
                }
                $this.callModuleEventPort('elementLightEvent', [tableData, arguments[0].label])
            },
            nodeOpen: function (nodeData) {
                let $this = this
                $this.setKeySave.push(nodeData)
                if ($this.attr && !$this.attr.drag) {
                    return
                }
                setTimeout(function () {
                    $('.custom-tree-node span[data-drag]').each(function () {
                        if (!$(this).hasClass('ui-draggable') && JSON.parse($(this).attr('data-drag'))) {
                            $(this).draggable({
                                helper: 'clone',
                                start: function () {
                                    $(this).click()
                                    let tableData = {
                                        $table: $this.$refs.mytree.getCurrentNode().tableName,
                                        $field: [$this.$refs.mytree.getCurrentNode().tableField],
                                        $value: [$this.$refs.mytree.getCurrentNode().tableId]
                                    }
                                    if ($this.para.treeData.$table === '') {
                                        tableData = {
                                            $table: '',
                                            $field: [],
                                            $value: [$this.$refs.mytree.getCurrentNode().id]
                                        }
                                    }
                                    $this.callModuleEventPort('listDragStartEvent', [tableData, arguments[1].helper[0].innerHTML, $this.$refs.mytree.getCurrentNode()])
                                }
                            })
                        }
                    })
                }, 0)
            },
            nodeClose: function (nodeData) {
                let $this = this
                if ($this.setKeySave.indexOf(nodeData) !== -1) {
                    $this.setKeySave.splice($this.setKeySave.indexOf(nodeData), 1)
                }
            },
            listRefresh: function (id, table, successCallBack, errorCallBack) {
                let $this = this
                this.startModule(function () {
                    setTimeout(function () {
                        $this.setChecked(id, table)
                    }, 0)
                    successCallBack()
                }, errorCallBack)
            },
            setChecked: function (id, table) {
                let $this = this
                $this.queryData($this.treeData, id, table)
            },
            queryData: function (data, id, table) {
                let $this = this
                for (let i in data) {
                    if (table !== '') {
                        if (data[i].tableName === table && data[i].tableId === id) {
                            $this.checkedNode = data[i]
                            $this.$refs.mytree.setCurrentNode(data[i])
                            $this.setKey = [data[i].id]
                            $this.setKeySave.forEach(function (val) {
                                $this.setKey.push(val.id)
                            })
                            let tableData = {
                                $table: table,
                                $field: [],
                                $value: [id]
                            }
                            $this.callModuleEventPort('elementLightEvent', [tableData, data[i].label])
                        } else if (data[i].children) {
                            $this.queryData(data[i].children, id, table)
                        }
                    } else {
                        if (data[i].id === id) {
                            $this.checkedNode = data[i]
                            $this.$refs.mytree.setCurrentNode(data[i])
                            $this.setKey = [data[i].id]
                            $this.setKeySave.forEach(function (val) {
                                $this.setKey.push(val.id)
                            })
                            let tableData = {
                                $table: '',
                                $field: [],
                                $value: [id]
                            }
                            $this.callModuleEventPort('elementLightEvent', [tableData, data[i].label])
                        } else if (data[i].children) {
                            $this.queryData(data[i].children, id, table)
                        }
                    }
                }
            },
            headerButtonClick: function (index) {
                let $this = this
                if (index === 1) {
                    $this.callModuleEventPort('listAddDataEvent', [])
                } else if (index === 2) {
                    $this.callModuleEventPort('listDelDataEvent', [])
                } else if (index === 3) {
                    $this.callModuleEventPort('listRefreshEvent', [])
                }
            },
            //启动
            startModule: function (successCallBack, errorCallback) {
                let $this = this
                $this.mac = mac.mac
                if ($this.paraData.treeData.$table.length === 0 && $this.paraData.treeData.$value.length === 0) {
                    $this.callModuleEventPort('elementLightEvent', ['', ''])
                }
                //生成结构体
                if ($this.paraData.treeData.$table.length == 0) {
                    //默认数据
                    $this.treeData = $this.paraData.treeData.$value.length == 0 ? undefined : $this.paraData.treeData.$value
                } else if ($this.paraData.parentTable && $this.paraData.parentTable.$value.length > 0) {
                    //多表数据
                    $this.treeData = []
                    let createTreeData = function (parentTable, parentTableValue, condition) {
                        let treeArr = []
                        for (let i in $this.paraData.parentTable.$value) {
                            if ($this.paraData.parentTable.$value[i].parentTable == parentTable) {
                                for (let k in parentTableValue) {
                                    let tableData = {}
                                    $this.sys.api.recordQuery($this.paraData.parentTable.$value[i].table, [parentTableValue[k]], condition, tableData, function (result) {
                                        for (let j in tableData.id) {
                                            treeArr.push({
                                                id: $this.paraData.parentTable.$value[i].table + tableData[$this.mac.fd.id][j],
                                                parentRecordid: parentTableValue[k],
                                                label: tableData[$this.paraData.parentTable.$value[i].field][j],
                                                tableName: $this.paraData.parentTable.$value[i].table,
                                                tableId: tableData[$this.mac.fd.id][j],
                                                tableField: $this.paraData.parentTable.$value[i].field,
                                                children: createTreeData($this.paraData.parentTable.$value[i].table, [tableData[$this.mac.fd.id][j]], null)
                                            })
                                        }
                                    }, function (error) {
                                        console.log(error)
                                    })
                                }
                            }
                        }
                        return treeArr
                    }
                    $this.treeData = createTreeData('', [$this.paraData.treeData.$value.parentRecord ? $this.paraData.treeData.$value.parentRecord : ''], Array.isArray($this.paraData.treeData.$value) ? ($this.mac.fd.id + '=' + JSON.stringify($this.paraData.treeData.$value)) : $this.paraData.treeData.$value.condition)
                } else if ($this.paraData.treeData.$table != '' && $this.paraData.treeData.$field.length == 2) {
                    //嵌套表数据
                    $this.treeData = []
                    let treeTableData = {}
                    $this.sys.api.recordQuery($this.paraData.treeData.$table, $this.paraData.treeData.$value.parentRecord ? $this.paraData.treeData.$value.parentRecord : '', Array.isArray($this.paraData.treeData.$value)? null : $this.paraData.treeData.$value.condition , treeTableData, function (result) {
                        let createTreeData = function (arr) {
                            let treeArr = []
                            if (arr === []) {
                                return arr
                            }
                            for (let i in arr) {
                                let treeNodesArr = []
                                for (let j in treeTableData[$this.mac.fd.id]) {
                                    if ((treeTableData[$this.paraData.treeData.$field[1]][j] === treeTableData[$this.paraData.treeData.$field[0]][treeTableData[$this.mac.fd.id].indexOf(arr[i])] || treeTableData[$this.paraData.treeData.$field[1]][j] === treeTableData[$this.mac.fd.id][treeTableData[$this.mac.fd.id].indexOf(arr[i])]) && treeTableData[$this.paraData.treeData.$field[0]][j] !== treeTableData[$this.paraData.treeData.$field[0]][treeTableData[$this.mac.fd.id].indexOf(arr[i])]) {
                                        treeNodesArr.push(treeTableData[$this.mac.fd.id][j])
                                    }
                                }
                                treeArr.push({
                                    id: arr[i],
                                    parentRecordid: '',
                                    label: treeTableData[$this.paraData.treeData.$field[0]][treeTableData[$this.mac.fd.id].indexOf(arr[i])],
                                    tableName: $this.paraData.treeData.$table,
                                    tableId: arr[i],
                                    tableField: $this.paraData.treeData.$field[0],
                                    children: createTreeData(treeNodesArr)
                                })
                            }
                            return treeArr
                        }
                        if (Array.isArray($this.paraData.treeData.$value)) {
                            $this.treeData = createTreeData($this.paraData.treeData.$value)
                        } else {
                            let idArrs = []
                            treeTableData[$this.mac.fd.id].forEach(function (val, index) {
                                if (treeTableData[$this.paraData.treeData.$field[1]][index] === '') {
                                    idArrs.push(val)
                                }
                            })
                            $this.treeData = createTreeData(idArrs)
                        }
                    }, function (error) {
                        console.log(error)
                    })
                }
                if ($this.attrData.drag === true) {
                    setTimeout(function () {
                        $('.custom-tree-node span[data-drag]').each(function () {
                            if (!$(this).hasClass('ui-draggable') && JSON.parse($(this).attr('data-drag'))) {
                                $(this).draggable({
                                    helper: 'clone',
                                    start: function () {
                                        $(this).click()
                                        let tableData = {
                                            $table: $this.$refs.mytree.getCurrentNode().tableName,
                                            $field: [$this.$refs.mytree.getCurrentNode().tableField],
                                            $value: [$this.$refs.mytree.getCurrentNode().tableId]
                                        }
                                        if ($this.para.treeData.$table === '') {
                                            tableData = {
                                                $table: '',
                                                $field: [],
                                                $value: [$this.$refs.mytree.getCurrentNode().id]
                                            }
                                        }
                                        $this.callModuleEventPort('listDragStartEvent', [tableData, arguments[1].helper[0].innerHTML])
                                    }
                                })
                            }
                        })
                        setTimeout(function () {
                            if ($this.attrData.cursorIsShow) {
                                if ($this.attrData.defaultChecked.id === '') {
                                    if ($this.treeData[0]) {
                                        $this.setChecked($this.treeData[0].id, '')
                                    }
                                } else {
                                    $this.setChecked($this.attrData.defaultChecked.id, $this.attrData.defaultChecked.table)
                                }
                            }
                        })
                        successCallBack()
                    }, 0)
                } else {
                    setTimeout(function () {
                        if ($this.attrData.cursorIsShow) {
                            if ($this.attrData.defaultChecked.id === '') {
                                if ($this.treeData[0]) {
                                    $this.setChecked($this.treeData[0].id, '')
                                }
                            } else {
                                $this.setChecked($this.attrData.defaultChecked.id, $this.attrData.defaultChecked.table)
                            }
                        }
                    })
                    successCallBack()
                }
            }
        },
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true
            }
        }
    }
</script>

<style scoped>
    .tree-title {
        background-color: #409EFF;
        text-align: left;
        color: #fff;
        font-size: 16px;
        height: 38px;
        box-sizing: border-box;
        padding: 3px 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 32px;
    }

    .tree-title-medium {
        font-size: 20px;
    }

    .tree-title-small {
        font-size: 16px;
    }

    .tree-title-mini {
        font-size: 14px;
    }

    .tree-title-button {
        display: inline-block;
        position: relative;
        font-size: 12px;
        color: #fff;
        padding: 0 5px;
        margin-right: 2px;
        margin-top: 3px;
        border-radius: 4px;
        border: 1px solid #fff;
        background-color: #409EFF;
        cursor: pointer;
        float: right;
        line-height: 24px;
    }

    .tree-title-button:hover {
        background-color: #5aabff;
    }
    .tree_component {
        min-width: 120px;
        height: 100%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .treelist-content {
        /*overflow: auto;*/
        height: 100%;
        position: relative;
    }
    .treelist-content-height {
        height: calc(100% - 38px);
    }
    .treelist-content-tree {
        position: absolute;
    }
    .el-tree {
        position: static;
    }

    .el-tree-node > .el-tree-node__children {
        overflow: inherit;
    }

    .tree-node-medium {
        font-size: 18px;
    }

    .tree-node-small {
        font-size: 14px;
    }

    .tree-node-mini {
        font-size: 12px;
    }
    .scroll-bar-box {
        position: absolute;
        height: 100%;
        width: 4px;
        background-color: #ffffff;
        border-left: 1px solid #999999;
        top: 0;
        right: 0;
        z-index: 9;
    }
    .scroll-bar {
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.5s;
        border-radius: 2px;
        width: 4px;
        height: 100%;
        background-color: #c1c1c1;
        cursor: pointer;
    }
</style>
