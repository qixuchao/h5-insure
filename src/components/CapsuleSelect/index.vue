<!--
 * @Author: za-wusiqi wusiqi@zhongan.io
 * @Date: 2023-06-14 10:15:06
 * @Description: 胶囊选择器, 文本最好最长不要超过4  不然效果会很奇怪
-->
<template>
  <div id="caopsule-container" :class="`select-capsule`" :style="{}">
    <div
      v-for="(item, index) in configs"
      :id="`capsule_${item.value}`"
      :key="`capsule_${item.value}`"
      class="capsule-text"
      @click="handleSelect(item, index)"
    >
      {{ item.label }}
    </div>
    <div class="capsule-select" :style="{ left: styleLeft, width: styleWidth }">
      <div id="textContainer" class="text-container" :style="{ left: '-' + styleLeft }">
        <div v-for="(item, i) in configs" :key="`${i}capsule_${item.value}`" class="capsule-select-text">
          {{ textRef }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['selectChange']);
const props = defineProps({
  configs: {
    type: Array,
    default: () => [],
  },
});

const current = ref(0);
const styleLeft = ref('0');
const styleWidth = ref('auto');
const textRef = ref('');

const allLength = computed(() => {
  let len = 0;
  props.configs.forEach((item) => {
    len += item.label.length * 0.293 + 0.17;
  });
  return `${len * 2}rem`;
});

const calcLeft = (item: any) => {
  const container = document.getElementById('caopsule-container');
  const dom = document.getElementById(`capsule_${item.value}`);
  if (dom && container) {
    const containerRect = container.getBoundingClientRect();
    const targetRect = dom.getBoundingClientRect();
    const left = targetRect.left - containerRect.left;
    styleLeft.value = `${left - 1}px`;
    styleWidth.value = `${targetRect.width}px`;
    textRef.value = item.label;
  }
};

const handleSelect = (item: any, index: number) => {
  current.value = index;
  calcLeft(item);
  emit('selectChange', item);
};

watch(
  () => props.configs,
  (v) => {
    if (v.length > 0) {
      const item = props.configs[0];
      setTimeout(() => calcLeft(item), 0);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
<style lang="scss" scoped>
.select-capsule {
  height: 48px;
  display: flex;
  border-radius: 24px;
  border: 2px solid #e6e6eb;
  position: relative;
  .capsule-text {
    width: auto;
    white-space: nowrap;
    font-size: 22px;
    line-height: 48px;
    padding: 0 13px;
    color: #818899;
  }
  .capsule-select {
    position: absolute;
    border-radius: 24px;
    box-sizing: border-box;
    width: auto;
    height: 48px;
    white-space: nowrap;
    font-size: 22px;
    line-height: 48px;
    color: white;
    background-color: $zaui-brand;
    top: -2px;
    left: 0;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    overflow: hidden;
    .text-container {
      display: flex;
      transition-property: all;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      position: absolute;
      left: 0;
      .capsule-select-text {
        width: auto;
        white-space: nowrap;
        font-size: 22px;
        line-height: 48px;
        padding: 0 13px;
        color: white;
      }
    }
  }
}
</style>
