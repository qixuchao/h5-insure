import { Component } from 'vue';
/*
 * @Description: 需要全局注册的组件统一注册
 * @Autor: kevin.liang
 * @Date: 2022-03-08 13:51:54
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-25 16:41:44
 */
/* eslint-disable prettier/prettier */
import ZaAvatar from './ZaAvatar/index.vue';
import ZaCircleProgress from './ZaCircleProgress/index.vue';
import ZaMap from './ZaMap/index.vue';
import ProSvg from './ProSvg/index.vue';
import ProPageWrap from './ProPageWrap/index';
import ZaFilterTab from './ZaFilterTab/index.vue';
import ProTitle from './ProTitle/index.vue'
import ProExpand from './ProExpand/index.vue'
import ProPreviewPDF from './ProPreviewPDF/index.vue'
import ProSign from './ProSign/index.vue'
import ProCell from './ProCell/index.vue'
import ProForm from './ProForm/index.vue'
import ProField from './ProField/index.vue'
import ProRadioButton from './ProRadioButton/index.vue'
import ProCheckButton from './ProCheckButton/index.vue'
import ProTabBButton from './ProCheckButton/TabButton.vue'
import ProCheckboxButton from './ProCheckboxButton/index.vue'
import ProMessage from './ProMessage/index.vue'
import ProCard from './ProCard/index.vue'
import ProPicker from './ProPicker/index.vue'
import ProDatePicker from './ProDatePicker/index.vue'
import ProSelect from './ProSelect/index.vue'
import ProPopup from './ProPopup/index.vue'
import ProIDCardUpload from './ProIDCardUpload/index.vue'


interface ComponentMap {
  [key: string]: Component;
}

// 所有全局组件集合
export const globalComs: ComponentMap = {
  ZaAvatar, //  头像
  ZaCircleProgress, // 半圆进度条
  ZaMap, // 百度地图组件（未完成）
  ProSvg, // 本地svg组件，svg文件放到assets/svg/目录下
  ProPageWrap, // 页面布局包裹组件 ，每个页面都用这个包一次，方便后面做全局调整
  ZaFilterTab, //
  ProTitle,
  ProExpand,
  ProPreviewPDF,
  ProSign,
  ProCell,
  ProForm,
  ProField,
  ProCheckButton,
  ProCheckboxButton,
  ProRadioButton,
  ProTabBButton,
  ProMessage,
  ProCard,
  ProPicker,
  ProDatePicker,
  ProSelect,
  ProPopup,
  ProIDCardUpload
};

function install(app: any) {
  Object.keys(globalComs).map((key) => app.component(key, globalComs[key]));
}

export default {
  install,
};
