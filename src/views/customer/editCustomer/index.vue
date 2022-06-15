<template>
  <div class="edit-customer">
    <van-cell-group>
      <van-cell title-class="label1">
        <template #title>
          <img src="@/assets/images/customer/info.png" class="line" />
          <span class="custom-title">个人信息</span>
        </template>
      </van-cell>
      <van-field
        v-if="userInfo.nickname"
        v-model="userInfo.nickname"
        label="微信昵称"
        label-class="label"
        input-align="right"
        placeholder="昵称"
        maxlength="20"
        :readonly="userInfo.nickname ? true : false"
        class="weixin-balel"
      >
        <template #right-icon>
          <img src="@/assets/images/customer/copy.png" alt="" class="copy" @click="handleCopy(userInfo.nickname)" />
        </template>
      </van-field>
      <van-field v-model="userInfo.name" label-class="label" input-align="right" placeholder="请输入客户姓名">
        <template #label>
          <span>
            <span class="custom-title">客户姓名<span class="star">*</span> </span>
          </span>
        </template>
      </van-field>

      <van-cell title="性别" title-class="label">
        <template #value>
          <div class="f-select">
            <div
              v-for="item in list"
              :key="item.value"
              class="m-box"
              :class="{ active: checked === item.value }"
              @click="handleClick(item.value)"
            >
              <img :src="`${checked === item.value ? item.img2 : item.img1}`" class="cm-img" /> {{ item.label }}
            </div>
          </div>
        </template>
      </van-cell>

      <van-cell title="出生日期" title-class="label" is-link @click="show = true">
        <template #value>
          <span v-if="userInfo.birthday">{{ userInfo.birthday }}</span>
          <span v-else class="cell-val">请输入客户出生日期</span>
        </template>
      </van-cell>

      <van-field
        v-model="userInfo.phone"
        maxlength="11"
        type="tel"
        label-class="label"
        input-align="right"
        placeholder="请输入客户的手机号码"
      >
        <template #label>
          <span>
            <span class="custom-title">手机号码<span class="star">*</span> </span>
          </span>
        </template>
        <template #right-icon>
          <img src="@/assets/images/customer/copy.png" alt="" class="copy" @click="handleCopy(userInfo.phone)" />
        </template>
      </van-field>
      <van-field
        v-model="userInfo.email"
        label="电子邮箱"
        label-class="label"
        input-align="right"
        placeholder="请输入客户邮箱账号"
      >
        <template #right-icon>
          <img src="@/assets/images/customer/copy.png" alt="" class="copy" @click="handleCopy(userInfo.email)" />
        </template>
      </van-field>
      <van-cell title="所在地区" title-class="label" is-link @click="placeShow = true">
        <template #value>
          <span v-if="userInfo.place">{{ userInfo.place }}</span>
          <span v-else class="cell-val">请选择客户所在地区</span>
        </template>
      </van-cell>
      <van-field
        v-model="userInfo.address"
        label="详细地址"
        label-class="label"
        input-align="right"
        placeholder="请输入通讯地址"
        maxlength="100"
        @focus="handleFocus"
      >
      </van-field>
    </van-cell-group>
  </div>
  <van-popup v-model:show="show" position="bottom" :style="{ height: '40%' }">
    <van-datetime-picker
      type="date"
      title="选择年月日"
      :min-date="new Date(1900, 0, 1)"
      @confirm="handleTime"
      @cancel="show = false"
    />
  </van-popup>
  <van-popup v-model:show="placeShow" position="bottom" :style="{ height: '40%' }">
    <van-area title="地区选择" :area-list="areaList" @confirm="handlePlace" @cancel="placeShow = false" />
  </van-popup>
  <div v-if="route.query.agentCustomerId && customerType !== '03'" v-show="showBtn" v-resize class="footer">
    <van-button plain type="primary" class="btn" @click="handleDelete">删除</van-button>
    <van-button type="primary" class="btn1" @click="handleSave">保存</van-button>
  </div>
  <div v-else v-resize class="footer">
    <van-button type="primary" class="btn-enable" @click="handleSave">保存</van-button>
  </div>
