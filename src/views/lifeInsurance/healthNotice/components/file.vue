<!--
 * new page
 * @author: liyang
 * @since: 2022-07-27
 * file.vue
-->
<template>
  <div class="com-pdf-viewer">
    <van-image v-if="isPicture" width="100%" height="80vh" fit="contain" :src="props.url" />
    <div v-else :id="id" :isee_pdf="pdfUrl" class="pdf-wapper"></div>
    <div v-if="props.materialType === 'question'" class="footer-button">
      <van-button plain type="primary" @click="emits('onSubmitCurrentStatus', 2)">部分为是</van-button>
      <van-button type="primary" @click="emits('onSubmitCurrentStatus', 1)">以上皆否</van-button>
    </div>
    <div v-else class="footer-button">
      <van-button type="primary" @click="emits('onSubmitCurrentStatus', 1)">了解并继续</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { nanoid } from 'nanoid';
import { Toast } from 'vant';
import Pdfh5 from 'pdfh5';
import 'pdfh5/css/pdfh5.css';

const props = defineProps({
  materialType: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
});

const emits = defineEmits<(e: 'onSubmitCurrentStatus', code: number) => void>();

const id = nanoid();

const show = ref(false);
const loading = ref(true);
const pdfh5 = ref<any>(null);

const isPicture = computed(() => {
  return ['png', 'jpg', 'jpeg'].some((i) => props.url.includes(i));
});

const loadPdfCanvas = () => {
  try {
    pdfh5.value = new Pdfh5(`#${id}`, {
      pdfurl: props.url,
      renderType: 'svg',
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
  setTimeout(() => {
    loadPdfCanvas();
  }, 0);
};

onMounted(() => {
  openPdf();
});
</script>
<style lang="scss" scoped>
.com-pdf-viewer {
  background-color: #f7f8fc;
  padding: 30px 30px 0 30px;
  .pdf-wapper {
    height: 100vh;
    width: 100%;
    overflow: auto;
    border-radius: 20px;
    margin-bottom: 150px;
  }
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
</style>
