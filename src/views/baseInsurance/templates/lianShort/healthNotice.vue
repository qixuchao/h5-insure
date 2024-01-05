<template>
  <div class="long-health-notice-wrap">
    <ProFilePreview
      v-if="currentQuestion"
      ref="previewRef"
      :type="currentQuestion.contentType"
      :content="currentQuestion"
      :params="questionParams"
      :is-view="isShared"
      :mark-requested="false"
      :success-callback="confirmAnswer"
    >
      <!-- <template #title>
        {{ currentQuestion.questionnaireName }}
      </template> -->
    </ProFilePreview>
    <div
      v-if="currentQuestion.contentType === 'question' && currentQuestion.questionnaireId"
      class="footer-btn footer-button"
    >
      <van-button v-if="isShowAsync" round type="primary" plain @click="asyncInsured">同被保人</van-button>
      <van-button round type="primary" block :disabled="isShared && !faceVerified" @click="submitQuestion">
        下一步
      </van-button>
    </div>
    <div v-else class="footer-btn">
      <van-button round type="primary" block :disabled="isShared && !faceVerified" @click="confirmAnswer">
        下一步
      </van-button>
    </div>
    <ProShare ref="shareRef"></ProShare>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import qs from 'qs';
import { listProductQuestionnaire } from '@/api/modules/product';
import { getQuestionAnswerDetail } from '@/api/modules/inform';
import ProFilePreview from '@/components/ProFilePreview/index.vue';
import { OBJECT_TYPE_ENUM, QUESTIONNAIRE_TYPE_ENUM } from '@/common/constants/questionnaire';
import { getFileType } from '../../utils';
import { closeWebView } from '@/utils/jsbridgePromise';
import { nextStepOperate as nextStep } from '../../nextStep';
import useOrder from '@/hooks/useOrder';
import { PAGE_ACTION_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import pageJump from '@/utils/pageJump';
import { jumpToNextPage, setPageTitle } from '@/utils';
import { getTenantOrderDetail } from '@/api/modules/trial';
import {
  NOTICE_OBJECT_ENUM,
  QUESTIONNAIRE_TYPE_ENUM as QUESTION_OBJECT_TYPE,
  NOTICE_OBJECT_MAP,
} from '@/common/constants/notice';
import { NOTICE_CONTENT } from '../lianLong/data.ts';
import { PAGE_ROUTE_ENUMS } from './constants.ts';
import { EVENT_BUTTON_CODE, LIAN_STORAGE_KEY, RISK_PERIOD_TYPE_ENUM, SHARE_IMAGE_LINK } from '@/common/constants/lian';
import useThread from '@/hooks/useThread';

const route = useRoute();
const router = useRouter();
const orderDetail = useOrder({});

const { orderNo, tenantId, preview, agentCode, questionnaireId: questionId } = route.query;
const currentQuestion = ref<any>({}); // 当前问卷内容
const nextQuestionnaireId = ref<number>(); // 下个问卷id
const objectType = ref<number>(); // 问卷关联对象
const questionnaireId = ref<number>(); // 问卷id
const answerList = ref([]); // 问卷答案
const questionParams = ref({
  orderNo,
  tenantId,
  noticeType: objectType,
});

const shareConfig = ref();
const shareRef = ref();
const isShared = ref(false);
const thread = ref();
const faceVerified = ref(false);
const previewRef = ref();

const onNext = () => {
  if (preview) {
    router.push({
      path: PAGE_ROUTE_ENUMS.infoPreview,
      query: route.query,
    });
    return;
  }

  orderDetail.value.extInfo.buttonCode = EVENT_BUTTON_CODE.short.saveNoticeNextPage;
  orderDetail.value.extInfo.pageCode = 'healthNotice';
  nextStep(orderDetail.value, (data, pageAction, message) => {
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
      router.push({
        path: PAGE_ROUTE_ENUMS.holderInfoPreview,
        query: route.query,
      });
    } else if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_ALERT && data.alertType === 'faceAuth') {
      Dialog.confirm({
        message,
        confirmButtonText: '去分享',
        cancelButtonText: '被保人确认',
      })
        .then(() => {
          const shareLinkParams = {
            ...route.query,
            isShare: 1,
            orderNo,
            agentCode,
            objectType: 'insured',
            origin: 'share',
          };

          shareConfig.value = {
            title: '标题',
            desc: '描述',
            imageUrl: SHARE_IMAGE_LINK,
            url: `${window.location.origin}${PAGE_ROUTE_ENUMS.faceVerify}?${qs.stringify(shareLinkParams)}`,
            link: `${window.location.origin}${PAGE_ROUTE_ENUMS.faceVerify}?${qs.stringify(shareLinkParams)}`,
          };
          shareRef.value.handleShare(shareConfig.value);
          isShared.value = true;
          thread.value.run();
        })
        .catch(() => {
          router.push({
            path: PAGE_ROUTE_ENUMS.faceVerify,
            query: {
              ...route.query,
              objectType: 'insured',
              origin: 'confirm',
            },
          });
        });
    }
  });
};

