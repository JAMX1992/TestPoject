// 引入依赖框架
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入vue-router还需使用
Vue.use(VueRouter);

// 引用入口文件为 src/App.vue 文件
import App from './App.vue'

// 引用路由配置文件
import routes from './config/routes'
import api from './config/api'

// 自定义Vue.$api
Vue.prototype.$api = api

// 使用路由配置文件规则
const router = new VueRouter({
	routes
})

// 启动Vue
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
