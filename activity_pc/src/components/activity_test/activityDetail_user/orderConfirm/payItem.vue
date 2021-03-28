<template>
    <div class="pay-item-wrap">
        <div class="pay-item-radio">
            <lm-radio
                    ref="radioRef"
                    refId="radioRef"
                    v-show="pvt_isShow.radio === 'radioRef'"
                    :paraVarPair="pvt_radio.radioRef.paraVarPair"
                    :para="pvt_radio.radioRef.para"
                    :attr="pvt_radio.radioRef.attr">
            </lm-radio>
        </div>
        <div class="pay-img-ali" v-if="number === 0">
            <img src="../../../../assets/aliPay.png" height="100%" alt="">
            <!--<lm-link-text-->
            <!--ref="imgRef"-->
            <!--refId="imgRef"-->
            <!--v-show="pvt_isShow.img === 'imgRef'"-->
            <!--:paraVarPair="pvt_img.imgRef.paraVarPair"-->
            <!--:para="pvt_img.imgRef.para"-->
            <!--:attr="pvt_img.imgRef.attr">-->
            <!--</lm-link-text>-->
        </div>
        <div class="pay-img-we" v-if="number === 1">
            <img src="../../../../assets/weChatPay.png" height="100%" alt="">
            <!--<lm-link-text-->
            <!--ref="imgRef"-->
            <!--refId="imgRef"-->
            <!--v-show="pvt_isShow.img === 'imgRef'"-->
            <!--:paraVarPair="pvt_img.imgRef.paraVarPair"-->
            <!--:para="pvt_img.imgRef.para"-->
            <!--:attr="pvt_img.imgRef.attr">-->
            <!--</lm-link-text>-->
        </div>
        <div class="pay-img-balance" v-if="number === 2">
            <img src="../../../../assets/balancePay.png" alt="">
            <!--<lm-link-text-->
            <!--ref="imgRef"-->
            <!--refId="imgRef"-->
            <!--v-show="pvt_isShow.img === 'imgRef'"-->
            <!--:paraVarPair="pvt_img.imgRef.paraVarPair"-->
            <!--:para="pvt_img.imgRef.para"-->
            <!--:attr="pvt_img.imgRef.attr">-->
            <!--</lm-link-text>-->
        </div>
        <div class="pay-img-bank" v-if="number > 2">
            <img src="../../../../assets/banks.png" alt="" :style="{top: imgTop}">
            <!--<lm-link-text-->
                    <!--ref="imgRef"-->
                    <!--refId="imgRef"-->
                    <!--v-show="pvt_isShow.img === 'imgRef'"-->
                    <!--:paraVarPair="pvt_img.imgRef.paraVarPair"-->
                    <!--:para="pvt_img.imgRef.para"-->
                    <!--:attr="pvt_img.imgRef.attr">-->
            <!--</lm-link-text>-->
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
                radioSelect: '',
                imgTop: (this.number-3) * -36 + 'px',

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['radioRef', 'imgRef'],
                    vessel: ['radio', 'img'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    radio: null,
                    img: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['selectEvent'],
            }
        },
        computed: {
            pvt_radio: function () {
                return {
                    radioRef: {
                        paraVarPair: {
                            radioData: 'radioSelect'
                        },
                        para: {
                            radioData: this.radioSelect
                        },
                        attr: {
                            radioArr: [{label: 1, text: ''}]
                        }
                    }
                }
            },

            pvt_img: function () {
                return {
                    imgRef: {
                        paraVarPair: {},
                        para: {
                            image: ''
                        },
                        attr: {

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
                let fnname = 'payItem_start';
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
                    imgRef: 'imgRef',
                    radioRef: 'radioRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'start_1':
                            that.forceUpdateData(function () {
                                that.sm[ref.radioRef].startModule(function () {
                                    para.nStep = 'showSubModule';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_2':
                            that.forceUpdateData(function () {
                                that.sm[ref.imgRef].startModule(function () {
                                    para.nStep = 'showSubModule';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['radioRef'];
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

            itemSelect: function (isSelect) {
                let that = this;
                isSelect ? this.radioSelect = 1 : this.radioSelect = '';
                this.forceUpdateData(function () {
                    that.sm.radioRef.startModule(function () {
                    }, function () {
                    })
                })
            },

            radioSelected: function() {
                this.ep.selectEvent(this.number);
            },

            radioRef_dataModifyEvent: function () {
                this.radioSelected()
            }
        }
    }
</script>

<style lang="scss">
    .pay-item-wrap {
        display: inline-block;
        line-height: 36px;
        margin-right: 40px;
        .pay-item-radio {
            display: inline-block;
            vertical-align: top;
            .lm-radio .el-radio {
                margin-right: 0;
            }
        }
        .pay-img-ali {
            display: inline-block;
            height: 50px;
        }
        .pay-img-we {
            display: inline-block;
            height: 50px;
        }
        .pay-img-balance {
            display: inline-block;
            height: 49px;
            width: 130px;
        }
        .pay-img-bank {
            display: inline-block;
            width: 126px;
            height: 36px;
            overflow: hidden;
            position: relative;
            img {
                position: absolute;
            }
        }
    }
</style>
