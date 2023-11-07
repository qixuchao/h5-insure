<template>
  <div class="com-type-filter">
    <div @click="showPop = true">
      <span>{{ currentText }} </span> <van-icon name="arrow-down" />
    </div>
  </div>
  <van-overlay :show="showPop" style="background-color: transparent" @click="showPop = false">
    <div class="wrapper">
      <div
        v-for="item in types.filter((i) => +i.value !== +current)"
        :key="item.label"
        class="block"
        @click="changeAndClose(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </van-overlay>
</template>
<script lang="ts" setup name="TypeFilter">
import { ref, computed } from 'vue';
import { useVModel } from '@vueuse/core';
import { RISK_TYPE, RISK_CATEGORY } from '@/common/constants/trial';

const PERIOD_TYPE = [
  //  长短险类型
  {
    label: '全部',
    value: '',
  },
  {
    label: '长期',
    value: 1,
  },
  {
    label: '短期',
    value: 3,
  },
];

const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  items: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(['change', 'update:modelValue']);
const current = useVModel(props, 'modelValue', emit);

const showPop = ref(false);
const types = computed(() => {
  switch (+props.type) {
    case 1:
      return [
        {
          label: '全部',
          value: '',
        },
        ...RISK_TYPE,
      ];
    case 2:
      return [
        {
          label: '全部',
          value: '',
        },
        ...RISK_CATEGORY,
      ];
    default:
      return PERIOD_TYPE;
  }
});
const currentText = computed(() => {
  const type = types.value.find((t) => +t.value === +current.value);
  console.log('types', types.value, '当前type：', type);
  return type ? type.label : '全部';
});
const changeAndClose = (v: { label: string; value: number }) => {
  current.value = v.value;
  emit('change', v);
};
</script>
<style lang="scss" scoped>
.com-type-filter {
  width: 140px;
  height: 76px;
  line-height: 72px;
  position: absolute;
  text-align: center;
  top: 20px;
  left: 40px;
  color: var(--zaui-text-weak);
  border-radius: 4px;
}
.wrapper {
  position: absolute;
  width: 150px;
  left: 70px;
  top: 120px;
  height: auto;
  padding: 5px 0;
  box-shadow: var(--zaui-shadow);
  background-color: #fafafa;
  border-radius: 20px;
}

.block {
  width: 150px;
  height: 60px;
  text-align: center;
  color: var(--zaui-text);
  &:active {
    background-color: var(--zaui-brand-1);
  }
}
</style>
