<template>
  <div class="page-verify-wrap">
    <ProNavigator />
    <div v-if="needBMOS" class="header">
      <ProMessage type="warning" content="为保障您的合法权益，当前保单需要进行双录" />
    </div>
    <div class="sign-list">
      <van-cell
        v-if="isShowItem('agent')"
        title="代理人签名"
        :required="isRequired('agent')"
        is-link
        :value="VERIFY_STATUS_MAP[signPartInfo.agent.verifyStatus]"
        @click="checkMobile('agent')"
      ></van-cell>
      <template v-if="!needBMOS">
        <van-cell v-if="isShowItem('holder')" title="投保人签名" :required="isRequired('holder')">
          <template #value>
            <div class="inner-cell">
              <van-cell v-if="isShareSing('holder')" is-link value="分享空签邀约"></van-cell>
              <van-cell
                is-link
                :value="VERIFY_STATUS_MAP[signPartInfo.holder.verifyStatus]"
                @click="checkMobile('holder')"
              ></van-cell>
            </div>
          </template>
        </van-cell>
        <van-cell v-if="isShowItem('insured')" title="被保人签名" :required="isRequired('insured')">
          <template #value>
            <div class="inner-cell">
              <van-cell v-if="isShareSing('insured')" is-link value="分享空签邀约"></van-cell>
              <van-cell
                is-link
                :value="VERIFY_STATUS_MAP[signPartInfo.insured.verifyStatus]"
                @click="checkMobile('insured')"
              ></van-cell>
            </div>
          </template>
        </van-cell>
      </template>
      <ProRenderForm v-else ref="formRef" :model="formData">
        <ProFieldV2
          v-model="formData.holder.mobile"
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
      <van-cell v-if="needBMOS" title="保单双录" required is-link value="去双录" @click="handleDMOS"></van-cell>
    </div>
    <div class="footer-button">
      <van-button type="primary" @click="onNext">下一步</van-button>
    </div>
    <CheckCodePopup
      :type="checkType"
      :show="show"
      :data="orderDetail"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></CheckCodePopup>
  </div>
</template>

