<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-21 21:00
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-07 10:57:19
 * @Description: 保障详情
-->
<template>
  <div class="guarantee-list">
    <ProCard title="保障内容" link="查看详情" :show-divider="true" :show-icon="true" @link-click="onShowDetail">
      <div class="basic">
        <ProCell
          v-for="(item, index) in displayList"
          :key="index"
          class="guarantee-item"
          :title="item.title"
          :content="item.desc"
          :border="false"
        />
      </div>
      <div v-if="isShowOptBtn" class="show-more" @click="handleShowMore">
        {{ showMore ? '收起' : '查看更多' }} <ProSvg name="down" :class="['icon', { showMore }]" />
      </div>
      <div class="service-config" @click="onClose">
        <img :src="serviceConfig" />
      </div>
    </ProCard>
  </div>
  <ProPopup v-model:show="popupShow" title="保障详情" class="guarantee-popup">
    <div class="guarantee-detail">
      <div v-for="(item, index) in guaranteeArr" :key="index" class="guarantee-item">
        <div class="title">{{ item.title }}</div>
        <div v-dompurify-html="item.content" class="content" />
      </div>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import { TitleAndDescVO } from '@/api/modules/product.data';
import ProSvg from '@/components/ProSvg/index.vue';
import serviceConfig from '@/assets/images/chuangxin/serviceConfig.png';

const props = defineProps({
  guaranteeList: {
    type: Array as () => Array<TitleAndDescVO>,
    default: () => [],
  },
  showServiceConfig: {
    type: Boolean,
    default: false,
  },
  isShowClose: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 10,
  },
});

const [showMore, toggle] = useToggle(false);

const isShowOptBtn = computed(() => {
  if (props.guaranteeList.length > props.count) {
    if (props.isShowClose) return true;
    return !showMore.value;
  }
  return false;
});

const handleShowMore = () => {
  toggle();
};

const displayList = computed(() => {
  if (props.guaranteeList.length <= props.count) {
    return props.guaranteeList;
  }
  if (showMore.value) {
    return props.guaranteeList;
  }
  return props.guaranteeList.slice(0, props.count);
});

const guaranteeArr = computed(() => {
  return props.guaranteeList.filter((item) => !item?.noDetail);
});

const popupShow = ref(false);

const onShowDetail = () => {
  popupShow.value = true;
};
</script>

<style lang="scss" scoped>
.guarantee-list {
  margin-top: 20px;

  .show-more {
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: $zaui-brand;
    .icon {
      margin-left: 10px;
      font-size: 20px;
      transition: transform 0.5s;
      &.showMore {
        transform: rotate(180deg);
      }
    }
  }

  .service-config img {
    width: 100%;
  }
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
          // height: 52px;
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
