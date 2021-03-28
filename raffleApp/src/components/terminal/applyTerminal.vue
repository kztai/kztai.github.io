<template>
    <div class="applyTerminal-box">
        <div class="applyTerminal-p">
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
    import eventClass from "../../../public/jsFile/11";
    import dbCloudGeneID from "../../../public/jsFile/db_cloud_11";
    import dbGeneID from "../../../public/jsFile/db_11";

    export default {
        name: "applyTerminal",
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
            this.$gene = 11;
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

</style>
