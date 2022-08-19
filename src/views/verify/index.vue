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
      <ProCard title="投保人签名" :show-icon="false" class="sign-card" :show-line="false">
        <template #extra>
          <div class="resign" @click="handleResign1">重签</div>
        </template>
        <ProSign ref="holderSign" class="sign" />
        <div class="sign-body">
          <div class="date">签名日期： {{ date }}</div>
          <div class="file">
            签名将被用于以下文件：
            <ProPDFviewer
              v-for="(noticeItem, noticeIndex) in fileList.filter((x) => x.noticeObject === NOTICE_TYPE_ENUM.HOLDER)"
              :key="noticeIndex"
              class="file"
              :title="`《${noticeItem.materialName}》`"
              :url="noticeItem.materialSource"
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
                v-for="(noticeItem, noticeIndex) in fileList.filter((x) => x.noticeObject === NOTICE_TYPE_ENUM.INSURED)"
                :key="noticeIndex"
                class="file"
                :title="`《${noticeItem.materialName}》`"
                :url="noticeItem.materialSource"
              />
            </div>
          </div>
        </ProCard>
      </div>
      <div class="footer-button footer">
        <div class="refresh-btn">
          <div><ProSvg name="refresh" /></div>
          <div class="text">刷新</div>
        </div>
        <van-button plain type="primary" class="share-btn">分享</van-button>
        <van-button type="primary" class="submit-btn" @click="handleSubmit">提交</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant';
import ProMessage from '@/components/ProMessage/index.vue';
import ProCard from '@/components/ProCard/index.vue';
import ProSvg from '@/components/ProSvg/index.vue';
import ProSign from '@/components/ProSign/index.vue';
import ProPdfViewer from '@/components/ProPDFviewer/index.vue';
import { faceVerify, saveSign, getFile, faceVerifySave } from '@/api/modules/verify';
import { nextStep, getOrderDetail } from '@/api';
import { NOTICE_TYPE_ENUM, PAGE_ROUTE_ENUMS, CERT_TYPE_ENUM } from '@/common/constants';
import { NextStepRequestData } from '@/api/index.data';
import { INotice } from '@/api/modules/verify.data';
import Storage from '@/utils/storage';

const CERT_STATUS_ENUM = {
  CERT: 1,
  NO_CERT: 2,
};

const route = useRoute();
const router = useRouter();

const {
  saleUserId = 'D1234567-1',
  tenantId = '9991000007',
  templateId = 1,
  productCode = 'CQ75CQ76',
  insurerCode = 'ancheng',
} = route.query;
let { orderNo } = route.query;

// 从第三方人脸识别页面跳转回来后，url上会多一个orderNo，取第一个
if (typeof orderNo === 'object') {
  // eslint-disable-next-line
  orderNo = (orderNo || [])[0];
}
const pageCode = 'sign';
const storage = new Storage({ source: 'localStorage' });
const fileList = ref<Array<INotice>>([]);
const detail = ref();
const holderSign = ref();
const insuredSignRefs = [];
const date = dayjs().format('YYYY-MM-DD');

const handleResign1 = () => {
  holderSign.value?.clear();
};

const handleResignInsured = (index: number) => {
  insuredSignRefs[index].clear();
};

const doVerify = (certNo: string, name: string) => {
  faceVerify({
    callbackUrl: window.location.href,
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
        },
        venderCode: insurerCode,
      }).then((res) => {
        const { code, data } = res;
        if (code === '10000' && data.success) {
          router.push({
            path: PAGE_ROUTE_ENUMS[data.pageAction.data.nextPageCode],
            query: { orderNo, saleUserId, tenantId },
          });
        }
      });
    });
  });
};

const getDetail = () => {
  getOrderDetail({
    orderNo,
    saleUserId,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      detail.value = data;
      setTimeout(() => {
        let insuredIndex = 0;
        data.tenantOrderAttachmentList.forEach((item) => {
          if (item.category === 21) {
            // 电子签名
            if (item.objectType === 2) {
              holderSign.value.clear();

              holderSign.value.setDataURL(item.fileBase64);
            } else if (item.objectType === 1) {
              insuredSignRefs[insuredIndex].clear();
              insuredSignRefs[insuredIndex].setDataURL(item.fileBase64);
              insuredIndex += 1;
            }
          }
        });
      });
    }
  });
};

onMounted(() => {
  getDetail();
  getFile({
    orderNo,
    productCode,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      fileList.value = data || [];
    }
  });
  const verifyData = storage.get('verifyData');
  if (verifyData) {
    const { serialNo, certNo, name } = verifyData;
    faceVerifySave({
      certiNo: certNo,
      orderNo,
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
    .share-btn {
      flex: 1;
    }

    .submit-btn {
      flex: 1;
    }
  }
}
</style>
