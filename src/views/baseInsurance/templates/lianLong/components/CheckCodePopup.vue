<template>
  <ProPopup v-model:show="show" class="popup-check-mobile" :closeable="false" :close-on-click-overlay="false">
    <div class="popup-container">
      <div class="popup-header">
        <span class="clear-all" @click="handleCancel"> 取消 </span>
        <span class="title"> {{ `${checkCategory[checkType].type}手机号验证` }} </span>
        <span class="close" @click="handleConfirm">确认</span>
      </div>
      <div class="popup-body">
        <h3>{{ `尊敬的${checkCategory[checkType].type}${checkCategory[checkType].name}:` }}</h3>
        <p>{{ checkCategory[checkType].desc }}</p>
        <h3>
          {{ `${checkCategory[checkType].type}手机号验证 ${convertPhone(checkCategory[checkType].mobile || '')}` }}
        </h3>
        <ProRenderForm :model="formData">
          <ProSMSCode
            v-model="formData.verifyCode"
            related-name="mobile"
            label=" "
            maxlength="6"
            input-align="left"
            placeholder="请输入验证码"
            name="verifyCode"
            :send-s-m-s-code="sendSMSCode"
            rules=""
          ></ProSMSCode>
        </ProRenderForm>
      </div>
    </div>
  </ProPopup>
</template>

<script setup lang="ts" name="checkCodePopup">
import { withDefaults, ref, computed, watch } from 'vue';
import { emit } from 'process';
import { convertPhone } from '@/utils/format';
import { sendSMSCode } from '@/components/RenderForm/utils/constants';

interface Props {
  show: boolean;
  type: 'agent' | 'holder' | 'insured';
  data: any;
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  type: 'agent',
  data: () => ({}),
});

const emits = defineEmits(['cancel', 'confirm']);
const show = computed<boolean>(() => props.show);
const formData = ref({
  mobile: '',
  verifyCode: '',
});
const checkType = computed<'agent' | 'holder' | 'insured'>(() => props.type);
const checkCategory = ref({
  holder: {
    type: '投保人',
    name: '',
    mobile: '',
    desc: '',
  },
  agent: {
    type: '代理人',
    name: '李三',
    mobile: '13262278989',
    desc: '色卡上会计核算看回放独守空房还是空巅峰计划收款方',
  },
  insured: {
    type: '被保人',
    name: '',
    mobile: '',
    desc: '',
  },
});

const handleCancel = () => {
  emits('cancel');
};
const handleConfirm = () => {
  emits('confirm');
};

watch(
  props.data,
  (value) => {
    Object.assign(formData.value, value);
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>

<style lang="scss">
.popup-check-mobile {
  height: 673px !important;
  .popup-container {
    padding: 0 $zaui-card-border;
  }
  .popup-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    font-weight: 600;
    color: #333333;
    line-height: 100px;
    .clear-all {
      font-size: 32px;
      font-weight: 400;
      color: #999999;
      line-height: 45px;
    }
    .close {
      font-size: 32px;
      font-weight: 400;
      color: var(--van-primary-color);
      line-height: 45px;
    }
  }
  h3 {
    margin: 35px 0 20px 0;
    font-size: 34px;
    color: #333333;
    line-height: 48px;
  }
  p {
    font-size: 28px;
    font-weight: 400;
    color: #666666;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .van-cell {
    border: 1px solid $zaui-line;
    border-radius: 8px;
    .van-field__label {
      width: 0;
    }
    .van-field__value .van-field__control {
      text-align: left !important;
    }
  }
}
</style>
