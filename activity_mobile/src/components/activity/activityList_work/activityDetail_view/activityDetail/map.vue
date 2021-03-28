<template>
    <div v-show="pvt_isWinShow.xqMapWindow"
         :class="{appMap_container:true,appMap_col:true,appMap_col_xqMapWindow:true,appMap_col_xqMapWindow_size_large:attr.size==='large',appMap_col_xqMapWindow_size_medium:attr.size==='medium',appMap_col_xqMapWindow_size_small:attr.size==='small',appMap_col_xqMapWindow_size_min:attr.size==='min',appMap_col_xqMapWindow_checked:attr.checked,appMap_col_xqMapWindow_disable:attr.disabled}" >

        <div class="appMap_row appMap_row_row1">
            <div v-show="pvt_isWinShow.m1"
                 :class="{appMap_col:true,appMap_col_m1:true,appMap_col_m1_size_large:attr.size==='large',appMap_col_m1_size_medium:attr.size==='medium',appMap_col_m1_size_small:attr.size==='small',appMap_col_m1_size_min:attr.size==='min',appMap_col_m1_checked:attr.checked,appMap_col_m1_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="back"
                        refId="back"
                        v-show="pvt_isShow.m1 === 'back'"
                        :paraVarPair="pvt_m1.back.paraVarPair"
                        :para="pvt_m1.back.para"
                        :attr="pvt_m1.back.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="appMap_row appMap_row_row2">
            <div v-show="pvt_isWinShow.m2"
                 :class="{appMap_col:true,appMap_col_m2:true,appMap_col_m2_size_large:attr.size==='large',appMap_col_m2_size_medium:attr.size==='medium',appMap_col_m2_size_small:attr.size==='small',appMap_col_m2_size_min:attr.size==='min',appMap_col_m2_checked:attr.checked,appMap_col_m2_disable:attr.disabled}" >

                <lm2b-amap
                        ref="map"
                        refId="map"
                        v-show="pvt_isShow.m2 === 'map'"
                        :paraVarPair="pvt_m2.map.paraVarPair"
                        :para="pvt_m2.map.para"
                        :attr="pvt_m2.map.attr">
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
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['m2','m1'],
					subModule:['map','back'],
				},
				pvt_isShow: {
					m2:null,
					m1:null,
				},
				pvt_isWinShow: {
					xqMapWindow:true,
					m1:true,
					m2:true,
				},
				pvt_eventPortInput: [],

				value:null,
			};
		},
		watch: {
		},
		computed:{
			pvt_m2:function(){
				return {
					map:{
						paraVarPair:{
							value:'value',
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
			pvt_m1:function(){
				return {
					back:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							label:'div',
							textAlign:'center',
							height:'40px',
							color:'#fff',
							fontSize:'16px',
							background:'rgba(0,0,0,.5)',
							icon:'van-icon-arrow-left',
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
			startModule: function (address, successCallBack, errorCallBack) {  //先得到活动详情的数据信息
				let $this = this;
				let dbFlag;
				$this.mac = mac.mac;
				let data;
				let tableName;
				let para = {
					successCallBack: successCallBack,
					errorCallBack: errorCallBack,
					nStep: 0
				};
				if (successCallBack !== null) {
					errorCallBack = para;
					successCallBack = null
				}
				para = errorCallBack;
				while (1) {
					dbFlag = 0;
					switch (para.nStep) {
						case 0:
						case 'showSubModule':
							$this.value=address;
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr, true, function () {
								para.i = 0;
								para.nStep = 'startModule_loop';
								if (++dbFlag === 2) {
									$this.startModule(address, successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'startModule_loop':
							if (para.i === para.refArr.length) {
								para.nStep = 'end';
								dbFlag++;
								break;
							}
							$this.sm[para.refArr[para.i]].startModule(function () {
								para.i++;
								if (++dbFlag === 2) {
									$this.startModule(address, successCallBack, errorCallBack)
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
			closeClick:function(){
				let $this=this;
				$this.hideSelfModule($this.refId,function(){},function(){})
            },
			back_textClickEvent:function(){
				this.closeClick();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .appMap_container {
        width:100%;
        height:100%;
    }
    .appMap_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appMap_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appMap_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appMap_row {
        display:flex;
    }
    .appMap_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appMap_col_xqMapWindow_size_medium {
        width:@appMap-xqMapWindow-medium-width;
    }
    .appMap_col_m1_size_medium {
        width:@appMap-m1-medium-width;
        height:@appMap-m1-medium-height;
        position: absolute;
        left: 15px;
        top: 0;
        z-index: 9999;
        overflow: hidden;
    }
    .appMap_col_m1 {
        border-radius:@appMap-m1-border-radius;
    }
    .appMap_col_m2_size_medium {
        width:@appMap-m2-medium-width;
    }



</style>
