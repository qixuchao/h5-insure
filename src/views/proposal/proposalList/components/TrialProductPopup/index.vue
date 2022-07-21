<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-20 18:07:20
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-20 18:42:40
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/proposalList/components/TrialProductPopup/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-trial-product-wrapper">
    <VanPopup v-model:show="state.isShow">
      <div class="container">
        <div class="popup-header">
          <span class="clear-all"> 清空选项 </span>
          <span class="title"> 已选产品 </span>
          <span>X</span>
        </div>
        <div class="popup-body"></div>
      </div>
    </VanPopup>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';

interface Props {
  isShow: boolean;
}

interface State {
  isShow: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isShow: true,
});

const state = ref<State>({
  isShow: props.isShow,
});
</script>

<style lang="scss" scoped>
.com-trial-product-wrapper {
}
</style>
