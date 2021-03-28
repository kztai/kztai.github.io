<template>
    <div class="zhl-tabs">
        <ul>
            <li @click="labelClickEvent(index)"
                :class="{'zhl-tabs-lis': true, 'zhl-tabs-lis-checked': tabSelect==index}"
                v-for="(item, index) in labelData"
                :style="setStyle(index)">
                <div class="zhl-tabs-lis-div" :title="item">
                    <i :class="iconData[index]"></i>
                    <span>{{item}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'tabs',
        inject: ['sys'],
        props: ['refId', 'para', 'attr'],
        data: function () {
            return {
                pvt_isSubModuleStarted: false,
                tabs: {
                    para: {
                        tabData: {
                            $table: '',
                            $field: [],
                            $value: {
                                val: [],
                                icon: [],
                                disable: []
                            }
                        }
                    },
                    attr: {
                        tabsWidth: '100px',
                        checked: 0,
                        marginLeft: '0',
                        marginRight: '0'
                    }
                },
                // 默认数据
                labelData: ['标签一', '标签二', '标签三'],
                iconData: ['el-icon-menu', 'el-icon-setting', 'el-icon-goods'],
                disableData: ['', '', ''],
                tabSelect: '',
            }
        },
        watch: {
            para: {
                handler: function (val, oldVal) {
                    let $this = this
                    if (val && val.$api && val.$isShow && val.$isMounted) {
                        Object.assign($this, $this.sys.lib)
                        $this.pvt_isSubModuleStarted = true
                        this.startModule()
                    }
                },
                deep: true,
                immediate: true
            }
        },
        computed: {
            attrData: function () {
                if (this.attr != undefined) {
                    for (let i in this.tabs.attr) {
                        if (this.attr[i] !== undefined) {
                            this.tabs.attr[i] = this.attr[i]
                        }
                    }
                }
                return this.tabs.attr
            }
        },
        methods: {
            // 启动方法
            startModule: function (callBack) {
                let $this = this
                $this.mac = mac.mac
                if ($this.para.tabData.$table.length == 0) {
                    $this.labelData = []
                    $this.iconData = []
                    $this.disableData = []
                    for (let i in $this.para.tabData.$value) {
                        $this.labelData.push($this.para.tabData.$value[i].val)
                        $this.iconData.push($this.para.tabData.$value[i].icon)
                        $this.disableData.push($this.para.tabData.$value[i].disable)
                    }
                } else {
                    let tabsData = {}
                    tabsData[$this.mac.fd.id] = $this.para.tabData.$value
                    tabsData[$this.para.tabData.$field[0]] = []
                    tabsData[$this.para.tabData.$field[1]] = []
                    tabsData[$this.para.tabData.$field[2]] = []
                    $this.sys.api.recordRead($this.para.tabData.$table, tabsData,
                        function (result) {
                            $this.labelData = tabsData[$this.para.tabData.$field[0]]
                            $this.iconData = tabsData[$this.para.tabData.$field[1]]
                            $this.disableData = tabsData[$this.para.tabData.$field[2]]
                        },
                        function (error) {
                            console.log(error)
                        })
                }
                if ($this.tabSelect === '') {
                    $this.tabSelect = $this.attr.checked
                }
            },
            setStyle: function (index) {
                let $this = this
                let obj = {}
                obj.width = $this.attrData.tabsWidth
                if (index === 0) {
                    obj.marginLeft = $this.attrData.marginLeft
                }
                if (index !== parseInt($this.labelData.length - 1)) {
                    obj.marginRight = $this.attrData.marginRight
                }
                return obj
            },
            // 公开方法
            disableLabel: function (label) {
                this.disableData[label] = true
                if (label == this.tabSelect) {
                    for (var i = 0; i < this.disableData.length; i++) {
                        if (this.disableData[i] != 'disable') {
                            this.labelClickEvent(i)
                            break
                        }
                    }
                }
            },
            checkedLabel: function (index) {
                this.labelClickEvent(index)
            },
            // 公开事件
            labelClickEvent: function (index) {
                let $this = this
                index = parseInt(index)
                if ($this.disableData[index] || $this.tabSelect === index) {
                    return
                }
                $this.tabSelect = index
                setTimeout(function () {
                    $this.callModuleEventPort('labelClickEvent', [index])
                }, 0)
            },
        },
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true
            }
        },
        activated: function(){
            if (this.$parent.subModuleActivatedEvent) {
                this.$parent.subModuleActivatedEvent(this.refId)
            }
        },
    }
</script>

<style lang="scss">
    .zhl-tabs {
        position: relative;
        text-align: left;
        /*z-index: 9;*/
        border-bottom: $custom--tab-border;
        line-height: 0;
    }
    .zhl-tabs ul {
        /*display: inline-block;*/
        display: flex;
        flex-wrap: nowrap;
        /*white-space: nowrap;*/
        height: 36px;
        line-height: 35px;
    }

    .zhl-tabs ul .zhl-tabs-lis {
        display: inline-block;
        text-align: center;
        border-radius: 0px;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: $custom--tab-width;
        font-size: $custom--tab-font-size;
        color: $custom--tab-font-color;
        border: $custom--tab-border;
        background-color: $custom--tab-checked-backgroundColor;
        border-bottom: none;
        cursor: pointer;
        position: relative;
        moz-user-select: -moz-none;
        -moz-user-select: none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .zhl-tabs ul .zhl-tabs-lis:hover {
        /*z-index: 9;*/
    }

    .zhl-tabs-lis-div {
        background-color: $custom--tab-backgroundColor;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .zhl-tabs ul .zhl-tabs-lis-checked .zhl-tabs-lis-div {
        background-color: $custom--tab-checked-backgroundColor;
    }
    .zhl-tabs-lis-div:hover {
        opacity: 0.8;
    }
    .zhl-tabs ul .zhl-tabs-lis i {
        padding: 0 2px;
    }
    .zhl-tabs ul .zhl-tabs-lis-checked {
        color: $custom--tab-font-checked-color;
        background-color: $custom--tab-checked-backgroundColor;
        /*z-index: 9;*/
        box-shadow: 0 1px 0 $custom--tab-checked-backgroundColor;
    }
</style>
