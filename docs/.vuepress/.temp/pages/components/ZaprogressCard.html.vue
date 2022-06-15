<template><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>代码目录： /src/components/ZaprogressCard/index.tsx</li>
<li>功能：
<blockquote>
<p>通用卡片进度条组件，支持 两种传值 80/40%或者数字（number 或 string），有百分比展示百分比 超出 100%按照 100%进度展示；只有数字不展示百分比</p>
</blockquote>
</li>
</ul>
<h2 id="截图" tabindex="-1"><a class="header-anchor" href="#截图" aria-hidden="true">#</a> 截图</h2>
<p><img src="/images/ZaProgress.png" alt=""></p>
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
<td>unit</td>
<td>string</td>
<td>否</td>
<td>次</td>
<td>标题后单位</td>
</tr>
<tr>
<td>quantification</td>
<td>number 或 string</td>
<td>否</td>
<td>''</td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>string</td>
<td>是</td>
<td>rgb 形式，例如：0, 175, 255</td>
<td>进度条宽度</td>
</tr>
</tbody>
</table>
</template>
