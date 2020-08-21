<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/21
 * desc: 底部导航
 */
import { WxcTabBar } from 'weex-ui';

export default {
  name: 'tab-bar',
  components: { WxcTabBar },
  data() {
    return {
      tabTitles: [
        { title: '首页' },
        { title: '发现' },
        { title: '我的' },
      ],
    }
  }
}
</script>
<template>
  <wxc-tab-bar :tab-titles="tabTitles"/>
</template>
<style lang="less" scoped>

</style>