<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 14:08:44
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-13 00:39:35
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
          name="insureAreaCode"
          placeholder="请选择"
          is-link
          required
          :data-source="region"
          :mapping="{ label: 'name', value: 'code', children: 'children' }"
        />
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
              :beneficiary-list="formInfo.tenantOrderInsuredList[0].tenantOrderBeneficiaryList"
            ></PersonalInfo>
          </div>
          <VanButton @click="addBeneficiary">+添加受益人</VanButton>
        </div>
      </ProCard>
      <ProCard title="保单通讯信息">
        <ProCheckButton v-if="!Object.keys(currentAddressInfo)?.length" activated @click="toggleAddress(true)"
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
    <div class="footer-button" safe-area-inset-bottom>
      <div class="left">
        <div class="trial-result">
          首期<span class="result-num"
            >￥{{ formInfo.tenantOrderInsuredList?.[0]?.tenantOrderProductList?.[0].premium?.toLocaleString?.() }}</span
          >
        </div>
        <div class="result-desc">实际保费以后续为准</div>
      </div>
      <div class="operate-btn">
        <VanButton block type="primary" @click="reTrialPremium">下一步</VanButton>
      </div>
    </div>
    <AddressSelect
      v-if="showAddress"
      v-model="state.currentAddress"
      :show="showAddress"
      :data-source="addressList"
      @submit="selectAddress"
      @close="toggleAddress(false)"
    ></AddressSelect>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useToggle } from '@vant/use';
import { conditionalExpression } from '@babel/types';
import { truncateSync } from 'fs';
import { Toast } from 'vant/es';
import { PAGE_ROUTE_ENUMS, ATTACHMENT_CATEGORY_ENUM, ATTACHMENT_OBJECT_TYPE_ENUM } from '@/common/constants';
import { getInitFactor, nextStep, getTemplateInfo, getOrderDetail } from '@/api';
import { premiumCalc } from '@/api/modules/trial';
import { PAYMENT_PERIOD_ENUMS, INSURANCE_PERIOD_ENUMS, RISK_TYPE_ENUM } from '@/common/constants/trial';
import { PremiumCalcData, RiskVoItem, RiskPremiumDetailVoItem } from '@/api/modules/trial.data';
import {
  FactorData,
  NextStepRequestData,
  TenantOrderHolder,
  HolderExtInfo,
  TenantOrderBeneficiaryItem,
  ContactInfo,
  TemplatePageItem,
  ProductInsureFactorItem,
  TenantOrderRiskItem,
} from '@/api/index.data';
import useDicData from '@/hooks/useDicData';
import {
  RELATION_HOLDER_LIST,
  BENEFICIARY_LIST,
  BENEFICIARY_ENUM,
  RELATION_HOLDER_ENUM,
} from '@/common/constants/infoCollection';
import BeneficiaryInfo from './components/BeneficiaryInfo/index.vue';
import PersonalInfo from './components/PersonalInfo/index.vue';
import AddressSelect from './components/AddressSelect/index.vue';

interface State {
  beneficiaryId: number;
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

const {
  templateId = 1,
  orderNo = '2022072710380711215',
  productCode,
  tenantId = '9991000007',
  proposalId,
  insurerCode = 'kunlunhealth',
} = route.query;
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
    extInfo: {
      occupationCodeList: [],
    },
    holderType: 1,
  } as TenantOrderHolder,
  tenantOrderInsuredList: [
    {
      relationToHolder: '0',
      extInfo: {
        occupationCodeList: [],
      },
      insuredBeneficiaryType: '1',
      tenantOrderBeneficiaryList: [
        {
          beneficiaryId: 0,
          extInfo: {
            occupationCodeList: [],
          },
        },
      ],
    },
  ],
  operateOption: {
    withBeneficiaryInfo: true,
    withHolderInfo: true,
    withInsuredInfo: true,
    withAttachmentInfo: true,
    withProductInfo: true,
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
  nextPage: '',
  currentAddress: null,
  isLoading: true,
});

// 组装投被保人的通讯地址
const addressList = computed<ContactInfo[]>(() => {
  const currentAddressList = [
    {
      contactAddress: formInfo.value.tenantOrderHolder?.extInfo?.familyAddress,
      contactName: formInfo.value.tenantOrderHolder.name,
      contactPhoneNo: formInfo.value.tenantOrderHolder.mobile,
    },
    {
      contactAddress: formInfo.value.tenantOrderHolder?.extInfo?.workAddress,
      contactName: formInfo.value.tenantOrderHolder.name,
      contactPhoneNo: formInfo.value.tenantOrderHolder.mobile,
    },
    {
      contactAddress: formInfo.value.tenantOrderInsuredList[0]?.extInfo?.familyAddress,
      contactName: formInfo.value.tenantOrderInsuredList[0]?.name,
      contactPhoneNo: formInfo.value.tenantOrderInsuredList[0]?.mobile,
    },
    {
      contactAddress: formInfo.value.tenantOrderInsuredList[0]?.extInfo?.workAddress,
      contactName: formInfo.value.tenantOrderInsuredList[0].name,
      contactPhoneNo: formInfo.value.tenantOrderInsuredList[0].mobile,
    },
  ];

  return (
    currentAddressList.filter((address: ContactInfo) => {
      return address.contactAddress && address.contactName && address.contactPhoneNo;
    }) || []
  );
});

