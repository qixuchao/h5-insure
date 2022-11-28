<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:45:09
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-26 20:11:22
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProCell/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div :class="`common-cell-wrapper ${customWrapper} ${border ? 'border' : ''}`">
    <div class="cell-container">
      <div :class="['left-part', state.status === 'left' ? 'large' : '']">{{ title }}</div>
      <div class="divider"></div>
      <div :class="['right-part', state.status === 'right' ? 'large' : '']">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';

const props = withDefaults(defineProps<{ title: string; content: string; border: boolean; size: string }>(), {
  title: '',
  content: '',
  border: true,
  size: '', // small
});

const state = ref({
  status: 'left',
});

const customWrapper = computed(() => {
  if (props.size) {
    return `com-cell-wrapper-${props.size}`;
  }
  return 'com-cell-wrapper';
});

const computeStrLength = (str = '') => {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[\u4e00-\u9fa5]/.test(str[i])) {
      len += 3;
    } else {
      len += 2;
    }
  }
  return len;
};

onBeforeMount(() => {
  const leftLen = computeStrLength(props.title);
  const rightLen = computeStrLength(props.content);
  if (leftLen < rightLen) {
    state.value.status = 'right';
  } else {
    state.value.status = 'left';
  }
});
</script>

<style lang="scss" scoped>
.common-cell-wrapper {
  min-height: 62px;
  padding: 16px 0;
  .cell-container {
    display: flex;
    .left-part {
      width: 30%;
    }
    .right-part {
      width: 30%;
      text-align: right;
    }
    .divider {
      width: 10%;
    }
    .large {
      width: 60%;
    }
  }
}
.com-cell-wrapper {
  &.border {
    border-bottom: 1px solid $zaui-line;
  }
  .cell-container {
    line-height: 40px;
    font-size: $zaui-font-size-md;
    font-weight: 400;
    .left-part {
      color: $zaui-popup-button-text;
    }
    .right-part {
      color: $zaui-text;
    }
  }
}
.com-cell-wrapper-small {
  min-height: 62px;
  padding: 16px 0;
  &.border {
    border-bottom: 1px solid $zaui-line;
  }
  .cell-container {
    line-height: 45px;
    font-size: 32px;
    color: #333333;

    .left-part {
      font-weight: 500;
      font-family: PingFangSC-Medium, PingFang SC;
    }
    .right-part {
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
    }
  }
}
</style>
