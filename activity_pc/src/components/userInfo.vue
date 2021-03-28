<template>
    <div id="user-info">
        <div class="info-img">
            <img src="../assets/logo.png" width="100%" height="100%" alt="">
            <!--<imageC-->
                    <!--:para="pvt_img_para[pvt_currentRef.img].para"-->
                    <!--:attr="pvt_img_attr[pvt_currentRef.img].attr"-->
                    <!--:refId="pvt_currentRef.img"-->
                    <!--:ref="pvt_currentRef.img">-->
            <!--</imageC>-->
        </div>
        <div class="info-name">
            <lm-link-text
                    class="name-text"
                    :para="pvt_name_para[pvt_currentRef.name].para"
                    :attr="pvt_name_attr[pvt_currentRef.name].attr"
                    :refId="pvt_currentRef.name"
                    :ref="pvt_currentRef.name">
            </lm-link-text>
        </div>
        <div class="info-detail">
            <div class="info-friend">
                <div class="friend-num">
                    <textC
                            class="detail-text"
                            :para="pvt_friendNum_para[pvt_currentRef.friendNum].para"
                            :attr="pvt_friendNum_attr[pvt_currentRef.friendNum].attr"
                            :refId="pvt_currentRef.friendNum"
                            :ref="pvt_currentRef.friendNum">
                    </textC>
                </div>
                <div class="friend-text">
                    <textC
                            class="detail-text"
                            :para="pvt_friendText_para[pvt_currentRef.friendText].para"
                            :attr="pvt_friendText_attr[pvt_currentRef.friendText].attr"
                            :refId="pvt_currentRef.friendText"
                            :ref="pvt_currentRef.friendText">
                    </textC>
                </div>
            </div>
            <div class="info-follow">
                <div class="follow-num">
                    <textC
                            class="detail-text"
                            :para="pvt_followNum_para[pvt_currentRef.followNum].para"
                            :attr="pvt_followNum_attr[pvt_currentRef.followNum].attr"
                            :refId="pvt_currentRef.followNum"
                            :ref="pvt_currentRef.followNum">
                    </textC>
                </div>
                <div class="follow-text">
                    <textC
                            class="detail-text"
                            :para="pvt_followText_para[pvt_currentRef.followText].para"
                            :attr="pvt_followText_attr[pvt_currentRef.followText].attr"
                            :refId="pvt_currentRef.followText"
                            :ref="pvt_currentRef.followText">
                    </textC>
                </div>
            </div>
            <div class="info-fans">
                <div class="fans-num">
                    <textC
                            class="detail-text"
                            :para="pvt_fansNum_para[pvt_currentRef.fansNum].para"
                            :attr="pvt_fansNum_attr[pvt_currentRef.fansNum].attr"
                            :refId="pvt_currentRef.fansNum"
                            :ref="pvt_currentRef.fansNum">
                    </textC>
                </div>
                <div class="fans-text">
                    <textC
                            class="detail-text"
                            :para="pvt_fansText_para[pvt_currentRef.fansText].para"
                            :attr="pvt_fansText_attr[pvt_currentRef.fansText].attr"
                            :refId="pvt_currentRef.fansText"
                            :ref="pvt_currentRef.fansText">
                    </textC>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    import imageC from '@/components/baseComponent/imageComponent.vue';
    import textC from '@/components/baseComponent/textComponent.vue';
    import buttonC from '@/components/baseComponent/buttonComponent.vue';

    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {
            imageC,
            textC,
            buttonC
        },
        data: function () {
            return {
                userAttention: 0,
                userFans: 0,
                userFriend: 0,
                curUserInfoId: null,


                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['img', 'name', 'sexIcon', 'friendNum', 'friendText', 'fansNum', 'fansText', 'followNum', 'followText', 'noteBtn', 'articleBtn'],
                    ref: ['imgRef', 'nameRef', 'sexIconRef', 'friendNumRef', 'friendTextRef', 'fansNumRef', 'fansTextRef', 'followNumRef', 'followTextRef', 'noteBtnRef', 'articleBtnRef']
                },

                pvt_currentRef: {
                    img: 'imgRef',
                    name: 'nameRef',
                    friendNum: 'friendNumRef',
                    friendText: 'friendTextRef',
                    fansNum: 'fansNumRef',
                    fansText: 'fansTextRef',
                    followNum: 'followNumRef',
                    followText: 'followTextRef',
                    noteBtn: 'noteBtnRef',
                    articleBtn: 'articleBtnRef',
                    sexIcon: 'sexIconRef',
                },

                pvt_isShow: {
                    img: true,
                    name: true,
                    friendNum: true,
                    friendText: true,
                    fansNum: true,
                    fansText: true,
                    followNum: true,
                    followText: true,

                    noteBtn: true,
                    articleBtn: true,
                    sexIcon: true,
                },
                pvt_isMounted: {
                    imgRef: false,
                    nameRef: false,
                    friendNumRef: false,
                    friendTextRef: false,
                    fansNumRef: false,
                    fansTextRef: false,
                    followNumRef: false,
                    followTextRef: false,

                    noteBtnRef: false,
                    articleBtnRef: false,
                    sexIconRef: false,
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
                                $table: { 'userInfo': ['head_portrait']},
                                $value: [this.curUserInfoId]
                            },
                        },
                    },
                };
            },
            pvt_img_attr: function () {
                return {
                    imgRef: {
                        attr: {

                        },
                    },
                };
            },

            pvt_name_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.name,
                    isShow: this.pvt_isShow.name,
                    nameRef: {
                        componentName: 'buttonC',
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
                            textData: {$table: {'userInfo': ['name']}, $value: [this.curUserInfoId]},
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
                            isClick: true,
                            fontWeight: true
                        },
                    },
                };
            },

            pvt_friendNum_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.friendNum,
                    isShow: this.pvt_isShow.friendNum,
                    friendNumRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_friendNum_para: function () {
                return {
                    friendNumRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_friendNum_comp.isShow,
                            $isMounted: this.pvt_isMounted.friendNumRef,
                            textData: {$table: '', $value: [this.userFriend]},
                        },
                    },
                };
            },
            pvt_friendNum_attr: function () {
                return {
                    friendNumRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            isClick: true,
                            fontWeight: true
                        },
                    },
                };
            },

            pvt_friendText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.friendText,
                    isShow: this.pvt_isShow.friendText,
                    friendTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_friendText_para: function () {
                return {
                    friendTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_friendText_comp.isShow,
                            $isMounted: this.pvt_isMounted.friendTextRef,
                            textData: {$table: '', $value: ['好友']},
                        },
                    },
                };
            },
            pvt_friendText_attr: function () {
                return {
                    friendTextRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#909399',
                        },
                    },
                };
            },

            pvt_followNum_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.followNum,
                    isShow: this.pvt_isShow.followNum,
                    followNumRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_followNum_para: function () {
                return {
                    followNumRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_followNum_comp.isShow,
                            $isMounted: this.pvt_isMounted.followNumRef,
                            textData: {$table: '', $value: [this.userAttention]},
                        },
                    },
                };
            },
            pvt_followNum_attr: function () {
                return {
                    followNumRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            isClick: true,
                            fontWeight: true
                        },
                    },
                };
            },

            pvt_followText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.followText,
                    isShow: this.pvt_isShow.followText,
                    followTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_followText_para: function () {
                return {
                    followTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_followText_comp.isShow,
                            $isMounted: this.pvt_isMounted.followTextRef,
                            textData: {$table: '', $value: ['关注']},
                        },
                    },
                };
            },
            pvt_followText_attr: function () {
                return {
                    followTextRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#909399',
                        },
                    },
                };
            },

            pvt_fansNum_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.fansNum,
                    isShow: this.pvt_isShow.fansNum,
                    fansNumRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_fansNum_para: function () {
                return {
                    fansNumRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_fansNum_comp.isShow,
                            $isMounted: this.pvt_isMounted.fansNumRef,
                            textData: {$table: '', $value: [this.userFans]},
                        },
                    },
                };
            },
            pvt_fansNum_attr: function () {
                return {
                    fansNumRef: {
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            isClick: true,
                            fontWeight: true
                        },
                    },
                };
            },

            pvt_fansText_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.fansText,
                    isShow: this.pvt_isShow.fansText,
                    fansTextRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_fansText_para: function () {
                return {
                    fansTextRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_fansText_comp.isShow,
                            $isMounted: this.pvt_isMounted.fansTextRef,
                            textData: {$table: '', $value: ['粉丝']},
                        },
                    },
                };
            },
            pvt_fansText_attr: function () {
                return {
                    fansTextRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#909399',
                        },
                    },
                };
            },



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
                            name: {$table: '', $field: [], $value: ['发帖']},
                        },
                    },
                };
            },
            pvt_noteBtn_attr: function () {
                return {
                    noteBtnRef: {
                        attr: {
                            type: 'info'
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
                            name: {$table: '', $field: [], $value: ['写文章']},
                        },
                    },
                };
            },
            pvt_articleBtn_attr: function () {
                return {
                    articleBtnRef: {
                        attr: {
                            type: 'info'
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
                let dbFlag;
                let dbData;
                let tableName;
                let record;
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

                that.mac = mac.mac;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            // 获取用户信息：
                            that.curUserInfoId = null;

                            let expression = '',
                                start = null,
                                total = null,
                                sort = ['id,asc'],
                                destGeneSite = '';
                            let portName = that.mac.tb.userInfo;
                            let inputData = null;

                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                that.curUserInfoId = result[0];
                                para.nStep = '_myAttention';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case '_myAttention':
                            // 获取用户关注：
                            tableName = that.mac.tb.myAttention;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            that.sys.api.recordQuery(tableName, null, null, dbData, function () {
                                that.userAttention = dbData[that.mac.fd.id].length;
                                para.nStep = '_myFriend';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case '_myFriend':
                            // 获取用户好友：
                            tableName = that.mac.tb.myFriend;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            that.sys.api.recordQuery(tableName, null, null, dbData, function () {
                                that.userFriend = dbData[that.mac.fd.id].length;
                                para.nStep = '_myFans';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case '_myFans':
                            // 获取用户粉丝：
                            tableName = that.mac.tb.myFans;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            that.sys.api.recordQuery(tableName, null, null, dbData, function () {
                                that.userFans = dbData[that.mac.fd.id].length;
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack);
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

            // 事件：
            imgRef_clickEvent: function(id) {
                this.callModuleEventPort('pictureClickEvent', [id]);
            },
            articleBtnRef_buttonClickEvent: function () {
                this.callModuleEventPort('articleClickEvent', []);
            },
            noteBtnRef_buttonClickEvent: function () {
                this.callModuleEventPort('noteClickEvent', []);
            },


            // 公开方法：
            pictureRefresh: function () {
                this.callSubModuleMethod('listRefresh', []);
            },
        }
    };

</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    #user-info {
        background-color: #fff;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
        .info-img {
            width: 60px;
            height: 60px;
            margin: 0 auto;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            .image-size-medium {
                width: 100%;
                height: 100%;
            }
        }
        .info-name {
            margin: 0 0 10px 0;
            cursor: pointer;
            &:hover .name-text {
                color: #409EFF !important;
            }
            &::before {
                float: right;
                color: #999;
            }
            .link-text:hover {
                border-bottom: none;
            }
            .name-text {
                display: inline-block !important;
                line-height: inherit !important;
                margin-right: 6px;
                text-indent: 0 !important;
                /*text-decoration: none !important;*/
            }
        }
        .info-detail {
            display: flex;
            justify-content: space-around;
            .info-friend, .info-follow, .info-fans {
                flex: 1;
                cursor: pointer;
                &:hover .detail-text {
                    color: #409EFF !important;
                }
                .detail-text {
                    line-height: 18px !important;
                    text-align: center !important;
                }
            }
            .info-friend, .info-follow {
                border-right: 1px solid #E5E5E5;
            }
        }
        .btns {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            .note-btn, .article-btn {
                flex: 1;
                .el-button {
                    width: 80px;
                }
            }
        }
    }
</style>
