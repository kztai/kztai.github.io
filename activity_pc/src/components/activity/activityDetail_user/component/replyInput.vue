<template>
    <div class="reply-input">
        <div class="row discuss-btn">
            <lm-button
                    ref="smButton1"
                    refId="smButton1"
                    v-show="pvt_isShow.v1 === 'smButton1'"
                    :paraVarPair="pvt_v1.smButton1.paraVarPair"
                    :para="pvt_v1.smButton1.para"
                    :attr="pvt_v1.smButton1.attr">
            </lm-button>
        </div>
        <div style="clear:both;"></div>
        <div class="row mar-t-10">
            <lm-input-text
                    ref="smInput1"
                    refId="smInput1"
                    v-show="pvt_isShow.v2 === 'smInput1'"
                    :paraVarPair="pvt_v2.smInput1.paraVarPair"
                    :para="pvt_v2.smInput1.para"
                    :attr="pvt_v2.smInput1.attr">
            </lm-input-text>
        </div>
        <div class="row reply-btns">
            <div class="col mar-r-10">
                <lm-button
                        ref="smButton2"
                        refId="smButton2"
                        v-show="pvt_isShow.v3 === 'smButton2'"
                        :paraVarPair="pvt_v3.smButton2.paraVarPair"
                        :para="pvt_v3.smButton2.para"
                        :attr="pvt_v3.smButton2.attr">
                </lm-button>
            </div>
            <div class="col">
                <lm-button
                        ref="smButton3"
                        refId="smButton3"
                        v-show="pvt_isShow.v4 === 'smButton3'"
                        :paraVarPair="pvt_v4.smButton3.paraVarPair"
                        :para="pvt_v4.smButton3.para"
                        :attr="pvt_v4.smButton3.attr">
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
                    vessel: ["v1", "v2", "v3", "v4"],
                    subModule: ["smButton1", "smInput1", "smButton2", "smButton3"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                },

                pvt_eventPortInput: ['discussAnswerEvent'],


                mac: mac.mac,
                debugFlag: true,
                inputText: '',
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: ['回复', ''],
                        },
                        attr: {
                            type: 'primary', height: '28px', width: '60px'
                        }
                    }
                }
            },
            pvt_v2: function () {
                return {
                    smInput1: {
                        paraVarPair: {},
                        para: {
                            text: this.inputText,
                        },
                        attr: {
                            placeholder: '请输入回复内容'
                        }
                    }
                }
            },
            pvt_v3: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name: ['取消', ''],
                        },
                        attr: {
                            height: '28px', width: '60px'
                        }
                    },
                }
            },
            pvt_v4: function () {
                return {
                    smButton3: {
                        paraVarPair: {},
                        para: {
                            name: ['确定', ''],
                        },
                        attr: {
                            type: 'primary', height: '28px', width: '60px'
                        }
                    },
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
                let condition;
                let fnname = 'replyInput.startModule';
                let dbData;
                let ref = {
                    sm1: 'smButton1',
                    sm2: 'smInput1',
                    sm3: 'smButton2',
                    sm4: 'smButton3',
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            let refId = ["smButton1"];
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
            discussReply: function () {
                let $this = this;
                $this.inputText = '';
                $this.forceUpdateData(function () {
                    $this.sm['smInput1'].startModule(function () {
                        $this.showSubModule(['smInput1', 'smButton2', 'smButton3'], true, function () {
                        }, function (error) {
                            console.error(error)
                        });
                    }, function (error) {
                        console.error(error)
                    });
                })
            },
            replyInputHide:function(){
                let $this = this;
                $this.showSubModule(['smInput1', 'smButton2', 'smButton3'], false, function () {
                }, function (error) {
                    console.error(error)
                });
            },
            discussPublish: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'replyInput.discussPublish';

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
                            if($this.inputText===''||$this.inputText===null){
                                para.nStep = 'hideModule';
                                dbFlag += 1;
                            }else{
                                para.nStep = 'groupActivityDiscussModify';
                                dbFlag += 1;
                            }
                            break
                        case 'groupActivityDiscussModify':
                            para.currentTime = $this.getCurrentTime();
                            objectName = $this.mac.tb.groupActivityDiscuss;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.$arrValue];
                            dbData[$this.mac.fd.groupActivityDiscuss.answerContent] = [$this.inputText];
                            dbData[$this.mac.fd.groupActivityDiscuss.answerTime] = [para.currentTime];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'discussAnswerIn';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.discussPublish(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'discussAnswerIn':
                            $this.ep.discussAnswerEvent($this.para.$arrValue, function () {
                                para.nStep = 'end';
                                // para.nStep = 'dataInputGroupActivityDiscuss';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.discussPublish(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        case 'dataOutput':
                            $this.sys.api.dataOutput($this.mac.tb.groupActivityDiscuss, [$this.para.$arrValue], '',
                                function (result) {
                                    para.nStep = 'dataInputGroupActivityDiscuss';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.discussPublish(successCallBack, errorCallBack)
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'dataInputGroupActivityDiscuss':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivityDiscuss] = [null];
                            var expression = $this.mac.fd.groupActivityDiscuss.groupActivityID + '=' + $this.para.$arrValue;
                            var start = null;
                            var total = null;
                            var sort = ['id,asc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivityDiscuss, geneInputData, expression, start, total, sort, destGeneSite,
                                function (result) {
                                    para.nStep = 'showReply';
                                    $this.replyShow = true;
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.discussPublish(successCallBack, errorCallBack)
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'showReply':
                            $this.ep.discussAnswerEvent($this.para.$arrValue, function () {
                                para.nStep = 'startModule10';
                                // para.nStep = 'dataInputGroupActivityDiscuss';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.discussPublish(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        case 'hideModule':
                            $this.showSubModule(['smInput1', 'smButton2', 'smButton3'], false,
                                function () {
                                    para.nStep = 'end';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.discussPublish(successCallBack, errorCallBack)
                                    }
                                }, function (error) {
                                    console.error(error)
                                });
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
            getCurrentTime: function () {
                let newTime = new Date();
                let hour, minute, second, year, month, date;
                hour = newTime.getHours() < 10 ? ("0" + newTime.getHours()) : newTime.getHours();
                minute = newTime.getMinutes() < 10 ? ("0" + newTime.getMinutes()) : newTime.getMinutes();
                second = newTime.getSeconds() < 10 ? ("0" + newTime.getSeconds()) : newTime.getSeconds();
                year = newTime.getFullYear();
                month = newTime.getMonth() + 1 < 10 ? ("0" + (newTime.getMonth() + 1)) : newTime.getMonth() + 1;
                date = newTime.getDate() < 10 ? ("0" + newTime.getDate()) : newTime.getDate();
                return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
            },
            inputTextSave: function (value) {
                this.inputText = value;
            },

            smButton1_buttonClickEvent: function () {
                this.discussReply();
            },
            smInput1_dataModifyEvent: function (value) {
                this.inputTextSave(value);
            },
            smButton2_buttonClickEvent: function () {
                this.replyInputHide();
            },
            smButton3_buttonClickEvent: function () {
                this.discussPublish(function () {
                }, function () {
                });
            },
        }
    }
</script>
<style lang="scss">
    .reply-input {
        .discuss-btn {
            .lm-button .el-button {
                padding: 0;
                font-size: 14px;
            }
        }

        .reply-btns {
            .lm-button .el-button {
                padding: 0;
                font-size: 14px;
            }
        }

        .svg-container {
            display: none;
        }
    }
</style>
<style lang="scss" scoped>
    .reply-input {
        overflow: auto;
        .discuss-btn{
            float: right;
        }
        .reply-btns {
            float: right;
            margin-top: 10px;
        }
    }

    .mar-t-10 {
        margin-top: 10px;
    }

    .mar-r-5 {
        margin-right: 5px;
    }

    .mar-10 {
        margin: 10px 0 4px 0;
    }

    .mar-b-5 {
        margin-bottom: 5px;
    }

    .mar-r-10 {
        margin-right: 10px;
    }

    .mar-5 {
        margin: 0 5px;
    }

    .f-r {
        float: right;
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