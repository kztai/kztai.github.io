/* eslint-disable */


/**
 * @classdesc 画图模块
 * @constructor
 * @param geneInstance {object} - 运行时粒子实例
 * @param wrapId {string} - 容纳根画布的HtmlDOM id
 * @param vueInstance {object} - 画图模块vue实例
 */
function CGraph(geneInstance, wrapId, vueInstance) {
}


CGraph.prototype.initRootCanvasVariable = function () {
  var $this = this;

  $this.instance = jsPlumb.getInstance();
  $this.rootCanvasId = '';


  // dragging
  $this.dragging = {};
  $this.dragging.isDragging = false;
  $this.dragging.overCanvasId = '';
  $this.dragging.isTemplate = true;
  $this.dragging.templateId = '';
  $this.dragging.templateType = '';
  $this.dragging.name = '';
  $this.dragging.id = '';
  $this.dragging.type = '';
  $this.dragging.$ancestor = '';
  $this.dragging.$dragging = '';
  $this.dragging.dashLine = [];

  // timer
  $this.timer = {};
  $this.timer.click = null;
  $this.timer.resize = null;
  $this.timer.contextMenu = null;
  $this.timer.refreshLine = null;


  // delay
  $this.delay = {};
  $this.delay.click = 250;
  $this.delay.resize = 1000;

  // selection
  $this.selection = {};
  $this.selection.id = [];
  $this.selection.type = [];

  // multiSelection
  $this.multiSelection = {};
  $this.multiSelection.on = false;

  // dotPair
  $this.linePair = [];

  // anchor
  $this.anchor = {};
  $this.anchor.parentType = [];
  $this.anchor.parentId = [];
  $this.anchor.start = [
    // {
    //   type    : '',
    //   position: [],
    //   anchor  : [],
    //   coord   : [],
    //   dotId   : [],
    //   isUnused: [],
    // }
  ];
  $this.anchor.end = [
    // {
    //   type    : '',
    //   position: [],
    //   anchor  : [],
    //   coord   : [],
    //   dotId   : [],
    //   isUnused: [],
    // }
  ];


  // $this.isLineMode = '';
  $this.lineMode = {};
  $this.lineMode.$draggable = $();
  $this.lineMode.$start = $();
  $this.lineMode.$end = $();
  $this.highlightBorder = {
    type: [],
    id  : [],
  };

  // $this.zoom = 1;
  $this.originalRect = null;


  $this.editingElement = null;
  $this.dragStartParentId = '';
  $this.creatingGroupId = [];

  if(!$this.isInitEvent){
    $this.userEventOfWrap();
    $this.isInitEvent = true;
  }
    $this.userEventOfRootCanvas();
    $this.setLineModeCursor('1');
};


CGraph.prototype.getRootData = function (rootCanvasId) {
  var $this = this;
  if (!(rootCanvasId in $this.root)) {
    $this.root[rootCanvasId] = {};
    $this.root[rootCanvasId].zoom = 1;
    $this.root[rootCanvasId].map = {
      lineId       : [],
      name         : [],
      startType    : [],
      startId      : [],
      endType      : [],
      endId        : [],
      startDotId   : [],
      endDotId     : [],
      connection   : [],
      connectorType: [],
    };
    $this.root[rootCanvasId].turningPoint = {
      line: {
        // lineID:[{left:x_t1,top:y_t1},{left:x_t2,top:y_t3},...,{left:x_tn,top:y_tn}],.......
      },
    };
  }
  $this.map = $this.root[rootCanvasId].map;
  $this.turningPoint = $this.root[rootCanvasId].turningPoint;
};


