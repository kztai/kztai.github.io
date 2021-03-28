/* eslint-disable */

function CGraph() {
};


/**
 * @callback successCallBack_newGroup
 * @param result {object[]} - 返回结果
 * @param result.groupId {string} - 组合 id
 * @param result.elementId {array} - 组合内所有元件 id
 * @param result.number {array} - 组合内所有元件对应的序号（group_number）
 */

/**
 *
 * @param templateId {string} - 组合模板 Id
 * @param canvasId {string} - 父画布 Id
 * @param name {string} - 组合名称
 * @param origin {object|field-origin} - 组合原点坐标，数据结构同 origin 字段。
 * @param origin.left {string} - 绝对定位相对父画布左边边框的偏移
 * @param origin.top {string} - 绝对定位相对父画布上边边框的偏移
 * @param origin.gridArea {array} 父画布为网格布局时，作为网格项在画布中的位置信息，数组内容为 [rowStart, rowEnd, columnStart,
 * columnEnd]
 * @param attrib {object|field-group-attrib} - 组合属性，数据结构同 attrib 字段。
 * @param attrib.draggable {boolean} - 是否可拖拽和删除
 * @param attrib.nameSettable {boolean} -    是否可设置名称。名称为空，则不显示名称区域。
 * @param attrib.resizable {boolean} - 是否可改变尺寸。
 * @param successCallBack {successCallBack_newGroup} - 返回值数据结构见左边 type 链接
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.newGroup = function (templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = "CGraph.prototype.newGroup";

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
        para.result = {};
        para.error = {};
        para.error.message = '';
        para.nStep = 'getModuleData';
        dbFlag += 1;
        break;
      case 'getModuleData':
        objectName = 'groupModule';
        dbData = {};
        dbData.id = [templateId];
        $this.api.recordRead(objectName, dbData,
          function () {
            if (dbData.id.length === 0) {
              // para.error.code = $this.error.dataBaseError;
              para.error.message = '找不到id为 ' + templateId + ' 的记录;';
              para.nStep = 'errorEnd';
            } else {
              para.groupModuleData = dbData;
              para.nStep = 'getGroupElement';
            }
            if (++dbFlag === 2) {
              $this.newGroup(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getGroupElement':
        objectName = 'groupElement';
        parentRecord = [templateId];
        condition = $this.mac.strNull;
        dbData = {};
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length === 0) {
              // para.error.code = $this.error.dataBaseError;
              para.error.message = objectName + '找不到父表记录为 ' + templateId + ' 的记录;';
              para.nStep = 'errorEnd';
            } else {
              para.groupElementData = dbData;
              para.nStep = 'new_group';
            }
            if (++dbFlag === 2) {
              $this.newGroup(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'new_group':
        if (!(name === $this.mac.strNull || name === null || name === undefined)) {
          para.name = name;
        } else {
          para.name = para.groupModuleData[$this.mac.fd.groupModule.groupName];
        }
        // para.attrib = para.groupModuleData[$this.mac.fd.groupModule.attrib][0];

        para.attrib = !!attrib ? attrib : para.groupModuleData[$this.mac.fd.groupModule.attrib][0];
        objectName = 'elementGroup';
        parentRecord = canvasId;
        dbData = {};
        dbData[$this.mac.fd.elementGroup.name] = [para.name];
        dbData[$this.mac.fd.elementGroup.size] = para.groupModuleData[$this.mac.fd.groupModule.size];
        dbData[$this.mac.fd.elementGroup.attrib] = [para.attrib];
        dbData[$this.mac.fd.elementGroup.style] = para.groupModuleData[$this.mac.fd.groupModule.style];
        dbData[$this.mac.fd.elementGroup.origin] = [origin];
        $this.api.recordNew(objectName, parentRecord, dbData,
          function () {
            para.groupID = dbData[$this.mac.fd.id][0];
            para.result.groupId = para.groupID;
            $this.creatingGroupId.push(para.groupID);
            para.nStep = 'call_showCanvasView';
            if (++dbFlag === 2) {
              $this.newGroup(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'call_showCanvasView':
        $this.showSelfGroupView(canvasId, para.groupID,
          function () {
            para.i = 0;
            para.result.elementId = [];
            para.result.number = [];
            para.nStep = 'loopNewGroupElement';
            if (++dbFlag === 2) {
              $this.newGroup(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;

      case 'loopNewGroupElement':
        if (para.i === para.groupElementData[$this.mac.fd.id].length) {
          para.nStep = 'successEnd';
          dbFlag++;
          break;
        }
        if (parseInt(para.groupElementData[$this.mac.fd.groupElement.groupNumber][para.i]) === 0) {
          para.name = name
        } else {
          para.name = para.groupElementData[$this.mac.fd.groupElement.elementName][para.i]
        }
        $this.newGroupElement(para.groupElementData[$this.mac.fd.groupElement.elementModuleId][para.i], para.name, canvasId, para.groupID,
          para.groupElementData[$this.mac.fd.groupElement.origin][para.i], para.groupElementData[$this.mac.fd.groupElement.groupNumber][para.i],
          function (result) {
            para.result.elementId.push(result);
            para.result.number.push(para.groupElementData[$this.mac.fd.groupElement.groupNumber][para.i]);
            para.i++;
            if (++dbFlag === 2) {
              $this.newGroup(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'successEnd':
        $this.creatingGroupId = [];
        para.successCallBack([para.result]);
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
 * @private
 * @param templateId
 * @param name
 * @param attrib
 * @param canvasId
 * @param groupId
 * @param origin
 * @param number
 * @param successCallBack
 * @param errorCallBack
 */
