<template>
    <div v-show="pvt_isWinShow.xqActivityTitleWindow"
         :class="{appActivityTitle_container:true,appActivityTitle_col:true,appActivityTitle_col_xqActivityTitleWindow:true,appActivityTitle_col_xqActivityTitleWindow_size_large:attr.size==='large',appActivityTitle_col_xqActivityTitleWindow_size_medium:attr.size==='medium',appActivityTitle_col_xqActivityTitleWindow_size_small:attr.size==='small',appActivityTitle_col_xqActivityTitleWindow_size_min:attr.size==='min',appActivityTitle_col_xqActivityTitleWindow_checked:attr.checked,appActivityTitle_col_xqActivityTitleWindow_disable:attr.disabled}" >

        <div class="appActivityTitle_row appActivityTitle_row_row1">
            <div v-show="pvt_isWinShow.at"
                 :class="{appActivityTitle_col:true,appActivityTitle_col_at:true,appActivityTitle_col_at_size_large:attr.size==='large',appActivityTitle_col_at_size_medium:attr.size==='medium',appActivityTitle_col_at_size_small:attr.size==='small',appActivityTitle_col_at_size_min:attr.size==='min',appActivityTitle_col_at_checked:attr.checked,appActivityTitle_col_at_disable:attr.disabled}" >

                <lm2b-image
                        ref="image"
                        refId="image"
                        v-show="pvt_isShow.at === 'image'"
                        :paraVarPair="pvt_at.image.paraVarPair"
                        :para="pvt_at.image.para"
                        :attr="pvt_at.image.attr">
                </lm2b-image>
            </div>
        </div>
        <div class="appActivityTitle_row appActivityTitle_row_row2">
            <div v-show="pvt_isWinShow.at2"
                 :class="{appActivityTitle_col:true,appActivityTitle_col_at2:true,appActivityTitle_col_at2_size_large:attr.size==='large',appActivityTitle_col_at2_size_medium:attr.size==='medium',appActivityTitle_col_at2_size_small:attr.size==='small',appActivityTitle_col_at2_size_min:attr.size==='min',appActivityTitle_col_at2_checked:attr.checked,appActivityTitle_col_at2_disable:attr.disabled}" >

                <div class="appActivityTitle_row appActivityTitle_row_row3">
                    <div v-show="pvt_isWinShow.at3"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at3:true,appActivityTitle_col_at3_size_large:attr.size==='large',appActivityTitle_col_at3_size_medium:attr.size==='medium',appActivityTitle_col_at3_size_small:attr.size==='small',appActivityTitle_col_at3_size_min:attr.size==='min',appActivityTitle_col_at3_checked:attr.checked,appActivityTitle_col_at3_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="title"
                                refId="title"
                                v-show="pvt_isShow.at3 === 'title'"
                                :paraVarPair="pvt_at3.title.paraVarPair"
                                :para="pvt_at3.title.para"
                                :attr="pvt_at3.title.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="appActivityTitle_row appActivityTitle_row_row4">
                    <div v-show="pvt_isWinShow.at4"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at4:true,appActivityTitle_col_at4_size_large:attr.size==='large',appActivityTitle_col_at4_size_medium:attr.size==='medium',appActivityTitle_col_at4_size_small:attr.size==='small',appActivityTitle_col_at4_size_min:attr.size==='min',appActivityTitle_col_at4_checked:attr.checked,appActivityTitle_col_at4_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="browse"
                                refId="browse"
                                v-show="pvt_isShow.at4 === 'browse'"
                                :paraVarPair="pvt_at4.browse.paraVarPair"
                                :para="pvt_at4.browse.para"
                                :attr="pvt_at4.browse.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.at5"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at5:true,appActivityTitle_col_at5_size_large:attr.size==='large',appActivityTitle_col_at5_size_medium:attr.size==='medium',appActivityTitle_col_at5_size_small:attr.size==='small',appActivityTitle_col_at5_size_min:attr.size==='min',appActivityTitle_col_at5_checked:attr.checked,appActivityTitle_col_at5_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="browseNum"
                                refId="browseNum"
                                v-show="pvt_isShow.at5 === 'browseNum'"
                                :paraVarPair="pvt_at5.browseNum.paraVarPair"
                                :para="pvt_at5.browseNum.para"
                                :attr="pvt_at5.browseNum.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.at6"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at6:true,appActivityTitle_col_at6_size_large:attr.size==='large',appActivityTitle_col_at6_size_medium:attr.size==='medium',appActivityTitle_col_at6_size_small:attr.size==='small',appActivityTitle_col_at6_size_min:attr.size==='min',appActivityTitle_col_at6_checked:attr.checked,appActivityTitle_col_at6_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="forwarding"
                                refId="forwarding"
                                v-show="pvt_isShow.at6 === 'forwarding'"
                                :paraVarPair="pvt_at6.forwarding.paraVarPair"
                                :para="pvt_at6.forwarding.para"
                                :attr="pvt_at6.forwarding.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.at7"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at7:true,appActivityTitle_col_at7_size_large:attr.size==='large',appActivityTitle_col_at7_size_medium:attr.size==='medium',appActivityTitle_col_at7_size_small:attr.size==='small',appActivityTitle_col_at7_size_min:attr.size==='min',appActivityTitle_col_at7_checked:attr.checked,appActivityTitle_col_at7_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="forwardingNum"
                                refId="forwardingNum"
                                v-show="pvt_isShow.at7 === 'forwardingNum'"
                                :paraVarPair="pvt_at7.forwardingNum.paraVarPair"
                                :para="pvt_at7.forwardingNum.para"
                                :attr="pvt_at7.forwardingNum.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.at8"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at8:true,appActivityTitle_col_at8_size_large:attr.size==='large',appActivityTitle_col_at8_size_medium:attr.size==='medium',appActivityTitle_col_at8_size_small:attr.size==='small',appActivityTitle_col_at8_size_min:attr.size==='min',appActivityTitle_col_at8_checked:attr.checked,appActivityTitle_col_at8_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="collection"
                                refId="collection"
                                v-show="pvt_isShow.at8 === 'collection'"
                                :paraVarPair="pvt_at8.collection.paraVarPair"
                                :para="pvt_at8.collection.para"
                                :attr="pvt_at8.collection.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.at9"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at9:true,appActivityTitle_col_at9_size_large:attr.size==='large',appActivityTitle_col_at9_size_medium:attr.size==='medium',appActivityTitle_col_at9_size_small:attr.size==='small',appActivityTitle_col_at9_size_min:attr.size==='min',appActivityTitle_col_at9_checked:attr.checked,appActivityTitle_col_at9_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="collectionNum"
                                refId="collectionNum"
                                v-show="pvt_isShow.at9 === 'collectionNum'"
                                :paraVarPair="pvt_at9.collectionNum.paraVarPair"
                                :para="pvt_at9.collectionNum.para"
                                :attr="pvt_at9.collectionNum.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="appActivityTitle_row appActivityTitle_row_row5">
                    <div v-show="pvt_isWinShow.at10"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at10:true,appActivityTitle_col_at10_size_large:attr.size==='large',appActivityTitle_col_at10_size_medium:attr.size==='medium',appActivityTitle_col_at10_size_small:attr.size==='small',appActivityTitle_col_at10_size_min:attr.size==='min',appActivityTitle_col_at10_checked:attr.checked,appActivityTitle_col_at10_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="price"
                                refId="price"
                                v-show="pvt_isShow.at10 === 'price'"
                                :paraVarPair="pvt_at10.price.paraVarPair"
                                :para="pvt_at10.price.para"
                                :attr="pvt_at10.price.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="appActivityTitle_row appActivityTitle_row_row6">
                    <div v-show="pvt_isWinShow.at11"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at11:true,appActivityTitle_col_at11_size_large:attr.size==='large',appActivityTitle_col_at11_size_medium:attr.size==='medium',appActivityTitle_col_at11_size_small:attr.size==='small',appActivityTitle_col_at11_size_min:attr.size==='min',appActivityTitle_col_at11_checked:attr.checked,appActivityTitle_col_at11_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="timeIcon"
                                refId="timeIcon"
                                v-show="pvt_isShow.at11 === 'timeIcon'"
                                :paraVarPair="pvt_at11.timeIcon.paraVarPair"
                                :para="pvt_at11.timeIcon.para"
                                :attr="pvt_at11.timeIcon.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.at12"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at12:true,appActivityTitle_col_at12_size_large:attr.size==='large',appActivityTitle_col_at12_size_medium:attr.size==='medium',appActivityTitle_col_at12_size_small:attr.size==='small',appActivityTitle_col_at12_size_min:attr.size==='min',appActivityTitle_col_at12_checked:attr.checked,appActivityTitle_col_at12_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="time"
                                refId="time"
                                v-show="pvt_isShow.at12 === 'time'"
                                :paraVarPair="pvt_at12.time.paraVarPair"
                                :para="pvt_at12.time.para"
                                :attr="pvt_at12.time.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="appActivityTitle_row appActivityTitle_row_row7">
                    <div v-show="pvt_isWinShow.at13"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at13:true,appActivityTitle_col_at13_size_large:attr.size==='large',appActivityTitle_col_at13_size_medium:attr.size==='medium',appActivityTitle_col_at13_size_small:attr.size==='small',appActivityTitle_col_at13_size_min:attr.size==='min',appActivityTitle_col_at13_checked:attr.checked,appActivityTitle_col_at13_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="adrIcon"
                                refId="adrIcon"
                                v-show="pvt_isShow.at13 === 'adrIcon'"
                                :paraVarPair="pvt_at13.adrIcon.paraVarPair"
                                :para="pvt_at13.adrIcon.para"
                                :attr="pvt_at13.adrIcon.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.at14"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at14:true,appActivityTitle_col_at14_size_large:attr.size==='large',appActivityTitle_col_at14_size_medium:attr.size==='medium',appActivityTitle_col_at14_size_small:attr.size==='small',appActivityTitle_col_at14_size_min:attr.size==='min',appActivityTitle_col_at14_checked:attr.checked,appActivityTitle_col_at14_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="address"
                                refId="address"
                                v-show="pvt_isShow.at14 === 'address'"
                                :paraVarPair="pvt_at14.address.paraVarPair"
                                :para="pvt_at14.address.para"
                                :attr="pvt_at14.address.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.at15"
                         :class="{appActivityTitle_col:true,appActivityTitle_col_at15:true,appActivityTitle_col_at15_size_large:attr.size==='large',appActivityTitle_col_at15_size_medium:attr.size==='medium',appActivityTitle_col_at15_size_small:attr.size==='small',appActivityTitle_col_at15_size_min:attr.size==='min',appActivityTitle_col_at15_checked:attr.checked,appActivityTitle_col_at15_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="adrArrow"
                                refId="adrArrow"
                                v-show="pvt_isShow.at15 === 'adrArrow'"
                                :paraVarPair="pvt_at15.adrArrow.paraVarPair"
                                :para="pvt_at15.adrArrow.para"
                                :attr="pvt_at15.adrArrow.attr">
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
					vessel:['at','at3','at4','at5','at6','at7','at8','at9','at10','at12','at14','at11','at13','at15'],
					subModule:['image','title','browse','browseNum','forwarding','forwardingNum','collection','collectionNum','price','time','address','timeIcon','adrIcon','adrArrow'],
				},
				pvt_isShow: {
					at:null,
					at3:null,
					at4:null,
					at5:null,
					at6:null,
					at7:null,
					at8:null,
					at9:null,
					at10:null,
					at12:null,
					at14:null,
					at11:null,
					at13:null,
					at15:null,
				},
				pvt_isWinShow: {
					xqActivityTitleWindow:true,
					at:true,
					at2:true,
					at3:true,
					at4:true,
					at5:true,
					at6:true,
					at7:true,
					at8:true,
					at9:true,
					at10:true,
					at11:true,
					at12:true,
					at13:true,
					at14:true,
					at15:true,
				},
				pvt_eventPortInput: ['openAddressMap'],

				browse:null,
				forwarding:null,
				collection:null,
				price:null,
				time:null,
				image:null,
				title:null,
				address:null,
				addressValue:null,
			};
		},
		watch: {
		},
		computed:{
			pvt_at:function(){
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
			pvt_at3:function(){
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
			pvt_at4:function(){
				return {
					browse:{
						paraVarPair:{
						},
						para:{
							textData:'浏览',
						},
						attr:{
							textAlign:'center',
							height:'20px',
							color:'#666666',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_at5:function(){
				return {
					browseNum:{
						paraVarPair:{
							textData:'browse',
						},
						para:{
							textData:this.browse,
						},
						attr:{
							height:'20px',
							color:'#666666',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_at6:function(){
				return {
					forwarding:{
						paraVarPair:{
						},
						para:{
							textData:'转发',
						},
						attr:{
							textAlign:'center',
							height:'20px',
							color:'#666666',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_at7:function(){
				return {
					forwardingNum:{
						paraVarPair:{
							textData:'forwarding',
						},
						para:{
							textData:this.forwarding,
						},
						attr:{
							height:'20px',
							color:'#666666',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_at8:function(){
				return {
					collection:{
						paraVarPair:{
						},
						para:{
							textData:'收藏',
						},
						attr:{
							textAlign:'center',
							height:'20px',
							color:'#666666',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_at9:function(){
				return {
					collectionNum:{
						paraVarPair:{
							textData:'collection',
						},
						para:{
							textData:this.collection,
						},
						attr:{
							height:'20px',
							color:'#666666',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_at10:function(){
				return {
					price:{
						paraVarPair:{
							textData:'price',
						},
						para:{
							textData:this.price,
						},
						attr:{
							fontWeight:true,
							height:'40px',
							color:'#FC7122',
							fontSize:'18px',
							html:true,
						},
					},
				};
			},
			pvt_at12:function(){
				return {
					time:{
						paraVarPair:{
							textData:'time',
						},
						para:{
							textData:this.time,
						},
						attr:{
							height:'30px',
							color:'#666',
							fontSize:'13px',
						},
					},
				};
			},
			pvt_at14:function(){
				return {
					address:{
						paraVarPair:{
							textData:'address',
						},
						para:{
							textData:this.address,
						},
						attr:{
							isClick:true,
							height:'30px',
							color:'#666666',
							fontSize:'13px',
						},
					},
				};
			},
			pvt_at11:function(){
				return {
					timeIcon:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							height:'30px',
							color:'#999999',
							fontSize:'12px',
							icon:'van-icon-underway-o',
						},
					},
				};
			},
			pvt_at13:function(){
				return {
					adrIcon:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							height:'30px',
							color:'#999999',
							fontSize:'12px',
							icon:'van-icon-location-o',
						},
					},
				};
			},
			pvt_at15:function(){
				return {
					adrArrow:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							height:'30px',
							color:'#cccccc',
							fontSize:'15px',
							icon:'van-icon-arrow',
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
			startModule: function (record, successCallBack, errorCallBack) {  //先得到活动详情的数据信息
				let $this = this;
				let dbFlag;
				$this.mac = mac.mac;
				let data;
				let tableName;
				let parentRecord;
				let condition;
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
						case 'getActivity_detail_data':
							tableName = $this.mac.tb.groupActivity;
							data = {};
							data[$this.mac.fd.id] = [record]; // 只定义 id 即可
							$this.sys.api.recordRead(tableName, data, function (result) {
								$this.image = [{
									$table: $this.mac.tb.groupActivity,
									$arrField: [$this.mac.fd.groupActivity.poster],
									$arrValue: [record]
								}];
								//填写活动详情标题模块的数据
								$this.title = data[$this.mac.fd.groupActivity.name][0];
								$this.browse = data[$this.mac.fd.groupActivity.browerNumber][0];
								$this.forwarding = data[$this.mac.fd.groupActivity.forwardNumber][0];
								$this.collection = data[$this.mac.fd.groupActivity.favoriteNumber][0];
								$this.time = $this.timeFormat(data[$this.mac.fd.groupActivity.startTime][0],data[$this.mac.fd.groupActivity.endTime][0]);
								const addressInfo = data[$this.mac.fd.groupActivity.place][0];
								//{lng:'',lat:'',province:'',city:'',district:'',address:''}
								const addressValue = {
									lng:addressInfo.lng?addressInfo.lng:'',
									lat:addressInfo.lat?addressInfo.lat:'',
									province:addressInfo.name[0]?addressInfo.name[0]:'',
									city:addressInfo.name[1]?addressInfo.name[1]:'',
									district:addressInfo.name[2]?addressInfo.name[2]:'',
									address:addressInfo.place?addressInfo.place:'',
								};
								$this.addressValue = addressValue;
								let detailAddress='';
								for(let i in addressInfo.name) {
									detailAddress=detailAddress+addressInfo.name[i];
								}
								detailAddress=detailAddress+addressInfo.place;
								$this.address=detailAddress;
								para.nStep = 'groupActivityTicketType';
								if (++dbFlag === 2) {
									$this.startModule(record, successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'groupActivityTicketType':
							//得到票价最小值
							tableName = $this.mac.tb.groupActivityTicketType;
							parentRecord = [record];
							condition = $this.mac.strNull;
							data={};
							data[$this.mac.fd.groupActivityTicketType.price]=[];
							$this.sys.api.recordQuery(tableName, parentRecord, condition, data,function(){
								const priceArr = data[$this.mac.fd.groupActivityTicketType.price];
								let minPrice=priceArr[0];
								for(let i=0;i<priceArr.length;i++) {
									if(minPrice>priceArr[i]) {
										minPrice = priceArr[i];
									}
								}
								// $this.price = '￥29.9<span style="font-size: 11px;">起</span>';
								$this.price=`￥${minPrice}<span style="font-size: 11px;">起</span>`;
								para.nStep='showSubModule';
								if (++dbFlag === 2) {
									$this.startModule(record, successCallBack, errorCallBack)
								}
							},para.errorCallBack)
							break;
						case 'showSubModule':
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr, true, function () {
								para.i = 0;
								para.nStep = 'startModule_loop';
								if (++dbFlag === 2) {
									$this.startModule(record, successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'startModule_loop':
							if (para.i === para.refArr.length) {
								para.nStep = 'end';
								dbFlag++;
								break;
							}
							$this.sm[para.refArr[para.i]].startModule(function () {
								para.i++;
								if (++dbFlag === 2) {
									$this.startModule(record, successCallBack, errorCallBack)
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
			detailTimeClick:function(){
                let $this = this;
                $this.ep.openAddressMap($this.addressValue);
            },
			address_textClickEvent:function(){
				this.detailTimeClick();
			},
			adrIcon_textClickEvent:function(){
				this.detailTimeClick();
			},
			adrArrow_textClickEvent:function(){
				this.detailTimeClick();
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
						return `${startTime}至${endNewTime}`;
					}else {
						const endNewTime = endTime.substring(5,16);
						return `${startTime}至${endNewTime}`;
					}
				}else {
					return `${startTime}至${endTime}`;
				}
			}
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .appActivityTitle_container {
        width:100%;
        height:100%;
    }
    .appActivityTitle_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appActivityTitle_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appActivityTitle_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appActivityTitle_row {
        display:flex;
    }
    .appActivityTitle_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appActivityTitle_col_xqActivityTitleWindow_size_medium {
        width:@appActivityTitle-xqActivityTitleWindow-medium-width;
    }
    .appActivityTitle_col_xqActivityTitleWindow {
        background-color:mix(@appActivityTitle-xqActivityTitleWindow-background-color,#fff,@appActivityTitle-xqActivityTitleWindow-background-color-opacity);
    }
    .appActivityTitle_col_at_size_medium {
        width:@appActivityTitle-at-medium-width;
        height:@appActivityTitle-at-medium-height;
    }
    .appActivityTitle_col_at2_size_medium {
        width:@appActivityTitle-at2-medium-width;
        padding:@appActivityTitle-at2-medium-padding;
    }
    .appActivityTitle_col_at3_size_medium {
        width:@appActivityTitle-at3-medium-width;
        height:@appActivityTitle-at3-medium-height;
    }
    .appActivityTitle_col_at4_size_medium {
        width:@appActivityTitle-at4-medium-width;
    }
    .appActivityTitle_col_at5_size_medium {
        width:@appActivityTitle-at5-medium-width;
    }
    .appActivityTitle_col_at6_size_medium {
        width:@appActivityTitle-at6-medium-width;
    }
    .appActivityTitle_col_at7_size_medium {
        width:@appActivityTitle-at7-medium-width;
    }
    .appActivityTitle_col_at8_size_medium {
        width:@appActivityTitle-at8-medium-width;
    }
    .appActivityTitle_col_at9_size_medium {
        width:@appActivityTitle-at9-medium-width;
    }
    .appActivityTitle_col_at10_size_medium {
        width:@appActivityTitle-at10-medium-width;
    }
    .appActivityTitle_col_at11_size_medium {
        width:@appActivityTitle-at11-medium-width;
    }
    .appActivityTitle_col_at12_size_medium {
        width:@appActivityTitle-at12-medium-width;
    }
    .appActivityTitle_col_at13_size_medium {
        width:@appActivityTitle-at13-medium-width;
    }
    .appActivityTitle_col_at14_size_medium {
        width:@appActivityTitle-at14-medium-width;
    }
    .appActivityTitle_col_at15_size_medium {
        width:@appActivityTitle-at15-medium-width;
        align-items:@appActivityTitle-at15-medium-horizontal-position;
    }
    .appActivityTitle_col_at15_size_large {
        align-items:@appActivityTitle-at15-large-horizontal-position;
    }
    .appActivityTitle_col_at15_size_small {
        align-items:@appActivityTitle-at15-small-horizontal-position;
    }
    .appActivityTitle_col_at15_size_min {
        align-items:@appActivityTitle-at15-mini-horizontal-position;
    }


</style>
