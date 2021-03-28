<template>
    <div id="article-wrap" class="screen-change">
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
            <div class="content-left">
                <div class="article-publish-text">
                    <lm-link-text
                            :para="pvt_publishText_para[pvt_currentRef.publishText].para"
                            :attr="pvt_publishText_attr[pvt_currentRef.publishText].attr"
                            :refId="pvt_currentRef.publishText"
                            :ref="pvt_currentRef.publishText">
                    </lm-link-text>
                </div>
                <div class="publish-content-wrap">
                    <div class="title-text">
                        <lm-link-text
                                :para="pvt_titleText_para[pvt_currentRef.titleText].para"
                                :attr="pvt_titleText_attr[pvt_currentRef.titleText].attr"
                                :refId="pvt_currentRef.titleText"
                                :ref="pvt_currentRef.titleText">
                        </lm-link-text>
                    </div>
                    <div class="publish-title">
                        <inputC
                                :para="pvt_title_para[pvt_currentRef.title].para"
                                :attr="pvt_title_attr[pvt_currentRef.title].attr"
                                :refId="pvt_currentRef.title"
                                :ref="pvt_currentRef.title">
                        </inputC>
                    </div>
                </div>
                <div class="text-editor-wrap">
                    <div class="article-editor-text">
                        <lm-link-text
                                :para="pvt_editorText_para[pvt_currentRef.editorText].para"
                                :attr="pvt_editorText_attr[pvt_currentRef.editorText].attr"
                                :refId="pvt_currentRef.editorText"
                                :ref="pvt_currentRef.editorText">
                        </lm-link-text>
                    </div>
                    <div class="text-editor">
                        <textEditor
                                :para="pvt_textEditor_para[pvt_currentRef.textEditor].para"
                                :attr="pvt_textEditor_attr[pvt_currentRef.textEditor].attr"
                                :refId="pvt_currentRef.textEditor"
                                :ref="pvt_currentRef.textEditor">
                        </textEditor>
                    </div>
                </div>
                <div class="sort-wrap">
                    <div class="sort-text-wrap">
                        <div class="sort-text">
                            <lm-link-text
                                    :para="pvt_sortText_para[pvt_currentRef.sortText].para"
                                    :attr="pvt_sortText_attr[pvt_currentRef.sortText].attr"
                                    :refId="pvt_currentRef.sortText"
                                    :ref="pvt_currentRef.sortText">
                            </lm-link-text>
                        </div>
                        <div class="tag-manager">
                            <lm-link-text
                                    :para="pvt_tagManager_para[pvt_currentRef.tagManager].para"
                                    :attr="pvt_tagManager_attr[pvt_currentRef.tagManager].attr"
                                    :refId="pvt_currentRef.tagManager"
                                    :ref="pvt_currentRef.tagManager">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="sort-checkbox">
                        <lm-tags
                                :para="pvt_checkbox_para[pvt_currentRef.checkbox].para"
                                :attr="pvt_checkbox_attr[pvt_currentRef.checkbox].attr"
                                :refId="pvt_currentRef.checkbox"
                                :ref="pvt_currentRef.checkbox">
                        </lm-tags>
                    </div>
                </div>
                <div class="more-set-wrap">
                    <div class="more-set-text">
                        <lm-link-text
                                :para="pvt_moreText_para[pvt_currentRef.moreText].para"
                                :attr="pvt_moreText_attr[pvt_currentRef.moreText].attr"
                                :refId="pvt_currentRef.moreText"
                                :ref="pvt_currentRef.moreText">
                        </lm-link-text>
                    </div>
                    <div class="limit-wrap">
                        <div class="limit-text">
                            <textC
                                    :para="pvt_limitText_para[pvt_currentRef.limitText].para"
                                    :attr="pvt_limitText_attr[pvt_currentRef.limitText].attr"
                                    :refId="pvt_currentRef.limitText"
                                    :ref="pvt_currentRef.limitText">
                            </textC>
                        </div>
                        <div class="limit-radio">
                            <radioC
                                    :para="pvt_limitRadio_para[pvt_currentRef.limitRadio].para"
                                    :attr="pvt_limitRadio_attr[pvt_currentRef.limitRadio].attr"
                                    :refId="pvt_currentRef.limitRadio"
                                    :ref="pvt_currentRef.limitRadio">
                            </radioC>
                        </div>
                    </div>
                    <div class="close-comment-wrap">
                        <div class="close-comment-text">
                            <textC
                                    :para="pvt_closeText_para[pvt_currentRef.closeText].para"
                                    :attr="pvt_closeText_attr[pvt_currentRef.closeText].attr"
                                    :refId="pvt_currentRef.closeText"
                                    :ref="pvt_currentRef.closeText">
                            </textC>
                        </div>
                        <div class="close-comment">
                            <radioC
                                    :para="pvt_closeComment_para[pvt_currentRef.closeComment].para"
                                    :attr="pvt_closeComment_attr[pvt_currentRef.closeComment].attr"
                                    :refId="pvt_currentRef.closeComment"
                                    :ref="pvt_currentRef.closeComment">
                            </radioC>
                        </div>
                    </div>
                    <!--<div class="privacy-set">-->
                        <!--<lm-link-text-->
                                <!--:para="pvt_privacy_para[pvt_currentRef.privacy].para"-->
                                <!--:attr="pvt_privacy_attr[pvt_currentRef.privacy].attr"-->
                                <!--:refId="pvt_currentRef.privacy"-->
                                <!--:ref="pvt_currentRef.privacy">-->
                        <!--</lm-link-text>-->
                    <!--</div>-->
                </div>
                <div class="publish-btn">
                    <buttonC
                            :para="pvt_publishBtn_para[pvt_currentRef.publishBtn].para"
                            :attr="pvt_publishBtn_attr[pvt_currentRef.publishBtn].attr"
                            :refId="pvt_currentRef.publishBtn"
                            :ref="pvt_currentRef.publishBtn">
                    </buttonC>
                </div>
                <!--<div class="draft-btn">-->
                    <!--<lm-button-->
                            <!--:para="pvt_draftBtn_para[pvt_currentRef.draftBtn].para"-->
                            <!--:attr="pvt_draftBtn_attr[pvt_currentRef.draftBtn].attr"-->
                            <!--:refId="pvt_currentRef.draftBtn"-->
                            <!--:ref="pvt_currentRef.draftBtn">-->
                    <!--</lm-button>-->
                <!--</div>-->
            </div>
            <div class="content-right">
                <div class="user-info" ref="userInfo">
                    <userInfo
                            :para="pvt_userInfo_para[pvt_currentRef.userInfo].para"
                            :attr="pvt_userInfo_attr[pvt_currentRef.userInfo].attr"
                            :refId="pvt_currentRef.userInfo"
                            :ref="pvt_currentRef.userInfo">
                    </userInfo>
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
    import textEditor from './textEditor';
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
            checkboxC,
            textEditor
        },
        data: function () {
            return {
                mac: mac.mac,
                myType: 1,
                mySite: '',
                myID: 1,

                articleValue: '',
                titleValue: '',
                sortCheckedArr: [],
                limitChecked: 0,
                closeCommentChecked: 0,
                newBlogId: '',
                blogId: '',
                imgDataArr: [],

                curLabelId: null,
                labelDataClone: [],
                labelDataArr: [],
                labelData: [],
                publishBtn: '发布',
                draftBtn: '保存草稿',

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['userInfo', 'foot', 'head', 'activity', 'apply', 'publishText', 'textEditor', 'sortText', 'checkbox', 'limitText', 'limitRadio', 'publishBtn', 'title', 'closeComment', 'privacy', 'closeText', 'draftBtn', 'titleText', 'editorText', 'moreText', 'tagManager'],
                    ref: ['userInfoRef', 'footRef', 'headRef', 'activityRef', 'applyRef', 'publishTextRef', 'textEditorRef', 'sortTextRef', 'checkboxRef', 'limitTextRef', 'limitRadioRef', 'publishBtnRef', 'titleRef', 'closeCommentRef', 'privacyRef', 'closeTextRef', 'draftBtnRef', 'titleTextRef', 'editorTextRef', 'moreTextRef', 'tagManagerRef']
                },

                pvt_currentRef: {
                    userInfo: 'userInfoRef',
                    head: 'headRef',
                    foot: 'footRef',
                    activity: 'activityRef',
                    apply: 'applyRef',
                    publishText: 'publishTextRef',
                    textEditor: 'textEditorRef',
                    sortText: 'sortTextRef',
                    checkbox: 'checkboxRef',
                    limitText: 'limitTextRef',
                    limitRadio: 'limitRadioRef',
                    publishBtn: 'publishBtnRef',
                    title: 'titleRef',
                    closeComment: 'closeCommentRef',
                    closeText: 'closeTextRef',
                    privacy: 'privacyRef',
                    draftBtn: 'draftBtnRef',
                    titleText: 'titleTextRef',
                    editorText: 'editorTextRef',
                    moreText: 'moreTextRef',
                    tagManager: 'tagManagerRef',
                },

                pvt_isShow: {
                    userInfo: true,
                    head: true,
                    foot: true,
                    activity: true,
                    apply: true,
                    publishText: true,
                    textEditor: true,
                    sortText: true,
                    checkbox: true,
                    limitText: true,
                    limitRadio: true,
                    publishBtn: true,
                    title: true,
                    closeComment: true,
                    closeText: true,
                    privacy: true,
                    draftBtn: true,
                    titleText: true,
                    editorText: true,
                    moreText: true,
                    tagManager: true,
                },
                pvt_isMounted: {
                    userInfoRef: false,
                    footRef: false,
                    headRef: false,
                    activityRef: false,
                    applyRef: false,
                    publishTextRef: false,
                    textEditorRef: false,
                    sortTextRef: false,
                    checkboxRef: false,
                    limitTextRef: false,
                    limitRadioRef: false,
                    publishBtnRef: false,
                    titleRef: false,
                    closeCommentRef: false,
                    closeTextRef: false,
                    privacyRef: false,
                    draftBtnRef: false,
                    titleTextRef: false,
                    editorTextRef: false,
                    moreTextRef: false,
                    tagManagerRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_moreText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.moreText,
                    isShow: this.pvt_isShow.moreText,
                    moreTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_moreText_para: function () {
                return {
                    moreTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_moreText_comp.isShow,
                            $isMounted: this.pvt_isMounted.moreTextRef,
                            textData: {$table: '', $value: ['更多设置']},
                        },
                    },
                };
            },
            pvt_moreText_attr: function () {
                return {
                    moreTextRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        },
                    },
                };
            },

            pvt_titleText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.titleText,
                    isShow: this.pvt_isShow.titleText,
                    titleTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_titleText_para: function () {
                return {
                    titleTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_titleText_comp.isShow,
                            $isMounted: this.pvt_isMounted.titleTextRef,
                            textData: {$table: '', $value: ['文章标题']},
                        },
                    },
                };
            },
            pvt_titleText_attr: function () {
                return {
                    titleTextRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        },
                    },
                };
            },

            pvt_editorText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.editorText,
                    isShow: this.pvt_isShow.editorText,
                    editorTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_editorText_para: function () {
                return {
                    editorTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_editorText_comp.isShow,
                            $isMounted: this.pvt_isMounted.editorTextRef,
                            textData: {$table: '', $value: ['编辑文章']},
                        },
                    },
                };
            },
            pvt_editorText_attr: function () {
                return {
                    editorTextRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
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
                                $value: ['活动1', '活动2', '活动3', '活动4', '活动1', '活动2', '活动3', '活动4']
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
                            name: {$table: '', $field: [], $value: ['应用1', '应用2', '应用3', '应用4']},
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

            pvt_publishText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.publishText,
                    isShow: this.pvt_isShow.publishText,
                    publishTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_publishText_para: function () {
                return {
                    publishTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_publishText_comp.isShow,
                            $isMounted: this.pvt_isMounted.publishTextRef,
                            textData: {$table: '', $value: ['写文章']},
                        },
                    },
                };
            },
            pvt_publishText_attr: function () {
                return {
                    publishTextRef: {
                        attr: {
                            fontSize: '16px',
                            color: '#303133',
                            fontWeight: true
                        },
                    },
                };
            },

            pvt_title_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.title,
                    isShow: this.pvt_isShow.title,
                    titleRef: {
                        componentName: 'inputC',
                    },
                }
            },
            pvt_title_para: function () {
                return {
                    titleRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_title_comp.isShow,
                            $isMounted: this.pvt_isMounted.titleRef,
                            value: {$table: '', $field: [], $value: [this.titleValue]},
                        },
                    },
                };
            },
            pvt_title_attr: function () {
                return {
                    titleRef: {
                        attr: {
                            placeholder: '请输入文章标题'
                        },
                    },
                };
            },

            pvt_textEditor_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.textEditor,
                    isShow: this.pvt_isShow.textEditor,
                    textEditorRef: {
                        componentName: 'textEditor',
                    },
                }
            },
            pvt_textEditor_para: function () {
                return {
                    textEditorRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_textEditor_comp.isShow,
                            $isMounted: this.pvt_isMounted.textEditorRef,
                            blogId: this.blogId,
                            articleValue: this.articleValue
                        },
                    },
                };
            },
            pvt_textEditor_attr: function () {
                return {
                    textEditorRef: {
                        attr: {
                        },
                    },
                };
            },

            pvt_sortText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.sortText,
                    isShow: this.pvt_isShow.sortText,
                    sortTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_sortText_para: function () {
                return {
                    sortTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_sortText_comp.isShow,
                            $isMounted: this.pvt_isMounted.sortTextRef,
                            textData: {$table: '', $value: ['选择分类']},
                        },
                    },
                };
            },
            pvt_sortText_attr: function () {
                return {
                    sortTextRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        },
                    },
                };
            },

            pvt_tagManager_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.tagManager,
                    isShow: this.pvt_isShow.tagManager,
                    tagManagerRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_tagManager_para: function () {
                return {
                    tagManagerRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_tagManager_comp.isShow,
                            $isMounted: this.pvt_isMounted.tagManagerRef,
                            textData: {$table: '', $value: ['标签管理>']},
                        },
                    },
                };
            },
            pvt_tagManager_attr: function () {
                return {
                    tagManagerRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            isClick: true
                        },
                    },
                };
            },

            pvt_checkbox_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.checkbox,
                    isShow: this.pvt_isShow.checkbox,
                    checkboxRef: {
                        componentName: 'checkboxC',
                    },
                }
            },
            pvt_checkbox_para: function () {
                return {
                    checkboxRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_checkbox_comp.isShow,
                            $isMounted: this.pvt_isMounted.checkboxRef,
                            tabData: [{
                                $table: '',
                                $arrField: [],
                                $arrValue: this.labelData
                            }],
                        },
                    },
                };
            },
            pvt_checkbox_attr: function () {
                return {
                    checkboxRef: {
                        attr: {
                            type: 'info',
                            new: true,
                            closable: true,
                            selectArr: this.sortCheckedArr
                        },
                    },
                };
            },

            pvt_limitText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.limitText,
                    isShow: this.pvt_isShow.limitText,
                    limitTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_limitText_para: function () {
                return {
                    limitTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_limitText_comp.isShow,
                            $isMounted: this.pvt_isMounted.limitTextRef,
                            textData: {$table: '', $field: [], $value: ['谁可以看']},
                        },
                    },
                };
            },
            pvt_limitText_attr: function () {
                return {
                    limitTextRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#C0C4CC'
                        },
                    },
                };
            },

            pvt_limitRadio_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.limitRadio,
                    isShow: this.pvt_isShow.limitRadio,
                    limitRadioRef: {
                        componentName: 'radioC',
                    },
                }
            },
            pvt_limitRadio_para: function () {
                return {
                    limitRadioRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_limitRadio_comp.isShow,
                            $isMounted: this.pvt_isMounted.limitRadioRef,
                            radio: {$table: '', $field: [], $value: [this.limitChecked]},
                            radioArr: {
                                $table: '',
                                $field: [],
                                $value: [{label: 0, text: "公开"}, {label: 1, text: "朋友可见"}, {label: 2, text: "仅自己"}]
                            },
                        },
                    },
                };
            },
            pvt_limitRadio_attr: function () {
                return {
                    limitRadioRef: {
                        attr: {},
                    },
                };
            },

            pvt_closeText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.closeText,
                    isShow: this.pvt_isShow.closeText,
                    closeTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_closeText_para: function () {
                return {
                    closeTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_closeText_comp.isShow,
                            $isMounted: this.pvt_isMounted.closeTextRef,
                            textData: {$table: '', $field: [], $value: ['是否可被评论']},
                        },
                    },
                };
            },
            pvt_closeText_attr: function () {
                return {
                    closeTextRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#C0C4CC'
                        },
                    },
                };
            },

            pvt_closeComment_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.closeComment,
                    isShow: this.pvt_isShow.closeComment,
                    closeCommentRef: {
                        componentName: 'radioC',
                    },
                }
            },
            pvt_closeComment_para: function () {
                return {
                    closeCommentRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_closeComment_comp.isShow,
                            $isMounted: this.pvt_isMounted.closeCommentRef,
                            radio: {$table: '', $field: [], $value: [this.closeCommentChecked]},
                            radioArr: {
                                $table: '',
                                $field: [],
                                $value: [{label: 0, text: "可以"}, {label: 1, text: "不可以"}]
                            },
                        },
                    },
                };
            },
            pvt_closeComment_attr: function () {
                return {
                    closeCommentRef: {
                        attr: {},
                    },
                };
            },

            pvt_privacy_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.privacy,
                    isShow: this.pvt_isShow.privacy,
                    privacyRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_privacy_para: function () {
                return {
                    privacyRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_privacy_comp.isShow,
                            $isMounted: this.pvt_isMounted.privacyRef,
                            textData: {$table: '', $value: ['隐私设置']},
                        },
                    },
                };
            },
            pvt_privacy_attr: function () {
                return {
                    privacyRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            isClick: true
                        },
                    },
                };
            },

            pvt_publishBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.publishBtn,
                    isShow: this.pvt_isShow.publishBtn,
                    publishBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_publishBtn_para: function () {
                return {
                    publishBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_publishBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.publishBtnRef,
                            name: {$table: '', $field: [], $value: [this.publishBtn]},
                        },
                    },
                };
            },
            pvt_publishBtn_attr: function () {
                return {
                    publishBtnRef: {
                        attr: {
                            type: 'primary',
                            width: '200px'
                        },
                    },
                };
            },

            pvt_draftBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.draftBtn,
                    isShow: this.pvt_isShow.draftBtn,
                    draftBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_draftBtn_para: function () {
                return {
                    draftBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_draftBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.draftBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: [this.draftBtn, ''] //表格记录
                            }],
                        },
                    },
                };
            },
            pvt_draftBtn_attr: function () {
                return {
                    draftBtnRef: {
                        attr: {
                            type: 'text',
                            size: 'mini'
                        },
                    },
                };
            }
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
            // 设置右侧列表高度：
            let screenWidth = document.documentElement.clientWidth;
            let screenHeight = document.documentElement.clientHeight;
            let $userInfo = that.$refs.userInfo;
            let $hotRecommend = that.$refs.hotRecommend;
            $hotRecommend.style.height = screenHeight - 90 - 10 - $userInfo.offsetHeight + 'px';
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
                let tableName;
                let record;
                let dbData;
                let condition;
                let portName;
                let inputData;
                let expression = '',
                    start = null,
                    total = null,
                    sort = ['id,asc'],
                    destGeneSite = '';
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
                            // 初始化：
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            window.scrollTo(0,0);
                            window.scroll = null;

                            that.articleValue = '';
                            that.titleValue = '';
                            that.sortCheckedArr = [];
                            that.limitChecked = 0;
                            that.closeCommentChecked = 0;
                            that.newBlogId = '';
                            that.blogId = '';

                            that.curLabelId = null;
                            that.labelData = [];
                            that.labelDataClone = [];
                            that.labelDataArr = [];
                            that.publishBtn = '发布';
                            that.draftBtn = '保存草稿';

                            if(that.para.blogId) {
                                para.nStep = 'getBlogData';
                            } else {
                                // 当新增文章的时候，图片数据才能清空：
                                that.imgDataArr = [];
                                para.nStep = 'newBlog';
                            }
                            dbFlag++;
                            break;
                        case 'newBlog':
                            tableName = this.mac.tb.userBlog;
                            dbData = {};
                            dbData[this.mac.fd.userBlog.blogType] = [1];
                            that.sys.api.recordNew(tableName, null, dbData, function () {
                                that.newBlogId = dbData.id[0];
                                para.nStep = 'InputLabel';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getBlogData':
                            tableName = this.mac.tb.userBlog;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.blogId];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.articleValue = dbData[that.mac.fd.userBlog.details][0];
                                that.titleValue = dbData[that.mac.fd.userBlog.name][0];
                                that.limitChecked = dbData[that.mac.fd.userBlog.openRange][0];
                                that.closeCommentChecked = dbData[that.mac.fd.userBlog.closeComment][0];
                                that.sortCheckedArr = dbData[that.mac.fd.userBlog.labelNumber][0];
                                para.nStep = 'modifyBlog';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'modifyBlog':
                            tableName = this.mac.tb.groupBlog;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.blogId];
                            dbData[this.mac.fd.groupBlog.picture] = [[{"fieldType":2,"isDown":false,"isDownOld":false,"path":"","fileName":"","srcServer":"w_0"}]];
                            dbData[this.mac.fd.groupBlog.thumbnail] = [[{"fieldType":2,"isDown":false,"isDownOld":false,"path":"","fileName":"","srcServer":"w_0"}]];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                para.nStep = 'InputLabel';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'InputLabel':
                            expression = '';
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = that.mac.tb.userBlogLabel;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    that.curLabelId = result[0];
                                    para.nStep = 'getLabelValue';
                                } else {
                                    para.nStep = 'newLabel';
                                }
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });

                            // let labelValue = {
                            //     labelType: that.mac.labelType.userLabel
                            // };
                            // that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.groupGetLabelInfo, labelValue], function (result) {
                            //     if(result[0]) {
                            //         result[0].forEach(function (item, index) {
                            //             that.labelData.push({val: item, icon: ''});
                            //             that.labelDataClone.push({val: item, icon: ''});
                            //         });
                            //     }
                            //     para.nStep = 'end';
                            //     if (++dbFlag === 2) {
                            //         that.startModule(successCallBack, errorCallBack)
                            //     }
                            // }, function () {
                            // });
                            break;
                        case 'getLabelValue':
                            tableName = this.mac.tb.userBlogLabel;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curLabelId];
                            dbData[that.mac.fd.userBlogLabel.name] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                if(dbData[that.mac.fd.userBlogLabel.name][0]) {
                                    for(let i = 0; i < dbData[that.mac.fd.userBlogLabel.name][0].length; i++) {
                                        that.labelData.push(dbData[that.mac.fd.userBlogLabel.name][0][i]);
                                    }
                                    that.labelDataArr = JSON.parse(JSON.stringify(that.labelData));
                                    that.labelDataClone = JSON.parse(JSON.stringify(that.labelData));
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'newLabel':
                            tableName = this.mac.tb.userBlogLabel;
                            dbData = {};
                            dbData[that.mac.fd.userBlogLabel.name] = [[]];
                            that.sys.api.recordNew(tableName, null, dbData, function () {
                                that.curLabelId = dbData[that.mac.fd.id][0];
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            if(that.para.blogId) {
                                that.blogId = that.para.blogId;
                            } else {
                                that.blogId = that.newBlogId;
                            }
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            articlePublish: function(saveType, successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let tableName;
                let fieldName;
                let record;
                let dbData;
                let blogId;
                let articleStr = document.querySelector('.text-editor-wrap .publish-content').innerHTML;
                let articleText = document.querySelector('.text-editor-wrap .publish-content').innerText;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                if(that.para.blogId) {
                    blogId = that.para.blogId
                } else {
                    blogId = that.newBlogId;
                }

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:

                            if(articleText.search(/[^\s]/ig) === -1 || this.titleValue.search(/[^\s]/ig) === -1) {
                                this.$message.warning('文章内容不能为空！');
                                para.nStep = 'end';
                            } else {
                                // 进入发布状态：
                                if(saveType === 'publish') {
                                    that.publishBtn = '发布中...';
                                } else {
                                    that.draftBtn = '保存中...';
                                }

                                if(articleStr.match(/<img[^>]+>|<source[^>]+>/ig)) {
                                    para.imgArr = articleStr.match(/<img[^>]+>|<source[^>]+>/ig);
                                } else {
                                    para.imgArr = [];
                                }
                                para.nStep = 'modifyArticle';
                            }
                            dbFlag++;
                            break;
                        case 'modifyArticle':
                            if(para.i > para.imgArr.length - 1) {
                                articleStr = articleStr.replace(/src=""|src=''/ig, '');
                                articleStr = articleStr.replace(/src="[^"]+"/ig, 'src=""');
                                para.i = 0;
                                para.nStep = 'modifyBlog';
                                dbFlag++;
                                break;
                            }

                            // 初始化数据：
                            para.content = null;
                            para.filePath = null;
                            para.thumbnailContent = null;

                            let result = para.imgArr[para.i].match(/src="([^"]+)"/)[1];
                            // 判断是否是上传的图片，是的话获取图片信息
                            for(let i = 0; i < that.imgDataArr.length; i++) {
                                if(that.imgDataArr[i].content.replace(/[^;]+;/, '') === result.replace(/[^;]+;/, '')) {
                                    para.content = that.imgDataArr[i].content;
                                    para.filePath = that.imgDataArr[i].filePath;
                                    para.thumbnailContent = that.imgDataArr[i].thumbnailContent;
                                    break;
                                }
                            }
                            // 由黏贴来的图片：
                            if(!para.filePath) {
                                para.content = '';
                                para.filePath = result;
                                para.thumbnailContent = '';
                            }

                            para.nStep = 'writeFile';
                            dbFlag++;
                            break;
                        case 'writeFile':
                            tableName = that.mac.tb.userBlog;
                            fieldName = that.mac.fd.userBlog.picture;
                            that.sys.api.writeFile(tableName, fieldName, blogId, para.filePath, para.content, function (result) {
                                para.nStep = 'writeCompressFile';
                                if (++dbFlag === 2) {
                                    that.articlePublish(saveType, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'writeCompressFile':
                            tableName = that.mac.tb.userBlog;
                            fieldName = that.mac.fd.userBlog.thumbnail;
                            that.sys.api.writeFile(tableName, fieldName, blogId, para.filePath, para.thumbnailContent, function (result) {
                                para.i++;
                                para.nStep = 'modifyArticle';
                                if (++dbFlag === 2) {
                                    that.articlePublish(saveType, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'modifyBlog':
                            tableName = this.mac.tb.userBlog;
                            let abstract;
                            if(articleText.length > 70) {
                                abstract = articleText.substr(0, 70) + '...';
                            } else {
                                abstract = articleText.substr(0, 70);
                            }
                            let data = {};
                            if(that.para.blogId) {
                                data[this.mac.fd.id] = [that.para.blogId];
                            } else {
                                data[this.mac.fd.id] = [that.newBlogId];
                            }
                            data[this.mac.fd.userBlog.name] = [this.titleValue];
                            data[this.mac.fd.userBlog.abstract] = [abstract];
                            data[this.mac.fd.userBlog.details] = [articleStr];
                            data[this.mac.fd.userBlog.praiseNumber] = [0];
                            data[this.mac.fd.userBlog.favoriteNumber] = [0];
                            data[this.mac.fd.userBlog.commentNumber] = [0];
                            data[this.mac.fd.userBlog.openRange] = [this.limitChecked];
                            data[this.mac.fd.userBlog.closeComment] = [this.closeCommentChecked];
                            data[this.mac.fd.userBlog.labelNumber] = [this.sortCheckedArr];
                            that.sys.api.recordModify(tableName, data, function () {
                                para.nStep = 'dataOutput';
                                if (++dbFlag === 2) {
                                    that.articlePublish(saveType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'dataOutput':
                            let inputId;
                            if(that.para.blogId) {
                                inputId = that.para.blogId;
                            } else {
                                inputId = that.newBlogId;
                            }
                            tableName = this.mac.tb.userBlog;
                            that.sys.api.dataOutput(tableName, [inputId], '', function (result) {
                                let status;
                                if(saveType === 'draft') {
                                    status = that.mac.enum.userBlog.status.draft  // 草稿状态
                                } else if(saveType === 'publish') {
                                    status = that.mac.enum.userBlog.status.release  // 发布状态
                                }
                                let blogData = {
                                    blogID: result[0],
                                    status: status,
                                    publicLabelNumber: [1,2]
                                };
                                that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.newBlog, blogData], function () {
                                    para.nStep = 'modifyLabel';
                                    if (++dbFlag === 2) {
                                        that.articlePublish(saveType, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                    that.$message.warning('出错了！请稍后再试。');
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.articlePublish(saveType, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'modifyLabel':
                            tableName = this.mac.tb.userBlogLabel;
                            dbData = {};
                            dbData[this.mac.fd.id] = [that.curLabelId];
                            dbData[this.mac.fd.userBlogLabel.name] = [that.labelDataArr];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                para.nStep = 'labelDataOutput';
                                if (++dbFlag === 2) {
                                    that.articlePublish(saveType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'labelDataOutput':
                            tableName = this.mac.tb.userBlogLabel;
                            that.sys.api.dataOutput(tableName, [that.curLabelId], '', function (result) {
                                that.callModuleEventPort('publishEnd', [result[0]], function () {
                                    document.querySelector('.text-editor-wrap .publish-content').innerHTML = '';
                                    that.titleValue = '';
                                    that.$message.success('文章发表成功！');
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.articlePublish(saveType, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                    that.$message.warning('出错了！请稍后再试。');
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.articlePublish(saveType, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'end':
                            that.publishBtn = '发布';
                            that.draftBtn = '保存草稿';
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            getImgDataArr: function(imgData) {
                this.imgDataArr.push(imgData);
            },

            titleBlur: function(value) {
                this.titleValue = value;
            },

            modifyLabel: function (index, labelName) {
                let that = this;

                // 标签名不能为空
                if(labelName.search(/[^\s]/ig) === -1) {
                    this.$refs.checkboxRef.para.tabData[0].$arrValue[index].val = this.labelDataArr[index].val;
                    that.$message.warning('标签名不能为空！');
                    return
                }
                // 标签名不能重复
                for(let i = 0; i < this.labelDataArr.length; i++) {
                    if(this.labelDataArr[i].val === labelName) {
                        this.$refs.checkboxRef.para.tabData[0].$arrValue[index].val = this.labelDataArr[index].val;
                        that.$message.warning('标签名不能重复！');
                        return
                    }
                }
                // that.labelData[index].val = labelName;
                that.labelDataArr[index].val = labelName;
            },

            newLabel: function (index, labelName) {
                let that = this;

                if(labelName.search(/[^\s]/ig) === -1) {
                    this.$refs.checkboxRef.para.tabData[0].$arrValue.splice(index,1);
                    that.$message.warning('标签名不能为空！');
                    return
                }
                for(let i = 0; i < this.labelData.length; i++) {
                    if(this.labelData[i].val === labelName) {
                        this.$refs.checkboxRef.para.tabData[0].$arrValue.splice(index,1);
                        that.$message.warning('标签名不能重复！');
                        return
                    }
                }
                // 判断是否有空的格：
                for(let i = 0; i < that.labelDataArr.length; i++) {
                    if(that.labelDataArr[i].val === '') {
                        that.labelDataArr[i].val = labelName;
                        that.labelData[i].val = labelName;
                        return;
                    }
                }
                that.labelData.push({val:labelName, icon:''});
                that.labelDataArr.push({val:labelName, icon:''});
            },

            deleteLabel: function (index, callBack) {
                let that = this;
                let labelValue = {
                    number: index
                };

                // 判断删除的标签是否是新增的标签：
                if (index >= that.labelDataClone.length) {
                    callBack(true);
                    that.labelData.splice(index, 1);
                    that.labelDataArr.splice(index, 1);
                    return;
                }

                // 判断该标签是否被使用：
                that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.getLabelState, labelValue], function (result) {
                    if (result === 1) {
                        that.$message.warning('该标签已被使用！');
                        callBack(false);
                    } else {
                        callBack(true);
                        that.labelData[index].val = '';
                        that.labelDataArr[index].val = '';
                    }
                }, function () {
                    that.$message.warning('出错了！请稍后再试。');
                });
            },

            limitCheck: function(value) {
                this.limitChecked = value;
            },
            closeComment: function(value) {
                this.closeCommentChecked = value;
            },

            // 事件：
            activityRef_itemClickEvent: function (ref, id, name) {
                this.callModuleEventPort('activityClickEvent', [id, name]);
            },
            applyRef_itemClickEvent: function (ref, id, name) {
                this.callModuleEventPort('activityClickEvent', [id, name]);
            },
            titleRef_inputBlurEvent: function (ref, value) {
                this.titleBlur(value);
            },
            checkboxRef_dataModifyEvent: function (ref, index) {
                this.modifyLabel(index, this.$refs.checkboxRef.para.tabData[0].$arrValue[index].val);
            },
            checkboxRef_newEvent: function (ref, index) {
                this.newLabel(index-1, this.$refs.checkboxRef.para.tabData[0].$arrValue[index - 1].val);
            },
            checkboxRef_clickEvent: function (ref, indexArr) {
                this.sortCheckedArr = indexArr;
                // this.modifyLabel(this.$refs.checkboxRef.para.tabData[0].$arrValue[0].val);
            },
            checkboxRef_closeEvent: function (ref, index, result) {
                this.deleteLabel(index, result);
            },
            limitRadioRef_radioClickEvent: function(ref, value) {
                this.limitCheck(value);
            },
            closeCommentRef_radioClickEvent: function(ref, value) {
                this.closeComment(value);
            },
            publishBtnRef_buttonClickEvent: function() {
                let saveType = 'publish';
                this.articlePublish(saveType, function () {
                }, function () {
                });
            },
            draftBtnRef_buttonClickEvent: function() {
                let saveType = 'draft';
                this.articlePublish(saveType, function () {
                }, function () {
                });
            },
            textEditorRef_getImgEvent: function(ref, imgData) {
                this.getImgDataArr(imgData);
            },

            // 公开方法：
            activityRefresh: function (index) {
                this.callSubModuleMethod('activityRef', 'listRefresh', [index]);
            },
            applyRefresh: function (index) {
                this.callSubModuleMethod('applyRef', 'listRefresh', [index]);
            },
        }
    };
</script>
<style lang="scss">
    #article-wrap {
        width: 100%;
        min-height: 100%;
        box-sizing: border-box;
        background-color: #F1F1F2;
        li {
            list-style: none;
        }

        .link-text {
            text-indent: 0 !important;

            &:hover {
                border-bottom: none;
            }
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
            height: 90px;
            z-index: 1000;
            .header-wrap {
                position: fixed;
                left: 0;
                top: 0;
                background-color: #2D2887;
            }
        }

        footer {
            color: #909399;
            background-color: #fff;
            border-top: 1px solid #e5e5e5;
        }

        .link-text {
            text-indent: 0 !important;

            &:hover {
                border-bottom: none;
            }
        }

        .content {
            display: flex;
            padding: 0 14%;
            /*margin: 100px 0;*/
            z-index: 5;
            overflow: hidden;

            .content-left {
                font-family: SourceHanSansCN-Regular;
                flex: 1;
                margin-right: 240px;

                .article-publish-text {
                    margin-bottom: 10px;
                    padding: 20px;
                    background:rgba(255,255,255,1);
                    box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
                    border-radius:4px;
                }

                .publish-content-wrap {
                    box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
                    border-radius:4px;
                    background-color: #fff;
                    margin-bottom: 20px;
                    .title-text {
                        padding: 10px 20px;
                        border-bottom: 1px solid #F5F5F5;
                    }
                    .publish-title {
                        padding: 20px;
                    }
                }

                .text-editor-wrap {
                    box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
                    border-radius:4px;
                    background-color: #fff;
                    margin-bottom: 20px;
                    .article-editor-text {
                        padding: 10px 20px;
                        border-bottom: 1px solid #F5F5F5;
                    }
                    .text-editor {
                        width: 100%;
                        height: 500px;
                        padding: 20px;
                        box-sizing: border-box;
                    }
                }

                .sort-wrap {
                    box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
                    border-radius:4px;
                    background-color: #fff;
                    margin-bottom: 20px;
                    .sort-text-wrap {
                        padding: 10px 20px;
                        border-bottom: 1px solid #F5F5F5;
                        overflow: hidden;
                        .sort-text {
                            float: left;
                        }
                        .tag-manager {
                            float: right;
                        }
                    }
                    .sort-checkbox {
                        padding: 20px;
                    }
                }

                .more-set-wrap {
                    box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
                    border-radius:4px;
                    background-color: #fff;
                    margin-bottom: 20px;
                    .more-set-text {
                        padding: 10px 20px;
                        border-bottom: 1px solid #F5F5F5;
                    }
                    .limit-wrap {
                        padding: 10px 20px;
                        .limit-text {
                            display: inline-block;
                            margin-right: 48px;
                        }
                        .limit-radio {
                            display: inline-block;
                        }
                    }
                    .close-comment-wrap {
                        padding: 10px 20px;
                        .close-comment-text {
                            display: inline-block;
                            margin-right: 20px;
                        }
                        .close-comment {
                            display: inline-block;
                        }
                    }
                    .privacy-set {
                        padding: 10px 20px;
                    }
                }

                .publish-btn {
                    display: inline-block;
                    margin-right: 20px;
                    margin-bottom: 40px;
                }
                .draft-btn {
                    display: inline-block;
                    .lm-button .el-button--text {
                        color: #606266;
                    }
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
            }
        }
    }
</style>