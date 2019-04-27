<template>
  <el-container style="min-height: calc(100vh - 132px);" class="issue-tracker">
    <info-aside>
      <template v-slot:heading>{{heading}}</template>
      <template v-slot:info-text>
        {{infoText}}
        <p class="min-text">— Identify trends;</p>
        <p
          class="min-text"
        >— Implement corrective and preventive actions(both internally & externally);</p>
        <p class="min-text">— Have fact based communication and reviews with suppliers;</p>
        <p class="min-text">— Know the financial impact for Mars;</p>
      </template>
      <template v-slot:infobox--green-haze>
        <b style="display: block;">USERS:</b>
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
import thirdIcon from "../../img/icons/schedule.svg";
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
      thirdIcon,
      buttons: [
        {
          headText: "Issue Tracker",
          mainText: "Details",
          mainImg: firstIcon
        },
        {
          headText: "Instructions",
          mainText: "Details",
          mainImg: secondIcon
        },
        {
          headText: "Escalation Matrix",
          mainText: "Details",
          mainImg: thirdIcon
        }
      ],
      heading: "Objective Issue Tracker:",
      infoText: "Issue tracker provides a structured way to capture and process various Supply issues. With the ability for Supply and Commercial Operations to :",
      infoboxGreenHaze:"Network Schedulers, Inbound Planners raws and Commercial Operations (COPS) raws.",
      infoboxOrange:"For instructions how to complete the Issue tracker or clarity on definitions, please click on “Instructions”."
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
