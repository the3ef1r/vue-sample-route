<template>
  <el-container class="matrix-page" style="min-height: calc(100vh - 132px);" >
    <info-aside>
      <template v-slot:heading>{{heading}}</template>
      <template v-slot:info-text>
        {{infoText}}
        <p class="min-text no-before">During out of office hours, when a delivery is more > 2 hours too late or Mars production line is down for > 2 hours, make sure to reach out to the appropriate person to inform or escalate. </p>
      </template>
      <template v-slot:infobox--green-haze>
        <b style="display: block;">Objective Escalation Matrix:</b>
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
import InfoAside from "../../infoAside/infoAside.vue";
import InfoBox from "../../infoBox/";
import homepageimage from "./image.jpg";
import firstIcon from "../../img/icons/online-test.svg";
import secondIcon from "../../img/icons/notes.svg";
import thirdIcon from "../../img/icons/schedule.svg";
import MainContent from "../../MainContent/mainContent";

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
          headText: "SUPLIERS",
          mainText: "Out of hours contact",
          mainImg: firstIcon
        },
        {
          headText: "MARS WRIGLEY CONFECTIONARY",
          mainText: "Out of hours contact",
          mainImg: secondIcon
        },
        {
          headText: "PROCEDURE",
          mainText: "Out of hours ",
          mainImg: thirdIcon
        }
      ],
      heading: "Out of hours contact details :",
      infoText: "Includes all phone numbers from all BULK Raw material Suppliers and Mars Goods-In sites.",
      infoboxGreenHaze:"This escalation matrix specify how to escalate a critical supply issue, if not satisfied with the resolution provided to you.",
      infoboxOrange:"The planners (L1), Commercial Operations (L2), Strategic Souring Managers (L3) and Directors (L4). On each escalation level, the issue has to be filled into the Issue Tracker."
    };
  }
};
</script>

<style lang="scss" >

.no-before {
  &:before {
    display: none;
  }
}
.matrix-page {
  .infobox--green{
      display: none;
  }
}
</style>
