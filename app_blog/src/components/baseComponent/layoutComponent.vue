<template>
    <div class="layout">
        <!--右键设置框-->
        <div
                ref="rightMenu"
                v-if="!propTransmitData && rightListData.isShow"
                class="layout_mask"
                @click.right.prevent.stop="">
            <div :style="rightListData.style" class="layout_mask_div">
                <ul>
                    <li v-if="rightListData.delModule" @click="deleteKey"><i class="el-icon-delete"></i>删除模块</li>
                    <li v-if="rightListData.delRow" @click="deleteKey"><i class="el-icon-delete"></i>删除行</li>
                    <li @click="rightListData.isShow = false"><i class="el-icon-circle-close-outline"></i>取消</li>
                </ul>
            </div>
        </div>

        <!--顶部切换标签页-->
        <div>
            <tabs-component
                    v-if="!propTransmitData && !isComponent && topTabsData.para.$isShow"
                    ref="topTab"
                    refId="topTab"
                    :para="topTabsData.para"
                    :attr="topTabsData.attr"></tabs-component>
            <el-button
                    type="primary"
                    size="mini"
                    class="dialog-del-button"
                    title="删除"
                    @click="deleteDialogClick(topTabsChecked)"
                    v-if="!propTransmitData && !isComponent && topTabsData.para.$isShow && topTabsChecked !== 0"><i class="el-icon-delete"></i></el-button>
        </div>
        <div :class="{layout_row_box: !propTransmitData && !isComponent}">
            <!--行-->
            <div
                    v-for="(row, rowIndex) in propTransmitData ? layoutData : [layoutData[topTabsChecked]]"
                    class="layout_row"
                    :style="{width: row.type === '1' ? '60%' : '', height: row.type === '1' ? '300px' : '', margin: row.type === '1' ? '10px auto' : ''}">
                <!--容器-->
                <div
                        v-for="(col, colIndex) in row.col"
                        :data-drops = "!isComponent"
                        :data-id="col.windowid"
                        :class="{layout_col: true, col_w_1: col.width === '1', col_w_2: col.width === '2', col_w_3: col.width === '3', col_w_4: col.width === '4', col_w_5: col.width === '5', col_w_6: col.width === '6', col_w_7: col.width === '7', col_w_8: col.width === '8', col_w_9: col.width === '9', col_w_10: col.width === '10', col_w_11: col.width === '11', col_w_12: col.width === '12', col_w_13: col.width === '13', col_w_14: col.width === '14', col_w_15: col.width === '15', col_w_16: col.width === '16', col_w_17: col.width === '17', col_w_18: col.width === '18', col_w_19: col.width === '19', col_w_20: col.width === '20', layout_col_hover: col.windowid === transmitDatacomputed.colHover, layout_col_checked: transmitDatacomputed.colChecked.indexOf(col.windowid) !== -1}"
                        :style="col.style"
                        @click="mouseLeftClick(row.id, col.windowid)"
                        @click.right.prevent="mouseRightClick($event, row.id, col.windowid)">
                    <tabs-component
                            v-if="col.row.length === 0 && transmitDatacomputed.colChecked.indexOf(col.windowid) != -1 && col.component.length > 0 && !transmitData.isDrag"
                            ref="tabs"
                            refId="tabs"
                            :para="transmitDatacomputed.tabsPara"
                            :attr="transmitDatacomputed.tabsAttr"
                            class="layout_col_tabs"
                            @click.stop.native=""></tabs-component>
                    <layout
                            ref="layout"
                            v-if="col.row.length > 0"
                            :para="{$api: para.$api, $isShow: para.$isShow, $isMounted:
                            para.$isMounted, layoutData: {$table:
                             '', $field: [], $value: col.row}}"
                            :propTransmitData="transmitDatacomputed"></layout>
                    <!--模块-->
                    <div
                            v-for="(component, componentIndex) in col.component"
                            v-if="component.status === 1"
                            :data-component="JSON.stringify(component)"
                            :data-drags="!isComponent"
                            class="layout_col_component">
                        <component
                                :para="{$api: para.$api, $isShow: para.$isShow}"
                                v-if="component.moduleData.length === 0"
                                :is="component.name"></component>
                        <layout
                                v-if="component.moduleData.length > 0"
                                :para="{$api: para.$api, $isShow: para.$isShow, $isMounted: para.$isMounted, layoutData: {$table: '', $field: [], $value: component.moduleData}}"
                                :isComponent="true"></layout>
                    </div>
                </div>
            </div>
        </div>

        <!--对话框-->
        <div class="layout-rowset-mask" v-if="!propTransmitData && rowSetDialog.isShow">
            <div class="layout-rowset">
                <p class="layout-rowset-title">行布局设置</p>
                <div class="layout-rowset-form">
                    <div class="layout-rowset-form-box">
                        <span class="layout-rowset-label">分割比例: </span>
                        <input type="text" v-model="rowSetDialog.ratio" placeholder="例: 10:10" @focus="rowSetDialog.ratioErr = false">
                        <span class="layout-rowset-error" v-if="rowSetDialog.ratioErr">* 列比例输入格式错误</span>
                    </div>
                    <div class="layout-rowset-form-box">
                        <span class="layout-rowset-label">列名称: </span>
                        <input type="text" v-model="rowSetDialog.name" placeholder="例: col1,col2" @focus="rowSetDialog.nameErr = false">
                        <span class="layout-rowset-error" v-if="rowSetDialog.nameErr">* 列名称输入格式错误</span>
                    </div>
                    <div class="layout-rowset-form-box">
                        <el-button class="layout-rowset-button" type="primary" size="mini" @click="addNewRow">确认</el-button>
                        <el-button class="layout-rowset-button" type="primary" size="mini" @click="closeRowSet">取消</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="layout-dialogset-mask" v-if="!propTransmitData && dialogSetDialog.isShow">
            <div class="layout-dialogset">
                <p class="layout-dialogset-title">对话框设置</p>
                <div class="layout-dialogset-form">
                    <div class="layout-dialogset-box">
                        <span class="layout-dialogset-label">对话框名称 : </span>
                        <input type="text" v-model="dialogSetDialog.name" @focus="dialogSetDialog.nameErr = false">
                        <span class="layout-dialogset-error" v-if="dialogSetDialog.nameErr">* 名称输入格式错误</span>
                    </div>
                    <div class="layout-dialogset-box">
                        <el-button class="layout-dialogset-button" type="primary" size="mini" @click="addNewDialog">确认</el-button>
                        <el-button class="layout-dialogset-button" type="primary" size="mini" @click="closeDialogSet">取消</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="layout-moduleset-mask" v-if="!propTransmitData && moduleSetDialog.isShow">
            <div class="layout-moduleset">
                <p class="layout-moduleset-title">模块标识设置</p>
                <div class="layout-moduleset-form">
                    <div class="layout-moduleset-box">
                        <span class="layout-moduleset-lebel">ref值 : </span>
                        <input type="text" v-model="moduleSetDialog.ref">
                        <span class="layout-moduleset-error" v-if="moduleSetDialog.refErr">* 该值已存在或格式错误</span>
                    </div>
                    <div class="layout-moduleset-box">
                        <el-button class="layout-moduleset-button" type="primary" size="mini" @click="addNewModule">确认</el-button>
                        <el-button class="layout-moduleset-button" type="primary" size="mini" @click="closeModuleSet">取消</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="layout-dialogdel-mask" v-if="!propTransmitData && dialogDelDialog.isShow">
            <div class="layout-dialogset">
                <p class="layout-dialogset-title">对话框删除</p>
                <div class="layout-dialogset-form">
                    <div class="layout-dialogset-box">
                        <span class="layout-dialogdel-label">是否删除对话框: "{{dialogDelDialog.dialogName}}"</span>
                    </div>
                    <div class="layout-dialogset-box">
                        <el-button class="layout-dialogset-button" type="primary" size="mini" @click="deleteDialog">确认</el-button>
                        <el-button class="layout-dialogset-button" type="primary" size="mini" @click="closeDialogDel">取消</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import tabsComponent from '@/components/baseComponent/tabsComponent'
    import expressionInputComponent from '@/components/baseComponent/expressionInputComponent'
    import transferComponent from '@/components/baseComponent/transferComponent'
    import treeComponent from '@/components/baseComponent/treeComponent'
    import textComponent from '@/components/baseComponent/textComponent'

    import buttonComponent from '@/components/baseComponent/buttonComponent'
    import checkboxComponent from '@/components/baseComponent/checkboxComponent'
    import datePickerComponent from '@/components/baseComponent/datePickerComponent'
    import inputComponent from '@/components/baseComponent/inputComponent'
    import listComponent from '@/components/baseComponent/listComponent'
    import radioComponent from '@/components/baseComponent/radioComponent'
    import selectComponent from '@/components/baseComponent/selectComponent'
    import tableComponent from '@/components/baseComponent/tableComponent'
    import uploadComponent from '@/components/baseComponent/uploadComponent'

    import graphComponent from '@/components/baseComponent/graphComponent/graphComponent'

    export default {
        name: "layout",
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'isComponent', 'propTransmitData'],
        data: function () {
            return {
                // 规范变量
                pvt_isSubModuleStarted: false,
                pvt_subModuleMethodQueue: {},
                // 模块变量
                layoutData: [{
                    id: '1',
                    col: []
                }],
                topTabsData: {
                    para: {
                        $api: false,
                        $isShow: true,
                        $isMounted: false,
                        tabData: {
                            $table: '',
                            $field: [],
                            $value: []
                        }
                    },
                    attr: {
                        checked: 0,
                        marginRight: '1px'
                    }
                },
                topTabsChecked: 0,
                transmitData: {
                    isDrag: false,
                    savChecked: '',
                    colHover: '',
                    colChecked: [],
                    tabsPara: {
                        $api: false,
                        $isShow: true,
                        $isMounted: false,
                        tabData: {
                            $table: '',
                            $field: [],
                            $value: []
                        }
                    },
                    tabsAttr: {
                        checked: 0,
                        tabsWidth: '80px',
                        marginRight: '1px'
                    }
                },
                allWindowData: {
                    row: [],
                    col: [],
                    component: [],
                    allCol: [],
                    allComponent: []
                },
                windowData: {},
                startWindow: [],
                windowOverArr: [],
                rightListData: {
                    isShow: false,
                    style: {},
                    delModule: true,
                    delRow: false
                },
                moduleDrag: '',
                newModuleDrag: '',
                newRowDrag: false,
                newDialogDrag: false,
                rowSetDialog: {
                    isShow: false,
                    ratio: '',
                    ratioErr: false,
                    name: '',
                    nameErr: false
                },
                dialogSetDialog: {
                    isShow: false,
                    name: '',
                    nameErr: false,
                    width: '',
                    widthErr: false,
                    height: '',
                    heightErr: false
                },
                moduleSetDialog: {
                    isShow: false,
                    ref: '',
                    refErr: false
                },
                dialogDelDialog: {
                    isShow: false,
                    dialogName: '',
                    delIndex: ''
                }
            }
        },
        computed: {
            transmitDatacomputed: function () {
                if (this.propTransmitData) {
                    this.transmitData = this.propTransmitData
                }
                return this.transmitData
            }
        },
        watch: {
            para: {
                handler: function (val, oldVal) {
                    let $this = this
                    if (val && val.$api && val.$isShow && val.$isMounted) {
                        Object.assign($this, $this.sys.lib)
                        $this.pvt_isSubModuleStarted = true
                        $this.layout_startModule(function () {
                            setTimeout(function () {
                                if ($this.$parent.subModuleActivatedEvent) {
                                    $this.$parent.subModuleActivatedEvent($this.refId)
                                }
                            }, 0)
                        }, function () {

                        })
                    } else {
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
        components: {
            tabsComponent,
            expressionInputComponent,
            transferComponent,
            treeComponent,
            textComponent,

            buttonComponent,
            checkboxComponent,
            datePickerComponent,
            inputComponent,
            listComponent,
            radioComponent,
            selectComponent,
            tableComponent,
            uploadComponent,

            graphComponent,
        },
        methods: {
            layout_startModule: function (successCallBack, errorCallBack) {
                let $this = this
                if ($this.para.layoutData.$value.length === 0) {
                    return
                }
                if ($this.$parent.layout_startModule) {
                    $this.layoutData = $this.para.layoutData.$value
                    return
                }

                $this.topTabsChecked = 0
                $this.transmitData.savChecked = ''
                $this.transmitData.colHover = ''
                $this.transmitData.tabsPara.$api = true
                $this.transmitData.tabsPara.$isMounted = true
                $this.layoutData = JSON.parse(JSON.stringify($this.para.layoutData.$value))
                $this.topTabsData.para.$isShow = true
                $this.topTabsData.para.$api = true
                $this.topTabsData.para.$isMounted = true
                $this.topTabsData.para.tabData.$value = []
                for (let i in $this.layoutData) {
                    if (i == 0) {
                        $this.topTabsData.para.tabData.$value.push({
                            val: '主界面',
                            icon: 'el-icon-menu',
                            disable: ''
                        })
                    } else {
                        $this.topTabsData.para.tabData.$value.push({
                            val: '对话框' + i,
                            icon: '',
                            disable: ''
                        })
                    }
                }
                $this.allWindowData = {
                    row: [],
                    col: [],
                    component: [],
                    allCol: [],
                    allComponent: []
                }
                $this.windowData = {}
                $this.startWindow = []
                $this.ergodicLayoutData($this.layoutData, true)
                setTimeout(function () {
                    $this.layout_setDrag()
                    $this.$refs.topTab.checkedLabel(0)
                }, 0)
                successCallBack()
            },
            ergodicLayoutData: function (data, isOne) {
                let $this = this
                for (let i in data) {
                    let colData = []
                    let colComponent = []
                    for (let j in data[i].col) {
                        $this.allWindowData.allCol.push(data[i].col[j].windowid)
                        if (isOne) {
                            $this.startWindow.push(data[i].col[j].windowid)
                        }
                        let componentData = []
                        colData.push(data[i].col[j].windowid)
                        if (data[i].col[j].row.length > 0) {
                            componentData = ''
                            $this.ergodicLayoutData(data[i].col[j].row, false)
                        } else {
                            $this.windowData[data[i].col[j].windowid] = []
                            for (let k in data[i].col[j].component) {
                                componentData.push({
                                    moduleWinid: data[i].col[j].component[k].moduleWinid,
                                    type: data[i].col[j].component[k].type,
                                    status: data[i].col[j].component[k].status
                                })
                                $this.allWindowData.allComponent.push(data[i].col[j].component[k].moduleWinid)
                                $this.windowData[data[i].col[j].windowid].push(data[i].col[j].component[k].moduleWinid)
                            }
                        }
                        colComponent.push(componentData)
                    }
                    $this.allWindowData.row.push(data[i].id)
                    $this.allWindowData.col.push(colData)
                    $this.allWindowData.component.push(colComponent)
                }
            },
            layout_setDrag: function () {
                let $this = this
                if ($this.$parent.layout_setDrag) {
                    $this.$parent.layout_setDrag()
                    return
                }
                $('[data-drags = true]').draggable({
                    helper: 'clone',
                    start: function (event, ui) {
                        $this.moduleDrag = JSON.parse(event.target.dataset.component)
                    },
                    stop: function (event, ui) {
                        $this.moduleDrag = ''
                        $this.transmitData.colHover = ''
                    },
                    zIndex: 99
                })
                $('[data-drops = true]').droppable({
                    tolerance: 'pointer',
                    activate: function (event, ui) {
                        $this.transmitData.isDrag = true
                        $this.windowOverArr = []
                    },
                    over: function (event, ui) {
                        $this.windowOverArr.push(event.target.dataset.id)
                        let islayout = false
                        for (let i in $this.allWindowData.col) {
                            if ($this.allWindowData.col[i].indexOf(event.target.dataset.id) !== -1 && $this.allWindowData.component[i][$this.allWindowData.col[i].indexOf(event.target.dataset.id)] !== '') {
                                islayout = true
                            }
                        }
                        if ($this.newModuleDrag !== '' || $this.moduleDrag !== '') {
                            if (islayout) {
                                $this.transmitData.colHover = event.target.dataset.id
                            }
                        } else if ($this.newRowDrag) {
                            if (!($this.windowData[event.target.dataset.id] && $this.windowData[event.target.dataset.id].length > 0)) {
                                if ($this.layoutData[$this.topTabsChecked].type === '0') {
                                    $this.transmitData.colHover = event.target.dataset.id
                                }
                            }
                        } else if ($this.newDialogDrag) {
                            $this.transmitData.colHover = event.target.dataset.id
                        }
                    },
                    out: function (event, ui) {
                        $this.windowOverArr.pop()
                        $this.transmitData.colHover = ''
                        let islayout = false
                        let windowid = $this.windowOverArr.length > 0 ? $this.windowOverArr[$this.windowOverArr.length - 1] : ''
                        if (windowid !== '') {
                            for (let i in $this.allWindowData.col) {
                                if ($this.allWindowData.col[i].indexOf(windowid) !== -1 && $this.allWindowData.component[i][$this.allWindowData.col[i].indexOf(windowid)] !== '') {
                                    islayout = true
                                }
                            }
                            if ($this.newModuleDrag !== '' || $this.moduleDrag !== '') {
                                if (islayout) {
                                    $this.transmitData.colHover = windowid
                                }
                            } else {
                                $this.transmitData.colHover = windowid
                            }
                        }
                    },
                    drop: function (event, ui) {
                        let windowId = event.target.dataset.id
                        if ($this.windowOverArr[$this.windowOverArr.length - 1] !== windowId) {
                            return
                        }
                        // 内部拖拽
                        if ($this.moduleDrag !== '') {
                            let oldWindow = ''
                            for (let i in $this.windowData) {
                                if ($this.windowData[i].indexOf($this.moduleDrag.moduleWinid) !== -1) {
                                    oldWindow = i
                                }
                            }
                            if (oldWindow === windowId || $this.windowData[windowId] === undefined) {
                                return
                            }
                            $this.moduleDragFun($this.layoutData, oldWindow, windowId)
                            for (let j in $this.allWindowData.row) {
                                if ($this.allWindowData.col[j].indexOf(windowId) !== -1) {
                                    setTimeout(function () {
                                        $this.mouseLeftClick($this.allWindowData.row[j], windowId)
                                    }, 0)
                                }
                            }
                            $this.allWindowData = {
                                row: [],
                                col: [],
                                component: [],
                                allCol: [],
                                allComponent: []
                            }
                            $this.windowData = {}
                            $this.startWindow = []
                            $this.ergodicLayoutData($this.layoutData, true)
                            setTimeout(function () {
                                $this.layout_setDrag()
                            }, 0)
                            $this.callModuleEventPort('moduleMoveDropEvent', [oldWindow, windowId, $this.moduleDrag.moduleWinid])
                        }
                        // 模块
                        if ($this.newModuleDrag !== '' && $this.transmitData.colHover !== '') {
                            $this.moduleSetDialog.isShow = true
                        }
                        // 视窗
                        if ($this.newRowDrag && $this.transmitData.colHover !== '') {
                            $this.rowSetDialog.isShow = true
                        }
                        // 对话框
                        if ($this.newDialogDrag && $this.transmitData.colHover !== '') {
                            $this.dialogSetDialog.isShow = true
                        }
                    },
                    deactivate: function (event, ui) {
                        if ($this.transmitData.colHover === '') {
                            setTimeout(function () {
                                $this.newModuleDrag = ''
                                $this.newRowDrag = false
                                $this.newDialogDrag = false
                            }, 0)
                        }
                        $this.transmitData.isDrag = false
                    }
                })
            },
            moduleDragFun: function (data, oldWindow, newWindow) {
                let $this = this
                for (let i in data) {
                    for (let j in data[i].col) {
                        if (data[i].col[j].row.length > 0) {
                            $this.moduleDragFun(data[i].col[j].row, oldWindow, newWindow)
                        } else {
                            if (data[i].col[j].windowid === oldWindow) {
                                for (let k in data[i].col[j].component) {
                                    if (data[i].col[j].component[k].status === 1) {
                                        data[i].col[j].component.splice(k, 1)
                                        if (data[i].col[j].component.length > 0) {
                                            data[i].col[j].component[0].status = 1
                                        }
                                    }
                                }
                            }
                            if (data[i].col[j].windowid === newWindow) {
                                for (let n in data[i].col[j].component) {
                                    if (data[i].col[j].component[n].status === 1) {
                                        data[i].col[j].component[n].status = 0
                                    }
                                }
                                data[i].col[j].component.push($this.moduleDrag)
                            }
                        }
                    }
                }
            },

            // 公开方法
            windowDrag: function (id, name) {
                let $this = this
                if (id === 0) {
                    $this.newRowDrag = true
                } else if (id === 1) {
                    $this.newDialogDrag = true
                }
            },
            subModuleDrag: function (moduleId, name, data, type) {
                let $this = this
                $this.newModuleDrag = {
                    id: moduleId,
                    name: name,
                    data: data,
                    type: type
                }
                // $this.transmitData.colChecked = []
            },
            rowSet: function (rowid, rowData) {
                this.rowSetFun(this.layoutData, rowid, rowData)
            },
            subModuleSet: function (oldModuleName, newModuleName) {
                this.subModuleSetFun(this.layoutData, oldModuleName, newModuleName)
            },

            // 子模块事件
            topTab_labelClickEvent(refId, index) {
                let $this = this
                if (index === 0) {
                    if ($this.transmitData.savChecked && $this.transmitData.savChecked !== '') {
                        $this.mouseLeftClick($this.getRowId($this.transmitData.savChecked), $this.transmitData.savChecked)
                    }
                    $this.transmitData.savChecked = ''
                } else {
                    if ($this.transmitData.savChecked === '') {
                        $this.transmitData.savChecked = JSON.parse(JSON.stringify($this.transmitData.colChecked))[0]
                    }
                    $this.mouseLeftClick($this.layoutData[index].id, $this.layoutData[index].col[0].windowid)
                }
                $this.topTabsChecked = index
                setTimeout(function () {
                    $this.layout_setDrag()
                }, 0)
            },
            tabs_labelClickEvent(refId, index) {
                let $this = this
                if ($this.$parent.tabs_labelClickEvent) {
                    $this.$parent.tabs_labelClickEvent(refId, index)
                    return
                }
                $this.clickModuleChange($this.layoutData, $this.transmitDatacomputed.colChecked[0], index)
                setTimeout(function () {
                    $this.layout_setDrag()
                }, 0)
            },

            // 私有方法
            getRowId: function (windowName) {
                let $this = this
                for (let i in $this.allWindowData.col) {
                    if ($this.allWindowData.col[i].indexOf(windowName) !== -1) {
                        return $this.allWindowData.row[i]
                    }
                }
            },
            mouseLeftClick: function (rowid, windowid) {
                let $this = this
                if ($this.isComponent) {
                    return
                }
                if ($this.$parent.mouseLeftClick) {
                    $this.$parent.mouseLeftClick(rowid, windowid)
                    return
                }
                $this.allWindowData = {
                    row: [],
                    col: [],
                    component: [],
                    allCol: [],
                    allComponent: []
                }
                $this.windowData = {}
                $this.startWindow = []
                $this.ergodicLayoutData($this.layoutData, true)

                let checkedComponent = []
                if ($this.allWindowData.col[$this.allWindowData.row.indexOf(rowid)] && $this.allWindowData.col[$this.allWindowData.row.indexOf(rowid)].indexOf(windowid) !== -1) {
                    checkedComponent = $this.allWindowData.component[$this.allWindowData.row.indexOf(rowid)][$this.allWindowData.col[$this.allWindowData.row.indexOf(rowid)].indexOf(windowid)]
                }
                if (!$this.windowData[windowid]) {
                    return
                } else if ($this.windowData[windowid].length > 0) {
                    $this.transmitData.colChecked = [windowid]
                    let moduleRef = ''
                    checkedComponent.forEach(function (val) {
                        if (val.status === 1) {
                            moduleRef = val.moduleWinid
                        }
                    })
                    $this.callModuleEventPort('subModuleClickEvent', [moduleRef])
                    $this.callModuleEventPort('rowClickEvent', [rowid])
                } else {
                    let colArr = $this.allWindowData.col[$this.allWindowData.row.indexOf(rowid)]
                    let checkedCol = []
                    for (let i in colArr) {
                        checkedCol.push(colArr[i])
                        if (colArr[i] === '' || !$this.windowData[colArr[i]] || $this.windowData[colArr[i]].length > 0) {
                            return
                        }
                    }
                    $this.transmitData.colChecked = checkedCol
                    for (let j in $this.layoutData) {
                        if ($this.layoutData[j].id === rowid && $this.layoutData[j].type === '0') {
                            return
                        }
                    }
                    $this.callModuleEventPort('rowClickEvent', [rowid])
                }
                let tabPara = []
                for (let i in checkedComponent) {
                    tabPara.push({
                        val: '模块' + (parseInt(i) + 1),
                        icon: '',
                        disable: ''
                    })
                    if (checkedComponent[i].status === 1) {
                        setTimeout(function () {
                            $this.setTabs($this.$refs, i)
                        }, 0)
                    }
                }
                $this.transmitData.tabsPara.tabData.$value = tabPara
                $this.transmitData.isDrag = false
            },
            mouseRightClick: function (event, rowid, windowid) {
                let $this = this
                if ($this.isComponent) {
                    return
                }
                if ($this.$parent.mouseRightClick) {
                    $this.$parent.mouseRightClick(event, rowid, windowid)
                    return
                }
                if (!$this.windowData[windowid]) {
                    return
                } else if ($this.windowData[windowid].length > 0) {
                    $this.rightListData.delModule = true
                    $this.rightListData.delRow = false
                    $this.transmitData.colChecked = [windowid]
                } else {
                    if ($this.startWindow.indexOf(windowid) !== -1) {
                        return
                    }
                    let colArr = $this.allWindowData.col[$this.allWindowData.row.indexOf(rowid)]
                    let checkedCol = []
                    for (let i in colArr) {
                        checkedCol.push(colArr[i])
                        if (colArr[i] === '' || !$this.windowData[colArr[i]] || $this.windowData[colArr[i]].length > 0) {
                            return
                        }
                    }
                    $this.rightListData.delModule = false
                    $this.rightListData.delRow = true
                    $this.transmitData.colChecked = checkedCol
                }
                $this.rightListData.isShow = true
                let top = 0
                let left = 0
                let getOffset = function (obj) {
                    if (obj && obj.offsetTop !== undefined) {
                        top += obj.offsetTop
                        left += obj.offsetLeft
                    }
                    if (obj && obj.offsetParent) {
                        getOffset(obj.offsetParent)
                    }
                }
                $this.rightListData.style = {
                    opacity: '0',
                }
                setTimeout(function () {
                    getOffset($this.$refs.rightMenu)
                    $this.rightListData.style = {
                        position: 'absolute',
                        opacity: '1',
                        top: event.clientY + $(document).scrollTop() - top + 'px',
                        left: event.clientX + $(document).scrollLeft() - left + 'px'
                    }
                })
                let checkedComponent = $this.allWindowData.component[$this.allWindowData.row.indexOf(rowid)][$this.allWindowData.col[$this.allWindowData.row.indexOf(rowid)].indexOf(windowid)]
                let tabPara = []
                let checkedC = ''
                for (let i in checkedComponent) {
                    tabPara.push({
                        val: '模块' + (parseInt(i) + 1),
                        icon: '',
                        disable: ''
                    })
                    if (checkedComponent[i].status === 1) {
                        checkedC = i
                    }
                }
                $this.transmitData.tabsPara.tabData.$value = tabPara
                $this.transmitData.tabsAttr.checked = checkedC
            },
            deleteKey: function () {
                let $this = this
                if ($this.rightListData.delModule) {
                    $this.deleteModule($this.layoutData, $this.transmitData.colChecked[0])
                } else if ($this.rightListData.delRow) {
                    $this.deleteRow($this.layoutData, $this.transmitData.colChecked)
                    $this.transmitData.colChecked = []
                }
                $this.rightListData.isShow = false
            },
            deleteModule: function (data, windowId) {
                let $this = this
                for (let i in data) {
                    for (let j in data[i].col) {
                        if (data[i].col[j].row.length > 0) {
                            $this.deleteModule(data[i].col[j].row, windowId)
                        } else {
                            if (data[i].col[j].windowid === windowId) {
                                for (let k in data[i].col[j].component) {
                                    if (data[i].col[j].component[k].status === 1) {
                                        let delModuleName = data[i].col[j].component[k].moduleWinid
                                        data[i].col[j].component.splice(k, 1)
                                        if (data[i].col[j].component.length > 0) {
                                            data[i].col[j].component[0].status = 1
                                        }
                                        $this.transmitData.colChecked = []
                                        setTimeout(function () {
                                            $this.mouseLeftClick(data[i].id, data[i].col[j].windowid)
                                        }, 0)
                                        $this.callModuleEventPort('subModuleDeleteEvent', [delModuleName])
                                        return
                                    }
                                }
                            }
                        }
                    }
                }
            },
            deleteRow: function (data, windowArr) {
                let $this = this
                for (let i in data) {
                    for (let j in data[i].col) {
                        if (data[i].col[j].row.length > 0) {
                            $this.deleteRow(data[i].col[j].row, windowArr)
                        } else {
                            if (windowArr.indexOf(data[i].col[j].windowid) !== -1) {
                                let rowId = data[i].id
                                data.splice(i, 1)
                                $this.callModuleEventPort('rowDeleteEvent', [rowId])
                                return
                            }
                        }
                    }
                }
            },
            clickModuleChange: function (data, windowId, index) {
                let $this = this
                for (let i in data) {
                    for (let j in data[i].col) {
                        if (data[i].col[j].row.length > 0) {
                            $this.clickModuleChange(data[i].col[j].row, windowId, index)
                        } else {
                            if (data[i].col[j].windowid === windowId) {
                                for (let k in data[i].col[j].component) {
                                    if (parseInt(k) === index) {
                                        data[i].col[j].component[k].status = 1
                                        setTimeout(function () {
                                            $this.mouseLeftClick(data[i].id, data[i].col[j].windowid)
                                        }, 0)
                                    } else {
                                        data[i].col[j].component[k].status = 0
                                    }
                                }
                            }
                        }
                    }
                }
            },
            rowSetFun: function (data, rowid, rowData) {
                let $this = this
                for (let i in data) {
                    if (data[i].id === rowid) {
                        data[i].col = []
                        for (let j in rowData.size) {
                            data[i].col.push({
                                width: rowData.size[j],
                                height: '',
                                windowid: rowData.name[j],
                                row: [],
                                component: []
                            })
                        }
                        $this.transmitData.colChecked = rowData.name
                        return
                    } else {
                        for (let k in data[i].col) {
                            if (data[i].col[k].row.length > 0) {
                                $this.rowSetFun(data[i].col[k].row, rowid, rowData)
                            }
                        }
                    }
                }
            },
            subModuleSetFun: function (data, oldModuleName, newModuleName) {
                let $this = this
                for (let i in data) {
                    for (let j in data[i].col) {
                        if (data[i].col[j].row.length > 0) {
                            $this.subModuleSetFun(data[i].col[j].row, oldModuleName, newModuleName)
                        } else {
                            for (let k in data[i].col[j].component) {
                                if (data[i].col[j].component[k].moduleWinid === oldModuleName) {
                                    data[i].col[j].component[k].moduleWinid = newModuleName
                                    return
                                }
                            }
                        }
                    }
                }
            },
            deleteDialogClick: function (index) {
                let $this = this
                $this.dialogDelDialog.isShow = true
                $this.dialogDelDialog.dialogName = $this.layoutData[index].col[0].windowid
                $this.dialogDelDialog.delIndex = index
            },
            deleteDialog: function () {
                let $this = this
                $this.dialogDelDialog.isShow = false
                $this.callModuleEventPort('rowDeleteEvent', [$this.layoutData[$this.dialogDelDialog.delIndex].id])
                $this.layoutData[$this.dialogDelDialog.delIndex].col[0].component.forEach(function (val, i) {
                    $this.callModuleEventPort('subModuleDeleteEvent', [val.moduleWinid])
                })
                $this.layoutData.splice($this.dialogDelDialog.delIndex, 1)
                $this.topTabsChecked = 0
                $this.topTabsData.para.tabData.$value = []
                for (let i in $this.layoutData) {
                    if (i == 0) {
                        $this.topTabsData.para.tabData.$value.push({
                            val: '主界面',
                            icon: 'el-icon-menu',
                            disable: ''
                        })
                    } else {
                        $this.topTabsData.para.tabData.$value.push({
                            val: '对话框' + i,
                            icon: '',
                            disable: ''
                        })
                    }
                }
                $this.$refs.topTab.checkedLabel(0)
            },
            closeDialogDel: function () {
                let $this = this
                $this.dialogDelDialog.isShow = false
            },

            //子对话框方法
            addNewRow: function () {
                let $this = this
                let colAdd = true
                let testRatio = /^[0-9\:_]*$/
                let testName = /^[a-zA-Z]{1}[0-9a-zA-Z\,_]*$/
                if (testRatio.test($this.rowSetDialog.ratio)) {
                    let s = 0
                    $this.rowSetDialog.ratio.split(':').forEach(function (val) {
                        s += parseFloat(val)
                    })
                    if (s !== 20) {
                        $this.rowSetDialog.ratioErr = true
                        colAdd = false
                    }
                } else {
                    $this.rowSetDialog.ratioErr = true
                    colAdd = false
                }
                if (testName.test($this.rowSetDialog.name) && $this.rowSetDialog.name.split(',').length === $this.rowSetDialog.ratio.split(':').length) {
                    $this.rowSetDialog.name.split(',').forEach(function (val) {
                        if ($this.allWindowData.allCol.indexOf(val) !== -1) {
                            $this.rowSetDialog.nameErr = true
                            colAdd = false
                        }
                    })
                } else {
                    $this.rowSetDialog.nameErr = true
                    colAdd = false
                }
                if (colAdd) {
                    $this.addRowCol($this.layoutData, $this.transmitData.colHover, {size: $this.rowSetDialog.ratio.split(':'), name: $this.rowSetDialog.name.split(',')})
                    $this.transmitData.colHover = ''
                    $this.rowSetDialog = {
                        isShow: false,
                        ratio: '',
                        ratioErr: false,
                        name: '',
                        nameErr: false
                    }
                }
            },
            addRowCol: function (data, windowId, addData) {
                let $this = this
                for (let i in data) {
                    for (let j in data[i].col) {
                        if (data[i].col[j].windowid === windowId) {
                            let colArr = []
                            for (let k in addData.size) {
                                colArr.push({
                                    width: addData.size[k],
                                    height: '',
                                    windowid: addData.name[k],
                                    row: [],
                                    component: []
                                })
                            }
                            let pd = 1
                            let rowId = 'row' + $this.allWindowData.row.length
                            while (pd) {
                                if ($this.allWindowData.row.indexOf(rowId) !== -1) {
                                    rowId = 'row' + ($this.allWindowData.row.length + pd)
                                    pd++
                                } else {
                                    pd = false
                                }
                            }
                            data[i].col[j].row.push({
                                id: rowId,
                                type: '0',
                                col: colArr
                            })
                            $this.callModuleEventPort('windowNewDropEvent', [data[i].col[j].windowid, rowId, {id: addData.name, size: addData.size, name: addData.name}, '0'])
                            $this.newRowDrag = false
                            setTimeout(function () {
                                $this.mouseLeftClick(rowId, addData.name[0])
                                $this.layout_setDrag()
                            }, 0)
                            return
                        } else if (data[i].col[j].row.length > 0) {
                            $this.addRowCol(data[i].col[j].row, windowId, addData)
                        }
                    }
                }
            },
            closeRowSet: function () {
                this.transmitData.colHover = ''
                this.rowSetDialog.isShow = false
                this.newRowDrag = false
            },

            addNewDialog: function () {
                let $this = this
                let dialogAdd = true
                let testName = /^[a-zA-Z]{1}[0-9a-zA-Z\_]*$/
                let testWidthAndHeight = /^[0-9]*$/
                if (testName.test($this.dialogSetDialog.name)) {
                    if ($this.allWindowData.allComponent.indexOf($this.dialogSetDialog.name) !== -1) {
                        $this.dialogSetDialog.nameErr = true
                        dialogAdd = false
                    }
                } else {
                    $this.dialogSetDialog.nameErr = true
                    dialogAdd = false
                }
                if (dialogAdd) {
                    $this.layoutData.push({
                        id: $this.dialogSetDialog.name,
                        type: '1',
                        col: [{
                            width: '20',
                            height: $this.dialogSetDialog.height + 'px',
                            rowWidth: $this.dialogSetDialog.width + 'px',
                            windowid: $this.dialogSetDialog.name,
                            row: [],
                            component: []
                        }]
                    })
                    this.transmitData.colHover = ''
                    $this.newDialogDrag = false
                    $this.dialogSetDialog.isShow = false
                    $this.$refs.topTab.checkedLabel($this.layoutData.length - 1)
                    $this.newDailogBS = true
                    $this.callModuleEventPort('windowNewDropEvent', ['', $this.dialogSetDialog.name, {id: [$this.dialogSetDialog.name], size: ['20'], name: [$this.dialogSetDialog.name]}, '1'])
                    let windowId = JSON.parse(JSON.stringify($this.dialogSetDialog.name))
                    setTimeout(function () {
                        $this.mouseLeftClick(windowId, windowId)
                    }, 0)
                    $this.dialogSetDialog = {
                        isShow: false,
                        name: '',
                        nameErr: false,
                        width: '',
                        widthErr: false,
                        height: '',
                        heightErr: false
                    }
                }
                $this.topTabsData.para.tabData.$value = []
                for (let i in $this.layoutData) {
                    if (i == 0) {
                        $this.topTabsData.para.tabData.$value.push({
                            val: '主界面',
                            icon: 'el-icon-menu',
                            disable: ''
                        })
                    } else {
                        $this.topTabsData.para.tabData.$value.push({
                            val: '对话框' + i,
                            icon: '',
                            disable: ''
                        })
                    }
                }
            },
            closeDialogSet: function () {
                this.transmitData.colHover = ''
                this.dialogSetDialog.isShow = false
                this.newDialogDrag = false
            },

            addNewModule: function () {
                let $this = this
                let moduleAdd = true
                let testRef = /^[a-zA-Z]{1}[0-9a-zA-Z\,_]*$/
                if (testRef.test($this.moduleSetDialog.ref)) {
                    if ($this.allWindowData.allComponent.indexOf($this.moduleSetDialog.ref) !== -1) {
                        $this.moduleSetDialog.refErr = true
                        moduleAdd = false
                    }
                } else {
                    $this.moduleSetDialog.refErr = true
                    moduleAdd = false
                }
                if (moduleAdd) {
                    $this.newModuleDrag.moduleWinid = $this.moduleSetDialog.ref
                    $this.addNewComponent($this.layoutData, $this.transmitData.colHover, $this.newModuleDrag)
                }
            },
            addNewComponent: function (data, windowId, componentId) {
                let $this = this
                for (let i in data) {
                    for (let j in data[i].col) {
                        if (data[i].col[j].windowid === windowId) {
                            for (let k in data[i].col[j].component) {
                                if (data[i].col[j].component[k].status === 1) {
                                    data[i].col[j].component[k].status = 0
                                }
                            }
                            data[i].col[j].component.push({
                                moduleWinid: componentId.moduleWinid,
                                name: componentId.name,
                                status: 1,
                                type: componentId.type,
                                moduleData: componentId.data === '' ? [] : JSON.parse(componentId.data)
                            })
                            $this.callModuleEventPort('moduleNewDropEvent', [windowId, $this.newModuleDrag.id, componentId.type, componentId.moduleWinid], function () {
                                setTimeout(function () {
                                    $this.mouseLeftClick(data[i].id, data[i].col[j].windowid)
                                }, 0)
                            }, function (error) {
                                console.log(error)
                            })
                            this.moduleSetDialog = {
                                isShow: false,
                                ref: '',
                                refErr: false
                            }
                            $this.transmitData.colHover = ''
                            $this.newModuleDrag = ''
                            return
                        } else {
                            if (data[i].col[j].row.length > 0) {
                                $this.addNewComponent(data[i].col[j].row, windowId, componentId)
                            }
                        }
                    }
                }
            },
            closeModuleSet: function () {
                this.transmitData.colHover = ''
                this.moduleSetDialog = {
                    isShow: false,
                    ref: '',
                    refErr: false
                }
                this.newModuleDrag = ''
            },
            setTabs: function (obj, index) {
                let $this = this
                if (obj.tabs && obj.tabs[0]) {
                    obj.tabs[0].checkedLabel(index)
                } else if (obj.layout) {
                    obj.layout.forEach(function (val) {
                        $this.setTabs(val.$refs, index)
                    })
                }
            }
        },
        mounted: function () {
            let $this = this
            if ($this.$parent.pvt_isMounted) {
                $this.$parent.pvt_isMounted[$this.refId] = true
            }
        }
    }
</script>

<style scoped>
    .layout {
        position: relative;
        border: 1px solid transparent;
    }
    .layout_mask {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
    }
    .layout_mask_div {
        width: 140px;
        background-color: #fff;
        color: #666;
        font-size: 14px;
        box-shadow: 0 0 2px 1px #999;
        line-height: 30px;
    }
    .dialog-del-button {
        position: absolute;
        right: 5px;
        top: 2px;
        z-index: 9;
    }
    .layout_mask_div li {
        cursor: pointer;
        padding-left: 10px;
    }
    .layout_mask_div li:hover {
        background-color: #ddd;
    }
    .layout_mask_div i {
        margin-right: 4px;
    }
    .layout_row {
        display: flex;
        align-items: stretch;
        min-height: 40px;
        position: relative;
        /*background-color: #fff;*/
    }
    .layout_row_box {
        border: 1px solid #409EFF;
        border-top: none;
        padding: 2px;
        padding-top: 10px;
    }
    .layout_col {
        position: relative;
        display: inline-block;
        background-color: #fff;
        margin: 2px;
        padding: 2px;
        padding-bottom: 10px;
        box-shadow: 0 0 0 1px #999;
        box-sizing: border-box;
    }
    .layout_col_tabs {
        max-width: 100%;
        position: absolute;
        top: -37px;
        left: -1px;
    }
    .layout_row .layout_col_hover {
        box-shadow: 0 0 0 2px #67c23a;
    }
    .layout_col_checked {
        box-shadow: 0 0 0 2px #66b1ff;
    }
    .layout_col_component {
        position: relative;
        overflow: hidden;
    }
    .col_w_1 {
        width: calc(5% - 2px * 2);
    }
    .col_w_2 {
        width: calc(10% - 2px * 2);
    }
    .col_w_3 {
        width: calc(15% - 2px * 2);
    }
    .col_w_4 {
        width: calc(20% - 2px * 2);
    }
    .col_w_5 {
        width: calc(25% - 2px * 2);
    }
    .col_w_6 {
        width: calc(30% - 2px * 2);
    }
    .col_w_7 {
        width: calc(35% - 2px * 2);
    }
    .col_w_8 {
        width: calc(40% - 2px * 2);
    }
    .col_w_9 {
        width: calc(45% - 2px * 2);
    }
    .col_w_10 {
        width: calc(50% - 2px * 2);
    }
    .col_w_11 {
        width: calc(55% - 2px * 2);
    }
    .col_w_12 {
        width: calc(60% - 2px * 2);
    }
    .col_w_13 {
        width: calc(65% - 2px * 2);
    }
    .col_w_14 {
        width: calc(70% - 2px * 2);
    }
    .col_w_15 {
        width: calc(75% - 2px * 2);
    }
    .col_w_16 {
        width: calc(80% - 2px * 2);
    }
    .col_w_17 {
        width: calc(85% - 2px * 2);
    }
    .col_w_18 {
        width: calc(90% - 2px * 2);
    }
    .col_w_19 {
        width: calc(95% - 2px * 2);
    }
    .col_w_20 {
        width: calc(100% - 2px * 2);
    }
    .layout-rowset-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .layout-rowset {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #409EFF;
        border-radius: 4px;
        padding: 10px;
        padding-top: 0;
        box-sizing: border-box;
    }
    .layout-rowset-title {
        text-align: left;
        color: #fff;
        margin: 10px 0;
        font-size: 18px;
        line-height: 30px;
    }
    .layout-rowset-form {
        background-color: #fff;
        overflow: hidden;
    }
    .layout-rowset-form-box {
        position: relative;
        text-align: left;
        margin: 24px 50px;
    }
    .layout-rowset-label {
        color: #409EFF;
        font-size: 14px;
        display: inline-block;
        width: 70px;
    }
    .layout-rowset-form-box input {
        width: 120px;
        height: 22px;
        padding: 0 10px;
        color: #4a4a4a;
        border: 1px solid #409EFF;
        border-radius: 2px;
    }
    .layout-rowset-error {
        position: absolute;
        font-size: 12px;
        color: #f56c6c;
        bottom: -16px;
        left: 70px;
    }
    .layout-rowset-form-box:nth-last-child(1) {
        text-align: center;
    }
    .layout-rowset-button {
        margin: 0 40px;
    }
    .layout-dialogset-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .layout-dialogset {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #409EFF;
        border-radius: 4px;
        padding: 10px;
        padding-top: 0;
        box-sizing: border-box;
    }
    .layout-dialogset-title {
        text-align: left;
        color: #fff;
        margin: 10px 0;
        font-size: 18px;
        line-height: 30px;
    }
    .layout-dialogset-form {
        background-color: #fff;
        overflow: hidden;
    }
    .layout-dialogset-box {
        position: relative;
        text-align: left;
        margin: 24px 50px;
    }
    .layout-dialogset-label:nth-child(1) {
        color: #409EFF;
        font-size: 14px;
        display: inline-block;
        width: 80px;
        padding-right: 10px;
        text-align: right;
    }
    .layout-dialogset-label:nth-of-type(2) {
        color: #409EFF;
        font-size: 14px;
        display: inline-block;
        width: 20px;
        padding-left: 10px;
        text-align: left;
    }
    .layout-dialogset-box:nth-child(1) input {
        width: 120px;
        height: 22px;
        padding: 0 10px;
        color: #4a4a4a;
        border: 1px solid #409EFF;
        border-radius: 2px;
    }
    .layout-dialogset-box:nth-child(n+2) input {
        width: 60px;
        height: 22px;
        padding: 0 10px;
        color: #4a4a4a;
        border: 1px solid #409EFF;
        border-radius: 2px;
    }
    .layout-dialogset-error {
        position: absolute;
        font-size: 12px;
        color: #f56c6c;
        bottom: -16px;
        left: 90px;
    }
    .layout-dialogset-form-box:nth-last-child(1) {
        text-align: center;
    }
    .layout-dialogset-button {
        margin: 0 40px;
    }
    .layout-moduleset-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .layout-moduleset {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #409EFF;
        border-radius: 4px;
        padding: 10px;
        padding-top: 0;
        box-sizing: border-box;
    }
    .layout-moduleset-title {
        text-align: left;
        color: #fff;
        margin: 10px 0;
        font-size: 18px;
        line-height: 30px;
    }
    .layout-moduleset-form {
        background-color: #fff;
        overflow: hidden;
    }
    .layout-moduleset-box {
        position: relative;
        padding: 0 20px;
        text-align: left;
        margin: 24px 50px;
    }
    .layout-moduleset-lebel {
        color: #409EFF;
        font-size: 14px;
        display: inline-block;
        width: 40px;
        padding-right: 10px;
        text-align: right;
    }
    .layout-moduleset-box input {
        width: 120px;
        height: 22px;
        padding: 0 10px;
        color: #4a4a4a;
        border: 1px solid #409EFF;
        border-radius: 2px;
    }
    .layout-moduleset-error {
        position: absolute;
        font-size: 12px;
        color: #f56c6c;
        bottom: -16px;
        left: 70px;
    }
    .layout-moduleset-box:nth-child(2) {
        margin-top: 40px;
    }
    .layout-moduleset-button {
        margin: 0 20px;
    }
    .layout-dialogdel-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .layout-dialogdel-label {
        color: #f56c6c;
        font-size: 16px;
        display: inline-block;
        padding-right: 10px;
        text-align: right;
    }
</style>
