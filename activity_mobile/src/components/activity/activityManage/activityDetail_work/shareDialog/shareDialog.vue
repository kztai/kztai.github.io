<template>
    <div v-show="pvt_isWinShow.replayShareWindow"
         :class="{replayShare_container:true,replayShare_col:true,replayShare_col_replayShareWindow:true,replayShare_col_replayShareWindow_size_large:attr.size==='large',replayShare_col_replayShareWindow_size_medium:attr.size==='medium',replayShare_col_replayShareWindow_size_small:attr.size==='small',replayShare_col_replayShareWindow_size_min:attr.size==='min',replayShare_col_replayShareWindow_checked:attr.checked,replayShare_col_replayShareWindow_disable:attr.disabled}" >

        <div class="replayShare_row replayShare_row_row1">
            <div v-show="pvt_isWinShow.rs1"
                 :class="{replayShare_col:true,replayShare_col_rs1:true,replayShare_col_rs1_size_large:attr.size==='large',replayShare_col_rs1_size_medium:attr.size==='medium',replayShare_col_rs1_size_small:attr.size==='small',replayShare_col_rs1_size_min:attr.size==='min',replayShare_col_rs1_checked:attr.checked,replayShare_col_rs1_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="close"
                        refId="close"
                        v-show="pvt_isShow.rs1 === 'close'"
                        :paraVarPair="pvt_rs1.close.paraVarPair"
                        :para="pvt_rs1.close.para"
                        :attr="pvt_rs1.close.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="replayShare_row replayShare_row_row2">
            <div v-show="pvt_isWinShow.rs2"
                 :class="{replayShare_col:true,replayShare_col_rs2:true,replayShare_col_rs2_size_large:attr.size==='large',replayShare_col_rs2_size_medium:attr.size==='medium',replayShare_col_rs2_size_small:attr.size==='small',replayShare_col_rs2_size_min:attr.size==='min',replayShare_col_rs2_checked:attr.checked,replayShare_col_rs2_disable:attr.disabled}" >

                <lm2b-divider
                        ref="divider"
                        refId="divider"
                        v-show="pvt_isShow.rs2 === 'divider'"
                        :paraVarPair="pvt_rs2.divider.paraVarPair"
                        :para="pvt_rs2.divider.para"
                        :attr="pvt_rs2.divider.attr">
                </lm2b-divider>
            </div>
        </div>
        <div class="replayShare_row replayShare_row_row3">
            <div v-show="pvt_isWinShow.rs3"
                 :class="{replayShare_col:true,replayShare_col_rs3:true,replayShare_col_rs3_size_large:attr.size==='large',replayShare_col_rs3_size_medium:attr.size==='medium',replayShare_col_rs3_size_small:attr.size==='small',replayShare_col_rs3_size_min:attr.size==='min',replayShare_col_rs3_checked:attr.checked,replayShare_col_rs3_disable:attr.disabled}" >
                <replay-third-party
                        ref="third"
                        refId="third"
                        v-show="pvt_isShow.rs3 === 'third'"
                        :paraVarPair="pvt_rs3.third.paraVarPair"
                        v-for="(item, index) in pvt_rs3.third.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </replay-third-party>
            </div>
        </div>

    </div>
