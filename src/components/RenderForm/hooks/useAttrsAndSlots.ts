import { useAttrs, useSlots } from 'vue';
import type { FieldProps } from 'vant';
import { filterAttrs, filterSlots, handleSlots } from '../utils';

interface FormItemParams {
  placeholderType: 'input' | 'select';
}

const prefixMap = {
  input: '请输入',
  select: '请选择',
};

export default function useAttrsAndSlots({ placeholderType }: FormItemParams = { placeholderType: 'select' }) {
  const attrs = useAttrs();
  const slots = useSlots();
  const [filedAttrs, componentAttrs] = filterAttrs(attrs);
  const [filedSlots, componentSlots] = filterSlots(handleSlots(slots, attrs.slots));

  const placeholder = computed(() => {
    return attrs.placeholder || `${prefixMap[placeholderType]}${attrs.label || ''}`;
  });

  return {
    filedAttrs: {
      ...filedAttrs,
      placeholder: placeholder.value,
    } as FieldProps,
    filedSlots,
    attrs: {
      title: (filedAttrs as FieldProps).label,
      ...componentAttrs,
    },
    slots: componentSlots,
  };
}
