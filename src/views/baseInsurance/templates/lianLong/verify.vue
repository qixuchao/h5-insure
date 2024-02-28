<template>
  <div class="page-verify-wrap">
    <ProNavigator />
    <van-pull-refresh v-model="loading" @refresh="initData">
      <div v-if="BMOSLoading" class="sign-list">
        <van-cell v-if="isShowItem('agent')" title="销售人员签名" :required="isRequired('agent')">
          <template #value>
            <div class="inner-cell">
              <van-cell
                is-link
                :value="VERIFY_STATUS_MAP[signPartInfo.agent.verifyStatus]"
                @click="checkMobile('agent', signPartInfo.agent.verifyStatus)"
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
                  value="分享签名"
                  @click="!isDisabled && handleShare('holder')"
                ></van-cell>
                <van-cell
                  is-link
                  :value="VERIFY_STATUS_MAP[signPartInfo.holder.verifyStatus]"
                  :value-class="`${isDisabled || signPartInfo.holder.shareFlag ? 'disable' : ''}`"
                  @click="checkMobile('holder', signPartInfo.holder.verifyStatus, signPartInfo.holder.shareFlag)"
                ></van-cell>
              </div>
            </template>
          </van-cell>
          <van-cell
            v-if="isShowItem('insured') && isShowInsured"
            title="被保险人签名"
            :required="isRequired('insured')"
          >
            <template #value>
              <div class="inner-cell">
                <van-cell
                  v-if="isShareSing('insured')"
                  :value-class="`${isDisabled ? 'disable' : ''}`"
                  is-link
                  value="分享签名"
                  @click="!isDisabled && handleShare('insured')"
                ></van-cell>
                <van-cell
                  is-link
                  :value-class="`${isDisabled || signPartInfo.insured.shareFlag ? 'disable' : ''}`"
                  :value="VERIFY_STATUS_MAP[signPartInfo.insured.verifyStatus]"
                  @click="checkMobile('insured', signPartInfo.insured.verifyStatus, signPartInfo.insured.shareFlag)"
                ></van-cell>
              </div>
            </template>
          </van-cell>
        </template>
        <ProRenderForm v-else ref="formRef" :model="formData">
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
              label="被保险人手机号"
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
              :rules="[{ required: true, message: '请输入验证码' }]"
            ></ProSMSCode>
          </template>
        </ProRenderForm>
        <van-cell v-if="needBMOS" title="保单双录" required>
          <template #value>
            <div class="inner-cell">
              <van-cell
                is-link
                :value-class="{ disable: isDisabled, errorColor: isError }"
                :value="DUAL_STATUS_MAP[BMOSStatus]"
                @click="handleDMOS"
              ></van-cell>
            </div>
          </template>
        </van-cell>
      </div>
    </van-pull-refresh>

    <div class="footer-button">
      <van-button v-if="isShowBackPage" type="primary" plain @click="() => toggleStatus(true)">返回修改</van-button>
      <van-button type="primary" :disabled="nextDisable" @click="onNext">下一步</van-button>
    </div>
    <CheckCodePopup
      v-if="show"
      :type="checkType"
      :show="show"
      :data="orderDetail"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></CheckCodePopup>
    <van-dialog
      v-if="isShow"
      v-model:show="isShow"
      show-cancel-button
      confirm-button-text="确定"
      :confirm-button-disabled="!checkedPage"
      cancel-button-text="放弃投保"
      close-on-click-overlay
      title="请选择需要修改的页面"
      @confirm="handleBack"
      @cancel="handleGiveUp"
    >
      <div class="dialog-content">
        <van-radio-group v-model="checkedPage">
          <van-radio :name="PAGE_ROUTE_ENUMS.premiumTrial">保费试算页</van-radio>
          <van-radio :name="PAGE_ROUTE_ENUMS.questionNotice">健康告知页</van-radio>
          <van-radio :name="PAGE_ROUTE_ENUMS.infoCollection">信息采集页</van-radio>
        </van-radio-group>
      </div>
    </van-dialog>
  </div>
  <MessagePopup v-model="visible" @close="toggleVisible(false)">
    <div class="verify-content-inner">
      <img class="ios-qr-code" :src="iosDownUrl" alt="QR Code" />
      <img class="android-qr-code" :src="androidDownUrl" alt="QR Code" />
      <img :src="verifyBgImg" alt="" class="header-img" />
    </div>
  </MessagePopup>
