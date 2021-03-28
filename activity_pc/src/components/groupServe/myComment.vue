<template>
    <div id="my-comment-wrap">
        <div v-if="commentIdArr.length===0" class="empty-text">
            <lm-link-text
                    :para="pvt_errorText_para[pvt_currentRef.errorText].para"
                    :attr="pvt_errorText_attr[pvt_currentRef.errorText].attr"
                    :refId="pvt_currentRef.errorText"
                    :ref="pvt_currentRef.errorText">
            </lm-link-text>
        </div>
        <div class="recommend-blog-list" v-if="commentIdArr.length>0">
            <div class="recommend-blog-item" v-for="(item, index) in pvt_blogC_fordata[pvt_currentRef.blogC].data" :key="index">
                <blogC
                        v-show="pvt_isShow.blogC"
                        :is="pvt_blogC_comp[pvt_currentRef.blogC].componentName"
                        :ref="pvt_currentRef.blogC"
                        :refId="pvt_currentRef.blogC"
                        :para="Object.assign({}, pvt_blogC_fordata[pvt_currentRef.blogC].status, item.para)"
                        :attr="item.attr">
                </blogC>
            </div>
            <div class="comment-onload" style="font-size: 12px;" v-if="isOnload">
                <i class="el-icon-loading" style="font-size: 16px;"></i>
                正在加载中...
            </div>
        </div>
    </div>
</template>
<script>
    import blogC from './blogComment';

    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {
            blogC,
        },
        data: function () {
            return {
                mac: mac.mac,
                myType: 1,
                mySite: '',
                myID: 1,

                recommendStart: 0,
                inputTotal: 10,
                commentIdArr: [],
                isAllComment: false,
                isOnload: false,

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['blogC', 'errorText'],
                    ref: ['blogCRef', 'errorTextRef']
                },

                pvt_currentRef: {
                    blogC: 'blogCRef',
                    errorText: 'errorTextRef',
                },

                pvt_isShow: {
                    blogC: true,
                    errorText: true,
                },
                pvt_isMounted: {
                    blogCRef: false,
                    errorTextRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_blogC_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.blogC,
                    isShow: this.pvt_isShow.blogC,
                    blogCRef: {componentName: "blogC"},
                }
            },
            pvt_blogC_fordata: function () {
                return {
                    blogCRef: {
                        status: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_blogC_comp.isShow,
                            $isMounted: this.pvt_isMounted.blogCRef,
                        },
                        data: this.commentIdArr,
                    }
                }
            },

            pvt_errorText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.errorText,
                    isShow: this.pvt_isShow.errorText,
                    errorTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_errorText_para: function () {
                return {
                    errorTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_errorText_comp.isShow,
                            $isMounted: this.pvt_isMounted.errorTextRef,
                            textData: {
                                $table: '',
                                $field: [],
                                $value: ['暂无评论...']
                            },
                        },
                    },
                };
            },
            pvt_errorText_attr: function () {
                return {
                    errorTextRef: {
                        attr: {
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
                window.scrollTo(0,0);
                // 绑定滑动事件：
                window.onscroll = function () {
                    that.pageScroll();
                };

                this.mySite = that.getCookie('userSite');
                this.myId = that.getCookie('userID');
                this.myType = that.getCookie('userType');

                this.commentIdArr = [];
                this.isAllComment = false;
                this.recommendStart = 0;

                that.callModuleEventPort('inputCloudBlog', [], function () {
                    that.inputComment(function () {
                        successCallBack();
                    }, function () {
                    });
                }, function () {
                });
            },

            inputComment: function(successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
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
                            expression =  that.mac.fd.groupBlogComment.delete + '!=' + that.mac.enum.groupBlogComment.delete.yes + '&&' + that.mac.fd.groupBlogComment.observer + '=' + that.myId;
                            start = that.recommendStart;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            // sort = ['id,asc'];
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlogComment;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    for(let i = 0; i < result.length; i++) {
                                        that.commentIdArr.push({
                                            para: {
                                                curCommentId: result[i]
                                            },
                                            attr: {}
                                        })
                                    }
                                }
                                if(!result || result.length < 10) {
                                    that.isAllComment = true;
                                } else {
                                    that.isAllComment = false;
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputComment(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
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

            pageScroll: function() {
                if(!this.isAllComment) {
                    let that = this;
                    // 滚动条滚动时，距离顶部的距离
                    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                    // 可视区的高度
                    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                    // 滚动条的总高度
                    var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;

                    if(scrollTop + clientHeight >= (scrollHeight-80)){
                        that.recommendStart += 10;
                        that.isOnload = true;
                        that.isAllComment = true;
                        that.callModuleEventPort('inputCloudBlog', [], function () {
                            that.inputComment(function () {
                                that.isOnload = false;
                            }, function () {
                            });
                        }, function () {
                        });
                    }
                }
            },

            blogCRef_blogClickEvent: function (ref, blogId, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, btn]);
            },
            blogCRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },
        }
    };
</script>
<style lang="scss">
    #my-comment-wrap {
        .empty-text {
            background-color: #fff;
            padding: 10px;
            border-radius: 4px;
            box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
        }
        .recommend-blog-list {
            padding: 20px;
            background-color: #fff;
            margin-bottom: 10px;
            border-radius: 4px;
            box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
            .recommend-blog-item {
                padding: 20px 0;
                border-bottom: 1px solid #eee;
                &:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
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
</style>
