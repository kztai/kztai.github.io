<template>
    <div class="orderSelectItem1_container">
        <div class="orderSelectItem1_row orderSelectItem1_row_orderSelectItem1Row">
            <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_orderSelectItem1Window:true,orderSelectItem1_col_orderSelectItem1Window_size_large:attr.size==='large',orderSelectItem1_col_orderSelectItem1Window_size_medium:attr.size==='medium',orderSelectItem1_col_orderSelectItem1Window_size_small:attr.size==='small',orderSelectItem1_col_orderSelectItem1Window_size_min:attr.size==='min',orderSelectItem1_col_orderSelectItem1Window_checked:attr.checked,orderSelectItem1_col_orderSelectItem1Window_disable:attr.disabled}">

                <div class="orderSelectItem1_row orderSelectItem1_row_row1">
                    <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_checkbox:true,orderSelectItem1_col_checkbox_size_large:attr.size==='large',orderSelectItem1_col_checkbox_size_medium:attr.size==='medium',orderSelectItem1_col_checkbox_size_small:attr.size==='small',orderSelectItem1_col_checkbox_size_min:attr.size==='min',orderSelectItem1_col_checkbox_checked:attr.checked,orderSelectItem1_col_checkbox_disable:attr.disabled}">

                        <lm2b-checkbox
                                ref="checkboxRef"
                                refId="checkboxRef"
                                v-show="pvt_isShow.checkbox === 'checkboxRef'"
                                :paraVarPair="pvt_checkbox.checkboxRef.paraVarPair"
                                :para="pvt_checkbox.checkboxRef.para"
                                :attr="pvt_checkbox.checkboxRef.attr">
                        </lm2b-checkbox>
                    </div>
                    <div @click="orderClick" :class="{orderSelectItem1_col:true,orderSelectItem1_col_content:true,orderSelectItem1_col_content_size_large:attr.size==='large',orderSelectItem1_col_content_size_medium:attr.size==='medium',orderSelectItem1_col_content_size_small:attr.size==='small',orderSelectItem1_col_content_size_min:attr.size==='min',orderSelectItem1_col_content_checked:attr.checked,orderSelectItem1_col_content_disable:attr.disabled}">

                        <div class="orderSelectItem1_row orderSelectItem1_row_row2">
                            <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_contentLeft:true,orderSelectItem1_col_contentLeft_size_large:attr.size==='large',orderSelectItem1_col_contentLeft_size_medium:attr.size==='medium',orderSelectItem1_col_contentLeft_size_small:attr.size==='small',orderSelectItem1_col_contentLeft_size_min:attr.size==='min',orderSelectItem1_col_contentLeft_checked:attr.checked,orderSelectItem1_col_contentLeft_disable:attr.disabled}">

                                <div class="orderSelectItem1_row orderSelectItem1_row_row3">
                                    <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_img:true,orderSelectItem1_col_img_size_large:attr.size==='large',orderSelectItem1_col_img_size_medium:attr.size==='medium',orderSelectItem1_col_img_size_small:attr.size==='small',orderSelectItem1_col_img_size_min:attr.size==='min',orderSelectItem1_col_img_checked:attr.checked,orderSelectItem1_col_img_disable:attr.disabled}">

                                        <lm2b-image
                                                ref="imgRef"
                                                refId="imgRef"
                                                v-show="pvt_isShow.img === 'imgRef'"
                                                :paraVarPair="pvt_img.imgRef.paraVarPair"
                                                :para="pvt_img.imgRef.para"
                                                :attr="pvt_img.imgRef.attr">
                                        </lm2b-image>
                                    </div>
                                    <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_userInfo:true,orderSelectItem1_col_userInfo_size_large:attr.size==='large',orderSelectItem1_col_userInfo_size_medium:attr.size==='medium',orderSelectItem1_col_userInfo_size_small:attr.size==='small',orderSelectItem1_col_userInfo_size_min:attr.size==='min',orderSelectItem1_col_userInfo_checked:attr.checked,orderSelectItem1_col_userInfo_disable:attr.disabled}">

                                        <div class="orderSelectItem1_row orderSelectItem1_row_row4">
                                            <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_userName:true,orderSelectItem1_col_userName_size_large:attr.size==='large',orderSelectItem1_col_userName_size_medium:attr.size==='medium',orderSelectItem1_col_userName_size_small:attr.size==='small',orderSelectItem1_col_userName_size_min:attr.size==='min',orderSelectItem1_col_userName_checked:attr.checked,orderSelectItem1_col_userName_disable:attr.disabled}">

                                                <lm2b-link-text
                                                        ref="userNameRef"
                                                        refId="userNameRef"
                                                        v-show="pvt_isShow.userName === 'userNameRef'"
                                                        :paraVarPair="pvt_userName.userNameRef.paraVarPair"
                                                        :para="pvt_userName.userNameRef.para"
                                                        :attr="pvt_userName.userNameRef.attr">
                                                </lm2b-link-text>
                                            </div>
                                        </div>
                                        <div class="orderSelectItem1_row orderSelectItem1_row_row5">
                                            <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_userPhone:true,orderSelectItem1_col_userPhone_size_large:attr.size==='large',orderSelectItem1_col_userPhone_size_medium:attr.size==='medium',orderSelectItem1_col_userPhone_size_small:attr.size==='small',orderSelectItem1_col_userPhone_size_min:attr.size==='min',orderSelectItem1_col_userPhone_checked:attr.checked,orderSelectItem1_col_userPhone_disable:attr.disabled}">

                                                <lm2b-link-text
                                                        ref="userPhoneRef"
                                                        refId="userPhoneRef"
                                                        v-show="pvt_isShow.userPhone === 'userPhoneRef'"
                                                        :paraVarPair="pvt_userPhone.userPhoneRef.paraVarPair"
                                                        :para="pvt_userPhone.userPhoneRef.para"
                                                        :attr="pvt_userPhone.userPhoneRef.attr">
                                                </lm2b-link-text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_contentMiddle:true,orderSelectItem1_col_contentMiddle_size_large:attr.size==='large',orderSelectItem1_col_contentMiddle_size_medium:attr.size==='medium',orderSelectItem1_col_contentMiddle_size_small:attr.size==='small',orderSelectItem1_col_contentMiddle_size_min:attr.size==='min',orderSelectItem1_col_contentMiddle_checked:attr.checked,orderSelectItem1_col_contentMiddle_disable:attr.disabled}">

                                <div class="orderSelectItem1_row orderSelectItem1_row_row6">
                                    <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_ticketName:true,orderSelectItem1_col_ticketName_size_large:attr.size==='large',orderSelectItem1_col_ticketName_size_medium:attr.size==='medium',orderSelectItem1_col_ticketName_size_small:attr.size==='small',orderSelectItem1_col_ticketName_size_min:attr.size==='min',orderSelectItem1_col_ticketName_checked:attr.checked,orderSelectItem1_col_ticketName_disable:attr.disabled}">

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
                                <div class="orderSelectItem1_row orderSelectItem1_row_row7">
                                    <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_ticketPrice:true,orderSelectItem1_col_ticketPrice_size_large:attr.size==='large',orderSelectItem1_col_ticketPrice_size_medium:attr.size==='medium',orderSelectItem1_col_ticketPrice_size_small:attr.size==='small',orderSelectItem1_col_ticketPrice_size_min:attr.size==='min',orderSelectItem1_col_ticketPrice_checked:attr.checked,orderSelectItem1_col_ticketPrice_disable:attr.disabled}">

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
                            <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_contentRight:true,orderSelectItem1_col_contentRight_size_large:attr.size==='large',orderSelectItem1_col_contentRight_size_medium:attr.size==='medium',orderSelectItem1_col_contentRight_size_small:attr.size==='small',orderSelectItem1_col_contentRight_size_min:attr.size==='min',orderSelectItem1_col_contentRight_checked:attr.checked,orderSelectItem1_col_contentRight_disable:attr.disabled}">

                                <div class="orderSelectItem1_row orderSelectItem1_row_row8">
                                    <div @click.stop="" :class="{orderSelectItem1_col:true,orderSelectItem1_col_msgBtn:true,orderSelectItem1_col_msgBtn_size_large:attr.size==='large',orderSelectItem1_col_msgBtn_size_medium:attr.size==='medium',orderSelectItem1_col_msgBtn_size_small:attr.size==='small',orderSelectItem1_col_msgBtn_size_min:attr.size==='min',orderSelectItem1_col_msgBtn_checked:attr.checked,orderSelectItem1_col_msgBtn_disable:attr.disabled}">

                                        <lm2b-button
                                                ref="msgBtnRef"
                                                refId="msgBtnRef"
                                                v-show="pvt_isShow.msgBtn === 'msgBtnRef'"
                                                :paraVarPair="pvt_msgBtn.msgBtnRef.paraVarPair"
                                                :para="pvt_msgBtn.msgBtnRef.para"
                                                :attr="pvt_msgBtn.msgBtnRef.attr">
                                        </lm2b-button>
                                    </div>
                                    <div :class="{orderSelectItem1_col:true,orderSelectItem1_col_status:true,orderSelectItem1_col_status_size_large:attr.size==='large',orderSelectItem1_col_status_size_medium:attr.size==='medium',orderSelectItem1_col_status_size_small:attr.size==='small',orderSelectItem1_col_status_size_min:attr.size==='min',orderSelectItem1_col_status_checked:attr.checked,orderSelectItem1_col_status_disable:attr.disabled}">

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
        props: ['refId','para','attr','paraVarPair','number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['checkbox', 'img', 'userName', 'userPhone', 'ticketName', 'ticketPrice', 'msgBtn', 'status'],
                    subModule: ['checkboxRef', 'imgRef', 'userNameRef', 'userPhoneRef', 'ticketNameRef', 'ticketPriceRef', 'msgBtnRef', 'statusRef'],
                },
                pvt_isShow: {
                    checkbox: null,
                    img: null,
                    userName: null,
                    userPhone: null,
                    ticketName: null,
                    ticketPrice: null,
                    msgBtn: null,
                    status: null,
                },
                pvt_eventPortInput: ['toggleApply', 'refundExplainEvent', 'orderDetailEvent'],

                mac:mac.mac,

                itemSelected: [],
                priceText: '',
                statusText: '待审核',
                curTicketId: null,
            };
        },
        watch: {},
        computed: {
            pvt_checkbox: function () {
                return {
                    checkboxRef: {
                        paraVarPair: {
                            checkData: 'itemSelected',
                        },
                        para: {
                            checkData: this.itemSelected,
                        },
                        attr: {
                            checkboxArr: [{label: 1, text: ''}],
                            size: 'mini',
                            define: ['van-icon-circle', 'van-icon-passed'],
                        },
                    },
                };
            },
            pvt_img: function () {
                return {
                    imgRef:{
                        paraVarPair:{
                        },
                        para: {
                            /*        image: [{
                                        $table: this.mac.tb.groupActivityOrder,
                                        $arrField: [this.mac.fd.groupActivityOrder.headPortrait],
                                        $arrValue: [this.curOrderId]
                                    }],*/
                            image: 'http://img1.imgtn.bdimg.com/it/u=2827671765,2134146140&fm=26&gp=0.jpg'
                        },
                        attr:{
                        },
                    },
                };
            },
            pvt_userName: function () {
                return {
                    userNameRef: {
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
            pvt_userPhone: function () {
                return {
                    userPhoneRef: {
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
            pvt_msgBtn: function () {
                return {
                    msgBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'van-icon-info-o'],
                        },
                        attr: {
                            type: 'text',
                            width: '20px',
                            height: '20px',
                        },
                    },
                };
            },
            pvt_status: function () {
                return {
                    statusRef: {
                        paraVarPair: {
                            textData: 'statusText',
                        },
                        para: {
                            textData: this.statusText,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
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
            startModule:function(isRefund,successCallBack,errorCallBack){
                let that = this;
                let fnname = 'orderSelectItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['checkboxRef','imgRef','userNameRef','userPhoneRef','ticketNameRef','ticketPriceRef','statusRef']
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
                            this.curOrderId = null;
                            this.curTicketId = null;
                            this.itemSelected = [];
                            this.priceText = '';
                            this.priceNum = 0;
                            this.statusText = '待审核';

                            if(isRefund) {
                                para.refArr.push('msgBtnRef');
                                that.statusText = '待退款';
                            }
                            para.nStep = 'getParentId';
                            dbFlag++;
                            break;
                        case 'getParentId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = [that.para.curBillId];
                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                that.curOrderId = result[0];
                                para.nStep = 'getTicketId';
                                if (++dbFlag === 2) {
                                    that.startModule(isRefund, successCallBack, errorCallBack)
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
                                that.priceNum = dbData[that.mac.fd.groupActivityOrder.price][0];
                                that.priceText = '￥' + that.priceNum;
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(isRefund, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
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
                                    that.startModule(isRefund, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(isRefund, successCallBack, errorCallBack)
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

            orderClick:function(){
                this.ep.orderDetailEvent(this.para.curBillId, function () {
                    
                }, function () {
                    
                })
            },
            selectApply: function (select) {
                let that = this;
                if (select) {
                    if (this.itemSelected.length === 0) {
                        this.itemSelected = [1];
                        this.forceUpdateData(function () {
                            that.sm.checkboxRef.startModule(function () {
                            }, function () {
                            });
                        });
                    }
                } else {
                    if (this.itemSelected.length === 1) {
                        this.itemSelected = [];
                        this.forceUpdateData(function () {
                            that.sm.checkboxRef.startModule(function () {
                            }, function () {
                            });
                        });
                    }
                }
            },
            toggleApply: function() {
                if (this.itemSelected.length > 0) {
                    this.ep.toggleApply(true, this.para.curBillId)
                } else {
                    this.ep.toggleApply(false, this.para.curBillId)
                }
            },

            explainClick(successCallBack,errorCallBack) {
                this.ep.refundExplainEvent(this.para.curBillId, function () {
                    
                }, function () {
                    
                });
            },
            
            

            msgBtnRef_buttonClickEvent:function(successCallBack,errorCallBack){
                this.explainClick(successCallBack,errorCallBack);
            },
            checkboxRef_dataModifyEvent:function(){
                this.toggleApply();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .orderSelectItem1_container {
    }
    .orderSelectItem1_row {
        display:flex;
        flex:1;
    }
    .orderSelectItem1_col {
        display:flex;
        flex-direction:column;
    }
    .orderSelectItem1_col_orderSelectItem1Window_size_medium {
        width:@orderSelectItem1-orderSelectItem1Window-medium-width;
        padding:@orderSelectItem1-orderSelectItem1Window-medium-padding;
    }
    .orderSelectItem1_col_orderSelectItem1Window {
        border-style:@orderSelectItem1-orderSelectItem1Window-border-style;
        border-width:@orderSelectItem1-orderSelectItem1Window-border-width;
        border-color:mix(@orderSelectItem1-orderSelectItem1Window-border-color,#fff,@orderSelectItem1-orderSelectItem1Window-hover-border-color-opacity);
        background-color:mix(@orderSelectItem1-orderSelectItem1Window-background-color,#fff,@orderSelectItem1-orderSelectItem1Window-background-color-opacity);
    }
    .orderSelectItem1_col_checkbox_size_medium {
        width:@orderSelectItem1-checkbox-medium-width;
        align-items:@orderSelectItem1-checkbox-medium-horizontal-position;
        justify-content:@orderSelectItem1-checkbox-medium-vertical-position;
    }
    .orderSelectItem1_col_content_size_medium {
        width:@orderSelectItem1-content-medium-width;
        margin:@orderSelectItem1-content-medium-margin;
        justify-content:@orderSelectItem1-content-medium-vertical-position;
    }
    .orderSelectItem1_col_contentLeft_size_medium {
        width:@orderSelectItem1-contentLeft-medium-width;
        align-items:@orderSelectItem1-contentLeft-medium-horizontal-position;
        justify-content:@orderSelectItem1-contentLeft-medium-vertical-position;
    }
    .orderSelectItem1_col_contentMiddle_size_medium {
        width:@orderSelectItem1-contentMiddle-medium-width;
        justify-content:@orderSelectItem1-contentMiddle-medium-vertical-position;
        align-items:@orderSelectItem1-contentMiddle-medium-horizontal-position;
    }
    .orderSelectItem1_col_contentRight_size_medium {
        width:@orderSelectItem1-contentRight-medium-width;
        align-items:@orderSelectItem1-contentRight-medium-horizontal-position;
        justify-content:@orderSelectItem1-contentRight-medium-vertical-position;
    }
    .orderSelectItem1_col_img_size_medium {
        width:@orderSelectItem1-img-medium-width;
        height:@orderSelectItem1-img-medium-height;
        margin:@orderSelectItem1-img-medium-margin;
        align-items:@orderSelectItem1-img-medium-horizontal-position;
        justify-content:@orderSelectItem1-img-medium-vertical-position;
        overflow: hidden; /*新增*/
    }
    .orderSelectItem1_col_img {
        border-radius:@orderSelectItem1-img-border-radius;
    }
    .orderSelectItem1_col_userInfo_size_medium {
        width:@orderSelectItem1-userInfo-medium-width;
        align-items:@orderSelectItem1-userInfo-medium-horizontal-position;
        justify-content:@orderSelectItem1-userInfo-medium-vertical-position;
    }
    .orderSelectItem1_col_userName_size_medium {
        width:@orderSelectItem1-userName-medium-width;
        margin:@orderSelectItem1-userName-medium-margin;
        align-items:@orderSelectItem1-userName-medium-horizontal-position;
        justify-content:@orderSelectItem1-userName-medium-vertical-position;
    }
    .orderSelectItem1_col_userPhone_size_medium {
        width:@orderSelectItem1-userPhone-medium-width;
        align-items:@orderSelectItem1-userPhone-medium-horizontal-position;
    }
    .orderSelectItem1_col_ticketName_size_medium {
        width:@orderSelectItem1-ticketName-medium-width;
        margin:@orderSelectItem1-ticketName-medium-margin;
    }
    .orderSelectItem1_col_ticketPrice_size_medium {
        width:@orderSelectItem1-ticketPrice-medium-width;
    }
    .orderSelectItem1_col_msgBtn_size_medium {
        width:@orderSelectItem1-msgBtn-medium-width;
        align-items:@orderSelectItem1-msgBtn-medium-horizontal-position;
        justify-content:@orderSelectItem1-msgBtn-medium-vertical-position;
    }
    .orderSelectItem1_col_status_size_medium {
        width:@orderSelectItem1-status-medium-width;
        /*<!--padding:@orderSelectItem1-status-medium-padding;-->*/
        margin:@orderSelectItem1-status-medium-margin;
        align-items:@orderSelectItem1-status-medium-horizontal-position;
        justify-content:@orderSelectItem1-status-medium-vertical-position;
    }
</style>