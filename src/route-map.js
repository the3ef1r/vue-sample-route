import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const routes = [
 
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 },
  { path: '*', redirect: '/Page1' }
]

export default routes
