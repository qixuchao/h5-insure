<!--
 * @Author: zhaopu
 * @Date: 2022-11-28 12:56:44
 * @LastEditors: jianmei.ji
 * @LastEditTime: 2023-03-22 15:19:17
 * @Description:
-->
<template>
  <div class="inscribedContent-content">
    <div v-dompurify-html="lastContent" class="content"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  inscribedContent: {
    type: String,
    default: '',
  },
});

const lastContent = ref<string>();

watch(
  () => props.inscribedContent,
  (val) => {
    if (!val) {
      lastContent.value = '';
    } else {
      lastContent.value = val;
    }
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
.inscribedContent-content {
  background: rgb(244 244 244);
  padding: 50px 40px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #b7bec4;
  line-height: 38px;
  text-align: center;
}
</style>
