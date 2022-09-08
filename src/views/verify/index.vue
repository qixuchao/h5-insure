<template>
  <ProPageWrap>
    <div class="page-verify">
      <ProMessage
        type="warning"
        title="尊敬的客户，本次投保需要进行身份认证"
        content="本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"
      />
      <ProCard title="投保人" class="card">
        <template #extra>
          <div class="people">
            <div class="name">{{ detail?.tenantOrderHolder?.name }}</div>
            <div
              v-if="needVerify(detail?.tenantOrderHolder?.certType)"
              :class="['status', { verified: detail?.tenantOrderHolder?.extInfo?.isCert === CERT_STATUS_ENUM.CERT }]"
            >
              {{ detail?.tenantOrderHolder?.extInfo?.isCert === CERT_STATUS_ENUM.CERT ? '已认证' : '待认证' }}
            </div>
          </div>
        </template>
        <div class="verify-item">
          <div class="label">证件号码</div>
          <div class="no">{{ detail?.tenantOrderHolder?.certNo }}</div>
          <div
            v-if="
              detail?.tenantOrderHolder?.extInfo?.isCert !== CERT_STATUS_ENUM.CERT &&
              needVerify(detail?.tenantOrderHolder?.certType)
            "
            class="action"
            @click="handleVerify(-1)"
          >
            去认证
            <ProSvg name="right_arrow" class="icon" />
          </div>
        </div>
      </ProCard>
      <ProCard key="-1" title="投保人签名" :show-icon="false" class="sign-card" :show-line="false">
        <template #extra>
          <div class="resign" @click="handleResign1">重签</div>
        </template>
        <ProSign ref="holderSign" class="sign" />
        <div class="sign-body">
          <div class="date">签名日期： {{ date }}</div>
          <div class="file">
            签名将被用于以下文件：
            <ProPDFviewer
              v-for="(holderFileItem, holderFileIndex) in holderFileList"
              :key="`holderFileList-${holderFileIndex}`"
              class="file"
              :title="`《${holderFileItem.materialName}》`"
              :content="holderFileItem.materialContent"
              :type="getFileType(holderFileItem.materialContent, holderFileItem.materialSource + '')"
              @click="() => ''"
            />
            <ProPDFviewer
              v-for="(insuredFileItem, insuredFileIndex) in holderQuestionList"
              :key="`holderQuestionList-${insuredFileIndex}`"
              class="file"
              :title="`《${insuredFileItem.title}》`"
              :content="previewFileContent"
              :type="previewFileType"
              @click="() => getFileDetails(insuredFileItem)"
            />
          </div>
        </div>
      </ProCard>
      <div v-for="(item, index) in detail?.tenantOrderInsuredList" :key="index">
        <ProCard title="被保人" class="card">
          <template #extra>
            <div class="people">
              <div class="name">{{ item.name }}</div>
              <div
                v-if="needVerify(item.certType)"
                :class="['status', { verified: item.extInfo?.isCert === CERT_STATUS_ENUM.CERT }]"
              >
                {{ item.extInfo?.isCert === CERT_STATUS_ENUM.CERT ? '已认证' : '待认证' }}
              </div>
            </div>
          </template>
          <div class="verify-item">
            <div class="label">证件号码</div>
            <div class="no">{{ item.certNo }}</div>
            <div
              v-if="item.extInfo?.isCert !== CERT_STATUS_ENUM.CERT && needVerify(item.certType)"
              class="action"
              @click="handleVerify(index)"
            >
              去认证
              <ProSvg name="right_arrow" class="icon" />
            </div>
          </div>
        </ProCard>
        <ProCard title="被保人签名" :show-icon="false" class="sign-card" :show-line="false">
          <template #extra>
            <div class="resign" @click="handleResignInsured(index)">重签</div>
          </template>
          <ProSign :ref="setRef" class="sign" />
          <div class="sign-body">
            <div class="date">签名日期： {{ date }}</div>
            <div class="file">
              签名将被用于以下文件：
              <ProPDFviewer
                v-for="(insuredFileItem, insuredFileIndex) in insuredFileList"
                :key="`insuredFileList-${insuredFileIndex}`"
                class="file"
                :title="`《${insuredFileItem.materialName}》`"
                :content="insuredFileItem.materialContent"
                :type="getFileType(insuredFileItem.materialContent, insuredFileItem.materialSource + '')"
                @click="() => ''"
              />
              <ProPDFviewer
                v-for="(noticeItem, noticeIndex) in insuredQuestionList"
                :key="`insuredQuestionList-${noticeIndex}`"
                class="file"
                :title="`《${noticeItem.title}》`"
                :content="previewFileContent"
                :type="previewFileType"
                @click="() => getFileDetails(noticeItem)"
              />
            </div>
          </div>
        </ProCard>
      </div>
      <div class="footer-button footer">
        <div v-if="!isShare" class="refresh-btn" @click="handleRefresh">
          <div><ProSvg name="refresh" /></div>
          <div class="text">刷新</div>
        </div>
        <ProShare v-if="!isShare" title="邀请您进行身份认证" desc="邀请您进行身份认证" :link="shareLink">
          <van-button plain type="primary" class="share-btn">分享</van-button>
        </ProShare>
        <van-button type="primary" class="submit-btn" @click="handleSubmit">提交</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { useRoute, useRouter } from 'vue-router';
