<template>
  <div class="com-play-bar">
    <div class="voice" :style="{ width: `${(Number(duration) / 60) * 100}%` }" @click.stop="click">
      <ZaPlay :play="playingUrl === url && playStatus === 'playing'" class="voice-icon" />
      {{ duration }}"
    </div>
    <ZaSvg v-show="showDelete" name="close" class="close-icon" @click.stop="handleDeleteClick" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onBeforeUnmount, defineEmits } from 'vue';
import { useRoute } from 'vue-router';
import ZaPlay from '@/components/ZaVoice/play.vue';
import ZaSvg from '@/components/ZaSvg/index.vue';
import useStore from '@/store/app';
import { play, voicePause, voiceStop } from '@/utils/record';

const store = useStore();
const route = useRoute();
const emits = defineEmits(['deleteClick']);

const { playingUrl, playStatus } = storeToRefs(store);

const props = defineProps({
  url: {
    type: String,
    default: '',
    require: true,
  },
  duration: {
    type: [Number, String],
    default: 0,
    require: true,
  },
  watchToStop: {
    type: [Number, String, Object],
    default: '',
  },
  showDelete: {
    type: Boolean,
    default: false,
  },
});

const click = () => {
  if (playStatus.value === 'playing' && playingUrl.value === props.url) {
    voicePause();
  } else {
    play(props.url);
  }
};

const handleDeleteClick = () => {
  emits('deleteClick');
};

onBeforeUnmount(() => {
  voiceStop();
});

watch(route, () => {
  voiceStop();
});

watch(
  () => props.watchToStop,
  () => {
    voiceStop();
  },
);
</script>

<style lang="scss" scoped>
.com-play-bar {
  margin-top: 20px;
  display: flex;
  align-items: center;
  .voice {
    display: flex;
    min-width: 130px;
    height: 76px;
    line-height: 76px;
    background: $voice-background;
    border-radius: 20px;
    font-size: $zaui-font-size-md;
    color: $voice-color;
    .voice-icon {
      margin-left: 30px;
      margin-right: 10px;
    }
  }
  .close-icon {
    font-size: 38px;
    margin-left: 26px;
    color: #e0e0e0;
  }
}
</style>
