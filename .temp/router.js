import Vue from 'vue'
/* global Vue */
import Router from 'vue-router';

import Home from '@/pages/home/index';
import Find from '@/pages/find/index';
import Add from '@/pages/add/index';
import About from '@/pages/about/index';
import Personal from '@/pages/personal/index';

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)
export const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/find',
      name: 'find',
      component: Find,
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
    },
  ],
})
