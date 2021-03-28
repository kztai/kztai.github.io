/* eslint-disable */

function CGraph() {
};


/**
 * 显示指定元件
 * @private
 * @param parentType {string} - 元件视图上的父元素类型，可选项为 'canvas','group'
 * @param parentId {string} - 元件视图上的父元素 Id
 * @param elementId {string} - 元件 Id
 * @param successCallBack {successCallBack} - 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.showElement = function (parentType, parentId, elementId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var fnname = "CGraph.prototype.showElement";

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
      case 'showSelfElementView':
        $this.showSelfElementView(parentType, parentId, elementId,
          function () {
            para.nStep = 'getLineId';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showElement(parentType, parentId, elementId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getLineId':
        para.arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, elementId).self;
        if (para.arrLineId.length > 0) {
          para.i = 0;
          para.nStep = 'loop_showLine';
        } else {
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'loop_showLine':
        if (para.i === para.arrLineId.length) {
          para.nStep = 'end';
          dbFlag += 1;
          break;
        }
        $this.showLine(para.arrLineId[para.i],
          function () {
            para.i += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showElement(parentType, parentId, elementId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack();
        return
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};


CGraph.prototype.showGroup = function (parentId, groupId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = 'CGraph.prototype.showGroup';

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
      case 'query_element':
        var fd = $this.mac.fd.element;
        objectName = 'element';
        parentRecord = [parentId];
        condition = fd.elementGroupId + '=' + groupId;
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            para.arrElementId = dbData.id;
            para.i = 0;
            para.nStep = 'showSelfGroupView';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showGroup(parentId, groupId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'showSelfGroupView':
        $this.showSelfGroupView(parentId, groupId,
          function () {
            if (para.arrElementId.length > 0) {
              para.nStep = 'showElement';
            } else {
              para.nStep = 'deleteCreatingGroup';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showGroup(parentId, groupId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'showElement':
        if (para.i === para.arrElementId.length) {
          para.nStep = 'deleteCreatingGroup';
          dbFlag += 1;
          break;
        }
        $this.showElement($this.config.mac.type.group, groupId, para.arrElementId[para.i],
          function () {
            para.i += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showGroup(parentId, groupId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'deleteCreatingGroup':
        if (!$this.creatingGroupId.includes(groupId)) {
          para.nStep = 'end';
          dbFlag += 1;
          break;
        }
        $this.deleteGroup(groupId,
          function () {
            $this.creatingGroupId = $this.creatingGroupId.filter(function (v) {
              return v !== groupId;
            });
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showGroup(parentId, groupId, successCallBack, errorCallBack);
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
 * 显示指定的画布，包括画布内所有元素
 * @param canvasId {string} - 画布 Id
 * @param successCallBack {successCallBack} - 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.showCanvas = function (canvasId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = 'CGraph.prototype.showCanvas';

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
      case 'display':
        if ($('#' + $this.wrapId).is(':visible')) {
          para.nStep = 'getParent';
        } else {
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'getParent':
        objectName = 'canvas';
        $this.api.getParentRecord(objectName, [canvasId],
          function (result) {
            para.parentId = result[0];
            para.nStep = 'showSelfCanvasView';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'showSelfCanvasView':
        $this.showSelfCanvasView(para.parentId, canvasId,
          function () {
            var t = $this.config.mac.type.canvas;
            para.arrLineId = $this.getLineIdOfFactor(t, canvasId).self;
            para.m = 0;
            para.nStep = 'showLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'showLine':
        if (para.m === para.arrLineId.length) {
          para.nStep = 'query_element';
          dbFlag += 1;
          break;
        }
        $this.showLine(para.arrLineId[para.m],
          function () {
            para.m += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'query_element':
        var fd = $this.mac.fd.element;
        objectName = 'element';
        parentRecord = [canvasId];
        condition = fd.elementGroupId + '=""';
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.arrElementId = dbData.id;
              para.i = 0;
              para.nStep = 'showElement';
            } else {
              para.nStep = 'query_group';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'showElement':
        if (para.i === para.arrElementId.length) {
          para.nStep = 'query_group';
          dbFlag += 1;
          break;
        }

        $this.showElement($this.config.mac.type.canvas, canvasId, para.arrElementId[para.i],
          function () {
            para.i += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'query_group':
        objectName = 'elementGroup';
        parentRecord = [canvasId];
        condition = null;
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.arrGroupId = dbData.id;
              para.j = 0;
              para.nStep = 'showGroup';
            } else {
              para.nStep = 'query_canvas'
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;

      case 'showGroup':
        if (para.j === para.arrGroupId.length) {
          para.nStep = 'query_canvas';
          dbFlag += 1;
          break;
        }

        $this.showGroup(canvasId, para.arrGroupId[para.j],
          function () {
            para.j += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'query_canvas':
        objectName = 'canvas';
        parentRecord = [canvasId];
        condition = null;
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.arrSubCanvasId = dbData.id;
              para.k = 0;
              para.nStep = 'showSubCanvas';
            } else {
              para.nStep = 'end'
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;

      case 'showSubCanvas':
        if (para.k === para.arrSubCanvasId.length) {
          para.nStep = 'end';
          dbFlag += 1;
          break;
        }

        $this.showCanvas(para.arrSubCanvasId[para.k],
          function () {
            para.k += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCanvas(canvasId, successCallBack, errorCallBack)
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
 * 显示目标画布的视图，不包含内部其他要素
 * @private
 * @param parentId {string} 父画布id
 * @param canvasId {string} 目标画布id
 * @param successCallBack {successCallBack}
 * @param errorCallBack {errorCallBack}
 */
