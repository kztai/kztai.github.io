<template>
    <div id="public-terminal">
        <publicBlog
                ref="publicBlog"
                refId="publicBlog"
                :favoriteCall="favoriteCall"
                :para="para">
        </publicBlog>
        <el-button v-show="false" type="primary" @click='addUser'>addUser</el-button>
    </div>
</template>
<script>
    import publicBlog from '@/components/public/publicBlog.vue';

    export default {
        name: mac.curTerminalInfo.terminalVue,
        components: {
            publicBlog
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

                myType: 1,
                mySite: '',
                myID: 1,

                start_recommend: 0,
                start_attention: 0,
                start_favorite: 0,
                inputTotal: 10,
                attentionSiteId: null,
                favoriteCall: false,
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
                let parentRecord;
                let record;
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
                            $this.mySite = $this.getCookie('userSite');
                            $this.myId = $this.getCookie('userID');
                            $this.myType = $this.getCookie('userType');

                            $this.start_recommend = 0;
                            $this.start_attention = 0;
                            $this.start_favorite = 0;
                            $this.attentionSiteId = null;
                            $this.favoriteCall = false;

                            para.data = JSON.parse(this.getUrlPar('paraTemp')).data;
                            if(para.data) {
                                this.favoriteCall = para.data.favoriteCall;
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

            initAttentionBlog: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let record;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            expression = this.mac.fd.publicBlogAttention.myID + '=' + that.myId;
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.publicBlogAttention;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'getSiteId';
                                if (++dbFlag === 2) {
                                    that.initAttentionBlog(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getSiteId':
                            // 获取我关注的所有站点id：
                            tableName = this.mac.tb.publicBlogAttention;
                            condition = '';
                            dbData = {};
                            dbData[this.mac.fd.publicBlogAttention.siteID] = [];
                            that.sys.api.recordQuery(tableName, null, condition, dbData, function () {
                                that.attentionSiteId = dbData[that.mac.fd.publicBlogAttention.siteID];
                                para.nStep = 'inputPublicBlog';
                                if (++dbFlag === 2) {
                                    that.initAttentionBlog(successCallBack, errorCallBack);
                                }
                            }, function () {

                            });
                            break;
                        case 'inputPublicBlog':
                            that.inputBlog_attention(function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.initAttentionBlog(successCallBack, errorCallBack);
                                }
                            }, function () {

                            });
                            break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            inputBlog_attention: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            expression = '(' + this.mac.fd.publicBlog.groupID + '=[' + that.attentionSiteId + ']||' + this.mac.fd.publicBlog.author + '=[' + that.attentionSiteId + '])&&' + this.mac.fd.publicBlog.delete + '=' + this.mac.enum.publicBlog.delete.no;
                            start = that.start_attention;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = this.mac.tb.publicBlog;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputBlog_attention(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            inputBlog_favorite: function(successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let condition;
                let record;
                let tableName;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            expression = this.mac.fd.publicBlogHandle.myID + '=' + that.myId + '&&' + this.mac.fd.publicBlogHandle.favorite + '=' + that.mac.enum.publicBlogHandle.favorite.yes;
                            start = that.start_favorite;
                            total = that.inputTotal;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.publicBlogHandle;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.result = result;

                                if(result === null) {
                                    para.nStep = 'end';
                                } else {
                                    para.nStep = 'getPublicId';
                                }

                                if (++dbFlag === 2) {
                                    that.inputBlog_favorite(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getPublicId':
                            // 获取我的所有收藏博文id：
                            tableName = this.mac.tb.publicBlogHandle;
                            dbData = {};
                            dbData[this.mac.fd.id] = para.result;
                            dbData[this.mac.fd.publicBlogHandle.publicBBSID] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                para.curPublicIdArr = dbData[that.mac.fd.publicBlogHandle.publicBBSID];
                                para.nStep = 'getCloudPublicId';
                                if (++dbFlag === 2) {
                                    that.inputBlog_favorite(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case 'getCloudPublicId':
                            // 获取我的所有收藏博文id：
                            tableName = this.mac.tb.publicBlog;
                            record = para.curPublicIdArr;
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.cloudPublicIdArr = result;
                                para.nStep = 'inputPublicBlog';
                                if (++dbFlag === 2) {
                                    that.inputBlog_favorite(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case 'inputPublicBlog':
                            expression = 'id=[' + para.cloudPublicIdArr + ']';
                            start = null;
                            total = null;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = this.mac.tb.publicBlog;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputBlog_favorite(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            inputBlog_recommend: function(successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            expression =  that.mac.fd.publicBlog.delete + '=' + that.mac.enum.publicBlog.delete.no;
                            // expression = '';
                            start = that.start_recommend;
                            total = that.inputTotal;
                            sort = ['id,desc'];
                            destGeneSite = '';
                            portName = that.mac.tb.publicBlog;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputBlog_recommend(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            initBlog: function(type, successCallBack, errorCallBack) {
                if(type === 'attention') {
                    this.initAttentionBlog(function () {
                        successCallBack();
                    }, function () {
                    })
                } else if(type === 'favorite') {
                    this.inputBlog_favorite(function () {
                        successCallBack();
                    }, function () {
                    })
                } else {
                    this.inputBlog_recommend(function () {
                        successCallBack();
                    }, function () {
                    })
                }
            },

            inputCloudBlog: function(type, successCallBack, errorCallBack) {
                let that = this;
                if(type === 'recommend') {
                    this.start_recommend += 10;
                    this.inputBlog_recommend(function () {
                        successCallBack()
                    }, function () {

                    });
                }else if(type === 'attention') {
                    this.start_attention += 10;
                    this.inputBlog_attention(function () {
                        successCallBack()
                    }, function () {

                    });
                } else {
                    this.start_favorite += 10;
                    this.inputBlog_favorite(function () {
                        successCallBack();
                    }, function () {

                    });
                }
            },


            publicBlog_publishArticle: function() {
                let index = Math.random();
                let data = {
                    type: 'article',
                    blogId: null,
                    index: index
                };
                this.to_tx('t3', data);
            },
            publicBlog_publishNote: function() {
                let index = Math.random();
                let data = {
                    type: 'note',
                    blogId: null,
                    index: index
                };
                this.to_tx('t3', data);
            },
            publicBlog_blogClickEvent: function(ref, cloudBlogId, userType, btn, isFavorite) {
                let that = this;
                let index = Math.random();
                let data = {
                    blogId: cloudBlogId,
                    btn: btn,
                    index: index
                };
                var destGeneSite={
                    geneAddr: {
                        groupID: 1,
                        cloudID: 2,
                        vesselType: 's',
                        vesselID: 7,
                        userID: 3,
                        geneID: 30
                    },
                    server:3
                };

                if(userType === 'group') {
                    that.to_tx('t6', data);
                } else {
                    data.isFavorite = isFavorite;
                    that.to_tx('t4', data);
                }

                // if(userType === 'group') {
                //     that.to_tx('t6', data);
                // } else {
                //     data.isFavorite = isFavorite;
                //     that.sys.api.callGeneSiteFunction(destGeneSite, 'commandQueueRunIn', [that.myId], function () {
                //         that.to_tx('t4', data);
                //     }, function () {
                //     });
                // }
            },

            publicBlog_inputCloudBlog: function(ref, type, successCallBack, errorCallBack) {
                this.inputCloudBlog(type, successCallBack, errorCallBack);
            },
            publicBlog_initCloudBlog: function(ref, type, successCallBack, errorCallBack) {
                this.initBlog(type, successCallBack, errorCallBack);
            },
            publicBlog_setBlogIn: function(ref, type, data, successCallBack, errorCallBack) {
                if(navigator.onLine) {
                    this.sys.api.callParentFunction('setBlogIn', [type,data],successCallBack, errorCallBack);
                } else {
                    errorCallBack();
                }
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
                    para:null,
                    data: data
                };
                $this.geneAPI.terminalGeneStart(mac.arrTerminalInfo[tx].groupID, mac.arrTerminalInfo[tx].cloudID,
                    mac.arrTerminalInfo[tx].vesselID, mac.arrTerminalInfo[tx].geneID, HTMLpage, para, function (result) {
                        console.log('terminalGeneStart success!')
                    }, function (error) {
                        console.log(error)
                    })
            },
            getCookie: function(type) {
                if(type === 'userID') {
                    return 1;
                } else if(type === 'userSite') {
                    return {
                        geneAddr: {
                            groupID: 1,
                            cloudID: 2,
                            vesselType: 's',
                            vesselID: 18,
                            userID: 1,
                            geneID: 26
                        },
                        server:12
                    }
                }  else if(type === 'userType') {
                    // 0表示普通用户，1表示游客
                    return 0
                }
            },
            addUser:function () {
                this.sys.api.callParentFunction('addUserInfo', [],function () {
                    console.log(1)
                },function () {

                });
            }
        }
    }
</script>
<style>
    #public-terminal {
        width: 100%;
        height: 100%;
        font-family: SourceHanSansCN-Medium;
    }
</style>
