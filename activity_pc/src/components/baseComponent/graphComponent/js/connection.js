/* eslint-disable */


function CGraph() {
};

/**
 * @callback successCallBack_newLine
 * @param result {string[]} - 连线 id，如：['1']
 */


/**
 * 新建连线
 * @param templateId {string} 连线模板 id
 * @param startType {string} 起点元素的类型
 * @param startId {string} 起点元素的 id
 * @param endType {string} 终点元素的类型
 * @param endId {string} 终点元素的 id
 * @param name {string} 连线名称
 * @param direction {string} 连线箭头方向
 * @param attrib {object|field-line-attrib} - 连线属性，数据结构同 attrib 字段。
 * @param attrib.deletable {boolean} - 是否可删除
 * @param attrib.nameSettable {boolean} - 是否可设置名称。名称为空，则不显示名称区域。
 * @param attrib.detachable {boolean} - 是否可分开连线端点，即是否可拖拽改变起始或结束端点
 * @param successCallBack {successCallBack_newLine} 连线 id
 * @param errorCallBack {errorCallBack} - 返回错误信息
 */
CGraph.prototype.newLine = function (templateId, startType, startId, endType, endId, name,
  direction, attrib, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var fnname = 'CGraph.prototype.newLine';

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
      case 'call_showLine':
        $this.createLine('', templateId, startType, startId, endType, endId, name, direction, attrib,
          function (lineId) {
            para.lineId = lineId;
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.newLine(templateId, startType, startId, endType, endId, name, direction,
                attrib, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack([para.lineId]);
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};

// 用户事件触发后，内部调用
CGraph.prototype.createLine = function (lineId, templateId, startType, startId, endType, endId,
  name, direction, attrib, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var fnname = 'CGraph.prototype.createLine';

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
      case 'isExist':
        para.lineId = '';
        if (!lineId) {
          $this.map.startType.forEach(function (v, i) {
            if (v === startType
              && $this.map.startId[i] === startId
              && $this.map.endType[i] === endType
              && $this.map.endId[i] === endId) {
              para.lineId = $this.map.lineId[i];
            }
          });
          if (para.lineId) {
            para.nStep = 'end';
          } else {
            para.nStep = 'getPairDotId';
          }
        } else {
          para.nStep = 'getPairDotId';
        }
        dbFlag += 1;
        break;
      case 'getPairDotId':
        $this.getPairDotId(startType, startId, endType, endId,
          function (result) {
            para.startDotId = result.startDotId;
            para.endDotId = result.endDotId;
            para.nStep = 'query_lineModule';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.createLine(lineId, templateId, startType, startId, endType, endId, name,
                direction, attrib, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_lineModule':
        objectName = 'lineModule';
        dbData = {};
        dbData[$this.mac.fd.id] = [templateId];
        $this.api.recordRead(objectName, dbData,
          function () {
            var fd = $this.mac.fd.lineModule;
            para.template = {};
            para.template.name = dbData[fd.name][0];
            para.template.direction = dbData[fd.direction][0];
            para.template.style = dbData[fd.style][0];
            para.template.attrib = dbData[fd.attrib][0];
            para.nStep = 'finalData';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.createLine(lineId, templateId, startType, startId, endType, endId, name,
                direction, attrib, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'finalData':
        var fd = $this.mac.fd.line;
        para.data = {};
        para.data[fd.startDotId] = [para.startDotId];
        para.data[fd.endDotId] = [para.endDotId];
        para.data[fd.name] = [name !== '' ? name : para.template.name];
        para.data[fd.direction] = [direction !== '' ? direction : para.template.direction];
        para.data[fd.attrib] = [attrib !== '' ? attrib : para.template.attrib];
        para.data[fd.style] = [para.template.style];
        if (lineId === '') {
          para.nStep = 'new_line';
        } else {
          para.nStep = 'modify_line';
        }
        dbFlag += 1;
        break;
      case 'new_line':
        objectName = 'line';
        parentRecord = $this.rootCanvasId;
        dbData = para.data;
        $this.api.recordNew(objectName, parentRecord, dbData,
          function () {
            para.lineId = dbData[$this.mac.fd.id][0];
            para.nStep = 'call_showLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.createLine(lineId, templateId, startType, startId, endType, endId, name,
                direction, attrib, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'modify_line':
        objectName = 'line';
        dbData = para.data;
        dbData[$this.mac.fd.id] = [lineId];
        $this.api.recordModify(objectName, dbData,
          function () {
            para.lineId = lineId;
            para.nStep = 'call_showLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.createLine(lineId, templateId, startType, startId, endType, endId, name,
                direction, attrib, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'call_showLine':
        $this.showLine(para.lineId, function () {
          para.nStep = 'end';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.createLine(lineId, templateId, startType, startId, endType, endId, name,
              direction, attrib, successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack(para.lineId);
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
 * 【后续版本提供】 修改连线参数
 * @param lineId {string} 连线 id
 * @param name {string} 连线名称
 * @param direction {string} 连线箭头方向
 * @param style {object|field-line-style} - 连线属性，数据结构同 style 字段。
 * @param style.arrowType {string}
 * 箭头样式，可选项有'0-有倒钩的三角箭头（Arrow）'、'1-没有倒钩的三角箭头（PlainArrow）'、'2-菱形箭头（Diamond）'，详见 {@tutorial mac}
 * @param style.connectorType {string}
 * 连接器类型，可选项有'0-Flowchart'、'1-Straight'、'2-Bezier'、'3-State Machine'、'4-geneDraw'、'5-eventDraw'，详见 {@tutorial mac}
 * @param style.dash {boolean} 是否虚线
 * @param style.stroke {string} 连线颜色，支持css中的颜色格式
 * @param style.strokeWidth {number} 连线宽度，即粗细
 * @param attrib {object|field-line-attrib} - 连线属性，数据结构同 attrib 字段。
 * @param attrib.deletable {boolean} - 是否可删除
 * @param attrib.nameSettable {boolean} - 是否可设置名称。名称为空，则不显示名称区域。
 * @param attrib.detachable {boolean} - 是否可分开连线端点，即是否可拖拽改变起始或结束端点
 * @param successCallBack
 * @param errorCallBack
 */
CGraph.prototype.setLine = function (lineId, name, direction, style, attrib, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var fd = $this.mac.fd.line;
  var fnname = 'CGraph.prototype.setLine';

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
      case 'checkParam':
        para.dbData = {};
        para.dbData.id = [lineId];
        para.dbData[fd.name] = [name];
        if (direction !== '' && direction !== null) {
          para.dbData[fd.direction] = [direction];
        }
        if (style !== '' && style !== null) {
          para.dbData[fd.style] = [style];
        }
        if (attrib !== '' && attrib !== null) {
          para.dbData[fd.attrib] = [attrib];
        }
        para.nStep = 'modify_line';
        dbFlag += 1;
        break;
      case 'modify_line':
        objectName = 'line';
        $this.api.recordModify(objectName, para.dbData,
          function () {
            para.nStep = 'showLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.setLine(lineId, name, direction, style, attrib, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'showLine':
        $this.showLine(lineId, function () {
          para.nStep = 'end';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.setLine(lineId, name, direction, style, attrib, successCallBack, errorCallBack);
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
 *
 * 根据组件工具场景获取新的转折点
 * @private
 * @param lineId {string} 连线 id
 * @param successCallBack
 * @param errorCallBack
 */
CGraph.prototype.getGeneTurningPoint = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  var $dbFlag;
  var para;
  // var tp = $this.config.geneTurningPoint.turningPoint;
  var tp = $this.geneTurningPointConfig();
  var tpLine = $this.turningPoint.line;
  var fnname = 'CGraph.prototype.getGeneTurningPoint';
  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;
  while (1) {
    $dbFlag = 0;
    if ($this.debugFlag_szl) {
      console.log('【SZL】' + fnname + ': para.nStep = ' + para.nStep);
    }
    switch (para.nStep) {
      case 0:
      case 'getDot':
        para.dot = $this.getDotByLineId(lineId);
        var $startDot = $($this.jqIdPrefix.dot + para.dot.startDotId);
        para.startX = parseInt($startDot.css('left').replace('px', '')) + $startDot.outerWidth() / 2;
        para.startY = parseInt($startDot.css('top').replace('px', '')) + $startDot.outerHeight() / 2;
        if (para.dot.startDotId === para.dot.endDotId) {
          para.endX = para.startX;
          para.endY = para.startY;
        } else {
          var $endDot = $($this.jqIdPrefix.dot + para.dot.endDotId);
          para.endX = parseInt($endDot.css('left').replace('px', '')) + $endDot.outerWidth() / 2;
          para.endY = parseInt($endDot.css('top').replace('px', '')) + $endDot.outerHeight() / 2;
        }
        para.nStep = 'init';
        $dbFlag += 1;
        break;
      case 'init':
        para.arrTurningPoint = []; // 转点！！
        para.firstLineX = tp.firstLineX;
        para.secondLineX = tp.secondLineX;
        para.thirdLineX = tp.thirdLineX;
        para.fourthLineX = tp.fourthLineX;
        para.fifthLineX = tp.fifthLineX;
        para.sixthLineX = tp.sixthLineX;
        para.midlineX = tp.midlineX;

        para.commonSpace = tp.commonSpace;
        // todo 通过方法获取点所在的容器的左上右下坐标，只有a2d和b2d两种情况需要从容器上方走线：
        // 1、b2d从b在的当前容器上方走线；
        // 2、a2d从第一个容器上方走线（暂定），
        para.firstVesselY = tp.firstVesselY;
        para.vesselY = tp.vesselY;
        para.vesselX = tp.vesselX;
        para.vesselSpace = tp.vesselSpace; // 容器之间的间距
        para.selfConnectedOffset = tp.selfConnectedOffset; // 终点起点为同一个点时，走一个矩形，表示连线
        // todo 走线大体规则:
        /*
         固定间距:
         para.commonSpace=?;

         以下走线走哪个空间具体是指：x方向的进线或出线延伸到具体那个空间后y方向的走线，x方向走线大多是要穿越不同空间的
         所以以下走线所说的走哪个空间是说y方向走线
         一、左边和右边空隙分成4份（具体是等分还是不等分可自定义，可看成空隙中插了3根y轴方向基准线，三根基准线将空隙分成了4个空间）
         左边空隙：1、数据和数据接口（A列，标注）之间的点连接在第一空间；
         2、容器中左边的点（B列）之间连接在第四空间；
         3、数据和数据接口连容器左边的点在第二空间；
         4、容器左边的点连数据和数据接口在第三空间左侧起；
         右边空隙：1、容器右边的点（C列）之间连接在第一空间；
         2、事件和事件接口之间的点（D列）连接在第四空间；
         3、容器右边的点连事件和事件接口的点在第二空间；
         4、事件和事件接口的点连容器右边的点在第三空间；
         特殊情况：1、容器左边的点连事件的点走左边第三空间右侧起和右边第二空间；
         2、数据接口连事件连线较特殊，首先出线后沿着Y向上走一个固定间隔，然后x方向走到左边第三空间右侧起和右边第二空间；
         3、起点和终点为同一个点时，走第一空间

         二、走线一些注意：
         第一第二空间走线贴着右边基准线（实际不存在的线），依次间隔固定间距；
         第三第四空间走线贴着左边基准线，也依次间隔固定间距；（特殊情况的贴着右侧基准线）
         横向走线（除去进线出线的那一段横向走线）不得占用进线出线在X轴方向的区域
         （该区域为进线出线在y轴上下范围，具体多少像素可自定义）

         根据起点和终点的坐标，首先判断走线情况（暂10种情况），示例：A2B表示起点在A列，终点在B列的连线
         1、A2A
         2、B2B
         3、C2C
         4、D2D
         5、A2B
         6、B2A
         7、C2D
         8、D2C
         9、A2D
         10、B2D
         需要的数据包括：
         起点终点坐标
         para.startX;
         para.startY;
         para.endX;
         para.endY;

         六条Y方向基准线X坐标：(Y方向的线)
         para.firstLineX;
         para.secondLineX;
         para.thirdLineX;
         para.fourthLineX;
         para.fifthLineX;
         para.sixthLineX;
         一条中轴线X坐标：（Y方向的线）
         para.midlineX;

         所有容器的坐标（左上右下两点坐标）：
         （暂时全都都走第一个容器上方通过）
         para.vesselX;
         para.vesselY;


         */
        // 第一步 判断起点终点是属于10中情况中的哪一种
        if (para.startX < para.firstLineX && para.endX < para.firstLineX) { // a2a
          para.nStep = 'a2a';
        } else if (para.startX > para.thirdLineX && para.startX < para.midlineX && para.endX > para.thirdLineX && para.endX < para.midlineX) { // b2b
          para.nStep = 'b2b';
        } else if (para.startX > para.midlineX && para.startX < para.fourthLineX && para.endX > para.midlineX && para.endX < para.fourthLineX) { // c2c
          para.nStep = 'c2c';
        } else if (para.startX > para.sixthLineX && para.endX > para.sixthLineX) { // d2d
          para.nStep = 'd2d';
        } else if (para.startX < para.firstLineX && para.endX > para.thirdLineX && para.endX < para.midlineX) { // a2b
          para.nStep = 'a2b';
        } else if (para.startX > para.thirdLineX && para.startX < para.midlineX && para.endX < para.firstLineX) { // b2a
          para.nStep = 'b2a';
        } else if (para.startX > para.midlineX && para.startX < para.fourthLineX && para.endX > para.sixthLineX) { // c2d
          para.nStep = 'c2d';
        } else if (para.startX > para.sixthLineX && para.endX > para.midlineX && para.endX < para.fourthLineX) { // d2c
          para.nStep = 'd2c';
          // }else if( para.startX < para.firstLineX &&  para.endX > para.sixthLineX){//a2d 改为d2a
        } else if (para.startX > para.sixthLineX && para.endX < para.firstLineX) { // a2d 改为d2a
          para.nStep = 'a2d';
        } else if (para.startX > para.sixthLineX && para.endX < para.midlineX && para.endX > para.thirdLineX) { // b2d 改为了d2b
          // para.nStep = 'b2d';
          // b2d先去获取b所在的容器的左上点坐标
          para.nStep = 'getVesselCoord';
        } else {
          para.nStep = 'end'; // todo
        }
        $dbFlag += 1;
        break;
      case 'getVesselCoord':
        // todo 获取当前b所在的容器的左上点坐标，b2d 横跨容器的走线从点所在的当前容器上面过去

        para.nStep = 'b2d';
        $dbFlag += 1;
        break;
      case 'a2a':
        var x_t1; // 第一个转点
        var y_t1;
        var x_tn; // 最后一个转点
        var y_tn;

        // 预计的转点
        x_t1 = para.firstLineX - para.commonSpace;
        y_t1 = para.startY;
        x_tn = x_t1;
        if (para.dot.startDotId === para.dot.endDotId) {
          y_tn = para.startY + para.selfConnectedOffset;
        } else {
          y_tn = para.endY;
        }
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        // 检测Y方向的走线是否与已经存在的线有重叠，有则在原来基础上再向firstLineX远离commonSpace距离，然后再检测一次，如此反复直到没有重叠现象
        // （如果最后Y方向的走线最后走到和A列重叠了，则此次偏移无效，使用上一次偏移的X坐标，重合就重合吧）。
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'b2b':
        var x_t1; // 第一个转点
        var y_t1;
        var x_tn; // 最后一个转点
        var y_tn;
        // 预计的转点
        x_t1 = para.thirdLineX + para.commonSpace;
        y_t1 = para.startY;
        x_tn = x_t1;
        if (para.dot.startDotId === para.dot.endDotId) {
          y_tn = para.startY + para.selfConnectedOffset;
        } else {
          y_tn = para.endY;
        }
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'c2c':
        var x_t1; // 第一个转点
        var y_t1;
        var x_tn; // 最后一个转点
        var y_tn;
        // 预计的转点
        x_t1 = para.fourthLineX - para.commonSpace;
        y_t1 = para.startY;
        x_tn = x_t1;
        if (para.dot.startDotId === para.dot.endDotId) {
          y_tn = para.startY + para.selfConnectedOffset;
        } else {
          y_tn = para.endY;
        }
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'd2d':
        var x_t1; // 第一个转点
        var y_t1;
        var x_tn; // 最后一个转点
        var y_tn;
        // 预计的转点
        x_t1 = para.sixthLineX + para.commonSpace;
        y_t1 = para.startY;
        x_tn = x_t1;
        if (para.dot.startDotId === para.dot.endDotId) {
          y_tn = para.startY + para.selfConnectedOffset;
        } else {
          y_tn = para.endY;
        }
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'a2b':
        var x_t1; // 第一个转点
        var y_t1;
        var x_tn; // 最后一个转点
        var y_tn;
        // 预计的转点
        x_t1 = para.secondLineX - para.commonSpace;
        y_t1 = para.startY;
        x_tn = x_t1;
        y_tn = para.endY;
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'b2a':
        var x_t1; // 第一个转点
        var y_t1;
        var x_tn; // 最后一个转点
        var y_tn;
        // 预计的转点
        x_t1 = para.secondLineX + para.commonSpace;
        y_t1 = para.startY;
        x_tn = x_t1;
        y_tn = para.endY;
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'c2d':
        var x_t1; // 第一个转点
        var y_t1;
        var x_tn; // 最后一个转点
        var y_tn;
        // 预计的转点
        x_t1 = para.fifthLineX - para.commonSpace;
        y_t1 = para.startY;
        x_tn = x_t1;
        y_tn = para.endY;
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'd2c':
        var x_t1; // 第一个转点
        var y_t1;
        var x_tn; // 最后一个转点
        var y_tn;
        // 预计的转点
        x_t1 = para.fifthLineX + para.commonSpace;
        y_t1 = para.startY;
        x_tn = x_t1;
        y_tn = para.endY;
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'a2d':
        var x_t1; // 第1个转点
        var y_t1;
        var x_t2; // 第2个转点
        var y_t2;
        var x_t3; // 第3个转点
        var y_t3;
        var x_t4; // 第4个转点
        var y_t4;
        var x_t5; // 第5个转点
        var y_t5;
        var x_tn; // 最后一个转点
        var y_tn;
        // 预计的转点
        x_t1 = para.fifthLineX - para.commonSpace;
        y_t1 = para.startY;
        x_t2 = x_t1;
        y_t2 = para.firstVesselY - para.commonSpace;
        x_t3 = para.thirdLineX - para.commonSpace;
        y_t3 = y_t2;
        x_t4 = x_t3;
        y_t4 = para.endY - para.commonSpace;
        x_t5 = para.secondLineX - para.commonSpace;
        y_t5 = y_t4;
        x_tn = x_t5;
        y_tn = para.endY;
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_t2, top: y_t2 });
        para.arrTurningPoint.push({ left: x_t3, top: y_t3 });
        para.arrTurningPoint.push({ left: x_t4, top: y_t4 });
        para.arrTurningPoint.push({ left: x_t5, top: y_t5 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'b2d': // TODO 当前起点所在的容器的坐标（左上，暂时只用到左上点坐标，右下？暂时没使用到）
        var x_t1; // 第1个转点
        var y_t1;
        var x_t2; // 第2个转点
        var y_t2;
        var x_t3; // 第3个转点
        var y_t3;
        var x_tn; // 最后一个转点
        var y_tn;
        // 预计的转点
        x_t1 = para.fifthLineX - para.commonSpace;
        y_t1 = para.startY;
        x_t2 = x_t1;
        y_t2 = para.vesselY - para.commonSpace;
        x_t3 = para.thirdLineX - para.commonSpace;
        y_t3 = y_t2;
        x_tn = x_t3;
        y_tn = para.endY;
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });
        para.arrTurningPoint.push({ left: x_t2, top: y_t2 });
        para.arrTurningPoint.push({ left: x_t3, top: y_t3 });
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'checkLine':
        for (var i = 0; i < para.arrTurningPoint.length - 1; i++) {
          // 获取所有线段信息
          var lineJson = tpLine;
          // 依次检测线段是否和某id的线中的某线段有重合
          for (var key in lineJson) {
            var arrCoord = lineJson[key]; // [{left:x_t1,top:y_t1},{left:x_t2,top:y_t3},...,{left:x_tn,top:y_tn}]
            for (var j = 0; j < arrCoord.length - 1; j++) {
              var coordObj1 = para.arrTurningPoint[i];
              var coordObj2 = para.arrTurningPoint[i + 1];
              // todo 只有a2d和b2d两种情况 有横向的走线（进线出线那一段横向的线全都不检测重合问题）；
              // 其中a2d有两段横向走线，一个是首先出线后沿着Y向上走一个固定间隔，然后x方向走到左边第三空间右侧起，这个横向走线是为了不与出线和进线重叠
              // 另一段横向走线是a2d和b2d都有的，横跨容器上方的走线
              if (coordObj1.top == coordObj2.top) {
                if (arrCoord[j].top == arrCoord[j + 1].top && arrCoord[j].top == coordObj1.top) {
                  // 在同一条直线上 （x方向的线段）
                  // 开始判断是否有重合
                  var largerValue1;
                  var smallerValue1;
                  if (coordObj1.left < coordObj2.left) {
                    largerValue1 = coordObj2.left;
                    smallerValue1 = coordObj1.left;
                  } else {
                    largerValue1 = coordObj1.left;
                    smallerValue1 = coordObj2.left;
                  }
                  var largerValue2;
                  var smallerValue2;
                  if (arrCoord[j].left < arrCoord[j + 1].left) {
                    largerValue2 = arrCoord[j + 1].left;
                    smallerValue2 = arrCoord[j].left;
                  } else {
                    largerValue2 = arrCoord[j].left;
                    smallerValue2 = arrCoord[j + 1].left;
                  }
                  if (largerValue1 < smallerValue2 || smallerValue1 > largerValue2) { // 表示没有重合
                    // TODO nothing
                  } else {
                    // 表示线段有重合，需要调整,Y坐标减去commonSpace
                    var yCoord1;
                    var yCoord2;
                    // todo 如果是第一个容器（容器上面空白较多，特殊处理一下，走线不设置上限）
                    if (para.firstVesselY == para.vesselY) {
                      yCoord1 = coordObj1.top - para.commonSpace;
                      yCoord2 = yCoord1;
                    } else {
                      yCoord1 = (coordObj1.top - para.commonSpace) > (para.vesselY - para.vesselSpace) ? (coordObj1.top - para.commonSpace) : coordObj1.top;
                      yCoord2 = yCoord1;
                    }
                    para.arrTurningPoint.splice(i, 2,
                      { left: coordObj1.left, top: yCoord1 },
                      { left: coordObj2.left, top: yCoord2 });
                    if (yCoord1 == coordObj1.top) {
                      // 不在检测了，再调整走线偏移就到了上一个容器上了，减无可减
                    } else {
                      j == 0 ? j : j--; // 线段两点坐标调整过后，重新再检测一遍
                      i == 0 ? i : i--;
                    }
                  }
                }
              } else if (coordObj1.left == coordObj2.left
                && arrCoord[j].left == arrCoord[j + 1].left
                && arrCoord[j].left == coordObj1.left) {
                // 在同一条直线上 （y方向的线段）
                // 开始判断有无重合
                var largerValue1;
                var smallerValue1;
                if (coordObj1.top < coordObj2.top) {
                  largerValue1 = coordObj2.top;
                  smallerValue1 = coordObj1.top;
                } else {
                  largerValue1 = coordObj1.top;
                  smallerValue1 = coordObj2.top;
                }
                var largerValue2;
                var smallerValue2;
                if (arrCoord[j].top < arrCoord[j + 1].top) {
                  largerValue2 = arrCoord[j + 1].top;
                  smallerValue2 = arrCoord[j].top;
                } else {
                  largerValue2 = arrCoord[j].top;
                  smallerValue2 = arrCoord[j + 1].top;
                }
                if (largerValue1 < smallerValue2 || smallerValue1 > largerValue2) { // 表示没有重合
                  // TODO nothing
                } else {
                  // 有重合，需要调整
                  // 根据线段（可使用一个点坐标）判断该点相对六根基准线的位置
                  // 以此来判定坐标是加commonSpace还是减commonSpace
                  var xCoord1;
                  var xCoord2;
                  if (coordObj1.left < para.firstLineX) {
                    xCoord1 = ((coordObj1.left - para.commonSpace) > para.startX && (coordObj1.left - para.commonSpace) > para.endX) ? (coordObj1.left - para.commonSpace) : coordObj1.left;
                    xCoord2 = xCoord1;
                  } else if (coordObj1.left > para.firstLineX && coordObj1.left < para.secondLineX) {
                    xCoord1 = (coordObj1.left - para.commonSpace) > para.firstLineX ? (coordObj1.left - para.commonSpace) : coordObj1.left;
                    xCoord2 = xCoord1;
                  } else if (coordObj1.left > para.secondLineX && coordObj1.left < para.midlineX) {
                    // 第三空间特殊处理，又分成两部分，左半部分走b2a的线，线贴着secondLineX起；右半部分走a2d和b2d的线，线贴着thirdLineX起；
                    if (coordObj1.left < para.secondLineX + (para.thirdLineX - para.secondLineX) / 2) {
                      xCoord1 = (coordObj1.left + para.commonSpace) < para.secondLineX + (para.thirdLineX - para.secondLineX) / 2 ? (coordObj1.left + para.commonSpace) : coordObj1.left;
                      xCoord2 = xCoord1;
                    } else if (coordObj1.left > para.secondLineX + (para.thirdLineX - para.secondLineX) / 2 && coordObj1.left < para.thirdLineX) {
                      xCoord1 = (coordObj1.left - para.commonSpace) > para.secondLineX + (para.thirdLineX - para.secondLineX) / 2 ? (coordObj1.left - para.commonSpace) : coordObj1.left;
                      xCoord2 = xCoord1;
                    } else if (coordObj1.left > para.thirdLineX) {
                      xCoord1 = (coordObj1.left + para.commonSpace) < para.startX ? (coordObj1.left + para.commonSpace) : coordObj1.left;
                      xCoord2 = xCoord1;
                    }
                  } else if (coordObj1.left > para.midlineX && coordObj1.left < para.fourthLineX) {
                    xCoord1 = (coordObj1.left - para.commonSpace) > para.startX ? (coordObj1.left - para.commonSpace) : coordObj1.left;
                    xCoord2 = xCoord1;
                  } else if (coordObj1.left < para.fifthLineX) {
                    xCoord1 = (coordObj1.left - para.commonSpace) > para.fourthLineX ? (coordObj1.left - para.commonSpace) : coordObj1.left;
                    xCoord2 = xCoord1;
                  } else if (coordObj1.left < para.sixthLineX) {
                    xCoord1 = (coordObj1.left + para.commonSpace) < para.sixthLineX ? (coordObj1.left + para.commonSpace) : coordObj1.left;
                    xCoord2 = xCoord1;
                  } else if (coordObj1.left > para.sixthLineX) {
                    xCoord1 = ((coordObj1.left + para.commonSpace) < para.startX && (coordObj1.left + para.commonSpace) < para.endX) ? (coordObj1.left + para.commonSpace) : coordObj1.left;
                    xCoord2 = xCoord1;
                  }
                  para.arrTurningPoint.splice(i, 2,
                    { left: xCoord1, top: coordObj1.top },
                    { left: xCoord2, top: coordObj2.top });
                  if (xCoord1 == coordObj1.left) {
                    // 不在检测了，再调整走线偏移就到了基准线上了，减无可减
                  } else {
                    j == 0 ? j : j--; // 线段两点坐标调整过后，重新再检测一遍
                    i == 0 ? i : i--;
                  }
                }
              }
            }
          }
        }
        if (para.dot.startDotId === para.dot.endDotId) { // 起点终点为同一个点比a2a，b2b，c2c,d2d多一个点，这里单独加上
          // todo 起点终点Y坐标和实际画出来的线有偏移，这里临时加偏移量，仅做测试
          para.arrTurningPoint.push({
            left: para.startX + 6,
            top : para.startY + para.selfConnectedOffset
          });
        }
        para.nStep = 'end';
        $dbFlag += 1;
        break;
      case 'end':
        tpLine[lineId] = para.arrTurningPoint;
        para.successCallBack(para.arrTurningPoint);
        return;
    }
    if (++$dbFlag === 1) {
      return;
    }
  }
};

CGraph.prototype.geneTurningPointConfig = function () {
  var $this = this;
  var leftCanvasWidth = 146;
  var rightCanvasWidth = 146;
  var centerCanvasWidth = 320;

  var $root = $($this.jqIdPrefix.canvas + $this.rootCanvasId);
  var rootWidth = $root.width();
  var midlineX = rootWidth / 2;
  var vesselX = midlineX - centerCanvasWidth / 2;
  var leftGap = (vesselX - leftCanvasWidth) / 4;
  var firstLineX = leftCanvasWidth + leftGap;
  var secondLineX = firstLineX + leftGap;
  var thirdLineX = secondLineX + leftGap;

  var rightGap = (rootWidth - rightCanvasWidth - (vesselX + centerCanvasWidth)) / 4;
  var fourthLineX = vesselX + centerCanvasWidth + rightGap;
  var fifthLineX = fourthLineX + rightGap;
  var sixthLineX = fifthLineX + rightGap;

  var turningPoint = {
    firstLineX         : firstLineX, // 左边空隙3条基准线
    secondLineX        : secondLineX,
    thirdLineX         : thirdLineX,
    fourthLineX        : fourthLineX, // 右边空隙3条基准线
    fifthLineX         : fifthLineX,
    sixthLineX         : sixthLineX,
    midlineX           : midlineX, // 中轴线
    commonSpace        : 5, // 线之间的固定间隔
    vesselY            : 180,
    vesselX            : vesselX,
    firstVesselY       : 180, // 1、b2d从b在的当前容器上方走线； 2、a2d从第一个容器上方走线（暂定），
    vesselSpace        : 50, // 容器之间的间距
    selfConnectedOffset: 15, // 终点起点为同一个点时在，走一个矩形，表示连线
  };
  return turningPoint;
}


CGraph.prototype.getEventTurningPoint = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var tpLine = $this.turningPoint.line;
  var fnname = 'CGraph.prototype.getEventTurningPoint';

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
      case 'lineInfo':
        para.start = {};
        para.end = {};
        para.start.gridArea = {};
        para.end.gridArea = {};
        para.start.element = {};
        para.end.element = {};
        var $root = $($this.jqIdPrefix.canvas + $this.rootCanvasId);
        var index = $this.map.lineId.indexOf(lineId);
        para.startElementId = $this.map.startId[index];
        para.endElementId = $this.map.endId[index];
        var $startElement = $($this.jqIdPrefix.element + para.startElementId);
        var $endElement = $($this.jqIdPrefix.element + para.endElementId);
        var $startLane = $startElement.parent();
        var $endLane = $endElement.parent();
        var startDotId = $this.map.startDotId[index];
        var endDotId = $this.map.endDotId[index];
        var $startDot = $($this.jqIdPrefix.dot + startDotId);
        var $endDot = $($this.jqIdPrefix.dot + endDotId);


        // start element
        var gridArea = $this.getGridArea($this.config.mac.type.element, para.startElementId);
        var startRow = gridArea[0];

        var gridTemplateColumns = $startLane.css('grid-template-columns');
        var laneWidth = parseInt(gridTemplateColumns.replace('px', ''));
        var gridTemplateRows = $startLane.css('grid-template-rows');
        gridTemplateRows = gridTemplateRows.split(' ');
        var sumRow = 0;
        gridTemplateRows.forEach(function (v, i) {
          sumRow += parseInt(v.replace('px', ''));
          if (i === parseInt(gridArea[0]) - 2) {
            para.start.gridArea.topLeftX = $startLane.offset().left - $root.offset().left;
            para.start.gridArea.topLeftY = sumRow + $startLane.offset().top - $root.offset().top;
          }
          if (i === parseInt(gridArea[0]) - 1) {
            para.start.gridArea.bottomRightX = laneWidth + $startLane.offset().left - $root.offset().left;
            para.start.gridArea.bottomRightY = sumRow + $startLane.offset().top - $root.offset().top;
            return false;
          }
        });


        para.start.x = parseInt($startDot.css('left').replace('px', '')) + $startDot.outerWidth() / 2;
        para.start.y = parseInt($startDot.css('top').replace('px', '')) + $startDot.outerHeight() / 2;
        para.start.element.topLeftX = $startElement.offset().left - $root.offset().left;
        para.start.element.topLeftY = $startElement.offset().top - $root.offset().top;
        para.start.element.bottomRightX = para.start.element.topLeftX + $startElement.outerWidth();
        para.start.element.bottomRightY = para.start.element.topLeftY + $startElement.outerHeight();

        if ($startDot.hasClass('jtk-endpoint-anchor-top')) {
          para.start.location = 0; // 连接点在当前元件的位置（上下左右）对应值为0/1/2/3；
        } else if ($startDot.hasClass('jtk-endpoint-anchor-right')) {
          para.start.location = 3; // 连接点在当前元件的位置（上下左右）对应值为0/1/2/3；
        } else if ($startDot.hasClass('jtk-endpoint-anchor-bottom')) {
          para.start.location = 1; // 连接点在当前元件的位置（上下左右）对应值为0/1/2/3；
        } else if ($startDot.hasClass('jtk-endpoint-anchor-left')) {
          para.start.location = 2; // 连接点在当前元件的位置（上下左右）对应值为0/1/2/3；
        }


        // end element
        var gridArea = $this.getGridArea($this.config.mac.type.element, para.endElementId);
        var endRow = gridArea[0];
        var gridTemplateColumns = $endLane.css('grid-template-columns');
        var laneWidth = parseInt(gridTemplateColumns.replace('px', ''));
        var gridTemplateRows = $endLane.css('grid-template-rows');
        gridTemplateRows = gridTemplateRows.split(' ');
        var sumRow = 0;
        gridTemplateRows.forEach(function (v, i) {
          sumRow += parseInt(v.replace('px', ''));
          if (i === parseInt(gridArea[0]) - 2) {
            para.end.gridArea.topLeftX = $endLane.offset().left - $root.offset().left;
            para.end.gridArea.topLeftY = sumRow + $endLane.offset().top - $root.offset().top;
          }
          if (i === parseInt(gridArea[0]) - 1) {
            para.end.gridArea.bottomRightX = laneWidth + $endLane.offset().left - $root.offset().left;
            para.end.gridArea.bottomRightY = sumRow + $endLane.offset().top - $root.offset().top;
          }
        });


        if (startDotId === endDotId) {
          para.end.x = para.start.x;
          para.end.y = para.start.y;
        } else {
          para.end.x = parseInt($endDot.css('left').replace('px', '')) + $endDot.outerWidth() / 2;
          para.end.y = parseInt($endDot.css('top').replace('px', '')) + $endDot.outerHeight() / 2;
        }
        para.end.element.topLeftX = $endElement.offset().left - $root.offset().left;
        para.end.element.topLeftY = $endElement.offset().top - $root.offset().top;
        para.end.element.bottomRightX = para.end.element.topLeftX + $endElement.outerWidth();
        para.end.element.bottomRightY = para.end.element.topLeftY + $endElement.outerHeight();

        if ($endDot.hasClass('jtk-endpoint-anchor-top')) {
          para.end.location = 0; // 连接点在当前元件的位置（上下左右）对应值为0/1/2/3；
        } else if ($endDot.hasClass('jtk-endpoint-anchor-bottom')) {
          para.end.location = 1; // 连接点在当前元件的位置（上下左右）对应值为0/1/2/3；
        } else if ($endDot.hasClass('jtk-endpoint-anchor-left')) {
          para.end.location = 2; // 连接点在当前元件的位置（上下左右）对应值为0/1/2/3；
        } else if ($endDot.hasClass('jtk-endpoint-anchor-right')) {
          para.end.location = 3; // 连接点在当前元件的位置（上下左右）对应值为0/1/2/3；
        }

        var elementPosition = {};
        $root.find('.canvas').each(function (i) {
          elementPosition[i] = [];
          $(this).children('.element').each(function () {
            var elementId = $(this).attr('id').replace($this.jsIdPrefix.element, '');
            var p = $this.getGridArea($this.config.mac.type.element, elementId);
            elementPosition[i].push(p[0]);
          })
        });
        var isDirectConnectionFlag = false;
        if ($startLane.is($endLane)) {
          var n = $root.children('.canvas').index($startLane[0]);
          // 上方 -> 下方
          if (para.start.location === 1 && para.end.location === 0 && startRow < endRow) {
            if (endRow - startRow === 1) {
              isDirectConnectionFlag = true;
            } else {
              isDirectConnectionFlag = !elementPosition[n].some(function (v) {
                return v > startRow && v < endRow;
              });
            }
          }
          // 上方 <- 下方
          if (para.start.location === 0 && para.end.location === 1 && startRow > endRow) {
            if (startRow - endRow === 1) {
              isDirectConnectionFlag = true;
            } else {
              isDirectConnectionFlag = !elementPosition[n].some(function (v) {
                return v < startRow && v > endRow;
              });
            }
          }
        } else if (startRow === endRow) {
          var m = $root.children('.canvas').index($startLane[0]);
          var n = $root.children('.canvas').index($endLane[0]);
          var arrKey = Object.keys(elementPosition);
          // 左泳道 -> 右泳道
          if (para.start.location === 3 && para.end.location === 2 && m < n) {
            if (n - m === 1) {
              isDirectConnectionFlag = true;
            } else {
              isDirectConnectionFlag = !arrKey.some(function (v) {
                var index = elementPosition[v].indexOf(startRow);
                return index > m && index < n;
              });
            }
          }
          // 左泳道 <- 右泳道
          if (para.start.location === 2 && para.end.location === 3 && m > n) {
            if (m - n === 1) {
              isDirectConnectionFlag = true;
            } else {
              isDirectConnectionFlag = !arrKey.some(function (v) {
                var index = elementPosition[v].indexOf(startRow);
                return index < m && index > n;
              });
            }
          }
        }
        if (isDirectConnectionFlag) { // 直连
          para.arrTurningPoint = [];
          // para.turningPointCoord.push(startDotData.id[0]);
          // para.turningPointCoord.push(endDotData.id[0]);
          // para.turningPointCoord.push("");//todo 需要空处理吗？？？
          para.nStep = 'end';
        } else { // 不能直连的，都需要获取中间所有的转点
          para.nStep = 'getTurningPoint';
        }
        dbFlag += 1;
        break;
      case 'getTurningPoint':
        $this.calculateEventTurningPoint(para.start, para.end, function (result) {
          para.arrTurningPoint = result;
          // if (para.arrTurningPoint.length > 0) {
          //   tpLine[lineId] = para.arrTurningPoint;
          // }
          para.nStep = 'end';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.getEventTurningPoint(lineId, successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case 'end':
        tpLine[lineId] = para.arrTurningPoint;
        para.successCallBack(para.arrTurningPoint);
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};


// start={};//起点相关信息
// start.x;//起点x坐标；
// start.y;//起点y坐标；
// start.gridArea={};//起点所在当前框（子画布）的信息（边框不同于走线，边框只视为没有宽度的线）；
// start.gridArea.topLeftX;//起点所在当前框（子画布）的边框左上x坐标；
// start.gridArea.topLeftY;//起点所在当前框（子画布）的边框左上y坐标；
// start.gridArea.bottomRightX;//起点所在当前框（子画布）的边框右下x坐标；
// start.gridArea.bottomRightY;//起点所在当前框（子画布）的边框右下y坐标；
// start.element={};//起点所在当前元件的信息；
// start.element.topLeftX;//起点所在元件的左上x坐标；
// start.element.topLeftY;//起点所在元件的左上y坐标；
// start.element.bottomRightX;//起点所在元件的右下x坐标；
// start.element.bottomRightY;//起点所在元件的右下y坐标；
// start.location;//起点在当前元件的位置（上下左右）对应值为0/1/2/3；
// start.number;//此number是点在上/下/左/右中序号，例如：上 只有一个点，那么这个点number就是0，有两个就是0,1，以此类推；
//
//
// end={};//终点相关信息；
// end.x;//终点x坐标；
// end.y;//终点y坐标；
// end.gridArea={};//终点所在当前框（子画布）的信息（边框不同于走线，边框只视为没有宽度的线）；
// end.gridArea.topLeftX;//终点所在当前框（子画布）的边框左上x坐标；
// end.gridArea.topLeftY;//终点所在当前框（子画布）的边框左上y坐标；
// end.gridArea.bottomRightX;//终点所在当前框（子画布）的边框右下x坐标；
// end.gridArea.bottomRightY;//终点所在当前框（子画布）的边框右下y坐标；
// end.element={};//终点所在当前元件的信息；
// end.element.topLeftX;//终点所在元件的左上x坐标；
// end.element.topLeftY;//终点所在元件的左上y坐标；
// end.element.bottomRightX;//终点所在元件的右下x坐标；
// end.element.bottomRightY;//终点所在元件的右下y坐标；
// end.location;//终点在当前元件的位置（上下左右）；
// end.number;//此number是点在上/下/左/右中序号，例如：上 只有一个点，那么这个点number就是0，有两个就是0,1，以此类推；


//获取走线的全部转点
CGraph.prototype.calculateEventTurningPoint = function (start, end, successCallBack, errorCallBack) {
  var $this = this;
  var $dbFlag;
  var para;
  var tpLine = $this.turningPoint.line;

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;
  while (1) {
    $dbFlag = 0;
    switch (para.nStep) {
      case 0:
        $this.commonSpace = 5;//设定好的间距，固定距离，平行走线之间要保持的最短间距，尽量做到同一个方向的线段不重合
        para.arrTurningPoint = [];
        var x_t1;//转点1坐标:(x_t1,y_t1)
        var y_t1;
        var x_tn;//确认转点n坐标：(x_tn,y_tn)
        var y_tn;

        //第一步:
        // 确认第一段出线(确认转点1坐标:(x_t1,y_t1))
        if (start.location == 0) {
          x_t1 = start.x;
          y_t1 = start.gridArea.topLeftY + $this.commonSpace;
        } else if (start.location == 1) {
          x_t1 = start.x;
          y_t1 = start.gridArea.bottomRightY - $this.commonSpace;
        } else if (start.location == 2) {
          x_t1 = start.gridArea.topLeftX + $this.commonSpace;
          y_t1 = start.y;
        } else if (start.location == 3) {
          x_t1 = start.gridArea.bottomRightX - $this.commonSpace;
          y_t1 = start.y;
        }
        para.x_t1 = x_t1;
        para.y_t1 = y_t1;
        para.arrTurningPoint.push({ left: x_t1, top: y_t1 });

        //确认最后一段进线（确认转点n坐标：(x_tn,y_tn)）
        if (end.location == 0) {
          x_tn = end.x;
          y_tn = end.gridArea.topLeftY + $this.commonSpace;
        } else if (end.location == 1) {
          x_tn = end.x;
          y_tn = end.gridArea.bottomRightY - $this.commonSpace;
        } else if (end.location == 2) {
          x_tn = end.gridArea.topLeftX + $this.commonSpace;
          y_tn = end.y;
        } else if (end.location == 3) {
          x_tn = end.gridArea.bottomRightX - $this.commonSpace;
          y_tn = end.y;
        }
        para.x_tn = x_tn;
        para.y_tn = y_tn;
        para.arrTurningPoint.push({ left: x_tn, top: y_tn });

        //第二步：确认中间所有转点（除最后一段进线），分以下3种情况考虑
        if (start.gridArea.topLeftX == end.gridArea.topLeftX) {
          para.nStep = 'sameColumn';//同一列
        } else if (start.gridArea.topLeftY == end.gridArea.topLeftY) {
          para.nStep = 'sameLine';//同一行
        } else {
          para.nStep = 'differentLineAndColumn';//不同列，不同行
        }
        $dbFlag += 1;
        break;
      case 'sameColumn':
        //1、同一列
        //转点1：(x_t1,y_t1)//在第一步已经确定
        //转点n(最后一个转点)：(x_tn,y_tn)//在第一步已经确定
        var x_t1 = para.x_t1;
        var y_t1 = para.y_t1;
        var x_tn = para.x_tn;
        var y_tn = para.y_tn;
        if (start.location == 2 || start.location == 3) {
          if (start.location == end.location && x_t1 == x_tn) {
            //2连2，3连3，出线与进线直接连接就ok
            //转点为(x_t1,y_t1)和(x_tn,y_tn)

          } else {
            //2或者3连0、1、3
            if (end.location == 0 || end.location == 1) {
              var x_t2 = x_t1;
              var y_t2 = y_tn;
              //转点为(x_t1,y_t1),(x_t2,y_t2),(x_tn,y_tn)
              para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 });
            } else {
              var x_t2 = x_t1;
              var y_t2 = end.gridArea.topLeftY + $this.commonSpace;
              var x_t3 = x_tn;
              var y_t3 = y_t2;
              //转点为(x_t1,y_t1),(x_t2,y_t2),(x_t3,y_t3),(x_tn,y_tn)
              para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 }, {
                left: x_t3,
                top : y_t3
              });
            }
          }
        } else if (start.location == 0 || start.location == 1) {
          if (end.location == 2 || end.location == 3) {
            // 0连2，1连2	，0连3,1连3
            var x_t2 = x_tn;
            var y_t2 = y_t1;
            //转点为(x_t1,y_t1),(x_t2,y_t2),(x_tn,y_tn)
            para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 });
          } else if (end.location == 0 || end.location == 1) {
            //第二段往右走线，0连0,1连0,0连1,1连1
            var x_t2 = start.gridArea.bottomRightX - $this.commonSpace;
            var y_t2 = y_t1;
            var x_t3 = x_t2;
            var y_t3 = y_tn;
            //转点为(x_t1,y_t1),(x_t2,y_t2),(x_t3,y_t3)(x_tn,y_tn)
            para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 }, {
              left: x_t3,
              top : y_t3
            });
          }
        }
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'sameLine':
        //2、同一行
        //转点1：(x_t1,y_t1)//在第一步已经确定
        //转点n(最后一个转点)：(x_tn,y_tn)//在第一步已经确定
        var x_t1 = para.x_t1;
        var y_t1 = para.y_t1;
        var x_tn = para.x_tn;
        var y_tn = para.y_tn;
        if (start.location == 0 || start.location == 1) {
          if (end.location == start.location && y_t1 == y_tn) {//0连0;1连1
            //转点为(x_t1,y_t1)和(x_tn,y_tn)
          } else {
            if (end.location == 2 || end.location == 3) {//0连2,3；1连2,3
              var x_t2 = x_tn;
              var y_t2 = y_t1;
              //转点为(x_t1,y_t1),(x_t2,y_t2),(x_tn,y_tn)
              para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 });
            } else {//0连1；1连0
              var x_t2 = end.gridArea.topLeftX + $this.commonSpace;
              var y_t2 = y_t1;
              var x_t3 = x_t2;
              var y_t3 = y_tn;
              //转点为(x_t1,y_t1),(x_t2,y_t2),(x_t3,y_t3)(x_tn,y_tn)
              para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 }, {
                left: x_t3,
                top : y_t3
              });
            }
          }
        } else if (start.location == 2 || start.location == 3) {
          if (end.location == 0 || end.location == 1) {//2连0；2连1；3连0；3连1
            var x_t2 = x_t1;
            var y_t2 = y_tn;
            //转点为(x_t1,y_t1),(x_t2,y_t2),(x_tn,y_tn)
            para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 });
          } else {//2连2；2连3；3连2；3连3
            var x_t2 = x_t1;
            var y_t2 = end.gridArea.bottomRightY - $this.commonSpace;
            var x_t3 = x_tn;
            var y_t3 = y_t2;
            //转点为(x_t1,y_t1),(x_t2,y_t2),(x_t3,y_t3)(x_tn,y_tn)
            para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 }, {
              left: x_t3,
              top : y_t3
            });
          }
        }
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'differentLineAndColumn':
        //3、不同行，不同列
        //转点1：(x_t1,y_t1)//在第一步已经确定
        //转点n(最后一个转点)：(x_tn,y_tn)//在第一步已经确定var x_t1 = para.x_t1;
        var x_t1 = para.x_t1;
        var y_t1 = para.y_t1;
        var x_tn = para.x_tn;
        var y_tn = para.y_tn;
        if (start.location == 0 || start.location == 1) {
          if (end.location == 2 || end.location == 3) {//0连2；0连3；1连2；1连3
            var x_t2 = x_tn;
            var y_t2 = y_t1;
            //转点为(x_t1,y_t1),(x_t2,y_t2),(x_tn,y_tn)
            para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 });
          } else {//0连0；0连1；1连0；1连1
            var x_t2;
            var y_t2;
            var x_t3;
            var y_t3;
            if (x_t1 < x_tn) {//终点元件在起点元件偏右
              // x_t2=start.gridArea.bottomRightX-$this.commonSpace;
              // y_t2=y_t1;
              // x_t3=x_t2;
              // y_t3=y_tn;
              x_t2 = end.gridArea.topLeftX + $this.commonSpace;
              y_t2 = y_t1;
              x_t3 = x_t2;
              y_t3 = y_tn;
            } else {//终点元件在起点元件偏左
              x_t2 = end.gridArea.bottomRightX - $this.commonSpace;
              y_t2 = y_t1;
              x_t3 = x_t2;
              y_t3 = y_tn;
            }
            //转点为(x_t1,y_t1),(x_t2,y_t2),(x_t3,y_t3)(x_tn,y_tn)
            para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 }, {
              left: x_t3,
              top : y_t3
            });
          }
        } else if (start.location == 2 || start.location == 3) {
          var x_t2;
          var y_t2;
          var x_t3;
          var y_t3;
          var x_t4;
          var y_t4;
          if (end.location == 2 || end.location == 3) {
            x_t2 = x_t1;
            if (y_t1 < y_tn) {
              y_t2 = start.gridArea.bottomRightY - $this.commonSpace;
            } else {
              y_t2 = start.gridArea.topLeftY + $this.commonSpace;
            }
            x_t3 = x_tn;
            y_t3 = y_t2;
            //转点为(x_t1,y_t1),(x_t2,y_t2),(x_t3,y_t3)(x_tn,y_tn)
            para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 }, {
              left: x_t3,
              top : y_t3
            });
          } else if (end.location == 0 || end.location == 1) {
            x_t2 = x_t1;
            if (y_t1 < y_tn) {
              y_t2 = start.gridArea.bottomRightY - $this.commonSpace;
            } else {
              y_t2 = start.gridArea.topLeftY + $this.commonSpace;
            }
            if (x_t1 < x_tn) {
              x_t3 = end.gridArea.topLeftX + $this.commonSpace;
            } else {
              x_t3 = end.gridArea.bottomRightX - $this.commonSpace;
            }
            y_t3 = y_t2;
            x_t4 = x_t3;
            y_t4 = y_tn;
            //转点为(x_t1,y_t1),(x_t2,y_t2),(x_t3,y_t3)(x_tn,y_tn)
            para.arrTurningPoint.splice(1, 0, { left: x_t2, top: y_t2 }, {
              left: x_t3,
              top : y_t3
            }, { left: x_t4, top: y_t4 });
          }
        }
        para.nStep = 'checkLine';
        $dbFlag += 1;
        break;
      case 'checkLine':
        /**
         *
         * 检测每一段线是否和其他线有重合，以线段重合部分的长度来判断！！
         从元件引出的第一段线不检测（对于同一个点出的线有重复也不考虑），第一段线始终是向着该起点对应的边框，直到距离边框固定距离；
         第二段，始终是平行于边框走线（间距是固定距离）检测是否有重合，
         有的话，此条线向着远离边框的方向再空出固定的间距（具体是向左移，向右移，向上移，向下移视具体情况判断），
         然后再检测该线段是否和其他已经存在的线有重合，有的话，继续向着远离边框的方向再空出固定的间距，。。。。直到检测出没有重合的情况；
         其他中间线段也同样处理；
         最后一段进线也不检测（对于同一个点进的线有重复也不考虑）；

         //具体如何检测线段有无重合
         所有相同走向（同为x方向或者同为y方向）的线段（两端点坐标），根据坐标重合的长度，
         如果两条线段有一个点及以上重合部分，就判断为两条线段有重合；

         //如何确定偏移方向？
         根据要调整位置的线段两端点，如何确定调整线移动的方向  ??????
         */

        // $this.useArea={//已经使用了区域
        //数组中的索引表示走线的所有转点的顺序（未包括起点和终点，因为第一段和最后一段不检测）
        //     line:{lineID:[{left:x_t1,top:y_t1},{left:x_t2,top:y_t3},...,{left:x_tn,top:y_tn}],.......},
        //     element:[elementID:{topLeftX,topLeftY,bottomRightX,bottomRightY},.....],
        // };

        // 检测是否和其他线有重合（不穿元件是首要条件，如果走线区域已满，线就是重合也不能穿元件）
        //拿到一条走线全部转点 para.arrTurningPoint
        // [{left:x_t1,top:y_t1},{left:x_t2,top:y_t2},{left:x_t3,top:y_t3}.....{left:x_tn,top:y_tn}]
        for (var i = 0; i < para.arrTurningPoint.length - 1; i++) {
          // var coordObj1 = para.arrTurningPoint[i];
          // var coordObj2 = para.arrTurningPoint[i+1];
          //获取所有线段信息
          var lineJson = tpLine;
          //依次检测线段是否和某id的线中的某线段有重合
          for (var key in lineJson) {
            var arrCoord = lineJson[key];//[{left:x_t1,top:y_t1},{left:x_t2,top:y_t3},...,{left:x_tn,top:y_tn}]
            for (var j = 0; j < arrCoord.length - 1; j++) {
              var coordObj1 = para.arrTurningPoint[i];
              var coordObj2 = para.arrTurningPoint[i + 1];
              if (coordObj1.top == coordObj2.top
                && arrCoord[j].top == arrCoord[j + 1].top
                && arrCoord[j].top == coordObj1.top) {
                //在同一条直线上 （x方向的线段）
                //开始判断是否有重合
                var largerValue1;
                var smallerValue1;
                if (coordObj1.left < coordObj2.left) {
                  largerValue1 = coordObj2.left;
                  smallerValue1 = coordObj1.left;
                } else {
                  largerValue1 = coordObj1.left;
                  smallerValue1 = coordObj2.left;
                }
                var largerValue2;
                var smallerValue2;
                if (arrCoord[j].left < arrCoord[j + 1].left) {
                  largerValue2 = arrCoord[j + 1].left;
                  smallerValue2 = arrCoord[j].left;
                } else {
                  largerValue2 = arrCoord[j].left;
                  smallerValue2 = arrCoord[j + 1].left;
                }
                if (largerValue1 < smallerValue2 || smallerValue1 > largerValue2) {//表示没有重合
                  //TODO nothing
                } else {
                  //表示线段有重合，需要调整
                  //根据线段（可使用一个点坐标）判断该点在其当前框内的区域，是在元件上方还是下方，
                  //以此来判定坐标是加commonSpace还是减commonSpace
                  if (coordObj1.top > start.gridArea.topLeftY
                    && coordObj1.top + $this.commonSpace < start.element.topLeftY) {
                    //在起点元件上方， y坐标加commonSpace
                    para.arrTurningPoint.splice(i, 2,
                      {
                        left: coordObj1.left,
                        top : coordObj1.top + $this.commonSpace
                      },
                      {
                        left: coordObj2.left,
                        top : coordObj2.top + $this.commonSpace
                      });
                    j == 0 ? j : j--;//线段两点坐标调整过后，重新再检测一遍
                    i == 0 ? i : i--;

                  } else if (coordObj1.top > end.gridArea.topLeftY
                    && coordObj1.top + $this.commonSpace < end.element.topLeftY) {
                    //在终点元件上方， y坐标加commonSpace
                    para.arrTurningPoint.splice(i, 2,
                      {
                        left: coordObj1.left,
                        top : coordObj1.top + $this.commonSpace
                      },
                      {
                        left: coordObj2.left,
                        top : coordObj2.top + $this.commonSpace
                      });
                    j == 0 ? j : j--;//线段两点坐标调整过后，重新再检测一遍
                    i == 0 ? i : i--;
                  } else if (coordObj1.top > start.element.bottomRightY && coordObj1.top < start.gridArea.bottomRightY
                    && coordObj1.top - $this.commonSpace > start.element.bottomRightY) {
                    //在起点元件下方， y坐标减commonSpace
                    para.arrTurningPoint.splice(i, 2,
                      {
                        left: coordObj1.left,
                        top : coordObj1.top - $this.commonSpace
                      },
                      {
                        left: coordObj2.left,
                        top : coordObj2.top - $this.commonSpace
                      });
                    j == 0 ? j : j--;//线段两点坐标调整过后，重新再检测一遍
                    i == 0 ? i : i--;
                  } else if (coordObj1.top > end.element.bottomRightY && coordObj1.top < end.gridArea.bottomRightY
                    && coordObj1.top - $this.commonSpace > end.element.bottomRightY) {
                    //在终点元件下方， y坐标减commonSpace
                    para.arrTurningPoint.splice(i, 2,
                      {
                        left: coordObj1.left,
                        top : coordObj1.top - $this.commonSpace
                      },
                      {
                        left: coordObj2.left,
                        top : coordObj2.top - $this.commonSpace
                      });
                    j == 0 ? j : j--;//线段两点坐标调整过后，重新再检测一遍
                    i == 0 ? i : i--;
                  }
                }
              } else if (coordObj1.left == coordObj2.left
                && arrCoord[j].left == arrCoord[j + 1].left
                && arrCoord[j].left == coordObj1.left) {
                //在同一条直线上 （y方向的线段）
                //开始判断有无重合
                var largerValue1;
                var smallerValue1;
                if (coordObj1.top < coordObj2.top) {
                  largerValue1 = coordObj2.top;
                  smallerValue1 = coordObj1.top;
                } else {
                  largerValue1 = coordObj1.top;
                  smallerValue1 = coordObj2.top;
                }
                var largerValue2;
                var smallerValue2;
                if (arrCoord[j].top < arrCoord[j + 1].top) {
                  largerValue2 = arrCoord[j + 1].top;
                  smallerValue2 = arrCoord[j].top;
                } else {
                  largerValue2 = arrCoord[j].top;
                  smallerValue2 = arrCoord[j + 1].top;
                }
                if (largerValue1 < smallerValue2 || smallerValue1 > largerValue2) {//表示没有重合
                  //TODO nothing
                } else {
                  //有重合，需要调整
                  //根据线段（可使用一个点坐标）判断该点在其当前框内的区域，是在元件左边还是右边，
                  //以此来判定坐标是加commonSpace还是减commonSpace
                  if (coordObj1.left > start.gridArea.topLeftX
                    && coordObj1.left + $this.commonSpace < start.element.topLeftX) {//在起点元件左边
                    para.arrTurningPoint.splice(i, 2,
                      {
                        left: coordObj1.left + $this.commonSpace,
                        top : coordObj1.top
                      },
                      {
                        left: coordObj2.left + $this.commonSpace,
                        top : coordObj2.top
                      });
                    j == 0 ? j : j--;//线段两点坐标调整过后，重新再检测一遍
                    i == 0 ? i : i--;
                  } else if (coordObj1.left < start.gridArea.bottomRightX
                    && coordObj1.left - $this.commonSpace > start.element.bottomRightX) {//在起点元件右边
                    para.arrTurningPoint.splice(i, 2,
                      {
                        left: coordObj1.left - $this.commonSpace,
                        top : coordObj1.top
                      },
                      {
                        left: coordObj2.left - $this.commonSpace,
                        top : coordObj2.top
                      });
                    j == 0 ? j : j--;//线段两点坐标调整过后，重新再检测一遍
                    i == 0 ? i : i--;
                  } else if (coordObj1.left > end.gridArea.topLeftX
                    && coordObj1.left + $this.commonSpace < end.element.topLeftX) {//在终点元件左边
                    para.arrTurningPoint.splice(i, 2,
                      {
                        left: coordObj1.left + $this.commonSpace,
                        top : coordObj1.top
                      },
                      {
                        left: coordObj2.left + $this.commonSpace,
                        top : coordObj2.top
                      });
                    j == 0 ? j : j--;//线段两点坐标调整过后，重新再检测一遍
                    i == 0 ? i : i--;
                  } else if (coordObj1.left < end.gridArea.bottomRightX
                    && coordObj1.left - $this.commonSpace > end.element.bottomRightX) {//在终点元件右边
                    para.arrTurningPoint.splice(i, 2,
                      {
                        left: coordObj1.left - $this.commonSpace,
                        top : coordObj1.top
                      },
                      {
                        left: coordObj2.left - $this.commonSpace,
                        top : coordObj2.top
                      });
                    j == 0 ? j : j--;//线段两点坐标调整过后，重新再检测一遍
                    i == 0 ? i : i--;
                  }
                }
              }
            }
          }
        }
        para.nStep = 'end';
        $dbFlag += 1;
        break;
      case 'end':
        para.successCallBack(para.arrTurningPoint);
        return;
    }
    if (++$dbFlag === 1) {
      return;
    }
  }
}


