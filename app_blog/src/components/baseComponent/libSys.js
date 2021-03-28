// 【接口方法】定义接口方法，向父发送事件

var libSys = {
};


libSys.callModuleEventPort = function (eventName, arrParam, successCallBack, errorCallBack) {
  var $this = this;
  // 调用父模块方法
  var scs = function (result) {
    return result;
  };
  var err = function (error) {
    return error;
  };
  if (successCallBack && errorCallBack) {
    arrParam.unshift($this.refId);
    arrParam.push(successCallBack);
    arrParam.push(errorCallBack);
  } else {
    arrParam.unshift($this.refId);
    arrParam.push(scs);
    arrParam.push(err);
  }
  var eventRef = $this.refId.split('__')[0];
  if ($this.$parent[eventRef + '_' + eventName]) {
    $this.$parent[eventRef + '_' + eventName].apply($this.$parent, arrParam);
  } else {
    if (errorCallBack) {
      var e = {
        code   : '001',
        message: '在父组件中找不到事件对应方法。'
      };
      errorCallBack(e);
    }
  }
};

// 【接口方法】定义接口方法，激活同一个容器中的某个模块
libSys.activateModule = function (refId, successCallBack, errorCallBack) {
  var $this = this;
  var vesselId = '';

  // 查找destRefId对应的容器
  $this.pvt_vesselRef.ref.forEach(function (r, i) {
    if (r === refId) {
      vesselId = $this.pvt_vesselRef.vesselId[i];
    }
  });
  if (vesselId !== '') {
    $this.pvt_currentRef[vesselId] = refId;
    $this.$nextTick(function () {
      successCallBack();
    });
  }

};

// 【公开】显示隐藏指定模块
libSys.showModule = function (refId, option, successCallBack, errorCallBack) {
  var $this = this;
  var vesselId = '';

  if (Object.prototype.toString.call(refId) === '[object Array]') {
    refId.forEach(function (rId) {
      // 查找destRefId对应的容器
      $this.pvt_vesselRef.ref.forEach(function (r, i) {
        if (r === rId) {
          vesselId = $this.pvt_vesselRef.vesselId[i];
        }
      });
      if (vesselId !== '') $this.pvt_isShow[vesselId] = option;
    });
  } else if (Object.prototype.toString.call(refId) === '[object String]') {
    // 查找destRefId对应的容器
    $this.pvt_vesselRef.ref.forEach(function (r, i) {
      if (r === refId) {
        vesselId = $this.pvt_vesselRef.vesselId[i];
      }
    });
    if (vesselId !== '') $this.pvt_isShow[vesselId] = option;
  } else {
    console.log('参数错误！');
    errorCallBack()
  }
  $this.$nextTick(function () {
    successCallBack();
  });

};

// 【接口方法】定义接口方法，显示指定对话框模块
libSys.showDialog = function (refId, successCallBack, errorCallBack) {
  var $this = this;
  $this.showModule(refId, true, successCallBack, errorCallBack);
};

// 【接口方法】定义接口方法，隐藏自身对话框模块
libSys.hideSelfDialog = function (refId, successCallBack, errorCallBack) {
  var $this = this;
  $this.$parent.showModule(refId, false, successCallBack, errorCallBack);
};

// 【接口方法】调用子模块方法时调用，内部会根据目标模块活动状态做相应处理
libSys.callSubModuleMethod = function (destRefId, methodName, arrParam, successCallBack,
  errorCallBack) {
  var $this = this;
  if (successCallBack && errorCallBack) {
    $this.callSpecifiedMethod(null, destRefId, null, methodName, arrParam,
      successCallBack, errorCallBack);
  } else {
    return $this.callSpecifiedMethod(null, destRefId, null, methodName, arrParam,
      successCallBack, errorCallBack);
  }
};

