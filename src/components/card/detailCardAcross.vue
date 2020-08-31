<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/31
 * desc: 详细信息宽卡片
 */

export default {
  name: 'detailCardAcross',
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
<div class="detail-card-across-page direction-row">
  <image class="image" :src="cardInfo.url"/>
  <div>
    <text class="title">{{ cardInfo.type }}·{{ cardInfo.title }}</text>
    <div class="direction-row justify-between align-center">
      <div class="info">
        <div class="direction-row">
          <text>{{ cardInfo.houseType }} | </text>
          <text>{{ cardInfo.area }}m² | </text>
          <text>{{ cardInfo.direction }}</text>
        </div>
        <div class="direction-row">
          <image style="width:20px; height:20px" src="/assets/images/home/position.png"/>
          <text>距离{{ cardInfo.area }}m²</text>
          <text>{{ cardInfo.direction }}</text>
        </div>
      </div>
      <div class="price">
        <text class="num"></text>
        <text class="unit"></text>
      </div>
    </div>

    <div class="tag-group">
      <text v-for="tag in cardInfo.tags" :key="tag" class="tag">{{ tag }}</text>
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.detail-card-across-page {
  .image {
    margin-right: 20px;
    width: 250px;
    height: 150px;
    border-radius: 4px;
  }
  .info {
    p {
      color: @light-font-color;
    }
  }
  .title {
    lines: 1;
    font-weight: bold;
    font-size: 34px;
    line-height: 70px;
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