const currentAddressInfo = computed(() => {
  if (state.currentAddress) {
    return addressList.value[state.currentAddress - 1] || {};
  }
  return formInfo.value.extInfo?.contactInfo?.[0] || {};
});

// 将订单信息中的险种信息改成试算的险种信息
const formateData = (riskList: TenantOrderRiskItem[]): any[] => {
  const mainRisk: any = {};
  return riskList.map((risk: TenantOrderRiskItem) => {
    const {
      initialAmount,
      annuityDrawFrequency,
      annuityDrawType,
      paymentFrequency,
      paymentPeriod,
      paymentPeriodType,
      insurancePeriodType,
      insurancePeriodValue,
      riskCode,
      riskType,
      initialPremium,
      liabilityDetails,
      extInfo,
    } = risk;
    const { riskId, copy } = extInfo;

    const riskItem = {
      amount: initialAmount,
      annuityDrawDate: annuityDrawFrequency,
      annuityDrawType,
      paymentFrequency,
      riskId,
      copy,
      chargePeriod: paymentPeriod
        ? `${PAYMENT_PERIOD_ENUMS[paymentPeriodType]}_${paymentPeriod}`
        : PAYMENT_PERIOD_ENUMS[paymentPeriodType],
      coveragePeriod: insurancePeriodValue
        ? `${INSURANCE_PERIOD_ENUMS[insurancePeriodType]}_${insurancePeriodValue}`
        : INSURANCE_PERIOD_ENUMS[insurancePeriodType],
      riskCode,
      riskType,
      premium: initialPremium,
      liabilityVOList: liabilityDetails.map((liab) => {
        return {
          ...liab,
          liabilityAttributeValue: liab.refundMethod,
          liabilityAttributeCode: liab.refundMethod && 1,
        };
      }),
    };

    if (riskType === RISK_TYPE_ENUM.MAIN_RISK) {
      mainRisk.mainRiskCode = riskCode;
      mainRisk.mainRiskId = riskId;
    } else {
      Object.assign(riskItem, mainRisk);
    }

    return riskItem;
  });
};

