<template>
  <div class="card-title">
    <VanCell>
      <!-- 险种名称 -->
      <template v-if="isShow" #title>
        <div class="risk-title">
          <div class="left-content">
            <div :class="riskType === 1 ? 'main-risk' : 'minor-risk'">{{ riskType === 1 ? '主' : '附' }}</div>
            <div class="risk-name">{{ title }}</div>
          </div>
          <div class="right-content">
            <slot name="default"></slot>
          </div>
        </div>
      </template>
      <!-- 区域标题 -->
      <template v-else #title>
        <div class="pic" />
        <div class="pic-title">{{ title }}</div>
      </template>
    </VanCell>
    <!-- <VanCollapse v-else v-model="activeNames">
      <VanCollapseItem name="1">
        <template #title>
          <ProSvg name="line" color="var(--van-primary-color)"></ProSvg>
          <h4>{{ title }}</h4>
        </template>
        <template v-if="collapse">
          <slot />
        </template>
      </VanCollapseItem>
    </VanCollapse> -->
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  riskType: {
    type: Number,
    default: 0,
  },
});

const { ctx } = getCurrentInstance();

const isShow = computed(() => {
  return props.riskType === 1 || props.riskType === 2;
});
</script>

<style lang="scss" scoped>
.card-title {
  position: relative;
  padding: 14px 0;
  &::after {
    content: ' ';
    width: 720px;
    height: 2px;
    background-color: $zaui-line;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 30px;
    z-index: 1;
  }
  :deep(.van-cell__title) {
    display: flex;
    align-items: center;
    .pic {
      margin-right: 16px;
      width: 8px;
      height: 28px;
      background: $zaui-brand;
      border-radius: 4px;
    }
    .pic-title {
      font-size: $zaui-font-size-md2;
      font-weight: bold;
      color: $zaui-text-title;
    }
    .risk-title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-content {
        display: flex;
        align-items: center;
        .main-risk {
          margin-right: 10px;
          width: 40px;
          line-height: 40px;
          padding: 0 6px;
          background-color: $zaui-brand;
          font-size: 28px;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          border-radius: 4px;
        }
        .minor-risk {
          margin-right: 10px;
          // margin-right: var(--zaui-space-card);
          width: 40px;
          background-color: $zaui-price;
          font-size: 28px;
          line-height: 40px;
          padding: 0 6px;
          font-weight: 400;
          color: #ffffff;
          line-height: 40px;
          text-align: center;
          border-radius: 4px;
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
