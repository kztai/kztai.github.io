<template>
    <div v-show="pvt_win.isShow.backMan_main_customerMan_modifyI"
         :class="{backMan_main_customerMan_modifyI_container:true,backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_backMan_main_customerMan_modifyI:true,backMan_main_customerMan_modifyI_col_backMan_main_customerMan_modifyI_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_backMan_main_customerMan_modifyI_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_backMan_main_customerMan_modifyI_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_backMan_main_customerMan_modifyI_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_backMan_main_customerMan_modifyI_checked:pvt_win.isChecked.backMan_main_customerMan_modifyI,backMan_main_customerMan_modifyI_col_backMan_main_customerMan_modifyI_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_customerMan_modifyI">

        <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r1c1:true,backMan_main_customerMan_modifyI_col_r1c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r1c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r1c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r1c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_customerMan_modifyI_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1">
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
                 :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r1c2:true,backMan_main_customerMan_modifyI_col_r1c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r1c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r1c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r1c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r1c2_checked:pvt_win.isChecked.r1c2,backMan_main_customerMan_modifyI_col_r1c2_disable:attr.disabled}"
                 :style="pvt_win.style.r1c2">

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
        <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row1">
            <div v-show="pvt_win.isShow.r2c0"
                 :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r2c0:true,backMan_main_customerMan_modifyI_col_r2c0_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r2c0_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r2c0_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r2c0_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r2c0_checked:pvt_win.isChecked.r2c0,backMan_main_customerMan_modifyI_col_r2c0_disable:attr.disabled}"
                 :style="pvt_win.style.r2c0">

                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row2">
                    <div v-show="pvt_win.isShow.r2c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r2c1:true,backMan_main_customerMan_modifyI_col_r2c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r2c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r2c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r2c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_customerMan_modifyI_col_r2c1_disable:attr.disabled}"
                         :style="pvt_win.style.r2c1">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r2c2:true,backMan_main_customerMan_modifyI_col_r2c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r2c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r2c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r2c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r2c2_checked:pvt_win.isChecked.r2c2,backMan_main_customerMan_modifyI_col_r2c2_disable:attr.disabled}"
                         :style="pvt_win.style.r2c2">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r2c3:true,backMan_main_customerMan_modifyI_col_r2c3_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r2c3_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r2c3_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r2c3_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r2c3_checked:pvt_win.isChecked.r2c3,backMan_main_customerMan_modifyI_col_r2c3_disable:attr.disabled}"
                         :style="pvt_win.style.r2c3">

                        <lm1a-input-text
                                ref="nameInput"
                                refId="nameInput"
                                v-show="pvt_isShow.r2c3 === 'nameInput'"
                                :paraVarPair="pvt_r2c3.nameInput.paraVarPair"
                                :para="pvt_r2c3.nameInput.para"
                                :attr="pvt_r2c3.nameInput.attr">
                        </lm1a-input-text>
                    </div>
                    <div v-show="pvt_win.isShow.r2c4"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r2c4:true,backMan_main_customerMan_modifyI_col_r2c4_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r2c4_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r2c4_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r2c4_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r2c4_checked:pvt_win.isChecked.r2c4,backMan_main_customerMan_modifyI_col_r2c4_disable:attr.disabled}"
                         :style="pvt_win.style.r2c4">

                        <lm1a-link-text
                                ref="nameTip"
                                refId="nameTip"
                                v-show="pvt_isShow.r2c4 === 'nameTip'"
                                :paraVarPair="pvt_r2c4.nameTip.paraVarPair"
                                :para="pvt_r2c4.nameTip.para"
                                :attr="pvt_r2c4.nameTip.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row3">
                    <div v-show="pvt_win.isShow.r3c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r3c1:true,backMan_main_customerMan_modifyI_col_r3c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r3c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r3c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r3c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r3c1_checked:pvt_win.isChecked.r3c1,backMan_main_customerMan_modifyI_col_r3c1_disable:attr.disabled}"
                         :style="pvt_win.style.r3c1">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r3c2:true,backMan_main_customerMan_modifyI_col_r3c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r3c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r3c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r3c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r3c2_checked:pvt_win.isChecked.r3c2,backMan_main_customerMan_modifyI_col_r3c2_disable:attr.disabled}"
                         :style="pvt_win.style.r3c2">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r3c3:true,backMan_main_customerMan_modifyI_col_r3c3_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r3c3_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r3c3_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r3c3_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r3c3_checked:pvt_win.isChecked.r3c3,backMan_main_customerMan_modifyI_col_r3c3_disable:attr.disabled}"
                         :style="pvt_win.style.r3c3">

                        <lm1a-input-text
                                ref="mobileInput"
                                refId="mobileInput"
                                v-show="pvt_isShow.r3c3 === 'mobileInput'"
                                :paraVarPair="pvt_r3c3.mobileInput.paraVarPair"
                                :para="pvt_r3c3.mobileInput.para"
                                :attr="pvt_r3c3.mobileInput.attr">
                        </lm1a-input-text>
                    </div>
                    <div v-show="pvt_win.isShow.r3c4"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r3c4:true,backMan_main_customerMan_modifyI_col_r3c4_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r3c4_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r3c4_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r3c4_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r3c4_checked:pvt_win.isChecked.r3c4,backMan_main_customerMan_modifyI_col_r3c4_disable:attr.disabled}"
                         :style="pvt_win.style.r3c4">

                        <lm1a-link-text
                                ref="mobileTip"
                                refId="mobileTip"
                                v-show="pvt_isShow.r3c4 === 'mobileTip'"
                                :paraVarPair="pvt_r3c4.mobileTip.paraVarPair"
                                :para="pvt_r3c4.mobileTip.para"
                                :attr="pvt_r3c4.mobileTip.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row4">
                    <div v-show="pvt_win.isShow.r4c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r4c1:true,backMan_main_customerMan_modifyI_col_r4c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r4c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r4c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r4c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r4c1_checked:pvt_win.isChecked.r4c1,backMan_main_customerMan_modifyI_col_r4c1_disable:attr.disabled}"
                         :style="pvt_win.style.r4c1">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r4c2:true,backMan_main_customerMan_modifyI_col_r4c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r4c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r4c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r4c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r4c2_checked:pvt_win.isChecked.r4c2,backMan_main_customerMan_modifyI_col_r4c2_disable:attr.disabled}"
                         :style="pvt_win.style.r4c2">

                        <lm1a-input-text
                                ref="companyInput"
                                refId="companyInput"
                                v-show="pvt_isShow.r4c2 === 'companyInput'"
                                :paraVarPair="pvt_r4c2.companyInput.paraVarPair"
                                :para="pvt_r4c2.companyInput.para"
                                :attr="pvt_r4c2.companyInput.attr">
                        </lm1a-input-text>
                    </div>
                    <div v-show="pvt_win.isShow.r4c3"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r4c3:true,backMan_main_customerMan_modifyI_col_r4c3_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r4c3_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r4c3_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r4c3_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r4c3_checked:pvt_win.isChecked.r4c3,backMan_main_customerMan_modifyI_col_r4c3_disable:attr.disabled}"
                         :style="pvt_win.style.r4c3">

                        <lm1a-link-text
                                ref="companyTip"
                                refId="companyTip"
                                v-show="pvt_isShow.r4c3 === 'companyTip'"
                                :paraVarPair="pvt_r4c3.companyTip.paraVarPair"
                                :para="pvt_r4c3.companyTip.para"
                                :attr="pvt_r4c3.companyTip.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row5">
                    <div v-show="pvt_win.isShow.r5c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r5c1:true,backMan_main_customerMan_modifyI_col_r5c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r5c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r5c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r5c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r5c1_checked:pvt_win.isChecked.r5c1,backMan_main_customerMan_modifyI_col_r5c1_disable:attr.disabled}"
                         :style="pvt_win.style.r5c1">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r5c2:true,backMan_main_customerMan_modifyI_col_r5c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r5c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r5c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r5c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r5c2_checked:pvt_win.isChecked.r5c2,backMan_main_customerMan_modifyI_col_r5c2_disable:attr.disabled}"
                         :style="pvt_win.style.r5c2">

                        <lm1a-date-picker
                                ref="arriveSelect"
                                refId="arriveSelect"
                                v-show="pvt_isShow.r5c2 === 'arriveSelect'"
                                :paraVarPair="pvt_r5c2.arriveSelect.paraVarPair"
                                :para="pvt_r5c2.arriveSelect.para"
                                :attr="pvt_r5c2.arriveSelect.attr">
                        </lm1a-date-picker>
                    </div>
                </div>
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row6">
                    <div v-show="pvt_win.isShow.r6c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r6c1:true,backMan_main_customerMan_modifyI_col_r6c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r6c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r6c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r6c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r6c1_checked:pvt_win.isChecked.r6c1,backMan_main_customerMan_modifyI_col_r6c1_disable:attr.disabled}"
                         :style="pvt_win.style.r6c1">

                        <lm1a-link-text
                                ref="leaveLabel"
                                refId="leaveLabel"
                                v-show="pvt_isShow.r6c1 === 'leaveLabel'"
                                :paraVarPair="pvt_r6c1.leaveLabel.paraVarPair"
                                :para="pvt_r6c1.leaveLabel.para"
                                :attr="pvt_r6c1.leaveLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r6c2"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r6c2:true,backMan_main_customerMan_modifyI_col_r6c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r6c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r6c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r6c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r6c2_checked:pvt_win.isChecked.r6c2,backMan_main_customerMan_modifyI_col_r6c2_disable:attr.disabled}"
                         :style="pvt_win.style.r6c2">

                        <lm1a-date-picker
                                ref="leaveInput"
                                refId="leaveInput"
                                v-show="pvt_isShow.r6c2 === 'leaveInput'"
                                :paraVarPair="pvt_r6c2.leaveInput.paraVarPair"
                                :para="pvt_r6c2.leaveInput.para"
                                :attr="pvt_r6c2.leaveInput.attr">
                        </lm1a-date-picker>
                    </div>
                </div>
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row7">
                    <div v-show="pvt_win.isShow.r7c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r7c1:true,backMan_main_customerMan_modifyI_col_r7c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r7c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r7c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r7c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r7c1_checked:pvt_win.isChecked.r7c1,backMan_main_customerMan_modifyI_col_r7c1_disable:attr.disabled}"
                         :style="pvt_win.style.r7c1">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r7c2:true,backMan_main_customerMan_modifyI_col_r7c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r7c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r7c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r7c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r7c2_checked:pvt_win.isChecked.r7c2,backMan_main_customerMan_modifyI_col_r7c2_disable:attr.disabled}"
                         :style="pvt_win.style.r7c2">

                        <lm1a-select
                                ref="hotelSelect"
                                refId="hotelSelect"
                                v-show="pvt_isShow.r7c2 === 'hotelSelect'"
                                :paraVarPair="pvt_r7c2.hotelSelect.paraVarPair"
                                :para="pvt_r7c2.hotelSelect.para"
                                :attr="pvt_r7c2.hotelSelect.attr">
                        </lm1a-select>
                    </div>
                </div>
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row12">
                    <div v-show="pvt_win.isShow.r12c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r12c1:true,backMan_main_customerMan_modifyI_col_r12c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r12c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r12c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r12c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r12c1_checked:pvt_win.isChecked.r12c1,backMan_main_customerMan_modifyI_col_r12c1_disable:attr.disabled}"
                         :style="pvt_win.style.r12c1">

                        <lm1a-link-text
                                ref="diningLabel"
                                refId="diningLabel"
                                v-show="pvt_isShow.r12c1 === 'diningLabel'"
                                :paraVarPair="pvt_r12c1.diningLabel.paraVarPair"
                                :para="pvt_r12c1.diningLabel.para"
                                :attr="pvt_r12c1.diningLabel.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r12c2"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r12c2:true,backMan_main_customerMan_modifyI_col_r12c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r12c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r12c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r12c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r12c2_checked:pvt_win.isChecked.r12c2,backMan_main_customerMan_modifyI_col_r12c2_disable:attr.disabled}"
                         :style="pvt_win.style.r12c2">

                        <lm1a-select
                                ref="diningSelect"
                                refId="diningSelect"
                                v-show="pvt_isShow.r12c2 === 'diningSelect'"
                                :paraVarPair="pvt_r12c2.diningSelect.paraVarPair"
                                :para="pvt_r12c2.diningSelect.para"
                                :attr="pvt_r12c2.diningSelect.attr">
                        </lm1a-select>
                    </div>
                </div>
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row8">
                    <div v-show="pvt_win.isShow.r8c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r8c1:true,backMan_main_customerMan_modifyI_col_r8c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r8c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r8c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r8c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r8c1_checked:pvt_win.isChecked.r8c1,backMan_main_customerMan_modifyI_col_r8c1_disable:attr.disabled}"
                         :style="pvt_win.style.r8c1">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r8c2:true,backMan_main_customerMan_modifyI_col_r8c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r8c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r8c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r8c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r8c2_checked:pvt_win.isChecked.r8c2,backMan_main_customerMan_modifyI_col_r8c2_disable:attr.disabled}"
                         :style="pvt_win.style.r8c2">

                        <lm1a-select
                                ref="leaveSelect"
                                refId="leaveSelect"
                                v-show="pvt_isShow.r8c2 === 'leaveSelect'"
                                :paraVarPair="pvt_r8c2.leaveSelect.paraVarPair"
                                :para="pvt_r8c2.leaveSelect.para"
                                :attr="pvt_r8c2.leaveSelect.attr">
                        </lm1a-select>
                    </div>
                </div>
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row9">
                    <div v-show="pvt_win.isShow.r9c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r9c1:true,backMan_main_customerMan_modifyI_col_r9c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r9c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r9c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r9c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r9c1_checked:pvt_win.isChecked.r9c1,backMan_main_customerMan_modifyI_col_r9c1_disable:attr.disabled}"
                         :style="pvt_win.style.r9c1">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r9c2:true,backMan_main_customerMan_modifyI_col_r9c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r9c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r9c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r9c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r9c2_checked:pvt_win.isChecked.r9c2,backMan_main_customerMan_modifyI_col_r9c2_disable:attr.disabled}"
                         :style="pvt_win.style.r9c2">

                        <lm1a-input-text
                                ref="companionInput"
                                refId="companionInput"
                                v-show="pvt_isShow.r9c2 === 'companionInput'"
                                :paraVarPair="pvt_r9c2.companionInput.paraVarPair"
                                :para="pvt_r9c2.companionInput.para"
                                :attr="pvt_r9c2.companionInput.attr">
                        </lm1a-input-text>
                    </div>
                    <div v-show="pvt_win.isShow.r9c3"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r9c3:true,backMan_main_customerMan_modifyI_col_r9c3_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r9c3_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r9c3_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r9c3_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r9c3_checked:pvt_win.isChecked.r9c3,backMan_main_customerMan_modifyI_col_r9c3_disable:attr.disabled}"
                         :style="pvt_win.style.r9c3">

                        <lm1a-link-text
                                ref="companionTip"
                                refId="companionTip"
                                v-show="pvt_isShow.r9c3 === 'companionTip'"
                                :paraVarPair="pvt_r9c3.companionTip.paraVarPair"
                                :para="pvt_r9c3.companionTip.para"
                                :attr="pvt_r9c3.companionTip.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row10">
                    <div v-show="pvt_win.isShow.r10c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r10c1:true,backMan_main_customerMan_modifyI_col_r10c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r10c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r10c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r10c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r10c1_checked:pvt_win.isChecked.r10c1,backMan_main_customerMan_modifyI_col_r10c1_disable:attr.disabled}"
                         :style="pvt_win.style.r10c1">

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
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r10c2:true,backMan_main_customerMan_modifyI_col_r10c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r10c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r10c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r10c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r10c2_checked:pvt_win.isChecked.r10c2,backMan_main_customerMan_modifyI_col_r10c2_disable:attr.disabled}"
                         :style="pvt_win.style.r10c2">

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
                <div class="backMan_main_customerMan_modifyI_row backMan_main_customerMan_modifyI_row_row11">
                    <div v-show="pvt_win.isShow.r11c1"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r11c1:true,backMan_main_customerMan_modifyI_col_r11c1_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r11c1_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r11c1_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r11c1_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r11c1_checked:pvt_win.isChecked.r11c1,backMan_main_customerMan_modifyI_col_r11c1_disable:attr.disabled}"
                         :style="pvt_win.style.r11c1">

                        <lm1a-button
                                ref="btn1"
                                refId="btn1"
                                v-show="pvt_isShow.r11c1 === 'btn1'"
                                :paraVarPair="pvt_r11c1.btn1.paraVarPair"
                                :para="pvt_r11c1.btn1.para"
                                :attr="pvt_r11c1.btn1.attr">
                        </lm1a-button>
                    </div>
                    <div v-show="pvt_win.isShow.r11c2"
                         :class="{backMan_main_customerMan_modifyI_col:true,backMan_main_customerMan_modifyI_col_r11c2:true,backMan_main_customerMan_modifyI_col_r11c2_size_large:attr.size==='large',backMan_main_customerMan_modifyI_col_r11c2_size_medium:attr.size==='medium',backMan_main_customerMan_modifyI_col_r11c2_size_small:attr.size==='small',backMan_main_customerMan_modifyI_col_r11c2_size_min:attr.size==='min',backMan_main_customerMan_modifyI_col_r11c2_checked:pvt_win.isChecked.r11c2,backMan_main_customerMan_modifyI_col_r11c2_disable:attr.disabled}"
                         :style="pvt_win.style.r11c2">

                        <lm1a-button
                                ref="btn2"
                                refId="btn2"
                                v-show="pvt_isShow.r11c2 === 'btn2'"
                                :paraVarPair="pvt_r11c2.btn2.paraVarPair"
                                :para="pvt_r11c2.btn2.para"
                                :attr="pvt_r11c2.btn2.attr">
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
                    if (!val.size) val.size = 'medium';
                    return true;
                },
            },
            paraVarPair: Object,
            number: Number,
        },
        data: function () {
            return {
                mac: mac.mac,
                customerId: this.para.customerId,
                pvt_subModuleMap: {
                    vessel: ['r1c1', 'r1c2', 'r2c1', 'r2c2', 'r2c3', 'r2c4', 'r3c1', 'r4c1', 'r5c1', 'r6c1', 'r7c1', 'r8c1', 'r9c1', 'r10c1', 'r3c2', 'r3c3', 'r3c4', 'r4c2', 'r4c3', 'r5c2', 'r6c2', 'r7c2', 'r8c2', 'r9c2', 'r9c3', 'r10c2', 'r11c1', 'r11c2', 'r12c1', 'r12c2'],
                    subModule: ['title', 'closeIcon', 'nameLabel', 'requiredIcon1', 'nameInput', 'nameTip', 'mobileLabel', 'companyLabel', 'arriveLabel', 'leaveLabel', 'hotelLabel', 'typeLabel', 'companionLabel', 'remarkLabel', 'requiredIcon2', 'mobileInput', 'mobileTip', 'companyInput', 'companyTip', 'arriveSelect', 'leaveInput', 'hotelSelect', 'leaveSelect', 'companionInput', 'companionTip', 'remarkInput', 'btn1', 'btn2', 'diningLabel', 'diningSelect'],
                },
                pvt_isShow: {
                    r1c1: null,
                    r1c2: null,
                    r2c1: null,
                    r2c2: null,
                    r2c3: null,
                    r2c4: null,
                    r3c1: null,
                    r4c1: null,
                    r5c1: null,
                    r6c1: null,
                    r7c1: null,
                    r8c1: null,
                    r9c1: null,
                    r10c1: null,
                    r3c2: null,
                    r3c3: null,
                    r3c4: null,
                    r4c2: null,
                    r4c3: null,
                    r5c2: null,
                    r6c2: null,
                    r7c2: null,
                    r8c2: null,
                    r9c2: null,
                    r9c3: null,
                    r10c2: null,
                    r11c1: null,
                    r11c2: null,
                    r12c1: null,
                    r12c2: null,
                },
                pvt_win: {
                    isShow: {
                        backMan_main_customerMan_modifyI: true,
                        r1c1: true,
                        r1c2: true,
                        r2c0: true,
                        r2c1: true,
                        r2c2: true,
                        r2c3: true,
                        r2c4: true,
                        r3c1: true,
                        r3c2: true,
                        r3c3: true,
                        r3c4: true,
                        r4c1: true,
                        r4c2: true,
                        r4c3: true,
                        r5c1: true,
                        r5c2: true,
                        r6c1: true,
                        r6c2: true,
                        r7c1: true,
                        r7c2: true,
                        r8c1: true,
                        r8c2: true,
                        r9c1: true,
                        r9c2: true,
                        r9c3: true,
                        r10c1: true,
                        r10c2: true,
                        r11c1: true,
                        r11c2: true,
                        r12c1: true,
                        r12c2: true,
                    },
                    isChecked: {
                        backMan_main_customerMan_modifyI: false,
                        r1c1: false,
                        r1c2: false,
                        r2c0: false,
                        r2c1: false,
                        r2c2: false,
                        r2c3: false,
                        r2c4: false,
                        r3c1: false,
                        r3c2: false,
                        r3c3: false,
                        r3c4: false,
                        r4c1: false,
                        r4c2: false,
                        r4c3: false,
                        r5c1: false,
                        r5c2: false,
                        r6c1: false,
                        r6c2: false,
                        r7c1: false,
                        r7c2: false,
                        r8c1: false,
                        r8c2: false,
                        r9c1: false,
                        r9c2: false,
                        r9c3: false,
                        r10c1: false,
                        r10c2: false,
                        r11c1: false,
                        r11c2: false,
                        r12c1: false,
                        r12c2: false,
                    },
                    style: {
                        backMan_main_customerMan_modifyI: null,
                        r1c1: null,
                        r1c2: null,
                        r2c0: null,
                        r2c1: null,
                        r2c2: null,
                        r2c3: null,
                        r2c4: null,
                        r3c1: null,
                        r3c2: null,
                        r3c3: null,
                        r3c4: null,
                        r4c1: null,
                        r4c2: null,
                        r4c3: null,
                        r5c1: null,
                        r5c2: null,
                        r6c1: null,
                        r6c2: null,
                        r7c1: null,
                        r7c2: null,
                        r8c1: null,
                        r8c2: null,
                        r9c1: null,
                        r9c2: null,
                        r9c3: null,
                        r10c1: null,
                        r10c2: null,
                        r11c1: null,
                        r11c2: null,
                        r12c1: null,
                        r12c2: null,
                    },
                },
                pvt_eventPortInput: ['dataChangeEvent'],

                name: '',
                nameTip: '',
                mobile: '',
                mobileTip: '',
                company: '',
                companyTip: '',
                arriveTime: '',
                leaveTime: '',
                hotel: 0,
                hotelOptions: [],
                type: null,
                typeOptions: [],
                companion: '',
                companionTip: '',
                remark: '',
                dining: null,
                dinOptions: [],
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
                deep: true
            },
        },
        computed: {
            pvt_r1c1: function () {
                return {
                    title: {
                        paraVarPair: {},
                        para: {
                            textData: '客户信息',
                        },
                        attr: {
                            label: 'div',
                            fontWeight: true,
                            color: '#000',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_r1c2: function () {
                return {
                    closeIcon: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            isClick: true,
                            label: 'div',
                            fontWeight: true,
                            color: '#b4bac1',
                            fontSize: '20px',
                            icon: 'el-icon-close',
                        },
                    },
                };
            },
            pvt_r2c1: function () {
                return {
                    nameLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '姓名：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c2: function () {
                return {
                    requiredIcon1: {
                        paraVarPair: {},
                        para: {
                            textData: '*',
                        },
                        attr: {
                            label: 'div',
                            color: '#F56C6C',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c3: function () {
                return {
                    nameInput: {
                        paraVarPair: {
                            text: 'name',
                        },
                        para: {
                            text: this.name,
                        },
                        attr: {
                            placeholder: '请输入姓名',
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r2c4: function () {
                return {
                    nameTip: {
                        paraVarPair: {
                            textData: 'nameTip',
                        },
                        para: {
                            textData: this.nameTip,
                        },
                        attr: {
                            label: 'div',
                            color: '#F56C6C',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r3c1: function () {
                return {
                    mobileLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '手机号：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r4c1: function () {
                return {
                    companyLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '公司名称：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r5c1: function () {
                return {
                    arriveLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '预计到达时间：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r6c1: function () {
                return {
                    leaveLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '预计离开时间：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r7c1: function () {
                return {
                    hotelLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '是否留宿：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r8c1: function () {
                return {
                    typeLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '类别：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r9c1: function () {
                return {
                    companionLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '随行人数：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r10c1: function () {
                return {
                    remarkLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '备注：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r3c2: function () {
                return {
                    requiredIcon2: {
                        paraVarPair: {},
                        para: {
                            textData: '*',
                        },
                        attr: {
                            label: 'div',
                            color: '#F56C6C',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r3c3: function () {
                return {
                    mobileInput: {
                        paraVarPair: {
                            text: 'mobile',
                        },
                        para: {
                            text: this.mobile,
                        },
                        attr: {
                            placeholder: '请输入手机号',
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r3c4: function () {
                return {
                    mobileTip: {
                        paraVarPair: {
                            textData: 'mobileTip',
                        },
                        para: {
                            textData: this.mobileTip,
                        },
                        attr: {
                            label: 'div',
                            color: '#F56C6C',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r4c2: function () {
                return {
                    companyInput: {
                        paraVarPair: {
                            text: 'company',
                        },
                        para: {
                            text: this.company,
                        },
                        attr: {
                            placeholder: '请输入公司名称',
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r4c3: function () {
                return {
                    companyTip: {
                        paraVarPair: {
                            textData: 'companyTip',
                        },
                        para: {
                            textData: this.companyTip,
                        },
                        attr: {
                            label: 'div',
                            color: '#F56C6C',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r5c2: function () {
                return {
                    arriveSelect: {
                        paraVarPair: {
                            startDate: 'arriveTime',
                        },
                        para: {
                            startDate: this.arriveTime,
                        },
                        attr: {
                            type: 'datetime',
                            size: 'small',
                            placeholder: '请选择',
                            format: 'yyyy-MM-dd HH:mm',
                            valueFormat: 'yyyy-MM-dd HH:mm',
                        },
                    },
                };
            },
            pvt_r6c2: function () {
                return {
                    leaveInput: {
                        paraVarPair: {
                            startDate: 'leaveTime',
                        },
                        para: {
                            startDate: this.leaveTime,
                        },
                        attr: {
                            type: 'datetime',
                            size: 'small',
                            placeholder: '请选择',
                            format: 'yyyy-MM-dd HH:mm',
                            valueFormat: 'yyyy-MM-dd HH:mm',
                        },
                    },
                };
            },
            pvt_r7c2: function () {
                return {
                    hotelSelect: {
                        paraVarPair: {
                            value: 'hotel',
                            listSource: 'hotelOptions',
                        },
                        para: {
                            value: this.hotel,
                            listSource: this.hotelOptions,
                        },
                        attr: {
                            placeholder: '请选择',
                            size: 'small',
                            saveValue: true,
                        },
                    },
                };
            },
            pvt_r8c2: function () {
                return {
                    leaveSelect: {
                        paraVarPair: {
                            value: 'type',
                            listSource: 'typeOptions',
                        },
                        para: {
                            value: this.type,
                            listSource: this.typeOptions,
                        },
                        attr: {
                            placeholder: '请选择',
                            size: 'small',
                            saveValue: true,
                        },
                    },
                };
            },
            pvt_r9c2: function () {
                return {
                    companionInput: {
                        paraVarPair: {
                            text: 'companion',
                        },
                        para: {
                            text: this.companion,
                        },
                        attr: {
                            placeholder: '请输入',
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r9c3: function () {
                return {
                    companionTip: {
                        paraVarPair: {
                            textData: 'companionTip',
                        },
                        para: {
                            textData: this.companionTip,
                        },
                        attr: {
                            label: 'div',
                            color: '#F56C6C',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r10c2: function () {
                return {
                    remarkInput: {
                        paraVarPair: {
                            text: 'remark',
                        },
                        para: {
                            text: this.remark,
                        },
                        attr: {
                            placeholder: '请输入备注信息',
                            size: 'small',
                            type: 'textarea',
                            resize: 'none',
                            autosize: {minRows: 5, maxRows: 5},
                        },
                    },
                };
            },
            pvt_r11c1: function () {
                return {
                    btn1: {
                        paraVarPair: {},
                        para: {
                            name: ['保存'],
                        },
                        attr: {
                            type: 'primary',
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r11c2: function () {
                return {
                    btn2: {
                        paraVarPair: {},
                        para: {
                            name: ['保存并继续填写'],
                        },
                        attr: {
                            type: 'primary',
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r12c1: function () {
                return {
                    diningLabel: {
                        paraVarPair: {},
                        para: {
                            textData: '是否用餐：',
                        },
                        attr: {
                            label: 'div',
                            color: '#000',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r12c2: function () {
                return {
                    diningSelect: {
                        paraVarPair: {
                            value: 'dining',
                            listSource: 'dinOptions',
                        },
                        para: {
                            value: this.dining,
                            listSource: this.dinOptions,
                        },
                        attr: {
                            placeholder: '请选择',
                            size: 'small',
                            saveValue: true,
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
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                }
                let dbFlag;
                let tableVariable, dbData, parentRecord, condition, record;

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
                            $this.nameTip = '';
                            $this.mobile = '';
                            $this.mobileTip = '';
                            $this.company = '';
                            $this.companyTip = '';
                            $this.arriveTime = '';
                            $this.leaveTime = '';
                            $this.hotel = null;
                            $this.hotelOptions = [
                                {label: '不留宿', value: 0},
                                {label: '留宿', value: 1}
                            ];
                            $this.type = null;
                            $this.typeOptions = [
                                {label: '开发公司', value: 0},
                                {label: '投资机构', value: 1},
                                {label: '朋友', value: 2},
                                {label: '股东', value: 3},
                                {label: '其他', value: 4}
                            ];
                            $this.companion = '';
                            $this.companionTip = '';
                            $this.remark = '';
                            $this.dining = null;
                            $this.dinOptions = [
                                {label: '不用餐', value: 0},
                                {label: '用餐', value: 1}
                            ];
                            //记录是否新增
                            if ($this.customerId) {
                                $this.newCustomer = false;
                            } else {
                                $this.newCustomer = true;
                            }
                            $this.maxNumber = 0;
                            $this.maxNumber2 = 999;
                            para.nStep = 'getMaxNumber';
                            ++dbFlag;
                            break;
                        case 'getMaxNumber':
                            //查表获取最大的客户编号
                            tableVariable = [{
                                $table: $this.mac.tb.customer,
                                $arrField: [$this.mac.fd.customer.number],
                                $arrValue: null,
                                $arrSubTab: []
                            }];
                            condition = null;
                            $this.sys.api.recordQuery(tableVariable, condition, function () {
                                var idArr = tableVariable[0].$arrValue;
                                dbData = {};
                                tableVariable = null;
                                parentRecord = null;
                                record = {
                                    table: $this.mac.tb.customer,
                                    id: idArr,
                                    field: [
                                        $this.mac.fd.customer.number,
                                    ]
                                };
                                $this.sys.api.recordRead(tableVariable, parentRecord, record, dbData, function () {
                                    for (let i = 0; i < dbData[$this.mac.fd.customer.number].length; i++) {
                                        if (dbData[$this.mac.fd.customer.number][i] >= 100) {
                                            if (dbData[$this.mac.fd.customer.number][i] > $this.maxNumber2) {
                                                $this.maxNumber2 = dbData[$this.mac.fd.customer.number][i];
                                            }
                                        } else {
                                            if (dbData[$this.mac.fd.customer.number][i] > $this.maxNumber) {
                                                $this.maxNumber = dbData[$this.mac.fd.customer.number][i];
                                            }
                                        }
                                    }
                                    if ($this.newCustomer) {
                                        para.nStep = 'showModules';
                                    } else {
                                        para.nStep = 'getData';
                                    }
                                    if (++dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack);
                            }, para.errorCallBack);
                            break;
                        case 'getData':
                            //查表获取数据
                            dbData = {};
                            tableVariable = null;
                            parentRecord = null;
                            record = {
                                table: $this.mac.tb.customer,
                                id: [$this.customerId],
                                field: [
                                    $this.mac.fd.customer.name,
                                    $this.mac.fd.customer.mobile,
                                    $this.mac.fd.customer.company,
                                    $this.mac.fd.customer.companion,
                                    $this.mac.fd.customer.type,
                                    $this.mac.fd.customer.arrival,
                                    $this.mac.fd.customer.leave,
                                    $this.mac.fd.customer.hotel,
                                    $this.mac.fd.customer.dining,
                                    $this.mac.fd.customer.remark
                                ]
                            };
                            $this.sys.api.recordRead(tableVariable, parentRecord, record, dbData, function () {
                                $this.name = dbData[$this.mac.fd.customer.name][0];
                                if (dbData[$this.mac.fd.customer.mobile][0]) {
                                    $this.mobile = dbData[$this.mac.fd.customer.mobile][0];
                                }
                                if (dbData[$this.mac.fd.customer.company][0]) {
                                    $this.company = dbData[$this.mac.fd.customer.company][0];
                                }
                                if (dbData[$this.mac.fd.customer.companion][0]) {
                                    $this.companion = dbData[$this.mac.fd.customer.companion][0];
                                }
                                var type = dbData[$this.mac.fd.customer.type][0];
                                if (type === $this.mac.enum.customer.type.development_company) {
                                    $this.type = 0;
                                } else if (type === $this.mac.enum.customer.type.investment_agency) {
                                    $this.type = 1;
                                } else if (type === $this.mac.enum.customer.type.friend) {
                                    $this.type = 2;
                                } else if (type === $this.mac.enum.customer.type.shareholder) {
                                    $this.type = 3;
                                } else if (type === $this.mac.enum.customer.type.other) {
                                    $this.type = 4;
                                }
                                if (dbData[$this.mac.fd.customer.arrival][0]) {
                                    $this.arriveTime = dbData[$this.mac.fd.customer.arrival][0];
                                }
                                if (dbData[$this.mac.fd.customer.leave][0]) {
                                    $this.leaveTime = dbData[$this.mac.fd.customer.leave][0];
                                }
                                var hotel = dbData[$this.mac.fd.customer.hotel][0];
                                if (hotel === $this.mac.enum.customer.hotel.no) {
                                    $this.hotel = 0;
                                } else if (type === $this.mac.enum.customer.hotel.yes) {
                                    $this.hotel = 1;
                                }
                                var dining = dbData[$this.mac.fd.customer.dining][0];
                                if (dining === $this.mac.enum.customer.dining.no) {
                                    $this.dining = 0;
                                } else if (type === $this.mac.enum.customer.dining.yes) {
                                    $this.dining = 1;
                                }
                                if (dbData[$this.mac.fd.customer.remark][0]) {
                                    $this.remark = dbData[$this.mac.fd.customer.remark][0];
                                }
                                para.nStep = 'showModules';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ['nameTip', 'mobileTip', 'companyTip', 'companionTip'];
                            $this.showSubModule(refId, false, function () {
                                refId = [
                                    'title', 'closeIcon',
                                    'nameLabel', 'requiredIcon1', 'nameInput',
                                    'mobileLabel', 'requiredIcon2', 'mobileInput',
                                    'companyLabel', 'companyInput',
                                    'arriveLabel', 'arriveSelect',
                                    'leaveLabel', 'leaveInput',
                                    'hotelLabel', 'hotelSelect',
                                    'diningLabel', 'diningSelect',
                                    'typeLabel', 'leaveSelect',
                                    'companionLabel', 'companionInput',
                                    'remarkLabel', 'remarkInput',
                                    'btn1', 'btn2'
                                ];
                                $this.showSubModule(refId, true, function () {
                                    para.nStep = 'forceUpdateData';
                                    if (++dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack);
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
                                para.nStep = 'startModule_nameInput';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_nameInput':
                            $this.sm['nameInput'].startModule(function () {
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
                                para.nStep = 'startModule_mobileInput';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_mobileInput':
                            $this.sm['mobileInput'].startModule(function () {
                                para.nStep = 'startModule_companyLabel';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_companyLabel':
                            $this.sm['companyLabel'].startModule(function () {
                                para.nStep = 'startModule_companyInput';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_companyInput':
                            $this.sm['companyInput'].startModule(function () {
                                para.nStep = 'startModule_arriveLabel';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_arriveLabel':
                            $this.sm['arriveLabel'].startModule(function () {
                                para.nStep = 'startModule_arriveSelect';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_arriveSelect':
                            $this.sm['arriveSelect'].startModule(function () {
                                para.nStep = 'startModule_leaveLabel';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_leaveLabel':
                            $this.sm['leaveLabel'].startModule(function () {
                                para.nStep = 'startModule_leaveInput';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_leaveInput':
                            $this.sm['leaveInput'].startModule(function () {
                                para.nStep = 'startModule_hotelLabel';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_hotelLabel':
                            $this.sm['hotelLabel'].startModule(function () {
                                para.nStep = 'startModule_hotelSelect';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_hotelSelect':
                            $this.sm['hotelSelect'].startModule(function () {
                                para.nStep = 'startModule_diningLabel';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_diningLabel':
                            $this.sm['diningLabel'].startModule(function () {
                                para.nStep = 'startModule_diningSelect';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_diningSelect':
                            $this.sm['diningSelect'].startModule(function () {
                                para.nStep = 'startModule_typeLabel';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_typeLabel':
                            $this.sm['typeLabel'].startModule(function () {
                                para.nStep = 'startModule_leaveSelect';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_leaveSelect':
                            $this.sm['leaveSelect'].startModule(function () {
                                para.nStep = 'startModule_companionLabel';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_companionLabel':
                            $this.sm['companionLabel'].startModule(function () {
                                para.nStep = 'startModule_companionInput';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_companionInput':
                            $this.sm['companionInput'].startModule(function () {
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
                                para.nStep = 'startModule_btn1';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_btn1':
                            $this.sm['btn1'].startModule(function () {
                                para.nStep = 'startModule_btn2';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_btn2':
                            $this.sm['btn2'].startModule(function () {
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
            closeDialog: function () {
                let $this = this;
                $this.hideSelfModule($this.refId, function () {
                }, function (error) {
                    console.log(error)
                });
            },
            nameChange: function (value) {
                let $this = this;
                //检查是否有错
                value = value.replace(/^\s+|\s+$/g, '');
                $this.name = value;
                $this.nameTip = '';
                if ($this.name.length === 0) {
                    $this.nameTip = '姓名不能为空';
                }
                $this.showSubModule('nameTip', true, function () {
                    $this.forceUpdateData(function () {
                        $this.sm['nameTip'].startModule(function () {
                        }, function (error) {
                            console.log(error)
                        });
                    });
                }, function (error) {
                    console.log(error)
                });
            },
            phoneChange: function (value) {
                let $this = this;
                value = value.replace(/^\s+|\s+$/g, '');
                $this.mobile = value;
                $this.phoneChange_(function () {
                }, function (error) {
                    console.log(error)
                });
            },
            phoneChange_: function (successCallBack, errorCallBack) {
                let $this = this;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                }
                let dbFlag;
                let tableVariable, condition;

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            //判断是否出错
                            $this.mobileTip = '';
                            if ($this.newCustomer && $this.mobile.length === 0) {
                                para.nStep = 'refreshTip';
                            } else {
                                if ($this.mobile.length === 0) {
                                    if (!$this.newCustomer) {
                                        $this.mobileTip = '号码不能为空';
                                    }
                                } else {
                                    //11位
                                    var reg = /^1[3456789]\d{9}$/;
                                    if (!reg.test($this.mobile)) {
                                        $this.mobileTip = '号码格式有误';
                                    }
                                }
                                if ($this.mobileTip) {
                                    para.nStep = 'refreshTip';
                                } else {
                                    para.nStep = 'checkData';
                                }
                            }
                            ++dbFlag;
                            break;
                        case 'checkData':
                            //检查电话是否和之前的用户重复
                            tableVariable = [{
                                $table: $this.mac.tb.customer,
                                $arrField: null,
                                $arrValue: null,
                                $arrSubTab: []
                            }];
                            condition = {};
                            condition[$this.mac.tb.customer] = $this.mac.fd.customer.mobile + '="' + $this.mobile + '"';
                            $this.sys.api.recordQuery(tableVariable, condition, function () {
                                var idArr = tableVariable[0].$arrValue;
                                if (idArr.length !== 0 && idArr[0] !== $this.customerId) {
                                    $this.mobileTip = '号码已存在';
                                }
                                para.nStep = 'refreshTip';
                                if (++dbFlag === 2) {
                                    $this.phoneChange_(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack)
                            break;
                        case 'refreshTip':
                            $this.showSubModule('mobileTip', true, function () {
                                $this.forceUpdateData(function () {
                                    $this.sm['mobileTip'].startModule(function () {
                                        para.nStep = 'end';
                                        if (++dbFlag === 2) {
                                            $this.phoneChange_(successCallBack, errorCallBack);
                                        }
                                    }, function (error) {
                                        console.log(error)
                                    });
                                });
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
            comNameChange: function (value) {
                let $this = this;
                //检查是否有错
                value = value.replace(/^\s+|\s+$/g, '');
                $this.company = value;
            },
            arrivalTimeChange: function (value) {
                this.arriveTime = value;
            },
            departureTimeChange: function (value) {
                this.leaveTime = value;
            },
            putUpChange: function (id, name) {
                this.hotel = id;
            },
            typeChange: function (id, name) {
                this.type = id;
            },
            followNumberChange: function (value) {
                let $this = this;
                //检查是否有错
                value = value.replace(/^\s+|\s+$/g, '');
                $this.companion = value;
                $this.companionTip = '';
                if ($this.companion.length !== 0) {
                    //数字
                    var reg = /^\d*$/;
                    if (!reg.test($this.mobile)) {
                        $this.companionTip = '只能是数字';
                    }
                }
                $this.showSubModule('companionTip', true, function () {
                    $this.forceUpdateData(function () {
                        $this.sm['companionTip'].startModule(function () {
                        }, function (error) {
                            console.log(error)
                        });
                    });
                }, function (error) {
                    console.log(error)
                });
            },
            remarkChange: function (value) {
                value = value.replace(/^\s+|\s+$/g, '');
                this.remark = value;
            },
            saveData: function () {
                this.saveData_(0, function () {
                }, function (error) {
                    console.log(error)
                });
            },
            saveData_: function (type, successCallBack, errorCallBack) {
                let $this = this;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                }
                let dbFlag;
                let tableVariable, objectName, dbData, parentRecord, record;

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            //判断是否出错
                            if ($this.name.length === 0) {
                                $this.nameTip = '姓名不能为空';
                                $this.showSubModule('nameTip', true, function () {
                                    $this.forceUpdateData(function () {
                                        $this.sm['nameTip'].startModule(function () {
                                        }, function (error) {
                                            console.log(error)
                                        });
                                    });
                                }, function (error) {
                                    console.log(error)
                                });
                            }
                            //新增可以电话为空，电话为空则是临时贵宾
                            if ($this.nameTip || $this.mobileTip || $this.companionTip) {
                                para.nStep = 'end';
                            } else {
                                if ($this.newCustomer) {
                                    para.nStep = 'addNew';
                                } else {
                                    para.nStep = 'modifyData';
                                }
                            }
                            ++dbFlag;
                            break;
                        case 'addNew':
                            //查表获取数据
                            tableVariable = null;
                            parentRecord = null;
                            objectName = $this.mac.tb.customer;
                            dbData = {};
                            dbData[$this.mac.fd.customer.name] = [$this.name];
                            var mobileValue = null;
                            if ($this.mobile) {
                                mobileValue = $this.mobile;
                            }
                            dbData[$this.mac.fd.customer.mobile] = [mobileValue];
                            dbData[$this.mac.fd.customer.company] = [$this.company];
                            var companionValue = null;
                            if ($this.companion || $this.companion === 0) {
                                companionValue = Number($this.companion);
                            }
                            dbData[$this.mac.fd.customer.companion] = [companionValue];
                            var typeValue = null;
                            if ($this.type === 0) {
                                typeValue = $this.mac.enum.customer.type.development_company;
                            } else if ($this.type === 1) {
                                typeValue = $this.mac.enum.customer.type.investment_agency;
                            } else if ($this.type === 2) {
                                typeValue = $this.mac.enum.customer.type.friend;
                            } else if ($this.type === 3) {
                                typeValue = $this.mac.enum.customer.type.shareholder;
                            } else if ($this.type === 4) {
                                typeValue = $this.mac.enum.customer.type.other;
                            }
                            dbData[$this.mac.fd.customer.type] = [typeValue];
                            dbData[$this.mac.fd.customer.arrival] = [$this.arriveTime];
                            dbData[$this.mac.fd.customer.leave] = [$this.leaveTime];
                            var hotelValue = null;
                            if ($this.type === 0) {
                                hotelValue = $this.mac.enum.customer.hotel.no;
                            } else if ($this.type === 1) {
                                hotelValue = $this.mac.enum.customer.hotel.yes;
                            }
                            dbData[$this.mac.fd.customer.hotel] = [hotelValue];
                            var dinValue = null;
                            if ($this.dining === 0) {
                                dinValue = $this.mac.enum.customer.dining.no;
                            } else if ($this.dining === 1) {
                                dinValue = $this.mac.enum.customer.dining.yes;
                            }
                            dbData[$this.mac.fd.customer.dining] = [dinValue];
                            dbData[$this.mac.fd.customer.remark] = [$this.remark];
                            //客户编号如何生成
                            if ($this.mobile) {
                                $this.maxNumber = $this.maxNumber + 1;
                                dbData[$this.mac.fd.customer.number] = [$this.maxNumber];
                            } else {
                                $this.maxNumber2 = $this.maxNumber2 + 1;
                                dbData[$this.mac.fd.customer.number] = [$this.maxNumber2];
                            }
                            //状态新增默认未待审核
                            dbData[$this.mac.fd.customer.status] = [$this.mac.enum.customer.status.pending];
                            dbData[$this.mac.fd.customer.sms_num] = [0];
                            $this.sys.api.recordNew(tableVariable, parentRecord, objectName, dbData, function (result) {
                                para.customerId = result.record[0][0];
                                para.nStep = 'checkType';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'modifyData':
                            //查表获取数据
                            tableVariable = null;
                            parentRecord = null;
                            record = {
                                table: $this.mac.tb.customer,
                                id: [$this.customerId]
                            }
                            dbData = {};
                            dbData[$this.mac.fd.customer.name] = [$this.name];
                            dbData[$this.mac.fd.customer.mobile] = [$this.mobile];
                            dbData[$this.mac.fd.customer.company] = [$this.company];
                            dbData[$this.mac.fd.customer.companion] = [Number($this.companion)];
                            var typeValue = null;
                            if ($this.type === 0) {
                                typeValue = $this.mac.enum.customer.type.development_company;
                            } else if ($this.type === 1) {
                                typeValue = $this.mac.enum.customer.type.investment_agency;
                            } else if ($this.type === 2) {
                                typeValue = $this.mac.enum.customer.type.friend;
                            } else if ($this.type === 3) {
                                typeValue = $this.mac.enum.customer.type.shareholder;
                            } else if ($this.type === 4) {
                                typeValue = $this.mac.enum.customer.type.other;
                            }
                            dbData[$this.mac.fd.customer.type] = [typeValue];
                            dbData[$this.mac.fd.customer.arrival] = [$this.arriveTime];
                            dbData[$this.mac.fd.customer.leave] = [$this.leaveTime];
                            var hotelValue = null;
                            if ($this.hotel === 0) {
                                hotelValue = $this.mac.enum.customer.hotel.no;
                            } else if ($this.hotel === 1) {
                                hotelValue = $this.mac.enum.customer.hotel.yes;
                            }
                            dbData[$this.mac.fd.customer.hotel] = [hotelValue];
                            var dinValue = null;
                            if ($this.dining === 0) {
                                dinValue = $this.mac.enum.customer.dining.no;
                            } else if ($this.dining === 1) {
                                dinValue = $this.mac.enum.customer.dining.yes;
                            }
                            dbData[$this.mac.fd.customer.dining] = [dinValue];
                            dbData[$this.mac.fd.customer.remark] = [$this.remark];
                            $this.sys.api.recordModify(tableVariable, parentRecord, record, dbData, function () {
                                para.customerId = $this.customerId;
                                para.nStep = 'checkType';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkType':
                            //发事件
                            $this.ep.dataChangeEvent(para.customerId);
                            //上传数据
                            tableVariable = [{
                                $table: $this.mac.tb.customer,
                                $arrField: null,
                                $arrValue: [para.customerId],
                                $arrSubTab: []
                            }];
                            $this.sys.api.dataOutput(tableVariable, null, function () {
                                console.log('上传成功');
                            }, function (error) {
                                console.log(error)
                            });
                            //为0则保存后退出，为1则则保存后清空数据刷新显示继续新增
                            if (type === 0) {
                                para.nStep = 'closeDialog';
                            } else {
                                para.nStep = 'cleanData';
                            }
                            ++dbFlag;
                            break;
                        case 'closeDialog':
                            $this.hideSelfModule($this.refId, function () {
                            }, function (error) {
                                console.log(error)
                            });
                            para.nStep = 'end';
                            ++dbFlag;
                            break;
                        case 'cleanData':
                            $this.customerId = null;
                            // 初始化数据
                            $this.name = '';
                            $this.nameTip = '';
                            $this.mobile = '';
                            $this.mobileTip = '';
                            $this.company = '';
                            $this.arriveTime = '';
                            $this.leaveTime = '';
                            $this.hotel = null;
                            $this.type = null;
                            $this.companion = '';
                            $this.companionTip = '';
                            $this.remark = '';
                            $this.dining = null;
                            $this.newCustomer = true;
                            para.nStep = 'showModules';
                            ++dbFlag;
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ['nameTip', 'mobileTip', 'companyTip', 'companionTip'];
                            $this.showSubModule(refId, false, function () {
                                para.nStep = 'forceUpdateData';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'forceUpdateData':
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule_nameInput';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case 'startModule_nameInput':
                            $this.sm['nameInput'].startModule(function () {
                                para.nStep = 'startModule_mobileInput';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_mobileInput':
                            $this.sm['mobileInput'].startModule(function () {
                                para.nStep = 'startModule_companyInput';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_companyInput':
                            $this.sm['companyInput'].startModule(function () {
                                para.nStep = 'startModule_arriveSelect';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_arriveSelect':
                            $this.sm['arriveSelect'].startModule(function () {
                                para.nStep = 'startModule_leaveInput';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_leaveInput':
                            $this.sm['leaveInput'].startModule(function () {
                                para.nStep = 'startModule_hotelSelect';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_hotelSelect':
                            $this.sm['hotelSelect'].startModule(function () {
                                para.nStep = 'startModule_diningSelect';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_diningSelect':
                            $this.sm['diningSelect'].startModule(function () {
                                para.nStep = 'startModule_leaveSelect';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_leaveSelect':
                            $this.sm['leaveSelect'].startModule(function () {
                                para.nStep = 'startModule_companionInput';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_companionInput':
                            $this.sm['companionInput'].startModule(function () {
                                para.nStep = 'startModule_remarkInput';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_remarkInput':
                            $this.sm['remarkInput'].startModule(function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.saveData_(type, successCallBack, errorCallBack);
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
            saveAndClear: function () {
                this.saveData_(1, function () {
                }, function (error) {
                    console.log(error)
                });
            },
            diningChange: function (id, name) {
                this.dining = id;
            },
            closeIcon_textClickEvent: function () {
                this.closeDialog();
            },
            nameInput_dataModifyEvent: function (value) {
                this.nameChange(value);
            },
            mobileInput_dataModifyEvent: function (value) {
                this.phoneChange(value);
            },
            companyInput_dataModifyEvent: function (value) {
                this.comNameChange(value);
            },
            arriveSelect_dataModifyEvent: function (value) {
                this.arrivalTimeChange(value);
            },
            leaveInput_dataModifyEvent: function (value) {
                this.departureTimeChange(value);
            },
            hotelSelect_dataModifyEvent: function (id, name) {
                this.putUpChange(id, name);
            },
            leaveSelect_dataModifyEvent: function (id, name) {
                this.typeChange(id, name);
            },
            companionInput_dataModifyEvent: function (value) {
                this.followNumberChange(value);
            },
            remarkInput_dataModifyEvent: function (value) {
                this.remarkChange(value);
            },
            btn1_buttonClickEvent: function () {
                this.saveData();
            },
            btn2_buttonClickEvent: function () {
                this.saveAndClear();
            },
            diningSelect_dataModifyEvent: function (id, name) {
                this.diningChange(id, name);
            },
        },
    };
</script>
<style>
    .lm-date-picker .el-date-editor .el-input__inner, .lm-date-picker .el-date-editor.el-input {
        width: 100% !important;
    }

    .lm-select .el-select {
        width: 100% !important;
    }
</style>
<style lang="scss" scoped>
    .backMan_main_customerMan_modifyI_container {
        width: 100%;
        height: 100%;
    }

    .backMan_main_customerMan_modifyI_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .backMan_main_customerMan_modifyI_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_customerMan_modifyI_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_customerMan_modifyI_row {
        display: flex;
    }

    .backMan_main_customerMan_modifyI_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .backMan_main_customerMan_modifyI_col_backMan_main_customerMan_modifyI_size_medium {
        width: $backMan_main_customerMan_modifyI-backMan_main_customerMan_modifyI-medium-width;
        height: $backMan_main_customerMan_modifyI-backMan_main_customerMan_modifyI-medium-height;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r1c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r1c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r1c1-medium-height;
        padding: $backMan_main_customerMan_modifyI-r1c1-medium-padding;
        justify-content: $backMan_main_customerMan_modifyI-r1c1-medium-vertical-position;
        line-height: $backMan_main_customerMan_modifyI-r1c1-medium-line-height;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r1c1 {
        border-style: $backMan_main_customerMan_modifyI-r1c1-border-style;
        border-width: $backMan_main_customerMan_modifyI-r1c1-border-width;
        border-color: mix($backMan_main_customerMan_modifyI-r1c1-border-color, #fff, $backMan_main_customerMan_modifyI-r1c1-hover-border-color-opacity);
    }

    .backMan_main_customerMan_modifyI_col_r1c2_size_medium {
        width: $backMan_main_customerMan_modifyI-r1c2-medium-width;
        height: $backMan_main_customerMan_modifyI-r1c2-medium-height;
        align-items: $backMan_main_customerMan_modifyI-r1c2-medium-horizontal-position;
        justify-content: $backMan_main_customerMan_modifyI-r1c2-medium-vertical-position;
        flex-grow: 1;
        padding: 0 5px 0 0;
        box-sizing: border-box;
        line-height: 30px;
    }

    .backMan_main_customerMan_modifyI_col_r1c2 {
        border-color: mix($backMan_main_customerMan_modifyI-r1c2-border-color, #fff, $backMan_main_customerMan_modifyI-r1c2-hover-border-color-opacity);
        border-style: $backMan_main_customerMan_modifyI-r1c2-border-style;
        border-width: $backMan_main_customerMan_modifyI-r1c2-border-width;
    }

    .backMan_main_customerMan_modifyI_row_row1 {
        height: calc(100% - 40px);
    }

    .backMan_main_customerMan_modifyI_col_r2c0_size_medium {
        width: $backMan_main_customerMan_modifyI-r2c0-medium-width;
        padding: $backMan_main_customerMan_modifyI-r2c0-medium-padding;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }

    .backMan_main_customerMan_modifyI_col_r2c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r2c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r2c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r2c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r2c1-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r2c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r2c2_size_medium {
        width: $backMan_main_customerMan_modifyI-r2c2-medium-width;
        height: $backMan_main_customerMan_modifyI-r2c2-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r2c2-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r2c2-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r2c2-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r2c3_size_medium {
        height: $backMan_main_customerMan_modifyI-r2c3-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r2c3-medium-vertical-position;
        width: 250px;
    }

    .backMan_main_customerMan_modifyI_col_r2c4_size_medium {
        width: $backMan_main_customerMan_modifyI-r2c4-medium-width;
        height: $backMan_main_customerMan_modifyI-r2c4-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r2c4-medium-vertical-position;
        line-height: $backMan_main_customerMan_modifyI-r2c4-medium-line-height;
        padding: 0 0 0 5px;
        box-sizing: border-box;
        flex-grow: 1;
    }

    .backMan_main_customerMan_modifyI_col_r3c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r3c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r3c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r3c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r3c1-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r3c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r3c2_size_medium {
        width: $backMan_main_customerMan_modifyI-r3c2-medium-width;
        height: $backMan_main_customerMan_modifyI-r3c2-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r3c2-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r3c2-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r3c2-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r3c3_size_medium {
        height: $backMan_main_customerMan_modifyI-r3c3-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r3c3-medium-vertical-position;
        width: 250px;
    }

    .backMan_main_customerMan_modifyI_col_r3c4_size_medium {
        width: $backMan_main_customerMan_modifyI-r3c4-medium-width;
        height: $backMan_main_customerMan_modifyI-r3c4-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r3c4-medium-vertical-position;
        line-height: $backMan_main_customerMan_modifyI-r3c4-medium-line-height;
        padding: 0 0 0 5px;
        box-sizing: border-box;
        flex-grow: 1;
    }

    .backMan_main_customerMan_modifyI_col_r4c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r4c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r4c1-medium-height;
        align-items: $backMan_main_customerMan_modifyI-r4c1-medium-horizontal-position;
        justify-content: $backMan_main_customerMan_modifyI-r4c1-medium-vertical-position;
        line-height: $backMan_main_customerMan_modifyI-r4c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r4c2_size_medium {
        height: $backMan_main_customerMan_modifyI-r4c2-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r4c2-medium-vertical-position;
        padding: $backMan_main_customerMan_modifyI-r4c2-medium-padding;
        width: 270px;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r4c3_size_medium {
        width: $backMan_main_customerMan_modifyI-r4c3-medium-width;
        height: $backMan_main_customerMan_modifyI-r4c3-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r4c3-medium-vertical-position;
        line-height: $backMan_main_customerMan_modifyI-r4c3-medium-line-height;
        padding: 0 0 0 5px;
        box-sizing: border-box;
        flex-grow: 1;
    }

    .backMan_main_customerMan_modifyI_col_r5c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r5c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r5c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r5c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r5c1-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r5c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r5c2_size_medium {
        justify-content: $backMan_main_customerMan_modifyI-r5c2-medium-vertical-position;
        height: $backMan_main_customerMan_modifyI-r5c2-medium-height;
        padding: $backMan_main_customerMan_modifyI-r5c2-medium-padding;
        width: 270px;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r6c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r6c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r6c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r6c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r6c1-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r6c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r6c2_size_medium {
        justify-content: $backMan_main_customerMan_modifyI-r6c2-medium-vertical-position;
        height: $backMan_main_customerMan_modifyI-r6c2-medium-height;
        padding: $backMan_main_customerMan_modifyI-r6c2-medium-padding;
        width: 270px;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r7c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r7c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r7c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r7c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r7c1-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r7c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r7c2_size_medium {
        justify-content: $backMan_main_customerMan_modifyI-r7c2-medium-vertical-position;
        height: $backMan_main_customerMan_modifyI-r7c2-medium-height;
        padding: $backMan_main_customerMan_modifyI-r7c2-medium-padding;
        width: 270px;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r8c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r8c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r8c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r8c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r8c1-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r8c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r8c2_size_medium {
        justify-content: $backMan_main_customerMan_modifyI-r8c2-medium-vertical-position;
        height: $backMan_main_customerMan_modifyI-r8c2-medium-height;
        padding: $backMan_main_customerMan_modifyI-r8c2-medium-padding;
        width: 270px;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r9c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r9c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r9c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r9c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r9c1-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r9c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r9c2_size_medium {
        justify-content: $backMan_main_customerMan_modifyI-r9c2-medium-vertical-position;
        height: $backMan_main_customerMan_modifyI-r9c2-medium-height;
        padding: $backMan_main_customerMan_modifyI-r9c2-medium-padding;
        width: 270px;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r9c3_size_medium {
        width: $backMan_main_customerMan_modifyI-r9c3-medium-width;
        height: $backMan_main_customerMan_modifyI-r9c3-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r9c3-medium-vertical-position;
        line-height: $backMan_main_customerMan_modifyI-r9c3-medium-line-height;
        padding: 0 0 0 5px;
        box-sizing: border-box;
        flex-grow: 1;
    }

    .backMan_main_customerMan_modifyI_col_r10c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r10c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r10c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r10c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r10c1-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r10c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r10c2_size_medium {
        padding: 0 0 0 20px;
        width: 270px;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r11c1_size_medium {
        height: $backMan_main_customerMan_modifyI-r11c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r11c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r11c1-medium-horizontal-position;
        padding: 0 0 0 120px;
        width: 200px;
        box-sizing: border-box;
    }

    .backMan_main_customerMan_modifyI_col_r11c2_size_medium {
        height: $backMan_main_customerMan_modifyI-r11c2-medium-height;
        align-items: $backMan_main_customerMan_modifyI-r11c2-medium-horizontal-position;
        justify-content: $backMan_main_customerMan_modifyI-r11c2-medium-vertical-position;
        width: 170px;
    }

    .backMan_main_customerMan_modifyI_col_r12c1_size_medium {
        width: $backMan_main_customerMan_modifyI-r12c1-medium-width;
        height: $backMan_main_customerMan_modifyI-r12c1-medium-height;
        justify-content: $backMan_main_customerMan_modifyI-r12c1-medium-vertical-position;
        align-items: $backMan_main_customerMan_modifyI-r12c1-medium-horizontal-position;
        line-height: $backMan_main_customerMan_modifyI-r12c1-medium-line-height;
    }

    .backMan_main_customerMan_modifyI_col_r12c2_size_medium {
        justify-content: $backMan_main_customerMan_modifyI-r12c2-medium-vertical-position;
        height: $backMan_main_customerMan_modifyI-r12c2-medium-height;
        padding: $backMan_main_customerMan_modifyI-r12c2-medium-padding;
        width: 270px;
        box-sizing: border-box;
    }
</style>
