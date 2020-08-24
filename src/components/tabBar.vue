<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/21
 * desc: 底部导航
 */
import { WxcTabBar } from 'weex-ui';
import { tabBarArr } from '@/const/common.js';

export default {
  name: 'tab-bar',
  components: { WxcTabBar },
  data () {
    return {
      tabTitles: tabBarArr,
      tabStyles: {
        activeTitleColor: '#ad5389',
      },
    };
  },
  methods: {
    wxcTabBarCurrentTabSelected(page) {
      // console.log(page);
      // console.log(tabBarArr[page.page].url);
    },
  },
};
</script>
<template>
  <wxc-tab-bar :tab-titles="tabTitles" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <slot />
  </wxc-tab-bar>
</template>
<style lang="less" scoped>

</style>
