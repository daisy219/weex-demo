<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/27
 * desc: 详细信息窄卡片
 */

export default {
  name: 'detailCardStand',
  data() {
    return {

    };
  },

  props: {
    cardInfo: { type: Object, default() { return {}; } },
  },

  created() {

  },

  methods: {

  },

};
</script>

<template>
<div class="detail-card-stand-page">
  <image class="image" :src="cardInfo.url"/>
  <text class="title">{{ cardInfo.title }}</text>
  <div class="info">
    <text>{{ cardInfo.district }}.</text>
    <text>{{ cardInfo.town }}</text>
  </div>
  <div class="info">
    <text>{{ cardInfo.houseType }} | </text>
    <text>{{ cardInfo.area }}m²</text>
  </div>
  <div class="tag-group">
    <text v-for="tag in cardInfo.tags" :key="tag" class="tag">{{ tag }}</text>
  </div>
  <div class="price">
    <text class="num">{{ cardInfo.price }}</text>
    <text class="unit">元/月</text>
  </div>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';

.detail-card-stand-page {
  margin-right: 30px;
  width: 300px;
  .image {
    width: 300px;
    height: 200px;
    border-radius: 4px;
  }
  .title {
    lines: 1;
    font-weight: bold;
    font-size: 32px;
    line-height: 70px;
  }
  .info {
    flex-direction: row;
    p {
      font-size: 22px;
      line-height: 30px;
      color: @light-font-color;
    }
  }
  .tag-group {
    flex-direction: row;
    .tag {
      font-size: 20px;
      padding: 4px 8px;
      margin: 10px 10px 10px 0;
      color: #3a7bd5;
      background-color: rgb(198, 226, 255);
    }
  }
  .price {
    flex-direction: row;
    font-size: 24px;
    align-items: flex-end;
    .num {
      color: @red-color;
      font-weight: bold;
    }
    .unit {
      font-size: 22px;
      margin-left: 10px;
      color: @red-color;
    }
  }
}
</style>
