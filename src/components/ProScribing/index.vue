<template>
  <div class="scribing-content">
    <div class="content-header">
      <span>{{ title }}</span>
      <span v-if="!scribingStatus" class="scribing" @click="handleScribing">{{
        `${type === 'auto' ? '一键抄录' : '去抄录'}`
      }}</span>
      <span v-else class="scribing disabled">已抄录</span>
    </div>
    <p v-if="type === 'handle'" class="scribing-tip">按法规要求，请投保人在手机上正楷手写抄录下述文字</p>
    <div class="scribing-text">
      {{ text }}
    </div>
    <AutoScribing
      v-if="type === 'auto'"
      ref="autoScribingRef"
      v-model="signString"
      container=".scribing-content .scribing-text"
      :text="text"
    ></AutoScribing>
  </div>
</template>

<script lang="ts" setup name="proScribing">
import { withDefaults } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AutoScribing from './components/AutoScribing.vue';
import HandleScribing from './components/HandleScribing.vue';

interface Props {
  type: 'auto' | 'handle'; // 抄录类型一键录入和手动录入
  title: string; // 弹窗标题
  signInfo: string; // 抄录的base64
  text: string; // 抄录的文案
  status: boolean; // 抄录状态
}

const props = withDefaults(defineProps<Props>(), {
  type: 'auto',
  signInfo: '',
  text: '',
  status: false,
});

const route = useRoute();
const router = useRouter();

const emits = defineEmits(['onSubmit']);

const signString = ref<string>('');
const autoScribingRef = ref<InstanceType<typeof AutoScribing>>();
const containerRect = ref({});

const scribingStatus = computed(() => {
  return props.status;
});

const handleScribing = () => {
  if (props.type === 'auto') {
    if (autoScribingRef.value) {
      const scribingStr = autoScribingRef.value.autoScribing();
      emits('onSubmit', scribingStr);
    }
  } else {
    emits('onSubmit');
  }
};

watch(
  () => props.signInfo,
  (value) => {
    signString.value = value;
  },
  {
    immediate: true,
  },
);
</script>
<style lang="scss" scoped>
.scribing-content {
  padding: $zaui-card-border;
  .content-header {
    font-size: $zaui-font-size-md;
    font-weight: 500;
    color: $zaui-text-title;
    line-height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .scribing {
      font-size: $zaui-font-size-md;
      font-weight: 400;
      color: var(--van-primary-color);
      line-height: 42px;
      &.disabled {
        color: #99a9c0;
      }
    }
  }

  .scribing-tip {
    font-size: $zaui-font-size-sm;
    font-weight: 400;
    color: $zaui-text;
    line-height: 33px;
    margin-top: 16px;
  }
  .scribing-text {
    min-height: 90px;
    background: #fff6e4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $zaui-font-size-md;
    font-weight: 500;
    color: #ff911e;
    line-height: 42px;
    margin-top: 24px;
    padding: 24px;
  }
}
</style>
