<template>
    <div id="app">
        <component :is="terminalVue"></component>
    </div>
</template>

<script>

    // import t1 from '@/components/t1.vue';
    // import t2 from '@/components/t2.vue';
    // import t3 from '@/components/t3.vue';
    // import t4 from '@/components/t4.vue';
    // import t5 from '@/components/t5.vue';
    // import t6 from '@/components/t6.vue';
    // import t7 from '@/components/t7.vue';
    // import t8 from '@/components/t8.vue';

    export default {
        name: 'app',
        data: function () {
            return {}
        },
        // components: {t1, t2, t3, t4, t5, t6, t7, t8},
        // components: {t1, t2, t3, t4},
        // components: {t1, t3},
        // components: {t1},
        methods: {
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            init: function (successCallBack, errorCallBack) {
            },
        },
        created: function () {
            // this.terminalVue = mac.curTerminalInfo.terminalVue;
            this.terminalVue = function () {
                return {
                    // component: import(mac.curTerminalInfo.componentPath + mac.curTerminalInfo.terminalVue + '.vue')
                    // component: import('@/components/t9.vue')
                    component: import('@/components/' + mac.curTerminalInfo.terminalVue + '.vue')
                }
            }

        },
        mounted: function () {
            // $mWindow.setThisVue(this)
            // $cloudCtrl.routerPara.app = this;
            let $this = this;
            $this.init(function () {
                console.log('successCallBack')
            }, function () {
                console.log('errorCallBack')
            });
        }
    }

</script>

<style lang="scss">
    #app {
        font-family: Source Han Sans CN, 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        @media screen and (max-width: 1200px) {
            #public-blog-wrap {
                .content {
                    padding-left: 20px;
                    padding-right: 20px;
                    .content-right{
                        right: 20px;
                    }
                }
            }
            .screen-change {
                .content {
                    padding-left: 20px;
                    padding-right: 20px;
                    .content-right{
                        right: 20px;
                    }
                }
            }
        }
    }



    /*.box {*/
        /*width: 100%;*/
    /*}*/

    /*.buttonClass {*/
        /*!*display: flex;*!*/
        /*display: block;*/
        /*justify-content: center;*/
        /*margin-top: 0px;*/
        /*margin-left: 40px;*/
    /*}*/
</style>
