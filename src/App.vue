<template>
<div id="app">
  <div class="tabs">
    <ul>
      <li>
        <!-- 使用router-link 指向定义的path -->
        <router-link to='/home'>
          <div class="">
            首页
          </div>
        </router-link>
      </li>
      <li>
        <router-link to='/categories'>
          <div class="">
            分类
          </div>
        </router-link>
      </li>
      <li>
        <router-link to='/shopping-cart'>
          <div class="">
            购物车
          </div>
        </router-link>
      </li>
      <li>
        <router-link to='/me'>
          <div class="">
            我
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
// import './assets/less/todos.less';
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
@import "./assets/less/base.less";
@color-darkgray: #333;
@color-gray: #666;
@color-lighgray: #999;

h1 {
    font-size: 50px;
    text-align: center;
    color: @color-lighgray;
}

</style>

 <!-- lang="scss" -->
