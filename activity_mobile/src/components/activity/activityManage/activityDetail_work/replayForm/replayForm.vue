<template>
    <div v-show="pvt_isWinShow.replayFormWindow"
         :class="{replayForm_container:true,replayForm_col:true,replayForm_col_replayFormWindow:true,replayForm_col_replayFormWindow_size_large:attr.size==='large',replayForm_col_replayFormWindow_size_medium:attr.size==='medium',replayForm_col_replayFormWindow_size_small:attr.size==='small',replayForm_col_replayFormWindow_size_min:attr.size==='min',replayForm_col_replayFormWindow_checked:attr.checked,replayForm_col_replayFormWindow_disable:attr.disabled}" >

        <div class="replayForm_row replayForm_row_row1">
            <div v-show="pvt_isWinShow.rf1"
                 :class="{replayForm_col:true,replayForm_col_rf1:true,replayForm_col_rf1_size_large:attr.size==='large',replayForm_col_rf1_size_medium:attr.size==='medium',replayForm_col_rf1_size_small:attr.size==='small',replayForm_col_rf1_size_min:attr.size==='min',replayForm_col_rf1_checked:attr.checked,replayForm_col_rf1_disable:attr.disabled}" >

                <div class="replayForm_row replayForm_row_row2">
                    <div v-show="pvt_isWinShow.rf2"
                         :class="{replayForm_col:true,replayForm_col_rf2:true,replayForm_col_rf2_size_large:attr.size==='large',replayForm_col_rf2_size_medium:attr.size==='medium',replayForm_col_rf2_size_small:attr.size==='small',replayForm_col_rf2_size_min:attr.size==='min',replayForm_col_rf2_checked:attr.checked,replayForm_col_rf2_disable:attr.disabled}" >

                    </div>
                    <div v-show="pvt_isWinShow.rf3"
                         :class="{replayForm_col:true,replayForm_col_rf3:true,replayForm_col_rf3_size_large:attr.size==='large',replayForm_col_rf3_size_medium:attr.size==='medium',replayForm_col_rf3_size_small:attr.size==='small',replayForm_col_rf3_size_min:attr.size==='min',replayForm_col_rf3_checked:attr.checked,replayForm_col_rf3_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="title"
                                refId="title"
                                v-show="pvt_isShow.rf3 === 'title'"
                                :paraVarPair="pvt_rf3.title.paraVarPair"
                                :para="pvt_rf3.title.para"
                                :attr="pvt_rf3.title.attr">
                        </lm2b-link-text>
                    </div>
                    <div v-show="pvt_isWinShow.rf4"
                         :class="{replayForm_col:true,replayForm_col_rf4:true,replayForm_col_rf4_size_large:attr.size==='large',replayForm_col_rf4_size_medium:attr.size==='medium',replayForm_col_rf4_size_small:attr.size==='small',replayForm_col_rf4_size_min:attr.size==='min',replayForm_col_rf4_checked:attr.checked,replayForm_col_rf4_disable:attr.disabled}" >

                        <lm2b-link-text
                                ref="close"
                                refId="close"
                                v-show="pvt_isShow.rf4 === 'close'"
                                :paraVarPair="pvt_rf4.close.paraVarPair"
                                :para="pvt_rf4.close.para"
                                :attr="pvt_rf4.close.attr">
                        </lm2b-link-text>
                    </div>
                </div>
            </div>
        </div>
        <div class="replayForm_row replayForm_row_row3">
            <div v-show="pvt_isWinShow.rf5"
                 :class="{replayForm_col:true,replayForm_col_rf5:true,replayForm_col_rf5_size_large:attr.size==='large',replayForm_col_rf5_size_medium:attr.size==='medium',replayForm_col_rf5_size_small:attr.size==='small',replayForm_col_rf5_size_min:attr.size==='min',replayForm_col_rf5_checked:attr.checked,replayForm_col_rf5_disable:attr.disabled}" >

                <lm2b-input-text
                        ref="content"
                        refId="content"
                        v-show="pvt_isShow.rf5 === 'content'"
                        :paraVarPair="pvt_rf5.content.paraVarPair"
                        :para="pvt_rf5.content.para"
                        :attr="pvt_rf5.content.attr">
                </lm2b-input-text>
            </div>
        </div>
        <div class="replayForm_row replayForm_row_row4">
            <div v-show="pvt_isWinShow.rf6"
                 :class="{replayForm_col:true,replayForm_col_rf6:true,replayForm_col_rf6_size_large:attr.size==='large',replayForm_col_rf6_size_medium:attr.size==='medium',replayForm_col_rf6_size_small:attr.size==='small',replayForm_col_rf6_size_min:attr.size==='min',replayForm_col_rf6_checked:attr.checked,replayForm_col_rf6_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="btn"
                        refId="btn"
                        v-show="pvt_isShow.rf6 === 'btn'"
                        :paraVarPair="pvt_rf6.btn.paraVarPair"
                        :para="pvt_rf6.btn.para"
                        :attr="pvt_rf6.btn.attr">
                </lm2b-link-text>
            </div>
        </div>

    </div>
