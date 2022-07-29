<template>
  <div class="com-image-upload">
    <van-uploader
      :model-value="fileList"
      :after-read="handleAfterRead"
      :max-count="maxCount"
      :before-delete="handleBeforeDelete"
    >
      <div class="upload-item">
        <ProSvg name="image-upload" class="icon" />
      </div>
    </van-uploader>
  </div>
</template>

<script lang="ts" setup>
import { UploaderFileListItem } from 'vant';
import { defineProps, defineEmits } from 'vue';
import { useCustomFieldValue } from '@vant/use';
import ProSvg from '@/components/ProSvg/index.vue';
import { fileUpload } from '@/api/modules/file';
import { UPLOAD_TYPE_ENUM } from '@/common/constants';

const emits = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: Array as () => Array<string>,
    default: () => [],
  },
  maxCount: {
    type: Number,
    default: 1,
  },
  uploadType: {
    type: String as () => UPLOAD_TYPE_ENUM,
    default: UPLOAD_TYPE_ENUM.OTHER,
  },
});

const fileList = ref<Array<UploaderFileListItem>>([]);

useCustomFieldValue(() => props.modelValue);

const handleAfterRead = (e: { file: File; content: string }) => {
  fileUpload(e.file, props.uploadType).then((res) => {
    if (res.code === '10000') {
      emits('update:modelValue', [...props.modelValue, res.data.url]);
    }
  });
};

const handleBeforeDelete = (file: string, target: { index: number }) => {
  const { index } = target;
  emits(
    'update:modelValue',
    props.modelValue.filter((x, i) => i !== index),
  );
};

watch(
  () => props.modelValue,
  (val) => {
    fileList.value = val.map((item) => ({ url: item }));
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-image-upload {
  margin-top: 20px;
  .upload-item {
    width: 160px;
    height: 160px;
    background: #f7f8fd;
    border-radius: 12px;
    border: 1px dashed #c1ccdd;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      font-size: 50px;
    }
  }
  .van-uploader {
    :deep(.van-uploader__wrapper) {
      .van-uploader__input-wrapper {
        margin-right: 30px;
        margin-bottom: 0px;
      }
      .van-uploader__preview {
        margin-right: 30px;
        margin-bottom: 0px;
        border-radius: 12px;
        border: 1px dashed #c1ccdd;
        .van-uploader__preview-image {
          width: 160px;
          height: 160px;
        }
        .van-uploader__preview-delete {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          right: -17px;
          top: -17px;
          background: #acbbd0;
          border: 4px solid #ffffff;
          text-align: center;
          .van-uploader__preview-delete-icon {
            position: static;
            font-size: 24px;
            display: block;
            transform: none;
          }
        }
      }
    }
  }
}
</style>
