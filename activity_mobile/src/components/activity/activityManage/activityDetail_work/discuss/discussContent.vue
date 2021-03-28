<template>
    <div v-show="pvt_isWinShow.xqDiscussContentWindow"
         :class="{replayDiscussContent_container:true,replayDiscussContent_col:true,replayDiscussContent_col_xqDiscussContentWindow:true,replayDiscussContent_col_xqDiscussContentWindow_size_large:attr.size==='large',replayDiscussContent_col_xqDiscussContentWindow_size_medium:attr.size==='medium',replayDiscussContent_col_xqDiscussContentWindow_size_small:attr.size==='small',replayDiscussContent_col_xqDiscussContentWindow_size_min:attr.size==='min',replayDiscussContent_col_xqDiscussContentWindow_checked:attr.checked,replayDiscussContent_col_xqDiscussContentWindow_disable:attr.disabled}" >

        <div class="replayDiscussContent_row replayDiscussContent_row_row1">
            <div v-show="pvt_isWinShow.xdc1"
                 :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc1:true,replayDiscussContent_col_xdc1_size_large:attr.size==='large',replayDiscussContent_col_xdc1_size_medium:attr.size==='medium',replayDiscussContent_col_xdc1_size_small:attr.size==='small',replayDiscussContent_col_xdc1_size_min:attr.size==='min',replayDiscussContent_col_xdc1_checked:attr.checked,replayDiscussContent_col_xdc1_disable:attr.disabled}" >

                <lm2b-image
                        ref="image"
                        refId="image"
                        v-show="pvt_isShow.xdc1 === 'image'"
                        :paraVarPair="pvt_xdc1.image.paraVarPair"
                        :para="pvt_xdc1.image.para"
                        :attr="pvt_xdc1.image.attr">
                </lm2b-image>
            </div>
            <div v-show="pvt_isWinShow.xdc2"
                 :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc2:true,replayDiscussContent_col_xdc2_size_large:attr.size==='large',replayDiscussContent_col_xdc2_size_medium:attr.size==='medium',replayDiscussContent_col_xdc2_size_small:attr.size==='small',replayDiscussContent_col_xdc2_size_min:attr.size==='min',replayDiscussContent_col_xdc2_checked:attr.checked,replayDiscussContent_col_xdc2_disable:attr.disabled}" >

                <div class="replayDiscussContent_row replayDiscussContent_row_row2">
                    <div v-show="pvt_isWinShow.xdc3"
                         :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc3:true,replayDiscussContent_col_xdc3_size_large:attr.size==='large',replayDiscussContent_col_xdc3_size_medium:attr.size==='medium',replayDiscussContent_col_xdc3_size_small:attr.size==='small',replayDiscussContent_col_xdc3_size_min:attr.size==='min',replayDiscussContent_col_xdc3_checked:attr.checked,replayDiscussContent_col_xdc3_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="askName"
                                refId="askName"
                                v-show="pvt_isShow.xdc3 === 'askName'"
                                :paraVarPair="pvt_xdc3.askName.paraVarPair"
                                :para="pvt_xdc3.askName.para"
                                :attr="pvt_xdc3.askName.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="replayDiscussContent_row replayDiscussContent_row_row3">
                    <div v-show="pvt_isWinShow.askTime"
                         :class="{replayDiscussContent_col:true,replayDiscussContent_col_askTime:true,replayDiscussContent_col_askTime_size_large:attr.size==='large',replayDiscussContent_col_askTime_size_medium:attr.size==='medium',replayDiscussContent_col_askTime_size_small:attr.size==='small',replayDiscussContent_col_askTime_size_min:attr.size==='min',replayDiscussContent_col_askTime_checked:attr.checked,replayDiscussContent_col_askTime_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="askDate"
                                refId="askDate"
                                v-show="pvt_isShow.askTime === 'askDate'"
                                :paraVarPair="pvt_askTime.askDate.paraVarPair"
                                :para="pvt_askTime.askDate.para"
                                :attr="pvt_askTime.askDate.attr">
                        </lm2b-link-text>
                    </div>
                </div>
            </div>
        </div>
        <div class="replayDiscussContent_row replayDiscussContent_row_row4">
            <div v-show="pvt_isWinShow.xdc4"
                 :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc4:true,replayDiscussContent_col_xdc4_size_large:attr.size==='large',replayDiscussContent_col_xdc4_size_medium:attr.size==='medium',replayDiscussContent_col_xdc4_size_small:attr.size==='small',replayDiscussContent_col_xdc4_size_min:attr.size==='min',replayDiscussContent_col_xdc4_checked:attr.checked,replayDiscussContent_col_xdc4_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="askContent"
                        refId="askContent"
                        v-show="pvt_isShow.xdc4 === 'askContent'"
                        :paraVarPair="pvt_xdc4.askContent.paraVarPair"
                        :para="pvt_xdc4.askContent.para"
                        :attr="pvt_xdc4.askContent.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="replayDiscussContent_row replayDiscussContent_row_row9">
            <div v-show="pvt_isWinShow.xdc9"
                 :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc9:true,replayDiscussContent_col_xdc9_size_large:attr.size==='large',replayDiscussContent_col_xdc9_size_medium:attr.size==='medium',replayDiscussContent_col_xdc9_size_small:attr.size==='small',replayDiscussContent_col_xdc9_size_min:attr.size==='min',replayDiscussContent_col_xdc9_checked:attr.checked,replayDiscussContent_col_xdc9_disable:attr.disabled}" >

                <div class="replayDiscussContent_row replayDiscussContent_row_row10">
                    <div v-show="pvt_isShow.xdc10 === 'replay'"
                         :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc10:true,replayDiscussContent_col_xdc10_size_large:attr.size==='large',replayDiscussContent_col_xdc10_size_medium:attr.size==='medium',replayDiscussContent_col_xdc10_size_small:attr.size==='small',replayDiscussContent_col_xdc10_size_min:attr.size==='min',replayDiscussContent_col_xdc10_checked:attr.checked,replayDiscussContent_col_xdc10_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="replay"
                                refId="replay"
                                v-show="pvt_isShow.xdc10 === 'replay'"
                                :paraVarPair="pvt_xdc10.replay.paraVarPair"
                                :para="pvt_xdc10.replay.para"
                                :attr="pvt_xdc10.replay.attr">
                        </lm2b-link-text>
                    </div>
                </div>
            </div>
        </div>
        <div class="replayDiscussContent_row replayDiscussContent_row_row5">
            <div  v-show="pvt_isShow.xdc8 === 'ansContent'"
                 :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc5:true,replayDiscussContent_col_xdc5_size_large:attr.size==='large',replayDiscussContent_col_xdc5_size_medium:attr.size==='medium',replayDiscussContent_col_xdc5_size_small:attr.size==='small',replayDiscussContent_col_xdc5_size_min:attr.size==='min',replayDiscussContent_col_xdc5_checked:attr.checked,replayDiscussContent_col_xdc5_disable:attr.disabled}" >

                <div class="replayDiscussContent_row replayDiscussContent_row_row6">
                    <div v-show="pvt_isWinShow.xdc6"
                         :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc6:true,replayDiscussContent_col_xdc6_size_large:attr.size==='large',replayDiscussContent_col_xdc6_size_medium:attr.size==='medium',replayDiscussContent_col_xdc6_size_small:attr.size==='small',replayDiscussContent_col_xdc6_size_min:attr.size==='min',replayDiscussContent_col_xdc6_checked:attr.checked,replayDiscussContent_col_xdc6_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="ansName"
                                refId="ansName"
                                v-show="pvt_isShow.xdc6 === 'ansName'"
                                :paraVarPair="pvt_xdc6.ansName.paraVarPair"
                                :para="pvt_xdc6.ansName.para"
                                :attr="pvt_xdc6.ansName.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="replayDiscussContent_row replayDiscussContent_row_row7">
                    <div v-show="pvt_isWinShow.xdc7"
                         :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc7:true,replayDiscussContent_col_xdc7_size_large:attr.size==='large',replayDiscussContent_col_xdc7_size_medium:attr.size==='medium',replayDiscussContent_col_xdc7_size_small:attr.size==='small',replayDiscussContent_col_xdc7_size_min:attr.size==='min',replayDiscussContent_col_xdc7_checked:attr.checked,replayDiscussContent_col_xdc7_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="ansTime"
                                refId="ansTime"
                                v-show="pvt_isShow.xdc7 === 'ansTime'"
                                :paraVarPair="pvt_xdc7.ansTime.paraVarPair"
                                :para="pvt_xdc7.ansTime.para"
                                :attr="pvt_xdc7.ansTime.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="replayDiscussContent_row replayDiscussContent_row_row8">
                    <div v-show="pvt_isWinShow.xdc8"
                         :class="{replayDiscussContent_col:true,replayDiscussContent_col_xdc8:true,replayDiscussContent_col_xdc8_size_large:attr.size==='large',replayDiscussContent_col_xdc8_size_medium:attr.size==='medium',replayDiscussContent_col_xdc8_size_small:attr.size==='small',replayDiscussContent_col_xdc8_size_min:attr.size==='min',replayDiscussContent_col_xdc8_checked:attr.checked,replayDiscussContent_col_xdc8_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="ansContent"
                                refId="ansContent"
                                v-show="pvt_isShow.xdc8 === 'ansContent'"
                                :paraVarPair="pvt_xdc8.ansContent.paraVarPair"
                                :para="pvt_xdc8.ansContent.para"
                                :attr="pvt_xdc8.ansContent.attr">
                        </lm2b-link-text>
                    </div>
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

				discuss:this.para.discuss,
				pvt_subModuleMap: {
					vessel:['xdc1','xdc3','xdc4','xdc6','xdc7','xdc8','askTime','xdc10'],
					subModule:['image','askName','askContent','ansName','ansTime','ansContent','askDate','replay'],
				},
				pvt_isShow: {
					xdc1:null,
					xdc3:null,
					xdc4:null,
					xdc6:null,
					xdc7:null,
					xdc8:null,
					askTime:null,
					xdc10:null,
				},
				pvt_isWinShow: {
					xqDiscussContentWindow:true,
					xdc1:true,
					xdc2:true,
					xdc3:true,
					askTime:true,
					xdc4:true,
					xdc5:true,
					xdc6:true,
					xdc7:true,
					xdc8:true,
					xdc9:true,
					xdc10:true,
				},
				pvt_eventPortInput: ['openReplayEvent'],

				headPortrait:null,
				askName:null,
				askTime:null,
				askContent:null,
				ansName:null,
				ansTime:null,
				ansContent:null,
			};
		},
		watch: {
			discuss: {
				handler: function (val, oldVal) {
					if (val !== oldVal && this.paraVarPair.discuss) {
						if (this.number !== undefined) { // 循环
							this.$parent[this.paraVarPair.discuss][this.number] = val
						} else { // 非循环
							this.$parent[this.paraVarPair.discuss] = val
						}
					}
				},
				deep   : true
			},
		},
		computed:{
			pvt_xdc1:function(){
				return {
					image:{
						paraVarPair:{
							image:'headPortrait',
						},
						para:{
							image:this.headPortrait,
						},
						attr:{
						},
					},
				};
			},
			pvt_xdc3:function(){
				return {
					askName:{
						paraVarPair:{
							textData:'askName',
						},
						para:{
							textData:this.askName,
						},
						attr:{
							fontWeight:true,
							height:'24px',
							color:'#333',
							fontSize:'14px',
						},
					},
				};
			},
			pvt_xdc4:function(){
				return {
					askContent:{
						paraVarPair:{
							textData:'askContent',
						},
						para:{
							textData:this.askContent,
						},
						attr:{
							height:'20px',
							color:'#303133',
							fontSize:'14px',
						},
					},
				};
			},
			pvt_xdc6:function(){
				return {
					ansName:{
						paraVarPair:{
							textData:'ansName',
						},
						para:{
							textData:this.ansName,
						},
						attr:{
							height:'24px',
							color:'#999',
							fontSize:'14px',
							background:'transparent',
						},
					},
				};
			},
			pvt_xdc7:function(){
				return {
					ansTime:{
						paraVarPair:{
							textData:'ansTime',
						},
						para:{
							textData:this.ansTime,
						},
						attr:{
							color:'#999',
							fontSize:'12px',
							background:'transparent',
						},
					},
				};
			},
			pvt_xdc8:function(){
				return {
					ansContent:{
						paraVarPair:{
							textData:'ansContent',
						},
						para:{
							textData:this.ansContent,
						},
						attr:{
							height:'20px',
							color:'#303133',
							fontSize:'14px',
							background:'transparent',
						},
					},
				};
			},
			pvt_askTime:function(){
				return {
					askDate:{
						paraVarPair:{
							textData:'askTime',
						},
						para:{
							textData:this.askTime,
						},
						attr:{
							color:'#999',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_xdc10:function(){
				return {
					replay:{
						paraVarPair:{
						},
						para:{
							textData:'回复',
						},
						attr:{
							isClick:true,
                            label:'div',
							textAlign:'center',
							height:'24px',
							color:'#12B0FF',
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
			startModule:function(successCallBack,errorCallBack){
				let $this = this;
				let dbFlag;
				$this.mac = mac.mac;
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
							$this.headPortrait = $this.para.discuss.headPortrait;
							$this.askName = $this.para.discuss.askName;
							$this.askTime = $this.para.discuss.askTime;
							$this.askContent = $this.para.discuss.askContent;
							$this.ansName = $this.para.discuss.ansName;
							$this.ansTime = $this.para.discuss.ansTime;
							$this.ansContent = $this.para.discuss.ansContent;
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr, true, function () {
								para.nStep = 'startModule_loop';
								para.i=0;
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'startModule_loop':
							if (para.i === para.refArr.length) {
								if($this.ansContent) {
									para.nStep='showSubModule_replay'; //隐藏回复按钮容器
                                }else {
									para.nStep='showSubModule_ansContent';//隐藏回复容器
                                }
								// para.nStep = 'end';
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
						//隐藏容器  当前ansContent为null时
						case 'showSubModule_ansContent':
						    $this.showSubModule(['ansContent'], false, function () {
						        para.nStep = 'end';
						        if (++dbFlag === 2) {
						            $this.startModule(successCallBack, errorCallBack)
						        }
						    }, para.errorCallBack);
							break;
						case 'showSubModule_replay':
							$this.showSubModule(['replay'], false, function () {
								para.nStep = 'end';
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
			replayClick:function(){
				//当前提问信息对应的id
				this.ep.openReplayEvent(this.para.discuss.id)
            },
			replay_textClickEvent:function(){
				this.replayClick();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
     .replayDiscussContent_row_row10 {
        justify-content: flex-end;
    }
    .replayDiscussContent_container {
        width:100%;
        height:100%;
    }
    .replayDiscussContent_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .replayDiscussContent_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .replayDiscussContent_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .replayDiscussContent_row {
        display:flex;
    }
    .replayDiscussContent_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .replayDiscussContent_col_xqDiscussContentWindow_size_medium {
        width:@replayDiscussContent-xqDiscussContentWindow-medium-width;
        padding:@replayDiscussContent-xqDiscussContentWindow-medium-padding;
    }
    .replayDiscussContent_col_xqDiscussContentWindow {
        border-style:@replayDiscussContent-xqDiscussContentWindow-border-style;
        border-width:@replayDiscussContent-xqDiscussContentWindow-border-width;
        border-radius:@replayDiscussContent-xqDiscussContentWindow-border-radius;
        border-color:mix(@replayDiscussContent-xqDiscussContentWindow-border-color,#fff,@replayDiscussContent-xqDiscussContentWindow-hover-border-color-opacity);
    }
    .replayDiscussContent_col_xdc1_size_medium {
        width:@replayDiscussContent-xdc1-medium-width;
        height:@replayDiscussContent-xdc1-medium-height;
        overflow: hidden;
    }
    .replayDiscussContent_col_xdc1 {
        border-radius:@replayDiscussContent-xdc1-border-radius;
    }
    .replayDiscussContent_col_xdc2_size_medium {
        width:@replayDiscussContent-xdc2-medium-width;
        padding:@replayDiscussContent-xdc2-medium-padding;
    }
    .replayDiscussContent_col_xdc3_size_medium {
        width:@replayDiscussContent-xdc3-medium-width;
    }
    .replayDiscussContent_col_askTime_size_medium {
        width:@replayDiscussContent-askTime-medium-width;
    }
    .replayDiscussContent_col_xdc4_size_medium {
        width:@replayDiscussContent-xdc4-medium-width;
        padding:@replayDiscussContent-xdc4-medium-padding;
    }
    .replayDiscussContent_col_xdc5_size_medium {
        width:@replayDiscussContent-xdc5-medium-width;
        padding:@replayDiscussContent-xdc5-medium-padding;
    }
    .replayDiscussContent_col_xdc5 {
        background-color:mix(@replayDiscussContent-xdc5-background-color,#fff,@replayDiscussContent-xdc5-background-color-opacity);
    }
    .replayDiscussContent_col_xdc6_size_medium {
        width:@replayDiscussContent-xdc6-medium-width;
    }
    .replayDiscussContent_col_xdc7_size_medium {
        width:@replayDiscussContent-xdc7-medium-width;
    }
    .replayDiscussContent_col_xdc8_size_medium {
        width:@replayDiscussContent-xdc8-medium-width;
    }
    .replayDiscussContent_col_xdc9_size_medium {
        width:@replayDiscussContent-xdc9-medium-width;
        padding:@replayDiscussContent-xdc9-medium-padding;
        margin:@replayDiscussContent-xdc9-medium-margin;
    }
    .replayDiscussContent_col_xdc10_size_medium {
        width:@replayDiscussContent-xdc10-medium-width;
        height:@replayDiscussContent-xdc10-medium-height;
        align-items:@replayDiscussContent-xdc10-medium-horizontal-position;
    }
    .replayDiscussContent_col_xdc10_size_large {
        align-items:@replayDiscussContent-xdc10-large-horizontal-position;
    }
    .replayDiscussContent_col_xdc10_size_small {
        align-items:@replayDiscussContent-xdc10-small-horizontal-position;
    }
    .replayDiscussContent_col_xdc10_size_min {
        align-items:@replayDiscussContent-xdc10-mini-horizontal-position;
    }
    .replayDiscussContent_col_xdc10 {
        border-style:@replayDiscussContent-xdc10-border-style;
        border-width:@replayDiscussContent-xdc10-border-width;
        border-radius:@replayDiscussContent-xdc10-border-radius;
        border-color:mix(@replayDiscussContent-xdc10-border-color,#fff,@replayDiscussContent-xdc10-hover-border-color-opacity);
    }

</style>
