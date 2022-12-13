import{_ as e,d as t,aL as a,c as n,g as o,t as r,j as d,l,a9 as s,i as u,a as i,u as c,r as v,z as p,p as I,b as C,e as f,w as m,f as y,F as b,h as g,k,n as L,a0 as O,a5 as N,T as P,a4 as _,bh as h}from"./index-737e0195.js";import{d as S}from"./order-2d8e07be.js";import{O as Y,b as j}from"./order-cab73b13.js";import{I as T}from"./InsuredPart-73ad4005.js";import"./pdfdist-c7cc8cdf.js";import"./trial-d8699e92.js";const D={class:"com-field-info"},x={key:0,class:"label"},G={class:"content"};var E=e(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,i)=>(n(),o("div",D,[e.label?(n(),o("div",x,r(e.label),1)):d("",!0),l(t).label?s(a.$slots,"label",{key:1},void 0,!0):d("",!0),u("div",G,r(e.content),1),l(t).content?s(a.$slots,"content",{key:2},void 0,!0):d("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const H={key:0,class:"page-order-detail"},M={class:"card"},U={class:"header"},W={class:"product-name"},q={class:"company-name"},A={class:"status"},B={key:0,class:"footer-button"},F=L("删除"),X=L("去处理"),Z={key:1,class:"footer-button"},$=L("删除"),w=L("去支付"),z={key:2,class:"footer-button"},J=L("删除");var K=e(t({setup(e){const t=i(),a=c(),s=v(),{query:{orderNo:L,agentCode:D,tenantId:x,abbreviation:G,productCategory:K}}=t,Q=()=>{N.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{s.value&&S(s.value.id,s.value.orderStatus).then((e=>{const{code:t,data:a}=e;"10000"===t&&P.success("删除成功")}))}))},R=()=>{var e,t;if(!s.value)return!1;const{agencyId:n,saleChannelId:o,orderTopStatus:r}=s.value,d=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;if(!(j.PENDING!==r&&j.PAYING!==r||d!==h.ZXYS&&d!==h.BWYL)){const e={[h.ZXYS]:"/internet/productDetail/package",[h.BWYL]:"/internet/productDetail"};return a.push({path:e[d],query:{productCode:d,saleChannelId:o,agentCode:D,tenantId:x,agencyCode:n,orderNo:L}}),!0}return!1},V=()=>{var e,t;if(s.value){if(R())return;const{id:a,extInfo:{templateId:n,pageCode:o},agencyId:r,venderCode:d}=s.value,l=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;_(o,{productCode:l,orderNo:L,orderId:a,agentCode:D,templateId:n,tenantId:x,productCategory:K,insurerCode:d,agencyCode:r,isFromOrderList:"1"})}},ee=()=>{var e,t;if(s.value){if(R())return;const{id:a,saleUserId:n,extInfo:{templateId:o},agencyId:r,venderCode:d}=s.value,l=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;_("payInfo",{productCode:l,orderNo:L,orderId:a,saleUserId:n,templateId:o,tenantId:x,productCategory:K,insurerCode:d,agencyCode:r})}};return p((()=>{I({orderNo:L,agentCode:D,tenantId:x}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(s.value=a)}))})),(e,t)=>{const a=C("van-button"),i=C("ProPageWrap");return n(),f(i,null,{default:m((()=>{var e,t,i,c,v,p,I,C,L,N,P;return[s.value?(n(),o("div",H,[u("div",M,[y(E,null,{label:m((()=>{var e,t,a,n;return[u("div",U,[u("div",W,r(null==(a=null==(t=null==(e=s.value)?void 0:e.tenantOrderInsuredList[0])?void 0:t.tenantOrderProductList[0])?void 0:a.productName),1),u("div",q,r(null==(n=s.value)?void 0:n.abbreviation),1)])]})),content:m((()=>{var e;return[u("div",A,r(s.value?l(Y)[null==(e=s.value)?void 0:e.orderStatus]:""),1)]})),_:1}),y(E,{label:"投保单号",content:null==(e=s.value)?void 0:e.orderNo},null,8,["content"]),y(E,{label:"创建时间",content:l(O)(null==(t=s.value)?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),y(E,{label:"投保人",content:null==(c=null==(i=s.value)?void 0:i.tenantOrderHolder)?void 0:c.name},null,8,["content"]),(n(!0),o(b,null,g((null==(v=s.value)?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(n(),f(E,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),y(T,{"product-data":null==(C=null==(I=null==(p=s.value)?void 0:p.tenantOrderInsuredList[0])?void 0:I.tenantOrderProductList)?void 0:C[0],class:"insure-info"},null,8,["product-data"]),(null==(L=s.value)?void 0:L.orderTopStatus)===l(j).PENDING?(n(),o("div",B,[y(a,{type:"primary",onClick:k(Q,["stop"])},{default:m((()=>[F])),_:1},8,["onClick"]),y(a,{type:"primary",onClick:k(V,["stop"])},{default:m((()=>[X])),_:1},8,["onClick"])])):d("",!0),(null==(N=s.value)?void 0:N.orderTopStatus)===l(j).PAYING?(n(),o("div",Z,[y(a,{type:"primary",onClick:k(Q,["stop"])},{default:m((()=>[$])),_:1},8,["onClick"]),y(a,{type:"primary",onClick:k(ee,["stop"])},{default:m((()=>[w])),_:1},8,["onClick"])])):d("",!0),(null==(P=s.value)?void 0:P.orderTopStatus)===l(j).TIMEOUT?(n(),o("div",z,[y(a,{type:"primary",onClick:k(Q,["stop"])},{default:m((()=>[J])),_:1},8,["onClick"])])):d("",!0)])):d("",!0)]})),_:1})}}}),[["__scopeId","data-v-719e96a1"]]);export{K as default};
