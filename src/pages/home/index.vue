<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/24
 * desc: 首页
 */
import { WxcEpSlider, WxcButton, WxcCity } from 'weex-ui';
import { homeMenuList } from '@/const/home.js';
import { homeList, mapInfo, lifeList, newsList, likeList } from '@/service/home.js';

import DetailCardStand from '@/components/card/detailCardStand';
import DetailCardAcross from '@/components/card/detailCardAcross';
import MapCard from '@/components/card/mapCard';
import BriefCard from '@/components/card/briefCard';
import SearchInput from '@/components/searchInput';
import SearchPage from '@/components/realSearchInput';

export default {
  name: 'home',
  components: {
    WxcEpSlider,
    DetailCardStand,
    MapCard,
    BriefCard,
    DetailCardAcross,
    WxcButton,
    SearchInput,
    WxcCity,
    SearchPage,
  },
  data () {
    return {
      place: '上海',
      sliderId: 1,
      cardLength: 3,
      bannerList: [1, 2, 3],
      menuList: homeMenuList,
      cardSize: {
        width: 400,
        height: 300,
        spacing: 0,
        scale: 0.8,
      },
      homeList: homeList,
      mapInfo: mapInfo,
      lifeList: lifeList,
      newsList: newsList,
      likeList: likeList,
      chooseCityShow: false,
      // 城市选择组件参数
      animationType: 'push',
      currentCity: '上海',
      cityStyleType: 'list',
      location: '定位中',
    };
  },
  mounted() {
    // 模拟定位
    setTimeout(() => {
      this.location = '上海';
    }, 500);
  },
  methods: {
    wxcButtonClicked() {

    },

    chooseCity() {
      this.cityStyleType = 'list';
      this.$refs['wxcCity'].show();
    },
    // showGroupCity() {
    //   this.cityStyleType = 'group'
    //   this.$refs['wxcCity'].show();
    // },
    citySelect(e) {
      this.currentCity = e.item.name;
    },
    onInput(e) {
    },
    inputClick() {
      this.$refs['real-search-page'].show();
    },
  },
};
</script>
<template>
  <div class="home-index-page">
    <div class="top-part clearfix">
      <search-input :place="currentCity" :text="'您想住哪里？'" @chooseCity="chooseCity" @inputClick="inputClick"/>
      <div class="message">
        <image style="width:60px; height:60px" resize="stretch" src="/assets/images/home/message.png"/>
      </div>
    </div>
    <div class="banner-part">
      <wxc-ep-slider :slider-id="sliderId" :card-length="cardLength" :card-s="cardSize" :select-index="0" :auto-play="true" :interval="2400">
      <!--自动生成demo-->
      <div v-for="(v, index) in bannerList" :key="index" :slot="`card${index}_${sliderId}`" :class="['slider',`slider${index}`]">
        <image style="width:400px; height:300px;border-radius: 8px;" resize="stretch" :src="`/assets/images/home/banner${index + 1}.jpg`"/>
      </div>
      </wxc-ep-slider>
    </div>
    <div class="menu-part">
      <div v-for="(v, index) in menuList" :key="index" class="menu-item">
        <image style="width:100px; height:100px;" resize="stretch" :src="`/assets/images/home/${v.url}.png`"/>
        <text class="menu-title">{{ v.title }}</text>
      </div>
    </div>
    <div class="hot-part common-part">
      <div class="home-title">
        <text class="title">热租居室</text>
        <image style="width:30px; height:30px" src="/assets/images/home/right-arrow.png"/>
      </div>
      <div class="hot-card">
        <div class="hot-card-item" style="height: 300px">
          <div class="tag">一居</div>
          <text class="hot-card-item-title">你的独立日</text>
          <text class="hot-card-item-info">一人畅享 拒绝束缚</text>
        </div>
        <div style="justify-content: space-between;">
          <div class="hot-card-item">
            <div class="tag">二居</div>
            <text class="hot-card-item-title">爱就宅一起</text>
            <text class="hot-card-item-info">生活相伴 完整体验</text>
          </div>
          <div class="hot-card-item">
            <div class="tag">三居</div>
            <text class="hot-card-item-title">都市幸福家</text>
            <text class="hot-card-item-info">温暖时刻 欢乐满屋</text>
          </div>
        </div>
      </div>
    </div>
    <div class="near-card common-part">
      <div class="home-title">
        <text class="title">附近地图</text>
        <div class="direction-row align-end">
          <text class="info">徐汇区衡山路</text>
          <image style="width:30px; height:30px" src="/assets/images/home/update.png"/>
        </div>
      </div>
      <map-card :map-info="mapInfo"/>
    </div>

    <div class="common-part">
      <div class="home-title">
        <text class="title">相遇HOME-整租</text>
        <image style="width:30px; height:30px" src="/assets/images/home/right-arrow.png"/>
      </div>
      <scroller class="direction-row" scroll-direction="horizontal">
        <detail-card-stand v-for="(item, index) in homeList" :key="index" :card-info="item"/>
      </scroller>
    </div>

    <div class="common-part">
      <div class="home-title">
        <div class="direction-row align-end">
          <text class="title">相遇生活</text>
          <text class="desc">美好青年社区</text>
        </div>
        <image style="width:30px; height:30px" src="/assets/images/home/right-arrow.png"/>
      </div>
      <scroller class="direction-row" scroll-direction="horizontal">
        <brief-card v-for="(item, index) in lifeList" :key="index" :card-info="item"/>
      </scroller>
    </div>

    <div class="common-part">
      <div class="home-title">
        <div class="direction-row align-end">
          <text class="title">相遇故事</text>
          <text class="desc">新闻大事记</text>
        </div>
        <image style="width:30px; height:30px" src="/assets/images/home/right-arrow.png"/>
      </div>
      <scroller class="direction-row" scroll-direction="horizontal">
        <brief-card v-for="(item, index) in newsList" :key="index" :card-info="item"/>
      </scroller>
    </div>

    <div class="common-part">
      <div class="home-title">
        <div class="direction-row">
          <text class="title">猜你喜欢</text>
        </div>
        <image style="width:30px; height:30px" src="/assets/images/home/right-arrow.png"/>
      </div>
      <detail-card-across v-for="(item, index) in likeList" :key="index" :card-info="item"/>
    </div>
    <wxc-button text="查看更多房源" type="white" @wxcButtonClicked="wxcButtonClicked"></wxc-button>

    <!-- 选择城市页 -->
    <wxc-city ref="wxcCity"
      :animationType="animationType"
      :currentLocation="location"
      :cityStyleType="cityStyleType"
      @wxcCityItemSelected="citySelect"
      @wxcCityOnInput="onInput" />

    <!-- 搜索页 -->
    <search-page ref="real-search-page"/>
  </div>
