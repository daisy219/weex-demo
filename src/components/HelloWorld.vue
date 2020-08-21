<template>
<div class="test">
  <text class="message">Now, let's use Vue.js to build your Weex app.</text>
  <p>111</p>
  <div class="ul">
    <div class="aaa">2323</div>
    <div>2323</div>
    <div>2323</div>
  </div>
  <wxc-button text="Open Popup"></wxc-button>
</div>

</template>
<script>
import { WxcButton } from 'weex-ui';
export default {
  components: { WxcButton },
}
</script>
<style lang="less">
</style>
