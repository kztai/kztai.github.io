<template>
    <div class="photo-summary-wrap">
        <div class="photo-empty" v-show="isEmpty">
            <div class="empty-img">
                <lm-image
                        ref="emptyImgRef"
                        refId="emptyImgRef"
                        v-show="pvt_isShow.emptyImg === 'emptyImgRef'"
                        :paraVarPair="pvt_emptyImg.emptyImgRef.paraVarPair"
                        :para="pvt_emptyImg.emptyImgRef.para"
                        :attr="pvt_emptyImg.emptyImgRef.attr">
                </lm-image>
            </div>
            <div class="empty-desc">
                <lm-link-text
                        ref="emptyDescRef"
                        refId="emptyDescRef"
                        v-show="pvt_isShow.emptyDesc === 'emptyDescRef'"
                        :paraVarPair="pvt_emptyDesc.emptyDescRef.paraVarPair"
                        :para="pvt_emptyDesc.emptyDescRef.para"
                        :attr="pvt_emptyDesc.emptyDescRef.attr">
                </lm-link-text>
            </div>
            <div class="empty-btn">
                <lm-button
                        ref="emptyBtnRef"
                        refId="emptyBtnRef"
                        v-show="pvt_isShow.emptyBtn === 'emptyBtnRef'"
                        :paraVarPair="pvt_emptyBtn.emptyBtnRef.paraVarPair"
                        :para="pvt_emptyBtn.emptyBtnRef.para"
                        :attr="pvt_emptyBtn.emptyBtnRef.attr">
                </lm-button>
            </div>
        </div>
        <div class="photo-exist" v-show="!isEmpty">
            <lm-album-upload
                    ref="photoRef"
                    refId="photoRef"
                    v-show="pvt_isShow.photo === 'photoRef'"
                    :paraVarPair="pvt_photo.photoRef.paraVarPair"
                    :para="pvt_photo.photoRef.para"
                    :attr="pvt_photo.photoRef.attr">
            </lm-album-upload>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                isEmpty: true,
                curAlbumId: undefined,
                curPhotoIdArr: [],
                curPhotoIdArrClone: [],
                curNewPhotoId: null,


                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['emptyImgRef', 'emptyDescRef', 'emptyBtnRef', 'photoRef'],
                    vessel: ['emptyImg', 'emptyDesc', 'emptyBtn', 'photo'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    emptyImg: null,
                    emptyDesc: null,
                    emptyBtn: null,
                    photo: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['photoThumbnailGetIn', 'photoNewIn', 'photoDeleteIn', 'photoModifyIn', 'photoOriginalGetIn'],
            }
        },
        computed: {
            pvt_emptyImg: function () {
                return {
                    emptyImgRef: {
                        paraVarPair: {},
                        para: {
                            image: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3885376987,415548851&fm=11&gp=0.jpg']
                        },
                        attr: {}
                    }
                }
            },

            pvt_emptyDesc: function () {
                return {
                    emptyDescRef: {
                        paraVarPair: {},
                        para: {
                            textData: '此活动还没有照片'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_emptyBtn: function () {
                return {
                    emptyBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['选择添加照片', 'el-icon-picture'],
                        },
                        attr: {
                            size: 'large',
                            type: 'primary'
                        }
                    }
                }
            },

            pvt_photo: function () {
                return {
                    photoRef: {
                        paraVarPair: {},
                        para: {
                            detail: [{
                                $table: this.mac.tb.myPhoto,
                                $arrField: [this.mac.fd.myPhoto.picture, this.mac.fd.myPhoto.name],
                                $arrValue: this.curPhotoIdArr
                            }],
                            thumbnail: this.mac.fd.myPhoto.thumbnail
                        },
                        attr: {
                            rate: 0.5,
                            // isVideo: true
                        }
                    }
                }
            },
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
                let fnname = 'photoSummary_start';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let page;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite;
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
                    emptyImgRef: 'emptyImgRef',
                    emptyDescRef: 'emptyDescRef',
                    emptyBtnRef: 'emptyBtnRef',
                    photoRef: 'photoRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.curPhotoIdArr = [];
                            that.curPhotoIdArrClone = [];
                            that.curAlbumId = undefined;

                            tableName = this.mac.tb.myAlbum;
                            expression = '';
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            inputData = {
                                [this.mac.tb.myAlbum]: '',
                                [this.mac.tb.myPhoto]: [this.mac.fd.myPhoto.thumbnail, this.mac.fd.myPhoto.name, this.mac.fd.myPhoto.number, this.mac.fd.myPhoto.describe, this.mac.fd.myPhoto.type]
                            };
                            that.sys.api.conditiondataInput(tableName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    that.curAlbumId = result[0];
                                    para.nStep = 'getPhoto';
                                } else {
                                    para.nStep = 'start_3';
                                }

                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getPhoto':
                            // 临时需要条件查找图片，等新环境出来后，可以在下载时直接返回图片id：
                            tableName = this.mac.tb.myPhoto;
                            expression = this.mac.fd.myPhoto.type + '=' + this.mac.enum.myPhoto.type.photo;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            that.sys.api.recordQuery(tableName, [that.curAlbumId], expression, dbData, function (result) {
                                for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    that.curPhotoIdArr.push(dbData[that.mac.fd.id][i]);
                                    that.curPhotoIdArrClone.push(dbData[that.mac.fd.id][i]);
                                }
                                if(that.curPhotoIdArr.length > 0) {
                                    that.isEmpty = false;
                                }

                                that.forceUpdateData(function () {
                                    para.nStep = 'start_3';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.emptyImgRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_4':
                            that.sm[ref.emptyDescRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_5':
                            that.sm[ref.emptyBtnRef].startModule(function () {
                                para.nStep = 'start_6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_6':
                            that.sm[ref.photoRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
                            let refArr = ['emptyImgRef', 'emptyDescRef', 'emptyBtnRef', 'photoRef'];
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

            selectFile: function() {
                this.sm.photoRef.selectFile();
            },
            addFirstPhoto: function (fileName, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'addFirstPhoto_start';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
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

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            if(that.curAlbumId) {
                                para.nStep = 'newPhoto';
                            } else {
                                para.nStep = 'getActivityData';
                            }
                            dbFlag++;
                            break;
                        case 'getActivityData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curActivityId];
                            dbData[that.mac.fd.groupActivity.name] = [];
                            dbData[that.mac.fd.groupActivity.abstract] = [];
                            that.sys.api.recordRead(tableName, dbData, function (result) {
                                para.name = dbData[that.mac.fd.groupActivity.name][0];
                                para.abstract = dbData[that.mac.fd.groupActivity.abstract][0];
                                para.nStep = 'newAlbum';
                                if (++dbFlag === 2) {
                                    that.addFirstPhoto(fileName, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'newAlbum':
                            let curTime = that.getTime(new Date());
                            tableName = this.mac.tb.myAlbum;
                            dbData = {};
                            dbData[that.mac.fd.myAlbum.siteType] = [that.mac.enum.myAlbum.siteType.groupActivity];
                            dbData[that.mac.fd.myAlbum.siteId] = [that.para.curActivityId];
                            dbData[that.mac.fd.myAlbum.name] = [para.name];
                            dbData[that.mac.fd.myAlbum.describe] = [para.abstract];
                            dbData[that.mac.fd.myAlbum.time] = [curTime];
                            that.sys.api.recordNew(tableName, null, dbData, function (result) {
                                that.curAlbumId = dbData[that.mac.fd.id][0];
                                para.nStep = 'newPhoto';
                                if (++dbFlag === 2) {
                                    that.addFirstPhoto(fileName, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'newPhoto':
                            tableName = this.mac.tb.myPhoto;
                            dbData = {};
                            dbData[that.mac.fd.myPhoto.name] = [fileName[0]];
                            dbData[that.mac.fd.myPhoto.type] = [that.mac.enum.myPhoto.type.photo];
                            that.sys.api.recordNew(tableName, that.curAlbumId, dbData, function (result) {
                                that.curNewPhotoId = dbData[that.mac.fd.id][0];
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.addFirstPhoto(fileName, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            that.isEmpty = false;
                            para.successCallBack([that.curNewPhotoId]);
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            addSuccess: function() {
                let that = this;
                let tableName = this.mac.tb.myAlbum;
                that.curPhotoIdArrClone.push(that.curNewPhotoId);
                // console.error(that.curPhotoIdArrClone)
                that.sys.api.dataOutput(tableName, [that.curAlbumId], '', function (result) {
                    that.ep.photoNewIn(result[0]);
                }, function (error) {
                    console.error(error)
                });
            },

            deletePhoto: function(id) {
                let that = this;
                let tableName = this.mac.tb.myPhoto;

                for(let i =0; i < that.curPhotoIdArrClone.length; i++) {
                    if(that.curPhotoIdArrClone[i] === id) {
                        that.curPhotoIdArrClone.splice(i,1);
                        break;
                    }
                }

                that.ep.photoDeleteIn(id);

                if(that.curPhotoIdArrClone.length > 0) {
                    that.isEmpty = false;
                } else {
                    that.isEmpty = true;
                }

                // 新架构不会使用获取原纪录方法：
                // that.sys.api.getSourceRecord(tableName, [id], function (result) {
                //     that.ep.photoDeleteIn(result[0]);
                // }, function () {
                // });
            },

            titleModify: function(id, title) {
                let that = this;
                let tableName = this.mac.tb.myPhoto;

                that.sys.api.getSourceRecord(tableName, [id], function (result) {
                    that.ep.photoModifyIn(result[0], title);
                }, function () {
                });
            },

            inputDetailPhoto: function(successCallBack, errorCallBack) {
                let that = this;
                let tableName = this.mac.tb.myAlbum;
                let expression = '';
                // let expression = 'id=[' + that.curPhotoIdArr + ']';  // 需要对子表做条件筛选，暂时实现不了
                let start = null;
                let total = null;
                let sort = ['id,asc'];
                let destGeneSite = '';
                let inputData = {
                    [this.mac.tb.myAlbum]: '',
                    [this.mac.tb.myPhoto]: [this.mac.fd.myPhoto.picture]
                };
                that.sys.api.conditiondataInput(tableName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                    successCallBack();
                }, function () {
                });
            },

            getTime: function(time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1
                var hour = time.getHours();
                var minute = time.getMinutes();

                return year + "-" + zero(month) + "-" + zero(day) + " "
                    + zero(hour) + ":" + zero(minute);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            },

            emptyBtnRef_buttonClickEvent: function () {
                this.selectFile()
            },
            photoRef_newUploadEvent: function (fileName, successCallBack, errorCallBack) {
                this.addFirstPhoto(fileName, successCallBack, errorCallBack)
            },
            photoRef_loadDetailEvent: function (successCallBack, errorCallBack) {
                this.inputDetailPhoto(successCallBack, errorCallBack)
            },
            photoRef_dataDeleteEvent: function (id) {
                this.deletePhoto(id)
            },
            photoRef_titleModifyEvent: function (id, title) {
                this.titleModify(id, title)
            },    
            photoRef_dataModifyEvent: function () {
                this.addSuccess()
            },
        }
    }
</script>

<style lang="scss">
    .photo-summary-wrap {
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        overflow: auto;
        .photo-empty {
            text-align: center;
            padding-top: 100px;
            .empty-img, .empty-desc {
                margin-bottom: 10px;

            }
            .empty-img {

                .image-size-medium {
                    width: 177px;
                    height: 142px;
                }
            }
            .empty-btn {
                .lm-button .el-button--large {
                    font-size: 18px;
                }
            }
        }
        .photo-exist {

        }
    }
</style>
