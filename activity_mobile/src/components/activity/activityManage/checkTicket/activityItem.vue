<template>
    <div class="activityItem_container">
        <div class="activityItem_row activityItem_row_activityItemRow">
            <div @click="itemClick" :class="{activityItem_col:true,activityItem_col_activityItemWindow:true,activityItem_col_activityItemWindow_size_large:attr.size==='large',activityItem_col_activityItemWindow_size_medium:attr.size==='medium',activityItem_col_activityItemWindow_size_small:attr.size==='small',activityItem_col_activityItemWindow_size_min:attr.size==='min',activityItem_col_activityItemWindow_checked:attr.checked,activityItem_col_activityItemWindow_disable:attr.disabled}">

                <div class="activityItem_row activityItem_row_row1">
                    <div :class="{activityItem_col:true,activityItem_col_img:true,activityItem_col_img_size_large:attr.size==='large',activityItem_col_img_size_medium:attr.size==='medium',activityItem_col_img_size_small:attr.size==='small',activityItem_col_img_size_min:attr.size==='min',activityItem_col_img_checked:attr.checked,activityItem_col_img_disable:attr.disabled}">

                        <lm2b-image
                                ref="imgRef"
                                refId="imgRef"
                                v-show="pvt_isShow.img === 'imgRef'"
                                :paraVarPair="pvt_img.imgRef.paraVarPair"
                                :para="pvt_img.imgRef.para"
                                :attr="pvt_img.imgRef.attr">
                        </lm2b-image>
                    </div>
                    <div :class="{activityItem_col:true,activityItem_col_content:true,activityItem_col_content_size_large:attr.size==='large',activityItem_col_content_size_medium:attr.size==='medium',activityItem_col_content_size_small:attr.size==='small',activityItem_col_content_size_min:attr.size==='min',activityItem_col_content_checked:attr.checked,activityItem_col_content_disable:attr.disabled}">

                        <div class="activityItem_row activityItem_row_row2">
                            <div :class="{activityItem_col:true,activityItem_col_title:true,activityItem_col_title_size_large:attr.size==='large',activityItem_col_title_size_medium:attr.size==='medium',activityItem_col_title_size_small:attr.size==='small',activityItem_col_title_size_min:attr.size==='min',activityItem_col_title_checked:attr.checked,activityItem_col_title_disable:attr.disabled}">

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
                        <div class="activityItem_row activityItem_row_row3">
                            <div :class="{activityItem_col:true,activityItem_col_check:true,activityItem_col_check_size_large:attr.size==='large',activityItem_col_check_size_medium:attr.size==='medium',activityItem_col_check_size_small:attr.size==='small',activityItem_col_check_size_min:attr.size==='min',activityItem_col_check_checked:attr.checked,activityItem_col_check_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="checkRef"
                                        refId="checkRef"
                                        v-show="pvt_isShow.check === 'checkRef'"
                                        :paraVarPair="pvt_check.checkRef.paraVarPair"
                                        :para="pvt_check.checkRef.para"
                                        :attr="pvt_check.checkRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="activityItem_row activityItem_row_row4">
                            <div :class="{activityItem_col:true,activityItem_col_checked:true,activityItem_col_checked_size_large:attr.size==='large',activityItem_col_checked_size_medium:attr.size==='medium',activityItem_col_checked_size_small:attr.size==='small',activityItem_col_checked_size_min:attr.size==='min',activityItem_col_checked_checked:attr.checked,activityItem_col_checked_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="checkedRef"
                                        refId="checkedRef"
                                        v-show="pvt_isShow.checked === 'checkedRef'"
                                        :paraVarPair="pvt_checked.checkedRef.paraVarPair"
                                        :para="pvt_checked.checkedRef.para"
                                        :attr="pvt_checked.checkedRef.attr">
                                </lm2b-link-text>
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
                    vessel: ['img', 'title', 'check', 'checked'],
                    subModule: ['imgRef', 'titleRef', 'checkRef', 'checkedRef'],
                },
                pvt_isShow: {
                    img: null,
                    title: null,
                    check: null,
                    checked: null,
                },
                pvt_eventPortInput: ['itemClickEvent'],

                mac: mac.mac,

                checkText: null,
                checkedText: null,
            };
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
                            image: 'http://img2.imgtn.bdimg.com/it/u=2915512436,1541993188&fm=26&gp=0.jpg',
                            /*        image: [{
                                  $table: this.mac.tb.groupActivity,
                                  $arrField: [this.mac.fd.groupActivity.poster],
                                  $arrValue: [this.para.curActivityId]
                              }],*/
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
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_check: function () {
                return {
                    checkRef: {
                        paraVarPair: {
                            textData: 'checkText',
                        },
                        para: {
                            textData: this.checkText,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                            icon: 'van-icon-todo-list-o',
                        },
                    },
                };
            },
            pvt_checked: function () {
                return {
                    checkedRef: {
                        paraVarPair: {
                            textData: 'checkedText',
                        },
                        para: {
                            textData: this.checkedText,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                            icon: 'van-icon-completed',
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
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'activityItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['imgRef', 'titleRef', 'checkRef', 'checkedRef']
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
                            tableName = this.mac.tb.groupActivityBill;
                            condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.checkTicket;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                that.checkText = '待验票' + dbData[that.mac.fd.id].length + '人';

                                para.nStep = 'getFinishNum';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getFinishNum':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.finish;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                that.checkedText = '已验票' + dbData[that.mac.fd.id].length + '人';

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
                            if(para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
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
            itemClick: function () {
                this.ep.itemClickEvent(this.para.curActivityId)
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .activityItem_container {
    }

    .activityItem_row {
        display: flex;
        flex: 1;
    }

    .activityItem_col {
        display: flex;
        flex-direction: column;
    }

    .activityItem_col_activityItemWindow_size_medium {
        width: @activityItem-activityItemWindow-medium-width;
        padding: @activityItem-activityItemWindow-medium-padding;
        margin: @activityItem-activityItemWindow-medium-margin;
    }

    .activityItem_col_activityItemWindow {
        background-color: mix(@activityItem-activityItemWindow-background-color, #fff, @activityItem-activityItemWindow-background-color-opacity);
    }

    .activityItem_col_img_size_medium {
        width: @activityItem-img-medium-width;
        height: @activityItem-img-medium-height;
    }

    .activityItem_col_content_size_medium {
        width: @activityItem-content-medium-width;
        height: @activityItem-content-medium-height;
        padding: @activityItem-content-medium-padding;
    }

    .activityItem_col_title_size_medium {
        width: @activityItem-title-medium-width;
        margin: @activityItem-title-medium-margin;
    }

    .activityItem_col_check_size_medium {
        width: @activityItem-check-medium-width;
        padding: @activityItem-check-medium-padding;
        margin: @activityItem-check-medium-margin;
    }

    .activityItem_col_checked_size_medium {
        width: @activityItem-checked-medium-width;
    }
</style>