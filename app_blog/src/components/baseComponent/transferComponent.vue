<template>
    <div class="transfer_component_box">
        <div class="transfer_component_left">
            <div class="transfer_component_header" @click="headerCheckedAll('left')">
                <el-checkbox :indeterminate="leftIsAll" v-model="checkedLeft"
                             :disabled="leftDiable.length==leftListData.length">{{attr_computed.leftTitle}}
                </el-checkbox>
                <span class="transfer_component_header_tj">{{leftCheckList.length}}/{{leftListData.length-leftDiable.length}}</span>
            </div>
            <div class="transfer_component_content">
                <el-tree :show-checkbox="true" ref="treeList" :expand-on-click-node="true" :check-on-click-node="false"
                         :check-strictly="true" node-key="id" :default-checked-keys="defaultCheckedKeys"
                         v-if="para_computed.isTree" :data="treeData" @check="treeListChecked"></el-tree>
                <el-checkbox-group v-else v-model="leftCheckList" @change="checkedchange('left')">
                    <el-checkbox class="transfer_component_content_list" :disabled="leftDiable.indexOf(item.label)!=-1"
                                 :key="index" v-for="(item, index) in leftListData" :label="item.label"></el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="transfer_component_center">
            <div :class="{transfer_component_center_button: true, transfer_component_center_button_usable: rightCheckList.length>0}"
                 @click="tansferStart('toleft', rightCheckList.length>0)"><i class="el-icon-arrow-right"></i></div>
            <div :class="{transfer_component_center_button: true, transfer_component_center_button_usable: leftCheckList.length>0}"
                 @click="tansferStart('toright', leftCheckList.length>0)"><i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="transfer_component_right">
            <div class="transfer_component_header" @click="headerCheckedAll('right')">
                <el-checkbox :indeterminate="rightIsAll" v-model="checkedRight" :disabled="rightListData.length==0">
                    {{attr_computed.rightTitle}}
                </el-checkbox>
                <span class="transfer_component_header_tj">{{rightCheckList.length}}/{{rightListData.length}}</span>
            </div>
            <div class="transfer_component_content">
                <el-checkbox-group v-model="rightCheckList" @change="checkedchange('right')">
                    <el-checkbox class="transfer_component_content_list" :key="index"
                                 v-for="(item, index) in rightListData" :label="item.label"></el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        inject: ['sys'],
        props: ['refId', 'para', 'attr'],
        data: function () {
            return {
                pvt_isSubModuleStarted: false,
                checkedLeft: false,
                leftIsAll: false,
                rightIsAll: false,
                checkedRight: false,
                paraData: {
                    leftTable: [],
                    parentTable: [],
                    leftField: [],
                    leftValue: [{
                        id: '1',
                        label: '选项一'
                    }, {
                        id: '2',
                        label: '选项二'
                    }, {
                        id: '3',
                        label: '选项三'
                    }],
                    rightTable: '',
                    rightField: '',
                    rightParentRecord: '',
                    rightValue: []
                },
                attrData: {
                    leftTitle: '备选项左',
                    rightTitle: '备选项右'
                },
                leftListData: [],
                rightListData: [],
                leftCheckList: [],
                rightCheckList: [],
                leftDiable: [],
                treeData: [],
                defaultCheckedKeys: []
            }
        },
        watch: {
            para: {
                handler: function (val, oldVal) {
                    let $this = this
                    if (val && val.$api && val.$isShow && val.$isMounted) {
                        Object.assign($this, $this.sys.lib)
                        $this.pvt_isSubModuleStarted = true
                        $this.paraData = val
                        $this.startModule()
                    }
                },
                deep: true,
                immediate: true
            },
            checkedLeft: function (val, oldVal) {
                let $this = this
                if ($this.checkedLeft == true) {
                    let arr = []
                    let allId = []
                    for (let i in $this.leftListData) {
                        if ($this.leftDiable.indexOf($this.leftListData[i].label) == -1) {
                            arr.push($this.leftListData[i].label)
                            allId.push($this.leftListData[i].id)
                        }
                    }
                    if ($this.$refs.treeList) {
                        $this.$refs.treeList.setCheckedKeys(allId)
                    }
                    $this.leftCheckList = arr
                } else {
                    $this.leftCheckList = []
                    if ($this.$refs.treeList) {
                        $this.$refs.treeList.setCheckedKeys([])
                    }
                }
                $this.defaultCheckedKeys = []
                let setDefaultChecked = function (data, label) {
                    for (let i in data) {
                        $this.defaultCheckedKeys.push(data[i].id)
                        if (data[i].children && data[i].children.length > 0) {
                            setDefaultChecked(data[i].children)
                        }
                    }
                }
                if (val) {
                    setDefaultChecked($this.treeData)
                } else {
                    $this.defaultCheckedKeys = []
                }
            },
            checkedRight: function (val, oldVal) {
                let $this = this
                if ($this.checkedRight == true) {
                    let arr = []
                    for (let i in $this.rightListData) {
                        arr.push($this.rightListData[i].label)
                    }
                    $this.rightCheckList = arr
                } else {
                    $this.rightCheckList = []
                }
            }
        },
        computed: {
            para_computed: function () {
                return this.paraData
            },
            attr_computed: function () {
                if (this.attr) {
                    this.attrData = this.attr
                }
                return this.attrData
            }
        },
        methods: {
            //公开方法
            getLeftCheckedData: function () {
                let leftCheckedData = []
                for (let i in this.leftCheckList) {
                    for (let j in this.leftListData) {
                        if (this.leftCheckList[i] === this.leftListData[j].label) {
                            leftCheckedData.push(this.leftListData[j])
                        }
                    }
                }
                return leftCheckedData
            },
            getRightCheckedData: function () {
                let rightCheckedData = []
                for (let i in this.rightCheckList) {
                    for (let j in this.rightListData) {
                        if (this.rightCheckList[i] === this.rightListData[j].label) {
                            rightCheckedData.push(this.rightListData[j])
                        }
                    }
                }
                return rightCheckedData
            },
            //  头部点击
            headerCheckedAll: function (positions) {
                let $this = this
                if (positions == 'left') {
                    if ($this.leftDiable.length == $this.leftListData.length) {
                        $this.checkedLeft = false
                        return
                    }
                    $this.checkedLeft = !$this.checkedLeft
                    $this.leftIsAll = false
                } else if (positions == 'right') {
                    if ($this.rightListData.length == 0) {
                        return
                    }
                    $this.checkedRight = !$this.checkedRight
                    $this.rightIsAll = false
                }
            },
            treeListChecked: function (checkedNode, allChecked) {
                let $this = this
                $this.leftCheckList = []
                for (let i in allChecked.checkedNodes) {
                    if ($this.leftDiable.indexOf(allChecked.checkedNodes[i].label) == -1) {
                        $this.leftCheckList.push(allChecked.checkedNodes[i].label)
                    }
                }
                if ($this.leftCheckList.length == 0) {
                    $this.leftIsAll = false
                    $this.checkedLeft = false
                } else {
                    if ($this.leftCheckList.length + $this.leftDiable.length == $this.leftListData.length) {
                        $this.leftIsAll = false
                        $this.checkedLeft = true
                    } else {
                        $this.leftIsAll = true
                    }
                }
            },
            //  选项变化事件
            checkedchange: function (positions) {
                let $this = this
                if (positions == 'left') {
                    if ($this.leftCheckList.length == 0) {
                        $this.checkedLeft = false
                        $this.leftIsAll = false
                    } else {
                        if ($this.leftCheckList.length + $this.leftDiable.length != $this.leftListData.length) {
                            $this.leftIsAll = true
                        } else {
                            $this.checkedLeft = true
                            $this.leftIsAll = false
                        }
                    }
                } else if (positions == 'right') {
                    if ($this.rightCheckList.length == 0) {
                        $this.checkedRight = false
                        $this.rightIsAll = false
                    } else {
                        if ($this.rightCheckList.length != $this.rightListData.length) {
                            $this.rightIsAll = true
                        } else {
                            $this.checkedRight = true
                            $this.rightIsAll = false
                        }
                    }
                }
            },
            // 穿梭点击
            tansferStart: function (goTo, pd) {
                let $this = this
                if (!pd) {
                    return
                }
                if (goTo == 'toleft') {
                    let transferData = []
                    // 右侧数据操作
                    let idArr = {
                        $table: $this.paraData.rightData.$table,
                        $field: $this.paraData.rightData.$field,
                        $value: []
                    }
                    for (let i = $this.rightListData.length - 1; i >= 0; i--) {
                        if ($this.rightCheckList.indexOf($this.rightListData[i].label) != -1) {
                            idArr.$value.push($this.rightListData[i].id)
                        }
                    }
                    $this.callModuleEventPort('leftTransfer', [idArr])
                    if ($this.paraData.rightData.$table != '') {
                        let delIdArr = []
                        for (let j in $this.rightListData) {
                            if ($this.rightCheckList.indexOf($this.rightListData[j].label) != -1) {
                                delIdArr.push($this.rightListData[j].rightTableId)
                            }
                        }
                        $this.sys.api.recordDelete($this.paraData.rightData.$table, delIdArr, function (result) {
                            let databaseChangeData = {
                                objectName: [$this.paraData.rightData.$table],
                                record: [delIdArr]
                            }
                            $this.uploadData(databaseChangeData, function (result) {
                            }, function (error) {
                                console.log(error)
                            })
                        }, function (error) {
                            console.log(error)
                        })
                    }
                    for (let i = $this.rightListData.length - 1; i >= 0; i--) {
                        if ($this.rightCheckList.indexOf($this.rightListData[i].label) != -1) {
                            if ($this.paraData.leftData.$table == '' && $this.leftDiable.indexOf($this.rightListData[i].label) == -1) {
                                $this.leftListData.push({
                                    id: $this.rightListData[i].id,
                                    label: $this.rightListData[i].label
                                })
                            }
                            transferData.push({
                                id: $this.rightListData[i].id,
                                label: $this.rightListData[i].label
                            })
                            $this.rightCheckList.splice($this.rightCheckList.indexOf($this.rightListData[i].label), 1)
                            $this.rightListData.splice(i, 1)
                        }
                    }
                    $this.rightCheckList = []
                    for (let k = transferData.length - 1; k >= 0; k--) {
                        let setTreeListDisplay = function (data, label) {
                            for (let a in data) {
                                if (data[a].label == label) {
                                    data[a].disabled = false
                                } else {
                                    setTreeListDisplay(data[a].children, label)
                                }
                            }
                        }
                        setTreeListDisplay($this.treeData, transferData[k].label)
                        $this.leftDiable.splice($this.leftDiable.indexOf(transferData[k].label), 1)
                    }
                    $this.rightIsAll = false
                    $this.checkedchange('left')
                    $this.checkedchange('right')
                } else if (goTo == 'toright') {
                    let addData = {}
                    if ($this.paraData.rightData.$table != '') {
                        addData[$this.paraData.rightData.$field[0]] = $this.leftCheckList
                        $this.sys.api.recordNew($this.paraData.rightData.$table, $this.paraData.rightData.$value[0], addData, function () {
                            let databaseChangeData = {
                                objectName: [$this.paraData.rightData.$table],
                                record: [addData.id]
                            }
                            $this.uploadData(databaseChangeData, function (result) {
                            }, function (error) {
                                console.log(error)
                            })
                        }, function (error) {
                            console.log(error)
                        })
                    }
                    let num = addData.id.length - 1
                    for (let i = $this.leftListData.length - 1; i >= 0; i--) {
                        if ($this.leftCheckList.indexOf($this.leftListData[i].label) != -1) {
                            $this.rightListData.push({
                                id: $this.leftListData[i].id,
                                rightTableId: addData.id[addData[$this.paraData.rightData.$field[0]].indexOf($this.leftListData[i].label)],
                                label: $this.leftListData[i].label
                            })
                            num--
                        }
                    }
                    if ($this.$refs.treeList) {
                        $this.$refs.treeList.setCheckedKeys([])
                    }
                    let setTreeListDisable = function (data, label) {
                        for (let j in data) {
                            if (data[j].label == label) {
                                data[j].disabled = true
                            } else {
                                setTreeListDisable(data[j].children, label)
                            }
                        }
                    }
                    for (let k in $this.leftCheckList) {
                        setTreeListDisable($this.treeData, $this.leftCheckList[k])
                    }
                    let idArr = []
                    for (let i = $this.leftListData.length - 1; i >= 0; i--) {
                        if ($this.leftCheckList.indexOf($this.leftListData[i].label) != -1) {
                            idArr.push($this.leftListData[i].id)
                        }
                    }
                    $this.callModuleEventPort('rightTransfer', [idArr])
                    $this.leftDiable = $this.leftDiable.concat($this.leftCheckList)
                    $this.leftCheckList = []
                    $this.leftIsAll = false
                    $this.checkedchange('left')
                    $this.checkedchange('right')
                }
            },
            startModule: function () {
                let $this = this
                // 左列表
                if ($this.paraData.isTree) {
                    // 多表树
                    $this.treeData = []
                    $this.leftListData = []
                    let createTreeData = function (parentTable, parentTableValue, condition) {
                        let treeArr = []
                        for (let i in $this.paraData.isTree.$value) {
                            if ($this.paraData.isTree.$value[i].parentTable == parentTable) {
                                let tableData = {}
                                $this.sys.api.recordQuery($this.paraData.isTree.$value[i].table, parentTableValue, condition, tableData, function (result) {
                                    for (let j in tableData.id) {
                                        $this.leftListData.push({
                                            id: $this.paraData.isTree.$value[i].table + tableData.id[j],
                                            label: tableData[$this.paraData.isTree.$value[i].field][j]
                                        })
                                        treeArr.push({
                                            id: $this.paraData.isTree.$value[i].table + tableData.id[j],
                                            label: tableData[$this.paraData.isTree.$value[i].field][j],
                                            children: createTreeData($this.paraData.isTree.$value[i].table, [tableData.id[j]], null),
                                            disabled: false
                                        })
                                    }
                                }, function (error) {
                                    console.log(error)
                                })
                            }
                        }
                        return treeArr
                    }
                    $this.treeData = createTreeData('', '', '(id=' + JSON.stringify($this.paraData.leftData.$value) + ')')
                } else {
                    if ($this.paraData.leftData.$table == '') {
                        $this.leftListData = $this.paraData.leftData.$value
                    } else {
                        if ($this.paraData.leftData.$field.length == 2) {
                            // 嵌套表树
                            $this.leftListData = []
                            $this.treeData = []
                            let treeTableData = {}
                            $this.sys.api.recordQuery($this.paraData.leftData.$table, '', null, treeTableData, function (result) {
                                let createTreeData = function (arr) {
                                    let treeArr = []
                                    if (arr == []) {
                                        return arr
                                    }
                                    for (let i in arr) {
                                        let treeNodesArr = []
                                        for (let j in treeTableData.id) {
                                            if (treeTableData[$this.paraData.leftData.$field[1]][j] == treeTableData[$this.paraData.leftData.$field[0]][treeTableData.id.indexOf(arr[i])]) {
                                                treeNodesArr.push(treeTableData.id[j])
                                            }
                                        }
                                        $this.leftListData.push({
                                            id: arr[i],
                                            label: treeTableData[$this.paraData.leftData.$field[0]][treeTableData.id.indexOf(arr[i])]
                                        })
                                        treeArr.push({
                                            id: arr[i],
                                            label: treeTableData[$this.paraData.leftData.$field[0]][treeTableData.id.indexOf(arr[i])],
                                            children: createTreeData(treeNodesArr),
                                            disabled: false
                                        })
                                    }
                                    return treeArr
                                }
                                $this.treeData = createTreeData($this.paraData.leftData.$value)
                            }, function (error) {
                                console.log(error)
                            })
                        } else {
                            $this.leftListData = []
                            let tableData = {}
                            $this.sys.api.recordQuery($this.paraData.leftData.$table, '', '(id=' + JSON.stringify($this.paraData.leftData.$value) + ')', tableData, function () {
                                for (let i in tableData.id) {
                                    $this.leftListData.push({
                                        id: tableData.id[i],
                                        label: tableData[$this.paraData.leftData.$field[0]][i]
                                    })
                                }
                            }, function (error) {
                                console.log(error)
                            })
                        }
                    }
                }
                // 右列表
                if ($this.paraData.rightData.$table == '') {
                    $this.rightListData = $this.paraData.rightData.$value
                } else {
                    $this.rightListData = []
                    let tableData = {}
                    $this.sys.api.recordQuery($this.paraData.rightData.$table, [$this.paraData.rightData.$value[0]], null, tableData, function () {
                        for (let i in tableData.id) {
                            $this.rightListData.push({
                                id: tableData.id[i],
                                rightTableId: tableData.id[i],
                                label: tableData[$this.paraData.rightData.$field[0]][i]
                            })
                        }
                    }, function (error) {
                        console.log(error)
                    })
                }
                $this.leftDiable = []
                for (let k in $this.leftListData) {
                    for (let s in $this.rightListData) {
                        if ($this.leftListData[k].label === $this.rightListData[s].label) {
                            $this.leftDiable.push($this.leftListData[k].label)
                        }
                    }
                }
            }
        },
        components: {},
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true
            }
        },
        activated: function () {
            if (this.$parent.subModuleActivatedEvent) {
                this.$parent.subModuleActivatedEvent(this.refId)
            }
        }
    }
