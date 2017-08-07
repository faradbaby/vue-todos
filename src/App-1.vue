<template>
<div id="app">
  <h1>{{title}}</h1>
  <ul class="todos">
    <li v-for="(todo,index) in todos" :class="{'checked': todo.done}">
      <label>{{ index + 1 }}.{{ todo.value }}</label>
      <time>{{ todo.created | date }}</time>
    </li>
  </ul>
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
      title: "vue-todos",
      todos: [{
          value: "阅读一本关于前端开发的书",
          done: false,
          created: Date.now()
        },
        {
          value: "补充范例代码",
          done: true,
          created: Date.now() + 300000
        },
        {
          value: "写心得",
          done: false,
          created: Date.now() - 30000000
        }
      ]
    }
  },
  filters: {
    date(val) {
      return moment(val).calendar()
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
.todos {
    width: 500px;
    margin: 50px auto;
    border: 1px solid #eee;
    padding: 50px;
    box-shadow: 0 2px 4px 0 rgba(4,7,44,0.50);
    li {
        line-height: 50px;
        color: @color-gray;
        &.checked {
            color: @color-lighgray;
            text-decoration: line-through;
        }
    }
}
</style>

 <!-- lang="scss" -->
