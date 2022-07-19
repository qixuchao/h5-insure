<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-18 14:12:24
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-18 15:07:59
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-login-wrapper">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="formInfo.loginName"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formInfo.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { login } from '@/api/modules/login';
import Storage from '@/utils/storage';

const formInfo = ref({
  loginName: '13122312351',
  password: 'M5p8uqT3RS3u89B2',
  loginType: '1',
});
const loginName = ref('13122312351');
const password = ref('');
const onSubmit = (values) => {
  login(formInfo.value).then(({ code, data }) => {
    if (code === '10000') {
      Toast('登录成功');
      const storage = new Storage({ source: 'cookie' });
      storage.set('token', data.token);
    }
  });
};
</script>
