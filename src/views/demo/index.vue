<template>
  <ZaPageWrap>
    <VanForm ref="formRef">
      <VanField
        v-model="formInfo.birth"
        :rules="[{ required: true, message: '请选择' }]"
        name="birth"
        label="出生日期"
        is-link
        placeholder="请选择"
        @click="toggle(true)"
      ></VanField>
      <VanField v-model="formInfo.gender" name="gender" label="性别" :rules="[{ required: true, message: '请选择' }]">
        <template #input>
          <ProRadioButton v-model="formInfo.gender" :options="options" />
        </template>
      </VanField>
      <VanField v-model="formInfo.like" name="like" label="爱好" :rules="[{ required: true, message: '请选择' }]">
        <template #input>
          <ProCheckboxButton v-model="formInfo.like" :options="options" />
        </template>
      </VanField>

      <VanButton type="primary" @click="trial">试算</VanButton>
    </VanForm>
  </ZaPageWrap>
  <van-popup v-model:show="isShow" position="bottom">
    <van-datetime-picker
      type="time"
      @confirm="
        (value) => {
          formInfo.birth = value;
          toggle(false);
        }
      "
      @cancel="toggle(false)"
    />
  </van-popup>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import ProCheckboxButton from '@/components/ProCheckboxButton/index.vue';

const [isShow, toggle] = useToggle(false);

const formInfo = ref({
  gender: '1',
  like: [],
  birth: '',
});
const formRef = ref();
const options = [
  {
    label: '男',
    value: '1',
  },
  {
    label: '女',
    value: '2',
  },
];
const state = reactive({
  btns: [1, 2],
});

const trial = () => {
  formRef.value.submit();
};
</script>

<style lang="scss" scoped></style>
