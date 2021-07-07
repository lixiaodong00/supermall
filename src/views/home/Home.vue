<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'

import {getHomeMultidata} from 'network/home'

export default {
    name: "Home",
    components: {
        NavBar,
        HomeSwiper,
        HomeRecommendView
    },
    data() {
        return {
            banners: [],
            recommends: [],
        }
    },
    created() {
        // 请求多个数据
        getHomeMultidata().then(res => {
            console.log(res)
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        })
    }
}
</script>

<style>
    .home-nav {
        color: white;
        background-color: var(--color-tint);
    }

</style>