import queryString from 'query-string';
import { Toast, Dialog } from 'vant';
import ProMessage from '@/components/ProMessage/index.vue';
import ProCard from '@/components/ProCard/index.vue';
import ProSvg from '@/components/ProSvg/index.vue';
import ProSign from '@/components/ProSign/index.vue';
import ProShare from '@/components/ProShare/index.vue';
import { faceVerify, saveSign, getFile, faceVerifySave } from '@/api/modules/verify';
import { nextStep, getOrderDetail } from '@/api';
import {
  NOTICE_TYPE_ENUM,
  PAGE_ROUTE_ENUMS,
  CERT_TYPE_ENUM,
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
} from '@/common/constants';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import { NextStepRequestData } from '@/api/index.data';
import { INotice } from '@/api/modules/verify.data';
import Storage from '@/utils/storage';
import pageJump from '@/utils/pageJump';
import { formatJsonToUrlParams } from '@/utils/format';
import { getFileType } from '@/utils';
import { listCustomerQuestions, getCustomerQuestionsDetail } from '@/api/modules/inform';

const CERT_STATUS_ENUM = {
  CERT: 1,
  NO_CERT: 2,
};

const route = useRoute();
const router = useRouter();

// 处理query中的orderNo重复的问题
const dealQueryData = (() => {
  const queryData = route.query;
  if (queryData.orderCode) {
    queryData.orderNo = queryData.orderCode;
    delete queryData.orderCode;
  }
  return queryData;
})();

const {
  saleUserId = 'D1234567-1',
  tenantId = '9991000007',
  templateId = 1,
  productCode = 'CQ75CQ76',
  insurerCode = 'ancheng',
  isShare,
  orderCode,
  orderNo,
  productCategory,
} = dealQueryData;

const pageCode = 'sign';
const storage = new Storage({ source: 'localStorage' });
const insuredFileList = ref<Array<INotice>>([]); // 被保人文件列表
const holderFileList = ref<Array<INotice>>([]); // 投保人文件列表
const insuredQuestionList = ref<Array<any>>([]); // 被保人问卷列表
const holderQuestionList = ref<Array<any>>([]); // 被保人问卷列表
const detail = ref();
const holderSign = ref();
const insuredSignRefs = [];
const previewFileType = ref<string>('');
const previewFileContent = ref<any>();
const date = dayjs().format('YYYY-MM-DD');

const handleResign1 = () => {
  holderSign.value?.clear?.();
};

const handleResignInsured = (index: number) => {
  insuredSignRefs[index]?.clear?.();
};

const doVerify = (certNo: string, name: string) => {
  let jumpUrl = window.location.href;
  jumpUrl = jumpUrl.includes('orderCode') ? jumpUrl : jumpUrl.replace('orderNo', 'orderCode');
  faceVerify({
    callbackUrl: jumpUrl,
    certiNo: certNo,
    faceAuthMode: 'TENCENT',
    userName: name,
    tenantId: 9991000007,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      const { originalUrl, serialNo } = data;
      window.location.href = originalUrl;
      storage.set('verifyData', { serialNo, certNo, name });
    }
  });
};

const getFileDetails = (item: any) => {
  const { id, objectType } = item;
  previewFileType.value = '';
  previewFileContent.value = '';
  const fileTypeMap = {
    1: 'pdf',
    2: 'richText',
    3: 'link',
  };

  getCustomerQuestionsDetail({
    insurerCode,
    id,
    objectType,
    productCategory,
    orderNo,
    tenantId,
  }).then(({ code, data }) => {
    if (code === '10000') {
      const { textType, content, questionType } = data?.[0] || {};
      if (questionType === 2) {
        previewFileType.value = 'question';
        previewFileContent.value = data;
      } else {
        if (textType === 1 && content.includes('png' || 'jpg' || 'jpeg')) {
          previewFileType.value = 'picture';
        } else {
          previewFileType.value = fileTypeMap[textType];
        }
        previewFileContent.value = content;
      }
    }
  });
};

