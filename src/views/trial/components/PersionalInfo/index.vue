<template>
  <div class="com-personal-info-wrapper">
    <VanForm ref="formRef" input-align="right" error-message-align="right">
      <VanField
        v-if="factorList.includes('APPLICANT.AGE') || factorList.includes('AGE')"
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
      ></VanField>
    </VanForm>
    <van-popup v-model:show="isShow" position="bottom">
      <van-datetime-picker
        type="date"
        :min-date="new Date('1900-01-01')"
        :max-date="new Date()"
        @confirm="
          (value) => {
            state.formInfo.birthday = dayjs(value).format('YYYY-MM-DD');
            toggle(false);
          }
        "
        @cancel="toggle(false)"
      />
    </van-popup>
    <ProPopup :show="isShowOccupational" title="职业选择" position="bottom" closeable>
      <van-cascader
        v-model="state.formInfo.occupationalClass"
        title="请选择职业"
        :options="[]"
        @close="toggleOccupational(false)"
        @finish="onFinish"
      />
    </ProPopup>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { SEX_LIMIT, SOCIAL_INSURANCE_LIMIT } from '@/common/contants/trial';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import ProPopup from '@/components/ProPopup/index.vue';

const props = defineProps({
  formInfo: {
    type: Object,
    required: true,
    default: () => {},
  },
  factorList: {
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
});

const onFinish = () => {};
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

defineExpose({
  validateForm,
});
</script>
