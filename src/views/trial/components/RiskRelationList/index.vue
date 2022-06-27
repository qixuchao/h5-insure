<template>
  <div class="com-risk-list-wrapper">
    <ProPopup :show="state.show" title="选择附加险" show-footer position="bottom" closeable>
      <div class="risk-list">
        <van-cell-group v-model="checked" inset>
          <VanCell v-for="item in riskList" :key="item.id" :title="item.riskName" @click="toggle(item.id)">
            <template #right-icon>
              <van-checkbox :ref="(el) => (checkboxRefs[item.id] = el)" :name="item.id" @click.stop />
            </template>
          </VanCell>
        </van-cell-group>
      </div>
    </ProPopup>
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
    default: false,
  },
});

const emits = defineEmits(['finished']);

const checkboxRefs = ref<any[]>([]);
const checked = ref([]);

const state = reactive({
  show: props.show,
});

const toggle = (index) => {
  checkboxRefs.value[index].toggle();
};

watch(
  () => props,
  (newVal) => {
    console.log('newVal', newVal);
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
