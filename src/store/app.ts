import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { NextStepRequestData } from '@/api/index.data';

export interface AppState {
  theme: string;
  primaryColor: string;
  checkBack: boolean;
  dailyWeekRange: [string, string];
  playingUrl: string;
  playStatus: 'playing' | 'pause' | 'stop';
  orderDetail: NextStepRequestData;
  appId: string;
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
      appId: 'wxd47d36cc8936bd0c', // 当前页面运行的微信公众号（只有需要授权的页面才调）
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
  },
});

export default useStore;
