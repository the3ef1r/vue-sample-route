<template>
    <el-container class="right-section">
      <div class="root-for-image">
        <slot name="image-main"></slot>
        
      </div>
      <el-row class="d-flex three-buttons">
        <button-box v-for="button in buttons">
          <template v-slot:head-text>{{button.headText}}</template>
          <template v-slot:main-text>{{button.mainText}}</template>
          <template v-slot:button-icon><img :src="button.mainImg" alt="icon"></template>
        </button-box>
      </el-row>
    </el-container>
</template>
<script>
import ButtonBox from "../ButtonBox/ButtonBox.vue";
export default {
    props: ['buttons'],
    components: {
      ButtonBox,
    },
}
</script>
<style lang="scss">
.three-buttons {
  min-height: 196px;
  margin-top: auto;
}
.right-section {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-bottom: 5px;
  @media (max-width: 991px){
    margin-left: 0;
  }
  @media screen and (max-width: 565px) {
     > *:nth-child(1n) {
      margin-bottom: 20px;
    }
  }
}
.root-for-image {
  background: #fff;
  position: relative;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  min-height: 200px;
  height: 100%;
  width: 100%;
  max-height: 550px;
  margin-bottom: 20px;
}
.home-image {
  max-height: 100%;
  max-width: 600px;
  margin: 0 auto;
  @media screen and (min-height: 770px) {
    max-width: 100%;
  }
  @media (max-width: 991px) {
    max-height: calc(100% - 80px);
    max-width: 676.9px;
    margin: 0 auto;
    width: 100%;
  }
}
</style>


