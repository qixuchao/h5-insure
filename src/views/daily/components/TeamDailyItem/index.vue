// 按日志视图
<template>
  <div class="com-team-daily-item">
    <div class="main-title">
      <div class="dot" />
      <div v-if="showName" class="name">{{ userName }}</div>
      <div class="title">提交了{{ dayjs(workDay).format('YYYY-MM-DD') }}的工作日志</div>
      <ZaSvg name="right_arrow" class="arrow-icon" />
    </div>
    <div class="body">
      <div v-if="showDash" class="dash" />
      <div class="date">{{ dayjs(modifyTime).format('YYYY-MM-DD HH:mm') }}</div>
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

defineProps({
  teamName: {
    type: String,
    default: '',
  },
  userName: {
    type: String,
    default: '',
  },
  workDay: {
    type: String,
    default: '',
  },
  modifyTime: {
    type: String,
    default: '',
  },
  content: {
    type: Array as () => Array<string>,
    default: () => [],
  },
  voice: {
    type: Array as () => Array<{ voiceUrl: string; voiceDuration: string }>,
    default: () => [],
  },
  showDash: {
    type: Boolean,
    default: true,
  },
  showName: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.com-team-daily-item {
  .main-title {
    display: flex;
    align-items: center;
    font-size: $zaui-font-size-md;
    color: $daily-item-title-text;
    line-height: 33px;
    .dot {
      position: relative;
      width: 26px;
      height: 26px;
      border-radius: 13px;
      background: $daily-item-dot-background;
      margin-right: 20px;
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
    .name {
      font-weight: 600;
      margin-right: 10px;
    }
    .arrow-icon {
      margin-left: 16px;
      font-size: 22px;
      width: 16px;
      height: 30px;
      margin-top: -1px;
    }
  }
  .body {
    position: relative;
    margin: 0 0 10px 13px;
    padding: 0 0 60px 32px;
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
    .date {
      height: 33px;
      font-size: $zaui-font-size-sm;
      color: $label-color2;
      line-height: 33px;
      margin-top: 6px;
    }
    .content {
      margin-top: 14px;
      font-size: $zaui-font-size-md;
      color: #343434;
      line-height: 36px;
      padding: 22px 30px;
      // background: $daily-add-tag-background-active;
      box-shadow: 0px 6px 16px 0px $daily-item-content-shadow;
      border-radius: 20px;
      border: 2px solid $daily-item-content-border;
      // border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(244, 231, 231, 1)) 2 2;
    }
    .voice {
      margin-top: 20px;
      min-width: 130px;
      height: 76px;
      line-height: 76px;
      background: $voice-background;
      border-radius: 20px;
      font-size: $zaui-font-size-md;
      color: $voice-color;
      display: flex;
      .voice-icon {
        margin-left: 25px;
        margin-right: 10px;
      }
    }
  }
}
</style>
