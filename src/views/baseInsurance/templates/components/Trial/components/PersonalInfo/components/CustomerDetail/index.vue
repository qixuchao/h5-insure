<template>
  <div class="customer-detail">
    <div class="customer-img">
      <img :src="state?.avatar || avatar" alt="" class="customer-header-img" />
      <div class="customer-img-content">
        <div class="customer-img-title">
          {{ state.name || '匿名客户' }} &nbsp;
          <ProSvg v-if="+state.gender === 1" name="male" />
          <ProSvg v-else name="female" />
        </div>
        <!-- <div class="customer-tag">客户信息收集</div> -->
      </div>
    </div>
    <div class="collapse-content">
      <BasicInfo :data="state" />
    </div>
    <CardSelect
      title="证件信息"
      :data="state.certInfo"
      :selected="selectedIndex.certIndex"
      @update:selected="(v) => (selectedIndex.certIndex = v)"
    >
      <template #default="{ scope }">
        <div class="cert-row">
          <div class="label">{{ (scope as CertInfo).certTypeName }}</div>
          <div class="value">{{ (scope as CertInfo).desensitizaCertNo }}</div>
        </div>
        <div class="cert-row">
          <div class="label">证件有效期</div>
          <div class="value">
            {{ formatCertDate((scope as CertInfo).certStartDate, (scope as CertInfo).certEndDate) }}
          </div>
        </div>
      </template>
    </CardSelect>
    <CardSelect
      title="常用通讯信息"
      :data="state.contactInfo"
      :selected="selectedIndex.contactIndex"
      @update:selected="(v) => (selectedIndex.contactIndex = v)"
    >
      <template #default="{ scope }">
        <div class="cert-row">
          <div class="value">{{ (scope as ContactInfo).contactNo }}</div>
        </div>
      </template>
    </CardSelect>
    <CardSelect
      title="常用通讯地址"
      :data="state.addressInfo"
      :selected="selectedIndex.addressIndex"
      @update:selected="(v) => (selectedIndex.addressIndex = v)"
    >
      <template #default="{ scope }">
        <div class="cert-row">
          <div class="value">{{ (scope as AddressInfo).detail }}</div>
        </div>
        <div class="cert-row">
          <div class="value">{{ (scope as AddressInfo).postCode }}</div>
        </div>
      </template>
    </CardSelect>
    <CardSelect
      title="银行卡信息"
      :data="state.bankCardInfo"
      :selected="selectedIndex.bankIndex"
      @update:selected="(v) => (selectedIndex.bankIndex = v)"
    >
      <template #default="{ scope }">
        <div class="cert-row">
          <div class="value">{{ (scope as BankCardInfo).bankBranch }}</div>
        </div>
        <div class="cert-row">
          <div class="value">{{ (scope as BankCardInfo).bankCardNo }}</div>
        </div>
      </template>
    </CardSelect>
  </div>
  <div class="footer">
    <!-- <van-button plain round color="#c41e21" style="width: 45%">创建计划书</van-button> -->
    <van-button color="#c41e21" round style="margin-left: 20px; flex: 1" @click="goCollection">去投保</van-button>
  </div>
</template>

<script lang="ts" setup name="CustomerDetail">
import { ref, toRefs, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant/es';
import { getCustomerDetail } from '@/api/modules/third';
import { CertInfo, ContactInfo, BankCardInfo, AddressInfo, CustomerDetail } from '@/api/modules/third.data';
import pageJump from '@/utils/pageJump';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import { getCusomterParams, setCusomterData, filterCustomerOption } from '../../util';
import avatar from '@/assets/images/customer-avatar.png';
import BasicInfo from './BasicInfo.vue';
import CardSelect from './CardSelect.vue';

interface QueryData {
  customerId: number;
  [key: string]: any;
}

const route = useRoute();
const router = useRouter();

const { customerId } = route.query as QueryData;
const selectedIndex = ref({
  addressIndex: 0,
  certIndex: 0,
  bankIndex: 0,
  contactIndex: 0,
});
const state = ref<Partial<CustomerDetail>>({
  addressInfo: [],
  certInfo: [],
  bankCardInfo: [],
  contactInfo: [],
  gender: 1,
  name: '',
});

const getData = () => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });

  const params = getCusomterParams();
  const selectFirst = (dts = []) => {
    if (dts && dts.length) {
      dts[0].isDefault = '1';
    }
    return dts || [];
  };
  getCustomerDetail(params)
    .then((res) => {
      const { code, data } = res;
      if (code === '10000' && data) {
        const { bankCardInfo = [], addressInfo = [], contactInfo = [], certInfo = [], ...others } = data;
        state.value = data;

        state.value.addressInfo = selectFirst(addressInfo);
        state.value.bankCardInfo = selectFirst(bankCardInfo);
        state.value.contactInfo = selectFirst(contactInfo);
        state.value.certInfo = selectFirst(certInfo);
      }
    })
    .then(() => {
      Toast.clear();
    });
};
const goCollection = (e: any) => {
  // 跳转前，设置要获取的选中客户的参数， 给外面调用的地方去拿
  console.log('暂存的客户信息：', state.value);
  const a = filterCustomerOption(state.value, selectedIndex.value);
  setCusomterData(a);
  router.replace({
    path: PAGE_ROUTE_ENUMS.infoCollection,
    query: { ...route.query, selected: 'true' },
  });
};
// 格式化身份证有效期
const formatCertDate = (start = '', end = '') => {
  return `${start ? `${start}~` : ''}${end?.includes('9999') ? '长期' : end}`;
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.pt20 {
  padding-top: 20px;
}
.mb226 {
  margin-bottom: 226px;
}
.customer-detail {
  background: #f4f5f9;
  background-image: url('@/assets/images/customer/customerDetail.png');
  background-repeat: no-repeat;
  background-size: 100% 384px;
  padding: 30px 30px 160px;
  .customer-img {
    display: flex;
    margin-top: 35px;
    margin-bottom: 50px;
    .customer-header-img {
      width: 124px;
      height: 124px;
    }
    .customer-img-content {
      margin-left: 30px;
      .customer-img-title {
        font-size: 36px;
        font-weight: 500;
        color: #393d46;
        line-height: 124px;
        display: flex;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          margin-left: 14px;
        }
      }
      .customer-tag {
        background: #e5f3f9;
        border-radius: 8px;
        padding: 5px 12px;
        font-size: 22px;
        font-weight: 400;
        color: #00afff;
        line-height: 30px;
        margin-top: 8px;
      }
    }
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

.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #fff;
  padding: 30px;
  display: flex;
}
</style>
