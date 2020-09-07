<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/07
 * desc: 弹出层-方式
 */
import { wholeTypeList, joinTypeLIst } from '@/service/add';
export default {
  name: 'add-tab-type',
  data() {
    return {
      wholeTypeList: wholeTypeList,
      joinTypeLIst: joinTypeLIst,
      currentList: [],
    };
  },

  props: {
    // msg: {type: String, default: ''}
  },

  created() {

  },

  methods: {
    selectType(item) {
      this.currentList.push(item.key);
    },

  },

};
</script>

<template>
<div class="add-tab-type-page">
  <div class="type-box">
    <text class="title">整租</text>
    <div class="direction-row">
      <div :class="['select-box', {'active': currentList.includes(item.key)}]" v-for="item in wholeTypeList" :key="item.value" @click="selectType(item)"><text class="label">{{ item.label }}</text></div>
    </div>
  </div>
  <div class="type-box">
    <text class="title">合租</text>
    <div class="direction-row">
      <div :class="['select-box', {'active': currentList.includes(item.key)}]" v-for="item in joinTypeLIst" :key="item.value"><text class="label" @click="selectType(item)">{{ item.label }}</text></div>
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.add-tab-type-page {
  padding: 0 40px;
  .title {
    font-size: 40px;
    font-weight: bold;
    line-height: 100px;
    border-bottom-color: @border-color;
  }
  .type-box {
    margin-bottom: 20px;
    .select-box {
      border-color:  @border-color;
      border-width: 1px;
      border-radius: 4px;
      margin-right: 20px;
      padding: 6px 20px;
      .label {
        font-size: 30px;
        line-height: 50px;
      }
    }
    .active {
      border-color:  @main-color;
      .label {
        color: @main-color;
      }
    }
  }
}
</style>
