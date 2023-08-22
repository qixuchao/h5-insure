<template>
  <div class="page-verify-wrap">
    <ProNavigator />
    <div v-if="needBMOS" class="header">
      <ProMessage type="warning" content="为保障您的合法权益，当前保单需要进行双录" />
    </div>
    <div class="sign-list">
      <van-cell title="代理人签名" required is-link value="去签名" @click="checkMobile('agent')"></van-cell>
      <template v-if="!needBMOS">
        <van-cell title="投保人签名" required>
          <template #value>
            <div class="inner-cell">
              <van-cell is-link value="分享空签邀约"></van-cell>
              <van-cell is-link value="去签名"></van-cell>
            </div>
          </template>
        </van-cell>
        <van-cell title="被保人签名" required>
          <template #value>
            <div class="inner-cell">
              <van-cell is-link value="分享空签邀约"></van-cell>
              <van-cell is-link value="去签名"></van-cell>
            </div>
          </template>
        </van-cell>
      </template>
      <ProRenderForm v-else :model="formData">
        <ProFieldV2
          v-model="formData.holder.mobile"
          :rules="[
            {
              pattern: new RegExp(RegMap.isPhone),
            },
          ]"
          label="投保人手机号"
          name="holder.mobile"
          maxlength="11"
          required
        ></ProFieldV2>
        <ProSMSCode
          v-model="formData.holder.verifyCode"
          related-name="holder.mobile"
          label="验证码"
          maxlength="6"
          name="holder.verifyCode"
          :send-s-m-s-code="sendSMSCode"
          rules=""
          required
        ></ProSMSCode>
        <ProFieldV2
          v-model="formData.insuredList[0].mobile"
          label="被保人手机号"
          name="insuredList.0.mobile"
          maxlength="11"
          required
          :rules="[
            {
              pattern: new RegExp(RegMap.isPhone),
            },
          ]"
        ></ProFieldV2>
        <ProSMSCode
          v-model="formData.insuredList[0].verifyCode"
          label="验证码"
          maxlength="6"
          name="insuredList.0.verifyCode"
          related-name="insuredList.0.mobile"
          :send-s-m-s-code="sendSMSCode"
          required
        ></ProSMSCode>
      </ProRenderForm>
    </div>
    <div class="footer-button">
      <van-button type="primary">下一步</van-button>
    </div>
    <CheckCodePopup
      :type="checkType"
      :show="show"
      data=""
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></CheckCodePopup>
  </div>
</template>

<script setup name="verify" lang="ts">
import { useRoute } from 'vue-router';
import { nextStepOperate as nextStep } from '../../nextStep.ts';
import { ProFieldV2, ProSMSCode, ProRenderForm } from '@/components/RenderForm/components';
import { sendSMSCode } from '@/components/RenderForm/utils/constants';
import { RegMap } from '@/components/RenderForm/utils/validate';
import CheckCodePopup from './components/CheckCodePopup.vue';

// 是否需要双录
const needBMOS = ref<boolean>(true);

const formData = ref({
  holder: {},
  insuredList: [{}],
});

const show = ref<boolean>(false);

const checkType = ref<'agent' | 'holder' | 'insured'>('agent');

// 非双录场景下验证投被保人、代理人手机号
const checkMobile = (type: 'agent' | 'holder' | 'insured') => {
  checkType.value = type;
  show.value = true;
};

const handleCancel = () => {
  show.value = false;
};
const handleConfirm = () => {};
</script>

<style lang="scss">
.page-verify-wrap {
  .sign-list {
    .van-cell {
      align-items: center;
      &.van-cell--required {
        &:before {
          width: 14px;
          height: 37px;
          left: 180px;
        }
      }
      .van-cell__title {
        flex: unset;
        width: 200px;
      }

      .inner-cell {
        display: flex;
        .van-cell {
          padding: 0;
          display: flex;
          justify-content: flex-end;
          .van-cell__value {
            flex: unset;
          }

          &:after {
            display: none;
          }

          &:last-child {
            width: 200px;
          }
        }
      }
    }
  }
}
</style>
