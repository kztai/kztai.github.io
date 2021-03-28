<template>
    <div class="applicant-info-wrap">
        <div class="applicant-num">
            <lm-link-text
                    ref="numberRef"
                    refId="numberRef"
                    v-show="pvt_isShow.number === 'numberRef'"
                    :paraVarPair="pvt_number.numberRef.paraVarPair"
                    :para="pvt_number.numberRef.para"
                    :attr="pvt_number.numberRef.attr">
            </lm-link-text>
        </div>
        <div class="applicant-info-list">
            <lm-link-text
                    ref="infoListRef"
                    refId="infoListRef"
                    v-show="pvt_isShow.infoList === 'infoListRef'"
                    v-for="(item, index) in pvt_infoList.infoListRef.forData"
                    :number="index"
                    :paraVarPair="pvt_infoList.infoListRef.paraVarPair"
                    :para="item.para"
                    :attr="item.attr">
            </lm-link-text>
        </div>
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
                infoItemArr: [],
                fontSizeArr: [],

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['infoListRef', 'numberRef'],
                    vessel: ['infoList', 'number'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    number: null,
                    infoList: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['moduleChangeEvent', 'orderNewIn'],
            }
        },
        computed: {
            pvt_number: function () {
                return {
                    numberRef: {
                        paraVarPair: {},
                        para: {
                            textData: '第' + (this.number + 1) + '位'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_infoList: function () {
                let loopModule = {
                    infoListRef: {
                        para: {
                            textData: this.infoItemArr,
                        },
                        attr: {
                            fontSize: this.fontSizeArr,
                            // color: '#303133',
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    infoListRef: {
                        paraVarPair: {},
                        forData: forData.infoListRef,
                    },
                };
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
                let fnname = 'orderInput_start';
                let dbFlag;
                let dbData;
                let tableName;
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
                    infoListRef: 'infoListRef',
                    numberRef: 'numberRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.infoItemArr = [];

                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curBillId];
                            dbData[that.mac.fd.groupActivityBill.info] = [];
                            dbData[that.mac.fd.groupActivityBill.name] = [];
                            dbData[that.mac.fd.groupActivityBill.mobile] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                let infoData = dbData[that.mac.fd.groupActivityBill.info][0];

                                that.infoItemArr.push('姓名：' + dbData[that.mac.fd.groupActivityBill.name][0]);
                                that.infoItemArr.push('手机：' + dbData[that.mac.fd.groupActivityBill.mobile][0]);

                                that.fontSizeArr.push('13px');
                                that.fontSizeArr.push('13px');

                                for(let i = 0; i < infoData.name.length; i++) {
                                    if(infoData.content[i] === '' || infoData.content[i] === null || JSON.stringify(infoData.content[i]) === '[]') {
                                        continue
                                    }
                                    if(Array.isArray(infoData.content[i])) {
                                        let content = '';
                                        for(let j = 0; j < infoData.content[i].length; j++) {
                                            content += infoData.content[i][j] + '，';
                                        }
                                        content = content.slice(0, -1);
                                        that.infoItemArr.push(infoData.name[i] + '：' + content);
                                    } else {
                                        that.infoItemArr.push(infoData.name[i] + '：' + infoData.content[i]);
                                    }
                                    that.fontSizeArr.push('13px');
                                }

                                if(that.para.onePerson) {
                                    para.nStep = 'start_4';
                                } else {
                                    para.nStep = 'start_3';
                                }

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.numberRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_4':
                            if (para.i > that.sm[ref.infoListRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.infoListRef][para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr;
                            if(that.para.onePerson) {
                                refArr = ['infoListRef']
                            } else {
                                refArr = ['numberRef', 'infoListRef']
                            }
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

            getTime: function(time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1
                var hour = time.getHours();
                var minute = time.getMinutes();

                return year + "-" + zero(month) + "-" + zero(day) + " "
                    + zero(hour) + ":" + zero(minute);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            }
        }
    }
</script>
<style lang="scss">
    .applicant-info-wrap {
        overflow: hidden;
        .applicant-num {
            float: left;
            margin-right: 20px;
        }
        .applicant-info-list {
            float: left;
            .link-text {
                display: block;
                margin-bottom: 10px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>
