<template>
    <div id="publish-page-wrap">
        <keep-alive>
            <component
                    :is="pvt_blog_comp[pvt_currentRef.blog].componentName"
                    v-show="pvt_isShow.blog"
                    :refId="pvt_currentRef.blog"
                    :para="pvt_blog_para[pvt_currentRef.blog].para"
                    :attr="pvt_blog_attr[pvt_currentRef.blog].attr"
                    :ref="pvt_currentRef.blog">
            </component>
        </keep-alive>
    </div>
</template>

<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import notePublish from './notePublish';
    import articlePublish from './articlePublish';

    export default {
        name: 'pageGene',
        props: ['para', 'refId', "attr", 'blogData'],
        components: {
            notePublish,
            articlePublish
        },
        data: function () {
            return {
                curBlogId: null,

                mac: mac.mac,
                sys: {
                    api: null,
                    lib: null
                },
                outPara: null,
                // 工具内部变量
                // 因为不对外公开，为免和用户定义变量冲突，内部变量以pvt_开头
                pvt_isSubModuleStarted: false,

                // 容器 id 和 ref 的对应关系
                pvt_vesselRef: {
                    vesselId: ['blog', 'blog'],
                    ref: ['notePublishRef', 'articlePublishRef'],
                },

                // 各容器中当前活动的 ref；切换动态组件中的组件，只需要修改这里的ref
                pvt_currentRef: {
                    blog: 'notePublishRef'
                },

                // 各容器中模块显示状态；显示隐藏某组件，只需要修改这里的值
                pvt_isShow: {
                    blog: true
                },

                pvt_isMounted: {
                    notePublishRef: false,
                    articlePublishRef: false
                },
                // 因为目标模块处于非活动状态，其他模块调用目标模块的方法被 push 到这个方法队列中，条件允许再执行
                pvt_subModuleMethodQueue: {},
            }
        },
        mounted() {

        },
        computed: {
            pvt_blog_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.blog,
                    isShow: this.pvt_isShow.blog,
                    notePublishRef: {
                        componentName: 'notePublish',
                    },
                    articlePublishRef: {
                        componentName: 'articlePublish',
                    }
                }
            },
            pvt_blog_para: function () {
                return {
                    articlePublishRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_blog_comp.isShow,
                            $isMounted: this.pvt_isMounted.articlePublishRef || this.pvt_isMounted.notePublishRef,
                            blogId: this.curBlogId
                        },
                    },
                    notePublishRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_blog_comp.isShow,
                            $isMounted: this.pvt_isMounted.articlePublishRef || this.pvt_isMounted.notePublishRef,
                            blogId: this.curBlogId
                        },
                    }
                }
            },
            pvt_blog_attr: function () {
                return {
                    articlePublishRef: {
                        attr: {},
                    },
                    notePublishRef: {
                        attr: {},
                    }
                };
            },
        },
        provide: function () {
            return {
                sys: this.sys
            }
        },
        watch: {
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
                            $this.startGene(function (result) {

                            }, function (error) {
                                console.log(error)
                            })
                        }, function (error) {
                            console.log(error);
                        });

                    }
                }
            }
        },

        methods: {
            startGene: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let portName;
                let inputData;
                let expression = '',
                    start = null,
                    total = null,
                    sort = ['id,asc'],
                    destGeneSite = '';
                var fnname = 'pageGene.startModule';
                if (successCallBack !== null) {
                    errorCallBack = that.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                var para = errorCallBack;
                while (1) {
                    if (that.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            that.curBlogId = null;

                            portName = that.mac.tb.userInfo;
                            inputData = null;

                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startGene(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'init':
                            that.curBlogId = that.blogData.blogId;
                            if(that.blogData.type === 'note') {
                                this.activateModule('notePublishRef', function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.startGene(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                });
                            } else {
                                this.activateModule('articlePublishRef', function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.startGene(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                });
                            }
                            break;
                        case 'myAttention':
                            portName = 'myAttention';
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'myFans';
                                if (++dbFlag === 2) {
                                    that.startGene(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'myFans':
                            portName = 'myFans';
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'myFriend';
                                if (++dbFlag === 2) {
                                    that.startGene(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'myFriend':
                            portName = 'myFirend';
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startGene(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                    }
                    if (++dbFlag === 1) {
                        return;
                    }
                }
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },

            // 事件监听：
            articlePublishRef_publishEnd: function (ref, terLabelId, successCallBack, errorCallBack) {
                this.callModuleEventPort('publishEnd', [terLabelId], successCallBack, errorCallBack);
            },
            notePublishRef_publishEnd: function (ref, terLabelId, successCallBack, errorCallBack) {
                this.callModuleEventPort('publishEnd', [terLabelId], successCallBack, errorCallBack);
            },

            notePublishRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            },
            articlePublishRef_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.callModuleEventPort('setBlogIn', [type, data], successCallBack, errorCallBack);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #publish-page-wrap {
        width: 100%;
        height: 100%;
        font-family: SourceHanSansCN-Medium;
    }
</style>
