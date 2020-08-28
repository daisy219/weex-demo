<template>
  <div class="app-index-wrapper">
    <tab-bar>
      <home class="item-container"/>
      <find class="item-container"/>
      <add class="item-container"/>
      <about class="item-container"/>
      <personal class="item-container"/>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabBar.vue';
import Home from '@/pages/home/index';
import Find from '@/pages/find/index';
import Add from '@/pages/add/index';
import About from '@/pages/about/index';
import Personal from '@/pages/personal/index';
export default {
  name: 'App',
  components: {
    TabBar,
    Home,
    Find,
    Add,
    About,
    Personal,
  },
};
</script>

<style lang="less">
@import '~@/assets/style/const.less';
// @import '~@/assets/font/iconfont.css';

.app-index-wrapper {
  background: @white-color;
  .tab-bar {
    .tab-title-list {
      position: fixed;
      bottom: 0;
    }
  }
  .item-container {
    width: @common-max-width;
    background-color: @white-color;
    align-items: center;
    justify-content: center;
  }
}
</style>
