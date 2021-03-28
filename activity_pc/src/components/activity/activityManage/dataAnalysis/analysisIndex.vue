<template>
    <div class="analysis-index-wrap" :class="{'index-select': isSelect}" @click="dataClick">
        <div class="index-title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="analysis-total">
            <lm-link-text
                    ref="totalRef"
                    refId="totalRef"
                    v-show="pvt_isShow.total === 'totalRef'"
                    :paraVarPair="pvt_total.totalRef.paraVarPair"
                    :para="pvt_total.totalRef.para"
                    :attr="pvt_total.totalRef.attr">
            </lm-link-text>
        </div>
        <div class="analysis-today">
            <lm-link-text
                    ref="todayRef"
                    refId="todayRef"
                    v-show="pvt_isShow.today === 'todayRef'"
                    :paraVarPair="pvt_today.todayRef.paraVarPair"
                    :para="pvt_today.todayRef.para"
                    :attr="pvt_today.todayRef.attr">
            </lm-link-text>
        </div>
        <div class="analysis-rate">
            <lm-progress
                    ref="rateRef"
                    refId="rateRef"
                    v-show="pvt_isShow.rate === 'rateRef'"
                    :paraVarPair="pvt_rate.rateRef.paraVarPair"
                    :para="pvt_rate.rateRef.para"
                    :attr="pvt_rate.rateRef.attr">
            </lm-progress>
        </div>
        <div class="success-img">
            <img src="../../../../assets/select.png" alt="">
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
                isSelect: true,

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'totalRef', 'todayRef', 'rateRef'],
                    vessel: ['title', 'total', 'today', 'rate'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    total: null,
                    today: null,
                    rate: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['dataClickEvent'],
            }
        },
        computed: {
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.para.indexTitle
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_total: function () {
                return {
                    totalRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.para.totalNum
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_today: function () {
                return {
                    todayRef: {
                        paraVarPair: {},
                        para: {
                            textData: '今日新增 ' + this.para.todayNum
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_rate: function () {
                return {
                    rateRef: {
                        paraVarPair: {},
                        para: {
                            percent: this.para.percent
                        },
                        attr: {
                            showText: false,
                            status: 'success'
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
                let fnname = 'analysisIndex_start';
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
                    titleRef: 'titleRef',
                    totalRef: 'totalRef',
                    todayRef: 'todayRef',
                    rateRef: 'rateRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
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
                            that.sm[ref.totalRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_4':
                            that.sm[ref.todayRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_5':
                            that.sm[ref.rateRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
                            let refArr = ['titleRef', 'totalRef', 'todayRef', 'rateRef'];
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

            dataClick: function() {
                this.isSelect ? this.isSelect = false : this.isSelect = true;
                this.ep.dataClickEvent(this.isSelect);
            },
        }
    }
</script>

<style lang="scss">
    .index-select {
        border: 2px solid #409EFF !important;
    }
    .analysis-index-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden;
        border: 2px solid #e4e4e4;
        .index-title, .analysis-total {
            margin-bottom: 10px;
        }
        .analysis-rate {
            .el-progress {
                width: 60%;
            }
            .el-progress-bar {
                width: 100%;
                .el-progress-bar__outer {
                    height: 6px !important;
                }
            }
        }
        .success-img {
            position: absolute;
            bottom: -4px;
            right: 0;
        }
    }
</style>
