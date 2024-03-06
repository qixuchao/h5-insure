<!--
 * @Author: zhaopu
 * @Date: 2022-12-16 11:13:14
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-02-13 15:42:05
 * @Description:
-->

# 短险模板

短期险投保流程模板

## 产品详情接口数据解析

获取产品配置详情，以及产品详情

1、产品配置详情接口 => getProductDetail

- productCode: 产品 code
- productFullName: 产品名称
- productName: 产品简称
- showConfigVO:
- tenantProductInsureVO: 商品中心产品配置详情

  - banner: banner 图
  - bannerMove: banner 动图;
  - backgroundInsureVO: 背景颜色,
    - colorEnd: 结束颜色,
    - colorStart: 开始颜色,
    - type: 1、渐进色，2、纯色
  - inscribedContent: 底部落款;
  - spec: 产品特色-图片;
  - questionList: 常见问题;
  - settlementProcessList: 理赔说明;
    - settlementProcessType 1、文字 2、图片
  - rateUri 费率表;
  - planList: 多计划计划配置信息
  - planInsureVO: 无计划配置信息
    - attachmentVOList: 产品资料;
    - guaranteeItemVOS: 保障详情;
    - planPicList 计划皮肤
    - premiumExplainUri 保费计算说明文件
    - premiumExplain 保费计算说明文案
    - premiumExplainViewName 保费计算说明展示文件名称
    - productPremiumVOList 交费方式 初始值，初始单位，实付单位

2、产品详情

- productRelationPlanVOList: 多计划险种信息;
  - packageProductVOList: 多计划时，每个计划下面单独有一个加油包列表
- packageProductVOList: 无计划时，加油包列表
- productRiskVoList: 无计划险种信息;
  - insureCondition 投保条件配置
- productFactor 无计划或多计划以产品维度配置的投保要素 --优先用这个
- planFactor 多计划产品以计划维度配置的投保要素
  - 1: 投保人投保要素
  - 2: 被保险人投保要素
  - 3: 受益人投保要素
- productQuestionnaireVOList 健告

## 画面组件解析

#### 保障计划

1、多计划

