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
      <ProCard title="保障详情" link="查看详情" @link-click="onShowDetail">
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
          <HolderInsureForm ref="formRef" :disabled="disabled" :form-info="trailData" />
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
import { premiumCalc, insureProductDetail, saveOrder, underwrite } from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { ProductDetail } from '@/api/modules/product.data';
import {
  formatHolderAgeLimit,
  formatPaymentPeriodLimit,
  formatSexLimit,
  formatOccupationLimit,
  formatSocialInsuranceLimit,
} from './utils';
import { toLocal } from '@/utils';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { SOCIAL_SECURITY_ENUM, RELATION_HOLDER_ENUM } from '@/common/constants/infoCollection';
import HolderInsureForm from '../components/HolderInsureForm/index.vue';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import { premiumCalcData, RiskDetailVoItem } from '@/api/modules/trial.data';
import { RISK_TYPE_ENUM, RULE_ENUM } from '@/common/constants/trial';

const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  name: string; // 投保人姓名
  certNo: string; // 投保人证件号
  mobile: string; // 投保人手机号
  tenantId: string;
  saleUserId: string; // 销售人员
  saleChannelId: string; // 销售渠道
  agencyId: string; // 代理人id
}

const {
  productCode,
  name,
  certNo,
  mobile,
  tenantId = '9991000007',
  saleUserId = '65434444',
  saleChannelId = '123131321231',
  agencyId = '3311222',
} = route.query as QueryData;

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

// 投保人不可修改
const disabled = !!(name && certNo && mobile);
// 赠险进入，从链接上默认取投保人数据
const trailData = reactive({
  holder: {
    certNo,
    certType: CERT_TYPE_ENUM.CERT, // 默认身份证
    mobile,
    name,
    socialFlag: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
  },
  insured: {
    certNo,
    certType: CERT_TYPE_ENUM.CERT,
    name,
    socialFlag: SOCIAL_SECURITY_ENUM.HAS,
    relationToHolder: RELATION_HOLDER_ENUM.SELF, // 被保人默认自己
  },
});

const handlePlanItemClick = (index: number) => {
  activePlan.value = index;
};

