/* eslint-disable */

function CGraph() {
};

/**
 * @callback successCallBack_newElement
 * @param result {string[]} - 元件 id，如：['1']
 */

/**
 *
 * @param templateId {string} - 元件模板 Id
 * @param canvasId {string} - 父画布 Id
 * @param name {string} - 元件名称
 * @param origin {object|field-origin} - 元件原点坐标，数据结构同 origin 字段。
 * @param origin.left {string} - 绝对定位相对父画布左边边框的偏移
 * @param origin.top {string} - 绝对定位相对父画布上边边框的偏移
 * @param origin.gridArea {array} 父画布为网格布局时，作为网格项在画布中的位置信息，数组内容为 [rowStart, rowEnd, columnStart,
 * columnEnd]
 * @param attrib {object|field-element-attrib} - 元件属性，数据结构同 attrib 字段。
 * @param attrib.draggable {boolean} - 是否可拖拽和删除
 * @param attrib.nameSettable {boolean} - 是否可设置名称。名称为空，则不显示名称区域。
 * @param attrib.resizable {boolean} - 是否可改变尺寸。
 * @param successCallBack {successCallBack_newElement} - 返回元件 Id
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.newElement = function (templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = "CGraph.prototype.newElement";

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
        para.dbData = {};
        para.error = {};
        para.error.message = '';
        para.nStep = 'getModuleData';
        dbFlag += 1;
        break;
      case 'getModuleData':
        objectName = 'elementModule';
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
              para.nStep = 'new_element';
            }
            if (++dbFlag === 2) {
              $this.newElement(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'new_element':
        var fd = $this.mac.fd.element;
        var fdm = $this.mac.fd.elementModule;
        para.dbData[fd.attrib] = [!!attrib ? attrib : para.dbData[fdm.attrib][0]];
        objectName = 'element';
        dbData = para.dbData;
        if (name !== $this.mac.strNull) {
          dbData[fd.elementName] = [name];
        }
        delete dbData.id;
        parentRecord = canvasId;
        dbData[fd.origin] = [origin];
        $this.api.recordNew(objectName, parentRecord, dbData,
          function () {
            para.elementID = dbData["id"][0];
            para.nStep = 'call_showElementView';
            if (++dbFlag === 2) {
              $this.newElement(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'call_showElementView':
        $this.showSelfElementView($this.config.mac.type.canvas, canvasId, para.elementID,
          function () {
            para.nStep = 'successEnd';
            if (++dbFlag === 2) {
              $this.newElement(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'successEnd':
        para.successCallBack([para.elementID]);
        return;
      case 'errorEnd':
        para.errorCallBack(para.error);
        return;
    }
    if (++dbFlag === 1) {
      return
    }
  }
};


/**
 * 设置指定元件的属性等
 * @param elementId {string} - 元件 Id
 * @param name {string} - 元件名称
 * @param size {object|field-size} - 元件尺寸，数据结构同 size 字段。
 * @param size.width {string} - 元件宽度，值为CSS支持的宽度值
 * @param size.height {string} - 元件高度，值为CSS支持的高度值
 * @param style {object} - CSS 样式
 * @param attrib {object|field-element-attrib} - 元件属性，数据结构同 attrib 字段。
 * @param attrib.draggable {boolean} - 是否可拖拽和删除
 * @param attrib.nameSettable {boolean} - 是否可设置名称。名称为空，则不显示名称区域。
 * @param attrib.resizable {boolean} - 是否可改变尺寸。
 * @param successCallBack {successCallBack} - 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.setElement = function (elementId, name, size, style, attrib, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var data;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.setElement";

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
        para.data = {};
        para.data[$this.mac.fd.id] = [elementId];
        para.data[$this.mac.fd.element.elementName] = [name];
        if (size === $this.mac.strNull || size === undefined || size === null) {
          para.nStep = 'checkParam_style';
        } else {
          para.data[$this.mac.fd.element.size] = [size];
        }
        dbFlag += 1;
        break;
      case 'checkParam_style':
        if (style === $this.mac.strNull || style === undefined || style === null) {
          para.nStep = 'checkParam_attrib';
        } else {
          para.data[$this.mac.fd.element.style] = [style];
        }
        dbFlag += 1;
        break;
      case 'checkParam_attrib':
        if (attrib === $this.mac.strNull || attrib === undefined || attrib === null) {
          para.nStep = 'modifyElement';
        } else {
          para.data[$this.mac.fd.element.attrib] = [attrib];
        }
        dbFlag += 1;
        break;
      case 'modifyElement':
        objectName = 'element';
        data = para.data;
        $this.api.recordModify(objectName, data,
          function () {
            para.nStep = 'showElementView';
            if (++dbFlag === 2) {
              $this.setElement(elementId, name, size, style, attrib, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'showElementView':
        var parentId = $($this.jqIdPrefix.element + elementId).parent().replace($this.jsIdPrefix.canvas, '');
        $this.showSelfElementView($this.config.mac.type.canvas, parentId, elementId,
          function () {
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.setElement(elementId, name, size, style, attrib, successCallBack, errorCallBack)
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
 * @callback successCallBack_moveElementTo
 * @param result {string[]} - 元件 id，如：['2']
 */