const questionResolve = () => {
  if (nextQuestionnaireId.value) {
    router.push({
      path: `${PAGE_ROUTE_ENUMS.healthNotice}/${nextQuestionnaireId.value}`,
      query: {
        ...route.query,
        questionnaireId: nextQuestionnaireId.value,
      },
    });
  } else {
    onNext();
    // Dialog.confirm({
    //   title: '告知提醒',
    //   message: NOTICE_CONTENT.join('\n'),
    //   confirmButtonText: '确定',
    //   messageAlign: 'left',
    //   className: 'notice-dialog',
    // }).then(() => {
    //   onNext();
    // });
  }
};

const confirmAnswer = () => {
  if (objectType.value !== NOTICE_OBJECT_ENUM.INSURED) {
    questionResolve();
    return;
  }
  orderDetail.value.extInfo.buttonCode = EVENT_BUTTON_CODE.short.saveNotice;
  orderDetail.value.extInfo.pageCode = 'healthNotice';
  nextStep(orderDetail.value, (data, pageAction, message) => {
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_ALERT) {
      Dialog.alert({
        message,
        confirmButtonText: '确定',
      });
    } else if (pageAction === PAGE_ACTION_TYPE_ENUM.CONTINUE) {
      questionResolve();
    }
  });
};
// 问卷告知列表
const healthQuestionList = ref([]);
// 是否展示同步被保人问卷
const isShowAsync = computed(() => {
  if (healthQuestionList.value.length && objectType.value === OBJECT_TYPE_ENUM.HOLDER) {
    return !!healthQuestionList.value.find((question) => `${question.id}` === questionId);
  }
  return false;
});

// 将被保人问卷答案同步至投保人问卷
const asyncInsured = () => {
  const currentAnswer = answerList.value.find((answer) => answer.id === questionnaireId.value);
  Object.assign(currentQuestion.value, currentAnswer?.questionnaireDetailResponseVO);
};

