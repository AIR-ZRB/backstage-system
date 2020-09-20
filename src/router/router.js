import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import login from "@/views/login.vue";
const router = new VueRouter({
    mode: "hash",
    routes: [
        { path: "/", redirect: "/login" },
        { path: "/login", component: login },
        {
            name: "backstage",
            path: "/backstage",
            redirect: "/backstage/index",
            component: () => import("@/views/backstage/backstage.vue"),
            children: [
                {
                    path: "index",
                    component: () => import("@/views/index.vue"),
                },
                {
                    path: "user",
                    component: () => import("@/views/user.vue"),
                },
                {
                    path: "rests",
                    component: () => import("@/views/rests/rests.vue"),
                    redirect: "/backstage/rests/picture",
                    children: [
                        {
                            path: "picture",
                            component: () => import("@/views/rests/picture.vue"),
                        },
                    ],
                },
                {
                    path: "setting",
                    component: () => import("@/views/setting.vue"),
                },
                {
                    path: "shopping/*",
                    component: () => import("@/views/shopping/shopping.vue"),
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

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

export default router;
