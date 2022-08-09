<template>
  <div class="com-personal-wrapper">
    <ProPicker
      v-if="factorObj.certType"
      v-model="state.formInfo.certType"
      label="证件类型"
      name="certType"
      readonly
      :data-source="certType"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      required
    ></ProPicker>
    <ProField v-if="state.formInfo.certType + '' === '1'" label="身份证上传" block required>
      <template #input>
        <ProIDCardUpload v-model:front="tempImages[0]" v-model:back="tempImages[1]"></ProIDCardUpload>
      </template>
    </ProField>
    <ProField v-if="state.formInfo.certType && state.formInfo.certType + '' !== '1'" label="证件上传" block required>
      <template #input>
        <ProImageUpload v-model="tempImages" :max-count="1"></ProImageUpload>
      </template>
    </ProField>
    <ProField
      v-if="factorObj.certNo"
      v-model="state.formInfo.certNo"
      label="证件号码"
      name="certNo"
      required
      placeholder="请输入"
      :validate-type="state.formInfo.certType === '1' ? ['idCard'] : []"
    ></ProField>
    <ProField v-if="factorObj.name" v-model="state.formInfo.name" label="姓名" name="name" required></ProField>
    <ProField
      v-if="factorObj.sex"
      v-model="state.formInfo.gender"
      required
      label="性别"
      name="gender"
      placeholder="请选择"
      :is-view="isIdCard"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.gender" :options="SEX_LIMIT_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProDatePicker
      v-if="factorObj.birthday"
      v-model="state.formInfo.birthday"
      label="出生日期"
      name="birthday"
      :min="state.birth.min"
      :max="state.birth.max"
      type="date"
      required
      :is-view="isIdCard"
    ></ProDatePicker>
    <ProDatePicker
      v-if="factorObj.certEndDate"
      v-model="state.formInfo.certEndDate"
      label="有效期至"
      name="certEndDate"
      type="date"
      required
    ></ProDatePicker>
    <ProCascader
      v-model="state.formInfo.extInfo.areaCode"
      v-model:field1="state.formInfo.extInfo.provinceCode"
      v-model:field2="state.formInfo.extInfo.cityCode"
      v-model:field3="state.formInfo.extInfo.areaCode"
      label="户籍所在地"
      name="provinceCode"
      placeholder="请选择"
      is-link
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
    ></ProCascader>
    <ProField
      v-if="factorObj.hasSocialInsurance"
      v-model="state.formInfo.extInfo.hasSocialInsurance"
      label="社保"
      name="hasSocialInsurance"
      placeholder="请选择"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.extInfo.hasSocialInsurance" :options="FLAG_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProCascader
      v-if="factorObj.occupation"
      v-model="state.formInfo.extInfo.occupationCode"
      label="职业"
      name="occupationCode"
      placeholder="请选择"
      :data-source="occupationCode"
      :mapping="{ label: 'name', value: 'code', children: 'children' }"
      is-link
    ></ProCascader>
    <!-- <ProField
      v-if="factorObj.occupation"
      v-model="state.formInfo.occupationalClass"
      :rules="[{ required: true, message: '请选择职业类型' }]"
      name="occupationalClass"
      label="职业类型"
      is-link
      readonly
      placeholder="请选择"
      @click="toggleOccupational(true)"
    >
      <template #input>
        <span v-if="!state.occupationalText" class="placeholder">请选择</span>
        <div v-else>{{ state.occupationalText }}</div>
      </template>
    </ProField> -->
    <ProField
      v-if="factorObj.annualIncome"
      v-model="state.formInfo.extInfo.personalAnnualIncome"
      label="个人年收入"
      name="personalAnnualIncome"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.familyAnnualIncome"
      v-model="state.formInfo.extInfo.familyAnnualIncome"
      label="家庭年收入"
      name="familyAnnualIncome"
      placeholder="请输入"
    ></ProField>
    <ProPicker
      v-if="factorObj.nation"
      v-model="state.formInfo.extInfo.nationalityCode"
      label="国籍"
      name="nationalityCode"
      readonly
      :data-source="nationalityCode"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      placeholder="请选择"
      is-link
    ></ProPicker>
    <ProField
      v-if="factorObj.marriage"
      v-model="state.formInfo.extInfo.hasUsCard"
      label="美国绿卡"
      name="hasUsCard"
      placeholder="请选择"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.extInfo.hasUsCard" :options="FLAG_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProPicker
      v-if="factorObj.marriage"
      v-model="state.formInfo.extInfo.marriageStatus"
      label="婚姻状况"
      name="marriageStatus"
      readonly
      placeholder="请选择"
      :data-source="marriageStatus"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      is-link
    ></ProPicker>
    <ProPicker
      v-if="factorObj.educationDegree"
      v-model="state.formInfo.extInfo.educationDegree"
      label="学历"
      readonly
      name="educationDegree"
      :data-source="degree"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      placeholder="请选择"
      is-link
    ></ProPicker>
    <ProField
      v-if="factorObj.mobile"
      v-model="state.formInfo.mobile"
      label="手机号码"
      name="mobile"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.email"
      v-model="state.formInfo.email"
      label="电子邮箱"
      name="email"
      placeholder="请输入"
    ></ProField>
    <ProPicker
      v-if="factorObj.familyAddress"
      v-model="state.formInfo.familyProvinceCode"
      label="家庭地址"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      name="familyProvinceCode"
      placeholder="请选择"
    ></ProPicker>
    <ProField
      v-if="factorObj.familyAddressDetail"
      v-model="state.formInfo.extInfo.familyAddress"
      label="地址详情"
      name="familyAddress"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.familyPostCode"
      v-model="state.formInfo.extInfo.familyZipCode"
      label="家庭邮编"
      name="familyZipCode"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.workAddress"
      v-model="state.formInfo.extInfo.workProvinceCode"
      label="工作地址"
      name="workProvinceCode"
      :data-source="region"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      placeholder="请选择"
    ></ProField>
    <ProField
      v-if="factorObj.workAddressDetail"
      v-model="state.formInfo.extInfo.workAddress"
      label="地址详情"
      name="workAddress"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.workZipCode"
      v-model="state.formInfo.extInfo.workZipCode"
      label="工作邮编"
      name="workPostCode"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.workPlace"
      v-model="state.formInfo.extInfo.workStation"
      label="单位名称"
      name="workPostCode"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.workContent"
      v-model="state.formInfo.extInfo.workContent"
      label="工作内容"
      name="workContent"
      placeholder="请输入"
    ></ProField>
    <ProPicker
      v-if="factorObj.taxCert"
      v-model="state.formInfo.extInfo.taxResident"
      label="税收居民身份"
      name="taxResident"
      :data-source="TAX_RESIDENT"
      placeholder="请输入"
    ></ProPicker>
    <ProField
      v-if="factorObj.partTime"
      v-model="state.formInfo.extInfo.isPartTime"
      label="是否兼职"
      name="isPartTime"
      placeholder="请输入"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.extInfo.isPartTime" :options="FLAG_LIST"></ProRadioButton>
      </template>
    </ProField>
    <Occupational
      v-if="isShowOccupational"
      v-model="state.formInfo.occupationalClass"
      :show="isShowOccupational"
      :insured-code="insuredCode"
      @finish="onFinish"
      @close="onClose"
    >
    </Occupational>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import dayjs from 'dayjs';
