<template>
  <div :class="['com-field-info', line ? 'com-field-info-line' : '']">
    <div v-if="label" :class="['label', minWidth]">
      {{ label }}
    </div>
    <slot v-if="!!slots.label" name="label" />
    <div class="content">
      {{ content }}
    </div>
    <slot v-if="!!slots.content" name="content" />
    <div v-if="isCopy" class="link" @click="onCopy">
      <ProSvg name="copy" class="icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dialog, Loading, Radio, RadioGroup, Toast } from 'vant';
import { useClipboard } from '@vueuse/core';

const slots = useSlots();
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  line: {
    type: Boolean,
    default: false,
  },
  isCopy: {
    type: Boolean,
    default: false,
  },
  minWidth: {
    type: String,
    default: '',
  },
});
const { copy, copied, isSupported } = useClipboard();
const onCopy = () => {
  console.log(props.content, 'props.content=====');
  copy(props.content);
  Toast('复制成功');
};
</script>

<style lang="scss" scoped>
.com-field-info {
  display: flex;
  font-size: 26px;
  color: #666666;
  border-bottom: 1px solid $zaui-line;
  font-weight: 400;
  margin-top: 12px;
  &:last-child {
    border-bottom: none;
  }
  &.com-field-info-line {
    border-bottom: none;
  }
  .label {
    min-width: 130px;
    line-height: 37px;
  }
  .other {
    min-width: 260px;
  }
  .content {
    display: flex;
    align-items: center;
    word-break: break-all;
    line-height: 37px;
    text-align: right;
  }
  .link {
    margin-left: 24px;
  }
}
</style>
