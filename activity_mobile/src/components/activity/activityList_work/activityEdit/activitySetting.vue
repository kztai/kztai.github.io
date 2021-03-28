<template>
  <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_mcbActivitySettingWindow:true,mcbActivitySetting_col_mcbActivitySettingWindow_size_large:attr.size==='large',mcbActivitySetting_col_mcbActivitySettingWindow_size_medium:attr.size==='medium',mcbActivitySetting_col_mcbActivitySettingWindow_size_small:attr.size==='small',mcbActivitySetting_col_mcbActivitySettingWindow_size_min:attr.size==='min',mcbActivitySetting_col_mcbActivitySettingWindow_checked:attr.checked,mcbActivitySetting_col_mcbActivitySettingWindow_disable:attr.disabled}">

    <div class="mcbActivitySetting_row mcbActivitySetting_row_row1">
      <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r1c1:true,mcbActivitySetting_col_r1c1_size_large:attr.size==='large',mcbActivitySetting_col_r1c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r1c1_size_small:attr.size==='small',mcbActivitySetting_col_r1c1_size_min:attr.size==='min',mcbActivitySetting_col_r1c1_checked:attr.checked,mcbActivitySetting_col_r1c1_disable:attr.disabled}">

        <lm2b-link-text
                ref="activitySetTitle"
                refId="activitySetTitle"
                v-show="pvt_isShow.r1c1 === 'activitySetTitle'"
                :paraVarPair="pvt_r1c1.activitySetTitle.paraVarPair"
                :para="pvt_r1c1.activitySetTitle.para"
                :attr="pvt_r1c1.activitySetTitle.attr">
        </lm2b-link-text>
      </div>
    </div>
    <div class="mcbActivitySetting_row mcbActivitySetting_row_row2">
      <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2c1:true,mcbActivitySetting_col_r2c1_size_large:attr.size==='large',mcbActivitySetting_col_r2c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r2c1_size_small:attr.size==='small',mcbActivitySetting_col_r2c1_size_min:attr.size==='min',mcbActivitySetting_col_r2c1_checked:attr.checked,mcbActivitySetting_col_r2c1_disable:attr.disabled}">

        <div class="mcbActivitySetting_row mcbActivitySetting_row_row3">
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_1c1:true,mcbActivitySetting_col_r2_1c1_size_large:attr.size==='large',mcbActivitySetting_col_r2_1c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_1c1_size_small:attr.size==='small',mcbActivitySetting_col_r2_1c1_size_min:attr.size==='min',mcbActivitySetting_col_r2_1c1_checked:attr.checked,mcbActivitySetting_col_r2_1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="showEnrollLabel"
                    refId="showEnrollLabel"
                    v-show="pvt_isShow.r2_1c1 === 'showEnrollLabel'"
                    :paraVarPair="pvt_r2_1c1.showEnrollLabel.paraVarPair"
                    :para="pvt_r2_1c1.showEnrollLabel.para"
                    :attr="pvt_r2_1c1.showEnrollLabel.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbActivitySetting_row mcbActivitySetting_row_row4">
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_2c1:true,mcbActivitySetting_col_r2_2c1_size_large:attr.size==='large',mcbActivitySetting_col_r2_2c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_2c1_size_small:attr.size==='small',mcbActivitySetting_col_r2_2c1_size_min:attr.size==='min',mcbActivitySetting_col_r2_2c1_checked:attr.checked,mcbActivitySetting_col_r2_2c1_disable:attr.disabled}">

            <lm2b-radio
                    ref="showEnrollRadio"
                    refId="showEnrollRadio"
                    v-show="pvt_isShow.r2_2c1 === 'showEnrollRadio'"
                    :paraVarPair="pvt_r2_2c1.showEnrollRadio.paraVarPair"
                    :para="pvt_r2_2c1.showEnrollRadio.para"
                    :attr="pvt_r2_2c1.showEnrollRadio.attr">
            </lm2b-radio>
          </div>
        </div>
        <div class="mcbActivitySetting_row mcbActivitySetting_row_row5">
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_3c1:true,mcbActivitySetting_col_r2_3c1_size_large:attr.size==='large',mcbActivitySetting_col_r2_3c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_3c1_size_small:attr.size==='small',mcbActivitySetting_col_r2_3c1_size_min:attr.size==='min',mcbActivitySetting_col_r2_3c1_checked:attr.checked,mcbActivitySetting_col_r2_3c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="ticketTpyeLabel"
                    refId="ticketTpyeLabel"
                    v-show="pvt_isShow.r2_3c1 === 'ticketTpyeLabel'"
                    :paraVarPair="pvt_r2_3c1.ticketTpyeLabel.paraVarPair"
                    :para="pvt_r2_3c1.ticketTpyeLabel.para"
                    :attr="pvt_r2_3c1.ticketTpyeLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_3c2:true,mcbActivitySetting_col_r2_3c2_size_large:attr.size==='large',mcbActivitySetting_col_r2_3c2_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_3c2_size_small:attr.size==='small',mcbActivitySetting_col_r2_3c2_size_min:attr.size==='min',mcbActivitySetting_col_r2_3c2_checked:attr.checked,mcbActivitySetting_col_r2_3c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText1"
                    refId="iconText1"
                    v-show="pvt_isShow.r2_3c2 === 'iconText1'"
                    :paraVarPair="pvt_r2_3c2.iconText1.paraVarPair"
                    :para="pvt_r2_3c2.iconText1.para"
                    :attr="pvt_r2_3c2.iconText1.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_3c3:true,mcbActivitySetting_col_r2_3c3_size_large:attr.size==='large',mcbActivitySetting_col_r2_3c3_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_3c3_size_small:attr.size==='small',mcbActivitySetting_col_r2_3c3_size_min:attr.size==='min',mcbActivitySetting_col_r2_3c3_checked:attr.checked,mcbActivitySetting_col_r2_3c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="tivketPriceText"
                    refId="tivketPriceText"
                    v-show="pvt_isShow.r2_3c3 === 'tivketPriceText'"
                    :paraVarPair="pvt_r2_3c3.tivketPriceText.paraVarPair"
                    :para="pvt_r2_3c3.tivketPriceText.para"
                    :attr="pvt_r2_3c3.tivketPriceText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_3c4:true,mcbActivitySetting_col_r2_3c4_size_large:attr.size==='large',mcbActivitySetting_col_r2_3c4_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_3c4_size_small:attr.size==='small',mcbActivitySetting_col_r2_3c4_size_min:attr.size==='min',mcbActivitySetting_col_r2_3c4_checked:attr.checked,mcbActivitySetting_col_r2_3c4_disable:attr.disabled}">

            <lm2b-link-text
                    ref="ticketTypeButton"
                    refId="ticketTypeButton"
                    v-show="pvt_isShow.r2_3c4 === 'ticketTypeButton'"
                    :paraVarPair="pvt_r2_3c4.ticketTypeButton.paraVarPair"
                    :para="pvt_r2_3c4.ticketTypeButton.para"
                    :attr="pvt_r2_3c4.ticketTypeButton.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbActivitySetting_row mcbActivitySetting_row_row6">
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_4c1:true,mcbActivitySetting_col_r2_4c1_size_large:attr.size==='large',mcbActivitySetting_col_r2_4c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_4c1_size_small:attr.size==='small',mcbActivitySetting_col_r2_4c1_size_min:attr.size==='min',mcbActivitySetting_col_r2_4c1_checked:attr.checked,mcbActivitySetting_col_r2_4c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="regFormLabel"
                    refId="regFormLabel"
                    v-show="pvt_isShow.r2_4c1 === 'regFormLabel'"
                    :paraVarPair="pvt_r2_4c1.regFormLabel.paraVarPair"
                    :para="pvt_r2_4c1.regFormLabel.para"
                    :attr="pvt_r2_4c1.regFormLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_4c2:true,mcbActivitySetting_col_r2_4c2_size_large:attr.size==='large',mcbActivitySetting_col_r2_4c2_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_4c2_size_small:attr.size==='small',mcbActivitySetting_col_r2_4c2_size_min:attr.size==='min',mcbActivitySetting_col_r2_4c2_checked:attr.checked,mcbActivitySetting_col_r2_4c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="regFormText"
                    refId="regFormText"
                    v-show="pvt_isShow.r2_4c2 === 'regFormText'"
                    :paraVarPair="pvt_r2_4c2.regFormText.paraVarPair"
                    :para="pvt_r2_4c2.regFormText.para"
                    :attr="pvt_r2_4c2.regFormText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_4c3:true,mcbActivitySetting_col_r2_4c3_size_large:attr.size==='large',mcbActivitySetting_col_r2_4c3_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_4c3_size_small:attr.size==='small',mcbActivitySetting_col_r2_4c3_size_min:attr.size==='min',mcbActivitySetting_col_r2_4c3_checked:attr.checked,mcbActivitySetting_col_r2_4c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="regFormButton"
                    refId="regFormButton"
                    v-show="pvt_isShow.r2_4c3 === 'regFormButton'"
                    :paraVarPair="pvt_r2_4c3.regFormButton.paraVarPair"
                    :para="pvt_r2_4c3.regFormButton.para"
                    :attr="pvt_r2_4c3.regFormButton.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbActivitySetting_row mcbActivitySetting_row_row7">
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_5c1:true,mcbActivitySetting_col_r2_5c1_size_large:attr.size==='large',mcbActivitySetting_col_r2_5c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_5c1_size_small:attr.size==='small',mcbActivitySetting_col_r2_5c1_size_min:attr.size==='min',mcbActivitySetting_col_r2_5c1_checked:attr.checked,mcbActivitySetting_col_r2_5c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="refundLabel"
                    refId="refundLabel"
                    v-show="pvt_isShow.r2_5c1 === 'refundLabel'"
                    :paraVarPair="pvt_r2_5c1.refundLabel.paraVarPair"
                    :para="pvt_r2_5c1.refundLabel.para"
                    :attr="pvt_r2_5c1.refundLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_5c2:true,mcbActivitySetting_col_r2_5c2_size_large:attr.size==='large',mcbActivitySetting_col_r2_5c2_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_5c2_size_small:attr.size==='small',mcbActivitySetting_col_r2_5c2_size_min:attr.size==='min',mcbActivitySetting_col_r2_5c2_checked:attr.checked,mcbActivitySetting_col_r2_5c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText2"
                    refId="iconText2"
                    v-show="pvt_isShow.r2_5c2 === 'iconText2'"
                    :paraVarPair="pvt_r2_5c2.iconText2.paraVarPair"
                    :para="pvt_r2_5c2.iconText2.para"
                    :attr="pvt_r2_5c2.iconText2.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_5c3:true,mcbActivitySetting_col_r2_5c3_size_large:attr.size==='large',mcbActivitySetting_col_r2_5c3_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_5c3_size_small:attr.size==='small',mcbActivitySetting_col_r2_5c3_size_min:attr.size==='min',mcbActivitySetting_col_r2_5c3_checked:attr.checked,mcbActivitySetting_col_r2_5c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="refundText"
                    refId="refundText"
                    v-show="pvt_isShow.r2_5c3 === 'refundText'"
                    :paraVarPair="pvt_r2_5c3.refundText.paraVarPair"
                    :para="pvt_r2_5c3.refundText.para"
                    :attr="pvt_r2_5c3.refundText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_5c4:true,mcbActivitySetting_col_r2_5c4_size_large:attr.size==='large',mcbActivitySetting_col_r2_5c4_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_5c4_size_small:attr.size==='small',mcbActivitySetting_col_r2_5c4_size_min:attr.size==='min',mcbActivitySetting_col_r2_5c4_checked:attr.checked,mcbActivitySetting_col_r2_5c4_disable:attr.disabled}">

            <lm2b-link-text
                    ref="refundButton"
                    refId="refundButton"
                    v-show="pvt_isShow.r2_5c4 === 'refundButton'"
                    :paraVarPair="pvt_r2_5c4.refundButton.paraVarPair"
                    :para="pvt_r2_5c4.refundButton.para"
                    :attr="pvt_r2_5c4.refundButton.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbActivitySetting_row mcbActivitySetting_row_row8">
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_6c1:true,mcbActivitySetting_col_r2_6c1_size_large:attr.size==='large',mcbActivitySetting_col_r2_6c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_6c1_size_small:attr.size==='small',mcbActivitySetting_col_r2_6c1_size_min:attr.size==='min',mcbActivitySetting_col_r2_6c1_checked:attr.checked,mcbActivitySetting_col_r2_6c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="managerLabel"
                    refId="managerLabel"
                    v-show="pvt_isShow.r2_6c1 === 'managerLabel'"
                    :paraVarPair="pvt_r2_6c1.managerLabel.paraVarPair"
                    :para="pvt_r2_6c1.managerLabel.para"
                    :attr="pvt_r2_6c1.managerLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_6c2:true,mcbActivitySetting_col_r2_6c2_size_large:attr.size==='large',mcbActivitySetting_col_r2_6c2_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_6c2_size_small:attr.size==='small',mcbActivitySetting_col_r2_6c2_size_min:attr.size==='min',mcbActivitySetting_col_r2_6c2_checked:attr.checked,mcbActivitySetting_col_r2_6c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="managerText"
                    refId="managerText"
                    v-show="pvt_isShow.r2_6c2 === 'managerText'"
                    :paraVarPair="pvt_r2_6c2.managerText.paraVarPair"
                    :para="pvt_r2_6c2.managerText.para"
                    :attr="pvt_r2_6c2.managerText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_6c3:true,mcbActivitySetting_col_r2_6c3_size_large:attr.size==='large',mcbActivitySetting_col_r2_6c3_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_6c3_size_small:attr.size==='small',mcbActivitySetting_col_r2_6c3_size_min:attr.size==='min',mcbActivitySetting_col_r2_6c3_checked:attr.checked,mcbActivitySetting_col_r2_6c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="managerButton"
                    refId="managerButton"
                    v-show="pvt_isShow.r2_6c3 === 'managerButton'"
                    :paraVarPair="pvt_r2_6c3.managerButton.paraVarPair"
                    :para="pvt_r2_6c3.managerButton.para"
                    :attr="pvt_r2_6c3.managerButton.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbActivitySetting_row mcbActivitySetting_row_row9">
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_7c1:true,mcbActivitySetting_col_r2_7c1_size_large:attr.size==='large',mcbActivitySetting_col_r2_7c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_7c1_size_small:attr.size==='small',mcbActivitySetting_col_r2_7c1_size_min:attr.size==='min',mcbActivitySetting_col_r2_7c1_checked:attr.checked,mcbActivitySetting_col_r2_7c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="budgetLabel"
                    refId="budgetLabel"
                    v-show="pvt_isShow.r2_7c1 === 'budgetLabel'"
                    :paraVarPair="pvt_r2_7c1.budgetLabel.paraVarPair"
                    :para="pvt_r2_7c1.budgetLabel.para"
                    :attr="pvt_r2_7c1.budgetLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_7c2:true,mcbActivitySetting_col_r2_7c2_size_large:attr.size==='large',mcbActivitySetting_col_r2_7c2_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_7c2_size_small:attr.size==='small',mcbActivitySetting_col_r2_7c2_size_min:attr.size==='min',mcbActivitySetting_col_r2_7c2_checked:attr.checked,mcbActivitySetting_col_r2_7c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="budgetText"
                    refId="budgetText"
                    v-show="pvt_isShow.r2_7c2 === 'budgetText'"
                    :paraVarPair="pvt_r2_7c2.budgetText.paraVarPair"
                    :para="pvt_r2_7c2.budgetText.para"
                    :attr="pvt_r2_7c2.budgetText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_7c3:true,mcbActivitySetting_col_r2_7c3_size_large:attr.size==='large',mcbActivitySetting_col_r2_7c3_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_7c3_size_small:attr.size==='small',mcbActivitySetting_col_r2_7c3_size_min:attr.size==='min',mcbActivitySetting_col_r2_7c3_checked:attr.checked,mcbActivitySetting_col_r2_7c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="budgetButton"
                    refId="budgetButton"
                    v-show="pvt_isShow.r2_7c3 === 'budgetButton'"
                    :paraVarPair="pvt_r2_7c3.budgetButton.paraVarPair"
                    :para="pvt_r2_7c3.budgetButton.para"
                    :attr="pvt_r2_7c3.budgetButton.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbActivitySetting_row mcbActivitySetting_row_row10">
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_8c1:true,mcbActivitySetting_col_r2_8c1_size_large:attr.size==='large',mcbActivitySetting_col_r2_8c1_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_8c1_size_small:attr.size==='small',mcbActivitySetting_col_r2_8c1_size_min:attr.size==='min',mcbActivitySetting_col_r2_8c1_checked:attr.checked,mcbActivitySetting_col_r2_8c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="releaseLabel"
                    refId="releaseLabel"
                    v-show="pvt_isShow.r2_8c1 === 'releaseLabel'"
                    :paraVarPair="pvt_r2_8c1.releaseLabel.paraVarPair"
                    :para="pvt_r2_8c1.releaseLabel.para"
                    :attr="pvt_r2_8c1.releaseLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_8c2:true,mcbActivitySetting_col_r2_8c2_size_large:attr.size==='large',mcbActivitySetting_col_r2_8c2_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_8c2_size_small:attr.size==='small',mcbActivitySetting_col_r2_8c2_size_min:attr.size==='min',mcbActivitySetting_col_r2_8c2_checked:attr.checked,mcbActivitySetting_col_r2_8c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="releaseText"
                    refId="releaseText"
                    v-show="pvt_isShow.r2_8c2 === 'releaseText'"
                    :paraVarPair="pvt_r2_8c2.releaseText.paraVarPair"
                    :para="pvt_r2_8c2.releaseText.para"
                    :attr="pvt_r2_8c2.releaseText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbActivitySetting_col:true,mcbActivitySetting_col_r2_8c3:true,mcbActivitySetting_col_r2_8c3_size_large:attr.size==='large',mcbActivitySetting_col_r2_8c3_size_medium:attr.size==='medium',mcbActivitySetting_col_r2_8c3_size_small:attr.size==='small',mcbActivitySetting_col_r2_8c3_size_min:attr.size==='min',mcbActivitySetting_col_r2_8c3_checked:attr.checked,mcbActivitySetting_col_r2_8c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="releaseButton"
                    refId="releaseButton"
                    v-show="pvt_isShow.r2_8c3 === 'releaseButton'"
                    :paraVarPair="pvt_r2_8c3.releaseButton.paraVarPair"
                    :para="pvt_r2_8c3.releaseButton.para"
                    :attr="pvt_r2_8c3.releaseButton.attr">
            </lm2b-link-text>
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
          vessel:['r1c1','r2_1c1','r2_2c1','r2_3c1','r2_3c3','r2_3c4','r2_4c1','r2_4c2','r2_4c3','r2_6c1','r2_6c2','r2_6c3','r2_7c1','r2_7c2','r2_7c3','r2_8c1','r2_8c2','r2_8c3','r2_5c1','r2_5c3','r2_5c4','r2_3c2','r2_5c2'],
          subModule:['activitySetTitle','showEnrollLabel','showEnrollRadio','ticketTpyeLabel','tivketPriceText','ticketTypeButton','regFormLabel','regFormText','regFormButton','managerLabel','managerText','managerButton','budgetLabel','budgetText','budgetButton','releaseLabel','releaseText','releaseButton','refundLabel','refundText','refundButton','iconText1','iconText2'],
        },
        pvt_isShow: {
          r1c1:null,
          r2_1c1:null,
          r2_2c1:null,
          r2_3c1:null,
          r2_3c3:null,
          r2_3c4:null,
          r2_4c1:null,
          r2_4c2:null,
          r2_4c3:null,
          r2_6c1:null,
          r2_6c2:null,
          r2_6c3:null,
          r2_7c1:null,
          r2_7c2:null,
          r2_7c3:null,
          r2_8c1:null,
          r2_8c2:null,
          r2_8c3:null,
          r2_5c1:null,
          r2_5c3:null,
          r2_5c4:null,
          r2_3c2:null,
          r2_5c2:null,
        },
        pvt_eventPortInput: ['ticketTypeSetEvent','regFormSetEvent','withdrawSetEvent','managerSetEvent','budgetSetEvent','issueScopeSetEvent'],
        activityId:null,
        showEnrollRadioValue:0,
        ticketText:'',
        ticketTextColor:'',
        formText:'',
        formTextColor:'',
        refundText:'',
        refundTextColor:'',
        managerText:'',
        managerTextColor:'',
        budgetText:'',
        budgetTextColor:'',
        releaseText:'',
        releaseTextColor:'',
      };
    },
    watch: {
    },
    computed:{
      pvt_r1c1:function(){
        return {
          activitySetTitle:{
            paraVarPair:{
            },
            para:{
              textData:'活动设置',
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              height:'20px',
              color:'#333333',
              fontSize:'18px',
            },
          },
        };
      },
      pvt_r2_1c1:function(){
        return {
          showEnrollLabel:{
            paraVarPair:{
            },
            para:{
              textData:'报名人数:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'20px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          showEnrollRadio:{
            paraVarPair:{
              radioData:'showEnrollRadioValue',
            },
            para:{
              radioData:this.showEnrollRadioValue,
            },
            attr:{
              radioArr:[{label:0,text:'显示'},{label:1,text:'不显示'}],
              define:['van-icon-circle','van-icon-passed'],
              size:'mini'
            },
          },
        };
      },
      pvt_r2_3c1:function(){
        return {
          ticketTpyeLabel:{
            paraVarPair:{
            },
            para:{
              textData:'票种设置:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'43px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_3c3:function(){
        return {
          tivketPriceText:{
            paraVarPair:{
            },
            para:{
              textData:this.ticketText
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'43px',
              fontSize:'14px',
              color:this.ticketTextColor
            },
          },
        };
      },
      pvt_r2_3c4:function(){
        return {
          ticketTypeButton:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'42px',
              color:'#333333',
              fontSize:'18px',
              background:'transparent',
              icon:'van-icon-arrow',
            },
          },
        };
      },
      pvt_r2_4c1:function(){
        return {
          regFormLabel:{
            paraVarPair:{
            },
            para:{
              textData:'报名表单:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'43px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_4c2:function(){
        return {
          regFormText:{
            paraVarPair:{
            },
            para:{
              textData:this.formText
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'43px',
              fontSize:'14px',
              color:this.formTextColor
            },
          },
        };
      },
      pvt_r2_4c3:function(){
        return {
          regFormButton:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'42px',
              color:'#333333',
              fontSize:'18px',
              background:'transparent',
              icon:'van-icon-arrow',
            },
          },
        };
      },
      pvt_r2_6c1:function(){
        return {
          managerLabel:{
            paraVarPair:{
            },
            para:{
              textData:'活动管理成员:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'43px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_6c2:function(){
        return {
          managerText:{
            paraVarPair:{
            },
            para:{
              textData:this.managerText
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'43px',
              fontSize:'14px',
              color:this.managerTextColor
            },
          },
        };
      },
      pvt_r2_6c3:function(){
        return {
          managerButton:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'42px',
              color:'#333333',
              fontSize:'18px',
              background:'transparent',
              icon:'van-icon-arrow',
            },
          },
        };
      },
      pvt_r2_7c1:function(){
        return {
          budgetLabel:{
            paraVarPair:{
            },
            para:{
              textData:'活动预算:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'43px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_7c2:function(){
        return {
          budgetText:{
            paraVarPair:{
            },
            para:{
              textData:this.budgetText
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'43px',
              fontSize:'14px',
              color:this.budgetTextColor
            },
          },
        };
      },
      pvt_r2_7c3:function(){
        return {
          budgetButton:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'42px',
              color:'#333333',
              fontSize:'18px',
              background:'transparent',
              icon:'van-icon-arrow',
            },
          },
        };
      },
      pvt_r2_8c1:function(){
        return {
          releaseLabel:{
            paraVarPair:{
            },
            para:{
              textData:'发布设置:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'43px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_8c2:function(){
        return {
          releaseText:{
            paraVarPair:{
            },
            para:{
              textData:this.releaseText
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'43px',
              fontSize:'14px',
              color:this.releaseTextColor
            },
          },
        };
      },
      pvt_r2_8c3:function(){
        return {
          releaseButton:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'42px',
              color:'#333333',
              fontSize:'18px',
              background:'transparent',
              icon:'van-icon-arrow',
            },
          },
        };
      },
      pvt_r2_5c1:function(){
        return {
          refundLabel:{
            paraVarPair:{
            },
            para:{
              textData:'是否支持退款:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'43px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_5c3:function(){
        return {
          refundText:{
            paraVarPair:{
            },
            para:{
              textData:this.refundText
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'43px',
              fontSize:'14px',
              color:this.refundTextColor
            },
          },
        };
      },
      pvt_r2_5c4:function(){
        return {
          refundButton:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'42px',
              color:'#333333',
              fontSize:'18px',
              background:'transparent',
              icon:'van-icon-arrow',
            },
          },
        };
      },
      pvt_r2_3c2:function(){
        return {
          iconText1:{
            paraVarPair:{
            },
            para:{
              textData:'*',
            },
            attr:{
              label:'div',
              textAlign:'center',
              height:'43px',
              color:'#ee0a24',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_5c2:function(){
        return {
          iconText2:{
            paraVarPair:{
            },
            para:{
              textData:'*',
            },
            attr:{
              label:'div',
              textAlign:'center',
              height:'43px',
              color:'#ee0a24',
              fontSize:'14px',
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
      startModule:function(activityId,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let parentRecord;
        let condition;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 初始化数据
              $this.activityId = null;
              $this.showEnrollRadioValue = 0;
              $this.ticketText = '';
              $this.ticketTextColor = '';
              $this.formText = '';
              $this.formTextColor = '';
              $this.refundText = '';
              $this.refundTextColor = '';
              $this.managerText = '';
              $this.managerTextColor = '';
              $this.budgetText = '';
              $this.budgetTextColor = '';
              $this.releaseText = '';
              $this.releaseTextColor = '';
              if(activityId){
                $this.activityId = activityId;
                para.nStep = 'searchActivity';
              }else{
                para.nStep = 'showModules';
              }
              ++dbFlag;
              break;
            case 'searchActivity':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.showEnrollInfo] = [];
              dbData[mac.mac.fd.groupActivity.refundObject] = [];
              dbData[mac.mac.fd.groupActivity.pubicDepartment] = [];
              dbData[mac.mac.fd.groupActivity.publicCustomer] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.groupActivity.showEnrollInfo][0] === mac.mac.enum.groupActivity.showEnrollInfo.no){
                  $this.showEnrollRadioValue = 1;
                }
                if(dbData[mac.mac.fd.groupActivity.refundObject][0] !== null){
                  para.refundObject = dbData[mac.mac.fd.groupActivity.refundObject][0];
                  if(para.refundObject.type === mac.mac.enum.groupActivity.refundObject.type.support){
                    $this.refundText = '支持退款';
                  }else{
                    $this.refundText = '不支持退款';
                  }
                  $this.refundTextColor = '#333333';
                }else{
                  $this.refundText = '请设置';
                  $this.refundTextColor = '#999999';
                }
                if(dbData[mac.mac.fd.groupActivity.pubicDepartment][0] !== null){
                  $this.releaseText = '公开部门';
                  $this.releaseTextColor = '#333333';
                }else{
                  if(dbData[mac.mac.fd.groupActivity.publicCustomer][0] !== null){
                    $this.releaseText = '公开客户';
                    $this.releaseTextColor = '#333333';
                  }else{
                    $this.releaseText ='请选择';
                    $this.releaseTextColor = '#999999';
                  }
                }
                para.nStep = 'searchTicket';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'searchTicket':
              tableName = mac.mac.tb.groupActivityTicketType;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.groupActivityTicketType.name] = [];
              dbData[mac.mac.fd.groupActivityTicketType.explain] = [];
              dbData[mac.mac.fd.groupActivityTicketType.price] = [];
              dbData[mac.mac.fd.groupActivityTicketType.poll] = [];
              dbData[mac.mac.fd.groupActivityTicketType.minNumber] = [];
              dbData[mac.mac.fd.groupActivityTicketType.maxNumber] = [];
              dbData[mac.mac.fd.groupActivityTicketType.approval] = [];
              dbData[mac.mac.fd.groupActivityTicketType.startTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.endTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleStartTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleEndTime] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                //判断票种是否超过两种，一种则是否为默认票种
                if(dbData[mac.mac.fd.groupActivityTicketType.price].length > 0){
                  let isDefaultTicket = true;
                  if(dbData[mac.mac.fd.groupActivityTicketType.price].length === 1){
                    if(dbData[mac.mac.fd.groupActivityTicketType.name][0] !== '默认票'){
                      isDefaultTicket = false;
                    }
                    if(dbData[mac.mac.fd.groupActivityTicketType.explain][0]){
                      isDefaultTicket = false;
                    }
                    if(Number(dbData[mac.mac.fd.groupActivityTicketType.price][0]) !== 0){
                      isDefaultTicket = false;
                    }
                    if(dbData[mac.mac.fd.groupActivityTicketType.poll][0] !== null){
                      isDefaultTicket = false;
                    }
                    if(dbData[mac.mac.fd.groupActivityTicketType.minNumber][0] !== 1){
                      isDefaultTicket = false;
                    }
                    if(dbData[mac.mac.fd.groupActivityTicketType.maxNumber][0]){
                      isDefaultTicket = false;
                    }
                    if(dbData[mac.mac.fd.groupActivityTicketType.approval][0] === mac.mac.enum.groupActivityTicketType.approval.yes){
                      isDefaultTicket = false;
                    }
                    if(dbData[mac.mac.fd.groupActivityTicketType.saleStartTime][0]){
                      isDefaultTicket = false;
                    }
                  }else{
                    isDefaultTicket = false;
                  }
                  if(isDefaultTicket){
                    $this.ticketText = '请设置';
                    $this.ticketTextColor = '#999999';
                  }else{
                    let minPrice = dbData[mac.mac.fd.groupActivityTicketType.price][0];
                    let maxPrice = dbData[mac.mac.fd.groupActivityTicketType.price][0];
                    for(let i = 0;i < dbData[mac.mac.fd.groupActivityTicketType.price].length;i++){
                      if(dbData[mac.mac.fd.groupActivityTicketType.price][i] > minPrice){
                        maxPrice = dbData[mac.mac.fd.groupActivityTicketType.price][i];
                      }else if(dbData[mac.mac.fd.groupActivityTicketType.price][i] < minPrice){
                        minPrice = dbData[mac.mac.fd.groupActivityTicketType.price][i];
                      }
                    }
                    if(minPrice === maxPrice){
                      $this.ticketText = '￥ ' + minPrice;
                    }else{
                      $this.ticketText = '￥ ' + minPrice + '~' + maxPrice;
                    }
                    $this.ticketTextColor = '#333333';
                  }
                }else{
                  $this.ticketText = '请设置';
                  $this.ticketTextColor = '#999999';
                }
                para.nStep = 'searchForm';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'searchForm':
              tableName = mac.mac.tb.groupActivityEnrollForm;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 2){
                  $this.formText = '已设置' + dbData[mac.mac.fd.id].length + '项';
                  $this.formTextColor = '#333333';
                }else{
                  $this.formText = '默认为姓名、手机号';
                  $this.formTextColor = '#999999';
                }
                para.nStep = 'searchManager';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'searchManager':
              tableName = mac.mac.tb.groupActivityManageMember;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0){
                  $this.managerText = '已设置';
                  $this.managerTextColor = '#333333';
                }else{
                  $this.managerText = '请设置';
                  $this.managerTextColor = '#999999';
                }
                para.nStep = 'searchBudget';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'searchBudget':
              tableName = mac.mac.tb.groupActivityBudgetForm;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0){
                  $this.budgetText = '已设置';
                  $this.budgetTextColor = '#333333';
                }else{
                  $this.budgetText = '请设置';
                  $this.budgetTextColor = '#999999';
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'activitySetTitle','showEnrollLabel','showEnrollRadio','ticketTpyeLabel','tivketPriceText','ticketTypeButton','regFormLabel','regFormText','regFormButton','managerLabel','managerText','managerButton','budgetLabel','budgetText','budgetButton','releaseLabel','releaseText','releaseButton','refundLabel','refundText','refundButton','iconText1','iconText2'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'end':
              para.successCallBack('success');
              return;
            default:
              para.errorCallBack('error');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      //刷新子模块
      ticketTypeRefresh(){
        this.ticketTypeRefresh_(function(){},function(error){console.log(error)});
      },
      ticketTypeRefresh_:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let parentRecord;
        let condition;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 初始化数据
              $this.ticketText = '';
              $this.ticketTextColor = '';
              para.nStep = 'searchTicket';
              ++dbFlag;
              break;
            case 'searchTicket':
              tableName = mac.mac.tb.groupActivityTicketType;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.groupActivityTicketType.price] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.groupActivityTicketType.price].length > 0){
                  let minPrice = dbData[mac.mac.fd.groupActivityTicketType.price][0];
                  let maxPrice = dbData[mac.mac.fd.groupActivityTicketType.price][0];
                  for(let i = 0;i < dbData[mac.mac.fd.groupActivityTicketType.price].length;i++){
                    if(dbData[mac.mac.fd.groupActivityTicketType.price][i] > minPrice){
                      maxPrice = dbData[mac.mac.fd.groupActivityTicketType.price][i];
                    }else if(dbData[mac.mac.fd.groupActivityTicketType.price][i] < minPrice){
                      minPrice = dbData[mac.mac.fd.groupActivityTicketType.price][i];
                    }
                  }
                  if(minPrice === maxPrice){
                    $this.ticketText = '￥ ' + minPrice;
                  }else{
                    $this.ticketText = '￥ ' + minPrice + '~' + maxPrice;
                  }
                  $this.ticketTextColor = '#333333';
                }else{
                  $this.ticketText = '请设置';
                  $this.ticketTextColor = '#999999';
                }
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.ticketTypeRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.ticketTypeRefresh_(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text':
              $this.sm['tivketPriceText'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.ticketTypeRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'end':
              para.successCallBack('success');
              return;
            default:
              para.errorCallBack('error');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      regFormRefresh(){
        this.regFormRefresh_(function(){},function(error){console.log(error)});
      },
      regFormRefresh_:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let parentRecord;
        let condition;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 初始化数据
              $this.formText = '';
              $this.formTextColor = '';
              para.nStep = 'searchForm';
              ++dbFlag;
              break;
            case 'searchForm':
              tableName = mac.mac.tb.groupActivityEnrollForm;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 2){
                  $this.formText = '已设置' + dbData[mac.mac.fd.id].length + '项';
                  $this.formTextColor = '#333333';
                }else{
                  $this.formText = '默认为姓名、手机号';
                  $this.formTextColor = '#999999';
                }
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.regFormRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.regFormRefresh_(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text':
              $this.sm['regFormText'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.regFormRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'end':
              para.successCallBack('success');
              return;
            default:
              para.errorCallBack('error');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      refundRefresh(){
        this.refundRefresh_(function(){},function(error){console.log(error)});
      },
      refundRefresh_:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 初始化数据
              $this.refundText = '';
              $this.refundTextColor = '';
              para.nStep = 'searchActivity';
              ++dbFlag;
              break;
            case 'searchActivity':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.refundObject] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.groupActivity.refundObject][0] !== null){
                  para.refundObject = dbData[mac.mac.fd.groupActivity.refundObject][0];
                  if(para.refundObject.type === mac.mac.enum.groupActivity.refundObject.type.support){
                    $this.refundText = '支持退款';
                  }else{
                    $this.refundText = '不支持退款';
                  }
                  $this.refundTextColor = '#333333';
                }else{
                  $this.refundText = '请设置';
                  $this.refundTextColor = '#999999';
                }
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.refundRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.refundRefresh_(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text':
              $this.sm['refundText'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.refundRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'end':
              para.successCallBack('success');
              return;
            default:
              para.errorCallBack('error');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      managerRefresh(){
        this.managerRefresh_(function(){},function(error){console.log(error)});
      },
      managerRefresh_:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let parentRecord;
        let condition;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 初始化数据
              $this.managerText = '';
              $this.managerTextColor = '';
              para.nStep = 'searchManager';
              ++dbFlag;
              break;
            case 'searchManager':
              tableName = mac.mac.tb.groupActivityManageMember;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0){
                  $this.managerText = '已设置';
                  $this.managerTextColor = '#333333';
                }else{
                  $this.managerText = '请设置';
                  $this.managerTextColor = '#999999';
                }
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.managerRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.managerRefresh_(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text':
              $this.sm['managerText'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.managerRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'end':
              para.successCallBack('success');
              return;
            default:
              para.errorCallBack('error');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      budgetRefresh(){
        this.budgetRefresh_(function(){},function(error){console.log(error)});
      },
      budgetRefresh_:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let parentRecord;
        let condition;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 初始化数据
              $this.budgetText = '';
              $this.budgetTextColor = '';
              para.nStep = 'searchBudget';
              ++dbFlag;
              break;
            case 'searchBudget':
              tableName = mac.mac.tb.groupActivityBudgetForm;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0){
                  $this.budgetText = '已设置';
                  $this.budgetTextColor = '#333333';
                }else{
                  $this.budgetText = '请设置';
                  $this.budgetTextColor = '#999999';
                }
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.budgetRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.budgetRefresh_(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text':
              $this.sm['budgetText'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.budgetRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'end':
              para.successCallBack('success');
              return;
            default:
              para.errorCallBack('error');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      releaseRefresh(){
        this.releaseRefresh_(function(){},function(error){console.log(error)});
      },
      releaseRefresh_:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 初始化数据
              $this.releaseText = '';
              $this.releaseTextColor = '';
              para.nStep = 'searchActivity';
              ++dbFlag;
              break;
            case 'searchActivity':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.pubicDepartment] = [];
              dbData[mac.mac.fd.groupActivity.publicCustomer] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.groupActivity.pubicDepartment][0] !== null){
                  $this.releaseText = '公开部门';
                  $this.releaseTextColor = '#333333';
                }else{
                  if(dbData[mac.mac.fd.groupActivity.publicCustomer][0] !== null){
                    $this.releaseText = '公开客户';
                    $this.releaseTextColor = '#333333';
                  }else{
                    $this.releaseText ='请选择';
                    $this.releaseTextColor = '#999999';
                  }
                }
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.releaseRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.releaseRefresh_(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text':
              $this.sm['releaseText'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.releaseRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'end':
              para.successCallBack('success');
              return;
            default:
              para.errorCallBack('error');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      modeChange:function(){
        //修改数据库
        let $this = this;
        let tableName = mac.mac.tb.groupActivity;
        let dbData = {};
        dbData[mac.mac.fd.id] = [$this.activityId];
        let showEnrollInfo;
        if($this.showEnrollRadioValue === 0){
          showEnrollInfo = mac.mac.enum.groupActivity.showEnrollInfo.yes;
        }else{
          showEnrollInfo = mac.mac.enum.groupActivity.showEnrollInfo.no;
        }
        dbData[mac.mac.fd.groupActivity.showEnrollInfo] = [showEnrollInfo];
        $this.sys.api.recordModify(tableName,dbData,function(){
          //上传数据
          $this.uploadActivityData();
        },function(error){console.log(error)});
      },
      ticketButtonClick:function(){
        this.ep.ticketTypeSetEvent();
      },
      formButtonClick:function(){
        this.ep.regFormSetEvent();
      },
      refundButtonClick:function(){
        this.ep.withdrawSetEvent();
      },
      managerButtonClick:function(){
        this.ep.managerSetEvent();
      },
      budgetButtonClick:function(){
        this.ep.budgetSetEvent();
      },
      publishButtonClick:function(){
        this.ep.issueScopeSetEvent();
      },
      uploadActivityData(){
        let $this = this;
        let data = {
          objectName:[mac.mac.tb.groupActivity],
          record:[[$this.activityId]]
        };
        $this.uploadData(data,function(){},function(error){console.log(error)});
      },
      startSubModules(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let dbFlag;
        let ref = {
          sm1:'activitySetTitle',
          sm2:'showEnrollLabel',
          sm3:'showEnrollRadio',
          sm4:'ticketTpyeLabel',
          sm5:'tivketPriceText',
          sm6:'ticketTypeButton',
          sm7:'regFormLabel',
          sm8:'regFormText',
          sm9:'regFormButton',
          sm10:'managerLabel',
          sm11:'managerText',
          sm12:'managerButton',
          sm13:'budgetLabel',
          sm14:'budgetText',
          sm15:'budgetButton',
          sm16:'releaseLabel',
          sm17:'releaseText',
          sm18:'releaseButton',
          sm19:'refundLabel',
          sm20:'refundText',
          sm21:'refundButton',
          sm22:'iconText1',
          sm23:'iconText2'
        };

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              para.nStep = 'forceUpdateData';
              ++dbFlag;
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_title';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_title':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_showEnrollLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_showEnrollLabel':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_showEnrollRadio';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_showEnrollRadio':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_ticketLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticketLabel':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_ticketText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticketText':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_ticketButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticketButton':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_formLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_formLabel':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_formText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_formText':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_formButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_formButton':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_managerLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_managerLabel':
              $this.sm[ref.sm10].startModule(function(){
                para.nStep = 'startModule_managerText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_managerText':
              $this.sm[ref.sm11].startModule(function(){
                para.nStep = 'startModule_managerButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_managerButton':
              $this.sm[ref.sm12].startModule(function(){
                para.nStep = 'startModule_budgetLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_budgetLabel':
              $this.sm[ref.sm13].startModule(function(){
                para.nStep = 'startModule_budgetText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_budgetText':
              $this.sm[ref.sm14].startModule(function(){
                para.nStep = 'startModule_budgetButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_budgetButton':
              $this.sm[ref.sm15].startModule(function(){
                para.nStep = 'startModule_releaseLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_releaseLabel':
              $this.sm[ref.sm16].startModule(function(){
                para.nStep = 'startModule_releaseText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_releaseText':
              $this.sm[ref.sm17].startModule(function(){
                para.nStep = 'startModule_releaseButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_releaseButton':
              $this.sm[ref.sm18].startModule(function(){
                para.nStep = 'startModule_refundLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_refundLabel':
              $this.sm[ref.sm19].startModule(function(){
                para.nStep = 'startModule_refundText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_refundText':
              $this.sm[ref.sm20].startModule(function(){
                para.nStep = 'startModule_refundButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_refundButton':
              $this.sm[ref.sm21].startModule(function(){
                para.nStep = 'startModule_iconText1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_iconText1':
              $this.sm[ref.sm22].startModule(function(){
                para.nStep = 'startModule_iconText2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_iconText2':
              $this.sm[ref.sm23].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'end':
              para.successCallBack();
              return
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      //接受子组件事件
      showEnrollRadio_dataModifyEvent:function(){
        this.modeChange();
      },
      tivketPriceText_textClickEvent:function(){
        this.ticketButtonClick();
      },
      ticketTypeButton_textClickEvent:function(){
        this.ticketButtonClick();
      },
      regFormText_textClickEvent:function(){
        this.formButtonClick();
      },
      regFormButton_textClickEvent:function(){
        this.formButtonClick();
      },
      managerText_textClickEvent:function(){
        this.managerButtonClick();
      },
      managerButton_textClickEvent:function(){
        this.managerButtonClick();
      },
      budgetText_textClickEvent:function(){
        this.budgetButtonClick();
      },
      budgetButton_textClickEvent:function(){
        this.budgetButtonClick();
      },
      releaseText_textClickEvent:function(){
        this.publishButtonClick();
      },
      releaseButton_textClickEvent:function(){
        this.publishButtonClick();
      },
      refundText_textClickEvent:function(){
        this.refundButtonClick();
      },
      refundButton_textClickEvent:function(){
        this.refundButtonClick();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../assets/var_sq';
  .mcbActivitySetting_container {
  }
  .mcbActivitySetting_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbActivitySetting_col {
    display:flex;
    flex-direction:column;
  }
  .mcbActivitySetting_col_mcbActivitySettingWindow_size_medium {
    width:@mcbActivitySetting-mcbActivitySettingWindow-medium-width;
  }
  .mcbActivitySetting_col_r1c1_size_medium {
    width:@mcbActivitySetting-r1c1-medium-width;
    height:@mcbActivitySetting-r1c1-medium-height;
    padding:@mcbActivitySetting-r1c1-medium-padding;
    align-items:@mcbActivitySetting-r1c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r1c1-medium-vertical-position;
  }
  .mcbActivitySetting_col_r1c1 {
    border-style:@mcbActivitySetting-r1c1-border-style;
    border-width:@mcbActivitySetting-r1c1-border-width;
    border-color:mix(@mcbActivitySetting-r1c1-border-color,#fff,@mcbActivitySetting-r1c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2c1_size_medium {
    width:@mcbActivitySetting-r2c1-medium-width;
    height:@mcbActivitySetting-r2c1-medium-height;
    padding:@mcbActivitySetting-r2c1-medium-padding;
    align-items:@mcbActivitySetting-r2c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2c1-medium-vertical-position;
  }
  .mcbActivitySetting_col_r2_1c1_size_medium {
    width:@mcbActivitySetting-r2_1c1-medium-width;
    height:@mcbActivitySetting-r2_1c1-medium-height;
    padding:@mcbActivitySetting-r2_1c1-medium-padding;
    align-items:@mcbActivitySetting-r2_1c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_1c1-medium-vertical-position;
  }
  .mcbActivitySetting_col_r2_1c1{
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_2c1_size_medium {
    width:@mcbActivitySetting-r2_2c1-medium-width;
    padding:@mcbActivitySetting-r2_2c1-medium-padding;
    align-items:@mcbActivitySetting-r2_2c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_2c1-medium-vertical-position;
  }
  .mcbActivitySetting_col_r2_2c1 {
    border-style:@mcbActivitySetting-r2_2c1-border-style;
    border-width:@mcbActivitySetting-r2_2c1-border-width;
    border-color:mix(@mcbActivitySetting-r2_2c1-border-color,#fff,@mcbActivitySetting-r2_2c1-hover-border-color-opacity);
  }
  .mcbActivitySetting_col_r2_3c1_size_medium {
    width:@mcbActivitySetting-r2_3c1-medium-width;
    padding:@mcbActivitySetting-r2_3c1-medium-padding;
    align-items:@mcbActivitySetting-r2_3c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_3c1-medium-vertical-position;
    height:@mcbActivitySetting-r2_3c1-medium-height;
  }
  .mcbActivitySetting_col_r2_3c1 {
    border-style:@mcbActivitySetting-r2_3c1-border-style;
    border-width:@mcbActivitySetting-r2_3c1-border-width;
    border-color:mix(@mcbActivitySetting-r2_3c1-border-color,#fff,@mcbActivitySetting-r2_3c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_3c2_size_medium {
    width:@mcbActivitySetting-r2_3c2-medium-width;
    padding:@mcbActivitySetting-r2_3c2-medium-padding;
    align-items:@mcbActivitySetting-r2_3c2-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_3c2-medium-vertical-position;
    height:@mcbActivitySetting-r2_3c2-medium-height;
  }
  .mcbActivitySetting_col_r2_3c2 {
    border-style:@mcbActivitySetting-r2_3c2-border-style;
    border-width:@mcbActivitySetting-r2_3c2-border-width;
    border-color:mix(@mcbActivitySetting-r2_3c2-border-color,#fff,@mcbActivitySetting-r2_3c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_3c3_size_medium {
    width:@mcbActivitySetting-r2_3c3-medium-width;
    padding:@mcbActivitySetting-r2_3c3-medium-padding;
    align-items:@mcbActivitySetting-r2_3c3-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_3c3-medium-vertical-position;
    height:@mcbActivitySetting-r2_3c3-medium-height;
  }
  .mcbActivitySetting_col_r2_3c3 {
    border-style:@mcbActivitySetting-r2_3c3-border-style;
    border-width:@mcbActivitySetting-r2_3c3-border-width;
    border-color:mix(@mcbActivitySetting-r2_3c3-border-color,#fff,@mcbActivitySetting-r2_3c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_4c1_size_medium {
    width:@mcbActivitySetting-r2_4c1-medium-width;
    padding:@mcbActivitySetting-r2_4c1-medium-padding;
    align-items:@mcbActivitySetting-r2_4c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_4c1-medium-vertical-position;
    height:@mcbActivitySetting-r2_4c1-medium-height;
  }
  .mcbActivitySetting_col_r2_4c1 {
    border-style:@mcbActivitySetting-r2_4c1-border-style;
    border-width:@mcbActivitySetting-r2_4c1-border-width;
    border-color:mix(@mcbActivitySetting-r2_4c1-border-color,#fff,@mcbActivitySetting-r2_4c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_4c2_size_medium {
    width:@mcbActivitySetting-r2_4c2-medium-width;
    padding:@mcbActivitySetting-r2_4c2-medium-padding;
    align-items:@mcbActivitySetting-r2_4c2-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_4c2-medium-vertical-position;
    height:@mcbActivitySetting-r2_4c2-medium-height;
  }
  .mcbActivitySetting_col_r2_4c2 {
    border-style:@mcbActivitySetting-r2_4c2-border-style;
    border-width:@mcbActivitySetting-r2_4c2-border-width;
    border-color:mix(@mcbActivitySetting-r2_4c2-border-color,#fff,@mcbActivitySetting-r2_4c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_4c3_size_medium {
    width:@mcbActivitySetting-r2_4c3-medium-width;
    padding:@mcbActivitySetting-r2_4c3-medium-padding;
    align-items:@mcbActivitySetting-r2_4c3-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_4c3-medium-vertical-position;
    height:@mcbActivitySetting-r2_4c3-medium-height;
  }
  .mcbActivitySetting_col_r2_4c3 {
    border-style:@mcbActivitySetting-r2_4c3-border-style;
    border-width:@mcbActivitySetting-r2_4c3-border-width;
    border-color:mix(@mcbActivitySetting-r2_4c3-border-color,#fff,@mcbActivitySetting-r2_4c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_5c1_size_medium {
    width:@mcbActivitySetting-r2_5c1-medium-width;
    padding:@mcbActivitySetting-r2_5c1-medium-padding;
    align-items:@mcbActivitySetting-r2_5c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_5c1-medium-vertical-position;
    height:@mcbActivitySetting-r2_5c1-medium-height;
  }
  .mcbActivitySetting_col_r2_5c1 {
    border-style:@mcbActivitySetting-r2_5c1-border-style;
    border-width:@mcbActivitySetting-r2_5c1-border-width;
    border-color:mix(@mcbActivitySetting-r2_5c1-border-color,#fff,@mcbActivitySetting-r2_5c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_5c2_size_medium {
    width:@mcbActivitySetting-r2_5c2-medium-width;
    padding:@mcbActivitySetting-r2_5c2-medium-padding;
    align-items:@mcbActivitySetting-r2_5c2-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_5c2-medium-vertical-position;
    height:@mcbActivitySetting-r2_5c2-medium-height;
  }
  .mcbActivitySetting_col_r2_5c2 {
    border-style:@mcbActivitySetting-r2_5c2-border-style;
    border-width:@mcbActivitySetting-r2_5c2-border-width;
    border-color:mix(@mcbActivitySetting-r2_5c2-border-color,#fff,@mcbActivitySetting-r2_5c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_5c3_size_medium {
    width:@mcbActivitySetting-r2_5c3-medium-width;
    padding:@mcbActivitySetting-r2_5c3-medium-padding;
    align-items:@mcbActivitySetting-r2_5c3-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_5c3-medium-vertical-position;
    height:@mcbActivitySetting-r2_5c3-medium-height;
  }
  .mcbActivitySetting_col_r2_5c3 {
    border-style:@mcbActivitySetting-r2_5c3-border-style;
    border-width:@mcbActivitySetting-r2_5c3-border-width;
    border-color:mix(@mcbActivitySetting-r2_5c3-border-color,#fff,@mcbActivitySetting-r2_5c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_6c1_size_medium {
    width:@mcbActivitySetting-r2_6c1-medium-width;
    padding:@mcbActivitySetting-r2_6c1-medium-padding;
    align-items:@mcbActivitySetting-r2_6c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_6c1-medium-vertical-position;
    height:@mcbActivitySetting-r2_6c1-medium-height;
  }
  .mcbActivitySetting_col_r2_6c1 {
    border-style:@mcbActivitySetting-r2_6c1-border-style;
    border-width:@mcbActivitySetting-r2_6c1-border-width;
    border-color:mix(@mcbActivitySetting-r2_6c1-border-color,#fff,@mcbActivitySetting-r2_6c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_6c2_size_medium {
    width:@mcbActivitySetting-r2_6c2-medium-width;
    padding:@mcbActivitySetting-r2_6c2-medium-padding;
    align-items:@mcbActivitySetting-r2_6c2-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_6c2-medium-vertical-position;
    height:@mcbActivitySetting-r2_6c2-medium-height;
  }
  .mcbActivitySetting_col_r2_6c2 {
    border-style:@mcbActivitySetting-r2_6c2-border-style;
    border-width:@mcbActivitySetting-r2_6c2-border-width;
    border-color:mix(@mcbActivitySetting-r2_6c2-border-color,#fff,@mcbActivitySetting-r2_6c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_6c3_size_medium {
    width:@mcbActivitySetting-r2_6c3-medium-width;
    padding:@mcbActivitySetting-r2_6c3-medium-padding;
    align-items:@mcbActivitySetting-r2_6c3-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_6c3-medium-vertical-position;
    height:@mcbActivitySetting-r2_6c3-medium-height;
  }
  .mcbActivitySetting_col_r2_6c3 {
    border-style:@mcbActivitySetting-r2_6c3-border-style;
    border-width:@mcbActivitySetting-r2_6c3-border-width;
    border-color:mix(@mcbActivitySetting-r2_6c3-border-color,#fff,@mcbActivitySetting-r2_6c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_7c1_size_medium {
    width:@mcbActivitySetting-r2_7c1-medium-width;
    padding:@mcbActivitySetting-r2_7c1-medium-padding;
    align-items:@mcbActivitySetting-r2_7c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_7c1-medium-vertical-position;
    height:@mcbActivitySetting-r2_7c1-medium-height;
  }
  .mcbActivitySetting_col_r2_7c1 {
    border-style:@mcbActivitySetting-r2_7c1-border-style;
    border-width:@mcbActivitySetting-r2_7c1-border-width;
    border-color:mix(@mcbActivitySetting-r2_7c1-border-color,#fff,@mcbActivitySetting-r2_7c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_7c2_size_medium {
    width:@mcbActivitySetting-r2_7c2-medium-width;
    padding:@mcbActivitySetting-r2_7c2-medium-padding;
    align-items:@mcbActivitySetting-r2_7c2-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_7c2-medium-vertical-position;
    height:@mcbActivitySetting-r2_7c2-medium-height;
  }
  .mcbActivitySetting_col_r2_7c2 {
    border-style:@mcbActivitySetting-r2_7c2-border-style;
    border-width:@mcbActivitySetting-r2_7c2-border-width;
    border-color:mix(@mcbActivitySetting-r2_7c2-border-color,#fff,@mcbActivitySetting-r2_7c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_7c3_size_medium {
    width:@mcbActivitySetting-r2_7c3-medium-width;
    padding:@mcbActivitySetting-r2_7c3-medium-padding;
    align-items:@mcbActivitySetting-r2_7c3-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_7c3-medium-vertical-position;
    height:@mcbActivitySetting-r2_7c3-medium-height;
  }
  .mcbActivitySetting_col_r2_7c3 {
    border-style:@mcbActivitySetting-r2_7c3-border-style;
    border-width:@mcbActivitySetting-r2_7c3-border-width;
    border-color:mix(@mcbActivitySetting-r2_7c3-border-color,#fff,@mcbActivitySetting-r2_7c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_8c1_size_medium {
    width:@mcbActivitySetting-r2_8c1-medium-width;
    padding:@mcbActivitySetting-r2_8c1-medium-padding;
    align-items:@mcbActivitySetting-r2_8c1-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_8c1-medium-vertical-position;
    height:@mcbActivitySetting-r2_8c1-medium-height;
  }
  .mcbActivitySetting_col_r2_8c1 {
    border-color:mix(@mcbActivitySetting-r2_8c1-border-color,#fff,@mcbActivitySetting-r2_8c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_8c2_size_medium {
    width:@mcbActivitySetting-r2_8c2-medium-width;
    padding:@mcbActivitySetting-r2_8c2-medium-padding;
    align-items:@mcbActivitySetting-r2_8c2-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_8c2-medium-vertical-position;
    height:@mcbActivitySetting-r2_8c2-medium-height;
  }
  .mcbActivitySetting_col_r2_8c2 {
    border-color:mix(@mcbActivitySetting-r2_8c2-border-color,#fff,@mcbActivitySetting-r2_8c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_8c3_size_medium {
    width:@mcbActivitySetting-r2_8c3-medium-width;
    padding:@mcbActivitySetting-r2_8c3-medium-padding;
    align-items:@mcbActivitySetting-r2_8c3-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_8c3-medium-vertical-position;
    height:@mcbActivitySetting-r2_8c3-medium-height;
  }
  .mcbActivitySetting_col_r2_8c3 {
    border-color:mix(@mcbActivitySetting-r2_8c3-border-color,#fff,@mcbActivitySetting-r2_8c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_3c4_size_medium {
    width:@mcbActivitySetting-r2_3c4-medium-width;
    padding:@mcbActivitySetting-r2_3c4-medium-padding;
    align-items:@mcbActivitySetting-r2_3c4-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_3c4-medium-vertical-position;
    height:@mcbActivitySetting-r2_3c4-medium-height;
  }
  .mcbActivitySetting_col_r2_3c4 {
    border-style:@mcbActivitySetting-r2_3c4-border-style;
    border-width:@mcbActivitySetting-r2_3c4-border-width;
    border-color:mix(@mcbActivitySetting-r2_3c4-border-color,#fff,@mcbActivitySetting-r2_3c4-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbActivitySetting_col_r2_5c4_size_medium {
    width:@mcbActivitySetting-r2_5c4-medium-width;
    padding:@mcbActivitySetting-r2_5c4-medium-padding;
    align-items:@mcbActivitySetting-r2_5c4-medium-horizontal-position;
    justify-content:@mcbActivitySetting-r2_5c4-medium-vertical-position;
    height:@mcbActivitySetting-r2_5c4-medium-height;
  }
  .mcbActivitySetting_col_r2_5c4 {
    border-style:@mcbActivitySetting-r2_5c4-border-style;
    border-width:@mcbActivitySetting-r2_5c4-border-width;
    border-color:mix(@mcbActivitySetting-r2_5c4-border-color,#fff,@mcbActivitySetting-r2_5c4-hover-border-color-opacity);
    box-sizing:border-box;
  }
</style>
