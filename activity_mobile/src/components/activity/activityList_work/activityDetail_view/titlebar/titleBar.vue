<template>
    <div v-show="pvt_isWinShow.xqTitleBarWindow"
         :class="{appTitleBar_container:true,appTitleBar_col:true,appTitleBar_col_xqTitleBarWindow:true,appTitleBar_col_xqTitleBarWindow_size_large:attr.size==='large',appTitleBar_col_xqTitleBarWindow_size_medium:attr.size==='medium',appTitleBar_col_xqTitleBarWindow_size_small:attr.size==='small',appTitleBar_col_xqTitleBarWindow_size_min:attr.size==='min',appTitleBar_col_xqTitleBarWindow_checked:attr.checked,appTitleBar_col_xqTitleBarWindow_disable:attr.disabled}" >

        <div class="appTitleBar_row appTitleBar_row_row1">
            <div v-show="pvt_isWinShow.t1"
                 :class="{appTitleBar_col:true,appTitleBar_col_t1:true,appTitleBar_col_t1_size_large:attr.size==='large',appTitleBar_col_t1_size_medium:attr.size==='medium',appTitleBar_col_t1_size_small:attr.size==='small',appTitleBar_col_t1_size_min:attr.size==='min',appTitleBar_col_t1_checked:attr.checked,appTitleBar_col_t1_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="back"
                        refId="back"
                        v-show="pvt_isShow.t1 === 'back'"
                        :paraVarPair="pvt_t1.back.paraVarPair"
                        :para="pvt_t1.back.para"
                        :attr="pvt_t1.back.attr">
                </lm2b-link-text>
            </div>
            <div v-show="pvt_isWinShow.t2"
                 :class="{appTitleBar_col:true,appTitleBar_col_t2:true,appTitleBar_col_t2_size_large:attr.size==='large',appTitleBar_col_t2_size_medium:attr.size==='medium',appTitleBar_col_t2_size_small:attr.size==='small',appTitleBar_col_t2_size_min:attr.size==='min',appTitleBar_col_t2_checked:attr.checked,appTitleBar_col_t2_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="tl"
                        refId="tl"
                        v-show="pvt_isShow.t2 === 'tl'"
                        :paraVarPair="pvt_t2.tl.paraVarPair"
                        :para="pvt_t2.tl.para"
                        :attr="pvt_t2.tl.attr">
                </lm2b-link-text>
            </div>
            <div v-show="pvt_isWinShow.t3"
                 :class="{appTitleBar_col:true,appTitleBar_col_t3:true,appTitleBar_col_t3_size_large:attr.size==='large',appTitleBar_col_t3_size_medium:attr.size==='medium',appTitleBar_col_t3_size_small:attr.size==='small',appTitleBar_col_t3_size_min:attr.size==='min',appTitleBar_col_t3_checked:attr.checked,appTitleBar_col_t3_disable:attr.disabled}" >

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
					vessel:['t2','t1'],
					subModule:['tl','back'],
				},
				pvt_isShow: {
					t2:null,
					t1:null,
				},
				pvt_isWinShow: {
					xqTitleBarWindow:true,
					t1:true,
					t2:true,
					t3:true,
				},
				pvt_eventPortInput: ['backEvent'],

			};
		},
		watch: {
		},
		computed:{
			pvt_t2:function(){
				return {
					tl:{
						paraVarPair:{
						},
						para:{
							textData:'活动详情',
						},
						attr:{
							textAlign:'center',
							height:'46px',
							color:'#000000',
							fontSize:'16px',
						},
					},
				};
			},
			pvt_t1:function(){
				return {
					back:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							height:'46px',
							color:'#000000',
							fontSize:'16px',
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
			startModule: function (successCallBack, errorCallBack) {
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
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr, true,function () {
								para.nStep = 'startModule_loop';
								para.i=0;
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'startModule_loop':
							if(para.i===para.refArr.length) {
								para.nStep='end';
								dbFlag++;
								break;
							}
							$this.sm[para.refArr[para.i]].startModule(function () {
								para.i++;
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack)
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
			back_textClickEvent:function(){
				this.ep.backEvent();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .appTitleBar_container {
        width:100%;
        height:100%;
    }
    .appTitleBar_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appTitleBar_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appTitleBar_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appTitleBar_row {
        display:flex;
    }
    .appTitleBar_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appTitleBar_col_xqTitleBarWindow_size_medium {
        width:@appTitleBar-xqTitleBarWindow-medium-width;
        height:@appTitleBar-xqTitleBarWindow-medium-height;
    }
    .appTitleBar_col_xqTitleBarWindow {
        background-color:mix(@appTitleBar-xqTitleBarWindow-background-color,#fff,@appTitleBar-xqTitleBarWindow-background-color-opacity);
    }
    .appTitleBar_col_t1_size_medium {
        width:@appTitleBar-t1-medium-width;
        padding:@appTitleBar-t1-medium-padding;
    }
    .appTitleBar_col_t2_size_medium {
        width:@appTitleBar-t2-medium-width;
    }
    .appTitleBar_col_t3_size_medium {
        width:@appTitleBar-t3-medium-width;
        align-items:@appTitleBar-t3-medium-horizontal-position;
        padding:@appTitleBar-t3-medium-padding;
    }
    .appTitleBar_col_t3_size_large {
        align-items:@appTitleBar-t3-large-horizontal-position;
    }
    .appTitleBar_col_t3_size_small {
        align-items:@appTitleBar-t3-small-horizontal-position;
    }
    .appTitleBar_col_t3_size_min {
        align-items:@appTitleBar-t3-mini-horizontal-position;
    }


</style>
