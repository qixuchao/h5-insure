<!--
 * new page
 * @author: liyang
 * @since: 2022-08-05
 * index.vue
-->
<template>
  <div class="com-file-preview">
    <!-- 富文本 -->
    <slot name="title"></slot>
    <!-- 富文本 -->
    <div v-if="isRichText" v-dompurify-html="content" class="content"></div>
    <!-- PDF -->
    <div v-else-if="isPdf" :id="id" class="pdf-wapper"></div>
    <!-- 图片 -->
    <van-image v-else-if="isPicture" class="pic-wrap" fit="contain" :src="props.content" />

    <QuestionPreview v-else-if="isQuestion" :current-page-info="props.content" />
    <!-- 外联 -->
    <!-- <iframe v-else :src="content" frameborder="0" width="100%" style="height: 100vh"></iframe> -->
    <slot name="footer-btn"></slot>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid';
import { Toast } from 'vant/es';
import Pdfh5 from 'pdfh5';
import QuestionPreview from './question.vue';
import 'pdfh5/css/pdfh5.css';

const props = defineProps({
  type: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  forbidClick: {
    type: Boolean,
    default: false,
  },
});
const isRichText = computed(() => {
  return props.type === 'richText';
});
const isPdf = computed(() => {
  return props.type === 'pdf';
});
const isPicture = computed(() => {
  return props.type === 'picture';
});

const isQuestion = computed(() => {
  return props.type === 'question';
});

const isLink = computed(() => {
  if (props.type === 'link') {
    return true;
  }
  return false;
});

const id = nanoid();

const show = ref(false);

const pdfh5 = ref<any>(null);

const loadPdfH5Viewer = () => {
  try {
    pdfh5.value = new Pdfh5(`#${id}`, {
      pdfurl: props.content,
      lazy: true,
    });
    // 监听完成事件
    pdfh5.value?.on('complete', (status: string, msg: string, time: number) => {
      console.log(`状态：${status}，信息：${msg}，耗时：${time}毫秒`);
      if (status === 'error') {
        Toast('文件损坏，无法打开！');
      }
    });
  } catch (error) {
    //
    console.log('error', error);
  }
};

const openPdf = async () => {
  show.value = true;
  nextTick(() => {
    loadPdfH5Viewer();
  });
};

watch(
  () => props.content,
  (newVal) => {
    if (newVal) {
      props.type === 'pdf' && openPdf();
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.type,
  (newVal) => {
    if (newVal === 'link') {
      window.open(props.content);
    }
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss">
.com-file-preview {
  width: 100%;
  height: 100%;
  // min-height: 100vh;
  .title {
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #393d46;
    line-height: 45px;
    margin: 40px 0;
  }
  .content {
    padding: 30px 30px 0 30px;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #393d46;
    line-height: 48px;
    padding-bottom: 200px;
  }
  .pdf-viewer {
    word-break: break-all;
    .title {
      color: $primary-color;
    }
    .loading {
      height: 700px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .pdf-wapper {
    // background-color: rgb(82, 86, 89);
    height: 100%;

    :deep(.viewerContainer) {
      height: 100vh;
    }
  }
  .pic-wrap {
    width: 100%;
    height: 80vh;
  }
}
</style>