import { useToggle } from '@vant/use';
import { InsuredReqItem, HolderReq, ProductInsureFactorItem } from '@/api/index.data';
import { SEX_LIMIT_LIST, FLAG_LIST } from '@/common/constants';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import useDicData from '@/hooks/useDicData';
import ProCascader from '@/components/ProCascader/index.vue';
import { TAX_RESIDENT } from '@/common/constants/infoCollection';

type FormInfo = InsuredReqItem | HolderReq;
interface Props {
  formInfo: FormInfo;
  factorList: ProductInsureFactorItem[];
  images: string[];
}

interface FactorObj {
  [props: string]: ProductInsureFactorItem;
}

interface State {
  formInfo: FormInfo;
}

const [isShowOccupational, toggleOccupational] = useToggle();
const emits = defineEmits(['update:images']);
const certType = useDicData('CERT_TYPE'); // 证件类型
const occupationCode = useDicData('HENGQIN_OCCUPATION'); // 职业
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
});

const state = ref({
  formInfo: props.formInfo,
  birth: {
    min: dayjs(new Date('1900-01-01')).format('YYYY-MM-DD'),
    max: dayjs(new Date()).format('YYYY-MM-DD'),
  },
  front: '',
  back: '',
  occupationalText: '',
});

const factorObj = computed(() => {
  const factor: FactorObj = {};
  props.factorList.forEach((factorItem) => {
    (factor[factorItem.code] = factor[factorItem.code] || []).push(factorItem);
  });
  return factor;
});

const onFinish = (text: string) => {
  state.value.occupationalText = text;
};

const onClose = () => {
  toggleOccupational(false);
};

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
