import{_ as e,d as a,cD as t,i as s,h as r,ap as o,j as c,aG as i,l as n,o as d,c as l,a as u,u as p,F as y,b as v,f,p as N,w as b,v as m,cM as T,cN as w,y as h,ao as I,ar as g,aC as j,aD as C}from"./index-db9f23fa.js";const z=e=>(j("data-v-7f7920c1"),e=e(),C(),e),_={class:"page-verify-face"},k={class:"result-content"},q=z((()=>u("h4",null,"人脸识别验证失败",-1))),x=z((()=>u("p",{class:"desc"},"请保持在检测框内",-1))),F={class:"operate-btn"},U={key:1},D=a({name:"verifyFace"});var E=e(a({...D,setup(e){const a=t(),j=s(),C=r(),{isFirst:z,tenantId:D,objectType:E,orderNo:P,biz_id:S,nextPageCode:B}=j.query,L=a.get(`${o}_orderDetail`),M=c(),$=c(!0),A=()=>{const{userName:e,certiNo:a,certType:t}=M.value,s={tenantId:D,faceAuthMode:"TENCENT",callbackUrl:window.location.href.replace("isFirst=1","isFirst=0"),bizNo:P,userName:e,certiNo:a,certType:t};T(s).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))};i((()=>{const{holder:e,insuredList:a}=L;if("holder"===E){const{name:a,certNo:t,certType:s,id:r}=e;M.value={userName:a,certiNo:t,certType:s,objectId:r}}else{const{name:e,certNo:t,certType:s,id:r}=(null==a?void 0:a[0])||{};M.value={userName:e,certiNo:t,certType:s,objectId:r}}"1"===z&&A(),S&&(()=>{const{userName:e,objectId:a,certType:t}=M.value,s={bizId:S,certType:t,objectId:a,objectType:`${E}`.toLocaleUpperCase(),orderNo:P,tenantId:D};w(s).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status?(delete j.query.biz_id,delete j.query.nextPageCode,C.push({path:h.infoPreview,query:j.query})):$.value=!1}))})()}));const G=c();return n((()=>{setTimeout((async()=>{G.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=I,s=g;return d(),l("div",_,[u("div",k,[p($)?f("",!0):(d(),l(y,{key:0},[v(t,{name:"wrong","font-size":"52px",color:"var(--van-primary-color)"}),q],64)),x]),u("div",F,[p($)?(d(),l("span",U,"人脸识别中...")):(d(),N(s,{key:0,type:"primary",onClick:A},{default:b((()=>[m("再试一次")])),_:1}))])])}}}),[["__scopeId","data-v-7f7920c1"]]);export{E as default};
