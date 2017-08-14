<template>
<div>
  <div class="section">
    <!-- 热门推荐 -->
    <div class="swiper-container" ref="slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides">
          <router-link tag="div" :to="{ name: 'BookDetail', params:{ id: slide.id } }">
            <!-- 图片路径不对，未正确加载图片 -->
            <img :src="slide.img_url">
          </router-link>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination" ref="pagination"></div>
    </div>
    <!-- 快讯 -->
    <div class="announcement">
      <label>快讯</label>
      <span>{{ announcement }}</span>
    </div>
  </div>
  <div class="section">
    <!-- 新书上架 -->
    <book-list :books="latestUpdated" heading="最新更新" @onBookSelect="preview($event)"></book-list>
  </div>
  <div class="section">
    <!-- 编辑推荐 -->
    <book-list :books="recommended" heading="编辑推荐"></book-list>
  </div>
  <!-- <modal-dialog ref="dialog"
                @dialogClose="selected=undefined">
    <div slot="header">
      <div class="dismiss"
            @click.prevent="$refs.dialog.close()"></div>
    </div>
    <div>
      <img :src="selected.img_url">
    </div>
    <div>
      {{ selected.title }}
    </div>
  </modal-dialog> -->
</div>
</template>
<script>
import BookList from './component/BookList.vue'
import Swiper from './assets/plugins/swiper/swiper.min.js'
import ModalDialog from './component/dialog.vue'

export default {
  data() {
    return {
      announcement: '',
      slides: [],
      latestUpdated: [],
      recommended: [],
      selected:undefined
    }
  },
  created() {
    // jquery方法请求数据成功
    // var self = this
    // $.get('/src/api/home.json').then(res => {
    //   self.announcement = res.announcement
    //   self.slides = res.slides
    //   self.latestUpdated = res.latestUpdated
    //   self.recommended = res.recommended
    // })

    // 传统vue-resource请求数据成功
    this.$http.get('/src/api/home.json').then(res => {
      this.announcement = res.body.announcement
      this.slides = res.body.slides
      this.latestUpdated = res.body.latestUpdated
      this.recommended = res.body.recommended
    })

    // 简写失败，待解决
    // this.$http.get('/src/api/home.json').then( (res)=> {
    //   for prop in res.body {
    //     this[prop] = res.body[prop]
    //   }
    // }, (error)=> {
    //   console.log('获取数据失败：${error}')
    // })
  },
  methods: {
    preview(book) {
      this.selected = book
      this.$refs.dislog.open()
    }
  },
  components: {
    BookList,
    ModalDialog
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      pagination: this.$refs.pagination,
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    })
  }
}
</script>
<!-- 此处样式是否增加scoped ？？？？ -->
<style lang="less" >
@import './assets/plugins/swiper/swiper.min.css';
@import './assets/less/home.less';
</style>
