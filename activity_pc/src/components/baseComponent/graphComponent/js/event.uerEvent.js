/* eslint-disable */

function CGraph() {
};


// ==============================用户事件=======================================================

CGraph.prototype.userEventOfWrap = function () {
  var $this = this;
  var $wrap = $('#' + $this.wrapId);


  // 鼠标双击元件名称区域
  $(window).on('resize', function (e) {
    clearTimeout($this.timer.resize);
    $this.timer.resize = setTimeout(function () {
      $this.instance.repaintEverything();
      $this.refreshAllLine(
        function () {
          $this.instance.repaintEverything();
        },
        function () {
        });
    },$this.delay.resize);

  });


  // -----------------------------元件名称设置----------------------------------------------------
  // 鼠标双击元件名称区域
  // $wrap.on('dblclick', '.element>.elementName', function (e) {
  $wrap.on('dblclick', '.element', function (e) {
    e.stopPropagation();
    clearTimeout($this.timer.click);
    $this.event_activateElementNameInput(e);
    // $this.setOnInputShowIndex($(e.currentTarget), true);
  });

  // 光标在元件名称编辑框时，键盘Enter按键弹起时
  $wrap.on('keyup', '.elementNameInput', function (e) {
    e.stopPropagation();
    if (e.which != 13) return;
    $this.event_completeElementNameInput(e,
      function () {
        $this.setOnInputShowIndex($(e.currentTarget).parent(), false);
      },
      function () {
      });
  });

  // 光标在元件名称编辑框时，编辑框失去焦点
  $wrap.on('blur', '.elementNameInput', function (e) {
    e.stopPropagation();
    $this.event_completeElementNameInput(e,
      function () {
        $this.setOnInputShowIndex($(e.currentTarget).parent(), false);
      },
      function () {
      });
  });

  // 光标在连线名称编辑框时，编辑框失去焦点
  $wrap.on('blur', '.lineNameInput', function (e) {
    e.stopPropagation();
    $this.event_completeLineNameInput(e,
      function () {
      },
      function () {
      });
  });


  // 光标在连线名称编辑框时，键盘Enter按键弹起
  $wrap.on('keyup', '.lineNameInput', function (e) {
    e.stopPropagation();
    if (e.which != 13) return;
    $this.event_completeLineNameInput(e,
      function () {

      },
      function () {

      });
  });


  // -----------------------------元件文本内容编辑-------------------------------------------------

  // 鼠标双击元件文本内容区域
  $wrap.on('dblclick', '.element>.elementContent', function (e) {
    e.stopPropagation();
    clearTimeout($this.timer.click);
    $this.event_activateElementTextArea(e);
  });

  // 光标在元件文本内容编辑框时，编辑框失去焦点
  $wrap.on('blur', '.element>.elementTextarea', function (e) {
    e.stopPropagation();
    $this.event_completeElementTextArea(e,
      function () {

      },
      function () {

      });
  });


  // -----------------------------元件、组合选择-------------------------------------------------

  // 鼠标单击元件区域
  $wrap.on('click', '.canvas>.element', function (e) {
    // console.log('element click');
    e.stopPropagation();
    var $element = $(e.currentTarget);
    var elementId = $element.attr('id').replace($this.jsIdPrefix.element, '');
    var selectable = JSON.parse($element.attr('data-draggable'));
    clearTimeout($this.timer.click);
    $this.timer.click = setTimeout(function () {
      var ms = $this.multiSelection;
      var s = $this.selection;
      var conflictCanvasId = '';
      if (selectable) {

        // 多选模式？
        if (ms.on) {
          // 获取当前元件的祖先画布
          var $parentCanvas = $element.parents('.canvas[data-draggable=true]');
          var parentCanvasId = [];
          $parentCanvas.each(function (i, pc) {
            parentCanvasId.push(pc.id.replace($this.jsIdPrefix.canvas, ''));
          });

          // 已经选中的元素中存在自己的祖先画布？
          s.id.forEach(function (id, i) {
            var t;
            if (s.type[i] === $this.config.mac.type.canvas) {
              t = parentCanvasId.indexOf(id);
              if (t > -1) {
                conflictCanvasId = parentCanvasId[t];
              }
            }
          });

        }

        // 存在
        if (conflictCanvasId !== '') {
          $this.unselect($this.config.mac.type.canvas, conflictCanvasId);
        }
        $this.selectByEvent($this.config.mac.type.element, elementId);
      } else if (!ms.on) {
        $this.unselectAll();
      }
    }, $this.delay.click);
  });

  // 鼠标单击元件名称输入框区域
  $wrap.on('click', '.element>.elementNameInput', function (e) {
    e.stopPropagation();
  });


  // 鼠标右键单击元件区域，非连线模式，连线模式
  $wrap.on('contextmenu', '.canvas>.element', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $element = $(e.currentTarget);
    var elementId = $element.attr('id').replace($this.jsIdPrefix.element, '');
    var canvasId = $element.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
    clearTimeout($this.timer.contextMenu);
    $this.timer.contextMenu = setTimeout(function () {

      if ($this.isLineMode) {
        $this.lineModeContextMenuEvents(canvasId, $this.config.mac.type.element, elementId);
      } else {
        var pos = {};
        // var selectable = JSON.parse($element.attr('data-draggable'));
        // pos.x = e.pageX;
        pos.x = e.clientX;
        // pos.y = e.pageY;
        pos.y = e.clientY;
        // $this.emitStartDotUnselectEvent();
        $this.selectByEvent($this.config.mac.type.element, elementId);
        // if (selectable) {
        // } else {
        //   $this.unselectAll();
        // }
        $this.elementContextMenuEvent(canvasId, elementId, pos,
          function () {

          },
          function () {

          });
      }
    }, $this.delay.click);
  });


  // 鼠标单击组合区域
  $wrap.on('click', '.canvas>.group', function (e) {
    // console.log('group click');
    e.stopPropagation();
    var $group = $(e.currentTarget);
    var groupId = $group.attr('id').replace($this.jsIdPrefix.group, '');
    var selectable = JSON.parse($group.attr('data-draggable'));
    clearTimeout($this.timer.click);
    $this.timer.click = setTimeout(function () {
      var ms = $this.multiSelection;
      var s = $this.selection;
      var conflictCanvasId = '';
      if (selectable) {
        if (ms.on) {
          // 获取当前组合的祖先画布
          var $parentCanvas = $group.parents('.canvas[data-draggable=true]');
          var parentCanvasId = [];
          $parentCanvas.each(function (i, pc) {
            parentCanvasId.push(pc.id.replace($this.jsIdPrefix.canvas, ''));
          });

          // 已经选中的元素中存在自己的祖先画布？
          s.id.forEach(function (id, i) {
            var t;
            if (s.type[i] === $this.config.mac.type.canvas) {
              t = parentCanvasId.indexOf(id);
              if (t > -1) {
                conflictCanvasId = parentCanvasId[t];
              }
            }
          });
        }
        // 存在
        if (conflictCanvasId !== '') {
          $this.unselect($this.config.mac.type.canvas, conflictCanvasId);
        }
        $this.selectByEvent($this.config.mac.type.group, groupId);
      } else if (!ms.on) {
        $this.unselectAll();
      }
    }, $this.delay.click);
  });


  // 连线模式下鼠标右键单击组合内元件区域
  $wrap.on('contextmenu', '.canvas>.group>.element', function (e) {
    if (!$this.isLineMode) return;
    e.stopPropagation();
    e.preventDefault();
    // console.log('group element contextmenu');
    var $element = $(e.currentTarget);
    var elementId = $element.attr('id').replace($this.jsIdPrefix.element, '');
    var canvasId = $element.parent().parent().attr('id').replace($this.jsIdPrefix.canvas, '');
    clearTimeout($this.timer.contextMenu);
    $this.timer.contextMenu = setTimeout(function () {
      $this.lineModeContextMenuEvents(canvasId, $this.config.mac.type.element, elementId);
    }, $this.delay.click);
  });


  // 鼠标右键单击组合区域
  // output: groupContextMenuEvent
  $wrap.on('contextmenu', '.group', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var pos = {};
    var $group = $(e.currentTarget);
    var groupId = $group.attr('id').replace($this.jsIdPrefix.group, '');
    var canvasId = $group.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
    var selectable = JSON.parse($group.attr('data-draggable'));
    pos.x = e.pageX;
    pos.y = e.pageY;
    // $this.emitStartDotUnselectEvent();
    if (selectable) {
      $this.selectByEvent($this.config.mac.type.group, groupId);
    } else {
      $this.unselectAll();
    }
    $this.groupContextMenuEvent(canvasId, groupId, pos,
      function () {

      },
      function () {

      });
  });

  // -----------------------------连线模式鼠标移入移出元件、组合-------------------------------------------------


  // output: mouseEnterElementEvent
  $wrap.on('mouseenter', '.canvas .element', function (e) {
    e.stopPropagation();
    // console.log('mouseenter drag');
    if (!$this.isLineMode) return;
    // if ($this.isConnectStart) return;
    // console.log('mouseenter connect');
    if ($('.dragActivePoint').length > 0) return;
    var $dot = $('.jtk-endpoint');
    var invalidEvent = false;
    if ($dot.length > 0) {
      $dot.each(function () {
        if (!$(this).hasClass('jtk-endpoint-connected')) {
          invalidEvent = true;
          return false;
        }
      })
    }
    if (invalidEvent) return;
    var canvasId;
    var $element = $(e.currentTarget);
    var elementId = $element.attr('id')
      .replace($this.jsIdPrefix.element, '');

    // if ($this.linePair.length > 0
    //   && $this.linePair[0].type === $this.config.mac.type.element
    //   && $this.linePair[0].id === elementId) return;

    if ($element.parent().hasClass('group')) {
      canvasId = $element.parent().parent().attr('id').replace($this.jsIdPrefix.canvas, '');
    } else if ($element.parent().hasClass('canvas')) {
      canvasId = $element.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
    }

    $this.mouseEnterElementEvent(canvasId, elementId,
      function () {
      },
      function () {
      });

  });

  // output: mouseLeaveElementEvent
  $wrap.on('mouseleave', '.canvas .element', function (e) {
    var canvasId;
    e.stopPropagation();
    if (!$this.isLineMode) return;
    if ($('.dragActivePoint').length > 0) return;
    var $dot = $('.jtk-endpoint');
    var invalidEvent = false;
    if ($dot.length > 0) {
      $dot.each(function () {
        if (!$(this).hasClass('jtk-endpoint-connected')) {
          invalidEvent = true;
          return false;
        }
      })
    }
    if (invalidEvent) return;
    var $element = $(e.currentTarget);
    var elementId = $element.attr('id')
      .replace($this.jsIdPrefix.element, '');

    if ($element.parent().hasClass('group')) {
      canvasId = $element.parent().parent().attr('id').replace($this.jsIdPrefix.canvas, '');
    } else if ($element.parent().hasClass('canvas')) {
      canvasId = $element.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
    }

    $this.mouseLeaveElementEvent(canvasId, elementId,
      function () {
      },
      function () {
      });
  });


  // output: mouseEnterCanvasEvent
  $wrap.on('mouseenter', '.canvas', function (e) {
    e.stopPropagation();
    if (!$this.isLineMode) return;
    if ($('.dragActivePoint').length > 0) return;
    var $dot = $('.jtk-endpoint');
    var invalidEvent = false;
    if ($dot.length > 0) {
      $dot.each(function () {
        if (!$(this).hasClass('jtk-endpoint-connected')) {
          invalidEvent = true;
          return false;
        }
      })
    }
    if (invalidEvent) return;
    var $canvas = $(e.currentTarget);
    var canvasId = $canvas.attr('id')
      .replace($this.jsIdPrefix.canvas, '');


    $this.mouseEnterCanvasEvent(canvasId,
      function () {
      },
      function () {
      });

  });

  // output: mouseLeaveCanvasEvent
  $wrap.on('mouseleave', '.canvas', function (e) {
    e.stopPropagation();
    if (!$this.isLineMode) return;
    if ($('.dragActivePoint').length > 0) return;
    var $dot = $('.jtk-endpoint');
    var invalidEvent = false;
    if ($dot.length > 0) {
      $dot.each(function () {
        if (!$(this).hasClass('jtk-endpoint-connected')) {
          invalidEvent = true;
          return false;
        }
      })
    }
    if (invalidEvent) return;
    var $canvas = $(e.currentTarget);
    var canvasId = $canvas.attr('id')
      .replace($this.jsIdPrefix.canvas, '');
    $this.mouseLeaveCanvasEvent(canvasId,
      function () {
      },
      function () {
      });
  });


  // -----------------------------画布选择-------------------------------------------------

  // 鼠标单击画布区域
  $wrap.on('click', '.canvas', function (e) {
    e.stopPropagation();
    var $canvas = $(e.currentTarget);
    var canvasId = $canvas.attr('id').replace($this.jsIdPrefix.canvas, '');
    var selectable = JSON.parse($canvas.attr('data-draggable'));

    clearTimeout($this.timer.click);
    $this.timer.click = setTimeout(function () {
      var ms = $this.multiSelection;
      var s = $this.selection;
      var conflictType = [];
      var conflictId = [];
      if (selectable) {
        if (ms.on) {

          var $parentCanvas = $canvas.parents('.canvas[data-draggable=true]');
          var parentCanvasId = [];
          $parentCanvas.each(function (i, pc) {
            parentCanvasId.push(pc.id.replace($this.jsIdPrefix.canvas, ''));
          });

          var $childrenCanvas = $canvas.find('.canvas[data-draggable=true]');
          var childrenCanvasId = [];
          $childrenCanvas.each(function (i, cc) {
            childrenCanvasId.push(cc.id.replace($this.jsIdPrefix.canvas, ''));
          });

          var $childrenGroup = $canvas.find('.group[data-draggable=true]');
          var childrenGroupId = [];
          $childrenGroup.each(function (i, cg) {
            childrenGroupId.push(cg.id.replace($this.jsIdPrefix.group, ''));
          });

          var $childrenElement = $canvas.find('.element[data-draggable=true]');
          var childrenElementId = [];
          $childrenElement.each(function (i, ce) {
            childrenElementId.push(ce.id.replace($this.jsIdPrefix.element, ''));
          });

          s.id.forEach(function (id, i) {
            var t;
            if (s.type[i] === $this.config.mac.type.canvas) {
              t = parentCanvasId.indexOf(id);
              if (t > -1) {
                conflictType.push($this.config.mac.type.canvas);
                conflictId.push(parentCanvasId[t]);
              }
              if (t < 0) {
                t = childrenCanvasId.indexOf(id);
                if (t > -1) {
                  conflictType.push($this.config.mac.type.canvas);
                  conflictId.push(childrenCanvasId[t]);
                }
              }
            } else if (s.type[i] === $this.config.mac.type.group) {
              t = childrenGroupId.indexOf(id);
              if (t > -1) {
                conflictType.push($this.config.mac.type.group);
                conflictId.push(childrenGroupId[t]);
              }
            } else if (s.type[i] === $this.config.mac.type.element) {
              t = childrenElementId.indexOf(id);
              if (t > -1) {
                conflictType.push($this.config.mac.type.element);
                conflictId.push(childrenElementId[t]);
              }
            } else {
              return false;
            }
          });
        }

        if ($(e.target)
          .hasClass('canvasTitle') && $(e.target)
          .parent()
          .hasClass('canvas')) {
          // 点击在画布标题区域
          // 存在冲突
          if (conflictId.length > 0) {
            conflictId.forEach(function (cid, i) {
              $this.unselect(conflictType[i], cid);
            });
          }
          $this.selectByEvent($this.config.mac.type.canvas, canvasId);

        } else if ($(e.target).hasClass('canvas')) {
          var zoom = $this.root[$this.rootCanvasId].zoom;
          var x = e.pageX;
          var y = e.pageY;
          var left = $canvas.offset().left;
          var top = $canvas.offset().top;
          var right = left + ($canvas.outerWidth() * zoom);
          var bottom = top + ($canvas.outerHeight() * zoom);
          var m = 5;
          var n = 10 * zoom;
          if ((x > left - m && x < left + n && y > top && y < bottom)
            || (x > right - n && x < right + m && y > top && y < bottom)
            || (x > left && x < right && y > top - m && y < top + n)
            || (x > left && x < right && y > bottom - n && y < bottom + m)) {
            // 点击在画布边框区域
            // 存在冲突
            if (conflictId.length > 0) {
              conflictId.forEach(function (cid, i) {
                $this.unselect(conflictType[i], cid);
              });
            }
            $this.selectByEvent($this.config.mac.type.canvas, canvasId);
          } else {
            // 点击在画布空白区域
            $this.selection.id.forEach(function (id, i) {
              if (!ms.on && (id !== canvasId || $this.selection.type[i] !== $this.config.mac.type.canvas)) {
                $this.unselectAll();
              }
            });
          }
        }

      } else if (!ms.on) {
        // 不允许选择的画布、单选模式
        $this.unselectAll();
      }

    }, $this.delay.click);
  });




  // 鼠标右键单击画布区域 // fixme
  $wrap.on('contextmenu', '.canvas', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $canvas = $(e.currentTarget);
    var canvasId = $canvas.attr('id').replace($this.jsIdPrefix.canvas, '');
    var parentId = $canvas.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
    if ($this.isLineMode) {
      $this.lineModeContextMenuEvents(parentId, $this.config.mac.type.canvas, canvasId);
    } else {
      var pos = {};
      // var selectable = JSON.parse($canvas.attr('data-draggable'));
      pos.x = e.pageX
      pos.y = e.pageY
      // $this.emitStartDotUnselectEvent();
      $this.selectByEvent($this.config.mac.type.canvas, canvasId);
      // if (selectable) {
      // } else {
      //   $this.unselectAll();
      // }
      $this.canvasContextMenuEvent(canvasId, pos,
        function () {

        },
        function () {

        });
    }

  });


  // -----------------------------画布名称设置-------------------------------------------------

  // 鼠标双击画布名称区域
  // $wrap.on('dblclick', '.canvas>.canvasTitle', function (e) {
  $wrap.on('dblclick', '.canvas', function (e) {
    e.stopPropagation();
    clearTimeout($this.timer.click);
    $this.event_activateCanvasTitleInput(e);
  });


  // 光标在画布名称编辑框时，键盘Enter按键弹起
  $wrap.on('keyup', '.canvas>.titleInput', function (e) {
    e.stopPropagation();
    if (e.which != 13) return;
    $this.event_completeCanvasTitleInput(e,
      function () {
        $this.setOnInputShowIndex($(e.currentTarget).parent(), false);
      },
      function () {

      });
  });

  // 光标在画布名称编辑框时，编辑框失去焦点
  $wrap.on('blur', '.canvas>.titleInput', function (e) {
    e.stopPropagation();
    $this.event_completeCanvasTitleInput(e,
      function () {
        $this.setOnInputShowIndex($(e.currentTarget).parent(), false);
      },
      function () {

      });
  });

  // -------------------------------键盘del键删除-----------------------------------------------

  $wrap.on('keyup', function (e) {
    e.stopPropagation();
    if (e.which != 46) return;
    var s = $this.selection;
    var arrLineId = [];
    var allDelete = {};
    allDelete.type = [];
    allDelete.id = [];
    allDelete.includeLineId = [];

    if (s.type.length > 0) {
      s.type.forEach(function (st, i) {
        var t = $this.config.mac.type;
        var $target;
        var isDeletable;
        switch (st) {
          case t.canvas:
            $target = $($this.jqIdPrefix.canvas + s.id[i]);
            // isDeletable = JSON.parse($target.attr('data-draggable'));

            // if (isDeletable) {
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.canvas, s.id[i]).all;
            allDelete.includeLineId = arrLineId;
            // }
            break;
          case t.group:
            $target = $($this.jqIdPrefix.group + s.id[i]);
            // isDeletable = JSON.parse($target.attr('data-draggable'));
            // if (isDeletable) {
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.group, s.id[i]).all;
            allDelete.includeLineId = arrLineId;
            // }

            break;
          case t.element:
            $target = $($this.jqIdPrefix.element + s.id[i]);
            isDeletable = JSON.parse($target.attr('data-draggable'));
            // if (isDeletable) {
            arrLineId = $this.getLineIdOfFactor($this.config.mac.type.element, s.id[i]).all;
            allDelete.includeLineId = arrLineId;
            // }
            break;
          case t.line:
            $target = $('svg.jtk-connector[data-line=' + s.id[i] + ']');
            isDeletable = JSON.parse($target.attr('data-deletable'));
            break;
        }

        // if (isDeletable) {
        allDelete.type.push(st);
        allDelete.id.push(s.id[i]);
        // }
      });
      s.id = [];
      s.type = [];
      if (allDelete.type.length > 0) {
        $this.deleteEvents(allDelete, function () {

        }, function () {

        });
      }
    }

  });


  // -------------------------------键盘ctrl键多选-----------------------------------------------

  $wrap.on('keydown', function (e) {
    e.stopPropagation();
    var ms = $this.multiSelection;
    if (e.which !== 17) return;
    if (ms.on) return;
    ms.on = true;
  });

  $wrap.on('keyup', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var ms = $this.multiSelection;
    if (e.which !== 17) return;
    ms.on = false;
  });


  // ------------------------------------------------------------------------------

  // 在根画布外点击时，取消所有选中，不含连接点
  $wrap.on('click', function (e) {
    var $root = $(e.target).parents('.rootCanvas');
    if ($root.length === 0) {
      $this.unselectAll();
    }
  });

  // 在根画布外右键单击时，取消所有选中，包括连接点
  $wrap.on('contextmenu', function (e) {
    e.preventDefault();
    // e.stopPropagation();
    var $root = $(e.target).parents('.rootCanvas');
    if ($root.length === 0) {
      $this.unselectAll();
      if ($this.linePair.length > 0) {
        $this.startDeselectEvent(parentId, linePair[0].type, linePair[0].id, function () {

        }, function () {

        });
        $this.linePair = [];
      }
    }
  });


};


