<template>
  <div ref="root" class="com-type-filter">
    <div @click="form.show = true">
      <span>{{ value }}</span
      ><van-icon name="arrow-down" />
    </div>
  </div>
  <van-overlay :show="form.show" style="background-color: transparent" @click="form.show = false">
    <!-- <Teleport :to="root"> -->
    <div class="wrapper">
      <div class="block" @click="changeAndClose(1)">长期</div>
      <div class="block" @click="changeAndClose(2)">短期</div>
    </div>
    <!-- </Teleport> -->
  </van-overlay>
</template>
<script lang="ts" setup name="TypeFilter">
import { ref } from 'vue';
import { useVModel } from '@vueuse/core';

const props = defineProps({
  type: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '0',
  },
  items: {
    type: Array,
    default: () => [],
  },
});
const root = ref();
const emit = defineEmits(['change']);
const value = useVModel(props, 'modelValue', emit);

const form = ref({
  value: '',
  show: false,
});
const changeAndClose = (v: number) => {
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
  width: 120px;
  left: 80px;
  top: 120px;
  height: auto;
  box-shadow: var(--zaui-shadow);
  background-color: #fafafa;
  border-radius: 4px 4px 8px 8px;
}

.block {
  width: 120px;
  height: 60px;
  text-align: center;
  &:active {
    background-color: var(--zaui-brand-1);
  }
}
</style>
