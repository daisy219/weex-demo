<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/24
 * desc: 租房
 */
import SearchInput from '@/components/searchInput';
import DetailCardAcross from '@/components/card/detailCardAcross';
import FilterTab from './components/filterTab';
import Position from './components/position';
import Type from './components/type';
import Price from './components/price';
import { likeList } from '@/service/home.js';
import { typeList, moreList, sortList } from '@/service/add.js';
import { WxcPopup } from 'weex-ui';

export default {
  name: 'add',
  components: { SearchInput, DetailCardAcross, FilterTab, WxcPopup, Position, Type, Price },
  data () {
    return {
      likeList: likeList,
      typeList: typeList,
      moreList: moreList,
      sortList: sortList,
      isBottomShow: false,
      currentTab: {},
      overlayConfig: {
        top: 210,
      },
    };
  },
  methods: {
    showPopup(tab) {
      this.currentTab = tab;
      this.isBottomShow = true;
    },
    popupOverlayBottomClick() {
      this.isBottomShow = false;
    },

    confirmFilter(key) {
      this.isBottomShow = false;
    },
    chooseSort(item) {
      this.isBottomShow = false;
    },
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
    <filter-tab @showPopup="showPopup"/>
    <detail-card-across v-for="(item, index) in likeList" :key="index" :card-info="item"/>

    <!-- 弹出层 -->
    <wxc-popup class="wxc-popup-add"
      :show="isBottomShow"
      :stand-out="210"
      :overlay-cfg="overlayConfig"
      @wxcPopupOverlayClicked="popupOverlayBottomClick"
      pos="top"
      :height="currentTab.height">
      <div class="pop-content">
        <position v-if="currentTab.key === 'position'" @confirm="confirmFilter"/>
        <type v-if="currentTab.key === 'type'" :key="'type'" :list="typeList" @confirm="confirmFilter" />
        <price v-if="currentTab.key === 'price'" @confirm="confirmFilter" />
        <type v-if="currentTab.key === 'more'" :key="'more'" :list="moreList" @confirm="confirmFilter" />
        <div v-if="currentTab.key === 'sort'" class="sort-part align-center">
          <div v-for="item in sortList" :key="item" class="align-center" @click="chooseSort(item)">
            <text class="sort-text">{{ item }}</text>
          </div>
        </div>
      </div>
    </wxc-popup>
  </div>
</template>
<style lang="less">
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';

.add-index-page {
  padding: 20px;
  .top-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .wxc-popup {
    overflow: scroll;
  }
  .wxc-popup-add {
    .pop-content {
      border-top-width: 1px;
      border-top-color: @border-color;
      padding-bottom: 20px;
    }
  }
  .sort-part {
    .sort-text {
      font-size: 30px;
      line-height: 90px;
      color: @gray-font-color;
    }
  }
}
</style>
