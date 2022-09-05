<template>
  <!-- ProPageWrap -->
  <div>
    <div class="page-product-detail">
      <van-swipe class="swipe">
        <van-swipe-item v-for="(item, index) in detail?.tenantProductInsureVO?.banner || []" :key="index">
          <img :src="item" class="swipe-img" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
      <div class="title">
        <div class="text">{{ detail?.productFullName }}</div>
        <div class="desc">
          {{ detail?.showConfigVO.desc }}
        </div>
      </div>
      <ProDivider />
      <div v-if="guaranteeList.length > 1" class="plan">
        <div
          v-for="(item, index) in guaranteeList"
          :key="index"
          :class="['plan-item', `length-${guaranteeList.length}`, { active: activePlan === index }]"
          @click="handlePlanItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
      <ProCard title="保障详情" link="查看详情" @link-click="handleLinkClick">
        <div v-if="detail && detail?.tenantProductInsureVO" class="basic">
          <ProCell
            v-for="(item, index) in guaranteeList?.[activePlan]?.titleAndDescVOS"
            :key="index"
            class="guarantee-item"
            :title="item.title"
            :content="item.desc"
            :border="false"
          />
        </div>
        <div class="field">
          <FieldInfo title="投保年龄" :desc="formatHolderAgeLimit(detail?.tenantProductInsureVO?.holderAgeLimit)" />
          <FieldInfo
            title="保障期间"
            :desc="formatPaymentPeriodLimit(detail?.tenantProductInsureVO?.insurancePeriodValues)"
          />
          <FieldInfo
            title="交费期间"
            :desc="formatPaymentPeriodLimit(detail?.tenantProductInsureVO?.paymentPeriodValues)"
          />
          <FieldInfo
            v-show="detail?.tenantProductInsureVO?.sexLimit !== '-1'"
            title="性别限制"
            :desc="formatSexLimit(detail?.tenantProductInsureVO?.sexLimit)"
          />
          <FieldInfo
            v-show="detail?.tenantProductInsureVO?.socialInsuranceLimit !== '-1'"
            title="社保限制"
            :desc="formatSocialInsuranceLimit(detail?.tenantProductInsureVO?.socialInsuranceLimit)"
          />
          <FieldInfo
            v-show="detail?.tenantProductInsureVO?.occupationLimit !== '-1'"
            title="职业类别"
            :desc="formatOccupationLimit(detail?.tenantProductInsureVO?.occupationLimit)"
          />
        </div>
      </ProCard>
      <ProTab class="tabs" :list="tabList" sticky scrollspy>
        <template #tab1>
          <Info ref="formRef" :form-info="trailData" />
        </template>
        <template #tab2>
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
                  :content="item.attachmentUri"
                  type="pdf"
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
        <template #tab3>
          <ProCard title="理赔流程">
            <ProTimeline :list="detail?.tenantProductInsureVO?.settlementProcessList" />
          </ProCard>
          <ProCard title="常见问题">
            <Question :list="detail?.tenantProductInsureVO?.questionList" />
          </ProCard>
        </template>
      </ProTab>
      <div class="footer-button">
        <div class="price">
          总保费<span>￥{{ toLocal(10000) }}/月</span>
        </div>
        <van-button type="primary" class="right" @click="onPremiumCalc">立即投保</van-button>
      </div>
    </div>
  </div>
  <ProPopup v-model:show="popupShow" title="保障详情" class="guarantee-popup">
    <ProTab
      v-if="guaranteeList.length > 1"
      :list="
        guaranteeList.map((item, index) => ({
          title: item.guaranteeType,
          slotName: `guarantee-${index}`,
        }))
      "
      class="tab"
    ></ProTab>
    <div class="guarantee-list">
      <div v-for="(item, index) in guaranteeList[activePlan].titleAndDescVOS" :key="index" class="guarantee-item">
        <div class="title">{{ item.title }}</div>
        <div v-dompurify-html="item.content" class="content" />
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
import { premiumCalc, insureProductDetail } from '@/api/modules/trial';
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
import { toLocal } from '@/utils';
import { YES_NO_ENUM, PAGE_ROUTE_ENUMS } from '@/common/constants';
import Info from '../components/info/index.vue';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import { premiumCalcData } from '@/api/modules/trial.data';

const router = useRouter();
const route = useRoute();

