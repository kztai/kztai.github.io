<template>
    <div class="sign-up">
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
        </div>
            <div class="info-option">
                <div class="item">
                    <div class="item-name">
                        <lm-link-text
                                ref="smText2"
                                refId="smText2"
                                v-show="pvt_isShow.v2 === 'smText2'"
                                :paraVarPair="pvt_v2.smText2.paraVarPair"
                                :para="pvt_v2.smText2.para"
                                :attr="pvt_v2.smText2.attr">
                        </lm-link-text>
                    </div>
                    <div class="show-btn" v-show = "!infoShow">
                        <lm-button
                                ref="smButton4"
                                refId="smButton4"
                                v-show="pvt_isShow.v13 === 'smButton4'"
                                :paraVarPair="pvt_v13.smButton4.paraVarPair"
                                :para="pvt_v13.smButton4.para"
                                :attr="pvt_v13.smButton4.attr">
                        </lm-button>
                    </div>
                    <transition name="fade" class="fade">
                        <div class="item-content"  v-show = "infoShow">
                            <div class="item-form">
                                <div class="row item-form-header">
                                    <div class="col col_w_14">
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
                                    <div class="col col_w_3">
                                        <lm-link-text
                                                ref="smText5"
                                                refId="smText5"
                                                v-show="pvt_isShow.v5 === 'smText5'"
                                                :paraVarPair="pvt_v5.smText5.paraVarPair"
                                                :para="pvt_v5.smText5.para"
                                                :attr="pvt_v5.smText5.attr">
                                        </lm-link-text>
                                    </div>
                                </div>
                                <div class="row item-form-con">
                                    <div>
                                        <sign-up-add
                                                ref="smName"
                                                refId="smName"
                                                v-show="pvt_isShow.v6 === 'smName'"
                                                :paraVarPair="pvt_v6.smName.paraVarPair"
                                                :para="pvt_v6.smName.para"
                                                :attr="pvt_v6.smName.attr">
                                        </sign-up-add>
                                    </div>
                                    <div>
                                        <sign-up-add
                                                ref="smPhone"
                                                refId="smPhone"
                                                v-show="pvt_isShow.v7 === 'smPhone'"
                                                :paraVarPair="pvt_v7.smPhone.paraVarPair"
                                                :para="pvt_v7.smPhone.para"
                                                :attr="pvt_v7.smPhone.attr">
                                        </sign-up-add>
                                    </div>
                                    <div ref="signUpAdd">
                                        <sign-up-add
                                                ref="smSignUpAdd"
                                                refId="smSignUpAdd"
                                                v-show="pvt_isShow.v8 === 'smSignUpAdd'"
                                                v-for="(item, index) in pvt_v8.smSignUpAdd.forData"
                                                :number="index"
                                                :paraVarPair="pvt_v8.smSignUpAdd.paraVarPair"
                                                :para="item.para"
                                                :attr="item.attr">
                                        </sign-up-add>
                                    </div>
                                </div>
                                <div class="add-sign-btn" v-show = '!itemBtnShow'>
                                    <lm-button
                                            ref="smButton5"
                                            refId="smButton5"
                                            v-show="pvt_isShow.v14 === 'smButton5'"
                                            :paraVarPair="pvt_v14.smButton5.paraVarPair"
                                            :para="pvt_v14.smButton5.para"
                                            :attr="pvt_v14.smButton5.attr">
                                    </lm-button>
                                </div>
                                <transition name="fade" class="fade">
                                    <div class="sign-btn-dv" v-show = 'itemBtnShow'>
                                        <div class="close-sign-btn">
                                            <lm-button
                                                    ref="smButton6"
                                                    refId="smButton6"
                                                    v-show="pvt_isShow.v15 === 'smButton6'"
                                                    :paraVarPair="pvt_v15.smButton6.paraVarPair"
                                                    :para="pvt_v15.smButton6.para"
                                                    :attr="pvt_v15.smButton6.attr">
                                            </lm-button>
                                        </div>
                                        <div class="row item-btn-add">
                                            <sign-btn
                                                    ref="smSignBtn1"
                                                    refId="smSignBtn1"
                                                    v-show="pvt_isShow.v9 === 'smSignBtn1'"
                                                    v-for="(item, index) in pvt_v9.smSignBtn1.forData"
                                                    :number="index"
                                                    :paraVarPair="pvt_v9.smSignBtn1.paraVarPair"
                                                    :para="item.para"
                                                    :attr="item.attr">
                                            </sign-btn>
                                        </div>
                                        <div class="row item-custom-title">
                                            <lm-link-text
                                                    ref="smText6"
                                                    refId="smText6"
                                                    v-show="pvt_isShow.v10 === 'smText6'"
                                                    :paraVarPair="pvt_v10.smText6.paraVarPair"
                                                    :para="pvt_v10.smText6.para"
                                                    :attr="pvt_v10.smText6.attr">
                                            </lm-link-text>
                                        </div>
                                        <div class="row item-btn-add">
                                            <sign-btn
                                                    ref="smSignBtn2"
                                                    refId="smSignBtn2"
                                                    v-show="pvt_isShow.v11 === 'smSignBtn2'"
                                                    v-for="(item, index) in pvt_v11.smSignBtn2.forData"
                                                    :number="index"
                                                    :paraVarPair="pvt_v11.smSignBtn2.paraVarPair"
                                                    :para="item.para"
                                                    :attr="item.attr">
                                            </sign-btn>
                                        </div>
                                        <div class="row item-retract-btn">
                                            <lm-button
                                                ref="smButton3"
                                                refId="smButton3"
                                                v-show="pvt_isShow.v12 === 'smButton3'"
                                                :paraVarPair="pvt_v12.smButton3.paraVarPair"
                                                :para="pvt_v12.smButton3.para"
                                                :attr="pvt_v12.smButton3.attr">
                                            </lm-button>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        <el-button @click="addData()">添加数据</el-button>
    </div>
