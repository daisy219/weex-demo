<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/24
 * desc: 首页
 */

export default {
  name: 'home',
  data () {
    return {
      place: '上海',
    };
  },
};
</script>
<template>
  <div class="home-index-page">
    <div class="top-part clearfix">
      <div class="search">
        <text>
          {{ place }}
        </text>
      </div>
      <div class="message">
        <img src="/assets/images/home/message.png"/>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';

.home-index-page {
  .top-part {
    width: 100%;
    padding: 20px;
    background: @main-color;
    .search {
      margin-right: 10px;
      // width: 100%;
      height: 30px;
      background: @white-color;
    }
  }
}
</style>
