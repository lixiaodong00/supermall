<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
   </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
/* 这里的别名前面可以不加~,只有属性才加~   */
  @import 'assets/css/base.css';
</style>
