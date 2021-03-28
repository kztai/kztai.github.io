<template>
    <div v-show="pvt_win.isShow.rafflePageWindow"
         :class="{rafflePage_container:true,rafflePage_col:true,rafflePage_col_rafflePageWindow:true,rafflePage_col_rafflePageWindow_size_large:attr.size==='large',rafflePage_col_rafflePageWindow_size_medium:attr.size==='medium',rafflePage_col_rafflePageWindow_size_small:attr.size==='small',rafflePage_col_rafflePageWindow_size_min:attr.size==='min',rafflePage_col_rafflePageWindow_checked:pvt_win.isChecked.rafflePageWindow,rafflePage_col_rafflePageWindow_disable:attr.disabled}"
         :style="pvt_win.style.rafflePageWindow" >

        <div class="rafflePage_row rafflePage_row_row0">
            <div v-show="pvt_win.isShow.titleImg"
                 :class="{rafflePage_col:true,rafflePage_col_titleImg:true,rafflePage_col_titleImg_size_large:attr.size==='large',rafflePage_col_titleImg_size_medium:attr.size==='medium',rafflePage_col_titleImg_size_small:attr.size==='small',rafflePage_col_titleImg_size_min:attr.size==='min',rafflePage_col_titleImg_checked:pvt_win.isChecked.titleImg,rafflePage_col_titleImg_disable:attr.disabled}"
                 :style="pvt_win.style.titleImg" >
                <img
                        src="../../../assets/02主题.png" alt=""
                        ref="titleImgRef"
                        refId="titleImgRef"
                        v-show="pvt_isShow.titleImg === 'titleImgRef'">
            </div>
        </div>
        <div class="rafflePage_row rafflePage_row_row8">
            <div v-show="pvt_win.isShow.raffleSudoku"
                 :class="{rafflePage_col:true,rafflePage_col_raffleSudoku:true,rafflePage_col_raffleSudoku_size_large:attr.size==='large',rafflePage_col_raffleSudoku_size_medium:attr.size==='medium',rafflePage_col_raffleSudoku_size_small:attr.size==='small',rafflePage_col_raffleSudoku_size_min:attr.size==='min',rafflePage_col_raffleSudoku_checked:pvt_win.isChecked.raffleSudoku,rafflePage_col_raffleSudoku_disable:attr.disabled}"
                 :style="pvt_win.style.raffleSudoku" >

                <raffle_sudoku
                        ref="raffleSudokuRef"
                        refId="raffleSudokuRef"
                        v-show="pvt_isShow.raffleSudoku === 'raffleSudokuRef'"
                        :paraVarPair="pvt_raffleSudoku.raffleSudokuRef.paraVarPair"
                        :para="pvt_raffleSudoku.raffleSudokuRef.para"
                        :attr="pvt_raffleSudoku.raffleSudokuRef.attr">
                </raffle_sudoku>
            </div>
        </div>
        <div class="rafflePage_row rafflePage_row_row2">
            <div v-show="pvt_win.isShow.chance"
                 :class="{rafflePage_col:true,rafflePage_col_chance:true,rafflePage_col_chance_size_large:attr.size==='large',rafflePage_col_chance_size_medium:attr.size==='medium',rafflePage_col_chance_size_small:attr.size==='small',rafflePage_col_chance_size_min:attr.size==='min',rafflePage_col_chance_checked:pvt_win.isChecked.chance,rafflePage_col_chance_disable:attr.disabled}"
                 :style="pvt_win.style.chance" >
                <div
                        style="color: #fff;"
                        ref="chanceRef"
                        refId="chanceRef"
                        v-show="pvt_isShow.chance === 'chanceRef'">
                    {{chanceText}}
                </div>
            </div>
        </div>
        <div class="rafflePage_row rafflePage_row_row3">
            <div v-show="pvt_win.isShow.raffleResult"
                 :class="{rafflePage_col:true,rafflePage_col_raffleResultOut:true,rafflePage_col_raffleResultOut_size_large:attr.size==='large',rafflePage_col_raffleResultOut_size_medium:attr.size==='medium',rafflePage_col_raffleResultOut_size_small:attr.size==='small',rafflePage_col_raffleResultOut_size_min:attr.size==='min',rafflePage_col_raffleResultOut_checked:pvt_win.isChecked.raffleResult,rafflePage_col_raffleResultOut_disable:attr.disabled}"
                 :style="pvt_win.style.raffleResult" >
                <div v-show="pvt_win.isShow.raffleResult"
                     :class="{rafflePage_col:true,rafflePage_col_raffleResult:true,rafflePage_col_raffleResult_size_large:attr.size==='large',rafflePage_col_raffleResult_size_medium:attr.size==='medium',rafflePage_col_raffleResult_size_small:attr.size==='small',rafflePage_col_raffleResult_size_min:attr.size==='min',rafflePage_col_raffleResult_checked:pvt_win.isChecked.raffleResult,rafflePage_col_raffleResult_disable:attr.disabled}"
                     :style="pvt_win.style.raffleResult" >

                    <div class="rafflePage_row rafflePage_row_row4">
                        <div v-show="pvt_win.isShow.recordText"
                             :class="{rafflePage_col:true,rafflePage_col_recordText:true,rafflePage_col_recordText_size_large:attr.size==='large',rafflePage_col_recordText_size_medium:attr.size==='medium',rafflePage_col_recordText_size_small:attr.size==='small',rafflePage_col_recordText_size_min:attr.size==='min',rafflePage_col_recordText_checked:pvt_win.isChecked.recordText,rafflePage_col_recordText_disable:attr.disabled}"
                             :style="pvt_win.style.recordText" >
                            <div
                                    style="color: mediumblue;"
                                    ref="recordTextRef"
                                    refId="recordTextRef"
                                    v-show="pvt_isShow.recordText === 'recordTextRef'">
                                我的中奖记录
                            </div>
                        </div>
                    </div>
                    <div class="rafflePage_row rafflePage_row_row5">
                        <div v-show="pvt_win.isShow.prizeImg"
                             :class="{rafflePage_col:true,rafflePage_col_prizeImg:true,rafflePage_col_prizeImg_size_large:attr.size==='large',rafflePage_col_prizeImg_size_medium:attr.size==='medium',rafflePage_col_prizeImg_size_small:attr.size==='small',rafflePage_col_prizeImg_size_min:attr.size==='min',rafflePage_col_prizeImg_checked:pvt_win.isChecked.prizeImg,rafflePage_col_prizeImg_disable:attr.disabled}"
                             :style="pvt_win.style.prizeImg" >
                            <img
                                    :src="prizeImg" alt=""
                                    ref="prizeImgRef"
                                    refId="prizeImgRef"
                                    v-show="pvt_isShow.prizeImg === 'prizeImgRef'">
                        </div>
                    </div>
                    <div class="rafflePage_row rafflePage_row_row6">
                        <div v-show="pvt_win.isShow.prizeName"
                             :class="{rafflePage_col:true,rafflePage_col_prizeName:true,rafflePage_col_prizeName_size_large:attr.size==='large',rafflePage_col_prizeName_size_medium:attr.size==='medium',rafflePage_col_prizeName_size_small:attr.size==='small',rafflePage_col_prizeName_size_min:attr.size==='min',rafflePage_col_prizeName_checked:pvt_win.isChecked.prizeName,rafflePage_col_prizeName_disable:attr.disabled}"
                             :style="pvt_win.style.prizeName" >
                            <div
                                    :style="{color: prizeColor}"
                                    ref="prizeNameRef"
                                    refId="prizeNameRef"
                                    v-show="pvt_isShow.prizeName === 'prizeNameRef'">
                                {{prizeName}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rafflePage_row rafflePage_row_row13">
            <div v-show="pvt_win.isShow.recordText"
                 :class="{rafflePage_col:true,rafflePage_col_bottomText:true,rafflePage_col_bottomText_size_large:attr.size==='large',rafflePage_col_bottomText_size_medium:attr.size==='medium',rafflePage_col_bottomText_size_small:attr.size==='small',rafflePage_col_bottomText_size_min:attr.size==='min',rafflePage_col_bottomText_checked:pvt_win.isChecked.recordText,rafflePage_col_bottomText_disable:attr.disabled}"
                 :style="pvt_win.style.recordText" >
                <div class="rafflePage_row rafflePage_row_row7">
                    <div v-show="pvt_win.isShow.raffleExplain"
                         :class="{rafflePage_col:true,rafflePage_col_raffleExplain:true,rafflePage_col_raffleExplain_size_large:attr.size==='large',rafflePage_col_raffleExplain_size_medium:attr.size==='medium',rafflePage_col_raffleExplain_size_small:attr.size==='small',rafflePage_col_raffleExplain_size_min:attr.size==='min',rafflePage_col_raffleExplain_checked:pvt_win.isChecked.raffleExplain,rafflePage_col_raffleExplain_disable:attr.disabled}"
                         :style="pvt_win.style.raffleExplain" >
                        <div
                                ref="prizeNameRef"
                                refId="prizeNameRef"
                                v-show="pvt_isShow.prizeName === 'prizeNameRef'">
                            <div style="font-size: 16px; font-weight: 700; margin: 10px 0; text-align: center; color: #fff;" class="raffleExplain">//////   活动说明    //////</div>
                            <div class="explainText">1.本抽奖活动仅发布会现场嘉宾参与有效；非现场人员参与视为无效抽奖，奖品不予发放；</div>
                            <div class="explainText">2.中奖者所得奖品待工作人员审核后发送；</div>
                            <div class="explainText">3.本次抽奖活动时间：2020.12.06；</div>
                            <div class="explainText">4.该活动最终解释权归深圳市瓴码云计算有限公司所有。</div>
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
    import geneEvent from "../../../../public/jsFile/13";
    import geneObj from "../../../../public/jsFile/db_13";
    import prizeImgDefault from "../../../assets/图层16.png";

    import dbCloudGeneID from "../../../../public/jsFile/db_cloud_module";
    import raffle_sudoku from '@/components/page/rafflePage/raffleSudoku';
    export default {
        components: {raffle_sudoku},
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
                    if(!val.size) val.size = 'medium';
                    return true;
                },
            },
            number: Number,
        },

        data: function() {
            return {
                mac: mac.mac,
                prizeColor: '#ccc',
                prizeName: '. 您还未抽奖 .',
                chanceText: '您有1次抽奖机会',
                openId: null,
                prizeImg: prizeImgDefault,

                pvt_subModuleMap: {
                    vessel:['titleImg','recordText','prizeImg','prizeName','raffleExplain','raffleSudoku','chance','explainText1','explainText2','explainText3','explainText4'],
                    subModule:['titleImgRef','recordTextRef','prizeImgRef','prizeNameRef','raffleExplainRef','raffleSudokuRef','chanceRef','explainText1Ref','explainText2Ref','explainText3Ref','explainText4Ref'],
                },
                pvt_isShow: {
                    titleImg:null,
                    recordText:null,
                    prizeImg:null,
                    prizeName:null,
                    raffleExplain:null,
                    raffleSudoku:null,
                    chance:null,
                    explainText1:null,
                    explainText2:null,
                    explainText3:null,
                    explainText4:null,
                },
                pvt_win:{
                    isShow:{
                        rafflePageWindow:true,
                        titleImg:true,
                        chance:true,
                        raffleResult:true,
                        recordText:true,
                        prizeImg:true,
                        prizeName:true,
                        raffleExplain:true,
                        raffleSudoku:true,
                        explainText1:true,
                        explainText2:true,
                        explainText3:true,
                        explainText4:true,
                    },
                    isChecked:{
                        rafflePageWindow:false,
                        titleImg:false,
                        chance:false,
                        raffleResult:false,
                        recordText:false,
                        prizeImg:false,
                        prizeName:false,
                        raffleExplain:false,
                        raffleSudoku:false,
                        explainText1:false,
                        explainText2:false,
                        explainText3:false,
                        explainText4:false,
                    },
                    style:{
                        rafflePageWindow:null,
                        titleImg:null,
                        chance:null,
                        raffleResult:null,
                        recordText:null,
                        prizeImg:null,
                        prizeName:null,
                        raffleExplain:null,
                        raffleSudoku:null,
                        explainText1:null,
                        explainText2:null,
                        explainText3:null,
                        explainText4:null,
                    },
                },
                pvt_eventPortInput: ['raffleIn'],

            };
        },
        watch: {
            inPara: {
                handler: function () {
                    let $this = this;
                    $this.$gene = 13;
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
                    }, function (error) {
                        console.error(error);
                    });
                },
                deep: true,
                immediate: true
            }
        },
        computed:{
            pvt_raffleSudoku:function(){
                return {
                    raffleSudokuRef:{
                        paraVarPair:{
                        },
                        para:{
                        },
                        attr:{
                            size:'medium',
                        },
                    },
                };
            },
        },
        created: function () {
            Object.assign(this, libSys,libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            raffleSudokuRef_raffleEndEvent:function(prizeInfo,successCallBack,errorCallBack){
                this.raffleConfirm(prizeInfo,successCallBack,errorCallBack);
            },
            raffleSudokuRef_raffleStartEvent:function(nickName,headShotUrl,openId,successCallBack,errorCallBack){
                this.$apiDB.eventInput("raffleIn", [nickName,headShotUrl,openId], successCallBack,errorCallBack);
            },
        },
    };
