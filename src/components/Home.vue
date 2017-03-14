<template>
  <div class="home">
    <nav class="nav">
      淘<input type="text" class="selecter" placeholder="选择宝贝">
    </nav>
    <div class="banner">
      <swiper class="banner-swiper" :options="swiperOption">
        <swiper-slide class='slide' v-for='item in getBannerList'>
          <a :href="item.url">
            <img class="item" :src="item.imageUrl" alt="">
            <!--<img src="./loading.jpg" alt="">-->
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="navs">
      <ul>
        <li><img src="../assets/img/logo.png"></li>
        <li><img src="../assets/img/logo.png"></li>
        <li><img src="../assets/img/logo.png"></li>
        <li><img src="../assets/img/logo.png"></li>
        <li><img src="../assets/img/logo.png"></li>
        <li><img src="../assets/img/logo.png"></li>
        <li><img src="../assets/img/logo.png"></li>
        <li><img src="../assets/img/logo.png"></li>
        <li><img src="../assets/img/logo.png"></li>
        <li><img src="../assets/img/logo.png"></li>
      </ul>
    </div>
    <ul class="items" v-for="(item,index) in getAppleList">
      <li>
        <router-link :to="{name:item.url,params:{id:item.id}}">
          <img class="item_img" :src="item.imageUrl" alt="">
          <span class="item_text">{{item.name}}</span>
        </router-link>
      </li>
    </ul>



    <!--<v-loading></v-loading>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import vLoading from '../commons/Loading'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  require('../assets/scss/Home.scss')
  export default {
    name: 'home',
    data() {
      return {
        swiperOption: {
          autoplay: 1000,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true
        },
        swiperSlides: [1, 2, 3, 4, 5],
        getBannerList: "",
        getAppleList:""
      }
    },
    components: {
      vLoading,
      swiper,
      swiperSlide
    },
    created: function () {
      let _this = this;
      axios.get('../../static/data/Banner.json').then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          _this.getBannerList = res.data.data.billboards;
        }
      }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
      })
      axios.get('../../static/data/Apple.json').then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          _this.getAppleList=res.data.about;
        }
      }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
      })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">


</style>
