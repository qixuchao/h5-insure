<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 14:08:44
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-04 17:17:07
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/InfoCollection/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="page-info-wrapper">
    <ProForm ref="formRef" show-error :show-error-message="false" :input-align="inputAlign">
      <ProCard
        v-if="pageFactor.HOLDER?.length"
        :show-line="false"
        :show-divider="false"
        :title="titleCollection?.HOLDER"
      >
        <PersonalInfo
          v-model:images="holderImages"
          :form-info="formInfo.tenantOrderHolder"
          :factor-list="pageFactor.HOLDER"
          prefix="holder"
          :is-view="isView"
          :need-desensitize="needDesensitize"
          :send-sms-code="sendSmsCode"
        >
          <ProField
            v-if="showByFactor('gasNumberCollection', 'HOLDER') && formInfo.tenantOrderSubjectList?.[0]?.extInfo"
            v-model="formInfo.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId"
            :label="queryFactorAttr('gasNumberCollection', 'title', 'HOLDER')"
            name="subjectRelatedUserId"
            :required="isRequiredByFactor('gasNumberCollection', 'HOLDER')"
            :is-view="isView"
            :maxlength="100"
          ></ProField>
          <template #name>
            <slot name="holderName"></slot>
          </template>
        </PersonalInfo>
      </ProCard>
      <ProCard
        v-if="pageFactor.INSURER?.length"
        :show-line="false"
        :show-divider="false"
        :title="titleCollection?.INSURER"
      >
        <ProField
          v-if="showByFactor('relationToHolder', 'INSURER')"
          v-model="formInfo.tenantOrderInsuredList[0].relationToHolder"
          class="relation-holder"
          :name="`insure_relationToHolder`"
          :required="isRequiredByFactor('relationToHolder', 'INSURER')"
          :label="queryFactorAttr('relationToHolder', 'title', 'INSURER')"
        >
          <template #input>
            <ProRadioButton
              v-model="formInfo.tenantOrderInsuredList[0].relationToHolder"
              :is-view="isView"
              :prop="{ label: 'value', value: 'code' }"
              :options="queryFactorAttr('relationToHolder', 'attributeValueList', 'INSURER') || []"
            />
          </template>
        </ProField>
        <PersonalInfo
          v-if="isView || +formInfo.tenantOrderInsuredList[0].relationToHolder !== 1"
          v-model:images="insuredImages"
          :form-info="formInfo.tenantOrderInsuredList[0]"
          :factor-list="pageFactor.INSURER || []"
          prefix="insure"
          :need-desensitize="needDesensitize"
          :send-sms-code="sendSmsCode"
          :is-view="isView"
        >
          <template #name>
            <slot name="insurerName"></slot>
          </template>
        </PersonalInfo>
      </ProCard>

      <ProCard
        v-if="false && pageFactor.BENEFICIARY?.length"
        :show-divider="false"
        :show-line="false"
        :title="titleCollection?.BENEFICIARY"
      >
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
              :is-view="isView"
              :need-desensitize="needDesensitize"
              :send-sms-code="sendSmsCode"
              :beneficiary-list="formInfo.tenantOrderInsuredList[0].tenantOrderBeneficiaryList"
            ></PersonalInfo>
          </div>
          <!-- <VanButton @click="addBeneficiary">+添加受益人</VanButton> -->
        </div>
      </ProCard>
    </ProForm>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useToggle } from '@vant/use';
import { Toast } from 'vant/es';
import { withDefaults } from 'vue';
import {
  PAGE_ROUTE_ENUMS,
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
  NEXT_BUTTON_CODE_ENUMS,
  YES_NO_ENUM,
} from '@/common/constants';
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
import {
  RELATION_HOLDER_LIST,
  BENEFICIARY_LIST,
  BENEFICIARY_ENUM,
  RELATION_HOLDER_ENUM,
} from '@/common/constants/infoCollection';
import PersonalInfo from './PersonalInfo.vue';

interface State {
  beneficiaryId: number;
  nextPage: '';
  currentAddress: any;
  isLoading: boolean;
}

interface Props {
  factorObject: any; // 投保要素集合
  formInfo: {};
  isView?: boolean;
  sendSmsCode?: (mobile: string, cb: () => void) => void;
  titleCollection?: any;
  inputAlign: 'left' | 'center' | 'right';
  needDesensitize?: boolean;
}

