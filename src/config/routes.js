import Vue from 'vue'
import VueRouter from 'vue-router'

//引入创建的四个主页面
import Home from '../Home.vue'
import Category from '../Category.vue'
import Shoppingcart from '../Shoppingcart.vue'
import Me from '../Me.vue'

//使用路由实例插件
Vue.use(VueRouter)

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'Categories', path: '/categories', component: Category },
  { name: 'Shoppingcart', path: '/shopping-cart', component: Shoppingcart },
  { name: 'Me', path: '/me', component: Me }
]

// 配置
export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes,
  linkActiveClass: 'active',
  history: true
})