// 获取问卷资料信息
const getQuestionInfo = async (params, planCode) => {
  const { code: answerCode, data: answerData } = await getQuestionAnswerDetail({ orderNo, tenantId });
  if (answerCode === '10000') {
    answerList.value = answerData.productQuestionnaireVOList;
  }
  const { code, data } = await listProductQuestionnaire(params);

  if (code === '10000') {
    const { productQuestionnaireVOList: questionList } = data || {};

    // 过滤出健康告知问卷
    const productQuestionnaireVOList = questionList.filter(
      (question) =>
        (question.planCode === '-1' || !planCode || question.planCode === planCode) &&
        question.businessType === QUESTION_OBJECT_TYPE.NEW_CONTRACT &&
        question.noticeObject !== -1,
    );

    if (!productQuestionnaireVOList?.length) {
      Toast('未匹配到健康告知问卷');
    }

    healthQuestionList.value = productQuestionnaireVOList;
    let questionInfo = productQuestionnaireVOList[0] || {};
    if (productQuestionnaireVOList?.length > 1) {
      if (questionId) {
        const questionIndex = productQuestionnaireVOList.findIndex(
          (questionnaire) => `${questionnaire.id}` === questionId,
        );
        if (productQuestionnaireVOList[questionIndex]) {
          questionInfo = productQuestionnaireVOList[questionIndex];
        }
        if (productQuestionnaireVOList[questionIndex + 1]) {
          nextQuestionnaireId.value = productQuestionnaireVOList[questionIndex + 1].id;
        }
      } else {
        nextQuestionnaireId.value = productQuestionnaireVOList[1]?.id;
      }
    }
    const {
      questionnaireDetailResponseVO,
      questionnaireId: currentQuestionnaireId,
      questionnaireName,
      noticeObject,
    } = questionInfo || {};
    const { questions, basicInfo } = questionnaireDetailResponseVO || {};
    const { questionnaireType } = basicInfo || {};
    objectType.value = noticeObject;
    setPageTitle(`${NOTICE_OBJECT_MAP[noticeObject]}健康告知`);
    questionnaireId.value = currentQuestionnaireId;

    if (questionnaireType === QUESTIONNAIRE_TYPE_ENUM.TEXT) {
      const { content, textType } = questions?.[0] || {};
      currentQuestion.value = {
        content,
        contentType: getFileType(`${textType}`, content),
        questionnaireId: currentQuestionnaireId,
        questionnaireName,
      };
    } else {
      const currentAnswer = (answerList.value || []).find(
        (answer) => answer.questionnaireId === questionnaireId.value && answer.noticeObject === objectType.value,
      );
      currentQuestion.value = {
        ...questionnaireDetailResponseVO,
        questionnaireId: currentQuestionnaireId,
        contentType: 'question',
        ...currentAnswer?.questionnaireDetailResponseVO,
      };
    }
  }
};

const getOrderDetail = async (loading = true) => {
  const { code, data } = await getTenantOrderDetail({ orderNo, tenantId }, { loading });
  if (code === '10000') {
    faceVerified.value = data.insuredList?.[0]?.faceAuthFlag === YES_NO_ENUM.YES;
    if (faceVerified.value) {
      if (thread.value.isStart) {
        Toast('被保人认证完成');
      }
      thread.value.stop();
    }
    Object.assign(orderDetail.value, data, {
      extInfo: {
        ...data.extInfo,
        pageCode: 'healthNotice',
        buttonCode: EVENT_BUTTON_CODE.short.saveNotice,
      },
    });
    const planCode = data.insuredList[0]?.planCode;
    const productCodeList = data.insuredList[0].productList.map((product) => product.productCode);
    questionParams.value.objectId = data.insuredList[0].id;
    getQuestionInfo({ productCodeList }, planCode);
  }
};

// 轮询查询被保人人脸识别是否完成
thread.value = useThread({
  start: () => {
    getOrderDetail(false);
    faceVerified.value = false;
  },
  stop: () => {
    faceVerified.value = true;
  },
  time: 10000,
  number: 0,
});

const submitQuestion = () => {
  previewRef.value?.submitQuestion();
};

onBeforeMount(() => {
  !preview && getOrderDetail();
});

const iseeBizNo = ref();
onMounted(() => {
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});

onBeforeUnmount(() => {
  thread.value.stop();
});
</script>

<style lang="scss">
.notice-dialog {
  .van-dialog__message {
    text-align: left;
    color: inheritAttrs;
    font-weight: unset;
    font-size: 28px;
  }
}
.long-health-notice-wrap {
  .com-file-preview {
    height: calc(100% - 150px);
  }
  .footer-btn {
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    position: fixed;
    z-index: 1;
    width: 100%;
    bottom: 0;
    background: #fff;
    .van-button,
    .pro-shadow-button {
      width: 335px;
      &.van-button--block {
        width: 100%;
      }
    }
    .pro-shadow-button {
      display: flex;
      align-items: center;
    }
  }
}
</style>
