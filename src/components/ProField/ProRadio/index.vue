<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-23 18:00:52
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-08 20:29:20
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProField/ProRadio/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-pro-radio-wrap">
    <ProField
      v-if="factorObj.sex?.isDisplay === 'YES'"
      v-model="state.formInfo.gender"
      :required="factorObj.sex?.isMustInput === 'YES'"
      label="性别"
      name="gender"
      placeholder="请选择"
      :is-view="isIdCard"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.gender" :options="SEX_LIMIT_LIST"></ProRadioButton>
      </template>
    </ProField>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';

const props = withDefaults(defineProps<any>(), {
  dataSource: () => [],
});
</script>
