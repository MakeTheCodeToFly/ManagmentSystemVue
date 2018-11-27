import Vue from 'vue'
import App from './App.vue'
//vue路由构造函数
import VueRouter from 'vue-router'
//路由配置文件
import routes from './routers'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

//把vue-router路由挂载到vue的构造函数上
Vue.use(VueRouter)

//配置mode，否则就会使用默认的hash模式，这样的话路由的路径就会#/开头，不友好,地址栏传参会出问题
//实例化一个路由对象router
const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior: () => ({y: 0 })
    //页面滚动行为，后退的时候滚动到上一个页面顶部
})

//全局守卫
// router.beforeEach((to, from, next) => {
//    next()
// })

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

//实例化vue对象
new Vue({
    el: '#app',
    router,
    render: h => h(App) //Vue 在创建 Vue 实例时，通过调用 render 方法来渲染实例的 DOM 树,Vue 在调用 render 方法时，会传入一个 createElement 函数作为参数，也就是这里的 h 的实参是 createElement 函数，然后 createElement 会以 APP 为参数进行调用
})

