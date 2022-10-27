<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-17 16:00
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-17 16:00
 * @Description: 审核版首页
-->
<template>
  <ProScrollTab class="tabs" :list="tabList" sticky scrollspy>
    <template #tab1>
      <slot name="form" />
    </template>
    <template #tab2>
      <div class="spec">
        <img
          v-for="(item, index) in props.detail?.tenantProductInsureVO?.spec || []"
          :key="index"
          :src="item"
          class="detail-img"
        />
        <ProDivider />
      </div>
      <ProCard title="产品资料">
        <template #subTitle>
          <div class="sub-title">产品资料文件详情可手动放大，以便您更清晰查阅内容。</div>
        </template>
        <div class="tab-1-content">
          请查看
          <ProPDFviewer
            v-for="(item, index) in detail?.tenantProductInsureVO?.attachmentVOList || []"
            :key="index"
            class="file-name"
            :title="`《${item.attachmentName}》`"
            :content="item.attachmentUri"
          >
            >
            <span v-if="index !== (detail?.tenantProductInsureVO?.attachmentVOList || []).length - 1" class="dun-hao"
              >、</span
            >
          </ProPDFviewer>
        </div>
      </ProCard>
    </template>
    <template #tab3>
      <ProCard title="理赔流程">
        <ProTimeline :list="props.detail?.tenantProductInsureVO?.settlementProcessList" />
      </ProCard>
    </template>
    <template #tab4>
      <ProCard title="常见问题">
        <Question :list="props.detail?.tenantProductInsureVO?.questionList" />
      </ProCard>
    </template>
  </ProScrollTab>
</template>

<script lang="ts" setup>
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
  {
    title: '常见问题',
    slotName: 'tab4',
  },
]);
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