// 证件类型是身份证的才需要去认证
const needVerify = (certType: keyof typeof CERT_TYPE_ENUM) => {
  return `${certType}` === CERT_TYPE_ENUM.CERT;
};

const handleVerify = (index: number) => {
  if (index === -1) {
    doVerify(detail.value.tenantOrderHolder?.certNo, detail.value.tenantOrderHolder?.name);
  } else {
    doVerify(detail.value.tenantOrderInsuredList[index]?.certNo, detail.value.tenantOrderInsuredList[index]?.name);
  }
};

const setRef = (el) => {
  if (el && insuredSignRefs.every((x) => x !== el)) {
    insuredSignRefs.push(el);
  }
};

const handleSubmit = () => {
  const empty = holderSign.value?.isEmpty();
  if (empty) {
    Toast.fail('请投保人签名');
    return;
  }
  if (insuredSignRefs.some((x) => x.isEmpty())) {
    Toast.fail('请被保人签名');
    return;
  }
  if (
    detail.value.tenantOrderHolder?.extInfo?.isCert !== CERT_STATUS_ENUM.CERT &&
    needVerify(detail.value.tenantOrderHolder?.certType)
  ) {
    Toast.fail('请投保人去认证');
    return;
  }
  if (
    detail.value.tenantOrderInsuredList?.some(
      (x) => x.extInfo?.isCert !== CERT_STATUS_ENUM.CERT && needVerify(x.certType),
    )
  ) {
    Toast.fail('请被保人去认证');
    return;
  }
  getOrderDetail({
    orderNo: orderCode || orderNo,
    saleUserId,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      if (!(data.orderStatus === ORDER_STATUS_ENUM.PENDING || data.orderStatus === ORDER_STATUS_ENUM.PAYMENT_FAILED)) {
        pageJump('paymentResult', dealQueryData);
      } else {
        Dialog.confirm({
          title: '提示',
          message: '请确认信息填写无误后，再进行支付',
        }).then(() => {
          const signData = holderSign.value?.save();
          Promise.all([
            saveSign('HOLDER', signData, detail.value?.id, `${tenantId}`),
            ...insuredSignRefs.map((x) => saveSign('INSURED', x.save(), detail.value?.id, `${tenantId}`)),
          ]).then(() => {
            nextStep({
              ...detail.value,
              pageCode: 'sign',
              operateOption: { withSignInfo: true },
              extInfo: {
                ...detail.value.extInfo,
                pageCode: 'sign',
                templateId,
                shareFlag: isShare ? 'Y' : 'N',
              },
              venderCode: insurerCode,
            }).then((nextRes) => {
              const { code: nextCode, data: nextData } = nextRes;
              if (code === '10000' && nextData.success) {
                router.push({
                  path: PAGE_ROUTE_ENUMS[nextData.pageAction.data.nextPageCode],
                  query: { orderNo: orderCode || orderNo, saleUserId, tenantId },
                });
              }
            });
          });
        });
      }
    }
  });
};

// check 是否校验数据
const getDetail = (check = false) => {
  getOrderDetail({
    orderNo: orderCode || orderNo,
    saleUserId,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      detail.value = data;
      if (check) {
        if (
          data?.tenantOrderHolder?.extInfo?.isCert === CERT_STATUS_ENUM.NO_CERT ||
          data?.tenantOrderInsuredList.some((x) => x.extInfo?.isCert === CERT_STATUS_ENUM.NO_CERT)
        ) {
          Toast('用户未完身份认证及签字');
        } else if (
          !data?.tenantOrderAttachmentList.find(
            (x) =>
              x.category === ATTACHMENT_CATEGORY_ENUM.ELECTRIC_SIGN &&
              x.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER,
          ) ||
          !data?.tenantOrderAttachmentList.find(
            (x) =>
              x.category === ATTACHMENT_CATEGORY_ENUM.ELECTRIC_SIGN &&
              x.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.INSURED,
          )
        ) {
          Toast('用户未完身份认证及签字');
        }
      }
      setTimeout(() => {
        let insuredIndex = 0;
        data.tenantOrderAttachmentList.forEach((item) => {
          if (item.category === ATTACHMENT_CATEGORY_ENUM.ELECTRIC_SIGN) {
            // 电子签名
            if (item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER) {
              holderSign.value?.clear?.();

              holderSign.value.setDataURL(item.fileBase64);
            } else if (item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.INSURED) {
              insuredSignRefs[insuredIndex]?.clear?.();
              insuredSignRefs[insuredIndex].setDataURL(item.fileBase64);
              insuredIndex += 1;
            }
          }
        });
      });
    }
  });
};

