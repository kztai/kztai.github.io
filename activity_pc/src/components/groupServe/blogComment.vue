<template>
    <div id="blog-comment-wrap">
        <div class="author-picture">
            <img src="../../assets/logo.png" width="100%" height="100%" alt="">
            <!--<lm-image-->
                    <!--:para="pvt_img_para[pvt_currentRef.img].para"-->
                    <!--:attr="pvt_img_attr[pvt_currentRef.img].attr"-->
                    <!--:refId="pvt_currentRef.img"-->
                    <!--:ref="pvt_currentRef.img">-->
            <!--</lm-image>-->
        </div>
        <div class="blog-comment-right">
            <div class="author-name">
                <lm-link-text
                        :para="pvt_name_para[pvt_currentRef.name].para"
                        :attr="pvt_name_attr[pvt_currentRef.name].attr"
                        :refId="pvt_currentRef.name"
                        :ref="pvt_currentRef.name">
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
            <div class="comment-content-wrap">
                <span class="parent-comment-author" v-if="parCommentAuthor">
                    <lm-link-text
                            :para="pvt_parentAuthor_para[pvt_currentRef.parentAuthor].para"
                            :attr="pvt_parentAuthor_attr[pvt_currentRef.parentAuthor].attr"
                            :refId="pvt_currentRef.parentAuthor"
                            :ref="pvt_currentRef.parentAuthor">
                    </lm-link-text>
                </span>
                <span class="comment-content">
                    <lm-link-text
                            :para="pvt_comment_para[pvt_currentRef.comment].para"
                            :attr="pvt_comment_attr[pvt_currentRef.comment].attr"
                            :refId="pvt_currentRef.comment"
                            :ref="pvt_currentRef.comment">
                    </lm-link-text>
                </span>
            </div>
            <div class="blog-content-wrap">
                <span class="reply-text">
                    <lm-link-text
                            :para="pvt_reply_para[pvt_currentRef.reply].para"
                            :attr="pvt_reply_attr[pvt_currentRef.reply].attr"
                            :refId="pvt_currentRef.reply"
                            :ref="pvt_currentRef.reply">
                    </lm-link-text>
                </span>
                <span class="blog-content">
                    <lm-link-text
                            :para="pvt_blogContent_para[pvt_currentRef.blogContent].para"
                            :attr="pvt_blogContent_attr[pvt_currentRef.blogContent].attr"
                            :refId="pvt_currentRef.blogContent"
                            :ref="pvt_currentRef.blogContent">
                    </lm-link-text>
                </span>
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

                replyText: '',
                blogField: '',
                parCommentAuthor: '',
                curBlogId: null,
                terBlogId: null,
                parentCommentId: null,
                isBold: false,

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['img', 'name', 'releaseTime', 'comment', 'blogContent', 'reply', 'parentAuthor'],
                    ref: ['imgRef', 'nameRef', 'releaseTimeRef', 'commentRef', 'blogContentRef', 'replyRef', 'parentAuthorRef']
                },

                pvt_currentRef: {
                    img: 'imgRef',
                    name: 'nameRef',
                    releaseTime: 'releaseTimeRef',
                    comment: 'commentRef',
                    blogContent: 'blogContentRef',
                    reply: 'replyRef',
                    parentAuthor: 'parentAuthorRef',
                },
                pvt_isShow: {
                    img: true,
                    name: true,
                    releaseTime: true,
                    reply: true,
                    blogContent: true,
                    comment: true,
                    parentAuthor: true,
                },
                pvt_isMounted: {
                    imgRef: false,
                    nameRef: false,
                    releaseTimeRef: false,
                    replyRef: false,
                    blogContentRef: false,
                    commentRef: false,
                    parentAuthorRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_img_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.img,
                    isShow: this.pvt_isShow.img,
                    imgRef: {
                        componentName: 'imageC',
                    },
                }
            },
            pvt_img_para: function () {
                return {
                    imgRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_img_comp.isShow,
                            $isMounted: this.pvt_isMounted.imgRef,
                            image: {
                                $table: {'groupBlogComment': ['head_portrait']},
                                $value: [this.para.curCommentId]
                            },
                        },
                    },
                };
            },
            pvt_img_attr: function () {
                return {
                    imgRef: {
                        attr: {
                            size: 'min',
                        },
                    },
                };
            },

            pvt_name_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.name,
                    isShow: this.pvt_isShow.name,
                    nameRef: {
                        componentName: 'radioC',
                    },
                }
            },

            pvt_name_para: function () {
                return {
                    nameRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_name_comp.isShow,
                            $isMounted: this.pvt_isMounted.nameRef,
                            textData: {
                                $table: {'groupBlogComment': ['name']},
                                $value: [this.para.curCommentId]
                            },
                        },
                    },
                };
            },
            pvt_name_attr: function () {
                return {
                    nameRef: {
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

            pvt_reply_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.reply,
                    isShow: this.pvt_isShow.reply,
                    replyRef: {
                        componentName: 'headC',
                    },
                }
            },
            pvt_reply_para: function () {
                return {
                    replyRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_reply_comp.isShow,
                            $isMounted: this.pvt_isMounted.replyRef,
                            textData: {
                                $table: '',
                                $value: [this.replyText]
                            },
                        },
                    },
                };
            },
            pvt_reply_attr: function () {
                return {
                    replyRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#909399',
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
                                $table: {'groupBlog': [this.blogField]},
                                $value: [this.curBlogId]
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
                            fontWeight: this.isBold
                        },
                    },
                };
            },

            pvt_parentAuthor_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.parentAuthor,
                    isShow: this.pvt_isShow.parentAuthor,
                    parentAuthorRef: {
                        componentName: 'imageC',
                    },
                }
            },
            pvt_parentAuthor_para: function () {
                return {
                    parentAuthorRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_parentAuthor_comp.isShow,
                            $isMounted: this.pvt_isMounted.parentAuthorRef,
                            textData: {
                                $table: {},
                                $value: [this.parCommentAuthor]
                            },
                        },
                    },
                };
            },
            pvt_parentAuthor_attr: function () {
                return {
                    parentAuthorRef: {
                        attr: {
                            fontSize: '14px',
                            isClick: true,
                            color: '#409EFF',
                        },
                    },
                };
            },

            pvt_comment_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.comment,
                    isShow: this.pvt_isShow.comment,
                    commentRef: {
                        componentName: 'imageC',
                    },
                }
            },
            pvt_comment_para: function () {
                return {
                    commentRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_comment_comp.isShow,
                            $isMounted: this.pvt_isMounted.commentRef,
                            textData: {
                                $table: {'groupBlogComment': ['details']},
                                $value: [this.para.curCommentId]
                            },
                        },
                    },
                };
            },
            pvt_comment_attr: function () {
                return {
                    commentRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
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
                            that.replyText = '';
                            that.blogField = '';
                            that.curBlogId = null;
                            that.terBlogId = null;
                            that.releaseTime = '';
                            that.parCommentAuthor = '';
                            that.parentCommentId = null;
                            that.isBold = false;

                            para.nStep = 'getCommentData';
                            dbFlag++;
                            break;

                        case 'getCommentData':
                            tableName = that.mac.tb.groupBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.id] = [this.para.curCommentId];
                            dbData[that.mac.fd.groupBlogComment.groupBlogID] = [];
                            dbData[that.mac.fd.groupBlogComment.time] = [];
                            dbData[that.mac.fd.groupBlogComment.parentID] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.curBlogId = dbData[that.mac.fd.groupBlogComment.groupBlogID][0];
                                that.parentCommentId = dbData[that.mac.fd.groupBlogComment.parentID][0];

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

                                para.nStep = 'getCloudBlogId';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getCloudBlogId':
                            tableName = that.mac.tb.groupBlog;
                            record = [that.curBlogId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                that.terBlogId = result[0];
                                para.nStep = 'inputGroupBlog';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'inputGroupBlog':
                            tableName = that.mac.tb.groupBlog;
                            record = [that.terBlogId];
                            that.sys.api.dataInput(tableName, record, '', function (result) {
                                para.nStep = 'getBlogData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getBlogData':
                            tableName = that.mac.tb.groupBlog;
                            dbData = {};
                            dbData[that.mac.fd.id] = [this.curBlogId];
                            dbData[that.mac.fd.groupBlog.authorName] = [];
                            dbData[that.mac.fd.groupBlog.blogType] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                if (dbData[that.mac.fd.groupBlog.blogType][0] === that.mac.enum.groupBlog.blogType.post) {
                                    that.replyText = '回复' + dbData[that.mac.fd.groupBlog.authorName][0] + '的帖子：';
                                    that.blogField = that.mac.fd.groupBlog.abstract;
                                } else {
                                    that.replyText = '回复' + dbData[that.mac.fd.groupBlog.authorName][0] + '的文章：';
                                    that.blogField = that.mac.fd.groupBlog.name;
                                    that.isBold = true
                                }

                                para.nStep = 'getParentCommentData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        // case 'getParentCommentData':
                        //     if (that.parentCommentId === null) {
                        //         para.nStep = 'end';
                        //         dbFlag++;
                        //     } else {
                        //         tableName = that.mac.tb.groupBlogComment;
                        //         dbData = {};
                        //         dbData[that.mac.fd.id] = [that.parentCommentId];
                        //         dbData[that.mac.fd.groupBlogComment.name] = [];
                        //         that.sys.api.recordRead(tableName, dbData, function () {
                        //             that.parCommentAuthor = '@' + dbData[that.mac.fd.groupBlogComment.name][0] + ' ';
                        //             para.nStep = 'end';
                        //             if (++dbFlag === 2) {
                        //                 that.startModule(successCallBack, errorCallBack)
                        //             }
                        //         }, function (error) {
                        //             console.error(error);
                        //         });
                        //     }
                        //     break;
                        case 'getParentCommentData':
                            if (that.parentCommentId === null) {
                                para.nStep = 'end';
                                dbFlag++;
                            } else {
                                // 查找该父id是否存在，不存在则再从云端下载：
                                tableName = that.mac.tb.groupBlogComment;
                                dbData = {};
                                dbData[that.mac.fd.id] = [that.parentCommentId];
                                dbData[that.mac.fd.groupBlogComment.name] = [];
                                that.sys.api.recordRead(tableName, dbData, function () {
                                    if(dbData[that.mac.fd.groupBlogComment.name][0] === null) {
                                        para.nStep = 'getSourceId';
                                    } else {
                                        that.parCommentAuthor = '@' + dbData[that.mac.fd.groupBlogComment.name][0] + ' ';
                                        para.nStep = 'end';
                                    }
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function (error) {
                                    console.error(error);
                                });
                            }
                            break;
                        case 'getSourceId':
                            tableName = that.mac.tb.groupBlogComment;
                            record = [that.parentCommentId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terParentCommentId = result;
                                para.nStep = 'inputDelComment';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case 'inputDelComment':
                            tableName = that.mac.tb.groupBlogComment;
                            record = para.terParentCommentId[0];
                            this.callModuleEventPort('refreshData', [tableName, record], function () {
                                para.nStep = 'refreshCur';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshCur':
                            tableName = that.mac.tb.groupBlogComment;
                            record = para.terParentCommentId;
                            that.sys.api.dataInput(tableName, record, '', function (result) {
                                para.nStep = 'getParentCommentData';
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

            openBlogDetail: function (btn) {
                this.callModuleEventPort('blogClickEvent', [this.terBlogId, btn]);
            },

            // 事件：
            nameRef_textClickEvent: function () {
                // this.openBlogDetail();
            },
            blogContentRef_textClickEvent: function () {
                this.openBlogDetail('content');
            },
            parentAuthorRef_textClickEvent: function () {
                // this.openBlogDetail();
            },
            imgRef_clickEvent: function () {

            },
        }
    };
</script>
<style lang="scss">
    #blog-comment-wrap {
        display: flex;
        .link-text {
            text-indent: 0 !important;

            &:hover {
                border-bottom: none;
            }
        }

        .author-picture {
            flex: 0 0 48px;
            width: 48px;
            height: 48px;
            border-radius: 4px;
            cursor: pointer;
            overflow: hidden;
            margin-right: 10px;
        }

        .blog-comment-right {
            flex: 1;
            .release-time {
                font-family: ArialMT;
                margin-bottom: 6px;
            }
            .comment-content-wrap {
                margin-bottom: 10px;
                .parent-comment-author {
                    margin-right: 6px;
                }
            }
            .blog-content-wrap {
                border-radius: 4px;
                padding: 10px;
                background-color: #f5f7fa;
            }
        }
    }
</style>