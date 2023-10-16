<template>
  <div class="com-personal-info-wrapper">
    <VanForm ref="formRef" input-align="right" error-message-align="right">
      <VanField
        v-if="
          (trialType.type === 'proposal' && (trialType.type === 'add' || trialType.type === 'repeatAdd')) ||
          (trialType.type !== 'proposal' &&
            (factorList.includes('APPLICANT.AGE') ||
              factorList.includes('AGE') ||
              factorList.includes('DAY') ||
              factorList.includes('APPLICANT.DAY')))
        "
        v-model="state.formInfo.birthday"
        :rules="[{ required: true, message: '请选择出生日期' }]"
        name="birth"
        label="出生日期"
        class="isLink"
        readonly
        is-link
        :formatter="(val) => (val ? dayjs(val).format('YYYY-MM-DD') : val)"
        placeholder="请选择"
        @click="toggle(true)"
      ></VanField>
      <VanField
        v-if="
          (trialType.type === 'proposal' && (trialType.type === 'add' || trialType.type === 'repeatAdd')) ||
          (trialType.type !== 'proposal' && (factorList.includes('APPLICANT.GENDER') || factorList.includes('GENDER')))
        "
        v-model="state.formInfo.gender"
        name="gender"
        label="性别"
        :rules="[{ required: true, message: '请选择性别' }]"
      >
        <template #input>
          <div class="pro-radio-wrap">
            <ProRadioButton v-model="state.formInfo.gender" :options="SEX_LIMIT_LIST" />
          </div>
        </template>
      </VanField>
      <VanField
        v-if="factorList.includes('SOCIAL_INS') || factorList.includes('APPLICANT.SOCIAL_INS')"
        v-model="state.formInfo.socialFlag"
        name="socialFlag"
        label="社保"
        :rules="[{ required: true, message: '请选择社保' }]"
      >
        <template #input>
          <div class="pro-radio-wrap">
            <ProRadioButton v-model="state.formInfo.socialFlag" :options="SOCIAL_INSURANCE_LIMIT" />
          </div>
        </template>
      </VanField>
      <ProCascader
        v-if="factorList.includes('OCCUPATION_CATEGORY') || factorList.includes('APPLICANT.OCCUPATION_CATEGORY')"
        v-model="state.formInfo.occupationCodeList[0]"
        v-model:field0="state.formInfo.occupationCodeList[0]"
        v-model:field1="state.formInfo.occupationCodeList[1]"
        v-model:field2="state.formInfo.occupationCodeList[2]"
        required
        name="occupationCodeList"
        label="职业类型"
        :data-source="OCCUPATION_LIST"
        :mapping="{ label: 'value', value: 'code', children: 'children' }"
        show-full-value
        need-key="name"
      />
    </VanForm>
    <van-popup v-model:show="isShow" position="bottom">
      <van-datetime-picker
        type="date"
        :min-date="ageRangeObj.minAge"
        :max-date="ageRangeObj.maxAge"
        @confirm="
          (value) => {
            state.formInfo.birthday = dayjs(value).format('YYYY-MM-DD');
            toggle(false);
          }
        "
        @cancel="toggle(false)"
      />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { SOCIAL_INSURANCE_LIMIT } from '@/common/constants/trial';
import { SEX_LIMIT_LIST } from '@/common/constants';
import Occupational from '../Occupational/index.vue';
import { PersonVo } from '@/api/modules/trial.data';
import ProCascader from '@/components/ProCascader/index.vue';
import useDicData from '@/hooks/useDictData';

interface Props {
  formInfo: PersonVo;
  insuredCode: string;
  factorList: any[];
  ageRange: any[];
}

const props = withDefaults(defineProps<Props>(), {
  formInfo: () => ({}),
  insuredCode: '',
  factorList: () => [],
  ageRange: () => [],
});

const OCCUPATION_LIST = useDicData(`${props.insuredCode?.toLocaleUpperCase?.()}_OCCUPATION`);
const [isShow, toggle] = useToggle();
const formRef = ref();
const trialType: any = inject('source') || {};

const state = reactive({
  formInfo: props.formInfo,
  occupationalText: '',
  occupationCodeList: [],
});

const validateForm = () => {
  return new Promise((resolve, reject) => {
    formRef.value?.validate().then(
      () => {
        resolve('');
      },
      (errors: any[]) => {
        formRef.value?.scrollToField(errors?.[0].name);
        reject();
      },
    );
  });
};

// 比较产品下险种的最大最小投保年龄，进行排序
const compareHolderAge = (ageList: any[]) => {
  const currentList = ageList || [];
  for (let i = 0, len = currentList.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const preAge = currentList[i].split('_');
      const nexAge = currentList[j].split('_');
      const temp = currentList[i];
      if (preAge[0] === nexAge[0]) {
        if (preAge > nexAge) {
          currentList[i] = currentList[j];
          currentList[j] = temp;
        }
      } else {
        if (preAge[0] === 'age') {
          currentList[i] = currentList[j];
          currentList[j] = temp;
        }
      }
    }
  }

  return currentList;
};

// 找出最大最小投保年龄的并集
const ageRangeObj = computed(() => {
  const ageList = compareHolderAge(props?.ageRange);
  const splitAge = (age = '') => {
    const ageNum = +age.split('_')[1];
    const ageType = age.split('_')[0];
    return [ageNum, ageType];
  };
  const min = splitAge(ageList[0]);
  const max = splitAge(ageList[ageList.length - 1]);

  const minAge = dayjs()
    .subtract(min[0] as number, min[1] === 'age' ? 'year' : 'day')
    .format('YYYY-MM-DD');
  let maxAge = dayjs()
    .subtract(max[0] as number, max[1] === 'age' ? 'year' : 'day')
    .format('YYYY-MM-DD');

  if (dayjs(maxAge).subtract(1, 'year').isBefore(minAge)) {
    maxAge = dayjs(maxAge).subtract(1, 'year').add(1, 'day').format('YYYY-MM-DD');
  }
  return {
    minAge: new Date(maxAge),
    maxAge: new Date(minAge),
  };
});

defineExpose({
  validateForm,
  ageRangeObj: ageRangeObj.value,
});
</script>
<style lang="scss" scoped>
.com-personal-info-wrapper {
  .placeholder {
    color: #99a9c0;
  }
}
</style>
