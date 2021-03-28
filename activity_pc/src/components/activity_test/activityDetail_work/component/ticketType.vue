<template>
    <div @click="ticketSelect()" @mouseover="ticketHover()" :class="'detailticket'+number" class="detail-ticket">
        <div class="row ticket-border">
            <div class="col mar-r-10">
                <lm-link-text
                        ref="smText1"
                        refId="smText1"
                        v-show="pvt_isShow.v1 === 'smText1'"
                        :paraVarPair="pvt_v1.smText1.paraVarPair"
                        :para="pvt_v1.smText1.para"
                        :attr="pvt_v1.smText1.attr">
                </lm-link-text>
            </div>
            <div class="col">
                <lm-link-text
                        ref="smText2"
                        refId="smText2"
                        v-show="pvt_isShow.v2 === 'smText2'"
                        :paraVarPair="pvt_v2.smText2.paraVarPair"
                        :para="pvt_v2.smText2.para"
                        :attr="pvt_v2.smText2.attr">
                </lm-link-text>
            </div>
        </div>
        <div class="row">
            <lm-popover
                    ref="smPopover"
                    refId="smPopover"
                    v-show="pvt_isShow.v3 === 'smPopover'"
                    :paraVarPair="pvt_v3.smPopover.paraVarPair"
                    :para="pvt_v3.smPopover.para"
                    :attr="pvt_v3.smPopover.attr">
            </lm-popover>
        </div>
        <div v-if="attr.select" class="select-img">
            <img src="../../../../assets/select.png" alt="" width="17" height="17">
        </div>
    </div>
</template>

