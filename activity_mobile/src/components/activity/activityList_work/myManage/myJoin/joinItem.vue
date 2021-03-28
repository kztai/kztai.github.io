<template>
    <div class="joinItem_container">
        <div class="joinItem_row joinItem_row_joinItemRow">
            <div :class="{joinItem_col:true,joinItem_col_joinItemWindow:true,joinItem_col_joinItemWindow_size_large:attr.size==='large',joinItem_col_joinItemWindow_size_medium:attr.size==='medium',joinItem_col_joinItemWindow_size_small:attr.size==='small',joinItem_col_joinItemWindow_size_min:attr.size==='min',joinItem_col_joinItemWindow_checked:attr.checked,joinItem_col_joinItemWindow_disable:attr.disabled}">

                <div class="joinItem_row joinItem_row_row1">
                    <div :class="{joinItem_col:true,joinItem_col_itemWrap:true,joinItem_col_itemWrap_size_large:attr.size==='large',joinItem_col_itemWrap_size_medium:attr.size==='medium',joinItem_col_itemWrap_size_small:attr.size==='small',joinItem_col_itemWrap_size_min:attr.size==='min',joinItem_col_itemWrap_checked:attr.checked,joinItem_col_itemWrap_disable:attr.disabled}">

                        <div class="joinItem_row joinItem_row_row2">
                            <div :class="{joinItem_col:true,joinItem_col_item:true,joinItem_col_item_size_large:attr.size==='large',joinItem_col_item_size_medium:attr.size==='medium',joinItem_col_item_size_small:attr.size==='small',joinItem_col_item_size_min:attr.size==='min',joinItem_col_item_checked:attr.checked,joinItem_col_item_disable:attr.disabled}">

                                <div class="joinItem_row joinItem_row_row3">
                                    <div @click="activityClick" :class="{joinItem_col:true,joinItem_col_itemTop:true,joinItem_col_itemTop_size_large:attr.size==='large',joinItem_col_itemTop_size_medium:attr.size==='medium',joinItem_col_itemTop_size_small:attr.size==='small',joinItem_col_itemTop_size_min:attr.size==='min',joinItem_col_itemTop_checked:attr.checked,joinItem_col_itemTop_disable:attr.disabled}">

                                        <div class="joinItem_row joinItem_row_row5">
                                            <div :class="{joinItem_col:true,joinItem_col_img:true,joinItem_col_img_size_large:attr.size==='large',joinItem_col_img_size_medium:attr.size==='medium',joinItem_col_img_size_small:attr.size==='small',joinItem_col_img_size_min:attr.size==='min',joinItem_col_img_checked:attr.checked,joinItem_col_img_disable:attr.disabled}">

                                                <lm2b-image
                                                        ref="imgRef"
                                                        refId="imgRef"
                                                        v-show="pvt_isShow.img === 'imgRef'"
                                                        :paraVarPair="pvt_img.imgRef.paraVarPair"
                                                        :para="pvt_img.imgRef.para"
                                                        :attr="pvt_img.imgRef.attr">
                                                </lm2b-image>
                                            </div>
                                            <div :class="{joinItem_col:true,joinItem_col_content:true,joinItem_col_content_size_large:attr.size==='large',joinItem_col_content_size_medium:attr.size==='medium',joinItem_col_content_size_small:attr.size==='small',joinItem_col_content_size_min:attr.size==='min',joinItem_col_content_checked:attr.checked,joinItem_col_content_disable:attr.disabled}">

                                                <div class="joinItem_row joinItem_row_row6">
                                                    <div :class="{joinItem_col:true,joinItem_col_title:true,joinItem_col_title_size_large:attr.size==='large',joinItem_col_title_size_medium:attr.size==='medium',joinItem_col_title_size_small:attr.size==='small',joinItem_col_title_size_min:attr.size==='min',joinItem_col_title_checked:attr.checked,joinItem_col_title_disable:attr.disabled}">

                                                        <lm2b-link-text
                                                                ref="titleRef"
                                                                refId="titleRef"
                                                                v-show="pvt_isShow.title === 'titleRef'"
                                                                :paraVarPair="pvt_title.titleRef.paraVarPair"
                                                                :para="pvt_title.titleRef.para"
                                                                :attr="pvt_title.titleRef.attr">
                                                        </lm2b-link-text>
                                                    </div>
                                                </div>
                                                <div class="joinItem_row joinItem_row_row7">
                                                    <div :class="{joinItem_col:true,joinItem_col_time:true,joinItem_col_time_size_large:attr.size==='large',joinItem_col_time_size_medium:attr.size==='medium',joinItem_col_time_size_small:attr.size==='small',joinItem_col_time_size_min:attr.size==='min',joinItem_col_time_checked:attr.checked,joinItem_col_time_disable:attr.disabled}">

                                                        <lm2b-link-text
                                                                ref="timeRef"
                                                                refId="timeRef"
                                                                v-show="pvt_isShow.time === 'timeRef'"
                                                                :paraVarPair="pvt_time.timeRef.paraVarPair"
                                                                :para="pvt_time.timeRef.para"
                                                                :attr="pvt_time.timeRef.attr">
                                                        </lm2b-link-text>
                                                    </div>
                                                    <div :class="{joinItem_col:true,joinItem_col_status:true,joinItem_col_status_size_large:attr.size==='large',joinItem_col_status_size_medium:attr.size==='medium',joinItem_col_status_size_small:attr.size==='small',joinItem_col_status_size_min:attr.size==='min',joinItem_col_status_checked:attr.checked,joinItem_col_status_disable:attr.disabled}">

                                                        <lm2b-link-text
                                                                ref="statusRef"
                                                                refId="statusRef"
                                                                v-show="pvt_isShow.status === 'statusRef'"
                                                                :paraVarPair="pvt_status.statusRef.paraVarPair"
                                                                :para="pvt_status.statusRef.para"
                                                                :attr="pvt_status.statusRef.attr">
                                                        </lm2b-link-text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="joinItem_row joinItem_row_row4">
                                    <div :class="{joinItem_col:true,joinItem_col_itemBottom:true,joinItem_col_itemBottom_size_large:attr.size==='large',joinItem_col_itemBottom_size_medium:attr.size==='medium',joinItem_col_itemBottom_size_small:attr.size==='small',joinItem_col_itemBottom_size_min:attr.size==='min',joinItem_col_itemBottom_checked:attr.checked,joinItem_col_itemBottom_disable:attr.disabled}">

                                        <div class="joinItem_row joinItem_row_row8">
                                            <div :class="{joinItem_col:true,joinItem_col_browse:true,joinItem_col_browse_size_large:attr.size==='large',joinItem_col_browse_size_medium:attr.size==='medium',joinItem_col_browse_size_small:attr.size==='small',joinItem_col_browse_size_min:attr.size==='min',joinItem_col_browse_checked:attr.checked,joinItem_col_browse_disable:attr.disabled}">

                                                <lm2b-link-text
                                                        ref="browseRef"
                                                        refId="browseRef"
                                                        v-show="pvt_isShow.browse === 'browseRef'"
                                                        :paraVarPair="pvt_browse.browseRef.paraVarPair"
                                                        :para="pvt_browse.browseRef.para"
                                                        :attr="pvt_browse.browseRef.attr">
                                                </lm2b-link-text>
                                            </div>
                                            <div :class="{joinItem_col:true,joinItem_col_turn:true,joinItem_col_turn_size_large:attr.size==='large',joinItem_col_turn_size_medium:attr.size==='medium',joinItem_col_turn_size_small:attr.size==='small',joinItem_col_turn_size_min:attr.size==='min',joinItem_col_turn_checked:attr.checked,joinItem_col_turn_disable:attr.disabled}">

                                                <lm2b-link-text
                                                        ref="turnRef"
                                                        refId="turnRef"
                                                        v-show="pvt_isShow.turn === 'turnRef'"
                                                        :paraVarPair="pvt_turn.turnRef.paraVarPair"
                                                        :para="pvt_turn.turnRef.para"
                                                        :attr="pvt_turn.turnRef.attr">
                                                </lm2b-link-text>
                                            </div>
                                            <div :class="{joinItem_col:true,joinItem_col_apply:true,joinItem_col_apply_size_large:attr.size==='large',joinItem_col_apply_size_medium:attr.size==='medium',joinItem_col_apply_size_small:attr.size==='small',joinItem_col_apply_size_min:attr.size==='min',joinItem_col_apply_checked:attr.checked,joinItem_col_apply_disable:attr.disabled}">

                                                <lm2b-link-text
                                                        ref="applyRef"
                                                        refId="applyRef"
                                                        v-show="pvt_isShow.apply === 'applyRef'"
                                                        :paraVarPair="pvt_apply.applyRef.paraVarPair"
                                                        :para="pvt_apply.applyRef.para"
                                                        :attr="pvt_apply.applyRef.attr">
                                                </lm2b-link-text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div :class="{joinItem_col:true,joinItem_col_uploadBtn:true,joinItem_col_uploadBtn_size_large:attr.size==='large',joinItem_col_uploadBtn_size_medium:attr.size==='medium',joinItem_col_uploadBtn_size_small:attr.size==='small',joinItem_col_uploadBtn_size_min:attr.size==='min',joinItem_col_uploadBtn_checked:attr.checked,joinItem_col_uploadBtn_disable:attr.disabled}">

                                <lm2b-button
                                        ref="uploadBtnRef"
                                        refId="uploadBtnRef"
                                        v-show="pvt_isShow.uploadBtn === 'uploadBtnRef'"
                                        :paraVarPair="pvt_uploadBtn.uploadBtnRef.paraVarPair"
                                        :para="pvt_uploadBtn.uploadBtnRef.para"
                                        :attr="pvt_uploadBtn.uploadBtnRef.attr">
                                </lm2b-button>
                            </div>
                            <div :class="{joinItem_col:true,joinItem_col_manageBtn:true,joinItem_col_manageBtn_size_large:attr.size==='large',joinItem_col_manageBtn_size_medium:attr.size==='medium',joinItem_col_manageBtn_size_small:attr.size==='small',joinItem_col_manageBtn_size_min:attr.size==='min',joinItem_col_manageBtn_checked:attr.checked,joinItem_col_manageBtn_disable:attr.disabled}">

                                <lm2b-button
                                        ref="manageBtnRef"
                                        refId="manageBtnRef"
                                        v-show="pvt_isShow.manageBtn === 'manageBtnRef'"
                                        :paraVarPair="pvt_manageBtn.manageBtnRef.paraVarPair"
                                        :para="pvt_manageBtn.manageBtnRef.para"
                                        :attr="pvt_manageBtn.manageBtnRef.attr">
                                </lm2b-button>
                            </div>
                            <div :class="{joinItem_col:true,joinItem_col_checkBtn:true,joinItem_col_checkBtn_size_large:attr.size==='large',joinItem_col_checkBtn_size_medium:attr.size==='medium',joinItem_col_checkBtn_size_small:attr.size==='small',joinItem_col_checkBtn_size_min:attr.size==='min',joinItem_col_checkBtn_checked:attr.checked,joinItem_col_checkBtn_disable:attr.disabled}">

                                <lm2b-button
                                        ref="checkBtnRef"
                                        refId="checkBtnRef"
                                        v-show="pvt_isShow.checkBtn === 'checkBtnRef'"
                                        :paraVarPair="pvt_checkBtn.checkBtnRef.paraVarPair"
                                        :para="pvt_checkBtn.checkBtnRef.para"
                                        :attr="pvt_checkBtn.checkBtnRef.attr">
                                </lm2b-button>
                            </div>
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

    export default {
        components: {},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'paraVarPair', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['img', 'title', 'time', 'status', 'browse', 'turn', 'apply', 'checkBtn', 'manageBtn', 'uploadBtn'],
                    subModule: ['imgRef', 'titleRef', 'timeRef', 'statusRef', 'browseRef', 'turnRef', 'applyRef', 'checkBtnRef', 'manageBtnRef', 'uploadBtnRef'],
                },
                pvt_isShow: {
                    img: null,
                    title: null,
                    time: null,
                    status: null,
                    browse: null,
                    turn: null,
                    apply: null,
                    checkBtn: null,
                    manageBtn: null,
                    uploadBtn: null,
                },
                pvt_eventPortInput: ['showCheckEvent', 'showManageEvent', 'showUploadEvent', 'activityClickEvent'],

                mac: mac.mac,

                activityTime: '12:34',
                activityClerk: '助手',
                browseNum: 122,
                turnNum: 333,
                applyNum: 567,
                dialogWrap: false,
            }
                ;
        },
        watch: {
            curActivityId: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.curActivityId) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.curActivityId][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.curActivityId] = val
                        }
                    }
                },
                deep: true
            },
        },
        computed: {
            pvt_img: function () {
                return {
                    imgRef: {
                        paraVarPair: {},
                        para: {
                            // image: [{
                            //     $table: this.mac.tb.groupActivity,
                            //     $arrField: [this.mac.fd.groupActivity.poster],
                            //     $arrValue: [this.para.curActivityId]
                            // }],
                            image: 'http://img2.imgtn.bdimg.com/it/u=2915512436,1541993188&fm=26&gp=0.jpg',
                        },
                        attr: {},
                    },
                };
            },
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.name],
                                $arrValue: [this.para.curActivityId]
                            }],
                        },
                        attr: {
                            fontWeight: true,
                            color: '#333',
                            fontSize: '14px',
                            ellipsis: true
                        },
                    },
                };
            },
            pvt_time: function () {
                return {
                    timeRef: {
                        paraVarPair: {
                            textData: 'activityTime',
                        },
                        para: {
                            textData: this.activityTime,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_status: function () {
                return {
                    statusRef: {
                        paraVarPair: {
                            textData: 'activityClerk',
                        },
                        para: {
                            textData: this.activityClerk,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_browse: function () {
                return {
                    browseRef: {
                        paraVarPair: {
                            textData: 'browseNum',
                        },
                        para: {
                            textData: this.browseNum,
                        },
                        attr: {
                            icon: 'van-icon-eye-o',
                            color: '#999',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_turn: function () {
                return {
                    turnRef: {
                        paraVarPair: {
                            textData: 'turnNum',
                        },
                        para: {
                            textData: this.turnNum,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                            icon: 'van-icon-share',
                        },
                    },
                };
            },
            pvt_apply: function () {
                return {
                    applyRef: {
                        paraVarPair: {
                            textData: 'applyNum',
                        },
                        para: {
                            textData: this.applyNum,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                            icon: 'van-icon-manager-o',
                        },
                    },
                };
            },
         
            pvt_checkBtn: function () {
                return {
                    checkBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['验票', ''],
                        },
                        attr: {
                            type: 'primary',
                            long: true,
                            width: '78px',
                            height: '124px'
                        },
                    },
                };
            },
         
            pvt_manageBtn: function () {
                return {
                    manageBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['报名管理', ''],
                        },
                        attr: {
                            type: 'danger',
                            long: true,
                            width: '78px',
                            height: '124px'
                        },
                    },
                };
            },
            pvt_uploadBtn: function () {
                return {
                    uploadBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['图片上传', ''],
                        },
                        attr: {
                            type: 'info',
                            long: true,
                            width: '78px',
                            height: '124px'
                        },
                    },
                };
            }
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
                let fnname = 'joinItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['imgRef', 'titleRef', 'timeRef', 'statusRef', 'browseRef', 'turnRef', 'applyRef']
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            tableName = this.mac.tb.groupActivityManageMember;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curMemberId];
                            dbData[that.mac.fd.groupActivityManageMember.function] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                switch (dbData[that.mac.fd.groupActivityManageMember.function][0]) {
                                    case that.mac.enum.groupActivityManageMember.function.host:
                                        that.activityClerk = '主持人';
                                        para.refArr.push('checkBtnRef', 'manageBtnRef', 'uploadBtnRef');
                                        break;
                                    case that.mac.enum.groupActivityManageMember.function.lecture:
                                        that.activityClerk = '主讲人';
                                        para.refArr.push('checkBtnRef', 'manageBtnRef');
                                        break;
                                    case that.mac.enum.groupActivityManageMember.function.assistant:
                                        that.activityClerk = '助手';
                                        para.refArr.push('checkBtnRef');
                                        break;
                                    case that.mac.enum.groupActivityManageMember.function.service:
                                        that.activityClerk = '在线客服';
                                        break;
                                }
                                para.nStep = 'getActivityData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getActivityData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curActivityId];
                            dbData[that.mac.fd.groupActivity.startTime] = [];
                            dbData[that.mac.fd.groupActivity.endTime] = [];
                            dbData[that.mac.fd.groupActivity.enrollNumber] = [];
                            dbData[that.mac.fd.groupActivity.browerNumber] = [];
                            dbData[that.mac.fd.groupActivity.forwardNumber] = [];
                            this.sys.api.recordRead(tableName, dbData, function (result) {
                                that.applyNum = 0;
                                let endTime = dbData[that.mac.fd.groupActivity.endTime][0].slice(5);

                                that.activityTime = endTime + ' 结束';
                                that.browseNum = dbData[that.mac.fd.groupActivity.browerNumber][0];
                                that.turnNum = dbData[that.mac.fd.groupActivity.forwardNumber][0];
                                for (let i = 0; i < dbData[that.mac.fd.groupActivity.enrollNumber][0].length; i++) {
                                    that.applyNum += dbData[that.mac.fd.groupActivity.enrollNumber][0][i]
                                }

                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'hideBtn';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'hideBtn':
                            that.showSubModule(['checkBtnRef', 'manageBtnRef', 'uploadBtnRef'], false, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
                            that.showSubModule(para.refArr, true, function () {
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
            activityClick: function () {
                let that = this;
                let tableName = that.mac.tb.groupActivity;
                let record = [that.para.curActivityId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    that.ep.activityClickEvent(result[0], that.activityClerk)
                }, function (error) {
                });
            },

            uploadClick: function () {
                let that = this;
                let tableName = that.mac.tb.groupActivity;
                let record = [that.para.curActivityId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    that.ep.showUploadEvent(result[0], that.activityClerk)
                }, function (error) {
                });
            },
            manageClick: function () {
                let that = this;
                let tableName = that.mac.tb.groupActivity;
                let record = [that.para.curActivityId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    that.ep.showManageEvent(result[0], that.activityClerk)
                }, function (error) {
                });
            },
            checkClick: function () {
                let that = this;
                let tableName = that.mac.tb.groupActivity;
                let record = [that.para.curActivityId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    that.ep.showCheckEvent(result[0], that.activityClerk)
                }, function (error) {
                });
            },

            getTime: function (time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1
                var hour = time.getHours();
                var minute = time.getMinutes();
                var second = time.getSeconds();

                return year + "-" + zero(month) + "-" + zero(day) + " "
                    + zero(hour) + ":" + zero(minute);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            },


      
            checkBtnRef_buttonClickEvent: function () {
                this.checkClick();
            },
            manageBtnRef_buttonClickEvent: function () {
                this.manageClick();
            },
            uploadBtnRef_buttonClickEvent: function () {
                this.uploadClick();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .joinItem_container {
    }

    .joinItem_row {
        display: flex;
        flex: 1;
    }

    .joinItem_col {
        display: flex;
        flex-direction: column;
    }

    .joinItem_col_joinItemWindow_size_medium {
        width: @releaseItem-releaseItemWindow-medium-width;
        margin: @releaseItem-releaseItemWindow-medium-margin;
    }

    .joinItem_col_joinItemWindow {
        background-color: mix(@releaseItem-releaseItemWindow-background-color, #fff, @releaseItem-releaseItemWindow-background-color-opacity);
    }

    .joinItem_col_itemWrap_size_medium {
        width: @releaseItem-itemWrap-medium-width;
        overflow: auto;
    }

    .joinItem_col_item_size_medium {
        width: @releaseItem-item-medium-width;
        flex: 0 0 100%;
    }

    .joinItem_col_uploadBtn_size_medium {
        width: @releaseItem-uploadBtn-medium-width;
    }

    .joinItem_col_manageBtn_size_medium {
        width: @releaseItem-manageBtn-medium-width;
    }

    .joinItem_col_checkBtn_size_medium {
        width: @releaseItem-checkBtn-medium-width;
    }

    .joinItem_col_itemTop_size_medium {
        width: @releaseItem-itemTop-medium-width;
        padding: @releaseItem-itemTop-medium-padding;
    }

    .joinItem_col_itemTop {
        border-style: @releaseItem-itemTop-border-style;
        border-width: @releaseItem-itemTop-border-width;
        border-color: mix(@releaseItem-itemTop-border-color, #fff, @releaseItem-itemTop-hover-border-color-opacity);
        box-sizing: border-box;
    }

    .joinItem_col_itemBottom_size_medium {
        width: @releaseItem-itemBottom-medium-width;
        padding: @releaseItem-itemBottom-medium-padding;
        box-sizing: border-box;
    }

    .joinItem_col_img_size_medium {
        width: @releaseItem-img-medium-width;
        height: @releaseItem-img-medium-height;
    }

    .joinItem_col_content_size_medium {
        width: @releaseItem-content-medium-width;
        padding: @releaseItem-content-medium-padding;
        box-sizing: border-box;
    }

    .joinItem_col_title_size_medium {
        width: @releaseItem-title-medium-width;
        margin: @releaseItem-title-medium-margin;
    }

    .joinItem_col_time_size_medium {
        width: @releaseItem-time-medium-width;
    }

    .joinItem_col_status_size_medium {
        width: @releaseItem-status-medium-width;
        align-items: @releaseItem-status-medium-horizontal-position;
    }

    .joinItem_col_browse_size_medium {
        width: @releaseItem-browse-medium-width;
        align-items: @releaseItem-browse-medium-horizontal-position;
    }

    .joinItem_col_turn_size_medium {
        width: @releaseItem-turn-medium-width;
        align-items: @releaseItem-turn-medium-horizontal-position;
    }

    .joinItem_col_apply_size_medium {
        width: @releaseItem-apply-medium-width;
        align-items: @releaseItem-apply-medium-horizontal-position;
    }
</style>