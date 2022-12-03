<template>
  <div v-if="Object.keys(factorObj).length" class="com-personal-wrapper">
    <ProField
      v-if="showByFactor('insuredBeneficiaryType')"
      v-model="state.formInfo.insuredBeneficiaryType"
      :label="queryFactorAttr('insuredBeneficiaryType', 'title')"
      name="insuredBeneficiaryType"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.insuredBeneficiaryType"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('insuredBeneficiaryType', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('insuredRelation')"
      v-model="state.formInfo.insuredRelation"
      :label="queryFactorAttr('insuredRelation', 'title')"
      name="insuredRelation"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.insuredRelation"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('insuredRelation', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('name')"
      v-model="state.formInfo.name"
      :label="queryFactorAttr('name', 'title')"
      :name="`${prefix}_name`"
      :is-view="isView"
      :required="isRequiredByFactor('name')"
    >
      <template #right-icon>
        <slot name="name"></slot>
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('sex')"
      v-model="state.formInfo.gender"
      :required="isRequiredByFactor('sex')"
      :label="queryFactorAttr('sex', 'title')"
      :name="`${prefix}_gender`"
      :is-view="isIdCard"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.gender"
          :disabled="isIdCard"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('sex', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProDatePicker
      v-if="showByFactor('birthDate')"
      v-model="state.formInfo.birthday"
      :label="queryFactorAttr('birthDate', 'title')"
      :name="`${prefix}_birthday`"
      :min="state.birth.min"
      :max="state.birth.max"
      type="date"
      :is-view="isView"
      :required="isRequiredByFactor('birthDate')"
    ></ProDatePicker>
    <ProPicker
      v-if="showByFactor('certType')"
      v-model="state.formInfo.certType"
      :label="queryFactorAttr('certType', 'title')"
      :name="`${prefix}_certType`"
      :data-source="queryFactorAttr('certType', 'attributeValueList')"
      :mapping="{ label: 'value', value: 'code', children: 'child' }"
      :required="isRequiredByFactor('certType')"
      :rules="[{ validator: validateCertType }]"
      :is-view="isView"
    ></ProPicker>
    <ProField
      v-if="showByFactor('certImage') && state.formInfo.certType + '' === '1'"
      label="身份证上传"
      block
      :required="isRequiredByFactor('certImage')"
      :rules="[{ validator: idCardImagesValidate }]"
      :name="`${prefix}_idCard`"
    >
      <template #input>
        <ProIDCardUpload v-model="tempImages" :is-view="isView" @on-OCR="handleOCR" />
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('certImage') && state.formInfo.certType && state.formInfo.certType + '' !== '1'"
      :label="queryFactorAttr('certImage', 'title')"
      block
      :required="isRequiredByFactor('certImage')"
    >
      <template #input>
        <ProImageUpload v-model="tempImages" :is-view="isView" :max-count="1"></ProImageUpload>
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('certNo')"
      v-model="certNo"
      :label="certNoName"
      :name="`${prefix}_certNo`"
      :required="isRequiredByFactor('certNo')"
      :maxlength="18"
      :is-view="isView"
      :validate-type="validateType"
      @focus="onfocus('certNo')"
      @update:model-value="(e) => changeNo(e, 'certNo')"
    ></ProField>

    <ProDatePicker
      v-if="showByFactor('certExpiry')"
      v-model="state.formInfo.certEndDate"
      :label="queryFactorAttr('certExpiry', 'title')"
      :name="`${prefix}_certEndDate`"
      type="date"
      :min="state.certEndDate.min"
      :max="state.certEndDate.max"
      :is-view="certEndType || isView"
      read
      :rules="[{ validator: validatorEndDate }]"
    >
      <template #extra>
        <div class="date-extra">
          <van-checkbox v-model="certEndType" :icon-size="16" :disabled="isView">长期</van-checkbox>
        </div>
      </template>
    </ProDatePicker>
    <ProField
      v-if="showByFactor('age')"
      v-model="state.formInfo.name"
      :label="queryFactorAttr('age', 'title')"
      :name="`${prefix}_age`"
      :is-view="isView"
      :required="isRequiredByFactor('age')"
    ></ProField>
    <ProCascader
      v-if="showByFactor('residence')"
      v-model="state.formInfo.extInfo.provinceCode"
      v-model:field1="state.formInfo.extInfo.provinceCode"
      v-model:field2="state.formInfo.extInfo.cityCode"
      v-model:field3="state.formInfo.extInfo.areaCode"
      :label="queryFactorAttr('residence', 'title')"
      :name="`${prefix}_provinceCode`"
      is-link
      :is-view="isView"
      :required="isRequiredByFactor('residence')"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="showByFactor('social')"
      v-model="state.formInfo.extInfo.hasSocialInsurance"
      :label="queryFactorAttr('social', 'title')"
      :name="`${prefix}_hasSocialInsurance`"
      :required="isRequiredByFactor('social')"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.hasSocialInsurance"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('social', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('height')"
      v-model="state.formInfo.name"
      :label="queryFactorAttr('height', 'title')"
      :is-view="isView"
      :name="`${prefix}_height`"
      :required="isRequiredByFactor('height')"
    ></ProField>
    <ProField
      v-if="showByFactor('weight')"
      v-model="state.formInfo.name"
      :label="queryFactorAttr('weight', 'title')"
      :name="`${prefix}_weight`"
      :is-view="isView"
      :required="isRequiredByFactor('weight')"
    ></ProField>
    <ProField
      v-if="showByFactor('BMI')"
      v-model="state.formInfo.name"
      :label="queryFactorAttr('BMI', 'title')"
      :name="`${prefix}_BMI`"
      :is-view="isView"
      :required="isRequiredByFactor('BMI')"
    ></ProField>
    <ProField
      v-if="showByFactor('insuredRiskManagementLevel')"
      v-model="state.formInfo.extInfo.hasSocialInsurance"
      :label="queryFactorAttr('insuredRiskManagementLevel', 'title')"
      :name="`${prefix}_hasSocialInsurance`"
      :required="isRequiredByFactor('insuredRiskManagementLevel')"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.hasSocialInsurance"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('insuredRiskManagementLevel', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('purchaseOtherInsurance')"
      v-model="state.formInfo.extInfo.purchaseOtherInsurance"
      :label="queryFactorAttr('purchaseOtherInsurance', 'title')"
      :name="`${prefix}_purchaseOtherInsurance`"
      :required="isRequiredByFactor('purchaseOtherInsurance')"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.hasSocialInsurance"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('purchaseOtherInsurance', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('injuryInsurance')"
      v-model="state.formInfo.extInfo.injuryInsurance"
      :label="queryFactorAttr('injuryInsurance', 'title')"
      :name="`${prefix}_hasSocialInsurance`"
      :required="isRequiredByFactor('injuryInsurance')"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.injuryInsurance"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('injuryInsurance', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProCascader
      v-if="showByFactor('insureArea')"
      :label="queryFactorAttr('insureArea', 'title')"
      name="insureAreaCode"
      is-link
      :is-view="isView"
      :required="isRequiredByFactor('insureArea')"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    />
    <ProCascader
      v-if="showByFactor('occupation')"
      v-model="state.formInfo.extInfo.occupationCodeList[0]"
      v-model:field0="state.formInfo.extInfo.occupationCodeList[0]"
      v-model:field1="state.formInfo.extInfo.occupationCodeList[1]"
      v-model:field2="state.formInfo.extInfo.occupationCodeList[2]"
      :label="queryFactorAttr('occupation', 'title')"
      :name="`${prefix}_occupationCodeList`"
      :is-view="isView"
      :required="isRequiredByFactor('occupation')"
      :data-source="occupationCode"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
      is-link
    ></ProCascader>
    <ProField
      v-if="showByFactor('personalAnnualIncome')"
      v-model="state.formInfo.extInfo.personalAnnualIncome"
      :label="queryFactorAttr('personalAnnualIncome', 'title')"
      :name="`${prefix}_personalAnnualIncome`"
      :required="isRequiredByFactor('personalAnnualIncome')"
      :is-view="isView"
      :rules="[{ validator: validateFloat }]"
    >
      <template #extra> <span class="input-extra">万</span> </template>
    </ProField>
    <ProField
      v-if="showByFactor('familyAnnualIncome')"
      v-model="state.formInfo.extInfo.familyAnnualIncome"
      :label="queryFactorAttr('familyAnnualIncome', 'title')"
      :name="`${prefix}_familyAnnualIncome`"
      :is-view="isView"
      :rules="[{ validator: validateFloat }]"
      :required="isRequiredByFactor('familyAnnualIncome')"
    >
      <template #extra> <span class="input-extra">万</span> </template>
    </ProField>
    <ProPicker
      v-if="showByFactor('country')"
      v-model="state.formInfo.extInfo.nationalityCode"
      :label="queryFactorAttr('country', 'title')"
      :name="`${prefix}_nationalityCode`"
      :data-source="queryFactorAttr('country', 'attributeValueList') || []"
      :mapping="{ label: 'value', value: 'code', children: 'child' }"
      :required="isRequiredByFactor('country')"
      is-link
      :is-view="isView"
    ></ProPicker>
    <ProField
      v-if="showByFactor('hasUsCard')"
      v-model="state.formInfo.extInfo.hasUsCard"
      :label="queryFactorAttr('hasUsCard', 'title')"
      :name="`${prefix}_hasUsCard`"
      :required="isRequiredByFactor('hasUsCard')"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.hasUsCard"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('hasUsCard', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProPicker
      v-if="showByFactor('marritalStatus')"
      v-model="state.formInfo.extInfo.marriageStatus"
      :label="queryFactorAttr('marritalStatus', 'title')"
      :name="`${prefix}_marriageStatus`"
      :data-source="queryFactorAttr('marritalStatus', 'attributeValueList') || []"
      :mapping="{ label: 'value', value: 'code', children: 'child' }"
      is-link
      :is-view="isView"
      :required="isRequiredByFactor('marritalStatus')"
    ></ProPicker>
    <ProPicker
      v-if="showByFactor('degree')"
      v-model="state.formInfo.extInfo.educationDegree"
      :label="queryFactorAttr('degree', 'title')"
      :name="`${prefix}_educationDegree`"
      :data-source="queryFactorAttr('degree', 'attributeValueList') || []"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      :required="isRequiredByFactor('degree')"
      is-link
      :is-view="isView"
    ></ProPicker>
    <ProField
      v-if="showByFactor('mobile')"
      v-model="phoneNo"
      :label="queryFactorAttr('mobile', 'title')"
      :name="`${prefix}_mobile`"
      type="digit"
      :maxlength="11"
      :is-view="isView"
      :required="isRequiredByFactor('mobile')"
      :validate-type="!phoneNoStatus ? [VALIDATE_TYPE_ENUM.PHONE] : undefined"
      @focus="onfocus('mobile')"
      @update:model-value="(e) => changeNo(e, 'mobile')"
    ></ProField>
    <ProField
      v-if="showByFactor('verificationCode')"
      v-model="state.formInfo.verificationCode"
      :label="queryFactorAttr('verificationCode', 'title')"
      :name="`${prefix}_verificationCode`"
      type="digit"
      :is-view="isView"
      :required="isRequiredByFactor('verificationCode')"
    >
      <template v-if="!isView" #extra>
        <van-button
          :class="['sms-code', { 'count-down': countDownTimer > 0 }]"
          size="small"
          plain
          type="primary"
          @click="onCaptha"
          >{{ smsText }}</van-button
        >
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('isSmoke')"
      v-model="state.formInfo.isSmoke"
      :required="isRequiredByFactor('isSmoke')"
      :label="queryFactorAttr('isSmoke', 'title')"
      :name="`${prefix}_isSmoke`"
      :is-view="isIdCard"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.isSmoke"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('isSmoke', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('contactNo')"
      v-model="state.formInfo.contactNo"
      :label="queryFactorAttr('contactNo', 'title')"
      :name="`${prefix}_contactNo`"
      :is-view="isView"
      :required="isRequiredByFactor('contactNo')"
    ></ProField>

    <ProField
      v-if="showByFactor('email')"
      v-model="state.formInfo.email"
      :label="queryFactorAttr('email', 'title')"
      :name="`${prefix}_email`"
      :is-view="isView"
      :required="isRequiredByFactor('email')"
      :validate-type="[VALIDATE_TYPE_ENUM.EMAIL]"
    ></ProField>
    <ProCascader
      v-if="showByFactor('homeAddress')"
      v-model="state.formInfo.extInfo.familyAreaCode"
      v-model:field1="state.formInfo.extInfo.familyProvinceCode"
      v-model:field2="state.formInfo.extInfo.familyCityCode"
      v-model:field3="state.formInfo.extInfo.familyAreaCode"
      :label="queryFactorAttr('homeAddress', 'title')"
      :name="`${prefix}_familyProvinceCode`"
      is-link
      :is-view="isView"
      :required="isRequiredByFactor('homeAddress')"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="showByFactor('homeAddressDetail')"
      v-model="state.formInfo.extInfo.familyAddress"
      :label="queryFactorAttr('homeAddressDetail', 'title')"
      :name="`${prefix}_familyAddress`"
      :is-view="isView"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
      :required="isRequiredByFactor('homeAddressDetail')"
    ></ProField>
    <ProField
      v-if="showByFactor('homePostalCode')"
      v-model="state.formInfo.extInfo.familyZipCode"
      :label="queryFactorAttr('homePostalCode', 'title')"
      :name="`${prefix}_familyZipCode`"
      :is-view="isView"
      :required="isRequiredByFactor('homePostalCode')"
      :validate-type="[VALIDATE_TYPE_ENUM.ZIP_CODE]"
    ></ProField>
    <ProCascader
      v-if="showByFactor('workAddress')"
      v-model="state.formInfo.extInfo.workAreaCode"
      v-model:field1="state.formInfo.extInfo.workProvinceCode"
      v-model:field2="state.formInfo.extInfo.workCityCode"
      v-model:field3="state.formInfo.extInfo.workAreaCode"
      :label="queryFactorAttr('workAddress', 'title')"
      :name="`${prefix}_workProvinceCode`"
      is-link
      :is-view="isView"
      :required="isRequiredByFactor('workAddress')"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="showByFactor('workAddressDetail')"
      v-model="state.formInfo.extInfo.workAddress"
      :label="queryFactorAttr('workAddressDetail', 'title')"
      :name="`${prefix}_workAddress`"
      :is-view="isView"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
      :required="isRequiredByFactor('workAddressDetail')"
    ></ProField>
    <ProField
      v-if="showByFactor('workPostalCode')"
      v-model="state.formInfo.extInfo.workZipCode"
      :label="queryFactorAttr('workPostalCode', 'title')"
      :required="isRequiredByFactor('workZipCode')"
      :name="`${prefix}_workPostCode`"
      :is-view="isView"
      :validate-type="[VALIDATE_TYPE_ENUM.ZIP_CODE]"
    ></ProField>
    <ProField
      v-if="showByFactor('companyName')"
      v-model="state.formInfo.extInfo.workStation"
      :label="queryFactorAttr('companyName', 'title')"
      :name="`${prefix}_workPostCode`"
      :is-view="isView"
      :rules="[{ validator: (...params) => validateLength(20, ...params) }]"
      :required="isRequiredByFactor('companyName')"
    ></ProField>
    <ProField
      v-if="showByFactor('workContent')"
      v-model="state.formInfo.extInfo.workContent"
      :label="queryFactorAttr('workContent', 'title')"
      :name="`${prefix}_workContent`"
      :required="isRequiredByFactor('workContent')"
      :is-view="isView"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
    ></ProField>
    <ProField
      v-if="showByFactor('chineseTaxResident')"
      v-model="state.formInfo.extInfo.chineseTaxResident"
      :label="queryFactorAttr('chineseTaxResident', 'title')"
      :name="`${prefix}_taxResident`"
      :required="isRequiredByFactor('chineseTaxResident')"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.chineseTaxResident"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('chineseTaxResident', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProPicker
      v-if="showByFactor('taxResident')"
      v-model="state.formInfo.taxResident"
      :is-view="isView"
      :label="queryFactorAttr('taxResident', 'title')"
      :name="`${prefix}_benefitOrder`"
      :data-source="queryFactorAttr('taxResident', 'attributeValueList') || []"
      :mapping="{ label: 'value', value: 'code', children: 'child' }"
      :required="isRequiredByFactor('taxResident')"
    >
    </ProPicker>
    <ProField
      v-if="showByFactor('partTimeJob')"
      v-model="state.formInfo.extInfo.isPartTime"
      :label="queryFactorAttr('partTimeJob', 'title')"
      :name="`${prefix}_isPartTime`"
      :required="isRequiredByFactor('partTimeJob')"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.isPartTime"
          :is-view="isView"
          :prop="{ label: 'value', value: 'code' }"
          :options="queryFactorAttr('partTimeJob', 'attributeValueList') || []"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProPicker
      v-if="showByFactor('benefitOrder')"
      v-model="state.formInfo.benefitOrder"
      :label="queryFactorAttr('benefitOrder', 'title')"
      :name="`${prefix}_benefitOrder`"
      :is-view="isView"
      :data-source="queryFactorAttr('benefitOrder', 'attributeValueList') || []"
      :mapping="{ label: 'value', value: 'code', children: 'child' }"
      :required="isRequiredByFactor('benefitOrder')"
    >
    </ProPicker>
    <ProField
      v-if="showByFactor('benefitRate')"
      v-model="state.formInfo.benefitRate"
      :required="isRequiredByFactor('benefitRate')"
      :name="`${prefix}_benefitRate`"
      :is-view="isView"
      :rules="[{ validator: validatePositiveInteger }]"
      :label="queryFactorAttr('benefitRate', 'title')"
    >
      <template #extra> <span class="input-extra">%</span> </template>
    </ProField>
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { Form, Toast } from 'vant';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useToggle } from '@vant/use';
import { truncateSync } from 'fs';
import { useRoute } from 'vue-router';
import { ProductInsureFactorItem, TenantOrderHolder, TenantOrderInsuredItem } from '@/api/index.data';
import { SEX_LIMIT_LIST, FLAG_LIST, VALIDATE_TYPE_ENUM, CERT_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import { OCRResponse } from '@/api/modules/file.data';
import useDicData from '@/hooks/useDicData';
import {
  TAX_RESIDENT,
  BENEFICIARY_ORDER,
  RELATION_INSURED_LIST,
  MARRIED_STATUS_LIST,
  RELATION_HOLDER_ENUM,
  RELATION_INSURED_ENUM,
} from '@/common/constants/infoCollection';

type FormInfo = TenantOrderInsuredItem | TenantOrderHolder;
interface Props {
  formInfo: FormInfo;
  factorList: ProductInsureFactorItem[];
  images: string[];
  isView?: boolean;
  // field的name前缀
  prefix: string;
  beneficiaryList: Array<any>;
  sendSmsCode: (mobile: string, cb: () => void) => void;
  needDesensitize?: boolean;
}

interface FactorObj {
  [props: string]: ProductInsureFactorItem;
}

interface State {
  formInfo: FormInfo;
}

const [isShowOccupational, toggleOccupational] = useToggle();
const { venderCode = '' } = useRoute().query;
const emits = defineEmits(['update:images']);
const occupationCode = useDicData(`${(venderCode as string).toLocaleUpperCase()}_OCCUPATION`); // 职业
const region = useDicData('NATIONAL_REGION_CODE'); // 全国区域编码
const tempImages = ref<string[]>([]);
const isIdCard = ref(false);

const props = withDefaults(defineProps<Props>(), {
  formInfo: () => ({}), // 表单信息
  factorList: () => [], // 页面对应的因子列表
  images: () => [], // 证件照片
  isView: false, // 页面状态是否为查看状态
  prefix: '', // 对投保人、被保人、受益人的数据进行区分
  beneficiaryList: () => [], // 受益人列表
  sendSmsCode: (mobile, cb) => {}, // 发送验证码
  needDesensitize: false, // 关键信息是否需要脱敏
});

const state = ref({
  formInfo: props.formInfo,
  birth: {
    min: new Date('1900-01-01'),
    max: new Date(),
  },
  certEndDate: {
    min: new Date('1900-01-01'),
    max: new Date('2099-12-31'),
  },
  occupationalText: '',
});

// 数据脱敏显示
// replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2")
const phoneNoStatus = ref<boolean>(false);
const phoneNo = computed(() => {
  if (phoneNoStatus.value && state.value.formInfo.mobile) {
    return (state.value.formInfo.mobile || '').replace(/^(.{3})(?:\d+)(.{4})$/, '$1****$2');
  }
  return state.value.formInfo.mobile;
});

const certNoStatus = ref<boolean>(false);
const certNo = computed(() => {
  if (certNoStatus.value) {
    return (state.value.formInfo.certNo || '').replace(/^(.{6})(?:\d+)(.{2})$/, '$1**********$2');
  }
  return props.formInfo.certNo;
});

dayjs.extend(relativeTime);

const certEndType = ref<boolean>(props.formInfo.certEndType === 2);
// 验证码相关逻辑
const maxCountDown = 60;
const countDownTimer = ref<number>(0);
const smsText = ref<string>('验证码');
const isSendSmsCode = ref(false);

const factorObj = computed(() => {
  const factor: FactorObj = {};
  props.factorList.forEach((factorItem) => {
    factor[factorItem.code] = factorItem;
  });
  return factor;
});

const changeNo = (e, name) => {
  state.value.formInfo[name] = e;
};

const isHolderMobileRight = computed(() => {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(state.value.formInfo.mobile);
});

const onCountDown = () => {
  if (countDownTimer.value > 0) return;
  countDownTimer.value = maxCountDown;
  const countInterval = () => {
    smsText.value = `${countDownTimer.value}s`;
    countDownTimer.value -= 1;
  };
  countInterval();
  const timer = setInterval(() => {
    if (countDownTimer.value === 0) {
      smsText.value = '验证码';
      countDownTimer.value = 0;
      clearInterval(timer);
    } else {
      countInterval();
    }
  }, 1000);
};

const onfocus = (name: string) => {
  if (name === 'mobile') {
    phoneNoStatus.value = false;
  }

  if (name === 'certNo') {
    certNoStatus.value = false;
  }
};

// 发送验证码
const onCaptha = async () => {
  if (countDownTimer.value > 0) {
    return;
  }
  props.sendSmsCode(state.value.formInfo.mobile, () => {
    isSendSmsCode.value = true;
    Toast({
      message: '短信发送成功，请查收',
    });
    onCountDown();
  });
};

const handleOCR = (res: OCRResponse['idCardOcrVO']) => {
  state.value.formInfo.certNo = res.personIdCard;
  state.value.formInfo.name = res.personName;
  state.value.formInfo.certEndDate = dayjs(res.validDateEnd, 'YYYYMMDD').toDate();
};

// 根据模板因子控制表单元素的展示
const showByFactor = (key: string) => {
  return factorObj.value && factorObj.value[key] && factorObj.value[key]?.isDisplay === YES_NO_ENUM.YES;
};

// 根据模板因子控制表单元素的是否必填
const isRequiredByFactor = (key: string) => {
  return factorObj.value && factorObj.value[key] && factorObj.value[key].isMustInput === YES_NO_ENUM.YES;
};

// 获取表单项的属性
const queryFactorAttr = (key: string, attr: string) => factorObj.value?.[key]?.[attr] || '';

// 被保人子女的身份证表述加上户口本
const certNoName = computed(() => {
  if (props.prefix === 'insure' && state.value.formInfo?.relationToHolder === RELATION_HOLDER_ENUM.CHILD) {
    return '身份证(出生证)号';
  }

  return '身份证号';
});

// 验证证件类型
const validateType = computed(() => {
  // 身份证和户口本
  if ([CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(`${state.value.formInfo.certType}`)) {
    return [VALIDATE_TYPE_ENUM.ID_CARD];
  }
  // 出生证
  if (`${state.value.formInfo.certType}` === CERT_TYPE_ENUM.BIRTH) {
    return [VALIDATE_TYPE_ENUM.BIRTH];
  }
  // 通信证
  if (`${state.value.formInfo.certType}` === CERT_TYPE_ENUM.PASSPORT) {
    return [VALIDATE_TYPE_ENUM.PASSPORT];
  }
  return [VALIDATE_TYPE_ENUM.ID_CARD];
});

// 验证有效期
const validatorEndDate = (value: string, rule: any) => {
  if (isRequiredByFactor('attachment')) {
    if (state.value.formInfo.certEndType === 2) {
      return '';
    }
    if (state.value.formInfo.certEndDate) {
      return '';
    }
    return '请选择有效期至';
  }
  return '';
};

// 验证10位整数两位小数
const validateFloat = (value: string, rule: any) => {
  if (/^\d{1,10}(\.\d{1,2})?$/.test(value)) {
    return '';
  }
  return '年收入最多录入10位数字';
};
// 验证2位正整数
const validatePositiveInteger = (value: string, rule: any) => {
  if (/^[1-9]$|^[1-9][0-9]$|^100$/.test(value)) {
    return '';
  }
  return '收益比例只能填写1-100的正整数';
};

// 验证长度
const validateLength = (len: number, value: string, rule: any) => {
  if (value.length > len) {
    return `最大不能超过${len}个字符`;
  }
  return '';
};

// 验证证件类型
const validateCertType = (value: string, rule: any) => {
  if (!showByFactor('nationality')) {
    return '';
  }
  if (state.value.formInfo?.extInfo?.nationalityCode === 'CHN') {
    // 国籍为中国支持的证件 身份证、户口本、出生证、军官证
    if (
      ![CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD, CERT_TYPE_ENUM.BIRTH, CERT_TYPE_ENUM.MILITARY_CARD].includes(
        `${value}`,
      )
    ) {
      return '国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证';
    }
  } else if (['HKG', 'MAC'].includes(state.value.formInfo?.extInfo?.nationalityCode)) {
    // 国籍为中国香港、中国澳门，证件类型只允许选择港澳通行证、港澳居民居住证
    if (![CERT_TYPE_ENUM.HK_MACAO_RESIDENCE_PERMIT, CERT_TYPE_ENUM.HONGKONG_MACAO].includes(`${value}`)) {
      return '国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证';
    }
  } else if (state.value.formInfo?.extInfo?.nationalityCode === 'TWN') {
    // '国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证
    if (![CERT_TYPE_ENUM.TAIWAN_RESIDENCE_PERMIT, CERT_TYPE_ENUM.TAIWAN_TRAVEL].includes(`${value}`)) {
      return '国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证';
    }
  } else {
    // 国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证
    if (![CERT_TYPE_ENUM.PASSPORT, CERT_TYPE_ENUM.FOREIGN_PERMANENT].includes(`${value}`)) {
      return '国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证';
    }
  }

  if (dayjs().year() - dayjs(state.value.formInfo?.birthday).year() > 2) {
    if (value === CERT_TYPE_ENUM.BIRTH) {
      return '年龄大于等于2周岁时，证件类型不能选择出生证';
    }
  }
  return '';
};

// 验证身份证照片
const idCardImagesValidate = (value: any) => {
  if (Array.isArray(value) && value.length === 2 && value[0] && value[1]) {
    return '';
  }
  return '请上传身份证正反面照片';
};

// 验证被保人关系
const relationValidate = (value: any) => {
  if (props.beneficiaryList.filter((x) => x.relationToInsured === RELATION_INSURED_ENUM.SPOUSE).length >= 2) {
    return '已存在配偶关系的受益人';
  }
  return '';
};

// 监听
watch(
  () => certEndType.value,
  (newVal) => {
    if (newVal) {
      state.value.formInfo.certEndType = 2;
      state.value.formInfo.certEndDate = '';
    } else {
      state.value.formInfo.certEndType = 1;
    }
  },
  {
    immediate: true,
  },
);

watch(
  [() => state.value.formInfo.certNo, () => state.value.formInfo.certNo],
  () => {
    state.value.formInfo.certNo = state.value.formInfo.certNo?.replace(
      /[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,
      '',
    );
    state.value.formInfo.certNo = state.value.formInfo.certNo?.replace(
      /[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,
      '',
    );
  },
  { deep: true, immediate: true },
);

watch(
  () => props.needDesensitize,
  (value = false) => {
    phoneNoStatus.value = value;
    certNoStatus.value = value;
  },
  {
    immediate: true,
  },
);

watch(
  () => state.value.formInfo.certType,
  (newVal) => {
    if ([CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(newVal)) {
      isIdCard.value = true;
    } else {
      isIdCard.value = false;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.value.formInfo.certNo,
  (newVal) => {
    if (validateIdCardNo(newVal)) {
      state.value.formInfo.gender = +getSex(newVal);
      state.value.formInfo.birthday = dayjs(new Date(getBirth(newVal))).format('YYYY-MM-DD');
    } else {
      state.value.formInfo.gender = null;
      state.value.formInfo.birthday = '';
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.images,
  (val) => {
    tempImages.value = val;
  },
  {
    immediate: true,
  },
);

watch(
  () => props.formInfo,
  () => {
    state.value.formInfo = props.formInfo;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  tempImages,
  (val) => {
    emits('update:images', val);
  },
  {
    deep: true,
  },
);
</script>

<style lang="scss" scope>
.input-extra {
  margin-left: 25px;
  margin-top: 14px;
}
.date-extra {
  padding-left: $zaui-card-border;
  margin-left: $zaui-card-border;
  border-left: 1px solid $zaui-line;
  margin-top: 16px;
  display: flex;
}
.sms-code {
  border: none;
  background: transparent;
}
.com-personal-wrapper {
}
</style>
