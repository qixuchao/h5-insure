<template>
  <div class="customer-detail">
    <div class="customer-img">
      <img :src="state.data?.avatar" alt="" class="customer-header-img" />
      <div class="customer-img-content">
        <div class="customer-img-title">
          {{ state.data.name }}<img v-if="state.data.gender === '2'" src="@/assets/images/customer/mr.png" alt="" /><img
            v-else
            src="@/assets/images/customer/ms.png"
            alt=""
          />
        </div>
        <div class="customer-img-collect">客户信息收集</div>
      </div>
    </div>
    <div class="collapse-content">
      <!-- <Item /> -->
      <van-collapse v-model="activeList">
        <van-collapse-item title="基础信息" name="1">
          <div v-for="(item, index) in list" :key="index" class="collapse-list">
            <div class="label">{{ item.label }}</div>
            <div v-if="item.value == 'hasSocialInsurance'" class="content">
              {{ state.data[item.value] == '1' ? '有社保' : '无社保' }}
            </div>
            <div v-if="item.value == 'incomeSource'" class="content">{{ incomeSourceMap[state.data[item.value]] }}</div>
            <div v-else class="content">{{ state.data[item.value] }}</div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="collapse-content">
      <div class="cert-header">
        <div class="cert-header-title">证件信息</div>
        <div class="cert-header-content">{{ state.certInfo.length }}张</div>
      </div>
      <div v-for="(items, indexs) in state.certInfo" :key="indexs" class="pt20">
        <div v-for="(item, index) in CertList" :key="index" class="collapse-list">
          <div class="label">{{ item.label }}</div>
          <div class="content">{{ items[item.value] }}</div>
        </div>
      </div>
    </div>
    <div class="collapse-content">
      <div class="cert-header">
        <div class="cert-header-title">常用通讯信息</div>
        <div class="cert-header-content">{{ state.contactInfo.length }}个</div>
      </div>
      <div v-for="(item, index) in state.contactInfo" :key="index" class="communicate-list">
        <div @click="changge(state.contactInfo, index)">
          <img v-if="item.isDefault == '1'" src="@/assets/images/customer/checked.png" alt="" />
          <img v-if="item.isDefault != '1'" src="@/assets/images/customer/unchecked.png" alt="" />
        </div>
        <div class="label">{{ item.contactNo }}</div>
        <div v-if="item.useFlag == '1'" class="content">常用</div>
      </div>
    </div>
    <div class="collapse-content">
      <div class="cert-header">
        <div class="cert-header-title">常用通讯地址</div>
        <div class="cert-header-content">{{ state.addressInfo.length }}个</div>
      </div>
      <div v-for="(item, index) in state.addressInfo" :key="index" class="communicate-list pt20">
        <div @click="changge(state.addressInfo, index)">
          <img
            v-if="item.isDefault == '1'"
            src="@/assets/images/customer/checked.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <img
            v-if="item.isDefault != '1'"
            src="@/assets/images/customer/unchecked.png"
            alt=""
            style="width: 40px; height: 40px"
          />
        </div>
        <div>
          <div class="address-content">
            <div class="label">{{ item.detail }}<span v-if="item.useFlag == '1'" class="content">常用</span></div>
          </div>
          <div class="zip-code">邮编：{{ item.postCode }}</div>
        </div>
      </div>
    </div>
    <div class="collapse-content mb226">
      <div class="cert-header">
        <div class="cert-header-title">银行卡信息</div>
        <div class="cert-header-content">{{ state.bankCardInfo.length }}个</div>
      </div>
      <div v-for="(item, index) in state.bankCardInfo" :key="index" class="communicate-list pt20">
        <div @click="changge(state.bankCardInfo, index)">
          <img
            v-if="item.isDefault == '1'"
            src="@/assets/images/customer/checked.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <img
            v-if="item.isDefault != '1'"
            src="@/assets/images/customer/unchecked.png"
            alt=""
            style="width: 40px; height: 40px"
          />
        </div>
        <div>
          <div class="address-content">
            <div class="label">{{ item.contactNo }} <span v-if="item.useFlag == '1'" class="content">常用</span></div>
          </div>
          <div class="zip-code">{{ item.contactNo }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <!-- <van-button plain round color="#c41e21" style="width: 45%">创建计划书</van-button> -->
    <van-button color="#c41e21" round style="margin-left: 20px; flex: 1" @click="goCollection">去投保</van-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, watch } from 'vue';
