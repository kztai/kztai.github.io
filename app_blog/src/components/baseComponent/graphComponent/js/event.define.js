/* eslint-disable */

function CGraph() {
};


// --------------------------------------Events Define ----------------------------------
/**
 * 连线模式下鼠标指针移入画布事件；非连线模式下为拖拽元素进入画布事件
 * @event CGraph#mouseEnterCanvasEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.mouseEnterCanvasEvent = function (canvasId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('mouseEnterCanvasEvent', canvasId);
  $this.vue.callModuleEventPort('mouseEnterCanvasEvent', [canvasId], successCallBack, errorCallBack);
};


/**
 * 连线模式下鼠标指针移出画布事件；非连线模式下为拖拽元素离开画布事件
 * @event CGraph#mouseLeaveCanvasEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.mouseLeaveCanvasEvent = function (canvasId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('mouseLeaveCanvasEvent', canvasId);
  $this.vue.callModuleEventPort('mouseLeaveCanvasEvent', [canvasId], successCallBack, errorCallBack);

};

/**
 * 鼠标指针移入元件事件
 * @event CGraph#mouseEnterElementEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} elementId - 元件 Id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.mouseEnterElementEvent = function (canvasId, elementId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('mouseEnterElementEvent', canvasId, elementId);
  $this.vue.callModuleEventPort('mouseEnterElementEvent', [canvasId, elementId],
    successCallBack, errorCallBack);
};


/**
 * 鼠标指针离开元件事件
 * @event CGraph#mouseLeaveElementEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} elementId - 元件 Id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.mouseLeaveElementEvent = function (canvasId, elementId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('mouseLeaveElementEvent', canvasId, elementId);
  $this.vue.callModuleEventPort('mouseLeaveElementEvent', [canvasId, elementId],
    successCallBack, errorCallBack);
};


/**
 * 画布删除事件。注意：仅发出此事件，不会删除指定画布，开发者需要再调用删除函数。
 * @event CGraph#canvasDeleteEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {object|field-origin} origin - 位置信息。数据格式同对应字段，详见左边链接
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.canvasDeleteEvent = function (canvasId, origin, successCallBack, errorCallBack) {
  var $this = this;
  console.log('canvasDeleteEvent', canvasId, origin);
  $this.vue.callModuleEventPort('canvasDeleteEvent', [canvasId, origin],
    successCallBack, errorCallBack);
};

/**
 * 元件删除事件。注意：仅发出此事件，不会删除指定元件，开发者需要再调用删除函数。
 * @event CGraph#elementDeleteEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} elementId - 元件 Id
 * @param {object|field-origin} origin - 位置信息。数据格式同对应字段，详见左边链接
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.elementDeleteEvent = function (canvasId, elementId, origin, successCallBack, errorCallBack) {
  var $this = this;
  console.log('elementDeleteEvent', canvasId, elementId, origin);
  $this.vue.callModuleEventPort('elementDeleteEvent', [canvasId, elementId, origin],
    successCallBack, errorCallBack);
};

/**
 * 组合删除事件。注意：仅发出此事件，不会删除指定组合，开发者需要再调用删除函数。
 * @event CGraph#groupDeleteEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} groupId - 组合 Id
 * @param {object|field-origin} origin - 位置信息。数据格式同对应字段，详见左边链接
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.groupDeleteEvent = function (canvasId, groupId, origin, successCallBack, errorCallBack) {
  var $this = this;
  console.log('groupDeleteEvent', canvasId, groupId, origin,);
  $this.vue.callModuleEventPort('groupDeleteEvent', [canvasId, groupId, origin],
    successCallBack, errorCallBack);
};

/**
 * 连线删除事件。注意：仅发出此事件，不会删除指定连线，开发者需要再调用删除函数。
 * @event CGraph#lineDeleteEvent
 * @param {string} ref - 引用 Id
 * @param {string} lineId - 连线 Id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.lineDeleteEvent = function (lineId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('lineDeleteEvent', lineId);
  $this.vue.callModuleEventPort('lineDeleteEvent', [lineId],
    successCallBack, errorCallBack);
};

/**
 * @callback successCallBack_dropEvent
 * @param {Boolean[]} result 是否允许放置，如：[true]
 */

