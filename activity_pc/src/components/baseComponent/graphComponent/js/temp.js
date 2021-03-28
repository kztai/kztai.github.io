/* eslint-disable */


function CGraph() {
};


/**
 * 用一个新的元件模板数据替换组合中指定元件数据，并重新显示
 * @param groupId {string} 组合 id
 * @param groupNumber {string} 要替换的组合元件的序号
 * @param templateId {string} 模板 id
 * @param successCallBack {successCallBack} 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.replaceGroupElement = function (groupId, groupNumber, templateId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = 'CGraph.prototype.replaceGroupElement';

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
        var $group = $($this.jqIdPrefix.group + groupId);
        para.parentId = $group.parent('.canvas').attr('id').replace($this.jsIdPrefix.canvas, '');
        para.nStep = 'query_elementModule';
        dbFlag += 1;
        break;
      case 'query_elementModule':
        objectName = 'elementModule';
        dbData = {};
        dbData.id = [templateId];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.data = dbData;
            delete para.data.id;
            delete para.data[$this.mac.fd.elementModule.elementName];
            para.nStep = 'query_element';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.replaceGroupElement(groupId, groupNumber, templateId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_element':
        objectName = 'element';
        parentRecord = [para.parentId];
        condition = 'element_group_id=' + groupId;
        condition += '&&group_number=' + groupNumber;
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            para.elementId = dbData.id[0];
            para.nStep = 'modify_element';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.replaceGroupElement(groupId, groupNumber, templateId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_element':
        objectName = 'element';
        dbData = para.data;
        dbData.id = [para.elementId];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'showElementView';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.replaceGroupElement(groupId, groupNumber, templateId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'showElementView':
        $this.showSelfElementView($this.config.mac.type.group, groupId, para.elementId,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.replaceGroupElement(groupId, groupNumber, templateId, successCallBack, errorCallBack);
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
}


/**
 * 用一个新的元件模板数据替换指定元件数据，并重新显示
 * @param elementId {string} 元件 id
 * @param templateId {string} 模板 id
 * @param successCallBack {successCallBack} 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.replaceElement = function (elementId, templateId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var fnname = 'CGraph.prototype.replaceElement';

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
      case 'query_elementModule':
        objectName = 'elementModule';
        dbData = {};
        dbData.id = [templateId];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.data = dbData;
            delete para.data.id;
            delete para.data[$this.mac.fd.elementModule.elementName];
            para.nStep = 'modify_element';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.replaceElement(elementId, templateId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_element':
        objectName = 'element';
        dbData = para.data;
        dbData.id = [elementId];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'showElementView';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.replaceElement(elementId, templateId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'showElementView':
        $this.showSelfElementView($this.config.mac.type.group, groupId, elementId,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.replaceElement(elementId, templateId, successCallBack, errorCallBack);
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


/**
 * @private
 * @description 选择指定要素
 * @param type {string} 要素类型，可选项有'canvas','group','element','line'
 * @param id {string} 要素对应id
 */
CGraph.prototype.select = function (type, id) {
  var $this = this;
  var $canvas;
  var $element;
  var $group;
  var t = $this.config.mac.type;
  // $this.setTopIndex(type, id, '1');
  $this.setHighlightIndex(type, id, '1');

  switch (type) {
    case t.canvas:
      $canvas = $($this.jqIdPrefix.canvas + id);
      $canvas.addClass('selectedBorder').focus();
      break;
    case t.element:
      $element = $($this.jqIdPrefix.element + id);
      $element.addClass('selectedBorder').focus();
      break;
    case t.group:
      $group = $($this.jqIdPrefix.group + id);
      $group.addClass('selectedBorder').focus();
      break;
    case t.line:
      var index = $this.map.lineId.indexOf(id);
      if (index > -1) {
        $this.map.connection[index].forEach(function (v) {
          var label = v.getOverlay(id);
          if (label) {
            var name = label.getLabel();
            v.setType('selected');
            label.setLabel(name);
          } else {
            v.setType('selected');
          }
        });
      }
      break;
    default:
      break;
  }
};

/**
 * @private
 * @description 选择指定要素，用户事件触发时调用，考虑到了连续选择
 * @param type {string} 要素类型，可选项有'canvas','group','element','line'
 * @param id {string} 要素对应id
 */
