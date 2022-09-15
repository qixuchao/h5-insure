<template>
  <ProPageWrap class="consult">
    <div class="page-consult">
      <div class="image"></div>
      <div class="register">
        <input v-model="userName" class="input name" placeholder="请输入姓名" maxlength="5" @input="inputName" />
        <p class="message">
          <span>{{ userNameErrMsg }}</span>
        </p>
        <input v-model="phone" class="input phone" placeholder="请输入手机号" maxlength="11" @input="inputPhone" />
        <p class="message">
          <span>{{ phoneErrMsg }}</span>
        </p>
        <div class="codeBox">
          <input
            v-model="validCode"
            class="input validCode"
            placeholder="请输入验证码"
            maxlength="11"
            @input="inputCode"
          />
          <span v-if="!state.waitValidBtn" class="codeText" @click="veriCode">获取验证码</span>
          <span v-else class="codeText">{{ state.timerCodeMsg }}</span>
        </div>
        <p class="message">
          <span>{{ codeErrMsg }}</span>
        </p>
        <div class="registerBtn" style="" @click="getRegister"></div>
      </div>
      <div class="equity"></div>
      <div class="describe">
        以上仅供权益宣传简单说明，具体权益内容及使用规则由权益服务方——青岛医护之家解释及说明，权益用户需在权益卡激活时充分了解知悉，双方因此产生的争议与白鸽宝保险经纪无关。
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { sha256 } from 'js-sha256';
import crypto from '@/utils/crypto';
import { getUserInfo, buriedMobileVerifyCode, buriedVerifyMobileCode } from '@/api/modules/consult';

const route = useRoute();

/** 页面query参数类型 */
interface QueryData {
  phoneNo: string;
  [key: string]: any;
}

const { phoneNo = '' } = route.query as QueryData;

const userName = ref('');

const phone = ref(crypto.decrypt(phoneNo));

const validCode = ref('');

const userNameErrMsg = ref('');

const phoneErrMsg = ref('');

const codeErrMsg = ref('');

const router = useRouter();

const state = reactive({
  waitValidBtn: false, // 是否出现等待验证码
  timerCodeMsg: '等待验证码',
  count: null,
});

// 手机号只允许输入正整数
const inputPhone = (e: any) => {
  phoneErrMsg.value = ''; // 输入电话时错误提示关闭
  const filtered = e.target.value.replace(/^0|[^\d]/g, '');
  if (phone.value !== filtered) {
    phone.value = filtered;
  }
};

const inputName = (e: any) => {
  userNameErrMsg.value = ''; // 输入姓名时错误提示关闭
};

const inputCode = (e: any) => {
  codeErrMsg.value = ''; // 输入验证码时错误提示关闭
};

// 验证姓名手机号是否填写、手机号格式
const isTrue = () => {
  const reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
  if (userName.value.length === 0 && phone.value.length === 0) {
    userNameErrMsg.value = '请输入姓名';
    phoneErrMsg.value = '请输入手机号';
    return false;
  }
  if (userName.value.length === 0 && phone.value.length !== 0 && reg.test(phone.value)) {
    userNameErrMsg.value = '请输入姓名';
    return false;
  }
  if (userName.value.length === 0 && phone.value.length !== 0 && !reg.test(phone.value)) {
    userNameErrMsg.value = '请输入姓名';
    phoneErrMsg.value = '请输入正确的手机号';
    return false;
  }
  if (userName.value.length !== 0 && phone.value.length === 0) {
    phoneErrMsg.value = '请输入手机号';
    return false;
  }
  if (userName.value.length !== 0 && phone.value.length !== 0 && !reg.test(phone.value)) {
    phoneErrMsg.value = '请输入正确的手机号';
    return false;
  }
  userNameErrMsg.value = '';
  phoneErrMsg.value = '';
  return true;
};

// 验证验证码必填
const isCode = () => {
  if (validCode.value.length === 0) {
    codeErrMsg.value = '请输入验证码';
    return false;
  }
  codeErrMsg.value = '';
  return true;
};

// 等待验证码倒计时
const countdown = () => {
  let sec = 60;
  state.count = setInterval(() => {
    if (sec > 0) {
      state.timerCodeMsg = `${sec}s`;
      sec -= 1;
    } else {
      state.waitValidBtn = false;
      state.timerCodeMsg = '等待验证码';
      clearInterval(state.count);
      sec = 59;
    }
  }, 1000);
};

// 获取验证码
const veriCode = () => {
  if (isTrue() === true) {
    state.waitValidBtn = true;
    buriedMobileVerifyCode(phone.value)
      .then((res) => {
        if (res.code === '10000') {
          countdown();
        } else {
          codeErrMsg.value = res.message;
          state.timerCodeMsg = '等待验证码';
          state.waitValidBtn = false;
        }
      })
      .catch((error) => {
        state.waitValidBtn = false;
        state.timerCodeMsg = '等待验证码';
      });
  }
};

// 点击登记领取
const getRegister = () => {
  if (isTrue() === true && isCode() === true) {
    buriedVerifyMobileCode({
      code: validCode.value,
      mobile: phone.value,
    }).then((ValidRes) => {
      if (ValidRes.code === '10000') {
        const key = computed(() => {
          return `phoneNo=${phone.value}&userName=${userName.value}&key=chuangxin`;
        });
        getUserInfo({
          phoneNo: phone.value,
          sign: sha256(key.value),
          userName: userName.value,
        }).then((res) => {
          const { code, data } = res;
          if (code === '10000') {
            const address = data.url;
            router.push({ path: '/result', query: { url: address } });
          }
        });
      } else {
        codeErrMsg.value = ValidRes.message;
      }
    });
  }
};
onMounted(() => {
  const p = crypto.decrypt(phoneNo);
  console.error('从URL拿phoneNo加密串', phoneNo);
  console.error('从URL拿phoneNo后解密', p);
  console.error('拿手机号再次加密', crypto.encrypt(p));
  console.error('自己加密自己解密', crypto.decrypt(crypto.encrypt(p)));
});
</script>

<style lang="scss" scoped>
.page-consult {
  background-image: url('@/assets/images/consult/bg.png');
  background-color: #00b6fa;
  background-size: cover;
  height: 1624px;
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
    height: 527px;
    width: 730px;
    background-size: cover;
    position: absolute;
    left: 10px;
    top: 510px;
    padding: 38px;
    .input {
      padding-left: 40px;
      width: 658px;
      height: 88px;
      background: #ffffff;
      border: none;
      border-radius: 16px;
    }
    .message {
      font-size: 16px;
      color: $zaui-danger;
      height: 32px;
      padding-left: 40px;
    }

    .codeText {
      position: absolute;
      left: 520px;
      top: 300px;
      cursor: pointer;
      font-size: 30px;
      color: $zaui-aide-text-stress;
    }
    .registerBtn {
      background-image: url('@/assets/images/consult/btn.png');
      height: 108px;
      width: 658px;
      background-size: 100%;
    }
  }
  .equity {
    background-image: url('@/assets/images/consult/img_quanyi.png');
    height: 472px;
    width: 731px;
    background-size: 100%;
    position: absolute;
    left: 10px;
    top: 1047px;
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
    top: 1522px;
  }
}
input::-webkit-input-placeholder {
  color: #91b1c8;
  font-size: 30px;
}
.consult {
  background-color: #00b6fa;
}
</style>
