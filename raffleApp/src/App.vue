<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        },
        provide: function () {
            return {
                mac: new $CGeneMac().mac,
                pageCtrl: {}
            }
        },
        methods: {

        },
        created: function () {
            $mWindow.setThisVue(this);
        },
    }
</script>

<style>
    #app {

    }
</style>
