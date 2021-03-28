<template>
    <div class="box">
        <div class="buttonClass">
            p3--页面粒子
            <br/>
            <br/>
            <el-button type="primary" @click='test'>test</el-button>

        </div>
    </div>
</template>
<script>

    export default {
        name: 'p3',
        props: ['inPara', 'refId'],
        components: {},
        data: function () {
            return {
                mac: mac.mac,
                sys: {
                    api: null,
                    lib: null
                },
                outPara: null,
            }
        },
        computed: {},
        watch: {
            inPara: {
                handler: function (nValue, oValue) {
                    let $this = this;
                    if (nValue !== null) {
                        $this.inPara.geneInstance.geneUser = $this;
                        $this.sys.api = $this.inPara.geneInstance.geneAPI;
                        $this.geneAPI = $this.inPara.geneInstance.geneAPI;
                        $this.inPara.geneInstance.eventStart($this.inPara.event, $this.inPara.instruct, $this.inPara.command, $this.inPara.paraObject, function (result) {
                            // $this.sys.api = $this.inPara.geneInstance.geneAPI;
                            $this.outPara = 2;
                            $this.pvt_isSubModuleStarted = true;
                            console.log(result)
                        }, function (error) {
                            console.log(error)
                        });
                    }
                },
                immediate: true
            }
        },

        methods: {
            setPara: function (successCallBack, errorCallBack) {
                let para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            startModule: function (successCallBack, errorCallBack) {
                successCallBack();
            },
            test: function () {
                this.test_(
                    function (result) {
                        console.log('test success! result:' + result);
                    }, function (error) {
                        console.log('test fail! error:' + JSON.stringify(error));
                    });
            },
            test_: function (successCallBack, errorCallBack) {
                var $this = this;
                var fnname = 'pageGene.test_';
                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                var para = errorCallBack;
                var sort;
                while (1) {
                    if ($this.mac.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            // para.arrTable = ['_group', '_groupInfo', '_clerk', '_timeTable', '_serverSource', '_function', 'table', '_cloud']
                            // para.arrTable = ['cascade', '_group', '_groupInfo', '_clerk', '_timeTable', '_serverSource', '_function', 'table', '_cloud']
                            para.arrTable = ['table']
                            para.i = 0;
                        case 'loop_arrTable':
                            if (para.i == para.arrTable.length) {
                                para.nStep = 'end';
                                ++$dbFlag;
                                break;
                            }
                            para.start = 0;
                        case 'loop_simpleTable':
                            sort = ['id,asc'];
                            $this.sys.api.conditiondataInput(para.arrTable[para.i], '', '', para.start, null, sort, '',
                                function (result) {
                                    if (!result) {
                                        para.i++;
                                        para.nStep = 'loop_arrTable';
                                    } else {
                                        para.start += result.length;
                                        para.nStep = 'loop_simpleTable';
                                    }
                                    if (++$dbFlag === 2) {
                                        $this.test_(successCallBack, errorCallBack);
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
        }
    }
</script>
<style>
</style>
