<!--
 * @Author: zhaopu
 * @Date: 2022-11-28 17:37:17
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-28 18:57:24
 * @Description:
-->
<template>
  <div class="com-attachment-list">
    <span>{{ preText }}</span>
    <span
      v-for="(item, index) in attachementList || []"
      :key="index"
      class="attachment-item"
      @click="onClickReadAttachment(index)"
    >
      《{{ item.attachmentName }}》
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  preText: {
    type: String,
    default: '',
  },
  attachementList: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits(['preview-file']);

const onClickReadAttachment = (index: number) => {
  emits('preview-file', index);
};
</script>

<style lang="scss" scoped>
.com-attachment-list {
  width: 100%;
  padding: 16px 39px 25px;
  background: #fff8f3;

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
