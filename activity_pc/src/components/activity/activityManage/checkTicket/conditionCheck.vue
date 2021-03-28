<template>
    <div class="condition-check-wrap">
        <div class="condition-check">
            <lm-input-text
                    ref="inputRef"
                    refId="inputRef"
                    v-show="pvt_isShow.input === 'inputRef'"
                    :paraVarPair="pvt_input.inputRef.paraVarPair"
                    :para="pvt_input.inputRef.para"
                    :attr="pvt_input.inputRef.attr">
            </lm-input-text>
            <lm-button
                    ref="checkBtnRef"
                    refId="checkBtnRef"
                    v-show="pvt_isShow.checkBtn === 'checkBtnRef'"
                    :paraVarPair="pvt_checkBtn.checkBtnRef.paraVarPair"
                    :para="pvt_checkBtn.checkBtnRef.para"
                    :attr="pvt_checkBtn.checkBtnRef.attr">
            </lm-button>
        </div>
        <div class="apply-table" v-show="!itemIsEmpty">
            <div class="table-title">
                <lm-link-text
                        ref="titleNameRef"
                        refId="titleNameRef"
                        v-show="pvt_isShow.titleName === 'titleNameRef'"
                        :paraVarPair="pvt_titleName.titleNameRef.paraVarPair"
                        :para="pvt_titleName.titleNameRef.para"
                        :attr="pvt_titleName.titleNameRef.attr">
                </lm-link-text>
                <lm-link-text
                        ref="titleTelRef"
                        refId="titleTelRef"
                        v-show="pvt_isShow.titleTel === 'titleTelRef'"
                        :paraVarPair="pvt_titleTel.titleTelRef.paraVarPair"
                        :para="pvt_titleTel.titleTelRef.para"
                        :attr="pvt_titleTel.titleTelRef.attr">
                </lm-link-text>
                <lm-link-text
                        ref="titleTicketRef"
                        refId="titleTicketRef"
                        v-show="pvt_isShow.titleTicket === 'titleTicketRef'"
                        :paraVarPair="pvt_titleTicket.titleTicketRef.paraVarPair"
                        :para="pvt_titleTicket.titleTicketRef.para"
                        :attr="pvt_titleTicket.titleTicketRef.attr">
                </lm-link-text>
                <lm-link-text
                        ref="titleMoneyRef"
                        refId="titleMoneyRef"
                        v-show="pvt_isShow.titleMoney === 'titleMoneyRef'"
                        :paraVarPair="pvt_titleMoney.titleMoneyRef.paraVarPair"
                        :para="pvt_titleMoney.titleMoneyRef.para"
                        :attr="pvt_titleMoney.titleMoneyRef.attr">
                </lm-link-text>
                <lm-link-text
                        ref="titleTimeRef"
                        refId="titleTimeRef"
                        v-show="pvt_isShow.titleTime === 'titleTimeRef'"
                        :paraVarPair="pvt_titleTime.titleTimeRef.paraVarPair"
                        :para="pvt_titleTime.titleTimeRef.para"
                        :attr="pvt_titleTime.titleTimeRef.attr">
                </lm-link-text>
                <lm-link-text
                        ref="titleCheckRef"
                        refId="titleCheckRef"
                        v-show="pvt_isShow.titleCheck === 'titleCheckRef'"
                        :paraVarPair="pvt_titleCheck.titleCheckRef.paraVarPair"
                        :para="pvt_titleCheck.titleCheckRef.para"
                        :attr="pvt_titleCheck.titleCheckRef.attr">
                </lm-link-text>
            </div>
            <div class="table-item">
                <applyItem
                        ref="applyItemRef"
                        refId="applyItemRef"
                        v-show="pvt_isShow.applyItem === 'applyItemRef'"
                        v-for="(item, index) in pvt_applyItem.applyItemRef.forData"
                        :number="index"
                        :paraVarPair="pvt_applyItem.applyItemRef.paraVarPair"
                        :para="item.para"
                        :attr="item.attr">
                </applyItem>
            </div>
            <div class="pagination-row">
                <lm-pagination
                        ref="paginationRef"
                        refId="paginationRef"
                        v-show="pvt_isShow.pagination === 'paginationRef'"
                        :paraVarPair="pvt_pagination.paginationRef.paraVarPair"
                        :para="pvt_pagination.paginationRef.para"
                        :attr="pvt_pagination.paginationRef.attr">
                </lm-pagination>
            </div>
        </div>
        <div class="item-empty">
            <lm-link-text
                    ref="itemEmptyRef"
                    refId="itemEmptyRef"
                    v-show="pvt_isShow.itemEmpty === 'itemEmptyRef'"
                    :paraVarPair="pvt_itemEmpty.itemEmptyRef.paraVarPair"
                    :para="pvt_itemEmpty.itemEmptyRef.para"
                    :attr="pvt_itemEmpty.itemEmptyRef.attr">
            </lm-link-text>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import applyItem from './checkItem';

    export default {
        components: {applyItem},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                conditionValue: '',
                itemTotal: 1,
                itemIsEmpty: true,
                billIdArr: [],

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['inputRef', 'checkBtnRef', 'titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleCheckRef', 'titleTimeRef', 'paginationRef', 'itemEmptyRef', 'applyItemRef'],
                    vessel: ['input', 'checkBtn', 'titleName', 'titleTel', 'titleTicket', 'titleMoney', 'titleCheck', 'titleTime', 'pagination', 'itemEmpty', 'applyItem'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    input: null,
                    checkBtn: null,
                    titleName: null,
                    titleTel: null,
                    titleTicket: null,
                    titleMoney: null,
                    titleTime: null,
                    titleCheck: null,
                    pagination: null,
                    itemEmpty: null,
                    applyItem: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['ticketPassIn', 'getSeccodeIn', 'seccodeVerifyIn'],
            }
        },
        computed: {
            pvt_applyItem: function () {
                let loopModule = {
                    applyItemRef: {
                        para: {
                            curBillId: this.billIdArr,
                            // selected: this.ItemSelectedArr, // 值为数组，对应每次循环的参数
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    applyItemRef: {
                        paraVarPair: {
                            // selected: 'allSelected'
                        },
                        forData: forData.applyItemRef,
                    },
                };
            },

            pvt_input: function () {
                return {
                    inputRef: {
                        paraVarPair: {},
                        para: {
                            text: ''
                        },
                        attr: {
                            placeholder: '请输入参会者姓名或手机号进行查询',
                            size: "large"
                        }
                    }
                }
            },

            pvt_checkBtn: function () {
                return {
                    checkBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['查询', '']
                        },
                        attr: {
                            type: 'primary',
                            height: '60px',
                            size: 'large'
                        }
                    }
                }
            },

            pvt_titleName: function () {
                return {
                    titleNameRef: {
                        paraVarPair: {},
                        para: {
                            textData: '姓名'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleTel: function () {
                return {
                    titleTelRef: {
                        paraVarPair: {},
                        para: {
                            textData: '手机'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleTicket: function () {
                return {
                    titleTicketRef: {
                        paraVarPair: {},
                        para: {
                            textData: '票种'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleMoney: function () {
                return {
                    titleMoneyRef: {
                        paraVarPair: {},
                        para: {
                            textData: '支付金额（元）'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleCheck: function () {
                return {
                    titleCheckRef: {
                        paraVarPair: {},
                        para: {
                            textData: '操作'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleTime: function () {
                return {
                    titleTimeRef: {
                        paraVarPair: {},
                        para: {
                            textData: '报名时间'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_pagination: function () {
                return {
                    paginationRef: {
                        paraVarPair: {},
                        para: {
                            currentPage: 1
                        },
                        attr: {
                            pageSize: 10,
                            total: this.itemTotal
                            // total: 100
                        }
                    }
                }
            },
            pvt_itemEmpty: function () {
                return {
                    itemEmptyRef: {
                        paraVarPair: {},
                        para: {
                            textData: '暂无数据'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399',
                            textAlign: 'center'
                        }
                    }
                }
            },
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            getApplyTotal: function () {
                return 10;
            },
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'conditionCheck_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    checkBtnRef: 'checkBtnRef',
                    inputRef: 'inputRef',
                    titleNameRef: 'titleNameRef',
                    titleTelRef: 'titleTelRef',
                    titleTicketRef: 'titleTicketRef',
                    titleMoneyRef: 'titleMoneyRef',
                    titleCheckRef: 'titleCheckRef',
                    titleTimeRef: 'titleTimeRef',
                    paginationRef: 'paginationRef',
                    itemEmptyRef: 'itemEmptyRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'start_10':
                            this.conditionValue = '';
                            this.itemTotal = 1;
                            this.itemIsEmpty = true;
                            this.billIdArr = [];

                            that.sm[ref.titleNameRef].startModule(function () {
                                para.nStep = 'start_11';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_11':
                            that.sm[ref.titleTelRef].startModule(function () {
                                para.nStep = 'start_12';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_12':
                            that.sm[ref.titleTicketRef].startModule(function () {
                                para.nStep = 'start_13';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_13':
                            that.sm[ref.titleMoneyRef].startModule(function () {
                                para.nStep = 'start_15';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_15':
                            that.sm[ref.titleCheckRef].startModule(function () {
                                para.nStep = 'start_16';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_16':
                            that.sm[ref.titleTimeRef].startModule(function () {
                                para.nStep = 'start_17';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_17':
                            that.sm[ref.paginationRef].startModule(function () {
                                para.nStep = 'start_18';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_18':
                            that.sm[ref.itemEmptyRef].startModule(function () {
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_2':
                            that.sm[ref.checkBtnRef].startModule(function () {
                                para.nStep = 'start_3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.inputRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            // let refArr = ['inputRef', 'checkBtnRef'];
                            let refArr = ['inputRef', 'checkBtnRef', 'titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleCheckRef', 'titleTimeRef', 'paginationRef'];
                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
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

            getConditionValue: function (value) {
                this.conditionValue = value;
            },

            searchApplyWrap: function () {
                if (navigator.onLine) {
                    this.searchApply(0, function () {
                    }, function () {
                    })
                } else {
                    this.$message.warning('出错了！请稍后再试。');
                }
            },

            // 假设可以条件下载子表数据的写法：
            /*  searchApply: function (start, successCallBack, errorCallBack) {
                  let that = this;
                  let fnname = 'conditionCheck_searchApply';
                  let dbFlag;
                  let dbData;
                  let tableName;
                  let record;
                  let conditionData;
                  let para = {
                      successCallBack: successCallBack,
                      errorCallBack: errorCallBack,
                      nStep: 0,
                      i: 0,
                      isEmpty: true,
                      selectItemIdArr: []
                  };

                  if (successCallBack !== null) {
                      errorCallBack = para;
                      successCallBack = null
                  }
                  para = errorCallBack;

                  while (1) {
                      dbFlag = 0;
                      console.log(fnname + ': para.nStep = ' + para.nStep);
                      switch (para.nStep) {
                          case 0:
                              that.billIdArr = [];
                              that.itemIsEmpty = true;

                              if(that.conditionValue === '') {
                                  para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.mac.enum.groupActivityBill.status.checkTicket;
                              } else {
                                  para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.conditionValue + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.conditionValue + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.mac.enum.groupActivityBill.status.checkTicket;
                              }

                              // if(para.condition === '') {
                              //     conditionData = {
                              //         condition: that.mac.fd.groupActivityEnroll.groupActivityID + '=' + that.para.activityId,
                              //         start: start,
                              //         total: 10
                              //     };
                              // } else {
                              //     conditionData = {
                              //         condition: '(' + para.condition + ')&&' + that.mac.fd.groupActivityEnroll.groupActivityID + '=' + that.para.activityId,
                              //         start: start,
                              //         total: 10
                              //     };
                              // }

                              para.nStep = 'inputBillData';
                              dbFlag++;
                              break;
                          case 'inputBillData':
                              let expression = para.condition;
                              let startNum = start;
                              let total = 10;
                              let sort = ['id,asc'];
                              let destGeneSite = '';
                              let portName = this.mac.tb.groupActivityBill;
                              let inputData = null;
                              this.sys.api.conditiondataInput(portName, inputData, expression, startNum, total, sort, destGeneSite, function (result) {
                                  if(result) {
                                      that.billIdArr = JSON.parse(JSON.stringify(result));
                                      that.itemIsEmpty = false;

                                      // 刷新报名总人数：
                                      that.itemTotal = that.getApplyTotal();

                                      // 目前票据表格没有订单父表，临时作为根表：
                                      para.nStep = 'refreshPagination';
                                      // para.nStep = 'getParentId';
                                  } else {
                                      that.$message.warning('暂无待验票的名单！');
                                      that.itemIsEmpty = true;
                                      para.nStep = 'end';
                                  }

                                  that.forceUpdateData(function () {
                                      if (++dbFlag === 2) {
                                          that.searchApply(start, successCallBack, errorCallBack)
                                      }
                                  })
                              }, function (error) {
                                  console.error(error)
                              });
                              break;
                          case 'getParentId':
                              // 等下载子表环境可以后，才能查找父表并下载父记录：
                              tableName = this.mac.tb.groupActivityBill;
                              record = that.billIdArr;
                              that.sys.api.getParentRecord(tableName, record, function (result) {
                                  para.curOrderIdArr = that.removeRepetition(result);
                                  para.nStep = 'getCloudOrderId';
                                  if (++dbFlag === 2) {
                                      that.searchApply(start, successCallBack, errorCallBack)
                                  }
                              }, function () {
                              });
                              break;
                          case 'getCloudOrderId':
                              tableName = this.mac.tb.groupActivityOrder;
                              record = para.curOrderIdArr;
                              that.sys.api.getSourceRecord(tableName, record, function (result) {
                                  para.cloudOrderIdArr = result;
                                  para.nStep = 'inputCloudOrder';
                                  if (++dbFlag === 2) {
                                      that.searchApply(start, successCallBack, errorCallBack)
                                  }
                              }, function () {
                              });
                              break;
                          case 'inputCloudOrder':
                              tableName = this.mac.tb.groupActivityOrder;
                              record = para.cloudOrderIdArr;
                              that.sys.api.dataInput(tableName, record, '', function (result) {
                                  para.nStep = 'refreshPagination';
                                  if (++dbFlag === 2) {
                                      that.searchApply(start, successCallBack, errorCallBack)
                                  }
                              }, function () {
                              });
                              break;
                          case 'refreshPagination':
                              that.sm.paginationRef.startModule(function () {
                                  para.nStep = 'refreshItems';
                                  if (++dbFlag === 2) {
                                      that.searchApply(start, successCallBack, errorCallBack)
                                  }
                              }, function () {
                              });
                              break;
                          case 'refreshItems':
                              if (para.i > that.sm.applyItemRef.length - 1) {
                                  para.i = 0;
                                  para.nStep = 'end';
                                  dbFlag++;
                                  break;
                              }

                              that.sm.applyItemRef[para.i].startModule(function () {
                                  para.i++;
                                  para.nStep = 'refreshItems';
                                  if (++dbFlag === 2) {
                                      that.searchApply(start, successCallBack, errorCallBack)
                                  }
                              }, function () {
                              });
                              break;
                          case 'end':
                              if(that.sm.applyItemRef && that.sm.applyItemRef.length > 0) {
                                  that.showSubModule('applyItemRef', true, function () {
                                  }, function (error) {
                                      console.error(error);
                                  });
                              }
                              para.successCallBack();
                              return
                      }
                      if (++dbFlag === 1) {
                          return
                      }
                  }
              },*/

            searchApply: function (start, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'conditionCheck_searchApply';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    isEmpty: true,
                    selectItemIdArr: []
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'inputOrder':
                            let expression = this.mac.fd.groupActivityOrder.groupActivityID + '=' + this.para.activityId;
                            let startNum = null;
                            let total = null;
                            let sort = ['id,asc'];
                            let destGeneSite = '';
                            let portName = this.mac.tb.groupActivityOrder;
                            let inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, startNum, total, sort, destGeneSite, function (result) {
                                // that.curOrderIdArr = JSON.parse(JSON.stringify(result));
                                para.nStep = 'getApply';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'getApply':
                            that.billIdArr = [];
                            that.itemIsEmpty = true;

                            if (that.conditionValue === '') {
                                para.condition = this.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.checkTicket;
                            } else {
                                para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.conditionValue + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.conditionValue + '")&&' + this.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.checkTicket;
                            }

                            tableName = this.mac.tb.groupActivityBill;
                            condition = para.condition;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                if (dbData[that.mac.fd.id].length > 0) {
                                    that.billIdArr = JSON.parse(JSON.stringify(dbData[that.mac.fd.id]));
                                    that.itemIsEmpty = false;

                                    // 刷新报名总人数：
                                    that.itemTotal = that.getApplyTotal();

                                    // 目前票据表格没有订单父表，临时作为根表：
                                    para.nStep = 'refreshPagination';
                                    // para.nStep = 'getParentId';
                                } else {
                                    that.$message.warning('暂无待验票的名单！');
                                    that.itemIsEmpty = true;
                                    para.nStep = 'end';
                                }

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                })
                            }, para.errorCallBack);
                            break;
                        // case 'getParentId':
                        //     // 等下载子表环境可以后，才能查找父表并下载父记录：
                        //     tableName = this.mac.tb.groupActivityBill;
                        //     record = that.billIdArr;
                        //     that.sys.api.getParentRecord(tableName, record, function (result) {
                        //         para.curOrderIdArr = that.removeRepetition(result);
                        //         para.nStep = 'getCloudOrderId';
                        //         if (++dbFlag === 2) {
                        //             that.searchApply(start, successCallBack, errorCallBack)
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        // case 'getCloudOrderId':
                        //     tableName = this.mac.tb.groupActivityOrder;
                        //     record = para.curOrderIdArr;
                        //     that.sys.api.getSourceRecord(tableName, record, function (result) {
                        //         para.cloudOrderIdArr = result;
                        //         para.nStep = 'inputCloudOrder';
                        //         if (++dbFlag === 2) {
                        //             that.searchApply(start, successCallBack, errorCallBack)
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        // case 'inputCloudOrder':
                        //     tableName = this.mac.tb.groupActivityOrder;
                        //     record = para.cloudOrderIdArr;
                        //     that.sys.api.dataInput(tableName, record, '', function (result) {
                        //         para.nStep = 'refreshPagination';
                        //         if (++dbFlag === 2) {
                        //             that.searchApply(start, successCallBack, errorCallBack)
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        case 'refreshPagination':
                            that.sm.paginationRef.startModule(function () {
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.applyItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.applyItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            if (that.sm.applyItemRef && that.sm.applyItemRef.length > 0) {
                                that.showSubModule('applyItemRef', true, function () {
                                }, function (error) {
                                    console.error(error);
                                });
                            }
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            refreshApplyWrap: function (id) {
                this.refreshApply(id, function () {
                }, function () {
                })
            },

            refreshApply: function (curBillId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'conditionCheck_refreshApply';
                let tableName;
                let dbData;
                let dbFlag;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            for (let i = 0; i < that.billIdArr.length; i++) {
                                if (that.billIdArr[i] === curBillId) {
                                    that.billIdArr.splice(i, 1);
                                    break;
                                }
                            }
                            para.nStep = 'refreshItems';
                            that.forceUpdateData(function () {
                                if (++dbFlag === 2) {
                                    that.refreshApply(curBillId, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.applyItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'modifyData';
                                dbFlag++;
                                break;
                            }

                            that.sm.applyItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.refreshApply(curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curBillId];
                            dbData[this.mac.fd.groupActivityBill.status] = [this.mac.enum.groupActivityBill.status.finish];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.$message.success('验票成功！');
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.refreshApply(curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            if (that.sm.applyItemRef.length === 0) {
                                that.itemIsEmpty = true;
                            }
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            pageChange: function (num) {
                let start = 10 * (num - 1);
                this.searchApply(start, function () {
                }, function () {
                })
            },

            removeRepetition: function (arr) {
                var obj = {};
                for (var i = 0; i < arr.length; i++) {
                    obj[arr[i]] = arr[i];
                }
                var arr1 = [];
                for (var k in obj) {
                    arr1.push(obj[k]);
                }
                return arr1;
            },

            checkBtnRef_buttonClickEvent: function () {
                this.searchApplyWrap();
            },
            inputRef_dataModifyEvent: function (value) {
                this.getConditionValue(value);
            },
            paginationRef_currentChangeEvent: function (num) {
                // this.pageChange(num);
            },
            applyItemRef_getSeccodeIn: function (phone, successCallBack, errorCallBack) {
                this.ep.getSeccodeIn(phone, successCallBack, errorCallBack);
            },
            applyItemRef_seccodeVerifyIn: function (id, codeValue, successCallBack, errorCallBack) {
                this.ep.seccodeVerifyIn(id, codeValue, successCallBack, errorCallBack);
            },
            applyItemRef_refreshTicket: function (curBillId) {
                this.refreshApplyWrap(curBillId);
            },
            applyItemRef_ticketPassIn: function (id, successCallBack, errorCallBack) {
                this.ep.ticketPassIn(id, successCallBack, errorCallBack);
            },
        }
    }
</script>

<style lang="scss">
    .condition-check-wrap {
        text-align: center;

        .condition-check {
            .lm_text_input_container {
                display: inline-block;
                min-width: 500px;

                .el-input--large {
                    font-size: 18px;
                }

                .el-input__inner {
                    height: 60px;
                    line-height: 60px;
                    border-radius: 10px 0 0 10px;
                }
            }

            .lm-button {
                display: inline-block;

                .el-button--primary {
                    border-radius: 0 10px 10px 0;
                }

                .el-button--large {
                    font-size: 18px;
                }
            }
        }

        .apply-table {
            margin-top: 30px;

            .table-title {
                display: flex;
                justify-content: space-around;
                background-color: #f5f7fa;
                padding: 10px 0;

                span {
                    flex: 1;
                    text-align: center;
                }
            }

            .table-item {
                .apply-item-wrap {
                    &:last-child {
                        padding-bottom: 0;
                    }
                }
            }

            .pagination-row {
                margin-top: 20px;
                text-align: center;
                padding: 10px 0;

                .el-pagination {
                    color: #606266;
                    font-weight: 400;

                    .btn-next, .btn-prev {
                        color: #606266;
                    }

                    .btn-quicknext, .btn-quickprev {
                        color: #606266;

                        &:hover {
                            color: #409EFF;
                        }
                    }
                }
            }
        }

    }
</style>
