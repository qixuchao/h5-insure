<template>
  <ProFormItem class="com-van-id-card-upload-wrap" :model-value="state.modelValue" :="filedAttrs" :rules="rules">
    <template #input>
      <van-uploader
        v-for="(item, index) in uploaderList"
        :key="item.uploadType"
        :max-count="1"
        :deletable="false"
        :preview-full-image="isView"
        accept="image/.jpg, image/jpg"
        capture="user"
        :disabled="isView"
        :model-value="fileList[index]"
        @click-preview="onClick(index)"
      >
        <van-popover v-model:show="showPopover[index]" class="upload-popover" :offset="item.offset">
          <template #reference>
            <div class="upload-item">
              <ProSvg :name="item.imgSrc" class="bg" color="var(--van-primary-color)"></ProSvg>
              <ProSvg v-if="!isView" name="camera" class="icon" />
              <div v-if="!isView" class="text">{{ item.title }}</div>
            </div>
          </template>

          <div v-for="(action, i) in actionList" :key="i" class="select-item" @click="handleRead(index, i)">
            <span>{{ action.text }}</span>
            <ProSvg :name="action.icon" font-size="22px" class="icon" />
          </div>
        </van-popover>
        <template #preview-cover>
          <van-popover v-model:show="showPopover[index]" class="upload-popover" :offset="item.offset">
            <template #reference>
              <div v-if="!isView" class="upload-item cover">
                <div class="bg" />
                <ProSvg name="camera" color="green" class="icon" />
                <div class="text">{{ item.title }}</div>
              </div>
            </template>
            <div v-for="(action, i) in actionList" :key="i" class="select-item" @click="handleRead(index, i)">
              <span>{{ action.text }}</span>
              <ProSvg :name="action.icon" font-size="22px" class="icon" />
            </div>
          </van-popover>
        </template>
      </van-uploader>
      <!-- <van-uploader
        ref="tempUploaderRef"
        class="temp-uploader"
        :max-count="1"
        :after-read="(e: UploaderFileListItem) => handleRead(e, state.currentIndex)"
        :before-read="beforeRead"
      /> -->
    </template>
  </ProFormItem>
</template>
<script lang="ts" setup name="ProAddress">
import type { UploaderInstance, UploaderFileListItem } from 'vant';
import { Toast } from 'vant';
import { useCustomFieldValue } from '@vant/use';
import { isNotEmptyArray } from '@/common/constants/utils';
import { fileUploadWithBase64, ocr } from '@/api/modules/file';
import {
  UPLOAD_TYPE_ENUM,
  OCR_TYPE_ENUM,
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
  YES_NO_ENUM,
} from '@/common/constants';
import { VAN_PRO_FORM_KEY, calculateAge } from '../utils';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { useAttrsAndSlots } from '../hooks';
import { takeIdCardPhoto, selectAlbum } from '@/utils/lianSDK';

interface FileUploadRes {
  code: string;
  data: { url: string; ossKey: string };
}

const actionList = [
  {
    icon: 'icon-zhaopiantuku',
    text: '照片图库',
  },
  {
    icon: 'icon-paizhao',
    text: '拍照',
  },
];

const uploaderList = [
  {
    uploadType: UPLOAD_TYPE_ENUM.ID_CARD_FRONT,
    category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_CERT,
    title: '上传人像面',
    imgSrc: 'idCard-front',
    offset: [50, -10],
  },
  {
    uploadType: UPLOAD_TYPE_ENUM.ID_CARD_BACK,
    category: ATTACHMENT_CATEGORY_ENUM.REVERSE_CERT,
    title: '上传国徽面',
    imgSrc: 'idCard-back',
    offset: [-50, -10],
  },
];

const showPopover = ref([false, false]);
const fileList = ref([]);

const { filedAttrs } = toRefs(useAttrsAndSlots());

const rules = computed(() => {
  return [
    {
      validator: (value) => {
        if (filedAttrs.value.required && fileList.value.length !== 2) {
          return false;
        }
        return true;
      },
      trigger: ['onBlur', 'onSubmit'],
    },
  ];
});

const { formState, extraProvision } = inject(VAN_PRO_FORM_KEY) || {};

const tempUploaderRef = ref<UploaderInstance>();

const emits = defineEmits(['update:modelValue', 'ocr']);

const props = defineProps({
  modelValue: {
    type: Array as () => string[],
    default: () => [],
  },
  /** 数据对象类型-属于哪个模块(被保险人...) */
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

useCustomFieldValue(() => state.modelValue);

const beforeRead = (e) => {
  const fileType = (e.name || '').match(/\.([^.]+)$/)?.[1];
  if (fileType !== 'jpg') {
    Toast('上传只支持jpg图片');
    return false;
  }
  return true;
};

const handleRead = async (index, action) => {
  const { uploadType, title, category } = uploaderList[index];
  let base64str = '';
  if (action) {
    base64str = await takeIdCardPhoto(YES_NO_ENUM.YES === index + 1);
  } else {
    base64str = await selectAlbum();
  }

  if (!base64str) {
    return;
  }

  const { code, data } = await fileUploadWithBase64(`data:image/jpeg;base64,${base64str}`, uploadType);
  if (code === '10000' && data.url) {
    state.modelValue[index] = {
      ...state.modelValue[index],
      objectId: extraProvision.objectId,
      uri: data.url,
      category,
      name: title,
      objectType: props.objectType || extraProvision.objectType,
    };
    state.ossKeyList[index] = data.ossKey;
    if (formState.formData && filedAttrs.value.name) {
      formState.formData[filedAttrs.value.name] = state.modelValue;
    }
  }
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
    fileList.value = (val || []).map((item) => [{ url: item.uri }]);
    if (Array.isArray(val)) {
      // emits('update:modelValue', val);
    }
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
      state.modelValue = val || [];
      console.log('props.modelValue', props.modelValue);
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
          const { personName, personIdCard, validDateEnd, birthday, personAddress, validDateStart, ...rest } =
            data.idCardOcrVO || {};
          const ocrData = {
            name: personName,
            certNo: personIdCard,
            certEndDate: validDateEnd,
            certStartDate: validDateStart,
            birthday,
            age: calculateAge(birthday),
            longArea: {
              ...formState.formData.longArea,
              detail: personAddress,
            },
            ...rest,
          };

          if (formState.formData) {
            Object.assign(formState.formData, ocrData, { ocrData });
          }

          emits('ocr', ocrData);
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
<style lang="scss">
.upload-popover {
  .van-popover__content {
    width: 482px;
    border-radius: 24px;
    .select-item {
      line-height: 84px;
      display: flex;
      justify-content: space-between;
      padding: 0 32px;
      font-size: 32px;
      font-weight: 400;
      align-items: center;
      color: #333333;
      border-bottom: 1px solid rgba(211, 211, 211, 1);
      &:last-of-type {
        border: none;
      }
    }
  }
}
</style>
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
      z-index: 1;
    }
    .icon {
      width: 66px;
      height: 66px;
      z-index: 9;
    }
    .text {
      font-size: 26px;
      margin-top: 9px;
      color: var(--van-primary-color);
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
