<template>
    <div class="fill-form-wrap">
        <div class="fill-form-text">
            <lm-link-text
                    ref="textRef"
                    refId="textRef"
                    v-show="pvt_isShow.text === 'textRef'"
                    :paraVarPair="pvt_text.textRef.paraVarPair"
                    :para="pvt_text.textRef.para"
                    :attr="pvt_text.textRef.attr">
            </lm-link-text>
        </div>
        <div class="fill-form-content" v-if="!isFile">
            <lm-link-text
                    ref="contentRef"
                    refId="contentRef"
                    v-show="pvt_isShow.content === 'contentRef'"
                    :paraVarPair="pvt_content.contentRef.paraVarPair"
                    :para="pvt_content.contentRef.para"
                    :attr="pvt_content.contentRef.attr">
            </lm-link-text>
        </div>
        <div class="fill-form-file" v-if="isFile">
            <lm-imgs
                    ref="fileRef"
                    refId="fileRef"
                    v-show="pvt_isShow.file === 'fileRef'"
                    :paraVarPair="pvt_file.fileRef.paraVarPair"
                    :para="pvt_file.fileRef.para"
                    :attr="pvt_file.fileRef.attr">
            </lm-imgs>
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
                formName: '',
                formContent: '',
                isFile: false,

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['contentRef', 'textRef', 'fileRef'],
                    vessel: ['content', 'text', 'file'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    content: null,
                    text: null,
                    file: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: [],
            }
        },
        computed: {
            pvt_text: function () {
                return {
                    textRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.formName
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_content: function () {
                return {
                    contentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.para.curAppendixData[1]
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_file: function () {
                return {
                    fileRef: {
                        paraVarPair: {},
                        para: {
                            thumbnail: [{
                                $table: this.mac.tb.groupActivityAppendix,
                                $arrField: [this.mac.fd.groupActivityAppendix.thumbnail],
                                $arrValue: [this.para.curAppendixData]
                            }],
                            detail: this.mac.fd.groupActivityAppendix.picture,
                        },
                        attr: {
                            size: 'small',
                            showGif: false,
                            showLong: false
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
                let fnname = 'fillForm_start';
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
                    contentRef: 'contentRef',
                    textRef: 'textRef',
                    fileRef: 'fileRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.formName = '';

                            if(typeof this.para.curAppendixData === 'number') {
                                this.isFile = true;
                                para.nStep = 'getName';
                            } else {
                                this.formName = this.para.curAppendixData[0];
                                this.isFile = false;
                                para.nStep = 'start_1';
                            }
                            dbFlag++;
                            break;
                        case 'getName':
                            tableName = this.mac.tb.groupActivityAppendix;
                            dbData = {};
                            dbData[that.mac.fd.id] = [this.para.curAppendixData];
                            dbData[that.mac.fd.groupActivityAppendix.name] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.formName = dbData[that.mac.fd.groupActivityAppendix.name][0];
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_1':
                            that.forceUpdateData(function () {
                                that.sm[ref.contentRef].startModule(function () {
                                    para.nStep = 'start_3';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_2':
                            that.forceUpdateData(function () {
                                that.sm[ref.fileRef].startModule(function () {
                                    para.nStep = 'start_3';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.textRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr;
                            if(this.isFile) {
                                refArr = ['textRef', 'fileRef'];
                            } else {
                                refArr = ['textRef', 'contentRef'];
                            }
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
            }
        }
    }
</script>

<style lang="scss">
    .fill-form-wrap {
        margin-bottom: 10px;
        .fill-form-file {
            .lm-imgs-big {
                height: 300px;
                .el-image {
                    height: 100%;
                }
            }
        }
    }
</style>
