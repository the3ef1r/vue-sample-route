<template>
  <div class="infobox">
    <span>
      <slot></slot>
      {{textProp}}
    </span>
  </div>
</template>
<script>
export default {
  props: ["textProp"]
};
</script>
<style lang="scss">
.infobox {
  border-left: 5px solid;
  padding: 14px;
  display: block;
  background: rgba(34, 86, 170, 0.3);
  margin-bottom: 10px;
  @media screen and (max-width: 1366px) {
    padding: 10px;
  }
  @media (max-width: 991px) {
    width: 50%;
  }
  @media screen and (max-width: 565px) {
    margin-right: 0;
    width: auto;
    padding: 10px;
    padding-left: 16px;
  }
  span,
  a {
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    font-style: normal;
    text-decoration: none;
    @media screen and (max-width: 1366px) {
      line-height: 18px;
    }
    @media (max-width: 991px) {
      line-height: 24px;
    }
  }
  &.infobox--green {
    border-left-color: #b2da7b;
    @media (max-width: 991px) {
      margin-right: 20px;
    }
    @media screen and (max-width: 565px) {
      margin-right: 0;
    }
  }
  &.infobox--green-haze {
    border-left-color: #5ee2c5;
    @media (max-width: 991px) {
      margin-right: 20px;
      @media screen and (max-width: 565px){
        margin-right: 0;
      }
    }
  }
  &.infobox--orange {
    border-left-color: #fbc56d;
  }
  &.infobox--admin {
    border-left-color: #fff;

    @media (max-width: 991px) {
      display: none;
    }
    margin-top: auto;
    margin-bottom: 0;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    span {
      svg {
        color: #fff;
        transition: all 0.2s ease 0s;
      }
    }
    &:hover {
      border-left-color: #acd1fc;
      span {
        svg {
          color: #acd1fc;
        }
      }
    }
  }
}
</style>

