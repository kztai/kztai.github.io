<template>
    <div v-show="pvt_isWinShow.xqSignUpWindow"
         :class="{replaySignUp_container:true,replaySignUp_col:true,replaySignUp_col_xqSignUpWindow:true,replaySignUp_col_xqSignUpWindow_size_large:attr.size==='large',replaySignUp_col_xqSignUpWindow_size_medium:attr.size==='medium',replaySignUp_col_xqSignUpWindow_size_small:attr.size==='small',replaySignUp_col_xqSignUpWindow_size_min:attr.size==='min',replaySignUp_col_xqSignUpWindow_checked:attr.checked,replaySignUp_col_xqSignUpWindow_disable:attr.disabled}" >

        <div class="replaySignUp_row replaySignUp_row_row3">
            <div v-show="pvt_isWinShow.xs1"
                 :class="{replaySignUp_col:true,replaySignUp_col_xs1:true,replaySignUp_col_xs1_size_large:attr.size==='large',replaySignUp_col_xs1_size_medium:attr.size==='medium',replaySignUp_col_xs1_size_small:attr.size==='small',replaySignUp_col_xs1_size_min:attr.size==='min',replaySignUp_col_xs1_checked:attr.checked,replaySignUp_col_xs1_disable:attr.disabled}" >

                <div class="replaySignUp_row replaySignUp_row_row4">
                    <div v-show="pvt_isWinShow.xs2"
                         :class="{replaySignUp_col:true,replaySignUp_col_xs2:true,replaySignUp_col_xs2_size_large:attr.size==='large',replaySignUp_col_xs2_size_medium:attr.size==='medium',replaySignUp_col_xs2_size_small:attr.size==='small',replaySignUp_col_xs2_size_min:attr.size==='min',replaySignUp_col_xs2_checked:attr.checked,replaySignUp_col_xs2_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="symbol"
                                refId="symbol"
                                v-show="pvt_isShow.xs2 === 'symbol'"
                                :paraVarPair="pvt_xs2.symbol.paraVarPair"
                                :para="pvt_xs2.symbol.para"
                                :attr="pvt_xs2.symbol.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.xs4"
                         :class="{replaySignUp_col:true,replaySignUp_col_xs4:true,replaySignUp_col_xs4_size_large:attr.size==='large',replaySignUp_col_xs4_size_medium:attr.size==='medium',replaySignUp_col_xs4_size_small:attr.size==='small',replaySignUp_col_xs4_size_min:attr.size==='min',replaySignUp_col_xs4_checked:attr.checked,replaySignUp_col_xs4_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="title"
                                refId="title"
                                v-show="pvt_isShow.xs4 === 'title'"
                                :paraVarPair="pvt_xs4.title.paraVarPair"
                                :para="pvt_xs4.title.para"
                                :attr="pvt_xs4.title.attr">
                        </lm2b-link-text>
                    </div>
                </div>
            </div>
        </div>
        <div class="replaySignUp_row replaySignUp_row_row2">
            <div v-show="pvt_isWinShow.xs3"
                 :class="{replaySignUp_col:true,replaySignUp_col_xs3:true,replaySignUp_col_xs3_size_large:attr.size==='large',replaySignUp_col_xs3_size_medium:attr.size==='medium',replaySignUp_col_xs3_size_small:attr.size==='small',replaySignUp_col_xs3_size_min:attr.size==='min',replaySignUp_col_xs3_checked:attr.checked,replaySignUp_col_xs3_disable:attr.disabled}" >
                <xq-sign-up-info
                        ref="info"
                        refId="info"
                        v-show="pvt_isShow.xs3 === 'info'"
                        :paraVarPair="pvt_xs3.info.paraVarPair"
                        v-for="(item, index) in pvt_xs3.info.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </xq-sign-up-info>
            </div>
        </div>
        <div class="replaySignUp_row replaySignUp_row_row6">
            <div v-show="pvt_isWinShow.x8"
                 :class="{replaySignUp_col:true,replaySignUp_col_x8:true,replaySignUp_col_x8_size_large:attr.size==='large',replaySignUp_col_x8_size_medium:attr.size==='medium',replaySignUp_col_x8_size_small:attr.size==='small',replaySignUp_col_x8_size_min:attr.size==='min',replaySignUp_col_x8_checked:attr.checked,replaySignUp_col_x8_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="show"
                        refId="show"
                        v-show="pvt_isShow.x8 === 'show'"
                        :paraVarPair="pvt_x8.show.paraVarPair"
                        :para="pvt_x8.show.para"
                        :attr="pvt_x8.show.attr">
                </lm2b-link-text>
            </div>
        </div>

    </div>
