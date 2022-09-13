<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-13 00:39:12
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProExpand/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="risk-responsibility">
    <div class="title">{{ title }}</div>
    <div class="responsibility-content" :style="{ height }">
      <div class="content">
        <slot></slot>
      </div>
      <div class="show-button" @click="handleClick">
        <span>{{ isShow ? '收起' : '展开' }}</span>
        <ProSvg style="width: 20px; height: 20px" :name="isShow ? 'arrow-up' : 'arrow-down'"></ProSvg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const slots = useSlots();

const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    default: '',
  },
  minHeight: {
    type: [Number, String],
    default: 80,
  },
  maxHeight: {
    type: [Number, String],
    default: 200,
  },
});

const isShow = ref();

onMounted(() => {
  isShow.value = props.modelValue;
});

const emits = defineEmits(['update:modelValue']);

const height = computed(() => {
  return isShow.value ? `${props.maxHeight}px` : `${props.minHeight}px`;
});

const handleClick = () => {
  isShow.value = !isShow.value;
  emits('update:modelValue', isShow.value);
};
</script>

<style lang="scss" scoped>
.risk-responsibility {
  .title {
    font-size: 26px;
    font-weight: 500;
    color: #393d46;
    padding: 20px 0;
    padding-left: var(--van-cell-horizontal-padding);
    overflow: hidden;
  }
  .responsibility-content {
    position: relative;
    padding-left: var(--zaui-page-border);
    font-size: $zaui-font-size;
    color: #aab9d0;
    overflow: hidden;
    li {
      display: flex;
      align-items: center;
      height: 58px;
      font-size: 26px;
      .responsibility-sign {
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border: 1px solid #99a9c0;
        border-radius: 50%;
        margin-right: 14px;
      }
    }
    .show-button {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100%;
      height: 88px;
      line-height: 88px;
      background-color: #fff;
      text-align: center;
      transform: translateX(-50%);
    }
  }
}
</style>
