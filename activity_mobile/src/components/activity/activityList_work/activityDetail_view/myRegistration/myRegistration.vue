<template>
    <div v-show="pvt_isWinShow.xqMyRegistrationWindow"
         :class="{appMyRegistration_container:true,appMyRegistration_col:true,appMyRegistration_col_xqMyRegistrationWindow:true,appMyRegistration_col_xqMyRegistrationWindow_size_large:attr.size==='large',appMyRegistration_col_xqMyRegistrationWindow_size_medium:attr.size==='medium',appMyRegistration_col_xqMyRegistrationWindow_size_small:attr.size==='small',appMyRegistration_col_xqMyRegistrationWindow_size_min:attr.size==='min',appMyRegistration_col_xqMyRegistrationWindow_checked:attr.checked,appMyRegistration_col_xqMyRegistrationWindow_disable:attr.disabled}" >

        <div class="appMyRegistration_row appMyRegistration_row_row1">
            <div v-show="pvt_isWinShow.xm1"
                 :class="{appMyRegistration_col:true,appMyRegistration_col_xm1:true,appMyRegistration_col_xm1_size_large:attr.size==='large',appMyRegistration_col_xm1_size_medium:attr.size==='medium',appMyRegistration_col_xm1_size_small:attr.size==='small',appMyRegistration_col_xm1_size_min:attr.size==='min',appMyRegistration_col_xm1_checked:attr.checked,appMyRegistration_col_xm1_disable:attr.disabled}" >

                <div class="appMyRegistration_row appMyRegistration_row_row2">
                    <div v-show="pvt_isWinShow.xm2"
                         :class="{appMyRegistration_col:true,appMyRegistration_col_xm2:true,appMyRegistration_col_xm2_size_large:attr.size==='large',appMyRegistration_col_xm2_size_medium:attr.size==='medium',appMyRegistration_col_xm2_size_small:attr.size==='small',appMyRegistration_col_xm2_size_min:attr.size==='min',appMyRegistration_col_xm2_checked:attr.checked,appMyRegistration_col_xm2_disable:attr.disabled}" >

                        <div class="appMyRegistration_row appMyRegistration_row_row3">
                            <div v-show="pvt_isWinShow.xm3"
                                 :class="{appMyRegistration_col:true,appMyRegistration_col_xm3:true,appMyRegistration_col_xm3_size_large:attr.size==='large',appMyRegistration_col_xm3_size_medium:attr.size==='medium',appMyRegistration_col_xm3_size_small:attr.size==='small',appMyRegistration_col_xm3_size_min:attr.size==='min',appMyRegistration_col_xm3_checked:attr.checked,appMyRegistration_col_xm3_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="title"
                                        refId="title"
                                        v-show="pvt_isShow.xm3 === 'title'"
                                        :paraVarPair="pvt_xm3.title.paraVarPair"
                                        :para="pvt_xm3.title.para"
                                        :attr="pvt_xm3.title.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.xm4"
                                 :class="{appMyRegistration_col:true,appMyRegistration_col_xm4:true,appMyRegistration_col_xm4_size_large:attr.size==='large',appMyRegistration_col_xm4_size_medium:attr.size==='medium',appMyRegistration_col_xm4_size_small:attr.size==='small',appMyRegistration_col_xm4_size_min:attr.size==='min',appMyRegistration_col_xm4_checked:attr.checked,appMyRegistration_col_xm4_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="close"
                                        refId="close"
                                        v-show="pvt_isShow.xm4 === 'close'"
                                        :paraVarPair="pvt_xm4.close.paraVarPair"
                                        :para="pvt_xm4.close.para"
                                        :attr="pvt_xm4.close.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="appMyRegistration_row appMyRegistration_row_row4">
                    <div v-show="pvt_isWinShow.xm5"
                         :class="{appMyRegistration_col:true,appMyRegistration_col_xm5:true,appMyRegistration_col_xm5_size_large:attr.size==='large',appMyRegistration_col_xm5_size_medium:attr.size==='medium',appMyRegistration_col_xm5_size_small:attr.size==='small',appMyRegistration_col_xm5_size_min:attr.size==='min',appMyRegistration_col_xm5_checked:attr.checked,appMyRegistration_col_xm5_disable:attr.disabled}" >
                        <app-activity-price
                                ref="price"
                                refId="price"
                                v-show="pvt_isShow.xm5 === 'price'"
                                :paraVarPair="pvt_xm5.price.paraVarPair"
                                v-for="(item, index) in pvt_xm5.price.forData"
                                :number="index"
                                :para="item.para"
                                :attr="item.attr">
                        </app-activity-price>
                    </div>
                </div>
                <div class="appMyRegistration_row appMyRegistration_row_row5">
                    <div v-show="pvt_isWinShow.xm6"
                         :class="{appMyRegistration_col:true,appMyRegistration_col_xm6:true,appMyRegistration_col_xm6_size_large:attr.size==='large',appMyRegistration_col_xm6_size_medium:attr.size==='medium',appMyRegistration_col_xm6_size_small:attr.size==='small',appMyRegistration_col_xm6_size_min:attr.size==='min',appMyRegistration_col_xm6_checked:attr.checked,appMyRegistration_col_xm6_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="textNum"
                                refId="textNum"
                                v-show="pvt_isShow.xm6 === 'textNum'"
                                :paraVarPair="pvt_xm6.textNum.paraVarPair"
                                :para="pvt_xm6.textNum.para"
                                :attr="pvt_xm6.textNum.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="appMyRegistration_row appMyRegistration_row_row6">
                    <div v-show="pvt_isWinShow.number"
                         :class="{appMyRegistration_col:true,appMyRegistration_col_number:true,appMyRegistration_col_number_size_large:attr.size==='large',appMyRegistration_col_number_size_medium:attr.size==='medium',appMyRegistration_col_number_size_small:attr.size==='small',appMyRegistration_col_number_size_min:attr.size==='min',appMyRegistration_col_number_checked:attr.checked,appMyRegistration_col_number_disable:attr.disabled}" >

                        <lm2b-stepper
                                ref="stepper"
                                refId="stepper"
                                v-show="pvt_isShow.number === 'stepper'"
                                :paraVarPair="pvt_number.stepper.paraVarPair"
                                :para="pvt_number.stepper.para"
                                :attr="pvt_number.stepper.attr">
                        </lm2b-stepper>
                    </div>
                </div>
            </div>
        </div>
        <div class="appMyRegistration_row appMyRegistration_row_row7">
            <div v-show="pvt_isWinShow.xm7"
                 :class="{appMyRegistration_col:true,appMyRegistration_col_xm7:true,appMyRegistration_col_xm7_size_large:attr.size==='large',appMyRegistration_col_xm7_size_medium:attr.size==='medium',appMyRegistration_col_xm7_size_small:attr.size==='small',appMyRegistration_col_xm7_size_min:attr.size==='min',appMyRegistration_col_xm7_checked:attr.checked,appMyRegistration_col_xm7_disable:attr.disabled}" >

                <div class="appMyRegistration_row appMyRegistration_row_row8">
                    <div v-show="pvt_isWinShow.xm8"
                         :class="{appMyRegistration_col:true,appMyRegistration_col_xm8:true,appMyRegistration_col_xm8_size_large:attr.size==='large',appMyRegistration_col_xm8_size_medium:attr.size==='medium',appMyRegistration_col_xm8_size_small:attr.size==='small',appMyRegistration_col_xm8_size_min:attr.size==='min',appMyRegistration_col_xm8_checked:attr.checked,appMyRegistration_col_xm8_disable:attr.disabled}" >

                        <div class="appMyRegistration_row appMyRegistration_row_row9">
                            <div v-show="pvt_isWinShow.xm11"
                                 :class="{appMyRegistration_col:true,appMyRegistration_col_xm11:true,appMyRegistration_col_xm11_size_large:attr.size==='large',appMyRegistration_col_xm11_size_medium:attr.size==='medium',appMyRegistration_col_xm11_size_small:attr.size==='small',appMyRegistration_col_xm11_size_min:attr.size==='min',appMyRegistration_col_xm11_checked:attr.checked,appMyRegistration_col_xm11_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="combined"
                                        refId="combined"
                                        v-show="pvt_isShow.xm11 === 'combined'"
                                        :paraVarPair="pvt_xm11.combined.paraVarPair"
                                        :para="pvt_xm11.combined.para"
                                        :attr="pvt_xm11.combined.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.xm12"
                                 :class="{appMyRegistration_col:true,appMyRegistration_col_xm12:true,appMyRegistration_col_xm12_size_large:attr.size==='large',appMyRegistration_col_xm12_size_medium:attr.size==='medium',appMyRegistration_col_xm12_size_small:attr.size==='small',appMyRegistration_col_xm12_size_min:attr.size==='min',appMyRegistration_col_xm12_checked:attr.checked,appMyRegistration_col_xm12_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="money"
                                        refId="money"
                                        v-show="pvt_isShow.xm12 === 'money'"
                                        :paraVarPair="pvt_xm12.money.paraVarPair"
                                        :para="pvt_xm12.money.para"
                                        :attr="pvt_xm12.money.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                    <div v-show="pvt_isWinShow.xm9"
                         :class="{appMyRegistration_col:true,appMyRegistration_col_xm9:true,appMyRegistration_col_xm9_size_large:attr.size==='large',appMyRegistration_col_xm9_size_medium:attr.size==='medium',appMyRegistration_col_xm9_size_small:attr.size==='small',appMyRegistration_col_xm9_size_min:attr.size==='min',appMyRegistration_col_xm9_checked:attr.checked,appMyRegistration_col_xm9_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="nextStep"
                                refId="nextStep"
                                v-show="pvt_isShow.xm9 === 'nextStep'"
                                :paraVarPair="pvt_xm9.nextStep.paraVarPair"
                                :para="pvt_xm9.nextStep.para"
                                :attr="pvt_xm9.nextStep.attr">
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
	import appActivityPrice from './activityPrice';
	export default {
		components: {appActivityPrice},
		inject: ['sys'],
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['xm3','xm4','xm6','number','xm11','xm12','xm9','xm5'],
					subModule:['title','close','textNum','stepper','combined','money','nextStep','price'],
				},
				pvt_isShow: {
					xm3:null,
					xm4:null,
					xm6:null,
					number:null,
					xm11:null,
					xm12:null,
					xm9:null,
					xm5:null,
				},
				pvt_isWinShow: {
					xqMyRegistrationWindow:true,
					xm1:true,
					xm2:true,
					xm3:true,
					xm4:true,
					xm5:true,
					xm6:true,
					number:true,
					xm7:true,
					xm8:true,
					xm9:true,
					xm11:true,
					xm12:true,
				},
				pvt_eventPortInput: [],

				size:[],
				priceInfo:[],
				money:null,
				activityNum:null,
				minNum:null,
				maxNum:null,
				checked:[],
				index:0,
				activityId:null,
			};
		},
		watch: {
		},
		computed:{
			pvt_xm3:function(){
				return {
					title:{
						paraVarPair:{
						},
						para:{
							textData:'选择票种',
						},
						attr:{
							height:'30px',
							color:'#333',
							fontSize:'15px',
						},
					},
				};
			},
			pvt_xm4:function(){
				return {
					close:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							textAlign:'right',
							height:'30px',
							color:'#999',
							fontSize:'15px',
							icon:'van-icon-cross',
						},
					},
				};
			},
			pvt_xm6:function(){
				return {
					textNum:{
						paraVarPair:{
						},
						para:{
							textData:'选择数量',
						},
						attr:{
							height:'30px',
							color:'#333',
							fontSize:'15px',
						},
					},
				};
			},
			pvt_number:function(){
				return {
					stepper:{
						paraVarPair:{
							value:'activityNum',
						},
						para:{
							value:this.activityNum,
						},
						attr:{
							min:this.minNum,
							max:this.maxNum,
							step:1,
							size:'small',
							decimals:0,
						},
					},
				};
			},
			pvt_xm11:function(){
				return {
					combined:{
						paraVarPair:{
						},
						para:{
							textData:'合计',
						},
						attr:{
							height:'49px',
							color:'#333',
							fontSize:'15px',
						},
					},
				};
			},
			pvt_xm12:function(){
				return {
					money:{
						paraVarPair:{
							textData:'money',
						},
						para:{
							textData:this.money,
						},
						attr:{
							height:'49px',
							color:'#FC7122',
							fontSize:'15px',
						},
					},
				};
			},
			pvt_xm9:function(){
				return {
					nextStep:{
						paraVarPair:{
						},
						para:{
							textData:'下一步',
						},
						attr:{
							isClick:true,
							textAlign:'center',
							height:'49px',
							color:'#fff',
							fontSize:'18px',
							background:'#12B0FF',
						},
					},
				};
			},
			pvt_xm5:function(){
				let loopModule={
					price:{
						para:{
							priceInfo:this.priceInfo,
						},
						attr:{
							size:this.size,
							checked:this.checked,
						},
					},
				};
				let forData = this.pvt_createForData(loopModule);
				return {
					price:{
						paraVarPair:{
							priceInfo:'priceInfo',
						},
						forData: forData.price,
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
			startModule:function(activityId,successCallBack,errorCallBack){
				let $this = this;
				let dbFlag;
				$this.mac = mac.mac;
				let tableName;
				let data;
				let condition;
				let parentRecord;
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
							tableName = $this.mac.tb.groupActivityOrder;
							data = '';
							condition = $this.mac.fd.groupActivityOrder.groupActivityID+"="+activityId;
							$this.sys.api.conditiondataInput(tableName,data,condition,null,null,[],'',function (result) {
								para.nStep='activityTicketType';
								if (++dbFlag === 2) {
									$this.startModule(activityId,successCallBack, errorCallBack)
								}
							},para.errorCallBack)
							break;
						case 'activityTicketType':
							$this.activityId=activityId;
							tableName=$this.mac.tb.groupActivityTicketType;
							parentRecord = [activityId];
							data={};
							condition = $this.mac.strNull;
							$this.priceInfo=[];
							$this.size=[];
							$this.checked=[];
							$this.sys.api.recordQuery(tableName, parentRecord, condition, data, function (result) {
								for(let i in data[$this.mac.fd.id]) {
									$this.priceInfo.push({
										priceName: `${data[$this.mac.fd.groupActivityTicketType.name][i]}`,
										priceNum:data[$this.mac.fd.groupActivityTicketType.price][i],
										minNum:data[$this.mac.fd.groupActivityTicketType.minNumber][i],
										maxNum:data[$this.mac.fd.groupActivityTicketType.maxNumber][i]?data[$this.mac.fd.groupActivityTicketType.maxNumber][i]:Infinity,
										id:data[$this.mac.fd.id][i],
									});
									$this.size.push('medium');
									if(i==='0') {
										$this.checked.push(true)
									}else {
										$this.checked.push(false)
									}
								}
								$this.money = $this.priceInfo[$this.index]?`￥${$this.priceInfo[0].priceNum}`:'';
								$this.activityNum=data[$this.mac.fd.groupActivityTicketType.minNumber][0];
								$this.minNum=data[$this.mac.fd.groupActivityTicketType.minNumber][0];
								//todo
                                //如果票种为null，最大票数为null
                                //如果票种为null,最大票数有值
                                //如果票种有值，最大票数为null
                                const maxNumber =data[$this.mac.fd.groupActivityTicketType.maxNumber][0];
                                const poll =data[$this.mac.fd.groupActivityTicketType.poll][0];
                                if(maxNumber&&poll) {
                                    $this.maxNum=maxNumber;
                                }else if(!maxNumber&&poll) {
                                    $this.maxNum=poll;
                                }else if(maxNumber&&!poll){
                                    $this.maxNum=maxNumber;
                                }else {
                                    $this.maxNum=Infinity;
                                }
                                //$this.maxNum=data[$this.mac.fd.groupActivityTicketType.maxNumber][0]?data[$this.mac.fd.groupActivityTicketType.maxNumber][0]:Infinity;
								para.nStep='showSubModule';
								if (++dbFlag === 2) {
									$this.startModule(activityId,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'showSubModule':
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
							if(para.refArr[para.i]==='price') {
								let arr = [];
								for(let i = 0;i < $this.priceInfo.length;i++){
									arr.push([function(){},function(error){console.log(error)}]);
								}
								$this.callLoopModuleMethod('price','startModule',arr,function(){
									para.i++;
									if (++dbFlag === 2) {
										$this.startModule(activityId,successCallBack, errorCallBack)
									}
								}, para.errorCallBack);
							} else {
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
			closeClick:function(){
				this.hideSelfModule(this.refId, function () {},function () {})
            },
			selectMoney:function(number){
				let $this=this;
				for(let i in $this.checked) {
					$this.$set($this.checked,i,false);
				}
				$this.index=number;
				$this.$set($this.checked,number,true);
				$this.minNum = $this.priceInfo[number].minNum;
				$this.maxNum = $this.priceInfo[number].maxNum;
				$this.activityNum=1;
				$this.money = `￥${$this.activityNum* $this.priceInfo[number].priceNum?$this.activityNum* $this.priceInfo[number].priceNum:0}`;
				$this.$nextTick(()=>{
					$this.sm.stepper.startModule(function () {}, function(){});
					$this.sm.money.startModule(function () {}, function(){});
				})
			},
			stepperMoney:function(){
				//计算得到的总金额
				let $this=this;
				$this.money = `￥${$this.activityNum* $this.priceInfo[$this.index].priceNum?$this.activityNum* $this.priceInfo[$this.index].priceNum:0}`;
				$this.$nextTick(()=>{
					$this.sm.money.startModule(function () {}, function(){});
				})
			},
			close_textClickEvent:function(){
				this.closeClick();
			},
			stepper_dataModifyEvent:function(){
				this.stepperMoney();
			},
			price_selectEvent:function(number){
				this.selectMoney(number);
			},
			timeFormat(startTime,endTime) {
				//截取年份
				const startYear = startTime.substring(0,4);
				const endYear = endTime.substring(0,4);
				const startMD = startTime.substring(5,10);
				const endMD = endTime.substring(5,10);

				if(startYear===endYear) {
					if(startMD===endMD) {
						const endNewTime = endTime.substring(11,16);
						return `${startTime}-${endNewTime}`;
					}else {
						const endNewTime = endTime.substring(5,16);
						return `${startTime}-${endNewTime}`;
					}
				}else {
					return `${startTime}-${endTime}`;
				}
			}
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .appMyRegistration_container {
        width:100%;
        height:100%;
    }

    .appMyRegistration_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appMyRegistration_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appMyRegistration_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appMyRegistration_row {
        display:flex;
    }
    .appMyRegistration_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appMyRegistration_col_xqMyRegistrationWindow_size_medium {
        width:@appMyRegistration-xqMyRegistrationWindow-medium-width;
    }
    .appMyRegistration_col_xqMyRegistrationWindow {
        background-color:mix(@appMyRegistration-xqMyRegistrationWindow-background-color,#fff,@appMyRegistration-xqMyRegistrationWindow-background-color-opacity);
    }
    .appMyRegistration_col_xm1_size_medium {
        width:@appMyRegistration-xm1-medium-width;
        padding:@appMyRegistration-xm1-medium-padding;
    }
    .appMyRegistration_col_xm2_size_medium {
        width:@appMyRegistration-xm2-medium-width;
        height:@appMyRegistration-xm2-medium-height;
        padding:@appMyRegistration-xm2-medium-padding;
    }
    .appMyRegistration_col_xm3_size_medium {
        width:@appMyRegistration-xm3-medium-width;
    }
    .appMyRegistration_col_xm4_size_medium {
        width:@appMyRegistration-xm4-medium-width;
    }
    .appMyRegistration_col_xm5_size_medium {
        width:@appMyRegistration-xm5-medium-width;
    }
    .appMyRegistration_col_xm6_size_medium {
        width:@appMyRegistration-xm6-medium-width;
    }
    .appMyRegistration_col_number_size_medium {
        width:@appMyRegistration-number-medium-width;
    }
    .appMyRegistration_col_xm7_size_medium {
        width:@appMyRegistration-xm7-medium-width;
        height:@appMyRegistration-xm7-medium-height;
    }
    .appMyRegistration_col_xm8_size_medium {
        width:@appMyRegistration-xm8-medium-width;
        padding:@appMyRegistration-xm8-medium-padding;
    }
    .appMyRegistration_col_xm9_size_medium {
        width:@appMyRegistration-xm9-medium-width;
    }
    .appMyRegistration_col_xm11_size_medium {
        width:@appMyRegistration-xm11-medium-width;
    }
    .appMyRegistration_col_xm12_size_medium {
        width:@appMyRegistration-xm12-medium-width;
    }


</style>
