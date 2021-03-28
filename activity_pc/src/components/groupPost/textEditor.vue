<template>
    <div id="text-editor">
        <div class="editor-tools-pop">
            <!--<div class="audio-btn">-->
            <!--<buttonC-->
            <!--:para="pvt_audioBtn_para[pvt_currentRef.audioBtn].para"-->
            <!--:attr="pvt_audioBtn_attr[pvt_currentRef.audioBtn].attr"-->
            <!--:refId="pvt_currentRef.audioBtn"-->
            <!--:ref="pvt_currentRef.audioBtn">-->
            <!--</buttonC>-->
            <!--</div>-->
            <div class="bold-pop">
                <lm-popover
                        :para="pvt_boldPop_para[pvt_currentRef.boldPop].para"
                        :attr="pvt_boldPop_attr[pvt_currentRef.boldPop].attr"
                        :refId="pvt_currentRef.boldPop"
                        :ref="pvt_currentRef.boldPop">
                </lm-popover>
            </div>
            <div class="italic-pop">
                <lm-popover
                        :para="pvt_italicPop_para[pvt_currentRef.italicPop].para"
                        :attr="pvt_italicPop_attr[pvt_currentRef.italicPop].attr"
                        :refId="pvt_currentRef.italicPop"
                        :ref="pvt_currentRef.italicPop">
                </lm-popover>
            </div>
            <div class="h1-pop">
                <lm-popover
                        :para="pvt_h1Pop_para[pvt_currentRef.h1Pop].para"
                        :attr="pvt_h1Pop_attr[pvt_currentRef.h1Pop].attr"
                        :refId="pvt_currentRef.h1Pop"
                        :ref="pvt_currentRef.h1Pop">
                </lm-popover>
            </div>
            <div class="h2-pop">
                <lm-popover
                        :para="pvt_h2Pop_para[pvt_currentRef.h2Pop].para"
                        :attr="pvt_h2Pop_attr[pvt_currentRef.h2Pop].attr"
                        :refId="pvt_currentRef.h2Pop"
                        :ref="pvt_currentRef.h2Pop">
                </lm-popover>
            </div>
            <div class="quote-pop">
                <lm-popover
                        :para="pvt_quotePop_para[pvt_currentRef.quotePop].para"
                        :attr="pvt_quotePop_attr[pvt_currentRef.quotePop].attr"
                        :refId="pvt_currentRef.quotePop"
                        :ref="pvt_currentRef.quotePop">
                </lm-popover>
            </div>
            <div class="code-pop">
                <lm-popover
                        :para="pvt_codePop_para[pvt_currentRef.codePop].para"
                        :attr="pvt_codePop_attr[pvt_currentRef.codePop].attr"
                        :refId="pvt_currentRef.codePop"
                        :ref="pvt_currentRef.codePop">
                </lm-popover>
            </div>
            <div class="ol-pop">
                <lm-popover
                        :para="pvt_olPop_para[pvt_currentRef.olPop].para"
                        :attr="pvt_olPop_attr[pvt_currentRef.olPop].attr"
                        :refId="pvt_currentRef.olPop"
                        :ref="pvt_currentRef.olPop">
                </lm-popover>
            </div>
            <div class="ul-pop">
                <lm-popover
                        :para="pvt_ulPop_para[pvt_currentRef.ulPop].para"
                        :attr="pvt_ulPop_attr[pvt_currentRef.ulPop].attr"
                        :refId="pvt_currentRef.ulPop"
                        :ref="pvt_currentRef.ulPop">
                </lm-popover>
            </div>
            <div class="note-pop">
                <lm-popover
                        :para="pvt_notePop_para[pvt_currentRef.notePop].para"
                        :attr="pvt_notePop_attr[pvt_currentRef.notePop].attr"
                        :refId="pvt_currentRef.notePop"
                        :ref="pvt_currentRef.notePop">
                </lm-popover>
            </div>
            <div class="link-pop">
                <lm-popover
                        :para="pvt_linkPop_para[pvt_currentRef.linkPop].para"
                        :attr="pvt_linkPop_attr[pvt_currentRef.linkPop].attr"
                        :refId="pvt_currentRef.linkPop"
                        :ref="pvt_currentRef.linkPop">
                </lm-popover>
            </div>

            <div class="img-pop">
                <lm-popover
                        :para="pvt_imgPop_para[pvt_currentRef.imgPop].para"
                        :attr="pvt_imgPop_attr[pvt_currentRef.imgPop].attr"
                        :refId="pvt_currentRef.imgPop"
                        :ref="pvt_currentRef.imgPop">
                </lm-popover>
            </div>
            <!--<div class="video-pop">-->
            <!--<lm-popover-->
            <!--:para="pvt_videoPop_para[pvt_currentRef.videoPop].para"-->
            <!--:attr="pvt_videoPop_attr[pvt_currentRef.videoPop].attr"-->
            <!--:refId="pvt_currentRef.videoPop"-->
            <!--:ref="pvt_currentRef.videoPop">-->
            <!--</lm-popover>-->
            <!--</div>-->
            <div class="split-pop">
                <lm-popover
                        :para="pvt_splitPop_para[pvt_currentRef.splitPop].para"
                        :attr="pvt_splitPop_attr[pvt_currentRef.splitPop].attr"
                        :refId="pvt_currentRef.splitPop"
                        :ref="pvt_currentRef.splitPop">
                </lm-popover>
            </div>
            <div class="clear-pop">
                <lm-popover
                        :para="pvt_clearPop_para[pvt_currentRef.clearPop].para"
                        :attr="pvt_clearPop_attr[pvt_currentRef.clearPop].attr"
                        :refId="pvt_currentRef.clearPop"
                        :ref="pvt_currentRef.clearPop">
                </lm-popover>
            </div>
        </div>
        <div class="editor-tools">
            <!--<div class="audio-btn">-->
            <!--<buttonC-->
            <!--:para="pvt_audioBtn_para[pvt_currentRef.audioBtn].para"-->
            <!--:attr="pvt_audioBtn_attr[pvt_currentRef.audioBtn].attr"-->
            <!--:refId="pvt_currentRef.audioBtn"-->
            <!--:ref="pvt_currentRef.audioBtn">-->
            <!--</buttonC>-->
            <!--</div>-->
            <div class="bold-btn" ref="boldBtn">
                <buttonC
                        :para="pvt_boldBtn_para[pvt_currentRef.boldBtn].para"
                        :attr="pvt_boldBtn_attr[pvt_currentRef.boldBtn].attr"
                        :refId="pvt_currentRef.boldBtn"
                        :ref="pvt_currentRef.boldBtn">
                </buttonC>
            </div>
            <div class="italic-btn" ref="italicBtn">
                <buttonC
                        :para="pvt_italicBtn_para[pvt_currentRef.italicBtn].para"
                        :attr="pvt_italicBtn_attr[pvt_currentRef.italicBtn].attr"
                        :refId="pvt_currentRef.italicBtn"
                        :ref="pvt_currentRef.italicBtn">
                </buttonC>
            </div>
            <div class="h1-btn" ref="h1Btn">
                <buttonC
                        :para="pvt_h1Btn_para[pvt_currentRef.h1Btn].para"
                        :attr="pvt_h1Btn_attr[pvt_currentRef.h1Btn].attr"
                        :refId="pvt_currentRef.h1Btn"
                        :ref="pvt_currentRef.h1Btn">
                </buttonC>
            </div>
            <div class="h2-btn" ref="h2Btn">
                <buttonC
                        :para="pvt_h2Btn_para[pvt_currentRef.h2Btn].para"
                        :attr="pvt_h2Btn_attr[pvt_currentRef.h2Btn].attr"
                        :refId="pvt_currentRef.h2Btn"
                        :ref="pvt_currentRef.h2Btn">
                </buttonC>
            </div>
            <div class="quote-btn" ref="quoteBtn">
                <buttonC
                        :para="pvt_quoteBtn_para[pvt_currentRef.quoteBtn].para"
                        :attr="pvt_quoteBtn_attr[pvt_currentRef.quoteBtn].attr"
                        :refId="pvt_currentRef.quoteBtn"
                        :ref="pvt_currentRef.quoteBtn">
                </buttonC>
            </div>
            <div class="code-btn" ref="codeBtn">
                <buttonC
                        :para="pvt_codeBtn_para[pvt_currentRef.codeBtn].para"
                        :attr="pvt_codeBtn_attr[pvt_currentRef.codeBtn].attr"
                        :refId="pvt_currentRef.codeBtn"
                        :ref="pvt_currentRef.codeBtn">
                </buttonC>
            </div>
            <div class="ol-btn" ref="olBtn">
                <buttonC
                        :para="pvt_olBtn_para[pvt_currentRef.olBtn].para"
                        :attr="pvt_olBtn_attr[pvt_currentRef.olBtn].attr"
                        :refId="pvt_currentRef.olBtn"
                        :ref="pvt_currentRef.olBtn">
                </buttonC>
            </div>
            <div class="ul-btn" ref="ulBtn">
                <buttonC
                        :para="pvt_ulBtn_para[pvt_currentRef.ulBtn].para"
                        :attr="pvt_ulBtn_attr[pvt_currentRef.ulBtn].attr"
                        :refId="pvt_currentRef.ulBtn"
                        :ref="pvt_currentRef.ulBtn">
                </buttonC>
            </div>
            <div class="note-btn" ref="noteBtn">
                <buttonC
                        :para="pvt_noteBtn_para[pvt_currentRef.noteBtn].para"
                        :attr="pvt_noteBtn_attr[pvt_currentRef.noteBtn].attr"
                        :refId="pvt_currentRef.noteBtn"
                        :ref="pvt_currentRef.noteBtn">
                </buttonC>
            </div>
            <div class="link-btn" ref="linkBtn">
                <buttonC
                        :para="pvt_linkBtn_para[pvt_currentRef.linkBtn].para"
                        :attr="pvt_linkBtn_attr[pvt_currentRef.linkBtn].attr"
                        :refId="pvt_currentRef.linkBtn"
                        :ref="pvt_currentRef.linkBtn">
                </buttonC>
            </div>

            <div class="img-btn" ref="imgBtn">
                <buttonC
                        :para="pvt_imgBtn_para[pvt_currentRef.imgBtn].para"
                        :attr="pvt_imgBtn_attr[pvt_currentRef.imgBtn].attr"
                        :refId="pvt_currentRef.imgBtn"
                        :ref="pvt_currentRef.imgBtn">
                </buttonC>
            </div>
            <div class="video-btn" ref="videoBtn">
                <buttonC
                        :para="pvt_videoBtn_para[pvt_currentRef.videoBtn].para"
                        :attr="pvt_videoBtn_attr[pvt_currentRef.videoBtn].attr"
                        :refId="pvt_currentRef.videoBtn"
                        :ref="pvt_currentRef.videoBtn">
                </buttonC>
            </div>
            <div class="split-btn" ref="splitBtn">
                <buttonC
                        :para="pvt_splitBtn_para[pvt_currentRef.splitBtn].para"
                        :attr="pvt_splitBtn_attr[pvt_currentRef.splitBtn].attr"
                        :refId="pvt_currentRef.splitBtn"
                        :ref="pvt_currentRef.splitBtn">
                </buttonC>
            </div>
            <div class="clear-btn" ref="clearBtn">
                <buttonC
                        :para="pvt_clearBtn_para[pvt_currentRef.clearBtn].para"
                        :attr="pvt_clearBtn_attr[pvt_currentRef.clearBtn].attr"
                        :refId="pvt_currentRef.clearBtn"
                        :ref="pvt_currentRef.clearBtn">
                </buttonC>
            </div>
        </div>
        <div ref="editorText" @keydown="keydownEvent($event)" @keyup="formatTag($event)" @mouseup="changeStyle"
             class="publish-content" style="overflow: auto;" contentEditable>
            <div class="content-wrap"
                 style="font-family: SourceHanSansCN-Medium; font-size: small; line-height: 24px; padding: 10px;">
                <div class="common-tag"><br></div>
            </div>
        </div>
        <div class="text-num">
            <lm-link-text
                    :para="pvt_textNum_para[pvt_currentRef.textNum].para"
                    :attr="pvt_textNum_attr[pvt_currentRef.textNum].attr"
                    :refId="pvt_currentRef.textNum"
                    :ref="pvt_currentRef.textNum">
            </lm-link-text>
        </div>
        <div class="note-dialog">
            <message
                    v-show="pvt_isShow.note"
                    :para="pvt_note_para[pvt_currentRef.note].para"
                    :attr="pvt_note_attr[pvt_currentRef.note].attr"
                    :refId="pvt_currentRef.note"
                    :ref="pvt_currentRef.note">
            </message>
        </div>
        <div class="link-dialog">
            <message
                    v-show="pvt_isShow.link"
                    :para="pvt_link_para[pvt_currentRef.link].para"
                    :attr="pvt_link_attr[pvt_currentRef.link].attr"
                    :refId="pvt_currentRef.link"
                    :ref="pvt_currentRef.link">
            </message>
        </div>
        <input type="file" ref="file" class="el-upload__input" @change="pictureUploadChangeEvent">
    </div>
