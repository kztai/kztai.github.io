<template>
    <div id="basic-blog-wrap">
        <div v-if="blogType===0" class="note-author-info">
            <div class="author-picture">
                <img src="../../assets/logo.png" width="100%" height="100%" alt="">
                <!--<imageC-->
                <!--:para="pvt_nAuthorImg_para[pvt_currentRef.nAuthorImg].para"-->
                <!--:attr="pvt_nAuthorImg_attr[pvt_currentRef.nAuthorImg].attr"-->
                <!--:refId="pvt_currentRef.nAuthorImg"-->
                <!--:ref="pvt_currentRef.nAuthorImg">-->
                <!--</imageC>-->
            </div>
            <div class="author-text">
                <div class="author-name">
                    <lm-link-text
                            :para="pvt_nAuthorName_para[pvt_currentRef.nAuthorName].para"
                            :attr="pvt_nAuthorName_attr[pvt_currentRef.nAuthorName].attr"
                            :refId="pvt_currentRef.nAuthorName"
                            :ref="pvt_currentRef.nAuthorName">
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
            </div>
        </div>
        <div v-if="blogType===1" class="blog-title">
            <lm-link-text
                    :para="pvt_title_para[pvt_currentRef.title].para"
                    :attr="pvt_title_attr[pvt_currentRef.title].attr"
                    :refId="pvt_currentRef.title"
                    :ref="pvt_currentRef.title">
            </lm-link-text>
        </div>
        <div class="blog-content" :class="{'note-blog': blogType===0}">
            <lm-link-text
                    :para="pvt_blogContent_para[pvt_currentRef.blogContent].para"
                    :attr="pvt_blogContent_attr[pvt_currentRef.blogContent].attr"
                    :refId="pvt_currentRef.blogContent"
                    :ref="pvt_currentRef.blogContent">
            </lm-link-text>
        </div>
        <div class="blog-picture" :class="{'note-blog': blogType===0}">
            <lm-imgs
                    :para="pvt_blogPicture_para[pvt_currentRef.blogPicture].para"
                    :attr="pvt_blogPicture_attr[pvt_currentRef.blogPicture].attr"
                    :refId="pvt_currentRef.blogPicture"
                    :ref="pvt_currentRef.blogPicture">
            </lm-imgs>
        </div>
        <div class="handle-btns">
            <div v-if="blogType===0" class="note-turn">
                <lm-button
                        :para="pvt_turn_para[pvt_currentRef.turn].para"
                        :attr="pvt_turn_attr[pvt_currentRef.turn].attr"
                        :refId="pvt_currentRef.turn"
                        :ref="pvt_currentRef.turn">
                </lm-button>
            </div>
            <div v-if="blogType===1" class="article-author-info">
                <div class="article-author-img">
                    <img src="../../assets/logo.png" width="100%" height="100%" alt="">
                    <!--<imageC-->
                    <!--:para="pvt_aAuthorImg_para[pvt_currentRef.aAuthorImg].para"-->
                    <!--:attr="pvt_aAuthorImg_attr[pvt_currentRef.aAuthorImg].attr"-->
                    <!--:refId="pvt_currentRef.aAuthorImg"-->
                    <!--:ref="pvt_currentRef.aAuthorImg">-->
                    <!--</imageC>-->
                </div>
                <div class="article-author-name">
                    <lm-link-text
                            :para="pvt_aAuthorName_para[pvt_currentRef.aAuthorName].para"
                            :attr="pvt_aAuthorName_attr[pvt_currentRef.aAuthorName].attr"
                            :refId="pvt_currentRef.aAuthorName"
                            :ref="pvt_currentRef.aAuthorName">
                    </lm-link-text>
                </div>
            </div>
            <div class="article-comment">
                <lm-button
                        :para="pvt_aComment_para[pvt_currentRef.aComment].para"
                        :attr="pvt_aComment_attr[pvt_currentRef.aComment].attr"
                        :refId="pvt_currentRef.aComment"
                        :ref="pvt_currentRef.aComment">
                </lm-button>
            </div>
            <div class="article-praise" :class="{'is-praise': isPraise}">
                <lm-button
                        :para="pvt_aPraise_para[pvt_currentRef.aPraise].para"
                        :attr="pvt_aPraise_attr[pvt_currentRef.aPraise].attr"
                        :refId="pvt_currentRef.aPraise"
                        :ref="pvt_currentRef.aPraise">
                </lm-button>
            </div>
            <div class="article-time">
                <lm-link-text
                        v-show="pvt_isShow.articleTime"
                        :para="pvt_articleTime_para[pvt_currentRef.articleTime].para"
                        :attr="pvt_articleTime_attr[pvt_currentRef.articleTime].attr"
                        :refId="pvt_currentRef.articleTime"
                        :ref="pvt_currentRef.articleTime">
                </lm-link-text>
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

                blogType: 0,
                cloudBlogId: '',
                blogTitle: '',
                blogAbstract: '',
                publisherName: '',
                headField: '',
                authorName: '',
                releaseTime: '',
                praiseNum: '点赞',
                commentNum: '评论',
                turnNum: '转发',
                isPraise: false,
                isComment: false,
                isTurn: false,
                authorSite: '',

                groupName: '',
                groupId: null,
                groupSite: '',

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['nAuthorImg', 'nAuthorName', 'releaseTime', 'title', 'blogContent', 'blogPicture', 'aAuthorImg', 'aAuthorName', 'aComment', 'aPraise', 'articleTime', 'turn', 'nComment', 'nPraise'],
                    ref: ['nAuthorImgRef', 'nAuthorNameRef', 'releaseTimeRef', 'titleRef', 'blogContentRef', 'blogPictureRef', 'aAuthorImgRef', 'aAuthorNameRef', 'aCommentRef', 'aPraiseRef', 'articleTimeRef', 'turnRef', 'nCommentRef', 'nPraiseRef']
                },

                pvt_currentRef: {
                    nAuthorImg: 'nAuthorImgRef',
                    nAuthorName: 'nAuthorNameRef',
                    releaseTime: 'releaseTimeRef',
                    title: 'titleRef',
                    blogContent: 'blogContentRef',
                    blogPicture: 'blogPictureRef',
                    aAuthorImg: 'aAuthorImgRef',
                    aAuthorName: 'aAuthorNameRef',
                    aComment: 'aCommentRef',
                    aPraise: 'aPraiseRef',
                    articleTime: 'articleTimeRef',
                    turn: 'turnRef',
                    nComment: 'nCommentRef',
                    nPraise: 'nPraiseRef',

                },

                pvt_isShow: {
                    nAuthorImg: true,
                    nAuthorName: true,
                    releaseTime: true,
                    title: true,
                    blogContent: true,
                    blogPicture: true,
                    aAuthorImg: true,
                    aAuthorName: true,
                    aComment: true,
                    aPraise: true,
                    articleTime: false,
                    turn: true,
                    nComment: true,
                    nPraise: true,

                },
                pvt_isMounted: {
                    nAuthorImgRef: false,
                    nAuthorNameRef: false,
                    releaseTimeRef: false,
                    titleRef: false,
                    blogContentRef: false,
                    blogPictureRef: false,
                    aAuthorImgRef: false,
                    aAuthorNameRef: false,
                    aCommentRef: false,
                    aPraiseRef: false,
                    articleTimeRef: false,
                    turnRef: false,
                    nCommentRef: false,
                    nPraiseRef: false,

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
                                $table: {'publicBlog': ['head_portrait']},
                                $value: [this.para.curPublicId]
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
                                $table: '',
                                $value: [this.publisherName]
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
                                $table: '',
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

            pvt_title_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.title,
                    isShow: this.pvt_isShow.title,
                    titleRef: {
                        componentName: 'headC',
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
                                $table: '',
                                $value: [this.blogTitle]
                            },
                        },
                    },
                };
            },
            pvt_title_attr: function () {
                return {
                    titleRef: {
                        attr: {
                            fontSize: '16px',
                            isClick: true,
                            color: '#303133',
                            fontWeight: true
                        },
                    },
                };
            },

            pvt_blogContent_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.blogContent,
                    isShow: this.pvt_isShow.blogContent,
                    blogContentRef: {
                        componentName: 'footC',
                    },
                }
            },
            pvt_blogContent_para: function () {
                return {
                    blogContentRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_blogContent_comp.isShow,
                            $isMounted: this.pvt_isMounted.blogContentRef,
                            textData: {
                                $table: '',
                                $value: [this.blogAbstract]
                            },
                        },
                    },
                };
            },
            pvt_blogContent_attr: function () {
                return {
                    blogContentRef: {
                        attr: {
                            fontSize: '14px',
                            isClick: true,
                            color: '#303133',
                        },
                    },
                };
            },

            pvt_blogPicture_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.blogPicture,
                    isShow: this.pvt_isShow.blogPicture,
                    blogPictureRef: {
                        componentName: 'imageC',
                    },
                }
            },
            pvt_blogPicture_para: function () {
                return {
                    blogPictureRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_blogPicture_comp.isShow,
                            $isMounted: this.pvt_isMounted.blogPictureRef,
                            thumbnail: [{
                                $table: 'publicBlog',
                                $arrField: ['thumbnail'],
                                $arrValue: [this.para.curPublicId]
                            }],
                            detail: 'picture',
                        },
                    },
                };
            },
            pvt_blogPicture_attr: function () {
                return {
                    blogPictureRef: {
                        attr: {
                            size: 'small',
                            showGif: true,
                            showLong: true,
                            limit: 9
                        },
                    },
                };
            },

            pvt_aAuthorImg_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.aAuthorImg,
                    isShow: this.pvt_isShow.aAuthorImg,
                    aAuthorImgRef: {
                        componentName: 'imageC',
                    },
                }
            },
            pvt_aAuthorImg_para: function () {
                return {
                    aAuthorImgRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_aAuthorImg_comp.isShow,
                            $isMounted: this.pvt_isMounted.aAuthorImgRef,
                            image: {
                                $table: {'publicBlog': ['head_portrait']},
                                $value: [this.para.curPublicId]
                            },
                        },
                    },
                };
            },
            pvt_aAuthorImg_attr: function () {
                return {
                    aAuthorImgRef: {
                        attr: {
                            size: 'min'
                        },
                    },
                };
            },

            pvt_aAuthorName_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.aAuthorName,
                    isShow: this.pvt_isShow.aAuthorName,
                    aAuthorNameRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_aAuthorName_para: function () {
                return {
                    aAuthorNameRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_aAuthorName_comp.isShow,
                            $isMounted: this.pvt_isMounted.aAuthorNameRef,
                            textData: {$table: '', $value: [this.publisherName]},
                        },
                    },
                };
            },
            pvt_aAuthorName_attr: function () {
                return {
                    aAuthorNameRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            isClick: true
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
                                $arrValue: [this.commentNum, 'el-icon-chat-round']
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
                            size: 'mini'
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
                            type: 'text'
                        },
                    },
                };
            },

            pvt_articleTime_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.articleTime,
                    isShow: this.pvt_isShow.articleTime,
                    articleTimeRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_articleTime_para: function () {
                return {
                    articleTimeRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_articleTime_comp.isShow,
                            $isMounted: this.pvt_isMounted.articleTimeRef,
                            textData: {$table: '', $value: [this.releaseTime]},
                        },
                    },
                };
            },
            pvt_articleTime_attr: function () {
                return {
                    articleTimeRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#909399'
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
        },
        methods: {
            openMessage: function(event) {
                this.isInit = true;
            },


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
                            // 初始化：
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            that.blogType = 0;
                            that.cloudBlogId = '';
                            that.blogTitle = '';
                            that.blogAbstract = '';
                            that.authorName = '';
                            that.publisherName = '';
                            that.headField = '';
                            that.praiseNum = '点赞';
                            that.commentNum = '评论';
                            that.turnNum = '转发';
                            that.isPraise = false;
                            that.isComment = false;
                            that.isTurn = false;
                            that.releaseTime = '';
                            that.groupName = '';

                            that.groupId = null;
                            that.groupSite = '';

                            that.authorSite = '';

                            para.nStep = 'publicData';
                            dbFlag++;
                            break;

                        case 'publicData':
                            tableName = that.mac.tb.publicBlog;
                            condition = 'id=' + this.para.curPublicId;
                            dbData = {};
                            // dbData[that.mac.fd.id] = [this.para.curPublicId];
                            that.sys.api.recordQuery(tableName, null, condition, dbData, function () {
                                that.blogType = dbData[that.mac.fd.publicBlog.blogType][0];
                                that.cloudBlogId = dbData[that.mac.fd.publicBlog.blogID][0];
                                that.blogTitle = dbData[that.mac.fd.publicBlog.blogName][0];
                                that.blogAbstract = dbData[that.mac.fd.publicBlog.abstract][0];
                                that.authorName = dbData[that.mac.fd.publicBlog.authorName][0];
                                // authorSite为一个对象，目前数据库中数据不对，暂用临时数据：
                                that.authorSite = {
                                    geneAddr: {
                                        groupID: 1,
                                        cloudID: 2,
                                        vesselType: 's',
                                        vesselID: 7,
                                        userID: 3,
                                        geneID: 30
                                    },
                                    server:3
                                };
                                // that.authorSite = dbData[that.mac.fd.publicBlog.geneSite][0];
                                // 判断组织信息是否存在：
                                that.groupId = dbData[that.mac.fd.publicBlog.groupID][0];
                                that.groupName = dbData[that.mac.fd.publicBlog.groupName][0];
                                // authorSite为一个对象，目前数据库中数据不对，暂用临时数据：
                                that.groupSite = {
                                    geneAddr: {
                                        groupID: 1,
                                        cloudID: 2,
                                        vesselType: 's',
                                        vesselID: 12,
                                        userID: 4,
                                        geneID: 31
                                    },
                                    server:4
                                };
                                // that.groupSite = dbData[that.mac.fd.publicBlog.groupSite][0];

                                if (dbData[that.mac.fd.publicBlog.praiseNumber][0] > 0) {
                                    that.praiseNum = dbData[that.mac.fd.publicBlog.praiseNumber][0];
                                }
                                if (dbData[that.mac.fd.publicBlog.commentNumber][0] > 0) {
                                    that.commentNum = dbData[that.mac.fd.publicBlog.commentNumber][0];
                                }

                                // 判断时间的格式：
                                var time = dbData[that.mac.fd.publicBlog.time][0];
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

                                para.nStep = 'isHandle';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                                //
                                // var str = '<div id="div1"><div class="common-js" style="color:#fff; margin-left: 12px;"><span id="kk" class="jjdd" style="color:#ddd;">kztkztffd<124></span></div></div>';
                                // str.replace(/<[a-zA-Z_/][^>]*>/ig, '');
                                // // str.replace(/<([^\s]+)[^>]+>([^(</\w+>)]+)<\/\w+>/ig, '');
                                // str.match(/<([^\s]+)[^>]+>/ig);

                            });
                            break;
                        case 'isHandle':
                            // 获取我是否点赞，收藏了这篇文章：
                            let blogData = {
                                userID: that.myId,
                                blogID: this.cloudBlogId
                            };
                            let handleType = null;
                            if (that.groupId) {
                                handleType = that.mac.setBlog.type.getBlogStateGroupForum;
                            } else {
                                handleType = that.mac.setBlog.type.getBlogStateUserForum;
                            }
                            this.callModuleEventPort('setBlogIn', [handleType, blogData], function (result) {
                                if (result && result[0] === 1) {
                                    that.isPraise = true;
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            // 初始化显示样式：
                            if (that.blogType === 1) {
                                that.showModule(['articleTimeRef'], true, function () {
                                }, function () {
                                });
                            }

                            if (that.groupId) {
                                that.publisherName = that.groupName;
                                that.headField = that.mac.fd.publicBlog.logo;
                            } else {
                                that.publisherName = that.authorName;
                                that.headField = that.mac.fd.publicBlog.headPortrait;
                            }

                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            openBlogDetail: function (btn) {
                if (this.groupId) {
                    this.callModuleEventPort('blogClickEvent', [this.cloudBlogId, 'group', btn]);
                } else {
                    this.callModuleEventPort('blogClickEvent', [this.cloudBlogId, 'user', btn]);
                }

            },

            // 前端先响应用户操作，再向云端发事件:
            praiseBtnClick: function () {
                let that = this;

                // 判断当前用户是否登录：
                if (!that.para.isLogin) {
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

                let blogData = {
                    userID: that.myId,
                    userSite: that.mySite,
                    blogID: this.cloudBlogId,
                };

                // 前端先响应用户操作，再向云端发事件：
                if (this.isPraise) {
                    that.praiseNum--;
                    if (that.praiseNum === 0) {
                        that.praiseNum = '点赞';
                    }
                    that.isPraise = false;

                    // 向云端发事件:
                    let delPraiseType = null;
                    if (that.groupId) {
                        delPraiseType = that.mac.setBlog.type.deletePraiseGroupForum;
                        blogData.groupSite = that.groupSite;
                    } else {
                        delPraiseType = that.mac.setBlog.type.deletePraiseUserForum;
                        blogData.authorSite = that.authorSite;
                    }
                    this.callModuleEventPort('setBlogIn', [delPraiseType, blogData], function () {
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

                    // 向云端发事件:
                    let newPraiseType = null;
                    if (that.groupId) {
                        newPraiseType = that.mac.setBlog.type.newPraiseGroupForum;
                        blogData.groupSite = that.groupSite;
                    } else {
                        newPraiseType = that.mac.setBlog.type.newPraiseUserForum;
                        blogData.authorSite = that.authorSite;
                    }
                    this.callModuleEventPort('setBlogIn', [newPraiseType, blogData], function () {
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

            turnBtnClick: function () {
                // 判断当前用户是否登录：
                if (!this.para.isLogin) {
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

                }
            },

            // 事件：
            nAuthorImgRef_clickEvent: function () {

            },
            aAuthorImgRef_clickEvent: function () {

            },
            nAuthorNameRef_textClickEvent: function () {

            },
            aAuthorNameRef_textClickEvent: function () {

            },
            titleRef_textClickEvent: function () {
                this.openBlogDetail('title');
            },
            blogContentRef_textClickEvent: function () {
                this.openBlogDetail('content');
            },
            blogPictureRef_clickEvent: function () {

            },
            aCommentRef_buttonClickEvent: function () {
                this.openBlogDetail('comment');
            },
            aPraiseRef_buttonClickEvent: function () {
                this.praiseBtnClick();
            },
            turnRef_buttonClickEvent: function () {
                this.turnBtnClick();
            },
        }
    };
</script>
<style lang="scss">
    #basic-blog-wrap {
        .link-text {
            text-indent: 0 !important;

            &:hover {
                border-bottom: none;
            }
        }

        .note-author-info {
            margin-bottom: 10px;

            .author-picture {
                display: inline-block;
                width: 48px;
                height: 48px;
                border-radius: 4px;
                vertical-align: top;
                cursor: pointer;
                overflow: hidden;
            }

            .author-text {
                display: inline-block;
                margin-left: 10px;

                .release-time {
                    font-family: ArialMT;
                }
            }
        }

        .blog-title {
            font-family: SourceHanSansCN-Medium;
            margin-bottom: 10px;
            /*margin-left: 58px;*/
            cursor: pointer;
        }

        .note-blog {
            margin-left: 58px;
        }

        .blog-content {
            margin-bottom: 10px;
            cursor: pointer;
        }

        .blog-picture {
            margin-bottom: 10px;
            /*width: 100px;*/
            /*height: 100px;*/
            /*cursor: pointer;*/
        }

        .handle-btns {
            border-top: 1px solid #f5f7fa;
            text-align: center;
            height: 36px;
            line-height: 36px;
            display: flex;
            justify-content: space-between;
            padding: 6px 0;

            .el-button--text {
                color: #909399 !important;
            }

            .is-praise {
                .el-button--text {
                    color: #12B0FF !important;
                }
            }

            .note-turn, .article-author-info, .article-comment, .article-praise, .article-time {
                flex: 1;
            }

            .note-turn, .article-author-info, .article-comment, .article-praise {
                border-right: 1px solid #e5e5e5;
            }

            .article-time {
                font-family: ArialMT;
            }

            .article-author-info {
                .article-author-img {
                    font-size: 0;
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    margin-right: 6px;
                    vertical-align: text-bottom;
                    border-radius: 2px;
                    overflow: hidden;
                }

                .article-author-name {
                    display: inline-block;
                }
            }
        }
    }
</style>