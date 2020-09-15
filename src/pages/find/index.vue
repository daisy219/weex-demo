<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/24
 * desc: 找房
 */
import DetailCardAcross from '@/components/card/detailCardAcross';
import SearchInput from '@/components/searchInput';
import SearchPage from '@/components/realSearchInput';
import Amap from '@/components/amap';
import SlideBar from '@/components/slideBar';

import { likeList } from '@/service/home.js';
import { filterList } from '@/service/find.js';
import { WxcPopup, WxcButton } from 'weex-ui';
import { resetBtnStyle, resetBtnTextStyle, confirmBtnSyle } from '@/const/config';

export default {
  name: 'find',
  components: { WxcPopup, DetailCardAcross, WxcButton, SearchInput, SearchPage, Amap, SlideBar },
  data () {
    return {
      center: [121.59996, 31.197646],
      circle: {
        center: [121.59996, 31.197646],
        radius: 3000,
        fillOpacity: 0.5,
        strokeColor: '#98C9FB',
        fillColor: '#98C9FB',
        events: {
          click: () => {
            alert('click');
          },
        },
      },
      popupShow: false,
      filterShow: false,
      filterList: filterList,
      likeList: likeList,
      currentPlace: '上海市徐汇区衡山路922号',
      resetBtnStyle: resetBtnStyle,
      resetBtnTextStyle: resetBtnTextStyle,
      confirmBtnSyle: confirmBtnSyle,
      // 筛选数据
      currentFilter: {
        type: '',
        houseType: '',
        date: '',
      },
      currentPosition: '',
      currentDistance: 2,
      currentpPriceMin: 0,
      currentpPriceMax: 130000,
      // 地图上散落的文字
      mapTexts: [
        {
          position: [121.59980, 31.197650],
          text: '3400',
          offset: [0, 0],
          events: {
            click: () => {
              this.setHighLight(JSON.stringify([121.59980, 31.197650]));
              console.log(this.currentPosition);
            },
          },
        },
        {
          position: [121.59960, 31.227550],
          text: '4400',
          offset: [0, 0],
          events: {
            click: () => {
              alert('click text');
            },
          },
        },
        {
          position: [121.60940, 31.217750],
          text: '5400',
          offset: [0, 0],
          events: {
            click: () => {
              alert('click text');
            },
          },
        },
      ],
    };
  },

  methods: {
    showPopup() {
      this.popupShow = true;
    },

    popupOverlayBottomClick() {
      this.popupShow = false;
    },

    showFilter() {
      this.filterShow = true;
    },

    popupOverlayRightClick() {
      this.filterShow = false;
    },

    reset() {
      this.currentFilter = {
        type: '',
        houseType: '',
        date: '',
      };
    },
    /** 设置当前选择标签高亮 */
    setHighLight(key) {
      this.currentPosition = key;
    },

    /** 筛选确认 */
    confirm() {
      this.filterShow = false;
      console.log(this.currentFilter);
    },

    chooseFilter(souce, value) {
      this.currentFilter[souce] = value;
    },

    clickFilter() {
      this.filterShow = true;
    },
    inputClick() {
      this.$refs['real-search-page'].show();
    },

    placeBarTouchEnd(value) {
      this.currentDistance = value;
    },
    priceBarTouchEnd(value) {
      this.currentpPriceMin = value[0];
      this.currentpPriceMax = value[1];
    },
  },
};
</script>
<template>
  <div class="find-index-page">
    <div class="top-info">
      <div class="view-info" @click="showPopup">
        <text class="info-text">检索到</text>
        <text class="info-text count">107</text>
        <text class="info-text">条房源，请点击查看</text>
      </div>
      <div class="right-icon">
        <image style="width:40px; height:40px" src="/assets/images/find/position.png"/>
      </div>
    </div>

    <!-- 搜索框 -->
    <search-input
      class="find-search-input" place="地点"
      :text="currentPlace" :filter-show="true" :show-bottom-arrow="false"
      @click-filter="clickFilter" @inputClick="inputClick"/>

    <!-- 滑块部分 -->
    <div class="slide-part">
      <div class="direction-row" style="margin-bottom: 40px;">
        <text class="slide-title">距离</text>
        <div class="align-center">
          <slide-bar :block-radius="18" valid-color="#82529d" :default-value="2" :min="1" :max="5" :min-diff="1" @wxcSliderBarTouchEnd="placeBarTouchEnd"/>
          <text class="slide-info">{{ currentDistance }}km以内</text>
        </div>
      </div>
      <div class="direction-row">
        <text class="slide-title">价格</text>
        <div class="align-center">
          <slide-bar :block-radius="18" valid-color="#82529d" :range="true" :min="0" :max="13000" :min-diff="100" :default-value="[0, 13000]" @wxcSliderBarTouchEnd="priceBarTouchEnd"/>
          <text class="slide-info" v-if="currentpPriceMin === 0 && currentpPriceMax === 130000">不限</text>
          <text class="slide-info" v-if="currentpPriceMin === 0 && currentpPriceMax !== 130000">{{ currentpPriceMax }}元以下</text>
          <text class="slide-info" v-if="currentpPriceMin !== 0 && currentpPriceMax === 130000">{{ currentpPriceMin }}元以上</text>
          <text class="slide-info" v-if="currentpPriceMin !== 0 && currentpPriceMax !== 130000">{{ currentpPriceMin }}元- {{ currentpPriceMax }}元</text>
        </div>
      </div>
    </div>

    <!-- 下方弹出层 -->
    <wxc-popup class="wxc-popup-find"
      pos="bottom"
      :height="1000"
      :show="popupShow"
      @wxcPopupOverlayClicked="popupOverlayBottomClick"
    >
      <div class="pop-top">
        <div class="direction-row align-center">
          <image style="width:30px; height:18px; margin-right: 20px;" src="/assets/images/find/bottom-arrow.png" @click="popupOverlayBottomClick"/>
          <text class="current-place">{{ currentPlace }}</text>
        </div>
        <text @click="showFilter" class="filter-text">筛选</text>
      </div>
      <scroller>
        <detail-card-across v-for="(item, index) in likeList" :key="index" :card-info="item"/>
      </scroller>
    </wxc-popup>

    <!-- 地图 -->
    <amap :center="center" :circle="circle" :map-texts="mapTexts"/>

    <!-- 右侧筛选条件弹出层 -->
    <wxc-popup class="wxc-popup-find-right"
      pos="right"
      :width="400"
      :show="filterShow"
      @wxcPopupOverlayClicked="popupOverlayRightClick"
    >
      <scroller>
        <div v-for="item in filterList" :key="item.title" style="margin-bottom: 60px;">
          <text class="title">{{ item.title }}</text>
          <div class="it-wrap">
            <div :class="['it', {'active': currentFilter[item.souce] === it}]" v-for="it in item.list" :key="it" @click="chooseFilter(item.souce, it)">
              <text class="it-text">{{ it }}</text>
            </div>
          </div>
        </div>
        <div class="btn-group">
          <wxc-button class="btn" text="重置" size="big" :btnStyle="resetBtnStyle" :textStyle="resetBtnTextStyle" @wxcButtonClicked="reset"></wxc-button>
          <wxc-button class="btn" text="确定" size="big" :btnStyle="confirmBtnSyle" @wxcButtonClicked="confirm"></wxc-button>
        </div>
      </scroller>
    </wxc-popup>

    <!-- 搜索页 -->
    <search-page ref="real-search-page"/>
  </div>
