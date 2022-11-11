<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-11 18:16:33
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/order/components/fieldInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-field-info">
    <div v-if="label" class="label">
      {{ label }}
    </div>
    <slot v-if="!!slots.label" name="label" />
    <div class="content">
      {{ content }}
    </div>
    <slot v-if="!!slots.content" name="content" />
  </div>
</template>

<script lang="ts" setup>
const slots = useSlots();
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.com-field-info {
  min-height: 106px;
  line-height: 106px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: #393d46;
  margin: 0 30px;
  border-bottom: 1px solid $zaui-line;
  &:last-child {
    border-bottom: none;
  }
  .label {
    min-width: 130px;
  }
  .content {
    display: flex;
    align-items: center;
    word-break: break-all;
    line-height: 53px !important;
    text-align: right;
  }
}
</style>
