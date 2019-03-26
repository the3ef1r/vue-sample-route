<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"><router-link to="/Page1">Link to Page 1</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/Page2">Link to Page 2</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/Page3">Link to Page 3</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/Page4">Link to Page 4</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/Page5">Link to Page 5</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="/Page6">Link to Page 6</router-link></el-menu-item>
      <el-menu-item index="7"><router-link to="/Page7">Link to Page 7</router-link></el-menu-item>
      <el-menu-item index="8"><router-link to="/404">Link to Page 404</router-link></el-menu-item>
    </el-menu>

    <router-view></router-view>
  </div>
</template>
<script>
import router from "./routing";

export default {
  name: "app",
  router,
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
<style lang="scss">
@import "./styles/basic";
#app {
  color: #333;
}
</style>
