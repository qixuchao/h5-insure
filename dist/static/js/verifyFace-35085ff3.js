import{_ as e,d as a,cE as t,i as s,h as r,ap as o,j as c,aG as i,l as n,o as d,c as l,a as u,u as p,F as y,b as v,f as N,p as b,w as f,v as m,cN as T,cO as w,y as h,ao as I,ar as g,aC as j,aD as C}from"./index-4a5bebd7.js";const z=e=>(j("data-v-7f7920c1"),e=e(),C(),e),_={class:"page-verify-face"},k={class:"result-content"},q=z((()=>u("h4",null,"人脸识别验证失败",-1))),x=z((()=>u("p",{class:"desc"},"请保持在检测框内",-1))),F={class:"operate-btn"},E={key:1},U=a({name:"verifyFace"});var P=e(a({...U,setup(e){const a=t(),j=s(),C=r(),{isFirst:z,tenantId:U,objectType:P,orderNo:S,biz_id:B,nextPageCode:D}=j.query,L=a.get(`${o}_orderDetail`),$=c(),A=c(!0),G=()=>{const{userName:e,certiNo:a,certType:t}=$.value,s={tenantId:U,faceAuthMode:"TENCENT",callbackUrl:window.location.href.replace("isFirst=1","isFirst=0"),bizNo:S,userName:e,certiNo:a,certType:t};T(s).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))};i((()=>{const{holder:e,insuredList:a}=L;if("holder"===P){const{name:a,certNo:t,certType:s,id:r}=e;$.value={userName:a,certiNo:t,certType:s,objectId:r}}else{const{name:e,certNo:t,certType:s,id:r}=(null==a?void 0:a[0])||{};$.value={userName:e,certiNo:t,certType:s,objectId:r}}"1"===z&&G(),B&&(()=>{const{userName:e,objectId:a,certType:t}=$.value,s={bizId:B,certType:t,objectId:a,objectType:`${P}`.toLocaleUpperCase(),orderNo:S,tenantId:U};w(s).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status?(delete j.query.biz_id,delete j.query.nextPageCode,C.push({path:h.infoPreview,query:j.query})):A.value=!1}))})()}));const M=c();return n((()=>{setTimeout((async()=>{M.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=I,s=g;return d(),l("div",_,[u("div",k,[p(A)?N("",!0):(d(),l(y,{key:0},[v(t,{name:"wrong","font-size":"52px",color:"var(--van-primary-color)"}),q],64)),x]),u("div",F,[p(A)?(d(),l("span",E,"人脸识别中...")):(d(),b(s,{key:0,type:"primary",onClick:G},{default:f((()=>[m("再试一次")])),_:1}))])])}}}),[["__scopeId","data-v-7f7920c1"]]);export{P as default};