</script>

<style>
    .transfer_component_box {
        width: 500px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: inline-block;
        font-size: 0;
        color: #606266;
    }

    .transfer_component_center {
        display: inline-block;
        vertical-align: middle;
        padding: 0 30px;
    }

    .transfer_component_center_button {
        width: 14px;
        height: 14px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 50%;
        color: #c0c4cc;
        font-size: 14px;
        cursor: no-drop;
        background-color: #f5f7fa;
        line-height: 14px;
    }

    .transfer_component_center_button:first-child {
        margin-bottom: 10px;
        transform: rotateZ(-180deg);
    }

    .transfer_component_center .transfer_component_center_button_usable {
        background-color: #409eff;
        color: #fff;
        border-color: #409eff;
        cursor: pointer;
    }

    .transfer_component_center .transfer_component_center_button_usable:hover {
        background-color: #66b1ff;
        border-color: #66b1ff;
    }

    .transfer_component_center .transfer_component_center_button_usable:active {
        background-color: #3a8ee6;
        border-color: #3a8ee6;
    }

    .transfer_component_left, .transfer_component_right {
        width: 200px;
        height: 300px;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding-bottom: 1px;
        display: inline-block;
        vertical-align: middle;
    }

    .transfer_component_header {
        height: 40px;
        position: relative;
        border-bottom: 1px solid #ddd;
        padding: 0 10px;
        background-color: #f5f7fa;
        cursor: pointer;
        line-height: 40px;
    }

    .transfer_component_header_tj {
        font-size: 14px;
        position: absolute;
        right: 10px;
    }

    .transfer_component_content {
        font-size: 14px;
        height: 260px;
        overflow: auto;
    }

    .transfer_component_content_list {
        display: block;
        margin: 0 !important;
        padding: 5px 10px;
    }
</style>
