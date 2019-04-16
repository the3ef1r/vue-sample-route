<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
    <nav-link v-for="(link,index) in links" :tabindex="index + 1"  >
      <div @click="clickCallback">
        <router-link class="link"  :to="link.toPage"><font-awesome-icon :icon="link.icon"></font-awesome-icon>{{link.namePage}}</router-link>

      </div>
    </nav-link>
  </el-menu>
</template>
<script>
import navLink from "../../../navLink/";
export default {
  components: {
    navLink
  },
  props: ["links", "clickCallback"],
  data:function() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  }
};
</script>
<style lang="scss">
.el-menu-item.is-active {
  border-bottom: 2px solid #acd1fc !important;
  background-color: #acd1fc;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: #acd1fc;
}
.el-menu.el-menu--horizontal {
  border-bottom-color: #acd1fc;
}
.el-menu--horizontal {
  .el-menu-item {
    height: 40px;
  }
}
.el-menu-item {
  padding: 0;
  margin: 0 20px;
  transition: all 0.3s ease 0s;
  line-height: 40px;
  
  &:not(.is-disabled) {
    &:hover {
      background-color: #acd1fc;
      svg {
        color: #fff;
      }
    }
  }
  svg {
    font-size: 18px;
    color: #B6D6FC;
    margin-right: 5px;
    transition: all .2s ease 0s;
  }
  &:first-child {
    @media screen and (max-width: 1199px) {
      padding-left: 30px;
      @media screen and (max-width: 1034px){
        padding-left: 0;
      }
    }
  }
  &:last-child {
    float: right;
  }
  a.link {
    color: #2256aa !important;
    text-decoration: none;
    display: flex;
    line-height: 40px;
    padding: 0 10px;
    font-weight: bold;
    align-items: center;
    &:hover {
      text-decoration: none;
      color: #2256aa;
    }
  }
}
.el-menu {
  height: 40px;
}
</style>

