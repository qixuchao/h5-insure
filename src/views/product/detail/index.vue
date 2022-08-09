<template>
  <ProPageWrap>
    <div class="page-product-detail">
      <van-swipe v-if="showByFactor('picture')" class="swipe">
        <van-swipe-item v-for="(item, index) in detail?.tenantProductInsureVO?.banner || []" :key="index">
          <img :src="item" class="swipe-img" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
      <div v-if="showByFactor('title')" class="title">
        <div class="text">{{ detail?.productFullName }}</div>
        <div v-if="showByFactor('introduction')" class="desc">
          {{ detail?.showConfigVO.desc }}
        </div>
      </div>
      <ProDivider />
      <div v-if="(detail?.tenantProductInsureVO?.guaranteeList || []).length > 1" class="plan">
        <div
          v-for="(item, index) in detail?.tenantProductInsureVO?.guaranteeList"
          :key="index"
          :class="[
            'plan-item',
            `length-${(detail?.tenantProductInsureVO?.guaranteeList || []).length}`,
            { active: activePlan === index },
          ]"
          @click="handlePlanItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
      <ProCard v-if="showByFactor('guaranteeDetail')" title="保障详情" link="查看详情" @link-click="handleLinkClick">
        <div v-if="detail && detail?.tenantProductInsureVO" class="basic">
          <ProCell
            v-for="(item, index) in detail?.tenantProductInsureVO?.guaranteeList?.[activePlan]?.titleAndDescVOS"
            :key="index"
            :title="item.title"
            :content="item.desc"
          />
        </div>
        <div class="field">
          <FieldInfo
            v-if="showByFactor('guaranteeAge')"
            title="投保年龄"
            :desc="formatHolderAgeLimit(detail?.tenantProductInsureVO?.holderAgeLimit)"
          />
          <FieldInfo
            v-if="showByFactor('guaranteeTime')"
            title="保障期间"
            :desc="formatPaymentPeriodLimit(detail?.tenantProductInsureVO?.insurancePeriodValues)"
          />
          <FieldInfo
            v-if="showByFactor('paymentTime')"
            title="交费期间"
            :desc="formatPaymentPeriodLimit(detail?.tenantProductInsureVO?.paymentPeriodValues)"
          />
          <FieldInfo v-if="showByFactor('paymentMethod')" title="交费方式" desc="年交" />
          <FieldInfo v-if="showByFactor('drawTime')" title="领取年龄" desc="55/60/55周岁" />
          <FieldInfo v-if="showByFactor('drawType')" title="领取方式" desc="年领/月领" />

          <FieldInfo
            v-if="showByFactor('sexLimit')"
            v-show="detail?.tenantProductInsureVO?.sexLimit !== '-1'"
            title="性别限制"
            :desc="formatSexLimit(detail?.tenantProductInsureVO?.sexLimit)"
          />
          <FieldInfo
            v-if="showByFactor('socialInsuranceLimit')"
            v-show="detail?.tenantProductInsureVO?.socialInsuranceLimit !== '-1'"
            title="社保限制"
            :desc="formatSocialInsuranceLimit(detail?.tenantProductInsureVO?.socialInsuranceLimit)"
          />
          <FieldInfo
            v-if="showByFactor('occupationType')"
            v-show="detail?.tenantProductInsureVO?.occupationLimit !== '-1'"
            title="职业类别"
            :desc="formatOccupationLimit(detail?.tenantProductInsureVO?.occupationLimit)"
          />
        </div>
      </ProCard>
      <ProTab class="tabs" :list="tabList" sticky scrollspy>
        <template #tab1>
          <div class="tab-1">
            <img
              v-for="(item, index) in detail?.tenantProductInsureVO?.spec || []"
              :key="index"
              :src="item"
              class="detail-img"
            />
            <ProCard title="产品资料">
              <template #subTitle>
                <div class="sub-title">*产品资料文件详情可手动放大，以便您更清晰查阅内容。</div>
              </template>
              <div class="tab-1-content">
                请查看
                <ProPdfViewer
                  v-for="(item, index) in detail?.tenantProductInsureVO?.attachmentVOList || []"
                  :key="index"
                  class="file-name"
                  :title="`《${item.attachmentName}》`"
                  :url="item.attachmentUri"
                >
                  <span
                    v-if="index !== (detail?.tenantProductInsureVO?.attachmentVOList || []).length - 1"
                    class="dun-hao"
                    >、</span
                  >
                </ProPdfViewer>
              </div>
            </ProCard>
          </div>
        </template>
        <template #tab2>
          <ProCard title="理赔流程">
            <ProTimeline :list="detail?.tenantProductInsureVO?.settlementProcessList" />
          </ProCard>
        </template>
        <template #tab3>
          <ProCard title="常见问题">
            <Question :list="detail?.tenantProductInsureVO?.questionList" />
          </ProCard>
        </template>
      </ProTab>
      <!-- <div class="footer">
        <div class="price">￥{{ transformToMoney(detail?.showConfigVO.price) }}</div>
        <div class="buttons">
          <div class="left">计划书</div>
          <van-button class="right" @click="goPage">算保费</van-button>
        </div>
      </div> -->
      <div class="footer-button">
        <van-button type="primary" @click="goPage">算保费</van-button>
      </div>
    </div>
  </ProPageWrap>
  <ProPopup v-model:show="popupShow" title="保障详情" class="guarantee-popup">
    <ProTab
      v-if="(detail?.tenantProductInsureVO?.guaranteeList || []).length > 1"
      :list="
        (detail?.tenantProductInsureVO?.guaranteeList || []).map((item, index) => ({
          title: item.guaranteeType,
          slotName: `guarantee-${index}`,
        }))
      "
      class="tab"
    ></ProTab>
    <div class="guarantee-list">
      <div
        v-for="(item, index) in detail?.tenantProductInsureVO?.guaranteeList[activePlan].titleAndDescVOS"
        :key="index"
        class="guarantee-item"
      >
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import ProDivider from '@/components/ProDivider/index.vue';
import ProCard from '@/components/ProCard/index.vue';
import ProTab from '@/components/ProTab/index.vue';
import ProCell from '@/components/ProCell/index.vue';
import FieldInfo from '../components/fieldInfo.vue';
import Question from '../components/question/index.vue';
import ProTimeline from '@/components/ProTimeline/index.vue';
import ProPopup from '@/components/ProPopup/index.vue';
import ProPdfViewer from '@/components/ProPDFviewer/index.vue';
import { productDetail, productList } from '@/api/modules/product';
import { ProductDetail } from '@/api/modules/product.data';
import { ProductInsureFactorItem } from '@/api/index.data';
import { getTemplateInfo, getInitFactor } from '@/api';
import {
  formatHolderAgeLimit,
  formatPaymentPeriodLimit,
  formatSexLimit,
  formatOccupationLimit,
  formatSocialInsuranceLimit,
} from './utils';
import { transformToMoney } from '@/utils/format';
import { YES_NO_ENUM, PAGE_ROUTE_ENUMS } from '@/common/constants';

