<template>
  <div class="page page-product-lib">
    <van-sticky>
      <van-cell class="top-bar">
        <div>
          <TypeFilter
            v-model="config.riskType"
            :type="config.materialCategoryShowStyle"
            @update:modelValue="(v) => (config.riskType = v)"
            @change="getData"
          />
        </div>
        <van-search
          v-model="config.riskName"
          left-icon="none"
          placeholder="请搜索险种名称"
          shape="round"
          clear-trigger="always"
          show-action
          :clearable="isMobile"
          @search="getData"
        >
          <template #action>
            <div @click="getData">搜索</div>
          </template>
        </van-search>
      </van-cell>
    </van-sticky>
    <div>
      <RowTabs
        v-if="!loading && +config.showStyle === 1"
        :active="state.currentTab"
        :tabs="state.tabs"
        :list="rowDatas"
        @update:active="(v:string) => state.currentTab = v"
        @preview="previewFile"
      />
      <div v-if="loading" class="tac" style="margin-top: 50px"><van-loading type="spinner" /></div>
      <Card v-if="!loading && +config.showStyle === 2" :list="state.cardDatas" @preview="previewFile" />
      <ProEmpty v-if="!loading && !state.cardDatas.length" title="没有找到产品资料" style="margin-top: 40px" />
    </div>
    <ProPopup
      v-model:show="currentFile.show"
      class="pre-file-wrap"
      :title="currentFile.attachmentName"
      position="bottom"
      :close-on-click-overlay="false"
      :style="{ overflow: 'hidden' }"
      :header-style="{
        paddingRight: '40px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        paddingTop: '4px',
      }"
      @close="resetFile"
    >
      <div class="review-pdf">
        <ProFilePreview
          :is-iframe="false"
          :content="currentFile.attachmentContent"
          :type="getFileType(currentFile.attachmentSource, currentFile.attachmentContent)"
        ></ProFilePreview>
      </div>
    </ProPopup>
  </div>
</template>
<script lang="ts" setup name="ProductLib">
import { useRoute } from 'vue-router';
// import { isMobile } from 'vant/lib/utils';
import { queryProductBoxConfig, riskAttachmentList } from '@/api/modules/productLib';
import useDictData from '@/hooks/useDictData';
import TypeFilter from './components/TypeFilter.vue';
import Card from './components/Card.vue';
import RowTabs from './components/RowTabs.vue';
import { getFileType } from '@/views/baseInsurance/utils';
import { watermark, clearMark } from '@/utils/watermark';
import { LIAN_USER_KEY } from '@/utils/native';
import { sessionStore } from '@/hooks/useStorage';

interface QueryData {
  preview: boolean;
  insurerCode: string;
  [key: string]: string | number;
}
const route = useRoute();
const { preview = false, insurerCode = 'lianlife' } = route.query as QueryData;

const state = reactive({
  rowDataMap: {},
  cardDatas: [],
  tabs: [],
  currentTab: '',
});
const rowDatas = computed(() => {
  console.log('rowDatas', state.rowDataMap, state.tabs, state.currentTab);
  return state.rowDataMap[state.currentTab];
});
const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
const config = ref({
  id: '',
  insurerCode: 'lianlife',
  showStyle: 1, // 展示方式:1、平铺式 ， 2、卡片式
  materialCategoryShowStyle: 1, // 类别展示方式：1、主附险 2、险种类别 3、长短线
  riskName: '', // 过滤关键字
  showStyleDetails: [],
  isShowStopSellingLabel: 'Y',
  showCategoryIds: [],
  showCategoryName: [],
  showStyleDetailName: [],
});
const loading = ref(true);
const getConfig = (callback = () => {}) => {
  queryProductBoxConfig({ insurerCode }).then((res) => {
    console.log('获取配置成功', res);
    config.value = res.data;
    config.value.riskName = ''; // 初始
    state.currentTab = state.tabs?.[0];
    // config.value.showStyle = 1;
    callback && callback?.();
  });
};
const getRiskAttachment = () => {
  loading.value = true;
  riskAttachmentList({
    insurerCode,
    materialCategoryShowStyle: config.value.materialCategoryShowStyle, // 展示类型 主附险、长短险、寿险/重疾
    showStyle: config.value.showStyle, // 1 平铺 2 card
    riskName: config.value.riskName, // 搜索关键字
    riskType: config.value.riskType,
    categoryId: config.value.showCategoryIds,
    showStyleDetails: config.value.showStyleDetails,
  })
    .then((res) => {
      const { attachmentListResMap, attachmentDetailVOS } = res.data || {
        attachmentListResMap: {},
        attachmentDetailVOS: [],
      };
      state.rowDataMap = {
        ...attachmentListResMap,
      };
      const originTabs = Object.keys(attachmentListResMap);
      state.tabs = config.value.showCategoryName?.filter((i: string) => originTabs.includes(i));
      state.cardDatas = attachmentDetailVOS;
      console.log('state.rowDatas', rowDatas);
    })
    .finally(() => {
      loading.value = false;
    });
};
const getData = () => {
  if (config.value.id) {
    getRiskAttachment();
  } else {
    getConfig(() => {
      getRiskAttachment();
    });
  }
};

const currentFile = ref({
  attachmentName: '',
  attachmentContent: '',
  attachmentSource: 1,
  show: false,
});
// 客户销售人员信息
const agentInfo = reactive({ name: '测试水印', agentCode: '1234' });
const previewFile = (file: {}) => {
  console.log('文件预览', agentInfo);
  currentFile.value = { ...file, show: true };
  // 添加水印
  watermark({
    watermark_txt: `${agentInfo.name}\r\n${agentInfo.agentCode}`,
    watermark_color: '#333',
    watermark_angle: 30,
    watermark_width: 100,
    watermark_height: 60,
  });
};
const resetFile = (file: {}) => {
  console.log('关闭文件预览');
  clearMark();
  currentFile.value = {
    attachmentName: '',
    attachmentContent: '',
    attachmentSource: 1,
    show: false,
  };
};
const goPay = () => {
  window.open(
    'https://pipay.pingan.com/pc/#/cpcpayPc?cpcNoticeNo=80231117020947542742&paySessionId=ec5f5e56792111eea016b4055d1752dd',
    '平安支付',
    'width=960, height=900, top=0, left=0, titlebar=no, menubar=no, scrollbars=yes, resizable=yes, status=no, , toolbar=no, location=no',
  );
};
onMounted(() => {
  if (preview) {
    window.addEventListener(
      'message',
      (e) => {
        console.log('子应用收到的数据', e.data);
        const data = JSON.parse(e.data);
        if (typeof data === 'object') {
          config.value = {
            ...config.value,
            ...JSON.parse(e.data),
          };
          state.currentTab = state.tabs?.[0];
          getRiskAttachment();
        }
        console.log('合并后的config:', config.value);
      },
      false,
    );
  } else {
    getConfig();
  }
  const agent = sessionStore.get(LIAN_USER_KEY);
  if (agent) {
    agentInfo.name = agent.name;
    agentInfo.agentCode = agent.agentCode;
  }
  setTimeout(() => {
    getData();
  }, 1000);
});
</script>
<style lang="scss" scoped>
.page-product-lib {
  padding-bottom: 100px;
  overflow-y: auto;
  background-color: var(--zaui-global-bg);
}
:deep(.van-search__content.van-search__content--round) {
  padding-left: 160px;
}
</style>
