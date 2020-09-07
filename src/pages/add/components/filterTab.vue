<script>
/* COMPONENT DOCUMENT
 * author: zhoayang
 * date: 2020/09/04
 * desc: 筛选tab
 */

export default {
  name: 'filterTab',
  data() {
    return {
      filterList: [
        { content: '位置', key: 'position', height: 600 },
        { content: '方式', key: 'type', height: 400 },
        { content: '租金', key: 'price', height: 700 },
        { content: '更多', key: 'more', height: 800 },
        { content: '排序', key: 'sort', height: 400 },
      ],
      currentTabKey: '',
    };
  },

  props: {
    // msg: {type: String, default: ''}
  },

  methods: {
    showPopup(currentTab) {
      this.currentTabKey = currentTab.key;
      this.$emit('showPopup', currentTab);
    },

  },

};
</script>

<template>
<div class="filter-tab-page">
  <div v-for="item in filterList" :key="item.content" @click="showPopup(item)" class="tab-item">
    <text :class="['text', {'active': item.key === currentTabKey}]">{{ item.content }}</text>
    <image v-if="item.key !== currentTabKey" style="width:34px; height:34px; margin-left: 10px;" src="/assets/images/home/bottom-solid-arrow.png"/>
    <image v-if="item.key === currentTabKey" style="width:34px; height:34px; margin-left: 10px;" src="/assets/images/home/active-arrow.png"/>
  </div>

</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
// @import '~@/assets/style/common.less';
.filter-tab-page {
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;
  .tab-item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    flex: 1;
    .text {
      font-size: 30px;
      color: @gray-font-color;
      font-weight: bold;
    }
    .active {
      color: @main-color;
    }
  }
}
</style>
