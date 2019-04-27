import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route-map'

Vue.use(VueRouter)


export default new VueRouter({
    routes: routes,
    afterEach:function(to, from)  {
        document.title = to.meta.title || 'Some Default Title';
    }
})
