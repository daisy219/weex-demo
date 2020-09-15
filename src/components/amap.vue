<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/15
 * desc: 地图组件
 */
import Utils from '@/utils';

export default {
  name: 'amap',
  data() {
    return {

    };
  },
  computed: {
    pageHeight() {
      return Utils.uiStyle.pageHeight(124);
    },
  },
  props: {
    center: { type: Array, default() { return [121.59996, 31.197646]; } }, // 地图中心点坐标
    circle: { type: Object, default() { return {}; } }, // 大圆配置
    mapTexts: { type: Array, default() { return [121.59996, 31.197646]; } }, // 展示的标签文字
  },

  created() {

  },

  methods: {

  },

};
</script>

<template>
<div class="amap-page" :style="pageHeight">
  <!-- 地图组件 -->
  <el-amap class="amap-box" :vid="'amap-vue'" :center="center" :zoom="12">
    <el-amap-marker vid="component-marker" :position="[121.59996, 31.197646]"></el-amap-marker>
    <el-amap-text v-for="(text, index) in mapTexts" :key="index" v-bind="text"/>
    <el-amap-circle v-bind="circle"/>
  </el-amap>
</div>
</template>

<style lang="less">
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.amap-logo {
  opacity: 0;
}
.amap-copyright {
  opacity: 0;
  .amap-mcode {
    display: none;
  }
}
.amap-marker-content {
  .amap-overlay-text-container {
    background-color: @main-color;
    color: @white-color;
    font-size: 24px;
  }
}
</style>
