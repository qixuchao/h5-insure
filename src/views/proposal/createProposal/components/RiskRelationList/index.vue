<template>
  <div class="com-risk-list-wrapper">
    <VanPopup
      v-model:show="state.show"
      title="选择附加险"
      show-footer
      round
      position="bottom"
      closeable
      @close="onClose"
    >
      <div class="popup-title">选择附加险</div>
      <div class="risk-list">
        <van-checkbox-group v-model="checked">
          <van-cell-group inset>
            <VanCell
              v-for="item in riskList"
              :key="item.id"
              :title="item.riskName"
              :disabled="disabled.includes(item.id)"
              @click="toggle(item.id)"
            >
              <template #right-icon>
                <van-checkbox
                  :ref="(el) => (checkboxRefs[item.id] = el)"
                  shape="square"
                  :disabled="disabled.includes(item.id)"
                  :name="item.id"
                  @click.stop="toggle(item.id)"
                />
              </template>
              <template #title>
                <div class="cell-title">
                  <div class="title">
                    {{ item.riskName }}
                  </div>
                </div>
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
import { withDefaults } from 'vue';
import { CollocationVoItem, RiskDetailVoItem } from '@/api/modules/trial.data';

interface Props {
  riskList: RiskDetailVoItem[];
  show: boolean;
  collocationList: CollocationVoItem[];
  disabled: [];
  modelValue: [];
}

const props = withDefaults(defineProps<Props>(), {
  riskList: () => [],
  show: false,
  collocationList: () => [],
  disabled: () => [],
  modelValue: () => [],
});

const emits = defineEmits(['finished', 'close', 'checked', 'update:modelValue']);

const checkboxRefs = ref<any[]>([]);
const checked = ref<any[]>([]);
const disabled = ref<any[]>([...props.disabled]);

const state = reactive({
  show: props.show,
  currentChecked: [...props.modelValue] as any[],
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
  let checkedList: any[] = state.currentChecked;
  let disabledList: any[] = disabled.value;
  if (!status) {
    props.collocationList.forEach((riderRisk: any) => {
      if (riskId === riderRisk.riskId) {
        if (!status) {
          if (riderRisk.collocationType === 2) {
            checkedList.push(riderRisk.collocationRiskId);
          } else if (riderRisk.collocationType === 3) {
            disabledList.push(riderRisk.collocationRiskId);
          }
          checkedList.push(riskId);
        }
      }
    });
    state.currentChecked.push(...checkedList);
    disabled.value = disabledList;
  } else {
    props.collocationList.forEach((riderRisk: any) => {
      if (riskId === riderRisk.riskId) {
        if (riderRisk.collocationType === 2) {
          checkedList = checkedList.filter((id) => id !== riderRisk.collocationRiskId || id !== riskId);
        } else if (riderRisk.collocationType === 3) {
          checkedList = checkedList.filter((id) => id !== riskId);
          disabledList = disabledList.filter((id) => id !== riderRisk.collocationRiskId);
        } else {
          checkedList = checkedList.filter((id) => id !== riskId);
        }
      }
    });
    state.currentChecked = checkedList;
    disabled.value = disabledList;
  }
};

const toggle = (index: number) => {
  if (disabled.value.includes(index)) {
    return;
  }
  const status = state.currentChecked.includes(index);
  calcRelation(index, status);

  const checkedItems = props.riskList.filter((risk) => state.currentChecked.includes(risk.id));
  emits('checked', checkedItems, disabled.value);

  // checkboxRefs?.value?.[index]?.toggle?.();
};

const onClose = () => {
  emits('close');
};

const onFinished = () => {
  const checkedItems = props.riskList.filter((risk) => state.currentChecked.includes(risk.id));
  emits('update:modelValue', [...new Set(checked.value)]);
  emits('finished', checkedItems, disabled.value);
  emits('close');
};

onBeforeUpdate(() => {
  checkboxRefs.value = [];
});

watch(
  () => state.currentChecked,
  (newVal) => {
    checked.value = newVal;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (newVal) => {
    checked.value = newVal || [];
    disabled.value.push(...(newVal || []));
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
    font-size: 34px;
    font-weight: 600;
    color: #393d46;
  }
  .risk-list {
    height: 1038px;
    padding-bottom: 150px;
  }

  :deep(.van-cell-group--inset) {
    border-bottom: 1px solid #eeeff4;

    .van-cell {
      padding: 23px 0;
    }
  }

  .cell-title {
    display: flex;
    flex-direction: column;
    .title {
    }
    .title-desc {
      font-size: 24px;
      font-weight: 400;
      color: #99a9c0;
    }
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
