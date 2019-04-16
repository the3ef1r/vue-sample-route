<template>
<div class="aside" >
    <h2 class="heading">
        <slot name="heading"></slot>
    </h2>
    <p class="info-text">
        <slot name="info-text"></slot>
    </p>
    <div class="infoboxes">
      <info-box class="infobox--green"><slot name="infobox--green"></slot></info-box>
      <info-box class="infobox--green-haze"><slot name="infobox--green-haze"></slot></info-box>
      <info-box class="infobox--orange"><slot name="infobox--orange"></slot></info-box>
    </div>
    </div>
</template>
<script>
import InfoBox from "../infoBox/"

export default {
  components: {
    InfoBox,
  }
}
</script>
<style lang="scss">
.infoboxes {
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 991px) {
    flex-direction: row;
  }
  @media screen and (max-width: 565px) {
    flex-direction: column;
  }
}
.aside {
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  width: 325px;
  .info-text {
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 28px;
    @media screen and (max-width: 1490px) {
      font-size: 16px;
      line-height: 1.5;
  }
  }
  .heading {
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    position: relative;
    @media screen and (max-width: 1490px) {
    font-size: 22px;
    line-height: 1;
  }
    &:after {
      content: "";
      width: 60%;
      position: absolute;
      bottom: -20px;
      left: 0;
      display: block;
      height: 5px;
      background: rgba(255, 255, 255, 0.5);
      @media (max-width: 991px){
      width: 100%;
      max-width: 186px;
    }
    }
  }
}
</style>