</template>
<script>
    import listC from '@/components/baseComponent/listComponent.vue';
    import textC from '@/components/baseComponent/textComponent.vue';
    import inputC from '@/components/baseComponent/inputComponent.vue';
    import imageC from '@/components/baseComponent/imageComponent.vue';
    import radioC from '@/components/baseComponent/radioComponent.vue';
    import buttonC from '@/components/baseComponent/buttonComponent.vue';
    import pictureUploadC from '@/components/baseComponent/pictureUploadComponent.vue';
    import checkboxC from '@/components/baseComponent/checkboxComponent.vue';
    import selectC from '@/components/baseComponent/selectComponent.vue';
    import uploadC from '@/components/baseComponent/pictureUploadComponent.vue';
    import message from './messageDialog';

    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {
            listC,
            textC,
            inputC,
            radioC,
            imageC,
            buttonC,
            pictureUploadC,
            checkboxC,
            selectC,
            uploadC,
            message
        },
        data: function () {
            return {
                mac: mac.mac,
                boldChecked: false,
                italicChecked: false,
                h1Checked: false,
                italicBtnType: 'text',
                boldBtnType: 'text',
                quoteType: 'text',
                codeType: 'text',
                ulType: 'text',
                olType: 'text',
                isQuote: false,
                isCode: false,
                selectionObj: '',
                rangeObj: '',
                noteNum: 1,
                language: 'English',
                pictureNum: 0,
                textNum: '当前字数：0',

                quoteBtn: '',
                codeBtn: '',
                olBtn: '',
                ulBtn: '',
                noteBtn: '',
                linkBtn: '',
                formulaBtn: '',
                splitBtn: '',
                clearBtn: '',
                imgBtn: '',
                videoBtn: '',
                audioBtn: '',
                boldBtn: '',
                italicBtn: '',
                h1Btn: '',
                h2Btn: '',

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['quoteBtn', 'codeBtn', 'olBtn', 'ulBtn', 'noteBtn', 'linkBtn', 'formulaBtn', 'splitBtn', 'clearBtn', 'imgBtn', 'videoBtn', 'audioBtn', 'boldBtn', 'italicBtn', 'h1Btn', 'h2Btn', 'link', 'note', 'textNum', 'quotePop', 'codePop', 'olPop', 'ulPop', 'notePop', 'linkPop', 'formulaPop', 'splitPop', 'clearPop', 'imgPop', 'videoPop', 'audioPop', 'boldPop', 'italicPop', 'h1Pop', 'h2Pop'],
                    ref: ['quoteBtnRef', 'codeBtnRef', 'olBtnRef', 'ulBtnRef', 'noteBtnRef', 'linkBtnRef', 'formulaBtnRef', 'splitBtnRef', 'clearBtnRef', 'imgBtnRef', 'videoBtnRef', 'audioBtnRef', 'boldBtnRef', 'italicBtnRef', 'h1BtnRef', 'h2BtnRef', 'linkRef', 'noteRef', 'textNumRef', 'quotePopRef', 'codePopRef', 'olPopRef', 'ulPopRef', 'notePopRef', 'linkPopRef', 'formulaPopRef', 'splitPopRef', 'clearPopRef', 'imgPopRef', 'videoPopRef', 'audioPopRef', 'boldPopRef', 'italicPopRef', 'h1PopRef', 'h2PopRef']
                },

                pvt_currentRef: {
                    quoteBtn: 'quoteBtnRef',
                    codeBtn: 'codeBtnRef',
                    olBtn: 'olBtnRef',
                    ulBtn: 'ulBtnRef',
                    noteBtn: 'noteBtnRef',
                    linkBtn: 'linkBtnRef',
                    formulaBtn: 'formulaBtnRef',
                    splitBtn: 'splitBtnRef',
                    clearBtn: 'clearBtnRef',
                    imgBtn: 'imgBtnRef',
                    videoBtn: 'videoBtnRef',
                    audioBtn: 'audioBtnRef',
                    boldBtn: 'boldBtnRef',
                    italicBtn: 'italicBtnRef',
                    h1Btn: 'h1BtnRef',
                    h2Btn: 'h2BtnRef',
                    link: 'linkRef',
                    note: 'noteRef',
                    textNum: 'textNumRef',

                    quotePop: 'quotePopRef',
                    codePop: 'codePopRef',
                    olPop: 'olPopRef',
                    ulPop: 'ulPopRef',
                    notePop: 'notePopRef',
                    linkPop: 'linkPopRef',
                    formulaPop: 'formulaPopRef',
                    splitPop: 'splitPopRef',
                    clearPop: 'clearPopRef',
                    imgPop: 'imgPopRef',
                    videoPop: 'videoPopRef',
                    audioPop: 'audioPopRef',
                    boldPop: 'boldPopRef',
                    italicPop: 'italicPopRef',
                    h1Pop: 'h1PopRef',
                    h2Pop: 'h2PopRef',
                },

                pvt_isShow: {
                    quotePop: true,
                    codePop: true,
                    olPop: true,
                    ulPop: true,
                    notePop: true,
                    linkPop: true,
                    formulaPop: true,
                    splitPop: true,
                    clearPop: true,
                    imgPop: true,
                    videoPop: true,
                    audioPop: true,
                    boldPop: true,
                    italicPop: true,
                    h1Pop: true,
                    h2Pop: true,
                    link: false,
                    note: false,
                    textNum: true,

                    quoteBtn: true,
                    codeBtn: true,
                    olBtn: true,
                    ulBtn: true,
                    noteBtn: true,
                    linkBtn: true,
                    formulaBtn: true,
                    splitBtn: true,
                    clearBtn: true,
                    imgBtn: true,
                    videoBtn: true,
                    audioBtn: true,
                    boldBtn: true,
                    italicBtn: true,
                    h1Btn: true,
                    h2Btn: true,

                },
                pvt_isMounted: {
                    quotePopRef: false,
                    codePopRef: false,
                    olPopRef: false,
                    ulPopRef: false,
                    notePopRef: false,
                    linkPopRef: false,
                    formulaPopRef: false,
                    splitPopRef: false,
                    clearPopRef: false,
                    imgPopRef: false,
                    videoPopRef: false,
                    audioPopRef: false,
                    boldPopRef: false,
                    italicPopRef: false,
                    h1PopRef: false,
                    h2PopRef: false,
                    linkRef: false,
                    noteRef: false,
                    textNumRef: false,

                    quoteBtnRef: false,
                    codeBtnRef: false,
                    olBtnRef: false,
                    ulBtnRef: false,
                    noteBtnRef: false,
                    linkBtnRef: false,
                    formulaBtnRef: false,
                    splitBtnRef: false,
                    clearBtnRef: false,
                    imgBtnRef: false,
                    videoBtnRef: false,
                    audioBtnRef: false,
                    boldBtnRef: false,
                    italicBtnRef: false,
                    h1BtnRef: false,
                    h2BtnRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_textNum_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.textNum,
                    isShow: this.pvt_isShow.textNum,
                    textNumRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_textNum_para: function () {
                return {
                    textNumRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_textNum_comp.isShow,
                            $isMounted: this.pvt_isMounted.textNumRef,
                            textData: {$table: '', $value: [this.textNum]}
                        },
                    },
                };
            },
            pvt_textNum_attr: function () {
                return {
                    textNumRef: {
                        attr: {
                            fontSize: '12px',
                            color: '#C0C4CC'
                        },
                    },
                };
            },
            pvt_note_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.note,
                    isShow: this.pvt_isShow.note,
                    noteRef: {
                        componentName: 'message',
                    },
                }
            },
            pvt_note_para: function () {
                return {
                    noteRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_note_comp.isShow,
                            $isMounted: this.pvt_isMounted.noteRef,
                            input1: '注释内容',
                            input2: '注释地址',
                            titleValue: '插入注释'
                        },
                    },
                };
            },
            pvt_note_attr: function () {
                return {
                    noteRef: {
                        attr: {},
                    },
                };
            },

            pvt_link_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.link,
                    isShow: this.pvt_isShow.link,
                    linkRef: {
                        componentName: 'message',
                    },
                }
            },
            pvt_link_para: function () {
                return {
                    linkRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_link_comp.isShow,
                            $isMounted: this.pvt_isMounted.linkRef,
                            input1: '链接内容',
                            input2: '链接地址',
                            titleValue: '插入链接'
                        },
                    },
                };
            },
            pvt_link_attr: function () {
                return {
                    linkRef: {
                        attr: {},
                    },
                };
            },

            pvt_quoteBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.quoteBtn,
                    isShow: this.pvt_isShow.quoteBtn,
                    quoteBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_quoteBtn_para: function () {
                return {
                    quoteBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_quoteBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.quoteBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-document-copy']},
                        },
                    },
                };
            },
            pvt_quoteBtn_attr: function () {
                return {
                    quoteBtnRef: {
                        attr: {
                            type: this.quoteType,
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_codeBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.codeBtn,
                    isShow: this.pvt_isShow.codeBtn,
                    codeBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_codeBtn_para: function () {
                return {
                    codeBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_codeBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.codeBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-edit']},
                        },
                    },
                };
            },
            pvt_codeBtn_attr: function () {
                return {
                    codeBtnRef: {
                        attr: {
                            type: this.codeType,
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_olBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.olBtn,
                    isShow: this.pvt_isShow.olBtn,
                    olBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_olBtn_para: function () {
                return {
                    olBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_olBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.olBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-s-fold']},
                        },
                    },
                };
            },
            pvt_olBtn_attr: function () {
                return {
                    olBtnRef: {
                        attr: {
                            type: this.olType,
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_ulBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.ulBtn,
                    isShow: this.pvt_isShow.ulBtn,
                    ulBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_ulBtn_para: function () {
                return {
                    ulBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_ulBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.ulBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-s-operation']},
                        },
                    },
                };
            },
            pvt_ulBtn_attr: function () {
                return {
                    ulBtnRef: {
                        attr: {
                            type: this.ulType,
                            width: '40px',
                            height: '28px'
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
                            icon: {$table: '', $field: [], $value: ['el-icon-notebook-2']},
                        },
                    },
                };
            },
            pvt_noteBtn_attr: function () {
                return {
                    noteBtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_linkBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.linkBtn,
                    isShow: this.pvt_isShow.linkBtn,
                    linkBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_linkBtn_para: function () {
                return {
                    linkBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_linkBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.linkBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-paperclip']},
                        },
                    },
                };
            },
            pvt_linkBtn_attr: function () {
                return {
                    linkBtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_formulaBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.formulaBtn,
                    isShow: this.pvt_isShow.formulaBtn,
                    formulaBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_formulaBtn_para: function () {
                return {
                    formulaBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_formulaBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.formulaBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-setting']},
                        },
                    },
                };
            },
            pvt_formulaBtn_attr: function () {
                return {
                    formulaBtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_splitBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.splitBtn,
                    isShow: this.pvt_isShow.splitBtn,
                    splitBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_splitBtn_para: function () {
                return {
                    splitBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_splitBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.splitBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-minus']},
                        },
                    },
                };
            },
            pvt_splitBtn_attr: function () {
                return {
                    splitBtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_clearBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.clearBtn,
                    isShow: this.pvt_isShow.clearBtn,
                    clearBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_clearBtn_para: function () {
                return {
                    clearBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_clearBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.clearBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-delete']},
                        },
                    },
                };
            },
            pvt_clearBtn_attr: function () {
                return {
                    clearBtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_imgBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.imgBtn,
                    isShow: this.pvt_isShow.imgBtn,
                    imgBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_imgBtn_para: function () {
                return {
                    imgBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_imgBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.imgBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-picture']},
                        },
                    },
                };
            },
            pvt_imgBtn_attr: function () {
                return {
                    imgBtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_videoBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.videoBtn,
                    isShow: this.pvt_isShow.videoBtn,
                    videoBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_videoBtn_para: function () {
                return {
                    videoBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_videoBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.videoBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-video-camera']},
                        },
                    },
                };
            },
            pvt_videoBtn_attr: function () {
                return {
                    videoBtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px',
                            disabled: true
                        },
                    },
                };
            },

            pvt_audioBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.audioBtn,
                    isShow: this.pvt_isShow.audioBtn,
                    audioBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_audioBtn_para: function () {
                return {
                    audioBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_audioBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.audioBtnRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-bell']},
                        },
                    },
                };
            },
            pvt_audioBtn_attr: function () {
                return {
                    audioBtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_boldBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.boldBtn,
                    isShow: this.pvt_isShow.boldBtn,
                    boldBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_boldBtn_para: function () {
                return {
                    boldBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_boldBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.boldBtnRef,
                            name: {$table: '', $field: [], $value: ['B']},
                        },
                    },
                };
            },
            pvt_boldBtn_attr: function () {
                return {
                    boldBtnRef: {
                        attr: {
                            type: this.boldBtnType,
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_italicBtn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.italicBtn,
                    isShow: this.pvt_isShow.italicBtn,
                    italicBtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_italicBtn_para: function () {
                return {
                    italicBtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_italicBtn_comp.isShow,
                            $isMounted: this.pvt_isMounted.italicBtnRef,
                            name: {$table: '', $field: [], $value: ['/']},
                        },
                    },
                };
            },
            pvt_italicBtn_attr: function () {
                return {
                    italicBtnRef: {
                        attr: {
                            type: this.italicBtnType,
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_h1Btn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.h1Btn,
                    isShow: this.pvt_isShow.h1Btn,
                    h1BtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_h1Btn_para: function () {
                return {
                    h1BtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_h1Btn_comp.isShow,
                            $isMounted: this.pvt_isMounted.h1BtnRef,
                            name: {$table: '', $field: [], $value: ['H1']},
                        },
                    },
                };
            },
            pvt_h1Btn_attr: function () {
                return {
                    h1BtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_h2Btn_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.h2Btn,
                    isShow: this.pvt_isShow.h2Btn,
                    h2BtnRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_h2Btn_para: function () {
                return {
                    h2BtnRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_h2Btn_comp.isShow,
                            $isMounted: this.pvt_isMounted.h2BtnRef,
                            name: {$table: '', $field: [], $value: ['H2']},
                        },
                    },
                };
            },
            pvt_h2Btn_attr: function () {
                return {
                    h2BtnRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },


            pvt_quotePop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.quotePop,
                    isShow: this.pvt_isShow.quotePop,
                    quotePopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_quotePop_para: function () {
                return {
                    quotePopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_quotePop_comp.isShow,
                            $isMounted: this.pvt_isMounted.quotePopRef,
                            balloon: {$table: '', $value: ['', '引用块']},
                        },
                    },
                };
            },
            pvt_quotePop_attr: function () {
                return {
                    quotePopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.quoteBtn,
                        },
                    },
                };
            },

            pvt_codePop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.codePop,
                    isShow: this.pvt_isShow.codePop,
                    codePopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_codePop_para: function () {
                return {
                    codePopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_codePop_comp.isShow,
                            $isMounted: this.pvt_isMounted.codePopRef,
                            balloon: {$table: '', $value: ['', '代码块']},
                        },
                    },
                };
            },
            pvt_codePop_attr: function () {
                return {
                    codePopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.codeBtn,
                        },
                    },
                };
            },

            pvt_olPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.olPop,
                    isShow: this.pvt_isShow.olPop,
                    olPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_olPop_para: function () {
                return {
                    olPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_olPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.olPopRef,
                            balloon: {$table: '', $value: ['', '有序列表']},
                        },
                    },
                };
            },
            pvt_olPop_attr: function () {
                return {
                    olPopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.olBtn,
                        },
                    },
                };
            },

            pvt_ulPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.ulPop,
                    isShow: this.pvt_isShow.ulPop,
                    ulPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_ulPop_para: function () {
                return {
                    ulPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_ulPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.ulPopRef,
                            balloon: {$table: '', $value: ['', '无序列表']},
                        },
                    },
                };
            },
            pvt_ulPop_attr: function () {
                return {
                    ulPopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.ulBtn,
                        },
                    },
                };
            },

            pvt_notePop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.notePop,
                    isShow: this.pvt_isShow.notePop,
                    notePopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_notePop_para: function () {
                return {
                    notePopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_notePop_comp.isShow,
                            $isMounted: this.pvt_isMounted.notePopRef,
                            balloon: {$table: '', $value: ['', '插入注释']},
                        },
                    },
                };
            },
            pvt_notePop_attr: function () {
                return {
                    notePopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.noteBtn,
                        },
                    },
                };
            },

            pvt_linkPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.linkPop,
                    isShow: this.pvt_isShow.linkPop,
                    linkPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_linkPop_para: function () {
                return {
                    linkPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_linkPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.linkPopRef,
                            balloon: {$table: '', $value: ['', '插入链接']},
                        },
                    },
                };
            },
            pvt_linkPop_attr: function () {
                return {
                    linkPopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.linkBtn,
                        },
                    },
                };
            },

            pvt_splitPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.splitPop,
                    isShow: this.pvt_isShow.splitPop,
                    splitPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_splitPop_para: function () {
                return {
                    splitPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_splitPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.splitPopRef,
                            balloon: {$table: '', $value: ['', '插入分割线']},
                        },
                    },
                };
            },
            pvt_splitPop_attr: function () {
                return {
                    splitPopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.splitBtn,
                        },
                    },
                };
            },

            pvt_clearPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.clearPop,
                    isShow: this.pvt_isShow.clearPop,
                    clearPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_clearPop_para: function () {
                return {
                    clearPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_clearPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.clearPopRef,
                            balloon: {$table: '', $value: ['', '清除格式']},
                        },
                    },
                };
            },
            pvt_clearPop_attr: function () {
                return {
                    clearPopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.clearBtn,
                        },
                    },
                };
            },

            pvt_imgPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.imgPop,
                    isShow: this.pvt_isShow.imgPop,
                    imgPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_imgPop_para: function () {
                return {
                    imgPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_imgPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.imgPopRef,
                            balloon: {$table: '', $value: ['', '插入图片']},
                        },
                    },
                };
            },
            pvt_imgPop_attr: function () {
                return {
                    imgPopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.imgBtn,
                        },
                    },
                };
            },

            pvt_videoPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.videoPop,
                    isShow: this.pvt_isShow.videoPop,
                    videoPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_videoPop_para: function () {
                return {
                    videoPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_videoPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.videoPopRef,
                            balloon: {$table: '', $value: ['', '插入视频']},
                        },
                    },
                };
            },
            pvt_videoPop_attr: function () {
                return {
                    videoPopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.videoBtn,
                        },
                    },
                };
            },

            pvt_audioPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.audioPop,
                    isShow: this.pvt_isShow.audioPop,
                    audioPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_audioPop_para: function () {
                return {
                    audioPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_audioPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.audioPopRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-bell']},
                        },
                    },
                };
            },
            pvt_audioPop_attr: function () {
                return {
                    audioPopRef: {
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        },
                    },
                };
            },

            pvt_boldPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.boldPop,
                    isShow: this.pvt_isShow.boldPop,
                    boldPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_boldPop_para: function () {
                return {
                    boldPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_boldPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.boldPopRef,
                            balloon: {$table: '', $value: ['', '加粗']},
                        },
                    },
                };
            },
            pvt_boldPop_attr: function () {
                return {
                    boldPopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.boldBtn,
                        },
                    },
                };
            },

            pvt_italicPop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.italicPop,
                    isShow: this.pvt_isShow.italicPop,
                    italicPopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_italicPop_para: function () {
                return {
                    italicPopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_italicPop_comp.isShow,
                            $isMounted: this.pvt_isMounted.italicPopRef,
                            balloon: {$table: '', $value: ['', '斜体']},
                        },
                    },
                };
            },
            pvt_italicPop_attr: function () {
                return {
                    italicPopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.italicBtn,
                        },
                    },
                };
            },

            pvt_h1Pop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.h1Pop,
                    isShow: this.pvt_isShow.h1Pop,
                    h1PopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_h1Pop_para: function () {
                return {
                    h1PopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_h1Pop_comp.isShow,
                            $isMounted: this.pvt_isMounted.h1PopRef,
                            balloon: {$table: '', $value: ['', '标题']},
                        },
                    },
                };
            },
            pvt_h1Pop_attr: function () {
                return {
                    h1PopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.h1Btn,
                        },
                    },
                };
            },

            pvt_h2Pop_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.h2Pop,
                    isShow: this.pvt_isShow.h2Pop,
                    h2PopRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_h2Pop_para: function () {
                return {
                    h2PopRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_h2Pop_comp.isShow,
                            $isMounted: this.pvt_isMounted.h2PopRef,
                            balloon: {$table: '', $value: ['', '正文']},
                        },
                    },
                };
            },
            pvt_h2Pop_attr: function () {
                return {
                    h2PopRef: {
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.h2Btn,
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
            let that = this;
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true;
            }

            that.getNumber();

            that.quoteBtn = that.$refs.quoteBtn;
            that.codeBtn = that.$refs.codeBtn;
            that.olBtn = that.$refs.olBtn;
            that.ulBtn = that.$refs.ulBtn;
            that.noteBtn = that.$refs.noteBtn;
            that.linkBtn = that.$refs.linkBtn;
            that.splitBtn = that.$refs.splitBtn;
            that.clearBtn = that.$refs.clearBtn;
            that.imgBtn = that.$refs.imgBtn;
            that.videoBtn = that.$refs.videoBtn;
            that.boldBtn = that.$refs.boldBtn;
            that.italicBtn = that.$refs.italicBtn;
            that.h1Btn = that.$refs.h1Btn;
            that.h2Btn = that.$refs.h2Btn;
        },

        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let record;
                let tableName;
                let fieldName;
                let articleStr;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    filePathArr: []
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
                            // 初始化：
                            that.textNum = '当前字数：0';

                            if (that.para.articleValue) {
                                articleStr = that.para.articleValue;
                                para.nStep = 'getFileName';
                            } else {
                                para.nStep = 'end';
                            }

                            dbFlag++;
                            break;
                        case 'getFileName':
                            tableName = that.mac.tb.groupBlog;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.blogId];
                            dbData[that.mac.fd.groupBlog.picture] = [];

                            that.sys.api.recordRead(tableName, dbData, function (result) {
                                // 获取图片信息的路径：
                                for (let i = 0; i < dbData[that.mac.fd.groupBlog.picture][0].length; i++) {
                                    para.filePathArr.push(dbData[that.mac.fd.groupBlog.picture][0][i].fileName);
                                }

                                para.nStep = 'initPicture';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'initPicture':
                            if (para.i > para.filePathArr.length - 1) {
                                document.querySelector('.publish-content').innerHTML = articleStr;
                                that.textNum = '当前字数：' + document.querySelector('.publish-content').innerText.length;
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag += 1;
                                break;
                            }
                            let filePath = para.filePathArr[para.i];

                            if (filePath === '') {
                                para.i++;
                                para.nStep = 'initPicture';
                                dbFlag += 1;
                                break;
                            }

                            record = that.para.blogId;
                            tableName = that.mac.tb.groupBlog;
                            fieldName = that.mac.fd.groupBlog.picture;

                            that.sys.api.readFileBase64(tableName, fieldName, record, filePath, function (result) {
                                articleStr = articleStr.replace('src=""', 'src="' + result + '"');
                                para.i++;
                                para.nStep = 'initPicture';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
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

            pictureUploadChangeEvent: function (event) {
                let errorMes;
                let files = event.target.files;
                if (files.length === 0) {
                    return
                }

                //判断文件类型
                for (let i = 0; i < files.length; i++) {
                    let file = files[i];
                    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/bmp' && file.type !== 'video/mp4' && file.type !== 'video/webm' && file.type !== 'video/ogg') {
                        errorMes = `上传的文件${file.name}不是合法的格式!`;
                        this.$message.warning(errorMes);
                        return;
                    }
                }

                //判断文件大小: 禁止超过15M
                // 1kb = 1024b;
                let maxSize = 15 * 1024 * 1024;
                for (let i = 0; i < files.length; i++) {
                    let file = files[i];
                    if (file.size > maxSize) {
                        errorMes = '上传的文件' + file.name + '大小不能超过15M！';
                        this.$message.warning(errorMes);
                        return;
                    }
                }
                this.getPictureData(files, function () {
                }, function (error) {
                    console.log(error)
                });

                //判断重名(重名文件提示删除之前的文件)
                // let error3 = [];
                // let nameArr = $this.imageNameArr;
                // for(let i = 0;i < files.length;i++){
                //     if(disableArr[i] === 0){
                //         let name = files[i].name;
                //         if(nameArr.includes(name)){
                //             error3.push(name);
                //             disableArr[i] = 1;
                //         }
                //     }
                // }
                // if(error3.length > 0){
                //     error3 = error3.join(',');
                //     error3 = '已存在' + error3 +  '的同名文件，请先删除;';
                //     if(error1 && error2){
                //         error3 = '\n3、' + error3;
                //     }else if(error1 || error2){
                //         error3 = '\n2、' + error3;
                //     }else if(!error1 && !error2){
                //         error3 = '1、' + error3;
                //     }
                //     mes += error3;
                // }else{
                //     error3 = '';
                // }
            },

            getPictureData(files, successCallBack, errorCallBack) {
                let $this = this;
                let tableName;
                let fieldName;
                let selectionObj;
                let rangeObj;
                let container;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    num: 0
                };
                let dbFlag;
                let reader = new FileReader();

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            let file = files[0];
                            reader.readAsDataURL(file);
                            reader.onload = function () {
                                para.filePath = file.name;
                                para.fileContent = this.result;
                                if (/video/ig.test(files[0].type)) {
                                    para.nStep = 'initVideo';
                                } else {
                                    para.nStep = 'compressFile';
                                }
                                if (++dbFlag === 2) {
                                    $this.getPictureData(files, successCallBack, errorCallBack);
                                }
                            };
                            break;
                        case 'compressFile':
                            this.compressImg(0.5, para.fileContent, files[0].type, function (fileContent) {
                                para.thumbnailContent = fileContent;
                                para.nStep = 'initImage';
                                if (++dbFlag === 2) {
                                    $this.getPictureData(files, successCallBack, errorCallBack);
                                }
                            });
                            // this.compressImg(0.5, para.fileContent, files[0].type, function (fileContent) {
                            //     tableName = '_userBlog';
                            //     fieldName = 'thumbnail';
                            //     $this.sys.api.writeFile(tableName, fieldName, $this.para.blogId, para.filePath, fileContent,function(result){
                            //         if (/video/ig.test(files[0].type)) {
                            //             para.nStep = 'initVideo';
                            //         } else {
                            //             para.nStep = 'initImage';
                            //         }
                            //         if(++dbFlag === 2){
                            //             $this.getPictureData(files,successCallBack,errorCallBack);
                            //         }
                            //     },function(error){
                            //         console.error(error);
                            //     });
                            // });
                            break;
                        // case 'writeFile':
                        //     tableName = '_userBlog';
                        //     fieldName = 'picture';
                        //     $this.sys.api.writeFile(tableName, fieldName, $this.para.blogId, para.filePath, para.fileContent,function(result){
                        //         if (/video/ig.test(files[0].type)) {
                        //             para.nStep = 'initVideo';
                        //         } else {
                        //             para.nStep = 'initImage';
                        //         }
                        //         if(++dbFlag === 2){
                        //             $this.getPictureData(files,successCallBack,errorCallBack);
                        //         }
                        //     },function(error){
                        //         console.error(error);
                        //     });
                        //     break;
                        case 'initImage':
                            selectionObj = window.getSelection();
                            rangeObj = selectionObj.getRangeAt(0);
                            container = rangeObj.commonAncestorContainer;
                            rangeObj.extractContents();     //移除选区文档片段

                            if (container.nodeName === '#text') {
                                container = container.parentNode;
                            }

                            let oDiv = document.createElement("div");
                            oDiv.className = 'common-tag';
                            oDiv.innerHTML = `
                                <img class = 'largeImg' style="max-width:100%;display:block;margin:10px auto;" title="双击放大缩小图片" src="${para.fileContent}" ondblclick="if (this.className === 'smallImg') {
                                    this.style.width = 'auto';
                                    this.style.height = 'auto';
                                    this.style.objectFit = 'fill';
                                    this.className = 'largeImg';
                                } else if (this.className === 'largeImg') {
                                    this.style.width = 'auto';
                                    this.style.height = '150px';
                                    this.style.objectFit = 'contain';
                                    this.className = 'smallImg';
                                }">
                            `;
                            container.parentNode.insertBefore(oDiv, container.nextSibling);
                            if(container.innerText.search(/[^\s]/ig) === -1) {
                                container.parentNode.removeChild(container);
                            }
                            para.nStep = 'getImgEvent';
                            ++dbFlag;
                            break;
                        case 'initVideo':
                            selectionObj = window.getSelection();
                            rangeObj = selectionObj.getRangeAt(0);
                            container = rangeObj.commonAncestorContainer;
                            rangeObj.extractContents();     //移除选区文档片段

                            if (container.nodeName === '#text') {
                                container = container.parentNode;
                            }

                            while (container.parentNode.className !== 'content-wrap') {
                                container = container.parentNode;
                            }

                            let oVideo = document.createElement("video");
                            let oSource = document.createElement("source");
                            oSource.src = para.fileContent;
                            oSource.type = files[0].type;
                            oVideo.width = 300;
                            oVideo.height = 200;
                            oVideo.controls = true;
                            oVideo.style.outline = 'none';
                            oVideo.style.display = 'block';
                            oVideo.style.margin = '10px auto';
                            oVideo.appendChild(oSource);
                            container.parentNode.insertBefore(oVideo, container.nextSibling);
                            para.nStep = 'getImgEvent';
                            ++dbFlag;
                            break;
                        case 'getImgEvent':
                            let imgData = {
                                filePath: para.filePath,
                                content: para.fileContent,
                                thumbnailContent: para.thumbnailContent
                            };
                            $this.callModuleEventPort('getImgEvent', [imgData], function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.getPictureData(files, successCallBack, errorCallBack);
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

            // 压缩图片
            compressImg(rate, readerResult, fileType, callback) {
                let img = new Image();
                img.src = readerResult;
                // 压缩
                let canvas = document.createElement('canvas');
                let context = canvas.getContext('2d');
                img.onload = function () {
                    // 原始像素尺寸
                    let ow = this.width;
                    let oh = this.height;

                    /*
                    压缩比例为0.5，开根号结果为0.71
                    压缩后像素尺寸
                     */
                    let rateSqrt = Math.sqrt(rate);
                    let cw = parseInt(ow * rateSqrt);
                    let ch = parseInt(oh * rateSqrt);

                    // 设置canvas尺寸，对图片进行缩放
                    canvas.width = cw;
                    canvas.height = ch;

                    // 清空画布
                    context.clearRect(0, 0, cw, ch);
                    // 图片压缩
                    context.drawImage(img, 0, 0, cw, ch);

                    // 得到base64 数据
                    let result = canvas.toDataURL(fileType || 'image/png');
                    callback(result);
                }
            },

            changeStyle: function () {
                this.selectionObj = window.getSelection();
                this.rangeObj = this.selectionObj.getRangeAt(0);
                let endContainer;
                let endTag;

                if (this.$refs.editorText.innerHTML === '') {
                    this.$refs.editorText.innerHTML = `<div class="content-wrap" style="font-family: SourceHanSansCN-Medium; font-size: small; line-height: 24px; padding: 10px;"><div class="common-tag"><br></div></div>`;
                }

                if (this.rangeObj.endContainer.nodeName === '#text') {
                    endContainer = this.rangeObj.endContainer.parentNode;
                } else {
                    endContainer = this.rangeObj.endContainer;
                }

                // 判断是否是代码块：
                endTag = endContainer;
                while (endTag.tagName.toLocaleLowerCase() !== 'body' && endTag.tagName.toLocaleLowerCase() !== 'pre') {
                    endTag = endTag.parentNode;
                }
                if (endTag.tagName.toLocaleLowerCase() !== 'body') {
                    this.codeType = 'primary';
                } else {
                    this.codeType = 'text';
                }

                // 判断是否是引用块：
                endTag = endContainer;
                while (endTag.tagName.toLocaleLowerCase() !== 'body' && endTag.tagName.toLocaleLowerCase() !== 'blockquote') {
                    endTag = endTag.parentNode;
                }
                if (endTag.tagName.toLocaleLowerCase() !== 'body') {
                    this.quoteType = 'primary';
                } else {
                    this.quoteType = 'text';
                }

                // 判断是否加粗：
                endTag = endContainer;
                while (endTag.tagName.toLocaleLowerCase() !== 'body' && endTag.tagName.toLocaleLowerCase() !== 'b') {
                    endTag = endTag.parentNode;
                }
                if (endTag.tagName.toLocaleLowerCase() !== 'body') {
                    this.boldBtnType = 'primary';
                } else {
                    this.boldBtnType = 'text';
                }

                // 判断是否斜体：
                endTag = endContainer;
                while (endTag.tagName.toLocaleLowerCase() !== 'body' && endTag.tagName.toLocaleLowerCase() !== 'i') {
                    endTag = endTag.parentNode;
                }
                if (endTag.tagName.toLocaleLowerCase() !== 'body') {
                    this.italicBtnType = 'primary';
                } else {
                    this.italicBtnType = 'text';
                }

                // 判断是否无序列表：
                endTag = endContainer;
                while (endTag.tagName.toLocaleLowerCase() !== 'body' && endTag.tagName.toLocaleLowerCase() !== 'ul') {
                    endTag = endTag.parentNode;
                }
                if (endTag.tagName.toLocaleLowerCase() !== 'body') {
                    this.ulType = 'primary';
                } else {
                    this.ulType = 'text';
                }

                // 判断是否有序列表：
                endTag = endContainer;
                while (endTag.tagName.toLocaleLowerCase() !== 'body' && endTag.tagName.toLocaleLowerCase() !== 'ol') {
                    endTag = endTag.parentNode;
                }
                if (endTag.tagName.toLocaleLowerCase() !== 'body') {
                    this.olType = 'primary';
                } else {
                    this.olType = 'text';
                }

                // // 判断是否是代码块：
                // startTag = startContainer;
                // endTag = endContainer;
                // while ((startTag.id !== 'text-editor' || endTag.id !== 'text-editor') && startTag.tagName.toLocaleLowerCase() !== 'pre' && endTag.tagName.toLocaleLowerCase() !== 'pre') {
                //     if(startTag.id !== 'text-editor') {
                //         startTag = startTag.parentNode;
                //     }
                //     if(endTag.id !== 'text-editor') {
                //         endTag = endTag.parentNode;
                //     }
                // }
                // if (startTag.id !== 'text-editor' || endTag.id !== 'text-editor') {
                //     this.codeType = 'primary';
                // } else {
                //     this.codeType = 'text';
                // }
                //
                // // 判断是否是引用块：
                // startTag = startContainer;
                // endTag = endContainer;
                // while ((startTag.id !== 'text-editor' || endTag.id !== 'text-editor') && startTag.tagName.toLocaleLowerCase() !== 'blockquote' && endTag.tagName.toLocaleLowerCase() !== 'blockquote') {
                //     if(startTag.id !== 'text-editor') {
                //         startTag = startTag.parentNode;
                //     }
                //     if(endTag.id !== 'text-editor') {
                //         endTag = endTag.parentNode;
                //     }
                // }
                // if (startTag.id !== 'text-editor' || endTag.id !== 'text-editor') {
                //     this.quoteType = 'primary';
                // } else {
                //     this.quoteType = 'text';
                // }
                //
                // // 判断是否加粗：
                // startTag = startContainer;
                // endTag = endContainer;
                // while ((startTag.id !== 'text-editor' || endTag.id !== 'text-editor') && startTag.tagName.toLocaleLowerCase() !== 'b' && endTag.tagName.toLocaleLowerCase() !== 'b') {
                //     if(startTag.id !== 'text-editor') {
                //         startTag = startTag.parentNode;
                //     }
                //     if(endTag.id !== 'text-editor') {
                //         endTag = endTag.parentNode;
                //     }
                // }
                // if (startTag.id !== 'text-editor' || endTag.id !== 'text-editor') {
                //     this.boldBtnType = 'primary';
                // } else {
                //     this.boldBtnType = 'text';
                // }
                //
                // // 判断是否斜体：
                // startTag = startContainer;
                // endTag = endContainer;
                // while ((startTag.id !== 'text-editor' || endTag.id !== 'text-editor') && startTag.tagName.toLocaleLowerCase() !== 'i' && endTag.tagName.toLocaleLowerCase() !== 'i') {
                //     if(startTag.id !== 'text-editor') {
                //         startTag = startTag.parentNode;
                //     }
                //     if(endTag.id !== 'text-editor') {
                //         endTag = endTag.parentNode;
                //     }
                // }
                // if (startTag.id !== 'text-editor' || endTag.id !== 'text-editor') {
                //     this.italicBtnType = 'primary';
                // } else {
                //     this.italicBtnType = 'text';
                // }

            },

            keydownEvent: function (event) {
                var e = event || window.event;
                if (e.key === 'Process') {
                    this.language = 'Chinese';
                } else {
                    this.language = 'English';
                }

                if (this.$refs.editorText.innerHTML === '') {
                    this.$refs.editorText.innerHTML = `<div class="content-wrap" style="font-family: SourceHanSansCN-Medium; font-size: small; line-height: 24px; padding: 10px;"><div class="common-tag"><br></div></div>`;
                }
            },
            formatTag: function (event) {
                var selectionObj;
                var rangeObj;
                var oDiv;
                var e = event || window.event;
                var code = e.keyCode || e.which || e.charCode;

                if (this.language === 'English' || (code == 32 || 48 <= code && 57 >= code)) {
                    selectionObj = window.getSelection();
                    rangeObj = selectionObj.getRangeAt(0);
                    this.rangeObj = rangeObj;
                    var container = rangeObj.commonAncestorContainer;

                    if (container.parentNode.tagName.toLocaleLowerCase() === 'sup') {
                        selectionObj = window.getSelection();
                        selectionObj.removeAllRanges();
                        rangeObj = document.createRange();
                        let startNum = this.rangeObj.startContainer.nodeValue.indexOf("]") + 1;
                        rangeObj.setStart(this.rangeObj.startContainer, startNum);
                        rangeObj.setEnd(this.rangeObj.endContainer, this.rangeObj.endContainer.length);
                        selectionObj.addRange(rangeObj);
                        this.rangeObj = rangeObj;
                        let selectedFragment = rangeObj.extractContents();
                        oDiv = document.createElement('span');
                        oDiv.appendChild(selectedFragment);
                        this.rangeObj.startContainer.parentNode.parentNode.insertBefore(oDiv, this.rangeObj.startContainer.parentNode.nextSibling);
                    }
                }

                if (code == 8) {
                    if (this.$refs.editorText.innerHTML === '') {
                        this.$refs.editorText.innerHTML = `<div class="content-wrap" style="font-family: SourceHanSansCN-Medium; font-size: small; line-height: 24px; padding: 10px;"><div class="common-tag"><br></div></div>`;
                    }
                }

                this.changeStyle();
            },

            getNumber: function () {
                let that = this;
                let flag = true;
                let textarea = document.querySelector('.publish-content');
                textarea.addEventListener('compositionstart', function () {
                    flag = false;
                }, false);
                textarea.addEventListener('compositionend', function () {
                    flag = true;
                }, false);
                textarea.addEventListener('input', function () {
                    setTimeout(function () {
                        if (flag) {
                            var numTotal = textarea.innerText.length;
                            that.textNum = '当前字数：' + numTotal;
                        }
                    }, 0)
                }, false);
            },

            addPicture: function () {
                this.$refs['file'].click();
            },

            addVideo: function () {
                this.$refs['file'].click();

            },
            boldModify: function () {
                if (this.boldBtnType === 'text') {
                    this.boldBtnType = 'primary'
                } else {
                    this.boldBtnType = 'text'
                }
                document.execCommand("bold", false, null);
            },
            italicModify: function () {
                if (this.italicBtnType === 'text') {
                    this.italicBtnType = 'primary'
                } else {
                    this.italicBtnType = 'text'
                }
                document.execCommand("Italic", false, null);
            },
            h1Modify: function () {
                document.execCommand("fontsize", false, '4');
            },
            h2Modify: function () {
                document.execCommand("fontsize", false, '2');
            },
            quoteModify: function () {
                let selectionObj = window.getSelection();
                let rangeObj = selectionObj.getRangeAt(0);
                let container = rangeObj.commonAncestorContainer;
                let targetTag = rangeObj.commonAncestorContainer.parentNode;
                let oDiv;
                let oQuote;
                let selectHtml;
                let result;
                let contentArr;
                let docFragment;

                if (this.quoteType === 'text') {
                    if (container.nodeName !== '#text') {
                        docFragment = rangeObj.extractContents();
                        oDiv = document.createElement("div");
                        oDiv.appendChild(docFragment);
                        selectHtml = oDiv.innerHTML;
                        if (!/class="common-tag"/ig.test(selectHtml)) {
                            contentArr = selectHtml.split('<p>');
                            for (let i = contentArr.length - 1; i >= 0; i--) {
                                if (contentArr[i] !== '') {
                                    oQuote = document.createElement("blockquote");
                                    oQuote.style.paddingLeft = '10px';
                                    oQuote.style.borderLeft = '4px solid #eee';
                                    oQuote.style.margin = '4px 0';
                                    oQuote.style.lineHeight = '20px';
                                    oQuote.style.color = '#999';
                                    oQuote.innerHTML = contentArr[i].replace(/<\/p>/ig, '');
                                    container.parentNode.insertBefore(oQuote, container.nextSibling);
                                }
                            }
                        } else {
                            contentArr = selectHtml.split(/<div class="common-tag">/);
                            for (let i = contentArr.length - 1; i >= 0; i--) {
                                if (contentArr[i] !== '') {
                                    oQuote = document.createElement("blockquote");
                                    oQuote.style.paddingLeft = '10px';
                                    oQuote.style.borderLeft = '4px solid #eee';
                                    oQuote.style.margin = '4px 0';
                                    oQuote.style.lineHeight = '20px';
                                    oQuote.style.color = '#999';
                                    oQuote.innerHTML = contentArr[i].replace(/<\/div>/ig, '');
                                    rangeObj.insertNode(oQuote);
                                }
                            }
                        }
                    } else {
                        while (targetTag.className !== 'common-tag' && targetTag.tagName.toLocaleLowerCase() !== 'pre') {
                            targetTag = targetTag.parentNode;
                        }
                        if (targetTag.tagName.toLocaleLowerCase() === 'pre') {
                            let parentContainer = rangeObj.commonAncestorContainer.parentNode;
                            while (parentContainer.tagName.toLocaleLowerCase() !== 'p') {
                                parentContainer = parentContainer.parentNode;
                            }
                            selectHtml = parentContainer.innerHTML;
                            parentContainer.parentNode.removeChild(parentContainer);
                            oQuote = document.createElement("blockquote");
                            oQuote.style.paddingLeft = '10px';
                            oQuote.style.borderLeft = '4px solid #eee';
                            oQuote.style.margin = '4px 0';
                            oQuote.style.lineHeight = '20px';
                            oQuote.style.color = '#999';
                            oQuote.innerHTML = selectHtml;
                            targetTag.parentNode.insertBefore(oQuote, targetTag.nextSibling);

                        } else {
                            result = targetTag.outerHTML;
                            result = result.replace(/<\/div>/ig, '</blockquote>');
                            result = result.replace(/<div\s?/ig, '<blockquote style="padding-left: 10px; border-left: 4px solid #eee; margin: 4px 0; line-height:20px;color:#999;"');
                            targetTag.outerHTML = result;
                        }
                    }
                    this.quoteType = 'primary';
                } else if (this.quoteType === 'primary') {
                    if (container.nodeName === '#text') {
                        targetTag = rangeObj.commonAncestorContainer.parentNode;

                        while (targetTag.className !== 'publish-content' && targetTag.tagName.toLocaleLowerCase() !== 'blockquote') {
                            targetTag = targetTag.parentNode;
                        }

                        if (targetTag.className !== 'publish-content') {
                            result = targetTag.outerHTML;
                            result = result.replace(/<\/blockquote>/ig, '</div>');
                            result = result.replace(/<blockquote style="[^"]+"/ig, '<div class="common-tag"');
                            targetTag.outerHTML = result;
                        }
                    } else {
                        docFragment = rangeObj.extractContents();
                        oDiv = document.createElement("div");
                        oDiv.appendChild(docFragment);
                        selectHtml = oDiv.innerHTML;
                        if (selectHtml !== '') {
                            contentArr = selectHtml.split(/<blockquote[^>]+>/);
                            for (let i = contentArr.length - 1; i >= 0; i--) {
                                if (contentArr[i] !== '') {
                                    let iTag = document.createElement("div");
                                    iTag.className = 'common-tag';
                                    iTag.innerHTML = contentArr[i].replace(/<\/blockquote>/ig, '');
                                    rangeObj.insertNode(iTag);
                                }
                            }
                        } else {
                            result = container.outerHTML;
                            result = result.replace(/<\/blockquote>/ig, '</div>');
                            result = result.replace(/<blockquote style="[^"]+"/ig, '<div class="common-tag"');
                            container.outerHTML = result;
                        }
                    }
                    this.quoteType = 'text';
                }
                // let publishContent = document.querySelector('.publish-content');
                // let allTags = publishContent.getElementsByTagName('*');
                // for (let i = allTags.length - 1; i >= 0; i--) {
                //     if (allTags[i].innerHTML === '') {
                //         allTags[i].parentNode.removeChild(allTags[i]);
                //     }
                // }
                let contentWrap = document.querySelector('.content-wrap');
                if (contentWrap) {
                    contentWrap.innerHTML += `<div class="common-tag"><br></div>`;
                }
            },
            codeModify: function () {
                let selectionObj = window.getSelection();
                let rangeObj = selectionObj.getRangeAt(0);
                let container = rangeObj.commonAncestorContainer;
                let selectHtml;
                let preTag;
                let result;

                if (this.codeType === 'text') {
                    if (container.nodeName !== '#text') {
                        let docFragment = rangeObj.extractContents();
                        let oDiv = document.createElement("div");
                        oDiv.appendChild(docFragment);
                        selectHtml = oDiv.innerHTML.replace(/class="common-tag"/ig, '');
                        selectHtml = selectHtml.replace(/<\/div>/ig, '</p>');
                        selectHtml = selectHtml.replace(/<div\s?/ig, '<p ');
                        // 引用块转代码块：
                        selectHtml = selectHtml.replace(/style="[^"]+"/ig, '');
                        selectHtml = selectHtml.replace(/<\/blockquote>/ig, '</p>');
                        selectHtml = selectHtml.replace(/<blockquote\s?/ig, '<p ');

                        preTag = document.createElement("pre");
                        preTag.style.padding = '10px';
                        preTag.style.margin = '4px 0';
                        preTag.style.fontSize = '12px';
                        preTag.style.borderRadius = '4px';
                        preTag.style.backgroundColor = '#eee';
                        preTag.style.color = '#000';
                        preTag.style.lineHeight = '18px';
                        preTag.innerHTML = selectHtml;
                        rangeObj.insertNode(preTag);
                    } else {
                        while (container.parentNode.className !== 'common-tag' && container.parentNode.tagName.toLocaleLowerCase() !== 'blockquote') {
                            container = container.parentNode;
                        }
                        result = container.parentNode.outerHTML;
                        result = result.replace(/<\/div>/ig, '</pre>');
                        result = result.replace(/<div\s?/ig, '<pre style="padding: 10px; font-size: 12px; margin: 4px 0; line-height:18px;color:#333; background-color:#eee; border-radius:4px;"');
                        // 引用块转代码块：
                        result = result.replace(/<\/blockquote>/ig, '</pre>');
                        result = result.replace(/<blockquote\s?/ig, '<pre ');
                        result = result.replace(/style="[^"]+"/ig, 'style="padding: 10px; font-size: 12px; margin: 4px 0; line-height:18px;color:#333; background-color:#eee; border-radius:4px;"');
                        result = result.replace(container.parentNode.innerHTML, `<p>${container.parentNode.innerHTML}</p>`);
                        container.parentNode.outerHTML = result;
                    }
                    this.codeType = 'primary'
                } else {
                    if (container.nodeName === '#text') {
                        container = container.parentNode;
                    }

                    while (container.className !== 'publish-content' && container.tagName.toLocaleLowerCase() !== 'pre') {
                        container = container.parentNode;
                    }

                    if (container.className !== 'publish-content') {
                        result = container.outerHTML;
                        result = result.replace(/<\/pre>/ig, '</div>');
                        result = result.replace(/<pre style="[^"]+"/ig, '<div class="common-tag"');
                        container.outerHTML = result;
                    }
                    this.codeType = 'text'
                }
                // let publishContent = document.querySelector('.publish-content');
                // let allTags = publishContent.getElementsByTagName('*');
                // for (let i = allTags.length - 1; i >= 0; i--) {
                //     if (allTags[i].innerHTML === '') {
                //         allTags[i].parentNode.removeChild(allTags[i]);
                //     }
                // }
                let contentWrap = document.querySelector('.content-wrap');
                if (contentWrap) {
                    contentWrap.innerHTML += `<div class="common-tag"><br></div>`;
                }
            },
            olModify: function () {
                document.execCommand("InsertOrderedList", false, null);

                if (this.olType === 'text') {
                    this.olType = 'primary'
                } else {
                    this.olType = 'text'
                }

                let publishContent = document.querySelector('.publish-content');
                let olTag = publishContent.getElementsByTagName('ol');
                if (olTag) {
                    for (let i = 0; i < olTag.length; i++) {
                        let liTag = olTag[i].getElementsByTagName('li');
                        for (let j = 0; j < liTag.length; j++) {
                            liTag[j].style.listStyle = 'decimal inside none';
                        }
                    }
                }
                let contentWrap = document.querySelector('.content-wrap');
                if (contentWrap) {
                    contentWrap.innerHTML += `<div class="common-tag"><br></div>`;
                }
            },
            ulModify: function () {
                document.execCommand("InsertUnorderedList", false, null);

                if (this.ulType === 'text') {
                    this.ulType = 'primary'
                } else {
                    this.ulType = 'text'
                }

                let publishContent = document.querySelector('.publish-content');
                let ulTag = publishContent.getElementsByTagName('ul');
                if (ulTag) {
                    for (let i = 0; i < ulTag.length; i++) {
                        let liTag = ulTag[i].getElementsByTagName('li');
                        for (let j = 0; j < liTag.length; j++) {
                            liTag[j].style.listStyle = 'disc inside none';
                        }
                    }
                }
                let contentWrap = document.querySelector('.content-wrap');
                if (contentWrap) {
                    contentWrap.innerHTML += `<div class="common-tag"><br></div>`;
                }
            },
            noteModify: function () {
                this.showDialog('noteRef', function () {
                }, function () {
                });
            },
            linkModify: function () {
                this.showDialog('linkRef', function () {
                }, function () {
                });
            },
            splitModify: function () {
                var selectionObj = window.getSelection();
                var rangeObj = selectionObj.getRangeAt(0);
                // var container = rangeObj.commonAncestorContainer;
                rangeObj.extractContents();     //移除选区文档片段

                // if (container.nodeName === '#text') {
                //     container = container.parentNode;
                // }
                //
                // while (container.parentNode.className !== 'content-wrap') {
                //     container = container.parentNode;
                // }

                let oHr = document.createElement("hr");
                // let oBr = document.createElement("br");
                oHr.style.width = "50%";
                oHr.style.margin = '20px auto';
                oHr.style.border = 'none';
                oHr.style.borderTop = '1px solid #eee';

                rangeObj.insertNode(oHr);
                // oHr.parentNode.insertBefore(oBr, oHr.nextSibling);
            },
            clearModify: function () {
                let selectionObj;
                let rangeObj;
                let container;
                let targetTag;
                let oDiv;
                let selectHtml;
                let result;
                let contentArr;
                let docFragment;
                selectionObj = window.getSelection();
                rangeObj = selectionObj.getRangeAt(0);
                this.rangeObj = rangeObj;
                container = rangeObj.commonAncestorContainer;

                if (container.nodeName === '#text') {
                    targetTag = container.parentNode;
                } else {
                    targetTag = container;
                }

                if (this.quoteType === 'primary') {
                    // 取消引用块：
                    container = this.rangeObj.commonAncestorContainer;
                    if (container.nodeName === '#text') {
                        targetTag = this.rangeObj.commonAncestorContainer.parentNode;

                        while (targetTag.className !== 'publish-content' && targetTag.tagName.toLocaleLowerCase() !== 'blockquote') {
                            targetTag = targetTag.parentNode;
                        }

                        if (targetTag.className !== 'publish-content') {
                            result = targetTag.outerHTML;
                            result = result.replace(/<\/blockquote>/ig, '</div>');
                            result = result.replace(/<blockquote style="[^"]+"/ig, '<div class="common-tag"');
                            targetTag.outerHTML = result;
                        }
                    } else {
                        docFragment = this.rangeObj.extractContents();
                        oDiv = document.createElement("div");
                        oDiv.appendChild(docFragment);
                        selectHtml = oDiv.innerHTML;
                        if (selectHtml !== '') {
                            contentArr = selectHtml.split(/<blockquote[^>]+>/);
                            for (let i = contentArr.length - 1; i >= 0; i--) {
                                if (contentArr[i] !== '') {
                                    let iTag = document.createElement("div");
                                    iTag.className = 'common-tag';
                                    iTag.innerHTML = contentArr[i].replace(/<\/blockquote>/ig, '');
                                    this.rangeObj.insertNode(iTag);
                                }
                            }
                        } else {
                            result = container.outerHTML;
                            result = result.replace(/<\/blockquote>/ig, '</div>');
                            result = result.replace(/<blockquote style="[^"]+"/ig, '<div class="common-tag"');
                            container.outerHTML = result;
                        }
                    }
                    this.quoteType = 'text';
                }

                if (this.codeType === 'primary') {
                    // 取消代码块：
                    container = this.rangeObj.commonAncestorContainer;
                    if (container.nodeName === '#text') {
                        container = container.parentNode;
                    }

                    while (container.className !== 'publish-content' && container.tagName.toLocaleLowerCase() !== 'pre') {
                        container = container.parentNode;
                    }

                    if (container.className !== 'publish-content') {
                        result = container.outerHTML;
                        result = result.replace(/<\/pre>/ig, '</div>');
                        result = result.replace(/<pre style="[^"]+"/ig, '<div class="common-tag"');
                        container.outerHTML = result;
                    }
                    this.codeType = 'text'
                }

                result = targetTag.innerHTML.replace(/<i>/ig, '');
                result = result.replace(/<\/i>/ig, '');
                result = result.replace(/<b>/ig, '');
                result = result.replace(/<\/b>/ig, '');
                result = result.replace(/<\/font>/ig, '');
                result = result.replace(/<font size="\d+">/ig, '');
                targetTag.innerHTML = result;

                if (this.olType === 'primary') {
                    // 清除有序列表：
                    this.olType = 'text';
                    document.execCommand("InsertOrderedList", false, null);
                }

                if (this.ulType === 'primary') {
                    // 清除无序列表：
                    this.ulType = 'text';
                    document.execCommand("InsertUnorderedList", false, null);
                }

                // let publishContent = document.querySelector('.publish-content');
                // let allTags = publishContent.getElementsByTagName('*');
                // for (let i = allTags.length - 1; i >= 0; i--) {
                //     if (allTags[i].innerHTML === '') {
                //         allTags[i].parentNode.removeChild(allTags[i]);
                //     }
                // }
            },

            insertLink: function (value, link) {
                document.querySelector('.publish-content').focus();

                let selection = window.getSelection();
                selection.removeAllRanges();
                let range = document.createRange();
                range.setStart(this.rangeObj.startContainer, this.rangeObj.startOffset);
                range.setEnd(this.rangeObj.endContainer, this.rangeObj.endOffset);
                selection.addRange(range);

                if (range.collapsed) {
                    let linkStr = `<a href="${link}">${value}</a>`;
                    document.execCommand('insertHTML', false, linkStr);
                } else {
                    document.execCommand('createLink', false, link);
                }
            },
            insertNote: function (value, link) {
                let selection;
                let range;
                let oDiv;
                let noteContent;
                let publishContent = document.querySelector('.publish-content');
                publishContent.focus();

                // 获取上一步的光标所在位置：
                selection = window.getSelection();
                selection.removeAllRanges();
                range = document.createRange();
                range.setStart(this.rangeObj.startContainer, this.rangeObj.startOffset);
                range.setEnd(this.rangeObj.endContainer, this.rangeObj.endOffset);
                selection.addRange(range);
                this.rangeObj = range;

                this.rangeObj.extractContents();
                oDiv = document.createElement("sup");
                oDiv.style.color = '#999';
                oDiv.style.userSelect = 'none';
                oDiv.innerHTML = `[${this.noteNum}]`;
                this.rangeObj.insertNode(oDiv);

                if (!document.querySelector('.publish-content .note-content')) {
                    noteContent = `
                        <div class="note-content" style="padding: 40px 10px 20px 10px; font-size: small;"></div>
                    `;
                    publishContent.innerHTML += noteContent;
                }

                if (!document.querySelector('.publish-content .note-content .note-content-title')) {
                    noteContent = `
                        <h3 class="note-content-title" style="margin-bottom: 10px;">参考：</h3>
                    `;
                    document.querySelector('.publish-content .note-content').innerHTML += noteContent;
                }

                if (!document.querySelector('.note-content .note-text')) {
                    noteContent = `
                        <ol class="note-text" style="list-style: decimal inside none;"></ol>
                    `;
                    document.querySelector('.publish-content .note-content').innerHTML += noteContent;
                }

                document.querySelector('.publish-content .note-text').innerHTML += `<li index="${this.noteNum}">${this.noteNum}. ${value}<a href="${link}"> ${link}</a></li>`;

                this.noteNum++;
            },

            // 事件：
            imgBtnRef_buttonClickEvent: function () {
                this.addPicture();
            },
            videoBtnRef_buttonClickEvent: function () {
                this.addVideo();
            },
            boldBtnRef_buttonClickEvent: function () {
                this.boldModify();
            },
            italicBtnRef_buttonClickEvent: function () {
                this.italicModify();
            },
            h1BtnRef_buttonClickEvent: function () {
                this.h1Modify();
            },
            h2BtnRef_buttonClickEvent: function () {
                this.h2Modify();
            },
            quoteBtnRef_buttonClickEvent: function () {
                this.quoteModify();
            },
            codeBtnRef_buttonClickEvent: function () {
                this.codeModify();
            },
            olBtnRef_buttonClickEvent: function () {
                this.olModify();
            },
            ulBtnRef_buttonClickEvent: function () {
                this.ulModify();
            },
            noteBtnRef_buttonClickEvent: function () {
                this.noteModify();
            },
            linkBtnRef_buttonClickEvent: function () {
                this.linkModify();
            },
            splitBtnRef_buttonClickEvent: function () {
                this.splitModify();
            },
            clearBtnRef_buttonClickEvent: function () {
                this.clearModify();
            },
            linkRef_contentEvent: function (ref, value, link) {
                this.insertLink(value, link);
            },
            noteRef_contentEvent: function (ref, value, link) {
                this.insertNote(value, link);
            }
        }
    };
</script>
<style lang="scss">
    .el-popover--plain {
        padding: 6px 10px;
    }

    #text-editor {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        .cancel-bold {
            font-weight: 400;
        }

        .note-dialog {
            z-index: 10;
        }

        .link-dialog {
            z-index: 10;
        }

        .publish-content {
            flex: 1;
            border: 1px solid rgba(229, 229, 229, 1);
            border-radius: 4px;

            &:focus {
                outline: none;
                border: 1px solid #409EFF;
            }
        }

        .text-num {
            text-align: right;
            padding-right: 10px;
        }

        .editor-tools {
            flex: 0;
            padding: 4px 10px;
            background-color: #fff;
            border: 1px solid rgba(229, 229, 229, 1);
            background: linear-gradient(0deg, rgba(242, 242, 242, 1) 0%, rgba(249, 249, 249, 1) 49%, rgba(255, 255, 255, 1) 100%);
            box-shadow: 0 1px 3px 0 rgba(48, 49, 51, 0.15);
            border-radius: 4px 4px 0 0;

            .el-button--text {
                color: #303133;

                &:hover {
                    color: #409EFF;
                }
            }

            div {
                display: inline-block;
                margin-right: 2px;

                .el-button {
                    padding: 0;
                }
            }

            .img-btn, .video-btn {
                .el-pictureUpload {
                    margin-bottom: 0;

                    .el-button {
                        width: 40px;
                        height: 28px;
                    }
                }
            }

            .video-btn {
                .el-button--text {
                    color: #909399;

                    &:hover {
                        color: #909399;
                    }
                }
            }

            .fontSize-select {
                width: 90px;
            }
        }
    }
</style>