type BeneficiaryItem = TenantOrderBeneficiaryItem & { beneficiaryId?: number };

interface FactorEnums {
  [props: string]: ProductInsureFactorItem[];
}

const router = useRouter();
const route = useRoute();

const props = withDefaults(defineProps<Props>(), {
  factorList: () => [],
  formInfo: () => ({}),
  isView: false,
  sendSmsCode: (mobile, cb) => {},
  titleCollection: () => ({}),
  inputAlign: 'left',
  needDesensitize: false,
});

const pageFactor = ref<FactorEnums>({});
// 表单信息
const formInfo = ref<any>({
  extInfo: {},
  tenantOrderHolder: {
    extInfo: {},
  },
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
  tenantOrderSubjectList: [
    {
      extInfo: {
        subjectRelatedFirm: '',
        subjectRelatedUserId: '',
      },
      subjectName: '',
      subjectObjectType: 'HOLDER',
      subjectType: 'GENERAL',
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

const factorObj = computed(() => {
  const factor: any = {
    INSURER: {},
    HOLDER: {},
  };
  (pageFactor.value?.INSURER || []).forEach((factorItem) => {
    factor.INSURER[factorItem.code] = factorItem;
  });
  (pageFactor.value?.HOLDER || []).forEach((factorItem) => {
    factor.HOLDER[factorItem.code] = factorItem;
  });
  return factor;
});

// 根据模板因子控制表单元素的展示
const showByFactor = (key: string, type: string) => {
  return factorObj.value?.[type]?.[key]?.isDisplay === YES_NO_ENUM.YES;
};

// 根据模板因子控制表单元素的是否必填
const isRequiredByFactor = (key: string, type: string) => {
  return factorObj.value?.[type]?.[key].isMustInput === YES_NO_ENUM.YES;
};

// 获取表单项的属性
const queryFactorAttr = (key: string, attr: string, type: string) => factorObj.value?.[type]?.[key]?.[attr] || '';

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

const validateForm = () => {
  return new Promise((resolve, reject) => {
    formRef.value?.validate().then(
      () => {
        resolve(formInfo.value);
      },
      () => {
        reject();
      },
    );
  });
};

const clearInsurerData = (insurerData: any, excludes: string[]) => {
  const currentData = insurerData;
  Object.keys(currentData).forEach((key) => {
    if (!excludes.includes(key)) {
      currentData[key] = '';
    }
  });
  return currentData;
};

defineExpose({
  validateForm,
});

watch(
  () => props.factorObject,
  () => {
    // 将页面因子根据投保人、被保人、受益人进行分类
    const currentFactorObj = {
      BENEFICIARY: props.factorObject[3] as ProductInsureFactorItem[],
      INSURER: props.factorObject[2] as ProductInsureFactorItem[],
      HOLDER: props.factorObject[1] as ProductInsureFactorItem[],
    };
    pageFactor.value = currentFactorObj;
  },
  {
    immediate: true,
    deep: true,
  },
);

// 监听被保人的与投保人关系，如果被保人同投保人则将
watch(
  [() => formInfo.value.tenantOrderInsuredList[0].relationToHolder, () => formInfo.value.tenantOrderHolder],
  ([newHolder], [oldHolder]) => {
    if (`${formInfo.value.tenantOrderInsuredList[0].relationToHolder}` === RELATION_HOLDER_ENUM.SELF) {
      holderInfo2InsuredInfo();
    } else if (newHolder !== oldHolder && !props.isView) {
      Object.assign(formInfo.value.tenantOrderInsuredList[0], {
        ...clearInsurerData(formInfo.value?.tenantOrderInsuredList?.[0], [
          'extInfo',
          'relationToHolder',
          'tenantOrderBeneficiaryList',
        ]),
        extInfo: {},
      });
    }
  },
  {
    deep: true,
  },
);

watch(
  () => props.formInfo,
  () => {
    if (Object.keys(props.formInfo).length) {
      formInfo.value = props.formInfo;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scope>
.van-cell {
  &:after {
    width: unset;
  }
}
.page-info-wrapper {
  .van-cell .van-field__value {
    align-items: flex-start;
  }
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