// 【非公开】调用子模块方法时调用，内部会根据目标模块活动状态做相应处理
libSys.runSubModuleMethod = function (srcRefId, destRefId, callBack, methodName,
  arrParam, successCallBack, errorCallBack) {
  var $this = this;
  var scs;
  var err;
  var vesselComponent = '';
  var srcParaStatus;
  var destParaStatus = $this.getParaStatus(destRefId);

  // 查找destRefId对应的容器
  $this.pvt_vesselRef.ref.forEach(function (r, i) {
    if (r === destRefId) {
      vesselComponent = 'pvt_' + $this.pvt_vesselRef.vesselId[i] + '_comp';
    }
  });


  // 目标组件是否为活动状态
  if (vesselComponent !== ''
    && $this[vesselComponent].currentRef === destRefId
    && $this[vesselComponent].isShow) {
    // 当前队列任务为某一个方法的回调函数
    if (callBack) {
      callBack(arrParam[0]);
    } else {
      // 子模块方法的成功回调函数
      scs = function (result) {
        // 执行子模块方法完成回到了成功回调，现在要执行 callSubModuleMethod 的回调。
        // 可能回调事件监听函数中，也可能回到粒子方法中

        // 发事件的子模块ref是否明确，如果明确，一般是事件监听函数的调用
        if (srcRefId) {
          srcParaStatus = $this.getParaStatus(srcRefId);
          vesselComponent = '';
          $this.pvt_vesselRef.ref.forEach(function (r, i) {
            if (r === srcRefId) {
              vesselComponent = 'pvt_' + $this.pvt_vesselRef.vesselId[i] + '_comp';
            }
          });

          // 发事件的子模块是否为活动状态，是就直接执行回调，否就将回调 push 到方法队列中
          if ($this[vesselComponent].currentRef === srcRefId) {
            successCallBack(result);
          } else {
            if (!$this.pvt_subModuleMethodQueue[srcRefId]) {
              $this.pvt_subModuleMethodQueue[srcRefId] = {
                paraStatus     : [],
                srcRef         : [],
                callBack       : [],
                methodName     : [],
                param          : [],
                successCallBack: [],
                errorCallBack  : [],
              }
            }

            $this.pvt_subModuleMethodQueue[srcRefId].paraStatus.push(srcParaStatus);
            $this.pvt_subModuleMethodQueue[srcRefId].srcRef.push(null);
            $this.pvt_subModuleMethodQueue[srcRefId].callBack.push(successCallBack);
            $this.pvt_subModuleMethodQueue[srcRefId].methodName.push(null);
            $this.pvt_subModuleMethodQueue[srcRefId].param.push([result]);
            $this.pvt_subModuleMethodQueue[srcRefId].successCallBack.push(null);
            $this.pvt_subModuleMethodQueue[srcRefId].errorCallBack.push(null);
            // console.log('successCallBack methodQueue:', JSON.stringify($this.pvt_subModuleMethodQueue, null, 4));
          }
        } else {
          successCallBack(result)
        }
      };

      // 子模块方法的失败回调函数，逻辑同成功回调
      err = function (error) {
        if (srcRefId) {
          srcParaStatus = $this.getParaStatus(srcRefId);
          vesselComponent = '';
          $this.pvt_vesselRef.ref.forEach(function (r, i) {
            if (r === srcRefId) {
              vesselComponent = 'pvt_' + $this.pvt_vesselRef.vesselId[i] + '_comp';
            }
          });

          if ($this[vesselComponent].currentRef === srcRefId) {
            errorCallBack(error)
          } else {
            if (!$this.pvt_subModuleMethodQueue[srcRefId]) {
              $this.pvt_subModuleMethodQueue[srcRefId] = {
                paraStatus     : [],
                srcRef         : [],
                callBack       : [],
                methodName     : [],
                param          : [],
                successCallBack: [],
                errorCallBack  : [],
              }
            }
            $this.pvt_subModuleMethodQueue[srcRefId].paraStatus.push(srcParaStatus);
            $this.pvt_subModuleMethodQueue[srcRefId].srcRef.push(null);
            $this.pvt_subModuleMethodQueue[srcRefId].callBack.push(errorCallBack);
            $this.pvt_subModuleMethodQueue[srcRefId].methodName.push(null);
            $this.pvt_subModuleMethodQueue[srcRefId].param.push([error]);
            $this.pvt_subModuleMethodQueue[srcRefId].successCallBack.push(null);
            $this.pvt_subModuleMethodQueue[srcRefId].errorCallBack.push(null);
            // console.log('errorCallBack methodQueue:', JSON.stringify($this.pvt_subModuleMethodQueue, null, 4));
          }
        } else {
          errorCallBack(error)
        }
      };

      // 执行子模块方法
      if (successCallBack && errorCallBack) {
        arrParam.push(scs);
        arrParam.push(err);
        $this.$refs[destRefId][methodName].apply($this.$refs[destRefId], arrParam);
      } else {
        // fixme: srcRefId is active?
        return $this.$refs[destRefId][methodName].apply($this.$refs[destRefId], arrParam);
      }
    }

  } else {
    // 将子模块方法 push 到任务队列中
    if (!$this.pvt_subModuleMethodQueue[destRefId]) {
      $this.pvt_subModuleMethodQueue[destRefId] = {
        paraStatus     : [],
        srcRef         : [],
        callBack       : [],
        methodName     : [],
        param          : [],
        successCallBack: [],
        errorCallBack  : [],
      }
    }
    $this.pvt_subModuleMethodQueue[destRefId].paraStatus.push(destParaStatus);
    $this.pvt_subModuleMethodQueue[destRefId].srcRef.push(srcRefId);
    $this.pvt_subModuleMethodQueue[destRefId].callBack.push(null);
    $this.pvt_subModuleMethodQueue[destRefId].methodName.push(methodName);
    $this.pvt_subModuleMethodQueue[destRefId].param.push(arrParam);
    $this.pvt_subModuleMethodQueue[destRefId].successCallBack.push(successCallBack);
    $this.pvt_subModuleMethodQueue[destRefId].errorCallBack.push(errorCallBack);
    // console.log('methodQueue:', JSON.stringify($this.pvt_subModuleMethodQueue, null, 4));


    if (successCallBack && errorCallBack) {
      errorCallBack(null);
    } else {
      return null;
    }
  }
};


