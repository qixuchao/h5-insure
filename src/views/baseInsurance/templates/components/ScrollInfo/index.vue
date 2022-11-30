<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-17 16:00
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-30 15:24:26
 * @Description: 审核版首页
-->
<template>
  <ProScrollTab ref="scrollRef" class="tabs" :list="tabList" sticky scrollspy>
    <template v-if="isShowTab1" #tab1>
      <div class="spec">
        <img
          v-for="(item, index) in props.detail?.tenantProductInsureVO?.spec || []"
          :key="index"
          :src="item"
          class="detail-img"
        />
        <ProDivider />
      </div>
    </template>
    <template v-if="isShowTab2_1 || isShowTab2_2" #tab2>
      <template v-if="isShowTab2_1">
        <CustomCard
          v-if="props.detail?.tenantProductInsureVO?.settlementProcessVO.settlementProcessType === CLAIM_TYPE_ENUM.WORD"
          title="理赔流程"
        >
          <ProTimeline :list="props.detail?.tenantProductInsureVO?.settlementProcessVO?.settlementProcessList" />
        </CustomCard>
        <div v-else class="spec">
          <img
            v-for="(item, index) in props.detail?.tenantProductInsureVO?.settlementProcessVO
              ?.settlementProcessPicList || []"
            :key="index"
            :src="item"
            class="detail-img"
          />
        </div>
        <ProDivider />
      </template>
      <template v-if="isShowTab2_2">
        <CustomCard title="常见问题">
          <Question :list="props.detail?.tenantProductInsureVO?.questionList" />
        </CustomCard>
        <ProDivider />
      </template>
    </template>
    <template #tab3>
      <slot name="form" />
    </template>
  </ProScrollTab>
</template>

<script lang="ts" setup>
import { Ref } from 'vue-demi';
import { CLAIM_TYPE_ENUM } from '@/common/constants/infoCollection';
import ProCard from '@/components/ProCard/index.vue';
import CustomCard from '../../../components/CustomCard/index.vue';
import ProDivider from '@/components/ProDivider/index.vue';
import ProScrollTab from '@/components/ProScrollTab/index.vue';
import ProTimeline from '@/components/ProTimeline/index.vue';
import Question from '../Question/index.vue';

const props = defineProps({
  isCheck: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    default: '',
  },
  detail: {
    type: Object,
    default: () => {},
  },
});

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

const isShowTab1 = computed(() => {
  return props.detail?.tenantProductInsureVO?.spec && props.detail?.tenantProductInsureVO?.spec.length > 0;
});

const isShowTab2_1 = computed(() => {
  const type = props.detail?.tenantProductInsureVO?.settlementProcessVO.settlementProcessType;
  if (
    (type === CLAIM_TYPE_ENUM.WORD &&
      props.detail?.tenantProductInsureVO?.settlementProcessVO?.settlementProcessList &&
      props.detail?.tenantProductInsureVO?.settlementProcessVO?.settlementProcessList.length > 0) ||
    (type === CLAIM_TYPE_ENUM.IMAGE &&
      props.detail?.tenantProductInsureVO?.settlementProcessVO?.settlementProcessPicList &&
      props.detail?.tenantProductInsureVO?.settlementProcessVO?.settlementProcessPicList.length > 0)
  ) {
    return true;
  }
  return false;
});

const isShowTab2_2 = computed(() => {
  return (
    props.detail?.tenantProductInsureVO?.questionList && props.detail?.tenantProductInsureVO?.questionList.length > 0
  );
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
