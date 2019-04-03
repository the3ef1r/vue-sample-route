import AOB from './AOB/index.vue'
import BalanceReport from './BalanceReport/index.vue'
import Home from './Home/index.vue'
import IssueTracker from './IssueTracker/index.vue'
import Minutes from './Minutes/index.vue'
import Matrix from './Matrix/index.vue'
import Layout from './components/Layout.vue'




const routes = [

  {
    path: '',
    component: Layout,
    template: '<router-view/>',
  },
  {
    path: '/AOB',
    component: Layout,
    children: [{
      path: '',
      component: AOB,
      name: 'AOB',
      meta: { title: 'dashboard', noCache: true, affix: true }
    }]
  },
  {
    path: '/BalanceReport',
    component: Layout,
    children: [{
      path: '',
      component: BalanceReport
    }]
  },
  {
    path: '/IssueTracker',
    component: Layout,
    children: [{
      path: '',
      component: IssueTracker
    }]
  },
  {
    path: '/Home',
    component: Layout,
    children: [{
      path: '',
      component: Home
    }]
  },
  {
    path: '/Matrix',
    component: Layout,
    children: [{
      path: '',
      component: Matrix
    }]
  },
  {
    path: '/Minutes',
    component: Layout,
    children: [{
      path: '',
      component: Minutes
    }]
  },
]

export default routes
