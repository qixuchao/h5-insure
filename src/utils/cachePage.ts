import { RouteRecordName } from 'vue-router';
import useStore from '@/store/app';
import { isNotEmptyArray } from '@/common/constants/utils';

interface RouterMeta {
  title: string;
  cacheTarget: string[];
  cacheSource: string[];
}

interface RouteItem {
  name: RouteRecordName | null | undefined;
  path?: string;
  meta: Partial<RouterMeta>;
}

const isExisted = (arr: string[] | undefined, name: RouteRecordName | null | undefined) => {
  return isNotEmptyArray(arr) && arr?.includes(name as string);
};

/**
 * keep-alive 动态缓存逻辑
 * 警告：！！！！！！
 * 配置缓存的时候，缓存页面的.vue文件中必须填写组件name, 且name和route中得name一致
 *
 */
export const cachePage = (
  from: RouteItem = { meta: {} as RouterMeta, name: '' },
  to: RouteItem = { meta: {} as RouterMeta, name: '' },
) => {
  const { addCachePage, removeCachePage } = useStore();
  // console.log(`起始页面：${from.name}, 目标页面：${to.name}`)
  return new Promise((resolve) => {
    // 作为子应用时，主应用 qiankun 路由会跳转两次，过滤多余的跳转
    // https://github.com/umijs/qiankun/issues/1522
    if (from.path === to.path) {
      resolve(true);
      return;
    }
    // 起始页是否是需要缓存页面
    const isFromInCache = isExisted(from?.meta?.cacheTarget, to.name);
    // 进入页面是否为缓存目标页
    const isToInTarget = isExisted(to?.meta?.cacheSource, from.name);
    // console.log(`起始页面是否需要缓存：${isFromInCache ? '是' : '否'}, 是否为目标页面：${isToInTarget ? '是' : '否'}`)
    // 起始页是否为进入页的目标页
    const isFromInTarget = isExisted(to?.meta?.cacheTarget, from.name);

    // console.log('进入页面是否为当前页面的缓存源头', isFromInTarget)
    // from是需要缓存的页面，且to是缓存目标页 添加缓存
    if (isFromInCache && isToInTarget) {
      // console.log('添加缓存');
      addCachePage(from.name as string);
    } else {
      // from不是to的缓存目标，则说明已经不需要缓存了
      removeCachePage(from.name as string);
    }
    resolve(true);
  });
};

export default null;
