<template>
  <ProFormItem class="com-van-id-card-upload-wrap" :model-value="state.modelValue" :="filedAttrs">
    <template #input>
      <van-uploader
        v-for="(item, index) in uploaderList"
        :key="item.uploadType"
        :max-count="1"
        :deletable="false"
        :preview-full-image="isView"
        :disabled="isView"
        :model-value="fileList[index]"
        :after-read="(e: UploaderFileListItem) => handleRead(e, index)"
      >
        <!-- @click-preview="onClick(index)" -->
        <div class="upload-item">
          <img :src="item.imgSrc" class="bg" />
          <img v-if="!isView" :src="IDCardUploadIconImage" class="icon" />
          <div v-if="!isView" class="text">{{ item.title }}</div>
        </div>
        <template #preview-cover>
          <div v-if="!isView" class="upload-item cover" @click.stop="() => onClick(index)">
            <div class="bg" />
            <img :src="IDCardUploadIconImage" class="icon" />
            <div class="text">{{ item.title }}</div>
          </div>
        </template>
      </van-uploader>
      <van-uploader
        ref="tempUploaderRef"
        class="temp-uploader"
        :max-count="1"
        :after-read="(e: UploaderFileListItem) => handleRead(e, state.currentIndex)"
      />
    </template>
  </ProFormItem>
</template>
<script lang="ts" setup name="ProAddress">
import type { UploaderInstance, UploaderFileListItem } from 'vant';
import { useCustomFieldValue } from '@vant/use';
import { isNotEmptyArray } from '@/common/constants/utils';
import { fileUpload, ocr } from '@/api/modules/file';
import IDCardUploadIconImage from '@/assets/images/component/idcard-upload.png';
import IDCardUploadFrontImage from '@/assets/images/component/idcard-front.png';
import IDCardUploadBackImage from '@/assets/images/component/idcard-back.png';
import {
  UPLOAD_TYPE_ENUM,
  OCR_TYPE_ENUM,
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
} from '@/common/constants';
import { VAN_PRO_FORM_KEY } from '../utils';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { useAttrsAndSlots } from '../hooks';

interface FileUploadRes {
  code: string;
  data: { url: string; ossKey: string };
}

const uploaderList = [
  {
    uploadType: UPLOAD_TYPE_ENUM.ID_CARD_FRONT,
    category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_CERT,
    title: '上传人像面',
    imgSrc: IDCardUploadFrontImage,
  },
  {
    uploadType: UPLOAD_TYPE_ENUM.ID_CARD_BACK,
    category: ATTACHMENT_CATEGORY_ENUM.REVERSE_CERT,
    title: '上传国徽面',
    imgSrc: IDCardUploadBackImage,
  },
];

const { filedAttrs } = toRefs(useAttrsAndSlots());

const { formState, objectType, objectId } = inject(VAN_PRO_FORM_KEY) || {};

const tempUploaderRef = ref<UploaderInstance>();

const emits = defineEmits(['update:modelValue', 'ocr']);

const props = defineProps({
  modelValue: {
    type: Array as () => string[],
    default: () => [],
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
  currentIndex: null,
  modelValue: [],
  ossKeyList: [],
});

const fileList = computed(() => state.modelValue.map((item) => [{ url: item.uri }]));

useCustomFieldValue(() => state.modelValue);

const handleRead = (e: UploaderFileListItem, index) => {
  const { uploadType, title, category } = uploaderList[index];
  fileUpload(e.file, uploadType).then((res) => {
    const { code, data } = (res || {}) as FileUploadRes;
    if (code === '10000' && data.url) {
      state.modelValue[index] = {
        ...state.modelValue[index],
        objectId,
        uri: data.url,
        category,
        name: title,
        objectType: props.objectType || objectType,
      };
      state.ossKeyList[index] = data.ossKey;
      if (formState.formData && filedAttrs.value.name) {
        formState.formData[filedAttrs.value.name] = state.modelValue;
      }
    }
  });
};

const onClick = (index: number) => {
  if (!props.isView) {
    state.currentIndex = index;
    nextTick(() => {
      tempUploaderRef.value?.chooseFile();
    });
  }
};

watch(
  () => state.modelValue,
  (val) => {
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
    if (Array.isArray(val)) {
      state.modelValue = val;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.ossKeyList,
  (val) => {
    if (isNotEmptyArray(val) && val.length === 2) {
      ocr({
        ossKey: val,
        imageType: OCR_TYPE_ENUM.ID_CARD,
      }).then((res) => {
        const { data, code } = res;
        if (code === '10000' && data && data.idCardOcrVO) {
          // personAddress 户籍所在地, issueBy 发证机关, race 民族
          const { personName, personIdCard, validDateEnd, validDateStart, ...rest } = data.idCardOcrVO || {};
          emits('ocr', {
            name: personName,
            certNo: personIdCard,
            certEndDate: validDateEnd,
            certStartDate: validDateStart,
            ...rest,
          });
        }
      });
    }
  },
  {
    deep: true,
  },
);
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped>
.com-van-id-card-upload-wrap {
  flex-direction: column;
  justify-content: space-between;

  :deep(.van-field__label) {
    width: 100%;
  }

  :deep(.van-field__value) {
    width: 100%;
    padding: 20px 0;
    .van-field__control--custom {
      justify-content: space-between;
    }
  }

  .sub-label {
    color: #99a9c0;
    font-size: 26px;
  }

  :deep(.van-cell__right-icon) {
    display: none;
  }

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
