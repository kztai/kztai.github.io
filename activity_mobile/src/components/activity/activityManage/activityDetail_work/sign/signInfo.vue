<template>
    <div v-show="pvt_isWinShow.xqSignUpInfoWindow"
         :class="{replaySignUpInfo_container:true,replaySignUpInfo_col:true,replaySignUpInfo_col_xqSignUpInfoWindow:true,replaySignUpInfo_col_xqSignUpInfoWindow_size_large:attr.size==='large',replaySignUpInfo_col_xqSignUpInfoWindow_size_medium:attr.size==='medium',replaySignUpInfo_col_xqSignUpInfoWindow_size_small:attr.size==='small',replaySignUpInfo_col_xqSignUpInfoWindow_size_min:attr.size==='min',replaySignUpInfo_col_xqSignUpInfoWindow_checked:attr.checked,replaySignUpInfo_col_xqSignUpInfoWindow_disable:attr.disabled}" >

        <div class="replaySignUpInfo_row replaySignUpInfo_row_row1">
            <div v-show="pvt_isWinShow.xu1"
                 :class="{replaySignUpInfo_col:true,replaySignUpInfo_col_xu1:true,replaySignUpInfo_col_xu1_size_large:attr.size==='large',replaySignUpInfo_col_xu1_size_medium:attr.size==='medium',replaySignUpInfo_col_xu1_size_small:attr.size==='small',replaySignUpInfo_col_xu1_size_min:attr.size==='min',replaySignUpInfo_col_xu1_checked:attr.checked,replaySignUpInfo_col_xu1_disable:attr.disabled}" >

                <div class="replaySignUpInfo_row replaySignUpInfo_row_row2">
                    <div v-show="pvt_isWinShow.xu2"
                         :class="{replaySignUpInfo_col:true,replaySignUpInfo_col_xu2:true,replaySignUpInfo_col_xu2_size_large:attr.size==='large',replaySignUpInfo_col_xu2_size_medium:attr.size==='medium',replaySignUpInfo_col_xu2_size_small:attr.size==='small',replaySignUpInfo_col_xu2_size_min:attr.size==='min',replaySignUpInfo_col_xu2_checked:attr.checked,replaySignUpInfo_col_xu2_disable:attr.disabled}" >

                        <div class="replaySignUpInfo_row replaySignUpInfo_row_row3">
                            <div v-show="pvt_isWinShow.xu3"
                                 :class="{replaySignUpInfo_col:true,replaySignUpInfo_col_xu3:true,replaySignUpInfo_col_xu3_size_large:attr.size==='large',replaySignUpInfo_col_xu3_size_medium:attr.size==='medium',replaySignUpInfo_col_xu3_size_small:attr.size==='small',replaySignUpInfo_col_xu3_size_min:attr.size==='min',replaySignUpInfo_col_xu3_checked:attr.checked,replaySignUpInfo_col_xu3_disable:attr.disabled}" >

                                <lm2b-image
                                        ref="image"
                                        refId="image"
                                        v-show="pvt_isShow.xu3 === 'image'"
                                        :paraVarPair="pvt_xu3.image.paraVarPair"
                                        :para="pvt_xu3.image.para"
                                        :attr="pvt_xu3.image.attr">
                                </lm2b-image>
                            </div>
                        </div>
                        <div class="replaySignUpInfo_row replaySignUpInfo_row_row4">
                            <div v-show="pvt_isShow.xu4 === 'num'"
                                 :class="{replaySignUpInfo_col:true,replaySignUpInfo_col_xu4:true,replaySignUpInfo_col_xu4_size_large:attr.size==='large',replaySignUpInfo_col_xu4_size_medium:attr.size==='medium',replaySignUpInfo_col_xu4_size_small:attr.size==='small',replaySignUpInfo_col_xu4_size_min:attr.size==='min',replaySignUpInfo_col_xu4_checked:attr.checked,replaySignUpInfo_col_xu4_disable:attr.disabled}" >

                                <lm2b-link-text
                                        ref="num"
                                        refId="num"
                                        v-show="pvt_isShow.xu4 === 'num'"
                                        :paraVarPair="pvt_xu4.num.paraVarPair"
                                        :para="pvt_xu4.num.para"
                                        :attr="pvt_xu4.num.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="replaySignUpInfo_row replaySignUpInfo_row_row5">
            <div v-show="pvt_isWinShow.xu5"
                 :class="{replaySignUpInfo_col:true,replaySignUpInfo_col_xu5:true,replaySignUpInfo_col_xu5_size_large:attr.size==='large',replaySignUpInfo_col_xu5_size_medium:attr.size==='medium',replaySignUpInfo_col_xu5_size_small:attr.size==='small',replaySignUpInfo_col_xu5_size_min:attr.size==='min',replaySignUpInfo_col_xu5_checked:attr.checked,replaySignUpInfo_col_xu5_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="name"
                        refId="name"
                        v-show="pvt_isShow.xu5 === 'name'"
                        :paraVarPair="pvt_xu5.name.paraVarPair"
                        :para="pvt_xu5.name.para"
                        :attr="pvt_xu5.name.attr">
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
		props: ['refId','para','attr','paraVarPair','number'],
		data: function() {
			return {

				info:this.para.info,
				pvt_subModuleMap: {
					vessel:['xu3','xu5','xu4'],
					subModule:['image','name','num'],
				},
				pvt_isShow: {
					xu3:null,
					xu5:null,
					xu4:null,
				},
				pvt_isWinShow: {
					xqSignUpInfoWindow:true,
					xu1:true,
					xu2:true,
					xu3:true,
					xu4:true,
					xu5:true,
				},
				pvt_eventPortInput: [],

				image:null,
				name:null,
				num:null,
			};
		},
		watch: {
			info: {
				handler: function (val, oldVal) {
					if (val !== oldVal && this.paraVarPair.info) {
						if (this.number !== undefined) { // 循环
							this.$parent[this.paraVarPair.info][this.number] = val
						} else { // 非循环
							this.$parent[this.paraVarPair.info] = val
						}
					}
				},
				deep   : true
			},
		},
		computed:{
			pvt_xu3:function(){
				return {
					image:{
						paraVarPair:{
							image:'image',
						},
						para:{
							image:'http://img2.imgtn.bdimg.com/it/u=2915512436,1541993188&fm=26&gp=0.jpg',
							// image:this.image,
						},
						attr:{
						},
					},
				};
			},
			pvt_xu5:function(){
				return {
					name:{
						paraVarPair:{
							textData:'name',
						},
						para:{
							textData:this.name,
						},
						attr:{
							textAlign:'center',
							color:'#333',
							fontSize:'12px',
						},
					},
				};
			},
			pvt_xu4:function(){
				return {
					num:{
						paraVarPair:{
							textData:'num',
						},
						para:{
							textData:this.num,
						},
						attr:{
							textAlign:'center',
							height:'16px',
							color:'#12B0FF',
							fontSize:'12px',
							icon:'van-icon-cross',
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
							$this.name = $this.info.name;
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.image = $this.info.image;
							$this.num = $this.info.num?$this.info.num:'';
							//'image','name','num'
							$this.showSubModule(['image','name'], true, function () {
								para.nStep = 'showNum';
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'showNum':
							if($this.num&&$this.num!==1) {
								$this.showSubModule('num', true, function () {
									para.i = 0;
									para.nStep = 'startModule_loop';
									if (++dbFlag === 2) {
										$this.startModule(successCallBack, errorCallBack)
									}
								}, para.errorCallBack);
							}else {
								para.nStep='startModule_loop';
								para.i = 0;
								dbFlag++;
							}
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
    .replaySignUpInfo_container {
        /*width:100%;*/
        /*height:100%;*/
    }
    .replaySignUpInfo_row_row3 {
        height: 100%;
    }
    .replaySignUpInfo_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .replaySignUpInfo_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .replaySignUpInfo_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .replaySignUpInfo_row {
        display:flex;
    }
    .replaySignUpInfo_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .replaySignUpInfo_col_xqSignUpInfoWindow_size_medium {
        width:20%;
        padding:@replaySignUpInfo-xqSignUpInfoWindow-medium-padding;
    }
    .replaySignUpInfo_col_xu1_size_medium {
        width:@replaySignUpInfo-xu1-medium-width;
        margin:@replaySignUpInfo-xu1-medium-margin;
        padding:@replaySignUpInfo-xu1-medium-padding;
        align-items:@replaySignUpInfo-xu1-medium-horizontal-position;
    }
    .replaySignUpInfo_col_xu1_size_large {
        align-items:@replaySignUpInfo-xu1-large-horizontal-position;
    }
    .replaySignUpInfo_col_xu1_size_small {
        align-items:@replaySignUpInfo-xu1-small-horizontal-position;
    }
    .replaySignUpInfo_col_xu1_size_min {
        align-items:@replaySignUpInfo-xu1-mini-horizontal-position;
    }
    .replaySignUpInfo_col_xu2_size_medium {
        width:@replaySignUpInfo-xu2-medium-width;
        height:@replaySignUpInfo-xu2-medium-height;
        align-items:@replaySignUpInfo-xu2-medium-horizontal-position;
        position: static;
        overflow: hidden;
    }
    .replaySignUpInfo_col_xu2 {
        border-style:@replaySignUpInfo-xu2-border-style;
        border-radius:@replaySignUpInfo-xu2-border-radius;
    }
    .replaySignUpInfo_col_xu2_size_large {
        align-items:@replaySignUpInfo-xu2-large-horizontal-position;
    }
    .replaySignUpInfo_col_xu2_size_small {
        align-items:@replaySignUpInfo-xu2-small-horizontal-position;
    }
    .replaySignUpInfo_col_xu2_size_min {
        align-items:@replaySignUpInfo-xu2-mini-horizontal-position;
    }
    .replaySignUpInfo_col_xu3_size_medium {
        width:@replaySignUpInfo-xu3-medium-width;
    }
    .replaySignUpInfo_col_xu4_size_medium {
        width:@replaySignUpInfo-xu4-medium-width;
        height:@replaySignUpInfo-xu4-medium-height;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }
    .replaySignUpInfo_col_xu4 {
        border-width:@replaySignUpInfo-xu4-border-width;
        border-style:@replaySignUpInfo-xu4-border-style;
        border-color:mix(@replaySignUpInfo-xu4-border-color,#fff,@replaySignUpInfo-xu4-hover-border-color-opacity);
        background-color:mix(@replaySignUpInfo-xu4-background-color,#fff,@replaySignUpInfo-xu4-background-color-opacity);
        border-radius:@replaySignUpInfo-xu4-border-radius;
        overflow: hidden;
    }
    .replaySignUpInfo_col_xu5_size_medium {
        width:@replaySignUpInfo-xu5-medium-width;
    }

    //
</style>
