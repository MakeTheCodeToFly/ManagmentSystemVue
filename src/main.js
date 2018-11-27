import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './routers'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.use(VueRouter)

//配置mode，否则就会使用默认的hash模式，这样的话路由的路径就会#/开头，不友好,地址栏传参会出问题
const router = new VueRouter({
    mode: 'history',
    routes: routers,
    scrollBehavior: () => ({y: 0 })
})

router.beforeEach((to, from, next) => {
   next()
})

//设置为 false 以阻止 vue 在启动时生成生产提示。       vhh
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

