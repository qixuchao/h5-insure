<template>
  <ProPageWrap>
    <div class="page-bank-card">
      <ProCard title="首期支付">
        <ProForm ref="form1">
          <ProPicker
            v-if="showByFactor('paymentMethod', 'INIT')"
            v-model="firstFormData.payMethod"
            name="payMethod"
            required
            label="支付方式"
            is-link
            placeholder="请选择"
            :data-source="PAY_METHOD_LIST"
          />
          <BankCardInfo v-model="firstFormData.bankData" :holder-name="holderName" :factor="factor.INIT" />
        </ProForm>
      </ProCard>
      <ProCard title="续期支付">
        <ProForm ref="form2">
          <ProField v-if="showByFactor('sameAsInit', 'RENEWAL')" label="同首期" name="payInfoType">
            <template #input>
              <van-switch
                v-model="renewFormData.payInfoType"
                size="22"
                :active-value="PAY_INFO_TYPE_ENUM.FIRST_SAME"
                :inactive-value="PAY_INFO_TYPE_ENUM.OTHER"
              />
            </template>
          </ProField>
          <ProPicker
            v-if="showByFactor('paymentMethod', 'RENEWAL')"
            v-model="renewFormData.payMethod"
            name="payMethod"
            label="支付方式"
            is-link
            placeholder="请选择"
            :data-source="PAY_METHOD_LIST"
            required
          />
          <ProPicker
            v-if="showByFactor('overduePayment', 'RENEWAL')"
            v-model="renewFormData.expiryMethod"
            name="expiryMethod"
            label="保费逾期未支付"
            is-link
            placeholder="请选择"
            :data-source="EXPIRY_METHOD_LIST"
            required
            label-width="200"
          />
          <BankCardInfo
            v-if="renewFormData.payInfoType !== PAY_INFO_TYPE_ENUM.FIRST_SAME"
            v-model="renewFormData.bankData"
            :holder-name="holderName"
            :factor="factor.RENEWAL"
          />
        </ProForm>
      </ProCard>
      <ProCard title="年金领取银行卡" class="reprise-card" :show-divider="false">
        <div class="reprise-card-list">
          <div
            v-for="(item, index) in PAY_INFO_TYPE_LIST"
            :key="index"
            :class="['reprise-card-item', { selected: payInfoType === item.value }]"
            @click="handlePayInfoTypeClick(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
        <ProForm ref="form3">
          <BankCardInfo
            v-if="payInfoType === PAY_INFO_TYPE_ENUM.OTHER"
            v-model="repriseFormData.bankData"
            :holder-name="holderName"
            :factor="factor.ANNUITY"
          />
        </ProForm>
      </ProCard>
      <div class="agree">
        <van-checkbox v-model="agree" class="checkbox" shape="square" :icon-size="16" /> 投保人阅读并接受
        <ProPDFviewer class="file" title="《银行转账授权》" :url="tempPdf" />
      </div>
      <div class="footer-button footer">
        <van-button type="primary" @click="handleSubmit">下一步</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { useRouter, useRoute } from 'vue-router';
import ProCard from '@/components/ProCard/index.vue';
import ProForm from '@/components/ProForm/index.vue';
import ProField from '@/components/ProField/index.vue';
import ProPicker from '@/components/ProPicker/index.vue';
import BankCardInfo from '@/components/BankCardInfo/index.vue';
import ProPDFviewer from '@/components/ProPDFviewer/index.vue';
import {
  PAY_METHOD_LIST,
  PAY_METHOD_ENUM,
  PAYMENT_TYPE_ENUM,
  PAY_INFO_TYPE_ENUM,
  PAY_INFO_TYPE_LIST,
  EXPIRY_METHOD_LIST,
  EXPIRY_METHOD_ENUM,
  BANK_CARD_TYPE_ENUM,
} from '@/common/constants/bankCard';
import {
  PAGE_ROUTE_ENUMS,
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
  YES_NO_ENUM,
} from '@/common/constants';
import { nextStep, getOrderDetail, getInitFactor } from '@/api';
import { ProductInsureFactorItem } from '@/api/index.data';
import tempPdf from '@/assets/pdf/bank.pdf';

const route = useRoute();
const router = useRouter();
const {
  orderNo = '2022072710380711215',
  agentCode = 'D1234567-1',
  tenantId = '9991000007',
  templateId = 1,
} = route.query;

