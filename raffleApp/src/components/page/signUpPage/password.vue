<template>
    <div class="password">
        <div class="password-input">
            <span>password:</span>
            <div>
                <input type="password" v-model="inputData" @focus="inputFocus">
                <div v-show="isError">* 密码输入错误</div>
            </div>
        </div>
        <div class="password-but" @click="submit">确定</div>
    </div>
</template>

<script>
    export default {
        name: "password",
        data: function () {
            return {
                inputData: "",
                isError: false
            }
        },
        methods: {
            inputFocus: function () {
                if (this.isError) {
                    this.isError = false;
                    this.inputData = "";
                }
            },
            submit: function () {
                if (this.inputData !== "" && this.inputData !== "123456") {
                    this.isError = true;
                } else {
                    this.$parent.closePassWord()
                }
            }
        }
    }
</script>

<style scoped>
    .password {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #FFFFFF;
        z-index: 9;
    }
    .password-input {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 16px;
        transform: translate(-50%, -50%);
    white-space: nowrap;
        line-height: 40px;
    }
    .password-input span {
        margin-right: 10px;
        color: #666666;
    }
      .password-input input {
          padding: 0 10px;
          border-radius: 2px;
          border: 1px solid #999999;
      }
      .password-input div {
          position: relative;
          display: inline-block;
        padding-bottom: 30px;
      }
      .password-input div div {
          color: red;
          padding: 0;
          font-size: 14px;
          position: absolute;
          bottom: 0;
          left: 0;
          line-height: 30px;
      }
.password-but {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #00a4fd;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
}
</style>