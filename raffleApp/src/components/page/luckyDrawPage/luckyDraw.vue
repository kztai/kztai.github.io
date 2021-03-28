<template>
    <div v-show="pvt_win.isShow.luckyDrawWindow"
         :class="{luckyDraw_container:true,luckyDraw_col:true,luckyDraw_col_luckyDrawWindow:true,luckyDraw_col_luckyDrawWindow_size_large:attr.size==='large',luckyDraw_col_luckyDrawWindow_size_medium:attr.size==='medium',luckyDraw_col_luckyDrawWindow_size_small:attr.size==='small',luckyDraw_col_luckyDrawWindow_size_min:attr.size==='min',luckyDraw_col_luckyDrawWindow_checked:pvt_win.isChecked.luckyDrawWindow,luckyDraw_col_luckyDrawWindow_disable:attr.disabled}"
         :style="pvt_win.style.luckyDrawWindow">

        <lucky-draw-home-page
                ref="firstComp"
                refId="firstComp"
                v-show="pvt_isShow.luckyDrawWindow === 'firstComp'"
                :paraVarPair="pvt_luckyDrawWindow.firstComp.paraVarPair"
                :para="pvt_luckyDrawWindow.firstComp.para"
                :attr="pvt_luckyDrawWindow.firstComp.attr">
        </lucky-draw-home-page>
        <countdown
                ref="secondComp"
                refId="secondComp"
                v-show="pvt_isShow.luckyDrawWindow === 'secondComp'"
                :paraVarPair="pvt_luckyDrawWindow.secondComp.paraVarPair"
                :para="pvt_luckyDrawWindow.secondComp.para"
                :attr="pvt_luckyDrawWindow.secondComp.attr">
        </countdown>
        <to-lucky-draw
                ref="thirdComp"
                refId="thirdComp"
                v-show="pvt_isShow.luckyDrawWindow === 'thirdComp'"
                :paraVarPair="pvt_luckyDrawWindow.thirdComp.paraVarPair"
                :para="pvt_luckyDrawWindow.thirdComp.para"
                :attr="pvt_luckyDrawWindow.thirdComp.attr">
        </to-lucky-draw>
        <lucky-draw-show
                ref="fourthComp"
                refId="fourthComp"
                v-show="pvt_isShow.luckyDrawWindow === 'fourthComp'"
                :paraVarPair="pvt_luckyDrawWindow.fourthComp.paraVarPair"
                :para="pvt_luckyDrawWindow.fourthComp.para"
                :attr="pvt_luckyDrawWindow.fourthComp.attr">
        </lucky-draw-show>

    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import geneEvent from "../../../../public/jsFile/4";
    import dbCloudGeneID from "../../../../public/jsFile/db_cloud_module";
    import geneObj from "../../../../public/jsFile/db_4";
    import luckyDrawShow from './luckyDrawShow.vue';
    import toLuckyDraw from './toLuckyDraw.vue';
    import countdown from './countdown.vue';
    import luckyDrawHomePage from './luckyDrawHomePage.vue';

    export default {
        components: {luckyDrawHomePage, countdown, toLuckyDraw, luckyDrawShow},
        inject: ["mac", "pageCtrl"],
        provide: function () {
            return {
                sys: this.$apiDB
            };
        },
        props: {
            refId: String,
            para: Object,
            inPara: Object,
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
                mac: mac.mac,
                pageTimer: null,
                pvt_subModuleMap: {
                    vessel: ['luckyDrawWindow', 'luckyDrawWindow', 'luckyDrawWindow', 'luckyDrawWindow'],
                    subModule: ['firstComp', 'secondComp', 'thirdComp', 'fourthComp'],
                },
                pvt_isShow: {
                    luckyDrawWindow: null,
                },
                pvt_win: {
                    isShow: {
                        luckyDrawWindow: true,
                    },
                    isChecked: {
                        luckyDrawWindow: false,
                    },
                    style: {
                        luckyDrawWindow: null,
                    },
                },
                pvt_eventPortInput: ['raffleStartIn', 'raffleEndIn'],
                userIcon: null,
                userName: null,
                eventInputResult :null,
                // eventInputResult: {
                //     nickName: ['蒙杰蒙杰蒙杰蒙杰蒙杰蒙杰蒙杰蒙杰蒙杰蒙杰蒙杰蒙杰1', 'bjdshkhasdkfksjdhfkjshfkjsfhkjkhc2', '蒙杰3', '蒙杰4', '蒙杰5', '蒙杰6', '蒙杰7', '蒙杰8', '蒙杰9', '蒙杰10', '蒙杰11', '蒙杰12'],
                //     headShotUrl: new Array(12).fill(["https://thirdwx.qlogo.cn/mmopen/vi_32/59jYzxzCWwJCkhChNw9pNoXw3RJkxGj1Qcd42FjEJquict535LQ3iaPibsIkrkGf4oeSnpEsOKJvJYiagzXDUjHotQ/132"]),
                //     class: [0, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2]
                // },
            };
        },
        watch: {
            inPara: {
                handler: function () {
                    let $this = this;
                    $this.$gene = 4;//jasonlgb
                    for (let i in geneObj) {
                        $this[i] = geneObj[i];
                    }
                    $this.$r_db = geneObj.geneDB;
                    $this.$c_db_module = dbCloudGeneID;
                    $this.$gene_data = geneObj.geneData;
                    for (let i in geneEvent) {
                        $this[i] = geneEvent[i];
                    }
                    if (!$this.pageCtrl.pageCtrlHandle) {
                        $this.pageCtrl.pageCtrlHandle = new $CPageCtrl($this);
                    }
                    $this.pageCtrl.pageCtrlHandle.vueObj = $this;
                    $this.pageCtrl.pageCtrlHandle.pageStart(function () {
                        console.log("页面P1启动成功~");
                        $this.sys = $this.$apiDB;
                    }, function (error) {
                        console.error(error);
                    });
                },
                deep: true,
                immediate: true
            }
        },
        computed: {
            pvt_luckyDrawWindow: function () {
                return {
                    firstComp: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        },
                    },
                    secondComp: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        },
                    },
                    thirdComp: {
                        paraVarPair: {
                            eventInputResult: 'eventInputResult' // todo kzt
                        },
                        para: {
                            eventInputResult: this.eventInputResult,
                        },
                        attr: {
                            size: 'medium'
                        },
                    },
                    fourthComp: {
                        paraVarPair: {
                            eventInputResult: 'eventInputResult' // todo kzt
                        },
                        para: {
                            eventInputResult: this.eventInputResult,
                        },
                        attr: {
                            size: 'medium'
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
            eventInput_issueIn: function () {
                this.$apiDB.eventInput("issueIn", [], function () {
                    console.log("issueIn输入成功");
                }, function (error) {
                    console.error(error);
                });
            },

            recordNew: function () {
                this.recordNew_(function () {
                    console.log("recordNew成功");
                }, function (error) {
                    console.error(error);
                });
            },

            dataOutput: function () {
                this.dataOutput_(function () {
                    console.log("dataOutput成功");
                }, function (error) {
                    console.error(error);
                });
            },
            prizeShowOut: function (openId, successCallBack, errorCallBack) {
                this.sm.thirdComp.prizeShowOut(openId);
                successCallBack(1);
            },
            compShow: function (v1) {
                var $this = this;
                let ref = {sm1: v1};
                $this.showSubModule([v1], true, function () {
                    $this.sm[ref.sm1].startModule(function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            firstComp_lotteryBeganEvent: function (id) {
                var $this = this;
                this.compShow('secondComp');
                this.sm.secondComp.timerSwitch();
                $this.$apiDB.eventInput("raffleStartIn", [], function (result) {
                    console.log('活动状态改为进行中成功');
                }, function (error) {
                    console.error(error);
                });

                setTimeout(function () {
                    $this.compShow('thirdComp');
                    $this.pageTimer = setInterval(() => {
                    $this.$apiDB.eventInput("raffleStartIn", [], function (result) {
                        if (!result[0] || (result[0] && result[0].class.filter(v => v != 3).length === 0)) {
                            return
                            // result = [{
                            //     class: [],
                            //     headShotUrl: [],
                            //     nickName: []
                            // }]
                        }
                        $this.eventInputResult = result[0];
                        $this.forceUpdateData(function () {
                            $this.compShow('thirdComp');
                        });
                        console.log('raffleStartIn事件发送成功');
                    }, function () {
                        console.log('raffleStartIn事件发送失败');
                    });
                }, 2000);
                }, 3000);
            },
            thirdComp_lotteryEndEvent: function (id) {
                let that = this;
                clearInterval(that.pageTimer);
                this.$apiDB.eventInput("raffleEndIn", [id], function () {
                    console.warn('raffleEndIn事件发送成功');
                }, function (error) {
                    console.error(error);
                    console.error('raffleEndIn事件发送失败');
                });
                // 下载数据
                this.compShow('fourthComp');
            },
        },
    };
</script>
<style lang="scss" scoped>
    /*@import "../../../assets/zhl-style.scss";*/

    .luckyDraw_container {
        width: 100%;
        height: 100%;
    }

    .luckyDraw_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .luckyDraw_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .luckyDraw_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .luckyDraw_row {
        display: flex;
    }

    .luckyDraw_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .luckyDraw_col_luckyDrawWindow_size_medium {
        width: $luckyDraw-luckyDrawWindow-medium-width;
        height: $luckyDraw-luckyDrawWindow-medium-height;
        align-items: $luckyDraw-luckyDrawWindow-medium-horizontal-position;
        justify-content: $luckyDraw-luckyDrawWindow-medium-vertical-position;;
        background-image: url("../../../assets/pageBackground.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

</style>
