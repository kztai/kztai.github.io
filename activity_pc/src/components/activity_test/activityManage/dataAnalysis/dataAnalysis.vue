<template>
    <div class="data-analysis-wrap">
        <div class="analysis-title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="data-sort">
            <div class="page-view">
                <analysisIndex
                        ref="browseRef"
                        refId="browseRef"
                        v-show="pvt_isShow.browse === 'browseRef'"
                        :paraVarPair="pvt_browse.browseRef.paraVarPair"
                        :para="pvt_browse.browseRef.para"
                        :attr="pvt_browse.browseRef.attr">
                </analysisIndex>
            </div>
            <div class="share-num">
                <analysisIndex
                        ref="shareRef"
                        refId="shareRef"
                        v-show="pvt_isShow.share === 'shareRef'"
                        :paraVarPair="pvt_share.shareRef.paraVarPair"
                        :para="pvt_share.shareRef.para"
                        :attr="pvt_share.shareRef.attr">
                </analysisIndex>
            </div>
            <div class="apply-num">
                <analysisIndex
                        ref="applyRef"
                        refId="applyRef"
                        v-show="pvt_isShow.apply === 'applyRef'"
                        :paraVarPair="pvt_apply.applyRef.paraVarPair"
                        :para="pvt_apply.applyRef.para"
                        :attr="pvt_apply.applyRef.attr">
                </analysisIndex>
            </div>
            <div class="money-num">
                <analysisIndex
                        ref="moneyRef"
                        refId="moneyRef"
                        v-show="pvt_isShow.money === 'moneyRef'"
                        :paraVarPair="pvt_money.moneyRef.paraVarPair"
                        :para="pvt_money.moneyRef.para"
                        :attr="pvt_money.moneyRef.attr">
                </analysisIndex>
            </div>
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
        </div>
        <div ref="lineChart" class="line-chart">
            <lineChart
                    ref="chartRef"
                    refId="chartRef"
                    v-show="pvt_isShow.chart === 'chartRef'"
                    :paraVarPair="pvt_chart.chartRef.paraVarPair"
                    :para="pvt_chart.chartRef.para"
                    :attr="pvt_chart.chartRef.attr">
            </lineChart>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import analysisIndex from './analysisIndex';
    import lineChart from './line';

    export default {
        components: {analysisIndex, lineChart},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                dataIndex: {
                    browse: 0,
                    share: 1,
                    apply: 2,
                    money: 3
                },
                monthType: undefined,
                weekType: 'primary',
                shareTotalNum: 0,
                shareTodayNum: 0,
                sharePercent: 0,
                browseTotalNum: 0,
                browseTodayNum: 0,
                browsePercent: 0,
                moneyTotalNum: 0,
                moneyTodayNum: 0,
                moneyPercent: 0,
                applyTotalNum: 0,
                applyTodayNum: 0,
                applyPercent: 0,

                selectIndex: [true, true, true, true],
                timeDataArr: null,

                indexDataArr: [],
                legendArr: ['浏览量', '分享量', '报名量', '收入(元)'],
                lineColorArr: ['#12B0FF', '#67C23A', '#F56C6C', '#FF8A48'],
                showLineArr: [
                    {name: '浏览量', type: 'line', smooth: true,},
                    {type: 'line', name: '分享量', smooth: true},
                    {type: 'line', name: '报名量', smooth: true},
                    {type: 'line', name: '收入(元)', smooth: true}
                ],

                indexDataArrClone: [],
                legendArrClone: ['浏览量', '分享量', '报名量', '收入(元)'],
                lineColorArrClone: ['#12B0FF', '#67C23A', '#F56C6C', '#FF8A48'],
                showLineArrClone: [
                    {name: '浏览量', type: 'line', smooth: true,},
                    {type: 'line', name: '分享量', smooth: true},
                    {type: 'line', name: '报名量', smooth: true},
                    {type: 'line', name: '收入(元)', smooth: true}
                ],

                chartWidth: '300px',

                mac: mac.mac,

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
                pvt_eventPortInput: ['dataAnalyGetIn'],
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


            pvt_chart: function () {
                return {
                    chartRef: {
                        paraVarPair: {},
                        para: {
                            yData: this.indexDataArr,
                            // yData:[[820, 932, 901, 934, 1290, 1330, 1320],[720, 232, 801, 934, 290, 330, 1387],[620, 932, 901, 934, 1290, 1330, 1320],[520, 932, 901, 934, 1290, 1330, 1320]],
                        },
                        attr: {
                            width: this.chartWidth,
                            height: '500px',
                            series: this.showLineArr,
                            legend: {
                                data: this.legendArr,
                                left: this.position,
                                selectedMode: false
                            },
                            color: this.lineColorArr,
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross',
                                    label: {
                                        backgroundColor: '#666'
                                    }
                                }
                            },
                            yAxis: {
                                type: 'value',
                                show: true,
                                axisLine: {
                                    lineStyle: {
                                        color: '#000'
                                    }
                                },
                                axisLabel: {
                                    color: '#666'
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        type: 'dashed'
                                    }
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: this.timeDataArr,
                                axisLabel: {color: '#666'},
                                axisLine: {lineStyle: {color: '#000'}}
                            },
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

                let now = new Date();
                let today = that.getTime(now);

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
                            that.selectIndex = [true, true, true, true];

                            that.indexDataArr = [];
                            that.legendArr = ['浏览量', '分享量', '报名量', '收入(元)'];
                            that.lineColorArr = ['#12B0FF', '#67C23A', '#F56C6C', '#FF8A48'];
                            that.showLineArr = [
                                {name: '浏览量', type: 'line', smooth: true,},
                                {type: 'line', name: '分享量', smooth: true},
                                {type: 'line', name: '报名量', smooth: true},
                                {type: 'line', name: '收入(元)', smooth: true}
                            ];

                            that.indexDataArrClone = [];
                            that.legendArrClone = ['浏览量', '分享量', '报名量', '收入(元)'];
                            that.lineColorArrClone = ['#12B0FF', '#67C23A', '#F56C6C', '#FF8A48'];
                            that.showLineArrClone = [
                                {name: '浏览量', type: 'line', smooth: true,},
                                {type: 'line', name: '分享量', smooth: true},
                                {type: 'line', name: '报名量', smooth: true},
                                {type: 'line', name: '收入(元)', smooth: true}
                            ];

                            that.chartWidth = document.documentElement.clientWidth - 220 + 'px';
                            that.monthType = undefined;
                            that.weekType = 'primary';
                            that.timeDataArr_week = that.getBefore('week').reverse();
                            that.timeDataArr_month = that.getBefore('month').reverse();
                            that.timeDataArr = that.timeDataArr_week;

                            para.nStep = 'initNum';
                            dbFlag++;
                            break;
                        case 'initNum':
                            that.ep.dataAnalyGetIn(that.para.terActivityId, function (data) {
                                that.moneyTotalNum = data.totalIncome;
                                that.applyTotalNum = data.totalEnroll;
                                that.browseTotalNum = data.totalBrowse;
                                that.shareTotalNum = data.totalShare;

                                that.shareTodayNum = data.dailyShare[data.dailyShare.length - 1];
                                that.browseTodayNum = data.dailyBrowse[data.dailyBrowse.length - 1];
                                that.moneyTodayNum = data.dailyIncome[data.dailyIncome.length - 1];
                                that.applyTodayNum = data.dailyEnroll[data.dailyEnroll.length - 1];

                                that.applyPercent = that.applyTodayNum / that.applyTotalNum * 100;
                                that.moneyPercent = that.moneyTodayNum / that.moneyTotalNum * 100;
                                that.browsePercent = that.browseTodayNum / that.browseTotalNum * 100;
                                that.sharePercent = that.shareTodayNum / that.shareTotalNum * 100;

                                // 获取一周内的数据，不足的补0：
                                that.dailyBrowse_week = data.dailyBrowse.reverse().slice(0, 7).reverse();
                                that.dailyShare_week = data.dailyShare.reverse().slice(0, 7).reverse();
                                that.dailyEnroll_week = data.dailyEnroll.reverse().slice(0, 7).reverse();
                                that.dailyIncome_week = data.dailyIncome.reverse().slice(0, 7).reverse();

                                for (i = 0; i < (7 - data.dailyBrowse.length); i++) {
                                    that.dailyBrowse_week.unshift('');
                                    that.dailyShare_week.unshift('');
                                    that.dailyEnroll_week.unshift('');
                                    that.dailyIncome_week.unshift('');
                                }

                                // 获取一月内的数据，不足的补0：
                                that.dailyBrowse_month = JSON.parse(JSON.stringify(data.dailyBrowse.reverse()));
                                that.dailyShare_month = JSON.parse(JSON.stringify(data.dailyShare.reverse()));
                                that.dailyEnroll_month = JSON.parse(JSON.stringify(data.dailyEnroll.reverse()));
                                that.dailyIncome_month = JSON.parse(JSON.stringify(data.dailyIncome.reverse()));

                                for (i = 0; i < (that.timeDataArr_month.length - data.dailyBrowse.length); i++) {
                                    that.dailyBrowse_month.unshift('');
                                    that.dailyShare_month.unshift('');
                                    that.dailyEnroll_month.unshift('');
                                    that.dailyIncome_month.unshift('');
                                }

                                // 将整理后的数据传入折线图组件：
                                that.indexDataArr.push(that.dailyBrowse_week);
                                that.indexDataArr.push(that.dailyShare_week);
                                that.indexDataArr.push(that.dailyEnroll_week);
                                that.indexDataArr.push(that.dailyIncome_week);

                                that.indexDataArrClone.push(that.dailyBrowse_week);
                                that.indexDataArrClone.push(that.dailyShare_week);
                                that.indexDataArrClone.push(that.dailyEnroll_week);
                                that.indexDataArrClone.push(that.dailyIncome_week);

                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'start_2':
                            that.forceUpdateData(function () {
                                that.sm[ref.titleRef].startModule(function () {
                                    para.nStep = 'start_3';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack);
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.browseRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_4':
                            that.sm[ref.shareRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_5':
                            that.sm[ref.applyRef].startModule(function () {
                                para.nStep = 'start_6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_6':
                            that.sm[ref.moneyRef].startModule(function () {
                                para.nStep = 'start_7';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_7':
                            that.sm[ref.chartRef].startModule(function () {
                                para.nStep = 'start_8';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_8':
                            that.sm[ref.weekRef].startModule(function () {
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_9':
                            that.sm[ref.monthRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
                            let refArr = ['titleRef', 'browseRef', 'shareRef', 'applyRef', 'moneyRef', 'chartRef', 'monthRef', 'weekRef'];
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
                that.timeDataArr = that.timeDataArr_month;

                that.indexDataArr = [];
                that.indexDataArrClone = [];

                // 将整理后的数据传入折线图组件：
                that.indexDataArr.push(that.dailyBrowse_month);
                that.indexDataArr.push(that.dailyShare_month);
                that.indexDataArr.push(that.dailyEnroll_month);
                that.indexDataArr.push(that.dailyIncome_month);

                that.indexDataArrClone.push(that.dailyBrowse_month);
                that.indexDataArrClone.push(that.dailyShare_month);
                that.indexDataArrClone.push(that.dailyEnroll_month);
                that.indexDataArrClone.push(that.dailyIncome_month);

                for (let i = that.selectIndex.length - 1; i >= 0; i--) {
                    if (!that.selectIndex[i]) {
                        that.indexDataArr.splice(i, 1);
                    }
                }

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
                that.timeDataArr = that.timeDataArr_week;

                that.indexDataArr = [];
                that.indexDataArrClone = [];

                // 将整理后的数据传入折线图组件：
                that.indexDataArr.push(that.dailyBrowse_week);
                that.indexDataArr.push(that.dailyShare_week);
                that.indexDataArr.push(that.dailyEnroll_week);
                that.indexDataArr.push(that.dailyIncome_week);

                that.indexDataArrClone.push(that.dailyBrowse_week);
                that.indexDataArrClone.push(that.dailyShare_week);
                that.indexDataArrClone.push(that.dailyEnroll_week);
                that.indexDataArrClone.push(that.dailyIncome_week);

                for (let i = that.selectIndex.length - 1; i >= 0; i--) {
                    if (!that.selectIndex[i]) {
                        that.indexDataArr.splice(i, 1);
                    }
                }

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


            getTime: function (time) {
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
