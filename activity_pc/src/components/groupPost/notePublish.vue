<template>
    <div id="group-note-wrap" class="screen-change">
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
            <div class="note-publish-text">
                <lm-link-text
                        :para="pvt_publishText_para[pvt_currentRef.publishText].para"
                        :attr="pvt_publishText_attr[pvt_currentRef.publishText].attr"
                        :refId="pvt_currentRef.publishText"
                        :ref="pvt_currentRef.publishText">
                </lm-link-text>
            </div>
            <div class="publish-content-wrap">
                <div class="write-text">
                    <lm-link-text
                            :para="pvt_writeText_para[pvt_currentRef.writeText].para"
                            :attr="pvt_writeText_attr[pvt_currentRef.writeText].attr"
                            :refId="pvt_currentRef.writeText"
                            :ref="pvt_currentRef.writeText">
                    </lm-link-text>
                </div>
                <div class="note-write">
                    <div class="publish-content" ref="noteInput" :class="{'overTotal': isOverTotal}">
                        <lm-input-text
                                :para="pvt_content_para[pvt_currentRef.content].para"
                                :attr="pvt_content_attr[pvt_currentRef.content].attr"
                                :refId="pvt_currentRef.content"
                                :ref="pvt_currentRef.content">
                        </lm-input-text>
                    </div>
                    <div class="num-total">
                        <lm-link-text
                                :para="pvt_numTotal_para[pvt_currentRef.numTotal].para"
                                :attr="pvt_numTotal_attr[pvt_currentRef.numTotal].attr"
                                :refId="pvt_currentRef.numTotal"
                                :ref="pvt_currentRef.numTotal">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="picture-select-wrap">
                <div class="select-text">
                    <lm-link-text
                            :para="pvt_selectText_para[pvt_currentRef.selectText].para"
                            :attr="pvt_selectText_attr[pvt_currentRef.selectText].attr"
                            :refId="pvt_currentRef.selectText"
                            :ref="pvt_currentRef.selectText">
                    </lm-link-text>
                </div>
                <div class="picture-select">
                    <lm-picture-upload
                            :para="pvt_checkPicture_para[pvt_currentRef.checkPicture].para"
                            :attr="pvt_checkPicture_attr[pvt_currentRef.checkPicture].attr"
                            :refId="pvt_currentRef.checkPicture"
                            :ref="pvt_currentRef.checkPicture">
                    </lm-picture-upload>
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
                        <lm-link-text
                                :para="pvt_limitText_para[pvt_currentRef.limitText].para"
                                :attr="pvt_limitText_attr[pvt_currentRef.limitText].attr"
                                :refId="pvt_currentRef.limitText"
                                :ref="pvt_currentRef.limitText">
                        </lm-link-text>
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
                        <lm-link-text
                                :para="pvt_closeText_para[pvt_currentRef.closeText].para"
                                :attr="pvt_closeText_attr[pvt_currentRef.closeText].attr"
                                :refId="pvt_currentRef.closeText"
                                :ref="pvt_currentRef.closeText">
                        </lm-link-text>
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
            </div>
            <div class="publish-btn">
                <lm-button
                        :para="pvt_publishBtn_para[pvt_currentRef.publishBtn].para"
                        :attr="pvt_publishBtn_attr[pvt_currentRef.publishBtn].attr"
                        :refId="pvt_currentRef.publishBtn"
                        :ref="pvt_currentRef.publishBtn">
                </lm-button>
            </div>
            <div class="draft-btn">
                <lm-button
                        :para="pvt_draftBtn_para[pvt_currentRef.draftBtn].para"
                        :attr="pvt_draftBtn_attr[pvt_currentRef.draftBtn].attr"
                        :refId="pvt_currentRef.draftBtn"
                        :ref="pvt_currentRef.draftBtn">
                </lm-button>
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
                myType: 1,
                mySite: '',
                myID: 1,

                noteValue: '',
                sortCheckedArr: [],
                labelData: [],
                labelDataClone: [],
                labelDataArr: [],
                limitChecked: 0,
                closeCommentChecked: 0,
                newBlogId: null,
                blogId: null,
                publishDisabled: false,
                isOverTotal: false,
                totalStr: '',
                authorName: '',
                authorId: '',
                curLabelId: null,
                publishBtn: '发布',
                draftBtn: '保存草稿',

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['foot', 'head', 'publishText', 'content', 'checkPicture', 'sortText', 'checkbox', 'limitText', 'limitRadio', 'publishBtn', 'closeText', 'closeComment', 'draftBtn', 'writeText', 'numTotal', 'selectText', 'moreText', 'tagManager'],
                    ref: ['footRef', 'headRef', 'publishTextRef', 'contentRef', 'checkPictureRef', 'sortTextRef', 'checkboxRef', 'limitTextRef', 'limitRadioRef', 'publishBtnRef', 'closeTextRef', 'closeCommentRef', 'draftBtnRef', 'writeTextRef', 'numTotalRef', 'selectTextRef', 'moreTextRef', 'tagManagerRef']
                },

                pvt_currentRef: {
                    head: 'headRef',
                    foot: 'footRef',
                    publishText: 'publishTextRef',
                    content: 'contentRef',
                    checkPicture: 'checkPictureRef',
                    sortText: 'sortTextRef',
                    checkbox: 'checkboxRef',
                    limitText: 'limitTextRef',
                    limitRadio: 'limitRadioRef',
                    publishBtn: 'publishBtnRef',
                    closeComment: 'closeCommentRef',
                    closeText: 'closeTextRef',
                    draftBtn: 'draftBtnRef',
                    writeText: 'writeTextRef',
                    numTotal: 'numTotalRef',
                    selectText: 'selectTextRef',
                    moreText: 'moreTextRef',
                    tagManager: 'tagManagerRef',
                },

                pvt_isShow: {
                    head: true,
                    foot: true,
                    publishText: true,
                    content: true,
                    checkPicture: true,
                    sortText: true,
                    checkbox: true,
                    limitText: true,
                    limitRadio: true,
                    publishBtn: true,
                    closeComment: true,
                    closeText: true,
                    draftBtn: true,
                    writeText: true,
                    numTotal: true,
                    selectText: true,
                    moreText: true,
                    tagManager: true,
                },
                pvt_isMounted: {
                    footRef: false,
                    headRef: false,
                    publishTextRef: false,
                    contentRef: false,
                    checkPictureRef: false,
                    sortTextRef: false,
                    checkboxRef: false,
                    limitTextRef: false,
                    limitRadioRef: false,
                    publishBtnRef: false,
                    closeCommentRef: false,
                    closeTextRef: false,
                    draftBtnRef: false,
                    writeTextRef: false,
                    numTotalRef: false,
                    selectTextRef: false,
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

            pvt_selectText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.selectText,
                    isShow: this.pvt_isShow.selectText,
                    selectTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_selectText_para: function () {
                return {
                    selectTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_selectText_comp.isShow,
                            $isMounted: this.pvt_isMounted.selectTextRef,
                            textData: {$table: '', $value: ['上传图片']},
                        },
                    },
                };
            },
            pvt_selectText_attr: function () {
                return {
                    selectTextRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        },
                    },
                };
            },

            pvt_writeText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.writeText,
                    isShow: this.pvt_isShow.writeText,
                    writeTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_writeText_para: function () {
                return {
                    writeTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_writeText_comp.isShow,
                            $isMounted: this.pvt_isMounted.writeTextRef,
                            textData: {$table: '', $value: ['编辑帖子']},
                        },
                    },
                };
            },
            pvt_writeText_attr: function () {
                return {
                    writeTextRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        },
                    },
                };
            },

            pvt_numTotal_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.numTotal,
                    isShow: this.pvt_isShow.numTotal,
                    numTotalRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_numTotal_para: function () {
                return {
                    numTotalRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_numTotal_comp.isShow,
                            $isMounted: this.pvt_isMounted.numTotalRef,
                            textData: {$table: '', $value: [this.totalStr]},
                        },
                    },
                };
            },
            pvt_numTotal_attr: function () {
                return {
                    numTotalRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#C0C4CC'
                        },
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
                            textData: {$table: '', $value: ['是否可被评论']},
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
                            // radioData: [{
                            //     $table: '',
                            //     $arrField: null,
                            //     $arrValue: [0] //表格记录
                            // }],
                            radio: {$table: '', $field: [], $value: [this.closeCommentChecked]},
                            radioArr: {
                                $table: '', $field: [], $value: [
                                    {label: 0, text: "可以"}, {label: 1, text: "不可以"}
                                ]
                            }
                        },
                    },
                };
            },
            pvt_closeComment_attr: function () {
                return {
                    closeCommentRef: {
                        attr: {
                            // radioArr: [{label: 0, text: "可以"}, {label: 1, text: "不可以"}],
                        },
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
                            textData: {$table: '', $value: ['发表帖子']},
                        },
                    },
                };
            },
            pvt_publishText_attr: function () {
                return {
                    publishTextRef: {
                        attr: {
                            fontSize: '16px',
                            color: '#303133'
                        },
                    },
                };
            },

            pvt_content_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.content,
                    isShow: this.pvt_isShow.content,
                    contentRef: {
                        componentName: 'inputC',
                    },
                }
            },
            pvt_content_para: function () {
                return {
                    contentRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_content_comp.isShow,
                            $isMounted: this.pvt_isMounted.contentRef,
                            text: {$table: '', $value: [this.noteValue]},
                        },
                    },
                };
            },
            pvt_content_attr: function () {
                return {
                    contentRef: {
                        attr: {
                            placeholder: '帖子内容...',
                            type: 'textarea',
                            autosize: {minRows: 10, maxRows: 10}
                        },
                    },
                };
            },

            pvt_checkPicture_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.checkPicture,
                    isShow: this.pvt_isShow.checkPicture,
                    checkPictureRef: {
                        componentName: 'pictureUploadC',
                    },
                }
            },
            pvt_checkPicture_para: function () {
                return {
                    checkPictureRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_checkPicture_comp.isShow,
                            $isMounted: this.pvt_isMounted.checkPictureRef,
                            detail: [{
                                $table: 'groupBlog',
                                $arrField: ['picture'],
                                $arrValue: [this.blogId] //表格记录
                            }],
                            thumbnail: 'thumbnail'
                        },
                    },
                };
            },
            pvt_checkPicture_attr: function () {
                return {
                    checkPictureRef: {
                        attr: {
                            limit: 9,
                            rate: 0.5,
                            promptText: ''
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
                            }]
                        },
                    },
                };
            },
            pvt_checkbox_attr: function () {
                return {
                    checkboxRef: {
                        attr: {
                            new: true,
                            type: 'info',
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
                            textData: {$table: '', $value: ['谁可以看']},
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
                            // radioData: [{
                            //     $table: '',
                            //     $arrField: null,
                            //     $arrValue: [0] //表格记录
                            // }],
                            radio: {$table: '', $field: [], $value: [this.limitChecked]},
                            radioArr: {
                                $table: '', $field: [], $value: [{label: 0, text: "公开"}, {label: 1, text: "仅成员可见"}]
                            }
                        },
                    },
                };
            },
            pvt_limitRadio_attr: function () {
                return {
                    limitRadioRef: {
                        attr: {
                            // radioArr: [{label: 0, text: "公开"}, {label: 1, text: "朋友可见"}, {label: 2, text: "仅自己"}]
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
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: [this.publishBtn, ''] //表格记录
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
                            width: '200px',
                            disabled: this.publishDisabled
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
                            size: 'mini',
                            disabled: this.publishDisabled
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
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true;
            }
            this.getNumber();
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
                        server:12
                    }
                } else if (type === 'userType') {
                    // 0表示普通用户，1表示游客
                    return 0
                }
            },

            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let tableName;
                let dbFlag;
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
                            // 初始化数据：
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            window.scrollTo(0, 0);
                            window.scroll = null;

                            that.noteValue = '';
                            that.sortCheckedArr = [];
                            that.labelData = [];
                            that.labelDataClone = [];
                            that.labelDataArr = [];
                            that.limitChecked = 0;
                            that.closeCommentChecked = 0;
                            that.newBlogId = null;
                            that.blogId = null;
                            that.totalStr = '字数统计：0（不超过600个字符）';
                            that.publishDisabled = false;
                            that.isOverTotal = false;
                            that.authorName = '';
                            that.authorId = '';
                            that.curLabelId = null;
                            that.publishBtn = '发布';
                            that.draftBtn = '保存草稿';

                            if (that.para.blogId) {
                                that.blogId = that.para.blogId;
                                para.nStep = 'ModifyBlog';
                            } else {
                                para.nStep = 'getUserInfo';
                            }
                            dbFlag++;
                            break;
                        case 'getUserInfo':
                            tableName = that.mac.tb.userInfo;
                            condition = null;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.userInfo.userID] = [];
                            dbData[that.mac.fd.userInfo.name] = [];
                            that.sys.api.recordQuery(tableName, '', condition, dbData, function (result) {
                                that.authorId = dbData[that.mac.fd.userInfo.userID][0];
                                that.authorName = dbData[that.mac.fd.userInfo.name][0];
                                para.nStep = 'newBlog';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'newBlog':
                            tableName = this.mac.tb.groupBlog;
                            dbData = {};
                            dbData[this.mac.fd.groupBlog.blogType] = [0];
                            dbData[this.mac.fd.groupBlog.author] = [that.authorId];
                            dbData[this.mac.fd.groupBlog.authorName] = [that.authorName];
                            that.sys.api.recordNew(tableName, null, dbData, function () {
                                that.newBlogId = dbData.id[0];
                                that.blogId = that.newBlogId;
                                para.nStep = 'InputLabel';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'ModifyBlog':
                            tableName = this.mac.tb.groupBlog;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.blogId];
                            dbData[that.mac.fd.groupBlog.details] = [];
                            dbData[that.mac.fd.groupBlog.openRange] = [];
                            dbData[that.mac.fd.groupBlog.closeComment] = [];
                            dbData[that.mac.fd.groupBlog.labelNumber] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.noteValue = dbData[that.mac.fd.groupBlog.details][0];
                                that.limitChecked = dbData[that.mac.fd.groupBlog.openRange][0];
                                that.closeCommentChecked = dbData[that.mac.fd.groupBlog.closeComment][0];
                                that.sortCheckedArr = dbData[that.mac.fd.groupBlog.labelNumber][0];

                                that.totalStr = '字数统计：' + that.noteValue.length + '（不超过600个字符）';
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
                            portName = that.mac.tb.groupBlogLabel;
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
                            tableName = this.mac.tb.groupBlogLabel;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curLabelId];
                            dbData[that.mac.fd.groupBlogLabel.name] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                if(dbData[that.mac.fd.groupBlogLabel.name][0]) {
                                    for(let i = 0; i < dbData[that.mac.fd.groupBlogLabel.name][0].length; i++) {
                                        that.labelData.push(dbData[that.mac.fd.groupBlogLabel.name][0][i]);
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
                            tableName = this.mac.tb.groupBlogLabel;
                            dbData = {};
                            dbData[that.mac.fd.groupBlogLabel.name] = [[]];
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
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            notePublish: function (saveType, successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let tableName;
                let record;
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

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            if (this.noteValue === '') {
                                this.$message.warning('帖子内容不能为空！');
                                para.nStep = 'end';
                            } else {
                                // 进入发布状态：
                                if(saveType === 'publish') {
                                    that.publishBtn = '发布中...';
                                } else {
                                    that.draftBtn = '保存中...';
                                }
                                para.nStep = 'modifyBlog';
                            }
                            dbFlag++;
                            break;
                        case 'modifyBlog':
                            tableName = this.mac.tb.groupBlog;
                            let abstract;
                            if (this.noteValue.length > 70) {
                                abstract = this.noteValue.substr(0, 70) + '...';
                            } else {
                                abstract = this.noteValue.substr(0, 70);
                            }

                            let data = {};
                            if (that.para.blogId) {
                                data[this.mac.fd.id] = [that.para.blogId];
                            } else {
                                data[this.mac.fd.id] = [that.newBlogId];
                            }
                            data[this.mac.fd.groupBlog.abstract] = [abstract];
                            data[this.mac.fd.groupBlog.details] = [this.noteValue];
                            data[this.mac.fd.groupBlog.openRange] = [this.limitChecked];
                            data[this.mac.fd.groupBlog.praiseNumber] = [0];
                            data[this.mac.fd.groupBlog.favoriteNumber] = [0];
                            data[this.mac.fd.groupBlog.commentNumber] = [0];
                            data[this.mac.fd.groupBlog.closeComment] = [this.closeCommentChecked];
                            data[this.mac.fd.groupBlog.labelNumber] = [this.sortCheckedArr];
                            that.sys.api.recordModify(tableName, data, function () {
                                para.nStep = 'dataOutput';
                                if (++dbFlag === 2) {
                                    that.notePublish(saveType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'dataOutput':
                            let inputId;
                            if (that.para.blogId) {
                                inputId = that.para.blogId;
                            } else {
                                inputId = that.newBlogId;
                            }
                            tableName = this.mac.tb.groupBlog;
                            that.sys.api.dataOutput(tableName, [inputId], '', function (result) {
                                let status;
                                if (saveType === 'draft') {
                                    status = that.mac.enum.groupBlog.status.draft  // 草稿状态
                                } else if (saveType === 'publish') {
                                    status = that.mac.enum.groupBlog.status.release  // 发布状态
                                }
                                let blogData = {
                                    blogID: result[0],
                                    status: status,
                                    authorSite: that.mySite,
                                    publicLabelNumber: that.sortCheckedArr
                                };
                                that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.newBlog, blogData], function () {
                                    para.nStep = 'modifyLabel';
                                    if (++dbFlag === 2) {
                                        that.notePublish(saveType, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                    that.$message.warning('出错了！请稍后再试。');
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.notePublish(saveType, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'modifyLabel':
                            tableName = this.mac.tb.groupBlogLabel;
                            dbData = {};
                            dbData[this.mac.fd.id] = [that.curLabelId];
                            dbData[this.mac.fd.groupBlogLabel.name] = [that.labelDataArr];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                para.nStep = 'labelDataOutput';
                                if (++dbFlag === 2) {
                                    that.notePublish(saveType, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'labelDataOutput':
                            tableName = this.mac.tb.groupBlogLabel;
                            that.sys.api.dataOutput(tableName, [that.curLabelId], '', function (result) {
                                that.callModuleEventPort('publishEnd', [result[0]], function () {
                                    that.noteValue = '';
                                    that.$message.success('帖子发表成功！');
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.notePublish(saveType, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                    that.$message.warning('出错了！请稍后再试。');
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.notePublish(saveType, successCallBack, errorCallBack)
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

            getNumber: function () {
                let that = this;
                let flag = true;
                let textarea = document.querySelector('#group-note-wrap .el-textarea__inner');
                textarea.addEventListener('compositionstart', function () {
                    flag = false;
                }, false);
                textarea.addEventListener('compositionend', function () {
                    flag = true;
                }, false);
                textarea.addEventListener('input', function () {
                    setTimeout(function () {
                        if (flag) {
                            var numTotal = textarea.value.length;
                            that.totalStr = '字数统计：' + numTotal + '（不超过600个字符）';
                            if (numTotal <= 600) {
                                that.publishDisabled = false;
                                that.isOverTotal = false;
                            } else {
                                that.publishDisabled = true;
                                that.isOverTotal = true;
                            }
                        }
                    }, 0)
                }, false);
            },

            contentBlur: function (value) {
                this.noteValue = value;
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

            limitCheck: function (value) {
                this.limitChecked = value;
            },
            closeComment: function (value) {
                this.closeCommentChecked = value;
            },

            // 事件：
            contentRef_dataModifyEvent: function (ref, value) {
                this.contentBlur(value);
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
            limitRadioRef_radioClickEvent: function (ref, value) {
                this.limitCheck(value);
            },
            closeCommentRef_radioClickEvent: function (ref, value) {
                this.closeComment(value);
            },
            publishBtnRef_buttonClickEvent: function () {
                let saveType = 'publish';
                this.notePublish(saveType, function () {
                }, function () {
                });
            },
            draftBtnRef_buttonClickEvent: function () {
                let saveType = 'draft';
                this.notePublish(saveType, function () {
                }, function () {
                });
            },
        }
    };
</script>
<style lang="scss">
    #group-note-wrap {
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
            padding: 0 14%;
            z-index: 5;
            overflow: hidden;

            .note-publish-text {
                margin-bottom: 10px;
                padding: 20px;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                border-radius: 4px;
            }

            .publish-content-wrap {
                box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                border-radius: 4px;
                background-color: #fff;
                margin-bottom: 10px;

                .write-text {
                    padding: 10px 20px;
                    border-bottom: 1px solid #F5F5F5;
                }

                .note-write {
                    padding: 20px;

                    .overTotal {
                        .el-textarea__inner {
                            border: 1px solid red;

                            &:hover {
                                border-color: red;
                            }
                        }
                    }

                    .num-total {
                        text-align: right;
                        padding-right: 10px;
                    }
                }
            }

            .picture-select-wrap {
                box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                border-radius: 4px;
                background-color: #fff;
                margin-bottom: 10px;

                .select-text {
                    padding: 10px 20px;
                    border-bottom: 1px solid #F5F5F5;
                }

                .picture-select {
                    padding: 20px;
                }
            }

            .sort-wrap {
                box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                border-radius: 4px;
                background-color: #fff;
                margin-bottom: 10px;

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
                box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                border-radius: 4px;
                background-color: #fff;
                margin-bottom: 20px;

                .more-set-text {
                    padding: 10px 20px;
                    border-bottom: 1px solid #F5F5F5;
                }

                .limit-wrap {
                    padding: 20px;

                    .limit-text {
                        display: inline-block;
                        margin-right: 48px;
                    }

                    .limit-radio {
                        display: inline-block;
                    }
                }

                .close-comment-wrap {
                    padding: 20px;

                    .close-comment-text {
                        display: inline-block;
                        margin-right: 20px;
                    }

                    .close-comment {
                        display: inline-block;
                    }
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
    }
</style>