import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import App from './App.vue'
import router from "./routing";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMasonry from 'vue-masonry-css'



library.add(faUserCog,faArrowRight,faBars,faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueMasonry)
Vue.use(Element)

new Vue({
    el: '#app',
    router,
    render: function (h) {
        return h(App);
    }
})
