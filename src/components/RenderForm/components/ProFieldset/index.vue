<template>
  <slt />
</template>

<script lang="ts" setup name="ProFiled">
import { withDefaults, useAttrs, useSlots } from 'vue';

type RuleType = 'phone' | '';

interface Props {
  title: {
    type: string;
    default: '';
  };
}

const attrs = useAttrs();
// const emits = defineEmits(['click']);
const props = defineProps<Props>();

const placeholder = computed(() => {
  return attrs.placeholder || `请选择${attrs.label}`;
});

// const componentName = computed(() => {
//   return {
//     'Calendar'
//   }[type]
// });

// import { formatRule } from './utils';

// interface Props {
//   placeholder?: string;
//   label: string;
//   title?: string;
//   block?: boolean;
//   isLink?: boolean;
//   rules?: any[];
//   required?: boolean;
//   isView?: boolean;
//   validateType?: Array<string>;
//   formatter?: (val: string) => string;
//   customClass?: string;
//   errorMessage?: string;
// }

// const slot = useSlots();
// const emits = defineEmits(['click']);
// const props = withDefaults(defineProps<Props>(), {
//   placeholder: '',
//   label: '',
//   title: '',
//   block: false,
//   isLink: false,
//   rules: () => [],
//   required: false,
//   isView: false,
//   validateType: () => [],
//   formatter: (val) => val,
//   customClass: '',
//   errorMessage: '',
// });

// const formProps: any = inject('formProps') || {};

// const dealData = () => {};

// const currentPlaceholder = computed(() => {
//   return props.placeholder || `请输入${props.label}`;
// });

// const currentRules = computed(() => {
//   let rules: any[] = [];
//   if (props.rules && props.rules.length > 0) {
//     rules = [...props.rules];
//   }
//   if (props.required) {
//     rules = [
//       ...rules,
//       {
//         required: true,
//         message: props.errorMessage ? props.errorMessage : `${props.isLink ? '请选择' : '请输入'}${props.label}`,
//       },
//     ];
//   }
//   if (props.validateType && props.validateType.length > 0) {
//     rules = [...rules, ...props.validateType.map((type) => formatRule(type, props.label))];
//   }
//   return rules;
// });

// const handleClick = () => {
//   if (!props.isView && !formProps.isView) {
//     emits('click');
//   }
// };

// const showLink = computed(() => {
//   if (props.isView || formProps.isView) {
//     return false;
//   }
//   return props.isLink;
// });
</script>

<style lang="scss" scoped>
.com-pro-field {
  &.block {
    display: block;
    :deep(.van-field__control--custom) {
      justify-content: flex-start;
    }
  }
}
</style>
