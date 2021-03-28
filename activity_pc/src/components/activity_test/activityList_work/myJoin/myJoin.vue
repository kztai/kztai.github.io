<template>
    <div class="my-join-wrap">
        <div class="my-join-title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="my-join-content">
            <div class="my-join-tabs">
                <lm-tabs
                        ref="tabsRef"
                        refId="tabsRef"
                        v-show="pvt_isShow.tabs === 'tabsRef'"
                        :paraVarPair="pvt_tabs.tabsRef.paraVarPair"
                        :para="pvt_tabs.tabsRef.para"
                        :attr="pvt_tabs.tabsRef.attr">
                </lm-tabs>
            </div>
            <div class="my-join-select">
                <div class="my-join-select-item">
                    <lm-select
                            ref="selectRef"
                            refId="selectRef"
                            v-show="pvt_isShow.select === 'selectRef'"
                            :paraVarPair="pvt_select.selectRef.paraVarPair"
                            :para="pvt_select.selectRef.para"
                            :attr="pvt_select.selectRef.attr">
                    </lm-select>
                </div>
                <div class="my-join-input">
                    <lm-input-text
                            ref="inputRef"
                            refId="inputRef"
                            v-show="pvt_isShow.input === 'inputRef'"
                            :paraVarPair="pvt_input.inputRef.paraVarPair"
                            :para="pvt_input.inputRef.para"
                            :attr="pvt_input.inputRef.attr">
                    </lm-input-text>
                    <lm-button
                            ref="btnRef"
                            refId="btnRef"
                            v-show="pvt_isShow.btn === 'btnRef'"
                            :paraVarPair="pvt_btn.btnRef.paraVarPair"
                            :para="pvt_btn.btnRef.para"
                            :attr="pvt_btn.btnRef.attr">
                    </lm-button>
                </div>
            </div>
            <div class="my-join-list">
                <joinActivity
                        ref="joinActivityRef"
                        refId="joinActivityRef"
                        v-show="pvt_isShow.joinActivity === 'joinActivityRef'"
                        v-for="(item, index) in pvt_joinActivity.joinActivityRef.forData"
                        :number="index"
                        :paraVarPair="pvt_joinActivity.joinActivityRef.paraVarPair"
                        :para="item.para"
                        :attr="item.attr">
                </joinActivity>
            </div>
            <div class="item-empty" v-show="itemIsEmpty">
                <lm-link-text
                        ref="itemEmptyRef"
                        refId="itemEmptyRef"
                        v-show="pvt_isShow.itemEmpty === 'itemEmptyRef'"
                        :paraVarPair="pvt_itemEmpty.itemEmptyRef.paraVarPair"
                        :para="pvt_itemEmpty.itemEmptyRef.para"
                        :attr="pvt_itemEmpty.itemEmptyRef.attr">
                </lm-link-text>
            </div>
        </div>
        <div v-show="!itemIsEmpty" class="my-join-pagination">
            <lm-pagination
                    ref="paginationRef"
                    refId="paginationRef"
                    v-show="pvt_isShow.pagination === 'paginationRef'"
                    :paraVarPair="pvt_pagination.paginationRef.paraVarPair"
                    :para="pvt_pagination.paginationRef.para"
                    :attr="pvt_pagination.paginationRef.attr">
            </lm-pagination>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import joinActivity from './activityItem_join';

    export default {
        components: {joinActivity},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                curTabIndex: 0,
                startNum: 0,
                curActivityIdArr: [1],
                curMemberIdArr: [1],
                itemIsEmpty: false,
                inputValue: '',
                activityStatus: '全部',
                joined: true,

                mac: mac.mac,
                myType: 1,
                mySite: '',
                myID: 1,

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'selectRef', 'inputRef', 'joinActivityRef', 'tabsRef', 'paginationRef', 'btnRef', 'itemEmptyRef'],
                    vessel: ['title', 'select', 'input', 'joinActivity', 'tabs', 'pagination', 'btn', 'itemEmpty'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    joinActivity: null,
                    tabs: null,
                    pagination: null,
                    select: null,
                    input: null,
                    btn: null,
                    itemEmpty: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['detailPageEvent', 'activityWithdrawEvent', 'managePageEvent', 'activityCloseEvent', 'editPageEvent', 'activityDeleteEvent'],
            }
        },
        computed: {
            pvt_itemEmpty: function () {
                return {
                    itemEmptyRef: {
                        paraVarPair: {},
                        para: {
                            textData: '暂无数据'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '我的参与'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_tabs: function () {
                return {
                    tabsRef: {
                        paraVarPair: {},
                        para: {
                            tabData: [{val: "已参与", icon: "", disable: ""},{val: "待参与", icon: "", disable: ""}]
                        },
                        attr: {
                            checked: this.curTabIndex,
                            autofocus: true
                        }
                    }
                }
            },

            pvt_input: function () {
                return {
                    inputRef: {
                        paraVarPair: {},
                        para: {
                            text: ''
                        },
                        attr: {
                            placeholder: '请输入关键字进行搜索',
                            // size: "large"
                        }
                    }
                }
            },

            pvt_btn: function () {
                return {
                    btnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-search']
                        },
                        attr: {
                            type: 'text',
                            height: '36px',
                            size: 'large'
                        }
                    }
                }
            },

            pvt_select: function () {
                return {
                    selectRef: {
                        paraVarPair: {
                            value: 'value'
                        },
                        para: {
                            value: '全部',
                            listSource: [
                                {value: '全部', label: '全部', disabled: false, icon: '', image: ''},
                                {value: '助手', label: '助手', disabled: false, icon: '', image: ''},
                                {value: '主持人', label: '主持人', disabled: false, icon: '', image: ''},
                                {value: '主讲人', label: '主讲人', disabled: false, icon: '', image: ''},
                                {value: '在线客服', label: '在线客服', disabled: false, icon: '', image: ''},
                            ]
                        },
                        attr: {}
                    }
                }
            },

            pvt_joinActivity: function () {
                let loopModule = {
                    joinActivityRef: {
                        para: {
                            curActivityId: this.curActivityIdArr,
                            curMemberId: this.curMemberIdArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    joinActivityRef: {
                        paraVarPair: {
                        },
                        forData: forData.joinActivityRef,
                    },
                };
            },

            pvt_pagination: function () {
                return {
                    paginationRef: {
                        paraVarPair: {},
                        para: {
                            currentPage: 1
                        },
                        attr: {
                            pageSize: 10,
                            // total: this.itemTotal
                            total: 3,
                            background: true
                        }
                    }
                }
            },
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myJoin_start';
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

                let ref = {
                    titleRef: 'titleRef',
                    joinActivityRef: 'joinActivityRef',
                    draftRef: 'draftRef',
                    tabsRef: 'tabsRef',
                    paginationRef: 'paginationRef',
                    selectRef: 'selectRef',
                    inputRef: 'inputRef',
                    btnRef: 'btnRef',
                    itemEmptyRef: 'itemEmptyRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            expression = '';
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivity;
                            inputData = {
                                [this.mac.tb.groupActivity]: '',
                                [this.mac.tb.groupActivityManageMember]: '',
                            };
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 1;
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 1:
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            that.curTabIndex = 0;
                            that.startNum = 0;
                            that.inputValue = '';
                            that.activityStatus = '全部';

                            expression = '';
                            that.getActivityData(0, expression, that.joined, function () {
                                para.nStep = 'start_1';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_1':
                            that.sm[ref.titleRef].startModule(function () {
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_2':
                            that.sm[ref.btnRef].startModule(function () {
                                para.nStep = 'start_3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.tabsRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_4':
                            that.sm[ref.inputRef].startModule(function () {
                                para.nStep = 'start_4_1';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_4_1':
                            that.sm[ref.selectRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_5':
                            that.sm[ref.paginationRef].startModule(function () {
                                para.nStep = 'start_6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_6':
                            that.sm[ref.itemEmptyRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.joinActivityRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }

                            that.sm.joinActivityRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['titleRef', 'tabsRef', 'joinActivityRef', 'paginationRef', 'selectRef', 'inputRef', 'btnRef', 'itemEmptyRef'];
                            that.showSubModule(refArr, true, function () {
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

            getActivityData: function (startNum, condition, joined, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myJoin_getActivityData';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
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
                            that.curActivityIdArr = [];
                            that.curMemberIdArr = [];

                            tableName = this.mac.tb.groupActivityManageMember;
                            if(condition) {
                                expression = this.mac.fd.groupActivityManageMember.member + '=' + that.myId + '&&' + condition;
                            } else {
                                expression = this.mac.fd.groupActivityManageMember.member + '=' + that.myId;
                            }

                            dbData = {};
                            dbData[that.mac.fd.id] = [];

                            this.sys.api.recordQuery(tableName, null, expression, dbData, function () {
                                if(dbData[that.mac.fd.id].length > 0) {
                                    that.itemIsEmpty = false;
                                    that.curMemberIdArr = JSON.parse(JSON.stringify(dbData[that.mac.fd.id]));
                                    para.nStep = 'getActivityId';
                                } else {
                                    that.itemIsEmpty = true;
                                    para.nStep = 'refreshPagination';
                                }

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.getActivityData(startNum, condition, joined, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getActivityId':
                            tableName = this.mac.tb.groupActivityManageMember;
                            record = that.curMemberIdArr;

                            this.sys.api.getParentRecord(tableName, record, function (result) {
                                that.curActivityIdArr = JSON.parse(JSON.stringify(result));
                                para.nStep = 'queryActivity';
                                if (++dbFlag === 2) {
                                    that.getActivityData(startNum, condition, joined, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'queryActivity':
                            let curTime = that.getTime(new Date());

                            tableName = this.mac.tb.groupActivity;

                            if(joined) {
                                expression = this.mac.fd.id + '=[' + that.curActivityIdArr + ']&&' + this.mac.fd.groupActivity.status + '=' + this.mac.enum.groupActivity.status.released + '&&' + this.mac.fd.groupActivity.startTime + '<="' + curTime;
                            } else {
                                expression = this.mac.fd.id + '=[' + that.curActivityIdArr + ']&&' + this.mac.fd.groupActivity.status + '=' + this.mac.enum.groupActivity.status.released + '&&' + this.mac.fd.groupActivity.startTime + '>"' + curTime;
                            }

                            if(that.inputValue) {
                                expression += '&&' + this.mac.fd.groupActivity.name + '="' + that.inputValue;
                            }

                            dbData = {};
                            dbData[that.mac.fd.id] = [];

                            this.sys.api.recordQuery(tableName, null, expression, dbData, function () {
                                if(dbData[that.mac.fd.id].length > 0) {
                                    that.itemIsEmpty = false;
                                    for(let i = that.curActivityIdArr.length - 1; i >= 0; i--) {
                                        if(dbData[that.mac.fd.id].indexOf(that.curActivityIdArr[i]) === -1) {
                                            that.curActivityIdArr.splice(i, 1);
                                            that.curMemberIdArr.splice(i, 1);
                                        }
                                    }
                                } else {
                                    that.curActivityIdArr = [];
                                    that.curMemberIdArr = [];
                                    that.itemIsEmpty = true;
                                }
                                
                                para.nStep = 'refreshPagination';
                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.getActivityData(startNum, condition, joined, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'refreshPagination':
                            that.sm.paginationRef.startModule(function () {
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.getActivityData(startNum, condition, joined, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.joinActivityRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.joinActivityRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.getActivityData(startNum, condition, joined, successCallBack, errorCallBack)
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

            labelChange: function(index) {
                let that = this;
                let condition;

                if(that.curTabIndex === index) {
                    return
                }
                that.curTabIndex = index;

                switch (index) {
                    case 0:
                        that.joined = true;
                        break;
                    case 1:
                        that.joined = false;
                        break;
                }

                switch (that.activityStatus) {
                    case '全部':
                        condition = '';
                        break;
                    case '助手':
                        condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.assistant;
                        break;
                    case '主持人':
                        condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.host;
                        break;
                    case '主讲人':
                        condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.lecture;
                        break;
                    case '在线客服':
                        condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.service;
                        break;
                }

                this.getActivityData(0, condition, that.joined, function () {
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


            activityDelWrap: function(curActivityId, terActivityId) {
                this.activityDel(curActivityId, terActivityId, function () {
                }, function () {
                })
            },
            activityDel: function(curActivityId, terActivityId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myJoin_activityDel';
                let tableName;
                let dbData;
                let dbFlag;
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
                            for (let i = 0; i < that.curActivityIdArr.length; i++) {
                                if (that.curActivityIdArr[i] === curActivityId) {
                                    that.curActivityIdArr.splice(i, 1);
                                    break;
                                }
                            }
                            para.nStep = 'refreshItems';
                            that.forceUpdateData(function () {
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, terActivityId, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.joinActivityRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'modifyData';
                                dbFlag++;
                                break;
                            }

                            that.sm.joinActivityRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, terActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curActivityId];
                            dbData[this.mac.fd.groupActivity.status] = [this.mac.enum.groupActivity.status.deleted];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.$message.success('活动删除成功！');
                                that.ep.activityDeleteEvent(terActivityId);
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, terActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            if (that.sm.joinActivityRef.length === 0) {
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

            pageChange: function(num) {},

            getInputValue: function(value) {
                this.inputValue = value;
            },

            searchActivity: function() {
                let condition;
                let that = this;
                switch (that.activityStatus) {
                    case '全部':
                        condition = '';
                        break;
                    case '助手':
                        condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.assistant;
                        break;
                    case '主持人':
                        condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.host;
                        break;
                    case '主讲人':
                        condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.lecture;
                        break;
                    case '在线客服':
                        condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.service;
                        break;
                }

                this.getActivityData(0, condition, that.joined, function () {
                }, function () {
                })
            },

            selectStatus: function(id, name) {
                this.activityStatus = name;
                this.searchActivity();
            },

            getTime: function(time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1
                var hour = time.getHours();
                var minute = time.getMinutes();
                var second = time.getSeconds();

                return year + "-" + zero(month) + "-" + zero(day) + " "
                    + zero(hour) + ":" + zero(minute) + ":" + zero(second);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            },


            tabsRef_labelClickEvent: function (index) {
                this.labelChange(index);
            },
            paginationRef_currentChangeEvent: function (num) {
                this.pageChange(num);
            },
            selectRef_dataModifyEvent: function (id, name) {
                this.selectStatus(id, name);
            },
            inputRef_dataModifyEvent: function (value) {
                this.getInputValue(value);
            },
            btnRef_buttonClickEvent: function () {
                this.searchActivity();
            },

            joinActivityRef_applyEvent: function (curActivityId, terActivityId, type) {
                this.ep.managePageEvent(curActivityId, terActivityId, type);
            },
            joinActivityRef_checkEvent: function (curActivityId, terActivityId, type) {
                this.ep.managePageEvent(curActivityId, terActivityId, type);
            },
            joinActivityRef_sortEvent: function (curActivityId, terActivityId, type) {
                this.ep.managePageEvent(curActivityId, terActivityId, type);
            },
            joinActivityRef_showDetailEvent: function (curActivityId, terActivityId, successCallBack, errorCallBack) {
                this.ep.detailPageEvent(curActivityId, terActivityId, successCallBack, errorCallBack);
            },
        }
    }
</script>
<style lang="scss">
    .my-join-wrap {
        position: relative;
        min-height: 100%;
        /*overflow: auto;*/
        padding: 20px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
        color: #303133;
        box-sizing: border-box;
        .my-join-title {
            padding-bottom: 10px;
            border-bottom: 1px solid #e4e4e4;
        }

        .my-join-content {
            margin-top: 10px;
            border-radius: 4px;
            box-shadow: 0 0 8px 0 rgba(48,49,51,0.1);
            color: #303133;
            box-sizing: border-box;
            border: 1px solid #e4e4e4;
            margin-bottom: 60px;
            .my-join-tabs {
                background-color: #f5f7fa;
                .el-tabs__nav-scroll {
                    padding-left: 20px;
                }
                .el-tabs__item {
                    color: #909399;
                    &:hover {
                        color: #409EFF;
                    }
                }
                .el-tabs__item.is-active {
                    color: #409EFF;
                }
            }
            .my-join-select {
                overflow: hidden;
                padding: 20px 20px 0 20px;
                .lm-select {
                    display: inline-block;
                    float: left;
                }
                .my-join-input {
                    display: inline-block;
                    position: relative;
                    float: right;
                    .lm_text_input_container {
                        /*display: inline-block;*/
                        /*float: right;*/
                        .el-input__inner {
                            padding-right: 32px;
                        }
                    }
                    .lm-button {
                        position: absolute;
                        right: 10px;
                        top: -2px;
                        .el-button--large {
                            font-size: 16px;
                        }
                    }
                }
            }
            .my-join-list {
                padding: 20px;
                .activity-item-wrap {
                    border-bottom: 1px solid #e4e4e4;
                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
            .item-empty {
                padding: 100px 0;
                text-align: center;
            }
        }
        .my-join-pagination {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
