import{_ as e,d as t,az as a,c as n,g as r,t as o,j as d,l,aA as s,i as u,a as i,u as c,r as v,y as p,p as f,b as I,e as y,w as C,f as m,F as b,h as g,k,n as O,$ as L,a5 as N,T as P,a4 as _,be as h}from"./index-fdfba5cf.js";import{d as S}from"./order-f9361979.js";import{O as Y,b as j}from"./order-1429dd81.js";import{I as T}from"./InsuredPart-13802a3c.js";import"./pdfh5-e5c0db2a.js";import"./trial-fcf5ef30.js";const D={class:"com-field-info"},x={key:0,class:"label"},G={class:"content"};var A=e(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,i)=>(n(),r("div",D,[e.label?(n(),r("div",x,o(e.label),1)):d("",!0),l(t).label?s(a.$slots,"label",{key:1},void 0,!0):d("",!0),u("div",G,o(e.content),1),l(t).content?s(a.$slots,"content",{key:2},void 0,!0):d("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const E={key:0,class:"page-order-detail"},H={class:"card"},M={class:"header"},U={class:"product-name"},W={class:"company-name"},$={class:"status"},q={key:0,class:"footer-button"},B=O("删除"),F=O("去处理"),X={key:1,class:"footer-button"},Z=O("删除"),w=O("去支付"),z={key:2,class:"footer-button"},J=O("删除");var K=e(t({setup(e){const t=i(),a=c(),s=v(),{query:{orderNo:O,agentCode:D,tenantId:x,abbreviation:G,productCategory:K}}=t,Q=()=>{N.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{s.value&&S(s.value.id,s.value.orderStatus).then((e=>{const{code:t,data:a}=e;"10000"===t&&P.success("删除成功")}))}))},R=()=>{var e,t;if(!s.value)return!1;const{agencyId:n,saleChannelId:r,orderTopStatus:o}=s.value,d=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;if(!(j.PENDING!==o&&j.PAYING!==o||d!==h.ZXYS&&d!==h.BWYL)){const e={[h.ZXYS]:"/internet/productDetail/package",[h.BWYL]:"/internet/productDetail"};return a.push({path:e[d],query:{productCode:d,saleChannelId:r,agentCode:D,tenantId:x,agencyCode:n,orderNo:O}}),!0}return!1},V=()=>{var e,t;if(s.value){if(R())return;const{id:a,extInfo:{templateId:n,pageCode:r},agencyId:o,venderCode:d}=s.value,l=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;_(r,{productCode:l,orderNo:O,orderId:a,agentCode:D,templateId:n,tenantId:x,productCategory:K,insurerCode:d,agencyCode:o,isFromOrderList:"1"})}},ee=()=>{var e,t;if(s.value){if(R())return;const{id:a,saleUserId:n,extInfo:{templateId:r},agencyId:o,venderCode:d}=s.value,l=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;_("payInfo",{productCode:l,orderNo:O,orderId:a,saleUserId:n,templateId:r,tenantId:x,productCategory:K,insurerCode:d,agencyCode:o})}};return p((()=>{f({orderNo:O,agentCode:D,tenantId:x}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(s.value=a)}))})),(e,t)=>{const a=I("van-button"),i=I("ProPageWrap");return n(),y(i,null,{default:C((()=>{var e,t,i,c,v,p,f,I,O,N,P;return[s.value?(n(),r("div",E,[u("div",H,[m(A,null,{label:C((()=>{var e,t,a,n;return[u("div",M,[u("div",U,o(null==(a=null==(t=null==(e=s.value)?void 0:e.tenantOrderInsuredList[0])?void 0:t.tenantOrderProductList[0])?void 0:a.productName),1),u("div",W,o(((null==(n=s.value)?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:C((()=>{var e;return[u("div",$,o(s.value?l(Y)[null==(e=s.value)?void 0:e.orderStatus]:""),1)]})),_:1}),m(A,{label:"投保单号",content:null==(e=s.value)?void 0:e.orderNo},null,8,["content"]),m(A,{label:"创建时间",content:l(L)(null==(t=s.value)?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),m(A,{label:"投保人",content:null==(c=null==(i=s.value)?void 0:i.tenantOrderHolder)?void 0:c.name},null,8,["content"]),(n(!0),r(b,null,g((null==(v=s.value)?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(n(),y(A,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),m(T,{"product-data":null==(I=null==(f=null==(p=s.value)?void 0:p.tenantOrderInsuredList[0])?void 0:f.tenantOrderProductList)?void 0:I[0],class:"insure-info"},null,8,["product-data"]),(null==(O=s.value)?void 0:O.orderTopStatus)===l(j).PENDING?(n(),r("div",q,[m(a,{type:"primary",onClick:k(Q,["stop"])},{default:C((()=>[B])),_:1},8,["onClick"]),m(a,{type:"primary",onClick:k(V,["stop"])},{default:C((()=>[F])),_:1},8,["onClick"])])):d("",!0),(null==(N=s.value)?void 0:N.orderTopStatus)===l(j).PAYING?(n(),r("div",X,[m(a,{type:"primary",onClick:k(Q,["stop"])},{default:C((()=>[Z])),_:1},8,["onClick"]),m(a,{type:"primary",onClick:k(ee,["stop"])},{default:C((()=>[w])),_:1},8,["onClick"])])):d("",!0),(null==(P=s.value)?void 0:P.orderTopStatus)===l(j).TIMEOUT?(n(),r("div",z,[m(a,{type:"primary",onClick:k(Q,["stop"])},{default:C((()=>[J])),_:1},8,["onClick"])])):d("",!0)])):d("",!0)]})),_:1})}}}),[["__scopeId","data-v-2e576ed4"]]);export{K as default};
