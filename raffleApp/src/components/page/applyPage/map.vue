<template>
    <div v-show="pvt_win.isShow.raffle_mapWindow"
         :class="{raffle_map_container:true,raffle_map_col:true,raffle_map_col_raffle_mapWindow:true,raffle_map_col_raffle_mapWindow_size_large:attr.size==='large',raffle_map_col_raffle_mapWindow_size_medium:attr.size==='medium',raffle_map_col_raffle_mapWindow_size_small:attr.size==='small',raffle_map_col_raffle_mapWindow_size_min:attr.size==='min',raffle_map_col_raffle_mapWindow_checked:pvt_win.isChecked.raffle_mapWindow,raffle_map_col_raffle_mapWindow_disable:attr.disabled}"
         :style="pvt_win.style.raffle_mapWindow" >

        <div class="raffle_map_row raffle_map_row_row0">
            <div v-show="pvt_win.isShow.backBtn"
                 :class="{raffle_map_col:true,raffle_map_col_backBtn:true,raffle_map_col_backBtn_size_large:attr.size==='large',raffle_map_col_backBtn_size_medium:attr.size==='medium',raffle_map_col_backBtn_size_small:attr.size==='small',raffle_map_col_backBtn_size_min:attr.size==='min',raffle_map_col_backBtn_checked:pvt_win.isChecked.backBtn,raffle_map_col_backBtn_disable:attr.disabled}"
                 :style="pvt_win.style.backBtn" >

                <lm2b-link-text
                        ref="backBtnRef"
                        refId="backBtnRef"
                        v-show="pvt_isShow.backBtn === 'backBtnRef'"
                        :paraVarPair="pvt_backBtn.backBtnRef.paraVarPair"
                        :para="pvt_backBtn.backBtnRef.para"
                        :attr="pvt_backBtn.backBtnRef.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="raffle_map_row raffle_map_row_row1">
            <div v-show="pvt_win.isShow.map"
                 :class="{raffle_map_col:true,raffle_map_col_map:true,raffle_map_col_map_size_large:attr.size==='large',raffle_map_col_map_size_medium:attr.size==='medium',raffle_map_col_map_size_small:attr.size==='small',raffle_map_col_map_size_min:attr.size==='min',raffle_map_col_map_checked:pvt_win.isChecked.map,raffle_map_col_map_disable:attr.disabled}"
                 :style="pvt_win.style.map" >

                <lm2b-amap
                        ref="mapRef"
                        refId="mapRef"
                        v-show="pvt_isShow.map === 'mapRef'"
                        :paraVarPair="pvt_map.mapRef.paraVarPair"
                        :para="pvt_map.mapRef.para"
                        :attr="pvt_map.mapRef.attr">
                </lm2b-amap>
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
                    if(!val.size) val.size = 'medium';
                    return true;
                },
            },
            number: Number,
        },
        data: function() {
            return {
                value: {
                    lng: "113.904905",
                    lat: "22.568754",
                    province: "广东省",
                    city: "深圳市",
                    district: "宝安区",
                    address: "万悦格兰云天大酒店2楼3号会议厅",
                },

                pvt_subModuleMap: {
                    vessel:['backBtn','map'],
                    subModule:['backBtnRef','mapRef'],
                },
                pvt_isShow: {
                    backBtn:null,
                    map:null,
                },
                pvt_win:{
                    isShow:{
                        raffle_mapWindow:true,
                        backBtn:true,
                        map:true,
                    },
                    isChecked:{
                        raffle_mapWindow:false,
                        backBtn:false,
                        map:false,
                    },
                    style:{
                        raffle_mapWindow:null,
                        backBtn:null,
                        map:null,
                    },
                },
                pvt_eventPortInput: [],

            };
        },
        watch: {
        },
        computed:{
            pvt_backBtn:function(){
                return {
                    backBtnRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData:'',
                        },
                        attr:{
                            isClick:true,
                            color:'#666',
                            fontSize:'24px',
                            // icon:'el-icon-message',
                            icon:'van-icon-arrow-left',
                            label: 'span',
                            background: 'none'
                        },
                    },
                };
            },
            pvt_map:function(){
                return {
                    mapRef:{
                        paraVarPair:{
                        },
                        para:{
                            value:this.value,
                        },
                        attr:{
                            funtionType:'normal',
                            height:null,
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
            startModule:function(address,successCallBack,errorCallBack){
                let that = this;
                let fnname = 'startModule';
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

                let arrRef = ['backBtnRef','mapRef'];

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.value = address;

                            para.nStep = 'subModuleStart';
                            dbFlag++;
                            break;
                        case 'subModuleStart':
                            if(para.i >= arrRef.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }

                            that.sm[arrRef[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'subModuleStart';
                                if (++dbFlag === 2) {
                                    that.startModule(address,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
                            that.showSubModule(arrRef, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(address,successCallBack, errorCallBack)
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
            hideMap:function(){
                let $this=this;
                $this.hideSelfModule($this.refId,function(){},function(){})
            },
            backBtnRef_textClickEvent:function(){
                this.hideMap();
            },
        },
    };
</script>
<style lang="less" scoped>
    @raffle_map-raffle_mapWindow-medium-width:100%;
    @raffle_map-backBtn-medium-width:50px;
    @raffle_map-backBtn-medium-padding:20px;
    @raffle_map-map-medium-width:100%;


    .raffle_map_container {
        width:100%;
        height:100%;
    }
    .raffle_map_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .raffle_map_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .raffle_map_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .raffle_map_row {
        display:flex;
    }
    .raffle_map_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .raffle_map_col_raffle_mapWindow_size_medium {
        width:@raffle_map-raffle_mapWindow-medium-width;
    }
    .raffle_map_col_backBtn_size_medium {
        position: fixed;
        top:0;
        left:0;
        z-index: 2;
        width:@raffle_map-backBtn-medium-width;
        padding:@raffle_map-backBtn-medium-padding;
    }
    .raffle_map_col_map_size_medium {
        width:@raffle_map-map-medium-width;
    }
</style>