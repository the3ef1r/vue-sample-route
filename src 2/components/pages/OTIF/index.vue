<template>
  <el-container style="min-height: calc(100vh - 132px);overflow-y: hidden;" class="otif">
    <info-aside style="margin-right: 30px; @media (max-width: 991px){margin-right: 0;}">
      <template v-slot:heading>{{heading}}</template>
      <template v-slot:info-text>{{infoText}}</template>
    </info-aside>
    <div class="centred">
      <div class="textbox-item">
        {{msg}}
      </div>
    </div>
    
  </el-container>
</template>

<script>
import InfoAside from "../../infoAside/infoAside.vue";
import InfoBox from "../../infoBox/";

export default {
  components: {
    InfoAside,
    InfoBox,
  },
  data() {
    return {
      heading: "Commercial Mars Operating System",
      msg: 'Under Construction'
    };
  }
};
</script>

<style lang="scss">
.centred {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.otif {
  .infobox--green,
  .infobox--orange,
  .infobox--green-haze {
    display: none;
  }
}
.textbox-item {
  padding: 100px 50px;
  font-size: 68px;
  font-weight: bold;
  line-height: 18px;
  text-align: center;
  color: #FFFFFF;
  background: rgba(34,86,170,.3);
  border-left: 5px solid #acd1fc;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
      font-size: 46px;
  }
  @media screen and (max-width: 991px) {
      font-size: 32px;
  }
  @media screen and (max-width: 767px) {
      font-size: 28px;
      line-height: 36px;
      padding: 50px 20px;
  }
}
</style>
