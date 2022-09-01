import{g as q,v as Q,j as a,n as d,z as i,J as b,A as n,Y as J,t as c,O as X,ak as Z,E as ee,h as te,r as j,k as w,m as s,p as o,d as oe,G as se,F as ae,am as l,C as _,D as ne,T as re}from"./vendor-e057bbeb.js";import{d as ue}from"./order-be9003af.js";import{_ as z,r as de,G as W}from"./index-f2834090.js";import{O as ce,a as v}from"./order-35b0e3c5.js";import{I as le}from"./InsuredPart-b91b8ccf.js";import"./trial-9108b8a1.js";const ie={class:"com-field-info"},_e={class:"label"},pe={class:"content"},ve=q({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(O){const g=Q();return(e,E)=>(a(),d("div",ie,[i("div",_e,b(O.label),1),n(g).label?J(e.$slots,"label",{key:0},void 0,!0):c("",!0),i("div",pe,b(O.content),1),n(g).content?J(e.$slots,"content",{key:1},void 0,!0):c("",!0)]))}});var I=z(ve,[["__scopeId","data-v-4e47c671"]]);const me={class:"page-order-detail"},fe={class:"card"},ye={class:"header"},Ce={class:"product-name"},he={class:"company-name"},ke={class:"status"},Ie={key:0,class:"footer-button"},be=_("\u5220\u9664"),ge=_("\u53BB\u5904\u7406"),Ee={key:1,class:"footer-button"},Se=_("\u5220\u9664"),Oe=_("\u53BB\u652F\u4ED8"),Be={key:2,class:"footer-button"},Pe=_("\u5220\u9664"),Ae=_("\u53BB\u652F\u4ED8"),De={key:3,class:"footer-button"},Fe={key:4,class:"footer-button"},Ne={key:5,class:"footer-button"},Le=_("\u5220\u9664"),Te={key:6,class:"footer-button"},xe=_("\u5220\u9664"),Me=q({setup(O){const g=X();Z();const e=ee(),{query:{orderNo:E,agentCode:P,tenantId:B,abbreviation:Re,productCategory:A}}=g,h=()=>{ne.confirm({title:"\u786E\u8BA4",message:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F"}).then(()=>{e.value&&ue(e.value.id,e.value.orderStatus).then(r=>{const{code:u,data:t}=r;u==="10000"&&re.success("\u5220\u9664\u6210\u529F")})})},K=()=>{var r,u;if(e.value){const{id:t,extInfo:{templateId:k,pageCode:m},agencyId:f,venderCode:y}=e.value,C=(u=(r=e.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:u.productCode;W(m,{productCode:C,orderNo:E,orderId:t,agentCode:P,templateId:k,tenantId:B,productCategory:A,insurerCode:y,agencyCode:f,isFromOrderList:"1"})}},D=()=>{var r,u;if(e.value){const{id:t,saleUserId:k,extInfo:{templateId:m},agencyId:f,venderCode:y}=e.value,C=(u=(r=e.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:u.productCode;W("payInfo",{productCode:C,orderNo:E,orderId:t,saleUserId:k,templateId:m,tenantId:B,productCategory:A,insurerCode:y,agencyCode:f})}};return te(()=>{de({orderNo:E,agentCode:P,tenantId:B}).then(r=>{const{code:u,data:t}=r;u==="10000"&&(e.value=t)})}),(r,u)=>{const t=j("van-button"),k=j("ProPageWrap");return a(),w(k,null,{default:s(()=>{var m,f,y,C,F,N,L,T,x,M,R,Y,U,$,G;return[i("div",me,[i("div",fe,[o(I,null,{label:s(()=>{var p,S,V,H;return[i("div",ye,[i("div",Ce,b((V=(S=(p=e.value)==null?void 0:p.tenantOrderInsuredList[0])==null?void 0:S.tenantOrderProductList[0])==null?void 0:V.productName),1),i("div",he,b((H=e.value)==null?void 0:H.abbreviation),1)])]}),content:s(()=>{var p;return[i("div",ke,b(e.value?n(ce)[(p=e.value)==null?void 0:p.orderStatus]:""),1)]}),_:1}),o(I,{label:"\u8BA2\u5355\u53F7",content:(m=e.value)==null?void 0:m.orderNo},null,8,["content"]),o(I,{label:"\u521B\u5EFA\u65F6\u95F4",content:n(oe)((f=e.value)==null?void 0:f.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),o(I,{label:"\u6295\u4FDD\u4EBA",content:(C=(y=e.value)==null?void 0:y.tenantOrderHolder)==null?void 0:C.name},null,8,["content"]),(a(!0),d(ae,null,se(((F=e.value)==null?void 0:F.tenantOrderInsuredList)||[],(p,S)=>(a(),w(I,{key:S,label:"\u88AB\u4FDD\u4EBA",content:p.name},null,8,["content"]))),128))]),o(le,{"product-data":(T=(L=(N=e.value)==null?void 0:N.tenantOrderInsuredList[0])==null?void 0:L.tenantOrderProductList)==null?void 0:T[0],class:"insure-info"},null,8,["product-data"]),((x=e.value)==null?void 0:x.orderStatus)===n(v).PENDING?(a(),d("div",Ie,[o(t,{type:"primary",onClick:l(h,["stop"])},{default:s(()=>[be]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:l(K,["stop"])},{default:s(()=>[ge]),_:1},8,["onClick"])])):c("",!0),((M=e.value)==null?void 0:M.orderStatus)===n(v).PAYING?(a(),d("div",Ee,[o(t,{type:"primary",onClick:l(h,["stop"])},{default:s(()=>[Se]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:l(D,["stop"])},{default:s(()=>[Oe]),_:1},8,["onClick"])])):c("",!0),((R=e.value)==null?void 0:R.orderStatus)===n(v).PAYMENT_FAILED?(a(),d("div",Be,[o(t,{type:"primary",onClick:l(h,["stop"])},{default:s(()=>[Pe]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:l(D,["stop"])},{default:s(()=>[Ae]),_:1},8,["onClick"])])):c("",!0),((Y=e.value)==null?void 0:Y.orderStatus)===n(v).PAYMENT_SUCCESS?(a(),d("div",De)):c("",!0),((U=e.value)==null?void 0:U.orderStatus)===n(v).ACCEPT_POLICY?(a(),d("div",Fe)):c("",!0),(($=e.value)==null?void 0:$.orderStatus)===n(v).INSURER_REJECT?(a(),d("div",Ne,[o(t,{type:"primary",onClick:l(h,["stop"])},{default:s(()=>[Le]),_:1},8,["onClick"])])):c("",!0),((G=e.value)==null?void 0:G.orderStatus)===n(v).TIMEOUT?(a(),d("div",Te,[o(t,{type:"primary",onClick:l(h,["stop"])},{default:s(()=>[xe]),_:1},8,["onClick"])])):c("",!0)])]}),_:1})}}});var Je=z(Me,[["__scopeId","data-v-b45c4c8c"]]);export{Je as default};
