<template>
  <van-overlay :show="visible" class="com-za-voice" @click="handleClick">
    <div class="wrapper">
      <div class="wave">
        <div v-for="(item, index) in wave" :key="index" class="wave-item" :style="{ height: `${item.height}%` }" />
      </div>
      <div class="text">{{ text }}</div>
      <div class="btn" @click.stop @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <img src="@/assets/images/component/voice.png" class="image" />
      </div>
    </div>
  </van-overlay>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, onMounted, onBeforeUnmount, ref } from 'vue';
import { Toast } from 'vant/es';
import { start, stop, cancel, voicePause } from '@/utils/record';

const emits = defineEmits(['update:visible', 'record']);
const wave = ref(new Array(20).fill(1).map((x) => ({ height: 10 })));
let timer: ReturnType<typeof setInterval>;

const startWaveAction = () => {
  timer = setInterval(() => {
    wave.value = new Array(20).fill(1).map((x) => ({ height: Math.random() * 100 }));
  }, 100);
};

const stopWave = () => {
  if (timer) {
    clearInterval(timer);
  }
  wave.value = new Array(20).fill(1).map((x) => ({ height: 10 }));
};

let status: 'stop' | 'cancel' | 'recording' = 'stop';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const text = ref('按住说话');

let startY = 0;

const handleClick = () => {
  emits('update:visible', false);
};

const startRecord = () => {
  voicePause();
  status = 'recording';
  start(({ file, duration }) => {
    emits('record', { file, duration });
    emits('update:visible', false);
    status = 'stop';
    stopWave();
    text.value = '按住说话';
  });
  startWaveAction();
  text.value = '松开完成/上滑取消';
};

const stopRecord = () => {
  status = 'stop';
  stopWave();
  stop()
    .then((res) => {
      const { file, duration } = res;
      emits('record', { file, duration });
      emits('update:visible', false);
    })
    .catch((err) => {
      Toast.fail(err.message);
    });
  text.value = '按住说话';
};
const cancelRecord = () => {
  status = 'cancel';
  stopWave();
  cancel();
  text.value = '按住说话';
};

const touchstart = (e: TouchEvent) => {
  e.preventDefault();
  startY = e.touches[0].pageY;
  setTimeout(() => {
    startRecord();
  }, 200);
};
const touchmove = (e: TouchEvent) => {
  if (e.touches[0].pageY - startY < -30) {
    cancelRecord();
  }
};
const touchend = (e: TouchEvent) => {
  setTimeout(() => {
    if (status === 'recording') {
      console.log('stop');
      stopRecord();
    }
  });
};

const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault();
};
onMounted(() => {
  window.addEventListener('contextmenu', handleContextMenu);
  stopWave();
});
onBeforeUnmount(() => {
  window.removeEventListener('contextmenu', handleContextMenu);
});
</script>

<style lang="scss" scoped>
.com-za-voice {
  z-index: 999;
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .wave {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      margin-top: 40vh;
      width: 280px;
      height: 60px;
      .wave-item {
        width: 8px;
        margin-right: 3px;
        background: $btn-background;
        transition: height 0.1s;
      }
    }
    .text {
      margin-top: 150px;
      font-size: $zaui-font-size-lg;
      color: #ffffff;
    }
    .btn {
      margin-top: 50px;
      width: 176px;
      height: 176px;
      border-radius: 50%;
      background: $btn-background;
      // box-shadow: 0px 2px 14px 0px lighten($primary-color, 10%);
      box-shadow: 0px 2px 14px 0px var(--van-button-primary-background-color-shadow);
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-touch-callout: none; /*系统默认菜单被禁用*/
      user-select: none; /*用户是否能够选中文本*/
      .image {
        height: 100px;
        pointer-events: none;
      }
    }
  }
}
</style>
