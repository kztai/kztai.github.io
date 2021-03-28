<template>
    <div class="comment-group-wrap">
        <div class="comment-group-parent" v-if="dataInit">
            <singleComment
                    :para="pvt_singleComment_para[pvt_currentRef.singleComment].para"
                    :attr="pvt_singleComment_attr[pvt_currentRef.singleComment].attr"
                    :refId="pvt_currentRef.singleComment"
                    :ref="pvt_currentRef.singleComment">
            </singleComment>
        </div>
        <div class="comment-group-children-list" v-if="childCommentArr.length>0">
            <div class="comment-group-triangle"></div>
            <div class="comment-group-children-item"
                 v-for="(item, index) in pvt_commentChild_fordata[pvt_currentRef.commentChild].data" :key="index">
                <singleComment
                        v-show="pvt_isShow.commentChild"
                        :is="pvt_commentChild_comp[pvt_currentRef.commentChild].componentName"
                        :ref="pvt_currentRef.commentChild"
                        :refId="pvt_currentRef.commentChild"
                        :para="Object.assign({}, pvt_commentChild_fordata[pvt_currentRef.commentChild].status, item.para)"
                        :attr="item.attr">
                </singleComment>
            </div>
            <div class="comment-item-collapse" v-if="isCollapse">
                <lm-button
                        :para="pvt_collapse_para[pvt_currentRef.collapse].para"
                        :attr="pvt_collapse_attr[pvt_currentRef.collapse].attr"
                        :refId="pvt_currentRef.collapse"
                        :ref="pvt_currentRef.collapse">
                </lm-button>
            </div>
        </div>
    </div>
