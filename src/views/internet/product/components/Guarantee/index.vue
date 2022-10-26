<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-21 21:00
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-21 21:00
 * @Description: 保障详情
-->
<template>
  <div class="guarantee-list">
    <ProCard title="保障内容" link="查看详情" :show-divider="true" :show-icon="true" @link-click="onShowDetail">
      <div class="basic">
        <ProCell
          v-for="(item, index) in props.guaranteeList"
          :key="index"
          class="guarantee-item"
          :title="item.title"
          :content="item.desc"
          :border="false"
        />
      </div>
    </ProCard>
  </div>
  <ProPopup v-model:show="popupShow" title="保障详情" class="guarantee-popup">
    <div class="guarantee-detail">
      <div v-for="(item, index) in props.guaranteeList" :key="index" class="guarantee-item">
        <div class="title">{{ item.title }}</div>
        <div v-dompurify-html="item.content" class="content" />
      </div>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup>
import { TitleAndDescVO } from '@/api/modules/product.data';

const props = defineProps({
  guaranteeList: {
    type: Array as () => Array<TitleAndDescVO>,
    default: () => [],
  },
});

const popupShow = ref(false);

const onShowDetail = () => {
  popupShow.value = true;
};
</script>

<style lang="scss" scoped>
.guarantee-list {
  margin-top: 20px;
}
// 保障详情弹窗样式
.guarantee-popup {
  .body {
    display: flex;
    flex-direction: column;
    .guarantee-detail {
      padding: 0 40px;
      flex: 1;
      height: 0;
      // overflow-y: auto;
      .guarantee-item {
        margin-top: 40px;
        .title {
          height: 52px;
          font-size: 28px;
          font-weight: 500;
          color: #393d46;
          line-height: 52px;
        }
        .content {
          margin-top: 14px;
          font-size: 26px;
          color: #393d46;
          line-height: 44px;
          padding-bottom: 40px;
          border-bottom: 1px solid #eeeef4;
        }
      }
    }
  }
}
</style>
