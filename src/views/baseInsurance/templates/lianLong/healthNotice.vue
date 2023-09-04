<template>
  <div class="long-health-notice-wrap">
    <ProNavigator />
    <Questionnaire :data="currentQuestion" :params="questionParams"> </Questionnaire>
    <div class="footer-btn">
      <VanButton plain type="primary" @click="questionReject">下一步</VanButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Dialog } from 'vant';
import { listProductQuestionnaire, queryListProductMaterial, queryProductMaterial } from '@/api/modules/product';
import ProFilePreview from '@/components/ProFilePreview/index.vue';
import { QUESTIONNAIRE_TYPE_ENUM, OBJECT_TYPE_ENUM } from '@/common/constants/questionnaire';
import { getFileType } from '../../utils';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import { closeWebView } from '@/utils/jsbridgePromise';
import { nextStepOperate as nextStep } from '../../nextStep';
import { getOrderDetail as queryOrderDetail } from '@/api';
import useOrder from '@/hooks/useOrder';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants';
import pageJump from '@/utils/pageJump';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from './constants';
import { jumpToNextPage } from '@/utils';
import Questionnaire from '../../components/Questionnaire/index.vue';
import { getTenantOrderDetail } from '@/api/modules/trial';
import { pickProductRiskCode, pickProductRiskCodeFromOrder } from './utils';
import { NOTICE_OBJECT_ENUM } from '@/common/constants/notice';

const route = useRoute();
const router = useRouter();
const orderDetail = useOrder();

console.log('route', route);

const { productCode, orderNo, templateId, tenantId, preview, questionnaireId: questionId } = route.query;
const currentQuestion = ref<any>({});
const nextQuestionnaireId = ref<number>();
const objectType = ref<number>();
const questionParams = ref({
  orderNo,
  tenantId,
  noticeType: NOTICE_OBJECT_ENUM.INSURED,
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

const questionReject = () => {
  Dialog.confirm({ title: '', message: `${objectType.value || ''}不符合当前产品投保条件，请选择其他产品` })
    .then(() => {
      closeWebView();
    })
    .catch(() => {
      // router.push({
      //   path: route.path,
      //   query: {
      //     ...route.query,
      //     questionnaireId: nextQuestionnaireId.value,
      //   },
      // });
    });
};

const questionResolve = () => {
  if (nextQuestionnaireId.value) {
    router.push({
      path: `${route.path}/${nextQuestionnaireId.value}`,
      query: {
        ...route.query,
        questionnaireId: nextQuestionnaireId.value,
      },
    });
  } else {
    onNext();
  }
};

const getQuestionInfo = async (params) => {
  const { code, data } = await listProductQuestionnaire(params);

  if (code === '10000') {
    const { productQuestionnaireVOList } = data || {};
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
    const { questionnaireDetailResponseVO, questionnaireId, questionnaireName } = questionInfo || {};
    const { questions, basicInfo } = questionnaireDetailResponseVO || {};
    const { objectType: objType, questionnaireType } = basicInfo || {};
    objectType.value = objType;

    if (questionnaireType === QUESTIONNAIRE_TYPE_ENUM.TEXT) {
      const { content, textType } = questions?.[0] || {};
      currentQuestion.value = {
        content,
        contentType: getFileType(`${textType}`, content),
        questionnaireId,
        questionnaireName,
      };
    } else {
      currentQuestion.value = questionnaireDetailResponseVO;
    }
  }
};

const getOrderDetail = async () => {
  const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });
  if (code === '10000') {
    Object.assign(orderDetail.value, data, {
      extInfo: {
        ...data.extInfo,
        templateId,
        pageCode: PAGE_CODE_ENUMS.QUESTION_NOTICE,
        buttonCode: BUTTON_CODE_ENUMS.QUESTION_NOTICE,
      },
    });
    const productCodeList = data.insuredList[0].productList.map((product) => product.productCode);
    questionParams.value.objectId = data.insuredList[0].id;
    getQuestionInfo({ productCodeList });
  }
};

onBeforeMount(() => {
  !preview && getOrderDetail();
});
</script>

<style lang="scss" scope>
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
    }
    .pro-shadow-button {
      display: flex;
      align-items: center;
    }
  }
}
</style>