CGraph.prototype.selectByEvent = function (type, id) {
  var $this = this;
  var s = $this.selection;
  var ms = $this.multiSelection;
  var isSelected;
  if (!ms.on && s.id.length > 0) $this.unselectAll();
  if (ms.on) {
    isSelected = s.id.some(function (sid, i) {
      return sid === id && s.type[i] === type;
    });
    if (isSelected) {
      $this.unselect(type, id);
    } else {
      $this.select(type, id);
      s.id.push(id);
      s.type.push(type);
      console.log('selection', JSON.stringify($this.selection));
    }
  } else {
    $this.select(type, id);
    s.id.push(id);
    s.type.push(type);
    console.log('selection', JSON.stringify($this.selection));
  }

};

/**
 * @private
 * @description 选择指定要素，通过命令调用，支持多选
 * @param selection {object} 包含多组要素信息
 * @param selection.type {array} 要素类型，数组元素可选项有'canvas','group','element','line'
 * @param selection.id {array} 要素对应id
 */
CGraph.prototype.selectByCommand = function (selection) {
  var $this = this;
  var s = $this.selection;

  if (s.id.length > 0) $this.unselectAll();
  selection.id.forEach(function (id, i) {
    $this.select(selection.type[i], id);
    s.id.push(id);
    s.type.push(selection.type[i]);
  });
};

/**
 * @private
 * @description 取消所有选择
 */
CGraph.prototype.unselectAll = function () {
  var $this = this;
  var s = $this.selection;
  var $canvas;
  var $element;
  var $group;
  var t = $this.config.mac.type;

  if (s.id.length === 0) return;
  s.id.forEach(function (id, i) {
    // $this.setTopIndex(s.type[i], id, '0');
    $this.setHighlightIndex(s.type[i], id, '0');
    switch (s.type[i]) {
      case t.canvas:
        $canvas = $($this.jqIdPrefix.canvas + id);
        $canvas.removeClass('selectedBorder');
        break;
      case t.element:
        $element = $($this.jqIdPrefix.element + id);
        $element.removeClass('selectedBorder');
        break;
      case t.group:
        $group = $($this.jqIdPrefix.group + id);
        $group.removeClass('selectedBorder');
        break;
      case t.line:
        var index = $this.map.lineId.indexOf(id);
        if (index > -1) {
          $this.map.connection[index].forEach(function (v) {
            var label = v.getOverlay(id);
            if (label) {
              var name = label.getLabel();
              v.removeType('selected');
              label.setLabel(name);
            } else {
              v.removeType('selected');
            }
          });
        }
        break;
      default:
        break;
    }
  });
  s.id = [];
  s.type = [];
};

/**
 *
 * @private
 * @param type
 * @param id
 */
CGraph.prototype.unselect = function (type, id) {
  var $this = this;
  var s = $this.selection;
  var $canvas;
  var $element;
  var $group;
  var t = $this.config.mac.type;

  if (s.id.length === 0) return;

  // $this.setTopIndex(type, id, '0');
  $this.setHighlightIndex(type, id, '0');

  switch (type) {
    case t.canvas:
      $canvas = $($this.jqIdPrefix.canvas + id);
      $canvas.removeClass('selectedBorder');
      break;
    case t.element:
      $element = $($this.jqIdPrefix.element + id);
      $element.removeClass('selectedBorder');
      break;
    case t.group:
      $group = $($this.jqIdPrefix.group + id);
      $group.removeClass('selectedBorder');
      break;
    case t.line:
      var index = $this.map.lineId.indexOf(id);
      if (index > -1) {
        $this.map.connection[index].forEach(function (v) {
          var label = v.getOverlay(id);
          if (label) {
            var name = label.getLabel();
            v.removeType('selected');
            label.setLabel(name);
          } else {
            v.removeType('selected');
          }
        });
      }
      break;
    default:
      break;
  }

  s.id.forEach(function (sid, i) {
    if (sid === id && s.type[i] === type) {
      s.id.splice(i, 1);
      s.type.splice(i, 1);
    }
  });
};


/**
 * @private
 * @description 检查将要新建的画布是否会和其他兄弟画布重叠。注意：非 grid 布局时，画布尺寸单位只能是px
 * @param parentId {string} 父画布id
 * @param origin {object|field-origin} 坐标位置
 * @param width {number|string} 当前画布 width
 * @param height {number|string} 当前画布 height
 * @returns {boolean} 是否重叠
 */
