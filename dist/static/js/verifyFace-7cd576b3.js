import{_ as e,d as a,cr as t,i as s,h as r,ag as o,j as c,aG as i,o as d,c as n,a as l,u as p,F as u,b as y,f as v,m as f,w as m,a8 as N,cA as b,cB as T,ae as h,ai as j,aE as I,aF as g}from"./index-8120d8cf.js";import{P as w}from"./constants-4b08cf92.js";const C=e=>(I("data-v-016d4863"),e=e(),g(),e),_={class:"page-verify-face"},F={class:"result-content"},k=C((()=>l("h4",null,"人脸识别验证失败",-1))),q=C((()=>l("p",{class:"desc"},"请保持在检测框内",-1))),x={class:"operate-btn"},z={key:1},E=a({name:"verifyFace"});var P=e(a({...E,setup(e){const a=t(),I=s(),g=r(),{isFirst:C,tenantId:E,objectType:P,orderNo:U,biz_id:S,nextPageCode:A}=I.query,L=a.get(`${o}_orderDetail`),$=c(),B=c(!0),D=()=>{const{userName:e,certiNo:a,certType:t}=$.value,s={tenantId:E,faceAuthMode:"TENCENT",callbackUrl:window.location.href.replace("isFirst=1","isFirst=0"),bizNo:U,userName:e,certiNo:a,certType:t};b(s).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))};return i((()=>{const{holder:e,insuredList:a}=L;if("holder"===P){const{name:a,certNo:t,certType:s,id:r}=e;$.value={userName:a,certiNo:t,certType:s,objectId:r}}else{const{name:e,certNo:t,certType:s,id:r}=(null==a?void 0:a[0])||{};$.value={userName:e,certiNo:t,certType:s,objectId:r}}"1"===C&&D(),S&&(()=>{const{userName:e,objectId:a,certType:t}=$.value,s={bizId:S,certType:t,objectId:a,objectType:`${P}`.toLocaleUpperCase(),orderNo:U,tenantId:E};T(s).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status?(delete I.query.biz_id,delete I.query.nextPageCode,g.push({path:w.infoPreview,query:I.query})):B.value=!1}))})()})),(e,a)=>{const t=h,s=j;return d(),n("div",_,[l("div",F,[p(B)?v("",!0):(d(),n(u,{key:0},[y(t,{name:"wrong","font-size":"52px",color:"var(--van-primary-color)"}),k],64)),q]),l("div",x,[p(B)?(d(),n("span",z,"人脸识别中...")):(d(),f(s,{key:0,type:"primary",onClick:D},{default:m((()=>[N("再试一次")])),_:1}))])])}}}),[["__scopeId","data-v-016d4863"]]);export{P as default};
