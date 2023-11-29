<template>
  <ProFieldV2 :class="{ 'com-form-item': true, 'com-form-item--view': isView }" :is-link="!isView">
    <template #input>
      <CustomInput
        :name="name"
        :model-value="currentModelValue"
        :is-view="isView"
        :field-value-view="fieldValueView"
        :placeholder="$attrs.placeholder"
      >
        <template #value-view="slotParams"><slot name="value-view" v-bind="slotParams || {}" /></template>
        <template v-if="slots?.help" #help>
          <slot name="help"></slot>
        </template>
      </CustomInput>
    </template>
    <!-- 继承 slots -->
    <template v-for="slotName in noValueViewSlots" :key="slotName" #[slotName]="slotParams">
      <slot :name="slotName" v-bind="slotParams || {}" />
    </template>
  </ProFieldV2>
</template>

<script lang="ts" setup name="ProFormItem">
import ProFieldV2 from '../ProFieldV2.vue';
import CustomInput from './CustomInput.vue';

const slots = useSlots();

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

// 非默认 slots
const noValueViewSlots = computed(() => Object.keys(slots).filter((key) => !['value-view', 'help'].includes(key)));

const currentModelValue = computed(() => props.modelValue);
</script>
<style lang="scss">
.van-cell.com-form-item {
  .van-field__value {
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
}
</style>
