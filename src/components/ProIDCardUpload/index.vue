<template>
  <div class="com-id-card-upload">
    <van-uploader
      :model-value="frontImage"
      :max-count="1"
      :deletable="false"
      :preview-full-image="false"
      :after-read="handleFrontRead"
    >
      <div class="upload-item">
        <img :src="IDCardUploadFrontImage" class="bg" />
        <img :src="IDCardUploadIconImage" class="icon" />
        <div class="text">上传人像面</div>
      </div>
      <template #preview-cover>
        <div class="upload-item cover" @click="handleFrontClick">
          <div class="bg" />
          <img :src="IDCardUploadIconImage" class="icon" />
          <div class="text">上传人像面</div>
        </div>
      </template>
    </van-uploader>
    <van-uploader
      :model-value="backImage"
      :max-count="1"
      :deletable="false"
      :preview-full-image="false"
      :after-read="handleBackRead"
    >
      <div class="upload-item">
        <img :src="IDCardUploadBackImage" class="bg" />
        <img :src="IDCardUploadIconImage" class="icon" />
        <div class="text">上传国徽面</div>
      </div>
      <template #preview-cover>
        <div class="upload-item cover" @click="handleBackClick">
          <div class="bg" />
          <img :src="IDCardUploadIconImage" class="icon" />
          <div class="text">上传国徽面</div>
        </div>
      </template>
    </van-uploader>
    <van-uploader ref="instance" class="temp-uploader" :max-count="1" :after-read="handleTempRead" />
  </div>
</template>

<script lang="ts" setup>
import { useCustomFieldValue } from '@vant/use';
import { defineProps } from 'vue';
import { UploaderFileListItem, UploaderInstance } from 'vant';
import { fileUpload, ocr } from '@/api/modules/file';
import IDCardUploadIconImage from '@/assets/images/component/idcard-upload.png';
import IDCardUploadFrontImage from '@/assets/images/component/idcard-front.png';
import IDCardUploadBackImage from '@/assets/images/component/idcard-back.png';
import { UPLOAD_TYPE_ENUM, OCR_TYPE_ENUM } from '@/common/constants';

const props = defineProps({
  modelValue: {
    type: Array as () => string[],
    default: () => [],
  },
  front: {
    type: String,
    default: '',
  },
  back: {
    type: String,
    default: '',
  },
  isView: {
    type: Boolean,
    default: false,
  },
});

useCustomFieldValue(() => props.modelValue);

const emits = defineEmits(['update:front', 'update:back', 'update:modelValue', 'onOCR']);
let current: 'front' | 'back' = 'front';
const instance = ref<UploaderInstance>();
const frontImage = ref<Array<UploaderFileListItem>>([]);
const backImage = ref<Array<UploaderFileListItem>>([]);
const temp = ref<Array<UploaderFileListItem>>([]);
const ossKey = ref<string[]>([]);

const handleFrontClick = () => {
  if (props.isView) {
    return;
  }
  current = 'front';
  temp.value = [];
  setTimeout(() => {
    instance.value?.chooseFile();
  });
};

const handleBackClick = () => {
  if (props.isView) {
    return;
  }
  current = 'back';
  temp.value = [];
  setTimeout(() => {
    instance.value?.chooseFile();
  });
};

const handleFrontRead = (e: { file: File }) => {
  fileUpload(e.file, UPLOAD_TYPE_ENUM.ID_CARD_FRONT).then((res) => {
    if (res.code === '10000') {
      emits('update:front', res.data.url);
      emits('update:modelValue', [res.data.url, props.modelValue[1]]);
      ossKey.value[0] = res.data.ossKey;
    }
  });
};

const handleBackRead = (e: { file: File }) => {
  fileUpload(e.file, UPLOAD_TYPE_ENUM.ID_CARD_BACK).then((res) => {
    if (res.code === '10000') {
      emits('update:back', res.data.url);
      emits('update:modelValue', [props.modelValue[0], res.data.url]);
      ossKey.value[1] = res.data.ossKey;
    }
  });
};

const handleTempRead = (e: { file: File }) => {
  fileUpload(e.file, current === 'front' ? UPLOAD_TYPE_ENUM.ID_CARD_FRONT : UPLOAD_TYPE_ENUM.ID_CARD_BACK).then(
    (res) => {
      if (res.code === '10000') {
        if (current === 'front') {
          emits('update:front', res.data.url);
          emits('update:modelValue', [res.data.url, props.modelValue[1]]);
          ossKey.value[0] = res.data.ossKey;
        } else {
          emits('update:back', res.data.url);
          emits('update:modelValue', [props.modelValue[0], res.data.url]);
          ossKey.value[1] = res.data.ossKey;
        }
      }
    },
  );
};

watch(
  () => props.front,
  (val) => {
    if (val) {
      frontImage.value = [{ url: val }];
    }
  },
  { immediate: true },
);

watch(
  () => props.back,
  (val) => {
    if (val) {
      backImage.value = [{ url: val }];
    }
  },
  {
    immediate: true,
  },
);

watch(temp, (val) => {
  if (val && val[0]) {
    if (current === 'front') {
      frontImage.value = val;
    } else {
      backImage.value = val;
    }
  }
});

watch(
  () => props.modelValue,
  (val) => {
    if (val[0]) {
      frontImage.value = [{ url: val[0] }];
    }
    if (val[1]) {
      backImage.value = [{ url: val[1] }];
    }
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  ossKey,
  (val) => {
    if (val[0] && val[1]) {
      ocr({
        ossKey: val,
        imageType: OCR_TYPE_ENUM.ID_CARD,
      }).then((res) => {
        const { data, code } = res;
        if (code === '10000' && data && data.idCardOcrVO) {
          emits('onOCR', data.idCardOcrVO);
        }
      });
    }
  },
  {
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
.com-id-card-upload {
  width: 690px;
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
  .upload-item {
    width: 320px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.cover {
      .bg {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    .icon {
      width: 66px;
      height: 66px;
      z-index: 9;
    }
    .text {
      font-size: 26px;
      margin-top: 9px;
      color: #0d6efe;
      z-index: 9;
    }
  }
  .van-uploader {
    :deep(.van-uploader__wrapper) {
      .van-uploader__preview {
        margin: 0;
        .van-uploader__preview-image {
          width: 320px;
          height: 200px;
        }
      }
    }
  }
  .temp-uploader {
    display: none;
  }
}
</style>
