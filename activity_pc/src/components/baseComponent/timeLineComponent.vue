<template>
    <div id="time-line-wrap">
        <div class="radio" v-show="showReverse">
            排序：
            <el-radio-group v-model="reverse">
                <el-radio :label="true">倒序</el-radio>
                <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>

        <el-timeline :reverse="reverse">
            <el-timeline-item
                    :hideTimestamp="hideTimestamp"
                    :placement="placement"
                    v-for="(activity, index) in timeLineValue"
                    :key="index"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size"
                    :timestamp="activity.timestamp">
                {{activity.content}}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                onRight: false,   // 时间戳是否居右显示（默认false）
                showReverse: true,  // 是否显示排序按钮（默认false）
                reverse: false,   // 指定节点排序方向，默认为正序(默认：false)
                hideTimestamp: false,  // 是否隐藏时间戳(默认：false)
                placement: 'bottom',   // 时间戳位置。 top / bottom（默认bottom）
                timeLineValue: [],

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
                let tableName;
                let fieldArr;
                let dbData;
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
                            that.timeLineValue = [];

                            // 判断para传值合法性：
                            if (that.para.timeLine !== undefined) {
                                if (that.para.timeLine.$table === undefined) {
                                    console.error('$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.timeLine.$table) !== '[object Object]') {
                                    console.error('$table格式错误！');
                                    return
                                }
                                if (that.para.timeLine.$value === undefined) {
                                    console.error('$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.timeLine.$value) !== '[object Array]') {
                                    console.error('$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.placement !== undefined && typeof that.attr.placement !== 'string') {
                                console.error('placement格式错误！');
                                return
                            }
                            if (that.attr.hideTimestamp !== undefined && typeof that.attr.hideTimestamp !== 'boolean') {
                                console.error('hideTimestamp格式错误！');
                                return
                            }
                            if (that.attr.reverse !== undefined && typeof that.attr.reverse !== 'boolean') {
                                console.error('reverse格式错误！');
                                return
                            }
                            if (that.attr.showReverse !== undefined && typeof that.attr.showReverse !== 'boolean') {
                                console.error('showReverse格式错误！');
                                return
                            }
                            if (that.attr.onRight !== undefined && typeof that.attr.onRight !== 'boolean') {
                                console.error('toRight格式错误！');
                                return
                            }


                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.placement !== undefined) {
                                that.placement = that.attr.placement;
                            }
                            if (that.attr.hideTimestamp !== undefined) {
                                that.hideTimestamp = that.attr.hideTimestamp;
                            }
                            if (that.attr.reverse !== undefined) {
                                that.reverse = that.attr.reverse;
                            }
                            if (that.attr.onRight !== undefined) {
                                that.onRight = that.attr.onRight;
                            }
                            if (that.attr.showReverse !== undefined) {
                                that.showReverse = that.attr.showReverse;
                            }

                            if (JSON.stringify(that.para.timeLine.$table) === "{}") {
                                // 为内存数据：
                                for (let i = 0; i < that.para.timeLine.$value[0].content.length; i++) {
                                    that.timeLineValue.push({
                                        content: that.para.timeLine.$value[0].content[i],
                                        timestamp: that.para.timeLine.$value[0].timestamp[i],
                                        icon: that.para.timeLine.$value[0].icon[i]
                                    });
                                }
                                para.nStep = 'init';
                                dbFlag += 1;
                            } else {
                                // 为表格数据：
                                tableName = Object.keys(that.para.timeLine.$table)[0];
                                fieldArr = that.para.timeLine.$table[tableName];
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
                            dbData.id = that.para.timeLine.$value;
                            for(let j = 0; j < fieldArr.length; j++) {
                                dbData[fieldArr[j]] = [];
                            }
                            that.sys.api.recordRead(tableName, dbData, function () {
                                let content;
                                let timestamp;
                                let icon;
                                for (let i = 0; i < dbData.id.length; i++) {
                                    for(let j = 0; j < fieldArr.length; j++) {
                                        if(para.typeObj[fieldArr[j]] === 'string') {
                                            content = dbData[fieldArr[j]][i];
                                        } else if(para.typeObj[fieldArr[j]] === 'time' || para.typeObj[fieldArr[j]] === 'date') {
                                            timestamp = dbData[fieldArr[j]][i];
                                        } else if(para.typeObj[fieldArr[j]] === 'picture') {
                                            icon = dbData[fieldArr[j]][i][0].fileName;
                                        }
                                    }
                                    that.timeLineValue.push({
                                        content: content,
                                        timestamp: timestamp,
                                        icon: icon
                                    });
                                }

                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'init':
                            this.$nextTick(function () {
                                if (that.onRight) {
                                    $('#time-line-wrap .radio').addClass('radio-right');
                                    $('#time-line-wrap .el-timeline-item .el-timeline-item__tail').addClass('el-timeline-item__tail-right');
                                    $('#time-line-wrap .el-timeline-item .el-timeline-item__node--normal').addClass('el-timeline-item__node--normal-right');
                                    $('#time-line-wrap .el-timeline-item .el-timeline-item__node--large').addClass('el-timeline-item__node--large-right');
                                    $('#time-line-wrap .el-timeline-item .el-timeline-item__wrapper').addClass('el-timeline-item__wrapper-right');
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
            }
        }
    }

</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    #time-line-wrap {
        .radio-right {
            text-align: right;
        }
        .radio {
            font-family: $lm-timeline-font-family;
            font-size: $lm-timeline-base-font-size;
            margin-bottom: $lm-timeline-radio-margin-bottom;
            .el-radio-group {
                display: inline-block;
                line-height: 1;
                vertical-align: middle;
                font-size: 0
            }

            .el-radio, .el-radio--medium.is-bordered .el-radio__label {
                font-size: $lm-timeline-base-font-size;
            }

            .el-radio, .el-radio__input {
                white-space: nowrap;
                line-height: 1;
                outline: 0
            }

            .el-radio, .el-radio__inner, .el-radio__input {
                position: relative;
                display: inline-block
            }

            .el-radio {
                color: $lm-timeline-text-regular-color;
                font-weight: $lm-timeline-radio-font-weight;
                cursor: pointer;
                margin-right: $lm-timeline-radio-margin-right;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none
            }


            .el-radio.is-bordered.is-checked {
                border-color: $lm-timeline-primary-border-color
            }

            .el-radio:last-child {
                margin-right: 0
            }

            .el-radio__input {
                cursor: pointer;
                vertical-align: middle
            }

            .el-radio__input.is-checked .el-radio__inner {
                border-color: $lm-timeline-primary-border-color;
                background: $lm-timeline-primary-background-color
            }

            .el-radio__input.is-checked .el-radio__inner::after {
                -webkit-transform: $lm-timeline-radio-inner-checked-transform;
                transform: $lm-timeline-radio-inner-checked-transform
            }

            .el-radio__input.is-checked + .el-radio__label {
                color: $lm-timeline-primary-color
            }

            .el-radio__input.is-focus .el-radio__inner {
                border-color: $lm-timeline-primary-border-color
            }

            .el-radio__inner {
                border: $lm-timeline-radio-inner-border;
                border-radius: 100%;
                width: $lm-timeline-radio-inner-width;
                height: $lm-timeline-radio-inner-width;
                background-color: $lm-timeline-white-background-color;
                cursor: pointer;
                -webkit-box-sizing: border-box;
                box-sizing: border-box
            }

            .el-radio__inner:hover {
                border-color: $lm-timeline-primary-border-color
            }

            .el-radio__inner::after {
                width: $lm-timeline-radio-inner-after-width;
                height: $lm-timeline-radio-inner-after-height;
                border-radius: 100%;
                background-color: $lm-timeline-white-background-color;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                -webkit-transform: $lm-timeline-radio-inner-transform;
                transform: $lm-timeline-radio-inner-transform;
                -webkit-transition: $lm-timeline-radio-inner-transition1;
                transition: $lm-timeline-radio-inner-transition1;
                transition: $lm-timeline-radio-inner-transition2;
                transition: $lm-timeline-radio-inner-transition3
            }

            .el-radio__original {
                opacity: 0;
                outline: 0;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0
            }

            .el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
                -webkit-box-shadow: $lm-timeline-box-shadow;
                box-shadow: $lm-timeline-box-shadow
            }

            .el-radio__label {
                font-size: $lm-timeline-base-font-size;
                padding-left: $lm-timeline-radio-label-padding-left
            }

        }

        .el-timeline {
            margin: 0;
            font-size: $lm-timeline-base-font-size;
            list-style: none
        }

        .el-timeline .el-timeline-item:last-child .el-timeline-item__tail {
            display: none
        }

        .el-timeline-item {
            position: relative;
            padding-bottom: $lm-timeline-item-padding-bottom
        }

        .el-timeline-item__wrapper {
            position: relative;
            padding-left: $lm-timeline-item-wrapper-padding-left;
            top: -3px
        }
        .el-timeline-item__wrapper-right {
            text-align: right;
            padding-right: $lm-timeline-item-wrapper-padding-left;
            padding-left: 0 !important;
        }

        .el-timeline-item__tail {
            position: absolute;
            left: $lm-timeline-item-tail-left;
            height: 100%;
            border-left: $lm-timeline-item-tail-border-left;
        }
        .el-timeline-item__tail-right {
            left: auto !important;
            right: $lm-timeline-item-tail-left;
        }

        .el-timeline-item__icon {
            color: $lm-timeline-white-color;
            font-size: $lm-timeline-small-font-size;
        }

        .el-timeline-item__node {
            position: absolute;
            background-color: $lm-timeline-item-node-background-color;
            border-radius: 50%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        .el-timeline-item__node--normal {
            left: $lm-timeline-item-node-normal-position;
            width: $lm-timeline-item-node-normal-size;
            height: $lm-timeline-item-node-normal-size
        }
        .el-timeline-item__node--normal-right {
            left: auto !important;
            right: $lm-timeline-item-node-normal-position;
        }

        .el-timeline-item__dot {
            position: absolute;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        .el-timeline-item__content {
            color: $lm-timeline-text-primary-color
        }

        .el-timeline-item__timestamp {
            color: $lm-timeline-text-secondary-color;
            line-height: 1;
            font-size: $lm-timeline-small-font-size;
        }

        .el-timeline-item__timestamp.is-top {
            margin-bottom: $lm-timeline-timestamp-top-margin-bottom;
            padding-top: $lm-timeline-timestamp-top-padding-top
        }

        .el-timeline-item__timestamp.is-bottom {
            margin-top: $lm-timeline-timestamp-bottom-margin-top
        }
    }
</style>