</template>
<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    import signUpAdd from './component/signUpAdd';
    import signBtn from './component/signBtn';

    export default {
        components: {signUpAdd,signBtn},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12", "v13", "v14", "v15"],
                    subModule: ["smText1", "smText2", "smText3", "smText4", "smText5", "smName", "smPhone", "smSignUpAdd","smSignBtn1","smText6","smSignBtn2","smButton3","smButton4","smButton5","smButton6"]
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
                    "v13": null,
                    "v14": null,
                    "v15": null,
                },
                pvt_eventPortInput: [],

                mac: mac.mac,
                debugFlag:true,
                infoShow:true,
                itemBtnShow:false,
                draging: '',
                dragIndex:'',
                targetIndex:'',
                btnUsed:[true,true],
                dragActivityEnrollFormArr:[],
                dragcommonlyType:[],
                activityEnrollFormArr:[],
                activityID:[],
                commonlyType:[],
                btnName1:[
                    // ['姓名',''],['手机',''],['微信',''],['QQ',''],['邮箱',''],['公司',''],['部门',''],['职位',''],['行业',''],['性别',''],['年龄',''],['出生年月',''],
                    // ['毕业院校',''],['所在城市',''],['身份证号',''],['通讯地址',''],['紧急联系人',''],['紧急联系人电话',''],['银行卡号',''],['自我介绍',''],
                    // ['月收入',''],['国籍',''],['户籍地',''],['籍贯',''],['民族',''],['政治面貌','']
                ],
                width1:['72px','72px','72px','72px','72px','72px','72px','72px','72px','72px','72px','72px','72px','72px','72px','72px','98px','126px','72px','72px','72px','72px','72px','72px','72px','72px'],
                height1:['32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px','32px'],
                btnName2:[
                    // ['单行文本','el-icon-document'], ['多行文本','el-icon-tickets'], ['单选框','el-icon-more'], ['复选框','el-icon-more-outline'], ['数字输入框','el-icon-sort-up'], ['文件上传','el-icon-upload'], ['图片上传','el-icon-upload']
                ],
                width2:['98px','98px','98px','98px','98px','98px','98px'],
                height2:['32px','32px','32px','32px','32px','32px','32px'],
                component1:[
                    // 'lm-input-text','lm-input-phone','lm-input-text','lm-input-text','lm-input-email','lm-input-text','lm-input-text','lm-input-text','lm-input-text','lm-radio','lm-input-text','lm-input-text',
                    // 'lm-input-text','lm-cascader','lm-input-idcard','lm-input-text','lm-input-text','lm-input-phone','lm-input-bank','lm-input-text',
                    // 'lm-input-text','lm-input-text','lm-cascader','lm-input-text','lm-dropdown','lm-dropdown'
                ],
                component2:[
                    // 'lm-input-text','lm-input-text','lm-radio','lm-checkbox','lm-input-number','lm-file-upload','lm-picture-upload'
                ],
                type:{
                    commonly:0,
                    singText:1,
                    multipleText:2,
                    radio:3,
                    checkBox:4,
                    numberInput:5,
                    fileUpload:6,
                    pictureUpload:7
                }
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '报名设置'
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
                            textData: '报名表单'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '报名项的名称'
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
                            textData: '是否必填'
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
                            textData: '操作'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            },pvt_v6: function () {
                return {
                    smName: {
                        paraVarPair: {},
                        para: {
                            name:'姓名'
                        },
                        attr: {
                            disabled:true,commonlyType:this.type.commonly
                        }
                    }
                }
            },pvt_v7: function () {
                return {
                    smPhone: {
                        paraVarPair: {},
                        para: {
                            name:'手机'
                        },
                        attr: {
                            disabled:true,commonlyType:this.type.commonly
                        }
                    }
                }
            },pvt_v8: function () {
                let loopModule = {
                    smSignUpAdd: {
                        para: {
                            activityEnrollFormID:this.activityEnrollFormArr,
                            parentID:this.activityID
                        },
                        attr: {
                            commonlyType:this.commonlyType
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smSignUpAdd: {
                        paraVarPair: {},
                        forData : forData.smSignUpAdd,
                    },
                }
            },pvt_v9: function () {
                let loopModule = {
                    smSignBtn1: {
                        para: {
                            name:this.btnName1,
                            componentName:this.component1,
                        },
                        attr: {
                            width:this.width1,height:this.height1,btnUsed:this.btnUsed
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smSignBtn1: {
                        paraVarPair: {},
                        forData : forData.smSignBtn1,
                    },
                }
            },pvt_v10: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: '添加自定义选项'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color:'rgba(96,98,102,1)'
                        }
                    }
                }
            },pvt_v11: function () {
                let loopModule = {
                    smSignBtn2: {
                        para: {
                            name:this.btnName2,
                            componentName:this.component2
                        },
                        attr: {
                            width:this.width2,height:this.height2
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smSignBtn2: {
                        paraVarPair: {},
                        forData : forData.smSignBtn2,
                    },
                }
            },pvt_v12: function () {
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
            },pvt_v13: function () {
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
            },pvt_v14: function () {
                return {
                    smButton5: {
                        paraVarPair: {},
                        para: {
                            name: ['新增报名项','el-icon-plus']
                        },
                        attr: {
                            size:'mini'
                        }
                    }
                }
            },pvt_v15: function () {
                return {
                    smButton6: {
                        paraVarPair: {},
                        para: {
                            name: ['','el-icon-close']
                        },
                        attr: {
                            type:'text'
                        }
                    }
                }
            },
        },
        watch: {

        },
        mounted: function () {
            this.pvt_initSysData();
            let ulEl = this.$refs.signUpAdd;
            ulEl.addEventListener('dragstart', this.dragStart);
            ulEl.addEventListener('dragover', this.dragOver);
            ulEl.addEventListener('dragend', this.dragEnd);
        },
        beforeDestroy() {
            let ulEl = this.$refs.signUpAdd;
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
                let fnname = 'signUp.startModule';
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smText3',
                    sm4: 'smText4',
                    sm5: 'smText5',
                    sm6: 'smName',
                    sm7: 'smPhone',
                    sm8: 'smSignUpAdd',
                    sm9: 'smSignBtn1',
                    sm10: 'smText6',
                    sm11: 'smSignBtn2',
                    sm12: 'smButton3',
                    sm13: 'smButton4',
                    sm14: 'smButton5',
                    sm15: 'smButton6',
                };

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
                        case 'queryEnrollOption':
                            objectName = $this.mac.tb.activityEnrollOption;
                            parentRecord = null;
                            condition = $this.mac.fd.activityEnrollOption.type +'='+ $this.mac.enum.activityEnrollOption.type.commonly;
                            dbData = {};
                            dbData[$this.mac.fd.activityEnrollOption.name] = [];
                            dbData[$this.mac.fd.activityEnrollOption.baseComponent] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    $this.btnName1 = dbData[$this.mac.fd.activityEnrollOption.name];
                                    $this.component1 = dbData[$this.mac.fd.activityEnrollOption.baseComponent];
                                    para.nStep = 'queryEnrollOptionOnce';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryEnrollOptionOnce':
                            objectName = $this.mac.tb.activityEnrollOption;
                            parentRecord = null;
                            condition = $this.mac.fd.activityEnrollOption.type +'='+ $this.mac.enum.activityEnrollOption.type.custom;
                            dbData = {};
                            dbData[$this.mac.fd.activityEnrollOption.name] = [];
                            dbData[$this.mac.fd.activityEnrollOption.baseComponent] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    $this.btnName2 = dbData[$this.mac.fd.activityEnrollOption.name];
                                    $this.component2 = dbData[$this.mac.fd.activityEnrollOption.baseComponent];
                                    para.nStep = 'startModule1';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
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
                                para.nStep = 'startModule7';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule7':
                            $this.sm[ref.sm7].startModule(function () {
                                para.nStep = 'queryGroupActivityTicketType';
                                dbFlag += 1;
                                para.i = 0;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = [];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.arrID = dbData[$this.mac.fd.id];
                                    para.name = dbData[$this.mac.fd.groupActivityEnrollForm.name];
                                    para.baseComponent = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent]
                                    para.arrID.splice(0,2);
                                    para.name.splice(0,2);
                                    para.baseComponent.splice(0,2)
                                    $this.activityEnrollFormArr = para.arrID;
                                    for(var i=0;i<$this.activityEnrollFormArr.length;i++){
                                        $this.activityID.push($this.para.activityID);
                                        $this.commonlyType.push(para.baseComponent[i]['type'])
                                    }
                                    para.i = 0;
                                    $this.$nextTick(() => {
                                        if($this.activityEnrollFormArr.length===0){
                                            para.nStep = 'startModule9';
                                        }else{
                                            para.nStep = 'startModule8';
                                        }
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'startModule8':
                            $this.sm[ref.sm8][para.i].startModule(function () {
                                para.i++
                                if(para.i === $this.activityEnrollFormArr.length){
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
                            $this.sm[ref.sm9][para.i].startModule(function () {
                                para.i++
                                if(para.i === $this.btnName1.length){
                                    para.nStep = 'startModule10';
                                }
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
                                para.i = 0;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule11':
                            $this.sm[ref.sm11][para.i].startModule(function () {
                                para.i++
                                if(para.i === $this.btnName2.length){
                                    para.nStep = 'startModule12';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule12':
                            $this.sm[ref.sm12].startModule(function () {
                                para.nStep = 'startModule13';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule13':
                            $this.sm[ref.sm13].startModule(function () {
                                para.nStep = 'startModule14';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule14':
                            $this.sm[ref.sm14].startModule(function () {
                                para.nStep = 'startModule15';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule15':
                            $this.sm[ref.sm15].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText1", "smText2", "smText3", "smText4", "smText5", "smName", "smPhone","smSignUpAdd","smSignBtn1", "smText6","smSignBtn2","smButton3","smButton4","smButton5","smButton6"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
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
                $this.dragActivityEnrollFormArr = [];
                $this.dragcommonlyType = [];
                for(var i =0;i<$this.activityEnrollFormArr.length;i++){
                    $this.dragActivityEnrollFormArr.push($this.activityEnrollFormArr[i])
                    $this.dragcommonlyType.push($this.commonlyType[i])
                }
            },
            dragOver(event) {
                let $this = this;
                // event.preventDefault();
                let target = event.target;
                // 因为dragover会发生在ul上，所以要判断是不是li
                if (target.className.indexOf('sign-up-top')!==-1&& target !== this.draging) {
                    let dragIndex = this._index(this.draging.parentNode); // 正在拖动的元素
                    let targetIndex = this._index(target.parentNode); // 目标
                    /*
                    当前li的index大于容器li时就插入在容器的前面，反之插入在容器的后面
                     */
                    this.dragIndex = dragIndex;
                    this.targetIndex = targetIndex;
                    let dragId = $this.dragActivityEnrollFormArr[$this.dragIndex];
                    let targetId = $this.dragActivityEnrollFormArr[$this.targetIndex];
                    let dragcommonlyType = $this.dragcommonlyType[$this.dragIndex];
                    let targetcommonlyType = $this.dragcommonlyType[$this.targetIndex];
                    $this.dragActivityEnrollFormArr[$this.dragIndex] = targetId;
                    $this.dragActivityEnrollFormArr[$this.targetIndex] = dragId;
                    $this.dragcommonlyType[$this.dragIndex] = targetcommonlyType;
                    $this.dragcommonlyType[$this.targetIndex] = dragcommonlyType;
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
                $this.signItemIDChange(function () {

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
            signItemIDChange:function(successCallBack, errorCallBack){
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'signUp.signItemIDChange';

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
                            if($this.equar($this.dragActivityEnrollFormArr, $this.activityEnrollFormArr)){
                                para.nStep = 'end'
                                dbFlag += 1;
                                break;
                            }
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = $this.dragActivityEnrollFormArr;
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.allData = dbData;
                                    para.nStep = 'activityEnrollFormModify'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.signItemIDChange(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityEnrollFormModify':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = $this.activityEnrollFormArr;
                            dbData[$this.mac.fd.groupActivityEnrollForm.attribute] = para.allData[$this.mac.fd.groupActivityEnrollForm.attribute];
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = para.allData[$this.mac.fd.groupActivityEnrollForm.name];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = para.allData[$this.mac.fd.groupActivityEnrollForm.baseComponent];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.i = 0;
                                    para.activityEnrollFormArr = $this.activityEnrollFormArr;
                                    $this.activityEnrollFormArr=[];
                                    $this.commonlyType = [];
                                    $this.$nextTick(() => {
                                        $this.activityEnrollFormArr = para.activityEnrollFormArr;
                                        $this.commonlyType = $this.dragcommonlyType;
                                        $this.$nextTick(() => {
                                            para.nStep = 'ticketTypeAddStartModule'
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.signItemIDChange(successCallBack, errorCallBack)
                                            }
                                        })
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'ticketTypeAddStartModule':
                            $this.sm['smSignUpAdd'][para.i].startModule(function () {
                                para.i++
                                if(para.i === $this.activityEnrollFormArr.length){
                                    para.nStep = 'end';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.signItemIDChange(successCallBack, errorCallBack)
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
            signItemAdd:function(data,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'signUp.signItemAdd';

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
                        case 'queryGroupActivityTicketType':
                            if($this.customValueContrast(data['text'],$this.btnName2)[1]!==$this.type.commonly){
                                para.nStep = 'activityEnrollFormNew';
                                dbFlag += 1;
                                break;
                            }
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord,condition, dbData,
                                function () {
                                    para.allName =  dbData[$this.mac.fd.groupActivityEnrollForm.name];
                                    para.nStep = 'activityEnrollFormNew';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.signItemAdd(data,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityEnrollFormNew':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            parentRecord = $this.para.activityID;
                            dbData = {};
                            para.flag = $this.customValueContrast(data['text'],$this.btnName2)[0]
                            para.objData = {};
                            para.objData['componentName'] = data['componentName'].name;
                            para.objData['type'] = $this.customValueContrast(data['text'],$this.btnName2)[1];
                            para.objData['dataArr'] = [];
                            para.objData['tableName'] = [];
                            if(data['componentName'].dataArr&&data['componentName'].dataArr.length>0){
                                para.objData['dataArr'] = data['componentName'].dataArr;
                            }
                            if(data['componentName'].tableName&&data['componentName'].tableName.length>0){
                                para.objData['tableName'] = data['componentName'].tableName;
                            }
                            if(data['componentName'].dataArr&&data['componentName'].dataArr.length>0){
                                para.objData['dataArr'] = data['componentName'].dataArr;
                            }
                            // if(para.objData['type']===$this.type.radio || para.objData['type']===$this.type.checkBox){
                            //     para.objData['dataArr'] = [{label:1,text:''},{label:2,text:''}];
                            // }else if(para.objData['type']===$this.type.pictureUpload){
                            //     para.objData['dataArr'] = [{label:'最大张数',text:''},{label:'图片大小',text:''}];
                            // }else if(para.objData['type']===$this.type.fileUpload){
                            //     para.objData['dataArr'] = [{label:'最大个数',text:''},{label:'文件大小',text:''}];
                            // }else if(para.objData['type']===$this.type.commonly&&para.objData['componentName']==='lm-cascader'){
                            //     para.objData['table'] = ['cascader'];
                            // }
                            if(!para.flag){
                                if(para.allName.indexOf(data['text'])!==-1){
                                    let k = 1;
                                    para.tempName = data['text'];
                                    para.tempName = para.tempName+k;
                                    while(para.allName.indexOf(para.tempName)!==-1){
                                        k++;
                                        para.tempName = data['text']+k;
                                    }
                                    data['text'] = para.tempName;
                                }
                                dbData[$this.mac.fd.groupActivityEnrollForm.name] = [data['text']];
                            }
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [para.objData];
                            dbData[$this.mac.fd.groupActivityEnrollForm.attribute] = [$this.mac.enum.groupActivityEnrollForm.attribute.noNeed];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    $this.activityEnrollFormArr.push(dbData[$this.mac.fd.id][0]);
                                    $this.activityID.push($this.para.activityID);
                                    $this.commonlyType.push(para.objData['type']);
                                    // if(!para.flag){
                                    //     $this.commonlyDisabled.push(true);
                                    // }else{
                                    //     $this.commonlyDisabled.push(false);
                                    // }
                                    $this.$nextTick(() => {
                                        $this.refreshSm('smSignUpAdd',$this.activityEnrollFormArr,function () {
                                            // if(!para.flag){
                                            //     para.nStep = 'refreshBtn1';
                                            // }else{
                                            para.nStep = 'end';
                                            // }
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.signItemAdd(data,successCallBack, errorCallBack)
                                            }
                                        },para.errorCallBack)
                                    })
                                },para.errorCallBack)
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
            signItemDelete:function(id,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'signUp.signItemDelete';

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
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [id];
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.name = dbData[$this.mac.fd.groupActivityEnrollForm.name][0];
                                    if(para.name === null){
                                        para.name = '选中项'
                                    }
                                    para.nStep = 'deleteTip';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.signItemDelete(id,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'deleteTip':
                            $this.$confirm('此操作将删除'+para.name+', 是否继续?', '提示', {
                                confirmButtonText: '删除',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                para.nStep = 'groupActivityEnrollFormDelete'
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.signItemDelete(id,successCallBack, errorCallBack)
                                }
                            }).catch(() => {
                                $this.$message({
                                    type: 'info',
                                    message: '已取消删除'
                                });
                                para.nStep = 'default'
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.signItemDelete(id,successCallBack, errorCallBack)
                                }
                            });
                            break
                        case 'groupActivityEnrollFormDelete':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            $this.sys.api.recordDelete(objectName, [id],
                                function () {
                                    para.index = $this.activityEnrollFormArr.indexOf(id);
                                    $this.activityEnrollFormArr.splice(para.index,1);
                                    $this.activityID.splice(para.index,1);
                                    $this.commonlyType.splice(para.index,1);
                                    $this.$nextTick(() => {
                                        if($this.activityEnrollFormArr.length===0){
                                            para.nStep = 'end';
                                        }else{
                                            para.nStep = 'signUpAddStartModule';
                                        }
                                        para.i = 0;
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.signItemDelete(id,successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'signUpAddStartModule':
                            $this.sm['smSignUpAdd'][para.i].startModule(function () {
                                para.i++;
                                if(para.i===$this.activityEnrollFormArr.length){
                                    para.nStep = 'end';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.signItemDelete(id,successCallBack, errorCallBack)
                                }
                             },para.errorCallBack)
                            break
                        // case 'getButtonArrIndex':
                        //     para.index = $this.getButtonArrIndex(para.name,$this.btnName1);
                        //     if(para.index === -1){
                        //         para.nStep = 'end';
                        //         dbFlag += 1;
                        //         if (dbFlag === 2) {
                        //             $this.signItemDelete(id,successCallBack, errorCallBack)
                        //         }
                        //     }else{
                        //         $this.btnUsed[para.index] = false;
                        //         para.temp = $this.btnUsed;
                        //         $this.btnUsed = [];
                        //         $this.$nextTick(() => {
                        //             para.nStep = 'signBtnStartModule';
                        //             dbFlag += 1;
                        //             if (dbFlag === 2) {
                        //                 $this.signItemDelete(id,successCallBack, errorCallBack)
                        //             }
                        //         })
                        //     }
                        //     break
                        // case 'signBtnStartModule':
                        //     $this.btnUsed = para.temp;
                        //     $this.$nextTick(() => {
                        //         $this.sm['smSignBtn1'][para.index].startModule(function () {
                        //             para.nStep = 'end';
                        //             dbFlag += 1;
                        //             if (dbFlag === 2) {
                        //                 $this.signItemDelete(id,successCallBack, errorCallBack)
                        //             }
                        //         },para.errorCallBack);
                        //     })
                        //     break
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
            refreshSm:function(refID,arr,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'signUp.refreshSm';

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
                                if(para.i === arr.length){
                                    para.nStep = 'end';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.refreshSm(refID,arr,successCallBack, errorCallBack)
                                }
                            },para.errorCallBack)
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
            infoShowSet:function(){
                 if(this.infoShow === true){
                     this.infoShow = false
                 } else{
                     this.infoShow = true
                 }
            },
            wrongInfoShow: function (successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'signUp.wrongInfoShow';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'groupActivityEnrollFormQuery':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [];
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.idArr = dbData[$this.mac.fd.id];
                                    para.name = dbData[$this.mac.fd.groupActivityEnrollForm.name];
                                    para.baseComponent = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent];
                                    para.i = 0;
                                    para.nStep = 'nameCheck';
                                    if (++$dbFlag === 2) {
                                        $this.addressSelect(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'nameCheck':
                            if(para.name[para.i]===null||para.name[para.i]===''){
                                var tempIndex = para.i+1;
                                $this.$message({
                                    type: 'error',
                                    message: '报名第'+tempIndex+'项名称不能为空'
                                });
                                $("html,body").animate({
                                    scrollTop: $('.sign-up')[0].offsetTop+$('.sign-up .item-form .item-form-con .sign-up-add')[para.i].offsetTop+ "px"
                                },200);
                                para.nStep = 'default';
                            }else if(para.baseComponent[para.i].dataArr.length!==0&&para.baseComponent[para.i].componentName!=='lm-select'){
                                let index = '';
                                for(var i=0;i<para.baseComponent[para.i].dataArr.length;i++){
                                    if(para.baseComponent[para.i].dataArr[i]['text']===''){
                                        index = i;
                                        break
                                    }
                                }
                                if(index ===''){
                                    para.i++
                                }else{
                                    var tempIndex = para.i+1;
                                    var _tempIndex = index+1;
                                    $this.$message({
                                        type: 'error',
                                        message: '报名第'+tempIndex+'项第'+_tempIndex+'个选项内容不能为空'
                                    });
                                    $("html,body").animate({
                                        scrollTop: $('.sign-up')[0].offsetTop+$('.sign-up .item-form .item-form-con .sign-up-add')[para.i].offsetTop+ "px"
                                    },200);
                                    para.nStep = 'default';
                                }
                            }else{
                                para.i++
                            }
                            if (para.i === para.name.length) {
                                para.nStep = 'end';
                            }
                            if (++$dbFlag === 2) {
                                $this.addressSelect(successCallBack, errorCallBack);
                            }
                            break
                        case 'end':
                            para.successCallBack()
                            return;
                        case 'default':
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                    },function (error) {console.error(error)})
            },
            addSignShow:function(){
                this.itemBtnShow = true;
            },
            addSignHide:function(){
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

            smSignBtn1_signItemAddEvent:function (data,successCallBack, errorCallBack) {
                this.signItemAdd(data,successCallBack, errorCallBack)
            },
            smSignBtn2_signItemAddEvent:function (data,successCallBack, errorCallBack) {
                this.signItemAdd(data,successCallBack, errorCallBack)
            },
            smSignUpAdd_signItemDeleteEvent:function(id,successCallBack, errorCallBack){
                this.signItemDelete(id,successCallBack, errorCallBack)
            },
            getButtonArrIndex:function(value,arr){
                let temp = -1;
                for(var i=0;i<arr.length;i++){
                    if(arr[i][0]===value){
                        temp = i;
                        break;
                    }
                }
                return temp;
            },
            buttonValueContrast:function (value,arr) {
                let temp = false;
                if(arr.length===0){
                    return temp;
                }
                for(var i=0;i<arr.length;i++){
                    if(arr[i]===value){
                        temp = true;
                        break;
                    }
                }
                return temp;
            },
            customValueContrast:function (value,arr) {
                let $this = this;
                let temp = false;
                let index;
                var type = '';
                for(var i=0;i<arr.length;i++){
                    if(arr[i][0]===value){
                        temp = true;
                        index = i;
                        break;
                    }
                }
                if(temp === true){
                    if(index === 0){
                        type = $this.type.singText;
                    }else if(index === 1){
                        type = $this.type.multipleText;
                    }else if(index === 2){
                        type = $this.type.radio;
                    }else if(index === 3){
                        type = $this.type.checkBox;
                    }else if(index === 4){
                        type = $this.type.numberInput;
                    }else if(index === 5){
                        type = $this.type.fileUpload;
                    }else if(index === 6){
                        type = $this.type.pictureUpload;
                    }
                }else{
                    type = $this.type.commonly;
                }
                return [temp,type];
            },

            smButton3_buttonClickEvent:function () {
                this.infoShowSet();
            },
            smButton4_buttonClickEvent:function () {
                this.infoShowSet();
            },
            smButton5_buttonClickEvent:function () {
                this.addSignShow();
            },
            smButton6_buttonClickEvent:function () {
                this.addSignHide();
            },

            addData :function (successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'userRoot.addData';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'groupActivityNew':
                            objectName = $this.mac.tb.groupActivity;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivity.name] = ['活动报名 || 2019深圳宠物马拉松运动会 | 暨第三届深圳遛狗节'];
                            dbData[$this.mac.fd.groupActivity.abstract] = ['全球青年创新大会（Global Youth Innovation Conference，GYIC）由工信部、中国产业创新联盟，以及北京、上海、天津、深圳和杭州等相关政府部门支持，近百家创投机构助力，由国内100多家媒体机构联袂支持打造的大型品牌活动。 历年来，腾讯、百度、蔚来汽车、大疆等数百家知名'];
                            dbData[$this.mac.fd.groupActivity.details] = ['<div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div>'];
                            dbData[$this.mac.fd.groupActivity.mode] = [$this.mac.enum.groupActivity.mode.outLine];
                            dbData[$this.mac.fd.groupActivity.label] = [20];
                            dbData[$this.mac.fd.groupActivity.publicCustomer] = [[1,2,3,4]];
                            dbData[$this.mac.fd.groupActivity.refundExplain] = ['1、本活动由主办方委托【活动行】代为处理退款事宜。 2、如需退款，请于活动开始前的24小时之前提交申请，活动开始前的24小时内不接受退款。 3、退款时，将收取票价的10%作为手续费。'];
                            dbData[$this.mac.fd.groupActivity.showEnrollInfo] = [$this.mac.enum.groupActivity.showEnrollInfo.yes];
                            dbData[$this.mac.fd.groupActivity.phone] = ['+86-15888888888'];
                            dbData[$this.mac.fd.groupActivity.author] = [1];
                            dbData[$this.mac.fd.groupActivity.authorName] = ['张三'];
                            dbData[$this.mac.fd.groupActivity.status] = [$this.mac.enum.groupActivity.status.publish];
                            dbData[$this.mac.fd.groupActivity.startTime] = ['2019-10-04 07:00:00'];
                            dbData[$this.mac.fd.groupActivity.endTime] = ['2019-10-05 14:00:00'];
                            dbData[$this.mac.fd.groupActivity.place] = [{"id":[5,107,1069],"name":["广东省","深圳市","南山区"],"place":"深圳大学体育场","lng":113.938183,"lat":22.531669}];
                            dbData[$this.mac.fd.groupActivity.praiseNumber] = [50];
                            dbData[$this.mac.fd.groupActivity.commentNumber] = [13];
                            dbData[$this.mac.fd.groupActivity.favoriteNumber] = [20];
                            dbData[$this.mac.fd.groupActivity.browerNumber] = [100];
                            dbData[$this.mac.fd.groupActivity.forwardNumber] = [30];
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [[30,20,18,10]];
                            dbData[$this.mac.fd.groupActivity.createTime] = ['2019-09-29 15:23:20'];
                            var time = new Date().getTime();
                            var apiCodeNum = time + '';
                            $this.sys.api.recordNew( objectName, parentRecord, dbData,
                                function () {
                                    para.activityID = dbData[$this.mac.fd.id][0];
                                    para.nStep = 'groupActivityTicketTypeNew'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityTicketTypeNew':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.name] = ['一人一犬票','1人1犬','2人1犬','2人1犬票'];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [68,98,128,158];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = [$this.mac.enum.groupActivityTicketType.approval.yes,$this.mac.enum.groupActivityTicketType.approval.yes,$this.mac.enum.groupActivityTicketType.approval.yes,$this.mac.enum.groupActivityTicketType.approval.yes];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [1,1,1,1];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [20,5,3,2];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = ['2019-10-02 07:00:00','2019-10-02 07:00:00','2019-10-03 00:00:00','2019-10-03 00:00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [null,200,150,100];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [0,1,2,3];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = ['2019-10-04 07:00:00','2019-10-04 07:00:00','2019-10-05 00:00:00','2019-10-05 00:00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = ['2019-10-04 22:00:00','2019-10-04 23:00:00','2019-10-05 14:00:00','2019-10-05 14:00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [null,null,'2019-10-01 00:00:00','2019-10-01 00:00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [null,null,'2019-10-03 00:00:00','2019-10-03 00:00:00'];
                            var time = new Date().getTime();
                            var apiCodeNum = time + '';
                            $this.sys.api.recordNew( objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityEnrollFormNew'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityEnrollFormNew':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = ['姓名', '手机'];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [{
                                "componentName": "lm-input-text",
                                "type": 0,
                                "dataArr": [], "tableName": []
                            }, {
                                "componentName": "lm-input-phone",
                                "type": 0,
                                "dataArr": [], "tableName": []
                            }];
                            dbData[$this.mac.fd.groupActivityEnrollForm.attribute] = [$this.mac.enum.groupActivityEnrollForm.attribute.need, $this.mac.enum.groupActivityEnrollForm.attribute.need];
                            var time = new Date().getTime();
                            var apiCodeNum = time + '';
                            $this.sys.api.recordNew( objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'activityBudgetFormNew'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityBudgetFormNew':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = ['办公费', '印刷费', '交通费'];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = [0, 0, 0];
                            dbData[$this.mac.fd.groupActivityBudgetForm.unit] = ['元', '元', '元'];
                            var time = new Date().getTime();
                            var apiCodeNum = time + '';
                            $this.sys.api.recordNew( objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'end'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityDiscussNew':
                            objectName = $this.mac.tb.groupActivityDiscuss;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityDiscuss.groupActivityID] = [para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID]
                            dbData[$this.mac.fd.groupActivityDiscuss.questioner] = [2,3,4,5,6,7,8,9,10,11,12,13,14]
                            dbData[$this.mac.fd.groupActivityDiscuss.name] = ['李君昊', '李国艳' ,'李恩德' ,'李文雅' ,'李文轩' ,'李文博','赵泽晨', '赵子桐', '赵建川', '赵琦锐', '赵家妍', '赵宇琪', '赵佳鑫']
                            dbData[$this.mac.fd.groupActivityDiscuss.askContent] = ['三个团票是28号上午场跟下午场都能参加吗？','九月28号周六没时间怎么办?','请问至尊VIP票是可以跟大咖他们一起吃晚饭对吗？','3人团购，是3个人两个会场都能用吗','不错的活动，支持???? 对于我这样的老用户，基本之前举办大会都参加的，有没有优惠啊？????','活动优惠票什么时候结束？','11111','2222','55555','66666','77777','88888','999999'];
                            dbData[$this.mac.fd.groupActivityDiscuss.askTime] = ['2019-08-10 00:00:00', '2019-08-15 00:00:00' ,'2019-08-20 00:00:00' ,'2019-08-25 00:00:00', '2019-08-30 00:00:00' ,'2019-09-15 00:00:00','2019-09-20 00:00:00','2019-09-25 00:00:00','2019-09-26 00:00:00','2019-09-27 00:00:00','2019-09-28 00:00:00','2019-09-29 00:00:00','2019-09-30 00:00:00']
                            dbData[$this.mac.fd.groupActivityDiscuss.answerContent] = ['是的，可以参加全天场活动的，9月28号活动现场还会赠送10月20号腾讯滨海大厦场活动。','没问题','没问题','没问题',null,null,null,null,null,null,null,'可以','谢谢'];
                            dbData[$this.mac.fd.groupActivityDiscuss.answerTime] = ['2019-08-10 10:00:00','2019-08-16 10:00:00','2019-08-21 10:00:00','2019-08-26 10:00:00',null,null,null,null,null,null,null,'2019-09-30 00:00:00','2019-09-30 09:00:00'];
                            var time = new Date().getTime();
                            var apiCodeNum = time + '';
                            $this.sys.api.recordNew(apiCodeNum, objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityOrderNew'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityOrderNew':
                            objectName = $this.mac.tb.groupActivityOrder;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityOrder.groupActivityID] = [para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID,para.activityID]
                            dbData[$this.mac.fd.groupActivityOrder.applicant] = [6,7,8,9,10,11,12,13,14,15]
                            dbData[$this.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [3,3,3,3,3,3,3,3,3,3];
                            dbData[$this.mac.fd.groupActivityOrder.name] = ['李君昊', '李国艳' ,'李恩德' ,'李文雅' ,'李文轩' ,'李文博', '李文璇','李文萱', '李文渲' ,'李美红']
                            dbData[$this.mac.fd.groupActivityOrder.price] = [100,100,100,100,100,100,100,100,100,100];
                            dbData[$this.mac.fd.groupActivityOrder.status] = [$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete];
                            dbData[$this.mac.fd.groupActivityOrder.createTime] = ['2019-09-21 16:00:00','2019-09-21 16:00:00','2019-09-21 16:00:00','2019-09-21 16:00:00','2019-09-21 16:00:00','2019-09-21 16:00:00','2019-09-21 16:00:00','2019-09-21 16:00:00','2019-09-21 16:00:00','2019-09-21 16:00:00'];
                            var time = new Date().getTime();
                            var apiCodeNum = time + '';
                            $this.sys.api.recordNew(apiCodeNum, objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'end'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'end':
                            para.successCallBack();
                            return;
                        case 'default':
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
    .sign-up {
        .show-btn{
            .lm-button .el-button--text{
                color:#606266;
            }
            .lm-button .el-button--text:hover{
                color:#409EFF;
            }
        }
        .info-option {
            .lm-radio{
                height: 40px;
                line-height: 40px;
            }

            .el-input__inner {
                height: 40px;
            }
            .item {
                .h-120{
                    height: 120px;
                    .el-textarea__inner{
                        height: 80px;
                    }
                    .svg-container{
                        display: none;
                    }
                }
                .item-retract-btn{
                    .lm-button .el-button--text{
                        color:#606266;
                    }
                    .lm-button .el-button--text:hover{
                        color:#409EFF;
                    }
                }
                .close-sign-btn{
                    .el-icon-close{
                        font-size:20px;
                        color: #606266;
                    }
                    .el-icon-close:hover{
                        color: #409EFF;
                    }
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .row {

    }

    .sign-up {
        box-shadow: 0px 0px 8px 0px rgba(48, 49, 51, 0.1);
        border-radius: 4px;

        .info-title {
            padding: 0 40px;
            height: 64px;
            background: #ffffff;
            margin-top: 15px;
            border-bottom: 2px solid #12B0FF;
            position: relative;
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

            .item {
                display: flex;
                margin-bottom: 40px;
                position: relative;
                .show-btn{
                    position: absolute;
                    left:50%;
                    height: 40px;
                    line-height: 40px;
                }

                .item-name {
                    width: 135px;
                    height: 40px;
                    position: relative;

                    .item-name-level {
                        position: absolute;
                        display: block;
                        width: 10px;
                        left: 88px;
                        top: 50%;
                        margin-top: -10px;
                        height: 10px;
                        background-image: url("../../../assets/level.png");
                    }
                }

                .item-content{
                    flex: 1;
                    .col{
                        vertical-align: top;
                    }
                    .item-form{
                        background:rgba(255,255,255,1);
                        border:1px solid rgba(220,223,230,1);
                        border-radius:4px;
                        .item-form-header{
                            padding: 0 20px 0 30px;
                            text-align: center;
                            height: 40px;
                            background:linear-gradient(0deg,rgba(242,242,242,1) 0%,rgba(249,249,249,1) 49%,rgba(255,255,255,1) 100%);
                            box-shadow:0px 1px 3px 0px rgba(48,49,51,0.15);
                            border-radius:4px 4px 0px 0px;
                        }
                        .item-form-con{
                            padding: 20px 20px 20px 20px;
                        }
                        .item-btn-add{
                            padding:0 10px;
                        }
                        .item-custom-title{
                            padding: 0 20px;
                            margin-top: 20px;
                        }
                        .item-retract-btn{
                            margin:20px 0 ;
                        }
                        .add-sign-btn{
                            padding-bottom: 20px;
                        }
                        .sign-btn-dv{
                            position: relative;
                            .close-sign-btn{
                                position: absolute;
                                right: 5px;
                                top:-20px;
                            }
                        }
                    }
                }
                .h-120{
                    height: 120px;
                }

            }

            .item:last-child{
                margin-bottom: 0;
            }
        }
    }

    .col {
        box-sizing: border-box;
        display: inline-block;
        /*vertical-align: middle;*/
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


    /* ------ Module Style Variable ------- */

</style>
