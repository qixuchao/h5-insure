<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:15:06
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-10 20:43:10
 * @Description: 计划书
-->
<template>
  <ProPageWrap>
    <van-config-provider :theme-vars="themeVars">
      <div class="page-composition-proposal" :class="{ 'page-proposal-bottom': !isShare }">
        <div :class="{ 'head-bg': true, 'single-user': !isMultiple }">
          <div class="title">{{ proposalName }}</div>
          <template v-if="isMultiple">
            <van-sticky :class="`selected`" @change="stickyChange">
              <div :class="`${selectedFixed ? 'to-fixed' : ''}`">
                <InsurancesList :infos="infos" @insure-select-change="handleSelectInsureChange" /></div
            ></van-sticky>
          </template>
        </div>
        <div class="proposal-body">
          <div v-if="currentInfo !== null">
            <InsuranceList :info="currentInfo" />
            <!-- <div class="switch-btn" @click="changeLiabilityType">
              {{ isLiabilityByRisk ? '按责任显示' : '按险种显示' }}
            </div> -->
            <div class="lia-container">
              <div class="lia-header">
                <div class="info-detail">
                  <span class="p1">保障计划</span>
                </div>
                <Capsule class="showcase-select" :configs="showCaseConfig" @select-change="handleModeChange" />
              </div>
              <LiabilityByRisk v-if="isLiabilityByRisk" :info="currentInfo" />
              <LiabilityByRes v-else :info="currentInfo" />
            </div>

            <!-- 利益演示 -->
            <Benefit v-if="currentInfo?.benefitRiskResultVOList" :info="currentInfo" />

            <div class="container">
              <div class="common-title">保险公司简介</div>

              <van-collapse v-model="activeName" :is-link="false" :border="false" size="middle">
                <van-collapse-item
                  v-for="(item, i) in currentInfo?.insurerInfoVOList"
                  :key="i"
                  :name="i"
                  value-class="price"
                >
                  <template #title>
                    <div style="line-height: 36px"><span class="poiner"></span> {{ item?.insurerName }}</div>
                  </template>
                  {{ item.insurerDesc }}
                </van-collapse-item>
              </van-collapse>
            </div>
          </div>
          <div v-else>
            <div v-if="!isLoading" class="family-proposals">
              <div v-if="isMultiple" class="family-header">
                <div class="info-detail">
                  <div class="name">
                    <div>
                      <span class="p1">家庭总览</span>
                    </div>
                  </div>
                  <div class="fe">
                    家庭年交保费： <span>¥{{ toLocal(getAllPremium()) }}</span>
                  </div>
                </div>
              </div>
              <div class="family-body">
                <InsuranceList
                  v-for="(insure, index) in infos"
                  :key="`insure_${index}`"
                  :info="insure"
                  :is-total="true"
                />
              </div>
            </div>
            <div v-if="isMultiple" class="rules">
              <div class="rules-header">
                <div class="info-detail">
                  <span class="info-title">保险配置原则</span>
                </div>
              </div>
              <div class="rules-body">
                <div v-for="(item, index) in rules" :key="`rule_${index}`" class="rule">
                  <div class="rule-left">
                    <span class="index">{{ index + 1 }}</span>
                    <div class="index-line"></div>
                  </div>
                  <div class="rule-right">
                    <div class="rule-title">{{ item.title }}</div>
                    <div class="rule-content">{{ item.content }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="back"></div>
      </div>
      <div v-if="!isShare && !isPreview" class="footer-btn">
        <ProShare
          ref="shareButtonRef"
          :title="shareConfig.title"
          :desc="shareConfig.desc"
          :link="shareConfig.link"
          :img-url="shareConfig.imgUrl"
        >
          <div class="share-btn" @click.stop="() => onShareProposal()">
            <ProSvg name="share-icon" font-size="24px" color="var(--van-primary-color)"></ProSvg>
            <span>分享计划书</span>
          </div>
        </ProShare>
        <van-button plain type="primary" class="btn" @click="onCreatePdf">生成PDF</van-button>
        <van-button v-if="isShowInsured" type="primary" class="btn" @click="onInsured">立即投保</van-button>
      </div>
      <InsuredList
        v-if="showInsureSelect"
        :is-show="showInsureSelect"
        :data-source="insuredProductList"
        @finished="openProductList"
        @close="toggleInsureList(false)"
      ></InsuredList>
      <InsuredProductList
        v-if="showProductList"
        :is-show="showProductList"
        :data-source="proposal2InsuredSelectedInsurer"
        @finished="proposal2Insured"
        @close="toggleProductList(false)"
      ></InsuredProductList>
      <ThemeSelect
        :key="+showThemeSelect"
        v-model:show="showThemeSelect"
        :theme-list="themeList"
        @submit="selectTheme"
      />
    </van-config-provider>
  </ProPageWrap>
</template>
<script lang="ts" setup>
import wx from 'weixin-js-sdk';
import { Toast } from 'vant/es';
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { toLocal, ORIGIN } from '@/utils';
import { queryProposalDetail, queryPreviewProposalDetail, generatePdf } from '@/api/modules/proposalList';
import {
  checkProposalInsurer,
  proposalTransInsured,
  queryProposalThemeList,
  chooseProposalTheme,
  queryProposalThemeHistoryDetail,
} from '@/api/modules/compositionProposal';
import Storage from '@/utils/storage';
import InsurancesList from './components/InsurancesList.vue'; // 预览页面 被保人选择
import InsuranceList from './components/InsuranceList.vue'; // 被保人展示
import Benefit from './components/Benefit.vue';
import LiabilityByRisk from './components/LiabilityByRisk.vue';
import LiabilityByRes from './components/LiabilityByRes.vue';
import ProShare from '@/components/ProShare/index.vue';
import {
  InsuredProductData,
  ProposalTransInsuredVO,
  ThemeItem,
  ShowConfig,
} from '@/api/modules/compositionProposal.data';
import { queryStandardInsurerLink, queryInsureLink } from '@/api/modules/trial';
import InsuredProductList from './components/InsuredProductList/index.vue';
import ThemeSelect from './components/ThemeSelect/index.vue';
import { SEX_LIMIT_ENUM } from '@/common/constants';
import { useLocalStorage } from '@/hooks/useStorage';
import Capsule from '@/components/CapsuleSelect/index.vue';
import InsuredList from './components/InsuredList.vue'; // 选择被保人
import useTheme from '@/hooks/useTheme';

const themeVars = useTheme();

const isLiabilityByRisk = ref(true);

const router = useRoute();
const history = useRouter();
const { isShare, id, themeId, preview } = router.query;

const infos = ref();
const currentInfo = ref(null);
const selectedFixed = ref(false);
const isLoading = ref(true);
const tenantId = ref('');
const proposalName = ref('');
const shareConfig = ref<any>({});
const insuredProductList = ref<ProposalTransInsuredVO[]>([]);
const currentInsuredProduct = ref();
const proposal2InsuredSelectedInsurer = ref(null);
const isMultiple = ref(false);

const [showInsureSelect, toggleInsureList] = useToggle();
const [showProductList, toggleProductList] = useToggle();
const [showThemeSelect, toggleThemeSelect] = useToggle(); // 选择主题弹出
const activeName = ref<string[]>([]);
const themeList = ref<ThemeItem[]>([]); // 主题列表
const shareButtonRef = ref(); // 分享按钮组件实例
const operateType = ref<'share' | 'pdf'>('share'); // 按钮的操作类型
let shareLink = '';

const showCaseConfig = [
  { label: '按险种', value: 1 },
  { label: '按责任', value: 2 },
];

const rules = [
  {
    title: '先大人、后小孩;先家庭经济支柱，后其他家庭成员',
    content:
      '作为家庭主要收入来源的父母亲要较先购买保险产品为自己提供保障，购买保险的时候要依据家庭责任大小先后购买，为家庭的顶梁柱加一层外来保障。毕竟大人安康，才能为小孩的未来拼搏，才能给家里的老人认真尽孝。',
  },
  {
    title: '先保障，再理财',
    content:
      '保险种类分两类，一种是保障类保险，另一种是理财类保险，即具备一定的投资储蓄功能的保险。对于一般家庭来说，我们首要考虑的是基本保障，只有做好了基础保障，才可以去考虑投资理财，不要本末倒置。',
  },
  {
    title: '先意外，再重疾和医疗，最后寿险',
    content:
      '保险优先考虑保障类: 意外险，重疾险，医疗险和寿险意外险: 保障的是意外带来的医疗、死亡风险，是最基本的而保障，保费也比较便宜。 健康险: 重疾险是保障重大疾病的风险，保费较高，经济较宽裕的家庭可选择夫妻互保，百万医疗险作为重疾险的补充;如资金有限，可以先给支柱充足投保，也可选择百万医疗险和消费型的重疾险作为过渡保障。 \r\n寿险:不少家庭存在房贷负债压力，因此很有必要补充房屋主贷人的寿险保额来达到高额的风险保障，帮助承担未来的家庭责任。',
  },
];

const isMale = (gender: number) => {
  return gender === +SEX_LIMIT_ENUM.MALE;
};

// 根据是否存在保司以及保司简介来判断是否展示保司简介模块
const isShowInsurePart = computed(() => {
  if (!infos.value?.insurerInfoVOList?.length) {
    return false;
  }
  const insureDesc = (infos.value.insurerInfoVOList || []).find((insureInfo) => {
    return insureInfo.insurerDesc;
  });

  return insureDesc;
});
// 判断是否展示转投保按钮
const isShowInsured = computed(() => {
  let products = [];
  insuredProductList.value.forEach((insure) => {
    if (insure.proposalTransInsuredProductVOList) {
      const filterList = insure?.proposalTransInsuredProductVOList.filter((product: InsuredProductData) => {
        return product.authStatus === 1 && product.insureMethod === 1;
      });
      products = products.concat(filterList);
    }
  });
  return !!products.length;
});

const isPreview = computed(() => {
  return `${preview}` === '1';
});

watch(
  () => infos.value,
  (val) => {
    if (proposalName.value) {
      return;
    }
    const { gender, name, birthday } = val[0];
    const age = dayjs().diff(birthday, 'y');
    if (isMale(gender)) {
      proposalName.value = `${name}先生的计划书`;
    } else {
      proposalName.value = `${name}女士的计划书`;
    }
  },
);

const setShareConfig = (link: string) => {
  shareConfig.value = {
    title: proposalName,
    desc: '您的贴心保险管家',
    link,
    imgUrl: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png',
    img: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png',
  };
};

const stickyChange = (isFixed) => {
  selectedFixed.value = isFixed;
};

const getAllPremium = () => {
  let total = 0;
  if (infos.value) {
    infos.value.forEach((info) => {
      total += +info.totalPremium;
    });
  }
  return total?.toFixed(2);
};

const handleSelectInsureChange = (index, insure) => {
  if (!insure) {
    // 家庭全部显示
    currentInfo.value = null;
  } else {
    currentInfo.value = insure;
  }
};

const getData = async () => {
  try {
    let res: any = null;
    if (isShare) {
      res = await queryPreviewProposalDetail(`${id}?tenantId=${router.query.tenantId}`);
    } else {
      res = await queryProposalDetail(id as string);
    }

    const { code, data } = res;

    if (code === '10000') {
      const realData = data?.proposalInsuredVOList || [];
      isMultiple.value = realData?.length > 1;
      let title = '家庭保障方案';
      if (!isMultiple.value) {
        handleSelectInsureChange(0, realData[0]);
        title = '个人保障方案';
      }
      document.title = title;
      infos.value = realData;
      proposalName.value = data.proposalName;
      isLoading.value = false;
      tenantId.value = data?.tenantId;
      shareLink = `${ORIGIN}/proposalCover?id=${id}&isShare=1&tenantId=${tenantId.value}`;
      setShareConfig(shareLink);
    }
  } catch (e) {
    Toast('接口请求失败');
  }
};

// 获取计划书列表
const getThemeList = async () => {
  const { code, data } = await queryProposalThemeList();
  if (code === '10000') {
    themeList.value = data || [];
  }
};

// 获取计划书下所有产品的状态
const getProposalTransInsured = () => {
  proposalTransInsured({ proposalId: id }).then(({ code, data }) => {
    if (code === '10000') {
      insuredProductList.value = data;
    }
  });
};

const openProductList = (insure: any) => {
  toggleInsureList(false);
  proposal2InsuredSelectedInsurer.value = insure;
  toggleProductList(true);
};

// 计划书产品转投保
const proposal2Insured = (product: InsuredProductData, insuredId: number) => {
  const { productCode, insurerCode, tenantProductCode } = product;
  let targetInsureId = insuredId;
  if (targetInsureId <= 0 || insuredId === undefined) {
    if (proposal2InsuredSelectedInsurer.value) {
      targetInsureId = proposal2InsuredSelectedInsurer.value.proposalInsuredId;
    } else {
      if (currentInfo.value) {
        const targetInsure = insuredProductList.value.find(
          (insure) => insure.name === currentInfo.value.name && insure.proposalInsuredId === currentInfo.value.id,
        );
        targetInsureId = targetInsure.proposalInsuredId;
      }
    }
  }
  // 检验产品是否支持转投保
  checkProposalInsurer({
    productCode,
    proposalId: id,
    proposalInsuredId: targetInsureId,
  }).then(({ code, data, message }) => {
    if (code === '10000') {
      if (data) {
        // queryStandardInsurerLink({
        //   insurerCode,
        //   productCode: tenantProductCode,
        //   proposalId: id,
        // }).then(({ code: newCode, data: newData }) => {
        //   if (newCode === '10000') {
        //     window.location.href = newData;
        //   }
        // });
        queryInsureLink({
          // 后端换接口了
          insurerCode,
          productCode: tenantProductCode,
          proposalId: id,
          proposalInsuredId: targetInsureId,
        }).then(({ code: newCode, data: newData }) => {
          if (newCode === '10000') {
            window.location.href = newData;
          }
        });
      } else {
        Toast(message);
      }
    }
  });
};

// 立即投保
const onInsured = () => {
  if (currentInfo.value) {
    // 投保当前被保人
    const targetInsure = insuredProductList.value.find(
      (insure) => insure.name === currentInfo.value.name && insure.proposalInsuredId === currentInfo.value.id,
    );
    if (targetInsure && targetInsure.proposalTransInsuredProductVOList.length === 1) {
      proposal2Insured(targetInsure.proposalTransInsuredProductVOList?.[0], targetInsure.proposalInsuredId);
    } else {
      proposal2InsuredSelectedInsurer.value = targetInsure;
      toggleProductList(true);
    }
  } else {
    toggleInsureList(true);
  }
};

// 分享计划书
const onShareProposal = () => {
  operateType.value = 'share';

  if (themeList.value.length) {
    toggleThemeSelect(true);
  } else {
    shareButtonRef.value.handleShare(shareConfig.value);
  }
};

const getPdf = (themeHistoryId?: number) => {
  operateType.value = 'pdf';
  if (!id) {
    Toast('PDF生成失败');
    return;
  }
  Toast.loading({
    message: 'PDF生成中...',
    forbidClick: true,
  });
  generatePdf({ id, themeHistoryId }).then((res: any) => {
    const { code, message } = res;
    if (code === '10000') {
      Toast.clear();
      if (message) {
        history.push(`/pdfViewer?url=${encodeURIComponent(message)}&title=${encodeURIComponent(proposalName.value)}`);
      } else {
        Toast('计划书为空');
      }
    }
  });
};

const handleModeChange = (item: any) => {
  isLiabilityByRisk.value = item.value === 1;
};

// 选择计划书封面
const selectTheme = async (selectedThemeId: number) => {
  if (!selectedThemeId) {
    toggleThemeSelect(false);
    if (operateType.value === 'pdf') {
      getPdf();
    } else {
      shareLink = `${ORIGIN}/proposalCover?id=${id}&isShare=1&tenantId=${tenantId.value}`;
      setShareConfig(shareLink);
      setTimeout(shareButtonRef.value.handleShare, 100);
    }
  } else {
    const { code, data } = await chooseProposalTheme({ themeId: selectedThemeId, proposalId: id });
    if (code === '10000') {
      toggleThemeSelect(false);
      if (operateType.value === 'pdf') {
        getPdf(data);
      } else {
        shareLink = `${ORIGIN}/proposalCover?id=${id}&isShare=1&tenantId=${tenantId.value}&themeId=${data}`;
        setShareConfig(shareLink);
        setTimeout(shareButtonRef.value.handleShare, 100);
      }
    }
  }
};

// 创建pdf文件
const onCreatePdf = () => {
  operateType.value = 'pdf';

  if (themeList.value.length) {
    toggleThemeSelect(true);
  } else {
    getPdf();
  }
};

onMounted(() => {
  if (router.query.token) {
    const storage = new Storage({ source: 'localStorage' });
    storage.set('token', router.query.token);
  }
  if (!isShare) {
    getProposalTransInsured();
    getThemeList();
  }
  getData();
});
</script>

<style lang="scss" scoped>
.page-composition-proposal {
  background-image: url('@/assets/images/compositionProposal/proposal_preview_bk.png');
  background-repeat: no-repeat;
  background-size: contain;
  // background-image: linear-gradient(#eaf1fa, #f2f5fc);
  width: 100vw;
  min-height: 100vh;
  &.page-proposal-bottom {
    margin-bottom: 150px;
  }
  .back {
    position: fixed;
    background-image: linear-gradient(#eaf1fa, #f2f5fc);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -2000;
  }

  .head-bg {
    // background-image: linear-gradient(0deg, #eaf1fa 100%, #f2f5fc, 0%);
    height: 354px;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 28px;

    &.single-user {
      height: 200px;
    }
    .title {
      width: 432px;
      margin-left: 30px;
      padding-top: 46px;
      font-size: 42px;
      font-weight: 600;
      color: black;
    }
    .selected {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .to-fixed {
      width: 100vw;
      background-color: white;
    }
  }

  .proposal-body {
    padding: 0 30px;

    .lia-container {
      width: 100%;
      background-color: white;
      border-radius: 16px;
      .lia-header {
        min-height: 106px;
        width: 100%;
        border-radius: 16px 16px 0 0;
        display: flex;
        .info-detail {
          padding-left: 20px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .p1 {
            font-size: 32px;
            font-weight: 600;
            color: #333333;
          }
        }
        .showcase-select {
          margin-right: 20px;
          margin-top: 30px;
        }
      }
    }

    .family-proposals {
      background-color: white;
      border-radius: 16px;
      min-height: 100px;
      .family-header {
        min-height: 106px;
        width: 100%;
        border-radius: 16px 16px 0 0;
        background: linear-gradient(360deg, #ecf5ff 0%, #c9e7ff 100%);
        display: flex;
        .info-detail {
          width: 100%;
          padding: 0 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .name {
            display: flex;
          }
          .p1 {
            font-size: 32px;
            font-weight: 500;
            color: #333333;
          }
          .p2 {
            padding-left: 22px;
            font-size: 24px;
            font-weight: 400;
            color: #393d46;
          }
          .img {
            width: 80px;
            height: 80px;
            background: #eeeeee;
            margin-right: 16px;
            border-radius: 50%;
            img {
              width: 80px;
              height: 80px;
            }
          }
          .fe {
            font-size: 26px;
            span {
              color: $zaui-price;
              font-weight: 400;
            }
          }
        }
      }
      .family-body {
        width: 100%;
        margin-top: 28px;
        border-radius: 0 0 16px 16px;
        background-color: white;
      }
    }
    .rules {
      background-color: white;
      border-radius: 16px;
      min-height: 100px;
      padding-bottom: 2px;
      .rules-header {
        min-height: 106px;
        width: 100%;
        border-radius: 16px 16px 0 0;
        display: flex;
        .info-detail {
          width: 100%;
          padding: 0 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .info-title {
            font-size: 32px;
            font-weight: 600;
            color: #333333;
          }
        }
      }
      .rules-body {
        width: 100%;
        border-radius: 0 0 16px 16px;
        background-color: white;
        .rule {
          width: 100%;
          padding: 0 20px;
          margin-bottom: 45px;
          display: flex;
          .rule-left {
            width: 50px;
            flex-grow: 1;
            flex-shrink: 0;
            position: relative;
            span {
              margin-left: 14px;
              color: $zaui-brand;
              font-size: 34px;
              font-weight: 600;
              text-align: center;
              line-height: 0.6rem;
            }
            .index-line {
              position: absolute;
              top: 30px;
              left: 50%;
              transform: translateX(-50%);
              width: 40px;
              height: 8px;
              border-radius: 8px;
              background-color: $zaui-brand;
              opacity: 0.14;
            }
          }
          .rule-right {
            flex-grow: 1;
            .rule-title {
              font-size: 30px;
              font-weight: 400;
              color: #393d46;
              line-height: 40px;
            }
            .rule-content {
              margin-top: 12px;
              font-size: 28px;
              font-weight: 400;
              color: #818899;
              line-height: 43px;
            }
          }
        }
      }
    }
  }
  .line {
    margin: 0 -20px;
    padding-bottom: 30px;
    border-bottom: 1px solid $zaui-line;
  }
  .line2 {
    padding-bottom: 30px;
    border-bottom: 1px solid $zaui-line;
  }
  .container {
    widows: 100%;
    background: #ffffff;
    clip-path: inset(0 0 0 0 round 16px);
    // border-radius: 16px;
    margin-bottom: 20px;
    // padding: 0 20px 30px 20px;
    .common-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: $zaui-space-border-big $zaui-space-border-small;
      font-weight: 500;
      color: #333333;
      font-size: $zaui-font-size-md2;
      line-height: 42px;
      position: relative;
      &:after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: $zaui-line;
        transform: scaleY(0.5);
        bottom: 0;
        left: 0;
      }

      .title {
        font-size: 30px;
        font-weight: 600;
        color: #393d46;
        display: flex;
        align-items: center;
        font-weight: 600;
        .ig {
          width: 18px;
          height: 29px;
          margin-right: 16px;
        }
      }
    }

    :deep(.van-collapse-item) {
      .van-cell {
        display: flex;
        align-items: center;
      }
    }

    :deep(.van-collapse-item__content) {
      background-color: #f6f6fa;
      padding: 29px 30px 7px;
      font-size: $zaui-font-size-md;
      color: $text-color;
      line-height: 47px;
      font-weight: 400;
    }
    :deep(.price) {
      font-size: 28px;
      font-weight: 400;
      color: $zaui-price;
    }

    .poiner {
      width: 14px;
      height: 14px;
      display: inline-block;
      background: $zaui-brand;
      border-radius: 50%;
      margin-right: 14px;
    }
  }
  .switch-btn {
    width: 60px;
    height: 210px;
    padding: 25px 16px;
    background: url('@/assets/images/side.png') no-repeat;
    background-size: cover;

    font-size: $zaui-font-size;
    color: $zaui-button-primary-highlight-text;
    font-weight: 600;
    line-height: 32px;
    word-wrap: break-word;
    box-sizing: border-box;

    position: fixed;
    z-index: 9;
    right: 0;
    top: 30%;
  }
  .content {
    display: flex;
    padding: 74px 0 50px 0;

    .bx {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      .txt {
        font-size: 26px;
        font-weight: 500;
        color: #343434;
        margin-top: 14px;
      }
      .wechat {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 104px;
        background: #00bc70;
        border-radius: 50%;
        img {
          width: 54px;
          height: 44px;
        }
      }
      .friend {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 104px;
        background: #f2f7f8;
        border-radius: 50%;
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
}
.footer-btn {
  width: 100%;
  height: 150px;
  background: #ffffff;
  border: 1px solid #efeff4;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  z-index: 99999999; // echart 覆盖了footer，提高层级
  .share-btn {
    width: 129px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--van-primary-color);
    font-size: $zaui-base-size;
    line-height: 30px;
    font-weight: 400;
    span {
      margin-top: 14px;
    }
  }
  .btn {
    width: 100%;
    height: 90px;
    border-radius: 8px;
  }
  .btn + .btn {
    margin-left: 20px;
  }
}
</style>
