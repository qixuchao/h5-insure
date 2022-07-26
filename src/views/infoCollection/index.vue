<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 14:08:44
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-27 07:49:11
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/InfoCollection/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-info-wrapper">
    <ProForm ref="formRef">
      <ProCard title="投保人">
        <PersonalInfo :form-info="formInfo.holderReq" :factor-list="pageFactor.HOLDER"></PersonalInfo>
      </ProCard>
      <ProCard title="被保人">
        <ProField
          v-model="formInfo.insuredReqList[0].relationToHolder"
          label="为谁保单"
          name="relationToHolder"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="formInfo.insuredReqList[0].relationToHolder"
              :options="RELATION_HOLDER_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <PersonalInfo
          v-if="formInfo.insuredReqList[0].relationToHolder !== '0'"
          :form-info="formInfo.insuredReqList[0]"
          :factor-list="pageFactor.INSURER || []"
        ></PersonalInfo>
        <ProField label="投保地区" name="type" placeholder="请选择" is-link></ProField>
      </ProCard>

      <ProCard title="受益人">
        <ProField
          v-model="formInfo.insuredReqList[0].beneficiaryType"
          label="受益人类型"
          name="beneficiaryType"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="formInfo.insuredReqList[0].beneficiaryType"
              :options="BENEFICIARY_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <div v-if="formInfo.insuredReqList[0].beneficiaryType == 2" class="beneficiary-part">
          <div
            v-for="(beneficiary, index) in formInfo.insuredReqList[0].beneficiaryReqList"
            :key="beneficiary.beneficiaryId"
            class="beneficiary-item"
          >
            <div class="part-title">
              <span class="title">{{ `受益人${index + 1}` }}</span>
              <ProSvg name="delete" @click="removeBeneficiary(beneficiary)">删除</ProSvg>
            </div>
            <BeneficiaryInfo :form-info="beneficiary" :factor-list="pageFactor.BENEFICIARY" />
          </div>
          <VanButton @click="addBeneficiary">+添加受益人</VanButton>
        </div>
      </ProCard>
      <ProCard title="保单通讯信息">
        <ProCheckButton activated @click="toggleAddress(true)">选择保单通讯信息</ProCheckButton>
      </ProCard>
    </ProForm>
    <div class="footer-button">
      <VanButton block type="primary" @click="goNextPage">下一步</VanButton>
    </div>
    <!-- <ProSelect v-model="" :show="showAddress" :data-source="[]"></ProSelect> -->
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useToggle } from '@vant/use';
import { getInitFactor, nextStep, getTemplateInfo } from '@/api';
import { queryDetail } from '@/api/modules/order';
import {
  FactorData,
  NextStepRequstData,
  HolderReq,
  HolderExtInfo,
  BeneficiaryReqItem,
  ContactInfo,
  TemplatePageItem,
  ProductInsureFactorItem,
} from '@/api/index.data';
import { RELATION_HOLDER_LIST, BENEFICIARY_LIST } from '@/common/constants/infoCollection';
import BeneficiaryInfo from './components/BeneficiaryInfo/index.vue';
import PersonalInfo from './components/PersonalInfo/index.vue';

interface State {
  beneficiaryId: number;
  addressList: ContactInfo[];
  nextPage: '';
}

type BeneficiaryItem = BeneficiaryReqItem & { beneficiaryId?: number };

interface FactorEnums {
  [props: string]: ProductInsureFactorItem[];
}

const router = useRouter();
const route = useRoute();

const { templateId = 1, orderNo = '2022021815432987130620' } = route.query;
const [showAddress, toggleAddress] = useToggle();
const pageCode = 'infoCollection';
const pageFactor = ref<FactorEnums>({});
// 投保人信息
const formInfo = ref<any>({
  holderReq: {
    extInfo: {},
  } as HolderReq,
  pageCode: 'infoCollection',
  insuredReqList: [
    {
      relationToHolder: '0',
      extInfo: {},
      beneficiaryReqList: [
        {
          beneficiaryId: 0,
          extInfo: {},
        },
      ],
    },
  ],
});
const formRef = ref<any>(null);

const state = reactive<State>({
  beneficiaryId: 0,
  addressList: [],
  nextPage: '',
});

const goNextPage = () => {
  nextStep(formInfo.value).then(({ code, data }) => {
    if (code === '10000') {
      console.log('data', data);
    }
  });
  formRef.value.validate((validate: boolean) => {
    if (!validate) {
      nextStep({ pageCode }).then(({ code, data }) => {
        if (code === '10000') {
          console.log('data', data);
        }
      });
    }
  });
};

const addBeneficiary = () => {
  state.beneficiaryId += 1;
  formInfo.value.insuredReqList[0].beneficiaryReqList.push({ id: state.beneficiaryId, extInfo: {} } as BeneficiaryItem);
};

const removeBeneficiary = (beneficiaryItem: BeneficiaryItem) => {
  formInfo.value.insuredReqList[0].beneficiaryReqList = formInfo.value.insuredReqList[0].beneficiaryReqList.filter(
    (beneficiary: BeneficiaryItem) => {
      return beneficiary.beneficiaryId !== beneficiaryItem.beneficiaryId;
    },
  );
};

const queryOrderDetail = () => {
  queryDetail({ orderNo }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(data, formInfo.value);
    }
  });
};

onBeforeMount(() => {
  queryOrderDetail();
  getInitFactor({ pageCode, templateId }).then(({ code, data }) => {
    if (code === '10000') {
      const factorObj = {
        BENEFICIARY: [] as ProductInsureFactorItem[],
        INSURER: [] as ProductInsureFactorItem[],
        HOLDER: [] as ProductInsureFactorItem[],
      };
      data.productInsureFactorList.forEach((factor: ProductInsureFactorItem) => {
        (factorObj[factor.moduleType] = factorObj[factor.moduleType] || []).push(factor);
      });
      pageFactor.value = factorObj;
    }
  });
});
</script>

<style lang="scss" scope>
.page-info-wrapper {
  padding-bottom: 150px;
  .com-card {
    .com-card-wrap {
      .body {
        padding: 0;
      }
    }
  }

  .beneficiary-part {
    .part-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 $zaui-card-border;
      background-color: #f2f5fc;
      height: 90px;
      .title {
        font-size: 30px;
        font-family: PingFangSC-Semibold, PingFang SC, self;
        font-weight: 600;
        color: #393d46;
      }
    }
  }
}
</style>