/**
 * 画布模板拖拽放置事件。注意：发出此事件之前不会新建对应画布，需要开发者自行调用新建函数新建。
 * @event CGraph#canvasTemplateDropEvent
 * @param {string} ref - 引用 Id
 * @param {string} parentId - 父画布 Id
 * @param {object} coordinate - 释放时鼠标坐标
 * @param {string} coordinate.left - 释放时鼠标 x 坐标
 * @param {string} coordinate.top - 释放时鼠标 y 坐标
 * @param {array} coordinate.gridArea - 父画布为网格布局时，释放时鼠标在画布中的位置信息，数组内容为 [rowStart,
 * rowEnd, columnStart, columnEnd]
 * @param {successCallBack_dropEvent} successCallBack - 返回 Boolean 值，是否允许放置，如：[true]
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.canvasTemplateDropEvent = function (parentId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('canvasTemplateDropEvent', parentId, coordinate);
  $this.vue.callModuleEventPort('canvasTemplateDropEvent', [parentId, coordinate], successCallBack,
    function (error) {
      successCallBack([false]);
    });
};

/**
 * 组合模板拖拽放置事件。注意：发出此事件之前不会新建对应组合，需要开发者自行调用新建函数新建。
 * @event CGraph#groupTemplateDropEvent
 * @param {string} ref - 引用 Id
 * @param {string} parentId - 父画布 Id
 * @param {object} coordinate - 释放时鼠标坐标
 * @param {string} coordinate.left - 释放时鼠标 x 坐标
 * @param {string} coordinate.top - 释放时鼠标 y 坐标
 * @param {array} coordinate.gridArea - 父画布为网格布局时，释放时鼠标在画布中的位置信息，数组内容为 [rowStart,
 * rowEnd, columnStart, columnEnd]
 * @param {successCallBack_dropEvent} successCallBack - 返回 Boolean 值，是否允许放置，如：[true]
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.groupTemplateDropEvent = function (parentId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('groupTemplateDropEvent', parentId, coordinate);
  $this.vue.callModuleEventPort('groupTemplateDropEvent', [parentId, coordinate],
    successCallBack, function (error) {
      successCallBack([false]);
    });
};

/**
 * 元件模板拖拽放置事件。注意：发出此事件之前不会新建对应元件，需要开发者自行调用新建函数新建。
 * @event CGraph#elementTemplateDropEvent
 * @param {string} ref - 引用 Id
 * @param {string} parentId - 父画布 Id
 * @param {object} coordinate - 释放时鼠标坐标
 * @param {string} coordinate.left - 释放时鼠标 x 坐标
 * @param {string} coordinate.top - 释放时鼠标 y 坐标
 * @param {array} coordinate.gridArea - 父画布为网格布局时，释放时鼠标在画布中的位置信息，数组内容为 [rowStart,
 * rowEnd, columnStart, columnEnd]
 * @param {successCallBack_dropEvent} successCallBack - 返回 Boolean 值，是否允许放置，如：[true]
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.elementTemplateDropEvent = function (parentId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('elementTemplateDropEvent', parentId, coordinate);
  $this.vue.callModuleEventPort('elementTemplateDropEvent', [parentId, coordinate],
    successCallBack, function (error) {
      successCallBack([false]);
    });
};

/**
 * 画布拖拽放置事件。注意：发出此事件之前不会移动对应画布，需要开发者自行调用相关移动函数。
 * @event CGraph#canvasDropEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} parentId - 父画布 Id
 * @param {object} coordinate - 释放时鼠标坐标
 * @param {string} coordinate.left - 释放时鼠标 x 坐标
 * @param {string} coordinate.top - 释放时鼠标 y 坐标
 * @param {array} coordinate.gridArea - 父画布为网格布局时，释放时鼠标在画布中的位置信息，数组内容为 [rowStart,
 * rowEnd, columnStart, columnEnd]
 * @param {successCallBack_dropEvent} successCallBack - 返回 Boolean 值，是否允许放置，如：[true]
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.canvasDropEvent = function (canvasId, parentId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('canvasDropEvent', canvasId, parentId, coordinate);
  $this.vue.callModuleEventPort('canvasDropEvent', [canvasId, parentId, coordinate],
    successCallBack, function (error) {
      successCallBack([false]);
    });
};

/**
 * 组合拖拽放置事件。注意：发出此事件之前不会移动对应组合，需要开发者自行调用相关移动函数。
 * @event CGraph#groupDropEvent
 * @param {string} ref - 引用 Id
 * @param {string} groupId - 组合 Id
 * @param {string} parentId - 父画布 Id
 * @param {object} coordinate - 释放时鼠标坐标
 * @param {string} coordinate.left - 释放时鼠标 x 坐标
 * @param {string} coordinate.top - 释放时鼠标 y 坐标
 * @param {array} coordinate.gridArea - 父画布为网格布局时，释放时鼠标在画布中的位置信息，数组内容为 [rowStart,
 * rowEnd, columnStart, columnEnd]
 * @param {successCallBack_dropEvent} successCallBack - 返回 Boolean 值，是否允许放置，如：[true]
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.groupDropEvent = function (groupId, parentId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('groupDropEvent', groupId, parentId, coordinate);
  $this.vue.callModuleEventPort('groupDropEvent', [groupId, parentId, coordinate],
    successCallBack, function (error) {
      successCallBack([false]);
    });
};

/**
 * 元件拖拽放置事件。注意：发出此事件之前不会移动对应元件，需要开发者自行调用相关移动函数。
 * @event CGraph#elementDropEvent
 * @param {string} ref - 引用 Id
 * @param {string} elementId - 元件 Id
 * @param {string} parentId - 父画布 Id
 * @param {object} coordinate - 释放时鼠标坐标
 * @param {string} coordinate.left - 释放时鼠标 x 坐标
 * @param {string} coordinate.top - 释放时鼠标 y 坐标
 * @param {array} coordinate.gridArea - 父画布为网格布局时，释放时鼠标在画布中的位置信息，数组内容为 [rowStart,
 * rowEnd, columnStart, columnEnd]
 * @param {successCallBack_dropEvent} successCallBack - 返回 Boolean 值，是否允许放置，如：[true]
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.elementDropEvent = function (elementId, parentId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('elementDropEvent', elementId, parentId, coordinate);
  $this.vue.callModuleEventPort('elementDropEvent', [elementId, parentId, coordinate],
    successCallBack, function (error) {
      successCallBack([false]);
    });
};

/**
 * 画布右键菜单事件
 * @event CGraph#canvasContextMenuEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {object} coordinate - 鼠标坐标
 * @param {string} coordinate.x - 鼠标 x 坐标
 * @param {string} coordinate.y - 鼠标 y 坐标
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.canvasContextMenuEvent = function (canvasId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('canvasContextMenuEvent', canvasId, coordinate);
  $this.vue.callModuleEventPort('canvasContextMenuEvent', [canvasId, coordinate],
    successCallBack, errorCallBack);
};

/**
 * 画布右键菜单取消事件
 * @ignore
 * @event CGraph#canvasContextMenuCancelEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.canvasContextMenuCancelEvent = function (canvasId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('canvasContextMenuCancelEvent', canvasId);
  $this.vue.callModuleEventPort('canvasContextMenuCancelEvent', [canvasId],
    successCallBack, errorCallBack);
};

/**
 * 元件右键菜单事件
 * @event CGraph#elementContextMenuEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} elementId - 元件 Id
 * @param {object} coordinate - 鼠标坐标
 * @param {string} coordinate.x - 鼠标 x 坐标
 * @param {string} coordinate.y - 鼠标 y 坐标
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.elementContextMenuEvent = function (canvasId, elementId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('elementContextMenuEvent', canvasId, elementId, coordinate);
  $this.vue.callModuleEventPort('elementContextMenuEvent', [canvasId, elementId, coordinate],
    successCallBack, errorCallBack);
};

/**
 * 元件右键菜单取消事件
 * @ignore
 * @event CGraph#elementContextMenuCancelEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} elementId - 元件 Id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.elementContextMenuCancelEvent = function (canvasId, elementId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('elementContextMenuCancelEvent', canvasId, elementId);
  $this.vue.callModuleEventPort('elementContextMenuCancelEvent', [canvasId, elementId],
    successCallBack, errorCallBack);
};

/**
 * 组合右键菜单事件
 * @event CGraph#groupContextMenuEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} groupId - 组合 Id
 * @param {object} coordinate - 鼠标坐标
 * @param {string} coordinate.x - 鼠标 x 坐标
 * @param {string} coordinate.y - 鼠标 y 坐标
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.groupContextMenuEvent = function (canvasId, groupId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('groupContextMenuEvent', canvasId, groupId, coordinate);
  $this.vue.callModuleEventPort('groupContextMenuEvent', [canvasId, groupId, coordinate],
    successCallBack, errorCallBack);
};

/**
 * 元件右键菜单取消事件
 * @ignore
 * @event CGraph#groupContextMenuCancelEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} groupId - 组合 Id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.groupContextMenuCancelEvent = function (canvasId, groupId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('groupContextMenuCancelEvent', canvasId, groupId);
  $this.vue.callModuleEventPort('groupContextMenuCancelEvent', [canvasId, groupId],
    successCallBack, errorCallBack);
};

/**
 * 连线右键菜单事件
 * @event CGraph#lineContextMenuEvent
 * @param {string} ref - 引用 Id
 * @param {string} lineId - 连线 Id
 * @param {object} coordinate - 鼠标坐标
 * @param {string} coordinate.x - 鼠标 x 坐标
 * @param {string} coordinate.y - 鼠标 y 坐标
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.lineContextMenuEvent = function (lineId, coordinate, successCallBack, errorCallBack) {
  var $this = this;
  console.log('lineContextMenuEvent', lineId, coordinate);
  $this.vue.callModuleEventPort('lineContextMenuEvent', [lineId, coordinate],
    successCallBack, errorCallBack);
};

// define: lineContextMenuCancelEvent
CGraph.prototype.lineContextMenuCancelEvent = function (lineId, successCallBack, errorCallBack) {
  console.log('lineContextMenuCancelEvent', lineId);
  successCallBack();
};

/**
 * @callback successCallBack_nameSetEvent
 * @param {Boolean[]} result 是否允许修改，如：[true]
 */


