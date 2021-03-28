<template>
    <div v-show="pvt_win.isShow.backgroundManagement_pageWindow"
         :class="{backgroundManagement_page_container:true,backgroundManagement_page_col:true,backgroundManagement_page_col_backgroundManagement_pageWindow:true,backgroundManagement_page_col_backgroundManagement_pageWindow_size_large:attr.size==='large',backgroundManagement_page_col_backgroundManagement_pageWindow_size_medium:attr.size==='medium',backgroundManagement_page_col_backgroundManagement_pageWindow_size_small:attr.size==='small',backgroundManagement_page_col_backgroundManagement_pageWindow_size_min:attr.size==='min',backgroundManagement_page_col_backgroundManagement_pageWindow_checked:pvt_win.isChecked.backgroundManagement_pageWindow,backgroundManagement_page_col_backgroundManagement_pageWindow_disable:attr.disabled}"
         :style="pvt_win.style.backgroundManagement_pageWindow">
        <button @click="data_output_test">data output test</button>

        <div class="backgroundManagement_page_row backgroundManagement_page_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backgroundManagement_page_col:true,backgroundManagement_page_col_r1c1:true,backgroundManagement_page_col_r1c1_size_large:attr.size==='large',backgroundManagement_page_col_r1c1_size_medium:attr.size==='medium',backgroundManagement_page_col_r1c1_size_small:attr.size==='small',backgroundManagement_page_col_r1c1_size_min:attr.size==='min',backgroundManagement_page_col_r1c1_checked:pvt_win.isChecked.r1c1,backgroundManagement_page_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1">

                <back-man_toolbar
                        ref="toolbar"
                        refId="toolbar"
                        v-show="pvt_isShow.r1c1 === 'toolbar'"
                        :paraVarPair="pvt_r1c1.toolbar.paraVarPair"
                        :para="pvt_r1c1.toolbar.para"
                        :attr="pvt_r1c1.toolbar.attr">
                </back-man_toolbar>
            </div>
        </div>
        <div class="backgroundManagement_page_row backgroundManagement_page_row_row1">
            <div v-show="pvt_win.isShow.r2c1"
                 :class="{backgroundManagement_page_col:true,backgroundManagement_page_col_r2c1:true,backgroundManagement_page_col_r2c1_size_large:attr.size==='large',backgroundManagement_page_col_r2c1_size_medium:attr.size==='medium',backgroundManagement_page_col_r2c1_size_small:attr.size==='small',backgroundManagement_page_col_r2c1_size_min:attr.size==='min',backgroundManagement_page_col_r2c1_checked:pvt_win.isChecked.r2c1,backgroundManagement_page_col_r2c1_disable:attr.disabled}"
                 :style="pvt_win.style.r2c1">

                <back-man_main
                        ref="mainSm"
                        refId="mainSm"
                        v-show="pvt_isShow.r2c1 === 'mainSm'"
                        :paraVarPair="pvt_r2c1.mainSm.paraVarPair"
                        :para="pvt_r2c1.mainSm.para"
                        :attr="pvt_r2c1.mainSm.attr">
                </back-man_main>
            </div>
        </div>

    </div>
