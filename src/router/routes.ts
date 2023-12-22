// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

// 长期险路由
const lifeInsuranceRoutes: Array<RouteRecordRaw> = [
  {
    name: 'long-productList',
    path: '/baseInsurance/long/productList',
    meta: { title: '产品列表' },
    component: () => import('@/views/baseInsurance/templates/lianLong/productList.vue'),
  },
  {
    name: 'long-productDetail',
    path: '/baseInsurance/long/productDetail',
    meta: { title: '产品详情' },
    component: () => import('@/views/baseInsurance/templates/lianLong/index.vue'),
  },
  {
    name: 'trial',
    path: '/baseInsurance/long/trial',
    meta: { title: '保费试算' },
    component: () => import('@/views/baseInsurance/templates/lianLong/trial.vue'),
  },
  {
    name: 'healthNotice',
    path: '/baseInsurance/long/healthNotice',
    meta: { title: '健康告知书' },
    component: () => import('@/views/baseInsurance/templates/lianLong/healthNotice.vue'),
  },
  {
    name: 'healthNoticeView',
    path: '/baseInsurance/long/healthNotice/:id',
    meta: { title: '健康告知书' },
    component: () => import('@/views/baseInsurance/templates/lianLong/healthNotice.vue'),
  },
  {
    name: 'transcription',
    path: '/baseInsurance/long/transcription',
    meta: { title: '风险告知书' },
    component: () => import('@/views/baseInsurance/templates/lianLong/transcription.vue'),
  },
  {
    name: 'transcriptionView',
    path: '/baseInsurance/long/transcription/:id',
    meta: { title: '风险告知书' },
    component: () => import('@/views/baseInsurance/templates/lianLong/transcription.vue'),
  },
  {
    name: 'InfoCollection',
    path: '/baseInsurance/long/infoCollection',
    meta: { title: '信息采集', cacheTarget: ['InfoCollection', 'CustomerDetail', 'CustomerList'] },
    component: () => import('@/views/baseInsurance/templates/lianLong/infoCollection.vue'),
  },
  {
    name: 'underWriteResult',
    path: '/baseInsurance/long/underWriteResult',
    meta: { title: '核保结果' },
    component: () => import('@/views/baseInsurance/templates/lianLong/underWriteResult.vue'),
  },
  {
    name: 'signUnderWriteResult',
    path: '/baseInsurance/long/signUnderWriteResult',
    meta: { title: '核保结果' },
    component: () => import('@/views/baseInsurance/templates/lianLong/signUnderWriteResult.vue'),
  },
  {
    name: 'infoCollectionTest',
    path: '/baseInsurance/long/infoCollectionTest',
    meta: { title: '信息采集' },
    component: () => import('@/views/baseInsurance/templates/long/infoCollection.vue'),
  },

  {
    name: 'verify',
    path: '/baseInsurance/long/verify',
    meta: { title: '投保签名认证' },
    component: () => import('@/views/baseInsurance/templates/lianLong/verify.vue'),
  },
  {
    name: 'verifyFace',
    path: '/baseInsurance/long/verifyFace',
    meta: { title: '人脸识别' },
    component: () => import('@/views/baseInsurance/templates/lianLong/verifyFace.vue'),
  },
  {
    name: 'phoneVerify',
    path: '/baseInsurance/long/phoneVerify',
    meta: { title: '空中签名', cacheTarget: ['phoneVerify', 'infoPreview'] },
    component: () => import('@/views/baseInsurance/templates/lianLong/phoneVerify.vue'),
  },
  {
    name: 'agentSign',
    path: '/baseInsurance/long/agentSign',
    meta: { title: '代理人签字' },
    component: () => import('@/views/baseInsurance/templates/lianLong/agentSign.vue'),
  },
  {
    name: 'holderSign',
    path: '/baseInsurance/long/holderSign',
    meta: { title: '投保人签字' },
    component: () => import('@/views/baseInsurance/templates/lianLong/holderSign.vue'),
  },
  {
    name: 'insuredSign',
    path: '/baseInsurance/long/insuredSign',
    meta: { title: '被保人签字' },
    component: () => import('@/views/baseInsurance/templates/lianLong/insuredSign.vue'),
  },
  {
    name: 'payAuth',
    path: '/baseInsurance/long/payAuth',
    meta: { title: '支付绑卡' },
    component: () => import('@/views/baseInsurance/templates/lianLong/payAuth.vue'),
  },
  {
    name: 'updateBankInfo',
    path: '/baseInsurance/long/updateBankInfo',
    meta: { title: '支付绑卡' },
    component: () => import('@/views/baseInsurance/templates/lianLong/updateBankInfo.vue'),
  },
  {
    name: 'infoPreview',
    path: '/baseInsurance/long/infoPreview',
    meta: { title: '保单预览' },
    component: () => import('@/views/baseInsurance/templates/lianLong/infoPreview.vue'),
  },
  {
    name: 'middlePage',
    path: '/middlePage',
    meta: { title: '投保' },
    component: () => import('@/views/middlePage/index.vue'),
  },
  {
    name: 'previewMiddlePage',
    path: '/previewMiddlePage',
    meta: { title: '预览' },
    component: () => import('@/views/middlePage/preview.vue'),
  },
  {
    name: 'scribing',
    path: '/baseInsurance/long/scribing',
    meta: { title: '抄录' },
    component: () => import('@/views/baseInsurance/templates/lianLong/handleScribing.vue'),
  },
  {
    name: 'scribingPreview',
    path: '/baseInsurance/long/scribingPreview',
    meta: { title: '抄录' },
    component: () => import('@/views/baseInsurance/templates/lianLong/scribingPreview.vue'),
  },
];

