<template>
  <ProPageWrap>
    <div class="page-product-detail">
      <van-swipe class="swipe">
        <van-swipe-item v-for="(item, index) in imageList" :key="index">
          <img :src="item" class="swipe-img" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
      <div class="title">
        <div class="text">富得生命满天星重大疾病保险{{ detail?.productFullName }}</div>
        <div class="desc">
          重大疾病不分组赔付3次，保费低；人生重要阶段，轻症/重疾翻倍赔；特定良性肿瘤保险金，可选责任质优价低；
        </div>
      </div>
      <ProDivider />
      <div class="plan">
        <div
          v-for="(item, index) in planList.slice(0, 2)"
          :key="index"
          :class="['plan-item', 'length-2', { active: activePlan === index }]"
          @click="handlePlanItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="plan">
        <div
          v-for="(item, index) in planList.slice(0, 3)"
          :key="index"
          :class="['plan-item', 'length-3', { active: activePlan === index }]"
          @click="handlePlanItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="plan">
        <div
          v-for="(item, index) in planList"
          :key="index"
          :class="['plan-item', { active: activePlan === index }]"
          @click="handlePlanItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
      <ProCard title="保障详情" link="查看详情">
        <div v-if="detail && detail.tenantProductInsureVO" class="basic">
          <ProCell
            v-for="(item, index) in detail?.tenantProductInsureVO.guaranteeList"
            :key="index"
            :title="item.guaranteeType"
            content="基本保基本保额基本保额说基"
          />
          <ProCell title="特定良性肿瘤手术保障" content="按已交保费200%" />
          <ProCell title="重大疾病、轻症和中症疾病豁免保险费" content="200万" />
          <ProCell title="身故保险金" content="按已交保费200%" />
          <ProCell title="身故保险金" content="基本保基本保额基本保额说基" />
        </div>
        <div class="field">
          <FieldInfo
            v-if="detail && detail.tenantProductInsureVO.holderAgeLimit"
            title="投保年龄"
            :desc="formatHolderAgeLimit(detail.tenantProductInsureVO.holderAgeLimit)"
          />
          <FieldInfo
            v-if="detail && detail.tenantProductInsureVO.insurancePeriodValues"
            title="保障期间"
            :desc="formatPaymentPeriod(detail.tenantProductInsureVO.insurancePeriodValues)"
          />
          <FieldInfo
            v-if="detail && detail.tenantProductInsureVO.paymentPeriodValues"
            title="交费期间"
            :desc="formatPaymentPeriod(detail.tenantProductInsureVO.paymentPeriodValues)"
          />
          <FieldInfo title="交费方式" desc="年交" />
          <FieldInfo title="领取年龄" desc="55/60/55周岁" />
          <FieldInfo title="领取方式" desc="年领/月领" />

          <FieldInfo
            v-if="detail && detail.tenantProductInsureVO.sexLimit && detail.tenantProductInsureVO.sexLimit !== '1'"
            title="性别限制"
            :desc="formatSex(detail.tenantProductInsureVO.sexLimit)"
          />
          <FieldInfo
            v-if="
              detail &&
              detail.tenantProductInsureVO.socialInsuranceLimit &&
              detail.tenantProductInsureVO.socialInsuranceLimit !== '1'
            "
            title="社保限制"
            desc="无社保限制"
          />
          <FieldInfo
            v-if="
              detail &&
              detail.tenantProductInsureVO.occupationLimit &&
              detail.tenantProductInsureVO.occupationLimit !== '1'
            "
            title="职业类别"
            desc="1-3类职业"
          />
        </div>
      </ProCard>
      <ProTab class="tabs" :list="tabList" sticky scrollspy>
        <template #tab1>
          <div class="tab-1">
            <img :src="detailImage" class="detail-img" />
            <ProCard title="产品资料">
              <template #subTitle>
                <div class="sub-title">*产品资料文件详情可手动放大，以便您更清晰查阅内容。</div>
              </template>
              <div class="tab-1-content">
                请查看<span v-for="(item, index) in fileList" :key="index" class="file-name"
                  >{{ `《${item}》` }}<span v-if="index !== fileList.length - 1" class="dun-hao">、</span></span
                >
              </div>
            </ProCard>
          </div>
        </template>
        <template #tab2>
          <ProCard title="理赔流程">
            <ProTimeline :list="timeList" />
          </ProCard>
        </template>
        <template #tab3>
          <ProCard title="常见问题">
            <Question :list="questionList" />
          </ProCard>
        </template>
      </ProTab>
      <div class="footer">
        <div class="price">￥{{ transformToMoney(detail?.showConfigVO.price) }}</div>
        <div class="buttons">
          <div class="left">计划书</div>
          <div class="right">算保费</div>
        </div>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import ProDivider from '@/components/ProDivider/index.vue';
