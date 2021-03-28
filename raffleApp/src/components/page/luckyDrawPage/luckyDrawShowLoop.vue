<template>
    <div class="list">
        <div class="list-img">
            <lm1a-image
                    ref="userOneImage"
                    refId="userOneImage"
                    :para="para ? para.para : false"
                    :attr="para ? para.attr : false">
            </lm1a-image>
        </div>
        <span>{{para ? para.name : JSON.stringify(para)}}</span>
    </div>
</template>

<script>
    export default {
        name: "luckyDrawShowLoop",
        props: ["para"],
        data: function () {
            return {}
        },
        methods: {
            startModule: function () {
                let $this = this;
                $this.$refs.userOneImage.startModule(function () {

                }, function () {

                })
            }
        }
    }
</script>

<style scoped>
    .list {
        /*background-color: #ffffff;*/
        padding: 1% 10% 0;
    }

    .list-img {
        width: 60px;
        height: 60px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 50px;
        border-radius: 10px;
        overflow: hidden;
    }

    .list span {
        font-size: 24px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        vertical-align: middle;
        display: inline-block;
        width: calc(100% - 120px);
        text-overflow: ellipsis;
        line-height: 60px;
    }
</style>
