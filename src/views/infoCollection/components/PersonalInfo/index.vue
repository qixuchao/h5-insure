<template>
  <div v-if="Object.keys(factorObj).length" class="com-personal-wrapper">
    <ProField
      v-if="factorObj.insureRelation?.isDisplay"
      v-model="state.formInfo.relationToInsured"
      name="relationToInsured"
      :required="factorObj.insureRelation?.isMustInput === 'YES'"
      label="是被保人的"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.relationToInsured"
          :is-view="isView"
          :options="RELATION_INSURED_LIST.slice(1, 4)"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProPicker
      v-if="factorObj.certType?.isDisplay === 'YES'"
      v-model="state.formInfo.certType"
      label="证件类型"
      name="certType"
      readonly
      :data-source="certType"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      :required="factorObj.certType?.isMustInput === 'YES'"
      :rules="[{ validator: validateCertType }]"
    ></ProPicker>
    <ProField
      v-if="factorObj.attachment?.isDisplay === 'YES' && state.formInfo.certType + '' === '1'"
      label="身份证上传"
      block
      :required="factorObj.certType?.isMustInput === 'YES'"
    >
      <template #input>
        <ProIDCardUpload v-model:front="tempImages[0]" v-model:back="tempImages[1]"></ProIDCardUpload>
      </template>
    </ProField>
    <ProField
      v-if="
        factorObj.attachment?.isDisplay === 'YES' && state.formInfo.certType && state.formInfo.certType + '' !== '1'
      "
      label="证件上传"
      block
      :required="factorObj.certType?.isMustInput === 'YES'"
    >
      <template #input>
        <ProImageUpload v-model="tempImages" :max-count="1"></ProImageUpload>
      </template>
    </ProField>
    <ProField
      v-if="factorObj.certNo?.isDisplay === 'YES'"
      v-model="state.formInfo.certNo"
      label="证件号码"
      name="certNo"
      :required="factorObj.certNo?.isMustInput === 'YES'"
      placeholder="请输入"
      :rules="[{ validator: validateCertNo }]"
      :validate-type="state.formInfo.certType === '1' ? ['idCard'] : []"
    ></ProField>
    <ProField
      v-if="factorObj.name?.isDisplay === 'YES'"
      v-model="state.formInfo.name"
      label="姓名"
      name="name"
      :required="factorObj.name?.isMustInput === 'YES'"
    ></ProField>
    <ProField
      v-if="factorObj.sex?.isDisplay === 'YES'"
      v-model="state.formInfo.gender"
      :required="factorObj.sex?.isMustInput === 'YES'"
      label="性别"
      name="gender"
      placeholder="请选择"
      :is-view="isIdCard"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.gender"
          :disabled="isIdCard"
          :is-view="isView"
          :options="SEX_LIMIT_LIST"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProDatePicker
      v-if="factorObj.birthday?.isDisplay === 'YES'"
      v-model="state.formInfo.birthday"
      label="出生日期"
      name="birthday"
      :min="state.birth.min"
      :max="state.birth.max"
      type="date"
      :required="factorObj.birthday?.isMustInput === 'YES'"
      :is-view="isIdCard"
    ></ProDatePicker>
    <ProDatePicker
      v-if="factorObj.certEndDate?.isDisplay === 'YES'"
      v-model="state.formInfo.certEndDate"
      label="有效期至"
      name="certEndDate"
      type="date"
      :min="state.certEndDate.min"
      :max="state.certEndDate.max"
      :is-view="certEndType"
      read
      :required="factorObj.certEndDate?.isMustInput === 'YES'"
    >
      <template #extra>
        <div class="date-extra">
          <van-checkbox v-model="certEndType">长期</van-checkbox>
        </div>
      </template>
    </ProDatePicker>
    <ProCascader
      v-if="factorObj.houseHold?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.provinceCode"
      v-model:field1="state.formInfo.extInfo.provinceCode"
      v-model:field2="state.formInfo.extInfo.cityCode"
      v-model:field3="state.formInfo.extInfo.areaCode"
      label="户籍所在地"
      name="provinceCode"
      placeholder="请选择"
      is-link
      :required="factorObj.houseHold?.isMustInput === 'YES'"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="factorObj.hasSocialInsurance?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.hasSocialInsurance"
      label="社保"
      name="hasSocialInsurance"
      placeholder="请选择"
      :required="factorObj.hasSocialInsurance?.isMustInput === 'YES'"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.hasSocialInsurance"
          :is-view="isView"
          :options="FLAG_LIST"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProCascader
      v-if="factorObj.occupation?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.occupationCode"
      label="职业"
      name="occupationCode"
      placeholder="请选择"
      :required="factorObj.occupation?.isMustInput === 'YES'"
      :data-source="occupationCode"
      :mapping="{ label: 'value', value: 'code', children: 'children' }"
      is-link
    ></ProCascader>
    <ProField
      v-if="factorObj.annualIncome?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.personalAnnualIncome"
      label="个人年收入"
      name="personalAnnualIncome"
      :required="factorObj.annualIncome?.isMustInput === 'YES'"
      placeholder="请输入"
      :rules="[{ validator: validateFloat }]"
    >
      <template #extra> <span class="input-extra">万</span> </template>
    </ProField>
    <ProField
      v-if="factorObj.familyAnnualIncome?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.familyAnnualIncome"
      label="家庭年收入"
      name="familyAnnualIncome"
      placeholder="请输入"
      :rules="[{ validator: validateFloat }]"
      :required="factorObj.familyAnnualIncome?.isMustInput === 'YES'"
    >
      <template #extra> <span class="input-extra">万</span> </template>
    </ProField>
    <ProPicker
      v-if="factorObj.nationality?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.nationalityCode"
      label="国籍"
      name="nationalityCode"
      readonly
      :data-source="nationalityCode"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      placeholder="请选择"
      :required="factorObj.nationality?.isMustInput === 'YES'"
      is-link
    ></ProPicker>
    <ProField
      v-if="factorObj.USAGreenCard?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.hasUsCard"
      label="美国绿卡"
      name="hasUsCard"
      placeholder="请选择"
      :required="factorObj.USAGreenCard?.isMustInput === 'YES'"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.hasUsCard"
          :is-view="isView"
          :options="FLAG_LIST"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProPicker
      v-if="factorObj.marriage?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.marriageStatus"
      label="婚姻状况"
      name="marriageStatus"
      readonly
      placeholder="请选择"
      :data-source="MARRIED_STATUS_LIST"
      is-link
      :required="factorObj.marriage?.isMustInput === 'YES'"
    ></ProPicker>
    <ProPicker
      v-if="factorObj.educationDegree?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.educationDegree"
      label="学历"
      readonly
      name="educationDegree"
      :data-source="degree"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      placeholder="请选择"
      :required="factorObj.educationDegree?.isMustInput === 'YES'"
      is-link
    ></ProPicker>
    <ProField
      v-if="factorObj.mobile?.isDisplay === 'YES'"
      v-model="state.formInfo.mobile"
      label="手机号码"
      name="mobile"
      placeholder="请输入"
      :required="factorObj.mobile?.isMustInput === 'YES'"
      :validate-type="['phone']"
    ></ProField>
    <ProField
      v-if="factorObj.email?.isDisplay === 'YES'"
      v-model="state.formInfo.email"
      label="电子邮箱"
      name="email"
      placeholder="请输入"
      :required="factorObj.email?.isMustInput === 'YES'"
      :validate-type="['mail']"
    ></ProField>
    <ProCascader
      v-if="factorObj.familyAddress?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.familyProvinceCode"
      v-model:field1="state.formInfo.extInfo.familyProvinceCode"
      v-model:field2="state.formInfo.extInfo.familyCityCode"
      v-model:field3="state.formInfo.extInfo.familyAreaCode"
      label="家庭地址"
      name="familyProvinceCode"
      placeholder="请选择"
      is-link
      :required="factorObj.familyAddress?.isMustInput === 'YES'"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="factorObj.familyAddressDetail?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.familyAddress"
      label="地址详情"
      name="familyAddress"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
      :required="factorObj.familyAddressDetail?.isMustInput === 'YES'"
    ></ProField>
    <ProField
      v-if="factorObj.familyPostCode?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.familyZipCode"
      label="家庭邮编"
      name="familyZipCode"
      placeholder="请输入"
      :required="factorObj.familyPostCode?.isMustInput === 'YES'"
      :validate-type="['zipCode']"
    ></ProField>
    <ProCascader
      v-if="factorObj.workAddress?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.workProvinceCode"
      v-model:field1="state.formInfo.extInfo.workProvinceCode"
      v-model:field2="state.formInfo.extInfo.workCityCode"
      v-model:field3="state.formInfo.extInfo.workAreaCode"
      label="工作地址"
      name="workProvinceCode"
      placeholder="请选择"
      is-link
      :required="factorObj.workAddress?.isMustInput === 'YES'"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="factorObj.workAddressDetail?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.workAddress"
      label="地址详情"
      name="workAddress"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
      :required="factorObj.workAddressDetail?.isMustInput === 'YES'"
    ></ProField>
    <ProField
      v-if="factorObj.workZipCode?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.workZipCode"
      label="工作邮编"
      :required="factorObj.workZipCode?.isMustInput === 'YES'"
      name="workPostCode"
      placeholder="请输入"
      :validate-type="['zipCode']"
    ></ProField>
    <ProField
      v-if="factorObj.workPlace?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.workStation"
      label="单位名称"
      name="workPostCode"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(20, ...params) }]"
      :required="factorObj.workPlace?.isMustInput === 'YES'"
    ></ProField>
    <ProField
      v-if="factorObj.workContent?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.workContent"
      label="工作内容"
      name="workContent"
      :required="factorObj.workContent?.isMustInput === 'YES'"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
    ></ProField>
    <ProPicker
      v-if="factorObj.taxCert?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.taxResident"
      label="税收居民身份"
      name="taxResident"
      :data-source="TAX_RESIDENT"
      :required="factorObj.taxCert?.isMustInput === 'YES'"
      placeholder="请输入"
    ></ProPicker>
    <ProField
      v-if="factorObj.partTime?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.isPartTime"
      label="是否兼职"
      name="isPartTime"
      :required="factorObj.partTime?.isMustInput === 'YES'"
      placeholder="请输入"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.extInfo.isPartTime"
          :is-view="isView"
          :options="FLAG_LIST"
        ></ProRadioButton>
      </template>
    </ProField>
    <ProPicker
      v-if="factorObj.beneficiaryType?.isDisplay"
      v-model="state.formInfo.benefitOrder"
      label="受益人顺序"
      name="benefitOrder"
      :data-source="BENEFICIARY_ORDER"
      :required="factorObj.beneficiaryType?.isMustInput === 'YES'"
    >
    </ProPicker>
    <ProField
      v-if="factorObj.benefitRate?.isDisplay"
      v-model="state.formInfo.benefitRate"
      :required="factorObj.benefitRate?.isMustInput === 'YES'"
      name="benefitRate"
      :rules="[{ validator: validatePositiveInteger }]"
      label="受益比例"
    >
      <template #extra> <span class="input-extra">%</span> </template>
    </ProField>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useToggle } from '@vant/use';
