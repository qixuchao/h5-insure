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
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ZaProgressCard</span>
    <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
    <span class="token attr-name">:unit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>unit<span class="token punctuation">"</span></span>
    <span class="token attr-name">:quantification</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>quantification<span class="token punctuation">"</span></span>
    <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>progressColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">:strokewidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>strokewidth<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'需求分析'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> unit <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'次'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> quantification <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'85/82%'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> progressColor <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'0, 175, 255'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> strokewidth <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
