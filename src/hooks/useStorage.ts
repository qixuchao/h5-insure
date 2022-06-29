/*
 * @Description: 返回统一封装的storage（sessionStorage、localStorage）
 * @Autor: kevin.liang
 * @Date: 2022-02-22 11:29:04
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-04-22 21:50:14
 */
import Storage from '@/utils/storage';

export const sessionStore = new Storage({ source: 'sessionStorage' });

export const localStore = new Storage({ source: 'localStorage' });

export const cookie = new Storage({ source: 'cookie' });

export const useSessionStorage = () => {
  return sessionStore || new Storage({ source: 'sessionStorage' });
};

export const useLocalStorage = () => localStore || new Storage({ source: 'localStorage' });

export const useCookie = () => cookie || new Storage({ source: 'cookie' });

export default {
  sessionStore,
  localStore,
  cookie,
};
