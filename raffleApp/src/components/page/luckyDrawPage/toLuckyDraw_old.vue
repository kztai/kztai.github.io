<template>
    <div v-show="pvt_win.isShow.toLuckyDrawWindow"
         :class="{toLuckyDraw_container:true,toLuckyDraw_col:true,toLuckyDraw_col_toLuckyDrawWindow:true,toLuckyDraw_col_toLuckyDrawWindow_size_large:attr.size==='large',toLuckyDraw_col_toLuckyDrawWindow_size_medium:attr.size==='medium',toLuckyDraw_col_toLuckyDrawWindow_size_small:attr.size==='small',toLuckyDraw_col_toLuckyDrawWindow_size_min:attr.size==='min',toLuckyDraw_col_toLuckyDrawWindow_checked:pvt_win.isChecked.toLuckyDrawWindow,toLuckyDraw_col_toLuckyDrawWindow_disable:attr.disabled}"
         :style="pvt_win.style.toLuckyDrawWindow">

        <div class="toLuckyDraw_row toLuckyDraw_row_row0">
            <div v-show="pvt_win.isShow.leftDiv"
                 :class="{toLuckyDraw_col:true,toLuckyDraw_col_leftDiv:true,toLuckyDraw_col_leftDiv_size_large:attr.size==='large',toLuckyDraw_col_leftDiv_size_medium:attr.size==='medium',toLuckyDraw_col_leftDiv_size_small:attr.size==='small',toLuckyDraw_col_leftDiv_size_min:attr.size==='min',toLuckyDraw_col_leftDiv_checked:pvt_win.isChecked.leftDiv,toLuckyDraw_col_leftDiv_disable:attr.disabled}"
                 :style="pvt_win.style.leftDiv">

                <div class="toLuckyDraw_row toLuckyDraw_row_row1">
                    <div v-show="pvt_win.isShow.qrCodeLinkDiv"
                         :class="{toLuckyDraw_col:true,toLuckyDraw_col_qrCodeLinkDiv:true,toLuckyDraw_col_qrCodeLinkDiv_size_large:attr.size==='large',toLuckyDraw_col_qrCodeLinkDiv_size_medium:attr.size==='medium',toLuckyDraw_col_qrCodeLinkDiv_size_small:attr.size==='small',toLuckyDraw_col_qrCodeLinkDiv_size_min:attr.size==='min',toLuckyDraw_col_qrCodeLinkDiv_checked:pvt_win.isChecked.qrCodeLinkDiv,toLuckyDraw_col_qrCodeLinkDiv_disable:attr.disabled}"
                         :style="pvt_win.style.qrCodeLinkDiv">

                        <lucky-draw-qr-code
                                ref="qrCodeLink"
                                refId="qrCodeLink"
                                v-show="pvt_isShow.qrCodeLinkDiv === 'qrCodeLink'"
                                :paraVarPair="pvt_qrCodeLinkDiv.qrCodeLink.paraVarPair"
                                :para="pvt_qrCodeLinkDiv.qrCodeLink.para"
                                :attr="pvt_qrCodeLinkDiv.qrCodeLink.attr">
                        </lucky-draw-qr-code>
                    </div>
                </div>
                <div class="toLuckyDraw_row toLuckyDraw_row_row2">
                    <div v-show="pvt_win.isShow.describeTextDiv"
                         :class="{toLuckyDraw_col:true,toLuckyDraw_col_describeTextDiv:true,toLuckyDraw_col_describeTextDiv_size_large:attr.size==='large',toLuckyDraw_col_describeTextDiv_size_medium:attr.size==='medium',toLuckyDraw_col_describeTextDiv_size_small:attr.size==='small',toLuckyDraw_col_describeTextDiv_size_min:attr.size==='min',toLuckyDraw_col_describeTextDiv_checked:pvt_win.isChecked.describeTextDiv,toLuckyDraw_col_describeTextDiv_disable:attr.disabled}"
                         :style="pvt_win.style.describeTextDiv">

                        <lm1a-link-text
                                ref="describeText"
                                refId="describeText"
                                v-show="pvt_isShow.describeTextDiv === 'describeText'"
                                :paraVarPair="pvt_describeTextDiv.describeText.paraVarPair"
                                :para="pvt_describeTextDiv.describeText.para"
                                :attr="pvt_describeTextDiv.describeText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="toLuckyDraw_row toLuckyDraw_row_row3">
                    <div v-show="pvt_win.isShow.endBtnDiv"
                         :class="{toLuckyDraw_col:true,toLuckyDraw_col_endBtnDiv:true,toLuckyDraw_col_endBtnDiv_size_large:attr.size==='large',toLuckyDraw_col_endBtnDiv_size_medium:attr.size==='medium',toLuckyDraw_col_endBtnDiv_size_small:attr.size==='small',toLuckyDraw_col_endBtnDiv_size_min:attr.size==='min',toLuckyDraw_col_endBtnDiv_checked:pvt_win.isChecked.endBtnDiv,toLuckyDraw_col_endBtnDiv_disable:attr.disabled}"
                         :style="pvt_win.style.endBtnDiv">

                        <lm1a-image
                                ref="endBtn"
                                refId="endBtn"
                                v-show="pvt_isShow.endBtnDiv === 'endBtn'"
                                :paraVarPair="pvt_endBtnDiv.endBtn.paraVarPair"
                                :para="pvt_endBtnDiv.endBtn.para"
                                :attr="pvt_endBtnDiv.endBtn.attr">
                        </lm1a-image>
                    </div>
                </div>
            </div>
            <div v-show="pvt_win.isShow.rightDiv"
                 :class="{toLuckyDraw_col:true,toLuckyDraw_col_rightDiv:true,toLuckyDraw_col_rightDiv_size_large:attr.size==='large',toLuckyDraw_col_rightDiv_size_medium:attr.size==='medium',toLuckyDraw_col_rightDiv_size_small:attr.size==='small',toLuckyDraw_col_rightDiv_size_min:attr.size==='min',toLuckyDraw_col_rightDiv_checked:pvt_win.isChecked.rightDiv,toLuckyDraw_col_rightDiv_disable:attr.disabled}"
                 :style="pvt_win.style.rightDiv">

                <lucky-draw-show
                        ref="showPrize"
                        refId="showPrize"
                        v-show="pvt_isShow.rightDiv === 'showPrize'"
                        :paraVarPair="pvt_rightDiv.showPrize.paraVarPair"
                        :para="pvt_rightDiv.showPrize.para"
                        :attr="pvt_rightDiv.showPrize.attr">
                </lucky-draw-show>
            </div>
        </div>

    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import luckyDrawQrCode from './luckyDrawQrCode.vue';
    import luckyDrawShow from './luckyDrawShow.vue';

    export default {
        components: {luckyDrawShow, luckyDrawQrCode},
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
                eventInputResult: this.para.eventInputResult,
                pvt_subModuleMap: {
                    vessel: ['rightDiv', 'qrCodeLinkDiv', 'describeTextDiv', 'endBtnDiv'],
                    subModule: ['showPrize', 'qrCodeLink', 'describeText', 'endBtn'],
                },
                pvt_isShow: {
                    rightDiv: null,
                    qrCodeLinkDiv: null,
                    describeTextDiv: null,
                    endBtnDiv: null,
                },
                pvt_win: {
                    isShow: {
                        toLuckyDrawWindow: true,
                        leftDiv: true,
                        rightDiv: true,
                        qrCodeLinkDiv: true,
                        describeTextDiv: true,
                        endBtnDiv: true,
                    },
                    isChecked: {
                        toLuckyDrawWindow: false,
                        leftDiv: false,
                        rightDiv: false,
                        qrCodeLinkDiv: false,
                        describeTextDiv: false,
                        endBtnDiv: false,
                    },
                    style: {
                        toLuckyDrawWindow: null,
                        leftDiv: null,
                        rightDiv: null,
                        qrCodeLinkDiv: null,
                        describeTextDiv: null,
                        endBtnDiv: null,
                    },
                },
                pvt_eventPortInput: ['lotteryEndEvent'],

                btnImage: null,
                userIcon: null,
                userName: null,
            };
        },
        watch: {
            // eventInputResult: {
            //     handler: function (val, oldVal) {
            //         if (val !== oldVal && this.paraVarPair.eventInputResult) {
            //             if (this.number !== undefined) { // 循环
            //                 this.$parent[this.paraVarPair.eventInputResult][this.number] = val
            //             } else { // 非循环
            //                 this.$parent[this.paraVarPair.eventInputResult] = val
            //             }
            //         }
            //     },
            //     deep: true
            // },
        },
        computed: {
            pvt_rightDiv: function () {
                return {
                    showPrize: {
                        paraVarPair: {
                            // userOneIcon: 'userIcon',
                            // userOneNickname: 'userName',
                            // userTwoIcon: 'userIcon',
                            // userTwoNickname: 'userName',
                            // userThreeIcon: 'userIcon',
                            // userThreeNickname: 'userName',
                            // userFourIcon: 'userIcon',
                            // userFourNickname: 'userName',
                            // userFiveIcon: 'userIcon',
                            // userFiveNickname: 'userName',
                            // userSixIcon: 'userIcon',
                            // userSixNickname: 'userName',
                        },
                        para: {
                            // userOneIcon: this.userIcon,
                            // userOneNickname: this.userName,
                            // userTwoIcon: this.userIcon,
                            // userTwoNickname: this.userName,
                            // userThreeIcon: this.userIcon,
                            // userThreeNickname: this.userName,
                            // userFourIcon: this.userIcon,
                            // userFourNickname: this.userName,
                            // userFiveIcon: this.userIcon,
                            // userFiveNickname: this.userName,
                            // userSixIcon: this.userIcon,
                            // userSixNickname: this.userName,
                            eventInputResult: this.para.eventInputResult,
                        },
                        attr: {
                            size: 'medium'
                        },
                    },
                };
            },
            pvt_qrCodeLinkDiv: function () {
                return {
                    qrCodeLink: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        },
                    },
                };
            },
            pvt_describeTextDiv: function () {
                return {
                    describeText: {
                        paraVarPair: {},
                        para: {
                            textData: '——微信“扫一扫”参与——',
                        },
                        attr: {
                            label: 'p',
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#FFFFFF',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_endBtnDiv: function () {
                return {
                    endBtn: {
                        paraVarPair: {
                            image: 'btnImage',
                        },
                        para: {
                            image: this.btnImage,
                        },
                        attr: {
                            fit: 'none',
                            isClick: true,
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
                    sm1: 'showPrize',
                    sm2: 'qrCodeLink',
                    sm3: 'describeText',
                    sm4: 'endBtn',
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
                            $this.eventInputResult = this.para.eventInputResult;
                            $this.btnImage = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAACCCAYAAABvlED9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NjAwNTc1ODIzNEExMUVCQTg3MkY3OTMxRjM3NDhGQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NjAwNTc1OTIzNEExMUVCQTg3MkY3OTMxRjM3NDhGQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg2MDA1NzU2MjM0QTExRUJBODcyRjc5MzFGMzc0OEZBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg2MDA1NzU3MjM0QTExRUJBODcyRjc5MzFGMzc0OEZBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+76prowAAdSBJREFUeNrsfQecnFd1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'];
                            para.nStep = 'showSubModule';
                            ++dbFlag;
                            break;
                        case 'showSubModule':
                            $this.showSubModule([ref.sm1, ref.sm2, ref.sm3, ref.sm4], true, function () {
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
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule2':
                            $this.sm[ref.sm2].startModule(function () {
                                para.nStep = 'startModule3';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule3':
                            $this.sm[ref.sm3].startModule(function () {
                                para.nStep = 'startModule4';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule4':
                            $this.sm[ref.sm4].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            // this.timer = setInterval(() => {
                            //     var $this = this;
                            //     $this.showSubModule(['showPrize'], true, function () {
                            //         $this.sm[ref.sm1].startModule(function () {
                            //         }, function () {
                            //         });
                            //     }, function () {
                            //     });
                            // }, 2500);
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
            prizeShowOut: function (openId) {
                console.log(openId);
            },
            endBtn_clickEvent: function (id) {
                this.ep.lotteryEndEvent(id);
                clearInterval(this.timer);

            },
        },
    };
</script>
<style lang="scss" scoped>
    /*@import "../assets/zhl-style.scss";*/

    .toLuckyDraw_container {
        width: 100%;
        height: 100%;
    }

    .toLuckyDraw_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .toLuckyDraw_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .toLuckyDraw_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .toLuckyDraw_row {
        display: flex;
    }

    .toLuckyDraw_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .toLuckyDraw_col_toLuckyDrawWindow_size_medium {
        width: $toLuckyDraw-toLuckyDrawWindow-medium-width;
        height: $toLuckyDraw-toLuckyDrawWindow-medium-height;
        justify-content: center;
    }

    .toLuckyDraw_col_leftDiv_size_medium {
        width: 50%;
        align-items: center;
        justify-content: center;
        padding: 4% 2% 0 0;
        background-image: url("../../../assets/QrCodeDiv.png");
        background-repeat: no-repeat;
        background-size: 940px;
        background-position: 67% -47px;
    }

    .toLuckyDraw_col_rightDiv_size_medium {
        width: $toLuckyDraw-rightDiv-medium-width;
        align-items: $toLuckyDraw-rightDiv-medium-horizontal-position;
        justify-content: $toLuckyDraw-rightDiv-medium-vertical-position;
        height: $toLuckyDraw-rightDiv-medium-height;
    }

    .toLuckyDraw_col_qrCodeLinkDiv_size_medium {
        height: $toLuckyDraw-qrCodeLinkDiv-medium-height;
        align-items: $toLuckyDraw-qrCodeLinkDiv-medium-horizontal-position;
        justify-content: $toLuckyDraw-qrCodeLinkDiv-medium-vertical-position;
        width: $toLuckyDraw-qrCodeLinkDiv-medium-width;
        margin: $toLuckyDraw-qrCodeLinkDiv-medium-margin;
    }

    .toLuckyDraw_col_describeTextDiv_size_medium {
        width: $toLuckyDraw-describeTextDiv-medium-width;
        align-items: $toLuckyDraw-describeTextDiv-medium-horizontal-position;
        margin: $toLuckyDraw-describeTextDiv-medium-margin;
    }

    .toLuckyDraw_col_endBtnDiv_size_medium {
        width: $toLuckyDraw-endBtnDiv-medium-width;
    }

</style>
