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
              :class="['status', { verified: detail?.tenantOrderHolder?.extInfo?.isCert === CERT_STATUS_ENUM.CERT }]"
            >
              {{ detail?.tenantOrderHolder?.extInfo?.isCert === CERT_STATUS_ENUM.CERT ? '已认证' : '待认证' }}
            </div>
          </div>
        </template>
        <div class="verify-item">
          <div class="label">身份证号码</div>
          <div class="no">{{ detail?.tenantOrderHolder?.certNo }}</div>
          <div v-if="!detail?.tenantOrderHolder?.extInfo?.isCert" class="action" @click="handleVerify(-1)">
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
            签名将被用于以下文件：<span
              v-for="(item, index) in fileList.filter((x) => x.noticeObject === NOTICE_TYPE_ENUM.HOLDER)"
              :key="index"
              class="file-name"
              >{{ `《${item.materialName}》`
              }}<span
                v-if="index !== fileList.filter((x) => x.noticeObject === NOTICE_TYPE_ENUM.HOLDER).length - 1"
                class="dun-hao"
                >、</span
              ></span
            >
          </div>
        </div>
      </ProCard>
      <div v-for="(item, index) in detail?.tenantOrderInsuredList" :key="index">
        <ProCard title="被保人" class="card">
          <template #extra>
            <div class="people">
              <div class="name">{{ item.name }}</div>
              <div :class="['status', { verified: item.extInfo?.isCert === CERT_STATUS_ENUM.CERT }]">
                {{ item.extInfo?.isCert === CERT_STATUS_ENUM.CERT ? '已认证' : '待认证' }}
              </div>
            </div>
          </template>
          <div class="verify-item">
            <div class="label">身份证号码</div>
            <div class="no">{{ item.certNo }}</div>
            <div v-if="!item.extInfo?.isCert" class="action" @click="handleVerify(index)">
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
              签名将被用于以下文件：<span
                v-for="(item, index) in fileList.filter((x) => x.noticeObject === NOTICE_TYPE_ENUM.INSURED)"
                :key="index"
                class="file-name"
                >{{ `《${item.materialName}》`
                }}<span
                  v-if="index !== fileList.filter((x) => x.noticeObject === NOTICE_TYPE_ENUM.INSURED).length - 1"
                  class="dun-hao"
                  >、</span
                ></span
              >
            </div>
          </div>
        </ProCard>
      </div>
      <div class="footer-button footer">
        <!-- <div class="refresh-btn">
          <div><ProSvg name="refresh" /></div>
          <div class="text">刷新</div>
        </div> -->
        <!-- <van-button plain type="primary">分享</van-button> -->
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
import { faceVerify, saveSign, getFile, faceVerifySave } from '@/api/modules/verify';
import { nextStep, getOrderDetail } from '@/api';
import { NOTICE_TYPE_ENUM, PAGE_ROUTE_ENUMS } from '@/common/constants';
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
  if (detail.value.tenantOrderHolder?.extInfo?.isCert !== CERT_STATUS_ENUM.CERT) {
    Toast.fail('请投保人去认证');
    return;
  }
  if (detail.value.tenantOrderInsuredList?.some((x) => x.extInfo?.isCert !== CERT_STATUS_ENUM.CERT)) {
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
          pageCode: 'sign',
          templateId,
        },
        venderCode: 'ancheng',
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
      width: 50px;
      border: none;
      color: #0d6efe;
      font-size: 20px;
      line-height: 28px;
      text-align: center;

      .text {
        margin-top: 10px;
      }
    }

    .submit-btn {
      flex: 1;
    }
  }
}
</style>
