<template>
    <div id="detail-terminal">

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

                terBlogId: null,
                cloudBlogId: null,
                recommendStart: 0,
                inputTotal: 10,
                commentDataArr: [],
                commentNumIndex: 1,
                isSelf: false,
                treeNum: 0,
                btnType: 'content',
                isFavorite: false,
                commentValueArr: [],

                myType: 1,
                mySite: '',
                myID: 1,
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
            $this.startModule(function (result) {
                    console.log(result);
                }, function (error) {
                    console.log(error);
                }
            )
        },
        methods: {
            backTest: function() {
                let that = this;
                let data = {};
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
                that.sys.api.callGeneSiteFunction(destGeneSite, 'commandQueueRunIn', [that.myId], function () {
                    that.to_tx('t2', data);
                }, function () {
                });
            },


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
                let condition;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let record;
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

                            $this.recommendStart = 0;
                            $this.inputTotal = 10;
                            $this.commentDataArr = [];
                            $this.commentNumIndex = 1;
                            $this.treeNum = 0;
                            $this.isSelf = false;
                            $this.cloudBlogId = null;
                            $this.terBlogId = null;
                            $this.btnType = 'content';
                            $this.isFavorite = false;
                            $this.commentValueArr = [];

                            // 获取传入数据：
                            para.blogData = JSON.parse(this.getUrlPar('paraTemp')).data;
                            if(para.blogData) {
                                $this.cloudBlogId = para.blogData.blogId;
                                $this.btnType = para.blogData.btn;
                                $this.isFavorite = para.blogData.isFavorite;
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
                            portName = $this.mac.tb.userInfo;
                            // inputData = null;
                            inputData = {
                                userInfo: ''
                            };
                            $this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    para.terUserInfoId = result[0];
                                }
                                para.nStep = 'getAuthorInfo';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'getAuthorInfo':
                            objectName = $this.mac.tb.userInfo;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [para.terUserInfoId];
                            dbData[$this.mac.fd.userInfo.userID] = [];
                            dbData[$this.mac.fd.userInfo.userSite] = [];
                            $this.sys.api.recordRead(objectName, dbData, function (result) {
                                // 如果作者id等于当前登入的用户id：
                                // if (dbData[$this.mac.fd.userInfo.userID][0] === $this.myId) {
                                if (dbData[$this.mac.fd.userInfo.userID][0] === 1) {
                                    $this.isSelf = true;
                                }
                                if($this.cloudBlogId === null) {
                                    para.nStep = 'end';
                                } else {
                                    para.nStep = 'newHistory';
                                }
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'newHistory':
                            let blogData = {
                                blogID: $this.cloudBlogId,
                                userSite: $this.mySite,
                                userID: $this.myId
                            };
                            $this.sys.api.callParentFunction('setBlogIn', [$this.mac.setBlog.type.newHistory, blogData], function () {
                                para.nStep = 'inputCloudBlog';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
                            break;
                        case 'inputCloudBlog':
                            objectName = $this.mac.tb.userBlog;
                            record = [$this.cloudBlogId];
                            $this.sys.api.dataInput(objectName, record, '', function (result) {
                                $this.terBlogId = result[0];
                                para.nStep = 'inputComment';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'inputComment':
                            $this.inputComment(function () {
                                para.nStep = 'eventStart';
                                if (++$dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, function () {
                            });
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

            terminalToCloud: function(type, data, successCallBack, errorCallBack) {
                let that = this;
                let tableName = that.mac.tb.userBlogComment;
                let dataClone = JSON.parse(JSON.stringify(data));

                if(navigator.onLine) {
                    if(data.commentID) {
                        that.sys.api.getSourceRecord(tableName, [data.commentID], function (result) {
                            dataClone.commentID = result[0];
                            that.sys.api.callParentFunction('setBlogIn', [type,dataClone],successCallBack, errorCallBack);
                        }, function () {
                        });
                    } else {
                        that.sys.api.callParentFunction('setBlogIn', [type,data],successCallBack, errorCallBack);
                    }
                } else {
                    errorCallBack()
                }
            },

            inputComment: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let couldParentId = null;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    curCommentIdArr: [],
                    result: [],
                    rootCommentLength: 0,
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
                            expression = that.mac.fd.userBlogComment.userBlog + '=' + that.cloudBlogId + '&&' + that.mac.fd.userBlogComment.parentID + '=[' + couldParentId + ']';
                            if (couldParentId === null) {
                                start = that.recommendStart;
                                total = that.inputTotal;
                                sort = ['id,asc'];
                            } else {
                                start = null;
                                total = null;
                                sort = ['id,asc'];
                            }
                            destGeneSite = '';
                            portName = that.mac.tb.userBlogComment;
                            inputData = null;
                            that.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.result = result;
                                if (result && couldParentId === null) {
                                    para.rootCommentLength = result.length;
                                }
                                para.nStep = 'getParentSourceId';
                                if (++dbFlag === 2) {
                                    that.inputComment(successCallBack, errorCallBack);
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getParentSourceId':
                            if (para.result) {
                                para.curCommentIdArr = para.curCommentIdArr.concat(para.result);
                                tableName = that.mac.tb.userBlogComment;
                                that.sys.api.getSourceRecord(tableName, para.result, function (result) {
                                    couldParentId = result;
                                    para.nStep = 0;
                                    if (++dbFlag === 2) {
                                        that.inputComment(successCallBack, errorCallBack);
                                    }
                                }, function () {
                                });
                            } else {
                                couldParentId = null;
                                para.nStep = 'getCommentData';
                                if (++dbFlag === 2) {
                                    that.inputComment(successCallBack, errorCallBack);
                                }
                            }
                            break;
                        case 'getCommentData':
                            if (para.curCommentIdArr.length === 0) {
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }
                            let condition = 'id=[' + para.curCommentIdArr + ']';
                            tableName = that.mac.tb.userBlogComment;
                            dbData = {};
                            dbData[that.mac.fd.userBlogComment.parentID] = [];
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.userBlogComment.delete] = [];
                            dbData[that.mac.fd.userBlogComment.hideComment] = [];
                            // 下载评论数据到终端：
                            that.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                that.commentDataArr = [];
                                if (dbData[that.mac.fd.id].length > 0) {
                                    that.treeRoot(that.commentDataArr, dbData[that.mac.fd.userBlogComment.parentID], dbData[that.mac.fd.id], dbData[that.mac.fd.userBlogComment.delete], dbData[that.mac.fd.userBlogComment.hideComment]);
                                }

                                that.joinCommentData(that.commentDataArr, function () {
                                    // 先判断前10条是否下满，如下满再判断根评论是否达到10条，不是需要再下载，直到满10条：
                                    if (para.rootCommentLength < that.inputTotal || that.commentValueArr.length >= 10 * that.commentNumIndex) {
                                        that.recommendStart += that.inputTotal;
                                        para.nStep = 'end';
                                    } else {
                                        couldParentId = null;
                                        para.curCommentIdArr = [];
                                        that.recommendStart += that.inputTotal;
                                        that.inputTotal = 10 * that.commentNumIndex - that.commentValueArr.length;
                                        para.nStep = 0;
                                    }
                                    if (++dbFlag === 2) {
                                        that.inputComment(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'end':
                            that.inputTotal = 10;
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            joinCommentData: function (commentDataArr, successCallBack, errorCallBack) {
                let that = this;

                rootComment:
                    for (let i = 0; i < commentDataArr.length; i++) {
                        // 1 判断根删除的情况下，如果有没删的子，则它也不删，否则彻底删除这个根：
                        if (commentDataArr[i].isDelete === that.mac.enum.userBlogComment.delete.yes) {
                            if (commentDataArr[i].children.length > 0) {
                                for (let j = 0; j < commentDataArr[i].children.length; j++) {
                                    if (commentDataArr[i].children[j].isDelete === that.mac.enum.userBlogComment.delete.no) {
                                        break;
                                    } else if (j === commentDataArr[i].children.length - 1) {
                                        commentDataArr.splice(i, 1);
                                        i--;
                                        continue rootComment;
                                    }
                                }
                            } else {
                                commentDataArr.splice(i, 1);
                                i--;
                            }

                        }
                    }

                // 如果作者id不等于当前登入的用户id：
                if (!that.isSelf) {
                    isHide:
                        for (let i = 0; i < commentDataArr.length; i++) {
                            // 1 判断根屏蔽的情况下，如果有没屏蔽的子，则它也不屏蔽，否则彻底屏蔽这个根：
                            if (commentDataArr[i].isHide === that.mac.enum.userBlogComment.hideComment.yes) {
                                if (commentDataArr[i].children.length > 0) {
                                    for (let j = 0; j < commentDataArr[i].children.length; j++) {
                                        if (commentDataArr[i].children[j].isHide === that.mac.enum.userBlogComment.hideComment.no) {
                                            break;
                                        } else if (j === commentDataArr[i].children.length - 1) {
                                            commentDataArr.splice(i, 1);
                                            i--;
                                            continue isHide;
                                        }
                                    }
                                } else {
                                    commentDataArr.splice(i, 1);
                                    i--;
                                }

                            }
                        }
                }

                for (let i = 0; i < commentDataArr.length; i++) {
                    that.commentValueArr.push(commentDataArr[i]);
                }

                successCallBack();
            },

            treeRoot: function (commentDataArr, parentIdArr, tableIdArr, deleteArr, hideCommentArr) {
                //验证传参是否正确
                for (let n = 0; n < parentIdArr.length; n++) {
                    if (parentIdArr[n] && !tableIdArr.includes(parentIdArr[n])) {
                        console.log('传入数据不正确');
                        return
                    }
                }
                //循环验证是否拼接完成
                while (tableIdArr.length > 0) {
                    for (let i = 0; i < tableIdArr.length; i++) {
                        if (parentIdArr[i] && parentIdArr[i] !== tableIdArr[i]) {

                            this.treeChildren(commentDataArr, parentIdArr[i], tableIdArr[i], deleteArr[i], hideCommentArr[i]);

                            if (this.treeNum === 1) {
                                tableIdArr.splice(i, 1);
                                parentIdArr.splice(i, 1);
                                deleteArr.splice(i, 1);
                                hideCommentArr.splice(i, 1);
                                this.treeNum = 0;
                                i--
                            }
                        } else {
                            commentDataArr.push({
                                commentId: tableIdArr[i],
                                parentId: '',
                                isDelete: deleteArr[i],
                                isHide: hideCommentArr[i],
                                cloudBlogId: this.cloudBlogId,
                                children: []
                            });
                            tableIdArr.splice(i, 1);
                            parentIdArr.splice(i, 1);
                            deleteArr.splice(i, 1);
                            hideCommentArr.splice(i, 1);
                            i--
                        }
                    }
                }
                this.treeNum = 0
            },

            treeChildren: function (commentDataArr, parentId, id, isDelete, hideComment) {
                if (commentDataArr.length === 0) {
                    return;
                }
                var stack = [];
                stack.push(commentDataArr);
                var checkOne;
                while (stack.length > 0) {
                    checkOne = stack.pop();
                    for (let i = 0; i < checkOne.length; i++) {
                        if (checkOne[i].commentId === parentId) {
                            checkOne[i].children.push({
                                commentId: id,
                                parentId: parentId,
                                isDelete: isDelete,
                                isHide: hideComment,
                                cloudBlogId: this.cloudBlogId,
                            });
                            this.treeNum = 1;
                            return
                        } else if (checkOne[i].children.length > 0) {
                            for (let j = 0; j < checkOne[i].children.length; j++) {
                                if (checkOne[i].children[j].commentId === parentId) {
                                    checkOne[i].children.push({
                                        commentId: id,
                                        parentId: parentId,
                                        isDelete: isDelete,
                                        isHide: hideComment,
                                        cloudBlogId: this.cloudBlogId,
                                    });
                                    this.treeNum = 1;
                                    return
                                }
                            }
                        }
                    }
                }
            },


            blogDetail_backEvent: function(ref, favoriteCall) {
                let index = Math.random();
                let data = {
                    index: index
                };
                if(favoriteCall) {
                    data.favoriteCall = true;
                    this.to_tx('t2', data);
                } else {
                    data.favoriteCall = false;
                    this.to_tx('t2', data);
                }
            },
            blogDetail_inputCloudComment: function(ref, successCallBack, errorCallBack) {
                this.commentNumIndex++;
                this.inputComment(function () {
                    successCallBack();
                }, function () {
                });
            },
            blogDetail_inputRefreshComment: function(ref, cloudCommentId, successCallBack, errorCallBack) {
                let that = this;
                let tableName = that.mac.tb.userBlogComment;
                let record = [cloudCommentId];
                that.sys.api.dataInput(tableName, record, '', function (result) {
                    successCallBack(result[0]);
                }, function () {
                })
            },
            blogDetail_refreshDelComment: function(ref, terCommentId, successCallBack, errorCallBack) {
                let that = this;
                let tableName = that.mac.tb.userBlogComment;
                let record = [terCommentId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    that.sys.api.dataInput(tableName, result, '', function () {
                        successCallBack();
                    }, function () {
                    })
                }, function () {
                })
            },

            blogDetail_setBlogIn: function(ref, type, data, successCallBack, errorCallBack) {
                this.terminalToCloud(type, data, successCallBack, errorCallBack);
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
    #detail-terminal {
        width: 100%;
        height: 100%;
        font-family: SourceHanSansCN-Medium;
    }
</style>
