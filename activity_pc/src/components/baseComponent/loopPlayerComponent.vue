<template>
    <div id="loop-player-wrap">
        <lm-loop-player v-if="visible" @getIndex="clickEvent" :roll="roll" :placeholder="placeholder" :interval="interval" :size="size==='min'? 'mini': size" :disabled="disabled" :loop-data="loopData" :imagePosition="imagePosition"></lm-loop-player>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                loopData: [],
                visible: false,
                size: 'medium',
                disabled: false,
                imagePosition: 'left',   // 图片的位置。left/right（默认为left）
                interval: 3000,    // 自动切换的时间间隔，单位为毫秒;(默认3000）
                placeholder: '暂无消息...',
                roll: 'right_left',   // 走马灯滚动方向，从下到上或从右到左。down_up/right_left （默认为right_left）。
                initialIndex: 0,   // 初始状态激活的图文的索引，从 0 开始（默认为0）

            }
        },
        computed: {},

        watch: {
            para: {
                handler: function (val, oldVal) {
                    var $this = this;
                    Object.assign($this, $this.sys.lib);
                    if (val.$api && val.$isShow && val.$isMounted && !$this.$lodash.isEqual(val, oldVal)) {
                        $this.pvt_isSubModuleStarted = true;
                        $this.startModule(function () {
                            setTimeout(function () {
                                if ($this.$parent.subModuleActivatedEvent) {
                                    $this.$parent.subModuleActivatedEvent($this.refId);
                                }
                            }, 0);
                        }, function () {

                        });
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
        methods: {
            clickEvent: function(index) {
                this.callModuleEventPort('clickEvent', [Number(index)]);
            },
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let tableName;
                let fieldArr;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    typeObj: {}
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            // 初始化：
                            that.loopData = [];

                            // 判断para传值合法性：
                            if (that.para.message !== undefined) {
                                if (that.para.message.$table === undefined) {
                                    console.error('value的$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.message.$table) !== '[object Object]') {
                                    console.error('value的$table格式错误！');
                                    return
                                }
                                if (that.para.message.$value === undefined) {
                                    console.error('value的$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.message.$value) !== '[object Array]') {
                                    console.error('value的$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.disabled !== undefined && typeof that.attr.disabled !== 'boolean') {
                                console.error('disabled格式错误！');
                                return
                            }
                            if (that.attr.size !== undefined && typeof that.attr.size !== 'string') {
                                console.error('size格式错误！');
                                return
                            }
                            if (that.attr.imagePosition !== undefined && typeof that.attr.imagePosition !== 'string') {
                                console.error('imagePosition格式错误！');
                                return
                            }
                            if (that.attr.interval !== undefined && typeof that.attr.interval !== 'number') {
                                console.error('interval格式错误！');
                                return
                            }
                            if (that.attr.placeholder !== undefined && typeof that.attr.placeholder !== 'string') {
                                console.error('placeholder格式错误！');
                                return
                            }
                            if (that.attr.roll !== undefined && typeof that.attr.roll !== 'string') {
                                console.error('roll格式错误！');
                                return
                            }
                            if (that.attr.initialIndex !== undefined && typeof that.attr.initialIndex !== 'number') {
                                console.error('initialIndex格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.disabled !== undefined) {
                                that.disabled = that.attr.disabled;
                            }
                            if (that.attr.imagePosition !== undefined) {
                                that.imagePosition = that.attr.imagePosition;
                            }
                            if (that.attr.size !== undefined) {
                                that.size = that.attr.size;
                            }
                            if (that.attr.interval !== undefined) {
                                that.interval = that.attr.interval;
                            }
                            if (that.attr.placeholder !== undefined) {
                                that.placeholder = that.attr.placeholder;
                            }
                            if (that.attr.roll !== undefined) {
                                that.roll = that.attr.roll;
                            }
                            if (that.attr.initialIndex !== undefined) {
                                that.initialIndex = that.attr.initialIndex;
                            }

                            if (JSON.stringify(that.para.message.$table) === "{}") {
                                // 为内存数据：
                                for(let i = 0; i < that.para.message.$value[0].content.length; i++) {
                                    if(that.para.message.$value[0].content[i] || that.para.message.$value[0].image[i]) {
                                        that.loopData.push({
                                            content: that.para.message.$value[0].content[i],
                                            image: that.para.message.$value[0].image[i],
                                            index: i
                                        })
                                    }
                                }
                                para.nStep = 'init';
                                dbFlag += 1;
                            } else {
                                // 为表格数据：
                                tableName = Object.keys(that.para.message.$table)[0];
                                fieldArr = that.para.message.$table[tableName];
                                para.nStep = 'fieldType';
                                dbFlag += 1;
                            }
                            break;
                        case 'fieldType':
                            if(para.i > fieldArr.length - 1) {
                                para.i = 0;
                                para.nStep = 'getValue';
                                dbFlag += 1;
                                break;
                            }

                            that.sys.api.typeOfTable(tableName, fieldArr[para.i], function (result) {
                                para.typeObj[fieldArr[para.i]] = result;
                                para.i++;
                                para.nStep = 'fieldType';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'getValue':
                            dbData = {};
                            dbData.id = that.para.message.$value;
                            for(let j = 0; j < fieldArr.length; j++) {
                                dbData[fieldArr[j]] = [];
                            }
                            that.sys.api.recordRead(tableName, dbData, function () {
                                let content;
                                let icon;
                                for (let i = 0; i < dbData.id.length; i++) {
                                    for(let j = 0; j < fieldArr.length; j++) {
                                        if(para.typeObj[fieldArr[j]] === 'string') {
                                            content = dbData[fieldArr[j]][i];
                                        } else if(para.typeObj[fieldArr[j]] === 'picture') {
                                            icon = dbData[fieldArr[j]][i][0].fileName;
                                        }
                                    }
                                    if(content || icon) {
                                        that.loopData.push({
                                            content: content,
                                            image: icon,
                                            index: dbData.id[i]
                                        });
                                    }
                                }

                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'init':
                            let spliceArr = [];
                            for(let j = 0; j < that.loopData.length; j++) {
                                if(that.initialIndex !== 0 && j == that.initialIndex) {
                                    spliceArr = that.loopData.splice(0, j);
                                }
                            }
                            for(let i = 0; i < spliceArr.length; i++) {
                                that.loopData.push(spliceArr[i])
                            }

                            para.nStep = 'end';
                            dbFlag += 1;
                            break;
                        case 'end':
                            this.visible = true;
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
            dataRefresh: function () {
                this.startModule(function () {
                }, function (error) {
                    console.error(error);
                });
            }
        }
    }

</script>
<style lang="scss">
    #loop-player-wrap {
        #lm-loop-player {
            border: $lm-loop-player-border;
            border-radius: $lm-loop-player-border-radius;
            padding: $lm-loop-player-padding;
            font-family: $lm-loop-player-font-family;
            font-size: $lm-loop-player-font-size;
            color: $lm-loop-player-color;
            overflow: hidden;
            background-color: $lm-loop-player-background-color;
            -webkit-box-shadow: $lm-loop-player-box-shadow;
            box-shadow: $lm-loop-player-box-shadow
        }

        .lm-loop-player-large {
            width: $lm-loop-player-large-width;
            height: $lm-loop-player-large-height;
            line-height: $lm-loop-player-large-height
        }

        .lm-loop-player-medium {
            width: $lm-loop-player-medium-width;
            height: $lm-loop-player-medium-height;
            line-height: $lm-loop-player-medium-height
        }

        .lm-loop-player-small {
            width: $lm-loop-player-small-width;
            height: $lm-loop-player-small-height;
            line-height: $lm-loop-player-small-height
        }

        .lm-loop-player-min {
            width: $lm-loop-player-min-width;
            height: $lm-loop-player-min-height;
            line-height: $lm-loop-player-min-height
        }

        .lm-loop-player__wrap {
            overflow: hidden;
            width: 100%;
            height: 100%
        }

        #lm-loop-player__box {
            width: 80000%;
            cursor: pointer
        }

        .lm-loop-player-disabled {
            color: $lm-loop-player-disabled-color;
            cursor: auto !important
        }

        .lm-loop-player-disabled .icon {
            color: $lm-loop-player-disabled-color !important
        }

        #lm-loop-player__marquee {
            margin: $lm-loop-player-wrap-margin
        }

        #lm-loop-player__marquee .lm-loop-player__item {
            margin-right: $lm-loop-player-item-margin-right
        }

        #lm-loop-player__marquee .lm-loop-player__item .icon {
            margin-right: $lm-loop-player-icon-margin-right;
            font-size: $lm-loop-player-icon-font-size;
            color:$lm-loop-player-icon-color
        }

        #lm-loop-player__marquee .item-vertical {
            height: 100%
        }

        #lm-loop-player__node {
            position: absolute;
            z-index: -999;
            top: -999999px
        }
    }
</style>
