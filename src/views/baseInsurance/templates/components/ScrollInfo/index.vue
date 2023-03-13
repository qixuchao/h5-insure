<!--
 * @Date: 2022-09-17 16:00
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-03-13 19:15:17
 * @Description: 滚动tab区域
-->
<template>
  <ProScrollTab ref="scrollRef" class="tabs" :list="tabList" sticky scrollspy>
    <template v-if="isShowTab1" #tab1>
      <div class="spec">
        <template v-for="(item, index) in dataSource.SPECIAL_FEATURE?.spec || []" :key="index">
          <Suspense>
            <van-image :key="index" class="detail-img" width="100%" :src="item" />
            <template #fallback>
              <ProSvg name="img" style="font-size: 40px; margin: 10px auto; display: block" />
            </template>
          </Suspense>
        </template>
        <ProDivider />
      </div>
    </template>
    <template v-if="isShowTab2_1 || isShowTab2_2 || isShowTab2_3 || isShowTab2_4" #tab2>
      <template v-if="isShowTab2_1">
        <CustomCard v-if="dataSource.CLAIM_FLOW.processCaseType === CLAIM_TYPE_ENUM.WORD" title="理赔说明">
          <div v-dompurify-html="dataSource.CLAIM_FLOW?.processContent"></div>
        </CustomCard>
        <div v-else class="spec">
          <Suspense>
            <van-image
              v-for="(item, index) in dataSource.CLAIM_FLOW?.processCasePicList || []"
              :key="index"
              width="100%"
              :src="item"
              class="detail-img"
            />
            <template #fallback>
              <ProSvg name="img" style="font-size: 40px; margin: 10px auto; display: block" />
            </template>
          </Suspense>
        </div>
        <ProDivider />
      </template>
      <template v-if="isShowTab2_2">
        <CustomCard v-if="dataSource.CLAIM_CASE?.claimCaseType === CLAIM_TYPE_ENUM.WORD" title="理赔案例">
          <div v-dompurify-html="dataSource.CLAIM_CASE?.claimContent"></div>
        </CustomCard>
        <div v-else class="spec">
          <Suspense>
            <van-image
              v-for="(item, index) in dataSource.CLAIM_CASE?.claimCasePicList || []"
              :key="index"
              width="100%"
              :src="item"
              class="detail-img"
            />
            <template #fallback>
              <ProSvg name="img" style="font-size: 40px; margin: 10px auto; display: block" />
            </template>
          </Suspense>
        </div>
        <ProDivider />
      </template>
      <template v-if="isShowTab2_3">
        <CustomCard title="投保须知">
          <Question :list="dataSource.ISSUE_NOTICE" />
        </CustomCard>
        <ProDivider />
      </template>
      <template v-if="isShowTab2_4">
        <CustomCard title="常见问题">
          <Question :list="dataSource.FAQ" />
        </CustomCard>
        <ProDivider />
      </template>
    </template>
    <template #tab3>
      <slot name="form" />
    </template>
  </ProScrollTab>
</template>

<script lang="ts" setup name="ScrollInfo">
import { Ref, Suspense, withDefaults } from 'vue';
import { CLAIM_TYPE_ENUM } from '@/common/constants/infoCollection';
import type { TenantProductInsureVO as ProductSaleConfig } from '@/api/modules/product.data';
// import CustomCard from '../../../components/CustomCard/index.vue';
// import ProDivider from '@/components/ProDivider/index.vue';
// import ProScrollTab from '@/components/ProScrollTab/index.vue';
// import ProTimeline from '@/components/ProTimeline/index.vue';
// import Question from '../Question/index.vue';

const ProScrollTab = defineAsyncComponent(() => import('@/components/ProScrollTab/index.vue'));
const ProTimeline = defineAsyncComponent(() => import('@/components/ProTimeline/index.vue'));
const ProDivider = defineAsyncComponent(() => import('@/components/ProDivider/index.vue'));
const CustomCard = defineAsyncComponent(() => import('../../../components/CustomCard/index.vue'));
const Question = defineAsyncComponent(() => import('../Question/index.vue'));