const { productCode = 'CQ75CQ76' } = route.query;
const tabList = ref<Array<{ title: string; slotName: string }>>([
  {
    title: '我要投保',
    slotName: 'tab1',
  },
  {
    title: '产品特色',
    slotName: 'tab2',
  },
  {
    title: '理赔流程',
    slotName: 'tab3',
  },
]);
const formRef = ref();
const activePlan = ref(0);
const popupShow = ref(false);
const detail = ref<ProductDetail>();
const insureDetail = ref<any>();
const trailData = reactive({
  holder: {
    certNo: '',
    certType: 1,
    mobile: '',
    name: '',
    socialFlag: 1,
  },
  insured: {
    certNo: '',
    certType: 1,
    name: '',
    socialFlag: 1,
    relationToHolder: 1,
  },
});

const handlePlanItemClick = (index: number) => {
  activePlan.value = index;
};
const templateId = ref<number>(1);

const handleLinkClick = () => {
  popupShow.value = true;
};

const jumpPage = () => {
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

// 单计划产品 保障详情在titleAndDescVOS字段里
const guaranteeList = computed(() => {
  if (detail.value?.tenantProductInsureVO?.guaranteeList?.length) {
    return detail.value?.tenantProductInsureVO?.guaranteeList;
  }
  return [
    {
      guaranteeType: '单计划',
      titleAndDescVOS: detail.value?.tenantProductInsureVO?.titleAndDescVOS,
    },
  ];
});

const onPremiumCalc = () => {
  formRef.value?.validateForm?.().then(() => {
    // 试算参数
    const calcData: premiumCalcData = {
      holder: {
        personVO: {
          birthday: getBirth(trailData.holder.certNo),
          certType: 1,
          certNo: trailData.holder.certNo,
          gender: Number(getSex(trailData.holder.certNo)),
          mobile: trailData.holder.mobile,
          name: trailData.holder.name,
          socialFlag: trailData.holder.socialFlag,
        },
      },
      insuredVOList: [
        {
          insuredCode: '',
          personVO: {
            birthday: getBirth(trailData.insured.certNo),
            certType: 1,
            certNo: trailData.insured.certNo,
            gender: Number(getSex(trailData.insured.certNo)),
            name: trailData.insured.name,
            socialFlag: trailData.insured.socialFlag,
          },
          // TODO 组装数据
          productPlanVOList: [],
        },
      ],
      productCode: productCode as string,
    };
    console.log('组好的参数:', calcData);
    premiumCalc(calcData);
  });
};

const fetchData = async () => {
  const res1 = await productDetail({ productCode, withInsureInfo: true });

  if (res1.code === '10000') {
    detail.value = res1.data;
  }

  const res2 = await insureProductDetail({ productCode });
  if (res2.code === '10000') {
    insureDetail.value = res2.data;
  }
};

onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(() => {
    window.getIseeBiz && window.getIseeBiz();
  }, 1500);
});
</script>

<style lang="scss" scoped>
$activity-primary-color: #ff6d23;
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
  .footer-button {
    justify-content: space-between;
  }
  // 覆盖原来组件的样式
  :deep(.showIcon::before) {
    background: $activity-primary-color !important;
  }
  :deep(.link) {
    color: $activity-primary-color !important;
  }
  .guarantee-item {
    border: none;
    min-height: 76px;
    line-height: 76px;
    .left-part {
      color: #515865;
    }
  }
  // tab 样式覆盖
  :deep(.van-tab--active) {
    color: $activity-primary-color;
  }
  :deep(.van-tabs__line) {
    background: $activity-primary-color;
  }
  // 多选样式覆盖
  :deep(.com-check-btn.activated) {
    border-color: $activity-primary-color;
    color: $activity-primary-color;
    background: rgba($color: $activity-primary-color, $alpha: 0.2);
  }
  // 理赔流程样式覆盖
  :deep(.com-time-line .item .left .num) {
    color: $activity-primary-color;
    border-color: $activity-primary-color;
    background: rgba($color: $activity-primary-color, $alpha: 0.15);
    &::after {
      border-color: rgba($color: $activity-primary-color, $alpha: 0.15);
    }
  }
  // footer覆盖
  .price {
    color: #393d46;
    font-size: 34px;
    font-weight: normal;
    span {
      color: $activity-primary-color;
      font-weight: bold;
    }
  }
  .right {
    width: 280px;
    background: $activity-primary-color;
    border-color: $activity-primary-color;
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
