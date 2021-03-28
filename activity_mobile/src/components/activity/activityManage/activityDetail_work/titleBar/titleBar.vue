<template>
    <div v-show="pvt_isWinShow.xqTitleBarWindow"
         :class="{replayTitleBar_container:true,replayTitleBar_col:true,replayTitleBar_col_xqTitleBarWindow:true,replayTitleBar_col_xqTitleBarWindow_size_large:attr.size==='large',replayTitleBar_col_xqTitleBarWindow_size_medium:attr.size==='medium',replayTitleBar_col_xqTitleBarWindow_size_small:attr.size==='small',replayTitleBar_col_xqTitleBarWindow_size_min:attr.size==='min',replayTitleBar_col_xqTitleBarWindow_checked:attr.checked,replayTitleBar_col_xqTitleBarWindow_disable:attr.disabled}" >

        <div class="replayTitleBar_row replayTitleBar_row_row1">
            <div v-show="pvt_isWinShow.t1"
                 :class="{replayTitleBar_col:true,replayTitleBar_col_t1:true,replayTitleBar_col_t1_size_large:attr.size==='large',replayTitleBar_col_t1_size_medium:attr.size==='medium',replayTitleBar_col_t1_size_small:attr.size==='small',replayTitleBar_col_t1_size_min:attr.size==='min',replayTitleBar_col_t1_checked:attr.checked,replayTitleBar_col_t1_disable:attr.disabled}" >

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
                 :class="{replayTitleBar_col:true,replayTitleBar_col_t2:true,replayTitleBar_col_t2_size_large:attr.size==='large',replayTitleBar_col_t2_size_medium:attr.size==='medium',replayTitleBar_col_t2_size_small:attr.size==='small',replayTitleBar_col_t2_size_min:attr.size==='min',replayTitleBar_col_t2_checked:attr.checked,replayTitleBar_col_t2_disable:attr.disabled}" >

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
                 :class="{replayTitleBar_col:true,replayTitleBar_col_t3:true,replayTitleBar_col_t3_size_large:attr.size==='large',replayTitleBar_col_t3_size_medium:attr.size==='medium',replayTitleBar_col_t3_size_small:attr.size==='small',replayTitleBar_col_t3_size_min:attr.size==='min',replayTitleBar_col_t3_checked:attr.checked,replayTitleBar_col_t3_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="menu"
                        refId="menu"
                        v-show="pvt_isShow.t3 === 'menu'"
                        :paraVarPair="pvt_t3.menu.paraVarPair"
                        :para="pvt_t3.menu.para"
                        :attr="pvt_t3.menu.attr">
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
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['t2','t1','t3'],
					subModule:['tl','back','menu'],
				},
				pvt_isShow: {
					t2:null,
					t1:null,
					t3:null,
				},
				pvt_isWinShow: {
					xqTitleBarWindow:true,
					t1:true,
					t2:true,
					t3:true,
				},
				pvt_eventPortInput: ['backEvent','shareClick'],

				share:null,
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
							fontWeight:true,
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
							textData:'返回',
						},
						attr:{
							isClick:true,
							height:'46px',
							color:'#12B0FF',
							fontSize:'16px',
							icon:'van-icon-arrow-left',
						},
					},
				};
			},
			pvt_t3:function(){
				return {
					menu:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							textAlign:'right',
							height:'46px',
							color:'#12B0FF',
							fontSize:'17px',
							icon:this.share,
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
							$this.share = 'my-icon-share';
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
			menu_textClickEvent:function(){
				this.ep.shareClick();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .replayTitleBar_container {
        width:100%;
        height:100%;
    }
    .replayTitleBar_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .replayTitleBar_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .replayTitleBar_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .replayTitleBar_row {
        display:flex;
    }
    .replayTitleBar_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .replayTitleBar_col_xqTitleBarWindow_size_medium {
        width:@replayTitleBar-xqTitleBarWindow-medium-width;
        height:@replayTitleBar-xqTitleBarWindow-medium-height;
    }
    .replayTitleBar_col_xqTitleBarWindow {
        background-color:mix(@replayTitleBar-xqTitleBarWindow-background-color,#fff,@replayTitleBar-xqTitleBarWindow-background-color-opacity);
    }
    .replayTitleBar_col_t1_size_medium {
        width:@replayTitleBar-t1-medium-width;
        padding:@replayTitleBar-t1-medium-padding;
    }
    .replayTitleBar_col_t2_size_medium {
        width:@replayTitleBar-t2-medium-width;
    }
    .replayTitleBar_col_t3_size_medium {
        width:@replayTitleBar-t3-medium-width;
        align-items:@replayTitleBar-t3-medium-horizontal-position;
        padding:@replayTitleBar-t3-medium-padding;
    }
    .replayTitleBar_col_t3_size_large {
        align-items:@replayTitleBar-t3-large-horizontal-position;
    }
    .replayTitleBar_col_t3_size_small {
        align-items:@replayTitleBar-t3-small-horizontal-position;
    }
    .replayTitleBar_col_t3_size_min {
        align-items:@replayTitleBar-t3-mini-horizontal-position;
    }

</style>
