import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import App from './App.vue'

//comment by rodion
Vue.use(Element)

new Vue({
  el: '#app',
  render: h => h(App)
})