const BANK_CARD_INIT_DATA = {
  bankCardType: BANK_CARD_TYPE_ENUM.DEBIT,
};
let orderDetail = {};
const holderName = ref('');
const firstFormData = ref({
  payMethod: PAY_METHOD_ENUM.REAL_TIME,
  bankData: { ...BANK_CARD_INIT_DATA, imagesId: [], images: [] },
});
const renewFormData = ref({
  payMethod: PAY_METHOD_ENUM.REAL_TIME,
  expiryMethod: EXPIRY_METHOD_ENUM.AUTOMATIC_PADDING,
  bankData: { ...BANK_CARD_INIT_DATA, imagesId: [], images: [] },
  payInfoType: PAY_INFO_TYPE_ENUM.FIRST_SAME,
});
const repriseFormData = ref({ bankData: { ...BANK_CARD_INIT_DATA, imagesId: [], images: [] } });

const payInfoType = ref(PAY_INFO_TYPE_ENUM.FIRST_SAME);
const factor = ref<{ [key: string]: { [key: string]: ProductInsureFactorItem } }>({});
const agree = ref(false);
const form1 = ref();
const form2 = ref();
const form3 = ref();

const handlePayInfoTypeClick = (type: PAY_INFO_TYPE_ENUM) => {
  payInfoType.value = type;
};

const showByFactor = (key: string, type: string) => {
  console.log('factor', factor.value);
  return (
    factor.value &&
    factor.value[type] &&
    factor.value[type][key] &&
    factor.value[type][key].isDisplay === YES_NO_ENUM.YES
  );
};

const handleSubmit = () => {
  if (!agree.value) {
    Toast.fail('请勾选同意银行转账授权');
    return;
  }
  Promise.all([form1.value?.validate(), form2.value?.validate(), form3.value?.validate()]).then((results) => {
    const payInfoList = [
      {
        ...results[0],
        id: firstFormData.value.id,
        paymentType: PAYMENT_TYPE_ENUM.FIRST_TERM,
      },
      {
        ...results[1],
        id: renewFormData.value.id,
        paymentType: PAYMENT_TYPE_ENUM.RENEW_TERM,
      },
      {
        ...results[2],
        id: repriseFormData.value.id,
        paymentType: PAYMENT_TYPE_ENUM.REPRISE,
        payInfoType: payInfoType.value,
      },
    ];
    const tenantOrderAttachmentList = [
      {
        category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_BANK_CARD, // 银行卡正面
        name: '首期签约银行卡正面',
        objectType: ATTACHMENT_OBJECT_TYPE_ENUM.INIT_SIGN, // 首期签约
        type: 'png',
        uri: results[0].images[0],
        id: firstFormData.value.bankData.imagesId[0],
      },
      {
        category: ATTACHMENT_CATEGORY_ENUM.REVERSE_BANK_CARD, // 银行卡背面
        name: '首期签约银行卡背面',
        objectType: ATTACHMENT_OBJECT_TYPE_ENUM.INIT_SIGN, // 首期签约
        type: 'png',
        uri: results[0].images[1],
        id: firstFormData.value.bankData.imagesId[1],
      },
    ];
    if (renewFormData.value.payInfoType === PAY_INFO_TYPE_ENUM.OTHER) {
      tenantOrderAttachmentList.push({
        category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_BANK_CARD, // 银行卡正面
        name: '续期签约银行卡正面',
        objectType: ATTACHMENT_OBJECT_TYPE_ENUM.RENEWAL_SIGN, // 续期签约
        type: 'png',
        uri: results[1].images[0],
        id: renewFormData.value.bankData.imagesId[0],
      });
      tenantOrderAttachmentList.push({
        category: ATTACHMENT_CATEGORY_ENUM.REVERSE_BANK_CARD, // 银行卡背面
        name: '续期签约银行卡正面',
        objectType: ATTACHMENT_OBJECT_TYPE_ENUM.RENEWAL_SIGN, // 续期签约
        type: 'png',
        uri: results[1].images[1],
        id: renewFormData.value.bankData.imagesId[1],
      });
    }
    if (payInfoType.value === PAY_INFO_TYPE_ENUM.OTHER) {
      tenantOrderAttachmentList.push({
        category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_BANK_CARD, // 银行卡正面
        name: '年金签约银行卡正面',
        objectType: ATTACHMENT_OBJECT_TYPE_ENUM.ANNUAL_SIGN, // 年金签约
        type: 'png',
        uri: results[2].images[0],
        id: repriseFormData.value.bankData.imagesId[0],
      });
      tenantOrderAttachmentList.push({
        category: ATTACHMENT_CATEGORY_ENUM.REVERSE_BANK_CARD, // 银行卡背面
        name: '年金签约银行卡背面',
        objectType: ATTACHMENT_OBJECT_TYPE_ENUM.ANNUAL_SIGN, // 年金签约
        type: 'png',
        uri: results[2].images[1],
        id: repriseFormData.value.bankData.imagesId[1],
      });
    }
    nextStep({
      ...orderDetail,
      pageCode: 'payInfo',
      tenantOrderPayInfoList: payInfoList,
      extInfo: { ...orderDetail.extInfo, templateId, pageCode: 'payInfo' },
      operateOption: {
        withPayInfo: true,
        withAttachmentInfo: true,
      },
      tenantOrderAttachmentList,
    }).then((res) => {
      const { code, data } = res;
      if (code === '10000' && data.success) {
        router.push({
          path: PAGE_ROUTE_ENUMS[data.pageAction.data.nextPageCode],
          query: route.query,
        });
      }
    });
  });
};

