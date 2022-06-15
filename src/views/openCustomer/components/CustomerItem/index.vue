<template>
  <div class="com-customer-item">
    <div class="left" @click="handleToDetail">
      <div class="avatar">
        <img :src="avatarUrl" />
      </div>
      <div>
        <div class="left-container">
          <div class="name">{{ name }}</div>
          <div v-if="tag?.toString() !== '0'" class="tag">已联系</div>
        </div>
        <div class="tag1">{{ data.assignedDateStr }}</div>
      </div>
    </div>

    <div class="right">
      <div class="icon">
        <img :src="getIconUrl('openCustomer.phone')" @click="show = true" />
      </div>
    </div>
  </div>
  <van-action-sheet
    v-model:show="show"
    :actions="actions"
    cancel-text="取消"
    close-on-click-action
    @select="onSelect"
  />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: '',
  },
  data: {
    type: Object,
    default: () => {},
  },
  avatarUrl: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['on-call']);
const history = useRouter();
const show = ref(false);
const handleToDetail = () => {
  history.push({
    path: './customerDetail',
    query: {
      agentCustomerId: props.data.agentCustomerId,
      customerType: props.data.customerType,
      customerName: props.data.customerName,
    },
    hash: '#1',
  });
};
const actions = [
  { name: '拨打电话', color: '$primary-color', type: '1' },
  { name: '发送短信', type: '2' },
];
const onSelect = (val: { type: string }) => {
  show.value = false;
  emit('on-call', props.data, val.type);
};
</script>

<style lang="scss" scoped>
.com-customer-item {
  width: 100%;
  display: flex;
  padding: 20px 30px;
  border-bottom: 1px solid #f6f6fa;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    .avatar {
      width: 88px;
      height: 88px;
      margin-right: 30px;
      // background: #ddd;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .left-container {
      display: flex;
      align-items: center;

      .tag {
        margin-left: 20px;
        height: 40px;
        background: #ffeee7;
        border-radius: 8px;
        font-size: 22px;
        color: #ff6600;
        line-height: 40px;
        padding: 0 13px;
      }
    }
    .tag1 {
      font-size: 24px;
      margin-top: 12px;
      color: #969696;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .icon {
      img {
        width: 34px;
        height: 34px;
      }
    }
  }
}
</style>
