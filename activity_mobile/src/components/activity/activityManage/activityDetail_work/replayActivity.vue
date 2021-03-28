<template>
    <div v-show="pvt_isWinShow.replayActivityWindow"
         :class="{replayActivity_container:true,replayActivity_col:true,replayActivity_col_replayActivityWindow:true,replayActivity_col_replayActivityWindow_size_large:attr.size==='large',replayActivity_col_replayActivityWindow_size_medium:attr.size==='medium',replayActivity_col_replayActivityWindow_size_small:attr.size==='small',replayActivity_col_replayActivityWindow_size_min:attr.size==='min',replayActivity_col_replayActivityWindow_checked:attr.checked,replayActivity_col_replayActivityWindow_disable:attr.disabled}" >

        <div class="replayActivity_row replayActivity_row_row1">
            <div v-show="pvt_isWinShow.ra1"
                 :class="{replayActivity_col:true,replayActivity_col_ra1:true,replayActivity_col_ra1_size_large:attr.size==='large',replayActivity_col_ra1_size_medium:attr.size==='medium',replayActivity_col_ra1_size_small:attr.size==='small',replayActivity_col_ra1_size_min:attr.size==='min',replayActivity_col_ra1_checked:attr.checked,replayActivity_col_ra1_disable:attr.disabled}" >

                <replay-title-bar
                        ref="title"
                        refId="title"
                        v-show="pvt_isShow.ra1 === 'title'"
                        :paraVarPair="pvt_ra1.title.paraVarPair"
                        :para="pvt_ra1.title.para"
                        :attr="pvt_ra1.title.attr">
                </replay-title-bar>
            </div>
        </div>
        <div class="replayActivity_row replayActivity_row_row2">
            <div v-show="pvt_isWinShow.ra2"
                 :class="{replayActivity_col:true,replayActivity_col_ra2:true,replayActivity_col_ra2_size_large:attr.size==='large',replayActivity_col_ra2_size_medium:attr.size==='medium',replayActivity_col_ra2_size_small:attr.size==='small',replayActivity_col_ra2_size_min:attr.size==='min',replayActivity_col_ra2_checked:attr.checked,replayActivity_col_ra2_disable:attr.disabled}" >

                <replay-activity-title
                        ref="activity_title"
                        refId="activity_title"
                        v-show="pvt_isShow.ra2 === 'activity_title'"
                        :paraVarPair="pvt_ra2.activity_title.paraVarPair"
                        :para="pvt_ra2.activity_title.para"
                        :attr="pvt_ra2.activity_title.attr">
                </replay-activity-title>
            </div>
        </div>
        <div class="replayActivity_row replayActivity_row_row3">
            <div v-show="pvt_isWinShow.ra3"
                 :class="{replayActivity_col:true,replayActivity_col_ra3:true,replayActivity_col_ra3_size_large:attr.size==='large',replayActivity_col_ra3_size_medium:attr.size==='medium',replayActivity_col_ra3_size_small:attr.size==='small',replayActivity_col_ra3_size_min:attr.size==='min',replayActivity_col_ra3_checked:attr.checked,replayActivity_col_ra3_disable:attr.disabled}" >

                <replay-organizers
                        ref="organizers"
                        refId="organizers"
                        v-show="pvt_isShow.ra3 === 'organizers'"
                        :paraVarPair="pvt_ra3.organizers.paraVarPair"
                        :para="pvt_ra3.organizers.para"
                        :attr="pvt_ra3.organizers.attr">
                </replay-organizers>
            </div>
        </div>
        <div class="replayActivity_row replayActivity_row_row4">
            <div v-show="pvt_isWinShow.ra4"
                 :class="{replayActivity_col:true,replayActivity_col_ra4:true,replayActivity_col_ra4_size_large:attr.size==='large',replayActivity_col_ra4_size_medium:attr.size==='medium',replayActivity_col_ra4_size_small:attr.size==='small',replayActivity_col_ra4_size_min:attr.size==='min',replayActivity_col_ra4_checked:attr.checked,replayActivity_col_ra4_disable:attr.disabled}" >

                <replay-activity-detail
                        ref="detail"
                        refId="detail"
                        v-show="pvt_isShow.ra4 === 'detail'"
                        :paraVarPair="pvt_ra4.detail.paraVarPair"
                        :para="pvt_ra4.detail.para"
                        :attr="pvt_ra4.detail.attr">
                </replay-activity-detail>
            </div>
        </div>
        <div class="replayActivity_row replayActivity_row_row5">
            <div v-show="pvt_isWinShow.ra5"
                 :class="{replayActivity_col:true,replayActivity_col_ra5:true,replayActivity_col_ra5_size_large:attr.size==='large',replayActivity_col_ra5_size_medium:attr.size==='medium',replayActivity_col_ra5_size_small:attr.size==='small',replayActivity_col_ra5_size_min:attr.size==='min',replayActivity_col_ra5_checked:attr.checked,replayActivity_col_ra5_disable:attr.disabled}" >

                <replay-sign-up
                        ref="sign"
                        refId="sign"
                        v-show="pvt_isShow.ra5 === 'sign'"
                        :paraVarPair="pvt_ra5.sign.paraVarPair"
                        :para="pvt_ra5.sign.para"
                        :attr="pvt_ra5.sign.attr">
                </replay-sign-up>
            </div>
        </div>
        <div class="replayActivity_row replayActivity_row_row6">
            <div v-show="pvt_isWinShow.ra6"
                 :class="{replayActivity_col:true,replayActivity_col_ra6:true,replayActivity_col_ra6_size_large:attr.size==='large',replayActivity_col_ra6_size_medium:attr.size==='medium',replayActivity_col_ra6_size_small:attr.size==='small',replayActivity_col_ra6_size_min:attr.size==='min',replayActivity_col_ra6_checked:attr.checked,replayActivity_col_ra6_disable:attr.disabled}" >

                <replay-discuss
                        ref="discuss"
                        refId="discuss"
                        v-show="pvt_isShow.ra6 === 'discuss'"
                        :paraVarPair="pvt_ra6.discuss.paraVarPair"
                        :para="pvt_ra6.discuss.para"
                        :attr="pvt_ra6.discuss.attr">
                </replay-discuss>
            </div>
        </div>

        <div :class="{replayActivity_mask:true}"
             v-if="pvt_isShow.share === 'shareDialog'">
            <div :class="{replayActivity_dialog:true,replayActivity_col:true,replayActivity_col_share:true,replayActivity_col_share_size_large:attr.size==='large',replayActivity_col_share_size_medium:attr.size==='medium',replayActivity_col_share_size_small:attr.size==='small',replayActivity_col_share_size_min:attr.size==='min',replayActivity_col_share_checked:attr.checked,replayActivity_col_share_disable:attr.disabled}">
                <replay-share
                        ref="shareDialog"
                        refId="shareDialog"
                        :paraVarPair="pvt_share.shareDialog.paraVarPair"
                        :para="pvt_share.shareDialog.para"
                        :attr="pvt_share.shareDialog.attr">
                </replay-share>
            </div>
        </div>
        <div :class="{replayActivity_mask:true}"
             v-if="pvt_isShow.map === 'mapDialog'">
            <div :class="{replayActivity_dialog:true,replayActivity_col:true,replayActivity_col_map:true,replayActivity_col_map_size_large:attr.size==='large',replayActivity_col_map_size_medium:attr.size==='medium',replayActivity_col_map_size_small:attr.size==='small',replayActivity_col_map_size_min:attr.size==='min',replayActivity_col_map_checked:attr.checked,replayActivity_col_map_disable:attr.disabled}">
                <replay-map
                        ref="mapDialog"
                        refId="mapDialog"
                        :paraVarPair="pvt_map.mapDialog.paraVarPair"
                        :para="pvt_map.mapDialog.para"
                        :attr="pvt_map.mapDialog.attr">
                </replay-map>
            </div>
        </div>
        <div :class="{replayActivity_mask:true}"
             v-if="pvt_isShow.replay === 'replayDialog'">
            <div :class="{replayActivity_dialog:true,replayActivity_col:true,replayActivity_col_replay:true,replayActivity_col_replay_size_large:attr.size==='large',replayActivity_col_replay_size_medium:attr.size==='medium',replayActivity_col_replay_size_small:attr.size==='small',replayActivity_col_replay_size_min:attr.size==='min',replayActivity_col_replay_checked:attr.checked,replayActivity_col_replay_disable:attr.disabled}">
                <replay-form
                        ref="replayDialog"
                        refId="replayDialog"
                        :paraVarPair="pvt_replay.replayDialog.paraVarPair"
                        :para="pvt_replay.replayDialog.para"
                        :attr="pvt_replay.replayDialog.attr">
                </replay-form>
            </div>
        </div>
    </div>
