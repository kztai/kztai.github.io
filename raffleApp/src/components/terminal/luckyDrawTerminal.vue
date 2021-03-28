<template>
    <div class="t5-box">
        <div class="t5-p">
            <router-view
                    v-if="outPara !== null"
                    :ref="outPara.refId"
                    :refId="outPara.refId"
                    :inPara="outPara.data"></router-view>
        </div>
    </div>
</template>

<script>
  import eventClass from "../../../public/jsFile/5";
  import dbCloudGeneID from "../../../public/jsFile/db_cloud_5";
  import dbGeneID from "../../../public/jsFile/db_5";
 function eee(){}
  export default {
    name: "T5",
    data: function() {
      return {
        mac: mac.mac,
        outPara: null
      };
    },
    mounted: function() {
      this.$gene = 5;//jasonlgb
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
    .t5-box {
        height: 100%;
        margin: 0;
        padding: 0
    }

    .t5-p {
        height: 100%;
    }
</style>
