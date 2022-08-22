import{g as W,v as J,j as a,n as d,z as i,J as B,A as n,Y as G,t as l,O as z,ak as K,E as Q,h as X,r as V,k as q,m as s,p as o,d as Z,G as ee,F as te,am as c,C as _,D as oe,T as se}from"./vendor-df2d8bed.js";import{_ as j,P as H}from"./index-88ff0f59.js";import{a as ae,d as ne}from"./order-fb726fa3.js";import{O as re,a as f}from"./order-ad7bcd6c.js";import{I as ue}from"./InsuredPart-0dc0b19b.js";import"./trial-8b0d133a.js";const de={class:"com-field-info"},le={class:"label"},ce={class:"content"},ie=W({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(A){const g=J();return(S,e)=>(a(),d("div",de,[i("div",le,B(A.label),1),n(g).label?G(S.$slots,"label",{key:0},void 0,!0):l("",!0),i("div",ce,B(A.content),1),n(g).content?G(S.$slots,"content",{key:1},void 0,!0):l("",!0)]))}});var O=j(ie,[["__scopeId","data-v-4e47c671"]]);const _e={class:"page-order-detail"},pe={class:"card"},ve={class:"header"},fe={class:"product-name"},me={class:"company-name"},ye={class:"status"},he={key:0,class:"footer-button"},Ce=_("\u5220\u9664"),ke=_("\u53BB\u5904\u7406"),Ie={key:1,class:"footer-button"},Ee=_("\u5220\u9664"),ge=_("\u53BB\u652F\u4ED8"),Se={key:2,class:"footer-button"},be=_("\u5220\u9664"),Oe=_("\u53BB\u652F\u4ED8"),Be={key:3,class:"footer-button"},De={key:4,class:"footer-button"},Pe={key:5,class:"footer-button"},Ae=_("\u5220\u9664"),Fe={key:6,class:"footer-button"},Ne=_("\u5220\u9664"),Te=W({setup(A){const g=z(),S=K(),e=Q(),b=()=>{oe.confirm({title:"\u786E\u8BA4",message:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F"}).then(()=>{e.value&&ne(e.value.id,e.value.orderStatus).then(r=>{const{code:u,data:t}=r;u==="10000"&&se.success("\u5220\u9664\u6210\u529F")})})},w=()=>{var r,u;if(e.value){const{orderNo:t,id:p,saleUserId:m,tenantId:y,extInfo:{templateId:h,pageCode:C},agencyId:k,productCategory:I,venderCode:E}=e.value,D=(u=(r=e.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:u.productCode;S.push({path:H[C],query:{productCode:D,orderNo:t,orderId:p,agentCode:m,templateId:h,tenantId:y,productCategory:I,insurerCode:E,agencyCode:k,isFromOrderList:"1"}})}},F=()=>{var r,u;if(e.value){const{orderNo:t,id:p,saleUserId:m,tenantId:y,extInfo:{templateId:h},agencyId:C,productCategory:k,venderCode:I}=e.value,E=(u=(r=e.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:u.productCode;S.push({path:H.payInfo,query:{productCode:E,orderNo:t,orderId:p,saleUserId:m,templateId:h,tenantId:y,productCategory:k,insurerCode:I,agencyCode:C}})}};return X(()=>{console.log(g);const{query:{id:r}}=g;ae(r).then(u=>{const{code:t,data:p}=u;t==="10000"&&(e.value=p)})}),(r,u)=>{const t=V("van-button"),p=V("ProPageWrap");return a(),q(p,null,{default:s(()=>{var m,y,h,C,k,I,E,D,N,T,L,R,U,x,M;return[i("div",_e,[i("div",pe,[o(O,null,{label:s(()=>{var v,P,Y,$;return[i("div",ve,[i("div",fe,B((Y=(P=(v=e.value)==null?void 0:v.tenantOrderInsuredList[0])==null?void 0:P.tenantOrderProductList[0])==null?void 0:Y.productName),1),i("div",me,B(($=e.value)==null?void 0:$.abbreviation),1)])]}),content:s(()=>{var v;return[i("div",ye,B(e.value?n(re)[(v=e.value)==null?void 0:v.orderStatus]:""),1)]}),_:1}),o(O,{label:"\u8BA2\u5355\u53F7",content:(m=e.value)==null?void 0:m.orderNo},null,8,["content"]),o(O,{label:"\u521B\u5EFA\u65F6\u95F4",content:n(Z)((y=e.value)==null?void 0:y.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),o(O,{label:"\u6295\u4FDD\u4EBA",content:(C=(h=e.value)==null?void 0:h.tenantOrderHolder)==null?void 0:C.name},null,8,["content"]),(a(!0),d(te,null,ee(((k=e.value)==null?void 0:k.tenantOrderInsuredList)||[],(v,P)=>(a(),q(O,{key:P,label:"\u88AB\u4FDD\u4EBA",content:v.name},null,8,["content"]))),128))]),o(ue,{"product-data":(D=(E=(I=e.value)==null?void 0:I.tenantOrderInsuredList[0])==null?void 0:E.tenantOrderProductList)==null?void 0:D[0],class:"insure-info"},null,8,["product-data"]),((N=e.value)==null?void 0:N.orderStatus)===n(f).PENDING?(a(),d("div",he,[o(t,{type:"primary",onClick:c(b,["stop"])},{default:s(()=>[Ce]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:c(w,["stop"])},{default:s(()=>[ke]),_:1},8,["onClick"])])):l("",!0),((T=e.value)==null?void 0:T.orderStatus)===n(f).PAYING?(a(),d("div",Ie,[o(t,{type:"primary",onClick:c(b,["stop"])},{default:s(()=>[Ee]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:c(F,["stop"])},{default:s(()=>[ge]),_:1},8,["onClick"])])):l("",!0),((L=e.value)==null?void 0:L.orderStatus)===n(f).PAYMENT_FAILED?(a(),d("div",Se,[o(t,{type:"primary",onClick:c(b,["stop"])},{default:s(()=>[be]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:c(F,["stop"])},{default:s(()=>[Oe]),_:1},8,["onClick"])])):l("",!0),((R=e.value)==null?void 0:R.orderStatus)===n(f).PAYMENT_SUCCESS?(a(),d("div",Be)):l("",!0),((U=e.value)==null?void 0:U.orderStatus)===n(f).UNDERWRITE?(a(),d("div",De)):l("",!0),((x=e.value)==null?void 0:x.orderStatus)===n(f).INSURER_REJECT?(a(),d("div",Pe,[o(t,{type:"primary",onClick:c(b,["stop"])},{default:s(()=>[Ae]),_:1},8,["onClick"])])):l("",!0),((M=e.value)==null?void 0:M.orderStatus)===n(f).TIMEOUT?(a(),d("div",Fe,[o(t,{type:"primary",onClick:c(b,["stop"])},{default:s(()=>[Ne]),_:1},8,["onClick"])])):l("",!0)])]}),_:1})}}});var $e=j(Te,[["__scopeId","data-v-876ba566"]]);export{$e as default};
