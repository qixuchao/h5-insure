<template>
  <div class="customer-list-item">
    <van-swipe-cell>
      <div class="list-item" @click="handleCustomerItem">
        <div class="left">
          <div>
            <img :src="data.gender ? (data.gender === '1' ? female : male) : gender" alt="" class="mf" />
          </div>
          <div>
            <div class="left-item">
              <div class="name">{{ data.customerName }} | {{ ageStr }}岁</div>
              <div v-if="data?.certNo && +data?.certType === 1" class="cert-no">
                {{ data.certNo }}
                <span class="cert-type-name">{{ data.certTypeName }}</span>
              </div>
              <!-- <div v-if="data?.certInfo[0]?.certNo && +data?.certInfo[0]?.certType !== 1" class="cert-no">
                {{ data.certInfo[0].certNo }}
                <span class="cert-type-name">{{ data.certInfo[0].certTypeName }}</span>
              </div> -->
            </div>
            <!-- <div v-if="data.relative" class="from-wx">
              <img class="img-wx" alt="" />
              微信客户
            </div> -->
          </div>
        </div>
        <!-- <div class="right">
          <img alt="" class="ph" @click="(e) => handleCustomerItem(e)" />
        </div> -->
      </div>

      <!-- <template #right>
        <van-button square text="删除" type="danger" class="delete-button" @click="handleDelete" />
      </template> -->
    </van-swipe-cell>
  </div>
</template>

<script lang="ts" setup name="item">
import { ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import female from '@/assets/images/baseInsurance/female.png';
import male from '@/assets/images/baseInsurance/male.png';
import gender from '@/assets/images/baseInsurance/gender.png';
import pageJump from '@/utils/pageJump';
import { useSessionStorage } from '@/hooks/useStorage';
import { setCusomterParams } from '../../util';
// import { queryCustomerPhone } from '@/api/modules/businessOpportunity';
const storage = useSessionStorage();
const route = useRoute();
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

const { data, disabled } = toRefs(props);

const ageStr = computed(() => {
  return dayjs().diff(data.value.birthday, 'y');
});

const a = {
  customerType: '0',
  customerName: '测受益人',
  certNo: '410802196901010143',
  certType: '1',
  birthday: '1969-01-01',
  gender: 1,
};
const b = {
  id: data.value.id,
  customerType: data.value.customerType,
  customerName: '公孙林',
  certNo: '432523198301260085',
  certType: '1',
  birthday: '1983-01-26',
  gender: 2,
};
const handleCustomerItem = (e: any) => {
  // storage.set('thirdCustomerInfo', b);
  // 设置参数到session，避免URL上带敏感信息
  setCusomterParams(b || data.value);
  // const { selectedType, customerId, selected, ...others } = route.query; // 去掉下级页面的参数
  pageJump('customerDetail', { ...route.query, customerId: data.value.id });
};
</script>

<style lang="scss">
.customer-list-item {
  background-color: #fff;
  .delete-button {
    height: 100%;
  }
  .list-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px 20px 30px;
    &::after {
      content: '';
      position: absolute;
      width: 660px;
      height: 1px;
      margin: 0 auto;
      bottom: 0;
      background-color: #f2f2f2;
    }
    .mf {
      width: 88px;
      height: 88px;
      margin-right: 10px;
    }
    .icon {
      margin-left: 10px;
      padding: 5px 12px;
      font-size: $zaui-font-size-md;
      text-align: center;
      border-radius: $zaui-border-radius-tag-small;
      &-bg1 {
        color: $zaui-brand;
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
      .name {
        color: #393d46;
        font-size: $zaui-font-size-md;
        font-weight: 400;
      }
      .left-item {
        .name {
          font-weight: bold;
          color: #393d46;
          line-height: 42px;
        }
        .cert-no {
          margin-top: 4px;
          color: #393d46;
          line-height: 33px;
          font-weight: 400;
          font-size: 24px;
        }
        .cert-type-name {
          margin-left: 8px;
          padding: 2px 8px;
          background: var(--zaui-brand-1);
          border-radius: 8px;
          font-size: 20px;

          font-weight: 400;
          color: var(--zaui-brand);
        }
      }
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
    .ph {
      width: 34px;
      height: 34px;
    }
  }
  .item-bg {
    background: #abcdef;
  }
}
</style>
