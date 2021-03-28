<template>
    <div class="order-confirm-wrap" ref="orderConfirmRef">
        <div class="order-confirm-content">
            <div class="confirm-title">
                <lm-link-text
                        ref="titleRef"
                        refId="titleRef"
                        v-show="pvt_isShow.title === 'titleRef'"
                        :paraVarPair="pvt_title.titleRef.paraVarPair"
                        :para="pvt_title.titleRef.para"
                        :attr="pvt_title.titleRef.attr">
                </lm-link-text>
            </div>
            <div class="order-confirm-detail">
                <div :style="{height: userInfoHeight}" class="user-info">
                    <applicantInfo
                            ref="infoListRef"
                            refId="infoListRef"
                            v-show="pvt_isShow.infoList === 'infoListRef'"
                            v-for="(item, index) in pvt_infoList.infoListRef.forData"
                            :number="index"
                            :paraVarPair="pvt_infoList.infoListRef.paraVarPair"
                            :para="item.para"
                            :attr="item.attr">
                    </applicantInfo>
                </div>
                <div class="show-more-btn">
                    <lm-button
                            ref="moreBtnRef"
                            refId="moreBtnRef"
                            v-show="pvt_isShow.moreBtn === 'moreBtnRef'"
                            :paraVarPair="pvt_moreBtn.moreBtnRef.paraVarPair"
                            :para="pvt_moreBtn.moreBtnRef.para"
                            :attr="pvt_moreBtn.moreBtnRef.attr">
                    </lm-button>
                </div>
                <div class="confirm-order-info" @click="orderSelect" :class="{'order-select-flag': showSelectImg}">
                    <div class="order-title">
                        <lm-link-text
                                ref="orderTitleRef"
                                refId="orderTitleRef"
                                v-show="pvt_isShow.orderTitle === 'orderTitleRef'"
                                :paraVarPair="pvt_orderTitle.orderTitleRef.paraVarPair"
                                :para="pvt_orderTitle.orderTitleRef.para"
                                :attr="pvt_orderTitle.orderTitleRef.attr">
                        </lm-link-text>
                    </div>
                    <div class="order-table-title">
                        <div class="table-title-item-info">
                            <lm-link-text
                                    ref="infoTextRef"
                                    refId="infoTextRef"
                                    v-show="pvt_isShow.infoText === 'infoTextRef'"
                                    :paraVarPair="pvt_infoText.infoTextRef.paraVarPair"
                                    :para="pvt_infoText.infoTextRef.para"
                                    :attr="pvt_infoText.infoTextRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="table-title-item">
                            <lm-link-text
                                    ref="nameTextRef"
                                    refId="nameTextRef"
                                    v-show="pvt_isShow.nameText === 'nameTextRef'"
                                    :paraVarPair="pvt_nameText.nameTextRef.paraVarPair"
                                    :para="pvt_nameText.nameTextRef.para"
                                    :attr="pvt_nameText.nameTextRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="table-title-item">
                            <lm-link-text
                                    ref="priceTextRef"
                                    refId="priceTextRef"
                                    v-show="pvt_isShow.priceText === 'priceTextRef'"
                                    :paraVarPair="pvt_priceText.priceTextRef.paraVarPair"
                                    :para="pvt_priceText.priceTextRef.para"
                                    :attr="pvt_priceText.priceTextRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="table-title-item">
                            <lm-link-text
                                    ref="numTextRef"
                                    refId="numTextRef"
                                    v-show="pvt_isShow.numText === 'numTextRef'"
                                    :paraVarPair="pvt_numText.numTextRef.paraVarPair"
                                    :para="pvt_numText.numTextRef.para"
                                    :attr="pvt_numText.numTextRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="table-title-item">
                            <lm-link-text
                                    ref="totalTextRef"
                                    refId="totalTextRef"
                                    v-show="pvt_isShow.totalText === 'totalTextRef'"
                                    :paraVarPair="pvt_totalText.totalTextRef.paraVarPair"
                                    :para="pvt_totalText.totalTextRef.para"
                                    :attr="pvt_totalText.totalTextRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="table-title-item">
                            <lm-link-text
                                    ref="statusTextRef"
                                    refId="statusTextRef"
                                    v-show="pvt_isShow.statusText === 'statusTextRef'"
                                    :paraVarPair="pvt_statusText.statusTextRef.paraVarPair"
                                    :para="pvt_statusText.statusTextRef.para"
                                    :attr="pvt_statusText.statusTextRef.attr">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="order-table-content">
                        <div class="table-content-item-info">
                            <div class="info-img">
                                <lm-image
                                        ref="posterRef"
                                        refId="posterRef"
                                        v-show="pvt_isShow.poster === 'posterRef'"
                                        :paraVarPair="pvt_poster.posterRef.paraVarPair"
                                        :para="pvt_poster.posterRef.para"
                                        :attr="pvt_poster.posterRef.attr">
                                </lm-image>
                            </div>
                            <div class="info-content-detail">
                                <lm-link-text
                                        ref="infoContentRef"
                                        refId="infoContentRef"
                                        v-show="pvt_isShow.infoContent === 'infoContentRef'"
                                        :paraVarPair="pvt_infoContent.infoContentRef.paraVarPair"
                                        :para="pvt_infoContent.infoContentRef.para"
                                        :attr="pvt_infoContent.infoContentRef.attr">
                                </lm-link-text>
                                <lm-link-text
                                        ref="infoTimeRef"
                                        refId="infoTimeRef"
                                        v-show="pvt_isShow.infoTime === 'infoTimeRef'"
                                        :paraVarPair="pvt_infoTime.infoTimeRef.paraVarPair"
                                        :para="pvt_infoTime.infoTimeRef.para"
                                        :attr="pvt_infoTime.infoTimeRef.attr">
                                </lm-link-text>
                                <lm-link-text
                                        ref="infoPlaceRef"
                                        refId="infoPlaceRef"
                                        v-show="pvt_isShow.infoPlace === 'infoPlaceRef'"
                                        :paraVarPair="pvt_infoPlace.infoPlaceRef.paraVarPair"
                                        :para="pvt_infoPlace.infoPlaceRef.para"
                                        :attr="pvt_infoPlace.infoPlaceRef.attr">
                                </lm-link-text>
                            </div>
                        </div>
                        <div class="table-content-item">
                            <lm-link-text
                                    ref="nameContentRef"
                                    refId="nameContentRef"
                                    v-show="pvt_isShow.nameContent === 'nameContentRef'"
                                    :paraVarPair="pvt_nameContent.nameContentRef.paraVarPair"
                                    :para="pvt_nameContent.nameContentRef.para"
                                    :attr="pvt_nameContent.nameContentRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="table-content-item">
                            <lm-link-text
                                    ref="priceContentRef"
                                    refId="priceContentRef"
                                    v-show="pvt_isShow.priceContent === 'priceContentRef'"
                                    :paraVarPair="pvt_priceContent.priceContentRef.paraVarPair"
                                    :para="pvt_priceContent.priceContentRef.para"
                                    :attr="pvt_priceContent.priceContentRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="table-content-item">
                            <lm-link-text
                                    ref="numContentRef"
                                    refId="numContentRef"
                                    v-show="pvt_isShow.numContent === 'numContentRef'"
                                    :paraVarPair="pvt_numContent.numContentRef.paraVarPair"
                                    :para="pvt_numContent.numContentRef.para"
                                    :attr="pvt_numContent.numContentRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="table-content-item">
                            <lm-link-text
                                    ref="totalContentRef"
                                    refId="totalContentRef"
                                    v-show="pvt_isShow.totalContent === 'totalContentRef'"
                                    :paraVarPair="pvt_totalContent.totalContentRef.paraVarPair"
                                    :para="pvt_totalContent.totalContentRef.para"
                                    :attr="pvt_totalContent.totalContentRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="table-content-item">
                            <lm-link-text
                                    ref="statusContentRef"
                                    refId="statusContentRef"
                                    v-show="pvt_isShow.statusContent === 'statusContentRef'"
                                    :paraVarPair="pvt_statusContent.statusContentRef.paraVarPair"
                                    :para="pvt_statusContent.statusContentRef.para"
                                    :attr="pvt_statusContent.statusContentRef.attr">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="order-info-foot">
                        <div class="info-foot-left">
                            <lm-link-text
                                    ref="tipRef"
                                    refId="tipRef"
                                    v-show="pvt_isShow.tip === 'tipRef'"
                                    :paraVarPair="pvt_tip.tipRef.paraVarPair"
                                    :para="pvt_tip.tipRef.para"
                                    :attr="pvt_tip.tipRef.attr">
                            </lm-link-text>
                        </div>
                        <div class="info-foot-right">
                            <lm-link-text
                                    ref="moneyTextRef"
                                    refId="moneyTextRef"
                                    v-show="pvt_isShow.moneyText === 'moneyTextRef'"
                                    :paraVarPair="pvt_moneyText.moneyTextRef.paraVarPair"
                                    :para="pvt_moneyText.moneyTextRef.para"
                                    :attr="pvt_moneyText.moneyTextRef.attr">
                            </lm-link-text>
                            <lm-link-text
                                    ref="moneyContentRef"
                                    refId="moneyContentRef"
                                    v-show="pvt_isShow.moneyContent === 'moneyContentRef'"
                                    :paraVarPair="pvt_moneyContent.moneyContentRef.paraVarPair"
                                    :para="pvt_moneyContent.moneyContentRef.para"
                                    :attr="pvt_moneyContent.moneyContentRef.attr">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="select-img" v-show="showSelectImg">
                        <img src="../../../../assets/select_large.png" alt="">
                    </div>
                </div>
                <div class="confirm-order-warn">
                    <lm-link-text
                            ref="warn1Ref"
                            refId="warn1Ref"
                            v-show="pvt_isShow.warn1 === 'warn1Ref'"
                            :paraVarPair="pvt_warn1.warn1Ref.paraVarPair"
                            :para="pvt_warn1.warn1Ref.para"
                            :attr="pvt_warn1.warn1Ref.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="warn2Ref"
                            refId="warn2Ref"
                            v-show="pvt_isShow.warn2 === 'warn2Ref'"
                            :paraVarPair="pvt_warn2.warn2Ref.paraVarPair"
                            :para="pvt_warn2.warn2Ref.para"
                            :attr="pvt_warn2.warn2Ref.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="warn3Ref"
                            refId="warn3Ref"
                            v-show="pvt_isShow.warn3 === 'warn3Ref'"
                            :paraVarPair="pvt_warn3.warn3Ref.paraVarPair"
                            :para="pvt_warn3.warn3Ref.para"
                            :attr="pvt_warn3.warn3Ref.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="warn4Ref"
                            refId="warn4Ref"
                            v-show="pvt_isShow.warn4 === 'warn4Ref'"
                            :paraVarPair="pvt_warn4.warn4Ref.paraVarPair"
                            :para="pvt_warn4.warn4Ref.para"
                            :attr="pvt_warn4.warn4Ref.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="warn5Ref"
                            refId="warn5Ref"
                            v-show="pvt_isShow.warn5 === 'warn5Ref'"
                            :paraVarPair="pvt_warn5.warn5Ref.paraVarPair"
                            :para="pvt_warn5.warn5Ref.para"
                            :attr="pvt_warn5.warn5Ref.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="warn6Ref"
                            refId="warn6Ref"
                            v-show="pvt_isShow.warn6 === 'warn6Ref'"
                            :paraVarPair="pvt_warn6.warn6Ref.paraVarPair"
                            :para="pvt_warn6.warn6Ref.para"
                            :attr="pvt_warn6.warn6Ref.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="warn7Ref"
                            refId="warn7Ref"
                            v-show="pvt_isShow.warn7 === 'warn7Ref'"
                            :paraVarPair="pvt_warn7.warn7Ref.paraVarPair"
                            :para="pvt_warn7.warn7Ref.para"
                            :attr="pvt_warn7.warn7Ref.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="warn8Ref"
                            refId="warn8Ref"
                            v-show="pvt_isShow.warn8 === 'warn8Ref'"
                            :paraVarPair="pvt_warn8.warn8Ref.paraVarPair"
                            :para="pvt_warn8.warn8Ref.para"
                            :attr="pvt_warn8.warn8Ref.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="warn9Ref"
                            refId="warn9Ref"
                            v-show="pvt_isShow.warn9 === 'warn9Ref'"
                            :paraVarPair="pvt_warn9.warn9Ref.paraVarPair"
                            :para="pvt_warn9.warn9Ref.para"
                            :attr="pvt_warn9.warn9Ref.attr">
                    </lm-link-text>
                </div>
                <div class="confirm-order-pay-wrap">
                    <div class="confirm-order-pay-title">
                        <lm-link-text
                                ref="payTitleRef"
                                refId="payTitleRef"
                                v-show="pvt_isShow.payTitle === 'payTitleRef'"
                                :paraVarPair="pvt_payTitle.payTitleRef.paraVarPair"
                                :para="pvt_payTitle.payTitleRef.para"
                                :attr="pvt_payTitle.payTitleRef.attr">
                        </lm-link-text>
                    </div>
                    <div class="confirm-order-pay">
                        <payItem
                                ref="payItemRef"
                                refId="payItemRef"
                                v-show="pvt_isShow.payItem === 'payItemRef'"
                                v-for="(item, index) in pvt_payItem.payItemRef.forData"
                                :number="index"
                                :paraVarPair="pvt_payItem.payItemRef.paraVarPair"
                                :para="item.para"
                                :attr="item.attr">
                        </payItem>
                    </div>
                </div>
                <div class="confirm-order-btn">
                    <lm-button
                            class="dialog-confirm"
                            ref="confirmRef"
                            refId="confirmRef"
                            v-show="pvt_isShow.confirm === 'confirmRef'"
                            :paraVarPair="pvt_confirm.confirmRef.paraVarPair"
                            :para="pvt_confirm.confirmRef.para"
                            :attr="pvt_confirm.confirmRef.attr">
                    </lm-button>
                </div>
                <div class="order-dialog">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import applicantInfo from './applicantInfo';
    import payItem from './payItem';

    export default {
        components: {applicantInfo, payItem},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                mac: mac.mac,

                payType: {
                    ali: 0,
                    weChat: 1,
                    balance: 2,
                    zgnyyh: 3,
                    bjyh: 4,
                    bjnsyh: 5,
                    zgyh: 6,
                    zgjsyh: 7,
                    cdyh: 8,
                    zggdyh: 9,
                    xyyh: 10,
                    zxyh: 11,
                    zsyh: 12,
                    zgmsyh: 13,
                    jtyh: 14,
                    fdyh: 15,
                    gfyh: 16,
                    hzyh: 17,
                    zggsyh: 18,
                    nbyh: 19,
                    zgyzcxyh: 20,
                    shyh: 21,
                    shnsyh: 22,
                    payh: 23,
                    pfyh: 24,
                    wzyh: 25
                },
                payTypeSelected: '',
                onePersonArr: [],
                cssSpriteArr: [],
                checkboxSelect: [],
                btnText: '展开全部',
                btnIcon: 'el-icon-caret-bottom',
                userInfoHeight: '64px',
                showSelectImg: true,

                time: '',
                place: '',
                ticketPrice: '',
                ticketPriceText: '',
                ticketTotal: '',
                billNum: 0,


                pvt_subModuleMap: {
                    subModule: ['titleRef', 'infoListRef', 'orderTitleRef', 'infoTextRef', 'nameTextRef', 'priceTextRef', 'numTextRef', 'totalTextRef', 'statusTextRef', 'posterRef', 'infoContentRef', 'infoTimeRef', 'infoPlaceRef', 'nameContentRef', 'priceContentRef', 'numContentRef', 'totalContentRef', 'statusContentRef', 'tipRef', 'moneyTextRef', 'moneyContentRef', 'moreBtnRef', 'warn1Ref', 'warn2Ref', 'warn3Ref', 'warn4Ref', 'warn5Ref', 'warn6Ref', 'warn7Ref', 'warn8Ref', 'warn9Ref', 'payItemRef', 'payTitleRef', 'confirmRef'],
                    vessel: ['title', 'infoList', 'orderTitle', 'infoText', 'nameText', 'priceText', 'numText', 'totalText', 'statusText', 'poster', 'infoContent', 'infoTime', 'infoPlace', 'nameContent', 'priceContent', 'numContent', 'totalContent', 'statusContent', 'tip', 'moneyText', 'moneyContent', 'moreBtn', 'warn1', 'warn2', 'warn3', 'warn4', 'warn5', 'warn6', 'warn7', 'warn8', 'warn9', 'payItem', 'payTitle', 'confirm'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    infoList: null,
                    moreBtn: null,

                    orderTitle: null,
                    infoText: null,
                    statusText: null,
                    nameText: null,
                    priceText: null,
                    numText: null,
                    totalText: null,

                    poster: null,
                    infoTime: null,
                    infoPlace: null,
                    infoContent: null,

                    nameContent: null,
                    priceContent: null,
                    numContent: null,
                    totalContent: null,
                    statusContent: null,

                    tip: null,
                    moneyText: null,
                    moneyContent: null,

                    warn1: null,
                    warn2: null,
                    warn3: null,
                    warn4: null,
                    warn5: null,
                    warn6: null,
                    warn7: null,
                    warn8: null,
                    warn9: null,

                    payTitle: null,
                    payItem: null,
                    confirm: null,

                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['moduleChangeEvent', 'balancePayIn', 'thirdPayIn'],
            }
        },
        computed: {
            pvt_payTitle: function () {
                return {
                    payTitleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '支付方式：'
                        },
                        attr: {
                            fontSize: '16px',
                            // fontWeight: true,
                            color: '#303133',
                        }
                    }
                }
            },
            pvt_payItem: function () {
                let loopModule = {
                    payItemRef: {
                        para: {
                            isCssSprite: this.cssSpriteArr
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    payItemRef: {
                        paraVarPair: {},
                        forData: forData.payItemRef,
                    },
                };
            },

            pvt_infoList: function () {
                let loopModule = {
                    infoListRef: {
                        para: {
                            onePerson: this.onePersonArr,
                            curBillId: this.para.data.curBillIdArr,
                        },
                        attr: {},
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

            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '订单确认'
                        },
                        attr: {
                            fontSize: '24px',
                            color: '#fff',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_moreBtn: function () {
                return {
                    moreBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: [this.btnText, this.btnIcon]
                        },
                        attr: {
                            type: 'text',
                            size: 'mini',
                            iconIsRight: true
                        }
                    }
                }
            },

            pvt_orderTitle: function () {
                return {
                    orderTitleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '交易信息'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },


            pvt_infoText: function () {
                return {
                    infoTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '活动信息'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_nameText: function () {
                return {
                    nameTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '票种'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_priceText: function () {
                return {
                    priceTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '单价'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_numText: function () {
                return {
                    numTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '数量'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399'
                        }
                    },

                }
            },

            pvt_totalText: function () {
                return {
                    totalTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '小计'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_statusText: function () {
                return {
                    statusTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '状态'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399'
                        }
                    }
                }
            },


            pvt_poster: function () {
                return {
                    posterRef: {
                        paraVarPair: {},
                        para: {
                            image: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.poster],
                                $arrValue: [this.para.data.curActivityId]
                            }]
                        },
                        attr: {

                        }
                    }
                }
            },

            pvt_infoContent: function () {
                return {
                    infoContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.name],
                                $arrValue: [this.para.data.curActivityId]
                            }]
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#777',
                        }
                    }
                }
            },

            pvt_infoTime: function () {
                return {
                    infoTimeRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.time
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#777',
                        }
                    }
                }
            },

            pvt_infoPlace: function () {
                return {
                    infoPlaceRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.place
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#777',
                        }
                    }
                }
            },

            pvt_nameContent: function () {
                return {
                    nameContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.name],
                                $arrValue: [this.para.data.curTicketId]
                            }]
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_priceContent: function () {
                return {
                    priceContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.ticketPriceText
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_numContent: function () {
                return {
                    numContentRef: {
                        paraVarPair: {
                        },
                        para: {
                            textData: this.billNum
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#606266'
                        }
                    },

                }
            },

            pvt_totalContent: function () {
                return {
                    totalContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.ticketTotal
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_statusContent: function () {
                return {
                    statusContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: '待付款'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_tip: function () {
                return {
                    tipRef: {
                        paraVarPair: {},
                        para: {
                            textData: '温馨提示：请尽快完成付款，系统将自动取消四小时内尚未付款票劵！'
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_moneyText: function () {
                return {
                    moneyTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '应付金额：'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_moneyContent: function () {
                return {
                    moneyContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.ticketTotal
                        },
                        attr: {
                            fontSize: '20px',
                            color: 'red',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_warn1: function () {
                return {
                    warn1Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '付款说明'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },
            pvt_warn2: function () {
                return {
                    warn2Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '1. 付款完成后您将收到电子票及二维码链接，参加活动时请出示二维码凭证（手机开启或打印）'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133',
                        }
                    }
                }
            },
            pvt_warn3: function () {
                return {
                    warn3Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '2. 如果您需要支付电子票的发票，请于参与活动时向活动主办方索要'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133',
                        }
                    }
                }
            },
            pvt_warn4: function () {
                return {
                    warn4Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '3. 付款完成后如果没有收到电子票短信，您可以进入我的订单列表查询并打印，或者联系瓴码客服'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133',
                        }
                    }
                }
            },
            pvt_warn5: function () {
                return {
                    warn5Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '退票指南'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },
            pvt_warn6: function () {
                return {
                    warn6Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '1. 本活动由主办方委托【瓴码】代为处理退款事宜'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133',
                        }
                    }
                }
            },
            pvt_warn7: function () {
                return {
                    warn7Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '2. 如需退款，请于活动开始前的24小时之前提交申请，活动开始前的24小时内不接受退款'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133',
                        }
                    }
                }
            },
            pvt_warn8: function () {
                return {
                    warn8Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '3. 退款时，将收取票价的10%作为手续费'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133',
                        }
                    }
                }
            },
            pvt_warn9: function () {
                return {
                    warn9Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '温馨提示：网站设置防刷系统，请合理使用海量下载账号，如用户短时间内高频或大量下载可能触发该系统，将暂时暂停账号下载功能，如有疑问请联系客服'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133',
                        }
                    }
                }
            },

            pvt_confirm: function () {
                return {
                    confirmRef: {
                        paraVarPair: {},
                        para: {
                            name: ['下一步', '']
                        },
                        attr: {
                            type: 'primary',
                            width: '382px'
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
                let fnname = 'applySuccess_start';
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
                    titleRef: 'titleRef',
                    infoListRef: 'infoListRef',
                    moreBtnRef: 'moreBtnRef',

                    orderTitleRef: 'orderTitleRef',
                    infoTextRef: 'infoTextRef',
                    nameTextRef: 'nameTextRef',
                    priceTextRef: 'priceTextRef',
                    numTextRef: 'numTextRef',
                    totalTextRef: 'totalTextRef',
                    statusTextRef: 'statusTextRef',

                    posterRef: 'posterRef',
                    infoContentRef: 'infoContentRef',
                    infoTimeRef: 'infoTimeRef',
                    infoPlaceRef: 'infoPlaceRef',
                    nameContentRef: 'nameContentRef',
                    priceContentRef: 'priceContentRef',
                    numContentRef: 'numContentRef',
                    totalContentRef: 'totalContentRef',
                    statusContentRef: 'statusContentRef',

                    tipRef: 'tipRef',
                    moneyTextRef: 'moneyTextRef',
                    moneyContentRef: 'moneyContentRef',

                    warn1Ref: 'warn1Ref',
                    warn2Ref: 'warn2Ref',
                    warn3Ref: 'warn3Ref',
                    warn4Ref: 'warn4Ref',
                    warn5Ref: 'warn5Ref',
                    warn6Ref: 'warn6Ref',
                    warn7Ref: 'warn7Ref',
                    warn8Ref: 'warn8Ref',
                    warn9Ref: 'warn9Ref',

                    payTitleRef: 'payTitleRef',
                    payItemRef: 'payItemRef',
                    confirmRef: 'confirmRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.onePersonArr = [];
                            that.cssSpriteArr = [];
                            that.time = '';
                            that.place = '';
                            that.ticketPrice = '';
                            that.ticketPriceText = '';
                            that.ticketTotal = '';
                            that.billNum = that.para.data.curBillIdArr.length;

                            // 添加支付宝，微信，余额，银行支付模块：
                            that.cssSpriteArr.push(false, false, false);
                            for(let i = 0; i < 22; i++) {
                                that.cssSpriteArr.push(true)
                            }

                            if(that.para.data.curBillIdArr.length === 1) {
                                that.onePersonArr.push(true)
                            } else {
                                for(let i = 0; i < that.para.data.curBillIdArr.length; i++) {
                                    that.onePersonArr.push(false)
                                }
                            }

                            para.nStep = 'getActivityData';
                            dbFlag++;
                            break;
                        case 'getActivityData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.data.curActivityId];
                            dbData[that.mac.fd.groupActivity.place] = [];
                            dbData[that.mac.fd.groupActivity.startTime] = [];
                            dbData[that.mac.fd.groupActivity.endTime] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.time = '时间：' + dbData[that.mac.fd.groupActivity.startTime][0] + ' 至 ' + dbData[that.mac.fd.groupActivity.endTime][0];
                                that.place += '地点：';
                                for(let i = 0; i < dbData[that.mac.fd.groupActivity.place][0].name.length; i++) {
                                    that.place += dbData[that.mac.fd.groupActivity.place][0].name[i];
                                }
                                that.place += dbData[that.mac.fd.groupActivity.place][0].place;

                                para.nStep = 'getTicketData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTicketData':
                            tableName = this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.data.curTicketId];
                            dbData[that.mac.fd.groupActivityTicketType.price] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.ticketPrice = dbData[that.mac.fd.groupActivityTicketType.price][0];
                                that.ticketPriceText = '￥' + that.ticketPrice;
                                that.ticketTotal = '￥' + that.ticketPrice * that.billNum;

                                para.nStep = 'start_1';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_1':
                            that.forceUpdateData(function () {
                                that.sm[ref.titleRef].startModule(function () {
                                    para.nStep = 'start_2_1';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack);
                            });
                            break;
                        case 'start_2_1':
                            if (para.i > that.sm[ref.payItemRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'start_2';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.payItemRef][para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'start_2_1';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_2':
                            if (para.i > that.sm[ref.infoListRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'start_3';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.infoListRef][para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.moreBtnRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_4':
                            that.sm[ref.orderTitleRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_5':
                            that.sm[ref.infoTextRef].startModule(function () {
                                para.nStep = 'start_6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_6':
                            that.sm[ref.nameTextRef].startModule(function () {
                                para.nStep = 'start_7';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_7':
                            that.sm[ref.priceTextRef].startModule(function () {
                                para.nStep = 'start_8';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_8':
                            that.sm[ref.numTextRef].startModule(function () {
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_9':
                            that.sm[ref.statusTextRef].startModule(function () {
                                para.nStep = 'start_10';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_10':
                            that.sm[ref.totalTextRef].startModule(function () {
                                para.nStep = 'start_11';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_11':
                            that.sm[ref.infoContentRef].startModule(function () {
                                para.nStep = 'start_12';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_12':
                            that.sm[ref.nameContentRef].startModule(function () {
                                para.nStep = 'start_13';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_13':
                            that.sm[ref.priceContentRef].startModule(function () {
                                para.nStep = 'start_14';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_14':
                            that.sm[ref.numContentRef].startModule(function () {
                                para.nStep = 'start_16';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_16':
                            that.sm[ref.totalContentRef].startModule(function () {
                                para.nStep = 'start_17';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_17':
                            that.sm[ref.posterRef].startModule(function () {
                                para.nStep = 'start_18';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_18':
                            that.sm[ref.infoTimeRef].startModule(function () {
                                para.nStep = 'start_19';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_19':
                            that.sm[ref.infoPlaceRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_20':
                            that.sm[ref.statusContentRef].startModule(function () {
                                para.nStep = 'start_21';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_21':
                            that.sm[ref.tipRef].startModule(function () {
                                para.nStep = 'start_22';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_22':
                            that.sm[ref.moneyTextRef].startModule(function () {
                                para.nStep = 'start_23';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_23':
                            that.sm[ref.moneyContentRef].startModule(function () {
                                para.nStep = 'start_24';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_24':
                            that.sm[ref.warn6Ref].startModule(function () {
                                para.nStep = 'start_25';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_25':
                            that.sm[ref.warn7Ref].startModule(function () {
                                para.nStep = 'start_26';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_26':
                            that.sm[ref.warn8Ref].startModule(function () {
                                para.nStep = 'start_27';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_27':
                            that.sm[ref.warn9Ref].startModule(function () {
                                para.nStep = 'start_29';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_29':
                            that.sm[ref.warn1Ref].startModule(function () {
                                para.nStep = 'start_30';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_30':
                            that.sm[ref.warn2Ref].startModule(function () {
                                para.nStep = 'start_31';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_31':
                            that.sm[ref.warn3Ref].startModule(function () {
                                para.nStep = 'start_32';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_32':
                            that.sm[ref.warn4Ref].startModule(function () {
                                para.nStep = 'start_33';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_33':
                            that.sm[ref.warn5Ref].startModule(function () {
                                para.nStep = 'start_34';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_34':
                            that.sm[ref.payTitleRef].startModule(function () {
                                para.nStep = 'start_35';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                            case 'start_35':
                            that.sm[ref.confirmRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['titleRef', 'infoListRef', 'moreBtnRef', 'orderTitleRef', 'infoTextRef', 'nameTextRef', 'priceTextRef', 'numTextRef', 'totalTextRef', 'statusTextRef', 'posterRef', 'infoContentRef', 'infoTimeRef', 'infoPlaceRef', 'nameContentRef', 'priceContentRef', 'numContentRef', 'totalContentRef', 'statusContentRef', 'tipRef', 'moneyTextRef', 'moneyContentRef', 'warn1Ref', 'warn2Ref', 'warn3Ref', 'warn4Ref', 'warn5Ref', 'warn6Ref', 'warn7Ref', 'warn8Ref', 'warn9Ref', 'payItemRef', 'payTitleRef', 'confirmRef'];
                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            let $orderConfirmRef = that.$refs.orderConfirmRef;
                            let screenHeight = document.documentElement.clientHeight;
                            $orderConfirmRef.style.minHeight = screenHeight - 90 - 117 + 'px';
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            orderSelect: function() {
                this.showSelectImg ? this.showSelectImg = false : this.showSelectImg = true;
            },

            showOrderList: function() {
                this.ep.moduleChangeEvent(this.mac.moduleType.orderDetail)
            },
            showMoreInfo: function() {
                let that = this;
                if(this.btnText === '展开全部') {
                    this.btnText = '收起';
                    this.btnIcon = 'el-icon-caret-top';
                    this.userInfoHeight = 'auto';
                } else {
                    this.btnText = '展开全部';
                    this.btnIcon = 'el-icon-caret-bottom';
                    this.userInfoHeight = '64px';
                }

                this.forceUpdateData(function () {
                    that.sm.moreBtnRef.startModule(function () {
                    }, function () {
                    })
                })
            },

            selectPayType: function(index) {
                this.payTypeSelected = index;
                for(let i = 0; i < this.sm.payItemRef.length; i++) {
                    if(i !== index) {
                        this.sm.payItemRef[i].itemSelect(false);
                    }
                }
            },

            openPayWay: function() {
                if(this.payTypeSelected === this.payType.balance) {
                    this.ep.balancePayIn(this.para.data.curOrderId, function (payConfig) {
                        alert('打开余额支付成功')
                    }, function () {
                        
                    });
                } else {
                    let thirdType;
                    switch (this.payTypeSelected) {
                        case this.payType.ali:
                            thirdType = 0;
                            break;
                        case this.payType.weChat:
                            thirdType = 1;
                            break;
                        default:
                            thirdType = 2;
                            break;
                    }
                    this.ep.thirdPayIn(this.para.data.curOrderId, thirdType, function (payConfig) {
                        alert('打开第三方支付成功')
                    }, function () {
                        
                    });
                }
            },

            moreBtnRef_buttonClickEvent: function () {
                this.showMoreInfo()
            },
            payItemRef_selectEvent: function(index) {
                this.selectPayType(index);
            },
            confirmRef_buttonClickEvent: function () {
                this.openPayWay()
            },
        }
    }
</script>

<style lang="scss">
    .order-confirm-wrap {
        width: 100%;
        padding: 30px 20px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
        color: #303133;
        box-sizing: border-box;
        overflow: hidden;
        .order-confirm-content {
            border-radius: 4px;
            background:rgba(255,255,255,1);
            box-shadow:-5px 9px 10px 0px rgba(48,49,51,0.19), 5px 9px 10px 0px rgba(48,49,51,0.19);
            box-sizing: border-box;
            overflow: hidden;
            .confirm-title {
                text-align: center;
                background-color: #12B0FF;
                padding: 40px 0;
            }

            .order-confirm-detail {
                padding: 20px 40px;
                .user-info {
                    overflow: hidden;
                    .applicant-info-wrap {
                        padding: 10px 0;
                        border-bottom: 1px solid #e4e4e4;
                        &:last-child {
                            border-bottom: none;
                        }
                    }
                }
                .show-more-btn {
                    margin-bottom: 20px;
                    .lm-button {
                        text-align: left;
                    }
                }
                .confirm-order-info {
                    position: relative;
                    padding: 10px 20px 30px 20px;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                    color: #303133;
                    box-sizing: border-box;
                    overflow: hidden;
                    border: 2px solid #fff;
                    margin-bottom: 30px;
                    .order-title {
                        margin-bottom: 10px;
                    }
                    .order-table-title {
                        display: flex;
                        justify-content: space-around;
                        background-color: #EFEAE5;
                        text-align: center;
                        .table-title-item-info {
                            flex: 1;
                            border-right: 1px solid #fff;
                            padding: 6px 0;
                        }
                        .table-title-item {
                            flex: 0 0 100px;
                            border-right: 1px solid #fff;
                            padding: 6px 0;
                        }
                    }
                    .order-table-content {
                        display: flex;
                        justify-content: space-around;
                        padding: 20px 0;
                        background-color: #F8F6F2;
                        text-align: center;
                        margin-bottom: 20px;
                        .table-content-item-info {
                            display: flex;
                            flex: 1;
                            .info-img {
                                flex: 0 0 120px;
                                height: 70px;
                                .image-size-medium {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .info-content-detail {
                                flex: 1;
                                text-align: left;
                                .link-text {
                                    display: block;
                                    margin-bottom: 6px;
                                }
                            }
                        }
                        .table-content-item {
                            flex: 0 0 100px;
                        }
                    }
                    .order-info-foot {
                        padding-right: 30px;
                        overflow: hidden;
                        .info-foot-left {
                            float: left;
                        }
                        .info-foot-right {
                            float: right;
                        }
                    }
                    .select-img {
                        position: absolute;
                        bottom: -5px;
                        right: 0;
                    }
                }
                .order-select-flag {
                    border: 2px solid #00a4fd;
                }
                .confirm-order-warn {
                    margin-bottom: 20px;
                    .link-text {
                        display: block;
                        margin-bottom: 6px;
                        &:nth-child(4) {
                            margin-bottom: 20px;
                        }
                        &:nth-child(8) {
                            margin-bottom: 20px;
                        }
                    }
                    .link-status.link-text:focus, .link-status.link-text:hover {
                        border-bottom: none;
                    }
                }
                .confirm-order-pay-wrap {
                    border: 10px solid #f4f7fa;
                    padding: 20px;
                    .confirm-order-pay-title {
                        padding-bottom: 10px;
                        border-bottom: 1px solid #ccc;
                        margin-bottom: 20px;
                    }
                    .confirm-order-pay {
                        .pay-item-wrap {
                            &:nth-child(1) {
                                line-height: 50px;
                            }
                            &:nth-child(2) {
                                margin-bottom: 20px;
                                line-height: 50px;
                            }
                            &:nth-child(3) {
                                display: block;
                                padding: 30px 0 20px 0;
                                border-bottom: 1px dotted #e4e4e4;
                                border-top: 1px dotted #e4e4e4;
                                line-height: 50px;
                            }
                            &:nth-child(4) {
                                margin-top: 30px;
                            }
                        }
                    }
                }
                .confirm-order-btn {
                    margin: 30px 0;
                    text-align: center;
                }
            }
        }
    }
</style>
