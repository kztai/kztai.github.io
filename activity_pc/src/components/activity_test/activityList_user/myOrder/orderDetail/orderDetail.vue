<template>
  <div class="orderDetail">
    <div class="row row1">
      <div class="col orderDetail_row1_col1">
        <!--面包屑-->
        <div class="row row1_1">
          <div class="col orderDetail_row1_1_col1">
            <lm-breadcrumb ref="orderDetailCrumbs"
                           refId="orderDetailCrumbs"
                           v-show="pvt_isShow.v1 === 'orderDetailCrumbs'"
                           :paraVarPair="pvt_v1.orderDetailCrumbs.paraVarPair"
                           :para="pvt_v1.orderDetailCrumbs.para"
                           :attr="pvt_v1.orderDetailCrumbs.attr">
            </lm-breadcrumb>
          </div>
        </div>
        <div class="row row1_2">
          <div class="col orderDetail_row1_2_col1">
            <lm-link-text ref="orderDetailHeader"
                     refId="orderDetailHeader"
                     v-show="pvt_isShow.v2 === 'orderDetailHeader'"
                     :paraVarPair="pvt_v2.orderDetailHeader.paraVarPair"
                     :para="pvt_v2.orderDetailHeader.para"
                     :attr="pvt_v2.orderDetailHeader.attr">
            </lm-link-text>
          </div>
        </div>
        <!--订单状态-->
        <div class="row row1_3">
          <div class="col orderDetail_row1_3_col1">
            <lm-link-text ref="orderStatusHeader"
                          refId="orderStatusHeader"
                          v-show="pvt_isShow.v3 === 'orderStatusHeader'"
                          :paraVarPair="pvt_v3.orderStatusHeader.paraVarPair"
                          :para="pvt_v3.orderStatusHeader.para"
                          :attr="pvt_v3.orderStatusHeader.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_4">
          <div class="col orderDetail_row1_4_col1">
            <div class="row row1_4_1">
              <div class="col orderDetail_row1_4_1_col1">
                <lm-link-text ref="currentStatusLabel"
                              refId="currentStatusLabel"
                              v-show="pvt_isShow.v4 === 'currentStatusLabel'"
                              :paraVarPair="pvt_v4.currentStatusLabel.paraVarPair"
                              :para="pvt_v4.currentStatusLabel.para"
                              :attr="pvt_v4.currentStatusLabel.attr">
                </lm-link-text>
              </div>
              <div class="col orderDetail_row1_4_1_col2">
                <lm-link-text ref="currentStatus"
                              refId="currentStatus"
                              v-show="pvt_isShow.v5 === 'currentStatus'"
                              :paraVarPair="pvt_v5.currentStatus.paraVarPair"
                              :para="pvt_v5.currentStatus.para"
                              :attr="pvt_v5.currentStatus.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row1_4_2">
              <div class="col orderDetail_row1_4_2_col1">
                <lm-link-text ref="orderNumberLabel"
                              refId="orderNumberLabel"
                              v-show="pvt_isShow.v6 === 'orderNumberLabel'"
                              :paraVarPair="pvt_v6.orderNumberLabel.paraVarPair"
                              :para="pvt_v6.orderNumberLabel.para"
                              :attr="pvt_v6.orderNumberLabel.attr">
                </lm-link-text>
              </div>
              <div class="col orderDetail_row1_4_2_col2">
                <lm-link-text ref="orderNumber"
                              refId="orderNumber"
                              v-show="pvt_isShow.v7 === 'orderNumber'"
                              :paraVarPair="pvt_v7.orderNumber.paraVarPair"
                              :para="pvt_v7.orderNumber.para"
                              :attr="pvt_v7.orderNumber.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row1_4_3">
              <div class="col orderDetail_row1_4_3_col1">
                <lm-link-text ref="createTimeLabel"
                              refId="createTimeLabel"
                              v-show="pvt_isShow.v8 === 'createTimeLabel'"
                              :paraVarPair="pvt_v8.createTimeLabel.paraVarPair"
                              :para="pvt_v8.createTimeLabel.para"
                              :attr="pvt_v8.createTimeLabel.attr">
                </lm-link-text>
              </div>
              <div class="col orderDetail_row1_4_3_col2">
                <lm-link-text ref="createTime"
                              refId="createTime"
                              v-show="pvt_isShow.v9 === 'createTime'"
                              :paraVarPair="pvt_v9.createTime.paraVarPair"
                              :para="pvt_v9.createTime.para"
                              :attr="pvt_v9.createTime.attr">
                </lm-link-text>
              </div>
            </div>
          </div>
        </div>
        <!--活动信息-->
        <div class="row row1_5">
          <div class="col orderDetail_row1_5_col1">
            <lm-link-text ref="activityInfoHeader"
                          refId="activityInfoHeader"
                          v-show="pvt_isShow.v10 === 'activityInfoHeader'"
                          :paraVarPair="pvt_v10.activityInfoHeader.paraVarPair"
                          :para="pvt_v10.activityInfoHeader.para"
                          :attr="pvt_v10.activityInfoHeader.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_6">
          <div class="col orderDetail_row1_6_col1">
            <lm-link-text
                    ref="sponsorIcon"
                    refId="sponsorIcon"
                    v-show="pvt_isShow.v11 === 'sponsorIcon'"
                    :paraVarPair="pvt_v11.sponsorIcon.paraVarPair"
                    :para="pvt_v11.sponsorIcon.para"
                    :attr="pvt_v11.sponsorIcon.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_6_col2">
            <lm-link-text
                    ref="sponsorName"
                    refId="sponsorName"
                    v-show="pvt_isShow.v12 === 'sponsorName'"
                    :paraVarPair="pvt_v12.sponsorName.paraVarPair"
                    :para="pvt_v12.sponsorName.para"
                    :attr="pvt_v12.sponsorName.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_7">
          <div class="col orderDetail_row1_7_col1">
            <lm-image
                    ref="posterImage"
                    refId="posterImage"
                    v-show="pvt_isShow.v13 === 'posterImage'"
                    :paraVarPair="pvt_v13.posterImage.paraVarPair"
                    :para="pvt_v13.posterImage.para"
                    :attr="pvt_v13.posterImage.attr">
            </lm-image>
          </div>
          <div class="col orderDetail_row1_7_col2">
            <div class="row row1_7_1">
              <div class="col orderDetail_row1_7_1_col1">
                <lm-link-text
                        ref="activityName"
                        refId="activityName"
                        v-show="pvt_isShow.v14 === 'activityName'"
                        :paraVarPair="pvt_v14.activityName.paraVarPair"
                        :para="pvt_v14.activityName.para"
                        :attr="pvt_v14.activityName.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row1_7_2">
              <div class="col orderDetail_row1_7_2_col1">
                <lm-link-text
                        ref="activityTimeLabel"
                        refId="activityTimeLabel"
                        v-show="pvt_isShow.v15 === 'activityTimeLabel'"
                        :paraVarPair="pvt_v15.activityTimeLabel.paraVarPair"
                        :para="pvt_v15.activityTimeLabel.para"
                        :attr="pvt_v15.activityTimeLabel.attr">
                </lm-link-text>
              </div>
              <div class="col orderDetail_row1_7_2_col2">
                <lm-link-text
                        ref="activityTime"
                        refId="activityTime"
                        v-show="pvt_isShow.v16 === 'activityTime'"
                        :paraVarPair="pvt_v16.activityTime.paraVarPair"
                        :para="pvt_v16.activityTime.para"
                        :attr="pvt_v16.activityTime.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row1_7_3">
              <div class="col orderDetail_row1_7_3_col1">
                <lm-link-text
                        ref="activityAddLabel"
                        refId="activityAddLabel"
                        v-show="pvt_isShow.v17 === 'activityAddLabel'"
                        :paraVarPair="pvt_v17.activityAddLabel.paraVarPair"
                        :para="pvt_v17.activityAddLabel.para"
                        :attr="pvt_v17.activityAddLabel.attr">
                </lm-link-text>
              </div>
              <div class="col orderDetail_row1_7_3_col2">
                <lm-link-text
                        ref="activityAdd"
                        refId="activityAdd"
                        v-show="pvt_isShow.v18 === 'activityAdd'"
                        :paraVarPair="pvt_v18.activityAdd.paraVarPair"
                        :para="pvt_v18.activityAdd.para"
                        :attr="pvt_v18.activityAdd.attr">
                </lm-link-text>
              </div>
            </div>
          </div>
        </div>
        <!--报名详情-->
        <div class="row row1_8">
          <div class="col orderDetail_row1_8_col1">
            <lm-link-text ref="actorDetailHeader"
                          refId="actorDetailHeader"
                          v-show="pvt_isShow.v19 === 'actorDetailHeader'"
                          :paraVarPair="pvt_v19.actorDetailHeader.paraVarPair"
                          :para="pvt_v19.actorDetailHeader.para"
                          :attr="pvt_v19.actorDetailHeader.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_8_col2">
            <lm-button ref="downloadETicketButton"
                          refId="downloadETicketButton"
                          v-show="pvt_isShow.v20 === 'downloadETicketButton'"
                          :paraVarPair="pvt_v20.downloadETicketButton.paraVarPair"
                          :para="pvt_v20.downloadETicketButton.para"
                          :attr="pvt_v20.downloadETicketButton.attr">
            </lm-button>
          </div>
        </div>
        <div class="row row1_9">
          <div class="col orderDetail_row1_9_col1">
            <lm-link-text ref="listTitle1"
                          refId="listTitle1"
                          v-show="pvt_isShow.vTitle1 === 'listTitle1'"
                          :paraVarPair="pvt_vTitle1.listTitle1.paraVarPair"
                          :para="pvt_vTitle1.listTitle1.para"
                          :attr="pvt_vTitle1.listTitle1.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_9_col2">
            <lm-link-text ref="listTitle2"
                          refId="listTitle2"
                          v-show="pvt_isShow.vTitle2 === 'listTitle2'"
                          :paraVarPair="pvt_vTitle2.listTitle2.paraVarPair"
                          :para="pvt_vTitle2.listTitle2.para"
                          :attr="pvt_vTitle2.listTitle2.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_9_col3">
            <lm-link-text ref="listTitle3"
                          refId="listTitle3"
                          v-show="pvt_isShow.vTitle3 === 'listTitle3'"
                          :paraVarPair="pvt_vTitle3.listTitle3.paraVarPair"
                          :para="pvt_vTitle3.listTitle3.para"
                          :attr="pvt_vTitle3.listTitle3.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_9_col4">
            <lm-link-text ref="listTitle4"
                          refId="listTitle4"
                          v-show="pvt_isShow.vTitle4 === 'listTitle4'"
                          :paraVarPair="pvt_vTitle4.listTitle4.paraVarPair"
                          :para="pvt_vTitle4.listTitle4.para"
                          :attr="pvt_vTitle4.listTitle4.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_9_col5">
            <lm-link-text ref="listTitle5"
                          refId="listTitle5"
                          v-show="pvt_isShow.vTitle5 === 'listTitle5'"
                          :paraVarPair="pvt_vTitle5.listTitle5.paraVarPair"
                          :para="pvt_vTitle5.listTitle5.para"
                          :attr="pvt_vTitle5.listTitle5.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_9_col6">
            <lm-link-text ref="listTitle6"
                          refId="listTitle6"
                          v-show="pvt_isShow.vTitle6 === 'listTitle6'"
                          :paraVarPair="pvt_vTitle6.listTitle6.paraVarPair"
                          :para="pvt_vTitle6.listTitle6.para"
                          :attr="pvt_vTitle6.listTitle6.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_9_col7">
            <lm-link-text ref="listTitle7"
                          refId="listTitle7"
                          v-show="pvt_isShow.vTitle7 === 'listTitle7'"
                          :paraVarPair="pvt_vTitle7.listTitle7.paraVarPair"
                          :para="pvt_vTitle7.listTitle7.para"
                          :attr="pvt_vTitle7.listTitle7.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_91">
          <div class="col orderDetail_row1_91_col1">
            <actor-list-row ref="listRow"
                            refId="listRow"
                            v-show="pvt_isShow.v21 === 'listRow'"
                            v-for="(item, index) in pvt_v21.listRow.forData" :number="index"
                            :paraVarPair="pvt_v21.listRow.paraVarPair"
                            :para="item.para"
                            :attr="item.attr">
            </actor-list-row>
          </div>
        </div>
        <!--报名人信息-->
        <div class="row row1_10">
          <div class="col orderDetail_row1_10_col1">
            <lm-link-text ref="actorInfoHeader"
                          refId="actorInfoHeader"
                          v-show="pvt_isShow.v22 === 'actorInfoHeader'"
                          :paraVarPair="pvt_v22.actorInfoHeader.paraVarPair"
                          :para="pvt_v22.actorInfoHeader.para"
                          :attr="pvt_v22.actorInfoHeader.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_11">
          <div class="col orderDetail_row1_11_col1">
            <actor-info-row ref="infoRow"
                            refId="infoRow"
                            v-show="pvt_isShow.v23 === 'infoRow'"
                            v-for="(item, index) in pvt_v23.infoRow.forData" :number="index"
                            :paraVarPair="pvt_v23.infoRow.paraVarPair"
                            :para="item.para"
                            :attr="item.attr">
            </actor-info-row>
          </div>
        </div>
        <div class="row row1_12">
          <div class="col orderDetail_row1_12_col1">
            <actor-info-row ref="otherInfoRow"
                            refId="otherInfoRow"
                            v-show="pvt_isShow.v24 === 'otherInfoRow'"
                            v-for="(item, index) in pvt_v24.otherInfoRow.forData" :number="index"
                            :paraVarPair="pvt_v24.otherInfoRow.paraVarPair"
                            :para="item.para"
                            :attr="item.attr">
            </actor-info-row>
          </div>
        </div>
        <!--总结-->
        <div class="row row1_13">
          <div class="col orderDetail_row1_13_col1">
            <lm-button
                    ref="showOthersButton"
                    refId="showOthersButton"
                    v-show="pvt_isShow.v25 === 'showOthersButton'"
                    :paraVarPair="pvt_v25.showOthersButton.paraVarPair"
                    :para="pvt_v25.showOthersButton.para"
                    :attr="pvt_v25.showOthersButton.attr">
            </lm-button>
          </div>
        </div>
        <div class="row row1_14">
          <div class="col orderDetail_row1_14_col1">
            <lm-link-text
                    ref="amountLabel"
                    refId="amountLabel"
                    v-show="pvt_isShow.v26 === 'amountLabel'"
                    :paraVarPair="pvt_v26.amountLabel.paraVarPair"
                    :para="pvt_v26.amountLabel.para"
                    :attr="pvt_v26.amountLabel.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_14_col2">
            <lm-link-text
                    ref="amountText"
                    refId="amountText"
                    v-show="pvt_isShow.v27 === 'amountText'"
                    :paraVarPair="pvt_v27.amountText.paraVarPair"
                    :para="pvt_v27.amountText.para"
                    :attr="pvt_v27.amountText.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_15">
          <div class="col orderDetail_row1_15_col1">
            <lm-link-text
                    ref="actualPaymentLabel"
                    refId="actualPaymentLabel"
                    v-show="pvt_isShow.v28 === 'actualPaymentLabel'"
                    :paraVarPair="pvt_v28.actualPaymentLabel.paraVarPair"
                    :para="pvt_v28.actualPaymentLabel.para"
                    :attr="pvt_v28.actualPaymentLabel.attr">
            </lm-link-text>
          </div>
          <div class="col orderDetail_row1_15_col2">
            <lm-link-text
                    ref="actualPayment"
                    refId="actualPayment"
                    v-show="pvt_isShow.v29 === 'actualPayment'"
                    :paraVarPair="pvt_v29.actualPayment.paraVarPair"
                    :para="pvt_v29.actualPayment.para"
                    :attr="pvt_v29.actualPayment.attr">
            </lm-link-text>
          </div>
        </div>
      </div>
    </div>
    <!--对话框-->
    <div class="row row2">
      <div class="col orderDetail_row2_col1">
        <e-ticket-dia ref="ETicketDia"
                      refId="ETicketDia"
                      v-show="pvt_isShow.v30 === 'ETicketDia'"
                      :paraVarPair="pvt_v30.ETicketDia.paraVarPair"
                      :para="pvt_v30.ETicketDia.para"
                      :attr="pvt_v30.ETicketDia.attr">
        </e-ticket-dia>
      </div>
    </div>
    <div class="row row3">
      <div class="col orderDetail_row3_col1">
        <cancel-registration-dia ref="cancelDia"
                      refId="cancelDia"
                      v-show="pvt_isShow.v31 === 'cancelDia'"
                      :paraVarPair="pvt_v31.cancelDia.paraVarPair"
                      :para="pvt_v31.cancelDia.para"
                      :attr="pvt_v31.cancelDia.attr">
        </cancel-registration-dia>
      </div>
    </div>
    <div class="row row4">
      <div class="col orderDetail_row4_col1">
        <application-drawback-dia ref="applicationDia"
                      refId="applicationDia"
                      v-show="pvt_isShow.v32 === 'applicationDia'"
                      :paraVarPair="pvt_v32.applicationDia.paraVarPair"
                      :para="pvt_v32.applicationDia.para"
                      :attr="pvt_v32.applicationDia.attr">
        </application-drawback-dia>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';

  //引入子组件
  import ActorListRow from './actorListRow/actorListRow.vue';
  import ActorInfoRow from './actorInfoRow/actorInfoRow.vue';
  import ETicketDia from '../myOrderDialog/ticketDetail.vue';
  import CancelRegistrationDia from './orderDetailDialog/cancelDialog.vue';
  import applicationDrawbackDia from './orderDetailDialog/applicationDialog.vue';

  export default {
    name:'OrderDetail',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{
      ActorListRow,
      ActorInfoRow,
      ETicketDia,
      CancelRegistrationDia,
      applicationDrawbackDia
    },
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1","v2",
            "v3",
            "v4","v5",
            "v6","v7",
            "v8","v9",
            "v10",
            "v11","v12",
            "v13",
            "v14","v15","v16","v17","v18",
            "v19","v20",
            "vTitle1","vTitle2","vTitle3","vTitle4","vTitle5","vTitle6","vTitle7",
            "v21",
            "v22",
            "v23","v24",
            "v25",
            "v26","v27",
            "v28","v29",
            "v30","v31","v32"
          ],
          subModule:[
            "orderDetailCrumbs","orderDetailHeader",
            "orderStatusHeader",
            "currentStatusLabel","currentStatus",
            "orderNumberLabel","orderNumber",
            "createTimeLabel","createTime",
            "activityInfoHeader",
            "sponsorIcon","sponsorName",
            "posterImage",
            "activityName","activityTimeLabel","activityTime","activityAddLabel","activityAdd",
            "actorDetailHeader","downloadETicketButton",
            "listTitle1","listTitle2","listTitle3","listTitle4","listTitle5","listTitle6","listTitle7",
            "listRow",
            "actorInfoHeader",
            "infoRow","otherInfoRow",
            "showOthersButton",
            "amountLabel","amountText",
            "actualPaymentLabel","actualPayment",
            "ETicketDia","cancelDia","applicationDia"
          ]
        },
        pvt_isShow:{
          v1:null,v2:null,
          v3:null,
          v4:null,v5:null,
          v6:null,v7:null,
          v8:null,v9:null,
          v10:null,
          v11:null,v12:null,
          v13:null,
          v14:null,v15:null,v16:null,v17:null,v18:null,
          v19:null,v20:null,
          vTitle1:null,vTitle2:null,vTitle3:null,vTitle4:null,vTitle5:null,vTitle6:null,vTitle7:null,
          v21:null,
          v22:null,
          v23:null,v24:null,
          v25:null,
          v26:null,v27:null,
          v28:null,v29:null,
          v30:null,v31:null,v32:null
        },
        pvt_eventPortInput:[
          'orderListEvent',
          'orderCancelEvent',
          'orderRefundEvent',
          'completeActivityEvent'
        ],
        // 用户定义的模块变量
        orderId:null,
        billId:null,
        activityId:null,
        ticketId:null,
        orderStatus:'',
        orderNumber:0,
        createTime:'',
        organizerName:'',
        activityPoster:[{
          $table:'groupActivity',
          $arrField:['poster'],
          $arrValue:[null]
        }],
        activityName:'',
        activityTime:'',
        activityAddress:'',
        billIdArr:[],
        indexArr:[],
        ETicketCodeArr:[],
        nameArr:[],
        mobileArr:[],
        ticketNameArr:[],
        ticketPriceArr:[],
        billStatusArr:[],
        firstIndexArr:[],
        firstNameArr:[],
        firstMobileArr:[],
        firstCompanyArr:[],
        firstEmailArr:[],
        otherIndexArr:[],
        otherNameArr:[],
        otherMobileArr:[],
        otherCompanyArr:[],
        otherEmailArr:[],
        otherButtonText:'展开全部',
        totalAmount:0,
        actualPayment:0
      }
    },
    computed:{
      // 面包屑导航
      pvt_v1:function(){
        return {
          orderDetailCrumbs:{
            paraVarPair:{},
            para:{
              path:[
                {index:0,name:"我的订单",icon:""},
                {index:1,name:"订单详情",icon:""}
              ]
            },
            attr:{
              separator:'>'
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          orderDetailHeader:{
            paraVarPair:{},
            para:{
              textData:'订单详情'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'18px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      // 订单状态
      pvt_v3:function(){
        return {
          orderStatusHeader:{
            paraVarPair:{},
            para:{
              textData:'订单状态 >>'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          currentStatusLabel:{
            paraVarPair:{},
            para:{
              textData:'当前状态:'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v5:function(){
        return {
          currentStatus:{
            paraVarPair:{},
            para:{
              textData:this.orderStatus
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'30px',
              color:'#ffd020'
            }
          }
        }
      },
      pvt_v6:function(){
        return {
          orderNumberLabel:{
            paraVarPair:{},
            para:{
              textData:'订单编号:'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v7:function(){
        return {
          orderNumber:{
            paraVarPair:{},
            para:{
              textData:this.orderNumber
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v8:function(){
        return {
          createTimeLabel:{
            paraVarPair:{},
            para:{
              textData:'创建时间:'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v9:function(){
        return {
          createTime:{
            paraVarPair:{},
            para:{
              textData:this.createTime
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      // 活动信息
      pvt_v10:function(){
        return {
          activityInfoHeader:{
            paraVarPair:{},
            para:{
              textData:'活动信息 >>'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v11:function(){
        return {
          sponsorIcon:{
            paraVarPair:{},
            para:{
              textData:''
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v12:function(){
        return {
          sponsorName:{
            paraVarPair:{},
            para:{
              textData:this.organizerName
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v13:function(){
        return {
          posterImage:{
            paraVarPair:{},
            para:{
              image:this.activityPoster
            },
            attr:{
              fit:'contain'
            }
          }
        }
      },
      pvt_v14:function(){
        return {
          activityName:{
            paraVarPair:{},
            para:{
              textData:this.activityName
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v15:function(){
        return {
          activityTimeLabel:{
            paraVarPair:{},
            para:{
              textData:'时间:'
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v16:function(){
        return {
          activityTime:{
            paraVarPair:{},
            para:{
              textData:this.activityTime
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v17:function(){
        return {
          activityAddLabel:{
            paraVarPair:{},
            para:{
              textData:'地址:'
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v18:function(){
        return {
          activityAdd:{
            paraVarPair:{},
            para:{
              textData:this.activityAddress
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      // 报名详情
      pvt_v19:function(){
        return {
          actorDetailHeader:{
            paraVarPair:{},
            para:{
              textData:'报名详情 >>'
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v20:function(){
        return {
          downloadETicketButton:{
            paraVarPair:{},
            para:{
              name:['下载电子票']
            },
            attr:{
              type:'text'
            }
          }
        }
      },
      pvt_vTitle1:function(){
        return {
          listTitle1:{
            paraVarPair:{},
            para:{
              textData:'序号'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_vTitle2:function(){
        return {
          listTitle2:{
            paraVarPair:{},
            para:{
              textData:'电子票'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_vTitle3:function(){
        return {
          listTitle3:{
            paraVarPair:{},
            para:{
              textData:'报名人'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_vTitle4:function(){
        return {
          listTitle4:{
            paraVarPair:{},
            para:{
              textData:'票种名称'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_vTitle5:function(){
        return {
          listTitle5:{
            paraVarPair:{},
            para:{
              textData:'票价'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_vTitle6:function(){
        return {
          listTitle6:{
            paraVarPair:{},
            para:{
              textData:'购票状态'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_vTitle7:function(){
        return {
          listTitle7:{
            paraVarPair:{},
            para:{
              textData:'操作'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v21:function(){
        let $this = this;
        let loopModule = {
          listRow:{
            para:{
              billId:this.billIdArr,
              index:this.indexArr,
              ETicketCode:this.ETicketCodeArr,
              name:this.nameArr,
              mobile:this.mobileArr,
              ticketName:this.ticketNameArr,
              ticketPrice:this.ticketPriceArr,
              billStatus:this.billStatusArr
            },
            attr:{}
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          listRow:{
            paraVarPair:{},
            forData:forData.listRow
          }
        };
      },
      // 报名人信息
      pvt_v22:function(){
        return {
          actorInfoHeader:{
            paraVarPair:{},
            para:{
              textData:'报名人信息 >>'
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v23:function(){
        let $this = this;
        let loopModule = {
          infoRow:{
            para:{
              index:this.firstIndexArr,
              name:this.firstNameArr,
              mobile:this.firstMobileArr,
              company:this.firstCompanyArr,
              email:this.firstEmailArr
            },
            attr:{}
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          infoRow:{
            paraVarPair:{},
            forData:forData.infoRow
          }
        };
      },
      pvt_v24:function(){
        let $this = this;
        let loopModule = {
          otherInfoRow:{
            para:{
              index:this.otherIndexArr,
              name:this.otherNameArr,
              mobile:this.otherMobileArr,
              company:this.otherCompanyArr,
              email:this.otherEmailArr
            },
            attr:{}
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          otherInfoRow:{
            paraVarPair:{},
            forData:forData.otherInfoRow
          }
        };
      },
      // 总计
      pvt_v25:function(){
        return {
          showOthersButton:{
            paraVarPair:{},
            para:{
              name:[this.otherButtonText]
            },
            attr:{
              type:'text'
            }
          }
        }
      },
      pvt_v26:function(){
        return {
          amountLabel:{
            paraVarPair:{},
            para:{
              textData:'总额:'
            },
            attr:{
              label:'div',
              textAlign:'right',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v27:function(){
        return {
          amountText:{
            paraVarPair:{},
            para:{
              textData:'￥' + this.totalAmount
            },
            attr:{
              label:'div',
              textAlign:'right',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v28:function(){
        return {
          actualPaymentLabel:{
            paraVarPair:{},
            para:{
              textData:'实付金额:'
            },
            attr:{
              label:'div',
              textAlign:'right',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v29:function(){
        return {
          actualPayment:{
            paraVarPair:{},
            para:{
              textData:'￥' + this.actualPayment
            },
            attr:{
              label:'div',
              textAlign:'right',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'40px',
              color:'#ffd020'
            }
          }
        }
      },
      // 对话框
      pvt_v30:function(){
        return {
          ETicketDia:{
            paraVarPair:{},
            para:{
              curActivityId:this.activityId,
              curTicketId:this.ticketId,
              curBillIdArr:this.billIdArr
            },
            attr:{}
          }
        }
      },
      pvt_v31:function(){
        return {
          cancelDia:{
            paraVarPair:{},
            para:{},
            attr:{}
          }
        }
      },
      pvt_v32:function(){
        return {
          applicationDia:{
            paraVarPair:{},
            para:{},
            attr:{}
          }
        }
      }
    },
    watch:{},
    mounted:function(){
      this.pvt_initSysData();
    },
    created:function(){
      Object.assign(this,libSys,libUpload);
    },
    methods:{
      startModule:function(orderId,successCallBack,errorCallBack){
        let $this = this;
        let para;
        let tableName;
        let dbData;
        let parentRecord;
        let condition;
        let dbFlag;

        if(successCallBack !== null){
          errorCallBack = $this.setPara(successCallBack,errorCallBack);
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              $this.orderId = null;
              $this.billId = null;
              $this.activityId = null;
              $this.ticketId = null;
              $this.orderStatus = '';
              $this.orderNumber = 0;
              $this.createTime = '';
              $this.organizerName = '';
              $this.activityPoster = [{
                $table:'groupActivity',
                $arrField:['poster'],
                $arrValue:[null]
              }];
              $this.activityName = '';
              $this.activityTime = '';
              $this.activityAddress = '';
              $this.billIdArr = [];
              $this.indexArr = [];
              $this.ETicketCodeArr = [];
              $this.nameArr = [];
              $this.mobileArr = [];
              $this.ticketNameArr = [];
              $this.ticketPriceArr = [];
              $this.billStatusArr = [];
              $this.firstIndexArr = [];
              $this.firstNameArr = [];
              $this.firstMobileArr = [];
              $this.firstCompanyArr = [];
              $this.firstEmailArr = [];
              $this.otherIndexArr = [];
              $this.otherNameArr = [];
              $this.otherMobileArr = [];
              $this.otherCompanyArr = [];
              $this.otherEmailArr = [];
              $this.otherButtonText = '展开全部';
              $this.totalAmount = 0;
              $this.actualPayment = 0;
              if(orderId){
                $this.orderId = orderId;
                para.nStep = 'searchActivityOrder';
              }else{
                para.nStep = 'end';
              }
              ++dbFlag;
              break;
            case 'searchActivityOrder':
              //查找数据订单
              tableName = mac.mac.tb.groupActivityOrder;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.orderId];
              dbData[mac.mac.fd.groupActivityOrder.groupActivityID] = [];
              dbData[mac.mac.fd.groupActivityOrder.orderNumber] = [];
              dbData[mac.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [];
              dbData[mac.mac.fd.groupActivityOrder.price] = [];
              dbData[mac.mac.fd.groupActivityOrder.createTime] = [];
              dbData[mac.mac.fd.groupActivityOrder.status] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                $this.orderNumber = dbData[mac.mac.fd.groupActivityOrder.orderNumber][0];
                $this.createTime = dbData[mac.mac.fd.groupActivityOrder.createTime][0];
                let orderStatus = dbData[mac.mac.fd.groupActivityOrder.status][0];
                if(orderStatus === mac.mac.enum.groupActivityOrder.status.pay){
                  $this.orderStatus = '待付款';
                }else if(orderStatus === mac.mac.enum.groupActivityOrder.status.close){
                  $this.orderStatus = '已关闭';
                }
                para.activityId = dbData[mac.mac.fd.groupActivityOrder.groupActivityID][0];
                $this.activityPoster = [{
                  $table:'groupActivity',
                  $arrField:['poster'],
                  $arrValue:[para.activityId]
                }];
                para.ticketId = dbData[mac.mac.fd.groupActivityOrder.groupActivityTicketTypeID][0];
                para.ticketPrice = dbData[mac.mac.fd.groupActivityOrder.price][0];
                $this.activityId = para.activityId;
                $this.ticketId = para.ticketId;
                para.nStep = 'searchActivity';
                if(++dbFlag === 2){
                  $this.startModule(orderId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchActivity':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [para.activityId];
              dbData[mac.mac.fd.groupActivity.name] = [];
              dbData[mac.mac.fd.groupActivity.startTime] = [];
              dbData[mac.mac.fd.groupActivity.mode] = [];
              dbData[mac.mac.fd.groupActivity.place] = [];
              dbData[mac.mac.fd.groupActivity.groupName] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                $this.activityName = dbData[mac.mac.fd.groupActivity.name][0];
                $this.activityTime = dbData[mac.mac.fd.groupActivity.startTime][0];
                $this.organizerName = dbData[mac.mac.fd.groupActivity.groupName][0];
                if(dbData[mac.mac.fd.groupActivity.mode][0] === mac.mac.enum.groupActivity.mode.online){
                  $this.activityAddress = '线上活动';
                }else{
                  for(let i = 0;i < dbData[mac.mac.fd.groupActivity.place][0].name.length;i++){
                    $this.activityAddress += dbData[mac.mac.fd.groupActivity.place][0].name[i];
                  }
                  $this.activityAddress += dbData[mac.mac.fd.groupActivity.place][0].place;
                }
                para.nStep = 'searchTicket';
                if(++dbFlag === 2){
                  $this.startModule(orderId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchTicket':
              tableName = mac.mac.tb.groupActivityTicketType;
              dbData = {};
              dbData[mac.mac.fd.id] = [para.ticketId];
              dbData[mac.mac.fd.groupActivityTicketType.name] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                para.ticketName = dbData[mac.mac.fd.groupActivityTicketType.name][0];
                para.nStep = 'searchBill';
                if(++dbFlag === 2){
                  $this.startModule(orderId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchBill':
              tableName = mac.mac.tb.groupActivityBill;
              parentRecord = [$this.orderId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityBill.number] = [];
              dbData[mac.mac.fd.groupActivityBill.code] = [];
              dbData[mac.mac.fd.groupActivityBill.name] = [];
              dbData[mac.mac.fd.groupActivityBill.mobile] = [];
              dbData[mac.mac.fd.groupActivityBill.info] = [];
              dbData[mac.mac.fd.groupActivityBill.status] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                let importanceRankingArr = [
                  mac.mac.enum.groupActivityBill.status.checkTicket,
                  mac.mac.enum.groupActivityBill.status.refunded,
                  mac.mac.enum.groupActivityBill.status.refunding,
                  mac.mac.enum.groupActivityBill.status.refund,
                  mac.mac.enum.groupActivityBill.status.check,
                  mac.mac.enum.groupActivityBill.status.reject,
                  mac.mac.enum.groupActivityBill.status.cancel,
                  mac.mac.enum.groupActivityBill.status.finish,
                  mac.mac.enum.groupActivityBill.status.pay
                ];
                let importanceRankingTextArr = [
                  '待参与','已退款','退款中','待退款','待审核','已拒绝','已取消','已完成','待付款'
                ];
                for(let i = 0;i < dbData[mac.mac.fd.id].length;i++){
                  $this.billIdArr.push(dbData[mac.mac.fd.id][i]);
                  $this.indexArr.push(dbData[mac.mac.fd.groupActivityBill.number][i]);
                  $this.nameArr.push(dbData[mac.mac.fd.groupActivityBill.name][i]);
                  $this.mobileArr.push(dbData[mac.mac.fd.groupActivityBill.mobile][i]);
                  $this.ticketNameArr.push(para.ticketName);
                  $this.ETicketCodeArr.push(dbData[mac.mac.fd.groupActivityBill.code][i]);
                  $this.ticketPriceArr.push(para.ticketPrice);
                  if($this.orderStatus === '已关闭'){
                    $this.billStatusArr.push('已关闭');
                  }else{
                    let statusIndex = importanceRankingArr.indexOf(dbData[mac.mac.fd.groupActivityBill.status][i]);
                    $this.billStatusArr.push(importanceRankingTextArr[statusIndex]);
                  }
                  //参与者信息
                  if(i === 0){
                    $this.firstIndexArr = [1];
                    $this.firstNameArr = [dbData[mac.mac.fd.groupActivityBill.name][i]];
                    $this.firstMobileArr = [dbData[mac.mac.fd.groupActivityBill.mobile][i]];
                    $this.firstCompanyArr = [null];
                    $this.firstEmailArr = [null];
                    if(dbData[mac.mac.fd.groupActivityBill.info][0] !== null){
                      let actorInfo = dbData[mac.mac.fd.groupActivityBill.info][0];
                      for(let m = 0;m < actorInfo.name.length;m++){
                        if(actorInfo.name[m] ==='公司'){
                          $this.$set($this.firstCompanyArr,0,actorInfo.content[m]);
                        }else if(actorInfo.name[m] ==='邮箱'){
                          $this.$set($this.firstEmailArr,0,actorInfo.content[m]);
                        }
                      }
                    }
                  }else{
                    $this.otherIndexArr.push(i + 1);
                    $this.otherNameArr.push(dbData[mac.mac.fd.groupActivityBill.name][i]);
                    $this.otherMobileArr.push(dbData[mac.mac.fd.groupActivityBill.mobile][i]);
                    $this.otherCompanyArr.push(null);
                    $this.otherEmailArr.push(null);
                    if(dbData[mac.mac.fd.groupActivityBill.info][i] !== null){
                      let actorInfo = dbData[mac.mac.fd.groupActivityBill.info][i];
                      for(let m = 0;m < actorInfo.name.length;m++){
                        let arrIndex = $this.otherIndexArr.length - 1;
                        if(actorInfo.name[m] ==='公司'){
                          $this.$set($this.otherCompanyArr,arrIndex,actorInfo.content[m]);
                        }else if(actorInfo.name[m] ==='邮箱'){
                          $this.$set($this.otherEmailArr,arrIndex,actorInfo.content[m]);
                        }
                      }
                    }
                  }
                }
                if(!$this.orderStatus){
                  for(let i = 0;i < importanceRankingArr.length;i++){
                    if(dbData[mac.mac.fd.groupActivityBill.status].includes(importanceRankingArr[i])){
                      $this.orderStatus = importanceRankingTextArr[i];
                      break;
                    }
                  }
                }
                $this.totalAmount = para.ticketPrice * dbData[mac.mac.fd.id].length;
                for(let n = 0;n < $this.billStatusArr.length;n++){
                  if($this.billStatusArr[n] === '待参与' || $this.billStatusArr[n] === '已完成'){
                    $this.actualPayment = $this.actualPayment + para.ticketPrice;
                  }
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(orderId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'showModules':
              //先隐藏在显示
              let shadowButtonArr = ['downloadETicketButton','showOthersButton'];
              $this.showSubModule(shadowButtonArr,false,function(){
                //显示子组件
                let refId = [
                  "orderDetailCrumbs","orderDetailHeader",
                  "orderStatusHeader",
                  "currentStatusLabel","currentStatus",
                  "orderNumberLabel","orderNumber",
                  "createTimeLabel","createTime",
                  "activityInfoHeader",
                  "sponsorIcon","sponsorName",
                  "posterImage",
                  "activityName","activityTimeLabel","activityTime","activityAddLabel","activityAdd",
                  "actorDetailHeader",
                  "listTitle1","listTitle2","listTitle3","listTitle4","listTitle5","listTitle6","listTitle7",
                  "listRow",
                  "actorInfoHeader",
                  "infoRow",
                  "amountLabel","amountText",
                  "actualPaymentLabel","actualPayment",
                ];
                if($this.orderStatus === '待参与'){
                  refId.push('downloadETicketButton');
                }else{
                  for(let i = 0;i < $this.billStatusArr.length;i++){
                    if($this.billStatusArr[i] === '已完成'){
                      refId.push('downloadETicketButton');
                      break;
                    }
                  }
                }
                if($this.otherNameArr.length > 0){
                  $this.otherButtonText = '展开全部';
                  refId.push('showOthersButton');
                }else{
                  $this.otherButtonText = '';
                }
                $this.showSubModule(refId,true,function(){
                  para.nStep = 'startSubModules';
                  if(++dbFlag === 2){
                    $this.startModule(orderId,successCallBack,errorCallBack);
                  }
                },para.errorCallBack);
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(orderId,successCallBack,errorCallBack);
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
      // 私有方法
      tableRefresh:function(billId,status,successCallBack,errorCallBack){
        let $this = this;
        let para;
        let dbFlag;

        if(successCallBack !== null){
          errorCallBack = $this.setPara(successCallBack,errorCallBack);
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              $this.actualPayment = 0;
              let idIndex = $this.billIdArr.indexOf(billId);
              $this.$set($this.billStatusArr,idIndex,status);
              let importanceRankingTextArr = [
                '待参与','已退款','退款中','待退款','待审核','已拒绝','已取消','已完成','待付款'
              ];
              for(let i = 0;i < importanceRankingTextArr.length;i++){
                if($this.billStatusArr.includes(importanceRankingTextArr[i])){
                  $this.orderStatus = importanceRankingTextArr[i];
                  break;
                }
              }
              for(let n = 0;n < $this.billStatusArr.length;n++){
                if($this.billStatusArr[n] === '待参与' || $this.billStatusArr[n] === '已完成'){
                  $this.actualPayment = $this.actualPayment + $this.ticketPriceArr[n];
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              let showButton = false;
              if($this.orderStatus === '待参与'){
                showButton = true;
              }else{
                for(let i = 0;i < $this.billStatusArr.length;i++){
                  if($this.billStatusArr[i] === '已完成'){
                    showButton = true;
                    break;
                  }
                }
              }
              //显示子组件
              $this.showSubModule('downloadETicketButton',showButton,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.tableRefresh(billId,status,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_orderStatus';
                if(++dbFlag === 2){
                  $this.tableRefresh(billId,status,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_orderStatus':
              $this.sm['currentStatus'].startModule(function(){
                para.nStep = 'startModule_listRow';
                if(++dbFlag === 2){
                  $this.tableRefresh(billId,status,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_listRow':
              //循环组件
              var arr = [];
              for(let i = 0;i < $this.billIdArr.length;i++){
                arr.push([function(){},function(error){console.log(error)}]);
              }
              $this.callLoopModuleMethod('listRow','startModule',arr,function(){
                para.nStep = 'startModule_payment';
                if(++dbFlag === 2){
                  $this.tableRefresh(billId,status,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_payment':
              $this.sm['actualPayment'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.tableRefresh(billId,status,successCallBack,errorCallBack);
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
      breadcrumbChange(index){
        if(index === 0){
          this.ep.orderListEvent();
        }
      },
      showETicket(){
        let $this = this;
        $this.showSubModule('ETicketDia',true,function(){
          $this.sm['ETicketDia'].startModule(function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      cancelMenu(billId){
        let $this = this;
        $this.billId = billId;
        $this.showSubModule('cancelDia',true,function(){
          $this.sm['cancelDia'].startModule($this.billId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      refundMenu(billId){
        let $this = this;
        $this.billId = billId;
        $this.showSubModule('applicationDia',true,function(){
          $this.sm['applicationDia'].startModule($this.billId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      completeActivity(billId){
        //写数据，发事件
        let $this = this;
        $this.billId = billId;
        let tableName = mac.mac.tb.groupActivityBill;
        let dbData = {};
        dbData[mac.mac.fd.id] = [$this.billId];
        //直接成功
        let curStatus = mac.mac.enum.groupActivityBill.status.finish;
        dbData[mac.mac.fd.groupActivityBill.status] = [curStatus];
        $this.sys.api.recordModify(tableName,dbData,function(){
          $this.tableRefresh(billId,'已完成',function(){
            $this.ep.completeActivityEvent($this.billId);
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      otherApplicant(){
        let $this = this;
        if($this.otherButtonText === '展开全部'){
          $this.otherButtonText = '收起';
        }else{
          $this.otherButtonText = '展开全部';
        }
        $this.forceUpdateData(function(){
          $this.showSubModule('otherInfoRow',$this.otherButtonText === '收起',function(){
            $this.sm['showOthersButton'].startModule(function(){
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        });
      },
      cancelApply(billId,result){
        //写数据，发事件
        let $this = this;
        $this.billId = billId;
        let tableName = mac.mac.tb.groupActivityBill;
        let dbData = {};
        dbData[mac.mac.fd.id] = [$this.billId];
        dbData[mac.mac.fd.groupActivityBill.cancelReason] = [result];
        //直接取消成功
        let curStatus = mac.mac.enum.groupActivityBill.status.cancel;
        dbData[mac.mac.fd.groupActivityBill.status] = [curStatus];
        $this.sys.api.recordModify(tableName,dbData,function(){
          $this.tableRefresh(billId,'已取消',function(){
            $this.ep.orderCancelEvent($this.billId);
            //弹出提示框
            $this.promptDialog('取消成功');
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      refundEvent(billId,result){
        let $this = this;
        $this.billId = billId;
        let tableName = mac.mac.tb.groupActivityBill;
        let dbData = {};
        dbData[mac.mac.fd.id] = [$this.billId];
        let curStatus;
        let result1 = Array.isArray(result);
        if(result1){
          dbData[mac.mac.fd.groupActivityBill.cancelReason] = [result];
          curStatus = mac.mac.enum.groupActivityBill.status.refunding;
        }else{
          curStatus = mac.mac.enum.groupActivityBill.status.checkTicket;
        }
        //直接申请退款成功和取消退款成功(取消退款状态改为待参与)
        dbData[mac.mac.fd.groupActivityBill.status] = [curStatus];
        $this.sys.api.recordModify(tableName,dbData,function(){
          $this.tableRefresh(billId,result1?'退款中':'待参与',function(){
            $this.ep.orderRefundEvent($this.billId,result1?0:1);
            //弹出提示框
            if(result1){
              $this.promptDialog('申请退款成功');
            }else{
              $this.promptDialog('取消退款成功');
            }
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      promptDialog(mes){
        this.$alert(mes,'',{
          confirmButtonText:'',
          callback: action => {}
        });
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
          sm1:"orderDetailCrumbs",sm2:"orderDetailHeader",
          sm3:"orderStatusHeader",
          sm4:"currentStatusLabel",sm5:"currentStatus",
          sm6:"orderNumberLabel",sm7:"orderNumber",
          sm8:"createTimeLabel",sm9:"createTime",
          sm10:"activityInfoHeader",
          sm11:"sponsorIcon",sm12:"sponsorName",
          sm13:"posterImage",
          sm14:"activityName",sm15:"activityTimeLabel",sm16:"activityTime",sm17:"activityAddLabel",sm18:"activityAdd",
          sm19:"actorDetailHeader",sm20:"downloadETicketButton",
          sm21:"listTitle1",sm22:"listTitle2",sm23:"listTitle3",sm24:"listTitle4",sm36:"listTitle5",sm25:"listTitle6",sm26:"listTitle7",
          sm27:"listRow",
          sm28:"actorInfoHeader",
          sm29:"infoRow",sm30:"otherInfoRow",
          sm31:"showOthersButton",
          sm32:"amountLabel",sm33:"amountText",
          sm34:"actualPaymentLabel",sm35:"actualPayment"
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
                para.nStep = 'startModule_sm1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_sm1':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_sm2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm2':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_sm3';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm3':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_sm4';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm4':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_sm5';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm5':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_sm6';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm6':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_sm7';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm7':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_sm8';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm8':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_sm9';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm9':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_sm10';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm10':
              $this.sm[ref.sm10].startModule(function(){
                para.nStep = 'startModule_sm11';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm11':
              $this.sm[ref.sm11].startModule(function(){
                para.nStep = 'startModule_sm12';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm12':
              $this.sm[ref.sm12].startModule(function(){
                para.nStep = 'startModule_sm13';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm13':
              $this.sm[ref.sm13].startModule(function(){
                para.nStep = 'startModule_sm14';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm14':
              $this.sm[ref.sm14].startModule(function(){
                para.nStep = 'startModule_sm15';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm15':
              $this.sm[ref.sm15].startModule(function(){
                para.nStep = 'startModule_sm16';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm16':
              $this.sm[ref.sm16].startModule(function(){
                para.nStep = 'startModule_sm17';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm17':
              $this.sm[ref.sm17].startModule(function(){
                para.nStep = 'startModule_sm18';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm18':
              $this.sm[ref.sm18].startModule(function(){
                para.nStep = 'startModule_sm19';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm19':
              $this.sm[ref.sm19].startModule(function(){
                para.nStep = 'startModule_sm20';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm20':
              $this.sm[ref.sm20].startModule(function(){
                para.nStep = 'startModule_sm21';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm21':
              $this.sm[ref.sm21].startModule(function(){
                para.nStep = 'startModule_sm22';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm22':
              $this.sm[ref.sm22].startModule(function(){
                para.nStep = 'startModule_sm23';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm23':
              $this.sm[ref.sm23].startModule(function(){
                para.nStep = 'startModule_sm24';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm24':
              $this.sm[ref.sm24].startModule(function(){
                para.nStep = 'startModule_sm25';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm25':
              $this.sm[ref.sm25].startModule(function(){
                para.nStep = 'startModule_sm26';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm26':
              $this.sm[ref.sm26].startModule(function(){
                para.nStep = 'startModule_sm27';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm27':
              //循环组件
              var arr = [];
              for(let i = 0;i < $this.billIdArr.length;i++){
                arr.push([function(){},function(error){console.log(error)}]);
              }
              $this.callLoopModuleMethod(ref.sm27,'startModule',arr,function(){
                para.nStep = 'startModule_sm28';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm28':
              $this.sm[ref.sm28].startModule(function(){
                para.nStep = 'startModule_sm29';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm29':
              //循环组件
              var arr = [[function(){},function(error){console.log(error)}]];
              $this.callLoopModuleMethod(ref.sm29,'startModule',arr,function(){
                para.nStep = 'startModule_sm30';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm30':
              //循环组件
              var arr = [];
              for(let i = 0;i < $this.otherNameArr.length;i++){
                arr.push([function(){},function(error){console.log(error)}]);
              }
              $this.callLoopModuleMethod(ref.sm30,'startModule',arr,function(){
                para.nStep = 'startModule_sm31';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm31':
              $this.sm[ref.sm31].startModule(function(){
                para.nStep = 'startModule_sm32';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm32':
              $this.sm[ref.sm32].startModule(function(){
                para.nStep = 'startModule_sm33';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm33':
              $this.sm[ref.sm33].startModule(function(){
                para.nStep = 'startModule_sm34';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm34':
              $this.sm[ref.sm34].startModule(function(){
                para.nStep = 'startModule_sm35';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm35':
              $this.sm[ref.sm35].startModule(function(){
                para.nStep = 'startModule_sm36';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sm36':
              $this.sm[ref.sm36].startModule(function(){
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
      setPara:function(successCallBack,errorCallBack){
        var para = {};
        para.successCallBack = successCallBack;
        para.errorCallBack = errorCallBack;
        para.nStep = 0;
        return para;
      },
      // 子组件发出事件
      orderDetailCrumbs_clickEvent(index){
        this.breadcrumbChange(index);
      },
      downloadETicketButton_buttonClickEvent(){
        this.showETicket();
      },
      listRow_orderCancelEvent(billId){
        this.cancelMenu(billId);
      },
      listRow_orderRefundEvent(billId){
        this.refundMenu(billId);
      },
      listRow_completeActivityEvent(billId){
        this.completeActivity(billId);
      },
      listRow_cancelRefundEvent(billId,bola){
        this.refundEvent(billId,bola);
      },
      showOthersButton_buttonClickEvent(){
        this.otherApplicant();
      },
      cancelDia_cancelEvent(billId,result){
        this.cancelApply(billId,result);
      },
      applicationDia_refundEvent(billId,result){
        this.refundEvent(billId,result);
      },
    }
  }
</script>
<style lang="scss" scoped>
  .orderDetail{
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:100%;
    grid-template-rows:100%;
    font-size:0;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .orderDetail_row1_col1{
    width:100%;
    height:100%;
    padding:10px 10px;
    font-size:14px;
  }
  .orderDetail_row1_1_col1{
    width:100%;
    height:40px;
    padding:10px 0 0 0;
  }
  .orderDetail_row1_2_col1{
    width:100%;
    height:40px;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
  }
  .orderDetail_row1_3_col1{
    width:100%;
    height:40px;
  }
  .orderDetail_row1_4_col1{
    width:100%;
    height:150px;
    background:#E7F7FF;
    padding:20px 20px 30px 20px;
    border-radius:4px;
  }
  .orderDetail_row1_4_1_col1{
    width:80px;
    height:30px;
  }
  .orderDetail_row1_4_1_col2{
    width:calc(100% - 80px);
    height:30px;
  }
  .orderDetail_row1_4_2_col1{
    width:80px;
    height:30px;
  }
  .orderDetail_row1_4_2_col2{
    width:calc(100% - 80px);
    height:30px;
  }
  .orderDetail_row1_4_3_col1{
    width:80px;
    height:30px;
  }
  .orderDetail_row1_4_3_col2{
    width:calc(100% - 80px);
    height:30px;
  }
  .orderDetail_row1_5_col1{
    width:100%;
    height:40px;
  }
  .orderDetail_row1_6_col1{
    width:30px;
    height:30px;
    margin:5px;
    border-radius:50%;
    background:green;
  }
  .orderDetail_row1_6_col2{
    width:calc(100% - 40px);
    height:40px;
  }
  .orderDetail_row1_7_col1{
    width:200px;
    height:100px;
    padding:10px 0 0 0;
    box-sizing:border-box;
    overflow:hidden;
  }
  .orderDetail_row1_7_col2{
    width:calc(100% - 200px);
    height:100%;
    padding:10px 0 0 0;
    box-sizing:border-box;
  }
  .orderDetail_row1_7_1_col1{
    width:100%;
    height:30px;
    padding:0 0 0 5px;
    box-sizing:border-box;
  }
  .orderDetail_row1_7_2_col1{
    width:45px;
    height:30px;
    padding:0 0 0 5px;
    box-sizing:border-box;
  }
  .orderDetail_row1_7_2_col2{
    width:calc(100% - 45px);
    height:30px;
    box-sizing:border-box;
  }
  .orderDetail_row1_7_3_col1{
    width:45px;
    height:30px;
    padding:0 0 0 5px;
    box-sizing:border-box;
  }
  .orderDetail_row1_7_3_col2{
    width:calc(100% - 45px);
    height:30px;
    box-sizing:border-box;
  }
  .orderDetail_row1_8_col1{
    width:calc(100% - 100px);
    height:40px;
  }
  .orderDetail_row1_8_col2{
    width:100px;
    height:40px;
  }
  .orderDetail_row1_9_col1{
    width:10%;
    height:40px;
    background:#f4f4f4;
  }
  .orderDetail_row1_9_col2{
    width:15%;
    height:40px;
    background:#f4f4f4;
  }
  .orderDetail_row1_9_col3{
    width:15%;
    height:40px;
    background:#f4f4f4;
  }
  .orderDetail_row1_9_col4{
    width:15%;
    height:40px;
    background:#f4f4f4;
  }.orderDetail_row1_9_col5{
     width:15%;
     height:40px;
     background:#f4f4f4;
   }
  .orderDetail_row1_9_col6{
    width:15%;
    height:40px;
    background:#f4f4f4;
  }
  .orderDetail_row1_9_col7{
    width:15%;
    height:40px;
    background:#f4f4f4;
  }
  .orderDetail_row1_91_col1{
    width:100%;
  }
  .orderDetail_row1_10_col1{
    width:100%;
    height:40px;
  }
  .orderDetail_row1_11_col1{
    width:100%;
  }
  .orderDetail_row1_12_col1{
    width:100%;
  }
  .orderDetail_row1_13_col1{
    width:100%;
    height:40px;
    padding:0 0 0 calc(100% - 100px);
  }
  .orderDetail_row1_14_col1{
    width:calc(100% - 50px);
    height:40px;
  }
  .orderDetail_row1_14_col2{
    width:50px;
    height:40px;
  }
  .orderDetail_row1_15_col1{
    width:calc(100% - 50px);
    height:40px;
  }
  .orderDetail_row1_15_col2{
    width:50px;
    height:40px;
  }
  .orderDetail_row2_col1{}
  .orderDetail_row3_col1{}
  .orderDetail_row4_col1{}
  .orderDetail_row5_col1{}
</style>