</template>

<script setup name="verify" lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import { useToggle } from '@vant/use';
import { nextStepOperate as nextStep } from '../../nextStep';
import { ProFieldV2, ProSMSCode, ProRenderForm } from '@/components/RenderForm/components';
import { checkSMSCode, sendSMSCode } from '@/components/RenderForm/utils/constants';
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
import { useSessionStorage, localStore } from '@/hooks/useStorage';
import { LIAN_STORAGE_KEY, SHARE_CONTENT } from '@/common/constants/lian';
import SDK, { shareWeiXin, pullUpApp, checkAppIsInstalled, getDeviceInfo } from '@/utils/lianSDK';
import { MESSAGE_TYPE_ENUM } from './constants.ts';
import { rollbackEditOrder, sendMessageToLian as sendMessage } from '@/api';
import { cancelOrder } from '@/api/modules/order';
import MessagePopup from './components/MessagePopup.vue';
import verifyBgImg from '@/assets/images/baseInsurance/verify-bg.png';
import { addMetaForShare } from '@/utils/dom';

const sessionStorage = useSessionStorage();
const route = useRoute();
const router = useRouter();
const [isShow, toggleStatus] = useToggle(false);

const { orderNo, tenantId } = route.query;
const VanDialog = Dialog.Component;

const [visible, toggleVisible] = useToggle(true);
// 是否需要双录
const needBMOS = ref<boolean>(false);
// 双录状态
const BMOSStatus = ref<number>();
const loading = ref<boolean>(false);
const BMOSLoading = ref<boolean>(false);
const nextDisable = ref<boolean>(false);

// 下载二维码
const iosDownUrl = ref('');
const androidDownUrl = ref('');

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
const checkedPage = ref();
const schemaUrl = ref<string>(''); // 唤起双录app的链接
const isShowBackPage = computed<boolean>(() => {
  const { showReturnButton } = orderDetail.value;
  return showReturnButton === YES_NO_ENUM.YES;
});
const signPartInfo = ref({
  holder: {
    fileList: [], // 签名资料
    personalInfo: {}, // 相关人的信息
    isSign: false, // 是否需要签名
    isVerify: false, // 是否需要人脸识别
    isShareSign: false, // 是否需要分享签名
    signData: '', // 签名字符串
    verifyStatus: 2, // 认证状态
    shareFlag: 2, // 是否分享签名完成
  }, // 投保人
  insured: {
    fileList: [],
    personalInfo: [],
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: {},
    verifyStatus: 2,
    shareFlag: 2, // 是否分享签名完成
  }, // 被保险人
  agent: {
    fileList: [],
    personalInfo: {},
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: '',
    verifyStatus: 2,
  }, // 销售人员
});

const checkType = ref<'agent' | 'holder' | 'insured'>('agent');
// 签名、认证是否必填
const isRequired = computed(
  () => (code) => requiredType.value.sign.includes(code) || requiredType.value.verify.includes(code),
);

// 销售人员未签名完成前，禁止其他操作
const isDisabled = computed(() => {
  return signPartInfo.value.agent.verifyStatus !== YES_NO_ENUM.YES;
});

const isError = ref(false);

const isShowInsured = computed(() => {
  const { insuredList } = orderDetail.value || {};
  const { age, relationToHolder } = insuredList[0] || {};
  if (age < 18 || `${relationToHolder}` === CERT_TYPE_ENUM.CERT) {
    return false;
  }
  return true;
});

// 签名、认证是否展示
const isShowItem = computed(() => (type) => signPartInfo.value[type].isSign || signPartInfo.value[type].isVerify);
// 空中签名
const isShareSing = computed(() => (type) => signPartInfo.value[type].isShareSign);

