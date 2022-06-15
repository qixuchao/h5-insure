<template>
  <div class="answer-card">
    <div class="answer-card-container">
      <div v-if="data.itemName" class="answer-card-top">
        <p class="left-span">{{ data.itemName }}</p>
        <img :src="updateIcon" class="right-icon" @click="handleClick" />
      </div>
      <div v-if="data.recordList && data.itemCode === 'Y'" class="answer-record-list">
        <p v-for="(item, index) in data.recordList" :key="index" class="record-item">
          {{ item.title }}:{{ item.value }}
        </p>
      </div>

      <div v-if="data.itemCode !== 'N'" :class="!data.itemName ? 'answer-card-top' : 'bottom-list'">
        <p class="left-span">{{ data.message }}</p>
        <img v-if="!data.itemName" :src="updateIcon" class="right-icon" @click="handleClick" />
      </div>
      <div v-if="data?.voiceList?.length > 0" class="voice-list">
        <div v-for="(item, index) in data.voiceList" :key="index" class="voice-item">
          <div
            class="voice"
            :style="{ width: `${(item.voiceDuration / 60) * 80}vw` }"
            @click.stop="voiceClick(item.voiceUrl, index)"
          >
            <ZaPlay class="voice-icon" :play="playIndex === index" />
            <div class="duration">{{ item.voiceDuration }}"</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ZaPlay from '@/components/ZaVoice/play.vue';

import updateIcon from '@/assets/images/record/update.png';
import { play, voicePause, voiceStop } from '@/utils/record';

import './index.scss';

defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
const playIndex = ref(-1);

const emit = defineEmits(['onEdit']);
const handleClick = () => {
  emit('onEdit');
};

const voiceClick = (src: string, index: number) => {
  if (playIndex.value === index) {
    voicePause();
    playIndex.value = -1;
  } else {
    play(src, () => {
      playIndex.value = -1;
    });
    playIndex.value = index;
  }
};
</script>