// 计划书路由
const proposalRoutes: Array<RouteRecordRaw> = [
  {
    name: 'CreateProposal',
    path: '/proposal/createProposal',
    meta: { title: '创建计划书', cacheSource: ['ProposalList'], cacheTarget: ['ProposalListSelect'] },
    component: () => import('@/views/proposal/createProposal/index.vue'),
  },
  {
    name: 'ProposalList',
    path: '/proposalList',
    meta: { title: '计划书列表', cacheTarget: ['CreateProposal'] },
    component: () => import('@/views/proposal/proposalList/index.vue'),
  },
  {
    name: 'ProposalListSelect',
    path: '/proposalListSelect',
    meta: { title: '添加产品', cacheSource: ['CreateProposal'] },
    component: () => import('@/views/proposal/proposalListSelect/index.vue'),
  },
  {
    name: 'historyProposalList',
    path: '/historyProposalList',
    meta: { title: '历史计划书列表' },
    component: () => import('@/views/proposal/historyList/index.vue'),
  },
  {
    name: 'compositionProposal',
    path: '/compositionProposal',
    meta: { title: '组合计划书', requireWxJs: false },
    component: () => import('@/views/proposal/compositionProposal/index.vue'),
  },
  {
    name: 'companyDetail',
    path: '/companyDetail',
    meta: { title: '组合计划书', requireWxJs: false },
    component: () => import('@/views/proposal/compositionProposal/components/CompanyDetail.vue'),
  },
  {
    name: 'companyAllDetail',
    path: '/companyAllDetail',
    meta: { title: '组合计划书', requireWxJs: false },
    component: () => import('@/views/proposal/compositionProposal/components/CompanyAllDetail.vue'),
  },
  {
    name: 'proposalCover',
    path: '/proposalCover',
    meta: { title: '计划书封面', requireWxJs: false },
    component: () => import('@/views/proposal/compositionProposal/cover.vue'),
  },
];

