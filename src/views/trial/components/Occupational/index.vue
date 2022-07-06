<template>
  <div class="com-occupational-wrapper">
    <VanPopup v-model:show="state.show" show-footer position="bottom" closeable @close="onClose">
      <div class="popup-title">选择职业</div>
      <div class="popup-content">
        <van-cascader
          v-model="state.currentValue"
          title="请选择职业"
          :show-header="false"
          placeholder="请选择"
          :options="state.options"
          active-color="#0d6efe"
          :field-names="{
            text: 'value',
            value: 'code',
            children: 'children',
          }"
          @finish="onFinished"
        />
      </div>
    </VanPopup>
  </div>
</template>
<script lang="ts" setup>
import ProPopup from '@/components/ProPopup/index.vue';
import { getDic } from '@/api';
import { localStore } from '@/hooks/useStorage';

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
    default: () => [],
  },
  insuredCode: {
    type: String,
    required: true,
    default: '',
  },
  show: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emits = defineEmits(['finish', 'close', 'update:modelValue']);

const state = reactive({
  show: props.show,
  options: [],
  currentValue: '',
});

const onClose = () => {
  emits('close');
};

const onFinished = ({ value, selectedOptions }: any) => {
  const text = (selectedOptions || []).map((option) => option.value).join('/');
  const currentValue = +selectedOptions[selectedOptions.length - 1].name;
  emits('update:modelValue', currentValue);
  emits('finish', text);
  onClose();
};

const dealEmptyChildren = (occupationalList: any[]) => {
  const list: any[] = occupationalList;
  const dealData = (lis) => {
    lis.forEach((li) => {
      const l = li;
      if (l.children.length) {
        dealData(l.children);
      } else {
        l.children = null;
      }
    });
  };
  dealData(list);
  return list;
};

const queryOccupationalList = () => {
  const dictCode = `${props.insurerCode?.toLocaleUpperCase?.()}_OCCUPATION`;
  const occupationalObj = localStore.get('occupational') || {};
  if (occupationalObj[dictCode]) {
    state.options = occupationalObj[dictCode];
    return;
  }
  getDic({ dictCodeList: [dictCode] }).then(({ code, data }) => {
    if (code === '10000') {
      const options = dealEmptyChildren(data?.[0]?.dictItemList || []);
      state.options = options;
      occupationalObj[dictCode] = options;
      localStore.set('occupational', occupationalObj);
    }
  });
};

watch(
  () => props,
  () => {
    queryOccupationalList(props.insuredCode);
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (newVal) => {},
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-occupational-wrapper {
  .popup-title {
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 64px;
  }
  .popup-content {
    height: 1038px;
    // padding-bottom: 150px;
  }
  .footer-bar {
    padding: 0 40px;
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
