<template>
  <div class="com-pro-popup">
    <VanPopup v-model:show="isShow" :="$attrs">
      <slot> </slot>
      <div v-if="showFooter" class="footer-bar">
        <VanButton type="primary">确定</VanButton>
      </div>
    </VanPopup>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  showFooter: {
    type: Boolean,
    default: false,
  },
});

const instance = getCurrentInstance();

const isShow = ref(false);

watch(
  () => props.show,
  (newVal) => {
    isShow.value = newVal;
    instance?.update();
  },
);
</script>
<style lang="scss" scope>
.com-pro-popup {
}
</style>
