//在创建的 routers 对象中， path 配置了路由的路径，component 配置了映射的组件
import Home from './view/home.vue'
import Page from './view/page.vue'

const routers = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/page',
        component: Page
    }
]

export default routers
