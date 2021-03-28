<template>
    <div v-show="pvt_isWinShow.xqActivityPriceWindow"
         :class="{appActivityPrice_container:true,appActivityPrice_col:true,appActivityPrice_col_xqActivityPriceWindow:true,appActivityPrice_col_xqActivityPriceWindow_size_large:attr.size==='large',appActivityPrice_col_xqActivityPriceWindow_size_medium:attr.size==='medium',appActivityPrice_col_xqActivityPriceWindow_size_small:attr.size==='small',appActivityPrice_col_xqActivityPriceWindow_size_min:attr.size==='min',appActivityPrice_col_xqActivityPriceWindow_checked:attr.checked,appActivityPrice_col_xqActivityPriceWindow_disable:attr.disabled}" >

        <div class="appActivityPrice_row appActivityPrice_row_row1">
            <div v-show="pvt_isWinShow.xap1"
                 :class="{appActivityPrice_col:true,appActivityPrice_col_xap1:true,appActivityPrice_col_xap1_size_large:attr.size==='large',appActivityPrice_col_xap1_size_medium:attr.size==='medium',appActivityPrice_col_xap1_size_small:attr.size==='small',appActivityPrice_col_xap1_size_min:attr.size==='min',appActivityPrice_col_xap1_checked:attr.checked,appActivityPrice_col_xap1_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="name"
                        refId="name"
                        v-show="pvt_isShow.xap1 === 'name'"
                        :paraVarPair="pvt_xap1.name.paraVarPair"
                        :para="pvt_xap1.name.para"
                        :attr="pvt_xap1.name.attr">
                </lm2b-link-text>
            </div>
            <div v-show="pvt_isWinShow.xap2"
                 :class="{appActivityPrice_col:true,appActivityPrice_col_xap2:true,appActivityPrice_col_xap2_size_large:attr.size==='large',appActivityPrice_col_xap2_size_medium:attr.size==='medium',appActivityPrice_col_xap2_size_small:attr.size==='small',appActivityPrice_col_xap2_size_min:attr.size==='min',appActivityPrice_col_xap2_checked:attr.checked,appActivityPrice_col_xap2_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="price"
                        refId="price"
                        v-show="pvt_isShow.xap2 === 'price'"
                        :paraVarPair="pvt_xap2.price.paraVarPair"
                        :para="pvt_xap2.price.para"
                        :attr="pvt_xap2.price.attr">
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
		props: ['refId','para','attr','paraVarPair','number'],
		data: function() {
			return {

				priceInfo:this.para.priceInfo,
				pvt_subModuleMap: {
					vessel:['xap1','xap2'],
					subModule:['name','price'],
				},
				pvt_isShow: {
					xap1:null,
					xap2:null,
				},
				pvt_isWinShow: {
					xqActivityPriceWindow:true,
					xap1:true,
					xap2:true,
				},
				pvt_eventPortInput: ['selectEvent'],

				priceName:null,
				priceNum:null,
			};
		},
		watch: {
			priceInfo: {
				handler: function (val, oldVal) {
					if (val !== oldVal && this.paraVarPair.priceInfo) {
						if (this.number !== undefined) { // 循环
							this.$parent[this.paraVarPair.priceInfo][this.number] = val
						} else { // 非循环
							this.$parent[this.paraVarPair.priceInfo] = val
						}
					}
				},
				deep   : true
			},
		},
		computed:{
			pvt_xap1:function(){
				return {
					name:{
						paraVarPair:{
							textData:'priceName',
						},
						para:{
							textData:this.priceName,
						},
						attr:{
							isClick:true,
							color:'#333',
							fontSize:'14px',
						},
					},
				};
			},
			pvt_xap2:function(){
				return {
					price:{
						paraVarPair:{
							textData:'priceNum',
						},
						para:{
							textData:this.priceNum,
						},
						attr:{
							isClick:true,
							textAlign:'right',
							color:'#FC7122',
							fontSize:'14px',
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
			startModule: function (successCallBack, errorCallBack) { //通过id  获取原纪录，在次下载终端数据
				let $this = this;
				let dbFlag;
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
							$this.priceName = $this.priceInfo.priceName;
							$this.priceNum = $this.priceInfo.priceNum?`￥${$this.priceInfo.priceNum}`:'免费';
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr,true,function() {
								para.nStep='startModule_loop';
								para.i=0;
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_loop':
							if(para.i===para.refArr.length) {
								para.nStep='end';
								dbFlag++;
								break;
							}
							$this.$refs[para.refArr[para.i]].startModule(function() {
								para.i++;
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack)
								}
							},para.errorCallBack);
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
			selectClick:function(){
				this.ep.selectEvent(this.number)
			},
			name_textClickEvent:function(){
				this.selectClick();
			},
			price_textClickEvent:function(){
				this.selectClick();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .appActivityPrice_row_row1 {
        height:100%;
    }
    .appActivityPrice_container {
        width:100%;
        height:100%;
    }
    .appActivityPrice_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appActivityPrice_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appActivityPrice_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appActivityPrice_row {
        display:flex;
    }
    .appActivityPrice_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appActivityPrice_col_xqActivityPriceWindow_size_medium {
        width:@appActivityPrice-xqActivityPriceWindow-medium-width;
        height:@appActivityPrice-xqActivityPriceWindow-medium-height;
        padding:@appActivityPrice-xqActivityPriceWindow-medium-padding;
        margin:@appActivityPrice-xqActivityPriceWindow-medium-margin;
    }
    .appActivityPrice_col_xqActivityPriceWindow {
        border-style:@appActivityPrice-xqActivityPriceWindow-border-style;
        border-width:@appActivityPrice-xqActivityPriceWindow-border-width;
        border-color:mix(@appActivityPrice-xqActivityPriceWindow-border-color,#fff,@appActivityPrice-xqActivityPriceWindow-hover-border-color-opacity);
        border-radius:@appActivityPrice-xqActivityPriceWindow-border-radius;
    }
    .appActivityPrice_col_xqActivityPriceWindow_checked {
        border-color:mix(@appActivityPrice-xqActivityPriceWindow-checked-border-color,#fff,@appActivityPrice-xqActivityPriceWindow-checked-border-color-opacity);
        border-style:@appActivityPrice-xqActivityPriceWindow-checked-border-style;
        border-width:@appActivityPrice-xqActivityPriceWindow-checked-border-width;
    }
    .appActivityPrice_col_xap1_size_medium {
        width:@appActivityPrice-xap1-medium-width;
        justify-content:@appActivityPrice-xap1-medium-vertical-position;
    }
    .appActivityPrice_col_xap1_size_large {
        justify-content:@appActivityPrice-xap1-large-vertical-position;
    }
    .appActivityPrice_col_xap1_size_small {
        justify-content:@appActivityPrice-xap1-small-vertical-position;
    }
    .appActivityPrice_col_xap1_size_min {
        justify-content:@appActivityPrice-xap1-mini-vertical-position;
    }
    .appActivityPrice_col_xap2_size_medium {
        width:@appActivityPrice-xap2-medium-width;
        justify-content:@appActivityPrice-xap2-medium-vertical-position;
    }
    .appActivityPrice_col_xap2_size_large {
        justify-content:@appActivityPrice-xap2-large-vertical-position;
    }
    .appActivityPrice_col_xap2_size_small {
        justify-content:@appActivityPrice-xap2-small-vertical-position;
    }
    .appActivityPrice_col_xap2_size_min {
        justify-content:@appActivityPrice-xap2-mini-vertical-position;
    }




</style>
