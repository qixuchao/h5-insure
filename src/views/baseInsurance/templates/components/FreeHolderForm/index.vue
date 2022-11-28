<template>
  <div class="free-crad">
    <div class="container">
      <div>！！！ 最后一步 填写信息 ！！！</div>
      <div class="holder-form">输入框</div>
      <ProShadowButton text="激活保障"></ProShadowButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import ProShadowButton from '../ProShadowButton/index.vue';

const props = defineProps({
  colors: {
    type: Array,
    default: () => ['#CDDFFE', '#F1F7FE'],
  },
});
</script>

<style lang="scss" scoped>
.free-crad {
  padding: 0 32px;
  background: linear-gradient(v-bind('props.colors[0]'), v-bind('props.colors[1]'));
  .container {
    padding: 46px 40px;
    background: #ffffff;
    text-align: center;
    border-radius: 40px;

    .holder-form {
      height: 350px;
    }
  }
}
</style>
