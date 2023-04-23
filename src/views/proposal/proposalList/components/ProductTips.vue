<template>
  <div v-if="Boolean(errorMsg)" class="error-msg"><van-icon class="warning-icon" name="warning-o" />{{ errorMsg }}</div>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue';

interface Props {
  errorMsg: string;
}
withDefaults(defineProps<Props>(), {
  errorMsg: '',
});
</script>

<style scoped lang="scss">
.error-msg {
  margin: 0 30px 30px;
  padding: 9px 20px;
  line-height: 32px;
  font-size: 24px;
  color: #ff5840;
  background: rgba(255, 88, 64, 0.1);
  border-radius: 10px;
  .warning-icon {
    margin-right: 10px;
  }
}
</style>
