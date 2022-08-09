<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 20:07:46
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-02 18:42:02
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/infoCollection/components/BeneficiaryInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-beneficiary-wrapper">
    <ProField
      v-if="factorObj.relationToInsured"
      v-model="state.formInfo.relationToInsured"
      name="relationToInsured"
      required
      label="是被保人的"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.relationToInsured" :options="RELATION_INSURED_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProPicker
      v-if="factorObj.certType"
      v-model="state.formInfo.certType"
      label="证件类型"
      name="certType"
      readonly
      :data-source="certType"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      required
    >
    </ProPicker>
    <ProField v-if="factorObj.certNo" v-model="state.formInfo.certNo" name="certNo" required label="证件号码">
    </ProField>
    <ProField v-if="factorObj.name" v-model="state.formInfo.name" required name="name" label="姓名"> </ProField>
    <ProField v-if="factorObj.gender" v-model="state.formInfo.gender" required name="gender" label="性别">
      <template #input>
        <ProRadioButton v-model="state.formInfo.gender" :options="SEX_LIMIT_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProDatePicker
      v-if="factorObj.birthday"
      v-model="state.formInfo.birthday"
      label="出生日期"
      name="birthday"
      required
    ></ProDatePicker>
    <ProDatePicker
      v-if="factorObj.certEndDate"
      v-model="state.formInfo.certEndDate"
      label="有效期至"
      name="certEndDate"
      required
    ></ProDatePicker>
    <ProPicker
      v-if="factorObj.country"
      v-model="state.formInfo.extInfo.nationalityCode"
      label="国籍"
      name="nationalityCode"
      :data-source="nationalityCode"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      required
    >
    </ProPicker>
    <ProPicker
      v-if="factorObj.beneficiaryType"
      v-model="state.formInfo.benefitOrder"
      label="受益人顺序"
      name="benefitOrder"
      :data-source="BENEFICIARY_ORDER"
      required
    >
    </ProPicker>
    <ProField v-model="state.formInfo.benefitRate" name="benefitRate" label="受益比例"> </ProField>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { BeneficiaryReqItem, ProductInsureFactorItem } from '@/api/index.data';
import { RELATION_INSURED_LIST, BENEFICIARY_ORDER } from '@/common/constants/infoCollection';
import { SEX_LIMIT_LIST, CERT_TYPE_LIST } from '@/common/constants';
import useDicData from '@/hooks/useDicData';

interface Props {
  formInfo: BeneficiaryReqItem;
  factorList: ProductInsureFactorItem[];
}

interface FactorObj {
  [props: string]: ProductInsureFactorItem[];
}

interface State {
  formInfo: BeneficiaryReqItem;
}

const props = withDefaults(defineProps<Props>(), {
  formInfo: () => ({} as BeneficiaryReqItem),
});

const state = ref<State>({
  formInfo: props.formInfo,
});

const emits = defineEmits(['update:images']);
const certType = useDicData('CERT_TYPE'); // 证件类型
const marriageStatus = useDicData('MARRIAGE_STATUS'); // 婚姻状况
const degree = useDicData('DEGREE'); // 学历
const nationalityCode = useDicData('NATIONALITY'); // 国籍
const region = useDicData('NATIONAL_REGION_CODE'); // 全国区域编码

const factorObj = computed(() => {
  const factor: FactorObj = {};
  props.factorList.forEach((factorItem) => {
    (factor[factorItem.code] = factor[factorItem.code] || []).push(factorItem);
  });
  return factor;
});
</script>
