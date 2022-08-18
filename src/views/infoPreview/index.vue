<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 14:08:44
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-18 22:52:49
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/InfoCollection/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-info-wrapper">
    <ProForm v-if="!state.isLoading" ref="formRef" is-view>
      <InsuredPart :product-data="formInfo.tenantOrderInsuredList[0]?.tenantOrderProductList[0]"></InsuredPart>
      <ProCard title="投保人">
        <PersonalInfo
          v-model:images="holderImages"
          :form-info="formInfo.tenantOrderHolder"
          :factor-list="pageFactor.HOLDER"
          is-view
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
              is-view
            ></ProRadioButton>
          </template>
        </ProField>
        <PersonalInfo
          v-if="+formInfo.tenantOrderInsuredList[0].relationToHolder !== 1"
          v-model:images="insuredImages"
          :form-info="formInfo.tenantOrderInsuredList[0]"
          :factor-list="pageFactor.INSURER || []"
          is-view
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
              is-view
            ></ProRadioButton>
          </template>
        </ProField>
        <div v-if="formInfo.tenantOrderInsuredList[0].insuredBeneficiaryType == 2" class="beneficiary-part">
          <div
            v-for="(beneficiary, index) in formInfo.tenantOrderInsuredList[0].tenantOrderBeneficiaryList"
            :key="beneficiary.beneficiaryId"
            class="beneficiary-item"
          >
            <div class="part-title">
              <span class="title">{{ `受益人${index + 1}` }}</span>
            </div>
            <PersonalInfo
              v-model:images="beneficiaryImages"
              :form-info="beneficiary"
              :factor-list="pageFactor.BENEFICIARY || []"
              :prefix="`beneficiary-${index}`"
              is-view
              :beneficiary-list="formInfo.tenantOrderInsuredList[0].tenantOrderBeneficiaryList"
            ></PersonalInfo>
          </div>
        </div>
      </ProCard>
      <ProCard title="保单通讯信息">
        <van-cell v-if="Object.keys(currentAddressInfo).length" title="单元格">
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
      <VanButton block type="primary" @click="goNextPage">下一步</VanButton>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useToggle } from '@vant/use';
import { conditionalExpression } from '@babel/types';
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
import { RELATION_HOLDER_LIST, BENEFICIARY_LIST } from '@/common/constants/infoCollection';
import BeneficiaryInfo from '../infoCollection/components/BeneficiaryInfo/index.vue';
import PersonalInfo from '../infoCollection/components/PersonalInfo/index.vue';
import AddressSelect from '../infoCollection/components/AddressSelect/index.vue';
import InsuredPart from './components/InsuredPart.vue';
import useDicData from '@/hooks/useDicData';

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
const region = useDicData('NATIONAL_REGION_CODE');
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
  return formInfo.value.extInfo?.contactInfo?.[0] || {};
});

const goNextPage = () => {
  nextStep(formInfo.value).then(({ code, data }) => {
    if (code === '10000') {
      if (data.pageAction.pageAction === 'jumpToPage') {
        router.push({
          path: PAGE_ROUTE_ENUMS[data.pageAction.data.nextPageCode],
          query: route.query,
        });
      }
    }
  });
};

const addBeneficiary = () => {
  state.beneficiaryId += 1;
  formInfo.value.tenantOrderInsuredList[0].beneficiaryReqList.push({
    id: state.beneficiaryId,
    extInfo: {},
  } as BeneficiaryItem);
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
    padding: 0;
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
