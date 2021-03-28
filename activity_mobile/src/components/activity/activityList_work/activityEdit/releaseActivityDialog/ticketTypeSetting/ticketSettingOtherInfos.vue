<template>
  <div class="mcbTicketOtherInfoSetting_container">
    <div class="mcbTicketOtherInfoSetting_row mcbTicketOtherInfoSetting_row_mcbTicketOtherInfoSettingRow">
      <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_mcbTicketOtherInfoSettingWindow:true,mcbTicketOtherInfoSetting_col_mcbTicketOtherInfoSettingWindow_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_mcbTicketOtherInfoSettingWindow_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_mcbTicketOtherInfoSettingWindow_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_mcbTicketOtherInfoSettingWindow_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_mcbTicketOtherInfoSettingWindow_checked:attr.checked,mcbTicketOtherInfoSetting_col_mcbTicketOtherInfoSettingWindow_disable:attr.disabled}">

        <div class="mcbTicketOtherInfoSetting_row mcbTicketOtherInfoSetting_row_row1">
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r1c1:true,mcbTicketOtherInfoSetting_col_r1c1_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r1c1_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r1c1_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r1c1_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r1c1_checked:attr.checked,mcbTicketOtherInfoSetting_col_r1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="approvalLabel"
                    refId="approvalLabel"
                    v-show="pvt_isShow.r1c1 === 'approvalLabel'"
                    :paraVarPair="pvt_r1c1.approvalLabel.paraVarPair"
                    :para="pvt_r1c1.approvalLabel.para"
                    :attr="pvt_r1c1.approvalLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r1c2:true,mcbTicketOtherInfoSetting_col_r1c2_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r1c2_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r1c2_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r1c2_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r1c2_checked:attr.checked,mcbTicketOtherInfoSetting_col_r1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="approvalText"
                    refId="approvalText"
                    v-show="pvt_isShow.r1c2 === 'approvalText'"
                    :paraVarPair="pvt_r1c2.approvalText.paraVarPair"
                    :para="pvt_r1c2.approvalText.para"
                    :attr="pvt_r1c2.approvalText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r1c3:true,mcbTicketOtherInfoSetting_col_r1c3_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r1c3_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r1c3_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r1c3_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r1c3_checked:attr.checked,mcbTicketOtherInfoSetting_col_r1c3_disable:attr.disabled}">

            <lm2b-switch
                    ref="approvalSwitch"
                    refId="approvalSwitch"
                    v-show="pvt_isShow.r1c3 === 'approvalSwitch'"
                    :paraVarPair="pvt_r1c3.approvalSwitch.paraVarPair"
                    :para="pvt_r1c3.approvalSwitch.para"
                    :attr="pvt_r1c3.approvalSwitch.attr">
            </lm2b-switch>
          </div>
        </div>
        <div class="mcbTicketOtherInfoSetting_row mcbTicketOtherInfoSetting_row_row2">
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r2c1:true,mcbTicketOtherInfoSetting_col_r2c1_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r2c1_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r2c1_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r2c1_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r2c1_checked:attr.checked,mcbTicketOtherInfoSetting_col_r2c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="quotaLabel"
                    refId="quotaLabel"
                    v-show="pvt_isShow.r2c1 === 'quotaLabel'"
                    :paraVarPair="pvt_r2c1.quotaLabel.paraVarPair"
                    :para="pvt_r2c1.quotaLabel.para"
                    :attr="pvt_r2c1.quotaLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r2c2:true,mcbTicketOtherInfoSetting_col_r2c2_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r2c2_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r2c2_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r2c2_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r2c2_checked:attr.checked,mcbTicketOtherInfoSetting_col_r2c2_disable:attr.disabled}">

            <lm2b-select
                    ref="minNumberSelect"
                    refId="minNumberSelect"
                    v-show="pvt_isShow.r2c2 === 'minNumberSelect'"
                    :paraVarPair="pvt_r2c2.minNumberSelect.paraVarPair"
                    :para="pvt_r2c2.minNumberSelect.para"
                    :attr="pvt_r2c2.minNumberSelect.attr">
            </lm2b-select>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r2c3:true,mcbTicketOtherInfoSetting_col_r2c3_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r2c3_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r2c3_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r2c3_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r2c3_checked:attr.checked,mcbTicketOtherInfoSetting_col_r2c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="quotaText"
                    refId="quotaText"
                    v-show="pvt_isShow.r2c3 === 'quotaText'"
                    :paraVarPair="pvt_r2c3.quotaText.paraVarPair"
                    :para="pvt_r2c3.quotaText.para"
                    :attr="pvt_r2c3.quotaText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r2c4:true,mcbTicketOtherInfoSetting_col_r2c4_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r2c4_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r2c4_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r2c4_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r2c4_checked:attr.checked,mcbTicketOtherInfoSetting_col_r2c4_disable:attr.disabled}">

            <lm2b-select
                    ref="maxNumberSelect"
                    refId="maxNumberSelect"
                    v-show="pvt_isShow.r2c4 === 'maxNumberSelect'"
                    :paraVarPair="pvt_r2c4.maxNumberSelect.paraVarPair"
                    :para="pvt_r2c4.maxNumberSelect.para"
                    :attr="pvt_r2c4.maxNumberSelect.attr">
            </lm2b-select>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r2c5:true,mcbTicketOtherInfoSetting_col_r2c5_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r2c5_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r2c5_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r2c5_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r2c5_checked:attr.checked,mcbTicketOtherInfoSetting_col_r2c5_disable:attr.disabled}">

            <lm2b-link-text
                    ref="quotaText2"
                    refId="quotaText2"
                    v-show="pvt_isShow.r2c5 === 'quotaText2'"
                    :paraVarPair="pvt_r2c5.quotaText2.paraVarPair"
                    :para="pvt_r2c5.quotaText2.para"
                    :attr="pvt_r2c5.quotaText2.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbTicketOtherInfoSetting_row mcbTicketOtherInfoSetting_row_row3">
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r3c1:true,mcbTicketOtherInfoSetting_col_r3c1_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r3c1_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r3c1_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r3c1_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r3c1_checked:attr.checked,mcbTicketOtherInfoSetting_col_r3c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="startTimeLabel"
                    refId="startTimeLabel"
                    v-show="pvt_isShow.r3c1 === 'startTimeLabel'"
                    :paraVarPair="pvt_r3c1.startTimeLabel.paraVarPair"
                    :para="pvt_r3c1.startTimeLabel.para"
                    :attr="pvt_r3c1.startTimeLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r3c2:true,mcbTicketOtherInfoSetting_col_r3c2_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r3c2_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r3c2_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r3c2_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r3c2_checked:attr.checked,mcbTicketOtherInfoSetting_col_r3c2_disable:attr.disabled}">

            <lm2b-datetime-picker
                    ref="startTimePicker"
                    refId="startTimePicker"
                    v-show="pvt_isShow.r3c2 === 'startTimePicker'"
                    :paraVarPair="pvt_r3c2.startTimePicker.paraVarPair"
                    :para="pvt_r3c2.startTimePicker.para"
                    :attr="pvt_r3c2.startTimePicker.attr">
            </lm2b-datetime-picker>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r3c3:true,mcbTicketOtherInfoSetting_col_r3c3_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r3c3_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r3c3_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r3c3_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r3c3_checked:attr.checked,mcbTicketOtherInfoSetting_col_r3c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="startTimeText"
                    refId="startTimeText"
                    v-show="pvt_isShow.r3c3 === 'startTimeText'"
                    :paraVarPair="pvt_r3c3.startTimeText.paraVarPair"
                    :para="pvt_r3c3.startTimeText.para"
                    :attr="pvt_r3c3.startTimeText.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbTicketOtherInfoSetting_row mcbTicketOtherInfoSetting_row_row4">
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r4c1:true,mcbTicketOtherInfoSetting_col_r4c1_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r4c1_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r4c1_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r4c1_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r4c1_checked:attr.checked,mcbTicketOtherInfoSetting_col_r4c1_disable:attr.disabled}">

            <lm2b-datetime-picker
                    ref="endTimePicker"
                    refId="endTimePicker"
                    v-show="pvt_isShow.r4c1 === 'endTimePicker'"
                    :paraVarPair="pvt_r4c1.endTimePicker.paraVarPair"
                    :para="pvt_r4c1.endTimePicker.para"
                    :attr="pvt_r4c1.endTimePicker.attr">
            </lm2b-datetime-picker>
          </div>
        </div>
        <div class="mcbTicketOtherInfoSetting_row mcbTicketOtherInfoSetting_row_row5">
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r5c1:true,mcbTicketOtherInfoSetting_col_r5c1_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r5c1_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r5c1_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r5c1_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r5c1_checked:attr.checked,mcbTicketOtherInfoSetting_col_r5c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="saleTimeLabel"
                    refId="saleTimeLabel"
                    v-show="pvt_isShow.r5c1 === 'saleTimeLabel'"
                    :paraVarPair="pvt_r5c1.saleTimeLabel.paraVarPair"
                    :para="pvt_r5c1.saleTimeLabel.para"
                    :attr="pvt_r5c1.saleTimeLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r5c2:true,mcbTicketOtherInfoSetting_col_r5c2_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r5c2_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r5c2_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r5c2_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r5c2_checked:attr.checked,mcbTicketOtherInfoSetting_col_r5c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="saleType1Text"
                    refId="saleType1Text"
                    v-show="pvt_isShow.r5c2 === 'saleType1Text'"
                    :paraVarPair="pvt_r5c2.saleType1Text.paraVarPair"
                    :para="pvt_r5c2.saleType1Text.para"
                    :attr="pvt_r5c2.saleType1Text.attr">
            </lm2b-link-text>
            <mcb-custom-sale-time
                    ref="saleType2"
                    refId="saleType2"
                    v-show="pvt_isShow.r5c2 === 'saleType2'"
                    :paraVarPair="pvt_r5c2.saleType2.paraVarPair"
                    :para="pvt_r5c2.saleType2.para"
                    :attr="pvt_r5c2.saleType2.attr">
            </mcb-custom-sale-time>
          </div>
        </div>
        <div class="mcbTicketOtherInfoSetting_row mcbTicketOtherInfoSetting_row_row6">
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r6c1:true,mcbTicketOtherInfoSetting_col_r6c1_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r6c1_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r6c1_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r6c1_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r6c1_checked:attr.checked,mcbTicketOtherInfoSetting_col_r6c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="explainLabel"
                    refId="explainLabel"
                    v-show="pvt_isShow.r6c1 === 'explainLabel'"
                    :paraVarPair="pvt_r6c1.explainLabel.paraVarPair"
                    :para="pvt_r6c1.explainLabel.para"
                    :attr="pvt_r6c1.explainLabel.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbTicketOtherInfoSetting_col:true,mcbTicketOtherInfoSetting_col_r6c2:true,mcbTicketOtherInfoSetting_col_r6c2_size_large:attr.size==='large',mcbTicketOtherInfoSetting_col_r6c2_size_medium:attr.size==='medium',mcbTicketOtherInfoSetting_col_r6c2_size_small:attr.size==='small',mcbTicketOtherInfoSetting_col_r6c2_size_min:attr.size==='min',mcbTicketOtherInfoSetting_col_r6c2_checked:attr.checked,mcbTicketOtherInfoSetting_col_r6c2_disable:attr.disabled}">

            <lm2b-input-text
                    ref="explainInput"
                    refId="explainInput"
                    v-show="pvt_isShow.r6c2 === 'explainInput'"
                    :paraVarPair="pvt_r6c2.explainInput.paraVarPair"
                    :para="pvt_r6c2.explainInput.para"
                    :attr="pvt_r6c2.explainInput.attr">
            </lm2b-input-text>
          </div>
        </div>
      </div>
    </div>
    <div class="dialogClass">
      <mcb-sale-type-dia
              ref="saleTypeDia"
              refId="saleTypeDia"
              v-show="pvt_isShow.saleTypeDia === 'saleTypeDia'"
              :paraVarPair="pvt_saleTypeDia.saleTypeDia.paraVarPair"
              :para="pvt_saleTypeDia.saleTypeDia.para"
              :attr="pvt_saleTypeDia.saleTypeDia.attr">
      </mcb-sale-type-dia>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import mcbCustomSaleTime from './customSaleTime.vue';
  import mcbSaleTypeDia from './saleTimeTypeDialog.vue';
  export default {
    components: {mcbCustomSaleTime,mcbSaleTypeDia},
    inject: ['sys'],
      props: ['refId','para','attr','paraVarPair','number'],
      data: function() {
      return {

        approval:this.para.approval,
        minNumber:this.para.minNumber,
        maxNumber:this.para.maxNumber,
        startTime:this.para.startTime,
        endTime:this.para.endTime,
        saleType:this.para.saleType,
        saleStartTime:this.para.saleStartTime,
        saleEndTime:this.para.saleEndTime,
        explain:this.para.explain,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r1c3','r2c1','r2c2','r2c3','r2c4','r2c5','r3c1','r3c2','r3c3','r4c1','r5c1','r5c2','r5c2','r6c1','r6c2','saleTypeDia'],
          subModule:['approvalLabel','approvalText','approvalSwitch','quotaLabel','minNumberSelect','quotaText','maxNumberSelect','quotaText2','startTimeLabel','startTimePicker','startTimeText','endTimePicker','saleTimeLabel','saleType1Text','saleType2','explainLabel','explainInput','saleTypeDia'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r1c3:null,
          r2c1:null,
          r2c2:null,
          r2c3:null,
          r2c4:null,
          r2c5:null,
          r3c1:null,
          r3c2:null,
          r3c3:null,
          r4c1:null,
          r5c1:null,
          r5c2:null,
          r6c1:null,
          r6c2:null,
          saleTypeDia:null,
        },
        pvt_eventPortInput: [],

        minSelectArr:[],
        maxSelectArr:[],
        endTimeDisabled:false,
        minStartTime:null,
        minEndTime:null,
        saleType:0,
      };
    },
    watch: {
      approval: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.approval) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.approval][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.approval] = val
            }
          }
        },
        deep   : true
      },
      minNumber: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.minNumber) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.minNumber][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.minNumber] = val
            }
          }
        },
        deep   : true
      },
      maxNumber: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.maxNumber) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.maxNumber][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.maxNumber] = val
            }
          }
        },
        deep   : true
      },
      startTime: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.startTime) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.startTime][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.startTime] = val
            }
          }
        },
        deep   : true
      },
      saleType: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.saleType) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.saleType][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.saleType] = val
            }
          }
        },
        deep   : true
      },
      endTime: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.endTime) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.endTime][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.endTime] = val
            }
          }
        },
        deep   : true
      },
      saleStartTime: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.saleStartTime) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.saleStartTime][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.saleStartTime] = val
            }
          }
        },
        deep   : true
      },
      saleEndTime: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.saleEndTime) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.saleEndTime][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.saleEndTime] = val
            }
          }
        },
        deep   : true
      },
      explain: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.explain) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.explain][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.explain] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          approvalLabel:{
            paraVarPair:{
            },
            para:{
              textData:'审核:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          approvalText:{
            paraVarPair:{
            },
            para:{
              textData:'购买后需要我审核',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1c3:function(){
        return {
          approvalSwitch:{
            paraVarPair:{
              toggle:'approval',
            },
            para:{
              toggle:this.approval,
            },
            attr:{
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          quotaLabel:{
            paraVarPair:{
            },
            para:{
              textData:'限购:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2c2:function(){
        return {
          minNumberSelect:{
            paraVarPair:{
              value:'minNumber',
            },
            para:{
              value:this.minNumber,
              listSource:this.minSelectArr,
            },
            attr:{
            },
          },
        };
      },
      pvt_r2c3:function(){
        return {
          quotaText:{
            paraVarPair:{
            },
            para:{
              textData:'张起售,每人最多购买',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2c4:function(){
        return {
          maxNumberSelect:{
            paraVarPair:{
              value:'maxNumber',
            },
            para:{
              value:this.maxNumber,
              listSource:this.maxSelectArr,
            },
            attr:{
            },
          },
        };
      },
      pvt_r2c5:function(){
        return {
          quotaText2:{
            paraVarPair:{
            },
            para:{
              textData:'张',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          startTimeLabel:{
            paraVarPair:{
            },
            para:{
              textData:'票种时间:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r3c2:function(){
        return {
          startTimePicker:{
            paraVarPair:{
              datetime:'startTime'
            },
            para:{
              datetime:this.startTime,
            },
            attr:{
              placeholder:'票种开始时间',
              type:'datetime',
              clearable:false,
              minDate:this.minStartTime,
              format:'yyyy-MM-dd HH:mm',
            },
          },
        };
      },
      pvt_r3c3:function(){
        return {
          startTimeText:{
            paraVarPair:{
            },
            para:{
              textData:'至',
            },
            attr:{
              label:'div',
              textAlign:'center',
              height:'53px',
              color:'#999999',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r4c1:function(){
        return {
          endTimePicker:{
            paraVarPair:{
              datetime:'endTime'
            },
            para:{
              datetime:this.endTime,
            },
            attr:{
              placeholder:'票种结束时间',
              disabled:this.endTimeDisabled,
              clearable:false,
              type:'datetime',
              minDate:this.minEndTime,
              format:'yyyy-MM-dd HH:mm',
            },
          },
        };
      },
      pvt_r5c1:function(){
        return {
          saleTimeLabel:{
            paraVarPair:{
            },
            para:{
              textData:'售票时间:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r5c2:function(){
        return {
          saleType1Text:{
            paraVarPair:{
            },
            para:{
              textData:'活动结束前均可报名',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-arrow',
              iconIsRight:true,
            },
          },
          saleType2:{
            paraVarPair:{
              saleStartTime:'saleStartTime',
              saleEndTime:'saleEndTime'
            },
            para:{
              saleStartTime:this.saleStartTime,
              saleEndTime:this.saleEndTime,
              endTime:this.endTime
            },
            attr:{
              size:'medium'
            },
          },
        };
      },
      pvt_r6c1:function(){
        return {
          explainLabel:{
            paraVarPair:{
            },
            para:{
              textData:'票种说明:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r6c2:function(){
        return {
          explainInput:{
            paraVarPair:{
              text:'explain'
            },
            para:{
              text:this.explain,
            },
            attr:{
              placeholder:'请输入票种说明',
              isPlaceholder:false,
              type:'textarea',
              autosize:true,
            },
          },
        };
      },
      pvt_saleTypeDia:function(){
        return {
          saleTypeDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium'
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
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              $this.approval = $this.para.approval;
              $this.minNumber = this.para.minNumber;
              $this.maxNumber = this.para.maxNumber;
              $this.startTime = this.para.startTime;
              $this.endTime = this.para.endTime;
              $this.saleType = $this.para.saleType;
              $this.saleStartTime = this.para.saleStartTime;
              $this.saleEndTime = this.para.saleEndTime;
              $this.explain = this.para.explain;
              $this.minSelectArr = [];
              $this.maxSelectArr = [];
              $this.endTimeDisabled = true;
              $this.minStartTime = new Date();
              $this.minEndTime = new Date();
              let maxNumber = $this.maxNumber?$this.maxNumber:20;
              for(let i = 1;i <= maxNumber;i++){
                $this.minSelectArr.push(i);
              }
              for(let i = $this.minNumber;i <= 20;i++){
                $this.maxSelectArr.push(i);
              }
              if($this.startTime){
                $this.endTimeDisabled = false;
                if($this.startTime > new Date().getTime()){
                  $this.minEndTime = new Date($this.startTime);
                }
              }else{
                $this.endTimeDisabled = true;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              $this.showSubModule('startTimeText',false,function(){
                //显示子组件
                let refId = [
                  'approvalLabel','approvalText','approvalSwitch','quotaLabel','minNumberSelect','quotaText','maxNumberSelect','quotaText2','startTimeLabel','startTimePicker','endTimePicker','saleTimeLabel','explainLabel','explainInput'
                ];
                if($this.startTime){
                  refId.push('startTimeText');
                }
                if($this.saleType === 0){
                  refId.push('saleType1Text');
                }else{
                  refId.push('saleType2');
                }
                $this.showSubModule(refId,true,function(){
                  para.nStep = 'startSubModules';
                  if(++dbFlag === 2){
                    $this.startModule(successCallBack,errorCallBack);
                  }
                },para.errorCallBack);
              },para.errorCallBack);
              break;
            case 'startSubModules':
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
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
      minChange:function(){
        let $this = this;
        $this.maxSelectArr = [];
        for(let i = $this.minNumber;i <= 20;i++){
          $this.maxSelectArr.push(i);
        }
        $this.forceUpdateData(function(){
          $this.sm['maxNumberSelect'].startModule(function(){
          },function(error){console.log(error)})
        });
      },
      maxChange:function(){
        let $this = this;
        $this.minSelectArr = [];
        let maxNumber = $this.maxNumber?$this.maxNumber:20;
        for(let i = 1;i <= maxNumber;i++){
          $this.minSelectArr.push(i);
        }
        $this.forceUpdateData(function(){
          $this.sm['minNumberSelect'].startModule(function(){
          },function(error){console.log(error)})
        });
      },
      startTimeChange:function(){
        let $this = this;
        if($this.startTime){
          $this.endTimeDisabled = false;
        }
        $this.minEndTime = new Date($this.startTime);
        //修正所选的值
        let endChange;
        if($this.endTime && $this.startTime > $this.endTime){
          $this.endTime = $this.startTime + 5*60*1000;
          endChange = true;
        }
        if($this.startTime){
          $this.showSubModule('startTimeText',true,function(){
          },function(error){console.log(error)});
        }
        if(endChange){
          $this.forceUpdateData(function(){
            $this.sm['endTimePicker'].startModule(function(){
            },function(error){console.log(error)});
          });
        }
      },
      endTimeChange:function(){
        let $this = this;
        if($this.saleType === 0){
          $this.saleEndTime = $this.endTime;
        }
      },
      saleTypeMenu:function(){
        let $this = this;
        $this.showSubModule('saleTypeDia',true,function(){
          $this.sm['saleTypeDia'].startModule(function(){
          },function(error){console.log(error)})
        },function(error){console.log(error)})
      },
      saleTypeChange:function(data1){
        let $this = this;
        $this.saleType = data1;
        if($this.saleType === 0){
          $this.saleStartTime = null;
          $this.saleEndTime = $this.endTime?$this.endTime:null;
        }else{
          $this.saleStartTime = null;
          $this.saleEndTime = $this.endTime?$this.endTime:null;
        }
        let refId = $this.saleType === 0?'saleType1Text':'saleType2';
        $this.showSubModule(refId,true,function(){
          $this.sm[refId].startModule(function(){
          },function(error){console.log(error)})
        },function(error){console.log(error)})
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
          sm1:'approvalLabel',
          sm2:'approvalText',
          sm3:'approvalSwitch',
          sm4:'quotaLabel',
          sm5:'minNumberSelect',
          sm6:'quotaText',
          sm7:'maxNumberSelect',
          sm8:'quotaText2',
          sm9:'startTimeLabel',
          sm10:'startTimePicker',
          sm11:'startTimeText',
          sm12:'endTimePicker',
          sm13:'saleTimeLabel',
          sm14:'saleType1Text',
          sm15:'saleType2',
          sm16:'explainLabel',
          sm17:'explainInput'
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
                para.nStep = 'startModule_approvalLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_approvalLabel':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_approvalText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_approvalText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_approvalSwitch';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_approvalSwitch':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_quotaLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_quotaLabel':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_minNumberSelect';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_minNumberSelect':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_quotaText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_quotaText':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_maxNumberSelect';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_maxNumberSelect':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_quotaText2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_quotaText2':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_startTimeLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_startTimeLabel':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_startTimePicker';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_startTimePicker':
              $this.sm[ref.sm10].startModule(function(){
                para.nStep = 'startModule_startTimeText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_startTimeText':
              $this.sm[ref.sm11].startModule(function(){
                para.nStep = 'startModule_endTimePicker';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_endTimePicker':
              $this.sm[ref.sm12].startModule(function(){
                para.nStep = 'startModule_saleTimeLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_saleTimeLabel':
              $this.sm[ref.sm13].startModule(function(){
                para.nStep = 'startModule_saleType1Text';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_saleType1Text':
              $this.sm[ref.sm14].startModule(function(){
                para.nStep = 'startModule_saleType2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_saleType2':
              $this.sm[ref.sm15].startModule(function(){
                para.nStep = 'startModule_explainLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_explainLabel':
              $this.sm[ref.sm16].startModule(function(){
                para.nStep = 'startModule_explainInput';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_explainInput':
              $this.sm[ref.sm17].startModule(function(){
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
      minNumberSelect_dataModifyEvent:function(){
        this.minChange();
      },
      maxNumberSelect_dataModifyEvent:function(){
        this.maxChange();
      },
      startTimePicker_dataModifyEvent:function(){
        this.startTimeChange();
      },
      endTimePicker_dataModifyEvent:function(){
        this.endTimeChange();
      },
      saleType1Text_textClickEvent:function(){
        this.saleTypeMenu();
      },
      saleType2_showTypeDiaEvent:function(){
        this.saleTypeMenu();
      },
      saleTypeDia_typeChangeEvent:function(type){
        this.saleTypeChange(type);
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbTicketOtherInfoSetting_container {
  }
  .mcbTicketOtherInfoSetting_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbTicketOtherInfoSetting_col {
    display:flex;
    flex-direction:column;
  }
  .mcbTicketOtherInfoSetting_col_mcbTicketOtherInfoSettingWindow_size_medium {
    width:@mcbTicketOtherInfoSetting-mcbTicketOtherInfoSettingWindow-medium-width;
  }
  .mcbTicketOtherInfoSetting_col_r1c1_size_medium {
    width:@mcbTicketOtherInfoSetting-r1c1-medium-width;
    height:@mcbTicketOtherInfoSetting-r1c1-medium-height;
    padding:@mcbTicketOtherInfoSetting-r1c1-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r1c1 {
    border-style:@mcbTicketOtherInfoSetting-r1c1-border-style;
    border-width:@mcbTicketOtherInfoSetting-r1c1-border-width;
    border-color:mix(@mcbTicketOtherInfoSetting-r1c1-border-color,#fff,@mcbTicketOtherInfoSetting-r1c1-hover-border-color-opacity);
  }
  .mcbTicketOtherInfoSetting_col_r1c2_size_medium {
    width:@mcbTicketOtherInfoSetting-r1c2-medium-width;
    height:@mcbTicketOtherInfoSetting-r1c2-medium-height;
  }
  .mcbTicketOtherInfoSetting_col_r1c2 {
    border-style:@mcbTicketOtherInfoSetting-r1c2-border-style;
    border-width:@mcbTicketOtherInfoSetting-r1c2-border-width;
    border-color:mix(@mcbTicketOtherInfoSetting-r1c2-border-color,#fff,@mcbTicketOtherInfoSetting-r1c2-hover-border-color-opacity);
  }
  .mcbTicketOtherInfoSetting_col_r1c3_size_medium {
    width:@mcbTicketOtherInfoSetting-r1c3-medium-width;
    height:@mcbTicketOtherInfoSetting-r1c3-medium-height;
    padding:@mcbTicketOtherInfoSetting-r1c3-medium-padding;
    justify-content:@mcbTicketOtherInfoSetting-r1c3-medium-vertical-position;
    align-items:@mcbTicketOtherInfoSetting-r1c3-medium-horizontal-position;
  }
  .mcbTicketOtherInfoSetting_col_r1c3 {
    border-style:@mcbTicketOtherInfoSetting-r1c3-border-style;
    border-width:@mcbTicketOtherInfoSetting-r1c3-border-width;
    border-color:mix(@mcbTicketOtherInfoSetting-r1c3-border-color,#fff,@mcbTicketOtherInfoSetting-r1c3-hover-border-color-opacity);
  }
  .mcbTicketOtherInfoSetting_col_r2c1_size_medium {
    width:@mcbTicketOtherInfoSetting-r2c1-medium-width;
    height:@mcbTicketOtherInfoSetting-r2c1-medium-height;
    padding:@mcbTicketOtherInfoSetting-r2c1-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r2c1 {
    border-color:mix(@mcbTicketOtherInfoSetting-r2c1-border-color,#fff,@mcbTicketOtherInfoSetting-r2c1-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r2c1-border-style;
    border-width:@mcbTicketOtherInfoSetting-r2c1-border-width;
  }
  .mcbTicketOtherInfoSetting_col_r2c2_size_medium {
    width:@mcbTicketOtherInfoSetting-r2c2-medium-width;
    height:@mcbTicketOtherInfoSetting-r2c2-medium-height;
  }
  .mcbTicketOtherInfoSetting_col_r2c2 {
    border-color:mix(@mcbTicketOtherInfoSetting-r2c2-border-color,#fff,@mcbTicketOtherInfoSetting-r2c2-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r2c2-border-style;
    border-width:@mcbTicketOtherInfoSetting-r2c2-border-width;
    justify-content:center;
  }
  .mcbTicketOtherInfoSetting_col_r2c3_size_medium {
    width:@mcbTicketOtherInfoSetting-r2c3-medium-width;
    height:@mcbTicketOtherInfoSetting-r2c3-medium-height;
  }
  .mcbTicketOtherInfoSetting_col_r2c3 {
    border-color:mix(@mcbTicketOtherInfoSetting-r2c3-border-color,#fff,@mcbTicketOtherInfoSetting-r2c3-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r2c3-border-style;
    border-width:@mcbTicketOtherInfoSetting-r2c3-border-width;
  }
  .mcbTicketOtherInfoSetting_col_r2c4_size_medium {
    width:@mcbTicketOtherInfoSetting-r2c4-medium-width;
    height:@mcbTicketOtherInfoSetting-r2c4-medium-height;
  }
  .mcbTicketOtherInfoSetting_col_r2c4 {
    border-color:mix(@mcbTicketOtherInfoSetting-r2c4-border-color,#fff,@mcbTicketOtherInfoSetting-r2c4-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r2c4-border-style;
    border-width:@mcbTicketOtherInfoSetting-r2c4-border-width;
    justify-content:center;
  }
  .mcbTicketOtherInfoSetting_col_r2c5_size_medium {
    width:@mcbTicketOtherInfoSetting-r2c5-medium-width;
    height:@mcbTicketOtherInfoSetting-r2c5-medium-height;
    padding:@mcbTicketOtherInfoSetting-r2c5-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r2c5 {
    border-color:mix(@mcbTicketOtherInfoSetting-r2c5-border-color,#fff,@mcbTicketOtherInfoSetting-r2c5-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r2c5-border-style;
    border-width:@mcbTicketOtherInfoSetting-r2c5-border-width;
  }
  .mcbTicketOtherInfoSetting_col_r3c1_size_medium {
    width:@mcbTicketOtherInfoSetting-r3c1-medium-width;
    height:@mcbTicketOtherInfoSetting-r3c1-medium-height;
    margin:@mcbTicketOtherInfoSetting-r3c1-medium-margin;
    padding:@mcbTicketOtherInfoSetting-r3c1-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r3c1 {
    border-color:mix(@mcbTicketOtherInfoSetting-r3c1-border-color,#fff,@mcbTicketOtherInfoSetting-r3c1-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r3c1-border-style;
    border-width:@mcbTicketOtherInfoSetting-r3c1-border-width;
  }
  .mcbTicketOtherInfoSetting_col_r3c2_size_medium {
    width:@mcbTicketOtherInfoSetting-r3c2-medium-width;
    height:@mcbTicketOtherInfoSetting-r3c2-medium-height;
    margin:@mcbTicketOtherInfoSetting-r3c2-medium-margin;
  }
  .mcbTicketOtherInfoSetting_col_r3c2 {
    border-color:mix(@mcbTicketOtherInfoSetting-r3c2-border-color,#fff,@mcbTicketOtherInfoSetting-r3c2-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r3c2-border-style;
    border-width:@mcbTicketOtherInfoSetting-r3c2-border-width;
    justify-content:center;
  }
  .mcbTicketOtherInfoSetting_col_r3c3_size_medium {
    width:@mcbTicketOtherInfoSetting-r3c3-medium-width;
    height:@mcbTicketOtherInfoSetting-r3c3-medium-height;
    margin:@mcbTicketOtherInfoSetting-r3c3-medium-margin;
    padding:@mcbTicketOtherInfoSetting-r3c3-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r3c3 {
    border-color:mix(@mcbTicketOtherInfoSetting-r3c3-border-color,#fff,@mcbTicketOtherInfoSetting-r3c3-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r3c3-border-style;
    border-width:@mcbTicketOtherInfoSetting-r3c3-border-width;
  }
  .mcbTicketOtherInfoSetting_col_r4c1_size_medium {
    width:@mcbTicketOtherInfoSetting-r4c1-medium-width;
    height:@mcbTicketOtherInfoSetting-r4c1-medium-height;
    margin:@mcbTicketOtherInfoSetting-r4c1-medium-margin;
    padding:@mcbTicketOtherInfoSetting-r4c1-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r4c1 {
    border-color:mix(@mcbTicketOtherInfoSetting-r4c1-border-color,#fff,@mcbTicketOtherInfoSetting-r4c1-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r4c1-border-style;
    border-width:@mcbTicketOtherInfoSetting-r4c1-border-width;
    justify-content:center;
  }
  .mcbTicketOtherInfoSetting_col_r5c1_size_medium {
    width:@mcbTicketOtherInfoSetting-r5c1-medium-width;
    margin:@mcbTicketOtherInfoSetting-r5c1-medium-margin;
    padding:@mcbTicketOtherInfoSetting-r5c1-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r5c1 {
    border-color:mix(@mcbTicketOtherInfoSetting-r5c1-border-color,#fff,@mcbTicketOtherInfoSetting-r5c1-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r5c1-border-style;
    border-width:@mcbTicketOtherInfoSetting-r5c1-border-width;
  }
  .mcbTicketOtherInfoSetting_col_r5c2_size_medium {
    width:@mcbTicketOtherInfoSetting-r5c2-medium-width;
    margin:@mcbTicketOtherInfoSetting-r5c2-medium-margin;
    padding:@mcbTicketOtherInfoSetting-r5c2-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r5c2 {
    border-color:mix(@mcbTicketOtherInfoSetting-r5c2-border-color,#fff,@mcbTicketOtherInfoSetting-r5c2-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r5c2-border-style;
    border-width:@mcbTicketOtherInfoSetting-r5c2-border-width;
  }
  .mcbTicketOtherInfoSetting_col_r6c1_size_medium {
    width:@mcbTicketOtherInfoSetting-r6c1-medium-width;
    margin:@mcbTicketOtherInfoSetting-r6c1-medium-margin;
    padding:@mcbTicketOtherInfoSetting-r6c1-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r6c1 {
    border-color:mix(@mcbTicketOtherInfoSetting-r6c1-border-color,#fff,@mcbTicketOtherInfoSetting-r6c1-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r6c1-border-style;
    border-width:@mcbTicketOtherInfoSetting-r6c1-border-width;
  }
  .mcbTicketOtherInfoSetting_col_r6c2_size_medium {
    width:@mcbTicketOtherInfoSetting-r6c2-medium-width;
    margin:@mcbTicketOtherInfoSetting-r6c2-medium-margin;
    padding:@mcbTicketOtherInfoSetting-r6c2-medium-padding;
  }
  .mcbTicketOtherInfoSetting_col_r6c2 {
    border-color:mix(@mcbTicketOtherInfoSetting-r6c2-border-color,#fff,@mcbTicketOtherInfoSetting-r6c2-hover-border-color-opacity);
    border-style:@mcbTicketOtherInfoSetting-r6c2-border-style;
    border-width:@mcbTicketOtherInfoSetting-r6c2-border-width;
  }
  .mcbTicketOtherInfoSetting_col_saleTypeDia_size_medium {
    width:@mcbTicketOtherInfoSetting-saleTypeDia-medium-width;
    height:@mcbTicketOtherInfoSetting-saleTypeDia-medium-height;
  }
  .mcbTicketOtherInfoSetting_dialog {
    position:fixed;
  }
</style>