/**
 * 画布标题设置事件
 * @event CGraph#canvasTitleSetEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} name - 画布名称
 * @param {successCallBack_nameSetEvent} successCallBack - 返回是否允许修改的 Boolean 值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.canvasTitleSetEvent = function (canvasId, name, successCallBack, errorCallBack) {
  var $this = this;
  console.log('canvasTitleSetEvent', canvasId, name,);
  $this.vue.callModuleEventPort('canvasTitleSetEvent', [canvasId, name],
    successCallBack, errorCallBack);
};

/**
 * 元件名称设置事件
 * @event CGraph#elementNameSetEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} elementId - 元件 Id
 * @param {string} name - 元件名称
 * @param {successCallBack_nameSetEvent} successCallBack - 返回是否允许修改的 Boolean 值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.elementNameSetEvent = function (canvasId, elementId, name, successCallBack, errorCallBack) {
  var $this = this;
  console.log('elementNameSetEvent', canvasId, elementId, name,);
  $this.vue.callModuleEventPort('elementNameSetEvent', [canvasId, elementId, name],
    successCallBack, errorCallBack);
};

/**
 * 组合名称设置事件
 * @event CGraph#groupNameSetEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} groupId - 组合 Id
 * @param {string} name - 组合名称
 * @param {successCallBack_nameSetEvent} successCallBack - 返回是否允许修改的 Boolean 值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.groupNameSetEvent = function (canvasId, groupId, name, successCallBack, errorCallBack) {
  var $this = this;
  console.log('groupNameSetEvent', canvasId, groupId, name,);
  $this.vue.callModuleEventPort('groupNameSetEvent', [canvasId, groupId, name],
    successCallBack, errorCallBack);
};

/**
 * 连线名称设置事件
 * @event CGraph#lineNameSetEvent
 * @param {string} ref - 引用 Id
 * @param {string} lineId - 连线 Id
 * @param {string} name - 连线名称
 * @param {successCallBack_nameSetEvent} successCallBack - 返回是否允许修改的 Boolean 值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.lineNameSetEvent = function (lineId, name, successCallBack, errorCallBack) {
  var $this = this;
  console.log('lineNameSetEvent', lineId, name,);
  $this.vue.callModuleEventPort('lineNameSetEvent', [lineId, name],
    successCallBack, errorCallBack);
};

/**
 * 元件文本内容设置事件
 * @event CGraph#elementContentSetEvent
 * @param {string} ref - 引用 Id
 * @param {string} canvasId - 画布 Id
 * @param {string} elementId - 元件 Id
 * @param {string} content - 元件文本内容
 * @param {successCallBack_nameSetEvent} successCallBack - 返回是否允许修改的 Boolean 值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.elementContentSetEvent = function (canvasId, elementId, content, successCallBack, errorCallBack) {
  var $this = this;
  console.log('elementContentSetEvent', canvasId, elementId, content);
  $this.vue.callModuleEventPort('elementContentSetEvent', [canvasId, elementId, content],
    successCallBack, errorCallBack);
};



/**
 * @callback successCallBack_lineCompleteEvent
 * @param {Object[]} result 连线数据
 * @param result.templateId {string} 连线模板id，为空字符串时表示取消连线。
 * @param result.name {string} 连线名称
 * @param result.direction {string} 连线方向
 * @param result.attrib {object|field-line-attrib} 连线属性
 */


