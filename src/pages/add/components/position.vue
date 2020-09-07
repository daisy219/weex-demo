<script>
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/07
 * desc: 弹出层-位置
 */
import { positionList } from '@/service/add';

export default {
  name: 'add-tab-position',
  data() {
    return {
      positionList: positionList,
      currentItem: '区域',
      currentIt: '',
    };
  },
  methods: {
    chooseItem(item) {
      if (this.currentItem !== item) {
        this.currentItem = item;
        this.currentIt = '';
      }
    },

    chooseIt(it) {
      if (it === '不限') {
        this.$emit('confirm', it);
      }
      this.currentIt = it;
    },

    chooseI(i) {
      this.$emit('confirm', i);
    },
  },

};
</script>

<template>
<div class="add-tab-position-page">
  <div class="box">
    <div v-for="item in positionList" :key="item.value" @click="chooseItem(item.value)">
      <text :class="['text', {'active': item.value === currentItem}]">{{ item.value }}</text>
    </div>
  </div>
  <div class="box it-box">
    <div v-for="it in (positionList.find(a => a.value === currentItem) || {}).children" :key="it.value" @click="chooseIt(it.value)">
      <text :class="['text', {'active': it.value === currentIt}]">{{ it.value }}</text>
    </div>
  </div>
  <div v-if="currentIt" class="box i-box">
    <div v-for="i in ((positionList.find(a => a.value === currentItem) || {}).children || []).find(b => b.value === currentIt).children" :key="i.value" @click="chooseI(i.value)">
      <text :class="['text']">{{ i.value }}</text>
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
@import '~@/assets/style/const.less';
@import '~@/assets/style/common.less';
.add-tab-position-page {
  flex-direction: row;
  .box {
    flex: 1;
    height: 600px;
    align-items: center;
    padding-top: 20px;
    .text {
      font-size: 32px;
      line-height: 60px;
      color: @gray-font-color;
      font-weight: bold;
    }
    .active {
      color: @main-color;
    }
  }
  .it-box {
    background-color: @gray-background-color;
  }
  .i-box {
    background-color: @light-background-color;
  }
}
</style>
