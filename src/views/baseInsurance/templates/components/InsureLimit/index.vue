<template>
  <div class="com-insure-limit">
    <ProCell
      v-for="(item, index) in limitList"
      :key="index"
      :title="item.conditionName"
      :content="item.conditionValue"
    ></ProCell>
  </div>
</template>

<script lang="ts" setup name="insureLimit">
import { withDefaults } from 'vue';

interface Props {
  dataSource: any[];
}

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => [],
});

const limitList = ref<any[]>([]);

watch(
  () => props.dataSource,
  () => {
    limitList.value = (props.dataSource?.[0]?.data || []).filter((item) => item.conditionValue);
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scope>
.com-insure-limit {
  padding: 0 30px;
  background-color: #ffffff;
  .com-cell-wrapper {
    min-height: 106px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .left-part {
      font-size: 30px;
      font-weight: 600;
      color: #393d46;
    }
  }
}
</style>
