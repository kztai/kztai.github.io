<template>
    <div class="myDraft_container">
        <div class="myDraft_row myDraft_row_myDraftRow">
            <div :class="{myDraft_col:true,myDraft_col_myDraftWindow:true,myDraft_col_myDraftWindow_size_large:attr.size==='large',myDraft_col_myDraftWindow_size_medium:attr.size==='medium',myDraft_col_myDraftWindow_size_small:attr.size==='small',myDraft_col_myDraftWindow_size_min:attr.size==='min',myDraft_col_myDraftWindow_checked:attr.checked,myDraft_col_myDraftWindow_disable:attr.disabled}">

                <div class="myDraft_row myDraft_row_row1">
                    <div :class="{myDraft_col:true,myDraft_col_header:true,myDraft_col_header_size_large:attr.size==='large',myDraft_col_header_size_medium:attr.size==='medium',myDraft_col_header_size_small:attr.size==='small',myDraft_col_header_size_min:attr.size==='min',myDraft_col_header_checked:attr.checked,myDraft_col_header_disable:attr.disabled}">

                        <listHeader
                                ref="headerRef"
                                refId="headerRef"
                                v-show="pvt_isShow.header === 'headerRef'"
                                :paraVarPair="pvt_header.headerRef.paraVarPair"
                                :para="pvt_header.headerRef.para"
                                :attr="pvt_header.headerRef.attr">
                        </listHeader>
                    </div>
                </div>
                <div class="myDraft_row myDraft_row_row2">
                    <div :class="{myDraft_col:true,myDraft_col_draftList:true,myDraft_col_draftList_size_large:attr.size==='large',myDraft_col_draftList_size_medium:attr.size==='medium',myDraft_col_draftList_size_small:attr.size==='small',myDraft_col_draftList_size_min:attr.size==='min',myDraft_col_draftList_checked:attr.checked,myDraft_col_draftList_disable:attr.disabled}">
                        <draftItem
                                ref="draftItemRef"
                                refId="draftItemRef"
                                v-show="pvt_isShow.draftList === 'draftItemRef'"
                                :paraVarPair="pvt_draftList.draftItemRef.paraVarPair"
                                v-for="(item, index) in pvt_draftList.draftItemRef.forData"
                                :number="index"
                                :para="item.para"
                                :attr="item.attr">
                        </draftItem>
                    </div>
                </div>
                <div class="myDraft_row myDraft_row_row3">
                    <div  v-show="itemIsEmpty" :class="{myDraft_col:true,myDraft_col_empty:true,myDraft_col_empty_size_large:attr.size==='large',myDraft_col_empty_size_medium:attr.size==='medium',myDraft_col_empty_size_small:attr.size==='small',myDraft_col_empty_size_min:attr.size==='min',myDraft_col_empty_checked:attr.checked,myDraft_col_empty_disable:attr.disabled}">

                        <empty
                                ref="emptyRef"
                                refId="emptyRef"
                                v-show="pvt_isShow.empty === 'emptyRef'"
                                :paraVarPair="pvt_empty.emptyRef.paraVarPair"
                                :para="pvt_empty.emptyRef.para"
                                :attr="pvt_empty.emptyRef.attr">
                        </empty>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import listHeader from '../listHeader/listHeader';
    import draftItem from './draftItem';
    import empty from '../../../activityManage/checkTicket/empty';

    export default {
        components: {listHeader,draftItem,empty},
        inject: ['sys'],
        props: ['refId','para','attr','number'],
        data: function() {
            return {
                pvt_subModuleMap: {
                    vessel:['header','draftList','empty'],
                    subModule:['headerRef','draftItemRef','emptyRef'],
                },
                pvt_isShow: {
                    header:null,
                    draftList:null,
                    empty:null,
                },
                pvt_eventPortInput: ['draftClickEvent','delClickEvent', 'backEvent'],

                mac: mac.mac,

                myType: 1,
                mySite: '',
                myID: 1,

                curActivityIdArr:[1,2],
                sizeArr:['medium','medium'],
                itemIsEmpty: false
            };
        },
        watch: {
        },
        computed:{
            pvt_header:function(){
                return {
                    headerRef:{
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
            pvt_draftList:function(){
                let loopModule={
                    draftItemRef:{
                        para:{
                            curActivityId:this.curActivityIdArr,
                        },
                        attr:{
                            size:this.sizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    draftItemRef:{
                        paraVarPair:{
                            curActivityId:'curActivityIdArr',
                        },
                        forData: forData.draftItemRef,
                    },
                };
            },
            pvt_empty:function(){
                return {
                    emptyRef:{
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
            startModule:function(successCallBack,errorCallBack){
                let that = this;
                let fnname = 'myDraft_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: []
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
                        case 'getApplyData':
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            that.itemIsEmpty = false;
                            that.curActivityIdArr = [];
                            that.sizeArr = [];

                            condition = that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.draft;
                            that.inputActivityData(0, condition, function () {
                                that.forceUpdateData(function () {
                                    para.nStep = 'headStart';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                title: '草稿箱',
                                showMenu: false,
                            };
                            that.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'start_empty';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_empty':
                            that.sm.emptyRef.startModule('暂无数据',function () {
                                // if (that.itemIsEmpty) {
                                //     para.refArr.push('emptyRef');
                                // } else {
                                //     para.refArr.push('draftItemRef');
                                // }
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('headerRef', 'draftItemRef','emptyRef');
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
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
            
            inputActivityData: function (startNum, condition, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myDraft_inputActivityData';
                let dbFlag;
                let dbData;
                let tableName;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0
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
                            expression = that.mac.fd.groupActivity.author + '=' + that.myId + '&&' + condition;
                            start = startNum;
                            total = 100;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivity;
                            inputData = {
                                [this.mac.tb.groupActivity]: '',
                            };
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    for(let i = 0; i < result.length; i++) {
                                        that.curActivityIdArr.push(result[i]);
                                        that.sizeArr.push('medium');
                                        // that.curActivityIdArr.push(result[i]);
                                        // that.sizeArr.push('medium');
                                        // that.curActivityIdArr.push(result[i]);
                                        // that.sizeArr.push('medium');
                                        // that.curActivityIdArr.push(result[i]);
                                        // that.sizeArr.push('medium');
                                    }
                                    that.itemIsEmpty = false;
                                    para.nStep = 'refreshItems';
                                } else {
                                    that.itemIsEmpty = true;
                                    para.nStep = 'end';
                                }

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.inputActivityData(startNum, condition, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.draftItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.draftItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.inputActivityData(startNum, condition, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
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

            activityDel: function(curActivityId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myDraft_activityDel';
                let tableName;
                let dbData;
                let dbFlag;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
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
                            for (let i = 0; i < that.curActivityIdArr.length; i++) {
                                if (that.curActivityIdArr[i] === curActivityId) {
                                    that.curActivityIdArr.splice(i, 1);
                                    that.sizeArr.splice(i, 1);
                                    break;
                                }
                            }
                            para.nStep = 'refreshItems';
                            that.forceUpdateData(function () {
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.draftItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'getTerActivityId';
                                dbFlag++;
                                break;
                            }

                            that.sm.draftItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'modifyData';
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curActivityId];
                            dbData[this.mac.fd.groupActivity.status] = [this.mac.enum.groupActivity.status.deleted];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.$notify({type: 'success', message: '活动删除成功！'});
                                that.ep.delClickEvent(para.terActivityId, function () {
                                    
                                }, function () {

                                });
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            if (that.sm.draftItemRef.length === 0) {
                                that.itemIsEmpty = true;
                            }
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            hideDialog: function () {
                let that = this;
                that.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            getCookie: function (type) {
                if (type === 'userID') {
                    return 1;
                } else if (type === 'userSite') {
                    return {
                        geneAddr: {
                            groupID: 1,
                            cloudID: 2,
                            vesselType: 's',
                            vesselID: 18,
                            userID: 1,
                            geneID: 26
                        },
                        server: 12
                    }
                } else if (type === 'userType') {
                    // 0表示普通用户，1表示游客
                    return 0
                }
            },


            draftItemRef_delClickEvent:function(curActivityId,successCallBack,errorCallBack){
                this.activityDel(curActivityId,successCallBack,errorCallBack);
            },
            draftItemRef_draftClickEvent:function(curActivityId){
                this.ep.draftClickEvent(curActivityId);
            },
            headerRef_backEvent: function () {
                this.hideDialog();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .myDraft_container {
    }
    .myDraft_row {
        display:flex;
        flex:1;
    }
    .myDraft_col {
        display:flex;
        flex-direction:column;
    }
    .myDraft_col_myDraftWindow_size_medium {
        width:@myDraft-myDraftWindow-medium-width;
    }
    .myDraft_col_myDraftWindow {
      /*  background-color:mix(@myDraft-myDraftWindow-background-color,#fff,@myDraft-myDraftWindow-background-color-opacity);*/
    }
    .myDraft_col_header_size_medium {
        width:@myDraft-header-medium-width;
        margin: @myDraft-header-medium-margin;
        position: fixed;
        top:0;
        left:0;
        z-index: 3;
    }
    .myDraft_col_header {
        border-style:@myDraft-header-border-style;
        border-width:@myDraft-header-border-width;
        border-color:mix(@myDraft-header-border-color,#fff,@myDraft-header-hover-border-color-opacity);
        background-color:mix(@myDraft-header-background-color,#fff,@myDraft-header-background-color-opacity);
    }
    .myDraft_col_draftList_size_medium {
        width:@myDraft-draftList-medium-width;
        height:@myDraft-draftList-medium-height;
        padding: @myDraft-draftList-medium-padding;
        box-sizing: border-box;  /*新增*/
    }
    .myDraft_col_empty_size_medium {
        width:@myDraft-empty-medium-width;
        margin:@myDraft-empty-medium-margin;
        align-items:@myDraft-empty-medium-horizontal-position;
    }
</style>