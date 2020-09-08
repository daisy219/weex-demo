<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/07
 * desc: 弹出层-方式&更多
 */
import { wholeTypeList, joinTypeList } from '@/service/add';
import { WxcButton } from 'weex-ui';
import { resetBtnStyle, resetBtnTextStyle, confirmBtnSyle } from '@/const/config';
import MultiplePart from '@/components/multiplePart';

export default {
  name: 'add-tab-type',
  components: { WxcButton, MultiplePart },
  data() {
    return {
      wholeTypeList: wholeTypeList,
      joinTypeList: joinTypeList,
      resetBtnStyle: resetBtnStyle,
      resetBtnTextStyle: resetBtnTextStyle,
      confirmBtnSyle: confirmBtnSyle,
      resetFlag: false,
      selectJoinList: [],
      selectWholeList: [],
    };
  },

  props: {
    list: {type: Array, default() { return []; }},
  },

  created() {

  },

  methods: {

    /** 重置 */
    reset() {
      this.resetFlag = !this.resetFlag;
    },

    confirm() {
      const params = {
        whole: this.selectWholeList,
        join: this.selectJoinList,
      };
      this.$emit('confirm', params);
    },
    wholeTypeChange(val) {
      this.selectWholeList = val;
    },
    joinTypeChange(val) {
      this.selectJoinList = val;
    },

  },

};
</script>

<template>
<div class="add-tab-type-page">

  <multiple-part v-for="item in list" :key="item.key" :title="item.title" :reset-flag="resetFlag" :list="item.list" @changeValue="wholeTypeChange"/>
  <!-- <multiple-part title="合租" :reset-flag="resetFlag" :list="joinTypeList" :key="'合租'" @changeValue="joinTypeChange"/> -->
  <div class="btn-group">
    <wxc-button class="btn" text="重置" size="big" :btnStyle="resetBtnStyle" :textStyle="resetBtnTextStyle" @wxcButtonClicked="reset"></wxc-button>
    <wxc-button class="btn" text="确定" size="big" :btnStyle="confirmBtnSyle" @wxcButtonClicked="confirm"></wxc-button>
  </div>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.add-tab-type-page {
  padding: 0 40px;

}
</style>
