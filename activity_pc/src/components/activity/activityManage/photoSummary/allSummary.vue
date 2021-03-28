<template>
    <div class="all-summary-wrap">
        <div class="all-summary-tabs">
            <lm-tabs
                    ref="tabsRef"
                    refId="tabsRef"
                    v-show="pvt_isShow.tabs === 'tabsRef'"
                    :paraVarPair="pvt_tabs.tabsRef.paraVarPair"
                    :para="pvt_tabs.tabsRef.para"
                    :attr="pvt_tabs.tabsRef.attr">
            </lm-tabs>
        </div>
        <div class="all-summary-content">
            <photoSummary
                    ref="photoSummaryRef"
                    refId="photoSummaryRef"
                    v-show="pvt_isShow.photoSummary === 'photoSummaryRef'"
                    :paraVarPair="pvt_photoSummary.photoSummaryRef.paraVarPair"
                    :para="pvt_photoSummary.photoSummaryRef.para"
                    :attr="pvt_photoSummary.photoSummaryRef.attr">
            </photoSummary>
            <videoSummary
                    ref="videoSummaryRef"
                    refId="videoSummaryRef"
                    v-show="pvt_isShow.videoSummary === 'videoSummaryRef'"
                    :paraVarPair="pvt_videoSummary.videoSummaryRef.paraVarPair"
                    :para="pvt_videoSummary.videoSummaryRef.para"
                    :attr="pvt_videoSummary.videoSummaryRef.attr">
            </videoSummary>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import photoSummary from './photoSummary';
    import videoSummary from './videoSummary';

    export default {
        components: {videoSummary, photoSummary},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                curTabIndex: 0,
                initVideo: false,

                mac: mac.mac,

                pvt_subModuleMap: {
                    subModule: ['tabsRef', 'photoSummaryRef', 'videoSummaryRef'],
                    vessel: ['tabs', 'photoSummary', 'videoSummary'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    tabs: null,
                    photoSummary: null,
                    videoSummary: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['photoThumbnailGetIn', 'photoNewIn', 'photoDeleteIn', 'photoModifyIn', 'photoOriginalGetIn'],
            }
        },
        computed: {
            pvt_tabs: function () {
                return {
                    tabsRef: {
                        paraVarPair: {},
                        para: {
                          tabData: [
                              {val: '图片', icon: '', disable: ''},
                              {val: '视频', icon: '', disable: ''},
                          ]
                        },
                        attr: {
                            checked: this.curTabIndex,
                        }
                    }
                }
            },

            pvt_photoSummary: function () {
                return {
                    photoSummaryRef: {
                        paraVarPair: {},
                        para: {
                            curActivityId: this.para.activityId
                        },
                        attr: {

                        }
                    }
                }
            },

            pvt_videoSummary: function () {
                return {
                    videoSummaryRef: {
                        paraVarPair: {},
                        para: {
                            curActivityId: this.para.activityId
                        },
                        attr: {

                        }
                    }
                }
            }
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'allSummary_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    tabsRef: 'tabsRef',
                    photoSummaryRef: 'photoSummaryRef',
                    videoSummaryRef: 'videoSummaryRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'start_2':
                            that.forceUpdateData(function () {
                                that.sm[ref.tabsRef].startModule(function () {
                                    para.nStep = 'start_3';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack);
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.photoSummaryRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
                            let refArr = ['tabsRef', 'photoSummaryRef'];
                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
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

            labelChange: function(index) {
                let that = this;

                if(that.curTabIndex === index) {
                    return
                }
                that.curTabIndex = index;

                switch (index) {
                    case 0:
                        that.showSubModule('videoSummaryRef', false, function () {
                            that.showSubModule('photoSummaryRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 1:
                        if(that.initVideo) {
                            that.showSubModule('photoSummaryRef', false, function () {
                                that.showSubModule('videoSummaryRef', true, function () {
                                }, function () {
                                });
                            }, function () {
                            });
                        } else {
                            that.initVideo = true;
                            that.sm.videoSummaryRef.startModule(function () {
                                that.showSubModule('photoSummaryRef', false, function () {
                                    that.showSubModule('videoSummaryRef', true, function () {
                                    }, function () {
                                    });
                                }, function () {
                                });
                            }, function () {
                            });
                        }
                        break;
                }
            },


            tabsRef_labelClickEvent: function (index) {
                this.labelChange(index);
            },
            photoSummaryRef_photoDeleteIn: function (terId) {
                this.ep.photoDeleteIn(terId);
            },
            photoSummaryRef_photoModifyIn: function (terId, title) {
                this.ep.photoModifyIn(terId, title);
            },
            photoSummaryRef_photoNewIn: function (terId) {
                this.ep.photoNewIn(terId);
            },
            videoSummaryRef_photoDeleteIn: function (terId) {
                this.ep.photoDeleteIn(terId);
            },
            videoSummaryRef_photoModifyIn: function (terId, title) {
                this.ep.photoModifyIn(terId, title);
            },
            videoSummaryRef_photoNewIn: function (terId) {
                this.ep.photoNewIn(terId);
            },
        }
    }
</script>

<style lang="scss">
    .all-summary-wrap {
        .all-summary-tabs {
            padding: 20px;
        }
      .el-tabs__nav-scroll {
          padding-left: 20px;
      }
    }
</style>
