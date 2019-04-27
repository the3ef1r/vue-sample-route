<template>
  <el-main class="main" >
    <transition name="el-fade-in-linear">
      <router-view />
    </transition>
    
  </el-main>
</template>
<script>
import imgurl from "./cogs.svg"
import imgurl2 from "./cogs2.svg"
export default {
  name: "AppMain",
  
  data:function() {
    return {
      imgurl
    }
  }
};
</script>
<style lang="scss">
.main {
  background-image: url('./cogs.svg') , url('./cogs2.svg');
  background-position: left bottom , right bottom ;
  background-repeat: no-repeat;
  min-height: calc(100vh - 106px);
  @media (min-width: 565.1px ) and (max-width: 991px){
    margin-top: 88px;
    min-height: calc(100vh - 88px);
  }
  
  
}
</style>


