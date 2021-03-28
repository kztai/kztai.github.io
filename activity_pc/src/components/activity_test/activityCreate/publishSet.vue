<template>
    <div class="publish-set">
        <div class="info-title">
            <lm-link-text
                    ref="smText1"
                    refId="smText1"
                    v-show="pvt_isShow.v1 === 'smText1'"
                    :paraVarPair="pvt_v1.smText1.paraVarPair"
                    :para="pvt_v1.smText1.para"
                    :attr="pvt_v1.smText1.attr">
            </lm-link-text>
        </div>
        <div class="info-option">
            <div class="row">
                <div class="col col_w_10">
                    <div class="publish-item">
                        <div class="col publish-title">
                            <lm-link-text
                                    ref="smText2"
                                    refId="smText2"
                                    v-show="pvt_isShow.v2 === 'smText2'"
                                    :paraVarPair="pvt_v2.smText2.paraVarPair"
                                    :para="pvt_v2.smText2.para"
                                    :attr="pvt_v2.smText2.attr">
                            </lm-link-text>
                        </div>
                        <div class="col publish-content">
                            <lm-select
                                    ref="smSelect1"
                                    refId="smSelect1"
                                    v-show="pvt_isShow.v3 === 'smSelect1'"
                                    :paraVarPair="pvt_v3.smSelect1.paraVarPair"
                                    :para="pvt_v3.smSelect1.para"
                                    :attr="pvt_v3.smSelect1.attr">
                            </lm-select>
                        </div>
                    </div>
                </div>
                <div class="col col_w_10" v-show="pusblishShow">
                    <div class="publish-item">
                        <div class="col publish-title">
                            <lm-link-text
                                    ref="smText3"
                                    refId="smText3"
                                    v-show="pvt_isShow.v4 === 'smText3'"
                                    :paraVarPair="pvt_v4.smText3.paraVarPair"
                                    :para="pvt_v4.smText3.para"
                                    :attr="pvt_v4.smText3.attr">
                            </lm-link-text>
                        </div>
                        <div class="col publish-content"   v-show="pvt_isShow.v5 === 'smSelect2'">
                            <lm-select
                                    ref="smSelect2"
                                    refId="smSelect2"
                                    v-show="pvt_isShow.v5 === 'smSelect2'"
                                    :paraVarPair="pvt_v5.smSelect2.paraVarPair"
                                    :para="pvt_v5.smSelect2.para"
                                    :attr="pvt_v5.smSelect2.attr">
                            </lm-select>
                        </div>
                        <div class="col publish-content"  v-show="pvt_isShow.v6 === 'smTree'">
                            <lm-tree-select
                                    ref="smTree"
                                    refId="smTree"
                                    v-show="pvt_isShow.v6 === 'smTree'"
                                    :paraVarPair="pvt_v6.smTree.paraVarPair"
                                    :para="pvt_v6.smTree.para"
                                    :attr="pvt_v6.smTree.attr">
                            </lm-tree-select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-tip" v-show="pvt_isShow.v7 === 'smText4'">
                <i class="el-icon-warning"></i>
                <lm-link-text
                        ref="smText4"
                        refId="smText4"
                        v-show="pvt_isShow.v7 === 'smText4'"
                        :paraVarPair="pvt_v7.smText4.paraVarPair"
                        :para="pvt_v7.smText4.para"
                        :attr="pvt_v7.smText4.attr">
                </lm-link-text>
            </div>
        </div>
    </div>
</template>

