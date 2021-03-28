<template>
    <div class="dataAnalysis_container">
        <div class="dataAnalysis_row dataAnalysis_row_dataAnalysisRow">
            <div :class="{dataAnalysis_col:true,dataAnalysis_col_dataAnalysisWindow:true,dataAnalysis_col_dataAnalysisWindow_size_large:attr.size==='large',dataAnalysis_col_dataAnalysisWindow_size_medium:attr.size==='medium',dataAnalysis_col_dataAnalysisWindow_size_small:attr.size==='small',dataAnalysis_col_dataAnalysisWindow_size_min:attr.size==='min',dataAnalysis_col_dataAnalysisWindow_checked:attr.checked,dataAnalysis_col_dataAnalysisWindow_disable:attr.disabled}">

                <div class="dataAnalysis_row dataAnalysis_row_row1">
                    <div v-show="pvt_isWinShow.approvalWrap" :class="{dataAnalysis_col:true,dataAnalysis_col_approvalWrap:true,dataAnalysis_col_approvalWrap_size_large:attr.size==='large',dataAnalysis_col_approvalWrap_size_medium:attr.size==='medium',dataAnalysis_col_approvalWrap_size_small:attr.size==='small',dataAnalysis_col_approvalWrap_size_min:attr.size==='min',dataAnalysis_col_approvalWrap_checked:attr.checked,dataAnalysis_col_approvalWrap_disable:attr.disabled}">

                        <div class="dataAnalysis_row dataAnalysis_row_row2">
                            <div :class="{dataAnalysis_col:true,dataAnalysis_col_dealTitle:true,dataAnalysis_col_dealTitle_size_large:attr.size==='large',dataAnalysis_col_dealTitle_size_medium:attr.size==='medium',dataAnalysis_col_dealTitle_size_small:attr.size==='small',dataAnalysis_col_dealTitle_size_min:attr.size==='min',dataAnalysis_col_dealTitle_checked:attr.checked,dataAnalysis_col_dealTitle_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="dealTitleRef"
                                        refId="dealTitleRef"
                                        v-show="pvt_isShow.dealTitle === 'dealTitleRef'"
                                        :paraVarPair="pvt_dealTitle.dealTitleRef.paraVarPair"
                                        :para="pvt_dealTitle.dealTitleRef.para"
                                        :attr="pvt_dealTitle.dealTitleRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="dataAnalysis_row dataAnalysis_row_row3">
                            <div @click="approvalClick" :class="{dataAnalysis_col:true,dataAnalysis_col_approval:true,dataAnalysis_col_approval_size_large:attr.size==='large',dataAnalysis_col_approval_size_medium:attr.size==='medium',dataAnalysis_col_approval_size_small:attr.size==='small',dataAnalysis_col_approval_size_min:attr.size==='min',dataAnalysis_col_approval_checked:attr.checked,dataAnalysis_col_approval_disable:attr.disabled}">

                                <div class="dataAnalysis_row dataAnalysis_row_row4">
                                    <div :class="{dataAnalysis_col:true,dataAnalysis_col_approvalNum:true,dataAnalysis_col_approvalNum_size_large:attr.size==='large',dataAnalysis_col_approvalNum_size_medium:attr.size==='medium',dataAnalysis_col_approvalNum_size_small:attr.size==='small',dataAnalysis_col_approvalNum_size_min:attr.size==='min',dataAnalysis_col_approvalNum_checked:attr.checked,dataAnalysis_col_approvalNum_disable:attr.disabled}">

                                        <lm2b-link-text
                                                ref="approvalNumRef"
                                                refId="approvalNumRef"
                                                v-show="pvt_isShow.approvalNum === 'approvalNumRef'"
                                                :paraVarPair="pvt_approvalNum.approvalNumRef.paraVarPair"
                                                :para="pvt_approvalNum.approvalNumRef.para"
                                                :attr="pvt_approvalNum.approvalNumRef.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                                <div class="dataAnalysis_row dataAnalysis_row_row5">
                                    <div :class="{dataAnalysis_col:true,dataAnalysis_col_approvalText:true,dataAnalysis_col_approvalText_size_large:attr.size==='large',dataAnalysis_col_approvalText_size_medium:attr.size==='medium',dataAnalysis_col_approvalText_size_small:attr.size==='small',dataAnalysis_col_approvalText_size_min:attr.size==='min',dataAnalysis_col_approvalText_checked:attr.checked,dataAnalysis_col_approvalText_disable:attr.disabled}">

                                        <lm2b-link-text
                                                ref="approvalTextRef"
                                                refId="approvalTextRef"
                                                v-show="pvt_isShow.approvalText === 'approvalTextRef'"
                                                :paraVarPair="pvt_approvalText.approvalTextRef.paraVarPair"
                                                :para="pvt_approvalText.approvalTextRef.para"
                                                :attr="pvt_approvalText.approvalTextRef.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                            </div>
                            <div @click="refundClick" :class="{dataAnalysis_col:true,dataAnalysis_col_refund:true,dataAnalysis_col_refund_size_large:attr.size==='large',dataAnalysis_col_refund_size_medium:attr.size==='medium',dataAnalysis_col_refund_size_small:attr.size==='small',dataAnalysis_col_refund_size_min:attr.size==='min',dataAnalysis_col_refund_checked:attr.checked,dataAnalysis_col_refund_disable:attr.disabled}">

                                <div class="dataAnalysis_row dataAnalysis_row_row6">
                                    <div :class="{dataAnalysis_col:true,dataAnalysis_col_refundText:true,dataAnalysis_col_refundText_size_large:attr.size==='large',dataAnalysis_col_refundText_size_medium:attr.size==='medium',dataAnalysis_col_refundText_size_small:attr.size==='small',dataAnalysis_col_refundText_size_min:attr.size==='min',dataAnalysis_col_refundText_checked:attr.checked,dataAnalysis_col_refundText_disable:attr.disabled}">

                                        <lm2b-link-text
                                                ref="refundNumRef"
                                                refId="refundNumRef"
                                                v-show="pvt_isShow.refundText === 'refundNumRef'"
                                                :paraVarPair="pvt_refundText.refundNumRef.paraVarPair"
                                                :para="pvt_refundText.refundNumRef.para"
                                                :attr="pvt_refundText.refundNumRef.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                                <div class="dataAnalysis_row dataAnalysis_row_row7">
                                    <div :class="{dataAnalysis_col:true,dataAnalysis_col_refundText1:true,dataAnalysis_col_refundText1_size_large:attr.size==='large',dataAnalysis_col_refundText1_size_medium:attr.size==='medium',dataAnalysis_col_refundText1_size_small:attr.size==='small',dataAnalysis_col_refundText1_size_min:attr.size==='min',dataAnalysis_col_refundText1_checked:attr.checked,dataAnalysis_col_refundText1_disable:attr.disabled}">

                                        <lm2b-link-text
                                                ref="refundTextRef"
                                                refId="refundTextRef"
                                                v-show="pvt_isShow.refundText1 === 'refundTextRef'"
                                                :paraVarPair="pvt_refundText1.refundTextRef.paraVarPair"
                                                :para="pvt_refundText1.refundTextRef.para"
                                                :attr="pvt_refundText1.refundTextRef.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dataAnalysis_row dataAnalysis_row_row8">
                    <div :class="{dataAnalysis_col:true,dataAnalysis_col_dataAnalysisWrap:true,dataAnalysis_col_dataAnalysisWrap_size_large:attr.size==='large',dataAnalysis_col_dataAnalysisWrap_size_medium:attr.size==='medium',dataAnalysis_col_dataAnalysisWrap_size_small:attr.size==='small',dataAnalysis_col_dataAnalysisWrap_size_min:attr.size==='min',dataAnalysis_col_dataAnalysisWrap_checked:attr.checked,dataAnalysis_col_dataAnalysisWrap_disable:attr.disabled}">

                        <div class="dataAnalysis_row dataAnalysis_row_row9">
                            <div :class="{dataAnalysis_col:true,dataAnalysis_col_analysisTitle:true,dataAnalysis_col_analysisTitle_size_large:attr.size==='large',dataAnalysis_col_analysisTitle_size_medium:attr.size==='medium',dataAnalysis_col_analysisTitle_size_small:attr.size==='small',dataAnalysis_col_analysisTitle_size_min:attr.size==='min',dataAnalysis_col_analysisTitle_checked:attr.checked,dataAnalysis_col_analysisTitle_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="analysisTitleRef"
                                        refId="analysisTitleRef"
                                        v-show="pvt_isShow.analysisTitle === 'analysisTitleRef'"
                                        :paraVarPair="pvt_analysisTitle.analysisTitleRef.paraVarPair"
                                        :para="pvt_analysisTitle.analysisTitleRef.para"
                                        :attr="pvt_analysisTitle.analysisTitleRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>

                        <div class="dataAnalysis_row dataAnalysis_row_row13">
                            <div :class="{dataAnalysis_col:true,dataAnalysis_col_scrollWrap:true,dataAnalysis_col_scrollWrap_size_large:attr.size==='large',dataAnalysis_col_scrollWrap_size_medium:attr.size==='medium',dataAnalysis_col_scrollWrap_size_small:attr.size==='small',dataAnalysis_col_scrollWrap_size_min:attr.size==='min',dataAnalysis_col_scrollWrap_checked:attr.checked,dataAnalysis_col_scrollWrap_disable:attr.disabled}">
                                <div class="dataAnalysis_row dataAnalysis_row_row10">
                                    <div :class="{dataAnalysis_col:true,dataAnalysis_col_indexItem1:true,dataAnalysis_col_indexItem1_size_large:attr.size==='large',dataAnalysis_col_indexItem1_size_medium:attr.size==='medium',dataAnalysis_col_indexItem1_size_small:attr.size==='small',dataAnalysis_col_indexItem1_size_min:attr.size==='min',dataAnalysis_col_indexItem1_checked:attr.checked,dataAnalysis_col_indexItem1_disable:attr.disabled}">

                                        <index-item
                                                ref="browseIndexRef"
                                                refId="browseIndexRef"
                                                v-show="pvt_isShow.indexItem1 === 'browseIndexRef'"
                                                :paraVarPair="pvt_indexItem1.browseIndexRef.paraVarPair"
                                                :para="pvt_indexItem1.browseIndexRef.para"
                                                :attr="pvt_indexItem1.browseIndexRef.attr">
                                        </index-item>
                                    </div>
                                    <div :class="{dataAnalysis_col:true,dataAnalysis_col_indexItem2:true,dataAnalysis_col_indexItem2_size_large:attr.size==='large',dataAnalysis_col_indexItem2_size_medium:attr.size==='medium',dataAnalysis_col_indexItem2_size_small:attr.size==='small',dataAnalysis_col_indexItem2_size_min:attr.size==='min',dataAnalysis_col_indexItem2_checked:attr.checked,dataAnalysis_col_indexItem2_disable:attr.disabled}">

                                        <index-item
                                                ref="shareIndexRef"
                                                refId="shareIndexRef"
                                                v-show="pvt_isShow.indexItem2 === 'shareIndexRef'"
                                                :paraVarPair="pvt_indexItem2.shareIndexRef.paraVarPair"
                                                :para="pvt_indexItem2.shareIndexRef.para"
                                                :attr="pvt_indexItem2.shareIndexRef.attr">
                                        </index-item>
                                    </div>
                                    <div :class="{dataAnalysis_col:true,dataAnalysis_col_indexItem3:true,dataAnalysis_col_indexItem3_size_large:attr.size==='large',dataAnalysis_col_indexItem3_size_medium:attr.size==='medium',dataAnalysis_col_indexItem3_size_small:attr.size==='small',dataAnalysis_col_indexItem3_size_min:attr.size==='min',dataAnalysis_col_indexItem3_checked:attr.checked,dataAnalysis_col_indexItem3_disable:attr.disabled}">

                                        <index-item
                                                ref="applyIndexRef"
                                                refId="applyIndexRef"
                                                v-show="pvt_isShow.indexItem3 === 'applyIndexRef'"
                                                :paraVarPair="pvt_indexItem3.applyIndexRef.paraVarPair"
                                                :para="pvt_indexItem3.applyIndexRef.para"
                                                :attr="pvt_indexItem3.applyIndexRef.attr">
                                        </index-item>
                                    </div>
                                    <div :class="{dataAnalysis_col:true,dataAnalysis_col_indexItem4:true,dataAnalysis_col_indexItem4_size_large:attr.size==='large',dataAnalysis_col_indexItem4_size_medium:attr.size==='medium',dataAnalysis_col_indexItem4_size_small:attr.size==='small',dataAnalysis_col_indexItem4_size_min:attr.size==='min',dataAnalysis_col_indexItem4_checked:attr.checked,dataAnalysis_col_indexItem4_disable:attr.disabled}">

                                        <index-item
                                                ref="moneyIndexRef"
                                                refId="moneyIndexRef"
                                                v-show="pvt_isShow.indexItem4 === 'moneyIndexRef'"
                                                :paraVarPair="pvt_indexItem4.moneyIndexRef.paraVarPair"
                                                :para="pvt_indexItem4.moneyIndexRef.para"
                                                :attr="pvt_indexItem4.moneyIndexRef.attr">
                                        </index-item>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="dataAnalysis_row dataAnalysis_row_row11">
                            <div :class="{dataAnalysis_col:true,dataAnalysis_col_radioWrap:true,dataAnalysis_col_radioWrap_size_large:attr.size==='large',dataAnalysis_col_radioWrap_size_medium:attr.size==='medium',dataAnalysis_col_radioWrap_size_small:attr.size==='small',dataAnalysis_col_radioWrap_size_min:attr.size==='min',dataAnalysis_col_radioWrap_checked:attr.checked,dataAnalysis_col_radioWrap_disable:attr.disabled}">

                                <lm2b-radio
                                        ref="radioRef"
                                        refId="radioRef"
                                        v-show="pvt_isShow.radioWrap === 'radioRef'"
                                        :paraVarPair="pvt_radioWrap.radioRef.paraVarPair"
                                        :para="pvt_radioWrap.radioRef.para"
                                        :attr="pvt_radioWrap.radioRef.attr">
                                </lm2b-radio>
                            </div>
                        </div>
                        <div class="dataAnalysis_row dataAnalysis_row_row12">
                            <div :class="{dataAnalysis_col:true,dataAnalysis_col_lineWrap:true,dataAnalysis_col_lineWrap_size_large:attr.size==='large',dataAnalysis_col_lineWrap_size_medium:attr.size==='medium',dataAnalysis_col_lineWrap_size_small:attr.size==='small',dataAnalysis_col_lineWrap_size_min:attr.size==='min',dataAnalysis_col_lineWrap_checked:attr.checked,dataAnalysis_col_lineWrap_disable:attr.disabled}">

                                <lm2b-line
                                        ref="lineRef"
                                        refId="lineRef"
                                        v-show="pvt_isShow.lineWrap === 'lineRef'"
                                        :paraVarPair="pvt_lineWrap.lineRef.paraVarPair"
                                        :para="pvt_lineWrap.lineRef.para"
                                        :attr="pvt_lineWrap.lineRef.attr">
                                </lm2b-line>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import indexItem from './indexItem';

    export default {
        components: {indexItem},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['dealTitle', 'approvalNum', 'approvalText', 'refundText', 'refundText1', 'analysisTitle', 'indexItem1', 'indexItem2', 'indexItem3', 'indexItem4', 'radioWrap', 'lineWrap'],
                    subModule: ['dealTitleRef', 'approvalNumRef', 'approvalTextRef', 'refundNumRef', 'refundTextRef', 'analysisTitleRef', 'browseIndexRef', 'shareIndexRef', 'applyIndexRef', 'moneyIndexRef', 'radioRef', 'lineRef'],
                },
                pvt_isShow: {
                    dealTitle: null,
                    approvalNum: null,
                    approvalText: null,
                    refundText: null,
                    refundText1: null,
                    analysisTitle: null,
                    indexItem1: null,
                    indexItem2: null,
                    indexItem3: null,
                    indexItem4: null,
                    radioWrap: null,
                    lineWrap: null,
                },
                pvt_isWinShow: {
                    approvalWrap: true,
                },
                pvt_eventPortInput: ['orderApprovalEvent', 'orderRefundEvent', 'dataAnalyGetEvent'],

                mac: mac.mac,

                browseData: {},
                shareData: {},
                applyData: {},
                moneyData: {},

                selectIndex: [true, true, true, true],
                timeDataArr: null,

                xDataArr: [],
                yDataArr: [],

                legendArr: ['浏览量', '分享量', '报名量', '收入(元)'],
                lineColorArr: ['#12B0FF', '#67C23A', '#F56C6C', '#FF8A48'],
                showLineArr: [
                    {name: '浏览量', type: 'line', smooth: true,},
                    {type: 'line', name: '分享量', smooth: true},
                    {type: 'line', name: '报名量', smooth: true},
                    {type: 'line', name: '收入(元)', smooth: true}
                ],

                yDataArrClone: [],
                legendArrClone: ['浏览量', '分享量', '报名量', '收入(元)'],
                lineColorArrClone: ['#12B0FF', '#67C23A', '#F56C6C', '#FF8A48'],
                showLineArrClone: [
                    {name: '浏览量', type: 'line', smooth: true,},
                    {type: 'line', name: '分享量', smooth: true},
                    {type: 'line', name: '报名量', smooth: true},
                    {type: 'line', name: '收入(元)', smooth: true}
                ],

                chartWidth: '360px',

                approvalNum: 2,
                refundNum: 3,
                curRadio: 1,
                radioIsFirst: true,
                browseChecked: true,
                shareChecked: true,
                applyChecked: true,
                moneyChecked: true,
            };
        },
        watch: {},
        computed: {
            pvt_dealTitle: function () {
                return {
                    dealTitleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '代办事项',
                        },
                        attr: {},
                    },
                };
            },
            pvt_approvalNum: function () {
                return {
                    approvalNumRef: {
                        paraVarPair: {
                            textData: 'approvalNum',
                        },
                        para: {
                            textData: this.approvalNum,
                        },
                        attr: {
                            fontWeight: true,
                            color: '#666',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_approvalText: function () {
                return {
                    approvalTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '报名待审核',
                        },
                        attr: {
                            color: '#666',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_refundText: function () {
                return {
                    refundNumRef: {
                        paraVarPair: {
                            textData: 'refundNum',
                        },
                        para: {
                            textData: this.refundNum,
                        },
                        attr: {
                            fontWeight: true,
                            color: '#666',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_refundText1: function () {
                return {
                    refundTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '退款待处理',
                        },
                        attr: {
                            color: '#666',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_analysisTitle: function () {
                return {
                    analysisTitleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '数据分析',
                        },
                        attr: {},
                    },
                };
            },
            pvt_indexItem1: function () {
                return {
                    browseIndexRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                            checked: this.browseChecked
                        },
                    },
                };
            },
            pvt_indexItem2: function () {
                return {
                    shareIndexRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                            checked: this.shareChecked
                        },
                    },
                };
            },
            pvt_indexItem3: function () {
                return {
                    applyIndexRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                            checked: this.applyChecked
                        },
                    },
                };
            },
            pvt_indexItem4: function () {
                return {
                    moneyIndexRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                            checked: this.moneyChecked
                        },
                    },
                };
            },
            pvt_radioWrap: function () {
                return {
                    radioRef: {
                        paraVarPair: {
                            radioData: 'curRadio'
                        },
                        para: {
                            radioData: this.curRadio,
                        },
                        attr: {
                            radioArr: [{label: 1, text: "近7天"}, {label: 2, text: "近30天"}],
                            define: ['van-icon-circle', 'van-icon-passed'],
                            size: 'mini',
                            inline: true
                        },
                    },
                };
            },
            pvt_lineWrap: function () {
                return {
                    lineRef: {
                        paraVarPair: {},
                        para: {
                            xValue: this.xDataArr,
                            yValue: this.yDataArr,
                        },
                        attr: {
                            width: this.chartWidth,
                            height: '340px',
                            xAxisType: 'category',
                            yAxisType: 'KMB',
                            toolTipVisible: true,
                            // legendVisible: false,
                            legendArr: this.legendArr,
                            extend: {
                                legend: {
                                    left: this.position,
                                    selectedMode: false
                                },
                                color: this.lineColorArr
                            }
                        },
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
            startModule: function (curActivityId, clerkType, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'dataAnalysis_start';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
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
                    nStep:0,
                    i: 0,
                    refArr: ['dealTitleRef', 'approvalTextRef', 'refundTextRef', 'analysisTitleRef', 'radioRef', 'lineRef']
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
                            that.curActivityId = curActivityId;
                            that.selectIndex = [true, true, true, true];
                            that.shareChecked = true;
                            that.browseChecked = true;
                            that.applyChecked = true;
                            that.moneyChecked = true;
                            that.curRadio = 1;

                            that.xDataArr = [];
                            that.yDataArr = [];
                            that.legendArr = ['浏览量', '分享量', '报名量', '收入(元)'];
                            that.lineColorArr = ['#12B0FF', '#67C23A', '#F56C6C', '#FF8A48'];

                            that.yDataArrClone = [];
                            that.legendArrClone = ['浏览量', '分享量', '报名量', '收入(元)'];
                            that.lineColorArrClone = ['#12B0FF', '#67C23A', '#F56C6C', '#FF8A48'];

                            that.monthWidth = document.documentElement.clientWidth * 2 + 'px';
                            that.weekWidth = document.documentElement.clientWidth + 'px';
                            that.chartWidth = that.weekWidth;

                            that.timeDataArr_week = that.getBefore('week').reverse();
                            that.timeDataArr_month = that.getBefore('month').reverse();
                            that.xDataArr.push(that.timeDataArr_week, that.timeDataArr_week, that.timeDataArr_week, that.timeDataArr_week);

                            para.nStep = 'getTerActivityId';
                            dbFlag++;
                            break;
                        case 'getTerActivityId':
                            tableName = this.mac.tb.groupActivity;
                            record = [curActivityId];
                            this.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'initNum';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, clerkType, successCallBack, errorCallBack)
                                }
                            }, function (error) {

                            });
                            break;
                        case 'initNum':
                            that.ep.dataAnalyGetEvent(para.terActivityId, function (data) {
                                that.browseData.title = '总浏览量';
                                that.browseData.totalNum = data.totalBrowse;
                                that.browseData.todayNum = data.dailyBrowse[data.dailyBrowse.length - 1];
                                that.browseData.percent = Math.round(that.browseData.todayNum / that.browseData.totalNum * 100);

                                that.shareData.title = '总分享量';
                                that.shareData.totalNum = data.totalShare;
                                that.shareData.todayNum = data.dailyShare[data.dailyShare.length - 1];
                                that.shareData.percent = Math.round(that.shareData.todayNum / that.shareData.totalNum * 100);

                                that.applyData.title = '总报名量';
                                that.applyData.totalNum = data.totalEnroll;
                                that.applyData.todayNum = data.dailyEnroll[data.dailyEnroll.length - 1];
                                that.applyData.percent = Math.round(that.applyData.todayNum / that.applyData.totalNum * 100);

                                that.moneyData.title = '总收入';
                                that.moneyData.totalNum = data.totalIncome;
                                that.moneyData.todayNum = data.dailyIncome[data.dailyIncome.length - 1];
                                that.moneyData.percent = Math.round(that.moneyData.todayNum / that.moneyData.totalNum * 100);

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
                                that.yDataArr.push(that.dailyBrowse_week);
                                that.yDataArr.push(that.dailyShare_week);
                                that.yDataArr.push(that.dailyEnroll_week);
                                that.yDataArr.push(that.dailyIncome_week);

                                that.yDataArrClone.push(that.dailyBrowse_week);
                                that.yDataArrClone.push(that.dailyShare_week);
                                that.yDataArrClone.push(that.dailyEnroll_week);
                                that.yDataArrClone.push(that.dailyIncome_week);

                                switch (clerkType) {
                                    case '策划人':
                                    case '主持人':
                                        that.showDeal = true;
                                        break;
                                    default:
                                        that.showDeal = false;
                                        that.showVessel('approvalWrap', false, function () {
                                        }, function () {
                                        });
                                        break;
                                }
                                para.nStep = 'getBillNumber';
                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.startModule(curActivityId, clerkType, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'getBillNumber':
                            that.numberRefresh(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, clerkType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'start_index1';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, clerkType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_index1':
                            that.sm.browseIndexRef.startModule(that.browseData, function () {
                                para.nStep = 'start_index2';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, clerkType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_index2':
                            that.sm.shareIndexRef.startModule(that.shareData, function () {
                                para.nStep = 'start_index3';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, clerkType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_index3':
                            that.sm.applyIndexRef.startModule(that.applyData, function () {
                                para.nStep = 'start_index4';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, clerkType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_index4':
                            that.sm.moneyIndexRef.startModule(that.moneyData, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, clerkType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('browseIndexRef', 'shareIndexRef', 'applyIndexRef', 'moneyIndexRef', 'approvalNumRef', 'refundNumRef');
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, clerkType, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack(that.approvalNum+that.refundNum);
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            approvalClick: function () {
                this.ep.orderApprovalEvent(this.curActivityId, function () {

                }, function () {

                });
            },
            refundClick: function () {
                this.ep.orderRefundEvent(this.curActivityId, function () {

                }, function () {

                });
            },

            dataSelect: function (index, isSelect) {
                let that = this;
                that.selectIndex[index] = isSelect;

                // 刷新指标项的选中与未选中：
                switch (index) {
                    case 0:
                        that.browseChecked = isSelect;
                        that.forceUpdateData(function () {
                            that.sm.browseIndexRef.startModule(that.browseData, function () {
                            }, function () {
                            });
                        });
                        break;
                    case 1:
                        that.shareChecked = isSelect;
                        that.forceUpdateData(function () {
                            that.sm.shareIndexRef.startModule(that.shareData, function () {
                            }, function () {
                            });
                        });
                        break;
                    case 2:
                        that.applyChecked = isSelect;
                        that.forceUpdateData(function () {
                            that.sm.applyIndexRef.startModule(that.applyData, function () {
                            }, function () {
                            });
                        });
                        break;
                    case 3:
                        that.moneyChecked = isSelect;
                        that.forceUpdateData(function () {
                            that.sm.moneyIndexRef.startModule(that.moneyData, function () {
                            }, function () {
                            });
                        });
                        break;
                }


                // x轴的数据增减：
                if(isSelect) {
                    if(this.curRadio == 2) {
                        that.xDataArr.push(that.timeDataArr_month)
                    } else {
                        that.xDataArr.push(that.timeDataArr_week)
                    }
                } else {
                    that.xDataArr.splice(0, 1);
                }

                // y轴的数据增减：
                that.yDataArr = JSON.parse(JSON.stringify(that.yDataArrClone));
                that.legendArr = JSON.parse(JSON.stringify(that.legendArrClone));
                that.lineColorArr = JSON.parse(JSON.stringify(that.lineColorArrClone));
                // that.showLineArr = JSON.parse(JSON.stringify(that.showLineArrClone));

                for (let i = that.selectIndex.length - 1; i >= 0; i--) {
                    if (!that.selectIndex[i]) {
                        that.yDataArr.splice(i, 1);
                        that.legendArr.splice(i, 1);
                        that.lineColorArr.splice(i, 1);
                        // that.showLineArr.splice(i, 1);
                    }
                }

                that.forceUpdateData(function () {
                    that.sm.lineRef.startModule(function () {
                    }, function () {
                    });
                });
            },

            dateChange: function () {
                let that = this;

                if(this.radioIsFirst) {
                    this.radioIsFirst = false;
                    return
                }

                that.xDataArr = [];
                that.yDataArr = [];
                that.yDataArrClone = [];

                if(this.curRadio == 2) {
                    that.chartWidth = that.monthWidth;

                    that.xDataArr.push(that.timeDataArr_month, that.timeDataArr_month, that.timeDataArr_month, that.timeDataArr_month);

                    // 将整理后的数据传入折线图组件：
                    that.yDataArr.push(that.dailyBrowse_month);
                    that.yDataArr.push(that.dailyShare_month);
                    that.yDataArr.push(that.dailyEnroll_month);
                    that.yDataArr.push(that.dailyIncome_month);

                    that.yDataArrClone.push(that.dailyBrowse_month);
                    that.yDataArrClone.push(that.dailyShare_month);
                    that.yDataArrClone.push(that.dailyEnroll_month);
                    that.yDataArrClone.push(that.dailyIncome_month);
                } else {
                    that.chartWidth = that.weekWidth;

                    that.xDataArr.push(that.timeDataArr_week, that.timeDataArr_week, that.timeDataArr_week, that.timeDataArr_week);
                    // 将整理后的数据传入折线图组件：
                    that.yDataArr.push(that.dailyBrowse_week);
                    that.yDataArr.push(that.dailyShare_week);
                    that.yDataArr.push(that.dailyEnroll_week);
                    that.yDataArr.push(that.dailyIncome_week);

                    that.yDataArrClone.push(that.dailyBrowse_week);
                    that.yDataArrClone.push(that.dailyShare_week);
                    that.yDataArrClone.push(that.dailyEnroll_week);
                    that.yDataArrClone.push(that.dailyIncome_week);
                }

                for (let i = that.selectIndex.length - 1; i >= 0; i--) {
                    if (!that.selectIndex[i]) {
                        that.yDataArr.splice(i, 1);
                        that.xDataArr.splice(i, 1);
                    }
                }

                this.forceUpdateData(function () {
                    that.sm.lineRef.startModule(function () {
                    }, function () {
                    });
                })
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

            getTime: function (time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1

                return year + "-" + zero(month) + "-" + zero(day);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            },


            // 公开方法：
            numberRefresh:function(successCallBack,errorCallBack) {
                let that = this;
                let fnname = 'dataAnalysis_numberRefresh';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
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
                    nStep:0,
                    i: 0,
                    refArr: ['approvalNumRef', 'refundNumRef']
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
                        case 'getCheckBill':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.check;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                that.approvalNum = dbData[that.mac.fd.id].length;

                                para.nStep = 'getRefundBill';
                                if (++dbFlag === 2) {
                                    that.numberRefresh(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getRefundBill':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.refund;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                that.refundNum = dbData[that.mac.fd.id].length;

                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.numberRefresh(successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.numberRefresh(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            para.successCallBack(that.approvalNum+that.refundNum);
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },


            browseIndexRef_itemToggleEvent: function (isSelect) {
                this.dataSelect(0,isSelect);
            },
            shareIndexRef_itemToggleEvent: function (isSelect) {
                this.dataSelect(1,isSelect);
            },
            applyIndexRef_itemToggleEvent: function (isSelect) {
                this.dataSelect(2,isSelect);
            },
            moneyIndexRef_itemToggleEvent: function (isSelect) {
                this.dataSelect(3,isSelect);
            },
            radioRef_dataModifyEvent: function () {
                this.dateChange();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .dataAnalysis_container {
    }

    .dataAnalysis_row {
        display: flex;
        flex: 1;
    }

    .dataAnalysis_col {
        display: flex;
        flex-direction: column;
    }

    .dataAnalysis_col_dataAnalysisWindow_size_medium {
        width: @dataAnalysis-dataAnalysisWindow-medium-width;
    }

    .dataAnalysis_col_dataAnalysisWindow {
        background-color: mix(@dataAnalysis-dataAnalysisWindow-background-color, #fff, @dataAnalysis-dataAnalysisWindow-background-color-opacity);
    }

    .dataAnalysis_col_approvalWrap_size_medium {
        width: @dataAnalysis-approvalWrap-medium-width;
        margin: @dataAnalysis-approvalWrap-medium-margin;
        padding: @dataAnalysis-approvalWrap-medium-padding;
    }

    .dataAnalysis_col_approvalWrap {
        background-color: mix(@dataAnalysis-approvalWrap-background-color, #fff, @dataAnalysis-approvalWrap-background-color-opacity);
    }

    .dataAnalysis_col_dealTitle_size_medium {
        width: @dataAnalysis-dealTitle-medium-width;
        margin: @dataAnalysis-dealTitle-medium-margin;
        padding: @dataAnalysis-dealTitle-medium-padding;
        border-style: @dataAnalysis-dealTitle-checked-border-style;
        border-width: @dataAnalysis-dealTitle-checked-border-width;
        border-radius: @dataAnalysis-dealTitle-checked-border-radius;
        border-color: mix(@dataAnalysis-dealTitle-checked-border-color, #fff, @dataAnalysis-dealTitle-checked-border-color-opacity);
    }

    .dataAnalysis_col_dealTitle_checked {

    }

    .dataAnalysis_col_approval_size_medium {
        width: @dataAnalysis-approval-medium-width;
        align-items: @dataAnalysis-approval-medium-horizontal-position;
    }

    .dataAnalysis_col_refund_size_medium {
        width: @dataAnalysis-refund-medium-width;
        align-items: @dataAnalysis-refund-medium-horizontal-position;
    }

    .dataAnalysis_col_approvalNum_size_medium {
        width: @dataAnalysis-approvalNum-medium-width;
        align-items: @dataAnalysis-approvalNum-medium-horizontal-position;
        margin: @dataAnalysis-approvalNum-medium-margin;
    }

    .dataAnalysis_col_approvalText_size_medium {
        width: @dataAnalysis-approvalText-medium-width;
        margin: @dataAnalysis-approvalText-medium-margin;
        align-items: @dataAnalysis-approvalText-medium-horizontal-position;
    }

    .dataAnalysis_col_refundText_size_medium {
        width: @dataAnalysis-refundText-medium-width;
        align-items: @dataAnalysis-refundText-medium-horizontal-position;
        margin: @dataAnalysis-refundText-medium-margin;
    }

    .dataAnalysis_col_refundText1_size_medium {
        width: @dataAnalysis-refundText1-medium-width;
        align-items: @dataAnalysis-refundText1-medium-horizontal-position;
    }

    .dataAnalysis_col_dataAnalysisWrap_size_medium {
        width: @dataAnalysis-dataAnalysisWrap-medium-width;
        padding: @dataAnalysis-dataAnalysisWrap-medium-padding;
        margin: @dataAnalysis-dataAnalysisWrap-medium-margin;
    }

    .dataAnalysis_col_dataAnalysisWrap {
        background-color: mix(@dataAnalysis-dataAnalysisWrap-background-color, #fff, @dataAnalysis-dataAnalysisWrap-background-color-opacity);
    }

    .dataAnalysis_col_analysisTitle_size_medium {
        width: @dataAnalysis-analysisTitle-medium-width;
        margin: @dataAnalysis-analysisTitle-medium-margin;
        padding: @dataAnalysis-analysisTitle-medium-padding;
        border-style: @dataAnalysis-analysisTitle-checked-border-style;
        border-width: @dataAnalysis-analysisTitle-checked-border-width;
        border-radius: @dataAnalysis-analysisTitle-checked-border-radius;
        border-color: mix(@dataAnalysis-analysisTitle-checked-border-color, #fff, @dataAnalysis-analysisTitle-checked-border-color-opacity);
    }

    .dataAnalysis_col_analysisTitle_checked {

    }

    .dataAnalysis_col_scrollWrap_size_medium {
        width: @dataAnalysis-scrollWrap-medium-width;
        overflow-x: auto;
    }

    .dataAnalysis_col_indexItem1_size_medium {
        width: @dataAnalysis-indexItem1-medium-width;
    }

    .dataAnalysis_col_indexItem2_size_medium {
        width: @dataAnalysis-indexItem2-medium-width;
    }

    .dataAnalysis_col_indexItem3_size_medium {
        width: @dataAnalysis-indexItem3-medium-width;
    }

    .dataAnalysis_col_indexItem4_size_medium {
        width: @dataAnalysis-indexItem4-medium-width;
    }

    .dataAnalysis_col_radioWrap_size_medium {
        width: @dataAnalysis-radioWrap-medium-width;
        align-items: @dataAnalysis-radioWrap-medium-horizontal-position;
        margin: @dataAnalysis-radioWrap-medium-margin;
    }

    .dataAnalysis_col_lineWrap_size_medium {
        width: @dataAnalysis-lineWrap-medium-width;
        padding: @dataAnalysis-lineWrap-medium-padding;
        overflow-x: auto;
    }
</style>


