<template>
    <div class="applyItem_container" @click="itemClick">  <!--新增-->
        <div class="applyItem_row applyItem_row_applyItemRow">
            <div :class="{applyItem_col:true,applyItem_col_applyItemWindow:true,applyItem_col_applyItemWindow_size_large:attr.size==='large',applyItem_col_applyItemWindow_size_medium:attr.size==='medium',applyItem_col_applyItemWindow_size_small:attr.size==='small',applyItem_col_applyItemWindow_size_min:attr.size==='min',applyItem_col_applyItemWindow_checked:attr.checked,applyItem_col_applyItemWindow_disable:attr.disabled}">

                <div class="applyItem_row applyItem_row_row1">
                    <div :class="{applyItem_col:true,applyItem_col_itemImg:true,applyItem_col_itemImg_size_large:attr.size==='large',applyItem_col_itemImg_size_medium:attr.size==='medium',applyItem_col_itemImg_size_small:attr.size==='small',applyItem_col_itemImg_size_min:attr.size==='min',applyItem_col_itemImg_checked:attr.checked,applyItem_col_itemImg_disable:attr.disabled}">

                        <lm2b-image
                                ref="imgRef"
                                refId="imgRef"
                                v-show="pvt_isShow.itemImg === 'imgRef'"
                                :paraVarPair="pvt_itemImg.imgRef.paraVarPair"
                                :para="pvt_itemImg.imgRef.para"
                                :attr="pvt_itemImg.imgRef.attr">
                        </lm2b-image>
                    </div>
                    <div :class="{applyItem_col:true,applyItem_col_itemContent:true,applyItem_col_itemContent_size_large:attr.size==='large',applyItem_col_itemContent_size_medium:attr.size==='medium',applyItem_col_itemContent_size_small:attr.size==='small',applyItem_col_itemContent_size_min:attr.size==='min',applyItem_col_itemContent_checked:attr.checked,applyItem_col_itemContent_disable:attr.disabled}">

                        <div class="applyItem_row applyItem_row_row2">
                            <div :class="{applyItem_col:true,applyItem_col_contentLeft:true,applyItem_col_contentLeft_size_large:attr.size==='large',applyItem_col_contentLeft_size_medium:attr.size==='medium',applyItem_col_contentLeft_size_small:attr.size==='small',applyItem_col_contentLeft_size_min:attr.size==='min',applyItem_col_contentLeft_checked:attr.checked,applyItem_col_contentLeft_disable:attr.disabled}">

                                <div class="applyItem_row applyItem_row_row3">
                                    <div :class="{applyItem_col:true,applyItem_col_leftName:true,applyItem_col_leftName_size_large:attr.size==='large',applyItem_col_leftName_size_medium:attr.size==='medium',applyItem_col_leftName_size_small:attr.size==='small',applyItem_col_leftName_size_min:attr.size==='min',applyItem_col_leftName_checked:attr.checked,applyItem_col_leftName_disable:attr.disabled}">

                                        <lm2b-link-text
                                                ref="infoNameRef"
                                                refId="infoNameRef"
                                                v-show="pvt_isShow.leftName === 'infoNameRef'"
                                                :paraVarPair="pvt_leftName.infoNameRef.paraVarPair"
                                                :para="pvt_leftName.infoNameRef.para"
                                                :attr="pvt_leftName.infoNameRef.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                                <div class="applyItem_row applyItem_row_row4">
                                    <div :class="{applyItem_col:true,applyItem_col_leftPhone:true,applyItem_col_leftPhone_size_large:attr.size==='large',applyItem_col_leftPhone_size_medium:attr.size==='medium',applyItem_col_leftPhone_size_small:attr.size==='small',applyItem_col_leftPhone_size_min:attr.size==='min',applyItem_col_leftPhone_checked:attr.checked,applyItem_col_leftPhone_disable:attr.disabled}">

                                        <lm2b-link-text
                                                ref="infoPhoneRef"
                                                refId="infoPhoneRef"
                                                v-show="pvt_isShow.leftPhone === 'infoPhoneRef'"
                                                :paraVarPair="pvt_leftPhone.infoPhoneRef.paraVarPair"
                                                :para="pvt_leftPhone.infoPhoneRef.para"
                                                :attr="pvt_leftPhone.infoPhoneRef.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                            </div>
                            <div :class="{applyItem_col:true,applyItem_col_contentCenter:true,applyItem_col_contentCenter_size_large:attr.size==='large',applyItem_col_contentCenter_size_medium:attr.size==='medium',applyItem_col_contentCenter_size_small:attr.size==='small',applyItem_col_contentCenter_size_min:attr.size==='min',applyItem_col_contentCenter_checked:attr.checked,applyItem_col_contentCenter_disable:attr.disabled}">

                                <div class="applyItem_row applyItem_row_row5">
                                    <div :class="{applyItem_col:true,applyItem_col_ticketName:true,applyItem_col_ticketName_size_large:attr.size==='large',applyItem_col_ticketName_size_medium:attr.size==='medium',applyItem_col_ticketName_size_small:attr.size==='small',applyItem_col_ticketName_size_min:attr.size==='min',applyItem_col_ticketName_checked:attr.checked,applyItem_col_ticketName_disable:attr.disabled}">

                                        <lm2b-link-text
                                                ref="ticketNameRef"
                                                refId="ticketNameRef"
                                                v-show="pvt_isShow.ticketName === 'ticketNameRef'"
                                                :paraVarPair="pvt_ticketName.ticketNameRef.paraVarPair"
                                                :para="pvt_ticketName.ticketNameRef.para"
                                                :attr="pvt_ticketName.ticketNameRef.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                                <div class="applyItem_row applyItem_row_row6">
                                    <div :class="{applyItem_col:true,applyItem_col_ticketPrice:true,applyItem_col_ticketPrice_size_large:attr.size==='large',applyItem_col_ticketPrice_size_medium:attr.size==='medium',applyItem_col_ticketPrice_size_small:attr.size==='small',applyItem_col_ticketPrice_size_min:attr.size==='min',applyItem_col_ticketPrice_checked:attr.checked,applyItem_col_ticketPrice_disable:attr.disabled}">

                                        <lm2b-link-text
                                                ref="ticketPriceRef"
                                                refId="ticketPriceRef"
                                                v-show="pvt_isShow.ticketPrice === 'ticketPriceRef'"
                                                :paraVarPair="pvt_ticketPrice.ticketPriceRef.paraVarPair"
                                                :para="pvt_ticketPrice.ticketPriceRef.para"
                                                :attr="pvt_ticketPrice.ticketPriceRef.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                            </div>
                            <div :class="{applyItem_col:true,applyItem_col_contentRight:true,applyItem_col_contentRight_size_large:attr.size==='large',applyItem_col_contentRight_size_medium:attr.size==='medium',applyItem_col_contentRight_size_small:attr.size==='small',applyItem_col_contentRight_size_min:attr.size==='min',applyItem_col_contentRight_checked:attr.checked,applyItem_col_contentRight_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="statusRef"
                                        refId="statusRef"
                                        v-show="pvt_isShow.contentRight === 'statusRef'"
                                        :paraVarPair="pvt_contentRight.statusRef.paraVarPair"
                                        :para="pvt_contentRight.statusRef.para"
                                        :attr="pvt_contentRight.statusRef.attr">
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
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                mac: mac.mac,

                pvt_subModuleMap: {
                    vessel: ['leftName', 'leftPhone', 'ticketName', 'ticketPrice', 'contentRight', 'itemImg'],
                    subModule: ['infoNameRef', 'infoPhoneRef', 'ticketNameRef', 'ticketPriceRef', 'statusRef', 'imgRef'],
                },
                pvt_isShow: {
                    leftName: null,
                    leftPhone: null,
                    ticketName: null,
                    ticketPrice: null,
                    contentRight: null,
                    itemImg: null,
                },
                pvt_eventPortInput: ['orderDetailEvent'],

                curOrderId: null,
                curTicketId: null,
                billStatus: '',
                priceText: '',
                ticketPrice: 0,
            };
        },
        watch: {
            curBillId: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.curBillId) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.curBillId][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.curBillId] = val
                        }
                    }
                },
                deep: true
            },
        },
        computed: {
            pvt_itemImg: function () {
                return {
                    imgRef: {
                        paraVarPair: {},
                        para: {
                            /*        image: [{
                                        $table: this.mac.tb.groupActivityOrder,
                                        $arrField: [this.mac.fd.groupActivityOrder.headPortrait],
                                        $arrValue: [this.curOrderId]
                                    }],*/
                            image: 'http://img2.imgtn.bdimg.com/it/u=2915512436,1541993188&fm=26&gp=0.jpg'
                        },
                        attr: {
                            size: 'medium'
                        },
                    },
                };
            },
            pvt_leftName: function () {
                return {
                    infoNameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.name],
                                $arrValue: [this.para.curBillId]
                            }],
                        },
                        attr: {
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_leftPhone: function () {
                return {
                    infoPhoneRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.mobile],
                                $arrValue: [this.para.curBillId]
                            }],
                        },
                        attr: {
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_ticketName: function () {
                return {
                    ticketNameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.name],
                                // $arrValue: [1]
                                $arrValue: [this.curTicketId]
                            }],
                        },
                        attr: {
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_ticketPrice: function () {
                return {
                    ticketPriceRef: {
                        paraVarPair: {
                            textData: 'priceText',
                        },
                        para: {
                            textData: this.priceText,
                        },
                        attr: {
                            color: '#FC7122',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_contentRight: function () {
                return {
                    statusRef: {
                        paraVarPair: {
                            textData: 'billStatus',
                        },
                        para: {
                            textData: this.billStatus,
                        },
                        attr: {
                            color: '#666',
                            fontSize: '12px',
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
                let fnname = 'applyItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
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

                let refArr = ['infoNameRef', 'infoPhoneRef', 'ticketNameRef', 'ticketPriceRef', 'statusRef', 'imgRef'];

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'getBillData':
                            that.curOrderId = null;
                            that.curTicketId = null;
                            that.billStatus = '';
                            that.priceText = '';
                            that.ticketPrice = 0;
                            
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curBillId];
                            dbData[that.mac.fd.groupActivityBill.name] = [];
                            dbData[that.mac.fd.groupActivityBill.mobile] = [];
                            dbData[that.mac.fd.groupActivityBill.info] = [];
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                switch (dbData[that.mac.fd.groupActivityBill.status][0]) {
                                    case 0:
                                        that.billStatus = '待审核';
                                        break;
                                    case 1:
                                        that.billStatus = '待付款';
                                        break;
                                    case 2:
                                        that.billStatus = '待退款';
                                        break;
                                    case 3:
                                        that.billStatus = '退款中';
                                        break;
                                    case 4:
                                        that.billStatus = '已退款';
                                        break;
                                    case 5:
                                        that.billStatus = '已拒绝';
                                        break;
                                    case 6:
                                        that.billStatus = '待验票';
                                        break;
                                    case 7:
                                        that.billStatus = '已完成';
                                        break;
                                }

                                para.nStep = 'getParentId';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getParentId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = [that.para.curBillId];
                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                that.curOrderId = result[0];
                                para.nStep = 'getTicketId';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTicketId':
                            tableName = this.mac.tb.groupActivityOrder;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curOrderId];
                            dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [];
                            dbData[that.mac.fd.groupActivityOrder.price] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.curTicketId = dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID][0];
                                that.ticketPrice = dbData[that.mac.fd.groupActivityOrder.price][0];
                                that.priceText = '￥' + that.ticketPrice;
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }
                            that.sm[refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
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
            itemClick: function () {
                this.ep.orderDetailEvent(this.para.curBillId, function () {

                }, function () {

                });
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/

    .applyItem_container {
    }

    .applyItem_row {
        display: flex;
        flex: 1;
    }

    .applyItem_col {
        display: flex;
        flex-direction: column;
    }

    .applyItem_col_applyItemWindow_size_medium {
        width: @applyItem-applyItemWindow-medium-width;
        padding: @applyItem-applyItemWindow-medium-padding;
    }

    .applyItem_col_applyItemWindow {
        border-style: @applyItem-applyItemWindow-border-style;
        border-width: @applyItem-applyItemWindow-border-width;
        border-color: mix(@applyItem-applyItemWindow-border-color, #fff, @applyItem-applyItemWindow-hover-border-color-opacity);
    }

    .applyItem_col_itemImg_size_medium {
        width: @applyItem-itemImg-medium-width;
        height: @applyItem-itemImg-medium-height;
        margin: @applyItem-itemImg-medium-margin;
        overflow: hidden;  /*新增*/
    }

    .applyItem_col_itemImg {
        border-radius: @applyItem-itemImg-border-radius;
    }

    .applyItem_col_itemContent_size_medium {
        width: @applyItem-itemContent-medium-width;
    }

    .applyItem_col_contentLeft_size_medium {
        width: @applyItem-contentLeft-medium-width;
        align-items: @applyItem-contentLeft-medium-horizontal-position;
        justify-content: @applyItem-contentLeft-medium-vertical-position;
    }

    .applyItem_col_contentCenter_size_medium {
        width: @applyItem-contentCenter-medium-width;
        align-items: @applyItem-contentCenter-medium-horizontal-position;
        justify-content: @applyItem-contentCenter-medium-vertical-position;
    }

    .applyItem_col_contentRight_size_medium {
        width: @applyItem-contentRight-medium-width;
        align-items: @applyItem-contentRight-medium-horizontal-position;
        justify-content: @applyItem-contentRight-medium-vertical-position;
    }

    .applyItem_col_leftName_size_medium {
        width: @applyItem-leftName-medium-width;
        margin: @applyItem-leftName-medium-margin;
    }

    .applyItem_col_leftPhone_size_medium {
        width: @applyItem-leftPhone-medium-width;
    }

    .applyItem_col_ticketName_size_medium {
        width: @applyItem-ticketName-medium-width;
        margin: @applyItem-ticketName-medium-margin;
        align-items: @applyItem-ticketName-medium-horizontal-position;
    }

    .applyItem_col_ticketPrice_size_medium {
        width: @applyItem-ticketPrice-medium-width;
        align-items: @applyItem-ticketPrice-medium-horizontal-position;
    }
</style>