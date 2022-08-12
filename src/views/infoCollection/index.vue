<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 14:08:44
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-11 08:36:35
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
          prefix="holder"
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
          v-if="+formInfo.tenantOrderInsuredList[0].relationToHolder !== 1"
          v-model:images="insuredImages"
          :form-info="formInfo.tenantOrderInsuredList[0]"
          :factor-list="pageFactor.INSURER || []"
          prefix="insure"
        ></PersonalInfo>
        <ProCascader
          v-model="formInfo.tenantOrderInsuredList[0].extInfo.insureAreaCode"
          v-model:field1="formInfo.tenantOrderInsuredList[0].extInfo.insureProvinceCode"
          v-model:field2="formInfo.tenantOrderInsuredList[0].extInfo.insureCityCode"
          v-model:field3="formInfo.tenantOrderInsuredList[0].extInfo.insureAreaCode"
          label="投保地区"
          name="insureProvinceCode"
          placeholder="请选择"
          is-link
          required
          :data-source="region"
          :mapping="{ label: 'name', value: 'code', children: 'children' }"
        ></ProCascader>
      </ProCard>

      <ProCard title="受益人">
        <ProField
          v-model="formInfo.tenantOrderInsuredList[0].insuredBeneficiaryType"
          label="受益人类型"
          name="insuredBeneficiaryType"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="formInfo.tenantOrderInsuredList[0].insuredBeneficiaryType"
              :options="BENEFICIARY_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <div v-if="formInfo.tenantOrderInsuredList[0].insuredBeneficiaryType == 2" class="beneficiary-part">
          <div
            v-for="(beneficiary, index) in formInfo.tenantOrderInsuredList[0].tenantOrderBeneficiaryList"
            :key="beneficiary.beneficiaryId || beneficiary.id"
            class="beneficiary-item"
          >
            <div class="part-title">
              <span class="title">{{ `受益人${index + 1}` }}</span>
              <ProSvg name="delete" @click="removeBeneficiary(beneficiary)">删除</ProSvg>
            </div>
            <PersonalInfo
              v-model:images="beneficiaryImages"
              :form-info="beneficiary"
              :factor-list="pageFactor.BENEFICIARY || []"
              :prefix="`beneficiary-${index}`"
            ></PersonalInfo>
          </div>
          <VanButton @click="addBeneficiary">+添加受益人</VanButton>
        </div>
      </ProCard>
      <ProCard title="保单通讯信息">
        <ProCheckButton v-if="!Object.keys(currentAddressInfo).length" activated @click="toggleAddress(true)"
          >选择保单通讯信息</ProCheckButton
        >
        <van-cell v-else title="单元格" is-link @click="toggleAddress(true)">
          <template #title>
            <div class="radio-item-wrapper">
              <p>
                <span class="name">{{ currentAddressInfo.contactName }}</span>
                <span class="hone">{{ currentAddressInfo.contactPhoneNo }}</span>
              </p>
              <p class="address">{{ currentAddressInfo.contactAddress }}</p>
            </div>
          </template>
        </van-cell>
      </ProCard>
    </ProForm>
    <div class="footer-button">
      <span class="trial-result"
        >首期<span class="result-num"
          >￥{{ formInfo.tenantOrderInsuredList?.[0]?.tenantOrderProductList?.[0].premium?.toLocaleString?.() }}</span
        >
      </span>
      <div class="operate-btn">
        <VanButton block type="primary" @click="goNextPage">下一步</VanButton>
      </div>
    </div>
    <AddressSelect
      v-if="showAddress"
      v-model="state.currentAddress"
      :show="showAddress"
      :data-source="state.addressList"
      @submit="selectAddress"
      @close="toggleAddress(false)"
    ></AddressSelect>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useToggle } from '@vant/use';
import { conditionalExpression } from '@babel/types';
import { truncateSync } from 'fs';
import { Toast } from 'vant/es';
import { PAGE_ROUTE_ENUMS, ATTACHMENT_CATEGORY_ENUM, ATTACHMENT_OBJECT_TYPE_ENUM } from '@/common/constants';
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
import useDicData from '@/hooks/useDicData';
import { RELATION_HOLDER_LIST, BENEFICIARY_LIST, BENEFICIARY_ENUM } from '@/common/constants/infoCollection';
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
const region = useDicData('NATIONAL_REGION_CODE');
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
      insuredBeneficiaryType: '1',
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
const holderImagesId = ref<number[]>([]);
const insuredImagesId = ref<number[]>([]);

const beneficiaryImages = ref<string[]>([]);
const state = reactive<State>({
  beneficiaryId: 0,
  addressList: [],
  nextPage: '',
  currentAddress: null,
  isLoading: true,
});

