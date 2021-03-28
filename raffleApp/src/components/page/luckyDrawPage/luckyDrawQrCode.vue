<template>
    <div v-show="pvt_win.isShow.luckyDrawQrCodeWindow"
         :class="{luckyDrawQrCode_container:true,luckyDrawQrCode_col:true,luckyDrawQrCode_col_luckyDrawQrCodeWindow:true,luckyDrawQrCode_col_luckyDrawQrCodeWindow_size_large:attr.size==='large',luckyDrawQrCode_col_luckyDrawQrCodeWindow_size_medium:attr.size==='medium',luckyDrawQrCode_col_luckyDrawQrCodeWindow_size_small:attr.size==='small',luckyDrawQrCode_col_luckyDrawQrCodeWindow_size_min:attr.size==='min',luckyDrawQrCode_col_luckyDrawQrCodeWindow_checked:pvt_win.isChecked.luckyDrawQrCodeWindow,luckyDrawQrCode_col_luckyDrawQrCodeWindow_disable:attr.disabled}"
         :style="pvt_win.style.luckyDrawQrCodeWindow">

        <lm1a-qrcode
                ref="openLuckyDraw"
                refId="openLuckyDraw"
                v-show="pvt_isShow.luckyDrawQrCodeWindow === 'openLuckyDraw'"
                :paraVarPair="pvt_luckyDrawQrCodeWindow.openLuckyDraw.paraVarPair"
                :para="pvt_luckyDrawQrCodeWindow.openLuckyDraw.para"
                :attr="pvt_luckyDrawQrCodeWindow.openLuckyDraw.attr">
        </lm1a-qrcode>

    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        inject: ['sys'],
        props: {
            refId: String,
            para: Object,
            attr: {
                type: Object,
                default: function () {
                    return {size: 'medium'};
                },
                validator: function (val) {
                    if (!val.size) val.size = 'medium';
                    return true;
                },
            },
            number: Number,
        },
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['luckyDrawQrCodeWindow'],
                    subModule: ['openLuckyDraw'],
                },
                pvt_isShow: {
                    luckyDrawQrCodeWindow: null,
                },
                pvt_win: {
                    isShow: {
                        luckyDrawQrCodeWindow: true,
                    },
                    isChecked: {
                        luckyDrawQrCodeWindow: false,
                    },
                    style: {
                        luckyDrawQrCodeWindow: null,
                    },
                },
                pvt_eventPortInput: [],

                luckyDrawUrl: null,
            };
        },
        watch: {},
        computed: {
            pvt_luckyDrawQrCodeWindow: function () {
                return {
                    openLuckyDraw: {
                        paraVarPair: {
                            qrUrl: 'luckyDrawUrl',
                            qrLogo: 'icon',
                        },
                        para: {
                            qrUrl: this.luckyDrawUrl,
                        },
                        attr: {
                            size: 470,
                            qrLogoSize: 150,
                            margin: 10,
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
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let ref = {
                    sm1: 'openLuckyDraw',
                };
                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            var AppID = 'wx78e0b019057705e7';
                            var return_uri = 'http%3a%2f%2fweixin.zeropaas.com%2fi';
                            var scope = 'snsapi_userinfo'; //网页
                            var state = '1';
                            $this.luckyDrawUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + AppID + '&redirect_uri=' + return_uri + '&response_type=code&scope=' + scope + '&state=' + state + '#wechat_redirect';
                            para.nStep = 'showSubModule';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'showSubModule':
                            $this.showSubModule([ref.sm1], true, function () {
                                para.nStep = 'forceUpdateData';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'forceUpdateData':
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule1';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
        },
    };
</script>
<style lang="scss" scoped>
    /*@import "../../../assets/common.scss";*/

    .luckyDrawQrCode_container {
        width: 100%;
        height: 100%;
    }

    .luckyDrawQrCode_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .luckyDrawQrCode_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .luckyDrawQrCode_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .luckyDrawQrCode_row {
        display: flex;
    }

    .luckyDrawQrCode_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .luckyDrawQrCode_col_luckyDrawQrCodeWindow_size_medium {
        width: $luckyDrawQrCode-luckyDrawQrCodeWindow-medium-width;
    }

</style>
