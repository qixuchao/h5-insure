<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-order-detail">
      <div v-if="isShowOrderRecord" class="card card-head" @click="handleClick">
        <div class="card-item-name">订单进度</div>
        <div class="card-item-icon">
          {{ detail?.orderStepDesc }}
          <ProSvg name="arrow-right"></ProSvg>
        </div>
      </div>
      <div class="card card-list">
        <p class="card-list-title">{{ detail?.productName }}</p>
        <InfoItem label="订单号" :content="detail?.orderNo" line is-copy min-width="other" />
        <InfoItem
          v-for="no in detail?.applicationNoList?.length ? detail?.applicationNoList : ['']"
          :key="no"
          label="投保单号"
          :content="no"
          line
          is-copy
          min-width="other"
        />
        <InfoItem
          label="创建时间"
          :content="dayjs(detail?.gmtCreated).format('YYYY-MM-DD HH:mm:ss')"
          line
          min-width="other"
        />
        <InfoItem
          label="投保时间"
          :content="dayjs(detail?.orderDate).format('YYYY-MM-DD HH:mm:ss')"
          line
          min-width="other"
        />
        <InfoItem label="投保保费" :content="detail?.orderAmount" line min-width="other" />
        <InfoItem label="承保保费" :content="detail?.orderAmount" line min-width="other" />
      </div>
      <div class="card card-list">
        <div class="card-list-head">
          <div class="card-list-title">险种信息</div>
          <div class="card-list-premium">
            首年保费：<span>{{ detail?.orderAmount }}</span>
          </div>
        </div>
        <ProTable
          v-if="detail?.riskList?.length > 0"
          :columns="columns"
          class="table"
          :data-source="detail?.riskList"
        />
      </div>
      <div class="card">
        <PolicyInfo
          v-if="state.policyInfo.schema.length"
          v-model="detail"
          :schema="state.policyInfo.schema"
          is-view
        ></PolicyInfo>
      </div>
      <div class="card">
        <van-collapse v-model="tenantOrderAttachmentList">
          <van-collapse-item title="影像信息" name="1">
            <div class="tenantOrderAttachmentList-title">投保人资料</div>
            <div class="tenantOrderAttachmentList-img">
              <div
                v-for="(item, index) in attachmentList(ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER)"
                :key="index"
                class="attachment-item"
              >
                <img :src="item.uri" alt="" />
              </div>
            </div>
            <div class="tenantOrderAttachmentList-title">被保人资料</div>
            <div class="tenantOrderAttachmentList-img">
              <div
                v-for="(item, index) in attachmentList(ATTACHMENT_OBJECT_TYPE_ENUM.INSURED)"
                :key="index"
                class="attachment-item"
              >
                <img :src="item.uri" alt="" />
              </div>
            </div>
            <div class="tenantOrderAttachmentList-title">受益人资料</div>
            <div class="tenantOrderAttachmentList-img">
              <div
                v-for="(item, index) in attachmentList(ATTACHMENT_OBJECT_TYPE_ENUM.BENEFICIARY)"
                :key="index"
                class="attachment-item"
              >
                <img :src="item.uri" alt="" />
              </div>
            </div>
            <div class="tenantOrderAttachmentList-title">监护人资料</div>
            <div class="tenantOrderAttachmentList-img">
              <div
                v-for="(item, index) in attachmentList(ATTACHMENT_OBJECT_TYPE_ENUM.GUARDIAN)"
                :key="index"
                class="attachment-item"
              >
                <img :src="item.uri" alt="" />
              </div>
            </div>
            <div class="tenantOrderAttachmentList-title">银行卡信息</div>
            <div class="tenantOrderAttachmentList-img">
              <div
                v-for="(item, index) in attachmentList(ATTACHMENT_OBJECT_TYPE_ENUM.INIT_SIGN)"
                :key="index"
                class="attachment-item"
              >
                <img :src="item.uri" alt="" />
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
      <div class="card">
        <InsuranceNotificationInformation title="投保告知信息" :data="state.customerQuestions || []" />
      </div>

      <div class="card">
        <PersonalInfo
          v-if="productFactor"
          ref="personalInfoRef"
          v-model="personalInfo"
          :product-factor="productFactor"
          is-view
        >
        </PersonalInfo>
      </div>
      <PayInfo
        v-if="state.payInfo.schema.length"
        ref="payInfoRef"
        v-model="detail.tenantOrderPayInfoList"
        :schema="state.payInfo.schema"
        is-view
      ></PayInfo>

      <div v-loading="loading" class="footer-button">
        <OperateBtn :detail="detail" @handle-cancel="handleCancel"></OperateBtn>
      </div>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import qs from 'qs';