</script>
<style lang="less" scoped>
    .explainText {
        padding-bottom: 6px;
        color: #fff;
    }
    img {
        width:100%;
        height:100%;
    }

    .rafflePage_container {
        width:100%;
        height:100%;
        font-size: 14px;
    }
    .rafflePage_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .rafflePage_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .rafflePage_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .rafflePage_row {
        display:flex;
        width: 100%;
    }
    .rafflePage_row_row5 {
        width: 80px;
    }
    .rafflePage_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .rafflePage_col_rafflePageWindow_size_medium {
        width:100%;
        padding:20px;
        align-items:center;
        box-sizing: border-box;
        background-image:url('../../../assets/01背景.png');
        background-size: cover;
    }
    .rafflePage_col_titleImg_size_medium {
        width:100%;
        align-items:center;
        height:80px;
        margin:20px 0;
    }
    .rafflePage_col_chance_size_medium {
        width:100%;
        align-items:center;
        margin:10px 0;
    }
    .rafflePage_col_raffleResultOut_size_medium {
        width:100%;
        box-sizing: border-box;
        background-image:url('../../../assets/04中奖记录底框.png');
        background-size: 100% 100%;
        padding: 16px 0 10px 0;
        align-items:center;
    }
    .rafflePage_col_raffleResult_size_medium {
        align-items:center;
    }
    .rafflePage_col_recordText_size_medium {
        width:100%;
        align-items:center;
    }
    .rafflePage_col_prizeImg_size_medium {
        width:80px;
        align-items:center;
        height:80px;
        margin:10px 0;
    }
    .rafflePage_col_prizeName_size_medium {
        width:100%;
        align-items:center;
    }

    .rafflePage_col_bottomText_size_medium {
        padding: 10px 0 0 0;
    }

    .rafflePage_col_raffleExplain_size_medium {
        width:100%;
        align-items:center;
        margin:10px 0;
    }
    .rafflePage_col_raffleSudoku_size_medium {
        width:100%;
        height:300px;
    }
</style>