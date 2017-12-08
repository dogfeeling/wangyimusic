import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/App'

import Music from '@/components/music'
import Station from '@/components/station'
import Rank from '@/components/rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Music
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/station',
      component: Station
    },
    {
      path: '/rank',
      component: Rank
    },
  ]
})
