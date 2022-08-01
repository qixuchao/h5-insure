<template>
  <ProPageWrap>
    <div class="page-bank-card">
      <ProCard title="首期支付">
        <ProForm ref="form1">
          <ProPicker
            v-model="firstFormData.payMethod"
            name="payMethod"
            required
            label="支付方式"
            is-link
            placeholder="请选择"
            :data-source="PAY_METHOD_LIST"
          />
          <BankCardInfo v-model="firstFormData.bankData" :holder-name="holderName" />
        </ProForm>
      </ProCard>
      <ProCard title="续期支付">
        <ProForm ref="form2">
          <ProField label="同首期" name="payInfoType">
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
            v-model="renewFormData.payMethod"
            name="payMethod"
            label="支付方式"
            is-link
            placeholder="请选择"
            :data-source="PAY_METHOD_LIST"
            required
          />
          <ProPicker
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
          />
        </ProForm>
      </ProCard>
      <ProCard title="年金领取银行卡" class="reprise-card" :show-divider="false">
        <div class="reprise-card-list">
          <div
            v-for="(item, index) in PAY_INFO_TYPE_LIST"
            :key="index"
            :class="['reprise-card-item', { selected: payInfoType === item.value }]"
            @click="handleYearCardClick(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
        <ProForm ref="form3">
          <BankCardInfo
            v-if="payInfoType === PAY_INFO_TYPE_ENUM.OTHER"
            v-model="repriseFormData.bankData"
            :holder-name="holderName"
          />
        </ProForm>
      </ProCard>
      <div class="agree">
        <van-checkbox v-model="agree" class="checkbox" shape="square" :icon-size="16" /> 投保人阅读并接受
        <div class="file">《银行转账授权》</div>
      </div>
      <div class="footer-button footer">
        <van-button type="primary" @click="handleSubmit">下一步</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import ProCard from '@/components/ProCard/index.vue';
import ProForm from '@/components/ProForm/index.vue';
import ProField from '@/components/ProField/index.vue';
import ProPicker from '@/components/ProPicker/index.vue';
import BankCardInfo from '@/components/BankCardInfo/index.vue';
import {
  PAY_METHOD_LIST,
  PAY_METHOD_ENUM,
  PAYMENT_TYPE_ENUM,
  PAY_INFO_TYPE_ENUM,
  PAY_INFO_TYPE_LIST,
  EXPIRY_METHOD_LIST,
  EXPIRY_METHOD_ENUM,
} from '@/common/constants/bankCard';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import { nextStep, getOrderDetail, getInitFactor } from '@/api';

const route = useRoute();
const router = useRouter();
const {
  orderNo = '2022072710380711215',
  saleUserId = 'D1234567-1',
  tenantId = '9991000007',
  templateId = 1,
} = route.query;

let orderDetail = {};
const holderName = ref('');
const firstFormData = ref({ payMethod: PAY_METHOD_ENUM.REAL_TIME, bankData: {} });
const renewFormData = ref({
  payMethod: PAY_METHOD_ENUM.REAL_TIME,
  expiryMethod: EXPIRY_METHOD_ENUM.AUTOMATIC_PADDING,
  bankData: {},
  payInfoType: PAY_INFO_TYPE_ENUM.FIRST_SAME,
});
const repriseFormData = ref({ bankData: {} });

const payInfoType = ref(PAY_INFO_TYPE_ENUM.FIRST_SAME);
const agree = ref(false);
const form1 = ref();
const form2 = ref();
const form3 = ref();

const handleYearCardClick = (type: PAY_INFO_TYPE_ENUM) => {
  payInfoType.value = type;
};

const handleSubmit = () => {
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
        category: 24, // 银行卡正面
        name: '首期签约银行卡正面',
        objectType: 5, // 首期签约
        type: 'png',
        uri: results[0].images[0],
        id: firstFormData.value.bankData.imagesId[0],
      },
      {
        category: 25, // 银行卡背面
        name: '首期签约银行卡背面',
        objectType: 5, // 首期签约
        type: 'png',
        uri: results[0].images[1],
        id: firstFormData.value.bankData.imagesId[1],
      },
    ];
    if (renewFormData.value.payInfoType === PAY_INFO_TYPE_ENUM.OTHER) {
      tenantOrderAttachmentList.push({
        category: 24, // 银行卡正面
        name: '续期签约银行卡正面',
        objectType: 6, // 续期签约
        type: 'png',
        uri: results[1].images[0],
        id: renewFormData.value.bankData.imagesId[0],
      });
      tenantOrderAttachmentList.push({
        category: 25, // 银行卡背面
        name: '续期签约银行卡正面',
        objectType: 6, // 续期签约
        type: 'png',
        uri: results[1].images[1],
        id: renewFormData.value.bankData.imagesId[1],
      });
    }
    if (payInfoType.value === PAY_INFO_TYPE_ENUM.OTHER) {
      tenantOrderAttachmentList.push({
        category: 24, // 银行卡正面
        name: '年金签约银行卡正面',
        objectType: 7, // 年金签约
        type: 'png',
        uri: results[2].images[0],
        id: repriseFormData.value.bankData.imagesId[0],
      });
      tenantOrderAttachmentList.push({
        category: 25, // 银行卡背面
        name: '年金签约银行卡正面',
        objectType: 7, // 年金签约
        type: 'png',
        uri: results[2].images[1],
        id: repriseFormData.value.bankData.imagesId[1],
      });
    }
    nextStep({
      ...orderDetail,
      pageCode: 'payInfo',
      tenantOrderPayInfoList: payInfoList,
      extInfo: { ...orderDetail.extInfo, templateId: '1', pageCode: 'payInfo' },
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
          query: { orderNo, saleUserId, tenantId },
        });
      }
    });
  });
};

onMounted(() => {
  getInitFactor({ pageCode: 'payInfo', templateId: 1 }).then((res) => {
    console.log('res', res);
  });
  getOrderDetail({
    orderNo,
    saleUserId,
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
            firstFormData.value.bankData = { ...item, images: [], imagesId: [] };
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
          if (item.objectType === 5) {
            if (item.category === 24) {
              firstFormData.value.bankData.images[0] = item.uri;
              firstFormData.value.bankData.imagesId[0] = item.id;
            }
            if (item.category === 25) {
              firstFormData.value.bankData.images[1] = item.uri;
              firstFormData.value.bankData.imagesId[1] = item.id;
            }
          } else if (item.objectType === 6) {
            if (item.category === 24) {
              renewFormData.value.bankData.images[0] = item.uri;
              renewFormData.value.bankData.imagesId[0] = item.id;
            }
            if (item.category === 25) {
              renewFormData.value.bankData.images[1] = item.uri;
              renewFormData.value.bankData.imagesId[1] = item.id;
            }
          } else if (item.objectType === 7) {
            if (item.category === 24) {
              repriseFormData.value.bankData.images[0] = item.uri;
              repriseFormData.value.bankData.imagesId[0] = item.id;
            }
            if (item.category === 25) {
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
