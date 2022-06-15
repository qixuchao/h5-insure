/*
 * @Description: user store
 * @Autor: kevin.liang
 * @Date: 2022-02-15 11:31:00
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-02-18 16:02:31
 */
import { defineStore } from 'pinia';
// import { loginPassword, userGet } from '@/api/modules/user';

interface StoreUser {
  token: string;
  userInfo: AnyObject;
}

const theme = defineStore({
  // 这里的id必须为唯一ID
  id: 'user',
  state: (): StoreUser => {
    return {
      token: 'token',
      userInfo: {},
    };
  },
  // actions可以用async做成异步形式
  actions: {
    // 本地调试，通过假的接口登录
    loginByPassword(payload: AnyObject) {
      return new Promise((resolve, reject) => {
        // const { data, error } = loginPassword(payload);
        // watch(data, () => {
        //   // useCookies().set(VITE_TOKEN_KEY as string, data.value.token);
        //   resolve(data.value);
        // });
        // watch(error, () => {
        //   reject(error.value);
        // });
      });
    },
    // 通过APP 中间页登录
    loginByAuth(payload: AnyObject) {
      console.log(payload);
    },
    async userGet(payload: AnyObject) {
      // const { data, error } = await userGet(payload);
      // this.user = data.value;
    },
    userLogout() {
      return new Promise((resolve) => {
        // useCookies().remove(VITE_TOKEN_KEY as string);
        window.location.href = '/';
        resolve('退出成功');
      });
    },
  },
});

export default theme;
