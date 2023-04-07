<template>
  <ProFieldV2 class="com-form-item" :is-link="!isView">
    <template #input>
      <CustomInput
        :name="name"
        :model-value="modelValue"
        :field-value-view="fieldValueView"
        :placeholder="$attrs.placeholder"
      />
    </template>
    <!-- 继承 slots -->
    <template v-for="slotName in Object.keys($slots)" :key="slotName" #[slotName]>
      <slot :name="slotName" />
    </template>
  </ProFieldV2>
</template>

<script lang="ts" setup name="ProFormItem">
import ProFieldV2 from '../ProFieldV2.vue';
import CustomInput from './CustomInput.vue';

const props = defineProps({
  /**
   * 查看模式的值
   */
  fieldValueView: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Boolean, Object, Number],
    default: '',
  },
});
</script>
<style lang="scss">
.van-cell.com-form-item .van-field__value {
  align-items: flex-start;
  .van-field__body {
    width: 100%;
  }
  .van-field__control--error {
    .placeholder {
      color: var(--van-field-input-error-text-color);
    }
  }
}
</style>
