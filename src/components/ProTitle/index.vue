<template>
  <div class="card-title">
    <VanCell v-if="!collapse">
      <template #title>
        <ZaSvg name="line" color="var(--van-primary-color)"></ZaSvg>
        <h4>{{ title }}</h4>
      </template>
    </VanCell>
    <VanCollapse v-else v-model="activeNames">
      <VanCollapseItem name="1">
        <template #title>
          <ZaSvg name="line" color="var(--van-primary-color)"></ZaSvg>
          <h4>{{ title }}</h4>
        </template>
        <template v-if="collapse">
          <slot />
        </template>
      </VanCollapseItem>
    </VanCollapse>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: () => '',
  },
  collapse: {
    type: Boolean,
    default: false,
  },
});

const activeNames = ref(['1']);
</script>

<style lang="scss" scoped>
.card-title {
  ::v-deep .van-cell__title {
    display: flex;
    align-items: center;
  }

  ::v-deep .van-collapse-item__content {
    // padding: var(--van-collapse-item-content-padding) 0;
    padding: 0;
  }

  .collapse-title {
    font-size: 28px;
    font-weight: 700;
  }
}
</style>
