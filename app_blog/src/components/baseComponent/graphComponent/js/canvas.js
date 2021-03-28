/* eslint-disable */

function CGraph() {
};

/**
 * @callback successCallBack_newCanvas
 * @param result {string[]} - 画布 id，如：['1']
 */

/**
 * 新建画布
 * @param templateId {string} - 画布模板 Id
 * @param parentId {string} - 父画布 Id
 * @param title {string} - 画布标题
 * @param origin {object|field-origin} - 画布原点坐标，数据结构同 origin 字段。
 * @param origin.left {string} - 绝对定位相对父画布左边边框的偏移，值为带'px'的坐标值。
 * @param origin.top {string} - 绝对定位相对父画布上边边框的偏移，值为带'px'的坐标值。
 * @param origin.gridArea {array} 父画布为网格布局时，作为网格项在画布中的位置信息，数组内容为 [rowStart, rowEnd, columnStart,
 * columnEnd]
 * @param size {object|field-size} - 画布尺寸，数据结构同 size 字段。
 * @param size.width {string} - 宽度，父画布为 gird 布局时，值为CSS支持的宽度值。否则，只能是单位为 px 的值或不带单位的数值，其他形式值无法判断兄弟画布是否重叠。
 * @param size.height {string} - 高度，父画布为 gird 布局时，值为CSS支持的宽度值。否则，只能是单位为 px 的值或不带单位的数值，其他形式值无法判断兄弟画布是否重叠。
 * @param attrib {object|field-canvas-attrib} - 画布属性，数据结构同 attrib 字段。
 * @param attrib.draggable {boolean} - 是否可拖拽和删除
 * @param attrib.titleSettable {boolean} - 是否可设置标题。标题为空，则不显示标题区域。
 * @param attrib.resizable {boolean} - 是否可改变尺寸。
 * @param successCallBack {successCallBack_newCanvas} - 返回画布 Id
 * @param errorCallBack {errorCallBack} - 返回错误信息
 * @example <caption>示例</caption>
 * var templateId = '1'; // 必填项
 * var parentId = '1'; // 必填项
 * var title = '根画布';
 * var origin = {
 *      left: '',
 *      top: '',
 *      gridArea:[1, 1, 2, 3],
 *    };
 * var size = '';
 * var attrib = '';
 *
 * this.newCanvas(templateId, parentId, title, origin, size, attrib,
 *   function(result){
 *
 *   },
 *   function(error){
 *
 *   });
 */
