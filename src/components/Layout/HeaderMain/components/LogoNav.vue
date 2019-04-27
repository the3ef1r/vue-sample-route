<template>
  <el-row class="logo-nav">
    <div class="main-class">
      <div class="logo">
        <router-link to="/Home">
          <img :src="Logo" class="main-logo">
        </router-link>
      </div>
      <div class="nav__main">
        <span class="nav__main-link">{{ title }}</span>
      </div>
      <div class="burger-open" @click="menuIsOpened =! menuIsOpened">
        <font-awesome-icon class="burger-button" :icon="test"/>
      </div>
    </div>

    <mobile-menu/>
    <div :class="['pop-up__menu',{'is-active':menuIsOpened}]">
      <top-menu class="extra" :clickCallback="closeMenu" :links="links"/>
    </div>
  </el-row>
</template>
<script>
import Logo from "./logo.png";
import mobileMenu from "./mobileMenu.vue";
import TopMenu from "./TopMenu.vue";
export default {
  computed: {
    title: function() {
      return this.$route.meta.title
        ? this.$route.meta.title
        : "Some Default Title";
    },
    test: function() {
      return this.menuIsOpened ? "times" : "bars";
    }
  },
  data:function() {
    return {
      Logo,
      menuIsOpened: false
    };
        },
        methods: {
            closeMenu: function () {
                this.menuIsOpened = false;
            }
        },
  props: ["links"],
  components: {
    mobileMenu,
    TopMenu
  }
};
</script>
<style lang="scss">
.main-class {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
.is-active {
  display: block;
}
.pop-up__menu {
  max-height: 0;
  transition: max-height 0.34s ease 0s, background-color 0.2s ease 0s;
  overflow: hidden;
  width: 100%;
  top: 70px;
  height: 500px;
  box-sizing: border-box;
  border-top: 1px solid #acd1fc;
  @media screen and (max-width: 565px) {
    z-index: 13;
    border-top: none;
    position: absolute;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.5) 38.12%,
        rgba(172, 209, 252, 0.5) 100%
      ),
      #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .extra.el-menu {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: none;
    .el-menu-item {
      line-height: 50px;
      width: 100%;
      height: 50px;
      font-weight: 400;
      padding-left: 20px;
      border-bottom: none;
      &:last-child {
        margin-top: auto;
        padding: 0;
        height: 60px;
        line-height: 60px;
        border-top: 1px solid #acd1fc;
        a.link {
          cursor: pointer;
          transition: all 0.2s ease 0s;

          color: #2558ac;
          display: block;

          height: 60px;
          line-height: 60px;
          padding-left: 20px;
          font-family: "Roboto Condensed", sans-serif;

          svg {
            color: #acd1fc;
            transition: all 0.2s ease 0s;
            margin-right: 10px;
          }

          &:hover {
            svg {
              color: #fff;
            }
          }
        }
      }
      &:hover,
      &:focus {
        background-color: #acd1fc;
      }
      a.link {
        line-height: 50px;
        padding: 0;
        font-size: 21px;
        font-family: "Roboto Condensed", sans-serif;
        font-weight: normal;
      }
    }
  }
}
.pop-up__menu {
  &.is-active {
    max-height: 500px;
  }
}
.logo {
  width: 355px;
  box-sizing: border-box;
  float: left;
  @media screen and (max-width: 991px) {
    width: auto;
    height: 88px;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  @media screen and (max-width: 565px) {
    height: 69px;
  }
}
.logo-nav {
  width: 100%;
  display: block;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 991px) {
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    display: block;
  }
  @media screen and (max-width: 565px) {
    padding: 0;
  }
}
.burger-button {
  color: #2256aa;
  font-size: 22px;
  width: 0.875em !important;
  &:hover {
    color: lighten(#2256aa, 15%);
    cursor: pointer;
    transition: all 0.2s ease 0s;
  }
}
.burger-open {
  display: none;
  text-align: center;
  height: 100%;
  line-height: 88px;
  float: right;
  margin-left: auto;
  @media (max-width: 991px) {
    display: flex;
    margin-right: 20px;

    align-items: center;
  }
  @media screen and (max-width: 565px) {
  }
}
.nav__main-link {
  display: block;
  width: 100%;
  font: {
    family: "Roboto", sans-serif;
    style: normal;
    weight: 500;
    size: 28px;
  }
  line-height: 18px;
  color: #2256aa;
  text-decoration: none;
}
.nav__main {
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 566px) and (max-width: 991px) {
    .nav__main-link {
      font-size: 26px;
      margin-left: 30px;
    }
  }
}
.main-logo {
  @media screen and (max-width: 1199px) {
    margin-left: 30px;
  }
  width: 130px;
  height: auto;
  mix-blend-mode: multiply;
  @media screen and (max-width: 991px) {
    margin-left: 0;
  }
}
</style>
