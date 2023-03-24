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

interface FieldAttrs extends FieldProps {
  visible?: boolean;
}

export default function useAttrsAndSlots({ placeholderType }: FormItemParams = { placeholderType: 'select' }) {
  const attrs = useAttrs();
  const slots = useSlots();

  const state = reactive({
    filedAttrs: {} as FieldAttrs,
    filedSlots: {},
    attrs: {},
    slots: {},
  });

  watch(
    () => attrs,
    () => {
      const [filedAttrs, componentAttrs] = filterAttrs(attrs) as [FieldProps, Data];
      state.filedAttrs = {
        ...filedAttrs,
        placeholder: (attrs.placeholder as string) || `${prefixMap[placeholderType]}${attrs.label || ''}`,
      };
      state.attrs = {
        title: `请选择${filedAttrs.label}`,
        ...componentAttrs,
      };
    },
    {
      deep: true,
      immediate: true,
    },
  );

  watch(
    [() => slots, () => attrs.slots],
    (val) => {
      const [filedSlots, componentSlots] = filterSlots(handleSlots(slots, attrs.slots));
      state.filedSlots = filedSlots || {};
      state.slots = componentSlots || {};
    },
    {
      deep: true,
      immediate: true,
    },
  );

  return state;
}
