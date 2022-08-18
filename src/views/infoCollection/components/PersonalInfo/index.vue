<template>
  <div v-if="Object.keys(factorObj).length" class="com-personal-wrapper">
    <ProField
      v-if="factorObj.insureRelation?.isDisplay"
      v-model="state.formInfo.relationToInsured"
      :name="`${prefix}_relationToInsured`"
      :required="factorObj.insureRelation?.isMustInput === 'YES'"
      label="是被保人的"
      :rules="[{ validator: relationValidate }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.relationToInsured"
          :is-view="isView"
          :options="RELATION_INSURED_LIST.slice(1, 4)"
        />
      </template>
    </ProField>
    <ProPicker
      v-if="factorObj.certType?.isDisplay === 'YES'"
      v-model="state.formInfo.certType"
      label="证件类型"
      :name="`${prefix}_certType`"
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
      :rules="[{ validator: idCardImagesValidate }]"
      :name="`${prefix}_idCard`"
    >
      <template #input>
        <ProIDCardUpload v-model="tempImages" :is-view="isView" @on-OCR="handleOCR" />
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
      :name="`${prefix}_certNo`"
      :required="factorObj.certNo?.isMustInput === 'YES'"
      placeholder="请输入"
      :validate-type="validateType"
    ></ProField>
    <ProField
      v-if="factorObj.name?.isDisplay === 'YES'"
      v-model="state.formInfo.name"
      label="姓名"
      :name="`${prefix}_name`"
      :required="factorObj.name?.isMustInput === 'YES'"
    ></ProField>
    <ProField
      v-if="factorObj.sex?.isDisplay === 'YES'"
      v-model="state.formInfo.gender"
      :required="factorObj.sex?.isMustInput === 'YES'"
      label="性别"
      :name="`${prefix}_gender`"
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
      :name="`${prefix}_birthday`"
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
      :name="`${prefix}_certEndDate`"
      type="date"
      :min="state.certEndDate.min"
      :max="state.certEndDate.max"
      :is-view="certEndType || isView"
      read
      :required="factorObj.certEndDate?.isMustInput === 'YES'"
    >
      <template #extra>
        <div class="date-extra">
          <van-checkbox v-model="certEndType" :disabled="isView">长期</van-checkbox>
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
      :name="`${prefix}_provinceCode`"
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
      :name="`${prefix}_hasSocialInsurance`"
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
      :name="`${prefix}_occupationCode`"
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
      :name="`${prefix}_personalAnnualIncome`"
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
      :name="`${prefix}_familyAnnualIncome`"
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
      :name="`${prefix}_nationalityCode`"
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
      :name="`${prefix}_hasUsCard`"
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
      :name="`${prefix}_marriageStatus`"
      placeholder="请选择"
      :data-source="MARRIED_STATUS_LIST"
      is-link
      :required="factorObj.marriage?.isMustInput === 'YES'"
    ></ProPicker>
    <ProPicker
      v-if="factorObj.educationDegree?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.educationDegree"
      label="学历"
      :name="`${prefix}_educationDegree`"
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
      :name="`${prefix}_mobile`"
      placeholder="请输入"
      :required="factorObj.mobile?.isMustInput === 'YES'"
      :validate-type="[VALIDATE_TYPE_ENUM.PHONE]"
    ></ProField>
    <ProField
      v-if="factorObj.email?.isDisplay === 'YES'"
      v-model="state.formInfo.email"
      label="电子邮箱"
      :name="`${prefix}_email`"
      placeholder="请输入"
      :required="factorObj.email?.isMustInput === 'YES'"
      :validate-type="[VALIDATE_TYPE_ENUM.EMAIL]"
    ></ProField>
    <ProCascader
      v-if="factorObj.familyAddress?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.familyAreaCode"
      v-model:field1="state.formInfo.extInfo.familyProvinceCode"
      v-model:field2="state.formInfo.extInfo.familyCityCode"
      v-model:field3="state.formInfo.extInfo.familyAreaCode"
      label="家庭地址"
      :name="`${prefix}_familyProvinceCode`"
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
      :name="`${prefix}_familyAddress`"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
      :required="factorObj.familyAddressDetail?.isMustInput === 'YES'"
    ></ProField>
    <ProField
      v-if="factorObj.familyPostCode?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.familyZipCode"
      label="家庭邮编"
      :name="`${prefix}_familyZipCode`"
      placeholder="请输入"
      :required="factorObj.familyPostCode?.isMustInput === 'YES'"
      :validate-type="[VALIDATE_TYPE_ENUM.ZIP_CODE]"
    ></ProField>
    <ProCascader
      v-if="factorObj.workAddress?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.workAreaCode"
      v-model:field1="state.formInfo.extInfo.workProvinceCode"
      v-model:field2="state.formInfo.extInfo.workCityCode"
      v-model:field3="state.formInfo.extInfo.workAreaCode"
      label="工作地址"
      :name="`${prefix}_workProvinceCode`"
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
      :name="`${prefix}_workAddress`"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
      :required="factorObj.workAddressDetail?.isMustInput === 'YES'"
    ></ProField>
    <ProField
      v-if="factorObj.workZipCode?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.workZipCode"
      label="工作邮编"
      :required="factorObj.workZipCode?.isMustInput === 'YES'"
      :name="`${prefix}_workPostCode`"
      placeholder="请输入"
      :validate-type="[VALIDATE_TYPE_ENUM.ZIP_CODE]"
    ></ProField>
    <ProField
      v-if="factorObj.workPlace?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.workStation"
      label="单位名称"
      :name="`${prefix}_workPostCode`"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(20, ...params) }]"
      :required="factorObj.workPlace?.isMustInput === 'YES'"
    ></ProField>
    <ProField
      v-if="factorObj.workContent?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.workContent"
      label="工作内容"
      :name="`${prefix}_workContent`"
      :required="factorObj.workContent?.isMustInput === 'YES'"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
    ></ProField>
    <ProPicker
      v-if="factorObj.taxCert?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.taxResident"
      label="税收居民身份"
      :name="`${prefix}_taxResident`"
      :data-source="TAX_RESIDENT"
      :required="factorObj.taxCert?.isMustInput === 'YES'"
      placeholder="请输入"
    ></ProPicker>
    <ProField
      v-if="factorObj.partTime?.isDisplay === 'YES'"
      v-model="state.formInfo.extInfo.isPartTime"
      label="是否兼职"
      :name="`${prefix}_isPartTime`"
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
      :name="`${prefix}_benefitOrder`"
      :data-source="BENEFICIARY_ORDER"
      :required="factorObj.beneficiaryType?.isMustInput === 'YES'"
    >
    </ProPicker>
    <ProField
      v-if="factorObj.benefitRate?.isDisplay"
      v-model="state.formInfo.benefitRate"
      :required="factorObj.benefitRate?.isMustInput === 'YES'"
      :name="`${prefix}_benefitRate`"
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
import { SEX_LIMIT_LIST, FLAG_LIST, VALIDATE_TYPE_ENUM, CERT_TYPE_ENUM } from '@/common/constants';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import useDicData from '@/hooks/useDicData';
import { OCRResponse } from '@/api/modules/file.data';
import {
  TAX_RESIDENT,
  BENEFICIARY_ORDER,
  RELATION_INSURED_LIST,
  MARRIED_STATUS_LIST,
  RELATION_INSURED_ENUM,
} from '@/common/constants/infoCollection';

