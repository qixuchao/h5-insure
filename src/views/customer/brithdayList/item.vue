<template>
  <div className="com-birthday-item">
    <div className="birthday-info" @click="handleClick">
      <div className="info-left">
        <img
          :src="
            data.gender
              ? data.gender === 'F'
                ? getIconUrl('customer.female')
                : getIconUrl('customer.male')
              : getIconUrl('customer.defaultGender')
          "
          class="img"
        />
        <span className="name"> {{ data.customerName }} </span>
        <span v-if="data.visitType === '转介绍'" class="icon icon-bg1">{{ data.visitType }}</span>
        <span v-if="data.visitType === '接触面谈'" class="icon icon-bg2">{{ data.visitType }}</span>
        <span v-if="data.visitType === '客户获取'" class="icon icon-bg3">{{ data.visitType }}</span>
        <span v-if="data.visitType === '需求分析'" class="icon icon-bg6">{{ data.visitType }}</span>
        <span v-if="data.visitType === '电话邀约'" class="icon icon-bg5">{{ data.visitType }}</span>
        <span v-if="data.visitType === '呈现促成'" class="icon icon-bg6">{{ data.visitType }}</span>
        <span v-if="data.visitType === '保单服务'" class="icon icon-bg4">{{ data.visitType }}</span>
      </div>
      <div className="info-right">
        <p className="nowrap birthday-text">
          <img :src="getIconUrl('customer.smallCake')" />
          <span className="birthday-date">{{ data.birthday }} </span>
        </p>

        <span v-if="data.dayForBirthday > 0" className="nowrap">
          距离{{ data.age }}岁生日还有 <span className="primary-color spe">{{ data.dayForBirthday }}</span
          >天
        </span>
        <span v-else className="primary-color">今天是Ta {{ data.age }} 岁生日</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const router = useRouter();
const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: () => Object,
  },
});

const { data } = toRefs(props);

const handleClick = () => {
  router.push({
    name: 'customerDetail',
    query: {
      agentCustomerId: data.value.agentCustomerId,
      customerType: data.value.customerType,
    },
  });
};
</script>

<style lang="scss" scoped>
.com-birthday-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 160px;
  padding: 32px 30px;
  background: #fff;
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    border-top: none;
    border-bottom: 1px solid #e0e0e0;
    border-radius: 0;
    transform: scaleY(0.5);
    transform-origin: 0 0;
    content: '';
    pointer-events: none;
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
  .birthday-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .info-left {
      display: flex;
      align-items: center;
      .img {
        width: 80px;
        height: 80px;
      }
      .name {
        font-size: $zaui-font-size-lg;
        color: #343434;
        margin-left: 30px;
        margin-right: 20px;
        word-break: break-all;
      }
    }
    .info-right {
      font-size: $zaui-font-size-sm;
      color: #616161;
      text-align: right;
      .birthday-text {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #bcbcbc;
        .birthday-date {
          margin-left: 4px;
        }
        img {
          width: 32px;
        }
      }
      .spe {
        font-weight: 500;
      }
    }
  }
  .nowrap {
    color: #b38e57;
  }
}
</style>