<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1","v2","v3"],
                    subModule: ["smText1","smText2","smPopover"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                },

                pvt_eventPortInput: ['ticketSelectEvent'],


                mac:mac.mac,
                debugFlag: true,
                price:'',
                color1:'#FC7122',
                color2:'#303133',
                balloon:'',
                reference:''
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: this.price
                        },
                        attr: {
                            fontSize: '16px',  color: this.color1
                        }
                    }
                }
            },
            pvt_v2: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.name],
                                $arrValue: [this.para.activityTicketTypeID]
                            }],
                        },
                        attr: {
                            fontSize: '14px', color: this.color2
                        }
                    }
                }
            },
            pvt_v3: function () {
                return {
                    smPopover:{
                        paraVarPair: {},
                        para: {
                            balloon: this.balloon,
                        },
                        attr: {
                            reference:this.reference,wordWrap:true,trigger:'hover',openDelay:200,isHtml:true
                        }
                    }
                }
            },
        },
        watch: {},
        mounted: function () {
            this.pvt_initSysData();
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let fnname = 'ticketType.startModule';
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                };

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                        case 'readGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    if(dbData[$this.mac.fd.groupActivityTicketType.price][0]===0){
                                        $this.price = '免费';
                                    }else{
                                        $this.price = '¥'+dbData[$this.mac.fd.groupActivityTicketType.price][0];
                                    }
                                    if($this.attr.select){
                                        $('.detailticket'+$this.number).css('border','1px solid #12B0FF');
                                    }else{
                                        $('.detailticket'+$this.number).css('border','1px solid rgba(229,229,229,1)');
                                    }
                                    if($this.attr.disabled){
                                        $('.detailticket'+$this.number).css({'background':'rgba(244,244,244,1)'});
                                        $('.detailticket'+$this.number).addClass('disabled');
                                        $('.detailticket'+$this.number).removeClass('detailticket');
                                        $this.color1 = '#C0C4CC';
                                        $this.color2 = '#C0C4CC';
                                    }else{
                                        $('.detailticket'+$this.number).css({'background':'#ffffff'});
                                        $('.detailticket'+$this.number).addClass('detailticket');
                                        $('.detailticket'+$this.number).removeClass('disabled');
                                        $this.color1 = '#FC7122';
                                        $this.color2 = '#303133';
                                    }
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule1';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            let refId = ["smText1","smText2"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
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
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            ticketSelect:function () {
                if(!this.attr.disabled){
                    this.ep.ticketSelectEvent(this.number)
                }
            },
            ticketHover:function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let fnname = 'ticketType.ticketHover';
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                };

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                            $this.balloon = ['',''];
                            if($this.attr.disabled){
                                para.nStep = 'getParentRecord';
                            }else{
                                para.nStep = 'end';
                            }
                            dbFlag += 1;
                            break
                        case 'getParentRecord':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            $this.sys.api.getParentRecord(objectName,[$this.para.activityTicketTypeID],
                                function (result) {
                                    para.activityID = result[0];
                                    para.nStep = 'readGroupActivity';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketHover(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'readGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [para.activityID];
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.enrollNumber = dbData[$this.mac.fd.groupActivity.enrollNumber][0];
                                    para.nStep = 'readGroupActivityTicketType';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketHover(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'readGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.orderNumber = dbData[$this.mac.fd.groupActivityTicketType.number][0];
                                    if(dbData[$this.mac.fd.groupActivityTicketType.poll][0]!==null&&(dbData[$this.mac.fd.groupActivityTicketType.poll][0]===  para.enrollNumber[para.orderNumber])){
                                        $this.balloon = ['','此种票已售罄'];
                                    }else if(dbData[$this.mac.fd.groupActivityTicketType.saleStartTime][0]!==null&&(new Date(dbData[$this.mac.fd.groupActivityTicketType.saleStartTime][0])>new Date())){
                                        para.html='<div style="line-height: 24px;">未开售（ 销售期：'+dbData[$this.mac.fd.groupActivityTicketType.saleStartTime][0]+'~'+dbData[$this.mac.fd.groupActivityTicketType.saleEndTime][0]+'）</div>'
                                        $this.balloon = ['',para.html]
                                    }else if(dbData[$this.mac.fd.groupActivityTicketType.saleEndTime][0]!==null&&(new Date(dbData[$this.mac.fd.groupActivityTicketType.saleEndTime][0])<new Date())){
                                        $this.balloon = ['','停止售票'];
                                    }
                                    // else if(){
                                    //     $this.balloon = ['','此种票于'++'停止出售'];
                                    // }
                                    $this.reference = document.getElementsByClassName('detailticket'+$this.number)[0];
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule3';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketHover(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'startModule3':
                            $this.sm['smPopover'].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketHover(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            let refId = ["smPopover"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.ticketHover(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            return;
                        default:
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .mar-r-10{
        margin-right: 10px;
    }

    .detailticket{
        cursor: pointer;
        border:1px solid rgba(229,229,229,1);
    }

    .detail-ticket{
        position: relative;
        .ticketSelect-popover{
            .link-text{
                position: absolute;
            }
        }
        .select-img{
            position: absolute;
            right:0;
            bottom:0;
            height: 17px;
        }
    }


    /*.detailticket.disabled{*/
    /*pointer-events: none;*/
    /*}*/



    .ticket-border{
        height: 36px;
        line-height: 36px;
        padding:0 20px;
    }

    .detailticket:hover{
        border:1px solid #12B0FF !important;
    }

    .disabled:hover{
        cursor:not-allowed;
    }

    .col {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: middle;
        margin-top: -2px;
    }

    .col_w_1 {
        width: 5%;
    }

    .col_w_2 {
        width: 10%;
    }

    .col_w_3 {
        width: 15%;
    }

    .col_w_4 {
        width: 20%;
    }

    .col_w_5 {
        width: 25%;
    }

    .col_w_6 {
        width: 30%;
    }

    .col_w_7 {
        width: 35%;
    }

    .col_w_8 {
        width: 40%;
    }

    .col_w_9 {
        width: 45%;
    }

    .col_w_10 {
        width: 50%;
    }

    .col_w_11 {
        width: 55%;
    }

    .col_w_12 {
        width: 60%;
    }

    .col_w_13 {
        width: 65%;
    }

    .col_w_14 {
        width: 70%;
    }

    .col_w_15 {
        width: 75%;
    }

    .col_w_16 {
        width: 80%;
    }

    .col_w_17 {
        width: 85%;
    }

    .col_w_18 {
        width: 90%;
    }

    .col_w_19 {
        width: 95%;
    }

    .col_w_20 {
        width: 100%;
    }
</style>