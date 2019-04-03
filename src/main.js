import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import App from './App.vue'
import router from "./routing";



//comment by rodion
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
