<<<<<<< HEAD:dist/static/js/index-250376e4.js
import{g as H,v as J,j as r,n as v,z as u,J as C,A as l,Y as $,t as m,O as W,a9 as z,E as K,h as Q,r as U,k as V,m as s,p as n,d as X,F as Z,G as ee,ab as y,C as I,D as te,T as oe}from"./vendor-17026bfd.js";import{d as ae}from"./order-f65b302b.js";import{_ as j,g as ne,q as G}from"./index-eaf5a301.js";import{O as se,b as B}from"./order-26db6dbf.js";import{I as re}from"./InsuredPart-d83723c6.js";import"./utils-b6782348.js";import"./trial-ada6426b.js";const de={class:"com-field-info"},ue={class:"label"},le={class:"content"},ce=H({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(O){const g=J();return(e,b)=>(r(),v("div",de,[u("div",ue,C(O.label),1),l(g).label?$(e.$slots,"label",{key:0},void 0,!0):m("",!0),u("div",le,C(O.content),1),l(g).content?$(e.$slots,"content",{key:1},void 0,!0):m("",!0)]))}});var h=j(ce,[["__scopeId","data-v-67c490df"]]);const ie={key:0,class:"page-order-detail"},_e={class:"card"},pe={class:"header"},ve={class:"product-name"},me={class:"company-name"},fe={class:"status"},ye={key:0,class:"footer-button"},he=I("\u5220\u9664"),Ce=I("\u53BB\u5904\u7406"),Ie={key:1,class:"footer-button"},ge=I("\u5220\u9664"),be=I("\u53BB\u652F\u4ED8"),ke={key:2,class:"footer-button"},Oe=I("\u5220\u9664"),De=H({setup(O){const g=W();z();const e=K(),{query:{orderNo:b,agentCode:P,tenantId:D,abbreviation:Fe,productCategory:S}}=g,F=()=>{te.confirm({title:"\u786E\u8BA4",message:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F"}).then(()=>{e.value&&ae(e.value.id,e.value.orderStatus).then(o=>{const{code:a,data:t}=o;a==="10000"&&oe.success("\u5220\u9664\u6210\u529F")})})},q=()=>{var o,a;if(e.value){const{id:t,extInfo:{templateId:f,pageCode:c},agencyId:i,venderCode:_}=e.value,p=(a=(o=e.value.tenantOrderInsuredList[0])==null?void 0:o.tenantOrderProductList[0])==null?void 0:a.productCode;G(c,{productCode:p,orderNo:b,orderId:t,agentCode:P,templateId:f,tenantId:D,productCategory:S,insurerCode:_,agencyCode:i,isFromOrderList:"1"})}},w=()=>{var o,a;if(e.value){const{id:t,saleUserId:f,extInfo:{templateId:c},agencyId:i,venderCode:_}=e.value,p=(a=(o=e.value.tenantOrderInsuredList[0])==null?void 0:o.tenantOrderProductList[0])==null?void 0:a.productCode;G("payInfo",{productCode:p,orderNo:b,orderId:t,saleUserId:f,templateId:c,tenantId:D,productCategory:S,insurerCode:_,agencyCode:i})}};return Q(()=>{ne({orderNo:b,agentCode:P,tenantId:D}).then(o=>{const{code:a,data:t}=o;a==="10000"&&(e.value=t)})}),(o,a)=>{const t=U("van-button"),f=U("ProPageWrap");return r(),V(f,null,{default:s(()=>{var c,i,_,p,E,T,A,L,N,x,M;return[e.value?(r(),v("div",ie,[u("div",_e,[n(h,null,{label:s(()=>{var d,k,R,Y;return[u("div",pe,[u("div",ve,C((R=(k=(d=e.value)==null?void 0:d.tenantOrderInsuredList[0])==null?void 0:k.tenantOrderProductList[0])==null?void 0:R.productName),1),u("div",me,C((Y=e.value)==null?void 0:Y.abbreviation),1)])]}),content:s(()=>{var d;return[u("div",fe,C(e.value?l(se)[(d=e.value)==null?void 0:d.orderStatus]:""),1)]}),_:1}),n(h,{label:"\u6295\u4FDD\u5355\u53F7",content:(c=e.value)==null?void 0:c.orderNo},null,8,["content"]),n(h,{label:"\u521B\u5EFA\u65F6\u95F4",content:l(X)((i=e.value)==null?void 0:i.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),n(h,{label:"\u6295\u4FDD\u4EBA",content:(p=(_=e.value)==null?void 0:_.tenantOrderHolder)==null?void 0:p.name},null,8,["content"]),(r(!0),v(Z,null,ee(((E=e.value)==null?void 0:E.tenantOrderInsuredList)||[],(d,k)=>(r(),V(h,{key:k,label:"\u88AB\u4FDD\u4EBA",content:d.name},null,8,["content"]))),128))]),n(re,{"product-data":(L=(A=(T=e.value)==null?void 0:T.tenantOrderInsuredList[0])==null?void 0:A.tenantOrderProductList)==null?void 0:L[0],class:"insure-info"},null,8,["product-data"]),((N=e.value)==null?void 0:N.orderTopStatus)===l(B).PENDING?(r(),v("div",ye,[n(t,{type:"primary",onClick:y(F,["stop"])},{default:s(()=>[he]),_:1},8,["onClick"]),n(t,{type:"primary",onClick:y(q,["stop"])},{default:s(()=>[Ce]),_:1},8,["onClick"])])):m("",!0),((x=e.value)==null?void 0:x.orderTopStatus)===l(B).PAYING?(r(),v("div",Ie,[n(t,{type:"primary",onClick:y(F,["stop"])},{default:s(()=>[ge]),_:1},8,["onClick"]),n(t,{type:"primary",onClick:y(w,["stop"])},{default:s(()=>[be]),_:1},8,["onClick"])])):m("",!0),((M=e.value)==null?void 0:M.orderTopStatus)===l(B).TIMEOUT?(r(),v("div",ke,[n(t,{type:"primary",onClick:y(F,["stop"])},{default:s(()=>[Oe]),_:1},8,["onClick"])])):m("",!0)])):m("",!0)]}),_:1})}}});var Ne=j(De,[["__scopeId","data-v-483be574"]]);export{Ne as default};
=======
import{g as H,v as J,j as r,n as v,z as u,J as C,A as l,Y as $,t as m,O as W,a9 as z,E as K,h as Q,r as U,k as V,m as s,p as n,d as X,F as Z,G as ee,ab as y,C as I,D as te,T as oe}from"./vendor-ec22d003.js";import{d as ae}from"./order-63161083.js";import{_ as j,g as ne,q as G}from"./index-160a821b.js";import{O as se,b as B}from"./order-26db6dbf.js";import{I as re}from"./InsuredPart-225b5cb9.js";import"./utils-b6782348.js";import"./trial-74995d58.js";const de={class:"com-field-info"},ue={class:"label"},le={class:"content"},ce=H({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(O){const g=J();return(e,b)=>(r(),v("div",de,[u("div",ue,C(O.label),1),l(g).label?$(e.$slots,"label",{key:0},void 0,!0):m("",!0),u("div",le,C(O.content),1),l(g).content?$(e.$slots,"content",{key:1},void 0,!0):m("",!0)]))}});var h=j(ce,[["__scopeId","data-v-67c490df"]]);const ie={key:0,class:"page-order-detail"},_e={class:"card"},pe={class:"header"},ve={class:"product-name"},me={class:"company-name"},fe={class:"status"},ye={key:0,class:"footer-button"},he=I("\u5220\u9664"),Ce=I("\u53BB\u5904\u7406"),Ie={key:1,class:"footer-button"},ge=I("\u5220\u9664"),be=I("\u53BB\u652F\u4ED8"),ke={key:2,class:"footer-button"},Oe=I("\u5220\u9664"),De=H({setup(O){const g=W();z();const e=K(),{query:{orderNo:b,agentCode:P,tenantId:D,abbreviation:Fe,productCategory:S}}=g,F=()=>{te.confirm({title:"\u786E\u8BA4",message:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F"}).then(()=>{e.value&&ae(e.value.id,e.value.orderStatus).then(o=>{const{code:a,data:t}=o;a==="10000"&&oe.success("\u5220\u9664\u6210\u529F")})})},q=()=>{var o,a;if(e.value){const{id:t,extInfo:{templateId:f,pageCode:c},agencyId:i,venderCode:_}=e.value,p=(a=(o=e.value.tenantOrderInsuredList[0])==null?void 0:o.tenantOrderProductList[0])==null?void 0:a.productCode;G(c,{productCode:p,orderNo:b,orderId:t,agentCode:P,templateId:f,tenantId:D,productCategory:S,insurerCode:_,agencyCode:i,isFromOrderList:"1"})}},w=()=>{var o,a;if(e.value){const{id:t,saleUserId:f,extInfo:{templateId:c},agencyId:i,venderCode:_}=e.value,p=(a=(o=e.value.tenantOrderInsuredList[0])==null?void 0:o.tenantOrderProductList[0])==null?void 0:a.productCode;G("payInfo",{productCode:p,orderNo:b,orderId:t,saleUserId:f,templateId:c,tenantId:D,productCategory:S,insurerCode:_,agencyCode:i})}};return Q(()=>{ne({orderNo:b,agentCode:P,tenantId:D}).then(o=>{const{code:a,data:t}=o;a==="10000"&&(e.value=t)})}),(o,a)=>{const t=U("van-button"),f=U("ProPageWrap");return r(),V(f,null,{default:s(()=>{var c,i,_,p,E,T,A,L,N,x,M;return[e.value?(r(),v("div",ie,[u("div",_e,[n(h,null,{label:s(()=>{var d,k,R,Y;return[u("div",pe,[u("div",ve,C((R=(k=(d=e.value)==null?void 0:d.tenantOrderInsuredList[0])==null?void 0:k.tenantOrderProductList[0])==null?void 0:R.productName),1),u("div",me,C((Y=e.value)==null?void 0:Y.abbreviation),1)])]}),content:s(()=>{var d;return[u("div",fe,C(e.value?l(se)[(d=e.value)==null?void 0:d.orderStatus]:""),1)]}),_:1}),n(h,{label:"\u6295\u4FDD\u5355\u53F7",content:(c=e.value)==null?void 0:c.orderNo},null,8,["content"]),n(h,{label:"\u521B\u5EFA\u65F6\u95F4",content:l(X)((i=e.value)==null?void 0:i.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),n(h,{label:"\u6295\u4FDD\u4EBA",content:(p=(_=e.value)==null?void 0:_.tenantOrderHolder)==null?void 0:p.name},null,8,["content"]),(r(!0),v(Z,null,ee(((E=e.value)==null?void 0:E.tenantOrderInsuredList)||[],(d,k)=>(r(),V(h,{key:k,label:"\u88AB\u4FDD\u4EBA",content:d.name},null,8,["content"]))),128))]),n(re,{"product-data":(L=(A=(T=e.value)==null?void 0:T.tenantOrderInsuredList[0])==null?void 0:A.tenantOrderProductList)==null?void 0:L[0],class:"insure-info"},null,8,["product-data"]),((N=e.value)==null?void 0:N.orderTopStatus)===l(B).PENDING?(r(),v("div",ye,[n(t,{type:"primary",onClick:y(F,["stop"])},{default:s(()=>[he]),_:1},8,["onClick"]),n(t,{type:"primary",onClick:y(q,["stop"])},{default:s(()=>[Ce]),_:1},8,["onClick"])])):m("",!0),((x=e.value)==null?void 0:x.orderTopStatus)===l(B).PAYING?(r(),v("div",Ie,[n(t,{type:"primary",onClick:y(F,["stop"])},{default:s(()=>[ge]),_:1},8,["onClick"]),n(t,{type:"primary",onClick:y(w,["stop"])},{default:s(()=>[be]),_:1},8,["onClick"])])):m("",!0),((M=e.value)==null?void 0:M.orderTopStatus)===l(B).TIMEOUT?(r(),v("div",ke,[n(t,{type:"primary",onClick:y(F,["stop"])},{default:s(()=>[Oe]),_:1},8,["onClick"])])):m("",!0)])):m("",!0)]}),_:1})}}});var Ne=j(De,[["__scopeId","data-v-483be574"]]);export{Ne as default};
>>>>>>> c7a2c7d86ba161c8af0e5ffde82a2f15731514d4:dist/static/js/index-51f6b01a.js