CGraph.prototype.pushMap = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var fnname = 'CGraph.prototype.pushMap';

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
        dbData = {};
        dbData.id = [lineId];
        $this.api.recordRead(objectName, dbData,
          function () {
            var fd = $this.mac.fd.line;
            para.startDotId = dbData[fd.startDotId][0];
            para.endDotId = dbData[fd.endDotId][0];
            $this.map.connectorType.push(dbData[fd.style][0].connectorType);
            para.data = dbData;
            para.nStep = 'query_dot';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.pushMap(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_dot':
        objectName = 'dot';
        dbData = {};
        dbData.id = [para.startDotId, para.endDotId];
        $this.api.recordRead(objectName, dbData,
          function () {
            var fd = $this.mac.fd.dot;
            var $start;
            var $end;


            if (dbData[fd.canvasId][0] !== '') {
              $this.map.startType.push($this.config.mac.type.canvas);
              $this.map.startId.push(dbData[fd.canvasId][0]);
            } else if (dbData[fd.elementId][0] !== '') {
              $this.map.startType.push($this.config.mac.type.element);
              $this.map.startId.push(dbData[fd.elementId][0]);
            }


            if (dbData[fd.canvasId][1] !== '') {
              $this.map.endType.push($this.config.mac.type.canvas);
              $this.map.endId.push(dbData[fd.canvasId][1]);
            } else if (dbData[fd.elementId][1] !== '') {
              $this.map.endType.push($this.config.mac.type.element);
              $this.map.endId.push(dbData[fd.elementId][1]);
            }


            var fdl = $this.mac.fd.line;
            $this.map.lineId.push(para.data.id[0]);
            $this.map.name.push(para.data[fdl.name][0]);
            $this.map.startDotId.push(para.data[fdl.startDotId][0]);
            $this.map.endDotId.push(para.data[fdl.endDotId][0]);

            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.pushMap(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'end':
        // console.dir($this.map);
        para.successCallBack();
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};


CGraph.prototype.getDotByLineId = function (lineId) {
  var $this = this;
  var dot = {};

  $this.map.lineId.forEach(function (v, i) {
    if ($this.map.lineId[i] === lineId) {
      dot.startDotId = $this.map.startDotId[i];
      dot.endDotId = $this.map.endDotId[i];
      // dot.startAnchorCoord = $this.map.startAnchorCoord[i];
      // dot.endAnchorCoord = $this.map.endAnchorCoord[i];
    }
  });
  return dot;
};


CGraph.prototype.arrToStrOfCondition = function (arr) {
  if (arr.length === 0) {
    return '\'\'';
  } else if (arr.length === 1) {
    return '\'' + arr[0] + '\'';
  }
  var str = arr.join('\', \'');
  return '[\'' + str + '\']';
};

// 设置参数，返回参数句柄
CGraph.prototype.setPara = function (successCallBack, errorCallBack) {
  var para = {};
  para.successCallBack = successCallBack;
  para.errorCallBack = errorCallBack;
  para.nStep = 0;
  return para;
};


CGraph.prototype.config = {
  mac          : {
    type     : { // 画图元素的类型
      canvas : '0', // 画布
      group  : '1', // 组合
      element: '2', // 元件
      line   : '3', // 连线
    },
    lineStyle: { // 连线样式
      arrowType    : { // 箭头
        arrow     : '0', // 有倒钩的三角箭头
        plainArrow: '1', // 没有倒钩的三角箭头
        diamond   : '2', // 菱形箭头
      },
      connectorType: { // 连接器类型
        flowchart   : '0', // 流程图
        straight    : '1', // 直线
        bezier      : '2', // 贝塞尔曲线
        stateMachine: '3', // 状态机
        geneDraw    : '4', // 组件视图
        eventDraw   : '5', // 事务视图
      },
    },

    anchor: { // 锚点
      type : { // 锚点类型
        start: '0', // 元素作为起点时的锚点
        end  : '1', // 元素作为终点时的锚点
        both : '2', // 元素作为起点和终点时共用的锚点
      },
      point: { // 点
        topCenter   : '0', // 上边居中
        topRight    : '1', // 右上角
        rightMiddle : '2', // 右边居中
        bottomRight : '3', // 右下角
        bottomCenter: '4', // 下边居中
        bottomLeft  : '5', // 左下角
        leftMiddle  : '6', // 左边居中
        topLeft     : '7', // 左上角
        center      : '8', // 正中心
      },
      side : { // 边
        top   : '9', // 上边
        right : '10', // 右边
        bottom: '11', // 下边
        left  : '12', // 左边
      },
      shape: { // 形状
        circle   : '13', // 圆形
        ellipse  : '14', // 椭圆形
        triangle : '15', // 三角形
        diamond  : '16', // 菱形
        rectangle: '17', // 长方形
        square   : '18', // 正方形
      },
    },
  },
  regExp       : {
    isNumber: /^(\-?)\d+(\.\d+)?$/,
  },
  endPoint     : {
    // deleteEndpointsOnEmpty: true, // 此版本名字改成这个了//false使用删除连接线时不会删除端点
    isSource: true,
    isTarget: true,
  },
  jointEndPoint: {
    // deleteEndpointsOnEmpty: false, // 此版本名字改成这个了//false使用删除连接线时不会删除端点
    isSource  : true,
    isTarget  : true,
    paintStyle: {
      fill         : 'transparent',
      // fill: 'green',
      outlineStroke: 'transparent',
    },
    anchor    : 'Center',
  },

  dashLine: '2 2',

  defaultElementData: {
    element_name: '元件',
    size        : {
      width : '100',
      height: '50',
    },
    style       : '',
    nameStyle   : '',
    nameOrigin  : {
      left: '12',
      top : '-8',
    },
    attrib      : {
      selectable  : true,
      nameVisible : true,
      nameSettable: true,
      resizable   : false,
    },
  },
  defaultCanvasData : {
    title     : '',
    size      : {
      width : '200',
      height: '200',
    },
    style     : '',
    nameStyle : '',
    nameOrigin: {
      left: '16',
      top : '-10',
    },
    attrib    : {
      selectable   : true,
      titleVisible : true,
      titleSettable: true,
      resizable    : true,
    },
    gap       : {
      mt: 0,
      mr: 0,
      mb: 0,
      ml: 0,
      pt: 0,
      pr: 0,
      pb: 0,
      pl: 0,
    },
  },
  canvasMinWidth    : '100',
  canvasMinHeight   : '100',
  defaultGroupData  : {
    x_pixel: '100',
    y_pixel: '100',
  },
  defaultLineData   : {
    style : {
      stroke       : '#be850d',
      strokeWidth  : 2,
      dash         : false,
      connectorType: 'flowchart',
      arrowType    : 'default',
    },
    attrib: {
      selectable  : true,
      detachable  : false,
      nameSettable: true,
      nameVisible : false,
    }
  },

};


export default CGraph.prototype;