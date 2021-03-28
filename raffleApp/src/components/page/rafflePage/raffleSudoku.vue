<template>
    <div v-show="pvt_win.isShow.raffle_sudokuWindow"
         :class="{raffle_sudoku_container:true,raffle_sudoku_col:true,raffle_sudoku_col_raffle_sudokuWindow:true,raffle_sudoku_col_raffle_sudokuWindow_size_large:attr.size==='large',raffle_sudoku_col_raffle_sudokuWindow_size_medium:attr.size==='medium',raffle_sudoku_col_raffle_sudokuWindow_size_small:attr.size==='small',raffle_sudoku_col_raffle_sudokuWindow_size_min:attr.size==='min',raffle_sudoku_col_raffle_sudokuWindow_checked:pvt_win.isChecked.raffle_sudokuWindow,raffle_sudoku_col_raffle_sudokuWindow_disable:attr.disabled}"
         :style="pvt_win.style.raffle_sudokuWindow">

        <div class="raffle_sudoku_row raffle_sudoku_row_row0">
            <div v-show="pvt_win.isShow.img1"
                 :class="{raffle_sudoku_col:true,raffle_sudoku_col_img1:true,raffle_sudoku_col_img1_size_large:attr.size==='large',raffle_sudoku_col_img1_size_medium:attr.size==='medium',raffle_sudoku_col_img1_size_small:attr.size==='small',raffle_sudoku_col_img1_size_min:attr.size==='min',raffle_sudoku_col_img1_checked:pvt_win.isChecked.img1,raffle_sudoku_col_img1_disable:attr.disabled}"
                 :style="pvt_win.style.img1">
                <img
                        :src="img1" alt=""
                        ref="img1Ref"
                        refId="img1Ref"
                        v-show="pvt_isShow.img1 === 'img1Ref'">

                <img
                        :src="img1Selected" alt=""
                        ref="img1SelectedRef"
                        refId="img1SelectedRef"
                        v-show="pvt_isShow.img1 === 'img1SelectedRef'">

            </div>
            <div v-show="pvt_win.isShow.img2"
                 :class="{raffle_sudoku_col:true,raffle_sudoku_col_img2:true,raffle_sudoku_col_img2_size_large:attr.size==='large',raffle_sudoku_col_img2_size_medium:attr.size==='medium',raffle_sudoku_col_img2_size_small:attr.size==='small',raffle_sudoku_col_img2_size_min:attr.size==='min',raffle_sudoku_col_img2_checked:pvt_win.isChecked.img2,raffle_sudoku_col_img2_disable:attr.disabled}"
                 :style="pvt_win.style.img2">
                <img
                        :src="img2" alt=""
                        ref="img2Ref"
                        refId="img2Ref"
                        v-show="pvt_isShow.img2 === 'img2Ref'">
                <img
                        :src="img2Selected" alt=""
                        ref="img2SelectedRef"
                        refId="img2SelectedRef"
                        v-show="pvt_isShow.img2 === 'img2SelectedRef'">

            </div>
            <div v-show="pvt_win.isShow.img3"
                 :class="{raffle_sudoku_col:true,raffle_sudoku_col_img3:true,raffle_sudoku_col_img3_size_large:attr.size==='large',raffle_sudoku_col_img3_size_medium:attr.size==='medium',raffle_sudoku_col_img3_size_small:attr.size==='small',raffle_sudoku_col_img3_size_min:attr.size==='min',raffle_sudoku_col_img3_checked:pvt_win.isChecked.img3,raffle_sudoku_col_img3_disable:attr.disabled}"
                 :style="pvt_win.style.img3">
                <img
                        :src="img3" alt=""
                        ref="img3Ref"
                        refId="img3Ref"
                        v-show="pvt_isShow.img3 === 'img3Ref'">
                <img
                        :src="img3Selected" alt=""
                        ref="img3SelectedRef"
                        refId="img3SelectedRef"
                        v-show="pvt_isShow.img3 === 'img3SelectedRef'">
            </div>
        </div>
        <div class="raffle_sudoku_row raffle_sudoku_row_row1">
            <div v-show="pvt_win.isShow.img8"
                 :class="{raffle_sudoku_col:true,raffle_sudoku_col_img8:true,raffle_sudoku_col_img8_size_large:attr.size==='large',raffle_sudoku_col_img8_size_medium:attr.size==='medium',raffle_sudoku_col_img8_size_small:attr.size==='small',raffle_sudoku_col_img8_size_min:attr.size==='min',raffle_sudoku_col_img8_checked:pvt_win.isChecked.img8,raffle_sudoku_col_img8_disable:attr.disabled}"
                 :style="pvt_win.style.img8">
                <img
                        :src="img8" alt=""
                        ref="img8Ref"
                        refId="img8Ref"
                        v-show="pvt_isShow.img8 === 'img8Ref'">
                <img
                        :src="img8Selected" alt=""
                        ref="img8SelectedRef"
                        refId="img8SelectedRef"
                        v-show="pvt_isShow.img8 === 'img8SelectedRef'">

            </div>
            <div v-show="pvt_win.isShow.raffleBtn"
                 :class="{raffle_sudoku_col:true,raffle_sudoku_col_raffleBtn:true,raffle_sudoku_col_raffleBtn_size_large:attr.size==='large',raffle_sudoku_col_raffleBtn_size_medium:attr.size==='medium',raffle_sudoku_col_raffleBtn_size_small:attr.size==='small',raffle_sudoku_col_raffleBtn_size_min:attr.size==='min',raffle_sudoku_col_raffleBtn_checked:pvt_win.isChecked.raffleBtn,raffle_sudoku_col_raffleBtn_disable:attr.disabled}"
                 :style="pvt_win.style.raffleBtn">
                <img
                        @click="raffleStart"
                        src="../../../assets/点击抽奖.png" alt=""
                        ref="raffleBtnRef"
                        refId="raffleBtnRef"
                        v-show="pvt_isShow.raffleBtn === 'raffleBtnRef'">
                <img
                        src="../../../assets/点击抽奖-灰显.png" alt=""
                        ref="unRaffleBtnRef"
                        refId="unRaffleBtnRef"
                        v-show="pvt_isShow.raffleBtn === 'unRaffleBtnRef'">
                <img
                        src="../../../assets/抽奖结束.png" alt=""
                        ref="raffleEndBtnRef"
                        refId="raffleEndBtnRef"
                        v-show="pvt_isShow.raffleBtn === 'raffleEndBtnRef'">

            </div>
            <div v-show="pvt_win.isShow.img4"
                 :class="{raffle_sudoku_col:true,raffle_sudoku_col_img4:true,raffle_sudoku_col_img4_size_large:attr.size==='large',raffle_sudoku_col_img4_size_medium:attr.size==='medium',raffle_sudoku_col_img4_size_small:attr.size==='small',raffle_sudoku_col_img4_size_min:attr.size==='min',raffle_sudoku_col_img4_checked:pvt_win.isChecked.img4,raffle_sudoku_col_img4_disable:attr.disabled}"
                 :style="pvt_win.style.img4">
                <img
                        :src="img4" alt=""
                        ref="img4Ref"
                        refId="img4Ref"
                        v-show="pvt_isShow.img4 === 'img4Ref'">
                <img
                        :src="img4Selected" alt=""
                        ref="img4SelectedRef"
                        refId="img4SelectedRef"
                        v-show="pvt_isShow.img4 === 'img4SelectedRef'">

            </div>
        </div>
        <div class="raffle_sudoku_row raffle_sudoku_row_row2">
            <div v-show="pvt_win.isShow.img7"
                 :class="{raffle_sudoku_col:true,raffle_sudoku_col_img7:true,raffle_sudoku_col_img7_size_large:attr.size==='large',raffle_sudoku_col_img7_size_medium:attr.size==='medium',raffle_sudoku_col_img7_size_small:attr.size==='small',raffle_sudoku_col_img7_size_min:attr.size==='min',raffle_sudoku_col_img7_checked:pvt_win.isChecked.img7,raffle_sudoku_col_img7_disable:attr.disabled}"
                 :style="pvt_win.style.img7">
                <img
                        :src="img7" alt=""
                        ref="img7Ref"
                        refId="img7Ref"
                        v-show="pvt_isShow.img7 === 'img7Ref'">
                <img
                        :src="img7Selected" alt=""
                        ref="img7SelectedRef"
                        refId="img7SelectedRef"
                        v-show="pvt_isShow.img7 === 'img7SelectedRef'">
            </div>
            <div v-show="pvt_win.isShow.img6"
                 :class="{raffle_sudoku_col:true,raffle_sudoku_col_img6:true,raffle_sudoku_col_img6_size_large:attr.size==='large',raffle_sudoku_col_img6_size_medium:attr.size==='medium',raffle_sudoku_col_img6_size_small:attr.size==='small',raffle_sudoku_col_img6_size_min:attr.size==='min',raffle_sudoku_col_img6_checked:pvt_win.isChecked.img6,raffle_sudoku_col_img6_disable:attr.disabled}"
                 :style="pvt_win.style.img6">
                <img
                        :src="img6" alt=""
                        ref="img6Ref"
                        refId="img6Ref"
                        v-show="pvt_isShow.img6 === 'img6Ref'">
                <img
                        :src="img6Selected" alt=""
                        ref="img6SelectedRef"
                        refId="img6SelectedRef"
                        v-show="pvt_isShow.img6 === 'img6SelectedRef'">

            </div>
            <div v-show="pvt_win.isShow.img5"
                 :class="{raffle_sudoku_col:true,raffle_sudoku_col_img5:true,raffle_sudoku_col_img5_size_large:attr.size==='large',raffle_sudoku_col_img5_size_medium:attr.size==='medium',raffle_sudoku_col_img5_size_small:attr.size==='small',raffle_sudoku_col_img5_size_min:attr.size==='min',raffle_sudoku_col_img5_checked:pvt_win.isChecked.img5,raffle_sudoku_col_img5_disable:attr.disabled}"
                 :style="pvt_win.style.img5">
                <img
                        :src="img5" alt=""
                        ref="img5Ref"
                        refId="img5Ref"
                        v-show="pvt_isShow.img5 === 'img5Ref'">
                <img
                        :src="img5Selected" alt=""
                        ref="img5SelectedRef"
                        refId="img5SelectedRef"
                        v-show="pvt_isShow.img5 === 'img5SelectedRef'">

            </div>
        </div>

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
                    vessel: ['img1', 'img1', 'img2', 'img2', 'img3', 'img3', 'img4', 'img4', 'img5', 'img5', 'img6', 'img6', 'img7', 'img7', 'img8', 'img8', 'raffleBtn', 'raffleBtn', 'raffleBtn'],
                    subModule: ['img1Ref', 'img1SelectedRef', 'img2Ref', 'img2SelectedRef', 'img3Ref', 'img3SelectedRef', 'img4Ref', 'img4SelectedRef', 'img5Ref', 'img5SelectedRef', 'img6Ref', 'img6SelectedRef', 'img7Ref', 'img7SelectedRef', 'img8Ref', 'img8SelectedRef', 'raffleBtnRef', 'unRaffleBtnRef', 'raffleEndBtnRef'],
                },
                pvt_isShow: {
                    img1: null,
                    img2: null,
                    img3: null,
                    img4: null,
                    img5: null,
                    img6: null,
                    img7: null,
                    img8: null,
                    raffleBtn: null,
                },
                pvt_win: {
                    isShow: {
                        raffle_sudokuWindow: true,
                        img1: true,
                        img2: true,
                        img3: true,
                        img8: true,
                        raffleBtn: true,
                        img4: true,
                        img7: true,
                        img6: true,
                        img5: true,
                    },
                    isChecked: {
                        raffle_sudokuWindow: false,
                        img1: false,
                        img2: false,
                        img3: false,
                        img8: false,
                        raffleBtn: false,
                        img4: false,
                        img7: false,
                        img6: false,
                        img5: false,
                    },
                    style: {
                        raffle_sudokuWindow: null,
                        img1: null,
                        img2: null,
                        img3: null,
                        img8: null,
                        raffleBtn: null,
                        img4: null,
                        img7: null,
                        img6: null,
                        img5: null,
                    },
                },
                pvt_eventPortInput: ['raffleStartEvent', 'raffleEndEvent'],


                prizeData: {},
                nickName: null,
                headShotUrl: null,
                openId: null,
                mac: mac.mac,
                img1: '',
                img1Selected: '',
                img2: '',
                img2Selected: '',
                img3: '',
                img3Selected: '',
                img4: '',
                img4Selected: '',
                img5: '',
                img5Selected: '',
                img6: '',
                img6Selected: '',
                img7: '',
                img7Selected: '',
                img8: '',
                img8Selected: '',
            };
        },
        watch: {},

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (raffleData, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'raffleSudoku_start';
                let dbFlag;
                let tableName;
                let dbData;
                let parentRecord;
                let record;
                let portName;
                let inputData;
                let condition;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
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

                let arrRef = ['img1Ref', 'img1SelectedRef', 'img2Ref', 'img2SelectedRef', 'img3Ref', 'img3SelectedRef', 'img4Ref', 'img4SelectedRef', 'img5Ref', 'img5SelectedRef', 'img6Ref', 'img6SelectedRef', 'img7Ref', 'img7SelectedRef', 'img8Ref', 'img8SelectedRef', 'raffleBtnRef', 'unRaffleBtnRef', 'raffleEndBtnRef'];

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.nickName = raffleData.nickName;
                            this.headShotUrl = raffleData.headShotUrl;
                            this.openId = raffleData.openId;

                            para.nStep = 'getPictureUrl';
                            dbFlag++;
                            break;
                        case 'getPictureUrl':
                            tableName = this.mac.tb.prize;
                            parentRecord = null;
                            condition = 'id>0';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.prize.name] = [];
                            dbData[that.mac.fd.prize.class] = [];
                            dbData[that.mac.fd.prize.picture] = [];
                            dbData[that.mac.fd.prize.selected_graphic] = [];
                            dbData[that.mac.fd.prize.no_selected_graphic] = [];

                            that.sys.recordQuery_(tableName, parentRecord, condition, dbData, function (result) {
                                for (let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    if (!that.prizeData[dbData[that.mac.fd.prize.class][i]]) that.prizeData[dbData[that.mac.fd.prize.class][i]] = {};
                                    that.prizeData[dbData[that.mac.fd.prize.class][i]]['id'] = dbData[that.mac.fd.id][i];
                                    that.prizeData[dbData[that.mac.fd.prize.class][i]]['name'] = dbData[that.mac.fd.prize.name][i];
                                    that.prizeData[dbData[that.mac.fd.prize.class][i]]['url'] = dbData[that.mac.fd.prize.picture][i][0];
                                    that.prizeData[dbData[that.mac.fd.prize.class][i]]['selectedUrl'] = dbData[that.mac.fd.prize.selected_graphic][i][0];
                                    that.prizeData[dbData[that.mac.fd.prize.class][i]]['noSelectedUrl'] = dbData[that.mac.fd.prize.no_selected_graphic][i][0];
                                }

                                para.arrPrizeLevel = Object.keys(that.prizeData);
                                para.nStep = 'getSelectPictureData';
                                if (++dbFlag === 2) {
                                    that.startModule(raffleData, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'getSelectPictureData':
                            if (para.i >= para.arrPrizeLevel.length) {
                                para.i = 0;
                                para.nStep = 'initImg';
                                dbFlag++;
                                break;
                            }

                            para.url = that.prizeData[para.arrPrizeLevel[para.i]]['selectedUrl'];

                            that.sys.openFile(para.url, function (file) {
                                para.offset = null;
                                para.length = null;
                                that.sys.readFile(para.offset, para.length, file, function (content) {
                                    that.prizeData[para.arrPrizeLevel[para.i]]['SelectImg'] = content;
                                    that.sys.closeFile(file, function () {
                                        para.nStep = 'getNoSelectPictureData';
                                        if (++dbFlag === 2) {
                                            that.startModule(raffleData, successCallBack, errorCallBack)
                                        }
                                    }, para.errorCallBack);
                                }, para.errorCallBack);
                            }, para.errorCallBack);
                            break;
                        case 'getNoSelectPictureData':
                            para.url = that.prizeData[para.arrPrizeLevel[para.i]]['noSelectedUrl'];

                            that.sys.openFile(para.url, function (file) {
                                para.offset = null;
                                para.length = null;
                                that.sys.readFile(para.offset, para.length, file, function (content) {
                                    that.prizeData[para.arrPrizeLevel[para.i]]['noSelectImg'] = content;
                                    that.sys.closeFile(file, function () {
                                        para.i++;
                                        para.nStep = 'getSelectPictureData';
                                        if (++dbFlag === 2) {
                                            that.startModule(raffleData, successCallBack, errorCallBack)
                                        }
                                    }, para.errorCallBack);
                                }, para.errorCallBack);
                            }, para.errorCallBack);
                            break;
                        case 'initImg':
                            that.img1 = that.prizeData[that.mac.enum.prize.class.level_1]['noSelectImg'];
                            that.img2 = that.prizeData[that.mac.enum.prize.class.level_2]['noSelectImg'];
                            that.img3 = that.prizeData[that.mac.enum.prize.class.encourage]['noSelectImg'];
                            that.img4 = that.prizeData[that.mac.enum.prize.class.level_3]['noSelectImg'];
                            that.img5 = that.prizeData[that.mac.enum.prize.class.level_2]['noSelectImg'];
                            that.img6 = that.prizeData[that.mac.enum.prize.class.encourage]['noSelectImg'];
                            that.img7 = that.prizeData[that.mac.enum.prize.class.level_3]['noSelectImg'];
                            that.img8 = that.prizeData[that.mac.enum.prize.class.encourage]['noSelectImg'];

                            that.img1Selected = that.prizeData[that.mac.enum.prize.class.level_1]['SelectImg'];
                            that.img2Selected = that.prizeData[that.mac.enum.prize.class.level_2]['SelectImg'];
                            that.img3Selected = that.prizeData[that.mac.enum.prize.class.encourage]['SelectImg'];
                            that.img4Selected = that.prizeData[that.mac.enum.prize.class.level_3]['SelectImg'];
                            that.img5Selected = that.prizeData[that.mac.enum.prize.class.level_2]['SelectImg'];
                            that.img6Selected = that.prizeData[that.mac.enum.prize.class.encourage]['SelectImg'];
                            that.img7Selected = that.prizeData[that.mac.enum.prize.class.level_3]['SelectImg'];
                            that.img8Selected = that.prizeData[that.mac.enum.prize.class.encourage]['SelectImg'];

                            para.nStep = 'showSubModule';
                            dbFlag++;
                            break;
                        case 'showSubModule':
                            let arrShowRef = ['img1Ref', 'img2Ref', 'img3Ref', 'img4Ref', 'img5Ref', 'img6Ref', 'img7Ref', 'img8Ref'];
                            switch (raffleData.type) {
                                case 0:
                                    arrShowRef.push('raffleBtnRef');
                                    break;
                                case 1:
                                    arrShowRef.push('unRaffleBtnRef');
                                    break;
                                case 2:
                                    arrShowRef.push('raffleEndBtnRef');
                                    break;
                            }

                            that.showSubModule(arrShowRef, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(raffleData, successCallBack, errorCallBack)
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

            raffleStartTest: function (successCallBack, errorCallBack) {
                successCallBack({
                    status: 1,
                    prizeName: '毛巾'
                })
                // 'G600', 'L2', 'L6', '毛巾'
            },

            // 1.发事件到云端获取中奖物品；2.实现转盘效果（最好实现速度渐变）；3.最终停在中奖物品对应的图片上，发事件到父模块：
            raffleStart: function () {
                let that = this;
                let prizeLevel;
                let prizeUrl;
                let prizeName;
                let timer;
                let stopFlag = false;
                let curIndex = 1;
                let countdown = 3000;  // 倒计时时间
                let arrPrizeOrder = [0, 1, 3, 2, 1, 3, 2, 3];

                // 'raffleBtnRef','unRaffleBtnRef','raffleEndBtnRef'
                // 抽奖按钮灰显：
                that.showSubModule(['raffleBtnRef'], false, function () {
                    that.showSubModule(['unRaffleBtnRef'], true, function () {
                    }, function (error) {
                        console.error(error);
                    });
                }, function (error) {
                    console.error(error);
                });

               /* this.raffleStartTest(function (result) {
                    // 判断活动的状态：
                    if (result.status === that.mac.enum.activity.status.end) {
                        that.$notify({type: 'warning', message: '活动已结束！'});
                        return
                    }

                    // 一开始第一张图片高亮
                    that.showSubModule(['img' + curIndex + 'Ref'], false, function () {
                        that.showSubModule(['img' + curIndex + 'SelectedRef'], true, function () {
                        }, function () {
                        });
                    }, function () {
                    });

                    // 开启转盘
                    timer = setInterval(changePrize, 100);

                    // 查找奖品信息：
                    let tableName = that.mac.tb.prize;
                    let parentRecord = null;
                    let condition = that.mac.fd.prize.name + '="' + result.prizeName + '"';
                    let dbData = {};

                    that.sys.recordQuery_(tableName, parentRecord, condition, dbData, function () {
                        prizeUrl = dbData[that.mac.fd.prize.picture][0][0];
                        prizeLevel = dbData[that.mac.fd.prize.class][0];
                        prizeName = result.prizeName;

                        // 当云端将获奖物品返回后，开始进入倒计时，准备停止转盘：
                        setTimeout(function () {
                            stopFlag = true;
                        }, countdown);
                    }, function (error) {
                    });
                },function(error){
                });*/

                this.ep.raffleStartEvent(that.nickName, that.headShotUrl, that.openId, function (result) {
                    // 判断活动的状态：
                    if (result[0].status === that.mac.enum.activity.status.end) {
                        that.$notify({type: 'warning', message: '活动已结束！'});
                        return
                    }

                    // 一开始第一张图片高亮
                    that.showSubModule(['img' + curIndex + 'Ref'], false, function () {
                        that.showSubModule(['img' + curIndex + 'SelectedRef'], true, function () {
                        }, function (error) {
                            console.error(error);
                        });
                    }, function (error) {
                        console.error(error);
                    });

                    // 开启转盘
                    timer = setInterval(changePrize, 100);

                    // 查找奖品信息：
                    let tableName = that.mac.tb.prize;
                    let parentRecord = null;
                    let condition = that.mac.fd.prize.name + '="' + result[0].prizeName + '"';
                    let dbData = {};

                    that.sys.recordQuery_(tableName, parentRecord, condition, dbData, function () {
                        prizeUrl = dbData[that.mac.fd.prize.picture][0][0];
                        prizeLevel = dbData[that.mac.fd.prize.class][0];
                        prizeName = result[0].prizeName;

                        // 当云端将获奖物品返回后，开始进入倒计时，准备停止转盘：
                        setTimeout(function () {
                            stopFlag = true;
                        }, countdown);
                    }, function (error) {
                        console.error(error);
                    });
                }, function (error) {
                    console.error(error);
                });

                function changePrize() {
                    if (stopFlag && arrPrizeOrder[curIndex - 1] === prizeLevel) {
                        // 转盘停止标志 stopFlag 为true，且当前转到的图片是获取图片，则转盘结束：
                        clearInterval(timer);
                        timer = null;

                        that.ep.raffleEndEvent({prizeLevel, prizeUrl, prizeName}, function () {
                        }, function (error) {
                            console.error(error);
                        });
                        return
                    }

                    // 当前图片恢复正常，下一张图片高亮：
                    that.showSubModule(['img' + curIndex + 'SelectedRef'], false, function () {
                        that.showSubModule(['img' + curIndex + 'Ref'], true, function () {

                            if (++curIndex > 8) curIndex = 1;
                            that.showSubModule(['img' + curIndex + 'Ref'], false, function () {
                                that.showSubModule(['img' + curIndex + 'SelectedRef'], true, function () {
                                }, function (error) {
                                    console.error(error);
                                });
                            }, function (error) {
                                console.error(error);
                            });
                        }, function (error) {
                            console.error(error);
                        });
                    }, function (error) {
                        console.error(error);
                    });
                }
            },

            raffleBtnRef_clickEvent: function () {
                this.raffleStart();
            },
        },
    };
</script>
<style lang="less" scoped>
    img {
        width: 100%;
        height: 100%;
    }

    .raffle_sudoku_container {
        width: 100%;
        height: 100%;
    }

    .raffle_sudoku_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .raffle_sudoku_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .raffle_sudoku_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .raffle_sudoku_row {
        display: flex;
    }

    .raffle_sudoku_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .raffle_sudoku_col_raffle_sudokuWindow_size_medium {
        width: 100%;
        padding: 40px;
        box-sizing: border-box;
        background-image: url('../../../assets/03抽奖区底框1.png');
        background-size: 100% 100%;
    }

    .raffle_sudoku_col_img1_size_medium {
        width: 33%;
        height: 70px;
        margin: 0 4px 4px 0;
    }

    .raffle_sudoku_col_img2_size_medium {
        width: 34%;
        margin: 0 4px 4px 4px;
        height: 70px;
    }

    .raffle_sudoku_col_img3_size_medium {
        width: 33%;
        margin: 0 0 4px 4px;
        height: 70px;
    }

    .raffle_sudoku_col_img8_size_medium {
        width: 33%;
        margin: 0 4px 4px 0;
        height: 70px;
    }

    .raffle_sudoku_col_raffleBtn_size_medium {
        width: 34%;
        margin: 0 4px 4px 4px;
        height: 70px;
    }

    .raffle_sudoku_col_img4_size_medium {
        width: 33%;
        margin: 0 0 4px 4px;
        height: 70px;
    }

    .raffle_sudoku_col_img7_size_medium {
        width: 33%;
        margin:0 4px 0 0;
        height: 70px;
    }

    .raffle_sudoku_col_img6_size_medium {
        width: 34%;
        margin: 0 4px 0 4px;
        height: 70px;
    }

    .raffle_sudoku_col_img5_size_medium {
        width: 33%;
        margin: 0 0 0 4px;
        height: 70px;
    }
</style>