const onShowDetail = () => {
  popupShow.value = true;
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

const compositionTrailData = (riskList: RiskDetailVoItem[]) => {
  // 主险信息
  const mainRiskData = riskList.find((risk) => risk.riskType === RISK_TYPE_ENUM.MAIN_RISK);
  return riskList.map((risk) => {
    const {
      riskInsureLimitVO,
      riskCategory,
      id,
      riskType,
      riskName,
      riskCode,
      riskLiabilityInfoVOList,
      riskCalcMethodInfoVO,
    } = risk;
    const {
      insurancePeriodType,
      insurancePeriodValueList,
      paymentFrequencyList,
      paymentPeriodValueList,
      paymentPeriodType,
      annuityDrawFrequencyList,
      annuityDrawValueList,
      insurancePeriodRule,
      paymentPeriodRule,
    } = riskInsureLimitVO;
    const { fixedAmount, minCopy } = riskCalcMethodInfoVO;
    const trailRiskData = {
      amount: fixedAmount,
      riskCode,
      riskId: id,
      riskName,
      chargePeriod: paymentPeriodValueList?.[0],
      annuityDrawDate: annuityDrawValueList?.[0],
      riskType,
      annuityDrawFrequency: annuityDrawFrequencyList?.[0],
      copy: minCopy,
      coveragePeriod: insurancePeriodValueList?.[0],
      insuredCode: detail.value?.insurerCode,
      liabilityVOList: riskLiabilityInfoVOList.filter((liab) => liab.optionalFlag === 1),
      paymentFrequency: paymentFrequencyList?.[0],
      riskCategory,
    };
    if (riskType === RISK_TYPE_ENUM.MAIN_RISK) {
      return trailRiskData;
    }

    // 附加险保障期间
    if (insurancePeriodRule === RULE_ENUM.ONE_YEAR) {
      // 1年期
      trailRiskData.coveragePeriod = 'year_1';
    }

    // 附加险交费期间
    if (paymentPeriodRule === RULE_ENUM.ONE_YEAR) {
      // 1年期
      trailRiskData.chargePeriod = 'year_1';
    }

    return {
      ...trailRiskData,
      mainRiskId: mainRiskData?.id,
      mainRiskCode: mainRiskData?.riskCode,
    };
  });
};

// 核保 - 参数和保存订单一样
const onUnderWrite = async (id: number) => {
  const order = {
    id,
    // orderNo: '2022090421131966279',
    tenantId,
    venderCode: detail.value?.insurerCode, // 供应商编码
    // abbreviation: '众安健康',
    orderDataSource: '1',
    saleChannelId,
    saleUserId,
    agencyId,
    tenantOrderHolder: {
      tenantId,
      name: trailData.holder.name,
      certType: 1,
      certNo: trailData.holder.certNo,
      mobile: trailData.holder.mobile,
      birthday: getBirth(trailData.holder.certNo),
      gender: getSex(trailData.holder.certNo),
    },
    extInfo: { extraInfo: { renewalDK: 'Y', paymentMethod: '5', successJumpUrl: 'www.baidu.com' } },
    tenantOrderInsuredList: [
      {
        tenantId,
        relationToHolder: trailData.insured.relationToHolder, // 与投保人关系
        insuredBeneficiaryType: trailData.insured.relationToHolder, // 与主被保险人关系
        name: trailData.insured.name,
        hasSocialInsurance: trailData.insured.socialFlag,
        certType: 1,
        certNo: trailData.insured.certNo,
        birthday: getBirth(trailData.insured.certNo),
        gender: getSex(trailData.insured.certNo),
        extInfo: {
          hasSocialInsurance: trailData.insured.socialFlag,
        },
        tenantOrderProductList: [],
      },
    ],
  };

  const res = await underwrite(order);
};

const onSaveOrder = async () => {
  const order = {
    tenantId,
    venderCode: detail.value?.insurerCode, // 供应商编码
    // abbreviation: '众安健康',
    orderDataSource: '1', // 订单来演
    saleChannelId, // 销售渠道id
    saleUserId, // 销售人员id
    agencyId, // 机构id
    tenantOrderHolder: {
      tenantId,
      name: trailData.holder.name,
      certType: 1,
      certNo: trailData.holder.certNo,
      mobile: trailData.holder.mobile,
      birthday: getBirth(trailData.holder.certNo),
      gender: getSex(trailData.holder.certNo),
    },
    extInfo: { extraInfo: { renewalDK: 'Y', paymentMethod: '5', jumpUrl: 'www.baidu.com' } },
    tenantOrderInsuredList: [
      {
        tenantId,
        relationToHolder: trailData.insured.relationToHolder, // 与投保人关系
        insuredBeneficiaryType: trailData.insured.relationToHolder, // 与主被保险人关系
        name: trailData.insured.name,
        hasSocialInsurance: trailData.insured.socialFlag,
        certType: 1,
        certNo: trailData.insured.certNo,
        birthday: getBirth(trailData.insured.certNo),
        gender: getSex(trailData.insured.certNo),
        extInfo: {
          hasSocialInsurance: trailData.insured.socialFlag,
        },
        tenantOrderProductList: [
          {
            tenantId,
            productCode,
            productName: detail.value?.productName,
            premium: 4.7, // 保费
            // TOOD 根据实际数据组装
            tenantOrderRiskList: [
              {
                tenantId: 9991000007,
                riskType: 1,
                riskCode: '7FZ',
                paymentFrequency: 5,
                currantAmount: 3000000,
                initAmount: 3000000,
                amountUnit: 1,
                liabilityDetails: [
                  {
                    liabilityCode: 'ZXG027',
                    liabilityName: '首次重大疾病保险金',
                    sumInsured: 3000000,
                  },
                  {
                    liabilityCode: 'ZXG129',
                    liabilityName: '身故保险金',
                    sumInsured: 6000000,
                  },
                ],
              },
              {
                tenantId: 9991000007,
                riskType: 2,
                riskCode: '7Y7',
                paymentFrequency: 5,
                currantAmount: 6000000,
                initAmount: 6000000,
                amountUnit: 1,
                liabilityDetails: [
                  {
                    liabilityCode: 'FXG054',
                    liabilityName: '身故保险金',
                    sumInsured: 6000000,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const res = await saveOrder(order);
  const { code, data } = res;

  if (code === '10000') {
    onUnderWrite(data);
  }
};

// 保费试算 -> 订单保存 -> 核保
const onPremiumCalc = () => {
  formRef.value?.validateForm?.().then(async () => {
    // 试算参数
    const calcData: premiumCalcData = {
      holder: {
        personVO: {
          birthday: getBirth(trailData.holder.certNo),
          certType: trailData.holder.certType,
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
            certType: trailData.insured.certType,
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
    onSaveOrder();
  });
};

const fetchData = async () => {
  const res1 = await productDetail({ productCode, withInsureInfo: true });

  if (res1.code === '10000') {
    detail.value = res1.data;
  }

  const res2 = await insureProductDetail({ productCode });
  if (res2.code === '10000') {
    console.log(compositionTrailData(res2.data.productRiskVoList[0].riskDetailVOList));
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
