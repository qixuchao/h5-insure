<template>
  <div class="com-risk-list-wrapper">
    <VanPopup v-model:show="state.show" title="选择附加险" show-footer position="bottom" closeable @close="onClose">
      <div class="popup-title">选择附加险</div>
      <div class="risk-list">
        <van-checkbox-group v-model="checked">
          <van-cell-group inset>
            <VanCell v-for="item in riskList" :key="item.id" :title="item.riskName" @click="toggle(item.id, item)">
              <template #right-icon>
                <van-checkbox :ref="(el) => (checkboxRefs[item.id] = el)" shape="square" :name="item.id" @click.stop />
              </template>
            </VanCell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
      <div class="footer-bar">
        <VanButton type="primary" block @click="onFinished">确认</VanButton>
      </div>
    </VanPopup>
  </div>
</template>
<script lang="ts" setup>
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
});

const emits = defineEmits(['finished', 'close']);

const checkboxRefs = ref<any[]>([]);
const checked = ref([]);
const disabled = ref([]);

const state = reactive({
  show: props.show,
  checkedItems: [],
});

const calcRelation = (riskId) => {};

const toggle = (index: number, item: any) => {
  // if (checked.value.includes(index)) {
  // }
  checkboxRefs?.value?.[index]?.toggle?.();
};

const onClose = () => {
  emits('close');
};

const onFinished = () => {
  emits('finished', checked.value);
  emits('close');
};

onBeforeUpdate(() => {
  checkboxRefs.value = [];
});

watch(
  () => props.show,
  (newVal) => {
    state.show = newVal;
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
