<template>
    <div v-show="pvt_win.isShow.luckyDrawShowWindow"
         :class="{luckyDrawShow_container:true,luckyDrawShow_col:true,luckyDrawShow_col_luckyDrawShowWindow:true,luckyDrawShow_col_luckyDrawShowWindow_size_large:attr.size==='large',luckyDrawShow_col_luckyDrawShowWindow_size_medium:attr.size==='medium',luckyDrawShow_col_luckyDrawShowWindow_size_small:attr.size==='small',luckyDrawShow_col_luckyDrawShowWindow_size_min:attr.size==='min',luckyDrawShow_col_luckyDrawShowWindow_checked:pvt_win.isChecked.luckyDrawShowWindow,luckyDrawShow_col_luckyDrawShowWindow_disable:attr.disabled}"
         :style="pvt_win.style.luckyDrawShowWindow">

        <div class="luckyDrawShow_row luckyDrawShow_row_row0">
            <div v-show="pvt_win.isShow.firstPrizeDiv"
                 :class="{luckyDrawShow_col:true,luckyDrawShow_col_firstPrizeDiv:true,luckyDrawShow_col_firstPrizeDiv_size_large:attr.size==='large',luckyDrawShow_col_firstPrizeDiv_size_medium:attr.size==='medium',luckyDrawShow_col_firstPrizeDiv_size_small:attr.size==='small',luckyDrawShow_col_firstPrizeDiv_size_min:attr.size==='min',luckyDrawShow_col_firstPrizeDiv_checked:pvt_win.isChecked.firstPrizeDiv,luckyDrawShow_col_firstPrizeDiv_disable:attr.disabled}"
                 :style="pvt_win.style.firstPrizeDiv">

                <div class="luckyDrawShow_row luckyDrawShow_row_row3">
                    <div v-show="pvt_win.isShow.firstTitleDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_firstTitleDiv:true,luckyDrawShow_col_firstTitleDiv_size_large:attr.size==='large',luckyDrawShow_col_firstTitleDiv_size_medium:attr.size==='medium',luckyDrawShow_col_firstTitleDiv_size_small:attr.size==='small',luckyDrawShow_col_firstTitleDiv_size_min:attr.size==='min',luckyDrawShow_col_firstTitleDiv_checked:pvt_win.isChecked.firstTitleDiv,luckyDrawShow_col_firstTitleDiv_disable:attr.disabled}"
                         :style="pvt_win.style.firstTitleDiv">

                        <lm1a-link-text
                                ref="firstPrize"
                                refId="firstPrize"
                                v-show="pvt_isShow.firstTitleDiv === 'firstPrize'"
                                :paraVarPair="pvt_firstTitleDiv.firstPrize.paraVarPair"
                                :para="pvt_firstTitleDiv.firstPrize.para"
                                :attr="pvt_firstTitleDiv.firstPrize.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="lucky-draw-s-loop-one">
                    <div class="lucky-draw-s-loop-scroll">
                        <luckyDrawShowLoop ref="luckyDrawSLoop" v-for="item in luck[0]"
                                           :para="item"></luckyDrawShowLoop>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckyDrawShow_row luckyDrawShow_row_row1">
            <div v-show="pvt_win.isShow.secondPrizeDiv"
                 :class="{luckyDrawShow_col:true,luckyDrawShow_col_secondPrizeDiv:true,luckyDrawShow_col_secondPrizeDiv_size_large:attr.size==='large',luckyDrawShow_col_secondPrizeDiv_size_medium:attr.size==='medium',luckyDrawShow_col_secondPrizeDiv_size_small:attr.size==='small',luckyDrawShow_col_secondPrizeDiv_size_min:attr.size==='min',luckyDrawShow_col_secondPrizeDiv_checked:pvt_win.isChecked.secondPrizeDiv,luckyDrawShow_col_secondPrizeDiv_disable:attr.disabled}"
                 :style="pvt_win.style.secondPrizeDiv">

                <div class="luckyDrawShow_row luckyDrawShow_row_row5">
                    <div v-show="pvt_win.isShow.secondTitleDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_secondTitleDiv:true,luckyDrawShow_col_secondTitleDiv_size_large:attr.size==='large',luckyDrawShow_col_secondTitleDiv_size_medium:attr.size==='medium',luckyDrawShow_col_secondTitleDiv_size_small:attr.size==='small',luckyDrawShow_col_secondTitleDiv_size_min:attr.size==='min',luckyDrawShow_col_secondTitleDiv_checked:pvt_win.isChecked.secondTitleDiv,luckyDrawShow_col_secondTitleDiv_disable:attr.disabled}"
                         :style="pvt_win.style.secondTitleDiv">

                        <lm1a-link-text
                                ref="secondPrize"
                                refId="secondPrize"
                                v-show="pvt_isShow.secondTitleDiv === 'secondPrize'"
                                :paraVarPair="pvt_secondTitleDiv.secondPrize.paraVarPair"
                                :para="pvt_secondTitleDiv.secondPrize.para"
                                :attr="pvt_secondTitleDiv.secondPrize.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="lucky-draw-s-loop-two">
                    <div ref="luckyDrawSLoop2" class="lucky-draw-s-loop-scroll">
                        <luckyDrawShowLoop ref="luckyDrawSLoop" v-for="item in luck[1]"
                                           :para="item"></luckyDrawShowLoop>
                        <luckyDrawShowLoop v-if="luck[1].length > 3" ref="luckyDrawSLoop"
                                           v-for="item in luck[1].slice(0, 3)" :para="item"></luckyDrawShowLoop>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckyDrawShow_row luckyDrawShow_row_row2">
            <div v-show="pvt_win.isShow.thirdPrizeDiv"
                 :class="{luckyDrawShow_col:true,luckyDrawShow_col_thirdPrizeDiv:true,luckyDrawShow_col_thirdPrizeDiv_size_large:attr.size==='large',luckyDrawShow_col_thirdPrizeDiv_size_medium:attr.size==='medium',luckyDrawShow_col_thirdPrizeDiv_size_small:attr.size==='small',luckyDrawShow_col_thirdPrizeDiv_size_min:attr.size==='min',luckyDrawShow_col_thirdPrizeDiv_checked:pvt_win.isChecked.thirdPrizeDiv,luckyDrawShow_col_thirdPrizeDiv_disable:attr.disabled}"
                 :style="pvt_win.style.thirdPrizeDiv">

                <div class="luckyDrawShow_row luckyDrawShow_row_row9">
                    <div v-show="pvt_win.isShow.thirdTitleDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_thirdTitleDiv:true,luckyDrawShow_col_thirdTitleDiv_size_large:attr.size==='large',luckyDrawShow_col_thirdTitleDiv_size_medium:attr.size==='medium',luckyDrawShow_col_thirdTitleDiv_size_small:attr.size==='small',luckyDrawShow_col_thirdTitleDiv_size_min:attr.size==='min',luckyDrawShow_col_thirdTitleDiv_checked:pvt_win.isChecked.thirdTitleDiv,luckyDrawShow_col_thirdTitleDiv_disable:attr.disabled}"
                         :style="pvt_win.style.thirdTitleDiv">

                        <lm1a-link-text
                                ref="thirdPrize"
                                refId="thirdPrize"
                                :paraVarPair="pvt_thirdTitleDiv.thirdPrize.paraVarPair"
                                :para="pvt_thirdTitleDiv.thirdPrize.para"
                                :attr="pvt_thirdTitleDiv.thirdPrize.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="lucky-draw-s-loop-three">
                    <div ref="luckyDrawSLoop3" class="lucky-draw-s-loop-scroll">
                        <luckyDrawShowLoop ref="luckyDrawSLoop" v-for="item in luck[2]"
                                           :para="item"></luckyDrawShowLoop>
                        <luckyDrawShowLoop v-if="luck[2].length > 5" ref="luckyDrawSLoop"
                                           v-for="item in luck[2].slice(0, 5)" :para="item"></luckyDrawShowLoop>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import luckyDrawShowLoop from "./luckyDrawShowLoop";

    export default {
        components: {luckyDrawShowLoop: luckyDrawShowLoop},
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
            paraVarPair: Object,
            number: Number,
        },
        data: function () {
            return {
                mac: mac.mac,
                eventInputResult: this.para.eventInputResult,
                pvt_subModuleMap: {
                    vessel: ['firstTitleDiv', 'secondTitleDiv', 'thirdTitleDiv', 'userOneNameDiv', 'userTwoNameDiv', 'userThreeName', 'userFourNameDiv', 'userFiveNameDiv', 'userSixNameDiv', 'userOneImageDiv', 'userTwoImageDiv', 'userThreeImageDiv', 'userFourImageDiv', 'userFiveImageDiv', 'userSixImageDiv'],
                    subModule: ['firstPrize', 'secondPrize', 'thirdPrize', 'userOneName', 'userTwoName', 'userThreeName', 'userFourName', 'userFiveName', 'userSixName', 'userOneImage', 'userTwoImage', 'userThreeImage', 'userFourImage', 'userFiveImage', 'userSixImage'],
                },
                pvt_isShow: {
                    firstTitleDiv: null,
                    secondTitleDiv: null,
                    thirdTitleDiv: null,
                    userOneNameDiv: null,
                    userTwoNameDiv: null,
                    userThreeName: null,
                    userFourNameDiv: null,
                    userFiveNameDiv: null,
                    userSixNameDiv: null,
                    userOneImageDiv: null,
                    userTwoImageDiv: null,
                    userThreeImageDiv: null,
                    userFourImageDiv: null,
                    userFiveImageDiv: null,
                    userSixImageDiv: null,
                },
                pvt_win: {
                    isShow: {
                        luckyDrawShowWindow: true,
                        firstPrizeDiv: true,
                        secondPrizeDiv: true,
                        thirdPrizeDiv: true,
                        firstTitleDiv: true,
                        secondTitleDiv: true,
                        thirdTitleDiv: true,
                        fixedDiv: true,
                        userOneImageDiv: true,
                        userOneNameDiv: true,
                        fixed2Div: true,
                        userTwoImageDiv: true,
                        userTwoNameDiv: true,
                        fixed3Div: true,
                        userThreeImageDiv: true,
                        userThreeName: true,
                        fixed4Div: true,
                        userFourImageDiv: true,
                        userFourNameDiv: true,
                        fixed5Div: true,
                        userFiveImageDiv: true,
                        userFiveNameDiv: true,
                        fixed6Div: true,
                        userSixImageDiv: true,
                        userSixNameDiv: true,
                    },
                    isChecked: {
                        luckyDrawShowWindow: false,
                        firstPrizeDiv: false,
                        secondPrizeDiv: false,
                        thirdPrizeDiv: false,
                        firstTitleDiv: false,
                        secondTitleDiv: false,
                        thirdTitleDiv: false,
                        fixedDiv: false,
                        userOneImageDiv: false,
                        userOneNameDiv: false,
                        fixed2Div: false,
                        userTwoImageDiv: false,
                        userTwoNameDiv: false,
                        fixed3Div: false,
                        userThreeImageDiv: false,
                        userThreeName: false,
                        fixed4Div: false,
                        userFourImageDiv: false,
                        userFourNameDiv: false,
                        fixed5Div: false,
                        userFiveImageDiv: false,
                        userFiveNameDiv: false,
                        fixed6Div: false,
                        userSixImageDiv: false,
                        userSixNameDiv: false,
                    },
                    style: {
                        luckyDrawShowWindow: null,
                        firstPrizeDiv: null,
                        secondPrizeDiv: null,
                        thirdPrizeDiv: null,
                        firstTitleDiv: null,
                        secondTitleDiv: null,
                        thirdTitleDiv: null,
                        fixedDiv: null,
                        userOneImageDiv: null,
                        userOneNameDiv: null,
                        fixed2Div: null,
                        userTwoImageDiv: null,
                        userTwoNameDiv: null,
                        fixed3Div: null,
                        userThreeImageDiv: null,
                        userThreeName: null,
                        fixed4Div: null,
                        userFourImageDiv: null,
                        userFourNameDiv: null,
                        fixed5Div: null,
                        userFiveImageDiv: null,
                        userFiveNameDiv: null,
                        fixed6Div: null,
                        userSixImageDiv: null,
                        userSixNameDiv: null,
                    },
                },
                pvt_eventPortInput: [],
                userOneIcon: null,
                userOneNickname: null,
                userTwoIcon: null,
                userTwoNickname: null,
                userThreeIcon: null,
                userThreeNickname: null,
                userFourIcon: null,
                userFourNickname: null,
                userFiveIcon: null,
                userFiveNickname: null,
                userSixIcon: null,
                userSixNickname: null,

                luck: [[], [], []]
            };
        },
        watch: {
            eventInputResult: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.eventInputResult) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.eventInputResult][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.eventInputResult] = val
                        }
                    }
                },
                deep: true
            },
        },
        computed: {
            pvt_firstTitleDiv: function () {
                return {
                    firstPrize: {
                        paraVarPair: {},
                        para: {
                            textData: '一等奖中奖名单',
                        },
                        attr: {
                            label: 'p',
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#FFFFFF',
                            fontSize: '30px'
                        },
                    },
                };
            },
            pvt_secondTitleDiv: function () {
                return {
                    secondPrize: {
                        paraVarPair: {},
                        para: {
                            textData: '二等奖中奖名单',
                        },
                        attr: {
                            label: 'p',
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#FFFFFF',
                            fontSize: '30px',
                        },
                    },
                };
            },
            pvt_thirdTitleDiv: function () {
                return {
                    thirdPrize: {
                        paraVarPair: {},
                        para: {
                            textData: '三等奖中奖名单',
                        },
                        attr: {
                            label: 'p',
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#FFFFFF',
                            fontSize: '30px',
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
            strConversion: function (str) {//超过13个字符的转换表示
                let isTrue = str == null;
                switch (isTrue) {
                    case true:
                        return str;
                        break;
                    case false:
                        if (str.length < 13) {
                            return str;
                        } else {
                            var i = '';
                            i = str.substring(0, 11) + '****' + str.substring(str.length - 1);
                            return i;
                        }
                        break;
                }
            },
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
                let i;
                let ref = {
                    sm1: 'firstPrize',
                    sm2: 'secondPrize',
                    sm3: 'thirdPrize',
                    sm16: 'luckyDrawSLoop',
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
                            if ($this.luck[0].length === 0 && !$this.flag_) {
                                $this.flag_ = true;
                                para.nStep = "recordQuery_luck";
                            } else {
                                para.eventInputResult = $this.para.eventInputResult;
                                para.nStep = "loopClass";
                            }
                            dbFlag++;
                            break;
                        case "recordQuery_luck":
                            let dbData = {};
                            $this.sys.recordQuery_($this.mac.tb.lucky, null, null, dbData, function () {
                                para.eventInputResult = {
                                    class: dbData[$this.mac.fd.lucky.class],
                                    headShotUrl: dbData[$this.mac.fd.lucky.head_shot],
                                    nickName: dbData[$this.mac.fd.lucky.nick_name]
                                };
                                para.nStep = 'loopClass';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case "loopClass":
                            // $this.luck = [[], [], []];
                            // if(!$this.para.eventInputResult) {
                            //     $this.para.eventInputResult = {
                            //         class: [],
                            //         headShotUrl: [],
                            //         nickName: []
                            //     }
                            // }
                            let className = para.eventInputResult.class;
                            for (i in className) {
                                let item = {
                                    name: $this.strConversion(para.eventInputResult.nickName[i]),
                                    para: {
                                        image: [para.eventInputResult.headShotUrl[i]],
                                    },
                                    attr: {
                                        fit: 'fill',
                                    }
                                };
                                if (className[i] == 3) continue;
                                $this.luck[className[i]].push(item);
                                // if (className[i] == 0) {
                                //     // para.userOneNickname = $this.para.eventInputResult.nickName[i];
                                //     // para.userOneIcon = $this.para.eventInputResult.headShotUrl[i];
                                // } else if (className[i] == 1) {
                                //     // b.push($this.para.eventInputResult.nickName[i]);
                                //     // c.push($this.para.eventInputResult.headShotUrl[i]);
                                // } else {
                                //     // d.push($this.para.eventInputResult.nickName[i]);
                                //     // e.push($this.para.eventInputResult.headShotUrl[i]);
                                // }
                            }
                            para.nStep = 'showSubModule';
                            ++dbFlag;
                            break;
                        case 'showSubModule':
                            $this.showSubModule([ref.sm1, ref.sm2, ref.sm3,], true, function () {
                                para.nStep = 'forceUpdateData';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case'forceUpdateData':
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule1';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case'startModule1':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case'startModule2':
                            $this.sm[ref.sm2].startModule(function () {
                                para.nStep = 'startModule3';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case'startModule3':
                            $this.sm[ref.sm3].startModule(function () {
                                // para.nStep = 'startModule4';
                                if ($this.$refs[ref.sm16]) {
                                 para.nStep = 'startModule16';
                                } else {
                                    para.nStep = 'end';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case'startModule16':
                            $this.$nextTick(function () {
                                for (let i = 0; i < $this.$refs[ref.sm16].length; i++) {
                                    $this.$refs[ref.sm16][i].startModule();
                                }
                                para.nStep = "setLoop";
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case "setLoop":
                            clearInterval($this.interval1);
                            clearInterval($this.interval2);
                            $this.$nextTick(function () {
                                let colH = $this.$refs.luckyDrawSLoop[0].$el.offsetHeight;
                                if ($this.luck[1].length > 3) {
                                    if (!$this.top1) $this.top1 = 0;
                                    $this.interval1 = setInterval(function () {
                                        if ($this.luck[1].length * colH === -$this.top1) {
                                            $this.top1 = 0;
                                        } else {
                                            $this.top1 -= 1;
                                        }
                                        if ($this.$refs.luckyDrawSLoop2.style)$this.$refs.luckyDrawSLoop2.style.top = $this.top1 + "px";
                                    }, 10);
                                }
                                if ($this.luck[2].length > 5) {
                                    if (!$this.top2) $this.top2 = 0;
                                    $this.interval2 = setInterval(function () {
                                        if ($this.luck[2].length * colH === -$this.top2) {
                                            $this.top2 = 0;
                                        } else {
                                            $this.top2 -= 1;
                                        }
                                        if ($this.$refs.luckyDrawSLoop3.style)$this.$refs.luckyDrawSLoop3.style.top = $this.top2 + "px";
                                    }, 10);
                                }
                                para.nStep = "end";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            });
                        case'end':
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
    }
    ;
</script>
<style lang="scss" scoped>
    /*@import "../assets/zhl-style.scss";*/

    .luckyDrawShow_container {
        width: 100%;
        height: 100%;
    }

    .luckyDrawShow_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .luckyDrawShow_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .luckyDrawShow_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .luckyDrawShow_row {
        display: flex;
    }

    .luckyDrawShow_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .luckyDrawShow_col_luckyDrawShowWindow_size_medium {
        //width: $luckyDrawShow-luckyDrawShowWindow-medium-width;
        width: 630px;
        justify-content: $luckyDrawShow-luckyDrawShowWindow-medium-vertical-position;
        height: 100%;
    }

    .luckyDrawShow_col_firstPrizeDiv_size_medium {
        width: $luckyDrawShow-firstPrizeDiv-medium-width;
        //padding: $luckyDrawShow-firstPrizeDiv-medium-padding;
        padding: 0 10px 10px;
    }

    .luckyDrawShow_col_firstPrizeDiv {
        background-color: mix($luckyDrawShow-firstPrizeDiv-background-color, #fff, $luckyDrawShow-firstPrizeDiv-background-color-opacity);
        border-style: $luckyDrawShow-firstPrizeDiv-border-style;
        border-width: $luckyDrawShow-firstPrizeDiv-border-width;
        border-radius: $luckyDrawShow-firstPrizeDiv-border-radius;
        border-color: mix($luckyDrawShow-firstPrizeDiv-border-color, #fff, $luckyDrawShow-firstPrizeDiv-hover-border-color-opacity);
    }

    .luckyDrawShow_col_secondPrizeDiv_size_medium {
        width: $luckyDrawShow-secondPrizeDiv-medium-width;
        margin: $luckyDrawShow-secondPrizeDiv-medium-margin;
        //padding: $luckyDrawShow-secondPrizeDiv-medium-padding;
        padding: 0px 10px 10px;
    }

    .luckyDrawShow_col_secondPrizeDiv {
        background-color: mix($luckyDrawShow-secondPrizeDiv-background-color, #fff, $luckyDrawShow-secondPrizeDiv-background-color-opacity);
        border-style: $luckyDrawShow-secondPrizeDiv-border-style;
        border-width: $luckyDrawShow-secondPrizeDiv-border-width;
        border-radius: $luckyDrawShow-secondPrizeDiv-border-radius;
        border-color: mix($luckyDrawShow-secondPrizeDiv-border-color, #fff, $luckyDrawShow-secondPrizeDiv-hover-border-color-opacity);
    }

    .luckyDrawShow_col_thirdPrizeDiv_size_medium {
        width: $luckyDrawShow-thirdPrizeDiv-medium-width;
        //padding: $luckyDrawShow-thirdPrizeDiv-medium-padding;
        padding: 0 10px 10px;
    }

    .luckyDrawShow_col_thirdPrizeDiv {
        background-color: mix($luckyDrawShow-thirdPrizeDiv-background-color, #fff, $luckyDrawShow-thirdPrizeDiv-background-color-opacity);
        border-color: mix($luckyDrawShow-thirdPrizeDiv-border-color, #fff, $luckyDrawShow-thirdPrizeDiv-hover-border-color-opacity);
        border-radius: $luckyDrawShow-thirdPrizeDiv-border-radius;
        border-width: $luckyDrawShow-thirdPrizeDiv-border-width;
        border-style: $luckyDrawShow-thirdPrizeDiv-border-style;
    }

    .luckyDrawShow_col_firstTitleDiv_size_medium {
        width: $luckyDrawShow-firstTitleDiv-medium-width;
        align-items: $luckyDrawShow-firstTitleDiv-medium-horizontal-position;
        line-height: 50px;
    }

    .luckyDrawShow_col_secondTitleDiv_size_medium {
        width: $luckyDrawShow-secondTitleDiv-medium-width;
        align-items: $luckyDrawShow-secondTitleDiv-medium-horizontal-position;
        line-height: 50px;
    }

    .luckyDrawShow_col_thirdTitleDiv_size_medium {
        width: $luckyDrawShow-thirdTitleDiv-medium-width;
        align-items: $luckyDrawShow-thirdTitleDiv-medium-horizontal-position;
        line-height: 50px;
    }

    .luckyDrawShow_col_fixedDiv_size_medium {
        width: $luckyDrawShow-fixedDiv-medium-width;
    }

    .luckyDrawShow_col_fixedDiv {
        background-color: mix($luckyDrawShow-fixedDiv-background-color, #fff, $luckyDrawShow-fixedDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userOneImageDiv_size_medium {
        width: $luckyDrawShow-userOneImageDiv-medium-width;
        height: $luckyDrawShow-userOneImageDiv-medium-height;
        padding: $luckyDrawShow-userOneImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userOneImageDiv {
        background-color: mix($luckyDrawShow-userOneImageDiv-background-color, #fff, $luckyDrawShow-userOneImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userOneNameDiv_size_medium {
        width: $luckyDrawShow-userOneNameDiv-medium-width;
        height: $luckyDrawShow-userOneNameDiv-medium-height;
        justify-content: $luckyDrawShow-userOneNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userOneNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userOneNameDiv {
        background-color: mix($luckyDrawShow-userOneNameDiv-background-color, #fff, $luckyDrawShow-userOneNameDiv-background-color-opacity);
    }

    .luckyDrawShow_col_fixed2Div_size_medium {
        width: $luckyDrawShow-fixed2Div-medium-width;
    }

    .luckyDrawShow_col_fixed2Div {
        background-color: mix($luckyDrawShow-fixed2Div-background-color, #fff, $luckyDrawShow-fixed2Div-background-color-opacity);
    }

    .luckyDrawShow_col_userTwoImageDiv_size_medium {
        width: $luckyDrawShow-userTwoImageDiv-medium-width;
        height: $luckyDrawShow-userTwoImageDiv-medium-height;
        padding: $luckyDrawShow-userTwoImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userTwoImageDiv {
        background-color: mix($luckyDrawShow-userTwoImageDiv-background-color, #fff, $luckyDrawShow-userTwoImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userTwoNameDiv_size_medium {
        width: $luckyDrawShow-userTwoNameDiv-medium-width;
        height: $luckyDrawShow-userTwoNameDiv-medium-height;
        justify-content: $luckyDrawShow-userTwoNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userTwoNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userTwoNameDiv {
        background-color: mix($luckyDrawShow-userTwoNameDiv-background-color, #fff, $luckyDrawShow-userTwoNameDiv-background-color-opacity);
    }

    .luckyDrawShow_col_fixed3Div_size_medium {
        width: $luckyDrawShow-fixed3Div-medium-width;
    }

    .luckyDrawShow_col_fixed3Div {
        background-color: mix($luckyDrawShow-fixed3Div-background-color, #fff, $luckyDrawShow-fixed3Div-background-color-opacity);
    }

    .luckyDrawShow_col_userThreeImageDiv_size_medium {
        width: $luckyDrawShow-userThreeImageDiv-medium-width;
        height: $luckyDrawShow-userThreeImageDiv-medium-height;
        padding: $luckyDrawShow-userThreeImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userThreeImageDiv {
        background-color: mix($luckyDrawShow-userThreeImageDiv-background-color, #fff, $luckyDrawShow-userThreeImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userThreeName_size_medium {
        width: $luckyDrawShow-userThreeName-medium-width;
        height: $luckyDrawShow-userThreeName-medium-height;
        justify-content: $luckyDrawShow-userThreeName-medium-vertical-position;
        padding: $luckyDrawShow-userThreeName-medium-padding;
    }

    .luckyDrawShow_col_userThreeName {
        background-color: mix($luckyDrawShow-userThreeName-background-color, #fff, $luckyDrawShow-userThreeName-background-color-opacity);
    }

    .luckyDrawShow_col_fixed4Div_size_medium {
        width: $luckyDrawShow-fixed4Div-medium-width;
    }

    .luckyDrawShow_col_fixed4Div {
        background-color: mix($luckyDrawShow-fixed4Div-background-color, #fff, $luckyDrawShow-fixed4Div-background-color-opacity);
    }

    .luckyDrawShow_col_userFourImageDiv_size_medium {
        width: $luckyDrawShow-userFourImageDiv-medium-width;
        height: $luckyDrawShow-userFourImageDiv-medium-height;
        padding: $luckyDrawShow-userFourImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userFourImageDiv {
        background-color: mix($luckyDrawShow-userFourImageDiv-background-color, #fff, $luckyDrawShow-userFourImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userFourNameDiv_size_medium {
        width: $luckyDrawShow-userFourNameDiv-medium-width;
        height: $luckyDrawShow-userFourNameDiv-medium-height;
        justify-content: $luckyDrawShow-userFourNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userFourNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userFourNameDiv {
        background-color: mix($luckyDrawShow-userFourNameDiv-background-color, #fff, $luckyDrawShow-userFourNameDiv-background-color-opacity);
    }

    .luckyDrawShow_col_fixed5Div_size_medium {
        width: $luckyDrawShow-fixed5Div-medium-width;
    }

    .luckyDrawShow_col_fixed5Div {
        background-color: mix($luckyDrawShow-fixed5Div-background-color, #fff, $luckyDrawShow-fixed5Div-background-color-opacity);
    }

    .luckyDrawShow_col_userFiveImageDiv_size_medium {
        width: $luckyDrawShow-userFiveImageDiv-medium-width;
        height: $luckyDrawShow-userFiveImageDiv-medium-height;
        padding: $luckyDrawShow-userFiveImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userFiveImageDiv {
        background-color: mix($luckyDrawShow-userFiveImageDiv-background-color, #fff, $luckyDrawShow-userFiveImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userFiveNameDiv_size_medium {
        width: $luckyDrawShow-userFiveNameDiv-medium-width;
        height: $luckyDrawShow-userFiveNameDiv-medium-height;
        justify-content: $luckyDrawShow-userFiveNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userFiveNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userFiveNameDiv {
        background-color: mix($luckyDrawShow-userFiveNameDiv-background-color, #fff, $luckyDrawShow-userFiveNameDiv-background-color-opacity);
    }

    .luckyDrawShow_col_fixed6Div_size_medium {
        width: $luckyDrawShow-fixed6Div-medium-width;
    }

    .luckyDrawShow_col_fixed6Div {
        background-color: mix($luckyDrawShow-fixed6Div-background-color, #fff, $luckyDrawShow-fixed6Div-background-color-opacity);
    }

    .luckyDrawShow_col_userSixImageDiv_size_medium {
        width: $luckyDrawShow-userSixImageDiv-medium-width;
        height: $luckyDrawShow-userSixImageDiv-medium-height;
        padding: $luckyDrawShow-userSixImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userSixImageDiv {
        background-color: mix($luckyDrawShow-userSixImageDiv-background-color, #fff, $luckyDrawShow-userSixImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userSixNameDiv_size_medium {
        width: $luckyDrawShow-userSixNameDiv-medium-width;
        height: $luckyDrawShow-userSixNameDiv-medium-height;
        justify-content: $luckyDrawShow-userSixNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userSixNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userSixNameDiv {
        background-color: mix($luckyDrawShow-userSixNameDiv-background-color, #fff, $luckyDrawShow-userSixNameDiv-background-color-opacity);
    }

    .lucky-draw-s-loop-one, .lucky-draw-s-loop-two, .lucky-draw-s-loop-three {
        overflow: hidden;
        background-color: #fff8da;
        position: relative;
    }

    .lucky-draw-s-loop-one {
        height: 74px;
    }

    .lucky-draw-s-loop-two {
        height: 202px;
    }

    .lucky-draw-s-loop-three {
        height: 334px;
    }

    .lucky-draw-s-loop-scroll {
        position: absolute;
        width: 100%;
        /*height: 100%;*/
        /*padding: 0 20px 20px 0;*/
        /*overflow: auto;*/
    }
</style>
