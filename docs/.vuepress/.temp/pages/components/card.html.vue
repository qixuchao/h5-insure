<template><!--
 * @Description:
 * @Autor: kevin.liang
 * @Date: 2022-03-29 20:34:41
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-04-07 18:37:43
-->
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>代码目录： /src/components/ZaCard/index.tsx</li>
<li>功能：
<blockquote>
<p>卡片组件， 左上角标题自定义， 背景图可以根据传入颜色定义，右侧子标题可以传入，箭头也根据参数控制</p>
</blockquote>
</li>
</ul>
<h2 id="截图" tabindex="-1"><a class="header-anchor" href="#截图" aria-hidden="true">#</a> 截图</h2>
<p><img src="/images/ZaCard.png" alt=""></p>
<blockquote>
<p>截图的名字，以组件的名字命名 <code>ZaCard.png</code> 多个时: <code>ZaCard1.png</code> <code>ZaCard-empty.png</code></p>
</blockquote>
<h2 id="参数解析" tabindex="-1"><a class="header-anchor" href="#参数解析" aria-hidden="true">#</a> 参数解析</h2>
<table>
<thead>
<tr>
<th>参数名</th>
<th>参数类型</th>
<th>是否必传</th>
<th>默认值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>string</td>
<td>否</td>
<td>无</td>
<td>卡片标题</td>
</tr>
<tr>
<td>color</td>
<td>string</td>
<td>否</td>
<td>'primary-color'</td>
<td>卡片头部背景颜色</td>
</tr>
<tr>
<td>subtitle</td>
<td>string</td>
<td>否</td>
<td>''</td>
<td>子标题</td>
</tr>
<tr>
<td>showmore</td>
<td>boolean</td>
<td>否</td>
<td>false</td>
<td>右侧是否有箭头</td>
</tr>
</tbody>
</table>
</template>
