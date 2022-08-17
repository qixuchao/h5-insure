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
          <ProRadioButton v-model="state.formInfo.gender" :options="SEX_LIMIT" />
        </template>
      </VanField>
      <VanField
        v-if="factorList.includes('SOCIAL_INS')"
        v-model="state.formInfo.socialFlag"
        name="socialFlag"
        label="社保"
        :rules="[{ required: true, message: '请选择社保' }]"
      >
        <template #input>
          <ProRadioButton v-model="state.formInfo.socialFlag" :options="SOCIAL_INSURANCE_LIMIT" />
        </template>
      </VanField>
      <ProCascader
        v-if="factorList.includes('OCCUPATION_CATEGORY')"
        v-model="state.formInfo.occupationClass"
        required
        name="occupationClass"
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
import { SEX_LIMIT, SOCIAL_INSURANCE_LIMIT } from '@/common/constants/trial';
import Occupational from '../Occupational/index.vue';
import { PersonVo } from '@/api/modules/trial.data';
import ProCascader from '@/components/ProCascader/index.vue';
import useDicData from '@/hooks/useDicData';

interface Props {
  formInfo: Partial<PersonVo>;
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
});

const validateForm = () => {
  return new Promise((resolve, reject) => {
    formRef?.value.validate().then(
      () => {
        resolve('');
      },
      () => {
        reject();
      },
    );
  });
};

const compareHolderAge = (ageList: any[]) => {
  const currentList = ageList || [];
  for (let i = 0; i < currentList.length; i++) {
    for (let j = i + 1; j < currentList.length; j++) {
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
  const maxAge = dayjs()
    .subtract(max[0] as number, max[1] === 'age' ? 'year' : 'day')
    .format('YYYY-MM-DD');
  console.log('ageRangeObj', new Date(maxAge), new Date(minAge));
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
