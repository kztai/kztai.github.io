<template>
    <div class="pageHeader">
        <div class="row row1">
            <div class="col pageHeader_row1_col1">
                <div class="row row1_1">
                    <div class="col pageHeader_row1_1_col1">
                        <img src="../../../../assets/logo.png" width="100%" height="100%" alt="">
                        <!--<lm-image ref="logoImage"-->
                        <!--refId="logoImage"-->
                        <!--v-show="pvt_isShow.v1 === 'logoImage'"-->
                        <!--:paraVarPair="pvt_v1.logoImage.paraVarPair"-->
                        <!--:para="pvt_v1.logoImage.para"-->
                        <!--:attr="pvt_v1.logoImage.attr">-->
                        <!--</lm-image>-->
                    </div>
                    <div class="col pageHeader_row1_1_col2">
                        <lm-link-text ref="nameText"
                                      refId="nameText"
                                      v-show="pvt_isShow.v2 === 'nameText'"
                                      :paraVarPair="pvt_v2.nameText.paraVarPair"
                                      :para="pvt_v2.nameText.para"
                                      :attr="pvt_v2.nameText.attr">
                        </lm-link-text>
                    </div>
                    <div class="col pageHeader_row1_1_col3">
                        <lm-dropdown ref="userDropDown"
                                     refId="userDropDown"
                                     v-show="pvt_isShow.v3 === 'userDropDown'"
                                     :paraVarPair="pvt_v3.userDropDown.paraVarPair"
                                     :para="pvt_v3.userDropDown.para"
                                     :attr="pvt_v3.userDropDown.attr">
                        </lm-dropdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        name: 'pageHeader',
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        components: {},
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: [
                        "v1", "v2", "v3"
                    ],
                    subModule: [
                        "logoImage", "nameText",
                        "userDropDown"
                    ]
                },
                pvt_isShow: {
                    v1: null,
                    v2: null,
                    v3: null
                },
                pvt_eventPortInput: [],
                // 用户定义的模块变量
                groupLogo: '',
                groupName: '',
                userName: ''
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    logoImage: {
                        paraVarPair: {},
                        para: {
                            image: [this.groupLogo]
                        },
                        attr: {
                            fit: 'fill'
                        }
                    }
                }
            },
            pvt_v2: function () {
                return {
                    nameText: {
                        paraVarPair: {},
                        para: {
                            textData: this.groupName
                        },
                        attr: {
                            fontSize: '18px',
                            color: '#fff',
                            height: '76px'
                        }
                    }
                }
            },
            pvt_v3: function () {
                return {
                    userDropDown: {
                        paraVarPair: {},
                        para: {
                            dropDown: [
                                {id: 1, label: '退出登录', icon: '', disable: false}
                            ]
                        },
                        attr: {
                            menuName: this.userName
                        }
                    }
                }
            }
        },
        watch: {},
        mounted: function () {
            this.pvt_initSysData();
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            $this.groupLogo = '';
                            $this.groupName = '';
                            $this.userName = '';
                            if ($this.para.groupName) {
                                $this.groupName = $this.para.groupName;
                            } else {
                                $this.groupName = '瓴码'
                            }
                            if ($this.para.groupLogo) {
                                $this.groupLogo = $this.para.groupLogo;
                            }
                            //获取当前用户状态
                            let userType = $this.getCookie('userType');
                            if (userType === 0) {
                                $this.userName = '深圳瓴码APP';
                            }
                            ++dbFlag;
                            para.nStep = 'showModules';
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = [
                                // "logoImage",
                                "nameText",
                                "userDropDown"
                            ];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'startSubModules';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startSubModules':
                            //调用子组件startModule方法
                            $this.startSubModules(function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
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
            // 私有方法
            getInHomePage() {
                console.log('打开组织首页');
            },
            logEvent() {
                console.log('用户' + this.userName + ',退出登录');
            },
            getCookie: function (value) {
                if (value === 'userType') {
                    // 0表示普通用户，1表示游客
                    return 0;
                } else if (value === 'userID') {
                    return 1;
                }
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
                    // sm1:"logoImage",
                    sm2: "nameText",
                    sm3: "userDropDown"
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
                                para.nStep = 'startModule_name';
                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case 'startModule_logo':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'startModule_name';
                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_name':
                            $this.sm[ref.sm2].startModule(function () {
                                para.nStep = 'startModule_userDrop';
                                if (++dbFlag === 2) {
                                    $this.startSubModules(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_userDrop':
                            $this.sm[ref.sm3].startModule(function () {
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
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            // 子组件发出事件
            logoImage_clickEvent() {
                this.getInHomePage();
            },
            userDropDown_itemClickEvent(id) {
                this.logEvent(id);
            },
        }
    }
</script>
<style lang="scss">
    .pageHeader {
        .dropdown-component {
            height: 40px;
            line-height: 40px;
            margin: auto;
            background: #4F4B9A;

            .el-dropdown {
                width: 100%;
                height: 40px;
                text-align: center;
                line-height: 40px;
                color: #fff;
            }

            .el-dropdown-link {
                color: #ffffff;
                vertical-align: middle;
                text-overflow: ellipsis;
            }

            i {
                color: #ffffff;
            }
        }
    }
</style>
<style lang="scss" scoped>
    .pageHeader {
        position: fixed;
        top: 0;
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        overflow: hidden;
        background: rgba(45, 40, 135, 1);
        z-index: 200;
    }

    .row {
    }

    .col {
        display: inline-block;
        box-sizing: border-box;
        vertical-align: middle;
    }

    .pageHeader_row1_col1 {
        width: 100%;
        height: 100%;
        padding: 0 100px;
    }

    .pageHeader_row1_1_col1 {
        width: 58px;
        height: 76px;
        padding: 16px 0;
        line-height: 76px;
    }

    .pageHeader_row1_1_col2 {
        width: calc(100% - 178px);
        height: 76px;
        text-align: left;
    }

    .pageHeader_row1_1_col3 {
        width: 120px;
        height: 76px;
        padding: 18px 0;
    }
</style>
