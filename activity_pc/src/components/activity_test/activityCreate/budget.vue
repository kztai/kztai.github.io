<template>
    <div class="budget">
        <div class="info-title">
            <div>
                <lm-link-text
                        ref="smText1"
                        refId="smText1"
                        v-show="pvt_isShow.v1 === 'smText1'"
                        :paraVarPair="pvt_v1.smText1.paraVarPair"
                        :para="pvt_v1.smText1.para"
                        :attr="pvt_v1.smText1.attr">
                </lm-link-text>
            </div>
            <div class="budget-title-btn" v-show="!budgetShow">
                <lm-button
                        ref="smButton4"
                        refId="smButton4"
                        v-show="pvt_isShow.v12 === 'smButton4'"
                        :paraVarPair="pvt_v12.smButton4.paraVarPair"
                        :para="pvt_v12.smButton4.para"
                        :attr="pvt_v12.smButton4.attr">
                </lm-button>
            </div>
        </div>
        <transition name="fade" class="fade">
            <div class="info-option" v-show="budgetShow">
                <div class="row item-form">
                    <div class="row item-form-header">
                        <div class="col col_w_4">
                            <lm-link-text
                                    ref="smText2"
                                    refId="smText2"
                                    v-show="pvt_isShow.v2 === 'smText2'"
                                    :paraVarPair="pvt_v2.smText2.paraVarPair"
                                    :para="pvt_v2.smText2.para"
                                    :attr="pvt_v2.smText2.attr">
                            </lm-link-text>
                        </div>
                        <div class="col col_w_3">
                            <lm-link-text
                                    ref="smText3"
                                    refId="smText3"
                                    v-show="pvt_isShow.v3 === 'smText3'"
                                    :paraVarPair="pvt_v3.smText3.paraVarPair"
                                    :para="pvt_v3.smText3.para"
                                    :attr="pvt_v3.smText3.attr">
                            </lm-link-text>
                        </div>
                        <div class="col col_w_3">
                            <lm-link-text
                                    ref="smText4"
                                    refId="smText4"
                                    v-show="pvt_isShow.v4 === 'smText4'"
                                    :paraVarPair="pvt_v4.smText4.paraVarPair"
                                    :para="pvt_v4.smText4.para"
                                    :attr="pvt_v4.smText4.attr">
                            </lm-link-text>
                        </div>
                        <div class="col col_w_8">
                            <lm-link-text
                                    ref="smText5"
                                    refId="smText5"
                                    v-show="pvt_isShow.v5 === 'smText5'"
                                    :paraVarPair="pvt_v5.smText5.paraVarPair"
                                    :para="pvt_v5.smText5.para"
                                    :attr="pvt_v5.smText5.attr">
                            </lm-link-text>
                        </div>
                        <div class="col col_w_2">
                            <lm-link-text
                                    ref="smText6"
                                    refId="smText6"
                                    v-show="pvt_isShow.v6 === 'smText6'"
                                    :paraVarPair="pvt_v6.smText6.paraVarPair"
                                    :para="pvt_v6.smText6.para"
                                    :attr="pvt_v6.smText6.attr">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="row item-form-con" ref="itemForm">
                        <div ref="budgetAdd">
                            <budget-add
                                    ref="smBudgetAdd"
                                    refId="smBudgetAdd"
                                    v-show="pvt_isShow.v7 === 'smBudgetAdd'"
                                    v-for="(item, index) in pvt_v7.smBudgetAdd.forData"
                                    :number="index"
                                    :paraVarPair="pvt_v7.smBudgetAdd.paraVarPair"
                                    :para="item.para"
                                    :attr="item.attr">
                            </budget-add>
                        </div>
                        <div v-show='!itemBtnShow' class="budget-btn-con">
                            <div class="budget-btn-dv">
                                <sign-btn
                                        ref="smSignBtn"
                                        refId="smSignBtn"
                                        v-show="pvt_isShow.v8 === 'smSignBtn'"
                                        v-for="(item, index) in pvt_v8.smSignBtn.forData"
                                        :number="index"
                                        :paraVarPair="pvt_v8.smSignBtn.paraVarPair"
                                        :para="item.para"
                                        :attr="item.attr">
                                </sign-btn>
                            </div>
                            <div class="budget-btn-close">
                                <lm-button
                                        ref="smButton2"
                                        refId="smButton2"
                                        v-show="pvt_isShow.v10 === 'smButton2'"
                                        :paraVarPair="pvt_v10.smButton2.paraVarPair"
                                        :para="pvt_v10.smButton2.para"
                                        :attr="pvt_v10.smButton2.attr">
                                </lm-button>
                            </div>
                            <div>
                                <lm-button
                                        ref="smButton3"
                                        refId="smButton3"
                                        v-show="pvt_isShow.v11 === 'smButton3'"
                                        :paraVarPair="pvt_v11.smButton3.paraVarPair"
                                        :para="pvt_v11.smButton3.para"
                                        :attr="pvt_v11.smButton3.attr">
                                </lm-button>
                            </div>
                        </div>
                        <div class="mar-t-20" v-show='itemBtnShow'>
                            <lm-button
                                    ref="smButton1"
                                    refId="smButton1"
                                    v-show="pvt_isShow.v9 === 'smButton1'"
                                    :paraVarPair="pvt_v9.smButton1.paraVarPair"
                                    :para="pvt_v9.smButton1.para"
                                    :attr="pvt_v9.smButton1.attr">
                            </lm-button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    import budgetAdd from './component/budgetAdd';
    import signBtn from './component/signBtn';

    export default {
        components: {budgetAdd, signBtn},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12"],
                    subModule: ["smText1", "smText2", "smText3", "smText4", "smText5", "smText6", "smBudgetAdd", "smSignBtn", "smButton1", "smButton2", "smButton3", "smButton4"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                    "v6": null,
                    "v7": null,
                    "v8": null,
                    "v9": null,
                    "v10": null,
                    "v11": null,
                    "v12": null,
                },

                pvt_eventPortInput: [],


                mac: mac.mac,
                debugFlag:true,
                activityID: [],
                activityBudgetFormID: [],
                dragActivityBudgetFormID:[],
                dragIndex: '',
                targetIndex:'',
                itemBtnShow: true,
                budgetShow:true,
                btnName:[],
                    // [['办公费', ''], ['印刷费', ''], ['交通费', ''], ['租赁费', ''], ['通讯费', ''], ['住宿费', ''], ['餐饮费', ''], ['培训费', ''], ['劳务费', ''], ['布置费', ''], ['保险费', ''], ['服装', ''],
                    // ['礼品', ''], ['奖状', ''], ['其他', '']],
                width: [],
                    // ['72px', '72px', '72px', '72px', '72px', '72px', '72px', '72px', '72px', '72px', '72px', '72px', '72px', '72px', '72px'],
                height:[]
                    // ['32px', '32px', '32px', '32px', '32px', '32px', '32px', '32px', '32px', '32px', '32px', '32px', '32px', '32px', '32px'],
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '活动预算设置'
                        },
                        attr: {
                            fontSize: '18px', height: '64px', color: '#12B0FF'
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: '支出分类'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '单位'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: '预算支出'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: '备注'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v6: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: '操作'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v7: function () {
                let loopModule = {
                    smBudgetAdd: {
                        para: {
                            activityBudgetFormID: this.activityBudgetFormID,
                            parentID: this.activityID
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smBudgetAdd: {
                        paraVarPair: {},
                        forData: forData.smBudgetAdd,
                    },
                }
            }, pvt_v8: function () {
                let loopModule = {
                    smSignBtn: {
                        para: {
                            name: this.btnName,
                        },
                        attr: {
                            width: this.width, height: this.height
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smSignBtn: {
                        paraVarPair: {},
                        forData: forData.smSignBtn,
                    },
                }
            }, pvt_v9: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: ['新增预算选项', 'el-icon-arrow-up']
                        },
                        attr: {
                            size: 'mini'
                        }
                    }
                }
            }, pvt_v10: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-close']
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            }, pvt_v11: function () {
                return {
                    smButton3: {
                        paraVarPair: {},
                        para: {
                            name: ['收起表单','el-icon-arrow-up']
                        },
                        attr: {
                            type:'text',iconIsRight:true
                        }
                    }
                }
            }, pvt_v12: function () {
                return {
                    smButton4: {
                        paraVarPair: {},
                        para: {
                            name: ['展开表单','el-icon-arrow-down']
                        },
                        attr: {
                            type:'text',iconIsRight:true,height:'32px'
                        }
                    }
                }
            }
        },
        watch: {},
        mounted: function () {
            this.pvt_initSysData();
            let ulEl = this.$refs.budgetAdd;
            ulEl.addEventListener('dragstart', this.dragStart);
            ulEl.addEventListener('dragover', this.dragOver);
            ulEl.addEventListener('dragend', this.dragEnd);
        },
        beforeDestroy() {
            let ulEl = this.$refs.budgetAdd;
            ulEl.removeEventListener('dragstart', this.dragStart);
            ulEl.removeEventListener('dragover', this.dragOver);
            ulEl.removeEventListener('dragend', this.dragEnd);
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smText3',
                    sm4: 'smText4',
                    sm5: 'smText5',
                    sm6: 'smText6',
                    sm7: 'smBudgetAdd',
                    sm8: 'smSignBtn',
                    sm9: 'smButton1',
                    sm10: 'smButton2',
                    sm11: 'smButton3',
                    sm12: 'smButton4',
                }

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule2':
                            $this.sm[ref.sm2].startModule(function () {
                                para.nStep = 'startModule3';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule3':
                            $this.sm[ref.sm3].startModule(function () {
                                para.nStep = 'startModule4';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule4':
                            $this.sm[ref.sm4].startModule(function () {
                                para.nStep = 'startModule5';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule5':
                            $this.sm[ref.sm5].startModule(function () {
                                para.nStep = 'startModule6';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule6':
                            $this.sm[ref.sm6].startModule(function () {
                                para.nStep = 'queryactivityOption';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'queryactivityOption':
                            $this.width = [];
                            $this.height = [];
                            objectName = $this.mac.tb.activityOption;
                            parentRecord = null;
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.activityOption.budget] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    $this.btnName = dbData[$this.mac.fd.activityOption.budget][0];
                                    for (var i = 0; i < $this.btnName.length; i++) {
                                        $this.width.push('72px');
                                        $this.height.push('32px');
                                    }
                                    para.nStep = 'queryGroupActivityBudgetForm';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryGroupActivityBudgetForm':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    $this.activityBudgetFormID = dbData[$this.mac.fd.id];
                                    for (var i = 0; i < $this.activityBudgetFormID.length; i++) {
                                        $this.activityID.push($this.para.activityID);
                                    }
                                    para.i = 0;
                                    $this.$nextTick(() => {
                                        if ($this.activityBudgetFormID.length === 0) {
                                            para.nStep = 'startModule8';
                                        } else {
                                            para.nStep = 'startModule7';
                                        }
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'startModule7':
                            $this.sm[ref.sm7][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.activityBudgetFormID.length) {
                                    para.nStep = 'startModule8';
                                    para.i = 0;
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule8':
                            $this.sm[ref.sm8][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.btnName.length) {
                                    para.nStep = 'startModule9';
                                    para.i = 0;
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule9':
                            $this.sm[ref.sm9].startModule(function () {
                                para.nStep = 'startModule10';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule10':
                            $this.sm[ref.sm10].startModule(function () {
                                para.nStep = 'startModule11';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule11':
                            $this.sm[ref.sm11].startModule(function () {
                                para.nStep = 'startModule12';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule12':
                            $this.sm[ref.sm12].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText1", "smText2", "smText3", "smText4", "smText5", "smText6", "smBudgetAdd", "smSignBtn", "smButton1", "smButton2", "smButton3", "smButton4"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            dragStart(event) {
                let $this = this;
                //firefox设置了setData后元素才能拖动！！！！
                event.dataTransfer.setData("te", event.target.innerHTML); //不能使用text，firefox会打开新tab
                // event.dataTransfer.setData("self", event.target);
                // this.draging = event.target.parentNode;
                this.draging = event.target;
                $this.dragActivityBudgetFormID = [];
                for(var i =0;i<$this.activityBudgetFormID.length;i++){
                    $this.dragActivityBudgetFormID.push($this.activityBudgetFormID[i])
                }
            },
            dragOver(event) {
                let $this = this;
                // event.preventDefault();
                let target = event.target;
                // 因为dragover会发生在ul上，所以要判断是不是li
                if (target.className.indexOf('budget-top')!==-1&& target !== this.draging) {
                    let dragIndex = this._index(this.draging.parentNode); // 正在拖动的元素
                    let targetIndex = this._index(target.parentNode); // 目标
                    /*
                    当前li的index大于容器li时就插入在容器的前面，反之插入在容器的后面
                     */
                    this.dragIndex = dragIndex;
                    this.targetIndex = targetIndex;
                    let dragId = $this.dragActivityBudgetFormID[$this.dragIndex];
                    let targetId = $this.dragActivityBudgetFormID[$this.targetIndex];
                    $this.dragActivityBudgetFormID[$this.dragIndex] = targetId;
                    $this.dragActivityBudgetFormID[$this.targetIndex] = dragId;
                    if (dragIndex < targetIndex) {
                        // 插后面
                        target.parentNode.parentNode.insertBefore(this.draging.parentNode, target.parentNode.nextSibling);
                        // this.resortRandom = parseInt(Math.random() * 100000)
                    } else {
                        // 插前面
                        target.parentNode.parentNode.insertBefore(this.draging.parentNode, target.parentNode);
                        // this.resortRandom = parseInt(Math.random() * 100000)
                    }
                }
            },
            dragEnd(event) {
                let $this = this;
                $this.budgetItemIDChange(function () {

                },function (error) {
                    console.error(error)
                })
            },
            _index(el) {
                let index = 0;
                if (!el || !el.parentNode) {
                    return -1;
                }
                while (el && (el = el.previousElementSibling)) {
                    //console.log(el);
                    index++;
                }
                return index;
            },
            budgetItemIDChange:function(successCallBack, errorCallBack){
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'budget.budgetItemIDChange';

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                        case 'activityEnrollFormRead':
                            if($this.equar($this.dragActivityBudgetFormID, $this.activityBudgetFormID)){
                                para.nStep = 'end'
                                dbFlag += 1;
                                break;
                            }
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = $this.dragActivityBudgetFormID;
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.allData = dbData;
                                    para.nStep = 'activityEnrollFormModify'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.budgetItemIDChange(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityEnrollFormModify':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = $this.activityBudgetFormID;
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = para.allData[$this.mac.fd.groupActivityBudgetForm.name];
                            dbData[$this.mac.fd.groupActivityBudgetForm.unit] = para.allData[$this.mac.fd.groupActivityBudgetForm.unit];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = para.allData[$this.mac.fd.groupActivityBudgetForm.budgetAmount];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetRemarks] = para.allData[$this.mac.fd.groupActivityBudgetForm.budgetRemarks];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetRemarks] = para.allData[$this.mac.fd.groupActivityBudgetForm.budgetRemarks];
                            dbData[$this.mac.fd.groupActivityBudgetForm.actualAmount] = para.allData[$this.mac.fd.groupActivityBudgetForm.actualAmount];
                            dbData[$this.mac.fd.groupActivityBudgetForm.actualRemarks] = para.allData[$this.mac.fd.groupActivityBudgetForm.actualRemarks];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.i = 0;
                                    para.activityBudgetFormID = $this.activityBudgetFormID;
                                    $this.activityBudgetFormID=[];
                                    $this.$nextTick(() => {
                                        $this.activityBudgetFormID = para.activityBudgetFormID;
                                        $this.$nextTick(() => {
                                            para.nStep = 'ticketTypeAddStartModule'
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.budgetItemIDChange(successCallBack, errorCallBack)
                                            }
                                        })
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'ticketTypeAddStartModule':
                            $this.sm['smBudgetAdd'][para.i].startModule(function () {
                                para.i++
                                if(para.i === $this.activityBudgetFormID.length){
                                    para.nStep = 'end';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetItemIDChange(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                            para.successCallBack('success');
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                    },function (error) {console.error(error)})
            },

            budgetItemAdd: function (data, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'budget.budgetItemAdd';

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                        case 'queryActivityBudgetForm':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.allName = dbData[$this.mac.fd.groupActivityBudgetForm.name];
                                    para.nStep = 'activityBudgetFormNew';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.budgetItemAdd(data, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityBudgetFormNew':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = $this.para.activityID;
                            dbData = {};
                            if (para.allName.indexOf(data['text']) !== -1) {
                                let k = 1;
                                para.tempName = data['text'];
                                para.tempName = para.tempName + k;
                                while (para.allName.indexOf(para.tempName) !== -1) {
                                    k++;
                                    para.tempName = data['text'] + k;
                                }
                                data['text'] = para.tempName;
                            }
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = [data['text']];
                            dbData[$this.mac.fd.groupActivityBudgetForm.unit] = ['元'];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = [0];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    $this.activityBudgetFormID.push(dbData[$this.mac.fd.id][0]);
                                    $this.activityID.push($this.para.activityID);
                                    $this.$nextTick(() => {
                                        $this.refreshSm('smBudgetAdd', $this.activityBudgetFormID, function () {
                                            para.nStep = 'end';
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.budgetItemAdd(data, successCallBack, errorCallBack)
                                            }
                                        }, para.errorCallBack)
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                            para.successCallBack('success');
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            refreshSm: function (refID, arr, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'budget.refreshSm';

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                            para.i = 0;
                            dbFlag += 1;
                            para.nStep = 'loopRefresh';
                            break
                        case 'loopRefresh':
                            $this.sm[refID][para.i].startModule(function () {
                                para.i++
                                if (para.i === arr.length) {
                                    para.nStep = 'end';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.refreshSm(refID, arr, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack)
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            budgetItemDelete: function (id, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'signUp.budgetItemDelete';

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                        case 'queryGroupActivityEnrollForm':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [id];
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.name = dbData[$this.mac.fd.groupActivityBudgetForm.name][0];
                                    if (para.name === null) {
                                        para.name = '选中项'
                                    }
                                    para.nStep = 'deleteTip';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.budgetItemDelete(id, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'deleteTip':
                            $this.$confirm('此操作将删除' + para.name + ', 是否继续?', '提示', {
                                confirmButtonText: '删除',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                para.nStep = 'groupActivityEnrollFormDelete'
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetItemDelete(id, successCallBack, errorCallBack)
                                }
                            }).catch(() => {
                                $this.$message({
                                    type: 'info',
                                    message: '已取消删除'
                                });
                                para.nStep = 'default'
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetItemDelete(id, successCallBack, errorCallBack)
                                }
                            });
                            break
                        case 'groupActivityEnrollFormDelete':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            $this.sys.api.recordDelete(objectName, [id],
                                function () {
                                    para.index = $this.activityBudgetFormID.indexOf(id);
                                    $this.activityBudgetFormID.splice(para.index, 1);
                                    $this.activityID.splice(para.index, 1);
                                    $this.$nextTick(() => {
                                        if ($this.activityBudgetFormID.length === 0) {
                                            para.nStep = 'end';
                                        } else {
                                            para.nStep = 'signUpAddStartModule';
                                        }
                                        para.i = 0;
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.budgetItemDelete(id, successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'signUpAddStartModule':
                            $this.sm['smBudgetAdd'][para.i].startModule(function () {
                                para.i++;
                                if (para.i === $this.activityBudgetFormID.length) {
                                    para.nStep = 'end';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetItemDelete(id, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack)
                            break
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                            para.successCallBack('success');
                            return;
                        default:
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            addBudgetShow: function () {
                this.itemBtnShow = false;
            },
            equar:function(a, b) {
                // 判断数组的长度
                if (a.length !== b.length) {
                    return false
                } else {
                    // 循环遍历数组的值进行比较
                    for (let i = 0; i < a.length; i++) {
                        if (a[i] !== b[i]) {
                            return false
                        }
                    }
                    return true;
                }
            },
            addBudgetHide: function () {
                this.itemBtnShow = true;
            },
            budgetFormShow:function(){
                if(this.budgetShow === true){
                    this.budgetShow = false
                } else{
                    this.budgetShow = true
                }
            },

            smSignBtn_signItemAddEvent: function (data, successCallBack, errorCallBack) {
                this.budgetItemAdd(data, successCallBack, errorCallBack)
            },
            smBudgetAdd_budgetItemDeleteEvent: function (id, successCallBack, errorCallBack) {
                this.budgetItemDelete(id, successCallBack, errorCallBack);
            },
            smButton1_buttonClickEvent: function () {
                this.addBudgetShow()
            },
            smButton2_buttonClickEvent: function () {
                this.addBudgetHide()
            },
            smButton3_buttonClickEvent: function () {
                this.budgetFormShow()
            },
            smButton4_buttonClickEvent: function () {
                this.budgetFormShow()
            }
        }
    }
</script>
<style lang="scss">
    .budget {
        box-shadow: 0px 0px 8px 0px rgba(48, 49, 51, 0.1);
        border-radius: 4px;

        .info-title {
            padding: 0 40px;
            height: 64px;
            background: #ffffff;
            margin-top: 15px;
            border-bottom: 2px solid #12B0FF;
        }

        .info-option {
            padding: 40px 95px;
            background: #ffffff;
        }

        .el-icon-close {
            font-size: 20px;
            color: #606266;
        }

        .el-icon-close:hover {
            color: #409EFF;
        }
    }
</style>
<style lang="scss" scoped>
    .budget {
        box-shadow: 0px 0px 8px 0px rgba(48, 49, 51, 0.1);
        border-radius: 4px;

        .info-title {
            position: relative;
            padding: 0 40px;
            height: 64px;
            background: #ffffff;
            margin-top: 15px;
            border-bottom: 2px solid #12B0FF;
            .budget-title-btn{
                position: absolute;
                top:50%;
                left: 50%;
                margin-top: -16px;
                margin-left: -38px;
            }
        }

        .fade {
            transition: all linear .2s;
        }

        .fade-enter-active {
            animation: identifier .2s;
            overflow: hidden;
        }

        /*.fade-enter-to { animation: identifier .2s;    overflow: hidden; }*/

        .fade-leave-active {
            animation: against .2s;
            overflow: hidden;
        }

        @keyframes identifier {

            from {
                height: 0;
            }

            to {
                height: 500px;
            }

        }

        @keyframes against {

            from {
                height: 500px;
            }

            to {
                height: 0;
            }

        }

        .info-option {
            padding: 40px 95px;
            background: #ffffff;

            .item-form {
                background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(220, 223, 230, 1);
                border-radius: 4px;

                .item-form-header {
                    padding: 0 20px;
                    text-align: center;
                    height: 40px;
                    background: linear-gradient(0deg, rgba(242, 242, 242, 1) 0%, rgba(249, 249, 249, 1) 49%, rgba(255, 255, 255, 1) 100%);
                    box-shadow: 0px 1px 3px 0px rgba(48, 49, 51, 0.15);
                    border-radius: 4px 4px 0px 0px;
                }

                .item-form-con {
                    padding: 20px 20px 20px 20px;
                }

                .budget-btn-con {
                    position: relative;

                    .budget-btn-dv {
                        margin: 10px 0;
                    }

                    .budget-btn-close {
                        position: absolute;
                        right: 5px;
                        top: -2px;
                    }
                }
            }
        }

        .mar-t-20 {
            margin-top: 20px;
        }
    }


    .col {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
    }

    .col_w_1 {
        width: 5%;
    }

    .col_w_2 {
        width: 10%;
    }

    .col_w_3 {
        width: 15%;
    }

    .col_w_4 {
        width: 20%;
    }

    .col_w_5 {
        width: 25%;
    }

    .col_w_6 {
        width: 30%;
    }

    .col_w_7 {
        width: 35%;
    }

    .col_w_8 {
        width: 40%;
    }

    .col_w_9 {
        width: 45%;
    }

    .col_w_10 {
        width: 50%;
    }

    .col_w_11 {
        width: 55%;
    }

    .col_w_12 {
        width: 60%;
    }

    .col_w_13 {
        width: 65%;
    }

    .col_w_14 {
        width: 70%;
    }

    .col_w_15 {
        width: 75%;
    }

    .col_w_16 {
        width: 80%;
    }

    .col_w_17 {
        width: 85%;
    }

    .col_w_18 {
        width: 90%;
    }

    .col_w_19 {
        width: 95%;
    }

    .col_w_20 {
        width: 100%;
    }
</style>