<!--
 * @Author: zhaopu
 * @Date: 2022-11-28 17:37:17
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-09 18:40:07
 * @Description:
-->
<template>
  <div :class="{ 'com-attachment-list': true, 'has-bg': hasBgColor }">
    <span>{{ preText }}</span>
    <span
      v-for="(item, index) in attachmentList || []"
      :key="index"
      class="attachment-item"
      @click="onClickReadAttachment(index)"
    >
      《{{ item.attachmentName }}》
    </span>
  </div>
</template>

<script lang="ts" setup name="attachmentList">
import { withDefaults } from 'vue';

interface Props {
  preText: string;
  hasBgColor: boolean;
  attachmentList: any[];
}
const props = withDefaults(defineProps<Props>(), {
  preText: '',
  hasBgColor: true,
  attachmentList: () => [],
});

const emits = defineEmits(['preview-file']);

const onClickReadAttachment = (index: number) => {
  emits('preview-file', index);
};
</script>

<style lang="scss" scoped>
.com-attachment-list {
  width: 100%;
  text-align: left;
  padding: 0 10px 25px;
  margin-bottom: -15px;
  &.has-bg {
    background: #fff8f3;
    padding: 16px 39px 40px;
  }

  span {
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 36px;
  }

  .attachment-item {
    color: #006afc;
  }
}
</style>
