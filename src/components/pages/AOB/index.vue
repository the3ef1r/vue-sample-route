<template>
  <el-container style="min-height: calc(100vh - 132px);" class="issue-tracker">
    <info-aside>
      <template v-slot:heading>{{heading}}</template>
      <template v-slot:info-text>
        {{infoText}}
        <p class="min-text">— Sample text;</p>
        <p
          class="min-text"
        >— Sample text;;</p>
        <p class="min-text">— Sample text;;</p>
        </template>
      <template v-slot:infobox--green-haze>
        <b style="display: block;">Sample text:</b>
        {{infoboxGreenHaze}}
      </template>
      <template v-slot:infobox--orange>{{infoboxOrange}}</template>
    </info-aside>
    <main-content :buttons="buttons">
      <template v-slot:image-main>
        
        <img :src="homepageimage" class="home-image">
      </template>
    </main-content>
  </el-container>
</template>

<script>
import InfoAside from "../../infoAside/infoAside.vue"
import InfoBox from "../../infoBox/";
import homepageimage from "./image.jpg";
import firstIcon from "../../img/icons/online-test.svg";
import secondIcon from "../../img/icons/notes.svg";
import MainContent from "../../MainContent/mainContent"

export default {
  components: {
    InfoAside,
    MainContent,
    InfoBox
  },
  data:function() {
    return {
      homepageimage,
      firstIcon,
      secondIcon,
      
      buttons: [
        {
          headText: "Sample Link Text",
          mainText: "Details",
          mainImg: firstIcon
        },
        {
          headText: "Sample Link Text",
          mainText: "Details",
          mainImg: secondIcon
        },
        
      ],
      heading: "Any Other Business",
      infoText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      infoboxGreenHaze:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      
      infoboxOrange:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    };
  }
};
</script>

<style lang="scss">

.info-text__img {
  font-weight: 500;
  font-size: 42px;
  line-height: 18px;
  text-align: center;
  margin-top: 0;
  color: #2256aa;
}
.issue-tracker {
    .infobox--green{
        display: none;
    }
}
</style>