onMounted(() => {
  getInitFactor({ pageCode: 'payInfo', templateId }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      const temp = {};
      data.productInsureFactorList.forEach((item) => {
        if (!temp[item.moduleType]) {
          temp[item.moduleType] = {};
        }
        temp[item.moduleType][item.code] = item;
      });
      factor.value = temp;
    }
  });
  getOrderDetail({
    orderNo,
    saleUserId: agentCode,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      if (data) {
        orderDetail = data;
        holderName.value = data.tenantOrderHolder.name;
        data.tenantOrderPayInfoList.forEach((item) => {
          if (item.paymentType === PAYMENT_TYPE_ENUM.FIRST_TERM) {
            firstFormData.value = item;
            firstFormData.value.bankData = { ...BANK_CARD_INIT_DATA, ...item, images: [], imagesId: [] };
          } else if (item.paymentType === PAYMENT_TYPE_ENUM.RENEW_TERM) {
            renewFormData.value = item;
            renewFormData.value.bankData = { ...item, images: [], imagesId: [] };
          } else if (item.paymentType === PAYMENT_TYPE_ENUM.REPRISE) {
            repriseFormData.value = item;
            repriseFormData.value.bankData = { ...item, images: [], imagesId: [] };
            payInfoType.value = item.payInfoType;
          }
        });
        data.tenantOrderAttachmentList.forEach((item) => {
          if (item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.INIT_SIGN) {
            if (item.category === ATTACHMENT_CATEGORY_ENUM.OBVERSE_BANK_CARD) {
              firstFormData.value.bankData.images[0] = item.uri;
              firstFormData.value.bankData.imagesId[0] = item.id;
            }
            if (item.category === ATTACHMENT_CATEGORY_ENUM.REVERSE_BANK_CARD) {
              firstFormData.value.bankData.images[1] = item.uri;
              firstFormData.value.bankData.imagesId[1] = item.id;
            }
          } else if (item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.RENEWAL_SIGN) {
            if (item.category === ATTACHMENT_CATEGORY_ENUM.OBVERSE_BANK_CARD) {
              renewFormData.value.bankData.images[0] = item.uri;
              renewFormData.value.bankData.imagesId[0] = item.id;
            }
            if (item.category === ATTACHMENT_CATEGORY_ENUM.REVERSE_BANK_CARD) {
              renewFormData.value.bankData.images[1] = item.uri;
              renewFormData.value.bankData.imagesId[1] = item.id;
            }
          } else if (item.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.ANNUAL_SIGN) {
            if (item.category === ATTACHMENT_CATEGORY_ENUM.OBVERSE_BANK_CARD) {
              repriseFormData.value.bankData.images[0] = item.uri;
              repriseFormData.value.bankData.imagesId[0] = item.id;
            }
            if (item.category === ATTACHMENT_CATEGORY_ENUM.REVERSE_BANK_CARD) {
              repriseFormData.value.bankData.images[1] = item.uri;
              repriseFormData.value.bankData.imagesId[1] = item.id;
            }
          }
        });
      }
    }
  });
});
</script>

<style lang="scss" scoped>
.page-bank-card {
  :deep(.com-card-wrap) {
    .body {
      padding: 0;
    }
  }
  .reprise-card {
    .reprise-card-list {
      padding: 0 30px;
      height: 106px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .reprise-card-item {
        text-align: center;
        width: 216px;
        height: 60px;
        line-height: 60px;
        background: #f6f7fc;
        border-radius: 8px;
        color: #393d46;
        font-size: 26px;
        &.selected {
          background: rgba(13, 110, 254, 0.1);
          border: 1px solid #0d6efe;
          color: #0d6efe;
        }
      }
    }
  }
  .agree {
    height: 106px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #393d46;
    background: #f2f5fc;
    padding: 0 30px;
    .checkbox {
      margin-right: 22px;
    }
    .file {
      color: #0d6efe;
    }
  }
  .footer {
    position: static;
  }
}
</style>
