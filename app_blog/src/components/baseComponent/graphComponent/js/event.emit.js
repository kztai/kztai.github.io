/* eslint-disable */

function CGraph() {
};

CGraph.prototype.lineModeContextMenuEvents = function (parentId, type, id) {
  var $this = this;
  var t = $this.config.mac.type;
  var h = $this.highlightBorder;
  var jsIdPrefix;
  var info = {};

  if (type === t.canvas) {
    jsIdPrefix = $this.jsIdPrefix.canvas;
  } else if (type === t.element) {
    jsIdPrefix = $this.jsIdPrefix.element;
  }

  var highlight = h.id.some(function (sid, i) {
    return h.type[i] === type && sid === id;
  });
  if (highlight) {
    if ($this.linePair.length === 1) {
      if ($this.linePair[0].type === t.canvas) {
        info.sourceId = $this.jsIdPrefix.canvas + $this.linePair[0].id;
      } else if ($this.linePair[0].type === t.element) {
        info.sourceId = $this.jsIdPrefix.element + $this.linePair[0].id;
      }
      info.targetId = jsIdPrefix + id;
      $this.selectByEvent(type, id);

      $this.linePair = [];
      $this.lineCompleteEvents(info,
        function () {
          $this.unselectAll();
        },
        function () {

        });
    } else {
      $this.selectByEvent(type, id);
      $this.linePair.push({
        type: type,
        id  : id,
      });
      $this.startSelectEvent(parentId, type, id, function () {

      }, function () {

      });
    }
  } else {
    $this.unselectAll();
    if ($this.linePair.length > 0) {
      $this.linePair = [];
      $this.startDeselectEvent(parentId, type, id, function () {

      }, function () {

      });
    }

  }
};

// output: startDotSelectEvent
CGraph.prototype.emitStartDotSelectEvent = function ($startDot) {
  var $this = this;
  var $parent;
  var location;
  var number;
  var parentId;

  $parent = $('#' + $startDot.attr('data-parentid'));
  location = $startDot.attr('data-loc');
  number = $startDot.attr('data-n');
  if ($parent.hasClass('canvas')) {
    parentId = $parent.attr('id').replace($this.jsIdPrefix.canvas, '');
    $this.startDotSelectEvent(parentId, '', location, number,
      function () {

      },
      function () {

      });
  } else if ($parent.hasClass('element')) {
    parentId = $parent.attr('id').replace($this.jsIdPrefix.element, '');
    $this.startDotSelectEvent('', parentId, location, number,
      function () {

      },
      function () {

      });
  }
};

CGraph.prototype.emitStartDotUnselectEvent = function () {
  var $this = this;
  $this.dotPair = [];
  // console.log('output: beforeConnect ' + JSON.stringify($this.dotPair));
  $this.isDotSelectComplete = true;
  $this.instance.selectEndpoints()
    .removeType('selected');
  // $this.event_dotSelectCancel();
}


