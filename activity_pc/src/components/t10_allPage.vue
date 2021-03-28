<template>
    <div class="box">
        <p10
                ref="pageGene"
                refId="pageGene"
                :para="para"
                :curList="curList">
        </p10>
        <!--<el-button @click="addData()">添加数据</el-button>-->
    </div>
</template>
<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    // import p10 from './activityCreate/activityCreate';
    // import p10 from './activityDetail/activityDetail';
    import p10 from '@/components/activity/activityList_work/activityList_work.vue';
    // import p10 from '@/components/activity/activityDetail_user/activityDetail.vue';
    // import p10 from './myCollect/myOrder';

    export default {
        name: mac.curTerminalInfo.terminalVue,
        components: {
            p10
        },
        provide: function () {
        },
        data: function () {
            return {
                curList: 2,

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
                pvt_eventPortInput: []
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
            Object.assign(this, libSys, libUpload);
            this.pvt_initSysData();
            $this.init(function (result) {
                    console.log(result);
                }, function (error) {
                    console.log(error);
                }
            )
        },
        methods: {
            //初始化模块变量函数
            initRam: function () {
                this.vueName = mac.curTerminalInfo.terminalVue;
                this.mac = mac.mac;
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            init: function (successCallBack, errorCallBack) {
                let $this = this;
                let fnname = 'terminal.init';
                let tableName;
                let objectName;
                let condition;
                let dbData;
                let parentRecord;

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                var para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            $this.cloudCtrl.pageStart(function (result) {
                                $this.inPara = result;
                                $this.geneInstance = $this.inPara.geneInstance;
                                $this.sys.api = $this.inPara.geneInstance.geneAPI;
                                $this.geneAPI = $this.inPara.geneInstance.geneAPI;
                                $this.inPara.geneInstance.geneUser = $this;
                                para.nStep = 'dataIsExist';
                                if (++$dbFlag === 2) {
                                    $this.init(successCallBack, errorCallBack);
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
                            dbData[$this.mac.fd.groupActivity.name] = ['2019深圳宠物马拉松运动会', '暨第三届深圳遛狗节', '2019全球智能化商业峰会（秋季场）'];
                            dbData[$this.mac.fd.groupActivity.abstract] = ['全球青年创新大会（Global Youth Innovation Conference，GYIC）由工信部、中国产业创新联盟，以及北京、上海、天津、深圳和杭州等相关政府部门支持，近百家创投机构助力，由国内100多家媒体机构联袂支持打造的大型品牌活动。 历年来，腾讯、百度、蔚来汽车、大疆等数百家知名', '北京、上海、天津、深圳和杭州等相关政府部门', '100多家媒体机构联袂支持打造的大'];
                            dbData[$this.mac.fd.groupActivity.details] = ['<div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div>', '<div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div>', '<div>深圳宠物届的年度盛典即将到来？！</div><div>这是专属于狗狗狂欢的节日！？！</div><div>10月4号~10月5号！</div><div>宠友会将在观澜湖举办</div><div>2019深圳宠物马拉松运动会</div>'];
                            dbData[$this.mac.fd.groupActivity.mode] = [$this.mac.enum.groupActivity.mode.outLine, $this.mac.enum.groupActivity.mode.outLine, $this.mac.enum.groupActivity.mode.outLine];
                            dbData[$this.mac.fd.groupActivity.label] = [20, 12, 14];
                            dbData[$this.mac.fd.groupActivity.publicCustomer] = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
                            dbData[$this.mac.fd.groupActivity.refundExplain] = ['1、本活动由主办方委托【活动行】代为处理退款事宜。 2、如需退款，请于活动开始前的24小时之前提交申请，活动开始前的24小时内不接受退款。 3、退款时，将收取票价的10%作为手续费。', '1、本活动由主办方委托【活动行】代为处理退款事宜。 2、如需退款，请于活动开始前的24小时之前提交申请，活动开始前的24小时内不接受退款。 3、退款时，将收取票价的10%作为手续费。', '1、本活动由主办方委托【活动行】代为处理退款事宜。 2、如需退款，请于活动开始前的24小时之前提交申请，活动开始前的24小时内不接受退款。 3、退款时，将收取票价的10%作为手续费。'];
                            dbData[$this.mac.fd.groupActivity.showEnrollInfo] = [$this.mac.enum.groupActivity.showEnrollInfo.yes, $this.mac.enum.groupActivity.showEnrollInfo.yes, $this.mac.enum.groupActivity.showEnrollInfo.yes];
                            dbData[$this.mac.fd.groupActivity.phone] = ['+86-15888888888', '15888884152', '15884578888'];
                            dbData[$this.mac.fd.groupActivity.author] = [1, 1, 1];
                            dbData[$this.mac.fd.groupActivity.authorName] = ['张三', '李四', '王五'];
                            dbData[$this.mac.fd.groupActivity.status] = [$this.mac.enum.groupActivity.status.released, $this.mac.enum.groupActivity.status.closed, $this.mac.enum.groupActivity.status.draft];
                            dbData[$this.mac.fd.groupActivity.startTime] = ['2019-10-15 09:00:00', '2019-10-16 09:00:00', '2019-10-17 09:00:00'];
                            dbData[$this.mac.fd.groupActivity.endTime] = ['2119-10-17 14:00:00', '2119-10-18 14:00:00', '2119-10-19 14:00:00'];
                            dbData[$this.mac.fd.groupActivity.place] = [
                                {
                                    "id": [5, 107, 1069],
                                    "name": ["广东省", "深圳市", "南山区"],
                                    "place": "深圳大学体育场",
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
                                }
                            ];
                            dbData[$this.mac.fd.groupActivity.praiseNumber] = [50, 23, 45];
                            dbData[$this.mac.fd.groupActivity.commentNumber] = [13, 11, 34];
                            dbData[$this.mac.fd.groupActivity.favoriteNumber] = [20, 45, 67];
                            dbData[$this.mac.fd.groupActivity.browerNumber] = [100, 123, 237];
                            dbData[$this.mac.fd.groupActivity.forwardNumber] = [30, 12, 23];
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [[30, 20, 18, 10], [30, 24, 18, 12], [36, 20, 14, 18]];
                            dbData[$this.mac.fd.groupActivity.createTime] = ['2019-09-29 15:23:20', '2019-09-09 17:00:00', '2019-09-19 18:00:00'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.activityID = dbData[$this.mac.fd.id][0];
                                    para.nStep = 'groupActivityTicketTypeNew'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityTicketTypeNew':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.name] = ['免费票', '一人一犬票', '2人1犬票', '2人1犬'];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [0, 68, 118, 158];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = [$this.mac.enum.groupActivityTicketType.approval.yes, $this.mac.enum.groupActivityTicketType.approval.yes, $this.mac.enum.groupActivityTicketType.approval.yes, $this.mac.enum.groupActivityTicketType.approval.yes];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [1, 1, 1, 1];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [5, 3, 2, 2];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = ['2019-10-13 09:00:00', '2019-10-13 09:00:00', '2019-10-14 00:00:00', '2019-10-14 00:00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [240, 300, 200, 200];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [0, 1, 2, 3];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = ['2019-10-15 09:00:00', '2019-10-15 09:00:00', '2019-10-16 00:00:00', '2019-10-16 00:00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = ['2019-10-15 23:00:00', '2019-10-26 23:00:00', '2019-10-17 14:00:00', '2019-10-17 14:00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [null, '2019-10-08 00:00:00', '2019-10-10 00:00:00', '2019-10-10 00:00:00'];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [null, '2019-10-15 00:00:00', '2019-10-25 00:00:00', '2019-10-15 00:00:00'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityMemberNew'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityMemberNew':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [1, 1, 1, 1];
                            dbData[$this.mac.fd.groupActivityManageMember.function] = [4, 1, 2, 3];

                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityMemberNew2'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityMemberNew2':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = 2;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [1, 1];
                            dbData[$this.mac.fd.groupActivityManageMember.function] = [4, 1];

                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityEnrollFormNew'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
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
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'activityBudgetFormNew':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = ['办公费', '印刷费', '交通费'];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = [0, 0, 0];
                            dbData[$this.mac.fd.groupActivityBudgetForm.unit] = ['元', '元', '元'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityOrderNew'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityOrderNew':
                            objectName = $this.mac.tb.groupActivityOrder;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityOrder.groupActivityID] = [para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID]
                            dbData[$this.mac.fd.groupActivityOrder.applicant] = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                            dbData[$this.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
                            dbData[$this.mac.fd.groupActivityOrder.name] = ['李君昊', '李国艳', '李恩德', '李文雅', '李文轩', '李文博', '李文璇', '李文萱', '李文渲', '李美红']
                            dbData[$this.mac.fd.groupActivityOrder.price] = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
                            dbData[$this.mac.fd.groupActivityOrder.status] = [$this.mac.enum.groupActivityOrder.status.finish, $this.mac.enum.groupActivityOrder.status.finish, $this.mac.enum.groupActivityOrder.status.finish, $this.mac.enum.groupActivityOrder.status.finish, $this.mac.enum.groupActivityOrder.status.finish, $this.mac.enum.groupActivityOrder.status.finish, $this.mac.enum.groupActivityOrder.status.finish, $this.mac.enum.groupActivityOrder.status.finish, $this.mac.enum.groupActivityOrder.status.finish, $this.mac.enum.groupActivityOrder.status.finish];
                            dbData[$this.mac.fd.groupActivityOrder.createTime] = ['2019-09-21 16:00:00', '2019-09-21 16:00:00', '2019-09-21 16:00:00', '2019-09-21 16:00:00', '2019-09-21 16:00:00', '2019-09-21 16:00:00', '2019-09-21 16:00:00', '2019-09-21 16:00:00', '2019-09-21 16:00:00', '2019-09-21 16:00:00'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityDiscussNew'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'groupActivityDiscussNew':
                            objectName = $this.mac.tb.groupActivityDiscuss;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityDiscuss.groupActivityID] = [para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID, para.activityID]
                            dbData[$this.mac.fd.groupActivityDiscuss.questioner] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                            dbData[$this.mac.fd.groupActivityDiscuss.name] = ['李君昊', '李国艳', '李恩德', '李文雅', '李文轩', '李文博', '赵泽晨', '赵子桐', '赵建川', '赵琦锐', '赵家妍', '赵宇琪', '赵佳鑫']
                            dbData[$this.mac.fd.groupActivityDiscuss.askContent] = ['三个团票是28号上午场跟下午场都能参加吗？', '九月28号周六没时间怎么办?', '请问至尊VIP票是可以跟大咖他们一起吃晚饭对吗？', '3人团购，是3个人两个会场都能用吗', '不错的活动，支持???? 对于我这样的老用户，基本之前举办大会都参加的，有没有优惠啊？????', '活动优惠票什么时候结束？', '11111', '2222', '55555', '66666', '77777', '88888', '999999'];
                            dbData[$this.mac.fd.groupActivityDiscuss.askTime] = ['2019-08-10 00:00:00', '2019-08-15 00:00:00', '2019-08-20 00:00:00', '2019-08-25 00:00:00', '2019-08-30 00:00:00', '2019-09-15 00:00:00', '2019-09-20 00:00:00', '2019-09-25 00:00:00', '2019-09-26 00:00:00', '2019-09-27 00:00:00', '2019-09-28 00:00:00', '2019-09-29 00:00:00', '2019-09-30 00:00:00']
                            dbData[$this.mac.fd.groupActivityDiscuss.answerContent] = ['是的，可以参加全天场活动的，9月28号活动现场还会赠送10月20号腾讯滨海大厦场活动。', '没问题', '没问题', '没问题', null, null, null, null, null, null, null, '可以', '谢谢'];
                            dbData[$this.mac.fd.groupActivityDiscuss.answerTime] = ['2019-08-10 10:00:00', '2019-08-16 10:00:00', '2019-08-21 10:00:00', '2019-08-26 10:00:00', null, null, null, null, null, null, null, '2019-09-30 00:00:00', '2019-09-30 09:00:00'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'eventStart'
                                    if (++$dbFlag === 2) {
                                        $this.addData(successCallBack, errorCallBack);
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break;

                        case 'eventStart':
                            $this.inPara.geneInstance.eventStart(mac.curTerminalInfo.pageEvent, $this.inPara.instruct, $this.inPara.command, $this.inPara.paraObject, function (result) {
                                console.log(result);
                                // for (let i in result.subGeneHandle) {
                                //     $this.outPara.push({
                                //         ref: result.subGeneHandle[i].subGeneName,
                                //         instanceObj: result.subGeneHandle[i]
                                //     })
                                // }
                                for (let i in result.subGeneHandle) {
                                    $this.subGeneHandle.push(result.subGeneHandle[i]);
                                }
                                para.nStep = 'activitySrcIDGet';
                                if (++$dbFlag === 2) {
                                    $this.init(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'activitySrcIDGet':
                            $this.activitySrcIDGet(function () {
                                para.nStep = 'end';
                                if (++$dbFlag === 2) {
                                    $this.init(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error)
                            })
                        case 'end':
                            para.successCallBack('success');
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },


            getManageInfo: function(groupId, userId, successCallBack, errorCallBack) {
                if(groupId === 100 && userId === 1) {
                    successCallBack(true)
                } else {
                    successCallBack(false);
                }
            },

            getActivityNumber:function(expressionArr,successCallBack,errorCallBack){
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
                                $this.getActivityNumber(expressionArr,successCallBack,errorCallBack);
                            }
                            break
                        case 'queryActivityNumber':
                            objectName = $this.mac.tb.groupActivity;
                            parentRecord = null;
                            condition = expressionArr[para.i];
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function (result) {
                                    if(result === null){
                                        para.result.push(0);
                                    }else{
                                        para.result.push(dbData[$this.mac.fd.id].length);
                                    }
                                    para.i++;
                                    if(para.i === expressionArr.length){
                                        para.nstep = 'end';
                                    }
                                    if (++dbFlag === 2) {
                                        $this.getActivityNumber(expressionArr,successCallBack,errorCallBack);
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



            startModule: function (successCallBack, errorCallBack) {
            },

            changePage: function (para) {
                this.outPara = [];
                this.outPara.push(para[0])
            },
            buttonClick: function () {
                let $this = this;
                $this.geneAPI.recordNew('userInfo', '', {name: ['name1']}, function (result) {
                    console.log(result)
                }, function (error) {
                    console.log(error)
                })
            },
            eventEnd: function () {
                let $this = this;
                $this.geneAPI.eventEnd(function (result) {
                    console.log(result)
                }, function (error) {
                    console.log(error)
                })
            },
            to_tx: function (tx) {
                let $this = this;
                let HTMLpage = 'http://14.gts.com:85/index.html';
                let para = '';
                $this.geneAPI.terminalGeneStart(mac.arrTerminalInfo[tx].groupID, mac.arrTerminalInfo[tx].cloudID,
                    mac.arrTerminalInfo[tx].vesselID, mac.arrTerminalInfo[tx].geneID, HTMLpage, para, function (result) {
                        console.log('terminalGeneStart success!')
                    }, function (error) {
                        console.log(error)
                    })
            },
            activitySrcIDGet: function (successCallBack, errorCallBack) {
                let $this = this;
                var geneInputData = {};
                // geneInputData[$this.mac.tb.groupActivity] = [$this.mac.fd.groupActivity.name,$this.mac.fd.groupActivity.details,$this.mac.fd.groupActivity.label,$this.mac.fd.groupActivity.picture,$this.mac.fd.groupActivity.poster, $this.mac.fd.groupActivity.place, $this.mac.fd.groupActivity.startTime,$this.mac.fd.groupActivity.endTime,$this.mac.fd.groupActivity.refundExplain,$this.mac.fd.groupActivity.enrollNumber,$this.mac.fd.groupActivity.favoriteNumber,$this.mac.fd.groupActivity.forwardNumber,$this.mac.fd.groupActivity.praiseNumber];
                // geneInputData[$this.mac.tb.groupActivityTicketType] = null;
                geneInputData[$this.mac.tb.groupActivity] = null;
                var expression = $this.mac.fd.id + '=' + 9;
                var start = null;
                var total = null;
                var sort = ['id,asc'];
                var destGeneSite = '';
                $this.sys.api.conditiondataInput($this.mac.tb.groupActivity, geneInputData, expression, start, total, sort, destGeneSite,
                    function (result) {
                        successCallBack(result)
                    }, function (error) {
                        console.error(error)
                    })

            },


            pageGene_activitySrcIDGetIn: function (successCallBack, errorCallBack) {
                successCallBack(1)
            },
            pageGene_getOrderNumberEvent: function (id, successCallBack, errorCallBack) {
                let $this = this;
                successCallBack(0)
            },
            pageGene_groupActivityOrderEvent: function (successCallBack, errorCallBack) {
                let $this = this;
                successCallBack()
                // var geneInputData = {};
                // geneInputData[$this.mac.tb.groupActivityOrder] = [$this.mac.fd.groupActivityOrder.createTime,$this.mac.fd.groupActivityOrder.name,$this.mac.fd.groupActivityOrder.headPortrait];
                // var expression = $this.mac.fd.groupActivityOrder.groupActivityID +'='+$this.para.activityID+'&&'+$this.mac.fd.groupActivityOrder.status +'='+$this.mac.enum.groupActivityOrder.status.complete;
                // var start = null;
                // var total = 10;
                // var sort = ['id,desc'];
                // var destGeneSite = '';
                // $this.sys.api.conditiondataInput($this.mac.tb.groupActivityOrder, geneInputData, expression, start, total, sort, destGeneSite,
                //     function (result) {
                //         successCallBack(result)
                //     }, function (error) {
                //         console.error(error)
                //     })
            },
            pageGene_discussAnswerIn: function (id, successCallBack, errorCallBack) {
                successCallBack()
            },

            pageGene_getOrderNumberEvent: function (id, successCallBack, errorCallBack) {
                let $this = this;
                successCallBack(0)
            },
            pageGene_moduleChangeEvent: function (number, data) {
                console.log('跳转到报名表单填写,活动id=' + data['activityId'] + ',票种id=' + data['ticketId'] + ',票数=' + data['number'] + '。');
            },
            pageGene_activityBrowseIn: function (successCallBack, errorCallBack) {
                console.log('浏览记录加1');
            },
            pageGene_activityHandleIn: function (activityID, commandType, successCallBack, errorCallBack) {
                console.log('互动记录加1');
            },
            pageGene_getHandleStateIn: function (data, successCallBack, errorCallBack) {
                successCallBack(1)
            },
            pageGene_getAttentionStateIn: function (data, successCallBack, errorCallBack) {
                successCallBack(1)
            },
            pageGene_groupAttentionIn: function (data, successCallBack, errorCallBack) {
                successCallBack(1)
            },
            pageGene_discussQuestionIn: function (data, successCallBack, errorCallBack) {
                successCallBack(1)
            },
            pageGene_getTicketNumberIn: function (data, successCallBack, errorCallBack) {
                successCallBack(0)
            },
            pageGene_getSumIn: function (data, successCallBack, errorCallBack) {
                successCallBack([10, 666])
            },

            pageGene_balancePayIn: function (terOrderId, successCallBack, errorCallBack) {
                successCallBack()
            },
            pageGene_thirdPayIn: function (terOrderId, thirdType, successCallBack, errorCallBack) {
                successCallBack()
            },


            pageGene_detailPageEvent: function (curActivityId, terActivityId) {
                this.ep.detailPageEvent(curActivityId, terActivityId);
            },
            pageGene_activityWithdrawEvent: function (curActivityId, terActivityId) {
                this.ep.activityWithdrawEvent(curActivityId, terActivityId);
            },
            pageGene_managePageEvent: function (curActivityId, terActivityId, type) {
                this.ep.managePageEvent(curActivityId, terActivityId, type);
            },
            pageGene_activityCloseEvent: function (curActivityId, terActivityId) {
                this.ep.activityCloseEvent(curActivityId, terActivityId);
            },
            pageGene_editPageEvent: function (curActivityId, terActivityId) {
                this.ep.editPageEvent(curActivityId, terActivityId);
            },
            pageGene_activityDeleteEvent: function (curActivityId, terActivityId) {
                this.ep.activityDeleteEvent(curActivityId, terActivityId);
            },
            pageGene_getManageInfoIn: function (groupId, userId, successCallBack, errorCallBack) {
                this.getManageInfo(groupId, userId, successCallBack, errorCallBack);
            },
            pageGene_getActivityNumberEvent: function (expressionArr,successCallBack,errorCallBack) {
                this.getActivityNumber(expressionArr,successCallBack,errorCallBack);
            },

        }
    }
</script>
<style>
    .box {
        width: 100%;
        height: 100%;
    }
</style>
