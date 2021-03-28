<template>
    <div id="breadcrumb-wrap">
        <el-breadcrumb :separator="separator">
            <el-breadcrumb-item v-for="(item, pathIndex) in breadcrumbValue" :key="pathIndex" :icon="item.icon">
                <a @click="getPath(item.index)">{{item.name}}</a>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                breadcrumbValue: [],
                separator: '/'    // 分隔符，（默认为斜杠'/')
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
            getPath: function(index) {
                this.callModuleEventPort('clickEvent', [index]);
            },
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
                            if (that.para.path !== undefined) {
                                if (that.para.path.$table === undefined) {
                                    console.error('$table不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.path.$table) !== '[object Object]') {
                                    console.error('$table格式错误！');
                                    return
                                }
                                if (that.para.path.$value === undefined) {
                                    console.error('$value不存在！');
                                    return
                                } else if (Object.prototype.toString.call(that.para.path.$value) !== '[object Array]') {
                                    console.error('$value格式错误！');
                                    return
                                }
                            }

                            // 判断attr传值合法性：
                            if (that.attr.separator !== undefined && typeof that.attr.separator !== 'string') {
                                console.error('separator格式错误！');
                                return
                            }


                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.separator !== undefined) {
                                that.separator = that.attr.separator;
                            }

                            if (JSON.stringify(that.para.path.$table) === "{}") {
                                // 为内存数据：
                                for (let i = 0; i < that.para.path.$value.length; i++) {
                                    that.breadcrumbValue.push(that.para.path.$value[i]);
                                }
                            } else {
                                console.error('$table格式错误！');
                                return
                            }
                            para.nStep = 'init';
                            dbFlag += 1;
                            break;
                        case 'init':
                            this.$nextTick(function () {

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
   #breadcrumb-wrap {
        .el-breadcrumb {
            font-family: $lm-breadcrumb-font-family;
            font-size: $lm-breadcrumb-font-size;
            line-height: 1
        }

        .el-breadcrumb::after, .el-breadcrumb::before {
            display: table;
            content: ""
        }

        .el-breadcrumb::after {
            clear: both
        }

        .el-breadcrumb__separator {
            margin: $lm-breadcrumb-separator-margin;
            font-weight: $lm-breadcrumb-separator-font-weight;
            color: $lm-breadcrumb-separator-color
        }

        .el-breadcrumb__item {
            float: left
        }

        .el-breadcrumb__item .breadcrumb__icon {
            padding-right: $lm-breadcrumb-icon-padding-right;
            font-size: $lm-breadcrumb-icon-font-size;
            color: $lm-breadcrumb-regular-color;
            -webkit-transition: $lm-breadcrumb-icon-transition;
            transition: $lm-breadcrumb-icon-transition;
        }

        .el-breadcrumb__inner {
            color: $lm-breadcrumb-regular-color
        }

        .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
            font-weight: $lm-breadcrumb-inner-font-weight;
            text-decoration: none;
            -webkit-transition: $lm-breadcrumb-icon-transition;
            transition: $lm-breadcrumb-icon-transition;
            color: $lm-breadcrumb-regular-color
        }

        .el-breadcrumb__item:hover .el-breadcrumb__inner a, .el-breadcrumb__item:hover .breadcrumb__icon {
            color: $lm-breadcrumb-text-primary-color;
            cursor: pointer
        }

        .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .breadcrumb__icon, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
            color: $lm-breadcrumb-primary-color;
            cursor: text
        }

        .el-breadcrumb__item:last-child .el-breadcrumb__separator {
            display: none
        }
    }
</style>