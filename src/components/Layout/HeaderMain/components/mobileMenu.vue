<template>
  <div class="mobile-menu">
    <span class="nav__main-link">{{ title }}</span>
  </div>
</template>
<script>
export default {
  computed: {
    title: function() {
      return this.$route.meta.title
        ? this.$route.meta.title
        : "Some Default Title";
    }
  }
};
</script>
<style lang="scss">
.mobile-menu {
  display: flex;
  align-items: center;
  height: 40px;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid #acd1fc;
  padding: 0 20px;
  .nav__main-link {
    font-size: 21px;
    line-height: 40px; 
    @media screen and (max-width: 505px) {
      font-size: 17px;
      line-height: 18px;
    }
  }
  @media screen and (min-width: 565.1px) {
    display: none;
  }
}
</style>

