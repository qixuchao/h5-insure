<template>
  <ProFormItem
    :model-value="state.fieldValue"
    :class="`${filedAttrs.visible === false ? 'com-van-field--hidden' : ''}`"
    v-bind="filedAttrs"
    :field-value-view="fieldValueView"
    :is-view="isView"
    @click="goFaceVerify"
  >
    <!-- 继承 slots -->
    <template v-for="slotName in Object.keys(filedSlots)" :key="slotName" #[slotName]="slotParams">
      <slot :name="slotName" v-bind="slotParams || {}" />
    </template>
  </ProFormItem>
</template>

<script lang="ts" setup name="ProPicker">
import { storeToRefs } from 'pinia';
import { useToggle } from '@vant/use';
import isNil from 'lodash-es/isNil';
import { useRoute, useRouter } from 'vue-router';
import { useWindowScroll } from '@vueuse/core';
import useAppStore from '@/store/app';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { isNotEmptyArray } from '@/common/constants/utils';
import { useAttrsAndSlots } from '../hooks';
import { deleteEmptyChildren, relatedConfigMap, VAN_PRO_FORM_KEY } from '../utils';
import { faceVerify, queryFaceVerifyResult } from '@/api/modules/verify';
import { OBJECT_TYPE_ENUM } from '@/common/constants';
import { sessionStore } from '@/hooks/useStorage';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';

const globalStore = useAppStore();
const { dictMap } = storeToRefs(globalStore);
const route = useRoute();
const router = useRouter();
const { x, y } = useWindowScroll(); // 拿到当前的滚动条，方便在通讯录回来时复原

const { tenantId, orderNo, biz_id } = route.query;

const { filedAttrs, filedSlots, attrs, slots } = toRefs(useAttrsAndSlots());

const { formState, extraProvision } = inject(VAN_PRO_FORM_KEY) || {};
const cacheData = inject('handleCache');

interface ColumnsFieldNames {
  text: string;
  value: string;
  children: string;
}

const props = defineProps({
  /**
   * ruleType 关联的 name (证件号验证)
   */
  relatedName: {
    type: String,
    default: '',
  },
  /**
   * 数据字典 code
   */
  dictCode: {
    type: String,
    default: '',
  },
  /**
   * modelvalue
   */
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * 是否默认选中第一项
   */
  isDefaultSelected: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:modelValue']);

const [show, toggle] = useToggle(false);

const state = reactive({
  fieldValue: '' as string | number,
  columns: [
    {
      label: '去认证',
      value: '',
    },
    {
      label: '已认证',
      value: '1',
    },
  ],
});

/**
 * 事件副作用, 定义对应 type 的副作用函数 `${type}Effect`
 * @param type onBlur、onChange
 * @param val
 */
const onEffect = (type, val) => {
  if (props.relatedName && type) {
    const effectFn = (relatedConfigMap[props.relatedName] || {})[`${type}Effect`];
    typeof effectFn === 'function' && effectFn(val, formState);
  }
};

// 跳转第三方人脸识别页面
const goFaceVerify = () => {
  if (props.isView) {
    return;
  }

  sessionStore.set(`${LIAN_STORAGE_KEY}_faceInfo`, {
    userInfo: formState.formData,
    scrollTop: y.value,
  });

  sessionStore.remove(`${LIAN_STORAGE_KEY}_bizId`);

  const { name: userName, certNo: certiNo, certType } = formState.formData || {};

  const params = {
    tenantId,
    faceAuthMode: 'TENCENT',
    callbackUrl: window.location.href,
    bizNo: orderNo,
    userName,
    certiNo,
    certType,
  };
  cacheData(false);
  faceVerify(params).then(({ code, data }) => {
    if (code === '10000') {
      window.location.href = data.originalUrl;
    }
  });
};

const getFaceVerifyResult = () => {
  if (!sessionStore.get(`${LIAN_STORAGE_KEY}_bizId`)) {
    return;
  }
  const { name: userName, certNo: certiNo, certType } = formState.formData || {};
  const params = {
    bizId: biz_id,
    certType,
    objectId: extraProvision.object,
    objectType: OBJECT_TYPE_ENUM[extraProvision.objectType],
    orderNo,
    tenantId,
  };
  queryFaceVerifyResult(params).then(({ code, data }) => {
    delete route.query.biz_id;
    delete route.query.nextPageCode;
    if (code === '10000') {
      if (data.status === 'SUCCESS') {
        state.fieldValue = '1';
        emits('update:modelValue', '1');
      }
    } else {
      state.fieldValue = '';
      emits('update:modelValue', '');
    }
  });
};
const dealColumns = (val) => {
  if (isNotEmptyArray(val)) {
    return val.map((item) => ({
      ...item,
      text: item[props.customFieldName.text],
      value: item[props.customFieldName.value],
    }));
  }
  return [];
};

// 数据源：1. 属性 columns 2. 全局字典数据
const columns = computed(() => {
  let tempColumns = [];
  if (isNotEmptyArray(props.columns)) {
    tempColumns = props.columns;
  }

  // 全局字典数据
  const singleDictData = dictMap.value[props.dictCode];
  if (props.dictCode && isNotEmptyArray(singleDictData)) {
    tempColumns = singleDictData;
  }
  return deleteEmptyChildren(dealColumns(tempColumns));
});

// 选中的索引
const defaultIndex = computed(() => {
  if (state.fieldValue) {
    return props.columns.findIndex(
      (column) => String(column[(props.customFieldName as ColumnsFieldNames)?.value]) === String(state.fieldValue),
    );
  }
  return '';
});

// field value view
const fieldValueView = computed(() => {
  if (isNotEmptyArray(state.columns)) {
    const currentItem = state.columns.find((item) => String(item.value) === String(state.fieldValue)) || {};

    return currentItem?.label || state.fieldValue || '去认证';
  }
  return state.fieldValue || '去认证';
});

watch(
  () => props.modelValue,
  (val) => {
    state.fieldValue = val;
  },
  {
    deep: true,
    immediate: true,
  },
);

onBeforeMount(() => {
  const bizId = sessionStore.get(`${LIAN_STORAGE_KEY}_bizId`);
  const pageInfo = sessionStore.get(`${LIAN_STORAGE_KEY}_faceInfo`);
  const { userInfo, scrollTop } = pageInfo || {};
  if (scrollTop) {
    document.documentElement.scrollTo(0, scrollTop);
    document.body.scrollTop = scrollTop; // 兼容微信滚动
    Object.assign(formState.formData, userInfo);
    sessionStore.remove(`${LIAN_STORAGE_KEY}_faceInfo`);
  }
  if (!bizId && biz_id) {
    sessionStore.set(`${LIAN_STORAGE_KEY}_bizId`, biz_id);
    getFaceVerifyResult();
  }
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss">
.van-cell.com-van-field {
  &.com-van-field--hidden {
    height: 0;
    min-height: 0;
    padding: 0;
    overflow: hidden;
  }
  .van-field__value {
    align-items: flex-start;
    .van-field__body {
      width: 100%;
    }
    .placeholder {
      color: var(--van-field-placeholder-text-color);
    }
  }
}
</style>
import { userInfo } from 'os';
