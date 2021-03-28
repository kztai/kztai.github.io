<template>
    <div class="code-check-wrap">
        <lm-input-text
                ref="inputRef"
                refId="inputRef"
                v-show="pvt_isShow.input === 'inputRef'"
                :paraVarPair="pvt_input.inputRef.paraVarPair"
                :para="pvt_input.inputRef.para"
                :attr="pvt_input.inputRef.attr">
        </lm-input-text>
        <lm-button
                ref="checkBtnRef"
                refId="checkBtnRef"
                v-show="pvt_isShow.checkBtn === 'checkBtnRef'"
                :paraVarPair="pvt_checkBtn.checkBtnRef.paraVarPair"
                :para="pvt_checkBtn.checkBtnRef.para"
                :attr="pvt_checkBtn.checkBtnRef.attr">
        </lm-button>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                codeValue: '',

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['inputRef', 'checkBtnRef'],
                    vessel: ['input', 'checkBtn'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    input: null,
                    checkBtn: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['ticketPassIn'],
            }
        },
        computed: {
            pvt_input: function () {
                return {
                    inputRef: {
                        paraVarPair: {},
                        para: {
                            text: ''
                        },
                        attr: {
                            placeholder: '请输入参会者数字码或使用扫码设备进行验票',
                            size: "large"
                        }
                    }
                }
            },

            pvt_checkBtn: function () {
                return {
                    checkBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['验票', '']
                        },
                        attr: {
                            type: 'primary',
                            height: '60px',
                            size: 'large'
                        }
                    }
                }
            },
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'codeCheck_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    checkBtnRef: 'checkBtnRef',
                    inputRef: 'inputRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'start_2':
                            this.codeValue = '';
                            that.sm[ref.checkBtnRef].startModule(function () {
                                para.nStep = 'start_3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.inputRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['inputRef', 'checkBtnRef'];
                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
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

            getCodeValue: function(value) {
                this.codeValue = value;
            },

            checkTicketWrap: function() {
                if(navigator.onLine) {
                    this.checkTicket(function () {
                    }, function () {
                    })
                } else {
                    this.$message.warning('出错了！请稍后再试。');
                }
            },

            checkTicket: function(successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'codeCheck_checkTicket';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let page;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            if(this.codeValue === '') {
                                that.$message.warning('请输入报名码');
                                para.nStep = 'end';
                            } else {
                                para.nStep = 'inputOrder';
                            }
                            dbFlag++;
                            break;
                        // case 'isLegal':
                        //     // 这是新架构下载数据的方法，暂时未实现：
                        //     record = [{
                        //         $table: this.mac.tb.groupActivityOrder,
                        //         $arrField: [],
                        //         $value: this.mac.fd.groupActivityOrder.groupActivityID + '=' + this.para.activityId,
                        //         $arrSubTab: [{
                        //             $table: this.mac.tb.groupActivityBill,
                        //             $arrField: null,
                        //             $value: this.mac.fd.groupActivityBill.code + '=' + this.codeValue + '&&' + this.mac.fd.groupActivityBill.status + '=' + this.mac.enum.groupActivityBill.status.checkTicket,
                        //             $arrSubTab: []
                        //         }]
                        //     }];
                        //     page = {
                        //         table: this.mac.tb.groupActivityBill,
                        //         number: 10,
                        //         sortField: ['id'],
                        //         sortMode: [0]  // 0升序；1降序
                        //     };
                        //     this.sys.api.dataInput(record, page, function () {
                        //         para.curApplyId = record[0].$arrSubTab[0].$value[0];
                        //         if(para.curApplyId) {
                        //             para.nStep = 'getParentId';
                        //         } else {
                        //             that.$message.error('此报名码无效！');
                        //             para.nStep = 'end';
                        //         }
                        //         if (++dbFlag === 2) {
                        //             that.checkTicket(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        // case 'isLegal':
                        //     let expression = this.mac.fd.groupActivityBill.code + '=' + this.codeValue + '&&' + this.mac.fd.groupActivityBill.status + '=' + this.mac.enum.groupActivityBill.status.checkTicket;
                        //     let start = null;
                        //     let total = null;
                        //     let sort = ['id,asc'];
                        //     let destGeneSite = '';
                        //     let portName = this.mac.tb.groupActivityBill;
                        //     let inputData = null;
                        //     this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                        //         if(result) {
                        //             para.curApplyId = result[0];
                        //             para.nStep = 'getParentId';
                        //         } else {
                        //             that.$message.error('此报名码无效！');
                        //             para.nStep = 'end';
                        //         }
                        //
                        //         if (++dbFlag === 2) {
                        //             that.checkTicket(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        case 'inputOrder':
                            let expression = this.mac.fd.groupActivityOrder.groupActivityID + '=' + this.para.activityId;
                            let start = null;
                            let total = null;
                            let sort = ['id,asc'];
                            let destGeneSite = '';
                            let portName = this.mac.tb.groupActivityOrder;
                            let inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                that.curOrderIdArr = JSON.parse(JSON.stringify(result));
                                para.nStep = 'isLegal';
                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'isLegal':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = this.mac.fd.groupActivityBill.code + '=' + this.codeValue + '&&' + this.mac.fd.groupActivityBill.status + '=' + this.mac.enum.groupActivityBill.status.checkTicket;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                if(dbData[that.mac.fd.id].length > 0) {
                                    para.curApplyId = dbData[that.mac.fd.id][0];
                                    para.nStep = 'getParentId';
                                } else {
                                    that.$message.error('此报名码无效！');
                                    para.nStep = 'end';
                                }

                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'getParentId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = [para.curApplyId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                that.ep.ticketPassIn(result[0], function () {
                                }, function () {
                                });
                                para.nStep = 'modifyData';
                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [para.curApplyId];
                            dbData[this.mac.fd.groupActivityBill.status] = [this.mac.enum.groupActivityBill.status.finish];
                            that.sys.api.recordModify(tableName, dbData, function (result) {
                                that.$message.success('验票成功！');
                                that.codeValue = '';
                                para.nStep = 'refresh';
                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'refresh':
                            that.forceUpdateData(function () {
                                that.sm.inputRef.startModule(function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.checkTicket(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
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


            checkBtnRef_buttonClickEvent: function () {
                this.checkTicketWrap();
            },
            inputRef_dataModifyEvent: function (value) {
                this.getCodeValue(value);
            },
        }
    }
</script>

<style lang="scss">
    .code-check-wrap {
        text-align: center;
        .lm_text_input_container {
            display: inline-block;
            min-width: 500px;
            .el-input--large {
                font-size: 18px;
            }
            .el-input__inner {
                height: 60px;
                line-height: 60px;
                border-radius: 10px 0 0 10px;
            }
        }

        .lm-button {
            display: inline-block;
            .el-button--primary {
                border-radius: 0 10px 10px 0;
            }
            .el-button--large {
                font-size: 18px;
            }
        }
    }
</style>
