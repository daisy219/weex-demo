<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/03
 * desc: 假的搜索框
 */

export default {
  name: 'searchInput',
  data() {
    return {

    };
  },

  props: {
    place: { type: String, default: '' },
    text: { type: String, default: '' },
    gray: { type: Boolean, default: false },
    filterShow: { type: Boolean, default: false },
    showBottomArrow: { type: Boolean, default: true },
  },

  created() {

  },

  methods: {
    chooseCity() {
      this.$emit('chooseCity', this.place);
    },

    inputClick() {
      this.$emit('inputClick');
    },
  },

};
</script>

<template>
<div :class="['search-input-page', {'gray-background': gray}]">
  <div v-if="place" class="direction-row align-center" style="flex: 1" @click="chooseCity">
    <text class="place">{{ place }}</text>
    <image style="width:30px; height:30px" v-if="showBottomArrow" src="/assets/images/home/bottom-solid-arrow.png"/>
    <div class="line"></div>
  </div>
  <div class="direction-row align-center justify-between" style="flex: 3">
    <div class="direction-row align-center">
      <image style="width:30px; height:30px" src="/assets/images/home/search.png"/>
      <text class="info" @click="inputClick">{{ text }}</text>
    </div>
    <text v-if="filterShow" class="filter-text" @click="$emit('click-filter')">筛选</text>
  </div>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.search-input-page {
  margin-right: 30px;
  background: @white-color;
  border-radius: 4px;
  flex-direction: row;
  flex: 7;
  align-items: center;
  padding: 0 20px;
  .place {
    justify-content: center;
    line-height: 70px;
    font-size: 30px;
  }
  .line {
    height: 40px;
    width: 1px;
    background-color: @border-color;
    margin-left: 20px;
  }
  .info {
    color: @light-font-color;
    line-height: 70px;
    font-size: 28px;
    padding-left: 20px;
  }
  .filter-text {
    line-height: 70px;
    font-size: 30px;
  }
}
.gray-background {
  background: @light-background-color;
}
</style>
