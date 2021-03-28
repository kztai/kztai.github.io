<template>
    <div v-show="pvt_isWinShow.appActivityWindow"
         :class="{appActivity_container:true,appActivity_col:true,appActivity_col_appActivityWindow:true,appActivity_col_appActivityWindow_size_large:attr.size==='large',appActivity_col_appActivityWindow_size_medium:attr.size==='medium',appActivity_col_appActivityWindow_size_small:attr.size==='small',appActivity_col_appActivityWindow_size_min:attr.size==='min',appActivity_col_appActivityWindow_checked:attr.checked,appActivity_col_appActivityWindow_disable:attr.disabled}" >
        <div class="appActivity_row appActivity_row_row1">
            <div v-show="pvt_isWinShow.ay1"
                 :class="{appActivity_col:true,appActivity_col_ay1:true,appActivity_col_ay1_size_large:attr.size==='large',appActivity_col_ay1_size_medium:attr.size==='medium',appActivity_col_ay1_size_small:attr.size==='small',appActivity_col_ay1_size_min:attr.size==='min',appActivity_col_ay1_checked:attr.checked,appActivity_col_ay1_disable:attr.disabled}" >

                <app-title-bar
                        ref="title"
                        refId="title"
                        v-show="pvt_isShow.ay1 === 'title'"
                        :paraVarPair="pvt_ay1.title.paraVarPair"
                        :para="pvt_ay1.title.para"
                        :attr="pvt_ay1.title.attr">
                </app-title-bar>
            </div>
        </div>
        <div class="appActivity_row appActivity_row_row2">
            <div v-show="pvt_isWinShow.ay2"
                 :class="{appActivity_col:true,appActivity_col_ay2:true,appActivity_col_ay2_size_large:attr.size==='large',appActivity_col_ay2_size_medium:attr.size==='medium',appActivity_col_ay2_size_small:attr.size==='small',appActivity_col_ay2_size_min:attr.size==='min',appActivity_col_ay2_checked:attr.checked,appActivity_col_ay2_disable:attr.disabled}" >

                <app-activity-title
                        ref="activity_title"
                        refId="activity_title"
                        v-show="pvt_isShow.ay2 === 'activity_title'"
                        :paraVarPair="pvt_ay2.activity_title.paraVarPair"
                        :para="pvt_ay2.activity_title.para"
                        :attr="pvt_ay2.activity_title.attr">
                </app-activity-title>
            </div>
        </div>
        <div class="appActivity_row appActivity_row_row3">
            <div v-show="pvt_isWinShow.ay3"
                 :class="{appActivity_col:true,appActivity_col_ay3:true,appActivity_col_ay3_size_large:attr.size==='large',appActivity_col_ay3_size_medium:attr.size==='medium',appActivity_col_ay3_size_small:attr.size==='small',appActivity_col_ay3_size_min:attr.size==='min',appActivity_col_ay3_checked:attr.checked,appActivity_col_ay3_disable:attr.disabled}" >

                <app-organizers
                        ref="organizers"
                        refId="organizers"
                        v-show="pvt_isShow.ay3 === 'organizers'"
                        :paraVarPair="pvt_ay3.organizers.paraVarPair"
                        :para="pvt_ay3.organizers.para"
                        :attr="pvt_ay3.organizers.attr">
                </app-organizers>
            </div>
        </div>
        <div class="appActivity_row appActivity_row_row4">
            <div v-show="pvt_isWinShow.ay4"
                 :class="{appActivity_col:true,appActivity_col_ay4:true,appActivity_col_ay4_size_large:attr.size==='large',appActivity_col_ay4_size_medium:attr.size==='medium',appActivity_col_ay4_size_small:attr.size==='small',appActivity_col_ay4_size_min:attr.size==='min',appActivity_col_ay4_checked:attr.checked,appActivity_col_ay4_disable:attr.disabled}" >

                <app-activity-detail
                        ref="detail"
                        refId="detail"
                        v-show="pvt_isShow.ay4 === 'detail'"
                        :paraVarPair="pvt_ay4.detail.paraVarPair"
                        :para="pvt_ay4.detail.para"
                        :attr="pvt_ay4.detail.attr">
                </app-activity-detail>
            </div>
        </div>
        <div class="appActivity_row appActivity_row_row5">
            <div v-show="pvt_isWinShow.ay5"
                 :class="{appActivity_col:true,appActivity_col_ay5:true,appActivity_col_ay5_size_large:attr.size==='large',appActivity_col_ay5_size_medium:attr.size==='medium',appActivity_col_ay5_size_small:attr.size==='small',appActivity_col_ay5_size_min:attr.size==='min',appActivity_col_ay5_checked:attr.checked,appActivity_col_ay5_disable:attr.disabled}" >

                <app-sign-up
                        ref="sign"
                        refId="sign"
                        v-show="pvt_isShow.ay5 === 'sign'"
                        :paraVarPair="pvt_ay5.sign.paraVarPair"
                        :para="pvt_ay5.sign.para"
                        :attr="pvt_ay5.sign.attr">
                </app-sign-up>
            </div>
        </div>
        <div class="appActivity_row appActivity_row_row6">
            <div v-show="pvt_isWinShow.ay6"
                 :class="{appActivity_col:true,appActivity_col_ay6:true,appActivity_col_ay6_size_large:attr.size==='large',appActivity_col_ay6_size_medium:attr.size==='medium',appActivity_col_ay6_size_small:attr.size==='small',appActivity_col_ay6_size_min:attr.size==='min',appActivity_col_ay6_checked:attr.checked,appActivity_col_ay6_disable:attr.disabled}" >

                <app-discuss
                        ref="discuss"
                        refId="discuss"
                        v-show="pvt_isShow.ay6 === 'discuss'"
                        :paraVarPair="pvt_ay6.discuss.paraVarPair"
                        :para="pvt_ay6.discuss.para"
                        :attr="pvt_ay6.discuss.attr">
                </app-discuss>
            </div>
        </div>
        <div class="appActivity_row appActivity_row_row7">
            <div v-show="pvt_isWinShow.ay7"
                 :class="{appActivity_col:true,appActivity_col_ay7:true,appActivity_col_ay7_size_large:attr.size==='large',appActivity_col_ay7_size_medium:attr.size==='medium',appActivity_col_ay7_size_small:attr.size==='small',appActivity_col_ay7_size_min:attr.size==='min',appActivity_col_ay7_checked:attr.checked,appActivity_col_ay7_disable:attr.disabled}" >

                <app-activity-footer
                        ref="footer"
                        refId="footer"
                        v-show="pvt_isShow.ay7 === 'footer'"
                        :paraVarPair="pvt_ay7.footer.paraVarPair"
                        :para="pvt_ay7.footer.para"
                        :attr="pvt_ay7.footer.attr">
                </app-activity-footer>
            </div>
        </div>

        <div :class="{appActivity_mask:true}"
             v-show="pvt_isShow.ay8 === 'map'">
            <div :class="{appActivity_dialog:true,appActivity_col:true,appActivity_col_ay8:true,appActivity_col_ay8_size_large:attr.size==='large',appActivity_col_ay8_size_medium:attr.size==='medium',appActivity_col_ay8_size_small:attr.size==='small',appActivity_col_ay8_size_min:attr.size==='min',appActivity_col_ay8_checked:attr.checked,appActivity_col_ay8_disable:attr.disabled}">
                <app-map
                        ref="map"
                        refId="map"
                        :paraVarPair="pvt_ay8.map.paraVarPair"
                        :para="pvt_ay8.map.para"
                        :attr="pvt_ay8.map.attr">
                </app-map>
            </div>
        </div>
        <div :class="{appActivity_mask:true}"
             v-if="pvt_isShow.ay9 === 'myRegistration'">
            <div :class="{appActivity_dialog:true,appActivity_col:true,appActivity_col_ay9:true,appActivity_col_ay9_size_large:attr.size==='large',appActivity_col_ay9_size_medium:attr.size==='medium',appActivity_col_ay9_size_small:attr.size==='small',appActivity_col_ay9_size_min:attr.size==='min',appActivity_col_ay9_checked:attr.checked,appActivity_col_ay9_disable:attr.disabled}">
                <app-my-registration
                        ref="myRegistration"
                        refId="myRegistration"
                        :paraVarPair="pvt_ay9.myRegistration.paraVarPair"
                        :para="pvt_ay9.myRegistration.para"
                        :attr="pvt_ay9.myRegistration.attr">
                </app-my-registration>
            </div>
        </div>
    </div>
