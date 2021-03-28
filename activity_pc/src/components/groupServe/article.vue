<template>
    <div id="all-article-wrap">
        <div class="publish-btns">
            <div class="note-btn">
                <lm-button
                        :para="pvt_noteBtn_para[pvt_currentRef.noteBtn].para"
                        :attr="pvt_noteBtn_attr[pvt_currentRef.noteBtn].attr"
                        :refId="pvt_currentRef.noteBtn"
                        :ref="pvt_currentRef.noteBtn">
                </lm-button>
            </div>
            <div class="article-btn">
                <lm-button
                        :para="pvt_articleBtn_para[pvt_currentRef.articleBtn].para"
                        :attr="pvt_articleBtn_attr[pvt_currentRef.articleBtn].attr"
                        :refId="pvt_currentRef.articleBtn"
                        :ref="pvt_currentRef.articleBtn">
                </lm-button>
            </div>
        </div>
        <div v-if="blogIdArr.length===0" class="empty-text">
            <lm-link-text
                    :para="pvt_errorText_para[pvt_currentRef.errorText].para"
                    :attr="pvt_errorText_attr[pvt_currentRef.errorText].attr"
                    :refId="pvt_currentRef.errorText"
                    :ref="pvt_currentRef.errorText">
            </lm-link-text>
        </div>
        <div class="recommend-blog-list" v-if="blogIdArr.length>0">
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
            <div class="comment-onload" v-if="isOnload">
                <i class="el-icon-loading"></i>
            </div>
        </div>
    </div>
