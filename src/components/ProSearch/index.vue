<template>
  <div class="search-wrap">
    <van-search
      v-model="searchValue"
      placeholder="请输入"
      shape="round"
      class="search"
      clear-trigger="always"
      clearable
      :="$attrs"
      :show-action="!!searchValue"
      @search="onSearch"
      @cancel="onSearch"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup name="search">
import { withDefaults } from 'vue';

const props = withDefaults(
  defineProps<{
    shape: '';
    modelValue: string;
  }>(),
  {
    modelValue: '',
  },
);

const emits = defineEmits(['search']);

const searchValue = computed(() => props.modelValue);

const onSearch = () => {
  emits('search', searchValue);
};
</script>

<style lang="scss" scoped>
.search-wrap {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #ffffff;
  padding: 0 30px;
  :deep(.van-search) {
    .van-field__body {
      width: 100%;
      .van-field__control {
        width: 100%;
        margin: 0;
        padding: 8px 0;
      }
    }
  }
  :deep(.search) {
    width: 100%;
    min-height: 56px;
    line-height: 56px;
    padding: 16px 0;
    .van-search__content {
      background: #f4f5f7;
      .van-cell {
        padding: 0;
        .van-field__left-icon {
          font-size: 18px;
          font-weight: bold;
        }
        .van-field__clear {
          margin-right: unset;
        }
      }
    }
  }
}
</style>