</template>

<script lang="ts" setup>
import { Toast, Dialog } from 'vant';
import dayjs from 'dayjs';
import { areaList } from '@vant/area-data';
import useCheckBack from '@/hooks/useCheckBack';
import { saveCustomer, removeCustomer, searchCustomerDetail } from '@/api/modules/customer';
import { useThemesStore } from '@/store/themes';
import { addRelatedCustomer } from '@/api/modules/visit';

const { getIconUrl } = useThemesStore();

const list = [
  {
    label: '男',
    img1: getIconUrl('customer.m1'),
    img2: getIconUrl('customer.m2'),
    value: 1,
  },
  {
    label: '女',
    img1: getIconUrl('customer.f1'),
    img2: getIconUrl('customer.f2'),
    value: 2,
  },
];
const info = reactive({
  userInfo: {
    name: '',
    nickname: '',
    phone: '',
    gender: '',
    email: '',
    birthday: '',
    address: '',
    openNo: '',
    place: '',
  },
});
const router = useRouter();
const route = useRoute();
const show = ref(false);
const placeShow = ref(false);
const checked = ref(0);
const { userInfo } = toRefs(info);
console.log('>route>>>route', route.query);
useCheckBack(userInfo, checked);

const { agentCustomerId, customerType, tenantId, userId } = route.query;
useCheckBack(info, checked);
const getData = async () => {
  const { data } = await searchCustomerDetail({
    agentCustomerId,
    customerType,
    // tenantId,
    // userId,
    // customerId: '1',
    // customerType: '准客户',
    // userId: 'userid02071600',
    // tenantId: '0',
  });
  if (data.data) {
    userInfo.value.address = data.data.address;
    [userInfo.value.place, userInfo.value.address] = data.data.address.split('/');
    userInfo.value.birthday = data.data.birthday;
    userInfo.value.email = data.data.email;
    userInfo.value.gender = data.data.gender;
    userInfo.value.name = data.data.customerName;
    userInfo.value.nickname = data.data.nickname;
    userInfo.value.openNo = data.data.openNo;
    userInfo.value.phone = data.data.phone;
    if (data.data.gender) {
      checked.value = data.data.gender === 'F' ? 2 : 1;
    }
    useCheckBack(userInfo, checked);
  }
};

onMounted(() => {
  agentCustomerId && getData();
  if (route.query.wechatNickname) {
    userInfo.value.nickname = route.query.wechatNickname || '';
  }
});

const showBtn = ref(true);
watch(
  () => document.body.scrollHeight,
  (newHeight, oldHeight = 0) => {
    console.log(22, document.body.scrollHeight);
    if (newHeight > oldHeight) {
      showBtn.value = true;
    } else {
      showBtn.value = false;
    }
  },
  {
    immediate: true,
  },
);
const handleFocus = (e: any) => {
  setTimeout(() => {
    if (e.target) {
      e.target.scrollIntoView();
    }
  }, 200);
};
const handleTime = (val: string) => {
  userInfo.value.birthday = dayjs(val).format('YYYY-MM-DD');
  show.value = false;
};

const handlePlace = (val: string[]) => {
  const nameArr: string[] = [];
  val.forEach((e) => {
    nameArr.push(e.name);
  });
  userInfo.value.place = nameArr.join('');
  placeShow.value = false;
};

const handleCopy = (val: string) => {
  if (val) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', val);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      Toast('已复制');
    }
    // 删除'虚拟'DOM
    document.body.removeChild(input);
  }
};

const handleClick = (val: number) => {
  checked.value = val;
};