CGraph.prototype.isOverlapping = function (parentId, origin, width, height) {
  var $this = this;
  var $parent = $($this.jqIdPrefix.canvas + parentId);
  var isGrid = $parent.css('display') === 'grid';
  var $allBrotherCanvas = $parent.children('.canvas');
  var isOverlapping = false;

  if (!isGrid) {
    var isNumber = $this.config.regExp.isNumber;
    var left = origin.left.toString().match(isNumber)
      ? parseInt(origin.left, 10)
      : parseInt(origin.left.replace('px', ''), 10);
    var top = origin.top.toString().match(isNumber)
      ? parseInt(origin.top, 10)
      : parseInt(origin.top.replace('px', ''), 10);
    var w = width.toString().match(isNumber)
      ? parseInt(width, 10)
      : parseInt(width.replace('px', ''), 10);
    var h = height.toString().match(isNumber)
      ? parseInt(height, 10)
      : parseInt(height.replace('px', ''), 10);

    var x0 = left + $parent.offset().left;
    var y0 = top + $parent.offset().top;
    var x1 = x0 + w;
    var y1 = y0 + h;

    $allBrotherCanvas.each(function (i, canvas) {
      var l;
      var t;
      var r;
      var b;

      l = $(canvas).offset().left;
      t = $(canvas).offset().top;
      r = l + $(canvas).width();
      b = t + $(canvas).height();
      if (x0 <= r && x1 >= l && y0 <= b && y1 >= t) {
        isOverlapping = true;
        return false;
      }
    });
  } else {
    $allBrotherCanvas.each(function () {
      var canvasId = $(this).attr('id').replace($this.jsIdPrefix.canvas, '');
      var gridArea = $this.getGridArea($this.config.mac.type.canvas, canvasId);
      if (origin.gridArea[1] >= gridArea[0] && origin.gridArea[0] <= gridArea[1]
        && origin.gridArea[3] >= gridArea[2] && origin.gridArea[2] <= gridArea[3]) {
        isOverlapping = true;
        return false;
      }
    });
  }
  return isOverlapping;
};


/**
 * @public
 * @description 设置克隆元素样式并传送开始拖动元件的相关信息
 * @param templateId {string} 元件模板id
 * @param name {string} 元件名称
 * @param successCallBack {successCallBack} - 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.setDraggingElement = function (templateId, name, successCallBack, errorCallBack) {
  var $this = this;
  var d = $this.dragging;
  d.isDragging = true;
  d.isTemplate = true;
  d.overCanvasId = '';
  d.templateId = templateId;
  d.templateType = $this.config.mac.type.element;
  d.name = name;
  d.stack = [''];
  console.log('elementDragStart', d);
  successCallBack();
};

/**
 * @public
 * @description 设置克隆元素样式并传送开始拖动组合的相关信息
 * @param templateId {string} 组合模板id
 * @param name {string} 组合名称
 * @param successCallBack {successCallBack} - 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.setDraggingGroup = function (templateId, name, successCallBack, errorCallBack) {
  var $this = this;
  var d = $this.dragging;
  d.isTemplate = true;
  d.overCanvasId = '';
  d.templateId = templateId;
  d.templateType = $this.config.mac.type.group;
  d.name = name;
  d.stack = [''];
  successCallBack();
};

/**
 * @public
 * @description 设置克隆元素样式并传送开始拖动画布的相关信息
 * @param templateId {string} 画布模板id
 * @param name {string} 画布名称
 * @param successCallBack {successCallBack} - 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.setDraggingCanvas = function (templateId, name, successCallBack, errorCallBack) {
  var $this = this;
  var d = $this.dragging;
  d.isTemplate = true;
  d.overCanvasId = '';
  d.templateId = templateId;
  d.templateType = $this.config.mac.type.canvas;
  d.name = name;
  d.stack = [''];
  successCallBack();
};


/**
 * 给指定元素添加边框效果，目前场景有两个，一为连线时亮显可连线的起点或终点元素，二为拖拽放置前亮显允许放置的画布
 * @param type {string} 元素的类型。可选项为 '0-canvas', '2-element'，详见 {@tutorial mac}
 * @param id {string} 元素的 id
 */