<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1","v2", "v3","v4", "v5", "v6", "v7"],
                    subModule: ["smText1", "smText2", "smSelect1", "smText3", "smSelect2","smTree", "smText4"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                    "v6": null,
                    "v7": null,
                },

                pvt_eventPortInput: [],

                debugFlag:true,
                mac: mac.mac,
                pusblishShow:false,
                listData:[],
                treeData:[],
                ranageType:'',
                listValue:'',
                listSource:[{label:'公开发布',options:[{value:1,label:'公开客户',disabled:false,icon:'',image:''},{value:2,label:'公开部门',disabled:false,icon:'',image:''}]},{value:3,label:'私密发布',disabled:false,icon:'',image:''}],
                nameArr:[],
                tipText:'',
                treeValue:{},
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '发布设置'
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
                            textData: '谁可以看'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smSelect1: {
                        paraVarPair: {},
                        para: {
                            value:this.listValue,
                            listSource:this.listSource
                        },
                        attr: {defaultExpandAll: true,noDataText:'请选择'}
                    }
                }
            }, pvt_v4: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '选择客户'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smSelect2: {
                        paraVarPair: {},
                        para: {
                            value :this.nameArr,
                            listSource:this.listData
                        },
                        attr: {defaultExpandAll: true,multiple:true,saveValue:true}
                    }
                }
            },pvt_v6: function () {
                return {
                    smTree: {
                        paraVarPair: {},
                        para: {
                            value : this.treeValue,
                            tree:this.treeData
                        },
                        attr: {multiple:true,showCheckbox:true,select:1}
                    }
                }
            }, pvt_v7: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: this.tipText
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C'
                        }
                    }
                }
            },
        },
        watch: {},
        mounted: function () {
            this.pvt_initSysData();
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
                let fnname = 'publishSet.startModule';
                let condition;
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smSelect1',
                    sm4: 'smText3',
                    sm5: 'smSelect2',
                    sm6: 'smTree',
                    sm7: 'smText4',
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
                        case 'groupActivityRead':
                            objectName = $this.mac.tb.groupActivity;
                            dbData={};
                            dbData[$this.mac.fd.id] = [$this.para.activityID]
                            dbData[$this.mac.fd.groupActivity.pubicDepartment] = [];
                            dbData[$this.mac.fd.groupActivity.publicCustomer] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function(){
                                    para.pubicDepartment = dbData[$this.mac.fd.groupActivity.pubicDepartment][0];
                                    para.publicCustomer = dbData[$this.mac.fd.groupActivity.publicCustomer][0];
                                    if(para.pubicDepartment===null&para.publicCustomer===null){
                                        para.nStep = 'startModule1';
                                    }else if(para.pubicDepartment===0&para.publicCustomer===0){
                                        $this.listValue = $this.listSource[1].label;
                                        para.nStep = 'startModule1';
                                    }else if(para.pubicDepartment!==null&para.publicCustomer===null){
                                        $this.listValue = $this.listSource[0]['options'][1].label;
                                        para.nStep = 'queryGroup';
                                    }else if(para.pubicDepartment===null&para.publicCustomer!==null){
                                        $this.listValue = $this.listSource[0]['options'][0].label;
                                        para.nStep = 'queryactivityOption';
                                    }
                                    $this.forceUpdateData(function () {
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                },para.errorCallBack)
                            break
                        case 'queryactivityOption':
                            objectName = $this.mac.tb.activityOption;
                            parentRecord = null;
                            condition = null;
                            dbData={};
                            dbData[$this.mac.fd.activityOption.customerLevel] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    $this.nameArr =  [{
                                        $table: $this.mac.tb.groupActivity,
                                        $arrField: [$this.mac.fd.groupActivity.publicCustomer],
                                        $arrValue: [$this.para.activityID]
                                    }]
                                    para.customerLevel = dbData[$this.mac.fd.activityOption.customerLevel][0];
                                    para.options = [];
                                    for(var i = 0;i<para.customerLevel.length;i++){
                                        var obj = {disabled:false,icon:'',image:''};
                                        obj.value = para.customerLevel[i].value;
                                        obj.label = para.customerLevel[i].label;
                                        para.options.push(obj);
                                    }
                                    $this.listData = para.options;
                                    $this.pusblishShow = true;
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'startModule1';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                },para.errorCallBack)
                            break
                        case 'queryGroup':
                            objectName = $this.mac.tb.group;
                            parentRecord = null;
                            condition = null;
                            dbData={};
                            dbData[$this.mac.fd.id] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    para.groupID = dbData[$this.mac.fd.id][0];
                                    para.nStep = 'queryDepartment';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                },para.errorCallBack)
                            break
                        case 'queryDepartment':
                            objectName = $this.mac.tb.department;
                            parentRecord = [para.groupID];
                            condition = $this.mac.fd.department.superior+'='+null;
                            dbData={};
                            dbData[$this.mac.fd.id] = []
                            dbData[$this.mac.fd.department.name] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    para.departmentID = dbData[$this.mac.fd.id];
                                    para.name = dbData[$this.mac.fd.department.name];
                                    // $this.nameArr =  [{
                                    //     $table: $this.mac.tb.groupActivity,
                                    //     $arrField: [$this.mac.fd.groupActivity.pubicDepartment],
                                    //     $arrValue: [$this.para.activityID]
                                    // }]
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'departmentWrite';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                },para.errorCallBack)
                            break
                        case 'departmentWrite':
                            objectName = '_department';
                            // parentRecord = para.groupID;
                            parentRecord = null;
                            dbData={};
                            dbData[$this.mac.fd.department.name] = para.name;
                            dbData['origin_id'] = para.departmentID;
                            dbData[$this.mac.fd.department.superior] = []
                            for(var i=0;i<para.name.length;i++){
                                dbData[$this.mac.fd.department.superior].push(null)
                            }
                            $this.sys.api.recordNew(objectName,parentRecord, dbData,
                                function(){
                                    para.newIDArr = dbData[$this.mac.fd.id]
                                    para.i = 0;
                                    para.nStep = 'departmentLoopWrite';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                },para.errorCallBack)
                            break
                        case 'departmentLoopWrite':
                            $this.loopDepartment(para.groupID,para.departmentID[para.i],para.newIDArr[para.i],function () {
                                para.i++
                                if(para.i===para.departmentID.length){
                                    $this.treeData = [{
                                        // $table: $this.mac.tb.group,
                                        // $arrField: [$this.mac.fd.group.name],
                                        // $arrValue: para.groupID,
                                        // $arrSubTab: [{
                                        $table: '_department',
                                        $arrField: [$this.mac.fd.department.name],
                                        $arrValue: para.newIDArr
                                        // }]
                                    }]
                                    $this.pusblishShow = true;
                                    para.nStep = 'query_department';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }else{
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }
                            },para.errorCallBack)
                            break
                        case 'query_department':
                            objectName = '_department';
                            parentRecord = null;
                            condition = 'origin_id='+$this.arrToStrOfCondition(para.pubicDepartment);
                            dbData={};
                            dbData[$this.mac.fd.id] = []
                            dbData[$this.mac.fd.department.name] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    para.obj = {};
                                    para.obj['_department'] = {};
                                    para.obj['_department']['field'] = $this.mac.fd.department.name;
                                    para.obj['_department']['value'] = dbData[$this.mac.fd.id];
                                    $this.treeValue = para.obj;
                                    // para.nStep = 'pubicDepartmentModify';
                                    para.nStep = 'startModule1';
                                    $this.forceUpdateData(function () {
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                },para.errorCallBack)
                            break
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
                            if(!(para.pubicDepartment!==null&para.publicCustomer===null)){
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                break
                            }
                            $this.sm[ref.sm6].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId;
                            if(para.pubicDepartment!==null){
                                refId  = ["smText1","smText2", "smSelect1", "smText3", "smTree"];
                            }else{
                                refId  = ["smText1","smText2", "smSelect1", "smText3", "smSelect2"];
                            }
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
            ranageSelect:function(id,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let fnname = 'publishSet.ranageSelect';
                let condition;
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smSelect1',
                    sm4: 'smText3',
                    sm5: 'smSelect2',
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
                            $this.ranageType = id;
                            if(id ===3){
                                para.nStep = 'private';
                            }else if(id ===1){
                                para.nStep = 'customer';
                            }else if(id ===2){
                                para.nStep = 'department';
                            }
                            dbFlag += 1;
                            break;
                        case 'private':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID]
                            dbData[$this.mac.fd.groupActivity.pubicDepartment] = [0];
                            dbData[$this.mac.fd.groupActivity.publicCustomer] = [0];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.pusblishShow = false;
                                    para.nStep = 'end';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break
                        case 'customer':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID]
                            dbData[$this.mac.fd.groupActivity.pubicDepartment] = [null];
                            dbData[$this.mac.fd.groupActivity.publicCustomer] = [[]];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'queryactivityOption';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break
                        case 'queryactivityOption':
                            objectName = $this.mac.tb.activityOption;
                            parentRecord = null;
                            condition = null;
                            dbData={};
                            dbData[$this.mac.fd.activityOption.customerLevel] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    $this.nameArr =  [{
                                        $table: $this.mac.tb.groupActivity,
                                        $arrField: [$this.mac.fd.groupActivity.publicCustomer],
                                        $arrValue: [$this.para.activityID]
                                    }]
                                    para.customerLevel = dbData[$this.mac.fd.activityOption.customerLevel][0];
                                    para.options = [];
                                    for(var i = 0;i<para.customerLevel.length;i++){
                                        var obj = {disabled:false,icon:'',image:''};
                                        obj.value = para.customerLevel[i].value;
                                        obj.label = para.customerLevel[i].label;
                                        para.options.push(obj);
                                    }
                                    // $this.listData = [{label:'全选',options:options}];
                                    $this.listData = para.options;
                                    para.nStep = 'hideModule';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                },para.errorCallBack)
                            break
                        case 'hideModule':
                            $this.showSubModule(['smTree'], false, function () {
                                $this.showSubModule(['smSelect2'], true, function () {
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'startMoudle';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ranageSelect(id,successCallBack, errorCallBack)
                                        }
                                    })
                                },para.errorCallBack)
                            },para.errorCallBack)
                            break
                        case 'startMoudle':
                            $this.sm['smSelect2'].startModule(function () {
                                $this.pusblishShow = true
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ranageSelect(id,successCallBack, errorCallBack)
                                }
                            },para.errorCallBack)
                            break
                        case 'department':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID]
                            dbData[$this.mac.fd.groupActivity.pubicDepartment] = [[]];
                            dbData[$this.mac.fd.groupActivity.publicCustomer] = [null];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.treeValue = [];
                                    para.nStep = '_department';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break
                        case '_department':
                            objectName = '_department';
                            parentRecord = null;
                            condition = null;
                            dbData={};
                            dbData[$this.mac.fd.id] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function () {
                                    if(dbData[$this.mac.fd.id].length===0){
                                        para.nStep = '_queryGroup';
                                    }else{
                                        para.nStep = '_hideModule';
                                    }
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break
                        case '_queryGroup':
                            objectName = $this.mac.tb.group;
                            parentRecord = null;
                            condition = null;
                            dbData={};
                            dbData[$this.mac.fd.id] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    para.groupID = dbData[$this.mac.fd.id][0];
                                    para.nStep = '_queryDepartment';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                },para.errorCallBack)
                            break
                        case '_queryDepartment':
                            objectName = $this.mac.tb.department;
                            parentRecord = null;
                            // parentRecord = [para.groupID];
                            condition = $this.mac.fd.department.superior+'='+null;
                            dbData={};
                            dbData[$this.mac.fd.id] = []
                            dbData[$this.mac.fd.department.name] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    para.departmentID = dbData[$this.mac.fd.id];
                                    para.name = dbData[$this.mac.fd.department.name];
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'departmentWrite';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ranageSelect(id,successCallBack, errorCallBack)
                                        }
                                    })
                                },para.errorCallBack)
                            break
                        case 'departmentWrite':
                            objectName = '_department';
                            // parentRecord = para.groupID;
                            parentRecord = null;
                            dbData={};
                            dbData[$this.mac.fd.department.name] = para.name;
                            dbData['origin_id'] = para.departmentID;
                            dbData[$this.mac.fd.department.superior] = []
                            for(var i=0;i<para.name.length;i++){
                                dbData[$this.mac.fd.department.superior].push(null)
                            }
                            $this.sys.api.recordNew(objectName,parentRecord, dbData,
                                function(){
                                    para.newIDArr = dbData[$this.mac.fd.id]
                                    para.i = 0;
                                    para.nStep = 'departmentLoopWrite';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                },para.errorCallBack)
                            break
                        case 'departmentLoopWrite':
                            $this.loopDepartment(para.groupID,para.departmentID[para.i],para.newIDArr[para.i],function () {
                                para.i++
                                if(para.i===para.departmentID.length){
                                    $this.treeData = [{
                                        // $table: $this.mac.tb.group,
                                        // $arrField: [$this.mac.fd.group.name],
                                        // $arrValue: para.groupID,
                                        // $arrSubTab: [{
                                        $table: '_department',
                                        $arrField: [$this.mac.fd.department.name],
                                        $arrValue: para.newIDArr
                                        // }]
                                    }]
                                    $this.pusblishShow = true;
                                    para.nStep = '_hideModule';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                }else{
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                }
                            },para.errorCallBack)
                            break
                        case '_hideModule':
                            $this.showSubModule(['smSelect2'], false, function () {
                                $this.showSubModule(['smTree'], true, function () {
                                    $this.forceUpdateData(function () {
                                        para.nStep = '_startMoudle';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ranageSelect(id,successCallBack, errorCallBack)
                                        }
                                    })
                                },para.errorCallBack)
                            },para.errorCallBack)
                            break
                        case '_startMoudle':
                            $this.sm['smTree'].startModule(function () {
                                $this.pusblishShow = true
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ranageSelect(id,successCallBack, errorCallBack)
                                }
                            },para.errorCallBack)
                            break
                        case 'queryGroup':
                            objectName = $this.mac.tb.group;
                            parentRecord = null;
                            condition = null;
                            dbData={};
                            dbData[$this.mac.fd.id] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    para.groupID = dbData[$this.mac.fd.id][0];
                                    para.nStep = 'queryDepartment';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ranageSelect(id,successCallBack, errorCallBack)
                                    }
                                },para.errorCallBack)
                            break
                        case 'queryDepartment':
                            objectName = $this.mac.tb.department;
                            parentRecord = [para.groupID];
                            condition = $this.mac.fd.department.superior+'='+null;
                            dbData={};
                            dbData[$this.mac.fd.id] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    $this.nameArr =  [{
                                        $table: $this.mac.tb.groupActivity,
                                        $arrField: [$this.mac.fd.groupActivity.pubicDepartment],
                                        $arrValue: [$this.para.activityID]
                                    }]
                                    para.departmentID = dbData[$this.mac.fd.id];
                                    $this.listData = [{
                                        $table: $this.mac.tb.department,
                                        $arrField: [$this.mac.fd.department.name],
                                        $arrValue: para.departmentID
                                    }]
                                    $this.forceUpdateData(function () {
                                        $this.sm['smSelect2'].startModule(function () {
                                            $this.pusblishShow = true
                                            para.nStep = 'end';
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.ranageSelect(id,successCallBack, errorCallBack)
                                            }
                                        },para.errorCallBack)
                                    })
                                },para.errorCallBack)
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
            loopDepartment:function(groupID,orginID,newID,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let fnname = 'publishSet.loopDepartment';
                let condition;
                let dbData;

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
                        case 'queryDepartment':
                            objectName = $this.mac.tb.department;
                            parentRecord = [groupID];
                            condition = $this.mac.fd.department.superior+'='+orginID+'&&'+$this.mac.fd.department.attrib+'='+$this.mac.enum.department.attrib.department;
                            dbData={};
                            dbData[$this.mac.fd.id] = []
                            dbData[$this.mac.fd.department.name] = []
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function(){
                                    para.idArr = dbData[$this.mac.fd.id];
                                    para.name =  dbData[$this.mac.fd.department.name];
                                    if(para.idArr.length>0){
                                        para.nStep = 'newDepartment';
                                    }else{
                                        para.nStep = 'end';
                                    }
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.loopDepartment(groupID,orginID,newID,successCallBack, errorCallBack)
                                    }
                                },para.errorCallBack)
                            break
                        case 'newDepartment':
                            objectName = '_department';
                            // parentRecord = groupID;
                            parentRecord = null;
                            dbData={};
                            dbData[$this.mac.fd.department.name] = para.name;
                            dbData['origin_id'] = para.idArr;
                            dbData[$this.mac.fd.department.superior] = []
                            for(var i=0;i<para.name.length;i++){
                                dbData[$this.mac.fd.department.superior].push(newID)
                            }
                            $this.sys.api.recordNew(objectName,parentRecord, dbData,
                                function(){
                                    para.newIDArr = dbData[$this.mac.fd.id]
                                    para.i = 0;
                                    para.nStep = 'loop_department';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.loopDepartment(groupID,orginID,newID,successCallBack, errorCallBack)
                                    }
                                },para.errorCallBack)
                            break
                        case 'loop_department':
                            if (para.i === para.newIDArr.length) {
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }
                            $this.loopDepartment(groupID,para.idArr[para.i],para.newIDArr[para.i],
                                function (result) {
                                    para.i++;
                                    if (para.i === para.newIDArr.length) {
                                        para.nStep = 'end';
                                    }
                                    if (++dbFlag === 2) {
                                        $this.loopDepartment(groupID,orginID,newID,successCallBack, errorCallBack)
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
            wrongInfoShow: function (successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'publishSet.wrongInfoShow';
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
                        case 'queryActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.pubicDepartment] = [];
                            dbData[$this.mac.fd.groupActivity.publicCustomer] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.pubicDepartment = dbData[$this.mac.fd.groupActivity.pubicDepartment][0];
                                    para.publicCustomer = dbData[$this.mac.fd.groupActivity.publicCustomer][0];
                                    para.function = dbData[$this.mac.fd.groupActivityManageMember.function];
                                    if(para.publicCustomer===0&&para.pubicDepartment===0){
                                        para.nStep = 'end';
                                    }else if(para.publicCustomer===null&&para.pubicDepartment===null){
                                        $this.tipText = '请选择可见范围';
                                        para.nStep = 'startModule';
                                    }else if(para.publicCustomer===null&&para.pubicDepartment.length===0){
                                        $this.tipText = '请选择可见部门';
                                        para.nStep = 'startModule';
                                    }else if(para.pubicDepartment===null&&para.publicCustomer.length===0){
                                        $this.tipText = '请选择可见客户';
                                        para.nStep = 'startModule';
                                    }else{
                                        para.nStep = 'end';
                                    }
                                    $this.forceUpdateData(function () {
                                        if (++$dbFlag === 2) {
                                            $this.wrongInfoShow(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'startModule':
                            $this.sm['smText4'].startModule(function () {
                                para.nStep = 'showModules';
                                if (++$dbFlag === 2) {
                                    $this.wrongInfoShow(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            $this.showSubModule(['smText4'], true, function () {
                                $this.$message({
                                    type: 'error',
                                    message: $this.tipText
                                });
                                $("html,body").animate({
                                    scrollTop: $('.publish-set')[0].offsetTop-100+ "px"
                                },200);
                                para.nStep = 'default';
                                if (++$dbFlag === 2) {
                                    $this.wrongInfoShow(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
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
            wrongInfoHide(table,checkedId,content){
                if(checkedId.length>0){
                    this.showSubModule(['smText4'], false, function () {},function () {})
                }
                this.dataOutput(this.mac.tb.groupActivity,this.para.activityID)
            },
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                    },function (error) {console.error(error)})
            },
            writePubicDepartment:function (checkedId,successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'publishSet.writePubicDepartment';
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
                        // case 'queryActivity':
                        //     objectName = $this.mac.tb.groupActivity;
                        //     dbData = {};
                        //     dbData[$this.mac.fd.id] = [$this.para.activityID];
                        //     dbData[$this.mac.fd.groupActivity.pubicDepartment] = [];
                        //     $this.sys.api.recordRead(objectName, dbData,
                        //         function () {
                        //             para.pubicDepartment = dbData[$this.mac.fd.groupActivity.pubicDepartment][0];
                        //             para.nStep = 'queryDepartmeny';
                        //             if (++$dbFlag === 2) {
                        //                 $this.writePubicDepartment(checkedId,successCallBack, errorCallBack)
                        //             }
                        //         }, para.errorCallBack)
                        //     break;
                        case 'queryDepartmeny':
                            if(checkedId.length>0){
                                $this.showSubModule(['smText4'], false, function () {},function () {})
                            }
                            objectName = '_department';
                            dbData = {};
                            dbData[$this.mac.fd.id] =  checkedId;
                            dbData['origin_id'] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.originID = dbData['origin_id'];
                                    para.nStep = 'modifyActivity';
                                    if (++$dbFlag === 2) {
                                        $this.writePubicDepartment(checkedId,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'modifyActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.pubicDepartment] = [para.originID];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'end';
                                    if (++$dbFlag === 2) {
                                        $this.writePubicDepartment(checkedId,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
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
            // treeSelectAll:function (successCallBack, errorCallBack) {
            //     let objectName;
            //     let parentRecord;
            //     let condition;
            //     let dbData;
            //     var $this = this;
            //     var fnname = 'publishSet.treeSelectAll';
            //     if (successCallBack !== null) {
            //         errorCallBack = {
            //             successCallBack: successCallBack,
            //             errorCallBack: errorCallBack,
            //             nStep: 0
            //         }
            //         successCallBack = null
            //     }
            //     let para = errorCallBack;
            //     while (1) {
            //         if ($this.debugFlag) {
            //             console.log(fnname + ': para.nStep = ' + para.nStep);
            //         }
            //         var $dbFlag = 0;
            //         switch (para.nStep) {
            //             case 0:
            //             case 'query_department':
            //                 objectName = '_department';
            //                 parentRecord = null;
            //                 condition = $this.mac.fd.department.superior +'='+null;
            //                 dbData={};
            //                 dbData[$this.mac.fd.department.name] = []
            //                 $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
            //                     function(){
            //                         $this.treeValue = dbData[$this.mac.fd.department.name];
            //                         para.nStep = 'getAllId';
            //                         if (++$dbFlag === 2) {
            //                             $this.startModule(successCallBack, errorCallBack)
            //                         }
            //                     },para.errorCallBack)
            //                 break
            //             case 'getAllId':
            //                 objectName = '_department';
            //                 parentRecord = null;
            //                 condition = null;
            //                 dbData={};
            //                 dbData[$this.mac.fd.id] = []
            //                 $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
            //                     function(){
            //                         para.allID = dbData[$this.mac.fd.id];
            //                         para.nStep = 'groupActivityModify';
            //                         if (++$dbFlag === 2) {
            //                             $this.startModule(successCallBack, errorCallBack)
            //                         }
            //                     },para.errorCallBack)
            //                 break
            //             case 'groupActivityModify':
            //                 objectName = $this.mac.tb.groupActivity;
            //                 dbData={};
            //                 dbData[$this.mac.fd.id] = [$this.para.activityID];
            //                 dbData[$this.mac.fd.groupActivity.pubicDepartment] = [para.allID];
            //                 $this.sys.api.recordModify(objectName, dbData,
            //                     function(){
            //                         para.nStep = 'startModule';
            //                         $this.forceUpdateData(function () {
            //                             if (++$dbFlag === 2) {
            //                                 $this.startModule(successCallBack, errorCallBack)
            //                             }
            //                         })
            //                     },para.errorCallBack)
            //                 break
            //             case 'startModule':
            //                 $this.sm['smTree'].startModule(function () {
            //                     para.nStep = 'end';
            //                     if (++$dbFlag === 2) {
            //                         $this.startModule(successCallBack, errorCallBack)
            //                     }
            //                 }, para.errorCallBack);
            //                 break;
            //             case 'end':
            //                 para.successCallBack()
            //                 return;
            //             case 'default':
            //                 return;
            //         }
            //         if (++$dbFlag === 1) {
            //             return;
            //         }
            //     }
            // },

            smSelect1_dataModifyEvent:function (id,name) {
                this.ranageSelect(id,function () {},function () {})
            },
            smSelect2_dataModifyEvent:function (table,checkedId,content) {
                this.wrongInfoHide(table,checkedId,content)
            },
            smTree_dataModifyEvent:function (table,checkedId,content) {
                this.writePubicDepartment(checkedId,function () {},function () {})
            },
            // smTree_addOption:function () {
            //     this.treeSelectAll(function () {},function () {})
            // },
            arrToStrOfCondition :function (arr) {
                if (arr.length === 0) {
                    return null;
                } else if (arr.length === 1) {
                    return arr[0];
                }else{
                    var str = arr.join(',');
                    return '[' + str + ']';
                }
            }
        }
    }
</script>
<style lang="scss">
    .publish-set {
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
            .info-tip {
                .el-icon-warning {
                    color: #F56C6C;
                    vertical-align: middle;
                    margin: -2px 5px 0 0;
                }
            }

            .publish-content {
                .lm-select{
                    width: 100%;
                    .el-select {
                        width: 100%;
                    }
                }
            }

        }
    }
</style>
<style lang="scss" scoped>
    .publish-set {
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
            position: relative;

            .info-tip {
                position: absolute;
                top: 105px;
            }

            .row {
                height: 40px;
                padding: 20px 0;
            }

            .publish-item {
                padding-right: 50px;
                display: flex;
            }

            .publish-title {
                width: 100px;
                /*text-align: center;*/
            }

            .publish-content {
                height: 40px;
                flex: 1;
            }
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