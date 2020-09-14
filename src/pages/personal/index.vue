<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/24
 * desc: 我的
 */

export default {
  name: 'personal',
  data () {
    return {
      imageList: [
        {src: '/assets/images/home/hot2.jpg'},
        {src: '/assets/images/home/hot3.jpg'},
        {src: '/assets/images/home/hot1.jpg'},
      ],
    };
  },
};
</script>
<template>
  <div class="personal-index-page">
    <div class="top-part">
      <image class="top-image" src="/assets/images/personal/switch.png"/>
      <text class="top-text">切换为业主</text>
    </div>
    <div class="info-part">
      <div class="info">
        <text class="phone">188****9799</text>
        <text class="edit">点击编辑个人资料</text>
      </div>
      <image style="width: 130px; height: 130px;" src="/assets/images/personal/photo.png"/>
    </div>

    <div class="direction-row">
      <div class="one-box">
        <image style="width: 80px; height: 80px;" src="/assets/images/personal/one-personal.png"/>
        <text class="one-box-text">我的认证</text>
      </div>
      <div class="one-box">
        <image style="width: 80px; height: 80px;" src="/assets/images/personal/one-heart.png"/>
        <text class="one-box-text">我的关注</text>
      </div>
      <div class="one-box">
        <image style="width: 80px; height: 80px;" src="/assets/images/personal/one-calendar.png"/>
        <text class="one-box-text">我的约看</text>
      </div>
      <div class="one-box">
        <image style="width: 80px; height: 80px;" src="/assets/images/personal/one-box.png"/>
        <text class="one-box-text">我的红包</text>
      </div>
    </div>
    <!-- 轮播图 -->
     <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList" :key="img.src">
        <image style="width: 710px; height: 400px;" resize="cover" :src="img.src"></image>
      </div>
    </slider>

    <div class="title">我的家</div>
    <div class="direction-row">
      <div class="two-box">
        <image style="width: 80px; height: 80px;" src="/assets/images/personal/two-contract.png"/>
        <text class="two-box-text">我的合同</text>
      </div>
      <div class="two-box">
        <image style="width: 80px; height: 80px;" src="/assets/images/personal/two-key.png"/>
        <text class="two-box-text">智能门锁</text>
      </div>
      <div class="two-box">
        <image style="width: 80px; height: 80px;" src="/assets/images/personal/two-call.png"/>
        <text class="two-box-text">在线报修</text>
      </div>
      <div class="two-box">
        <image style="width: 80px; height: 80px;" src="/assets/images/personal/two-order.png"/>
        <text class="two-box-text">我的订单</text>
      </div>
    </div>

    <div class="more-line">
      <text class="text">客户服务</text>
      <image style="width:30px; height:30px" src="/assets/images/home/right-arrow.png"/>
    </div>
    <div class="more-line">
      <text class="text">更多</text>
      <image style="width:30px; height:30px" src="/assets/images/home/right-arrow.png"/>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.personal-index-page {
  padding: 20px 40px;
  .top-part {
    flex-direction: row;
    align-items: center;
    .top-image {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
    .top-text {
      font-size: 32px;
      color: @gray-font-color;
      line-height: 40px;
    }
  }
  .info-part {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
    .info {
      .phone {
        font-size: 34px;
        color: @gray-font-color;
        line-height: 50px;
      }
      .edit {
        font-size: 22px;
        line-height: 30px;
        background: @light-background-color;
        color: @light-font-color;
      }
    }
  }
  .title {
    font-size: 40px;
    line-height: 80px;
    font-weight: bold;
  }
  .one-box {
    flex: 1;
    align-items: center;
    margin-bottom: 30px;
    .one-box-text {
      font-size: 28px;
      line-height: 60px;
      color: @gray-font-color;
    }
  }
  .two-box {
    flex: 1;
    align-items: center;
    margin: 0 10px;
    margin-bottom: 30px;
    background: @light-background-color;
    padding: 10px 25px;
    border-radius: 4px;
    .two-box-text {
      font-size: 24px;
      line-height: 40px;
      color: @main-color;
    }
  }
  .more-line {
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: @border-color;
    border-bottom-width: 1px;
    padding: 20px 0;
    .text {
      font-size: 30px;
      color: @gray-font-color;
    }
  }
  .slider {
    height: 400px;
    .frame {
      width: 680px;
      height: 400px;
      position: relative;
    }
  }
}
</style>
