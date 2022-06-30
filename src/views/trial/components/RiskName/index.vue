<template>
  <div class="risk-title">
    <VanCell>
      <template #title>
        <div class="left-content">
          <div :class="riskType === 1 ? 'main-risk' : 'minor-risk'">{{ riskType === 1 ? '主' : '附' }}</div>
          <div class="risk-name">{{ name }}</div>
        </div>
        <div v-if="ctx.$slots.default" class="right-content">
          <slot></slot>
        </div>
        <!-- <ZaSvg
          v-if="hasDelete"
          style="width: 16px; height: 16px"
          name="delete"
          color="#0D6EFE"
          @click="handleClick(riskId)"
        ></ZaSvg> -->
      </template>
    </VanCell>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, getCurrentInstance, computed } from 'vue';

const { ctx } = getCurrentInstance();

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

const emits = defineEmits(['deleteId']);
const handleClick = (id: number | string) => {
  emits('deleteId', id);
};
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
          margin-right: 10px;
          width: 40px;
          height: 40px;
          background-color: #0d6efe;
          font-size: 28px;
          font-weight: 400;
          color: #ffffff;
          line-height: 40px;
          text-align: center;
          border-radius: 8px;
        }
        .minor-risk {
          margin-right: 10px;
          // margin-right: var(--zaui-space-card);
          width: 40px;
          height: 40px;
          background-color: #0d6efe;
          font-size: 28px;
          font-weight: 400;
          color: #ffffff;
          line-height: 40px;
          text-align: center;
          border-radius: 8px;
        }
        .risk-name {
          width: 540px;
          height: 42px;
          font-size: 30px;
          font-weight: 600;
          color: #333333;
          line-height: 42px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .right-content {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
