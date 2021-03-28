<template>
    <div v-show="pvt_isWinShow.xqSignUpInfoWindow"
         :class="{appSignUpInfo_container:true,appSignUpInfo_col:true,appSignUpInfo_col_xqSignUpInfoWindow:true,appSignUpInfo_col_xqSignUpInfoWindow_size_large:attr.size==='large',appSignUpInfo_col_xqSignUpInfoWindow_size_medium:attr.size==='medium',appSignUpInfo_col_xqSignUpInfoWindow_size_small:attr.size==='small',appSignUpInfo_col_xqSignUpInfoWindow_size_min:attr.size==='min',appSignUpInfo_col_xqSignUpInfoWindow_checked:attr.checked,appSignUpInfo_col_xqSignUpInfoWindow_disable:attr.disabled}" >

        <div class="appSignUpInfo_row appSignUpInfo_row_row1">
            <div v-show="pvt_isWinShow.xu1"
                 :class="{appSignUpInfo_col:true,appSignUpInfo_col_xu1:true,appSignUpInfo_col_xu1_size_large:attr.size==='large',appSignUpInfo_col_xu1_size_medium:attr.size==='medium',appSignUpInfo_col_xu1_size_small:attr.size==='small',appSignUpInfo_col_xu1_size_min:attr.size==='min',appSignUpInfo_col_xu1_checked:attr.checked,appSignUpInfo_col_xu1_disable:attr.disabled}" >

                <div class="appSignUpInfo_row appSignUpInfo_row_row2">
                    <div v-show="pvt_isWinShow.xu2"
                         :class="{appSignUpInfo_col:true,appSignUpInfo_col_xu2:true,appSignUpInfo_col_xu2_size_large:attr.size==='large',appSignUpInfo_col_xu2_size_medium:attr.size==='medium',appSignUpInfo_col_xu2_size_small:attr.size==='small',appSignUpInfo_col_xu2_size_min:attr.size==='min',appSignUpInfo_col_xu2_checked:attr.checked,appSignUpInfo_col_xu2_disable:attr.disabled}" >

                        <div class="appSignUpInfo_row appSignUpInfo_row_row3">
                            <div v-show="pvt_isWinShow.xu3"
                                 :class="{appSignUpInfo_col:true,appSignUpInfo_col_xu3:true,appSignUpInfo_col_xu3_size_large:attr.size==='large',appSignUpInfo_col_xu3_size_medium:attr.size==='medium',appSignUpInfo_col_xu3_size_small:attr.size==='small',appSignUpInfo_col_xu3_size_min:attr.size==='min',appSignUpInfo_col_xu3_checked:attr.checked,appSignUpInfo_col_xu3_disable:attr.disabled}" >

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
                        <div class="appSignUpInfo_row appSignUpInfo_row_row4" >
                            <div v-show="pvt_isShow.xu4 === 'num'"
                                 :class="{appSignUpInfo_col:true,appSignUpInfo_col_xu4:true,appSignUpInfo_col_xu4_size_large:attr.size==='large',appSignUpInfo_col_xu4_size_medium:attr.size==='medium',appSignUpInfo_col_xu4_size_small:attr.size==='small',appSignUpInfo_col_xu4_size_min:attr.size==='min',appSignUpInfo_col_xu4_checked:attr.checked,appSignUpInfo_col_xu4_disable:attr.disabled}" >

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
        <div class="appSignUpInfo_row appSignUpInfo_row_row5">
            <div v-show="pvt_isWinShow.xu5"
                 :class="{appSignUpInfo_col:true,appSignUpInfo_col_xu5:true,appSignUpInfo_col_xu5_size_large:attr.size==='large',appSignUpInfo_col_xu5_size_medium:attr.size==='medium',appSignUpInfo_col_xu5_size_small:attr.size==='small',appSignUpInfo_col_xu5_size_min:attr.size==='min',appSignUpInfo_col_xu5_checked:attr.checked,appSignUpInfo_col_xu5_disable:attr.disabled}" >

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
							image:this.image,
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
    .appSignUpInfo_container {
        width:20% !important;
    }
    .appSignUpInfo_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .appSignUpInfo_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .appSignUpInfo_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appSignUpInfo_row {
        display:flex;
    }
    .appSignUpInfo_col {
        /*position:relative;*/
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appSignUpInfo_col_xqSignUpInfoWindow_size_medium {
        width:@appSignUpInfo-xqSignUpInfoWindow-medium-width;
        padding:@appSignUpInfo-xqSignUpInfoWindow-medium-padding;
    }
    .appSignUpInfo_col_xu1_size_medium {
        width:@appSignUpInfo-xu1-medium-width;
        margin:@appSignUpInfo-xu1-medium-margin;
        padding:@appSignUpInfo-xu1-medium-padding;
        align-items:@appSignUpInfo-xu1-medium-horizontal-position;
        position: relative;
    }
    .appSignUpInfo_col_xu1_size_large {
        align-items:@appSignUpInfo-xu1-large-horizontal-position;
    }
    .appSignUpInfo_col_xu1_size_small {
        align-items:@appSignUpInfo-xu1-small-horizontal-position;
    }
    .appSignUpInfo_col_xu1_size_min {
        align-items:@appSignUpInfo-xu1-mini-horizontal-position;
    }
    .appSignUpInfo_col_xu2_size_medium {
        width:@appSignUpInfo-xu2-medium-width;
        height:@appSignUpInfo-xu2-medium-height;
        align-items:@appSignUpInfo-xu2-medium-horizontal-position;
        overflow: hidden;
    }
    .appSignUpInfo_col_xu2 {
        border-style:@appSignUpInfo-xu2-border-style;
        border-radius:@appSignUpInfo-xu2-border-radius;
    }
    .appSignUpInfo_col_xu2_size_large {
        align-items:@appSignUpInfo-xu2-large-horizontal-position;
    }
    .appSignUpInfo_col_xu2_size_small {
        align-items:@appSignUpInfo-xu2-small-horizontal-position;
    }
    .appSignUpInfo_col_xu2_size_min {
        align-items:@appSignUpInfo-xu2-mini-horizontal-position;
    }
    .appSignUpInfo_col_xu3_size_medium {
        width:@appSignUpInfo-xu3-medium-width;
    }
    .appSignUpInfo_col_xu4_size_medium {
        width:@appSignUpInfo-xu4-medium-width;
        height:@appSignUpInfo-xu4-medium-height;
        overflow: hidden;
    }
    .appSignUpInfo_col_xu4 {
        border-width:@appSignUpInfo-xu4-border-width;
        border-style:@appSignUpInfo-xu4-border-style;
        border-color:mix(@appSignUpInfo-xu4-border-color,#fff,@appSignUpInfo-xu4-hover-border-color-opacity);
        background-color:mix(@appSignUpInfo-xu4-background-color,#fff,@appSignUpInfo-xu4-background-color-opacity);
        border-radius:@appSignUpInfo-xu4-border-radius;
    }
    .appSignUpInfo_col_xu5_size_medium {
        width:@appSignUpInfo-xu5-medium-width;
    }
    .appSignUpInfo_row_row3 {
        width: 100%;
        height: 100%;
    }
    .appSignUpInfo_row_row4 {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }


</style>