</template>
<script>
    import blogC from './blogComponent';
    import textC from '@/components/baseComponent/textComponent.vue';

    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {
            blogC,
            textC
        },
        data: function () {
            return {
                mac: mac.mac,

                recommendStart: 0,
                inputTotal: 10,
                blogIdArr: [],
                cloneBlogIdArr: [],
                isAllBlog: false,
                isOnload: false,

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['blogC', 'errorText', 'noteBtn', 'articleBtn'],
                    ref: ['blogCRef', 'errorTextRef', 'noteBtnRef', 'articleBtnRef']
                },

                pvt_currentRef: {
                    blogC: 'blogCRef',
                    errorText: 'errorTextRef',
                    noteBtn: 'noteBtnRef',
                    articleBtn: 'articleBtnRef',
                },

                pvt_isShow: {
                    blogC: true,
                    errorText: true,
                    noteBtn: true,
                    articleBtn: true,
                },
                pvt_isMounted: {
                    blogCRef: false,
                    errorTextRef: false,
                    noteBtnRef: false,
                    articleBtnRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_noteBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.noteBtn,
                    isShow: this.pvt_isShow.noteBtn,
                    noteBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_noteBtn_para: function () {
                return {
                    noteBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_noteBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.noteBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: ['发帖', '']
                            }],
                        },
                    },
                };
            },
            pvt_noteBtn_attr: function () {
                return {
                    noteBtnRef: {
                        attr: {
                            type: 'info',
                            width: '100px',
                            height: '34px'
                        },
                    },
                };
            },

            pvt_articleBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.articleBtn,
                    isShow: this.pvt_isShow.articleBtn,
                    articleBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_articleBtn_para: function () {
                return {
                    articleBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_articleBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.articleBtnRef,
                            name: [{
                                $table: '',
                                $arrField: null,
                                $arrValue: ['写文章', '']
                            }],
                        },
                    },
                };
            },
            pvt_articleBtn_attr: function () {
                return {
                    articleBtnRef: {
                        attr: {
                            type: 'info',
                            width: '100px',
                            height: '34px'
                        },
                    },
                };
            },

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
                        data: this.blogIdArr,
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
                                $value: ['暂无文章...']
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
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                window.scrollTo(0,0);
                // 绑定滑动事件：
                window.onscroll = function () {
                    that.pageScroll();
                };

                this.blogIdArr = [];
                this.isAllBlog = false;
                this.recommendStart = 0;

                that.callModuleEventPort('inputCloudBlog', [], function () {
                    that.inputBlog(function () {
                        successCallBack();
                    }, function () {
                    });
                }, function () {
                });
            },

            inputBlog: function(successCallBack, errorCallBack) {
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
                            expression =  that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.release + '&&' + that.mac.fd.groupBlog.blogType + '=' + that.mac.enum.groupBlog.blogType.article;
                            start = that.recommendStart;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            // sort = ['id,asc'];
                            destGeneSite = '';
                            portName = that.mac.tb.groupBlog;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    for(let i = 0; i < result.length; i++) {
                                        that.blogIdArr.push({
                                            para: {
                                                curBlogId: result[i]
                                            },
                                            attr: {}
                                        })
                                    }
                                }
                                if(!result || result.length < 10) {
                                    that.isAllBlog = true;
                                } else {
                                    that.isAllBlog = false;
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputBlog(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'end':
                            if (that.isEqual(that.blogIdArr, that.cloneBlogIdArr)) {
                                if(that.blogIdArr.length > 0) {
                                    that.callSubModuleMethod('blogCRef', 'startModule', [], function () {
                                    }, function () {
                                    });
                                }
                            }
                            that.cloneBlogIdArr = JSON.parse(JSON.stringify(that.blogIdArr));
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            pageScroll: function() {
                if(!this.isAllBlog) {
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
                        that.isAllBlog = true;
                        that.callModuleEventPort('inputCloudBlog', [], function () {
                            that.inputBlog(function () {
                                that.isOnload = false;
                            }, function () {
                            });
                        }, function () {
                        });
                    }
                }
            },

            isEqual: function (a, b) {
                //如果a和b本来就全等
                if (a == b) {
                    //判断是否为0和-0
                    return a !== 0 || 1 / a == 1 / b;
                }
                //判断是否为null和undefined
                if (a == null || b == null) {
                    return a == b;
                }
                //接下来判断a和b的数据类型
                var classNameA = toString.call(a),
                    classNameB = toString.call(b);
                //如果数据类型不相等，则返回false
                if (classNameA !== classNameB) {
                    return false;
                }
                //如果数据类型相等，再根据不同数据类型分别判断
                switch (classNameA) {
                    case '[object RegExp]':
                    case '[object String]':
                        //进行字符串转换比较
                        return '' + a == '' + b;
                    case '[object Number]':
                        //进行数字转换比较,判断是否为NaN
                        if (+a !== +a) {
                            return +b !== +b;
                        }
                        //判断是否为0或-0
                        return +a == 0 ? 1 / +a == 1 / b : +a == +b;
                    case '[object Date]':
                    case '[object Boolean]':
                        return +a == +b;
                }
                //如果是对象类型
                if (classNameA == '[object Object]') {
                    //获取a和b的属性长度
                    var propsA = [], propsB = [];
                    for (let i in a) {
                        if (a.hasOwnProperty(i)) {
                            propsA.push(i)
                        }
                    }
                    for (let i in b) {
                        if (b.hasOwnProperty(i)) {
                            propsB.push(i)
                        }
                    }
                    if (propsA.length != propsB.length) {
                        return false;
                    }
                    for (var i = 0; i < propsA.length; i++) {
                        var propName = propsA[i];
                        //如果对应属性对应值不相等，则返回false
                        if (a[propName] !== b[propName]) {
                            return false;
                        }
                    }
                    return true;
                }
                //如果是数组类型
                if (classNameA == '[object Array]') {
                    if (a.toString() == b.toString()) {
                        return true;
                    }
                    return false;
                }
            },


            articleBtnRef_buttonClickEvent: function () {
                this.callModuleEventPort('publishArticle', []);
            },
            noteBtnRef_buttonClickEvent: function () {
                this.callModuleEventPort('publishNote', []);
            },
            blogCRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            blogCRef_blogClickEvent: function (ref, blogId, btn) {
                this.callModuleEventPort('blogClickEvent', [blogId, btn]);
            },
            blogCRef_refreshData: function (ref, tableName, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshData', [tableName, terBlogId], successCallBack, errorCallBack);
            },
            blogCRef_refreshTerminal: function (ref, tableName, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('refreshTerminal', [tableName, data], successCallBack, errorCallBack);
            },

        }
    };
</script>
<style lang="scss">
    #all-article-wrap {
        .lm-button {
            /*text-align: left !important;*/
        }
        .empty-text {
            background-color: #fff;
            padding: 10px;
            border-radius: 4px;
            box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
        }
        .publish-btns {
            background-color: #fff;
            border-radius: 4px;
            box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
            padding: 10px 20px 10px 10px;
            margin-bottom: 10px;
            text-align: right;
            .lm-button .el-button--info {
                background-color: #12B0FF;
                border: none;
                &:hover {
                    background-color: rgba(18,176,255,0.4);
                }
            }
            .note-btn {
                display: inline-block;
            }

            .article-btn {
                display: inline-block;
                margin-left: 10px;
            }
        }
        .recommend-blog-list {
            .recommend-blog-item {
                padding: 20px 20px 0 20px;
                border-bottom: 1px solid #eee;
                background-color: #fff;
                margin-bottom: 10px;
                border-radius: 4px;
                box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
                &:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
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
