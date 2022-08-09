import{g as H,t as z,h as a,m as d,y as i,I as b,z as n,V,s as l,Q as J,aj as Q,C as K,M as X,r as j,j as q,k as s,n as o,d as Z,E as tt,F as et,al as c,B as _,D as ot,T as st}from"./vendor-fc34688e.js";import{_ as W,P as G}from"./index-e14693df.js";import{a as at,d as nt}from"./order-6093aa8c.js";import{O as rt,a as f}from"./order-bd6d2330.js";import{I as ut}from"./InsuredPart-62d0ae7d.js";import"./utils-b6782348.js";import"./trial-588d9b8a.js";const dt={class:"com-field-info"},lt={class:"label"},ct={class:"content"},it=H({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(N){const k=z();return(I,t)=>(a(),d("div",dt,[i("div",lt,b(N.label),1),n(k).label?V(I.$slots,"label",{key:0},void 0,!0):l("",!0),i("div",ct,b(N.content),1),n(k).content?V(I.$slots,"content",{key:1},void 0,!0):l("",!0)]))}});var S=W(it,[["__scopeId","data-v-4e47c671"]]);const _t={class:"page-order-detail"},pt={class:"card"},vt={class:"header"},ft={class:"product-name"},mt={class:"company-name"},yt={class:"status"},ht={key:0,class:"footer-button"},Ct=_("\u5220\u9664"),kt=_("\u53BB\u5904\u7406"),It={key:1,class:"footer-button"},Et=_("\u5220\u9664"),St=_("\u53BB\u652F\u4ED8"),bt={key:2,class:"footer-button"},Bt=_("\u5220\u9664"),Dt=_("\u53BB\u652F\u4ED8"),Nt={key:3,class:"footer-button"},Pt={key:4,class:"footer-button"},gt={key:5,class:"footer-button"},Ot=_("\u5220\u9664"),At={key:6,class:"footer-button"},Ft=_("\u5220\u9664"),Tt=H({setup(N){const k=J(),I=Q(),t=K(),E=()=>{ot.confirm({title:"\u786E\u8BA4",message:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F"}).then(()=>{t.value&&nt(t.value.id,t.value.orderStatus).then(r=>{const{code:u,data:e}=r;u==="10000"&&st.success("\u5220\u9664\u6210\u529F")})})},w=()=>{var r,u;if(t.value){const{orderNo:e,id:p,saleUserId:m,tenantId:y,extInfo:{templateId:h,pageCode:C}}=t.value,B=(u=(r=t.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:u.productCode;I.push({path:G[C],query:{productCode:B,orderNo:e,orderId:p,agentCode:m,templateId:h,tenantId:y}})}},P=()=>{var r,u;if(t.value){const{orderNo:e,id:p,saleUserId:m,tenantId:y,extInfo:{templateId:h}}=t.value,C=(u=(r=t.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:u.productCode;I.push({path:G.payInfo,query:{productCode:C,orderNo:e,orderId:p,saleUserId:m,templateId:h,tenantId:y}})}};return X(()=>{console.log(k);const{query:{id:r}}=k;at(r).then(u=>{const{code:e,data:p}=u;e==="10000"&&(t.value=p)})}),(r,u)=>{const e=j("van-button"),p=j("ProPageWrap");return a(),q(p,null,{default:s(()=>{var m,y,h,C,B,g,O,A,F,T,R,L,M,U,x;return[i("div",_t,[i("div",pt,[o(S,null,{label:s(()=>{var v,D,Y,$;return[i("div",vt,[i("div",ft,b((Y=(D=(v=t.value)==null?void 0:v.tenantOrderInsuredList[0])==null?void 0:D.tenantOrderProductList[0])==null?void 0:Y.productName),1),i("div",mt,b(($=t.value)==null?void 0:$.venderName),1)])]}),content:s(()=>{var v;return[i("div",yt,b(t.value?n(rt)[(v=t.value)==null?void 0:v.orderStatus]:""),1)]}),_:1}),o(S,{label:"\u8BA2\u5355\u53F7",content:(m=t.value)==null?void 0:m.orderNo},null,8,["content"]),o(S,{label:"\u521B\u5EFA\u65F6\u95F4",content:n(Z)((y=t.value)==null?void 0:y.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),o(S,{label:"\u6295\u4FDD\u4EBA",content:(C=(h=t.value)==null?void 0:h.tenantOrderHolder)==null?void 0:C.name},null,8,["content"]),(a(!0),d(et,null,tt(((B=t.value)==null?void 0:B.tenantOrderInsuredList)||[],(v,D)=>(a(),q(S,{key:D,label:"\u88AB\u4FDD\u4EBA",content:v.name},null,8,["content"]))),128))]),o(ut,{"product-data":(A=(O=(g=t.value)==null?void 0:g.tenantOrderInsuredList[0])==null?void 0:O.tenantOrderProductList)==null?void 0:A[0],class:"insure-info"},null,8,["product-data"]),((F=t.value)==null?void 0:F.orderStatus)===n(f).PENDING?(a(),d("div",ht,[o(e,{type:"primary",onClick:c(E,["stop"])},{default:s(()=>[Ct]),_:1},8,["onClick"]),o(e,{type:"primary",onClick:c(w,["stop"])},{default:s(()=>[kt]),_:1},8,["onClick"])])):l("",!0),((T=t.value)==null?void 0:T.orderStatus)===n(f).PAYING?(a(),d("div",It,[o(e,{type:"primary",onClick:c(E,["stop"])},{default:s(()=>[Et]),_:1},8,["onClick"]),o(e,{type:"primary",onClick:c(P,["stop"])},{default:s(()=>[St]),_:1},8,["onClick"])])):l("",!0),((R=t.value)==null?void 0:R.orderStatus)===n(f).PAYMENT_FAILED?(a(),d("div",bt,[o(e,{type:"primary",onClick:c(E,["stop"])},{default:s(()=>[Bt]),_:1},8,["onClick"]),o(e,{type:"primary",onClick:c(P,["stop"])},{default:s(()=>[Dt]),_:1},8,["onClick"])])):l("",!0),((L=t.value)==null?void 0:L.orderStatus)===n(f).PAYMENT_SUCCESS?(a(),d("div",Nt)):l("",!0),((M=t.value)==null?void 0:M.orderStatus)===n(f).UNDERWRITE?(a(),d("div",Pt)):l("",!0),((U=t.value)==null?void 0:U.orderStatus)===n(f).INSURER_REJECT?(a(),d("div",gt,[o(e,{type:"primary",onClick:c(E,["stop"])},{default:s(()=>[Ot]),_:1},8,["onClick"])])):l("",!0),((x=t.value)==null?void 0:x.orderStatus)===n(f).TIMEOUT?(a(),d("div",At,[o(e,{type:"primary",onClick:c(E,["stop"])},{default:s(()=>[Ft]),_:1},8,["onClick"])])):l("",!0)])]}),_:1})}}});var Vt=W(Tt,[["__scopeId","data-v-6441a657"]]);export{Vt as default};
