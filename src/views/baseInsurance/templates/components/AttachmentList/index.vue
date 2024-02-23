<!--
 * @Author: zhaopu
 * @Date: 2022-11-28 17:37:17
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-09 18:40:07
 * @Description:
-->
<template>
  <div :class="{ 'com-attachment-list': true, 'has-bg': hasBgColor }">
    <div class="attachment-wrap">
      <van-checkbox v-if="isShowRadio" v-model="isAgree" shape="square" @change="onChange"> </van-checkbox>
      <div class="attachment-content">
        <span>{{ preText }}</span>
        <span
          v-for="(item, index) in attachmentList || []"
          :key="index"
          class="attachment-item"
          @click="onClickReadAttachment(index)"
        >
          《{{ item.attachmentName }}》
        </span>
        <span>{{ suffixText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="attachmentList">
import { withDefaults } from 'vue';

interface Props {
  preText: string;
  suffixText: string;
  hasBgColor: boolean;
  attachmentList: any[];
  isShowRadio?: boolean;
  modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  preText: '',
  suffixText: '',
  hasBgColor: true,
  attachmentList: () => [],
  modelValue: false,
  isShowRadio: false,
});

const emits = defineEmits(['preview-file', 'update:modelValue']);

const isAgree = ref<boolean>(false); // 是否同意资料

const onClickReadAttachment = (index: number) => {
  emits('preview-file', index);
};

const onChange = (e) => {
  emits('update:modelValue', e);
};
</script>

<style lang="scss" scope>
.com-attachment-list {
  width: 100%;
  text-align: left;
  margin-bottom: -15px;
  padding: 16px 39px 40px 0;

  &.has-bg {
  }
  .van-checkbox {
    width: 80px;
    padding-top: 10px;
  }
  .van-checkbox__icon {
    width: 28px;
    height: 28px;
    margin-right: 10px;
    .van-icon {
      width: 100%;
      height: 100%;
      &::before {
        position: absolute;
        margin: auto;
        top: -4px;
        bottom: 0;
        left: 0;
        font-size: 24px;
        right: 0;
      }
    }
  }

  span {
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 36px;
  }

  .attachment-item {
    color: var(--van-primary-color);
  }

  .attachment-wrap {
    display: flex;
    align-items: flex-start;
  }
}
</style>
