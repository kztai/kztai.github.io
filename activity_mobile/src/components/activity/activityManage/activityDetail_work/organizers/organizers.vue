<template>
    <div v-show="pvt_isWinShow.xqOrganizersWindow"
         :class="{replayOrganizers_container:true,replayOrganizers_col:true,replayOrganizers_col_xqOrganizersWindow:true,replayOrganizers_col_xqOrganizersWindow_size_large:attr.size==='large',replayOrganizers_col_xqOrganizersWindow_size_medium:attr.size==='medium',replayOrganizers_col_xqOrganizersWindow_size_small:attr.size==='small',replayOrganizers_col_xqOrganizersWindow_size_min:attr.size==='min',replayOrganizers_col_xqOrganizersWindow_checked:attr.checked,replayOrganizers_col_xqOrganizersWindow_disable:attr.disabled}" >

        <div class="replayOrganizers_row replayOrganizers_row_row1">
            <div v-show="pvt_isWinShow.xo1"
                 :class="{replayOrganizers_col:true,replayOrganizers_col_xo1:true,replayOrganizers_col_xo1_size_large:attr.size==='large',replayOrganizers_col_xo1_size_medium:attr.size==='medium',replayOrganizers_col_xo1_size_small:attr.size==='small',replayOrganizers_col_xo1_size_min:attr.size==='min',replayOrganizers_col_xo1_checked:attr.checked,replayOrganizers_col_xo1_disable:attr.disabled}" >

                <div class="replayOrganizers_row replayOrganizers_row_row2">
                    <div v-show="pvt_isWinShow.xo2"
                         :class="{replayOrganizers_col:true,replayOrganizers_col_xo2:true,replayOrganizers_col_xo2_size_large:attr.size==='large',replayOrganizers_col_xo2_size_medium:attr.size==='medium',replayOrganizers_col_xo2_size_small:attr.size==='small',replayOrganizers_col_xo2_size_min:attr.size==='min',replayOrganizers_col_xo2_checked:attr.checked,replayOrganizers_col_xo2_disable:attr.disabled}" >

                        <div class="replayOrganizers_row replayOrganizers_row_row3">
                            <div v-show="pvt_isWinShow.xo3"
                                 :class="{replayOrganizers_col:true,replayOrganizers_col_xo3:true,replayOrganizers_col_xo3_size_large:attr.size==='large',replayOrganizers_col_xo3_size_medium:attr.size==='medium',replayOrganizers_col_xo3_size_small:attr.size==='small',replayOrganizers_col_xo3_size_min:attr.size==='min',replayOrganizers_col_xo3_checked:attr.checked,replayOrganizers_col_xo3_disable:attr.disabled}" >

                                <div class="replayOrganizers_row replayOrganizers_row_row4">
                                    <div v-show="pvt_isWinShow.xo5"
                                         :class="{replayOrganizers_col:true,replayOrganizers_col_xo5:true,replayOrganizers_col_xo5_size_large:attr.size==='large',replayOrganizers_col_xo5_size_medium:attr.size==='medium',replayOrganizers_col_xo5_size_small:attr.size==='small',replayOrganizers_col_xo5_size_min:attr.size==='min',replayOrganizers_col_xo5_checked:attr.checked,replayOrganizers_col_xo5_disable:attr.disabled}" >

                                        <lm2b-image
                                                ref="image"
                                                refId="image"
                                                v-show="pvt_isShow.xo5 === 'image'"
                                                :paraVarPair="pvt_xo5.image.paraVarPair"
                                                :para="pvt_xo5.image.para"
                                                :attr="pvt_xo5.image.attr">
                                        </lm2b-image>
                                    </div>
                                </div>
                                <div class="replayOrganizers_row replayOrganizers_row_row5">
                                    <div v-show="pvt_isWinShow.xo6"
                                         :class="{replayOrganizers_col:true,replayOrganizers_col_xo6:true,replayOrganizers_col_xo6_size_large:attr.size==='large',replayOrganizers_col_xo6_size_medium:attr.size==='medium',replayOrganizers_col_xo6_size_small:attr.size==='small',replayOrganizers_col_xo6_size_min:attr.size==='min',replayOrganizers_col_xo6_checked:attr.checked,replayOrganizers_col_xo6_disable:attr.disabled}" >

                                    </div>
                                </div>
                            </div>
                            <div v-show="pvt_isWinShow.xo4"
                                 :class="{replayOrganizers_col:true,replayOrganizers_col_xo4:true,replayOrganizers_col_xo4_size_large:attr.size==='large',replayOrganizers_col_xo4_size_medium:attr.size==='medium',replayOrganizers_col_xo4_size_small:attr.size==='small',replayOrganizers_col_xo4_size_min:attr.size==='min',replayOrganizers_col_xo4_checked:attr.checked,replayOrganizers_col_xo4_disable:attr.disabled}" >

                                <div class="replayOrganizers_row replayOrganizers_row_row6">
                                    <div v-show="pvt_isWinShow.xo7"
                                         :class="{replayOrganizers_col:true,replayOrganizers_col_xo7:true,replayOrganizers_col_xo7_size_large:attr.size==='large',replayOrganizers_col_xo7_size_medium:attr.size==='medium',replayOrganizers_col_xo7_size_small:attr.size==='small',replayOrganizers_col_xo7_size_min:attr.size==='min',replayOrganizers_col_xo7_checked:attr.checked,replayOrganizers_col_xo7_disable:attr.disabled}" >

                                        <lm2b-link-text
                                                ref="title"
                                                refId="title"
                                                v-show="pvt_isShow.xo7 === 'title'"
                                                :paraVarPair="pvt_xo7.title.paraVarPair"
                                                :para="pvt_xo7.title.para"
                                                :attr="pvt_xo7.title.attr">
                                        </lm2b-link-text>
                                    </div>
                                </div>
                                <div class="replayOrganizers_row replayOrganizers_row_row10">
                                    <div v-show="pvt_isWinShow.xo8"
                                         :class="{replayOrganizers_col:true,replayOrganizers_col_xo8:true,replayOrganizers_col_xo8_size_large:attr.size==='large',replayOrganizers_col_xo8_size_medium:attr.size==='medium',replayOrganizers_col_xo8_size_small:attr.size==='small',replayOrganizers_col_xo8_size_min:attr.size==='min',replayOrganizers_col_xo8_checked:attr.checked,replayOrganizers_col_xo8_disable:attr.disabled}" >

                                        <div class="replayOrganizers_row replayOrganizers_row_row11">
                                            <div v-show="pvt_isWinShow.xo9"
                                                 :class="{replayOrganizers_col:true,replayOrganizers_col_xo9:true,replayOrganizers_col_xo9_size_large:attr.size==='large',replayOrganizers_col_xo9_size_medium:attr.size==='medium',replayOrganizers_col_xo9_size_small:attr.size==='small',replayOrganizers_col_xo9_size_min:attr.size==='min',replayOrganizers_col_xo9_checked:attr.checked,replayOrganizers_col_xo9_disable:attr.disabled}" >

                                                <lm2b-link-text
                                                        ref="fans"
                                                        refId="fans"
                                                        v-show="pvt_isShow.xo9 === 'fans'"
                                                        :paraVarPair="pvt_xo9.fans.paraVarPair"
                                                        :para="pvt_xo9.fans.para"
                                                        :attr="pvt_xo9.fans.attr">
                                                </lm2b-link-text>
                                            </div>
                                            <div v-show="pvt_isWinShow.xo10"
                                                 :class="{replayOrganizers_col:true,replayOrganizers_col_xo10:true,replayOrganizers_col_xo10_size_large:attr.size==='large',replayOrganizers_col_xo10_size_medium:attr.size==='medium',replayOrganizers_col_xo10_size_small:attr.size==='small',replayOrganizers_col_xo10_size_min:attr.size==='min',replayOrganizers_col_xo10_checked:attr.checked,replayOrganizers_col_xo10_disable:attr.disabled}" >

                                                <lm2b-link-text
                                                        ref="fansNum"
                                                        refId="fansNum"
                                                        v-show="pvt_isShow.xo10 === 'fansNum'"
                                                        :paraVarPair="pvt_xo10.fansNum.paraVarPair"
                                                        :para="pvt_xo10.fansNum.para"
                                                        :attr="pvt_xo10.fansNum.attr">
                                                </lm2b-link-text>
                                            </div>
                                            <div v-show="pvt_isWinShow.xo11"
                                                 :class="{replayOrganizers_col:true,replayOrganizers_col_xo11:true,replayOrganizers_col_xo11_size_large:attr.size==='large',replayOrganizers_col_xo11_size_medium:attr.size==='medium',replayOrganizers_col_xo11_size_small:attr.size==='small',replayOrganizers_col_xo11_size_min:attr.size==='min',replayOrganizers_col_xo11_checked:attr.checked,replayOrganizers_col_xo11_disable:attr.disabled}" >

                                            </div>
                                            <div v-show="pvt_isWinShow.xo12"
                                                 :class="{replayOrganizers_col:true,replayOrganizers_col_xo12:true,replayOrganizers_col_xo12_size_large:attr.size==='large',replayOrganizers_col_xo12_size_medium:attr.size==='medium',replayOrganizers_col_xo12_size_small:attr.size==='small',replayOrganizers_col_xo12_size_min:attr.size==='min',replayOrganizers_col_xo12_checked:attr.checked,replayOrganizers_col_xo12_disable:attr.disabled}" >

                                                <lm2b-link-text
                                                        ref="activity"
                                                        refId="activity"
                                                        v-show="pvt_isShow.xo12 === 'activity'"
                                                        :paraVarPair="pvt_xo12.activity.paraVarPair"
                                                        :para="pvt_xo12.activity.para"
                                                        :attr="pvt_xo12.activity.attr">
                                                </lm2b-link-text>
                                            </div>
                                            <div v-show="pvt_isWinShow.xo17"
                                                 :class="{replayOrganizers_col:true,replayOrganizers_col_xo17:true,replayOrganizers_col_xo17_size_large:attr.size==='large',replayOrganizers_col_xo17_size_medium:attr.size==='medium',replayOrganizers_col_xo17_size_small:attr.size==='small',replayOrganizers_col_xo17_size_min:attr.size==='min',replayOrganizers_col_xo17_checked:attr.checked,replayOrganizers_col_xo17_disable:attr.disabled}" >

                                                <lm2b-link-text
                                                        ref="activityNum"
                                                        refId="activityNum"
                                                        v-show="pvt_isShow.xo17 === 'activityNum'"
                                                        :paraVarPair="pvt_xo17.activityNum.paraVarPair"
                                                        :para="pvt_xo17.activityNum.para"
                                                        :attr="pvt_xo17.activityNum.attr">
                                                </lm2b-link-text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="replayOrganizers_row replayOrganizers_row_row8">
                    <div v-show="pvt_isWinShow.xo13"
                         :class="{replayOrganizers_col:true,replayOrganizers_col_xo13:true,replayOrganizers_col_xo13_size_large:attr.size==='large',replayOrganizers_col_xo13_size_medium:attr.size==='medium',replayOrganizers_col_xo13_size_small:attr.size==='small',replayOrganizers_col_xo13_size_min:attr.size==='min',replayOrganizers_col_xo13_checked:attr.checked,replayOrganizers_col_xo13_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="content"
                                refId="content"
                                v-show="pvt_isShow.xo13 === 'content'"
                                :paraVarPair="pvt_xo13.content.paraVarPair"
                                :para="pvt_xo13.content.para"
                                :attr="pvt_xo13.content.attr">
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
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['xo5','xo7','xo13','xo9','xo10','xo12','xo17'],
					subModule:['image','title','content','fans','fansNum','activity','activityNum'],
				},
				pvt_isShow: {
					xo5:null,
					xo7:null,
					xo13:null,
					xo9:null,
					xo10:null,
					xo12:null,
					xo17:null,
				},
				pvt_isWinShow: {
					xqOrganizersWindow:true,
					xo1:true,
					xo2:true,
					xo3:true,
					xo4:true,
					xo5:true,
					xo6:true,
					xo7:true,
					xo13:true,
					xo8:true,
					xo9:true,
					xo10:true,
					xo11:true,
					xo12:true,
					xo17:true,
				},
				pvt_eventPortInput: ['groupInfoEvent'],

				title:null,
				fansNum:null,
				activityNum:null,
				content:null,
				image:null,
				focus:null,
			};
		},
		watch: {
		},
		computed:{
			pvt_xo5:function(){
				return {
					image:{
						paraVarPair:{
							image:'image',
						},
						para:{
							image:this.image,
						},
						attr:{
						},
					},
				};
			},
			pvt_xo7:function(){
				return {
					title:{
						paraVarPair:{
							textData:'title',
						},
						para:{
							textData:this.title,
						},
						attr:{
							fontWeight:true,
							height:'30px',
							color:'#333333',
							fontSize:'18px',
						},
					},
				};
			},
			pvt_xo13:function(){
				return {
					content:{
						paraVarPair:{
							textData:'content',
						},
						para:{
							textData:this.content,
						},
						attr:{
							color:'#666666',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_xo9:function(){
				return {
					fans:{
						paraVarPair:{
						},
						para:{
							textData:'粉丝数',
						},
						attr:{
							height:'12px',
							color:'#999',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_xo10:function(){
				return {
					fansNum:{
						paraVarPair:{
							textData:'fansNum',
						},
						para:{
							textData:this.fansNum,
						},
						attr:{
							height:'12px',
							color:'#666',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_xo12:function(){
				return {
					activity:{
						paraVarPair:{
						},
						para:{
							textData:'活动数',
						},
						attr:{
							height:'12px',
							color:'#999',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_xo17:function(){
				return {
					activityNum:{
						paraVarPair:{
							textData:'activityNum',
						},
						para:{
							textData:this.activityNum,
						},
						attr:{
							height:'12px',
							color:'#666',
							fontSize:'12px',
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
						case 'getContent':
							//发事件出去  事件带回调
							//$this.ep.groupInfoEvent()  接收主办方的信息
							$this.title='主办方的名称';
							$this.fansNum='235';
							$this.activityNum='23';
							$this.content='XXX成立于2013年，以联盟为平台，志在打造一个公平、公正、公开的跨境电商界生态圈，为成员卖家提供';
							$this.focus=['关注',''];
							$this.image=[{
								$table: $this.mac.tb.groupActivity,
								$arrField: [$this.mac.fd.groupActivity.poster],
								$arrValue: [1]
							}];
							dbFlag++;
							para.nStep='showSubModule';
							break;
						case 'showSubModule':
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr, true, function () {
								para.i = 0;
								para.nStep = 'startModule_loop';
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'startModule_loop':
							if (para.i === para.refArr.length) {
								para.nStep = 'end';
								dbFlag++;
								break;
							}
							if(para.refArr[para.i]==='messageDialog') {
								para.i++;
								dbFlag++;
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
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .replayOrganizers_container {
        width:100%;
        height:100%;
    }
    .replayOrganizers_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .replayOrganizers_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .replayOrganizers_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .replayOrganizers_row {
        display:flex;
    }
    .replayOrganizers_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .replayOrganizers_col_xqOrganizersWindow_size_medium {
        width:@replayOrganizers-xqOrganizersWindow-medium-width;
        padding:@replayOrganizers-xqOrganizersWindow-medium-padding;
        box-sizing: border-box;
    }
    .replayOrganizers_col_xo1_size_medium {
        width:@replayOrganizers-xo1-medium-width;
        padding:@replayOrganizers-xo1-medium-padding;
    }
    .replayOrganizers_col_xo1 {
        background-color:mix(@replayOrganizers-xo1-background-color,#fff,@replayOrganizers-xo1-background-color-opacity);
        border-radius:@replayOrganizers-xo1-border-radius;
    }
    .replayOrganizers_col_xo2_size_medium {
        width:@replayOrganizers-xo2-medium-width;
    }
    .replayOrganizers_col_xo3_size_medium {
        width:@replayOrganizers-xo3-medium-width;
        justify-content: center;
    }
    .replayOrganizers_col_xo4_size_medium {
        width:@replayOrganizers-xo4-medium-width;
    }
    .replayOrganizers_col_xo5_size_medium {
        width:@replayOrganizers-xo5-medium-width;
        height:@replayOrganizers-xo5-medium-height;
        overflow: hidden;
    }
    .replayOrganizers_col_xo5 {
        border-radius:@replayOrganizers-xo5-border-radius;
    }
    .replayOrganizers_col_xo6_size_medium {
        width:@replayOrganizers-xo6-medium-width;
    }
    .replayOrganizers_col_xo7_size_medium {
        width:@replayOrganizers-xo7-medium-width;
    }
    .replayOrganizers_col_xo13_size_medium {
        width:@replayOrganizers-xo13-medium-width;
        padding:@replayOrganizers-xo13-medium-padding;
    }
    .replayOrganizers_col_xo8_size_medium {
        width:@replayOrganizers-xo8-medium-width;
        justify-content:@replayOrganizers-xo8-medium-vertical-position;
        padding:@replayOrganizers-xo8-medium-padding;
    }
    .replayOrganizers_col_xo9_size_medium {
        width:@replayOrganizers-xo9-medium-width;
    }
    .replayOrganizers_col_xo10_size_medium {
        width:@replayOrganizers-xo10-medium-width;
        height:@replayOrganizers-xo10-medium-height;
        align-items:@replayOrganizers-xo10-medium-horizontal-position;
        padding:@replayOrganizers-xo10-medium-padding;
    }
    .replayOrganizers_col_xo10 {
        border-width:@replayOrganizers-xo10-border-width;
        border-style:@replayOrganizers-xo10-border-style;
        border-color:mix(@replayOrganizers-xo10-border-color,#fff,@replayOrganizers-xo10-hover-border-color-opacity);
    }
    .replayOrganizers_col_xo10_size_large {
        align-items:@replayOrganizers-xo10-large-horizontal-position;
    }
    .replayOrganizers_col_xo10_size_small {
        align-items:@replayOrganizers-xo10-small-horizontal-position;
    }
    .replayOrganizers_col_xo10_size_min {
        align-items:@replayOrganizers-xo10-mini-horizontal-position;
    }
    .replayOrganizers_col_xo11_size_medium {
        height:@replayOrganizers-xo11-medium-height;
    }
    .replayOrganizers_col_xo12_size_medium {
        width:@replayOrganizers-xo12-medium-width;
        padding:@replayOrganizers-xo12-medium-padding;
    }
    .replayOrganizers_col_xo17_size_medium {
        width:@replayOrganizers-xo17-medium-width;
        align-items:@replayOrganizers-xo17-medium-horizontal-position;
        padding:@replayOrganizers-xo17-medium-padding;
    }
    .replayOrganizers_col_xo17_size_large {
        align-items:@replayOrganizers-xo17-large-horizontal-position;
    }
    .replayOrganizers_col_xo17_size_small {
        align-items:@replayOrganizers-xo17-small-horizontal-position;
    }
    .replayOrganizers_col_xo17_size_min {
        align-items:@replayOrganizers-xo17-mini-horizontal-position;
    }


</style>