// 分享到微信
const handleShare = (type) => {
  const { holder, insuredList } = orderDetail.value;
  let userInfo = {
    name: holder.name,
    gender: `${SEX_LIMIT_MAP[holder.gender]}`,
  };

  if (type === 'insured') {
    userInfo = {
      name: insuredList?.[0].name,
      gender: `${SEX_LIMIT_MAP[insuredList?.[0]?.gender]}`,
    };
  }

  sendMessage({
    messageType: MESSAGE_TYPE_ENUM.HOLDER,
    orderNo,
    tenantId,
  });

  const shareParams = {
    shareType: 0,
    title: `${NOTICE_TYPE_MAP[type.toLocaleUpperCase()]}${SHARE_CONTENT.sign.title}`,
    desc: SHARE_CONTENT.sign.desc.replace('{name}', `${userInfo.name || ''}${userInfo.gender || ''}`),
    url: `${window.location.href}&objectType=${type}&nextPageCode=infoPreview`.replace('/verify', '/phoneVerify'),
    imageUrl:
      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/lian_logo.png?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1697288114&Signature=S87PMeDRxltLovmmHVTeiHoew1c%3D',
  };
  shareWeiXin(shareParams);
};

// 非双录场景下验证投被保险人、销售人员手机号
const checkMobile = (type: 'agent' | 'holder' | 'insured', isSign, isShared?) => {
  checkType.value = type;

  const handleSign = () => {
    if (type === 'agent') {
      router.push({
        path: PAGE_ROUTE_ENUMS.agentSign,
        query: route.query,
      });
      return;
    }
    if (isDisabled.value || isShared) {
      return;
    }
    show.value = true;
  };

  if (`${isSign}` === `${YES_NO_ENUM.YES}` && !isShared) {
    Dialog.confirm({
      message: '本次签名已完成，您是否需要重新签名?',
      confirmButtonText: '是',
      cancelButtonText: '否',
    }).then(() => {
      handleSign();
    });
    return;
  }
  handleSign();
};

// 去双录
const handleDMOS = () => {
  if (isDisabled.value || [DUAL_STATUS_ENUM.DUAL_FINISH].includes(BMOSStatus.value)) {
    return;
  }
  formRef.value?.validate().then(() => {
    const toast = Toast.loading({
      message: '加载中...',
      duration: 0,
    });
    dualUploadFiles(orderDetail.value)
      .then(({ code, data }) => {
        if (code === '10000') {
          if (data) {
            if (schemaUrl.value) {
              const packageName = schemaUrl.value.match(/(.*)\.app:\/\//)?.[1];
              checkAppIsInstalled({ packageName, scheme: schemaUrl.value })
                .then((info) => {
                  if (info.isInstall === `${YES_NO_ENUM.YES}`) {
                    isError.value = false;
                    pullUpApp(schemaUrl.value);
                  } else {
                    isError.value = true;
                    toggleVisible(true);
                  }
                })
                .finally(() => {
                  toast.clear();
                });
            }
          }
        } else {
          toast.clear();
        }
      })
      .catch(() => {
        toast.clear();
      });
  });
};

// 放弃投保,跳转至产品列表
const handleGiveUp = () => {
  cancelOrder({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      delete route.query.orderNo;
      router.push({
        path: PAGE_ROUTE_ENUMS.productList,
        query: route.query,
      });
    }
  });
};

// 撤单
const canceledOrder = (cb) => {
  rollbackEditOrder({
    orderNo,
    tenantId,
  }).then(({ code: c }) => {
    if (c === '10000') {
      cb?.();
    }
  });
};