import { truncateSync } from 'fs';
import { useRoute } from 'vue-router';
import { InsuredReqItem, HolderReq, ProductInsureFactorItem } from '@/api/index.data';
import { SEX_LIMIT_LIST, FLAG_LIST } from '@/common/constants';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import useDicData from '@/hooks/useDicData';
import {
  TAX_RESIDENT,
  BENEFICIARY_ORDER,
  RELATION_INSURED_LIST,
  MARRIED_STATUS_LIST,
} from '@/common/constants/infoCollection';

type FormInfo = InsuredReqItem | HolderReq;
interface Props {
  formInfo: FormInfo;
  factorList: ProductInsureFactorItem[];
  images: string[];
  isView?: boolean;
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
const certType = useDicData('CERT_TYPE'); // 证件类型
const occupationCode = useDicData(`${(venderCode as string).toLocaleUpperCase()}_OCCUPATION`); // 职业
const marriageStatus = useDicData('MARRIAGE_STATUS'); // 婚姻状况
const degree = useDicData('DEGREE'); // 学历
const nationalityCode = useDicData('NATIONALITY'); // 国籍
const region = useDicData('NATIONAL_REGION_CODE'); // 全国区域编码
const tempImages = ref<string[]>([]);
const isIdCard = ref(false);

const props = withDefaults(defineProps<Props>(), {
  formInfo: () => ({}),
  factorList: () => [],
  images: () => [],
  isView: false,
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
  front: '',
  back: '',
  occupationalText: '',
});

dayjs.extend(relativeTime);

const certEndType = ref<boolean>(props.formInfo.certEndType === 2);

const factorObj = computed(() => {
  const factor: FactorObj = {};
  props.factorList.forEach((factorItem) => {
    factor[factorItem.code] = factorItem;
  });
  return factor;
});

const certTypeEnum = computed(() => {
  if (state.value.formInfo.extInfo.nationalityCode === 'CHN') {
    return [];
  }
  return [];
});

const onFinish = (text: string) => {
  state.value.occupationalText = text;
};

const onClose = () => {
  toggleOccupational(false);
};

// 验证10位整数两位小数
const validateFloat = (value: string, rule: any) => {
  if (/^[+-]?(\d|[1-9]\d{1,9})(\.\d{1,2})?$/.test(value)) {
    return '';
  }
  return '年收入最多录入10位数字';
};
// 验证2位正整数
const validatePositiveInteger = (value: string, rule: any) => {
  if (/^\+?[1-9][0-9]*$/.test(value)) {
    return '';
  }
  return '收益比例只能填写1-100的正数';
};

// 验证长度
const validateLength = (len: number, value: string, rule: any) => {
  if (value.length > len) {
    return `最大不能超过${len}个字符`;
  }
  return '';
};

// 验证证件号码
const validateCertNo = (value: string | number, rule: any) => {
  if (state.value.formInfo?.certType === '4') {
    if (!/^[a-zA-Z]\d{9}$/.test(`${value}`)) {
      return `出生证号码错误`;
    }
  } else if (state.value.formInfo?.certType === '2') {
    if (`${value}`.length >= 5 && /^[^\u4e00-\u9fa5]+$/.test(`${value}`)) {
      return '';
    }
    return '证件号码错误';
  }
  return '';
};

// 验证证件类型
const validateCertType = (value: string | number, rule: any) => {
  if (state.value.formInfo?.extInfo?.nationalityCode === 'CHN') {
    // 国籍为中国支持的证件 身份证、户口本、出生证、军官证
    if (!['1', '2', '3', '4'].includes(`${value}`)) {
      return '国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证';
    }
  } else if (['HKG', 'MAC'].includes(state.value.formInfo?.extInfo?.nationalityCode)) {
    // 国籍为中国香港、中国澳门，证件类型需为：港澳居民往来大陆通行证、港澳居民居住证
    if (!['15', '9'].includes(`${value}`)) {
      return '国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证';
    }
  } else if (state.value.formInfo?.extInfo?.nationalityCode === 'TWN') {
    // 国籍为中国台湾时，客户的证件类型需为：台湾居民往来大陆通行证、台湾居民居住证
    if (!['10'].includes(`${value}`)) {
      return '国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证';
    }
  } else {
    // 国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证
    if (!['2', '11'].includes(`${value}`)) {
      return '国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证';
    }
  }

  if (+(dayjs(state.value.formInfo?.birthday).toNow(true) as string).split(' ')[0] > 2) {
    if (`${value}` === '4') {
      return '年龄大于等于2周岁时，证件类型不能选择出生证';
    }
  }
  return '';
};

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
  () => state.value.formInfo.certType,
  (newVal) => {
    if (![1, 2].includes(+newVal)) {
      isIdCard.value = false;
    } else {
      isIdCard.value = true;
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
      state.value.formInfo.gender = getSex(newVal);
      state.value.formInfo.birthday = new Date(getBirth(newVal));
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
  () => props.images,
  (val) => {
    tempImages.value = val;
  },
  {
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
}
.date-extra {
  padding-left: $zaui-card-border;
  margin-left: $zaui-card-border;
  border-left: 1px solid #eeeff4;
}
.com-personal-wrapper {
}
</style>
