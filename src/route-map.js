import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page404 from './404'


const routes = [
 
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 },
  { path: '/page4', component: Page4 },
  { path: '/page5', component: Page5 },
  { path: '/page6', component: Page6 },
  { path: '/page7', component: Page7 },
  
  { path: '*', redirect: '/404' }
]

export default routes
