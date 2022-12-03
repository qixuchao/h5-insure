<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 15:01:12
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-03 20:42:23
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/PreNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProSvg name="customer" @click="clickHandler"></ProSvg>
  <ProPopup class="customer-list" :style="{ height: '416px' }" :show="state.loading" :closeable="false">
    <div class="customer-body">
      <div class="header">
        <span>{{ title }}</span>
        <van-icon :name="cancelIcon" @click="state.loading = false" />
      </div>
      <div class="conatiner">
        <div
          v-for="(item, index) in state.list"
          :key="`${item.customerId}_${index}`"
          :class="{ item: true, active: state.select.certNo === item.cert[0]?.certNo }"
          @click="onSelectUserItem(item)"
        >
          <span class="name">{{ item.cert[0].certName }}</span>
          <span>{{ star(item.cert[0].certNo) }}</span>
          <van-icon v-show="state.select.certNo === item.cert[0]?.certNo" class="check-icon" :name="checkedIcon" />
        </div>
      </div>
      <ProShadowButton :shadow="false" text="确定" @click="save" />
    </div>
  </ProPopup>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import cancelIcon from '@/assets/images/baseInsurance/cancel.png';
import checkedIcon from '@/assets/images/baseInsurance/checked.png';
import ProShadowButton from '../ProShadowButton/index.vue';
import { queryListRelationCustomer } from '@/api/modules/product';
import { star } from '@/utils/index';
// // 调用主题
const emit = defineEmits(['change']);

const props = defineProps({
  userInfo: {
    type: Object,
    default: () => ({}),
  },
  relationCode: {
    type: String,
    default: '1',
  },
  title: {
    type: String,
    default: '选择投保人',
  },
  data: {
    type: Array as any,
    default: () => [],
  },
});

const state = reactive({
  loading: false,
  select: {},
  list: [],
});

watch(
  () => props.data,
  (val) => {
    state.list = props.data;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.userInfo,
  (val: any) => {
    state.select = {
      ...val,
      certName: val.name,
    };
    console.log('state.select', state.select);
  },
  { deep: true, immediate: true },
);

const onSelectUserItem = (item: any) => {
  console.log('item', item);
  state.select.name = item.cert[0].certName;
  state.select.certNo = item.cert[0].certNo;
};

const save = () => {
  state.loading = false;
  emit('change', state.select);
};

const clickHandler = () => {
  state.loading = false;
  state.loading = true;
};
</script>

<style scoped lang="scss">
.icon-customer {
  position: absolute;
  right: 8px;
  top: 24px;
  font-size: 32px;
}
.customer-body {
  padding: 32px 40px;
  .header {
    display: flex;
    justify-content: space-between;
    border: none;
    height: 42px;
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333;
    line-height: 42px;
    align-items: center;
    margin-bottom: 30px;
  }

  .conatiner {
    height: 520px;
    margin-bottom: 40px;
    overflow-y: auto;
    .item {
      height: 112px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 34px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333;
      line-height: 48px;
      position: relative;

      &.active {
        color: var(--van-primary-color);

        .check-icon {
          position: absolute;
          right: 0;
        }
      }

      .name {
        margin-right: 30px;
      }
    }
  }
}
</style>
