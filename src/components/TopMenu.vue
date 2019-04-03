<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      
    >
      <el-menu-item index="1"><router-link class="link" to="/Home">Home page</router-link></el-menu-item>
      <el-menu-item index="2"><router-link class="link" to="/Minutes">COMOS Call Minutes</router-link></el-menu-item>
      <el-menu-item index="3"><router-link class="link" to="/BalanceReport">Contract Balance Report</router-link></el-menu-item>      
      <el-menu-item index="4"><router-link class="link" to="/Issuetracker">Issue Tracker </router-link></el-menu-item>
      <el-menu-item index="5"><router-link class="link" to="/Matrix">Escalation Matrix/Out of hours contact list</router-link></el-menu-item>
      <el-menu-item index="6"><router-link class="link" to="/AOB">A.O.B.</router-link></el-menu-item>
      
    </el-menu>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    }
}
</script>
<style <style lang="scss">
.el-menu-item.is-active {
    border-bottom: 2px solid #ACD1FC!important;
    background-color: #ACD1FC;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: #ACD1FC; 
}
.el-menu.el-menu--horizontal {
  border-bottom-color: #ACD1FC;
}
.el-menu-item {
  padding: 0 10px;
  margin: 0 20px;
  transition: border-color .3s;
  &:not(.is-disabled){
    &:hover {
      background-color: #ACD1FC;
    }
  }
  a.link {
    color: #2256AA!important;
    text-decoration: none;
    display: block;
    &:hover {
      text-decoration: none;
      color: #2256AA;
    }
  }
}
</style>