<script setup name="verify" lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import { nextStepOperate as nextStep } from '../../nextStep.ts';
import { ProFieldV2, ProSMSCode, ProRenderForm } from '@/components/RenderForm/components';
import { sendSMSCode } from '@/components/RenderForm/utils/constants';
import { RegMap } from '@/components/RenderForm/utils/validate';
import CheckCodePopup from './components/CheckCodePopup.vue';
import { getTenantOrderDetail, mergeInsureFactor } from '@/api/modules/trial';
import { pickProductRiskCode } from './utils';
import { transformFactorToSchema } from '@/components/RenderForm/utils/tools';
import useOrder from '@/hooks/useOrder';
import { PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS, BUTTON_CODE_ENUMS } from './constants';
import { VERIFY_STATUS_MAP } from '@/common/constants/verify';
import { ALERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import pageJump from '@/utils/pageJump';
import { dualUploadFiles, queryDualStatus } from '@/api/modules/verify';
import { PAGE_CODE_ENUM } from '@/common/constants/infoCollection';

const route = useRoute();
const router = useRouter();

const { orderNo, tenantId } = route.query;

// 是否需要双录
const needBMOS = ref<boolean>(false);
// 双录状态
const BMOSStatus = ref<boolean>(false);

const formRef = ref();
const formData = ref({
  holder: {},
  insuredList: [{}],
});

const orderDetail = useOrder();
const show = ref<boolean>(false);
const requiredType = ref<any>({
  sign: [],
  verify: [],
  scribing: '',
});

const signPartInfo = ref({
  holder: {
    fileList: [], // 签字资料
    personalInfo: {}, // 相关人的信息
    isSign: false, // 是否需要签名
    isVerify: false, // 是否需要人脸识别
    isShareSign: false, // 是否需要分享签名
    signData: '', // 签名字符串
    verifyStatus: 2, // 认证状态
  }, // 投保人
  insured: {
    fileList: [],
    personalInfo: [],
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: {},
    verifyStatus: 2,
  }, // 被保人
  agent: {
    fileList: [],
    personalInfo: {},
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: '',
    verifyStatus: 2,
  }, // 代理人
});

const checkType = ref<'agent' | 'holder' | 'insured'>('agent');
// 签字、认证是否必填
const isRequired = computed(
  () => (code) => requiredType.value.sign.includes(code) || requiredType.value.verify.includes(code),
);

// 签字、认证是否展示
const isShowItem = computed(() => (type) => signPartInfo.value[type].isSign || signPartInfo.value[type].isVerify);
// 空中签名
const isShareSing = computed(() => (type) => signPartInfo.value[type].isShareSign);

// 非双录场景下验证投被保人、代理人手机号
const checkMobile = (type: 'agent' | 'holder' | 'insured') => {
  checkType.value = type;
  if (type === 'agent') {
    router.push({
      path: PAGE_ROUTE_ENUMS.agentSign,
      query: route.query,
    });
    return;
  }
  show.value = true;
};

// 去双录
const handleDMOS = () => {
  dualUploadFiles(orderDetail.value).then(({ code, data }) => {
    if (code === '10000') {
      if (data) {
        Toast('双录已完成');
      }
    }
  });
};

const handleCancel = () => {
  show.value = false;
};
const handleConfirm = () => {
  let path = '';
  if (checkType.value === 'agent') {
    path = PAGE_ROUTE_ENUMS.infoPreview;
  } else if (checkType.value === 'holder') {
    if (signPartInfo.value[checkType.value].isVerify) {
      path = PAGE_ROUTE_ENUMS.infoPreview;
    } else {
      path = PAGE_ROUTE_ENUMS.infoPreview;
    }
  } else {
    if (signPartInfo.value[checkType.value].isVerify) {
      path = PAGE_ROUTE_ENUMS.infoPreview;
    } else {
      path = PAGE_ROUTE_ENUMS.infoPreview;
    }
  }

  router.push({
    path,
    query: {
      ...route.query,
      objectType: checkType.value,
    },
  });
};

const initData = async () => {
  let productRiskMap = {};
  queryDualStatus({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      const { doubleRecordFlag, doubleRecordStatus } = data;
      needBMOS.value = !!doubleRecordFlag;
      BMOSStatus.value = !!doubleRecordStatus;
    }
  });
  await getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(orderDetail.value, data);
      const { agentAuthFlag } = data.extInfo;
      formData.value = data;

      productRiskMap = pickProductRiskCode(data.insuredList[0].productList);
      signPartInfo.value.agent.verifyStatus = agentAuthFlag;
      signPartInfo.value.holder.verifyStatus = data.holder.isCert;
      signPartInfo.value.insured.verifyStatus = data.insuredList?.[0]?.isCert;
    }
  });

  await mergeInsureFactor(productRiskMap).then(({ data, code }) => {
    if (code === '10000') {
      const { signInfo } = transformFactorToSchema(data.productFactor);
      signInfo.schema.forEach((schema) => {
        if (schema.name === 'eleSign') {
          schema.columns.forEach((column) => {
            if (schema.required) {
              requiredType.value.sign.push(column.code);
            }
            // 代理人签字
            if (column.code === '1') {
              signPartInfo.value.agent.isSign = true;
              // 投保人签字
            } else if (column.code === '2') {
              signPartInfo.value.holder.isSign = true;
              // 被保人签字
            } else if (column.code === '3') {
              signPartInfo.value.insured.isSign = true;
              // 投保人空中签字
            } else if (column.code === '4') {
              signPartInfo.value.holder.isShareSign = true;
              // 被保人空中签字
            } else if (column.code === '5') {
              signPartInfo.value.insured.isShareSign = true;
            }
          });
        }
        if (schema.name === 'customerFace') {
          schema.columns.forEach((column) => {
            if (schema.required) {
              requiredType.value.verify.push(column.code);
            }
            if (column.code === '1') {
              signPartInfo.value.holder.isVerify = true;
            } else if (column.code === '2') {
              signPartInfo.value.insured.isVerify = true;
            }
          });
        }
      });
    }
  });
};

const onNext = () => {
  const { holder, insuredList, extInfo } = orderDetail.value;
  if (!needBMOS.value) {
    if ([extInfo.agentAuthFlag, holder.isCert, insuredList[0].isCert].includes(YES_NO_ENUM.NO)) {
      Toast('请先完成签名');
      return;
    }
  } else {
    if (!extInfo.agentAuthFlag) {
      Toast('请先完成代理人签名');
      return;
    }
  }
  const currentOrderDetail = Object.assign(orderDetail.value, {
    extInfo: { ...orderDetail.value.extInfo, pageCode: PAGE_CODE_ENUMS.SIGN, buttonCode: BUTTON_CODE_ENUMS.SIGN },
  });
  nextStep(currentOrderDetail, (data, pageAction) => {
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
      pageJump(data.nextPageCode, route.query);
    } else if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_ALERT) {
      if (data.alertType === ALERT_TYPE_ENUM.PAY_AUTH) {
        Dialog.confirm({
          title: '投保提示',
          message:
            '根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。',
          confirmButtonText: '去鉴权',
        }).then(() => {
          router.push({
            path: PAGE_ROUTE_ENUMS.payAuth,
            query: route.query,
          });
        });
      }
    }
  });
};

onMounted(() => {
  initData();
});
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
        justify-content: flex-end;
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
