import{_ as e,d as a,cC as t,i as s,h as r,ap as o,j as c,aH as i,l as n,o as d,c as l,a as u,u as p,F as y,b as v,f,p as N,w as m,v as b,cL as T,cM as w,aj as h,ao as I,ar as j,aD as g,aE as C}from"./index-40f79e3d.js";const z=e=>(g("data-v-7f7920c1"),e=e(),C(),e),_={class:"page-verify-face"},k={class:"result-content"},q=z((()=>u("h4",null,"人脸识别验证失败",-1))),x=z((()=>u("p",{class:"desc"},"请保持在检测框内",-1))),F={class:"operate-btn"},E={key:1},U=a({name:"verifyFace"});var L=e(a({...U,setup(e){const a=t(),g=s(),C=r(),{isFirst:z,tenantId:U,objectType:L,orderNo:P,biz_id:S,nextPageCode:B}=g.query,D=a.get(`${o}_orderDetail`),M=c(),$=c(!0),A=()=>{const{userName:e,certiNo:a,certType:t}=M.value,s={tenantId:U,faceAuthMode:"TENCENT",callbackUrl:window.location.href.replace("isFirst=1","isFirst=0"),bizNo:P,userName:e,certiNo:a,certType:t};T(s).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))};i((()=>{const{holder:e,insuredList:a}=D;if("holder"===L){const{name:a,certNo:t,certType:s,id:r}=e;M.value={userName:a,certiNo:t,certType:s,objectId:r}}else{const{name:e,certNo:t,certType:s,id:r}=(null==a?void 0:a[0])||{};M.value={userName:e,certiNo:t,certType:s,objectId:r}}"1"===z&&A(),S&&(()=>{const{userName:e,objectId:a,certType:t}=M.value,s={bizId:S,certType:t,objectId:a,objectType:`${L}`.toLocaleUpperCase(),orderNo:P,tenantId:U};w(s).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status?(delete g.query.biz_id,delete g.query.nextPageCode,C.push({path:h.infoPreview,query:g.query})):$.value=!1}))})()}));const H=c();return n((()=>{setTimeout((async()=>{H.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=I,s=j;return d(),l("div",_,[u("div",k,[p($)?f("",!0):(d(),l(y,{key:0},[v(t,{name:"wrong","font-size":"52px",color:"var(--van-primary-color)"}),q],64)),x]),u("div",F,[p($)?(d(),l("span",E,"人脸识别中...")):(d(),N(s,{key:0,type:"primary",onClick:A},{default:m((()=>[b("再试一次")])),_:1}))])])}}}),[["__scopeId","data-v-7f7920c1"]]);export{L as default};
