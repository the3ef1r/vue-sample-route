<template>
  <el-container>
    <el-row :gutter="20" style="width: 100%;">
      <el-col :span="16">
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix box-card__header">
            <el-row>
              <span>Профиль пользователя</span>
              <el-button size="small" icon="el-icon-question " class="float-right" circle></el-button>
            </el-row>
            <el-row>
              <el-button-group>
                <el-button size="small">
                  Изменить пароль
                  <i class="el-icon-edit-outline"></i>
                </el-button>
                <el-button size="small">
                  Выйти
                  <i class="el-icon-info"></i>
                </el-button>
              </el-button-group>
              <el-button-group class="float-right">
                <el-button size="small">
                  Расширенный вид
                  <i class="el-icon-tickets"></i>
                </el-button>
              </el-button-group>
            </el-row>
          </div>
          <el-container style="flex-direction: column;">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-card
                  class="box-card"
                  shadow="always"
                  style="height: auto;position: relative;">
                  <img :src="avatar" style="max-width: 100%; height: auto;">
                </el-card>
              </el-col>
              <el-col :span="16">
                <el-card class="box-card" shadow="always" style="width: 100%;">
                  <div slot="header" class="clearfix">
                    <span>{{ accountName }}</span>
                  </div>
                  <div class="person-work__info" v-for="(object, key) in objects" v-bind:key="key">
                    <b style="display: block; margin-bottom: 1rem;">Territory Sales Expert</b>
                    {{ object.firstName }} > {{ object.work }} > {{ object.worktype }} > {{ object.workplace }} > {{ object.workname}}
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-card class="box-card" shadow="always" style="width: 100%;">
                  <infoList></infoList>
                </el-card>
              </el-col>
              <el-col :span="16"><el-card class="box-card" shadow="always" style="width: 100%;">
                  <infoList></infoList>
                </el-card></el-col>
            </el-row>
          </el-container>
        </el-card>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import avatar from "./img/5.jpg";
import infoList from "./components/infoList.vue";
export default {
  components: {
    infoList: infoList
  },
  data() {
    return {
      avatar,
      accountName: "Константинопольский Константин Константинович",
      objects: [
        {
          firstName: "Mars Global",
          work: " Pet Nutrition ",
          workplace: "Pet Nutrition Russia",
          worktype: "Sales",
          workname: "5209Area Sales Manager"
        }
      ]
    };
  }
};
</script>



<style lang="scss">
.box-card__header {
  text-align: left;
}
.float-right {
  float: right;
}
.el-row {
  width: 100%;
}
.el-card__body {
  padding: 10px!important;
}
.person-work__info {
  text-align: left;
}
</style>
