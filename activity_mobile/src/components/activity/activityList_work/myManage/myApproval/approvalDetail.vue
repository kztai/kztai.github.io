<template>
    <div v-show="pvt_isWinShow.approvalDetailWindow"
         :class="{approvalDetail_container:true,approvalDetail_col:true,approvalDetail_col_approvalDetailWindow:true,approvalDetail_col_approvalDetailWindow_size_large:attr.size==='large',approvalDetail_col_approvalDetailWindow_size_medium:attr.size==='medium',approvalDetail_col_approvalDetailWindow_size_small:attr.size==='small',approvalDetail_col_approvalDetailWindow_size_min:attr.size==='min',approvalDetail_col_approvalDetailWindow_checked:attr.checked,approvalDetail_col_approvalDetailWindow_disable:attr.disabled}">

        <div class="approvalDetail_row approvalDetail_row_row1">
            <div v-show="pvt_isWinShow.header"
                 :class="{approvalDetail_col:true,approvalDetail_col_header:true,approvalDetail_col_header_size_large:attr.size==='large',approvalDetail_col_header_size_medium:attr.size==='medium',approvalDetail_col_header_size_small:attr.size==='small',approvalDetail_col_header_size_min:attr.size==='min',approvalDetail_col_header_checked:attr.checked,approvalDetail_col_header_disable:attr.disabled}">

                <list_header
                        ref="headerRef"
                        refId="headerRef"
                        v-show="pvt_isShow.header === 'headerRef'"
                        :paraVarPair="pvt_header.headerRef.paraVarPair"
                        :para="pvt_header.headerRef.para"
                        :attr="pvt_header.headerRef.attr">
                </list_header>
            </div>
        </div>
        <div class="approvalDetail_row approvalDetail_row_row2">
            <div v-show="pvt_isWinShow.content"
                 :class="{approvalDetail_col:true,approvalDetail_col_content:true,approvalDetail_col_content_size_large:attr.size==='large',approvalDetail_col_content_size_medium:attr.size==='medium',approvalDetail_col_content_size_small:attr.size==='small',approvalDetail_col_content_size_min:attr.size==='min',approvalDetail_col_content_checked:attr.checked,approvalDetail_col_content_disable:attr.disabled}">

                <div class="approvalDetail_row approvalDetail_row_row3">
                    <div v-show="pvt_isWinShow.titleWrap"
                         :class="{approvalDetail_col:true,approvalDetail_col_titleWrap:true,approvalDetail_col_titleWrap_size_large:attr.size==='large',approvalDetail_col_titleWrap_size_medium:attr.size==='medium',approvalDetail_col_titleWrap_size_small:attr.size==='small',approvalDetail_col_titleWrap_size_min:attr.size==='min',approvalDetail_col_titleWrap_checked:attr.checked,approvalDetail_col_titleWrap_disable:attr.disabled}">

                        <div class="approvalDetail_row approvalDetail_row_row4">
                            <div v-show="pvt_isWinShow.img"
                                 :class="{approvalDetail_col:true,approvalDetail_col_img:true,approvalDetail_col_img_size_large:attr.size==='large',approvalDetail_col_img_size_medium:attr.size==='medium',approvalDetail_col_img_size_small:attr.size==='small',approvalDetail_col_img_size_min:attr.size==='min',approvalDetail_col_img_checked:attr.checked,approvalDetail_col_img_disable:attr.disabled}">

                                <lm2b-image
                                        ref="imgRef"
                                        refId="imgRef"
                                        v-show="pvt_isShow.img === 'imgRef'"
                                        :paraVarPair="pvt_img.imgRef.paraVarPair"
                                        :para="pvt_img.imgRef.para"
                                        :attr="pvt_img.imgRef.attr">
                                </lm2b-image>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row5">
                            <div v-show="pvt_isWinShow.name"
                                 :class="{approvalDetail_col:true,approvalDetail_col_name:true,approvalDetail_col_name_size_large:attr.size==='large',approvalDetail_col_name_size_medium:attr.size==='medium',approvalDetail_col_name_size_small:attr.size==='small',approvalDetail_col_name_size_min:attr.size==='min',approvalDetail_col_name_checked:attr.checked,approvalDetail_col_name_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="nameRef"
                                        refId="nameRef"
                                        v-show="pvt_isShow.name === 'nameRef'"
                                        :paraVarPair="pvt_name.nameRef.paraVarPair"
                                        :para="pvt_name.nameRef.para"
                                        :attr="pvt_name.nameRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row6">
                            <div v-show="pvt_isWinShow.time"
                                 :class="{approvalDetail_col:true,approvalDetail_col_time:true,approvalDetail_col_time_size_large:attr.size==='large',approvalDetail_col_time_size_medium:attr.size==='medium',approvalDetail_col_time_size_small:attr.size==='small',approvalDetail_col_time_size_min:attr.size==='min',approvalDetail_col_time_checked:attr.checked,approvalDetail_col_time_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="timeRef"
                                        refId="timeRef"
                                        v-show="pvt_isShow.time === 'timeRef'"
                                        :paraVarPair="pvt_time.timeRef.paraVarPair"
                                        :para="pvt_time.timeRef.para"
                                        :attr="pvt_time.timeRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row7">
                            <div v-show="pvt_isWinShow.address"
                                 :class="{approvalDetail_col:true,approvalDetail_col_address:true,approvalDetail_col_address_size_large:attr.size==='large',approvalDetail_col_address_size_medium:attr.size==='medium',approvalDetail_col_address_size_small:attr.size==='small',approvalDetail_col_address_size_min:attr.size==='min',approvalDetail_col_address_checked:attr.checked,approvalDetail_col_address_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="addressRef"
                                        refId="addressRef"
                                        v-show="pvt_isShow.address === 'addressRef'"
                                        :paraVarPair="pvt_address.addressRef.paraVarPair"
                                        :para="pvt_address.addressRef.para"
                                        :attr="pvt_address.addressRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="approvalDetail_row approvalDetail_row_row8">
                    <div v-show="pvt_isWinShow.detailWrap"
                         :class="{approvalDetail_col:true,approvalDetail_col_detailWrap:true,approvalDetail_col_detailWrap_size_large:attr.size==='large',approvalDetail_col_detailWrap_size_medium:attr.size==='medium',approvalDetail_col_detailWrap_size_small:attr.size==='small',approvalDetail_col_detailWrap_size_min:attr.size==='min',approvalDetail_col_detailWrap_checked:attr.checked,approvalDetail_col_detailWrap_disable:attr.disabled}">

                        <div class="approvalDetail_row approvalDetail_row_row9">
                            <div v-show="pvt_isWinShow.detailText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_detailText:true,approvalDetail_col_detailText_size_large:attr.size==='large',approvalDetail_col_detailText_size_medium:attr.size==='medium',approvalDetail_col_detailText_size_small:attr.size==='small',approvalDetail_col_detailText_size_min:attr.size==='min',approvalDetail_col_detailText_checked:attr.checked,approvalDetail_col_detailText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="detailTextRef"
                                        refId="detailTextRef"
                                        v-show="pvt_isShow.detailText === 'detailTextRef'"
                                        :paraVarPair="pvt_detailText.detailTextRef.paraVarPair"
                                        :para="pvt_detailText.detailTextRef.para"
                                        :attr="pvt_detailText.detailTextRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row10">
                            <div v-show="pvt_isWinShow.detailContent"
                                 :class="{approvalDetail_col:true,approvalDetail_col_detailContent:true,approvalDetail_col_detailContent_size_large:attr.size==='large',approvalDetail_col_detailContent_size_medium:attr.size==='medium',approvalDetail_col_detailContent_size_small:attr.size==='small',approvalDetail_col_detailContent_size_min:attr.size==='min',approvalDetail_col_detailContent_checked:attr.checked,approvalDetail_col_detailContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="detailContentRef"
                                        refId="detailContentRef"
                                        v-show="pvt_isShow.detailContent === 'detailContentRef'"
                                        :paraVarPair="pvt_detailContent.detailContentRef.paraVarPair"
                                        :para="pvt_detailContent.detailContentRef.para"
                                        :attr="pvt_detailContent.detailContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row11">
                            <div v-show="pvt_isWinShow.detailMoreBtn"
                                 :class="{approvalDetail_col:true,approvalDetail_col_detailMoreBtn:true,approvalDetail_col_detailMoreBtn_size_large:attr.size==='large',approvalDetail_col_detailMoreBtn_size_medium:attr.size==='medium',approvalDetail_col_detailMoreBtn_size_small:attr.size==='small',approvalDetail_col_detailMoreBtn_size_min:attr.size==='min',approvalDetail_col_detailMoreBtn_checked:attr.checked,approvalDetail_col_detailMoreBtn_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="detailMoreRef"
                                        refId="detailMoreRef"
                                        v-show="pvt_isShow.detailMoreBtn === 'detailMoreRef'"
                                        :paraVarPair="pvt_detailMoreBtn.detailMoreRef.paraVarPair"
                                        :para="pvt_detailMoreBtn.detailMoreRef.para"
                                        :attr="pvt_detailMoreBtn.detailMoreRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="approvalDetail_row approvalDetail_row_row12">
                    <div v-show="pvt_isWinShow.activityInfoWrap"
                         :class="{approvalDetail_col:true,approvalDetail_col_activityInfoWrap:true,approvalDetail_col_activityInfoWrap_size_large:attr.size==='large',approvalDetail_col_activityInfoWrap_size_medium:attr.size==='medium',approvalDetail_col_activityInfoWrap_size_small:attr.size==='small',approvalDetail_col_activityInfoWrap_size_min:attr.size==='min',approvalDetail_col_activityInfoWrap_checked:attr.checked,approvalDetail_col_activityInfoWrap_disable:attr.disabled}">

                        <div class="approvalDetail_row approvalDetail_row_row13">
                            <div v-show="pvt_isWinShow.lightText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_lightText:true,approvalDetail_col_lightText_size_large:attr.size==='large',approvalDetail_col_lightText_size_medium:attr.size==='medium',approvalDetail_col_lightText_size_small:attr.size==='small',approvalDetail_col_lightText_size_min:attr.size==='min',approvalDetail_col_lightText_checked:attr.checked,approvalDetail_col_lightText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="lightTextRef"
                                        refId="lightTextRef"
                                        v-show="pvt_isShow.lightText === 'lightTextRef'"
                                        :paraVarPair="pvt_lightText.lightTextRef.paraVarPair"
                                        :para="pvt_lightText.lightTextRef.para"
                                        :attr="pvt_lightText.lightTextRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row14">
                            <div v-show="pvt_isWinShow.lightContent"
                                 :class="{approvalDetail_col:true,approvalDetail_col_lightContent:true,approvalDetail_col_lightContent_size_large:attr.size==='large',approvalDetail_col_lightContent_size_medium:attr.size==='medium',approvalDetail_col_lightContent_size_small:attr.size==='small',approvalDetail_col_lightContent_size_min:attr.size==='min',approvalDetail_col_lightContent_checked:attr.checked,approvalDetail_col_lightContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="lightContentRef"
                                        refId="lightContentRef"
                                        v-show="pvt_isShow.lightContent === 'lightContentRef'"
                                        :paraVarPair="pvt_lightContent.lightContentRef.paraVarPair"
                                        :para="pvt_lightContent.lightContentRef.para"
                                        :attr="pvt_lightContent.lightContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row15">
                            <div v-show="pvt_isWinShow.sortText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_sortText:true,approvalDetail_col_sortText_size_large:attr.size==='large',approvalDetail_col_sortText_size_medium:attr.size==='medium',approvalDetail_col_sortText_size_small:attr.size==='small',approvalDetail_col_sortText_size_min:attr.size==='min',approvalDetail_col_sortText_checked:attr.checked,approvalDetail_col_sortText_disable:attr.disabled}">
                                <lm2b-link-text
                                        style="border-left:4px solid #12B0FF;padding-left: 6px;"
                                        ref="sortTextRef"
                                        refId="sortTextRef"
                                        v-show="pvt_isShow.sortText === 'sortTextRef'"
                                        :paraVarPair="pvt_sortText.sortTextRef.paraVarPair"
                                        :para="pvt_sortText.sortTextRef.para"
                                        :attr="pvt_sortText.sortTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.sortContent"
                                 :class="{approvalDetail_col:true,approvalDetail_col_sortContent:true,approvalDetail_col_sortContent_size_large:attr.size==='large',approvalDetail_col_sortContent_size_medium:attr.size==='medium',approvalDetail_col_sortContent_size_small:attr.size==='small',approvalDetail_col_sortContent_size_min:attr.size==='min',approvalDetail_col_sortContent_checked:attr.checked,approvalDetail_col_sortContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="sortContentRef"
                                        refId="sortContentRef"
                                        v-show="pvt_isShow.sortContent === 'sortContentRef'"
                                        :paraVarPair="pvt_sortContent.sortContentRef.paraVarPair"
                                        :para="pvt_sortContent.sortContentRef.para"
                                        :attr="pvt_sortContent.sortContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row16">
                            <div v-show="pvt_isWinShow.showNumText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_showNumText:true,approvalDetail_col_showNumText_size_large:attr.size==='large',approvalDetail_col_showNumText_size_medium:attr.size==='medium',approvalDetail_col_showNumText_size_small:attr.size==='small',approvalDetail_col_showNumText_size_min:attr.size==='min',approvalDetail_col_showNumText_checked:attr.checked,approvalDetail_col_showNumText_disable:attr.disabled}">

                                <lm2b-link-text
                                        style="border-left:4px solid #12B0FF;padding-left: 6px;"
                                        ref="showNumTextRef"
                                        refId="showNumTextRef"
                                        v-show="pvt_isShow.showNumText === 'showNumTextRef'"
                                        :paraVarPair="pvt_showNumText.showNumTextRef.paraVarPair"
                                        :para="pvt_showNumText.showNumTextRef.para"
                                        :attr="pvt_showNumText.showNumTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.showNumContent"
                                 :class="{approvalDetail_col:true,approvalDetail_col_showNumContent:true,approvalDetail_col_showNumContent_size_large:attr.size==='large',approvalDetail_col_showNumContent_size_medium:attr.size==='medium',approvalDetail_col_showNumContent_size_small:attr.size==='small',approvalDetail_col_showNumContent_size_min:attr.size==='min',approvalDetail_col_showNumContent_checked:attr.checked,approvalDetail_col_showNumContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="showNumContentRef"
                                        refId="showNumContentRef"
                                        v-show="pvt_isShow.showNumContent === 'showNumContentRef'"
                                        :paraVarPair="pvt_showNumContent.showNumContentRef.paraVarPair"
                                        :para="pvt_showNumContent.showNumContentRef.para"
                                        :attr="pvt_showNumContent.showNumContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row17">
                            <div v-show="pvt_isWinShow.ticket"
                                 :class="{approvalDetail_col:true,approvalDetail_col_ticket:true,approvalDetail_col_ticket_size_large:attr.size==='large',approvalDetail_col_ticket_size_medium:attr.size==='medium',approvalDetail_col_ticket_size_small:attr.size==='small',approvalDetail_col_ticket_size_min:attr.size==='min',approvalDetail_col_ticket_checked:attr.checked,approvalDetail_col_ticket_disable:attr.disabled}">

                                <lm2b-link-text
                                        style="border-left:4px solid #12B0FF;padding-left: 6px;"
                                        ref="ticketSetRef"
                                        refId="ticketSetRef"
                                        v-show="pvt_isShow.ticket === 'ticketSetRef'"
                                        :paraVarPair="pvt_ticket.ticketSetRef.paraVarPair"
                                        :para="pvt_ticket.ticketSetRef.para"
                                        :attr="pvt_ticket.ticketSetRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row18">
                            <div v-show="pvt_isWinShow.ticketInfoList"
                                 :class="{approvalDetail_col:true,approvalDetail_col_ticketInfoList:true,approvalDetail_col_ticketInfoList_size_large:attr.size==='large',approvalDetail_col_ticketInfoList_size_medium:attr.size==='medium',approvalDetail_col_ticketInfoList_size_small:attr.size==='small',approvalDetail_col_ticketInfoList_size_min:attr.size==='min',approvalDetail_col_ticketInfoList_checked:attr.checked,approvalDetail_col_ticketInfoList_disable:attr.disabled}">
                                <ticket-info-item
                                        ref="ticketInfoItemRef"
                                        refId="ticketInfoItemRef"
                                        v-show="pvt_isShow.ticketInfoList === 'ticketInfoItemRef'"
                                        :paraVarPair="pvt_ticketInfoList.ticketInfoItemRef.paraVarPair"
                                        v-for="(item, index) in pvt_ticketInfoList.ticketInfoItemRef.forData"
                                        :number="index"
                                        :para="item.para"
                                        :attr="item.attr">
                                </ticket-info-item>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row19">
                            <div v-show="pvt_isWinShow.formText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_formText:true,approvalDetail_col_formText_size_large:attr.size==='large',approvalDetail_col_formText_size_medium:attr.size==='medium',approvalDetail_col_formText_size_small:attr.size==='small',approvalDetail_col_formText_size_min:attr.size==='min',approvalDetail_col_formText_checked:attr.checked,approvalDetail_col_formText_disable:attr.disabled}">

                                <lm2b-link-text
                                        style="border-left:4px solid #12B0FF;padding-left: 6px;"
                                        ref="formTextRef"
                                        refId="formTextRef"
                                        v-show="pvt_isShow.formText === 'formTextRef'"
                                        :paraVarPair="pvt_formText.formTextRef.paraVarPair"
                                        :para="pvt_formText.formTextRef.para"
                                        :attr="pvt_formText.formTextRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row20">
                            <div v-show="pvt_isWinShow.formContent"
                                 :class="{approvalDetail_col:true,approvalDetail_col_formContent:true,approvalDetail_col_formContent_size_large:attr.size==='large',approvalDetail_col_formContent_size_medium:attr.size==='medium',approvalDetail_col_formContent_size_small:attr.size==='small',approvalDetail_col_formContent_size_min:attr.size==='min',approvalDetail_col_formContent_checked:attr.checked,approvalDetail_col_formContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="formContentRef"
                                        refId="formContentRef"
                                        v-show="pvt_isShow.formContent === 'formContentRef'"
                                        :paraVarPair="pvt_formContent.formContentRef.paraVarPair"
                                        :para="pvt_formContent.formContentRef.para"
                                        :attr="pvt_formContent.formContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row21">
                            <div v-show="pvt_isWinShow.refundText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_refundText:true,approvalDetail_col_refundText_size_large:attr.size==='large',approvalDetail_col_refundText_size_medium:attr.size==='medium',approvalDetail_col_refundText_size_small:attr.size==='small',approvalDetail_col_refundText_size_min:attr.size==='min',approvalDetail_col_refundText_checked:attr.checked,approvalDetail_col_refundText_disable:attr.disabled}">

                                <lm2b-link-text
                                        style="border-left:4px solid #12B0FF;padding-left: 6px;"
                                        ref="refundTextRef"
                                        refId="refundTextRef"
                                        v-show="pvt_isShow.refundText === 'refundTextRef'"
                                        :paraVarPair="pvt_refundText.refundTextRef.paraVarPair"
                                        :para="pvt_refundText.refundTextRef.para"
                                        :attr="pvt_refundText.refundTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.refundContent"
                                 :class="{approvalDetail_col:true,approvalDetail_col_refundContent:true,approvalDetail_col_refundContent_size_large:attr.size==='large',approvalDetail_col_refundContent_size_medium:attr.size==='medium',approvalDetail_col_refundContent_size_small:attr.size==='small',approvalDetail_col_refundContent_size_min:attr.size==='min',approvalDetail_col_refundContent_checked:attr.checked,approvalDetail_col_refundContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="refundContentRef"
                                        refId="refundContentRef"
                                        v-show="pvt_isShow.refundContent === 'refundContentRef'"
                                        :paraVarPair="pvt_refundContent.refundContentRef.paraVarPair"
                                        :para="pvt_refundContent.refundContentRef.para"
                                        :attr="pvt_refundContent.refundContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row22">
                            <div v-show="pvt_isWinShow.memberText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_memberText:true,approvalDetail_col_memberText_size_large:attr.size==='large',approvalDetail_col_memberText_size_medium:attr.size==='medium',approvalDetail_col_memberText_size_small:attr.size==='small',approvalDetail_col_memberText_size_min:attr.size==='min',approvalDetail_col_memberText_checked:attr.checked,approvalDetail_col_memberText_disable:attr.disabled}">

                                <lm2b-link-text
                                        style="border-left:4px solid #12B0FF;padding-left: 6px;"
                                        ref="memberTextRef"
                                        refId="memberTextRef"
                                        v-show="pvt_isShow.memberText === 'memberTextRef'"
                                        :paraVarPair="pvt_memberText.memberTextRef.paraVarPair"
                                        :para="pvt_memberText.memberTextRef.para"
                                        :attr="pvt_memberText.memberTextRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row23">
                            <div v-show="pvt_isWinShow.memberItemRef"
                                 :class="{approvalDetail_col:true,approvalDetail_col_memberItemRef:true,approvalDetail_col_memberItemRef_size_large:attr.size==='large',approvalDetail_col_memberItemRef_size_medium:attr.size==='medium',approvalDetail_col_memberItemRef_size_small:attr.size==='small',approvalDetail_col_memberItemRef_size_min:attr.size==='min',approvalDetail_col_memberItemRef_checked:attr.checked,approvalDetail_col_memberItemRef_disable:attr.disabled}">
                                <member-item
                                        ref="memberItemRef"
                                        refId="memberItemRef"
                                        v-show="pvt_isShow.memberItemRef === 'memberItemRef'"
                                        :paraVarPair="pvt_memberItemRef.memberItemRef.paraVarPair"
                                        v-for="(item, index) in pvt_memberItemRef.memberItemRef.forData"
                                        :number="index"
                                        :para="item.para"
                                        :attr="item.attr">
                                </member-item>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="approvalDetail_row approvalDetail_row_row24">
                    <div v-show="pvt_isWinShow.budgetWrap"
                         :class="{approvalDetail_col:true,approvalDetail_col_budgetWrap:true,approvalDetail_col_budgetWrap_size_large:attr.size==='large',approvalDetail_col_budgetWrap_size_medium:attr.size==='medium',approvalDetail_col_budgetWrap_size_small:attr.size==='small',approvalDetail_col_budgetWrap_size_min:attr.size==='min',approvalDetail_col_budgetWrap_checked:attr.checked,approvalDetail_col_budgetWrap_disable:attr.disabled}">

                        <div class="approvalDetail_row approvalDetail_row_row25">
                            <div v-show="pvt_isWinShow.budgetText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_budgetText:true,approvalDetail_col_budgetText_size_large:attr.size==='large',approvalDetail_col_budgetText_size_medium:attr.size==='medium',approvalDetail_col_budgetText_size_small:attr.size==='small',approvalDetail_col_budgetText_size_min:attr.size==='min',approvalDetail_col_budgetText_checked:attr.checked,approvalDetail_col_budgetText_disable:attr.disabled}">

                                <lm2b-link-text
                                        style="border-left:4px solid #12B0FF;padding-left: 6px;"
                                        ref="budgetTextRef"
                                        refId="budgetTextRef"
                                        v-show="pvt_isShow.budgetText === 'budgetTextRef'"
                                        :paraVarPair="pvt_budgetText.budgetTextRef.paraVarPair"
                                        :para="pvt_budgetText.budgetTextRef.para"
                                        :attr="pvt_budgetText.budgetTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.budgetTotal"
                                 :class="{approvalDetail_col:true,approvalDetail_col_budgetTotal:true,approvalDetail_col_budgetTotal_size_large:attr.size==='large',approvalDetail_col_budgetTotal_size_medium:attr.size==='medium',approvalDetail_col_budgetTotal_size_small:attr.size==='small',approvalDetail_col_budgetTotal_size_min:attr.size==='min',approvalDetail_col_budgetTotal_checked:attr.checked,approvalDetail_col_budgetTotal_disable:attr.disabled}">

                                <lm2b-link-text
                                        style="margin-right: 60px;"
                                        ref="budgetTotalRef"
                                        refId="budgetTotalRef"
                                        v-show="pvt_isShow.budgetTotal === 'budgetTotalRef'"
                                        :paraVarPair="pvt_budgetTotal.budgetTotalRef.paraVarPair"
                                        :para="pvt_budgetTotal.budgetTotalRef.para"
                                        :attr="pvt_budgetTotal.budgetTotalRef.attr">
                                </lm2b-link-text>
                                <span style="position:absolute;right:16px;color:#FC7122;font-size:14px;">{{totalNum}}</span>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row26">
                            <div v-show="pvt_isWinShow.outcome"
                                 :class="{approvalDetail_col:true,approvalDetail_col_outcome:true,approvalDetail_col_outcome_size_large:attr.size==='large',approvalDetail_col_outcome_size_medium:attr.size==='medium',approvalDetail_col_outcome_size_small:attr.size==='small',approvalDetail_col_outcome_size_min:attr.size==='min',approvalDetail_col_outcome_checked:attr.checked,approvalDetail_col_outcome_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="outcomeRef"
                                        refId="outcomeRef"
                                        v-show="pvt_isShow.outcome === 'outcomeRef'"
                                        :paraVarPair="pvt_outcome.outcomeRef.paraVarPair"
                                        :para="pvt_outcome.outcomeRef.para"
                                        :attr="pvt_outcome.outcomeRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.yuanText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_yuanText:true,approvalDetail_col_yuanText_size_large:attr.size==='large',approvalDetail_col_yuanText_size_medium:attr.size==='medium',approvalDetail_col_yuanText_size_small:attr.size==='small',approvalDetail_col_yuanText_size_min:attr.size==='min',approvalDetail_col_yuanText_checked:attr.checked,approvalDetail_col_yuanText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="yuanTextRef"
                                        refId="yuanTextRef"
                                        v-show="pvt_isShow.yuanText === 'yuanTextRef'"
                                        :paraVarPair="pvt_yuanText.yuanTextRef.paraVarPair"
                                        :para="pvt_yuanText.yuanTextRef.para"
                                        :attr="pvt_yuanText.yuanTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.totalText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_totalText:true,approvalDetail_col_totalText_size_large:attr.size==='large',approvalDetail_col_totalText_size_medium:attr.size==='medium',approvalDetail_col_totalText_size_small:attr.size==='small',approvalDetail_col_totalText_size_min:attr.size==='min',approvalDetail_col_totalText_checked:attr.checked,approvalDetail_col_totalText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="totalTextRef"
                                        refId="totalTextRef"
                                        v-show="pvt_isShow.totalText === 'totalTextRef'"
                                        :paraVarPair="pvt_totalText.totalTextRef.paraVarPair"
                                        :para="pvt_totalText.totalTextRef.para"
                                        :attr="pvt_totalText.totalTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.noteText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_noteText:true,approvalDetail_col_noteText_size_large:attr.size==='large',approvalDetail_col_noteText_size_medium:attr.size==='medium',approvalDetail_col_noteText_size_small:attr.size==='small',approvalDetail_col_noteText_size_min:attr.size==='min',approvalDetail_col_noteText_checked:attr.checked,approvalDetail_col_noteText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="noteTextRef"
                                        refId="noteTextRef"
                                        v-show="pvt_isShow.noteText === 'noteTextRef'"
                                        :paraVarPair="pvt_noteText.noteTextRef.paraVarPair"
                                        :para="pvt_noteText.noteTextRef.para"
                                        :attr="pvt_noteText.noteTextRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row27">
                            <div v-show="pvt_isWinShow.budgetItem"
                                 :class="{approvalDetail_col:true,approvalDetail_col_budgetItem:true,approvalDetail_col_budgetItem_size_large:attr.size==='large',approvalDetail_col_budgetItem_size_medium:attr.size==='medium',approvalDetail_col_budgetItem_size_small:attr.size==='small',approvalDetail_col_budgetItem_size_min:attr.size==='min',approvalDetail_col_budgetItem_checked:attr.checked,approvalDetail_col_budgetItem_disable:attr.disabled}">
                                <budget-item
                                        ref="budgetItemRef"
                                        refId="budgetItemRef"
                                        v-show="pvt_isShow.budgetItem === 'budgetItemRef'"
                                        :paraVarPair="pvt_budgetItem.budgetItemRef.paraVarPair"
                                        v-for="(item, index) in pvt_budgetItem.budgetItemRef.forData"
                                        :number="index"
                                        :para="item.para"
                                        :attr="item.attr">
                                </budget-item>
                            </div>
                        </div>
                        <div class="approvalDetail_row approvalDetail_row_row28">
                            <div v-show="pvt_isWinShow.budgetMore"
                                 :class="{approvalDetail_col:true,approvalDetail_col_budgetMore:true,approvalDetail_col_budgetMore_size_large:attr.size==='large',approvalDetail_col_budgetMore_size_medium:attr.size==='medium',approvalDetail_col_budgetMore_size_small:attr.size==='small',approvalDetail_col_budgetMore_size_min:attr.size==='min',approvalDetail_col_budgetMore_checked:attr.checked,approvalDetail_col_budgetMore_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="budgetMoreRef"
                                        refId="budgetMoreRef"
                                        v-show="pvt_isShow.budgetMore === 'budgetMoreRef'"
                                        :paraVarPair="pvt_budgetMore.budgetMoreRef.paraVarPair"
                                        :para="pvt_budgetMore.budgetMoreRef.para"
                                        :attr="pvt_budgetMore.budgetMoreRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="approvalDetail_row approvalDetail_row_row29">
                    <div v-show="pvt_isWinShow.publicWrap"
                         :class="{approvalDetail_col:true,approvalDetail_col_publicWrap:true,approvalDetail_col_publicWrap_size_large:attr.size==='large',approvalDetail_col_publicWrap_size_medium:attr.size==='medium',approvalDetail_col_publicWrap_size_small:attr.size==='small',approvalDetail_col_publicWrap_size_min:attr.size==='min',approvalDetail_col_publicWrap_checked:attr.checked,approvalDetail_col_publicWrap_disable:attr.disabled}">

                        <div class="approvalDetail_row approvalDetail_row_row30">
                            <div v-show="pvt_isWinShow.releaseSet"
                                 :class="{approvalDetail_col:true,approvalDetail_col_releaseSet:true,approvalDetail_col_releaseSet_size_large:attr.size==='large',approvalDetail_col_releaseSet_size_medium:attr.size==='medium',approvalDetail_col_releaseSet_size_small:attr.size==='small',approvalDetail_col_releaseSet_size_min:attr.size==='min',approvalDetail_col_releaseSet_checked:attr.checked,approvalDetail_col_releaseSet_disable:attr.disabled}">

                                <lm2b-link-text
                                        style="border-left:4px solid #12B0FF;padding-left: 6px;"
                                        ref="releaseSetRef"
                                        refId="releaseSetRef"
                                        v-show="pvt_isShow.releaseSet === 'releaseSetRef'"
                                        :paraVarPair="pvt_releaseSet.releaseSetRef.paraVarPair"
                                        :para="pvt_releaseSet.releaseSetRef.para"
                                        :attr="pvt_releaseSet.releaseSetRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.publicBtn"
                                 :class="{approvalDetail_col:true,approvalDetail_col_publicBtn:true,approvalDetail_col_publicBtn_size_large:attr.size==='large',approvalDetail_col_publicBtn_size_medium:attr.size==='medium',approvalDetail_col_publicBtn_size_small:attr.size==='small',approvalDetail_col_publicBtn_size_min:attr.size==='min',approvalDetail_col_publicBtn_checked:attr.checked,approvalDetail_col_publicBtn_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="publicBtnRef"
                                        refId="publicBtnRef"
                                        v-show="pvt_isShow.publicBtn === 'publicBtnRef'"
                                        :paraVarPair="pvt_publicBtn.publicBtnRef.paraVarPair"
                                        :para="pvt_publicBtn.publicBtnRef.para"
                                        :attr="pvt_publicBtn.publicBtnRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div v-show="pvt_isWinShow.publicText"
                                 :class="{approvalDetail_col:true,approvalDetail_col_publicText:true,approvalDetail_col_publicText_size_large:attr.size==='large',approvalDetail_col_publicText_size_medium:attr.size==='medium',approvalDetail_col_publicText_size_small:attr.size==='small',approvalDetail_col_publicText_size_min:attr.size==='min',approvalDetail_col_publicText_checked:attr.checked,approvalDetail_col_publicText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="publicTextRef"
                                        refId="publicTextRef"
                                        v-show="pvt_isShow.publicText === 'publicTextRef'"
                                        :paraVarPair="pvt_publicText.publicTextRef.paraVarPair"
                                        :para="pvt_publicText.publicTextRef.para"
                                        :attr="pvt_publicText.publicTextRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="approvalDetail_row approvalDetail_row_row31">
                    <div v-show="pvt_isWinShow.btnWrap"
                         :class="{approvalDetail_col:true,approvalDetail_col_btnWrap:true,approvalDetail_col_btnWrap_size_large:attr.size==='large',approvalDetail_col_btnWrap_size_medium:attr.size==='medium',approvalDetail_col_btnWrap_size_small:attr.size==='small',approvalDetail_col_btnWrap_size_min:attr.size==='min',approvalDetail_col_btnWrap_checked:attr.checked,approvalDetail_col_btnWrap_disable:attr.disabled}">

                        <div class="approvalDetail_row approvalDetail_row_row32">
                            <div v-show="pvt_isWinShow.rejectBtn"
                                 :class="{approvalDetail_col:true,approvalDetail_col_rejectBtn:true,approvalDetail_col_rejectBtn_size_large:attr.size==='large',approvalDetail_col_rejectBtn_size_medium:attr.size==='medium',approvalDetail_col_rejectBtn_size_small:attr.size==='small',approvalDetail_col_rejectBtn_size_min:attr.size==='min',approvalDetail_col_rejectBtn_checked:attr.checked,approvalDetail_col_rejectBtn_disable:attr.disabled}">

                                <lm2b-button
                                        ref="rejectBtnRef"
                                        refId="rejectBtnRef"
                                        v-show="pvt_isShow.rejectBtn === 'rejectBtnRef'"
                                        :paraVarPair="pvt_rejectBtn.rejectBtnRef.paraVarPair"
                                        :para="pvt_rejectBtn.rejectBtnRef.para"
                                        :attr="pvt_rejectBtn.rejectBtnRef.attr">
                                </lm2b-button>
                            </div>
                            <div v-show="pvt_isWinShow.passBtn"
                                 :class="{approvalDetail_col:true,approvalDetail_col_passBtn:true,approvalDetail_col_passBtn_size_large:attr.size==='large',approvalDetail_col_passBtn_size_medium:attr.size==='medium',approvalDetail_col_passBtn_size_small:attr.size==='small',approvalDetail_col_passBtn_size_min:attr.size==='min',approvalDetail_col_passBtn_checked:attr.checked,approvalDetail_col_passBtn_disable:attr.disabled}">

                                <lm2b-button
                                        ref="passBtnRef"
                                        refId="passBtnRef"
                                        v-show="pvt_isShow.passBtn === 'passBtnRef'"
                                        :paraVarPair="pvt_passBtn.passBtnRef.paraVarPair"
                                        :para="pvt_passBtn.passBtnRef.para"
                                        :attr="pvt_passBtn.passBtnRef.attr">
                                </lm2b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div :class="{approvalDetail_mask:true}"
             v-if="pvt_isShow.confirmDialog === 'confirmDialogRef'">
            <div :class="{approvalDetail_dialog:true,approvalDetail_col:true,approvalDetail_col_confirmDialog:true,approvalDetail_col_confirmDialog_size_large:attr.size==='large',approvalDetail_col_confirmDialog_size_medium:attr.size==='medium',approvalDetail_col_confirmDialog_size_small:attr.size==='small',approvalDetail_col_confirmDialog_size_min:attr.size==='min',approvalDetail_col_confirmDialog_checked:attr.checked,approvalDetail_col_confirmDialog_disable:attr.disabled}">
                <confirm-dialog
                        ref="confirmDialogRef"
                        refId="confirmDialogRef"
                        :paraVarPair="pvt_confirmDialog.confirmDialogRef.paraVarPair"
                        :para="pvt_confirmDialog.confirmDialogRef.para"
                        :attr="pvt_confirmDialog.confirmDialogRef.attr">
                </confirm-dialog>
            </div>
        </div>
        <div :class="{approvalDetail_mask:true}"
             v-if="pvt_isShow.rejectDialog === 'rejectDialogRef'">
            <div :class="{approvalDetail_dialog:true,approvalDetail_col:true,approvalDetail_col_rejectDialog:true,approvalDetail_col_rejectDialog_size_large:attr.size==='large',approvalDetail_col_rejectDialog_size_medium:attr.size==='medium',approvalDetail_col_rejectDialog_size_small:attr.size==='small',approvalDetail_col_rejectDialog_size_min:attr.size==='min',approvalDetail_col_rejectDialog_checked:attr.checked,approvalDetail_col_rejectDialog_disable:attr.disabled}">
                <rejectDialog
                        ref="rejectDialogRef"
                        refId="rejectDialogRef"
                        :paraVarPair="pvt_rejectDialog.rejectDialogRef.paraVarPair"
                        :para="pvt_rejectDialog.rejectDialogRef.para"
                        :attr="pvt_rejectDialog.rejectDialogRef.attr">
                </rejectDialog>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import list_header from '../listHeader/listHeader';
    import ticketInfoItem from './ticketInfoItem';
    import memberItem from './memberItem';
    import budgetItem from './budgetItem';
    import confirmDialog from '../../../activityManage/confirmDialog';
    import rejectDialog from './rejectDialog';

    export default {
        components: {list_header, ticketInfoItem, memberItem, budgetItem, confirmDialog, rejectDialog},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['header', 'img', 'name', 'time', 'address', 'detailText', 'detailContent', 'detailMoreBtn', 'lightText', 'lightContent', 'sortText', 'sortContent', 'showNumText', 'showNumContent', 'ticket', 'ticketInfoList', 'formText', 'formContent', 'refundText', 'refundContent', 'memberText', 'memberItemRef', 'budgetText', 'budgetTotal', 'outcome', 'yuanText', 'totalText', 'noteText', 'budgetItem', 'budgetMore', 'releaseSet', 'publicBtn', 'publicText', 'rejectBtn', 'passBtn', 'confirmDialog', 'rejectDialog'],
                    subModule: ['headerRef', 'imgRef', 'nameRef', 'timeRef', 'addressRef', 'detailTextRef', 'detailContentRef', 'detailMoreRef', 'lightTextRef', 'lightContentRef', 'sortTextRef', 'sortContentRef', 'showNumTextRef', 'showNumContentRef', 'ticketSetRef', 'ticketInfoItemRef', 'formTextRef', 'formContentRef', 'refundTextRef', 'refundContentRef', 'memberTextRef', 'memberItemRef', 'budgetTextRef', 'budgetTotalRef', 'outcomeRef', 'yuanTextRef', 'totalTextRef', 'noteTextRef', 'budgetItemRef', 'budgetMoreRef', 'releaseSetRef', 'publicBtnRef', 'publicTextRef', 'rejectBtnRef', 'passBtnRef', 'confirmDialogRef', 'rejectDialogRef'],
                },
                pvt_isShow: {
                    header: null,
                    img: null,
                    name: null,
                    time: null,
                    address: null,
                    detailText: null,
                    detailContent: null,
                    detailMoreBtn: null,
                    lightText: null,
                    lightContent: null,
                    sortText: null,
                    sortContent: null,
                    showNumText: null,
                    showNumContent: null,
                    ticket: null,
                    ticketInfoList: null,
                    formText: null,
                    formContent: null,
                    refundText: null,
                    refundContent: null,
                    memberText: null,
                    memberItemRef: null,
                    budgetText: null,
                    budgetTotal: null,
                    outcome: null,
                    yuanText: null,
                    totalText: null,
                    noteText: null,
                    budgetItem: null,
                    budgetMore: null,
                    releaseSet: null,
                    publicBtn: null,
                    publicText: null,
                    rejectBtn: null,
                    passBtn: null,
                    confirmDialog: null,
                    rejectDialog: null,
                },
                pvt_isWinShow: {
                    approvalDetailWindow: true,
                    header: true,
                    content: true,
                    titleWrap: true,
                    img: true,
                    name: true,
                    time: true,
                    address: true,
                    detailWrap: true,
                    detailText: true,
                    detailContent: true,
                    detailMoreBtn: true,
                    activityInfoWrap: true,
                    lightText: true,
                    lightContent: true,
                    sortText: true,
                    sortContent: true,
                    showNumText: true,
                    showNumContent: true,
                    ticket: true,
                    ticketInfoList: true,
                    formText: true,
                    formContent: true,
                    refundText: true,
                    refundContent: true,
                    memberText: true,
                    memberItemRef: true,
                    budgetWrap: true,
                    budgetText: true,
                    budgetTotal: true,
                    outcome: true,
                    yuanText: true,
                    totalText: true,
                    noteText: true,
                    budgetItem: true,
                    budgetMore: true,
                    publicWrap: true,
                    releaseSet: true,
                    publicBtn: true,
                    publicText: true,
                    btnWrap: true,
                    rejectBtn: true,
                    passBtn: true,
                },
                pvt_eventPortInput: ['backEvent', 'activityApprovalEvent'],

                mac:mac.mac,

                activityTime: '12:23',
                place: '呼唤一个不',
                detailContent: 'sadasfs',
                curTicketIdArr: [1, 2],
                ticketSizeArr: ['medium', 'medium'],
                formContent: '姓名、手机',
                functionNameArr: ['主持人', '主讲人', '助手', '在线客服'],
                functionSizeArr: ['medium', 'medium', 'medium', 'medium'],
                curBudgetIdArr: [1, 2],
                budgetSizeArr: ['medium', 'medium'],
                totalNum: 0,
                curActivityId: null,
                activitySort: '无',
                showEnrollInfo: '显示',
                refundContent: '不支持退款',
                publicText: '公开部门'
            };
        },
        watch: {},
        computed: {
            pvt_header: function () {
                return {
                    headerRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_img: function () {
                return {
                    imgRef: {
                        paraVarPair: {},
                        para: {
                            image: 'http://img2.imgtn.bdimg.com/it/u=2915512436,1541993188&fm=26&gp=0.jpg',
                        },
                        attr: {},
                    },
                };
            },
            pvt_name: function () {
                return {
                    nameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.name],
                                $arrValue: [this.curActivityId]
                            }],
                        },
                        attr: {
                            fontWeight: true,
                            color: '#333',
                            fontSize: '18px',
                        },
                    },
                };
            },
            pvt_time: function () {
                return {
                    timeRef: {
                        paraVarPair: {
                            textData: 'activityTime',
                        },
                        para: {
                            textData: this.activityTime,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                            icon: 'van-icon-underway-o',
                        },
                    },
                };
            },
            pvt_address: function () {
                return {
                    addressRef: {
                        paraVarPair: {
                            textData: 'place',
                        },
                        para: {
                            textData: this.place,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                            icon: 'van-icon-location-o',
                        },
                    },
                };
            },
            pvt_detailText: function () {
                return {
                    detailTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '活动详情',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_detailContent: function () {
                return {
                    detailContentRef: {
                        paraVarPair: {
                            textData: 'detailContent',
                        },
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.details],
                                $arrValue: [this.curActivityId]
                            }],
                            // textData: this.detailContent,
                        },
                        attr: {
                            html: true,
                            label: 'div',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_detailMoreBtn: function () {
                return {
                    detailMoreRef: {
                        paraVarPair: {},
                        para: {
                            textData: '收起',
                        },
                        attr: {
                            isClick: true,
                            color: '#12B0FF',
                            icon: 'van-icon-arrow-up',
                            iconIsRight: true,
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_lightText: function () {
                return {
                    lightTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '活动亮点',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_lightContent: function () {
                return {
                    lightContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.abstract],
                                $arrValue: [this.curActivityId]
                            }],
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#333'
                        },
                    },
                };
            },
            pvt_sortText: function () {
                return {
                    sortTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '活动分类',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_sortContent: function () {
                return {
                    sortContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.activitySort,
                        },
                        attr: {
                            ellipsis: true,
                            fontSize: '14px',
                            color: '#333'
                        },
                    },
                };
            },
            pvt_showNumText: function () {
                return {
                    showNumTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '报名人数',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_showNumContent: function () {
                return {
                    showNumContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.showEnrollInfo,
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#333'
                        },
                    },
                };
            },
            pvt_ticket: function () {
                return {
                    ticketSetRef: {
                        paraVarPair: {},
                        para: {
                            textData: '票种设置',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_ticketInfoList: function () {
                let loopModule = {
                    ticketInfoItemRef: {
                        para: {
                            curTicketId: this.curTicketIdArr,
                        },
                        attr: {
                            size: this.ticketSizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    ticketInfoItemRef: {
                        paraVarPair: {
                            curTicketId: 'curTicketIdArr',
                        },
                        forData: forData.ticketInfoItemRef,
                    },
                };
            },
            pvt_formText: function () {
                return {
                    formTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '报名表单',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_formContent: function () {
                return {
                    formContentRef: {
                        paraVarPair: {
                            textData: 'formContent',
                        },
                        para: {
                            textData: this.formContent,
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#333'
                        },
                    },
                };
            },
            pvt_refundText: function () {
                return {
                    refundTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '是否支持退款',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_refundContent: function () {
                return {
                    refundContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.refundContent,
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#333'
                        },
                    },
                };
            },
            pvt_memberText: function () {
                return {
                    memberTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '活动管理成员',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_memberItemRef: function () {
                let loopModule = {
                    memberItemRef: {
                        para: {
                            functionName: this.functionNameArr,
                        },
                        attr: {
                            size: this.functionSizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    memberItemRef: {
                        paraVarPair: {
                            functionName: 'functionNameArr',
                        },
                        forData: forData.memberItemRef,
                    },
                };
            },
            pvt_budgetText: function () {
                return {
                    budgetTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '活动预算',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_budgetTotal: function () {
                return {
                    budgetTotalRef: {
                        paraVarPair: {},
                        para: {
                            textData: '总计：',
                            // textData: this.totalNum,
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#333'
                        },
                    },
                };
            },
            pvt_outcome: function () {
                return {
                    outcomeRef: {
                        paraVarPair: {},
                        para: {
                            textData: '支出分类',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                            background: '#f4f4f4',
                        },
                    },
                };
            },
            pvt_yuanText: function () {
                return {
                    yuanTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '单位',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                            background: '#f4f4f4',
                        },
                    },
                };
            },
            pvt_totalText: function () {
                return {
                    totalTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '预算支出',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                            background: '#f4f4f4',
                        },
                    },
                };
            },
            pvt_noteText: function () {
                return {
                    noteTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '备注',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                            background: '#f4f4f4',
                        },
                    },
                };
            },
            pvt_budgetItem: function () {
                let loopModule = {
                    budgetItemRef: {
                        para: {
                            curBudgetId: this.curBudgetIdArr,
                        },
                        attr: {
                            size: this.budgetSizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    budgetItemRef: {
                        paraVarPair: {
                            curBudgetId: 'curBudgetIdArr',
                        },
                        forData: forData.budgetItemRef,
                    },
                };
            },
            pvt_budgetMore: function () {
                return {
                    budgetMoreRef: {
                        paraVarPair: {},
                        para: {
                            textData: '收起',
                        },
                        attr: {
                            color: '#12B0FF',
                            icon: 'van-icon-arrow-up',
                            iconIsRight: true,
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_releaseSet: function () {
                return {
                    releaseSetRef: {
                        paraVarPair: {},
                        para: {
                            textData: '发布设置',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_publicBtn: function () {
                return {
                    publicBtnRef: {
                        paraVarPair: {},
                        para: {
                            textData: '',
                        },
                        attr: {
                            isClick: true,
                            color: '#12B0FF',
                            icon: 'van-icon-warning-o',
                        },
                    },
                };
            },
            pvt_publicText: function () {
                return {
                    publicTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.publicText,
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#333'
                        },
                    },
                };
            },
            pvt_rejectBtn: function () {
                return {
                    rejectBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['审批拒绝', 'van-icon-close'],
                        },
                        attr: {
                            type: 'text',
                            long: true,
                        },
                    },
                };
            },
            pvt_passBtn: function () {
                return {
                    passBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['审批通过', 'van-icon-passed'],
                        },
                        attr: {
                            type: 'text',
                            long: true,
                        },
                    },
                };
            },
            pvt_confirmDialog: function () {
                return {
                    confirmDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_rejectDialog: function () {
                return {
                    rejectDialogRef: {
                        paraVarPair: {},
                        para: {},
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
            startModule: function (curActivityId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'approvalDetail_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['imgRef', 'nameRef', 'timeRef', 'addressRef', 'detailTextRef', 'detailContentRef', 'detailMoreRef', 'lightTextRef', 'lightContentRef', 'sortTextRef', 'sortContentRef', 'showNumTextRef', 'showNumContentRef', 'ticketSetRef', 'formTextRef', 'formContentRef', 'refundTextRef', 'refundContentRef', 'memberTextRef', 'budgetTextRef', 'budgetTotalRef', 'outcomeRef', 'yuanTextRef', 'totalTextRef', 'noteTextRef', 'budgetMoreRef', 'releaseSetRef', 'publicBtnRef', 'publicTextRef', 'rejectBtnRef', 'passBtnRef']
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.place = '';
                            this.publicDepartment = '';
                            that.curActivityId = curActivityId;
                            that.curBudgetIdArr = [];
                            that.budgetSizeArr = [];
                            that.ticketSizeArr = [];
                            that.curTicketIdArr = [];

                            tableName = this.mac.tb.groupActivity;
                            record = [curActivityId];

                            this.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'inputGroup';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'inputGroup':
                            tableName = this.mac.tb.group;
                            record = [1];

                            this.sys.api.dataInput(tableName, record, '', function () {
                                para.nStep = 'inputActivity';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'inputActivity':
                            tableName = this.mac.tb.groupActivity;
                            record = [para.terActivityId];

                            this.sys.api.dataInput(tableName, record, '', function () {
                                para.nStep = 'getActivityData';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getActivityData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curActivityId];

                            this.sys.api.recordRead(tableName, dbData, function (result) {
                                let startTime = dbData[that.mac.fd.groupActivity.startTime][0];
                                let endTime = dbData[that.mac.fd.groupActivity.endTime][0];
                                that.activityTime = startTime + ' 至 ' + endTime;

                                for(let i = 0; i < dbData[that.mac.fd.groupActivity.place][0].name.length; i++) {
                                    that.place += dbData[that.mac.fd.groupActivity.place][0].name[i];
                                }
                                that.place += dbData[that.mac.fd.groupActivity.place][0].place;

                                dbData[that.mac.fd.groupActivity.showEnrollInfo][0] === that.mac.enum.groupActivity.showEnrollInfo.yes ? that.showEnrollInfo = '显示' : that.showEnrollInfo = '不显示';

                                // 0表示不支持退款：
                                if(dbData[that.mac.fd.groupActivity.refundObject][0].type === 0) {
                                    that.refundContent = '不支持退款'
                                } else {
                                    that.refundContent = '活动结束前' + dbData[that.mac.fd.groupActivity.refundObject][0].daysAgo + '天支持退款'
                                }

                                if(dbData[that.mac.fd.groupActivity.status][0] !== that.mac.enum.groupActivity.status.check) {
                                    that.showVessel('btnWrap', false);
                                }

                                if(dbData[that.mac.fd.groupActivity.pubicDepartment][0] === null && dbData[that.mac.fd.groupActivity.publicCustomer][0] !== null) {
                                    that.publicText = '公开客户';
                                    para.customerIdArr = dbData[that.mac.fd.groupActivity.pubicDepartment][0];
                                    para.nStep = 'getSortData';
                                } else if(dbData[that.mac.fd.groupActivity.pubicDepartment][0] !== null && dbData[that.mac.fd.groupActivity.publicCustomer][0] === null) {
                                    that.publicText = '公开部门';
                                    that.publicDepartment = dbData[that.mac.fd.groupActivity.pubicDepartment][0].join('、 ');
                                    para.nStep = 'getClerkData';
                                    // that.publicDepartment = dbData[that.mac.fd.groupActivity.pubicDepartment][0].join('、 ');
                                } else {
                                    that.publicText = '公开部门';
                                    that.publicDepartment = '';
                                    para.nStep = 'getSortData';
                                }

                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getClerkData':
                            if (para.i >= para.customerIdArr.length) {
                                para.i = 0;
                                para.nStep = 'getSortData';
                                dbFlag++;
                                break;
                            }

                            tableName = that.mac.tb.clerkSet;
                            condition = that.mac.fd.clerkSet.user + '=' + para.customerIdArr[para.i];
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.clerkSet.clerkName] = [];

                            that.sys.api.recordQuery(tableName, null, condition, dbData, function () {
                                para.clerkName = dbData[that.mac.fd.clerkSet.clerkName][0];
                                para.clerkId = dbData[that.mac.fd.id][0];
                                para.nStep = 'getDepartmentId';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'getDepartmentId':
                            tableName = that.mac.tb.clerkSet;
                            record = [para.clerkId];

                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                para.departmentId = result[0];
                                para.nStep = 'getDepartmentName';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'getDepartmentName':
                            tableName = that.mac.tb.department;
                            dbData = {};
                            dbData[that.mac.fd.id] = [para.departmentId];
                            dbData[that.mac.fd.department.name] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                para.departmentName = dbData[that.mac.fd.department.name][0];

                                that.publicDepartment += para.departmentName + '：' + para.clerkName + '； ';

                                para.i++;
                                para.nStep = 'getClerkData';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'getSortData':
                            tableName = this.mac.tb.groupClassify;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.groupClassify.secondName] = [];

                            this.sys.api.recordQuery(tableName, [curActivityId], condition, dbData, function (result) {
                                that.activitySort = dbData[that.mac.fd.groupClassify.secondName].join('、');

                                para.nStep = 'getFormData';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getFormData':
                            tableName = this.mac.tb.groupActivityEnrollForm;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.groupActivityEnrollForm.name] = [];

                            this.sys.api.recordQuery(tableName, [curActivityId], condition, dbData, function (result) {
                                that.formContent = dbData[that.mac.fd.groupActivityEnrollForm.name].join('、');

                                para.nStep = 'getBudgetData';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getBudgetData':
                            tableName = this.mac.tb.groupActivityBudgetForm;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.groupActivityBudgetForm.budgetAmount] = [];

                            this.sys.api.recordQuery(tableName, [curActivityId], condition, dbData, function (result) {
                                that.totalNum = 0;
                                for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    that.totalNum += dbData[that.mac.fd.groupActivityBudgetForm.budgetAmount][i];
                                    that.curBudgetIdArr.push(dbData[that.mac.fd.id][i]);
                                    that.budgetSizeArr.push('medium');
                                }
                                if(that.curBudgetIdArr.length === 0) {
                                    that.showVessel('budgetWrap', false, function () {
                                    }, function () {
                                    });
                                }
                                that.totalNum = '￥' + that.totalNum;
                                para.nStep = 'getTicketData';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getTicketData':
                            tableName = this.mac.tb.groupActivityTicketType;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];

                            this.sys.api.recordQuery(tableName, [curActivityId], condition, dbData, function (result) {
                                for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    that.curTicketIdArr.push(dbData[that.mac.fd.id][i]);
                                    that.ticketSizeArr.push('medium');
                                }
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(curActivityId, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'ticketInfoStart';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'ticketInfoStart':
                            if (para.i > that.sm.ticketInfoItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'budgetItemStart';
                                dbFlag++;
                                break;
                            }

                            that.sm.ticketInfoItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'ticketInfoStart';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'budgetItemStart':
                            if (para.i > that.sm.budgetItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'memberItemStart';
                                dbFlag++;
                                break;
                            }

                            that.sm.budgetItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'budgetItemStart';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                            case 'memberItemStart':
                            if (para.i > that.sm.memberItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'headStart';
                                dbFlag++;
                                break;
                            }

                            that.sm.memberItemRef[para.i].startModule(that.curActivityId, function () {
                                para.i++;
                                para.nStep = 'memberItemStart';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                title: '审批详情',
                                showMenu: false,
                            };
                            this.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('headerRef', 'budgetItemRef', 'ticketInfoItemRef', 'memberItemRef');
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
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
            backClick: function () {
                let that = this;
                that.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            rejectClick: function () {
                let that = this;
                that.showSubModule('rejectDialogRef', true, function () {
                    that.sm.rejectDialogRef.startModule(function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            passClick: function () {
                let that = this;
                let data = {
                    ref: 'pass',
                    title: '温馨提示',
                    desc: '确定同意通过审批吗',
                    btnText: ['取消', '确定']
                };

                that.showSubModule('confirmDialogRef', true, function () {
                    that.sm.confirmDialogRef.startModule(data, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            approvalPass(successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'approvalDetail_approvalPass';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [that.curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'statusModify';
                                if (++dbFlag === 2) {
                                    that.approvalPass(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'statusModify':
                            tableName = that.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curActivityId];
                            dbData[that.mac.fd.groupActivity.status] = [that.mac.enum.groupActivity.status.released];

                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.ep.activityApprovalEvent(para.terActivityId, null);
                                that.$notify({type: 'success', message: '审批通过成功！'});
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.approvalPass(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'end':
                            that.showVessel('btnWrap', false);
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
            approvalReject(value,successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'approvalDetail_approvalReject';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [that.curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'statusModify';
                                if (++dbFlag === 2) {
                                    that.approvalReject(value,successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'statusModify':
                            tableName = that.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curActivityId];
                            dbData[that.mac.fd.groupActivity.status] = [that.mac.enum.groupActivity.status.rejected];
                            dbData[that.mac.fd.groupActivity.refuseReason] = [value];

                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.ep.activityApprovalEvent(para.terActivityId, value);
                                that.$notify({type: 'success', message: '审批拒绝成功！'});
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.approvalReject(value,successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'end':
                            that.showVessel('btnWrap', false);
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
            confirmDialogConfirm: function (refId) {
                if (refId !== 'public') this.approvalPass(function() {},function() {});
            },

            publicClick:function(){
                let that = this;
                let data = {
                    ref: 'public',
                    title: '公开部门',
                    desc: !that.publicDepartment ? '无' : that.publicDepartment,
                    btnText: ['我知道了']
                };

                that.showSubModule('confirmDialogRef', true, function () {
                    that.sm.confirmDialogRef.startModule(data, function () {
                    }, function () {
                    });
                }, function () {
                });
            },




            headerRef_backEvent: function () {
                this.backClick();
            },
            publicBtnRef_textClickEvent: function () {
                this.publicClick();
            },
            rejectBtnRef_buttonClickEvent: function () {
                this.rejectClick();
            },
            passBtnRef_buttonClickEvent: function () {
                this.passClick();
            },
            confirmDialogRef_confirmEvent: function (refId) {
                this.confirmDialogConfirm(refId);
            },
            rejectDialogRef_confirmEvent: function (value,successCallBack, errorCallBack) {
                this.approvalReject(value,successCallBack, errorCallBack);
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .approvalDetail_container {
        width: 100%;
        height: 100%;
    }

    .approvalDetail_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .approvalDetail_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .approvalDetail_row {
        display: flex;
    }

    .approvalDetail_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .approvalDetail_dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .approvalDetail_col_approvalDetailWindow_size_medium {
        width: @approvalDetail-approvalDetailWindow-medium-width;
    }

    .approvalDetail_col_header_size_medium {
        width: @approvalDetail-header-medium-width;
    }

    .approvalDetail_col_header {
        background-color: mix(@approvalDetail-header-background-color, #fff, @approvalDetail-header-background-color-opacity);
    }

    .approvalDetail_col_content_size_medium {
        width: @approvalDetail-content-medium-width;
    }

    .approvalDetail_col_content {
        background-color: mix(@approvalDetail-content-background-color, #fff, @approvalDetail-content-background-color-opacity);
    }

    .approvalDetail_col_titleWrap_size_medium {
        width: @approvalDetail-titleWrap-medium-width;
        margin: @approvalDetail-titleWrap-medium-margin;
    }

    .approvalDetail_col_titleWrap {
        background-color: mix(@approvalDetail-titleWrap-background-color, #fff, @approvalDetail-titleWrap-background-color-opacity);
    }

    .approvalDetail_col_img_size_medium {
        width: @approvalDetail-img-medium-width;
        margin: @approvalDetail-img-medium-margin;
    }

    .approvalDetail_col_name_size_medium {
        width: @approvalDetail-name-medium-width;
        margin: @approvalDetail-name-medium-margin;
        padding: @approvalDetail-name-medium-padding;
    }

    .approvalDetail_col_time_size_medium {
        width: @approvalDetail-time-medium-width;
        padding: @approvalDetail-time-medium-padding;
        margin: @approvalDetail-time-medium-margin;
    }

    .approvalDetail_col_address_size_medium {
        width: @approvalDetail-address-medium-width;
        padding: @approvalDetail-address-medium-padding;
        margin: @approvalDetail-address-medium-margin;
    }

    .approvalDetail_col_detailWrap_size_medium {
        width: @approvalDetail-detailWrap-medium-width;
        margin: @approvalDetail-detailWrap-medium-margin;
    }

    .approvalDetail_col_detailWrap {
        background-color: mix(@approvalDetail-detailWrap-background-color, #fff, @approvalDetail-detailWrap-background-color-opacity);
    }

    .approvalDetail_col_detailText_size_medium {
        width: @approvalDetail-detailText-medium-width;
        margin: @approvalDetail-detailText-medium-margin;
        padding: @approvalDetail-detailText-medium-padding;
    }

    .approvalDetail_col_detailText {
        border-style: @approvalDetail-detailText-border-style;
        border-width: @approvalDetail-detailText-border-width;
        border-color: mix(@approvalDetail-detailText-border-color, #fff, @approvalDetail-detailText-hover-border-color-opacity);
    }

    .approvalDetail_col_detailContent_size_medium {
        width: @approvalDetail-detailContent-medium-width;
        padding: @approvalDetail-detailContent-medium-padding;
    }

    .approvalDetail_col_detailContent {
        border-style: @approvalDetail-detailContent-border-style;
        border-width: @approvalDetail-detailContent-border-width;
        border-color: mix(@approvalDetail-detailContent-border-color, #fff, @approvalDetail-detailContent-hover-border-color-opacity);
    }

    .approvalDetail_col_detailMoreBtn_size_medium {
        width: @approvalDetail-detailMoreBtn-medium-width;
        margin: @approvalDetail-detailMoreBtn-medium-margin;
        align-items: @approvalDetail-detailMoreBtn-medium-horizontal-position;
    }

    .approvalDetail_col_activityInfoWrap_size_medium {
        width: @approvalDetail-activityInfoWrap-medium-width;
        margin: @approvalDetail-activityInfoWrap-medium-margin;
    }

    .approvalDetail_col_activityInfoWrap {
        background-color: mix(@approvalDetail-activityInfoWrap-background-color, #fff, @approvalDetail-activityInfoWrap-background-color-opacity);
    }

    .approvalDetail_col_lightText_size_medium {
        width: @approvalDetail-lightText-medium-width;
        padding: @approvalDetail-lightText-medium-padding;
        margin: @approvalDetail-lightText-medium-margin;
    }

    .approvalDetail_col_lightText {
        border-style: @approvalDetail-lightText-border-style;
        border-width: @approvalDetail-lightText-border-width;
        border-color: mix(@approvalDetail-lightText-border-color, #fff, @approvalDetail-lightText-hover-border-color-opacity);
    }

    .approvalDetail_col_lightContent_size_medium {
        width: @approvalDetail-lightContent-medium-width;
        padding: @approvalDetail-lightContent-medium-padding;
    }

    .approvalDetail_col_lightContent {
        border-style: @approvalDetail-lightContent-border-style;
        border-width: @approvalDetail-lightContent-border-width;
        border-color: mix(@approvalDetail-lightContent-border-color, #fff, @approvalDetail-lightContent-hover-border-color-opacity);
    }

    .approvalDetail_col_sortText_size_medium {
        width: @approvalDetail-sortText-medium-width;
        padding: @approvalDetail-sortText-medium-padding;
    }

    .approvalDetail_col_sortText {
        border-style: @approvalDetail-sortText-border-style;
        border-width: @approvalDetail-sortText-border-width;
        border-color: mix(@approvalDetail-sortText-border-color, #fff, @approvalDetail-sortText-hover-border-color-opacity);
    }

    .approvalDetail_col_sortContent_size_medium {
        width: @approvalDetail-sortContent-medium-width;
        padding: @approvalDetail-sortContent-medium-padding;
        align-items: @approvalDetail-sortContent-medium-horizontal-position;
        overflow: hidden;
    }

    .approvalDetail_col_sortContent {
        border-style: @approvalDetail-sortContent-border-style;
        border-width: @approvalDetail-sortContent-border-width;
        border-color: mix(@approvalDetail-sortContent-border-color, #fff, @approvalDetail-sortContent-hover-border-color-opacity);
    }

    .approvalDetail_col_showNumText_size_medium {
        width: @approvalDetail-showNumText-medium-width;
        padding: @approvalDetail-showNumText-medium-padding;
    }

    .approvalDetail_col_showNumText {
        border-style: @approvalDetail-showNumText-border-style;
        border-width: @approvalDetail-showNumText-border-width;
        border-color: mix(@approvalDetail-showNumText-border-color, #fff, @approvalDetail-showNumText-hover-border-color-opacity);
    }

    .approvalDetail_col_showNumContent_size_medium {
        width: @approvalDetail-showNumContent-medium-width;
        padding: @approvalDetail-showNumContent-medium-padding;
        align-items: @approvalDetail-showNumContent-medium-horizontal-position;
    }

    .approvalDetail_col_showNumContent {
        border-style: @approvalDetail-showNumContent-border-style;
        border-width: @approvalDetail-showNumContent-border-width;
        border-color: mix(@approvalDetail-showNumContent-border-color, #fff, @approvalDetail-showNumContent-hover-border-color-opacity);
    }

    .approvalDetail_col_ticket_size_medium {
        width: @approvalDetail-ticket-medium-width;
        padding: @approvalDetail-ticket-medium-padding;
    }

    .approvalDetail_col_ticket {
        border-style: @approvalDetail-ticket-border-style;
        border-width: @approvalDetail-ticket-border-width;
        border-color: mix(@approvalDetail-ticket-border-color, #fff, @approvalDetail-ticket-hover-border-color-opacity);
    }

    .approvalDetail_col_ticketInfoList_size_medium {
        width: @approvalDetail-ticketInfoList-medium-width;
        padding: @approvalDetail-ticketInfoList-medium-padding;
    }

    .approvalDetail_col_formText_size_medium {
        width: @approvalDetail-formText-medium-width;
        padding: @approvalDetail-formText-medium-padding;
    }

    .approvalDetail_col_formText {
        border-style: @approvalDetail-formText-border-style;
        border-width: @approvalDetail-formText-border-width;
        border-color: mix(@approvalDetail-formText-border-color, #fff, @approvalDetail-formText-hover-border-color-opacity);
    }

    .approvalDetail_col_formContent_size_medium {
        width: @approvalDetail-formContent-medium-width;
        align-items: @approvalDetail-formContent-medium-horizontal-position;
        padding: @approvalDetail-formContent-medium-padding;
    }

    .approvalDetail_col_formContent {
        border-style: @approvalDetail-formContent-border-style;
        border-width: @approvalDetail-formContent-border-width;
        border-color: mix(@approvalDetail-formContent-border-color, #fff, @approvalDetail-formContent-hover-border-color-opacity);
    }

    .approvalDetail_col_refundText_size_medium {
        width: @approvalDetail-refundText-medium-width;
        padding: @approvalDetail-refundText-medium-padding;
    }

    .approvalDetail_col_refundText {
        border-style: @approvalDetail-refundText-border-style;
        border-width: @approvalDetail-refundText-border-width;
        border-color: mix(@approvalDetail-refundText-border-color, #fff, @approvalDetail-refundText-hover-border-color-opacity);
    }

    .approvalDetail_col_refundContent_size_medium {
        width: @approvalDetail-refundContent-medium-width;
        padding: @approvalDetail-refundContent-medium-padding;
        align-items: @approvalDetail-refundContent-medium-horizontal-position;
    }

    .approvalDetail_col_refundContent {
        border-style: @approvalDetail-refundContent-border-style;
        border-width: @approvalDetail-refundContent-border-width;
        border-color: mix(@approvalDetail-refundContent-border-color, #fff, @approvalDetail-refundContent-hover-border-color-opacity);
    }

    .approvalDetail_col_memberText_size_medium {
        width: @approvalDetail-memberText-medium-width;
        padding: @approvalDetail-memberText-medium-padding;
    }

    .approvalDetail_col_memberText {
        border-style: @approvalDetail-memberText-border-style;
        border-width: @approvalDetail-memberText-border-width;
        border-color: mix(@approvalDetail-memberText-border-color, #fff, @approvalDetail-memberText-hover-border-color-opacity);
    }

    .approvalDetail_col_memberItemRef_size_medium {
        width: @approvalDetail-memberItemRef-medium-width;
        padding: @approvalDetail-memberItemRef-medium-padding;
    }

    .approvalDetail_col_budgetWrap_size_medium {
        width: @approvalDetail-budgetWrap-medium-width;
        margin: @approvalDetail-budgetWrap-medium-margin;
    }

    .approvalDetail_col_budgetWrap {
        background-color: mix(@approvalDetail-budgetWrap-background-color, #fff, @approvalDetail-budgetWrap-background-color-opacity);
    }

    .approvalDetail_col_budgetText_size_medium {
        width: @approvalDetail-budgetText-medium-width;
        padding: @approvalDetail-budgetText-medium-padding;
    }

    .approvalDetail_col_budgetText {
        border-style: @approvalDetail-budgetText-border-style;
        border-width: @approvalDetail-budgetText-border-width;
        border-color: mix(@approvalDetail-budgetText-border-color, #fff, @approvalDetail-budgetText-hover-border-color-opacity);
    }

    .approvalDetail_col_budgetTotal_size_medium {
        width: @approvalDetail-budgetTotal-medium-width;
        padding: @approvalDetail-budgetTotal-medium-padding;
        align-items: @approvalDetail-budgetTotal-medium-horizontal-position;
    }

    .approvalDetail_col_budgetTotal {
        border-style: @approvalDetail-budgetTotal-border-style;
        border-width: @approvalDetail-budgetTotal-border-width;
        border-color: mix(@approvalDetail-budgetTotal-border-color, #fff, @approvalDetail-budgetTotal-hover-border-color-opacity);
    }

    .approvalDetail_col_outcome_size_medium {
        width: @approvalDetail-outcome-medium-width;
        padding: @approvalDetail-outcome-medium-padding;
        align-items: @approvalDetail-outcome-medium-horizontal-position;
    }

    .approvalDetail_col_outcome {
        background-color: mix(@approvalDetail-outcome-background-color, #fff, @approvalDetail-outcome-background-color-opacity);
    }

    .approvalDetail_col_yuanText_size_medium {
        width: @approvalDetail-yuanText-medium-width;
        padding: @approvalDetail-yuanText-medium-padding;
        align-items: @approvalDetail-yuanText-medium-horizontal-position;
    }

    .approvalDetail_col_yuanText {
        background-color: mix(@approvalDetail-yuanText-background-color, #fff, @approvalDetail-yuanText-background-color-opacity);
    }

    .approvalDetail_col_totalText_size_medium {
        width: @approvalDetail-totalText-medium-width;
        padding: @approvalDetail-totalText-medium-padding;
        align-items: @approvalDetail-totalText-medium-horizontal-position;
    }

    .approvalDetail_col_totalText {
        background-color: mix(@approvalDetail-totalText-background-color, #fff, @approvalDetail-totalText-background-color-opacity);
    }

    .approvalDetail_col_noteText_size_medium {
        width: @approvalDetail-noteText-medium-width;
        padding: @approvalDetail-noteText-medium-padding;
        align-items: @approvalDetail-noteText-medium-horizontal-position;
    }

    .approvalDetail_col_noteText {
        background-color: mix(@approvalDetail-noteText-background-color, #fff, @approvalDetail-noteText-background-color-opacity);
    }

    .approvalDetail_col_budgetItem_size_medium {
        width: @approvalDetail-budgetItem-medium-width;
        padding: 0 16px;
    }

    .approvalDetail_col_budgetMore_size_medium {
        width: @approvalDetail-budgetMore-medium-width;
        padding: @approvalDetail-budgetMore-medium-padding;
        align-items: @approvalDetail-budgetMore-medium-horizontal-position;
    }

    .approvalDetail_col_publicWrap_size_medium {
        width: @approvalDetail-publicWrap-medium-width;
        margin: @approvalDetail-publicWrap-medium-margin;
        padding: @approvalDetail-publicWrap-medium-padding;
    }

    .approvalDetail_col_publicWrap {
        background-color: mix(@approvalDetail-publicWrap-background-color, #fff, @approvalDetail-publicWrap-background-color-opacity);
    }

    .approvalDetail_col_releaseSet_size_medium {
        width: @approvalDetail-releaseSet-medium-width;
    }

    .approvalDetail_col_publicBtn_size_medium {
        width: @approvalDetail-publicBtn-medium-width;
        margin: @approvalDetail-publicBtn-medium-margin;
    }

    .approvalDetail_col_publicText_size_medium {
        width: @approvalDetail-publicText-medium-width;
    }

    .approvalDetail_col_btnWrap_size_medium {
        width: @approvalDetail-btnWrap-medium-width;
    }

    .approvalDetail_col_btnWrap {
        border-style: @approvalDetail-btnWrap-border-style;
        border-width: @approvalDetail-btnWrap-border-width;
        border-color: mix(@approvalDetail-btnWrap-border-color, #fff, @approvalDetail-btnWrap-hover-border-color-opacity);
        background-color: mix(@approvalDetail-btnWrap-background-color, #fff, @approvalDetail-btnWrap-background-color-opacity);
    }

    .approvalDetail_col_rejectBtn_size_medium {
        width: @approvalDetail-rejectBtn-medium-width;
    }

    .approvalDetail_col_passBtn_size_medium {
        width: @approvalDetail-passBtn-medium-width;
    }

    .approvalDetail_col_confirmDialog_size_medium {
        width: @approvalDetail-confirmDialog-medium-width;
        height: @approvalDetail-confirmDialog-medium-height;
    }

    .approvalDetail_col_rejectDialog_size_medium {
        width: @approvalDetail-rejectDialog-medium-width;
        height: @approvalDetail-rejectDialog-medium-height;
    }
</style>