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
</div>
</template>
<script>
import BookList from './component/BookList.vue'
import Swiper from './assets/plugins/swiper/swiper.min.js'

export default {
  data() {
    return {
      announcement: '今日上架的图书全部打折',
      slides: [{
          id: 1,
          img_url: '../src/assets/images/img1.png'
        },
        {
          id: 2,
          img_url: '../src/assets/images/img2.png'
        }
      ],
      latestUpdated: [{
          "id": 1,
          "title": "揭开数据真相：从小白到数据分析达人",
          "authors": ["张某某", "刘某某"],
          "img_url": "../src/assets/images/book1.png"
        },
        {
          "id": 2,
          "title": "Android 高级进阶",
          "authors": ["小小"],
          "img_url": "../src/assets/images/book2.png"
        },
        {
          "id": 1,
          "title": "揭开数据真相：从小白到数据分析达人",
          "authors": ["张某某", "刘某某"],
          "img_url": "../src/assets/images/book1.png"
        }
      ],
      recommended: [{
          "id": 1,
          "title": "揭开数据真相：从小白到数据分析达人",
          "authors": ["某某某", "某某某"],
          "img_url": "../src/assets/images/book1.png"
        },
        {
          "id": 2,
          "title": "Android 高级进阶",
          "authors": ["大大"],
          "img_url": "../src/assets/images/book2.png"
        }
      ]
    }
  },
  methods: {
    preview (book) {
      alert("显示图书详情");
    }
  },
  components: {
    BookList
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
