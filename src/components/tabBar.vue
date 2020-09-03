<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/21
 * desc: 底部导航
 */
import { tabBarArr } from '@/const/common.js';

export default {
  name: 'tab-bar',
  data () {
    return {
      tabTitles: tabBarArr,
      currentTab: 'home',
    };
  },
  created () {
  },
  methods: {
    jumpTo(item) {
      this.currentTab = item.key;
      this.$router.push({ name: item.url });
    },

  },
};
</script>
<template>
  <div class="tab-bar">
    <div v-for="item in tabTitles" :key="item.title" class="tab-bar-content" @click="jumpTo(item)">
      <image style="width:50px; height:50px" :src="currentTab === item.key ? item.activeIcon : item.icon"/>
      <text :class="['tab-bar-title', {'active': currentTab === item.key}]">{{ item.title }}</text>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.tab-bar {
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: @common-max-width;
  background-color: @white-color;
  .tab-bar-content {
    padding: 10px 20px;
    align-items: center;
    .tab-bar-title {
      font-size: 30px;
    }
    .active {
      color: @main-color;
    }
  }
}
</style>
