### 依赖

- jquery.js
- jquery-ui.js
- jsplumb.js

### 模块名称

- `graphComponent`

### 传入数据
- 参照模块代码规范即可
- **para** - 无自定义参数。
- **refId** - 父组件给子组件分配的引用 id。在画图模块发出事件同时会将此 refId 发出，供父组件分辨同源的子组件事件。

### 使用示例

```vue
<template>
    <div>
        <graph-component :para="para" :refId="ref" ref="ref"></graph-component>
    </div>
</template>

<script>
  import graphComponent from '../graph-component/CGraph';
</script>
```

### 监听事件

更多事件详见画图模块文档。在APP开发工具完成前（即编写工具本身的过程中），需要开发人员自行编写监听事件的代码。

示例：

```javascript
// 监听画图模块事件
graphComponent_mouseEnterElementEvent: function (ref, canvasId, elementId, successCallBack, errorCallBack) {
  // 如果当前父组件中多次使用了画图模块，则需要通过 ref 来判断是哪一个发出的事件
  // 调用当前父组件中方法
  this.geneDraw.geneElementDotSelect(canvasId, elementId, successCallBack, errorCallBack);
},
```

### 调用方法

通过 vue 实例属性 $refs 来调用。具体方法详见画图模块文档。