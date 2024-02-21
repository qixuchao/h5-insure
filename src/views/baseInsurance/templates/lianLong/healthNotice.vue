<template>
  <div class="long-health-notice-wrap">
    <ProNavigator />
    <ProFilePreview
      v-if="currentQuestion"
      ref="previewRef"
      :type="currentQuestion.contentType"
      :content="currentQuestion"
      :params="questionParams"
      :success-callback="questionResolve"
    >
      <!-- <template #title>
        {{ currentQuestion.questionnaireName }}
      </template> -->
    </ProFilePreview>
    <div v-if="currentQuestion.contentType === 'question' && currentQuestion.questionnaireId">
      <div class="footer-button">
        <van-button v-if="isShowAsync" round type="primary" plain @click="asyncInsured">同被保人</van-button>
        <van-button round type="primary" block @click="submitQuestion"> 下一步 </van-button>
      </div>
    </div>
    <div v-else class="footer-btn">
      <div class="footer-btn">
        <van-button round type="primary" block @click="questionResolve"> 下一步 </van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import { listProductQuestionnaire } from '@/api/modules/product';
import { getQuestionAnswerDetail } from '@/api/modules/inform';
import ProFilePreview from '@/components/ProFilePreview/index.vue';
import { OBJECT_TYPE_ENUM, QUESTIONNAIRE_TYPE_ENUM } from '@/common/constants/questionnaire';
import { getFileType } from '../../utils';
import { closeWebView } from '@/utils/jsbridgePromise';
import { nextStepOperate as nextStep } from '../../nextStep';
import useOrder from '@/hooks/useOrder';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants';
import pageJump from '@/utils/pageJump';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS } from './constants';
import { jumpToNextPage, setPageTitle } from '@/utils';
import { getTenantOrderDetail } from '@/api/modules/trial';
import {
  NOTICE_OBJECT_ENUM,
  NOTICE_OBJECT_MAP,
  QUESTIONNAIRE_TYPE_ENUM as QUESTION_OBJECT_TYPE,
} from '@/common/constants/notice';
import { NOTICE_CONTENT } from './data.ts';

const route = useRoute();
const router = useRouter();
const orderDetail = useOrder();

const { orderNo, tenantId, preview, questionnaireId: questionId } = route.query;
const currentQuestion = ref<any>({}); // 当前问卷内容
const nextQuestionnaireId = ref<number>(); // 下个问卷id
const objectType = ref<number>(); // 问卷关联对象
const questionnaireId = ref<number>(); // 问卷id
const answerList = ref([]); // 问卷答案
const questionParams = computed(() => {
  const { holder, insuredList } = orderDetail.value;
  let objectId = insuredList?.[0]?.id;

  if (objectType.value === NOTICE_OBJECT_ENUM.HOlDER) {
    objectId = holder.id;
  }
  return { orderNo, tenantId, noticeType: objectType.value, objectId };
});

const onNext = () => {
  if (preview) {
    jumpToNextPage(PAGE_CODE_ENUMS.QUESTION_NOTICE, route.query);
    return;
  }
  nextStep(orderDetail.value, (data, pageAction) => {
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
      pageJump(data.nextPageCode, route.query);
    }
  });
};
const previewRef = ref();
const submitQuestion = () => {
  previewRef.value?.submitQuestion();
};

const questionResolve = () => {
  if (nextQuestionnaireId.value) {
    router.push({
      path: `${PAGE_ROUTE_ENUMS.questionNotice}/${nextQuestionnaireId.value}`,
      query: {
        ...route.query,
        questionnaireId: nextQuestionnaireId.value,
      },
    });
  } else {
    Dialog.confirm({
      title: '告知提醒',
      message: NOTICE_CONTENT.join('\n'),
      confirmButtonText: '确定',
      messageAlign: 'left',
      className: 'notice-dialog',
    }).then(() => {
      onNext();
    });
  }
};
// 问卷告知列表
const healthQuestionList = ref([]);
// 投保人同步被保人问卷
const isShowAsync = computed(() => {
  if (healthQuestionList.value.length && objectType.value === OBJECT_TYPE_ENUM.HOLDER) {
    return !!healthQuestionList.value.find((question) => `${question.id}` === questionId);
  }
  return false;
});
const asyncInsured = () => {
  const currentAnswer = answerList.value.find((answer) => answer.id === questionnaireId.value);
  Object.assign(currentQuestion.value, currentAnswer?.questionnaireDetailResponseVO);
};

// 获取问卷资料信息
const getQuestionInfo = async (params) => {
  const { code: answerCode, data: answerData } = await getQuestionAnswerDetail({ orderNo, tenantId });
  if (answerCode === '10000') {
    answerList.value = answerData.productQuestionnaireVOList;
  }
  const { code, data } = await listProductQuestionnaire(params);

  if (code === '10000') {
    const { productQuestionnaireVOList: questionList } = data || {};

    // 过滤出健康告知问卷
    const productQuestionnaireVOList = questionList.filter(
      (question) => question.businessType === QUESTION_OBJECT_TYPE.NEW_CONTRACT && question.noticeObject !== -1,
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

const getOrderDetail = async () => {
  const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });
  if (code === '10000') {
    Object.assign(orderDetail.value, data, {
      extInfo: {
        ...data.extInfo,
        pageCode: PAGE_CODE_ENUMS.QUESTION_NOTICE,
        buttonCode: BUTTON_CODE_ENUMS.QUESTION_NOTICE,
      },
    });
    const productCodeList = data.insuredList[0].productList.map((product) => product.productCode);
    getQuestionInfo({ productCodeList });
  }
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
