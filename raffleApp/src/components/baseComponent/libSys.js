// 【接口方法】定义接口方法，向父发送事件

let libSys = {};
libSys.debugFlag_szl = true;

// libSys.showVessel = function (vesselName, option){
//   let $this = this;
//   if (vesselName in $this.pvt_isWinShow) $this.pvt_isWinShow[vesselName] = option;
// };

// 【公开】显示隐藏指定子模块
libSys.showVessel = function (vesselName, option, successCallBack, errorCallBack) {
  let $this = this;

  if (Object.prototype.toString.call(vesselName) === '[object String]') vesselName = [vesselName];

  if (Object.prototype.toString.call(vesselName) === '[object Array]') {
    vesselName.forEach(function (vn) {
      if (vn in $this.pvt_isWinShow) $this.pvt_isWinShow[vn] = option;
    });
  } else {
    console.log('参数类型错误！');
    errorCallBack();
    return;
  }
  $this.$nextTick(() => successCallBack());
};


// 【公开】显示隐藏指定子模块
libSys.showVessel = function (vesselName, option, successCallBack, errorCallBack) {
  let $this = this;

  if (Object.prototype.toString.call(vesselName) === '[object String]') vesselName = [vesselName];

  if (Object.prototype.toString.call(vesselName) === '[object Array]') {
    vesselName.forEach(function (vn) {
      if (vn in $this.pvt_win.isShow) $this.pvt_win.isShow[vn] = option;
    });
  } else {
    console.log('参数类型错误！');
    errorCallBack();
    return;
  }
  $this.$nextTick(() => successCallBack());
};



// 动态设置视窗样式
libSys.setVesselStyle = function (vesselName, cssObject, successCallBack, errorCallBack){
  let $this = this;
  let arrSettableAttr = ['height']; // 限定可设置的css属性
  for(let attrib in cssObject){
    if (cssObject.hasOwnProperty(attrib) && arrSettableAttr.includes(attrib)) {
      console.log(`属性 ${attrib} 不允许设置！`);
      let error = {
        code:'',
        message:`属性 ${attrib} 不允许设置！`,
      };
      errorCallBack(error);
      return;
    }
  }
  if (vesselName in $this.pvt_win.style) $this.pvt_win.style[vesselName] = cssObject;
  $this.$nextTick(() => successCallBack());
};


// 动态设置视窗样式
libSys.setVesselChecked = function (vesselName, option, successCallBack, errorCallBack){
  let $this = this;

  if (Object.prototype.toString.call(vesselName) === '[object String]') vesselName = [vesselName];

  if (Object.prototype.toString.call(vesselName) === '[object Array]') {
    vesselName.forEach(function (vn) {
      if (vn in $this.pvt_win.isChecked) $this.pvt_win.isChecked[vn] = option;
    });
  } else {
    console.log('参数类型错误！');
    errorCallBack();
    return;
  }

  $this.$nextTick(() => successCallBack());
};






// 【公开】显示隐藏指定子模块
libSys.showSubModule = function (refId, option, successCallBack, errorCallBack) {
  let $this = this;
  let vesselName = null;

  if (Object.prototype.toString.call(refId) === '[object String]') refId = [refId];

  if (Object.prototype.toString.call(refId) === '[object Array]') {
    refId.forEach(function (rId) {
      // 查找destRefId对应的容器
      $this.pvt_subModuleMap.subModule.forEach((r, i) => {
        if (r === rId) vesselName = $this.pvt_subModuleMap.vessel[i];
      });
      if (vesselName) $this.pvt_isShow[vesselName] = option ? rId : null;
    });
  } else {
    console.log('参数类型错误！');
    errorCallBack();
    return;
  }
  $this.$nextTick(() => successCallBack());
};

// 【接口方法】定义接口方法，隐藏自身对话框模块
libSys.hideSelfModule = function (refId, successCallBack, errorCallBack) {
  let $this = this;
  $this.$parent.showSubModule(refId, false, successCallBack, errorCallBack);
};

 // passingData
libSys.forceUpdateData = function (callBack) {
  let $this = this;
  $this.$nextTick(() => callBack());
};
/**
 *
 * @param refId {string} - 子模块名称
 * @param methodName {string} - 方法名称
 * @param arrParas {Array.<array>} - 方法各次循环的参数
 * @param successCallBack
 * @param errorCallBack
 */
