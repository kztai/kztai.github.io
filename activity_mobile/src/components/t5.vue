<template>
    <div class="group-publish-terminal">
    </div>
</template>
<script>

    export default {
        name: mac.curTerminalInfo.terminalVue,
        components: {
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
                subGeneHandle: [],
                sys: {
                    api: null,
                    lib: null
                },

                blogData: {
                    type: 0,
                    blogId: null
                }
            }
        },
        computed: {
            para: function () {
                if (this.subGeneHandle.length === 0) {
                    return null;
                } else {
                    return this.subGeneHandle[0];
                }
            }
        },
        mounted: function () {
            let $this = this;
            // Object.assign($this, cloudDeployTestData);
            $this.startModule(function (result) {
                    console.log(result);
                }, function (error) {
                    console.log(error);
                }
            )
        },
        methods: {
            //初始化模块变量函数
            initRam: function () {
                this.vueName = 'terminal';
                this.mac = mac.mac;
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let fnname = 'terminal.init';
                let dbData;
                let objectName;
                let record;
                let parentRecord;
                let condition;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
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
                            // 初始化：
                            para.blogData = JSON.parse(this.getUrlPar('paraTemp')).data;
                            if(para.blogData) {
                                para.cloudBlogId = para.blogData.blogId;
                            } else {
                                para.cloudBlogId = null;
                            }

                            $this.cloudCtrl.pageStart(function (result) {
                                $this.inPara = result;
                                $this.geneInstance = $this.inPara.geneInstance;
                                $this.sys.api = $this.inPara.geneInstance.geneAPI;
                                $this.geneAPI = $this.inPara.geneInstance.geneAPI;
                                $this.inPara.geneInstance.geneUser = $this;
                                para.nStep = 'inputUserInfo';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'inputUserInfo':
                            expression = '';
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.userInfo;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'inputGroupInfo';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'inputGroupInfo':
                            expression = '';
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupInfo;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'getSourceID';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'getSourceID':
                            if(para.cloudBlogId === null) {
                                this.blogData = JSON.parse(this.getUrlPar('paraTemp')).data;
                                para.nStep = 'eventStart';
                                $dbFlag++;
                            } else {
                                var geneSites =  {
                                    geneAddr: {
                                        groupID: 1,
                                        cloudID: 2,
                                        vesselType: 's',
                                        vesselID: 15,
                                        userID: 1,
                                        geneID: 23
                                    },
                                    server:11
                                };
                                var tempData = {};
                                tempData['tableName'] = $this.mac.tb.groupBlog;
                                tempData['changeID'] = para.cloudBlogId;
                                $this.sys.api.callGeneSiteFunction(geneSites, 'getSourceID', [tempData],
                                    function (result) {
                                        para.blogIdCloud = result;
                                        para.nStep = 'getTerBlogId';
                                        if (++$dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack);
                                        }
                                    }, function () {})
                            }
                            break;
                        case 'getTerBlogId':
                            objectName = $this.mac.tb.groupBlog;
                            record = [para.blogIdCloud];
                            $this.sys.api.dataInput(objectName, record, '', function (result) {
                                $this.blogData = {
                                    type: para.blogData.type,
                                    blogId: result[0]
                                };
                                para.nStep = 'eventStart';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'eventStart':
                            $this.inPara.geneInstance.eventStart(mac.curTerminalInfo.pageEvent, $this.inPara.instruct, $this.inPara.command, $this.inPara.paraObject, function (result) {
                                console.log(result);

                                for (let i in result.subGeneHandle) {
                                    $this.subGeneHandle.push(result.subGeneHandle[i]);
                                }
                                para.nStep = 'end';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
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

            blogToCloud: function(type, data, successCallBack, errorCallBack) {
                let that = this;
                let blogId = data.blogID;
                let tableName = this.mac.tb.groupBlog;

                if(navigator.onLine) {
                    that.sys.api.dataOutput(tableName, [blogId], '', function (result) {
                        let blogData = {
                            blogID: result.destRecord[0],
                            status: data.status,
                            authorSite: data.authorSite,
                            publicLabelNumber: data.publicLabelNumber
                        };
                        that.sys.api.callParentFunction('setBlogIn', [type,blogData],successCallBack, errorCallBack);
                    }, function () {
                    });
                } else {
                    errorCallBack()
                }
            },

            labelToCloud: function(terLabelId,successCallBack, errorCallBack) {
                let that = this;
                let tableName = this.mac.tb.groupBlogLabel;
                if(navigator.onLine) {
                    that.sys.api.dataOutput(tableName, [terLabelId], '', function (result) {
                        let blogData = {
                            groupBlogLabelID: result.destRecord[0]
                        };
                        that.sys.api.callParentFunction('setBlogIn', [that.mac.setBlog.type.newLabel,blogData], function () {
                            successCallBack();
                            let index = Math.random();
                            let data = {
                                index: index
                            };
                            that.to_tx('t6',data);
                        }, function () {
                        });
                    }, function () {
                    });
                } else {
                    errorCallBack();
                }
            },

            groupPublishPage_publishEnd: function(ref, terLabelId,successCallBack, errorCallBack) {
                this.labelToCloud(terLabelId,successCallBack, errorCallBack);
            },
            groupPublishPage_setBlogIn: function (ref, type, data, successCallBack, errorCallBack) {
                this.blogToCloud(type, data, successCallBack, errorCallBack);
            },



            getUrlPar: function (par) {
                var local_url = document.location.href;
                local_url = window.decodeURIComponent(local_url);
                //获取要取得的get参数位置
                var get = local_url.indexOf(par + "=");
                if (get === -1) {
                    return false;
                }
                //截取字符串
                var get_par = local_url.slice(par.length + get + 1);
                //判断截取后的字符串是否还有其他get参数
                var nextPar = get_par.indexOf("&");
                if (nextPar !== -1) {
                    get_par = get_par.slice(0, nextPar);
                }
                var lastPar = get_par.indexOf("#");//过滤#号
                if (lastPar !== -1) {
                    get_par = get_par.slice(0, lastPar);
                }
                return get_par;
            },

            to_tx: function (tx, data) {
                let $this = this;
                let HTMLpage = 'http://14.gts.com:85/index.html';
                let para = {
                    para: null,
                    data: data
                };
                $this.geneAPI.terminalGeneStart(mac.arrTerminalInfo[tx].groupID, mac.arrTerminalInfo[tx].cloudID,
                    mac.arrTerminalInfo[tx].vesselID, mac.arrTerminalInfo[tx].geneID, HTMLpage, para, function (result) {
                        console.log('terminalGeneStart success!')
                    }, function (error) {
                        console.log(error)
                    })
            },
        }
    }
</script>
<style>
</style>
