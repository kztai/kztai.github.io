<template>
    <div v-show="pvt_win.isShow.backMan_main_customerManageWindo"
         :class="{backMan_main_customerManage_container:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_backMan_main_customerManageWindo:true,backMan_main_customerManage_col_backMan_main_customerManageWindo_size_large:attr.size==='large',backMan_main_customerManage_col_backMan_main_customerManageWindo_size_medium:attr.size==='medium',backMan_main_customerManage_col_backMan_main_customerManageWindo_size_small:attr.size==='small',backMan_main_customerManage_col_backMan_main_customerManageWindo_size_min:attr.size==='min',backMan_main_customerManage_col_backMan_main_customerManageWindo_checked:pvt_win.isChecked.backMan_main_customerManageWindo,backMan_main_customerManage_col_backMan_main_customerManageWindo_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_customerManageWindo">

        <div class="backMan_main_customerManage_row backMan_main_customerManage_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r1c1:true,backMan_main_customerManage_col_r1c1_size_large:attr.size==='large',backMan_main_customerManage_col_r1c1_size_medium:attr.size==='medium',backMan_main_customerManage_col_r1c1_size_small:attr.size==='small',backMan_main_customerManage_col_r1c1_size_min:attr.size==='min',backMan_main_customerManage_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_customerManage_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1">

                <lm1a-button
                        ref="addBtn"
                        refId="addBtn"
                        v-show="pvt_isShow.r1c1 === 'addBtn'"
                        :paraVarPair="pvt_r1c1.addBtn.paraVarPair"
                        :para="pvt_r1c1.addBtn.para"
                        :attr="pvt_r1c1.addBtn.attr">
                </lm1a-button>
            </div>
            <div v-show="pvt_win.isShow.r1c2"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r1c2:true,backMan_main_customerManage_col_r1c2_size_large:attr.size==='large',backMan_main_customerManage_col_r1c2_size_medium:attr.size==='medium',backMan_main_customerManage_col_r1c2_size_small:attr.size==='small',backMan_main_customerManage_col_r1c2_size_min:attr.size==='min',backMan_main_customerManage_col_r1c2_checked:pvt_win.isChecked.r1c2,backMan_main_customerManage_col_r1c2_disable:attr.disabled}"
                 :style="pvt_win.style.r1c2">

                <lm1a-button
                        ref="templateBtn"
                        refId="templateBtn"
                        v-show="pvt_isShow.r1c2 === 'templateBtn'"
                        :paraVarPair="pvt_r1c2.templateBtn.paraVarPair"
                        :para="pvt_r1c2.templateBtn.para"
                        :attr="pvt_r1c2.templateBtn.attr">
                </lm1a-button>
            </div>
            <div v-show="pvt_win.isShow.r1c3"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r1c3:true,backMan_main_customerManage_col_r1c3_size_large:attr.size==='large',backMan_main_customerManage_col_r1c3_size_medium:attr.size==='medium',backMan_main_customerManage_col_r1c3_size_small:attr.size==='small',backMan_main_customerManage_col_r1c3_size_min:attr.size==='min',backMan_main_customerManage_col_r1c3_checked:pvt_win.isChecked.r1c3,backMan_main_customerManage_col_r1c3_disable:attr.disabled}"
                 :style="pvt_win.style.r1c3">

                <lm1a-button
                        ref="sendBtn"
                        refId="sendBtn"
                        v-show="pvt_isShow.r1c3 === 'sendBtn'"
                        :paraVarPair="pvt_r1c3.sendBtn.paraVarPair"
                        :para="pvt_r1c3.sendBtn.para"
                        :attr="pvt_r1c3.sendBtn.attr">
                </lm1a-button>
            </div>
            <div v-show="pvt_win.isShow.r1c4"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r1c4:true,backMan_main_customerManage_col_r1c4_size_large:attr.size==='large',backMan_main_customerManage_col_r1c4_size_medium:attr.size==='medium',backMan_main_customerManage_col_r1c4_size_small:attr.size==='small',backMan_main_customerManage_col_r1c4_size_min:attr.size==='min',backMan_main_customerManage_col_r1c4_checked:pvt_win.isChecked.r1c4,backMan_main_customerManage_col_r1c4_disable:attr.disabled}"
                 :style="pvt_win.style.r1c4">

            </div>
            <div v-show="pvt_win.isShow.r1c5"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r1c5:true,backMan_main_customerManage_col_r1c5_size_large:attr.size==='large',backMan_main_customerManage_col_r1c5_size_medium:attr.size==='medium',backMan_main_customerManage_col_r1c5_size_small:attr.size==='small',backMan_main_customerManage_col_r1c5_size_min:attr.size==='min',backMan_main_customerManage_col_r1c5_checked:pvt_win.isChecked.r1c5,backMan_main_customerManage_col_r1c5_disable:attr.disabled}"
                 :style="pvt_win.style.r1c5">

                <lm1a-button
                        ref="excelBtn"
                        refId="excelBtn"
                        v-show="pvt_isShow.r1c5 === 'excelBtn'"
                        :paraVarPair="pvt_r1c5.excelBtn.paraVarPair"
                        :para="pvt_r1c5.excelBtn.para"
                        :attr="pvt_r1c5.excelBtn.attr">
                </lm1a-button>
            </div>
            <div v-show="pvt_win.isShow.r1c6"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r1c6:true,backMan_main_customerManage_col_r1c6_size_large:attr.size==='large',backMan_main_customerManage_col_r1c6_size_medium:attr.size==='medium',backMan_main_customerManage_col_r1c6_size_small:attr.size==='small',backMan_main_customerManage_col_r1c6_size_min:attr.size==='min',backMan_main_customerManage_col_r1c6_checked:pvt_win.isChecked.r1c6,backMan_main_customerManage_col_r1c6_disable:attr.disabled}"
                 :style="pvt_win.style.r1c6">

                <lm1a-link-text
                        ref="statisticBtn"
                        refId="statisticBtn"
                        v-show="pvt_isShow.r1c6 === 'statisticBtn'"
                        :paraVarPair="pvt_r1c6.statisticBtn.paraVarPair"
                        :para="pvt_r1c6.statisticBtn.para"
                        :attr="pvt_r1c6.statisticBtn.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_customerManage_row backMan_main_customerManage_row_row1">
            <div v-show="pvt_win.isShow.r2c1"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r2c1:true,backMan_main_customerManage_col_r2c1_size_large:attr.size==='large',backMan_main_customerManage_col_r2c1_size_medium:attr.size==='medium',backMan_main_customerManage_col_r2c1_size_small:attr.size==='small',backMan_main_customerManage_col_r2c1_size_min:attr.size==='min',backMan_main_customerManage_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_customerManage_col_r2c1_disable:attr.disabled}"
                 :style="pvt_win.style.r2c1">

                <lm1a-checkbox
                        ref="checkbox"
                        refId="checkbox"
                        v-show="pvt_isShow.r2c1 === 'checkbox'"
                        :paraVarPair="pvt_r2c1.checkbox.paraVarPair"
                        :para="pvt_r2c1.checkbox.para"
                        :attr="pvt_r2c1.checkbox.attr">
                </lm1a-checkbox>
            </div>
            <div v-show="pvt_win.isShow.r2c2"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r2c2:true,backMan_main_customerManage_col_r2c2_size_large:attr.size==='large',backMan_main_customerManage_col_r2c2_size_medium:attr.size==='medium',backMan_main_customerManage_col_r2c2_size_small:attr.size==='small',backMan_main_customerManage_col_r2c2_size_min:attr.size==='min',backMan_main_customerManage_col_r2c2_checked:pvt_win.isChecked.r2c2,backMan_main_customerManage_col_r2c2_disable:attr.disabled}"
                 :style="pvt_win.style.r2c2">

                <lm1a-link-text
                        ref="title2"
                        refId="title2"
                        v-show="pvt_isShow.r2c2 === 'title2'"
                        :paraVarPair="pvt_r2c2.title2.paraVarPair"
                        :para="pvt_r2c2.title2.para"
                        :attr="pvt_r2c2.title2.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c3"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r2c3:true,backMan_main_customerManage_col_r2c3_size_large:attr.size==='large',backMan_main_customerManage_col_r2c3_size_medium:attr.size==='medium',backMan_main_customerManage_col_r2c3_size_small:attr.size==='small',backMan_main_customerManage_col_r2c3_size_min:attr.size==='min',backMan_main_customerManage_col_r2c3_checked:pvt_win.isChecked.r2c3,backMan_main_customerManage_col_r2c3_disable:attr.disabled}"
                 :style="pvt_win.style.r2c3">

                <lm1a-link-text
                        ref="title3"
                        refId="title3"
                        v-show="pvt_isShow.r2c3 === 'title3'"
                        :paraVarPair="pvt_r2c3.title3.paraVarPair"
                        :para="pvt_r2c3.title3.para"
                        :attr="pvt_r2c3.title3.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c4"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r2c4:true,backMan_main_customerManage_col_r2c4_size_large:attr.size==='large',backMan_main_customerManage_col_r2c4_size_medium:attr.size==='medium',backMan_main_customerManage_col_r2c4_size_small:attr.size==='small',backMan_main_customerManage_col_r2c4_size_min:attr.size==='min',backMan_main_customerManage_col_r2c4_checked:pvt_win.isChecked.r2c4,backMan_main_customerManage_col_r2c4_disable:attr.disabled}"
                 :style="pvt_win.style.r2c4">

                <lm1a-link-text
                        ref="title4"
                        refId="title4"
                        v-show="pvt_isShow.r2c4 === 'title4'"
                        :paraVarPair="pvt_r2c4.title4.paraVarPair"
                        :para="pvt_r2c4.title4.para"
                        :attr="pvt_r2c4.title4.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c5"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r2c5:true,backMan_main_customerManage_col_r2c5_size_large:attr.size==='large',backMan_main_customerManage_col_r2c5_size_medium:attr.size==='medium',backMan_main_customerManage_col_r2c5_size_small:attr.size==='small',backMan_main_customerManage_col_r2c5_size_min:attr.size==='min',backMan_main_customerManage_col_r2c5_checked:pvt_win.isChecked.r2c5,backMan_main_customerManage_col_r2c5_disable:attr.disabled}"
                 :style="pvt_win.style.r2c5">

                <lm1a-link-text
                        ref="title5"
                        refId="title5"
                        v-show="pvt_isShow.r2c5 === 'title5'"
                        :paraVarPair="pvt_r2c5.title5.paraVarPair"
                        :para="pvt_r2c5.title5.para"
                        :attr="pvt_r2c5.title5.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c6"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r2c6:true,backMan_main_customerManage_col_r2c6_size_large:attr.size==='large',backMan_main_customerManage_col_r2c6_size_medium:attr.size==='medium',backMan_main_customerManage_col_r2c6_size_small:attr.size==='small',backMan_main_customerManage_col_r2c6_size_min:attr.size==='min',backMan_main_customerManage_col_r2c6_checked:pvt_win.isChecked.r2c6,backMan_main_customerManage_col_r2c6_disable:attr.disabled}"
                 :style="pvt_win.style.r2c6">

                <lm1a-link-text
                        ref="title6"
                        refId="title6"
                        v-show="pvt_isShow.r2c6 === 'title6'"
                        :paraVarPair="pvt_r2c6.title6.paraVarPair"
                        :para="pvt_r2c6.title6.para"
                        :attr="pvt_r2c6.title6.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c7"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r2c7:true,backMan_main_customerManage_col_r2c7_size_large:attr.size==='large',backMan_main_customerManage_col_r2c7_size_medium:attr.size==='medium',backMan_main_customerManage_col_r2c7_size_small:attr.size==='small',backMan_main_customerManage_col_r2c7_size_min:attr.size==='min',backMan_main_customerManage_col_r2c7_checked:pvt_win.isChecked.r2c7,backMan_main_customerManage_col_r2c7_disable:attr.disabled}"
                 :style="pvt_win.style.r2c7">

                <lm1a-link-text
                        ref="title7"
                        refId="title7"
                        v-show="pvt_isShow.r2c7 === 'title7'"
                        :paraVarPair="pvt_r2c7.title7.paraVarPair"
                        :para="pvt_r2c7.title7.para"
                        :attr="pvt_r2c7.title7.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c8"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r2c8:true,backMan_main_customerManage_col_r2c8_size_large:attr.size==='large',backMan_main_customerManage_col_r2c8_size_medium:attr.size==='medium',backMan_main_customerManage_col_r2c8_size_small:attr.size==='small',backMan_main_customerManage_col_r2c8_size_min:attr.size==='min',backMan_main_customerManage_col_r2c8_checked:pvt_win.isChecked.r2c8,backMan_main_customerManage_col_r2c8_disable:attr.disabled}"
                 :style="pvt_win.style.r2c8">

                <lm1a-link-text
                        ref="title8"
                        refId="title8"
                        v-show="pvt_isShow.r2c8 === 'title8'"
                        :paraVarPair="pvt_r2c8.title8.paraVarPair"
                        :para="pvt_r2c8.title8.para"
                        :attr="pvt_r2c8.title8.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c9"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r2c9:true,backMan_main_customerManage_col_r2c9_size_large:attr.size==='large',backMan_main_customerManage_col_r2c9_size_medium:attr.size==='medium',backMan_main_customerManage_col_r2c9_size_small:attr.size==='small',backMan_main_customerManage_col_r2c9_size_min:attr.size==='min',backMan_main_customerManage_col_r2c9_checked:pvt_win.isChecked.r2c9,backMan_main_customerManage_col_r2c9_disable:attr.disabled}"
                 :style="pvt_win.style.r2c9">

                <lm1a-link-text
                        ref="title9"
                        refId="title9"
                        v-show="pvt_isShow.r2c9 === 'title9'"
                        :paraVarPair="pvt_r2c9.title9.paraVarPair"
                        :para="pvt_r2c9.title9.para"
                        :attr="pvt_r2c9.title9.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_customerManage_row backMan_main_customerManage_row_row2">
            <div v-show="pvt_win.isShow.r3c1"
                 :class="{backMan_main_customerManage_col:true,backMan_main_customerManage_col_r3c1:true,backMan_main_customerManage_col_r3c1_size_large:attr.size==='large',backMan_main_customerManage_col_r3c1_size_medium:attr.size==='medium',backMan_main_customerManage_col_r3c1_size_small:attr.size==='small',backMan_main_customerManage_col_r3c1_size_min:attr.size==='min',backMan_main_customerManage_col_r3c1_checked:pvt_win.isChecked.r3c1,backMan_main_customerManage_col_r3c1_disable:attr.disabled}"
                 :style="pvt_win.style.r3c1">
                <back-man_main_customer-man-row
                        ref="tableRow"
                        refId="tableRow"
                        v-show="pvt_isShow.r3c1 === 'tableRow'"
                        :paraVarPair="pvt_r3c1.tableRow.paraVarPair"
                        v-for="(item, index) in pvt_r3c1.tableRow.forData"
                        :key="index"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </back-man_main_customer-man-row>
                <lm1a-link-text
                        ref="noDataText"
                        refId="noDataText"
                        v-show="pvt_isShow.r3c1 === 'noDataText'"
                        :paraVarPair="pvt_r3c1.noDataText.paraVarPair"
                        :para="pvt_r3c1.noDataText.para"
                        :attr="pvt_r3c1.noDataText.attr">
                </lm1a-link-text>
            </div>
        </div>

        <div :class="{backMan_main_customerManage_mask:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_QRCodeDiamask:true,backMan_main_customerManage_col_QRCodeDiamask_size_large:attr.size==='large',backMan_main_customerManage_col_QRCodeDiamask_size_medium:attr.size==='medium',backMan_main_customerManage_col_QRCodeDiamask_size_small:attr.size==='small',backMan_main_customerManage_col_QRCodeDiamask_size_min:attr.size==='min',backMan_main_customerManage_col_QRCodeDiamask_checked:pvt_win.isChecked.QRCodeDiamask,backMan_main_customerManage_col_QRCodeDiamask_disable:attr.disabled}"
             v-if="pvt_isShow.QRCodeDia === 'QRCodeModule'">
            <div :class="{backMan_main_customerManage_dialog:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_QRCodeDia:true,backMan_main_customerManage_col_QRCodeDia_size_large:attr.size==='large',backMan_main_customerManage_col_QRCodeDia_size_medium:attr.size==='medium',backMan_main_customerManage_col_QRCodeDia_size_small:attr.size==='small',backMan_main_customerManage_col_QRCodeDia_size_min:attr.size==='min',backMan_main_customerManage_col_QRCodeDia_checked:pvt_win.isChecked.QRCodeDia,backMan_main_customerManage_col_QRCodeDia_disable:attr.disabled}">
                <back-man_main_customer-man_-q-r-code-d
                        ref="QRCodeModule"
                        refId="QRCodeModule"
                        :paraVarPair="pvt_QRCodeDia.QRCodeModule.paraVarPair"
                        :para="pvt_QRCodeDia.QRCodeModule.para"
                        :attr="pvt_QRCodeDia.QRCodeModule.attr">
                </back-man_main_customer-man_-q-r-code-d>
            </div>
        </div>
        <div :class="{backMan_main_customerManage_mask:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_modifyInfoDiamask:true,backMan_main_customerManage_col_modifyInfoDiamask_size_large:attr.size==='large',backMan_main_customerManage_col_modifyInfoDiamask_size_medium:attr.size==='medium',backMan_main_customerManage_col_modifyInfoDiamask_size_small:attr.size==='small',backMan_main_customerManage_col_modifyInfoDiamask_size_min:attr.size==='min',backMan_main_customerManage_col_modifyInfoDiamask_checked:pvt_win.isChecked.modifyInfoDiamask,backMan_main_customerManage_col_modifyInfoDiamask_disable:attr.disabled}"
             v-if="pvt_isShow.modifyInfoDia === 'modifyInfoModule'">
            <div :class="{backMan_main_customerManage_dialog:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_modifyInfoDia:true,backMan_main_customerManage_col_modifyInfoDia_size_large:attr.size==='large',backMan_main_customerManage_col_modifyInfoDia_size_medium:attr.size==='medium',backMan_main_customerManage_col_modifyInfoDia_size_small:attr.size==='small',backMan_main_customerManage_col_modifyInfoDia_size_min:attr.size==='min',backMan_main_customerManage_col_modifyInfoDia_checked:pvt_win.isChecked.modifyInfoDia,backMan_main_customerManage_col_modifyInfoDia_disable:attr.disabled}">
                <back-man_main_customer-man_modify-i
                        ref="modifyInfoModule"
                        refId="modifyInfoModule"
                        :paraVarPair="pvt_modifyInfoDia.modifyInfoModule.paraVarPair"
                        :para="pvt_modifyInfoDia.modifyInfoModule.para"
                        :attr="pvt_modifyInfoDia.modifyInfoModule.attr">
                </back-man_main_customer-man_modify-i>
            </div>
        </div>
        <div :class="{backMan_main_customerManage_mask:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_templateDiamask:true,backMan_main_customerManage_col_templateDiamask_size_large:attr.size==='large',backMan_main_customerManage_col_templateDiamask_size_medium:attr.size==='medium',backMan_main_customerManage_col_templateDiamask_size_small:attr.size==='small',backMan_main_customerManage_col_templateDiamask_size_min:attr.size==='min',backMan_main_customerManage_col_templateDiamask_checked:pvt_win.isChecked.templateDiamask,backMan_main_customerManage_col_templateDiamask_disable:attr.disabled}"
             v-if="pvt_isShow.templateDia === 'templateModule'">
            <div :class="{backMan_main_customerManage_dialog:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_templateDia:true,backMan_main_customerManage_col_templateDia_size_large:attr.size==='large',backMan_main_customerManage_col_templateDia_size_medium:attr.size==='medium',backMan_main_customerManage_col_templateDia_size_small:attr.size==='small',backMan_main_customerManage_col_templateDia_size_min:attr.size==='min',backMan_main_customerManage_col_templateDia_checked:pvt_win.isChecked.templateDia,backMan_main_customerManage_col_templateDia_disable:attr.disabled}">
                <back-man_main_customer-man_templat
                        ref="templateModule"
                        refId="templateModule"
                        :paraVarPair="pvt_templateDia.templateModule.paraVarPair"
                        :para="pvt_templateDia.templateModule.para"
                        :attr="pvt_templateDia.templateModule.attr">
                </back-man_main_customer-man_templat>
            </div>
        </div>
        <div :class="{backMan_main_customerManage_mask:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_showInfoDiamask:true,backMan_main_customerManage_col_showInfoDiamask_size_large:attr.size==='large',backMan_main_customerManage_col_showInfoDiamask_size_medium:attr.size==='medium',backMan_main_customerManage_col_showInfoDiamask_size_small:attr.size==='small',backMan_main_customerManage_col_showInfoDiamask_size_min:attr.size==='min',backMan_main_customerManage_col_showInfoDiamask_checked:pvt_win.isChecked.showInfoDiamask,backMan_main_customerManage_col_showInfoDiamask_disable:attr.disabled}"
             v-if="pvt_isShow.showInfoDia === 'showInfoModule'">
            <div :class="{backMan_main_customerManage_dialog:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_showInfoDia:true,backMan_main_customerManage_col_showInfoDia_size_large:attr.size==='large',backMan_main_customerManage_col_showInfoDia_size_medium:attr.size==='medium',backMan_main_customerManage_col_showInfoDia_size_small:attr.size==='small',backMan_main_customerManage_col_showInfoDia_size_min:attr.size==='min',backMan_main_customerManage_col_showInfoDia_checked:pvt_win.isChecked.showInfoDia,backMan_main_customerManage_col_showInfoDia_disable:attr.disabled}">
                <back-man_main_customer-man_show-inf
                        ref="showInfoModule"
                        refId="showInfoModule"
                        :paraVarPair="pvt_showInfoDia.showInfoModule.paraVarPair"
                        :para="pvt_showInfoDia.showInfoModule.para"
                        :attr="pvt_showInfoDia.showInfoModule.attr">
                </back-man_main_customer-man_show-inf>
            </div>
        </div>
        <div :class="{backMan_main_customerManage_mask:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_deleteDiamask:true,backMan_main_customerManage_col_deleteDiamask_size_large:attr.size==='large',backMan_main_customerManage_col_deleteDiamask_size_medium:attr.size==='medium',backMan_main_customerManage_col_deleteDiamask_size_small:attr.size==='small',backMan_main_customerManage_col_deleteDiamask_size_min:attr.size==='min',backMan_main_customerManage_col_deleteDiamask_checked:pvt_win.isChecked.deleteDiamask,backMan_main_customerManage_col_deleteDiamask_disable:attr.disabled}"
             v-if="pvt_isShow.deleteDia === 'deleteModule'">
            <div :class="{backMan_main_customerManage_dialog:true,backMan_main_customerManage_col:true,backMan_main_customerManage_col_deleteDia:true,backMan_main_customerManage_col_deleteDia_size_large:attr.size==='large',backMan_main_customerManage_col_deleteDia_size_medium:attr.size==='medium',backMan_main_customerManage_col_deleteDia_size_small:attr.size==='small',backMan_main_customerManage_col_deleteDia_size_min:attr.size==='min',backMan_main_customerManage_col_deleteDia_checked:pvt_win.isChecked.deleteDia,backMan_main_customerManage_col_deleteDia_disable:attr.disabled}">
                <back-man_main_raffle-s_delete-dia
                        ref="deleteModule"
                        refId="deleteModule"
                        :paraVarPair="pvt_deleteDia.deleteModule.paraVarPair"
                        :para="pvt_deleteDia.deleteModule.para"
                        :attr="pvt_deleteDia.deleteModule.attr">
                </back-man_main_raffle-s_delete-dia>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import backMan_main_customerManRow from './customerManRow.vue';
    import backMan_main_customerMan_QRCodeD from './customerManageDialog/QRCodeDialog.vue';
    import backMan_main_customerMan_modifyI from './customerManageDialog/modifyInfoDialog.vue';
    import backMan_main_customerMan_templat from './customerManageDialog/templateDialog.vue';
    import backMan_main_customerMan_showInf from './customerManageDialog/showInfoDialog.vue';
    import backMan_main_raffleS_deleteDia from '../commonDialog/deleteTipDialog.vue';

    export default {
        components: {
            backMan_main_customerManRow,
            backMan_main_customerMan_QRCodeD,
            backMan_main_customerMan_modifyI,
            backMan_main_customerMan_templat,
            backMan_main_customerMan_showInf,
            backMan_main_raffleS_deleteDia
        },
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
            number: Number,
        },
        data: function () {
            return {
                mac: mac.mac,
                pvt_subModuleMap: {
                    vessel: ['r1c1', 'r1c2', 'r1c3', 'r1c5', 'r1c6', 'r2c1', 'r2c2', 'r2c3', 'r2c4', 'r2c5', 'r2c6', 'r2c7', 'r2c8', 'r2c9', 'r3c1', 'r3c1', 'QRCodeDia', 'modifyInfoDia', 'templateDia', 'showInfoDia', 'deleteDia'],
                    subModule: ['addBtn', 'templateBtn', 'sendBtn', 'excelBtn', 'statisticBtn', 'checkbox', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7', 'title8', 'title9', 'tableRow', 'noDataText', 'QRCodeModule', 'modifyInfoModule', 'templateModule', 'showInfoModule', 'deleteModule'],
                },
                pvt_isShow: {
                    r1c1: null,
                    r1c2: null,
                    r1c3: null,
                    r1c5: null,
                    r1c6: null,
                    r2c1: null,
                    r2c2: null,
                    r2c3: null,
                    r2c4: null,
                    r2c5: null,
                    r2c6: null,
                    r2c7: null,
                    r2c8: null,
                    r2c9: null,
                    r3c1: null,
                    QRCodeDia: null,
                    modifyInfoDia: null,
                    templateDia: null,
                    showInfoDia: null,
                    deleteDia: null,
                },
                pvt_win: {
                    isShow: {
                        backMan_main_customerManageWindo: true,
                        r1c1: true,
                        r1c2: true,
                        r1c3: true,
                        r1c4: true,
                        r1c5: true,
                        r1c6: true,
                        r2c1: true,
                        r2c2: true,
                        r2c3: true,
                        r2c4: true,
                        r2c5: true,
                        r2c6: true,
                        r2c7: true,
                        r2c8: true,
                        r2c9: true,
                        r3c1: true,
                    },
                    isChecked: {
                        backMan_main_customerManageWindo: false,
                        r1c1: false,
                        r1c2: false,
                        r1c3: false,
                        r1c4: false,
                        r1c5: false,
                        r1c6: false,
                        r2c1: false,
                        r2c2: false,
                        r2c3: false,
                        r2c4: false,
                        r2c5: false,
                        r2c6: false,
                        r2c7: false,
                        r2c8: false,
                        r2c9: false,
                        r3c1: false,
                    },
                    style: {
                        backMan_main_customerManageWindo: null,
                        r1c1: null,
                        r1c2: null,
                        r1c3: null,
                        r1c4: null,
                        r1c5: null,
                        r1c6: null,
                        r2c1: null,
                        r2c2: null,
                        r2c3: null,
                        r2c4: null,
                        r2c5: null,
                        r2c6: null,
                        r2c7: null,
                        r2c8: null,
                        r2c9: null,
                        r3c1: null,
                    },
                },
                pvt_eventPortInput: ['inviteEvent'],

                statisticText: null,
                checkAll: [],
                customerIdArr: [],
                checkedArr: [],
                sizeArr: [],
                customerId: null,
                activityId: null,
                deleteType: null,
            };
        },
        watch: {},
        computed: {
            pvt_r1c1: function () {
                return {
                    addBtn: {
                        paraVarPair: {},
                        para: {
                            name: ['添加', 'el-icon-circle-plus-outline'],
                        },
                        attr: {
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r1c2: function () {
                return {
                    templateBtn: {
                        paraVarPair: {},
                        para: {
                            name: ['短信模板设置', 'el-icon-setting'],
                        },
                        attr: {
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r1c3: function () {
                return {
                    sendBtn: {
                        paraVarPair: {},
                        para: {
                            name: ['发送短信', 'el-icon-message'],
                        },
                        attr: {
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r1c5: function () {
                return {
                    excelBtn: {
                        paraVarPair: {},
                        para: {
                            name: ['导出Excel'],
                        },
                        attr: {
                            size: 'small',
                        },
                    },
                };
            },
            pvt_r1c6: function () {
                return {
                    statisticBtn: {
                        paraVarPair: {
                            textData: 'statisticText',
                        },
                        para: {
                            textData: this.statisticText,
                        },
                        attr: {
                            label: 'div',
                            color: '#B0B2B6',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c1: function () {
                return {
                    checkbox: {
                        paraVarPair: {
                            checkData: 'checkAll',
                        },
                        para: {
                            checkData: this.checkAll,
                        },
                        attr: {
                            checkboxArr: [{label: 1, text: '全选'}],
                        },
                    },
                };
            },
            pvt_r2c2: function () {
                return {
                    title2: {
                        paraVarPair: {},
                        para: {
                            textData: '手机号码',
                        },
                        attr: {
                            label: 'div',
                            color: '#606266',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c3: function () {
                return {
                    title3: {
                        paraVarPair: {},
                        para: {
                            textData: '姓名',
                        },
                        attr: {
                            label: 'div',
                            color: '#606266',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c4: function () {
                return {
                    title4: {
                        paraVarPair: {},
                        para: {
                            textData: '公司名称',
                        },
                        attr: {
                            label: 'div',
                            color: '#606266',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c5: function () {
                return {
                    title5: {
                        paraVarPair: {},
                        para: {
                            textData: '签到时间',
                        },
                        attr: {
                            label: 'div',
                            color: '#606266',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c6: function () {
                return {
                    title6: {
                        paraVarPair: {},
                        para: {
                            textData: '备注',
                        },
                        attr: {
                            label: 'div',
                            color: '#606266',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c7: function () {
                return {
                    title7: {
                        paraVarPair: {},
                        para: {
                            textData: '状态',
                        },
                        attr: {
                            label: 'div',
                            color: '#606266',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c8: function () {
                return {
                    title8: {
                        paraVarPair: {},
                        para: {
                            textData: '短信发送次数',
                        },
                        attr: {
                            label: 'div',
                            color: '#606266',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r2c9: function () {
                return {
                    title9: {
                        paraVarPair: {},
                        para: {
                            textData: '操作',
                        },
                        attr: {
                            label: 'div',
                            color: '#606266',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_r3c1: function () {
                let loopModule = {
                    tableRow: {
                        para: {
                            customerId: this.customerIdArr,
                            checked: this.checkedArr
                        },
                        attr: {
                            size: this.sizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    tableRow: {
                        paraVarPair: {
                            customerId: 'customerIdArr',
                            checked: 'checkedArr',
                        },
                        forData: forData.tableRow,
                    },
                    noDataText: {
                        paraVarPair: {},
                        para: {
                            textData: '无数据',
                        },
                        attr: {
                            label: 'div',
                            fontWeight: 400,
                            height: '30px',
                            color: '#000',
                            fontSize: '14px',
                            textAlign: 'center'
                        },
                    },
                };
            },
            pvt_QRCodeDia: function () {
                return {
                    QRCodeModule: {
                        paraVarPair: {
                            customerId: 'customerId',
                        },
                        para: {
                            customerId: this.customerId,
                        },
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_modifyInfoDia: function () {
                return {
                    modifyInfoModule: {
                        paraVarPair: {
                            customerId: 'customerId',
                        },
                        para: {
                            customerId: this.customerId,
                        },
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_templateDia: function () {
                return {
                    templateModule: {
                        paraVarPair: {
                            activityId: 'activityId',
                        },
                        para: {
                            activityId: this.activityId,
                        },
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_showInfoDia: function () {
                return {
                    showInfoModule: {
                        paraVarPair: {
                            customerId: 'customerId',
                        },
                        para: {
                            customerId: this.customerId,
                        },
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_deleteDia: function () {
                return {
                    deleteModule: {
                        paraVarPair: {
                            type: 'deleteType',
                        },
                        para: {
                            type: this.deleteType,
                        },
                        attr: {
                            size: 'medium',
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
                            // 初始化数据
                            $this.statisticText = '';
                            $this.checkAll = [];
                            $this.customerIdArr = [];
                            $this.sizeArr = [];
                            $this.checkedArr = [];
                            $this.customerId = null;
                            $this.activityId = 1;
                            $this.deleteType = 3;
                            //查用户表
                            parentRecord = null;
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.customer.time] = [];
                            tableVariable = [{
                                $table: $this.mac.tb.customer,
                                $arrField: [$this.mac.fd.customer.time],
                                $arrValue: null,
                                $arrSubTab: []
                            }];
                            condition = null;
                            $this.sys.api.recordQuery(tableVariable, condition, function () {
                                var idArr = tableVariable[0].$arrValue;
                                if (idArr.length > 0) {
                                    dbData = {};
                                    tableVariable = null;
                                    parentRecord = null;
                                    record = {
                                        table: $this.mac.tb.customer,
                                        id: idArr,
                                        field: [$this.mac.fd.customer.time]
                                    };
                                    $this.sys.api.recordRead(tableVariable, parentRecord, record, dbData, function () {
                                        $this.customerIdArr = idArr;
                                        $this.sizeArr = new Array($this.customerIdArr.length).fill('medium');
                                        //0表示未选中，1表示选中
                                        $this.checkedArr = new Array($this.customerIdArr.length).fill(0);
                                        var num = 0;
                                        for (let i = 0; i < dbData[$this.mac.fd.customer.time].length; i++) {
                                            if (dbData[$this.mac.fd.customer.time][i]) {
                                                num++;
                                            }
                                        }
                                        $this.statisticText = '共' + $this.customerIdArr.length + '人，已签到' + num + '人';
                                        para.nStep = 'showModules';
                                        if (++dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack);
                                        }
                                    }, para.errorCallBack);
                                } else {
                                    $this.statisticText = '共0人，已签到0人';
                                    para.nStep = 'showModules';
                                    if (++dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack);
                                    }
                                }
                                ;
                            }, para.errorCallBack)
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = [
                                'addBtn', 'templateBtn', 'sendBtn', 'excelBtn', 'statisticBtn',
                                'checkbox', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7', 'title8', 'title9',
                            ];
                            if ($this.customerIdArr.length === 0) {
                                refId.push('noDataText');
                            } else {
                                refId.push('tableRow');
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'forceUpdateData';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'forceUpdateData':
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule_addBtn';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case 'startModule_addBtn':
                            //调用子组件的startModule
                            $this.sm['addBtn'].startModule(function () {
                                para.nStep = 'startModule_templateBtn';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_templateBtn':
                            $this.sm['templateBtn'].startModule(function () {
                                para.nStep = 'startModule_sendBtn';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_sendBtn':
                            $this.sm['sendBtn'].startModule(function () {
                                para.nStep = 'startModule_excelBtn';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_excelBtn':
                            $this.sm['excelBtn'].startModule(function () {
                                para.nStep = 'startModule_statistic';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_statistic':
                            $this.sm['statisticBtn'].startModule(function () {
                                para.nStep = 'startModule_title1';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_title1':
                            $this.sm['checkbox'].startModule(function () {
                                para.nStep = 'startModule_title2';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_title2':
                            $this.sm['title2'].startModule(function () {
                                para.nStep = 'startModule_title3';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_title3':
                            $this.sm['title3'].startModule(function () {
                                para.nStep = 'startModule_title4';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_title4':
                            $this.sm['title4'].startModule(function () {
                                para.nStep = 'startModule_title5';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_title5':
                            $this.sm['title5'].startModule(function () {
                                para.nStep = 'startModule_title6';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_title6':
                            $this.sm['title6'].startModule(function () {
                                para.nStep = 'startModule_title7';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_title7':
                            $this.sm['title7'].startModule(function () {
                                para.nStep = 'startModule_title8';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_title8':
                            $this.sm['title8'].startModule(function () {
                                para.nStep = 'startModule_title9';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_title9':
                            $this.sm['title9'].startModule(function () {
                                if ($this.customerIdArr.length === 0) {
                                    para.nStep = 'startModule_noDataText';
                                } else {
                                    para.nStep = 'startModule_tableRow';
                                }
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_tableRow':
                            // 循环组件，循环调用startModule
                            let arr = [];
                            for (let i = 0; i < $this.customerIdArr.length; i++) {
                                arr.push([para.successCallBack, para.errorCallBack]);
                            }
                            $this.callLoopModuleMethod('tableRow', 'startModule', arr, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_noDataText':
                            $this.sm['noDataText'].startModule(function () {
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
            addNewCustomer: function () {
                let $this = this;
                $this.customerId = null;
                //显示新增用户对话框
                $this.forceUpdateData(function () {
                    $this.showSubModule('modifyInfoModule', true, function () {
                        $this.sm['modifyInfoModule'].startModule(function () {
                        }, function (error) {
                            console.log(error)
                        });
                    }, function (error) {
                        console.log(error)
                    });
                });
            },
            showSMSTemplate: function () {
                let $this = this;
                //显示短信模板对话框
                $this.forceUpdateData(function () {
                    $this.showSubModule('templateModule', true, function () {
                        $this.sm['templateModule'].startModule(function () {
                        }, function (error) {
                            console.log(error)
                        });
                    }, function (error) {
                        console.log(error)
                    });
                });
            },
            invite: function () {
                this.invite_(function () {
                }, function (error) {
                    console.log(error)
                });
            },
            invite_: function (successCallBack, errorCallBack) {
                let $this = this;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                }
                let dbFlag;
                let tableVariable, dbData, parentRecord, record;

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            //判断是否有选中用户，需要发送短信
                            para.checkedArr = [];
                            for (let i = 0; i < $this.checkedArr.length; i++) {
                                if ($this.checkedArr[i] === 1) {
                                    para.checkedArr.push($this.customerIdArr[i]);
                                }
                            }
                            if (para.checkedArr.length === 0) {
                                para.nStep = 'end';
                            } else {
                                para.nStep = 'getTemplate';
                            }
                            ++dbFlag;
                            break;
                        case 'getTemplate':
                            //获取模板数据
                            tableVariable = null;
                            parentRecord = null;
                            record = {
                                table: $this.mac.tb.activity,
                                id: [$this.activityId],
                                field: [$this.mac.fd.activity.invite_template]
                            };
                            dbData = {};
                            $this.sys.api.recordRead(tableVariable, parentRecord, record, dbData, function () {
                                para.templateText = dbData[$this.mac.fd.activity.invite_template][0];
                                para.nStep = 'getCustomer';
                                if (++dbFlag === 2) {
                                    $this.invite_(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack)
                            break;
                        case 'getCustomer':
                            //获取用户数据
                            tableVariable = null;
                            parentRecord = null;
                            record = {
                                table: $this.mac.tb.customer,
                                id: para.checkedArr,
                                field: [
                                    $this.mac.fd.customer.mobile,
                                    $this.mac.fd.customer.number,
                                    $this.mac.fd.customer.sms_num
                                ]
                            };
                            dbData = {};
                            $this.sys.api.recordRead(tableVariable, parentRecord, record, dbData, function () {
                                para.mobileArr = [];
                                para.smsNumArr = [];
                                para.templateArr = [];
                                //需要把没电话的客户筛选掉
                                for (let i = 0; i < dbData[$this.mac.fd.customer.mobile].length; i++) {
                                    if (dbData[$this.mac.fd.customer.mobile][i]) {
                                        para.mobileArr.push(dbData[$this.mac.fd.customer.mobile][i]);
                                        para.smsNumArr.push(dbData[$this.mac.fd.customer.sms_num][i]);
                                        para.templateArr.push(para.templateText + 'http://raffle.zeropaas.com/dist_signIn/index.html??group=1&geneAddr=10&parent=%257B%2522geneAddr%2522:null,%2522server%2522:null,%2522geneSet%2522:6%257D&user=1&number=' + dbData[$this.mac.fd.customer.number][i] + '#/customerSignIn_terminal');
                                    }
                                }
                                if (para.mobileArr.length > 0) {
                                    para.nStep = 'invite';
                                } else {
                                    para.nStep = 'end';
                                }
                                if (++dbFlag === 2) {
                                    $this.invite_(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack)
                            break;
                        case 'invite':
                            $this.showTipText('短信已发送');
                            $this.ep.inviteEvent(para.mobileArr, para.templateArr, function (result) {
                                //获取发送结果 返回值固定套在一个数组中
                                result = result[0];
                                //修改数据
                                for (let i = 0; i < result.length; i++) {
                                    //0表示成功，1表示失败
                                    if (result[i] === 0) {
                                        para.smsNumArr[i] = para.smsNumArr[i] ? para.smsNumArr[i] + 1 : 1;
                                    } else {
                                        para.smsNumArr[i] = para.smsNumArr[i] ? para.smsNumArr[i] : 0;
                                    }
                                }
                                tableVariable = null;
                                parentRecord = null;
                                record = {
                                    table: $this.mac.tb.customer,
                                    id: para.checkedArr
                                };
                                dbData = {};
                                dbData[$this.mac.fd.customer.sms_num] = para.smsNumArr;
                                $this.sys.api.recordModify(tableVariable, parentRecord, record, dbData, function () {
                                    //上传数据
                                    tableVariable = [{
                                        $table: $this.mac.tb.customer,
                                        $arrField: [$this.mac.fd.customer.sms_num],
                                        $arrValue: para.checkedArr,
                                        $arrSubTab: []
                                    }];
                                    $this.sys.api.dataOutput(tableVariable, null, function () {
                                    }, function (error) {
                                        console.log(error)
                                    });
                                    para.nStep = 'refreshTable';
                                    if (++dbFlag === 2) {
                                        $this.invite_(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack);
                            }, para.errorCallBack);
                            break;
                        case 'refreshTable':
                            //刷新表格
                            //需要把选中的取消
                            // 循环组件，循环调用startModule
                            let arr = [];
                            $this.checkedArr = [];
                            for (let i = 0; i < $this.customerIdArr.length; i++) {
                                arr.push([function () {
                                }, function (error) {
                                    console.log(error)
                                }]);
                                $this.checkedArr.push(0);
                            }
                            $this.checkAll = [];
                            $this.forceUpdateData(function () {
                                $this.callLoopModuleMethod('tableRow', 'startModule', arr, function () {
                                    $this.sm['checkbox'].startModule(function () {
                                        para.nStep = 'end';
                                        if (++dbFlag === 2) {
                                            $this.invite_(successCallBack, errorCallBack);
                                        }
                                    }, function (error) {
                                        console.log(error)
                                    });
                                }, function (error) {
                                    console.log(error)
                                });
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
            exportFile: function () {
                let $this = this;
                if ($this.customerIdArr.length === 0) {
                    return;
                }
                var uri = 'data:application/vnd.ms-excel;base64,',
                    template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                    base64 = function (s) {
                        return window.btoa(unescape(encodeURIComponent(s)))
                    },
                    // 下面这段函数作用是：将template中的变量替换为需要的数据ctx的值
                    format = function (s, c) {
                        return s.replace(/{(\w+)}/g,
                            function (m, p) {
                                return c[p];
                            }
                        )
                    };
                // 获取表单的名字和表单查询的内容
                var ctx = {
                    worksheet: 'Worksheet',
                    table: '<tr><th>手机号码</th><th>姓名</th><th>公司名称</th><th>签到时间</th><th>备注</th><th>状态<\/th><th>短信发送次数</th><\/tr>'
                };
                //查找数据
                let dbData = {};
                let tableVariable = null;
                let parentRecord = null;
                let record = {
                    table: $this.mac.tb.customer,
                    id: $this.customerIdArr,
                    field: [
                        $this.mac.fd.customer.mobile,
                        $this.mac.fd.customer.name,
                        $this.mac.fd.customer.company,
                        $this.mac.fd.customer.time,
                        $this.mac.fd.customer.remark,
                        $this.mac.fd.customer.status,
                        $this.mac.fd.customer.sms_num
                    ]
                };
                $this.sys.api.recordRead(tableVariable, parentRecord, record, dbData, function () {
                    var tableText = '';
                    for (let i = 0; i < $this.customerIdArr.length; i++) {
                        var tableRow = '';
                        tableRow += '<th>' + dbData[$this.mac.fd.customer.mobile][i] + '</th>';
                        tableRow += '<th>' + dbData[$this.mac.fd.customer.name][i] + '</th>';
                        tableRow += '<th>' + (dbData[$this.mac.fd.customer.company][i] ? dbData[$this.mac.fd.customer.company][i] : '') + '</th>';
                        tableRow += '<th>' + (dbData[$this.mac.fd.customer.time][i] ? dbData[$this.mac.fd.customer.time][i] : '') + '</th>';
                        tableRow += '<th>' + (dbData[$this.mac.fd.customer.remark][i] ? dbData[$this.mac.fd.customer.remark][i] : '') + '</th>';
                        var status = dbData[$this.mac.fd.customer.status][i];
                        if (status === $this.mac.enum.customer.status.pending) {
                            status = '待审核';
                        } else if (status === $this.mac.enum.customer.status.approved) {
                            status = '已通过';
                        } else {
                            status = '已取消';
                        }
                        tableRow += '<th>' + status + '</th>';
                        tableRow += '<th>' + dbData[$this.mac.fd.customer.sms_num][i] + '</th>';
                        tableRow = '<tr>' + tableRow + '</tr>';
                        tableText += tableRow;
                    }
                    ctx.table += tableText;
                    // format()函数：通过格式操作使任意类型的数据转换成一个字符串
                    // base64()：进行编码
                    window.location.href = uri + base64(format(template, ctx));
                }, function (error) {
                    console.log(error)
                })
            },
            checkAllEvent: function () {
                let $this = this;
                //刷新表格
                // 循环组件，循环调用startModule
                let arr = [];
                $this.checkedArr = [];
                var checkValue = $this.checkAll.length === 0 ? 0 : 1;
                for (let i = 0; i < $this.customerIdArr.length; i++) {
                    arr.push([function () {
                    }, function (error) {
                        console.log(error)
                    }]);
                    $this.checkedArr.push(checkValue);
                }
                $this.forceUpdateData(function () {
                    $this.callLoopModuleMethod('tableRow', 'startModule', arr, function () {
                    }, function (error) {
                        console.log(error)
                    });
                });
            },
            showInfoDia: function (index) {
                let $this = this;
                $this.customerId = $this.customerIdArr[index];
                //显示用户信息对话框
                $this.forceUpdateData(function () {
                    $this.showSubModule('showInfoModule', true, function () {
                        $this.sm['showInfoModule'].startModule(function () {
                        }, function (error) {
                            console.log(error)
                        });
                    }, function (error) {
                        console.log(error)
                    });
                });
            },
            checkedChange: function (index, checked) {
                let $this = this;
                $this.checkedArr[index] = checked ? 1 : 0;
                //刷新显示全选的多选框
                var checkArr = [];
                for (let i = 0; i < $this.checkedArr.length; i++) {
                    if ($this.checkedArr[i] === 1) {
                        checkArr.push(i);
                    }
                }
                if (checkArr.length === $this.checkedArr.length) {
                    $this.checkAll = [1];
                } else {
                    $this.checkAll = [];
                }
                //刷新显示
                $this.forceUpdateData(function () {
                    $this.sm['checkbox'].startModule(function () {
                    }, function (error) {
                        console.log(error)
                    });
                });
            },
            showQRCode: function (index) {
                let $this = this;
                $this.customerId = $this.customerIdArr[index];
                //显示用户信息对话框
                $this.forceUpdateData(function () {
                    $this.showSubModule('QRCodeModule', true, function () {
                        $this.sm['QRCodeModule'].startModule(function () {
                        }, function (error) {
                            console.log(error)
                        });
                    }, function (error) {
                        console.log(error)
                    });
                });
            },
            showModifyDia: function (index) {
                let $this = this;
                $this.customerId = $this.customerIdArr[index];
                //显示用户信息对话框
                $this.forceUpdateData(function () {
                    $this.showSubModule('modifyInfoModule', true, function () {
                        $this.sm['modifyInfoModule'].startModule(function () {
                        }, function (error) {
                            console.log(error)
                        });
                    }, function (error) {
                        console.log(error)
                    });
                });
            },
            ShowdeleteMenu: function (index) {
                let $this = this;
                $this.customerId = $this.customerIdArr[index];
                //显示用户信息对话框
                $this.forceUpdateData(function () {
                    $this.showSubModule('deleteModule', true, function () {
                        $this.sm['deleteModule'].startModule(function () {
                        }, function (error) {
                            console.log(error)
                        });
                    }, function (error) {
                        console.log(error)
                    });
                });
            },
            dataChange: function (customerId) {
                let $this = this;
                //新增或修改
                var index = $this.customerIdArr.indexOf(customerId);
                if (index === -1) {
                    $this.customerIdArr.push(customerId);
                    $this.sizeArr.push('medium');
                    $this.checkedArr.push(0);
                }
                //刷新显示
                $this.tableRefresh(function () {
                }, function (error) {
                    console.log(error)
                })
            },
            confirmDelete: function () {
                //确认删除
                let $this = this;
                let tableVariable = null;
                let parentRecord = null;
                let record = {
                    table: $this.mac.tb.customer,
                    id: [$this.customerId]
                };
                $this.sys.api.recordDelete(tableVariable, parentRecord, record, function () {
                    //上传数据
                    tableVariable = [{
                        $table: $this.mac.tb.customer,
                        $arrField: null,
                        $arrValue: [$this.customerId],
                        $arrSubTab: []
                    }];
                    $this.sys.api.dataOutput(tableVariable, null, function () {
                    }, function (error) {
                        console.log(error)
                    });
                    //刷新表格以及统计文字
                    var index = $this.customerIdArr.indexOf($this.customerId);
                    $this.customerIdArr.splice(index, 1);
                    $this.sizeArr.splice(index, 1);
                    $this.checkedArr.splice(index, 1);
                    $this.showTipText('删除成功');
                    $this.tableRefresh(function () {
                    }, function (error) {
                        console.log(error)
                    })
                }, function (error) {
                    console.log(error)
                });
            },
            tableRefresh: function (successCallBack, errorCallBack) {
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
                            //判断是否需要修改全选的值
                            var checkArr = [];
                            for (let i = 0; i < $this.checkedArr.length; i++) {
                                if ($this.checkedArr[i] === 1) {
                                    checkArr.push(i);
                                }
                            }
                            if ($this.checkedArr.length === 0) {
                                $this.checkAll = [];
                            } else if (checkArr.length === $this.checkedArr.length) {
                                $this.checkAll = [1];
                            } else {
                                $this.checkAll = [];
                            }
                            //查获取统计数据
                            tableVariable = [{
                                $table: $this.mac.tb.customer,
                                $arrField: [$this.mac.fd.customer.time],
                                $arrValue: null,
                                $arrSubTab: []
                            }];
                            condition = null;
                            $this.sys.api.recordQuery(tableVariable, condition, function () {
                                var idArr = tableVariable[0].$arrValue;
                                if (idArr.length > 0) {
                                    dbData = {};
                                    tableVariable = null;
                                    parentRecord = null;
                                    record = {
                                        table: $this.mac.tb.customer,
                                        id: idArr,
                                        field: [$this.mac.fd.customer.time]
                                    };
                                    $this.sys.api.recordRead(tableVariable, parentRecord, record, dbData, function () {
                                        var num = 0;
                                        for (let i = 0; i < dbData[$this.mac.fd.customer.time].length; i++) {
                                            if (dbData[$this.mac.fd.customer.time][i]) {
                                                num++;
                                            }
                                        }
                                        $this.statisticText = '共' + $this.customerIdArr.length + '人，已签到' + num + '人';
                                        para.nStep = 'showModules';
                                        if (++dbFlag === 2) {
                                            $this.tableRefresh(successCallBack, errorCallBack);
                                        }
                                    }, para.errorCallBack);
                                } else {
                                    $this.statisticText = '共0人，已签到0人';
                                    para.nStep = 'showModules';
                                    if (++dbFlag === 2) {
                                        $this.tableRefresh(successCallBack, errorCallBack);
                                    }
                                }
                                ;
                            }, para.errorCallBack)
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId;
                            if ($this.customerIdArr.length === 0) {
                                refId = 'noDataText';
                            } else {
                                refId = 'tableRow';
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'forceUpdateData';
                                if (++dbFlag === 2) {
                                    $this.tableRefresh(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'forceUpdateData':
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule_checkbox';
                                if (++dbFlag === 2) {
                                    $this.tableRefresh(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case 'startModule_checkbox':
                            //调用子组件的startModule
                            $this.sm['checkbox'].startModule(function () {
                                para.nStep = 'startModule_sumText';
                                if (++dbFlag === 2) {
                                    $this.tableRefresh(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_sumText':
                            $this.sm['statisticBtn'].startModule(function () {
                                if ($this.customerIdArr.length === 0) {
                                    para.nStep = 'startModule_noDataText';
                                } else {
                                    para.nStep = 'startModule_tableRow';
                                }
                                if (++dbFlag === 2) {
                                    $this.tableRefresh(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_tableRow':
                            // 循环组件，循环调用startModule
                            let arr = [];
                            for (let i = 0; i < $this.customerIdArr.length; i++) {
                                arr.push([para.successCallBack, para.errorCallBack]);
                            }
                            $this.callLoopModuleMethod('tableRow', 'startModule', arr, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.tableRefresh(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule_noDataText':
                            $this.sm['noDataText'].startModule(function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.tableRefresh(successCallBack, errorCallBack);
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
            showTipText: function (text) {
                //显示一个提示信息
                var tipText = document.getElementById('tipText');
                if (tipText) {
                    tipText.remove();
                }
                //清空对象
                if (this.myTimeOut) {
                    window.clearTimeout(this.myTimeOut);
                }
                var div = document.createElement('div');
                div.id = "tipText";
                div.style = "display:inline-block;padding:12px 20px;background-color:#4C4C4C;font-size:12px;border-radius:4px;position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);z-index:2010";
                div.innerHTML = '<span style="color:#fff;">'
                    + '<i class="el-icon-success" style="color:#67C23A;margin-right:5px;"></i>' +
                    text +
                    '</span>';
                document.body.appendChild(div);
                this.myTimeOut = window.setTimeout(function () {
                    var tipText = document.getElementById('tipText');
                    tipText.remove();
                }, 2000);
            },
            addBtn_buttonClickEvent: function () {
                this.addNewCustomer();
            },
            templateBtn_buttonClickEvent: function () {
                this.showSMSTemplate();
            },
            sendBtn_buttonClickEvent: function () {
                this.invite();
            },
            excelBtn_buttonClickEvent: function () {
                this.exportFile();
            },
            checkbox_dataModifyEvent: function () {
                this.checkAllEvent();
            },
            tableRow_showInfoEvent: function (index) {
                this.showInfoDia(index);
            },
            tableRow_checkedEvent: function (index, checked) {
                this.checkedChange(index, checked);
            },
            tableRow_showQRCodeEvent: function (index) {
                this.showQRCode(index);
            },
            tableRow_showModifyDiaEvent: function (index) {
                this.showModifyDia(index);
            },
            tableRow_deleteCustomerEvent: function (index) {
                this.ShowdeleteMenu(index);
            },
            modifyInfoModule_dataChangeEvent: function (customerId) {
                this.dataChange(customerId);
            },
            deleteModule_confirmDeleteEvent: function () {
                this.confirmDelete();
            },
        },
    };
</script>
<style lang="scss" scoped>
    .backMan_main_customerManage_container {
        width: 100%;
        height: 100%;
    }

    .backMan_main_customerManage_mask {
        display: flex;
        position: fixed !important;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
        z-index: 2000;
    }

    .backMan_main_customerManage_dialog {
        position: absolute !important;
        /*left:0;*/
        /*top:0;*/
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
    }

    .backMan_main_customerManage_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_customerManage_row {
        display: flex;
    }

    .backMan_main_customerManage_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .backMan_main_customerManage_col_backMan_main_customerManageWindo_size_medium {
        width: $backMan_main_customerManage-backMan_main_customerManageWindo-medium-width;
        height: $backMan_main_customerManage-backMan_main_customerManageWindo-medium-height;
        padding: $backMan_main_customerManage-backMan_main_customerManageWindo-medium-padding;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r1c1_size_medium {
        justify-content: $backMan_main_customerManage-r1c1-medium-vertical-position;
        align-items: $backMan_main_customerManage-r1c1-medium-horizontal-position;
        width: 80px;
        height: 60px;
    }

    .backMan_main_customerManage_col_r1c2_size_medium {
        justify-content: $backMan_main_customerManage-r1c2-medium-vertical-position;
        align-items: $backMan_main_customerManage-r1c2-medium-horizontal-position;
        width: 170px;
        height: 60px;
    }

    .backMan_main_customerManage_col_r1c3_size_medium {
        justify-content: $backMan_main_customerManage-r1c3-medium-vertical-position;
        align-items: $backMan_main_customerManage-r1c3-medium-horizontal-position;
        width: 120px;
        height: 60px;
    }

    .backMan_main_customerManage_col_r1c4_size_medium {
        width: $backMan_main_customerManage-r1c4-medium-width;
        height: 60px;
        flex-grow: 1;
    }

    .backMan_main_customerManage_col_r1c5_size_medium {
        justify-content: $backMan_main_customerManage-r1c5-medium-vertical-position;
        align-items: $backMan_main_customerManage-r1c5-medium-horizontal-position;
        width: 120px;
        height: 60px;
    }

    .backMan_main_customerManage_col_r1c6_size_medium {
        width: $backMan_main_customerManage-r1c6-medium-width;
        justify-content: $backMan_main_customerManage-r1c6-medium-vertical-position;
        align-items: $backMan_main_customerManage-r1c6-medium-horizontal-position;
        height: 60px;
    }

    .backMan_main_customerManage_col_r2c1_size_medium {
        line-height: $backMan_main_customerManage-r2c1-medium-line-height;
        height: $backMan_main_customerManage-r2c1-medium-height;
        align-items: $backMan_main_customerManage-r2c1-medium-horizontal-position;
        width: 8%;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r2c1 {
        border-color: mix($backMan_main_customerManage-r2c1-border-color, #fff, $backMan_main_customerManage-r2c1-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r2c1-border-style;
        border-width: $backMan_main_customerManage-r2c1-border-width;
        border-radius: $backMan_main_customerManage-r2c1-border-radius;
        background-color: #F4F4F4;
    }

    .backMan_main_customerManage_col_r2c2_size_medium {
        line-height: $backMan_main_customerManage-r2c2-medium-line-height;
        height: $backMan_main_customerManage-r2c2-medium-height;
        align-items: $backMan_main_customerManage-r2c2-medium-horizontal-position;
        justify-content: $backMan_main_customerManage-r2c2-medium-vertical-position;
        width: 12%;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r2c2 {
        border-color: mix($backMan_main_customerManage-r2c2-border-color, #fff, $backMan_main_customerManage-r2c2-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r2c2-border-style;
        border-width: $backMan_main_customerManage-r2c2-border-width;
        border-radius: $backMan_main_customerManage-r2c2-border-radius;
        background-color: #F4F4F4;
    }

    .backMan_main_customerManage_col_r2c3_size_medium {

        line-height: $backMan_main_customerManage-r2c3-medium-line-height;
        height: $backMan_main_customerManage-r2c3-medium-height;
        align-items: $backMan_main_customerManage-r2c3-medium-horizontal-position;
        justify-content: $backMan_main_customerManage-r2c3-medium-vertical-position;
        width: 6%;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r2c3 {
        border-color: mix($backMan_main_customerManage-r2c3-border-color, #fff, $backMan_main_customerManage-r2c3-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r2c3-border-style;
        border-width: $backMan_main_customerManage-r2c3-border-width;
        border-radius: $backMan_main_customerManage-r2c3-border-radius;
        background-color: #F4F4F4;
    }

    .backMan_main_customerManage_col_r2c4_size_medium {
        line-height: $backMan_main_customerManage-r2c4-medium-line-height;
        height: $backMan_main_customerManage-r2c4-medium-height;
        align-items: $backMan_main_customerManage-r2c4-medium-horizontal-position;
        justify-content: $backMan_main_customerManage-r2c4-medium-vertical-position;
        width: 15%;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r2c4 {
        border-color: mix($backMan_main_customerManage-r2c4-border-color, #fff, $backMan_main_customerManage-r2c4-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r2c4-border-style;
        border-width: $backMan_main_customerManage-r2c4-border-width;
        border-radius: $backMan_main_customerManage-r2c4-border-radius;
        background-color: #F4F4F4;
    }

    .backMan_main_customerManage_col_r2c5_size_medium {
        line-height: $backMan_main_customerManage-r2c5-medium-line-height;
        height: $backMan_main_customerManage-r2c5-medium-height;
        align-items: $backMan_main_customerManage-r2c5-medium-horizontal-position;
        justify-content: $backMan_main_customerManage-r2c5-medium-vertical-position;
        width: 10%;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r2c5 {
        border-color: mix($backMan_main_customerManage-r2c5-border-color, #fff, $backMan_main_customerManage-r2c5-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r2c5-border-style;
        border-width: $backMan_main_customerManage-r2c5-border-width;
        border-radius: $backMan_main_customerManage-r2c5-border-radius;
        background-color: #F4F4F4;
    }

    .backMan_main_customerManage_col_r2c6_size_medium {
        line-height: $backMan_main_customerManage-r2c6-medium-line-height;
        height: $backMan_main_customerManage-r2c6-medium-height;
        align-items: $backMan_main_customerManage-r2c6-medium-horizontal-position;
        justify-content: $backMan_main_customerManage-r2c6-medium-vertical-position;
        width: 13%;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r2c6 {
        border-color: mix($backMan_main_customerManage-r2c6-border-color, #fff, $backMan_main_customerManage-r2c6-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r2c6-border-style;
        border-width: $backMan_main_customerManage-r2c6-border-width;
        border-radius: $backMan_main_customerManage-r2c6-border-radius;
        background-color: #F4F4F4;
    }

    .backMan_main_customerManage_col_r2c7_size_medium {
        line-height: $backMan_main_customerManage-r2c7-medium-line-height;
        height: $backMan_main_customerManage-r2c7-medium-height;
        align-items: $backMan_main_customerManage-r2c7-medium-horizontal-position;
        justify-content: $backMan_main_customerManage-r2c7-medium-vertical-position;
        width: 8%;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r2c7 {
        border-color: mix($backMan_main_customerManage-r2c7-border-color, #fff, $backMan_main_customerManage-r2c7-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r2c7-border-style;
        border-width: $backMan_main_customerManage-r2c7-border-width;
        border-radius: $backMan_main_customerManage-r2c7-border-radius;
        background-color: #F4F4F4;
    }

    .backMan_main_customerManage_col_r2c8_size_medium {
        line-height: $backMan_main_customerManage-r2c8-medium-line-height;
        height: $backMan_main_customerManage-r2c8-medium-height;
        align-items: $backMan_main_customerManage-r2c8-medium-horizontal-position;
        justify-content: $backMan_main_customerManage-r2c8-medium-vertical-position;
        width: 10%;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r2c8 {
        border-color: mix($backMan_main_customerManage-r2c8-border-color, #fff, $backMan_main_customerManage-r2c8-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r2c8-border-style;
        border-width: $backMan_main_customerManage-r2c8-border-width;
        border-radius: $backMan_main_customerManage-r2c8-border-radius;
        background-color: #F4F4F4;
    }

    .backMan_main_customerManage_col_r2c9_size_medium {
        line-height: $backMan_main_customerManage-r2c9-medium-line-height;
        height: $backMan_main_customerManage-r2c9-medium-height;
        align-items: $backMan_main_customerManage-r2c9-medium-horizontal-position;
        justify-content: $backMan_main_customerManage-r2c9-medium-vertical-position;
        width: 18%;
        overflow: hidden;
        box-sizing: border-box;
    }

    .backMan_main_customerManage_col_r2c9 {
        border-color: mix($backMan_main_customerManage-r2c9-border-color, #fff, $backMan_main_customerManage-r2c9-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r2c9-border-style;
        border-width: $backMan_main_customerManage-r2c9-border-width;
        border-radius: $backMan_main_customerManage-r2c9-border-radius;
        background-color: #F4F4F4;
    }

    .backMan_main_customerManage_row_row2 {
        height: calc(100% - 95px);
        align-items: flex-start;
    }

    .backMan_main_customerManage_col_r3c1_size_medium {
        width: $backMan_main_customerManage-r3c1-medium-width;
        box-sizing: border-box;
        max-height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .backMan_main_customerManage_col_r3c1 {
        border-color: mix($backMan_main_customerManage-r3c1-border-color, #fff, $backMan_main_customerManage-r3c1-hover-border-color-opacity);
        border-style: $backMan_main_customerManage-r3c1-border-style;
        border-width: $backMan_main_customerManage-r3c1-border-width;
        border-radius: $backMan_main_customerManage-r3c1-border-radius;
    }

    .backMan_main_customerManage_col_QRCodeDia_size_medium {
        width: 500px;
        height: 420px;
        background-color: #FFFFFF;
        border-color: #D4D4D4;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .backMan_main_customerManage_col_modifyInfoDia_size_medium {
        width: $backMan_main_customerManage-modifyInfoDia-medium-width;
        height: 600px;
        background-color: #FFFFFF;
        border-color: #D4D4D4;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .backMan_main_customerManage_col_templateDia_size_medium {
        width: $backMan_main_customerManage-templateDia-medium-width;
        height: 250px;
        background-color: #FFFFFF;
        border-color: #D4D4D4;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .backMan_main_customerManage_col_showInfoDia_size_medium {
        height: $backMan_main_customerManage-showInfoDia-medium-height;
        width: 450px;
        background-color: #FFFFFF;
        border-color: #D4D4D4;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .backMan_main_customerManage_col_deleteDia_size_medium {
        width: $backMan_main_customerManage-deleteDia-medium-width;
        height: $backMan_main_customerManage-deleteDia-medium-height;
        background-color: #FFFFFF;
        border-color: #D4D4D4;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
    }
</style>
