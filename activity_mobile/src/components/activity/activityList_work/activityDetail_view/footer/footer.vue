<template>
    <div v-show="pvt_isWinShow.xqActivityFooterWindow"
         :class="{appActivityFooter_container:true,appActivityFooter_col:true,appActivityFooter_col_xqActivityFooterWindow:true,appActivityFooter_col_xqActivityFooterWindow_size_large:attr.size==='large',appActivityFooter_col_xqActivityFooterWindow_size_medium:attr.size==='medium',appActivityFooter_col_xqActivityFooterWindow_size_small:attr.size==='small',appActivityFooter_col_xqActivityFooterWindow_size_min:attr.size==='min',appActivityFooter_col_xqActivityFooterWindow_checked:attr.checked,appActivityFooter_col_xqActivityFooterWindow_disable:attr.disabled}" >

        <div class="appActivityFooter_row appActivityFooter_row_row1">
            <div v-show="pvt_isWinShow.xf1"
                 :class="{appActivityFooter_col:true,appActivityFooter_col_xf1:true,appActivityFooter_col_xf1_size_large:attr.size==='large',appActivityFooter_col_xf1_size_medium:attr.size==='medium',appActivityFooter_col_xf1_size_small:attr.size==='small',appActivityFooter_col_xf1_size_min:attr.size==='min',appActivityFooter_col_xf1_checked:attr.checked,appActivityFooter_col_xf1_disable:attr.disabled}" >

                <div class="appActivityFooter_row appActivityFooter_row_row2">
                    <div v-show="pvt_isWinShow.xf3"
                         :class="{appActivityFooter_col:true,appActivityFooter_col_xf3:true,appActivityFooter_col_xf3_size_large:attr.size==='large',appActivityFooter_col_xf3_size_medium:attr.size==='medium',appActivityFooter_col_xf3_size_small:attr.size==='small',appActivityFooter_col_xf3_size_min:attr.size==='min',appActivityFooter_col_xf3_checked:attr.checked,appActivityFooter_col_xf3_disable:attr.disabled}" >

                        <div class="appActivityFooter_row appActivityFooter_row_row3">
                            <div v-show="pvt_isWinShow.xf6"
                                 :class="{appActivityFooter_col:true,appActivityFooter_col_xf6:true,appActivityFooter_col_xf6_size_large:attr.size==='large',appActivityFooter_col_xf6_size_medium:attr.size==='medium',appActivityFooter_col_xf6_size_small:attr.size==='small',appActivityFooter_col_xf6_size_min:attr.size==='min',appActivityFooter_col_xf6_checked:attr.checked,appActivityFooter_col_xf6_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="homeIcon"
                                        refId="homeIcon"
                                        v-show="pvt_isShow.xf6 === 'homeIcon'"
                                        :paraVarPair="pvt_xf6.homeIcon.paraVarPair"
                                        :para="pvt_xf6.homeIcon.para"
                                        :attr="pvt_xf6.homeIcon.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="appActivityFooter_row appActivityFooter_row_row4">
                            <div v-show="pvt_isWinShow.xf7"
                                 :class="{appActivityFooter_col:true,appActivityFooter_col_xf7:true,appActivityFooter_col_xf7_size_large:attr.size==='large',appActivityFooter_col_xf7_size_medium:attr.size==='medium',appActivityFooter_col_xf7_size_small:attr.size==='small',appActivityFooter_col_xf7_size_min:attr.size==='min',appActivityFooter_col_xf7_checked:attr.checked,appActivityFooter_col_xf7_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="homeText"
                                        refId="homeText"
                                        v-show="pvt_isShow.xf7 === 'homeText'"
                                        :paraVarPair="pvt_xf7.homeText.paraVarPair"
                                        :para="pvt_xf7.homeText.para"
                                        :attr="pvt_xf7.homeText.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                    <div v-show="pvt_isWinShow.xf4"
                         :class="{appActivityFooter_col:true,appActivityFooter_col_xf4:true,appActivityFooter_col_xf4_size_large:attr.size==='large',appActivityFooter_col_xf4_size_medium:attr.size==='medium',appActivityFooter_col_xf4_size_small:attr.size==='small',appActivityFooter_col_xf4_size_min:attr.size==='min',appActivityFooter_col_xf4_checked:attr.checked,appActivityFooter_col_xf4_disable:attr.disabled}" >

                        <div class="appActivityFooter_row appActivityFooter_row_row5">
                            <div v-show="pvt_isWinShow.xf8"
                                 :class="{appActivityFooter_col:true,appActivityFooter_col_xf8:true,appActivityFooter_col_xf8_size_large:attr.size==='large',appActivityFooter_col_xf8_size_medium:attr.size==='medium',appActivityFooter_col_xf8_size_small:attr.size==='small',appActivityFooter_col_xf8_size_min:attr.size==='min',appActivityFooter_col_xf8_checked:attr.checked,appActivityFooter_col_xf8_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="collectIcon"
                                        refId="collectIcon"
                                        v-show="pvt_isShow.xf8 === 'collectIcon'"
                                        :paraVarPair="pvt_xf8.collectIcon.paraVarPair"
                                        :para="pvt_xf8.collectIcon.para"
                                        :attr="pvt_xf8.collectIcon.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="appActivityFooter_row appActivityFooter_row_row6">
                            <div v-show="pvt_isWinShow.xf9"
                                 :class="{appActivityFooter_col:true,appActivityFooter_col_xf9:true,appActivityFooter_col_xf9_size_large:attr.size==='large',appActivityFooter_col_xf9_size_medium:attr.size==='medium',appActivityFooter_col_xf9_size_small:attr.size==='small',appActivityFooter_col_xf9_size_min:attr.size==='min',appActivityFooter_col_xf9_checked:attr.checked,appActivityFooter_col_xf9_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="collectText"
                                        refId="collectText"
                                        v-show="pvt_isShow.xf9 === 'collectText'"
                                        :paraVarPair="pvt_xf9.collectText.paraVarPair"
                                        :para="pvt_xf9.collectText.para"
                                        :attr="pvt_xf9.collectText.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                    <div v-show="pvt_isWinShow.xf5"
                         :class="{appActivityFooter_col:true,appActivityFooter_col_xf5:true,appActivityFooter_col_xf5_size_large:attr.size==='large',appActivityFooter_col_xf5_size_medium:attr.size==='medium',appActivityFooter_col_xf5_size_small:attr.size==='small',appActivityFooter_col_xf5_size_min:attr.size==='min',appActivityFooter_col_xf5_checked:attr.checked,appActivityFooter_col_xf5_disable:attr.disabled}" >

                        <div class="appActivityFooter_row appActivityFooter_row_row7">
                            <div v-show="pvt_isWinShow.xf10"
                                 :class="{appActivityFooter_col:true,appActivityFooter_col_xf10:true,appActivityFooter_col_xf10_size_large:attr.size==='large',appActivityFooter_col_xf10_size_medium:attr.size==='medium',appActivityFooter_col_xf10_size_small:attr.size==='small',appActivityFooter_col_xf10_size_min:attr.size==='min',appActivityFooter_col_xf10_checked:attr.checked,appActivityFooter_col_xf10_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="shareIcon"
                                        refId="shareIcon"
                                        v-show="pvt_isShow.xf10 === 'shareIcon'"
                                        :paraVarPair="pvt_xf10.shareIcon.paraVarPair"
                                        :para="pvt_xf10.shareIcon.para"
                                        :attr="pvt_xf10.shareIcon.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="appActivityFooter_row appActivityFooter_row_row8">
                            <div v-show="pvt_isWinShow.xf11"
                                 :class="{appActivityFooter_col:true,appActivityFooter_col_xf11:true,appActivityFooter_col_xf11_size_large:attr.size==='large',appActivityFooter_col_xf11_size_medium:attr.size==='medium',appActivityFooter_col_xf11_size_small:attr.size==='small',appActivityFooter_col_xf11_size_min:attr.size==='min',appActivityFooter_col_xf11_checked:attr.checked,appActivityFooter_col_xf11_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="shareText"
                                        refId="shareText"
                                        v-show="pvt_isShow.xf11 === 'shareText'"
                                        :paraVarPair="pvt_xf11.shareText.paraVarPair"
                                        :para="pvt_xf11.shareText.para"
                                        :attr="pvt_xf11.shareText.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="pvt_isWinShow.xf2"
                 :class="{appActivityFooter_col:true,appActivityFooter_col_xf2:true,appActivityFooter_col_xf2_size_large:attr.size==='large',appActivityFooter_col_xf2_size_medium:attr.size==='medium',appActivityFooter_col_xf2_size_small:attr.size==='small',appActivityFooter_col_xf2_size_min:attr.size==='min',appActivityFooter_col_xf2_checked:attr.checked,appActivityFooter_col_xf2_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="btn"
                        refId="btn"
                        v-show="pvt_isShow.xf2 === 'btn'"
                        :paraVarPair="pvt_xf2.btn.paraVarPair"
                        :para="pvt_xf2.btn.para"
                        :attr="pvt_xf2.btn.attr">
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
					vessel:['xf6','xf7','xf8','xf9','xf10','xf11','xf2'],
					subModule:['homeIcon','homeText','collectIcon','collectText','shareIcon','shareText','btn'],
				},
				pvt_isShow: {
					xf6:null,
					xf7:null,
					xf8:null,
					xf9:null,
					xf10:null,
					xf11:null,
					xf2:null,
				},
				pvt_isWinShow: {
					xqActivityFooterWindow:true,
					xf1:true,
					xf2:true,
					xf3:true,
					xf4:true,
					xf5:true,
					xf6:true,
					xf7:true,
					xf8:true,
					xf9:true,
					xf10:true,
					xf11:true,
				},
				pvt_eventPortInput: ['openClickEvent'],

			};
		},
		watch: {
		},
		computed:{
			pvt_xf6:function(){
				return {
					homeIcon:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							textAlign:'center',
							color:'#333',
							fontSize:'20px',
							icon:'van-icon-home-o',
						},
					},
				};
			},
			pvt_xf7:function(){
				return {
					homeText:{
						paraVarPair:{
						},
						para:{
							textData:'主页',
						},
						attr:{
							isClick:true,
							textAlign:'center',
							color:'#666',
							fontSize:'10px',
						},
					},
				};
			},
			pvt_xf8:function(){
				return {
					collectIcon:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							textAlign:'center',
							fontSize:'20px',
							icon:'van-icon-star-o',
						},
					},
				};
			},
			pvt_xf9:function(){
				return {
					collectText:{
						paraVarPair:{
						},
						para:{
							textData:'收藏',
						},
						attr:{
							isClick:true,
							textAlign:'center',
							color:'#666',
							fontSize:'10px',
						},
					},
				};
			},
			pvt_xf10:function(){
				return {
					shareIcon:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							textAlign:'center',
							color:'#333',
							fontSize:'20px',
							icon:'van-icon-share',
						},
					},
				};
			},
			pvt_xf11:function(){
				return {
					shareText:{
						paraVarPair:{
						},
						para:{
							textData:'分享',
						},
						attr:{
							isClick:true,
							textAlign:'center',
							color:'#666',
							fontSize:'10px',
						},
					},
				};
			},
			pvt_xf2:function(){
				return {
					btn:{
						paraVarPair:{
						},
						para:{
							textData:'我要报名',
						},
						attr:{
							isClick:true,
							label:'div',
							textAlign:'center',
							height:'49px',
							color:'#fff',
							fontSize:'18px',
							background:'#12B0FF',
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
			btn_textClickEvent:function(){
				this.ep.openClickEvent();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .appActivityFooter_container {
        width:100%;
        height:100%;
    }
    .appActivityFooter_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appActivityFooter_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appActivityFooter_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appActivityFooter_row {
        display:flex;
    }
    .appActivityFooter_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appActivityFooter_col_xqActivityFooterWindow_size_medium {
        width:@appActivityFooter-xqActivityFooterWindow-medium-width;
        height:@appActivityFooter-xqActivityFooterWindow-medium-height;
    }
    .appActivityFooter_col_xqActivityFooterWindow {
        background-color:mix(@appActivityFooter-xqActivityFooterWindow-background-color,#fff,@appActivityFooter-xqActivityFooterWindow-background-color-opacity);
    }
    .appActivityFooter_col_xf1_size_medium {
        width:@appActivityFooter-xf1-medium-width;
        height:@appActivityFooter-xf1-medium-height;
        margin:@appActivityFooter-xf1-medium-margin;
        padding:@appActivityFooter-xf1-medium-padding;
    }
    .appActivityFooter_col_xf1 {
        background-color:mix(@appActivityFooter-xf1-background-color,#fff,@appActivityFooter-xf1-background-color-opacity);
    }
    .appActivityFooter_col_xf2_size_medium {
        width:@appActivityFooter-xf2-medium-width;
    }
    .appActivityFooter_col_xf3_size_medium {
        width:@appActivityFooter-xf3-medium-width;
    }
    .appActivityFooter_col_xf4_size_medium {
        width:@appActivityFooter-xf4-medium-width;
    }
    .appActivityFooter_col_xf5_size_medium {
        width:@appActivityFooter-xf5-medium-width;
    }
    .appActivityFooter_col_xf6_size_medium {
        width:@appActivityFooter-xf6-medium-width;
    }
    .appActivityFooter_col_xf7_size_medium {
        width:@appActivityFooter-xf7-medium-width;
    }
    .appActivityFooter_col_xf8_size_medium {
        width:@appActivityFooter-xf8-medium-width;
    }
    .appActivityFooter_col_xf9_size_medium {
        width:@appActivityFooter-xf9-medium-width;
    }
    .appActivityFooter_col_xf10_size_medium {
        width:@appActivityFooter-xf10-medium-width;
    }
    .appActivityFooter_col_xf11_size_medium {
        width:@appActivityFooter-xf11-medium-width;
    }




</style>
