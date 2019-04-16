<template>
  <el-container class="home-page">
    <info-aside>
      <template v-slot:heading>{{heading}}</template>
      <template v-slot:info-text>{{infoText}}</template>
      <template v-slot:infobox--green>{{infoboxGreen}}</template>
      <template v-slot:infobox--orange>{{infoboxOrange}}</template>
    </info-aside>
    <main-content :buttons="buttons">
      <template v-slot:image-main>
        <el-button type="text" @click="dialogVisible = true" class="dialog-button"></el-button>
        <iframe :src="presentationURL" width="100%" height="100%" frameborder="0"></iframe>
      </template>
    </main-content>
    <el-dialog title="" :visible.sync="dialogVisible" width="90%" >
      <iframe :src="presentationURL" width="100%" height="100%" frameborder="0"></iframe>
    </el-dialog>
  </el-container>
</template>

<script>
import InfoAside from "../../infoAside/infoAside.vue";
import InfoBox from "../../infoBox/";
import homepageimage from "./image.jpg";
import firstIcon from "../../img/icons/internet.svg";
import secondIcon from "../../img/icons/online-class.svg";
import thirdIcon from "../../img/icons/progress.svg";
import MainContent from "../../MainContent/mainContent";

export default {
  components: {
    InfoAside,
    MainContent,
    InfoBox
  },
  data: function() {
    return {
      homepageimage,
      firstIcon,
      secondIcon,
      dialogVisible: false,
      thirdIcon,
      buttons: [
        {
          headText: "Team Commercial",
          mainText: "Operations Raws",
          mainImg: firstIcon
        },
        {
          headText: "Team Supply",
          mainText: "Inbound Materials Planners",
          mainImg: secondIcon
        },
        {
          headText: "Video",
          mainText: "COMOS introduction",
          mainImg: thirdIcon
        }
      ],
      heading: "Commercial Mars Operating System",
      infoText:
        "Through cross-functional (Commercial & Supply) connection ensuring continuous supply security for raw materials for all European factories",
      infoboxGreen:
        "This is a digital platform where all Comos OPERATIONAL documents are centrally stored and actively used by COPS raws and Supply raw planners across Europe and Russia",
      infoboxOrange:
        'This digital platform will provide  "one version of the truth" and is a tool to enable knowledge management',
      presentaionId: "A38C5318-0C3E-4109-8385-5618E28E9028"
    };
  },
  computed: {
    presentationURL: function() {
      return (
        SITE_URL +
        "/_layouts/15/Doc.aspx?sourcedoc={" +
        this.presentaionId +
        "}&action=embedview&Embed=1"
      );
    }
  }
};
</script>

<style lang="scss">
.home-page {
  min-height: calc(100vh - 132px);
  overflow-y: hidden;
  @media screen and (max-width: 1200px), screen and (max-height: 650px) {
  }
  .infobox--green-haze {
    display: none;
  }
}
.root-for-image {
  &:after {
    content: '';
    background-color: rgba(34, 86, 170, 0.1);
    background-image: url('../../MainContent/search_dark.svg');
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
      background-image: url('../../MainContent/search.svg');
      background-color: rgba(34, 86, 170, 0.15);
    }
  }
}

</style>
