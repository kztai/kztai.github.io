<template>
    <div class="box">
        <div class="buttonClass">
            <div style="width:100%;height:100%">
                <br/>
                t7--终端粒子
                <br/>
                <br/>
                <el-button type="primary" @click="to_tx('t1')">->G_t1</el-button>
                <br/>
                <br/>
                <el-button type="primary" @click="to_tx('t2')">->G_t2</el-button>
                <br/>
                <br/>
                <el-button type="primary" @click="to_tx('t3')">->G_t3</el-button>
                <br/>
                <br/>
                <el-button type="primary" @click="to_tx('t4')">->G_t4</el-button>
                <br/>
                <br/>
                <el-button type="primary" @click="to_tx('t5')">->G_t5</el-button>
                <br/>
                <br/>
                <el-button type="primary" @click="to_tx('t6')">->G_t6</el-button>
                <br/>
                <br/>
                <el-button type="primary" @click="to_tx('t7')">->G_t7</el-button>
                <br/>
                <br/>
                <el-button type="primary" @click="to_tx('t8')">->G_t8</el-button>
                <el-button type="primary" @click="addUser">addUser</el-button>
                <p7 v-for="(item, index) in outPara"
                    :key="index"
                    :ref="item.ref"
                    :refId="item.ref"
                    :inPara="item.instanceObj"></p7>
            </div>
        </div>
    </div>
</template>
<script>
    import p7 from '@/components/p7.vue';

    export default {
        name: mac.curTerminalInfo.terminalVue,
        components: {
            p7
        },
        provide: function () {
        },
        data: function () {
            return {
                mac: mac.mac,
                cloudCtrl: $cloudCtrl,
                geneAPI: null,
                geneInstance: null,
                outPara: [],
                debugFlag: true,
                sys: {
                    api: null,
                    lib: null
                },
            }
        },
        computed: {},
        mounted: function () {
            let $this = this;
            $this.init(function (result) {
                    console.log(result);
                }, function (error) {
                    console.log(error);
                }
            )
        },
        methods: {
            //初始化模块变量函数
            initRam: function () {
                this.vueName = mac.curTerminalInfo.terminalVue;
                this.mac = mac.mac;
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            init: function (successCallBack, errorCallBack) {
                var $this = this;
                var fnname = 'terminal.init';
                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                var para = errorCallBack;
                while (1) {
                    if ($this.mac.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            $this.cloudCtrl.pageStart(function (result) {
                                $this.inPara = result;
                                $this.geneInstance = $this.inPara.geneInstance;
                                $this.sys.api = $this.inPara.geneInstance.geneAPI;
                                $this.geneAPI = $this.inPara.geneInstance.geneAPI;
                                $this.inPara.geneInstance.geneUser = $this;
                                para.nStep = 'eventStart';
                                if (++$dbFlag === 2) {
                                    $this.init(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'eventStart':
                            $this.inPara.geneInstance.eventStart(mac.curTerminalInfo.pageEvent, $this.inPara.instruct, $this.inPara.command, $this.inPara.paraObject, function (result) {
                                console.log(result);
                                for (let i in result.subGeneHandle) {
                                    $this.outPara.push({
                                        ref: result.subGeneHandle[i].subGeneName,
                                        instanceObj: result.subGeneHandle[i]
                                    })
                                }
                                para.nStep = 'end';
                                if (++$dbFlag === 2) {
                                    $this.init(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },

            startModule: function (successCallBack, errorCallBack) {
            },

            changePage: function (para) {
                this.outPara = [];
                this.outPara.push(para[0])
            },
            buttonClick: function () {
                let $this = this;
                $this.geneAPI.recordNew('userInfo', '', {name: ['name1']}, function (result) {
                    console.log(result)
                }, function (error) {
                    console.log(error)
                })
            },
            eventEnd: function () {
                let $this = this;
                $this.geneAPI.eventEnd(function (result) {
                    console.log(result)
                }, function (error) {
                    console.log(error)
                })
            },
            to_tx: function (tx) {
                let $this = this;
                let HTMLpage = 'http://14.gts.com:85/index.html';
                let para = '';
                $this.geneAPI.terminalGeneStart(mac.arrTerminalInfo[tx].groupID, mac.arrTerminalInfo[tx].cloudID,
                    mac.arrTerminalInfo[tx].vesselID, mac.arrTerminalInfo[tx].geneID, HTMLpage, para, function (result) {
                        console.log('terminalGeneStart success!')
                    }, function (error) {
                        console.log(error)
                    })
            },
            addUser:function () {
                this.sys.api.callParentFunction('addUserInfo', [],function () {
                },function () {
                });
            }
        }
    }
</script>
<style>
</style>