const handleRefresh = () => {
  getDetail(true);
};

const shareLink = computed(() => {
  const query = { ...dealQueryData, isShare: 1, sharePageCode: 'sign' };
  return `${window.location.origin}/phoneVerify?${queryString.stringify(query)}`;
});

// 获取产品上下架配置中费产品资料
const getProductMaterials = () => {
  const params = {
    orderNo: orderCode || orderNo,
    productCode,
    tenantId,
    objectType: 1, // 1-投保人，2-被保人，3-营销人员(代理人)
  };

  const questionParams: any = {
    insurerCode,
    //  告知类型：1-投保告知，2-健康告知，3-特别约定，4-投保人问卷，
    // 5-被保人问卷，6-投保人声明，7-被保人声明，8-免责条款，9-营销员告知
    // objectId: '1',
    // objectType: 1, // 适用角色 ：1-投保人，2-被保人，3-营销人员(代理人)
    orderNo,
    productCategory,
    tenantId,
    noticeType: 4,
    objectType: 1,
  };

  // 投保人资料
  getFile({
    ...params,
  }).then(({ code, data }) => {
    if (code === '10000') {
      // holderFileList.value.push(...(data || []));
    }
  });
  // 被保人资料
  getFile({
    ...params,
    objectType: 2,
  }).then(({ code, data }) => {
    if (code === '10000') {
      insuredFileList.value = data || [];
    }
  });

  // 投保人问卷
  listCustomerQuestions({ ...questionParams }).then(({ code, data }) => {
    if (code === '10000') {
      holderQuestionList.value = data || [];
    }
  });

  // 被保人问卷
  listCustomerQuestions({ ...questionParams, noticeType: 5, objectType: 2 }).then(({ code, data }) => {
    if (code === '10000') {
      insuredQuestionList.value = data || [];
    }
  });
};

onMounted(() => {
  getDetail();
  getProductMaterials();
  const verifyData = storage.get('verifyData');
  if (verifyData) {
    const { serialNo, certNo, name } = verifyData;
    faceVerifySave({
      certiNo: certNo,
      orderNo: orderCode || orderNo,
      serialNo,
      tenantId,
      userName: name,
    }).then((res) => {
      const { code, data } = res;
      if (code === '10000') {
        storage.remove('verifyData');
        getDetail();
      }
    });
  }
});
</script>

<style lang="scss" scoped>
.page-verify {
  .card {
    .people {
      flex: 1;
      margin-left: 40px;
      display: flex;
      align-items: center;

      .name {
        font-size: 30px;
        font-weight: 600;
        color: #393d46;
      }

      .status {
        margin-left: 20px;
        text-align: center;
        width: 90px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        border: 1px solid #99a9c0;
        font-size: 24px;
        color: #99a9c0;

        &.verified {
          color: #0d6efe;
          border-color: #0d6efe;
        }
      }
    }

    .verify-item {
      display: flex;
      align-items: center;
      height: 106px;
      line-height: 106px;
      font-size: 30px;
      color: #393d46;

      .no {
        margin-left: 48px;
      }

      .action {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #99a9c0;

        .icon {
          margin-left: 10px;
          color: #99a9c0;
          font-size: 24px;
        }
      }
    }
  }

  .sign-card {
    .resign {
      font-size: 28px;
      color: #0d6efe;
    }

    .sign-body {
      padding-bottom: 30px;

      .date {
        margin-top: 24px;
        font-size: 28px;
        color: #99a9c0;
        line-height: 40px;
      }

      .file {
        margin-top: 16px;
        font-size: 28px;
        color: #393d46;
        line-height: 40px;

        .file-name {
          color: #0d6efe;

          .dun-hao {
            color: #393d46;
          }
        }
      }
    }
  }

  .footer {
    position: static;
    justify-content: space-between;

    .refresh-btn {
      width: 70px;
      border: none;
      color: #0d6efe;
      font-size: 30px;
      line-height: 28px;
      text-align: center;

      .text {
        margin-top: 10px;
        font-size: 24px;
      }
    }
    :deep(.com-share) {
      flex: 1;
      margin-left: 20px;
    }

    .submit-btn {
      flex: 1;
    }
  }
}
</style>