import { cancelOrder, deleteOrder } from '@/api/modules/order';
import { newOrderDetail } from '@/api';
import { getQuestionAnswerDetail } from '@/api/modules/inform';
import { NextStepRequestData } from '@/api/index.data';
import { ORDER_TOP_STATUS_ENUM, ORDER_STATUS_MAP, ORDER_STATUS_ENUM } from '@/common/constants/order';
import { insureProductDetail, mergeInsureFactor, queryStandardInsurerLink } from '@/api/modules/trial';
import { InsureLinkReq } from '@/api/modules/trial.data';
import {
  PRODUCT_LIST_ENUM,
  PAGE_ROUTE_ENUMS,
  ORDER_STATUS_MAPPING_PAGE,
  ATTACHMENT_OBJECT_TYPE_ENUM,
} from '@/common/constants';
import { TEMPLATE_NAME_ENUM, getTemplateNameById } from '@/common/constants/infoCollection';
import FieldInfo from '../components/fieldInfo.vue';
import InsureInfo from '../components/InsuredPart.vue';
import pageJump from '@/utils/pageJump';
import useTheme from '@/hooks/useTheme';
import { getPayUrl } from '@/api/modules/cashier';
import { sendPay } from '@/views/cashier/core';
import InfoItem from '../components/infoItem.vue';
import InsuranceNotificationInformation from '../components/insuranceNotificationInformation.vue';
import { InsureProductData, ProductPlanInsureVoItem } from '@/api/modules/product.data';
import { PolicyInfo, PayInfo, transformFactorToSchema, isOnlyCert } from '@/components/RenderForm';
import { listProductQuestionnaire, queryListProductMaterial } from '@/api/modules/product';
import { pickProductRiskCodeFromOrder } from '@/views/baseInsurance/templates/lianLong/utils';
import { OBJECT_TYPE_ENUM, QUESTIONNAIRE_TYPE_ENUM } from '@/common/constants/questionnaire';
import PersonalInfo from '../../baseInsurance/templates/components/Trial/components/PersonalInfo/index.vue';
import { QUESTIONNAIRE_TYPE_ENUM as QUESTION_OBJECT_TYPE } from '@/common/constants/notice';
import { getFileType } from '@/views/baseInsurance/utils';
import OperateBtn from '../components/OperateBtn.vue';

const themeVars = useTheme();
const route = useRoute();
const router = useRouter();
const detail = ref();
const activeList = ref<string[]>([]);
const tenantOrderAttachmentList = ref<string[]>([]);
const columns = [
  {
    title: '险种名称',
    dataIndex: 'riskName',
    width: 200,
  },
  {
    title: '保险金额/份数',
    dataIndex: 'regularPremium',
    width: 180,
    render(row: any, index: number) {
      return row.regularPremium / row.copy;
    },
  },
  {
    title: '保障期间',
    dataIndex: 'coveragePeriodDesc',
    width: 180,
  },
  {
    title: '交费期间',
    dataIndex: 'chargePeriodDesc',
    width: 180,
  },
  {
    title: '首期保费',
    dataIndex: 'initialPremium',
    width: 180,
    render(row: any, index: number) {
      return row.initialPremium;
    },
  },
];
const state = reactive({
  customerQuestions: [],
  payInfo: {
    schema: [],
    config: [],
    formData: [],
  },
  policyInfo: {
    schema: [],
    config: [],
    formData: {},
  },
});

const {
  query: { orderNo, agentCode, tenantId },
} = route;

// 是否展示订单轨迹
const isShowOrderRecord = computed(() => detail.value?.orderStatus !== 'cancel');

const handleClick = () => {
  pageJump('orderTrajectory', { orderNo, orderId: detail.value.id, tenantId });
};

