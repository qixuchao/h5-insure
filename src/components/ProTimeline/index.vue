<template>
  <div class="com-time-line">
    <div
      v-for="(item, index) in displayList"
      :key="index"
      :class="['item', { last: index === displayList.length - 1 }]"
    >
      <div class="left">
        <div class="num">{{ index + 1 }}</div>
      </div>
      <div class="right">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
    <div v-if="list.length > 4" class="show-more" @click="handleShowMore">
      {{ showMore ? '收起' : '展开' }} <ProSvg name="down" :class="['icon', { showMore }]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import ProSvg from '@/components/ProSvg/index.vue';

const [showMore, toggle] = useToggle(false);

const handleShowMore = () => {
  toggle();
};

const props = defineProps({
  list: {
    type: Array as () => Array<{ title: string; desc: string }>,
    default: () => [],
  },
});

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
.com-time-line {
  margin: 40px 0;
  .item {
    display: flex;
    &.last {
      .left {
        .num {
          &::after {
            display: none;
          }
        }
      }
    }
    .left {
      flex: 0 0 40px;
      position: relative;
      .num {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(13, 110, 254, 0.16);
        border: 1px solid #0d6efe;
        font-size: 28px;
        font-weight: 500;
        color: $zaui-brand;
        border-radius: 20px;
        &::after {
          content: ' ';
          position: absolute;
          top: 40px;
          left: 20px;
          width: 0;
          height: calc(100% - 40px);
          border-left: 1px dashed rgba(13, 110, 254, 0.23);
          border-right: 1px dashed rgba(13, 110, 254, 0.23);
        }
      }
    }
    .right {
      margin-left: 20px;
      .title {
        font-size: 28px;
        font-weight: 500;
        color: #393d46;
        line-height: 36px;
      }
      .desc {
        margin-top: 12px;
        padding-bottom: 50px;
        font-size: 26px;
        color: #99a9c0;
        line-height: 38px;
      }
    }
  }
  .show-more {
    margin: 30px 0;
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
