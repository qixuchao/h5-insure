<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 16:43:35
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-14 22:39:12
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/createProposal/components/ProductList/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-product-list-wrapper">
    <div v-for="risk in productRiskList" :key="risk.riskCode">
      <div class="risk-item-wrapper">
        <ProTitle :risk-type="risk.riskType" :title="risk.riskName" />
        <div class="risk-premium">
          保费:<span class="premium">{{ risk.premium }}</span>
        </div>
        <div class="risk-factor">
          <div class="factor">
            <span class="factor-value">3500000</span>
            <span class="factor-name"> 保额(元) </span>
          </div>
          <div class="factor">
            <span class="factor-value">至终身</span>
            <span class="factor-name"> 保障期间 </span>
          </div>
          <div class="factor">
            <span class="factor-value">10年缴</span>
            <span class="factor-name"> 缴费期间 </span>
          </div>
        </div>
        <div class="operate-bar">
          <ProCheckButton>删除</ProCheckButton>
          <ProCheckButton activated>+ 附加险</ProCheckButton>
          <ProCheckButton activated>修改</ProCheckButton>
        </div>
      </div>
      <div v-for="riderRisk in risk.proposalProductRiskVOList" :key="riderRisk.riskCode" class="risk-item-wrapper">
        <ProTitle :risk-type="riderRisk.riskType" :title="riderRisk.riskName" />
        <div class="risk-premium">
          保费:<span class="premium">{{ riderRisk.premium }}</span>
        </div>
        <div class="risk-factor">
          <div class="factor">
            <span class="factor-value">3500000</span>
            <span class="factor-name"> 保额(元) </span>
          </div>
          <div class="factor">
            <span class="factor-value">至终身</span>
            <span class="factor-name"> 保障期间 </span>
          </div>
          <div class="factor">
            <span class="factor-value">10年缴</span>
            <span class="factor-name"> 缴费期间 </span>
          </div>
        </div>
        <div class="operate-bar">
          <ProCheckButton>删除</ProCheckButton>
          <ProCheckButton activated>+ 附加险</ProCheckButton>
          <ProCheckButton activated>修改</ProCheckButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { ProposalProductRiskVoItem } from '@/api/modules/createProposal.data';

interface Props {
  productRiskList: ProposalProductRiskVoItem[];
}

const props = withDefaults(defineProps<Props>(), {
  productRiskList: () => [],
});

const emits = defineEmits(['deleteRisk', 'updateRisk', 'addRisk']);

const deleteRisk = (riskRecord: ProposalProductRiskVoItem) => {
  emits('deleteRisk', riskRecord);
};

const updateRisk = (riskRecord: ProposalProductRiskVoItem) => {
  emits('deleteRisk', riskRecord);
};

const addRisk = (riskRecord: ProposalProductRiskVoItem) => {
  emits('addRisk', riskRecord);
};
</script>