</template>
<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';

.home-index-page {
  align-items: center;
  .common-part {
    width: @common-max-width;
    padding: 0 30px;
    justify-content: center;
    margin-bottom: 50px;
  }
  .home-title {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    .title {
      font-size: 40px;
      font-weight: bold;
    }
    .desc {
      font-size: 26px;
      margin-left: 10px;
      color: @light-font-color;
    }
    .info {
      font-size: 26px;
      margin-right: 10px;
      color: @light-font-color;
    }
  }
  .top-part {
    width: @common-max-width;
    padding: 20px;
    background: @main-color;
    flex-direction: row;
    align-items: center;

  }
  .banner-part {
    width: @common-max-width;
    padding: 20px 0;
    background-image: linear-gradient(to bottom, @main-color, @white-color);
    .slider {
      width: 400px;
      height: 300px;
      align-items: center;
      justify-content: center;
    }
  }
  .menu-part {
    width: @common-max-width;
    flex-direction: row;
    align-items: center;
    .menu-item {
      flex: 1;
      align-items: center;
      .menu-title {
        font-size: 30px;
        line-height: 80px;
      }
    }
  }
  .hot-part {
    .hot-card {
      flex-direction: row;
      justify-content: space-between;
      .hot-card-item {
        padding: 20px 30px;
        justify-content: flex-start;
        width: 330px;
        border-radius: 6px;
        background-color: @light-background-color;
        margin-bottom: 20px;
        position: relative;
        .hot-card-item-title {
          font-size: 30px;
          line-height: 50px;
        }
        .hot-card-item-info {
          font-size: 24px;
          line-height: 40px;
          color: @light-font-color;
        }
        .tag {
          position: absolute;
          top: 0;
          right: 30px;
          color: @white-color;
          background: @orange-color;
          font-size: 20px;
          align-items: center;
          padding: 5px 10px;
          border-bottom-right-radius: 6px;
          border-bottom-left-radius: 6px;
        }
      }
    }
  }
  .near-card {
    width: @common-max-width;
    padding: 0 30px;
  }
}
</style>
