<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/08
 * desc: 弹出层-租金
 */
import { priceList } from '@/service/add';
import { WxcButton } from 'weex-ui';
import { resetBtnStyle, resetBtnTextStyle, confirmBtnSyle } from '@/const/config';

export default {
  name: 'add-tab-price',
  components: { WxcButton },
  data() {
    return {
      priceList: priceList,
      resetBtnStyle: resetBtnStyle,
      resetBtnTextStyle: resetBtnTextStyle,
      confirmBtnSyle: confirmBtnSyle,
    };
  },

  props: {
    // msg: {type: String, default: ''}
  },

  created() {

  },

  methods: {
    reset() {

    },
    confirm() {

    },
    choosePrice(item) {
      this.$emit('confirm', item);
    },
  },

};
</script>

<template>
<div class="add-tab-price-page">
  <div v-for="item in priceList" :key="item" class="item" @click="choosePrice(item)">
    <text class="text">{{ item }}</text>
  </div>
  <!-- <div class="btn-group">
    <wxc-button class="btn" text="重置" size="big" :btnStyle="resetBtnStyle" :textStyle="resetBtnTextStyle" @wxcButtonClicked="reset"></wxc-button>
    <wxc-button class="btn" text="确定" size="big" :btnStyle="confirmBtnSyle" @wxcButtonClicked="confirm"></wxc-button>
  </div> -->
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.add-tab-price-page {
  align-items: center;
  .item {
    align-items: center;
    .text {
      font-size: 30px;
      line-height: 90px;
      color: @gray-font-color;
    }
  }
}
</style>