/**
 * 连线完成事件。注意：是在完成连线后，发出此事件，开发者不需要再调用新建连线函数。
 * @event CGraph#lineCompleteEvent
 * @param {string} ref - 引用 Id
 * @param {string} lineId - 连线 Id
 * @param {string} startType 起点元素的类型
 * @param {string} startId 起点元素的 id
 * @param {string} endType 终点元素的类型
 * @param {string} endId 终点元素的 id
 * @param {successCallBack_lineCompleteEvent} successCallBack - 返回值数据结构见左边链接
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.lineCompleteEvent = function (lineId, startType, startId, endType, endId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('lineCompleteEvent', lineId, startType, startId, endType, endId);
  $this.vue.callModuleEventPort('lineCompleteEvent', [lineId, startType, startId, endType, endId],
    successCallBack, errorCallBack);
};

/**
 * 起点选择事件
 * @event CGraph#startSelectEvent
 * @param {string} ref - 引用 Id
 * @param {string} parentId 起点元素父画布 id
 * @param {string} type 起点元素的类型
 * @param {string} id 起点元素的 id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.startSelectEvent = function (parentId, type, id, successCallBack, errorCallBack) {
  var $this = this;
  console.log('startSelectEvent', parentId, type, id);
  $this.vue.callModuleEventPort('startSelectEvent', [parentId, type, id],
    successCallBack, errorCallBack);
};

/**
 * 起点选择取消事件
 * @event CGraph#startDeselectEvent
 * @param {string} ref - 引用 Id
 * @param {string} parentId 起点元素父画布 id
 * @param {string} type 起点元素的类型
 * @param {string} id 起点元素的 id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.startDeselectEvent = function (parentId, type, id, successCallBack, errorCallBack) {
  var $this = this;
  console.log('startDeselectEvent', parentId, type, id);
  $this.vue.callModuleEventPort('startDeselectEvent', [parentId, type, id],
    successCallBack, errorCallBack);
};


/**
 * 将已经存在的连线的某一端的端点拖拽离开时触发事件
 * @event CGraph#lineEndDragEvent
 * @param {string} ref - 引用 Id
 * @param {string} lineId 线端对应连线id
 * @param {string} parentId 拖拽离开的元素的父画布id
 * @param {string} type 拖拽离开的元素的类型
 * @param {string} id 拖拽离开的元素的 id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.lineEndDragEvent = function (lineId, parentId, type, id, successCallBack, errorCallBack) {
  var $this = this;
  console.log('lineEndDragEvent', lineId, parentId, type, id);
  $this.vue.callModuleEventPort('lineEndDragEvent', [lineId, parentId, type, id],
    successCallBack, errorCallBack);
};


/**
 * 将已经存在的连线的某一端的端点拖拽离开后，在某个元素上释放并重新连线时触发事件
 * @event CGraph#lineEndDropEvent
 * @param {string} ref - 引用 Id
 * @param {string} parentId 拖拽端点释放时元素的父画布id
 * @param {string} type 拖拽端点释放时元素的类型
 * @param {string} id 拖拽端点释放时元素的 id
 * @param {successCallBack_lineCompleteEvent} successCallBack - 返回值数据结构见左边链接
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.lineEndDropEvent = function (parentId, type, id, successCallBack, errorCallBack) {
  var $this = this;
  console.log('lineEndDropEvent', parentId, type, id);
  $this.vue.callModuleEventPort('lineEndDropEvent', [parentId, type, id],
    successCallBack, errorCallBack);
};

/**
 * 画布拖拽开始事件
 * @event CGraph#canvasDragStartEvent
 * @param {string} ref - 引用 Id
 * @param {string} parentId - 父画布 id
 * @param {string} canvasId - 被拖拽画布 id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.canvasDragStartEvent = function (parentId, canvasId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('canvasDragStartEvent', parentId, canvasId);
  $this.vue.callModuleEventPort('canvasDragStartEvent', [parentId, canvasId],
    successCallBack, errorCallBack);
};

/**
 * 组合拖拽开始事件
 * @event CGraph#groupDragStartEvent
 * @param {string} ref - 引用 Id
 * @param {string} parentId - 父画布 id
 * @param {string} groupId - 被拖拽组合 id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.groupDragStartEvent = function (parentId, groupId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('groupDragStartEvent', parentId, groupId);
  $this.vue.callModuleEventPort('groupDragStartEvent', [parentId, groupId],
    successCallBack, errorCallBack);
};

/**
 * 组合拖拽开始事件
 * @event CGraph#elementDragStartEvent
 * @param {string} ref - 引用 Id
 * @param {string} parentId - 父画布 id
 * @param {string} elementId - 被拖拽元件 id
 * @param {successCallBack} successCallBack - 无返回值
 * @param {errorCallBack} errorCallBack - 返回错误信息
 */
CGraph.prototype.elementDragStartEvent = function (parentId, elementId, successCallBack, errorCallBack) {
  var $this = this;
  console.log('elementDragStartEvent', parentId, elementId);
  $this.vue.callModuleEventPort('elementDragStartEvent', [parentId, elementId],
    successCallBack, errorCallBack);
};


export default CGraph.prototype;