// 保存
// eslint-disable-next-line consistent-return
const handleSave = async () => {
  const v1 = /(^[\u4e00-\u9fa5·]{2,20}$)|(^[a-zA-Z.]{4,40}$)/;
  const ph = /^1[3-9]\d{9}$/;
  const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (!userInfo.value.name || !userInfo.value.phone) {
    return Toast('请填写必填项');
  }
  if (!v1.test(userInfo.value.name)) {
    return Toast('请输入正确的客户名');
  }
  if (userInfo.value.phone && !ph.test(userInfo.value.phone)) {
    return Toast('请输入正确的手机号');
  }
  if (userInfo.value.email && !email.test(userInfo.value.email)) {
    return Toast('邮箱格式错误，请重新输入');
  }
  saveCustomer({
    address: userInfo.value.address,
    place: userInfo.value.place,
    agentCustomerId,
    customerType: '02',
    customerName: userInfo.value.name,
    gender: checked.value ? (checked.value === 2 ? 'F' : 'M') : '',
    phone: userInfo.value.phone,
    email: userInfo.value.email,
    birthday: userInfo.value.birthday,
    // userId,
    wechatNickname: userInfo.value.nickname,
  }).then((res) => {
    if (res.data.status === 200) {
      if (route.query?.isVisit && route.query?.isVisit === 'Y') {
        addRelatedCustomer({
          visitorId: route.query.visitId,
          agentCustomerId: res.data?.data,
          customerType: '02',
        })
          .then((resadd) => {
            if (resadd.data.data === '关联成功') {
              useCheckBack();
              Toast.success('创建客户并关联成功');
              router.back();
            }
          })
          .catch((e) => {
            console.log(e);
            Toast.fail('创建客户成功，关联失败');
            router.back();
          });
      } else {
        useCheckBack();
        Toast('保存成功！');
        router.back();
      }
    }
  });
};

// 删除
const handleDelete = () => {
  Dialog.confirm({
    title: '提示',
    message: '您确认要删除客户信息吗',
    confirmButtonText: '确认',
  })
    .then(async () => {
      await removeCustomer({
        agentCustomerId,
        customerType,
        tenantId,
      });
      Toast('删除成功').$nextTick(() => {
        useCheckBack();
        router.go(-2);
      });
    })
    .catch(() => {});
};
</script>

<style lang="scss" scoped>
::v-deep {
  .van-cell {
    font-size: 30px;
    padding: 29px 30px;
    color: var(--van-field-label-color);
    --van-field-input-text-color: #343434;
  }
  .van-cell:after {
    right: 0px;
    border-bottom: 1px solid #f4f5f7;
  }
  .label1 {
    color: #343434;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .label {
    color: #616161;
  }
  .van-field__body {
    color: red;
  }
  .van-cell__value {
    color: #343434;
    // color: red;
  }
  .van-cell-group--inset {
    margin: 0;
  }
  .van-icon {
    line-height: inherit;
  }
}
.edit-customer {
  overflow-y: auto;
  height: calc(100vh - 150px);
  background: #f4f5f7;
  .label {
    color: #616161;
  }

  .line {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    vertical-align: text-top;
  }
  input::placeholder {
    color: #bcbcbc;
  }
  .cell-val {
    color: #bcbcbc;
    font-size: 30px;
  }

  .copy {
    width: 36px;
    vertical-align: sub;
  }
  .star {
    color: $primary-color;
  }

  .f-select {
    display: flex;
    justify-content: space-between;
  }
  .active {
    background: $btn-background;
    border: 2px solid $btn-background;
    color: #fff !important;
  }
  .m-box {
    width: 160px;
    height: 60px;
    border-radius: 8px;
    font-size: 30px;
    color: #bcbcbc;
    border: 2px solid #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;

    .cm-img {
      width: 30px;
      height: 30px;
    }
  }
}
.footer {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  box-shadow: 0 -2px 10px 0 #f6f6f6;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 32px 0;
  color: $primary-color;
  border-top: 1px solid #f5f5f5;
  .btn-enable {
    border-color: #ffffff;
    width: 690px;
    height: 88px;
    // background: linear-gradient(90deg, #ff8383 0%, #ffb285 100%);
    border-radius: 44px;
    font-size: 32px;
    font-weight: 600;
    color: #ffffff;
  }
  .btn {
    width: 200px;
    height: 88px;
    font-size: 32px;
    font-weight: 600;
    border-radius: 44px;
    color: $primary-color;
  }
  .btn1 {
    width: 470px;
    height: 88px;
    font-size: 32px;
    font-weight: 600;
    background: $btn-background;
    border-radius: 44px;
  }
}
</style>
