<template>
  <div class="insurance-notification-information">
    <div class="insurance-notification-information-title">{{ title }}</div>
    <div class="insurance-notification-information-collapse">
      <van-collapse v-model="activeList">
        <van-collapse-item
          v-for="(item, index) in data"
          :key="index"
          :title="item.questionnaireName || index"
          :name="index"
        >
          <div class="insurance-notification-information-content">
            <ProFilePreview v-if="item" :type="item.contentType" is-view :content="item" :params="{}"> </ProFilePreview>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import ProFilePreview from '@/components/ProFilePreview/index.vue';

interface Props {
  title: string;
  data: any[];
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  data: () => [],
});
const activeList = ref<string[]>([]);
const questionList = ref([]);

watch(
  () => props.data,
  () => {},
  {
    immediate: true,
    deep: true,
  },
);
</script>
<style lang="scss" scoped>
.insurance-notification-information {
  padding: 30px;
  .insurance-notification-information-title {
    font-size: 30px;
    font-weight: 500;
    color: #393d46;
    line-height: 42px;
  }
  .insurance-notification-information-collapse {
    margin-top: 30px;
    margin-left: -35px;
  }
  .insurance-notification-information-content {
    word-wrap: break-word;
    white-space: normal;
  }
}
</style>
