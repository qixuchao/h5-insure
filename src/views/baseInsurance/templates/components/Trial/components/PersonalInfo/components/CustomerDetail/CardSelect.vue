<template>
  <div class="com-card-select">
    <div class="collapse-content">
      <div class="card-header">
        <div class="card-header-title">{{ title }}</div>
        <div class="card-header-content">{{ data.length }}张</div>
      </div>
      <van-radio-group v-model="selected" @change="change">
        <div v-for="(item, index) in data" :key="index" class="communicate-list pt20">
          <van-radio :name="index">
            <slot :scope="item" />
          </van-radio>
        </div>
      </van-radio-group>
    </div>
  </div>
</template>
<script lang="ts" setup name="CardSelect">
import { type PropType } from 'vue';
import { useVModel } from '@vueuse/core';
import { CertInfo, ContactInfo, BankCardInfo, AddressInfo } from '@/api/modules/third.data';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  selected: {
    type: Number,
    default: 0,
  },
  data: {
    type: Array as PropType<(CertInfo | ContactInfo | BankCardInfo | AddressInfo)[]>,
    default: () => [],
  },
});

const emit = defineEmits(['update:selected']);
const selected = useVModel(props, 'selected', emit);
const change = (v) => {
  emit('update:selected', v);
};
</script>
<style lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  .card-header-title {
    font-size: 30px;
    font-weight: 500;
    color: #393d46;
    line-height: 42px;
  }

  .card-header-content {
    font-size: 26px;
    font-weight: 400;
    color: #666666;
    line-height: 37px;
  }
}

.collapse-content {
  padding: 30px;
  border-radius: 20px;
  background: #fff;
  margin-top: 20px;
}

.collapse-list {
  display: flex;
  font-size: 26px;
  font-weight: 400;
  color: #666666;
  line-height: 37px;
  margin-top: 12px;

  .label {
    min-width: 260px;
    line-height: 37px;
  }
}

.communicate-list {
  display: flex;
  background: #f4f5f9;
  border-radius: 10px;
  padding: 30px;
  align-items: center;
  margin-top: 20px;

  .label {
    font-size: 26px;
    font-weight: 400;
    // color: #666666;
    line-height: 56px;
    margin-left: 30px;
  }

  .cert-row {
    color: var(--zaui-text-weak);
    display: flex;
    font-size: 26px;
    font-weight: 400;
    // color: #666666;
    line-height: 56px;

    .label {
      width: 180px;
    }

    .value {
      flex: 1;
    }
  }
}
</style>
