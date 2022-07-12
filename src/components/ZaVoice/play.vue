<template>
  <div class="com-za-voice-play">
    <div :class="['play-icon', { playing: play }]" />
  </div>
</template>

<script lang="ts" setup>
// 提前加载，防止动画播放不出来
import '@/assets/images/component/play1.png';
import '@/assets/images/component/play2.png';
import '@/assets/images/component/play3.png';

defineProps({
  play: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.com-za-voice-play {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  .play-icon {
    width: 30px;
    height: 30px;
    background-image: url('@/assets/images/component/play3.png');
    background-size: 100% 100%;
    &.playing {
      animation: voice-play 1s infinite;
    }
  }
  @keyframes voice-play {
    0% {
      background-image: url('@/assets/images/component/play1.png');
    }
    25% {
      background-image: url('@/assets/images/component/play2.png');
    }
    50% {
      background-image: url('@/assets/images/component/play3.png');
    }
    100% {
      background-image: url('@/assets/images/component/play1.png');
    }
  }
}
</style>
