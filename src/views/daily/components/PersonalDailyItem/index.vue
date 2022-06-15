<template>
  <div class="com-daily-item" @click="handleClick">
    <div class="date">
      <div class="dot" />
      {{ dayjs(date).format('YYYY-MM-DD') }}
      <ZaSvg name="right_arrow" class="arrow-icon" />
    </div>
    <div class="body">
      <div v-if="showDash" class="dash" />
      <div v-if="content && content[0]" class="content">
        <div class="van-multi-ellipsis--l2">
          {{ content[0] }}
        </div>
      </div>
      <ZaPlayBar v-if="voice && voice[0]" :url="voice[0].voiceUrl" :duration="voice[0].voiceDuration" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import dayjs from 'dayjs';
import ZaPlayBar from '@/components/ZaVoice/playBar.vue';

const emits = defineEmits(['click']);

defineProps({
  date: {
    type: String,
    default: '',
  },
  content: {
    type: Array,
    default: () => [],
  },
  voice: {
    type: Array,
    default: () => [],
  },
  showDash: {
    type: Boolean,
    default: true,
  },
});

const handleClick = () => {
  emits('click');
};
</script>

<style lang="scss" scoped>
.com-daily-item {
  .date {
    display: flex;
    align-items: center;
    font-size: $zaui-font-size-sm;
    color: $daily-item-title-text;
    line-height: 33px;
    .dot {
      position: relative;
      width: 26px;
      height: 26px;
      border-radius: 13px;
      background: $daily-item-dot-background;
      margin-right: 26px;
      &:after {
        content: ' ';
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background: $primary-color;
        position: absolute;
        top: 6px;
        left: 6px;
      }
    }
    .arrow-icon {
      margin-left: 16px;
      margin-top: -1px;
      font-size: 22px;
      width: 16px;
      height: 30px;
    }
  }
  .body {
    position: relative;
    margin: 10px 0 10px 13px;
    padding: 14px 0 60px 32px;
    .dash {
      width: 1px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(to bottom, #dcdcdc 0%, #dcdcdc 33.33%, transparent 33.33%, transparent 100%);
      background-size: 1px 6px;
      background-repeat: repeat-y;
    }
    .content {
      font-size: $zaui-font-size-md;
      color: $text-color;
      line-height: 36px;
      padding: 22px 30px;
      // background: $daily-add-tag-background-active;
      box-shadow: 0px 6px 16px 0px $daily-item-content-shadow;
      border-radius: 20px;
      border: 2px solid $daily-item-content-border;
      // border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(244, 231, 231, 1)) 2 2;
    }
  }
}
</style>