/**
 * 本组件是产品详情的滚动区域
 * props中 特色、理赔流程、常见问题
 */
const props = withDefaults(
  defineProps<{
    dataSource: any;
  }>(),
  {
    dataSource: () => ({
      SPECIAL_FEATURE: [], // 产品特色
      CLAIM_CASE: {}, // 理赔案例
      CLAIM_FLOW: [], // 理赔流程
      ISSUE_NOTICE: [], // 投保须知
      FAQ: [], // 常见问题
    }),
  },
);

const { dataSource } = toRefs(props);

const scrollRef = ref<Ref>();

const initTabList = ref<Array<{ title: string; slotName: string }>>([
  {
    title: '产品亮点',
    slotName: 'tab1',
  },
  {
    title: '理赔说明',
    slotName: 'tab2',
  },
  {
    title: '我要投保',
    slotName: 'tab3',
  },
]);
// 产品亮点tab展示
const isShowTab1 = computed(() => {
  return dataSource.value.SPECIAL_FEATURE?.spec?.length;
});

// 理赔说明-理赔流程tab展示
const isShowTab2_1 = computed(() => {
  const type = dataSource.value?.CLAIM_FLOW?.processType;
  console.log('type', type);
  if (
    (type === CLAIM_TYPE_ENUM.WORD && dataSource.value.CLAIM_FLOW?.processContent) ||
    (type === CLAIM_TYPE_ENUM.IMAGE && dataSource.value.CLAIM_FLOW?.processPicList?.length)
  ) {
    return true;
  }
  return false;
});

const isShowTab2_2 = computed(() => {
  const type = dataSource.value.CLAIM_CASE.claimCaseType;
  if (
    (type === CLAIM_TYPE_ENUM.WORD && dataSource.value.CLAIM_CASE?.claimContent) ||
    (type === CLAIM_TYPE_ENUM.IMAGE && dataSource.value.CLAIM_CASE?.claimCasePicList?.length)
  ) {
    return true;
  }
  return false;
});

const isShowTab2_3 = computed(() => {
  return dataSource.value?.FAQ?.length;
});

const isShowTab2_4 = computed(() => {
  return dataSource.value?.FAQ?.length;
});

const tabList = computed(() => {
  let tempTabList = [...initTabList.value];
  if (!isShowTab1.value) tempTabList = tempTabList.filter((e) => e.slotName !== 'tab1');
  if (!isShowTab2_1.value && !isShowTab2_2.value) tempTabList = tempTabList.filter((e) => e.slotName !== 'tab2');
  return tempTabList;
});

const getFileName = (fileName: string): string => {
  if (!fileName) return '';
  let newName = fileName;
  if (newName.indexOf('《') === -1) newName = `《${newName}`;
  if (newName.indexOf('》') === -1) newName = `${newName}》`;
  return newName;
};

const handleClickTab = () => {
  return scrollRef.value?.handleClickTab;
};

defineExpose({
  handleClickTab,
});
</script>

<style lang="scss" scoped>
.tabs {
  :deep(.tab-title) {
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
  }
  :deep(.active) {
    &::after {
      width: 48px !important;
      height: 6px !important;
      border-radius: 4px !important;
    }
  }
}
.spec {
  img {
    width: 100%;
    display: block;
  }
  .van-image__error {
    font-size: 60px;
  }
}

.sub-title {
  font-size: 26px;
  font-weight: 400;
  color: #99a9c0;
  line-height: 38px;
  margin-bottom: 10px;
}
.tab-1-content {
  font-size: 26px;
  font-weight: 400;
  color: #393d46;
  line-height: 38px;
  margin-top: 25px;
  margin-bottom: 40px;
}

// 覆盖ProTimeline样式
:deep(.com-time-line .item .left .num) {
  background: var(--van-primary-background-color);
  border: 1px solid $primary-color;
  &::after {
    border-left: 1px dashed var(--van-primary-background-color);
    border-right: 1px dashed var(--van-primary-background-color);
  }
}
</style>
