<template>
    <div v-show="pvt_win.isShow.msgDialogWindow"
         :class="{msgDialog_container:true,msgDialog_col:true,msgDialog_col_msgDialogWindow:true,msgDialog_col_msgDialogWindow_size_large:attr.size==='large',msgDialog_col_msgDialogWindow_size_medium:attr.size==='medium',msgDialog_col_msgDialogWindow_size_small:attr.size==='small',msgDialog_col_msgDialogWindow_size_min:attr.size==='min',msgDialog_col_msgDialogWindow_checked:pvt_win.isChecked.msgDialogWindow,msgDialog_col_msgDialogWindow_disable:attr.disabled}"
         :style="pvt_win.style.msgDialogWindow">

        <div class="msgDialog_row msgDialog_row_row1">
            <div v-show="pvt_win.isShow.img"
                 :class="{msgDialog_col:true,msgDialog_col_img:true,msgDialog_col_img_size_large:attr.size==='large',msgDialog_col_img_size_medium:attr.size==='medium',msgDialog_col_img_size_small:attr.size==='small',msgDialog_col_img_size_min:attr.size==='min',msgDialog_col_img_checked:pvt_win.isChecked.img,msgDialog_col_img_disable:attr.disabled}"
                 :style="pvt_win.style.img">
                <lm2b-image
                        ref="imgRef"
                        refId="imgRef"
                        v-show="pvt_isShow.img === 'imgRef'"
                        :paraVarPair="pvt_img.imgRef.paraVarPair"
                        :para="pvt_img.imgRef.para"
                        :attr="pvt_img.imgRef.attr">
                </lm2b-image>
                <lm2b-image
                        ref="warningImgRef"
                        refId="warningImgRef"
                        v-show="pvt_isShow.img === 'warningImgRef'"
                        :paraVarPair="pvt_img.warningImgRef.paraVarPair"
                        :para="pvt_img.warningImgRef.para"
                        :attr="pvt_img.warningImgRef.attr">
                </lm2b-image>
                <lm2b-image
                        ref="errorImgRef"
                        refId="errorImgRef"
                        v-show="pvt_isShow.img === 'errorImgRef'"
                        :paraVarPair="pvt_img.errorImgRef.paraVarPair"
                        :para="pvt_img.errorImgRef.para"
                        :attr="pvt_img.errorImgRef.attr">
                </lm2b-image>
            </div>
        </div>
        <div class="msgDialog_row msgDialog_row_row3">
            <div v-show="pvt_win.isShow.message"
                 :class="{msgDialog_col:true,msgDialog_col_message:true,msgDialog_col_message_size_large:attr.size==='large',msgDialog_col_message_size_medium:attr.size==='medium',msgDialog_col_message_size_small:attr.size==='small',msgDialog_col_message_size_min:attr.size==='min',msgDialog_col_message_checked:pvt_win.isChecked.message,msgDialog_col_message_disable:attr.disabled}"
                 :style="pvt_win.style.message">

                <lm2b-link-text
                        ref="messageRef"
                        refId="messageRef"
                        v-show="pvt_isShow.message === 'messageRef'"
                        :paraVarPair="pvt_message.messageRef.paraVarPair"
                        :para="pvt_message.messageRef.para"
                        :attr="pvt_message.messageRef.attr">
                </lm2b-link-text>
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
                    vessel: [ 'img', 'message', 'img', 'img'],
                    subModule: ['imgRef', 'messageRef', 'warningImgRef', 'errorImgRef'],
                },
                pvt_isShow: {
                    img: null,
                    message: null,
                },
                pvt_win: {
                    isShow: {
                        msgDialogWindow: true,
                        img: true,
                        message: true,
                    },
                    isChecked: {
                        msgDialogWindow: false,
                        img: false,
                        message: false,
                    },
                    style: {
                        msgDialogWindow: null,
                        img: null,
                        message: null,
                    },
                },

                pvt_eventPortInput: [],
                messageData: {},
            };
        },
        watch: {},
        computed: {
            pvt_img: function () {
                return {
                    imgRef: {
                        paraVarPair: {},
                        para: {
                            image: 'data:image/png;base64,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'
                        },
                        attr: {

                        },
                    },
                    warningImgRef: {
                        paraVarPair: {},
                        para: {
                            image: 'data:image/png;base64,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'
                        },
                        attr: {

                        },
                    },
                    errorImgRef: {
                        paraVarPair: {},
                        para: {
                            image: 'data:image/png;base64,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'
                        },
                        attr: {

                        },
                    },
                };
            },
            pvt_message: function () {
                return {
                    messageRef: {
                        paraVarPair: {},
                        para: {
                            textData:this.messageData.message,
                        },
                        attr: {
                            color:'#909399',
                            fontSize:'16px',
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
            startModule: function (message, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'startModule';
                let dbFlag;
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

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            para.arrRef = ['messageRef'];
                            this.messageData = message;

                            if(this.messageData.type === 'success') {
                                para.arrRef.push('imgRef')
                            } else if(this.messageData.type === 'warning') {
                                para.arrRef.push('warningImgRef')
                            } else {
                                para.arrRef.push('errorImgRef')
                            }

                            para.nStep = 'forceUpdateData';
                            dbFlag++;
                            break;
                        case 'forceUpdateData':
                            that.forceUpdateData(function () {
                                para.nStep = 'subModuleStart';
                                if (++dbFlag === 2) {
                                    that.startModule(message, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'subModuleStart':
                            if(para.i >= para.arrRef.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }

                            that.sm[para.arrRef[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'subModuleStart';
                                if (++dbFlag === 2) {
                                    that.startModule(message,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
                            that.showSubModule(para.arrRef, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(message,successCallBack, errorCallBack)
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
            }
        },
    };
</script>
<style lang="less" scoped>
    @msgDialog-msgDialogWindow-medium-width:100%;
    @msgDialog-msgDialogWindow-medium-horizontal-position: center;
    @msgDialog-img-medium-width:80px;
    @msgDialog-img-medium-height:80px;
    @msgDialog-img-medium-vertical-position:center;
    @msgDialog-img-medium-horizontal-position: center;
    @msgDialog-img-medium-padding: 0 0 30px 0;
    @msgDialog-message-medium-width:100%;
    @msgDialog-message-medium-padding:0 0 10px 0;
    @msgDialog-message-medium-vertical-position:center;
    @msgDialog-message-medium-horizontal-position: center;


    .msgDialog_container {
        width: 100%;
        height: 100%;
    }

    .msgDialog_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .msgDialog_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .msgDialog_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .msgDialog_row {
        display: flex;
    }

    .msgDialog_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .msgDialog_col_msgDialogWindow_size_medium {
        width: @msgDialog-msgDialogWindow-medium-width;
        align-items: @msgDialog-msgDialogWindow-medium-horizontal-position;
    }

    .msgDialog_col_img_size_medium {
        width: @msgDialog-img-medium-width;
        height: @msgDialog-img-medium-height;
        justify-content: @msgDialog-img-medium-vertical-position;
        align-items:@msgDialog-img-medium-horizontal-position;
        padding: @msgDialog-img-medium-padding;
    }

    .msgDialog_col_message_size_medium {
        width: @msgDialog-message-medium-width;
        padding: @msgDialog-message-medium-padding;
        justify-content: @msgDialog-message-medium-vertical-position;
        align-items:@msgDialog-message-medium-horizontal-position;
    }

</style>