CGraph.prototype.userEventOfRootCanvas = function () {
  var $this = this;
  var $wrap = $('#' + $this.wrapId);

  $this.instance.importDefaults({
    Endpoint              : ['Dot', { radius: 5 }],   // 端点的形状
    EndpointStyle         : {
      fill         : '#fdfdfd',
      outlineWidth : 1,
      outlineStroke: '#00a4fd',
    },
    EndpointHoverStyle    : {
      // fill: '#ff8337',
      fill: '#ff9d68',
    },
    DropOptions           : {                       // 设置端点在拖动时候被hover时候的样式
      hoverClass : 'dropHoverPoint',    // 释放时鼠标停留在的元素 的css class
      activeClass: 'dragActivePoint',   // 可拖动到的端点 的css class
    },
    MaxConnections        : 100,                   // 设置连接点最多可以连接几条线
    PaintStyle            : {
      stroke       : '#61B7CF',
      strokeWidth  : 2,
      outlineStroke: 'transparent',
      outlineWidth : 2,
      joinstyle    : 'round',
    },
    HoverPaintStyle       : {
      stroke     : '#4b9612',
      strokeWidth: 3,
    },
    DeleteEndpointsOnEmpty: false,       // 此版本名字改成这个了//false使用删除连接线时不会删除端点
    // ConnectionsDetachable: false,       // false连线不能手动拆除//这行会影响端点最大连接数
    Connector             : ['Flowchart', {
      stub              : [10, 20],
      gap               : 0,
      cornerRadius      : 0,
      alwaysRespectStubs: false,
    }],
    Overlays              : [
      // ['Arrow', { width: 10, length: 10, location: 1 }], // 单向箭头
    ],
  });

  // 注册新连线样式
  $this.instance.registerConnectionTypes({
    selected: {
      paintStyle: { stroke: '#4b9612', strokeWidth: 3 },
    },
  });

  // 注册新端点样式
  $this.instance.registerEndpointTypes({
    selected: {
      paintStyle: {
        fill         : '#4b9612',
        outlineWidth : 1,
        outlineStroke: '#ff7244',
      },
    },
  });


  // ---------------------------------连线--------------------------------------------------------

  // 绑定连线事件
  $this.instance.bind('connection', function (info, e) {
    // console.log('output: connection');
    // console.log('output: isConnectComplete ' + $this.isConnectComplete);
    if ($this.isConnectStart) {
      $this.isConnectComplete = true;
      $this.isConnectStart = false;
    }

    // 有拐点的组合线的hover方案
    info.connection.bind('mouseover', function (connection, event) {
      // console.log('output: mouseover');

      var lineId = $(connection.canvas).attr('data-line');
      var index = $this.map.lineId.indexOf(lineId);
      // $this.instance.select($this.map.connection[index]).setHover(true).addClass('topIndex');

      $this.map.connection[index].forEach(function (v) {
        $this.instance.select(v).setHover(true).addClass('topIndex');
      });


    });

    info.connection.bind('mouseout', function (connection, event) {
      // console.log('output: mouseout');
      var lineId = $(connection.canvas).attr('data-line');
      var index = $this.map.lineId.indexOf(lineId);
      var s = $this.selection;
      var isSelected = false;
      s.id.forEach(function (id, i) {
        if (id === lineId && s.type[i] === $this.config.mac.type.line) {
          isSelected = true;
        }
      });

      if (!isSelected) {
        // $this.instance.select($this.map.connection[index]).setHover(false).removeClass('topIndex');

        $this.map.connection[index].forEach(function (v) {
          $this.instance.select(v).setHover(false).removeClass('topIndex');
        });
      }
    });

    // 左键单击选中
    info.connection.bind('click', function (connection, event) {
      event.stopPropagation();

      // console.log('output: click');
      var lineId = $(connection.canvas).attr('data-line');
      if (!lineId) {
        lineId = $(connection.component.canvas).attr('data-line');
      }
      $this.selectByEvent($this.config.mac.type.line, lineId);

    });

    // 右键单击选中
    info.connection.bind('contextmenu', function (connection, event) {
      event.preventDefault();
      var pos = {};
      pos.x = event.pageX;
      pos.y = event.pageY;

      // console.log('output: contextmenu');
      var lineId = $(connection.canvas)
        .attr('data-line');
      // $this.emitStartDotUnselectEvent();
      $this.selectByEvent($this.config.mac.type.line, lineId);
      $this.lineContextMenuEvent(lineId, pos,
        function () {

        },
        function () {

        });
    });

    // 左键双击
    info.connection.bind('dblclick', function (connection, event) {
      event.stopPropagation();
      if ($(connection.canvas).attr('data-line')) {
        if (!JSON.parse($(connection.canvas).attr('data-nameSettable'))) return;
        $this.event_activateLineNameInput(connection, event);
      } else {
        if (!JSON.parse($(connection.component.canvas).attr('data-nameSettable'))) return;
        $this.event_activateLineNameInput(connection.component, event);
      }

    });


  });

  // 连线前
  $this.instance.bind('beforeDrop', function (info) {
    // console.log('output: beforeDrop  ' + $this.wrapId);
    $this.instance.repaintEverything();
    $this.lineCompleteEvents(info,
      function () {
      },
      function () {
      });
  });


  // 连线开始
  $this.instance.bind('connectionDrag', function (info) {
    var $start;
    var startType;
    var startId;
    var parentId;

    // console.log('output: connectionDrag');
    $this.isConnectStart = true;
    $this.isConnectComplete = false;

    $start = $(info.source);
    if ($start.hasClass('canvas')) {
      startType = $this.config.mac.type.canvas;
      startId = $start.attr('id').replace($this.jsIdPrefix.canvas, '');
      parentId = $start.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
    } else if ($start.hasClass('element')) {
      startType = $this.config.mac.type.element;
      startId = $start.attr('id').replace($this.jsIdPrefix.element, '');
      if ($start.parent().hasClass('group')) {
        parentId = $start.parent().parent().attr('id').replace($this.jsIdPrefix.canvas, '');
      } else {
        parentId = $start.parent().attr('id').replace($this.jsIdPrefix.canvas, '');
      }
    }


    $this.linePair = [{
      parentId: parentId,
      type    : startType,
      id      : startId,
    }];

    $this.startSelectEvent(parentId, startType, startId,
      function () {

      },
      function () {

      });

  });


  $this.instance.bind('connectionDragStop', function (info) {
    // console.log('output: connectionDragStop');
    $this.dotPair = [];
  });

  // 连线中断事件
  $this.instance.bind('connectionAborted', function (connection, originalEvent) {
    // console.log('output: connectionAborted');
    // console.log('output: isConnectComplete ' + $this.isConnectComplete);
    $this.isConnectStart = false;
    if ($this.isConnectComplete) {
      $this.isConnectComplete = false;
    } else {

      $this.startDeselectEvent($this.linePair[0].parentId, $this.linePair[0].type, $this.linePair[0].id,
        function () {
          $this.linePair = [];
        }, function () {

        })
    }

  });


};


