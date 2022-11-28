<!--
 * @Author: zhaopu
 * @Date: 2022-11-28 12:56:44
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-28 13:27:34
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
    lastContent.value = val.replaceAll('\n', '<br />');
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
