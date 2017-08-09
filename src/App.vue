<template>
<div id="app">
  <div class="content">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
  <div class="tabs">
    <ul>
      <!-- 使用router-link 指向定义的path -->
      <router-link :to="{ name : 'Home' }" tag="li">
        <div class="">
          首页
        </div>
      </router-link>
      <router-link :to="{ name : 'Categories' }" tag="li">
        <div class="">
          分类
        </div>
      </router-link>
      <router-link :to="{ name : 'Shoppingcart' }" tag="li">
        <div class="">
          购物车
        </div>
      </router-link>
      <router-link :to="{ name : 'Me' }" tag="li">
        <div class="">
          我
        </div>
      </router-link>
    </ul>
  </div>
</div>
</template>

<script>
import './assets/less/base.less';
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

export default {
  name: 'app',
  data() {
    return {
      title: "vue-todos"
    }
  }
}
</script>

<style lang="less" scoped>
@import "./assets/less/todos.less";
#app{
  width:100%;
}
</style>

 <!-- lang="scss" -->
