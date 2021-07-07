<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive(){
      // 下面的也相应变色，判断活跃的路由是否包含我的path
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String,
    aaa:'',
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
      console.log(this.aaa);
      console.log("itemClick");
    }
  }
};
</script>

<style>
/* 进行均等分 */
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px; /* 一般高都是49 */
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>