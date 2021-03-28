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
                        ref="boldPopRef"
                        refId="boldPopRef"
                        v-show="pvt_isShow.boldPop === 'boldPopRef'"
                        :paraVarPair="pvt_boldPop.boldPopRef.paraVarPair"
                        :para="pvt_boldPop.boldPopRef.para"
                        :attr="pvt_boldPop.boldPopRef.attr">
                </lm-popover>
            </div>
            <div class="italic-pop">
                <lm-popover
                        ref="italicPopRef"
                        refId="italicPopRef"
                        v-show="pvt_isShow.italicPop === 'italicPopRef'"
                        :paraVarPair="pvt_italicPop.italicPopRef.paraVarPair"
                        :para="pvt_italicPop.italicPopRef.para"
                        :attr="pvt_italicPop.italicPopRef.attr">
                </lm-popover>
            </div>
            <div class="h1-pop">
                <lm-popover
                        ref="h1PopRef"
                        refId="h1PopRef"
                        v-show="pvt_isShow.h1Pop === 'h1PopRef'"
                        :paraVarPair="pvt_h1Pop.h1PopRef.paraVarPair"
                        :para="pvt_h1Pop.h1PopRef.para"
                        :attr="pvt_h1Pop.h1PopRef.attr">
                </lm-popover>
            </div>
            <div class="h2-pop">
                <lm-popover
                        ref="h2PopRef"
                        refId="h2PopRef"
                        v-show="pvt_isShow.h2Pop === 'h2PopRef'"
                        :paraVarPair="pvt_h2Pop.h2PopRef.paraVarPair"
                        :para="pvt_h2Pop.h2PopRef.para"
                        :attr="pvt_h2Pop.h2PopRef.attr">
                </lm-popover>
            </div>
            <div class="quote-pop">
                <lm-popover
                        ref="quotePopRef"
                        refId="quotePopRef"
                        v-show="pvt_isShow.quotePop === 'quotePopRef'"
                        :paraVarPair="pvt_quotePop.quotePopRef.paraVarPair"
                        :para="pvt_quotePop.quotePopRef.para"
                        :attr="pvt_quotePop.quotePopRef.attr">
                </lm-popover>
            </div>
            <div class="code-pop">
                <lm-popover
                        ref="codePopRef"
                        refId="codePopRef"
                        v-show="pvt_isShow.codePop === 'codePopRef'"
                        :paraVarPair="pvt_codePop.codePopRef.paraVarPair"
                        :para="pvt_codePop.codePopRef.para"
                        :attr="pvt_codePop.codePopRef.attr">
                </lm-popover>
            </div>
            <div class="ol-pop">
                <lm-popover
                        ref="olPopRef"
                        refId="olPopRef"
                        v-show="pvt_isShow.olPop === 'olPopRef'"
                        :paraVarPair="pvt_olPop.olPopRef.paraVarPair"
                        :para="pvt_olPop.olPopRef.para"
                        :attr="pvt_olPop.olPopRef.attr">
                </lm-popover>
            </div>
            <div class="ul-pop">
                <lm-popover
                        ref="ulPopRef"
                        refId="ulPopRef"
                        v-show="pvt_isShow.ulPop === 'ulPopRef'"
                        :paraVarPair="pvt_ulPop.ulPopRef.paraVarPair"
                        :para="pvt_ulPop.ulPopRef.para"
                        :attr="pvt_ulPop.ulPopRef.attr">
                </lm-popover>
            </div>
            <div class="note-pop">
                <lm-popover
                        ref="notePopRef"
                        refId="notePopRef"
                        v-show="pvt_isShow.notePop === 'notePopRef'"
                        :paraVarPair="pvt_notePop.notePopRef.paraVarPair"
                        :para="pvt_notePop.notePopRef.para"
                        :attr="pvt_notePop.notePopRef.attr">
                </lm-popover>
            </div>
            <div class="link-pop">
                <lm-popover
                        ref="linkPopRef"
                        refId="linkPopRef"
                        v-show="pvt_isShow.linkPop === 'linkPopRef'"
                        :paraVarPair="pvt_linkPop.linkPopRef.paraVarPair"
                        :para="pvt_linkPop.linkPopRef.para"
                        :attr="pvt_linkPop.linkPopRef.attr">
                </lm-popover>
            </div>

            <div class="img-pop">
                <lm-popover
                        ref="imgPopRef"
                        refId="imgPopRef"
                        v-show="pvt_isShow.imgPop === 'imgPopRef'"
                        :paraVarPair="pvt_imgPop.imgPopRef.paraVarPair"
                        :para="pvt_imgPop.imgPopRef.para"
                        :attr="pvt_imgPop.imgPopRef.attr">
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
                        ref="splitPopRef"
                        refId="splitPopRef"
                        v-show="pvt_isShow.splitPop === 'splitPopRef'"
                        :paraVarPair="pvt_splitPop.splitPopRef.paraVarPair"
                        :para="pvt_splitPop.splitPopRef.para"
                        :attr="pvt_splitPop.splitPopRef.attr">
                </lm-popover>
            </div>
            <div class="clear-pop">
                <lm-popover
                        ref="clearPopRef"
                        refId="clearPopRef"
                        v-show="pvt_isShow.clearPop === 'clearPopRef'"
                        :paraVarPair="pvt_clearPop.clearPopRef.paraVarPair"
                        :para="pvt_clearPop.clearPopRef.para"
                        :attr="pvt_clearPop.clearPopRef.attr">
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
                <lm-button
                        ref="boldBtnRef"
                        refId="boldBtnRef"
                        v-show="pvt_isShow.boldBtn === 'boldBtnRef'"
                        :paraVarPair="pvt_boldBtn.boldBtnRef.paraVarPair"
                        :para="pvt_boldBtn.boldBtnRef.para"
                        :attr="pvt_boldBtn.boldBtnRef.attr">
                </lm-button>
            </div>
            <div class="italic-btn" ref="italicBtn">
                <lm-button
                        ref="italicBtnRef"
                        refId="italicBtnRef"
                        v-show="pvt_isShow.italicBtn === 'italicBtnRef'"
                        :paraVarPair="pvt_italicBtn.italicBtnRef.paraVarPair"
                        :para="pvt_italicBtn.italicBtnRef.para"
                        :attr="pvt_italicBtn.italicBtnRef.attr">
                </lm-button>
            </div>
            <div class="h1-btn" ref="h1Btn">
                <lm-button
                        ref="h1BtnRef"
                        refId="h1BtnRef"
                        v-show="pvt_isShow.h1Btn === 'h1BtnRef'"
                        :paraVarPair="pvt_h1Btn.h1BtnRef.paraVarPair"
                        :para="pvt_h1Btn.h1BtnRef.para"
                        :attr="pvt_h1Btn.h1BtnRef.attr">
                </lm-button>
            </div>
            <div class="h2-btn" ref="h2Btn">
                <lm-button
                        ref="h2BtnRef"
                        refId="h2BtnRef"
                        v-show="pvt_isShow.h2Btn === 'h2BtnRef'"
                        :paraVarPair="pvt_h2Btn.h2BtnRef.paraVarPair"
                        :para="pvt_h2Btn.h2BtnRef.para"
                        :attr="pvt_h2Btn.h2BtnRef.attr">
                </lm-button>
            </div>
            <div class="quote-btn" ref="quoteBtn">
                <lm-button
                        ref="quoteBtnRef"
                        refId="quoteBtnRef"
                        v-show="pvt_isShow.quoteBtn === 'quoteBtnRef'"
                        :paraVarPair="pvt_quoteBtn.quoteBtnRef.paraVarPair"
                        :para="pvt_quoteBtn.quoteBtnRef.para"
                        :attr="pvt_quoteBtn.quoteBtnRef.attr">
                </lm-button>
            </div>
            <div class="code-btn" ref="codeBtn">
                <lm-button
                        ref="codeBtnRef"
                        refId="codeBtnRef"
                        v-show="pvt_isShow.codeBtn === 'codeBtnRef'"
                        :paraVarPair="pvt_codeBtn.codeBtnRef.paraVarPair"
                        :para="pvt_codeBtn.codeBtnRef.para"
                        :attr="pvt_codeBtn.codeBtnRef.attr">
                </lm-button>
            </div>
            <div class="ol-btn" ref="olBtn">
                <lm-button
                        ref="olBtnRef"
                        refId="olBtnRef"
                        v-show="pvt_isShow.olBtn === 'olBtnRef'"
                        :paraVarPair="pvt_olBtn.olBtnRef.paraVarPair"
                        :para="pvt_olBtn.olBtnRef.para"
                        :attr="pvt_olBtn.olBtnRef.attr">
                </lm-button>
            </div>
            <div class="ul-btn" ref="ulBtn">
                <lm-button
                        ref="ulBtnRef"
                        refId="ulBtnRef"
                        v-show="pvt_isShow.ulBtn === 'ulBtnRef'"
                        :paraVarPair="pvt_ulBtn.ulBtnRef.paraVarPair"
                        :para="pvt_ulBtn.ulBtnRef.para"
                        :attr="pvt_ulBtn.ulBtnRef.attr">
                </lm-button>
            </div>
            <div class="note-btn" ref="noteBtn">
                <lm-button
                        ref="noteBtnRef"
                        refId="noteBtnRef"
                        v-show="pvt_isShow.noteBtn === 'noteBtnRef'"
                        :paraVarPair="pvt_noteBtn.noteBtnRef.paraVarPair"
                        :para="pvt_noteBtn.noteBtnRef.para"
                        :attr="pvt_noteBtn.noteBtnRef.attr">
                </lm-button>
            </div>
            <div class="link-btn" ref="linkBtn">
                <lm-button
                        ref="linkBtnRef"
                        refId="linkBtnRef"
                        v-show="pvt_isShow.linkBtn === 'linkBtnRef'"
                        :paraVarPair="pvt_linkBtn.linkBtnRef.paraVarPair"
                        :para="pvt_linkBtn.linkBtnRef.para"
                        :attr="pvt_linkBtn.linkBtnRef.attr">
                </lm-button>
            </div>

            <div class="img-btn" ref="imgBtn">
                <lm-button
                        ref="imgBtnRef"
                        refId="imgBtnRef"
                        v-show="pvt_isShow.imgBtn === 'imgBtnRef'"
                        :paraVarPair="pvt_imgBtn.imgBtnRef.paraVarPair"
                        :para="pvt_imgBtn.imgBtnRef.para"
                        :attr="pvt_imgBtn.imgBtnRef.attr">
                </lm-button>
            </div>
            <div class="video-btn" ref="videoBtn">
                <lm-button
                        ref="videoBtnRef"
                        refId="videoBtnRef"
                        v-show="pvt_isShow.videoBtn === 'videoBtnRef'"
                        :paraVarPair="pvt_videoBtn.videoBtnRef.paraVarPair"
                        :para="pvt_videoBtn.videoBtnRef.para"
                        :attr="pvt_videoBtn.videoBtnRef.attr">
                </lm-button>
            </div>
            <div class="split-btn" ref="splitBtn">
                <lm-button
                        ref="splitBtnRef"
                        refId="splitBtnRef"
                        v-show="pvt_isShow.splitBtn === 'splitBtnRef'"
                        :paraVarPair="pvt_splitBtn.splitBtnRef.paraVarPair"
                        :para="pvt_splitBtn.splitBtnRef.para"
                        :attr="pvt_splitBtn.splitBtnRef.attr">
                </lm-button>
            </div>
            <div class="clear-btn" ref="clearBtn">
                <lm-button
                        ref="clearBtnRef"
                        refId="clearBtnRef"
                        v-show="pvt_isShow.clearBtn === 'clearBtnRef'"
                        :paraVarPair="pvt_clearBtn.clearBtnRef.paraVarPair"
                        :para="pvt_clearBtn.clearBtnRef.para"
                        :attr="pvt_clearBtn.clearBtnRef.attr">
                </lm-button>
            </div>
        </div>
        <div ref="editorText" @blur="inputBlur" @keydown="keydownEvent($event)" @keyup="formatTag($event)" @mouseup="changeStyle"
             class="publish-content" style="overflow: auto;" contentEditable>
            <div class="content-wrap"
                 style="font-family: SourceHanSansCN-Medium; font-size: small; line-height: 24px; padding: 10px;">
                <div class="common-tag"><br></div>
            </div>
        </div>
        <div class="text-num">
            <lm-link-text
                    ref="textNumRef"
                    refId="textNumRef"
                    v-show="pvt_isShow.textNum === 'textNumRef'"
                    :paraVarPair="pvt_textNum.textNumRef.paraVarPair"
                    :para="pvt_textNum.textNumRef.para"
                    :attr="pvt_textNum.textNumRef.attr">
            </lm-link-text>
        </div>
        <div class="note-dialog">
            <message
                    ref="noteRef"
                    refId="noteRef"
                    v-show="pvt_isShow.note === 'noteRef'"
                    :paraVarPair="pvt_note.noteRef.paraVarPair"
                    :para="pvt_note.noteRef.para"
                    :attr="pvt_note.noteRef.attr">
            </message>
        </div>
        <div class="link-dialog">
            <message
                    ref="linkRef"
                    refId="linkRef"
                    v-show="pvt_isShow.link === 'linkRef'"
                    :paraVarPair="pvt_link.linkRef.paraVarPair"
                    :para="pvt_link.linkRef.para"
                    :attr="pvt_link.linkRef.attr">
            </message>
        </div>
        <input type="file" ref="file" class="el-upload__input" @change="pictureUploadChangeEvent">
    </div>