const currentAddressInfo = computed(() => {
  if (state.currentAddress) {
    return state.addressList[state.currentAddress];
  }
  return formInfo.value.extInfo?.contactInfo?.[0] || {};
});

const goNextPage = () => {
  const formData = { ...formInfo.value };
  formData.extInfo = { ...formData.extInfo, contactInfo: [currentAddressInfo.value] };
  console.log('🚀 ~ goNextPage ~ formData', formData);
  formData.tenantOrderAttachmentList = [
    {
      category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_CERT,
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER,
      objectId: formInfo.value.tenantOrderHolder.id,
      name: '投保人证件正面',
      uri: holderImages.value[0],
      id: holderImagesId.value[0],
    },
    {
      category: ATTACHMENT_CATEGORY_ENUM.REVERSE_CERT,
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER,
      objectId: formInfo.value.tenantOrderHolder.id,
      name: '投保人证件背面',
      uri: holderImages.value[1],
      id: holderImagesId.value[1],
    },
    {
      category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_CERT,
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.INSURED,
      objectId: formInfo.value.tenantOrderInsuredList[0].id,
      name: '被保人证件正面',
      uri: insuredImages.value[0],
      id: insuredImagesId.value[1],
    },
    {
      category: ATTACHMENT_CATEGORY_ENUM.REVERSE_CERT,
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.INSURED,
      objectId: formInfo.value.tenantOrderInsuredList[0].id,
      name: '被保人证件背面',
      uri: insuredImages.value[1],
      id: insuredImagesId.value[1],
    },
  ];

  formRef.value.validate().then((validate: boolean) => {
    if (formData.tenantOrderInsuredList[0].insuredBeneficiaryType === BENEFICIARY_ENUM.SPECIFY) {
      const result = {};
      formData.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((item) => {
        if (result[item.benefitOrder]) {
          result[item.benefitOrder].sum += Number(item.benefitRate);
        } else {
          result[item.benefitOrder] = { sum: Number(item.benefitRate) };
        }
      });
      if (Object.values(result).some((x) => x.sum !== 100)) {
        Toast.fail('同一顺位的受益人比例之和必须为100');
        return;
      }
    }
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
  });
};

const selectAddress = (value) => {
  console.log('value', value);
};

const addBeneficiary = () => {
  state.beneficiaryId += 1;
  formInfo.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({
    id: state.beneficiaryId,
    extInfo: {},
  } as BeneficiaryItem);
};

const removeBeneficiary = (beneficiaryItem: BeneficiaryItem) => {
  formInfo.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList =
    formInfo.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((beneficiary: BeneficiaryItem) => {
      return beneficiary.beneficiaryId !== beneficiaryItem.beneficiaryId || beneficiaryItem.id !== beneficiary.id;
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
          if (item.category === ATTACHMENT_CATEGORY_ENUM.OBVERSE_CERT) {
            if (item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER) {
              holderImages.value[0] = item.uri;
              holderImagesId.value[0] = item.id;
            } else if (item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.INSURED) {
              insuredImages.value[0] = item.uri;
              insuredImagesId.value[0] = item.id;
            }
          } else if (item.category === ATTACHMENT_CATEGORY_ENUM.REVERSE_CERT) {
            if (item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER) {
              holderImages.value[1] = item.uri;
              holderImagesId.value[1] = item.id;
            } else if (item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.INSURED) {
              insuredImages.value[1] = item.uri;
              holderImagesId.value[1] = item.id;
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
          contactAddress: newVal.tenantOrderHolder?.extInfo?.familyAddress,
          contactName: newVal.tenantOrderHolder.name,
          contactPhoneNo: newVal.tenantOrderHolder.mobile,
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

watch(
  () => formInfo.value.tenantOrderInsuredList[0].relationToHolder,
  (newVal) => {
    if (+newVal === 1) {
      Object.assign(formInfo.value.tenantOrderInsuredList[0], formInfo.value.tenantOrderHolder, {
        id: formInfo.value.tenantOrderInsuredList[0].id,
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
        font-weight: 600;
        color: #393d46;
      }
    }
  }

  .trial-result {
    width: 440px;
    font-weight: 400;
    font-size: 34px;
    color: #393d46;
    .result-num {
      margin-left: 13px;
      color: #ff5840;
      font-weight: bold;
      margin-left: 16px;
    }
  }

  .operate-btn {
    width: 50%;
  }

  .radio-item-wrapper {
    padding: 0;
    p {
      font-size: 30px;
      color: #393d46;
      margin: 5px 0;
      word-break: break-all;
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
