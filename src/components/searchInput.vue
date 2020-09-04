<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/03
 * desc: 搜索框
 */

export default {
  name: 'searchInput',
  data() {
    return {

    };
  },

  props: {
    place: {type: String, default: ''},
    text: {type: String, default: ''},
    gray: false,
  },

  created() {

  },

  methods: {

  },

};
</script>

<template>
<div :class="['search-input-page', {'gray-background': gray}]">
  <div v-if="place" class="direction-row align-center">
    <text class="place">{{ place }}</text>
    <image style="width:30px; height:30px" src="/assets/images/home/bottom-solid-arrow.png"/>
    <div class="line"></div>
  </div>
  <image style="width:30px; height:30px" src="/assets/images/home/search.png"/>
  <text class="info">{{ text }}</text>
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
    padding: 0 20px;
    justify-content: center;
    line-height: 70px;
  }
  .line {
    height: 40px;
    width: 1px;
    margin: 0 20px;
    background-color: #000;
  }
  .info {
    color: @light-font-color;
    line-height: 70px;
    font-size: 28px;
    padding-left: 20px;
  }
}
.gray-background {
  background: @light-background-color;
}
</style>