const loading = ref(false);
const handleProcess = () => {
  if (detail.value) {
    const {
      id,
      extInfo: { templateId, pageCode, extraInfo },
      agencyId: agencyCode,
      insurerCode: currentInsurerCode,
      orderStatus,
    } = detail.value;
    const productCode = detail.value.insuredList?.[0]?.productList[0]?.productCode;
    const params: InsureLinkReq = {
      insurerCode: currentInsurerCode,
      productCode,
      tenantId: detail.value.tenantId,
      agencyCode: detail.value.agencyId,
      agentCode: detail.value.saleUserId,
      saleChannelId: extraInfo?.saleChannelId,
      extraMap: { ...detail.value?.extInfo?.extraInfo, orderNo: detail.value.orderNo },
    };
    loading.value = true;
    // TODO,跳转到对应的投保流程（订单转投保）
    queryStandardInsurerLink(params).then((res) => {
      console.log('投保链接==', res.data);
      // 获取投保链接
      if (res.code === '10000') {
        // 长期险或年金跳转对应pageCode的页面
        if ([TEMPLATE_NAME_ENUM.LONG, TEMPLATE_NAME_ENUM.NIANJIN].includes(getTemplateNameById(`${templateId}`))) {
          const queryStr = res.data.split('?')[1];
          const queryObj = qs.parse(queryStr);
          router.push({
            path: ORDER_STATUS_MAPPING_PAGE[orderStatus],
            query: {
              ...queryObj,
              extraInfo: queryObj.extraInfo,
              orderNo,
              templateId,
            },
          });
        } else {
          // 否则就是其他险种，走投保流程链接
          window.location.href = res.data;
        }
      }
    });
  }
};
const handlePay = () => {
  if (detail.value) {
    const {
      extInfo: { templateId },
    } = detail.value;
    if ([TEMPLATE_NAME_ENUM.LONG, TEMPLATE_NAME_ENUM.NIANJIN].includes(getTemplateNameById(`${templateId}`))) {
      handleProcess();
    } else {
      getPayUrl(detail.value).then(({ code, data }) => {
        if (code === '10000') {
          sendPay(data as string);
        }
      });
    }
  }
};

const getQuestionInfo = async (params) => {
  let answerList = [];
  const { code: answerCode, data: answerData } = await getQuestionAnswerDetail({ orderNo, tenantId });
  if (answerCode === '10000') {
    answerList = answerData.productQuestionnaireVOList;
  }
  const { code, data } = await listProductQuestionnaire(params);

  if (code === '10000') {
    const { productQuestionnaireVOList: questionList } = data || {};

    // 过滤出风险告知问卷
    const productQuestionnaireVOList = questionList.filter(
      (question) => question.businessType !== QUESTION_OBJECT_TYPE.VISIT,
    );

    state.customerQuestions = productQuestionnaireVOList.map((questionInfo) => {
      const { questionnaireDetailResponseVO, questionnaireId, questionnaireName } = questionInfo || {};
      const { questions, basicInfo } = questionnaireDetailResponseVO || {};
      const { objectType: objType, questionnaireType } = basicInfo || {};

      if (questionnaireType === QUESTIONNAIRE_TYPE_ENUM.TEXT) {
        const { content, textType } = questions?.[0] || {};
        return {
          content,
          contentType: getFileType(`${textType}`, content),
          questionnaireId,
          questionnaireName,
        };
      }
      const currentAnswer = (answerList || []).find((answer) => answer.questionnaireId === questionnaireId);
      return {
        ...questionnaireDetailResponseVO,
        contentType: 'question',
        ...currentAnswer?.questionnaireDetailResponseVO,
        questionnaireId,
        questionnaireName,
      };
    });
  }
};

const productFactor = ref();
const riskMaterialList = ref([]);
const getInsureProductDetail = (params) => {
  queryListProductMaterial(params).then(({ data, code }) => {
    if (code === '10000') {
      riskMaterialList.value = data.riskMaterialList?.[0]?.productMaterialList;
    }
  });

  mergeInsureFactor(params).then(({ data, code }) => {
    if (code === '10000') {
      const { productDetailResList, productFactor: currentProductFactor } = data;
      productFactor.value = currentProductFactor;
      const { payInfo, other } = transformFactorToSchema(currentProductFactor);
      state.payInfo = {
        ...state.payInfo,
        ...payInfo,
      };

      state.policyInfo = {
        ...state.policyInfo,
        ...other,
      };
    }
  });
};

