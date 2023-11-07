<template>
  <div class="com-card-data">
    <div v-for="risk in list" :key="risk.riskId" class="card">
      <div class="title">{{ risk.riskName }}<van-icon name="arrow" color="#c2c2c2" /></div>
      <div class="item-list">
        <template v-for="{ label, value } in items">
          <div v-if="value" :key="label" class="item">
            <span class="label">{{ label }}:</span> <span>{{ value }}</span>
          </div>
        </template>
      </div>
      <div class="files">
        <div v-for="file in risk?.attachmentDetailVOS" :key="file.riskId" class="file" @click="$emit('preview', file)">
          <ProSvg :name="TYPE_CONST.includes(file.categoryName) ? file.categoryName : '自定义'" />
          <div>{{ file.categoryName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="Row">
import { computed, ref, defineAsyncComponent } from 'vue';

const props = defineProps({
  list: {
    type: Array<{
      riskName: string;
      riskId: number;
      attachmentDetailVOS: Array<{ categoryName: string; attachmentContent: string; riskId: number }>;
    }>,
    default: () => [],
  },
});
const emit = defineEmits(['preview']);

const TYPE_CONST = ['产品说明书', '产品条款', '费率表', '风险告知书', '其他', '投保规则', '责任条款'];
const attachmentList = computed(() => {
  return [];
});
const items = computed(() => [
  {
    key: 'riskType',
    label: '主 附 险',
    value: '主险',
  },
  {
    key: 'insurancePeriodValues',
    label: '保障期间',
    value: '180天',
  },
  {
    key: 'paymentPeriodValues',
    label: '交费期间',
    value: '终生',
  },
  {
    key: 'riskCategory',
    label: '险种类别',
    value: '寿险',
  },
]);
</script>
<style lang="scss">
.card {
  width: 690px;
  margin: 32px auto 0;
  border-radius: 12px;
  background-color: var(--zaui-base-bg);
  padding: 30px;
  font-size: 26px;
  .title {
    font-size: 30px;
    color: #333333;
    line-height: 42px;
    height: 42px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  .item-list {
    .item {
      line-height: 44px;
      .label {
        color: var(--zaui-text-weak);
        display: inline-block;
        width: 150px;
      }
    }
  }
  .files {
    display: flex;
    flex-wrap: wrap;
    .file {
      width: 25%;
      padding: 20px;
      text-align: center;
      font-size: 26px;
      .svg-icon {
        font-size: 32px;
        margin-bottom: 16px;
        color: var(--zaui-text-weak);
      }
    }
  }
}
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: var(--zaui-brand);
  vertical-align: middle;
  margin-right: 10px;
}
</style>
