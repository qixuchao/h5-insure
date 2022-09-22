<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-22 14:49:36
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-22 20:17:20
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/compositionProposal/components/ThemeSelect/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup v-model:show="show" class="theme-select-wrap" title="选择计划书封面">
    <div class="popup-body">
      <div class="">
        <VanRadioGroup v-model="checked">
          <VanCellGroup inset>
            <div class="radio-img" @click="onCheck('1')"><VanRadio :name="1" /></div>
          </VanCellGroup>
        </VanRadioGroup>
      </div>
    </div>
    <div class="footer">
      <VanButton type="primary" block>确定</VanButton>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="themeSelect">
import { withDefaults } from 'vue';

interface Props {
  show: boolean;
  themeList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
});

const { show } = unref(props);
const checked = ref<string>();

const onCheck = (value: string) => {
  checked.value = value;
};

watch(
  () => props,
  () => {
    console.log('props', props);
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.theme-select-wrap {
}
</style>
