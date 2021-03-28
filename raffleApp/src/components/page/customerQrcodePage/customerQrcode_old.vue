<template>
    <div v-show="pvt_win.isShow.raffle_apply_pageWindow"
         :class="{raffle_apply_page_container:true,raffle_apply_page_col:true,raffle_apply_page_col_raffle_apply_pageWindow:true,raffle_apply_page_col_raffle_apply_pageWindow_size_large:attr.size==='large',raffle_apply_page_col_raffle_apply_pageWindow_size_medium:attr.size==='medium',raffle_apply_page_col_raffle_apply_pageWindow_size_small:attr.size==='small',raffle_apply_page_col_raffle_apply_pageWindow_size_min:attr.size==='min',raffle_apply_page_col_raffle_apply_pageWindow_checked:pvt_win.isChecked.raffle_apply_pageWindow,raffle_apply_page_col_raffle_apply_pageWindow_disable:attr.disabled}"
         :style="pvt_win.style.raffle_apply_pageWindow">
        <div class="raffle_apply_page_row raffle_apply_page_row_row18">
            <div v-show="pvt_win.isShow.toTopBtn"
                 :class="{raffle_apply_page_col:true,raffle_apply_page_col_toTopBtn:true,raffle_apply_page_col_toTopBtn_size_large:attr.size==='large',raffle_apply_page_col_toTopBtn_size_medium:attr.size==='medium',raffle_apply_page_col_toTopBtn_size_small:attr.size==='small',raffle_apply_page_col_toTopBtn_size_min:attr.size==='min',raffle_apply_page_col_toTopBtn_checked:pvt_win.isChecked.toTopBtn,raffle_apply_page_col_toTopBtn_disable:attr.disabled}"
                 :style="pvt_win.style.toTopBtn">

                <lm2b-qrcode
                        ref="toTopRef"
                        refId="toTopRef"
                        v-show="pvt_isShow.toTopBtn === 'toTopRef'"
                        :paraVarPair="pvt_toTopBtn.toTopRef.paraVarPair"
                        :para="pvt_toTopBtn.toTopRef.para"
                        :attr="pvt_toTopBtn.toTopRef.attr">
                </lm2b-qrcode>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import geneEvent from "../../../../public/jsFile/15";
    import dbCloudGeneID from "../../../../public/jsFile/db_cloud_module";
    import geneObj from "../../../../public/jsFile/db_15";

    export default {
        components: {},
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
                pvt_subModuleMap: {
                    vessel: ['toTopBtn'],
                    subModule: ['toTopRef'],
                },
                pvt_isShow: {
                    toTopBtn: null,
                },
                pvt_win: {
                    isShow: {
                        raffle_apply_pageWindow: true,
                        toTopBtn: true,
                    },
                    isChecked: {
                        raffle_apply_pageWindow: false,
                        toTopBtn: false,
                    },
                    style: {
                        raffle_apply_pageWindow: null,
                        toTopBtn: null,
                    },
                },
                pvt_eventPortInput: ['registerIn'],
                userNumber: null
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
        computed: {
            pvt_toTopBtn: function () {
                return {
                    toTopRef: {
                        paraVarPair: {},
                        para: {
                            qrUrl: 'http://raffle.zeropaas.com/index.html??group=1&geneAddr=6&parent={"geneAddr":49,"server":null,"geneSet":5}&user=3&number=1#/receiveCustomer_terminal',
                        },
                        attr: {
                            size:'medium',
                            margin: 10,
                        },
                    },
                };
            },
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
            },
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