CGraph.prototype.setDraggable = function ($element) {
  var $this = this;
  $element.draggable({
    // revert        : 'invalid',
    revert           : function () {
      if ($this.dragging.overCanvasId === '') $this.isNotAllowedDrop = true;
      return $this.isNotAllowedDrop;
    },
    revertDuration   : 50,
    delay            : 400,
    distance         : 5,
    scrollSensitivity: 100,
    // handle: '.canvasTitle,..element,.group',
    create           : function (e, ui) {
      // console.log('create', ui)
    },
    drag             : function (e, ui) {
      $this.instance.repaintEverything();
    },
    start            : function (e, ui) {
      $this.isNotAllowedDrop = false;
      $this.toRefreshLine = false;
      $this.dragStartEvents(e, ui,
        function (result) {
        },
        function (error) {

        });
    },
    stop             : function (e, ui) {
      setTimeout(function () {
        if ($this.dragging.overCanvasId === '') {
          $this.dropEvents(e, ui,
            function (result) {
              $this.isNotAllowedDrop = result.isNotAllowedDrop;
              var d = $this.dragging;
              d.isDragging = false;
              // 还原被拖拽元素及其先辈层级
              $this.setDraggingLayer(0);
              if (result.toRefreshLine) {
                $this.refreshLine(result.arrLineId, function () {

                }, function () {

                });
              }
            },
            function () {

            });
        } else if ($this.toRefreshLine) {
          $this.refreshLine($this.arrLineId, function () {

          }, function () {

          })
        }
      }, 20);
      $this.instance.repaintEverything();
    },
  });
};


