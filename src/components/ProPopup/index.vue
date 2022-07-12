<template>
  <Popup
    v-model:show="isShow"
    :="$attrs"
    position="bottom"
    :style="{ height: '90%' }"
    round
    closeable
    class="com-pro-popup"
  >
    <div class="container">
      <div class="header">
        {{ title }}
      </div>
      <div class="body">
        <slot> </slot>
      </div>
      <div v-if="showFooter" class="footer">
        <VanButton type="primary" block @click="handleSubmit">确定</VanButton>
      </div>
    </div>
  </Popup>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
import { Popup } from 'vant';

const emits = defineEmits(['update:show', 'submit']);

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  showFooter: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
});

const instance = getCurrentInstance();

const isShow = ref(props.show);

const handleSubmit = () => {
  emits('submit');
};

watch(
  () => props.show,
  (newVal) => {
    isShow.value = newVal;
    instance?.update();
  },
);

watch(isShow, (val) => {
  emits('update:show', val);
});
</script>
<style lang="scss" scope>
.com-pro-popup {
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      width: 100%;
      flex: 0 0 104px;
      font-size: 34px;
      font-weight: 600;
      color: #393d46;
      text-align: center;
      line-height: 104px;
    }
    .body {
      flex: 1;
      height: 0;
      overflow-y: auto;
    }
    .footer {
      flex: 0 0 104px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
