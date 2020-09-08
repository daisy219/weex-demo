<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/08
 * desc: 多选卡
 */

export default {
  name: 'multiplePart',
  data() {
    return {
      currentList: [],
    };
  },

  props: {
    title: {type: String, default: ''},
    resetFlag: {type: Boolean, default: true},
    list: {type: Array, default() { return []; }},
  },

  created() {

  },
  watch: {
    resetFlag() {
      this.currentList = [];
    },
  },

  methods: {
    selectType(item) {
      this.currentList.push(item.key);
      this.$emit('changeValue', this.currentList, this.title);
    },
  },

};
</script>

<template>
<div class="multiple-part-page">
  <text class="title">{{ title }}</text>
  <div class="direction-row">
    <div :class="['select-box', {'active': currentList.includes(item.key)}]" v-for="item in list" :key="item.value" @click="selectType(item)"><text class="label">{{ item.label }}</text></div>
  </div>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.multiple-part-page {
  margin-bottom: 20px;
  .title {
    font-size: 40px;
    font-weight: bold;
    line-height: 100px;
    border-bottom-color: @border-color;
  }
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
</style>
