<template>
  <div class="com-risk-list-wrapper">
    <VanPopup v-model:show="state.show" title="选择附加险" show-footer position="bottom" closeable @close="onClose">
      <div class="popup-title">选择附加险</div>
      <div class="risk-list">
        <van-checkbox-group v-model="checked">
          <van-cell-group inset>
            <VanCell v-for="item in riskList" :key="item.id" :title="item.riskName" @click="toggle(item.id)">
              <template #right-icon>
                <van-checkbox
                  :ref="(el) => (checkboxRefs[item.id] = el)"
                  :disabled="disabled.includes(item.id)"
                  shape="square"
                  :name="item.id"
                  @click.stop="toggle(item.id)"
                />
              </template>
            </VanCell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
      <div class="footer-bar">
        <VanButton type="primary" :disabled="!state.currentChecked.length" block @click="onFinished">确认</VanButton>
      </div>
    </VanPopup>
  </div>
</template>
<script lang="ts" setup>
import { combineConsoleFeatures } from 'vscode-languageserver';
import ProPopup from '@/components/ProPopup/index.vue';

const props = defineProps({
  riskList: {
    type: Array,
    required: true,
    default: () => [],
  },
  show: {
    type: Boolean,
    required: true,
    default: false,
  },
  collocationList: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Array,
    required: true,
    default: () => [],
  },
  modelValue: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emits = defineEmits(['finished', 'close', 'update:modelValue']);

const checkboxRefs = ref<any[]>([]);
const checked = ref<any[]>([]);
const disabled = ref<any[]>(props.disabled);

const state = reactive({
  show: props.show,
  currentChecked: [] as any[],
});

const calcRelation = (riskId: number, status: boolean) => {
  if (!props.collocationList.length) {
    if (status) {
      state.currentChecked = [];
      return;
    }
    state.currentChecked.push(riskId);
    return;
  }

  props.collocationList.forEach((riderRisk: any) => {
    if (riskId === riderRisk.riskId) {
      if (!status) {
        if (riderRisk.collocationType === 2) {
          state.currentChecked.push(riderRisk.collocationRiskId, riskId);
        } else if (riderRisk.collocationType === 3) {
          state.currentChecked.push(riskId);
          disabled.value.push(riderRisk.collocationRiskId);
        }
        state.currentChecked.push(riskId);
      } else {
        if (riderRisk.collocationType === 2) {
          state.currentChecked = state.currentChecked.filter(
            (id) => !(id === riderRisk.collocationRiskId || id === riskId),
          );
        } else if (riderRisk.collocationType === 3) {
          state.currentChecked = state.currentChecked.filter((id) => id !== riskId);
          disabled.value.filter((id) => id !== riderRisk.collocationRiskId);
        }
        state.currentChecked = state.currentChecked.filter((id) => id !== riskId);
      }
    }
  });
};

const onChange = (names) => {
  console.log('names', names);
};

const onClick = () => {
  console.log(123123);
};

const toggle = (index: number) => {
  const status = state.currentChecked.includes(index);
  calcRelation(index, status);
  checkboxRefs?.value?.[index]?.toggle?.();
};

const onClose = () => {
  emits('close');
};

const onFinished = () => {
  const checkedItems = props.riskList.filter((risk) => state.currentChecked.includes(risk.id));
  emits('update:modelValue', checked);
  emits('finished', checkedItems);
  emits('close');
};

onBeforeUpdate(() => {
  checkboxRefs.value = [];
});

watch(
  () => props.modelValue,
  (newVal) => {
    checked.value = newVal;
    disabled.value = newVal;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-risk-list-wrapper {
  .popup-title {
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 64px;
  }
  .risk-list {
    height: 1038px;
    padding-bottom: 150px;
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
