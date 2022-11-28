<!--
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-11-28 10:22:03
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-28 11:19:08
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/baseInsurance/templates/netSale/detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap class="net-sale-wrap">
      <ProCard> </ProCard>
      <InsureForm ref="formRef" is-view :form-info="formData" :factor-object="factorObj"></InsureForm>
    </ProPageWrap>
  </van-config-provider>
</template>
<script lang="ts" setup name="netSaleDetail">
import { useRoute, useRouter } from 'vue-router';
import { useTheme } from '../../theme';

const themeVars = useTheme();

const formData = ref<any>();
const factorObj = ref<any>();
</script>
