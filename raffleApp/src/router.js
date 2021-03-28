import Vue from "vue";
import Router from "vue-router";

import applyTerminal from "@/components/terminal/applyTerminal.vue";  // 报名终端
import raffleTerminal from "@/components/terminal/raffleTerminal.vue";  // 抽奖终端
import luckyDrawTerminal from "@/components/terminal/luckyDrawTerminal.vue";  // 大屏终端
import signUpTerminal from "@/components/terminal/signUpTerminal.vue";  // 接待终端
import qrcodeTerminal from "@/components/terminal/customerQrcodeTerminal.vue";  // 签到终端
import bgManageTerminal from "@/components/terminal/bgManageTerminal.vue";  // 后台终端

import applyPage from "@/components/page/applyPage/applyPage.vue";  // 报名页面
import rafflePage from "@/components/page/rafflePage/rafflePage.vue";  // 抽奖页面
import signInPage from "@/components/page/signUpPage/signInPage.vue";  // 接待页面
import luckyDrawPage from "@/components/page/luckyDrawPage/luckyDraw.vue";  // 大屏页面
import customerQrcodePage from "@/components/page/customerQrcodePage/customerQrcode.vue";  // 签到页面
import bgManagePage from "@/components/page/backgroundManagementPage/backgroundManagementPage.vue";  // 后台页面

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/backgroundManagement_terminal",
            component: bgManageTerminal,
            children: [
                {
                    path: "/backgroundManagement_page",
                    component: bgManagePage
                },
            ]
        },
        {
            path: "/customerSignIn_terminal",
            component: qrcodeTerminal,
            children: [
                {
                    path: "/customerSignIn_page",
                    component: customerQrcodePage
                },
            ]
        },
        {
            path: "/receiveCustomer_terminal",
            component: signUpTerminal,
            children: [
                {
                    path: "/receiveCustomer_page",
                    component: signInPage
                },
            ]
        },
        {
            path: "/screenDisplay_terminal",
            component: luckyDrawTerminal,
            children: [
                {
                    path: "/screenDisplay_page",
                    component: luckyDrawPage
                },
            ]
        },
        {
            path: "/customerRegistration_terminal",
            component: applyTerminal,
            children: [
                {
                    path: "/customerRegistration_page",
                    component: applyPage
                },
            ]
        },
        {
            path: "/customerRaffle_terminal",
            component: raffleTerminal,
            children: [
                {
                    path: "/customerRaffle_page",
                    component: rafflePage
                },
            ]
        },
    ]
});
