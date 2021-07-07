import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>  import('../views/home/Home.vue')
const Category = () =>  import('../views/category/Category.vue')
const Cat = () =>  import('../views/cart/Cat.vue')
const Profile = () =>  import('../views/profile/Profile.vue')

// 安装插件
Vue.use(VueRouter)



// 创建router
const routes = [
    {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/cart',
        component: Cat
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/profile',
        component: Profile
      },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 导出
export default router