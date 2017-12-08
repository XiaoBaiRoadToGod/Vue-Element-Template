import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Router1 from '@/pages/router1'
import Router2 from '@/pages/router2'
import Router3 from '@/pages/router3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: 'router1', name: 'router1', component: Router1 },
        { path: 'router2', name: 'router2', component: Router2 },
        { path: 'router3', name: 'router3', component: Router3 }
      ]
    }
  ]
})
