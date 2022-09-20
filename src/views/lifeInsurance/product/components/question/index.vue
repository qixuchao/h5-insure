<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 11:30:20
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-20 11:25:53
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/lifeInsurance/product/components/question/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-question">
    <Item v-for="(item, index) in displayList" :key="index" :question="item.title" :answer="item.desc" />
    <div v-if="list.length > 4" class="show-more" @click="handleShowMore">
      {{ showMore ? '收起' : '展开' }} <ProSvg name="down" :class="['icon', { showMore }]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import ProSvg from '@/components/ProSvg/index.vue';
import Item from './item.vue';

const props = defineProps({
  list: {
    type: Array as () => Array<{ title: string; desc: string }>,
    default: () => [],
  },
});

const [showMore, toggle] = useToggle(false);

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
