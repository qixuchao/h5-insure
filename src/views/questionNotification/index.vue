<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * index.vue
-->
<template>
  <ProPageWrap class="page-question-notice">
    <ProCard title="投保人">
      <van-cell
        v-for="i of isHolderQuestions(QUESTION_IS_DONE_ENUM)"
        :key="i.id"
        :class="{ 'is-active': i.isDone === QUESTION_IS_NOT_DONE_ENUM }"
        :title="`《${i.title}》`"
        is-link
        :value="`${i.isDone === QUESTION_IS_DONE_ENUM ? '已完成' : '去完成'}`"
        @click="handleClickInformDetails(i)"
      />
      <van-cell
        v-for="i of holderFileList"
        :key="i.id"
        :class="{ 'is-active': i.isDone === QUESTION_IS_NOT_DONE_ENUM }"
        :title="`《${i.materialName}》`"
        is-link
        :value="`${i.isDone === QUESTION_IS_DONE_ENUM ? '已完成' : '去完成'}`"
        @click="handleClickInformDetails(i)"
      />
    </ProCard>
    <ProCard title="被保人">
      <van-cell
        v-for="i of isHolderQuestions(QUESTION_IS_NOT_DONE_ENUM)"
        :key="i.id"
        :class="{ 'is-active': i.isDone === QUESTION_IS_NOT_DONE_ENUM }"
        :title="`《${i.title}》`"
        is-link
        :value="`${i.isDone === QUESTION_IS_DONE_ENUM ? '已完成' : '去完成'}`"
        @click="handleClickInformDetails(i)"
      />
      <van-cell
        v-for="i of insuredFileList"
        :key="i.id"
        :class="{ 'is-active': i.isDone === QUESTION_IS_NOT_DONE_ENUM }"
        :title="`《${i.materialName}》`"
        is-link
        :value="`${i.isDone === QUESTION_IS_DONE_ENUM ? '已完成' : '去完成'}`"
        @click="handleClickInformDetails(i)"
      />
    </ProCard>

    <div class="footer-button">
      <!-- <van-button plain type="primary" @click="state.showShare = true">分享</van-button> -->
      <van-button type="primary" @click="handleClickNextStep">下一步</van-button>
    </div>
  </ProPageWrap>
</template>

<script setup lang="ts">
import wx from 'weixin-js-sdk';
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant';
import { listCustomerQuestions } from '@/api/modules/inform';
import {
  ListCustomerQuestionsResponse,
  ListCustomerQuestionsProps,
  tenantOrderNoticeProps,
} from '@/api/modules/inform.data';
import { nextStep, getOrderDetail } from '@/api';
import { NextStepRequestData } from '@/api/index.data';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import {
  QUESTION_IS_DONE_ENUM,
  QUESTION_IS_NOT_DONE_ENUM,
  HOLDER_OBJECT_TYPE_ENUM,
  INSURER_OBJECT_TYPE_ENUM,
} from '@/common/constants/notice';

import { sessionStore } from '@/hooks/useStorage';
import { getFile } from '@/api/modules/verify';
import { INotice } from '@/api/modules/verify.data';

const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品代码
  tenantId: number; // 租户id
  agentCode: string; // 代理人code
  agencyCode: string; // 机构code
  insurerCode: string; // 保险公司
  productCategory: number; // 产品大类
  templateId: number; // 模板id
  orderNo: string; // 订单号
  [key: string]: any;
}

const {
  productCode = 'MMBBSF',
  agentCode = '65434444',
  tenantId = 9991000007,
  agencyCode = '3311222',
  insurerCode = 'zhongan',
  productCategory = 1,
  templateId = 1,
  orderNo = '2022080217103534947',
} = route.query as QueryData;

const listQuestions = ref<ListCustomerQuestionsResponse[]>([]);
const pageData = ref<Partial<NextStepRequestData>>({});
const showShare = ref(false);
const insuredFileList = ref<Array<INotice>>([]); // 被保人文件列表
const holderFileList = ref<Array<INotice>>([]); // 投保人文件列表
// const tenantOrderNoticeList = ref<Partial<tenantOrderNoticeProps[]>>([]);

