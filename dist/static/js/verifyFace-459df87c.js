import{_ as e,d as a,cm as t,i as r,h as s,bw as o,j as c,aE as d,o as i,c as n,a as l,b as p,w as u,a8 as y,ae as m,ag as b,aC as f,aD as v}from"./index-44a84149.js";import{f as N,a as T}from"./verify-a0cd666e.js";import{P as h}from"./constants-4b08cf92.js";const j=e=>(f("data-v-7ca84bdc"),e=e(),v(),e),I={class:"page-verify-face"},C={class:"result-content"},g=j((()=>l("h4",null,"人脸识别验证失败",-1))),w=j((()=>l("p",{class:"desc"},"请保持在检测框内",-1))),_={class:"operate-btn"},q=a({name:"verifyFace"});var x=e(a({...q,setup(e){const a=t(),f=r(),v=s(),{isFirst:j,tenantId:q,objectType:x,orderNo:z,biz_id:E,nextPageCode:F}=f.query,U=a.get(`${o}_orderDetail`),P=c(),S=()=>{const{userName:e,certiNo:a,certType:t}=P.value,r={tenantId:q,faceAuthMode:"TENCENT",callbackUrl:window.location.href.replace("isFirst=1","isFirst=0"),bizNo:z,userName:e,certiNo:a,certType:t};N(r).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))};return d((()=>{const{holder:e,insuredList:a}=U;if("holder"===x){const{name:a,certNo:t,certType:r,id:s}=e;P.value={userName:a,certiNo:t,certType:r,objectId:s}}else{const{name:e,certNo:t,certType:r,id:s}=(null==a?void 0:a[0])||{};P.value={userName:e,certiNo:t,certType:r,objectId:s}}"1"===j&&S(),E&&(()=>{const{userName:e,objectId:a,certType:t}=P.value,r={bizId:E,certType:t,objectId:a,objectType:`${x}`.toLocaleUpperCase(),orderNo:z,tenantId:q};T(r).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status&&(delete f.query.biz_id,delete f.query.nextPageCode,v.push({path:h[`${F}`],query:f.query}))}))})()})),(e,a)=>{const t=m,r=b;return i(),n("div",I,[l("div",C,[p(t,{name:"wrong","font-size":"52px",color:"var(--van-primary-color)"}),g,w]),l("div",_,[p(r,{type:"primary",onClick:S},{default:u((()=>[y("再试一次")])),_:1})])])}}}),[["__scopeId","data-v-7ca84bdc"]]);export{x as default};
