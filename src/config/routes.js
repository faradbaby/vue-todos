import Vue from 'vue'
import VueRouter from 'vue-router'

//引入创建的四个主页面
import Home from '../Home.vue'
import Explorer from '../Explorer.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'

//使用路由实例插件
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  //两个下划线！！！
  base: __dirname,
  routes: [
    { path: '/home', component: Home },
    { path: '/explorer', component: Explorer },
    { path: '/cart', component: Cart },
    { path: '/me', component: Me }
  ]
})
