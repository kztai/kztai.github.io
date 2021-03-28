<template>
    <div id="apply-manage-terminal">
        <pageMyManage
                v-if="isMyManage"
                ref="pageRef"
                :terActivityId="terActivityId"
                :curList="curListIndex"
                refId="pageRef">
        </pageMyManage>
        <pageActivityManage
                v-else="isMyManage"
                ref="pageRef"
                refId="pageRef"
                :terActivityId="terActivityId"
                :curList="curManageIndex"
                :clerkType="clerkType">
        </pageActivityManage>
    </div>
</template>
<script>
    // import pageMyManage from '@/components/activity_test/activityList_work/activityList_work.vue';
    // import pageMyManage from '@/components/activity_test/activityDetail_work/activityDetail.vue';
    import pageMyManage from '@/components/activity/activityList_work/activityList_work.vue';
    import pageActivityManage from '@/components/activity/activityManage/activityManage.vue';

    export default {
        name: mac.curTerminalInfo.terminalVue,
        components: {
            pageMyManage,
            pageActivityManage
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

                isMyManage: true,

                myType: 1,
                mySite: '',
                myID: 1,

                terActivityId: 1,
                curManageIndex: 0,
                curListIndex: 0,
                clerkType: '策划人',

                pvt_subModuleMap: {
                    subModule: [],
                    vessel: [],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {},
            }
        },
        computed: {
            // para: function () {
            //     if (this.subGeneHandle.length === 0) {
            //         return null;
            //     } else {
            //         return this.subGeneHandle[0];
            //     }
            // },
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
            beforeunload: function () {
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
                            para.picture = 'http://img2.imgtn.bdimg.com/it/u=2915512436,1541993188&fm=26&gp=0.jpg';
                            para.record = 1;

                            // 初始化：
                            $this.mySite = $this.getCookie('userSite');
                            $this.myId = $this.getCookie('userID');
                            $this.myType = $this.getCookie('userType');
                            $this.subGeneHandle = [];

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
                                    para.nStep = 'groupActivityNew';
                                }
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'groupActivityNew':
                            objectName = $this.mac.tb.groupActivity;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivity.name] = ['2019深圳宠物马拉松运动会', '暨第三届深圳遛狗节', '2019全球智能化商业峰会（秋季场）', '大型品牌活动'];
                            dbData[$this.mac.fd.groupActivity.abstract] = ['全球青年创新大会（Global Youth Innovation Conference，GYIC）由工信部、中国产业创新联盟，以及北京、上海、天津、深圳和杭州等相关政府部门支持，近百家创投机构助力，由国内100多家媒体机构联袂支持打造的大型品牌活动。 历年来，腾讯、百度、蔚来汽车、大疆等数百家知名', '北京、上海、天津、深圳和杭州等相关政府部门', '100多家媒体机构联袂支持打造的大', '由国内100多家媒体机构联袂支持打造的大型品牌活'];
                            dbData[$this.mac.fd.groupActivity.details] = ['<div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div><div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div><div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div>', '<div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div>', '<div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div>', '<div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div>'];
                            dbData[$this.mac.fd.groupActivity.mode] = [$this.mac.enum.groupActivity.mode.outLine, $this.mac.enum.groupActivity.mode.outLine, $this.mac.enum.groupActivity.mode.outLine, $this.mac.enum.groupActivity.mode.outLine];
                            dbData[$this.mac.fd.groupActivity.label] = [20, 12, 14, 14];
                            dbData[$this.mac.fd.groupActivity.publicCustomer] = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
                            dbData[$this.mac.fd.groupActivity.refundObject] = [{
                                type: 0,
                                explain: ""
                            }, {
                                type: 1,
                                explain: "1、本活动由主办方委托【活动行】代为处理退款事宜。\n2、如需退款，请于活动开始前的24小时之前提交申请，活动开始前的24小时内不接受退款。\n3、退款时，将收取票价的10%作为手续费。",
                                daysAgo: 1
                            }, {
                                type: 1,
                                explain: "1、本活动由主办方委托【活动行】代为处理退款事宜。\n2、如需退款，请于活动开始前的24小时之前提交申请，活动开始前的24小时内不接受退款。\n3、退款时，将收取票价的10%作为手续费。",
                                daysAgo: 2
                            }, {
                                type: 1,
                                explain: "1、本活动由主办方委托【活动行】代为处理退款事宜。\n2、如需退款，请于活动开始前的24小时之前提交申请，活动开始前的24小时内不接受退款。\n3、退款时，将收取票价的10%作为手续费。",
                                daysAgo: 3
                            }];
                            dbData[$this.mac.fd.groupActivity.showEnrollInfo] = [$this.mac.enum.groupActivity.showEnrollInfo.yes, $this.mac.enum.groupActivity.showEnrollInfo.yes, $this.mac.enum.groupActivity.showEnrollInfo.yes, $this.mac.enum.groupActivity.showEnrollInfo.yes];
                            dbData[$this.mac.fd.groupActivity.phone] = ['+86-15888888888', '15888884152', '15884578888', '15884578888'];
                            dbData[$this.mac.fd.groupActivity.author] = [1, 1, 1, 1];
                            dbData[$this.mac.fd.groupActivity.authorName] = ['张三', '李四', '王五', '王五'];
                            dbData[$this.mac.fd.groupActivity.status] = [$this.mac.enum.groupActivity.status.check, $this.mac.enum.groupActivity.status.released, $this.mac.enum.groupActivity.status.released, $this.mac.enum.groupActivity.status.check];
                            dbData[$this.mac.fd.groupActivity.refuseReason] = [null, null, null, '涉及政治敏感话题'];
                            dbData[$this.mac.fd.groupActivity.departmentName] = ['瓴码', '瓴码', '瓴码', '瓴码'];
                            dbData[$this.mac.fd.groupActivity.startTime] = ['2019-10-15 09:00', '2019-10-16 09:00', '2020-02-30 09:00', '2020-01-17 09:00'];
                            dbData[$this.mac.fd.groupActivity.endTime] = ['2020-12-17 14:00', '2019-10-18 14:00', '2020-10-19 14:00', '2119-10-19 14:00'];
                            dbData[$this.mac.fd.groupActivity.pubicDepartment] = [['研发部', '运营部', '营销部'], null,null,null];
                            dbData[$this.mac.fd.groupActivity.openEnrollChannel] = [1,0,1,0];
                            dbData[$this.mac.fd.groupActivity.place] = [
                                {
                                    "id": [5, 107, 1069],
                                    "name": ["广东省", "深圳市", "宝安区"],
                                    "place": "甲岸科技园",
                                    "lng": 113.938183,
                                    "lat": 22.531669
                                },
                                {
                                    "id": [5, 107, 1069],
                                    "name": ["广东省", "深圳市", "宝安区"],
                                    "place": "西乡",
                                    "lng": 113.938183,
                                    "lat": 22.531669
                                },
                                {
                                    "id": [5, 107, 1069],
                                    "name": ["广东省", "深圳市", "南山区"],
                                    "place": "南山公园",
                                    "lng": 113.938183,
                                    "lat": 22.531669
                                },
                                {
                                    "id": [5, 107, 1069],
                                    "name": ["广东省", "深圳市", "南山区"],
                                    "place": "南山公园",
                                    "lng": 113.938183,
                                    "lat": 22.531669
                                }
                            ];
                            dbData[$this.mac.fd.groupActivity.praiseNumber] = [50, 23, 45, 33];
                            dbData[$this.mac.fd.groupActivity.commentNumber] = [13, 11, 34, 23];
                            dbData[$this.mac.fd.groupActivity.favoriteNumber] = [20, 45, 67, 45];
                            dbData[$this.mac.fd.groupActivity.browerNumber] = [100, 123, 237, 112];
                            dbData[$this.mac.fd.groupActivity.forwardNumber] = [30, 12, 23, 34];
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [[0, 0, 0, 0], [30, 24, 18, 12], [36, 20, 14, 18], [36, 20, 14, 18]];
                            dbData[$this.mac.fd.groupActivity.createTime] = ['2019-09-29 15:23', '2019-09-09 17:00', '2019-09-19 18:00', '2019-09-19 18:00'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.activityID = dbData[$this.mac.fd.id][0];
                                    para.nStep = 'initActivityPoster'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'initActivityPoster':
                            tableName = $this.mac.tb.groupActivity;
                            var fieldName = $this.mac.fd.groupActivity.poster;
                            var filePath = 'abc.png';
                            var fileContent = para.picture;
                            $this.sys.api.writeFile(tableName, fieldName, para.record, filePath, fileContent, function (result) {
                                para.record++;
                                if (para.record >= 5) {
                                    para.record = 1;
                                    para.nStep = 'groupActivityTicketTypeNew';
                                } else {
                                    para.nStep = 'initActivityPoster';
                                }

                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'groupActivityTicketTypeNew':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.name] = ['免费票', '一人一犬票', '2人1犬票', '2人2犬票'];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [0, 68, 118, 158];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = [$this.mac.enum.groupActivityTicketType.approval.yes, $this.mac.enum.groupActivityTicketType.approval.yes, $this.mac.enum.groupActivityTicketType.approval.no, $this.mac.enum.groupActivityTicketType.approval.yes];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [1, 1, 1, 1];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [5, 3, 2, 2];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = ['2019-10-13 09:00', '2019-10-13 09:00', '2019-10-14 00:00', '2019-10-14 00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [4, 3, 2, 2];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [0, 1, 2, 3];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = ['2019-10-21 09:00', '2019-10-15 09:00', '2019-10-30 09:00', '2019-11-02 09:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = ['2019-10-29 20:00', '2019-10-20 20:00', '2019-11-02 20:00', '2019-12-17 12:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = ['2019-10-15 00:00', '2019-10-01 09:00', '2019-10-21 09:00', '2019-11-03 09:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = ['2019-11-03 20:00', '2019-10-20 20:00', '2019-11-02 20:00', '2019-12-17 14:00'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityTicketTypeNew1'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityTicketTypeNew1':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = 2;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.name] = ['免费票'];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [0];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = [$this.mac.enum.groupActivityTicketType.approval.no];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [1];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [5];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = ['2019-10-13 09:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [240];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [0];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = ['2019-10-15 09:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = ['2019-12-15 23:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [null];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [null];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityTicketTypeNew2'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityTicketTypeNew2':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = 3;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.name] = ['免费票', '会员票'];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [0, 68];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = [$this.mac.enum.groupActivityTicketType.approval.yes, $this.mac.enum.groupActivityTicketType.approval.no];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [1, 1];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [5, 3];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = ['2019-10-13 09:00', '2019-10-13 09:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [240, 100];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [0, 1];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = ['2019-10-15 09:00', '2019-10-15 09:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = ['2019-12-15 23:00', '2019-12-26 23:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [null, '2019-10-08 00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [null, '2019-12-15 00:00'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityTicketTypeNew3'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityTicketTypeNew3':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = 4;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.name] = ['免费票', '会员票'];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [0, 20];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = [$this.mac.enum.groupActivityTicketType.approval.yes, $this.mac.enum.groupActivityTicketType.approval.no];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [1, 1];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [5, 3];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = ['2019-10-13 09:00', '2019-10-13 09:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [240, 300];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [0, 1];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = ['2019-10-15 09:00', '2019-10-15 09:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = ['2019-12-15 23:00', '2019-12-26 23:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [null, '2019-10-08 00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [null, '2019-12-15 00:00'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityMemberNew'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityMemberNew':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [100, 101, 102,200];
                            dbData[$this.mac.fd.groupActivityManageMember.function] = [4, 4,4,4];

                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityMemberNew2'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityMemberNew2':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = 2;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [100, 101];
                            dbData[$this.mac.fd.groupActivityManageMember.function] = [2, 3];

                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityMemberNew3'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityMemberNew3':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = 3;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [100, 101, 100, 101];
                            dbData[$this.mac.fd.groupActivityManageMember.function] = [4, 1, 2, 3];

                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityMemberNew4'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityMemberNew4':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = 4;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [100];
                            dbData[$this.mac.fd.groupActivityManageMember.function] = [3];

                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityEnrollFormNew'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityEnrollFormNew':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = ['姓名', '手机', '身份证', '邮箱', '银行卡号', '爱好', '民族', '性别', '图片上传', '发货方式', '说明'];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [
                                {"componentName": "lm-input-text", "type": 0, "dataArr": [], "tableName": []},
                                {"componentName": "lm-input-phone", "type": 0, "dataArr": [], "tableName": []},
                                {componentName: 'lm-input-idcard', dataArr: [], type: 0, tableName: ''},
                                {componentName: 'lm-input-email', dataArr: [], type: 0, tableName: ''},
                                {componentName: 'lm-input-bank', dataArr: [], type: 0, tableName: ''},
                                {
                                    componentName: 'lm-checkbox',
                                    dataArr: [{label: 1, text: '篮球'}, {label: 2, text: '足球'}, {label: 3, text: '羽毛球'}],
                                    type: 4,
                                    tableName: ''
                                },
                                {
                                    "componentName": "lm-select",
                                    "type": 0,
                                    "dataArr": [{
                                        "value": 1,
                                        "label": "汉族",
                                        "disabled": false,
                                        "icon": "",
                                        "image": ""
                                    }, {
                                        "value": 2,
                                        "label": "壮族",
                                        "disabled": false,
                                        "icon": "",
                                        "image": ""
                                    }, {
                                        "value": 3,
                                        "label": "回族",
                                        "disabled": false,
                                        "icon": "",
                                        "image": ""
                                    }, {
                                        "value": 4,
                                        "label": "苗族",
                                        "disabled": false,
                                        "icon": "",
                                        "image": ""
                                    }, {
                                        "value": 5,
                                        "label": "维吾尔族",
                                        "disabled": false,
                                        "icon": "",
                                        "image": ""
                                    }, {
                                        "value": 6,
                                        "label": "土家族",
                                        "disabled": false,
                                        "icon": "",
                                        "image": ""
                                    }, {"value": 7, "label": "彝族", "disabled": false, "icon": "", "image": ""}],
                                    "tableName": []
                                },

                                {
                                    "componentName": "lm-radio",
                                    "type": 0,
                                    "dataArr": [{"label": 1, "text": "男"}, {"label": 2, "text": "女"}],
                                    "tableName": []
                                },
                                {"componentName": "lm-picture-upload", "type": 6, "dataArr": [], "tableName": []},
                                {
                                    "componentName": "lm-radio",
                                    "type": 3,
                                    "dataArr": [{"label": 1, "text": "快递"}, {"label": 2, "text": "自取"}],
                                    "tableName": []
                                },
                                {"componentName": "lm-input-text", "type": 2, "dataArr": [], "tableName": []},
                            ];
                            dbData[$this.mac.fd.groupActivityEnrollForm.attribute] = [$this.mac.enum.groupActivityEnrollForm.attribute.need, $this.mac.enum.groupActivityEnrollForm.attribute.noNeed, 1, 1, 1, 1, $this.mac.enum.groupActivityEnrollForm.attribute.noNeed, $this.mac.enum.groupActivityEnrollForm.attribute.noNeed, $this.mac.enum.groupActivityEnrollForm.attribute.noNeed, $this.mac.enum.groupActivityEnrollForm.attribute.noNeed, $this.mac.enum.groupActivityEnrollForm.attribute.noNeed];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'activityBudgetFormNew';
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'activityBudgetFormNew':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = para.record;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = ['办公费', '印刷费', '交通费'];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = [240, 500, 880];
                            dbData[$this.mac.fd.groupActivityBudgetForm.unit] = ['元', '元', '元'];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetRemarks] = ['用于该活动的办公费', '用于该活动的印刷费', '用于该活动的交通费'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData, function () {
                                para.record++;
                                if(para.record >= 5) {
                                    para.record = 1;
                                    para.nStep = 'activityClassifyNew';
                                } else {
                                    para.nStep = 'activityBudgetFormNew';
                                }
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        case 'activityClassifyNew':
                            objectName = $this.mac.tb.groupClassify;
                            parentRecord = para.record;
                            dbData = {};
                            dbData[$this.mac.fd.groupClassify.firstName] = ['行业', '行业', '生活'];
                            dbData[$this.mac.fd.groupClassify.secondName] = ['科技', '金融', '文艺'];

                            $this.sys.api.recordNew(objectName, parentRecord, dbData, function () {
                                para.record++;
                                if(para.record >= 5) {
                                    para.record = 1;
                                    para.nStep = 'initGroup';
                                } else {
                                    para.nStep = 'activityClassifyNew';
                                }
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initGroup':
                            tableName = this.mac.tb.group;
                            dbData = {};
                            dbData[this.mac.fd.group.groupName] = ['瓴码'];

                            $this.sys.api.recordNew(tableName, null, dbData, function () {
                                para.nStep = 'initDepartment';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initDepartment':
                            tableName = this.mac.tb.department;
                            dbData = {};
                            dbData[this.mac.fd.department.name] = ['研发部', '营销部'];

                            $this.sys.api.recordNew(tableName, 1, dbData, function () {
                                para.nStep = 'initClerk0';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initClerk0':
                            tableName = this.mac.tb.clerkSet;
                            dbData = {};
                            dbData[this.mac.fd.clerkSet.user] = [200,201,202];
                            dbData[this.mac.fd.clerkSet.clerkName] = ['张思', '王五', '李留'];

                            $this.sys.api.recordNew(tableName, 2, dbData, function () {
                                para.nStep = 'initClerk';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initClerk':
                            tableName = this.mac.tb.clerkSet;
                            dbData = {};
                            dbData[this.mac.fd.clerkSet.user] = [100,101,102];
                            dbData[this.mac.fd.clerkSet.clerkName] = ['王工', '陈工', '张工'];

                            $this.sys.api.recordNew(tableName, 1, dbData, function () {
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
                            dbData[this.mac.fd.groupActivityOrder.price] = [0, 15, 15];
                            dbData[this.mac.fd.groupActivityOrder.status] = [0, 1, 1];
                            dbData[this.mac.fd.groupActivityOrder.applicant] = [2, 1, 3];
                            dbData[this.mac.fd.groupActivityOrder.name] = ['张三', '李思', '忘英'];
                            dbData[this.mac.fd.groupActivityOrder.createTime] = ['2019-09-11 12:34', '2019-09-11 16:34', '2019-08-29 09:28'];

                            $this.sys.api.recordNew(tableName, null, dbData, function () {
                                para.nStep = 'initActivityBill1';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initActivityBill1':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[this.mac.fd.groupActivityBill.name] = ['张三', '李四', '王五'];
                            dbData[this.mac.fd.groupActivityBill.mobile] = [18699447567, 18378096545, 15109098877];
                            dbData[this.mac.fd.groupActivityBill.number] = [1, 2, 3];
                            dbData[this.mac.fd.groupActivityBill.code] = [123456781, 456765892, 7896543213];
                            dbData[this.mac.fd.groupActivityBill.info] = [
                                {name: ['职业', '邮箱', '性别', '年龄'], content: ['学生', '10897653@qq.com', '男', '12']},
                                {name: ['职业', '邮箱', '性别', '年龄'], content: ['工人', '783745853@qq.com', '男', '15']},
                                {name: ['职业', '邮箱', '性别', '年龄'], content: ['教师', '6773257787@qq.com', '女', '23']},
                            ];
                            dbData[this.mac.fd.groupActivityBill.status] = [0, 5, 7];
                            dbData[this.mac.fd.groupActivityBill.cancelReason] = [null, null, null];

                            $this.sys.api.recordNew(tableName, 1, dbData, function () {
                                para.nStep = 'initActivityBill2';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initActivityBill2':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[this.mac.fd.groupActivityBill.name] = ['kzt'];
                            dbData[this.mac.fd.groupActivityBill.mobile] = [18678967832];
                            dbData[this.mac.fd.groupActivityBill.number] = [1];
                            dbData[this.mac.fd.groupActivityBill.code] = [1237665876];
                            dbData[this.mac.fd.groupActivityBill.info] = [
                                {name: ['国籍', '性别'], content: ['中国', '男']},
                            ];
                            dbData[this.mac.fd.groupActivityBill.status] = [2];
                            dbData[this.mac.fd.groupActivityBill.cancelReason] = ['我明天有其他事，没有空去了我明天有其他事，没有空去了我明天有其他事，没有空去了我明天有其他事，没有空去了'];

                            $this.sys.api.recordNew(tableName, 2, dbData, function () {
                                para.nStep = 'initActivityBill3';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initActivityBill3':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[this.mac.fd.groupActivityBill.name] = ['成六', '李伟'];
                            dbData[this.mac.fd.groupActivityBill.mobile] = [18699412345, 18378094321];
                            dbData[this.mac.fd.groupActivityBill.number] = [1, 2];
                            dbData[this.mac.fd.groupActivityBill.code] = [1678956781, 45676333492];
                            dbData[this.mac.fd.groupActivityBill.info] = [
                                {name: ['职业', '城市', '爱好', '性别', '年龄'], content: ['学生', '南平', '篮球', '男', '12']},
                                {name: ['职业', '城市', '爱好', '性别', '年龄'], content: ['工人', '深圳', '羽毛球', '男', '15']},
                            ];
                            dbData[this.mac.fd.groupActivityBill.status] = [6, 2];
                            dbData[this.mac.fd.groupActivityBill.cancelReason] = [null, '我生病去不了了'];

                            $this.sys.api.recordNew(tableName, 3, dbData, function () {
                                para.nStep = 'groupActivityDiscussNew';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'groupActivityDiscussNew':
                            objectName = $this.mac.tb.groupActivityDiscuss;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityDiscuss.groupActivityID] = [para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID]
                            dbData[$this.mac.fd.groupActivityDiscuss.questioner] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                            dbData[$this.mac.fd.groupActivityDiscuss.name] = ['李君昊', '李国艳', '李恩德', '李文雅', '李文轩', '李文博', '赵泽晨', '赵子桐', '赵建川', '赵琦锐', '赵家妍', '赵宇琪', '赵佳鑫']
                            dbData[$this.mac.fd.groupActivityDiscuss.askContent] = ['三个团票是28号上午场跟下午场都能参加吗？', '九月28号周六没时间怎么办?', '请问至尊VIP票是可以跟大咖他们一起吃晚饭对吗？', '3人团购，是3个人两个会场都能用吗', '不错的活动，支持???? 对于我这样的老用户，基本之前举办大会都参加的，有没有优惠啊？????', '活动优惠票什么时候结束？', '11111', '2222', '55555', '66666', '77777', '88888', '999999'];
                            dbData[$this.mac.fd.groupActivityDiscuss.askTime] = ['2019-08-10 00:00', '2019-08-15 00:00', '2019-08-20 00:00', '2019-08-25 00:00', '2019-08-30 00:00', '2019-09-15 00:00', '2019-09-20 00:00', '2019-09-25 00:00', '2019-09-26 00:00', '2019-09-27 00:00', '2019-09-28 00:00', '2019-09-29 00:00', '2019-09-30 00:00']
                            dbData[$this.mac.fd.groupActivityDiscuss.answerContent] = ['是的，可以参加全天场活动的，9月28号活动现场还会赠送10月20号腾讯滨海大厦场活动。', '没问题', '没问题', '没问题', null, null, null, null, null, null, null, '可以', '谢谢'];
                            dbData[$this.mac.fd.groupActivityDiscuss.answerTime] = ['2019-08-10 10:00', '2019-08-16 10:00', '2019-08-21 10:00', '2019-08-26 10:00', null, null, null, null, null, null, null, '2019-09-30 00:00', '2019-09-30 09:00'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'initAppendixData'
                                    if (++$dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'initAppendixData':
                            tableName = this.mac.tb.groupActivityAppendix;
                            dbData = {};
                            dbData[this.mac.fd.groupActivityAppendix.name] = ['图片1', '图片2'];
                            dbData[this.mac.fd.groupActivityAppendix.type] = [0, 0]; // 0:图片，1:文件
                            $this.sys.api.recordNew(tableName, 1, dbData, function () {
                                para.nStep = 'initAlbumData';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'initAlbumData':
                            tableName = this.mac.tb.myAlbum;
                            dbData = {};
                            dbData[this.mac.fd.myAlbum.name] = ['相册1'];
                            dbData[this.mac.fd.myAlbum.siteId] = [1];
                            $this.sys.api.recordNew(tableName, null, dbData, function () {
                                para.nStep = 'initOptionData';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        // case 'initPhotoData':
                        //     tableName = this.mac.tb.myPhoto;
                        //     dbData = {};
                        //     dbData[this.mac.fd.myPhoto.name] = ['图片1'];
                        //     $this.sys.api.recordNew(tableName, 1, dbData, function () {
                        //         para.nStep = 'initOptionData';
                        //         if (++$dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack);
                        //         }
                        //     }, function (error) {
                        //         console.error(error)
                        //     });
                        //     break;
                        case 'initOptionData':
                            tableName = this.mac.tb.activityOption;
                            dbData = {};
                            dbData[this.mac.fd.activityOption.label] = [{key1:['科技', '经济','金融'],key2:['演出', '文艺','手艺'],key3:['社团', '讲座','课程'],key4:['才艺', '旅游','益智']}];
                            dbData[this.mac.fd.activityOption.budget] = [{unit:['元', '元','元'],name:['仓储费', '推广费','广告费']}];
                            dbData[this.mac.fd.activityOption.customerLevel] = [[{label:'金牌客户',value:0},{label:'银牌客户',value:1},{label:'铜牌客户',value:2}]];
                            $this.sys.api.recordNew(tableName, null, dbData, function () {
                                para.nStep = 'eventStart';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
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
                            let api = this.subGeneHandle[0].geneInstance.geneAPI;
                            this.$refs.pageRef.startModule(api, function () {
                                para.successCallBack('success');
                            }, function () {
                            });
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },


            // 活动管理页面事件：
            pageRef_dataAnalyGetEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.dataAnalyGet(terActivityId, successCallBack, errorCallBack);
            },
            pageRef_inputApplyData: function (condition, successCallBack, errorCallBack) {
                // this.inputApplyData(condition, successCallBack, errorCallBack)
            },
            pageRef_orderApprovalEvent: function (idArr, type, rejectReason, successCallBack, errorCallBack) {
                // this.ep.orderExamineIn(idArr, type, rejectReason, successCallBack, errorCallBack);
                // this.sys.api.callParentFunction('orderApprovalIn', [idArr, type, rejectReason], successCallBack, errorCallBack);
                this.orderApproval(idArr, type, rejectReason, successCallBack, errorCallBack);
            },
            pageRef_groupNoticeIn: function (phone, successCallBack, errorCallBack) {
                // this.ep.groupNoticeIn(phone, successCallBack, errorCallBack);
                this.sys.api.callParentFunction('groupNoticeIn', [phone], successCallBack, errorCallBack);
            },
            pageRef_refundPassEvent: function (terBillIdArr, successCallBack, errorCallBack) {
                // this.ep.refundExamineIn(idArr, successCallBack, errorCallBack);
                this.refundPass(terBillIdArr, successCallBack, errorCallBack);
            },
            pageRef_ticketPassEvent: function (terId, successCallBack, errorCallBack) {
                // this.ep.ticketPassIn(id, successCallBack, errorCallBack);
                // this.sys.api.callParentFunction('ticketPassIn', [id], successCallBack, errorCallBack);
                // 将待验票状态改为已完成状态：
                this.ticketPass(terId, successCallBack, errorCallBack);
            },
            pageRef_getSeccodeEvent: function (phone, successCallBack, errorCallBack) {
                this.sys.api.callParentFunction('getSeccodeIn', [phone], successCallBack, errorCallBack);
                // this.ep.getSeccodeIn(phone, successCallBack, errorCallBack);
            },
            pageRef_seccodeVerifyEvent: function (terId, codeValue, successCallBack, errorCallBack) {
                // this.ep.seccodeVerifyIn(id, codeValue, successCallBack, errorCallBack);
                // this.sys.api.callParentFunction('seccodeVerifyIn', [id, codeValue], successCallBack, errorCallBack);
                this.seccodeVerify(terId, codeValue, successCallBack, errorCallBack);
            },
            pageRef_backEvent: function (successCallBack, errorCallBack) {
                // this.ep.backEvent();
                this.sys.api.callParentFunction('backEvent', [], successCallBack, errorCallBack);
            },
            pageRef_photoDeleteEvent: function (terId) {
                this.photoDelete(terId);
            },
            pageRef_photoNewEvent: function (terId) {
                this.photoNew(terId);
            },
            pageRef_photoModifyEvent: function (terId, title) {
                this.photoModify(terId, title);
            },
            pageRef_activityManageBack: function () {
                this.activityManageBack();
            },
            pageRef_enrollChannelChange: function (terActivityId, type) {
                var tableName = this.mac.tb.groupActivity;
                var data = {};
                data.id = [terActivityId];
                data[this.mac.fd.groupActivity.openEnrollChannel] = [type];
                this.sys.api.recordModify(tableName, data, function (result) {
                }, function (error) {
                });
            },
            pageRef_activityEditEvent: function (terActivityId) {
                let that = this;
                this.terActivityId = terActivityId;

                this.curListIndex = 0;
                this.isMyManage = true;
                this.$nextTick(function () {
                    this.startModule(function () {
                        that.$refs.pageRef.activityEdit(terActivityId);
                    }, function () {
                    })
                })
            },


            // 活动管理页面方法：
            activityManageBack() {
                this.isMyManage = true;
                this.$nextTick(function () {
                    this.startModule(function () {
                    }, function () {
                    })
                })
            },
            photoDelete: function (terId) {
                var tableName = this.mac.tb.myPhoto;
                var arrRecord = [terId];
                this.sys.api.recordDelete(tableName, arrRecord, function (result) {
                }, function (error) {
                });
            },
            photoNew: function (terId) {

            },
            photoModify: function (terId, title) {
                var tableName = this.mac.tb.myPhoto;
                var data = {};
                data.id = [terId];
                data[this.mac.fd.myPhoto.name] = [title];
                this.sys.api.recordModify(tableName, data, function (result) {
                }, function (error) {
                });
            },

            ticketPass: function (terId, successCallBack, errorCallBack) {
                var tableName = this.mac.tb.groupActivityBill;
                var data = {};
                data.id = [terId];
                data[this.mac.fd.groupActivityBill.status] = [this.mac.enum.groupActivityBill.status.finish];
                this.sys.api.recordModify(tableName, data, function (result) {
                    successCallBack();
                }, function (error) {
                    errorCallBack(error);
                });
            },
            refundPass: function (terIdArr, successCallBack, errorCallBack) {
                var tableName = this.mac.tb.groupActivityBill;
                var data = {};
                data.id = terIdArr;
                data[this.mac.fd.groupActivityBill.status] = [];
                for (let i = 0; i < terIdArr.length; i++) {
                    data[this.mac.fd.groupActivityBill.status].push(this.mac.enum.groupActivityBill.status.refunding)
                }
                this.sys.api.recordModify(tableName, data, function (result) {
                    successCallBack();
                }, function (error) {
                    errorCallBack(error);
                });
            },
            orderApproval: function (terIdArr, type, rejectReason, successCallBack, errorCallBack) {
                var tableName = this.mac.tb.groupActivityBill;
                var data = {};
                data.id = terIdArr;
                data[this.mac.fd.groupActivityBill.status] = [];

                if (type === 0) {
                    for (let i = 0; i < terIdArr.length; i++) {
                        data[this.mac.fd.groupActivityBill.status].push(this.mac.enum.groupActivityBill.status.checkTicket)
                    }
                } else {
                    data[this.mac.fd.groupActivityBill.rejectReason] = [];
                    for (let i = 0; i < terIdArr.length; i++) {
                        data[this.mac.fd.groupActivityBill.status].push(this.mac.enum.groupActivityBill.status.reject);
                        data[this.mac.fd.groupActivityBill.rejectReason].push(rejectReason);
                    }
                }

                this.sys.api.recordModify(tableName, data, function (result) {
                    successCallBack();
                }, function (error) {
                    errorCallBack(error);
                });
            },

            seccodeVerify: function (terId, codeValue, successCallBack, errorCallBack) {
                let data = {
                    1: '1122',
                    2: '123456',
                    5: '6666'
                };
                if (data[terId] == codeValue) {
                    successCallBack(true);
                } else {
                    successCallBack(false);
                }
            },

            dataAnalyGet: function (terActivityId, successCallBack, errorCallBack) {
                let data = {
                    totalBrowse: 1200,
                    dailyBrowse: [100, 120, 300, 150, 200, 80, 70, 100, 110, 70, 120, 300, 150, 200, 80, 70, 600],
                    totalShare: 1000,
                    dailyShare: [80, 100, 200, 150, 180, 80, 90, 50, 100, 70, 100, 200, 150, 180, 80, 90, 350],
                    totalEnroll: 400,
                    dailyEnroll: [30, 50, 40, 20, 60, 40, 35, 45, 15, 65, 40, 20, 60, 40, 35, 45, 150],
                    totalIncome: 3000,
                    dailyIncome: [500, 400, 300, 350, 400, 340, 250, 300, 100, 60, 300, 350, 400, 340, 250, 300, 500],
                };
                successCallBack(data);
            },


            // 活动列表页面事件：
            // pageRef_detailPageEvent: function (curActivityId, terActivityId) {
            //     this.ep.detailPageEvent(curActivityId, terActivityId);
            // },
            pageRef_activityWithdrawEvent: function (curActivityId, terActivityId) {
                // this.ep.activityWithdrawEvent(curActivityId, terActivityId);
                this.activityWithdraw(curActivityId, terActivityId);
            },
            pageRef_managePageEvent: function (curActivityId, terActivityId, type) {
                // this.ep.managePageEvent(curActivityId, terActivityId, type);
            },
            pageRef_activityCloseEvent: function (curActivityId, terActivityId) {
                // this.ep.activityCloseEvent(curActivityId, terActivityId);
                this.activityClose(curActivityId, terActivityId);
            },
            pageRef_editPageEvent: function (curActivityId, terActivityId) {
                // this.ep.editPageEvent(curActivityId, terActivityId);
            },
            pageRef_activityDeleteEvent: function (curActivityId, terActivityId) {
                this.activityDelete(curActivityId, terActivityId);
            },
            pageRef_getManageInfoIn: function (groupId, userId, successCallBack, errorCallBack) {
                this.getManageInfo(groupId, userId, successCallBack, errorCallBack);
            },
            pageRef_getActivityNumberEvent: function (expressionArr, successCallBack, errorCallBack) {
                this.getActivityNumber(expressionArr, successCallBack, errorCallBack);
            },

            pageRef_closeClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.activityClose(terActivityId, successCallBack, errorCallBack);
            },
            pageRef_backClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.activityWithdraw(terActivityId, successCallBack, errorCallBack);
            },
            pageRef_delClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.activityDelete(terActivityId, successCallBack, errorCallBack);
            },
            pageRef_activityClickEvent: function (terActivityId, clerkType) {
                // this.ep.activityClickEvent(curActivityId);
                // console.error('打开活动管理成功, ' + clerkType);
                this.openActivityManage(terActivityId, clerkType)
            },
            pageRef_draftClickEvent: function (curActivityId) {
                // this.ep.activityClickEvent(curActivityId);
                console.error('打开活动编辑成功');
            },
            pageRef_showManageEvent: function (terActivityId, clerkType) {
                // console.error('打开报名管理成功');
                this.openApplyManage(terActivityId, clerkType)
            },
            pageRef_showUploadEvent: function (terActivityId, clerkType) {
                // console.error('打开图片上传成功');
                this.openUpload(terActivityId, clerkType)
            },
            pageRef_showCheckEvent: function (terActivityId, clerkType) {
                // console.error('打开验票成功');
                this.openCheck(terActivityId, clerkType)
            },
            pageRef_activityApprovalEvent: function (terActivityId, rejectReason, successCallBack, errorCallBack) {
                this.activityApproval(terActivityId, rejectReason, successCallBack, errorCallBack);
            },

            // 活动列表页面方法：
            getManageInfo: function (groupId, userId, successCallBack, errorCallBack) {
                if (groupId === 100 && userId === 1) {
                    successCallBack(true)
                } else {
                    successCallBack(false);
                }
            },
            getActivityNumber: function (expressionArr, successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let dbObj;
                let dbFlag;
                let oneContext;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nstep: 0
                };
                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null;
                }
                para = errorCallBack;
                while (1) {
                    dbFlag = 0;
                    switch (para.nstep) {
                        case 0:
                            para.i = 0;
                            para.result = [];
                            para.nstep = 'queryActivityNumber';
                            if (++dbFlag === 2) {
                                $this.getActivityNumber(expressionArr, successCallBack, errorCallBack);
                            }
                            break
                        case 'queryActivityNumber':
                            objectName = $this.mac.tb.groupActivity;
                            parentRecord = null;
                            condition = expressionArr[para.i];
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function (result) {
                                    if (result === null) {
                                        para.result.push(0);
                                    } else {
                                        para.result.push(dbData[$this.mac.fd.id].length);
                                    }
                                    para.i++;
                                    if (para.i === expressionArr.length) {
                                        para.nstep = 'end';
                                    }
                                    if (++dbFlag === 2) {
                                        $this.getActivityNumber(expressionArr, successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'end':
                            para.successCallBack(para.result);
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            activityDelete: function (terActivityId, successCallBack, errorCallBack) {
                var tableName = this.mac.tb.groupActivity;
                var data = {};
                data.id = [terActivityId];
                data[this.mac.fd.groupActivity.status] = [this.mac.enum.groupActivity.status.deleted];
                this.sys.api.recordModify(tableName, data, function (result) {
                    successCallBack();
                }, function (error) {
                });
            },
            activityClose: function (terActivityId, successCallBack, errorCallBack) {
                var tableName = this.mac.tb.groupActivity;
                var data = {};
                data.id = [terActivityId];
                data[this.mac.fd.groupActivity.status] = [this.mac.enum.groupActivity.status.closed];
                this.sys.api.recordModify(tableName, data, function (result) {
                    successCallBack();
                }, function (error) {
                });
            },
            activityWithdraw: function (terActivityId, successCallBack, errorCallBack) {
                var tableName = this.mac.tb.groupActivity;
                var data = {};
                data.id = [terActivityId];
                data[this.mac.fd.groupActivity.status] = [this.mac.enum.groupActivity.status.draft];
                this.sys.api.recordModify(tableName, data, function (result) {
                    successCallBack();
                    // 跳转到创建活动页面：
                }, function (error) {
                });
            },
            activityApproval: function (terActivityId, rejectReason, successCallBack, errorCallBack) {
                var tableName = this.mac.tb.groupActivity;
                var data = {};
                data.id = [terActivityId];
                data[this.mac.fd.groupActivity.status] = [];
                if(rejectReason === null) {
                    data[this.mac.fd.groupActivity.status].push(this.mac.enum.groupActivity.status.released)
                } else {
                    data[this.mac.fd.groupActivity.status].push(this.mac.enum.groupActivity.status.rejected);
                    data[this.mac.fd.groupActivity.refuseReason] = [rejectReason]
                }

                this.sys.api.recordModify(tableName, data, function (result) {
                    successCallBack();
                }, function (error) {
                    errorCallBack();
                });
            },
            openActivityManage(terActivityId, clerkType) {
                this.terActivityId = terActivityId;
                this.clerkType = clerkType;
                clerkType === '策划人' ? this.curListIndex = 0 : this.curListIndex = 2;
                this.curManageIndex = 0;
                this.isMyManage = false;
                this.$nextTick(function () {
                    this.startModule(function () {
                    }, function () {
                    })
                })
            },
            openApplyManage(terActivityId, clerkType) {
                this.terActivityId = terActivityId;
                this.clerkType = clerkType;
                this.curListIndex = 2;
                this.curManageIndex = 2;
                this.isMyManage = false;
                this.$nextTick(function () {
                    this.startModule(function () {
                    }, function () {
                    })
                })
            },
            openUpload(terActivityId, clerkType) {
                let that = this;
                this.terActivityId = terActivityId;
                this.clerkType = clerkType;
                this.curListIndex = 2;
                this.curManageIndex = 0;
                this.isMyManage = false;
                this.$nextTick(function () {
                    this.startModule(function () {
                        that.$refs.pageRef.openPictureUpload()
                    }, function () {
                    })
                })
            },
            openCheck(terActivityId, clerkType) {
                let that = this;
                this.terActivityId = terActivityId;
                this.clerkType = clerkType;
                this.curListIndex = 2;
                this.curManageIndex = 0;
                this.isMyManage = false;
                this.$nextTick(function () {
                    this.startModule(function () {
                        that.$refs.pageRef.showCheckTicket()
                    }, function () {
                    })
                })
            },


            // 活动创建：
            pageRef_getResourceIdEvent: function (id, successCallBack, errorCallBack) {
                let $this = this;
                $this.sys.api.getSourceRecord($this.mac.tb.groupActivity, [id], '',
                    function (result) {
                        successCallBack(result)
                    }, function (error) {
                        console.error(error)
                    })
            },
            pageRef_activityIssueIn: function (data, successCallBack, errorCallBack) {

            },
            pageRef_activityDraftSaveIn: function (data, successCallBack, errorCallBack) {

            },
            pageRef_activityPreViewIn: function (activityID, successCallBack, errorCallBack) {
                console.log('跳转到活动详情页面，活动id为' + activityID);
            },
            pageRef_getTerminalRecordEvent: function (tableName, expression, successCallBack, errorCallBack) {
                this.getTerminalRecord(tableName, expression, successCallBack, errorCallBack)
            },
            getTerminalRecord: function (tableName, expression, successCallBack, errorCallBack) {
                let $this = this;
                let dbData = {};
                dbData[$this.mac.fd.id] = [];
                $this.sys.api.recordQuery(tableName, null, expression, dbData, function () {
                    if (dbData[$this.mac.fd.id].length !== 0) {
                        successCallBack(dbData[$this.mac.fd.id]);
                    } else {
                        successCallBack(null);
                    }
                }, function (error) {
                    console.error(error)
                });
            },


            // 活动详情页：
            pageRef_activitySrcIDGetIn: function (successCallBack, errorCallBack) {
                successCallBack(1)
            },
            pageRef_getOrderNumIn: function (activityId, successCallBack, errorCallBack) {
                let $this = this;
                let objectName = $this.mac.tb.groupActivityOrder;
                let parentRecord = null;
                let condition = $this.mac.fd.groupActivityOrder.groupActivityID + '=' + activityId + '&&' + $this.mac.fd.groupActivityOrder.status + '=' + $this.mac.enum.groupActivityOrder.status.finish;
                let dbData = {};
                dbData[$this.mac.fd.id] = [];
                $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                    function () {
                        successCallBack(dbData[$this.mac.fd.id].length);
                    }, function (error) {
                        console.error(error)
                    })
            },
            pageRef_discussAnswerIn: function (discussID, content, successCallBack, errorCallBack) {
                let $this = this;
                let objectName = $this.mac.tb.groupActivityDiscuss;
                let dbData = {};
                dbData[$this.mac.fd.id] = [discussID];
                dbData[$this.mac.fd.groupActivityDiscuss.answerContent] = [content];
                dbData[$this.mac.fd.groupActivityDiscuss.answerTime] = [$this.getCurrentTime()];
                $this.sys.api.recordModify(objectName, dbData,
                    function () {
                        successCallBack();
                    }, function (error) {
                        errorCallBack(error)
                    })
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
            },
            getCurrentTime: function () {
                let newTime = new Date();
                let hour, minute, second, year, month, date;
                hour = newTime.getHours() < 10 ? ("0" + newTime.getHours()) : newTime.getHours();
                minute = newTime.getMinutes() < 10 ? ("0" + newTime.getMinutes()) : newTime.getMinutes();
                second = newTime.getSeconds() < 10 ? ("0" + newTime.getSeconds()) : newTime.getSeconds();
                year = newTime.getFullYear();
                month = newTime.getMonth() + 1 < 10 ? ("0" + (newTime.getMonth() + 1)) : newTime.getMonth() + 1;
                date = newTime.getDate() < 10 ? ("0" + newTime.getDate()) : newTime.getDate();
                return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
            },
        }
    }
</script>
<style>
    #apply-manage-terminal {
        width: 100%;
        height: 100%;
    }
</style>
