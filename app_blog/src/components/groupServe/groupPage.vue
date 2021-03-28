<template>
    <div id="group-page-wrap">
        <keep-alive>
            <component
                    :is="pvt_groupBlog_comp[pvt_currentRef.groupBlog].componentName"
                    v-show="pvt_isShow.groupBlog"
                    :refId="pvt_currentRef.groupBlog"
                    :para="pvt_groupBlog_para[pvt_currentRef.groupBlog].para"
                    :attr="pvt_groupBlog_attr[pvt_currentRef.groupBlog].attr"
                    :ref="pvt_currentRef.groupBlog">
            </component>
        </keep-alive>
    </div>
</template>

<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import groupList from './groupList';
    import groupBlogDetail from './blogDetail_group';

    export default {
        name: 'pageGene',
        props: ['para', 'refId', "attr", 'blogData'],
        components: {
            groupList,
            groupBlogDetail
        },
        data: function () {
            return {
                myType: 1,
                mySite: '',
                myID: 1,

                articleActive: false,
                noteActive: false,
                detailActive: false,
                groupDetailActive: false,
                cloudBlogId: null,
                terBlogId: null,
                showUserInfo: false,
                btnType: 'content',
                articleBlogId: undefined,
                noteBlogId: undefined,

                mac: mac.mac,
                sys: {
                    api: null,
                    lib: null
                },
                outPara: null,
                // 工具内部变量
                // 因为不对外公开，为免和用户定义变量冲突，内部变量以pvt_开头
                pvt_isSubModuleStarted: false,

                // 容器 id 和 ref 的对应关系
                pvt_vesselRef: {
                    vesselId: ['groupBlog', 'groupBlog'],
                    ref: ['groupListRef', 'groupBlogDetailRef'],
                },

                // 各容器中当前活动的 ref；切换动态组件中的组件，只需要修改这里的ref
                pvt_currentRef: {
                    groupBlog: 'groupListRef'
                },

                // 各容器中模块显示状态；显示隐藏某组件，只需要修改这里的值
                pvt_isShow: {
                    groupBlog: true
                },

                pvt_isMounted: {
                    groupListRef: false,
                    groupBlogDetailRef: false
                },
                // 因为目标模块处于非活动状态，其他模块调用目标模块的方法被 push 到这个方法队列中，条件允许再执行
                pvt_subModuleMethodQueue: {},
            }
        },
        mounted() {

        },
        computed: {
            pvt_groupBlog_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.groupBlog,
                    isShow: this.pvt_isShow.groupBlog,
                    groupListRef: {
                        componentName: 'groupList',
                    },
                    groupBlogDetailRef: {
                        componentName: 'groupBlogDetail',
                    }
                }
            },
            pvt_groupBlog_para: function () {
                return {
                    groupListRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_groupBlog_comp.isShow,
                            $isMounted: this.pvt_isMounted.groupListRef || this.pvt_isMounted.groupBlogDetailRef
                        },
                    },
                    groupBlogDetailRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_groupBlog_comp.isShow,
                            $isMounted: this.pvt_isMounted.groupListRef || this.pvt_isMounted.groupBlogDetailRef,
                            terBlogId: this.terBlogId,
                            cloudBlogId: this.cloudBlogId,
                            showUserInfo: this.showUserInfo,
                            btnType: this.btnType
                        },
                    }
                }
            },
            pvt_groupBlog_attr: function () {
                return {
                    groupListRef: {
                        attr: {},
                    },
                    groupBlogDetailRef: {
                        attr: {},
                    }
                };
            },

        },
        provide: function () {
            return {
                sys: this.sys
            }
        },
        watch: {
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
                            $this.startGene(function (result) {

                            }, function (error) {
                                console.log(error)
                            })
                        }, function (error) {
                            console.log(error);
                        });

                    }
                }
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

            startGene: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let portName;
                let inputData;
                let expression = '',
                    start = null,
                    total = null,
                    sort = ['id,asc'],
                    destGeneSite = '';
                var fnname = 'pageGene.startModule';
                if (successCallBack !== null) {
                    errorCallBack = that.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                var para = errorCallBack;
                while (1) {
                    if (that.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            // 初始化：
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            that.articleActive = false;
                            that.noteActive = false;
                            that.detailActive = false;
                            that.groupDetailActive = false;
                            that.articleBlogId = undefined;
                            that.noteBlogId = undefined;
                            that.cloudBlogId = null;
                            that.terBlogId = null;

                            portName = that.mac.tb.userInfo;
                            inputData = null;

                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startGene(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'init':
                            if(that.blogData.cloudBlogId === null) {
                                this.activateModule('groupListRef', function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.startGene(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                });
                            } else {
                                that.terBlogId = that.blogData.terBlogId;
                                that.cloudBlogId = that.blogData.cloudBlogId;
                                that.showUserInfo = that.blogData.showUserInfo;
                                that.btnType = that.blogData.btnType;
                                this.activateModule('groupBlogDetailRef', function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.startGene(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                });
                            }
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                    }
                    if (++dbFlag === 1) {
                        return;
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

            blogDetail: function (terBlogId, btn) {
                let that = this;
                // 重置绑定的滑动事件：
                window.onscroll = null;

                that.callModuleEventPort('getCloudBlogId', [terBlogId], function (result) {
                    that.terBlogId = terBlogId;
                    that.cloudBlogId = result;
                    that.showUserInfo = false;
                    that.btnType = btn;

                    let historyData = {
                        userSite: that.mySite,
                        blogID: terBlogId
                    };

                    that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.newHistory, historyData, 'groupList'], function () {
                        that.activateModule('groupBlogDetailRef', function () {
                        }, function () {
                        });
                    }, function () {
                        that.$message.warning('出错了！请稍后再试。');
                    })
                }, function() {
                });
            },

            showPublicPage: function () {
                let that = this;
                this.activateModule('groupListRef', function () {
                    that.callSubModuleMethod('groupListRef', 'geneStart', [], function () {
                    }, function () {
                    })
                }, function () {
                });
            },

            // 事件监听：
            groupListRef_publishArticle: function () {
                this.callModuleEventPort('publishArticle', []);
            },
            groupListRef_publishNote: function () {
                this.callModuleEventPort('publishNote', []);
            },
            groupListRef_blogClickEvent: function (ref, terBlogId, btn) {
                this.blogDetail(terBlogId, btn);
            },
            groupListRef_draftClickEvent: function (ref, blogType, terBlogId) {
                this.callModuleEventPort('draftClickEvent', [blogType, terBlogId]);
            },
            groupListRef_inputCloudBlog: function (ref, type, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', [type], successCallBack, errorCallBack);
            },
            groupListRef_getCloudBlogId: function (ref, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('getCloudBlogId', [terBlogId], successCallBack, errorCallBack);
            },
            groupListRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },
            groupListRef_refreshTerminal: function (ref, tableName, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshTerminal', [tableName, data], successCallBack, errorCallBack);
            },

            groupBlogDetailRef_refreshTerminal: function (ref, tableName, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshTerminal', [tableName, data], successCallBack, errorCallBack);
            },
            groupBlogDetailRef_inputCloudComment: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudComment', [], successCallBack, errorCallBack);
            },
            groupBlogDetailRef_inputClerkInfo: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputClerkInfo', [], successCallBack, errorCallBack);
            },
            groupBlogDetailRef_inputNewComment: function (ref, cloudCommentId, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputNewComment', [cloudCommentId], successCallBack, errorCallBack);
            },
            groupBlogDetailRef_refreshDelComment: function (ref, terCommentId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshDelComment', [terCommentId], successCallBack, errorCallBack);
            },
            groupBlogDetailRef_backEvent: function (ref, type) {
                if(type === 'public') {
                    this.callModuleEventPort('backEvent', []);
                } else {
                    this.showPublicPage();
                }

            },

            groupListRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data, 'groupList'], successCallBack, errorCallBack);
            },
            groupBlogDetailRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data, 'groupBlogDetail'], successCallBack, errorCallBack);
            },
        }
    }
</script>

<style lang="scss">
    #group-page-wrap {
        width: 100%;
        height: 100%;
        font-family: SourceHanSansCN-Medium;
    }
</style>