const router = useRouter();
const route = useRoute();

const { productCode = 'CQ75CQ76' } = route.query;
const tabList = [
  { title: '产品特色', slotName: 'tab1' },
  { title: '理赔流程', slotName: 'tab2' },
  { title: '常见问题', slotName: 'tab3' },
];
const activePlan = ref(0);
const popupShow = ref(false);
const detail = ref<ProductDetail>();
const factor = ref<{ [key: string]: ProductInsureFactorItem }>({});

const handlePlanItemClick = (index: number) => {
  activePlan.value = index;
};
const templateId = ref<number>(1);

const showByFactor = (key: string) => {
  return factor.value && factor.value[key] && factor.value[key].isDisplay === YES_NO_ENUM.YES;
};

const handleLinkClick = () => {
  popupShow.value = true;
};

const goPage = () => {
  router.push({
    path: '/trial',
    query: {
      ...route.query,
      productCode: detail.value?.baseProductCode,
      insurerCode: detail.value?.insurerCode,
      templateId: templateId.value,
      productCategory: detail.value?.categoryNo,
    },
  });
};

onMounted(() => {
  productDetail({ productCode, withInsureInfo: true }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      detail.value = data;
      const { insurerCode, categoryNo } = data;
      getTemplateInfo({ productCategory: categoryNo, venderCode: insurerCode }).then((templateRes) => {
        if (templateRes.code === '10000') {
          templateId.value = templateRes.data?.id;
          getInitFactor({ pageCode: 'productInfo', templateId: templateId.value }).then((factorRes) => {
            if (factorRes.code === '10000') {
              const temp = {};
              factorRes.data.productInsureFactorList.forEach((item) => {
                temp[item.code] = item;
              });
              factor.value = temp;
            }
          });
        }
      });
    }
  });
});
</script>

