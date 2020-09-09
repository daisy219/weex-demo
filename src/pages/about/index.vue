<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/08/24
 * desc: 业主
 */
import { WxcButton } from 'weex-ui';

export default {
  name: 'about',
  components: { WxcButton },
  data () {
    return {
      btnStyle: {
        background: '#82529d',
      }
    };
  },
  methods: {
    phoneClick() {

    },
  },
};
</script>
<template>
  <div class="about-index-page">
    <div class="title-part">
      <text class="title">业主委托</text>
      <image class="title-image" src="/assets/images/about/share.png"/>
    </div>
    <image style="width:750px; height:400px" src="/assets/images/home/hot3.jpg"/>
    <div class="btn-row">
      <div class="btn">
        <wxc-button text="电话咨询" size="big" type="yellow" @wxcButtonClicked="phoneClick"></wxc-button>
      </div>
      <div class="btn">
        <wxc-button text="委托相遇" size="big" :btnStyle="btnStyle" type="yellow" @wxcButtonClicked="phoneClick"></wxc-button>
      </div>
    </div>
    <div class="content">
      <text class="content-title">什么是相寓</text>
      <div>
        <text class="content-text">相寓是我爱我家集团旗下房屋资产管理品牌</text>
        <text class="content-text">业务运营始于2001年，覆盖全国14个城市</text>
        <text class="content-text">七大服务保障体系为核心，自由贴心的一张是房屋委托</text>
      </div>
      <text class="content-title">为什么选择相寓</text>
      <div class="why-content">
        <div class="why-content-top">
          <image style="width:30px; height:30px" src="/assets/images/about/line.png"/>
          <text class="why-title">自己出租</text>
          <image style="width:30px; height:30px" src="/assets/images/about/line.png"/>
          <image class="vs-image" src="/assets/images/about/vs.png"/>
          <image style="width:30px; height:30px" src="/assets/images/about/line.png"/>
          <text class="why-title">选择我们</text>
          <image style="width:30px; height:30px" src="/assets/images/about/line.png"/>
        </div>
        <div class="why-content-inner">
          <div class="box">
            <image class="image" src="/assets/images/about/q1.png"/>
            <text>房屋空置无进账</text>
            <text>寻遍租客无人来</text>
          </div>
          <div class="box">
            <image class="image" src="/assets/images/about/q4.png"/>
            <text>海量租客出房快</text>
            <text>专人带着省时间</text>
          </div>
        </div>
        <div class="why-content-inner">
          <div class="box">
            <image class="image" src="/assets/images/about/q2.png"/>
            <text>房屋空置无进账</text>
            <text>寻遍租客无人来</text>
          </div>
          <div class="box">
            <image class="image" src="/assets/images/about/q5.png"/>
            <text>海量租客出房快</text>
            <text>专人带着省时间</text>
          </div>
        </div>
        <div class="why-content-inner">
          <div class="box">
            <image class="image" src="/assets/images/about/q3.png"/>
            <text>房屋空置无进账</text>
            <text>寻遍租客无人来</text>
          </div>
          <div class="box">
            <image class="image" src="/assets/images/about/q6.png"/>
            <text>海量租客出房快</text>
            <text>专人带着省时间</text>
          </div>
        </div>

      </div>

      <text class="content-title">委托流程</text>
      <div class="align-center">
        <text class="info">专业团队，规范省心，让您每一步心中有数</text>
        <div class="direction-row align-center">
          <div class="align-center">
            <image style="width:100px; height:100px" src="/assets/images/about/step1.png"/>
            <text class="content-text">委托咨询</text>
          </div>
          <image style="width:50px; height:10px" src="/assets/images/about/dot.png"/>
          <div class="align-center">
            <image style="width:100px; height:100px" src="/assets/images/about/step2.png"/>
            <text class="content-text">定制方案</text>
          </div>
          <image style="width:50px; height:10px" src="/assets/images/about/dot.png"/>
          <div class="align-center">
            <image style="width:100px; height:100px" src="/assets/images/about/step3.png"/>
            <text class="content-text">签约出租</text>
          </div>
          <image style="width:50px; height:10px" src="/assets/images/about/dot.png"/>
          <div class="align-center">
            <image style="width:100px; height:100px" src="/assets/images/about/step4.png"/>
            <text class="content-text">坐享收益</text>
          </div>
        </div>
      </div>

    </div>
    

  </div>
</template>
<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';

.about-index-page {
  .title-part {
    align-items: center;
    position: relative;
    width: @common-max-width;
    .title {
      font-size: 38px;
      line-height: 80px;
      font-weight: bold;
    }
    .title-image {
      width:46px;
      height:46px;
      position: absolute;
      top: 20px;
      right: 30px;
    }
  }
  .btn-row {
    flex-direction: row;
    .btn {
      padding: 20px;
      flex: 1;
    }
  }
  .content {
    padding: 0 20px;
    .content-title {
      font-size: 32px;
      line-height: 80px;
      font-weight: bold;
    }
    .content-text {
      font-size: 28px;
      line-height: 50px;
      color: @light-font-color;
    }
    .info {
      font-size: 30px;
      color: @gray-font-color;
      line-height: 80px;
    }
    .why-content {
      align-items: center;
      .why-content-top {
        flex-direction: row;
        align-items: center;
        .why-title {
          font-size: 30px;
          margin: 0 10px;
          font-weight: bold;
          color: @gray-font-color;
        }
        .vs-image {
          width:50px;
          height:50px;
          margin: 0 20px;
        }
      }
      .why-content-inner {
        width: 550px;
        flex-direction: row;
        justify-content: space-between;
        .box {
          align-items: center;
          margin-top: 30px;
          .image {
            width:100px;
            height:100px;
            margin-bottom: 30px;
          }
          p {
            font-size: 26px;
            color: @light-font-color;
            line-height: 40px;
          }
        }
      }
    }

  }
}

</style>
