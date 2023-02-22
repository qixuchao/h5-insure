import{_ as e,d as t,bi as a,c as n,h as r,t as o,k as d,g as l,bj as s,j as u,a as i,u as c,r as p,G as v,p as I,B as m,e as f,w as C,f as y,ac as b,F as g,i as k,n as _,l as O,b as L,ai as N,T as P,ah as h,cn as S}from"./index-d9e24409.js";/* empty css              */import{d as Y}from"./order-30a909f3.js";import{O as j,b as T}from"./order-20b9b6b3.js";import{I as x}from"./InsuredPart-31c2cca6.js";import"./pdfh5-008ca364.js";import"./trial-85396cad.js";const D={class:"com-field-info"},G={key:0,class:"label"},B={class:"content"};var E=e(t({__name:"fieldInfo",props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,i)=>(n(),r("div",D,[e.label?(n(),r("div",G,o(e.label),1)):d("",!0),l(t).label?s(a.$slots,"label",{key:1},void 0,!0):d("",!0),u("div",B,o(e.content),1),l(t).content?s(a.$slots,"content",{key:2},void 0,!0):d("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const H={key:0,class:"page-order-detail"},M={class:"card"},U={class:"header"},W={class:"product-name"},q={class:"company-name"},A={class:"status"},F={key:0,class:"footer-button"},X={key:1,class:"footer-button"},Z={key:2,class:"footer-button"};var $=e(t({__name:"index",setup(e){const t=i(),a=c(),s=p(),{query:{orderNo:D,agentCode:G,tenantId:B,abbreviation:$,productCategory:w}}=t,z=()=>{N.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{s.value&&Y(s.value.id,s.value.orderStatus).then((e=>{const{code:t,data:a}=e;"10000"===t&&P.success("删除成功")}))}))},J=()=>{var e,t;if(!s.value)return!1;const{agencyId:n,saleChannelId:r,orderTopStatus:o}=s.value,d=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;if(!(T.PENDING!==o&&T.PAYING!==o||d!==S.ZXYS&&d!==S.BWYL)){const e={[S.ZXYS]:"/internet/productDetail/package",[S.BWYL]:"/internet/productDetail"};return a.push({path:e[d],query:{productCode:d,saleChannelId:r,agentCode:G,tenantId:B,agencyCode:n,orderNo:D}}),!0}return!1},K=()=>{var e,t;if(s.value){if(J())return;const{id:a,extInfo:{templateId:n,pageCode:r},agencyId:o,venderCode:d}=s.value,l=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;h(r,{productCode:l,orderNo:D,orderId:a,agentCode:G,templateId:n,tenantId:B,productCategory:w,insurerCode:d,agencyCode:o,isFromOrderList:"1"})}},Q=()=>{var e,t;if(s.value){if(J())return;const{id:a,saleUserId:n,extInfo:{templateId:r},agencyId:o,venderCode:d}=s.value,l=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;h("payInfo",{productCode:l,orderNo:D,orderId:a,saleUserId:n,templateId:r,tenantId:B,productCategory:w,insurerCode:d,agencyCode:o})}};return v((()=>{I({orderNo:D,agentCode:G,tenantId:B}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(s.value=a)}))})),(e,t)=>{const a=m,i=L("ProPageWrap");return n(),f(i,null,{default:C((()=>{var e,t,i,c,p,v,I,m,L,N,P;return[l(s)?(n(),r("div",H,[u("div",M,[y(E,null,{label:C((()=>{var e,t,a,n;return[u("div",U,[u("div",W,o(null==(a=null==(t=null==(e=l(s))?void 0:e.tenantOrderInsuredList[0])?void 0:t.tenantOrderProductList[0])?void 0:a.productName),1),u("div",q,o(((null==(n=l(s))?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:C((()=>{var e;return[u("div",A,o(l(s)?l(j)[null==(e=l(s))?void 0:e.orderStatus]:""),1)]})),_:1}),y(E,{label:"投保单号",content:null==(e=l(s))?void 0:e.orderNo},null,8,["content"]),y(E,{label:"创建时间",content:l(b)(null==(t=l(s))?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),y(E,{label:"投保人",content:null==(c=null==(i=l(s))?void 0:i.tenantOrderHolder)?void 0:c.name},null,8,["content"]),(n(!0),r(g,null,k((null==(p=l(s))?void 0:p.tenantOrderInsuredList)||[],((e,t)=>(n(),f(E,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),y(x,{"product-data":null==(m=null==(I=null==(v=l(s))?void 0:v.tenantOrderInsuredList[0])?void 0:I.tenantOrderProductList)?void 0:m[0],class:"insure-info"},null,8,["product-data"]),(null==(L=l(s))?void 0:L.orderTopStatus)===l(T).PENDING?(n(),r("div",F,[y(a,{type:"primary",onClick:O(z,["stop"])},{default:C((()=>[_("删除")])),_:1},8,["onClick"]),y(a,{type:"primary",onClick:O(K,["stop"])},{default:C((()=>[_("去处理")])),_:1},8,["onClick"])])):d("",!0),(null==(N=l(s))?void 0:N.orderTopStatus)===l(T).PAYING?(n(),r("div",X,[y(a,{type:"primary",onClick:O(z,["stop"])},{default:C((()=>[_("删除")])),_:1},8,["onClick"]),y(a,{type:"primary",onClick:O(Q,["stop"])},{default:C((()=>[_("去支付")])),_:1},8,["onClick"])])):d("",!0),(null==(P=l(s))?void 0:P.orderTopStatus)===l(T).TIMEOUT?(n(),r("div",Z,[y(a,{type:"primary",onClick:O(z,["stop"])},{default:C((()=>[_("删除")])),_:1},8,["onClick"])])):d("",!0)])):d("",!0)]})),_:1})}}}),[["__scopeId","data-v-2e576ed4"]]);export{$ as default};
