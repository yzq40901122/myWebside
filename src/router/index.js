import Vue from 'vue'
import Router from 'vue-router'

import ME from '../views/ME.vue';
import Detail from '../views/WorkDetail.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   component: ME
    // },
    {
      path: '/:id',
      component: ME
    },
    {
      path:"/detail/:id",
      component:Detail
    }
  ]
})
