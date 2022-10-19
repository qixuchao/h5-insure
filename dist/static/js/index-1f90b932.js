import{h as q,x as K,k as a,p as d,A as i,L as b,B as n,Z as j,v as l,P as Q,aa as X,G as ee,j as te,r as w,m as J,n as s,s as o,d as oe,H as se,F as ae,ac as c,E as _,D as ne,T as re}from"./vendor-d6b13173.js";import{d as ue}from"./order-193db00c.js";import{_ as Z,g as de,p as W}from"./index-32e043dc.js";import{O as le,a as v}from"./order-b675ac95.js";import{I as ce}from"./InsuredPart-377e7600.js";import"./trial-556f3fc7.js";const ie={class:"com-field-info"},_e={class:"label"},pe={class:"content"},ve=q({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(B){const g=K();return(e,E)=>(a(),d("div",ie,[i("div",_e,b(B.label),1),n(g).label?j(e.$slots,"label",{key:0},void 0,!0):l("",!0),i("div",pe,b(B.content),1),n(g).content?j(e.$slots,"content",{key:1},void 0,!0):l("",!0)]))}});var I=Z(ve,[["__scopeId","data-v-67c490df"]]);const fe={class:"page-order-detail"},me={class:"card"},ye={class:"header"},Ce={class:"product-name"},he={class:"company-name"},ke={class:"status"},Ie={key:0,class:"footer-button"},be=_("\u5220\u9664"),ge=_("\u53BB\u5904\u7406"),Ee={key:1,class:"footer-button"},Se=_("\u5220\u9664"),Be=_("\u53BB\u652F\u4ED8"),Oe={key:2,class:"footer-button"},Pe=_("\u5220\u9664"),Ae=_("\u53BB\u652F\u4ED8"),De={key:3,class:"footer-button"},Fe={key:4,class:"footer-button"},Le={key:5,class:"footer-button"},Ne=_("\u5220\u9664"),Te={key:6,class:"footer-button"},xe=_("\u5220\u9664"),Me=q({setup(B){const g=Q();X();const e=ee(),{query:{orderNo:E,agentCode:P,tenantId:O,abbreviation:Re,productCategory:A}}=g,h=()=>{ne.confirm({title:"\u786E\u8BA4",message:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F"}).then(()=>{e.value&&ue(e.value.id,e.value.orderStatus).then(r=>{const{code:u,data:t}=r;u==="10000"&&re.success("\u5220\u9664\u6210\u529F")})})},z=()=>{var r,u;if(e.value){const{id:t,extInfo:{templateId:k,pageCode:f},agencyId:m,venderCode:y}=e.value,C=(u=(r=e.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:u.productCode;W(f,{productCode:C,orderNo:E,orderId:t,agentCode:P,templateId:k,tenantId:O,productCategory:A,insurerCode:y,agencyCode:m,isFromOrderList:"1"})}},D=()=>{var r,u;if(e.value){const{id:t,saleUserId:k,extInfo:{templateId:f},agencyId:m,venderCode:y}=e.value,C=(u=(r=e.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:u.productCode;W("payInfo",{productCode:C,orderNo:E,orderId:t,saleUserId:k,templateId:f,tenantId:O,productCategory:A,insurerCode:y,agencyCode:m})}};return te(()=>{de({orderNo:E,agentCode:P,tenantId:O}).then(r=>{const{code:u,data:t}=r;u==="10000"&&(e.value=t)})}),(r,u)=>{const t=w("van-button"),k=w("ProPageWrap");return a(),J(k,null,{default:s(()=>{var f,m,y,C,F,L,N,T,x,M,R,Y,U,$,H;return[i("div",fe,[i("div",me,[o(I,null,{label:s(()=>{var p,S,V,G;return[i("div",ye,[i("div",Ce,b((V=(S=(p=e.value)==null?void 0:p.tenantOrderInsuredList[0])==null?void 0:S.tenantOrderProductList[0])==null?void 0:V.productName),1),i("div",he,b((G=e.value)==null?void 0:G.abbreviation),1)])]}),content:s(()=>{var p;return[i("div",ke,b(e.value?n(le)[(p=e.value)==null?void 0:p.orderStatus]:""),1)]}),_:1}),o(I,{label:"\u8BA2\u5355\u53F7",content:(f=e.value)==null?void 0:f.orderNo},null,8,["content"]),o(I,{label:"\u521B\u5EFA\u65F6\u95F4",content:n(oe)((m=e.value)==null?void 0:m.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),o(I,{label:"\u6295\u4FDD\u4EBA",content:(C=(y=e.value)==null?void 0:y.tenantOrderHolder)==null?void 0:C.name},null,8,["content"]),(a(!0),d(ae,null,se(((F=e.value)==null?void 0:F.tenantOrderInsuredList)||[],(p,S)=>(a(),J(I,{key:S,label:"\u88AB\u4FDD\u4EBA",content:p.name},null,8,["content"]))),128))]),o(ce,{"product-data":(T=(N=(L=e.value)==null?void 0:L.tenantOrderInsuredList[0])==null?void 0:N.tenantOrderProductList)==null?void 0:T[0],class:"insure-info"},null,8,["product-data"]),((x=e.value)==null?void 0:x.orderStatus)===n(v).PENDING?(a(),d("div",Ie,[o(t,{type:"primary",onClick:c(h,["stop"])},{default:s(()=>[be]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:c(z,["stop"])},{default:s(()=>[ge]),_:1},8,["onClick"])])):l("",!0),((M=e.value)==null?void 0:M.orderStatus)===n(v).PAYING?(a(),d("div",Ee,[o(t,{type:"primary",onClick:c(h,["stop"])},{default:s(()=>[Se]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:c(D,["stop"])},{default:s(()=>[Be]),_:1},8,["onClick"])])):l("",!0),((R=e.value)==null?void 0:R.orderStatus)===n(v).PAYMENT_FAILED?(a(),d("div",Oe,[o(t,{type:"primary",onClick:c(h,["stop"])},{default:s(()=>[Pe]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:c(D,["stop"])},{default:s(()=>[Ae]),_:1},8,["onClick"])])):l("",!0),((Y=e.value)==null?void 0:Y.orderStatus)===n(v).PAYMENT_SUCCESS?(a(),d("div",De)):l("",!0),((U=e.value)==null?void 0:U.orderStatus)===n(v).ACCEPT_POLICY?(a(),d("div",Fe)):l("",!0),(($=e.value)==null?void 0:$.orderStatus)===n(v).INSURER_REJECT?(a(),d("div",Le,[o(t,{type:"primary",onClick:c(h,["stop"])},{default:s(()=>[Ne]),_:1},8,["onClick"])])):l("",!0),((H=e.value)==null?void 0:H.orderStatus)===n(v).TIMEOUT?(a(),d("div",Te,[o(t,{type:"primary",onClick:c(h,["stop"])},{default:s(()=>[xe]),_:1},8,["onClick"])])):l("",!0)])]}),_:1})}}});var je=Z(Me,[["__scopeId","data-v-95da7406"]]);export{je as default};