CGraph.prototype.setBorderHighlight = function (type, id) {
  var $this = this;
  var $target;
  switch (type) {
    case $this.config.mac.type.canvas:
      $target = $($this.jqIdPrefix.canvas + id);
      break;
    case $this.config.mac.type.element:
      $target = $($this.jqIdPrefix.element + id);
      break;
  }
  $target.addClass('highlightBorder');
  // $this.setTopIndex(type, id, '1');
  $this.setHighlightIndex(type, id, '1');
  $this.highlightBorder.type.push(type);
  $this.highlightBorder.id.push(id);


};

/**
 * 取消指定元素的边框效果
 * @param type {string} 元素的类型。可选项为 '0-canvas', '2-element'，详见 {@tutorial mac}
 * @param id {string} 元素的 id
 */
CGraph.prototype.cancelBorderHighlight = function (type, id) {
  var $this = this;
  var $target;
  if (typeof(type) === 'undefined' && typeof(id) === 'undefined') {
    $this.highlightBorder.type.forEach(function (v, i) {
      switch (v) {
        case $this.config.mac.type.canvas:
          $target = $($this.jqIdPrefix.canvas + $this.highlightBorder.id[i]);
          break;
        case $this.config.mac.type.element:
          $target = $($this.jqIdPrefix.element + $this.highlightBorder.id[i]);
          break;
      }
      $target.removeClass('highlightBorder');
      // if (!($target.find('.topIndex').length > 0 && $this.dragging.isDragging)) {
      // $this.setTopIndex(v, $this.highlightBorder.id[i], '0');
      // }
      $this.setHighlightIndex(v, $this.highlightBorder.id[i], '0');
    });
    $this.highlightBorder.type = [];
    $this.highlightBorder.id = [];
  } else {
    switch (type) {
      case $this.config.mac.type.canvas:
        $target = $($this.jqIdPrefix.canvas + id);
        break;
      case $this.config.mac.type.element:
        $target = $($this.jqIdPrefix.element + id);
        break;
    }
    $target.removeClass('highlightBorder');
    // if (!($target.find('.topIndex').length > 0 && $this.dragging.isDragging)) {
    // $this.setTopIndex(type, id, '0');
    // }
    $this.setHighlightIndex(type, id, '0');
    $this.highlightBorder.type.forEach(function (v, i) {
      if (v === type && $this.highlightBorder.id[i] === id) {
        $this.highlightBorder.type.splice(i, 1);
        $this.highlightBorder.id.splice(i, 1);
      }
    });
  }
};

/**
 * 【后续版本提供】 给指定元素添加错误标志
 * @param type {string} 元素的类型
 * @param id {string} 元素的 id
 */
CGraph.prototype.addErrorFlag = function (type, id) {
  console.log('addErrorFlag')
};

/**
 * 【后续版本提供】 移除指定元素错误标志
 * @param type {string} 元素的类型
 * @param id {string} 元素的 id
 */
CGraph.prototype.removeErrorFlag = function (type, id) {
  console.log('removeErrorFlag')
};

/**
 * 激活设置名称的输入框
 * @param type {string} 元素的类型
 * @param id {string} 元素的 id
 */
CGraph.prototype.activateNameInput = function (type, id) {
  var $this = this;
  var t = $this.config.mac.type;
  var $target;
  switch (type) {
    case t.canvas:
      $target = $($this.jqIdPrefix.canvas + id);
      break;
    case t.group:
      $target = $($this.jqIdPrefix.group + id);
      break;
    case t.element:
      $target = $($this.jqIdPrefix.element + id);
      break;
    case t.line:
      $target = $($this.jqIdPrefix.line + id);
      break;
  }
  $target.trigger('dblclick');
};


/**
 * @callback successCallBack 成功回调
 * @param [result] {*} 无返回值
 */

/**
 * @callback errorCallBack 错误回调
 * @param error {object}
 * @param error.code {string} 错误代码
 * @param error.message {string} 错误信息
 */


/**
 * 表：canvas，字段：grid_template 的数据结构
 * @typedef field-canvas-grid_template {object}
 * @property row {array} - 画布行的网格信息。数组的长度即为行数，数组元素的值为行高，可以是长度值，百分比，或者等份网格容器中可用空间（使用 fr 单位）
 * @property column {array} - 画布列的网格信息。数组的长度即为列数，数组元素的值为列宽，可以是长度值，百分比，或者等份网格容器中可用空间（使用 fr 单位）
 */


