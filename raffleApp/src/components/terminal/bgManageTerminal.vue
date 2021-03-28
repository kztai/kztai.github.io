<template>
    <div class="t2-box">
        <router-view
                v-if="outPara !== null"
                :ref="outPara.refId"
                :refId="outPara.refId"
                :inPara="outPara.data"></router-view>
    </div>
</template>

<script>
  import eventClass from "../../../public/jsFile/2";
  import dbCloudGeneID from "../../../public/jsFile/db_cloud_2";
  import dbGeneID from "../../../public/jsFile/db_2";
  export default {
    name: "T2",
    data: function() {
      return {
        outPara: null
      };
    },
    mounted: function() {
      this.$gene = 2;//jasonlgb
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
    .t2-box {
        height: 100%;
    }
</style>