import ProCard from '@/components/ProCard/index.vue';
import ProTab from '@/components/ProTab/index.vue';
import ProCell from '@/components/ProCell/index.vue';
import FieldInfo from '../components/fieldInfo.vue';
import Question from '../components/question/index.vue';
import ProTimeline from '@/components/ProTimeline/index.vue';
import { productDetail, productList } from '@/api/modules/product';
import { ProductDetail } from '@/api/modules/productd.data';
import { formatHolderAgeLimit, formatPaymentPeriod, formatSex } from './utils';
import { transformToMoney } from '@/utils/format';

import swipeImage from '@/assets/images/temp/swipe.png';
import detailImage from '@/assets/images/temp/detail.png';

const imageList = ref([swipeImage, swipeImage, swipeImage]);
const tabList = [
  { title: '产品特色', slotName: 'tab1' },
  { title: '理赔流程', slotName: 'tab2' },
  { title: '常见问题', slotName: 'tab3' },
];
const activePlan = ref(1);
const planList = ['加单基础版计划1', '2222222222222', '3333333333333333', '444444444444', '555555555555555'];
const detail = ref<ProductDetail>();

const fileList = ['保险条款', '投保须知', '费率表', '责任免除条款说明书', '重要提示', '特别约定', '特殊职业类别表'];
const questionList = [
  {
    question: '什么是除外责任？',
    answer:
      '又称责任免除，指保险人依照法律规定或合同约定，不承担保险责任的范围，是对保险责任的限制。详见具体产品的保险条款。',
  },
  {
    question: '电子保单是否具有合法的法律效力？',
    answer:
      '网上投保为您提供电子保单，根据《中国人民共和国合同法》第十一条规定，数据电文是合法的合同表现形式，电子保单与纸质保单具有同等法。',
  },
  {
    question: '什么是等待期？为什么要设置等待期？',
    answer:
      '网上投保为您提供电子保单，根据《中国人民共和国合同法》第十一条规定，数据电文是合法的合同表现形式，电子保单与纸质保单具有同等法律效力。十一条规定，数据电文是合法的合同表现形式，电子保单与纸质保单具有同等。',
  },
  {
    question: '什么是等待期？为什么要设置等待期？什么是等待期？为什么要设置等待期？',
    answer:
      '网上投保为您提供电子保单，根据《中国人民共和国合同法》第十一条规定，数据电文是合法的合同表现形式，电子保单与纸质保单具有同等法律效力。十一条规定，数据电文是合法的合同表现形式，电子保单与纸质保单具有同等。',
  },
  {
    question: '什么是除外责任？',
    answer:
      '又称责任免除，指保险人依照法律规定或合同约定，不承担保险责任的范围，是对保险责任的限制。详见具体产品的保险条款。',
  },
];

const timeList = [
  {
    title: '申请理赔',
    desc: '致电保险公司客服 400-69-12345 申请理赔',
  },
  {
    title: '提交材料',
    desc: '保险金给付申请书、受益人有效身份证件、保险公司指定或认可的医疗机构出具的病历或疾病诊断说明书、银行卡附件及开户信息',
  },
  {
    title: '审核材料',
    desc: '保险公司进行理赔资料审核',
  },
  {
    title: '完成理赔',
    desc: '保险公司支付客户理赔款',
  },
  {
    title: '提交材料',
    desc: '保险金给付申请书、受益人有效身份证件、保险公司指定或认可的医疗机构出具的病历或疾病诊断说明书、银行卡附件及开户信息',
  },
  {
    title: '审核材料',
    desc: '保险公司进行理赔资料审核',
  },
];

const handlePlanItemClick = (index: number) => {
  activePlan.value = index;
};

onMounted(() => {
  productDetail({}).then((res) => {
    const { code, data } = res;
    detail.value = data;
  });

  productList();
});
</script>

<style lang="scss" scoped>
.page-product-detail {
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
        width: 170px;
        color: #fff;
        border-radius: 0 8px 8px 0;
        background: #0d6efe;
      }
    }
  }
}
</style>
