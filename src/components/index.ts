/*
 * @Description: 需要全局注册的组件统一注册
 * @Autor: kevin.liang
 * @Date: 2022-03-08 13:51:54
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-03-08 14:49:01
 */
/* eslint-disable prettier/prettier */
import { Component } from 'vue';
import ZaAvatar from './ZaAvatar/index.vue';
import ZaCircleProgress from './ZaCircleProgress/index.vue';
import ZaMap from './ZaMap/index.vue';
import ZaSvg from './ZaSvg/index.vue';
import ZaPageWrap from './ZaPageWrap/index';
import ZaFilterTab from './ZaFilterTab/index.vue';
// import Stitle from './Stitle/index.vue'

interface ComponentMap {
  [key: string]: Component;
}

// 所有全局组件集合
export const globalComs: ComponentMap = {
  ZaAvatar, //  头像
  ZaCircleProgress, // 半圆进度条
  ZaMap, // 百度地图组件（未完成）
  ZaSvg, // 本地svg组件，svg文件放到assets/svg/目录下
  ZaPageWrap, // 页面布局包裹组件 ，每个页面都用这个包一次，方便后面做全局调整
  ZaFilterTab, //
  // Stitle,
};

function install(app: any) {
  Object.keys(globalComs).map((key) => app.component(key, globalComs[key]));
}

export default {
  install,
};
