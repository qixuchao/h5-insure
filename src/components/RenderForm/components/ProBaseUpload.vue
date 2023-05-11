<template>
  <div class="com-image-upload">
    <van-uploader
      :model-value="state.modelValue"
      :after-read="handleAfterRead"
      :max-count="maxCount"
      :before-delete="handleBeforeDelete"
      :disabled="isView"
    >
      <slot>
        <div class="upload-item">
          <ProSvg name="image-upload" class="icon" />
        </div>
      </slot>
      <template v-for="slotName in noDefaultSlots" :key="slotName" #[slotName]="slotParams">
        <slot :name="slotName" v-bind="slotParams || {}" />
      </template>
    </van-uploader>
  </div>
</template>

<script lang="ts" setup>
import { UploaderFileListItem } from 'vant';
import ProSvg from '@/components/ProSvg/index.vue';
import { fileUpload } from '@/api/modules/file';
import {
  UPLOAD_TYPE_ENUM,
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
  isNotEmptyArray,
} from '@/common/constants';
import { useAttrsAndSlots } from '../hooks';
import { VAN_PRO_FORM_KEY } from '../utils';
import type { FileProps } from '../index.data';

interface UploadProps {
  modelValue: UploaderFileListItem[];
  maxCount: number;
  uploadType: string;
}

interface FileUploadRes {
  code: string;
  data: { url: string; ossKey: string };
}

const { slots } = toRefs(useAttrsAndSlots());

const { objectType } = inject(VAN_PRO_FORM_KEY) || {};

// 非默认 slots
const noDefaultSlots = computed(() => Object.keys(slots).filter((key) => key !== 'default'));

const emits = defineEmits(['update:modelValue', 'update:ossKeyList', 'onUploaded']);

const props = defineProps({
  modelValue: {
    type: Array as () => FileProps[],
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
  /** 附件类型(发牌/身份证...) */
  category: {
    type: Number as () => ATTACHMENT_CATEGORY_ENUM,
    default: null,
  },
  /** 数据对象类型-属于哪个模块(被保人...) */
  objectType: {
    type: Number as () => ATTACHMENT_OBJECT_TYPE_ENUM,
    default: null,
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  modelValue: [],
  ossKeyList: [],
});

const handleAfterRead = (e: { file: File; content: string }) => {
  fileUpload(e.file, props.uploadType).then((res) => {
    const { code, data } = (res || {}) as FileUploadRes;
    if (code === '10000' && data.url) {
      state.modelValue.push({
        url: data.url,
        category: props.category,
        objectType: props.objectType || objectType,
      });
      state.ossKeyList.push(data.ossKey);
      emits('onUploaded', data);
    }
  });
};

const handleBeforeDelete = (file: string, target: { index: number }) => {
  const { index } = target;
  state.modelValue.splice(index, 1);
  state.ossKeyList.splice(index, 1);
};

// watch(
//   () => state.modelValue,
//   (val) => {
//     // if (formState?.formData && filedAttrs.value.name) {
//     //   formState.formData[filedAttrs.value.name] = val;
//     // }
//     console.log('1111111cest');
//     emits('update:modelValue', val);
//   },
//   {
//     deep: true,
//     immediate: true,
//   },
// );

watch(
  () => state.ossKeyList,
  (val) => {
    emits('update:ossKeyList', val);
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (val) => {
    console.log('1111111cest');
    if (isNotEmptyArray(val)) {
      state.modelValue = val;
    } else {
      state.modelValue = [];
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-image-upload {
  margin-top: 20px;
  margin-bottom: 20px;
  // width: 690px;
  display: flex;
  justify-content: flex-start;
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
