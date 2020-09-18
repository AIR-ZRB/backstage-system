import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


// 路由
import router from "./router/router";

// 全局样式
// import "@/assets/css/theme-green.css";

// 数据请求
import Axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,Axios);

Axios.defaults.baseURL='http://localhost:3000/';
Axios.interceptors.request.use(config => {

  // config.headers.Authorization = window.sessionStorage.getItem("token");
  // console.log(config)
  return config;

})

new Vue({
  data: {
    theme: ""
  },
  router,
  render: h => h(App),
}).$mount('#app')
