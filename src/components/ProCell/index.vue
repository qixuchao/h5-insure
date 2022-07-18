<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:45:09
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-13 20:20:15
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProCell/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-cell-wrapper">
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
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  content: {
    type: String,
    required: true,
    default: '',
  },
});

const state = ref({
  status: 'left',
});

const computeStrLength = (str = '') => {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[\u4e00-\u9fa5]/.test(i)) {
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
.com-cell-wrapper {
  margin: 30px 0;
  .cell-container {
    display: flex;
    font-size: 28px;
    line-height: 30px;
    .left-part {
      width: 30%;
      color: #515865;
    }
    .right-part {
      width: 30%;
      color: #393d46;
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
</style>