libSys.callSpecifiedMethod = function (srcRefId, destRefId, callBack, methodName,
  arrParam, successCallBack, errorCallBack) {
  var $this = this;
  var para = {};
  var vesselComponent = '';
  var srcQueue;
  var destQueue;
  var srcParaStatus;
  var destParaStatus;
  var args = [];
  var fnname = 'libSys.callSpecifiedMethod';
  var scs = function (result) {
    // 执行子模块方法完成回到了成功回调，现在要执行 callSubModuleMethod 的回调。
    // 可能回调事件监听函数中，也可能回到粒子方法中

    // 发事件的子模块ref是否明确，如果明确，一般是事件监听函数的调用
    if (srcRefId) {
      srcParaStatus = $this.getParaStatus(srcRefId);
      vesselComponent = '';
      $this.pvt_vesselRef.ref.forEach(function (r, i) {
        if (r === srcRefId) {
          vesselComponent = 'pvt_' + $this.pvt_vesselRef.vesselId[i] + '_comp';
        }
      });

      // 发事件的子模块是否为活动状态，是就直接执行回调，否就将回调 push 到方法队列中
      if ($this[vesselComponent].currentRef === srcRefId) {
        successCallBack(result);
      } else {
        if (!$this.pvt_subModuleMethodQueue[srcRefId]) {
          $this.pvt_subModuleMethodQueue[srcRefId] = {
            paraStatus     : [],
            srcRef         : [],
            callBack       : [],
            methodName     : [],
            param          : [],
            successCallBack: [],
            errorCallBack  : [],
          }
        }
        srcQueue = $this.pvt_subModuleMethodQueue[srcRefId];
        srcQueue.paraStatus.push(srcParaStatus);
        srcQueue.srcRef.push(null);
        srcQueue.callBack.push(successCallBack);
        srcQueue.methodName.push(null);
        srcQueue.param.push([result]);
        srcQueue.successCallBack.push(null);
        srcQueue.errorCallBack.push(null);
      }
    } else {
      successCallBack(result)
    }
  };
  var err = function (error) {
    if (srcRefId) {
      srcParaStatus = $this.getParaStatus(srcRefId);
      vesselComponent = '';
      $this.pvt_vesselRef.ref.forEach(function (r, i) {
        if (r === srcRefId) {
          vesselComponent = 'pvt_' + $this.pvt_vesselRef.vesselId[i] + '_comp';
        }
      });

      if ($this[vesselComponent].currentRef === srcRefId) {
        errorCallBack(error)
      } else {
        if (!$this.pvt_subModuleMethodQueue[srcRefId]) {
          $this.pvt_subModuleMethodQueue[srcRefId] = {
            paraStatus     : [],
            srcRef         : [],
            callBack       : [],
            methodName     : [],
            param          : [],
            successCallBack: [],
            errorCallBack  : [],
          }
        }
        srcQueue = $this.pvt_subModuleMethodQueue[srcRefId];
        srcQueue.paraStatus.push(srcParaStatus);
        srcQueue.srcRef.push(null);
        srcQueue.callBack.push(errorCallBack);
        srcQueue.methodName.push(null);
        srcQueue.param.push([error]);
        srcQueue.successCallBack.push(null);
        srcQueue.errorCallBack.push(null);
      }
    } else {
      errorCallBack(error)
    }
  };

  // $this.debugFlag_szl = true;
  para.nStep = 0;

  while (1) {
    if ($this.debugFlag_szl) {
      console.log('【SZL】' + fnname + ': para.nStep = ' + para.nStep);
    }

    switch (para.nStep) {
      case 0:
      case 'hasDestRef':
        // 如果存在 destRefId，表示调用的是子模块方法；
        // 如果不存在 destRefId，表示调用的是模块方法或事件接口；
        if (destRefId) {
          para.nStep = 'isDestModuleActivated';
        } else {
          para.nStep = 'methodHasCallBack';
        }
        break;
      case 'isDestModuleActivated':
        // 查找destRefId对应的容器
        $this.pvt_vesselRef.ref.forEach(function (r, i) {
          if (r === destRefId) {
            vesselComponent = 'pvt_' + $this.pvt_vesselRef.vesselId[i] + '_comp';
          }
        });

        // 目标组件是否为活动状态
        if (vesselComponent !== ''
          && $this[vesselComponent].currentRef === destRefId
          && $this[vesselComponent].isShow) {
          para.nStep = 'methodIsCallBack';
        } else {
          para.nStep = 'pushMethodQueue';
        }
        break;
      case 'pushMethodQueue':
        // 目标子模块处于非活动状态，将子模块方法 push 到对应方法队列中
        if (!$this.pvt_subModuleMethodQueue[destRefId]) {
          $this.pvt_subModuleMethodQueue[destRefId] = {
            paraStatus     : [],
            srcRef         : [],
            callBack       : [],
            methodName     : [],
            param          : [],
            successCallBack: [],
            errorCallBack  : [],
          }
        }
        destParaStatus = $this.getParaStatus(destRefId);
        destQueue = $this.pvt_subModuleMethodQueue[destRefId];
        destQueue.paraStatus.push(destParaStatus);
        destQueue.srcRef.push(srcRefId);
        destQueue.callBack.push(null);
        destQueue.methodName.push(methodName);
        destQueue.param.push(arrParam);
        destQueue.successCallBack.push(successCallBack);
        destQueue.errorCallBack.push(errorCallBack);

        // 如果存在回调函数则通过失败回调返回
        if (successCallBack && errorCallBack) {
          successCallBack(null); // fixme: error message
        }
        return;

      case 'methodIsCallBack':
        // 要执行的方法是否为push到队列中的回调函数
        if (callBack) {
          para.nStep = 'callMethod_isCallBack';
        } else {
          para.nStep = 'methodHasCallBack';
        }
        break;

      case 'methodHasCallBack':
        // 要执行的方法参数中是否存在函数，如果有，则将重构的回调函数代替原回调函数
        if (successCallBack && errorCallBack) {
          args = args.concat(arrParam, scs, err);
          para.nStep = 'callMethod_hasCallBack';
        } else {
          para.nStep = 'callMethod_noCallBack';
        }
        break;
      case 'callMethod_isCallBack':
        // callBack(arrParam[0]);
        return;
      case 'callMethod_hasCallBack':
        if (destRefId) {
            if(Array.isArray($this.$refs[destRefId])) {
                for(let i = 0; i < $this.$refs[destRefId].length; i++) {
                    $this.$refs[destRefId][i][methodName].apply($this.$refs[destRefId][i], args);
                }
            } else {
                $this.$refs[destRefId][methodName].apply($this.$refs[destRefId], args);
            }
            // $this.$refs[destRefId][methodName].apply($this.$refs[destRefId], args);
        } else {
          $this[methodName].apply($this, args);
        }
        return;
      case 'callMethod_noCallBack':
        if (destRefId) {
          $this.$refs[destRefId][methodName].apply($this.$refs[destRefId], arrParam);
        } else {
          $this[methodName].apply($this, arrParam);
        }
        return;
    }
  }
};


