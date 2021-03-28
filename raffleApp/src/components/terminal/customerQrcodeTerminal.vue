<template>
    <div class="t16-box">
        <div class="t16-p">
            <router-view
                    v-if="outPara !== null"
                    :ref="outPara.refId"
                    :refId="outPara.refId"
                    :inPara="outPara.data"></router-view>
        </div>
    </div>
</template>

<script>
  import eventClass from "../../../public/jsFile/16";
  import dbCloudGeneID from "../../../public/jsFile/db_cloud_16";
  import dbGeneID from "../../../public/jsFile/db_16";
 function eee(){}
  export default {
    name: "customerQrcodeTerminal",
    data: function() {
      return {
        outPara: null
      };
    },
    mounted: function() {
      this.$gene = 16;//jasonlgb
      this.$c_db = dbCloudGeneID;
      this.$r_db = dbGeneID;
      this.$serverIp = $CConfig.serverIP;// todo 临时
      this.$geneClass = eventClass;
      let terminalCtrl = new $CTerminalCtrl(this);
      let $this = this;
      terminalCtrl.terminalStart(function(result) {
        $this.terminalGeneHandle = result;
        console.log("终端启动成功~");
      }, function(error) {
        console.error(error);
      });
    },
    methods: {
        abcL: function(){},
    }
  };
</script>

<style scoped>
    .t16-box {
        text-align: center;
        padding: 50% 0;
    }

    .t16-p {
    }
</style>
