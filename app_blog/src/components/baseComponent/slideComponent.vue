<template>
    <div id="slide-wrap">
        <el-carousel :type="card" :initial-index="attrData.initialIndex" :autoplay="attrData.autoplay"
                     :loop="attrData.loop" :trigger="attrData.tripper" :interval="attrData.interval"
                     :arrow="attrData.arrow" :indicator-position="attrData.indicatorPosition">
            <el-carousel-item v-for="(item,index) in imagesURL" :key="index">
                <img @click="getPicture(index)" width="100%" height="100%" style="vertical-align: top" class="picture"
                     :src="item" :alt="attrData.placeholder">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                imgIndex: 0,
                slideIsOver: true,
                timer: null,
                arrowShow: false,
                loopIsEnd: false,
                imagesURL: [],
                imageWidth: '',
                card: 'scrollx',
                attrData: {
                    placeholder: '暂无图片',
                    disabled: false,
                    interval: 3000,  // 自动切换的时间间隔，单位为毫秒;(默认3000）
                    initialIndex: 0,  // 初始状态激活的幻灯片的索引，从 0 开始（默认为0）
                    autoplay: true,  // 是否自动切换 （默认为true）
                    indicatorPosition: 'outside',  // 指示器的位置。outside/none/inside（默认为outside）
                    arrow: 'hover',  // 切换箭头的显示时机always/hover/never （默认为hover）
                    loop: true,  // 是否循环显示（默认为true）
                    tripper: 'click',   // 指示器触发方式：click(默认)/ none
                    effect: 'scrollx'   // 动画效果。scrollx, fade（默认为scrollx）
                },
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
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let dbFlag;
                let dbData;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    filePathArr: []
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
                            that.imagesURL = [];

                            // 判断para传值合法性：
                            if (that.para.image !== undefined) {
                                if (that.para.image.$table === undefined) {
                                    console.error('$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.image.$table) !== '[object Object]') {
                                    console.error('$table格式错误！');
                                    return
                                }
                                if (that.para.image.$value === undefined) {
                                    console.error('$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.image.$value) !== '[object Array]') {
                                    console.error('$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.placeholder !== undefined && typeof that.attr.placeholder !== 'string') {
                                console.error('placeholder格式错误！');
                                return
                            }
                            if (that.attr.interval !== undefined && typeof that.attr.interval !== 'number') {
                                console.error('interval格式错误！');
                                return
                            }
                            if (that.attr.disabled !== undefined && typeof that.attr.disabled !== 'boolean') {
                                console.error('disabled格式错误！');
                                return
                            }
                            if (that.attr.initialIndex !== undefined && typeof that.attr.initialIndex !== 'number') {
                                console.error('initialIndex格式错误！');
                                return
                            }
                            if (that.attr.autoplay !== undefined && typeof that.attr.autoplay !== 'boolean') {
                                console.error('autoplay格式错误！');
                                return
                            }
                            if (that.attr.indicatorPosition !== undefined && typeof that.attr.indicatorPosition !== 'string') {
                                console.error('indicatorPosition格式错误！');
                                return
                            }
                            if (that.attr.arrow !== undefined && typeof that.attr.arrow !== 'string') {
                                console.error('arrow格式错误！');
                                return
                            }
                            if (that.attr.loop !== undefined && typeof that.attr.loop !== 'boolean') {
                                console.error('loop格式错误！');
                                return
                            }
                            if (that.attr.tripper !== undefined && typeof that.attr.tripper !== 'string') {
                                console.error('tripper格式错误！');
                                return
                            }
                            if (that.attr.effect !== undefined && typeof that.attr.effect !== 'string') {
                                console.error('effect格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.placeholder !== undefined) {
                                that.attrData.placeholder = that.attr.placeholder;
                            }
                            if (that.attr.interval !== undefined) {
                                that.attrData.interval = that.attr.interval;
                            }
                            if (that.attr.disabled !== undefined) {
                                that.attrData.disabled = that.attr.disabled;
                            }
                            if (that.attr.initialIndex !== undefined) {
                                that.attrData.initialIndex = that.attr.initialIndex;
                            }
                            if (that.attr.autoplay !== undefined) {
                                that.attrData.autoplay = that.attr.autoplay;
                            }
                            if (that.attr.indicatorPosition !== undefined) {
                                that.attrData.indicatorPosition = that.attr.indicatorPosition;
                            }
                            if (that.attr.arrow !== undefined) {
                                that.attrData.arrow = that.attr.arrow;
                            }
                            if (that.attr.loop !== undefined) {
                                that.attrData.loop = that.attr.loop;
                            }
                            if (that.attr.tripper !== undefined) {
                                that.attrData.tripper = that.attr.tripper;
                            }
                            if (that.attr.effect !== undefined) {
                                that.attrData.effect = that.attr.effect;
                            }

                            if (JSON.stringify(that.para.image.$table) === "{}") {
                                console.error('$table不能为空！');
                                return
                            } else {
                                // 为表格数据：
                                para.nStep = 'getFilePath';
                                dbFlag += 1;
                                break;
                            }
                        case 'getFilePath':
                            let tableKey;
                            dbData = {};
                            dbData.id = that.para.image.$value;
                            for (let key in that.para.image.$table) {
                                tableKey = key;
                                dbData[that.para.image.$table[tableKey][0]] = [];
                            }
                            that.sys.api.recordRead(tableKey, dbData, function () {
                                for(let i = 0; i < dbData.id.length; i++) {
                                    if(dbData.id.length > 1) {
                                        para.filePathArr.push(dbData[that.para.image.$table[tableKey][0]][i][0].fileName);
                                    } else {
                                        for(let j = 0; j < dbData[that.para.image.$table[tableKey][0]][i].length; j++) {
                                            para.filePathArr.push(dbData[that.para.image.$table[tableKey][0]][i][j].fileName);
                                        }
                                    }

                                }
                                para.nStep = 'readFile';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'readFile':
                            if (para.i > para.filePathArr.length - 1) {
                                para.i = 0;
                                para.nStep = 'init';
                                dbFlag += 1;
                                break;
                            }

                            let filePath = para.filePathArr[para.i];
                            let tableName;
                            let field_icon;
                            let record;
                            if(that.para.image.$value.length > 1) {
                                record = that.para.image.$value[para.i];
                            } else {
                                record = that.para.image.$value[0];
                            }
                            for (let key in that.para.image.$table) {
                                tableName = key;
                                field_icon = that.para.image.$table[tableName][0];
                            }
                            that.sys.api.readFileBase64(tableName, field_icon, record, filePath, function (result) {
                                that.imagesURL.push(result);
                                para.i++;
                                para.nStep = 'readFile';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'init':
                            this.$nextTick(function () {
                                if (that.attrData.disabled) {
                                    that.attrData.arrow = 'never';
                                    that.attrData.indicatorPosition = 'none';
                                }
                                if (that.attrData.effect === 'fade') {
                                    that.card = 'card';
                                }
                                if (that.attrData.tripper === 'none') {
                                    that.attrData.tripper = undefined;
                                }
                                if (that.attrData.indicatorPosition === 'inside' || that.attrData.indicatorPosition === 'none') {
                                    $('#slide-wrap .el-carousel__container').addClass('el-carousel__container-inside');
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
            getPicture: function (index) {
                if(this.para.image.$value.length > 1) {
                    this.callModuleEventPort('clickEvent', [this.para.image.$value[index]]);
                } else {
                    this.callModuleEventPort('clickEvent', [this.para.image.$value[0]]);
                }

            }
        }
    }

</script>
<style lang="scss">
    #slide-wrap {
        width: $lm-slide-wrap-width;
        height: $lm-slide-wrap-height;
        background-color: $lm-slide-background-color;
        .el-carousel {
            position: relative
        }

        .el-carousel--horizontal {
            overflow: hidden;
            width: 100%;
            height: 100%;
        }

        .el-carousel--vertical {
            overflow: hidden
        }

        .el-carousel__container {
            position: relative;
            height: $lm-slide-container-height;
        }

        .el-carousel__container-inside {
            height: 100%;
        }

        .el-carousel__arrow {
            border: none;
            outline: 0;
            padding: 0;
            margin: 0;
            height: $lm-slide-arrow-height;
            width: $lm-slide-arrow-width;
            cursor: pointer;
            -webkit-transition: $lm-slide-arrow-transition;
            transition: $lm-slide-arrow-transition;
            border-radius: $lm-slide-border-radius;
            background-color: $lm-slide-arrow-background-color;
            color: $lm-slide-arrow-color;
            position: absolute;
            top: 50%;
            z-index: 10;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            text-align: center;
            font-size: $lm-slide-arrow-font-size
        }

        .el-carousel__arrow--left {
            left: $lm-slide-arrow-left-left
        }

        .el-carousel__arrow--right {
            right: $lm-slide-arrow-right-right
        }

        .el-carousel__arrow:hover {
            background-color: $lm-slide-arrow-hover-background-color
        }

        .el-carousel__arrow i {
            cursor: pointer
        }

        .el-carousel__indicators {
            position: absolute;
            list-style: none;
            margin: 0;
            padding: 0;
            z-index: 2
        }

        .el-carousel__indicators--horizontal {
            bottom: $lm-slide-indicator-inside-bottom;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%)
        }

        .el-carousel__indicators--outside {
            bottom: $lm-slide-indicator-outside-bottom;
            text-align: center;
            position: static;
            -webkit-transform: none;
            transform: none
        }

        .el-carousel__indicators--outside .el-carousel__indicator:hover button {
            opacity: $lm-slide-indicator-outside-hover-opacity
        }

        .el-carousel__indicators--outside button {
            background-color: $lm-slide-indicator-outside-background-color;
            opacity: $lm-slide-indicator-outside-opacity
        }

        .el-carousel__indicator {
            background-color: transparent;
            cursor: pointer
        }

        .el-carousel__indicator:hover button {
            opacity: $lm-slide-indicator-inside-hover-opacity
        }

        .el-carousel__indicator--horizontal {
            display: inline-block;
            padding: $lm-slide-indicator-padding
        }

        .el-carousel__indicator.is-active button {
            opacity: 1
        }

        .el-carousel__button {
            display: block;
            opacity: $lm-slide-indicator-button-opacity;
            width: $lm-slide-indicator-button-width;
            height: $lm-slide-indicator-button-height;
            background-color: $lm-slide-indicator-button-background-color;
            border: none;
            outline: 0;
            padding: 0;
            margin: 0;
            cursor: pointer;
            -webkit-transition: $lm-slide-indicator-button-transition;
            transition: $lm-slide-indicator-button-transition
        }

        .carousel-arrow-left-enter, .carousel-arrow-left-leave-active {
            -webkit-transform: $lm-slide-arrow-left-transform;
            transform: $lm-slide-arrow-left-transform;
            opacity: 0
        }

        .carousel-arrow-right-enter, .carousel-arrow-right-leave-active {
            -webkit-transform: $lm-slide-arrow-right-transform;
            transform: $lm-slide-arrow-right-transform;
            opacity: 0
        }


        .el-carousel__item, .el-carousel__mask {
            position: absolute;
            height: 100%;
            top: 0;
            left: 0
        }

        .el-carousel__item {
            width: 100%;
            display: inline-block;
            overflow: hidden;
            z-index: 0;
        }

        .el-carousel__item.is-active {
            z-index: 2
        }

        .el-carousel__item.is-animating {
            -webkit-transition: $lm-slide-item-animating-transition1;
            transition: $lm-slide-item-animating-transition1;
            transition: $lm-slide-item-animating-transition2;
            transition: $lm-slide-item-animating-transition3
        }


        .el-carousel__item--card {
            width: $lm-slide-item-card-width;
            -webkit-transition: $lm-slide-item-animating-transition1;
            transition: $lm-slide-item-animating-transition1;
            transition: $lm-slide-item-animating-transition2;
            transition: $lm-slide-item-animating-transition3
        }

        .el-carousel__item--card.is-in-stage {
            cursor: pointer;
            z-index: 1
        }

        .el-carousel__item--card.is-in-stage.is-hover .el-carousel__mask, .el-carousel__item--card.is-in-stage:hover .el-carousel__mask {
            opacity: $lm-slide-item-card-hover-mask-opacity
        }

        .el-carousel__item--card.is-active {
            z-index: 2
        }

        .el-carousel__mask {
            width: 100%;
            background-color: $lm-slide-mask-background-color;
            opacity: $lm-slide-mask-opacity;
            -webkit-transition: $lm-slide-mask-transition;
            transition: $lm-slide-mask-transition
        }
    }
</style>