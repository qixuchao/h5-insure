<template>
  <div class="page-verify-wrap">
    <ProNavigator />
    <div class="sign-list">
      <van-cell v-if="isShowItem('agent')" title="代理人签名" :required="isRequired('agent')">
        <template #value>
          <div class="inner-cell">
            <van-cell
              is-link
              :value="VERIFY_STATUS_MAP[signPartInfo.agent.verifyStatus]"
              @click="checkMobile('agent')"
            ></van-cell>
          </div>
        </template>
      </van-cell>
      <template v-if="!needBMOS">
        <van-cell v-if="isShowItem('holder')" title="投保人签名" :required="isRequired('holder')">
          <template #value>
            <div class="inner-cell">
              <van-cell
                v-if="isShareSing('holder')"
                :value-class="`${isDisabled ? 'disable' : ''}`"
                is-link
                value="分享空签邀约"
                @click="handleShare('holder')"
              ></van-cell>
              <van-cell
                is-link
                :value="VERIFY_STATUS_MAP[signPartInfo.holder.verifyStatus]"
                :value-class="`${isDisabled ? 'disable' : ''}`"
                @click="checkMobile('holder')"
              ></van-cell>
            </div>
          </template>
        </van-cell>
        <van-cell v-if="isShowItem('insured') && isShowInsured" title="被保人签名" :required="isRequired('insured')">
          <template #value>
            <div class="inner-cell">
              <van-cell
                v-if="isShareSing('insured')"
                :value-class="`${isDisabled ? 'disable' : ''}`"
                is-link
                value="分享空签邀约"
                @click="handleShare('insured')"
              ></van-cell>
              <van-cell
                is-link
                :value-class="`${isDisabled ? 'disable' : ''}`"
                :value="VERIFY_STATUS_MAP[signPartInfo.insured.verifyStatus]"
                @click="checkMobile('insured')"
              ></van-cell>
            </div>
          </template>
        </van-cell>
      </template>
      <ProRenderForm v-else ref="formRef" validate-method="toast" :model="formData">
        <ProFieldV2
          v-model="formData.holderMobile"
          label="投保人手机号"
          name="holderMobile"
          maxlength="11"
          required
          is-view
        ></ProFieldV2>
        <ProSMSCode
          v-model="formData.holderVerifyCode"
          related-name="holderMobile"
          label="验证码"
          maxlength="6"
          name="holderVerifyCode"
          :send-s-m-s-code="sendSMSCode"
          :check-s-m-s-code="checkSMSCode"
          required
        ></ProSMSCode>
        <template v-if="isShowInsured">
          <ProFieldV2
            v-model="formData.insuredMobile"
            label="被保人手机号"
            name="insuredMobile"
            maxlength="11"
            required
            is-view
          ></ProFieldV2>
          <ProSMSCode
            v-model="formData.insuredVerifyCode"
            label="验证码"
            maxlength="6"
            name="insuredVerifyCode"
            related-name="insuredMobile"
            :send-s-m-s-code="sendSMSCode"
            :check-s-m-s-code="checkSMSCode"
            required
          ></ProSMSCode>
        </template>
      </ProRenderForm>
      <van-cell v-if="needBMOS" title="保单双录" required>
        <template #value>
          <div class="inner-cell">
            <van-cell
              is-link
              :value-class="`${isDisabled ? 'disable' : ''}`"
              :value="DUAL_STATUS_MAP[BMOSStatus]"
              @click="handleDMOS"
            ></van-cell>
          </div>
        </template>
      </van-cell>
    </div>
    <div class="footer-button">
      <van-button type="primary" @click="onNext">下一步</van-button>
    </div>
    <CheckCodePopup
      v-if="show"
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
import { nextStepOperate as nextStep } from '../../nextStep';
import { ProFieldV2, ProSMSCode, ProRenderForm } from '@/components/RenderForm/components';
import { sendMessageToLian as sendMessage, checkSMSCode } from '@/components/RenderForm/utils/constants';
import CheckCodePopup from './components/CheckCodePopup.vue';
import { getTenantOrderDetail, mergeInsureFactor } from '@/api/modules/trial';
import { pickProductRiskCodeFromOrder } from './utils';
import { transformFactorToSchema } from '@/components/RenderForm/utils/tools';
import useOrder from '@/hooks/useOrder';
import { PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS, BUTTON_CODE_ENUMS } from './constants';
import { VERIFY_STATUS_MAP, DUAL_STATUS_MAP, DUAL_STATUS_ENUM } from '@/common/constants/verify';
import { CERT_TYPE_ENUM, NOTICE_TYPE_MAP, PAGE_ACTION_TYPE_ENUM, YES_NO_ENUM, SEX_LIMIT_MAP } from '@/common/constants';
import pageJump from '@/utils/pageJump';
import { dualUploadFiles, queryDualStatus } from '@/api/modules/verify';
import { useSessionStorage } from '@/hooks/useStorage';
import { LIAN_STORAGE_KEY, SHARE_CONTENT } from '@/common/constants/lian';
import { shareWeiXin } from '@/utils/lianSDK';
import { MESSAGE_TYPE_ENUM } from './constants.ts';

const sessionStorage = useSessionStorage();
const route = useRoute();
const router = useRouter();