/**
 *
 * 获取新的转折点
 * @private
 * @param lineId {string} 连线 id
 * @param connectorType {string} 连接器类型，用于判断调用那个转折点函数
 * @param successCallBack
 * @param errorCallBack
 */
CGraph.prototype.getNewTurningPoint = function (lineId, connectorType, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var macConnectorType = $this.config.mac.lineStyle.connectorType;

  var fnname = 'CGraph.prototype.getNewTurningPoint';

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
      case 'route':
        para.turningPoint = {};
        para.turningPoint.coord = [];
        para.turningPoint.number = [];
        switch (connectorType) {
          case macConnectorType.geneDraw:
            para.nStep = 'getGeneTurningPoint';
            break;
          case macConnectorType.eventDraw:
            para.nStep = 'getEventTurningPoint';
            break;
          default:
            para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'getGeneTurningPoint':
        $this.getGeneTurningPoint(lineId,
          function (arrCoord) {
            para.turningPoint.coord = arrCoord;
            para.turningPoint.number = [];
            arrCoord.forEach(function (coord, i) {
              para.turningPoint.number.push(i);
            });

            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.getNewTurningPoint(lineId, connectorType, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'getEventTurningPoint':
        $this.getEventTurningPoint(lineId,
          function (arrCoord) {
            para.turningPoint.coord = arrCoord;
            para.turningPoint.number = [];
            arrCoord.forEach(function (coord, i) {
              para.turningPoint.number.push(i);
            });

            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.getNewTurningPoint(lineId, connectorType, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack(para.turningPoint);
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};

CGraph.prototype.newTurningPoint = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var parentRecord;
  var macConnectorType = $this.config.mac.lineStyle.connectorType;

  var fnname = 'CGraph.prototype.newTurningPoint';

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
      case 'route':
        para.turningPoint = {};
        para.turningPoint.coord = [];
        para.turningPoint.number = [];
        var index = $this.map.lineId.indexOf(lineId);
        var connectorType = $this.map.connectorType[index];
        switch (connectorType) {
          case macConnectorType.geneDraw:
            para.nStep = 'getGeneTurningPoint';
            break;
          case macConnectorType.eventDraw:
            para.nStep = 'getEventTurningPoint';
            break;
          default:
            $this.instance.repaintEverything();
            para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'getGeneTurningPoint':
        $this.getGeneTurningPoint(lineId,
          function (arrCoord) {
            para.turningPoint.coord = arrCoord;
            para.turningPoint.number = [];
            arrCoord.forEach(function (coord, i) {
              para.turningPoint.number.push(i);
            });

            para.nStep = 'new_turningPoint';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.newTurningPoint(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'getEventTurningPoint':
        $this.getEventTurningPoint(lineId,
          function (arrCoord) {
            para.turningPoint.coord = arrCoord;
            para.turningPoint.number = [];
            arrCoord.forEach(function (coord, i) {
              para.turningPoint.number.push(i);
            });

            para.nStep = 'new_turningPoint';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.newTurningPoint(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'new_turningPoint':
        objectName = 'turningPoint';
        parentRecord = lineId;
        $this.api.recordNew(objectName, parentRecord, para.turningPoint,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.newTurningPoint(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'end':
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


/**
 * @private
 * @description 获取新的转折点，清除数据库中老的连接点记录，新增新的连接点记录，不处理视图
 * @param lineId {string} 连线 id
 * @param successCallBack
 * @param errorCallBack
 */
CGraph.prototype.modifyTurningPoint = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var record;
  var fnname = 'CGraph.prototype.modifyTurningPoint';

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
        var fd = $this.mac.fd.line;
        objectName = 'line';
        dbData = {};
        dbData[$this.mac.fd.id] = [lineId];
        dbData[fd.startDotId] = [];
        dbData[fd.endDotId] = [];
        dbData[fd.style] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            if (dbData[$this.mac.fd.id].length > 0) {
              para.startDotId = dbData[fd.startDotId][0];
              para.endDotId = dbData[fd.endDotId][0];
              para.connectorType = dbData[fd.style][0].connectorType;
              para.nStep = 'query_turningPoint';
            } else {
              para.nStep = 'end';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.modifyTurningPoint(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'query_turningPoint':
        objectName = 'turningPoint';
        parentRecord = [lineId];
        condition = null;
        dbData = {};
        dbData.id = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.oldTurningPointId = dbData.id;
              para.nStep = 'delete_turningPoint';
            } else {
              para.nStep = 'newTurningPoint';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.modifyTurningPoint(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'delete_turningPoint':
        objectName = 'turningPoint';
        record = para.oldTurningPointId;
        $this.api.recordDelete(objectName, record,
          function () {
            para.nStep = 'newTurningPoint';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.modifyTurningPoint(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'newTurningPoint':
        $this.newTurningPoint(lineId, function () {
          para.nStep = 'end';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.modifyTurningPoint(lineId, successCallBack, errorCallBack);
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
 * @description 拖动画布内元素，元素上如果有连线，拖动时，连线会变成直虚线
 * @param type {string} 被拖动元素的类型，可选项有'canvas' 和 'element'
 * @param id {string} 被拖动元素的id，可能是画布id，也可能是元件id
 * @param successCallBack {successCallBack}
 * @param errorCallBack {errorCallBack}
 */
CGraph.prototype.showDashedLine = function (type, id, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var dbData;
  var arrowStyle;
  var sourceDot;
  var targetDot;
  var connection;

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
      case 'getLineId':
        para.arrLineId = $this.getLineIdOfFactor(type, id).all;
        if (para.arrLineId.length > 0) {
          para.i = 0;
          para.nStep = 'query_line';
        } else {
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'query_line':
        var fd = $this.mac.fd.line;
        $this.deleteLineView(para.arrLineId);
        objectName = 'line';
        dbData = {};
        dbData.id = [para.arrLineId[para.i]];
        dbData[fd.startDotId] = [];
        dbData[fd.endDotId] = [];
        dbData[fd.direction] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.startDotId = dbData[fd.startDotId][0];
            para.endDotId = dbData[fd.endDotId][0];
            para.direction = dbData[fd.direction][0];
            para.nStep = 'connectLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showDashedLine(type, id, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'connectLine':
        var sourceParentId = $($this.jqIdPrefix.dot + para.startDotId)
          .attr('data-parentid');
        var targetParentId = $($this.jqIdPrefix.dot + para.endDotId)
          .attr('data-parentid');

        var arrSourceDot = $this.instance.getEndpoints(sourceParentId);
        var arrTargetDot = $this.instance.getEndpoints(targetParentId);

        arrSourceDot.forEach(function (value) {
          if (value.canvas.id === $this.jsIdPrefix.dot + para.startDotId) {
            sourceDot = value;
          }
        });
        arrTargetDot.forEach(function (value) {
          if (value.canvas.id === $this.jsIdPrefix.dot + para.endDotId) {
            targetDot = value;
          }
        });

        arrowStyle = $this.getArrowStyle(para.direction, $this.config.mac.lineStyle.arrowType.arrow);
        connection = {
          source    : sourceDot,
          target    : targetDot,
          paintStyle: {
            dashstyle  : $this.config.dashLine,
            strokeWidth: 2,
            stroke     : '#999',
          },
          connector : ['Straight'],
          overlays  : arrowStyle,
        };

        var conn = $this.instance.connect(connection);
        conn.canvas.id = $this.jsIdPrefix.line + para.arrLineId[para.i];
        conn.canvas.setAttribute('data-source', sourceParentId);
        conn.canvas.setAttribute('data-target', targetParentId);
        conn.canvas.setAttribute('data-line', para.arrLineId[para.i]);
        $this.dragging.dashLine.push(conn);
        // $this.setTopIndex($this.config.mac.type.line, para.arrLineId[para.i], '1');
        $this.setHighlightIndex($this.config.mac.type.line, para.arrLineId[para.i], '1');
        para.nStep = 'isLineLoopEnd';
        dbFlag += 1;
        break;
      case 'isLineLoopEnd':
        para.i += 1;
        if (para.i === para.arrLineId.length) {
          $this.instance.repaintEverything();
          para.nStep = 'end';
        } else {
          para.nStep = 'connectLine';
        }
        dbFlag += 1;
        break;
      case 'end':
        para.successCallBack(para.arrLineId);
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
 * @description 根据数据库显示没有转折点的连线
 * @param lineId {string} 连线id
 * @param successCallBack {successCallBack}
 * @param errorCallBack {errorCallBack}
 */
CGraph.prototype.showSingleLine = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var objectName;
  var dbData;
  var arrowStyle;
  var sourceDot;
  var targetDot;
  var connection;
  var fd;
  var fnname = 'CGraph.prototype.showSingleLine';

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
        fd = $this.mac.fd.line;
        objectName = 'line';
        dbData = {};
        dbData[$this.mac.fd.id] = [lineId];
        dbData[fd.startDotId] = [];
        dbData[fd.endDotId] = [];
        dbData[fd.direction] = [];
        dbData[fd.style] = [];
        dbData[fd.attrib] = [];
        dbData[fd.name] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.startDotId = dbData[fd.startDotId][0];
            para.endDotId = dbData[fd.endDotId][0];
            para.direction = dbData[fd.direction][0];
            para.lineName = dbData[fd.name][0];
            para.style = dbData[fd.style][0];
            para.attrib = dbData[fd.attrib][0];
            para.nStep = 'connectLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showSingleLine(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'connectLine':
        var sourceParentId = $($this.jqIdPrefix.dot + para.startDotId)
          .attr('data-parentid');
        var targetParentId = $($this.jqIdPrefix.dot + para.endDotId)
          .attr('data-parentid');

        var arrSourceDot = $this.instance.getEndpoints(sourceParentId);
        var arrTargetDot = $this.instance.getEndpoints(targetParentId);

        arrSourceDot.forEach(function (value) {
          if (value.canvas.id === $this.jsIdPrefix.dot + para.startDotId) {
            sourceDot = value;
          }
        });
        arrTargetDot.forEach(function (value) {
          if (value.canvas.id === $this.jsIdPrefix.dot + para.endDotId) {
            targetDot = value;
          }
        });

        arrowStyle = $this.getArrowStyle(para.direction, para.style.arrowType);
        connection = {
          source  : sourceDot,
          target  : targetDot,
          overlays: arrowStyle,
        };

        // para.lineName = '10';
        var labelStyle = {
          color      : '#3f47ff',
          fill       : '#fff',
          borderWidth: '1',
          borderStyle: '#ccc',
          padding    : '3px',
        };

        connection.overlays.push(["Label", {
          label     : para.lineName,
          id        : lineId,
          labelStyle: labelStyle,
        }]);


        var macConnectorType = $this.config.mac.lineStyle.connectorType;

        if ('connectorType' in para.style) {
          switch (para.style.connectorType) {
            case macConnectorType.flowchart:
              connection.connector = ['Flowchart'];
              break;
            case macConnectorType.straight:
              connection.connector = ['Straight'];
              break;
            case macConnectorType.bezier:
              connection.connector = ['Bezier'];
              break;
            case macConnectorType.stateMachine:
              connection.connector = ['State Machine'];
              break;
          }
        }


        if ('dash' in para.style) {
          if (para.style.dash) {
            if (!('paintStyle' in connection)) {
              connection.paintStyle = {};
            }
            connection.paintStyle.dashstyle = $this.config.dashLine;
          }
        }

        if ('stroke' in para.style) {
          if (!('paintStyle' in connection)) {
            connection.paintStyle = {};
          }
          connection.paintStyle.stroke = para.style.stroke;
        }

        if ('strokeWidth' in para.style) {
          if (!('paintStyle' in connection)) {
            connection.paintStyle = {};
          }
          connection.paintStyle.strokeWidth = para.style.strokeWidth;
        }


        var conn = $this.instance.connect(connection);
        conn.canvas.id = $this.jsIdPrefix.line + lineId;
        conn.canvas.setAttribute('data-source', sourceParentId);
        conn.canvas.setAttribute('data-target', targetParentId);
        conn.canvas.setAttribute('data-start', para.startDotId);
        conn.canvas.setAttribute('data-end', para.endDotId);
        conn.canvas.setAttribute('data-dir', para.direction);
        // conn.canvas.setAttribute('data-dash', para.style.dash);
        // conn.canvas.setAttribute('data-color', para.style.stroke);
        conn.canvas.setAttribute('data-line', lineId);
        conn.canvas.setAttribute('data-deletable', para.attrib.deletable);
        conn.canvas.setAttribute('data-nameSettable', para.attrib.nameSettable);
        conn.canvas.setAttribute('data-detachable', para.attrib.detachable);

        if (para.lineName === '') conn.hideOverlay(lineId);

        var index = $this.map.lineId.indexOf(lineId);
        $this.map.connection[index] = [conn];
        para.nStep = 'end';
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
};

/**
 * @private
 * @description 根据数据库显示有转折点的连线
 * @param lineId {string} 连线id
 * @param successCallBack {successCallBack}
 * @param errorCallBack {errorCallBack}
 */
CGraph.prototype.showCombinedLine = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var condition;
  var $root;
  var $joint;
  var jointId;
  var jointEndPoint;
  var connection;
  var fId = $this.mac.fd.id;

  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
      case 'query_line':
        fd = $this.mac.fd.line;
        objectName = 'line';
        dbData = {};
        dbData[fId] = [lineId];
        dbData[fd.startDotId] = [];
        dbData[fd.endDotId] = [];
        dbData[fd.direction] = [];
        dbData[fd.style] = [];
        dbData[fd.attrib] = [];
        dbData[fd.name] = [];
        $this.api.recordRead(objectName, dbData,
          function () {
            para.startDotId = dbData[fd.startDotId][0];
            para.endDotId = dbData[fd.endDotId][0];
            para.direction = dbData[fd.direction][0];
            para.lineName = dbData[fd.name][0];
            para.style = dbData[fd.style][0];
            para.attrib = dbData[fd.attrib][0];
            para.nStep = 'firstAndLastDot';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCombinedLine(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'firstAndLastDot':

        para.sourceParentId = $($this.jqIdPrefix.dot + para.startDotId)
          .attr('data-parentid');
        para.targetParentId = $($this.jqIdPrefix.dot + para.endDotId)
          .attr('data-parentid');

        var arrSourceDot = $this.instance.getEndpoints(para.sourceParentId);
        var arrTargetDot = $this.instance.getEndpoints(para.targetParentId);

        arrSourceDot.forEach(function (value) {
          if (value.canvas.id === $this.jsIdPrefix.dot + para.startDotId) {
            para.firstDot = value;
          }
        });
        arrTargetDot.forEach(function (value) {
          if (value.canvas.id === $this.jsIdPrefix.dot + para.endDotId) {
            para.lastDot = value;
          }
        });
        para.paintStyle = {};
        if ('dash' in para.style) {
          if (para.style.dash) {
            para.paintStyle.dashstyle = $this.config.dashLine;
          }
        }

        if ('stroke' in para.style) {
          para.paintStyle.stroke = para.style.stroke;
        }

        if ('strokeWidth' in para.style) {
          para.paintStyle.strokeWidth = para.style.strokeWidth;
        }

        para.nStep = 'query_turningPoint';
        dbFlag += 1;
        break;
      case 'query_turningPoint':
        var fd = $this.mac.fd.turningPoint;
        objectName = 'turningPoint';
        parentRecord = [lineId];
        condition = null;
        dbData = {};
        dbData[fId] = [];
        dbData[fd.coord] = [];
        dbData[fd.number] = [];
        $this.api.recordQuery(objectName, parentRecord, condition, dbData,
          function () {
            if (dbData.id.length > 0) {
              para.turningPointId = dbData[fId];
              para.coord = [];
              dbData[fd.number].forEach(function (n, j) {
                para.coord[parseInt(n, 10)] = dbData[fd.coord][j];
              });
              para.i = 0;
              para.jointId = [];
              para.index = $this.map.lineId.indexOf(lineId);
              $this.map.connection[para.index] = [];
              para.nStep = 'addJointPoint';
            } else {
              para.nStep = 'end';
            }
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.showCombinedLine(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'addJointPoint':
        $root = $($this.jqIdPrefix.canvas + $this.rootCanvasId);
        jointId = $this.jsIdPrefix.joint + para.turningPointId[para.i];
        para.jointPointId = $this.jsIdPrefix.jointPoint + para.turningPointId[para.i];
        $root.append('<div id="' + jointId + '"></div>');
        $joint = $root.find('#' + jointId);
        $joint.addClass('joint');
        $joint.css('left', para.coord[para.i].left + 'px');
        $joint.css('top', para.coord[para.i].top + 'px');
        $joint.attr('data-parentline', lineId);

        jointEndPoint = $this.instance.addEndpoint(jointId, $this.config.jointEndPoint);
        jointEndPoint.setVisible(false, true);
        jointEndPoint.canvas.id = para.jointPointId;
        para.jointId.push(jointId);
        para.jointEndPoint = jointEndPoint;
        para.arrowStyle = [];
        // para.nStep = 'isTurningPointLoopEnd';
        para.nStep = 'connectLine';
        dbFlag += 1;
        break;
      case 'connectLine':
        para.dir = $this.mac.enum.line.direction;
        if (para.i === 0) {
          para.source = para.firstDot;
          if (para.direction === para.dir.twoWay || para.direction === para.dir.reverse) {
            para.arrowStyle = $this.getArrowStyle(para.dir.reverse, para.style.arrowType);
          }
        }
        para.target = para.jointEndPoint;
        if (para.i === para.turningPointId.length) {
          para.target = para.lastDot;
          if (para.direction === para.dir.twoWay || para.direction === para.dir.forward) {
            para.arrowStyle = $this.getArrowStyle(para.dir.forward, para.style.arrowType);
          }
        }
        connection = {
          source    : para.source,
          target    : para.target,
          paintStyle: para.paintStyle,
          overlays  : para.arrowStyle,
        };


        // todo: debug
        if (para.i === 0) {
          var labelStyle = {
            color      : '#3f47ff',
            fill       : '#fff',
            borderWidth: '1',
            borderStyle: '#ccc',
            padding    : '3px',
          };

          connection.overlays.push(["Label", {
            label     : para.lineName,
            id        : lineId,
            labelStyle: labelStyle,
            events    : {
              dblclick : function (lineOverlay, originalEvent) {
                console.log("double click on diamond overlay for : ");
                console.dir(lineOverlay, lineOverlay.component);
                // $this.event_activateLineNameInput(lineOverlay.component, originalEvent);

              },
              mouseover: function (lineOverlay, originalEvent) {
                lineOverlay.component.fire('mouseover', lineOverlay.component, originalEvent);
              },
              mouseout : function (lineOverlay, originalEvent) {
                lineOverlay.component.fire('mouseout', lineOverlay.component, originalEvent);
              },
              click    : function (lineOverlay, originalEvent) {
                // originalEvent.stopPropagation();
                // lineOverlay.component.fire('click', lineOverlay.component, originalEvent);
              },
            },
          }]);
        }


        var conn = $this.instance.connect(connection);
        conn.canvas.setAttribute('data-source', para.sourceParentId);
        conn.canvas.setAttribute('data-target', para.targetParentId);
        conn.canvas.setAttribute('data-start', para.startDotId);
        conn.canvas.setAttribute('data-end', para.endDotId);
        conn.canvas.setAttribute('data-dir', para.direction);
        conn.canvas.setAttribute('data-dash', para.style.dash);
        conn.canvas.setAttribute('data-color', para.style.stroke);
        conn.canvas.setAttribute('data-n', para.i);
        conn.canvas.setAttribute('data-deletable', para.attrib.deletable);
        conn.canvas.setAttribute('data-nameSettable', para.attrib.nameSettable);
        conn.canvas.setAttribute('data-detachable', para.attrib.detachable);
        conn.canvas.setAttribute('data-line', lineId);
        if (para.lineName === '') conn.hideOverlay(lineId);
        $this.map.connection[para.index].push(conn);
        para.nStep = 'isTurningPointLoopEnd';
        dbFlag += 1;
        break;
      case 'isTurningPointLoopEnd':
        para.i += 1;
        if (para.i === para.turningPointId.length + 1) {
          var $allLine = $('#' + $this.wrapId + ' [data-line=' + lineId + ']');
          $allLine.attr('data-joint', JSON.stringify(para.jointId));
          $this.instance.repaintEverything();
          para.nStep = 'end';
        } else {
          para.source = para.jointEndPoint;
          if (para.i === para.turningPointId.length) {
            para.nStep = 'connectLine';
          } else {
            para.nStep = 'addJointPoint';
          }
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
};

/**
 * @private
 * @description 根据连线方向和箭头形状获取箭头类型
 * @param direction {string} 连线方向
 * @param arrowType {string} 箭头形状
 * @returns {Array} 箭头类型
 */
CGraph.prototype.getArrowStyle = function (direction, arrowType) {
  var $this = this;
  var arrowStyle = [];
  var macArrowType = $this.config.mac.lineStyle.arrowType;
  switch (direction) {
    case $this.mac.enum.line.direction.none:
      switch (arrowType) {
        case macArrowType.arrow:
        case macArrowType.plainArrow:
        case macArrowType.diamond:
        default:
          arrowStyle = [];
      }
      break;
    case $this.mac.enum.line.direction.forward:
      switch (arrowType) {
        case macArrowType.plainArrow:
          arrowStyle = [['PlainArrow', { width: 10, length: 10, location: 1 }]];
          break;
        case macArrowType.diamond:
          arrowStyle = [['Diamond', { width: 10, length: 10, location: 1 }]];
          break;
        case macArrowType.arrow:
        default:
          arrowStyle = [['Arrow', { width: 10, length: 10, location: 1 }]];
          break;
      }
      break;
    case $this.mac.enum.line.direction.reverse:
      switch (arrowType) {
        case macArrowType.plainArrow:
          arrowStyle = [['PlainArrow', {
            width    : 10,
            length   : 10,
            location : 0,
            direction: -1,
          }]];
          break;
        case macArrowType.diamond:
          arrowStyle = [['Diamond', { width: 10, length: 10, location: 0, direction: -1 }]];
          break;
        case macArrowType.arrow:
        default:
          arrowStyle = [['Arrow', { width: 10, length: 10, location: 0, direction: -1 }]];
      }
      break;
    case $this.mac.enum.line.direction.twoWay:
      switch (arrowType) {
        case macArrowType.plainArrow:
          arrowStyle = [
            ['PlainArrow', { width: 10, length: 10, location: 1 }],
            ['PlainArrow', { width: 10, length: 10, location: 0, direction: -1 }],
          ];
          break;
        case macArrowType.diamond:
          arrowStyle = [
            ['Diamond', { width: 10, length: 10, location: 1 }],
            ['Diamond', { width: 10, length: 10, location: 0, direction: -1 }],
          ];
          break;
        case macArrowType.arrow:
        default:
          arrowStyle = [
            ['Arrow', { width: 10, length: 10, location: 1 }],
            ['Arrow', { width: 10, length: 10, location: 0, direction: -1 }]
          ];
      }
      break;
    default:
      break;
  }
  return arrowStyle;
}


/**
 * 用新的转折点替换老的，并重新显示连线
 * @private
 * @param arrLineId {array} 可以批量刷新连线
 * @param successCallBack {successCallBack}
 * @param errorCallBack {errorCallBack}
 */
CGraph.prototype.refreshLine = function (arrLineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;

  var fnname = 'CGraph.prototype.refreshLine';

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
      case 'initCount':
        if (arrLineId.length > 0) {
          para.i = 0;
          para.nStep = 'modifyTurningPoint';
        } else {
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'modifyTurningPoint':
        $this.modifyTurningPoint(arrLineId[para.i],
          function () {
            para.nStep = 'call_showLine';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.refreshLine(arrLineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'call_showLine':
        $this.deleteLineView([arrLineId[para.i]]);
        $this.showLine(arrLineId[para.i], function () {
          para.nStep = 'isLineLoopEnd';
          dbFlag += 1;
          if (dbFlag === 2) {
            $this.refreshLine(arrLineId, successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case 'isLineLoopEnd':
        para.i += 1;
        if (para.i === arrLineId.length) {
          para.nStep = 'end';
        } else {
          para.nStep = 'modifyTurningPoint';
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
};

/**
 * 重新计算指定元素内所有连线的转折点，并重新绘制连线
 * @public
 * @param type {string} 元素的类型。可选项为 '0-canvas', '1-group', '2-element', '3-line'，详见 {@tutorial mac}
 * @param id {string} 元素的 id
 * @param successCallBack {successCallBack}
 * @param errorCallBack {errorCallBack}
 */
CGraph.prototype.repaintLine = function (type, id, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var fnname = 'CGeneDraw.prototype.repaintLine';

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
      case 'target':
        var t = $this.config.mac.type;
        if (type === t.line) {
          para.arrLineId = [id];
        } else {
          para.arrLineId = $this.getLineIdOfFactor(type, id).all;
        }
        para.nStep = 'refreshLine';
        dbFlag += 1;
        break;
      case 'refreshLine':
        $this.refreshLine(para.arrLineId,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.repaintLine(type, id, successCallBack, errorCallBack);
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


CGraph.prototype.repaintLine2 = function (type, id, delay, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var fnname = 'CGeneDraw.prototype.repaintLine';

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
      case 'delay':
        if (parseInt(delay) > 0) {
          clearTimeout($this.timer.refreshLine);
          $this.timer.refreshLine = setTimeout(function () {
            para.nStep = 'target';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.repaintLine(type, id, delay, successCallBack, errorCallBack);
            }
          }, parseInt(delay));
        } else {
          para.nStep = 'target';
          dbFlag += 1;
        }
        break;
      case 'target':
        var t = $this.config.mac.type;
        if (type === t.line) {
          para.arrLineId = [id];
        } else {
          para.arrLineId = $this.getLineIdOfFactor(type, id).all;
        }
        para.nStep = 'refreshLine';
        dbFlag += 1;
        break;
      case 'refreshLine':
        $this.refreshLine(para.arrLineId,
          function () {
            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.repaintLine(type, id, delay, successCallBack, errorCallBack);
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
 * 切换连线模式
 * @param option {string} 选项
 */
CGraph.prototype.setLineModeCursor = function (option) {
  var $this = this;
  if (parseInt(option) === 0) { // 开启
    // if ($this.isLineMode) return;
    $this.isLineMode = true;
    $('#' + $this.wrapId)
      .addClass('lineMode');

    $this.lineMode.$draggable.each(function () {
      if ($(this).length > 0) {
        $(this).draggable("option", "disabled", true);
        $(this).attr('data-draggable', false);
      }
    });


    $this.lineMode.$start.each(function () {
      if ($(this).length > 0) {
        $this.instance.setSourceEnabled($(this), true);
      }
    });

    $this.lineMode.$end.each(function () {
      if ($(this).length > 0) {
        $this.instance.setTargetEnabled($(this), true);
      }
    });

  } else { // 关闭
    // if (!$this.isLineMode) return;
    $this.isLineMode = false;
    $('#' + $this.wrapId)
      .removeClass('lineMode');

    $this.lineMode.$draggable.each(function () {
      if ($(this).length > 0) {
        $(this).draggable("option", "disabled", false);
        $(this).attr('data-draggable', true);
      }
    });

    $this.lineMode.$start.each(function () {
      if ($(this).length > 0) {
        $this.instance.setSourceEnabled($(this), false);
      }
    });

    $this.lineMode.$end.each(function () {
      if ($(this).length > 0) {
        $this.instance.setTargetEnabled($(this), false);
      }
    });

  }
};


CGraph.prototype.parseAnchorAndCoord = function ($target, anchor) {
  var $this = this;
  var pointAnchor = [];
  var pointAnchorCoord = [];

  var arrTopCenterNumber = [];
  var arrRightMiddleNumber = [];
  var arrBottomCenterNumber = [];
  var arrLeftMiddleNumber = [];

  var continuousAnchor = ["Continuous", { faces: [] }];
  var sideAnchor = continuousAnchor[1].faces;
  var perimeterAnchor = ["Perimeter", { shape: "", rotation: 0 }];
  var shapeAnchor = perimeterAnchor[1];
  var anchorType = $this.config.mac.anchor;
  var result = {};
  result.type = '';
  result.dirType = [];
  result.anchor = '';
  result.coord = '';
  var w = $target.outerWidth();
  var h = $target.outerHeight();

  anchor.position.forEach(function (v, i) {
    result.dirType.push(anchor.type[i]);
    switch (v) {
      case anchorType.point.topCenter:
        arrTopCenterNumber.push(i);
        // countTopCenter += 1;
        break;
      case anchorType.point.topRight:
        pointAnchor.push('TopRight');
        pointAnchorCoord.push([w, 0]);
        break;
      case anchorType.point.rightMiddle:
        arrRightMiddleNumber.push(i);
        // countRightMiddle += 1;
        break;
      case anchorType.point.bottomRight:
        pointAnchor.push('BottomRight');
        pointAnchorCoord.push([w, h]);
        break;
      case anchorType.point.bottomCenter:
        arrBottomCenterNumber.push(i);
        // countBottomCenter += 1;
        break;
      case anchorType.point.bottomLeft:
        pointAnchor.push('BottomLeft');
        pointAnchorCoord.push([0, h]);
        break;
      case anchorType.point.leftMiddle:
        arrLeftMiddleNumber.push(i);
        // countLeftMiddle += 1;
        break;
      case anchorType.point.topLeft:
        pointAnchor.push('TopLeft');
        pointAnchorCoord.push([0, 0]);
        break;
      case anchorType.point.center:
        pointAnchor.push('Center');
        pointAnchorCoord.push([w / 2, h / 2]);
        break;

      case anchorType.side.top:
        sideAnchor.push('Top');
        break;
      case anchorType.side.right:
        sideAnchor.push('Right');
        break;
      case anchorType.side.bottom:
        sideAnchor.push('Bottom');
        break;
      case anchorType.side.left:
        sideAnchor.push('Left');
        break;

      case anchorType.shape.circle:
        shapeAnchor.shape = 'Circle';
        shapeAnchor.rotation = anchor.rotation;
        break;
      case anchorType.shape.ellipse:
        shapeAnchor.shape = 'Ellipse';
        shapeAnchor.rotation = anchor.rotation;
        break;
      case anchorType.shape.triangle:
        shapeAnchor.shape = 'Triangle';
        shapeAnchor.rotation = anchor.rotation;
        break;
      case anchorType.shape.diamond:
        shapeAnchor.shape = 'Diamond';
        shapeAnchor.rotation = anchor.rotation;
        break;
      case anchorType.shape.rectangle:
        shapeAnchor.shape = 'Rectangle';
        shapeAnchor.rotation = anchor.rotation;
        break;
      case anchorType.shape.square:
        shapeAnchor.shape = 'Square';
        shapeAnchor.rotation = anchor.rotation;
        break;
    }
  });


  for (var i = 0; i < arrTopCenterNumber.length; i++) {
    var pos = (i + 1) / (arrTopCenterNumber.length + 1);
    pointAnchor[arrTopCenterNumber[i]] = [pos, 0, 0, -1, 0, 0, 'top'];
    pointAnchorCoord[arrTopCenterNumber[i]] = [w * pos, 0];
  }


  for (var i = 0; i < arrRightMiddleNumber.length; i++) {
    var pos = (i + 1) / (arrRightMiddleNumber.length + 1);
    pointAnchor[arrRightMiddleNumber[i]] = [1, pos, 1, 0, 0, 0, 'right'];
    pointAnchorCoord[arrRightMiddleNumber[i]] = [w, h * pos];
  }


  for (var i = 0; i < arrBottomCenterNumber.length; i++) {
    var pos = (i + 1) / (arrBottomCenterNumber.length + 1);
    pointAnchor[arrBottomCenterNumber[i]] = [pos, 1, 0, 1, 0, 0, 'bottom'];
    pointAnchorCoord[arrBottomCenterNumber[i]] = [w * pos, h];
  }


  for (var i = 0; i < arrLeftMiddleNumber.length; i++) {
    var pos = (i + 1) / (arrLeftMiddleNumber.length + 1);
    pointAnchor[arrLeftMiddleNumber[i]] = [0, pos, -1, 0, 0, 0, 'left'];
    pointAnchorCoord[arrLeftMiddleNumber[i]] = [0, h * pos];
  }


  if (pointAnchor.length > 0) {
    result.type = 'point';
    result.anchor = pointAnchor;
    result.coord = pointAnchorCoord;
  } else if (sideAnchor.length > 0) {
    result.type = 'side';
    result.anchor = continuousAnchor;
    result.coord = '';
  } else if (shapeAnchor.shape !== '') {
    result.type = 'shape';
    result.anchor = perimeterAnchor;
    result.coord = '';
  }

  return result;

};


/**
 * 新建元素时调用
 * @private
 * @param type {string} - 元素类型
 * @param id {string} - 元素 id
 * @param anchor {object|field-anchor} - 元素锚点
 * @param anchor.type {array} - 锚点类型
 * @param anchor.position {array} - 锚点位置
 * @param anchor.rotation {number} - 元素旋转角度
 */
CGraph.prototype.setAnchor = function (type, id, anchor) {
  var $this = this;
  var $target;
  var start;
  var end;
  var allAnchor;


  if (type === $this.config.mac.type.canvas) {
    $target = $($this.jqIdPrefix.canvas + id);
  } else if (type === $this.config.mac.type.element) {
    $target = $($this.jqIdPrefix.element + id);
  } else {
    return;
  }

  // 将所有锚点解析成底层可以 anchor 格式
  allAnchor = $this.parseAnchorAndCoord($target, anchor);

  // 筛选起点和终点锚点
  start = {
    type  : '',
    number: [],
    anchor: [],
    coord : [],
    dotId : [],
  };
  end = {
    type  : '',
    number: [],
    anchor: [],
    coord : [],
    dotId : [],
  };

  allAnchor.dirType.forEach(function (v, i) {
    if (v !== $this.config.mac.anchor.type.end) {
      start.type = allAnchor.type;
      // start.number.push(allAnchor.number[i]);
      start.number.push(start.anchor.length);
      start.anchor.push(allAnchor.anchor[i]);
      start.coord.push(allAnchor.coord[i]);
      start.dotId.push('');
    }
    if (v !== $this.config.mac.anchor.type.start) {
      end.type = allAnchor.type;
      // end.number.push(allAnchor.number[i]);
      end.number.push(end.anchor.length);
      end.anchor.push(allAnchor.anchor[i]);
      end.coord.push(allAnchor.coord[i]);
      end.dotId.push('');
    }
  });


  // 设置元素的起始锚点
  if (start.anchor.length > 0) {
    $this.instance.makeSource($target, {
      // endpoint              : 'Dot',
      deleteEndpointsOnEmpty: true,
      anchor                : start.anchor,
      maxConnections        : -1,
    });
    $this.lineMode.$start = $this.lineMode.$start.add($target);
  }

  // 设置元素的终点锚点
  if (end.anchor.length > 0) {
    $this.instance.makeTarget($target, {
      // endpoint              : 'Dot',
      deleteEndpointsOnEmpty: true,
      anchor                : end.anchor,
      maxConnections        : -1,
    });
    $this.lineMode.$end = $this.lineMode.$end.add($target);
  }


  // 保存元素对应锚点信息
  $this.anchor.parentType.push(type);
  $this.anchor.parentId.push(id);
  $this.anchor.start.push(start);
  $this.anchor.end.push(end);

};


CGraph.prototype.getPairDotId = function (startType, startId, endType, endId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var parentRecord;
  var $start;
  var $end;
  var $root = $($this.jqIdPrefix.canvas + $this.rootCanvasId);
  var gType = $this.config.mac.type;
  var sl;
  var st;
  var el;
  var et;
  var unusedStartAnchorCoord = [];
  var unusedStartAnchorNumber = [];
  var unusedEndAnchorCoord = [];
  var unusedEndAnchorNumber = [];
  var shortest;
  var fnname = 'CGraph.prototype.getPairDotId';

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
      case 'isPoint':
        para.dbData = {};
        para.startDotId = '';
        para.endDotId = '';
        para.result = {
          startDotId      : '',
          endDotId        : '',
          startAnchorCoord: '',
          endAnchorCoord  : '',
        };

        para.dbData[$this.mac.fd.dot.canvasId] = [];
        para.dbData[$this.mac.fd.dot.elementId] = [];
        if (startType === gType.canvas) {
          para.$start = $($this.jqIdPrefix.canvas + startId);
          para.dbData[$this.mac.fd.dot.canvasId].push(startId);
          para.dbData[$this.mac.fd.dot.elementId].push('');
          para.jsStartId = $this.jsIdPrefix.canvas + startId;
        } else if (startType === gType.element) {
          para.$start = $($this.jqIdPrefix.element + startId);
          para.dbData[$this.mac.fd.dot.canvasId].push('');
          para.dbData[$this.mac.fd.dot.elementId].push(startId);
          para.jsStartId = $this.jsIdPrefix.element + startId;
        }

        if (endType === gType.canvas) {
          para.$end = $($this.jqIdPrefix.canvas + endId);
          para.dbData[$this.mac.fd.dot.canvasId].push(endId);
          para.dbData[$this.mac.fd.dot.elementId].push('');
          para.jsEndId = $this.jsIdPrefix.canvas + endId;
        } else if (endType === gType.element) {
          para.$end = $($this.jqIdPrefix.element + endId);
          para.dbData[$this.mac.fd.dot.canvasId].push('');
          para.dbData[$this.mac.fd.dot.elementId].push(endId);
          para.jsEndId = $this.jsIdPrefix.element + endId;
        }

        var isStartPoint = false;
        var isEndPoint = false;
        $this.anchor.start.forEach(function (s, i) {
          if ($this.anchor.parentType[i] === startType && $this.anchor.parentId[i] === startId) {
            para.currentStartInfo = s;
            isStartPoint = s.type === 'point';
          }
        });
        $this.anchor.end.forEach(function (e, i) {
          if ($this.anchor.parentType[i] === endType && $this.anchor.parentId[i] === endId) {
            para.currentEndInfo = e;
            isEndPoint = e.type === 'point';
          }
        });


        if (isStartPoint && isEndPoint) {
          para.nStep = 'point';
        } else {
          if (!isStartPoint && isEndPoint) {
            para.dbData[$this.mac.fd.dot.anchor]
              = [para.currentStartInfo.anchor[0], para.currentEndInfo.anchor];
          } else if (isStartPoint && !isEndPoint) {
            para.dbData[$this.mac.fd.dot.anchor]
              = [para.currentStartInfo.anchor, para.currentEndInfo.anchor[0]];
          } else {
            para.dbData[$this.mac.fd.dot.anchor]
              = [para.currentStartInfo.anchor[0], para.currentEndInfo.anchor[0]];
          }
          para.nStep = 'new_dot';
        }
        dbFlag += 1;
        break;
      case 'point':

        // 起点元素相对坐标
        sl = para.$start.offset().left - $root.offset().left;
        st = para.$start.offset().top - $root.offset().top;

        // 终点元素相对坐标
        el = para.$end.offset().left - $root.offset().left;
        et = para.$end.offset().top - $root.offset().top;


        // 起点中没有被使用过的锚点
        $this.anchor.start.forEach(function (s, i) {
          if ($this.anchor.parentType[i] === startType && $this.anchor.parentId[i] === startId) {
            para.currentStartInfo = s;
            s.number.forEach(function (v, j) {
              if (s.type === 'point' && s.dotId[j] === '') {
                unusedStartAnchorCoord.push([s.coord[j][0] + sl, s.coord[j][1] + st]);
                unusedStartAnchorNumber.push(v);
              }
            });
            if (unusedStartAnchorCoord.length === 0) {
              s.number.forEach(function (v, j) {
                if (s.type === 'point') {
                  unusedStartAnchorCoord.push([s.coord[j][0] + sl, s.coord[j][1] + st]);
                  unusedStartAnchorNumber.push(v);
                }
              });
            }
          }
        });

        // 终点中没有被使用过的锚点
        $this.anchor.end.forEach(function (e, i) {
          if ($this.anchor.parentType[i] === endType && $this.anchor.parentId[i] === endId) {
            para.currentEndInfo = e;
            e.number.forEach(function (v, j) {
              if (e.type === 'point' && e.dotId[j] === '') {
                unusedEndAnchorCoord.push([e.coord[j][0] + el, e.coord[j][1] + et]);
                unusedEndAnchorNumber.push(v);
              }
            });
            if (unusedEndAnchorCoord.length === 0) {
              e.number.forEach(function (v, j) {
                if (e.type === 'point') {
                  unusedEndAnchorCoord.push([e.coord[j][0] + el, e.coord[j][1] + et]);
                  unusedEndAnchorNumber.push(v);
                }
              });
            }
          }
        });


        // 计算距离最短的两个可用锚点
        shortest = {
          dis             : $root.width() + $root.height(),
          startNumber     : '',
          endNumber       : '',
          startAnchorCoord: '',
          endAnchorCoord  : '',
        };
        unusedStartAnchorCoord.forEach(function (s, i) {
          unusedEndAnchorCoord.forEach(function (e, j) {
            var dis = Math.hypot(e[0] - s[0], e[1] - s[1]);
            if (dis < shortest.dis) {
              shortest.dis = dis;
              shortest.startAnchorCoord = s;
              shortest.endAnchorCoord = e;
              shortest.startNumber = unusedStartAnchorNumber[i];
              shortest.endNumber = unusedEndAnchorNumber[j];
            }
          });
        });

        para.dbData[$this.mac.fd.dot.anchor] = [];
        para.dbData[$this.mac.fd.dot.anchorCoord] = [];
        if (para.currentStartInfo.dotId[shortest.startNumber] === '') {

          para.dbData[$this.mac.fd.dot.anchor].push(para.currentStartInfo.anchor[shortest.startNumber]);
          para.dbData[$this.mac.fd.dot.anchorCoord].push(shortest.startAnchorCoord);
        } else {
          para.dbData[$this.mac.fd.dot.canvasId].splice(0, 1);
          para.dbData[$this.mac.fd.dot.elementId].splice(0, 1);
          para.startDotId = para.currentStartInfo.dotId[shortest.startNumber];
        }
        para.result.startAnchorCoord = shortest.startAnchorCoord;

        if (para.currentEndInfo.dotId[shortest.endNumber] === '') {
          para.dbData[$this.mac.fd.dot.anchor].push(para.currentEndInfo.anchor[shortest.endNumber]);
          para.dbData[$this.mac.fd.dot.anchorCoord].push(shortest.endAnchorCoord);
        } else {
          para.dbData[$this.mac.fd.dot.canvasId].splice(-1, 1);
          para.dbData[$this.mac.fd.dot.elementId].splice(-1, 1);
          para.endDotId = para.currentEndInfo.dotId[shortest.endNumber];
        }
        para.result.endAnchorCoord = shortest.endAnchorCoord;

        para.startNumber = shortest.startNumber;
        para.endNumber = shortest.endNumber;

        if (para.dbData[$this.mac.fd.dot.anchor].length > 0) {
          para.nStep = 'new_dot';
        } else {
          para.result.startDotId = para.startDotId;
          para.result.endDotId = para.endDotId;
          para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'new_dot':
        objectName = 'dot';
        parentRecord = $this.rootCanvasId;
        dbData = para.dbData;
        $this.api.recordNew(objectName, parentRecord, dbData,
          function () {
            if (dbData[$this.mac.fd.id].length === 1) {
              if (para.startDotId !== '') {
                para.endDotId = dbData[$this.mac.fd.id][0];
                para.currentEndInfo.dotId[para.endNumber] = para.endDotId;
              } else {
                para.startDotId = dbData[$this.mac.fd.id][0];
                para.currentStartInfo.dotId[para.startNumber] = para.startDotId;
              }
            } else {
              para.startDotId = dbData[$this.mac.fd.id][0];
              para.endDotId = dbData[$this.mac.fd.id][1];
              para.currentStartInfo.dotId[para.startNumber] = para.startDotId;
              para.currentEndInfo.dotId[para.endNumber] = para.endDotId;
            }

            para.result.startDotId = para.startDotId;
            para.result.endDotId = para.endDotId;

            para.nStep = 'end';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.getPairDotId(startType, startId, endType, endId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'end':
        // console.log('dot', JSON.stringify(para.result, null, 4));
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


CGraph.prototype.addDot = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbData;
  var dbFlag;
  var objectName;
  var fnname = 'CGraph.prototype.addDot';

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
      case 'query_dot':
        var dot = $this.getDotByLineId(lineId);
        para.startDotId = dot.startDotId;
        para.endDotId = dot.endDotId;

        objectName = 'dot';
        dbData = {};
        dbData.id = [para.startDotId, para.endDotId];
        $this.api.recordRead(objectName, dbData,
          function () {
            var fd = $this.mac.fd.dot;
            para.canvasId = dbData[fd.canvasId];
            para.elementId = dbData[fd.elementId];
            para.anchor = dbData[fd.anchor];
            para.nStep = 'addEndpoint';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.addDot(lineId, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'addEndpoint':

        if (para.canvasId[0] !== '') {
          para.jsStartId = $this.jsIdPrefix.canvas + para.canvasId[0];
        } else if (para.elementId[0] !== '') {
          para.jsStartId = $this.jsIdPrefix.element + para.elementId[0];
        }

        if (para.canvasId[1] !== '') {
          para.jsEndId = $this.jsIdPrefix.canvas + para.canvasId[1];
        } else if (para.elementId[1] !== '') {
          para.jsEndId = $this.jsIdPrefix.element + para.elementId[1];
        }

        if ($('#' + para.jsStartId).length > 0 && $('#' + para.jsEndId).length > 0) {
          if ($($this.jqIdPrefix.dot + para.startDotId).length === 0) {
            var startEndpoint = $this.instance.addEndpoint(para.jsStartId, {
              anchor: para.anchor[0],
            }, $this.config.endPoint);

            $(startEndpoint.canvas).addClass('dot');
            var startDotId = $this.jsIdPrefix.dot + para.startDotId;
            startEndpoint.canvas.setAttribute('id', startDotId);
            startEndpoint.canvas.setAttribute('data-parentid', para.jsStartId);
          }


          if ($($this.jqIdPrefix.dot + para.endDotId).length === 0) {
            var endEndpoint = $this.instance.addEndpoint(para.jsEndId, {
              anchor: para.anchor[1],
            }, $this.config.endPoint);

            $(endEndpoint.canvas).addClass('dot');
            var endDotId = $this.jsIdPrefix.dot + para.endDotId;
            endEndpoint.canvas.setAttribute('id', endDotId);
            endEndpoint.canvas.setAttribute('data-parentid', para.jsEndId);
          }
        }
        para.nStep = 'end';
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
};


export default CGraph.prototype;