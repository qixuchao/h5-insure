import{_ as e,d as a,ck as s,i as t,h as r,bw as o,aE as i,o as d,c as n,a as c,b as l,w as u,a8 as f,ae as p,ag as m,aC as N,aD as v}from"./index-98996f16.js";import{f as y,a as h}from"./verify-98a4dd26.js";import{P as b}from"./constants-62d1c4af.js";const g=e=>(N("data-v-2821fdce"),e=e(),v(),e),w={class:"page-verify-face"},C={class:"result-content"},_=g((()=>c("h4",null,"人脸识别验证失败",-1))),q=g((()=>c("p",{class:"desc"},"请保持在检测框内",-1))),x={class:"operate-btn"},z=a({name:"verifyFace"});var j=e(a({...z,setup(e){const a=s(),N=t(),v=r(),{isFirst:g,tenantId:z,objectType:j,orderNo:E,biz_id:F,nextPageCode:I}=N.query,k=a.get(`${o}_orderDetail`),P=()=>{const{holder:e,insuredList:a}=k;let s={userName:e.name,certiNo:e.certNo};"insured"===j&&(s={userName:null==a?void 0:a[0].name,certiNo:null==a?void 0:a[0].certNo});const{userName:t,certiNo:r}=s,o={tenantId:z,faceAuthMode:"TENCENT",callbackUrl:window.location.href.replace("isFirst=1","isFirst=0"),bizNo:E,userName:t,certiNo:r};y(o).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))};return i((()=>{"1"===g&&P(),F&&h({bizId:F}).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status&&(delete N.query.biz_id,delete N.query.nextPageCode,v.push({path:b[`${I}`],query:N.query}))}))})),(e,a)=>{const s=p,t=m;return d(),n("div",w,[c("div",C,[l(s,{name:"wrong","font-size":"52px",color:"var(--van-primary-color)"}),_,q]),c("div",x,[l(t,{type:"primary",onClick:P},{default:u((()=>[f("再试一次")])),_:1})])])}}}),[["__scopeId","data-v-2821fdce"]]);export{j as default};
