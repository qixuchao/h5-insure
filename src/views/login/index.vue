<template>
  <ZaPageWrap main-class="page-login" footer-class="myfooter">
    <div class="flex mt-8">
      <div class="">账号登录</div>
    </div>
    <VanForm class="mt-8" @submit="onSubmit">
      <VanField
        v-model="username"
        :rules="[{ required: true, message: '请输入邮箱账号' }]"
        name="username"
        placeholder="请输入邮箱账号"
        autocomplete="off"
      />
      <VanField
        v-model="password"
        :rules="[{ required: true, message: '请输入密码' }]"
        name="password"
        type="password"
        placeholder="请输入密码"
        autocomplete="off"
      />
      <div class="p20">
        <VanButton :disabled="isLoadingRef" type="primary" round block native-type="submit"> 登录 </VanButton>
      </div>
    </VanForm>
    <div>
      <RouterLink to="/forgetPassword">忘记密码？</RouterLink>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast, ConfigProvider } from 'vant';

const username = ref('');
const password = ref('');
const isLoadingRef = ref(false);
const router = useRouter();
const themeVars = reactive({
  navBarArrowSize: '1.4rem',
  primaryColor: 'green',
});
const onSubmit = (values: { username: string; password: string }) => {
  const pwd = values.password;
  // values.password = pwd;
  Toast.success({
    message: '登录成功',
    type: 'success',
    onClose: () => {
      router.push({ path: '/' });
    },
  });
};
</script>

<style lang="scss">
.page-main {
  font-size: $zaui-font-size-md;
  .p20 {
    padding: 20px 40px;
  }
}
</style>
