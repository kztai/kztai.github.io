<template>
    <div id="apply-manage-terminal">
    </div>
</template>
<script>

    export default {
        name: mac.curTerminalInfo.terminalVue,
        components: {
        },
        provide: function () {
            return {
                sys: this.sys
            }
        },
        data: function () {
            return {
                mac: mac.mac,
                cloudCtrl: $cloudCtrl,
                geneAPI: null,
                geneInstance: null,
                outPara: [],
                debugFlag: true,
                subGeneHandle: [],
                sys: {
                    api: null,
                    lib: null
                },

                myType: 1,
                mySite: '',
                myID: 1,

                activityId: 1,
                curList: 0,

                pvt_subModuleMap: {
                    subModule: ['uploadRef', 'footRef', 'headRef', 'tabListRef'],
                    vessel: ['upload', 'foot', 'head', 'tabList'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    // head: 'headRef',
                    // foot: 'footRef',
                    upload: null,
                    foot: null,
                    tabList: null,
                    applyManage: null,
                },
            }
        },
        computed: {
            para: function () {
                if (this.subGeneHandle.length === 0) {
                    return null;
                } else {
                    return this.subGeneHandle[0];
                }
            },
        },

        mounted: function () {
            this.startModule(function (result) {
                    console.log(result);
                }, function (error) {
                    console.log(error);
                }
            );
            // window.onbeforeunload = this.beforeunload;
        },

        methods: {
            beforeunload: function() {
                var warning = "确认退出?";
                return warning;
            },

            //初始化模块变量函数
            initRam: function () {
                this.vueName = 'terminal';
                this.mac = mac.mac;
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let fnname = 'terminal_startModule';
                let dbData;
                let tableName;
                let objectName;
                let parentRecord;
                let record;
                let condition;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                var para = errorCallBack;

                while (1) {
                    if ($this.mac.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            // 初始化：
                            $this.mySite = $this.getCookie('userSite');
                            $this.myId = $this.getCookie('userID');
                            $this.myType = $this.getCookie('userType');

                            $this.cloudCtrl.pageStart(function (result) {
                                $this.inPara = result;
                                $this.geneInstance = $this.inPara.geneInstance;
                                $this.sys.api = $this.inPara.geneInstance.geneAPI;
                                $this.geneAPI = $this.inPara.geneInstance.geneAPI;
                                $this.inPara.geneInstance.geneUser = $this;
                                para.nStep = 'dataIsExist';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'dataIsExist':
                            tableName = this.mac.tb.groupActivity;
                            condition = '';
                            dbData = {};
                            dbData[this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(tableName, null, condition, dbData, function () {
                                if (dbData[$this.mac.fd.id].length > 0) {
                                    para.nStep = 'eventStart';
                                } else {
                                    para.nStep = 'initActivityData';
                                }

                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case 'initActivityData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[this.mac.fd.groupActivity.place] = ['深圳市宝安区甲岸科技园2栋7楼'];
                            dbData[this.mac.fd.groupActivity.name] = ['科技与创新'];
                            dbData[this.mac.fd.groupActivity.status] = [this.mac.enum.groupActivity.status.released];
                            $this.sys.api.recordNew(tableName, null, dbData, function () {
                                para.nStep = 'initActivityOrder';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initActivityOrder':
                            tableName = this.mac.tb.groupActivityOrder;
                            dbData = {};
                            dbData[this.mac.fd.groupActivityOrder.groupActivityID] = [1, 1, 1];
                            dbData[this.mac.fd.groupActivityOrder.orderNumber] = [12345678, 45676589, 789654321];
                            dbData[this.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [1, 2, 2];
                            dbData[this.mac.fd.groupActivityOrder.price] = [15, 0, 20];
                            dbData[this.mac.fd.groupActivityOrder.createTime] = ['2019-09-11 12:34', '2019-09-11 16:34', '2019-08-29 9:28'];

                            $this.sys.api.recordNew(tableName, null, dbData, function () {
                                para.nStep = 'initActivityBill';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initActivityBill':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[this.mac.fd.groupActivityBill.name] = ['张三', '李四', '王五'];
                            dbData[this.mac.fd.groupActivityBill.mobile] = [18699447567, 18378096545, 15109098877];
                            dbData[this.mac.fd.groupActivityBill.number] = [1, 2, 3];
                            dbData[this.mac.fd.groupActivityBill.code] = [123456781, 456765892, 7896543213];
                            dbData[this.mac.fd.groupActivityBill.info] = [
                                // {name: ['姓名', '手机', '邮箱'], content: ['张三', 18699447567, '10897653@qq.com']},
                                // {name: ['姓名', '手机', '邮箱'], content: ['李四', 18378096545, '783745853@qq.com']},
                                // {name: ['姓名', '手机', '邮箱'], content: ['王五', 15109098877, '6773257787@qq.com']},
                                {name: ['职业', '邮箱', '性别', '年龄'], content: ['学生', '10897653@qq.com', '男', '12']},
                                {name: ['职业', '邮箱', '性别', '年龄'], content: ['工人', '783745853@qq.com', '男', '15']},
                                {name: ['职业', '邮箱', '性别', '年龄'], content: ['教师', '6773257787@qq.com', '女', '23']},
                            ];
                            dbData[this.mac.fd.groupActivityBill.status] = [0,6,2];

                            $this.sys.api.recordNew(tableName, null, dbData, function () {
                                para.nStep = 'initTicketData';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initTicketData':
                            tableName = this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[this.mac.fd.groupActivityTicketType.price] = [0, 15];
                            dbData[this.mac.fd.groupActivityTicketType.name] = ['免费票', '会员票'];
                            $this.sys.api.recordNew(tableName, null, dbData, function () {
                                para.nStep = 'initAppendixData';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initAppendixData':
                            tableName = this.mac.tb.groupActivityEnrollAppendix;
                            dbData = {};
                            dbData[this.mac.fd.groupActivityEnrollAppendix.name] = ['图片1', '图片2'];
                            dbData[this.mac.fd.groupActivityEnrollAppendix.type] = [0, 0]; // 0:图片，1:文件
                            $this.sys.api.recordNew(tableName, null, dbData, function () {
                                para.nStep = 'eventStart';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        // case 'initFormData':
                        //     tableName = this.mac.tb.groupActivityEnrollForm;
                        //     dbData = {};
                        //     dbData[this.mac.fd.groupActivityEnrollForm.name] = [99999, 88888];
                        //     $this.sys.api.recordNew(tableName, null, dbData, function () {
                        //         para.nStep = 'eventStart';
                        //         if (++$dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack);
                        //         }
                        //     }, function (error) {
                        //         console.error(error)
                        //     });
                        //     break;
                        // case 'initUpload':
                        //     this.sm.uploadRef.startModule(function () {
                        //         $this.showSubModule('uploadRef', true, function () {
                        //             para.nStep = 'eventStart';
                        //             if (++$dbFlag === 2) {
                        //                 $this.startModule(successCallBack, errorCallBack);
                        //             }
                        //         }, para.errorCallBack);
                        //     }, function () {
                        //
                        //     });
                        //     break;
                        case 'eventStart':
                            $this.inPara.geneInstance.eventStart(mac.curTerminalInfo.pageEvent, $this.inPara.instruct, $this.inPara.command, $this.inPara.paraObject, function (result) {
                                console.log(result);

                                for (let i in result.subGeneHandle) {
                                    $this.subGeneHandle.push(result.subGeneHandle[i]);
                                }

                                para.nStep = 'end';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },

            // inputApplyData: function (conditionData, successCallBack, errorCallBack) {
            //     let $this = this;
            //     let fnname = 'terminal_inputApplyData';
            //     let dbData;
            //     let objectName;
            //     let parentRecord;
            //     let condition;
            //     let record;
            //     let portName;
            //     let inputData;
            //     let expression;
            //     let start;
            //     let total;
            //     let sort;
            //     let destGeneSite;
            //     if (successCallBack !== null) {
            //         errorCallBack = $this.setPara(successCallBack, errorCallBack);
            //         successCallBack = null;
            //     }
            //     var para = errorCallBack;
            //     while (1) {
            //         console.log(fnname + ': para.nStep = ' + para.nStep);
            //         var $dbFlag = 0;
            //         switch (para.nStep) {
            //             case 0:
            //             case 'inputData':
            //                 expression = conditionData.condition;
            //                 start = conditionData.start;
            //                 total = conditionData.total;
            //                 sort = ['id,asc'];
            //                 destGeneSite = '';
            //                 portName = this.mac.tb.groupActivityBill;
            //                 inputData = null;
            //                 this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
            //                     para.result = result;
            //                     para.nStep = 'end';
            //                     if (++$dbFlag === 2) {
            //                         $this.inputApplyData(conditionData, successCallBack, errorCallBack);
            //                     }
            //                 }, para.errorCallBack);
            //                 break;
            //             case 'end':
            //                 para.successCallBack(para.result);
            //                 return;
            //         }
            //         if (++$dbFlag === 1) {
            //             return;
            //         }
            //     }
            // },

            applyRef_inputApplyData: function (condition, successCallBack, errorCallBack) {
                // this.inputApplyData(condition, successCallBack, errorCallBack)
            },
            applyRef_orderExamineIn: function (idArr, type, rejectReason, successCallBack, errorCallBack) {
                // this.ep.orderExamineIn(idArr, type, rejectReason, successCallBack, errorCallBack);
                this.sys.api.callParentFunction('orderExamineIn', [idArr, type, rejectReason],successCallBack, errorCallBack);
            },
            applyRef_groupNoticeIn: function (phone, successCallBack, errorCallBack) {
                // this.ep.groupNoticeIn(phone, successCallBack, errorCallBack);
                this.sys.api.callParentFunction('groupNoticeIn', [phone],successCallBack, errorCallBack);
            },
            applyRef_refundExamineIn: function (idArr, successCallBack, errorCallBack) {
                // this.ep.refundExamineIn(idArr, successCallBack, errorCallBack);
                this.sys.api.callParentFunction('refundExamineIn', [idArr],successCallBack, errorCallBack);
            },
            applyRef_ticketPassIn: function (id, successCallBack, errorCallBack) {
                // this.ep.ticketPassIn(id, successCallBack, errorCallBack);
                this.sys.api.callParentFunction('ticketPassIn', [id],successCallBack, errorCallBack);
            },
            applyRef_getSeccodeIn: function (phone, successCallBack, errorCallBack) {
                this.sys.api.callParentFunction('getSeccodeIn', [phone],successCallBack, errorCallBack);
                // this.ep.getSeccodeIn(phone, successCallBack, errorCallBack);

            },
            applyRef_seccodeVerifyIn: function (id, codeValue, successCallBack, errorCallBack) {
                // this.ep.seccodeVerifyIn(id, codeValue, successCallBack, errorCallBack);
                this.sys.api.callParentFunction('seccodeVerifyIn', [id, codeValue],successCallBack, errorCallBack);
            },
            applyRef_backEvent: function (successCallBack, errorCallBack) {
                // this.ep.backEvent();
                this.sys.api.callParentFunction('backEvent', [], successCallBack, errorCallBack);
            },


            getUrlPar: function (par) {
                var local_url = document.location.href;
                local_url = window.decodeURIComponent(local_url);
                //获取要取得的get参数位置
                var get = local_url.indexOf(par + "=");
                if (get === -1) {
                    return false;
                }
                //截取字符串
                var get_par = local_url.slice(par.length + get + 1);
                //判断截取后的字符串是否还有其他get参数
                var nextPar = get_par.indexOf("&");
                if (nextPar !== -1) {
                    get_par = get_par.slice(0, nextPar);
                }
                var lastPar = get_par.indexOf("#");//过滤#号
                if (lastPar !== -1) {
                    get_par = get_par.slice(0, lastPar);
                }
                return get_par;
            },
            to_tx: function (tx, data) {
                let $this = this;
                let HTMLpage = 'http://14.gts.com:85/index.html';
                let para = {
                    para: null,
                    data: data
                };
                $this.geneAPI.terminalGeneStart(mac.arrTerminalInfo[tx].groupID, mac.arrTerminalInfo[tx].cloudID,
                    mac.arrTerminalInfo[tx].vesselID, mac.arrTerminalInfo[tx].geneID, HTMLpage, para, function (result) {
                        console.log('terminalGeneStart success!')
                    }, function (error) {
                        console.log(error)
                    })
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
            addUser: function () {
                this.sys.api.callParentFunction('addUserInfo', [], function () {
                    console.log(1)
                }, function () {

                });
            }
        }
    }
</script>
<style>
    #apply-manage-terminal {
        width: 100%;
        height: 100%;
    }
</style>











<!--新闻论坛-->
<!--
<template>
    <div id="group-page-terminal">
        <groupPage
                ref="groupPage"
                refId="groupPage"
                :blogData='blogData'
                :para="para">
        </groupPage>
        <el-button type="primary" @click='test'>test</el-button>
        <el-button type="primary" @click='test1'>test1</el-button>
    </div>
</template>
<script>
    import groupPage from '@/components/groupServe/groupPage.vue';

    export default {
        name: mac.curTerminalInfo.terminalVue,
        components: {
            groupPage
        },
        provide: function () {
        },
        data: function () {
            return {
                mac: mac.mac,
                cloudCtrl: $cloudCtrl,
                geneAPI: null,
                geneInstance: null,
                outPara: [],
                debugFlag: true,
                subGeneHandle: [],
                sys: {
                    api: null,
                    lib: null
                },

                myType: 1,
                mySite: '',
                myID: 1,

                cloudBlogId: null,
                commentValueArr: [],

                commentDataArr: [],
                commentNumIndex: 1,
                treeNum: 0,
                commentTotal: 10,
                commentStart: 0,

                inputTotal: 10,
                start_note: 0,
                start_myNote: 0,
                start_article: 0,
                start_myArticle: 0,
                start_comment: 0,
                start_myComment: 0,
                start_myDraft: 0,

                blogData: {
                    cloudBlogId: null,
                    terBlogId: null,
                    showUserInfo: false,
                    btnType: 'content'
                },
            }
        },
        computed: {
            para: function () {
                if (this.subGeneHandle.length === 0) {
                    return null;
                } else {
                    return this.subGeneHandle[0];
                }
            }
        },
        mounted: function () {
            let $this = this;
            // Object.assign($this, cloudDeployTestData);
            $this.startModule(function (result) {
                    console.log(result);
                }, function (error) {
                    console.log(error);
                }
            )
        },
        methods: {
            //初始化模块变量函数
            initRam: function () {
                this.vueName = 'terminal';
                this.mac = mac.mac;
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let fnname = 'terminal.init';
                let dbData;
                let objectName;
                let parentRecord;
                let record;
                let condition;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                var para = errorCallBack;
                while (1) {
                    if ($this.mac.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            // 初始化：
                            $this.mySite = $this.getCookie('userSite');
                            $this.myId = $this.getCookie('userID');
                            $this.myType = $this.getCookie('userType');


                            $this.commentDataArr = [];
                            $this.commentValueArr = [];
                            $this.commentNumIndex = 1;
                            $this.treeNum = 0;
                            $this.commentStart = 0;
                            $this.commentTotal = 10;

                            $this.start_note = 0;
                            $this.start_myNote = 0;
                            $this.start_article = 0;
                            $this.start_myArticle = 0;
                            $this.start_comment = 0;
                            $this.start_myComment = 0;
                            $this.start_myDraft = 0;
                            $this.inputTotal = 10;

                            $this.cloudBlogId = null;

                            // 获取触发终端的传入数据：
                            para.blogData = JSON.parse(this.getUrlPar('paraTemp')).data;
                            if(para.blogData) {
                                $this.cloudBlogId = para.blogData.blogId;
                            }

                            $this.cloudCtrl.pageStart(function (result) {
                                $this.inPara = result;
                                $this.geneInstance = $this.inPara.geneInstance;
                                $this.sys.api = $this.inPara.geneInstance.geneAPI;
                                $this.geneAPI = $this.inPara.geneInstance.geneAPI;
                                $this.inPara.geneInstance.geneUser = $this;
                                para.nStep = 'inputUserInfo';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'inputUserInfo':
                            expression = '';
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.userInfo;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'inputGroupInfo';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'inputGroupInfo':
                            expression = '';
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupInfo;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if ($this.cloudBlogId) {
                                    para.nStep = 'newHistory';
                                } else {
                                    para.nStep = 'eventStart';
                                }
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        // case 'getNoteData':
                        //     $this.inputBlog_note(function () {
                        //         para.nStep = 'eventStart';
                        //         if (++$dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack);
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        case 'newHistory':
                            let blogData = {
                                blogID: $this.cloudBlogId,
                                userSite: $this.mySite,
                                userID: $this.myId
                            };
                            $this.sys.api.callParentFunction('setBlogIn', [$this.mac.setBlog.type.newHistory, blogData], function () {
                                para.nStep = 'inputCloudBlog';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case 'inputCloudBlog':
                            objectName = $this.mac.tb.groupBlog;
                            record = [para.blogData.blogId];
                            $this.sys.api.dataInput(objectName, record, '', function (result) {
                                $this.blogData = {
                                    cloudBlogId: para.blogData.blogId,
                                    terBlogId: result[0],
                                    showUserInfo: true,
                                    btnType: para.blogData.btn
                                };
                                para.nStep = 'eventStart';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        // case 'inputComment':
                        //     $this.inputComment(function () {
                        //         para.nStep = 'InputClerkInfo';
                        //         if (++$dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack);
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        case 'eventStart':
                            $this.inPara.geneInstance.eventStart(mac.curTerminalInfo.pageEvent, $this.inPara.instruct, $this.inPara.command, $this.inPara.paraObject, function (result) {
                                console.log(result);

                                for (let i in result.subGeneHandle) {
                                    $this.subGeneHandle.push(result.subGeneHandle[i]);
                                }
                                para.nStep = 'end';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },

            inputClerkInfo: function(successCallBack) {
                let $this = this;
                let expression = $this.mac.fd.clerk.user + '=' + $this.myId;
                let start = null;
                let total = null;
                let sort = ['id,asc'];
                let destGeneSite = '';
                let portName = $this.mac.tb.clerk;
                let inputData = null;
                $this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                    successCallBack();
                }, function (error) {
                    console.error(error);
                });
            },

            inputBlog_note: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
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
                    switch (para.nStep) {
                        case 0:
                            expression = that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.release + '&&' + that.mac.fd.groupBlog.blogType + '=' + that.mac.enum.groupBlog.blogType.post;
                            // expression = (that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.release + '||' + that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.delete) + '&&' + that.mac.fd.groupBlog.blogType + '=' + that.mac.enum.groupBlog.blogType.post;
                            start = that.start_note;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlog;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputBlog_note(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
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

            inputBlog_myNote: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
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
                    switch (para.nStep) {
                        case 0:
                            expression = that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.release + '&&' + that.mac.fd.groupBlog.blogType + '=' + that.mac.enum.groupBlog.blogType.post + '&&' + that.mac.fd.groupBlog.author + '=' + this.myId;
                            // expression = (that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.release + '||' + that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.delete) + '&&' + that.mac.fd.groupBlog.blogType + '=' + that.mac.enum.groupBlog.blogType.post + '&&' + that.mac.fd.groupBlog.author + '=' + this.myId;
                            start = that.start_myNote;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlog;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputBlog_myNote(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
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

            inputComment_myComment: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
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
                    nStep: 0,
                    i: 0,
                    delParentIdArr: []
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
                            expression = that.mac.fd.groupBlogComment.delete + '=' + that.mac.enum.groupBlogComment.delete.no + '&&' + that.mac.fd.groupBlogComment.observer + '=' + that.myId;
                            // expression = that.mac.fd.groupBlogComment.observer + '=' + that.myId;
                            start = that.start_myComment;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlogComment;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                // para.terResult = result;
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputComment_myComment(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getParentId':
                            if(para.i > para.terResult.length - 1) {
                                para.i = 0;
                                dbFlag++;
                                if(para.delParentIdArr.length>0) {
                                    para.nStep = 'getSourceId';
                                } else {
                                    para.nStep = 'end';
                                }
                                break;
                            }

                            portName = that.mac.tb.groupBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.id] = [para.terResult[para.i]];
                            dbData[that.mac.fd.groupBlogComment.parentID] = [];
                            that.sys.api.recordRead(portName, dbData, function () {
                                para.terParentId = dbData[that.mac.fd.groupBlogComment.parentID][0];
                                if(para.terResult.indexOf(para.terParentId) === -1) {
                                    para.delParentIdArr.push(para.terParentId);
                                }
                                para.nStep = 'getParentId';
                                para.i++;
                                if (++dbFlag === 2) {
                                    that.inputComment_myComment(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case 'getSourceId':
                            portName = that.mac.tb.groupBlogComment;
                            record = para.delParentIdArr;
                            that.sys.api.getSourceRecord(portName, record, function (result) {
                                para.inputResult = result;
                                para.nStep = 'inputDelComment';
                                if (++dbFlag === 2) {
                                    that.inputComment_myComment(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case 'inputDelComment':
                            portName = that.mac.tb.groupBlogComment;
                            record = para.inputResult;
                            that.sys.api.dataInput(portName, record, '', function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputComment_myComment(successCallBack, errorCallBack);
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

            inputBlog_myArticle: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
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
                    switch (para.nStep) {
                        case 0:
                            expression = that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.release + '&&' + that.mac.fd.groupBlog.blogType + '=' + that.mac.enum.groupBlog.blogType.article + '&&' + that.mac.fd.groupBlog.author + '=' + this.myId;
                            // expression = (that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.release + '||' + that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.delete) + '&&' + that.mac.fd.groupBlog.blogType + '=' + that.mac.enum.groupBlog.blogType.article + '&&' + that.mac.fd.groupBlog.author + '=' + this.myId;
                            start = that.start_myArticle;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlog;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputBlog_myArticle(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
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

            inputComment_comment: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
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
                    switch (para.nStep) {
                        case 0:
                            expression = that.mac.fd.groupBlogComment.delete + '!=' + that.mac.enum.groupBlogComment.delete.yes + '&&' + that.mac.fd.groupBlogComment.hideComment + '!=' + that.mac.enum.groupBlogComment.hideComment.yes;
                            // expression = '';
                            start = that.start_comment;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlogComment;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputComment_comment(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
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

            inputBlog_article: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
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
                    switch (para.nStep) {
                        case 0:
                            expression = that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.release + '&&' + that.mac.fd.groupBlog.blogType + '=' + that.mac.enum.groupBlog.blogType.article;
                            // expression = (that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.release + '||' + that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.delete) + '&&' + that.mac.fd.groupBlog.blogType + '=' + that.mac.enum.groupBlog.blogType.article;
                            start = that.start_article;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlog;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputBlog_article(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
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

            inputBlog_myDraft: function(successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
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
                    switch (para.nStep) {
                        case 0:
                            expression = that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.draft + '&&' + that.mac.fd.groupBlog.author + '=' + that.myId;
                            // expression =  (that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.draft + '||' + that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.delete) + '&&' + that.mac.fd.groupBlog.author + '=' + that.myId;
                            start = that.start_myDraft;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlog;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputBlog_myDraft(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
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


            inputCloudBlog: function(type, successCallBack, errorCallBack) {
                let that = this;
                switch (type) {
                    case 'note':
                        this.inputBlog_note(function () {
                            that.start_note += 10;
                            successCallBack();
                        }, function () {
                        });
                        break;
                    case 'myNote':
                        this.inputBlog_myNote(function () {
                            that.start_myNote += 10;
                            successCallBack();
                        }, function () {
                        });
                        break;
                    case 'myComment':
                        this.inputComment_myComment(function () {
                            that.start_myComment += 10;
                            successCallBack();
                        }, function () {
                        });
                        break;
                    case 'myArticle':
                        this.inputBlog_myArticle(function () {
                            that.start_myArticle += 10;
                            successCallBack();
                        }, function () {
                        });
                        break;
                    case 'comment':
                        this.inputComment_comment(function () {
                            that.start_comment += 10;
                            successCallBack();
                        }, function () {
                        });
                        break;
                    case 'article':
                        this.inputBlog_article(function () {
                            that.start_article += 10;
                            successCallBack();
                        }, function () {
                        });
                        break;
                    case 'myDraft':
                        this.inputBlog_myDraft(function () {
                            that.start_myDraft += 10;
                            successCallBack();
                        }, function () {
                        });
                        break;
                }
            },



            // 以下四个函数用于详情页下载评论：
            inputComment: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let couldParentId = null;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    curCommentIdArr: [],
                    result: [],
                    rootCommentLength: 0,
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
                            expression = that.mac.fd.groupBlogComment.groupBlogID + '=' + that.cloudBlogId + '&&' + that.mac.fd.groupBlogComment.parentID + '=[' + couldParentId + ']';
                            if (couldParentId === null) {
                                start = that.commentStart;
                                total = that.commentTotal;
                                sort = ['id,asc'];
                            } else {
                                start = null;
                                total = null;
                                sort = ['id,asc'];
                            }
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlogComment;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.result = result;
                                if (result && couldParentId === null) {
                                    para.rootCommentLength = result.length;
                                }
                                para.nStep = 'getParentSourceId';
                                if (++dbFlag === 2) {
                                    that.inputComment(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getParentSourceId':
                            if (para.result) {
                                para.curCommentIdArr = para.curCommentIdArr.concat(para.result);
                                tableName = that.mac.tb.groupBlogComment;
                                that.sys.api.getSourceRecord(tableName, para.result, function (result) {
                                    couldParentId = result;
                                    para.nStep = 0;
                                    if (++dbFlag === 2) {
                                        that.inputComment(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                });
                            } else {
                                couldParentId = null;
                                para.nStep = 'getCommentData';
                                if (++dbFlag === 2) {
                                    that.inputComment(successCallBack, errorCallBack);
                                }
                            }
                            break;
                        case 'getCommentData':
                            if (para.curCommentIdArr.length === 0) {
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }
                            let condition = 'id=[' + para.curCommentIdArr + ']';
                            tableName = that.mac.tb.groupBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.groupBlogComment.parentID] = [];
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.groupBlogComment.delete] = [];
                            dbData[that.mac.fd.groupBlogComment.hideComment] = [];
                            // 下载评论数据到终端：
                            that.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                that.commentDataArr = [];
                                if (dbData[that.mac.fd.id].length > 0) {
                                    that.treeRoot(that.commentDataArr, dbData[that.mac.fd.groupBlogComment.parentID], dbData[that.mac.fd.id], dbData[that.mac.fd.groupBlogComment.delete], dbData[that.mac.fd.groupBlogComment.hideComment]);
                                }

                                that.joinCommentData(that.commentDataArr, function () {
                                    // 先判断前10条是否下满，如下满再判断根评论是否达到10条，不是需要再下载，直到满10条：
                                    if (para.rootCommentLength < that.commentTotal || that.commentValueArr.length >= 10 * that.commentNumIndex) {
                                        that.commentStart += that.commentTotal;
                                        para.nStep = 'end';
                                    } else {
                                        couldParentId = null;
                                        para.curCommentIdArr = [];
                                        that.commentStart += that.commentTotal;
                                        that.commentTotal = 10 * that.commentNumIndex - that.commentValueArr.length;
                                        para.nStep = 0;
                                    }
                                    if (++dbFlag === 2) {
                                        that.inputComment(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'end':
                            that.commentTotal = 10;
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            joinCommentData: function (commentDataArr, successCallBack, errorCallBack) {
                let that = this;

                rootComment:
                    for (let i = 0; i < commentDataArr.length; i++) {
                        // 1 判断根删除的情况下，如果有没删的子，则它也不删，否则彻底删除这个根：
                        if (commentDataArr[i].isDelete === that.mac.enum.groupBlogComment.delete.yes) {
                            if (commentDataArr[i].children.length > 0) {
                                for (let j = 0; j < commentDataArr[i].children.length; j++) {
                                    if (commentDataArr[i].children[j].isDelete === that.mac.enum.groupBlogComment.delete.no) {
                                        break;
                                    } else if (j === commentDataArr[i].children.length - 1) {
                                        commentDataArr.splice(i, 1);
                                        i--;
                                        continue rootComment;
                                    }
                                }
                            } else {
                                commentDataArr.splice(i, 1);
                                i--;
                            }

                        }
                    }

                // 如果作者id不等于当前登入的用户id：
                if (!that.isSelf) {
                    isHide:
                        for (let i = 0; i < commentDataArr.length; i++) {
                            // 1 判断根屏蔽的情况下，如果有没屏蔽的子，则它也不屏蔽，否则彻底屏蔽这个根：
                            if (commentDataArr[i].isHide === that.mac.enum.groupBlogComment.hideComment.yes) {
                                if (commentDataArr[i].children.length > 0) {
                                    for (let j = 0; j < commentDataArr[i].children.length; j++) {
                                        if (commentDataArr[i].children[j].isHide === that.mac.enum.groupBlogComment.hideComment.no) {
                                            break;
                                        } else if (j === commentDataArr[i].children.length - 1) {
                                            commentDataArr.splice(i, 1);
                                            i--;
                                            continue isHide;
                                        }
                                    }
                                } else {
                                    commentDataArr.splice(i, 1);
                                    i--;
                                }

                            }
                        }
                }

                for (let i = 0; i < commentDataArr.length; i++) {
                    that.commentValueArr.push(commentDataArr[i]);
                }

                successCallBack();
            },

            treeRoot: function (commentDataArr, parentIdArr, tableIdArr, deleteArr, hideCommentArr) {
                //验证传参是否正确
                for (let n = 0; n < parentIdArr.length; n++) {
                    if (parentIdArr[n] && !tableIdArr.includes(parentIdArr[n])) {
                        console.log('传入数据不正确');
                        return
                    }
                }
                //循环验证是否拼接完成
                while (tableIdArr.length > 0) {
                    for (let i = 0; i < tableIdArr.length; i++) {
                        if (parentIdArr[i] && parentIdArr[i] !== tableIdArr[i]) {

                            this.treeChildren(commentDataArr, parentIdArr[i], tableIdArr[i], deleteArr[i], hideCommentArr[i]);

                            if (this.treeNum === 1) {
                                tableIdArr.splice(i, 1);
                                parentIdArr.splice(i, 1);
                                deleteArr.splice(i, 1);
                                hideCommentArr.splice(i, 1);
                                this.treeNum = 0;
                                i--
                            }
                        } else {
                            commentDataArr.push({
                                commentId: tableIdArr[i],
                                parentId: '',
                                isDelete: deleteArr[i],
                                isHide: hideCommentArr[i],
                                cloudBlogId: this.cloudBlogId,
                                children: []
                            });
                            tableIdArr.splice(i, 1);
                            parentIdArr.splice(i, 1);
                            deleteArr.splice(i, 1);
                            hideCommentArr.splice(i, 1);
                            i--
                        }
                    }
                }
                this.treeNum = 0
            },

            treeChildren: function (commentDataArr, parentId, id, isDelete, hideComment) {
                if (commentDataArr.length === 0) {
                    return;
                }
                var stack = [];
                stack.push(commentDataArr);
                var checkOne;
                while (stack.length > 0) {
                    checkOne = stack.pop();
                    for (let i = 0; i < checkOne.length; i++) {
                        if (checkOne[i].commentId === parentId) {
                            checkOne[i].children.push({
                                commentId: id,
                                parentId: parentId,
                                isDelete: isDelete,
                                isHide: hideComment,
                                cloudBlogId: this.cloudBlogId,
                            });
                            this.treeNum = 1;
                            return
                        } else if (checkOne[i].children.length > 0) {
                            for (let j = 0; j < checkOne[i].children.length; j++) {
                                if (checkOne[i].children[j].commentId === parentId) {
                                    checkOne[i].children.push({
                                        commentId: id,
                                        parentId: parentId,
                                        isDelete: isDelete,
                                        isHide: hideComment,
                                        cloudBlogId: this.cloudBlogId,
                                    });
                                    this.treeNum = 1;
                                    return
                                }
                            }
                        }
                    }
                }
            },


            groupPage_publishArticle: function () {
                let index = Math.random();
                let data = {
                    type: 'article',
                    blogId: null,
                    index: index
                };
                this.to_tx('t5', data);
            },
            groupPage_publishNote: function () {
                let index = Math.random();
                let data = {
                    type: 'note',
                    blogId: null,
                    index: index
                };
                this.to_tx('t5', data);
            },

            groupPage_inputCloudBlog: function(ref, type, successCallBack, errorCallBack) {
                this.inputCloudBlog(type, successCallBack, errorCallBack);
            },  
            groupPage_inputCloudComment: function(ref, successCallBack, errorCallBack) {
                let that = this;
                this.inputComment(function () {
                    that.commentNumIndex++;
                    successCallBack();
                }, function() {
                });
            },
            groupPage_inputClerkInfo: function(ref, successCallBack, errorCallBack) {
                this.inputClerkInfo(function () {
                    successCallBack();
                }, function() {
                });
            },

            groupPage_backEvent: function () {
                let index = Math.random();
                let data = {
                    index: index
                };
                this.to_tx('t2', data);
            },

            groupPage_draftClickEvent: function (ref, blogType, terBlogId) {
                let that = this;
                let tableName = that.mac.tb.groupBlog;
                let record = [terBlogId];
                let type;
                if (blogType === that.mac.enum.groupBlog.blogType.post) {
                    type = 'note'
                } else {
                    type = 'article'
                }
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    let index = Math.random();
                    let data = {
                        type: type,
                        blogId: result[0],
                        index: index
                    };
                    that.to_tx('t5', data);
                }, function () {
                });
            },
            groupPage_getCloudBlogId: function(ref, terBlogId, successCallBack, errorCallBack) {
                let that = this;
                let tableName = that.mac.tb.groupBlog;
                let record = [terBlogId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    that.cloudBlogId = result[0];
                    successCallBack(result[0])
                }, function () {
                });
            },

            groupPage_inputNewComment: function(ref, cloudCommentId, successCallBack, errorCallBack) {
                let that = this;
                let tableName = that.mac.tb.groupBlogComment;
                let record = [cloudCommentId];
                that.sys.api.dataInput(tableName, record, '', function (result) {
                    successCallBack(result[0]);
                }, function () {
                });
            },
            groupPage_refreshDelComment: function(ref, terCommentId, successCallBack, errorCallBack) {
                let that = this;
                let tableName = that.mac.tb.groupBlogComment;
                let record = [terCommentId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    that.sys.api.dataInput(tableName, result, '', function () {
                        successCallBack();
                    }, function () {
                    })
                }, function (error) {
                    console.error(error);
                })
            },
            groupPage_refreshData: function(ref, tableName, terBlogId, successCallBack, errorCallBack) {
                let that = this;
                let record = [terBlogId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    that.sys.api.dataInput(tableName, result, '', function () {
                        successCallBack();
                    }, function () {
                    })
                }, function (error) {
                    console.error(error);
                })
            },

            groupPage_refreshTerminal: function(ref, tableName, data, successCallBack, errorCallBack) {
                let that = this;
                that.sys.api.recordModify(tableName, data, function (result) {
                    successCallBack();
                }, function (error) {
                    errorCallBack(error);
                })
            },

            groupPage_setBlogIn: function (ref, type, data, uploadType, successCallBack, errorCallBack) {
                let that = this;
                let tableName;
                let dataClone = JSON.parse(JSON.stringify(data));

                if(navigator.onLine) {
                    if(uploadType === 'groupList') {
                        tableName = that.mac.tb.groupBlog;
                        if(data.blogID) {
                            that.sys.api.getSourceRecord(tableName, [data.blogID], function (result) {
                                dataClone.blogID = result[0];
                                that.sys.api.callParentFunction('setBlogIn', [type,dataClone],successCallBack, errorCallBack);
                            }, function () {
                            });
                        } else {
                            that.sys.api.callParentFunction('setBlogIn', [type,data],successCallBack, errorCallBack);
                        }
                    } else {
                        tableName = that.mac.tb.groupBlogComment;
                        if(data.commentID) {
                            that.sys.api.getSourceRecord(tableName, [data.commentID], function (result) {
                                dataClone.commentID = result[0];
                                that.sys.api.callParentFunction('setBlogIn', [type,dataClone], successCallBack, errorCallBack);
                            }, function () {
                            });
                        } else {
                            that.sys.api.callParentFunction('setBlogIn', [type,data],successCallBack, errorCallBack);
                        }
                    }
                } else {
                    errorCallBack();
                }
            },




            getUrlPar: function (par) {
                var local_url = document.location.href;
                local_url = window.decodeURIComponent(local_url);
                //获取要取得的get参数位置
                var get = local_url.indexOf(par + "=");
                if (get === -1) {
                    return false;
                }
                //截取字符串
                var get_par = local_url.slice(par.length + get + 1);
                //判断截取后的字符串是否还有其他get参数
                var nextPar = get_par.indexOf("&");
                if (nextPar !== -1) {
                    get_par = get_par.slice(0, nextPar);
                }
                var lastPar = get_par.indexOf("#");//过滤#号
                if (lastPar !== -1) {
                    get_par = get_par.slice(0, lastPar);
                }
                return get_par;
            },
            to_tx: function (tx, data) {
                let $this = this;
                let HTMLpage = 'http://14.gts.com:85/index.html';
                let para = {
                    para: null,
                    data: data
                };
                $this.geneAPI.terminalGeneStart(mac.arrTerminalInfo[tx].groupID, mac.arrTerminalInfo[tx].cloudID,
                    mac.arrTerminalInfo[tx].vesselID, mac.arrTerminalInfo[tx].geneID, HTMLpage, para, function (result) {
                        console.log('terminalGeneStart success!')
                    }, function (error) {
                        console.log(error)
                    })
            },
            getCookie: function(type) {
                if(type === 'userID') {
                    return 1;
                } else if(type === 'userSite') {
                    return {
                        geneAddr: {
                            groupID: 1,
                            cloudID: 2,
                            vesselType: 's',
                            vesselID: 18,
                            userID: 1,
                            geneID: 26
                        },
                        server:12
                    }
                }  else if(type === 'userType') {
                    // 0表示普通用户，1表示游客
                    return 0
                }
            },

            test: function () {
                this.sys.api.callParentFunction('addUserInfo', [], function () {
                    console.log(1);
                }, function () {

                });
            },
            test1: function () {
                this.sys.api.callParentFunction('addGroupInfo', [], function () {
                    console.log(1);
                }, function () {

                });
            }
        }
    }
</script>
<style>
    #group-page-terminal {
        width: 100%;
        height: 100%;
        font-family: SourceHanSansCN-Medium;
    }
</style>
-->