type FormInfo = InsuredReqItem | HolderReq;
interface Props {
  formInfo: FormInfo;
  factorList: ProductInsureFactorItem[];
  images: string[];
  isView?: boolean;
  // field的name前缀
  prefix: string;
  beneficiaryList: Array<any>;
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
  prefix: '',
  beneficiaryList: () => [],
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

dayjs.extend(relativeTime);

const certEndType = ref<boolean>(props.formInfo.certEndType === 2);

const factorObj = computed(() => {
  const factor: FactorObj = {};
  props.factorList.forEach((factorItem) => {
    factor[factorItem.code] = factorItem;
  });
  return factor;
});

const handleOCR = (res: OCRResponse['idCardOcrVO']) => {
  state.value.formInfo.certNo = res.personIdCard;
  state.value.formInfo.name = res.personName;
  state.value.formInfo.certEndDate = dayjs(res.validDateEnd, 'YYYYMMDD').toDate();
};

const validateType = computed(() => {
  if ([CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(state.value.formInfo.certType)) {
    return [VALIDATE_TYPE_ENUM.ID_CARD];
  }
  if (state.value.formInfo.certType === CERT_TYPE_ENUM.BIRTH) {
    return [VALIDATE_TYPE_ENUM.BIRTH];
  }
  if (state.value.formInfo.certType === CERT_TYPE_ENUM.PASSPORT) {
    return [VALIDATE_TYPE_ENUM.PASSPORT];
  }
  return [];
});

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
  if (state.value.formInfo?.extInfo?.nationalityCode === 'CHN') {
    // 国籍为中国支持的证件 身份证、户口本、出生证、军官证
    if (
      ![CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD, CERT_TYPE_ENUM.BIRTH, CERT_TYPE_ENUM.MILITARY_CARD].includes(
        value,
      )
    ) {
      return '国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证';
    }
  } else if (['HKG', 'MAC'].includes(state.value.formInfo?.extInfo?.nationalityCode)) {
    // 国籍为中国香港、中国澳门，证件类型只允许选择港澳通行证、港澳居民居住证
    if (![CERT_TYPE_ENUM.HK_MACAO_RESIDENCE_PERMIT, CERT_TYPE_ENUM.HONGKONG_MACAO].includes(value)) {
      return '国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证';
    }
  } else if (state.value.formInfo?.extInfo?.nationalityCode === 'TWN') {
    // '国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证
    if (![CERT_TYPE_ENUM.TAIWAN_RESIDENCE_PERMIT, CERT_TYPE_ENUM.TAIWAN_TRAVEL].includes(value)) {
      return '国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证';
    }
  } else {
    // 国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证
    if (![CERT_TYPE_ENUM.PASSPORT, CERT_TYPE_ENUM.FOREIGN_PERMANENT].includes(`${value}`)) {
      return '国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证';
    }
  }

  if (+(dayjs(state.value.formInfo?.birthday).toNow(true) as string).split(' ')[0] > 2) {
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
    if ([CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(newVal)) {
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
