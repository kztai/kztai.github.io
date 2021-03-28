<template>
    <div class="order-approval-wrap" ref="orderApprovalRef">
        <div class="approval-img">
            <img src="../../../../assets/报名成功.png" width="84" height="84" alt="">
            <!--<lm-image-->
            <!--ref="emptyImgRef"-->
            <!--refId="emptyImgRef"-->
            <!--v-show="pvt_isShow.emptyImg === 'emptyImgRef'"-->
            <!--:paraVarPair="pvt_emptyImg.emptyImgRef.paraVarPair"-->
            <!--:para="pvt_emptyImg.emptyImgRef.para"-->
            <!--:attr="pvt_emptyImg.emptyImgRef.attr">-->
            <!--</lm-image>-->
        </div>
        <div class="approval-title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="empty-desc">
            <lm-link-text
                    ref="emptyDescRef"
                    refId="emptyDescRef"
                    v-show="pvt_isShow.emptyDesc === 'emptyDescRef'"
                    :paraVarPair="pvt_emptyDesc.emptyDescRef.paraVarPair"
                    :para="pvt_emptyDesc.emptyDescRef.para"
                    :attr="pvt_emptyDesc.emptyDescRef.attr">
            </lm-link-text>
        </div>
        <div class="approval-btn">
            <lm-button
                    ref="detailBtnRef"
                    refId="detailBtnRef"
                    v-show="pvt_isShow.detailBtn === 'detailBtnRef'"
                    :paraVarPair="pvt_detailBtn.detailBtnRef.paraVarPair"
                    :para="pvt_detailBtn.detailBtnRef.para"
                    :attr="pvt_detailBtn.detailBtnRef.attr">
            </lm-button>
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
                mac: mac.mac,

                initDialog: false,

                pvt_subModuleMap: {
                    subModule: ['emptyImgRef', 'emptyDescRef', 'detailBtnRef', 'titleRef'],
                    vessel: ['emptyImg', 'emptyDesc', 'detailBtn', 'title'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    emptyImg: null,
                    emptyDesc: null,
                    title: null,
                    detailBtn: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['listPageEvent'],
            }
        },
        computed: {
            pvt_emptyImg: function () {
                return {
                    emptyImgRef: {
                        paraVarPair: {},
                        para: {
                            image: []
                        },
                        attr: {}
                    }
                }
            },

            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '您已申请成功，请等待审核！'
                        },
                        attr: {
                            fontSize: '20px',
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_emptyDesc: function () {
                return {
                    emptyDescRef: {
                        paraVarPair: {},
                        para: {
                            textData: '请耐心等待主办方审核身份，审核通过后您将收到报名成功的入场电子票，如有疑问可以联系主办人'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_detailBtn: function () {
                return {
                    detailBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['返回列表', ''],
                        },
                        attr: {
                            // size: 'large',
                            // type: 'primary',
                            plain: true
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
                let fnname = 'orderApproval_start';
                let dbFlag;
                let dbData;
                let tableName;
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
                    emptyImgRef: 'emptyImgRef',
                    emptyDescRef: 'emptyDescRef',
                    titleRef: 'titleRef',
                    detailBtnRef: 'detailBtnRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'start_1':
                            that.sm[ref.titleRef].startModule(function () {
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_2':
                            that.sm[ref.detailBtnRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_3':
                            that.sm[ref.emptyImgRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_4':
                            that.sm[ref.emptyDescRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
                            let refArr = ['emptyDescRef', 'detailBtnRef', 'titleRef'];
                            // let refArr = ['emptyImgRef', 'emptyDescRef', 'detailBtnRef', 'titleRef'];
                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            let $orderApprovalRef = that.$refs.orderApprovalRef;
                            let screenHeight = document.documentElement.clientHeight;
                            $orderApprovalRef.style.minHeight = screenHeight - 90 - 117 + 'px';
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
            
            showOrderList: function() {
                let listIndex = 0;  // 0:我的订单，1:我的收藏
                this.ep.listPageEvent(listIndex)
            },

            detailBtnRef_buttonClickEvent: function () {
                this.showOrderList()
            }
        }
    }
</script>

<style lang="scss">
    .order-approval-wrap {
        width: 100%;
        padding: 20px 40px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
        color: #303133;
        box-sizing: border-box;
        text-align: center;
        padding-top: 100px;
        .approval-img {
            .image-size-medium {
                width: 100%;
                height: 100%;
            }
        }
        .approval-img, .approval-title, .empty-desc {
            margin-bottom: 20px;
        }
        .approval-btn {
            .lm-button {
                display: inline-block;
                margin-right: 20px;
            }
        }
    }
</style>
