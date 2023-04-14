<template>
  <div class="long-health-notice-wrap">
    <ProFilePreview :type="currentQuestion.contentType" :content="currentQuestion.content">
      <!-- <template #title>
        {{ currentQuestion.questionnaireName }}
      </template> -->
      <template #footer-btn>
        <div class="footer-btn">
          <VanButton @click="questionReject">部分为是</VanButton>
          <ProShadowButton :shadow="false" @click="questionResolve">
            <slot>以上皆否</slot>
          </ProShadowButton>
        </div>
      </template>
    </ProFilePreview>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Dialog } from 'vant';
import { queryProductMaterial } from '@/api/modules/product';
import ProFilePreview from '@/components/ProFilePreview/index.vue';
import { QUESTIONNAIRE_TYPE_ENUM, OBJECT_TYPE_ENUM } from '@/common/constants/questionnaire';
import { getFileType } from '../../utils';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import { closeWebView } from '@/utils/jsbridgePromise';

const route = useRoute();
const router = useRouter();

const { productCode, orderNo, questionnaireId: questionId } = route.query;
const currentQuestion = ref<any>({});
const nextQuestionnaireId = ref<number>();
const objectType = ref<number>();

const questionReject = () => {
  Dialog.confirm({ title: '', message: `${objectType.value}不符合当前产品投保条件，请选择其他产品` })
    .then(() => {
      closeWebView();
    })
    .catch(() => {
      router.push({
        path: route.path,
        query: {
          ...route.query,
          questionnaireId: nextQuestionnaireId.value,
        },
      });
    });
};

const questionResolve = () => {
  if (nextQuestionnaireId.value) {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        questionnaireId: nextQuestionnaireId.value,
      },
    });
  }
};

const getQuestionInfo = async () => {
  const { code, data } = await queryProductMaterial({ productCode });

  if (code === '10000') {
    let questionInfo = data.productQuestionnaireVOList[0];
    if (questionId) {
      const questionIndex = data.productQuestionnaireVOList.findIndex(
        (questionnaire) => `${questionnaire.questionnaireId}` === questionId,
      );
      if (data.productQuestionnaireVOList[questionIndex]) {
        questionInfo = data.productQuestionnaireVOList[questionIndex];
      }
      if (data.productQuestionnaireVOList[questionIndex + 1]) {
        nextQuestionnaireId.value = data.productQuestionnaireVOList[questionIndex + 1].questionnaireId;
      }
    }
    const { questionnaireDetailResponseVO, questionnaireId, questionnaireName } = questionInfo;
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
      currentQuestion.value = {
        content: questions,
        contentType: 'question',
        questionnaireId,
        questionnaireName,
      };
    }
  }
};

onBeforeMount(() => {
  getQuestionInfo();
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
    .van-button,
    .pro-shadow-button {
      width: 300px;
    }
    .pro-shadow-button {
      display: flex;
      align-items: center;
    }
  }
}
</style>
