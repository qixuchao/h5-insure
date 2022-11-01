<!--
 * @Author: zhaopu
 * @Date: 2022-11-01 13:46:41
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-01 14:53:03
 * @Description: 加油包
-->
<template>
  <div class="refueling-bag-com">
    <div class="title">加油包</div>
    <ProForm ref="formRef">
      <ProField
        v-for="(item, index) in productList"
        :key="`${item.value}_${index}`"
        v-model="item.value"
        :label="item.label"
        required
        placeholder="请选择"
      >
        <template #input>
          <ProRadioButton v-model="item.value" :options="INSURE_TYPE_LIST" @change="onChange"></ProRadioButton>
        </template>
      </ProField>
    </ProForm>
  </div>
</template>

<script lang="ts" setup>
import { INSURE_TYPE_LIST } from '@/common/constants/infoCollection';

const props = defineProps({
  productList: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.refueling-bag-com {
  background: #fff;
  .title {
    background: #ffffff;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
    line-height: 30px;
    padding: 30px 25px;
  }
}
</style>
