<template>
  <div class="wrapper">
    <tab-bar>
      <router-view />
    </tab-bar>
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

<style lang="less" scoped>

</style>