</template>
<script>
    import message from './messageDialog';
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        components: {
            message
        },
        data: function () {
            return {
                mac: mac.mac,

                fileNameArr: [],
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

                pvt_subModuleMap: {
                    vessel: ['quoteBtn', 'codeBtn', 'olBtn', 'ulBtn', 'noteBtn', 'linkBtn', 'formulaBtn', 'splitBtn', 'clearBtn', 'imgBtn', 'videoBtn', 'audioBtn', 'boldBtn', 'italicBtn', 'h1Btn', 'h2Btn', 'link', 'note', 'textNum', 'quotePop', 'codePop', 'olPop', 'ulPop', 'notePop', 'linkPop', 'formulaPop', 'splitPop', 'clearPop', 'imgPop', 'videoPop', 'audioPop', 'boldPop', 'italicPop', 'h1Pop', 'h2Pop'],
                    subModule: ['quoteBtnRef', 'codeBtnRef', 'olBtnRef', 'ulBtnRef', 'noteBtnRef', 'linkBtnRef', 'formulaBtnRef', 'splitBtnRef', 'clearBtnRef', 'imgBtnRef', 'videoBtnRef', 'audioBtnRef', 'boldBtnRef', 'italicBtnRef', 'h1BtnRef', 'h2BtnRef', 'linkRef', 'noteRef', 'textNumRef', 'quotePopRef', 'codePopRef', 'olPopRef', 'ulPopRef', 'notePopRef', 'linkPopRef', 'formulaPopRef', 'splitPopRef', 'clearPopRef', 'imgPopRef', 'videoPopRef', 'audioPopRef', 'boldPopRef', 'italicPopRef', 'h1PopRef', 'h2PopRef']
                },

                pvt_isShow: {
                    quotePop: null,
                    codePop: null,
                    olPop: null,
                    ulPop: null,
                    notePop: null,
                    linkPop: null,
                    formulaPop: null,
                    splitPop: null,
                    clearPop: null,
                    imgPop: null,
                    videoPop: null,
                    audioPop: null,
                    boldPop: null,
                    italicPop: null,
                    h1Pop: null,
                    h2Pop: null,
                    link: null,
                    note: null,
                    textNum: null,

                    quoteBtn: null,
                    codeBtn: null,
                    olBtn: null,
                    ulBtn: null,
                    noteBtn: null,
                    linkBtn: null,
                    formulaBtn: null,
                    splitBtn: null,
                    clearBtn: null,
                    imgBtn: null,
                    videoBtn: null,
                    audioBtn: null,
                    boldBtn: null,
                    italicBtn: null,
                    h1Btn: null,
                    h2Btn: null,

                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['getImgEvent', 'blurEvent'],
            }
        },
        computed: {
            pvt_textNum: function () {
                return {
                    textNumRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.textNum
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#C0C4CC'
                        }
                    }
                }
            },

            pvt_note: function () {
                return {
                    noteRef: {
                        paraVarPair: {},
                        para: {
                            input1: '注释内容',
                            input2: '注释地址',
                            titleValue: '插入注释'
                        },
                        attr: {}
                    }
                }
            },

            pvt_link: function () {
                return {
                    linkRef: {
                        paraVarPair: {},
                        para: {
                            input1: '链接内容',
                            input2: '链接地址',
                            titleValue: '插入链接'
                        },
                        attr: {}
                    }
                }
            },

            pvt_quoteBtn: function () {
                return {
                    quoteBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-document-copy']
                        },
                        attr: {
                            type: this.quoteType,
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_codeBtn: function () {
                return {
                    codeBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-edit']
                        },
                        attr: {
                            type: this.codeType,
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_olBtn: function () {
                return {
                    olBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-s-fold']
                        },
                        attr: {
                            type: this.olType,
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_ulBtn: function () {
                return {
                    ulBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-s-operation']
                        },
                        attr: {
                            type: this.ulType,
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_noteBtn: function () {
                return {
                    noteBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-notebook-2']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_linkBtn: function () {
                return {
                    linkBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-paperclip']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_formulaBtn: function () {
                return {
                    formulaBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-setting']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_splitBtn: function () {
                return {
                    splitBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-minus']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_clearBtn: function () {
                return {
                    clearBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-delete']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_imgBtn: function () {
                return {
                    imgBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-picture']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px'
                        }
                    }
                }
            },

            pvt_videoBtn: function () {
                return {
                    videoBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-video-camera']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px',
                            disabled: true
                        }
                    }
                }
            },

            pvt_audioBtn: function () {
                return {
                    audioBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-bell']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px',
                        }
                    }
                }
            },

            pvt_boldBtn: function () {
                return {
                    boldBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['B', '']
                        },
                        attr: {
                            type: this.boldBtnType,
                            width: '40px',
                            height: '28px',
                        }
                    }
                }
            },

            pvt_italicBtn: function () {
                return {
                    italicBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['/', '']
                        },
                        attr: {
                            type: this.italicBtnType,
                            width: '40px',
                            height: '28px',
                        }
                    }
                }
            },

            pvt_h1Btn: function () {
                return {
                    h1BtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['H1', '']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px',
                        }
                    }
                }
            },

            pvt_h2Btn: function () {
                return {
                    h2BtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['H2', '']
                        },
                        attr: {
                            type: 'text',
                            width: '40px',
                            height: '28px',
                        }
                    }
                }
            },

            pvt_quotePop: function () {
                return {
                    quotePopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '引用块']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.quoteBtn,
                        }
                    }
                }
            },

            pvt_codePop: function () {
                return {
                    codePopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '代码块']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.codeBtn,
                        }
                    }
                }
            },

            pvt_olPop: function () {
                return {
                    olPopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '有序列表']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.olBtn,
                        }
                    }
                }
            },

            pvt_ulPop: function () {
                return {
                    ulPopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '无序列表']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.ulBtn,
                        }
                    }
                }
            },

            pvt_notePop: function () {
                return {
                    notePopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '插入注释']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.noteBtn,
                        }
                    }
                }
            },

            pvt_linkPop: function () {
                return {
                    linkPopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '插入链接']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.linkBtn,
                        }
                    }
                }
            },

            pvt_splitPop: function () {
                return {
                    splitPopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '插入分割线']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.splitBtn,
                        }
                    }
                }
            },

            pvt_clearPop: function () {
                return {
                    clearPopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '清除格式']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.clearBtn,
                        }
                    }
                }
            },

            pvt_imgPop: function () {
                return {
                    imgPopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '插入图片']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.imgBtn,
                        }
                    }
                }
            },

            pvt_videoPop: function () {
                return {
                    videoPopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '插入视频']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.videoBtn,
                        }
                    }
                }
            },

            pvt_boldPop: function () {
                return {
                    boldPopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '加粗']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.boldBtn,
                        }
                    }
                }
            },

            pvt_italicPop: function () {
                return {
                    italicPopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '斜体']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.italicBtn,
                        }
                    }
                }
            },

            pvt_h1Pop: function () {
                return {
                    h1PopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '标题']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.h1Btn,
                        }
                    }
                }
            },

            pvt_h2Pop: function () {
                return {
                    h2PopRef: {
                        paraVarPair: {},
                        para: {
                            balloon: ['', '正文']
                        },
                        attr: {
                            trigger: 'hover',
                            placement: 'bottom',
                            reference: this.h2Btn,
                        }
                    }
                }
            },
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },

        mounted: function () {
            let that = this;
            this.pvt_initSysData();

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
            getHTML: function() {
                return document.querySelector('.publish-content').innerHTML;
            },
            getText: function() {
                return document.querySelector('.publish-content').innerText;
            },

            inputBlur: function() {
                let text = document.querySelector('.publish-content').innerText;
                let html = document.querySelector('.publish-content').innerHTML;
                this.ep.blurEvent(text, html);
            },

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

                let ref = {
                    quoteBtn: 'quoteBtnRef',
                    codeBtn: 'codeBtnRef',
                    olBtn: 'olBtnRef',
                    ulBtn: 'ulBtnRef',
                    noteBtn: 'noteBtnRef',
                    linkBtn: 'linkBtnRef',
                    // formulaBtn: 'formulaBtnRef',
                    splitBtn: 'splitBtnRef',
                    clearBtn: 'clearBtnRef',
                    imgBtn: 'imgBtnRef',
                    // videoBtn: 'videoBtnRef',
                    // audioBtn: 'audioBtnRef',
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
                    // formulaPop: 'formulaPopRef',
                    splitPop: 'splitPopRef',
                    clearPop: 'clearPopRef',
                    imgPop: 'imgPopRef',
                    // videoPop: 'videoPopRef',
                    // audioPop: 'audioPopRef',
                    boldPop: 'boldPopRef',
                    italicPop: 'italicPopRef',
                    h1Pop: 'h1PopRef',
                    h2Pop: 'h2PopRef',
                };

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            that.fileNameArr = [];

                            if (that.para.articleValue) {
                                articleStr = that.para.articleValue;
                                para.nStep = 'getFileName';
                            } else {
                                para.nStep = 'subStart1';
                            }

                            dbFlag++;
                            break;
                        case 'getFileName':
                            tableName = that.para.picture[0].$table;
                            dbData = {};
                            dbData[that.mac.fd.id] = that.para.picture[0].$arrValue;
                            dbData[that.para.picture[0].$arrField[0]] = [];

                            that.sys.api.recordRead(tableName, dbData, function (result) {
                                // 获取图片信息的路径：
                                for (let i = 0; i < dbData[that.para.picture[0].$arrField[0]][0].length; i++) {
                                    para.filePathArr.push(dbData[that.para.picture[0].$arrField[0]][0][i].fileName);
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
                                para.i = 0;
                                para.nStep = 'subStart1';
                                dbFlag += 1;
                                break;
                            }
                            para.filePath = para.filePathArr[para.i];

                            if (para.filePath === '') {
                                para.i++;
                                para.nStep = 'initPicture';
                                dbFlag += 1;
                                break;
                            }

                            record = that.para.picture[0].$arrValue[0];
                            tableName = that.para.picture[0].$table;
                            fieldName = that.para.picture[0].$arrField[0];

                            that.sys.api.readFileBase64(tableName, fieldName, record, para.filePath, function (result) {
                                para.fileContent = result;
                                articleStr = articleStr.replace('src=""', 'src="' + result + '"');
                                para.nStep = 'getImgEvent';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getImgEvent':
                            let imgData = {
                                filePath: para.filePath,
                                content: para.fileContent,
                                thumbnailContent: ''
                            };
                            that.ep.getImgEvent(imgData, function () {
                                para.i++;
                                para.nStep = 'initPicture';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart1':
                            that.sm[ref.quoteBtn].startModule(function () {
                                para.nStep = 'subStart2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart2':
                            that.sm[ref.codeBtn].startModule(function () {
                                para.nStep = 'subStart3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart3':
                            that.sm[ref.olBtn].startModule(function () {
                                para.nStep = 'subStart4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart4':
                            that.sm[ref.ulBtn].startModule(function () {
                                para.nStep = 'subStart5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart5':
                            that.sm[ref.noteBtn].startModule(function () {
                                para.nStep = 'subStart6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart6':
                            that.sm[ref.linkBtn].startModule(function () {
                                para.nStep = 'subStart7';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart7':
                            that.sm[ref.splitBtn].startModule(function () {
                                para.nStep = 'subStart8';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart8':
                            that.sm[ref.clearBtn].startModule(function () {
                                para.nStep = 'subStart9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart9':
                            that.sm[ref.imgBtn].startModule(function () {
                                para.nStep = 'subStart10';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart10':
                            that.sm[ref.boldBtn].startModule(function () {
                                para.nStep = 'subStart11';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart11':
                            that.sm[ref.italicBtn].startModule(function () {
                                para.nStep = 'subStart12';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart12':
                            that.sm[ref.h1Btn].startModule(function () {
                                para.nStep = 'subStart13';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart13':
                            that.sm[ref.h2Btn].startModule(function () {
                                para.nStep = 'subStart14';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart14':
                            that.sm[ref.link].startModule(function () {
                                para.nStep = 'subStart15';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart15':
                            that.sm[ref.note].startModule(function () {
                                para.nStep = 'subStart16';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart16':
                            that.sm[ref.textNum].startModule(function () {
                                para.nStep = 'subStart17';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart17':
                            that.sm[ref.olPop].startModule(function () {
                                para.nStep = 'subStart18';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart18':
                            that.sm[ref.ulPop].startModule(function () {
                                para.nStep = 'subStart19';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart19':
                            that.sm[ref.notePop].startModule(function () {
                                para.nStep = 'subStart20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart20':
                            that.sm[ref.linkPop].startModule(function () {
                                para.nStep = 'subStart21';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart21':
                            that.sm[ref.splitPop].startModule(function () {
                                para.nStep = 'subStart22';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart22':
                            that.sm[ref.clearPop].startModule(function () {
                                para.nStep = 'subStart23';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart23':
                            that.sm[ref.imgPop].startModule(function () {
                                para.nStep = 'subStart24';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart24':
                            that.sm[ref.boldPop].startModule(function () {
                                para.nStep = 'subStart25';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart25':
                            that.sm[ref.italicPop].startModule(function () {
                                para.nStep = 'subStart26';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart26':
                            that.sm[ref.h1Pop].startModule(function () {
                                para.nStep = 'subStart27';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart27':
                            that.sm[ref.h2Pop].startModule(function () {
                                para.nStep = 'subStart28';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart28':
                            that.sm[ref.quotePop].startModule(function () {
                                para.nStep = 'subStart29';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart29':
                            that.sm[ref.codePop].startModule(function () {
                                para.nStep = 'showSub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSub':
                            let refArr = ['quoteBtnRef', 'codeBtnRef', 'olBtnRef', 'ulBtnRef', 'noteBtnRef', 'linkBtnRef', 'splitBtnRef', 'clearBtnRef', 'imgBtnRef', 'boldBtnRef', 'italicBtnRef', 'h1BtnRef', 'h2BtnRef', 'textNumRef', 'quotePopRef', 'codePopRef', 'olPopRef', 'ulPopRef', 'notePopRef', 'linkPopRef', 'splitPopRef', 'clearPopRef', 'imgPopRef', 'boldPopRef', 'italicPopRef', 'h1PopRef', 'h2PopRef'];

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

            pictureUploadChangeEvent: function (event) {
                let errorMes;
                let files = event.target.files;
                if (files.length === 0) {
                    return
                }

                //判断文件类型
                for (let i = 0; i < files.length; i++) {
                    let file = files[i];

                    // 判断是否为重复上传的图片：
                    for(let j = 0; j < this.fileNameArr.length; j++) {
                        if(this.fileNameArr[j] === file.name) {
                            this.$message.warning('不能添加重复图片！');
                            return;
                        }
                    }
                    this.fileNameArr.push(file.name);


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
                            break;
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
                            if (container.innerText.search(/[^\s]/ig) === -1) {
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
                            $this.ep.getImgEvent(imgData, function () {
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
                let that = this;
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

                that.forceUpdateData(function () {
                    that.sm.codeBtnRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.quoteBtnRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.boldBtnRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.italicBtnRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.ulBtnRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.olBtnRef.startModule(function () {
                    }, function () {
                    });
                });

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
                            that.forceUpdateData(function () {
                                that.sm.textNumRef.startModule(function () {
                                }, function () {
                                })
                            });
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
                let that = this;
                if (this.boldBtnType === 'text') {
                    this.boldBtnType = 'primary'
                } else {
                    this.boldBtnType = 'text'
                }
                that.forceUpdateData(function () {
                    that.sm.boldBtnRef.startModule(function () {
                    }, function () {
                    })
                });
                document.execCommand("bold", false, null);
            },
            italicModify: function () {
                let that = this;
                if (this.italicBtnType === 'text') {
                    this.italicBtnType = 'primary'
                } else {
                    this.italicBtnType = 'text'
                }
                that.forceUpdateData(function () {
                    that.sm.italicBtnRef.startModule(function () {
                    }, function () {
                    })
                });
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

                let contentWrap = document.querySelector('.content-wrap');
                if (contentWrap) {
                    contentWrap.innerHTML += `<div class="common-tag"><br></div>`;
                }

                that.forceUpdateData(function () {
                    that.sm.quoteBtnRef.startModule(function () {
                    }, function () {
                    });
                });
            },
            codeModify: function () {
                let that = this;
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

                let contentWrap = document.querySelector('.content-wrap');
                if (contentWrap) {
                    contentWrap.innerHTML += `<div class="common-tag"><br></div>`;
                }

                that.forceUpdateData(function () {
                    that.sm.codeBtnRef.startModule(function () {
                    }, function () {
                    });
                });
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

                that.forceUpdateData(function () {
                    that.sm.olBtnRef.startModule(function () {
                    }, function () {
                    });
                });
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

                that.forceUpdateData(function () {
                    that.sm.ulBtnRef.startModule(function () {
                    }, function () {
                    });
                });
            },
            noteModify: function () {
                this.showSubModule('noteRef', true, function () {
                }, function () {
                });
            },
            linkModify: function () {
                this.showSubModule('linkRef', true, function () {
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

                that.forceUpdateData(function () {
                    that.sm.codeBtnRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.quoteBtnRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.ulBtnRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.olBtnRef.startModule(function () {
                    }, function () {
                    });
                });
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
            linkRef_contentEvent: function (value, link) {
                this.insertLink(value, link);
            },
            noteRef_contentEvent: function (value, link) {
                this.insertNote(value, link);
            }
        }
    };
</script>
<style lang="scss">
    .el-popover--plain {
        padding: 6px 10px;
    }

    .el-popover {
        min-width: auto;
        width: auto;
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