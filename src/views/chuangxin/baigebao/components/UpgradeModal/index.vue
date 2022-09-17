<template>
  <div v-if="props.isShow" class="pro-modal">
    <div class="pro-overlay"></div>
    <div class="pro-modal-wrapper">
      <img class="cover" :src="upgradeImg" />
      <div class="pro-modal-body">
        <div class="pro-modal-content">
          <p>每月保费仅需{{ getFloat(premium || 0) }}元，无需重复投保</p>
          <p class="tips">升级后的保障将于第二期保费扣费/缴费成功后生效</p>
        </div>
        <div class="pro-modal-btn" @click="onConfirm">一键升级</div>
        <div class="pro-modal-content">
          <div class="product-attachment-list">
            请您重点阅读并知晓
            <ProPDFviewer
              v-for="(item, index) in attachmentList"
              :key="index"
              class="file-name"
              :title="`《${item.attachmentName}》`"
              :content="item.attachmentUri"
              type="pdf"
            >
              <span v-if="index !== (attachmentList || []).length - 1" class="dun-hao">、</span>
            </ProPDFviewer>
          </div>
        </div>
      </div>
      <div class="pro-modal-close" @click="onClose">
        <img :src="closeImg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import closeImg from '@/assets/images/chuangxin/close.png';
import { insureProductDetail, getTenantOrderDetail, endorsementPremiumCalc } from '@/api/modules/trial';

import { getReqData, getFloat } from '../../utils';
import { productDetail } from '@/api/modules/product';
import { ProductDetail, AttachmentVOList } from '@/api/modules/product.data';
import upgradeImg from '@/assets/images/chuangxin/upgrade_bg.png';

interface Props {
  orderNo: string;
  tenantId: string; // 租户
  isShow: boolean; // 是否显示弹框
}

const props = defineProps({
  orderNo: {
    type: String,
    default: '',
  },
  tenantId: {
    type: String,
    default: '',
  },
  // 是否显示弹框
  isShow: {
    type: Boolean,
    default: () => {},
  },
});

const detail = ref<ProductDetail>(); // 产品详情
const insureDetail = ref<any>(); // 险种详情
const orderDetail = ref<any>(); // 订单详情

const premium = ref<number>();
const attachmentList = ref<AttachmentVOList[]>([]);
const productCode = 'BWYL2022';

const emits = defineEmits(['on-confirm', 'on-close']);
const onClose = () => {
  emits('on-close');
};
const onConfirm = () => {
  emits('on-confirm');
};

// 保费试算 -> 订单保存 -> 升级保障
const onPremiumCalc = async () => {
  try {
    const reqData = getReqData({
      tenantId: props.tenantId,
      premium: premium.value as number,
      orderDetail: orderDetail.value,
      productDetail: detail.value as ProductDetail,
      insureDetail: insureDetail.value,
      successJumpUrl: '',
    });
    const res = await endorsementPremiumCalc(reqData);
    const { code, data } = res;
    if (code === '10000') {
      premium.value = data.installmentPremium;
    }
  } catch (e) {
    console.log(e);
  }
};

const fetchData = () => {
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId: props.tenantId });
  const insureReq = insureProductDetail({ productCode });
  const orderReq = getTenantOrderDetail({ orderNo: props.orderNo, tenantId: props.tenantId });
  Promise.all([productReq, insureReq, orderReq]).then(([productRes, insureRes, orderRes]) => {
    if (productRes.code === '10000') {
      detail.value = productRes.data;
      attachmentList.value = productRes.data.tenantProductInsureVO.attachmentVOList;
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;
    }

    if (orderRes.code === '10000') {
      orderDetail.value = orderRes.data;
    }

    onPremiumCalc();
  });
};

watch(
  () => props.isShow,
  (val) => {
    if (val) {
      fetchData();
    }
  },
);
</script>

<style lang="scss" scoped>
.pro-modal {
  .pro-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: var(--van-overlay-background-color);
  }
  .pro-modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 90px;
    text-align: center;

    .cover {
      width: 100%;
    }

    .pro-modal-body {
      padding: 30px;
      background: #ffffff;
      border-radius: 0px 0px 25px 25px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      .pro-modal-body-bg {
        width: 100%;
        img {
          width: 100%;
        }
      }

      .pro-modal-btn {
        margin: 30px 0;
        width: 420px;
        height: 88px;
        background: #ff6d23;
        border-radius: 44px;
        font-size: 34px;
        font-weight: bold;
        color: #ffffff;
        line-height: 88px;
        text-align: center;
        // margin: auto;
      }
    }

    .pro-modal-content {
      font-size: 24px;
      font-weight: 500;
      color: #9f5012;
      line-height: 46px;
      .tips {
        font-size: 22px;
        font-weight: 400;
        color: #666666;
        line-height: 33px;
      }
      .product-attachment-list {
        font-size: 24px;
        font-weight: 400;
        color: #7b6a61;
        line-height: 34px;
        :deep(.pdf-viewer .title) {
          color: #ff6d23;
        }
      }
    }

    .pro-modal-close {
      padding: 40px;
      img {
        width: 58px;
        height: 58px;
      }
    }
  }
}
</style>