[多计划投保链接](https://h5-test.ennejb.cn/h5-cloud-insure/baseInsurance/short?insurerCode=huatai&productCode=03NM&templateId=1&saleChannelId=10007&tenantId=9991000012&extraInfo={%22agentCode%22:%22E101990101999%22,%22fiveLevelAgencyCode%22:%22E101990101%22,%22channelCode%22:%22XABXGZH%22,%22promotion%22:%22MBXCD%22})

- 展示保障计划，可以切换，动态的展示对应的保障计划信息 【planCode, planName】并且此处切换保障计划，不影响投保信息采集，不影响试算
- 当配置端配置了计划皮肤时，此处按钮要展示为 计划皮肤 planSkinVlaue
- 超过 5 条折叠，并且展开后无法再收起
- 保费初始值，根据对应的交费方式，要展示对应的 保费初始值，保费初始单位
- 查看保费，此处根据产品层级是否配置费率表文件判断是否展示，【rateUri】pdf 文件预览
- 保障详情，点击保障详情，定位到对应的计划，同时展示对应的保障计划详细信息
- 弹窗中计划以 tab 形式展示， 扩展信息 extInfoVOList, 以 key-value 形式展示 和保障计划一起吸顶
- 保障详情文件内容展示区域， 展示具体的保障详情，注意此处高度需要动态计算

2、无计划不展示计划 tab 及切换效果
[无计划投保链接](https://h5-test.ennejb.cn/h5-cloud-insure/baseInsurance/short?insurerCode=zhongan&productCode=CQ75&templateId=1&saleChannelId=10008&tenantId=9991000012&extraInfo={%22agentCode%22:%22E101990101999%22,%22fiveLevelAgencyCode%22:%22E101990101%22,%22channelCode%22:%22XABXGZH%22,%22promotion%22:%22MBXCD%22})

#### 滚动区域 ScrollInfo

- 产品特色 无产品特色时不展示此区域以及此 tab
- 理赔说明 根据配置端判断是文字展示还是图片展示形式
- 常见问题 根据配置判断对应区域是否展示，若两项内容都无，则此 tab 不展示
- 投保要素采集区域

#### 投保要素采集区域

##### InsureForm

- 优先取产品层级投保要素，产品层级无投保要素，则根据对应保障计划获取对应投保要素
- CustomerList 通讯录插槽，若客户列表中包含亮条及以上客户信息，则展示通讯录选择 icon
- 注意： 当投保人信息只有一条，或者对应被保险人客户信息只有一条时，需直接将对应客户信息进行反显
- 监听被保险人采集信息，出生日期、性别、社保均为试算因子
- needDesensitize 当客户信息反显或者通讯录选择客户时，证件号码以及手机号需要脱敏，所以此时需要重置此状态，触发组件内部监听，将获取的数据重新脱敏

##### PaymentType

- 当交费方式只有一种时，此处展示为【保障计划】， 当交费方式为多种时，展示为 【交费方式】
- 保障计划，当为多计划产品时，展示此选项，若有计划皮肤展示计划皮肤，无计划皮肤以 radio 形式展示，切换保障计划，将重置试算结果以及此区域内所采集信息， 也因此切换保障计划会影响试算。
- 交费方式，当对应计划下交费方式为 1 种时，默认选中，多种时默认选中第一个;同样的交费方式也可以配置皮肤进行选择。交费方式也是试算因子，影响试算结果，同时若对应的交费方式配置了 展示单位，要根据具体的配置展示具体的单位。
- 保障期限 InsurancePeriodCell
  - 保障期间，需根据计划获取对应主险信息，其次获取保障期间列表，根据字典转化为对应的 radio 选项，默认选中第一个，同时保障期间影响保障期限以及试算。
  - 保障期限，需根据主险险种生效、结束日期方式以及保障期间进行计算
    - 开始日期
      - 当日生效，保障开始日期为当日 00:00:00
      - 次日生效，保障开始日期为次日 00:00:00
      - 指定日期生效，此时展示为日期选择框，【生效日期】可选日期为【次日 - 当日+保障期间】
    - 结束日期
      - 当日 保障结束日期 = 保障开始日期 + 保障期间 + 23：59：59
      - 次日 保障结束日期 = （保障开始日期 + 1） + 保障期间 + 00:00:00

##### Package

- 根据是否多计划，以及计划选择，动态获取加油包列表。
- 加油包默认均不投保，可选择 投保|不投保
- 加油包作为试算因子，影响试算结果

#### 底部落款 InscribedContent

底部落款，配置端为文本域。此处用换行符将文本拆分，然后居中展示处理。

#### 产品资料 AttachmentList

产品资料，支持 pdf, 图片，链接等资料阅读。

#### 底部按钮

- 试算金额，当没有进行试算时，需展示对应产品或计划下的 保费初始值及保费初始单位，当有试算结果时，此处应展示为实际的保费及保费单位

- 立即投保 校验并提交表单，进行投保。

## 主要业务说明

#### 信息采集

- 采集投保人、被保险人信息、计划、交费方式、保障期间。

- 若是老用户，则会根据投保人，以及被保险人与投保人关系，进行客户信息回填。

#### 试算

当被保险人信息【姓名、出生日期、性别、社保、加油包】等要素满足则可以进行试算，同时产品的计划、交费方式、保障期间等信息同样会影响试算，因此以上信息若发生变化，则需重新进行试算。

#### 立即投保

1、当点击立即投保时，先校验信息采集的正确性以及完整性。
2、信息校验完成后，会先进行保费试算。
3、弹出产品资料阅读区域，阅读并同意后，再弹健告窗口，符合并立即投保，则会生成订单。同时如果有未支付订单，则会弹窗确认，点击去支付则会跳转到待支付页面。
4、生成订单之后会做核保操作，核保通过后，生成待支付链接，通过微信或众安收银台进行支付。支付完成后跳转到订单详情页面。

## 特殊处理说明

- 当该用户为老客户时，无论配置端是否配置投保人验证码采集项，此处都不展示也不校验验证码，因此需要将投保要素获取的地方，对验证码要素进行特殊处理
- 获取通讯录列表，当通讯录信息有两个及两个人以上，则展示通讯录 icon,投被保险人可以通过通讯录选择。
- 通过通讯录选择的投被保险人信息，身份证号和手机号码要进行脱敏处理。同时重新选择后要重新进行脱敏。
