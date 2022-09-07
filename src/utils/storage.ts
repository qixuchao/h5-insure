type SoucreType = 'cookie' | 'sessionStorage' | 'localStorage';

/**
 * 获取数据源
 * @param {string} sourceKey 数据源标识
 */
const getSource = (sourceKey: string) => {
  switch (sourceKey) {
    case 'cookie':
      return document.cookie;

    case 'sessionStorage':
      return window.sessionStorage;

    default:
      return window.localStorage;
  }
};

/**
 * 获取cookie值
 * @param {string} key 字段
 */
const getCookie = (key: string) => {
  const arr = document.cookie.match(new RegExp(`(^| )${key}=([^;]*)(;|$)`));
  // TODO 将过期的undefined处理一下
  if (arr !== null) {
    return unescape(arr[2]);
  }
  return null;
};
interface StorageProps {
  source: SoucreType;
  [key: string]: any;
}
/**
 * 浏览器缓存数据存取
 * @constructor Storage({ source: 'cookie' })
 * @param {object} props { source: 'cookie' | 'sessionStorage' | 'localStorage' }
 * @example
 *  const storage = new Storage({ source: 'sessionStorage' });
 *  let token = storage.set('token', '这里是存储的值nihao', 2);
 *  let token = storage.get('token');
 *  console.log('token:', token);
 */
export default class Storage {
  props: StorageProps;

  source: SoucreType = 'sessionStorage';

  private store: any;

  constructor(props: StorageProps) {
    this.props = props;

    this.store = getSource(this.props.source);
  }

  /**
   * 取值
   * @param {string} key 字段
   */
  get(key: string) {
    let result: any = null;
    if (this.props.source === 'cookie') {
      const value = getCookie(key);
      try {
        result = JSON.parse(value as string);
      } catch (err) {
        console.warn('存储数据不是正确的格式');
        result = value;
      }
      return result;
    }

    const timeout = this.store.getItem(`${key}__expires__`);
    if (timeout && new Date().getTime() >= timeout) {
      this.remove(key);
    }
    const value = this.store.getItem(key);
    try {
      result = JSON.parse(value);
    } catch (err) {
      console.warn('存储数据不是正确的格式');
      result = value;
    }
    return result;
  }

  /**
   * 设置值
   * @param {string} key 字段
   * @param {*} value 值
   * @param {number} timeout 过期时间（小时）
   * @param {string} path cookie路径
   */
  set(key: string, value: any, timeout?: number, path?: string) {
    const timer = timeout || this.props.timeout;
    let expires: any = '';

    if (timer) {
      expires = new Date().getTime() + 1000 * 60 * 60 * timer;
    }

    if (this.props.source === 'cookie') {
      let expiresConfig = '';
      if (timer) {
        const date: any = new Date();
        date.setTime(expires);
        expiresConfig = `; expires=${date.toGMTString()}`;
      }
      document.cookie = `${key}=${value}${expiresConfig}; path=${path}`;
    } else {
      this.store.setItem(key, JSON.stringify(value));
      if (timer) {
        this.store.setItem(`${key}__expires__`, expires);
      }
    }

    return value;
  }

  /**
   * 删除值
   * @param {string} key 字段
   */
  remove(key: string) {
    if (this.props.source === 'cookie') {
      this.set(key, '', -1);
    } else {
      this.store.removeItem(key);
      this.store.removeItem(`${key}__expires__`);
    }
  }

  /**
   * 清空所有值
   */
  removeAll() {
    if (this.props.source === 'cookie') {
      const keys = document.cookie.match(/[^=;]+(?=)/g);
      if (keys) {
        for (let i = 0; i < keys.length; i += 1) {
          this.set(keys[i], '', -1);
        }
      }
    } else {
      this.store.clear();
    }
  }
}
