import { defineStore } from 'pinia';
import useTheme from '@/hooks/useTheme';
import { localStore } from '@/hooks/useStorage';

interface StoreThemes {
  theme: string;
  loading: boolean;
  themeVars: Record<string, string>;
}

export const useThemesStore = defineStore({
  id: 'themes', // id必填，且需要唯一
  state: (): StoreThemes => {
    return {
      theme: '#fff000',
      loading: false,
      themeVars: localStore.get('GLOBAL_THEME_STORE') || useTheme(),
    };
  },
  actions: {
    setTheme(theme: string) {
      this.theme = theme;
    },
    setLoading(load: boolean) {
      this.loading = load;
    },
  },
  getters: {},
});

export default null;
