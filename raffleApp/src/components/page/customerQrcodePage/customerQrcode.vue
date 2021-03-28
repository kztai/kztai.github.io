<template>
    <div v-show="pvt_win.isShow.raffle_apply_pageWindow">
        <div id="qrCode" ref="qrCodeDiv"></div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import geneEvent from "../../../../public/jsFile/15";
    import dbCloudGeneID from "../../../../public/jsFile/db_cloud_module";
    import geneObj from "../../../../public/jsFile/db_15";


    export default {
        components: {
            // QRCode,
        },
        inject: ["mac", "pageCtrl"],
        provide: function () {
            return {
                sys: this.$apiDB
            };
        },
        props: {
            refId: String,
            para: Object,
            inPara: Object,
            attr: {
                type: Object,
                default: function () {
                    return {size: 'medium'};
                },
                validator: function (val) {
                    if (!val.size) val.size = 'medium';
                    return true;
                },
            },
            number: Number,
        },
        data: function () {
            return {
                // mac: mac.mac,
                mac: mac.mac,
                customerUrl: null,

                pvt_win: {
                    isShow: {
                        raffle_apply_pageWindow: true,
                    },

                },
            };
        },
        watch: {
            inPara: {
                handler: function () {
                    let $this = this;
                    $this.$gene = 15;
                    for (let i in geneObj) {
                        $this[i] = geneObj[i];
                    }
                    $this.$r_db = geneObj.geneDB;
                    $this.$c_db_module = dbCloudGeneID;
                    $this.$gene_data = geneObj.geneData;
                    for (let i in geneEvent) {
                        $this[i] = geneEvent[i];
                    }
                    if (!$this.pageCtrl.pageCtrlHandle) {
                        $this.pageCtrl.pageCtrlHandle = new $CPageCtrl($this);
                    }
                    $this.pageCtrl.pageCtrlHandle.vueObj = $this;
                    $this.pageCtrl.pageCtrlHandle.pageStart(function () {
                        console.log("页面P1启动成功~");
                    }, function (error) {
                        console.error(error);
                    });
                },
                deep: true,
                immediate: true
            }
        },
        computed: {},
        mounted() {
            new QRCode(this.$refs.qrCodeDiv, {
                text: this.customerUrl,
                width: 300,
                height: 300,
                colorDark: "#333333", //二维码颜色
                colorLight: "#ffffff", //二维码背景色
                correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
            })
        },
        methods: {
            eventInput_issueIn: function () {
                this.$apiDB.eventInput("issueIn", [], function () {
                    console.log("issueIn输入成功");
                }, function (error) {
                    console.error(error);
                });
            },

            recordNew: function () {
                this.recordNew_(function () {
                    console.log("recordNew成功");
                }, function (error) {
                    console.error(error);
                });
            },

            dataOutput: function () {
                this.dataOutput_(function () {
                    console.log("dataOutput成功");
                }, function (error) {
                    console.error(error);
                });
            },
        },
    };
</script>
<style lang="less" scoped>

    .raffle_apply_page_container {
        width: 100%;
        height: 100%;
    }

    .raffle_apply_page_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .raffle_apply_page_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .raffle_apply_page_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .raffle_apply_page_row {
        display: flex;
    }

    .raffle_apply_page_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .raffle_apply_page_col_raffle_apply_pageWindow_size_medium {
        width: 100%;
    }

    .raffle_apply_page_col_toTopBtn_size_medium {
        width: 100%;
    }

</style>
