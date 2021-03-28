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
    html,body {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    #app {
        font-family: Source Han Sans CN, 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #f4f4f4;
    }
</style>
