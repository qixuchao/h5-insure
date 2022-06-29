<template>
  <div class="risk-title">
    <VanCell>
      <template #title>
        <div class="left-content">
          <div :class="riskType === 1 ? 'main-risk' : 'minor-risk'">{{ riskType === 1 ? '主' : '附' }}</div>
          <h4>{{ name }}</h4>
        </div>
        <ZaSvg
          v-if="riskType === 2"
          style="width: 18px; height: 18px"
          name="delete"
          color="var(--van-primary-color)"
        ></ZaSvg>
      </template>
    </VanCell>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  riskType: {
    type: Number,
    default: 1,
  },
  name: {
    type: String,
    default: () => '',
  },
});
</script>

<style lang="scss" scoped>
.risk-title {
  .van-cell {
    ::v-deep .van-cell__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-content {
        display: flex;
        align-items: center;
        .main-risk {
          margin-right: var(--zaui-space-card);
          width: 36px;
          height: 36px;
          line-height: 36px;
          color: #fff;
          text-align: center;
          border-radius: 8px;
          background-color: var(--van-primary-color);
        }
        .minor-risk {
          margin-right: var(--zaui-space-card);
          width: 36px;
          height: 36px;
          line-height: 36px;
          color: #fff;
          text-align: center;
          border-radius: 8px;
          background-color: var(--zaui-price);
        }
      }
    }
  }
}
</style>