const handleBack = () => {
  canceledOrder(() => {
    toggleStatus(false);
    delete route.query.questionnaireId;
    router.push({
      path: checkedPage.value,
      query: {
        ...route.query,
        canBack: checkedPage.value === PAGE_ROUTE_ENUMS.infoCollection ? 1 : 2,
      },
    });
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
  const deviceInfo = localStore.get(`${LIAN_STORAGE_KEY}_deviceInfo`);

  await getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(orderDetail.value, data);
      const { agentAuthFlag } = data.extInfo;
      const { mobile, isCert, shareFlag } = data.holder;
      const { mobile: insuredMobile, isCert: insuredCert, shareFlag: insuredShareFlag } = data.insuredList?.[0] || {};
      Object.assign(formData.value, {
        holderMobile: mobile,
        insuredMobile,
      });

      productRiskMap = pickProductRiskCodeFromOrder(data.insuredList[0].productList);
      signPartInfo.value.agent.verifyStatus = agentAuthFlag;
      Object.assign(signPartInfo.value.holder, { verifyStatus: isCert, shareFlag: shareFlag === YES_NO_ENUM.YES });
      Object.assign(signPartInfo.value.insured, {
        verifyStatus: insuredCert,
        shareFlag: insuredShareFlag === YES_NO_ENUM.YES,
      });
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
            // 销售人员签名
            if (column.code === '1') {
              signPartInfo.value.agent.isSign = true;
              // 投保人签名
            } else if (column.code === '2') {
              signPartInfo.value.holder.isSign = true;
              // 被保险人签名
            } else if (column.code === '3') {
              signPartInfo.value.insured.isSign = true;
              // 投保人空中签名
            } else if (column.code === '4') {
              signPartInfo.value.holder.isShareSign = true;
              // 被保险人空中签名
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

  await queryDualStatus({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      const { doubleRecordFlag, doubleRecordStatus } = data;
      needBMOS.value = doubleRecordFlag === YES_NO_ENUM.YES;
      BMOSStatus.value = doubleRecordStatus;
      BMOSLoading.value = true;
      // app下载 信息
      iosDownUrl.value = data?.iosDownUrl;
      androidDownUrl.value = data?.andDownUrl;

      if (deviceInfo) {
        schemaUrl.value = data.andUrl || '';
        if (deviceInfo.platform === 'iOS') {
          schemaUrl.value = data.iosUrl || '';
        }
      }
    }
  });
  loading.value = false;
};

const onNext = async () => {
  const { holder, insuredList, extInfo } = orderDetail.value;
  if (!needBMOS.value) {
    if (extInfo.agentAuthFlag === YES_NO_ENUM.NO) {
      Toast('销售人员签名未完成');
      return;
    }
    if (holder.isCert === YES_NO_ENUM.NO) {
      Toast('投保人签名未完成');
      return;
    }
    if (insuredList[0].isCert === YES_NO_ENUM.NO) {
      Toast('被保险人签名未完成');
      return;
    }
  } else {
    if (extInfo.agentAuthFlag !== YES_NO_ENUM.YES) {
      Toast('销售人员签名未完成');
      return;
    }
    await formRef.value?.validate();

    if (DUAL_STATUS_ENUM.DUAL_FINISH !== BMOSStatus.value) {
      Toast('请先完成双录');
      return;
    }
  }

  nextDisable.value = true;

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
  ).finally(() => {
    nextDisable.value = false;
  });
};

onBeforeMount(() => {
  initData();
});

const iseeBizNo = ref();
onMounted(() => {
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss">
.page-verify-wrap {
  .van-pull-refresh__track {
    height: 100vh;
  }
  .sign-list {
    height: 100%;
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
            &.errorColor {
              color: var(--van-danger-color);
            }
          }

          &:after {
            display: none;
          }

          &:last-child {
            width: 280px;
          }
        }
      }
    }
  }
  .dialog-content {
    height: 234px;
    padding: 50px 50px 0 50px;
    .van-radio-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .van-radio {
        margin-bottom: 50px;
      }
    }
  }

  .van-dialog {
    .van-button {
      border-radius: unset;
    }
  }
}
.verify-content-inner {
  position: relative;
  .header-img {
    width: 642px;
    height: 740px;
  }
  .ios-qr-code,
  .android-qr-code {
    position: absolute;
    top: 250px;
    left: 52px;
    width: 240px;
    height: 240px;
    z-index: 100;
  }
  .android-qr-code {
    left: 352px;
  }
}
</style>
