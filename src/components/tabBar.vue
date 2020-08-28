<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/21
 * desc: 底部导航
 */
import { WxcTabBar } from 'weex-ui';
import { tabStyles } from '@/const/config.js';
import { tabBarArr } from '@/const/common.js';

export default {
  name: 'tab-bar',
  components: { WxcTabBar },
  data () {
    return {
      tabTitles: tabBarArr,
      tabStyles: tabStyles,
      wrapBgColor: '#fff',
      // contentStyle: null,
    };
  },
  created () {
  },
  methods: {

  },
};
</script>
<template>
  <wxc-tab-bar class="tab-bar" ref="wxc-tab-bar" :tab-titles="tabTitles" :wrap-bg-color="wrapBgColor" :tab-styles="tabStyles">
    <slot />
    <!-- <div class="item-container" :style="contentStyle"><text>首页</text></div>
    <div class="item-container" :style="contentStyle"><text>11</text></div>
    <div class="item-container" :style="contentStyle"><text>22</text></div>
    <div class="item-container" :style="contentStyle"><text>33</text></div>
    <div class="item-container" :style="contentStyle"><text>44</text></div> -->
  </wxc-tab-bar>
</template>
<style lang="less" scoped>

</style>
