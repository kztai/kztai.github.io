<template>
    <div id="blog-detail-wrap" class="screen-change">
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
                <div class="content-exist" v-if="!contentDelete">
                    <div class="blog-content">
                        <div v-if="blogType===mac.enum.userBlog.blogType.article" class="content-title">
                            <div class="title-text">
                                <lm-link-text
                                        :para="pvt_title_para[pvt_currentRef.title].para"
                                        :attr="pvt_title_attr[pvt_currentRef.title].attr"
                                        :refId="pvt_currentRef.title"
                                        :ref="pvt_currentRef.title">
                                </lm-link-text>
                            </div>
                            <div class="title-time">
                                <lm-link-text
                                        :para="pvt_titleTime_para[pvt_currentRef.titleTime].para"
                                        :attr="pvt_titleTime_attr[pvt_currentRef.titleTime].attr"
                                        :refId="pvt_currentRef.titleTime"
                                        :ref="pvt_currentRef.titleTime">
                                </lm-link-text>
                            </div>
                            <div class="blog-sort">
                                <lm-link-text
                                        :para="pvt_blogSort_para[pvt_currentRef.blogSort].para"
                                        :attr="pvt_blogSort_attr[pvt_currentRef.blogSort].attr"
                                        :refId="pvt_currentRef.blogSort"
                                        :ref="pvt_currentRef.blogSort">
                                </lm-link-text>
                            </div>
                        </div>
                        <div class="blog-content-wrap">
                            <div class="content-author-info">
                                <div class="author-img">
                                    <img src="../../assets/logo.png" width="100%" height="100%" alt="">
                                    <!--<lm-image-->
                                            <!--:para="pvt_authorImg_para[pvt_currentRef.authorImg].para"-->
                                            <!--:attr="pvt_authorImg_attr[pvt_currentRef.authorImg].attr"-->
                                            <!--:refId="pvt_currentRef.authorImg"-->
                                            <!--:ref="pvt_currentRef.authorImg">-->
                                    <!--</lm-image>-->
                                </div>
                                <div class="author-name">
                                    <lm-link-text
                                            :para="pvt_authorName_para[pvt_currentRef.authorName].para"
                                            :attr="pvt_authorName_attr[pvt_currentRef.authorName].attr"
                                            :refId="pvt_currentRef.authorName"
                                            :ref="pvt_currentRef.authorName">
                                    </lm-link-text>
                                </div>
                                <div class="release-time">
                                    <lm-link-text
                                            :para="pvt_releaseTime_para[pvt_currentRef.releaseTime].para"
                                            :attr="pvt_releaseTime_attr[pvt_currentRef.releaseTime].attr"
                                            :refId="pvt_currentRef.releaseTime"
                                            :ref="pvt_currentRef.releaseTime">
                                    </lm-link-text>
                                </div>
                                <div class="delete-btn" v-if="isSelf">
                                    <lm-button
                                            :para="pvt_deleteBtn_para[pvt_currentRef.deleteBtn].para"
                                            :attr="pvt_deleteBtn_attr[pvt_currentRef.deleteBtn].attr"
                                            :refId="pvt_currentRef.deleteBtn"
                                            :ref="pvt_currentRef.deleteBtn">
                                    </lm-button>
                                </div>
                                <div class="attention-btn" v-if="!isSelf" :class="{'is-attention': isAttention}">
                                    <lm-button
                                            :para="pvt_attentionBtn_para[pvt_currentRef.attentionBtn].para"
                                            :attr="pvt_attentionBtn_attr[pvt_currentRef.attentionBtn].attr"
                                            :refId="pvt_currentRef.attentionBtn"
                                            :ref="pvt_currentRef.attentionBtn">
                                    </lm-button>
                                </div>
                            </div>
                            <div class="content-text">
                                <div v-html="details" class="content-detail">
                                </div>
                                <div v-if="blogType===mac.enum.userBlog.blogType.post" class="content-picture">
                                    <lm-imgs
                                            :para="pvt_picture_para[pvt_currentRef.picture].para"
                                            :attr="pvt_picture_attr[pvt_currentRef.picture].attr"
                                            :refId="pvt_currentRef.picture"
                                            :ref="pvt_currentRef.picture">
                                    </lm-imgs>
                                </div>
                            </div>
                        </div>
                        <div class="handle-btns">
                            <div class="note-turn">
                                <lm-button
                                        :para="pvt_turn_para[pvt_currentRef.turn].para"
                                        :attr="pvt_turn_attr[pvt_currentRef.turn].attr"
                                        :refId="pvt_currentRef.turn"
                                        :ref="pvt_currentRef.turn">
                                </lm-button>
                            </div>
                            <div class="article-comment">
                                <lm-button
                                        :para="pvt_commentBtn_para[pvt_currentRef.commentBtn].para"
                                        :attr="pvt_commentBtn_attr[pvt_currentRef.commentBtn].attr"
                                        :refId="pvt_currentRef.commentBtn"
                                        :ref="pvt_currentRef.commentBtn">
                                </lm-button>
                            </div>
                            <div class="article-praise" :class="{'is-praise': isPraise}">
                                <lm-button
                                        :para="pvt_praiseBtn_para[pvt_currentRef.praiseBtn].para"
                                        :attr="pvt_praiseBtn_attr[pvt_currentRef.praiseBtn].attr"
                                        :refId="pvt_currentRef.praiseBtn"
                                        :ref="pvt_currentRef.praiseBtn">
                                </lm-button>
                            </div>
                            <div class="favorite-btn" :class="{'is-favorite': isFavorite}">
                                <lm-button
                                        :para="pvt_favoriteBtn_para[pvt_currentRef.favoriteBtn].para"
                                        :attr="pvt_favoriteBtn_attr[pvt_currentRef.favoriteBtn].attr"
                                        :refId="pvt_currentRef.favoriteBtn"
                                        :ref="pvt_currentRef.favoriteBtn">
                                </lm-button>
                            </div>
                            <div ref="moreButton" class="more-btn">
                                <lm-button
                                        :para="pvt_moreBtn_para[pvt_currentRef.moreBtn].para"
                                        :attr="pvt_moreBtn_attr[pvt_currentRef.moreBtn].attr"
                                        :refId="pvt_currentRef.moreBtn"
                                        :ref="pvt_currentRef.moreBtn">
                                </lm-button>
                            </div>
                        </div>
                    </div>
                    <div class="blog-comment" ref="blogComment">
                        <div class="close-comment-pop" v-if="isSelf">
                            <lm-popover
                                    :para="pvt_closePop_para[pvt_currentRef.closePop].para"
                                    :attr="pvt_closePop_attr[pvt_currentRef.closePop].attr"
                                    :refId="pvt_currentRef.closePop"
                                    :ref="pvt_currentRef.closePop">
                            </lm-popover>
                        </div>
                        <div class="blog-comment-publish">
                            <div class="comment-input">
                                <lm-input-text
                                        :para="pvt_commentInput_para[pvt_currentRef.commentInput].para"
                                        :attr="pvt_commentInput_attr[pvt_currentRef.commentInput].attr"
                                        :refId="pvt_currentRef.commentInput"
                                        :ref="pvt_currentRef.commentInput">
                                </lm-input-text>
                            </div>
                            <div class="publish-btn">
                                <lm-button
                                        :para="pvt_publishBtn_para[pvt_currentRef.publishBtn].para"
                                        :attr="pvt_publishBtn_attr[pvt_currentRef.publishBtn].attr"
                                        :refId="pvt_currentRef.publishBtn"
                                        :ref="pvt_currentRef.publishBtn">
                                </lm-button>
                            </div>
                        </div>
                        <div class="comment-empty" v-if="commentValueArr.length===0">
                            <lm-link-text
                                    :para="pvt_empty_para[pvt_currentRef.empty].para"
                                    :attr="pvt_empty_attr[pvt_currentRef.empty].attr"
                                    :refId="pvt_currentRef.empty"
                                    :ref="pvt_currentRef.empty">
                            </lm-link-text>
                        </div>
                        <div class="blog-comment-content-list" v-if="commentValueArr.length>0">
                            <div class="blog-comment-content-item"
                                 v-for="(item, index) in pvt_commentGroup_fordata[pvt_currentRef.commentGroup].data"
                                 :key="index">
                                <commentGroup
                                        v-show="pvt_isShow.commentGroup"
                                        :is="pvt_commentGroup_comp[pvt_currentRef.commentGroup].componentName"
                                        :ref="pvt_currentRef.commentGroup"
                                        :refId="pvt_currentRef.commentGroup"
                                        :para="Object.assign({}, pvt_commentGroup_fordata[pvt_currentRef.commentGroup].status, item.para)"
                                        :attr="item.attr">
                                </commentGroup>
                            </div>
                            <div class="comment-onload" v-if="isOnload">
                                <i class="el-icon-loading"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-delete-wrap" ref="contentDelete">
                    <div class="content-delete" v-if="contentDelete">
                        <lm-link-text
                                :para="pvt_deleteText_para[pvt_currentRef.deleteText].para"
                                :attr="pvt_deleteText_attr[pvt_currentRef.deleteText].attr"
                                :refId="pvt_currentRef.deleteText"
                                :ref="pvt_currentRef.deleteText">
                        </lm-link-text>
                    </div>
                </div>
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
    import listC from '@/components/baseComponent/listComponent.vue';
    import textC from '@/components/baseComponent/textComponent.vue';
    import inputC from '@/components/baseComponent/inputComponent.vue';
    import imageC from '@/components/baseComponent/imageComponent.vue';
    import radioC from '@/components/baseComponent/radioComponent.vue';
    import buttonC from '@/components/baseComponent/buttonComponent.vue';
    import pictureUploadC from '@/components/baseComponent/pictureUploadComponent.vue';
    import checkboxC from '@/components/baseComponent/checkboxComponent.vue';
    import commentGroup from './commentGroup';
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        props: ['refId', 'para', 'attr', 'terBlogId', 'cloudBlogId', 'btnType', 'favoriteCall'],
        // inject: ['sys'],
        provide: function () {
            return {
                sys: this.sys
            }
        },
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
            commentGroup
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

                isPraise: false,
                isFavorite: false,
                isAttention: false,
                blogType: 0,
                details: '',
                closeComment: 0,
                curBlogId: null,
                curUserInfoId: null,
                releaseTime: '',
                praiseNum: '点赞',
                commentNum: '评论',
                turnNum: '转发',
                favoriteNum: '收藏',
                publishDisabled: true,
                inputDisabled: false,
                commentValue: '',
                moreBtn: '',
                isSelf: true,
                contentDelete: false,
                attentionValue: '+关注',
                isAllComment: false,
                recommendStart: 0,
                inputTotal: 10,
                commentIdArr: [],
                commentValueArr: [],
                treeNum: 0,
                commentDataArr: [],
                isOnload: false,
                isLogin: false,
                commentNumIndex: 1,

                blogPublishBtn: '发表',
                titleTime: '',

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['userInfo', 'foot', 'head', 'activity', 'apply', 'authorImg', 'authorName', 'releaseTime', 'deleteBtn', 'attentionBtn', 'title', 'picture', 'turn', 'commentBtn', 'praiseBtn', 'favoriteBtn', 'moreBtn', 'publishBtn', 'commentInput', 'closePop', 'deleteText', 'commentGroup', 'empty', 'blogSort', 'titleTime'],
                    ref: ['userInfoRef', 'footRef', 'headRef', 'activityRef', 'applyRef', 'authorImgRef', 'authorNameRef', 'releaseTimeRef', 'deleteBtnRef', 'attentionBtnRef', 'titleRef', 'pictureRef', 'turnRef', 'commentBtnRef', 'praiseBtnRef', 'favoriteBtnRef', 'moreBtnRef', 'publishBtnRef', 'commentInputRef', 'closePopRef', 'deleteTextRef', 'commentGroupRef', 'emptyRef', 'blogSortRef', 'titleTimeRef']
                },

                pvt_currentRef: {
                    userInfo: 'userInfoRef',
                    head: 'headRef',
                    foot: 'footRef',
                    activity: 'activityRef',
                    apply: 'applyRef',
                    authorImg: 'authorImgRef',
                    authorName: 'authorNameRef',
                    releaseTime: 'releaseTimeRef',
                    deleteBtn: 'deleteBtnRef',
                    attentionBtn: 'attentionBtnRef',
                    title: 'titleRef',
                    picture: 'pictureRef',
                    turn: 'turnRef',
                    commentBtn: 'commentBtnRef',
                    praiseBtn: 'praiseBtnRef',
                    favoriteBtn: 'favoriteBtnRef',
                    moreBtn: 'moreBtnRef',
                    publishBtn: 'publishBtnRef',
                    commentInput: 'commentInputRef',
                    closePop: 'closePopRef',
                    deleteText: 'deleteTextRef',
                    commentGroup: 'commentGroupRef',
                    empty: 'emptyRef',
                    blogSort: 'blogSortRef',
                    titleTime: 'titleTimeRef',
                },
                pvt_isShow: {
                    userInfo: true,
                    head: true,
                    foot: true,
                    activity: true,
                    apply: true,
                    authorImg: true,
                    authorName: true,
                    releaseTime: true,
                    deleteBtn: true,
                    attentionBtn: true,
                    title: true,
                    picture: true,
                    turn: true,
                    commentBtn: true,
                    praiseBtn: true,
                    favoriteBtn: true,
                    moreBtn: true,
                    publishBtn: true,
                    commentInput: true,
                    closePop: true,
                    deleteText: true,
                    commentGroup: true,
                    empty: true,
                    blogSort: true,
                    titleTime: true,
                },
                pvt_isMounted: {
                    userInfoRef: false,
                    footRef: false,
                    headRef: false,
                    activityRef: false,
                    applyRef: false,
                    authorImgRef: false,
                    authorNameRef: false,
                    releaseTimeRef: false,
                    deleteBtnRef: false,
                    attentionBtnRef: false,
                    titleRef: false,
                    pictureRef: false,
                    turnRef: false,
                    commentBtnRef: false,
                    praiseBtnRef: false,
                    favoriteBtnRef: false,
                    moreBtnRef: false,
                    publishBtnRef: false,
                    commentInputRef: false,
                    closePopRef: false,
                    deleteTextRef: false,
                    commentGroupRef: false,
                    emptyRef: false,
                    titleTimeRef: false,
                    blogSortRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_commentGroup_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.commentGroup,
                    isShow: this.pvt_isShow.commentGroup,
                    commentGroupRef: {componentName: "commentGroup"},
                }
            },
            pvt_commentGroup_fordata: function () {
                return {
                    commentGroupRef: {
                        status: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_commentGroup_comp.isShow,
                            $isMounted: this.pvt_isMounted.commentGroupRef,
                        },
                        data: this.commentValueArr,
                    }
                }
            },

            pvt_empty_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.empty,
                    isShow: this.pvt_isShow.empty,
                    emptyRef: {
                        componentName: 'userInfo',
                    },
                }
            },
            pvt_empty_para: function () {
                return {
                    emptyRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_empty_comp.isShow,
                            $isMounted: this.pvt_isMounted.emptyRef,
                            textData: {
                                $table: {},
                                $value: ['暂无评论...']
                            },
                        },
                    },
                };
            },
            pvt_empty_attr: function () {
                return {
                    emptyRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
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

            pvt_authorImg_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.authorImg,
                    isShow: this.pvt_isShow.authorImg,
                    authorImgRef: {
                        componentName: 'imageC',
                    },
                }
            },
            pvt_authorImg_para: function () {
                return {
                    authorImgRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_authorImg_comp.isShow,
                            $isMounted: this.pvt_isMounted.authorImgRef,
                            image: {
                                $table: {'userInfo': ['head_portrait']},
                                $value: [this.curUserInfoId]
                            },
                        },
                    },
                };
            },
            pvt_authorImg_attr: function () {
                return {
                    authorImgRef: {
                        attr: {
                            size: 'min',
                        },
                    },
                };
            },

            pvt_authorName_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.authorName,
                    isShow: this.pvt_isShow.authorName,
                    authorNameRef: {
                        componentName: 'radioC',
                    },
                }
            },
            pvt_authorName_para: function () {
                return {
                    authorNameRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_authorName_comp.isShow,
                            $isMounted: this.pvt_isMounted.authorNameRef,
                            textData: {
                                $table: {'userInfo': ['name']},
                                $value: [this.curUserInfoId]
                            },
                        },
                    },
                };
            },
            pvt_authorName_attr: function () {
                return {
                    authorNameRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            isClick: true
                        },
                    },
                };
            },

            pvt_releaseTime_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.releaseTime,
                    isShow: this.pvt_isShow.releaseTime,
                    releaseTimeRef: {
                        componentName: 'userInfo',
                    },
                }
            },

            pvt_releaseTime_para: function () {
                return {
                    releaseTimeRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_releaseTime_comp.isShow,
                            $isMounted: this.pvt_isMounted.releaseTimeRef,
                            textData: {
                                $table: {},
                                $value: [this.releaseTime]
                            },
                        },
                    },
                };
            },
            pvt_releaseTime_attr: function () {
                return {
                    releaseTimeRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#909399'
                        },
                    },
                };
            },

            pvt_deleteBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.deleteBtn,
                    isShow: this.pvt_isShow.deleteBtn,
                    deleteBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_deleteBtn_para: function () {
                return {
                    deleteBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_deleteBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.deleteBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: ['删除', 'el-icon-delete'] //表格记录
                            }],
                        },
                    },
                };
            },
            pvt_deleteBtn_attr: function () {
                return {
                    deleteBtnRef: {
                        attr: {
                            size: 'mini'
                        },
                    },
                };
            },

            pvt_attentionBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.attentionBtn,
                    isShow: this.pvt_isShow.attentionBtn,
                    attentionBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_attentionBtn_para: function () {
                return {
                    attentionBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_attentionBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.attentionBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: [this.attentionValue, '']
                            }],
                        },
                    },
                };
            },
            pvt_attentionBtn_attr: function () {
                return {
                    attentionBtnRef: {
                        attr: {
                            size: 'mini'
                        },
                    },
                };
            },

            pvt_picture_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.picture,
                    isShow: this.pvt_isShow.picture,
                    pictureRef: {
                        componentName: 'imageC',
                    },
                }
            },
            pvt_picture_para: function () {
                return {
                    pictureRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_picture_comp.isShow,
                            $isMounted: this.pvt_isMounted.pictureRef,
                            thumbnail: [{
                                $table: 'userBlog',
                                $arrField: ['thumbnail'],
                                $arrValue: [this.curBlogId]
                            }],
                            detail: 'picture',
                        },
                    },
                };
            },
            pvt_picture_attr: function () {
                return {
                    pictureRef: {
                        attr: {
                            size: 'small',
                            showGif: true,
                            showLong: true,
                        },
                    },
                };
            },

            pvt_title_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.title,
                    isShow: this.pvt_isShow.title,
                    titleRef: {
                        componentName: 'radioC',
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
                            textData: {
                                $table: {'userBlog': ['name']},
                                $value: [this.curBlogId]
                            },
                        },
                    },
                };
            },
            pvt_title_attr: function () {
                return {
                    titleRef: {
                        attr: {
                            fontSize: '20px',
                            color: '#303133',
                            fontWeight: true
                        },
                    },
                };
            },

            pvt_titleTime_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.titleTime,
                    isShow: this.pvt_isShow.titleTime,
                    titleTimeRef: {
                        componentName: 'radioC',
                    },
                }
            },
            pvt_titleTime_para: function () {
                return {
                    titleTimeRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_titleTime_comp.isShow,
                            $isMounted: this.pvt_isMounted.titleTimeRef,
                            textData: {
                                $table: '',
                                $value: [this.titleTime]
                            },
                        },
                    },
                };
            },
            pvt_titleTime_attr: function () {
                return {
                    titleTimeRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#909399',
                        },
                    },
                };
            },

            pvt_blogSort_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.blogSort,
                    isShow: this.pvt_isShow.blogSort,
                    blogSortRef: {
                        componentName: 'radioC',
                    },
                }
            },
            pvt_blogSort_para: function () {
                return {
                    blogSortRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_blogSort_comp.isShow,
                            $isMounted: this.pvt_isMounted.blogSortRef,
                            textData: {
                                $table: '',
                                $value: ['大数据 / 科技']
                            },
                        },
                    },
                };
            },
            pvt_blogSort_attr: function () {
                return {
                    blogSortRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#909399',
                        },
                    },
                };
            },

            pvt_commentBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.commentBtn,
                    isShow: this.pvt_isShow.commentBtn,
                    commentBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_commentBtn_para: function () {
                return {
                    commentBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_commentBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.commentBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                // $arrValue: [87, 'el-icon-chat-round']
                                $arrValue: [this.commentNum, 'el-icon-chat-round']
                            }],
                        },
                    },
                };
            },
            pvt_commentBtn_attr: function () {
                return {
                    commentBtnRef: {
                        attr: {
                            type: 'text',
                            size: 'mini'
                        },
                    },
                };
            },


            pvt_praiseBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.praiseBtn,
                    isShow: this.pvt_isShow.praiseBtn,
                    praiseBtnRef: {
                        componentName: 'pictureUploadC',
                    },
                }
            },
            pvt_praiseBtn_para: function () {
                return {
                    praiseBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_praiseBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.praiseBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                // $arrValue: [99, 'el-icon-thumb']
                                $arrValue: [this.praiseNum, 'el-icon-thumb']
                            }],
                        },
                    },
                };
            },
            pvt_praiseBtn_attr: function () {
                return {
                    praiseBtnRef: {
                        attr: {
                            type: 'text',
                            size: 'mini'
                        },
                    },
                };
            },

            pvt_turn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.turn,
                    isShow: this.pvt_isShow.turn,
                    turnRef: {
                        componentName: 'checkboxC',
                    },
                }
            },
            pvt_turn_para: function () {
                return {
                    turnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_turn_comp.isShow,
                            $isMounted: this.pvt_isMounted.turnRef,
                            iconIsRight: true,
                            name: [{
                                $table: '',
                                $arrField: null,
                                // $arrValue: [34, 'el-icon-share']
                                $arrValue: [this.turnNum, 'el-icon-share']
                            }],
                        },
                    },
                };
            },
            pvt_turn_attr: function () {
                return {
                    turnRef: {
                        attr: {
                            type: 'text',
                            size: 'mini'
                        },
                    },
                };
            },


            pvt_favoriteBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.favoriteBtn,
                    isShow: this.pvt_isShow.favoriteBtn,
                    favoriteBtnRef: {
                        componentName: 'pictureUploadC',
                    },
                }
            },
            pvt_favoriteBtn_para: function () {
                return {
                    favoriteBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_favoriteBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.favoriteBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                // $arrValue: [99, 'el-icon-star-off']
                                $arrValue: [this.favoriteNum, 'el-icon-star-off']
                            }],
                        },
                    },
                };
            },
            pvt_favoriteBtn_attr: function () {
                return {
                    favoriteBtnRef: {
                        attr: {
                            type: 'text',
                            size: 'mini',
                            // height: '23px'
                        },
                    },
                };
            },

            pvt_moreBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.moreBtn,
                    isShow: this.pvt_isShow.moreBtn,
                    moreBtnRef: {
                        componentName: 'checkboxC',
                    },
                }
            },
            pvt_moreBtn_para: function () {
                return {
                    moreBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_moreBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.moreBtnRef,
                            iconIsRight: true,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: ['', 'el-icon-more']
                            }],
                        },
                    },
                };
            },
            pvt_moreBtn_attr: function () {
                return {
                    moreBtnRef: {
                        attr: {
                            type: 'text',
                            size: 'mini'
                        },
                    },
                };
            },

            pvt_publishBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.publishBtn,
                    isShow: this.pvt_isShow.publishBtn,
                    publishBtnRef: {
                        componentName: 'checkboxC',
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
                            iconIsRight: true,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: [this.blogPublishBtn, '']
                            }],
                        },
                    },
                };
            },
            pvt_publishBtn_attr: function () {
                return {
                    publishBtnRef: {
                        attr: {
                            type: 'primary',
                            disabled: this.publishDisabled
                        },
                    },
                };
            },

            pvt_commentInput_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.commentInput,
                    isShow: this.pvt_isShow.commentInput,
                    commentInputRef: {
                        componentName: 'checkboxC',
                    },
                }
            },
            pvt_commentInput_para: function () {
                return {
                    commentInputRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_commentInput_comp.isShow,
                            $isMounted: this.pvt_isMounted.commentInputRef,
                            text: {$table: '', $value: [this.commentValue]},
                        },
                    },
                };
            },
            pvt_commentInput_attr: function () {
                return {
                    commentInputRef: {
                        attr: {
                            placeholder: '说点什么吧...',
                            disabled: this.inputDisabled
                        },
                    },
                };
            },

            pvt_closePop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.closePop,
                    isShow: this.pvt_isShow.closePop,
                    closePopRef: {
                        componentName: 'checkboxC',
                    },
                }
            },
            pvt_closePop_para: function () {
                return {
                    closePopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_closePop_comp.isShow,
                            $isMounted: this.pvt_isMounted.closePopRef,
                            balloon: {$table: '', $value: ['', '是否关闭评论功能']},
                        },
                    },
                };
            },
            pvt_closePop_attr: function () {
                return {
                    closePopRef: {
                        attr: {
                            confirm: true,
                            placement: 'top',
                            reference: this.moreBtn,
                            okText: '是',
                            cancelText: '否',
                        },
                    },
                };
            },


            pvt_deleteText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.deleteText,
                    isShow: this.pvt_isShow.deleteText,
                    deleteTextRef: {
                        componentName: 'checkboxC',
                    },
                }
            },
            pvt_deleteText_para: function () {
                return {
                    deleteTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_deleteText_comp.isShow,
                            $isMounted: this.pvt_isMounted.deleteTextRef,
                            textData: {
                                $table: {},
                                $value: ['博文已删除，请点击返回！', '']
                            },
                        },
                    },
                };
            },
            pvt_deleteText_attr: function () {
                return {
                    deleteTextRef: {
                        attr: {
                            isClick: true,
                            color: '#909399'
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
            that.moreBtn = that.$refs.moreButton;
            window.scrollTo(0, 0);
        },
        methods: {
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

            treeRoot: function (commentDataArr, parentIdArr, tableIdArr, deleteArr, hideCommentArr) {
                //验证传参是否正确
                for (let n = 0; n < parentIdArr.length; n++) {
                    if (parentIdArr[n] && !tableIdArr.includes(parentIdArr[n])) {
                        console.log('传入数据不正确');
                        return
                    }
                }
                //循环验证是否拼接完成
                while (tableIdArr.length > 0) {
                    for (let i = 0; i < tableIdArr.length; i++) {
                        if (parentIdArr[i] && parentIdArr[i] !== tableIdArr[i]) {

                            this.treeChildren(commentDataArr, parentIdArr[i], tableIdArr[i], deleteArr[i], hideCommentArr[i]);

                            if (this.treeNum === 1) {
                                tableIdArr.splice(i, 1);
                                parentIdArr.splice(i, 1);
                                deleteArr.splice(i, 1);
                                hideCommentArr.splice(i, 1);
                                this.treeNum = 0;
                                i--
                            }
                        } else {
                            commentDataArr.push({
                                commentId: tableIdArr[i],
                                parentId: '',
                                isDelete: deleteArr[i],
                                isHide: hideCommentArr[i],
                                cloudBlogId: this.cloudBlogId,
                                children: []
                            });
                            tableIdArr.splice(i, 1);
                            parentIdArr.splice(i, 1);
                            deleteArr.splice(i, 1);
                            hideCommentArr.splice(i, 1);
                            i--
                        }
                    }
                }
                this.treeNum = 0
            },

            treeChildren: function (commentDataArr, parentId, id, isDelete, hideComment) {
                if (commentDataArr.length === 0) {
                    return;
                }
                var stack = [];
                stack.push(commentDataArr);
                var checkOne;
                while (stack.length > 0) {
                    checkOne = stack.pop();
                    for (let i = 0; i < checkOne.length; i++) {
                        if (checkOne[i].commentId === parentId) {
                            checkOne[i].children.push({
                                commentId: id,
                                parentId: parentId,
                                isDelete: isDelete,
                                isHide: hideComment,
                                cloudBlogId: this.cloudBlogId,
                            });
                            this.treeNum = 1;
                            return
                        } else if (checkOne[i].children.length > 0) {
                            for (let j = 0; j < checkOne[i].children.length; j++) {
                                if (checkOne[i].children[j].commentId === parentId) {
                                    checkOne[i].children.push({
                                        commentId: id,
                                        parentId: parentId,
                                        isDelete: isDelete,
                                        isHide: hideComment,
                                        cloudBlogId: this.cloudBlogId,
                                    });
                                    this.treeNum = 1;
                                    return
                                }
                            }
                        }
                    }
                }
            },

            pageScroll: function () {
                if (!this.isAllComment) {
                    let that = this;
                    // 滚动条滚动时，距离顶部的距离
                    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    // 可视区的高度
                    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                    // 滚动条的总高度
                    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

                    if (clientHeight !== scrollHeight && scrollTop + clientHeight >= (scrollHeight - 80)) {
                        that.commentNumIndex++;
                        that.isOnload = true;
                        that.isAllComment = true;
                        that.callModuleEventPort('inputCloudComment', [], function () {
                            that.inputComment(function () {
                                that.isOnload = false;
                            }, function () {
                            });
                        }, function () {
                        });
                    }
                }
            },

            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let fieldName;
                let record;
                let blogData;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    filePathArr: []
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
                            // 初始化数据：
                            that.curBlogId = null;
                            that.curUserInfoId = null;
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');
                            // 绑定滑动事件：
                            window.onscroll = function () {
                                that.pageScroll();
                            };

                            that.isPraise = false;
                            that.isFavorite = false;
                            that.isAttention = false;
                            that.blogType = that.mac.enum.userBlog.blogType.post;
                            that.details = '';
                            that.closeComment = that.mac.enum.userBlog.closeComment.no;
                            that.releaseTime = '';
                            that.praiseNum = '点赞';
                            that.commentNum = '评论';
                            that.turnNum = '转发';
                            that.favoriteNum = '收藏';
                            that.publishDisabled = true;
                            that.inputDisabled = false;
                            that.commentValue = '';
                            that.isSelf = true;
                            that.contentDelete = false;
                            that.attentionValue = '+关注';
                            that.isAllComment = false;
                            that.recommendStart = 0;
                            that.commentIdArr = [];
                            that.commentValueArr = [];
                            that.treeNum = 0;
                            that.commentDataArr = [];
                            that.commentNumIndex = 1;
                            that.isLogin = false;

                            that.blogPublishBtn = '发表';
                            that.titleTime = '';

                            // 判断是否登录：
                            if (that.myType === 0) {
                                that.isLogin = true;
                            }

                            para.nStep = 'InputAuthorInfo';
                            dbFlag++;
                            break;
                        case 'InputAuthorInfo':
                            expression = '';
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = that.mac.tb.userInfo;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                that.curUserInfoId = result[0];
                                para.nStep = 'getBlogState';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getBlogState':
                            blogData = {
                                blogID: that.cloudBlogId
                            };
                            this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.getBlogState, blogData], function (result) {
                                if (result === 1) {
                                    that.contentDelete = false;
                                    para.nStep = 'getAuthorInfo';
                                } else {
                                    that.contentDelete = true;
                                    that.isAllComment = true;
                                    // 设置删除界面高度：
                                    let $contentDelete = that.$refs.contentDelete;
                                    let screenHeight = document.documentElement.clientHeight;
                                    $contentDelete.style.height = screenHeight - 190 + 'px';
                                    para.nStep = 'end';
                                }
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'getAuthorInfo':
                            tableName = that.mac.tb.userInfo;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curUserInfoId];
                            dbData[that.mac.fd.userInfo.userID] = [];
                            dbData[that.mac.fd.userInfo.userSite] = [];
                            that.sys.api.recordRead(tableName, dbData, function (result) {
                                // 如果作者id不等于当前登入的用户id：
                                if (dbData[that.mac.fd.userInfo.userID][0] !== that.myId) {
                                    that.isSelf = false;
                                }
                                para.nStep = 'inputBlog';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'inputBlog':
                            tableName = that.mac.tb.userBlog;
                            that.sys.api.dataInput(tableName, [that.terBlogId], '', function (result) {
                                that.curBlogId = result[0];
                                para.nStep = 'getBlogData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'getBlogData':
                            tableName = that.mac.tb.userBlog;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curBlogId];
                            dbData[that.mac.fd.userBlog.blogType] = [];
                            dbData[that.mac.fd.userBlog.details] = [];
                            dbData[that.mac.fd.userBlog.closeComment] = [];
                            dbData[that.mac.fd.userBlog.time] = [];
                            dbData[that.mac.fd.userBlog.praiseNumber] = [];
                            dbData[that.mac.fd.userBlog.commentNumber] = [];
                            dbData[that.mac.fd.userBlog.picture] = [];
                            // dbData[that.mac.fd.groupBlog.labelNumber] = [];

                            that.sys.api.recordRead(tableName, dbData, function (result) {
                                that.blogType = dbData[that.mac.fd.userBlog.blogType][0];
                                para.details = dbData[that.mac.fd.userBlog.details][0];
                                that.closeComment = dbData[that.mac.fd.userBlog.closeComment][0];
                                // that.labelNumber = dbData[that.mac.fd.groupBlog.labelNumber][0];

                                if (dbData[that.mac.fd.userBlog.praiseNumber][0] > 0) {
                                    that.praiseNum = dbData[that.mac.fd.userBlog.praiseNumber][0];
                                }
                                if (dbData[that.mac.fd.userBlog.commentNumber][0] > 0) {
                                    that.commentNum = dbData[that.mac.fd.userBlog.commentNumber][0];
                                }

                                // 获取图片信息的路径：
                                for (let i = 0; i < dbData[that.mac.fd.userBlog.picture][0].length; i++) {
                                    para.filePathArr.push(dbData[that.mac.fd.userBlog.picture][0][i].fileName);
                                }

                                // 判断时间的格式：
                                var time = dbData[that.mac.fd.userBlog.time][0];
                                var dateArr = time.split(' ');
                                var releaseTime = dateArr[1].substr(0, 5);
                                var releaseYear = dateArr[0].split('-')[0];
                                if (releaseYear.indexOf("0") === 0) {
                                    releaseYear = releaseYear.substr(1, 1);
                                }
                                var releaseMonth = dateArr[0].split('-')[1];
                                if (releaseMonth.indexOf("0") === 0) {
                                    releaseMonth = releaseMonth.substr(1, 1);
                                }
                                var releaseDate = dateArr[0].split('-')[2];
                                if (releaseDate.indexOf("0") === 0) {
                                    releaseDate = releaseDate.substr(1, 1);
                                }
                                var curDate = new Date();
                                var day = curDate.getDate();   // 得到这是这个月的第几天
                                var year = curDate.getFullYear();   //得到这是第几年
                                var month = curDate.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1

                                if (releaseYear == year && releaseMonth == month && day == releaseDate) {
                                    that.releaseTime = releaseTime;
                                } else if (releaseYear != year) {
                                    that.releaseTime = releaseYear + '年' + releaseMonth + '月' + releaseDate + '日 ' + releaseTime;
                                } else {
                                    that.releaseTime = releaseMonth + '月' + releaseDate + '日 ' + releaseTime;
                                }

                                // 文章标题部分的时间显示：
                                that.titleTime = that.releaseTime + ' 发布';

                                para.nStep = 'initPicture';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'initPicture':
                            if (para.i > para.filePathArr.length - 1) {
                                that.details = para.details;
                                para.i = 0;
                                para.nStep = 'getHandleState';
                                dbFlag += 1;
                                break;
                            }
                            let filePath = para.filePathArr[para.i];

                            if (filePath === '') {
                                para.i++;
                                para.nStep = 'initPicture';
                                dbFlag += 1;
                                break;
                            }

                            record = that.curBlogId;
                            tableName = that.mac.tb.userBlog;
                            fieldName = that.mac.fd.userBlog.picture;

                            that.sys.api.readFileBase64(tableName, fieldName, record, filePath, function (result) {
                                para.details = para.details.replace('src=""', 'src="' + result + '"');
                                para.i++;
                                para.nStep = 'initPicture';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getHandleState':
                            blogData = {
                                userID: this.myId,
                                blogID: that.cloudBlogId
                            };
                            this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.getHandleState, blogData], function (result) {
                                if (result[0] === 1) {
                                    that.isPraise = true;
                                }
                                if (result[1] === 1) {
                                    that.favoriteNum = '已收藏';
                                    that.isFavorite = true;
                                }

                                if (that.isSelf) {
                                    para.nStep = 'inputComment';
                                } else {
                                    para.nStep = 'isAttention';
                                }

                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'isAttention':
                            blogData = {
                                userSite: this.mySite,
                            };
                            this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.getAttentionState, blogData], function (result) {
                                if (result === 1) {
                                    that.attentionValue = '已关注';
                                    that.isAttention = true;
                                }
                                para.nStep = 'inputComment';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'inputComment':
                            // 是否允许评论：
                            if (that.closeComment === that.mac.enum.userBlog.closeComment.yes) {
                                that.inputDisabled = true;
                            }
                            this.inputComment(function () {
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'init':
                            // 设置右侧列表高度：
                            let screenWidth = document.documentElement.clientWidth;
                            let screenHeight = document.documentElement.clientHeight;
                            let $userInfo = that.$refs.userInfo;
                            let $hotRecommend = that.$refs.hotRecommend;
                            $hotRecommend.style.height = screenHeight - 90 - 80 - 10 - $userInfo.offsetHeight + 'px';

                            // 定位到评论位置：
                            if(that.btnType === 'comment') {
                                that.$nextTick(function () {
                                    let $blogComment = that.$refs.blogComment;
                                    let commentHeight = $blogComment.getBoundingClientRect().top;
                                    window.scrollTo(0, commentHeight-100);
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            } else {
                                para.nStep = 'end';
                                dbFlag++;
                            }
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

            inputComment: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let couldParentId = null;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    curCommentIdArr: [],
                    result: [],
                    rootCommentLength: 0,
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
                            expression = that.mac.fd.userBlogComment.userBlog + '=' + that.terBlogId + '&&' + that.mac.fd.userBlogComment.parentID + '=[' + couldParentId + ']';
                            if (couldParentId === null) {
                                start = that.recommendStart;
                                total = that.inputTotal;
                                // sort = ['id,asc'];
                                sort = ['id,desc'];
                            } else {
                                start = null;
                                total = null;
                                sort = ['id,asc'];
                            }
                            destGeneSite = '';
                            portName = that.mac.tb.userBlogComment;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.result = result;
                                if (result && couldParentId === null) {
                                    para.rootCommentLength = result.length;
                                }
                                para.nStep = 'getParentSourceId';
                                if (++dbFlag === 2) {
                                    that.inputComment(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getParentSourceId':
                            if (para.result) {
                                para.curCommentIdArr = para.curCommentIdArr.concat(para.result);
                                tableName = that.mac.tb.userBlogComment;
                                that.sys.api.getSourceRecord(tableName, para.result, function (result) {
                                    couldParentId = result;
                                    para.nStep = 0;
                                    if (++dbFlag === 2) {
                                        that.inputComment(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                });
                            } else {
                                couldParentId = null;
                                para.nStep = 'getCommentData';
                                if (++dbFlag === 2) {
                                    that.inputComment(successCallBack, errorCallBack);
                                }
                            }
                            break;
                        case 'getCommentData':
                            if (para.curCommentIdArr.length === 0) {
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }
                            let condition = 'id=[' + para.curCommentIdArr + ']';
                            tableName = that.mac.tb.userBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.userBlogComment.parentID] = [];
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.userBlogComment.delete] = [];
                            dbData[that.mac.fd.userBlogComment.hideComment] = [];
                            that.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                that.commentDataArr = [];
                                if (dbData[that.mac.fd.id].length > 0) {
                                    that.treeRoot(that.commentDataArr, dbData[that.mac.fd.userBlogComment.parentID], dbData[that.mac.fd.id], dbData[that.mac.fd.userBlogComment.delete], dbData[that.mac.fd.userBlogComment.hideComment]);
                                }

                                that.joinCommentData(that.commentDataArr, function () {
                                    // 先判断前10条是否下满，如下满再判断根评论是否达到10条，不是需要再下载，直到满10条：
                                    if (para.rootCommentLength < that.inputTotal || that.commentValueArr.length >= 10 * that.commentNumIndex) {
                                        that.recommendStart += that.inputTotal;
                                        para.nStep = 'end';
                                    } else {
                                        couldParentId = null;
                                        para.curCommentIdArr = [];
                                        that.recommendStart += that.inputTotal;
                                        that.inputTotal = 10 * that.commentNumIndex - that.commentValueArr.length;
                                        para.nStep = 0;
                                    }
                                    if (++dbFlag === 2) {
                                        that.inputComment(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'end':
                            if (para.rootCommentLength < that.inputTotal) {
                                that.isAllComment = true;
                            } else {
                                that.isAllComment = false;
                            }
                            that.inputTotal = 10;
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            joinCommentData: function (commentDataArr, successCallBack, errorCallBack) {
                let that = this;

                rootComment:
                    for (let i = 0; i < commentDataArr.length; i++) {
                        // 1 判断根删除的情况下，如果有没删的子，则它也不删，否则彻底删除这个根：
                        if (commentDataArr[i].isDelete === that.mac.enum.userBlogComment.delete.yes) {
                            if (commentDataArr[i].children.length > 0) {
                                for (let j = 0; j < commentDataArr[i].children.length; j++) {
                                    if (commentDataArr[i].children[j].isDelete === that.mac.enum.userBlogComment.delete.no) {
                                        break;
                                    } else if (j === commentDataArr[i].children.length - 1) {
                                        commentDataArr.splice(i, 1);
                                        i--;
                                        continue rootComment;
                                    }
                                }
                            } else {
                                commentDataArr.splice(i, 1);
                                i--;
                                continue;
                            }

                        }
                        // 2 它的子删除的情况下，判断其是否有未删除的子，有则它不删，否则彻底删除它：
                        for (let j = 0; j < commentDataArr[i].children.length; j++) {
                            if (commentDataArr[i].children[j].isDelete === that.mac.enum.userBlogComment.delete.yes) {
                                for (let m = 0; m < commentDataArr[i].children.length; m++) {
                                    if (commentDataArr[i].children[j].commentId === commentDataArr[i].children[m].parentId) {
                                        if (commentDataArr[i].children[m].isDelete === that.mac.enum.userBlogComment.delete.no) {
                                            break;
                                        } else if (m === commentDataArr[i].children.length - 1) {
                                            commentDataArr[i].children.splice(j, 1);
                                            j--;
                                        }
                                    } else if (m === commentDataArr[i].children.length - 1) {
                                        commentDataArr[i].children.splice(j, 1);
                                        j--;
                                    }
                                }
                            }
                        }
                    }

                // 如果作者id不等于当前登入的用户id：
                if (!that.isSelf) {
                    isHide:
                        for (let i = 0; i < commentDataArr.length; i++) {
                            // 1 判断根屏蔽的情况下，如果有没屏蔽的子，则它也不屏蔽，否则彻底屏蔽这个根：
                            if (commentDataArr[i].isHide === that.mac.enum.userBlogComment.hideComment.yes) {
                                if (commentDataArr[i].children.length > 0) {
                                    for (let j = 0; j < commentDataArr[i].children.length; j++) {
                                        if (commentDataArr[i].children[j].isHide === that.mac.enum.userBlogComment.hideComment.no) {
                                            break;
                                        } else if (j === commentDataArr[i].children.length - 1) {
                                            commentDataArr.splice(i, 1);
                                            i--;
                                            continue isHide;
                                        }
                                    }
                                } else {
                                    commentDataArr.splice(i, 1);
                                    i--;
                                    continue;
                                }

                            }
                            // 2 它的子屏蔽的情况下，判断其是否有未屏蔽的子，有则它不屏蔽，否则彻底屏蔽它：
                            for (let j = 0; j < commentDataArr[i].children.length; j++) {
                                if (commentDataArr[i].children[j].isHide === that.mac.enum.userBlogComment.hideComment.yes) {
                                    for (let m = 0; m < commentDataArr[i].children.length; m++) {
                                        if (commentDataArr[i].children[j].commentId === commentDataArr[i].children[m].parentId) {
                                            if (commentDataArr[i].children[m].isHide === that.mac.enum.userBlogComment.hideComment.no) {
                                                break;
                                            } else if (m === commentDataArr[i].children.length - 1) {
                                                commentDataArr[i].children.splice(j, 1);
                                                j--;
                                            }
                                        } else if (m === commentDataArr[i].children.length - 1) {
                                            commentDataArr[i].children.splice(j, 1);
                                            j--;
                                        }
                                    }
                                }
                            }
                        }
                }

                for (let i = 0; i < commentDataArr.length; i++) {
                    that.commentValueArr.push({
                        para: {
                            curCommentValue: commentDataArr[i],
                            isLogin: this.isLogin,
                            inputDisabled: this.inputDisabled
                        },
                        attr: {}
                    });
                }
                successCallBack();
            },

            praiseBtnClick: function () {
                let that = this;

                // 判断当前用户是否登录：
                if (!that.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                    return;
                }

                let blogData = {
                    userID: this.myId,
                    userSite: this.mySite,
                    blogID: this.cloudBlogId,
                };
                // 前端先响应用户操作，再向云端发事件：
                if (this.isPraise) {
                    that.praiseNum--;
                    if (that.praiseNum <= 0) {
                        that.praiseNum = '点赞';
                    }
                    that.isPraise = false;
                    this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.deletePraise, blogData], function () {
                    }, function () {
                        if (that.praiseNum === '点赞') {
                            that.praiseNum = 0;
                        }
                        that.praiseNum++;
                        that.isPraise = true;
                        that.$message.warning('出错了！请稍后再试。');
                    });
                } else {
                    if (that.praiseNum === '点赞') {
                        that.praiseNum = 0;
                    }
                    that.praiseNum++;
                    that.isPraise = true;
                    this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.newPraise, blogData], function () {
                    }, function () {
                        that.praiseNum--;
                        if (that.praiseNum === 0) {
                            that.praiseNum = '点赞';
                        }
                        that.isPraise = false;
                        that.$message.warning('出错了！请稍后再试。');
                    });
                }
            },
            favoriteBtnClick: function () {
                let that = this;

                // 判断当前用户是否登录：
                if (!that.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                    return;
                }

                let blogData = {
                    userID: this.myId,
                    userSite: this.mySite,
                    blogID: this.cloudBlogId,
                };
                if (this.isFavorite) {
                    this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.deleteFavorite, blogData], function () {
                        that.isFavorite = false;
                        that.favoriteNum = '收藏';
                    }, function () {
                        that.$message.warning('出错了！请稍后再试。');
                    });
                } else {
                    this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.newFavorite, blogData], function () {
                        that.isFavorite = true;
                        that.favoriteNum = '已收藏';
                    }, function () {
                        that.$message.warning('出错了！请稍后再试。');
                    });
                }
            },
            attentionBtnClick: function () {
                let that = this;

                // 判断当前用户是否登录：
                if (!this.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                    return;
                }

                let blogData = {
                    userID: this.myId,
                    userSite: this.mySite,
                };
                if (this.isAttention) {
                    this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.deleteAttention, blogData], function () {
                        that.isAttention = false;
                        that.attentionValue = '+关注';
                    }, function () {
                        that.$message.warning('出错了！请稍后再试。');
                    });
                } else {
                    this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.newAttention, blogData], function () {
                        that.isAttention = true;
                        that.attentionValue = '已关注';
                    }, function () {
                        that.$message.warning('出错了！请稍后再试。');
                    });
                }
            },
            commentBtnClick: function () {
                // 判断当前用户是否登录：
                if (!this.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                    return;
                }

                this.callSubModuleMethod('commentInputRef', 'getFocus', []);
            },
            turnBtnClick: function () {
                // 判断当前用户是否登录：
                if (!this.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                    // return;
                }
            },
            commentBlur: function (value) {
                if (value && value.search(/[^\s]/ig) !== -1) {
                    this.publishDisabled = false;
                } else {
                    this.publishDisabled = true;
                }
                this.commentValue = value;
            },
            commentFocus: function () {
                this.publishDisabled = false;
            },

            closeCommentEvent: function () {
                let that = this;

                // 判断当前用户是否登录：
                if (!this.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                    return;
                }

                let blogData = {
                    blogID: this.cloudBlogId,
                };
                this.callModuleEventPort('setBlogIn', [this.mac.setBlog.type.closeComment, blogData], function () {
                    that.inputDisabled = true;
                    if(that.$refs.commentGroupRef) {
                        for(let i = 0; i < that.$refs.commentGroupRef.length; i++) {
                            // that.$refs.commentGroupRef[i].inputDisabled = true;
                            if(that.$refs.commentGroupRef[i].$children) {
                                for(let j = 0; j < that.$refs.commentGroupRef[i].$children.length; j++) {
                                    that.$refs.commentGroupRef[i].$children[j].inputDisabled = true;
                                }
                            }
                        }
                    }
                }, function () {
                    that.$message.warning('出错了！请稍后再试。');
                })
            },
            openCommentEvent: function () {
                let that = this;

                // 判断当前用户是否登录：
                if (!this.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                    return;
                }

                let blogData = {
                    blogID: this.cloudBlogId,
                };
                this.callModuleEventPort('setBlogIn', [this.mac.setBlog.type.openComment, blogData], function () {
                    that.inputDisabled = false;
                    if(that.$refs.commentGroupRef) {
                        for(let i = 0; i < that.$refs.commentGroupRef.length; i++) {
                            // that.$refs.commentGroupRef[i].inputDisabled = false;
                            if(that.$refs.commentGroupRef[i].$children) {
                                for(let j = 0; j < that.$refs.commentGroupRef[i].$children.length; j++) {
                                    that.$refs.commentGroupRef[i].$children[j].inputDisabled = false;
                                }
                            }
                        }
                    }
                }, function () {
                    that.$message.warning('出错了！请稍后再试。');
                })
            },
            deleteTextClick: function () {
                this.callModuleEventPort('backEvent', [this.favoriteCall]);
            },
            deleteBtnClick: function () {
                let that = this;

                // 判断当前用户是否登录：
                if (!this.isLogin) {
                    this.$confirm('您还未登录，请先登录！', '提示', {
                        confirmButtonText: '去登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 成功操作：
                    }).catch(() => {
                        // 失败操作：
                    });
                    return;
                }

                that.$confirm('此操作将删除该博文, 是否继续?', '提示', {
                    confirmButtonText: '删除',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let blogData = {
                        blogID: this.cloudBlogId,
                    };
                    that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.deleteBlog, blogData], function () {
                        that.contentDelete = true;
                        that.isAllComment = true;
                        // 设置删除界面高度：
                        let $contentDelete = that.$refs.contentDelete;
                        let screenHeight = document.documentElement.clientHeight;
                        $contentDelete.style.height = screenHeight - 190 + 'px';

                        that.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }, function (error) {
                        that.$message.warning('出错了！请稍后再试。');
                    });
                }).catch(() => {
                    that.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            // 由云端返回的评论id，到终端下载该评论：
            // commentPublish: function (successCallBack, errorCallBack) {
            //     let that = this;
            //     let dbFlag;
            //     let dbData;
            //     let tableName;
            //     let record;
            //     let portName;
            //     let para = {
            //         successCallBack: successCallBack,
            //         errorCallBack: errorCallBack,
            //         nStep: 0,
            //     };
            //
            //     if (successCallBack !== null) {
            //         errorCallBack = para;
            //         successCallBack = null
            //     }
            //     para = errorCallBack;
            //
            //     while (1) {
            //         dbFlag = 0;
            //         switch (para.nStep) {
            //             case 0:
            //                 // 判断当前用户是否登录：
            //                 if (!that.isLogin) {
            //                     this.$confirm('您还未登录，请先登录！', '提示', {
            //                         confirmButtonText: '去登录',
            //                         cancelButtonText: '取消',
            //                         type: 'warning'
            //                     }).then(() => {
            //                         // 成功操作：
            //                     }).catch(() => {
            //                         // 失败操作：
            //                     });
            //                     para.nStep = 'end';
            //                     dbFlag++;
            //                 } else {
            //                     para.nStep = 'isLegal';
            //                     dbFlag++;
            //                 }
            //                 break;
            //             case 'isLegal':
            //                 if (!this.commentValue || this.commentValue.search(/[^\s]/ig) === -1) {
            //                     that.$message.warning('评论内容不能为空！');
            //                     this.publishDisabled = true;
            //                     para.nStep = 'end';
            //                     dbFlag++;
            //                     break;
            //                 }
            //                 if (this.commentValue.length > 128) {
            //                     that.$message.warning('评论字数不能超过128个字符！');
            //                     this.publishDisabled = true;
            //                     para.nStep = 'end';
            //                     dbFlag++;
            //                     break;
            //                 }
            //
            //                 // 合法的话，发表按钮变为发表中状态：
            //                 that.blogPublishBtn = '发表中...';
            //                 para.nStep = 'newComment';
            //                 dbFlag++;
            //                 break;
            //             case 'newComment':
            //                 let commentData = {
            //                     userID: this.myId,
            //                     userSite: this.mySite,
            //                     blogID: this.cloudBlogId,
            //                     commentID: null,
            //                     details: this.commentValue
            //                 };
            //                 this.callModuleEventPort('setBlogIn', [this.mac.setBlog.type.newComment, commentData], function (result) {
            //                     // result返回的是云端的评论id，需要到终端更新这个id：
            //                     that.callModuleEventPort('inputRefreshComment', [result], function (terResult) {
            //                         para.terNewCommentId = terResult;
            //                         that.commentValue = '';
            //                         that.recommendStart = 0;
            //                         that.commentNumIndex = 1;
            //                         // that.commentValueArr = [];
            //
            //                         if (that.commentNum === '评论') {
            //                             that.commentNum = 0;
            //                         }
            //                         that.commentNum++;
            //
            //                         para.nStep = 'getNewCommentId';
            //                         if (++dbFlag === 2) {
            //                             that.commentPublish(successCallBack, errorCallBack);
            //                         }
            //                     }, function () {
            //                     });
            //                 }, function () {
            //                     that.blogPublishBtn = '发表';
            //                     that.$message.warning('出错了！请稍后再试。');
            //                 });
            //                 break;
            //             case 'getNewCommentId':
            //                 portName = that.mac.tb.userBlogComment;
            //                 record = [para.terNewCommentId];
            //
            //                 that.sys.api.dataInput(portName, record, '', function (result) {
            //                     para.curNewCommentId = result[0];
            //                     para.nStep = 'getNewCommentData';
            //                     if (++dbFlag === 2) {
            //                         that.commentPublish(successCallBack, errorCallBack);
            //                     }
            //                 }, function (error) {
            //                     console.error(error);
            //                 });
            //                 break;
            //             case 'getNewCommentData':
            //                 portName = that.mac.tb.userBlogComment;
            //                 dbData = {};
            //                 dbData[that.mac.fd.id] = [para.curNewCommentId];
            //                 dbData[that.mac.fd.userBlogComment.delete] = [];
            //                 dbData[that.mac.fd.userBlogComment.parentID] = [];
            //                 dbData[that.mac.fd.userBlogComment.hideComment] = [];
            //                 that.sys.api.recordRead(portName, dbData, function (result) {
            //                     that.commentValueArr.unshift({
            //                         para: {
            //                             curCommentValue: {
            //                                 commentId: dbData[that.mac.fd.id][0],
            //                                 parentId: dbData[that.mac.fd.userBlogComment.parentID][0],
            //                                 isDelete: dbData[that.mac.fd.userBlogComment.delete][0],
            //                                 isHide: dbData[that.mac.fd.userBlogComment.hideComment][0],
            //                                 cloudBlogId: that.cloudBlogId,
            //                                 children: []
            //                             },
            //                             isLogin: that.isLogin,
            //                             inputDisabled: that.inputDisabled
            //                         },
            //                         attr: {}
            //                     });
            //
            //                     if (that.commentValueArr.length > 10) {
            //                         // 当评论数大于10条时，置为false：
            //                         that.isAllComment = false;
            //                         // 当评论数大于10条时，将多余的评论数剔除：
            //                         for (let i = 10; i < that.commentValueArr.length; i) {
            //                             that.commentValueArr.pop()
            //                         }
            //
            //                     } else {
            //                         // 当评论数小于等于10条时，置为true：
            //                         that.isAllComment = true;
            //                     }
            //                     para.nStep = 'end';
            //                     if (++dbFlag === 2) {
            //                         that.commentPublish(successCallBack, errorCallBack);
            //                     }
            //                 }, function (error) {
            //                     console.error(error);
            //                 });
            //                 break;
            //             case 'end':
            //                 // 发表结束，发表按钮变为默认状态：
            //                 that.blogPublishBtn = '发表';
            //                 para.successCallBack();
            //                 return
            //         }
            //         if (++dbFlag === 1) {
            //             return
            //         }
            //     }
            // },

            // 在页面数据库新增评论信息：
            commentPublish: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let commentValueClone;
                let record;
                let portName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
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
                            // 判断当前用户是否登录：
                            if (!that.isLogin) {
                                this.$confirm('您还未登录，请先登录！', '提示', {
                                    confirmButtonText: '去登录',
                                    cancelButtonText: '取消',
                                    type: 'warning'
                                }).then(() => {
                                    // 成功操作：
                                }).catch(() => {
                                    // 失败操作：
                                });
                                para.nStep = 'end';
                                dbFlag++;
                            } else {
                                para.nStep = 'isLegal';
                                dbFlag++;
                            }
                            break;
                        case 'isLegal':
                            if (!this.commentValue || this.commentValue.search(/[^\s]/ig) === -1) {
                                that.$message.warning('评论内容不能为空！');
                                this.publishDisabled = true;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }
                            if (this.commentValue.length > 128) {
                                that.$message.warning('评论字数不能超过128个字符！');
                                this.publishDisabled = true;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            // 合法的话，发表按钮变为发表中状态：
                            that.blogPublishBtn = '发表中...';
                            this.publishDisabled = true;
                            commentValueClone = that.commentValue;
                            that.commentValue = '';
                            para.nStep = 'newComment';
                            dbFlag++;
                            break;
                        case 'newComment':
                            let commentData = {
                                userID: this.myId,
                                userSite: this.mySite,
                                blogID: this.cloudBlogId,
                                commentID: null,
                                details: commentValueClone
                            };
                            this.callModuleEventPort('setBlogIn', [this.mac.setBlog.type.newComment, commentData], function (result) {
                                // result返回的是云端的评论id，需要到终端更新这个id：
                                that.callModuleEventPort('inputRefreshComment', [result], function (terResult) {
                                    para.terNewCommentId = terResult;
                                    that.recommendStart = 0;
                                    that.commentNumIndex = 1;
                                    // that.commentValueArr = [];

                                    if (that.commentNum === '评论') {
                                        that.commentNum = 0;
                                    }
                                    that.commentNum++;

                                    para.nStep = 'getNewCommentId';
                                    if (++dbFlag === 2) {
                                        that.commentPublish(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                });
                            }, function () {
                                that.blogPublishBtn = '发表';
                                that.$message.warning('出错了！请稍后再试。');
                            });
                            break;
                        case 'getNewCommentId':
                            portName = that.mac.tb.userBlogComment;
                            record = [para.terNewCommentId];

                            that.sys.api.dataInput(portName, record, '', function (result) {
                                para.curNewCommentId = result[0];
                                para.nStep = 'getNewCommentData';
                                if (++dbFlag === 2) {
                                    that.commentPublish(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getNewCommentData':
                            portName = that.mac.tb.userBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.id] = [para.curNewCommentId];
                            dbData[that.mac.fd.userBlogComment.delete] = [];
                            dbData[that.mac.fd.userBlogComment.parentID] = [];
                            dbData[that.mac.fd.userBlogComment.hideComment] = [];
                            that.sys.api.recordRead(portName, dbData, function (result) {
                                that.commentValueArr.unshift({
                                    para: {
                                        curCommentValue: {
                                            commentId: dbData[that.mac.fd.id][0],
                                            parentId: dbData[that.mac.fd.userBlogComment.parentID][0],
                                            isDelete: dbData[that.mac.fd.userBlogComment.delete][0],
                                            isHide: dbData[that.mac.fd.userBlogComment.hideComment][0],
                                            cloudBlogId: that.cloudBlogId,
                                            children: []
                                        },
                                        isLogin: that.isLogin,
                                        inputDisabled: that.inputDisabled
                                    },
                                    attr: {}
                                });

                                if (that.commentValueArr.length > 10) {
                                    // 当评论数大于10条时，置为false：
                                    that.isAllComment = false;
                                    // 当评论数大于10条时，将多余的评论数剔除：
                                    for (let i = 10; i < that.commentValueArr.length; i) {
                                        that.commentValueArr.pop()
                                    }

                                } else {
                                    // 当评论数小于等于10条时，置为true：
                                    that.isAllComment = true;
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.commentPublish(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'end':
                            // 发表结束，发表按钮变为默认状态：
                            that.blogPublishBtn = '发表';
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            copyChildComment: function (curCommentId, curParentId) {
                let that = this;

                if(that.commentNum === '评论') {
                    that.commentNum = 0;
                }
                that.commentNum++;

                rootComment:
                    for (let i = 0; i < that.commentValueArr.length; i++) {
                        if (that.commentValueArr[i].para.curCommentValue.commentId === curParentId) {
                            that.commentValueArr[i].para.curCommentValue.children.push({
                                commentId: curCommentId,
                                parentId: curParentId,
                                isDelete: that.mac.enum.groupBlogComment.delete.no,
                                isHide: that.mac.enum.groupBlogComment.hideComment.no
                            });
                            break;
                        }
                        for (let j = 0; j < that.commentValueArr[i].para.curCommentValue.children.length; j++) {
                            if (that.commentValueArr[i].para.curCommentValue.children[j].commentId === curParentId) {
                                that.commentValueArr[i].para.curCommentValue.children.push({
                                    commentId: curCommentId,
                                    parentId: curParentId,
                                    isDelete: that.mac.enum.groupBlogComment.delete.no,
                                    isHide: that.mac.enum.groupBlogComment.hideComment.no
                                });
                                break rootComment;
                            }
                        }
                    }
            },

            delRefreshComment: function (curCommentId, deep) {
                let that = this;
                rootComment:
                    for (let i = 0; i < that.commentValueArr.length; i++) {
                        if (that.commentValueArr[i].para.curCommentValue.commentId === curCommentId) {
                            if (deep) {
                                that.commentValueArr.splice(i, 1);
                            } else {
                                that.commentNum--;
                                that.commentValueArr[i].para.curCommentValue.isDelete = that.mac.enum.groupBlogComment.delete.yes;
                            }
                            break;
                        }
                        for (let j = 0; j < that.commentValueArr[i].para.curCommentValue.children.length; j++) {
                            if (that.commentValueArr[i].para.curCommentValue.children[j].commentId === curCommentId) {
                                if (deep) {
                                    that.commentValueArr[i].para.curCommentValue.children.splice(j, 1);
                                } else {
                                    that.commentNum--;
                                    that.commentValueArr[i].para.curCommentValue.children[j].isDelete = that.mac.enum.groupBlogComment.delete.yes;
                                }
                                break rootComment;
                            }
                        }
                    }
                if (that.commentNum === 0) {
                    that.commentNum = '评论';
                }
            },

            // 事件：
            activityRef_itemClickEvent: function (ref, id, name) {
                this.callModuleEventPort('activityClickEvent', [id, name]);
            },
            applyRef_itemClickEvent: function (ref, id, name) {
                this.callModuleEventPort('activityClickEvent', [id, name]);
            },

            deleteBtnRef_buttonClickEvent: function () {
                this.deleteBtnClick();
            },
            attentionBtnRef_buttonClickEvent: function () {
                this.attentionBtnClick();
            },
            turnRef_buttonClickEvent: function () {
                this.turnBtnClick();
            },
            commentBtnRef_buttonClickEvent: function () {
                this.commentBtnClick();
            },
            praiseBtnRef_buttonClickEvent: function () {
                this.praiseBtnClick()
            },
            favoriteBtnRef_buttonClickEvent: function () {
                this.favoriteBtnClick();
            },
            commentInputRef_dataModifyEvent: function (ref, value) {
                this.commentBlur(value);
            },
            commentInputRef_inputFocusEvent: function () {
                this.commentFocus();
            },
            publishBtnRef_buttonClickEvent: function () {
                this.commentPublish(function () {
                }, function () {
                });
            },
            closePopRef_enterEvent: function () {
                this.closeCommentEvent();
            },
            closePopRef_cancelEvent: function () {
                this.openCommentEvent();
            },
            deleteTextRef_textClickEvent: function () {
                this.deleteTextClick();
            },

            commentGroupRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            commentGroupRef_commentDeleteEvent: function (ref, curCommentId, deep) {
                this.delRefreshComment(curCommentId, deep);
            },
            commentGroupRef_copyChildComment: function (ref, curCommentId, curParentId) {
                this.copyChildComment(curCommentId, curParentId);
            },
            commentGroupRef_deleteChildComment: function (ref, curCommentId, deep) {
                this.delRefreshComment(curCommentId, deep);
            },
            commentGroupRef_inputRefreshComment: function (ref, cloudCommentId, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputRefreshComment', [cloudCommentId], successCallBack, errorCallBack);
            },
            commentGroupRef_refreshDelComment: function (ref, terCommentId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshDelComment', [terCommentId], successCallBack, errorCallBack);
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
    .el-popover {
        min-width: auto;
        width: auto;
        max-height: 200px;

        .btns {
            .confirm-btn {
                background-color: initial;
                color: #409EFF;
            }
        }
    }

    #blog-detail-wrap {
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
            display: flex;
            margin: 0 auto;
            /*max-width: 1200px;*/
            padding: 10px 15% 100px 15%;
            z-index: 5;
            overflow: hidden;

            .content-left {
                font-family: SourceHanSansCN-Regular;
                flex: 1;
                margin-right: 240px;

                .link-text {
                    text-indent: 0 !important;

                    &:hover {
                        border-bottom: none;
                    }
                }

                .is-attention {
                    .lm-button .el-button {
                        color: #12B0FF !important;
                        border: 1px solid #12B0FF;

                        &:focus {
                            background-color: #fff;
                        }
                    }
                }

                .content-delete-wrap {
                    .content-delete {
                        height: 100%;
                        padding: 20px;
                        background-color: #fff;
                        box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                        color: #909399;
                        border-radius: 4px;
                        padding-top: 200px;
                        text-align: center;
                        overflow: auto;
                        box-sizing: border-box;
                    }
                }

                .blog-content {
                    padding: 20px 20px 10px 20px;
                    background-color: #fff;
                    box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                    border-radius: 4px;
                    margin-bottom: 10px;

                    .content-title {
                        padding-bottom: 20px;
                        margin-bottom: 20px;
                        border-bottom: 1px solid #F5F5F5;
                        .title-time, .title-text {
                            margin-bottom: 10px;
                        }
                    }

                    .blog-content-wrap {
                        display: flex;

                        .content-author-info {
                            flex: 0 0 90px;
                            margin-right: 40px;

                            .author-img {
                                width: 90px;
                                height: 90px;
                                overflow: hidden;
                                border-radius: 4px;
                            }

                            .author-img, .delete-btn, .author-name, .release-time, .editor-btn, .attention-btn {
                                margin-bottom: 10px;
                            }

                            .lm-button {
                                text-align: left;
                            }
                        }

                        .content-text {
                            position: relative;
                            flex: 1;

                            .content-detail, .content-picture {
                                margin-bottom: 10px;
                            }

                            .content-picture {
                                .lm-imgs-big {
                                    width: 100%;
                                    height: 300px;

                                    .el-image {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }

                                .lm-imgs-display-single {
                                    width: auto;
                                    max-height: 300px;
                                }
                            }

                            .content-detail {
                                font-size: 14px;
                                color: #303133;
                                line-height: 24px;
                            }
                        }
                    }

                    .handle-btns {
                        /*position: absolute;*/
                        /*bottom: 0;*/
                        /*left: 0;*/
                        border-top: 1px solid #f5f7fa;
                        text-align: center;
                        height: 36px;
                        line-height: 36px;
                        display: flex;
                        justify-content: space-between;
                        padding: 6px 0;
                        box-sizing: border-box;

                        .el-button--text {
                            color: #909399;
                        }

                        .is-praise, .is-favorite {
                            .el-button--text {
                                color: #12B0FF !important;
                            }
                        }

                        .lm-button {
                            line-height: 23px;
                        }

                        .note-turn, .favorite-btn, .article-comment, .article-praise, .more-btn {
                            flex: 1;
                            border-right: 1px solid #e5e5e5;
                        }

                        .more-btn {
                            border-right: none;
                        }
                    }
                }

                .blog-comment {
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                    border-radius: 4px;

                    .blog-comment-publish {
                        padding-bottom: 20px;
                        border-bottom: 1px solid #F5F5F5;
                        text-align: right;

                        .comment-input {
                            margin-bottom: 10px;
                        }

                        .publish-btn {
                            .lm-button {
                                text-align: right;
                            }
                        }
                    }

                    .comment-empty {
                        margin-top: 20px;
                    }

                    .blog-comment-content-list {
                        margin-top: 20px;

                        .blog-comment-content-item {
                            padding: 20px 0;
                            border-bottom: 1px solid #f5f5f5;

                            &:last-child {
                                margin-bottom: 0;
                                border-bottom: none;
                            }
                        }

                        .comment-onload {
                            text-align: center;
                            padding: 10px;
                            font-size: 20px;
                            color: #909399;
                        }
                    }
                }
            }

            .content-right {
                position: fixed;
                right: 15%;
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
                        box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);

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