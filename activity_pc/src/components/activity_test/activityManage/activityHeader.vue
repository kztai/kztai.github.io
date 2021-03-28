<template>
    <div class="activity-head-wrap">
        <div class="head-left">
            <div class="header-logo">
                <lm-image
                        ref="logoRef"
                        refId="logoRef"
                        v-show="pvt_isShow.logo === 'logoRef'"
                        :paraVarPair="pvt_logo.logoRef.paraVarPair"
                        :para="pvt_logo.logoRef.para"
                        :attr="pvt_logo.logoRef.attr">
                </lm-image>
            </div>
            <div class="activity-info">
                <div class="activity-title-wrap">
                    <div class="activity-title">
                        <lm-link-text
                                ref="titleRef"
                                refId="titleRef"
                                v-show="pvt_isShow.title === 'titleRef'"
                                :paraVarPair="pvt_title.titleRef.paraVarPair"
                                :para="pvt_title.titleRef.para"
                                :attr="pvt_title.titleRef.attr">
                        </lm-link-text>
                    </div>
                    <div class="activity-desc">
                        <lm-link-text
                                ref="descRef"
                                refId="descRef"
                                v-show="pvt_isShow.desc === 'descRef'"
                                :paraVarPair="pvt_desc.descRef.paraVarPair"
                                :para="pvt_desc.descRef.para"
                                :attr="pvt_desc.descRef.attr">
                        </lm-link-text>
                    </div>
                </div>
                <!--<div class="activity-addr">-->
                    <!--<lm-link-text-->
                            <!--ref="addrRef"-->
                            <!--refId="addrRef"-->
                            <!--v-show="pvt_isShow.addr === 'addrRef'"-->
                            <!--:paraVarPair="pvt_addr.addrRef.paraVarPair"-->
                            <!--:para="pvt_addr.addrRef.para"-->
                            <!--:attr="pvt_addr.addrRef.attr">-->
                    <!--</lm-link-text>-->
                <!--</div>-->
            </div>
        </div>
        <div class="head-right">
            <div class="head-out">
                <lm-button
                        ref="outRef"
                        refId="outRef"
                        v-show="pvt_isShow.out === 'outRef'"
                        :paraVarPair="pvt_out.outRef.paraVarPair"
                        :para="pvt_out.outRef.para"
                        :attr="pvt_out.outRef.attr">
                </lm-button>
            </div>
            <div class="head-identification">
                <lm-button
                        ref="identificationRef"
                        refId="identificationRef"
                        v-show="pvt_isShow.identification === 'identificationRef'"
                        :paraVarPair="pvt_identification.identificationRef.paraVarPair"
                        :para="pvt_identification.identificationRef.para"
                        :attr="pvt_identification.identificationRef.attr">
                </lm-button>
            </div>
            <div class="login-info">
                <lm-button
                        ref="loginInfoRef"
                        refId="loginInfoRef"
                        v-show="pvt_isShow.loginInfo === 'loginInfoRef'"
                        :paraVarPair="pvt_loginInfo.loginInfoRef.paraVarPair"
                        :para="pvt_loginInfo.loginInfoRef.para"
                        :attr="pvt_loginInfo.loginInfoRef.attr">
                </lm-button>
            </div>
            <div class="head-img">
                <!--<img width="100%" height="100%" style="margin:auto 0;" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3357786243,3135716437&fm=26&gp=0.jpg" alt="">-->
                <lm-image
                        ref="headImgRef"
                        refId="headImgRef"
                        v-show="pvt_isShow.headImg === 'headImgRef'"
                        :paraVarPair="pvt_headImg.headImgRef.paraVarPair"
                        :para="pvt_headImg.headImgRef.para"
                        :attr="pvt_headImg.headImgRef.attr">
                </lm-image>
            </div>
            <!--<div class="back-btn">-->
                <!--<lm-button-->
                        <!--ref="backBtnRef"-->
                        <!--refId="backBtnRef"-->
                        <!--v-show="pvt_isShow.backBtn === 'backBtnRef'"-->
                        <!--:paraVarPair="pvt_backBtn.backBtnRef.paraVarPair"-->
                        <!--:para="pvt_backBtn.backBtnRef.para"-->
                        <!--:attr="pvt_backBtn.backBtnRef.attr">-->
                <!--</lm-button>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                mac: mac.mac,

                activityStatus: '',

                pvt_subModuleMap: {
                    vessel: ["logo", "title", "desc", "addr", "out", "loginInfo", "backBtn", 'headImg', 'identification'],
                    subModule: ["logoRef", "titleRef", "descRef", "addrRef", "outRef", "loginInfoRef", "backBtnRef", 'headImgRef', 'identificationRef']
                },

                pvt_isShow: {
                    "logo": null,
                    "title": null,
                    "desc": null,
                    "addr": null,
                    "out": null,
                    "loginInfo": null,
                    "backBtn": null,
                    "headImg": null,
                    "identification": null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['identificationEvent', 'backEvent'],
            }
        },
        computed: {
            pvt_logo: function(){
                return {
                    logoRef: {
                        paraVarPair: {

                        },
                        para: {
                            // image: [{
                            //     $table: this.mac.tb.groupActivity,
                            //     $arrField:[this.mac.fd.groupActivity.poster],
                            //     $arrValue:[this.para.activityId]
                            // }]
                            image: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3357786243,3135716437&fm=26&gp=0.jpg']
                        },
                        attr: {

                        }
                    }
                }
            },

            pvt_title: function(){
                return {
                    titleRef: {
                        paraVarPair: {

                        },
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField:[this.mac.fd.groupActivity.name],
                                $arrValue:[this.para.activityId]
                            }]
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#409EFF',
                            isClick: true
                        }
                    }
                }
            },

            pvt_desc: function(){
                return {
                    descRef: {
                        paraVarPair: {

                        },
                        para: {
                            textData: this.activityStatus
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#fff'
                        }
                    }
                }
            },

            pvt_addr: function(){
                return {
                    addrRef: {
                        paraVarPair: {

                        },
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField:[this.mac.fd.groupActivity.place],
                                $arrValue:[this.para.activityId]
                            }]
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_out: function(){
                return {
                    outRef: {
                        paraVarPair: {
                        },
                        para: {
                            name: ['退出', '']
                        },
                        attr: {
                            type: 'text',
                            height:'34px',
                        }
                    }
                }
            },

            pvt_identification: function(){
                return {
                    identificationRef: {
                        paraVarPair: {
                        },
                        para: {
                            name: ['', 'el-icon-success']
                        },
                        attr: {
                            type: 'text',
                            height:'34px',
                        }
                    }
                }
            },

            pvt_loginInfo: function(){
                return {
                    loginInfoRef: {
                        paraVarPair: {

                        },
                        para: {
                            name: ['深圳市xxx有限公司', 'el-icon-medal']
                        },
                        attr: {
                            type: 'text',
                            height:'34px',
                            iconIsRight: true
                        }
                    }
                }
            },

            pvt_headImg: function(){
                return {
                    headImgRef: {
                        paraVarPair: {

                        },
                        para: {
                            // image: [{$table:'', $arrField:[], $arrValue:[]}]
                            image: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3357786243,3135716437&fm=26&gp=0.jpg']
                        },
                        attr: {

                        }
                    }
                }
            },

            pvt_backBtn: function(){
                return {
                    backBtnRef: {
                        paraVarPair: {

                        },
                        para: {
                            name: ['返回活动列表', 'el-icon-back']
                        },
                        attr: {
                            type: 'primary',
                            height:'34px'
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
                let fnname = 'applyHead.start';
                let dbFlag;
                let tableName;
                let dbData;
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

                let ref = {
                    "logoRef": "logoRef",
                    "headImgRef": "headImgRef",
                    "smButton1": "titleRef",
                    "outRef": "outRef",
                    "descRef": "descRef",
                    "smButton4": "loginInfoRef",
                    "identificationRef": "identificationRef",
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            tableName = that.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.activityId];
                            dbData[that.mac.fd.groupActivity.status] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                switch (dbData[that.mac.fd.groupActivity.status][0]) {
                                    case that.mac.enum.groupActivity.status.draft:
                                        that.activityStatus = '草稿';
                                        break;
                                    case that.mac.enum.groupActivity.status.check:
                                        that.activityStatus = '待审批';
                                        break;
                                    case that.mac.enum.groupActivity.status.rejecteded:
                                        that.activityStatus = '已拒绝';
                                        break;
                                    case that.mac.enum.groupActivity.status.released:
                                        that.activityStatus = '已发布';
                                        break;
                                    case that.mac.enum.groupActivity.status.finished:
                                        that.activityStatus = '已结束';
                                        break;
                                    case that.mac.enum.groupActivity.status.closed:
                                        that.activityStatus = '已关闭';
                                        break;
                                    case that.mac.enum.groupActivity.status.deleted:
                                        that.activityStatus = '已删除';
                                        break;
                                }
                                para.nStep = 'subStart2';
                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                })
                            }, function () {
                            });
                            break;
                        case 'subStart2':
                            that.sm[ref.smButton1].startModule(function () {
                                para.nStep = 'subStart3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart3':
                            that.sm[ref.descRef].startModule(function () {
                                para.nStep = 'subStart4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart4':
                            that.sm[ref.outRef].startModule(function () {
                                para.nStep = 'subStart5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart5':
                            that.sm[ref.smButton4].startModule(function () {
                                para.nStep = 'subStart6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart6':
                            that.sm[ref.logoRef].startModule(function () {
                                para.nStep = 'subStart7';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart7':
                            that.sm[ref.headImgRef].startModule(function () {
                                para.nStep = 'subStart8';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart8':
                            that.sm[ref.identificationRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ["titleRef", "headImgRef", "outRef", "logoRef", "loginInfoRef", "descRef", 'identificationRef'];
                            // let refArr = ["logoRef", "titleRef", "descRef", "addrRef", "statusRef", "loginInfoRef", "backBtnRef", 'headImgRef'];
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

            backBtnRef_buttonClickEvent: function () {
                this.ep.backEvent();
            },
            identificationRef_buttonClickEvent: function () {
                this.ep.identificationEvent();
            },

        }
    }
</script>
<style lang="scss">
    .activity-head-wrap{
        height: 76px;
        overflow: hidden;
        z-index: 10;
        .head-left {
            float: left;
            height: 76px;
            .header-logo{
                display: inline-block;
                font-size: 0;
                margin: 10px 0 0 20px;
                box-sizing: border-box;
                width: 140px;
                height: 60px;
                .image-size-medium {
                    width: 100%;
                    height: 100%;
                }
            }
            .activity-info {
                position: relative;
                display: inline-block;
                margin-left: 20px;
                vertical-align: baseline;
                bottom: 20px;
                .activity-title-wrap {
                    .activity-title {
                        display: inline-block;
                        margin-right: 10px;
                        .link-status.link-text:focus, .link-status.link-text:hover {
                            border-bottom: none;
                        }
                    }
                    .activity-desc {
                        display: inline-block;
                        background-color: #F3900D;
                        padding: 0 6px;
                        border-radius: 2px;
                    }
                }
                .activity-addr {
                    /*margin-top: 6px;*/
                }
            }
        }
        .head-right {
            float: right;
            margin-right: 100px;
            height: 40px;
            line-height: 40px;
            margin-top: 20px;
            .head-out {
                float: right;
                margin-left: 20px;
            }
            .head-identification {
                float: right;
                margin-left: 4px;
            }
            .login-info {
                float: right;
                margin-left: 10px;
                .el-button--text {
                    color: #909399;
                }
            }
            .head-img {
                float: right;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                overflow: hidden;
                margin-left: 20px;
                margin-top: 5px;
            }
            .back-btn {
                float: right;
                .el-button {
                    padding: 8px 10px;
                    border-radius: 0;
                }
            }
        }
    }
</style>