</template>
<script>
	import libSys from '@/components/baseComponent/libSys.js';
	import libUpload from '@/components/baseComponent/libUpload.js';
	import xqSignUpInfo from './signInfo';
	export default {
		components: {xqSignUpInfo},
		inject: ['sys'],
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['x8','xs3','xs2','xs4'],
					subModule:['show','info','symbol','title'],
				},
				pvt_isShow: {
					x8:null,
					xs3:null,
					xs2:null,
					xs4:null,
				},
				pvt_isWinShow: {
					xqSignUpWindow:true,
					xs3:true,
					x8:true,
					xs1:true,
					xs2:true,
					xs4:true,
				},
				pvt_eventPortInput: [],

				infoArr:[],
				title:null,
				moreName:null,
				moreBtn:null,
				size:[],
			};
		},
		watch: {
		},
		computed:{
			pvt_x8:function(){
				return {
					show:{
						paraVarPair:{
							textData:'moreName',
						},
						para:{
							textData:this.moreName,
						},
						attr:{
							isClick:true,
							textAlign:'center',
							height:'30px',
							color:'#333',
							fontSize:'14px',
							icon:this.moreBtn,
							iconIsRight:true,
						},
					},
				};
			},
			pvt_xs3:function(){
				let loopModule={
					info:{
						para:{
							info:this.infoArr,
						},
						attr:{
							size:this.size,
						},
					},
				};
				let forData = this.pvt_createForData(loopModule);
				return {
					info:{
						paraVarPair:{
							info:'infoArr',
						},
						forData: forData.info,
					},
				};
			},
			pvt_xs2:function(){
				return {
					symbol:{
						paraVarPair:{
						},
						para:{
							textData:'|',
						},
						attr:{
							label:'div',
							height:'13px',
							color:'transparent',
							background:'#12B0FF',
						},
					},
				};
			},
			pvt_xs4:function(){
				return {
					title:{
						paraVarPair:{
							textData:'title',
						},
						para:{
							textData:this.title,
						},
						attr:{
							color:'#333',
							fontSize:'15px',
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
			/**
			 *
			 * @param activityId  终端活动id
			 * @param successCallBack
			 * @param errorCallBack
			 */
			startModule:function(activityId,successCallBack,errorCallBack){
				let $this = this;
				let dbFlag;
				$this.mac = mac.mac;
				let portName;
				let data;
				let expression;
				let arrParentRecord;
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
						case 'dataInput':
							//conditiondataInput(portName,data,expression,start,total,sort,destGeneSite,successCallBack,errorCallBack)
							$this.infoArr=[];
							$this.size=[];
							portName = $this.mac.tb.groupActivityOrder;
							data = '';
							expression = $this.mac.fd.groupActivityOrder.groupActivityID+"="+activityId+'&&'+$this.mac.fd.groupActivityOrder.status+"="+$this.mac.enum.groupActivityOrder.status.finish;
							$this.sys.api.conditiondataInput(portName,data,expression,null,null,[],'',function (result) {
								// para.orderId = result;
								// $this.title = `已报名(${result.length})`;
								if(result) {
									$this.title = `已报名(${result.length})`;
									para.orderId = result;
								}else {
									$this.title = `已报名(0)`;
									para.orderId=[]
								}
								para.j=0;
								para.nStep='getData_loop';
								if (++dbFlag === 2) {
									$this.startModule(activityId,successCallBack, errorCallBack)
								}
							},para.errorCallBack)
							break;
						case 'getData_loop':
							if(para.j === para.orderId.length) {
								para.nStep='showSubModule';
								dbFlag++;
								break;
							}
							//得到数据
							arrParentRecord = [para.orderId[para.j]];
							portName = $this.mac.tb.groupActivityBill;
							data={};
							expression = null;
							data[$this.mac.fd.id]=[];
							$this.sys.api.recordQuery(portName, arrParentRecord, expression, data, function (result) {
								$this.infoArr.push({
									name:[{$table:$this.mac.tb.groupActivityOrder,$arrField:[$this.mac.fd.groupActivityOrder.name],$arrValue:[para.orderId[para.j]]}],
									image:[{$table:$this.mac.tb.groupActivityOrder,$arrField:[$this.mac.fd.groupActivityOrder.headPortrait],$arrValue:[para.orderId[para.j]]}],
									num: data[$this.mac.fd.id].length
								})
								para.j++;
								if (++dbFlag === 2) {
									$this.startModule(activityId,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'showSubModule':
							for(let y in $this.infoArr) {
								$this.size.push('medium');
							}
							$this.moreName = '查看更多';
							$this.moreBtn = 'van-icon-arrow-up';
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr, true, function () {
								para.i = 0;
								para.nStep = 'startModule_loop';
								if (++dbFlag === 2) {
									$this.startModule(activityId,successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'startModule_loop':
							if (para.i === para.refArr.length) {
								para.nStep = 'end';
								dbFlag++;
								break;
							}
							if(para.refArr[para.i]==='info') {
								let arr = [];
								for(let i = 0;i < $this.infoArr.length;i++){
									arr.push([function(){},function(error){console.log(error)}]);
								}
								$this.callLoopModuleMethod('info','startModule',arr,function(){
									para.i++;
									if (++dbFlag === 2) {
										$this.startModule(activityId,successCallBack, errorCallBack)
									}
								}, para.errorCallBack);
							}else {
								$this.sm[para.refArr[para.i]].startModule(function () {
									para.i++;
									if (++dbFlag === 2) {
										$this.startModule(activityId,successCallBack, errorCallBack)
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
			moreClick:function(){},
			show_textClickEvent:function(){
				this.moreClick();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .replaySignUp_container {
        width:100%;
        height:100%;
    }
    .replaySignUp_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .replaySignUp_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .replaySignUp_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .replaySignUp_row {
        display:flex;
    }
    .replaySignUp_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .replaySignUp_col_xqSignUpWindow_size_medium {
        width:@replaySignUp-xqSignUpWindow-medium-width;
        margin:@replaySignUp-xqSignUpWindow-medium-margin;
    }
    .replaySignUp_col_xqSignUpWindow {
        background-color:mix(@replaySignUp-xqSignUpWindow-background-color,#fff,@replaySignUp-xqSignUpWindow-background-color-opacity);
    }
    .replaySignUp_col_xs3_size_medium {
        width:@replaySignUp-xs3-medium-width;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .replaySignUp_col_x8_size_medium {
        width:@replaySignUp-x8-medium-width;
    }
    .replaySignUp_col_xs1_size_medium {
        width:@replaySignUp-xs1-medium-width;
        padding:@replaySignUp-xs1-medium-padding;
    }
    .replaySignUp_col_xs1 {
        border-style:@replaySignUp-xs1-border-style;
        border-width:@replaySignUp-xs1-border-width;
        border-color:mix(@replaySignUp-xs1-border-color,#fff,@replaySignUp-xs1-hover-border-color-opacity);
    }
    .replaySignUp_col_xs2_size_medium {
        width:@replaySignUp-xs2-medium-width;
        padding:@replaySignUp-xs2-medium-padding;
        justify-content:@replaySignUp-xs2-medium-vertical-position;
    }
    .replaySignUp_col_xs2_size_large {
        justify-content:@replaySignUp-xs2-large-vertical-position;
    }
    .replaySignUp_col_xs2_size_small {
        justify-content:@replaySignUp-xs2-small-vertical-position;
    }
    .replaySignUp_col_xs2_size_min {
        justify-content:@replaySignUp-xs2-mini-vertical-position;
    }
    .replaySignUp_col_xs4_size_medium {
        width:@replaySignUp-xs4-medium-width;
    }


</style>
