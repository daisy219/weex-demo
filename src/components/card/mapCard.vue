<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/31
 * desc: 带地图的卡片
 */

export default {
  name: 'mapCard',
  data() {
    return {

    };
  },
  props: {
    mapInfo: { type: Object, default() { return {}; } },
  },
};
</script>

<template>
<div class="map-card-page">
  <div>
    <text class="title">{{ mapInfo.title }}</text>
    <div class="direction-row align-end">
      <text class="price">{{ mapInfo.price }}</text>
      <text class="unit">元/月起</text>
      <text class="info">.在租</text>
      <text class="rent">{{ mapInfo.rent }}</text>
      <text class="info">套</text>
    </div>
    <text class="distance">距您{{ mapInfo.distance }}米</text>
  </div>
  <image style="width:100px; height:100px" src="/assets/images/home/map.png"/>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.map-card-page {
  width: calc(@common-max-width - 50px);
  height: 200px;
  background-color: @light-background-color;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .title {
    font-size: 34px;
    font-weight: bold;
    line-height: 70px;
  }
  .price {
    font-size: 32px;
    color: @red-color;
    margin-right: 10px;
  }
  .unit {
    font-size: 24px;
    color: @red-color;
  }
  .info {
    font-size: 26px;
    color: @gray-font-color;
  }
  .rent {
    font-size: 28px;
    color: @orange-color;
  }
  .distance {
    font-size: 24px;
    color: @light-font-color;
    line-height: 60px;
  }
}
</style>