</template>
<script>
    import geneEvent from "../../../../public/jsFile/1";
    import dbCloudGeneID from "../../../../public/jsFile/db_cloud_module";
    import geneObj from "../../../../public/jsFile/db_1";

    import libSys from "@/components/baseComponent/libSys.js";
    import libUpload from "@/components/baseComponent/libUpload.js";
    import backMan_toolbar from "./toolbar.vue";
    import backMan_main from "./mainModule/mainModule.vue";

    export default {
        components: {backMan_toolbar, backMan_main},
        props: {
            refId: String,
            para: Object,
            inPara: Object,
            attr: {
                type: Object,
                default: function () {
                    return {size: "medium"};
                },
                validator: function (val) {
                    if (!val.size) val.size = "medium";
                    return true;
                },
            },
            number: Number,
        },
        provide: function () {
            return {
                sys: this.sys,
            };
        },
        inject: ["mac", "pageCtrl"],
        data: function () {
            return {
                mac: mac.mac,
                pvt_subModuleMap: {
                    vessel: ["r1c1", "r2c1"],
                    subModule: ["toolbar", "mainSm"],
                },
                pvt_isShow: {
                    r1c1: null,
                    r2c1: null,
                },
                pvt_win: {
                    isShow: {
                        backgroundManagement_pageWindow: true,
                        r1c1: true,
                        r2c1: true,
                    },
                    isChecked: {
                        backgroundManagement_pageWindow: false,
                        r1c1: false,
                        r2c1: false,
                    },
                    style: {
                        backgroundManagement_pageWindow: null,
                        r1c1: null,
                        r2c1: null,
                    },
                },
                pvt_eventPortInput: [],

                sys: {
                    api: null
                },
            };
        },
        watch: {
            inPara: {
                handler: function () {
                    let $this = this;
                    $this.$gene = 1;
                    for (let i in geneObj) {
                        $this[i] = geneObj[i];
                    }
                    $this.$r_db = geneObj.geneDB;
                    $this.$c_db_module = dbCloudGeneID;
                    $this.$gene_data = geneObj.geneData;
                    for (let i in geneEvent) {
                        $this[i] = geneEvent[i];
                    }
                    if (!$this.pageCtrl.pageCtrlHandle) {
                        $this.pageCtrl.pageCtrlHandle = new $CPageCtrl($this);
                    }
                    $this.pageCtrl.pageCtrlHandle.vueObj = $this;
                    $this.pageCtrl.pageCtrlHandle.pageStart(function () {
                        console.log("页面P1启动成功~");
                        //创建测试数据
                        $this.sys.api = $this.$apiDB;
                        $this.startModule(function () {
                        }, function (error) {
                            console.log(error)
                        });
                    }, function (error) {
                        console.error(error);
                    });
                },
                deep: true,
                immediate: true
            },
        },
        computed: {
            pvt_r1c1: function () {
                return {
                    toolbar: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: "medium",
                        },
                    },
                };
            },
            pvt_r2c1: function () {
                return {
                    mainSm: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: "medium",
                        },
                    },
                };
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
                let $this = this;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                };
                let dbFlag;
                let tableVariable, page, condition, destGeneSite, dbData, parentRecord, objectName;

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            $this.mac = mac.mac;
                            // 初始化数据
                            para.nStep = "downloadData";
                            ++dbFlag;
                            break;
                        case 'downloadData':
                            // 下载数据
                            para.tableArr = ['activity', 'customer', 'prize', 'lucky'];
                            para.i = 0;
                        case 'loop_downloadData':
                            tableVariable = [{
                                $table: para.tableArr[para.i],
                                $arrField: null,
                                $arrValue: null,
                                $arrSubTab: null
                            }]
                            page = {
                                table: para.tableArr[para.i],
                                number: 100,
                                arrSort: ['id,asc']
                            };
                            if (para.tableArr[para.i] === 'prize') {
                                page.arrSort = ['class,asc'];
                            } else if (para.tableArr[para.i] === 'customer') {
                                page.arrSort = ['number,asc'];
                            }
                            condition = null;
                            destGeneSite = {};
                            $this.sys.api.conditionInput(tableVariable, page, condition, destGeneSite, function () {
                                para.i++;
                                if (para.i >= para.tableArr.length) {
                                    para.nStep = "checkActivity";
                                } else {
                                    para.nStep = "loop_downloadData";
                                }
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.log(error)
                            })
                            break;
                        case 'checkActivity':
                            //查找数据
                            tableVariable = [{
                                $table: $this.mac.tb.activity,
                                $arrField: null,
                                $arrValue: null,
                                $arrSubTab: []
                            }];
                            condition = {};
                            condition[$this.mac.tb.activity] = $this.mac.fd.id + '=' + 1;
                            $this.sys.api.recordQuery(tableVariable, condition, function () {
                                var idArr = tableVariable[0].$arrValue;
                                if (idArr.length === 0) {
                                    para.nStep = 'addNewActivity';
                                } else {
                                    para.nStep = 'showModules';
                                }
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack)
                            break;
                        case 'addNewActivity':
                            //新增数据
                            tableVariable = null;
                            parentRecord = null;
                            objectName = $this.mac.tb.activity;
                            dbData = {};
                            var template = '尊敬的贵宾，特邀您参加瓴码云计算(PaaS)系统发布会，参会时间：2020/12/06 14:00-20:00,地址：深圳市万悦格兰云天大酒店2楼3号会议厅（宝安区前进一路90号），期待您的莅临！到达酒店后请您先到一楼大堂（入酒店大门左手边）签到并领取参会资料。您的参会二维码是：';
                            dbData[$this.mac.fd.activity.invite_template] = [template];
                            // dbData[$this.mac.fd.activity.status] = [$this.mac.enum.activity.status.not_start];
                            $this.sys.api.recordNew(tableVariable, parentRecord, objectName, dbData, function (result) {
                                para.activityId = result.record[0][0];
                                //上传数据
                                tableVariable = [{
                                    $table: $this.mac.tb.activity,
                                    $arrField: null,
                                    $arrValue: [para.activityId],
                                    $arrSubTab: []
                                }];
                                $this.sys.api.dataOutput(tableVariable, null, function () {
                                }, function (error) {
                                    console.log(error)
                                });
                                para.nStep = 'showModules';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "showModules":
                            //显示子组件
                            let refId = [
                                "toolbar", "mainSm"
                            ];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = "forceUpdateData";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "forceUpdateData":
                            $this.forceUpdateData(function () {
                                para.nStep = "startModule_toolbar";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case "startModule_toolbar":
                            //调用子组件的startModule
                            $this.sm['toolbar'].startModule(function () {
                                para.nStep = "startModule_mainSm";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "startModule_mainSm":
                            //调用子组件的startModule
                            $this.sm['mainSm'].startModule(function () {
                                para.nStep = "end";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "end":
                            para.successCallBack();
                            return;
                    }
                    if (++dbFlag === 1) {
                        return;
                    }
                }
            },

            mainSm_inviteEvent: function (mobile, content, successCallBack, errorCallBack) {
                console.log('发送短信', mobile);
                this.inviteIn(mobile, content, successCallBack, errorCallBack);
            },

            eventInput_issueIn: function () {
                this.$apiDB.eventInput("issueIn", [], function () {
                    console.log("issueIn输入成功");
                }, function (error) {
                    console.error(error);
                });
            },

            recordNew: function () {
                this.recordNew_(function () {
                    console.log("recordNew成功");
                }, function (error) {
                    console.error(error);
                });
            },

            dataOutput: function () {
                this.dataOutput_(function () {
                    console.log("dataOutput成功");
                }, function (error) {
                    console.error(error);
                });
            },



            data_output_test() {
                let $this = this;
                let tableVariable = [{
                    $geneAddr: 45,
                    $table: 'activity',
                    $arrField: null,
                    $arrValue: [4],
                    $arrOrgValue: [],
                    $allFlag: [1, 1, 1, 1],
                    $arrSubTab: []
                }];
                let destGeneSite = {
                    geneAddr: [48],
                    server: ['1'],
                };


                // todo 用于测试
                // debugger
                // $this.$apiDB.$db.cacheColWrite($this.$apiDB.dbName, 'activity', 'inviteTemplate', 0, '' + new Date().getTime());
                let data ={
                    $del: [new Date().getTime()],
                };
                debugger
                $this.$apiDB.$db.cacheRecordNew($this.$apiDB.dbName, 'activity', [''], null, data);
                this.$apiDB.dataOutput(tableVariable, destGeneSite, function (result) {
                    console.log(result);
                }, function (error) {
                    console.error(error);
                });
            },
        },
    };
</script>
<style lang="scss" scoped>
    .backgroundManagement_page_container {
        width: 100%;
        height: 100%;
    }

    .backgroundManagement_page_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .backgroundManagement_page_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backgroundManagement_page_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backgroundManagement_page_row {
        display: flex;
    }

    .backgroundManagement_page_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .backgroundManagement_page_col_backgroundManagement_pageWindow_size_medium {
        width: $backgroundManagement_page-backgroundManagement_pageWindow-medium-width;
        height: $backgroundManagement_page-backgroundManagement_pageWindow-medium-height;
    }

    .backgroundManagement_page_col_r1c1_size_medium {
        width: $backgroundManagement_page-r1c1-medium-width;
    }

    .backgroundManagement_page_row_row1 {
        height: calc(100% - 40px);
    }

    .backgroundManagement_page_col_r2c1_size_medium {
        width: $backgroundManagement_page-r2c1-medium-width;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }
</style>