CGraph.prototype.newGroupElement = function (templateId, name, canvasId, groupId, origin, number, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = "CGraph.prototype.newGroupElement";

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
              para.nStep = 'checkParam';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.newGroupElement(templateId, name, canvasId, groupId, origin, number, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;

      case 'checkParam':
        if (parseInt(number) === 0) {
          para.dbData[$this.mac.fd.element.elementName] = [name];
        }
        para.nStep = 'new_element';
        dbFlag += 1;
        break;
      case 'new_element':
        objectName = 'element';
        dbData = para.dbData;
        dbData[$this.mac.fd.element.elementGroupId] = [groupId];
        dbData[$this.mac.fd.element.groupNumber] = [number];
        dbData[$this.mac.fd.element.elementName] = [name];
        dbData[$this.mac.fd.element.origin] = [origin];
        delete dbData[$this.mac.fd.id];
        parentRecord = canvasId;
        $this.api.recordNew(objectName, parentRecord, dbData,
          function () {
            para.elementID = dbData[$this.mac.fd.id][0];
            para.nStep = 'call_showElementView';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.newGroupElement(templateId, name, canvasId, groupId, origin, number, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'call_showElementView':
        $this.showSelfElementView($this.config.mac.type.group, groupId, para.elementID,
          function () {
            para.nStep = 'successEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.newGroupElement(templateId, name, canvasId, groupId, origin, number, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'successEnd':
        para.successCallBack(para.elementID);
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
 * @callback successCallBack_moveGroupTo
 * @param result {object[]} - 返回结果
 * @param result.groupId {object}
 * @param result.groupId.old {string} - 老组合 id
 * @param result.groupId.new {string} - 新组合 id
 * @param result.elementId {object}
 * @param result.elementId.old {array} - 老元件 id，移动至同一画布时为空数组。
 * @param result.elementId.new {array} - 新元件 id，移动至同一画布时为空数组。
 * @example <caption>示例</caption>
 * result = [
 * {
 *   groupId: {
 *     old: '1',
 *     new: '2',
 *   },
 *   elementId: {
 *     old: ['1', '2', '3'],
 *     new: ['4', '5', '6'],
 *   }
 * }
 * ]
 */

/**
 * 移动指定组合到当前父画布内指定位置或移动到其他画布里时调用
 * @param groupId {string} - 组合 Id
 * @param parentId {string} - 父画布 Id
 * @param origin {object|field-origin} - 组合原点坐标，数据结构同 origin 字段。
 * @param origin.left {string} - 绝对定位相对父画布左边边框的偏移
 * @param origin.top {string} - 绝对定位相对父画布上边边框的偏移
 * @param origin.gridArea {array} 父画布为网格布局时，作为网格项在画布中的位置信息，数组内容为 [rowStart, rowEnd, columnStart,
 * columnEnd]
 * @param successCallBack {successCallBack_moveGroupTo} - 返回组合 Id
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.moveGroupTo = function (groupId, parentId, origin, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.moveGroupTo";

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
        objectName = 'elementGroup';
        $this.api.getParentRecord(objectName, [groupId],
          function (result) {
            para.originParent = result[0];
            if (para.originParent === parentId) {
              para.nStep = 'groupMoveToOriginCanvas'
            } else {
              para.nStep = 'groupMoveToNewCanvas'
            }
            if (++dbFlag === 2) {
              $this.moveGroupTo(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'groupMoveToOriginCanvas':
        $this.groupMoveToOriginCanvas(groupId, origin,
          function () {
            para.result = groupId;
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.moveGroupTo(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'groupMoveToNewCanvas':
        $this.groupMoveToNewCanvas(groupId, parentId, origin,
          function (result) {
            para.result = result;
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.moveGroupTo(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack([para.result]);
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
 * @param groupId
 * @param origin
 * @param successCallBack
 * @param errorCallBack
 */
CGraph.prototype.groupMoveToOriginCanvas = function (groupId, origin, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var data;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.groupMoveToOriginCanvas";

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
        var $group = $($this.jqIdPrefix.group + groupId);
        var $parent = $group.parent();

        // 获取连线 id
        var arrElementId = [];
        $group.find('.element').each(function () {
          arrElementId.push($(this).attr('id').replace($this.jsIdPrefix.element, ''));
        });
        para.arrLineId = [];
        arrElementId.forEach(function (v) {
          var arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, v).all;
          para.arrLineId = para.arrLineId.concat(arrLineId);
        });


        // 定位
        var isNumber = $this.config.regExp.isNumber;
        if (origin !== '' && origin !== null && !$.isEmptyObject(origin)) {
          if ($parent.css('display') === 'grid') {
            para.nStep = 'setGridItemPosition';
          } else {
            $group[0].style.left = origin.left.toString().match(isNumber)
              ? origin.left + 'px' : origin.left;
            $group[0].style.top = origin.top.toString().match(isNumber)
              ? origin.top + 'px' : origin.top;
          }
          para.nStep = 'route';
        } else {
          para.nStep = 'end';
        }
        dbFlag++;
        break;
      case 'setGridItemPosition':
        $this.setGridItemPosition($this.config.mac.type.group, groupId, origin.gridArea,
          function () {
            para.nStep = 'route';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.groupMoveToOriginCanvas(groupId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'route':
        if (para.arrLineId.length > 0) {
          para.nStep = 'refreshLine';
        } else {
          para.nStep = 'modifyElementGroup';
        }
        dbFlag += 1;
        break;
      case 'refreshLine':
        $this.instance.repaintEverything();
        $this.refreshLine(para.arrLineId,
          function () {
            para.nStep = 'modifyElementGroup';
            if (++dbFlag === 2) {
              $this.groupMoveToOriginCanvas(groupId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'modifyElementGroup':
        objectName = 'elementGroup';
        data = {};
        data[$this.mac.fd.id] = [groupId];
        data[$this.mac.fd.elementGroup.origin] = [origin];
        $this.api.recordModify(objectName, data,
          function () {
            para.result = {};
            para.result.groupId = {};
            para.result.groupId.old = groupId;
            para.result.groupId.new = groupId;
            para.result.elementId = {};
            para.result.elementId.old = [];
            para.result.elementId.new = [];
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.groupMoveToOriginCanvas(groupId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack(para.result);
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
 * @param groupId
 * @param parentId
 * @param origin
 * @param successCallBack
 * @param errorCallBack
 */
CGraph.prototype.groupMoveToNewCanvas = function (groupId, parentId, origin, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var data;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = "CGraph.prototype.groupMoveToNewCanvas";

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
        $this.api.moveSubObjectRecord('elementGroup', [groupId], [parentId],
          function (result) {
            para.newGroupId = result.elementGroup.newRecord[0];
            para.result = {};
            para.result.groupId = {};
            para.result.groupId.old = groupId;
            para.result.groupId.new = para.newGroupId;

            para.nStep = 'modifyNewGroup';
            if (++dbFlag === 2) {
              $this.groupMoveToNewCanvas(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;

      case 'modifyNewGroup':
        objectName = 'elementGroup';
        data = {};
        data[$this.mac.fd.id] = [para.newGroupId];
        data[$this.mac.fd.elementGroup.origin] = [origin];
        $this.api.recordModify(objectName, data,
          function () {
            para.nStep = 'getElementInGroup';
            if (++dbFlag === 2) {
              $this.groupMoveToNewCanvas(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getElementInGroup':
        objectName = 'element';
        parentRecord = null;
        condition = $this.mac.fd.element.elementGroupId + '=' + groupId;
        data = {};
        data[$this.mac.fd.id] = [];
        $this.api.recordQuery(objectName, parentRecord, condition, data,
          function () {
            para.arrElementInGroup = data[$this.mac.fd.id];
            para.nStep = 'elementMoveSubObjectRecord_element';
            if (++dbFlag === 2) {
              $this.groupMoveToNewCanvas(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'elementMoveSubObjectRecord_element':
        objectName = 'element';
        parentRecord = [];
        for (var i = 0; i < para.arrElementInGroup.length; i++) {
          parentRecord[i] = parentId
        }
        $this.api.moveSubObjectRecord(objectName, para.arrElementInGroup, parentRecord,
          function (result) {
            para.changeData = result;
            para.newArrElement = result.element.newRecord;

            para.result.elementId = {};
            para.result.elementId.old = result.element.oldRecord;
            para.result.elementId.new = result.element.newRecord;

            $this.deleteGroupView(groupId);
            // for (var i = 0; i < para.arrElementInGroup.length; i++) {
            //   $this.deleteElementView(para.arrElementInGroup[i])
            // }
            //先在视图上删除元件，再删除视图组合
            // $($this.jqIdPrefix.group + groupId).remove();
            para.nStep = 'updateDotData';
            if (++dbFlag === 2) {
              $this.groupMoveToNewCanvas(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'updateDotData':
        $this.updateDotData(para.changeData,
          function () {
            para.nStep = 'modifyNewElement';
            if (++dbFlag === 2) {
              $this.groupMoveToNewCanvas(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'modifyNewElement':
        objectName = 'element';
        data = {};
        data[$this.mac.fd.id] = para.newArrElement;
        data[$this.mac.fd.element.elementGroupId] = [];
        for (var i = 0; i < para.newArrElement.length; i++) {
          data[$this.mac.fd.element.elementGroupId][i] = [para.newGroupId];
        }
        $this.api.recordModify(objectName, data,
          function () {
            para.nStep = 'showNewGroupView';
            if (++dbFlag === 2) {
              $this.groupMoveToNewCanvas(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;

      case 'showNewGroupView':
        // $this.deleteGroupView(groupId);
        $this.showSelfGroupView(parentId, para.newGroupId,
          function () {
            para.nStep = 'loop_showNewElement';
            para.i = 0;
            if (++dbFlag === 2) {
              $this.groupMoveToNewCanvas(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'loop_showNewElement':
        if (para.i === para.newArrElement.length) {
          para.nStep = 'refreshLine';
          dbFlag++;
          break
        }
        $this.showElement($this.config.mac.type.group, para.newGroupId, para.newArrElement[para.i],
          function () {
            para.i++;
            if (++dbFlag === 2) {
              $this.groupMoveToNewCanvas(groupId, parentId, origin, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'refreshLine':
        var arrLineId = $this.getLineIdOfFactor($this.config.mac.type.group, para.newGroupId).all;
        $this.refreshLine(arrLineId, function () {
          para.nStep = 'end';
          if (++dbFlag === 2) {
            $this.groupMoveToNewCanvas(groupId, parentId, origin, successCallBack, errorCallBack)
          }
        }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack(para.result);
        break;
    }
    if (++dbFlag === 1) {
      return
    }
  }
};

export default CGraph.prototype;