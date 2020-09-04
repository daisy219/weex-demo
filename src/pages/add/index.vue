<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/24
 * desc: 租房
 */
import SearchInput from '@/components/searchInput';
import DetailCardAcross from '@/components/card/detailCardAcross';
import { likeList } from '@/service/home.js';

export default {
  name: 'add',
  components: { SearchInput, DetailCardAcross },
  data () {
    return {
      likeList: likeList
    };
  },
};
</script>
<template>
  <div class="add-index-page">
    <div class="top-content">
      <image style="width:40px; height:40px;margin-right: 20px" src="/assets/images/add/back.png"/>
      <search-input :text="'请输入小区/商圈/地铁站等'" :gray="true"/>
      <image style="width:54px; height:46px" src="/assets/images/add/map.png"/>
    </div>

    <detail-card-across v-for="(item, index) in likeList" :key="index" :card-info="item"/>
  </div>
</template>
<style lang="less" scoped>
.add-index-page {
  padding: 20px;
  .top-content {
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