CGraph.prototype.newCanvas = function (templateId, parentId, title, origin, size, attrib, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var fnname = "CGraph.prototype.newCanvas";

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    if ($this.debugFlag_szl) {
      console.log(fnname + ': para.nStep = ' + para.nStep);
    }
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
      case 'display':
        $this.vue.isShowDefault = false;
        if ($('#' + $this.wrapId).is(':visible')) {
          para.nStep = 'init';
        } else {
          para.nStep = 'successEnd';
        }
        dbFlag += 1;
        break;
      case 'init':
        para.dbData = {};
        para.error = {};
        // para.error.code = $this.error.paramError;
        para.error.message = '';
        para.defaultData = $this.config.defaultCanvasData;
        para.nStep = 'getModuleData';
        dbFlag += 1;
        break;
      case 'getModuleData':
        objectName = 'canvasModule';
        dbData = {};
        dbData.id = [templateId];
        $this.api.recordRead(objectName, dbData,
          function () {
            if (dbData.id.length === 0) {
              // para.error.code = $this.error.dataBaseError;
              para.error.message = '找不到id为 ' + templateId + ' 的记录;';
              para.nStep = 'errorEnd';
            } else {
              para.moduleData = dbData;
              para.dbData = para.moduleData;
              para.nStep = 'checkParam';
            }
            if (++dbFlag === 2) {
              $this.newCanvas(templateId, parentId, title, origin, size, attrib, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'checkParam':
        var fd = $this.mac.fd.canvas;
        var fdm = $this.mac.fd.canvasModule;
        if (para.dbData[fdm.style][0]['display'] === 'grid') {
          var gridTemplate = {};
          gridTemplate.row = para.dbData[fdm.style][0]['grid-template-rows'].split(' ');
          gridTemplate.column = para.dbData[fdm.style][0]['grid-template-columns'].split(' ');
          para.dbData[fd.gridTemplate] = [gridTemplate];
        }

        para.dbData[fd.origin] = [origin];
        para.dbData[fd.size] = [!!size ? size : para.dbData[fdm.size][0]];
        para.dbData[fd.attrib] = [!!attrib ? attrib : para.dbData[fdm.attrib][0]];
        if (title === $this.mac.strNull || title === null || title === undefined) {
          para.dbData[fd.title] = para.dbData[fdm.canvasName];
        } else {
          para.dbData[fd.title] = [title];
        }
        if (parentId === $this.mac.strNull) {
          para.nStep = 'newCanvas';
        } else {
          /*
          if (!$this.isOverlapping(parentId, para.dbData.origin, para.dbData.size.width, para.dbData.size.height)) {
            para.nStep = 'newCanvas';
          } else {
            para.error.message = '画布与其他画布重叠';
            para.nStep = 'errorEnd'
          }
         */
        }
        para.nStep = 'newCanvas'; // todo: debug
        dbFlag += 1;
        break;
      case 'newCanvas':
        var fd = $this.mac.fd.canvasModule;
        objectName = 'canvas';
        dbData = para.dbData;
        delete dbData.id;
        delete dbData[fd.canvasName];
        parentRecord = parentId;
        $this.api.recordNew(objectName, parentRecord, dbData,
          function () {
            para.canvasID = dbData[$this.mac.fd.id][0];
            para.nStep = 'call_showCanvasView';
            if (++dbFlag === 2) {
              $this.newCanvas(templateId, parentId, title, origin, size, attrib, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'call_showCanvasView':
        $this.showSelfCanvasView(parentId, para.canvasID,
          function () {
            para.nStep = 'successEnd';
            if (++dbFlag === 2) {
              $this.newCanvas(templateId, parentId, title, origin, size, attrib, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'successEnd':
        para.successCallBack([para.canvasID]);
        return;
      case 'errorEnd':
        para.errorCallBack(para.error);
        return;
    }
    if (++dbFlag === 1) return;
  }
};


/**
 * @callback successCallBack_moveCanvasTo
 * @param result {string[]} - 画布 id，如：['1']
 */

/**
 * 移动指定画布到当前父画布内指定位置或移动到其他画布里时调用
 * @param canvasId {string} - 画布 Id
 * @param parentId {string} - 父画布 Id
 * @param origin {object|field-origin} - 画布原点坐标，数据结构同 origin 字段。
 * @param origin.left {string} - 绝对定位相对父画布左边边框的偏移
 * @param origin.top {string} - 绝对定位相对父画布上边边框的偏移
 * @param origin.gridArea {array} 父画布为网格布局时，作为网格项在画布中的位置信息，数组内容为 [rowStart, rowEnd, columnStart,
 * columnEnd]
 * @param successCallBack {successCallBack_moveCanvasTo} - 返回画布 Id
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.moveCanvasTo = function (canvasId, parentId, origin, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.moveCanvasTo";

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    if ($this.debugFlag_szl) {
      console.log(fnname + ': para.nStep = ' + para.nStep);
    }
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
      case 'getOriginCanvas':
        objectName = 'canvas';
        $this.api.getParentRecord(objectName, [canvasId],
          function (result) {
            para.originParent = result[0];
            if (para.originParent === parentId) {
              para.nStep = 'canvasMoveToOriginCanvas'
            } else {
              para.nStep = 'canvasMoveToNewCanvas'
            }
            if (++dbFlag === 2) {
              $this.moveCanvasTo(canvasId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'canvasMoveToOriginCanvas':
        $this.canvasMoveToOriginCanvas(canvasId, origin,
          function () {
            para.result = canvasId;
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.moveCanvasTo(canvasId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'canvasMoveToNewCanvas':
        $this.canvasMoveToNewCanvas(canvasId, parentId, origin,
          function (result) {
            para.result = result;
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.moveCanvasTo(canvasId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'errorEnd':
        para.errorCallBack(para.error);
        return;
      case 'end':
        para.successCallBack([para.result]);
        return
    }
    if (++dbFlag === 1) {
      return
    }
  }
};


CGraph.prototype.canvasMoveToOriginCanvas = function (canvasId, origin, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var data;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.canvasMoveToOriginCanvas";

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    if ($this.debugFlag_szl) {
      console.log(fnname + ': para.nStep = ' + para.nStep);
    }
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
      case 'modifyCanvas':
        objectName = 'canvas';
        data = {};
        data[$this.mac.fd.id] = [canvasId];
        data[$this.mac.fd.canvas.origin] = [origin];
        $this.api.recordModify(objectName, data,
          function () {
            para.nStep = 'showCanvas';
            if (++dbFlag === 2) {
              $this.canvasMoveToOriginCanvas(canvasId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'showCanvas':
        $this.deleteCanvasView(canvasId);
        $this.showCanvas(canvasId,
          function () {
            para.nStep = 'refreshLine';
            if (++dbFlag === 2) {
              $this.canvasMoveToOriginCanvas(canvasId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'refreshLine':
        var arrLineId = $this.getLineIdOfFactor($this.config.mac.type.canvas, canvasId).all;
        $this.refreshLine(arrLineId, function () {
          para.nStep = 'end';
          if (++dbFlag === 2) {
            $this.canvasMoveToOriginCanvas(canvasId, origin, successCallBack, errorCallBack)
          }
        }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack();
        return;
    }
    if (++dbFlag === 1) {
      return
    }
  }
};


CGraph.prototype.canvasMoveToNewCanvas = function (canvasId, parentId, origin, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var data;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.canvasMoveToNewCanvas";

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    if ($this.debugFlag_szl) {
      console.log(fnname + ': para.nStep = ' + para.nStep);
    }
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
        objectName = 'canvas';
        $this.api.moveSubObjectRecord(objectName, [canvasId], [parentId],
          function (result) {
            para.changeData = result;
            para.newCanvasId = result.canvas.newRecord[0];

            para.nStep = 'updateDotData';
            if (++dbFlag === 2) {
              $this.canvasMoveToNewCanvas(canvasId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'updateDotData':
        $this.deleteCanvasView(canvasId);
        $this.updateDotData(para.changeData,
          function () {
            para.nStep = 'modifyNewCanvasOrigin';
            if (++dbFlag === 2) {
              $this.canvasMoveToNewCanvas(canvasId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'modifyNewCanvasOrigin':
        objectName = 'canvas';
        data = {};
        data[$this.mac.fd.id] = [para.newCanvasId];
        data[$this.mac.fd.canvas.origin] = [origin];
        $this.api.recordModify(objectName, data,
          function () {
            para.nStep = 'showCanvasView';
            para.i = 0;
            if (++dbFlag === 2) {
              $this.canvasMoveToNewCanvas(canvasId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'showCanvasView':
        $this.showCanvas(para.newCanvasId,
          function () {
            para.nStep = 'refreshLine';
            if (++dbFlag === 2) {
              $this.canvasMoveToNewCanvas(canvasId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'refreshLine':
        var arrLineId = $this.getLineIdOfFactor($this.config.mac.type.canvas, para.newCanvasId).all;
        $this.refreshLine(arrLineId, function () {
          para.nStep = 'end';
          if (++dbFlag === 2) {
            $this.canvasMoveToNewCanvas(canvasId, parentId, origin, successCallBack, errorCallBack)
          }
        }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack(para.newCanvasId);
        return
    }
    if (++dbFlag === 1) {
      return
    }
  }
};


/**
 * 放大根画布
 */
CGraph.prototype.zoomInRootCanvas = function () {
  var $this = this;
  $this.root[$this.rootCanvasId].zoom *= 1.1;
  var zoom = $this.root[$this.rootCanvasId].zoom;

  var $root = $($this.jqIdPrefix.canvas + $this.rootCanvasId)[0];
  var boundingRect = $root.getBoundingClientRect();
  if (!$this.originalRect) {
    $this.originalRect = boundingRect;
  }
  var rect = $this.originalRect;
  var transformOriginX = (rect.x + rect.width / 2 - boundingRect.x) / boundingRect.width;
  var transformOriginY = (rect.y + rect.height / 2 - boundingRect.y) / boundingRect.height;
  var s = 'scale(' + zoom + ')';
  var oString = (transformOriginX * 100) + '% ' + (transformOriginY * 100) + '%';
  ['webkit', 'moz', 'ms', 'o'].forEach(function (value) {
    $root.style[value + 'Transform'] = s;
    $root.style[value + 'TransformOrigin'] = oString;
  });
  $root.style['Transform'] = s;
  $root.style['TransformOrigin'] = oString;
  $this.instance.setZoom(zoom);
};

/**
 * 缩小根画布
 */
CGraph.prototype.zoomOutRootCanvas = function () {
  var $this = this;
  var $root = $($this.jqIdPrefix.canvas + $this.rootCanvasId)[0];
  var boundingRect = $root.getBoundingClientRect();
  if(boundingRect.width < 100 || boundingRect.height < 100) return;
  $this.root[$this.rootCanvasId].zoom *= 0.9;
  var zoom = $this.root[$this.rootCanvasId].zoom;
  if (!$this.originalRect) {
    $this.originalRect = boundingRect;
  }
  var rect = $this.originalRect;
  var transformOriginX = (rect.x + rect.width / 2 - boundingRect.x) / boundingRect.width;
  var transformOriginY = (rect.y + rect.height / 2 - boundingRect.y) / boundingRect.height;
  var s = 'scale(' + zoom + ')';
  var oString = (transformOriginX * 100) + '% ' + (transformOriginY * 100) + '%';
  ['webkit', 'moz', 'ms', 'o'].forEach(function (value) {
    $root.style[value + 'Transform'] = s;
    $root.style[value + 'TransformOrigin'] = oString;
  });
  $root.style['Transform'] = s;
  $root.style['TransformOrigin'] = oString;
  $this.instance.setZoom(zoom);
};

/**
 * 根画布填充满
 */
CGraph.prototype.zoomFullRootCanvas = function () {
  var $this = this;
  var $wrap = $('#' + $this.wrapId)[0];
  var wrapRect = $wrap.getBoundingClientRect();
  // $this.zoom *= 0.9;

  var $root = $($this.jqIdPrefix.canvas + $this.rootCanvasId)[0];
  var boundingRect = $root.getBoundingClientRect();
  $this.root[$this.rootCanvasId].zoom = boundingRect.width / wrapRect.width;
  if ($this.originalRect === null) {
    $this.originalRect = boundingRect;
  }
  var zoom = $this.root[$this.rootCanvasId].zoom;
  var rect = $this.originalRect;
  var transformOriginX = (rect.x + rect.width / 2 - boundingRect.x) / boundingRect.width;
  var transformOriginY = (rect.y + rect.height / 2 - boundingRect.y) / boundingRect.height;
  var s = 'scale(' + zoom + ')';
  var oString = (transformOriginX * 100) + '% ' + (transformOriginY * 100) + '%';
  ['webkit', 'moz', 'ms', 'o'].forEach(function (value) {
    $root.style[value + 'Transform'] = s;
    $root.style[value + 'TransformOrigin'] = oString;
  });
  $root.style['Transform'] = s;
  $root.style['TransformOrigin'] = oString;
  $this.instance.setZoom(zoom);
};


CGraph.prototype.adjustCanvas = function (canvasId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var data;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = "CGraph.prototype.adjustCanvas";

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    if ($this.debugFlag_szl) {
      console.log(fnname + ': para.nStep = ' + para.nStep);
    }
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
        //初始化数据
        // para.subId = [];
        para.subSize = [];
        para.subOrigin = [];
        para.arrSubHorizon = [];
        para.arrSubVertical = [];
        para.nStep = 'readCanvas';
        dbFlag++;
        break;
      case 'readCanvas':
        objectName = 'canvas';
        data = {};
        data[$this.mac.fd.id] = [canvasId];
        data[$this.mac.fd.canvas.size] = [];
        data[$this.mac.fd.canvas.gap] = [];
        data[$this.mac.fd.canvas.origin] = [];
        $this.api.recordRead(objectName, data,
          function () {
            para.cSize = data[$this.mac.fd.canvas.size][0];
            para.cGap = data[$this.mac.fd.canvas.gap][0];
            para.cOrigin = data[$this.mac.fd.canvas.origin][0];
            para.nStep = 'getElement';
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getElement':
        objectName = 'element';
        parentRecord = [canvasId];
        condition = null;
        data = {};
        // data[$this.mac.fd.id] = [];
        data[$this.mac.fd.element.size] = [];
        data[$this.mac.fd.element.origin] = [];
        $this.api.recordQuery(objectName, parentRecord, condition, data,
          function () {
            // para.subId = para.subId.concat(data[$this.mac.fd.id]);
            para.subSize = para.subSize.concat(data[$this.mac.fd.element.size]);
            para.subOrigin = para.subOrigin.concat(data[$this.mac.fd.element.origin]);
            para.nStep = 'getGroup';
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getGroup':
        objectName = 'elementGroup';
        parentRecord = [canvasId];
        condition = null;
        data = {};
        // data[$this.mac.fd.id] = [];
        data[$this.mac.fd.elementGroup.size] = [];
        data[$this.mac.fd.elementGroup.origin] = [];
        $this.api.recordQuery(objectName, parentRecord, condition, data,
          function () {
            para.subSize = para.subSize.concat(data[$this.mac.fd.elementGroup.size]);
            para.subOrigin = para.subOrigin.concat(data[$this.mac.fd.elementGroup.origin]);
            para.nStep = 'getSubCanvas';
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getSubCanvas':
        objectName = 'canvas';
        parentRecord = [canvasId];
        condition = null;
        data = {};
        data[$this.mac.fd.canvas.size] = [];
        data[$this.mac.fd.canvas.origin] = [];
        $this.api.recordQuery(objectName, parentRecord, condition, data,
          function () {
            para.subSize = para.subSize.concat(data[$this.mac.fd.canvas.size]);
            para.subOrigin = para.subOrigin.concat(data[$this.mac.fd.canvas.origin]);
            para.nStep = 'getMaxHorizonAndVertical';
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getMaxHorizonAndVertical':
        for (var i = 0; i < para.subSize.length; i++) {
          para.arrSubHorizon[i] = parseInt(para.subSize[i].width, 10) + parseInt(para.subOrigin[i].left, 10);
          para.arrSubVertical[i] = parseInt(para.subSize[i].height, 10) + parseInt(para.subOrigin[i].top, 10);
        }
        para.maxHorizon = Math.max.apply(null, para.arrSubHorizon);
        para.maxVertical = Math.max.apply(null, para.arrSubVertical);
        if (para.maxHorizon > (para.cSize.width - para.cGap.pl) ||
          para.maxVertical > (para.cSize.height - para.cGap.pb)) {
          para.nSize = {};
          if (para.maxHorizon > (para.cSize.width - para.cGap.pl)) {
            para.nSize.width = para.maxHorizon + para.cGap.pl;
          } else {
            para.nSize.width = para.cSize.width;
          }
          if (para.maxVertical > (para.cSize.height - para.cGap.pb)) {
            para.nSize.height = para.maxVertical + para.cGap.pb;
          } else {
            para.nSize.height = para.cSize.height;
          }
          para.nStep = 'modifyCurrentSize';
        } else {
          para.nStep = 'end';
        }
        dbFlag++;
        break;
      case 'modifyCurrentSize':
        objectName = 'canvas';
        data = {};
        data[$this.mac.fd.id] = [canvasId];
        data[$this.mac.fd.canvas.size] = [para.nSize];
        $this.api.recordModify(objectName, data,
          function () {
            //界面层调整画布大小
            $($this.jqIdPrefix.canvas + canvasId).css(para.nSize);
            $this.instance.repaintEverything();
            para.oSize = para.cSize;
            para.cSize = para.nSize;
            para.nStep = 'getCanvasDot';
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getCanvasDot':
        objectName = 'canvasDot';
        parentRecord = [canvasId];
        condition = null;
        data = {};
        data[$this.mac.fd.id] = [];
        $this.api.recordQuery(objectName, parentRecord, condition, data,
          function () {
            if (data[$this.mac.fd.id].length === 0) {
              para.nStep = 'getParentCanvas';
            } else {
              para.arrDot = data[$this.mac.fd.id];
              para.nStep = 'loopDot';
              para.i = 0;
            }
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'loopDot':
        if (para.i === para.arrDot.length) {
          //todo:重新显示连线
          para.nStep = 'getParentCanvas';
          dbFlag++;
          break;
        }
        var $dot = $($this.jqIdPrefix.dot + para.arrDot[para.i] + '.canvasDot');
        var left = parseInt($dot.css('left').replace('px', ''), 10);
        var top = parseInt($dot.css('top').replace('px', ''), 10);
        var coord = {
          left: left,
          top : top
        };
        objectName = 'canvasDot';
        data = {};
        data[$this.mac.fd.id] = [para.arrDot[para.i]];
        data[$this.mac.fd.canvasDot.coord] = [coord];
        $this.api.recordModify(objectName, data,
          function () {
            para.i++;
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getParentCanvas':
        objectName = 'canvas';
        $this.api.getParentRecord(objectName, [canvasId],
          function (result) {
            if (result[0] === $this.mac.strNull) {
              para.nStep = 'end';
            } else {
              para.pCanvas = result[0];
              para.nStep = 'getBroCanvas';
            }
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getBroCanvas':
        objectName = 'canvas';
        parentRecord = [para.pCanvas];
        condition = $this.mac.fd.id + '!=' + canvasId;
        data = {};
        data[$this.mac.fd.id] = [];
        data[$this.mac.fd.canvas.size] = [];
        data[$this.mac.fd.canvas.origin] = [];
        data[$this.mac.fd.canvas.gap] = [];
        $this.api.recordQuery(objectName, parentRecord, condition, data,
          function () {
            if (data[$this.mac.fd.id].length === 0) {
              para.nStep = 'pCanvasAdjust';
            } else {
              para.broCanvas = data[$this.mac.fd.id];
              para.broGap = data[$this.mac.fd.canvas.gap];
              para.broOrigin = data[$this.mac.fd.canvas.origin];
              para.broSize = data[$this.mac.fd.canvas.size];
              //todo:获取当前画布右侧的画布
              para.arrLeft = [];
              para.rCanvas = [];
              para.rOrigin = [];
              para.rGap = [];
              for (var i = 0; i < para.broCanvas.length; i++) {
                if (para.broOrigin[i]['left'] > para.cOrigin['left'] &&
                  para.broOrigin[i]['top'] < para.cOrigin['top'] + para.oSize['height'] &&
                  para.broOrigin[i]['top'] + para.broSize[i]['height'] > para.cOrigin['top']) {
                  para.rCanvas.push(para.broCanvas[i]);
                  para.rOrigin.push(para.broOrigin[i]);
                  para.rGap.push(para.broGap[i]);
                }
              }
              if (para.rCanvas.length === 0) {
                para.nStep = 'checkBroTop';
              } else {
                for (i = 0; i < para.rCanvas.length; i++) {
                  para.arrLeft[i] = parseInt(para.rOrigin[i]['left'], 10);
                }
                para.arrSortLeft = para.arrLeft.concat().sort(
                  function (a, b) {
                    return a - b;
                  });
                para.arrSortLeft.every(function (value, i) {
                  if (value > para.cOrigin.left) {
                    para.leftIndex = i;
                    return false;
                  }
                });
                var nLeft = para.arrSortLeft[para.leftIndex];
                var leftIndex = para.arrLeft.indexOf(nLeft);
                var ml = para.rGap[leftIndex]['ml'];
                if (para.cGap['mr'] > ml) {
                  ml = para.cGap['mr'];
                }
                if (para.cSize['width'] + para.cOrigin['left'] > nLeft - ml) {
                  //调整右侧的兄弟画布
                  para.nStep = 'moveRightCanvas';
                  // para.rAdd = ml - (para.cSize['width'] + para.cOrigin['left'] - nLeft);
                  para.rAdd = para.cSize['width'] + para.cOrigin['left'] + ml - nLeft;
                  para.i = 0;
                  // para.arrRightCanvas = [];
                  // para.arrRightOrigin = [];
                  // var j = 0;
                  // for (i = para.leftIndex; i < para.arrSortLeft.length; i++) {
                  //     para.arrRightCanvas[j] = para.broCanvas[para.arrLeft.indexOf(para.arrSortLeft[i])];
                  //     para.arrRightOrigin[j] = para.broOrigin[para.arrLeft.indexOf(para.arrSortLeft[i])];
                  //     j++;
                  // }
                } else {
                  para.nStep = 'checkBroTop'
                }
              }
            }
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'moveRightCanvas':
        if (para.i === para.rCanvas.length) {
          para.nStep = 'checkBroTop';
          dbFlag++;
          break;
        }
        para.origin = {
          left: para.rOrigin[para.i]['left'] + para.rAdd,
          top : para.rOrigin[para.i]['top']
        };
        // objectName = 'canvas';
        // data = {};
        // data[$this.mac.fd.id] = [para.rCanvas[para.i]];
        // data[$this.mac.fd.canvas.origin] = [para.origin];
        // $this.api.recordModify(objectName, data,
        //     function () {
        //         $($this.jqIdPrefix.canvas + para.rCanvas[para.i]).css(para.origin);
        //         para.i++;
        //         if (++dbFlag === 2) {
        //             $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
        //         }
        //     }, para.errorCallBack);
        $this.canvasMoveToOriginCanvas(para.rCanvas[para.i], para.origin,
          function () {
            para.i++;
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'checkBroTop':
        //todo:获取画布下侧的画布
        para.arrTop = [];
        para.bCanvas = [];
        para.bOrigin = [];
        para.bGap = [];
        for (var i = 0; i < para.broCanvas.length; i++) {
          if (para.broOrigin[i]['top'] > para.cOrigin['top'] &&
            para.broOrigin[i]['left'] < para.cOrigin['left'] + para.oSize['width'] &&
            para.broOrigin[i]['left'] + para.broSize[i]['width'] > para.cOrigin['left']) {
            para.bCanvas.push(para.broCanvas[i]);
            para.bOrigin.push(para.broOrigin[i]);
            para.bGap.push(para.broGap[i]);
          }
        }
        if (para.bCanvas.length === 0) {
          para.nStep = 'pCanvasAdjust';
          dbFlag++;
          break;
        }
        for (i = 0; i < para.bCanvas.length; i++) {
          para.arrTop[i] = parseInt(para.bOrigin[i]['top'], 10);
        }
        para.arrSortTop = para.arrTop.concat().sort(
          function (a, b) {
            return a - b;
          });
        para.arrSortTop.every(function (value, i) {
          if (value > para.cOrigin.top) {
            para.topIndex = i;
            return false;
          }
        });
        var nTop = para.arrSortTop[para.topIndex];
        var topIndex = para.arrTop.indexOf(nTop);
        // para.nLeftCanvas = para.broCanvas[leftIndex];
        // para.nTopCanvas = para.broCanvas[topIndex];
        var mt = para.bGap[topIndex]['mt'];
        if (para.cGap['mb'] > mt) {
          mt = para.cGap['mb'];
        }
        if (para.cSize['height'] + para.cOrigin['top'] > nTop - mt) {
          //调整下方的兄弟画布
          para.nStep = 'moveBottomCanvas';
          // para.tAdd = mt - (para.cSize['height'] + para.cOrigin['top'] - nTop);
          para.tAdd = para.cSize['height'] + para.cOrigin['top'] + mt - nTop;
          para.i = 0;
          // para.arrBottomCanvas = [];
          // para.arrBottomOrigin = [];
          // var j = 0;
          // for (var i = para.topIndex; i < para.arrSortTop.length; i++) {
          //     para.arrBottomCanvas[j] = para.broCanvas[para.arrBroTop.indexOf(para.arrSortTop[i])];
          //     para.arrBottomOrigin[j] = para.broOrigin[para.arrBroTop.indexOf(para.arrSortTop[i])];
          //     j++;
          // }
        } else {
          para.nStep = 'pCanvasAdjust';
        }
        dbFlag++;
        break;
      case 'moveBottomCanvas':
        if (para.i === para.bCanvas.length) {
          para.nStep = 'pCanvasAdjust';
          dbFlag++;
          break;
        }
        para.origin = {
          left: para.bOrigin[para.i]['left'],
          top : para.bOrigin[para.i]['top'] + para.tAdd
        };
        // objectName = 'canvas';
        // data = {};
        // data[$this.mac.fd.id] = [para.bCanvas[para.i]];
        // data[$this.mac.fd.canvas.origin] = [para.origin];
        // $this.api.recordModify(objectName, data,
        //     function () {
        //         $($this.jqIdPrefix.canvas + para.bCanvas[para.i]).css(para.origin);
        //         para.i++;
        //         if (++dbFlag === 2) {
        //             $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
        //         }
        //     }, para.errorCallBack);
        $this.canvasMoveToOriginCanvas(para.bCanvas[para.i], para.origin,
          function () {
            para.i++;
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'pCanvasAdjust':
        $this.adjustCanvas(para.pCanvas,
          function () {
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.adjustCanvas(canvasId, successCallBack, errorCallBack)
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
};


/**
 * 在网格布局中插入行
 * @param canvasId {string} 画布 id
 * @param rowNumber {string} 要插入成为第几行
 * @param height {string} 行高。可以是长度值，百分比，或者等份网格容器中可用空间（使用 fr 单位）
 * @param successCallBack {successCallBack} 无返回值
 * @param errorCallBack {errorCallBack} 返回错误信息
 */
CGraph.prototype.insertGridRow = function (canvasId, rowNumber, height, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var fdc = $this.mac.fd.canvas;
  var fdg = $this.mac.fd.elementGroup;
  var fde = $this.mac.fd.element;
  var number = parseInt(rowNumber);
  var fnname = 'CGraph.prototype.insertGridRow';

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
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
      case 'query_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [canvasId];
        dbData[fdc.gridTemplate] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            if (dbData[fdc.gridTemplate][0].row.length + 1 < number) {
              para.error = {};
              para.error.code = '';
              para.error.message = 'rowNumber 超出范围。';
              para.nStep = 'errorEnd';
            } else {
              para.grid = dbData[fdc.gridTemplate][0];
              para.nStep = 'insertGridRow';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'insertGridRow':

        var $canvas = $($this.jqIdPrefix.canvas + canvasId);
        para.grid.row.splice(number - 1, 0, height);
        var strRow = para.grid.row.join(' ');
        $canvas.css('grid-template-rows', strRow);
        var $children = $canvas.children('.canvas');
        $children = $children.add($canvas.children('.group'));
        $children = $children.add($canvas.children('.element'));

        para.arrCanvasId = [];
        para.arrGroupId = [];
        para.arrElementId = [];

        var arrAllLineId = [];
        para.arrLineId = [];

        $children.each(function (i) {
          var arrLineId = [];
          if ($(this).hasClass('canvas')) {
            var canvasId = $(this).attr('id').replace($this.jsIdPrefix.canvas, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.canvas, canvasId).all;
            para.arrCanvasId.push(canvasId);
            arrAllLineId.push(arrLineId);
          } else if ($(this).hasClass('group')) {
            var groupId = $(this).attr('id').replace($this.jsIdPrefix.group, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.group, groupId).all;
            para.arrGroupId.push(groupId);
            arrAllLineId.push(arrLineId);
          } else if ($(this).hasClass('element')) {
            var elementId = $(this).attr('id').replace($this.jsIdPrefix.element, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, elementId).all;
            para.arrElementId.push(elementId);
            arrAllLineId.push(arrLineId);
          }
          var start = $(this).css('grid-row-start');
          var end = $(this).css('grid-row-end');
          if (start !== 'auto' && end !== 'auto') {
            start = parseInt(start);
            end = parseInt(end);
            if (start >= number) {
              $(this).css({
                'grid-row-start': (start + 1).toString(),
                'grid-row-end'  : (end + 1).toString(),
              });
              para.arrLineId = para.arrLineId.concat(arrAllLineId[i]);
            } else if (start < number && end - 1 >= number) {
              $(this).css({
                'grid-row-end': (end + 1).toString(),
              });
              para.arrLineId = para.arrLineId.concat(arrAllLineId[i]);
            }
          }
        });

        para.nStep = 'modify_canvas';
        dbFlag += 1;
        break;
      case 'modify_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [canvasId];
        dbData[fdc.gridTemplate] = [para.grid];
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrCanvasId.length > 0) {
              para.nStep = 'query_canvas_origin';
            } else if (para.arrGroupId.length > 0) {
              para.nStep = 'query_group_origin';
            } else if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_canvas_origin':
        objectName = 'canvas';
        dbData = {};
        dbData.id = para.arrCanvasId;
        dbData[fdc.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[fdc.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[0]);
              var end = parseInt(v.gridArea[1]);
              if (start >= number) {
                v.gridArea[0] = start + 1;
                v.gridArea[1] = end + 1;
              } else if (start < number && end >= number) {
                v.gridArea[1] = end + 1;
              }
            });
            para.canvasOrigin = dbData[fdc.origin];
            para.nStep = 'modify_canvas_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_canvas_origin':
        objectName = 'canvas';
        dbData = {};
        dbData.id = para.arrCanvasId;
        dbData[fdc.origin] = para.canvasOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrGroupId.length > 0) {
              para.nStep = 'query_group_origin';
            } else if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_group_origin':
        objectName = 'group';
        dbData = {};
        dbData.id = para.arrGroupId;
        dbData[fdg.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[fdg.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[0]);
              var end = parseInt(v.gridArea[1]);
              if (start >= number) {
                v.gridArea[0] = start + 1;
                v.gridArea[1] = end + 1;
              } else if (start < number && end >= number) {
                v.gridArea[1] = end + 1;
              }
            });
            para.groupOrigin = dbData[fdg.origin];
            para.nStep = 'modify_group_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_group_origin':
        objectName = 'group';
        dbData = {};
        dbData.id = para.arrGroupId;
        dbData[fdg.origin] = para.groupOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_element_origin':
        objectName = 'element';
        dbData = {};
        dbData.id = para.arrElementId;
        dbData[fde.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[fde.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[0]);
              var end = parseInt(v.gridArea[1]);
              if (start >= number) {
                v.gridArea[0] = start + 1;
                v.gridArea[1] = end + 1;
              } else if (start < number && end >= number) {
                v.gridArea[1] = end + 1;
              }
            });
            para.elementOrigin = dbData[fde.origin];
            para.nStep = 'modify_element_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_element_origin':
        objectName = 'element';
        dbData = {};
        dbData.id = para.arrElementId;
        dbData[fde.origin] = para.elementOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'refreshLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'refreshLine':
        $this.instance.repaintEverything();
        $this.refreshLine(para.arrLineId,
          function () {
            para.nStep = 'successEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'successEnd':
        para.successCallBack('success');
        return;
      case 'errorEnd':
        para.errorCallBack(para.error);
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }

};


/**
 * 在网格布局中插入列
 * @param canvasId {string} 画布 id
 * @param columnNumber {string} 要插入成为第几列
 * @param width {string} 列宽。可以是长度值，百分比，或者等份网格容器中可用空间（使用 fr 单位）
 * @param successCallBack {successCallBack} 无返回值
 * @param errorCallBack {errorCallBack} 返回错误信息
 */
CGraph.prototype.insertGridColumn = function (canvasId, columnNumber, width, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var number = parseInt(columnNumber);
  var fdc = $this.mac.fd.canvas;
  var fnname = 'CGraph.prototype.insertGridColumn';

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
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
      case 'query_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [canvasId];
        dbData[fdc.gridTemplate] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            if (dbData[fdc.gridTemplate][0].column.length + 1 < number) {
              para.error = {};
              para.error.code = '';
              para.error.message = 'columnNumber 超出范围。';
              para.nStep = 'errorEnd';
            } else {
              para.grid = dbData[fdc.gridTemplate][0];
              para.nStep = 'insertGridColumn';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'insertGridColumn':
        var $canvas = $($this.jqIdPrefix.canvas + canvasId);
        para.grid.column.splice(columnNumber - 1, 0, width);
        var strColumn = para.grid.column.join(' ');
        $canvas.css('grid-template-columns', strColumn);
        var $children = $canvas.children('.canvas');
        $children = $children.add($canvas.children('.group'));
        $children = $children.add($canvas.children('.element'));

        para.arrCanvasId = [];
        para.arrGroupId = [];
        para.arrElementId = [];

        var arrAllLineId = [];
        para.arrLineId = [];

        $children.each(function (i) {
          var arrLineId = [];
          if ($(this).hasClass('canvas')) {
            var canvasId = $(this).attr('id').replace($this.jsIdPrefix.canvas, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.canvas, canvasId).all;
            para.arrCanvasId.push(canvasId);
            arrAllLineId.push(arrLineId);
          } else if ($(this).hasClass('group')) {
            var groupId = $(this).attr('id').replace($this.jsIdPrefix.group, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.group, groupId).all;
            para.arrGroupId.push(groupId);
            arrAllLineId.push(arrLineId);
          } else if ($(this).hasClass('element')) {
            var elementId = $(this).attr('id').replace($this.jsIdPrefix.element, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, elementId).all;
            para.arrElementId.push(elementId);
            arrAllLineId.push(arrLineId);
          }
          var start = $(this).css('grid-column-start');
          var end = $(this).css('grid-column-end');
          if (start !== 'auto' && end !== 'auto') {
            start = parseInt(start);
            end = parseInt(end);
            if (start >= number) {
              $(this).css({
                'grid-column-start': (start + 1).toString(),
                'grid-column-end'  : (end + 1).toString(),
              });
              para.arrLineId = para.arrLineId.concat(arrAllLineId[i]);
            } else if (start < number && end - 1 >= number) {
              $(this).css({
                'grid-column-end': (end + 1).toString(),
              });
              para.arrLineId = para.arrLineId.concat(arrAllLineId[i]);
            }
          }
        });
        para.nStep = 'modify_canvas';
        dbFlag += 1;
        break;
      case 'modify_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [canvasId];
        dbData[fdc.gridTemplate] = [para.grid];
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrCanvasId.length > 0) {
              para.nStep = 'query_canvas_origin';
            } else if (para.arrGroupId.length > 0) {
              para.nStep = 'query_group_origin';
            } else if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_canvas_origin':
        objectName = 'canvas';
        dbData = {};
        dbData.id = para.arrCanvasId;
        dbData[fdc.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[fdc.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[2]);
              var end = parseInt(v.gridArea[3]);
              if (start >= number) {
                v.gridArea[2] = start + 1;
                v.gridArea[3] = end + 1;
              } else if (start < number && end >= number) {
                v.gridArea[3] = end + 1;
              }
            });
            para.canvasOrigin = dbData[fdc.origin];
            para.nStep = 'modify_canvas_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_canvas_origin':
        objectName = 'canvas';
        dbData = {};
        dbData.id = para.arrCanvasId;
        dbData[fdc.origin] = para.canvasOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrGroupId.length > 0) {
              para.nStep = 'query_group_origin';
            } else if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_group_origin':
        objectName = 'group';
        dbData = {};
        dbData.id = para.arrGroupId;
        dbData[$this.mac.fd.elementGroup.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[$this.mac.fd.elementGroup.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[2]);
              var end = parseInt(v.gridArea[3]);
              if (start >= number) {
                v.gridArea[2] = start + 1;
                v.gridArea[3] = end + 1;
              } else if (start < number && end >= number) {
                v.gridArea[3] = end + 1;
              }
            });
            para.groupOrigin = dbData[$this.mac.fd.elementGroup.origin];
            para.nStep = 'modify_group_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_group_origin':
        objectName = 'group';
        dbData = {};
        dbData.id = para.arrGroupId;
        dbData[$this.mac.fd.elementGroup.origin] = para.groupOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_element_origin':
        objectName = 'element';
        dbData = {};
        dbData.id = para.arrElementId;
        dbData[$this.mac.fd.element.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[$this.mac.fd.element.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[2]);
              var end = parseInt(v.gridArea[3]);
              if (start >= number) {
                v.gridArea[2] = start + 1;
                v.gridArea[3] = end + 1;
              } else if (start < number && end >= number) {
                v.gridArea[3] = end + 1;
              }
            });
            para.elementOrigin = dbData[$this.mac.fd.element.origin];
            para.nStep = 'modify_element_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_element_origin':
        objectName = 'element';
        dbData = {};
        dbData.id = para.arrElementId;
        dbData[$this.mac.fd.element.origin] = para.elementOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'refreshLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'refreshLine':
        $this.instance.repaintEverything();
        $this.refreshLine(para.arrLineId,
          function () {
            para.nStep = 'successEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'successEnd':
        para.successCallBack('success');
        return;
      case 'errorEnd':
        para.errorCallBack(para.error);
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }

};

/**
 * 在网格布局中删除指定行
 * @param canvasId {string} 画布 id
 * @param rowNumber {string} 要删除第几行
 * @param successCallBack {successCallBack} 无返回值
 * @param errorCallBack {errorCallBack} 返回错误信息
 */
CGraph.prototype.deleteGridRow = function (canvasId, rowNumber, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var number = parseInt(rowNumber);
  var fdc = $this.mac.fd.canvas;
  var fnname = 'CGraph.prototype.deleteGridRow';

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
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
      case 'query_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [canvasId];
        dbData[fdc.gridTemplate] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            if (dbData[fdc.gridTemplate][0].row.length < number) {
              para.error = {};
              para.error.code = '';
              para.error.message = 'rowNumber 不存在。';
              para.nStep = 'errorEnd';
            } else {
              var $canvas = $($this.jqIdPrefix.canvas + canvasId);
              var $children = $canvas.children('.canvas');
              $children = $children.add($canvas.children('.group'));
              $children = $children.add($canvas.children('.element'));

              var isBlankRow = true;
              $children.each(function () {
                var start = parseInt($(this).css('grid-row-start'));
                var end = parseInt($(this).css('grid-row-end'));
                if ((start === number) && (end === number)) isBlankRow = false;
                return false;
              });

              if (!isBlankRow) {
                para.error = {};
                para.error.code = '';
                para.error.msg = '非空行，删除失败！';
                para.nStep = 'errorEnd';
              } else {
                para.grid = dbData[fdc.gridTemplate][0];
                para.$children = $children;
                para.nStep = 'deleteGridRow';
              }
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'deleteGridRow':

        var $canvas = $($this.jqIdPrefix.canvas + canvasId);
        para.grid.row.splice(number - 1, 1);
        var strRow = para.grid.row.join(' ');
        $canvas.css('grid-template-rows', strRow);

        para.arrCanvasId = [];
        para.arrGroupId = [];
        para.arrElementId = [];

        var arrAllLineId = [];
        para.arrLineId = [];

        para.$children.each(function (i) {
          var arrLineId = [];
          if ($(this).hasClass('canvas')) {
            var canvasId = $(this).attr('id').replace($this.jsIdPrefix.canvas, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.canvas, canvasId).all;
            para.arrCanvasId.push(canvasId);
            arrAllLineId.push(arrLineId);
          } else if ($(this).hasClass('group')) {
            var groupId = $(this).attr('id').replace($this.jsIdPrefix.group, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.group, groupId).all;
            para.arrGroupId.push(groupId);
            arrAllLineId.push(arrLineId);
          } else if ($(this).hasClass('element')) {
            var elementId = $(this).attr('id').replace($this.jsIdPrefix.element, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, elementId).all;
            para.arrElementId.push(elementId);
            arrAllLineId.push(arrLineId);
          }
          var start = $(this).css('grid-row-start');
          var end = $(this).css('grid-row-end');
          if (start !== 'auto' && end !== 'auto') {
            start = parseInt(start);
            end = parseInt(end);

            // 删除行以下
            if (start > number) {
              $(this).css({
                'grid-row-start': (start - 1).toString(),
                'grid-row-end'  : (end - 1).toString(),
              });
              para.arrLineId = para.arrLineId.concat(arrAllLineId[i]);
            } else if (start <= number && end - 1 >= number) { // 首尾跨度包含删除行
              $(this).css({
                'grid-row-end': (end - 1).toString(),
              });
              para.arrLineId = para.arrLineId.concat(arrAllLineId[i]);
            }
          }
        });
        para.nStep = 'modify_canvas';
        dbFlag += 1;
        break;
      case 'modify_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [canvasId];
        dbData[fdc.gridTemplate] = [para.grid];
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrCanvasId.length > 0) {
              para.nStep = 'query_canvas_origin';
            } else if (para.arrGroupId.length > 0) {
              para.nStep = 'query_group_origin';
            } else if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_canvas_origin':
        objectName = 'canvas';
        dbData = {};
        dbData.id = para.arrCanvasId;
        dbData[$this.mac.fd.canvas.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[$this.mac.fd.canvas.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[0]);
              var end = parseInt(v.gridArea[1]);
              if (start > number) {
                v.gridArea[0] = start - 1;
                v.gridArea[1] = end - 1;
              } else if (start <= number && end >= number) {
                v.gridArea[1] = end - 1;
              }
            });
            para.canvasOrigin = dbData[$this.mac.fd.canvas.origin];
            para.nStep = 'modify_canvas_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_canvas_origin':
        objectName = 'canvas';
        dbData = {};
        dbData.id = para.arrCanvasId;
        dbData[$this.mac.fd.canvas.origin] = para.canvasOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrGroupId.length > 0) {
              para.nStep = 'query_group_origin';
            } else if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_group_origin':
        objectName = 'group';
        dbData = {};
        dbData.id = para.arrGroupId;
        dbData[$this.mac.fd.elementGroup.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[$this.mac.fd.elementGroup.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[0]);
              var end = parseInt(v.gridArea[1]);
              if (start > number) {
                v.gridArea[0] = start - 1;
                v.gridArea[1] = end - 1;
              } else if (start <= number && end >= number) {
                v.gridArea[1] = end - 1;
              }
            });
            para.groupOrigin = dbData[$this.mac.fd.elementGroup.origin];
            para.nStep = 'modify_group_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_group_origin':
        objectName = 'group';
        dbData = {};
        dbData.id = para.arrGroupId;
        dbData[$this.mac.fd.elementGroup.origin] = para.groupOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_element_origin':
        objectName = 'element';
        dbData = {};
        dbData.id = para.arrElementId;
        dbData[$this.mac.fd.element.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[$this.mac.fd.element.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[0]);
              var end = parseInt(v.gridArea[1]);
              if (start > number) {
                v.gridArea[0] = start - 1;
                v.gridArea[1] = end - 1;
              } else if (start <= number && end >= number) {
                v.gridArea[1] = end - 1;
              }
            });
            para.elementOrigin = dbData[$this.mac.fd.element.origin];
            para.nStep = 'modify_element_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_element_origin':
        objectName = 'element';
        dbData = {};
        dbData.id = para.arrElementId;
        dbData[$this.mac.fd.element.origin] = para.elementOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'refreshLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'refreshLine':
        $this.instance.repaintEverything();
        $this.refreshLine(para.arrLineId,
          function () {
            para.nStep = 'successEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'successEnd':
        para.successCallBack('success');
        return;
      default:
        para.errorCallBack(para.error);
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
}

/**
 * 在网格布局中删除指定列
 * @param canvasId {string} 画布 id
 * @param columnNumber {string} 要删除第几列
 * @param successCallBack {successCallBack} 无返回值
 * @param errorCallBack {errorCallBack} 返回错误信息
 */
CGraph.prototype.deleteGridColumn = function (canvasId, columnNumber, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var number = parseInt(columnNumber);
  var fdc = $this.mac.fd.canvas;
  var fnname = 'CGraph.prototype.deleteGridColumn';

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
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
      case 'query_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [canvasId];
        dbData[fdc.gridTemplate] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            if (dbData[fdc.gridTemplate][0].column.length < number) {
              para.error = {};
              para.error.code = '';
              para.error.message = 'columnNumber 不存在。';
              para.nStep = 'errorEnd';
            } else {
              var $canvas = $($this.jqIdPrefix.canvas + canvasId);
              var $children = $canvas.children('.canvas');
              $children = $children.add($canvas.children('.group'));
              $children = $children.add($canvas.children('.element'));
              var isBlankColumn = true;
              $children.each(function () {
                var start = parseInt($(this).css('grid-column-start'));
                var end = parseInt($(this).css('grid-column-end'));
                if ((start === number) && (end === number)) isBlankColumn = false;
                return false;
              });

              if (!isBlankColumn) {
                para.error = {};
                para.error.code = '';
                para.error.msg = '非空行，删除失败！';
                para.nStep = 'errorEnd';
              } else {
                para.grid = dbData[fdc.gridTemplate][0];
                para.$children = $children;
                para.nStep = 'deleteGridColumn';
              }
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'deleteGridColumn':

        var $canvas = $($this.jqIdPrefix.canvas + canvasId);
        para.grid.column.splice(number - 1, 1);
        var strColumn = para.grid.column.join(' ');
        $canvas.css('grid-template-columns', strColumn);

        para.arrCanvasId = [];
        para.arrGroupId = [];
        para.arrElementId = [];

        var arrAllLineId = [];
        para.arrLineId = [];

        para.$children.each(function (i) {
          var arrLineId = [];
          if ($(this).hasClass('canvas')) {
            var canvasId = $(this).attr('id').replace($this.jsIdPrefix.canvas, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.canvas, canvasId).all;
            para.arrCanvasId.push(canvasId);
            arrAllLineId.push(arrLineId);
          } else if ($(this).hasClass('group')) {
            var groupId = $(this).attr('id').replace($this.jsIdPrefix.group, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.group, groupId).all;
            para.arrGroupId.push(groupId);
            arrAllLineId.push(arrLineId);
          } else if ($(this).hasClass('element')) {
            var elementId = $(this).attr('id').replace($this.jsIdPrefix.element, '');
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, elementId).all;
            para.arrElementId.push(elementId);
            arrAllLineId.push(arrLineId);
          }
          var start = $(this).css('grid-column-start');
          var end = $(this).css('grid-column-end');
          if (start !== 'auto' && end !== 'auto') {
            start = parseInt(start);
            end = parseInt(end);

            if (start > number) {
              $(this).css({
                'grid-column-start': (start - 1).toString(),
                'grid-column-end'  : (end - 1).toString(),
              });
              para.arrLineId = para.arrLineId.concat(arrAllLineId[i]);
            } else if (start <= number && end - 1 >= number) {
              $(this).css({
                'grid-column-end': (end - 1).toString(),
              });
              para.arrLineId = para.arrLineId.concat(arrAllLineId[i]);
            }
          }
        });
        para.nStep = 'modify_canvas';
        dbFlag += 1;
        break;
      case 'modify_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [canvasId];
        dbData[fdc.gridTemplate] = [para.grid];
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrCanvasId.length > 0) {
              para.nStep = 'query_canvas_origin';
            } else if (para.arrGroupId.length > 0) {
              para.nStep = 'query_group_origin';
            } else if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_canvas_origin':
        objectName = 'canvas';
        dbData = {};
        dbData.id = para.arrCanvasId;
        dbData[$this.mac.fd.canvas.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[$this.mac.fd.canvas.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[2]);
              var end = parseInt(v.gridArea[3]);
              if (start > number) {
                v.gridArea[2] = start - 1;
                v.gridArea[3] = end - 1;
              } else if (start <= number && end >= number) {
                v.gridArea[3] = end - 1;
              }
            });
            para.canvasOrigin = dbData[$this.mac.fd.canvas.origin];
            para.nStep = 'modify_canvas_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_canvas_origin':
        objectName = 'canvas';
        dbData = {};
        dbData.id = para.arrCanvasId;
        dbData[$this.mac.fd.canvas.origin] = para.canvasOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrGroupId.length > 0) {
              para.nStep = 'query_group_origin';
            } else if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_group_origin':
        objectName = 'group';
        dbData = {};
        dbData.id = para.arrGroupId;
        dbData[$this.mac.fd.elementGroup.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[$this.mac.fd.elementGroup.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[2]);
              var end = parseInt(v.gridArea[3]);
              if (start > number) {
                v.gridArea[2] = start - 1;
                v.gridArea[3] = end - 1;
              } else if (start <= number && end >= number) {
                v.gridArea[3] = end - 1;
              }
            });
            para.groupOrigin = dbData[$this.mac.fd.elementGroup.origin];
            para.nStep = 'modify_group_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_group_origin':
        objectName = 'group';
        dbData = {};
        dbData.id = para.arrGroupId;
        dbData[$this.mac.fd.elementGroup.origin] = para.groupOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            if (para.arrElementId.length > 0) {
              para.nStep = 'query_element_origin';
            } else {
              para.nStep = 'successEnd';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_element_origin':
        objectName = 'element';
        dbData = {};
        dbData.id = para.arrElementId;
        dbData[$this.mac.fd.element.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            dbData[$this.mac.fd.element.origin].forEach(function (v) {
              var start = parseInt(v.gridArea[2]);
              var end = parseInt(v.gridArea[3]);
              if (start > number) {
                v.gridArea[2] = start - 1;
                v.gridArea[3] = end - 1;
              } else if (start <= number && end >= number) {
                v.gridArea[3] = end - 1;
              }
            });
            para.elementOrigin = dbData[$this.mac.fd.element.origin];
            para.nStep = 'modify_element_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_element_origin':
        objectName = 'element';
        dbData = {};
        dbData.id = para.arrElementId;
        dbData[$this.mac.fd.element.origin] = para.elementOrigin;
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'refreshLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'refreshLine':
        $this.instance.repaintEverything();
        $this.refreshLine(para.arrLineId,
          function () {
            para.nStep = 'successEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'successEnd':
        para.successCallBack('success');
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
}


/**
 * 设置网格布局中网格项的位置
 * @param type {string} 图形类型。可选项为 '0-canvas', '1-group', '2-element'，详见 {@tutorial mac}
 * @param id {string} 图形id
 * @param gridArea {array} 位置信息，数组内容为 [rowStart, rowEnd, columnStart, columnEnd]，同字段 origin 中的
 * gridArea 属性
 * @param successCallBack {successCallBack} 无返回值
 * @param errorCallBack {errorCallBack} 返回错误信息
 */
CGraph.prototype.setGridItemPosition = function (type, id, gridArea, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var $target;
  var objectName;
  var fd;
  var fnname = 'CGraph.prototype.setGridItemPosition';

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
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
      case 'setPosition':
        switch (type) {
          case $this.config.mac.type.canvas:
            $target = $($this.jqIdPrefix.canvas + id);
            para.objectName = 'canvas';
            para.fd = $this.mac.fd.canvas;
            break;
          case $this.config.mac.type.group:
            $target = $($this.jqIdPrefix.group + id);
            para.objectName = 'group';
            para.fd = $this.mac.fd.elementGroup;
            break;
          case $this.config.mac.type.element:
            $target = $($this.jqIdPrefix.element + id);
            para.objectName = 'element';
            para.fd = $this.mac.fd.element;
            break;
        }

        $target.css({
          'grid-row-start'   : gridArea[0].toString(),
          'grid-row-end'     : (parseInt(gridArea[1]) + 1).toString(),
          'grid-column-start': gridArea[2].toString(),
          'grid-column-end'  : (parseInt(gridArea[3]) + 1).toString(),
        });
        para.nStep = 'query_origin';
        dbFlag += 1;
        break;
      case 'query_origin':
        objectName = para.objectName;
        dbData = {};
        dbData.id = [id];
        dbData[para.fd.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.origin = dbData[para.fd.origin];
            para.origin[0].gridArea = gridArea;
            para.nStep = 'modify_origin';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.setGridItemPosition(type, id, gridArea, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_origin':
        objectName = para.objectName;
        dbData = {};
        dbData.id = [id];
        dbData[para.fd.origin] = para.origin;
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.setGridItemPosition(type, id, gridArea, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'end':
        $this.instance.repaintEverything();
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


/**
 * @callback successCallBack_getGridItemPosition
 * @param result {array[]} - 位置信息，数组内容为 [rowStart, rowEnd, columnStart, columnEnd]，同字段 origin
 * 中的gridArea 属性，result 值如：[['1', '1', '2', '3']]
 */

/**
 * 获取网格布局中网格项（如画布、组合、元件）所在的位置
 * @param type {string} 图形类型。可选项为 '0-canvas', '1-group', '2-element'，详见 {@tutorial mac}
 * @param id {string} 图形id
 * @param successCallBack {successCallBack_getGridItemPosition} - 位置信息，数组内容为 [rowStart, rowEnd, columnStart, columnEnd]，同字段 origin 中的gridArea 属性
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.getGridItemPosition = function (type, id, successCallBack, errorCallBack) {
  var $this = this;
  var gridArea = $this.getGridArea(type, id);
  successCallBack([gridArea]);
};

CGraph.prototype.getGridArea = function (type, id) {
  var $this = this;
  var $target;
  var gridArea = [];
  switch (type) {
    case $this.config.mac.type.canvas:
      $target = $($this.jqIdPrefix.canvas + id);
      break;
    case $this.config.mac.type.group:
      $target = $($this.jqIdPrefix.group + id);
      break;
    case $this.config.mac.type.element:
      $target = $($this.jqIdPrefix.element + id);
      break;
  }

  if ($target.parent().css('display') === 'grid') {
    gridArea.push(parseInt($target.css('grid-row-start')));
    gridArea.push(parseInt($target.css('grid-row-end')) - 1);
    gridArea.push(parseInt($target.css('grid-column-start')));
    gridArea.push(parseInt($target.css('grid-column-end')) - 1);
  }

  return gridArea;

};

CGraph.prototype.getGridCell = function (coord, canvasId) {
  var $this = this;
  var gridArea = [];
  var $canvas = $($this.jqIdPrefix.canvas + canvasId);
  if ($canvas.css('display') === 'grid') {
    var x = coord.x - $canvas.offset().left;
    var y = coord.y - $canvas.offset().top;
    var strRows = $canvas.css('grid-template-rows');
    var strColumns = $canvas.css('grid-template-columns');
    var arrRows = strRows.split(' ');
    var arrColumns = strColumns.split(' ');
    var arrRowLine = [0];
    var arrColumnLine = [0];
    var nextStart = 0;
    arrRows.map(function (v) {
      var rowHeight = parseInt(v.replace('px', ''));
      nextStart += rowHeight;
      arrRowLine.push(nextStart);
    });
    nextStart = 0;
    arrColumns.map(function (v) {
      var columnHeight = parseInt(v.replace('px', ''));
      nextStart += columnHeight;
      arrColumnLine.push(nextStart);
    });

    arrRowLine.forEach(function (v, i, arr) {
      if (i < arr.length && y >= v && y < arr[i + 1]) {
        gridArea.push(i + 1);
        gridArea.push(i + 1);
      }
    });

    arrColumnLine.forEach(function (v, i, arr) {
      if (i < arr.length && x >= v && x < arr[i + 1]) {
        gridArea.push(i + 1);
        gridArea.push(i + 1);
      }
    });

    if (gridArea.length !== 4) gridArea = [];
  }
  return gridArea;
};

/**
 * 选择指定画布
 * @private
 * @param canvasId  {string} 画布 id
 */
CGraph.prototype.selectCanvas = function (canvasId) {
  var $this = this;
  var selection = {
    type: [$this.config.mac.type.canvas],
    id  : [canvasId],
  };
  $this.selectByCommand(selection);
};

/**
 * 取消选择指定画布
 * @private
 * @param canvasId {string} 画布 id
 */
CGraph.prototype.deselectCanvas = function (canvasId) {
  var $this = this;
  var selection = {
    type: [$this.config.mac.type.canvas],
    id  : [canvasId],
  };
  $this.unselect(selection);
};

/**
 * 设置根画布是否可拖拽
 * @param option {string} 开启关闭选项。
 */
CGraph.prototype.setRootCanvasDraggable = function (option) {
  var $this = this;
  var jqRoot = $this.jqIdPrefix.canvas + $this.rootCanvasId;
  var $root = $(jqRoot);
  if (option.toString() === '0') {
    $root.append('<div class="transparentLayer"></div>');
    $root.addClass('grab');
    $this.setRootCanvasDraggableOn();
  } else {
    $(jqRoot + ' .transparentLayer')
      .remove();
    $root.removeClass('grab');
    $(document)
      .off('mousedown', jqRoot)
      .off('mouseup');
  }
};


CGraph.prototype.setRootCanvasDraggableOn = function () {
  var $this = this;
  var $doc = $(document);
  var jqRoot = $this.jqIdPrefix.canvas + $this.rootCanvasId;
  var pL;
  var pT;
  var pR;
  var pB;
  var rLeft;
  var rTop;
  var width;
  var height;

  $doc.on('mousedown', jqRoot, function (event) {
    $this.rootMouseDown = true;
    var originalLeft = $(this)[0].offsetLeft;
    var originalTop = $(this)[0].offsetTop;
    width = $(this)[0].getClientRects()[0].width;
    height = $(this)[0].getClientRects()[0].height;
    pL = $(this)
      .parent()
      .offset().left;
    pR = pL + $(this)
      .parent()
      .width();
    pT = $(this)
      .parent()
      .offset().top;
    pB = pT + $(this)
      .parent()
      .height();
    var cx = event.pageX;
    var cy = event.pageY;
    rLeft = cx - pL - originalLeft;
    rTop = cy - pT - originalTop;
    $doc.on('mousemove', function (event) {
      var zoom = $this.root[$this.rootCanvasId].zoom;
      if ($this.rootMouseDown) {
        var left = event.pageX - pL - rLeft;
        var top = event.pageY - pT - rTop;
        var gap = 100 * zoom;
        if (left + width <= gap) left = gap - width;
        if (pR - pL - left <= gap) left = pR - pL - gap;
        if (top + height <= gap) top = gap - height;
        if (pB - top <= gap) top = pB - pT - gap;
        $(jqRoot)
          .css('left', left + 'px');
        $(jqRoot)
          .css('top', top + 'px');
      }
    });
  });


  $doc.on('mouseup', function (event) {
    if ($this.rootMouseDown) {
      $this.rootMouseDown = false;
      // $(root).off('mousedown');
      $doc.off('mousemove');
    }
  });
};


export default CGraph.prototype;