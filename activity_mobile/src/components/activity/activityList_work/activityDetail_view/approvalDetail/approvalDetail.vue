<template>
    <div v-show="pvt_isWinShow.xqActivityDetailWindow"
         :class="{appActivityDetail_container:true,appActivityDetail_col:true,appActivityDetail_col_xqActivityDetailWindow:true,appActivityDetail_col_xqActivityDetailWindow_size_large:attr.size==='large',appActivityDetail_col_xqActivityDetailWindow_size_medium:attr.size==='medium',appActivityDetail_col_xqActivityDetailWindow_size_small:attr.size==='small',appActivityDetail_col_xqActivityDetailWindow_size_min:attr.size==='min',appActivityDetail_col_xqActivityDetailWindow_checked:attr.checked,appActivityDetail_col_xqActivityDetailWindow_disable:attr.disabled}" >

        <div class="appActivityDetail_row appActivityDetail_row_row5">
            <div v-show="pvt_isWinShow.ad6"
                 :class="{appActivityDetail_col:true,appActivityDetail_col_ad6:true,appActivityDetail_col_ad6_size_large:attr.size==='large',appActivityDetail_col_ad6_size_medium:attr.size==='medium',appActivityDetail_col_ad6_size_small:attr.size==='small',appActivityDetail_col_ad6_size_min:attr.size==='min',appActivityDetail_col_ad6_checked:attr.checked,appActivityDetail_col_ad6_disable:attr.disabled}" >

                <div class="appActivityDetail_row appActivityDetail_row_row6">
                    <div v-show="pvt_isWinShow.ad7"
                         :class="{appActivityDetail_col:true,appActivityDetail_col_ad7:true,appActivityDetail_col_ad7_size_large:attr.size==='large',appActivityDetail_col_ad7_size_medium:attr.size==='medium',appActivityDetail_col_ad7_size_small:attr.size==='small',appActivityDetail_col_ad7_size_min:attr.size==='min',appActivityDetail_col_ad7_checked:attr.checked,appActivityDetail_col_ad7_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="symbol"
                                refId="symbol"
                                v-show="pvt_isShow.ad7 === 'symbol'"
                                :paraVarPair="pvt_ad7.symbol.paraVarPair"
                                :para="pvt_ad7.symbol.para"
                                :attr="pvt_ad7.symbol.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.ad8"
                         :class="{appActivityDetail_col:true,appActivityDetail_col_ad8:true,appActivityDetail_col_ad8_size_large:attr.size==='large',appActivityDetail_col_ad8_size_medium:attr.size==='medium',appActivityDetail_col_ad8_size_small:attr.size==='small',appActivityDetail_col_ad8_size_min:attr.size==='min',appActivityDetail_col_ad8_checked:attr.checked,appActivityDetail_col_ad8_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="title"
                                refId="title"
                                v-show="pvt_isShow.ad8 === 'title'"
                                :paraVarPair="pvt_ad8.title.paraVarPair"
                                :para="pvt_ad8.title.para"
                                :attr="pvt_ad8.title.attr">
                        </lm2b-link-text>
                    </div>
                </div>
            </div>
        </div>
        <div class="appActivityDetail_row appActivityDetail_row_row2">
            <div v-show="pvt_isWinShow.ad3"
                 :class="{appActivityDetail_col:true,appActivityDetail_col_ad3:true,appActivityDetail_col_ad3_size_large:attr.size==='large',appActivityDetail_col_ad3_size_medium:attr.size==='medium',appActivityDetail_col_ad3_size_small:attr.size==='small',appActivityDetail_col_ad3_size_min:attr.size==='min',appActivityDetail_col_ad3_checked:attr.checked,appActivityDetail_col_ad3_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="content"
                        refId="content"
                        v-show="pvt_isShow.ad3 === 'content'"
                        :paraVarPair="pvt_ad3.content.paraVarPair"
                        :para="pvt_ad3.content.para"
                        :attr="pvt_ad3.content.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="appActivityDetail_row appActivityDetail_row_row3">
            <div v-show="pvt_isWinShow.ad4"
                 :class="{appActivityDetail_col:true,appActivityDetail_col_ad4:true,appActivityDetail_col_ad4_size_large:attr.size==='large',appActivityDetail_col_ad4_size_medium:attr.size==='medium',appActivityDetail_col_ad4_size_small:attr.size==='small',appActivityDetail_col_ad4_size_min:attr.size==='min',appActivityDetail_col_ad4_checked:attr.checked,appActivityDetail_col_ad4_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="report"
                        refId="report"
                        v-show="pvt_isShow.ad4 === 'report'"
                        :paraVarPair="pvt_ad4.report.paraVarPair"
                        :para="pvt_ad4.report.para"
                        :attr="pvt_ad4.report.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="appActivityDetail_row appActivityDetail_row_row4">
            <div v-show="pvt_isWinShow.ad5"
                 :class="{appActivityDetail_col:true,appActivityDetail_col_ad5:true,appActivityDetail_col_ad5_size_large:attr.size==='large',appActivityDetail_col_ad5_size_medium:attr.size==='medium',appActivityDetail_col_ad5_size_small:attr.size==='small',appActivityDetail_col_ad5_size_min:attr.size==='min',appActivityDetail_col_ad5_checked:attr.checked,appActivityDetail_col_ad5_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="show"
                        refId="show"
                        v-show="pvt_isShow.ad5 === 'show'"
                        :paraVarPair="pvt_ad5.show.paraVarPair"
                        :para="pvt_ad5.show.para"
                        :attr="pvt_ad5.show.attr">
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
					vessel:['ad3','ad4','ad5','ad7','ad8'],
					subModule:['content','report','show','symbol','title'],
				},
				pvt_isShow: {
					ad3:null,
					ad4:null,
					ad5:null,
					ad7:null,
					ad8:null,
				},
				pvt_isWinShow: {
					xqActivityDetailWindow:true,
					ad3:true,
					ad4:true,
					ad5:true,
					ad6:true,
					ad7:true,
					ad8:true,
				},
				pvt_eventPortInput: [],

				content:null,
				buttonName:null,
				buttonIcon:null,
			};
		},
		watch: {
		},
		computed:{
			pvt_ad3:function(){
				return {
					content:{
						paraVarPair:{
							textData:'content',
						},
						para:{
							textData:this.content,
						},
						attr:{
							html:true
						},
					},
				};
			},
			pvt_ad4:function(){
				return {
					report:{
						paraVarPair:{
						},
						para:{
							textData:'举报',
						},
						attr:{
							textAlign:'right',
							fontSize:'12px',
							icon:'van-icon-warn-o',
						},
					},
				};
			},
			pvt_ad5:function(){
				return {
					show:{
						paraVarPair:{
							textData:'buttonName',
						},
						para:{
							textData:this.buttonName,
						},
						attr:{
							textAlign:'center',
							color:'#333',
							fontSize:'14px',
							icon:this.buttonIcon,
							iconIsRight:true,
						},
					},
				};
			},
			pvt_ad7:function(){
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
			pvt_ad8:function(){
				return {
					title:{
						paraVarPair:{
						},
						para:{
							textData:'活动详情',
						},
						attr:{
							color:'#333',
							fontSize:'15px',
							html:true,
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
			startModule:function(record,successCallBack,errorCallBack){
				let $this = this;
				let dbFlag;
				let data;
				let tableName;
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
						case 'getContentData':
							tableName = $this.mac.tb.groupActivity;
							data = {};
							data[$this.mac.fd.groupActivity.details] =[];
							data[$this.mac.fd.groupActivity.picture]=[];
							data[$this.mac.fd.id] = [record]; // 只定义 id 即可
							$this.sys.api.recordRead(tableName, data, function (result) {
								$this.content = data[$this.mac.fd.groupActivity.details][0];
								$this.buttonName='收起详情';
								$this.buttonIcon = 'van-icon-arrow-up';

								//得到图片名称数组
								let arrFieldImg = data[$this.mac.fd.groupActivity.picture][0];
								para.imgName = [];
								for (let i in arrFieldImg) {
									if(arrFieldImg[i].fileName) {
										para.imgName.push(arrFieldImg[i].fileName);
									}
								}
								para.nStep = 'readImg_loop';
								para.i = 0;
								//得到图片base64地址
								para.imgBase = [];
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'readImg_loop':
							if (para.i === para.imgName.length) {
								dbFlag++;
								para.nStep = 'separationText';
								break;
							}
							tableName = $this.mac.tb.groupActivity;
							$this.sys.api.readFileBase64(tableName, $this.mac.fd.groupActivity.picture, record, para.imgName[para.i], function(result) {
								para.imgBase.push(result);
								para.i++;
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack);
								}
							}, para.errorCallBack);
							break;
						case 'separationText':
							//循环$this.imageArr
							para.imageBase = [];
							para.videoBase = [];
							for(let y in para.imgBase) {
								if(para.imgBase[y].match(/^data:image/)) {
									para.imageBase.push(para.imgBase[y]);
								}else {
									para.videoBase.push(para.imgBase[y]);
								}
							}
							para.nStep='insertImage';
							dbFlag++;
							break;
						case 'insertImage':
							let len = para.imageBase.length;
							for (let y = 0; y < len; y++) {
								//替换blogContext中存在src=‘’的字符串
								let imgRe = /<img[^\<]*?src=(""|'')[^\<]*?\/?>/;
								let imgArr = $this.content.match(imgRe);
								//得到的字符串继续替换src=图片地址的数据
								if (imgArr) {
									let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
									//得到的<img src=''>格式src=''替换成src='url'
									let newImg = imgArr[0].replace(srcReg, 'src=' + para.imageBase[y]);
									$this.content = $this.content.replace(imgRe, newImg);
								}
							}
							para.nStep = 'insertVideo';
							dbFlag++;
							break;
						case 'insertVideo':
							let lenV = para.videoBase.length;
							for (let y = 0; y < lenV; y++) {
								let videoRe = /<iframe[^\<]*?src=(""|'')[^\<]*?\/?>/;
								let videoArr = $this.content.match(videoRe);
								//得到的字符串继续替换src=图片地址的数据
								if (videoArr) {
									let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
									//得到的<img src=''>格式src=''替换成src='url'
									let newVideo = videoArr[0].replace(srcReg, 'src=' + para.videoBase[y]);
									$this.content = $this.content.replace(videoRe, newVideo);
								}
							}
							para.nStep = 'showSubModule';
							dbFlag++;
							break;
						case 'showSubModule':
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr, true, function () {
								para.i = 0;
								para.nStep = 'startModule_loop';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
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
									$this.startModule(record,successCallBack, errorCallBack)
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
			actionDetailClick:function(){},
			show_textClickEvent:function(){
				this.actionDetailClick();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .appActivityDetail_container {
        width:100%;
        height:100%;
    }
    .appActivityDetail_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appActivityDetail_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appActivityDetail_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appActivityDetail_row {
        display:flex;
    }
    .appActivityDetail_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appActivityDetail_col_xqActivityDetailWindow_size_medium {
        width:@appActivityDetail-xqActivityDetailWindow-medium-width;
        padding:@appActivityDetail-xqActivityDetailWindow-medium-padding;
    }
    .appActivityDetail_col_xqActivityDetailWindow {
        background-color:mix(@appActivityDetail-xqActivityDetailWindow-background-color,#fff,@appActivityDetail-xqActivityDetailWindow-background-color-opacity);
    }
    .appActivityDetail_col_ad3_size_medium {
        width:@appActivityDetail-ad3-medium-width;
        padding:@appActivityDetail-ad3-medium-padding;
    }
    .appActivityDetail_col_ad4_size_medium {
        width:@appActivityDetail-ad4-medium-width;
        padding:@appActivityDetail-ad4-medium-padding;
    }
    .appActivityDetail_col_ad5_size_medium {
        width:@appActivityDetail-ad5-medium-width;
    }
    .appActivityDetail_col_ad6_size_medium {
        width:@appActivityDetail-ad6-medium-width;
        padding:@appActivityDetail-ad6-medium-padding;
    }
    .appActivityDetail_col_ad6 {
        border-style:@appActivityDetail-ad6-border-style;
        border-width:@appActivityDetail-ad6-border-width;
        border-color:mix(@appActivityDetail-ad6-border-color,#fff,@appActivityDetail-ad6-hover-border-color-opacity);
    }
    .appActivityDetail_col_ad7_size_medium {
        width:@appActivityDetail-ad7-medium-width;
        padding:@appActivityDetail-ad7-medium-padding;
        justify-content:@appActivityDetail-ad7-medium-vertical-position;
    }
    .appActivityDetail_col_ad7_size_large {
        justify-content:@appActivityDetail-ad7-large-vertical-position;
    }
    .appActivityDetail_col_ad7_size_small {
        justify-content:@appActivityDetail-ad7-small-vertical-position;
    }
    .appActivityDetail_col_ad7_size_min {
        justify-content:@appActivityDetail-ad7-mini-vertical-position;
    }
    .appActivityDetail_col_ad8_size_medium {
        width:@appActivityDetail-ad8-medium-width;
    }


</style>
