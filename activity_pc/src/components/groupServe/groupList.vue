<template>
    <div id="group-blog-list-wrap" class="screen-change">
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
    import footC from '../customerFooter';
    import headC from '../customerHeader';
    import note from './note';
    import articleC from './article';
    import comment from './comment';
    import myArticle from './myArticle';
    import myComment from './myComment';
    import myDraft from './myDraft';
    import myNote from './myNote';
    import listC from '@/components/baseComponent/listComponent.vue';
    import textC from '@/components/baseComponent/textComponent.vue';
    import inputC from '@/components/baseComponent/inputComponent.vue';
    import imageC from '@/components/baseComponent/imageComponent.vue';
    import radioC from '@/components/baseComponent/radioComponent.vue';
    import buttonC from '@/components/baseComponent/buttonComponent.vue';
    import pictureUploadC from '@/components/baseComponent/pictureUploadComponent.vue';
    import checkboxC from '@/components/baseComponent/checkboxComponent.vue';

    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {
            note,
            articleC,
            comment,
            myArticle,
            myComment,
            myDraft,
            myNote,
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
                curListIndex: -1,

                myNoteActive: false,
                myArticleActive: false,
                myCommentActive: false,
                myDraftActive: false,
                noteActive: false,
                articleActive: false,
                commentActive: false,

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['foot', 'head', 'tabs', 'tabs', 'tabs', 'tabs', 'tabs', 'tabs', 'tabs', 'tabList'],
                    ref: ['footRef', 'headRef', 'noteRef', 'articleRef', 'commentRef','myNoteRef', 'myArticleRef', 'myDraftRef', 'myCommentRef', 'tabListRef']
                },

                pvt_currentRef: {
                    head: 'headRef',
                    foot: 'footRef',
                    tabs: 'noteRef',
                    tabList: 'tabListRef',
                },

                pvt_isShow: {
                    head: true,
                    foot: true,
                    tabs: true,
                    tabList: true,
                },
                pvt_isMounted: {
                    footRef: false,
                    headRef: false,
                    tabListRef: false,
                    noteRef: false,
                    articleRef: false,
                    commentRef: false,
                    myNoteRef: false,
                    myArticleRef: false,
                    myDraftRef: false,
                    myCommentRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {

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

            pvt_tabs_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.tabs,
                    isShow: this.pvt_isShow.tabs,
                    myNoteRef: {
                        componentName: 'myNote',
                    },
                    myDraftRef: {
                        componentName: 'myDraft',
                    },
                    myArticleRef: {
                        componentName: 'myArticle',
                    },
                    myCommentRef: {
                        componentName: 'myComment',
                    },
                    noteRef: {
                        componentName: 'note',
                    },
                    commentRef: {
                        componentName: 'comment',
                    },
                    articleRef: {
                        componentName: 'articleC',
                    },
                }
            },
            pvt_tabs_para: function () {
                return {
                    myNoteRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.myNoteRef || this.pvt_isMounted.myDraftRef || this.pvt_isMounted.myArticleRef || this.pvt_isMounted.myCommentRef || this.pvt_isMounted.noteRef || this.pvt_isMounted.commentRef || this.pvt_isMounted.articleRef,
                        },
                    },
                    myDraftRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.myNoteRef || this.pvt_isMounted.myDraftRef || this.pvt_isMounted.myArticleRef || this.pvt_isMounted.myCommentRef || this.pvt_isMounted.noteRef || this.pvt_isMounted.commentRef || this.pvt_isMounted.articleRef,
                        },
                    },
                    myArticleRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.myNoteRef || this.pvt_isMounted.myDraftRef || this.pvt_isMounted.myArticleRef || this.pvt_isMounted.myCommentRef || this.pvt_isMounted.noteRef || this.pvt_isMounted.commentRef || this.pvt_isMounted.articleRef,
                        },
                    },
                    myCommentRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.myNoteRef || this.pvt_isMounted.myDraftRef || this.pvt_isMounted.myArticleRef || this.pvt_isMounted.myCommentRef || this.pvt_isMounted.noteRef || this.pvt_isMounted.commentRef || this.pvt_isMounted.articleRef,
                        },
                    },
                    commentRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.myNoteRef || this.pvt_isMounted.myDraftRef || this.pvt_isMounted.myArticleRef || this.pvt_isMounted.myCommentRef || this.pvt_isMounted.noteRef || this.pvt_isMounted.commentRef || this.pvt_isMounted.articleRef,
                        },
                    },
                    noteRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.myNoteRef || this.pvt_isMounted.myDraftRef || this.pvt_isMounted.myArticleRef || this.pvt_isMounted.myCommentRef || this.pvt_isMounted.noteRef || this.pvt_isMounted.commentRef || this.pvt_isMounted.articleRef,
                        },
                    },
                    articleRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tabs_comp.isShow,
                            $isMounted: this.pvt_isMounted.myNoteRef || this.pvt_isMounted.myDraftRef || this.pvt_isMounted.myArticleRef || this.pvt_isMounted.myCommentRef || this.pvt_isMounted.noteRef || this.pvt_isMounted.commentRef || this.pvt_isMounted.articleRef,
                        },
                    },
                }
            },
            pvt_tabs_attr: function () {
                return {
                    myNoteRef: {
                        attr: {},
                    },
                    myDraftRef: {
                        attr: {},
                    },
                    myArticleRef: {
                        attr: {},
                    },
                    myCommentRef: {
                        attr: {},
                    },
                    noteRef: {
                        attr: {},
                    },
                    commentRef: {
                        attr: {},
                    },
                    articleRef: {
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
                                $value: ['全部', '帖子', '文章', '评论', '我的', '我的帖子', '我的文章', '我的评论', '草稿箱']
                            },
                            icon: {
                                $table: '',
                                $field: [],
                                $value: ['el-icon-folder-opened', '', '', '', 'el-icon-brush', '', '', '', '',]
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
                            checked: 2,
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
                handler: function (val, oldVal) {
                    var $this = this;
                    Object.assign($this, $this.sys.lib);

                    if (val.$api && val.$isShow && val.$isMounted
                        && !$this.$lodash.isEqual(val, oldVal)) {

                        // 变量赋值完成准备传入子模块标志
                        $this.pvt_isSubModuleStarted = true;
                        // 调用模块固定方法，此方法由用户实现
                        $this.startModule(function () {
                            setTimeout(function () {
                                if ($this.$parent.subModuleActivatedEvent) {
                                    $this.$parent.subModuleActivatedEvent($this.refId);
                                }
                            }, 0);
                        }, function () {

                        });
                    } else if (oldVal) {
                        setTimeout(function () {
                            if ($this.$parent.subModuleActivatedEvent) {
                                $this.$parent.subModuleActivatedEvent($this.refId);
                            }
                        }, 0);
                    }
                },
                deep: true,
                immediate: true
            },
        },
        mounted: function () {
            let that = this;
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true;
            }
        },
        methods: {
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

                // 设置左侧列表高度：
                let $contentLeft = that.$refs.contentLeft;
                let screenWidth = document.documentElement.clientWidth;
                let screenHeight = document.documentElement.clientHeight;
                $contentLeft.style.height = screenHeight - 90 + 'px';

                para = errorCallBack;
            },

            geneStart: function() {
                this.curListIndex = -1;
                this.callSubModuleMethod('tabListRef', 'listRefresh', [2], function () {
                }, function () {
                })
            },

            listChange: function(index) {
                let that = this;
                if(that.curListIndex === index) {
                    return
                }
                that.curListIndex = index;
                switch (index) {
                    case 1:
                        this.activateModule('noteRef', function () {
                            if(that.noteActive) {
                                that.callSubModuleMethod('noteRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.noteActive = true;
                        }, function () {
                        });
                        break;
                    case 2:
                        this.activateModule('articleRef', function () {
                            if(that.articleActive) {
                                that.callSubModuleMethod('articleRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.articleActive = true;
                        }, function () {
                        });
                        break;
                    case 3:
                        this.activateModule('commentRef', function () {
                            if(that.commentActive) {
                                that.callSubModuleMethod('commentRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.commentActive = true;
                        }, function () {
                        });
                        break;
                    case 5:
                        this.activateModule('myNoteRef', function () {
                            if(that.myNoteActive) {
                                that.callSubModuleMethod('myNoteRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.myNoteActive = true;
                        }, function () {
                        });
                        break;
                    case 6:
                        this.activateModule('myArticleRef', function () {
                            if(that.myArticleActive) {
                                that.callSubModuleMethod('myArticleRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.myArticleActive = true;
                        }, function () {
                        });
                        break;
                    case 7:
                        this.activateModule('myCommentRef', function () {
                            if(that.myCommentActive) {
                                that.callSubModuleMethod('myCommentRef', 'startModule', [], function () {
                                }, function () {
                                })
                            }
                            that.myCommentActive = true;
                        }, function () {
                        });
                        break;
                    case 8:
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

            // 事件：
            tabListRef_itemClickEvent: function (ref, id, name) {
                this.listChange(id);
            },

            noteRef_publishArticle: function () {
                this.callModuleEventPort('publishArticle', []);
            },
            noteRef_publishNote: function () {
                this.callModuleEventPort('publishNote', []);
            },
            articleRef_publishArticle: function () {
                this.callModuleEventPort('publishArticle', []);
            },
            articleRef_publishNote: function () {
                this.callModuleEventPort('publishNote', []);
            },
            myArticleRef_publishArticle: function () {
                this.callModuleEventPort('publishArticle', []);
            },
            myArticleRef_publishNote: function () {
                this.callModuleEventPort('publishNote', []);
            },
            myNoteRef_publishArticle: function () {
                this.callModuleEventPort('publishArticle', []);
            },
            myNoteRef_publishNote: function () {
                this.callModuleEventPort('publishNote', []);
            },

            articleRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            noteRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            myArticleRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            myNoteRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            myDraftRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },

            noteRef_blogClickEvent: function (ref, blogId, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, btn]);
            },
            commentRef_blogClickEvent: function (ref, blogId, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, btn]);
            },
            articleRef_blogClickEvent: function (ref, blogId, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, btn]);
            },
            myCommentRef_blogClickEvent: function (ref, blogId, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, btn]);
            },
            myNoteRef_blogClickEvent: function (ref, blogId, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, btn]);
            },
            myArticleRef_blogClickEvent: function (ref, blogId, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, btn]);
            },
            myArticleRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },
            articleRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },
            myNoteRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },
            noteRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },
            myDraftRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },
            myCommentRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },
            commentRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },

            myArticleRef_refreshTerminal: function (ref, tableName, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshTerminal', [tableName, data], successCallBack, errorCallBack);
            },
            articleRef_refreshTerminal: function (ref, tableName, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshTerminal', [tableName, data], successCallBack, errorCallBack);
            },
            myNoteRef_refreshTerminal: function (ref, tableName, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshTerminal', [tableName, data], successCallBack, errorCallBack);
            },
            noteRef_refreshTerminal: function (ref, tableName, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshTerminal', [tableName, data], successCallBack, errorCallBack);
            },
            myDraftRef_refreshTerminal: function (ref, tableName, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshTerminal', [tableName, data], successCallBack, errorCallBack);
            },

            noteRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['note'], successCallBack, errorCallBack);
            },
            commentRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['comment'], successCallBack, errorCallBack);
            },
            articleRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['article'], successCallBack, errorCallBack);
            },
            myCommentRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['myComment'], successCallBack, errorCallBack);
            },
            myNoteRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['myNote'], successCallBack, errorCallBack);
            },
            myArticleRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['myArticle'], successCallBack, errorCallBack);
            },
            myDraftRef_inputCloudBlog: function (ref, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputCloudBlog', ['myDraft'], successCallBack, errorCallBack);
            },

            myDraftRef_draftClickEvent: function (ref, blogType, blogId) {
                this.callModuleEventPort('draftClickEvent', [blogType, blogId]);
            },
            myDraftRef_getCloudBlogId: function (ref, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('getCloudBlogId', [terBlogId], successCallBack, errorCallBack);
            },
        }
    };
</script>
<style lang="scss">
    #group-blog-list-wrap {
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
            max-width: 1200px;
            padding: 10px 14% 100px 14%;
            z-index: 5;
            overflow: hidden;

            .content-left {
                position: fixed;
                width: 138px;
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
                .list_ul_style {
                    .listUlLiClass {
                        padding: 10px;
                        padding-left: 30px;
                        &:hover {
                            background-color: rgba(18,176,255,0.16);
                        }
                        &:first-child {
                            padding-left: 10px;
                            cursor: auto;
                            pointer-events: none;
                            &:hover {
                                background-color: rgba(18,176,255,0);
                            }
                        }
                        &:nth-child(5) {
                            margin-top: 10px;
                            padding-left: 10px;
                            cursor: auto;
                            pointer-events: none;
                            &:hover {
                                background-color: rgba(18,176,255,0);
                            }
                        }
                    }
                }

            }

            .public-content-wrap {
                flex: 1;
                /*padding: 20px 40px;*/
                margin-left: 150px;
                min-height: 300px;
                /*border-left: 1px solid #ccc;*/
                /*border-right: 1px solid #ccc;*/
            }
        }
    }
</style>