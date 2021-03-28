<template>
    <div v-show="pvt_isWinShow.xqDiscussContentWindow"
         :class="{appDiscussContent_container:true,appDiscussContent_col:true,appDiscussContent_col_xqDiscussContentWindow:true,appDiscussContent_col_xqDiscussContentWindow_size_large:attr.size==='large',appDiscussContent_col_xqDiscussContentWindow_size_medium:attr.size==='medium',appDiscussContent_col_xqDiscussContentWindow_size_small:attr.size==='small',appDiscussContent_col_xqDiscussContentWindow_size_min:attr.size==='min',appDiscussContent_col_xqDiscussContentWindow_checked:attr.checked,appDiscussContent_col_xqDiscussContentWindow_disable:attr.disabled}" >

        <div class="appDiscussContent_row appDiscussContent_row_row1">
            <div v-show="pvt_isWinShow.xdc1"
                 :class="{appDiscussContent_col:true,appDiscussContent_col_xdc1:true,appDiscussContent_col_xdc1_size_large:attr.size==='large',appDiscussContent_col_xdc1_size_medium:attr.size==='medium',appDiscussContent_col_xdc1_size_small:attr.size==='small',appDiscussContent_col_xdc1_size_min:attr.size==='min',appDiscussContent_col_xdc1_checked:attr.checked,appDiscussContent_col_xdc1_disable:attr.disabled}" >

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
                 :class="{appDiscussContent_col:true,appDiscussContent_col_xdc2:true,appDiscussContent_col_xdc2_size_large:attr.size==='large',appDiscussContent_col_xdc2_size_medium:attr.size==='medium',appDiscussContent_col_xdc2_size_small:attr.size==='small',appDiscussContent_col_xdc2_size_min:attr.size==='min',appDiscussContent_col_xdc2_checked:attr.checked,appDiscussContent_col_xdc2_disable:attr.disabled}" >

                <div class="appDiscussContent_row appDiscussContent_row_row2">
                    <div v-show="pvt_isWinShow.xdc3"
                         :class="{appDiscussContent_col:true,appDiscussContent_col_xdc3:true,appDiscussContent_col_xdc3_size_large:attr.size==='large',appDiscussContent_col_xdc3_size_medium:attr.size==='medium',appDiscussContent_col_xdc3_size_small:attr.size==='small',appDiscussContent_col_xdc3_size_min:attr.size==='min',appDiscussContent_col_xdc3_checked:attr.checked,appDiscussContent_col_xdc3_disable:attr.disabled}" >

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
                <div class="appDiscussContent_row appDiscussContent_row_row3">
                    <div v-show="pvt_isWinShow.askTime"
                         :class="{appDiscussContent_col:true,appDiscussContent_col_askTime:true,appDiscussContent_col_askTime_size_large:attr.size==='large',appDiscussContent_col_askTime_size_medium:attr.size==='medium',appDiscussContent_col_askTime_size_small:attr.size==='small',appDiscussContent_col_askTime_size_min:attr.size==='min',appDiscussContent_col_askTime_checked:attr.checked,appDiscussContent_col_askTime_disable:attr.disabled}" >

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
        <div class="appDiscussContent_row appDiscussContent_row_row4">
            <div v-show="pvt_isWinShow.xdc4"
                 :class="{appDiscussContent_col:true,appDiscussContent_col_xdc4:true,appDiscussContent_col_xdc4_size_large:attr.size==='large',appDiscussContent_col_xdc4_size_medium:attr.size==='medium',appDiscussContent_col_xdc4_size_small:attr.size==='small',appDiscussContent_col_xdc4_size_min:attr.size==='min',appDiscussContent_col_xdc4_checked:attr.checked,appDiscussContent_col_xdc4_disable:attr.disabled}" >

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
        <div class="appDiscussContent_row appDiscussContent_row_row5">
            <div v-show="pvt_isWinShow.xdc5"
                 :class="{appDiscussContent_col:true,appDiscussContent_col_xdc5:true,appDiscussContent_col_xdc5_size_large:attr.size==='large',appDiscussContent_col_xdc5_size_medium:attr.size==='medium',appDiscussContent_col_xdc5_size_small:attr.size==='small',appDiscussContent_col_xdc5_size_min:attr.size==='min',appDiscussContent_col_xdc5_checked:attr.checked,appDiscussContent_col_xdc5_disable:attr.disabled}" >

                <div class="appDiscussContent_row appDiscussContent_row_row6">
                    <div v-show="pvt_isWinShow.xdc6"
                         :class="{appDiscussContent_col:true,appDiscussContent_col_xdc6:true,appDiscussContent_col_xdc6_size_large:attr.size==='large',appDiscussContent_col_xdc6_size_medium:attr.size==='medium',appDiscussContent_col_xdc6_size_small:attr.size==='small',appDiscussContent_col_xdc6_size_min:attr.size==='min',appDiscussContent_col_xdc6_checked:attr.checked,appDiscussContent_col_xdc6_disable:attr.disabled}" >

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
                <div class="appDiscussContent_row appDiscussContent_row_row7">
                    <div v-show="pvt_isWinShow.xdc7"
                         :class="{appDiscussContent_col:true,appDiscussContent_col_xdc7:true,appDiscussContent_col_xdc7_size_large:attr.size==='large',appDiscussContent_col_xdc7_size_medium:attr.size==='medium',appDiscussContent_col_xdc7_size_small:attr.size==='small',appDiscussContent_col_xdc7_size_min:attr.size==='min',appDiscussContent_col_xdc7_checked:attr.checked,appDiscussContent_col_xdc7_disable:attr.disabled}" >

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
                <div class="appDiscussContent_row appDiscussContent_row_row8">
                    <div v-show="pvt_isWinShow.xdc8"
                         :class="{appDiscussContent_col:true,appDiscussContent_col_xdc8:true,appDiscussContent_col_xdc8_size_large:attr.size==='large',appDiscussContent_col_xdc8_size_medium:attr.size==='medium',appDiscussContent_col_xdc8_size_small:attr.size==='small',appDiscussContent_col_xdc8_size_min:attr.size==='min',appDiscussContent_col_xdc8_checked:attr.checked,appDiscussContent_col_xdc8_disable:attr.disabled}" >

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
					vessel:['xdc1','xdc3','xdc4','xdc6','xdc7','xdc8','askTime'],
					subModule:['image','askName','askContent','ansName','ansTime','ansContent','askDate'],
				},
				pvt_isShow: {
					xdc1:null,
					xdc3:null,
					xdc4:null,
					xdc6:null,
					xdc7:null,
					xdc8:null,
					askTime:null,
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
				},
				pvt_eventPortInput: [],

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
								para.nStep = 'end';
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
						// case 'showSubModule_ansContent':
						//     $this.showSubModule([], false, function () {
						//         para.nStep = 'end';
						//         if (++dbFlag === 2) {
						//             $this.startModule(successCallBack, errorCallBack)
						//         }
						//     }, para.errorCallBack);
						// 	break;
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
    .appDiscussContent_container {
        width:100%;
        height:100%;
    }
    .appDiscussContent_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appDiscussContent_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appDiscussContent_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appDiscussContent_row {
        display:flex;
    }
    .appDiscussContent_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appDiscussContent_col_xqDiscussContentWindow_size_medium {
        width:@appDiscussContent-xqDiscussContentWindow-medium-width;
        padding:@appDiscussContent-xqDiscussContentWindow-medium-padding;
    }
    .appDiscussContent_col_xqDiscussContentWindow {
        border-style:@appDiscussContent-xqDiscussContentWindow-border-style;
        border-width:@appDiscussContent-xqDiscussContentWindow-border-width;
        border-radius:@appDiscussContent-xqDiscussContentWindow-border-radius;
        border-color:mix(@appDiscussContent-xqDiscussContentWindow-border-color,#fff,@appDiscussContent-xqDiscussContentWindow-hover-border-color-opacity);
    }
    .appDiscussContent_col_xdc1_size_medium {
        width:@appDiscussContent-xdc1-medium-width;
        height:@appDiscussContent-xdc1-medium-height;
        overflow: hidden;
    }
    .appDiscussContent_col_xdc1 {
        border-radius:@appDiscussContent-xdc1-border-radius;
    }
    .appDiscussContent_col_xdc2_size_medium {
        width:@appDiscussContent-xdc2-medium-width;
        padding:@appDiscussContent-xdc2-medium-padding;
    }
    .appDiscussContent_col_xdc3_size_medium {
        width:@appDiscussContent-xdc3-medium-width;
    }
    .appDiscussContent_col_askTime_size_medium {
        width:@appDiscussContent-askTime-medium-width;
    }
    .appDiscussContent_col_xdc4_size_medium {
        width:@appDiscussContent-xdc4-medium-width;
        padding:@appDiscussContent-xdc4-medium-padding;
    }
    .appDiscussContent_col_xdc5_size_medium {
        width:@appDiscussContent-xdc5-medium-width;
        padding:@appDiscussContent-xdc5-medium-padding;
    }
    .appDiscussContent_col_xdc5 {
        background-color:mix(@appDiscussContent-xdc5-background-color,#fff,@appDiscussContent-xdc5-background-color-opacity);
    }
    .appDiscussContent_col_xdc6_size_medium {
        width:@appDiscussContent-xdc6-medium-width;
    }
    .appDiscussContent_col_xdc7_size_medium {
        width:@appDiscussContent-xdc7-medium-width;
    }
    .appDiscussContent_col_xdc8_size_medium {
        width:@appDiscussContent-xdc8-medium-width;
    }




</style>