CGraph.prototype.dragStartEvents = function (e, ui, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var d = $this.dragging;
  var fnname = 'CGraph.prototype.dragStartEvents';

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
      case 'init':
        if ($(ui.helper).hasClass('rootCanvas')) {
          para.nStep = 'end';
        } else {
          if ($(ui.helper).hasClass('canvas') && $(ui.helper).parent().hasClass('canvas')) {
            para.$target = $(ui.helper);
            d.overCanvasId = para.$target.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
            d.type = $this.config.mac.type.canvas;
            d.id = para.$target.attr('id').replace($this.jsIdPrefix.canvas, '');
            d.$dragging = para.$target;
            d.$ancestor = para.$target.parentsUntil('body');
            para.nStep = 'canvasDragStartEvent';
          } else if ($(ui.helper).hasClass('group')) {
            para.$target = $(ui.helper);
            d.overCanvasId = para.$target.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
            d.type = $this.config.mac.type.group;
            d.id = para.$target.attr('id').replace($this.jsIdPrefix.group, '');
            d.$dragging = para.$target;
            d.$ancestor = para.$target.parentsUntil('body');
            para.nStep = 'groupDragStartEvent';
          } else if ($(ui.helper).hasClass('element') && $(ui.helper).parent().hasClass('canvas')) {
            para.$target = $(ui.helper);
            d.overCanvasId = para.$target.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
            d.type = $this.config.mac.type.element;
            d.id = $(ui.helper).attr('id').replace($this.jsIdPrefix.element, '');
            d.$dragging = para.$target;
            d.$ancestor = para.$target.parentsUntil('body');
            para.nStep = 'elementDragStartEvent';
          } else if ($(ui.helper).hasClass('element') && $(ui.helper).parent().hasClass('group')) {
            para.$target = $(ui.helper).parent();
            d.overCanvasId = para.$target.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
            d.type = $this.config.mac.type.group;
            d.id = para.$target.attr('id').replace($this.jsIdPrefix.group, '');
            d.$dragging = para.$target;
            d.$ancestor = para.$target.parentsUntil('body');
            para.nStep = 'groupDragStartEvent';
          }
          d.isSelfOverExclude = false;
          d.stack = [''];
          var arr = [];
          para.$target.parents('.canvas').each(function () {
            arr.push($(this).attr('id').replace($this.jsIdPrefix.canvas, ''));
          });
          arr.reverse();
          d.stack = d.stack.concat(arr);


          // var selection = {
          //   type: [$this.config.mac.type.canvas],
          //   id  : [d.overCanvasId],
          // };
          // $this.selectByCommand(selection);
          // $this.setBorderHighlight($this.config.mac.type.canvas, d.overCanvasId);
          $this.dragStartParentId = d.overCanvasId;
          $this.dragging.isTemplate = false;
          $this.dragging.isDragging = true;
        }
        dbFlag += 1;
        break;
      case 'canvasDragStartEvent':
        $this.canvasDragStartEvent($this.dragStartParentId, d.id,
          function () {
            para.nStep = 'showDashedLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.dragStartEvents(e, ui, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'groupDragStartEvent':
        $this.groupDragStartEvent($this.dragStartParentId, d.id,
          function () {
            dbFlag += 1;
            para.nStep = 'showDashedLine';
            if (dbFlag === 2) {
              $this.dragStartEvents(e, ui, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'elementDragStartEvent':
        $this.elementDragStartEvent($this.dragStartParentId, d.id,
          function () {
            para.nStep = 'showDashedLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.dragStartEvents(e, ui, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'showDashedLine':
        $this.showDashedLine(d.type, d.id,
          function (result) {
            $this.arrLineId = result;
            // 提升被拖拽元素及其先辈层级
            $this.setDraggingLayer('1');
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.dragStartEvents(e, ui, successCallBack, errorCallBack);
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
 * @description 拖拽过程中改变被拖拽元素及相关连接点、连线的显示层级
 * @param option {number|string} 可选项 0-置顶，1-还原
 */
CGraph.prototype.setDraggingLayer = function (option) {
  // type,id 正在被拖拽元素的类型和id；option等于1时置顶，等于0时还原；
  var $this = this;
  var arrLine;

  // 如果拖拽释放后，被拖拽的元素 moveTo 其他的画布，无法再获取父辈
  var d = $this.dragging;
  var $p = d.$dragging.parent();

  if ($p.length > 0) {
    if (parseInt(option, 10) === 0) {
      d.$dragging.removeClass('topIndex');
      d.$ancestor.removeClass('topIndex');
    } else {
      d.$dragging.addClass('topIndex');
      d.$ancestor.addClass('topIndex');
    }
    if (d.id !== '') {
      arrLine = $this.getLineIdOfFactor(d.type, d.id).all;
      $('.dot[data-parentid=' + d.$dragging.attr('id') + ']').each(function () {
        var $dot = $(this);
        if (parseInt(option, 10) === 0) {
          $dot.removeClass('topIndex');
        } else {
          $dot.addClass('topIndex');
        }
      });
      arrLine.forEach(function (value) {
        var $line = $('svg.jtk-connector[data-line=' + value + ']');
        if (parseInt(option, 10) === 0) {
          $line.removeClass('topIndex');
        } else {
          $line.addClass('topIndex');
        }
      });

    }
  } else {
    if (parseInt(option, 10) === 0) {
      d.$ancestor.removeClass('topIndex');
    } else {
      d.$ancestor.addClass('topIndex');
    }
  }
};


CGraph.prototype.setTopIndex = function (type, id, option) {
  // type,id 正在被拖拽元素的类型和id；option等于1时置顶，等于0时还原；
  var $this = this;
  var arrLine;
  var $target;
  var t = $this.config.mac.type;

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
      $target = $('svg.jtk-connector[data-line=' + id + ']');
      break;
  }


  if (parseInt(option, 10) === 0) {
    $target.removeClass('topIndex');
  } else {
    $target.addClass('topIndex');
  }

  if (type !== t.line) {
    $target.find('.dot').each(function () {
      var $dot = $(this);
      if (parseInt(option, 10) === 0) {
        $dot.removeClass('topIndex');
      } else {
        $dot.addClass('topIndex');
      }
    });

    arrLine = $this.getLineIdOfFactor(type, id).all;
    arrLine.forEach(function (value) {
      var $line = $('svg.jtk-connector[data-line=' + value + ']');
      if (parseInt(option, 10) === 0) {
        $line.removeClass('topIndex');
      } else {
        $line.addClass('topIndex');
      }
    });
  }

};

CGraph.prototype.setHighlightIndex = function (type, id, option) {
  // type,id 正在被拖拽元素的类型和id；option等于1时置顶，等于0时还原；
  var $this = this;
  var arrLine;
  var $target;
  var t = $this.config.mac.type;

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
      $target = $('svg.jtk-connector[data-line=' + id + ']');
      break;
  }

  if (parseInt(option, 10) === 0) {
    if ($target.length > 0) {
      $target.removeClass('highlightIndex');
    } else {
      return;
    }
  } else {
    $target.addClass('highlightIndex');
  }

  if (type !== t.line) {
    $target.find('.dot').each(function () {
      var $dot = $(this);
      if (parseInt(option, 10) === 0) {
        $dot.removeClass('highlightIndex');
      } else {
        $dot.addClass('highlightIndex');
      }
    });

    arrLine = $this.getLineIdOfFactor(type, id).all;
    arrLine.forEach(function (value) {
      var $line = $('svg.jtk-connector[data-line=' + value + ']');
      if (parseInt(option, 10) === 0) {
        $line.removeClass('highlightIndex');
      } else {
        $line.addClass('highlightIndex');
      }
    });
  }

};


// output: canvasTemplateDropEvent, groupTemplateDropEvent, elementTemplateDropEvent
// output: canvasDropEvent, groupDropEvent, elementDropEvent
CGraph.prototype.dropEvents = function (e, ui, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var d = $this.dragging;
  var h;
  var isBorderHighlight = false;
  var $parent;
  var coord;
  var fnname = 'CGraph.prototype.dropEvents';

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
      case 'isLineMode':
        if ($this.isLineMode) {
          para.toRefreshLine = false;
          para.isNotAllowedDrop = true;
          para.nStep = 'end';
        } else {
          para.nStep = 'route';
        }
        dbFlag += 1;
        break;
      case 'route':
        if (d.overCanvasId !== '') {
          $parent = $($this.jqIdPrefix.canvas + d.overCanvasId);
          if ($parent.css('display') === 'grid') {
            coord = {
              x: e.pageX,
              y: e.pageY,
            };
            para.origin = {
              left    : e.pageX - $parent.offset().left,
              top     : e.pageY - $parent.offset().top,
              gridArea: $this.getGridCell(coord, d.overCanvasId),
            };
          } else {
            para.origin = {
              left    : e.pageX - $parent.offset().left,
              top     : e.pageY - $parent.offset().top,
              gridArea: [],
            };
          }
        }

        h = $this.highlightBorder;

        var enterStack = JSON.parse(JSON.stringify(d.stack)).reverse();
        enterStack.some(function (c) {
          var highlight = h.id.some(function (sid, i) {
            return h.type[i] === $this.config.mac.type.canvas && sid === c;
          });
          if (highlight) {
            isBorderHighlight = true;
            para.highlightCanvasId = c;
          }
          return highlight;
        });


        var t = $this.config.mac.type;

        if (d.isTemplate) {
          switch (d.templateType) {
            case t.canvas:
              if (isBorderHighlight) {
                para.nStep = 'canvasTemplateDropEvent';
              } else {
                para.isNotAllowedDrop = true;
                para.nStep = 'end';
              }
              break;
            case t.group:
              if (isBorderHighlight) {
                para.nStep = 'groupTemplateDropEvent';
              } else {
                para.isNotAllowedDrop = true;
                para.nStep = 'end';
              }
              break;
            case t.element:
              if (isBorderHighlight) {
                para.nStep = 'elementTemplateDropEvent';
              } else {
                para.isNotAllowedDrop = true;
                para.nStep = 'end';
              }
              break;
            default:
              break;
          }
        } else {
          switch (d.type) {
            case t.canvas:
              if (isBorderHighlight) {
                para.nStep = 'canvasDropEvent';
              } else {
                para.arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, d.id).all;
                para.isNotAllowedDrop = true;
                para.nStep = 'revert';
              }
              break;
            case t.group:
              if (isBorderHighlight) {
                para.nStep = 'groupDropEvent';
              } else {
                para.arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, d.id).all;
                para.isNotAllowedDrop = true;
                para.nStep = 'revert';
              }
              break;
            case t.element:
              if (isBorderHighlight) {
                para.nStep = 'elementDropEvent';
              } else {
                para.arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, d.id).all;
                para.isNotAllowedDrop = true;
                para.nStep = 'revert';
              }
              break;
            default:
              break;
          }
          $this.dragging.dashLine.forEach(function (d) {
            $this.instance.deleteConnection(d);
          });
          $this.dragging.dashLine = [];
        }
        dbFlag += 1;
        break;
      case 'canvasTemplateDropEvent':
        $this.canvasTemplateDropEvent(para.highlightCanvasId, para.origin,
          function (result) {
            para.isNotAllowedDrop = !result[0];
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.dropEvents(e, ui, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'groupTemplateDropEvent':
        $this.groupTemplateDropEvent(para.highlightCanvasId, para.origin,
          function (result) {
            para.isNotAllowedDrop = !result[0];
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.dropEvents(e, ui, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'elementTemplateDropEvent':
        $this.elementTemplateDropEvent(para.highlightCanvasId, para.origin,
          function (result) {
            para.isNotAllowedDrop = !result[0];
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.dropEvents(e, ui, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'canvasDropEvent':
        $this.canvasDropEvent(d.id, para.highlightCanvasId, para.origin,
          function (result) {
            para.arrLineId = $this.getLineIdOfFactor($this.config.mac.type.canvas, d.id).all;
            para.isNotAllowedDrop = !result[0];
            para.nStep = 'revert';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.dropEvents(e, ui, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'groupDropEvent':
        $this.groupDropEvent(d.id, para.highlightCanvasId, para.origin,
          function (result) {
            para.arrLineId = $this.getLineIdOfFactor($this.config.mac.type.group, d.id).all;
            para.isNotAllowedDrop = !result[0];
            para.nStep = 'revert';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.dropEvents(e, ui, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'elementDropEvent':
        $this.elementDropEvent(d.id, para.highlightCanvasId, para.origin,
          function (result) {
            para.arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, d.id).all;
            para.isNotAllowedDrop = !result[0];
            para.nStep = 'revert';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.dropEvents(e, ui, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'revert':
        if (para.isNotAllowedDrop) {
          para.toRefreshLine = true;
          // para.nStep = 'refreshLine';
        }
        para.nStep = 'end';
        dbFlag += 1;
        break;
      case 'refreshLine':
        $this.refreshLine(para.arrLineId, function () {
          para.nStep = 'end';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.dropEvents(e, ui, successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case 'end':
        var result = {
          isNotAllowedDrop: para.isNotAllowedDrop,
          toRefreshLine   : para.toRefreshLine,
          arrLineId       : para.arrLineId,
        };
        para.successCallBack(result);
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};

// output: canvasDeleteEvent, elementDeleteEvent, groupDeleteEvent, lineDeleteEvent
CGraph.prototype.deleteEvents0 = function (arrDelete, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var dbData;
  var $parent;
  var $group;
  var $element;
  var fnname = 'CGraph.prototype.deleteEvents';

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
        para.i = 0;
        if (arrDelete.includeLineId.length > 0) {
          para.m = 0;
          para.nStep = 'deleteLine_includeLine';
        } else {
          para.nStep = 'route';
        }
        dbFlag += 1;
        break;
      case 'deleteLine_includeLine':
        if (para.m === arrDelete.includeLineId.length) {
          para.nStep = 'route';
          dbFlag += 1;
          break;
        }
        $this.deleteLine([arrDelete.includeLineId[para.m]],
          function () {
            para.nStep = 'lineDeleteEvent_includeLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'lineDeleteEvent_includeLine':
        $this.lineDeleteEvent(arrDelete.includeLineId[para.m],
          function () {
            para.m += 1;
            para.nStep = 'deleteLine_includeLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'route':
        var t = $this.config.mac.type;
        switch (arrDelete.type[para.i]) {
          case t.canvas:
            if ($this.isLineMode) {
              para.nStep = 'end';
            } else {
              para.nStep = 'query_canvas';
            }
            break;
          case t.element:
            if ($this.isLineMode) {
              para.nStep = 'end';
            } else {
              para.nStep = 'query_element';
            }
            break;
          case t.group:
            if ($this.isLineMode) {
              para.nStep = 'end';
            } else {
              para.nStep = 'query_group';
            }
            break;
          case t.line:
            para.nStep = 'deleteLine';
            break;
          default:
            return;
        }
        dbFlag += 1;
        break;
      case 'query_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [arrDelete.id[para.i]];
        dbData[$this.mac.fd.canvas.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.origin = dbData[$this.mac.fd.canvas.origin][0];
            para.nStep = 'deleteCanvas';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'deleteCanvas':
        $this.deleteCanvas(arrDelete.id[para.i],
          function () {
            para.nStep = 'canvasDeleteEvent';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'canvasDeleteEvent':
        $this.canvasDeleteEvent(arrDelete.id[para.i], para.origin,
          function () {
            para.nStep = 'isSelectionLoopEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_element':
        objectName = 'element';
        dbData = {};
        dbData.id = [arrDelete.id[para.i]];
        dbData[$this.mac.fd.element.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.origin = dbData[$this.mac.fd.element.origin][0];
            para.nStep = 'deleteElement';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'deleteElement':
        $element = $($this.jqIdPrefix.element + arrDelete.id[para.i]);
        $parent = $element.parent();
        para.canvasId = $parent.attr('id').replace($this.jsIdPrefix.canvas, '');
        $this.deleteElement(arrDelete.id[para.i],
          function () {
            para.nStep = 'elementDeleteEvent';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'elementDeleteEvent':

        $this.elementDeleteEvent(para.canvasId, arrDelete.id[para.i], para.origin,
          function () {
            para.nStep = 'isSelectionLoopEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_group':
        objectName = 'elementGroup';
        dbData = {};
        dbData.id = [arrDelete.id[para.i]];
        dbData[$this.mac.fd.elementGroup.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.origin = dbData[$this.mac.fd.elementGroup.origin][0];
            para.nStep = 'deleteGroup';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'deleteGroup':
        $group = $($this.jqIdPrefix.group + arrDelete.id[para.i]);
        $parent = $group.parent();
        para.canvasId = $parent.attr('id').replace($this.jsIdPrefix.canvas, '');
        $this.deleteGroup(arrDelete.id[para.i],
          function () {
            para.nStep = 'groupDeleteEvent';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'groupDeleteEvent':
        $this.groupDeleteEvent(para.canvasId, arrDelete.id[para.i], para.origin,
          function () {
            para.nStep = 'isSelectionLoopEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'deleteLine':
        $this.deleteLine([arrDelete.id[para.i]],
          function () {
            para.nStep = 'lineDeleteEvent';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'lineDeleteEvent':
        $this.lineDeleteEvent(arrDelete.id[para.i],
          function () {
            para.nStep = 'isSelectionLoopEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'isSelectionLoopEnd':
        para.i += 1;
        if (para.i === arrDelete.id.length) {
          $this.unselect();
          para.nStep = 'end';
        } else {
          para.nStep = 'route';
        }
        dbFlag += 1;
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


CGraph.prototype.deleteEvents = function (arrDelete, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var dbData;
  var $parent;
  var $group;
  var $element;
  var fnname = 'CGraph.prototype.deleteEvents';

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
        para.i = 0;
        para.nStep = 'route';
        dbFlag += 1;
        break;
      case 'route':
        var t = $this.config.mac.type;
        switch (arrDelete.type[para.i]) {
          case t.canvas:
            if ($this.isLineMode) {
              para.nStep = 'end';
            } else {
              para.nStep = 'query_canvas';
            }
            break;
          case t.element:
            if ($this.isLineMode) {
              para.nStep = 'end';
            } else {
              para.nStep = 'query_element';
            }
            break;
          case t.group:
            if ($this.isLineMode) {
              para.nStep = 'end';
            } else {
              para.nStep = 'query_group';
            }
            break;
          case t.line:
            para.nStep = 'lineDeleteEvent';
            break;
          default:
            return;
        }
        dbFlag += 1;
        break;
      case 'query_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [arrDelete.id[para.i]];
        dbData[$this.mac.fd.canvas.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.origin = dbData[$this.mac.fd.canvas.origin][0];
            para.nStep = 'canvasDeleteEvent';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'canvasDeleteEvent':
        // $this.canvasDeleteEvent(arrDelete.id[para.i], arrDelete.includeLineId, para.origin,
        $this.canvasDeleteEvent(arrDelete.id[para.i], para.origin,
          function () {
            para.nStep = 'isSelectionLoopEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_element':
        objectName = 'element';
        dbData = {};
        dbData.id = [arrDelete.id[para.i]];
        dbData[$this.mac.fd.element.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.origin = dbData[$this.mac.fd.element.origin][0];
            para.nStep = 'elementDeleteEvent';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'elementDeleteEvent':
        $element = $($this.jqIdPrefix.element + arrDelete.id[para.i]);
        $parent = $element.parent();
        para.canvasId = $parent.attr('id').replace($this.jsIdPrefix.canvas, '');
        // $this.elementDeleteEvent(para.canvasId, arrDelete.id[para.i], arrDelete.includeLineId, para.origin,
        $this.elementDeleteEvent(para.canvasId, arrDelete.id[para.i], para.origin,
          function () {
            para.nStep = 'isSelectionLoopEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_group':
        objectName = 'elementGroup';
        dbData = {};
        dbData.id = [arrDelete.id[para.i]];
        dbData[$this.mac.fd.elementGroup.origin] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.origin = dbData[$this.mac.fd.elementGroup.origin][0];
            para.nStep = 'groupDeleteEvent';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'groupDeleteEvent':
        $group = $($this.jqIdPrefix.group + arrDelete.id[para.i]);
        $parent = $group.parent();
        para.canvasId = $parent.attr('id').replace($this.jsIdPrefix.canvas, '');
        // $this.groupDeleteEvent(para.canvasId, arrDelete.id[para.i], arrDelete.includeLineId, para.origin,
        $this.groupDeleteEvent(para.canvasId, arrDelete.id[para.i], para.origin,
          function () {
            para.nStep = 'isSelectionLoopEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'lineDeleteEvent':
        $this.lineDeleteEvent(arrDelete.id[para.i],
          function () {
            para.nStep = 'isSelectionLoopEnd';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.deleteEvents(arrDelete, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'isSelectionLoopEnd':
        para.i += 1;
        if (para.i === arrDelete.id.length) {
          $this.unselect();
          para.nStep = 'end';
        } else {
          para.nStep = 'route';
        }
        dbFlag += 1;
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


// output: lineCompleteEvent
CGraph.prototype.lineCompleteEvents = function (info, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var objectName;
  var parentRecord;
  var dbData;
  var record;
  var dbFlag;
  var fnname = 'CGraph.prototype.lineCompleteEvents';

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
      case 'param':
        para.nStep = 'isLineExist';

        if ($('#' + info.sourceId).hasClass('canvas')) {
          para.startType = $this.config.mac.type.canvas;
          para.startId = info.sourceId.replace($this.jsIdPrefix.canvas, '');
        } else if ($('#' + info.sourceId).hasClass('element')) {
          para.startType = $this.config.mac.type.element;
          para.startId = info.sourceId.replace($this.jsIdPrefix.element, '');
        } else {
          para.nStep = 'end';
        }
        if ($('#' + info.targetId).hasClass('canvas')) {
          para.endType = $this.config.mac.type.canvas;
          para.endId = info.targetId.replace($this.jsIdPrefix.canvas, '');
        } else if ($('#' + info.targetId).hasClass('element')) {
          para.endType = $this.config.mac.type.element;
          para.endId = info.targetId.replace($this.jsIdPrefix.element, '');
        } else {
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'isLineExist':
        let lineMap = $this.root[$this.rootCanvasId].map;
        let isLineExist = lineMap.lineId.some(function (v, i) {
          return (lineMap.startType[i] === para.startType && lineMap.startId[i] === para.startId
            && lineMap.endType[i] === para.endType && lineMap.endId[i] === para.endId);
        });
        if (isLineExist) {
          $this.instance.deleteConnection(info.connection);
          para.nStep = 'end';
        } else {
          para.nStep = 'new_line';
        }
        dbFlag += 1;
        break;
      case 'new_line':
        objectName = 'line';
        parentRecord = $this.rootCanvasId;
        dbData = {};
        $this.api.recordNew(objectName, parentRecord, dbData,
          function () {
            para.lineId = dbData[$this.mac.fd.id][0];
            para.nStep = 'lineCompleteEvent';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.lineCompleteEvents(info, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'lineCompleteEvent':
        $this.lineCompleteEvent(para.lineId, para.startType, para.startId, para.endType, para.endId,
          function (result) {
            var line = result[0];
            para.templateId = line.templateId;
            para.name = line.name;
            para.direction = line.direction;
            para.attrib = line.attrib;
            if (para.templateId === '') {
              $this.instance.deleteConnection(info.connection);
              para.nStep = 'delete_line';
            } else {
              para.nStep = 'createLine';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.lineCompleteEvents(info, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'delete_line':
        objectName = 'line';
        record = [para.lineId];
        $this.api.recordDelete(objectName, record,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.lineCompleteEvents(info, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'createLine':
        $this.createLine(para.lineId, para.templateId, para.startType, para.startId, para.endType,
          para.endId, para.name, para.direction, para.attrib,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.lineCompleteEvents(info, successCallBack, errorCallBack);
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


CGraph.prototype.event_activateLineNameInput = function (connection, event) {
  var $this = this;
  var pos = {
    x: event.pageX,
    y: event.pageY,
  };

  var $root = $($this.jqIdPrefix.canvas + $this.rootCanvasId);
  var $line = $(connection.canvas);
  var lineId = $line.attr('data-line');
  if (JSON.parse($line.attr('data-nameSettable'))) {
    var index = $this.map.lineId.indexOf(lineId);
    var lineName = $this.map.name[index];
    var startCoord = $this.map.startAnchorCoord[index];
    var endCoord = $this.map.endAnchorCoord[index];
    var $input = $root.find('.lineNameInput');
    if ($input.length === 0) {
      $root.append('<input class="lineNameInput topIndex" spellcheck="false" maxlength=32 value="' + lineName + '">');
    } else {
      $input.show().val(lineName);
    }
    $input = $root.find('.lineNameInput');
    $input.focus().select();
    $input.css({
      left: (pos.x - $root.offset().left) + 'px',
      top : (pos.y - $root.offset().top) + 'px',
    });
  }
  $this.editingLine = $line;
};

// output: groupNameSetEvent, elementNameSetEvent
CGraph.prototype.event_completeLineNameInput0 = function (e, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
        para.this = $(e.currentTarget);
        para.$line = $this.editingLine;
        para.lineId = para.$line.attr('data-line')
          .replace($this.jsIdPrefix.line, '');

        para.index = $this.map.lineId.indexOf(para.lineId);
        para.connection = $this.map.connection[para.index];
        para.newName = para.this.val();
        para.this.hide();

        para.nStep = 'lineNameSetEvent';
        dbFlag += 1;
        break;
      case 'lineNameSetEvent':
        $this.lineNameSetEvent(para.lineId, para.newName,
          function (result) {
            if (result) {
              para.connection.forEach(function (v, i) {
                var label = v.getOverlay(para.lineId);
                if (label) {
                  v.showOverlay(para.lineId);
                  label.setLabel(para.newName);
                }
              });

              $this.map.name[para.index] = para.newName;
              para.nStep = 'modify_line';
            } else {
              para.$line.trigger('dblclick');
              para.nStep = 'end';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeLineNameInput(e, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_line':
        objectName = 'line';
        dbData = {};
        dbData.id = [para.lineId];
        dbData[$this.mac.fd.line.name] = [para.newName];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeLineNameInput(e, successCallBack, errorCallBack);
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

CGraph.prototype.event_completeLineNameInput = function (e, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
        para.this = $(e.currentTarget);
        para.$line = $this.editingLine;
        para.lineId = para.$line.attr('data-line')
          .replace($this.jsIdPrefix.line, '');

        para.newName = para.this.val();
        para.this.hide();
        para.nStep = 'lineNameSetEvent';
        dbFlag += 1;
        break;
      case 'lineNameSetEvent':
        $this.lineNameSetEvent(para.lineId, para.newName,
          function (result) {
            if (result[0]) {
              para.nStep = 'setLineName';
            } else {
              para.$line.trigger('dblclick');
              para.nStep = 'end';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeLineNameInput(e, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'setLineName':
        $this.setName($this.config.mac.type.line, para.lineId, para.newName,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeLineNameInput(e, successCallBack, errorCallBack);
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


CGraph.prototype.event_activateElementNameInput = function (e) {
  var $this = this;
  var $element;
  var $elementName;
  var $th = $(e.currentTarget);
  if ($(e.currentTarget).hasClass('element')) {
    $element = $(e.currentTarget);
  } else {
    $element = $(e.currentTarget).parent();
  }
  $elementName = $element.children('.elementName');

  var elementId = $element.attr('id').replace($this.jsIdPrefix.element, '');
  var nameSettable = JSON.parse($element.attr('data-nameSettable'));
  var mainElementId = '';
  var $group;
  var $input;
  if ($element.parent().hasClass('group')) {
    $group = $element.parent();
    mainElementId = $group.attr('data-mainelementid');
  }
  $this.isEditingGroupName = false;
  if (mainElementId !== '' && elementId === mainElementId) {
    $this.isEditingGroupName = true;
    $input = $group.find('.elementNameInput');
    if (nameSettable) {
      if ($input.length > 0) {
        $input.show().val($elementName.text());
      } else {
        $group.append('<input class="elementNameInput" spellcheck="false" maxlength=256 value="' + $elementName.text() + '">');
        $input = $group.find('.elementNameInput');
        $input.addClass('topIndex');
      }
    }
  } else {
    $input = $element.find('.elementNameInput');
    if (nameSettable) {
      if ($input.length > 0) {
        $input.show().val($elementName.text());
      } else {
        $element
          .append('<input class="elementNameInput" spellcheck="false" maxlength=256 value="' + $elementName.text() + '">');
        $input = $element.find('.elementNameInput');
      }
      $this.setOnInputShowIndex($(e.currentTarget), true);
    }
  }
  $this.editingElement = $element;
  $input
    .focus()
    .select();
};

// output: groupNameSetEvent, elementNameSetEvent
CGraph.prototype.event_completeElementNameInput = function (e, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
        para.this = $(e.currentTarget);
        para.element = $this.editingElement;
        para.elementId = para.element.attr('id')
          .replace($this.jsIdPrefix.element, '');
        para.canvasId = para.element.parent().attr('id')
          .replace($this.jsIdPrefix.canvas, '');
        para.newName = para.this.val();
        para.this.hide();
        if ($this.isEditingGroupName) {
          para.group = para.element.parent();
          para.groupId = para.group.attr('id')
            .replace($this.jsIdPrefix.group, '');
          para.canvasId = para.group.parent().attr('id')
            .replace($this.jsIdPrefix.canvas, '');
          para.nStep = 'groupNameSetEvent';
        } else {
          para.nStep = 'elementNameSetEvent';
        }
        dbFlag += 1;
        break;
      case 'groupNameSetEvent':
        $this.groupNameSetEvent(para.canvasId, para.groupId, para.newName,
          function (result) {
            if (result[0]) {
              if (para.newName !== '') {
                para.element.find('.elementName').text(para.newName).show();
              } else {
                para.element.find('.elementName').text(para.newName).hide();
              }

              para.nStep = 'modify_element';
            } else {
              para.element.find('.elementName')
                .trigger('dblclick');
              para.nStep = 'end';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeElementNameInput(e, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'elementNameSetEvent':
        $this.elementNameSetEvent(para.canvasId, para.elementId, para.newName,
          function (result) {
            if (result[0]) {
              para.element.find('.elementName')
                .text(para.newName);
              para.nStep = 'modify_element';
            } else {
              para.element.find('.elementName')
                .trigger('dblclick');
              para.nStep = 'end';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeElementNameInput(e, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_element':
        objectName = 'element';
        dbData = {};
        dbData.id = [para.elementId];
        dbData[$this.mac.fd.element.elementName] = [para.newName];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeElementNameInput(e, successCallBack, errorCallBack);
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


CGraph.prototype.event_activateElementTextArea = function (e) {
  var $this = this;
  var $th = $(e.currentTarget);
  var $element = $th.parent();
  var $input = $('#' + $element[0].id + '>.elementTextarea');
  var maxLen = $element.attr('data-maxlength');
  if (maxLen === '') {
    maxLen = '256';
  }
  if ($input.length > 0) {
    $input.show()
      .val($th.text());
  } else {
    $element
      .append('<textarea class="elementTextarea"  spellcheck="false" maxlength="' + maxLen + '">' + $th.text() + '</textarea>');
    $input = $('#' + $element[0].id + '>.elementTextarea');
    $input.css('z-index', $this.maxZIndex);
  }
  $input
    .focus()
    .select();

};

// output: textChange_event
CGraph.prototype.event_completeElementTextArea = function (e, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
        para.this = $(e.currentTarget);
        para.element = para.this.parent();
        para.elementId = para.this.parent()
          .attr('id')
          .replace($this.jsIdPrefix.element, '');
        para.newText = para.this.val();
        para.this.hide();
        $('#' + para.element[0].id + '>.elementContent')
          .text(para.newText);
        para.canvas = para.element.parents('.canvas');
        para.canvasId = para.canvas[0].id.replace($this.jsIdPrefix.canvas, '');
        para.nStep = 'modify_element';
        dbFlag += 1;
        break;
      case 'modify_element':
        objectName = 'element';
        dbData = {};
        dbData.id = [para.elementId];
        dbData[$this.mac.fd.element.content] = [para.newText];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'elementContentSetEvent';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeElementTextArea(e, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'elementContentSetEvent':
        $this.elementContentSetEvent(para.canvasId, para.elementId, para.newText,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeElementTextArea(e, successCallBack, errorCallBack);
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


CGraph.prototype.event_activateCanvasTitleInput = function (e) {
  var $this = this;
  var $canvas;
  var $canvasTitle;
  if ($(e.currentTarget).hasClass('canvas')) {
    $canvas = $(e.currentTarget);
  } else {
    $canvas = $(e.currentTarget).parent();
  }
  $canvasTitle = $canvas.children('.canvasTitle');

  var $input = $canvas.children('.titleInput');
  var titleSettable = JSON.parse($canvas.attr('data-titleSettable'));
  if (titleSettable) {
    if ($input.length > 0) {
      $input.show()
        .val($canvasTitle.text());
    } else {
      $canvas
        .append('<input class="titleInput" spellcheck="false" maxlength=256 value="' + $canvasTitle.text() + '">');
      $input = $canvas.children('.titleInput');
      $input.addClass('topIndex');
    }
    $input
      .focus()
      .select();
    $this.setOnInputShowIndex($(e.currentTarget), true);
  }
};

// output: canvasTitleSetEvent
CGraph.prototype.event_completeCanvasTitleInput = function (e, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
        para.this = $(e.currentTarget);
        para.canvas = para.this.parent();
        para.canvasId = para.this.parent()
          .attr('id')
          .replace($this.jsIdPrefix.canvas, '');
        para.newName = para.this.val();
        para.this.hide();
        para.nStep = 'outPutEvent';
        dbFlag += 1;
        break;
      case 'outPutEvent':
        $this.canvasTitleSetEvent(para.canvasId, para.newName,
          function (result) {
            var $canvasTitle = para.canvas.children('.canvasTitle');
            if (result[0]) {
              if (para.newName !== '') {
                $canvasTitle.text(para.newName).show();
              } else {
                $canvasTitle.text(para.newName).hide();
              }
              para.nStep = 'modify_canvas';
            } else {
              $canvasTitle.trigger('dblclick');
              para.nStep = 'end';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeCanvasTitleInput(e, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_canvas':
        objectName = 'canvas';
        dbData = {};
        dbData.id = [para.canvasId];
        dbData[$this.mac.fd.canvas.title] = [para.newName];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.event_completeCanvasTitleInput(e, successCallBack, errorCallBack);
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


CGraph.prototype.refreshAllLine = function (successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var fnname = 'CGraph.prototype.refreshAllLine';

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
      case 'query_line':
        objectName = 'line';
        parentRecord = [$this.rootCanvasId];
        condition = null;
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.arrLineId = dbData.id;
              para.nStep = 'refreshLine';
            } else {
              para.nStep = 'end';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.refreshAllLine(successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'refreshLine':
        $this.refreshLine(para.arrLineId,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.refreshAllLine(successCallBack, errorCallBack);
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

CGraph.prototype.setOnInputShowIndex = function ($target, option) {
  var $this = this;
  var lineId;
  var t = $this.config.mac.type;
  var targetJsId = $target.attr('id');
  var targetId;
  var $all = $();
  if ($target.hasClass('canvas')) {
    targetId = targetJsId.replace($this.jsIdPrefix.canvas, '');
    lineId = $this.getLineIdOfFactor(t.canvas, targetId).all;
  } else {
    targetId = targetJsId.replace($this.jsIdPrefix.element, '');
    lineId = $this.getLineIdOfFactor(t.element, targetId).all;
  }

  // var $dot = $('.dot[data-parentid=' + targetJsId + ']');
  lineId.forEach(function (v) {
    var $line = $('.jtk-connector[data-line=' + v + ']');
    var $startDot = $($this.jqIdPrefix.dot + $line.attr('data-start'));
    var $endDot = $($this.jqIdPrefix.dot + $line.attr('data-end'));
    $all = $all.add($line);
    $all = $all.add($startDot);
    $all = $all.add($endDot);
  });


  if (option) {
    $all.addClass('onInputShowIndex');
  } else {
    $all.removeClass('onInputShowIndex');
  }
};


export default CGraph.prototype;