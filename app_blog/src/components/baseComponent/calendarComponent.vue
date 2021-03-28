<template>
    <div id="calendar-wrap">
        <el-calendar @dayPick="dayChange" v-if="init" :range="range" :size="size==='min'? 'mini': size" :yearRange="yearRange" :value="value"></el-calendar>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                init: false,
                checkedDay: '',
                value: '',
                range: undefined,
                yearRange: [1990, 2030],
                size: 'medium'
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
                    nStep: 0
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
                            // 判断para传值合法性：
                            if (that.para.date !== undefined) {
                                if (that.para.date.$table === undefined) {
                                    console.error('value的$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.date.$table) !== '[object Object]') {
                                    console.error('value的$table格式错误！');
                                    return
                                }
                                if (that.para.date.$value === undefined) {
                                    console.error('value的$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.date.$value) !== '[object Array]') {
                                    console.error('value的$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.range !== undefined && Object.prototype.toString.call(that.attr.range) !== '[object Array]') {
                                console.error('range格式错误！');
                                return
                            }
                            if (that.attr.yearRange !== undefined && Object.prototype.toString.call(that.attr.yearRange) !== '[object Array]') {
                                console.error('yearRange格式错误！');
                                return
                            }
                            if (that.attr.size !== undefined && typeof that.attr.size !== 'string') {
                                console.error('size格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.range !== undefined) {
                                that.range = that.attr.range;
                            }
                            if (that.attr.yearRange !== undefined) {
                                that.yearRange = that.attr.yearRange;
                            }
                            if (that.attr.size !== undefined) {
                                that.size = that.attr.size;
                            }

                            if (JSON.stringify(that.para.date.$table) === "{}") {
                                // 为内存数据：
                                if (that.para.date.$value.length === 1) {
                                    that.value = that.para.date.$value[0];
                                } else {
                                    console.error('$value参数格式错误！');
                                    return
                                }
                                para.nStep = 'init';
                                dbFlag += 1;
                                break;
                            } else {
                                // 为表格数据：
                                para.nStep = 'getValue';
                                dbFlag += 1;
                                break;
                            }
                        case 'getValue':
                            let tableName;
                            dbData = {};
                            dbData.id = that.para.date.$value;
                            for (let key in that.para.date.$table) {
                                tableName = key;
                                dbData[that.para.date.$table[tableName][0]] = [];
                            }
                            that.sys.api.recordRead(tableName, dbData, function () {
                                if (dbData[that.para.date.$table[tableName][0]].length === 1) {
                                    that.value = dbData[that.para.date.$table[tableName][0]][0];
                                } else {
                                    console.error('$value参数格式错误！');
                                    return
                                }
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'init':
                            let year;
                            let month;
                            let date;
                            if(this.value === '') {
                                let now = new Date();
                                year = now.getFullYear();
                                month = now.getMonth() + 1;
                                date = now.getDate();
                                month = month > 9 ? month : '0' + month;
                                date = date > 9 ? date : '0' + date;
                                this.value = year + '-' + month + '-' + date;
                            } else if(this.value instanceof Date) {
                                year = this.value.getFullYear();
                                month = this.value.getMonth() + 1;
                                date = this.value.getDate();
                                month = month > 9 ? month : '0' + month;
                                date = date > 9 ? date : '0' + date;
                                this.value = year + '-' + month + '-' + date;
                            }
                            this.checkedDay = this.value;
                            this.init = true;
                            para.nStep = 'end';
                            dbFlag += 1;
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
            dataRefresh: function () {
                this.startModule(function () {
                }, function (error) {
                    console.error(error);
                });
            },
            dayChange: function(day) {
                let that = this;
                let dbData;
                let tableName;
                if(day === this.checkedDay) {
                    return
                }
                this.checkedDay = day;
                this.callModuleEventPort('dataModifyEvent', []);
                if (JSON.stringify(this.para.date.$table) !== "{}") {
                    dbData = {};
                    dbData.id = that.para.date.$value;
                    for (let key in that.para.date.$table) {
                        tableName = key;
                        dbData[that.para.date.$table[tableName][0]] = [day];
                    }
                    that.sys.api.recordModify(tableName, dbData, function () {
                    }, function () {
                    });
                } else {

                }
            },
        }
    }

</script>
<style lang="scss">
    #calendar-wrap {
        .el-calendar .el-calendar__header .el-select:last-child {
            margin-left: $lm-calendar-el-select-margin-left;
            width: $lm-calendar-el-select-width
        }

        .el-calendar {
            background-color: $lm-calendar-background-color;
        }

        .el-calendar__header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: $lm-calendar-header-justify-content;
            padding: $lm-calendar-header-padding;
            border-bottom: $lm-calendar-table-border
        }

        .el-calendar__title {
            color: $lm-calendar-range-title-color;
            -ms-flex-item-align: center;
            align-self: center
        }

        .el-calendar__body {
            padding: $lm-calendar-body-padding
        }

        .el-calendar-table {
            table-layout: fixed;
            width: $lm-calendar-table-width
        }

        .el-calendar-table thead th {
            padding: $lm-calendar-thead-padding;
            color: $lm-calendar-thead-color;
            font-weight: $lm-calendar-normal-font-weight
        }

        .el-calendar-table:not(.is-range) td.next, .el-calendar-table:not(.is-range) td.prev {
            color: $lm-calendar-disabled-color
        }

        .el-calendar-table td {
            border-bottom: $lm-calendar-table-border;
            border-right: $lm-calendar-table-border;
            vertical-align: top;
            -webkit-transition: $lm-calendar-td-transition;
            transition: $lm-calendar-td-transition
        }

        .el-calendar-table td.is-selected {
            background-color: $lm--calendar-selected-background-color
        }

        .el-calendar-table td.is-today {
            color: $lm--calendar-today-color
        }

        .el-calendar-table tr:first-child td {
            border-top: $lm-calendar-table-border
        }

        .el-calendar-table tr td:first-child {
            border-left: $lm-calendar-table-border
        }

        .el-calendar-table tr.el-calendar-table__row--hide-border td {
            border-top: none
        }

        .el-calendar-table .el-calendar-day {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: $lm--calendar-everyday-padding;
            height: $lm--calendar-everyday-height
        }

        .el-calendar-table .el-calendar-day:hover {
            cursor: pointer;
            background-color: $lm--calendar-selected-background-color
        }
    }
</style>
