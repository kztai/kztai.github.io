<template>
    <div v-show="pvt_win.isShow.raffle_apply_pageWindow"
         :class="{raffle_apply_page_container:true,raffle_apply_page_col:true,raffle_apply_page_col_raffle_apply_pageWindow:true,raffle_apply_page_col_raffle_apply_pageWindow_size_large:attr.size==='large',raffle_apply_page_col_raffle_apply_pageWindow_size_medium:attr.size==='medium',raffle_apply_page_col_raffle_apply_pageWindow_size_small:attr.size==='small',raffle_apply_page_col_raffle_apply_pageWindow_size_min:attr.size==='min',raffle_apply_page_col_raffle_apply_pageWindow_checked:pvt_win.isChecked.raffle_apply_pageWindow,raffle_apply_page_col_raffle_apply_pageWindow_disable:attr.disabled}"
         :style="pvt_win.style.raffle_apply_pageWindow" >
        <div class="raffle_apply_page_row raffle_apply_page_row_row0">
            <div v-show="pvt_win.isShow.applyType"
                 :class="{raffle_apply_page_col:true,raffle_apply_page_col_applyType:true,raffle_apply_page_col_applyType_size_large:attr.size==='large',raffle_apply_page_col_applyType_size_medium:attr.size==='medium',raffle_apply_page_col_applyType_size_small:attr.size==='small',raffle_apply_page_col_applyType_size_min:attr.size==='min',raffle_apply_page_col_applyType_checked:pvt_win.isChecked.applyType,raffle_apply_page_col_applyType_disable:attr.disabled}"
                 :style="pvt_win.style.applyType">
                <applyCancel
                        ref="applyCancelRef"
                        refId="applyCancelRef"
                        v-show="pvt_isShow.applyType === 'applyCancelRef'"
                        :paraVarPair="pvt_applyType.applyCancelRef.paraVarPair"
                        :para="pvt_applyType.applyCancelRef.para"
                        :attr="pvt_applyType.applyCancelRef.attr">
                </applyCancel>
                <applyRegister
                        ref="applyRegisterRef"
                        refId="applyRegisterRef"
                        v-show="pvt_isShow.applyType === 'applyRegisterRef'"
                        :paraVarPair="pvt_applyType.applyRegisterRef.paraVarPair"
                        :para="pvt_applyType.applyRegisterRef.para"
                        :attr="pvt_applyType.applyRegisterRef.attr">
                </applyRegister>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import geneEvent from "../../../../public/jsFile/10";
    import dbCloudGeneID from "../../../../public/jsFile/db_cloud_module";
    import geneObj from "../../../../public/jsFile/db_10";

    import applyCancel from '@/components/page/applyPage/applyCancel.vue';
    import applyRegister from '@/components/page/applyPage/applyRegister.vue';
    export default {
        components: {applyCancel,applyRegister},
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
                openId: null,
                applyType: null,

                pvt_subModuleMap: {
                    vessel:['applyType','applyType'],
                    subModule:['applyCancelRef','applyRegisterRef'],
                },
                pvt_isShow: {
                    applyType:null,
                },
                pvt_win:{
                    isShow:{
                        raffle_apply_pageWindow:true,
                        applyType:true,
                    },
                    isChecked:{
                        raffle_apply_pageWindow:false,
                        applyType:false,
                    },
                    style:{
                        raffle_apply_pageWindow:null,
                        applyType:null,
                    },
                },
                pvt_eventPortInput: ['register', 'cancel'],

            };
        },
        watch: {
            inPara: {
                handler: function () {
                    let $this = this;
                    $this.$gene = 10;
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
            pvt_applyType:function(){
                return {
                    applyCancelRef:{
                        paraVarPair:{
                        },
                        para:{
                        },
                        attr:{
                            size: 'medium'
                        },
                    },
                    applyRegisterRef:{
                        paraVarPair:{
                        },
                        para:{

                        },
                        attr:{
                            size: 'medium'
                        },
                    },
                };
            }
        },
        created: function () {
            Object.assign(this, libSys,libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            applyRegisterRef_register:function(customerInfo,successCallBack,errorCallBack){
                this.$apiDB.eventInput("register", [customerInfo], successCallBack,errorCallBack);
            },
            applyCancelRef_cancel:function(openId,successCallBack,errorCallBack){
                this.$apiDB.eventInput("cancel", [openId], successCallBack,errorCallBack);
            },
        },
    };
</script>
<style lang="less" scoped>
    @raffle_apply_page-raffle_apply_pageWindow-medium-width:100%;
    @raffle_apply_page-raffle_apply_pageWindow-background-color-opacity:100;
    @raffle_apply_page-raffle_apply_pageWindow-background-color:#fff;
    @raffle_apply_page-applyType-medium-width:100%;


    .raffle_apply_page_container {
        width:100%;
        height:100%;
    }
    .raffle_apply_page_mask {
        display:flex;
        position:fixed !important;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .raffle_apply_page_dialog {
        position:absolute;
        left:0;
        top:0;
    }

    .raffle_apply_page_col_mapmask_size_medium {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .raffle_apply_page_col_map_size_medium {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .raffle_apply_page_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .raffle_apply_page_row {
        display:flex;
    }
    .raffle_apply_page_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .raffle_apply_page_col_raffle_apply_pageWindow_size_medium {
        width:@raffle_apply_page-raffle_apply_pageWindow-medium-width;
    }
    .raffle_apply_page_col_raffle_apply_pageWindow {
        background-color:mix(@raffle_apply_page-raffle_apply_pageWindow-background-color,#fff,@raffle_apply_page-raffle_apply_pageWindow-background-color-opacity);
    }
    .raffle_apply_page_col_applyType_size_medium {
        width:@raffle_apply_page-applyType-medium-width;
    }

</style>