// output: dragEnterCanvasEvent, dragLeaveCanvasEvent
CGraph.prototype.setDroppable = function () {
  var $this = this;

  $('#' + $this.wrapId + ' .canvas').droppable({
    tolerance: 'intersect',
    // tolerance: 'pointer',
    activate : function (e, ui) {
      // console.log('activate', $this.dragging);
      $(ui.helper).addClass('grabbing');
      if ($this.dragging.isTemplate) {
        // 提升被拖拽元素及其先辈层级
        $this.dragging.$dragging = $(ui.helper);
        $this.dragging.$ancestor = $(ui.helper).parentsUntil('body');
        if ($('#' + $this.wrapId).is(':visible')) {
          $this.setDraggingLayer(1);
        }


      }
    },
    over     : function (e, ui) {
      // console.log('over', $(this).attr('id'));
      var d = $this.dragging;
      var canvasId = $(this).attr('id').replace($this.jsIdPrefix.canvas, '');


      // 排除刚启动时的 over 事件的其他 over 事件场景
      if (!d.isTemplate && d.isSelfOverExclude && d.overCanvasId !== canvasId || d.isTemplate) {

        d.stack.push(canvasId);
        d.overCanvasId = canvasId;
        $this.mouseEnterCanvasEvent(canvasId,
          function () {
          },
          function () {
          });
      }


      // 刚启动时可能会触发包括自身的多个 over 事件，将这个情况的排除
      if (d.overCanvasId === canvasId) {
        d.isSelfOverExclude = true;
      }
    },
    out      : function (e, ui) {
      var d = $this.dragging;
      // $this.dragLeaveCanvasEvent(d.overCanvasId,
      $this.mouseLeaveCanvasEvent(d.overCanvasId,
        function () {
        },
        function () {
        });
      if ($this.dragStartParentId === d.overCanvasId) {
        // $this.unselect($this.config.mac.type.canvas, $this.dragStartParentId);
        $this.cancelBorderHighlight($this.config.mac.type.canvas, $this.dragStartParentId);
      }
      d.stack.pop();
      d.overCanvasId = d.stack[d.stack.length - 1];

    },
    drop     : function (e, ui) {
      $(ui.helper).removeClass('grabbing');
      var canvasId = $(this).attr('id').replace($this.jsIdPrefix.canvas, '');
      // 会触发多个drop事件

      if ($this.dragging.overCanvasId === canvasId) {
        $this.dropEvents(e, ui,
          function (result) {
            $this.isNotAllowedDrop = result.isNotAllowedDrop;
            $this.toRefreshLine = result.toRefreshLine;
            $this.arrLineId = result.arrLineId;
            var d = $this.dragging;

            d.isDragging = false;

            // 还原被拖拽元素及其先辈层级
            $this.setDraggingLayer(0);
          },
          function () {
          });
      }
      $this.setDraggingLayer(0);
    },
  });


};


