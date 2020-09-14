import Vue from 'vue'
import weex from 'weex-vue-render'
/* global Vue */

weex.init(Vue)
/* weex initialized here, please do not move this line */
// import '@/assets/font/iconfont.css';
import VueAMap from 'vue-amap';

const { router } = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue(Vue.util.extend({el: '#root', router}, App))
// router.push('home')
