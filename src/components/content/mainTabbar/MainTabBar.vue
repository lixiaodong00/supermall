<template>
  <Tab-bar>
    <!-- <Tab-bar-item path="/home" :aaa="123" activeColor="blue"> -->
    <Tab-bar-item path="/home" >
    <!-- 因为在build文件夹下的webpack.base.conf.js里面设置了别名，所以这里可以直接写assets
            如果是import的形式的话，需要在前面加~
     -->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" />
      <div slot="item-text">首页</div>
    </Tab-bar-item>
    <Tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/category_active.svg"
      />
      <div slot="item-text">分类</div>
    </Tab-bar-item>
    <Tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shopcart_active.svg"
      />
      <div slot="item-text">购物车</div>
    </Tab-bar-item>
    <Tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/profile_active.svg"
      />
      <div slot="item-text">我的</div>
    </Tab-bar-item>
  </Tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
};
</script>

<style>
</style>