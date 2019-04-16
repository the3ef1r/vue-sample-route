<template>
  <header class="header">
    <el-container>
      <top-menu class="first-item" :links="links" />
      <logo-nav :links="links" />
    </el-container>
    
  </header>
</template>
<script>
import TopMenu from "./components/TopMenu"
import LogoNav from "./components/LogoNav"

export default {
  name: "HeaderMain",
  
  components: {
    TopMenu,
    LogoNav
  },
  data:function() {
    return {
      links: [
        { toPage: "Home", namePage: "Home page" },
        { toPage: "Minutes", namePage: "COMOS Call Minutes" },
        { toPage: "BalanceReport", namePage: "Contract Balance Report" },
        { toPage: "Issuetracker", namePage: "Issue Tracker " },
        { toPage: "SLA", namePage: "SLA" },
        { toPage: "OTIF", namePage: "OTIF" },
        {
          toPage: "Matrix",
          namePage: "Escalation Matrix"
        },
        {
          toPage: "MatrixDialog",
          namePage: "Matrix2"
        },
        { toPage: "AOB", namePage: "A.O.B", },
        { toPage: "Administrator", namePage: "Administrator", icon: "user-cog" }
      ]
    }
  }
};
</script>
<style lang="scss">
.header {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 38.12%,
      rgba(172, 209, 252, 0.5) 100%
    ),
    #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .el-container {
    display: block;
    margin: 0 auto;
  }
  &:before {
    @media screen and (min-width: 1200px ) {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #acd1fc;
      left: 0;
      top: 40px;
    }
    
  }
}
.el-container {
  max-width: 1200px;
}
</style>


