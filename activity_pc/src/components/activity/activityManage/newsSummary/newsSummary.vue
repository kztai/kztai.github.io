<template>
    <div class="news-summary-wrap">
        <!--8888888888888-->
    <!--    <div class="analysis-title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="chart-btns">
            <div class="chart-week">
                <lm-button
                        ref="weekRef"
                        refId="weekRef"
                        v-show="pvt_isShow.week === 'weekRef'"
                        :paraVarPair="pvt_week.weekRef.paraVarPair"
                        :para="pvt_week.weekRef.para"
                        :attr="pvt_week.weekRef.attr">
                </lm-button>
            </div>
            <div class="chart-month">
                <lm-button
                        ref="monthRef"
                        refId="monthRef"
                        v-show="pvt_isShow.month === 'monthRef'"
                        :paraVarPair="pvt_month.monthRef.paraVarPair"
                        :para="pvt_month.monthRef.para"
                        :attr="pvt_month.monthRef.attr">
                </lm-button>
            </div>
        </div>-->

    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import Vue from 'vue';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'browseRef', 'shareRef', 'applyRef', 'moneyRef', 'chartRef', 'weekRef', 'monthRef'],
                    vessel: ['title', 'browse', 'share', 'apply', 'money', 'chart', 'week', 'month'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    browse: null,
                    share: null,
                    apply: null,
                    money: null,
                    chart: null,
                    week: null,
                    month: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: [],
            }
        },
        computed: {
            pvt_month: function () {
                return {
                    monthRef: {
                        paraVarPair: {},
                        para: {
                            name: ['月', '']
                        },
                        attr: {
                            type: this.monthType,
                            size: 'mini'
                        }
                    }
                }
            },
            pvt_week: function () {
                return {
                    weekRef: {
                        paraVarPair: {},
                        para: {
                            name: ['周', '']
                        },
                        attr: {
                            type: this.weekType,
                            size: 'mini'
                        }
                    }
                }
            },

            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '数据指标'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_browse: function () {
                return {
                    browseRef: {
                        paraVarPair: {},
                        para: {
                            totalNum: this.browseTotalNum,
                            percent: this.browsePercent,
                            todayNum: this.browseTodayNum,
                            indexTitle: '浏览量'
                        },
                        attr: {}
                    }
                }
            },

            pvt_share: function () {
                return {
                    shareRef: {
                        paraVarPair: {},
                        para: {
                            totalNum: this.shareTotalNum,
                            percent: this.sharePercent,
                            todayNum: this.shareTodayNum,
                            indexTitle: '分享量'
                        },
                        attr: {}
                    }
                }
            },

            pvt_apply: function () {
                return {
                    applyRef: {
                        paraVarPair: {},
                        para: {
                            totalNum: this.applyTotalNum,
                            percent: this.applyPercent,
                            todayNum: this.applyTodayNum,
                            indexTitle: '报名量'
                        },
                        attr: {}
                    }
                }
            },

            pvt_money: function () {
                return {
                    moneyRef: {
                        paraVarPair: {},
                        para: {
                            totalNum: this.moneyTotalNum,
                            percent: this.moneyPercent,
                            todayNum: this.moneyTodayNum,
                            indexTitle: '收入（元）'
                        },
                        attr: {}
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
                let fnname = 'dataAnalysis_start';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let page;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite;
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
                    titleRef: 'titleRef',
                    browseRef: 'browseRef',
                    shareRef: 'shareRef',
                    applyRef: 'applyRef',
                    moneyRef: 'moneyRef',
                    chartRef: 'chartRef',
                    weekRef: 'weekRef',
                    monthRef: 'monthRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            // // 创建构造器
                            // var Profile = Vue.extend({
                            //     template: `
                            //         <lm-link-text
                            //                 ref="titleRef"
                            //                 refId="titleRef"
                            //                 v-show="pvt_isShow.title === 'titleRef'"
                            //                 :paraVarPair="pvt_title.titleRef.paraVarPair"
                            //                 :para="pvt_title.titleRef.para"
                            //                 :attr="pvt_title.titleRef.attr">
                            //         </lm-link-text>
                            //     `,
                            //     // data: function () {
                            //     //     return {
                            //     //         pvt_subModuleMap: {
                            //     //             subModule: ['titleRef'],
                            //     //             vessel: ['title'],
                            //     //         },
                            //     //
                            //     //         // 各个容器当前显示的子模块
                            //     //         pvt_isShow: {
                            //     //             title: null,
                            //     //         },
                            //     //     }
                            //     // },
                            //     // computed: {
                            //     //     pvt_title: function () {
                            //     //         return {
                            //     //             titleRef: {
                            //     //                 paraVarPair: {},
                            //     //                 para: {
                            //     //                     textData: '数据指标'
                            //     //                 },
                            //     //                 attr: {
                            //     //                     fontSize: '16px',
                            //     //                     color: '#303133'
                            //     //                 }
                            //     //             }
                            //     //         }
                            //     //     },
                            //     // }
                            // });
                            // // 创建 Profile 实例，并挂载到一个元素上。
                            // new Profile().$mount('.news-summary-wrap');

                            // that.pvt_title = function () {
                            //     return {
                            //         titleRef: {
                            //             paraVarPair: {},
                            //             para: {
                            //                 textData: '数据指标'
                            //             },
                            //             attr: {
                            //                 fontSize: '16px',
                            //                 color: '#303133'
                            //             }
                            //         }
                            //     }
                            // };
                            //
                            // that.pvt_subModuleMap.subModule.push('titleRef');
                            // that.pvt_subModuleMap.vessel.push('title');
                            // that.pvt_isShow.title = null;

                            para.nStep = 'end';
                            if (++dbFlag === 2) {
                                that.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'titleRef':
                            that.forceUpdateData(function () {
                                that.sm.titleRef.startModule(function () {
                                    para.nStep = 'showSubModule';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['titleRef'];
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

            toggleMonthBtn: function () {
                let that = this;
                if (this.monthType !== undefined) {
                    return
                }
                this.weekType = undefined;
                this.monthType = 'primary';
                this.timeDataArr = this.getBefore('month').reverse();
                this.forceUpdateData(function () {
                    that.sm.weekRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.monthRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.chartRef.startModule(function () {
                    }, function () {
                    });
                })
            },
            toggleWeekBtn: function () {
                let that = this;
                if (this.weekType !== undefined) {
                    return
                }
                this.weekType = 'primary';
                this.monthType = undefined;
                this.timeDataArr = this.getBefore('week').reverse();
                this.forceUpdateData(function () {
                    that.sm.weekRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.monthRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.chartRef.startModule(function () {
                    }, function () {
                    });
                })
            },


            getTime: function(time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1

                return year + "-" + zero(month) + "-" + zero(day);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            },

            dataSelect: function (index, isSelect) {
                let that = this;
                that.selectIndex[index] = isSelect;
                that.indexDataArr = JSON.parse(JSON.stringify(that.indexDataArrClone));
                that.legendArr = JSON.parse(JSON.stringify(that.legendArrClone));
                that.lineColorArr = JSON.parse(JSON.stringify(that.lineColorArrClone));
                that.showLineArr = JSON.parse(JSON.stringify(that.showLineArrClone));

                for (let i = that.selectIndex.length - 1; i >= 0; i--) {
                    if (!that.selectIndex[i]) {
                        that.indexDataArr.splice(i, 1);
                        that.legendArr.splice(i, 1);
                        that.lineColorArr.splice(i, 1);
                        that.showLineArr.splice(i, 1);
                    }
                }

                that.forceUpdateData(function () {
                    that.sm.chartRef.startModule(function () {
                    }, function () {
                    });
                });
            },

            getBefore: function (type) {
                let beforeTime;
                let beforeDate;
                let monthLength;
                let curDate = new Date();
                let dateArr = [];
                if (type === 'week') {
                    for (let i = 0; i < 7; i++) {
                        beforeTime = curDate.getTime() - 1000 * 60 * 60 * 24 * i;
                        beforeDate = new Date(beforeTime);
                        let year = beforeDate.getFullYear();
                        let mon = beforeDate.getMonth() + 1;
                        let day = beforeDate.getDate();
                        dateArr.push(mon + '-' + day);
                    }
                } else {
                    if ([1, 3, 5, 7, 8, 10, 12].indexOf(curDate.getMonth()) !== -1) {
                        monthLength = 31;
                    } else if (curDate.getMonth() === 2) {
                        if (((curDate.getFullYear() % 4) === 0) & ((curDate.getFullYear() % 100) !== 0) || ((curDate.getFullYear() % 400) === 0)) {
                            monthLength = 29;
                        } else {
                            monthLength = 28;
                        }
                    } else {
                        monthLength = 30;
                    }
                    for (let i = 0; i < monthLength; i++) {
                        beforeTime = curDate.getTime() - 1000 * 60 * 60 * 24 * i;
                        beforeDate = new Date(beforeTime);
                        let year = beforeDate.getFullYear();
                        let mon = beforeDate.getMonth() + 1;
                        let day = beforeDate.getDate();
                        dateArr.push(mon + '-' + day);
                    }
                }
                return dateArr;
            },

            moneySelect: function (isSelect) {
                this.dataSelect(this.dataIndex.money, isSelect);
            },

            applySelect: function (isSelect) {
                this.dataSelect(this.dataIndex.apply, isSelect);
            },

            shareSelect: function (isSelect) {
                this.dataSelect(this.dataIndex.share, isSelect);
            },

            browseSelect: function (isSelect) {
                this.dataSelect(this.dataIndex.browse, isSelect);
            },

            moneyRef_dataClickEvent: function (isSelect) {
                this.moneySelect(isSelect);
            },
            applyRef_dataClickEvent: function (isSelect) {
                this.applySelect(isSelect);
            },
            shareRef_dataClickEvent: function (isSelect) {
                this.shareSelect(isSelect);
            },
            browseRef_dataClickEvent: function (isSelect) {
                this.browseSelect(isSelect);
            },
            monthRef_buttonClickEvent: function () {
                this.toggleMonthBtn()
            },
            weekRef_buttonClickEvent: function () {
                this.toggleWeekBtn()
            },
        }
    }
</script>

<style lang="scss">
    .data-analysis-wrap {
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        overflow: auto;

        .analysis-title {
            padding: 10px 0;
            border-bottom: 1px solid #e4e4e4;
        }

        .data-sort {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;

            .page-view, .share-num, .apply-num, .money-num {
                flex: 1 1 20%;
                margin-right: 20px;
            }
        }

        .chart-btns {
            text-align: right;
            margin-right: 20px;
            margin-top: 20px;

            .chart-month {
                display: inline-block;

                .el-button--mini {
                    border-radius: 0 3px 3px 0;
                }
            }

            .chart-week {
                display: inline-block;

                .el-button--mini {
                    border-radius: 3px 0 0 3px;
                }
            }
        }

        .line-chart {
            padding: 0 20px 20px 20px;
        }
    }
</style>