</template>
<script>
    import singleComment from './groupSingleComment';

    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {singleComment},
        data: function () {
            return {
                mac: mac.mac,
                childCommentArr: [],
                isCollapse: false,
                cloneCommentData: null,
                dataInit: false,

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['singleComment', 'commentChild', 'collapse'],
                    ref: ['singleCommentRef', 'commentChildRef', 'collapseRef']
                },

                pvt_currentRef: {
                    singleComment: 'singleCommentRef',
                    commentChild: 'commentChildRef',
                    collapse: 'collapseRef',
                },

                pvt_isShow: {
                    singleComment: true,
                    commentChild: true,
                    collapse: true,
                },
                pvt_isMounted: {
                    singleCommentRef: false,
                    commentChildRef: false,
                    collapseRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_collapse_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.collapse,
                    isShow: this.pvt_isShow.collapse,
                    collapseRef: {
                        componentName: 'singleComment',
                    },
                }
            },
            pvt_collapse_para: function () {
                return {
                    collapseRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_collapse_comp.isShow,
                            $isMounted: this.pvt_isMounted.collapseRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                // $arrValue: [87, 'el-icon-chat-round']
                                $arrValue: ['展开', 'el-icon-arrow-down']
                            }],
                        },
                    },
                };
            },
            pvt_collapse_attr: function () {
                return {
                    collapseRef: {
                        attr: {
                            type: 'text',
                            size: 'mini',
                            iconIsRight: true
                        },
                    },
                };
            },

            pvt_singleComment_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.singleComment,
                    isShow: this.pvt_isShow.singleComment,
                    singleCommentRef: {
                        componentName: 'singleComment',
                    },
                }
            },
            pvt_singleComment_para: function () {
                return {
                    singleCommentRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_singleComment_comp.isShow,
                            $isMounted: this.pvt_isMounted.singleCommentRef,
                            curCommentId: this.cloneCommentData.commentId,
                            cloudBlogId: this.cloneCommentData.cloudBlogId,
                            isLogin: this.para.isLogin,
                            inputDisabled: this.para.inputDisabled
                        },
                    },
                };
            },
            pvt_singleComment_attr: function () {
                return {
                    singleCommentRef: {
                        attr: {},
                    },
                };
            },

            pvt_commentChild_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.commentChild,
                    isShow: this.pvt_isShow.commentChild,
                    commentChildRef: {componentName: "singleComment"},
                }
            },
            pvt_commentChild_fordata: function () {
                return {
                    commentChildRef: {
                        status: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_commentChild_comp.isShow,
                            $isMounted: this.pvt_isMounted.commentChildRef,
                        },
                        data: this.childCommentArr,
                    }
                }
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
                            that.childCommentArr = [];
                            that.isCollapse = false;
                            that.cloneCommentData = JSON.parse(JSON.stringify(that.para.curCommentValue));
                            that.dataInit = true;

                            if (that.cloneCommentData.children) {
                                if (that.cloneCommentData.children.length > 2) {
                                    that.isCollapse = true;
                                    that.childCommentArr.push({
                                        para: {
                                            curCommentId: that.cloneCommentData.children[0].commentId,
                                            cloudBlogId: that.cloneCommentData.children[0].cloudBlogId,
                                            isLogin: this.para.isLogin,
                                            inputDisabled: that.para.inputDisabled
                                        },
                                        attr: {}
                                    });
                                    that.childCommentArr.push({
                                        para: {curCommentId: that.cloneCommentData.children[1].commentId,
                                            cloudBlogId: that.cloneCommentData.children[0].cloudBlogId,
                                            inputDisabled: that.para.inputDisabled,
                                            isLogin: this.para.isLogin},
                                        attr: {}
                                    })
                                } else {
                                    for (let i = 0; i < that.cloneCommentData.children.length; i++) {
                                        that.childCommentArr.push({
                                            para: {
                                                curCommentId: that.cloneCommentData.children[i].commentId,
                                                cloudBlogId: that.cloneCommentData.children[i].cloudBlogId,
                                                inputDisabled: that.para.inputDisabled,
                                                isLogin: this.para.isLogin
                                            },
                                            attr: {}
                                        })
                                    }
                                }
                            }
                            para.nStep = 'end';
                            dbFlag++;
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

            uploadComment: function () {
                this.isCollapse = false;
                for (let i = 2; i < this.cloneCommentData.children.length; i++) {
                    this.childCommentArr.push({
                        para: {curCommentId: this.cloneCommentData.children[i].commentId,
                            cloudBlogId: this.cloneCommentData.children[i].cloudBlogId,
                            inputDisabled: this.para.inputDisabled,
                            isLogin: this.para.isLogin},
                        attr: {}
                    })
                }
            },

            newComment: function(terCommentId, curParentId, successCallBack, errorCallBack) {
                let that = this;
                let tableName = that.mac.tb.groupBlogComment;
                let record = [terCommentId];

                that.sys.api.dataInput(tableName, record, '', function (result) {
                    that.childCommentArr.push({
                        para: {
                            curCommentId: result[0],
                            cloudBlogId: that.cloneCommentData.cloudBlogId,
                            inputDisabled: that.para.inputDisabled,
                            isLogin: that.para.isLogin
                        },
                        attr: {}
                    });
                    that.cloneCommentData.children.push({
                        commentId: result[0],
                        isDelete: that.mac.enum.groupBlogComment.delete.no,
                        isHide: that.mac.enum.groupBlogComment.hideComment.no,
                        cloudBlogId: that.cloneCommentData.cloudBlogId,
                        parentId: curParentId
                    });

                    // 新增的评论的评论需要通知到父组件进行数据同步：
                    that.callModuleEventPort('copyChildComment', [result[0], curParentId]);
                    successCallBack();
                }, function (error) {
                    console.error(error);
                });
            },

            subModuleStart: function() {
                this.callSubModuleMethod('singleCommentRef', 'startModule', []);
                this.callSubModuleMethod('commentChildRef', 'startModule', []);
            },

            deleteRootComment: function(curCommentId, successCallBack, errorCallBack) {
                let that = this;
                // 出当前删除的评论是跟评论，判断是否需要彻底删除：
                this.cloneCommentData.isDelete = that.mac.enum.groupBlogComment.delete.yes;
                this.callModuleEventPort('commentDeleteEvent', [curCommentId, false]);
                // 如果有没删的子，则它也不删，否则彻底删除这个根：
                if(this.cloneCommentData.children.length > 0) {
                    for(let j = 0; j < this.cloneCommentData.children.length; j++) {
                        if(this.cloneCommentData.children[j].isDelete === that.mac.enum.groupBlogComment.delete.no) {
                            break;
                        } else if(j === this.cloneCommentData.children.length -1) {
                            this.callModuleEventPort('commentDeleteEvent', [curCommentId, true]);
                        }
                    }
                } else {
                    this.callModuleEventPort('commentDeleteEvent', [curCommentId, true]);
                }
                successCallBack();
            },

            deleteParentComment: function(parentCommentId) {
                for(let n = 0; n < this.cloneCommentData.children.length; n++) {
                    if(parentCommentId === this.cloneCommentData.children[n].commentId && this.cloneCommentData.children[n].isDelete === this.mac.enum.groupBlogComment.delete.yes) {
                        for(let i = 0; i < this.cloneCommentData.children.length; i++) {
                            if(this.cloneCommentData.children[i].parentId === parentCommentId) {
                                if(this.cloneCommentData.children[i].isDelete === this.mac.enum.groupBlogComment.delete.no) {
                                    return
                                }
                            } else if(i === this.cloneCommentData.children.length -1) {
                                for (let p = this.childCommentArr.length - 1; p >= 0; p--) {
                                    if (this.childCommentArr[p].para.curCommentId === parentCommentId) {
                                        this.childCommentArr.splice(p, 1);
                                        this.cloneCommentData.children.splice(n, 1);
                                        this.callModuleEventPort('deleteChildComment', [parentCommentId, true]);
                                        return
                                    }
                                }
                            }
                        }
                    }
                }
            },

            deleteComment: function (curCommentId, successCallBack, errorCallBack) {
                let that = this;
                let parentCommentId;
                // 2 它的子删除的情况下，判断其是否有未删除的子，有则它不删，否则彻底删除它：
                firstCommentValue:
                    for(let j = 0; j < this.cloneCommentData.children.length; j++) {
                        if(this.cloneCommentData.children[j].commentId === curCommentId) {
                            this.cloneCommentData.children[j].isDelete = that.mac.enum.groupBlogComment.delete.yes;
                            this.callModuleEventPort('deleteChildComment', [curCommentId, false]);
                            for(let m = 0; m < this.cloneCommentData.children.length; m++) {
                                // 判断删除的评论是否有子评论：
                                if(curCommentId === this.cloneCommentData.children[m].parentId) {
                                    // 当删除的评论有其他子评论，判断它的子评论是否被删除，如果有没被删除的子评论，则他也不用删除：
                                    if(this.cloneCommentData.children[m].isDelete === that.mac.enum.groupBlogComment.delete.no) {
                                        parentCommentId = this.cloneCommentData.children[j].parentId;
                                        if(parentCommentId !== this.cloneCommentData.commentId) {
                                            // 这个评论删除，再判断它的父还有没有没删除的子评论：
                                            that.deleteParentComment(parentCommentId);
                                        }
                                        break firstCommentValue;
                                    } else if(m === this.cloneCommentData.children.length -1) {
                                        for (let i = this.childCommentArr.length - 1; i >= 0; i--) {
                                            if (this.childCommentArr[i].para.curCommentId === curCommentId) {
                                                parentCommentId = this.cloneCommentData.children[j].parentId;
                                                this.childCommentArr.splice(i, 1);
                                                this.cloneCommentData.children.splice(j, 1);
                                                if(parentCommentId !== this.cloneCommentData.commentId) {
                                                    // 这个评论删除，再判断它的父还有没有没删除的子评论：
                                                    that.deleteParentComment(parentCommentId);
                                                }
                                                this.callModuleEventPort('deleteChildComment', [curCommentId, true]);
                                                break firstCommentValue;
                                            }
                                        }
                                    }
                                } else if (m === this.cloneCommentData.children.length - 1) {
                                    for (let i = this.childCommentArr.length - 1; i >= 0; i--) {
                                        if (this.childCommentArr[i].para.curCommentId === curCommentId) {
                                            parentCommentId = this.cloneCommentData.children[j].parentId;
                                            this.childCommentArr.splice(i, 1);
                                            this.cloneCommentData.children.splice(j, 1);
                                            if(parentCommentId !== this.cloneCommentData.commentId) {
                                                // 这个评论删除，再判断它的父还有没有没删除的子评论：
                                                that.deleteParentComment(parentCommentId);
                                            }
                                            this.callModuleEventPort('deleteChildComment', [curCommentId, true]);
                                            break firstCommentValue;
                                        }
                                    }
                                }
                            }
                        }
                    }

                // 当根评论是删除状态，同时没有未删除的子：
                if(this.childCommentArr.length === 0 && this.cloneCommentData.isDelete === that.mac.enum.groupBlogComment.delete.yes) {
                    this.callModuleEventPort('commentDeleteEvent', [this.cloneCommentData.commentId, true]);
                }
                successCallBack();
            },


            // 事件：
            nAuthorImgRef_clickEvent: function () {

            },

            nAuthorNameRef_textClickEvent: function () {

            },

            singleCommentRef_newCommentEvent: function (ref, terCommentId, curParentId, successCallBack, errorCallBack) {
                this.newComment(terCommentId, curParentId, successCallBack, errorCallBack);
            },
            commentChildRef_newCommentEvent: function (ref, terCommentId, curParentId, successCallBack, errorCallBack) {
                this.newComment(terCommentId, curParentId, successCallBack, errorCallBack);
            },

            singleCommentRef_inputNewComment: function (ref, cloudCommentId, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputNewComment', [cloudCommentId], successCallBack, errorCallBack);
            },
            commentChildRef_inputNewComment: function (ref, cloudCommentId, successCallBack, errorCallBack) {
                this.callModuleEventPort('inputNewComment', [cloudCommentId], successCallBack, errorCallBack);
            },
            commentChildRef_refreshDelComment: function (ref, terCommentId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshDelComment', [terCommentId], successCallBack, errorCallBack);
            },
            singleCommentRef_refreshDelComment: function (ref, terCommentId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshDelComment', [terCommentId], successCallBack, errorCallBack);
            },

            singleCommentRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            commentChildRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },

            singleCommentRef_commentDeleteEvent: function (ref, curCommentId, successCallBack, errorCallBack) {
                this.deleteRootComment(curCommentId, successCallBack, errorCallBack);
            },
            commentChildRef_commentDeleteEvent: function (ref, curCommentId, successCallBack, errorCallBack) {
                this.deleteComment(curCommentId, successCallBack, errorCallBack);
            },

            collapseRef_buttonClickEvent: function () {
                this.uploadComment();
            },
        }
    };
</script>
<style lang="scss">
    .comment-group-wrap {
        .comment-group-parent {

        }

        .comment-group-children-list {
            position: relative;
            margin-left: 58px;
            background-color: #f4f4f4;
            border-radius: 4px;
            margin-top: 10px;
            padding: 20px 20px 0 20px;

            .comment-group-triangle {
                position: absolute;
                left: 10px;
                top: -10px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 10px 10px 10px;
                border-color: transparent transparent #f4f4f4 transparent;
            }

            .comment-group-children-item {
                padding: 10px 0;
                border-bottom: 1px solid #e5e5e5;

                &:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }
            }

            .comment-item-collapse {
                /*border-top: 1px solid #e5e5e5;*/
                text-align: center;
            }
        }
    }
</style>