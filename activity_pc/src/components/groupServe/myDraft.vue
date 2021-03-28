<template>
    <div id="my-group-draft-wrap">
        <div v-if="!blogIdArr.length" class="empty-text">
            <lm-link-text
                    :para="pvt_errorText_para[pvt_currentRef.errorText].para"
                    :attr="pvt_errorText_attr[pvt_currentRef.errorText].attr"
                    :refId="pvt_currentRef.errorText"
                    :ref="pvt_currentRef.errorText">
            </lm-link-text>
        </div>
        <div class="my-draft-list" v-if="blogIdArr.length>0">
            <div class="my-draft-item" v-for="(item, index) in pvt_draftC_fordata[pvt_currentRef.draftC].data" :key="index">
                <draftC
                        v-show="pvt_isShow.draftC"
                        :is="pvt_draftC_comp[pvt_currentRef.draftC].componentName"
                        :ref="pvt_currentRef.draftC"
                        :refId="pvt_currentRef.draftC"
                        :para="Object.assign({}, pvt_draftC_fordata[pvt_currentRef.draftC].status, item.para)"
                        :attr="item.attr">
                </draftC>
            </div>
            <div class="comment-onload" v-if="isOnload">
                <i class="el-icon-loading"></i>
            </div>
        </div>
    </div>
</template>
<script>
    import draftC from './draftComponent';
    import textC from '@/components/baseComponent/textComponent.vue';

    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {
            draftC,
            textC
        },
        data: function () {
            return {
                mac: mac.mac,
                myType: 1,
                mySite: '',
                myID: 1,

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
                    vesselId: ['draftC', 'errorText'],
                    ref: ['draftCRef', 'errorTextRef']
                },

                pvt_currentRef: {
                    draftC: 'draftCRef',
                    errorText: 'errorTextRef',
                },

                pvt_isShow: {
                    draftC: true,
                    errorText: true
                },
                pvt_isMounted: {
                    draftCRef: false,
                    errorTextRef: false
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_draftC_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.draftC,
                    isShow: this.pvt_isShow.draftC,
                    draftCRef: {componentName: "draftC"},
                }
            },
            pvt_draftC_fordata: function () {
                return {
                    draftCRef: {
                        status: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_draftC_comp.isShow,
                            $isMounted: this.pvt_isMounted.draftCRef,
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
                                $value: ['暂无草稿...']
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
                // 初始化：
                this.mySite = that.getCookie('userSite');
                this.myId = that.getCookie('userID');
                this.myType = that.getCookie('userType');

                window.scrollTo(0, 0);
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
                            expression =  that.mac.fd.groupBlog.status + '=' + that.mac.enum.groupBlog.status.draft + '&&' + that.mac.fd.groupBlog.author + '=' + that.myId;
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
                                    that.callSubModuleMethod('draftCRef', 'startModule', [], function () {
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
            refreshDraft: function(terBlogId) {
                let that = this;
                let tableName = that.mac.tb.groupBlog;
                let dbData= {};
                dbData[that.mac.fd.id] = [terBlogId];
                dbData[that.mac.fd.groupBlog.status] = [that.mac.enum.groupBlog.status.delete];
                that.callModuleEventPort('refreshTerminal', [tableName, dbData], function () {
                    that.blogIdArr = [];
                    that.isAllBlog = false;
                    that.recommendStart = 0;
                    that.inputBlog(function () {
                    }, function () {
                    });
                }, function () {
                });
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

            draftCRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            draftCRef_draftClickEvent: function (ref, blogType, blogId) {
                this.callModuleEventPort('draftClickEvent', [blogType, blogId]);
            },
            draftCRef_getCloudBlogId: function (ref, terBlogId, successCallBack, errorCallBack) {
                this.callModuleEventPort('getCloudBlogId', [terBlogId], successCallBack, errorCallBack);
            },
            draftCRef_draftDelete: function (ref, terBlogId) {
                this.refreshDraft(terBlogId);
            },

        }
    };
</script>
<style lang="scss">
    #my-group-draft-wrap {
        .lm-button {
            /*text-align: left !important;*/
        }
        .empty-text {
            background-color: #fff;
            padding: 10px;
            border-radius: 4px;
            box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
        }
        .my-draft-list {
            padding: 20px;
            background-color: #fff;
            margin-bottom: 10px;
            border-radius: 4px;
            box-shadow:0 0 8px 0 rgba(48,49,51,0.1);
            .my-draft-item {
                border-bottom: 1px solid #f5f7fa;
                &:last-child {
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
</style>