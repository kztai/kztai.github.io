<template>
    <div class="raffleTerminal-box">
        <div class="raffleTerminal-p">
            <router-view
                    v-if="outPara !== null"
                    :ref="outPara.refId"
                    :refId="outPara.refId"
                    :paraVarPair="paraVarPair"
                    :para="para"
                    :attr="attr"
                    :inPara="outPara.data">
            </router-view>
        </div>
    </div>
</template>

<script>
    import eventClass from "../../../public/jsFile/14";
    import dbCloudGeneID from "../../../public/jsFile/db_cloud_14";
    import dbGeneID from "../../../public/jsFile/db_14";


    export default {
        name: "raffleTerminal",
        data: function () {
            return {
                mac: mac.mac,
                outPara: null,
                paraVarPair: null,
                para: null,
                attr: {
                    size: 'medium'
                }
            };
        },
        mounted: function () {
            this.$gene = 14;
            this.$c_db = dbCloudGeneID;
            this.$r_db = dbGeneID;
            this.$serverIp = $CConfig.serverIP;// todo 临时
            this.$geneClass = eventClass;
            let terminalCtrl = new $CTerminalCtrl(this);
            let $this = this;

            terminalCtrl.terminalStart(function (result) {
                $this.terminalGeneHandle = result;
                console.log("终端启动成功~");
            }, function (error) {
                console.error(error);
            });
        },
        methods: {}
    };
</script>

<style scoped>
    .raffleTerminal-box .raffleTerminal-p {
        /*position: absolute;*/
        /*left: 0;*/
        /*top: 0;*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*box-sizing: border-box;*/
    }
</style>
