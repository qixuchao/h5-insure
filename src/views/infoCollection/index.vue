<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 14:08:44
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-28 12:41:09
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/InfoCollection/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-info-wrapper">
    <ProForm v-if="!state.isLoading" ref="formRef">
      <ProCard title="投保人">
        <PersonalInfo
          v-model:images="holderImages"
          :form-info="formInfo.tenantOrderHolder"
          :factor-list="pageFactor.HOLDER"
        ></PersonalInfo>
      </ProCard>
      <ProCard title="被保人">
        <ProField
          v-model="formInfo.tenantOrderInsuredList[0].relationToHolder"
          label="为谁保单"
          name="relationToHolder"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="formInfo.tenantOrderInsuredList[0].relationToHolder"
              :options="RELATION_HOLDER_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <PersonalInfo
          v-if="formInfo.tenantOrderInsuredList[0].relationToHolder !== '0'"
          v-model:images="insuredImages"
          :form-info="formInfo.tenantOrderInsuredList[0]"
          :factor-list="pageFactor.INSURER || []"
        ></PersonalInfo>
        <ProField label="投保地区" name="type" placeholder="请选择" is-link></ProField>
      </ProCard>

      <ProCard title="受益人">
        <ProField
          v-model="formInfo.tenantOrderInsuredList[0].beneficiaryType"
          label="受益人类型"
          name="beneficiaryType"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="formInfo.tenantOrderInsuredList[0].beneficiaryType"
              :options="BENEFICIARY_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <div v-if="formInfo.tenantOrderInsuredList[0].beneficiaryType == 2" class="beneficiary-part">
          <div
            v-for="(beneficiary, index) in formInfo.tenantOrderInsuredList[0].beneficiaryReqList"
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
        <ProCheckButton v-if="!state.currentAddress" activated @click="toggleAddress(true)"
          >选择保单通讯信息</ProCheckButton
        >
        <van-cell v-else title="单元格" is-link>
          <template #title>
            <div class="radio-item-wrapper">
              <p>
                <span class="name">{{ state.addressList[state.currentAddress - 1].contactName }}</span>
                <span class="hone">{{ state.addressList[state.currentAddress - 1].contactPhoneNo }}</span>
              </p>
              <p class="address">{{ state.addressList[state.currentAddress - 1].contactAddress }}</p>
            </div>
          </template>
        </van-cell>
      </ProCard>
    </ProForm>
    <div class="footer-button">
      <VanButton block type="primary" @click="goNextPage">下一步</VanButton>
    </div>
    <AddressSelect
      v-model="state.currentAddress"
      :show="showAddress"
      :data-source="state.addressList"
      @submit="selectAddress"
    ></AddressSelect>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useToggle } from '@vant/use';
import { conditionalExpression } from '@babel/types';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import { getInitFactor, nextStep, getTemplateInfo, getOrderDetail } from '@/api';
import {
  FactorData,
  NextStepRequestData,
  TenantOrderHolder,
  HolderExtInfo,
  TenantOrderBeneficiaryItem,
  ContactInfo,
  TemplatePageItem,
  ProductInsureFactorItem,
} from '@/api/index.data';
import { RELATION_HOLDER_LIST, BENEFICIARY_LIST } from '@/common/constants/infoCollection';
import BeneficiaryInfo from './components/BeneficiaryInfo/index.vue';
import PersonalInfo from './components/PersonalInfo/index.vue';
import AddressSelect from './components/AddressSelect/index.vue';

interface State {
  beneficiaryId: number;
  addressList: ContactInfo[];
  nextPage: '';
  currentAddress: any;
  isLoading: boolean;
}

type BeneficiaryItem = TenantOrderBeneficiaryItem & { beneficiaryId?: number };

interface FactorEnums {
  [props: string]: ProductInsureFactorItem[];
}

const router = useRouter();
const route = useRoute();

const { templateId = 1, orderNo = '2022072710380711215', tenantId = '9991000007' } = route.query;
const [showAddress, toggleAddress] = useToggle();
const pageCode = route.path === '/infoPreview' ? 'infoPreview' : 'infoCollection';
const pageFactor = ref<FactorEnums>({});
// 表单信息
const formInfo = ref<any>({
  extInfo: {
    pageCode,
  },
  tenantOrderHolder: {
    extInfo: {},
  } as TenantOrderHolder,
  tenantOrderInsuredList: [
    {
      relationToHolder: '0',
      extInfo: {},
      tenantOrderBeneficiaryList: [
        {
          beneficiaryId: 0,
          extInfo: {},
        },
      ],
    },
  ],
  operateOption: {
    withBeneficiaryInfo: true,
    withHolderInfo: true,
    withInsuredInfo: true,
    withAttachmentInfo: true,
  },
});
const formRef = ref<any>(null);
const holderImages = ref<string[]>([]);
const insuredImages = ref<string[]>([]);
const state = reactive<State>({
  beneficiaryId: 0,
  addressList: [],
  nextPage: '',
  currentAddress: null,
  isLoading: true,
});

