<template>
    <div class="info-list-wrap">
        <div class="info-num-text">
            <lm-link-text
                    ref="numTextRef"
                    refId="numTextRef"
                    v-show="pvt_isShow.numText === 'numTextRef'"
                    :paraVarPair="pvt_numText.numTextRef.paraVarPair"
                    :para="pvt_numText.numTextRef.para"
                    :attr="pvt_numText.numTextRef.attr">
            </lm-link-text>
        </div>
        <div class="info-item-wrap" v-show="showInfoItem">
            <infoInput
                    ref="infoInputRef"
                    refId="infoInputRef"
                    v-show="pvt_isShow.infoInput === 'infoInputRef'"
                    v-for="(item, index) in pvt_infoInput.infoInputRef.forData"
                    :number="index"
                    :paraVarPair="pvt_infoInput.infoInputRef.paraVarPair"
                    :para="item.para"
                    :attr="item.attr">
            </infoInput>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import infoInput from './infoInput';

    export default {
        components: {infoInput},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                curFormIdArr: [],
                curBillIdArr: [],
                infoDataArr: [],
                showInfoItem: true,
                foldIcon: 'el-icon-caret-bottom',

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['infoInputRef', 'numTextRef'],
                    vessel: ['infoInput', 'numText'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    infoInput: null,
                    numText: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: [],
            }
        },
        computed: {
            pvt_numText: function () {
                return {
                    numTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '第' + (this.number + 1) + '位'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#12B0FF',
                            fontWeight: true,
                            icon: this.foldIcon,
                            isClick: true
                        }
                    }
                }
            },

            pvt_infoInput: function () {
                let loopModule = {
                    infoInputRef: {
                        para: {
                            curFormId: this.curFormIdArr,
                            curBillId: this.curBillIdArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    infoInputRef: {
                        paraVarPair: {},
                        forData: forData.infoInputRef,
                    },
                };
            }
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
                let fnname = 'infoList_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite;
                let portName;
                let inputData;
                let record;
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
                    infoInputRef: 'infoInputRef',
                    numTextRef: 'numTextRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.curFormIdArr = [];
                            that.curBillIdArr = [];
                            that.infoDataArr = [];

                            tableName = this.mac.tb.groupActivity;
                            expression = that.mac.fd.id +'='+ that.para.curActivityId;
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            inputData = {
                                [this.mac.tb.groupActivity] : null,
                                [this.mac.tb.groupActivityEnrollForm] : null
                            };

                            that.sys.api.conditiondataInput(tableName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                // for (let i = 0; i < result.length; i++) {
                                //     that.curFormIdArr.push(result[i]);
                                //     that.curBillIdArr.push(that.para.curBillId);
                                // }
                                // that.forceUpdateData(function () {
                                //     para.nStep = 'start_9';
                                //     if (++dbFlag === 2) {
                                //         that.startModule(successCallBack, errorCallBack)
                                //     }
                                // });
                                para.nStep = 'getApplyData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getApplyData':
                            tableName = this.mac.tb.groupActivityEnrollForm;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];

                            that.sys.api.recordQuery(tableName, [that.para.curActivityId], condition, dbData, function () {
                                for (let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    that.curFormIdArr.push(dbData[that.mac.fd.id][i]);
                                    that.curBillIdArr.push(that.para.curBillId);
                                }
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_9';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_9':
                            if (para.i > that.sm[ref.infoInputRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'start_10';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.infoInputRef][para.i].startModule(function (infoData) {
                                if (infoData) {
                                    that.infoDataArr.push(infoData);
                                }
                                para.i++;
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_10':
                            that.sm[ref.numTextRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['infoInputRef', 'numTextRef'];
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

            infoChange: function (infoData) {
                for (let i = 0; i < this.infoDataArr.length; i++) {
                    if (Object.keys(this.infoDataArr[i])[0] === Object.keys(infoData)[0]) {
                        let key = Object.keys(this.infoDataArr[i])[0];
                        this.infoDataArr[i][key] = JSON.parse(JSON.stringify(infoData[key]));
                    }
                }
            },

            foldList: function() {
                let that = this;
                if(that.foldIcon === 'el-icon-caret-right') {
                    that.showInfoItem = true;
                    that.foldIcon = 'el-icon-caret-bottom'
                } else {
                    that.showInfoItem = false;
                    that.foldIcon = 'el-icon-caret-right'
                }
                that.forceUpdateData(function () {
                    that.sm.numTextRef.startModule(function () {
                    }, function () {
                    })
                })
            },

            // 公开方法：
            getInfo: function () {
                return this.infoDataArr
            },


            infoInputRef_infoChangeEvent(infoData) {
                this.infoChange(infoData);
            },
            numTextRef_textClickEvent() {
                this.foldList();
            },
        }
    }
</script>
<style lang="scss">
    .info-list-wrap {
        margin-bottom: 20px;
        padding: 0 40px;
        .info-num-text {
            user-select: none;
        }
        .link-status.link-text:focus, .link-status.link-text:hover {
            border-bottom: none;
        }
    }
</style>
