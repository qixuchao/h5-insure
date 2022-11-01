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
        <ProPDFviewer
          class="file"
          title="《银行转账授权》"
          :content="materialData.materialContent"
          :type="getFileType(materialData.materialContent, materialData.materialSource + '')"
        />
      </div>
      <div class="footer-button footer">
        <div v-if="!isShare" class="refresh-btn" @click="handleRefresh">
          <div><ProSvg name="refresh" /></div>
          <div class="text">刷新</div>
        </div>
        <ProShare v-if="!isShare" title="邀请您填写银行卡信息" desc="邀请您填写银行卡信息" :link="shareLink" ->
          <van-button plain type="primary">分享</van-button>
        </ProShare>
        <van-button type="primary" class="submit-btn" @click="handleSubmit">下一步</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import queryString from 'query-string';
import { useRouter, useRoute } from 'vue-router';
import ProCard from '@/components/ProCard/index.vue';
import ProForm from '@/components/ProForm/index.vue';
import ProField from '@/components/ProField/index.vue';
import ProPicker from '@/components/ProPicker/index.vue';
import BankCardInfo from '@/components/BankCardInfo/index.vue';
import ProPDFviewer from '@/components/ProPDFviewer/index.vue';
import ProShare from '@/components/ProShare/index.vue';
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
import { nextStep, getOrderDetail, getInitFactor, queryInsuredMaterial } from '@/api';
import { ProductInsureFactorItem } from '@/api/index.data';
import tempPdf from '@/assets/pdf/bank.pdf';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import pageJump from '@/utils/pageJump';
import { getFileType } from '@/utils';

const route = useRoute();
const router = useRouter();
const {
  orderNo = '2022072710380711215',
  agentCode = 'D1234567-1',
  tenantId = '9991000007',
  templateId = 1,
  isShare,
  insurerCode = 'kunlunhealth',
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

const materialData = ref<any>({});

const handlePayInfoTypeClick = (type: PAY_INFO_TYPE_ENUM) => {
  payInfoType.value = type;
};

const showByFactor = (key: string, type: string) => {
  return (
    factor.value &&
    factor.value[type] &&
    factor.value[type][key] &&
    factor.value[type][key].isDisplay === YES_NO_ENUM.YES
  );
};

const getNotices = () => {
  queryInsuredMaterial({ insureCode: insurerCode, objectType: 4, tenantId, orderNo }).then(({ code, data }) => {
    if (code === '10000') {
      materialData.value = data;
    }
  });
};

const handleSubmit = () => {
  // 判断订单状态当前状态
  getOrderDetail({
    orderNo,
    saleUserId: agentCode,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      // 订单状态为待处理,支付失败,核保成功时可进行下一步操作，否则跳入支付结果页
      if (
        !(
          [
            ORDER_STATUS_ENUM.PENDING,
            ORDER_STATUS_ENUM.PAYMENT_FAILED,
            ORDER_STATUS_ENUM.UNDER_WRITING_SUCCESS,
          ] as string[]
        ).includes(data.orderStatus)
      ) {
        pageJump('paymentResult', route.query);
      } else {
        Promise.all([form1.value?.validate(), form2.value?.validate(), form3.value?.validate()]).then((results) => {
          if (!agree.value) {
            Toast.fail('请勾选同意银行转账授权');
            return;
          }
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
            extInfo: { ...orderDetail.extInfo, templateId, pageCode: 'payInfo', shareFlag: isShare ? 'Y' : 'N' },
            operateOption: {
              withPayInfo: true,
              withAttachmentInfo: true,
            },
            tenantOrderAttachmentList,
          }).then((nextRes) => {
            const { code: nextCode, data: nextData } = nextRes;
            if (nextCode === '10000' && nextData.success) {
              router.push({
                path: PAGE_ROUTE_ENUMS[nextData.pageAction.data.nextPageCode],
                query: route.query,
              });
            }
          });
        });
      }
    }
  });
};

const shareLink = computed(() => {
  const query = { ...route.query, isShare: 1, sharePageCode: 'payInfo' };
  return `${window.location.origin}/phoneVerify?${queryString.stringify(query)}`;
});

// 是否校验数据
const getDetail = (check = false) => {
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
        if (check) {
          // 判断首期卡号是否填写，填了就视为已经填写过
          if (
            !data.tenantOrderPayInfoList.find((x) => x.paymentType === PAYMENT_TYPE_ENUM.FIRST_TERM && x.bankCardNo)
          ) {
            Toast('用户未完成银行卡信息填写');
          }
        }
      }
    }
  });
};

const handleRefresh = () => {
  getDetail(true);
};

onMounted(() => {
  getNotices();
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
  getDetail();
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
          border: 1px solid $zaui-brand;
          color: $zaui-brand;
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
    background: $zaui-global-bg;
    padding: 0 30px;
    .checkbox {
      margin-right: 22px;
    }
    .file {
      color: $zaui-brand;
    }
  }
  .footer {
    position: static;
    justify-content: space-between;

    .refresh-btn {
      width: 70px;
      border: none;
      color: $zaui-brand;
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
