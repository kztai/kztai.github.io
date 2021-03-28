- 使用画图模块时，不要直接使用相关数字，建议自行定义画图相关的宏定义，以下是画图模块内部的宏定义代码，**仅供参考**：
```javascript
var mac = {
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
      connectorType: { // 连接器类型（走线方式）
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
  };
```

