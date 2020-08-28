<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/27
 * desc: 
 */

export default {
  name: 'detailCardStand',
  data() {
    return {

    }
  },

  props: {
  // msg: {type: string, default: ''}
  },

  created() {

  },

  methods: {

  },

 }
</script>

<template>
<div class="detail-card-stand-page">
  <image class="image" src="/assets/images/home/room1.jpg"/>
  <text class="title">世外桃源</text>
  <div class="info">
    <text>浦东新区</text>
    <text>北蔡</text>
    <text>4室3厅</text>
    <text>178m</text>
  </div>
  <div class="tag-group">
    <text></text>
  </div>
  <div class="price">
    <text>2121</text>
    <text>元/月</text>
  </div>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';

.detail-card-stand-page {
  margin-right: 30px;
  .image {
    width:300px;
    height:200px;
    border-radius: 4px;
  }
  .title {
    font-weight: bold;
    font-size: 34px;
    line-height: 80px;
  }
  .info {
    flex-direction: row;
    text {
      font-size: 26px;
      color: @light-font-color;
    }
  }
}
</style>