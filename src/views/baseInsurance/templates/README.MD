# 投保模块开发步骤和规范

---

> 开发模板前请仔细查看本文档

### 第⼀步 新建模板 ID 和 模板⽂件⽬录 和 路由配置

- views/baseInsurance/templates 下⾯新建你要创建的模板⽬录。⽐如：魔⽅产品 可以建 magic/index.vue （名字简单易懂即可）
- 在常量中 TEMPLATE_TYPE_ENUM、TEMPLATE_TYPE_MAP 中加上模板 ID 和模板简称单词
- 在 src/router/routes 中创建路由

```ts
{
  name: 'magic', path: '/baseInsurance/magic',
  meta: { title: '魔⽅产品', keepAlive: true, requireWxJs: true },
  component: () => import('@/views/baseInsurance/templates/magic/index.vue'),
}
```

> meta 解释：
> title ⻚⾯标题（默认显示在⻚⾯标题栏，产品详情⻚⼀般不⽤，会⽤实际产品名替换） keepAlive 是因为⻚⾯会弹出 PDF 预览打开新⻚⾯⽽加，避免输⼊内容丢失 requireWxJs 是根据当前⻚⾯是否会直接唤起⽀付⽽设置，如果产品详情不需要直接唤起微信⽀付， 则这⾥可以不加

### 第⼆步 开发产品详情⻚

- 编写产品⻚内容（以下是基础的模板）

```vue
<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap main-class="page-magic-product">
      <!-- 顶部图⽚ Banner -->
      <!-- 保障详情 Guarantee-->
      <!-- 产品特⾊+我要投保 ScrollInfo + InsureForm PaymentType-->
      <!-- 底部版权 InscribedContent -->
      <!-- 附件列表 AttachmentList -->
      <!-- 底部操作栏 需要⾃⼰实现 -->
    </ProPageWrap>
  </van-config-provider>
</template>

<script lang="ts" setup name="MagicProduct">
import { useTheme } from '../theme';
/** ⻚⾯query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  templateId: string;
  [key: string]: string;
}
// 拿到主题配置
const themeVars = useTheme();
// 拿到⻚⾯URL参数
const { productCode = '', tenantId, templateId, code: wxCode } = route.query as QueryData;
// 内容步骤 /** JS逻辑 */
</script>
<style lang="scss" scoped>
.page-magic-product {
}
</style>
```

### 第三步 编写 js 逻辑

- 1、mounted 时获取数据（产品配置信息+险种信息），并在 2 秒后加载 回溯码
- 2、获取微信授权+openId（微信环境下）
- 3、监听投被保⼈信息完善后，调⽤试算接⼝
- 4、监听缴费⽅式变化等⼀些其他需要监听的内容变化⽽做出交互响应
- 5、处理「⽴即投保」按钮事件（处理校验、试算，然后调⽤ nextStep ⾛下⼀步逻辑）
- 6、其他细节逻辑的完善（通讯录选⼈、健告阅读结果处理等等）

  #### js 函数名规范

  // 旭超 TODO

### 第四步 接⼝联调

- ⼤部分的接⼝都是已经定义过的 api/modules 中
- ⽀付逻辑处理 会在 nextStep 中调⽤ sendPay 发起⽀付。如果纯微信⽀付，则不需要单独处理了

### 第五步 其他分⽀流程处理

- 如：预约升级分⽀，可在签约成功的 payCheck.vue 根据状态和模板跳转 orderUrl 的时候跳转到预 约⻚⾯
- 预约⻚可根据当前进⼊的渠道（2A 或 3A 显示预约升级还是⼀键升级）
- 订单详情⻚，加⼀个预约成功的状态，显示“预约成功”⽂案