libSys.callLoopModuleMethod = function (refId, methodName, arrParas, successCallBack, errorCallBack) {
  let $this = this;
  let para;
  let dbFlag;
  let fnname = 'callLoopModuleMethod';

  if (successCallBack !== null) {
    let obj = {};
    obj.nStep = 0;
    obj.successCallBack = successCallBack;
    obj.errorCallBack = errorCallBack;

    errorCallBack = obj;
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
      case 'nextTick':
        para.result = [];
        $this.pvt_loopLength = arrParas.length;
        $this.$nextTick(function () {
          $this.pvt_initSysData();
          if (arrParas.length > 0) {
            para.i = 0;
            if (!arrParas[para.i]) {
              para.nStep = 'loopEnd';
            } else if (arrParas[para.i].length >= 2) {
              para.nStep = 'hasCallBack';
            } else {
              para.nStep = 'startSubModule_noCallBack';
            }
          } else {
            para.nStep = 'end';
          }
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.callLoopModuleMethod(refId, methodName, arrParas, successCallBack, errorCallBack);
          }
        });
        break;
      case 'hasCallBack':
        let lastPara = arrParas[para.i].slice(-2);
        if (typeof lastPara[0] === 'function' && typeof lastPara[0] === 'function') {
          para.nStep = 'startSubModule_hasCallBack';
        } else {
          para.nStep = 'startSubModule_noCallBack';
        }
        dbFlag += 1;
        break;
      case 'startSubModule_hasCallBack':
        let sc = function (result) {
          para.result.push(result);
          para.nStep = 'loopEnd';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.callLoopModuleMethod(refId, methodName, arrParas, successCallBack, errorCallBack);
          }
        };
        let p = arrParas[para.i].slice(0, -2).concat([sc, para.errorCallBack]);
        $this.sm[refId][para.i][methodName](...p);
        break;
      case 'startSubModule_noCallBack':
        $this.sm[refId][para.i][methodName](...arrParas[para.i]);
        para.nStep = 'loopEnd';
        dbFlag += 1;
        break;
      case 'loopEnd':
        para.i += 1;
        if (para.i === arrParas.length) {
          para.nStep = 'end';
        } else {
          para.nStep = 'hasCallBack';
        }
        dbFlag += 1;
        break;
      case 'end':
        para.successCallBack(para.result);
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};


libSys.pvt_initSysData = function () {
  let $this = this;
  let directCallSubMethod = true;
  if (directCallSubMethod) {
    $this.sm = $this.$refs;
  } else {
    // 重写单个ref下所有方法，返回对应的新对象
    let init = function (r) {
      let obj = {};
      for (let m in r) {
        if (r.hasOwnProperty(m)) {
          if (typeof r[m] === 'function') {
            obj[m] = function () {
              let arg = arguments;
              // $this.$nextTick(() => {
              r[m](...arg);
              // });
            };
          }
        }
      }
      return obj;
    };


    let refs = $this.$refs;
    // 对应 $refs
    let subModule = {};
    for (let sm in refs) {
      if (refs.hasOwnProperty(sm)) {
        if (Object.prototype.toString.call(refs[sm]) === '[object Array]') {
          subModule[sm] = [];
          refs[sm].forEach(v => subModule[sm].push(init(v)));
        } else {
          subModule[sm] = {};
          subModule[sm] = init(refs[sm]);
        }
      }
    }
    $this.sm = subModule;
  }


  if (!$this.ep) {
    let eventPort = {};
    $this.pvt_eventPortInput.forEach(function (ep) {
      eventPort[ep] = function () {
        let arg = [...arguments];
        let listener = $this.$parent[$this.refId + '_' + ep];
        if (listener && typeof listener === 'function') {
          // $this.$nextTick(() => {
          listener.apply($this.$parent, arg);
          // });
        }
      }
    });
    $this.ep = eventPort;
  }

};

libSys.pvt_createForData = function (data) {
  let paraLength = 0;
  let forData = {};
  for (let i in data) {
    if (data.hasOwnProperty(i)) {
      if (Object.keys(data[i].para).length > 0) {
        paraLength = data[i].para[Object.keys(data[i].para)[0]].length;
      } else if (Object.keys(data[i].attr).length > 0) {
        paraLength = data[i].para[Object.keys(data[i].attr)[0]].length;
      }
      if (paraLength !== 0) {
        forData[i] = [];
        let j = 0;
        while (j < paraLength) {
          forData[i].push({
            para: {},
            attr: {}
          });
          for (let m in data[i].para) {
            if (data[i].para.hasOwnProperty(m)) {
              forData[i][forData[i].length - 1].para[m] = data[i].para[m][j];
            }
          }
          for (let n in data[i].attr) {
            if (data[i].attr.hasOwnProperty(n)) {
              forData[i][forData[i].length - 1].attr[n] = data[i].attr[n][j];
            }
          }
          j++;
        }
      } else {
        // console.error('此模块不可循环');
        console.log('此模块不可循环');
      }
    }
  }
  return forData
};


export default libSys;
