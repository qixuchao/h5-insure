<template>
  <div v-if="Object.keys(factorObj).length" class="com-personal-wrapper">
    <ProField
      v-if="showByFactor('insureRelation')"
      v-model="state.formInfo.relationToInsured"
      :name="`${prefix}_relationToInsured`"
      :required="isRequiredByFactor('insureRelation')"
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
      v-if="showByFactor('certType')"
      v-model="state.formInfo.certType"
      label="证件类型"
      :name="`${prefix}_certType`"
      :data-source="certType"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      :required="isRequiredByFactor('certType')"
      :rules="[{ validator: validateCertType }]"
    ></ProPicker>
    <ProField
      v-if="showByFactor('attachment') && state.formInfo.certType + '' === '1'"
      label="身份证上传"
      block
      :required="isRequiredByFactor('attachment')"
      :rules="[{ validator: idCardImagesValidate }]"
      :name="`${prefix}_idCard`"
    >
      <template #input>
        <ProIDCardUpload v-model="tempImages" :is-view="isView" @on-OCR="handleOCR" />
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('attachment') && state.formInfo.certType && state.formInfo.certType + '' !== '1'"
      label="证件上传"
      block
      :required="isRequiredByFactor('attachment')"
    >
      <template #input>
        <ProImageUpload v-model="tempImages" :max-count="1"></ProImageUpload>
      </template>
    </ProField>
    <ProField
      v-if="showByFactor('certNo')"
      v-model="state.formInfo.certNo"
      label="证件号码"
      :name="`${prefix}_certNo`"
      :required="isRequiredByFactor('certNo')"
      placeholder="请输入"
      :maxlength="18"
      :validate-type="validateType"
    ></ProField>
    <ProField
      v-if="showByFactor('name')"
      v-model="state.formInfo.name"
      label="姓名"
      :name="`${prefix}_name`"
      :required="isRequiredByFactor('name')"
    ></ProField>
    <ProField
      v-if="showByFactor('sex')"
      v-model="state.formInfo.gender"
      :required="isRequiredByFactor('sex')"
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
      v-if="showByFactor('birthday')"
      v-model="state.formInfo.birthday"
      label="出生日期"
      :name="`${prefix}_birthday`"
      :min="state.birth.min"
      :max="state.birth.max"
      :formatter="(val) => dayjs(val).format('YYYY-MM-DD')"
      type="date"
      :required="isRequiredByFactor('birthday')"
    ></ProDatePicker>
    <ProDatePicker
      v-if="showByFactor('certEndDate')"
      v-model="state.formInfo.certEndDate"
      label="有效期至"
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
    <ProCascader
      v-if="showByFactor('houseHold')"
      v-model="state.formInfo.extInfo.provinceCode"
      v-model:field1="state.formInfo.extInfo.provinceCode"
      v-model:field2="state.formInfo.extInfo.cityCode"
      v-model:field3="state.formInfo.extInfo.areaCode"
      label="户籍所在地"
      :name="`${prefix}_provinceCode`"
      placeholder="请选择"
      is-link
      :required="isRequiredByFactor('houseHold')"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="showByFactor('hasSocialInsurance')"
      v-model="state.formInfo.extInfo.hasSocialInsurance"
      label="社保"
      :name="`${prefix}_hasSocialInsurance`"
      placeholder="请选择"
      :required="isRequiredByFactor('hasSocialInsurance')"
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
      v-if="showByFactor('occupation')"
      v-model="state.formInfo.extInfo.occupationCodeList[0]"
      v-model:field0="state.formInfo.extInfo.occupationCodeList[0]"
      v-model:field1="state.formInfo.extInfo.occupationCodeList[1]"
      v-model:field2="state.formInfo.extInfo.occupationCodeList[2]"
      label="职业"
      :name="`${prefix}_occupationCodeList`"
      placeholder="请选择"
      :required="isRequiredByFactor('occupation')"
      :data-source="occupationCode"
      :mapping="{ label: 'value', value: 'code', children: 'children' }"
      is-link
    ></ProCascader>
    <ProField
      v-if="showByFactor('annualIncome')"
      v-model="state.formInfo.extInfo.personalAnnualIncome"
      label="个人年收入"
      :name="`${prefix}_personalAnnualIncome`"
      :required="isRequiredByFactor('annualIncome')"
      placeholder="请输入"
      :rules="[{ validator: validateFloat }]"
    >
      <template #extra> <span class="input-extra">万</span> </template>
    </ProField>
    <ProField
      v-if="showByFactor('familyAnnualIncome')"
      v-model="state.formInfo.extInfo.familyAnnualIncome"
      label="家庭年收入"
      :name="`${prefix}_familyAnnualIncome`"
      placeholder="请输入"
      :rules="[{ validator: validateFloat }]"
      :required="isRequiredByFactor('familyAnnualIncome')"
    >
      <template #extra> <span class="input-extra">万</span> </template>
    </ProField>
    <ProPicker
      v-if="showByFactor('nationality')"
      v-model="state.formInfo.extInfo.nationalityCode"
      label="国籍"
      :name="`${prefix}_nationalityCode`"
      :data-source="nationalityCode"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      placeholder="请选择"
      :required="isRequiredByFactor('nationality')"
      is-link
    ></ProPicker>
    <ProField
      v-if="showByFactor('USAGreenCard')"
      v-model="state.formInfo.extInfo.hasUsCard"
      label="美国绿卡"
      :name="`${prefix}_hasUsCard`"
      placeholder="请选择"
      :required="isRequiredByFactor('USAGreenCard')"
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
      v-if="showByFactor('marriage')"
      v-model="state.formInfo.extInfo.marriageStatus"
      label="婚姻状况"
      :name="`${prefix}_marriageStatus`"
      placeholder="请选择"
      :data-source="MARRIED_STATUS_LIST"
      is-link
      :required="isRequiredByFactor('marriage')"
    ></ProPicker>
    <ProPicker
      v-if="showByFactor('educationDegree')"
      v-model="state.formInfo.extInfo.educationDegree"
      label="学历"
      :name="`${prefix}_educationDegree`"
      :data-source="degree"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      placeholder="请选择"
      :required="isRequiredByFactor('educationDegree')"
      is-link
    ></ProPicker>
    <ProField
      v-if="showByFactor('mobile')"
      v-model="state.formInfo.mobile"
      label="手机号码"
      :name="`${prefix}_mobile`"
      placeholder="请输入"
      :maxlength="11"
      :required="isRequiredByFactor('mobile')"
      :validate-type="[VALIDATE_TYPE_ENUM.PHONE]"
    ></ProField>
    <ProField
      v-if="showByFactor('email')"
      v-model="state.formInfo.email"
      label="电子邮箱"
      :name="`${prefix}_email`"
      placeholder="请输入"
      :required="isRequiredByFactor('email')"
      :validate-type="[VALIDATE_TYPE_ENUM.EMAIL]"
    ></ProField>
    <ProCascader
      v-if="showByFactor('familyAddress')"
      v-model="state.formInfo.extInfo.familyAreaCode"
      v-model:field1="state.formInfo.extInfo.familyProvinceCode"
      v-model:field2="state.formInfo.extInfo.familyCityCode"
      v-model:field3="state.formInfo.extInfo.familyAreaCode"
      label="家庭地址"
      :name="`${prefix}_familyProvinceCode`"
      placeholder="请选择"
      is-link
      :required="isRequiredByFactor('familyAddress')"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="showByFactor('familyAddressDetail')"
      v-model="state.formInfo.extInfo.familyAddress"
      label="地址详情"
      :name="`${prefix}_familyAddress`"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
      :required="isRequiredByFactor('familyAddressDetail')"
    ></ProField>
    <ProField
      v-if="showByFactor('familyPostCode')"
      v-model="state.formInfo.extInfo.familyZipCode"
      label="家庭邮编"
      :name="`${prefix}_familyZipCode`"
      placeholder="请输入"
      :required="isRequiredByFactor('familyPostCode')"
      :validate-type="[VALIDATE_TYPE_ENUM.ZIP_CODE]"
    ></ProField>
    <ProCascader
      v-if="showByFactor('workAddress')"
      v-model="state.formInfo.extInfo.workAreaCode"
      v-model:field1="state.formInfo.extInfo.workProvinceCode"
      v-model:field2="state.formInfo.extInfo.workCityCode"
      v-model:field3="state.formInfo.extInfo.workAreaCode"
      label="工作地址"
      :name="`${prefix}_workProvinceCode`"
      placeholder="请选择"
      is-link
      :required="isRequiredByFactor('workAddress')"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="showByFactor('workAddressDetail')"
      v-model="state.formInfo.extInfo.workAddress"
      label="地址详情"
      :name="`${prefix}_workAddress`"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
      :required="isRequiredByFactor('workAddressDetail')"
    ></ProField>
    <ProField
      v-if="showByFactor('workZipCode')"
      v-model="state.formInfo.extInfo.workZipCode"
      label="工作邮编"
      :required="isRequiredByFactor('workZipCode')"
      :name="`${prefix}_workPostCode`"
      placeholder="请输入"
      :validate-type="[VALIDATE_TYPE_ENUM.ZIP_CODE]"
    ></ProField>
    <ProField
      v-if="showByFactor('workPlace')"
      v-model="state.formInfo.extInfo.workStation"
      label="单位名称"
      :name="`${prefix}_workPostCode`"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(20, ...params) }]"
      :required="isRequiredByFactor('workPlace')"
    ></ProField>
    <ProField
      v-if="showByFactor('workContent')"
      v-model="state.formInfo.extInfo.workContent"
      label="工作内容"
      :name="`${prefix}_workContent`"
      :required="isRequiredByFactor('workContent')"
      placeholder="请输入"
      :rules="[{ validator: (...params) => validateLength(100, ...params) }]"
    ></ProField>
    <ProPicker
      v-if="showByFactor('taxCert')"
      v-model="state.formInfo.extInfo.taxResident"
      label="税收居民身份"
      :name="`${prefix}_taxResident`"
      :data-source="TAX_RESIDENT"
      :required="isRequiredByFactor('taxCert')"
      placeholder="请输入"
    ></ProPicker>
    <ProField
      v-if="showByFactor('partTime')"
      v-model="state.formInfo.extInfo.isPartTime"
      label="是否兼职"
      :name="`${prefix}_isPartTime`"
      :required="isRequiredByFactor('partTime')"
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
      :required="isRequiredByFactor('beneficiaryType')"
    >
    </ProPicker>
    <ProField
      v-if="factorObj.benefitRate?.isDisplay"
      v-model="state.formInfo.benefitRate"
      :required="isRequiredByFactor('benefitRate')"
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
import { ProductInsureFactorItem, TenantOrderHolder, TenantOrderInsuredItem } from '@/api/index.data';
import { SEX_LIMIT_LIST, FLAG_LIST, VALIDATE_TYPE_ENUM, CERT_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
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

type FormInfo = TenantOrderInsuredItem | TenantOrderHolder;
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
  formInfo: () => ({}), // 表单信息
  factorList: () => [], // 页面对应的因子列表
  images: () => [], // 证件照片
  isView: false, // 页面状态是否为查看状态
  prefix: '', // 对投保人、被保人、受益人的数据进行区分
  beneficiaryList: () => [], // 受益人列表
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

// 根据模板因子控制表单元素的展示
const showByFactor = (key: string) => {
  return factorObj.value && factorObj.value[key] && factorObj.value[key].isDisplay === YES_NO_ENUM.YES;
};

// 根据模板因子控制表单元素的是否必填
const isRequiredByFactor = (key: string) => {
  return factorObj.value && factorObj.value[key] && factorObj.value[key].isMustInput === YES_NO_ENUM.YES;
};

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
  return [];
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
  margin-top: 14px;
}
.date-extra {
  padding-left: $zaui-card-border;
  margin-left: $zaui-card-border;
  border-left: 1px solid $zaui-line;
  margin-top: 16px;
  display: flex;
}
.com-personal-wrapper {
}
</style>
