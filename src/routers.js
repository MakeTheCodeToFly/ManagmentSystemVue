//在创建的 routers 对象中， path 配置了路由的路径，component 配置了映射的组件
import Home from './view/home.vue'
import Page404 from './components/error/page404.vue'

const routers = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',              //设置根路由
        component: Home
    },
    {
        path: '*',              //设置404页面
        component: Page404
        //也可以用 redirect:'/home'
    }
]

export default routers
