import{_ as e,d as a,cq as t,i as r,h as s,ag as o,j as c,aG as i,o as d,c as n,a as l,b as p,w as u,a8 as y,ae as f,ai as b,aE as m,aF as v}from"./index-01270b83.js";import{f as N,a as T}from"./verify-7e03b77b.js";import{P as h}from"./constants-4b08cf92.js";const j=e=>(m("data-v-d736f206"),e=e(),v(),e),I={class:"page-verify-face"},g={class:"result-content"},w=j((()=>l("h4",null,"人脸识别验证失败",-1))),C=j((()=>l("p",{class:"desc"},"请保持在检测框内",-1))),_={class:"operate-btn"},q=a({name:"verifyFace"});var x=e(a({...q,setup(e){const a=t(),m=r(),v=s(),{isFirst:j,tenantId:q,objectType:x,orderNo:z,biz_id:F,nextPageCode:E}=m.query,P=a.get(`${o}_orderDetail`),U=c(),S=()=>{const{userName:e,certiNo:a,certType:t}=U.value,r={tenantId:q,faceAuthMode:"TENCENT",callbackUrl:window.location.href.replace("isFirst=1","isFirst=0"),bizNo:z,userName:e,certiNo:a,certType:t};N(r).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))};return i((()=>{const{holder:e,insuredList:a}=P;if("holder"===x){const{name:a,certNo:t,certType:r,id:s}=e;U.value={userName:a,certiNo:t,certType:r,objectId:s}}else{const{name:e,certNo:t,certType:r,id:s}=(null==a?void 0:a[0])||{};U.value={userName:e,certiNo:t,certType:r,objectId:s}}"1"===j&&S(),F&&(()=>{const{userName:e,objectId:a,certType:t}=U.value,r={bizId:F,certType:t,objectId:a,objectType:`${x}`.toLocaleUpperCase(),orderNo:z,tenantId:q};T(r).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status&&(delete m.query.biz_id,delete m.query.nextPageCode,v.push({path:h.infoPreview,query:m.query}))}))})()})),(e,a)=>{const t=f,r=b;return d(),n("div",I,[l("div",g,[p(t,{name:"wrong","font-size":"52px",color:"var(--van-primary-color)"}),w,C]),l("div",_,[p(r,{type:"primary",onClick:S},{default:u((()=>[y("再试一次")])),_:1})])])}}}),[["__scopeId","data-v-d736f206"]]);export{x as default};
