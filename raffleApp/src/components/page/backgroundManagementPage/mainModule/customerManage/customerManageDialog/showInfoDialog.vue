<template>
    <div v-show="pvt_win.isShow.backMan_main_customerMan_showInf"
         :class="{backMan_main_customerMan_showInf_container:true,backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_backMan_main_customerMan_showInf:true,backMan_main_customerMan_showInf_col_backMan_main_customerMan_showInf_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_backMan_main_customerMan_showInf_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_backMan_main_customerMan_showInf_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_backMan_main_customerMan_showInf_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_backMan_main_customerMan_showInf_checked:pvt_win.isChecked.backMan_main_customerMan_showInf,backMan_main_customerMan_showInf_col_backMan_main_customerMan_showInf_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_customerMan_showInf" >

        <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r1c1:true,backMan_main_customerMan_showInf_col_r1c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r1c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r1c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r1c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_customerMan_showInf_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1" >

                <lm1a-link-text
                        ref="title"
                        refId="title"
                        v-show="pvt_isShow.r1c1 === 'title'"
                        :paraVarPair="pvt_r1c1.title.paraVarPair"
                        :para="pvt_r1c1.title.para"
                        :attr="pvt_r1c1.title.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c2"
                 :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r1c2:true,backMan_main_customerMan_showInf_col_r1c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r1c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r1c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r1c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r1c2_checked:pvt_win.isChecked.r1c2,backMan_main_customerMan_showInf_col_r1c2_disable:attr.disabled}"
                 :style="pvt_win.style.r1c2" >

                <lm1a-link-text
                        ref="closeIcon"
                        refId="closeIcon"
                        v-show="pvt_isShow.r1c2 === 'closeIcon'"
                        :paraVarPair="pvt_r1c2.closeIcon.paraVarPair"
                        :para="pvt_r1c2.closeIcon.para"
                        :attr="pvt_r1c2.closeIcon.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row1">
            <div v-show="pvt_win.isShow.r2c0"
                 :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r2c0:true,backMan_main_customerMan_showInf_col_r2c0_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r2c0_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r2c0_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r2c0_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r2c0_checked:pvt_win.isChecked.r2c0,backMan_main_customerMan_showInf_col_r2c0_disable:attr.disabled}"
                 :style="pvt_win.style.r2c0" >

                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row2">
                    <div v-show="pvt_win.isShow.r2c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r2c1:true,backMan_main_customerMan_showInf_col_r2c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r2c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r2c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r2c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_customerMan_showInf_col_r2c1_disable:attr.disabled}"
                         :style="pvt_win.style.r2c1" >

                        <lm1a-link-text
                                ref="nameLabel"
                                refId="nameLabel"
                                v-show="pvt_isShow.r2c1 === 'nameLabel'"
                                :paraVarPair="pvt_r2c1.nameLabel.paraVarPair"
                                :para="pvt_r2c1.nameLabel.para"
                                :attr="pvt_r2c1.nameLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r2c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r2c2:true,backMan_main_customerMan_showInf_col_r2c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r2c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r2c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r2c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r2c2_checked:pvt_win.isChecked.r2c2,backMan_main_customerMan_showInf_col_r2c2_disable:attr.disabled}"
                         :style="pvt_win.style.r2c2" >

                        <lm1a-link-text
                                ref="requiredIcon1"
                                refId="requiredIcon1"
                                v-show="pvt_isShow.r2c2 === 'requiredIcon1'"
                                :paraVarPair="pvt_r2c2.requiredIcon1.paraVarPair"
                                :para="pvt_r2c2.requiredIcon1.para"
                                :attr="pvt_r2c2.requiredIcon1.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r2c3"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r2c3:true,backMan_main_customerMan_showInf_col_r2c3_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r2c3_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r2c3_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r2c3_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r2c3_checked:pvt_win.isChecked.r2c3,backMan_main_customerMan_showInf_col_r2c3_disable:attr.disabled}"
                         :style="pvt_win.style.r2c3" >

                        <lm1a-link-text
                                ref="nameText"
                                refId="nameText"
                                v-show="pvt_isShow.r2c3 === 'nameText'"
                                :paraVarPair="pvt_r2c3.nameText.paraVarPair"
                                :para="pvt_r2c3.nameText.para"
                                :attr="pvt_r2c3.nameText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row3">
                    <div v-show="pvt_win.isShow.r3c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r3c1:true,backMan_main_customerMan_showInf_col_r3c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r3c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r3c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r3c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r3c1_checked:pvt_win.isChecked.r3c1,backMan_main_customerMan_showInf_col_r3c1_disable:attr.disabled}"
                         :style="pvt_win.style.r3c1" >

                        <lm1a-link-text
                                ref="mobileLabel"
                                refId="mobileLabel"
                                v-show="pvt_isShow.r3c1 === 'mobileLabel'"
                                :paraVarPair="pvt_r3c1.mobileLabel.paraVarPair"
                                :para="pvt_r3c1.mobileLabel.para"
                                :attr="pvt_r3c1.mobileLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r3c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r3c2:true,backMan_main_customerMan_showInf_col_r3c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r3c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r3c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r3c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r3c2_checked:pvt_win.isChecked.r3c2,backMan_main_customerMan_showInf_col_r3c2_disable:attr.disabled}"
                         :style="pvt_win.style.r3c2" >

                        <lm1a-link-text
                                ref="requiredIcon2"
                                refId="requiredIcon2"
                                v-show="pvt_isShow.r3c2 === 'requiredIcon2'"
                                :paraVarPair="pvt_r3c2.requiredIcon2.paraVarPair"
                                :para="pvt_r3c2.requiredIcon2.para"
                                :attr="pvt_r3c2.requiredIcon2.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r3c3"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r3c3:true,backMan_main_customerMan_showInf_col_r3c3_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r3c3_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r3c3_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r3c3_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r3c3_checked:pvt_win.isChecked.r3c3,backMan_main_customerMan_showInf_col_r3c3_disable:attr.disabled}"
                         :style="pvt_win.style.r3c3" >

                        <lm1a-link-text
                                ref="mobileText"
                                refId="mobileText"
                                v-show="pvt_isShow.r3c3 === 'mobileText'"
                                :paraVarPair="pvt_r3c3.mobileText.paraVarPair"
                                :para="pvt_r3c3.mobileText.para"
                                :attr="pvt_r3c3.mobileText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row4">
                    <div v-show="pvt_win.isShow.r4c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r4c1:true,backMan_main_customerMan_showInf_col_r4c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r4c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r4c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r4c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r4c1_checked:pvt_win.isChecked.r4c1,backMan_main_customerMan_showInf_col_r4c1_disable:attr.disabled}"
                         :style="pvt_win.style.r4c1" >

                        <lm1a-link-text
                                ref="companyLabel"
                                refId="companyLabel"
                                v-show="pvt_isShow.r4c1 === 'companyLabel'"
                                :paraVarPair="pvt_r4c1.companyLabel.paraVarPair"
                                :para="pvt_r4c1.companyLabel.para"
                                :attr="pvt_r4c1.companyLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r4c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r4c2:true,backMan_main_customerMan_showInf_col_r4c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r4c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r4c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r4c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r4c2_checked:pvt_win.isChecked.r4c2,backMan_main_customerMan_showInf_col_r4c2_disable:attr.disabled}"
                         :style="pvt_win.style.r4c2" >

                        <lm1a-link-text
                                ref="companyText"
                                refId="companyText"
                                v-show="pvt_isShow.r4c2 === 'companyText'"
                                :paraVarPair="pvt_r4c2.companyText.paraVarPair"
                                :para="pvt_r4c2.companyText.para"
                                :attr="pvt_r4c2.companyText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row5">
                    <div v-show="pvt_win.isShow.r5c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r5c1:true,backMan_main_customerMan_showInf_col_r5c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r5c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r5c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r5c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r5c1_checked:pvt_win.isChecked.r5c1,backMan_main_customerMan_showInf_col_r5c1_disable:attr.disabled}"
                         :style="pvt_win.style.r5c1" >

                        <lm1a-link-text
                                ref="arriveLabel"
                                refId="arriveLabel"
                                v-show="pvt_isShow.r5c1 === 'arriveLabel'"
                                :paraVarPair="pvt_r5c1.arriveLabel.paraVarPair"
                                :para="pvt_r5c1.arriveLabel.para"
                                :attr="pvt_r5c1.arriveLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r5c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r5c2:true,backMan_main_customerMan_showInf_col_r5c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r5c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r5c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r5c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r5c2_checked:pvt_win.isChecked.r5c2,backMan_main_customerMan_showInf_col_r5c2_disable:attr.disabled}"
                         :style="pvt_win.style.r5c2" >

                        <lm1a-link-text
                                ref="arriveTimeText"
                                refId="arriveTimeText"
                                v-show="pvt_isShow.r5c2 === 'arriveTimeText'"
                                :paraVarPair="pvt_r5c2.arriveTimeText.paraVarPair"
                                :para="pvt_r5c2.arriveTimeText.para"
                                :attr="pvt_r5c2.arriveTimeText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row6">
                    <div v-show="pvt_win.isShow.r6c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r6c1:true,backMan_main_customerMan_showInf_col_r6c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r6c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r6c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r6c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r6c1_checked:pvt_win.isChecked.r6c1,backMan_main_customerMan_showInf_col_r6c1_disable:attr.disabled}"
                         :style="pvt_win.style.r6c1" >

                        <lm1a-link-text
                                ref="leaveTime"
                                refId="leaveTime"
                                v-show="pvt_isShow.r6c1 === 'leaveTime'"
                                :paraVarPair="pvt_r6c1.leaveTime.paraVarPair"
                                :para="pvt_r6c1.leaveTime.para"
                                :attr="pvt_r6c1.leaveTime.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r6c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r6c2:true,backMan_main_customerMan_showInf_col_r6c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r6c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r6c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r6c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r6c2_checked:pvt_win.isChecked.r6c2,backMan_main_customerMan_showInf_col_r6c2_disable:attr.disabled}"
                         :style="pvt_win.style.r6c2" >

                        <lm1a-link-text
                                ref="leaveTimeText"
                                refId="leaveTimeText"
                                v-show="pvt_isShow.r6c2 === 'leaveTimeText'"
                                :paraVarPair="pvt_r6c2.leaveTimeText.paraVarPair"
                                :para="pvt_r6c2.leaveTimeText.para"
                                :attr="pvt_r6c2.leaveTimeText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row7">
                    <div v-show="pvt_win.isShow.r7c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r7c1:true,backMan_main_customerMan_showInf_col_r7c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r7c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r7c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r7c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r7c1_checked:pvt_win.isChecked.r7c1,backMan_main_customerMan_showInf_col_r7c1_disable:attr.disabled}"
                         :style="pvt_win.style.r7c1" >

                        <lm1a-link-text
                                ref="hotelLabel"
                                refId="hotelLabel"
                                v-show="pvt_isShow.r7c1 === 'hotelLabel'"
                                :paraVarPair="pvt_r7c1.hotelLabel.paraVarPair"
                                :para="pvt_r7c1.hotelLabel.para"
                                :attr="pvt_r7c1.hotelLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r7c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r7c2:true,backMan_main_customerMan_showInf_col_r7c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r7c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r7c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r7c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r7c2_checked:pvt_win.isChecked.r7c2,backMan_main_customerMan_showInf_col_r7c2_disable:attr.disabled}"
                         :style="pvt_win.style.r7c2" >

                        <lm1a-link-text
                                ref="hotelText"
                                refId="hotelText"
                                v-show="pvt_isShow.r7c2 === 'hotelText'"
                                :paraVarPair="pvt_r7c2.hotelText.paraVarPair"
                                :para="pvt_r7c2.hotelText.para"
                                :attr="pvt_r7c2.hotelText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row12">
                    <div v-show="pvt_win.isShow.r12c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r12c1:true,backMan_main_customerMan_showInf_col_r12c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r12c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r12c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r12c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r12c1_checked:pvt_win.isChecked.r12c1,backMan_main_customerMan_showInf_col_r12c1_disable:attr.disabled}"
                         :style="pvt_win.style.r12c1" >

                        <lm1a-link-text
                                ref="dinLabel"
                                refId="dinLabel"
                                v-show="pvt_isShow.r12c1 === 'dinLabel'"
                                :paraVarPair="pvt_r12c1.dinLabel.paraVarPair"
                                :para="pvt_r12c1.dinLabel.para"
                                :attr="pvt_r12c1.dinLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r12c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r12c2:true,backMan_main_customerMan_showInf_col_r12c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r12c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r12c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r12c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r12c2_checked:pvt_win.isChecked.r12c2,backMan_main_customerMan_showInf_col_r12c2_disable:attr.disabled}"
                         :style="pvt_win.style.r12c2" >

                        <lm1a-link-text
                                ref="dinText"
                                refId="dinText"
                                v-show="pvt_isShow.r12c2 === 'dinText'"
                                :paraVarPair="pvt_r12c2.dinText.paraVarPair"
                                :para="pvt_r12c2.dinText.para"
                                :attr="pvt_r12c2.dinText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row8">
                    <div v-show="pvt_win.isShow.r8c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r8c1:true,backMan_main_customerMan_showInf_col_r8c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r8c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r8c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r8c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r8c1_checked:pvt_win.isChecked.r8c1,backMan_main_customerMan_showInf_col_r8c1_disable:attr.disabled}"
                         :style="pvt_win.style.r8c1" >

                        <lm1a-link-text
                                ref="typeLabel"
                                refId="typeLabel"
                                v-show="pvt_isShow.r8c1 === 'typeLabel'"
                                :paraVarPair="pvt_r8c1.typeLabel.paraVarPair"
                                :para="pvt_r8c1.typeLabel.para"
                                :attr="pvt_r8c1.typeLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r8c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r8c2:true,backMan_main_customerMan_showInf_col_r8c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r8c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r8c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r8c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r8c2_checked:pvt_win.isChecked.r8c2,backMan_main_customerMan_showInf_col_r8c2_disable:attr.disabled}"
                         :style="pvt_win.style.r8c2" >

                        <lm1a-link-text
                                ref="typeText"
                                refId="typeText"
                                v-show="pvt_isShow.r8c2 === 'typeText'"
                                :paraVarPair="pvt_r8c2.typeText.paraVarPair"
                                :para="pvt_r8c2.typeText.para"
                                :attr="pvt_r8c2.typeText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row9">
                    <div v-show="pvt_win.isShow.r9c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r9c1:true,backMan_main_customerMan_showInf_col_r9c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r9c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r9c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r9c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r9c1_checked:pvt_win.isChecked.r9c1,backMan_main_customerMan_showInf_col_r9c1_disable:attr.disabled}"
                         :style="pvt_win.style.r9c1" >

                        <lm1a-link-text
                                ref="companionLabel"
                                refId="companionLabel"
                                v-show="pvt_isShow.r9c1 === 'companionLabel'"
                                :paraVarPair="pvt_r9c1.companionLabel.paraVarPair"
                                :para="pvt_r9c1.companionLabel.para"
                                :attr="pvt_r9c1.companionLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r9c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r9c2:true,backMan_main_customerMan_showInf_col_r9c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r9c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r9c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r9c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r9c2_checked:pvt_win.isChecked.r9c2,backMan_main_customerMan_showInf_col_r9c2_disable:attr.disabled}"
                         :style="pvt_win.style.r9c2" >

                        <lm1a-link-text
                                ref="companionText"
                                refId="companionText"
                                v-show="pvt_isShow.r9c2 === 'companionText'"
                                :paraVarPair="pvt_r9c2.companionText.paraVarPair"
                                :para="pvt_r9c2.companionText.para"
                                :attr="pvt_r9c2.companionText.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row10">
                    <div v-show="pvt_win.isShow.r10c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r10c1:true,backMan_main_customerMan_showInf_col_r10c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r10c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r10c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r10c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r10c1_checked:pvt_win.isChecked.r10c1,backMan_main_customerMan_showInf_col_r10c1_disable:attr.disabled}"
                         :style="pvt_win.style.r10c1" >

                        <lm1a-link-text
                                ref="remarkLabel"
                                refId="remarkLabel"
                                v-show="pvt_isShow.r10c1 === 'remarkLabel'"
                                :paraVarPair="pvt_r10c1.remarkLabel.paraVarPair"
                                :para="pvt_r10c1.remarkLabel.para"
                                :attr="pvt_r10c1.remarkLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r10c2"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r10c2:true,backMan_main_customerMan_showInf_col_r10c2_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r10c2_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r10c2_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r10c2_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r10c2_checked:pvt_win.isChecked.r10c2,backMan_main_customerMan_showInf_col_r10c2_disable:attr.disabled}"
                         :style="pvt_win.style.r10c2" >

                        <lm1a-input-text
                                ref="remarkInput"
                                refId="remarkInput"
                                v-show="pvt_isShow.r10c2 === 'remarkInput'"
                                :paraVarPair="pvt_r10c2.remarkInput.paraVarPair"
                                :para="pvt_r10c2.remarkInput.para"
                                :attr="pvt_r10c2.remarkInput.attr">
                        </lm1a-input-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_showInf_row backMan_main_customerMan_showInf_row_row11">
                    <div v-show="pvt_win.isShow.r11c1"
                         :class="{backMan_main_customerMan_showInf_col:true,backMan_main_customerMan_showInf_col_r11c1:true,backMan_main_customerMan_showInf_col_r11c1_size_large:attr.size==='large',backMan_main_customerMan_showInf_col_r11c1_size_medium:attr.size==='medium',backMan_main_customerMan_showInf_col_r11c1_size_small:attr.size==='small',backMan_main_customerMan_showInf_col_r11c1_size_min:attr.size==='min',backMan_main_customerMan_showInf_col_r11c1_checked:pvt_win.isChecked.r11c1,backMan_main_customerMan_showInf_col_r11c1_disable:attr.disabled}"
                         :style="pvt_win.style.r11c1" >

                        <lm1a-button
                                ref="btn"
                                refId="btn"
                                v-show="pvt_isShow.r11c1 === 'btn'"
                                :paraVarPair="pvt_r11c1.btn.paraVarPair"
                                :para="pvt_r11c1.btn.para"
                                :attr="pvt_r11c1.btn.attr">
                        </lm1a-button>
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
    props: {
      refId: String,
      para: Object,
      attr: {
        type: Object,
        default: function () {
          return {size: 'medium'};
        },
        validator: function (val) {
          if(!val.size) val.size = 'medium';
          return true;
        },
      },
      paraVarPair: Object,
      number: Number,
    },
    data: function() {
      return {
          mac: mac.mac,
        customerId:this.para.customerId,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r2c1','r2c2','r2c3','r3c1','r3c2','r3c3','r4c1','r5c1','r6c1','r7c1','r8c1','r9c1','r10c1','r4c2','r5c2','r6c2','r7c2','r8c2','r9c2','r10c2','r11c1','r12c1','r12c2'],
          subModule:['title','closeIcon','nameLabel','requiredIcon1','nameText','mobileLabel','requiredIcon2','mobileText','companyLabel','arriveLabel','leaveTime','hotelLabel','typeLabel','companionLabel','remarkLabel','companyText','arriveTimeText','leaveTimeText','hotelText','typeText','companionText','remarkInput','btn','dinLabel','dinText'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r2c1:null,
          r2c2:null,
          r2c3:null,
          r3c1:null,
          r3c2:null,
          r3c3:null,
          r4c1:null,
          r5c1:null,
          r6c1:null,
          r7c1:null,
          r8c1:null,
          r9c1:null,
          r10c1:null,
          r4c2:null,
          r5c2:null,
          r6c2:null,
          r7c2:null,
          r8c2:null,
          r9c2:null,
          r10c2:null,
          r11c1:null,
          r12c1:null,
          r12c2:null,
        },
        pvt_win:{
          isShow:{
            backMan_main_customerMan_showInf:true,
            r1c1:true,
            r1c2:true,
            r2c0:true,
            r2c1:true,
            r2c2:true,
            r2c3:true,
            r3c1:true,
            r3c2:true,
            r3c3:true,
            r4c1:true,
            r4c2:true,
            r5c1:true,
            r5c2:true,
            r6c1:true,
            r6c2:true,
            r7c1:true,
            r7c2:true,
            r8c1:true,
            r8c2:true,
            r9c1:true,
            r9c2:true,
            r10c1:true,
            r10c2:true,
            r11c1:true,
            r12c1:true,
            r12c2:true,
          },
          isChecked:{
            backMan_main_customerMan_showInf:false,
            r1c1:false,
            r1c2:false,
            r2c0:false,
            r2c1:false,
            r2c2:false,
            r2c3:false,
            r3c1:false,
            r3c2:false,
            r3c3:false,
            r4c1:false,
            r4c2:false,
            r5c1:false,
            r5c2:false,
            r6c1:false,
            r6c2:false,
            r7c1:false,
            r7c2:false,
            r8c1:false,
            r8c2:false,
            r9c1:false,
            r9c2:false,
            r10c1:false,
            r10c2:false,
            r11c1:false,
            r12c1:false,
            r12c2:false,
          },
          style:{
            backMan_main_customerMan_showInf:null,
            r1c1:null,
            r1c2:null,
            r2c0:null,
            r2c1:null,
            r2c2:null,
            r2c3:null,
            r3c1:null,
            r3c2:null,
            r3c3:null,
            r4c1:null,
            r4c2:null,
            r5c1:null,
            r5c2:null,
            r6c1:null,
            r6c2:null,
            r7c1:null,
            r7c2:null,
            r8c1:null,
            r8c2:null,
            r9c1:null,
            r9c2:null,
            r10c1:null,
            r10c2:null,
            r11c1:null,
            r12c1:null,
            r12c2:null,
          },
        },
        pvt_eventPortInput: [],

        name:'',
        mobile:'',
        company:'',
        arriveTime:'',
        leaveTime:'',
        hotel:'',
        type:'',
        companion:'',
        remark:'',
        din:'',
      };
    },
    watch: {
      customerId: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.customerId) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.customerId][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.customerId] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          title:{
            paraVarPair:{
            },
            para:{
              textData:'客户信息',
            },
            attr:{
              label:'div',
              fontWeight:true,
              color:'#000',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          closeIcon:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              fontWeight:true,
              color:'#000',
              fontSize:'20px',
              icon:'el-icon-close',
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          nameLabel:{
            paraVarPair:{
            },
            para:{
              textData:'姓名：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r2c2:function(){
        return {
          requiredIcon1:{
            paraVarPair:{
            },
            para:{
              textData:'*',
            },
            attr:{
              label:'div',
              color:'#F56C6C',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r2c3:function(){
        return {
          nameText:{
            paraVarPair:{
              textData:'name',
            },
            para:{
              textData:this.name,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          mobileLabel:{
            paraVarPair:{
            },
            para:{
              textData:'手机号：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r3c2:function(){
        return {
          requiredIcon2:{
            paraVarPair:{
            },
            para:{
              textData:'*',
            },
            attr:{
              label:'div',
              color:'#F56C6C',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r3c3:function(){
        return {
          mobileText:{
            paraVarPair:{
              textData:'mobile',
            },
            para:{
              textData:this.mobile,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r4c1:function(){
        return {
          companyLabel:{
            paraVarPair:{
            },
            para:{
              textData:'公司名称：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r5c1:function(){
        return {
          arriveLabel:{
            paraVarPair:{
            },
            para:{
              textData:'预计到达时间：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r6c1:function(){
        return {
          leaveTime:{
            paraVarPair:{
            },
            para:{
              textData:'预计离开时间：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r7c1:function(){
        return {
          hotelLabel:{
            paraVarPair:{
            },
            para:{
              textData:'是否留宿：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r8c1:function(){
        return {
          typeLabel:{
            paraVarPair:{
            },
            para:{
              textData:'类别：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r9c1:function(){
        return {
          companionLabel:{
            paraVarPair:{
            },
            para:{
              textData:'随行人数：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r10c1:function(){
        return {
          remarkLabel:{
            paraVarPair:{
            },
            para:{
              textData:'备注：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r4c2:function(){
        return {
          companyText:{
            paraVarPair:{
              textData:'company',
            },
            para:{
              textData:this.company,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r5c2:function(){
        return {
          arriveTimeText:{
            paraVarPair:{
              textData:'arriveTime',
            },
            para:{
              textData:this.arriveTime,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
              icon:'el-icon-date',
            },
          },
        };
      },
      pvt_r6c2:function(){
        return {
          leaveTimeText:{
            paraVarPair:{
              textData:'leaveTime',
            },
            para:{
              textData:this.leaveTime,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
              icon:'el-icon-date',
            },
          },
        };
      },
      pvt_r7c2:function(){
        return {
          hotelText:{
            paraVarPair:{
              textData:'hotel',
            },
            para:{
              textData:this.hotel,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r8c2:function(){
        return {
          typeText:{
            paraVarPair:{
              textData:'type',
            },
            para:{
              textData:this.type,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r9c2:function(){
        return {
          companionText:{
            paraVarPair:{
              textData:'companion',
            },
            para:{
              textData:this.companion,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r10c2:function(){
        return {
          remarkInput:{
            paraVarPair:{
              text:'remark',
            },
            para:{
              text:this.remark,
            },
            attr:{
              size:'small',
              disabled:true,
              type:'textarea',
              resize:'none',
              autosize:{minRows:5,maxRows:5},
            },
          },
        };
      },
      pvt_r11c1:function(){
        return {
          btn:{
            paraVarPair:{
            },
            para:{
              name:['确定'],
            },
            attr:{
              type:'primary',
              size:'small',
              width:'100px'
            },
          },
        };
      },
      pvt_r12c1:function(){
        return {
          dinLabel:{
            paraVarPair:{
            },
            para:{
              textData:'是否用餐：',
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r12c2:function(){
        return {
          dinText:{
            paraVarPair:{
              textData:'din',
            },
            para:{
              textData:this.din,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
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
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let dbFlag;
        let tableVariable,parentRecord,record,dbData;

        if (successCallBack !== null) {
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while (1) {
          dbFlag = 0;
          switch (para.nStep) {
            case 0:
              $this.mac = mac.mac;
              $this.customerId = $this.para.customerId;
              // 初始化数据
              $this.name = '';
              $this.mobile = '';
              $this.company = '未写入';
              $this.arriveTime = '未定';
              $this.leaveTime = '未定';
              $this.hotel = '未确定';
              $this.din = '未确定';
              $this.type = '未选择';
              $this.companion = 0;
              $this.remark = '';
              //查表获取数据
              dbData = {};
              tableVariable = null;
              parentRecord = null;
              record = {
                table:$this.mac.tb.customer,
                id:[$this.customerId],
                field:[
                  $this.mac.fd.customer.name,
                  $this.mac.fd.customer.mobile,
                  $this.mac.fd.customer.company,
                  $this.mac.fd.customer.companion,
                  $this.mac.fd.customer.type,
                  $this.mac.fd.customer.arrival,
                  $this.mac.fd.customer.leave,
                  $this.mac.fd.customer.hotel,
                  $this.mac.fd.customer.dining,
                  $this.mac.fd.customer.remark,
                ]
              };
              $this.sys.api.recordRead(tableVariable,parentRecord,record,dbData, function () {
                $this.name = dbData[$this.mac.fd.customer.name][0];
                $this.mobile = dbData[$this.mac.fd.customer.mobile][0];
                if(dbData[$this.mac.fd.customer.company][0]){
                  $this.company = dbData[$this.mac.fd.customer.company][0];
                }
                if(dbData[$this.mac.fd.customer.companion][0]){
                  $this.companion = dbData[$this.mac.fd.customer.companion][0];
                }
                var type = dbData[$this.mac.fd.customer.type][0];
                if(type === $this.mac.enum.customer.type.development_company){
                  $this.type = '开发公司';
                }else if(type === $this.mac.enum.customer.type.investment_agency){
                  $this.type = '投资机构';
                }else if(type === $this.mac.enum.customer.type.friend){
                  $this.type = '朋友';
                }else if(type === $this.mac.enum.customer.type.shareholder){
                  $this.type = '股东';
                }else if(type === $this.mac.enum.customer.type.other){
                  $this.type = '其他';
                }
                if(dbData[$this.mac.fd.customer.arrival][0]){
                  $this.arriveTime = dbData[$this.mac.fd.customer.arrival][0];
                }
                if(dbData[$this.mac.fd.customer.leave][0]){
                  $this.leaveTime = dbData[$this.mac.fd.customer.leave][0];
                }
                var hotel = dbData[$this.mac.fd.customer.hotel][0];
                if(hotel === $this.mac.enum.customer.hotel.no){
                  $this.hotel = '否';
                }else if(type === $this.mac.enum.customer.hotel.yes){
                  $this.hotel = '是';
                }
                var dining = dbData[$this.mac.fd.customer.dining][0];
                if(dining === $this.mac.enum.customer.dining.no){
                  $this.din = '否';
                }else if(type === $this.mac.enum.customer.dining.yes){
                  $this.din = '是';
                }
                if(dbData[$this.mac.fd.customer.remark][0]){
                  $this.remark = dbData[$this.mac.fd.customer.remark][0];
                }
                para.nStep = 'showModules';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack,errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'title','closeIcon',
                'nameLabel','requiredIcon1','nameText',
                'mobileLabel','requiredIcon2','mobileText',
                'companyLabel','companyText',
                'arriveLabel','arriveTimeText',
                'leaveTime','leaveTimeText',
                'hotelLabel','hotelText',
                'dinLabel','dinText',
                'typeLabel','typeText',
                'companionLabel','companionText',
                'remarkLabel','remarkInput',
                'btn'
              ];
              $this.showSubModule(refId, true, function () {
                para.nStep = 'forceUpdateData';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack,errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function () {
                para.nStep = 'startModule_title';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              });
              break;
            case 'startModule_title':
              //调用子组件的startModule
              $this.sm['title'].startModule(function () {
                para.nStep = 'startModule_closeIcon';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_closeIcon':
              $this.sm['closeIcon'].startModule(function () {
                para.nStep = 'startModule_nameLabel';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_nameLabel':
              $this.sm['nameLabel'].startModule(function () {
                para.nStep = 'startModule_requiredIcon1';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_requiredIcon1':
              $this.sm['requiredIcon1'].startModule(function () {
                para.nStep = 'startModule_nameText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_nameText':
              $this.sm['nameText'].startModule(function () {
                para.nStep = 'startModule_mobileLabel';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_mobileLabel':
              $this.sm['mobileLabel'].startModule(function () {
                para.nStep = 'startModule_requiredIcon2';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_requiredIcon2':
              $this.sm['requiredIcon2'].startModule(function () {
                para.nStep = 'startModule_mobileText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_mobileText':
              $this.sm['mobileText'].startModule(function () {
                para.nStep = 'startModule_companyLabel';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_companyLabel':
              $this.sm['companyLabel'].startModule(function () {
                para.nStep = 'startModule_companyText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_companyText':
              $this.sm['companyText'].startModule(function () {
                para.nStep = 'startModule_arriveLabel';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_arriveLabel':
              $this.sm['arriveLabel'].startModule(function () {
                para.nStep = 'startModule_arriveTimeText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_arriveTimeText':
              $this.sm['arriveTimeText'].startModule(function () {
                para.nStep = 'startModule_leaveTime';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_leaveTime':
              $this.sm['leaveTime'].startModule(function () {
                para.nStep = 'startModule_leaveTimeText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_leaveTimeText':
              $this.sm['leaveTimeText'].startModule(function () {
                para.nStep = 'startModule_hotelLabel';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_hotelLabel':
              $this.sm['hotelLabel'].startModule(function () {
                para.nStep = 'startModule_hotelText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_hotelText':
              $this.sm['hotelText'].startModule(function () {
                para.nStep = 'startModule_dinLabel';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_dinLabel':
              $this.sm['dinLabel'].startModule(function () {
                para.nStep = 'startModule_dinText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_dinText':
              $this.sm['dinText'].startModule(function () {
                para.nStep = 'startModule_typeLabel';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_typeLabel':
              $this.sm['typeLabel'].startModule(function () {
                para.nStep = 'startModule_typeText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_typeText':
              $this.sm['typeText'].startModule(function () {
                para.nStep = 'startModule_companionLabel';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_companionLabel':
              $this.sm['companionLabel'].startModule(function () {
                para.nStep = 'startModule_companionText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_companionText':
              $this.sm['companionText'].startModule(function () {
                para.nStep = 'startModule_remarkLabel';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_remarkLabel':
              $this.sm['remarkLabel'].startModule(function () {
                para.nStep = 'startModule_remarkInput';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_remarkInput':
              $this.sm['remarkInput'].startModule(function () {
                para.nStep = 'startModule_btn';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_btn':
              $this.sm['btn'].startModule(function () {
                para.nStep = 'end';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
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
      closeDialog:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      closeIcon_textClickEvent:function(){
        this.closeDialog();
      },
      btn_buttonClickEvent:function(){
        this.closeDialog();
      },
    },
  };
</script>
<style lang="scss" scoped>
    .backMan_main_customerMan_showInf_container {
        width:100%;
        height:100%;
    }
    .backMan_main_customerMan_showInf_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .backMan_main_customerMan_showInf_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_customerMan_showInf_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_customerMan_showInf_row {
        display:flex;
    }
    .backMan_main_customerMan_showInf_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .backMan_main_customerMan_showInf_col_backMan_main_customerMan_showInf_size_medium {
        width:$backMan_main_customerMan_showInf-backMan_main_customerMan_showInf-medium-width;
        height:$backMan_main_customerMan_showInf-backMan_main_customerMan_showInf-medium-height;
    }
    .backMan_main_customerMan_showInf_col_r1c1_size_medium {
        width:$backMan_main_customerMan_showInf-r1c1-medium-width;
        height:$backMan_main_customerMan_showInf-r1c1-medium-height;
        padding:$backMan_main_customerMan_showInf-r1c1-medium-padding;
        justify-content:$backMan_main_customerMan_showInf-r1c1-medium-vertical-position;
        line-height:$backMan_main_customerMan_showInf-r1c1-medium-line-height;
        box-sizing: border-box;
    }
    .backMan_main_customerMan_showInf_col_r1c1 {
        border-color:mix($backMan_main_customerMan_showInf-r1c1-border-color,#fff,$backMan_main_customerMan_showInf-r1c1-hover-border-color-opacity);
        border-style:$backMan_main_customerMan_showInf-r1c1-border-style;
        border-width:$backMan_main_customerMan_showInf-r1c1-border-width;
    }
    .backMan_main_customerMan_showInf_col_r1c2_size_medium {
        width:$backMan_main_customerMan_showInf-r1c2-medium-width;
        height:$backMan_main_customerMan_showInf-r1c2-medium-height;
        align-items:$backMan_main_customerMan_showInf-r1c2-medium-horizontal-position;
        justify-content:$backMan_main_customerMan_showInf-r1c2-medium-vertical-position;
        line-height:30px;
        padding: 0 5px 0 0;
        flex-grow: 1;
        box-sizing: border-box;
    }
    .backMan_main_customerMan_showInf_col_r1c2 {
        border-color:mix($backMan_main_customerMan_showInf-r1c2-border-color,#fff,$backMan_main_customerMan_showInf-r1c2-hover-border-color-opacity);
        border-width:$backMan_main_customerMan_showInf-r1c2-border-width;
        border-style:$backMan_main_customerMan_showInf-r1c2-border-style;
    }
    .backMan_main_customerMan_showInf_col_r2c0_size_medium {
        width:$backMan_main_customerMan_showInf-r2c0-medium-width;
        padding:10px 40px 0 40px;
        box-sizing: border-box;
    }
    .backMan_main_customerMan_showInf_col_r2c1_size_medium {
        width:$backMan_main_customerMan_showInf-r2c1-medium-width;
        align-items:$backMan_main_customerMan_showInf-r2c1-medium-horizontal-position;
        justify-content:$backMan_main_customerMan_showInf-r2c1-medium-vertical-position;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r2c2_size_medium {
        width:$backMan_main_customerMan_showInf-r2c2-medium-width;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r2c3_size_medium {
        width:$backMan_main_customerMan_showInf-r2c3-medium-width;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r3c1_size_medium {
        width:$backMan_main_customerMan_showInf-r3c1-medium-width;
        align-items:$backMan_main_customerMan_showInf-r3c1-medium-horizontal-position;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r3c2_size_medium {
        width:$backMan_main_customerMan_showInf-r3c2-medium-width;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r3c3_size_medium {
        width:$backMan_main_customerMan_showInf-r3c3-medium-width;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r4c1_size_medium {
        width:$backMan_main_customerMan_showInf-r4c1-medium-width;
        align-items:$backMan_main_customerMan_showInf-r4c1-medium-horizontal-position;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r4c2_size_medium {
        width:$backMan_main_customerMan_showInf-r4c2-medium-width;
        padding:$backMan_main_customerMan_showInf-r4c2-medium-padding;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r5c1_size_medium {
        width:$backMan_main_customerMan_showInf-r5c1-medium-width;
        align-items:$backMan_main_customerMan_showInf-r5c1-medium-horizontal-position;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r5c2_size_medium {
        width:$backMan_main_customerMan_showInf-r5c2-medium-width;
        padding:$backMan_main_customerMan_showInf-r5c2-medium-padding;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r6c1_size_medium {
        width:$backMan_main_customerMan_showInf-r6c1-medium-width;
        align-items:$backMan_main_customerMan_showInf-r6c1-medium-horizontal-position;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r6c2_size_medium {
        width:$backMan_main_customerMan_showInf-r6c2-medium-width;
        padding:$backMan_main_customerMan_showInf-r6c2-medium-padding;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r7c1_size_medium {
        width:$backMan_main_customerMan_showInf-r7c1-medium-width;
        align-items:$backMan_main_customerMan_showInf-r7c1-medium-horizontal-position;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r7c2_size_medium {
        width:$backMan_main_customerMan_showInf-r7c2-medium-width;
        padding:$backMan_main_customerMan_showInf-r7c2-medium-padding;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r8c1_size_medium {
        width:$backMan_main_customerMan_showInf-r8c1-medium-width;
        align-items:$backMan_main_customerMan_showInf-r8c1-medium-horizontal-position;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r8c2_size_medium {
        width:$backMan_main_customerMan_showInf-r8c2-medium-width;
        padding:$backMan_main_customerMan_showInf-r8c2-medium-padding;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r9c1_size_medium {
        width:$backMan_main_customerMan_showInf-r9c1-medium-width;
        align-items:$backMan_main_customerMan_showInf-r9c1-medium-horizontal-position;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r9c2_size_medium {
        width:$backMan_main_customerMan_showInf-r9c2-medium-width;
        padding:$backMan_main_customerMan_showInf-r9c2-medium-padding;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r10c1_size_medium {
        align-items:$backMan_main_customerMan_showInf-r10c1-medium-horizontal-position;
        width:$backMan_main_customerMan_showInf-r10c1-medium-width;
        height:30px;
        line-height:30px;
    }
    .backMan_main_customerMan_showInf_col_r10c2_size_medium {
        width:$backMan_main_customerMan_showInf-r10c2-medium-width;
        padding:$backMan_main_customerMan_showInf-r10c2-medium-padding;
        flex-grow: 1;
    }
    .backMan_main_customerMan_showInf_col_r11c1_size_medium {
        width:$backMan_main_customerMan_showInf-r11c1-medium-width;
        justify-content:$backMan_main_customerMan_showInf-r11c1-medium-vertical-position;
        align-items:$backMan_main_customerMan_showInf-r11c1-medium-horizontal-position;
        height:60px;
    }
    .backMan_main_customerMan_showInf_col_r12c1_size_medium {
        width:$backMan_main_customerMan_showInf-r12c1-medium-width;
        height:$backMan_main_customerMan_showInf-r12c1-medium-height;
        align-items:$backMan_main_customerMan_showInf-r12c1-medium-horizontal-position;
        line-height:$backMan_main_customerMan_showInf-r12c1-medium-line-height;
    }
    .backMan_main_customerMan_showInf_col_r12c2_size_medium {
        width:$backMan_main_customerMan_showInf-r12c2-medium-width;
        line-height:$backMan_main_customerMan_showInf-r12c2-medium-line-height;
        height:$backMan_main_customerMan_showInf-r12c2-medium-height;
        padding:$backMan_main_customerMan_showInf-r12c2-medium-padding;
    }
</style>