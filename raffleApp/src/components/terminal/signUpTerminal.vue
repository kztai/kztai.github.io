<template>
    <div class="t8-box">
        <div class="t8-p">
            <router-view
                    v-if="outPara !== null"
                    :ref="outPara.refId"
                    :refId="outPara.refId"
                    :inPara="outPara.data"></router-view>
        </div>
    </div>
</template>

<script>
  import eventClass from "../../../public/jsFile/8";
  import dbCloudGeneID from "../../../public/jsFile/db_cloud_8";
  import dbGeneID from "../../../public/jsFile/db_8";
 function eee(){}
  export default {
    name: "T8",
    data: function() {
      return {
       mac: mac.mac,
        outPara: null
      };
    },
    mounted: function() {
      this.$gene = 8;//jasonlgb
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
    .t8-box {
        margin: 10px;
        padding: 10px;
    }

    .t8-p {
        padding: 5px;
        /*border: 1px solid #333;*/
        min-height: 40px;
    }
</style>
