<template><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>代码目录： views/businessCard</li>
<li>功能：
<ul>
<li>个人名片首页</li>
<li>名片信息编辑页</li>
<li>擅长领域编辑</li>
<li>个人介绍</li>
<li>选择模块</li>
<li>生成海报</li>
<li>名片分享页</li>
<li>名片访客页</li>
</ul>
</li>
</ul>
<h2 id="个人名片首页" tabindex="-1"><a class="header-anchor" href="#个人名片首页" aria-hidden="true">#</a> 个人名片首页</h2>
<blockquote>
<p>用于展示代理人名片内容、累计访客、资质认证信息、擅长领域、个人介绍、公司介绍</p>
</blockquote>
<p><img src="/images/businessCard/card1.png" alt="名片"></p>
<h2 id="名片信息编辑页" tabindex="-1"><a class="header-anchor" href="#名片信息编辑页" aria-hidden="true">#</a> 名片信息编辑页</h2>
<blockquote>
<p>个人形象照、姓名、公司职位、所属公司、电话、微信在编辑页面进行维护</p>
</blockquote>
<p><img src="/images/businessCard/card2.png" alt="名片"></p>
<ul>
<li>个人形象照：可上传个人证件照，上传照片后需支持裁剪等简单图片编辑功能；必填项</li>
<li>姓名：取代理人姓名，不支持编辑</li>
<li>手机号：取代理人手机号，不支持编辑；</li>
<li>所属公司：取代理人所属公司，不支持编辑；</li>
<li>公司职位：取代理人所在公司职位，不支持编辑；</li>
<li>微信号：代理人微信号，用于名片展示；非必填项</li>
<li>微信二维码：代理人微信二维码图片，用于名片展示，上传图片后需支持裁剪，翻转等简单图片编辑功能；非必填项</li>
</ul>
<h3 id="擅长领域编辑-个人介绍-选择模块" tabindex="-1"><a class="header-anchor" href="#擅长领域编辑-个人介绍-选择模块" aria-hidden="true">#</a> 擅长领域编辑/个人介绍/选择模块</h3>
<ul>
<li>
<p>可根据代理人自定义编辑显示内容</p>
<h4 id="擅长领域" tabindex="-1"><a class="header-anchor" href="#擅长领域" aria-hidden="true">#</a> 擅长领域</h4>
<p><img src="/images/businessCard/card3.png" alt="名片"></p>
<ul>
<li>最多可创建 3 个自定义标签</li>
<li>默认提供 6 个擅长领域标签：家庭责任规划、医疗健康规划、退休养老规划、子女教育规划、资产增值规划、财富传承规划</li>
</ul>
<h4 id="个人介绍" tabindex="-1"><a class="header-anchor" href="#个人介绍" aria-hidden="true">#</a> 个人介绍</h4>
<p><img src="/images/businessCard/card4.png" alt="名片"></p>
<ul>
<li>文字限制 100 字以内，图片限制 6 个以内，非必填；</li>
<li>图片上传支持裁剪、删除操作；</li>
</ul>
<h4 id="选择模块" tabindex="-1"><a class="header-anchor" href="#选择模块" aria-hidden="true">#</a> 选择模块</h4>
<p><img src="/images/businessCard/card5.png" alt="名片"></p>
<ul>
<li>默认 4 个模块都配置展示，代理人可修改</li>
</ul>
</li>
</ul>
<h3 id="生成海报" tabindex="-1"><a class="header-anchor" href="#生成海报" aria-hidden="true">#</a> 生成海报</h3>
<blockquote>
<p>根据分享模块选择，将名片生成图片</p>
</blockquote>
<p><img src="/images/businessCard/card6.png" alt="名片"></p>
<ul>
<li>图片展示：姓名、公司职位、所属机构、电话、执业证号、个人介绍、代理人的微信二维码及扫码提示，</li>
<li>当代理人未添加个人微信二维码图片时，则不展示此处二维码及扫描提示模块，其他信息如未配置，同样不展示</li>
</ul>
<h2 id="名片分享页" tabindex="-1"><a class="header-anchor" href="#名片分享页" aria-hidden="true">#</a> 名片分享页</h2>
<blockquote>
<p>代理人分享后，用户查看分享的页面</p>
</blockquote>
<p><img src="/images/businessCard/card7.png" alt="名片"></p>
<ul>
<li>信任 icon：被分享人可点亮底部信任 icon，点亮后记录一次有效点击人数，再次点击不在记录累计数量，也不可取消点亮</li>
<li>部根据名片是否维护手机号或微信二维码展示对应按钮，若未维护则不显示即可</li>
</ul>
<h2 id="名片访客" tabindex="-1"><a class="header-anchor" href="#名片访客" aria-hidden="true">#</a> 名片访客</h2>
<p><img src="/images/businessCard/card8.png" alt="名片"></p>
<ul>
<li>信任 icon：被分享人可点亮底部信任 icon，点亮后记录一次有效点击人数，再次点击不在记录累计数量，也不可取消点亮</li>
<li>部根据名片是否维护手机号或微信二维码展示对应按钮，若未维护则不显示即可</li>
</ul>
</template>