<style lang="scss" scoped>
.page-product-detail {
  padding-bottom: 180px;
  .swipe {
    width: 100%;
    height: 400px;
    position: relative;
    .swipe-img {
      width: 100%;
      height: 400px;
    }
    .custom-indicator {
      position: absolute;
      width: 66px;
      height: 44px;
      line-height: 44px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 22px;
      right: 30px;
      bottom: 20px;
      font-size: 24px;
      color: #fff;
      text-align: center;
    }
  }
  .title {
    padding: 30px;
    .text {
      font-size: 36px;
      font-weight: 500;
      color: #393d46;
      line-height: 50px;
    }
    .desc {
      margin-top: 15px;
      font-size: 26px;
      color: #99a9c0;
      line-height: 37px;
    }
  }
  .plan {
    display: flex;
    padding: 30px;
    overflow-x: auto;
    .plan-item {
      position: relative;
      flex: 0 0 200px;
      margin-right: 20px;
      padding: 0 30px;
      height: 80px;
      line-height: 80px;
      border-radius: 12px;
      border: 1px solid #ccd4e0;
      font-size: 28px;
      color: #393d46;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      &.active {
        background: #0d6efe;
        color: #fff;
        &::before {
          content: '';
          position: absolute;
          top: 2px;
          right: 2px;
          height: 0;
          width: 0;
          border-top: 20px solid #fff;
          border-right: 20px solid #fff;
          border-bottom: 20px solid transparent;
          border-left: 20px solid transparent;
          border-radius: 0 12px 0 0;
        }
        &::after {
          content: '\2714';
          color: #0d6efe;
          position: absolute;
          top: 5px;
          right: -5px;
          height: 20px;
          width: 40px;
          line-height: 20px;
          font-size: 20px;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &.length-2 {
        flex: 0 0 335px;
      }
      &.length-3 {
        flex: 0 0 216px;
      }
    }
  }
  .tabs {
    .tab-1 {
      .detail-img {
        width: 100%;
      }
      .sub-title {
        font-size: 26px;
        color: #ff5840;
        line-height: 38px;
        margin-bottom: 10px;
      }
      .tab-1-content {
        margin-top: 26px;
        margin-bottom: 40px;
        font-size: 26px;
        color: #393d46;
        line-height: 38px;
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
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    .price {
      font-size: 34px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #ff5840;
      line-height: 40px;
    }
    .buttons {
      display: flex;
      font-size: 32px;
      height: 90px;
      line-height: 90px;
      text-align: center;
      .left {
        width: 170px;
        border-radius: 8px 0 0 8px;
        border: 1px solid #0d6efe;
        color: #0d6efe;
      }
      .right {
        width: 340px;
        color: #fff;
        border-radius: 8px;
        background: #0d6efe;
      }
    }
  }
}
</style>

<style lang="scss">
.guarantee-popup {
  .body {
    display: flex;
    flex-direction: column;
    .guarantee-list {
      padding: 30px 40px;
      flex: 1;
      height: 0;
      overflow-y: auto;
      .guarantee-item {
        margin-top: 40px;
        .title {
          height: 52px;
          font-size: 28px;
          font-weight: 500;
          color: #393d46;
          line-height: 52px;
        }
        .content {
          margin-top: 14px;
          font-size: 26px;
          color: #393d46;
          line-height: 44px;
          padding-bottom: 40px;
          border-bottom: 1px solid #eeeef4;
        }
      }
    }
  }
}
</style>
