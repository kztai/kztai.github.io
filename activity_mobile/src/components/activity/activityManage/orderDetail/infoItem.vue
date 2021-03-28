<template>
    <div class="infoItem_row infoItem_row_infoItemRow">
        <div :class="{infoItem_col:true,infoItem_col_infoItemWindow:true,infoItem_col_infoItemWindow_size_large:attr.size==='large',infoItem_col_infoItemWindow_size_medium:attr.size==='medium',infoItem_col_infoItemWindow_size_small:attr.size==='small',infoItem_col_infoItemWindow_size_min:attr.size==='min',infoItem_col_infoItemWindow_checked:attr.checked,infoItem_col_infoItemWindow_disable:attr.disabled}">

            <div class="infoItem_row infoItem_row_row1">
                <div :class="{infoItem_col:true,infoItem_col_infoName:true,infoItem_col_infoName_size_large:attr.size==='large',infoItem_col_infoName_size_medium:attr.size==='medium',infoItem_col_infoName_size_small:attr.size==='small',infoItem_col_infoName_size_min:attr.size==='min',infoItem_col_infoName_checked:attr.checked,infoItem_col_infoName_disable:attr.disabled}">

                    <lm2b-link-text
                            ref="infoNameRef"
                            refId="infoNameRef"
                            v-show="pvt_isShow.infoName === 'infoNameRef'"
                            :paraVarPair="pvt_infoName.infoNameRef.paraVarPair"
                            :para="pvt_infoName.infoNameRef.para"
                            :attr="pvt_infoName.infoNameRef.attr">
                    </lm2b-link-text>
                </div>
            </div>
            <div class="infoItem_row infoItem_row_row2">
                <div :class="{infoItem_col:true,infoItem_col_infoContent:true,infoItem_col_infoContent_size_large:attr.size==='large',infoItem_col_infoContent_size_medium:attr.size==='medium',infoItem_col_infoContent_size_small:attr.size==='small',infoItem_col_infoContent_size_min:attr.size==='min',infoItem_col_infoContent_checked:attr.checked,infoItem_col_infoContent_disable:attr.disabled}">

                    <lm2b-link-text
                            ref="infoTextRef"
                            refId="infoTextRef"
                            v-show="pvt_isShow.infoContent === 'infoTextRef'"
                            :paraVarPair="pvt_infoContent.infoTextRef.paraVarPair"
                            :para="pvt_infoContent.infoTextRef.para"
                            :attr="pvt_infoContent.infoTextRef.attr">
                    </lm2b-link-text>
                    <lm2b-imgs
                            ref="infoFileRef"
                            refId="infoFileRef"
                            v-show="pvt_isShow.infoContent === 'infoFileRef'"
                            :paraVarPair="pvt_infoContent.infoFileRef.paraVarPair"
                            :para="pvt_infoContent.infoFileRef.para"
                            :attr="pvt_infoContent.infoFileRef.attr">
                    </lm2b-imgs>
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
        data: function() {
            return {
                mac:mac.mac,
                curAppendixData:this.para.curAppendixData,
                pvt_subModuleMap: {
                    vessel:['infoName','infoContent','infoContent'],
                    subModule:['infoNameRef','infoTextRef','infoFileRef'],
                },
                pvt_isShow: {
                    infoName:null,
                    infoContent:null,
                },
                pvt_eventPortInput: [],

                formName:'',
                isFile:false,
            };
        },
        watch: {
            curAppendixData: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.curAppendixData) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.curAppendixData][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.curAppendixData] = val
                        }
                    }
                },
                deep   : true
            },
        },
        computed:{
            pvt_infoName:function(){
                return {
                    infoNameRef:{
                        paraVarPair:{
                            textData:'formName',
                        },
                        para:{
                            textData:this.formName,
                        },
                        attr:{
                            color:'#999',
                            fontSize:'14px',
                        },
                    },
                };
            },
            pvt_infoContent:function(){
                return {
                    infoTextRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData:this.para.curAppendixData[1],
                        },
                        attr:{
                            color:'#333',
                            fontSize:'14px',
                        },
                    },
                    infoFileRef:{
                        paraVarPair:{
                        },
                        para:{
                            thumbnail:[{$table: this.mac.tb.groupActivityAppendix, $arrField: [this.mac.fd.groupActivityAppendix.thumbnail],$arrValue: [this.para.curAppendixData]}],
                            detail:this.mac.fd.groupActivityAppendix.picture,
                        },
                        attr:{
                            showGif:false,
                            showLong:false,
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
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'fillForm_start';
                let dbFlag;
                let dbData;
                let tableName;
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

                let ref = {
                    contentRef: 'infoTextRef',
                    textRef: 'infoNameRef',
                    fileRef: 'infoFileRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.formName = '';

                            if(typeof this.para.curAppendixData === 'number') {
                                this.isFile = true;
                                para.nStep = 'getName';
                            } else {
                                this.formName = this.para.curAppendixData[0];
                                this.isFile = false;
                                para.nStep = 'start_1';
                            }
                            dbFlag++;
                            break;
                        case 'getName':
                            tableName = this.mac.tb.groupActivityAppendix;
                            dbData = {};
                            dbData[that.mac.fd.id] = [this.para.curAppendixData];
                            dbData[that.mac.fd.groupActivityAppendix.name] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.formName = dbData[that.mac.fd.groupActivityAppendix.name][0];
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_1':
                            that.forceUpdateData(function () {
                                that.sm[ref.contentRef].startModule(function () {
                                    para.nStep = 'start_3';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_2':
                            that.forceUpdateData(function () {
                                that.sm[ref.fileRef].startModule(function () {
                                    para.nStep = 'start_3';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.textRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr;
                            if(this.isFile) {
                                refArr = ['infoNameRef', 'infoFileRef'];
                            } else {
                                refArr = ['infoNameRef', 'infoTextRef'];
                            }

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
            }
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .infoItem_row {
        display:flex;
        width:100%;
    }
    .infoItem_col {
        display:flex;
        flex-direction:column;
    }
    .infoItem_col_infoItemWindow_size_medium {
        width:@infoItem-infoItemWindow-medium-width;
        margin:@infoItem-infoItemWindow-medium-margin;
    }
    .infoItem_col_infoName_size_medium {
        width:@infoItem-infoName-medium-width;
        margin:@infoItem-infoName-medium-margin;
        align-items:@infoItem-infoName-medium-horizontal-position;
    }
    .infoItem_col_infoContent_size_medium {
        width:@infoItem-infoContent-medium-width;
    }
</style>