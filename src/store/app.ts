import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { getDic } from '@/api';
import { sessionStore } from '@/hooks';
import { NoTransform } from '@/common/constants';
import { NextStepRequestData } from '@/api/index.data';

const transformDictToEnum = (dictItemList: { name: string; code: string | number; value: string | number }[]) => {
  return dictItemList.map((item) => ({
    ...item,
    value: item.code,
    label: item.name || item.value,
  }));
};

export interface AppState {
  theme: string;
  primaryColor: string;
  checkBack: boolean;
  dailyWeekRange: [string, string];
  playingUrl: string;
  playStatus: 'playing' | 'pause' | 'stop';
  orderDetail: NextStepRequestData;
  dictMap: object;
  appId: string;
  CACHE_PAGE_LIST: string[];
}

const useStore = defineStore<
  string,
  AppState,
  { getThemeType: (state: AppState) => string },
  {
    setThemeType: (type: string) => void;
    dailyWeekRangeReset: () => void;
    setPlayUrl: (url: string) => void;
    setPlayStatus: (status: 'playing' | 'pause' | 'stop') => void;
    setOrderDetail: (detail: NextStepRequestData) => void;
    getDict: (codes: string[]) => void;
    addCachePage: (name?: string) => void;
    removeCachePage: (name?: string) => void;
  }
>({
  // 这里的id必须为唯一ID
  id: 'app',
  state: () => {
    return {
      theme: 'default', // 主题类型  default、blue
      primaryColor: '$primary-color',
      checkBack: false,
      dailyWeekRange: [
        dayjs().startOf('week').format('YYYY-MM-DD HH:mm:ss'),
        dayjs().endOf('week').format('YYYY-MM-DD HH:mm:ss'),
      ],
      playingUrl: '',
      playStatus: 'stop',
      orderDetail: {} as NextStepRequestData,
      dictMap: sessionStore.get('PRODUCT_DICT_DATA') || {},
      appId: '', // 当前页面运行的微信公众号（只有需要授权的页面才调）
      CACHE_PAGE_LIST: [] as string[], // 动态缓存页面 name集合
    };
  },
  // 等同于vuex的getter
  getters: {
    getThemeType: (state) => state.theme,
  },
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    setThemeType(type: string) {
      this.theme = type;
    },
    dailyWeekRangeReset() {
      this.dailyWeekRange = [
        dayjs().startOf('week').format('YYYY-MM-DD HH:mm:ss'),
        dayjs().endOf('week').format('YYYY-MM-DD HH:mm:ss'),
      ];
    },
    setPlayUrl(url: string) {
      this.playingUrl = url;
    },
    setPlayStatus(status: 'playing' | 'pause' | 'stop') {
      this.playStatus = status;
    },
    setOrderDetail(detail: NextStepRequestData) {
      this.orderDetail = detail;
    },
    // 登出，并清空所有sessionStorage 和cookie 数据
    async getDict(codes: string[]) {
      // 把已经加载过的code过滤掉
      const dictCodeList = codes.filter((c: string) => c && !this.dictMap[c]);
      if (!dictCodeList.length) return;
      await getDic({
        dictCodeList,
      }).then((res: any) => {
        res.data.forEach((item: { dictCode: string; dictItemList: any[] }) => {
          // 对字典结构转换成咱们用的label-value 注意特殊 职业信息 OCCUPATION 后缀
          const dictValue = NoTransform.some((dictCode) => item.dictCode.includes(dictCode))
            ? item.dictItemList
            : transformDictToEnum(item.dictItemList);
          this.dictMap[item.dictCode] = dictValue;
        });
        sessionStore.set('PRODUCT_DICT_DATA', this.dictMap);
      });
    },
    /**
     * 添加页面缓存
     * @param name 要添加的页面 name
     */
    addCachePage(name: string) {
      if (name && !this.CACHE_PAGE_LIST.includes(name)) {
        this.CACHE_PAGE_LIST = [...this.CACHE_PAGE_LIST, name];
      }
    },
    /**
     * 移除页面缓存
     * @param name 要移除的页面 name, 不传则移除所有
     */
    removeCachePage(name?: string) {
      this.CACHE_PAGE_LIST = name ? this.CACHE_PAGE_LIST.filter((item) => item !== name) : [];
    },
  },
});

export default useStore;
