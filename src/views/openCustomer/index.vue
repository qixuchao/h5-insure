<template>
  <ZaPageWrap main-class="page-open-customer">
    <div class="analysis">
      <img :src="getIconUrl('openCustomer.bg')" class="bg" />
      <div class="list">
        <div v-for="(item, index) in analysis" :key="index" class="analysis-item">
          <div class="count">{{ item.count }}</div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="title">
      <div class="icon">
        <img :src="getIconUrl('openCustomer.title1')" />
      </div>
      <div class="text">
        本机构可分配<span class="key">{{ clientNum }}</span
        >人
      </div>
    </div>
    <div class="rule-desc">
      客户分配规则：符合相关条件可申请客户资源，我们会根据您所在机构及客户资源情况，随机分配一定数量的客户信息，请及时跟进，开发中请秉持职业规范，合理使用。分配后如长期未开发或违反相关规定，公司有权收回名单重新分配。
    </div>
    <van-button :class="['apply-btn', { disabled: disabled }]" @click="handleApply">申请客户</van-button>
    <div class="divider" />
    <div class="title title-2">
      <div class="icon">
        <img :src="getIconUrl('openCustomer.title2')" />
      </div>
      <div class="text">分配中客户列表</div>
    </div>
    <div class="line" />
    <ZaLoading v-if="loading" />
    <template v-else>
      <ZaEmpty
        v-if="customerList.length === 0"
        :empty-img="emptyImage"
        title="目前没有客户，去申请客户吧~"
        class="empty"
      />
      <div class="list">
        <CustomerItem
          v-for="(item, index) in customerList"
          :key="index"
          :name="item.customerName"
          :tag="item.call"
          :avatar-url="
            item.customerSex
              ? item.customerSex === 'F'
                ? getIconUrl('customer.female')
                : getIconUrl('customer.male')
              : getIconUrl('customer.defaultGender')
          "
          :data="item"
          @on-call="handleCall"
        />
      </div>
    </template>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Toast } from 'vant/es';
import CustomerItem from './components/CustomerItem/index.vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import emptyImage from '@/assets/images/openCustomer/empty.png';
import { useThemesStore } from '@/store/themes';
import { checkPermission, queryClients, applyForClients } from '@/api/modules/openCustomer';
import { queryCustomerPhone } from '@/api/modules/businessOpportunity';
import ZaLoading from '@/components/ZaLoading/index.vue';

const { getIconUrl } = useThemesStore();
const analysis = ref([
  { title: '已分配客户', count: 0 },
  { title: '回收客户', count: 0 },
  { title: '分配中客户', count: 0 },
]);
const clientNum = ref(0);
const disabled = ref(true);
const loading = ref(false);
const customerList = ref<any>([]);
// mock

const getCount = () => {
  checkPermission().then((res) => {
    if (res.data?.status === 200) {
      const {
        assignedClientNum = 0,
        retrievedClientNum = 0,
        assigningClientNum = 0,
        permission = 0,
        curBranchAssignableClientNum = 0,
      } = res.data?.data || {};
      disabled.value = permission === 0;
      clientNum.value = curBranchAssignableClientNum;
      analysis.value = [
        { title: '已分配客户', count: assignedClientNum },
        { title: '回收客户', count: retrievedClientNum },
        { title: '分配中客户', count: assigningClientNum },
      ];
    }
  });
};
const getList = () => {
  loading.value = true;
  queryClients({ pageNum: '1', pageSize: '999' })
    .then((res) => {
      if (res.data?.status === 200) {
        const { list = [] } = res.data?.data || {};
        customerList.value = list;
      }
    })
    .finally(() => {
      loading.value = false;
    });
};
const handleCall = (c: any, type: string) => {
  queryCustomerPhone({
    agentCustomerId: c.agentCustomerId,
    customerType: c.customerType,
    businessType: '23',
    applyNo: c.applyNo,
    useType: type === '1' ? 'TEL' : 'SMS',
  }).then((res: any) => {
    if (type === '1') {
      window.location.href = `tel:${res.data.data}`;
    } else {
      window.location.href = `sms:${res.data.data}`;
    }
    getCount();
    getList();
  });
};
const handleApply = () => {
  if (!disabled.value) {
    applyForClients().then((res) => {
      if (res.data?.status === 200) {
        Toast(`本次已成功申请${res.data.data}位客户`);
        getCount();
        getList();
      } else {
        Toast(res.data?.data ?? '本次申请提交失败');
      }
    });
  }
};

onMounted(() => {
  getCount();
  getList();
});
</script>

<style lang="scss" scoped>
.page-open-customer {
  .analysis {
    width: 100%;
    height: 288px;
    position: relative;
    .bg {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 412px;
      z-index: -1;
    }
    .list {
      position: absolute;
      top: 128px;
      left: 30px;
      width: calc(100% - 60px);
      height: 160px;
      display: flex;
      background: linear-gradient(180deg, #fff7f8 0%, #ffffff 100%);
      box-shadow: 0px 0px 16px 0px #fce5d9;
      border-radius: 20px;
      border: 2px solid rgba(255, 255, 255, 1);
      align-items: center;
      .analysis-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .count {
          font-size: 50px;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: bold;
          color: $primary-color;
          line-height: 58px;
        }
        .title {
          margin-top: 4px;
          font-size: $zaui-font-size-md;
          color: #969696;
          line-height: 37px;
        }
      }
    }
  }
  .title {
    display: flex;
    padding: 0 30px;
    font-size: $zaui-font-size-lg;
    font-weight: 600;
    color: #343434;
    line-height: 42px;
    margin-top: 40px;
    .key {
      color: $primary-color;
    }
    .icon {
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  .rule-desc {
    background: #faf6f0;
    border-radius: 6px 30px 30px 30px;
    margin: 12px 30px 0 90px;
    padding: 16px 30px;
    font-size: $zaui-font-size-sm;
    color: #b38e57;
    line-height: 30px;
    letter-spacing: 1px;
  }
  .apply-btn {
    display: block;
    margin: 40px auto;
    width: calc(100% - 60px);
    height: 88px;
    background: $btn-background;
    border-radius: 45px;
    font-size: $zaui-font-size-lg;
    font-weight: 600;
    color: #ffffff;
  }
  .disabled {
    background: linear-gradient(90deg, #ff8383 0%, #ffb285 100%);
  }
  .divider {
    width: 100%;
    height: 20px;
    background: #f6f6fa;
  }
  .title-2 {
    line-height: 100px;
    margin-top: 0;
    position: sticky;
    top: 0;
    background: #fff;
  }
  .line {
    width: calc(100% - 30px);
    margin-left: 30px;
    height: 1px;
    background: #f6f6fa;
  }
  .empty {
    margin: 200px 0px;
  }
}
</style>
