<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
}
</script>
<style lang="scss">
@import "./styles/basic";
#app {
  color: #fff;
  background: #e5e5e5;
}
</style>
