<template>
  <div class="com-personal-info-wrapper">
    <VanForm ref="formRef" input-align="right" error-message-align="right">
      <VanField
        v-if="
          factorList.includes('APPLICANT.AGE') ||
          factorList.includes('AGE') ||
          factorList.includes('DAY') ||
          factorList.includes('APPLICANT.DAY')
        "
        v-model="state.formInfo.birthday"
        :rules="[{ required: true, message: '请选择' }]"
        name="birth"
        label="出生日期"
        is-link
        placeholder="请选择"
        @click="toggle(true)"
      ></VanField>
      <VanField
        v-if="factorList.includes('APPLICANT.GENDER') || factorList.includes('GENDER')"
        v-model="state.formInfo.gender"
        name="gender"
        label="性别"
        :rules="[{ required: true, message: '请选择' }]"
      >
        <template #input>
          <ProRadioButton v-model="state.formInfo.gender" :options="SEX_LIMIT" />
        </template>
      </VanField>
      <VanField
        v-if="factorList.includes('SOCIAL_INS')"
        v-model="state.formInfo.socialSecurity"
        name="socialSecurity"
        label="社保"
        :rules="[{ required: true, message: '请选择' }]"
      >
        <template #input>
          <ProRadioButton v-model="state.formInfo.socialSecurity" :options="SOCIAL_INSURANCE_LIMIT" />
        </template>
      </VanField>
      <VanField
        v-if="factorList.includes('OCCUPATION_CATEGORY')"
        v-model="state.formInfo.occupationalClass"
        :rules="[{ required: true, message: '请选择' }]"
        name="occupationalClass"
        label="职业类型"
        is-link
        placeholder="请选择"
        @click="toggleOccupational(true)"
      >
        <template #input>
          <span v-if="!state.occupationalText" class="placeholder">请选择</span>
          <div v-else>{{ state.occupationalText }}</div>
        </template>
      </VanField>
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
    <Occupational
      v-if="isShowOccupational"
      v-model="state.formInfo.occupationalClass"
      :show="isShowOccupational"
      insured-code="insuredCode"
      @finish="onFinish"
      @close="onClose"
    >
    </Occupational>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { SEX_LIMIT, SOCIAL_INSURANCE_LIMIT } from '@/common/contants/trial';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import Occupational from '../Occupational/index.vue';

const props = defineProps({
  formInfo: {
    type: Object,
    required: true,
    default: () => {},
  },
  insuredCode: {
    type: String,
    required: true,
    default: '',
  },
  factorList: {
    type: Array,
    required: true,
    default: () => [],
  },
  ageRange: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const [isShow, toggle] = useToggle();
const [isShowOccupational, toggleOccupational] = useToggle();
const formRef = ref();

const state = reactive({
  formInfo: props?.formInfo,
  occupationalText: '',
});

const onFinish = (text: string) => {
  state.occupationalText = text;
};

const onClose = () => {
  toggleOccupational(false);
};

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
    .subtract(min[0], min[1] === 'age' ? 'year' : 'day')
    .format('YYYY-MM-DD');
  const maxAge = dayjs()
    .subtract(max[0], max[1] === 'age' ? 'year' : 'day')
    .format('YYYY-MM-DD');
  return {
    minAge: new Date(maxAge),
    maxAge: new Date(minAge),
  };
});

defineExpose({
  validateForm,
});
</script>
<style lang="scss" scoped>
.com-personal-info-wrapper {
  .placeholder {
    color: #99a9c0;
  }
}
</style>
