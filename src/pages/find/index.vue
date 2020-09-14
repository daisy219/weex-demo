<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/24
 * desc: 找房
 */
import Utils from '@/utils';
import DetailCardAcross from '@/components/card/detailCardAcross';

import { likeList } from '@/service/home.js';
import { filterList } from '@/service/find.js';
import { WxcPopup, WxcButton } from 'weex-ui';
import { resetBtnStyle, resetBtnTextStyle, confirmBtnSyle } from '@/const/config';

export default {
  name: 'find',
  components: { WxcPopup, DetailCardAcross, WxcButton },
  data () {
    return {
      center: [121.59996, 31.197646],
      circle: {
        center: [121.59996, 31.197646],
        radius: 2000,
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

      currentType: '',
      currentHouseType: '',
      currentDate: '',
    };
  },
  computed: {
    pageHeight() {
      return Utils.uiStyle.pageHeight(124);
    },
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
      this.currentType = '';
      this.currentHouseType = '';
      this.currentDate = '';
    },
    confirm() {

    },
  },
};
</script>
<template>
  <div class="find-index-page" :style="pageHeight">
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
    <el-amap class="amap-box" :vid="'amap-vue'" :center="center" :zoom="12">
      <el-amap-circle
        :center="circle.center" :radius="circle.radius" :fill-opacity="circle.fillOpacity" :events="circle.events"
        :stroke-color="circle.strokeColor" :fill-color="circle.fillColor"/>
    </el-amap>

    <!-- 弹出层 -->
    <wxc-popup class="wxc-popup-find"
      :show="popupShow"
      @wxcPopupOverlayClicked="popupOverlayBottomClick"
      pos="bottom"
      :height="1000">
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

    <wxc-popup class="wxc-popup-find-right"
      :show="filterShow"
      @wxcPopupOverlayClicked="popupOverlayRightClick"
      pos="right"
      :width="400">
      <scroller>
        <div v-for="item in filterList" :key="item.title">
          <text class="title">{{ item.title }}</text>
          <div class="direction-row">
            <div class="it" v-for="it in item.list" :key="it">
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
    z-index: 9;
    top: 40px;
    left: 30px;
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
}
.wxc-popup-find {
  .wxc-popup {
    padding: 20px;
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
}
.wxc-popup-find-right {
  .wxc-popup {
    z-index: 10;
    padding: 20px;
    .title {
      font-size: 40px;
      font-weight: bold;
      line-height: 100px;
    }
    .it {
      margin: 0 10px;
      background-color: @light-background-color;
      border-radius: 4px;
      height: 60px;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      .it-text {
        font-size: 26px;
        color: @light-font-color;
      }
    }
  }
}
.amap-logo {
  opacity: 0;
}
.amap-copyright {
  opacity: 0;
  .amap-mcode { 
    display: none;
  }
}
</style>
