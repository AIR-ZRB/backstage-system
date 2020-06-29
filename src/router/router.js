import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import login from "../views/login.vue";
import index from "../views/index.vue"


const router = new VueRouter({
    routes: [
        {path: "/", redirect: "/login"},
        {path: "/login",component: login},
		{path: "/index",component: index}
    ]
})

router.beforeEach((to,from,next)=>{
	// to 将要访问的路劲
	// from 代表从哪个路径来
	// next是一个函数,表示放行
	if(to.path === "/login") return next();
	const token = window.sessionStorage.getItem("token");
	token ? next() : router.push("/login");
	
})


export default router;