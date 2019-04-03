import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route-map'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
    mode: 'history'
})

export default router
