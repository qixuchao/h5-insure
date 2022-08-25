<template>
  <ProPageWrap>
    <div class="page-consult">
      <div class="image"></div>
      <div class="register">
        <input v-model="userName" class="input name" placeholder="请输入姓名" maxlength="30" @input="inputName" />
        <p v-show="userNameErrMsg" class="errName">
          <span>{{ userNameErrMsg }}</span>
        </p>
        <input v-model="phoneNo" class="input phone" placeholder="请输入手机号" maxlength="11" @input="inputPhone" />
        <p v-show="phoneErrMsg" class="errPhone">
          <span>{{ phoneErrMsg }}</span>
        </p>
        <div class="registerBtn" style="" @click="getRegister"></div>
      </div>
      <div class="equity"></div>
      <div class="describe">
        以上仅供权益宣传简单说明，具体权益内容及使用规则由权益服务方——青岛医护之家解释及说明，权益用户需在权益卡激活时充分了解知悉，双方因此产生的争议与白鸽保经纪无关。
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { sha256 } from 'js-sha256';
import { getUserInfo } from '@/api/modules/consult';

const route = useRoute();

const userName = ref('');

const phoneNo = ref(route.query.phoneNo);

const userNameErrMsg = ref('');

const phoneErrMsg = ref('');

const router = useRouter();

// 手机号只允许输入正整数
const inputPhone = (e: any) => {
  phoneErrMsg.value = ''; // 输入电话时错误提示关闭
  const filtered = e.target.value.replace(/^0|[^\d]/g, '');
  if (phoneNo.value !== filtered) {
    phoneNo.value = filtered;
  }
};

const inputName = (e: any) => {
  userNameErrMsg.value = ''; // 输入姓名时错误提示关闭
};

// 验证姓名手机号是否填写、手机号格式
const isTrue = () => {
  const reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
  if (userName.value.length === 0 && phoneNo.value?.length === 0) {
    userNameErrMsg.value = '请输入姓名';
    phoneErrMsg.value = '请输入手机号';
    return false;
  }
  if (userName.value.length === 0 && phoneNo.value?.length !== 0 && reg.test(phoneNo.value)) {
    userNameErrMsg.value = '请输入姓名';
    return false;
  }
  if (userName.value.length === 0 && phoneNo.value?.length !== 0 && !reg.test(phoneNo.value)) {
    userNameErrMsg.value = '请输入姓名';
    phoneErrMsg.value = '请输入正确的手机号';
    return false;
  }
  if (userName.value.length !== 0 && phoneNo.value?.length === 0) {
    phoneErrMsg.value = '请输入手机号';
    return false;
  }
  if (userName.value.length !== 0 && phoneNo.value?.length !== 0 && !reg.test(phoneNo.value)) {
    phoneErrMsg.value = '请输入正确的手机号';
    return false;
  }
  userNameErrMsg.value = '';
  phoneErrMsg.value = '';
  return true;
};

// 点击登记领取
const getRegister = () => {
  if (isTrue() === true) {
    // const name = computed(() => {
    //   return userName ? `userName=${userName.value}` : '';
    // });
    const key = computed(() => {
      return `phoneNo=${phoneNo.value}&userName=${userName.value}&key=chuangxin`;
    });
    getUserInfo({
      phoneNo: phoneNo.value,
      sign: sha256(key.value),
      userName: userName.value,
    }).then((res) => {
      const { code, data } = res;
      if (code === '10000') {
        const address = data.url;
        router.replace({ path: '/result', query: { url: address } });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.page-consult {
  background-image: url('@/assets/images/consult/bg.png');
  background-size: cover;
  height: 100%;
  width: 100%;
  position: relative;
  .image {
    background-image: url('@/assets/images/consult/img_zhutu.png');
    height: 892px;
    width: 750px;
    background-size: cover;
  }
  .register {
    background-image: url('@/assets/images/consult/img_input.png');
    height: 442px;
    width: 730px;
    background-size: cover;
    position: absolute;
    left: 10px;
    top: 575px;
    .input {
      padding-left: 40px;
      width: 658px;
      height: 88px;
      background: #ffffff;
      border: none;
      border-radius: 16px;
    }
    .name {
      margin-bottom: 30px;
      position: absolute;
      left: 35px;
      top: 59px;
    }
    .phone {
      position: absolute;
      left: 35px;
      top: 177px;
    }
    .errPhone {
      position: absolute;
      left: 60px;
      top: 270px;
      font-size: 16px;
      color: red;
    }
    .errName {
      position: absolute;
      left: 60px;
      top: 147px;
      font-size: 16px;
      color: red;
    }
    .registerBtn {
      background-image: url('@/assets/images/consult/btn.png');
      height: 108px;
      width: 678px;
      background-size: cover;
      position: absolute;
      left: 26px;
      top: 300px;
    }
  }
  .equity {
    background-image: url('@/assets/images/consult/img_quanyi.png');
    height: 472px;
    width: 731px;
    background-size: cover;
    position: absolute;
    left: 10px;
    top: 1027px;
  }
  .describe {
    height: 100px;
    width: 704px;
    font-size: 20px;
    font-weight: 400;
    color: #def6ff;
    line-height: 28px;
    position: absolute;
    left: 23px;
    top: 1512px;
  }
}
input::-webkit-input-placeholder {
  color: #91b1c8;
  font-size: 30px;
}
</style>
