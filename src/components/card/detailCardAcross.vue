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
};
</script>

<template>
<div class="detail-card-across-page">
  <image class="image" :src="cardInfo.url"/>
  <div>
    <text class="title">{{ cardInfo.type }}·{{ cardInfo.title }}</text>
    <div class="right-content">
      <div class="info">
        <div class="direction-row">
          <text>{{ cardInfo.houseType }} | </text>
          <text>{{ cardInfo.area }}m² | </text>
          <text>{{ cardInfo.direction }}</text>
        </div>
        <div class="direction-row align-center">
          <image style="width:24px; height:24px; margin-right: 4px;" src="/assets/images/home/position.png"/>
          <text>距离{{ cardInfo.station }}{{ cardInfo.distance }}m</text>
        </div>
      </div>
      <div class="price">
        <text class="num">{{ cardInfo.price }}</text>
        <text class="unit">元/月</text>
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
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  .image {
    width: 200px;
    height: 150px;
    border-radius: 4px;
  }
  .title {
    lines: 1;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .right-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 450px;
    .info {
      p {
        font-size: 20px;
        line-height: 30px;
        color: @light-font-color;
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
}
</style>
