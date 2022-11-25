<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-17 16:00
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-24 23:28:55
 * @Description: 审核版首页
-->
<template>
  <ProScrollTab ref="scrollRef" class="tabs" :list="tabList" sticky scrollspy>
    <template #tab1>
      <div class="spec">
        <img
          v-for="(item, index) in props.detail?.tenantProductInsureVO?.spec || []"
          :key="index"
          :src="item"
          class="detail-img"
        />
        <ProDivider />
      </div>
      <!-- <ProCard title="产品资料">
        <template #subTitle>
          <div class="sub-title">产品资料文件详情可手动放大，以便您更清晰查阅内容。</div>
        </template>
        <div class="tab-1-content">
          请查看
          <ProPDFviewer
            v-for="(item, index) in detail?.tenantProductInsureVO?.attachmentVOList || []"
            :key="index"
            :type="queryFilePerfix(item.attachmentUri)"
            class="file-name"
            :title="getFileName(item.attachmentName)"
            :content="item.attachmentUri"
          >
            >
            <span v-if="index !== (detail?.tenantProductInsureVO?.attachmentVOList || []).length - 1" class="dun-hao"
              >、</span
            >
          </ProPDFviewer>
        </div>
      </ProCard> -->
    </template>
    <template #tab2>
      <ProCard title="理赔流程">
        <ProTimeline
          v-if="props.detail?.tenantProductInsureVO?.settlementProcessVO.settlementProcessType === CLAIM_TYPE_ENUM.WORD"
          :list="props.detail?.tenantProductInsureVO?.settlementProcessVO?.settlementProcessList"
        />
        <div v-else class="spec">
          <img
            v-for="(item, index) in props.detail?.tenantProductInsureVO?.settlementProcessVO
              ?.settlementProcessPicList || []"
            :key="index"
            :src="item"
            class="detail-img"
          />
          <ProDivider />
        </div>
      </ProCard>
      <ProCard title="常见问题">
        <Question :list="props.detail?.tenantProductInsureVO?.questionList" />
      </ProCard>
    </template>
    <template #tab3>
      <slot name="form" />
    </template>
    <!-- <template #tab4>

    </template> -->
  </ProScrollTab>
</template>

<script lang="ts" setup>
import { Ref } from 'vue-demi';
import { CLAIM_TYPE_ENUM } from '@/common/constants/infoCollection';
import ProCard from '@/components/ProCard/index.vue';
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

const tabList = ref<Array<{ title: string; slotName: string }>>([
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
  // {
  //   title: '常见问题',
  //   slotName: 'tab4',
  // },
]);

const queryFilePerfix = (fileUrl: string) => {
  const fileType: string = fileUrl.split('?')[0];
  const index = fileType.lastIndexOf('.');
  return fileType.substring(index + 1);
};

// const queryFileType = (fileUrl: string) => {
//   const fileType = queryFilePerfix(fileUrl);
//   if ('pdf' || 'Pdf') return 'pdf';
//   if('')
// };

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
.spec {
  img {
    width: 100%;
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
