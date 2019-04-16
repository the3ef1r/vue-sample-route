<template>
  <el-container style="min-height: calc(100vh - 132px);overflow-y: hidden;" class="administration">
    <info-aside style="margin-right: 30px; @media (max-width: 991px){margin-right: 0;}">
      <template v-slot:heading>{{heading}}</template>
      <template v-slot:info-text>{{infoText}}</template>
    </info-aside>
    <masonry :cols="{default: 3,  991: 2, 767: 1}" :gutter="20" class="block-links" >
      <div v-for="(item, index) in items" :key="index" class="mansory-item"><span class="index-name">{{item.index}}</span><span class="index-items">{{item.name}}</span></div>
    </masonry>
  </el-container>
</template>

<script>
import InfoAside from "../../infoAside/infoAside.vue";
import InfoBox from "../../infoBox/";

export default {
  components: {
    InfoAside,
    InfoBox
  },
  data() {
    return {
      heading: "Content Management",
      infoText: "Change links & uploading content information for portal",
      items: [
        { name: "Main picture link Team Commercal Link Team Supply Link VIdeo Folder Link", index: "Home Page" },
        { name: "Sample name link ", index: "Contract Balance Repors" },
        { name: "Sample name link ", index: "Escalation Matrix/ Out of hours contact list" },

        { name: "Sample name link ", index: "Comos CALL Minutes" },
        { name: "Sample name link ", index: "Issue Tracker" },
        { name: "Sample name link ", index: "A.O.B" },
      ]
    };
  }
};
</script>

<style lang="scss">
.block-links {
  margin-left: 30px;
  @media screen and (max-width: 991px){
    margin-left: 0;
  }
}
.administration {
  .infobox--green,
  .infobox--orange, 
  .infobox--green-haze, {
    display: none;
  }
}
.mansory-item {
    background: rgba(34, 86, 170, 0.3);
    border-left: 5px solid #ACD1FC;
    padding: 14px;
    margin-bottom: 20px;
    
}
.index-name {
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}
.index-items {
  display: block;
}
</style>
