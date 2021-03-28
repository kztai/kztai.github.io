<template>
    <div class="info-dv">
        <div class="info-title">
            <lm-link-text
                    ref="smText1"
                    refId="smText1"
                    v-show="pvt_isShow.v1 === 'smText1'"
                    :paraVarPair="pvt_v1.smText1.paraVarPair"
                    :para="pvt_v1.smText1.para"
                    :attr="pvt_v1.smText1.attr">
            </lm-link-text>
        </div>
        <div class="info-option">
            <div class="item">
                <div class="item-name">
                    <lm-link-text
                            ref="smText2"
                            refId="smText2"
                            v-show="pvt_isShow.v2 === 'smText2'"
                            :paraVarPair="pvt_v2.smText2.paraVarPair"
                            :para="pvt_v2.smText2.para"
                            :attr="pvt_v2.smText2.attr">
                    </lm-link-text>
                </div>
                <div class="item-content item-title">
                    <div>
                        <lm-input-text
                                ref="smInput1"
                                refId="smInput1"
                                v-show="pvt_isShow.v3 === 'smInput1'"
                                :paraVarPair="pvt_v3.smInput1.paraVarPair"
                                :para="pvt_v3.smInput1.para"
                                :attr="pvt_v3.smInput1.attr">
                        </lm-input-text>
                    </div>
                    <div class="info-tip"  v-show="pvt_isShow.v28 === 'smText15'">
                        <lm-link-text
                                ref="smText15"
                                refId="smText15"
                                v-show="pvt_isShow.v28 === 'smText15'"
                                :paraVarPair="pvt_v28.smText15.paraVarPair"
                                :para="pvt_v28.smText15.para"
                                :attr="pvt_v28.smText15.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-name h-148">
                    <lm-link-text
                            ref="smText3"
                            refId="smText3"
                            v-show="pvt_isShow.v4 === 'smText3'"
                            :paraVarPair="pvt_v4.smText3.paraVarPair"
                            :para="pvt_v4.smText3.para"
                            :attr="pvt_v4.smText3.attr">
                    </lm-link-text>
                </div>
                <div class="item-content">
                    <div class="item-picture">
                        <lm-picture-upload
                                ref="smUpLoad"
                                refId="smUpLoad"
                                v-show="pvt_isShow.v5 === 'smUpLoad'"
                                :paraVarPair="pvt_v5.smUpLoad.paraVarPair"
                                :para="pvt_v5.smUpLoad.para"
                                :attr="pvt_v5.smUpLoad.attr">
                        </lm-picture-upload>
                    </div>
                    <div class="item-tips">
                        <div>
                            <lm-link-text
                                    ref="smText4"
                                    refId="smText4"
                                    v-show="pvt_isShow.v6 === 'smText4'"
                                    :paraVarPair="pvt_v6.smText4.paraVarPair"
                                    :para="pvt_v6.smText4.para"
                                    :attr="pvt_v6.smText4.attr">
                            </lm-link-text>
                        </div>
                        <div>
                            <lm-link-text
                                    ref="smText5"
                                    refId="smText5"
                                    v-show="pvt_isShow.v7 === 'smText5'"
                                    :paraVarPair="pvt_v7.smText5.paraVarPair"
                                    :para="pvt_v7.smText5.para"
                                    :attr="pvt_v7.smText5.attr">
                            </lm-link-text>
                        </div>
                        <div>
                            <lm-link-text
                                    ref="smText6"
                                    refId="smText6"
                                    v-show="pvt_isShow.v8 === 'smText6'"
                                    :paraVarPair="pvt_v8.smText6.paraVarPair"
                                    :para="pvt_v8.smText6.para"
                                    :attr="pvt_v8.smText6.attr">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="info-tip t-150"  v-show="pvt_isShow.v29 === 'smText16'">
                        <lm-link-text
                                ref="smText16"
                                refId="smText16"
                                v-show="pvt_isShow.v29 === 'smText16'"
                                :paraVarPair="pvt_v29.smText16.paraVarPair"
                                :para="pvt_v29.smText16.para"
                                :attr="pvt_v29.smText16.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-name">
                    <lm-link-text
                            ref="smText7"
                            refId="smText7"
                            v-show="pvt_isShow.v9 === 'smText7'"
                            :paraVarPair="pvt_v9.smText7.paraVarPair"
                            :para="pvt_v9.smText7.para"
                            :attr="pvt_v9.smText7.attr">
                    </lm-link-text>
                </div>
                <div class="item-content">
                    <div class="item-time-border">
                        <div class="item-time">
                            <lm-date-picker
                                    ref="smDate"
                                    refId="smDate"
                                    v-show="pvt_isShow.v10 === 'smDate'"
                                    :paraVarPair="pvt_v10.smDate.paraVarPair"
                                    :para="pvt_v10.smDate.para"
                                    :attr="pvt_v10.smDate.attr">
                            </lm-date-picker>
                        </div>
                    </div>
                    <div class="info-tip"  v-show="pvt_isShow.v30 === 'smText17'">
                        <lm-link-text
                                ref="smText17"
                                refId="smText17"
                                v-show="pvt_isShow.v30 === 'smText17'"
                                :paraVarPair="pvt_v30.smText17.paraVarPair"
                                :para="pvt_v30.smText17.para"
                                :attr="pvt_v30.smText17.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-name h-78">
                    <lm-link-text
                            ref="smText8"
                            refId="smText8"
                            v-show="pvt_isShow.v11 === 'smText8'"
                            :paraVarPair="pvt_v11.smText8.paraVarPair"
                            :para="pvt_v11.smText8.para"
                            :attr="pvt_v11.smText8.attr">
                    </lm-link-text>
                </div>
                <div class="item-content">
                    <div>
                        <lm-radio
                                ref="smRadio"
                                refId="smRadio"
                                v-show="pvt_isShow.v12 === 'smRadio'"
                                :paraVarPair="pvt_v12.smRadio.paraVarPair"
                                :para="pvt_v12.smRadio.para"
                                :attr="pvt_v12.smRadio.attr">
                        </lm-radio>
                    </div>
                    <div class="item-address">
                        <div class="item-address-summar">
                            <lm-cascader
                                    ref="smAddress"
                                    refId="smAddress"
                                    v-show="pvt_isShow.v13 === 'smAddress'"
                                    :paraVarPair="pvt_v13.smAddress.paraVarPair"
                                    :para="pvt_v13.smAddress.para"
                                    :attr="pvt_v13.smAddress.attr">
                            </lm-cascader>
                        </div>
                        <div class="item-address-detail">
                            <div>
                                <lm-input-text
                                        ref="smInput2"
                                        refId="smInput2"
                                        v-show="pvt_isShow.v14 === 'smInput2'"
                                        :paraVarPair="pvt_v14.smInput2.paraVarPair"
                                        :para="pvt_v14.smInput2.para"
                                        :attr="pvt_v14.smInput2.attr">
                                </lm-input-text>
                            </div>
                            <div class="item-address-sign">
                                <lm-button
                                        ref="smButton"
                                        refId="smButton"
                                        v-show="pvt_isShow.v25 === 'smButton'"
                                        :paraVarPair="pvt_v25.smButton.paraVarPair"
                                        :para="pvt_v25.smButton.para"
                                        :attr="pvt_v25.smButton.attr">
                                </lm-button>
                            </div>
                        </div>
                    </div>
                    <div class="info-tip t-80" v-show="pvt_isShow.v31 === 'smText18'">
                        <lm-link-text
                                ref="smText18"
                                refId="smText18"
                                v-show="pvt_isShow.v31 === 'smText18'"
                                :paraVarPair="pvt_v31.smText18.paraVarPair"
                                :para="pvt_v31.smText18.para"
                                :attr="pvt_v31.smText18.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="item-map">
                <transition name="fade" class="fade">
                    <mapC ref="smMap"
                          refId="smMap"
                          v-show="pvt_isShow.v27 === 'smMap'"
                          :paraVarPair="pvt_v27.smMap.paraVarPair"
                          :para="pvt_v27.smMap.para"
                          :attr="pvt_v27.smMap.attr"></mapC>
                    <!--<div id="container" v-show = "isMapHide"></div>-->
                </transition>
            </div>
            <div class="item">
                <div class="item-name">
                    <lm-link-text
                            ref="smText9"
                            refId="smText9"
                            v-show="pvt_isShow.v15 === 'smText9'"
                            :paraVarPair="pvt_v15.smText9.paraVarPair"
                            :para="pvt_v15.smText9.para"
                            :attr="pvt_v15.smText9.attr">
                    </lm-link-text>
                </div>
                <div class="item-content">
                    <div class="item-phone">
                        <lm-input-phone
                                ref="smPhone"
                                refId="smPhone"
                                v-show="pvt_isShow.v16 === 'smPhone'"
                                :paraVarPair="pvt_v16.smPhone.paraVarPair"
                                :para="pvt_v16.smPhone.para"
                                :attr="pvt_v16.smPhone.attr">
                        </lm-input-phone>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-name">
                    <lm-link-text
                            ref="smText10"
                            refId="smText10"
                            v-show="pvt_isShow.v17 === 'smText10'"
                            :paraVarPair="pvt_v17.smText10.paraVarPair"
                            :para="pvt_v17.smText10.para"
                            :attr="pvt_v17.smText10.attr">
                    </lm-link-text>
                </div>
                <div class="item-content item-editor">
                    <div class="h-350">
                        <text-editor
                        ref="smEditor"
                        refId="smEditor"
                        v-show="pvt_isShow.v18 === 'smEditor'"
                        :paraVarPair="pvt_v18.smEditor.paraVarPair"
                        :para="pvt_v18.smEditor.para"
                        :attr="pvt_v18.smEditor.attr">
                        </text-editor>
                    </div>
                    <div class="info-tip t-260" v-show="pvt_isShow.v32 === 'smText19'">
                        <lm-link-text
                                ref="smText19"
                                refId="smText19"
                                v-show="pvt_isShow.v32 === 'smText19'"
                                :paraVarPair="pvt_v32.smText19.paraVarPair"
                                :para="pvt_v32.smText19.para"
                                :attr="pvt_v32.smText19.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-name">
                    <lm-link-text
                            ref="smText11"
                            refId="smText11"
                            v-show="pvt_isShow.v19 === 'smText11'"
                            :paraVarPair="pvt_v19.smText11.paraVarPair"
                            :para="pvt_v19.smText11.para"
                            :attr="pvt_v19.smText11.attr">
                    </lm-link-text>
                </div>
                <div class="item-content item-textArea">
                    <div>
                        <lm-input-text
                                ref="smTextArea"
                                refId="smTextArea"
                                v-show="pvt_isShow.v20 === 'smTextArea'"
                                :paraVarPair="pvt_v20.smTextArea.paraVarPair"
                                :para="pvt_v20.smTextArea.para"
                                :attr="pvt_v20.smTextArea.attr">
                        </lm-input-text>
                    </div>
                    <div class="info-tip t-105"  v-show="pvt_isShow.v33 === 'smText20'">
                        <lm-link-text
                                ref="smText20"
                                refId="smText20"
                                v-show="pvt_isShow.v33 === 'smText20'"
                                :paraVarPair="pvt_v33.smText20.paraVarPair"
                                :para="pvt_v33.smText20.para"
                                :attr="pvt_v33.smText20.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-name">
                    <lm-link-text
                            ref="smText12"
                            refId="smText12"
                            v-show="pvt_isShow.v21 === 'smText12'"
                            :paraVarPair="pvt_v21.smText12.paraVarPair"
                            :para="pvt_v21.smText12.para"
                            :attr="pvt_v21.smText12.attr">
                    </lm-link-text>
                </div>
                <div class="item-content">
                    <div class="item-select">
                        <lm-select
                                ref="smSelect"
                                refId="smSelect"
                                v-show="pvt_isShow.v22 === 'smSelect'"
                                :paraVarPair="pvt_v22.smSelect.paraVarPair"
                                :para="pvt_v22.smSelect.para"
                                :attr="pvt_v22.smSelect.attr"
                        >
                        </lm-select>
                    </div>
                    <div class="info-tip"   v-show="pvt_isShow.v34 === 'smText21'">
                        <lm-link-text
                                ref="smText21"
                                refId="smText21"
                                v-show="pvt_isShow.v34 === 'smText21'"
                                :paraVarPair="pvt_v34.smText21.paraVarPair"
                                :para="pvt_v34.smText21.para"
                                :attr="pvt_v34.smText21.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import textEditor from './component/textEditor';
    import mapC from './component/map';
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';

    export default {
        components: {textEditor, mapC},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12", "v13", "v14", "v15", "v16", "v17", "v18", "v19", "v20", "v21", "v22", "v23", "v24", "v25", "v26", "v27", "v28", "v29", "v30", "v31", "v32", "v33", "v34", "v35"],
                    subModule: ["smText1", "smText2", "smInput1", "smText3", "smUpLoad", "smText4", "smText5", "smText6", "smText7", "smDate", "smText8", "smRadio", "smAddress", "smInput2", "smText9", "smPhone", "smText10", "smEditor", "smText11", "smTextArea", "smText12", "smSelect", "smText13", "smLabel", "smButton", "smText14", "smMap", "smText15", "smText16", "smText17", "smText18", "smText19", "smText20", "smText21", "smText22"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                    "v6": null,
                    "v7": null,
                    "v8": null,
                    "v9": null,
                    "v10": null,
                    "v11": null,
                    "v12": null,
                    "v13": null,
                    "v14": null,
                    "v15": null,
                    "v16": null,
                    "v17": null,
                    "v18": null,
                    "v19": null,
                    "v20": null,
                    "v21": null,
                    "v22": null,
                    "v23": null,
                    "v24": null,
                    "v25": null,
                    "v26": null,
                    "v27": null,
                    "v28": null,
                    "v29": null,
                    "v30": null,
                    "v31": null,
                    "v32": null,
                    "v33": null,
                    "v34": null,
                    "v35": null,
                },
                pvt_eventPortInput: [],

                mac: mac.mac,
                selectArea: '',
                selectPlace: '',
                details:'',
                isMapReLoad: true,
                isMapHide: false,
                imgDataArr:[],
                placeholder: '请输入活动核心亮点，便于分享摘要及百度搜索引擎搜索（限150字）',
                radioData:1,
                radioArr:[{label: 1, text: '线上'}, {label: 2, text: '线下'}, {label: 3, text: '线上和线下'}],
                addressDisabled:true,
                placeDisable: true,
                debugFlag: true,
                labelNewFlag: true,
                listSource: [

                ],
                listValue:[],
                menuName: '学生课程'
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '基本信息'
                        },
                        attr: {
                            fontSize: '18px', height: '64px', color: '#12B0FF'
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: '活动标题'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133',icon:'lm-icon-required',iconIsRight:true
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smInput1: {
                        paraVarPair: {},
                        para: {
                            // text: this.title
                            text: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.name],
                                $arrValue: [this.para.activityID]
                            }]
                        },
                        attr: {
                            placeholder: '请输入活动标题'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '上传海报',
                        },
                        attr: {
                            fontSize: '16px', height: '148px', color: '#303133',icon:'lm-icon-required',iconIsRight:true
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smUpLoad: {
                        paraVarPair: {},
                        para: {
                            detail: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.poster],
                                $arrValue: [this.para.activityID]
                            }]
                        },
                        attr: { limit:1,maxSize: '1Mb'}
                    }
                }
            }, pvt_v6: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: '温馨提示:'
                        },
                        attr: {
                            fontSize: '16px', height: '36px', color: '#B2B4B8'
                        }
                    }
                }
            }, pvt_v7: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: '此图片将作为此活动的封面，可以提盖浏览者视觉体验，可以同时宣传活动内容。'
                        },
                        attr: {
                            fontSize: '14px', height: '36px', color: '#B2B4B8'
                        }
                    }
                }
            }, pvt_v8: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: '建议上传尺寸1080px*640px的.png、.jpg、.gif图片，图片小于1M。'
                        },
                        attr: {
                            fontSize: '14px', height: '14px', color: '#B2B4B8'
                        }
                    }
                }
            }, pvt_v9: function () {
                return {
                    smText7: {
                        paraVarPair: {},
                        para: {
                            textData: '活动时间'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133',icon:'lm-icon-required',iconIsRight:true
                        }
                    }
                }
            }, pvt_v10: function () {
                return {
                    smDate: {
                        paraVarPair: {},
                        para: {
                            startDate: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.startTime],
                                $arrValue: [this.para.activityID]
                            }],
                            endDate: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.endTime],
                                $arrValue: [this.para.activityID]
                            }],
                        },
                        attr: {
                            disabledDate:{
                                targetDate:new Date(),
                                direction:'before'
                            },
                            rangeSeparator: '至',
                            startPlaceholder: '开始日期',
                            endPlaceholder: '结束日期',
                            type: 'datetimerange',
                            valueFormat: 'yyyy-MM-dd HH:mm:ss'
                        }
                    }
                }
            }, pvt_v11: function () {
                return {
                    smText8: {
                        paraVarPair: {},
                        para: {
                            textData: '活动地点'
                        },
                        attr: {
                            fontSize: '16px', height: '78px', color: '#303133',icon:'lm-icon-required',iconIsRight:true
                        }
                    }
                }
            }, pvt_v12: function () {
                return {
                    smRadio: {
                        paraVarPair: {
                            radioData:'radioData'
                        },
                        para: {
                            // radioData: [{
                            //     $table: this.mac.tb.groupActivity,
                            //     $arrField: [this.mac.fd.groupActivity.mode],
                            //     $arrValue: [this.para.activityID]
                            // }],
                            radioData:this.radioData
                        },
                        attr: {
                            radioArr: this.radioArr
                        }
                    }
                }
            }, pvt_v13: function () {
                return {
                    smAddress: {
                        paraVarPair: {},
                        para: {
                            value: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.place],
                                $arrValue: [this.para.activityID]
                            }],
                            treeData: [{$table: this.mac.tb.addressOption, $arrField: ['name'], $arrValue: null}],
                        },
                        attr: {
                            emptyText: '请选择省/市/区', filterable: true,disabled:this.addressDisabled
                        }
                    }
                }
            }, pvt_v14: function () {
                return {
                    smInput2: {
                        paraVarPair: {
                            text: 'selectPlace'
                        },
                        para: {
                            text: this.selectPlace
                        },
                        attr: {
                            placeholder: '请输入详细地址',
                            disabled: this.placeDisable
                        }
                    }
                }
            }, pvt_v15: function () {
                return {
                    smText9: {
                        paraVarPair: {},
                        para: {
                            textData: '联系电话'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133',icon:'lm-icon-required',iconIsRight:true
                        }
                    }
                }
            }, pvt_v16: function () {
                return {
                    smPhone: {
                        paraVarPair: {},
                        para: {
                            mobile: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.phone],
                                $arrValue: [1]
                            }],
                            // mobile: this.mobile
                        },
                        attr: {
                            placeholder: '请输入手机号码', prefixIcon: 'el-icon-mobile-phone'
                        }
                    }
                }
            }, pvt_v17: function () {
                return {
                    smText10: {
                        paraVarPair: {},
                        para: {
                            textData: '活动详情'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133',icon:'lm-icon-required',iconIsRight:true
                        }
                    }
                }
            }, pvt_v18: function () {
                return {
                    smEditor: {
                        paraVarPair: {},
                        para: {
                            picture:[{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.picture],
                                $arrValue: [this.para.activityID]
                            }],
                            // blogID:this.para.activityID,
                            articleValue:this.details
                        },
                        attr: {}
                    }
                }
            }, pvt_v19: function () {
                return {
                    smText11: {
                        paraVarPair: {},
                        para: {
                            textData: '活动亮点'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133',icon:'lm-icon-required',iconIsRight:true
                        }
                    }
                }
            }, pvt_v20: function () {
                return {
                    smTextArea: {
                        paraVarPair: {},
                        para: {
                            text: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.abstract],
                                $arrValue: [this.para.activityID]
                            }],
                        },
                        attr: {
                            placeholder: this.placeholder,
                            type: 'textarea',
                            size: 'large',
                            placeholderBottom:true,
                            maxlength:150
                        }
                    }
                }
            }, pvt_v21: function () {
                return {
                    smText12: {
                        paraVarPair: {},
                        para: {
                            textData: '活动分类'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133',icon:'lm-icon-required',iconIsRight:true
                        }
                    }
                }
            }, pvt_v22: function () {
                return {
                    smSelect: {
                        paraVarPair: {},
                        para: {
                            value: this.listValue,
                            listSource:this.listSource
                        },
                        attr: {
                            defaultExpandAll: true,multiple:true
                        }
                    }
                }
            },  pvt_v25: function () {
                return {
                    smButton: {
                        paraVarPair: {},
                        para: {
                            name: ['标记位置', 'el-icon-location-outline']
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            }, pvt_v27: function () {
                return {
                    smMap: {
                        paraVarPair: {},
                        para: {
                            mapData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.place],
                                $arrValue: [1]
                            }],
                        },
                        attr: {
                            area: this.selectArea,
                            place: this.selectPlace
                        }
                    }
                }
            }, pvt_v28: function () {
                return {
                    smText15: {
                        paraVarPair: {},
                        para: {
                            textData: '活动标题不能为空'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C',icon:'el-icon-warning'
                        }
                    }
                }
            }, pvt_v29: function () {
                return {
                    smText16: {
                        paraVarPair: {},
                        para: {
                            textData: '活动海报不能为空'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C',icon:'el-icon-warning'
                        }
                    }
                }
            }, pvt_v30: function () {
                return {
                    smText17: {
                        paraVarPair: {},
                        para: {
                            textData: '请选择活动时间'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C',icon:'el-icon-warning'
                        }
                    }
                }
            }, pvt_v31: function () {
                return {
                    smText18: {
                        paraVarPair: {},
                        para: {
                            textData: '活动地点不完整'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C',icon:'el-icon-warning'
                        }
                    }
                }
            }, pvt_v32: function () {
                return {
                    smText19: {
                        paraVarPair: {},
                        para: {
                            textData: '活动详情不能为空'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C',icon:'el-icon-warning'
                        }
                    }
                }
            }, pvt_v33: function () {
                return {
                    smText20: {
                        paraVarPair: {},
                        para: {
                            textData: '活动亮点不能为空'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C',icon:'el-icon-warning'
                        }
                    }
                }
            }, pvt_v34: function () {
                return {
                    smText21: {
                        paraVarPair: {},
                        para: {
                            textData: '请选择活动分类'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C',icon:'el-icon-warning'
                        }
                    }
                }
            }
        },
        watch: {},
        mounted: function () {
            this.pvt_initSysData();
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let dbFlag;
                let fnname = 'basicInfo.startModule';
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smInput1',
                    sm4: 'smText3',
                    sm5: 'smUpLoad',
                    sm6: 'smText4',
                    sm7: 'smText5',
                    sm8: 'smText6',
                    sm9: 'smText7',
                    sm10: 'smDate',
                    sm11: 'smText8',
                    sm12: 'smRadio',
                    sm13: 'smAddress',
                    sm14: 'smInput2',
                    sm15: 'smText9',
                    sm16: 'smPhone',
                    sm17: 'smText10',
                    sm18: 'smEditor',
                    sm19: 'smText11',
                    sm20: 'smTextArea',
                    sm21: 'smText12',
                    sm22: 'smSelect',
                    sm23: 'smText13',
                    sm24: 'smLabel',
                    sm25: 'smButton',
                    sm26: 'smText14',
                    sm27: 'smMap',
                    sm28: 'smText15',
                    sm29: 'smText16',
                    sm30: 'smText17',
                    sm31: 'smText18',
                    sm32: 'smText19',
                    sm33: 'smText20',
                    sm34: 'smText21',
                    sm35: 'smText22',
                };

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                        case 'queryactivityOption':
                            objectName = $this.mac.tb.activityOption;
                            parentRecord = null;
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.activityOption.label] = [];
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function () {
                                    $this.listSource = [];
                                    para.label = dbData[$this.mac.fd.activityOption.label][0];
                                    para.i=1;
                                    for(let key  in para.label){
                                       var obj = {};
                                       obj['label'] = key;
                                       obj['options'] = [];
                                       for(var i=0;i<para.label[key].length;i++){
                                           var secObj = {};
                                           secObj['value'] = para.i;
                                           para.i++;
                                           secObj['label'] = para.label[key][i];
                                           secObj['disabled'] =false;
                                           secObj['icon'] ='';
                                           secObj['image'] ='';
                                           obj['options'].push(secObj)
                                       }
                                        $this.listSource.push(obj)
                                    }
                                    para.nStep = 'queryGroupActivity';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.details] = [];
                            dbData[$this.mac.fd.groupActivity.place] = [];
                            dbData[$this.mac.fd.groupActivity.mode] = [];
                            dbData[$this.mac.fd.groupActivity.label] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    $this.listValue = [];
                                    if(dbData[$this.mac.fd.groupActivity.label][0]!==null){
                                        for(var i=0;i<dbData[$this.mac.fd.groupActivity.label][0].length;i++){
                                            $this.listValue.push(dbData[$this.mac.fd.groupActivity.label][0][i].name)
                                        }
                                    }
                                    $this.details = dbData[$this.mac.fd.groupActivity.details][0];
                                    para.place = dbData[$this.mac.fd.groupActivity.place][0];
                                    $this.radioData = dbData[$this.mac.fd.groupActivity.mode][0]
                                    if(dbData[$this.mac.fd.groupActivity.mode][0]!==$this.mac.enum.groupActivity.mode.onLine){
                                        $this.addressDisabled = false;
                                    }else{
                                        $this.addressDisabled = true;
                                    }
                                    if(para.place!==null){
                                        $this.selectPlace = para.place['place'];
                                        $this.placeDisable = false;
                                    }
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule1';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule2':
                            $this.sm[ref.sm2].startModule(function () {
                                para.nStep = 'startModule3';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule3':
                            $this.sm[ref.sm3].startModule(function () {
                                para.nStep = 'startModule4';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule4':
                            $this.sm[ref.sm4].startModule(function () {
                                para.nStep = 'startModule5';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule5':
                            $this.sm[ref.sm5].startModule(function () {
                                para.nStep = 'startModule6';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule6':
                            $this.sm[ref.sm6].startModule(function () {
                                para.nStep = 'startModule7';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule7':
                            $this.sm[ref.sm7].startModule(function () {
                                para.nStep = 'startModule8';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule8':
                            $this.sm[ref.sm8].startModule(function () {
                                para.nStep = 'startModule9';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule9':
                            $this.sm[ref.sm9].startModule(function () {
                                para.nStep = 'startModule10';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule10':
                            $this.sm[ref.sm10].startModule(function () {
                                para.nStep = 'startModule11';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule11':
                            $this.sm[ref.sm11].startModule(function () {
                                para.nStep = 'startModule12';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule12':
                            $this.sm[ref.sm12].startModule(function () {
                                para.nStep = 'dataInputCascade';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'dataInputCascade':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.addressOption] = null;
                            var expression = null;
                            var start = null;
                            var total = null;
                            var sort = ['id,asc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.addressOption, geneInputData, expression, start, total, sort, destGeneSite,
                                function (result) {
                                    para.nStep = 'dataInputCascadeOnce'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'dataInputCascadeOnce':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.addressOption] = null;
                            var expression = null;
                            var start = 1000;
                            var total = null;
                            var sort = ['id,asc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.addressOption, geneInputData, expression, start, total, sort, destGeneSite,
                                function (result) {
                                    $this.sm[ref.sm13].startModule(function () {}, para.errorCallBack);
                                }, function (error) {
                                    console.error(error)
                                })
                            para.nStep = 'startModule14'
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break
                        // case 'startModule13':
                        //     $this.sm[ref.sm13].startModule(function () {
                        //         para.nStep = 'end';
                        //         dbFlag += 1;
                        //         if (dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        case 'startModule14':
                            $this.sm[ref.sm14].startModule(function () {
                                para.nStep = 'startModule15';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule15':
                            $this.sm[ref.sm15].startModule(function () {
                                para.nStep = 'startModule16';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule16':
                            $this.sm[ref.sm16].startModule(function () {
                                para.nStep = 'startModule17';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule17':
                            $this.sm[ref.sm17].startModule(function () {
                                para.nStep = 'startModule18';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule18':
                            $this.sm[ref.sm18].startModule(function () {
                                para.nStep = 'startModule19';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule19':
                            $this.sm[ref.sm19].startModule(function () {
                                para.nStep = 'startModule20';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule20':
                            $this.sm[ref.sm20].startModule(function () {
                                para.nStep = 'startModule21';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule21':
                            $this.sm[ref.sm21].startModule(function () {
                                para.nStep = 'startModule22';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule22':
                            $this.sm[ref.sm22].startModule(function () {
                                para.nStep = 'startModule25';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            // $this.sm[ref.sm22].startModule();
                            // para.nStep = 'startModule23';
                            // dbFlag += 1;
                            break;
                        // case 'startModule23':
                        //     $this.sm[ref.sm23].startModule(function () {
                        //         para.nStep = 'startModule25';
                        //         dbFlag += 1;
                        //         if (dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        // case 'startModule24':
                        //     $this.sm[ref.sm24].startModule(function () {
                        //         para.nStep = 'startModule25';
                        //         dbFlag += 1;
                        //         if (dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        case 'startModule25':
                            $this.sm[ref.sm25].startModule(function () {
                                para.nStep = 'startModule27';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        // case 'startModule26':
                        //     $this.sm[ref.sm26].startModule(function () {
                        //         para.nStep = 'startModule27';
                        //         dbFlag += 1;
                        //         if (dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        case 'startModule27':
                            $this.sm[ref.sm27].startModule(function (result) {
                                para.result = result;
                                if (para.place !== null) {
                                    $this.$nextTick(() => {
                                        para.nStep = 'dataRefresh';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                } else {
                                    para.nStep = 'startModule28';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }
                            }, para.errorCallBack);
                            break;
                        case 'dataRefresh':
                            $this.sm[ref.sm14].startModule(function () {
                                para.nStep = 'startModule28';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule28':
                            $this.sm[ref.sm28].startModule(function () {
                                para.nStep = 'startModule29';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule29':
                            $this.sm[ref.sm29].startModule(function () {
                                para.nStep = 'startModule30';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule30':
                            $this.sm[ref.sm30].startModule(function () {
                                para.nStep = 'startModule31';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule31':
                            $this.sm[ref.sm31].startModule(function () {
                                para.nStep = 'startModule32';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule32':
                            $this.sm[ref.sm32].startModule(function () {
                                para.nStep = 'startModule33';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule33':
                            $this.sm[ref.sm33].startModule(function () {
                                para.nStep = 'startModule34';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule34':
                            $this.sm[ref.sm34].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        // case 'startModule35':
                        //     $this.sm[ref.sm35].startModule(function () {
                        //         para.nStep = 'showModules';
                        //         dbFlag += 1;
                        //         if (dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        case 'showModules':
                            let refId
                            //显示子组件
                            if (para.place !== null) {
                                $('.item-address-sign').css('display', 'block');
                                $this.isMapHide = false;
                                refId = ["smText1", "smText2", "smInput1", "smText3", "smUpLoad", "smText4", "smText5", "smText6", "smText7", "smDate", "smText8", "smRadio", "smAddress", "smInput2", "smText9", "smPhone", "smText10", "smEditor", "smText11", "smTextArea", "smText12", "smSelect", "smText13", "smLabel", "smButton", "smText14", "smMap"];
                            } else {
                                refId = ["smText1", "smText2", "smInput1", "smText3", "smUpLoad", "smText4", "smText5", "smText6", "smText7", "smDate", "smText8", "smRadio", "smAddress", "smInput2", "smText9", "smPhone", "smText10", "smEditor", "smText11", "smTextArea", "smText12", "smSelect", "smText13", "smLabel", "smButton", "smText14"];
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            wrongInfoShow: function (successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'basicInfo.wrongInfoShow';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'userInfo':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.name] = [];
                            dbData[$this.mac.fd.groupActivity.poster] = [];
                            dbData[$this.mac.fd.groupActivity.startTime] = [];
                            dbData[$this.mac.fd.groupActivity.endTime] = [];
                            dbData[$this.mac.fd.groupActivity.place] = [];
                            dbData[$this.mac.fd.groupActivity.mode] = [];
                            dbData[$this.mac.fd.groupActivity.phone] = [];
                            dbData[$this.mac.fd.groupActivity.details] = [];
                            dbData[$this.mac.fd.groupActivity.abstract] = [];
                            dbData[$this.mac.fd.groupActivity.label] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.text = $this.sm['smEditor'].getText();
                                    // if(para.text.search(/[^\s]/ig) !== -1){
                                    //     para.html = $this.sm['smEditor'].getHTML();
                                    //     $this.detailWrite(para.html,para.text,function () {},function () {});
                                    // }
                                   if(dbData[$this.mac.fd.groupActivity.name][0]===null||dbData[$this.mac.fd.groupActivity.name][0]==='') {
                                        $this.wrongInfoDeal('smText15',0,'活动标题不能为空',function () {
                                            para.nStep = 'default';
                                            if (++$dbFlag === 2) {
                                                $this.addressSelect(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else if(dbData[$this.mac.fd.groupActivity.poster][0][0].path===''){
                                        $this.wrongInfoDeal('smText16',1,'活动海报不能为空',function () {
                                            para.nStep = 'default';
                                            if (++$dbFlag === 2) {
                                                $this.addressSelect(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else if(dbData[$this.mac.fd.groupActivity.startTime][0]===null||dbData[$this.mac.fd.groupActivity.endTime][0]===null){
                                        $this.wrongInfoDeal('smText17',2,'活动时间不能为空',function () {
                                            para.nStep = 'default';
                                            if (++$dbFlag === 2) {
                                                $this.addressSelect(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else if(dbData[$this.mac.fd.groupActivity.mode][0]!==$this.mac.enum.groupActivity.mode.onLine&&dbData[$this.mac.fd.groupActivity.place][0]===null){
                                        $this.wrongInfoDeal('smText18',3,'请选择活动地点',function () {
                                            para.nStep = 'default';
                                            if (++$dbFlag === 2) {
                                                $this.addressSelect(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else if(dbData[$this.mac.fd.groupActivity.mode][0]!==$this.mac.enum.groupActivity.mode.onLine&&(!dbData[$this.mac.fd.groupActivity.place][0].place||dbData[$this.mac.fd.groupActivity.place][0].place==='')){
                                        $this.wrongInfoDeal('smText18',3,'请填写详细活动地点',function () {
                                            para.nStep = 'default';
                                            if (++$dbFlag === 2) {
                                                $this.addressSelect(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else if(dbData[$this.mac.fd.groupActivity.phone][0]===null){
                                        $this.sm['smPhone'].promptDisplay('联系电话不能为空',false,function () {
                                            $this.$message({
                                                type: 'error',
                                                message: '联系电话不能为空'
                                            });
                                            $("html,body").animate({
                                                scrollTop: $('.info-dv .info-option .item')[4].offsetTop-100 + "px"
                                            },200);
                                            para.nStep = 'default';
                                            if (++$dbFlag === 2) {
                                                $this.addressSelect(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else if(para.text.search(/[^\s]/ig) === -1){
                                        $this.wrongInfoDeal('smText19',5,'活动详情不能为空',function () {
                                            para.nStep = 'default';
                                            if (++$dbFlag === 2) {
                                                $this.addressSelect(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else if(dbData[$this.mac.fd.groupActivity.abstract][0]===null||dbData[$this.mac.fd.groupActivity.abstract][0]===''){
                                        $this.wrongInfoDeal('smText20',6,'活动亮点不能为空',function () {
                                            para.nStep = 'default';
                                            if (++$dbFlag === 2) {
                                                $this.addressSelect(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else if(dbData[$this.mac.fd.groupActivity.label][0]===null||dbData[$this.mac.fd.groupActivity.label][0]===''){
                                        $this.wrongInfoDeal('smText21',7,'请选择活动分类',function () {
                                            para.nStep = 'default';
                                            if (++$dbFlag === 2) {
                                                $this.addressSelect(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else{
                                       para.nStep = 'end';
                                       if (++$dbFlag === 2) {
                                           $this.addressSelect(successCallBack, errorCallBack);
                                       }
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'end':
                            para.successCallBack()
                            return;
                        case 'default':
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            wrongInfoDeal:function(refId,index,mesText,successCallBack,errorCallBack){
                let $this = this;
                $this.showSubModule(refId, true, function () {
                    let height = 100;
                    if(refId==='smText20'){
                        height = 150;
                    }
                    $("html,body").animate({
                        scrollTop: $('.info-dv .info-option .item')[index].offsetTop-height + "px"
                    },200);
                    // $("html,body").scrollTo($('.info-dv .info-option .item')[0],300);
                    $this.$message({
                        type: 'error',
                        message: mesText
                    });
                   successCallBack()
                },function (error) {
                    errorCallBack(error)
                });
            },
            wrongInfoHide:function(refId){
                let $this = this;
                let objectName = $this.mac.tb.groupActivity;
                let dbData = {};
                dbData[$this.mac.fd.id] = [$this.para.activityID];
                dbData[$this.mac.fd.groupActivity.poster] = [];
                dbData[$this.mac.fd.groupActivity.name] = [];
                dbData[$this.mac.fd.groupActivity.startTime] = [];
                dbData[$this.mac.fd.groupActivity.endTime] = [];
                dbData[$this.mac.fd.groupActivity.place] = [];
                dbData[$this.mac.fd.groupActivity.phone] = [];
                dbData[$this.mac.fd.groupActivity.details] = [];
                dbData[$this.mac.fd.groupActivity.abstract] = [];
                dbData[$this.mac.fd.groupActivity.label] = [];
                $this.sys.api.recordRead(objectName, dbData,function () {
                    if(refId==='smText16'){
                        if(dbData[$this.mac.fd.groupActivity.poster][0][0].path!==''){
                            $this.showSubModule(refId, false, function () {},function () {})
                        }
                    }else if(refId==='smText17'){
                        if(dbData[$this.mac.fd.groupActivity.startTime][0]!==null&&dbData[$this.mac.fd.groupActivity.endTime][0]!==null){
                            $this.showSubModule(refId, false, function () {},function () {})
                        }
                    }else if(refId==='smText18'){
                        if(dbData[$this.mac.fd.groupActivity.place][0].place!==''){
                            $this.showSubModule(refId, false, function () {},function () {})
                        }
                    }else if(refId==='smText19'){
                        if(dbData[$this.mac.fd.groupActivity.phone][0]!==null){
                            $this.showSubModule(refId, false, function () {},function () {})
                        }
                    }else if(refId==='smText20'){
                        if(dbData[$this.mac.fd.groupActivity.abstract][0]!==null){
                            $this.showSubModule(refId, false, function () {},function () {})
                        }
                    }else if(refId==='smText21'){
                        if(dbData[$this.mac.fd.groupActivity.label][0]!==null&&dbData[$this.mac.fd.groupActivity.label].length!==0){
                            $this.showSubModule(refId, false, function () {},function () {})
                        }
                    }else if(refId==='smText15'){
                        if(dbData[$this.mac.fd.groupActivity.name][0]!==null&&dbData[$this.mac.fd.groupActivity.name]!==''){
                            $this.showSubModule(refId, false, function () {},function () {})
                        }
                    }
                },function (error) {console.error(error)})
                $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
            },
            detailWrite: function(html,text, successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let fieldName;
                let dbData;
                var $this = this;
                var fnname = 'basicInfo.detailWrite';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'pictureRead':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.picture] = [];
                            $this.sys.api.recordRead(objectName, dbData, function () {
                                para.readPicture = dbData[$this.mac.fd.groupActivity.picture][0];
                                para.i = 0;
                                para.nStep = 'emptyPicture';
                                if (++$dbFlag === 2) {
                                    $this.detailWrite(html,text ,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'emptyPicture':
                            objectName = $this.mac.tb.groupActivity;
                            fieldName = $this.mac.fd.groupActivity.picture;
                            var filePath = para.readPicture[para.i].fileName;
                            if(filePath===''){
                                para.i++
                                if(para.i===para.readPicture.length){
                                    para.nStep = 'getImgArr';
                                }
                                $dbFlag++
                                break
                            }
                            $this.sys.api.deleteFile(objectName, fieldName, $this.para.activityID, filePath,
                                function (result) {
                                    para.i++
                                    if(para.i===para.readPicture.length){
                                        para.nStep = 'getImgArr';
                                    }
                                    if (++$dbFlag === 2) {
                                        $this.detailWrite(html,text ,successCallBack, errorCallBack)
                                    }
                                },
                                function (error) {
                                  console.error(error)
                                });
                            break;
                        case 'getImgArr':
                            para.i = 0;
                            if(html.match(/<img[^>]+>|<source[^>]+>/ig)) {
                                para.imgArr = html.match(/<img[^>]+>|<source[^>]+>/ig);
                            } else {
                                para.imgArr = [];
                            }
                            $dbFlag++;
                            para.nStep = 'modifyArticle';
                            break;
                        case 'modifyArticle':
                            if(para.i > para.imgArr.length - 1) {
                                html = html.replace(/src=""|src=''/ig, '');
                                html = html.replace(/src="[^"]+"/ig, 'src=""');
                                para.i = 0;
                                para.nStep = 'modifyBlog';
                                $dbFlag++;
                                break;
                            }

                            // 初始化数据：
                            para.content = null;
                            para.filePath = null;

                            let result = para.imgArr[para.i].match(/src="([^"]+)"/)[1];
                            // 判断是否是上传的图片，是的话获取图片信息
                            for(let i = 0; i < $this.imgDataArr.length; i++) {
                                if($this.imgDataArr[i].content.replace(/[^;]+;/, '') === result.replace(/[^;]+;/, '')) {
                                    para.content = $this.imgDataArr[i].content;
                                    para.filePath = $this.imgDataArr[i].filePath;
                                    break;
                                }
                            }
                            // 由黏贴来的图片：
                            if(!para.filePath) {
                                para.content = '';
                                para.filePath = result;
                            }

                            para.nStep = 'writeFile';
                            $dbFlag++;
                            break;
                        case 'writeFile':
                            objectName = $this.mac.tb.groupActivity;
                            fieldName = $this.mac.fd.groupActivity.picture;
                            $this.sys.api.writeFile(objectName, fieldName, $this.para.activityID, para.filePath, para.content, function (result) {
                                para.i++;
                                para.nStep = 'modifyArticle';
                                if (++$dbFlag === 2) {
                                    $this.detailWrite(html,text ,successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'modifyBlog':
                            objectName = $this.mac.tb.groupActivity;
                            let abstract;
                            if(text.length > 70) {
                                abstract = text.substr(0, 70) + '...';
                            } else {
                                abstract = text.substr(0, 70);
                            }
                            let data = {};
                            data[$this.mac.fd.id] = [$this.para.activityID];
                            data[$this.mac.fd.groupActivity.details] = [html];
                            $this.sys.api.recordModify(objectName, data, function () {
                                para.nStep = 'dataOutput';
                                if (++$dbFlag === 2) {
                                    $this.detailWrite(html,text ,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'dataOutput':
                            $this.sys.api.dataOutput($this.mac.tb.groupActivity, [$this.para.activityID], '',
                                function () {
                                    para.nStep = 'end';
                                    if (++$dbFlag === 2) {
                                        $this.detailWrite(html,text ,successCallBack, errorCallBack)
                                    }
                            },function (error) {console.error(error)})
                        case 'end':
                            para.successCallBack()
                            return;
                        case 'default':
                            return;
                    }
                    if (++$dbFlag === 1) {
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
            initMap: function (value) {
                let $this = this;
                this.selectPlace = value;
                $this.$nextTick(() => {
                    $this.sm.smMap.initMap(function () {
                        $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                    }, function () {
                        $this.$message({
                            type: 'error',
                            message: '查询出错，请重新搜索'
                        });
                        let objectName = $this.mac.tb.groupActivity;
                        let dbData = {};
                        dbData[$this.mac.fd.id] = [$this.para.activityID];
                        dbData[$this.mac.fd.groupActivity.place] = [];
                        $this.sys.api.recordRead(objectName, dbData, function () {
                            $this.selectPlace = dbData[$this.mac.fd.groupActivity.place][0]['place'];
                            $this.forceUpdateData(function () {
                                $this.sm['smInput2'].startModule(function () {}, function () {});
                            })
                        }, function(error){
                            console.error(error)
                        });
                    });
                })
            },
            addressSelect: function (successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'basicInfo.addressSelect';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'userInfo':
                            objectName = $this.mac.tb.groupActivity;
                            parentRecord = null;
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.place] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.nativePlace = dbData[$this.mac.fd.groupActivity.place][0];
                                    if (para.nativePlace === null) {
                                        para.nStep = 'end'
                                    } else {
                                        para.nStep = 'placeSearch'
                                        para.selectArea = '';
                                        for (var i = 0; i < para.nativePlace['name'].length; i++) {
                                            para.selectArea += para.nativePlace['name'][i];
                                        }
                                        if (para.selectArea === '台湾省台湾省台湾省') {
                                            para.selectArea = '台湾省';
                                        }
                                        $this.selectArea = para.selectArea;
                                    }
                                    if (++$dbFlag === 2) {
                                        $this.addressSelect(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'placeSearch':
                            $this.selectPlace = '';
                            $this.placeDisable = false;
                            // $this.place = para.selectArea;
                            $this.$nextTick(() => {
                                $this.sm.smInput2.dataRefresh();
                                $this.sm.smMap.initMap(function () {
                                    para.nStep = 'showModules'
                                    if (++$dbFlag === 2) {
                                        $this.addressSelect(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                });
                            })
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smMap"];
                            $this.showSubModule(refId, true, function () {
                                $('.item-address-sign').css('display', 'block');
                                para.nStep = 'end'
                                if (++$dbFlag === 2) {
                                    $this.addressSelect(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            addressSign: function () {
                if (this.isMapHide === false) {
                    this.isMapHide = true;
                    let refId = ["smMap"];
                    this.showSubModule(refId, false, function () {
                    }, function () {
                    });
                } else {
                    this.isMapHide = false;
                    let refId = ["smMap"];
                    this.showSubModule(refId, true, function () {
                    }, function () {
                    });
                }
            },
            placeRefreah: function (data, successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'basicInfo.placeRefreah';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'ActivityRead':
                            $this.sm.smAddress.resetValue(data['placeArr']);
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID]
                            dbData[$this.mac.fd.groupActivity.place] = [];
                            $this.sys.api.recordRead(objectName, dbData, function () {
                                para.place = dbData[$this.mac.fd.groupActivity.place][0];
                                para.place['place'] = data['place'];
                                para.place['lng'] = data['lng'];
                                para.place['lat'] = data['lat'];
                                para.nStep = 'ActivityModify';
                                if (++$dbFlag === 2) {
                                    $this.placeRefreah(data, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack)
                            break;
                        case 'ActivityModify':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID]
                            dbData[$this.mac.fd.groupActivity.place] = [para.place];
                            $this.sys.api.recordModify(objectName, dbData, function () {
                                $this.isMapReLoad = false;
                                $this.selectPlace = data['place'];
                                $this.$nextTick(() => {
                                    $this.sm.smInput2.dataRefresh();
                                    para.nStep = 'end';
                                    if (++$dbFlag === 2) {
                                        $this.placeRefreah(data, successCallBack, errorCallBack)
                                    }
                                })
                            }, para.errorCallBack)
                            break;
                        case 'end':
                            para.successCallBack()
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            addressTypeSelect:function (successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'basicInfo.addressTypeSelect';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'groupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.mode] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.mode = dbData[$this.mac.fd.groupActivity.mode][0];
                                    if($this.radioData === $this.radioArr[0].label){
                                        para.nStep = 'groupActivityModify'
                                    }else{
                                        if(para.mode !== $this.mac.enum.groupActivity.mode.onLine){
                                            para.nStep = 'groupActivityModify1'
                                        }else{
                                            para.nStep = 'groupActivityModify2'
                                        }
                                    }
                                    if (++$dbFlag === 2) {
                                        $this.addressTypeSelect(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityModify':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.place] = [null];
                            dbData[$this.mac.fd.groupActivity.mode] = [$this.radioData];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.addressDisabled = true;
                                    $this.placeDisable = true;
                                    $this.selectPlace = '';
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'smAddressStartModule'
                                        if (++$dbFlag === 2) {
                                            $this.addressTypeSelect(successCallBack, errorCallBack);
                                        }
                                    })
                                }, para.errorCallBack)
                           break
                        case 'groupActivityModify1':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.mode] = [$this.radioData];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'end'
                                    if (++$dbFlag === 2) {
                                        $this.addressTypeSelect(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break
                        case 'groupActivityModify2':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.place] = [null];
                            dbData[$this.mac.fd.groupActivity.mode] = [$this.radioData];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.addressDisabled = false;
                                    $this.placeDisable = true;
                                    $this.selectPlace = '';
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'smAddressStartModule'
                                        if (++$dbFlag === 2) {
                                            $this.addressTypeSelect(successCallBack, errorCallBack);
                                        }
                                    })
                                }, para.errorCallBack)
                            break
                        case 'smAddressStartModule':
                            $this.sm['smAddress'].startModule(function () {
                                para.nStep = 'smInputStartModule';
                                if (++$dbFlag === 2) {
                                    $this.addressTypeSelect(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'smInputStartModule':
                            $this.sm['smInput2'].startModule(function () {
                                if($this.radioData === $this.mac.enum.groupActivity.mode.onLine){
                                    para.nStep = 'hideModules';
                                }else{
                                    para.nStep = 'end';
                                }
                                if (++$dbFlag === 2) {
                                    $this.addressTypeSelect(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'hideModules':
                            //显示子组件
                            let refId = ["smMap"];
                            $this.showSubModule(refId, false, function () {
                                para.nStep = 'end'
                                if (++$dbFlag === 2) {
                                    $this.addressTypeSelect(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                            para.successCallBack();
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            setImgArr:function(imgData, successCallBack, errorCallBack){
                this.imgDataArr.push(imgData);
                successCallBack();
            },
            editorInfoHide:function(value,html){
                if(value.search(/[^\s]/ig) !== -1){
                    this.showSubModule(['smText19'], false, function () {},function () {})
                }
                this.detailWrite(html,value,function () {},function () {})
            },
            wordNumberTip:function (value){
                if(value!==null&&value!==''){
                    let length = 150-value.length;
                    if(length<0){
                        length = 0;
                    }
                    this.placeholder = '还可以输入'+length+'个字';
                }else{
                    this.placeholder = '请输入活动核心亮点，便于分享摘要及百度搜索引擎搜索（限150字）';
                }
            },
            checkTitle:function(successCallBack,errorCallBack){
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'basicInfo.wrongInfoShow';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'userInfo':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.name] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    if(dbData[$this.mac.fd.groupActivity.name][0]===null||dbData[$this.mac.fd.groupActivity.name][0]==='') {
                                        $this.wrongInfoDeal('smText15',0,'活动标题不能为空',function () {
                                            para.result = 0;
                                            para.nStep = 'end';
                                            if (++$dbFlag === 2) {
                                                $this.checkTitle(successCallBack, errorCallBack);
                                            }
                                        },para.errorCallBack)
                                    }else{
                                        para.result = 1;
                                        para.nStep = 'end';
                                        if (++$dbFlag === 2) {
                                            $this.checkTitle(successCallBack, errorCallBack);
                                        }
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'end':
                            para.successCallBack(para.result)
                            return;
                        case 'default':
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            labelModify:function(id,value){
                let $this = this;
                let objectName = $this.mac.tb.groupActivity;
                let dbData = {};
                dbData[$this.mac.fd.id] = [$this.para.activityID];
                let arr = [];
                for(var i=0;i<id.length;i++){
                    let data = {};
                    data['id'] = id[i];
                    data['name'] = value[i];
                    arr.push(data)
                }
                dbData[$this.mac.fd.groupActivity.label] = [arr];
                $this.sys.api.recordModify(objectName, dbData,
                    function () {
                        $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                    },function (error) {
                        console.error(error)
                    })
            },

            smButton_buttonClickEvent: function () {
                this.addressSign();
            },
            smAddress_dataModifyEvent: function () {
                this.wrongInfoHide('smText18');
                if (this.isMapReLoad === false) {
                    this.isMapReLoad = true;
                } else {
                    this.addressSelect();
                }
            },
            smInput2_dataModifyEvent: function (value) {
                this.wrongInfoHide('smText18');
                this.initMap(value);
            },
            smTextArea_dataModifyEvent: function (value) {
                this.wrongInfoHide('smText20');
            },
            smMap_placeRefreahEvent: function (data, successCallBack, errorCallBack) {
                this.placeRefreah(data, successCallBack, errorCallBack);
            },
            smInput1_dataModifyEvent: function (value) {
                this.wrongInfoHide('smText15');
            },
            smUpLoad_dataModifyEvent: function () {
                this.wrongInfoHide('smText16');
            },
            smDate_dataModifyEvent:function () {
                this.wrongInfoHide('smText17');
            },
            smPhone_dataModifyEvent:function () {
                this.wrongInfoHide('smText19');
            },
            smSelect_dataModifyEvent:function (id,value) {
                this.wrongInfoHide('smText21');
                this.labelModify(id,value);
            },
            smRadio_dataModifyEvent:function () {
                this.addressTypeSelect(function () {},function () {})
            },
            smEditor_getImgEvent:function (imgData, successCallBack, errorCallBack) {
                this.setImgArr(imgData, successCallBack, errorCallBack)
            },
            smEditor_blurEvent:function (value,html) {
                this.editorInfoHide(value,html)
            },
            smTextArea_inputChangeEvent:function (value) {
                this.wordNumberTip(value)
            },
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                },function (error) {console.error(error)})
            },
            getPlace:function (successCallBack, errorCallBack) {
                let $this = this;
                $.ajax({
                    url: 'https://restapi.amap.com/v3/config/district',
                    type: 'get',
                    data: {subdistrict:4,key:'7c2a4ce7da10c5ac706c5f5f9130e91e'},
                    success: function (result) {
                        successCallBack(result)
                    },
                    dataType: 'json'
                });
            },

        }
    }
</script>
<style lang="scss">
    .info-dv {
        .info-option {
            padding: 40px 95px 2px 95px;
            background: #ffffff;
            .item-name {
                i{
                    font-size: 26px;
                    color: #F45051;
                }
            }

            .info-tip {
                .el-icon-warning {
                    color: #F56C6C;
                    vertical-align: middle;
                    margin: -2px 5px 0 0;
                }
            }

            .el-input__inner {
                height: 40px;
            }

            .item {
                .item-title {
                    .svg-container {
                        display: none;
                    }
                }

                .item-Keyword {
                    .item-name-level {
                        left: 84px;
                    }
                }

                .item-time {
                    .lm-date-picker .el-date-editor .el-range-separator {
                        line-height: 32px;
                    }
                }

                .item-address-summar {
                    .lm_cascade_container {
                        .el-cascader {
                            width: 100% !important;
                        }
                    }
                }

                .item-address-detail {
                    .el-button {
                        height: 25px;
                        padding: 0;

                        .el-icon-location-outline {
                            font-size: 16px;
                            vertical-align: middle;
                            margin-top: -2px;
                        }

                        span {
                            margin-left: 0;
                        }
                    }

                    .svg-container {
                        display: none;
                    }
                }

                .item-phone {
                    width: 30%;

                    .el-input {
                        width: 100% !important;
                    }

                    .el-input__icon:after {
                        margin-top: 2px;
                    }

                    .svg-container {
                        display: none;
                    }
                }

                .item-textArea {

                    .el-textarea__inner {
                        padding: 15px;
                        height: 100px;
                    }

                    .svg-container {
                        display: none;
                    }
                }

                .item-select {
                   .lm-select{
                       width: 300px;
                       .el-select{
                           width: 100%;
                       }
                   }
                }

                .item-tag {
                    .tags-component {
                        .lm-tags--main:last-of-type {
                            margin-right: 10px;
                        }
                    }
                }

                .lm-picture-upload{
                    margin-bottom: 0;
                }
                .lm-picture-upload-list-item{
                    margin-bottom: 0;
                }
            }

        }
    }
</style>
<style lang="scss" scoped>
    .row {

    }

    .info-dv {
        box-shadow: 0px 0px 8px 0px rgba(48, 49, 51, 0.1);
        border-radius: 4px;

        .info-title {
            padding: 0 40px;
            height: 64px;
            background: #ffffff;
            margin-top: 15px;
            border-bottom: 2px solid #12B0FF;
            font-family:Source Han Sans CN;
        }

        .info-option {
            padding: 40px 95px 2px 95px;
            background: #ffffff;

            .el-input__inner {
                height: 40px;
            }

            .item {
                display: flex;
                margin-bottom: 40px;

                .item-name {
                    width: 135px;
                    height: 40px;
                    position: relative;
                }

                .item-title {
                    .svg-container {
                        display: none;
                    }
                }

                .item-Keyword {
                    .item-name-level {
                        left: 84px;
                    }
                }

                .h-78 {
                    height: 78px;
                }

                .item-content {
                    flex: 1;
                    position: relative;

                    .info-tip {
                        position: absolute;
                        top: 45px;
                    }

                    .info-tip.t-150 {
                        top: 152px;
                    }

                    .info-tip.t-80 {
                        top: 80px;
                    }

                    .info-tip.t-260{
                        top: 360px;
                    }

                    .info-tip.t-105{
                        top: 105px;
                    }
                }

                .h-148 {
                    height: 148px;
                }

                .item-picture {
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 45px;
                }

                .item-tips {
                    display: inline-block;
                    vertical-align: top;
                    line-height: 40px;
                    margin-top: 20px;
                    /*margin: 0 0 20px 60px;*/
                    /*margin: 58px 0 0 0;*/
                }

                .item-time {
                    display: inline-block;

                    .lm-date-picker .el-date-editor .el-range-separator {
                        line-height: 32px;
                    }
                }

                .item-address {
                    margin-top: 20px;
                }

                .item-address-summar {
                    width: 30%;
                    float: left;

                    .lm_cascade_container {
                        .el-cascader {
                            width: 100% !important;
                        }
                    }
                }

                .item-address-detail {
                    position: relative;
                    float: right;
                    width: 69%;

                    .item-address-sign {
                        display: none;
                        height: 25px;
                        line-height: 25px;
                        position: absolute;
                        right: 10px;
                        top: 7px;
                        padding-left: 5px;
                        border-left: 1px solid #DCDFE6;

                        .el-button {
                            height: 25px;
                            padding: 0;

                            .el-icon-location-outline {
                                font-size: 16px;
                                vertical-align: middle;
                                margin-top: -2px;
                            }

                            span {
                                margin-left: 0;
                            }
                        }
                    }

                    .svg-container {
                        display: none;
                    }
                }

                .item-phone {
                    width: 30%;

                    .el-input {
                        width: 100% !important;
                    }

                    .el-input__icon:after {
                        margin-top: 2px;
                    }

                    .svg-container {
                        display: none;
                    }
                }

                .item-editor {
                    height: 350px;
                }
                .h-350{
                    height: 350px;
                }

                .item-textArea {
                    height: 100px;

                    .el-textarea__inner {
                        padding: 15px;
                        height: 100px;
                    }

                    .svg-container {
                        display: none;
                    }
                }

                .item-select {
                    /*width: 30%;*/
                    /*height: 40px;*/

                }

                .item-tag {
                    height: 40px;

                    .col {
                        vertical-align: top;
                    }

                    .tags-component {
                        height: 40px;

                        .lm-tags--main:last-of-type {
                            margin-right: 10px;
                        }

                        /*.el-button{*/
                        /*height: 40px;*/
                        /*}*/
                        .button-new-tag {
                            margin-left: 0;
                        }
                    }
                }
            }

            .address-container {
                width: 100%;
                height: 500px;
                margin: 0 0 30px 0;
                border: 1px solid #d2d6df;
            }

            .item-map {
                margin-bottom: 30px;

                .fade {
                    transition: all linear .2s;
                }

                .fade-enter-active {
                    animation: identifier .2s;
                    overflow: hidden;
                }

                /*.fade-enter-to { animation: identifier .2s;    overflow: hidden; }*/

                .fade-leave-active {
                    animation: against .2s;
                    overflow: hidden;
                }

                @keyframes identifier {

                    from {
                        height: 0;
                    }

                    to {
                        height: 500px;
                    }

                }

                @keyframes against {

                    from {
                        height: 500px;
                    }

                    to {
                        height: 0;
                    }

                }
            }

            .mar-l-10 {
                margin-left: 10px;
            }
        }
    }

    .col {
        box-sizing: border-box;
        display: inline-block;
        /*vertical-align: middle;*/
    }

    .col_w_1 {
        width: 5%;
    }

    .col_w_2 {
        width: 10%;
    }

    .col_w_3 {
        width: 15%;
    }

    .col_w_4 {
        width: 20%;
    }

    .col_w_5 {
        width: 25%;
    }

    .col_w_6 {
        width: 30%;
    }

    .col_w_7 {
        width: 35%;
    }

    .col_w_8 {
        width: 40%;
    }

    .col_w_9 {
        width: 45%;
    }

    .col_w_10 {
        width: 50%;
    }

    .col_w_11 {
        width: 55%;
    }

    .col_w_12 {
        width: 60%;
    }

    .col_w_13 {
        width: 65%;
    }

    .col_w_14 {
        width: 70%;
    }

    .col_w_15 {
        width: 75%;
    }

    .col_w_16 {
        width: 80%;
    }

    .col_w_17 {
        width: 85%;
    }

    .col_w_18 {
        width: 90%;
    }

    .col_w_19 {
        width: 95%;
    }

    .col_w_20 {
        width: 100%;
    }


    /* ------ Module Style Variable ------- */

</style>
