import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LeftMenu from '@/components/menu/LeftMenu'
import RightMenu from '@/components/menu/RightMenu'
import CommonInformationPage from "@/components/CommonInformationPage";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/left',
      name: 'LeftMenu',
      component: LeftMenu
    },
    {
      path: '/right',
      name: 'RightMenu',
      component: RightMenu
    },
    {
      path: '/common-information',
      name: 'CommonInformationPage',
      component: CommonInformationPage
    },
  ]
})
