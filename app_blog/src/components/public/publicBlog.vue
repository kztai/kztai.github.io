<template>
    <div id="public-blog-wrap">
        <header>
            <div class="header-wrap">
                <headC
                        :para="pvt_head_para[pvt_currentRef.head].para"
                        :attr="pvt_head_attr[pvt_currentRef.head].attr"
                        :refId="pvt_currentRef.head"
                        :ref="pvt_currentRef.head">
                </headC>
            </div>
        </header>
        <div class="content">
            <div class="content-left" ref="contentLeft">
                <listC
                        :para="pvt_tabList_para[pvt_currentRef.tabList].para"
                        :attr="pvt_tabList_attr[pvt_currentRef.tabList].attr"
                        :refId="pvt_currentRef.tabList"
                        :ref="pvt_currentRef.tabList">
                </listC>
            </div>
            <div class="public-content-wrap">
                <keep-alive>
                    <component
                            class="list-item"
                            :is="pvt_tabs_comp[pvt_currentRef.tabs].componentName"
                            v-show="pvt_isShow.tabs"
                            :refId="pvt_currentRef.tabs"
                            :para="pvt_tabs_para[pvt_currentRef.tabs].para"
                            :attr="pvt_tabs_attr[pvt_currentRef.tabs].attr"
                            :ref="pvt_currentRef.tabs">
                    </component>
                </keep-alive>
            </div>
            <div class="content-right">
                <div class="user-info" v-if="isLogin" ref="userInfo">
                    <userInfo
                            :para="pvt_userInfo_para[pvt_currentRef.userInfo].para"
                            :attr="pvt_userInfo_attr[pvt_currentRef.userInfo].attr"
                            :refId="pvt_currentRef.userInfo"
                            :ref="pvt_currentRef.userInfo">
                    </userInfo>
                </div>
                <div class="publish-btns" ref="publishBtns">
                    <div class="note-btn">
                        <lm-button
                                :para="pvt_noteBtn_para[pvt_currentRef.noteBtn].para"
                                :attr="pvt_noteBtn_attr[pvt_currentRef.noteBtn].attr"
                                :refId="pvt_currentRef.noteBtn"
                                :ref="pvt_currentRef.noteBtn">
                        </lm-button>
                    </div>
                    <div class="article-btn">
                        <lm-button
                                :para="pvt_articleBtn_para[pvt_currentRef.articleBtn].para"
                                :attr="pvt_articleBtn_attr[pvt_currentRef.articleBtn].attr"
                                :refId="pvt_currentRef.articleBtn"
                                :ref="pvt_currentRef.articleBtn">
                        </lm-button>
                    </div>
                </div>
                <div class="hot-recommend" ref="hotRecommend">
                    <div class="hot-apply">
                        <listC
                                :para="pvt_apply_para[pvt_currentRef.apply].para"
                                :attr="pvt_apply_attr[pvt_currentRef.apply].attr"
                                :refId="pvt_currentRef.apply"
                                :ref="pvt_currentRef.apply">
                        </listC>
                    </div>
                    <div class="hot-activity">
                        <listC
                                :para="pvt_activity_para[pvt_currentRef.activity].para"
                                :attr="pvt_activity_attr[pvt_currentRef.activity].attr"
                                :refId="pvt_currentRef.activity"
                                :ref="pvt_currentRef.activity">
                        </listC>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <footC
                    :para="pvt_foot_para[pvt_currentRef.foot].para"
                    :attr="pvt_foot_attr[pvt_currentRef.foot].attr"
                    :refId="pvt_currentRef.foot"
                    :ref="pvt_currentRef.foot">
            </footC>
        </footer>
    </div>
