import { useAttrs, useSlots } from 'vue';
import type { FieldProps } from 'vant';
import { filterAttrs, filterSlots } from '../utils';

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
  const [filedSlots, componentSlots] = filterSlots(slots);

  const placeholder = computed(() => {
    return attrs.placeholder || `${prefixMap[placeholderType]}${attrs.label || ''}`;
  });

  return {
    filedAttrs: {
      placeholder: placeholder.value,
      ...filedAttrs,
    } as FieldProps,
    filedSlots,
    attrs: {
      title: (filedAttrs as FieldProps).label,
      ...componentAttrs,
    },
    slots: componentSlots,
  };
}
