<template>
  <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_mcbBaseInfoWindow:true,mcbBaseInfo_col_mcbBaseInfoWindow_size_large:attr.size==='large',mcbBaseInfo_col_mcbBaseInfoWindow_size_medium:attr.size==='medium',mcbBaseInfo_col_mcbBaseInfoWindow_size_small:attr.size==='small',mcbBaseInfo_col_mcbBaseInfoWindow_size_min:attr.size==='min',mcbBaseInfo_col_mcbBaseInfoWindow_checked:attr.checked,mcbBaseInfo_col_mcbBaseInfoWindow_disable:attr.disabled}">

    <div class="mcbBaseInfo_row mcbBaseInfo_row_row1">
      <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r1c1:true,mcbBaseInfo_col_r1c1_size_large:attr.size==='large',mcbBaseInfo_col_r1c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r1c1_size_small:attr.size==='small',mcbBaseInfo_col_r1c1_size_min:attr.size==='min',mcbBaseInfo_col_r1c1_checked:attr.checked,mcbBaseInfo_col_r1c1_disable:attr.disabled}">

        <lm2b-link-text
                ref="baseInfoTitle"
                refId="baseInfoTitle"
                v-show="pvt_isShow.r1c1 === 'baseInfoTitle'"
                :paraVarPair="pvt_r1c1.baseInfoTitle.paraVarPair"
                :para="pvt_r1c1.baseInfoTitle.para"
                :attr="pvt_r1c1.baseInfoTitle.attr">
        </lm2b-link-text>
      </div>
    </div>
    <div class="mcbBaseInfo_row mcbBaseInfo_row_row2">
      <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2c1:true,mcbBaseInfo_col_r2c1_size_large:attr.size==='large',mcbBaseInfo_col_r2c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2c1_size_small:attr.size==='small',mcbBaseInfo_col_r2c1_size_min:attr.size==='min',mcbBaseInfo_col_r2c1_checked:attr.checked,mcbBaseInfo_col_r2c1_disable:attr.disabled}">

        <div class="mcbBaseInfo_row mcbBaseInfo_row_row3">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_1c1:true,mcbBaseInfo_col_r2_1c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_1c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_1c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_1c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_1c1_checked:attr.checked,mcbBaseInfo_col_r2_1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="activityNameLabel"
                    refId="activityNameLabel"
                    v-show="pvt_isShow.r2_1c1 === 'activityNameLabel'"
                    :paraVarPair="pvt_r2_1c1.activityNameLabel.paraVarPair"
                    :para="pvt_r2_1c1.activityNameLabel.para"
                    :attr="pvt_r2_1c1.activityNameLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_1c2:true,mcbBaseInfo_col_r2_1c2_size_large:attr.size==='large',mcbBaseInfo_col_r2_1c2_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_1c2_size_small:attr.size==='small',mcbBaseInfo_col_r2_1c2_size_min:attr.size==='min',mcbBaseInfo_col_r2_1c2_checked:attr.checked,mcbBaseInfo_col_r2_1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText1"
                    refId="iconText1"
                    v-show="pvt_isShow.r2_1c2 === 'iconText1'"
                    :paraVarPair="pvt_r2_1c2.iconText1.paraVarPair"
                    :para="pvt_r2_1c2.iconText1.para"
                    :attr="pvt_r2_1c2.iconText1.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_1c3:true,mcbBaseInfo_col_r2_1c3_size_large:attr.size==='large',mcbBaseInfo_col_r2_1c3_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_1c3_size_small:attr.size==='small',mcbBaseInfo_col_r2_1c3_size_min:attr.size==='min',mcbBaseInfo_col_r2_1c3_checked:attr.checked,mcbBaseInfo_col_r2_1c3_disable:attr.disabled}">

            <lm2b-input-text
                    ref="activityNameValue"
                    refId="activityNameValue"
                    v-show="pvt_isShow.r2_1c3 === 'activityNameValue'"
                    :paraVarPair="pvt_r2_1c3.activityNameValue.paraVarPair"
                    :para="pvt_r2_1c3.activityNameValue.para"
                    :attr="pvt_r2_1c3.activityNameValue.attr">
            </lm2b-input-text>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row4">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_2c1:true,mcbBaseInfo_col_r2_2c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_2c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_2c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_2c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_2c1_checked:attr.checked,mcbBaseInfo_col_r2_2c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="activityTimeLabel"
                    refId="activityTimeLabel"
                    v-show="pvt_isShow.r2_2c1 === 'activityTimeLabel'"
                    :paraVarPair="pvt_r2_2c1.activityTimeLabel.paraVarPair"
                    :para="pvt_r2_2c1.activityTimeLabel.para"
                    :attr="pvt_r2_2c1.activityTimeLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_2c2:true,mcbBaseInfo_col_r2_2c2_size_large:attr.size==='large',mcbBaseInfo_col_r2_2c2_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_2c2_size_small:attr.size==='small',mcbBaseInfo_col_r2_2c2_size_min:attr.size==='min',mcbBaseInfo_col_r2_2c2_checked:attr.checked,mcbBaseInfo_col_r2_2c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText2"
                    refId="iconText2"
                    v-show="pvt_isShow.r2_2c2 === 'iconText2'"
                    :paraVarPair="pvt_r2_2c2.iconText2.paraVarPair"
                    :para="pvt_r2_2c2.iconText2.para"
                    :attr="pvt_r2_2c2.iconText2.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_2c3:true,mcbBaseInfo_col_r2_2c3_size_large:attr.size==='large',mcbBaseInfo_col_r2_2c3_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_2c3_size_small:attr.size==='small',mcbBaseInfo_col_r2_2c3_size_min:attr.size==='min',mcbBaseInfo_col_r2_2c3_checked:attr.checked,mcbBaseInfo_col_r2_2c3_disable:attr.disabled}">

            <lm2b-datetime-picker
                    ref="startTimeValue"
                    refId="startTimeValue"
                    v-show="pvt_isShow.r2_2c3 === 'startTimeValue'"
                    :paraVarPair="pvt_r2_2c3.startTimeValue.paraVarPair"
                    :para="pvt_r2_2c3.startTimeValue.para"
                    :attr="pvt_r2_2c3.startTimeValue.attr">
            </lm2b-datetime-picker>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row5">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_3c1:true,mcbBaseInfo_col_r2_3c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_3c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_3c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_3c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_3c1_checked:attr.checked,mcbBaseInfo_col_r2_3c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="rangeSeparatorText"
                    refId="rangeSeparatorText"
                    v-show="pvt_isShow.r2_3c1 === 'rangeSeparatorText'"
                    :paraVarPair="pvt_r2_3c1.rangeSeparatorText.paraVarPair"
                    :para="pvt_r2_3c1.rangeSeparatorText.para"
                    :attr="pvt_r2_3c1.rangeSeparatorText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_3c2:true,mcbBaseInfo_col_r2_3c2_size_large:attr.size==='large',mcbBaseInfo_col_r2_3c2_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_3c2_size_small:attr.size==='small',mcbBaseInfo_col_r2_3c2_size_min:attr.size==='min',mcbBaseInfo_col_r2_3c2_checked:attr.checked,mcbBaseInfo_col_r2_3c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText3"
                    refId="iconText3"
                    v-show="pvt_isShow.r2_3c2 === 'iconText3'"
                    :paraVarPair="pvt_r2_3c2.iconText3.paraVarPair"
                    :para="pvt_r2_3c2.iconText3.para"
                    :attr="pvt_r2_3c2.iconText3.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_3c3:true,mcbBaseInfo_col_r2_3c3_size_large:attr.size==='large',mcbBaseInfo_col_r2_3c3_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_3c3_size_small:attr.size==='small',mcbBaseInfo_col_r2_3c3_size_min:attr.size==='min',mcbBaseInfo_col_r2_3c3_checked:attr.checked,mcbBaseInfo_col_r2_3c3_disable:attr.disabled}">

            <lm2b-datetime-picker
                    ref="endTimeValue"
                    refId="endTimeValue"
                    v-show="pvt_isShow.r2_3c3 === 'endTimeValue'"
                    :paraVarPair="pvt_r2_3c3.endTimeValue.paraVarPair"
                    :para="pvt_r2_3c3.endTimeValue.para"
                    :attr="pvt_r2_3c3.endTimeValue.attr">
            </lm2b-datetime-picker>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row6">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_4c1:true,mcbBaseInfo_col_r2_4c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_4c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_4c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_4c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_4c1_checked:attr.checked,mcbBaseInfo_col_r2_4c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="activityModeLabel"
                    refId="activityModeLabel"
                    v-show="pvt_isShow.r2_4c1 === 'activityModeLabel'"
                    :paraVarPair="pvt_r2_4c1.activityModeLabel.paraVarPair"
                    :para="pvt_r2_4c1.activityModeLabel.para"
                    :attr="pvt_r2_4c1.activityModeLabel.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row7">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_5c1:true,mcbBaseInfo_col_r2_5c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_5c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_5c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_5c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_5c1_checked:attr.checked,mcbBaseInfo_col_r2_5c1_disable:attr.disabled}">

            <lm2b-radio
                    ref="modeRadio"
                    refId="modeRadio"
                    v-show="pvt_isShow.r2_5c1 === 'modeRadio'"
                    :paraVarPair="pvt_r2_5c1.modeRadio.paraVarPair"
                    :para="pvt_r2_5c1.modeRadio.para"
                    :attr="pvt_r2_5c1.modeRadio.attr">
            </lm2b-radio>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row8">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_6c1:true,mcbBaseInfo_col_r2_6c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_6c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_6c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_6c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_6c1_checked:attr.checked,mcbBaseInfo_col_r2_6c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="addressLabel"
                    refId="addressLabel"
                    v-show="pvt_isShow.r2_6c1 === 'addressLabel'"
                    :paraVarPair="pvt_r2_6c1.addressLabel.paraVarPair"
                    :para="pvt_r2_6c1.addressLabel.para"
                    :attr="pvt_r2_6c1.addressLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_6c2:true,mcbBaseInfo_col_r2_6c2_size_large:attr.size==='large',mcbBaseInfo_col_r2_6c2_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_6c2_size_small:attr.size==='small',mcbBaseInfo_col_r2_6c2_size_min:attr.size==='min',mcbBaseInfo_col_r2_6c2_checked:attr.checked,mcbBaseInfo_col_r2_6c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="addressText"
                    refId="addressText"
                    v-show="pvt_isShow.r2_6c2 === 'addressText'"
                    :paraVarPair="pvt_r2_6c2.addressText.paraVarPair"
                    :para="pvt_r2_6c2.addressText.para"
                    :attr="pvt_r2_6c2.addressText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_6c3:true,mcbBaseInfo_col_r2_6c3_size_large:attr.size==='large',mcbBaseInfo_col_r2_6c3_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_6c3_size_small:attr.size==='small',mcbBaseInfo_col_r2_6c3_size_min:attr.size==='min',mcbBaseInfo_col_r2_6c3_checked:attr.checked,mcbBaseInfo_col_r2_6c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="addressButton"
                    refId="addressButton"
                    v-show="pvt_isShow.r2_6c3 === 'addressButton'"
                    :paraVarPair="pvt_r2_6c3.addressButton.paraVarPair"
                    :para="pvt_r2_6c3.addressButton.para"
                    :attr="pvt_r2_6c3.addressButton.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row9">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_7c1:true,mcbBaseInfo_col_r2_7c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_7c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_7c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_7c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_7c1_checked:attr.checked,mcbBaseInfo_col_r2_7c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="mobileLabel"
                    refId="mobileLabel"
                    v-show="pvt_isShow.r2_7c1 === 'mobileLabel'"
                    :paraVarPair="pvt_r2_7c1.mobileLabel.paraVarPair"
                    :para="pvt_r2_7c1.mobileLabel.para"
                    :attr="pvt_r2_7c1.mobileLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_7c2:true,mcbBaseInfo_col_r2_7c2_size_large:attr.size==='large',mcbBaseInfo_col_r2_7c2_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_7c2_size_small:attr.size==='small',mcbBaseInfo_col_r2_7c2_size_min:attr.size==='min',mcbBaseInfo_col_r2_7c2_checked:attr.checked,mcbBaseInfo_col_r2_7c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText4"
                    refId="iconText4"
                    v-show="pvt_isShow.r2_7c2 === 'iconText4'"
                    :paraVarPair="pvt_r2_7c2.iconText4.paraVarPair"
                    :para="pvt_r2_7c2.iconText4.para"
                    :attr="pvt_r2_7c2.iconText4.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_7c3:true,mcbBaseInfo_col_r2_7c3_size_large:attr.size==='large',mcbBaseInfo_col_r2_7c3_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_7c3_size_small:attr.size==='small',mcbBaseInfo_col_r2_7c3_size_min:attr.size==='min',mcbBaseInfo_col_r2_7c3_checked:attr.checked,mcbBaseInfo_col_r2_7c3_disable:attr.disabled}">

            <lm2b-input-phone
                    ref="mobileValue"
                    refId="mobileValue"
                    v-show="pvt_isShow.r2_7c3 === 'mobileValue'"
                    :paraVarPair="pvt_r2_7c3.mobileValue.paraVarPair"
                    :para="pvt_r2_7c3.mobileValue.para"
                    :attr="pvt_r2_7c3.mobileValue.attr">
            </lm2b-input-phone>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row10">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_8c1:true,mcbBaseInfo_col_r2_8c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_8c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_8c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_8c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_8c1_checked:attr.checked,mcbBaseInfo_col_r2_8c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="detailDescriptionText"
                    refId="detailDescriptionText"
                    v-show="pvt_isShow.r2_8c1 === 'detailDescriptionText'"
                    :paraVarPair="pvt_r2_8c1.detailDescriptionText.paraVarPair"
                    :para="pvt_r2_8c1.detailDescriptionText.para"
                    :attr="pvt_r2_8c1.detailDescriptionText.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row13">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_11c1:true,mcbBaseInfo_col_r2_11c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_11c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_11c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_11c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_11c1_checked:attr.checked,mcbBaseInfo_col_r2_11c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="detailEditButton"
                    refId="detailEditButton"
                    v-show="pvt_isShow.r2_11c1 === 'detailEditButton'"
                    :paraVarPair="pvt_r2_11c1.detailEditButton.paraVarPair"
                    :para="pvt_r2_11c1.detailEditButton.para"
                    :attr="pvt_r2_11c1.detailEditButton.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row11">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_9c1:true,mcbBaseInfo_col_r2_9c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_9c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_9c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_9c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_9c1_checked:attr.checked,mcbBaseInfo_col_r2_9c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="abstractLabel"
                    refId="abstractLabel"
                    v-show="pvt_isShow.r2_9c1 === 'abstractLabel'"
                    :paraVarPair="pvt_r2_9c1.abstractLabel.paraVarPair"
                    :para="pvt_r2_9c1.abstractLabel.para"
                    :attr="pvt_r2_9c1.abstractLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_9c2:true,mcbBaseInfo_col_r2_9c2_size_large:attr.size==='large',mcbBaseInfo_col_r2_9c2_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_9c2_size_small:attr.size==='small',mcbBaseInfo_col_r2_9c2_size_min:attr.size==='min',mcbBaseInfo_col_r2_9c2_checked:attr.checked,mcbBaseInfo_col_r2_9c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText5"
                    refId="iconText5"
                    v-show="pvt_isShow.r2_9c2 === 'iconText5'"
                    :paraVarPair="pvt_r2_9c2.iconText5.paraVarPair"
                    :para="pvt_r2_9c2.iconText5.para"
                    :attr="pvt_r2_9c2.iconText5.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_9c3:true,mcbBaseInfo_col_r2_9c3_size_large:attr.size==='large',mcbBaseInfo_col_r2_9c3_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_9c3_size_small:attr.size==='small',mcbBaseInfo_col_r2_9c3_size_min:attr.size==='min',mcbBaseInfo_col_r2_9c3_checked:attr.checked,mcbBaseInfo_col_r2_9c3_disable:attr.disabled}">

            <lm2b-input-text
                    ref="abstractValue"
                    refId="abstractValue"
                    v-show="pvt_isShow.r2_9c3 === 'abstractValue'"
                    :paraVarPair="pvt_r2_9c3.abstractValue.paraVarPair"
                    :para="pvt_r2_9c3.abstractValue.para"
                    :attr="pvt_r2_9c3.abstractValue.attr">
            </lm2b-input-text>
          </div>
        </div>
        <div class="mcbBaseInfo_row mcbBaseInfo_row_row12">
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_10c1:true,mcbBaseInfo_col_r2_10c1_size_large:attr.size==='large',mcbBaseInfo_col_r2_10c1_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_10c1_size_small:attr.size==='small',mcbBaseInfo_col_r2_10c1_size_min:attr.size==='min',mcbBaseInfo_col_r2_10c1_checked:attr.checked,mcbBaseInfo_col_r2_10c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="classifyLabel"
                    refId="classifyLabel"
                    v-show="pvt_isShow.r2_10c1 === 'classifyLabel'"
                    :paraVarPair="pvt_r2_10c1.classifyLabel.paraVarPair"
                    :para="pvt_r2_10c1.classifyLabel.para"
                    :attr="pvt_r2_10c1.classifyLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_10c2:true,mcbBaseInfo_col_r2_10c2_size_large:attr.size==='large',mcbBaseInfo_col_r2_10c2_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_10c2_size_small:attr.size==='small',mcbBaseInfo_col_r2_10c2_size_min:attr.size==='min',mcbBaseInfo_col_r2_10c2_checked:attr.checked,mcbBaseInfo_col_r2_10c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText6"
                    refId="iconText6"
                    v-show="pvt_isShow.r2_10c2 === 'iconText6'"
                    :paraVarPair="pvt_r2_10c2.iconText6.paraVarPair"
                    :para="pvt_r2_10c2.iconText6.para"
                    :attr="pvt_r2_10c2.iconText6.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_10c3:true,mcbBaseInfo_col_r2_10c3_size_large:attr.size==='large',mcbBaseInfo_col_r2_10c3_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_10c3_size_small:attr.size==='small',mcbBaseInfo_col_r2_10c3_size_min:attr.size==='min',mcbBaseInfo_col_r2_10c3_checked:attr.checked,mcbBaseInfo_col_r2_10c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="classifyText"
                    refId="classifyText"
                    v-show="pvt_isShow.r2_10c3 === 'classifyText'"
                    :paraVarPair="pvt_r2_10c3.classifyText.paraVarPair"
                    :para="pvt_r2_10c3.classifyText.para"
                    :attr="pvt_r2_10c3.classifyText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBaseInfo_col:true,mcbBaseInfo_col_r2_10c4:true,mcbBaseInfo_col_r2_10c4_size_large:attr.size==='large',mcbBaseInfo_col_r2_10c4_size_medium:attr.size==='medium',mcbBaseInfo_col_r2_10c4_size_small:attr.size==='small',mcbBaseInfo_col_r2_10c4_size_min:attr.size==='min',mcbBaseInfo_col_r2_10c4_checked:attr.checked,mcbBaseInfo_col_r2_10c4_disable:attr.disabled}">

            <lm2b-link-text
                    ref="classifyButton"
                    refId="classifyButton"
                    v-show="pvt_isShow.r2_10c4 === 'classifyButton'"
                    :paraVarPair="pvt_r2_10c4.classifyButton.paraVarPair"
                    :para="pvt_r2_10c4.classifyButton.para"
                    :attr="pvt_r2_10c4.classifyButton.attr">
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
  import { Dialog } from 'vant';
  export default {
    components: {},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1c1','r2_1c1','r2_1c3','r2_2c1','r2_2c3','r2_3c1','r2_3c3','r2_4c1','r2_5c1','r2_6c2','r2_6c3','r2_6c1','r2_7c1','r2_7c3','r2_9c1','r2_9c3','r2_10c1','r2_10c3','r2_10c4','r2_8c1','r2_11c1','r2_2c2','r2_3c2','r2_7c2','r2_9c2','r2_10c2','r2_1c2'],
          subModule:['baseInfoTitle','activityNameLabel','activityNameValue','activityTimeLabel','startTimeValue','rangeSeparatorText','endTimeValue','activityModeLabel','modeRadio','addressText','addressButton','addressLabel','mobileLabel','mobileValue','abstractLabel','abstractValue','classifyLabel','classifyText','classifyButton','detailDescriptionText','detailEditButton','iconText2','iconText3','iconText4','iconText5','iconText6','iconText1'],
        },
        pvt_isShow: {
          r1c1:null,
          r2_1c1:null,
          r2_1c3:null,
          r2_2c1:null,
          r2_2c3:null,
          r2_3c1:null,
          r2_3c3:null,
          r2_4c1:null,
          r2_5c1:null,
          r2_6c2:null,
          r2_6c3:null,
          r2_6c1:null,
          r2_7c1:null,
          r2_7c3:null,
          r2_9c1:null,
          r2_9c3:null,
          r2_10c1:null,
          r2_10c3:null,
          r2_10c4:null,
          r2_8c1:null,
          r2_11c1:null,
          r2_2c2:null,
          r2_3c2:null,
          r2_7c2:null,
          r2_9c2:null,
          r2_10c2:null,
          r2_1c2:null,
        },
        pvt_eventPortInput: ['addressSetEvent','descriptionEditEvent','activityClassifyEvent'],
        activityId:null,
        activityName:'',
        startTime:null,
        endTime:null,
        activityMode:mac.mac.enum.groupActivity.mode.outLine,
        modeRadioValue:0,
        activityAddress:{}, //{"id":[5,107,1069],"name":["广东省","深圳市","宝安区"],"place":"甲岸科技园","lng":113.938183,"lat":22.531669}
        addressText:'',
        addressTextColor:'',
        addressButtonDisabled:false,
        activityMobile:null,
        activityDetail:null,
        detailTextColor:'',
        activityAbstract:null,
        activityClassify:[],
        classifyText:'',
        classifyTextColor:''
      };
    },
    watch: {
    },
    computed:{
      pvt_r1c1:function(){
        return {
          baseInfoTitle:{
            paraVarPair:{
            },
            para:{
              textData:'基础信息',
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              height:'40px',
              color:'#333333',
              fontSize:'18px',
            },
          },
        };
      },
      pvt_r2_1c1:function(){
        return {
          activityNameLabel:{
            paraVarPair:{
            },
            para:{
              textData:'活动标题:',
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
      pvt_r2_1c3:function(){
        return {
          activityNameValue:{
            paraVarPair:{
            },
            para:{
              text:this.activityName
            },
            attr:{
              placeholder:'请输入活动标题',
              clearable:true,
              isPlaceholder:false,
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          activityTimeLabel:{
            paraVarPair:{
            },
            para:{
              textData:'活动时间:',
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
      pvt_r2_2c3:function(){
        return {
          startTimeValue:{
            paraVarPair:{
              datetime:'startTime'
            },
            para:{
              datetime:this.startTime
            },
            attr:{
              placeholder:'开始时间',
              clearable:false,
              type:'datetime',
              format:'yyyy-MM-dd HH:mm',
              unit:true,
              minDate:new Date()
            },
          },
        };
      },
      pvt_r2_3c1:function(){
        return {
          rangeSeparatorText:{
            paraVarPair:{
            },
            para:{
              textData:'至',
            },
            attr:{
              label:'div',
              textAlign:'center',
              height:'43px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_3c3:function(){
        return {
          endTimeValue:{
            paraVarPair:{
              datetime:'endTime'
            },
            para:{
              datetime:this.endTime
            },
            attr:{
              placeholder:'结束时间',
              clearable:false,
              type:'datetime',
              format:'yyyy-MM-dd HH:mm',
              unit:true,
              minDate:new Date()
            },
          },
        };
      },
      pvt_r2_4c1:function(){
        return {
          activityModeLabel:{
            paraVarPair:{
            },
            para:{
              textData:'活动地点:',
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
      pvt_r2_5c1:function(){
        return {
          modeRadio:{
            paraVarPair:{
              radioData:'modeRadioValue'
            },
            para:{
              radioData:this.modeRadioValue,
            },
            attr:{
              radioArr:[{label:0,text:'线下'},{label:1,text:'线上'},{label:2,text:'线上和线下'}],
              size:'mini',
              define:['van-icon-circle','van-icon-passed'],
            },
          },
        };
      },
      pvt_r2_6c2:function(){
        return {
          addressText:{
            paraVarPair:{
            },
            para:{
              textData:this.addressText
            },
            attr:{
              label:'div',
              textAlign:'right',
              height:'43px',
              fontSize:'14px',
              isClick:!this.addressButtonDisabled,
              color:this.addressTextColor,
              ellipsis:true
            },
          },
        };
      },
      pvt_r2_6c3:function(){
        return {
          addressButton:{
            paraVarPair:{
            },
            para:{},
            attr:{
              isClick:!this.addressButtonDisabled,
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
          addressLabel:{
            paraVarPair:{
            },
            para:{
              textData:'具体地址:',
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
      pvt_r2_7c1:function(){
        return {
          mobileLabel:{
            paraVarPair:{
            },
            para:{
              textData:'联系电话:',
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
      pvt_r2_7c3:function(){
        return {
          mobileValue:{
            paraVarPair:{
            },
            para:{
              mobile:this.activityMobile
            },
            attr:{
              placeholder:'请输入联系电话',
              hint:true,
              popups:true,
              clearable:true,
              isPlaceholder:false,
            },
          },
        };
      },
      pvt_r2_9c1:function(){
        return {
          abstractLabel:{
            paraVarPair:{
            },
            para:{
              textData:'活动亮点:',
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
      pvt_r2_9c3:function(){
        return {
          abstractValue:{
            paraVarPair:{
            },
            para:{
              text:this.activityAbstract
            },
            attr:{
              placeholder:'请输入活动亮点，以便分享摘要等...',
              type:'textarea',
              autosize:{minHeight:10,maxHeight:40},
              isPlaceholder:false,
            },
          },
        };
      },
      pvt_r2_10c1:function(){
        return {
          classifyLabel:{
            paraVarPair:{
            },
            para:{
              textData:'活动分类:',
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
      pvt_r2_10c3:function(){
        return {
          classifyText:{
            paraVarPair:{
            },
            para:{
              textData:this.classifyText
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'43px',
              fontSize:'14px',
              color:this.classifyTextColor
            },
          },
        };
      },
      pvt_r2_10c4:function(){
        return {
          classifyButton:{
            paraVarPair:{
            },
            para:{
              textData:'',
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
          detailDescriptionText:{
            paraVarPair:{
            },
            para:{
              textData:this.activityDetail
            },
            attr:{
              isClick:true,
              label:'div',
              height:'20px',
              fontSize:'14px',
              color:this.detailTextColor,
              html:true
            },
          },
        };
      },
      pvt_r2_11c1:function(){
        return {
          detailEditButton:{
            paraVarPair:{
            },
            para:{
              textData:'编辑',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              color:'#12B0FF',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_2c2:function(){
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
      pvt_r2_3c2:function(){
        return {
          iconText3:{
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
      pvt_r2_7c2:function(){
        return {
          iconText4:{
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
      pvt_r2_9c2:function(){
        return {
          iconText5:{
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
      pvt_r2_10c2:function(){
        return {
          iconText6:{
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
      pvt_r2_1c2:function(){
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
              $this.activityName = '';
              $this.startTime = null;
              $this.endTime = null;
              $this.activityMode = mac.mac.enum.groupActivity.mode.outLine;
              $this.modeRadioValue = 0;
              $this.activityAddress = {};
              $this.addressText = '';
              $this.addressTextColor = '';
              $this.addressButtonDisabled = false;
              $this.activityMobile = null;
              $this.activityDetail = '详情描述...';
              $this.detailTextColor = '#999999';
              //概要描述由基础组件自己查询显示
              $this.activityAbstract = null;
              $this.activityClassify = [];
              $this.classifyText = '';
              $this.classifyTextColor = '';
              if(activityId){
                $this.activityId = activityId;
                $this.activityAbstract = [{
                  $table:mac.mac.tb.groupActivity,
                  $arrField:[mac.mac.fd.groupActivity.abstract],
                  $arrValue:[$this.activityId]
                }];
                para.nStep = 'getData';
              }else{
                para.nStep = 'showModules';
              }
              ++dbFlag;
              break;
            case 'getData':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.name] = [];
              dbData[mac.mac.fd.groupActivity.details] = [];
              dbData[mac.mac.fd.groupActivity.picture] = [];
              dbData[mac.mac.fd.groupActivity.startTime] = [];
              dbData[mac.mac.fd.groupActivity.endTime] = [];
              dbData[mac.mac.fd.groupActivity.mode] = [];
              dbData[mac.mac.fd.groupActivity.place] = [];
              dbData[mac.mac.fd.groupActivity.phone] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.groupActivity.name][0] !== null){
                  $this.activityName = dbData[mac.mac.fd.groupActivity.name][0];
                }
                if(dbData[mac.mac.fd.groupActivity.details][0] !== null){
                  para.details = dbData[mac.mac.fd.groupActivity.details][0];
                  $this.detailTextColor = '#333333';
                }
                if(dbData[mac.mac.fd.groupActivity.startTime][0] !== null){
                  $this.startTime = new Date(dbData[mac.mac.fd.groupActivity.startTime][0]).getTime();
                }
                if(dbData[mac.mac.fd.groupActivity.endTime][0] !== null){
                  $this.endTime = new Date(dbData[mac.mac.fd.groupActivity.endTime][0]).getTime();
                }
                if(dbData[mac.mac.fd.groupActivity.mode][0] !== null){
                  $this.activityMode = dbData[mac.mac.fd.groupActivity.mode][0];
                  if($this.activityMode === mac.mac.enum.groupActivity.mode.outLine){
                    $this.modeRadioValue = 0;
                  }else if($this.activityMode === mac.mac.enum.groupActivity.mode.online){
                    $this.modeRadioValue = 1;
                    $this.addressButtonDisabled = true;
                  }else{
                    $this.modeRadioValue = 2;
                  }
                }
                if(dbData[mac.mac.fd.groupActivity.place][0] !== null){
                  $this.activityAddress = dbData[mac.mac.fd.groupActivity.place][0];
                  //{"id":[5,107,1069],"name":["广东省","深圳市","宝安区"],"place":"甲岸科技园","lng":113.938183,"lat":22.531669}
                  if($this.activityAddress.name.length > 0){
                    for(let i = 0;i < $this.activityAddress.name.length;i++){
                      if($this.activityAddress.name[i]){
                        $this.addressText += $this.activityAddress.name[i] + ' ';
                      }
                    }
                    $this.addressText +=$this.activityAddress.place;
                    $this.addressTextColor = '#333333';
                  }else{
                    $this.addressText ='请选择';
                    $this.addressTextColor = '#999999';
                  }
                }else{
                  $this.addressText ='请选择';
                  $this.addressTextColor = '#999999';
                }
                if(dbData[mac.mac.fd.groupActivity.phone][0] !== null){
                  $this.activityMobile = dbData[mac.mac.fd.groupActivity.phone][0];
                }
                if(dbData[mac.mac.fd.groupActivity.picture][0] !== null){
                  let pictureArr = dbData[mac.mac.fd.groupActivity.picture][0];
                  if(pictureArr[0].fileName){
                    para.nStep = 'getDetails';
                  }else{
                    if(para.details){
                      $this.activityDetail = para.details;
                    }
                    para.nStep = 'searchClassify';
                  }
                }else{
                  para.nStep = 'searchClassify';
                }
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'getDetails':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.picture] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                let arrFieldImg = dbData[mac.mac.fd.groupActivity.picture][0];
                //得到当前图片或者视频的文件名
                para.imgName = [];
                for (let i in arrFieldImg) {
                  para.imgName.push(arrFieldImg[i].fileName);
                }
                para.nStep = 'readImg_loop';
                para.i = 0;
                //得到图片base64地址
                para.imgBase = [];
                if (++dbFlag === 2) {
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'readImg_loop':
              //循环图片数组中的文件名得到base64
              if (para.i === para.imgName.length) {
                dbFlag++;
                para.nStep = 'separationText';
                break;
              }
              tableName = mac.mac.tb.groupActivity;
              let fieldName = mac.mac.fd.groupActivity.picture;
              $this.sys.api.readFileBase64(tableName,fieldName,$this.activityId,para.imgName[para.i], function(result) {
                para.imgBase.push(result);
                para.i++;
                if (++dbFlag === 2) {
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'separationText':
              //循环$this.imageArr
              //通过data:image 判断出图片文件/视频文件
              para.imageBase = [];
              para.videoBase = [];
              for(let y in para.imgBase) {
                if(para.imgBase[y].match(/^data:image/)) {
                  para.imageBase.push(para.imgBase[y]);
                }else {
                  para.videoBase.push(para.imgBase[y]);
                }
              }
              para.nStep='insertImage';
              dbFlag++;
              break;
            case 'insertImage':
              let len = para.imageBase.length;
              for (let y = 0; y < len; y++) {
                //替换details中存在src=‘’的字符串
                let imgRe = /<img[^\<]*?src=(""|'')[^\<]*?\/?>/;
                let imgArr = para.details.match(imgRe);
                //得到的字符串继续替换src=图片地址的数据
                if (imgArr) {
                  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
                  //得到的<img src=''>格式src=''替换成src='url'
                  let newImg = imgArr[0].replace(srcReg, 'src=' + para.imageBase[y]);
                  para.details = para.details.replace(imgRe, newImg);
                }
              }
              para.nStep = 'insertVideo';
              dbFlag++;
              break;
            case 'insertVideo':
              let lenV = para.videoBase.length;
              for (let y = 0; y < lenV; y++) {
                let videoRe = /<iframe[^\<]*?src=(""|'')[^\<]*?\/?>/;
                let videoArr = para.details.match(videoRe);
                //得到的字符串继续替换src=视频地址的数据
                if (videoArr) {
                  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
                  //得到的<img src=''>格式src=''替换成src='url'
                  let newVideo = videoArr[0].replace(srcReg, 'src=' + para.videoBase[y]);
                  para.details = para.details.replace(videoRe, newVideo);
                }
              }
              $this.activityDetail = para.details;
              para.nStep = 'searchClassify';
              dbFlag++;
              break;
            case 'searchClassify':
              //新表中分类放在一个单独子表中
              tableName = mac.mac.tb.groupClassify;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.groupClassify.secondName] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.groupClassify.secondName].length > 0){
                  $this.activityClassify = dbData[mac.mac.fd.groupClassify.secondName];
                  $this.classifyText = $this.activityClassify[0];
                  $this.classifyTextColor = '#333333';
                  if($this.activityClassify.length > 1){
                    $this.classifyText += '等';
                  }
                }else{
                  $this.classifyText = '请选择';
                  $this.classifyTextColor = '#999999';
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'showModules':
              $this.showSubModule('detailEditButton',false,function(){
                //显示子组件
                let refId = [
                  'baseInfoTitle','activityNameLabel','activityNameValue','activityTimeLabel','startTimeValue','rangeSeparatorText','endTimeValue','activityModeLabel','modeRadio','addressText','addressButton','addressLabel','mobileLabel','mobileValue','abstractLabel','abstractValue','classifyLabel','classifyText','classifyButton','detailDescriptionText','iconText2','iconText3','iconText4','iconText5','iconText6','iconText1'
                ];
                if($this.detailTextColor === '#333333'){
                  refId.push('detailEditButton');
                }
                $this.showSubModule(refId,true,function(){
                  para.nStep = 'startSubModules';
                  if(++dbFlag === 2){
                    $this.startModule(activityId,successCallBack,errorCallBack);
                  }
                },para.errorCallBack);
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
      //刷新方法刷新地图、详情描述、分类
      addressRefresh(){
        this.addressRefresh_(function(){},function(error){console.log(error)});
      },
      addressRefresh_:function(successCallBack,errorCallBack){
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
              $this.activityAddress = {};
              $this.addressText = '';
              $this.addressTextColor = '';
              para.nStep = 'getData';
              ++dbFlag;
              break;
            case 'getData':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.place] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.groupActivity.place][0] !== null){
                  $this.activityAddress = dbData[mac.mac.fd.groupActivity.place][0];
                  if($this.activityAddress.name.length > 0){
                    for(let i = 0;i < $this.activityAddress.name.length;i++){
                      if($this.activityAddress.name[i]){
                        $this.addressText += $this.activityAddress.name[i] + ' ';
                      }
                    }
                    $this.addressText +=$this.activityAddress.place;
                    $this.addressTextColor = '#333333';
                  }else{
                    $this.addressText ='请选择';
                    $this.addressTextColor = '#999999';
                  }
                }else{
                  $this.addressText ='请选择';
                  $this.addressTextColor = '#999999';
                }
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.addressRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.addressRefresh_(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text':
              //调用子组件startModule方法
              $this.sm['addressText'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.addressRefresh_(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
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
      detailRefresh(){
        this.detailRefresh_(function(){},function(error){console.log(error)});
      },
      detailRefresh_:function(successCallBack,errorCallBack){
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
              $this.activityDetail = '';
              $this.detailTextColor = '#333333';
              para.nStep = 'getDetails';
              ++dbFlag;
              break;
            case 'getDetails':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.details] = [];
              dbData[mac.mac.fd.groupActivity.picture] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                para.details = dbData[mac.mac.fd.groupActivity.details][0];
                let arrFieldImg = dbData[mac.mac.fd.groupActivity.picture][0];
                if(arrFieldImg !== null){
                  if(arrFieldImg[0].fileName){
                    //得到当前图片或者视频的文件名
                    para.imgName = [];
                    for(let i in arrFieldImg){
                      para.imgName.push(arrFieldImg[i].fileName);
                    }
                    para.nStep = 'readImg_loop';
                    para.i = 0;
                    //得到图片base64地址
                    para.imgBase = [];
                  }else{
                    if(para.details){
                      $this.activityDetail = para.details;
                    }
                    para.nStep = 'showModules';
                  }
                }else{
                  if(para.details){
                    $this.activityDetail = para.details;
                  }
                  para.nStep = 'showModules';
                }
                if (++dbFlag === 2) {
                  $this.detailRefresh_(successCallBack, errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'readImg_loop':
              //循环图片数组中的文件名得到base64
              if (para.i === para.imgName.length) {
                dbFlag++;
                para.nStep = 'separationText';
                break;
              }
              tableName = mac.mac.tb.groupActivity;
              let fieldName = mac.mac.fd.groupActivity.picture;
              $this.sys.api.readFileBase64(tableName,fieldName,$this.activityId,para.imgName[para.i], function(result) {
                para.imgBase.push(result);
                para.i++;
                if (++dbFlag === 2) {
                  $this.detailRefresh_(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'separationText':
              //循环$this.imageArr
              //通过data:image 判断出图片文件/视频文件
              para.imageBase = [];
              para.videoBase = [];
              for(let y in para.imgBase) {
                if(para.imgBase[y].match(/^data:image/)) {
                  para.imageBase.push(para.imgBase[y]);
                }else {
                  para.videoBase.push(para.imgBase[y]);
                }
              }
              para.nStep='insertImage';
              dbFlag++;
              break;
            case 'insertImage':
              let len = para.imageBase.length;
              for (let y = 0; y < len; y++) {
                //替换details中存在src=‘’的字符串
                let imgRe = /<img[^\<]*?src=(""|'')[^\<]*?\/?>/;
                let imgArr = para.details.match(imgRe);
                //得到的字符串继续替换src=图片地址的数据
                if (imgArr) {
                  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
                  //得到的<img src=''>格式src=''替换成src='url'
                  let newImg = imgArr[0].replace(srcReg, 'src=' + para.imageBase[y]);
                  para.details = para.details.replace(imgRe, newImg);
                }
              }
              para.nStep = 'insertVideo';
              dbFlag++;
              break;
            case 'insertVideo':
              let lenV = para.videoBase.length;
              for (let y = 0; y < lenV; y++) {
                let videoRe = /<iframe[^\<]*?src=(""|'')[^\<]*?\/?>/;
                let videoArr = para.details.match(videoRe);
                //得到的字符串继续替换src=视频地址的数据
                if (videoArr) {
                  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
                  //得到的<img src=''>格式src=''替换成src='url'
                  let newVideo = videoArr[0].replace(srcReg, 'src=' + para.videoBase[y]);
                  para.details = para.details.replace(videoRe, newVideo);
                }
              }
              $this.activityDetail = para.details;
              para.nStep = 'showModules';
              dbFlag++;
              break;
            case 'showModules':
              //显示子组件
              $this.showSubModule('detailEditButton',true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.detailRefresh_(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.detailRefresh_(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text':
              //调用子组件startModule方法
              $this.sm['detailDescriptionText'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.detailRefresh_(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
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
      classifyRefresh(){
        this.classifyRefresh_(function(){},function(error){console.log(error)});
      },
      classifyRefresh_:function(successCallBack,errorCallBack){
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
              $this.activityClassify = [];
              $this.classifyText = '';
              $this.classifyTextColor = '';
              para.nStep = 'getData';
              ++dbFlag;
              break;
            case 'getData':
              //新表中分类放在一个单独子表中
              tableName = mac.mac.tb.groupClassify;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.groupClassify.secondName] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.groupClassify.secondName].length > 0){
                  $this.activityClassify = dbData[mac.mac.fd.groupClassify.secondName];
                  $this.classifyText = $this.activityClassify[0];
                  $this.classifyTextColor = '#333333';
                  if($this.activityClassify.length > 1){
                    $this.classifyText += '等';
                  }
                }else{
                  $this.classifyText = '请选择';
                  $this.classifyTextColor = '#999999';
                }
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.classifyRefresh_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.classifyRefresh_(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text':
              //调用子组件startModule方法
              $this.sm['classifyText'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.classifyRefresh_(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
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
      nameChange:function(data1){
        //修改数据库
        let $this = this;
        if(data1 === $this.activityName){
          return;
        }
        $this.activityName = data1;
        $this.nameChange_(function(){},function(error){console.log(error)});
      },
      nameChange_:function(successCallBack,errorCallBack){
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
              para.errorText = '';
              if($this.activityName){
                para.nStep = 'searchActivity';
              }else{
                para.errorText = '活动名称不能为空';
                para.nStep = 'errorText';
              }
              ++dbFlag;
              break;
            case 'searchActivity':
              tableName = mac.mac.tb.groupActivity;
              parentRecord = null;
              condition = mac.mac.fd.groupActivity.name + '="' + $this.activityName + '"';
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0 && dbData[mac.mac.fd.id][0] !== $this.activityId){
                  para.errorText = '活动名称已存在';
                }
                para.nStep = 'errorText';
                if(++dbFlag === 2){
                  $this.nameChange_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'errorText':
              if(para.errorText){
                Dialog.alert({
                  message: para.errorText
                }).then(() => {
                  // on close
                });
                para.nStep = 'end';
              }else{
                para.nStep = 'modifyRecord';
              }
              ++dbFlag;
              break;
            case 'modifyRecord':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.name] = [$this.activityName];
              $this.sys.api.recordModify(tableName,dbData,function(){
                //上传数据
                $this.uploadActivityData();
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.nameChange_(successCallBack,errorCallBack);
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
      startTimeChange:function(){
        //修改数据库
        let $this = this;
        //判断选中时间是否符合要求
        if($this.endTime){
          if($this.startTime >= $this.endTime){
            $this.endTime = $this.startTime + 5*60*1000;
          }
        }else{
          $this.endTime = $this.startTime + 5*60*1000;
        }
        let startDate = new Date($this.startTime);
        let year = startDate.getFullYear();//得到年份
        let month = startDate.getMonth();//得到月份
        let date = startDate.getDate();//得到日期
        let hour = startDate.getHours();//得到小时
        let min = startDate.getMinutes();//得到分钟
        month = month + 1;
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        let startDateText = year + "-" + month + "-" + date + ' ' + hour + ':' + min;
        let endDate = new Date($this.endTime);
        let year1 = endDate.getFullYear();//得到年份
        let month1 = endDate.getMonth();//得到月份
        let date1 = endDate.getDate();//得到日期
        let hour1 = endDate.getHours();//得到小时
        let min1 = endDate.getMinutes();//得到分钟
        month1 = month1 + 1;
        if (month1 < 10) month1 = "0" + month1;
        if (date1 < 10) date1 = "0" + date1;
        if (hour1 < 10) hour1 = "0" + hour1;
        if (min1 < 10) min1 = "0" + min1;
        let endDateText = year1 + "-" + month1 + "-" + date1 + ' ' + hour1 + ':' + min1;
        let tableName = mac.mac.tb.groupActivity;
        let dbData = {};
        dbData[mac.mac.fd.id] = [$this.activityId];
        dbData[mac.mac.fd.groupActivity.startTime] = [startDateText];
        dbData[mac.mac.fd.groupActivity.endTime] = [endDateText];
        $this.sys.api.recordModify(tableName,dbData,function(){
          //上传数据
          $this.uploadActivityData();
          //刷新显示结束时间
          $this.forceUpdateData(function(){
            $this.sm['endTimeValue'].startModule(function(){
            },function(error){console.log(error)});
          });
        },function(error){console.log(error)});
      },
      endTimeChange:function(){
        //修改数据库
        let $this = this;
        //判断选中时间是否符合要求
        let errorText = '';
        if($this.startTime){
          if($this.startTime >= $this.endTime){
            $this.startTime = $this.endTime - 5*60*1000;
          }
        }else{
          $this.startTime = $this.endTime - 5*60*1000;
        }
        if($this.startTime < new Date().getTime()){
          $this.startTime = new Date().getTime();
        }
        let startDate = new Date($this.startTime);
        let year = startDate.getFullYear();//得到年份
        let month = startDate.getMonth();//得到月份
        let date = startDate.getDate();//得到日期
        let hour = startDate.getHours();//得到小时
        let min = startDate.getMinutes();//得到分钟
        month = month + 1;
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        let startDateText = year + "-" + month + "-" + date + ' ' + hour + ':' + min;
        let endDate = new Date($this.endTime);
        let year1 = endDate.getFullYear();//得到年份
        let month1 = endDate.getMonth();//得到月份
        let date1 = endDate.getDate();//得到日期
        let hour1 = endDate.getHours();//得到小时
        let min1 = endDate.getMinutes();//得到分钟
        month1 = month1 + 1;
        if (month1 < 10) month1 = "0" + month1;
        if (date1 < 10) date1 = "0" + date1;
        if (hour1 < 10) hour1 = "0" + hour1;
        if (min1 < 10) min1 = "0" + min1;
        let endDateText = year1 + "-" + month1 + "-" + date1 + ' ' + hour1 + ':' + min1;
        let tableName = mac.mac.tb.groupActivity;
        let dbData = {};
        dbData[mac.mac.fd.id] = [$this.activityId];
        dbData[mac.mac.fd.groupActivity.startTime] = [startDateText];
        dbData[mac.mac.fd.groupActivity.endTime] = [endDateText];
        $this.sys.api.recordModify(tableName,dbData,function(){
          //上传数据
          $this.uploadActivityData();
          //刷新显示开始时间
          $this.forceUpdateData(function(){
            $this.sm['startTimeValue'].startModule(function(){
            },function(error){console.log(error)});
          });
        },function(error){console.log(error)});
      },
      modeChange:function(){
        //修改数据库
        let $this = this;
        let tableName = mac.mac.tb.groupActivity;
        let dbData = {};
        dbData[mac.mac.fd.id] = [$this.activityId];
        if($this.modeRadioValue === 0){
          $this.activityMode = mac.mac.enum.groupActivity.mode.outLine;
          $this.addressButtonDisabled = false;
        }else if($this.modeRadioValue === 1){
          $this.activityMode = mac.mac.enum.groupActivity.mode.online;
          $this.addressButtonDisabled = true;
        }else if($this.modeRadioValue === 2){
          $this.activityMode = mac.mac.enum.groupActivity.mode.all;
          $this.addressButtonDisabled = false;
        }
        dbData[mac.mac.fd.groupActivity.mode] = [$this.activityMode];
        $this.sys.api.recordModify(tableName,dbData,function(){
          //刷新按钮
          $this.forceUpdateData(function(){
            $this.sm['addressText'].startModule(function(){
            },function(error){console.log(error)});
          });
          //上传数据
          $this.uploadActivityData();
        },function(error){console.log(error)});
      },
      addressButtonClick:function(){
        this.ep.addressSetEvent();
      },
      mobileChange:function(data1,data2){
        //修改数据库
        let $this = this;
        if(data1 === $this.activityMobile){
          return;
        }
        //为空和格式错误也退出
        if(!data2){
          return;
        }
        $this.activityMobile = data1;
        let tableName = mac.mac.tb.groupActivity;
        let dbData = {};
        dbData[mac.mac.fd.id] = [$this.activityId];
        dbData[mac.mac.fd.groupActivity.phone] = [$this.activityMobile];
        $this.sys.api.recordModify(tableName,dbData,function(){
          //上传数据
          $this.uploadActivityData();
        },function(error){console.log(error)});
      },
      detailInputFocus:function(){
        this.ep.descriptionEditEvent();
      },
      abstractChange:function(data1){
        //上传数据
        this.uploadActivityData();
      },
      classifyButtonClick:function(){
        this.ep.activityClassifyEvent();
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
          sm1:'baseInfoTitle',
          sm2:'activityNameLabel',
          sm3:'activityNameValue',
          sm4:'activityTimeLabel',
          sm5:'startTimeValue',
          sm6:'rangeSeparatorText',
          sm7:'endTimeValue',
          sm8:'activityModeLabel',
          sm9:'modeRadio',
          sm10:'addressLabel',
          sm11:'addressText',
          sm12:'addressButton',
          sm13:'mobileLabel',
          sm14:'mobileValue',
          sm15:'detailDescriptionText',
          sm16:'abstractLabel',
          sm17:'abstractValue',
          sm18:'classifyLabel',
          sm19:'classifyText',
          sm20:'classifyButton',
          sm21:'detailEditButton',
          sm22:'iconText1',
          sm23:'iconText2',
          sm24:'iconText3',
          sm25:'iconText4',
          sm26:'iconText5',
          sm27:'iconText6',
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
                para.nStep = 'startModule_nameLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_nameLabel':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_nameInput';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_nameInput':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_timeLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_timeLabel':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_startTime';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_startTime':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_separator';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_separator':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_endTime';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_endTime':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_modeLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_modeLabel':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_modeRadio';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_modeRadio':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_addressLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_addressLabel':
              $this.sm[ref.sm10].startModule(function(){
                para.nStep = 'startModule_addressText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_addressText':
              $this.sm[ref.sm11].startModule(function(){
                para.nStep = 'startModule_addressButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_addressButton':
              $this.sm[ref.sm12].startModule(function(){
                para.nStep = 'startModule_mobileLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_mobileLabel':
              $this.sm[ref.sm13].startModule(function(){
                para.nStep = 'startModule_mobileInput';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_mobileInput':
              $this.sm[ref.sm14].startModule(function(){
                para.nStep = 'startModule_detailInput';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_detailInput':
              $this.sm[ref.sm15].startModule(function(){
                para.nStep = 'startModule_abstractLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_abstractLabel':
              $this.sm[ref.sm16].startModule(function(){
                para.nStep = 'startModule_abstractInput';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_abstractInput':
              $this.sm[ref.sm17].startModule(function(){
                para.nStep = 'startModule_classifyLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_classifyLabel':
              $this.sm[ref.sm18].startModule(function(){
                para.nStep = 'startModule_classifyText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_classifyText':
              $this.sm[ref.sm19].startModule(function(){
                para.nStep = 'startModule_classifyButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_classifyButton':
              $this.sm[ref.sm20].startModule(function(){
                para.nStep = 'startModule_EditButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_EditButton':
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
                para.nStep = 'startModule_iconText3';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_iconText3':
              $this.sm[ref.sm24].startModule(function(){
                para.nStep = 'startModule_iconText4';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_iconText4':
              $this.sm[ref.sm25].startModule(function(){
                para.nStep = 'startModule_iconText5';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_iconText5':
              $this.sm[ref.sm26].startModule(function(){
                para.nStep = 'startModule_iconText6';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_iconText6':
              $this.sm[ref.sm27].startModule(function(){
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
      //接受子模块事件
      activityNameValue_dataModifyEvent:function(value){
        this.nameChange(value);
      },
      startTimeValue_dataModifyEvent:function(){
        this.startTimeChange();
      },
      endTimeValue_dataModifyEvent:function(value){
        this.endTimeChange(value);
      },
      modeRadio_dataModifyEvent:function(){
        this.modeChange();
      },
      addressText_textClickEvent:function(){
        this.addressButtonClick();
      },
      addressButton_textClickEvent:function(){
        this.addressButtonClick();
      },
      mobileValue_dataModifyEvent:function(value,boal){
        this.mobileChange(value,boal);
      },
      abstractValue_dataModifyEvent:function(value){
        this.abstractChange(value);
      },
      classifyText_textClickEvent:function(){
        this.classifyButtonClick();
      },
      classifyButton_textClickEvent:function(){
        this.classifyButtonClick();
      },
      detailDescriptionText_textClickEvent:function(){
        this.detailInputFocus();
      },
      detailEditButton_textClickEvent:function(){
        this.detailInputFocus();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../assets/var_sq';
  .mcbBaseInfo_container {
  }
  .mcbBaseInfo_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbBaseInfo_col {
    display:flex;
    flex-direction:column;
  }
  .mcbBaseInfo_col_mcbBaseInfoWindow_size_medium {
    width:@mcbBaseInfo-mcbBaseInfoWindow-medium-width;
  }
  .mcbBaseInfo_col_r1c1_size_medium {
    width:@mcbBaseInfo-r1c1-medium-width;
    height:@mcbBaseInfo-r1c1-medium-height;
    padding:@mcbBaseInfo-r1c1-medium-padding;
    align-items:@mcbBaseInfo-r1c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r1c1-medium-vertical-position;
  }
  .mcbBaseInfo_col_r1c1 {
    border-style:@mcbBaseInfo-r1c1-border-style;
    border-width:@mcbBaseInfo-r1c1-border-width;
    border-color:mix(@mcbBaseInfo-r1c1-border-color,#fff,@mcbBaseInfo-r1c1-hover-border-color-opacity);
  }
  .mcbBaseInfo_col_r2c1_size_medium {
    width:@mcbBaseInfo-r2c1-medium-width;
    padding:@mcbBaseInfo-r2c1-medium-padding;
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_1c1_size_medium {
    width:@mcbBaseInfo-r2_1c1-medium-width;
    height:@mcbBaseInfo-r2_1c1-medium-height;
    align-items:@mcbBaseInfo-r2_1c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_1c1-medium-vertical-position;
    padding:@mcbBaseInfo-r2_1c1-medium-padding;
  }
  .mcbBaseInfo_col_r2_1c1 {
    border-style:@mcbBaseInfo-r2_1c1-border-style;
    border-width:@mcbBaseInfo-r2_1c1-border-width;
    border-color:mix(@mcbBaseInfo-r2_1c1-border-color,#fff,@mcbBaseInfo-r2_1c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_1c2_size_medium {
    width:@mcbBaseInfo-r2_1c2-medium-width;
    height:@mcbBaseInfo-r2_1c2-medium-height;
    align-items:@mcbBaseInfo-r2_1c2-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_1c2-medium-vertical-position;
    padding:@mcbBaseInfo-r2_1c2-medium-padding;
  }
  .mcbBaseInfo_col_r2_1c2 {
    border-style:@mcbBaseInfo-r2_1c2-border-style;
    border-width:@mcbBaseInfo-r2_1c2-border-width;
    border-color:mix(@mcbBaseInfo-r2_1c2-border-color,#fff,@mcbBaseInfo-r2_1c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_2c1_size_medium {
    width:@mcbBaseInfo-r2_2c1-medium-width;
    height:@mcbBaseInfo-r2_2c1-medium-height;
    align-items:@mcbBaseInfo-r2_2c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_2c1-medium-vertical-position;
    padding:@mcbBaseInfo-r2_2c1-medium-padding;
  }
  .mcbBaseInfo_col_r2_2c1 {
    border-style:@mcbBaseInfo-r2_2c1-border-style;
    border-width:@mcbBaseInfo-r2_2c1-border-width;
    border-color:mix(@mcbBaseInfo-r2_2c1-border-color,#fff,@mcbBaseInfo-r2_2c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_2c2_size_medium {
    width:@mcbBaseInfo-r2_2c2-medium-width;
    height:@mcbBaseInfo-r2_2c2-medium-height;
    align-items:@mcbBaseInfo-r2_2c2-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_2c2-medium-vertical-position;
    padding:@mcbBaseInfo-r2_2c2-medium-padding;
  }
  .mcbBaseInfo_col_r2_2c2 {
    border-style:@mcbBaseInfo-r2_2c2-border-style;
    border-width:@mcbBaseInfo-r2_2c2-border-width;
    border-color:mix(@mcbBaseInfo-r2_2c2-border-color,#fff,@mcbBaseInfo-r2_2c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_3c1_size_medium {
    width:@mcbBaseInfo-r2_3c1-medium-width;
    height:@mcbBaseInfo-r2_3c1-medium-height;
    align-items:@mcbBaseInfo-r2_3c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_3c1-medium-vertical-position;
    padding:@mcbBaseInfo-r2_3c1-medium-padding;
  }
  .mcbBaseInfo_col_r2_3c1 {
    border-style:@mcbBaseInfo-r2_3c1-border-style;
    border-width:@mcbBaseInfo-r2_3c1-border-width;
    border-color:mix(@mcbBaseInfo-r2_3c1-border-color,#fff,@mcbBaseInfo-r2_3c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_3c2_size_medium {
    width:@mcbBaseInfo-r2_3c2-medium-width;
    height:@mcbBaseInfo-r2_3c2-medium-height;
    align-items:@mcbBaseInfo-r2_3c2-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_3c2-medium-vertical-position;
    padding:@mcbBaseInfo-r2_3c2-medium-padding;
  }
  .mcbBaseInfo_col_r2_3c2 {
    border-style:@mcbBaseInfo-r2_3c2-border-style;
    border-width:@mcbBaseInfo-r2_3c2-border-width;
    border-color:mix(@mcbBaseInfo-r2_3c2-border-color,#fff,@mcbBaseInfo-r2_3c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_4c1_size_medium {
    width:@mcbBaseInfo-r2_4c1-medium-width;
    height:@mcbBaseInfo-r2_4c1-medium-height;
    align-items:@mcbBaseInfo-r2_4c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_4c1-medium-vertical-position;
    padding:@mcbBaseInfo-r2_4c1-medium-padding;
  }
  .mcbBaseInfo_col_r2_4c1 {
    border-color:mix(@mcbBaseInfo-r2_4c1-border-color,#fff,@mcbBaseInfo-r2_4c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_5c1_size_medium {
    width:@mcbBaseInfo-r2_5c1-medium-width;
    align-items:@mcbBaseInfo-r2_5c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_5c1-medium-vertical-position;
    padding:@mcbBaseInfo-r2_5c1-medium-padding;
  }
  .mcbBaseInfo_col_r2_5c1 {
    border-style:@mcbBaseInfo-r2_5c1-border-style;
    border-width:@mcbBaseInfo-r2_5c1-border-width;
    border-color:mix(@mcbBaseInfo-r2_5c1-border-color,#fff,@mcbBaseInfo-r2_5c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_6c1_size_medium {
    width:@mcbBaseInfo-r2_6c1-medium-width;
    height:@mcbBaseInfo-r2_6c1-medium-height;
    align-items:@mcbBaseInfo-r2_6c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_6c1-medium-vertical-position;
    padding:@mcbBaseInfo-r2_6c1-medium-padding;
  }
  .mcbBaseInfo_col_r2_6c1 {
    border-style:@mcbBaseInfo-r2_6c1-border-style;
    border-width:@mcbBaseInfo-r2_6c1-border-width;
    border-color:mix(@mcbBaseInfo-r2_6c1-border-color,#fff,@mcbBaseInfo-r2_6c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_6c2_size_medium {
    width:@mcbBaseInfo-r2_6c2-medium-width;
    height:@mcbBaseInfo-r2_6c2-medium-height;
    align-items:@mcbBaseInfo-r2_6c2-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_6c2-medium-vertical-position;
    padding:@mcbBaseInfo-r2_6c2-medium-padding;
  }
  .mcbBaseInfo_col_r2_6c2 {
    border-style:@mcbBaseInfo-r2_6c2-border-style;
    border-width:@mcbBaseInfo-r2_6c2-border-width;
    border-color:mix(@mcbBaseInfo-r2_6c2-border-color,#fff,@mcbBaseInfo-r2_6c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_6c3_size_medium {
    width:@mcbBaseInfo-r2_6c3-medium-width;
    height:@mcbBaseInfo-r2_6c3-medium-height;
    align-items:@mcbBaseInfo-r2_6c3-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_6c3-medium-vertical-position;
    padding:@mcbBaseInfo-r2_6c3-medium-padding;
  }
  .mcbBaseInfo_col_r2_6c3 {
    border-style:@mcbBaseInfo-r2_6c3-border-style;
    border-width:@mcbBaseInfo-r2_6c3-border-width;
    border-color:mix(@mcbBaseInfo-r2_6c3-border-color,#fff,@mcbBaseInfo-r2_6c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_7c1_size_medium {
    width:@mcbBaseInfo-r2_7c1-medium-width;
    height:@mcbBaseInfo-r2_7c1-medium-height;
    align-items:@mcbBaseInfo-r2_7c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_7c1-medium-vertical-position;
    padding:@mcbBaseInfo-r2_7c1-medium-padding;
  }
  .mcbBaseInfo_col_r2_7c1 {
    border-style:@mcbBaseInfo-r2_7c1-border-style;
    border-width:@mcbBaseInfo-r2_7c1-border-width;
    border-color:mix(@mcbBaseInfo-r2_7c1-border-color,#fff,@mcbBaseInfo-r2_7c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_7c2_size_medium {
    width:@mcbBaseInfo-r2_7c2-medium-width;
    height:@mcbBaseInfo-r2_7c2-medium-height;
    align-items:@mcbBaseInfo-r2_7c2-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_7c2-medium-vertical-position;
    padding:@mcbBaseInfo-r2_7c2-medium-padding;
  }
  .mcbBaseInfo_col_r2_7c2 {
    border-style:@mcbBaseInfo-r2_7c2-border-style;
    border-width:@mcbBaseInfo-r2_7c2-border-width;
    border-color:mix(@mcbBaseInfo-r2_7c2-border-color,#fff,@mcbBaseInfo-r2_7c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_8c2 {
    border-style:@mcbBaseInfo-r2_7c2-border-style;
    border-width:@mcbBaseInfo-r2_7c2-border-width;
    border-color:mix(@mcbBaseInfo-r2_7c2-border-color,#fff,@mcbBaseInfo-r2_7c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_8c1_size_medium {
    width:@mcbBaseInfo-r2_8c1-medium-width;
    padding:@mcbBaseInfo-r2_8c1-medium-padding;
    align-items:@mcbBaseInfo-r2_8c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_8c1-medium-vertical-position;
    height:@mcbBaseInfo-r2_8c1-medium-height;
  }
  .mcbBaseInfo_col_r2_8c1{
    overflow:auto;
  }
  .mcbBaseInfo_col_r2_9c1_size_medium {
    width:@mcbBaseInfo-r2_9c1-medium-width;
    align-items:@mcbBaseInfo-r2_9c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_9c1-medium-vertical-position;
    padding:@mcbBaseInfo-r2_9c1-medium-padding;
    height:@mcbBaseInfo-r2_9c1-medium-height;
  }
  .mcbBaseInfo_col_r2_9c1 {
    border-style:@mcbBaseInfo-r2_9c1-border-style;
    border-width:@mcbBaseInfo-r2_9c1-border-width;
    border-color:mix(@mcbBaseInfo-r2_9c1-border-color,#fff,@mcbBaseInfo-r2_9c1-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_9c2_size_medium {
    width:@mcbBaseInfo-r2_9c2-medium-width;
    height:@mcbBaseInfo-r2_9c2-medium-height;
    align-items:@mcbBaseInfo-r2_9c2-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_9c2-medium-vertical-position;
    padding:@mcbBaseInfo-r2_9c2-medium-padding;
  }
  .mcbBaseInfo_col_r2_9c2 {
    border-style:@mcbBaseInfo-r2_9c2-border-style;
    border-width:@mcbBaseInfo-r2_9c2-border-width;
    border-color:mix(@mcbBaseInfo-r2_9c2-border-color,#fff,@mcbBaseInfo-r2_9c2-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_10c1_size_medium {
    width:@mcbBaseInfo-r2_91c1-medium-width;
    height:@mcbBaseInfo-r2_10c1-medium-height;
    align-items:@mcbBaseInfo-r2_10c1-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_10c1-medium-vertical-position;
    padding:@mcbBaseInfo-r2_10c1-medium-padding;
  }
  .mcbBaseInfo_col_r2_10c1 {
    border-color:mix(@mcbBaseInfo-r2_10c1-border-color,#fff,@mcbBaseInfo-r2_10c1-hover-border-color-opacity);
    border-style:@mcbBaseInfo-r2_10c1-border-style;
    border-width:@mcbBaseInfo-r2_10c1-border-width;
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_10c2_size_medium {
    width:@mcbBaseInfo-r2_91c2-medium-width;
    height:@mcbBaseInfo-r2_10c2-medium-height;
    align-items:@mcbBaseInfo-r2_10c2-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_10c2-medium-vertical-position;
    padding:@mcbBaseInfo-r2_10c2-medium-padding;
  }
  .mcbBaseInfo_col_r2_10c2 {
    border-color:mix(@mcbBaseInfo-r2_10c2-border-color,#fff,@mcbBaseInfo-r2_10c2-hover-border-color-opacity);
    border-style:@mcbBaseInfo-r2_10c2-border-style;
    border-width:@mcbBaseInfo-r2_10c2-border-width;
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_10c3_size_medium {
    width:@mcbBaseInfo-r2_91c3-medium-width;
    height:@mcbBaseInfo-r2_10c3-medium-height;
    align-items:@mcbBaseInfo-r2_10c3-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_10c3-medium-vertical-position;
    padding:@mcbBaseInfo-r2_10c3-medium-padding;
  }
  .mcbBaseInfo_col_r2_10c3 {
    border-color:mix(@mcbBaseInfo-r2_10c3-border-color,#fff,@mcbBaseInfo-r2_10c3-hover-border-color-opacity);
    border-style:@mcbBaseInfo-r2_10c3-border-style;
    border-width:@mcbBaseInfo-r2_10c3-border-width;
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_11c1_size_medium {
    width:@mcbBaseInfo-r2_11c1-medium-width;
    justify-content:@mcbBaseInfo-r2_11c1-medium-vertical-position;
  }
  .mcbBaseInfo_col_r2_11c1 {
    border-color:mix(@mcbBaseInfo-r2_11c1-border-color,#fff,@mcbBaseInfo-r2_11c1-hover-border-color-opacity);
    border-style:@mcbBaseInfo-r2_11c1-border-style;
    border-width:@mcbBaseInfo-r2_11c1-border-width;
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_1c3_size_medium {
    width:@mcbBaseInfo-r2_1c3-medium-width;
    height:@mcbBaseInfo-r2_1c3-medium-height;
    align-items:@mcbBaseInfo-r2_1c3-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_1c3-medium-vertical-position;
    padding:@mcbBaseInfo-r2_1c3-medium-padding;
  }
  .mcbBaseInfo_col_r2_1c3 {
    border-style:@mcbBaseInfo-r2_1c3-border-style;
    border-width:@mcbBaseInfo-r2_1c3-border-width;
    border-color:mix(@mcbBaseInfo-r2_1c3-border-color,#fff,@mcbBaseInfo-r2_1c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_2c3_size_medium {
    width:@mcbBaseInfo-r2_2c3-medium-width;
    height:@mcbBaseInfo-r2_2c3-medium-height;
    align-items:@mcbBaseInfo-r2_2c3-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_2c3-medium-vertical-position;
    padding:@mcbBaseInfo-r2_2c3-medium-padding;
  }
  .mcbBaseInfo_col_r2_2c3 {
    border-style:@mcbBaseInfo-r2_2c3-border-style;
    border-width:@mcbBaseInfo-r2_2c3-border-width;
    border-color:mix(@mcbBaseInfo-r2_2c3-border-color,#fff,@mcbBaseInfo-r2_2c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_3c3_size_medium {
    width:@mcbBaseInfo-r2_3c3-medium-width;
    height:@mcbBaseInfo-r2_3c3-medium-height;
    align-items:@mcbBaseInfo-r2_3c3-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_3c3-medium-vertical-position;
    padding:@mcbBaseInfo-r2_3c3-medium-padding;
  }
  .mcbBaseInfo_col_r2_3c3 {
    border-style:@mcbBaseInfo-r2_3c3-border-style;
    border-width:@mcbBaseInfo-r2_3c3-border-width;
    border-color:mix(@mcbBaseInfo-r2_3c3-border-color,#fff,@mcbBaseInfo-r2_3c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_7c3_size_medium {
    width:@mcbBaseInfo-r2_7c3-medium-width;
    height:@mcbBaseInfo-r2_7c3-medium-height;
    align-items:@mcbBaseInfo-r2_7c3-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_7c3-medium-vertical-position;
    padding:@mcbBaseInfo-r2_7c3-medium-padding;
  }
  .mcbBaseInfo_col_r2_7c3 {
    border-style:@mcbBaseInfo-r2_7c3-border-style;
    border-width:@mcbBaseInfo-r2_7c3-border-width;
    border-color:mix(@mcbBaseInfo-r2_7c3-border-color,#fff,@mcbBaseInfo-r2_7c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_9c3_size_medium {
    width:@mcbBaseInfo-r2_9c3-medium-width;
    align-items:@mcbBaseInfo-r2_9c3-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_9c3-medium-vertical-position;
    padding:@mcbBaseInfo-r2_9c3-medium-padding;
  }
  .mcbBaseInfo_col_r2_9c3{
    border-style:@mcbBaseInfo-r2_9c3-border-style;
    border-width:@mcbBaseInfo-r2_9c3-border-width;
    border-color:mix(@mcbBaseInfo-r2_9c3-border-color,#fff,@mcbBaseInfo-r2_9c3-hover-border-color-opacity);
    box-sizing:border-box;
  }
  .mcbBaseInfo_col_r2_10c4_size_medium {
    width:@mcbBaseInfo-r2_10c4-medium-width;
    height:@mcbBaseInfo-r2_10c4-medium-height;
    align-items:@mcbBaseInfo-r2_10c4-medium-horizontal-position;
    justify-content:@mcbBaseInfo-r2_10c4-medium-vertical-position;
    padding:@mcbBaseInfo-r2_10c4-medium-padding;
  }
  .mcbBaseInfo_col_r2_10c4 {
    border-color:mix(@mcbBaseInfo-r2_10c4-border-color,#fff,@mcbBaseInfo-r2_10c4-hover-border-color-opacity);
    border-style:@mcbBaseInfo-r2_10c4-border-style;
    border-width:@mcbBaseInfo-r2_10c4-border-width;
    box-sizing:border-box;
  }
</style>
