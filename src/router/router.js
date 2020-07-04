import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import login from "../views/login.vue";
import home from "../views/home.vue";
import user from "../views/user.vue";
import picture from "../views/picture.vue";
import index from "../views/index.vue";
import setting from "../views/setting.vue";
import rests from "../views/rests.vue";

const router = new VueRouter({
    routes: [
        { path: "/", redirect: "/login" },
        { path: "/login", component: login },
        {
            path: "/home",
            component: home,
            children: [
                {
                    path: "user",
                    component: user,
                },
                {
                    path: "picture",
                    component: picture,
                },
                {
                    path: "rests",
                    component: rests,
                },
                {
                    path: "setting",
                    component: setting,
                },
                {
                    path: "index",
                    component: index,
                },

            ],
        },
    ],
});

router.beforeEach((to, from, next) => {
    // to 将要访问的路劲
    // from 代表从哪个路径来
    // next是一个函数,表示放行
    if (to.path === "/login") return next();
    const token = window.sessionStorage.getItem("token");
    token ? next() : router.push("/login");
});

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



export default router;
