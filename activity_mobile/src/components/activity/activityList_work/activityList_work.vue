<template>
    <div v-show="pvt_isWinShow.activityList_workWindow"
         :class="{activityList_work_container:true,activityList_work_col:true,activityList_work_col_activityList_workWindow:true,activityList_work_col_activityList_workWindow_size_medium:true}">

        <div class="activityList_work_row activityList_work_row_row1">
            <div v-show="pvt_isWinShow.myManage"
                 :class="{activityList_work_col:true,activityList_work_col_myManage:true,activityList_work_col_myManage_size_medium:true}">

                <my-manage
                        ref="myManageRef"
                        refId="myManageRef"
                        v-show="pvt_isShow.myManage === 'myManageRef'"
                        :paraVarPair="pvt_myManage.myManageRef.paraVarPair"
                        :para="pvt_myManage.myManageRef.para"
                        :attr="pvt_myManage.myManageRef.attr">
                </my-manage>
            </div>
        </div>

        <div :class="{activityList_work_mask:true}"
             v-if="pvt_isShow.edit === 'editRef'">
            <div :class="{activityList_work_dialog:true,activityList_work_col:true,activityList_work_col_edit:true,activityList_work_col_edit_size_medium:true}">
                <mcb-release-activity
                        ref="editRef"
                        refId="editRef"
                        :paraVarPair="pvt_edit.editRef.paraVarPair"
                        :para="pvt_edit.editRef.para"
                        :attr="pvt_edit.editRef.attr">
                </mcb-release-activity>
            </div>
        </div>
        <div :class="{activityList_work_mask:true}"
             v-if="pvt_isShow.detail === 'detailRef'">
            <div :class="{activityList_work_dialog:true,activityList_work_col:true,activityList_work_col_detail:true,activityList_work_col_detail_size_medium:true}">
                <app-activity
                        ref="detailRef"
                        refId="detailRef"
                        :paraVarPair="pvt_detail.detailRef.paraVarPair"
                        :para="pvt_detail.detailRef.para"
                        :attr="pvt_detail.detailRef.attr">
                </app-activity>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import myManage from './myManage/myManage';
    import appActivity from './activityDetail_view/approvalActivity';
    import mcbReleaseActivity from './activityEdit/releaseActivity';

    export default {
        components: {myManage, appActivity, mcbReleaseActivity},
        props: ['refId', 'para', 'attr', 'number'],
        provide: function () {
            return {
                sys: this.sys,
            };
        },
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['myManage', 'detail', 'edit'],
                    subModule: ['myManageRef', 'detailRef', 'editRef'],
                },
                pvt_isShow: {
                    myManage: null,
                    detail: null,
                    edit: null,
                },
                pvt_isWinShow: {
                    activityList_workWindow: true,
                    myManage: true,
                },
                pvt_eventPortInput: ['activityDraftSaveEvent', 'releaseSuccessEvent', 'delClickEvent', 'backClickEvent', 'closeClickEvent', 'activityClickEvent', 'showUploadEvent', 'showManageEvent', 'showCheckEvent', 'activityApprovalEvent'],

                sys: {
                    api: null,
                    lib: null
                },

                mac:mac.mac
            };
        },
        watch: {},
        computed: {
            pvt_myManage: function () {
                return {
                    myManageRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_detail: function () {
                return {
                    detailRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_edit: function () {
                return {
                    editRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
        },
        created: function () {
            this.sys.lib = Object.assign({}, libSys, libUpload);
            Object.assign(this, this.sys.lib);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (api, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'activityList_start';
                let dbFlag;
                let tableName;
                let dbData;
                let record;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
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
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'releaseStart':
                            that.sys.api = api;

                            that.forceUpdateData(function () {
                                that.sm.myManageRef.startModule(function () {
                                    para.nStep = 'showSubModule';
                                    if (++dbFlag === 2) {
                                        that.startModule(api, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule('myManageRef', true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(api, successCallBack, errorCallBack)
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

            showDetail: function (curActivityId) {
                let that = this;
                that.showSubModule('detailRef', true, function () {
                    that.sm.detailRef.startModule(curActivityId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },

            activityEdit(terActivityId) {
                let that = this;
                let tableName = this.mac.tb.groupActivity;
                let record = [terActivityId];
                that.sys.api.dataInput(tableName, record, '', function (result) {
                    that.draftEdit(result[0]);
                }, function () {
                })
            },

            draftEdit: function (curActivityId) {
                let that = this;
                that.showSubModule('editRef', true, function () {
                    that.sm.editRef.startModule(curActivityId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            activityCreate: function () {
                let that = this;
                that.showSubModule('editRef', true, function () {
                    that.sm.editRef.startModule(null, function () {
                    }, function () {
                    });
                }, function () {
                });
                // let that = this;
                // that.showSubModule('detailRef', true, function () {
                //     that.sm.detailRef.startModule(8, function () {
                //     }, function () {
                //     });
                // }, function () {
                // });
            },
            editBack() {
                this.sm.myManageRef.footLabelChecked();
            },




            myManageRef_draftClickEvent: function (curActivityId) {
                this.draftEdit(curActivityId);
            },
            myManageRef_closeClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.closeClickEvent(terActivityId, successCallBack, errorCallBack);
            },
            myManageRef_backClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.backClickEvent(terActivityId, successCallBack, errorCallBack);
            },
            myManageRef_delClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.delClickEvent(terActivityId, successCallBack, errorCallBack);
            },
            myManageRef_activityClickEvent: function (terActivityId, clerkType) {
                this.ep.activityClickEvent(terActivityId, clerkType);
            },
            myManageRef_activityApprovalEvent: function (terActivityId, rejectReason, successCallBack, errorCallBack) {
                this.ep.activityApprovalEvent(terActivityId, rejectReason, successCallBack, errorCallBack);
            },
            myManageRef_showManageEvent: function (terActivityId, clerkType) {
                this.ep.showManageEvent(terActivityId, clerkType);
            },
            myManageRef_showUploadEvent: function (terActivityId, clerkType) {
                this.ep.showUploadEvent(terActivityId, clerkType);
            },
            myManageRef_showCheckEvent: function (terActivityId, clerkType) {
                this.ep.showCheckEvent(terActivityId, clerkType);
            },
            myManageRef_editClickEvent: function () {
                this.activityCreate();
            },
            myManageRef_rejectActivityEvent: function (curActivityId) {
                this.draftEdit(curActivityId);
            },
            
            editRef_detailPageEvent: function (activityId) {
                this.showDetail(activityId);
            },
            editRef_backEvent: function () {
                this.editBack();
            },   
            editRef_activityIssueEvent: function () {
                this.sm.myManageRef.startModule(function () {
                }, function () {
                });
                this.sm.myManageRef.refreshDraft();
            },
            editRef_activityDraftSaveEvent: function (terActivityId) {
                this.sm.myManageRef.startModule(function () {
                }, function () {
                });
                this.ep.activityDraftSaveEvent(terActivityId)
            },
            editRef_releaseSuccessEvent: function (terActivityId) {
                this.ep.releaseSuccessEvent(terActivityId)
            },

            detailRef_backEvent() {
                if(!this.sm.editRef) {
                    this.sm.myManageRef.startModule(function () {
                    }, function () {
                    });
                    this.sm.myManageRef.refreshDraft();
                }
            }
            
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../assets/var_kzt"; /*新增*/
    .activityList_work_container {
        width: 100%;
        height: 100%;
    }

    .activityList_work_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
        z-index: 100;
    }



    .activityList_work_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .activityList_work_row {
        display: flex;
    }

    .activityList_work_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .activityList_work_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .activityList_work_col_activityList_workWindow_size_medium {
        width: @activityList_work-activityList_workWindow-medium-width;
    }

    .activityList_work_col_myManage_size_medium {
        width: @activityList_work-myManage-medium-width;
    }

    .activityList_work_col_detail_size_medium {
        width: @activityList_work-detail-medium-width;
        height: @activityList_work-detail-medium-height;
    }

    .activityList_work_col_edit_size_medium {
        width: @activityList_work-edit-medium-width;
        height: @activityList_work-edit-medium-height;
    }
</style>