/**
 * 移动指定元件到当前父画布内指定位置或移动到其他画布里时调用
 * @param elementId {string} - 元件 Id
 * @param canvasId {string} - 父画布 Id
 * @param origin {object|field-origin} - 元件原点坐标，数据结构同 origin 字段。
 * @param origin.left {string} - 绝对定位相对父画布左边边框的偏移
 * @param origin.top {string} - 绝对定位相对父画布上边边框的偏移
 * @param origin.gridArea {array} 父画布为网格布局时，作为网格项在画布中的位置信息，数组内容为 [rowStart, rowEnd, columnStart,
 * columnEnd]
 * @param successCallBack {successCallBack_moveElementTo} - 返回元件 Id
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.moveElementTo = function (elementId, canvasId, origin, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.moveElementTo";

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
      case 'getOriginParent':
        objectName = 'element';
        $this.api.getParentRecord(objectName, [elementId],
          function (result) {
            para.originParent = result[0];
            if (para.originParent === canvasId) {
              para.nStep = 'elementMoveToOriginCanvas'
            } else {
              para.nStep = 'elementMoveToNewCanvas'
            }
            if (++dbFlag === 2) {
              $this.moveElementTo(elementId, canvasId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'elementMoveToOriginCanvas':
        $this.elementMoveToOriginCanvas(canvasId, elementId, origin,
          function () {
            para.result = elementId;
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.moveElementTo(elementId, canvasId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'elementMoveToNewCanvas':
        $this.elementMoveToNewCanvas(elementId, canvasId, origin,
          function (result) {
            para.result = result;
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.moveElementTo(elementId, canvasId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack([para.result]);
        break;
    }
    if (++dbFlag === 1) {
      return
    }
  }
};


/**
 * @private
 * @param elementId
 * @param origin
 * @param successCallBack
 * @param errorCallBack
 */
