<template>
    <div class="lm-image-wrap">
        <el-image @click="pictureClick" v-for="(img, index) in urls" :key="index" :fit="fit" :lazy="lazy && index > 1" :src="img">
            <div slot="error" class="image-slot" v-if='error'>
                <div v-html="error"></div>
            </div>
            <div v-if="!lazy" slot="placeholder" class="image-slot">{{placeholder}}<span class="dot">...</span></div>
        </el-image>
    </div>
</template>
<script>
    export default {
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                urls: [],
                fit: 'fill',     // 确定图片如何适应容器框，同原生 object-fit。可选值： fill / contain / cover / none / scale-down
                lazy: false,
                placeholder: '加载中',
                error: '',    // 自定义图片加载失败时显示内容（默认为空，即显示‘加载失败’）
                size: 'medium'   // 图片尺寸；large / medium / small / min（默认 medium）
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
                    filePathArr: [],
                    i: 0
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
                            that.urls = [];

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
                            if (that.attr.fit !== undefined && typeof that.attr.fit !== 'string') {
                                console.error('fit格式错误！');
                                return
                            }
                            if (that.attr.placeholder !== undefined && typeof that.attr.placeholder !== 'string') {
                                console.error('placeholder格式错误！');
                                return
                            }
                            if (that.attr.lazy !== undefined && typeof that.attr.lazy !== 'boolean') {
                                console.error('lazy格式错误！');
                                return
                            }
                            if (that.attr.error !== undefined && typeof that.attr.error !== 'string') {
                                console.error('error格式错误！');
                                return
                            }
                            if (that.attr.size !== undefined && typeof that.attr.size !== 'string') {
                                console.error('size格式错误！');
                                return
                            }

                            // 当attr传值合法，把attr属性赋值给变量：
                            if (that.attr.size !== undefined) {
                                that.size = that.attr.size;
                            }
                            if (that.attr.error !== undefined) {
                                that.error = that.attr.error;
                            }
                            if (that.attr.lazy !== undefined) {
                                that.lazy = that.attr.lazy;
                            }
                            if (that.attr.placeholder !== undefined) {
                                that.placeholder = that.attr.placeholder;
                            }
                            if (that.attr.fit !== undefined) {
                                that.fit = that.attr.fit;
                            }

                            para.nStep = 'getFilePath';
                            dbFlag += 1;
                            break;
                        case 'getFilePath':
                            let tableKey;
                            dbData = {};
                            dbData.id = that.para.image.$value;
                            for (let key in that.para.image.$table) {
                                tableKey = key;
                                dbData[that.para.image.$table[tableKey][0]] = [];
                            }

                            that.sys.api.recordRead(tableKey, dbData, function () {
                                for(let j = 0; j < dbData[that.para.image.$table[tableKey][0]][0].length; j++) {
                                    para.filePathArr.push(dbData[that.para.image.$table[tableKey][0]][0][j].fileName);
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

                            if(filePath === '') {
                                para.i++;
                                para.nStep = 'readFile';
                                dbFlag += 1;
                                break;
                            }

                            let tableName;
                            let field_icon;
                            let record = that.para.image.$value[0];
                            for (let key in that.para.image.$table) {
                                tableName = key;
                                field_icon = that.para.image.$table[tableName][0];
                            }

                            that.sys.api.readFileBase64(tableName, field_icon, record, filePath, function (result) {
                                that.urls.push(result);
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
                                if(!that.lazy) {
                                    $('.lm-image-wrap').addClass('image-size').css({'width':'100%', 'height': '100%'});
                                    switch (that.size) {
                                        case 'large':
                                            $('.el-image').addClass('image-size-large');
                                            break;
                                        case 'medium':
                                            $('.el-image').addClass('image-size-medium');
                                            break;
                                        case 'small':
                                            $('.el-image').addClass('image-size-small');
                                            break;
                                        case 'min':
                                            $('.el-image').addClass('image-size-min');
                                            break;
                                    }
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            });
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
            pictureClick: function () {
                this.callModuleEventPort('clickEvent', [this.para.image.$value[0]]);
            },
            dataRefresh: function () {
                this.startModule(function () {
                }, function (error) {
                    console.error(error);
                })
            }
        }
    }

</script>
<style lang="scss">
    .image-size {
        .el-image {
            position: relative;
            display: inline-block;
            overflow: hidden;
            .image-slot {
                position: absolute;
                left: $lm-image-slot-left;
                top: $lm-image-slot-top;
                transform: translate(-50%, -50%);
            }
        }
    }
    .image-size-large {
        width: $lm-image-large-width;
        height: $lm-image-large-height;
    }
    .image-size-medium {
        width: $lm-image-medium-width;
        height: $lm-image-medium-height;
    }
    .image-size-small {
        width: $lm-image-small-width;
        height: $lm-image-small-height;
    }
    .image-size-min {
        width: $lm-image-min-width;
        height: $lm-image-min-height;
    }

    .lm-image-wrap {
        .el-image__error, .el-image__placeholder {
            background: $lm-image-placeholder-background
        }

        .el-image__error, .el-image__inner, .el-image__placeholder {
            width: 100%;
            height: 100%
        }

        .el-image {
            position: relative;
            display: inline-block;
            overflow: hidden
        }

        .el-image__inner {
            vertical-align: top
        }

        .el-image__inner--center {
            position: relative;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            display: block
        }

        .el-image__error {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: $lm-image-error-font-size;
            color: $lm-image-error-color;
            vertical-align: middle;
        }
    }
</style>