CGraph.prototype.showSelfCanvasView = function (parentId, canvasId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var $wrap;
  var $parent;
  var $root;
  var $canvas;
  var fnname = 'CGraph.prototype.showSelfCanvasView';

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
      case 'isParentExist':
        let $p = $($this.jqIdPrefix.canvas + parentId);
        if (parentId && $p.length === 0) {
          para.nStep = 'errorEnd';
        } else {
          para.nStep = 'query_canvas';
        }
        dbFlag += 1;
        break;
      case 'query_canvas':
        var fd = $this.mac.fd.canvas;
        objectName = 'canvas';
        dbData = {};
        dbData[$this.mac.fd.id] = [canvasId];
        dbData[fd.title] = [];
        dbData[fd.size] = [];
        dbData[fd.origin] = [];
        dbData[fd.style] = [];
        dbData[fd.attrib] = [];
        dbData[fd.nameStyle] = [];
        dbData[fd.nameOrigin] = [];
        dbData[fd.anchor] = [];
        dbData[fd.gridTemplate] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.title = dbData[fd.title][0];
            para.size = dbData[fd.size][0];
            para.origin = dbData[fd.origin][0];
            para.attrib = dbData[fd.attrib][0];
            para.style = dbData[fd.style][0];
            para.nameStyle = dbData[fd.nameStyle][0];
            para.nameOrigin = dbData[fd.nameOrigin][0];
            para.anchor = dbData[fd.anchor][0];
            para.gridTemplate = dbData[fd.gridTemplate][0];
            para.nStep = 'appendCanvasDiv';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showSelfCanvasView(parentId, canvasId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'appendCanvasDiv':
        if (parentId === '') {
          $root = $('#' + $this.wrapId + ' .rootCanvas');
          if ($root.length > 0) $root.remove();
          $this.initRootCanvasVariable();
          $wrap = $('#' + $this.wrapId);
          $wrap.append('<div id="' + $this.jsIdPrefix.canvas + canvasId + '"></div>');
          $this.rootCanvasId = canvasId;
          $this.getRootData(canvasId);
          $canvas = $($this.jqIdPrefix.canvas + canvasId);
          $canvas.addClass('rootCanvas canvas');
          $this.instance.setContainer($canvas[0]); // 设置主容器！
          $parent = $root.parent();
        } else {
          $parent = $($this.jqIdPrefix.canvas + parentId);
          $parent.append('<div id="' + $this.jsIdPrefix.canvas + canvasId + '" ></div>');
          $canvas = $($this.jqIdPrefix.canvas + canvasId);
          $canvas.addClass('subCanvas canvas');
        }

        // 画布样式
        if (para.style !== '') $canvas.css(para.style);
        if (para.gridTemplate !== '') {
          $canvas.css({
            'grid-template-rows'   : para.gridTemplate.row.join(' '),
            'grid-template-columns': para.gridTemplate.column.join(' '),
          });
        }

        var isNumber = $this.config.regExp.isNumber;

        // 画布尺寸
        if (para.size !== '' && para.size !== null && !$.isEmptyObject(para.size)) {
          $canvas[0].style.width = !!para.size.width.toString().match(isNumber)
            ? para.size.width + 'px' : para.size.width;
          $canvas[0].style.height = !!para.size.height.toString().match(isNumber)
            ? para.size.height + 'px' : para.size.height;
        }


        // 画布名称


        $canvas.append('<div class="canvasTitle">' + para.title + '</div>');
        if (para.title === '') $canvas.find('.canvasTitle').hide();
        if (para.nameStyle !== '') $canvas.find('.canvasTitle').css(para.nameStyle);

        if (para.nameOrigin !== '' && para.nameOrigin !== null && !$.isEmptyObject(para.nameOrigin)) {
          $canvas.find('.canvasTitle')[0].style.left = para.nameOrigin.left.toString().match(isNumber)
            ? para.nameOrigin.left + 'px' : para.nameOrigin.left;
          $canvas.find('.canvasTitle')[0].style.top = para.nameOrigin.top.toString().match(isNumber)
            ? para.nameOrigin.top + 'px' : para.nameOrigin.top;
        }

        $this.setDroppable();
        if (para.attrib.draggable) {
          $this.setDraggable($canvas);
          $this.lineMode.$draggable = $this.lineMode.$draggable.add($canvas);
        }
        $canvas.attr('tabindex', canvasId);
        $canvas.attr('data-draggable', para.attrib.draggable);
        $canvas.attr('data-titleSettable', para.attrib.titleSettable);
        $canvas.attr('data-resizable', para.attrib.resizable);

        // 设置锚点
        if (para.anchor !== '') {
          if ('type' in para.anchor && para.anchor.type.length > 0) {
            $this.setAnchor($this.config.mac.type.canvas, canvasId, para.anchor);
          }
        }

        // 定位
        if (para.origin !== '' && para.origin !== null && !$.isEmptyObject(para.origin)) {
          if ($parent.css('display') === 'grid') {
            para.nStep = 'setGridItemPosition';
          } else {
            $canvas[0].style.left = para.origin.left.toString().match(isNumber)
              ? para.origin.left + 'px' : para.origin.left;
            $canvas[0].style.top = para.origin.top.toString().match(isNumber)
              ? para.origin.top + 'px' : para.origin.top;
            para.nStep = 'end';
          }
        } else {
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'setGridItemPosition':
        $this.setGridItemPosition($this.config.mac.type.canvas, canvasId, para.origin.gridArea,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showSelfCanvasView(parentId, canvasId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'render':
        setTimeout(function () {
          para.nStep = 'end';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.showSelfCanvasView(parentId, canvasId, successCallBack, errorCallBack);
          }
        }, 0);
        break;
      case 'end':
        // if ($this.isLineMode !== '') $this.setLineModeCursor('1');
        $this.setLineModeCursor('1');
        $this.instance.repaintEverything();
        para.successCallBack('success');
        return;
      case 'errorEnd':
        let error = {};
        error.code = '';
        error.message = '父画布不存在！';
        console.log('showSelfCanvasView', error);
        para.errorCallBack(error);
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
 * @param parentType {string} 在视图层面，目标元件的父类型，可选项有'canvas' 和 'group'
 * @param parentId {string} 在视图层面，目标元件的父id，可能是画布id，也可能是组合id
 * @param elementId {string} 目标元件id
 * @param successCallBack {successCallBack}
 * @param errorCallBack {errorCallBack}
 */
CGraph.prototype.showSelfElementView = function (parentType, parentId, elementId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var $parent;
  var $element;
  var appendHtml;
  var $elementName;
  var fnname = 'CGraph.prototype.showSelfElementView';

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
      case 'query_element':
        var fd = $this.mac.fd.element;
        objectName = 'element';
        dbData = {};
        dbData[$this.mac.fd.id] = [elementId];
        dbData[fd.elementName] = [];
        dbData[fd.size] = [];
        dbData[fd.origin] = [];
        dbData[fd.style] = [];
        dbData[fd.attrib] = [];
        dbData[fd.nameStyle] = [];
        dbData[fd.nameOrigin] = [];
        dbData[fd.icon] = [];
        dbData[fd.form] = [];
        dbData[fd.content] = [];
        dbData[fd.anchor] = [];
        dbData[fd.groupNumber] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.elementName = dbData[fd.elementName][0];
            para.size = dbData[fd.size][0];
            para.origin = dbData[fd.origin][0];
            para.attrib = dbData[fd.attrib][0];
            para.style = dbData[fd.style][0];
            para.nameStyle = dbData[fd.nameStyle][0];
            para.nameOrigin = dbData[fd.nameOrigin][0];
            para.icon = dbData[fd.icon][0];
            para.form = dbData[fd.form][0];
            para.content = dbData[fd.content][0];
            para.anchor = dbData[fd.anchor][0];
            para.groupNumber = dbData[fd.groupNumber][0];
            para.nStep = 'isAlreadyExisted';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showSelfElementView(parentType, parentId, elementId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'isAlreadyExisted':
        para.isGroupElement = false;
        if (parentType === $this.config.mac.type.canvas) {
          $parent = $($this.jqIdPrefix.canvas + parentId);
        } else {
          para.isGroupElement = true;
          $parent = $($this.jqIdPrefix.group + parentId);
          if (para.groupNumber.toString() === '0') {
            $parent.attr('data-mainelementid', elementId);
          }
        }

        para.$parent = $parent;
        $element = $($this.jqIdPrefix.element + elementId);
        if ($element.length > 0) {
          para.nStep = 'setElement';
        } else {
          para.nStep = 'appendElementDiv';
        }

        if ($parent.length === 0) {
          para.nStep = 'errorEnd';
        }
        dbFlag += 1;
        break;
      case 'appendElementDiv':
        appendHtml = '<div class="element"';
        appendHtml += ' id="' + $this.jsIdPrefix.element + elementId + '"></div>';
        para.$parent.append(appendHtml);
        para.nStep = 'setElement';
        dbFlag += 1;
        break;
      case 'setElement':
        $element = $($this.jqIdPrefix.element + elementId);
        if (para.style !== '') $element.css(para.style);

        var isNumber = $this.config.regExp.isNumber;

        // 元件尺寸
        if (para.size !== '' && para.size !== null && !$.isEmptyObject(para.size)) {
          $element[0].style.width = !!para.size.width.toString().match(isNumber)
            ? para.size.width + 'px' : para.size.width;
          $element[0].style.height = !!para.size.height.toString().match(isNumber)
            ? para.size.height + 'px' : para.size.height;
        }


        // 元件名称
        $elementName = $element.find('.elementName');
        if ($elementName.length > 0) $elementName.remove();
        $element.append('<div class="elementName">' + para.elementName + '</div>');
        $elementName = $element.find('.elementName');
        if (para.elementName === '') $elementName.hide();
        if (para.nameStyle !== '') $elementName.css(para.nameStyle);
        if (para.nameOrigin !== '' && para.nameOrigin !== null && !$.isEmptyObject(para.nameOrigin)) {
          $elementName[0].style.left = para.nameOrigin.left.toString().match(isNumber)
            ? para.nameOrigin.left + 'px' : para.nameOrigin.left;
          $elementName[0].style.top = para.nameOrigin.top.toString().match(isNumber)
            ? para.nameOrigin.top + 'px' : para.nameOrigin.top;
        }


        if (para.attrib.draggable) {
          $this.setDraggable($element);
          $this.lineMode.$draggable = $this.lineMode.$draggable.add($element);
        }
        $element.attr('tabindex', elementId);
        $element.attr('data-draggable', para.attrib.draggable);
        $element.attr('data-nameSettable', para.attrib.nameSettable);
        $element.attr('data-resizable', para.attrib.resizable);


        if (para.anchor !== '') {
          if ('type' in para.anchor && para.anchor.type.length > 0) {
            $this.setAnchor($this.config.mac.type.element, elementId, para.anchor);
          }
        }

        // icon
        // if (para.icon !== '' && (para.icon.arrPath[0] !== '' || para.icon.arrFile[0] !== '')) {
        if (para.content === '' && para.form === '') {
          $element[0].style.backgroundSize = '100%';
          if (para.icon.arrPath[0] !== '') {
            $element[0].style.backgroundImage = 'url(' + para.icon.arrPath[0] + ')';
            $element[0].style.backgroundRepeat = 'no-repeat';
          } else if (para.icon.arrFile[0] !== '') {
            $element[0].style.backgroundImage = 'url(' + para.icon.arrFile[0] + ')';
          }
        } else if (para.content !== '') {
          // content
          $element.append('<div class="elementContent">' + para.content + '</div>');
        } else if (para.form !== '') {
          // form
          // fixme
          var formType = $this.mac.enum.elementModule.form;
          if (para.form === formType.line) {
            $element.addClass('lineDrag');
          } else if (para.form === formType.rectangle) {
            $element.addClass('juxingDrag');
          } else if (para.form === formType.circular) {
            $element.height(parseInt(para.size.width));
            $element.addClass('circleDrag');
          } else if (para.form === formType.triangle) {
            $element.height(parseInt(para.size.width));
            $element.addClass('sanjiaoDrag');
          }
        }


        // 定位
        if (para.origin !== '' && para.origin !== null && !$.isEmptyObject(para.origin)) {
          if (para.$parent.css('display') === 'grid') {
            para.nStep = 'setGridItemPosition';
          } else {
            $element[0].style.left = para.origin.left.toString().match(isNumber)
              ? para.origin.left + 'px' : para.origin.left;
            $element[0].style.top = para.origin.top.toString().match(isNumber)
              ? para.origin.top + 'px' : para.origin.top;
            para.nStep = 'render';
          }
        } else {
          para.nStep = 'render';
        }
        dbFlag += 1;
        break;
      case 'setGridItemPosition':
        $this.setGridItemPosition($this.config.mac.type.element, elementId, para.origin.gridArea,
          function () {
            $this.setParentMinWidth(para.$parent);
            para.nStep = 'render';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showSelfElementView(parentType, parentId, elementId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'render':
        setTimeout(function () {
          para.nStep = 'end';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.showSelfElementView(parentType, parentId, elementId, successCallBack, errorCallBack);
          }
        }, 0);
        break;
      case 'end':
        // if (!para.isGroupElement && $this.isLineMode !== '') $this.setLineModeCursor('1');
        if (!para.isGroupElement) $this.setLineModeCursor('1');
        $this.instance.repaintEverything();
        para.successCallBack('success');
        return;
      case 'errorEnd':
        let error = {};
        error.code = '';
        error.message = '父画布不存在！';
        console.log('showSelfElementView', error);
        para.errorCallBack(error);
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};

CGraph.prototype.setParentMinWidth = function ($parent) {
  if ($parent.parent('.canvas').css('display') === 'grid') {
    let minWidth = $parent.width();
    $parent.css('min-width', minWidth + 'px');
  }
};


/**
 * @private
 * @param parentId {string} 在视图层面，目标元件的父画布id
 * @param groupId {string} 目标组合id
 * @param successCallBack {successCallBack}
 * @param errorCallBack {errorCallBack}
 */
CGraph.prototype.showSelfGroupView = function (parentId, groupId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var $parent;
  var $group;
  var appendHtml;
  var fnname = 'CGraph.prototype.showSelfGroupView';

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
      case 'isParentExist':
        let $p = $($this.jqIdPrefix.canvas + parentId);
        if ($p.length === 0) {
          para.nStep = 'errorEnd';
        } else {
          para.nStep = 'query_group';
        }
        dbFlag += 1;
        break;
      case 'query_group':
        var fd = $this.mac.fd.elementGroup;
        objectName = 'elementGroup';
        dbData = {};
        dbData[$this.mac.fd.id] = [groupId];
        dbData[fd.size] = [];
        dbData[fd.origin] = [];
        dbData[fd.attrib] = [];
        dbData[fd.style] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.size = dbData[fd.size][0];
            para.origin = dbData[fd.origin][0];
            para.attrib = dbData[fd.attrib][0];
            para.style = dbData[fd.style][0];
            para.nStep = 'isAlreadyExisted';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showSelfGroupView(parentId, groupId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'isAlreadyExisted':
        $group = $($this.jqIdPrefix.group + groupId);
        if ($group.length > 0) {
          para.nStep = 'setGroup';
        } else {
          para.nStep = 'appendGroupDiv';
        }
        dbFlag += 1;
        break;
      case 'appendGroupDiv':
        $parent = $($this.jqIdPrefix.canvas + parentId);
        appendHtml = '<div class="group"';
        appendHtml += ' id="' + $this.jsIdPrefix.group + groupId + '"></div>';
        $parent.append(appendHtml);
        para.$parent = $parent;
        para.nStep = 'setGroup';
        dbFlag += 1;
        break;
      case 'setGroup':
        $group = $($this.jqIdPrefix.group + groupId);
        if (para.style !== '') $group.css(para.style);

        var isNumber = $this.config.regExp.isNumber;

        // 组合尺寸
        if (para.size !== '' && para.size !== null && !$.isEmptyObject(para.size)) {
          $group[0].style.width = !!para.size.width.toString().match(isNumber)
            ? para.size.width + 'px' : para.size.width;
          $group[0].style.height = !!para.size.height.toString().match(isNumber)
            ? para.size.height + 'px' : para.size.height;
        }

        if (para.attrib.draggable) {
          $this.setDraggable($group);
          $this.lineMode.$draggable = $this.lineMode.$draggable.add($group);
        }
        $group.attr('tabindex', groupId);
        $group.attr('data-draggable', para.attrib.draggable);
        $group.attr('data-nameSettable', para.attrib.nameSettable);
        $group.attr('data-resizable', para.attrib.resizable);

        // 定位
        if (para.origin !== '' && para.origin !== null && !$.isEmptyObject(para.origin)) {
          if (para.$parent.css('display') === 'grid') {
            para.nStep = 'setGridItemPosition';
          } else {
            $group[0].style.left = para.origin.left.toString().match(isNumber)
              ? para.origin.left + 'px' : para.origin.left;
            $group[0].style.top = para.origin.top.toString().match(isNumber)
              ? para.origin.top + 'px' : para.origin.top;
          }
          para.nStep = 'render';
        } else {
          para.nStep = 'render';
        }
        dbFlag += 1;
        break;
      case 'setGridItemPosition':
        $this.setGridItemPosition($this.config.mac.type.group, groupId, para.origin.gridArea,
          function () {
            para.nStep = 'render';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showSelfGroupView(parentId, groupId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'render':
        setTimeout(function () {
          para.nStep = 'end';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.showSelfGroupView(parentId, groupId, successCallBack, errorCallBack);
          }
        }, 0);
        break;
      case 'end':
        // if ($this.isLineMode !== '') $this.setLineModeCursor('1');
        $this.setLineModeCursor('1');
        $this.instance.repaintEverything();
        para.successCallBack('success');
        return;
      case 'errorEnd':
        let error = {};
        error.code = '';
        error.message = '父画布不存在！';
        console.log('showSelfGroupView', error);
        para.errorCallBack(error);
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
 *
 * @private
 * @description 根据数据库显示指定连线，有转折点和无转折点的
 * @param lineId {string} 连线id
 * @param successCallBack {successCallBack}
 * @param errorCallBack {errorCallBack}
 */
CGraph.prototype.showLine = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var index;
  var fnname = 'CGraph.prototype.showLine';

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
      case 'hasMap':
        index = $this.map.lineId.indexOf(lineId);
        var $line = $('svg.jtk-connector[data-line=' + lineId + ']');
        if ($line.length > 0) { // 连线是否已经存在
          para.nStep = 'end';
        } else if (index < 0) {
          para.nStep = 'pushMap';
        } else {
          para.nStep = 'isStartEndExist';
        }
        dbFlag += 1;
        break;
      case 'pushMap':
        $this.pushMap(lineId, function () {
          para.nStep = 'isStartEndExist';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.showLine(lineId, successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case 'isStartEndExist':
        var $start;
        var $end;
        index = $this.map.lineId.indexOf(lineId);
        if ($this.map.startType[index] === $this.config.mac.type.canvas) {
          $start = $($this.jqIdPrefix.canvas + $this.map.startId[index])
        } else {
          $start = $($this.jqIdPrefix.element + $this.map.startId[index])
        }

        if ($this.map.endType[index] === $this.config.mac.type.canvas) {
          $end = $($this.jqIdPrefix.canvas + $this.map.endId[index])
        } else {
          $end = $($this.jqIdPrefix.element + $this.map.endId[index])
        }

        if ($start.length > 0 && $end.length > 0) {
          para.index = index;
          para.nStep = 'isDotsExist';
        } else {
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'isDotsExist':
        var $startDot = $($this.jqIdPrefix.dot + $this.map.startDotId[para.index]);
        var $endDot = $($this.jqIdPrefix.dot + $this.map.endDotId[para.index]);
        if ($startDot.length > 0 && $endDot.length > 0) {
          para.nStep = 'connectorType';
        } else {
          para.nStep = 'addDot';
        }
        dbFlag += 1;
        break;
      case 'addDot':
        $this.addDot(lineId, function () {
          para.nStep = 'connectorType';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.showLine(lineId, successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case 'connectorType':
        // para.index = $this.map.lineId.indexOf(lineId);
        var connectorType = $this.map.connectorType[para.index];
        var macConnectorType = $this.config.mac.lineStyle.connectorType;
        if (connectorType === macConnectorType.bezier
          || connectorType === macConnectorType.straight
          || connectorType === macConnectorType.flowchart
          || connectorType === macConnectorType.stateMachine) {
          $this.turningPoint.line[lineId] = [];
        }
        para.nStep = 'hasTurningPoint';
        dbFlag += 1;
        break;
      case 'hasTurningPoint':
        // $this.deleteLineView([lineId]);
        if (lineId in $this.turningPoint.line) {
          if ($this.turningPoint.line[lineId].length > 0) {
            para.nStep = 'call_showCombinedLine';
          } else {
            para.nStep = 'call_showSingleLine';
          }
        } else {
          $this.turningPoint.line[lineId] = [];
          para.nStep = 'newTurningPoint';
        }
        dbFlag += 1;
        break;
      case 'newTurningPoint':
        $this.newTurningPoint(lineId, function () {
          if ($this.turningPoint.line[lineId].length > 0) {
            para.nStep = 'call_showCombinedLine';
          } else {
            para.nStep = 'call_showSingleLine';
          }
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.showLine(lineId, successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case 'call_showCombinedLine':
        $this.showCombinedLine(lineId, function () {
          para.nStep = 'render';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.showLine(lineId, successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case 'call_showSingleLine':
        $this.showSingleLine(lineId, function () {
          para.nStep = 'render';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.showLine(lineId, successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case 'render':
        setTimeout(function () {
          para.nStep = 'end';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.showLine(lineId, successCallBack, errorCallBack);
          }
        }, 0);
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
 * 删除指定画布，包括画布内所有元素
 * @param canvasId {string} - 画布 Id
 * @param successCallBack {successCallBack} - 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.deleteCanvas = function (canvasId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var record;
  var fnname = 'CGraph.prototype.deleteCanvas';

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
      case 'query_canvas_exist':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [canvasId];
        $this.api.recordRead(objectName, dbData,
          function (result) {
            if (result[0] === '0') {
              para.nStep = 'end';
            } else {
              para.nStep = 'query_element';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'query_element':
        var fd = $this.mac.fd.element;
        objectName = 'element';
        parentRecord = [canvasId];
        condition = fd.elementGroupId + '=""';
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id > 0) {
              para.arrElementId = dbData.id;
              para.i = 0;
              para.nStep = 'deleteElement';
            } else {
              para.nStep = 'query_group';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'deleteElement':
        if (para.i === para.arrElementId.length) {
          para.nStep = 'query_group';
          dbFlag += 1;
          break;
        }
        $this.deleteElement(para.arrElementId[para.i],
          function () {
            para.i += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'query_group':
        objectName = 'elementGroup';
        parentRecord = [canvasId];
        condition = null;
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.arrGroupId = dbData.id;
              para.nStep = 'deleteGroup';
              para.j = 0;
            } else {
              para.nStep = 'query_canvas'
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'deleteGroup':
        if (para.j === para.arrGroupId.length) {
          para.nStep = 'query_canvas';
          dbFlag += 1;
          break;
        }
        $this.deleteGroup(para.arrGroupId[para.j],
          function () {
            para.j += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'query_canvas':
        objectName = 'canvas';
        parentRecord = [canvasId];
        condition = null;
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.arrSubCanvasId = dbData.id;
              para.nStep = 'deleteSubCanvas';
              para.k = 0;
            } else {
              para.nStep = 'deleteSelfCanvas'
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'deleteSubCanvas':
        if (para.k === para.arrSubCanvasId.length) {
          para.nStep = 'deleteSelfCanvas';
          dbFlag += 1;
          break;
        }
        $this.deleteCanvas(para.arrSubCanvasId[para.k],
          function () {
            para.k += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteCanvas(canvasId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'deleteSelfCanvas':
        $this.deleteCanvasView(canvasId);
        objectName = 'canvas';
        record = [canvasId];
        $this.api.recordDelete(objectName, record,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteCanvas(canvasId, successCallBack, errorCallBack)
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
 * 删除指定元件
 * @param elementId {string} - 元件 Id
 * @param successCallBack {successCallBack} - 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.deleteElement = function (elementId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var fnname = "CGraph.prototype.deleteElement";

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
      case 'query_element':
        objectName = 'element';
        dbData = {};
        dbData.id = [elementId];
        $this.api.recordRead(objectName, dbData,
          function (result) {
            if (result[0] === '0') {
              para.nStep = 'end';
            } else {
              para.nStep = 'getLineId';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteElement(elementId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'getLineId':
        para.arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, elementId).self;
        if (para.arrLineId.length > 0) {
          para.i = 0;
          para.nStep = 'deleteLine';
        } else {
          para.nStep = 'deleteElement';
        }
        dbFlag += 1;
        break;
      case 'deleteLine':
        $this.deleteLine(para.arrLineId,
          function () {
            para.nStep = 'deleteElement';
            if (++dbFlag === 2) {
              $this.deleteElement(elementId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'deleteElement':
        $this.deleteElementView(elementId);
        objectName = 'element';
        $this.api.recordDelete(objectName, [elementId],
          function () {
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.deleteElement(elementId, successCallBack, errorCallBack)
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
 * 删除指定组合
 * @param groupId {string} - 组合 Id
 * @param successCallBack {successCallBack} - 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.deleteGroup = function (groupId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = "CGraph.prototype.newGroupWithTemplate";

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
      case 'query_group':
        objectName = 'elementGroup';
        dbData = {};
        dbData.id = [groupId];
        $this.api.recordRead(objectName, dbData,
          function (result) {
            if (result[0] === '0') {
              para.nStep = 'end';
            } else {
              para.nStep = 'query_element';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteGroup(groupId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'query_element':
        objectName = 'element';
        parentRecord = null;
        condition = $this.mac.fd.element.elementGroupId + '=' + groupId;
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.arrElementId = dbData.id;
              para.i = 0;
              para.nStep = 'deleteElement';
            } else {
              para.nStep = 'deleteSelfGroup';
            }
            if (++dbFlag === 2) {
              $this.deleteGroup(groupId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'deleteElement':
        if (para.i === para.arrElementId.length) {
          para.nStep = 'deleteSelfGroup';
          dbFlag++;
          break;
        }
        $this.deleteElement(para.arrElementId[para.i],
          function () {
            para.i += 1;
            if (++dbFlag === 2) {
              $this.deleteGroup(groupId, successCallBack, errorCallBack)
            }
          }, para.errorCallBack);
        break;
      case 'deleteSelfGroup':
        $this.deleteGroupView(groupId);
        objectName = 'elementGroup';
        $this.api.recordDelete(objectName, [groupId],
          function () {
            para.nStep = 'end';
            if (++dbFlag === 2) {
              $this.deleteGroup(groupId, successCallBack, errorCallBack)
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


/**
 * 清除画布视图，不删除数据库记录
 * @public
 * @param canvasId {string} 要被清除的画布 id
 */
CGraph.prototype.removeCanvasView = function (canvasId) {
  var $this = this;
  $this.deleteCanvasView(canvasId);
};


CGraph.prototype.deleteCanvasView = function (canvasId) {
  var $this = this;
  var $canvas = $($this.jqIdPrefix.canvas + canvasId);
  if ($canvas.length === 0) return;
  if ($canvas.hasClass('rootCanvas')) {
    $this.lineMode.$draggable = $this.lineMode.$draggable.not($canvas);
    $canvas.remove();
    return;
  }
  var $group = $canvas.find('.group');
  var $element = $canvas.find('.element');
  var $subCanvas = $canvas.find('.canvas');
  var t = $this.config.mac.type.canvas;
  var arrLineId = $this.getLineIdOfFactor(t, canvasId).all;
  $this.deleteLineView(arrLineId);

  $element.each(function () {
    var elemntId = $(this).attr('id').replace($this.jsIdPrefix.element, '');
    $this.deleteElementView(elemntId);
  });
  $group.each(function () {
    var groupId = $(this).attr('id').replace($this.jsIdPrefix.group, '');
    $this.deleteGroupView(groupId);
  });

  // $canvas.remove();
  $this.instance.remove($canvas);
  $this.instance.repaintEverything();
  $this.lineMode.$draggable = $this.lineMode.$draggable.not($subCanvas);
  $this.lineMode.$draggable = $this.lineMode.$draggable.not($canvas);
};


CGraph.prototype.deleteGroupView = function (groupId) {
  var $this = this;
  var $group = $($this.jqIdPrefix.group + groupId);
  var $element = $group.find('.element');
  $element.each(function () {
    var elementId = $(this).attr('id').replace($this.jsIdPrefix.element, '');
    $this.deleteElementView(elementId);
  });
  $this.lineMode.$draggable = $this.lineMode.$draggable.not($group);
  $group.remove();
  $this.instance.repaintEverything();
};


/**
 * @private
 * @description 删除元件的视图，包含元件相关的连接点和连线的视图
 * @param elementId {string} 元件id
 */
CGraph.prototype.deleteElementView = function (elementId) {
  var $this = this;
  var $element;
  var arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, elementId).self;
  $this.deleteLineView(arrLineId);

  $element = $($this.jqIdPrefix.element + elementId);
  $this.lineMode.$draggable = $this.lineMode.$draggable.not($element);
  $this.instance.remove($element);
  $this.setParentMinWidth($element.parent());
  $this.instance.repaintEverything();
};


/**
 * @private
 * @description 批量删除连线的视图
 * @param arrLineId {array} 连线id数组
 */
CGraph.prototype.deleteLineView = function (arrLineId) {
  var $this = this;
  var strJoint;

  if (arrLineId.length > 0) {
    arrLineId.forEach(function (id) {
      var index = $this.map.lineId.indexOf(id);
      var $line = $('#' + $this.wrapId + ' [data-line=' + id + ']');
      if ($line.length > 1) {
        strJoint = $line.attr('data-joint');
        JSON.parse(strJoint).forEach(function (jointId) {
          $this.instance.remove($('#' + jointId));
        });
      } else if ($line.length === 1) {
        $this.instance.deleteConnection($this.map.connection[index][0]);
      }
      $this.map.connection[index] = [];
    });
    $this.instance.repaintEverything();
  }
};


/**
 * 批量删除连线，包括数据库记录和视图
 * @param arrLineId {array} 连线id数组
 * @param successCallBack {successCallBack} 无返回值
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.deleteLine = function (arrLineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var record;

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
      case 'delete_line':
        $this.deleteLineView(arrLineId);
        objectName = 'line';
        record = arrLineId;
        $this.api.recordDelete(objectName, record,
          function () {
            para.nStep = 'deleteMap';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteLine(arrLineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'deleteMap':
        para.startDotId = [];
        para.endDotId = [];
        arrLineId.forEach(function (v) {
          var i = $this.map.lineId.indexOf(v);
          if (i > -1) {
            para.startDotId.push($this.map.startDotId[i]);
            para.endDotId.push($this.map.endDotId[i]);
            $this.map.lineId.splice(i, 1);
            $this.map.name.splice(i, 1);
            $this.map.startType.splice(i, 1);
            $this.map.startId.splice(i, 1);
            $this.map.endType.splice(i, 1);
            $this.map.endId.splice(i, 1);
            $this.map.startDotId.splice(i, 1);
            $this.map.endDotId.splice(i, 1);
            $this.map.connection.splice(i, 1);
          }

        });
        para.nStep = 'getDelDot';
        dbFlag += 1;
        break;
      case 'getDelDot':
        para.delDot = [];
        para.startDotId.forEach(function (v) {
          var i = $this.map.startDotId.indexOf(v);
          if (i < 0) para.delDot.push(v);
        });
        para.endDotId.forEach(function (v) {
          var i = $this.map.endDotId.indexOf(v);
          if (i < 0) para.delDot.push(v);
        });
        if (para.delDot.length > 0) {
          para.nStep = 'delete_dot';
        } else {
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'delete_dot':
        para.delDot.forEach(function (v) {
          $($this.jqIdPrefix.dot + v).remove();
          $this.anchor.start.forEach(function (s) {
            s.dotId.forEach(function (sd, i, arr) {
              if (sd === v) arr[i] = '';
            });
          });
          $this.anchor.end.forEach(function (e) {
            e.dotId.forEach(function (ed, i, arr) {
              if (ed === v) arr[i] = '';
            });
          });
        });
        objectName = 'dot';
        record = para.delDot;
        $this.api.recordDelete(objectName, record,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteLine(arrLineId, successCallBack, errorCallBack);
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


CGraph.prototype.getLineIdOfFactor = function (type, id) {
  var $this = this;
  var $all = $();
  var $self;
  var t = $this.config.mac.type;
  var lineId = {};
  lineId.all = [];
  lineId.self = [];

  switch (type) {
    case t.canvas:
      $self = $($this.jqIdPrefix.canvas + id);
      $all = $all.add($self);
      $all = $all.add($self.find('.canvas'));
      $all = $all.add($self.find('.element'));
      break;
    case t.group:
      $self = $($this.jqIdPrefix.group + id);
      $all = $all.add($self.find('.element'));
      break;
    case t.element:
      $self = $($this.jqIdPrefix.element + id);
      $all = $self;
      break;
  }

  function getLineId($target) {
    var arrLineId = [];
    $target.each(function () {
      var ct;
      var cid;
      if ($(this).hasClass('canvas')) {
        ct = $this.config.mac.type.canvas;
        cid = $(this).attr('id').replace($this.jsIdPrefix.canvas, '');
      } else {
        ct = $this.config.mac.type.element;
        cid = $(this).attr('id').replace($this.jsIdPrefix.element, '');
      }

      $this.map.lineId.forEach(function (v, i) {
        if (($this.map.startType[i] === ct
          && $this.map.startId[i] === cid)
          || ($this.map.endType[i] === ct
            && $this.map.endId[i] === cid)) {
          arrLineId.push(v);
        }
      });
    });
    return arrLineId;
  }

  lineId.all = getLineId($all);
  lineId.self = getLineId($self);

  return lineId;
};

/**
 * 设置元素名称
 * @public
 * @param type {string} - 元素类型
 * @param id {string} - 元素 id
 * @param name {string} - 元素标题或名称
 * @param successCallBack {successCallBack} 无返回值
 * @param errorCallBack {errorCallBack} 返回错误信息
 */
CGraph.prototype.setName = function (type, id, name, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var fnname = 'CGraph.prototype.setName';

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
      case 'dom':
        var $target;
        var t = $this.config.mac.type;
        switch (type) {
          case t.canvas:
            $target = $($this.jqIdPrefix.canvas + id);
            // if ($target.data('titleSettable')) {
            if (JSON.parse($target.attr('data-titleSettable'))) {
              $target.find('.canvasTitle').text(name);
              para.canvasId = id;
              para.nStep = 'modify_canvas';
            } else {
              para.nStep = 'end';
            }
            break;
          case t.group:
            $target = $($this.jqIdPrefix.group + id);
            if (JSON.parse($target.attr('data-nameSettable'))) {
              var mainElementId = $target.attr('data-mainelementid');
              var $mainElement = $($this.jqIdPrefix.element + mainElementId);
              $mainElement.find('.elementName').text(name);
              para.groupId = id;
              para.elementId = mainElementId;
              para.nStep = 'modify_group';
            } else {
              para.nStep = 'end';
            }
            break;
          case t.element:
            $target = $($this.jqIdPrefix.element + id);
            if (JSON.parse($target.attr('data-nameSettable'))) {
              $target.find('.elementName').text(name);
              para.elementId = id;
              para.nStep = 'modify_element';
            } else {
              para.nStep = 'end';
            }
            break;
          case t.line:
            var $line = $('svg.jtk-connector[data-line=' + id + ']');
            if (JSON.parse($line.attr('data-nameSettable'))) {
              var index = $this.map.lineId.indexOf(id);
              var connection = $this.map.connection[index];
              connection.forEach(function (v) {
                var label = v.getOverlay(id);
                if (label) {
                  v.showOverlay(id);
                  label.setLabel(name);
                }
              });

              $this.map.name[index] = name;
              para.lineId = id;
              para.nStep = 'modify_line';
            } else {
              para.nStep = 'end';
            }
            break;
          default:
            para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'modify_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [para.canvasId];
        dbData[$this.mac.fd.canvas.title] = [name];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.setName(type, id, name, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_group':
        objectName = 'elementGroup';
        dbData = {};
        dbData.id = [para.groupId];
        dbData[$this.mac.fd.elementGroup.name] = [name];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'modify_element';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.setName(type, id, name, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_element':
        objectName = 'element';
        dbData = {};
        dbData.id = [para.elementId];
        dbData[$this.mac.fd.element.elementName] = [name];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.setName(type, id, name, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_line':
        objectName = 'line';
        dbData = {};
        dbData.id = [para.lineId];
        dbData[$this.mac.fd.line.name] = [name];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.setName(type, id, name, successCallBack, errorCallBack);
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