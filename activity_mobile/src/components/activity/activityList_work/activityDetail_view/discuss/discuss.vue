<template>
    <div v-show="pvt_isWinShow.xqDiscussWindow"
         :class="{appDiscuss_container:true,appDiscuss_col:true,appDiscuss_col_xqDiscussWindow:true,appDiscuss_col_xqDiscussWindow_size_large:attr.size==='large',appDiscuss_col_xqDiscussWindow_size_medium:attr.size==='medium',appDiscuss_col_xqDiscussWindow_size_small:attr.size==='small',appDiscuss_col_xqDiscussWindow_size_min:attr.size==='min',appDiscuss_col_xqDiscussWindow_checked:attr.checked,appDiscuss_col_xqDiscussWindow_disable:attr.disabled}" >

        <div class="appDiscuss_row appDiscuss_row_row4">
            <div v-show="pvt_isWinShow.xd1"
                 :class="{appDiscuss_col:true,appDiscuss_col_xd1:true,appDiscuss_col_xd1_size_large:attr.size==='large',appDiscuss_col_xd1_size_medium:attr.size==='medium',appDiscuss_col_xd1_size_small:attr.size==='small',appDiscuss_col_xd1_size_min:attr.size==='min',appDiscuss_col_xd1_checked:attr.checked,appDiscuss_col_xd1_disable:attr.disabled}" >

                <div class="appDiscuss_row appDiscuss_row_row5">
                    <div v-show="pvt_isWinShow.xd2"
                         :class="{appDiscuss_col:true,appDiscuss_col_xd2:true,appDiscuss_col_xd2_size_large:attr.size==='large',appDiscuss_col_xd2_size_medium:attr.size==='medium',appDiscuss_col_xd2_size_small:attr.size==='small',appDiscuss_col_xd2_size_min:attr.size==='min',appDiscuss_col_xd2_checked:attr.checked,appDiscuss_col_xd2_disable:attr.disabled}" >

                        <div class="appDiscuss_row appDiscuss_row_row6">
                            <div v-show="pvt_isWinShow.xd6"
                                 :class="{appDiscuss_col:true,appDiscuss_col_xd6:true,appDiscuss_col_xd6_size_large:attr.size==='large',appDiscuss_col_xd6_size_medium:attr.size==='medium',appDiscuss_col_xd6_size_small:attr.size==='small',appDiscuss_col_xd6_size_min:attr.size==='min',appDiscuss_col_xd6_checked:attr.checked,appDiscuss_col_xd6_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="symbol"
                                        refId="symbol"
                                        v-show="pvt_isShow.xd6 === 'symbol'"
                                        :paraVarPair="pvt_xd6.symbol.paraVarPair"
                                        :para="pvt_xd6.symbol.para"
                                        :attr="pvt_xd6.symbol.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.xd7"
                                 :class="{appDiscuss_col:true,appDiscuss_col_xd7:true,appDiscuss_col_xd7_size_large:attr.size==='large',appDiscuss_col_xd7_size_medium:attr.size==='medium',appDiscuss_col_xd7_size_small:attr.size==='small',appDiscuss_col_xd7_size_min:attr.size==='min',appDiscuss_col_xd7_checked:attr.checked,appDiscuss_col_xd7_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="title"
                                        refId="title"
                                        v-show="pvt_isShow.xd7 === 'title'"
                                        :paraVarPair="pvt_xd7.title.paraVarPair"
                                        :para="pvt_xd7.title.para"
                                        :attr="pvt_xd7.title.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                    <div v-show="pvt_isWinShow.xd3"
                         :class="{appDiscuss_col:true,appDiscuss_col_xd3:true,appDiscuss_col_xd3_size_large:attr.size==='large',appDiscuss_col_xd3_size_medium:attr.size==='medium',appDiscuss_col_xd3_size_small:attr.size==='small',appDiscuss_col_xd3_size_min:attr.size==='min',appDiscuss_col_xd3_checked:attr.checked,appDiscuss_col_xd3_disable:attr.disabled}" >

                        <lm2b-button
                                ref="question"
                                refId="question"
                                v-show="pvt_isShow.xd3 === 'question'"
                                :paraVarPair="pvt_xd3.question.paraVarPair"
                                :para="pvt_xd3.question.para"
                                :attr="pvt_xd3.question.attr">
                        </lm2b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="appDiscuss_row appDiscuss_row_row2">
            <div v-show="pvt_isWinShow.xd4"
                 :class="{appDiscuss_col:true,appDiscuss_col_xd4:true,appDiscuss_col_xd4_size_large:attr.size==='large',appDiscuss_col_xd4_size_medium:attr.size==='medium',appDiscuss_col_xd4_size_small:attr.size==='small',appDiscuss_col_xd4_size_min:attr.size==='min',appDiscuss_col_xd4_checked:attr.checked,appDiscuss_col_xd4_disable:attr.disabled}" >
                <app-discuss-content
                        ref="discuss"
                        refId="discuss"
                        v-show="pvt_isShow.xd4 === 'discuss'"
                        :paraVarPair="pvt_xd4.discuss.paraVarPair"
                        v-for="(item, index) in pvt_xd4.discuss.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </app-discuss-content>
            </div>
        </div>
        <div class="appDiscuss_row appDiscuss_row_row3">
            <div v-show="pvt_isWinShow.xd5"
                 :class="{appDiscuss_col:true,appDiscuss_col_xd5:true,appDiscuss_col_xd5_size_large:attr.size==='large',appDiscuss_col_xd5_size_medium:attr.size==='medium',appDiscuss_col_xd5_size_small:attr.size==='small',appDiscuss_col_xd5_size_min:attr.size==='min',appDiscuss_col_xd5_checked:attr.checked,appDiscuss_col_xd5_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="show"
                        refId="show"
                        v-show="pvt_isShow.xd5 === 'show'"
                        :paraVarPair="pvt_xd5.show.paraVarPair"
                        :para="pvt_xd5.show.para"
                        :attr="pvt_xd5.show.attr">
                </lm2b-link-text>
            </div>
        </div>

    </div>
