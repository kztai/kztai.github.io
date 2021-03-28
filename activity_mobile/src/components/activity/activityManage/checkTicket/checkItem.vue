<template>
    <div class="checkItem_container">
        <div class="checkItem_row checkItem_row_checkItemRow">
            <div @click="itemClick" :class="{checkItem_col:true,checkItem_col_checkItemWindow:true,checkItem_col_checkItemWindow_size_large:attr.size==='large',checkItem_col_checkItemWindow_size_medium:attr.size==='medium',checkItem_col_checkItemWindow_size_small:attr.size==='small',checkItem_col_checkItemWindow_size_min:attr.size==='min',checkItem_col_checkItemWindow_checked:attr.checked,checkItem_col_checkItemWindow_disable:attr.disabled}">

                <div class="checkItem_row checkItem_row_row1">
                    <div :class="{checkItem_col:true,checkItem_col_itemLeft:true,checkItem_col_itemLeft_size_large:attr.size==='large',checkItem_col_itemLeft_size_medium:attr.size==='medium',checkItem_col_itemLeft_size_small:attr.size==='small',checkItem_col_itemLeft_size_min:attr.size==='min',checkItem_col_itemLeft_checked:attr.checked,checkItem_col_itemLeft_disable:attr.disabled}">

                        <div class="checkItem_row checkItem_row_row2">
                            <div :class="{checkItem_col:true,checkItem_col_img:true,checkItem_col_img_size_large:attr.size==='large',checkItem_col_img_size_medium:attr.size==='medium',checkItem_col_img_size_small:attr.size==='small',checkItem_col_img_size_min:attr.size==='min',checkItem_col_img_checked:attr.checked,checkItem_col_img_disable:attr.disabled}">

                                <lm2b-image
                                        ref="imgRef"
                                        refId="imgRef"
                                        v-show="pvt_isShow.img === 'imgRef'"
                                        :paraVarPair="pvt_img.imgRef.paraVarPair"
                                        :para="pvt_img.imgRef.para"
                                        :attr="pvt_img.imgRef.attr">
                                </lm2b-image>
                            </div>
                            <div :class="{checkItem_col:true,checkItem_col_content:true,checkItem_col_content_size_large:attr.size==='large',checkItem_col_content_size_medium:attr.size==='medium',checkItem_col_content_size_small:attr.size==='small',checkItem_col_content_size_min:attr.size==='min',checkItem_col_content_checked:attr.checked,checkItem_col_content_disable:attr.disabled}">

                                <div class="checkItem_row checkItem_row_row3">
                                    <div :class="{checkItem_col:true,checkItem_col_name:true,checkItem_col_name_size_large:attr.size==='large',checkItem_col_name_size_medium:attr.size==='medium',checkItem_col_name_size_small:attr.size==='small',checkItem_col_name_size_min:attr.size==='min',checkItem_col_name_checked:attr.checked,checkItem_col_name_disable:attr.disabled}">

                                        <lm2b-link-text
                                                ref="nameRef"
                                                refId="nameRef"
                                                v-show="pvt_isShow.name === 'nameRef'"
                                                :paraVarPair="pvt_name.nameRef.paraVarPair"
                                                :para="pvt_name.nameRef.para"
                                                :attr="pvt_name.nameRef.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                                <div class="checkItem_row checkItem_row_row4">
                                    <div :class="{checkItem_col:true,checkItem_col_ticketName:true,checkItem_col_ticketName_size_large:attr.size==='large',checkItem_col_ticketName_size_medium:attr.size==='medium',checkItem_col_ticketName_size_small:attr.size==='small',checkItem_col_ticketName_size_min:attr.size==='min',checkItem_col_ticketName_checked:attr.checked,checkItem_col_ticketName_disable:attr.disabled}">

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
                            </div>
                        </div>
                    </div>
                    <div :class="{checkItem_col:true,checkItem_col_itemRight:true,checkItem_col_itemRight_size_large:attr.size==='large',checkItem_col_itemRight_size_medium:attr.size==='medium',checkItem_col_itemRight_size_small:attr.size==='small',checkItem_col_itemRight_size_min:attr.size==='min',checkItem_col_itemRight_checked:attr.checked,checkItem_col_itemRight_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="priceRef"
                                refId="priceRef"
                                v-show="pvt_isShow.itemRight === 'priceRef'"
                                :paraVarPair="pvt_itemRight.priceRef.paraVarPair"
                                :para="pvt_itemRight.priceRef.para"
                                :attr="pvt_itemRight.priceRef.attr">
                        </lm2b-link-text>
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
                pvt_subModuleMap: {
                    vessel: ['img', 'name', 'ticketName', 'itemRight'],
                    subModule: ['imgRef', 'nameRef', 'ticketNameRef', 'priceRef'],
                },
                pvt_isShow: {
                    img: null,
                    name: null,
                    ticketName: null,
                    itemRight: null,
                },
                pvt_eventPortInput: ['orderDetailEvent'],

                mac: mac.mac,

                priceText: null,
                curTicketId: null,
                curOrderId: null,
            };
        },
        watch: {},
        computed: {
            pvt_img: function () {
                return {
                    imgRef: {
                        paraVarPair: {},
                        para: {
                            image: 'http://img2.imgtn.bdimg.com/it/u=2915512436,1541993188&fm=26&gp=0.jpg',
                            // image: [{
                            //     $table: this.mac.tb.groupActivityOrder,
                            //     $arrField: [this.mac.fd.groupActivityOrder.headPortrait],
                            //     $arrValue: [this.curOrderId]
                            // }],
                        },
                        attr: {},
                    },
                };
            },
            pvt_name: function () {
                return {
                    nameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.name],
                                $arrValue: [this.para.curBillId]
                            }],
                        },
                        attr: {
                            fontSize: '13px',
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
                            color: '#999',
                            fontSize: '13px',
                        },
                    },
                };
            },
            pvt_itemRight: function () {
                return {
                    priceRef: {
                        paraVarPair: {
                            textData: 'priceText',
                        },
                        para: {
                            textData: this.priceText,
                        },
                        attr: {
                            color: '#FC7122',
                            fontSize: '13px',
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
                let fnname = 'checkItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr:['imgRef', 'nameRef', 'ticketNameRef', 'priceRef']
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
                            that.curOrderId = null;
                            that.curTicketId = null;
                            that.priceText = '';

                            that.forceUpdateData(function () {
                                para.nStep = 'getParentId';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
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
                                that.priceText = '￥' + dbData[that.mac.fd.groupActivityOrder.price][0];
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
                this.ep.orderDetailEvent(this.para.curBillId, function () {

                }, function () {

                });
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .checkItem_container {
    }

    .checkItem_row {
        display: flex;
        flex: 1;
    }

    .checkItem_col {
        display: flex;
        flex-direction: column;
    }

    .checkItem_col_checkItemWindow_size_medium {
        width: @checkItem-checkItemWindow-medium-width;
        padding: @checkItem-checkItemWindow-medium-padding;
    }

    .checkItem_col_checkItemWindow {
        border-style: @checkItem-checkItemWindow-border-style;
        border-width: @checkItem-checkItemWindow-border-width;
        border-color: mix(@checkItem-checkItemWindow-border-color, #fff, @checkItem-checkItemWindow-hover-border-color-opacity);
    }

    .checkItem_col_itemLeft_size_medium {
        width: @checkItem-itemLeft-medium-width;
    }

    .checkItem_col_itemRight_size_medium {
        width: @checkItem-itemRight-medium-width;
        align-items: @checkItem-itemRight-medium-horizontal-position;
        justify-content: @checkItem-itemRight-medium-vertical-position;
    }

    .checkItem_col_img_size_medium {
        width: @checkItem-img-medium-width;
        height: @checkItem-img-medium-height;
        margin: @checkItem-img-medium-margin;
        overflow: hidden;  /*新增*/
    }

    .checkItem_col_img {
        border-radius: @checkItem-img-border-radius;
    }

    .checkItem_col_content_size_medium {
        width: @checkItem-content-medium-width;
    }

    .checkItem_col_name_size_medium {
        width: @checkItem-name-medium-width;
        margin: @checkItem-name-medium-margin;
    }

    .checkItem_col_ticketName_size_medium {
        width: @checkItem-ticketName-medium-width;
    }
</style>