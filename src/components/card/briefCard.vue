<script>
/* COMPONENT DOCUMENT
 * author: zhaoyagn
 * date: 2020/08/31
 * desc: 简介卡片
 */

export default {
  name: 'briefCard',
  data() {
    return {

    };
  },

  props: {
    cardInfo: {type: Object, default() { return {}; }},
  },

};
</script>

<template>
<div class="brief-card-page">
  <image class="image" :src="cardInfo.url"/>
  <text class="title">{{ cardInfo.title }}</text>
  <text class="info">{{ cardInfo.info }}</text>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.brief-card-page {
  margin-right: 30px;
  width: 300px;
  .image {
    width:300px;
    height:200px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .title {
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    lines: 2;
    margin-bottom: 10px;
  }
  .info {
    font-size: 24px;
    line-height: 30px;
    lines: 2;
    color: @light-font-color;
  }
}
</style>
