!function(){var e=document.createElement("style");e.innerHTML=".pdf-viewer[data-v-61756b88]{word-break:break-all}.pdf-viewer .title[data-v-61756b88]{color:var(--van-primary-color)}.pdf-viewer .loading[data-v-61756b88]{height:9.33333rem;display:flex;justify-content:center;align-items:center}\n",document.head.appendChild(e),System.register(["./vendor-legacy-fc9bbab5.js","./index-legacy-a0a9bfb4.js"],(function(e){"use strict";var t,n,a,o,i,r,s,l,c,d,p,u,v,f,h,g,m;return{setters:[function(e){t=e.g,n=e.a8,a=e.a9,o=e.aa,i=e.E,r=e.r,s=e.j,l=e.n,c=e.z,d=e.J,p=e.p,u=e.m,v=e.k,f=e.t,h=e.A,g=e.C},function(e){m=e._}],execute:function(){const w={class:"pdf-viewer"},y=g("加载中..."),b=["id","isee_pdf"];e("P",m(t({props:{title:{type:String,default:""},url:{type:String,default:""}},setup(e){const t=e;n.exports.GlobalWorkerOptions.workerSrc=a;const g=o(),m=i(!1),x=i(!0),k=async()=>{m.value=!0,setTimeout((()=>{(()=>{const e=document.getElementById(g);if(e.hasChildNodes())return void(x.value=!1);n.exports.getDocument({url:t.url}).promise.then((t=>{const n=t.numPages;for(let a=1;a<=n;a++)t.getPage(a).then((t=>{const n=t.getViewport({scale:1}),a=document.createElement("canvas"),o=a.getContext("2d");a.width=n.width,a.height=n.height,a.style.width="100%",e.append(a);const i={canvasContext:o,viewport:n};t.render(i),x.value=!1}))}))})()}),0)};return(t,n)=>{const a=r("van-loading"),o=r("van-popup");return s(),l("span",w,[c("span",{class:"title",onClick:k},d(e.title),1),p(o,{show:m.value,"onUpdate:show":n[0]||(n[0]=e=>m.value=e),closeable:"","close-icon":"close",position:"bottom",style:{height:"600px"}},{default:u((()=>[x.value?(s(),v(a,{key:0,type:"spinner",vertical:"",class:"loading",size:"30px"},{default:u((()=>[y])),_:1})):f("",!0),c("div",{id:h(g),isee_pdf:t.pdfUrl,style:{height:"600px",width:"100%",overflow:"auto"}},null,8,b)])),_:1},8,["show"])])}}}),[["__scopeId","data-v-61756b88"]]))}}}))}();
