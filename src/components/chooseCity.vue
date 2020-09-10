<script>
/* COMPONENT DOCUMENT
 * author: zhooyang
 * date: 2020/09/10
 * desc: 城市选择组件
 */
import { WxcCity } from 'weex-ui';

export default {
  name: 'chooseCity',
  components: { WxcCity },
  data() {
    return {
      animationType: 'push',
      currentCity: '',
      cityStyleType:'list',
      location: '定位中',
    };
  },

  props: {
    // msg: {type: String, default: ''}
  },

  created() {

  },

  mounted() {
    // 模拟定位
    setTimeout(() => {
      this.location = '杭州';
    }, 500)
  },

  methods: {
    showListCity () {
      this.cityStyleType = 'list'
      this.$refs['wxcCity'].show();
    },
    showGroupCity () {
      this.cityStyleType = 'group'
      this.$refs['wxcCity'].show();
    },
    citySelect (e) {
      this.currentCity = e.item;
    },
    onInput (e) {
    },
  },

};
</script>

<template>
<div class="choose-city-page">
  <scroller class="scroller">
    <div class="btn" @click="showListCity">
      <text class="btn-txt">城市选择</text>
    </div>
    <div class="panel">
      <text v-if="currentCity" class="text">当前城市: {{currentCity}}</text>
    </div>
  </scroller>

</div>
</template>

<style lang="less" scoped>
// @import '~@/assets/style/const.less';
// @import '~@/assets/style/common.less';
</style>
