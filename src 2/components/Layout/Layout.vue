<template>
  <div class="work">
    <header-main></header-main>
    <app-main></app-main>
  </div>
</template>
<script>

import HeaderMain from "./HeaderMain/HeaderMain"
import AppMain from "./AppMain"

export default {
  name: "Layout",
  components: {
    HeaderMain,
    AppMain
  },
  
};
</script>
<style>
.work {
  background: linear-gradient(180deg, #2256AA 0%, #93C1F7 100%);
}
</style>

