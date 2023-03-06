<template>
  <div style="width: 100%" class="input">
    <span v-if="fieldValueView" class="displayValue">{{ fieldValueView }}</span>
    <span v-else class="placeholder">{{ $attrs.placeholder }}</span>
  </div>
</template>
<script lang="ts" setup>
import { useCustomFieldValue } from '@vant/use';
import { inject } from 'vue';
import { VAN_PRO_FORM_KEY } from '../../utils';

const attrs = useAttrs();

const props = defineProps({
  /**
   * 查看模式的值
   */
  fieldValueView: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Boolean, Object, Number],
    default: '',
  },
});

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

useCustomFieldValue(() => {
  if (formState.formData && attrs.name) {
    formState.formData[attrs.name as string] = props.modelValue;
  }
  return props.modelValue;
});
</script>
