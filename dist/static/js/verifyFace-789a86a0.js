import{_ as e,d as a,cC as t,i as s,h as r,ap as o,j as c,aG as i,l as n,o as d,c as l,a as u,u as p,F as y,b as v,f as N,p as f,w as m,v as b,cL as T,cM as w,y as h,ao as I,ar as C,aC as g,aD as j}from"./index-a9c82976.js";const z=e=>(g("data-v-7f7920c1"),e=e(),j(),e),_={class:"page-verify-face"},k={class:"result-content"},q=z((()=>u("h4",null,"人脸识别验证失败",-1))),x=z((()=>u("p",{class:"desc"},"请保持在检测框内",-1))),F={class:"operate-btn"},U={key:1},E=a({name:"verifyFace"});var L=e(a({...E,setup(e){const a=t(),g=s(),j=r(),{isFirst:z,tenantId:E,objectType:L,orderNo:P,biz_id:S,nextPageCode:B}=g.query,D=a.get(`${o}_orderDetail`),M=c(),$=c(!0),A=()=>{const{userName:e,certiNo:a,certType:t}=M.value,s={tenantId:E,faceAuthMode:"TENCENT",callbackUrl:window.location.href.replace("isFirst=1","isFirst=0"),bizNo:P,userName:e,certiNo:a,certType:t};T(s).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))};i((()=>{const{holder:e,insuredList:a}=D;if("holder"===L){const{name:a,certNo:t,certType:s,id:r}=e;M.value={userName:a,certiNo:t,certType:s,objectId:r}}else{const{name:e,certNo:t,certType:s,id:r}=(null==a?void 0:a[0])||{};M.value={userName:e,certiNo:t,certType:s,objectId:r}}"1"===z&&A(),S&&(()=>{const{userName:e,objectId:a,certType:t}=M.value,s={bizId:S,certType:t,objectId:a,objectType:`${L}`.toLocaleUpperCase(),orderNo:P,tenantId:E};w(s).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status?(delete g.query.biz_id,delete g.query.nextPageCode,j.push({path:h.infoPreview,query:g.query})):$.value=!1}))})()}));const G=c();return n((()=>{setTimeout((async()=>{G.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=I,s=C;return d(),l("div",_,[u("div",k,[p($)?N("",!0):(d(),l(y,{key:0},[v(t,{name:"wrong","font-size":"52px",color:"var(--van-primary-color)"}),q],64)),x]),u("div",F,[p($)?(d(),l("span",U,"人脸识别中...")):(d(),f(s,{key:0,type:"primary",onClick:A},{default:m((()=>[b("再试一次")])),_:1}))])])}}}),[["__scopeId","data-v-7f7920c1"]]);export{L as default};
