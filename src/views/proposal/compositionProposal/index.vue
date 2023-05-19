<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:15:06
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-10 20:43:10
 * @Description: 计划书
-->
<template>
  <ProPageWrap>
    <div class="page-composition-proposal" :class="{ 'page-proposal-bottom': !isShare }">
      <div class="head-bg">
        {{ proposalName }}
      </div>
      <InsuranceList :info="info" />
      <div class="switch-btn" @click="changeLiabilityType">{{ isLiabilityByRisk ? '按责任显示' : '按险种显示' }}</div>
      <LiabilityByRisk v-if="isLiabilityByRisk" :info="info" />
      <LiabilityByRes v-else :info="info" />

      <!-- 利益演示 -->
      <Benefit :info="info" />

      <div class="container">
        <div class="common-title">保险公司简介</div>

        <van-collapse v-model="activeName" :is-link="false" :border="false" size="middle">
          <van-collapse-item v-for="(item, i) in info?.insurerInfoVOList" :key="i" :name="i" value-class="price">
            <template #title>
              <div style="line-height: 36px"><span class="poiner"></span> {{ item?.insurerName }}</div>
            </template>
            {{ item.insurerDesc }}
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <div v-if="!isShare" class="footer-btn">
      <ProShare
        ref="shareButtonRef"
        :title="shareConfig.title"
        :desc="shareConfig.desc"
        :link="shareConfig.link"
        :img-url="shareConfig.imgUrl"
      >
        <van-button type="primary" class="share-btn" @click.stop="() => onShareProposal()">分享</van-button>
      </ProShare>
      <van-button plain type="primary" class="btn" @click="onCreatePdf">生成PDF</van-button>
      <van-button v-if="isShowInsured" type="primary" class="btn" @click="onInsured">立即投保</van-button>
    </div>

    <InsuredProductList
      v-if="showProductList"
      :is-show="showProductList"
      :data-source="insuredProductList"
      @finished="proposal2Insured"
      @close="toggleProductList(false)"
    ></InsuredProductList>
    <ThemeSelect :key="+showThemeSelect" v-model:show="showThemeSelect" :theme-list="themeList" @submit="selectTheme" />
  </ProPageWrap>
</template>
<script lang="ts" setup>
import wx from 'weixin-js-sdk';
import { Toast } from 'vant/es';
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { queryProposalDetail, queryPreviewProposalDetail, generatePdf } from '@/api/modules/proposalList';
import {
  checkProposalInsurer,
  proposalTransInsured,
  queryProposalThemeList,
  chooseProposalTheme,
  queryProposalThemeHistoryDetail,
} from '@/api/modules/compositionProposal';
import { ORIGIN } from '@/utils';
import Storage from '@/utils/storage';
import InsuranceList from './components/InsuranceList.vue';
import Benefit from './components/Benefit.vue';
import LiabilityByRisk from './components/LiabilityByRisk.vue';
import LiabilityByRes from './components/LiabilityByRes.vue';
import ProShare from '@/components/ProShare/index.vue';
import { InsuredProductData, ThemeItem, ShowConfig } from '@/api/modules/compositionProposal.data';
import { queryStandardInsurerLink } from '@/api/modules/trial';
import InsuredProductList from './components/InsuredProductList/index.vue';
import ThemeSelect from './components/ThemeSelect/index.vue';
import { SEX_LIMIT_ENUM } from '@/common/constants';
import { useLocalStorage } from '@/hooks/useStorage';

const isLiabilityByRisk = ref(true);

const router = useRoute();
const history = useRouter();
const { isShare, id, themeId } = router.query;

const info = ref();
const tenantId = ref('');
const proposalName = ref('');
const shareConfig = ref<any>({});
const insuredProductList = ref<InsuredProductData[]>([]);
const currentInsuredProduct = ref();

const [showProductList, toggleProductList] = useToggle();
const [showThemeSelect, toggleThemeSelect] = useToggle(); // 选择主题弹出
const activeName = ref<string[]>([]);
const themeList = ref<ThemeItem[]>([]); // 主题列表
const shareButtonRef = ref(); // 分享按钮组件实例
const operateType = ref<'share' | 'pdf'>('share'); // 按钮的操作类型
let shareLink = '';

const changeLiabilityType = () => {
  isLiabilityByRisk.value = !isLiabilityByRisk.value;
};

const isMale = (gender: number) => {
  return gender === +SEX_LIMIT_ENUM.MALE;
};

const isShowInsured = computed(() => {
  const productList = insuredProductList.value.filter((product: InsuredProductData) => {
    return product.authStatus === 1 && product.insureMethod === 1;
  });
  return !!productList.length;
});

watch(
  () => info.value,
  (val) => {
    const { gender, name, birthday } = val;
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
    title: `${info.value?.name}的计划书`,
    desc: '您的贴心保险管家',
    link,
    imgUrl: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg',
    img: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg',
  };
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
      const realData = data?.proposalInsuredVOList[0] || {};
      info.value = realData;
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

// 计划书产品转投保
const proposal2Insured = (product: InsuredProductData) => {
  const { productCode, insurerCode, tenantProductCode } = product;
  // 检验产品是否支持转投保
  checkProposalInsurer({ productCode, proposalId: id }).then(({ code, data, message }) => {
    if (code === '10000') {
      if (data) {
        queryStandardInsurerLink({
          insurerCode,
          productCode: tenantProductCode,
          proposalId: id,
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
  if (insuredProductList.value?.length === 1) {
    proposal2Insured(insuredProductList.value?.[0]);
  } else {
    toggleProductList(true);
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
  padding: 0 30px 30px 30px;
  background-color: #3486ff;
  &.page-proposal-bottom {
    margin-bottom: 150px;
  }

  .head-bg {
    background-image: url('@/assets/images/compositionProposal/head.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 -30px;
    height: 242px;
    padding: 52px 278px 0 40px;
    font-size: 42px;
    font-weight: 600;
    color: #ffffff;
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
    border-radius: 16px;
    margin-bottom: 20px;
    padding: 0 20px 30px 20px;
    .common-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 34px;
      // margin-bottom: 30px;
      font-weight: 500;
      color: #333333;
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
    .product-detail {
      background-color: #f6f6fa;
      border-radius: 8px;

      :deep(.van-collapse-item__content) {
        background-color: #f6f6fa;
        border-radius: 8px;
      }
      :deep(.van-cell) {
        background-color: #f6f6fa;
        padding: 20px 30px 20px 20px;
        min-height: 20px;
        font-size: 28px;
        font-weight: 400;
        color: #393d46;
        border-radius: 8px;
      }
      :deep(.price) {
        font-size: 28px;
        font-weight: 400;
        color: $zaui-price;
      }
    }
    .poiner {
      width: 14px;
      height: 14px;
      display: inline-block;
      background: $zaui-brand;
      border-radius: 50%;
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
    width: 140px;
    margin-right: 20px;
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
