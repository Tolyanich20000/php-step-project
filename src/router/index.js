import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Authorisation from '../components/Authorization'
import Registration from '../components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/auth',
      name: 'Authorisation',
      component: Authorisation
    },{
      path: '/reg',
      name: 'Registration',
      component: Registration
    }
  ]
})
