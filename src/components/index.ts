import { Component } from 'vue';
/*
 * @Description: 需要全局注册的组件统一注册
 * @Autor: kevin.liang
 * @Date: 2022-03-08 13:51:54
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-01-06 20:44:41
 */
/* eslint-disable prettier/prettier */
// import ZaAvatar from './ZaAvatar/index.vue';
// import ZaCircleProgress from './ZaCircleProgress/index.vue';
// import ZaMap from './ZaMap/index.vue';
// import ZaFilterTab from './ZaFilterTab/index.vue';
// import ProExpand from './ProExpand/index.vue';
// import ProSelect from './ProSelect/index.vue';
// import ProCalendar from './ProCalendar/index.vue';
import ProSvg from './ProSvg/index.vue';
import ProPageWrap from './ProPageWrap/index';
import ProTitle from './ProTitle/index.vue';
import ProPreviewPDF from './ProPreviewPDF/index.vue';
import ProSign from './ProSign/index.vue';
import ProCell from './ProCell/index.vue';
import ProForm from './ProForm/index.vue';
import ProField from './ProField/index.vue';
import ProRadioButton from './ProRadioButton/index.vue';
import ProCheckButton from './ProCheckButton/index.vue';
import ProTabButton from './ProCheckButton/TabButton.vue';
import ProTab from './ProTab/index.vue';
import ProCheckboxButton from './ProCheckboxButton/index.vue';
import ProMessage from './ProMessage/index.vue';
import ProCard from './ProCard/index.vue';
import ProPicker from './ProPicker/index.vue';
import ProDatePicker from './ProDatePicker/index.vue';
import ProPopup from './ProPopup/index.vue';
import ProIDCardUpload from './ProIDCardUpload/index.vue';
import ProImageUpload from './ProImageUpload/index.vue';
import ProFilePreview from './ProFilePreview/index.vue';
import ProCascader from './ProCascader/index.vue';
import ProPDFviewer from './ProPDFviewer/index.vue';
import ProScrollTab from './ProScrollTab/index.vue';
import ProLazyComponent from './ProLazyComponent/index.vue';
import ProShare from './ProShare/index.vue'

interface ComponentMap {
  [key: string]: Component;
}

// 所有全局组件集合
export const globalComs: ComponentMap = {
  // ZaAvatar, //  头像
  // ZaCircleProgress, // 半圆进度条
  // ZaMap, // 百度地图组件（未完成）
  // ZaFilterTab, //
  // ProExpand,
  // ProSelect,
  // ProCalendar,
  ProSvg, // 本地svg组件，svg文件放到assets/svg/目录下
  ProPageWrap, // 页面布局包裹组件 ，每个页面都用这个包一次，方便后面做全局调整
  ProTitle,
  ProPreviewPDF,
  ProSign,
  ProCell,
  ProForm,
  ProField,
  ProCheckButton,
  ProCheckboxButton,
  ProRadioButton,
  ProTabButton,
  ProMessage,
  ProCard,
  ProPicker,
  ProDatePicker,
  ProPopup,
  ProIDCardUpload,
  ProImageUpload,
  ProFilePreview,
  ProCascader,
  ProPDFviewer,
  ProScrollTab,
  ProTab,
  ProShare,
  ProLazyComponent,
};

function install(app: any) {
  Object.keys(globalComs).map((key) => app.component(key, globalComs[key]));
}

export default {
  install,
};