// 下一步
const goNextPage = () => {
  const formData = { ...formInfo.value };
  formData.extInfo = { ...formData.extInfo, contactInfo: [currentAddressInfo.value] };
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
      uri: insuredImages.value[0] || holderImages.value[0],
      id: insuredImagesId.value[1],
    },
    {
      category: ATTACHMENT_CATEGORY_ENUM.REVERSE_CERT,
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.INSURED,
      objectId: formInfo.value.tenantOrderInsuredList[0].id,
      name: '被保人证件背面',
      uri: insuredImages.value[1] || holderImages.value[1],
      id: insuredImagesId.value[1],
    },
  ];

  formRef.value?.validate().then((validate: boolean) => {
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

// 更新信息采集的数据重新进行保费试算
const reTrialPremium = () => {
  formRef.value?.validate().then(() => {
    // 投保人信息
    const { birthday, gender, extInfo: holderExtInfo } = formInfo.value.tenantOrderHolder;
    const { hasSocialInsurance, occupationCodeList } = holderExtInfo;
    // 被保人信息
    const {
      birthday: insuredBirthday,
      gender: insuredGender,
      extInfo: insuredExtInfo,
      tenantOrderProductList,
    } = formInfo.value.tenantOrderInsuredList[0];
    const { hasSocialInsurance: insuredHasSocialInsurance, occupationCodeList: insuredOccupationCodeList } =
      insuredExtInfo;

    // 试算参数
    const trialData: PremiumCalcData = {
      holder: {
        personVO: {
          birthday: dayjs(birthday).format('YYYY-MM-DD'),
          gender,
          socialFlag: hasSocialInsurance,
          occupationCodeList,
        },
      },
      productCode: productCode as string,
      insuredVOList: [
        {
          insurerCode,
          personVO: {
            birthday: dayjs(insuredBirthday).format('YYYY-MM-DD'),
            gender: insuredGender,
            socialFlag: insuredHasSocialInsurance,
            occupationCodeList: insuredOccupationCodeList,
          },
          productPlanVOList: [
            {
              insurerCode,
              planCode: '',
              riskVOList: formateData(tenantOrderProductList[0].tenantOrderRiskList) as RiskVoItem[],
            },
          ],
        },
      ],
    };

    premiumCalc({ ...trialData }).then(({ code, data }) => {
      if (code === '10000') {
        const riskPremium = {};
        const flatRiskPremium = (premiumList: RiskPremiumDetailVoItem[] = []) => {
          (premiumList || []).forEach((risk) => {
            riskPremium[risk.riskCode] = risk;
            if (risk.riskPremiumDetailVOList?.length) {
              flatRiskPremium(risk.riskPremiumDetailVOList);
            }
          });
        };
        flatRiskPremium(data.riskPremiumDetailVOList);

        // 更新订单中产品的试算信息
        formInfo.value.tenantOrderInsuredList[0].tenantOrderProductList[0] = {
          ...formInfo.value.tenantOrderInsuredList[0].tenantOrderProductList[0],
          premium: data.premium,
          tenantOrderRiskList:
            formInfo.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((risk) => {
              return {
                ...risk,
                initialAmount: riskPremium[risk.riskCode].amount,
                initialPremium: riskPremium[risk.riskCode].premium,
              };
            }),
        };
        goNextPage();
      }
    });
  });
};

const selectAddress = (value) => {
  console.log('value', value);
};

// 添加受益人信息
const addBeneficiary = () => {
  state.beneficiaryId += 1;
  formInfo.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({
    id: state.beneficiaryId,
    extInfo: {},
  } as BeneficiaryItem);
};

// 删除受益人信息
const removeBeneficiary = (beneficiaryItem: BeneficiaryItem) => {
  formInfo.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList =
    formInfo.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((beneficiary: BeneficiaryItem) => {
      return beneficiary.beneficiaryId !== beneficiaryItem.beneficiaryId || beneficiaryItem.id !== beneficiary.id;
    });
};

// 获取订单详情
const queryOrderDetail = () => {
  getOrderDetail({ orderNo, tenantId })
    .then(({ code, data }) => {
      if (code === '10000') {
        const currentData = data;
        // 合并订单详情和form表单的初始数据
        currentData.extInfo = { ...currentData.extInfo, pageCode, templateId };
        currentData.tenantOrderHolder = currentData.tenantOrderHolder || { holderType: 1 };
        currentData.tenantOrderHolder.extInfo = {
          ...currentData.tenantOrderHolder.extInfo,
          occupationCodeList: currentData.tenantOrderHolder.extInfo?.occupationCodeList || [],
        };
        currentData.tenantOrderInsuredList[0].extInfo = {
          ...currentData.tenantOrderInsuredList[0].extInfo,
          occupationCodeList: currentData.tenantOrderInsuredList[0].extInfo?.occupationCodeList || [],
        };
        currentData.tenantOrderInsuredList[0].tenantOrderBeneficiaryList =
          currentData.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((list: any) => {
            const currentList = list;
            currentList.extInfo = {
              ...currentList.extInfo,
              occupationCodeList: currentList.extInfo?.occupationCodeList || [],
            };
            return currentList;
          });
        // 处理投被保人的证件展示
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

// 将投保人信息同步到被保人信息中
const holderInfo2InsuredInfo = () => {
  Object.assign(formInfo.value.tenantOrderInsuredList[0], formInfo.value.tenantOrderHolder, {
    id: formInfo.value.tenantOrderInsuredList[0].id,
    extInfo: {
      ...formInfo.value.tenantOrderHolder.extInfo,
      insureProvinceCode: formInfo.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,
      insureCityCode: formInfo.value.tenantOrderInsuredList[0].extInfo.insureCityCode,
      insureAreaCode: formInfo.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,
    },
  });
};

onBeforeMount(() => {
  queryOrderDetail();
  getInitFactor({ pageCode: 'infoCollection', templateId }).then(({ code, data }) => {
    if (code === '10000') {
      // 将页面因子根据投保人、被保人、受益人进行分类
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

// 监听被保人的与投保人关系，如果被保人同投保人则将
watch(
  [() => formInfo.value.tenantOrderInsuredList[0].relationToHolder, () => formInfo.value.tenantOrderHolder],
  () => {
    if (`${formInfo.value.tenantOrderInsuredList[0].relationToHolder}` === RELATION_HOLDER_ENUM.SELF) {
      holderInfo2InsuredInfo();
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
      background-color: $zaui-global-bg;
      height: 90px;
      .title {
        font-size: 30px;
        font-weight: 600;
        color: #393d46;
      }
    }
  }
  .left {
    flex: 0 0 50%;
    .trial-result {
      font-size: 34px;
      color: #393d46;
      .result-num {
        margin-left: 13px;
        color: $zaui-price;
        font-weight: bold;
        margin-left: 16px;
      }
    }
    .result-desc {
      font-size: 24px;
      color: #666;
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
