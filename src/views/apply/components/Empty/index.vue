<template>
  <div class="empty">
    <p><img :src="getIconUrl('apply.empty')" alt="" class="ig" /></p>
    <p class="p1">你还没有发布的活动哦</p>
    <p class="p2">快去创建活动 分享给你的客户吧～</p>
    <p>
      <van-button type="primary" class="bt" @click="handleAdd">创建活动</van-button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const emit = defineEmits(['on-add']);

const handleAdd = () => {
  emit('on-add');
};
</script>

<style lang="scss" scoped>
.empty {
  text-align: center;
  .bt {
    width: 240px;
    height: 68px;
    background: $btn-background;
    border-radius: 34px;
  }
  .p1 {
    font-size: $zaui-font-size-md;
    font-weight: 500;
    color: #343434;
  }
  .p2 {
    font-size: $zaui-font-size-md;
    color: #969696;
    margin-bottom: 104px;
    margin-top: 9px;
  }
  .ig {
    width: 200px;
    height: 200px;
    margin-top: 210px;
    margin-bottom: 36px;
  }
}
</style>
