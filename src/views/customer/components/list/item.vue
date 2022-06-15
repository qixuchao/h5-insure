<template>
  <div class="customer-list-item">
    <van-swipe-cell :disabled="disabled">
      <div class="list-item" @click="handleDetail">
        <div class="left">
          <div>
            <img
              :src="
                data.gender
                  ? data.gender === 'F'
                    ? getIconUrl('customer.female')
                    : getIconUrl('customer.male')
                  : getIconUrl('customer.defaultGender')
              "
              alt=""
              class="mf"
            />
          </div>
          <div>
            <div class="left">
              <div class="name">{{ data.customerName }}</div>
              <div v-if="data.visitTag === '转介绍'" class="icon icon-bg1">{{ data.visitTag }}</div>
              <div v-if="data.visitTag === '接触面谈'" class="icon icon-bg2">{{ data.visitTag }}</div>
              <div v-if="data.visitTag === '客户获取'" class="icon icon-bg3">{{ data.visitTag }}</div>
              <div v-if="data.visitTag === '需求分析'" class="icon icon-bg6">{{ data.visitTag }}</div>
              <div v-if="data.visitTag === '电话邀约'" class="icon icon-bg5">{{ data.visitTag }}</div>
              <div v-if="data.visitTag === '呈现促成'" class="icon icon-bg6">{{ data.visitTag }}</div>
              <div v-if="data.visitTag === '保单服务'" class="icon icon-bg4">{{ data.visitTag }}</div>
            </div>
            <div v-if="data.isRelative" class="from-wx">
              <img class="img-wx" :src="getIconUrl('customer.weixin')" alt="" />
              微信客户
            </div>
          </div>
        </div>
        <div class="right">
          <img :src="getIconUrl('customer.phone')" alt="" class="ph" @click="(e) => handlePhone(e)" />
        </div>
      </div>

      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" @click="handleDelete" />
      </template>
    </van-swipe-cell>
    <van-action-sheet
      v-model:show="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="onSelect"
    />
  </div>
</template>

<script lang="ts" setup>
import male from '@/assets/images/customer/male.png';
import female from '@/assets/images/customer/female.png';
import { queryCustomerPhone } from '@/api/modules/businessOpportunity';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: () => Object,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: () => true,
  },
});
const emit = defineEmits(['on-delete']);

const { data, disabled } = toRefs(props);

const show = ref(false);
const router = useRouter();

const actions = [
  { name: '拨打电话', color: '$primary-color', type: '1' },
  { name: '发送短信', type: '2' },
];
const onSelect = (val: { type: string }) => {
  show.value = false;
  queryCustomerPhone({
    agentCustomerId: data.value.agentCustomerId,
    customerType: data.value.customerType,
    businessType: '06',
    useType: val.type === '1' ? 'TEL' : 'SMS',
  }).then((res) => {
    if (val.type === '1') {
      window.location.href = `tel:${res.data.data}`;
    } else {
      window.location.href = `sms:${res.data.data}`;
    }
  });
};

const handleDelete = () => {
  emit('on-delete', data.value);
};

const handleDetail = () => {
  router.push({
    name: 'customerDetail',
    query: {
      agentCustomerId: data.value.agentCustomerId,
      customerType: data.value.customerType,
      customerName: data.value.customerName,
    },
  });
};
const handlePhone = (e: any) => {
  e.stopPropagation();
  show.value = true;
};
</script>

<style lang="scss">
.customer-list-item {
  background-color: #fff;
  .delete-button {
    height: 100%;
  }
  .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px 20px 30px;
    border-bottom: 1px solid #f4f5f7;
    .mf {
      width: 88px;
      height: 88px;
    }
    .icon {
      margin-left: 10px;
      padding: 5px 12px;
      font-size: 22px;
      text-align: center;
      border-radius: 8px;
      &-bg1 {
        color: $primary-color;
        background: rgba(255, 43, 31, 0.08);
      }
      &-bg2 {
        color: #ff6600;
        background: #ffeee7;
      }
      &-bg3 {
        background-color: rgba(115, 76, 255, 0.1);
        color: #947fe1;
      }
      &-bg4 {
        background: rgba(27, 205, 145, 0.1);
        color: #1bcd91;
      }
      &-bg5 {
        color: #ff8d1e;
        background: rgba(255, 141, 30, 0.1);
      }
      &-bg6 {
        color: #00afff;
        background: rgba(0, 175, 255, 0.08);
      }
    }
    .left {
      display: flex;
      align-items: center;
      .from-wx {
        display: flex;
        align-items: center;
        font-size: 24px;
        color: #b6b6b6;
        margin-top: 4px;
      }
      .img-wx {
        margin-left: 15px;
        width: 30px;
        height: 30px;
        background: #dffae9;
        border-radius: 6px;
        margin-right: 4px;
      }
    }
    .right {
      margin-right: 50px;
      padding: 10px;
    }
    .name {
      margin-left: 16px;
    }
    .ph {
      width: 34px;
      height: 34px;
    }
  }
}
</style>
