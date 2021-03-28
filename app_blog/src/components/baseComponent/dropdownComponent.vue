<template>
    <div class="dropdown-component">
        <el-dropdown
                :split-button="attrData.splitButton"
                :type="attrData.type?attrData.type:''"
                :size="attrData.size"
                :placement="attrData.placement"
                :trigger="attrData.trigger"
                :hideOnClick="attrData.hideOnClick"
                :showTimeout="attrData.showTimeout"
                :hideTimeout="attrData.hideTimeout"
                @command="clickMenu">
            <span v-if="attrData.splitButton">{{ menuName }}</span>
        <span class="el-dropdown-link" v-else>
            {{ menuName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-if="dropDown.length==0" disabled>无数据</el-dropdown-item>
                <el-dropdown-item
                        :divided="true" v-for="(item,index) in dropDown"
                        :key="index"
                        :disabled="item.disabled"
                        :icon="item.icon?item.icon:''"
                        :command="item.id">{{ item.label?item.label:'' }}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "dropdownComponent",
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        data:function(){
          return {
              dropDown:[],
              menuName:'下拉菜单',
              dropdown:{
                  para:{
                      $api: false,
                      $isShow: false,
                      $isMounted: false,
                  },
                  attr:{
                      splitButton:false,
                      size:'medium',
                      type:null,
                      placement:'bottom-end',
                      trigger:'hover',
                      hideOnClick:true,
                      showTimeout:250,
                      hideTimeout:150
                  }
              }
          }
        },
        computed: {
            attrData: function () {
                if (this.attr == undefined) {
                    return this.dropdown.attr;
                } else {
                    return Object.assign(this.dropdown.attr,this.attr)
                }
            }
        },
        watch: {
            para: {
                handler: function (val, oldVal) {
                    var $this = this;
                    Object.assign($this, $this.sys.lib);
                    if (val.$api && val.$isShow && val.$isMounted
                        && !$this.$lodash.isEqual(val, oldVal)) {
                        $this.pvt_isSubModuleStarted = true;
                        $this.startModule()
                    } else if (oldVal) {
                        setTimeout(function () {
                            if ($this.$parent.subModuleActivatedEvent) {
                                $this.$parent.subModuleActivatedEvent($this.refId);
                            }
                        }, 0);
                    }
                },
                deep: true,
                immediate: true,
            },
        },
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true;
            }
        },
        methods:{
            startModule() {
                let $this=this;
                if($this.para.dropDown) {
                    let $value = $this.para.dropDown.$value ? $this.para.dropDown.$value : null;
                    if ($value && Array.isArray($value) && $value[0] &&Array.isArray($value[0])){
                        $this.dropDown=$value[0]
                    }
                }
                if($this.para.menuName) {
                    let $value = $this.para.menuName.$value ? $this.para.menuName.$value : null;
                    if ($value && Array.isArray($value) && $value[0]){
                        if(typeof $value[0] == 'string') {
                            $this.menuName=$value[0]
                        }
                    }

                }
            },
            clickMenu(id) {
                if (this.callModuleEventPort) {
                    this.callModuleEventPort('itemClickEvent', [id]);
                }
            }
        }
    }
</script>