const { orderNo, tenantId } = route.query;

// 是否需要双录
const needBMOS = ref<boolean>(false);
// 双录状态
const BMOSStatus = ref<number>();

const formRef = ref();
const formData = ref({
  holderMobile: '',
  holderVerifyCode: '',
  insuredMobile: '',
  insuredVerifyCode: '',
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

// 代理人未签名完成前，禁止其他操作
const isDisabled = computed(() => {
  return signPartInfo.value.agent.verifyStatus !== YES_NO_ENUM.YES;
});

const isShowInsured = computed(() => {
  const { insuredList } = orderDetail.value || {};
  const { age, relationToHolder } = insuredList[0] || {};
  if (age < 18 || `${relationToHolder}` === CERT_TYPE_ENUM.CERT) {
    return false;
  }
  return true;
});

// 签字、认证是否展示
const isShowItem = computed(() => (type) => signPartInfo.value[type].isSign || signPartInfo.value[type].isVerify);
// 空中签名
const isShareSing = computed(() => (type) => signPartInfo.value[type].isShareSign);

// 分享到微信
const handleShare = (type) => {
  const { holder, insured } = orderDetail.value;
  let userInfo = {
    name: holder.name,
    gender: `${SEX_LIMIT_MAP[holder.gender]}士`,
  };

  if (type === 'insured') {
    userInfo = {
      name: insured?.[0].name,
      gender: `${SEX_LIMIT_MAP[insured?.[0]?.gender]}士`,
    };
  }

  sendMessage({
    messageType: MESSAGE_TYPE_ENUM.HOLDER,
    orderNo,
    tenantId,
  });

  shareWeiXin({
    shareType: 0,
    title: `${SHARE_CONTENT.sign.title}（${NOTICE_TYPE_MAP[type.toLocaleUpperCase()]}）`,
    desc: SHARE_CONTENT.sign.desc.replace('{name}', `${userInfo.name || ''}${userInfo.gender || ''},代理人`),
    url: `${window.location.href}&objectType=${type}&nextPageCode=infoPreview`.replace('/verify', '/phoneVerify'),
    imageUrl:
      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/lian_logo.png?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1697288114&Signature=S87PMeDRxltLovmmHVTeiHoew1c%3D',
  });
};

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
  if (isDisabled.value) {
    return;
  }
  show.value = true;
};

// 去双录
const handleDMOS = () => {
  if (isDisabled.value || BMOSStatus.value === DUAL_STATUS_ENUM.DUAL_SUCCESS) {
    return;
  }

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
      path = PAGE_ROUTE_ENUMS.verifyFace;
    } else {
      path = PAGE_ROUTE_ENUMS.infoPreview;
    }
  } else {
    if (signPartInfo.value[checkType.value].isVerify) {
      path = PAGE_ROUTE_ENUMS.verifyFace;
    } else {
      path = PAGE_ROUTE_ENUMS.infoPreview;
    }
  }

  sessionStorage.set(`${LIAN_STORAGE_KEY}_orderDetail`, orderDetail.value);

  router.push({
    path,
    query: {
      ...route.query,
      objectType: checkType.value,
      isFirst: 1,
    },
  });
};

const initData = async () => {
  let productRiskMap = {};
  queryDualStatus({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      const { doubleRecordFlag, doubleRecordStatus } = data;
      needBMOS.value = doubleRecordFlag === YES_NO_ENUM.YES;
      BMOSStatus.value = doubleRecordStatus;
    }
  });
  await getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(orderDetail.value, data);
      const { agentAuthFlag } = data.extInfo;
      const { mobile } = data.holder;
      const { mobile: insuredMobile } = data.insuredList?.[0] || {};
      Object.assign(formData.value, {
        holderMobile: mobile,
        insuredMobile,
      });

      productRiskMap = pickProductRiskCodeFromOrder(data.insuredList[0].productList);
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

const onNext = async () => {
  const { holder, insuredList, extInfo } = orderDetail.value;
  if (!needBMOS.value) {
    if (extInfo.agentAuthFlag === YES_NO_ENUM.NO) {
      Toast('代理人签名未完成');
      return;
    }
    if (holder.isCert === YES_NO_ENUM.NO) {
      Toast('投保人签名未完成');
      return;
    }
    if (insuredList[0].isCert === YES_NO_ENUM.NO) {
      Toast('被保人签名未完成');
      return;
    }
  } else {
    if (extInfo.agentAuthFlag !== YES_NO_ENUM.YES) {
      Toast('代理人签名未完成');
      return;
    }
  }

  await formRef.value?.validate();

  const currentOrderDetail = Object.assign(orderDetail.value, {
    extInfo: { ...orderDetail.value.extInfo, pageCode: PAGE_CODE_ENUMS.SIGN, buttonCode: BUTTON_CODE_ENUMS.SIGN },
  });
  nextStep(
    currentOrderDetail,
    (data, pageAction) => {
      if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
        pageJump(data.nextPageCode, route.query);
      }
    },
    route,
  );
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
            &.disable {
              color: #3333339c;
            }
          }

          &:after {
            display: none;
          }

          &:last-child {
            width: 240px;
          }
        }
      }
    }
  }
}
</style>
