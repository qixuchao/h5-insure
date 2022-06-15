<!--
 * @Description:
 * @Autor: kevin.liang
 * @Date: 2022-03-29 20:34:41
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-04-07 18:37:43
-->

## 介绍

- 代码目录： /src/components/ZaCard/index.tsx
- 功能：
  > 卡片组件， 左上角标题自定义， 背景图可以根据传入颜色定义，右侧子标题可以传入，箭头也根据参数控制

## 截图

![](/images/ZaCard.png)

> 截图的名字，以组件的名字命名 `ZaCard.png` 多个时: `ZaCard1.png` `ZaCard-empty.png`

## 参数解析

| 参数名   | 参数类型 | 是否必传 | 默认值          | 描述             |
| -------- | -------- | -------- | --------------- | ---------------- |
| title    | string   | 否       | 无              | 卡片标题         |
| color    | string   | 否       | 'primary-color' | 卡片头部背景颜色 |
| subtitle | string   | 否       | ''              | 子标题           |
| showmore | boolean  | 否       | false           | 右侧是否有箭头   |