// 获取资料数据
const attachmentList = computed(() => (objectType) => {
  const { tenantOrderAttachmentList: currentAttachmentList } = detail.value;
  if (currentAttachmentList?.length) {
    return currentAttachmentList.filter((attachment) => attachment.objectType === objectType);
  }
  return [];
});

const personalInfo = ref();

const getOrderDetail = (isOther = true) => {
  newOrderDetail({ orderNo, agentCode, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      detail.value = data;
      if (!isOther) {
        return;
      }
      personalInfo.value = data;
      detail.value.tenantOrderPayInfoList = data.tenantOrderPayInfoList || [];
      const productCodeList = Object.keys(detail.value.productCodeList).map((productCode) => ({
        productCode,
        mergeRiskReqList: detail.value.productCodeList[productCode],
      }));
      getInsureProductDetail({ productList: productCodeList });
      getQuestionInfo({ productCodeList: Object.keys(detail.value.productCodeList) });
    }
  });
};

const handleCancel = () => {
  cancelOrder({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      Toast('撤单成功');
      setTimeout(() => getOrderDetail(false), 500);
    }
  });
};

onMounted(() => {
  getOrderDetail();
});
</script>

<style lang="scss" scoped>
.page-order-detail {
  height: 100%;
  background: $zaui-global-bg;
  padding: 30px;
  padding-bottom: 180px;
  overflow-y: auto;
  .insure-info {
    border-radius: 20px;
    margin-top: 30px;
  }
  .card-head {
    display: flex;
    justify-content: space-between;
    padding: 37px 30px;
    margin-top: 30px;
    .card-item-name {
      font-size: 30px;
      font-weight: 500;
      color: #393d46;
      line-height: 42px;
    }
    .card-item-icon {
      font-size: 30px;
      font-weight: 400;
      color: #333333;
      line-height: 42px;
    }
  }
  .card {
    background: #fff;
    border-radius: 20px;
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
    .policy-options {
      font-size: 26px;
      font-weight: 400;
      color: #666666;
      line-height: 37px;
    }
    .policy-options-content {
      margin-left: 156px;
    }
    .tenantOrderAttachmentList-title {
      font-size: 26px;
      font-weight: 400;
      color: #333333;
      line-height: 37px;
      margin-top: 30px;
    }
    .tenantOrderAttachmentList-img {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;

      .attachment-item {
        width: 160px;
        height: 160px;
        margin: 0 30px 30px 0;
        border-radius: 12px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .header {
      display: flex;
      flex: 1;
      align-items: center;
      .product-name {
        font-size: 30px;
        font-weight: 600;
        color: #333333;
        flex: 1;
        width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .company-name {
        flex: 0 0 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        padding: 0 10px;
        background: rgba(13, 110, 254, 0.1);
        border-radius: 8px;
        font-size: 22px;
        color: $zaui-brand;
      }
    }
    .status {
      margin-left: 30px;
      font-size: 26px;
      color: #99a9c0;
      line-height: 106px;
    }
    .detail {
      font-size: 30px;
      font-weight: 600;
      color: #333333;
      flex: 1;
      display: flex;
      align-items: center;
      &:before {
        content: ' ';
        width: 8px;
        height: 28px;
        border-radius: 4px;
        background: $zaui-brand;
        margin-right: 16px;
      }
    }
  }
  .card-list {
    padding: 30px;
    .card-list-head {
      display: flex;
      justify-content: space-between;
    }
    .card-list-title {
      font-size: 30px;
      font-weight: 500;
      color: #393d46;
      line-height: 42px;
    }
    .card-list-premium {
      font-size: 26px;
      font-weight: 400;
      color: #333333;
      line-height: 37px;
      span {
        color: #c41e21;
      }
    }
  }
  .insurance-notification-information {
    margin-bottom: 30px;
  }
  .table {
    margin-top: 30px;
  }
}
</style>