</template>
<script>
	import libSys from '@/components/baseComponent/libSys.js';
	import libUpload from '@/components/baseComponent/libUpload.js';
	import { Toast } from 'vant';
	export default {
		components: {},
		inject: ['sys'],
		props: ['refId','para','attr','number'],
		data: function() {
			return {
				pvt_subModuleMap: {
					vessel:['rf3','rf4','rf5','rf6'],
					subModule:['title','close','content','btn'],
				},
				pvt_isShow: {
					rf3:null,
					rf4:null,
					rf5:null,
					rf6:null,
				},
				pvt_isWinShow: {
					replayFormWindow:true,
					rf1:true,
					rf2:true,
					rf3:true,
					rf4:true,
					rf5:true,
					rf6:true,
				},
				pvt_eventPortInput: ['replayFromEvent'],

				title:null,
				content:null,
                record: null,//新增变量
			};
		},
		watch: {
		},
		computed:{
			pvt_rf3:function(){
				return {
					title:{
						paraVarPair:{
							textData:'title',
						},
						para:{
							textData:this.title,
						},
						attr:{
							textAlign:'center',
							height:'40px',
							color:'#333',
							fontSize:'16px',
						},
					},
				};
			},
			pvt_rf4:function(){
				return {
					close:{
						paraVarPair:{
						},
						para:{
						},
						attr:{
							isClick:true,
							height:'40px',
							color:'#999',
							fontSize:'15px',
                            icon:'van-icon-cross',
						},
					},
				};
			},
			pvt_rf5:function(){
				return {
					content:{
						paraVarPair:{
							text:'content',
						},
						para:{
							text:this.content,
						},
						attr:{
							placeholder:'留下你想说的话',
							type:'textarea',
							autosize:{minHeight:150, maxHeight:150},
							isPlaceholder:false,
						},
					},
				};
			},
			pvt_rf6:function(){
				return {
					btn:{
						paraVarPair:{
						},
						para:{
							textData:'发表',
						},
						attr:{
							isClick:true,
							textAlign:'center',
							height:'48px',
							fontSize:'16px',
							background:'#12B0FF',
                            color:'#fff',
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
				$this.mac = mac.mac;
				let data;
				let tableName;
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
                        case 'groupActivityDiscuss':
                        	$this.record = record;
	                        tableName = $this.mac.tb.groupActivityDiscuss;
	                        data = {};
	                        data[$this.mac.fd.id]=[record];
	                        data[$this.mac.fd.groupActivityDiscuss.name]=[];
	                        $this.sys.api.recordRead(tableName, data, function (result) {
		                        $this.title = `回复  ${data[$this.mac.fd.groupActivityDiscuss.name][0]}`;
		                        para.nStep='showSubModule';
		                        if (++dbFlag === 2) {
			                        $this.startModule(record, successCallBack, errorCallBack)
		                        }
                            }, para.errorCallBack);
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
			saveContent:function(){
				this.saveContent_(function () {},function () {})
            },
			closeClick:function(){
				this.hideSelfModule(this.refId, function () {},function () {});
            },
			close_textClickEvent:function(){
				this.closeClick();
			},
			btn_textClickEvent:function(){
				this.saveContent();
			},
			getStrTime() {
				const date = new Date();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if(month<10) month = '0'+month;
				if(day<10) day = '0'+day;
				return date.getFullYear()+'-'+month+'-'+day +' '+date.getHours()+':'+date.getMinutes();
			},
            saveContent_:function(successCallBack,errorCallBack) {
	            let $this = this;
	            let dbFlag;
	            $this.mac = mac.mac;
	            let data;
	            let tableName;
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
			            case 'toast':
				            if($this.content) {
					            para.nStep='recordModify';
				            }else {
					            Toast({
						            message:'回复信息不能为空',
						            duration:1000
					            });
					            para.nStep='end';
				            }
				            dbFlag++;
				            break;
			            case 'recordModify':
				            //通过id请求数据表
				            tableName = $this.mac.tb.groupActivityDiscuss;
				            data = {};
				            data[$this.mac.fd.id] = [$this.record]; // 必须定义
				            data[$this.mac.fd.groupActivityDiscuss.answerContent] = [$this.content];
				            data[$this.mac.fd.groupActivityDiscuss.answerTime] = [$this.getStrTime()];
				            $this.sys.api.recordModify(tableName, data, function (result) {
                                para.nStep='uploadData';
					            if (++dbFlag === 2) {
						            $this.saveContent_(successCallBack, errorCallBack)
					            }
					        }, para.errorCallBack);
				            break;
			            case 'uploadData':
				            data={
					            objectName:[$this.mac.tb.groupActivityDiscuss],
					            record:[[$this.record]]
				            };
				            $this.uploadData(data, function(){
					            para.nStep = 'replayFromEvent';
					            if (++dbFlag === 2) {
						            $this.saveContent_(successCallBack, errorCallBack)
					            }
				            }, para.errorCallBack);
				            break;
			            case 'replayFromEvent':
				            setTimeout(function() {
					            $this.ep.replayFromEvent();
				            },0);
				            dbFlag++;
				            para.nStep='hideSelfModule';
				            break;
			            case 'hideSelfModule':
				            $this.hideSelfModule($this.refId, function () {
					            para.nStep='success';
					            if (++dbFlag === 2) {
						            $this.saveContent_(successCallBack, errorCallBack)
					            }
				            }, para.errorCallBack);
				            break;
                        case 'success':
	                        Toast({
                                message:'回复成功',
		                        duration:1000
	                        });
	                        para.nStep='end';
	                        dbFlag++;
                        	break;
			            case 'end':
				            para.successCallBack();
				            return
		            }
		            if (++dbFlag === 1) {
			            return
		            }
	            }
            }
		},
	};
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_yyt";
    .replayForm_container {
        width:100%;
        height:100%;
    }
    .replayForm_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .replayForm_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .replayForm_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .replayForm_row {
        display:flex;
    }
    .replayForm_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .replayForm_col_replayFormWindow_size_medium {
        width:@replayForm-replayFormWindow-medium-width;
    }
    .replayForm_col_replayFormWindow {
        background-color:mix(@replayForm-replayFormWindow-background-color,#fff,@replayForm-replayFormWindow-background-color-opacity);
    }
    .replayForm_col_rf1_size_medium {
        width:@replayForm-rf1-medium-width;
        height:@replayForm-rf1-medium-height;
    }
    .replayForm_col_rf1 {
        border-style:@replayForm-rf1-border-style;
        border-width:@replayForm-rf1-border-width;
        border-color:mix(@replayForm-rf1-border-color,#fff,@replayForm-rf1-hover-border-color-opacity);
    }
    .replayForm_col_rf2_size_medium {
        width:@replayForm-rf2-medium-width;
    }
    .replayForm_col_rf3_size_medium {
        width:@replayForm-rf3-medium-width;
    }
    .replayForm_col_rf4_size_medium {
        width:@replayForm-rf4-medium-width;
        align-items:@replayForm-rf4-medium-horizontal-position;
        padding:@replayForm-rf4-medium-padding;
    }
    .replayForm_col_rf4_size_large {
        align-items:@replayForm-rf4-large-horizontal-position;
    }
    .replayForm_col_rf4_size_small {
        align-items:@replayForm-rf4-small-horizontal-position;
    }
    .replayForm_col_rf4_size_min {
        align-items:@replayForm-rf4-mini-horizontal-position;
    }
    .replayForm_col_rf5_size_medium {
        width:@replayForm-rf5-medium-width;
        padding:@replayForm-rf5-medium-padding;
    }
    .replayForm_col_rf6_size_medium {
        width:@replayForm-rf6-medium-width;
        padding:@replayForm-rf6-medium-padding;
    }


</style>