// 【非公开】子模块激活时会调用这个函数，响应后会重新执行对应ref的方法队列中的方法
libSys.subModuleActivatedEvent = function (ref) {
  var $this = this;
  $this.reCallMethod(ref, function () {

  }, function () {

  });
};

libSys.reCallMethod = function (ref, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var fnname = 'libSys.prototype.reCallMethod';
  // $this.debugFlag_szl = true;

  if (successCallBack !== null) {
    var p = {};
    p.successCallBack = successCallBack;
    p.errorCallBack = errorCallBack;
    p.nStep = 0;
    errorCallBack = p;
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    if ($this.debugFlag_szl) {
      console.log('【SZL】' + fnname + ': para.nStep = ' + para.nStep);
    }
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
      case 'init':
        para.currentParaStatus = $this.getParaStatus(ref);
        para.queue = $this.pvt_subModuleMethodQueue[ref];
        // console.log(ref, 'before remain:', JSON.stringify($this.pvt_subModuleMethodQueue[ref], null, 4));
        para.remain = {};
        para.remain.paraStatus = [];
        para.remain.srcRef = [];
        para.remain.callBack = [];
        para.remain.methodName = [];
        para.remain.param = [];
        para.remain.successCallBack = [];
        para.remain.errorCallBack = [];
        if (para.queue) {
          para.i = 0;
          para.nStep = 'paraStatus';
        } else {
          $this.pvt_subModuleMethodQueue[ref] = para.remain;
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'paraStatus':
        if (para.i === para.queue.methodName.length) {
          $this.pvt_subModuleMethodQueue[ref] = para.remain;
          // console.log(ref, 'after remain:', JSON.stringify($this.pvt_subModuleMethodQueue[ref], null, 4));
          para.nStep = 'end';
          dbFlag += 1;
          break;
        }
        if (para.currentParaStatus
          && para.queue.paraStatus[para.i]
          && $this.$lodash.isEqual(para.currentParaStatus, para.queue.paraStatus[para.i])) {
          para.nStep = 'hasCallBack';
        } else {
          para.remain.paraStatus.push(para.queue.paraStatus[para.i]);
          para.remain.srcRef.push(para.queue.srcRef[para.i]);
          para.remain.callBack.push(para.queue.callBack[para.i]);
          para.remain.methodName.push(para.queue.methodName[para.i]);
          para.remain.param.push(para.queue.param[para.i]);
          para.remain.successCallBack.push(para.queue.successCallBack[para.i]);
          para.remain.errorCallBack.push(para.queue.errorCallBack[para.i]);
          para.i += 1;
        }
        dbFlag += 1;
        break;
      case 'hasCallBack':
        if (para.queue.successCallBack[para.i] && para.queue.errorCallBack[para.i]) {
          para.nStep = 'reCall';
        } else {
          $this.callSpecifiedMethod(para.queue.srcRef[para.i],
            ref,
            para.queue.callBack[para.i],
            para.queue.methodName[para.i],
            para.queue.param[para.i],
            para.queue.successCallBack[para.i],
            para.queue.errorCallBack[para.i]);
          para.i += 1;
          para.nStep = 'paraStatus';
        }
        dbFlag += 1;
        break;
      case 'reCall':
        $this.callSpecifiedMethod(para.queue.srcRef[para.i],
          ref,
          para.queue.callBack[para.i],
          para.queue.methodName[para.i],
          para.queue.param[para.i],
          function () {
            // var scb = para.queue.successCallBack[para.i];
            para.nStep = 'paraStatus';
            para.i += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.reCallMethod(ref, successCallBack, errorCallBack);
            }
          }, para.queue.errorCallBack[para.i]);
        break;
      case 'end':
        para.successCallBack('success');
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};


libSys.setExpressionVariable = function (data, successCallBack, errorCallBack) {
  var $this = this;
  if (typeof errorCallBack === 'undefined'
    && Object.prototype.toString.call(data) === '[object Function]') {
    errorCallBack = successCallBack;
    successCallBack = data;
    data = {};
  }

  if (Object.prototype.toString.call(data) === '[object Object]') {
    for (var key in data) {
      if (data.hasOwnProperty(key) && key in $this) {
        if (Object.prototype.toString.call(data[key]) === '[object Object]') {
          $this[key] = Object.assign({}, data[key]);
        } else if (Object.prototype.toString.call(data[key]) === '[object Array]') {
          $this[key] = data[key].slice(0);
        } else {
          $this[key] = data[key];
        }
      }
    }
    $this.$nextTick(function () {
      successCallBack();
    });
  } else {
    console.log('参数类型错误！')
  }

};


libSys.emitEvent = function (eventName, data, successCallBack, errorCallBack) {
  var $this = this;
  var sData = {
    $id: new Date().getTime(),
  };
  var d = Object.assign(sData, data);
  $this.$root.eventBus.$emit(eventName, d);
  successCallBack(sData.$id);

};

libSys.onEvent = function (eventName, successCallBack, errorCallBack) {
  var $this = this;
  $this.$root.eventBus.$on(eventName, function (data) {
    successCallBack(data);
  });
};

libSys.getParaStatus = function (refId) {
  var $this = this;
  var vesselPara = '';
  if (!$this.pvt_vesselRef) return null;
  $this.pvt_vesselRef.ref.forEach(function (r, i) {
    if (r === refId) {
      vesselPara = 'pvt_' + $this.pvt_vesselRef.vesselId[i] + '_para';
    }
  });

  var param = JSON.parse(JSON.stringify($this[vesselPara][refId].para));
  delete param.$api;
  delete param.$isShow;
  delete param.$isMounted;
  return param;
};


export default libSys;
