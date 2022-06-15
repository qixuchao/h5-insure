<template>
  <div class="item" @click="handleClick">
    <span class="item-checked">
      <!-- <img src="../../../assets/images/poster/checked.png" alt="" /> -->
      <img :src="getIconUrl('poster.checked')" alt="" :style="{ display: `${props.checked ? 'inherit' : 'none'}` }" />
    </span>
    <div class="item-left">
      <div v-if="data.productImgText" class="item-title item-title-type1">{{ data.productImgText }}</div>
      <div class="ig" :style="{ backgroundImage: `url(${data.productImg})` }"></div>
    </div>
    <div class="item-right">
      <div class="item-right-name">{{ data.productName }}</div>
      <div class="item-right-sec">{{ data.productSummary }}</div>
      <div class="item-right-bottom">
        <div>
          <span v-for="(item, i) in data.productLabel" :key="i" class="tag">{{ item }}</span>
        </div>
        <div>
          {{ data.productPrice }}
          <!-- <span class="ft">{{ data.productPrice }}</span> <span></span>元起 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  checked: {
    type: Boolean,
  },
});
const { data } = toRefs(props);
const emit = defineEmits(['on-click']);

const handleClick = () => {
  emit('on-click', props.data);
};
</script>

<style lang="scss">
.item {
  background: #fafafd;
  border-radius: 20px;
  display: flex;
  padding: 30px 20px;
  margin-bottom: 20px;
  position: relative;
  &-checked {
    width: 39px;
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
    img {
      width: 39px;
      height: 40px;
    }
  }
  &-left {
    width: 178px;
    height: 205px;
    border-radius: 12px;
    .ig {
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 161px;
    }
  }
  &-title {
    height: 44px;
    border-radius: 12px 12px 0 0;
    text-align: center;
    font-size: $zaui-font-size-sm;
    color: #fff;
    line-height: 44px;
    &-type1 {
      background: #ffa5a5;
      text-shadow: 0 1px 2px rgba(220, 0, 0, 0.5);
    }
    &-type2 {
      background: #ffd275;
      text-shadow: 0 1px 2px #fbaf09;
    }
    &-type3 {
      background: #8ecff8;
      text-shadow: 0 1px 2px #57abde;
    }
    &-type4 {
      background: #c8db6d;
      text-shadow: 0 1px 2px #a6bf2f;
    }
  }
  &-right {
    flex: 1;
    margin-left: 16px;
    &-name {
      font-size: $zaui-font-size-lg;
      font-weight: 500;
      color: #343434;
    }
    &-sec {
      font-size: $zaui-font-size-sm;
      color: #909090;
      line-height: 33px;
      margin-top: 12px;
    }
    &-bottom {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      font-size: $zaui-font-size-sm;
      color: #ea4742;
      font-weight: 400;
      align-items: center;
    }
    .tag {
      margin-right: 16px;
      width: 116px;
      height: 44px;
      border-radius: 8px;
      color: #ff6600;
      background-color: #ffeee7;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: $zaui-font-size-sm;
      margin-right: 16px;
    }
    .ft {
      font-size: 40px;
      font-weight: normal;
      color: #ea4742;
    }
  }
}
</style>