// 基线在线投保模板
const baseInsurance = [
  // 赠险模板
  {
    name: 'baseInsuranceFree',
    path: '/baseInsurance/free',
    meta: { title: '产品详情', keepAlive: true, requireWxJs: true },
    component: () => import('@/views/baseInsurance/templates/lianFree/index.vue'),
  },
  // 赠险信息确认页
  {
    name: 'InsuranceFreeInfoPreview',
    path: '/baseInsurance/free/infoPreview',
    meta: { title: '投保信息确认', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/lianShort/infoPreview.vue'),
  },
  // 赠险人脸识别页
  {
    name: 'InsuranceFreeFaceAuth',
    path: '/baseInsurance/free/faceVerify',
    meta: { title: '被保人人脸识别', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/lianShort/faceVerify.vue'),
  },
  // 短险模板
  {
    name: 'InsuranceShort',
    path: '/baseInsurance/short',
    meta: { title: '', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/lianShort/index.vue'),
  },
  // 短险健康告知页
  {
    name: 'InsuranceShortHealthNotice',
    path: '/baseInsurance/short/healthNotice',
    meta: { title: '健康告知页', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/lianShort/healthNotice.vue'),
  },
  // 短险信息确认页
  {
    name: 'InsuranceShortInfoPreview',
    path: '/baseInsurance/short/infoPreview',
    meta: { title: '投保信息确认', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/lianShort/infoPreview.vue'),
  },
  // 短险人脸识别页
  {
    name: 'InsuranceShortFaceAuth',
    path: '/baseInsurance/short/faceVerify',
    meta: { title: '被保人人脸识别', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/lianShort/faceVerify.vue'),
  },
  // 短险-升级款（魔方）
  {
    name: 'baseInsuranceUpgrade',
    path: '/baseInsurance/upgrade',
    meta: { title: '', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/upgrade.vue'),
  },
  // 长期险+年金
  // {
  //   name: 'baseInsuranceLong',
  //   path: '/baseInsurance/long',
  //   meta: { title: '', keepAlive: true, requireWxJs: false },
  //   component: () => import('@/views/baseInsurance/templates/lianLong/index.vue'),
  // },
  // 网电销-坐下下单
  {
    name: 'baseInsuranceNetsale',
    path: '/baseInsurance/netsale',
    meta: { title: '', keepAlive: true },
    component: () => import('@/views/baseInsurance/templates/netSale/index.vue'),
  },
  // 网电销-客户确认订单
  {
    name: 'baseInsuranceNetDetail',
    path: '/baseInsurance/netDetail',
    meta: { title: '', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/netSale/detail.vue'),
  },
  // 投保流程-订单详情
  {
    name: 'baseInsuranceOrderDetail',
    path: '/baseInsurance/orderDetail',
    meta: { title: '', requireWxJs: false },
    component: () => import('@/views/baseInsurance/orderDetail/index.vue'),
  },
  // 长期险试算
  {
    name: 'baseInsuranceTrialPreview',
    path: '/baseInsurance/trialPreview',
    meta: { title: '', requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/lianLong/trialPreview.vue'),
  },
  ...lifeInsuranceRoutes,
  // 长期险投保结果
  {
    name: 'baseInsuranceLongResult',
    path: '/baseInsurance/long/result',
    meta: { title: '投保结果', requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/lianLong/result.vue'),
  },
  // 客户列表
  {
    name: 'CustomerList',
    path: '/baseInsurance/customerList',
    meta: { title: '', requireWxJs: false, cacheSource: ['InfoCollection'] },
    component: () =>
      import(
        '@/views/baseInsurance/templates/components/Trial/components/PersonalInfo/components/CustomerList/index.vue'
      ),
  },
  // 客户详情
  {
    name: 'CustomerDetail',
    path: '/baseInsurance/customerDetail',
    meta: { title: '', requireWxJs: false, cacheSource: ['CustomerList', 'InfoCollection'] },
    component: () =>
      import(
        '@/views/baseInsurance/templates/components/Trial/components/PersonalInfo/components/CustomerDetail/index.vue'
      ),
  },
];

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '主页',
    },
  },
  {
    name: 'Menu',
    path: '/menu',
    component: () => import('@/views/home/menu.vue'),
    meta: {
      title: '导航',
    },
  },
  {
    name: 'demo',
    path: '/demo',
    meta: { title: 'demo' },
    component: () => import('@/views/demo/index.vue'),
  },
  {
    name: 'test',
    path: '/test',
    meta: { title: 'test' },
    component: () => import('@/views/demo/test.vue'),
  },
  {
    name: 'FormDemo',
    path: '/base/form',
    meta: { title: '表单 Demo' },
    component: () => import('@/views/demo/form/index.vue'),
  },
  {
    name: 'schemaFormDemo',
    path: '/base/form/schema',
    meta: { title: '表单 Schema Demo' },
    component: () => import('@/views/demo/form/schema.vue'),
  },
  {
    name: 'table',
    path: '/tableDemo',
    meta: { title: '表格' },
    component: () => import('@/views/demo/table.vue'),
  },

  {
    name: 'order',
    path: '/order',
    meta: { title: '投保单列表' },
    component: () => import('@/views/order/index.vue'),
  },
  {
    name: 'orderRecordList',
    path: '/orderRecordList',
    meta: { title: '投保单进度查询' },
    component: () => import('@/views/order/index.vue'),
  },
  {
    name: 'orderDemo',
    path: '/orderDemo',
    meta: { title: '投保单列表1' },
    component: () => import('@/views/order/demo.vue'),
  },
  {
    name: 'orderDetail',
    path: '/orderDetail',
    meta: { title: '投保单详情' },
    component: () => import('@/views/order/detail/index.vue'),
  },
  {
    name: 'orderTrajectory',
    path: '/orderTrajectory',
    meta: { title: '订单轨迹' },
    component: () => import('@/views/order/trajectory/index.vue'),
  },
  {
    name: 'pdfViewer',
    path: '/pdfViewer',
    meta: { title: '' },
    component: () => import('@/views/openPdf/index.vue'),
  },
  {
    name: '收银台',
    path: '/cashier/pay',
    meta: { title: '收银台', requireWxJs: false },
    component: () => import('@/views/cashier/index.vue'),
  },
  {
    name: '支付',
    path: '/cashier/signPay',
    meta: { title: '支付签约' },
    component: () => import('@/views/cashier/signPay.vue'),
  },
  {
    name: '微信签约',
    path: '/cashier/payCheck',
    meta: { title: '支付签约中转', requireWxJs: false },
    component: () => import('@/views/cashier/payCheck.vue'),
  },
  {
    name: '文件预览',
    path: '/template/filePreview',
    meta: { title: '文件预览' },
    component: () => import('@/views/baseInsurance/filePreview/index.vue'),
  },
  {
    name: '问卷预览',
    path: '/template/questionPreview',
    meta: { title: '问卷预览' },
    component: () => import('@/views/baseInsurance/questionnairePreview/index.vue'),
  },
  {
    name: '资料库',
    path: '/productLib',
    meta: { title: '资料库' },
    component: () => import('@/views/productLib/index.vue'),
  },
  ...proposalRoutes,
  ...baseInsurance,
];

export default asyncRoutes;
