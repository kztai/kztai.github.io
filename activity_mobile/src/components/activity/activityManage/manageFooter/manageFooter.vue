<template>
    <div class="manage_footer_row manage_footer_row_manage_footerRow">
        <div :class="{manage_footer_col:true,manage_footer_col_manage_footerWindow:true, manage_footer_col_manage_footerWindow_size_large:attr.size==='large', manage_footer_col_manage_footerWindow_size_medium:attr.size==='medium', manage_footer_col_manage_footerWindow_size_small:attr.size==='small', manage_footer_col_manage_footerWindow_size_min:attr.size==='min'}">

            <div class="manage_footer_row manage_footer_row_row1">
                <div @click="moduleChange" :class="{manage_footer_col:true,manage_footer_col_footerBtn1:true,manage_footer_col_footerBtn1_size_large:attr.size==='large',manage_footer_col_footerBtn1_size_medium:attr.size==='medium',manage_footer_col_footerBtn1_size_small:attr.size==='small',manage_footer_col_footerBtn1_size_min:attr.size==='min',manage_footer_col_footerBtn1_checked:attr.checked,manage_footer_col_footerBtn1_disable:attr.disabled}">

                    <div class="manage_footer_row manage_footer_row_row2">
                        <div :class="{manage_footer_col:true,manage_footer_col_footerImg1:true,manage_footer_col_footerImg1_size_large:attr.size==='large',manage_footer_col_footerImg1_size_medium:attr.size==='medium',manage_footer_col_footerImg1_size_small:attr.size==='small',manage_footer_col_footerImg1_size_min:attr.size==='min',manage_footer_col_footerImg1_checked:attr.checked,manage_footer_col_footerImg1_disable:attr.disabled}">

                            <div class="manage_footer_row manage_footer_row_row4">
                                <div :class="{manage_footer_col:true,manage_footer_col_img1:true,manage_footer_col_img1_size_large:attr.size==='large',manage_footer_col_img1_size_medium:attr.size==='medium',manage_footer_col_img1_size_small:attr.size==='small',manage_footer_col_img1_size_min:attr.size==='min',manage_footer_col_img1_checked:attr.checked,manage_footer_col_img1_disable:attr.disabled}">

                                    <lm2b-button
                                            ref="img1Ref"
                                            refId="img1Ref"
                                            v-show="pvt_isShow.img1 === 'img1Ref'"
                                            :paraVarPair="pvt_img1.img1Ref.paraVarPair"
                                            :para="pvt_img1.img1Ref.para"
                                            :attr="pvt_img1.img1Ref.attr">
                                    </lm2b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="manage_footer_row manage_footer_row_row3">
                        <div :class="{manage_footer_col:true,manage_footer_col_footerName1:true,manage_footer_col_footerName1_size_large:attr.size==='large',manage_footer_col_footerName1_size_medium:attr.size==='medium',manage_footer_col_footerName1_size_small:attr.size==='small',manage_footer_col_footerName1_size_min:attr.size==='min',manage_footer_col_footerName1_checked:attr.checked,manage_footer_col_footerName1_disable:attr.disabled}">

                            <lm2b-button
                                    ref="name1Ref"
                                    refId="name1Ref"
                                    v-show="pvt_isShow.footerName1 === 'name1Ref'"
                                    :paraVarPair="pvt_footerName1.name1Ref.paraVarPair"
                                    :para="pvt_footerName1.name1Ref.para"
                                    :attr="pvt_footerName1.name1Ref.attr">
                            </lm2b-button>
                        </div>
                    </div>
                </div>
                <div @click="moduleChange" :class="{manage_footer_col:true,manage_footer_col_footerBtn2:true,manage_footer_col_footerBtn2_size_large:attr.size==='large',manage_footer_col_footerBtn2_size_medium:attr.size==='medium',manage_footer_col_footerBtn2_size_small:attr.size==='small',manage_footer_col_footerBtn2_size_min:attr.size==='min',manage_footer_col_footerBtn2_checked:attr.checked,manage_footer_col_footerBtn2_disable:attr.disabled}">

                    <div class="manage_footer_row manage_footer_row_row6">
                        <div :class="{manage_footer_col:true,manage_footer_col_footerImg2:true,manage_footer_col_footerImg2_size_large:attr.size==='large',manage_footer_col_footerImg2_size_medium:attr.size==='medium',manage_footer_col_footerImg2_size_small:attr.size==='small',manage_footer_col_footerImg2_size_min:attr.size==='min',manage_footer_col_footerImg2_checked:attr.checked,manage_footer_col_footerImg2_disable:attr.disabled}">

                            <div class="manage_footer_row manage_footer_row_row8">
                                <div :class="{manage_footer_col:true,manage_footer_col_img2:true,manage_footer_col_img2_size_large:attr.size==='large',manage_footer_col_img2_size_medium:attr.size==='medium',manage_footer_col_img2_size_small:attr.size==='small',manage_footer_col_img2_size_min:attr.size==='min',manage_footer_col_img2_checked:attr.checked,manage_footer_col_img2_disable:attr.disabled}">

                                    <lm2b-button
                                            ref="img2Ref"
                                            refId="img2Ref"
                                            v-show="pvt_isShow.img2 === 'img2Ref'"
                                            :paraVarPair="pvt_img2.img2Ref.paraVarPair"
                                            :para="pvt_img2.img2Ref.para"
                                            :attr="pvt_img2.img2Ref.attr">
                                    </lm2b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="manage_footer_row manage_footer_row_row7">
                        <div :class="{manage_footer_col:true,manage_footer_col_footerName2:true,manage_footer_col_footerName2_size_large:attr.size==='large',manage_footer_col_footerName2_size_medium:attr.size==='medium',manage_footer_col_footerName2_size_small:attr.size==='small',manage_footer_col_footerName2_size_min:attr.size==='min',manage_footer_col_footerName2_checked:attr.checked,manage_footer_col_footerName2_disable:attr.disabled}">

                            <lm2b-button
                                    ref="name2Ref"
                                    refId="name2Ref"
                                    v-show="pvt_isShow.footerName2 === 'name2Ref'"
                                    :paraVarPair="pvt_footerName2.name2Ref.paraVarPair"
                                    :para="pvt_footerName2.name2Ref.para"
                                    :attr="pvt_footerName2.name2Ref.attr">
                            </lm2b-button>
                        </div>
                    </div>
                </div>
                <div @click="moduleChange" :class="{manage_footer_col:true,manage_footer_col_footerBtn3:true,manage_footer_col_footerBtn3_size_large:attr.size==='large',manage_footer_col_footerBtn3_size_medium:attr.size==='medium',manage_footer_col_footerBtn3_size_small:attr.size==='small',manage_footer_col_footerBtn3_size_min:attr.size==='min',manage_footer_col_footerBtn3_checked:attr.checked,manage_footer_col_footerBtn3_disable:attr.disabled}">

                    <div class="manage_footer_row manage_footer_row_row10">
                        <div :class="{manage_footer_col:true,manage_footer_col_footerImg3:true,manage_footer_col_footerImg3_size_large:attr.size==='large',manage_footer_col_footerImg3_size_medium:attr.size==='medium',manage_footer_col_footerImg3_size_small:attr.size==='small',manage_footer_col_footerImg3_size_min:attr.size==='min',manage_footer_col_footerImg3_checked:attr.checked,manage_footer_col_footerImg3_disable:attr.disabled}">

                            <div class="manage_footer_row manage_footer_row_row12">
                                <div :class="{manage_footer_col:true,manage_footer_col_img3:true,manage_footer_col_img3_size_large:attr.size==='large',manage_footer_col_img3_size_medium:attr.size==='medium',manage_footer_col_img3_size_small:attr.size==='small',manage_footer_col_img3_size_min:attr.size==='min',manage_footer_col_img3_checked:attr.checked,manage_footer_col_img3_disable:attr.disabled}">

                                    <lm2b-button
                                            ref="img3Ref"
                                            refId="img3Ref"
                                            v-show="pvt_isShow.img3 === 'img3Ref'"
                                            :paraVarPair="pvt_img3.img3Ref.paraVarPair"
                                            :para="pvt_img3.img3Ref.para"
                                            :attr="pvt_img3.img3Ref.attr">
                                    </lm2b-button>
                                </div>
                            </div>
                            <div class="manage_footer_row manage_footer_row_row13">
                                <div :class="{manage_footer_col:true,manage_footer_col_badge3:true,manage_footer_col_badge3_size_large:attr.size==='large',manage_footer_col_badge3_size_medium:attr.size==='medium',manage_footer_col_badge3_size_small:attr.size==='small',manage_footer_col_badge3_size_min:attr.size==='min',manage_footer_col_badge3_checked:attr.checked,manage_footer_col_badge3_disable:attr.disabled}">

                                    <lm2b-badge
                                            ref="badge3Ref"
                                            refId="badge3Ref"
                                            v-show="pvt_isShow.badge3 === 'badge3Ref'"
                                            :paraVarPair="pvt_badge3.badge3Ref.paraVarPair"
                                            :para="pvt_badge3.badge3Ref.para"
                                            :attr="pvt_badge3.badge3Ref.attr">
                                    </lm2b-badge>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="manage_footer_row manage_footer_row_row14">
                        <div :class="{manage_footer_col:true,manage_footer_col_btnWrap3:true,manage_footer_col_btnWrap3_size_large:attr.size==='large',manage_footer_col_btnWrap3_size_medium:attr.size==='medium',manage_footer_col_btnWrap3_size_small:attr.size==='small',manage_footer_col_btnWrap3_size_min:attr.size==='min',manage_footer_col_btnWrap3_checked:attr.checked,manage_footer_col_btnWrap3_disable:attr.disabled}">

                            <lm2b-button
                                    ref="name3Ref"
                                    refId="name3Ref"
                                    v-show="pvt_isShow.btnWrap3 === 'name3Ref'"
                                    :paraVarPair="pvt_btnWrap3.name3Ref.paraVarPair"
                                    :para="pvt_btnWrap3.name3Ref.para"
                                    :attr="pvt_btnWrap3.name3Ref.attr">
                            </lm2b-button>
                        </div>
                    </div>
                </div>
                <div @click="moduleChange" :class="{manage_footer_col:true,manage_footer_col_footerBtn4:true,manage_footer_col_footerBtn4_size_large:attr.size==='large',manage_footer_col_footerBtn4_size_medium:attr.size==='medium',manage_footer_col_footerBtn4_size_small:attr.size==='small',manage_footer_col_footerBtn4_size_min:attr.size==='min',manage_footer_col_footerBtn4_checked:attr.checked,manage_footer_col_footerBtn4_disable:attr.disabled}">

                    <div class="manage_footer_row manage_footer_row_row15">
                        <div :class="{manage_footer_col:true,manage_footer_col_img4:true,manage_footer_col_img4_size_large:attr.size==='large',manage_footer_col_img4_size_medium:attr.size==='medium',manage_footer_col_img4_size_small:attr.size==='small',manage_footer_col_img4_size_min:attr.size==='min',manage_footer_col_img4_checked:attr.checked,manage_footer_col_img4_disable:attr.disabled}">

                            <lm2b-button
                                    ref="img4Ref"
                                    refId="img4Ref"
                                    v-show="pvt_isShow.img4 === 'img4Ref'"
                                    :paraVarPair="pvt_img4.img4Ref.paraVarPair"
                                    :para="pvt_img4.img4Ref.para"
                                    :attr="pvt_img4.img4Ref.attr">
                            </lm2b-button>
                        </div>
                    </div>
                    <div class="manage_footer_row manage_footer_row_row16">
                        <div :class="{manage_footer_col:true,manage_footer_col_name4:true,manage_footer_col_name4_size_large:attr.size==='large',manage_footer_col_name4_size_medium:attr.size==='medium',manage_footer_col_name4_size_small:attr.size==='small',manage_footer_col_name4_size_min:attr.size==='min',manage_footer_col_name4_checked:attr.checked,manage_footer_col_name4_disable:attr.disabled}">

                            <lm2b-button
                                    ref="name4Ref"
                                    refId="name4Ref"
                                    v-show="pvt_isShow.name4 === 'name4Ref'"
                                    :paraVarPair="pvt_name4.name4Ref.paraVarPair"
                                    :para="pvt_name4.name4Ref.para"
                                    :attr="pvt_name4.name4Ref.attr">
                            </lm2b-button>
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

    export default {
        components: {},
        inject: ['sys'],
        props: ['refId','para','attr','number'],
        data: function() {
            return {
                pvt_subModuleMap: {
                    vessel:['img1','footerName1','img2','footerName2','img3','badge3','btnWrap3','img4','name4'],
                    subModule:['img1Ref','name1Ref','img2Ref','name2Ref','img3Ref','badge3Ref','name3Ref','img4Ref','name4Ref'],
                },
                pvt_isShow: {
                    img1:null,
                    footerName1:null,
                    img2:null,
                    footerName2:null,
                    img3:null,
                    badge3:null,
                    btnWrap3:null,
                    img4:null,
                    name4:null,
                },
                pvt_eventPortInput: ['moduleChangeEvent'],

                badgeNum:1,
            };
        },
        watch: {
        },
        computed:{
            pvt_img1:function(){
                return {
                    img1Ref:{
                        paraVarPair:{
                        },
                        para:{
                            name:['','van-icon-chart-trending-o'],
                        },
                        attr:{
                            type:'text',
                            height: '20px'
                        },
                    },
                };
            },
            pvt_footerName1:function(){
                return {
                    name1Ref:{
                        paraVarPair:{
                        },
                        para:{
                            name:['数据分析',''],
                        },
                        attr:{
                            type:'text',
                            height: '20px'
                        },
                    },
                };
            },
            pvt_img2:function(){
                return {
                    img2Ref:{
                        paraVarPair:{
                        },
                        para:{
                            name:['','van-icon-records'],
                        },
                        attr:{
                            type:'text',
                            height: '20px'
                        },
                    },
                };
            },
            pvt_footerName2:function(){
                return {
                    name2Ref:{
                        paraVarPair:{
                        },
                        para:{
                            name:['活动编辑',''],
                        },
                        attr:{
                            type:'text',
                            height: '20px'
                        },
                    },
                };
            },
            pvt_img3:function(){
                return {
                    img3Ref:{
                        paraVarPair:{
                        },
                        para:{
                            name:['', 'van-icon-description'],
                        },
                        attr:{
                            type:'text',
                            height: '20px'
                        },
                    },
                };
            },
            pvt_badge3:function(){
                return {
                    badge3Ref:{
                        paraVarPair:{
                            logoValue:'badgeNum',
                        },
                        para:{
                            logoValue:this.badgeNum,
                        },
                        attr:{
                            type:'danger',
                        },
                    },
                };
            },
            pvt_btnWrap3:function(){
                return {
                    name3Ref:{
                        paraVarPair:{
                        },
                        para:{
                            name:['报名管理', ''],
                        },
                        attr:{
                            type:'text',
                            height: '20px'
                        },
                    },
                };
            },
            pvt_img4:function(){
                return {
                    img4Ref:{
                        paraVarPair:{
                        },
                        para:{
                            name:['', 'van-icon-apps-o'],
                        },
                        attr:{
                            type:'text',
                            height: '20px'
                        },
                    },
                };
            },
            pvt_name4:function(){
                return {
                    name4Ref:{
                        paraVarPair:{
                        },
                        para:{
                            name:['其他管理',''],
                        },
                        attr:{
                            type:'text',
                            height: '20px'
                        },
                    },
                };
            },
        },
        created: function () {
            Object.assign(this, libSys,libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule:function(successCallBack,errorCallBack){
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

                let refArr = ['img1Ref','name1Ref','img2Ref','name2Ref','img3Ref','name3Ref','img4Ref','name4Ref'];

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.forceUpdateData(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'start_sub':
                            if(para.i >= refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }
                            that.sm[refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
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
            moduleChange:function(){},
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt";
    .manage_footer_row {
        display:flex;
        width:100%;
    }
    .manage_footer_col {
        display:flex;
        flex-direction:column;
    }
    .manage_footer_col_manage_footerWindow_size_medium {
        width:@manage_footer-manage_footerWindow-medium-width;
        padding:@manage_footer-manage_footerWindow-medium-padding;
    }
    .manage_footer_col_manage_footerWindow {
        border-style:@manage_footer-manage_footerWindow-border-style;
        border-width:@manage_footer-manage_footerWindow-border-width;
        border-color:mix(@manage_footer-manage_footerWindow-border-color,#fff,@manage_footer-manage_footerWindow-hover-border-color-opacity);
    }
    .manage_footer_col_footerBtn1_size_medium {
        width:@manage_footer-footerBtn1-medium-width;
        justify-content:@manage_footer-footerBtn1-medium-horizontal-position;
    }
    .manage_footer_col_footerBtn2_size_medium {
        width:@manage_footer-footerBtn2-medium-width;
        height:@manage_footer-footerBtn2-medium-height;
        justify-content:@manage_footer-footerBtn2-medium-horizontal-position;
    }
    .manage_footer_col_footerBtn3_size_medium {
        width:@manage_footer-footerBtn3-medium-width;
        justify-content:@manage_footer-footerBtn3-medium-horizontal-position;
    }
    .manage_footer_col_footerBtn3 {
        border-color:mix(@manage_footer-footerBtn3-border-color,#fff,@manage_footer-footerBtn3-hover-border-color-opacity);
    }
    .manage_footer_col_footerBtn4_size_medium {
        width:@manage_footer-footerBtn4-medium-width;
        justify-content:@manage_footer-footerBtn4-medium-horizontal-position;
    }
    .manage_footer_col_footerImg1_size_medium {
        width:@manage_footer-footerImg1-medium-width;

    }
    .manage_footer_col_footerName1_size_medium {
        width:@manage_footer-footerName1-medium-width;
        justify-content:@manage_footer-footerName1-medium-horizontal-position;
    }
    .manage_footer_col_img1_size_medium {
        width:@manage_footer-img1-medium-width;
        height:@manage_footer-img1-medium-height;
        justify-content:@manage_footer-img1-medium-horizontal-position;
        text-align: center;
    }
    .manage_footer_col_badge1_size_medium {
        width:@manage_footer-badge1-medium-width;
        height:@manage_footer-badge1-medium-height;
    }
    .manage_footer_col_footerImg2_size_medium {
        width:@manage_footer-footerImg2-medium-width;
    }
    .manage_footer_col_footerName2_size_medium {
        width:@manage_footer-footerName2-medium-width;
        justify-content:@manage_footer-footerName2-medium-horizontal-position;
    }
    .manage_footer_col_img2_size_medium {
        width:@manage_footer-img2-medium-width;
        justify-content:@manage_footer-img2-medium-horizontal-position;
        text-align: center;
    }
    .manage_footer_col_badge2_size_medium {
        width:@manage_footer-badge2-medium-width;
    }
    .manage_footer_col_footerImg3_size_medium {
        width:@manage_footer-footerImg3-medium-width;
    }
    .manage_footer_col_img3_size_medium {
        width:@manage_footer-img3-medium-width;
        justify-content:@manage_footer-img3-medium-horizontal-position;
        text-align: center;
    }
    .manage_footer_col_badge3_size_medium {
        width:@manage_footer-badge3-medium-width;
        justify-content:@manage_footer-badge3-medium-horizontal-position;
        align-items:@manage_footer-badge3-medium-vertical-position;
    }
    .manage_footer_col_btnWrap3_size_medium {
        width:@manage_footer-btnWrap3-medium-width;
        justify-content:@manage_footer-btnWrap3-medium-horizontal-position;
    }
    .manage_footer_col_img4_size_medium {
        width:@manage_footer-img4-medium-width;
        justify-content:@manage_footer-img4-medium-horizontal-position;
        text-align: center;
    }
    .manage_footer_col_name4_size_medium {
        width:@manage_footer-name4-medium-width;
        justify-content:@manage_footer-name4-medium-horizontal-position;
    }
</style>