</template>
<script>
	import libSys from '@/components/baseComponent/libSys.js';
	import libUpload from '@/components/baseComponent/libUpload.js';
	import appTitleBar from './titlebar/titleBar';
	import appActivityTitle from './activityDetail/activityDetail';
	import appOrganizers from './organizers/organizers';
	import appActivityDetail from './approvalDetail/approvalDetail';
	import appSignUp from './signUp/signUp';
	import appDiscuss from './discuss/discuss';
	import appActivityFooter from './footer/footer';
	import appMap from './activityDetail/map';
	import appMyRegistration from './myRegistration/myRegistration';
	export default {
		components: {appTitleBar,appActivityTitle,appOrganizers,appActivityDetail,appSignUp,appDiscuss,appActivityFooter,appMap,appMyRegistration},
		inject: ['sys'],
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['ay1','ay2','ay3','ay4','ay5','ay6','ay7','ay8','ay9'],
					subModule:['title','activity_title','organizers','detail','sign','discuss','footer','map','myRegistration'],
				},
				pvt_isShow: {
					ay1:null,
					ay2:null,
					ay3:null,
					ay4:null,
					ay5:null,
					ay6:null,
					ay7:null,
					ay8:null,
					ay9:null,
				},
				pvt_isWinShow: {
					appActivityWindow:true,
					ay1:true,
					ay2:true,
					ay3:true,
					ay4:true,
					ay5:true,
					ay6:true,
					ay7:true,
				},
				pvt_eventPortInput: ['backEvent'],

				activityId:null,
				groupActivityId:null,

			};
		},
		watch: {
		},
		computed:{
			pvt_ay1:function(){
				return {
					title:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							size:'medium',
						},
					},
				};
			},
			pvt_ay2:function(){
				return {
					activity_title:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							size:'medium',
						},
					},
				};
			},
			pvt_ay3:function(){
				return {
					organizers:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							size:'medium',
						},
					},
				};
			},
			pvt_ay4:function(){
				return {
					detail:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							size:'medium',
						},
					},
				};
			},
			pvt_ay5:function(){
				return {
					sign:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							size:'medium',
						},
					},
				};
			},
			pvt_ay6:function(){
				return {
					discuss:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							size:'medium',
						},
					},
				};
			},
			pvt_ay7:function(){
				return {
					footer:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							size:'medium',
						},
					},
				};
			},
			pvt_ay8:function(){
				return {
					map:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							size:'medium',
						},
					},
				};
			},
			pvt_ay9:function(){
				return {
					myRegistration:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							size:'medium',
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
			startModule: function (record,successCallBack, errorCallBack) { //通过id  获取原纪录，在次下载终端数据
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
						case 'getSourceRecord':
							$this.sys.api.getSourceRecord('groupActivity', [record],function (result) {
								$this.groupActivityId=result[0];
								para.record= result[0];
								para.nStep='dataInput';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'dataInput':
							$this.sys.api.dataInput('groupActivity',[para.record],'',function (result) {
								para.recordInfo=result[0]; //得到页面数据  groupActivity的id
								$this.activityId=result[0];
								para.nStep='showSubModule_title';
								if (++dbFlag === 2) {
									$this.startModule(successCallBack, errorCallBack)
								}
							},para.errorCallBack)
							break;
						//	case 得到主办方的信息   $this.ep.groupInfoEvent(function(result){},function(){})
						case 'showSubModule_title':
							para.refArr = $this.pvt_subModuleMap.subModule;
							$this.showSubModule(['title','activity_title','organizers','detail','sign','discuss','footer'],true,function() {
								para.nStep='startModule_title';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_title':
							$this.$refs.title.startModule(function() {
								para.nStep='startModule_activity_title';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_activity_title':
							$this.$refs.activity_title.startModule(para.recordInfo,function() {
								para.nStep='startModule_activity_organizers';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_activity_organizers':
							$this.$refs.organizers.startModule(function() {
								para.nStep='startModule_activity_detail';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_activity_detail':
							$this.$refs.detail.startModule(para.recordInfo,function() {
								para.nStep='startModule_activity_sign';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_activity_sign':
							$this.$refs.sign.startModule(para.record,function() {
								para.nStep='startModule_activity_discuss';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_activity_discuss':
							$this.$refs.discuss.startModule(para.record,name,function() {
								para.nStep='startModule_activity_footer';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_activity_footer':
							$this.$refs.footer.startModule(function() {
								para.nStep='end';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						// case 'startModule_top':
						// 	$this.$refs.top.startModule(function() {
						// 		para.nStep='end';
						// 		if (++dbFlag === 2) {
						// 			$this.startModule(record,successCallBack, errorCallBack)
						// 		}
						// 	},para.errorCallBack);
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
			backClick:function(){
			    let $this=this;
                $this.hideSelfModule(this.refId, function () {
				    $this.ep.backEvent()
                },function () {});
            },
			openMap:function(value){
				let $this=this;
				$this.showSubModule(['map'],true,function() {
					$this.$nextTick(()=>{
						$this.sm.map.startModule(value,function () {},function () {})
					})
				},function () {});
            },
			openRegistration:function(){
				let $this=this;
				$this.showSubModule(['myRegistration'],true,function() {
					$this.sm.myRegistration.startModule($this.activityId,function () {},function () {})
				},function () {});
            },
			title_backEvent:function(){
				this.backClick();
			},
			activity_title_openAddressMap:function(value){
				this.openMap(value);
			},
			footer_openClickEvent:function(){
				this.openRegistration();
			},
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_yyt";
    .appActivity_container {
        width:100%;
        height:100%;
        overflow-x: hidden;
    }
    .appActivity_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
        z-index: 99;
    }
    .appActivity_dialog {
          position:absolute;
          left:0;
          top:0;
      }
    .appActivity_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .appActivity_row {
        display:flex;
    }
    .appActivity_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .appActivity_col_appActivityWindow_size_medium {
        width:@appActivity-appActivityWindow-medium-width;
        padding:@appActivity-appActivityWindow-medium-padding;
    }
    .appActivity_col_appActivityWindow {
        background-color:mix(@appActivity-appActivityWindow-background-color,#fff,@appActivity-appActivityWindow-background-color-opacity);
    }
    .appActivity_col_ay1_size_medium {
        width:@appActivity-ay1-medium-width;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
    }
    .appActivity_col_ay2_size_medium {
        width:@appActivity-ay2-medium-width;
    }
    .appActivity_col_ay3_size_medium {
        width:@appActivity-ay3-medium-width;
    }
    .appActivity_col_ay4_size_medium {
        width:@appActivity-ay4-medium-width;
    }
    .appActivity_col_ay5_size_medium {
        width:@appActivity-ay5-medium-width;
    }
    .appActivity_col_ay6_size_medium {
        width:@appActivity-ay6-medium-width;
    }
    .appActivity_col_ay7_size_medium {
        width:@appActivity-ay7-medium-width;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 99;
    }
    .appActivity_col_ay8_size_medium {
        width:@appActivity-ay8-medium-width;
        height:@appActivity-ay8-medium-height;
    }
    .appActivity_col_ay9_size_medium {
        width:@appActivity-ay9-medium-width;
        left: 0;
        bottom: 0;
        position: fixed;
        top: auto;
        //height:@appActivity-ay9-medium-height;

    }

    /*.address_map {*/
        /*width: 100%;*/
        /*position: fixed;*/
        /*left: 0;*/
        /*top: 0;*/
        /*bottom: 0;*/
    /*}*/
</style>
