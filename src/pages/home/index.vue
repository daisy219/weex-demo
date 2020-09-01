<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/24
 * desc: 首页
 */
import { WxcEpSlider, WxcButton } from 'weex-ui';
import { homeMenuList } from '@/const/home.js';
import { homeList, mapInfo, lifeList, newsList, likeList } from '@/service/home.js';

import DetailCardStand from '@/components/card/detailCardStand';
import DetailCardAcross from '@/components/card/detailCardAcross';
import MapCard from '@/components/card/mapCard';
import BriefCard from '@/components/card/briefCard';

export default {
  name: 'home',
  components: { WxcEpSlider, DetailCardStand, MapCard, BriefCard, DetailCardAcross, WxcButton },
  data () {
    return {
      place: '上海',
      sliderId: 1,
      cardLength: 2,
      bannerList: [1, 2],
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
    };
  },
  methods: {
    wxcButtonClicked() {

    },
  },
};
</script>
<template>
  <div class="home-index-page">
    <div class="top-part clearfix">
      <div class="search">
        <text class="place">{{ place }}</text>
        <image style="width:30px; height:30px" src="/assets/images/home/bottom-solid-arrow.png"/>
        <div class="line"></div>
        <image style="width:30px; height:30px" src="/assets/images/home/search.png"/>
        <text class="info">您想住哪里？</text>
      </div>
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
      <div class="direction-row">
        <detail-card-stand v-for="(item, index) in homeList" :key="index" :card-info="item"/>
      </div>
    </div>

    <div class="common-part">
      <div class="home-title">
        <div class="direction-row align-end">
          <text class="title">相遇生活</text>
          <text class="desc">美好青年社区</text>
        </div>
        <image style="width:30px; height:30px" src="/assets/images/home/right-arrow.png"/>
      </div>
      <div class="direction-row">
        <brief-card v-for="(item, index) in lifeList" :key="index" :card-info="item"/>
      </div>
    </div>

    <div class="common-part">
      <div class="home-title">
        <div class="direction-row align-end">
          <text class="title">相遇故事</text>
          <text class="desc">新闻大事记</text>
        </div>
        <image style="width:30px; height:30px" src="/assets/images/home/right-arrow.png"/>
      </div>
      <div class="direction-row">
        <brief-card v-for="(item, index) in newsList" :key="index" :card-info="item"/>
      </div>
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

  </div>
</template>
<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';

.home-index-page {
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
    .search {
      margin-right: 30px;
      background: @white-color;
      border-radius: 4px;
      flex-direction: row;
      flex: 7;
      align-items:center;
      .place {
        padding: 0 20px;
        justify-content: center;
        line-height: 70px;
      }
      .line {
        height: 40px;
        width: 1px;
        margin: 0 20px;
        background-color: #000;
      }
      .info {
        color: @light-font-color;
        line-height: 70px;
        font-size: 28px;
        padding-left: 20px;
      }
    }
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
