<template>
    <div v-show="pvt_win.isShow.luckyDrawShowWindow"
         :class="{luckyDrawShow_container:true,luckyDrawShow_col:true,luckyDrawShow_col_luckyDrawShowWindow:true,luckyDrawShow_col_luckyDrawShowWindow_size_large:attr.size==='large',luckyDrawShow_col_luckyDrawShowWindow_size_medium:attr.size==='medium',luckyDrawShow_col_luckyDrawShowWindow_size_small:attr.size==='small',luckyDrawShow_col_luckyDrawShowWindow_size_min:attr.size==='min',luckyDrawShow_col_luckyDrawShowWindow_checked:pvt_win.isChecked.luckyDrawShowWindow,luckyDrawShow_col_luckyDrawShowWindow_disable:attr.disabled}"
         :style="pvt_win.style.luckyDrawShowWindow">

        <div class="luckyDrawShow_row luckyDrawShow_row_row0">
            <div v-show="pvt_win.isShow.firstPrizeDiv"
                 :class="{luckyDrawShow_col:true,luckyDrawShow_col_firstPrizeDiv:true,luckyDrawShow_col_firstPrizeDiv_size_large:attr.size==='large',luckyDrawShow_col_firstPrizeDiv_size_medium:attr.size==='medium',luckyDrawShow_col_firstPrizeDiv_size_small:attr.size==='small',luckyDrawShow_col_firstPrizeDiv_size_min:attr.size==='min',luckyDrawShow_col_firstPrizeDiv_checked:pvt_win.isChecked.firstPrizeDiv,luckyDrawShow_col_firstPrizeDiv_disable:attr.disabled}"
                 :style="pvt_win.style.firstPrizeDiv">

                <div class="luckyDrawShow_row luckyDrawShow_row_row3">
                    <div v-show="pvt_win.isShow.firstTitleDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_firstTitleDiv:true,luckyDrawShow_col_firstTitleDiv_size_large:attr.size==='large',luckyDrawShow_col_firstTitleDiv_size_medium:attr.size==='medium',luckyDrawShow_col_firstTitleDiv_size_small:attr.size==='small',luckyDrawShow_col_firstTitleDiv_size_min:attr.size==='min',luckyDrawShow_col_firstTitleDiv_checked:pvt_win.isChecked.firstTitleDiv,luckyDrawShow_col_firstTitleDiv_disable:attr.disabled}"
                         :style="pvt_win.style.firstTitleDiv">

                        <lm1a-link-text
                                ref="firstPrize"
                                refId="firstPrize"
                                v-show="pvt_isShow.firstTitleDiv === 'firstPrize'"
                                :paraVarPair="pvt_firstTitleDiv.firstPrize.paraVarPair"
                                :para="pvt_firstTitleDiv.firstPrize.para"
                                :attr="pvt_firstTitleDiv.firstPrize.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="luckyDrawShow_row luckyDrawShow_row_row13">
                    <div v-show="pvt_win.isShow.fixedDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_fixedDiv:true,luckyDrawShow_col_fixedDiv_size_large:attr.size==='large',luckyDrawShow_col_fixedDiv_size_medium:attr.size==='medium',luckyDrawShow_col_fixedDiv_size_small:attr.size==='small',luckyDrawShow_col_fixedDiv_size_min:attr.size==='min',luckyDrawShow_col_fixedDiv_checked:pvt_win.isChecked.fixedDiv,luckyDrawShow_col_fixedDiv_disable:attr.disabled}"
                         :style="pvt_win.style.fixedDiv">

                    </div>
                    <div v-show="pvt_win.isShow.userOneImageDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userOneImageDiv:true,luckyDrawShow_col_userOneImageDiv_size_large:attr.size==='large',luckyDrawShow_col_userOneImageDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userOneImageDiv_size_small:attr.size==='small',luckyDrawShow_col_userOneImageDiv_size_min:attr.size==='min',luckyDrawShow_col_userOneImageDiv_checked:pvt_win.isChecked.userOneImageDiv,luckyDrawShow_col_userOneImageDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userOneImageDiv">

                        <lm1a-image
                                ref="userOneImage"
                                refId="userOneImage"
                                v-show="pvt_isShow.userOneImageDiv === 'userOneImage'"
                                :paraVarPair="pvt_userOneImageDiv.userOneImage.paraVarPair"
                                :para="pvt_userOneImageDiv.userOneImage.para"
                                :attr="pvt_userOneImageDiv.userOneImage.attr">
                        </lm1a-image>
                    </div>
                    <div v-show="pvt_win.isShow.userOneNameDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userOneNameDiv:true,luckyDrawShow_col_userOneNameDiv_size_large:attr.size==='large',luckyDrawShow_col_userOneNameDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userOneNameDiv_size_small:attr.size==='small',luckyDrawShow_col_userOneNameDiv_size_min:attr.size==='min',luckyDrawShow_col_userOneNameDiv_checked:pvt_win.isChecked.userOneNameDiv,luckyDrawShow_col_userOneNameDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userOneNameDiv">

                        <lm1a-link-text
                                ref="userOneName"
                                refId="userOneName"
                                v-show="pvt_isShow.userOneNameDiv === 'userOneName'"
                                :paraVarPair="pvt_userOneNameDiv.userOneName.paraVarPair"
                                :para="pvt_userOneNameDiv.userOneName.para"
                                :attr="pvt_userOneNameDiv.userOneName.attr">
                        </lm1a-link-text>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckyDrawShow_row luckyDrawShow_row_row1">
            <div v-show="pvt_win.isShow.secondPrizeDiv"
                 :class="{luckyDrawShow_col:true,luckyDrawShow_col_secondPrizeDiv:true,luckyDrawShow_col_secondPrizeDiv_size_large:attr.size==='large',luckyDrawShow_col_secondPrizeDiv_size_medium:attr.size==='medium',luckyDrawShow_col_secondPrizeDiv_size_small:attr.size==='small',luckyDrawShow_col_secondPrizeDiv_size_min:attr.size==='min',luckyDrawShow_col_secondPrizeDiv_checked:pvt_win.isChecked.secondPrizeDiv,luckyDrawShow_col_secondPrizeDiv_disable:attr.disabled}"
                 :style="pvt_win.style.secondPrizeDiv">

                <div class="luckyDrawShow_row luckyDrawShow_row_row5">
                    <div v-show="pvt_win.isShow.secondTitleDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_secondTitleDiv:true,luckyDrawShow_col_secondTitleDiv_size_large:attr.size==='large',luckyDrawShow_col_secondTitleDiv_size_medium:attr.size==='medium',luckyDrawShow_col_secondTitleDiv_size_small:attr.size==='small',luckyDrawShow_col_secondTitleDiv_size_min:attr.size==='min',luckyDrawShow_col_secondTitleDiv_checked:pvt_win.isChecked.secondTitleDiv,luckyDrawShow_col_secondTitleDiv_disable:attr.disabled}"
                         :style="pvt_win.style.secondTitleDiv">

                        <lm1a-link-text
                                ref="secondPrize"
                                refId="secondPrize"
                                v-show="pvt_isShow.secondTitleDiv === 'secondPrize'"
                                :paraVarPair="pvt_secondTitleDiv.secondPrize.paraVarPair"
                                :para="pvt_secondTitleDiv.secondPrize.para"
                                :attr="pvt_secondTitleDiv.secondPrize.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="luckyDrawShow_row luckyDrawShow_row_row14">
                    <div v-show="pvt_win.isShow.fixed2Div"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_fixed2Div:true,luckyDrawShow_col_fixed2Div_size_large:attr.size==='large',luckyDrawShow_col_fixed2Div_size_medium:attr.size==='medium',luckyDrawShow_col_fixed2Div_size_small:attr.size==='small',luckyDrawShow_col_fixed2Div_size_min:attr.size==='min',luckyDrawShow_col_fixed2Div_checked:pvt_win.isChecked.fixed2Div,luckyDrawShow_col_fixed2Div_disable:attr.disabled}"
                         :style="pvt_win.style.fixed2Div">

                    </div>
                    <div v-show="pvt_win.isShow.userTwoImageDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userTwoImageDiv:true,luckyDrawShow_col_userTwoImageDiv_size_large:attr.size==='large',luckyDrawShow_col_userTwoImageDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userTwoImageDiv_size_small:attr.size==='small',luckyDrawShow_col_userTwoImageDiv_size_min:attr.size==='min',luckyDrawShow_col_userTwoImageDiv_checked:pvt_win.isChecked.userTwoImageDiv,luckyDrawShow_col_userTwoImageDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userTwoImageDiv">

                        <lm1a-image
                                ref="userTwoImage"
                                refId="userTwoImage"
                                v-show="pvt_isShow.userTwoImageDiv === 'userTwoImage'"
                                :paraVarPair="pvt_userTwoImageDiv.userTwoImage.paraVarPair"
                                :para="pvt_userTwoImageDiv.userTwoImage.para"
                                :attr="pvt_userTwoImageDiv.userTwoImage.attr">
                        </lm1a-image>
                    </div>
                    <div v-show="pvt_win.isShow.userTwoNameDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userTwoNameDiv:true,luckyDrawShow_col_userTwoNameDiv_size_large:attr.size==='large',luckyDrawShow_col_userTwoNameDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userTwoNameDiv_size_small:attr.size==='small',luckyDrawShow_col_userTwoNameDiv_size_min:attr.size==='min',luckyDrawShow_col_userTwoNameDiv_checked:pvt_win.isChecked.userTwoNameDiv,luckyDrawShow_col_userTwoNameDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userTwoNameDiv">

                        <lm1a-link-text
                                ref="userTwoName"
                                refId="userTwoName"
                                v-show="pvt_isShow.userTwoNameDiv === 'userTwoName'"
                                :paraVarPair="pvt_userTwoNameDiv.userTwoName.paraVarPair"
                                :para="pvt_userTwoNameDiv.userTwoName.para"
                                :attr="pvt_userTwoNameDiv.userTwoName.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="luckyDrawShow_row luckyDrawShow_row_row15">
                    <div v-show="pvt_win.isShow.fixed3Div"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_fixed3Div:true,luckyDrawShow_col_fixed3Div_size_large:attr.size==='large',luckyDrawShow_col_fixed3Div_size_medium:attr.size==='medium',luckyDrawShow_col_fixed3Div_size_small:attr.size==='small',luckyDrawShow_col_fixed3Div_size_min:attr.size==='min',luckyDrawShow_col_fixed3Div_checked:pvt_win.isChecked.fixed3Div,luckyDrawShow_col_fixed3Div_disable:attr.disabled}"
                         :style="pvt_win.style.fixed3Div">

                    </div>
                    <div v-show="pvt_win.isShow.userThreeImageDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userThreeImageDiv:true,luckyDrawShow_col_userThreeImageDiv_size_large:attr.size==='large',luckyDrawShow_col_userThreeImageDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userThreeImageDiv_size_small:attr.size==='small',luckyDrawShow_col_userThreeImageDiv_size_min:attr.size==='min',luckyDrawShow_col_userThreeImageDiv_checked:pvt_win.isChecked.userThreeImageDiv,luckyDrawShow_col_userThreeImageDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userThreeImageDiv">

                        <lm1a-image
                                ref="userThreeImage"
                                refId="userThreeImage"
                                v-show="pvt_isShow.userThreeImageDiv === 'userThreeImage'"
                                :paraVarPair="pvt_userThreeImageDiv.userThreeImage.paraVarPair"
                                :para="pvt_userThreeImageDiv.userThreeImage.para"
                                :attr="pvt_userThreeImageDiv.userThreeImage.attr">
                        </lm1a-image>
                    </div>
                    <div v-show="pvt_win.isShow.userThreeName"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userThreeName:true,luckyDrawShow_col_userThreeName_size_large:attr.size==='large',luckyDrawShow_col_userThreeName_size_medium:attr.size==='medium',luckyDrawShow_col_userThreeName_size_small:attr.size==='small',luckyDrawShow_col_userThreeName_size_min:attr.size==='min',luckyDrawShow_col_userThreeName_checked:pvt_win.isChecked.userThreeName,luckyDrawShow_col_userThreeName_disable:attr.disabled}"
                         :style="pvt_win.style.userThreeName">

                        <lm1a-link-text
                                ref="userThreeName"
                                refId="userThreeName"
                                v-show="pvt_isShow.userThreeName === 'userThreeName'"
                                :paraVarPair="pvt_userThreeName.userThreeName.paraVarPair"
                                :para="pvt_userThreeName.userThreeName.para"
                                :attr="pvt_userThreeName.userThreeName.attr">
                        </lm1a-link-text>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckyDrawShow_row luckyDrawShow_row_row2">
            <div v-show="pvt_win.isShow.thirdPrizeDiv"
                 :class="{luckyDrawShow_col:true,luckyDrawShow_col_thirdPrizeDiv:true,luckyDrawShow_col_thirdPrizeDiv_size_large:attr.size==='large',luckyDrawShow_col_thirdPrizeDiv_size_medium:attr.size==='medium',luckyDrawShow_col_thirdPrizeDiv_size_small:attr.size==='small',luckyDrawShow_col_thirdPrizeDiv_size_min:attr.size==='min',luckyDrawShow_col_thirdPrizeDiv_checked:pvt_win.isChecked.thirdPrizeDiv,luckyDrawShow_col_thirdPrizeDiv_disable:attr.disabled}"
                 :style="pvt_win.style.thirdPrizeDiv">

                <div class="luckyDrawShow_row luckyDrawShow_row_row9">
                    <div v-show="pvt_win.isShow.thirdTitleDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_thirdTitleDiv:true,luckyDrawShow_col_thirdTitleDiv_size_large:attr.size==='large',luckyDrawShow_col_thirdTitleDiv_size_medium:attr.size==='medium',luckyDrawShow_col_thirdTitleDiv_size_small:attr.size==='small',luckyDrawShow_col_thirdTitleDiv_size_min:attr.size==='min',luckyDrawShow_col_thirdTitleDiv_checked:pvt_win.isChecked.thirdTitleDiv,luckyDrawShow_col_thirdTitleDiv_disable:attr.disabled}"
                         :style="pvt_win.style.thirdTitleDiv">

                        <lm1a-link-text
                                ref="thirdPrize"
                                refId="thirdPrize"
                                v-show="pvt_isShow.thirdTitleDiv === 'thirdPrize'"
                                :paraVarPair="pvt_thirdTitleDiv.thirdPrize.paraVarPair"
                                :para="pvt_thirdTitleDiv.thirdPrize.para"
                                :attr="pvt_thirdTitleDiv.thirdPrize.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="luckyDrawShow_row luckyDrawShow_row_row10">
                    <div v-show="pvt_win.isShow.fixed4Div"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_fixed4Div:true,luckyDrawShow_col_fixed4Div_size_large:attr.size==='large',luckyDrawShow_col_fixed4Div_size_medium:attr.size==='medium',luckyDrawShow_col_fixed4Div_size_small:attr.size==='small',luckyDrawShow_col_fixed4Div_size_min:attr.size==='min',luckyDrawShow_col_fixed4Div_checked:pvt_win.isChecked.fixed4Div,luckyDrawShow_col_fixed4Div_disable:attr.disabled}"
                         :style="pvt_win.style.fixed4Div">

                    </div>
                    <div v-show="pvt_win.isShow.userFourImageDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userFourImageDiv:true,luckyDrawShow_col_userFourImageDiv_size_large:attr.size==='large',luckyDrawShow_col_userFourImageDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userFourImageDiv_size_small:attr.size==='small',luckyDrawShow_col_userFourImageDiv_size_min:attr.size==='min',luckyDrawShow_col_userFourImageDiv_checked:pvt_win.isChecked.userFourImageDiv,luckyDrawShow_col_userFourImageDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userFourImageDiv">

                        <lm1a-image
                                ref="userFourImage"
                                refId="userFourImage"
                                v-show="pvt_isShow.userFourImageDiv === 'userFourImage'"
                                :paraVarPair="pvt_userFourImageDiv.userFourImage.paraVarPair"
                                :para="pvt_userFourImageDiv.userFourImage.para"
                                :attr="pvt_userFourImageDiv.userFourImage.attr">
                        </lm1a-image>
                    </div>
                    <div v-show="pvt_win.isShow.userFourNameDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userFourNameDiv:true,luckyDrawShow_col_userFourNameDiv_size_large:attr.size==='large',luckyDrawShow_col_userFourNameDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userFourNameDiv_size_small:attr.size==='small',luckyDrawShow_col_userFourNameDiv_size_min:attr.size==='min',luckyDrawShow_col_userFourNameDiv_checked:pvt_win.isChecked.userFourNameDiv,luckyDrawShow_col_userFourNameDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userFourNameDiv">

                        <lm1a-link-text
                                ref="userFourName"
                                refId="userFourName"
                                v-show="pvt_isShow.userFourNameDiv === 'userFourName'"
                                :paraVarPair="pvt_userFourNameDiv.userFourName.paraVarPair"
                                :para="pvt_userFourNameDiv.userFourName.para"
                                :attr="pvt_userFourNameDiv.userFourName.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="luckyDrawShow_row luckyDrawShow_row_row11">
                    <div v-show="pvt_win.isShow.fixed5Div"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_fixed5Div:true,luckyDrawShow_col_fixed5Div_size_large:attr.size==='large',luckyDrawShow_col_fixed5Div_size_medium:attr.size==='medium',luckyDrawShow_col_fixed5Div_size_small:attr.size==='small',luckyDrawShow_col_fixed5Div_size_min:attr.size==='min',luckyDrawShow_col_fixed5Div_checked:pvt_win.isChecked.fixed5Div,luckyDrawShow_col_fixed5Div_disable:attr.disabled}"
                         :style="pvt_win.style.fixed5Div">

                    </div>
                    <div v-show="pvt_win.isShow.userFiveImageDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userFiveImageDiv:true,luckyDrawShow_col_userFiveImageDiv_size_large:attr.size==='large',luckyDrawShow_col_userFiveImageDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userFiveImageDiv_size_small:attr.size==='small',luckyDrawShow_col_userFiveImageDiv_size_min:attr.size==='min',luckyDrawShow_col_userFiveImageDiv_checked:pvt_win.isChecked.userFiveImageDiv,luckyDrawShow_col_userFiveImageDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userFiveImageDiv">

                        <lm1a-image
                                ref="userFiveImage"
                                refId="userFiveImage"
                                v-show="pvt_isShow.userFiveImageDiv === 'userFiveImage'"
                                :paraVarPair="pvt_userFiveImageDiv.userFiveImage.paraVarPair"
                                :para="pvt_userFiveImageDiv.userFiveImage.para"
                                :attr="pvt_userFiveImageDiv.userFiveImage.attr">
                        </lm1a-image>
                    </div>
                    <div v-show="pvt_win.isShow.userFiveNameDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userFiveNameDiv:true,luckyDrawShow_col_userFiveNameDiv_size_large:attr.size==='large',luckyDrawShow_col_userFiveNameDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userFiveNameDiv_size_small:attr.size==='small',luckyDrawShow_col_userFiveNameDiv_size_min:attr.size==='min',luckyDrawShow_col_userFiveNameDiv_checked:pvt_win.isChecked.userFiveNameDiv,luckyDrawShow_col_userFiveNameDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userFiveNameDiv">

                        <lm1a-link-text
                                ref="userFiveName"
                                refId="userFiveName"
                                v-show="pvt_isShow.userFiveNameDiv === 'userFiveName'"
                                :paraVarPair="pvt_userFiveNameDiv.userFiveName.paraVarPair"
                                :para="pvt_userFiveNameDiv.userFiveName.para"
                                :attr="pvt_userFiveNameDiv.userFiveName.attr">
                        </lm1a-link-text>
                    </div>
                </div>
                <div class="luckyDrawShow_row luckyDrawShow_row_row12">
                    <div v-show="pvt_win.isShow.fixed6Div"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_fixed6Div:true,luckyDrawShow_col_fixed6Div_size_large:attr.size==='large',luckyDrawShow_col_fixed6Div_size_medium:attr.size==='medium',luckyDrawShow_col_fixed6Div_size_small:attr.size==='small',luckyDrawShow_col_fixed6Div_size_min:attr.size==='min',luckyDrawShow_col_fixed6Div_checked:pvt_win.isChecked.fixed6Div,luckyDrawShow_col_fixed6Div_disable:attr.disabled}"
                         :style="pvt_win.style.fixed6Div">

                    </div>
                    <div v-show="pvt_win.isShow.userSixImageDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userSixImageDiv:true,luckyDrawShow_col_userSixImageDiv_size_large:attr.size==='large',luckyDrawShow_col_userSixImageDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userSixImageDiv_size_small:attr.size==='small',luckyDrawShow_col_userSixImageDiv_size_min:attr.size==='min',luckyDrawShow_col_userSixImageDiv_checked:pvt_win.isChecked.userSixImageDiv,luckyDrawShow_col_userSixImageDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userSixImageDiv">

                        <lm1a-image
                                ref="userSixImage"
                                refId="userSixImage"
                                v-show="pvt_isShow.userSixImageDiv === 'userSixImage'"
                                :paraVarPair="pvt_userSixImageDiv.userSixImage.paraVarPair"
                                :para="pvt_userSixImageDiv.userSixImage.para"
                                :attr="pvt_userSixImageDiv.userSixImage.attr">
                        </lm1a-image>
                    </div>
                    <div v-show="pvt_win.isShow.userSixNameDiv"
                         :class="{luckyDrawShow_col:true,luckyDrawShow_col_userSixNameDiv:true,luckyDrawShow_col_userSixNameDiv_size_large:attr.size==='large',luckyDrawShow_col_userSixNameDiv_size_medium:attr.size==='medium',luckyDrawShow_col_userSixNameDiv_size_small:attr.size==='small',luckyDrawShow_col_userSixNameDiv_size_min:attr.size==='min',luckyDrawShow_col_userSixNameDiv_checked:pvt_win.isChecked.userSixNameDiv,luckyDrawShow_col_userSixNameDiv_disable:attr.disabled}"
                         :style="pvt_win.style.userSixNameDiv">

                        <lm1a-link-text
                                ref="userSixName"
                                refId="userSixName"
                                v-show="pvt_isShow.userSixNameDiv === 'userSixName'"
                                :paraVarPair="pvt_userSixNameDiv.userSixName.paraVarPair"
                                :para="pvt_userSixNameDiv.userSixName.para"
                                :attr="pvt_userSixNameDiv.userSixName.attr">
                        </lm1a-link-text>
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
                pvt_subModuleMap: {
                    vessel: ['firstTitleDiv', 'secondTitleDiv', 'thirdTitleDiv', 'userOneNameDiv', 'userTwoNameDiv', 'userThreeName', 'userFourNameDiv', 'userFiveNameDiv', 'userSixNameDiv', 'userOneImageDiv', 'userTwoImageDiv', 'userThreeImageDiv', 'userFourImageDiv', 'userFiveImageDiv', 'userSixImageDiv'],
                    subModule: ['firstPrize', 'secondPrize', 'thirdPrize', 'userOneName', 'userTwoName', 'userThreeName', 'userFourName', 'userFiveName', 'userSixName', 'userOneImage', 'userTwoImage', 'userThreeImage', 'userFourImage', 'userFiveImage', 'userSixImage'],
                },
                pvt_isShow: {
                    firstTitleDiv: null,
                    secondTitleDiv: null,
                    thirdTitleDiv: null,
                    userOneNameDiv: null,
                    userTwoNameDiv: null,
                    userThreeName: null,
                    userFourNameDiv: null,
                    userFiveNameDiv: null,
                    userSixNameDiv: null,
                    userOneImageDiv: null,
                    userTwoImageDiv: null,
                    userThreeImageDiv: null,
                    userFourImageDiv: null,
                    userFiveImageDiv: null,
                    userSixImageDiv: null,
                },
                pvt_win: {
                    isShow: {
                        luckyDrawShowWindow: true,
                        firstPrizeDiv: true,
                        secondPrizeDiv: true,
                        thirdPrizeDiv: true,
                        firstTitleDiv: true,
                        secondTitleDiv: true,
                        thirdTitleDiv: true,
                        fixedDiv: true,
                        userOneImageDiv: true,
                        userOneNameDiv: true,
                        fixed2Div: true,
                        userTwoImageDiv: true,
                        userTwoNameDiv: true,
                        fixed3Div: true,
                        userThreeImageDiv: true,
                        userThreeName: true,
                        fixed4Div: true,
                        userFourImageDiv: true,
                        userFourNameDiv: true,
                        fixed5Div: true,
                        userFiveImageDiv: true,
                        userFiveNameDiv: true,
                        fixed6Div: true,
                        userSixImageDiv: true,
                        userSixNameDiv: true,
                    },
                    isChecked: {
                        luckyDrawShowWindow: false,
                        firstPrizeDiv: false,
                        secondPrizeDiv: false,
                        thirdPrizeDiv: false,
                        firstTitleDiv: false,
                        secondTitleDiv: false,
                        thirdTitleDiv: false,
                        fixedDiv: false,
                        userOneImageDiv: false,
                        userOneNameDiv: false,
                        fixed2Div: false,
                        userTwoImageDiv: false,
                        userTwoNameDiv: false,
                        fixed3Div: false,
                        userThreeImageDiv: false,
                        userThreeName: false,
                        fixed4Div: false,
                        userFourImageDiv: false,
                        userFourNameDiv: false,
                        fixed5Div: false,
                        userFiveImageDiv: false,
                        userFiveNameDiv: false,
                        fixed6Div: false,
                        userSixImageDiv: false,
                        userSixNameDiv: false,
                    },
                    style: {
                        luckyDrawShowWindow: null,
                        firstPrizeDiv: null,
                        secondPrizeDiv: null,
                        thirdPrizeDiv: null,
                        firstTitleDiv: null,
                        secondTitleDiv: null,
                        thirdTitleDiv: null,
                        fixedDiv: null,
                        userOneImageDiv: null,
                        userOneNameDiv: null,
                        fixed2Div: null,
                        userTwoImageDiv: null,
                        userTwoNameDiv: null,
                        fixed3Div: null,
                        userThreeImageDiv: null,
                        userThreeName: null,
                        fixed4Div: null,
                        userFourImageDiv: null,
                        userFourNameDiv: null,
                        fixed5Div: null,
                        userFiveImageDiv: null,
                        userFiveNameDiv: null,
                        fixed6Div: null,
                        userSixImageDiv: null,
                        userSixNameDiv: null,
                    },
                },
                pvt_eventPortInput: [],
                userOneIcon: null,
                userOneNickname: null,
                userTwoIcon: null,
                userTwoNickname: null,
                userThreeIcon: null,
                userThreeNickname: null,
                userFourIcon: null,
                userFourNickname: null,
                userFiveIcon: null,
                userFiveNickname: null,
                userSixIcon: null,
                userSixNickname: null,
            };
        },
        watch: {
            userOneIcon: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userOneIcon) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userOneIcon][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userOneIcon] = val
                        }
                    }
                },
                deep: true
            },
            userOneNickname: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userOneNickname) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userOneNickname][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userOneNickname] = val
                        }
                    }
                },
                deep: true
            },
            userTwoIcon: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userTwoIcon) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userTwoIcon][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userTwoIcon] = val
                        }
                    }
                },
                deep: true
            },
            userTwoNickname: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userTwoNickname) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userTwoNickname][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userTwoNickname] = val
                        }
                    }
                },
                deep: true
            },
            userThreeIcon: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userThreeIcon) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userThreeIcon][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userThreeIcon] = val
                        }
                    }
                },
                deep: true
            },
            userThreeNickname: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userThreeNickname) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userThreeNickname][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userThreeNickname] = val
                        }
                    }
                },
                deep: true
            },
            userFourIcon: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userFourIcon) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userFourIcon][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userFourIcon] = val
                        }
                    }
                },
                deep: true
            },
            userFourNickname: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userFourNickname) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userFourNickname][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userFourNickname] = val
                        }
                    }
                },
                deep: true
            },
            userFiveIcon: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userFiveIcon) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userFiveIcon][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userFiveIcon] = val
                        }
                    }
                },
                deep: true
            },
            userFiveNickname: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userFiveNickname) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userFiveNickname][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userFiveNickname] = val
                        }
                    }
                },
                deep: true
            },
            userSixIcon: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userSixIcon) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userSixIcon][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userSixIcon] = val
                        }
                    }
                },
                deep: true
            },
            userSixNickname: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userSixNickname) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userSixNickname][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userSixNickname] = val
                        }
                    }
                },
                deep: true
            },
        },
        computed: {
            pvt_firstTitleDiv: function () {
                return {
                    firstPrize: {
                        paraVarPair: {},
                        para: {
                            textData: '一等奖中奖名单',
                        },
                        attr: {
                            label: 'p',
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#FFFFFF',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_secondTitleDiv: function () {
                return {
                    secondPrize: {
                        paraVarPair: {},
                        para: {
                            textData: '二等奖中奖名单',
                        },
                        attr: {
                            label: 'p',
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#FFFFFF',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_thirdTitleDiv: function () {
                return {
                    thirdPrize: {
                        paraVarPair: {},
                        para: {
                            textData: '三等奖中奖名单',
                        },
                        attr: {
                            label: 'p',
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#FFFFFF',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_userOneNameDiv: function () {
                return {
                    userOneName: {
                        paraVarPair: {},
                        para: {
                            textData: this.userOneNickname,
                        },
                        attr: {
                            label: 'p',
                            color: '#606266',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_userTwoNameDiv: function () {
                return {
                    userTwoName: {
                        paraVarPair: {},
                        para: {
                            textData: this.userTwoNickname,
                        },
                        attr: {
                            label: 'p',
                            color: '#606266',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_userThreeName: function () {
                return {
                    userThreeName: {
                        paraVarPair: {},
                        para: {
                            textData: this.userThreeNickname,
                        },
                        attr: {
                            label: 'p',
                            color: '#606266',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_userFourNameDiv: function () {
                return {
                    userFourName: {
                        paraVarPair: {},
                        para: {
                            textData: this.userFourNickname,
                        },
                        attr: {
                            label: 'p',
                            color: '#606266',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_userFiveNameDiv: function () {
                return {
                    userFiveName: {
                        paraVarPair: {},
                        para: {
                            textData: this.userFiveNickname,
                        },
                        attr: {
                            label: 'p',
                            color: '#606266',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_userSixNameDiv: function () {
                return {
                    userSixName: {
                        paraVarPair: {},
                        para: {
                            textData: this.userSixNickname,
                        },
                        attr: {
                            label: 'p',
                            color: '#606266',
                            fontSize: '34px',
                        },
                    },
                };
            },
            pvt_userOneImageDiv: function () {
                return {
                    userOneImage: {
                        paraVarPair: {},
                        para: {
                            image: this.userOneIcon,
                        },
                        attr: {
                            fit: 'fill',
                        },
                    },
                };
            },
            pvt_userTwoImageDiv: function () {
                return {
                    userTwoImage: {
                        paraVarPair: {},
                        para: {
                            image: this.userTwoIcon,
                        },
                        attr: {
                            fit: 'fill',
                        },
                    },
                };
            },
            pvt_userThreeImageDiv: function () {
                return {
                    userThreeImage: {
                        paraVarPair: {},
                        para: {
                            image: this.userThreeIcon,
                        },
                        attr: {
                            fit: 'fill',
                        },
                    },
                };
            },
            pvt_userFourImageDiv: function () {
                return {
                    userFourImage: {
                        paraVarPair: {},
                        para: {
                            image: this.userFourIcon,
                        },
                        attr: {
                            fit: 'fill',
                        },
                    },
                };
            },
            pvt_userFiveImageDiv: function () {
                return {
                    userFiveImage: {
                        paraVarPair: {},
                        para: {
                            image: this.userFiveIcon,
                        },
                        attr: {
                            fit: 'fill',
                        },
                    },
                };
            },
            pvt_userSixImageDiv: function () {
                return {
                    userSixImage: {
                        paraVarPair: {},
                        para: {
                            image: this.userSixIcon,
                        },
                        attr: {
                            fit: 'fill',
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
            strConversion: function (str) {//超过13个字符的转换表示
                let isTrue = str == null;
                switch (isTrue) {
                    case true:
                        return str;
                        break;
                    case false:
                        if (str.length < 13) {
                            return str;
                        } else {
                            var i = '';
                            i = str.substring(0, 11) + '*' + str.substring(str.length - 1);
                            return i;
                        }
                        break;
                }
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            startModule: function ( successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let tableName;
                let dbData;
                let parentRecord;
                let condition;
                let tableVariable;
                let destGeneSite;
                let page;
                let arrParentRecord;
                let i;
                let ref = {
                    sm1: 'firstPrize',
                    sm2: 'secondPrize',
                    sm3: 'thirdPrize',
                    sm4: 'userOneName',
                    sm5: 'userTwoName',
                    sm6: 'userThreeName',
                    sm7: 'userFourName',
                    sm8: 'userFiveName',
                    sm9: 'userSixName',
                    sm10: 'userOneImage',
                    sm11: 'userTwoImage',
                    sm12: 'userThreeImage',
                    sm13: 'userFourImage',
                    sm14: 'userFiveImage',
                    sm15: 'userSixImage',
                };
                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;
                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            tableVariable = [{
                                $geneAddr: null,
                                $table: this.mac.tb.lucky,
                                $arrField: null,
                                $arrValue: null,
                                $arrOrgValue: null,
                                $allFlag: [1, 1, 1, 1],
                                $arrSubTab: []
                            }];

                            condition =null;
                                destGeneSite = null;
                            page = {
                                'table': tableVariable[0].$table,
                                'number': 200,
                                'arrSort': null
                            };
                            $this.sys.conditionInput(tableVariable, page, condition, destGeneSite, function (result) {
                                para.nStep = 'getInfo';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case  'getInfo':
                            $this.weChatIcon = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC8ElEQVRYR+2WWYiNYRjHf3/7jSSyZB/LiLkQxpalQTSiZKTmwnLBhRsUiotJlC033MiNG0pKw4WUbGEkTBEpa/YUsossefQc35k+r9Oc95yZGhfeq6/vfZb/+39W0cJHLeyffxeAmQ0EqoApwDCgB9AO+Ag8Aq4BJ4Cjkj4Vy+RfDJhZGbAVmAW0ijD8HtjjOpL8u6DzBwAzWwtsBtoWZOW38HNgoaQzheg2ADCzXcCKQpRzyH4HFkk6GGsnA8DMlgO7A6XXwClgLNA/h0F/8TlgItAndf8NqJB0MQaEzKwbcB/omFL4CQyS9NDMuif0pvPhHVAi6a2ZDQAeBM7uAGWSfuQD4QBqgE2BoAHDJd0ys97A4yAhPwCDJb00s6HArRyOqmNC4QAuA2NyGPDSqgNGAs5CeN4AlxLdrsBX4CpwD/BqqJe0P4YBf02a/nw64b073J6EoQIYDfQDOgAeqrtJrtRKehUqOwOeNMWUnYdpG3AyKd3xeZA7Q3uBGknOXuY4gCdBFscw4M6XAT2BjZENK2vXq6dKkocvA+AAUB3jNSWzI2nJYfLGmvH8miqp3gF43ArpXs+AJckcSJemJ+B5YDHQOYXkBbAPmOuVk/rv86Qs24gOAfMj4XvZTgJmBPJDJN0zs5XAztTdKkm7zKwcuBLorMkC6AScBUZEgJgOHAfaBLL+CE/I1UBp6u4G4G1+ATAz0KlPz4IuwJHkdY3hmAacjgAaI/I5nIZejj5I5jWiPTmJdYyDfDJfcu0DPkSyNe212z6w4ncXgNb5rEfc14UMlCSD6TqwBTgM+LDx3OiVdLfaZAHxUDT1LAkBVHpTkXSsMctm5mHwpG3KTukzaELRBszM17Z1RVLgvWSCpKdFA3DHZubr2/oCmfBdodJ3jUwrLvIFDWpJJ/XWPCrSVqkkn5CZ02QAWUNmNg6Yk4zjvskK7+P4NnAzufMKWirJp2LzAoh5vZnNBsolbWgRALlANlsIYhj4DyAXA78AmdzgXy46VxsAAAAASUVORK5CYII='];
                            $this.QQIcon = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACFUlEQVRYR+2WTYhOYRTHfz/FgkgsUBY+kmI7TcnCV2YpNmQxGzUbRaYkZTQybExNoiwkC0mzY5a+prGQhB0bCguFkqTJRs3RU++78Pbe9z733sWknNW9Pf/zP7/Ovc/zHJnncJ7r8+8BRMQm4CgwAKTnFO+AB8A1NT1nR3YHIiJpzwIjwMKCCr+BMXUsl6AKwDhwMtN4XD2Vo80CiIjdwCPI/mcC2Ks+LoPIBZgBdpSZdazPqLvKckoBImIN8AlYUGbWsT4HrFU/98rLAdgP3K1YvC0/oN5rCjAMTNQEGFYvNwWYAvbVBJhSUwcLo+cniIh+4HnN4u20fvVFkUcZwCBwqyHAoHq7LsAQcL0hwJB6ozJARKwHXgIrGgJ8B/rUD918Cj9BREwDpQdJJty0uicbICLSTXc/0zxXNqA+7BR37UBETAKHcp0zdZPq4VyAL8CqTONc2Vd1dS7ALLAESJfQztwKBbq2x6y6NBfgFfAaOAF8BJbVhPgJpN2UjuMtal8uQNp6P9S5iDgDXKgJMKJejIh0ky5X05b8K3Juw3XAG2BxRYhfwFY1dbAwyo7izcBTYGXF4m35N2C7+rbySZgSIuIKcKxm8XbaVfV4XYBR4FxBcpr7brbWjvSYF0fV83UBFgGngYPAxtY4/h54loqrT1qdSvNigtgGbADSeJ50d4BLanrvGqU/YcP2l6b/B5j3DvwBHiGfIXwfjXAAAAAASUVORK5CYII='];
                            tableName = this.mac.tb.lucky;
                            parentRecord = null;
                            arrParentRecord = null;
                            condition = "class!=3";
                            var data = {};
                            data.class = [];
                            data.nickname = [];
                            data.headshot = [];
                            this.sys.recordQuery_(tableName, arrParentRecord, condition, data,
                                function (result) {
                                    console.log(data);
                                    let className = data.class;
                                    let b = [];
                                    let c = [];
                                    let d = [];
                                    let e = [];
                                    for (i in className) {
                                        if (className[i] == 0) {
                                            para.userOneNickname = data.nickname[i];
                                            para.userOneIcon = data.headshot[i];
                                        } else if (className[i] == 1) {
                                            b.push(data.nickname[i]);
                                            c.push(data.headshot[i]);
                                        } else {
                                            d.push(data.nickname[i]);
                                            e.push(data.headshot[i]);
                                        }
                                    }
                                    $this.userOneIcon = [para.userOneIcon];
                                    $this.userOneNickname = $this.strConversion(para.userOneNickname);
                                    $this.userTwoIcon = [c[0]];
                                    $this.userTwoNickname = $this.strConversion(b[0]);
                                    $this.userThreeIcon = [c[1]];
                                    $this.userThreeNickname = $this.strConversion(b[1]);
                                    $this.userFourIcon = [e[0]];
                                    $this.userFourNickname = $this.strConversion(d[0]);
                                    $this.userFiveIcon = [e[1]];
                                    $this.userFiveNickname = $this.strConversion(d[1]);
                                    $this.userSixIcon = [e[2]];
                                    $this.userSixNickname = $this.strConversion(d[2]);
                                }, para.errorCallBack);
                            para.nStep = 'showSubModule';
                            ++dbFlag;
                            break;
                        case 'showSubModule':
                            $this.showSubModule([ref.sm1, ref.sm2, ref.sm3, ref.sm4, ref.sm5, ref.sm6, ref.sm7, ref.sm8, ref.sm9, ref.sm10, ref.sm11, ref.sm12, ref.sm13, ref.sm14, ref.sm15], true, function () {
                                para.nStep = 'forceUpdateData';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'forceUpdateData':
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule1';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            });
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
                                    $this.startModule( successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule12':
                            $this.sm[ref.sm12].startModule(function () {
                                para.nStep = 'startModule13';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule13':
                            $this.sm[ref.sm13].startModule(function () {
                                para.nStep = 'startModule14';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule14':
                            $this.sm[ref.sm14].startModule(function () {
                                para.nStep = 'startModule15';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule( successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule15':
                            $this.sm[ref.sm15].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule( successCallBack, errorCallBack)
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
        },
    };
</script>
<style lang="scss" scoped>
    /*@import "../../../assets/common.scss";*/

    .luckyDrawShow_container {
        width: 100%;
        height: 100%;
    }

    .luckyDrawShow_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .luckyDrawShow_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .luckyDrawShow_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .luckyDrawShow_row {
        display: flex;
    }

    .luckyDrawShow_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .luckyDrawShow_col_luckyDrawShowWindow_size_medium {
        width: $luckyDrawShow-luckyDrawShowWindow-medium-width;
        justify-content: $luckyDrawShow-luckyDrawShowWindow-medium-vertical-position;
        height: 100%;
    }

    .luckyDrawShow_col_firstPrizeDiv_size_medium {
        width: $luckyDrawShow-firstPrizeDiv-medium-width;
        padding: $luckyDrawShow-firstPrizeDiv-medium-padding;
    }

    .luckyDrawShow_col_firstPrizeDiv {
        background-color: mix($luckyDrawShow-firstPrizeDiv-background-color, #fff, $luckyDrawShow-firstPrizeDiv-background-color-opacity);
        border-style: $luckyDrawShow-firstPrizeDiv-border-style;
        border-width: $luckyDrawShow-firstPrizeDiv-border-width;
        border-radius: $luckyDrawShow-firstPrizeDiv-border-radius;
        border-color: mix($luckyDrawShow-firstPrizeDiv-border-color, #fff, $luckyDrawShow-firstPrizeDiv-hover-border-color-opacity);
    }

    .luckyDrawShow_col_secondPrizeDiv_size_medium {
        width: $luckyDrawShow-secondPrizeDiv-medium-width;
        margin: $luckyDrawShow-secondPrizeDiv-medium-margin;
        padding: $luckyDrawShow-secondPrizeDiv-medium-padding;
    }

    .luckyDrawShow_col_secondPrizeDiv {
        background-color: mix($luckyDrawShow-secondPrizeDiv-background-color, #fff, $luckyDrawShow-secondPrizeDiv-background-color-opacity);
        border-style: $luckyDrawShow-secondPrizeDiv-border-style;
        border-width: $luckyDrawShow-secondPrizeDiv-border-width;
        border-radius: $luckyDrawShow-secondPrizeDiv-border-radius;
        border-color: mix($luckyDrawShow-secondPrizeDiv-border-color, #fff, $luckyDrawShow-secondPrizeDiv-hover-border-color-opacity);
    }

    .luckyDrawShow_col_thirdPrizeDiv_size_medium {
        width: $luckyDrawShow-thirdPrizeDiv-medium-width;
        padding: $luckyDrawShow-thirdPrizeDiv-medium-padding;
    }

    .luckyDrawShow_col_thirdPrizeDiv {
        background-color: mix($luckyDrawShow-thirdPrizeDiv-background-color, #fff, $luckyDrawShow-thirdPrizeDiv-background-color-opacity);
        border-color: mix($luckyDrawShow-thirdPrizeDiv-border-color, #fff, $luckyDrawShow-thirdPrizeDiv-hover-border-color-opacity);
        border-radius: $luckyDrawShow-thirdPrizeDiv-border-radius;
        border-width: $luckyDrawShow-thirdPrizeDiv-border-width;
        border-style: $luckyDrawShow-thirdPrizeDiv-border-style;
    }

    .luckyDrawShow_col_firstTitleDiv_size_medium {
        width: $luckyDrawShow-firstTitleDiv-medium-width;
        align-items: $luckyDrawShow-firstTitleDiv-medium-horizontal-position;
    }

    .luckyDrawShow_col_secondTitleDiv_size_medium {
        width: $luckyDrawShow-secondTitleDiv-medium-width;
        align-items: $luckyDrawShow-secondTitleDiv-medium-horizontal-position;
    }

    .luckyDrawShow_col_thirdTitleDiv_size_medium {
        width: $luckyDrawShow-thirdTitleDiv-medium-width;
        align-items: $luckyDrawShow-thirdTitleDiv-medium-horizontal-position;
    }

    .luckyDrawShow_col_fixedDiv_size_medium {
        width: $luckyDrawShow-fixedDiv-medium-width;
    }

    .luckyDrawShow_col_fixedDiv {
        background-color: mix($luckyDrawShow-fixedDiv-background-color, #fff, $luckyDrawShow-fixedDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userOneImageDiv_size_medium {
        width: $luckyDrawShow-userOneImageDiv-medium-width;
        height: $luckyDrawShow-userOneImageDiv-medium-height;
        padding: $luckyDrawShow-userOneImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userOneImageDiv {
        background-color: mix($luckyDrawShow-userOneImageDiv-background-color, #fff, $luckyDrawShow-userOneImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userOneNameDiv_size_medium {
        width: $luckyDrawShow-userOneNameDiv-medium-width;
        height: $luckyDrawShow-userOneNameDiv-medium-height;
        justify-content: $luckyDrawShow-userOneNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userOneNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userOneNameDiv {
        background-color: mix($luckyDrawShow-userOneNameDiv-background-color, #fff, $luckyDrawShow-userOneNameDiv-background-color-opacity);
    }

    .luckyDrawShow_col_fixed2Div_size_medium {
        width: $luckyDrawShow-fixed2Div-medium-width;
    }

    .luckyDrawShow_col_fixed2Div {
        background-color: mix($luckyDrawShow-fixed2Div-background-color, #fff, $luckyDrawShow-fixed2Div-background-color-opacity);
    }

    .luckyDrawShow_col_userTwoImageDiv_size_medium {
        width: $luckyDrawShow-userTwoImageDiv-medium-width;
        height: $luckyDrawShow-userTwoImageDiv-medium-height;
        padding: $luckyDrawShow-userTwoImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userTwoImageDiv {
        background-color: mix($luckyDrawShow-userTwoImageDiv-background-color, #fff, $luckyDrawShow-userTwoImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userTwoNameDiv_size_medium {
        width: $luckyDrawShow-userTwoNameDiv-medium-width;
        height: $luckyDrawShow-userTwoNameDiv-medium-height;
        justify-content: $luckyDrawShow-userTwoNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userTwoNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userTwoNameDiv {
        background-color: mix($luckyDrawShow-userTwoNameDiv-background-color, #fff, $luckyDrawShow-userTwoNameDiv-background-color-opacity);
    }

    .luckyDrawShow_col_fixed3Div_size_medium {
        width: $luckyDrawShow-fixed3Div-medium-width;
    }

    .luckyDrawShow_col_fixed3Div {
        background-color: mix($luckyDrawShow-fixed3Div-background-color, #fff, $luckyDrawShow-fixed3Div-background-color-opacity);
    }

    .luckyDrawShow_col_userThreeImageDiv_size_medium {
        width: $luckyDrawShow-userThreeImageDiv-medium-width;
        height: $luckyDrawShow-userThreeImageDiv-medium-height;
        padding: $luckyDrawShow-userThreeImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userThreeImageDiv {
        background-color: mix($luckyDrawShow-userThreeImageDiv-background-color, #fff, $luckyDrawShow-userThreeImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userThreeName_size_medium {
        width: $luckyDrawShow-userThreeName-medium-width;
        height: $luckyDrawShow-userThreeName-medium-height;
        justify-content: $luckyDrawShow-userThreeName-medium-vertical-position;
        padding: $luckyDrawShow-userThreeName-medium-padding;
    }

    .luckyDrawShow_col_userThreeName {
        background-color: mix($luckyDrawShow-userThreeName-background-color, #fff, $luckyDrawShow-userThreeName-background-color-opacity);
    }

    .luckyDrawShow_col_fixed4Div_size_medium {
        width: $luckyDrawShow-fixed4Div-medium-width;
    }

    .luckyDrawShow_col_fixed4Div {
        background-color: mix($luckyDrawShow-fixed4Div-background-color, #fff, $luckyDrawShow-fixed4Div-background-color-opacity);
    }

    .luckyDrawShow_col_userFourImageDiv_size_medium {
        width: $luckyDrawShow-userFourImageDiv-medium-width;
        height: $luckyDrawShow-userFourImageDiv-medium-height;
        padding: $luckyDrawShow-userFourImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userFourImageDiv {
        background-color: mix($luckyDrawShow-userFourImageDiv-background-color, #fff, $luckyDrawShow-userFourImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userFourNameDiv_size_medium {
        width: $luckyDrawShow-userFourNameDiv-medium-width;
        height: $luckyDrawShow-userFourNameDiv-medium-height;
        justify-content: $luckyDrawShow-userFourNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userFourNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userFourNameDiv {
        background-color: mix($luckyDrawShow-userFourNameDiv-background-color, #fff, $luckyDrawShow-userFourNameDiv-background-color-opacity);
    }

    .luckyDrawShow_col_fixed5Div_size_medium {
        width: $luckyDrawShow-fixed5Div-medium-width;
    }

    .luckyDrawShow_col_fixed5Div {
        background-color: mix($luckyDrawShow-fixed5Div-background-color, #fff, $luckyDrawShow-fixed5Div-background-color-opacity);
    }

    .luckyDrawShow_col_userFiveImageDiv_size_medium {
        width: $luckyDrawShow-userFiveImageDiv-medium-width;
        height: $luckyDrawShow-userFiveImageDiv-medium-height;
        padding: $luckyDrawShow-userFiveImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userFiveImageDiv {
        background-color: mix($luckyDrawShow-userFiveImageDiv-background-color, #fff, $luckyDrawShow-userFiveImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userFiveNameDiv_size_medium {
        width: $luckyDrawShow-userFiveNameDiv-medium-width;
        height: $luckyDrawShow-userFiveNameDiv-medium-height;
        justify-content: $luckyDrawShow-userFiveNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userFiveNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userFiveNameDiv {
        background-color: mix($luckyDrawShow-userFiveNameDiv-background-color, #fff, $luckyDrawShow-userFiveNameDiv-background-color-opacity);
    }

    .luckyDrawShow_col_fixed6Div_size_medium {
        width: $luckyDrawShow-fixed6Div-medium-width;
    }

    .luckyDrawShow_col_fixed6Div {
        background-color: mix($luckyDrawShow-fixed6Div-background-color, #fff, $luckyDrawShow-fixed6Div-background-color-opacity);
    }

    .luckyDrawShow_col_userSixImageDiv_size_medium {
        width: $luckyDrawShow-userSixImageDiv-medium-width;
        height: $luckyDrawShow-userSixImageDiv-medium-height;
        padding: $luckyDrawShow-userSixImageDiv-medium-padding;
    }

    .luckyDrawShow_col_userSixImageDiv {
        background-color: mix($luckyDrawShow-userSixImageDiv-background-color, #fff, $luckyDrawShow-userSixImageDiv-background-color-opacity);
    }

    .luckyDrawShow_col_userSixNameDiv_size_medium {
        width: $luckyDrawShow-userSixNameDiv-medium-width;
        height: $luckyDrawShow-userSixNameDiv-medium-height;
        justify-content: $luckyDrawShow-userSixNameDiv-medium-vertical-position;
        padding: $luckyDrawShow-userSixNameDiv-medium-padding;
    }

    .luckyDrawShow_col_userSixNameDiv {
        background-color: mix($luckyDrawShow-userSixNameDiv-background-color, #fff, $luckyDrawShow-userSixNameDiv-background-color-opacity);
    }

</style>
