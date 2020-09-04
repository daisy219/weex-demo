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
        { content: '位置' },
        { content: '方式' },
        { content: '租金' },
        { content: '更多' },
        { content: '排序' },
      ],
    };
  },

  props: {
    // msg: {type: String, default: ''}
  },

  created() {
    
  },

  methods: {

  },

};
</script>

<template>
<div class="filter-tab-page">
  <div v-for="item in filterList" :key="item.content">
    <text>{{ item.content }}</text>
    <image style="width:30px; height:30px" src="/assets/images/home/bottom-solid-arrow.png"/>
  </div>
</div>
</template>

<style lang="less" scoped>
// @import '~@/assets/style/const.less';
// @import '~@/assets/style/common.less';
.filter-tab-page {
  flex-direction: row;
  justify-content: space-between;
}
</style>
