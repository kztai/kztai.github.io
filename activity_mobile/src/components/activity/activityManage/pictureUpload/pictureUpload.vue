<template>
    <div class="pictureUpload_container">
        <div class="pictureUpload_row pictureUpload_row_pictureUploadRow">
            <div :class="{pictureUpload_col:true,pictureUpload_col_pictureUploadWindow:true,pictureUpload_col_pictureUploadWindow_size_large:attr.size==='large',pictureUpload_col_pictureUploadWindow_size_medium:attr.size==='medium',pictureUpload_col_pictureUploadWindow_size_small:attr.size==='small',pictureUpload_col_pictureUploadWindow_size_min:attr.size==='min',pictureUpload_col_pictureUploadWindow_checked:attr.checked,pictureUpload_col_pictureUploadWindow_disable:attr.disabled}">

                <div class="pictureUpload_row pictureUpload_row_row1">
                    <div :class="{pictureUpload_col:true,pictureUpload_col_header:true,pictureUpload_col_header_size_large:attr.size==='large',pictureUpload_col_header_size_medium:attr.size==='medium',pictureUpload_col_header_size_small:attr.size==='small',pictureUpload_col_header_size_min:attr.size==='min',pictureUpload_col_header_checked:attr.checked,pictureUpload_col_header_disable:attr.disabled}">

                        <manage_header
                                ref="headerRef"
                                refId="headerRef"
                                v-show="pvt_isShow.header === 'headerRef'"
                                :paraVarPair="pvt_header.headerRef.paraVarPair"
                                :para="pvt_header.headerRef.para"
                                :attr="pvt_header.headerRef.attr">
                        </manage_header>
                    </div>
                </div>
                <div class="pictureUpload_row pictureUpload_row_row2">
                    <div :class="{pictureUpload_col:true,pictureUpload_col_content:true,pictureUpload_col_content_size_large:attr.size==='large',pictureUpload_col_content_size_medium:attr.size==='medium',pictureUpload_col_content_size_small:attr.size==='small',pictureUpload_col_content_size_min:attr.size==='min',pictureUpload_col_content_checked:attr.checked,pictureUpload_col_content_disable:attr.disabled}">

                        <div class="pictureUpload_row pictureUpload_row_row3">
                            <div v-show="!isEmpty" :class="{pictureUpload_col:true,pictureUpload_col_picture:true,pictureUpload_col_picture_size_large:attr.size==='large',pictureUpload_col_picture_size_medium:attr.size==='medium',pictureUpload_col_picture_size_small:attr.size==='small',pictureUpload_col_picture_size_min:attr.size==='min',pictureUpload_col_picture_checked:attr.checked,pictureUpload_col_picture_disable:attr.disabled}">

                                <lm2b-album-upload
                                        ref="photoRef"
                                        refId="photoRef"
                                        v-show="pvt_isShow.picture === 'photoRef'"
                                        :paraVarPair="pvt_picture.photoRef.paraVarPair"
                                        :para="pvt_picture.photoRef.para"
                                        :attr="pvt_picture.photoRef.attr">
                                </lm2b-album-upload>
                            </div>
                        </div>
                        <div class="pictureUpload_row pictureUpload_row_row4">
                            <div v-show="isEmpty" :class="{pictureUpload_col:true,pictureUpload_col_emptyWrap:true,pictureUpload_col_emptyWrap_size_large:attr.size==='large',pictureUpload_col_emptyWrap_size_medium:attr.size==='medium',pictureUpload_col_emptyWrap_size_small:attr.size==='small',pictureUpload_col_emptyWrap_size_min:attr.size==='min',pictureUpload_col_emptyWrap_checked:attr.checked,pictureUpload_col_emptyWrap_disable:attr.disabled}">

                                <div class="pictureUpload_row pictureUpload_row_row5">
                                    <div :class="{pictureUpload_col:true,pictureUpload_col_emptyImg:true,pictureUpload_col_emptyImg_size_large:attr.size==='large',pictureUpload_col_emptyImg_size_medium:attr.size==='medium',pictureUpload_col_emptyImg_size_small:attr.size==='small',pictureUpload_col_emptyImg_size_min:attr.size==='min',pictureUpload_col_emptyImg_checked:attr.checked,pictureUpload_col_emptyImg_disable:attr.disabled}">

                                        <lm2b-image
                                                ref="emptyImgRef"
                                                refId="emptyImgRef"
                                                v-show="pvt_isShow.emptyImg === 'emptyImgRef'"
                                                :paraVarPair="pvt_emptyImg.emptyImgRef.paraVarPair"
                                                :para="pvt_emptyImg.emptyImgRef.para"
                                                :attr="pvt_emptyImg.emptyImgRef.attr">
                                        </lm2b-image>
                                    </div>
                                </div>
                                <div class="pictureUpload_row pictureUpload_row_row6">
                                    <div :class="{pictureUpload_col:true,pictureUpload_col_emptyBtn:true,pictureUpload_col_emptyBtn_size_large:attr.size==='large',pictureUpload_col_emptyBtn_size_medium:attr.size==='medium',pictureUpload_col_emptyBtn_size_small:attr.size==='small',pictureUpload_col_emptyBtn_size_min:attr.size==='min',pictureUpload_col_emptyBtn_checked:attr.checked,pictureUpload_col_emptyBtn_disable:attr.disabled}">

                                        <lm2b-button
                                                ref="emptyBtnRef"
                                                refId="emptyBtnRef"
                                                v-show="pvt_isShow.emptyBtn === 'emptyBtnRef'"
                                                :paraVarPair="pvt_emptyBtn.emptyBtnRef.paraVarPair"
                                                :para="pvt_emptyBtn.emptyBtnRef.para"
                                                :attr="pvt_emptyBtn.emptyBtnRef.attr">
                                        </lm2b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import manage_header from '../manageHeader/manageHeader';

    export default {
        components: {manage_header},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['header', 'picture', 'emptyImg', 'emptyBtn'],
                    subModule: ['headerRef', 'photoRef', 'emptyImgRef', 'emptyBtnRef'],
                },
                pvt_isShow: {
                    header: null,
                    picture: null,
                    emptyImg: null,
                    emptyBtn: null,
                },
                pvt_eventPortInput: ['photoNewEvent', 'photoDeleteEvent', 'photoModifyEvent', 'backEvent'],

                mac: mac.mac,
                isEmpty: true,
                curAlbumId: null,
                curPhotoIdArr: [],
                curPhotoIdArrClone: [],
                curNewPhotoId: null,
                curActivityId: null,
            };
        },
        watch: {},
        computed: {
            pvt_header: function () {
                return {
                    headerRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_picture: function () {
                return {
                    photoRef: {
                        paraVarPair: {},
                        para: {
                            detail: [{
                                $table: this.mac.tb.myPhoto,
                                $arrField: [this.mac.fd.myPhoto.picture, this.mac.fd.myPhoto.name],
                                $arrValue: this.curPhotoIdArr
                            }],
                            thumbnail: this.mac.fd.myPhoto.thumbnail,
                        },
                        attr: {
                            rate: 0.5,
                        },
                    },
                };
            },
            pvt_emptyImg: function () {
                return {
                    emptyImgRef: {
                        paraVarPair: {},
                        para: {
                            image: 'http://pic.51yuansu.com/pic3/cover/02/79/38/5a43641525cd6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
                        },
                        attr: {},
                    },
                };
            },
            pvt_emptyBtn: function () {
                return {
                    emptyBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['选择添加照片', 'van-icon-photo-o'],
                        },
                        attr: {
                            type: 'primary',
                            width: '200px',
                        },
                    },
                };
            },
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (curActivityId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'photoUpload_start';
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
                    i: 0,
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    emptyImgRef: 'emptyImgRef',
                    emptyBtnRef: 'emptyBtnRef',
                    photoRef: 'photoRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.curActivityId = curActivityId;
                            that.curPhotoIdArr = [];
                            that.curPhotoIdArrClone = [];
                            that.curAlbumId = undefined;

                            tableName = this.mac.tb.myAlbum;
                            expression = this.mac.fd.myAlbum.siteId + '=' + that.curActivityId;
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            inputData = null;
                            // inputData = {
                            //     [this.mac.tb.myAlbum]: '',
                            //     [this.mac.tb.myPhoto]: ''
                            // };
                            that.sys.api.conditiondataInput(tableName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    that.curAlbumId = result[0];
                                    para.nStep = 'getPhoto';
                                } else {
                                    para.nStep = 'start_3';
                                }

                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getPhoto':
                            // 临时需要条件查找图片，等新环境出来后，可以在下载时直接返回图片id：
                            tableName = this.mac.tb.myPhoto;
                            expression = null;
                            // expression = this.mac.fd.myPhoto.type + '=' + this.mac.enum.myPhoto.type.photo;
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
                                        that.startModule(curActivityId, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.emptyImgRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_5':
                            that.sm[ref.emptyBtnRef].startModule(function () {
                                para.nStep = 'start_6';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_6':
                            that.sm[ref.photoRef].startModule(function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'headStart':
                            let headData = {
                                ref: '',
                                title: '图片上传',
                                badgeNum: 0,
                                reference: null,
                                showMenu: false
                            };
                            that.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['emptyImgRef', 'headerRef', 'emptyBtnRef', 'photoRef'];
                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
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

            selectFile: function () {
                this.sm.photoRef.selectFile();
            },

            addFirstPhoto: function (fileName, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'photoUpload_addFirstPhoto';
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
                            dbData[that.mac.fd.id] = [that.curActivityId];
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
                            dbData[that.mac.fd.myAlbum.siteId] = [that.curActivityId];
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
            inputDetailPhoto: function (successCallBack, errorCallBack) {
            },
            deletePhoto: function (id) {
                let that = this;

                for(let i =0; i < that.curPhotoIdArrClone.length; i++) {
                    if(that.curPhotoIdArrClone[i] === id) {
                        that.curPhotoIdArrClone.splice(i,1);
                        break;
                    }
                }

                if(that.curPhotoIdArrClone.length > 0) {
                    that.isEmpty = false;
                } else {
                    that.isEmpty = true;
                }

                // that.ep.photoDeleteEvent(id);
            },
            titleModify: function (id, title) {
                let that = this;
                let tableName = this.mac.tb.myPhoto;

                that.sys.api.getSourceRecord(tableName, [id], function (result) {
                    that.ep.photoModifyEvent(result[0], title);
                }, function () {
                });
            },
            addSuccess: function () {
                let that = this;
                let tableName = this.mac.tb.myAlbum;
                that.curPhotoIdArrClone.push(that.curNewPhotoId);
                // console.error(that.curPhotoIdArrClone)
                that.sys.api.dataOutput(tableName, [that.curAlbumId], '', function (result) {
                    that.ep.photoNewEvent(result[0]);
                    console.log('picture upload success')
                }, function (error) {
                    console.error(error)
                });
            },
            backClick:function(){
                this.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
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


            photoRef_newUploadEvent: function (fileName, successCallBack, errorCallBack) {
                this.addFirstPhoto(fileName, successCallBack, errorCallBack)
            },
            photoRef_dataModifyEvent: function () {
                this.addSuccess();
            },
            photoRef_dataDeleteEvent: function (id) {
                this.deletePhoto(id);
            },
            photoRef_titleModifyEvent: function (id, title) {
                this.titleModify(id, title);
            },
            emptyBtnRef_buttonClickEvent: function () {
                this.selectFile();
            },
            headerRef_backEvent() {
                this.backClick();
            }
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .pictureUpload_container {
        width: 100%;
        height: 100%;  /*新增*/
    }

    .pictureUpload_row {
        display: flex;
        flex: 1;
    }

    .pictureUpload_col {
        display: flex;
        flex-direction: column;
    }

    .pictureUpload_col_pictureUploadWindow_size_medium {
        width: @pictureUpload-pictureUploadWindow-medium-width;
        height: @pictureUpload-pictureUploadWindow-medium-height;
    }

    .pictureUpload_col_header_size_medium {
        width: @pictureUpload-header-medium-width;
        position: fixed;
        top:0;
        left:0;
    }

    .pictureUpload_row_row2 {
        width: 100%;
        height: 100%;   /*新增*/
    }

    .pictureUpload_col_content_size_medium {
        width: @pictureUpload-content-medium-width;
        height: @pictureUpload-content-medium-height;
        overflow: auto;  /*新增*/
    }

    .pictureUpload_col_picture_size_medium {
        width: @pictureUpload-picture-medium-width;
        padding: @pictureUpload-picture-medium-padding;
    }

    .pictureUpload_col_emptyWrap_size_medium {
        width: @pictureUpload-emptyWrap-medium-width;
        padding: @pictureUpload-emptyWrap-medium-padding;
        align-items: @pictureUpload-emptyWrap-medium-horizontal-position;
    }

    .pictureUpload_col_emptyImg_size_medium {
        width: @pictureUpload-emptyImg-medium-width;
        height: @pictureUpload-emptyImg-medium-height;
        align-items: @pictureUpload-emptyImg-medium-horizontal-position;
        margin: @pictureUpload-emptyImg-medium-margin;
        border-radius:@pictureUpload-emptyImg-medium-border-radius;
        overflow: hidden;
    }

    .pictureUpload_col_emptyBtn_size_medium {
        width: @pictureUpload-emptyBtn-medium-width;
        align-items: @pictureUpload-emptyBtn-medium-horizontal-position;
    }
</style>