CGraph.prototype.elementMoveToOriginCanvas = function (canvasId, elementId, origin, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var data;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.elementMoveToOriginCanvas";

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
      case 'modifyElement':
        objectName = 'element';
        data = {};
        data[$this.mac.fd.id] = [elementId];
        data[$this.mac.fd.element.origin] = [origin];
        $this.api.recordModify(objectName, data,
          function () {
            para.nStep = 'showElement';
            if (++dbFlag === 2) {
              $this.elementMoveToOriginCanvas(canvasId, elementId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'showElement':
        $this.deleteElementView(elementId);
        $this.showElement($this.config.mac.type.canvas, canvasId, elementId,
          function () {
            para.nStep = 'refreshLine';
            if (++dbFlag === 2) {
              $this.elementMoveToOriginCanvas(canvasId, elementId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'refreshLine':
        var arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, elementId).all;
        $this.refreshLine(arrLineId, function () {
          para.nStep = 'end';
          if (++dbFlag === 2) {
            $this.elementMoveToOriginCanvas(canvasId, elementId, origin, successCallBack, errorCallBack)
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
 *
 * @private
 * @param elementId
 * @param canvasId
 * @param origin
 * @param successCallBack
 * @param errorCallBack
 */
CGraph.prototype.elementMoveToNewCanvas = function (elementId, canvasId, origin, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var data;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.elementMoveToNewCanvas";

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
        objectName = 'element';
        $this.api.moveSubObjectRecord(objectName, [elementId], [canvasId],
          function (result) {
            para.changeData = result;
            para.newElementId = result.element.newRecord[0];
            para.nStep = 'updateDotData';
            // para.i = 0;
            if (++dbFlag === 2) {
              $this.elementMoveToNewCanvas(elementId, canvasId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'updateDotData':
        $this.deleteElementView(elementId);
        $this.updateDotData(para.changeData,
          function () {
            para.nStep = 'modifyNewElementOrigin';
            if (++dbFlag === 2) {
              $this.elementMoveToNewCanvas(elementId, canvasId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'modifyNewElementOrigin':
        objectName = 'element';
        data = {};
        data[$this.mac.fd.id] = [para.newElementId];
        data[$this.mac.fd.element.origin] = [origin];
        $this.api.recordModify(objectName, data,
          function () {
            para.nStep = 'showElementView';
            if (++dbFlag === 2) {
              $this.elementMoveToNewCanvas(elementId, canvasId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'showElementView':
        $this.showSelfElementView($this.config.mac.type.canvas, canvasId, para.newElementId,
          function () {
            para.nStep = 'refreshLine';
            if (++dbFlag === 2) {
              $this.elementMoveToNewCanvas(elementId, canvasId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;

      case 'refreshLine':
        var arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, para.newElementId).all;
        $this.refreshLine(arrLineId, function () {
          para.nStep = 'end';
          if (++dbFlag === 2) {
            $this.elementMoveToNewCanvas(elementId, canvasId, origin, successCallBack, errorCallBack)
          }
        }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack(para.newElementId);
        return
    }
    if (++dbFlag === 1) {
      return
    }
  }
};


CGraph.prototype.updateDotData = function (changeData, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var fd = $this.mac.fd.dot;
  var fnname = 'CGraph.prototype.updateDotData';

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
      case 'condition':
        var oldCanvas;
        var oldElement;
        if ('canvas' in changeData) {
          oldCanvas = $this.arrToStrOfCondition(changeData.canvas.oldRecord);
          para.condition = fd.canvasId + '=' + oldCanvas;
          if ('element' in changeData) {
            oldElement = $this.arrToStrOfCondition(changeData.element.oldRecord);
            para.condition += '||' + fd.elementId + '=' + oldElement;
          }
        } else if ('element' in changeData) {
          oldElement = $this.arrToStrOfCondition(changeData.element.oldRecord);
          para.condition = fd.elementId + '=' + oldElement;
        }
        para.nStep = 'query_dot';
        dbFlag += 1;
        break;
      case 'query_dot':
        objectName = 'dot';
        parentRecord = [$this.rootCanvasId];
        dbData = {};
        dbData.id = [];
        dbData[fd.elementId] = [];
        dbData[fd.canvasId] = [];
        $this.api.recordQuery(objectName, parentRecord, para.condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.dbData = dbData;

              dbData[fd.elementId].forEach(function (v, i) {
                if (v !== '') {
                  changeData.element.oldRecord.forEach(function (o, j) {
                    if (o === v) {
                      para.dbData[fd.elementId][i] = changeData.element.newRecord[j];
                      $this.map.startId.forEach(function (sid, m, arr) {
                        if (sid === v && $this.map.startType[m] === $this.config.mac.type.element) {
                          arr[m] = changeData.element.newRecord[j];
                        }
                      });
                      $this.map.endId.forEach(function (eid, m, arr) {
                        if (eid === v && $this.map.endType[m] === $this.config.mac.type.element) {
                          arr[m] = changeData.element.newRecord[j];
                        }
                      });
                    }
                  });
                }
              });

              dbData[fd.canvasId].forEach(function (v, i) {
                if (v !== '') {
                  changeData.canvas.oldRecord.forEach(function (o, j) {
                    if (o === v) {
                      para.dbData[fd.canvasId][i] = changeData.canvas.newRecord[j];
                      $this.map.startId.forEach(function (sid, m, arr) {
                        if (sid === v && $this.map.startType[m] === $this.config.mac.type.canvas) {
                          arr[m] = changeData.canvas.newRecord[j];
                        }
                      });
                      $this.map.endId.forEach(function (eid, m, arr) {
                        if (eid === v && $this.map.endType[m] === $this.config.mac.type.canvas) {
                          arr[m] = changeData.canvas.newRecord[j];
                        }
                      });
                    }
                  });
                }
              });

              para.nStep = 'modify_dot';
            } else {
              para.nStep = 'end';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.updateDotData(type, changeData, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_dot':
        objectName = 'dot';
        $this.api.recordModify(objectName, para.dbData,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.updateDotData(type, changeData, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
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


export default CGraph.prototype;