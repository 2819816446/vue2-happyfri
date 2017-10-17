import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Home from '../page/home.vue'
import Item from '../page/item.vue'
import Score from '../page/score.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: App,
        children:[
          {
            path:'',
            component:Home
          },
          {
            path:'/item',
            component:Item
          },
          {
            path:'/score',
            // component:Score
            component:  r => require.ensure([], () => r(require('../page/score.vue')), 'score')
          }
        ]
    }

  ]
})
