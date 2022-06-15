<template>
  <div ref="dom" class="com-text-voice">
    <div class="title">
      <div class="label">
        {{ label }}
      </div>
      <div
        v-show="!disabled"
        :class="['voice-btn', { 'in-active': data.voice.length >= maxVoiceCount }]"
        @click="handleVoiceClick"
      >
        <ZaSvg name="mic" class="mic-icon" />
        语音
      </div>
    </div>
    <div class="body">
      <div class="textarea-wrapper">
        <van-field
          v-model.trim="data.content"
          class="textarea"
          :placeholder="placeholder"
          :maxlength="max"
          :disabled="disabled"
          :name="name"
          input-align="left"
          rows="3"
          type="textarea"
          show-word-limit
          @focus="handleFocus"
        />
        <!-- <div class="count">{{ data.content.length }}/{{ max }}</div> -->
      </div>
      <div class="voice-list">
        <ZaPlayBar
          v-for="(item, index) in data.voice"
          :key="index"
          :url="item.voiceUrl"
          :duration="item.voiceDuration"
          :show-delete="!disabled"
          @delete-click="handleDeleteVoice(index, item)"
        />
      </div>
    </div>
  </div>
  <ZaVoice v-model:visible="voiceShow" @record="handleRecord" />
</template>

<script lang="ts" setup>
import { Dialog } from 'vant';
import { defineProps, watch, defineEmits, watchEffect, onBeforeUnmount } from 'vue';
import ZaVoice from '@/components/ZaVoice/index.vue';
import ZaPlayBar from '@/components/ZaVoice/playBar.vue';
import ZaSvg from '@/components/ZaSvg/index.vue';

import { play, voicePause, voiceStop } from '@/utils/record';

const voiceShow = ref(false);
const playIndex = ref(-1);
const dom = ref<HTMLElement | null>(null);
const emits = defineEmits(['update:modelValue', 'voiceClick']);

interface IData {
  content: string;
  voice: Array<{ voiceUrl: string; voiceDuration: string }>;
}

const props = defineProps({
  modelValue: {
    type: Object as () => IData,
    default: () => ({ content: '', voice: [] }),
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '请输入...',
  },
  max: {
    type: Number,
    default: 200,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  maxVoiceCount: {
    type: Number,
    default: 5,
  },
});

const data = reactive<IData>(props.modelValue);

watchEffect(() => {
  data.content = props.modelValue.content;
  data.voice = props.modelValue.voice;
});

const handleVoiceClick = () => {
  if (data.voice.length < props.maxVoiceCount) {
    voiceShow.value = true;
  }
};
watch([() => data], ([val]) => {
  emits('update:modelValue', val);
});

const handleRecord = (res: { file: string; duration: string }) => {
  const { file, duration } = res;
  data.voice.push({ voiceUrl: file, voiceDuration: duration });
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

const handleDeleteVoice = (index: number, item: { voiceUrl: string }) => {
  Dialog.confirm({
    title: '确认删除此语音吗？',
  })
    .then(() => {
      data.voice.splice(index, 1);
      voiceStop();
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleFocus = () => {
  setTimeout(() => {
    if (dom.value) {
      const { top } = dom.value.getBoundingClientRect();
      const container = document.querySelector('.page-container');
      if (container) {
        container.scrollTop += top;
        console.log(top, container.scrollTop);
      }
    }
  }, 200);
};

onBeforeUnmount(() => {
  voiceStop();
});
</script>

<style lang="scss" scoped>
.com-text-voice {
  padding: 30px;
  .title {
    height: 42px;
    line-height: 42px;
    font-size: $zaui-font-size-md2;
    color: #616161;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .voice-btn {
      width: 114px;
      height: 40px;
      line-height: 40px;
      font-size: $zaui-font-size-md;
      background: #f2d6b7;
      border-radius: 20px;
      text-align: center;
      color: #7c3c10;
      display: flex;
      align-items: center;
      justify-content: center;
      &.in-active {
        opacity: 0.5;
      }
      .mic-icon {
        font-size: $zaui-font-size-sm;
        margin-right: 6px;
      }
    }
  }
  .body {
    margin-top: 32px;
    ::v-deep .van-field__word-limit {
      font-size: $zaui-font-size-md2;
      color: #d6d6d6;
      padding-bottom: 20px;
    }
    .textarea-wrapper {
      position: relative;
      .textarea {
        width: 100%;
        height: 232px;
        --van-field-placeholder-text-color: #b8b8b8;
        background: #f4f5f7;
        border-radius: 20px;
        padding: 28px 30px;
        border: none;

        resize: none;
        font-size: $zaui-font-size-md2;
      }
      .count {
        position: absolute;
        bottom: 20px;
        right: 20px;
        font-size: $zaui-font-size-md2;
        color: #d6d6d6;
        line-height: 42px;
      }
    }
  }
}
</style>