const goNextPage = () => {
  const formData = { ...formInfo.value };
  formData.tenantOrderAttachmentList = [
    {
      category: 2,
      objectType: 2,
      name: '投保人证件正面',
      uri: holderImages.value[0],
    },
    {
      category: 3,
      objectType: 2,
      name: '投保人证件背面',
      uri: holderImages.value[1],
    },
    {
      category: 2,
      objectType: 3,
      name: '被保人证件正面',
      uri: insuredImages.value[0],
    },
    {
      category: 2,
      objectType: 3,
      name: '被保人证件背面',
      uri: insuredImages.value[1],
    },
  ];
  nextStep(formData).then(({ code, data }) => {
    if (code === '10000') {
      if (data.pageAction.pageAction === 'jumpToPage') {
        router.push({
          path: PAGE_ROUTE_ENUMS[data.pageAction.data.nextPageCode],
          query: route.query,
        });
      }
    }
  });
  // formRef.value.validate((validate: boolean) => {
  //   if (!validate) {
  //     nextStep({ pageCode }).then(({ code, data }) => {
  //       if (code === '10000') {
  //         console.log('data', data);
  //       }
  //     });
  //   }
  // });
};

const selectAddress = (value) => {
  console.log('value', value);
};

const addBeneficiary = () => {
  state.beneficiaryId += 1;
  formInfo.value.tenantOrderInsuredList[0].beneficiaryReqList.push({
    id: state.beneficiaryId,
    extInfo: {},
  } as BeneficiaryItem);
};

const removeBeneficiary = (beneficiaryItem: BeneficiaryItem) => {
  formInfo.value.tenantOrderInsuredList[0].beneficiaryReqList =
    formInfo.value.tenantOrderInsuredList[0].beneficiaryReqList.filter((beneficiary: BeneficiaryItem) => {
      return beneficiary.beneficiaryId !== beneficiaryItem.beneficiaryId;
    });
};

const queryOrderDetail = () => {
  getOrderDetail({ orderNo, tenantId })
    .then(({ code, data }) => {
      if (code === '10000') {
        const currentData = data;
        currentData.extInfo = { ...currentData.extInfo, pageCode, templateId };
        currentData.tenantOrderHolder = currentData.tenantOrderHolder || {};
        currentData.tenantOrderHolder.extInfo = currentData.tenantOrderHolder.extInfo || {};
        currentData.tenantOrderInsuredList[0].extInfo = currentData.tenantOrderInsuredList[0].extInfo || {};
        currentData.tenantOrderInsuredList[0].tenantOrderBeneficiaryList =
          currentData.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((list: any) => {
            const currentList = list;
            currentList.extInfo = {};
            return currentList;
          });
        currentData.tenantOrderAttachmentList.forEach((item) => {
          item.category === 2; // 正面
          item.objectType;
          if (item.category === 2) {
            if (item.objectType === 2) {
              holderImages[0] = item.uri;
            } else if (item.objectType === 3) {
              insuredImages[0] = item.uri;
            }
          } else if (item.category === 3) {
            if (item.objectType === 2) {
              holderImages[1] = item.uri;
            } else if (item.objectType === 3) {
              insuredImages[1] = item.uri;
            }
          }
        });
        Object.assign(formInfo.value, currentData);
      }
    })
    .finally(() => {
      state.isLoading = false;
    });
};

onBeforeMount(() => {
  queryOrderDetail();
  getInitFactor({ pageCode: 'infoCollection', templateId }).then(({ code, data }) => {
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

watch(
  () => formInfo.value,
  (newVal) => {
    if (newVal) {
      const addressList = [
        {
          contactAddress: newVal.tenantOrderHolder?.extInfo?.familyAddress || 1231123,
          contactName: newVal.tenantOrderHolder.name || 123131,
          contactPhoneNo: newVal.tenantOrderHolder.mobile || 123132,
        },
        {
          contactAddress: newVal.tenantOrderHolder?.extInfo?.workAddress,
          contactName: newVal.tenantOrderHolder.name,
          contactPhoneNo: newVal.tenantOrderHolder.mobile,
        },
        {
          contactAddress: newVal.tenantOrderInsuredList[0]?.extInfo?.familyAddress,
          contactName: newVal.tenantOrderInsuredList[0]?.name,
          contactPhoneNo: newVal.tenantOrderInsuredList[0]?.mobile,
        },
        {
          contactAddress: newVal.tenantOrderInsuredList[0]?.extInfo?.workAddress,
          contactName: newVal.tenantOrderInsuredList[0].name,
          contactPhoneNo: newVal.tenantOrderInsuredList[0].mobile,
        },
      ];

      state.addressList = addressList.filter((address: ContactInfo) => {
        return address.contactAddress && address.contactName && address.contactPhoneNo;
      });
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
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

  .radio-item-wrapper {
    padding: 0 32px;
    p {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC, serif;
      color: #393d46;
      margin: 5px 0;
    }
    .name {
      font-weight: 600;
      margin-right: 30px;
    }
    .phone {
      font-weight: 400;
    }
  }
}
</style>
