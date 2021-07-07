<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
#tab-bar {
  /* flex布局，在同一行 */
  display: flex;
  background-color: #f6f6f6;
  position: fixed; /*一直在最底部 */
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1); /*一个阴影 */
}

</style>