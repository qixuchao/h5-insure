import get from 'lodash-es/get';
import { defineStore } from 'pinia';

interface StoreThemes {
  type: string;
  themes: AnyObject;
  loading: boolean;
  currentThemes: AnyObject;
}

export const useThemesStore = defineStore({
  id: 'themes', // id必填，且需要唯一
  state: (): StoreThemes => {
    return {
      themes: {},
      type: '',
      loading: false,
      currentThemes: {},
    };
  },
  actions: {
    setThemes(themes: AnyObject, type: string) {
      this.themes = themes;
      this.type = type;
    },
    setLoading(load: boolean) {
      this.loading = load;
    },
  },
  getters: {
    currentThemes: (state) => state.themes[state.type],
    getIconUrl: (state) => {
      return (url: string) => get(state.currentThemes, url);
    },
    currentType: (state) => state.type,
  },
});

export default null;