</template>
<script>
	import libSys from '@/components/baseComponent/libSys.js';
	import libUpload from '@/components/baseComponent/libUpload.js';
	import replayTitleBar from './titleBar/titleBar';
	import replayActivityTitle from './activityTitle/activityTitle';
	import replayOrganizers from './organizers/organizers';
	import replayActivityDetail from './activityDetail/activityDetail';
	import replaySignUp from './sign/sign';
	import replayDiscuss from './discuss/discuss';
	import replayShare from './shareDialog/shareDialog';
	import replayMap from './activityTitle/map';
	import replayForm from './replayForm/replayForm';
	export default {
		components: {replayTitleBar,replayActivityTitle,replayOrganizers,replayActivityDetail,replaySignUp,replayDiscuss,replayShare,replayMap,replayForm},
		inject: ['sys'],
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['ra1','ra2','ra3','ra4','ra5','ra6','share','map','replay'],
					subModule:['title','activity_title','organizers','detail','sign','discuss','shareDialog','mapDialog','replayDialog'],
				},
				pvt_isShow: {
					ra1:null,
					ra2:null,
					ra3:null,
					ra4:null,
					ra5:null,
					ra6:null,
					share:null,
					map:null,
					replay:null,
				},
				pvt_isWinShow: {
					replayActivityWindow:true,
					ra1:true,
					ra2:true,
					ra3:true,
					ra4:true,
					ra5:true,
					ra6:true,
				},
				pvt_eventPortInput: ['backEvent'],

			};
		},
		watch: {
		},
		computed:{
			pvt_ra1:function(){
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
			pvt_ra2:function(){
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
			pvt_ra3:function(){
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
			pvt_ra4:function(){
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
			pvt_ra5:function(){
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
			pvt_ra6:function(){
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
			pvt_share:function(){
				return {
					shareDialog:{
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
			pvt_map:function(){
				return {
					mapDialog:{
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
			pvt_replay:function(){
				return {
					replayDialog:{
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
							$this.showSubModule(['title','activity_title','organizers','detail','sign','discuss'],true,function() {
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
								para.nStep='startModule_activity_describe';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_activity_describe':
							$this.$refs.detail.startModule(para.recordInfo,function() {
								para.nStep='startModule_activity_signUp';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_activity_signUp':
							$this.$refs.sign.startModule(para.record,function() {
								para.nStep='startModule_activity_discuss';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
							break;
						case 'startModule_activity_discuss':
							$this.$refs.discuss.startModule(para.record,name,function() {
								para.nStep='end';
								if (++dbFlag === 2) {
									$this.startModule(record,successCallBack, errorCallBack)
								}
							},para.errorCallBack);
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
			openShare:function(){
				let $this =this;
				$this.showSubModule(['shareDialog'],true,function() {
					$this.$nextTick(()=>{
						$this.sm.shareDialog.startModule(function () {},function () {})
                    })
				},function () {});
            },
			backClick:function(){
			    let that = this;
				this.hideSelfModule(this.refId, function () {
				    that.ep.backEvent()
                },function () {});
            },
			openMap:function(value){
				let $this =this;
				$this.showSubModule(['mapDialog'],true,function() {
					$this.$nextTick(()=>{
						$this.sm.mapDialog.startModule(value,function () {},function () {})
					})
				},function () {});
            },
			openReplay:function(record){
				//打开对话框
                let $this=this;
				$this.showSubModule(['replayDialog'],true,function() {
					$this.$nextTick(()=>{
						$this.sm.replayDialog.startModule(record,function () {},function () {})
					})
				},function () {});
            },
            //调用discuss模块下的公共方法
			refreshDiscuss() {
				let $this = this;
				$this.sm.discuss.refreshDiscuss(function () {},function () {})
            },
			title_backEvent:function(){
				this.backClick();
			},
			title_shareClick:function(){
				this.openShare();
			},
			activity_title_openAddressMap:function(value){
				this.openMap(value);
			},
			discuss_ReplayEvent:function(id){
				this.openReplay(id);
			},
			replayDialog_replayFromEvent:function () {
                this.refreshDiscuss();
			}
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_yyt";
    .replayActivity_container {
        width:100%;
        height:100%;
    }
    .replayActivity_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
        z-index: 99;
    }
    .replayActivity_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .replayActivity_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .replayActivity_row {
        display:flex;
    }
    .replayActivity_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .replayActivity_col_replayActivityWindow_size_medium {
        width:@replayActivity-replayActivityWindow-medium-width;
        margin:@replayActivity-replayActivityWindow-medium-margin;
        padding:@replayActivity-replayActivityWindow-medium-padding;
    }
    .replayActivity_col_replayActivityWindow {
        background-color:mix(@replayActivity-replayActivityWindow-background-color,#fff,@replayActivity-replayActivityWindow-background-color-opacity);
    }
    .replayActivity_col_ra1_size_medium {
        width:@replayActivity-ra1-medium-width;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
    }
    .replayActivity_col_ra2_size_medium {
        width:@replayActivity-ra2-medium-width;
    }
    .replayActivity_col_ra3_size_medium {
        width:@replayActivity-ra3-medium-width;
    }
    .replayActivity_col_ra4_size_medium {
        width:@replayActivity-ra4-medium-width;
    }
    .replayActivity_col_ra5_size_medium {
        width:@replayActivity-ra5-medium-width;
    }
    .replayActivity_col_ra6_size_medium {
        width:@replayActivity-ra6-medium-width;
    }
    .replayActivity_col_share_size_medium {
        //height:@replayActivity-share-medium-height;
        width:@replayActivity-share-medium-width;
    }
    .replayActivity_col_map_size_medium {
        //width:@replayActivity-map-medium-width;
        //height:@replayActivity-map-medium-height;
        width: 100%;
        height: 100%;
    }
    .replayActivity_col_replay_size_medium {
        //width:@replayActivity-replay-medium-width;
        //height:@replayActivity-replay-medium-height;
        width: 100%;
    }

</style>
