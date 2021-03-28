<template>
    <div class="orderAndCollectionPage">
        <div class="row row1">
            <div class="col orderAndCollectionPage_row1_col1">
                <page-header ref="smHeader"
                             refId="smHeader"
                             v-show="pvt_isShow.wHeader === 'smHeader'"
                             :paraVarPair="pvt_wHeader.smHeader.paraVarPair"
                             :para="pvt_wHeader.smHeader.para"
                             :attr="pvt_wHeader.smHeader.attr"></page-header>
            </div>
        </div>
        <div class="row row2">
            <div class="col orderAndCollectionPage_row2_col1">
                <div class="row row2_1_row1">
                    <div class="col orderAndCollectionPage_row2_1_row1_col1">
                        <lm-list ref="smList"
                                 refId="smList"
                                 v-show="pvt_isShow.wList === 'smList'"
                                 :paraVarPair="pvt_wList.smList.paraVarPair"
                                 :para="pvt_wList.smList.para"
                                 :attr="pvt_wList.smList.attr">

                        </lm-list>
                    </div>
                    <div class="col orderAndCollectionPage_row2_1_row1_col2">
                        <my-order ref="smOrder"
                                  refId="smOrder"
                                  v-show="pvt_isShow.wMain === 'smOrder'"
                                  :paraVarPair="pvt_wMain.smOrder.paraVarPair"
                                  :para="pvt_wMain.smOrder.para"
                                  :attr="pvt_wMain.smOrder.attr">
                        </my-order>
                        <my-collection ref="smCollection"
                                       refId="smCollection"
                                       v-show="pvt_isShow.wMain === 'smCollection'"
                                       :paraVarPair="pvt_wMain.smCollection.paraVarPair"
                                       :para="pvt_wMain.smCollection.para"
                                       :attr="pvt_wMain.smCollection.attr">
                        </my-collection>
                        <myRelease
                                ref="myReleaseRef"
                                refId="myReleaseRef"
                                v-show="pvt_isShow.wMain === 'myReleaseRef'"
                                :paraVarPair="pvt_wMain.myReleaseRef.paraVarPair"
                                :para="pvt_wMain.myReleaseRef.para"
                                :attr="pvt_wMain.myReleaseRef.attr">
                        </myRelease>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row3">
            <div class="col orderAndCollectionPage_row3_col1">
                <page-footer ref="smFooter"
                             refId="smFooter"
                             v-show="pvt_isShow.wFooter === 'smFooter'"
                             :paraVarPair="pvt_wFooter.smFooter.paraVarPair"
                             :para="pvt_wFooter.smFooter.para"
                             :attr="pvt_wFooter.smFooter.attr"></page-footer>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    //引入子组件
    import PageHeader from './pageHeader/header.vue';
    // import MyOrder from './myOrder/myOrder.vue';
    // import MyCollection from './myCollection/myCollection.vue';
    import PageFooter from './pageFoot/footer.vue';
    import myRelease from './myRelease/myRelease';

    export default {
        name: 'myOrderAndCollectionPage',
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        components: {
            PageHeader,
            PageFooter,
            myRelease
        },
        provide: function () {
            return {
                sys: this.sys
            }
        },
        data: function () {
            return {
                // 工具内部变量
                // 因为不对外公开，为免和用户定义变量冲突，内部变量以pvt_开头
                // 子模块与所属容器的对应关系
                pvt_subModuleMap: {
                    subModule: [
                        'smHeader',
                        'smList',
                        'smOrder', 'smCollection', 'myReleaseRef',
                        'smFooter'
                    ],
                    vessel: [
                        'wHeader',
                        'wList',
                        'wMain', 'wMain', 'wMain',
                        'wFooter',
                    ]
                },
                // 各容器中模块显示状态；显示隐藏某组件，只需要修改这里的值
                pvt_isShow: {
                    wHeader: null,
                    wList: null,
                    wMain: null,
                    wFooter: null,
                },
                pvt_eventPortInput: [],
                sys: {
                    api: null,
                },

                tabsIndex: 0,
                groupInfo: {
                    name: '',
                    logo: ''
                }
            }
        },
        computed: {
            pvt_wHeader: function () {
                return {
                    smHeader: {
                        paraVarPair: {},
                        para: {
                            groupName: this.groupInfo.name,
                            groupLogo: this.groupInfo.logo
                        },
                        attr: {}
                    }
                }
            },
            pvt_wList: function () {
                return {
                    smList: {
                        paraVarPair: {},
                        para: {
                            listData: [
                                {name: '我的订单', icon: 'el-icon-edit'},
                                {name: '我的收藏', icon: 'el-icon-s-home'},
                                {name: '我的发布', icon: 'el-icon-close'},
                            ]
                        },
                        attr: {
                            cursorIsShow: true,
                            checked: this.tabsIndex,
                            size: 'medium'
                        }
                    }
                }
            },
            pvt_wMain: function () {
                return {
                    smOrder: {
                        paraVarPair: {},
                        para: {
                            groupName: this.groupInfo.name
                        },
                        attr: {}
                    },
                    smCollection: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    },
                    myReleaseRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    }
                }
            },
            pvt_wFooter: function () {
                return {
                    smFooter: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    }
                }
            }
        },

        watch: {
            para: {
                handler: function (nValue, oValue) {
                    let $this = this;
                    $this.sys.lib = Object.assign({}, libSys, libUpload);
                    Object.assign($this, $this.sys.lib);
                    $this.pvt_initSysData();
                    if (nValue !== null) {
                        $this.sys.api = $this.para.geneInstance.geneAPI;
                        $this.para.geneInstance.geneUser = $this;
                        $this.para.geneInstance.eventStart($this.para.event, $this.para.instruct, $this.para.command, $this.para.paraObject, function (result) {
                            // $this.startModule(function () {},function () {})
                        }, function (error) {
                            console.log(error);
                        });

                    }
                }
            }
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (tabsIndex, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let fnName = 'orderAndCollectionPage.startModule';

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    if ($this.debugFlag_szl) {
                        console.log('【SZL】' + fnName + ': para.nStep = ' + para.nStep);
                    }
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            $this.tabsIndex = 2;
                            // $this.tabsIndex = 0;
                            // if (tabsIndex) {
                            //     $this.tabsIndex = tabsIndex;
                            // }
                            $this.groupInfo = {
                                name: '瓴码',
                                logo: "data:image/png;base64,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"
                            };
                            para.num = 0;
                            para.nStep = 'downloadGroupActivity';
                            ++dbFlag;
                            break;
                        case 'downloadGroupActivity':
                            //下载活动数据
                            let portName = mac.mac.tb.groupActivity;
                            let data = {};
                            data[portName] = [
                                mac.mac.fd.groupActivity.name,
                                mac.mac.fd.groupActivity.poster,
                                mac.mac.fd.groupActivity.startTime,
                                mac.mac.fd.groupActivity.mode,
                                mac.mac.fd.groupActivity.place
                            ];
                            data[mac.mac.tb.groupActivityTicketType] = '';
                            let expression = ''; //查找活动名带关键词keyWord的活动
                            let start = para.num * 100;
                            let total = 100;
                            let sort = ['id,asc'];
                            let destGeneSite = '';
                            $this.sys.api.conditiondataInput(portName, data, expression, start, total, sort, destGeneSite, function (result) {
                                if (result && result.length === total) {
                                    para.num++;
                                    para.nStep = 'downloadGroupActivity';
                                } else {
                                    para.nStep = 'showModules';
                                }
                                if (++dbFlag === 2) {
                                    $this.startModule(tabsIndex, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = [
                                'smHeader',
                                'smList',
                                'smFooter'
                            ];
                            switch ($this.tabsIndex) {
                                case 0:
                                    refId.push('smOrder');
                                    break;
                                case 1:
                                    refId.push('smCollection');
                                    break;
                                case 2:
                                    refId.push('myReleaseRef');
                                    break
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'startSubModules';
                                if (++dbFlag === 2) {
                                    $this.startModule(tabsIndex, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startSubModules':
                            $this.startSubModules(function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(tabsIndex, successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.log(error)
                            });
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
            //私有方法
            listChange(number) {
                let $this = this;
                if ($this.tabsIndex === number) {
                    return;
                }
                $this.tabsIndex = number;
                $this.showSubModule($this.tabsIndex === 0 ? 'smOrder' : 'smCollection', true, function () {
                }, function (error) {
                    console.log(error)
                });
            },
            startSubModules(successCallBack, errorCallBack) {
                let $this = this;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                }
                let dbFlag;
                let ref = {
                    sm1: 'smHeader',
                    sm2: 'smList',
                    sm3: 'smOrder',
                    sm4: 'smCollection',
                    sm5: 'smFooter',
                    sm6: 'myReleaseRef',
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            para.nStep = 'forceUpdateData';
                            ++dbFlag;
                            break;
                        case 'forceUpdateData':
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule_header';
                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case 'startModule_header':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'startModule_list';
                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_list':
                            $this.sm[ref.sm2].startModule(function () {
                                para.nStep = 'startModule_footer';
                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_footer':
                            $this.sm[ref.sm5].startModule(function () {
                                switch ($this.tabsIndex) {
                                    case 0:
                                        para.nStep = 'startModule_order';
                                        break;
                                    case 1:
                                        para.nStep = 'startModule_collection';
                                        break;
                                    case 2:
                                        para.nStep = 'startModule_release';
                                        break
                                }

                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;

                        case 'startModule_order':
                            $this.sm[ref.sm3].startModule(function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_collection':
                            $this.sm[ref.sm4].startModule(function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_release':
                            $this.sm[ref.sm6].startModule(function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
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
            setPara: function (successCallBack, errorCallBack) {
                let para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            // 子组件发出事件
            smList_itemClickEvent(id, name) {
                this.listChange(id, name);
            },
            smBody_getSumEvent(successCallBack, errorCallBack) {
                this.ep.getSumEvent(successCallBack, errorCallBack);
            },
            smBody_detailPageEvent(id) {
                this.ep.detailPageEvent(id);
            },
        }
    }
</script>
<style lang="scss">
    .orderAndCollectionPage {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: grid;
        grid-template-rows: 76px 1fr 116px;

        .el-image {
            width: 100%;
            height: 100%;
        }
    }

    .row {
    }

    .col {
        display: inline-block;
        box-sizing: border-box;
    }

    .orderAndCollectionPage_row1_col1 {
        width: 100%;
        height: 100%;
    }

    .orderAndCollectionPage_row2_col1 {
        width: 100%;
        height: 100%;
        padding: 20px 100px;
        background: #f4f4f4;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 100%;
    }

    .row2_1_row1 {
        display: flex;
        align-items: stretch;
    }

    .orderAndCollectionPage_row2_1_row1_col1 {
        width: 160px;
        margin: 0 20px 0 0;
    }

    .orderAndCollectionPage_row2_1_row1_col2 {
        width: calc(100% - 180px);
    }

    .orderAndCollectionPage_row3_col1 {
        width: 100%;
        height: 100%;
    }
</style>
