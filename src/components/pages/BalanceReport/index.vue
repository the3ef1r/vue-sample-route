<template>
  <el-container class="container--minutes">
    <div class="buttons-row">
      <div v-for="item in items" class="minute__btn">
        <button-minutes>
          <template v-slot:image>
            <img :src="item.image">
          </template>
          <template v-slot:text>
            {{item.message}}
          </template>
        </button-minutes>
      </div>
    </div>
  </el-container>
</template>

<script>
import buttonMinutes from "../../buttonMinutes/buttonMinutes"
import InfoBox from "../../infoBox/"
export default {
  components: {
    buttonMinutes,
    InfoBox
  },
  data:function() {
    return {
      items: [
        {
          message: "Dairy",
          image: require("../../img/buttonMinutes/image-0.jpg")
        },
        {
          message: "Oils & Fats",
          image: require("../../img/buttonMinutes/image.jpg")
        },
        {
          message: "Cocoa",
          image: require("../../img/buttonMinutes/image-1.jpg")
        },
        {
          message: "Cereals & Flour",
          image: require("../../img/buttonMinutes/image-6.jpg")
        },
        {
          message: "Specialist",
          image: require("../../img/buttonMinutes/image-7.jpg")
        },
        {
          message: "Colours",
          image: require("../../img/buttonMinutes/image-8.jpg")
        },
        {
          message: "Sweeteners",
          image: require("../../img/buttonMinutes/image-9.jpg")
        },
        {
          message: "Nuts & Fruits",
          image: require("../../img/buttonMinutes/image-2.jpg")
        },
        {
          message: "Peanut & Coconut",
          image: require("../../img/buttonMinutes/image-3.jpg")
        },
        {
          message: "Polyols",
          image: require("../../img/buttonMinutes/image-10.jpg")
        },
        {
          message: "Gum Base",
          image: require("../../img/buttonMinutes/image-4.jpg")
        },
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