/**
 * 表：canvas/group/element，字段：origin 的数据结构
 * @typedef field-origin {object}
 * @property left {string} - 父画布布局类型非grid、flex，即绝对定位时，相对父画布左边边框的偏移，值为带'px'的坐标值。
 * @property top {string} - 父画布布局类型非grid、flex，即绝对定位时，相对父画布上边边框的偏移，值为带'px'的坐标值。
 * @property gridArea {array} - 父画布为网格布局时，作为网格项在画布中的位置信息，数组内容为 [rowStart, rowEnd, columnStart,
 * columnEnd]
 */


/**
 * 表：canvas/element，字段：anchor 的数据结构
 * @typedef field-anchor {object}
 * @property type {array} - 锚点类型，和锚点位置一一对应，可选项为'0-起点锚点'、'1-终点锚点'、'2-起点和终点共用锚点'，详见 {@tutorial mac}
 * @property position {array} - 锚点位置，和锚点类型一一对应。
 * @property rotation {number} - 锚点位置为形状时，形状的旋转角度
 */

/**
 * 表：lineModule/line，字段：style 的数据结构
 * @typedef field-line-style {object}
 * @property style {object} 连线样式
 * @property style.arrowType {string}
 * 箭头样式，可选项有'0-有倒钩的三角箭头（Arrow）'、'1-没有倒钩的三角箭头（PlainArrow）'、'2-菱形箭头（Diamond）'，详见 {@tutorial mac}
 * @property style.connectorType {string}
 * 连接器类型，可选项有'0-Flowchart'、'1-Straight'、'2-Bezier'、'3-State Machine'、'4-geneDraw'、'5-eventDraw'，详见 {@tutorial mac}
 * @property style.dash {boolean} 是否虚线
 * @property style.stroke {string} 连线颜色，支持css中的颜色格式
 * @property style.strokeWidth {number} 连线宽度，即粗细
 *
 */


/**
 * 表：canvasModule/canvas，字段：attrib 的数据结构
 * @typedef field-canvas-attrib {object}
 * @property attrib {object} 画布属性
 * @property attrib.draggable {boolean} 是否可拖拽和删除。
 * @property attrib.titleSettable {boolean} 是否可设置标题。标题为空，则不显示标题区域。
 * @property attrib.resizable {boolean} 是否可改变尺寸。
 *
 */

/**
 * 表：groupModule/group，字段：attrib 的数据结构
 * @typedef field-group-attrib {object}
 * @property attrib {object} 组合属性
 * @property attrib.draggable {boolean} 是否可拖拽和删除。
 * @property attrib.nameSettable {boolean} 是否可设置名称。名称为空，则不显示名称区域。
 * @property attrib.resizable {boolean} 是否可改变尺寸。
 *
 */

/**
 * 表：elementModule/element，字段：attrib 的数据结构
 * @typedef field-element-attrib {object}
 * @property attrib {object} 元件属性
 * @property attrib.draggable {boolean} 是否可拖拽和删除。
 * @property attrib.nameSettable {boolean} 是否可设置名称。名称为空，则不显示名称区域。
 * @property attrib.resizable {boolean} 是否可改变尺寸。
 *
 */

/**
 * 表：lineModule/line，字段：attrib 的数据结构
 * @typedef field-line-attrib {object}
 * @property attrib {object} 连线属性
 * @property attrib.deletable {boolean} 是否可删除。
 * @property attrib.nameSettable {boolean} 是否可设置名称。名称为空，则不显示名称区域。
 * @property attrib.detachable {boolean} 是否可分开连线端点，即是否可拖拽改变起始或结束端点。
 *
 */

/**
 * 表：canvasModule/canvas/groupModule/group/elementModule/element，字段：size 的数据结构
 * @typedef field-size {object}
 * @property size {object} 尺寸
 * @property size.width {string} 宽度。值为CSS支持的宽度值
 * @property size.height {string} 高度。值为CSS支持的高度值
 *
 */

/**
 * 表：elementModule/element，字段：icon 的数据结构
 * @typedef field-element-icon {object}
 * @property icon {object} 尺寸
 * @property icon.arrPath {array} 图片地址
 * @property icon.arrFile {array} 内存中图片文件地址
 *
 */

/**
 * 表：turningPoint，字段：coord 的数据结构
 * @typedef field-turningPoint-coord {object}
 * @property coord {object} 转折点坐标
 * @property coord.left {string} left 值
 * @property coord.top {string} top 值
 *
 */

export default CGraph.prototype;
