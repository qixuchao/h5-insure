<template>
  <div style="background: #f4f5f9">
    <div class="trajectory-body">
      <p class="trajectory-title">订单进度</p>
      <InfoItem
        label="订单号"
        :content="orderNo"
        line
        is-copy
        min-width="other"
        style="margin-bottom: 40px; margin-top: 30px"
      />

      <div class="list">
        <van-steps direction="vertical" :active="activeIndex" active-color="#C41E21">
          <van-step v-for="(item, index) in list" :key="index">
            <template #inactive-icon><ProSvg name="inactive" class="icon" /></template>
            <template #active-icon><ProSvg name="active" class="icon" /></template>
            <div class="trajectory-step">
              <div :class="['trajectory-step-name', index <= activeIndex ? 'trajectory-step-name-red' : '']">
                {{ getZero(index + 1) }}
              </div>
              <div style="padding-left: 40px">
                <p
                  :class="[
                    'trajectory-step-name',
                    index <= activeIndex ? 'trajectory-step-name-active' : 'trajectory-step-name-grey',
                  ]"
                >
                  {{ item.stepDesc }}
                </p>
                <p class="trajectory-step-status">{{ item.stepStatusDesc }}</p>
                <p class="trajectory-step-time">
                  {{ item.stepTime && dayjs(item.stepTime).format('YYYY-MM-DD HH:mm:ss') }}
                </p>
              </div>
            </div>
          </van-step>
        </van-steps>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { orderInsureRecord } from '@/api/modules/order';
import { OriginItem } from '@/api/modules/order.data';
import InfoItem from '../components/infoItem.vue';

const route = useRoute();

const activeIndex = ref<number>(0);
const list = ref<OriginItem[]>();

const {
  query: { orderId, orderNo, tenantId },
} = route;

onMounted(() => {
  orderInsureRecord({ orderId, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      const { originList, recordResVOList } = data;
      list.value = originList;
      if (recordResVOList.length) {
        activeIndex.value = originList.findIndex(
          (item) => item.step === recordResVOList[recordResVOList.length - 1].step,
        );
      }
    }
  });
});
const getZero = (num: any) => {
  return String(num).padStart(2, '0');
};
</script>

<style lang="scss" scoped>
.trajectory-body {
  margin: 30px;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
}
.trajectory-title {
  font-size: 30px;
  font-weight: 500;
  color: #393d46;
  line-height: 42px;
}
.list {
  border-top: 1px dashed #dfdfdf;
  padding-top: 40px;
  :deep(.van-step--vertical) {
    min-height: 130px;
    &:after {
      display: none;
    }
  }
}
.trajectory-step {
  display: flex;
}
.trajectory-step-name {
  font-size: 30px;
  font-weight: 600;
  line-height: 42px;
}
.trajectory-step-name-active {
  color: #333333;
}
.trajectory-step-name-grey {
  color: #999999;
}
.trajectory-step-name-red {
  color: #c41e21;
}
.trajectory-step-status {
  font-size: 26px;
  font-weight: 400;
  color: #333333;
  line-height: 37px;
}
.trajectory-step-time {
  font-size: 26px;
  font-weight: 400;
  color: #999999;
  line-height: 37px;
  margin-top: 7px;
}
</style>
