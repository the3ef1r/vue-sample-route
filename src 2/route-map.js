import AOB from './components/pages/AOB/index.vue'
import BalanceReport from './components/pages/BalanceReport/index.vue'
import Home from './components/pages/Home/index.vue'
import IssueTracker from './components/pages/IssueTracker/index.vue'
import Minutes from './components/pages/Minutes/index.vue'
import Matrix from './components/pages/Matrix/index.vue'
import Layout from './components/Layout/Layout.vue'
import Administrator from './components/pages/Administrator/index.vue'
import OTIF from './components/pages/OTIF/index.vue'
import SLA from './components/pages/SLA/index.vue'



var routes = [

  {
    path: '/',
    component: Layout,
    redirect: '/Home'
  },
  {
    path: '/AOB',
    component: Layout,
    children: [{
      path: '',
      component: AOB,
      name: 'AOB',
      meta: { title: 'Any Other Business' },
      props: {
        default: true,
        pageName: 'AOB'
      }
    }]
  },
  {
    path: '/BalanceReport',
    component: Layout,
    children: [{
      path: '',
      component: BalanceReport,
      meta: { title: 'Contract Balance Report' },
    }],
    props: {
      default: true,
      pageName: 'Contract Balance Report'
    }
  },
  {
    path: '/IssueTracker',
    component: Layout,
    children: [{
      path: '',
      component: IssueTracker,
      meta: { title: 'Issue Tracker' },
    }],
    props: {
      default: true,
      pageName: 'Issue Tracker'
    }
  },
  {
    path: '/Home',
    component: Layout,
    children: [{
      path: '',
      component: Home,
      meta: { title: 'Welcome to COMOS WEBPORTAL' },
    }],
    props: {
      default: true,
      pageName: 'Welcome to COMOS WEBPORTAL'
    }
  },
  {
    path: '/HomeDialog',
    component: Layout,
    children: [{
      path: '',
      component: HomeDialog,
      meta: { title: 'Welcome to COMOS WEBPORTAL' },
    }]
  },
  {
    path: '/Administrator',
    component: Layout,

    children: [{
      path: '',
      component: Administrator,
      meta: { title: 'Administration' },
    }],
    props: {
      default: true,
      pageName: 'Administration'
    }
  },
  {
    path: '/SLA',
    component: Layout,

    children: [{
      path: '',
      component: SLA,
      meta: { title: 'SLA' },
    }],
  },
  {
    path: '/OTIF',
    component: Layout,

    children: [{
      path: '',
      component: OTIF,
      meta: { title: 'OTIF' },
    }],
  },
  {
    path: '/Matrix',
    component: Layout,
    children: [{
      path: '',
      component: Matrix,
      meta: { title: 'Escalation Matrix / Out of hours contact details' },
    }],
    props: {
      default: true,
      pageName: 'Escalation Matrix / Out of hours contact details'
    }

  },
  {
    path: '/Minutes',
    component: Layout,
    children: [{
      path: '',
      component: Minutes,
      meta: { title: 'COMOS Call Minutes ' },
    }],
    props: {
      default: true,
      pageName: 'COMOS Call Minutes!'
    }
  },
]

export default routes