</template>
<script>
    import userInfo from '../userInfo';
    import footC from '../customerFooter';
    import headC from '../customerHeader';
    import attention from './attentionBlog';
    import favorite from './favoriteBlog';
    import recommend from './recommendBlog';
    import myDraft from './myDraft';
    import listC from '@/components/baseComponent/listComponent.vue';
    import textC from '@/components/baseComponent/textComponent.vue';
    import inputC from '@/components/baseComponent/inputComponent.vue';
    import imageC from '@/components/baseComponent/imageComponent.vue';
    import radioC from '@/components/baseComponent/radioComponent.vue';
    import buttonC from '@/components/baseComponent/buttonComponent.vue';
    import pictureUploadC from '@/components/baseComponent/pictureUploadComponent.vue';
    import checkboxC from '@/components/baseComponent/checkboxComponent.vue';
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        props: ['refId', 'para', 'attr', 'favoriteCall'],
        // inject: ['sys'],
        provide: function () {
            return {
                sys: this.sys
            }
        },
        components: {
            attention,
            favorite,
            recommend,
            myDraft,
            userInfo,
            headC,
            footC,
            listC,
            textC,
            inputC,
            radioC,
            imageC,
            buttonC,
            pictureUploadC,
            checkboxC
        },
        data: function () {
            return {
                mac: mac.mac,
                sys: {
                    api: null,
                    lib: null
                },
                outPara: null,

                myType: 1,
                mySite: '',
                myID: 1,

                isInit: false,

                favoriteActive: false,
                attentionActive: false,
                recommendActive: false,
                myDraftActive: false,
                curListIndex: -1,
                isLogin: true,
                checkedDefault: 3,

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['userInfo', 'foot', 'head', 'activity', 'apply', 'tabs', 'tabs', 'tabs', 'tabs', 'noteBtn', 'articleBtn', 'tabList', 'upload'],
                    ref: ['userInfoRef', 'footRef', 'headRef', 'activityRef', 'applyRef', 'attentionRef', 'favoriteRef', 'myDraftRef', 'recommendRef', 'noteBtnRef', 'articleBtnRef', 'tabListRef', 'uploadRef']
                },

                pvt_currentRef: {
                    userInfo: 'userInfoRef',
                    head: 'headRef',
                    foot: 'footRef',
                    activity: 'activityRef',
                    apply: 'applyRef',
                    tabs: 'recommendRef',
                    noteBtn: 'noteBtnRef',
                    articleBtn: 'articleBtnRef',
                    tabList: 'tabListRef',
                    upload: 'uploadRef',
                },

                pvt_isShow: {
                    userInfo: true,
                    head: true,
                    foot: true,
                    activity: true,
                    apply: true,
                    tabs: true,
                    noteBtn: true,
                    articleBtn: true,
                    tabList: true,
                    upload: true,
                },
                pvt_isMounted: {
                    userInfoRef: false,
                    footRef: false,
                    headRef: false,
                    activityRef: false,
                    applyRef: false,
                    attentionRef: false,
                    favoriteRef: false,
                    recommendRef: false,
                    myDraftRef: false,
                    noteBtnRef: false,
                    articleBtnRef: false,
                    tabListRef: false,
                    uploadRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_upload_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.upload,
                    isShow: this.pvt_isShow.upload,
                    uploadRef: {
                        componentName: 'picUpload'
                    },
                }
            },
            pvt_upload_para: function () {
                return {
                    uploadRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_upload_comp.isShow,
                            $isMounted: this.pvt_isMounted.uploadRef,
                            // upload: {
                            //     $table: {
                            //         '_cloud': ['icon']
                            //     },
                            //     $value: ['1', '2', '3'] //表格记录
                            // },
                            upload: {
                                $table: {
                                    '_userInfo': ['head_portrait']
                                },
                                $value: [1] //表格记录
                            },
                            fileName: {
                                $table: {},
                                $value: this.fileArr
                            }
                        }
                    }
                }
            },
            pvt_upload_attr: function () {
                return {
                    uploadRef: {
                        attr: {
                            // isButton: true,
                            buttonText: '点击',
                            multiple: true,
                            limit: 16,
                        }
                    }
                }
            },


            pvt_noteBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.noteBtn,
                    isShow: this.pvt_isShow.noteBtn,
                    noteBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_noteBtn_para: function () {
                return {
                    noteBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_noteBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.noteBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: ['发帖', '']
                            }],
                        },
                    },
                };
            },
            pvt_noteBtn_attr: function () {
                return {
                    noteBtnRef: {
                        attr: {
                            type: 'info',
                            width: '100px',
                            height: '34px'
                        },
                    },
                };
            },

            pvt_articleBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.articleBtn,
                    isShow: this.pvt_isShow.articleBtn,
                    articleBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_articleBtn_para: function () {
                return {
                    articleBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_articleBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.articleBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: ['写文章', '']
                            }],
                        },
                    },
                };
            },
            pvt_articleBtn_attr: function () {
                return {
                    articleBtnRef: {
                        attr: {
                            type: 'info',
                            width: '100px',
                            height: '34px'
                        },
                    },
                };
            },

            pvt_userInfo_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.userInfo,
                    isShow: this.pvt_isShow.userInfo,
                    userInfoRef: {
                        componentName: 'userInfo',
                    },
                }
            },
            pvt_userInfo_para: function () {
                return {
                    userInfoRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_userInfo_comp.isShow,
                            $isMounted: this.pvt_isMounted.userInfoRef,
                        },
                    },
                };
            },
            pvt_userInfo_attr: function () {
                return {
                    userInfoRef: {
                        attr: {},
                    },
                };
            },

            pvt_head_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.head,
                    isShow: this.pvt_isShow.head,
                    headRef: {
                        componentName: 'headC',
                    },
                }
            },
            pvt_head_para: function () {
                return {
                    headRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_head_comp.isShow,
                            $isMounted: this.pvt_isMounted.headRef,
                        },
                    },
                };
            },
            pvt_head_attr: function () {
                return {
                    headRef: {
                        attr: {},
                    },
                };
            },

            pvt_foot_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.foot,
                    isShow: this.pvt_isShow.foot,
                    footRef: {
                        componentName: 'footC',
                    },
                }
            },
            pvt_foot_para: function () {
                return {
                    footRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_foot_comp.isShow,
                            $isMounted: this.pvt_isMounted.footRef,
                        },
                    },
                };
            },
            pvt_foot_attr: function () {
                return {
                    footRef: {
                        attr: {},
                    },
                };
            },

            pvt_activity_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.activity,
                    isShow: this.pvt_isShow.activity,
                    activityRef: {
                        componentName: 'listC',
                    },
                }
            },
            pvt_activity_para: function () {
                return {
                    activityRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_activity_comp.isShow,
                            $isMounted: this.pvt_isMounted.activityRef,
                            name: {
                                $table: '',
                                $field: [],
                                $value: ['活动1', '活动2', '活动3', '活动4', '活动1', '活动2', '活动3', '活动4','活动4', '活动1', '活动2', '活动3']
                            },
                        },
                    },
                };
            },
            pvt_activity_attr: function () {
                return {
                    activityRef: {
                        attr: {
                            title: '热门活动',
                            headerIsShow: true,
                            size: 'small'
                        },
                    },
                };
            },

            pvt_apply_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.apply,
                    isShow: this.pvt_isShow.apply,
                    applyRef: {
                        componentName: 'listC',
                    },
                }
            },
            pvt_apply_para: function () {
                return {
                    applyRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_apply_comp.isShow,
                            $isMounted: this.pvt_isMounted.applyRef,
                            name: {$table: '', $field: [], $value: ['应用1', '应用2', '应用3', '应用4', '应用1', '应用2', '应用3', '应用4','应用1', '应用2', '应用3', '应用4', '应用1', '应用2']},
                        },
                    },
                };
            },
            pvt_apply_attr: function () {
                return {
                    applyRef: {
                        attr: {
                            title: '热门应用',
                            headerIsShow: true,
                            size: 'small'
                        },
                    },
                };
            },

            pvt_tabs_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.tabs,
                    isShow: this.pvt_isShow.tabs,
                    attentionRef: {
                        componentName: 'attention',
                    },
                    recommendRef: {
                        componentName: 'recommend',
                    },
                    favoriteRef: {
                        componentName: 'favorite',
                    },
                    myDraftRef: {
                        componentName: 'myDraft',
                    },
                }
            },
            pvt_tabs_para: function () {
                return {
                    attentionRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.attentionRef || this.pvt_isMounted.recommendRef || this.pvt_isMounted.favoriteRef || this.pvt_isMounted.myDraftRef,
                        },
                    },
                    recommendRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.attentionRef || this.pvt_isMounted.recommendRef || this.pvt_isMounted.favoriteRef || this.pvt_isMounted.myDraftRef,
                            isLogin: this.isLogin
                        },
                    },
                    favoriteRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.attentionRef || this.pvt_isMounted.recommendRef || this.pvt_isMounted.favoriteRef || this.pvt_isMounted.myDraftRef,
                        },
                    },
                    myDraftRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.attentionRef || this.pvt_isMounted.recommendRef || this.pvt_isMounted.favoriteRef || this.pvt_isMounted.myDraftRef,
                        },
                    },
                }
            },
            pvt_tabs_attr: function () {
                return {
                    attentionRef: {
                        attr: {},
                    },
                    recommendRef: {
                        attr: {},
                    },
                    favoriteRef: {
                        attr: {},
                    },
                    myDraftRef: {
                        attr: {},
                    },
                };
            },

            pvt_tabList_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.tabList,
                    isShow: this.pvt_isShow.tabList,
                    tabListRef: {
                        componentName: 'listC',
                    },
                }
            },
            pvt_tabList_para: function () {
                return {
                    tabListRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabList_comp.isShow,
                            $isMounted: this.pvt_isMounted.tabListRef,
                            name: {
                                $table: '',
                                $field: [],
                                // $value: ['我的收藏', '我的关注', '推荐', '我的草稿']
                                $value: ['我的收藏', '我的关注', '推荐']
                            },
                            icon: {
                                $table: '',
                                $field: [],
                                $value: ['el-icon-folder-opened', 'el-icon-user', 'el-icon-brush']
                                // $value: ['el-icon-folder-opened', 'el-icon-user', 'el-icon-brush', 'el-icon-edit']
                            }
                        },
                    },
                };
            },
            pvt_tabList_attr: function () {
                return {
                    tabListRef: {
                        attr: {
                            checked: this.checkedDefault,
                            cursorIsShow: true,
                            size: 'small',
                        },
                    },
                };
            },
        },
        watch: {
            // 监听模块参数
            para: {
                handler: function (nValue, oValue) {
                    let $this = this;
                    $this.sys.lib = Object.assign({}, libSys, libUpload);
                    Object.assign($this, $this.sys.lib);
                    if (nValue !== null) {
                        $this.sys.api = $this.para.geneInstance.geneAPI;
                        $this.para.geneInstance.geneUser = $this;
                        $this.para.geneInstance.eventStart($this.para.event, $this.para.instruct, $this.para.command, $this.para.paraObject, function (result) {
                            $this.pvt_isSubModuleStarted = true;
                            // $this.startModule(function (result) {
                            // }, function (error) {
                            //     console.log(error)
                            // })
                        }, function (error) {
                            console.log(error);
                        });

                    }
                }
            }
        },
        mounted: function () {
            let that = this;
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true;
            }
        },
        methods: {
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

            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
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

                // 初始化：
                that.mySite = that.getCookie('userSite');
                that.myId = that.getCookie('userID');
                that.myType = that.getCookie('userType');
                that.isLogin = true;

                // 0表示已登录：
                if(that.myType !== 0) {
                    that.isLogin = false;
                }

                // 判断是否需要默认定位到收藏界面：
                if(this.favoriteCall) {
                    this.checkedDefault = 1;
                } else {
                    this.checkedDefault = 3;
                }

                // 设置左侧列表高度：
                let $contentLeft = that.$refs.contentLeft;
                let screenWidth = document.documentElement.clientWidth;
                let screenHeight = document.documentElement.clientHeight;
                $contentLeft.style.height = screenHeight - 90 + 'px';

                // 设置右侧列表高度：
                let $userInfo = that.$refs.userInfo;
                let $publishBtns = that.$refs.publishBtns;
                let $hotRecommend = that.$refs.hotRecommend;
                if(that.isLogin) {
                    $hotRecommend.style.height = screenHeight - 90 - 80 - 20 - $userInfo.offsetHeight - $publishBtns.offsetHeight + 'px';
                } else {
                    $hotRecommend.style.height = screenHeight - 90 - 80 - 20 - $publishBtns.offsetHeight + 'px';
                }

                para.successCallBack();
            },

            geneStart: function() {
                let that = this;
                that.curListIndex = -1;
                that.callSubModuleMethod('tabListRef', 'listRefresh', [3], function () {
                }, function () {
                })
            },

            listChange: function(index) {
                let that = this;
                if(that.curListIndex === index) {
                    return
                }

                that.curListIndex = index;

                // 判断当前用户是否登录：
                if(!that.isLogin && that.curListIndex !== 2) {
                    that.curListIndex = 2;
                    that.callSubModuleMethod('tabListRef', 'listRefresh', [3], function () {
                    }, function () {
                    });
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                    return
                }

                switch (index) {
                    case 0:
                        this.activateModule('favoriteRef', function () {
                            if(that.favoriteActive) {
                                that.callSubModuleMethod('favoriteRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.favoriteActive = true;
                        }, function () {
                        });
                        break;
                    case 1:
                        this.activateModule('attentionRef', function () {
                            if(that.attentionActive) {
                                that.callSubModuleMethod('attentionRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.attentionActive = true;
                        }, function () {
                        });
                        break;
                    case 2:
                        this.activateModule('recommendRef', function () {
                            if(that.recommendActive) {
                                that.callSubModuleMethod('recommendRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.recommendActive = true;
                        }, function () {
                        });
                        break;
                    case 3:
                        this.activateModule('myDraftRef', function () {
                            if(that.myDraftActive) {
                                that.callSubModuleMethod('myDraftRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.myDraftActive = true;
                        }, function () {
                        });
                        break;
                }
            },

            articleBtnClick: function() {
                // 判断当前用户是否登录：
                if(!this.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                } else {
                    this.callModuleEventPort('publishArticle', []);
                }

            },
            noteBtnClick: function() {
                // 判断当前用户是否登录：
                if(!this.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                } else {
                    this.callModuleEventPort('publishNote', []);
                }
            },

            // 事件：
            activityRef_itemClickEvent: function (ref, id, name) {
                this.callModuleEventPort('activityClickEvent', [id, name]);
            },
            applyRef_itemClickEvent: function (ref, id, name) {
                this.callModuleEventPort('activityClickEvent', [id, name]);
            },

            tabListRef_itemClickEvent: function (ref, id, name) {
                this.listChange(id);
            },
            articleBtnRef_buttonClickEvent: function () {
                this.articleBtnClick();
            },
            noteBtnRef_buttonClickEvent: function () {
                this.noteBtnClick();
            },

            attentionRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            favoriteRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            recommendRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            myDraftRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },

            recommendRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['recommend'], successCallBack, errorCallBack);
            },
            favoriteRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['favorite'], successCallBack, errorCallBack);
            },
            attentionRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['attention'], successCallBack, errorCallBack);
            },

            attentionRef_initCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('initCloudBlog', ['attention'], successCallBack, errorCallBack);
            },
            favoriteRef_initCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('initCloudBlog', ['favorite'], successCallBack, errorCallBack);
            },
            recommendRef_initCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('initCloudBlog', ['recommend'], successCallBack, errorCallBack);
            },


            recommendRef_blogClickEvent: function (ref, blogId, userType, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, userType, btn]);
            },
            favoriteRef_blogClickEvent: function (ref, blogId, userType,btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, userType, btn, true]);
            },
            attentionRef_blogClickEvent: function (ref, blogId, userType, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, userType, btn]);
            },
            myDraftRef_draftClickEvent: function (ref, blogType, blogId) {
                this.callModuleEventPort('draftClickEvent', [blogType, blogId]);
            },

            // 公开方法：
            activityRefresh: function (index) {
                this.callSubModuleMethod('activityRef', 'listRefresh', [index], function () {
                }, function () {
                });
            },
            applyRefresh: function (index) {
                this.callSubModuleMethod('applyRef', 'listRefresh', [index], function () {
                }, function () {
                });
            },
        }
    };
