<template>
    <div class="draft-blog-wrap">
        <div class="draft-blog-content">
            <lm-link-text
                    :para="pvt_blogContent_para[pvt_currentRef.blogContent].para"
                    :attr="pvt_blogContent_attr[pvt_currentRef.blogContent].attr"
                    :refId="pvt_currentRef.blogContent"
                    :ref="pvt_currentRef.blogContent">
            </lm-link-text>
        </div>
        <div class="draft-info">
            <div class="release-time">
                <lm-link-text
                        :para="pvt_releaseTime_para[pvt_currentRef.releaseTime].para"
                        :attr="pvt_releaseTime_attr[pvt_currentRef.releaseTime].attr"
                        :refId="pvt_currentRef.releaseTime"
                        :ref="pvt_currentRef.releaseTime">
                </lm-link-text>
            </div>
            <!--<div class="total-num">-->
                <!--<lm-link-text-->
                        <!--:para="pvt_total_para[pvt_currentRef.total].para"-->
                        <!--:attr="pvt_total_attr[pvt_currentRef.total].attr"-->
                        <!--:refId="pvt_currentRef.total"-->
                        <!--:ref="pvt_currentRef.total">-->
                <!--</lm-link-text>-->
            <!--</div>-->
            <div class="delete-btn">
                <lm-button
                        :para="pvt_deleteBtn_para[pvt_currentRef.deleteBtn].para"
                        :attr="pvt_deleteBtn_attr[pvt_currentRef.deleteBtn].attr"
                        :refId="pvt_currentRef.deleteBtn"
                        :ref="pvt_currentRef.deleteBtn">
                </lm-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {},
        data: function () {
            return {
                mac: mac.mac,

                isBold: false,
                isDelete: false,
                terBlogId: null,
                blogType: 0,
                blogAbstract: '',

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['releaseTime', 'blogContent', 'total', 'deleteBtn'],
                    ref: ['releaseTimeRef', 'blogContentRef', 'totalRef', 'deleteBtnRef']
                },

                pvt_currentRef: {
                    deleteBtn: 'deleteBtnRef',
                    total: 'totalRef',
                    releaseTime: 'releaseTimeRef',
                    blogContent: 'blogContentRef',
                },

                pvt_isShow: {
                    deleteBtn: true,
                    total: true,
                    releaseTime: true,
                    blogContent: true,
                },
                pvt_isMounted: {
                    deleteBtnRef: false,
                    totalRef: false,
                    releaseTimeRef: false,
                    blogContentRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_deleteBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.deleteBtn,
                    isShow: this.pvt_isShow.deleteBtn,
                    deleteBtnRef: {
                        componentName: 'imageC',
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
                                $arrValue: ['删除', '']
                            }],
                        },
                    },
                };
            },
            pvt_deleteBtn_attr: function () {
                return {
                    deleteBtnRef: {
                        attr: {
                            size: 'mini',
                            type: 'text'
                        },
                    },
                };
            },

            pvt_total_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.total,
                    isShow: this.pvt_isShow.total,
                    totalRef: {
                        componentName: 'radioC',
                    },
                }
            },

            pvt_total_para: function () {
                return {
                    totalRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_total_comp.isShow,
                            $isMounted: this.pvt_isMounted.totalRef,
                            textData: {
                                $table: '',
                                $value: ['共100字']
                            },
                        },
                    },
                };
            },
            pvt_total_attr: function () {
                return {
                    totalRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#909399',
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
                                $table: {},
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
                            fontWeight: this.isBold
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
                            that.blogAbstract = '';
                            that.isBold = false;
                            that.isDelete = false;
                            that.terBlogId = null;
                            that.blogType = 0;

                            para.nStep = 'blogData';
                            dbFlag++;
                            break;

                        case 'blogData':
                            tableName = that.mac.tb.groupBlog;
                            dbData = {};
                            dbData[that.mac.fd.id] = [this.para.curBlogId];
                            dbData[that.mac.fd.groupBlog.blogType] = [];
                            dbData[that.mac.fd.groupBlog.details] = [];
                            dbData[that.mac.fd.groupBlog.time] = [];
                            dbData[that.mac.fd.groupBlog.name] = [];
                            dbData[that.mac.fd.groupBlog.abstract] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.blogType = dbData[that.mac.fd.groupBlog.blogType][0];
                                if(dbData[that.mac.fd.groupBlog.blogType][0] === that.mac.enum.groupBlog.blogType.post) {
                                    that.blogAbstract = dbData[that.mac.fd.groupBlog.abstract][0];
                                } else {
                                    that.blogAbstract = dbData[that.mac.fd.groupBlog.name][0];
                                    that.isBold = true;
                                }

                                // 判断时间的格式：
                                var time = dbData[that.mac.fd.groupBlog.time][0];
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
                            record = [this.para.curBlogId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                that.terBlogId = result[0];
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

            openBlogDetail: function () {
                this.callModuleEventPort('draftClickEvent', [this.blogType, this.terBlogId]);
            },

            deleteDraft: function() {
                let that = this;

                that.$confirm('此操作将删除该草稿, 是否继续?', '提示', {
                    confirmButtonText: '删除',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let blogData = {
                        blogID: that.terBlogId,
                    };
                    that.callModuleEventPort('setBlogIn', [that.mac.setBlog.type.deleteBlog, blogData], function () {
                        that.callModuleEventPort('draftDelete', [that.terBlogId]);
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

            blogContentRef_textClickEvent: function () {
                this.openBlogDetail();
            },
            deleteBtnRef_buttonClickEvent: function () {
                this.deleteDraft();
            },
        }
    };
</script>
<style lang="scss">
    .draft-blog-wrap {
        padding: 10px 20px 10px 0;
        /*border-bottom: 1px solid #eee;*/
        .link-text {
            text-indent: 0 !important;

            &:hover {
                border-bottom: none;
            }
        }

        .draft-blog-content {
            margin-bottom: 6px;
        }
        .draft-info {
            .release-time, .total-num, .delete-btn {
                display: inline-block;
                margin-right: 10px;
            }
        }
    }
</style>