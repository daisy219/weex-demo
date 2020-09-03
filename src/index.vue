<template>
  <div class="app-index-wrapper">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabBar.vue';
export default {
  name: 'App',
  components: {
    TabBar,
  },
};
</script>

<style lang="less">
@import '~@/assets/style/const.less';

.app-index-wrapper {
  background: @white-color;
  padding-bottom: 150px;
}
</style>
