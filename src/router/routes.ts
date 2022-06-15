// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/activity/index.vue'),
    meta: {
      title: '活动量平台首页',
    },
  },
  {
    name: 'index',
    path: '/home',
    meta: { title: '活动量平台' },
    component: () => import('@/views/home/index.vue'),
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' },
  },
  {
    name: 'demo',
    path: '/demo',
    component: () => import('@/views/demo/index.vue'),
    meta: { title: '组件演示' },
  },
  {
    name: 'Visitor',
    path: '/visitor',
    component: () => import('@/views/visitors/index.vue'),
    meta: { title: '访客管理' },
  },
  {
    name: 'VisitorDetail',
    path: '/visitorDetail',
    component: () => import('@/views/visitors/visitorDetail/index.vue'),
    meta: { title: '访客详情' },
  },
  {
    name: 'RelatedCustomers',
    path: '/relatedCustomers',
    component: () => import('@/views/visitors/relatedCustomers/index.vue'),
    meta: { title: '关联客户' },
  },
  {
    name: 'Article',
    path: '/article',
    component: () => import('@/views/article/index.vue'),
    meta: { title: '获客爆文' },
  },
  {
    name: 'MyArticle',
    path: '/myArticle',
    component: () => import('@/views/article/myArticle/index.vue'),
    meta: { title: '我的文章' },
  },
  {
    name: 'MyShare',
    path: '/myShare',
    component: () => import('@/views/article/myShare/index.vue'),
    meta: { title: '分享详情' },
  },
  {
    name: 'ArticleDetail',
    path: '/articleDetail',
    component: () => import('@/views/article/articleDetail/index.vue'),
    meta: { title: ' ', requireWxJs: true },
  },
  {
    name: 'ArticleShow',
    path: '/articleShow',
    component: () => import('@/views/articleShow/index.vue'),
    meta: { title: '文章预览' },
  },
  {
    name: 'SourceShow',
    path: '/sourceShow',
    component: () => import('@/views/sourceShow/index.vue'),
    meta: { title: '素材预览' },
  },
  {
    name: 'AddProduct',
    path: '/addProduct',
    component: () => import('@/views/article/addProduct/index.vue'),
    meta: { title: '添加产品' },
  },
  {
    name: 'SearchArticle',
    path: '/searchArticle',
    component: () => import('@/views/article/searchArticle/index.vue'),
    meta: { title: '文章搜索' },
  },
  {
    name: 'Moment',
    path: '/moment',
    component: () => import('@/views/moment/index.vue'),
    meta: { title: '朋友圈' },
  },
  {
    name: 'Video',
    path: '/video',
    component: () => import('@/views/moment/video/index.vue'),
    meta: { title: '视频预览' },
  },
  {
    name: 'Poster',
    path: '/poster',
    component: () => import('@/views/poster/index.vue'),
    meta: { title: '精美海报' },
  },
  {
    name: 'Agenda',
    path: '/agenda',
    component: () => import('@/views/agenda/index.vue'),
    meta: { title: '日程表' },
  },
  {
    name: 'My',
    path: '/my',
    component: () => import('@/views/my/index.vue'),
    meta: { title: '我的' },
  },
  {
    name: 'customer',
    path: '/customer',
    component: () => import('@/views/customer/customerList/index.vue'),
    meta: { title: '客户管理' },
  },
  {
    name: 'brithdayList',
    path: '/brithdayList',
    component: () => import('@/views/customer/brithdayList/index.vue'),
    meta: { title: '生日管理' },
  },
  {
    name: 'customerDetail',
    path: '/customerDetail',
    component: () => import('@/views/customer/customerDetail/index.vue'),
    meta: { title: '客户详情' },
  },
  {
    name: 'editCustomer',
    path: '/editCustomer',
    component: () => import('@/views/customer/editCustomer/index.vue'),
    meta: { title: '客户详情' },
  },
  {
    name: 'docList',
    path: '/docList',
    component: () => import('@/views/customer/docList/index.vue'),
    meta: { title: '证件信息' },
  },
  {
    name: 'docAdd',
    path: '/docAdd',
    component: () => import('@/views/customer/docList/docAdd/index.vue'),
    meta: { title: '证件信息' },
  },
  {
    name: 'familyList',
    path: '/familyList',
    component: () => import('@/views/customer/familyList/index.vue'),
    meta: { title: '家庭成员' },
  },
  {
    name: 'familyEdit',
    path: '/familyEdit',
    component: () => import('@/views/customer/familyList/edit/index.vue'),
    meta: { title: '家庭成员' },
  },
  {
    name: 'policyList',
    path: '/policyList',
    component: () => import('@/views/customer/policyList/index.vue'),
    meta: { title: '保单列表' },
  },
  {
    name: 'editSuppleInfo',
    path: '/editSuppleInfo',
    component: () => import('@/views/customer/editSuppleInfo/index.vue'),
    meta: { title: '补充信息' },
  },
  {
    name: 'riskDetail',
    path: '/riskDetail',
    component: () => import('@/views/customer/riskDetail/index.vue'),
    meta: { title: '客户风险累积' },
  },
  {
    name: 'posterDetail',
    path: '/posterDetail',
    component: () => import('@/views/poster/posterDetail/index.vue'),
    meta: { title: '精美海报' },
  },
  {
    name: 'productList',
    path: '/productList',
    component: () => import('@/views/poster/productList/index.vue'),
    meta: { title: '添加产品' },
  },
  {
    name: 'BusinessCard',
    path: '/businessCard',
    component: () => import('@/views/businessCard/index.vue'),
    meta: { title: '个人名片', requireWxJs: true },
  },
  {
    name: 'demo1',
    path: '/demo1',
    component: () => import('@/views/businessCard/Profile.vue'),
    meta: { title: '测试骨架屏', skeleton: 'primary' },
  },
  {
    name: 'CardInfo',
    path: '/cardInfo',
    component: () => import('@/views/businessCard/cardInfo/index.vue'),
    meta: { title: '名片信息' },
  },
  {
    name: 'IntroEdit',
    path: '/introEdit',
    component: () => import('@/views/businessCard/introEdit/index.vue'),
    meta: { title: '个人介绍' },
  },
  {
    name: 'CardPoster',
    path: '/cardPoster',
    component: () => import('@/views/businessCard/cardPoster/index.vue'),
    meta: { title: '名片海报' },
  },
  {
    name: 'CardVisitor',
    path: '/cardVisitor',
    component: () => import('@/views/businessCard/cardVisitor/index.vue'),
    meta: { title: '名片访客' },
  },
  {
    name: 'shareCard',
    path: '/shareCard',
    component: () => import('@/views/businessCard/shareCard/index.vue'),
    meta: { title: '名片', requireWxJs: true },
  },
  {
    name: 'Card',
    path: '/card',
    component: () => import('@/views/card/index.vue'),
    meta: { title: '卡片' },
  },
  {
    name: 'Daily',
    path: '/daily',
    component: () => import('@/views/daily/index.vue'),
    meta: { title: '工作日志' },
  },
  {
    name: 'PersonTarget',
    path: '/personTarget',
    component: () => import('@/views/personTarget/index.vue'),
    meta: { title: '我的目标' },
  },
  {
    name: 'SetTarget',
    path: '/setTarget',
    component: () => import('@/views/personTarget/setTarget/index.vue'),
    meta: { title: '我的目标' },
  },
  {
    name: 'TeamTarget',
    path: '/teamTarget',
    component: () => import('@/views/teamTarget/index.vue'),
    meta: { title: '团队目标' },
  },
  {
    name: 'TargetDetail',
    path: '/targetDetail',
    component: () => import('@/views/personTarget/targetDetail/index.vue'),
    meta: { title: '目标详情' },
  },
  {
    name: 'AddDaily',
    path: '/addDaily',
    component: () => import('@/views/daily/add/index.vue'),
    meta: { title: '填写日志', requireWxJs: true },
  },
  {
    name: 'editDaily',
    path: '/editDaily',
    component: () => import('@/views/daily/add/index.vue'),
    meta: { title: '编辑日志', requireWxJs: true },
  },
  {
    name: 'record',
    path: '/record',
    component: () => import('@/views/record/index.vue'),
    meta: { title: '拜访记录', requireWxJs: true },
  },
  {
    name: 'addRecord',
    path: '/record/add',
    component: () => import('@/views/record/recordItem/index.vue'),
    meta: { title: '录入活动记录', requireWxJs: true },
  },
  {
    name: 'recordDetail',
    path: '/record/:visitId',
    component: () => import('@/views/record/recordItem/index.vue'),
    meta: { title: '录入活动记录', requireWxJs: true },
  },
  {
    name: 'ActivityVolumeAnalysis',
    path: '/activityVolumeAnalysis',
    component: () => import('@/views/activityVolume/index.vue'),
    meta: {
      title: '活动量分析',
    },
  },
  {
    name: 'TeamDaily',
    path: '/teamDaily',
    component: () => import('@/views/daily/teamDaily/index.vue'),
    meta: { title: '团队日志' },
  },
  {
    name: 'Activity',
    path: '/activity',
    component: () => import('@/views/activity/index.vue'),
    meta: {
      title: '活动量平台首页',
    },
  },
  {
    name: 'addSchedule',
    path: '/addSchedule',
    component: () => import('@/views/schedule/add/index.vue'),
    meta: {
      title: '添加日程',
    },
  },
  {
    name: 'openCustomer',
    path: '/openCustomer',
    component: () => import('@/views/openCustomer/index.vue'),
    meta: {
      title: '公海客户管理',
    },
  },
  {
    name: 'schedule',
    path: '/schedule',
    component: () => import('@/views/schedule/index.vue'),
    meta: {
      title: '日程管理',
    },
  },
  {
    name: 'BusinessOpportunity',
    path: '/businessOpportunity',
    component: () => import('@/views/businessOpportunity/index.vue'),
    meta: {
      title: '商机管理',
    },
  },
  {
    name: 'Apply',
    path: '/apply',
    component: () => import('@/views/apply/index.vue'),
    meta: {
      title: '活动报名',
    },
  },
  {
    name: 'AddApply',
    path: '/addApply',
    component: () => import('@/views/apply/addApply/index.vue'),
    meta: {
      title: '创建活动',
    },
  },
  {
    name: 'applyDetail',
    path: '/applyDetail',
    component: () => import('@/views/apply/applyDetail/index.vue'),
    meta: {
      title: '活动详情',
    },
  },
  {
    name: 'applyInfo',
    path: '/applyInfo',
    component: () => import('@/views/apply/applyInfo/index.vue'),
    meta: {
      title: '报名信息',
    },
  },
  {
    name: 'userRegistration',
    path: '/userRegistration',
    component: () => import('@/views/apply/userRegistration/index.vue'),
    meta: {
      title: '用户报名',
    },
  },
  {
    name: 'ApplyItem',
    path: '/applyItem',
    component: () => import('@/views/apply/components/ApplyItem/index.vue'),
    meta: {
      title: '填写报名项',
    },
  },
  {
    name: 'Active',
    path: '/applyActive',
    component: () => import('@/views/apply/applyActive/index.vue'),
    meta: {
      title: '填写报名项',
    },
  },
  {
    name: 'AddRegistration',
    path: '/addRegistration',
    component: () => import('@/views/apply/addRegistration/index.vue'),
    meta: {
      title: '填写报名项',
    },
  },
  {
    name: 'downloadTest',
    path: '/downloadTest',
    component: () => import('@/views/downloadTest/index.vue'),
    meta: {
      title: '下载测试',
      requireWxJs: true,
    },
  },
];

export default asyncRoutes;
