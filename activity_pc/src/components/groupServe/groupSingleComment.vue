<template>
    <!--<div class="comment-component-wrap" v-if="!(!isSelf && hideComment===mac.enum.blogComment.hideComment.yes) && !deleteDeep">-->
    <div class="comment-component-wrap">
        <div class="comment-author-info">
            <div class="author-picture">
                <img src="../../assets/logo.png" width="100%" height="100%" alt="">
                <!--<imageC-->
                <!--:para="pvt_nAuthorImg_para[pvt_currentRef.nAuthorImg].para"-->
                <!--:attr="pvt_nAuthorImg_attr[pvt_currentRef.nAuthorImg].attr"-->
                <!--:refId="pvt_currentRef.nAuthorImg"-->
                <!--:ref="pvt_currentRef.nAuthorImg">-->
                <!--</imageC>-->
            </div>
        </div>
        <div class="comment-content-wrap">
            <div class="author-name">
                <lm-link-text
                        :para="pvt_nAuthorName_para[pvt_currentRef.nAuthorName].para"
                        :attr="pvt_nAuthorName_attr[pvt_currentRef.nAuthorName].attr"
                        :refId="pvt_currentRef.nAuthorName"
                        :ref="pvt_currentRef.nAuthorName">
                </lm-link-text>
            </div>
            <div class="comment-content">
                <span class="comment-reply" v-if="curParentId">
                    <lm-link-text
                            :para="pvt_commentReply_para[pvt_currentRef.commentReply].para"
                            :attr="pvt_commentReply_attr[pvt_currentRef.commentReply].attr"
                            :refId="pvt_currentRef.commentReply"
                            :ref="pvt_currentRef.commentReply">
                    </lm-link-text>
                </span>
                <span class="comment-reply-person" v-if="curParentId">
                    <lm-link-text
                            :para="pvt_replyPerson_para[pvt_currentRef.replyPerson].para"
                            :attr="pvt_replyPerson_attr[pvt_currentRef.replyPerson].attr"
                            :refId="pvt_currentRef.replyPerson"
                            :ref="pvt_currentRef.replyPerson">
                    </lm-link-text>
                </span>
                <span class="comment-reply-colon" v-if="curParentId">
                    <lm-link-text
                            :para="pvt_replyColon_para[pvt_currentRef.replyColon].para"
                            :attr="pvt_replyColon_attr[pvt_currentRef.replyColon].attr"
                            :refId="pvt_currentRef.replyColon"
                            :ref="pvt_currentRef.replyColon">
                    </lm-link-text>
                </span>
                <span class="comment-text">
                    <lm-link-text
                            :para="pvt_commentText_para[pvt_currentRef.commentText].para"
                            :attr="pvt_commentText_attr[pvt_currentRef.commentText].attr"
                            :refId="pvt_currentRef.commentText"
                            :ref="pvt_currentRef.commentText">
                    </lm-link-text>
                </span>
            </div>
            <div class="comment-handle" v-if="isDelete === mac.enum.groupBlogComment.delete.no && !isClose">
                <div class="release-time">
                    <lm-link-text
                            :para="pvt_releaseTime_para[pvt_currentRef.releaseTime].para"
                            :attr="pvt_releaseTime_attr[pvt_currentRef.releaseTime].attr"
                            :refId="pvt_currentRef.releaseTime"
                            :ref="pvt_currentRef.releaseTime">
                    </lm-link-text>
                </div>
                <div class="comment-praise" :class="{'is-praise': isPraise}">
                    <lm-button
                            :para="pvt_aPraise_para[pvt_currentRef.aPraise].para"
                            :attr="pvt_aPraise_attr[pvt_currentRef.aPraise].attr"
                            :refId="pvt_currentRef.aPraise"
                            :ref="pvt_currentRef.aPraise">
                    </lm-button>
                </div>
                <div class="comment-comment" :class="{'show-input': showInput && !inputDisabled}">
                    <lm-button
                            :para="pvt_aComment_para[pvt_currentRef.aComment].para"
                            :attr="pvt_aComment_attr[pvt_currentRef.aComment].attr"
                            :refId="pvt_currentRef.aComment"
                            :ref="pvt_currentRef.aComment">
                    </lm-button>
                </div>
                <div class="delete-comment" ref="deleteBtn">
                    <lm-button
                            v-show="pvt_isShow.deleteComment"
                            :para="pvt_deleteComment_para[pvt_currentRef.deleteComment].para"
                            :attr="pvt_deleteComment_attr[pvt_currentRef.deleteComment].attr"
                            :refId="pvt_currentRef.deleteComment"
                            :ref="pvt_currentRef.deleteComment">
                    </lm-button>
                </div>
                <div class="close-comment" ref="closeBtn">
                    <lm-button
                            v-show="pvt_isShow.closeComment"
                            :para="pvt_closeComment_para[pvt_currentRef.closeComment].para"
                            :attr="pvt_closeComment_attr[pvt_currentRef.closeComment].attr"
                            :refId="pvt_currentRef.closeComment"
                            :ref="pvt_currentRef.closeComment">
                    </lm-button>
                </div>
                <!--<div class="close-comment-pop">-->
                    <!--<lm-popover-->
                            <!--:para="pvt_closePop_para[pvt_currentRef.closePop].para"-->
                            <!--:attr="pvt_closePop_attr[pvt_currentRef.closePop].attr"-->
                            <!--:refId="pvt_currentRef.closePop"-->
                            <!--:ref="pvt_currentRef.closePop">-->
                    <!--</lm-popover>-->
                <!--</div>-->
                <!--<div class="delete-comment-pop">-->
                    <!--<lm-popover-->
                            <!--:para="pvt_deletePop_para[pvt_currentRef.deletePop].para"-->
                            <!--:attr="pvt_deletePop_attr[pvt_currentRef.deletePop].attr"-->
                            <!--:refId="pvt_currentRef.deletePop"-->
                            <!--:ref="pvt_currentRef.deletePop">-->
                    <!--</lm-popover>-->
                <!--</div>-->
            </div>
            <div class="comment-publish" v-if="isDelete === mac.enum.groupBlogComment.delete.no && !isClose" v-show="showInput && !inputDisabled">
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
                <div class="cancel-btn">
                    <lm-button
                            :para="pvt_cancelBtn_para[pvt_currentRef.cancelBtn].para"
                            :attr="pvt_cancelBtn_attr[pvt_currentRef.cancelBtn].attr"
                            :refId="pvt_currentRef.cancelBtn"
                            :ref="pvt_currentRef.cancelBtn">
                    </lm-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import imageC from '@/components/baseComponent/imageComponent.vue';

    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {imageC},
        data: function () {
            return {
                mac: mac.mac,

                myType: 1,
                mySite: '',
                myID: 1,

                hideComment: 0,
                releaseTime: '',
                praiseNum: '点赞',
                isPraise: false,
                isComment: false,
                isSelf: false,
                isCloseStr: '',
                parentCommentName: '',
                commentValue: '',
                isDelete: 0,

                curParentId: null,
                terCommentId: null,
                observerId: null,
                curBlogId: null,
                terBlogId: null,
                curUserInfoId: null,
                deleteDeep: false,
                commentText: '',
                commentColor: '',
                isClose: false,
                groupID: '',
                isGroupMember: false,

                closeBtn: '',
                deleteBtn: '',
                commentDelBtn: '删除',

                showInput: false,
                sameObserver: false,
                publishDisabled: false,
                inputDisabled: false,
                commentPublishBtn: '回复',

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['nAuthorImg', 'nAuthorName', 'releaseTime', 'commentReply', 'commentText', 'closeComment', 'aComment', 'aPraise', 'closePop', 'commentInput', 'publishBtn', 'cancelBtn', 'deleteComment', 'deletePop', 'replyColon', 'replyPerson'],
                    ref: ['nAuthorImgRef', 'nAuthorNameRef', 'releaseTimeRef', 'commentReplyRef', 'commentTextRef', 'closeCommentRef', 'aCommentRef', 'aPraiseRef', 'closePopRef', 'commentInputRef', 'publishBtnRef', 'cancelBtnRef', 'deleteCommentRef', 'deletePopRef', 'replyColonRef', 'replyPersonRef']
                },

                pvt_currentRef: {
                    nAuthorImg: 'nAuthorImgRef',
                    nAuthorName: 'nAuthorNameRef',

                    commentReply: 'commentReplyRef',
                    commentText: 'commentTextRef',

                    closeComment: 'closeCommentRef',
                    aComment: 'aCommentRef',
                    aPraise: 'aPraiseRef',
                    releaseTime: 'releaseTimeRef',
                    closePop: 'closePopRef',

                    commentInput: 'commentInputRef',
                    publishBtn: 'publishBtnRef',
                    cancelBtn: 'cancelBtnRef',
                    deleteComment: 'deleteCommentRef',
                    deletePop: 'deletePopRef',
                    replyColon: 'replyColonRef',
                    replyPerson: 'replyPersonRef',
                },

                pvt_isShow: {
                    nAuthorImg: true,
                    nAuthorName: true,
                    releaseTime: true,
                    commentReply: true,
                    commentText: true,
                    closeComment: false,
                    closePop: true,
                    publishBtn: true,
                    aComment: true,
                    aPraise: true,
                    commentInput: true,
                    cancelBtn: true,
                    deletePop: true,
                    deleteComment: false,
                    replyPerson: true,
                    replyColon: true,
                },
                pvt_isMounted: {
                    nAuthorImgRef: false,
                    nAuthorNameRef: false,
                    releaseTimeRef: false,
                    commentReplyRef: false,
                    commentTextRef: false,
                    closeCommentRef: false,
                    closePopRef: false,
                    publishBtnRef: false,
                    aCommentRef: false,
                    aPraiseRef: false,
                    commentInputRef: false,
                    cancelBtnRef: false,
                    deletePopRef: false,
                    deleteCommentRef: false,
                    replyPersonRef: false,
                    replyColonRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_nAuthorImg_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.nAuthorImg,
                    isShow: this.pvt_isShow.nAuthorImg,
                    nAuthorImgRef: {
                        componentName: 'imageC',
                    },
                }
            },
            pvt_nAuthorImg_para: function () {
                return {
                    nAuthorImgRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_nAuthorImg_comp.isShow,
                            $isMounted: this.pvt_isMounted.nAuthorImgRef,
                            image: {
                                $table: {'groupBlogComment': ['head_portrait']},
                                $value: [this.para.curCommentId]
                            },
                        },
                    },
                };
            },
            pvt_nAuthorImg_attr: function () {
                return {
                    nAuthorImgRef: {
                        attr: {
                            size: 'min',
                        },
                    },
                };
            },

            pvt_nAuthorName_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.nAuthorName,
                    isShow: this.pvt_isShow.nAuthorName,
                    nAuthorNameRef: {
                        componentName: 'radioC',
                    },
                }
            },
            pvt_nAuthorName_para: function () {
                return {
                    nAuthorNameRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_nAuthorName_comp.isShow,
                            $isMounted: this.pvt_isMounted.nAuthorNameRef,
                            textData: {
                                $table: {'groupBlogComment': ['name']},
                                $value: [this.para.curCommentId]
                                // $table: {},
                                // $value: ['长刺']
                            },
                        },
                    },
                };
            },
            pvt_nAuthorName_attr: function () {
                return {
                    nAuthorNameRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            isClick: true,
                            fontWeight: true
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

            pvt_commentReply_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.commentReply,
                    isShow: this.pvt_isShow.commentReply,
                    commentReplyRef: {
                        componentName: 'headC',
                    },
                }
            },
            pvt_commentReply_para: function () {
                return {
                    commentReplyRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_commentReply_comp.isShow,
                            $isMounted: this.pvt_isMounted.commentReplyRef,
                            textData: {
                                $table: '',
                                $value: ['回复 ']
                            },
                        },
                    },
                };
            },
            pvt_commentReply_attr: function () {
                return {
                    commentReplyRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                        },
                    },
                };
            },

            pvt_replyPerson_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.replyPerson,
                    isShow: this.pvt_isShow.replyPerson,
                    replyPersonRef: {
                        componentName: 'headC',
                    },
                }
            },
            pvt_replyPerson_para: function () {
                return {
                    replyPersonRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_replyPerson_comp.isShow,
                            $isMounted: this.pvt_isMounted.replyPersonRef,
                            textData: {
                                $table: '',
                                $value: [this.parentCommentName]
                            },
                        },
                    },
                };
            },
            pvt_replyPerson_attr: function () {
                return {
                    replyPersonRef: {
                        attr: {
                            fontSize: '14px',
                            isClick: true,
                            color: '#303133',
                            fontWeight: true
                        },
                    },
                };
            },

            pvt_replyColon_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.replyColon,
                    isShow: this.pvt_isShow.replyColon,
                    replyColonRef: {
                        componentName: 'headC',
                    },
                }
            },
            pvt_replyColon_para: function () {
                return {
                    replyColonRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_replyColon_comp.isShow,
                            $isMounted: this.pvt_isMounted.replyColonRef,
                            textData: {
                                $table: '',
                                $value: ['：']
                            },
                        },
                    },
                };
            },
            pvt_replyColon_attr: function () {
                return {
                    replyColonRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                        },
                    },
                };
            },

            pvt_commentText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.commentText,
                    isShow: this.pvt_isShow.commentText,
                    commentTextRef: {
                        componentName: 'footC',
                    },
                }
            },
            pvt_commentText_para: function () {
                return {
                    commentTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_commentText_comp.isShow,
                            $isMounted: this.pvt_isMounted.commentTextRef,
                            textData: {
                                $table: {},
                                $value: [this.commentText]
                            },
                        },
                    },
                };
            },
            pvt_commentText_attr: function () {
                return {
                    commentTextRef: {
                        attr: {
                            fontSize: '14px',
                            color: this.commentColor,
                        },
                    },
                };
            },

            pvt_aComment_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.aComment,
                    isShow: this.pvt_isShow.aComment,
                    aCommentRef: {
                        componentName: 'inputC',
                    },
                }
            },
            pvt_aComment_para: function () {
                return {
                    aCommentRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_aComment_comp.isShow,
                            $isMounted: this.pvt_isMounted.aCommentRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                // $arrValue: [33, 'el-icon-chat-round']
                                $arrValue: ['回复', 'el-icon-chat-round']
                            }],
                        },
                    },
                };
            },
            pvt_aComment_attr: function () {
                return {
                    aCommentRef: {
                        attr: {
                            type: 'text',
                            size: 'mini',
                            disabled: this.inputDisabled
                        },
                    },
                };
            },

            pvt_closeComment_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.closeComment,
                    isShow: this.pvt_isShow.closeComment,
                    closeCommentRef: {
                        componentName: 'inputC',
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
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: [this.isCloseStr, 'el-icon-more']
                                // $arrValue: ['已屏蔽', 'el-icon-more']
                            }],
                        },
                    },
                };
            },
            pvt_closeComment_attr: function () {
                return {
                    closeCommentRef: {
                        attr: {
                            type: 'text',
                            size: 'mini',
                        },
                    },
                };
            },

            pvt_deleteComment_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.deleteComment,
                    isShow: this.pvt_isShow.deleteComment,
                    deleteCommentRef: {
                        componentName: 'inputC',
                    },
                }
            },
            pvt_deleteComment_para: function () {
                return {
                    deleteCommentRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_deleteComment_comp.isShow,
                            $isMounted: this.pvt_isMounted.deleteCommentRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: [this.commentDelBtn, 'el-icon-delete']
                                // $arrValue: ['', 'el-icon-more']
                            }],
                        },
                    },
                };
            },
            pvt_deleteComment_attr: function () {
                return {
                    deleteCommentRef: {
                        attr: {
                            type: 'text',
                            size: 'mini',
                        },
                    },
                };
            },

            pvt_aPraise_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.aPraise,
                    isShow: this.pvt_isShow.aPraise,
                    aPraiseRef: {
                        componentName: 'pictureUploadC',
                    },
                }
            },
            pvt_aPraise_para: function () {
                return {
                    aPraiseRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_aPraise_comp.isShow,
                            $isMounted: this.pvt_isMounted.aPraiseRef,
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
            pvt_aPraise_attr: function () {
                return {
                    aPraiseRef: {
                        attr: {
                            type: 'text',
                            size: 'mini'
                        },
                    },
                };
            },

            pvt_cancelBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.cancelBtn,
                    isShow: this.pvt_isShow.cancelBtn,
                    cancelBtnRef: {
                        componentName: 'checkboxC',
                    },
                }
            },
            pvt_cancelBtn_para: function () {
                return {
                    cancelBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_cancelBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.cancelBtnRef,
                            iconIsRight: true,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: ['取消', '']
                            }],
                        },
                    },
                };
            },
            pvt_cancelBtn_attr: function () {
                return {
                    cancelBtnRef: {
                        attr: {
                            type: 'info',
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
                                $arrValue: [this.commentPublishBtn, '']
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
                            disabled: this.publishDisabled,
                            size: 'mini'
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
                            // placeholder: '说点什么吧...',
                            // disabled: this.inputDisabled
                            size: 'mini'
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
                            balloon: {$table: '', $value: ['', '是否屏蔽该评论']},
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
                            reference: this.closeBtn,
                            okText: '是',
                            cancelText: '否',
                        },
                    },
                };
            },

            pvt_deletePop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.deletePop,
                    isShow: this.pvt_isShow.deletePop,
                    deletePopRef: {
                        componentName: 'checkboxC',
                    },
                }
            },
            pvt_deletePop_para: function () {
                return {
                    deletePopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_deletePop_comp.isShow,
                            $isMounted: this.pvt_isMounted.deletePopRef,
                            balloon: {$table: '', $value: ['', '是否删除该评论']},
                        },
                    },
                };
            },
            pvt_deletePop_attr: function () {
                return {
                    deletePopRef: {
                        attr: {
                            confirm: true,
                            placement: 'top',
                            reference: this.deleteBtn,
                            okText: '是',
                            cancelText: '否',
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
                            // setTimeout(function () {
                            //     if ($this.$parent.subModuleActivatedEvent) {
                            //         $this.$parent.subModuleActivatedEvent($this.refId);
                            //     }
                            // }, 0);
                        }, function () {

                        });
                    } else if (oldVal) {
                        // setTimeout(function () {
                        //     if ($this.$parent.subModuleActivatedEvent) {
                        //         $this.$parent.subModuleActivatedEvent($this.refId);
                        //     }
                        // }, 0);
                    }
                },
                deep: true,
                immediate: true
            },
        },
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true;
            }
            // this.closeBtn = this.$refs.closeBtn;
            // this.deleteBtn = this.$refs.deleteBtn;
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
                let tableName;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let record;
                let condition;
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

                            that.observerId = '';
                            that.curBlogId = null;
                            that.terBlogId = null;
                            that.curUserInfoId = null;
                            that.curParentId = null;
                            that.terCommentId = null;

                            that.praiseNum = '点赞';
                            that.isPraise = false;
                            that.isComment = false;
                            that.releaseTime = '';
                            that.hideComment = 0;
                            that.isSelf = false;
                            that.isCloseStr = '';
                            that.parentCommentName = '';
                            that.sameObserver = false;
                            that.publishDisabled = false;
                            that.commentValue = '';
                            that.isClose = false;
                            that.commentText = '';
                            that.commentColor = '#303133';
                            that.isDelete = that.mac.enum.groupBlogComment.delete.no;
                            that.groupID = '';
                            that.isGroupMember = false;
                            that.inputDisabled = this.para.inputDisabled;
                            that.commentDelBtn = '删除';
                            that.commentPublishBtn = '回复';

                            para.nStep = 'getCloudCommentId';
                            dbFlag++;
                            break;
                        case 'getCloudCommentId':
                            tableName = that.mac.tb.groupBlogComment;
                            that.sys.api.getSourceRecord(tableName, [that.para.curCommentId], function (result) {
                                that.terCommentId = result[0];

                                para.nStep = 'getCommentData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'getCommentData':
                            tableName = that.mac.tb.groupBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.id] = [this.para.curCommentId];
                            dbData[that.mac.fd.groupBlogComment.time] = [];
                            dbData[that.mac.fd.groupBlogComment.observer] = [];
                            dbData[that.mac.fd.groupBlogComment.praiseNumber] = [];
                            dbData[that.mac.fd.groupBlogComment.delete] = [];
                            // dbData[that.mac.fd.groupBlogComment.commentNumber] = [];
                            dbData[that.mac.fd.groupBlogComment.hideComment] = [];
                            dbData[that.mac.fd.groupBlogComment.groupBlogID] = [];
                            dbData[that.mac.fd.groupBlogComment.parentID] = [];
                            dbData[that.mac.fd.groupBlogComment.details] = [];
                            dbData[that.mac.fd.groupBlogComment.groupID] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.observerId = dbData[that.mac.fd.groupBlogComment.observer][0];
                                that.hideComment = dbData[that.mac.fd.groupBlogComment.hideComment][0];
                                that.curBlogId = dbData[that.mac.fd.groupBlogComment.groupBlogID][0];
                                that.curParentId = dbData[that.mac.fd.groupBlogComment.parentID][0];
                                that.commentText = dbData[that.mac.fd.groupBlogComment.details][0];
                                that.groupID = dbData[that.mac.fd.groupBlogComment.groupID][0];
                                that.isDelete = dbData[that.mac.fd.groupBlogComment.delete][0];

                                if (dbData[that.mac.fd.groupBlogComment.praiseNumber][0] > 0) {
                                    that.praiseNum = dbData[that.mac.fd.groupBlogComment.praiseNumber][0];
                                }

                                // 判断时间的格式：
                                var time = dbData[that.mac.fd.groupBlogComment.time][0];
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

                                para.nStep = 'getBlogAuthorId';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getBlogAuthorId':
                            tableName = that.mac.tb.groupBlog;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curBlogId];
                            dbData[that.mac.fd.groupBlog.author] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                if(dbData[that.mac.fd.groupBlog.author][0] === that.myId) {
                                    that.isSelf = true;
                                }
                                para.nStep = 'getTerBlogId';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getTerBlogId':
                            tableName = that.mac.tb.groupBlog;
                            that.sys.api.getSourceRecord(tableName, [that.curBlogId], function (result) {
                                that.terBlogId = result[0];
                                if (that.curParentId !== null) {
                                    para.nStep = 'parentCommentName';
                                } else {
                                    para.nStep = 'getCommentPraiseState';
                                }
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'parentCommentName':
                            tableName = that.mac.tb.groupBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curParentId];
                            dbData[that.mac.fd.groupBlogComment.name] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.parentCommentName = dbData[that.mac.fd.groupBlogComment.name][0];
                                para.nStep = 'getCommentPraiseState';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getCommentPraiseState':
                            // 是否评论点赞：
                            let blogData = {
                                userID: this.myId,
                                commentID: this.terCommentId
                            };
                            this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.getCommentPraiseState, blogData], function (result) {
                                if (result === 1) {
                                    that.isPraise = true;
                                }
                                para.nStep = 'inputTerClerkInfo';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'inputTerClerkInfo':
                            expression = that.mac.fd.clerk.user + '=' + that.myId;
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = that.mac.tb.clerk;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    that.isGroupMember = true;
                                }
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'init':
                            if (that.hideComment === that.mac.enum.groupBlogComment.hideComment.yes) {
                                that.isCloseStr = '已屏蔽';
                                if(!that.isSelf) {
                                    that.commentText = '该评论已被屏蔽';
                                    that.commentColor = '#909399';
                                    that.isClose = true;
                                }
                            }
                            // 当该评论发布者的id与当前登录人的id一致时，显示删除按钮：
                            if (that.myId === that.observerId) {
                                that.showModule(['deleteCommentRef'], true, function () {
                                }, function () {
                                });
                            }
                            // 当该博文作者的id与当前登录人的id一致时，显示屏蔽按钮：
                            if(that.isSelf) {
                                that.showModule(['closeCommentRef'], true, function () {
                                }, function () {
                                });
                            }
                            if(that.isDelete === that.mac.enum.groupBlogComment.delete.yes) {
                                that.commentText = '该评论已删除';
                            }

                            para.nStep = 'end';
                            if (++dbFlag === 2) {
                                that.startModule(successCallBack, errorCallBack)
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

            // 云端返回后才点赞：
            // praiseBtnClick: function (successCallBack, errorCallBack) {
            //     let that = this;
            //     let dbFlag;
            //     let dbData;
            //     let tableName;
            //     let record;
            //     let condition;
            //     let para = {
            //         successCallBack: successCallBack,
            //         errorCallBack: errorCallBack,
            //         nStep: 0
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
            //                 if(!that.para.isLogin) {
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
            //                     para.nStep = 'praise';
            //                     dbFlag++;
            //                 }
            //                 break;
            //             case 'praise':
            //                 let commentData = {
            //                     userID: this.myId,
            //                     commentID: this.terCommentId
            //                 };
            //                 if (this.isPraise) {
            //                     this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.deleteCommentPraise, commentData], function () {
            //                         that.praiseNum--;
            //                         if (that.praiseNum <= 0) {
            //                             that.praiseNum = '点赞';
            //                         }
            //                         that.isPraise = false;
            //                         para.nStep = 'dataModify';
            //                         if (++dbFlag === 2) {
            //                             that.praiseBtnClick(successCallBack, errorCallBack)
            //                         }
            //                     }, function () {
            //                         that.$message.warning('出错了！请稍后再试。');
            //                     });
            //                 } else {
            //                     this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.newCommentPraise, commentData], function () {
            //                         if (that.praiseNum === '点赞') {
            //                             that.praiseNum = 0;
            //                         }
            //                         that.praiseNum++;
            //                         that.isPraise = true;
            //                         para.nStep = 'dataModify';
            //                         if (++dbFlag === 2) {
            //                             that.praiseBtnClick(successCallBack, errorCallBack)
            //                         }
            //                     }, function () {
            //                         that.$message.warning('出错了！请稍后再试。');
            //                     });
            //                 }
            //                 break;
            //             case 'dataModify':
            //                 tableName = that.mac.tb.groupBlogComment;
            //                 dbData = {};
            //                 dbData[that.mac.fd.id] = [that.para.curCommentId];
            //                 if(that.praiseNum === '点赞') {
            //                     dbData[that.mac.fd.groupBlogComment.praiseNumber] = [0];
            //                 } else {
            //                     dbData[that.mac.fd.groupBlogComment.praiseNumber] = [that.praiseNum];
            //                 }
            //                 that.sys.api.recordModify(tableName, dbData, function () {
            //                     para.nStep = 'end';
            //                     if (++dbFlag === 2) {
            //                         that.praiseBtnClick(successCallBack, errorCallBack)
            //                     }
            //                 }, function () {
            //                 });
            //                 break;
            //             case 'end':
            //                 para.successCallBack();
            //                 return
            //         }
            //         if (++dbFlag === 1) {
            //             return
            //         }
            //     }
            // },

            // 前端先显示点赞：
            praiseBtnClick: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
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
                            // 判断当前用户是否登录：
                            if(!that.para.isLogin) {
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
                                para.nStep = 'praise';
                                dbFlag++;
                            }
                            break;
                        case 'praise':
                            let commentData = {
                                userID: this.myId,
                                commentID: this.terCommentId
                            };
                            if (this.isPraise) {
                                that.praiseNum--;
                                if (that.praiseNum <= 0) {
                                    that.praiseNum = '点赞';
                                }
                                that.isPraise = false;
                                this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.deleteCommentPraise, commentData], function () {
                                }, function () {
                                    that.$message.warning('出错了！请稍后再试。');
                                });
                            } else {
                                if (that.praiseNum === '点赞') {
                                    that.praiseNum = 0;
                                }
                                that.praiseNum++;
                                that.isPraise = true;
                                this.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.newCommentPraise, commentData], function () {
                                }, function () {
                                    that.$message.warning('出错了！请稍后再试。');
                                });
                            }

                            para.nStep = 'dataModify';
                            if (++dbFlag === 2) {
                                that.praiseBtnClick(successCallBack, errorCallBack)
                            }
                            break;
                        case 'dataModify':
                            tableName = that.mac.tb.groupBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curCommentId];
                            if(that.praiseNum === '点赞') {
                                dbData[that.mac.fd.groupBlogComment.praiseNumber] = [0];
                            } else {
                                dbData[that.mac.fd.groupBlogComment.praiseNumber] = [that.praiseNum];
                            }
                            that.sys.api.recordModify(tableName, dbData, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.praiseBtnClick(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
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

            commentBlur: function (value) {
                this.commentValue = value;
                if (value && value.search(/[^\s]/ig) !== -1) {
                    this.publishDisabled = false;
                } else {
                    this.publishDisabled = true;
                }
            },
            commentFocus: function () {
                this.publishDisabled = false;
            },

            showCommentInput: function () {
                // 判断当前用户是否登录：
                if(!this.para.isLogin) {
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

                if(this.showInput) {
                    this.showInput = false;
                } else {
                    this.showInput = true;
                    this.callSubModuleMethod('commentInputRef', 'getFocus', []);
                }
            },


            childCommentPublish: function () {
                let that = this;
                let commentValueClone;

                if(this.commentValue === '' || this.commentValue.search(/[^\s]/ig) === -1) {
                    this.publishDisabled = true;
                    that.$message.warning('评论内容不能为空！');
                    return
                }
                if (this.commentValue.length > 128) {
                    that.$message.warning('评论字数不能超过128个字符！');
                    this.publishDisabled = true;
                    return
                }

                that.commentPublishBtn = '回复中...';
                this.publishDisabled = true;
                commentValueClone = that.commentValue;
                that.commentValue = '';

                let commentData = {
                    userID: this.myId,
                    userSite: this.mySite,
                    blogID: this.para.cloudBlogId,
                    commentID: this.terCommentId,
                    details: commentValueClone,
                    groupID: that.groupID,
                };
                if(that.isGroupMember) {
                    commentData.userType = that.mac.userType.member;
                } else {
                    commentData.userType = that.mac.userType.nonmember;
                }
                this.callModuleEventPort('setBlogIn', [this.mac.setBlog.type.newComment, commentData], function (result) {
                    // result返回的是云端的评论id，需要到终端更新这个数据：
                    that.callModuleEventPort('inputNewComment', [result], function (terResult) {
                        that.showInput = false;
                        that.callModuleEventPort('newCommentEvent', [terResult, that.para.curCommentId], function () {
                            that.commentPublishBtn = '回复';
                        }, function () {
                        });
                    }, function () {
                    });
                }, function () {
                    that.commentPublishBtn = '回复';
                    that.$message.warning('出错了！请稍后再试。');
                })
            },

            hideCommentInput: function() {
                this.commentValue = '';
                this.showInput = false;
            },

            // hideCommentEvent: function() {
            //     let that = this;
            //     let commentData = {
            //         commentID: this.terCommentId,
            //     };
            //     if(that.isCloseStr !== '已屏蔽') {
            //         this.callModuleEventPort('setBlogIn', [this.mac.setBlog.type.groupHideComment, commentData], function () {
            //             that.isCloseStr = '已屏蔽';
            //         }, function () {
            //         })
            //     }
            // },
            // showCommentEvent: function() {
            //     let that = this;
            //     let commentData = {
            //         commentID: this.terCommentId,
            //     };
            //     if(that.isCloseStr !== '') {
            //         this.callModuleEventPort('setBlogIn', [this.mac.setBlog.type.groupShowComment, commentData], function () {
            //             that.isCloseStr = '';
            //         }, function () {
            //         })
            //     }
            // },

            closeComment: function(successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
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
                            // 判断当前用户是否登录：
                            if(!that.para.isLogin) {
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
                                para.nStep = 'closeComment';
                                dbFlag++;
                            }
                            break;
                        case 'closeComment':
                            let commentData = {
                                commentID: this.terCommentId,
                            };

                            that.$confirm('是否屏蔽该评论?', '提示', {
                                confirmButtonText: '屏蔽',
                                cancelButtonText: '取消屏蔽',
                                type: 'warning'
                            }).then(() => {
                                if(that.isCloseStr !== '已屏蔽') {
                                    that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.hideComment, commentData], function () {
                                        that.isCloseStr = '已屏蔽';
                                        that.$message({
                                            type: 'success',
                                            message: '屏蔽成功!'
                                        });
                                        para.isHide = that.mac.enum.groupBlogComment.hideComment.yes;
                                        para.nStep = 'dataModify';
                                        if (++dbFlag === 2) {
                                            that.closeComment(successCallBack, errorCallBack)
                                        }
                                    }, function () {
                                        that.$message.warning('出错了！请稍后再试。');
                                    })
                                }

                            }).catch(() => {
                                if(that.isCloseStr !== '') {
                                    that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.showComment, commentData], function () {
                                        that.isCloseStr = '';
                                        that.$message({
                                            type: 'info',
                                            message: '已取消屏蔽'
                                        });
                                        para.isHide = that.mac.enum.groupBlogComment.hideComment.no;
                                        para.nStep = 'dataModify';
                                        if (++dbFlag === 2) {
                                            that.closeComment(successCallBack, errorCallBack)
                                        }
                                    }, function () {
                                        that.$message.warning('出错了！请稍后再试。');
                                    })
                                }
                            });
                            break;
                        case 'dataModify':
                            tableName = that.mac.tb.groupBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curCommentId];
                            dbData[that.mac.fd.groupBlogComment.hideComment] = [para.isHide];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.closeComment(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
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

            deleteCommentWrap: function() {
                // 判断当前用户是否登录：
                if(!this.para.isLogin) {
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

                this.deleteCommentEvent(function () {
                }, function () {
                });
            },
            deleteCommentEvent: function(successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let record;
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
                            let commentData = {
                                commentID: this.terCommentId,
                                userID: this.myId,
                                userSite: this.mySite,
                            };
                            that.$confirm('此操作将删除该评论, 是否继续?', '提示', {
                                confirmButtonText: '删除',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                that.commentDelBtn = '删除中...';
                                that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.deleteComment, commentData], function () {
                                    para.nStep = 'refreshCur';
                                    if (++dbFlag === 2) {
                                        that.deleteCommentEvent(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                    that.commentDelBtn = '删除';
                                    that.$message.warning('出错了！请稍后再试。');
                                });
                            }).catch(() => {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.deleteCommentEvent(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case 'refreshCur':
                            tableName = that.mac.tb.groupBlogComment;
                            dbData= {};
                            dbData[that.mac.fd.id] = [that.para.curCommentId];
                            dbData[that.mac.fd.groupBlogComment.delete] = [that.mac.enum.groupBlogComment.delete.yes];
                            that.sys.api.recordModify(tableName, dbData, function (result) {
                                para.nStep = 'deleteInit';
                                if (++dbFlag === 2) {
                                    that.deleteCommentEvent(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        // case 'refreshTer':
                        //     that.callModuleEventPort('refreshDelComment', [this.terCommentId], function () {
                        //         para.nStep = 'refreshCur';
                        //         if (++dbFlag === 2) {
                        //             that.deleteCommentEvent(successCallBack, errorCallBack);
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        // case 'refreshCur':
                        //     tableName = that.mac.tb.groupBlogComment;
                        //     record = [this.terCommentId];
                        //     that.sys.api.dataInput(tableName, record, '', function (result) {
                        //         para.nStep = 'deleteInit';
                        //         if (++dbFlag === 2) {
                        //             that.deleteCommentEvent(successCallBack, errorCallBack)
                        //         }
                        //     }, function (error) {
                        //         console.error(error);
                        //     });
                        //     break;
                        case 'deleteInit':
                            that.callModuleEventPort('commentDeleteEvent', [that.para.curCommentId], function () {
                                that.commentText = '该评论已删除';
                                that.commentDelBtn = '删除';
                                that.isDelete = that.mac.enum.groupBlogComment.delete.yes;
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.deleteCommentEvent(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
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

            // 事件：
            nAuthorImgRef_clickEvent: function () {

            },

            nAuthorNameRef_textClickEvent: function () {

            },

            aCommentRef_buttonClickEvent: function () {
                this.showCommentInput();
            },
            aPraiseRef_buttonClickEvent: function () {
                this.praiseBtnClick(function () {
                }, function () {
                });
            },
            publishBtnRef_buttonClickEvent: function () {
                this.childCommentPublish();
            },
            cancelBtnRef_buttonClickEvent: function () {
                this.hideCommentInput();
            },
            commentInputRef_dataModifyEvent: function (ref, value) {
                this.commentBlur(value);
            },
            commentInputRef_inputFocusEvent: function () {
                this.commentFocus();
            },
            deleteCommentRef_buttonClickEvent: function () {
                this.deleteCommentWrap();
            },
            closeCommentRef_buttonClickEvent: function () {
                this.closeComment(function () {
                }, function () {
                });
            },
            // closePopRef_enterEvent: function () {
            //     this.hideCommentEvent();
            // },
            // closePopRef_cancelEvent: function () {
            //     this.showCommentEvent();
            // },
            // deletePopRef_enterEvent: function () {
            //     this.deleteCommentWrap();
            // },
        }
    };
</script>
<style lang="scss">
    .comment-component-wrap {
        display: flex;

        .comment-author-info {
            flex: 0 0 48px;
            margin-right: 10px;

            .author-picture {
                width: 48px;
                height: 48px;
                border-radius: 4px;
                overflow: hidden;
            }
        }

        .comment-content-wrap {
            flex: 1;

            .author-name {
                margin-bottom: 6px;
                .comment-text, .comment-reply-person {
                    word-break: break-all;
                }
            }

            .comment-content {
                margin-bottom: 10px;
            }

            .comment-handle {
                overflow: hidden;
                .el-button--text {
                    color: #909399;
                }

                .release-time {
                    float: left;
                }

                .comment-praise, .comment-comment, .close-comment, .delete-comment {
                    float: right;
                    margin-left: 20px;
                }

                .is-praise, .show-input {
                    .el-button--text {
                        color: #12B0FF !important;
                    }
                }
            }

            .comment-publish {
                overflow: hidden;
                margin-top: 10px;
                .comment-input {
                    margin-bottom: 10px;
                }

                .publish-btn, .cancel-btn {
                    float: right;
                }

                .publish-btn {
                    margin-left: 20px;
                }
            }
        }
    }
</style>