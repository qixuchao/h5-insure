<template>
  <div class="custom-input-wrap">
    <slot v-if="fieldValueView || isView" name="value-view" :value="fieldValueView">
      <ValueView :value="fieldValueView" />
    </slot>
    <span v-else class="placeholder">{{ $attrs.placeholder }}</span>

    <span v-if="slots?.help" class="help">
      <slot name="help"></slot>
    </span>
  </div>
</template>
<script lang="ts" setup>
import { useCustomFieldValue } from '@vant/use';
import { inject } from 'vue';
import ValueView from './ValueView.vue';
import { VAN_PRO_FORM_KEY } from '../../utils';

const attrs = useAttrs();
const slots = useSlots();

const props = defineProps({
  /**
   * 查看模式的值
   */
  fieldValueView: {
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

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

useCustomFieldValue(() => {
  // if (formState?.formData && attrs.name) {
  //   formState.formData[attrs.name as string] = props.modelValue;
  // }
  return props.modelValue;
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scope>
.custom-input-wrap {
  width: 100%;
  margin: 0 0 14px 0;
  text-align: right;
  display: flex;
  flex-direction: column;
  .help {
    height: 37px;
    font-size: $zaui-font-size-spec;
    font-weight: 400;
    color: #999999;
  }
}
</style>
