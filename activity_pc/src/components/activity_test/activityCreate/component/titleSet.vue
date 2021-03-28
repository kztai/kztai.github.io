<template>
    <div class="title-set" :id="'title-set'+number">
        <div class="row">
            <div class="col title-set-title">
                <lm-button
                        ref="smButton"
                        refId="smButton"
                        v-show="pvt_isShow.v1 === 'smButton'"
                        :paraVarPair="pvt_v1.smButton.paraVarPair"
                        :para="pvt_v1.smButton.para"
                        :attr="pvt_v1.smButton.attr">
                </lm-button>
            </div>
            <div class="col title-set-input">
                <lm-input-text
                        ref="smInput"
                        refId="smInput"
                        v-show="pvt_isShow.v2 === 'smInput'"
                        :paraVarPair="pvt_v2.smInput.paraVarPair"
                        :para="pvt_v2.smInput.para"
                        :attr="pvt_v2.smInput.attr">
                </lm-input-text>
            </div>
            <div class="title-set-delete">
                <lm-button
                        ref="smButton1"
                        refId="smButton1"
                        v-show="pvt_isShow.v3 === 'smButton1'"
                        :paraVarPair="pvt_v3.smButton1.paraVarPair"
                        :para="pvt_v3.smButton1.para"
                        :attr="pvt_v3.smButton1.attr">
                </lm-button>
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
                    vessel: ["v1", "v2", "v3"],
                    subModule: ["smButton","smInput","smButton1"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                },

                pvt_eventPortInput: ['titleSetDeleteEvent'],


                mac:mac.mac,
                inputText:'',
                type:{
                    commonly:0,
                    singText:1,
                    multipleText:2,
                    radio:3,
                    checkBox:4,
                    numberInput:5,
                    fileUpload:6,
                    pictureUpload:7
                },
                name:[],
                originalValue:null,
                debugFlag:true,
                typeValue:'text'
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smButton: {
                        paraVarPair: {},
                        para: {
                            name:this.name
                        },
                        attr: {
                            height:'36px'
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smInput: {
                        paraVarPair: {

                        },
                        para: {
                            text:this.inputText
                        },
                        attr: {
                            placeholder:this.attr.placeholder,type:this.typeValue
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name:['','el-icon-remove']
                        },
                        attr: {
                          type:'text',height: '16px'
                        }
                    }
                }
            }
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
                let condition;
                let dbData;
                let ref = {
                    sm1: 'smButton',
                    sm2: 'smInput',
                    sm3: 'smButton1',
                };

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            if($this.attr.commonlyType === $this.type.radio){
                                $this.name = ['','lm-icon-radio'];
                            }else if($this.attr.commonlyType === $this.type.checkBox){
                                $this.name = ['','lm-icon-checkBox'];
                            }
                            // else if($this.attr.commonlyType === $this.type.pictureUpload){
                            //   if($this.attr.placeholder==='不填则默认10张'){
                            //       $this.name = ['最大张数',''];
                            //   }else if($this.attr.placeholder==='不填则默认最大为1Mb'){
                            //       $this.name = ['图片大小',''];
                            //   }
                            //   this.typeValue = 'number'
                            // }else if($this.attr.commonlyType === $this.type.fileUpload){
                            //     if($this.attr.placeholder==='不填则默认10个'){
                            //         $this.name = ['最大个数',''];
                            //     }else if($this.attr.placeholder==='不填则默认最大为1Mb'){
                            //         $this.name = ['文件大小',''];
                            //     }
                            //     this.typeValue = 'number'
                            // }
                            para.nStep = 'hideModules';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'hideModules':
                            //显示子组件
                            var refId = ["smButton","smInput","smButton1"]
                            $this.showSubModule(refId, false, function () {
                                para.nStep = 'queryGroupActivityTicketType';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [];
                            $this.sys.api.recordRead(objectName,  dbData,
                                function () {
                                    para.baseComponent = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0];
                                    if(para.baseComponent['dataArr'][$this.number]){
                                        $this.inputText = para.baseComponent['dataArr'][$this.number].text;
                                    }else{
                                        $this.inputText = '';
                                    }
                                    $this.$nextTick(() => {
                                        para.nStep = 'startModule1';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            var refId;
                            if($this.attr.deleteShow===true){
                                refId = ["smButton","smInput","smButton1"]
                            }else{
                                refId = ["smButton","smInput"]
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
            dataArrSet:function(value,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'titleSet.dataArrSet';

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
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [];
                            $this.sys.api.recordRead(objectName,  dbData,
                                function () {
                                    para.baseComponent = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0];
                                    para.dataArr =  dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'];
                                    para.flag = $this.nameCheck(value,para.dataArr,$this.number);
                                    if($this.attr.commonlyType === $this.type.radio||$this.attr.commonlyType === $this.type.checkBox){
                                        para.nStep = 'radioAndCheckBox';
                                    }
                                    // else if($this.attr.commonlyType === $this.type.pictureUpload){
                                    //     para.nStep = 'picture';
                                    // }else if($this.attr.commonlyType === $this.type.fileUpload){
                                    //     para.nStep = 'file';
                                    // }
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.dataArrSet(value,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        // case 'file':
                        //     if($this.number===0){
                        //         value = Math.floor(value);
                        //        if(value>10){
                        //             $this.$message({
                        //                 type: 'error',
                        //                 message: '文件个数不能大于10个'
                        //             });
                        //             $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'][$this.number].text;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'startModule';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }else if(value<1){
                        //             $this.$message({
                        //                 type: 'error',
                        //                 message: '文件个数最少为1张'
                        //             });
                        //             $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'][$this.number].text;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'startModule';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }else{
                        //            para.regExp = /\b(0+)/gi;
                        //            value = value +'';
                        //            if(Number(value)===0){
                        //                value = 0;
                        //            }else if (para.regExp.test(value)) {
                        //                value = value.replace(/\b(0+)/gi,"");
                        //            }
                        //             para.baseComponent['dataArr'][$this.number].text = value;
                        //             $this.inputText = value;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'activityEnrollFormNameModify';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }
                        //     }else if($this.number===1){
                        //         if(value>1){
                        //             $this.$message({
                        //                 type: 'error',
                        //                 message: '文件最大为1Mb'
                        //             });
                        //             $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'][$this.number].text;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'startModule';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }else if(value<0){
                        //             $this.$message({
                        //                 type: 'error',
                        //                 message: '文件大小不能为负数'
                        //             });
                        //             $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'][$this.number].text;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'startModule';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }else{
                        //             para.regExp = /\b(0+)/gi;
                        //             value = value +'';
                        //             if(Number(value)===0){
                        //                 value = 0;
                        //             }else if (para.regExp.test(value)&&value.indexOf(".")==-1) {
                        //                 value = value.replace(/\b(0+)/gi,"");
                        //             }
                        //             para.baseComponent['dataArr'][$this.number].text = value;
                        //             $this.inputText = value;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'activityEnrollFormNameModify';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }
                        //     }
                        //     break
                        // case 'picture':
                        //     if($this.number===0){
                        //         value = Math.floor(value);
                        //         if(value>10){
                        //             $this.$message({
                        //                 type: 'error',
                        //                 message: '图片张数不能大于10张'
                        //             });
                        //             $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'][$this.number].text;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'startModule';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }else if(value<1){
                        //             $this.$message({
                        //                 type: 'error',
                        //                 message: '图片张数最少为1张'
                        //             });
                        //             $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'][$this.number].text;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'startModule';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }else{
                        //             para.regExp = /\b(0+)/gi;
                        //             value = value +'';
                        //             if(Number(value)===0){
                        //                 value = 0;
                        //             }else if (para.regExp.test(value)) {
                        //                 value = value.replace(/\b(0+)/gi,"");
                        //             }
                        //             para.baseComponent['dataArr'][$this.number].text = value;
                        //             $this.inputText = value;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'activityEnrollFormNameModify';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }
                        //     }else if($this.number===1){
                        //         if(value>1){
                        //             $this.$message({
                        //                 type: 'error',
                        //                 message: '图片最大为1Mb'
                        //             });
                        //             $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'][$this.number].text;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'startModule';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }else if(value<0){
                        //             $this.$message({
                        //                 type: 'error',
                        //                 message: '图片大小不能为负数'
                        //             });
                        //             $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'][$this.number].text;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'startModule';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }else{
                        //             para.regExp = /\b(0+)/gi;
                        //             value = value +'';
                        //             if(Number(value)===0){
                        //                 value = 0;
                        //             }else if (para.regExp.test(value)&&value.indexOf(".")==-1) {
                        //                 value = value.replace(/\b(0+)/gi,"");
                        //             }
                        //             para.baseComponent['dataArr'][$this.number].text = value;
                        //             $this.inputText = value;
                        //             $this.$nextTick(() => {
                        //                 para.nStep = 'activityEnrollFormNameModify';
                        //                 dbFlag += 1;
                        //                 if (dbFlag === 2) {
                        //                     $this.dataArrSet(value,successCallBack, errorCallBack)
                        //                 }
                        //             })
                        //         }
                        //     }
                        //     break
                        case 'radioAndCheckBox':
                            if(para.flag&&value!==''){
                                $this.$message({
                                    type: 'error',
                                    message: '选项内容不能相同'
                                });
                                $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'][$this.number].text;
                                $this.$nextTick(() => {
                                    para.nStep = 'startModule';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.dataArrSet(value,successCallBack, errorCallBack)
                                    }
                                })
                            }else{
                                if(!para.baseComponent['dataArr'][$this.number]){
                                    para.obj = {};
                                    para.obj.label = para.baseComponent['dataArr'].length+1;
                                    para.obj.text = value;
                                    para.baseComponent['dataArr'].push(para.obj)
                                }else{
                                    para.obj = {};
                                    para.obj.label = $this.number+1;
                                    para.obj.text = value;
                                    para.baseComponent['dataArr'][$this.number] = para.obj;
                                }
                                $this.inputText = value;
                                $this.$nextTick(() => {
                                    para.nStep = 'activityEnrollFormNameModify';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.dataArrSet(value,successCallBack, errorCallBack)
                                    }
                                })
                            }
                            break;
                        case 'activityEnrollFormNameModify':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID]
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [para.baseComponent];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                                    para.nStep = 'startModule';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.dataArrSet(value,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'startModule':
                            $this.sm['smInput'].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.dataArrSet(value,successCallBack, errorCallBack)
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

            nameCheck:function(value,arr,number){
                let temp = false;
                for(var i = 0;i<arr.length;i++){
                    if(arr[i].text===value&&i!==number){
                        temp = true;
                        break;
                    }
                }
                return temp
            },
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                    },function (error) {console.error(error)})
            },

            smButton1_buttonClickEvent:function(){
                let data = {};
                data['id'] = this.para.activityEnrollFormID;
                data['index'] = this.number;
                this.ep.titleSetDeleteEvent(data,function () {},function () {})
            },
            smInput_dataModifyEvent:function (value) {
                this.dataArrSet(value,function () {},function () {});
            },
        }
    }
</script>
<style lang="scss">
    .title-set {
        .row {
            .col {
                .el-input__inner {
                    height: 36px;
                    width: 100%;
                }
                .svg-container {
                    display: none;
                }
                .lm-checkbox{
                    text-align: center;
                    height: 36px;
                    line-height: 36px;
                }
                .el-icon-delete{
                    font-size: 18px;
                    padding:0;
                    color: #606266;
                }
                .el-icon-delete:hover{
                    color: #409EFF;
                }
                .el-button{
                    border:none;
                    padding:0;
                    font-size: 12px;
                    cursor: auto;
                }
            }
            .title-set-title{
                .el-button{
                    color: #8c939d;
                }
            }
            .title-set-delete{
                .lm-button{
                    height: 16px;
                }
                .el-button{
                    height: 16px;
                }
                .lm-button .el-button--text{
                    padding:0;
                    color: #C0C4CC;
                }
                .lm-button .el-button--text:hover{
                    color: #12B0FF;
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .title-set {
        position: relative;
        /*height: 36px;*/
        background: #ffffff;
        padding: 10px 40px 0 0;
        .row{
            display: flex;
            position: relative;
            .title-set-title{
                width: 60px;
            }
            .title-set-input{
                flex: 1;
            }
            .title-set-delete{
                position: absolute;
                right:-8px;
                top:0;
                cursor: pointer;
            }
        }
    }

    .title-set:first-child{
        padding: 0 40px 0 0;
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
</style>