</template>
<script>
	import libSys from '@/components/baseComponent/libSys.js';
	import libUpload from '@/components/baseComponent/libUpload.js';
	import appDiscussContent from './discussContent';
	export default {
		components: {appDiscussContent},
		inject: ['sys'],
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['xd5','xd6','xd7','xd3','xd4'],
					subModule:['show','symbol','title','question','discuss'],
				},
				pvt_isShow: {
					xd5:null,
					xd6:null,
					xd7:null,
					xd3:null,
					xd4:null,
				},
				pvt_isWinShow: {
					xqDiscussWindow:true,
					xd4:true,
					xd5:true,
					xd1:true,
					xd2:true,
					xd3:true,
					xd6:true,
					xd7:true,
				},
				pvt_eventPortInput: [],

				title:null,
				discussArr:[],
				size:[],
				moreName:null,
				moreIcon:null,
			};
		},
		watch: {
		},
		computed:{
			pvt_xd5:function(){
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
							icon:this.moreIcon,
							iconIsRight:true,
						},
					},
				};
			},
			pvt_xd6:function(){
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
			pvt_xd7:function(){
				return {
					title:{
						paraVarPair:{
							textData:'title',
						},
						para:{
							textData:this.title,
						},
						attr:{
							height:'24px',
							color:'#333',
							fontSize:'15px',
						},
					},
				};
			},
			pvt_xd3:function(){
				return {
					question:{
						paraVarPair:{
						},
						para:{
							name:['发表提问',''],
						},
						attr:{
							type:'primary',
							plain:true,
							width:'127px',
							height:'24px',
						},
					},
				};
			},
			pvt_xd4:function(){
				let loopModule={
					discuss:{
						para:{
							discuss:this.discussArr,
						},
						attr:{
							size:this.size,
						},
					},
				};
				let forData = this.pvt_createForData(loopModule);
				return {
					discuss:{
						paraVarPair:{
							discuss:'discussArr',
						},
						forData: forData.discuss,
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
			startModule:function(activityId,name,successCallBack,errorCallBack){
				let $this = this;
				let dbFlag;
				$this.mac = mac.mac;
				let portName;
				let data;
				let expression;
				let arrParentRecord;
				let sort;
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
							$this.size=[];
							$this.discussArr=[];
							portName = $this.mac.tb.groupActivityDiscuss;
							data = '';
							expression = $this.mac.fd.groupActivityDiscuss.groupActivityID+"="+activityId;
							sort = [`${$this.mac.fd.id},desc`];
							$this.sys.api.conditiondataInput(portName,data,expression,null,null,sort,'',function (result) {
								if(result) {
									para.discussId = result;
									$this.title = `全部讨论(${result.length})`;
									para.nStep='getDiscuss_data';
                                }else {
									para.discussId=[];
									$this.title = `全部讨论(0)`;
									para.nStep='showSubModule';
                                }
								if (++dbFlag === 2) {
									$this.startModule(activityId,name,successCallBack, errorCallBack)
								}
							},para.errorCallBack)
							break;
						case 'getDiscuss_data':
							$this.moreName = '查看更多';
							$this.moreIcon = 'van-icon-arrow-up';
							portName = $this.mac.tb.groupActivityDiscuss;
							data = {};
							data[$this.mac.fd.id]=para.discussId;
							$this.sys.api.recordRead(portName, data, function (result) {
								for(let i=0;i<para.discussId.length;i++) {
									$this.discussArr.push({
										headPortrait:[{$table:$this.mac.tb.groupActivityDiscuss,$arrField:[$this.mac.fd.groupActivityDiscuss.headPortrait],$arrValue:[para.discussId[i]]}],
										askName:data[$this.mac.fd.groupActivityDiscuss.name][i]?data[$this.mac.fd.groupActivityDiscuss.name][i]:'',
										askTime:data[$this.mac.fd.groupActivityDiscuss.askTime][i]?data[$this.mac.fd.groupActivityDiscuss.askTime][i]:'',
										askContent:data[$this.mac.fd.groupActivityDiscuss.askContent][i]?data[$this.mac.fd.groupActivityDiscuss.askContent][i]:'',
										ansName:'主办方的名称',
										ansTime:data[$this.mac.fd.groupActivityDiscuss.answerTime][i]?data[$this.mac.fd.groupActivityDiscuss.answerTime][i]:'',
										ansContent:data[$this.mac.fd.groupActivityDiscuss.answerContent][i]?data[$this.mac.fd.groupActivityDiscuss.answerContent][i]:'',
									});
									$this.size.push('medium');
								}
								para.nStep='showSubModule';
								if (++dbFlag === 2) {
									$this.startModule(activityId,name,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'showSubModule':
							// $this.discussArr = [{headPortrait:[{$table:'groupActivity',$arrField:['poster'],$arrValue:[1]}],askName:'张三',askTime:'1995 08:00',askContent:'方法哦放假哦亲机器机房噶搜高管佛教歌曲欧冠其他方国庆放赶紧去顾客反馈给开了个开关可人',ansName:'李四',ansTime:'2015 14:00',ansContent:'阿凡达那解放后其父亲'}]

							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr, true, function () {
								para.i = 0;
								para.nStep = 'startModule_loop';
								if (++dbFlag === 2) {
									$this.startModule(activityId,name,successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'startModule_loop':
							if (para.i === para.refArr.length) {
								para.nStep = 'end';
								dbFlag++;
								break;
							}
							if(para.refArr[para.i]==='discuss') {
								let arr = [];
								for(let i = 0;i < $this.discussArr.length;i++){
									arr.push([function(){},function(error){console.log(error)}]);
								}
								$this.callLoopModuleMethod('discuss','startModule',arr,function(){
									para.i++;
									if (++dbFlag === 2) {
										$this.startModule(activityId,name,successCallBack, errorCallBack)
									}
								}, para.errorCallBack);
							}else {
								$this.sm[para.refArr[para.i]].startModule(function () {
									para.i++;
									if (++dbFlag === 2) {
										$this.startModule(activityId,name,successCallBack, errorCallBack)
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
    .appDiscuss_container {
        width:100%;
        height:100%;
    }
    .appDiscuss_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appDiscuss_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appDiscuss_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appDiscuss_row {
        display:flex;
    }
    .appDiscuss_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appDiscuss_col_xqDiscussWindow_size_medium {
        width:@appDiscuss-xqDiscussWindow-medium-width;
        margin:@appDiscuss-xqDiscussWindow-medium-margin;
    }
    .appDiscuss_col_xqDiscussWindow {
        background-color:mix(@appDiscuss-xqDiscussWindow-background-color,#fff,@appDiscuss-xqDiscussWindow-background-color-opacity);
    }
    .appDiscuss_col_xd4_size_medium {
        width:@appDiscuss-xd4-medium-width;
        padding:@appDiscuss-xd4-medium-padding;
    }
    .appDiscuss_col_xd5_size_medium {
        width:@appDiscuss-xd5-medium-width;
    }
    .appDiscuss_col_xd1_size_medium {
        width:@appDiscuss-xd1-medium-width;
        padding:@appDiscuss-xd1-medium-padding;
    }
    .appDiscuss_col_xd2_size_medium {
        width:@appDiscuss-xd2-medium-width;
    }
    .appDiscuss_col_xd3_size_medium {
        width:@appDiscuss-xd3-medium-width;
        align-items:@appDiscuss-xd3-medium-horizontal-position;
    }
    .appDiscuss_col_xd3_size_large {
        align-items:@appDiscuss-xd3-large-horizontal-position;
    }
    .appDiscuss_col_xd3_size_small {
        align-items:@appDiscuss-xd3-small-horizontal-position;
    }
    .appDiscuss_col_xd3_size_min {
        align-items:@appDiscuss-xd3-mini-horizontal-position;
    }
    .appDiscuss_col_xd6_size_medium {
        width:@appDiscuss-xd6-medium-width;
        justify-content:@appDiscuss-xd6-medium-vertical-position;
        padding:@appDiscuss-xd6-medium-padding;
    }
    .appDiscuss_col_xd6_size_large {
        justify-content:@appDiscuss-xd6-large-vertical-position;
    }
    .appDiscuss_col_xd6_size_small {
        justify-content:@appDiscuss-xd6-small-vertical-position;
    }
    .appDiscuss_col_xd6_size_min {
        justify-content:@appDiscuss-xd6-mini-vertical-position;
    }
    .appDiscuss_col_xd7_size_medium {
        width:@appDiscuss-xd7-medium-width;
    }



</style>