</template>
<script>
	import libSys from '@/components/baseComponent/libSys.js';
	import libUpload from '@/components/baseComponent/libUpload.js';
	import replayThirdParty from './thirdParty';
	export default {
		components: {replayThirdParty},
		inject: ['sys'],
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['rs1','rs2','rs3'],
					subModule:['close','divider','third'],
				},
				pvt_isShow: {
					rs1:null,
					rs2:null,
					rs3:null,
				},
				pvt_isWinShow: {
					replayShareWindow:true,
					rs1:true,
					rs2:true,
					rs3:true,
				},
				pvt_eventPortInput: [],

				divider:null,
				style:null,
				thirdPartyArr:[],
				size:[],
			};
		},
		watch: {
		},
		computed:{
			pvt_rs1:function(){
				return {
					close:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							color:'#999',
							fontSize:'15px',
							icon:'van-icon-cross',
						},
					},
				};
			},
			pvt_rs2:function(){
				return {
					divider:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							content:this.divider,
							style:this.style,
						},
					},
				};
			},
			pvt_rs3:function(){
				let loopModule={
					third:{
						para:{
							thirdParty:this.thirdPartyArr,
						},
						attr:{
							size:this.size,
						},
					},
				};
				let forData = this.pvt_createForData(loopModule);
				return {
					third:{
						paraVarPair:{
							thirdParty:'thirdPartyArr',
						},
						forData: forData.third,
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
							$this.divider = '邀请好友一起参加活动';
							$this.style={
								color:'#999',
								borderColor:'#ccc',
								padding:'0px 60px'
							};
							$this.thirdPartyArr=[
								{icon:'my-icon-weixin1',name:'微信',color:'#3FB529'},
								{icon:'my-icon-pengyouquan',name:'朋友圈',color:'#66D020'},
								{icon:'my-icon-qq',name:'QQ',color:'#12B0FF'},
								{icon:'my-icon-kongjian',name:'qq空间',color:'#FFBD1D'},
								{icon:'my-icon-weibo',name:'微博',color:'#FE4E34'},
								{icon:'my-icon-facebook',name:'facebook',color:'#3B5998'},
								{icon:'my-icon-twitter',name:'twitter',color:'#17B1E7'},
								{icon:'my-icon-lianjie',name:'复制链接',color:'#999999'}
							];
							$this.size=[];
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
							if(para.refArr[para.i]==='third') {
								let arr = [];
								for(let i = 0;i < $this.thirdPartyArr.length;i++){
									arr.push([function(){},function(error){console.log(error)}]);
									$this.size.push('medium');
								}
								$this.callLoopModuleMethod('third','startModule',arr,function(result){
									para.i++;
									if (++dbFlag === 2) {
										$this.startModule(successCallBack, errorCallBack)
									}
								}, para.errorCallBack);
							}else {
								$this.sm[para.refArr[para.i]].startModule(function () {
									para.i++;
									if (++dbFlag === 2) {
										$this.startModule(successCallBack, errorCallBack)
									}
								}, para.errorCallBack);
							}
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
				this.hideSelfModule(this.refId, function () {},function () {});
            },
			close_textClickEvent:function(){
				this.closeClick();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .replayShare_container {
        width:100%;
        //height:100%;
    }
    .replayShare_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .replayShare_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .replayShare_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .replayShare_row {
        display:flex;
    }
    .replayShare_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .replayShare_col_replayShareWindow_size_medium {
        width:@replayShare-replayShareWindow-medium-width;
        padding:@replayShare-replayShareWindow-medium-padding;
        margin:@replayShare-replayShareWindow-medium-margin;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .replayShare_col_replayShareWindow {
        background-color:mix(@replayShare-replayShareWindow-background-color,#fff,@replayShare-replayShareWindow-background-color-opacity);
    }
    .replayShare_col_rs1_size_medium {
        width:@replayShare-rs1-medium-width;
        padding:@replayShare-rs1-medium-padding;
        align-items:@replayShare-rs1-medium-horizontal-position;
    }
    .replayShare_col_rs1_size_large {
        align-items:@replayShare-rs1-large-horizontal-position;
    }
    .replayShare_col_rs1_size_small {
        align-items:@replayShare-rs1-small-horizontal-position;
    }
    .replayShare_col_rs1_size_min {
        align-items:@replayShare-rs1-mini-horizontal-position;
    }
    .replayShare_col_rs2_size_medium {
        width:@replayShare-rs2-medium-width;
    }
    .replayShare_col_rs3_size_medium {
        width:@replayShare-rs3-medium-width;
        flex-direction: row;
        flex-wrap: wrap;
    }

</style>