import { useRouter } from 'vue-router';
import { Toast } from 'vant/es';
import { customerDetail } from '@/api';
import { CustomerResponseData } from '@/api/index.data';
import pageJump from '@/utils/pageJump';
import { sessionStore } from '@/hooks/useStorage';

const list = [
  { label: '出生日期', value: 'birthday' },
  { label: '电子邮箱', value: 'email' },
  { label: '国籍', value: 'nationality' },
  { label: '年收入', value: 'salary' },
  { label: '社保', value: 'hasSocialInsurance' },
  { label: '是否吸烟', value: 'smokeFlag' },
  { label: '收入来源', value: 'incomeSource' },
  { label: '身高', value: 'height' },
  { label: '体重', value: 'weight' },
  { label: '婚姻状况', value: 'marriage' },
  { label: '教育程度', value: 'degree' },
  { label: '职业', value: 'occupation' },
];
const CertList = [
  { label: '身份证', value: 'desensitizaCertNo' },
  { label: '证件有效期', value: 'certValidity' },
];
const incomeSourceMap = {
  '1': '工薪',
  '2': '个体',
  '3': '私营',
  '4': '房屋租赁',
  '5': '金融投资',
  '6': '存款利息',
  '7': '其他',
};

const activeList = ref<string[]>([]);
const state = reactive<CustomerResponseData>({
  addressInfo: [],
  certInfo: [],
  bankCardInfo: [],
  contactInfo: [],
  data: {},
});
const route = useRoute();
const {
  query: { customerId },
} = route;

const getData = () => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  customerDetail({ customerId })
    .then((res) => {
      const { code, data } = res;
      if (code === '10000' && data) {
        state.addressInfo = data.addressInfo;
        state.bankCardInfo = data.bankCardInfo;
        state.contactInfo = data.contactInfo;
        state.certInfo = data.certInfo;
        state.data = data;
      }
    })
    .then(() => {
      Toast.clear();
    });
};
const goCollection = (e: any) => {
  pageJump('infoCollection', {});
  sessionStore.set(
    'contactInfo',
    state.contactInfo.filter((item) => item.isDefault === '1'),
  );
  sessionStore.set(
    'addressInfo',
    state.addressInfo.filter((item) => item.isDefault === '1'),
  );
  sessionStore.set(
    'bankCardInfo',
    state.bankCardInfo.filter((item) => item.isDefault === '1'),
  );
};
const changge = (filed, index) => {
  const data = filed;
  if (filed[index].isDefault !== '1') {
    filed.map((item, i) => {
      if (i === index) {
        item.isDefault = '1';
      } else {
        item.isDefault = '2';
      }
      return item;
    });
  }
  filed = [...data];
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
  padding: 30px;
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
        line-height: 50px;
        display: flex;
        align-items: center;
        margin-top: 13px;
        img {
          width: 30px;
          height: 30px;
          margin-left: 14px;
        }
      }
      .customer-img-collect {
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

.cert-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  .cert-header-title {
    font-size: 30px;
    font-weight: 500;
    color: #393d46;
    line-height: 42px;
  }
  .cert-header-content {
    font-size: 26px;
    font-weight: 400;
    color: #666666;
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
    color: #666666;
    line-height: 37px;
    margin-left: 30px;
  }

  .content {
    margin-left: 20px;
    border-radius: 8px;
    border: 2px solid #c41e21;
    font-size: 22px;
    font-weight: 400;
    color: #c41e21;
    line-height: 30px;
    padding: 5px 12px;
  }
  img {
    width: 40px;
    height: 40px;
  }
  .address-content {
    display: flex;
  }
  .zip-code {
    margin-left: 30px;
    font-size: 26px;
    font-weight: 400;
    color: #666666;
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
