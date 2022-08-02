<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * index.vue
-->
<template>
  <ProPageWrap class="page-question-notice">
    <ProCard v-if="isHolderQuestions(1).length > 0" title="投保人">
      <van-cell
        v-for="i of isHolderQuestions(1)"
        :key="i.id"
        :class="{ 'is-active': i.isDone === 2 }"
        :title="`《${i.questionnaireName}》`"
        is-link
        :value="`${i.isDone === 1 ? '已完成' : '去完成'}`"
        @click="handleClickInformDetails(i)"
      />
    </ProCard>
    <ProCard v-if="isHolderQuestions(2).length > 0" title="被保人">
      <van-cell
        v-for="i of isHolderQuestions(2)"
        :key="i.id"
        :class="{ 'is-active': i.isDone === 2 }"
        :title="`《${i.questionnaireName}》`"
        is-link
        :value="`${i.isDone === 1 ? '已完成' : '去完成'}`"
        @click="handleClickInformDetails(i)"
      />
    </ProCard>

    <div class="footer-button">
      <!-- <van-button plain type="primary" @click="state.showShare = true">分享</van-button> -->
      <van-button type="primary" @click="handleClickNextStep">下一步</van-button>
    </div>
  </ProPageWrap>
  <van-action-sheet v-model:show="state.showShare" cancel-text="取消" close-on-click-action>
    <div class="content">
      <div class="bx" @click="handleShare('1')">
        <div class="wechat"><img src="@/assets/images/compositionProposal/wechat.png" alt="" /></div>
        <div class="txt">微信好友</div>
      </div>
      <div class="bx">
        <div class="friend" @click="handleShare('2')">
          <img src="@/assets/images/compositionProposal/pengyouquan.png" alt="" />
        </div>
        <div class="txt">朋友圈</div>
      </div>
    </div>
  </van-action-sheet>
</template>

<script setup lang="ts">
import wx from 'weixin-js-sdk';
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant';
import { listCustomerQuestions } from '@/api/modules/inform';
import { NOTICE_OBJECT_TYPE } from '@/common/constants/notice';
import {
  ListCustomerQuestionsResponse,
  ListCustomerQuestionsProps,
  tenantOrderNoticeProps,
} from '@/api/modules/inform.data';
import { nextStep, getOrderDetail } from '@/api';
import { NextStepRequestData } from '@/api/index.data';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import { sessionStore } from '@/hooks/useStorage';

const router = useRouter();
const route = useRoute();

const {
  orderNo = '2022021815432987130620',
  productCode = 'CQ75CQ76',
  templateId = 1,
  saleUserId = 'D1234567-1',
  tenantId = 9991000007,
} = route.query;

interface StateProps {
  listQuestions: ListCustomerQuestionsResponse[];
  pageData: Partial<NextStepRequestData>;
  showShare: boolean;
  tenantOrderNoticeList: Partial<tenantOrderNoticeProps[]>;
}

const state = reactive<StateProps>({
  listQuestions: [],
  pageData: {},
  showShare: false,
  tenantOrderNoticeList: [],
});

const isHolderQuestions = (objectType: number) => {
  return state.listQuestions.filter((i) => i.objectType === objectType);
};

const handleShare = (type: string) => {
  const shareProps = {
    title: `告知书`, // 分享标题
    desc: '客户告知书', // 分享描述
    link: `${window.location.href}?isShare=1`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: '', // 分享图标
    success() {
      // 设置成功
      console.log('分享成功');
    },
  };

  wx.ready(() => {
    if (type === '1') {
      wx.onMenuShareAppMessage(shareProps);
    } else {
      wx.onMenuShareTimeline(shareProps);
    }
  });
};

const orderDetail = () => {
  getOrderDetail({
    orderNo,
    saleUserId,
    tenantId,
  }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(state.pageData, data);
    }
  });
};

const getQuestionList = () => {
  const data: Partial<ListCustomerQuestionsProps> = {
    insurerCode: 'andainsurer',
    // 告知类型：1-投保告知，2-健康告知，3-特别约定，4-投保人问卷，5-被保人问卷，6-投保人声明，7-被保人声明，8-免责条款，9-营销员告知
    // objectId: '1',
    // objectType: 1, // 适用角色 ：1-投保人，2-被保人，3-营销人员(代理人)
    orderNo,
    productCategory: 1,
    tenantId: 9991000007,
  };
  Promise.all([
    listCustomerQuestions({ ...data, noticeType: 4, objectType: 1 }),
    listCustomerQuestions({ ...data, noticeType: 5, objectType: 2 }),
  ]).then(([{ code: code1, data: data1 }, { code: code2, data: data2 }]) => {
    if (code1 === '10000' && code2 === '10000') {
      state.listQuestions = [...data1, ...data2];
    }
  });
};

const handleClickInformDetails = (rows: ListCustomerQuestionsResponse) => {
  sessionStore.set('questionData', rows);
  router.push({
    path: '/healthNotice',
    query: {
      questionnaireType: rows.questionnaireType,
    },
  });
};

const handleClickNextStep = () => {
  const isAllRead = state.listQuestions.every((i) => i.isDone === 1);
  if (!isAllRead) {
    Toast('请完成所有告知进行下一步');
    return;
  }
  // router.push({
  //   path: '/infoCollection',
  //   query: route.query,
  // });

  Object.assign(state.pageData, { pageCode: 'questionNotice', tenantOrderNoticeList: state.listQuestions });

  nextStep({
    ...state.pageData,
    extInfo: { ...state.pageData.extInfo, templateId: '1', pageCode: 'questionNotice' },
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
