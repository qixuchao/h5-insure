<template>
  <div class="insurance-notification-information">
    <div class="insurance-notification-information-title">{{ title }}</div>
    <div class="insurance-notification-information-collapse">
      <van-collapse v-model="activeList">
        <van-collapse-item
          v-for="(item, index) in questionList"
          :key="index"
          :title="`${item.questionnaireName}${
            NOTICE_OBJECT_MAP[item.objectType] ? `( ${NOTICE_OBJECT_MAP[item.objectType]})` : ''
          }`"
          :value="item.readStatus === YES_NO_ENUM.YES ? '已读' : '未读'"
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
import { cloneDeep } from 'lodash-es';
import ProFilePreview from '@/components/ProFilePreview/index.vue';
import { YES_NO_ENUM } from '@/common/constants';
import { NOTICE_OBJECT_MAP } from '@/common/constants/notice';

console.log('NOTICE_OBJECT_MAP', NOTICE_OBJECT_MAP);

interface Props {
  title: string;
  data: any[];
  modelValue: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  data: () => [],
  modelValue: false,
});
const emits = defineEmits(['update:modelValue']);

const activeList = ref<string[]>([]);
const questionList = ref([]);

watch(
  () => activeList.value,
  (list) => {
    list.forEach((i) => {
      questionList.value[i].readStatus !== YES_NO_ENUM.YES && (questionList.value[i].readStatus = YES_NO_ENUM.YES);
    });
    const readList = questionList.value.filter((question) => question.readStatus === YES_NO_ENUM.YES);
    if (readList.length === questionList.value.length) {
      emits('update:modelValue', true);
    }
  },
  { deep: true },
);

watch(
  () => props.data,
  () => {
    questionList.value = cloneDeep(props.data);
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
<style lang="scss" scoped>
.insurance-notification-information {
  padding: 30px;
  :deep(.van-collapse-item) {
    .van-cell {
      align-items: center;
      padding-right: 0;
    }
  }
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