</template>
<style lang="less">
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';

.find-index-page {
  position: relative;
  width: 750px;
  .top-info {
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 25px;
    .view-info {
      width: 600px;
      height: 60px;
      background-color: @white-color;
      flex-direction: row;
      border-radius: 20px;
      padding-left: 20px;
      align-items: center;
      .info-text {
        font-size: 28px;
        line-height: 60px;
        color: @gray-font-color;
      }
      .count {
        color: @orange-color;
      }
    }
    .right-icon {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      margin-left: 20px;
      align-items: center;
      justify-content: center;
      background-color: @white-color;
    }
  }
  .find-search-input {
    position: absolute;
    bottom: 320px;
    left: 25px;
    z-index: 1;
    width: 700px;
  }
  .slide-part {
    background: @white-color;
    padding: 40px 20px;
    position: absolute;
    bottom: 40px;
    left: 25px;
    z-index: 1;
    width: 700px;
    .slide-title {
      font-size: 30px;
      margin-right: 20px;
    }
    .slide-info {
      font-size: 26px;
      color: @main-color;
      align-items: center;
    }
  }
}
.wxc-popup-find {
  .wxc-popup {
    padding: 20px;
    z-index: 3;
    .pop-top {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
      .current-place {
        font-size: 28px;
        color: @light-font-color;
      }
      .filter-text {
        font-size: 28px;
        color: @main-color;
      }
    }
  }
  .wxc-overlay {
    z-index: 2;
  }
}
.wxc-popup-find-right {
  .wxc-overlay {
    z-index: 4;
  }
  .wxc-popup {
    z-index: 5;
    padding: 20px;
    .title {
      font-size: 40px;
      font-weight: bold;
      line-height: 100px;
    }
    .it-wrap {
      flex-direction: row;
      flex-wrap: wrap;
      .it {
        margin: 0 10px 20px;
        background-color: @light-background-color;
        border-radius: 4px;
        height: 60px;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        border-width: 1px;
        border-color: @light-background-color;
        .it-text {
          font-size: 26px;
          color: @light-font-color;
        }
      }
      .active {
        background-color: #E6E3FC;
        border-color: @main-color;
        .it-text {
          color: @main-color;
        }
      }
    }
  }
}

</style>
