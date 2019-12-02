import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Test from '@/components/Test'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios,axios)

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    }
  ]
})