<template>
    <div v-show="pvt_isWinShow.scThirdPartyWindow"
         :class="{replayThirdParty_container:true,replayThirdParty_col:true,replayThirdParty_col_scThirdPartyWindow:true,replayThirdParty_col_scThirdPartyWindow_size_large:attr.size==='large',replayThirdParty_col_scThirdPartyWindow_size_medium:attr.size==='medium',replayThirdParty_col_scThirdPartyWindow_size_small:attr.size==='small',replayThirdParty_col_scThirdPartyWindow_size_min:attr.size==='min',replayThirdParty_col_scThirdPartyWindow_checked:attr.checked,replayThirdParty_col_scThirdPartyWindow_disable:attr.disabled}" >

        <div class="replayThirdParty_row replayThirdParty_row_row1">
            <div v-show="pvt_isWinShow.st1"
                 :class="{replayThirdParty_col:true,replayThirdParty_col_st1:true,replayThirdParty_col_st1_size_large:attr.size==='large',replayThirdParty_col_st1_size_medium:attr.size==='medium',replayThirdParty_col_st1_size_small:attr.size==='small',replayThirdParty_col_st1_size_min:attr.size==='min',replayThirdParty_col_st1_checked:attr.checked,replayThirdParty_col_st1_disable:attr.disabled}" >

                <div class="replayThirdParty_row replayThirdParty_row_row2">
                    <div v-show="pvt_isWinShow.st2"
                         :class="{replayThirdParty_col:true,replayThirdParty_col_st2:true,replayThirdParty_col_st2_size_large:attr.size==='large',replayThirdParty_col_st2_size_medium:attr.size==='medium',replayThirdParty_col_st2_size_small:attr.size==='small',replayThirdParty_col_st2_size_min:attr.size==='min',replayThirdParty_col_st2_checked:attr.checked,replayThirdParty_col_st2_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="icon"
                                refId="icon"
                                v-show="pvt_isShow.st2 === 'icon'"
                                :paraVarPair="pvt_st2.icon.paraVarPair"
                                :para="pvt_st2.icon.para"
                                :attr="pvt_st2.icon.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="replayThirdParty_row replayThirdParty_row_row3">
                    <div v-show="pvt_isWinShow.st3"
                         :class="{replayThirdParty_col:true,replayThirdParty_col_st3:true,replayThirdParty_col_st3_size_large:attr.size==='large',replayThirdParty_col_st3_size_medium:attr.size==='medium',replayThirdParty_col_st3_size_small:attr.size==='small',replayThirdParty_col_st3_size_min:attr.size==='min',replayThirdParty_col_st3_checked:attr.checked,replayThirdParty_col_st3_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="name"
                                refId="name"
                                v-show="pvt_isShow.st3 === 'name'"
                                :paraVarPair="pvt_st3.name.paraVarPair"
                                :para="pvt_st3.name.para"
                                :attr="pvt_st3.name.attr">
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

				thirdParty:this.para.thirdParty,
				pvt_subModuleMap: {
					vessel:['st2','st3'],
					subModule:['icon','name'],
				},
				pvt_isShow: {
					st2:null,
					st3:null,
				},
				pvt_isWinShow: {
					scThirdPartyWindow:true,
					st1:true,
					st2:true,
					st3:true,
				},
				pvt_eventPortInput: [],

				icon:null,
				name:null,
				color:null,
			};
		},
		watch: {
			thirdParty: {
				handler: function (val, oldVal) {
					if (val !== oldVal && this.paraVarPair.thirdParty) {
						if (this.number !== undefined) { // 循环
							this.$parent[this.paraVarPair.thirdParty][this.number] = val
						} else { // 非循环
							this.$parent[this.paraVarPair.thirdParty] = val
						}
					}
				},
				deep   : true
			},
		},
		computed:{
			pvt_st2:function(){
				return {
					icon:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							textAlign:'center',
							height:'40px',
                            fontSize:'40px',
							color:this.color,
							icon:this.icon,
						},
					},
				};
			},
			pvt_st3:function(){
				return {
					name:{
						paraVarPair:{
							textData:'name',
						},
						para:{
							textData:this.name,
						},
						attr:{
							isClick:true,
							textAlign:'center',
							height:'24px',
							color:'#333',
							fontSize:'14px',
							ellipsis:true,
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
			startModule: function (successCallBack, errorCallBack) {
				let $this = this;
				let dbFlag;
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
							$this.icon = $this.thirdParty.icon;
							$this.name = $this.thirdParty.name;
							$this.color=$this.thirdParty.color;
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(para.refArr, true,function () {
								para.nStep = 'startModule_loop';
								para.i=0;
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack)
								}
							}, para.errorCallBack);
							break;
						case 'startModule_loop':
							if(para.i===para.refArr.length) {
								para.nStep='end';
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
    .replayThirdParty_container {
        width:25%;
        /*height:100%;*/
    }
    .replayThirdParty_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .replayThirdParty_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .replayThirdParty_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .replayThirdParty_row {
        display:flex;
    }
    .replayThirdParty_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .replayThirdParty_col_scThirdPartyWindow_size_medium {
        //width:@replayThirdParty-scThirdPartyWindow-medium-width;
        width: 25%;
    }
    .replayThirdParty_col_st1_size_medium {
        width:@replayThirdParty-st1-medium-width;
        margin:@replayThirdParty-st1-medium-margin;
    }
    .replayThirdParty_col_st2_size_medium {
        width:@replayThirdParty-st2-medium-width;
    }
    .replayThirdParty_col_st2 {
        border-style:@replayThirdParty-st2-border-style;
    }
    .replayThirdParty_col_st3_size_medium {
        width:@replayThirdParty-st3-medium-width;
    }

</style>