const isHolderQuestions = (objectType: number) => {
  return listQuestions.value.filter((i) => i.objectType === objectType);
};

const orderDetail = () => {
  getOrderDetail({
    orderNo,
    saleUserId: agentCode,
    tenantId,
  }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(pageData.value, data);
    }
  });
};

// 获取产品上下架配置中费产品资料
const getProductMaterials = () => {
  const params = {
    orderNo,
    productCode,
    tenantId,
    objectType: HOLDER_OBJECT_TYPE_ENUM, // 1-投保人，2-被保人，3-营销人员(代理人)
  };
  getFile({
    ...params,
  }).then(({ code, data }) => {
    if (code === '10000') {
      holderFileList.value = data || [];
    }
  });
  getFile({
    ...params,
    objectType: INSURER_OBJECT_TYPE_ENUM,
  }).then(({ code, data }) => {
    if (code === '10000') {
      insuredFileList.value = data || [];
    }
  });
};

const getQuestionList = () => {
  const data: Partial<ListCustomerQuestionsProps> = {
    insurerCode,
    //  告知类型：1-投保告知，2-健康告知，3-特别约定，4-投保人问卷，
    // 5-被保人问卷，6-投保人声明，7-被保人声明，8-免责条款，9-营销员告知
    // objectId: '1',
    // objectType: 1, // 适用角色 ：1-投保人，2-被保人，3-营销人员(代理人)
    orderNo,
    productCategory,
    tenantId,
  };
  Promise.all([
    listCustomerQuestions({ ...data, noticeType: 4, objectType: 1 }),
    listCustomerQuestions({ ...data, noticeType: 5, objectType: 2 }),
  ]).then(([{ code: code1, data: data1 }, { code: code2, data: data2 }]) => {
    if (code1 === '10000' && code2 === '10000') {
      listQuestions.value = [...data1, ...data2];
    }
  });
};

const handleClickInformDetails = (rows: ListCustomerQuestionsResponse) => {
  sessionStore.set('questionData', rows);
  router.push({
    path: '/healthNotice',
    query: {
      materialType: rows?.materialSource ? 'product' : 'question',
      questionnaireType: rows?.materialSource ? 1 : rows.questionnaireType, // 区分产品资料或者问卷
      orderId: pageData.value?.id,
      ...route.query,
    },
  });
};

const handleClickNextStep = () => {
  const isAllRead = listQuestions.value.every((i) => i.isDone === 1);
  if (!isAllRead) {
    Toast('请完成所有告知进行下一步');
    return;
  }

  Object.assign(pageData.value, { pageCode: 'questionNotice', tenantOrderNoticeList: listQuestions.value });

  nextStep({
    ...pageData.value,
    extInfo: { ...pageData.value.extInfo, pageCode: 'questionNotice' },
    venderCode: insurerCode,
  }).then(({ code, data }) => {
    if (code === '10000') {
      if (data.pageAction.pageAction === 'jumpToPage') {
        router.push({
          path: PAGE_ROUTE_ENUMS[data.pageAction.data.nextPageCode],
          query: route.query,
        });
      }
    }
  });
};

onMounted(() => {
  getQuestionList();
  getProductMaterials();
  orderDetail();
});
</script>

<style scoped lang="scss">
.page-question-notice {
  background: #f2f5fc;
  :deep(.com-card:last-child) {
    margin-bottom: 150px;
  }
  .van-cell {
    display: flex;
    align-items: center;
    :deep(.van-cell__title) {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #393d46;
      line-height: 42px;
    }
    :deep(.van-cell__value) {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #99a9c0;

      line-height: 42px;
    }
  }
  :deep(.is-active) {
    .van-cell__value {
      span {
        color: #0d6efe;
      }
    }
  }
}
.content {
  display: flex;
  padding: 74px 0 50px 0;

  .bx {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    .txt {
      font-size: 26px;
      font-weight: 500;
      color: #343434;
      margin-top: 14px;
    }
    .wechat {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 104px;
      height: 104px;
      background: #00bc70;
      border-radius: 50%;
      img {
        width: 54px;
        height: 44px;
      }
    }
    .friend {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 104px;
      height: 104px;
      background: #f2f7f8;
      border-radius: 50%;
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
}
</style>