</script>
<style lang="scss">
    #public-blog-wrap {
        position: relative;
        width: 100%;
        min-height: 100%;
        box-sizing: border-box;
        background-color: #F1F1F2;
        li {
            list-style: none;
        }

        .header-wrap, footer {
            width: 100%;
            overflow: hidden;
            color: #fff;
            z-index: 1000;
            .el-button--text {
                color: #fff !important;
            }
        }

        header {
            width: 100%;
            height: 80px;
            z-index: 1000;
            .header-wrap {
                position: fixed;
                left: 0;
                top: 0;
                background-color: #2D2887;
            }
        }

        footer {
            position: absolute;
            bottom: 0;
            left: 0;
            color: #909399;
            background-color: #fff;
            border-top: 1px solid #e5e5e5;
        }

        .content {
            /*min-height: 100%;*/
            font-family: SourceHanSansCN-Regular;
            display: flex;
            margin: 0 auto;
            /*max-width: 1200px;*/
            padding: 10px 14% 100px 14%;
            z-index: 5;
            overflow: hidden;

            .content-left {
                position: fixed;
                width: 138px;
                min-height: 348px;
                overflow: auto;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 0 8px 0 rgba(48,49,51,0.1);
                color: #303133;
                box-sizing: border-box;
                .list-li-checked {
                    background-color: #fff !important;
                    color: #12B0FF;
                }
                .listUlLiClass {
                    padding: 10px;
                    &:hover {
                        background-color: rgba(18,176,255,0.16);
                    }
                }
            }

            .public-content-wrap {
                flex: 1;
                /*padding: 20px 40px;*/
                margin-left: 150px;
                margin-right: 240px;
                min-height: 300px;
                /*border-left: 1px solid #ccc;*/
                /*border-right: 1px solid #ccc;*/

                .publish-content {
                    margin-bottom: 40px;
                }

                .picture-select {
                    margin-bottom: 40px;
                }

                .sort-checkbox {
                    margin-bottom: 40px;
                }

                .close-comment {
                    margin-bottom: 40px;
                }

                .limit-radio {
                    margin-bottom: 40px;
                }
            }

            .content-right {
                position: fixed;
                right: 14%;
                width: 230px;
                flex: 0 0 240px;
                .user-info {
                    border-radius: 2px;
                    overflow: hidden;
                    margin-bottom: 10px;
                }
                .hot-recommend {
                    .hot-apply, .hot-activity {
                        max-height: 48%;
                        /*max-height: 200px;*/
                        overflow: auto;
                        background-color: #fff;
                        padding: 0 10px;
                        border-radius: 2px;
                        box-shadow: 0 0 8px 0 rgba(48,49,51,0.1);
                        .listTitle_small {
                            font-size: 14px !important;
                        }
                        .listStyle_small {
                            font-size: 12px !important;
                        }
                        .listTitle {
                            background-color: #fff;
                            color: #303133;
                            border-bottom: 1px solid #F5F5F5;
                        }

                        .list_ul_style {
                            .listUlLiClass {
                                padding: 8px 0;
                                color: #303133;
                            }
                        }
                    }

                    .hot-apply {
                        margin-bottom: 10px;
                    }
                }

                .publish-btns {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    .lm-button .el-button--info {
                        background-color: #12B0FF;
                        border: none;
                        &:hover {
                            background-color: rgba(18,176,255,0.4);
                        }
                    }
                    .note-btn {
                        flex: 1;
                    }

                    .article-btn {
                        flex: 1;
                    }
                }
            }
        }
    }
</style>