<!--
 * new page
 * @author: liyang
 * @since: 2022-07-20
 * index.vue
-->
<template>
  <ProPageWrap class="page-salesman-inform">
    <ProCard title="营销员告知书">
      <van-cell
        v-for="i of state.noticeList"
        :key="i.id"
        :class="{ 'is-active': i.isDone === 2 }"
        :title="`《${i.title}》`"
        is-link
        :value="`${i.isDone === 1 ? '已完成' : '去完成'}`"
        @click="handleClickInformDetails(i)"
      />
    </ProCard>
    <ProCard title="营销员签字" :show-divider="false" :show-line="false">
      <template #extra>
        <div class="resign" @click="resetSign">重签</div>
      </template>
      <ProSign ref="agentSignRef" selector="sign2"></ProSign>
      <div class="date">签名日期： {{ date }}</div>
    </ProCard>

    <div class="inform-file">
      <van-checkbox v-model="checked" shape="square"></van-checkbox>
      <p class="tips">
        您的签名将被用于<ProPDFviewer
          v-for="(item, index) in state.noticeList"
          :key="index"
          class="file"
          :title="`《${item.title}》`"
          content=""
          type=""
        />文件
      </p>
    </div>
    <div class="footer-button">
      <van-button type="primary" block @click="handleClickNextStep">下一步</van-button>
    </div>
  </ProPageWrap>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant';
import dayjs from 'dayjs';
import ProCard from '@/components/ProCard/index.vue';
import ProPDFviewer from '@/components/ProPDFviewer/index.vue';
import { listCustomerQuestions, listProductManuscripts } from '@/api/modules/inform';
import { nextStep, getOrderDetail } from '@/api';
import { ListCustomerQuestionsResponse } from '@/api/modules/inform.data';
import { sessionStore } from '@/hooks/useStorage';
import { NextStepRequestData } from '@/api/index.data';
import { saveSign } from '@/api/modules/verify';
import { ATTACHMENT_CATEGORY_ENUM, ATTACHMENT_OBJECT_TYPE_ENUM, PAGE_ROUTE_ENUMS } from '@/common/constants';

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
  tenantId = '9991000007',
  agencyCode = '3311222',
  insurerCode = 'zhongan',
  productCategory = 1,
  templateId = 1,
  orderNo = '2022080217103534947',
} = route.query as QueryData;

const agentSignRef = ref<any>(null);
const checked = ref<boolean>(false);
const date = dayjs().format('YYYY-MM-DD');

const resetSign = () => {
  agentSignRef.value?.clear();
};

interface StateProps {
  noticeType: string;
  materialSource: string;
  noticeList: ListCustomerQuestionsResponse[];
  pageData: Partial<NextStepRequestData>;
}

const state = reactive<Partial<StateProps>>({
  noticeType: '',
  materialSource: '',
  noticeList: [],
  pageData: {},
});

const orderDetail = () => {
  getOrderDetail({
    orderNo,
    saleUserId: agentCode,
    tenantId,
  }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(state.pageData, data);
      data.tenantOrderAttachmentList.forEach((item) => {
        if (
          item.category === ATTACHMENT_CATEGORY_ENUM.ELECTRIC_SIGN &&
          item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.AGENT
        ) {
          agentSignRef.value.setDataURL(item.fileBase64);
        }
      });
    }
  });
};

onMounted(() => {
  orderDetail();
  listCustomerQuestions({
    insurerCode,
    orderNo,
    productCategory,
    tenantId,
    // 告知类型：1-投保告知，2-健康告知，3-特别约定，4-投保人问卷，5-被保人问卷，6-投保人声明，7-被保人声明，8-免责条款，9-营销员告知
    noticeType: 9,
    // objectType: 1, // 适用角色 ：1-投保人，2-被保人，3-营销人员(代理人)
    objectType: 3,
  }).then(({ code, data }) => {
    if (code === '10000') {
      state.noticeList = [...state.noticeList, ...data];
    }
  });
});

const handleClickInformDetails = (rows: ListCustomerQuestionsResponse) => {
  sessionStore.set('questionData', rows);
  router.push({
    path: '/healthNotice',
    query: {
      questionnaireType: rows.questionnaireType,
      ...route.query,
    },
  });
};

const handleClickNextStep = () => {
  const isAllRead = state.noticeList && state.noticeList.every((i) => i.isDone === 1);
  if (!isAllRead) {
    Toast('请完成所有告知进行下一步');
    return;
  }
  if (agentSignRef.value?.isEmpty()) {
    Toast('请完成代理人签字进行下一步');
    return;
  }
  if (!checked.value) {
    Toast('请勾选同意签名');
    return;
  }

  const signData = agentSignRef.value?.save();
  saveSign('AGENT', signData, state.pageData.id, tenantId).then((code) => {
    if (code) {
      nextStep({
        ...state.pageData,
        extInfo: { ...state.pageData.extInfo, templateId, pageCode: 'salesNotice' },
        venderCode: insurerCode,
      }).then(({ code: code2, data }) => {
        if (code2 === '10000') {
          if (data.pageAction.pageAction === 'jumpToPage') {
            router.push({
              path: PAGE_ROUTE_ENUMS[data.pageAction.data.nextPageCode],
              query: {
                ...route.query,
              },
            });
          }
        }
      });
    }
  });
};
</script>

<style scoped lang="scss">
.page-salesman-inform {
  .van-cell {
    display: flex;
    align-items: center;
    padding: 30px 0;
    :deep(.van-cell__title) {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: $zaui-aide-text-stress;
      line-height: 42px;
    }
    :deep(.van-cell__value) {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #99a9c0;
      line-height: 42px;
    }
    .active {
      color: #0d6efe;
    }
  }

  :deep(.is-active) {
    .van-cell__value {
      span {
        color: #0d6efe;
      }
    }
  }

  .resign {
    font-size: 28px;
    color: $zaui-aide-text-stress;
  }
  .date {
    margin-top: 24px;
    font-size: 28px;
    color: #99a9c0;
    line-height: 40px;
  }

  .inform-file {
    display: flex;
    position: absolute;
    bottom: 175px;
    padding: 0 30px;
    .tips {
      margin-left: 22px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #393d46;
      line-height: 40px;
      & > span {
        color: $zaui-aide-text-stress;
      }
    }

    .next-btn {
      padding: 30px 0;

      // border-top: 1px solid #eeeff4;
      .van-button {
        border-radius: 8px;
      }
    }
  }
}
</style>
