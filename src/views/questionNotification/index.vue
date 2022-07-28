<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * index.vue
-->
<template>
  <ZaPageWrap class="page-question-notice">
    <ProCard v-if="isHolderQuestions(1).length > 0" title="投保人">
      <van-cell
        v-for="i of isHolderQuestions(1)"
        :key="i.id"
        :title="`《${i.questionnaireName}》`"
        is-link
        :value="`${i.isDone === 1 ? '已完成' : '去完成'}`"
        @click="handleClickInformDetails(i)"
      />
    </ProCard>
    <ProCard title="被保人">
      <van-cell
        v-for="i of isHolderQuestions(2)"
        :key="i.id"
        :title="`《${i.questionnaireName}》`"
        is-link
        :value="`${i.isDone === 1 ? '已完成' : '去完成'}`"
        @click="handleClickInformDetails(i)"
      />
    </ProCard>

    <div class="footer-button">
      <van-button plain type="primary" @click="state.showShare = true">分享</van-button>
      <van-button type="primary" @click="handleClickNextStep">下一步</van-button>
    </div>
  </ZaPageWrap>
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
import { ListCustomerQuestionsResponse } from '@/api/modules/inform.data';
import { nextStep, getOrderDetail } from '@/api';
import { NextStepRequestData } from '@/api/index.data';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';

const router = useRouter();
const route = useRoute();

const {
  orderNo = '2022021815432987130620',
  productCode = 'CQ75CQ76',
  templateId = 1,
  tenantId = 9991000007,
} = route.query;

interface StateProps {
  listQuestions: ListCustomerQuestionsResponse[];
  pageData: Partial<NextStepRequestData>;
  showShare: boolean;
}

const state = reactive<StateProps>({
  listQuestions: [],
  pageData: {},
  showShare: false,
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
    console.log('ready');
    if (type === '1') {
      wx.onMenuShareAppMessage(shareProps);
    } else {
      wx.onMenuShareTimeline(shareProps);
    }
  });
};

const orderDetail = () => {
  getOrderDetail({
    orderNo: '2022072710380711215',
    saleUserId: 'D1234567-1',
    tenantId: '9991000007',
  }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(state.pageData, data);
    }
  });
};

const getQuestionList = () => {
  listCustomerQuestions({
    insurerCode: 'anshengtianping',
    noticeType: 1,
    // objectId: '1',
    objectType: 2,
    orderNo: '2022011815151382958351',
    productCategory: 2,
    tenantId: 9991000007,
  }).then(({ code, data }) => {
    if (code === '10000') {
      state.listQuestions = data;
    }
  });
};

const handleClickInformDetails = (rows: ListCustomerQuestionsResponse) => {
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
  state.pageData.extInfo = {
    ...state.pageData.extInfo,
    isReadCustomerNotice: 1,
    pageCode: 'questionNotice',
    templateId,
  };
  nextStep(state.pageData).then(({ code, data }) => {
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
    .active {
      color: #0d6efe;
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
