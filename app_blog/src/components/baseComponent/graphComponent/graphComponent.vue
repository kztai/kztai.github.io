<template>
    <div :id="wrap" class="canvasWrap">
        <div class="graphDefault" v-show="isShowDefault">
            <span>画图区域</span>
        </div>
        <div class="loading" v-show="isShowLoading"><div class="gif"></div></div>
    </div>
</template>
<script>
  /* eslint-disable */

  import common from './js/common.js';
  import canvas from './js/canvas.js';
  import group from './js/group.js';
  import element from './js/element.js';
  import connection from './js/connection.js';
  import dom from './js/dom.js';
  import eventUerEvent from './js/event.uerEvent.js';
  import eventEmit from './js/event.emit.js';
  import eventDefine from './js/event.define.js';
  import temp from './js/temp.js';


  export default {
    name    : "graphComponent",
    props   : ['para', 'refId'],
    inject  : ['sys'],
    data    : function () {
      return {
        // initMethod              : null,
        // pvt_isInitComplete      : false,
        // pvt_isMounted      : false,
        isShowDefault:true,
        isShowLoading:false,
        wrap                    : '',
        pvt_subModuleMethodQueue: {},
      }
    },
    computed: {},
    watch   : {
      para: {
        handler  : function (val, oldVal) {
          // console.log('2019 画图模块 watch ', val, oldVal);
          if (val.$api && val.$isShow && val.$isMounted) {
            var $this = this;
            // 第一次响应 api 就已经准备好，此时dom没有渲染过，需要强制更新。
            // if (typeof oldVal === 'undefined') {
            //   $this.pvt_needForceUpdate = true;
            // }

            Object.assign($this, $this.sys.lib);
            $this.startModule();
          }
        },
        deep     : true,
        immediate: true,
      }
    },
    // updated : function () {
    //   console.log('1123 画图模块 updated');
    //   // 参数传入子模块之后，调用传入 startSubModule 中的 callback 方法
    //   if (!this.pvt_isInitComplete) {
    //     // 将子模块启动标志置为 false
    //     this.pvt_isInitComplete = true;
    //     // 调用用户提供 callback 的方法，一般为初始显示函数，在这个函数中可能需要调用子模块方法
    //     if (this.initMethod && typeof this.initMethod === 'function') this.initMethod();
    //   }
    // },

    mounted  : function () {
      // console.log('2019 画图模块 mounted ', this.refId);
      if (this.$parent.pvt_isMounted) {
        this.$parent.pvt_isMounted[this.refId] = true;
      }
      // if (this.pvt_needForceUpdate) {
      //   this.pvt_needForceUpdate = false;
      //   this.$forceUpdate();
      // }
    },
    activated: function () {
      // console.log('2019 画图模块 activated ');
      if (this.$parent.subModuleActivatedEvent) {
        this.$parent.subModuleActivatedEvent(this.refId);
      }
    },
    methods  : {
      startModule: function () {
        var that = this;
        // that.wrap = that.para.wrapId;


        if (!that.isCommonInit) {
          that.wrap = that.getWrapId();
          that.commonInit(function () {

            },
            function () {

            });
        }

      },

      commonInit: function (successCallBack, errorCallBack) {
        var that = this;

        // /**
        //  * 画图类
        //  * @param api {object} 粒子实例
        //  * @param wrapId {string} DOM id
        //  * @param vueInstance {object} 当前 vue 组件实例
        //  * @constructor
        //  */
        function CGraph(api, wrapId, vueInstance) {
          var $this = this;

          $this.vue = vueInstance;
          $this.ref = $this.vue.refId;
          $this.parent = $this.vue.$parent;
          $this.mac = mac.mac;
          // $this.dbElement = geneInstance.dbElement;
          $this.api = api;
          $this.root = {};
          // $this.isLineMode = '';
          $this.isLineMode = false;
          $this.wrapId = wrapId;
          $('#' + wrapId)
            .addClass('canvasWrap')
            .attr('tabindex', 0);


          $this.jsIdPrefix = {
            canvas    : wrapId + '_canvas',
            group     : wrapId + '_group',
            element   : wrapId + '_element',
            line      : wrapId + '_line',
            dot       : wrapId + '_dot',
            joint     : wrapId + '_joint',
            jointPoint: wrapId + '_jointPoint',
          };

          $this.jqIdPrefix = {
            canvas    : '#' + $this.jsIdPrefix.canvas,
            group     : '#' + $this.jsIdPrefix.group,
            element   : '#' + $this.jsIdPrefix.element,
            line      : '#' + $this.jsIdPrefix.line,
            dot       : '#' + $this.jsIdPrefix.dot,
            joint     : '#' + $this.jsIdPrefix.joint,
            jointPoint: '#' + $this.jsIdPrefix.jointPoint,
          };

          // $this.userEventOfWrap();
          // $this.initRootCanvasVariable();
          $this.debugFlag_szl = true;
        }

        // 将画图类方法汇总到原型下
        CGraph.prototype = Object.assign(CGraph.prototype, common, canvas, group, element,
          connection, dom, eventUerEvent, eventEmit, eventDefine, temp);

        // 实例化画图类
        that.graph = new CGraph(that.sys.api, that.wrap, that);
        that.isCommonInit = true;
        successCallBack();
      },

      getWrapId: function () {
        var $all = $('.canvasWrap[id^="graph"]');
        var arrIndex = [];
        var max;
        var wrapId;
        $all.each(function () {
          arrIndex.push(parseInt($(this).attr('id').replace('graph', '')));
        });
        if (arrIndex.length > 0) {
          max = Math.max.apply(null, arrIndex);
          wrapId = 'graph' + (max + 1);
        } else {
          wrapId = 'graph1';
        }
        return wrapId;
      },

      newCanvas             : function (templateId, parentId, title, origin, size, attrib, successCallBack, errorCallBack) {
        this.graph.newCanvas(templateId, parentId, title, origin, size, attrib, successCallBack, errorCallBack);
      },
      showCanvas            : function (canvasId, successCallBack, errorCallBack) {
        this.graph.showCanvas(canvasId, successCallBack, errorCallBack);
      },
      moveCanvasTo          : function (canvasId, parentId, origin, successCallBack, errorCallBack) {
        this.graph.moveCanvasTo(canvasId, parentId, origin, successCallBack, errorCallBack);
      },
      deleteCanvas          : function (canvasId, successCallBack, errorCallBack) {
        this.graph.deleteCanvas(canvasId, successCallBack, errorCallBack);
      },
      zoomInRootCanvas      : function () {
        this.graph.zoomInRootCanvas();
      },
      zoomOutRootCanvas     : function () {
        this.graph.zoomOutRootCanvas();
      },
      zoomFullRootCanvas    : function () {
        this.graph.zoomFullRootCanvas();
      },
      insertGridRow         : function (canvasId, rowNumber, height, successCallBack, errorCallBack) {
        this.graph.insertGridRow(canvasId, rowNumber, height, successCallBack, errorCallBack);
      },
      insertGridColumn      : function (canvasId, columnNumber, width, successCallBack, errorCallBack) {
        this.graph.insertGridColumn(canvasId, columnNumber, width, successCallBack, errorCallBack);
      },
      deleteGridRow         : function (canvasId, rowNumber, successCallBack, errorCallBack) {
        this.graph.deleteGridRow(canvasId, rowNumber, successCallBack, errorCallBack);
      },
      deleteGridColumn      : function (canvasId, columnNumber, successCallBack, errorCallBack) {
        this.graph.deleteGridColumn(canvasId, columnNumber, successCallBack, errorCallBack);
      },
      setGridItemPosition   : function (type, id, gridArea, successCallBack, errorCallBack) {
        this.graph.setGridItemPosition(type, id, gridArea, successCallBack, errorCallBack);
      },
      getGridItemPosition   : function (type, id, successCallBack, errorCallBack) {
        this.graph.getGridItemPosition(type, id, successCallBack, errorCallBack);
      },
      setRootCanvasDraggable: function (option) {
        this.graph.setRootCanvasDraggable(option);
      },

      newElement           : function (templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack) {
        this.graph.newElement(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack);
      },
      deleteElement        : function (elementId, successCallBack, errorCallBack) {
        this.graph.deleteElement(elementId, successCallBack, errorCallBack);
      },
      setElement           : function (elementId, name, size, style, attrib, successCallBack, errorCallBack) {
        this.graph.setElement(elementId, name, size, style, attrib, successCallBack, errorCallBack);
      },
      moveElementTo        : function (elementId, canvasId, origin, successCallBack, errorCallBack) {
        this.graph.moveElementTo(elementId, canvasId, origin, successCallBack, errorCallBack);
      },
      newGroup             : function (templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack) {
        this.graph.newGroup(templateId, canvasId, name, origin, attrib, successCallBack, errorCallBack);
      },
      deleteGroup          : function (groupId, successCallBack, errorCallBack) {
        this.graph.deleteGroup(groupId, successCallBack, errorCallBack);
      },
      moveGroupTo          : function (groupId, parentId, origin, successCallBack, errorCallBack) {
        this.graph.moveGroupTo(groupId, parentId, origin, successCallBack, errorCallBack);
      },
      replaceGroupElement  : function (groupId, groupNumber, templateId, successCallBack, errorCallBack) {
        this.graph.replaceGroupElement(groupId, groupNumber, templateId, successCallBack, errorCallBack);
      },
      replaceElement       : function (elementId, templateId, successCallBack, errorCallBack) {
        this.graph.replaceGroupElement(elementId, templateId, successCallBack, errorCallBack);
      },
      setDraggingElement   : function (templateId, name, successCallBack, errorCallBack) {
        this.graph.setDraggingElement(templateId, name, successCallBack, errorCallBack);
      },
      setDraggingGroup     : function (templateId, name, successCallBack, errorCallBack) {
        this.graph.setDraggingGroup(templateId, name, successCallBack, errorCallBack);
      },
      setDraggingCanvas    : function (templateId, name, successCallBack, errorCallBack) {
        this.graph.setDraggingCanvas(templateId, name, successCallBack, errorCallBack);
      },
      setBorderHighlight   : function (type, id) {
        this.graph.setBorderHighlight(type, id);
      },
      cancelBorderHighlight: function (type, id) {
        this.graph.cancelBorderHighlight(type, id);
      },
      addErrorFlag         : function (type, id) {
        this.graph.addErrorFlag(type, id);
      },
      removeErrorFlag      : function (type, id) {
        this.graph.removeErrorFlag(type, id);
      },
      activateNameInput    : function (type, id) {
        this.graph.activateNameInput(type, id);
      },
      setName              : function (type, id, name, successCallBack, errorCallBack) {
        this.graph.setName(type, id, name, successCallBack, errorCallBack);
      },

      newLine          : function (templateId, startType, startId, endType, endId, name, direction, attrib, successCallBack, errorCallBack) {
        this.graph.newLine(templateId, startType, startId, endType, endId, name, direction, attrib, successCallBack, errorCallBack);
      },
      setLine          : function (lineId, name, direction, style, attrib, successCallBack, errorCallBack) {
        this.graph.setLine(lineId, name, direction, style, attrib, successCallBack, errorCallBack);
      },
      deleteLine       : function (arrLineId, successCallBack, errorCallBack) {
        this.graph.deleteLine(arrLineId, successCallBack, errorCallBack);
      },
      setLineModeCursor: function (option) {
        this.graph.setLineModeCursor(option);
      },
      repaintLine      : function (type, id, successCallBack, errorCallBack) {
        this.graph.repaintLine(type, id, successCallBack, errorCallBack);
      },
      removeCanvasView : function (canvasId) {
        this.graph.removeCanvasView(canvasId);
      },
      showLoading : function (option) {
        this.isShowLoading = option;
      },
    }

  }
</script>
<style scoped>
    /*@import "css/reset.css";*/
    @import "css/style.css";
    .graphDefault{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        min-height: 300px;
        background-color: #fcfdc9;
        text-align: center;
        line-height: 300px;
    }
    .graphDefault span{
        font-size: 28px;
        font-weight: bold;
        color: #778087;
    }
</style>