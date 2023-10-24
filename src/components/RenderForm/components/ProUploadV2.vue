<template>
  <ProFormItem
    :class="{ 'com-van-upload-wrap': true, 'com-van-upload-wrap-view': isView }"
    :model-value="state.modelValue"
  >
    <template v-if="subLabel" #label>
      {{ filedAttrs.label }}<span class="sub-label">{{ subLabel }}</span>
    </template>
    <template #input>
      <div class="com-image-upload">
        <van-uploader
          :model-value="fileList"
          :after-read="handleAfterRead"
          :max-count="maxCount"
          :before-delete="handleBeforeDelete"
          :disabled="isView"
          accept="image/jpg"
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
  </ProFormItem>
</template>

<script lang="ts" setup>
import { UploaderFileListItem } from 'vant';
import { useCustomFieldValue } from '@vant/use';
import ProSvg from '@/components/ProSvg/index.vue';
import { fileUpload } from '@/api/modules/file';
import { UPLOAD_TYPE_ENUM, ATTACHMENT_CATEGORY_ENUM, ATTACHMENT_OBJECT_TYPE_ENUM } from '@/common/constants';
import { useAttrsAndSlots } from '../hooks';
import { VAN_PRO_FORM_KEY } from '../utils';

interface UploadProps {
  modelValue: UploaderFileListItem[];
  maxCount: number;
  uploadType: string;
}

interface FileUploadRes {
  code: string;
  data: { url: string; ossKey: string };
}

const { filedAttrs, filedSlots, attrs, slots } = toRefs(useAttrsAndSlots());

const { formState, extraProvision } = inject(VAN_PRO_FORM_KEY) || {};

// 非默认 slots
const noDefaultSlots = computed(() => Object.keys(slots).filter((key) => key !== 'default'));

const emits = defineEmits(['update:modelValue', 'onUploaded']);

interface FileProps {
  category: string;
  objectType: string;
  objectId?: string;
  name?: string;
  uri: string;
  id?: number;
}

const props = defineProps({
  modelValue: {
    type: Array as () => FileProps[],
    default: () => [],
  },
  maxCount: {
    type: Number,
    default: 1,
  },
  /** 副label */
  subLabel: {
    type: String,
    default: '',
  },
  uploadType: {
    type: String as () => UPLOAD_TYPE_ENUM,
    default: UPLOAD_TYPE_ENUM.OTHER,
  },
  /** 附件类型(发牌/身份证...) */
  category: {
    type: Number as () => ATTACHMENT_CATEGORY_ENUM,
    default: ATTACHMENT_CATEGORY_ENUM.OTHER,
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
});

const fileList = computed(() => (state.modelValue || []).map(({ uri }) => ({ url: uri })));

useCustomFieldValue(() => state.modelValue);

const handleAfterRead = (e: { file: File; content: string }) => {
  fileUpload(e.file, props.uploadType).then((res) => {
    const { code, data } = (res || {}) as FileUploadRes;
    if (code === '10000' && data.url) {
      state.modelValue.push({
        objectId: extraProvision.objectId,
        uri: data.url,
        category: props.category,
        objectType: props.objectType || extraProvision.objectType,
      });
      emits('onUploaded', data);
    }
  });
};

const handleBeforeDelete = (file: string, target: { index: number }) => {
  const { index } = target;
  state.modelValue.splice(index, 1);
};

watch(
  () => state.modelValue,
  (val) => {
    // if (formState?.formData && filedAttrs.value.name) {
    //   formState.formData[filedAttrs.value.name] = val;
    // }
    emits('update:modelValue', val);
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (val) => {
    if (Array.isArray(state.modelValue)) {
      state.modelValue = val;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-van-upload-wrap {
  flex-direction: column;

  :deep(.van-field__label) {
    width: 100%;
  }

  .sub-label {
    color: #99a9c0;
    font-size: 26px;
  }

  :deep(.van-cell__right-icon) {
    display: none;
  }

  &.com-van-upload-wrap-view {
    :deep(.van-uploader__preview-delete) {
      display: none;
    }
  }
}
.com-image-upload {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 690px;
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