<style lang="scss">
    .dropdown-component {
        .el-dropdown-link {
            cursor: pointer;
            color:$lm-dropdown-text-font-color;
            font-size:$lm-dropdown-text-font-size;
            font-weight: $lm-dropdown-text-font-weight;
            i {
                color: $lm-dropdown-text-icon-color;
            }
        }
        .el-button-group > .el-button.is-active, .el-button-group > .el-button.is-disabled, .el-button-group > .el-button:active, .el-button-group > .el-button:focus, .el-button-group > .el-button:hover {
            z-index: 1
        }

        .el-button {
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: $lm-dropdown-button-background-color;
            border: $lm-dropdown-button-border-color;
            color: $lm-dropdown-button-font-color;
            -webkit-appearance: none;
            text-align: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            outline: 0;
            margin: 0;
            -webkit-transition: .1s;
            transition: $lm-dropdown-button-transition;
            font-weight: $lm-dropdown-button-font-weight;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px
        }

        .el-button + .el-button {
            margin-left: 10px
        }

        .el-button:focus, .el-button:hover {
            color: $lm-dropdown-button-hover-color;
            border-color: $lm-dropdown-button-hover-border-color;
            background-color: $lm-dropdown-button-hover-background-color
        }

        .el-button:active {
            color: $lm-dropdown-button-hover-color;
            border-color: $lm-dropdown-button-hover-border-color;
            outline: 0
        }

        .el-button::-moz-focus-inner {
            border: 0
        }

        .el-button [class*=el-icon-] + span {
            margin-left: 5px
        }

        .el-button.is-plain:focus, .el-button.is-plain:hover {
            background: #FFF;
            border-color: #409EFF;
            color: #409EFF
        }

        .el-button.is-active, .el-button.is-plain:active {
            color: #3a8ee6;
            border-color: #3a8ee6
        }

        .el-button.is-plain:active {
            background: #FFF;
            outline: 0
        }

        .el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
            color: #C0C4CC;
            cursor: not-allowed;
            background-image: none;
            background-color: #FFF;
            border-color: #EBEEF5
        }

        .el-button.is-disabled.el-button--text {
            background-color: transparent
        }

        .el-button.is-disabled.is-plain, .el-button.is-disabled.is-plain:focus, .el-button.is-disabled.is-plain:hover {
            background-color: #FFF;
            border-color: #EBEEF5;
            color: #C0C4CC
        }

        .el-button.is-loading {
            position: relative;
            pointer-events: none
        }

        .el-button.is-loading:before {
            pointer-events: none;
            content: '';
            position: absolute;
            left: -1px;
            top: -1px;
            right: -1px;
            bottom: -1px;
            border-radius: inherit;
            background-color: rgba(255, 255, 255, .35)
        }

        .el-button.is-round {
            border-radius: 20px;
            padding: 12px 23px
        }

        .el-button.is-circle {
            border-radius: 50%;
            padding: 12px
        }

        .el-button--primary {
            color: #FFF;
            background-color: #409EFF;
            border-color: #409EFF
        }

        .el-button--primary:focus, .el-button--primary:hover {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #FFF
        }

        .el-button--primary.is-active, .el-button--primary:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
            color: #FFF
        }

        .el-button--primary:active {
            outline: 0
        }

        .el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
            color: #FFF;
            background-color: #a0cfff;
            border-color: #a0cfff
        }

        .el-button--primary.is-plain {
            color: #409EFF;
            background: #ecf5ff;
            border-color: #b3d8ff
        }

        .el-button--primary.is-plain:focus, .el-button--primary.is-plain:hover {
            background: #409EFF;
            border-color: #409EFF;
            color: #FFF
        }

        .el-button--primary.is-plain:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
            color: #FFF;
            outline: 0
        }

        .el-button--primary.is-plain.is-disabled, .el-button--primary.is-plain.is-disabled:active, .el-button--primary.is-plain.is-disabled:focus, .el-button--primary.is-plain.is-disabled:hover {
            color: #8cc5ff;
            background-color: #ecf5ff;
            border-color: #d9ecff
        }

        .el-button--success {
            color: #FFF;
            background-color: #67C23A;
            border-color: #67C23A
        }

        .el-button--success:focus, .el-button--success:hover {
            background: #85ce61;
            border-color: #85ce61;
            color: #FFF
        }

        .el-button--success.is-active, .el-button--success:active {
            background: #5daf34;
            border-color: #5daf34;
            color: #FFF
        }

        .el-button--success:active {
            outline: 0
        }

        .el-button--success.is-disabled, .el-button--success.is-disabled:active, .el-button--success.is-disabled:focus, .el-button--success.is-disabled:hover {
            color: #FFF;
            background-color: #b3e19d;
            border-color: #b3e19d
        }

        .el-button--success.is-plain {
            color: #67C23A;
            background: #f0f9eb;
            border-color: #c2e7b0
        }

        .el-button--success.is-plain:focus, .el-button--success.is-plain:hover {
            background: #67C23A;
            border-color: #67C23A;
            color: #FFF
        }

        .el-button--success.is-plain:active {
            background: #5daf34;
            border-color: #5daf34;
            color: #FFF;
            outline: 0
        }

        .el-button--success.is-plain.is-disabled, .el-button--success.is-plain.is-disabled:active, .el-button--success.is-plain.is-disabled:focus, .el-button--success.is-plain.is-disabled:hover {
            color: #a4da89;
            background-color: #f0f9eb;
            border-color: #e1f3d8
        }

        .el-button--warning {
            color: #FFF;
            background-color: #E6A23C;
            border-color: #E6A23C
        }

        .el-button--warning:focus, .el-button--warning:hover {
            background: #ebb563;
            border-color: #ebb563;
            color: #FFF
        }

        .el-button--warning.is-active, .el-button--warning:active {
            background: #cf9236;
            border-color: #cf9236;
            color: #FFF
        }

        .el-button--warning:active {
            outline: 0
        }

        .el-button--warning.is-disabled, .el-button--warning.is-disabled:active, .el-button--warning.is-disabled:focus, .el-button--warning.is-disabled:hover {
            color: #FFF;
            background-color: #f3d19e;
            border-color: #f3d19e
        }

        .el-button--warning.is-plain {
            color: #E6A23C;
            background: #fdf6ec;
            border-color: #f5dab1
        }

        .el-button--warning.is-plain:focus, .el-button--warning.is-plain:hover {
            background: #E6A23C;
            border-color: #E6A23C;
            color: #FFF
        }

        .el-button--warning.is-plain:active {
            background: #cf9236;
            border-color: #cf9236;
            color: #FFF;
            outline: 0
        }

        .el-button--warning.is-plain.is-disabled, .el-button--warning.is-plain.is-disabled:active, .el-button--warning.is-plain.is-disabled:focus, .el-button--warning.is-plain.is-disabled:hover {
            color: #f0c78a;
            background-color: #fdf6ec;
            border-color: #faecd8
        }

        .el-button--danger {
            color: #FFF;
            background-color: #F56C6C;
            border-color: #F56C6C
        }

        .el-button--danger:focus, .el-button--danger:hover {
            background: #f78989;
            border-color: #f78989;
            color: #FFF
        }

        .el-button--danger.is-active, .el-button--danger:active {
            background: #dd6161;
            border-color: #dd6161;
            color: #FFF
        }

        .el-button--danger:active {
            outline: 0
        }

        .el-button--danger.is-disabled, .el-button--danger.is-disabled:active, .el-button--danger.is-disabled:focus, .el-button--danger.is-disabled:hover {
            color: #FFF;
            background-color: #fab6b6;
            border-color: #fab6b6
        }

        .el-button--danger.is-plain {
            color: #F56C6C;
            background: #fef0f0;
            border-color: #fbc4c4
        }

        .el-button--danger.is-plain:focus, .el-button--danger.is-plain:hover {
            background: #F56C6C;
            border-color: #F56C6C;
            color: #FFF
        }

        .el-button--danger.is-plain:active {
            background: #dd6161;
            border-color: #dd6161;
            color: #FFF;
            outline: 0
        }

        .el-button--danger.is-plain.is-disabled, .el-button--danger.is-plain.is-disabled:active, .el-button--danger.is-plain.is-disabled:focus, .el-button--danger.is-plain.is-disabled:hover {
            color: #f9a7a7;
            background-color: #fef0f0;
            border-color: #fde2e2
        }

        .el-button--info {
            color: #FFF;
            background-color: #909399;
            border-color: #909399
        }

        .el-button--info:focus, .el-button--info:hover {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #FFF
        }

        .el-button--info.is-active, .el-button--info:active {
            background: #82848a;
            border-color: #82848a;
            color: #FFF
        }

        .el-button--info:active {
            outline: 0
        }

        .el-button--info.is-disabled, .el-button--info.is-disabled:active, .el-button--info.is-disabled:focus, .el-button--info.is-disabled:hover {
            color: #FFF;
            background-color: #c8c9cc;
            border-color: #c8c9cc
        }

        .el-button--info.is-plain {
            color: #909399;
            background: #f4f4f5;
            border-color: #d3d4d6
        }

        .el-button--info.is-plain:focus, .el-button--info.is-plain:hover {
            background: #909399;
            border-color: #909399;
            color: #FFF
        }

        .el-button--info.is-plain:active {
            background: #82848a;
            border-color: #82848a;
            color: #FFF;
            outline: 0
        }

        .el-button--info.is-plain.is-disabled, .el-button--info.is-plain.is-disabled:active, .el-button--info.is-plain.is-disabled:focus, .el-button--info.is-plain.is-disabled:hover {
            color: #bcbec2;
            background-color: #f4f4f5;
            border-color: #e9e9eb
        }

        .el-button--text, .el-button--text.is-disabled, .el-button--text.is-disabled:focus, .el-button--text.is-disabled:hover, .el-button--text:active {
            border-color: transparent
        }

        .el-button--medium {
            padding: $lm-dropdown-button-medium-padding;
            font-size: $lm-dropdown-button-medium-font-size;
            border-radius: $lm-dropdown-button-medium-border-radius
        }
        .el-button--large {
            padding: $lm-dropdown-button-large-padding;
            font-size: $lm-dropdown-button-large-font-size;
            border-radius: $lm-dropdown-button-large-border-radius
        }
        .el-button--small {
            padding: $lm-dropdown-button-small-padding !important;
            font-size: $lm-dropdown-button-small-font-size;
            border-radius: $lm-dropdown-button-small-border-radius
        }
        .el-button--mini{
            padding: $lm-dropdown-button-mini-padding !important;
            font-size: $lm-dropdown-button-mini-font-size;
            border-radius: $lm-dropdown-button-mini-border-radius
        }

        .el-button--medium.is-round {
            padding: 10px 20px
        }

        .el-button--medium.is-circle {
            padding: 10px
        }

        .el-button--small, .el-button--small.is-round {
            padding: 9px 15px
        }

        .el-button--small.is-circle {
            padding: 9px
        }

        .el-button--mini, .el-button--mini.is-round {
            padding: 7px 15px
        }

        .el-button--mini.is-circle {
            padding: 7px
        }

        .el-button--text {
            color: #409EFF;
            background: 0 0;
            padding-left: 0;
            padding-right: 0
        }

        .el-button--text:focus, .el-button--text:hover {
            color: #66b1ff;
            border-color: transparent;
            background-color: transparent
        }

        .el-button--text:active {
            color: #3a8ee6;
            background-color: transparent
        }

        .el-button-group {
            display: inline-block;
            vertical-align: middle
        }

        .el-button-group::after, .el-button-group::before {
            display: table;
            content: ""
        }

        .el-button-group::after {
            clear: both
        }

        .el-button-group > .el-button {
            float: left;
            position: relative
        }

        .el-button-group > .el-button + .el-button {
            margin-left: 0
        }

        .el-button-group > .el-button:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0
        }

        .el-button-group > .el-button:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0
        }

        .el-button-group > .el-button:first-child:last-child {
            border-radius: 4px
        }

        .el-button-group > .el-button:first-child:last-child.is-round {
            border-radius: 20px
        }

        .el-button-group > .el-button:first-child:last-child.is-circle {
            border-radius: 50%
        }

        .el-button-group > .el-button:not(:first-child):not(:last-child) {
            border-radius: 0
        }

        .el-button-group > .el-button:not(:last-child) {
            margin-right: -1px
        }

        .el-button-group > .el-dropdown > .el-button {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--primary:first-child {
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--primary:last-child {
            border-left-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--primary:not(:first-child):not(:last-child) {
            border-left-color: rgba(255, 255, 255, .5);
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--success:first-child {
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--success:last-child {
            border-left-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--success:not(:first-child):not(:last-child) {
            border-left-color: rgba(255, 255, 255, .5);
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--warning:first-child {
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--warning:last-child {
            border-left-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--warning:not(:first-child):not(:last-child) {
            border-left-color: rgba(255, 255, 255, .5);
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--danger:first-child {
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--danger:last-child {
            border-left-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--danger:not(:first-child):not(:last-child) {
            border-left-color: rgba(255, 255, 255, .5);
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--info:first-child {
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--info:last-child {
            border-left-color: rgba(255, 255, 255, .5)
        }

        .el-button-group .el-button--info:not(:first-child):not(:last-child) {
            border-left-color: rgba(255, 255, 255, .5);
            border-right-color: rgba(255, 255, 255, .5)
        }

        .el-popper .popper__arrow, .el-popper .popper__arrow::after {
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid
        }

        .el-popper .popper__arrow {
            border-width: 6px;
            -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
            filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03))
        }

        .el-popper .popper__arrow::after {
            content: " ";
            border-width: 6px
        }

        .el-popper[x-placement^=top] {
            margin-bottom: 12px
        }

        .el-popper[x-placement^=top] .popper__arrow {
            bottom: -6px;
            left: 50%;
            margin-right: 3px;
            border-top-color: #EBEEF5;
            border-bottom-width: 0
        }

        .el-popper[x-placement^=top] .popper__arrow::after {
            bottom: 1px;
            margin-left: -6px;
            border-top-color: #FFF;
            border-bottom-width: 0
        }

        .el-popper[x-placement^=bottom] {
            margin-top: 12px
        }

        .el-popper[x-placement^=bottom] .popper__arrow {
            top: -6px;
            left: 50%;
            margin-right: 3px;
            border-top-width: 0;
            border-bottom-color: #EBEEF5
        }

        .el-popper[x-placement^=bottom] .popper__arrow::after {
            top: 1px;
            margin-left: -6px;
            border-top-width: 0;
            border-bottom-color: #FFF
        }

        .el-popper[x-placement^=right] {
            margin-left: 12px
        }

        .el-popper[x-placement^=right] .popper__arrow {
            top: 50%;
            left: -6px;
            margin-bottom: 3px;
            border-right-color: #EBEEF5;
            border-left-width: 0
        }

        .el-popper[x-placement^=right] .popper__arrow::after {
            bottom: -6px;
            left: 1px;
            border-right-color: #FFF;
            border-left-width: 0
        }

        .el-popper[x-placement^=left] {
            margin-right: 12px
        }

        .el-popper[x-placement^=left] .popper__arrow {
            top: 50%;
            right: -6px;
            margin-bottom: 3px;
            border-right-width: 0;
            border-left-color: #EBEEF5
        }

        .el-popper[x-placement^=left] .popper__arrow::after {
            right: 1px;
            bottom: -6px;
            margin-left: -6px;
            border-right-width: 0;
            border-left-color: #FFF
        }

        .el-dropdown {
            display: inline-block;
            position: relative;
            color: $lm-dropdown-button-font-color;
            font-size: $lm-dropdown-button-medium-font-size
        }

        .el-dropdown .el-button-group {
            display: block
        }

        .el-dropdown .el-button-group .el-button {
            float: none
        }

        .el-dropdown .el-dropdown__caret-button {
            padding-left: 5px;
            padding-right: 5px;
            position: relative;
            border-left: none
        }

        .el-dropdown .el-dropdown__caret-button::before {
            content: '';
            position: absolute;
            display: block;
            width: $lm-dropdown-line-width;
            top: 5px;
            bottom: 5px;
            left: 0;
            background: $lm-dropdown-line-background-color
        }

        .el-dropdown .el-dropdown__caret-button:hover::before {
            top: 0;
            bottom: 0
        }

        .el-dropdown .el-dropdown__caret-button .el-dropdown__icon {
            padding-left: 0
        }

        .el-dropdown__icon {
            font-size: 14px;
            margin: $lm-dropdown-button-margin
        }
        .el-button--large {
            .el-dropdown__icon {
                font-size: $lm-dropdown-button-large-icon-size;
            }
        }
        .el-button--medium {
            .el-dropdown__icon {
                font-size: $lm-dropdown-button-medium-icon-size;
            }
        }
        .el-button--small {
            .el-dropdown__icon {
                font-size: $lm-dropdown-button-small-icon-size;
            }
        }
        .el-button--mini {
            .el-dropdown__icon {
                font-size: $lm-dropdown-button-mini-icon-size;
            }
        }
        .el-dropdown .el-dropdown-selfdefine:focus:active, .el-dropdown .el-dropdown-selfdefine:focus:not(.focusing) {
            outline-width: 0
        }


    }
    .el-dropdown-menu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        padding: 10px 0;
        margin: $lm-dropdown-menu-margin;
        background-color: $lm-dropdown-menu-background-color;
        border: $lm-dropdown-menu-border-color;
        border-radius: $lm-dropdown-menu-border-radius;
        -webkit-box-shadow: $lm-dropdown-menu-box-shadow;
        box-shadow: $lm-dropdown-menu-box-shadow
    }

    .el-dropdown-menu__item {
        list-style: none;
        line-height: 36px;
        padding: 0 20px;
        margin: 0;
        font-size: 14px;
        color: $lm-dropdown-menuli-font-color;
        cursor: pointer;
        outline: 0
    }

    .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
        background-color: $lm-dropdown-menuli-hover-background-color;
        color: $lm-dropdown-menuli-hover-font-color
    }

    .el-dropdown-menu__item i {
        margin-right: $lm-dropdown-menuli-icon-margin-right
    }
    .el-dropdown-menu__item--divided:first-child {
        border-top: none;
    }
    .el-dropdown-menu__item--divided {
        position: relative;
        margin-top: 6px;
        border-top: $lm-dropdown-menuli-border-top
    }

    .el-dropdown-menu__item--divided:before {
        content: '';
        height: 6px;
        display: block;
        margin: 0 -20px;
        background-color: #FFF
    }

    .el-dropdown-menu__item.is-disabled {
        cursor: default;
        color: $lm-dropdown-menuli-disabled-font-color;
        pointer-events: none
    }

    .el-dropdown-menu--large {
        padding: $lm-dropdown-menu-large-padding
    }
    .el-dropdown-menu--large .el-dropdown-menu__item {
        line-height: $lm-dropdown-menuli-large-line-height;
        padding: $lm-dropdown-menuli-large-padding;
        font-size: $lm-dropdown-menuli-large-font-size
    }

    .el-dropdown-menu--large .el-dropdown-menu__item.el-dropdown-menu__item--divided {
        margin-top: 0
    }
    .el-dropdown-menu--large .el-dropdown-menu__item.el-dropdown-menu__item--divided:before {
        height: 0;
        margin: 0 -17px
    }
    .el-dropdown-menu--medium {
        padding: $lm-dropdown-menu-medium-padding
    }

    .el-dropdown-menu--medium .el-dropdown-menu__item {
        line-height: $lm-dropdown-menuli-medium-line-height;
        padding: $lm-dropdown-menuli-medium-padding;
        font-size: $lm-dropdown-menuli-medium-font-size
    }

    .el-dropdown-menu--medium .el-dropdown-menu__item.el-dropdown-menu__item--divided {
        margin-top: 0
    }

    .el-dropdown-menu--medium .el-dropdown-menu__item.el-dropdown-menu__item--divided:before {
        height:0;
        margin: 0 -17px
    }

    .el-dropdown-menu--small {
        padding: $lm-dropdown-menu-small-padding
    }

    .el-dropdown-menu--small .el-dropdown-menu__item {
        line-height: $lm-dropdown-menuli-small-line-height;
        padding: $lm-dropdown-menuli-small-padding;
        font-size: $lm-dropdown-menuli-small-font-size
    }

    .el-dropdown-menu--small .el-dropdown-menu__item.el-dropdown-menu__item--divided {
        margin-top: 0
    }

    .el-dropdown-menu--small .el-dropdown-menu__item.el-dropdown-menu__item--divided:before {
        height: 0;
        margin: 0 -15px
    }

    .el-dropdown-menu--mini {
        padding: $lm-dropdown-menu-mini-padding
    }

    .el-dropdown-menu--mini .el-dropdown-menu__item {
        line-height: $lm-dropdown-menuli-mini-line-height;
        padding: $lm-dropdown-menuli-mini-padding;
        font-size: $lm-dropdown-menuli-mini-font-size
    }

    .el-dropdown-menu--mini .el-dropdown-menu__item.el-dropdown-menu__item--divided {
        margin-top: 0
    }

    .el-dropdown-menu--mini .el-dropdown-menu__item.el-dropdown-menu__item--divided:before {
        height: 0;
        margin: 0 -10px
    }
</style>