CGraph.prototype.scrollWhileDraggingConnection = function () {
  var $this = this;


  $('body')
    .on('mousemove', function (e) {

      if (!$this.isConnectStart) return;
      $this.instance.repaintEverything();
      // console.log('output: mousemove');

      var n = 2000;
      var scrollSensitivity = 100;
      var $wrap = $('#' + $this.wrapId).parent();
      // var dragRect = $drag[0].getBoundingClientRect();
      // var wrapRect = $wrap[0].getBoundingClientRect();
      var x = e.pageX;
      var y = e.pageY;


      var wW = $wrap.outerWidth();
      var wH = $wrap.outerHeight();
      var wPL = $wrap.offset().left;
      var wPT = $wrap.offset().top;
      var wPR = wPL + wW;
      var wPB = wPT + wH;

      var scrollHeight = $wrap[0].scrollHeight;
      var scrollWidth = $wrap[0].scrollWidth;
      var isBottomOver = y >= wPB - scrollSensitivity;
      var isTopOver = y <= wPT + scrollSensitivity;
      var isRightOver = x >= wPR - scrollSensitivity;
      var isLeftOver = x <= wPL + scrollSensitivity;

      var connectorWidth = $('.jtk-connector.jtk-dragging').css('width');
      var connectorHeight = $('.jtk-connector.jtk-dragging').css('height');

      if (isBottomOver && !$this.isAnimate) {
        for (var i = 0; i < scrollHeight - wH; i++) {
          $wrap.stop(true)
            .animate({ scrollTop: i }, n, function () {
              // $('.jtk-endpoint-anchor.jtk-connected').css('left', x + 'px');
              // $('.jtk-endpoint-anchor.jtk-connected').css('top', (y + i) + 'px');
              // $('.jtk-endpoint-connected.jtk-dragging').css('left', (x - wPL) + 'px');
              // $('.jtk-endpoint-connected.jtk-dragging').css('top', (y + i) + 'px');
              // $('.jtk-connector.jtk-dragging').css('width', connectorWidth + 'px');
              // $('.jtk-connector.jtk-dragging').css('top', (y + i) + 'px');


              $this.instance.repaintEverything();
            });
        }
        $this.isAnimate = true;
      } else if (isTopOver) {
        $wrap.stop(true)
          .animate({ scrollTop: 0 }, n);
      } else if (isRightOver) {
        $wrap.stop(true)
          .animate({ scrollLeft: scrollWidth - wW }, n);
      } else if (isLeftOver) {
        $wrap.stop(true)
          .animate({ scrollLeft: 0 }, n);
      } else {
        $wrap.stop(true);
        $this.isAnimate = false;
      }
    });
};


export default CGraph.prototype;