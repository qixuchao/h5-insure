<template>
  <div class="com-image-upload">
    <van-uploader v-model="fileList" :after-read="handleAfterRead" :max-count="maxCount">
      <div class="upload-item">
        <ProSvg name="image-upload" class="icon" />
      </div>
      <!-- <template #preview-delete>111</template> -->
    </van-uploader>
  </div>
</template>

<script lang="ts" setup>
import { UploaderFileListItem } from 'vant';
import { defineProps, defineEmits } from 'vue';
import ProSvg from '@/components/ProSvg/index.vue';

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
});

const fileList = ref<Array<UploaderFileListItem>>(props.modelValue.map((x) => ({ url: x })));

const handleAfterRead = (e) => {
  console.log(e);
};
</script>

<style lang="scss" scoped>
.com-image-upload {
  padding: 30px;
  .upload-item {
    width: 160px;
    height: 160px;
    background: #f7f8fd;
    border-radius: 12px;
    border: 1px dashed #c1ccdd;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      font-size: 50px;
    }
  }
  .van-uploader {
    ::v-deep .van-uploader__wrapper {
      .van-uploader__preview {
        margin-right: 30px;
        margin-bottom: 30px;
        border-radius: 12px;
        border: 1px dashed #c1ccdd;
        .van-uploader__preview-image {
          width: 160px;
          height: 160px;
        }
      }
    }
  }
}
</style>
