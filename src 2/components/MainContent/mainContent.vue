<template>
    <el-container class="right-section">
      <div class="root-for-image">
        <slot name="image-main"></slot>
        
      </div>
      <el-row class="d-flex">
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
.right-section {
  margin-left: 30px;
  display: grid;
  grid-template-rows: 1fr 195px;
  grid-template-columns: 100%;
  position: relative;
  grid-row-gap: 20px;
  padding-bottom: 5px;
  @media (max-width: 991px){
      margin-left: 0;
      grid-template-rows: 400px 210px;
      padding-bottom: 20px;
    }
  @media screen and (max-width: 565px) {
    display: block;
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
  &:after {
    content: '';
    background-color: rgba(34, 86, 170, 0.1);
    background-image: url('./search.svg');
    background-size: 120px;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    transition: background-color .2s ease 0s, background-image .2s ease 0s;
  }
  &:hover {
    cursor: pointer;
    
    &:after {
      visibility: visible;
      background-image: url('./search_dark.svg');
      background-color: rgba(34, 86, 170, 0.15);
    }
  }
}
.home-image {
  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  
  @media (max-width: 991px) {
    max-height: calc(100% - 80px);
    max-width: 676.9px;
    margin: 0 auto;
    width: 100%;
  }
}
</style>


