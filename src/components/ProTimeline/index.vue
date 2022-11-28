<template>
  <div class="com-time-line">
    <div
      v-for="(item, index) in displayList"
      :key="index"
      :class="['item', { last: index === displayList.length - 1 }]"
    >
      <div class="left">
        <div class="num">
          <ProSvg name="time-step"></ProSvg>
          <span class="num-text">{{ index + 1 }}</span>
        </div>
        <!-- <div>
          <div class="num">{{ index + 1 }}</div>
        </div> -->
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
  margin: 40px 0 0px;
  .item {
    display: flex;
    &.last {
      .left {
        &::after {
          display: none;
        }
      }
    }
    .left {
      flex: 0 0 40px;
      position: relative;
      .num {
        width: 42px;
        height: 42px;
        position: relative;
        font-size: 28px;
        font-weight: 500;
        color: $zaui-brand;
        border: none !important;
        background: none !important;

        .svg-icon {
          display: inline-block;
          position: absolute;
          width: 32px;
          height: 32px;
          font-size: 32px;
          fill: $primary-color;
        }

        .num-text {
          display: inline-block;
          position: absolute;
          width: 15px;
          height: 32px;
          font-size: 24px;
          font-family: AppleSystemUIFont;
          color: #ffffff;
          line-height: 32px;
          left: 10px;
        }
      }
      &::after {
        content: ' ';
        position: absolute;
        top: 40px;
        left: 16px;
        width: 0;
        height: calc(100% - 50px);
        border-left: 1px dashed $primary-color;
        // border-right: 1px dashed $primary-color;
      }
    }
    .right {
      margin-left: 20px;
      .title {
        height: 42px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 42px;
      }
      .desc {
        margin-top: 12px;
        padding-bottom: 50px;
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 37px;
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
