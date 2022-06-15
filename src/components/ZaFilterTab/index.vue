<template>
  <div class="com-tab-filter" :class="[filterClass || '']">
    <div class="article-mid">
      <div class="article-tag">
        <div
          v-for="(item, index) in tagList"
          :key="index"
          class="tag-item"
          :class="{ checked: indexCheck == index }"
          @click="onClickTag(item.id, index)"
        >
          <div class="tag-out" :class="{ checked: indexCheck == index }">
            <div class="tag-item-text" :class="{ checked: indexCheck == index }">{{ item.labelCategoryName }}</div>
          </div>
          <div class="trianele-out"><div :class="{ triangle: indexCheck == index }"></div></div>
        </div>
      </div>
      <div v-if="filter" class="filter" @click="openPop">
        <div class="shadow"></div>
        <div class="text">筛选</div>
        <ZaSvg name="filter-1" />
      </div>

      <van-popup
        :show="isPopShow"
        position="right"
        close-on-click-overlay
        :style="popupStyle || { width: '80%', height: '100%' }"
        @click-overlay="closePop"
      >
        <div v-if="slotFilter" class="search-filter">
          <slot name="filter"></slot>
        </div>
        <div v-else class="popup-inner">
          <div class="popup-title">全部分类</div>
          <div class="popup-tag-out">
            <div
              v-for="(popitem, popindex) in tagList"
              :key="popindex"
              class="popup-tag-item"
              :class="{ checked: indexCheck == popindex }"
              @click="onPopTagClick(popitem.id, popindex)"
            >
              <div class="pop-tag" :class="{ checked: indexCheck == popindex }">{{ popitem.labelCategoryName }}</div>
            </div>
          </div>
        </div>
      </van-popup>
      <!-- <div class="divider"></div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import './index.scss';
import { useSlots } from 'vue';
import { usePopup } from '@/hooks';
import ZaSvg from '../ZaSvg/index.vue';

const props = defineProps({
  tagList: {
    type: Array,
    default: () => [],
  },
  filter: {
    type: Boolean,
    default: false,
  },
  popupStyle: {
    type: Object,
    default: () => {},
  },
  filterClass: {
    type: String,
    default: '',
  },
});
const { isPopShow, openPop, closePop } = usePopup(false);
const emit = defineEmits(['currentIndex']);

// 判断slot是否有值
const slotFilter = !!useSlots().filter;

const indexCheck = ref(0);
const onClickTag = (id: number, index: number) => {
  indexCheck.value = index;
  emit('currentIndex', id);
};
const onPopTagClick = (id: number, index: number) => {
  onClickTag(id, index);
  closePop();
};
</script>
