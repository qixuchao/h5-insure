<!--
 * @Author: zhaopu
 * @Date: 2022-11-26 12:09:26
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-15 15:57:22
 * @Description:
-->
<template>
  <div class="com-question">
    <van-collapse v-model="activeNames">
      <Item
        v-for="(item, index) in displayList"
        :key="index"
        :name="index.toString()"
        :question="item.title"
        :answer="item.desc"
      />
    </van-collapse>
    <div v-if="list.length > 4" class="show-more" @click="handleShowMore">
      {{ showMore ? '收起' : '展开' }} <ProSvg name="down" :class="['icon', { showMore }]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import { defineProps } from 'vue';
// import ProSvg from '@/components/ProSvg/index.vue';
// import Item from './item.vue';

const ProSvg = defineAsyncComponent(() => import('@/components/ProSvg/index.vue'));
const Item = defineAsyncComponent(() => import('./item.vue'));

const props = defineProps({
  list: {
    type: Array as () => Array<{ title: string; desc: string }>,
    default: () => [],
  },
});

const [showMore, toggle] = useToggle(false);

const activeNames = ref([]);

const handleShowMore = () => {
  toggle();
};

const displayList = computed(() => {
  if (props.list.length <= 4) {
    return props.list;
  }
  if (showMore.value) {
    return props.list;
  }
  return props.list.slice(0, 4);
});
</script>

<style lang="scss" scoped>
.com-question {
  margin-top: -7px;
  .show-more {
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: #aab9d0;
    .icon {
      margin-left: 10px;
      font-size: 20px;
      transition: transform 0.5s;
      &.showMore {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
