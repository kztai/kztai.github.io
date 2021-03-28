<template>
    <div class="draftItem_container">
        <div class="draftItem_row draftItem_row_draftItemRow">
            <div :class="{draftItem_col:true,draftItem_col_draftItemWindow:true,draftItem_col_draftItemWindow_size_large:attr.size==='large',draftItem_col_draftItemWindow_size_medium:attr.size==='medium',draftItem_col_draftItemWindow_size_small:attr.size==='small',draftItem_col_draftItemWindow_size_min:attr.size==='min',draftItem_col_draftItemWindow_checked:attr.checked,draftItem_col_draftItemWindow_disable:attr.disabled}">

                <div class="draftItem_row draftItem_row_row1">
                    <div :class="{draftItem_col:true,draftItem_col_itemWrap:true,draftItem_col_itemWrap_size_large:attr.size==='large',draftItem_col_itemWrap_size_medium:attr.size==='medium',draftItem_col_itemWrap_size_small:attr.size==='small',draftItem_col_itemWrap_size_min:attr.size==='min',draftItem_col_itemWrap_checked:attr.checked,draftItem_col_itemWrap_disable:attr.disabled}">

                        <div class="draftItem_row draftItem_row_row2">
                            <div @click="activityClick" :class="{draftItem_col:true,draftItem_col_item:true,draftItem_col_item_size_large:attr.size==='large',draftItem_col_item_size_medium:attr.size==='medium',draftItem_col_item_size_small:attr.size==='small',draftItem_col_item_size_min:attr.size==='min',draftItem_col_item_checked:attr.checked,draftItem_col_item_disable:attr.disabled}">

                                <div class="draftItem_row draftItem_row_row3">
                                    <div :class="{draftItem_col:true,draftItem_col_itemTop:true,draftItem_col_itemTop_size_large:attr.size==='large',draftItem_col_itemTop_size_medium:attr.size==='medium',draftItem_col_itemTop_size_small:attr.size==='small',draftItem_col_itemTop_size_min:attr.size==='min',draftItem_col_itemTop_checked:attr.checked,draftItem_col_itemTop_disable:attr.disabled}">

                                        <div class="draftItem_row draftItem_row_row5">
                                            <div :class="{draftItem_col:true,draftItem_col_img:true,draftItem_col_img_size_large:attr.size==='large',draftItem_col_img_size_medium:attr.size==='medium',draftItem_col_img_size_small:attr.size==='small',draftItem_col_img_size_min:attr.size==='min',draftItem_col_img_checked:attr.checked,draftItem_col_img_disable:attr.disabled}">

                                                <lm2b-image
                                                        ref="imgRef"
                                                        refId="imgRef"
                                                        v-show="pvt_isShow.img === 'imgRef'"
                                                        :paraVarPair="pvt_img.imgRef.paraVarPair"
                                                        :para="pvt_img.imgRef.para"
                                                        :attr="pvt_img.imgRef.attr">
                                                </lm2b-image>
                                            </div>
                                            <div :class="{draftItem_col:true,draftItem_col_content:true,draftItem_col_content_size_large:attr.size==='large',draftItem_col_content_size_medium:attr.size==='medium',draftItem_col_content_size_small:attr.size==='small',draftItem_col_content_size_min:attr.size==='min',draftItem_col_content_checked:attr.checked,draftItem_col_content_disable:attr.disabled}">

                                                <div class="draftItem_row draftItem_row_row6">
                                                    <div :class="{draftItem_col:true,draftItem_col_title:true,draftItem_col_title_size_large:attr.size==='large',draftItem_col_title_size_medium:attr.size==='medium',draftItem_col_title_size_small:attr.size==='small',draftItem_col_title_size_min:attr.size==='min',draftItem_col_title_checked:attr.checked,draftItem_col_title_disable:attr.disabled}">

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
                                                <div class="draftItem_row draftItem_row_row7">
                                                    <div :class="{draftItem_col:true,draftItem_col_time:true,draftItem_col_time_size_large:attr.size==='large',draftItem_col_time_size_medium:attr.size==='medium',draftItem_col_time_size_small:attr.size==='small',draftItem_col_time_size_min:attr.size==='min',draftItem_col_time_checked:attr.checked,draftItem_col_time_disable:attr.disabled}">

                                                        <lm2b-link-text
                                                                ref="timeRef"
                                                                refId="timeRef"
                                                                v-show="pvt_isShow.time === 'timeRef'"
                                                                :paraVarPair="pvt_time.timeRef.paraVarPair"
                                                                :para="pvt_time.timeRef.para"
                                                                :attr="pvt_time.timeRef.attr">
                                                        </lm2b-link-text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div :class="{draftItem_col:true,draftItem_col_deleteBtn:true,draftItem_col_deleteBtn_size_large:attr.size==='large',draftItem_col_deleteBtn_size_medium:attr.size==='medium',draftItem_col_deleteBtn_size_small:attr.size==='small',draftItem_col_deleteBtn_size_min:attr.size==='min',draftItem_col_deleteBtn_checked:attr.checked,draftItem_col_deleteBtn_disable:attr.disabled}">
                                <lm2b-button
                                        ref="delBtnRef"
                                        refId="delBtnRef"
                                        v-show="pvt_isShow.deleteBtn === 'delBtnRef'"
                                        :paraVarPair="pvt_deleteBtn.delBtnRef.paraVarPair"
                                        :para="pvt_deleteBtn.delBtnRef.para"
                                        :attr="pvt_deleteBtn.delBtnRef.attr">
                                </lm2b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="draftItem_row draftItem_row_confirmDialog" v-show="dialogWrap">
            <div :class="{draftItem_col:true,draftItem_col_confirmDialog:true,draftItem_col_confirmDialog_size_large:attr.size==='large',draftItem_col_confirmDialog_size_medium:attr.size==='medium',draftItem_col_confirmDialog_size_small:attr.size==='small',draftItem_col_confirmDialog_size_min:attr.size==='min',draftItem_col_confirmDialog_checked:attr.checked,draftItem_col_confirmDialog_disable:attr.disabled,draftItem_dialog:true}">

                <confirm-dialog
                        ref="confirmDialogRef"
                        refId="confirmDialogRef"
                        v-if="pvt_isShow.confirmDialog === 'confirmDialogRef'"
                        :paraVarPair="pvt_confirmDialog.confirmDialogRef.paraVarPair"
                        :para="pvt_confirmDialog.confirmDialogRef.para"
                        :attr="pvt_confirmDialog.confirmDialogRef.attr">
                </confirm-dialog>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import confirmDialog from '../../../activityManage/confirmDialog';

    export default {
        components: {confirmDialog},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'paraVarPair', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['img', 'title', 'time', 'deleteBtn', 'confirmDialog'],
                    subModule: ['imgRef', 'titleRef', 'timeRef', 'delBtnRef', 'confirmDialogRef'],
                },
                pvt_isShow: {
                    img: null,
                    title: null,
                    time: null,
                    deleteBtn: null,
                    confirmDialog: null,
                },
                pvt_eventPortInput: ['delClickEvent', 'draftClickEvent'],

                mac: mac.mac,

                activityTime: '12:34',
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
            pvt_deleteBtn: function () {
                return {
                    delBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['删除', ''],
                        },
                        attr: {
                            type: 'danger',
                            long: true,
                            width: '78px',
                            height: '86px'
                        },
                    },
                };
            },
            pvt_confirmDialog: function () {
                return {
                    confirmDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        },
                    }
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
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'draftItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['imgRef', 'titleRef', 'timeRef', 'delBtnRef']
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
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curActivityId];
                            dbData[that.mac.fd.groupActivity.startTime] = [];
                            dbData[that.mac.fd.groupActivity.endTime] = [];
                            dbData[that.mac.fd.groupActivity.status] = [];
                            dbData[that.mac.fd.groupActivity.enrollNumber] = [];
                            dbData[that.mac.fd.groupActivity.browerNumber] = [];
                            dbData[that.mac.fd.groupActivity.forwardNumber] = [];
                            this.sys.api.recordRead(tableName, dbData, function (result) {
                                let endTime = dbData[that.mac.fd.groupActivity.endTime][0].slice(5);
                                that.activityTime = endTime + ' 保存';

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
                            that.showSubModule(['delBtnRef'], false, function () {
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
                this.ep.draftClickEvent(this.para.curActivityId)
            },

            deleteClick: function () {
                let that = this;
                let data = {
                    ref: 'delete',
                    title: '温馨提示',
                    desc: '您确定删除该草稿吗?',
                    btnText: ['取消', '确定']
                };
                that.dialogWrap = true;
                that.showSubModule('confirmDialogRef', true, function () {
                    that.sm.confirmDialogRef.startModule(data, function () {
                    }, function () {
                    });
                }, function () {
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

            dialogConfirmWrap: function (refId) {
                let that = this;
                that.dialogWrap = false;
                that.ep.delClickEvent(this.para.curActivityId, function () {
                }, function () {
                });
            },
            confirmDialogCancel: function (refId) {
                this.dialogWrap = false;
            },



            delBtnRef_buttonClickEvent: function () {
                this.deleteClick();
            },
            confirmDialogRef_confirmEvent: function (refId) {
                this.dialogConfirmWrap(refId);
            },
            confirmDialogRef_cancelEvent: function (refId) {
                this.confirmDialogCancel(refId);
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .draftItem_container {
    }

    .draftItem_row {
        display: flex;
        flex: 1;
    }

    .draftItem_col {
        display: flex;
        flex-direction: column;
    }

    .draftItem_col_draftItemWindow_size_medium {
        width: @releaseItem-releaseItemWindow-medium-width;
        margin: @releaseItem-releaseItemWindow-medium-margin;
    }

    .draftItem_col_draftItemWindow {
        background-color: mix(@releaseItem-releaseItemWindow-background-color, #fff, @releaseItem-releaseItemWindow-background-color-opacity);
    }

    .draftItem_col_itemWrap_size_medium {
        width: @releaseItem-itemWrap-medium-width;
        overflow: auto;
    }

    .draftItem_col_item_size_medium {
        width: @releaseItem-item-medium-width;
        flex: 0 0 100%;
    }

    .draftItem_col_deleteBtn_size_medium {
        width: @releaseItem-deleteBtn-medium-width;
    }

    .draftItem_col_itemTop_size_medium {
        width: @releaseItem-itemTop-medium-width;
        padding: @releaseItem-itemTop-medium-padding;
    }

    .draftItem_col_itemTop {
        border-style: @releaseItem-itemTop-border-style;
        border-width: @releaseItem-itemTop-border-width;
        border-color: mix(@releaseItem-itemTop-border-color, #fff, @releaseItem-itemTop-hover-border-color-opacity);
        box-sizing: border-box;
    }

    .draftItem_col_img_size_medium {
        width: @releaseItem-img-medium-width;
        height: @releaseItem-img-medium-height;
    }

    .draftItem_col_content_size_medium {
        width: @releaseItem-content-medium-width;
        padding: @releaseItem-content-medium-padding;
        box-sizing: border-box;
    }

    .draftItem_col_title_size_medium {
        width: @releaseItem-title-medium-width;
        margin: @releaseItem-title-medium-margin;
    }

    .draftItem_col_time_size_medium {
        width: @releaseItem-time-medium-width;
    }

    .draftItem_row_confirmDialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 12;
    }

    .draftItem_dialog {
        position: absolute;
        left: 50%;
        top: 50%; /*新增*/
        transform: translate(-50%, -50%);
    }
</style>