<template>
  <ProFormItem class="com-van-bank-upload-wrap" :model-value="state.modelValue" :="filedAttrs">
    <template v-if="subLabel" #label>
      {{ filedAttrs.label }}<span class="sub-label">{{ subLabel }}</span>
    </template>
    <template #input>
      <template v-for="(item, index) in uploaderList" :key="item.title">
        <div class="com-image-upload">
          <van-uploader
            :max-count="1"
            :preview-full-image="isView"
            :disabled="isView"
            :deletable="!isView"
            :model-value="fileList[index]"
            :before-delete="() => handleBeforeDelete(index)"
            :after-read="(e: UploaderFileListItem) => handleRead(e, index)"
          >
            <slot>
              <div class="upload-item">
                <ProSvg name="image-upload" class="icon" />
              </div>
            </slot>
          </van-uploader>
        </div>
      </template>
    </template>
  </ProFormItem>
</template>
<script lang="ts" setup name="ProAddress">
import type { UploaderFileListItem } from 'vant';
import { useCustomFieldValue } from '@vant/use';
import { isNotEmptyArray } from '@/common/constants/utils';
import { fileUpload, ocr } from '@/api/modules/file';
import {
  UPLOAD_TYPE_ENUM,
  OCR_TYPE_ENUM,
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
} from '@/common/constants';
import { VAN_PRO_FORM_KEY } from '../utils';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import useDicData from '@/hooks/useDicData';
import type { FileProps } from '../index.data';
import { useAttrsAndSlots } from '../hooks';

interface FileUploadRes {
  code: string;
  data: { url: string; ossKey: string };
}

const uploaderList = [
  {
    category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_BANK_CARD,
    title: '银行卡正面照',
  },
  {
    category: ATTACHMENT_CATEGORY_ENUM.REVERSE_BANK_CARD,
    title: '银行卡反面照',
  },
];

const bankDic = useDicData('BANK');

const { filedAttrs } = toRefs(useAttrsAndSlots());

const { extraProvision } = inject(VAN_PRO_FORM_KEY) || {};
const emits = defineEmits(['update:modelValue', 'ocr']);

const props = defineProps({
  modelValue: {
    type: Array as () => FileProps[],
    default: () => [],
  },
  /** 副label */
  subLabel: {
    type: String,
    default: '',
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

useCustomFieldValue(() => state.modelValue);

const fileList = computed(() =>
  state.modelValue.map((item) =>
    item
      ? [
          {
            url: item.uri,
          },
        ]
      : [],
  ),
);

const handleRead = (e: UploaderFileListItem, index) => {
  const { title, category } = uploaderList[index];
  fileUpload(e.file, UPLOAD_TYPE_ENUM.BANK_CARD).then((res) => {
    const { code, data } = (res || {}) as FileUploadRes;
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
    }
  });
};

const handleBeforeDelete = (index: number) => {
  state.modelValue[index] = null;
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
    state.modelValue = val || [];
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
        imageType: OCR_TYPE_ENUM.BANK_CARD,
      }).then((res) => {
        const { data, code } = res;
        if (code === '10000' && data && data.bankCardOcrVO) {
          const { cardNo, bankName } = data.bankCardOcrVO;
          const { code } = bankDic.value?.find((x) => x.name === bankName) || {};
          emits('ocr', {
            bankName,
            payBank: code,
            bankCardNo: cardNo,
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
.com-van-bank-upload-wrap {
  flex-direction: column;

  :deep(.van-field__label) {
    width: 100%;
  }

  :deep(.van-field__value) {
    width: 100%;
  }

  .sub-label {
    color: #99a9c0;
    font-size: 26px;
  }

  :deep(.van-cell__right-icon) {
    display: none;
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
}
.com-image-upload {
  margin-top: 20px;
  margin-bottom: 20px;
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
