<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/10
 * desc: 真的搜索框
 */
import { WxcSearchbar } from 'weex-ui';
import Utils from '@/utils/index';
import { historyList } from '@/service/home';

export default {
  name: 'realSearchInput',
  components: { WxcSearchbar },
  data() {
    return {
      historyList: historyList,
    };
  },

  props: {
    // msg: {type: String, default: ''}
  },

  created() {

  },
  computed: {
    cityExtendStyle () {
      return Utils.uiStyle.pageTransitionAnimationStyle('push');
    },
  },

  methods: {
    wxcSearchbarInputOnInput (e) {
      this.value = e.value;
    },
    wxcSearchbarCancelClicked() {
      this.show(false);
    },
    show(status = true, callback = null) {
      const ref = this.$refs['search-page'];
      Utils.animation.pageTransitionAnimation(ref, `translateX(${status ? -750 : 750}px)`, status, callback);
    },
  },

};
</script>

<template>
<div class="real-search-input-page" ref="search-page" :style="cityExtendStyle">
  <wxc-searchbar
    class="wxc-searchbar"
    ref="wxc-searchbar"
    placeholder="请输入小区/商圈/地铁站等"
    :always-show-cancel="true"
    @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
    @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
  />
  <div class="title-row-wrap">
    <text class="history-title">历史记录</text>
    <image style="width:36px; height:36px" resize="stretch" src="/assets/images/home/delete.png"/>
  </div>
  <div v-for="item in historyList" :key="item" class="content-row-wrap">
    <image style="width:30px; height:30px" resize="stretch" src="/assets/images/home/position.png"/>
    <text class="history-text">{{ item }}</text>
  </div>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.real-search-input-page {
  padding: 20px;
  position: fixed;
  width: 750px;
  background-color: @white-color;
  .wxc-searchbar {
    margin-bottom: 30px;
  }
  .title-row-wrap {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    border-bottom-color: @border-color;
    border-bottom-width: 1px;
    .history-title {
      font-size: 36px;
      font-weight: bold;
    }
  }
  .content-row-wrap {
    flex-direction: row;
    align-items: center;
    border-bottom-color: @border-color;
    border-bottom-width: 1px;
    .history-text {
      margin-left: 20px;
      font-size: 30px;
      color: @gray-font-color;
      padding: 30px 0;
    }
  }
}
</style>
