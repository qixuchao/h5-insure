<!--
 * @Author: za-wangyuanli wangyuanli@zhongan.io
 * @Date: 2022-09-14 16:50:33
 * @LastEditors: za-wangyuanli wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-14 16:50:33
 * @Description: 为了解决，VanTab 滚动导航, 切换tab时，选中的tab闪烁问题
 * 主要实现：监听页面滚动，高亮tab
-->

<template>
  <div class="tabs">
    <van-sticky>
      <div class="van-tabs">
        <div class="tab-list">
          <a
            v-for="(item, index) in list"
            :key="index"
            :class="['tab-title', { active: active === index }]"
            :title="item.title"
            @click="handleClickTab(item.slotName)"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
    </van-sticky>
    <div class="tab-content">
      <div v-for="(item, index) in list" :id="item.slotName" :key="index">
        <slot v-if="item.slotName" :name="item.slotName" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ListProps {
  title: string;
  slotName: string;
}

const props = defineProps({
  list: {
    type: Array as () => Array<ListProps>,
    default: () => [],
  },
});

const active = ref<number>(0);
const scrollHeight = ref<Array<number>>([]);

const handleClickTab = (id: string) => {
  const toScroll = document.getElementById(id)?.offsetTop as number;
  console.log(toScroll);
  document.documentElement.scrollTop = toScroll;
};

const getScrollHeight = () => {
  const offsetTop: Array<number> = [];
  props.list.forEach((item) => {
    offsetTop.push(document.getElementById(item.slotName)?.offsetTop as number);
  });
  // 页面滚动的时候，内容还没完全加载完成，如果获取到的不一样，在更新数据
  if (scrollHeight.value[0] !== offsetTop[0]) {
    scrollHeight.value = offsetTop;
  }
};

const getActiveIndex = (current: number) => {
  let index = 0;

  scrollHeight.value.forEach((top: number, i: number) => {
    // 获取到的tab内容比实际少了些
    if (current >= top - 5) {
      index = i;
    }
  });

  return index;
};

const handleScroll = () => {
  getScrollHeight();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  const activeIndex = getActiveIndex(scrollTop);

  if (active.value !== activeIndex) {
    active.value = activeIndex;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.tab-list {
  background: #fff;
  display: flex;
  justify-content: space-between;
  height: 88px;
  .tab-title {
    flex: 1;
    text-align: center;
    line-height: 88px;
    color: $zaui-text;
    font-size: var(--van-tab-font-size);
    &.active {
      color: $primary-color;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        z-index: 9999999999;
        bottom: 0;
        left: 50%;
        width: 56px;
        height: 8px;
        margin-left: -28px;
        border-radius: 8px;
        background-color: $primary-color;
      }
    }
  }
}
</style>
