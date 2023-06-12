import{G as e,d as t,ao as a,b as n,c as o,E as l,h as r,f as s,k as d,i,L as u,e as c,w as p,$ as v,a7 as m,g as f,bz as y,a5 as I,bH as b,u as C,a as k,r as g,Z as N,m as h,B as L,bq as _,ce as S,cs as D,z as Y,aA as x,cL as P,j as T,aa as j,D as A,T as G,Q as M,cN as q,cM as w}from"./index-c26f5a93.js";import{d as E}from"./order-87a1c572.js";import{d as R}from"./trial-44de14b5.js";import{e as $,g as B}from"./infoCollection-c963ab8b.js";import{R as H,b as O}from"./trial-d2eb8ecc.js";const Z={class:"com-field-info"},z={key:0,class:"label"},U={class:"content"};var W=e(t({__name:"fieldInfo",props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,u)=>(n(),o("div",Z,[e.label?(n(),o("div",z,l(e.label),1)):r("",!0),s(t).label?d(a.$slots,"label",{key:1},void 0,!0):r("",!0),i("div",U,l(e.content),1),s(t).content?d(a.$slots,"content",{key:2},void 0,!0):r("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const X={class:"com-insured-part-wrapper"},F={class:"content-wrapper"},J={class:"product-name"},K={class:"risk-item"};var Q=e(t({__name:"InsuredPart",props:{productData:{default:()=>({})},totalPremium:{default:0}},setup(e){const t=e,a=u((()=>{var e,a;const n={riderRiskList:[],amount:0},o=null==(e=t.productData)?void 0:e.riskList.find((e=>e.riskType===H.MAIN_RISK));return Object.assign(n,o),null==(a=t.productData)||a.riskList.forEach((e=>{n.riderRiskList.push(e.riskName||"")})),n}));return(t,r)=>{const d=y,u=I;return n(),o("div",X,[c(u,{title:"保障信息"},{default:p((()=>[i("div",F,[i("div",J,l(e.productData.productName),1),i("div",K,[c(d,{title:"保障期间",content:s(a).coveragePeriodDesc},null,8,["content"]),c(d,{title:"交费期间",content:s(a).chargePeriodDesc},null,8,["content"]),c(d,{title:"交费方式",content:s(O)[s(a).paymentFrequency]},null,8,["content"]),(n(!0),o(v,null,m(s(a).riderRiskList,((e,t)=>(n(),f(d,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),c(d,{title:"保障金额",content:(s(a).initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),c(d,{title:"首期保费",class:"price",content:(e.totalPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-51eb63ba"]]);const V={key:0,class:"page-order-detail"},ee={class:"card"},te={class:"header"},ae={class:"product-name"},ne={class:"company-name"},oe={class:"status"},le={key:0,class:"footer-button"},re={key:1,class:"footer-button"},se={key:2,class:"footer-button"};var de=e(t({__name:"index",setup(e){const t=b(),a=C(),d=k(),u=g(),{query:{orderNo:y,agentCode:I,tenantId:H,abbreviation:O,productCategory:Z}}=a,z=()=>{A.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{u.value&&E(u.value.id,u.value.orderStatus).then((e=>{const{code:t,data:a}=e;"10000"===t&&G.success("删除成功")}))}))},U=g(!1),X=()=>{var e,t,a,n,o;if(u.value){if((()=>{var e,t,a;if(!u.value)return!1;const{agencyId:n,saleChannelId:o,orderTopStatus:l}=u.value,r=null==(a=null==(t=null==(e=u.value.insuredList)?void 0:e[0])?void 0:t.productList[0])?void 0:a.productCode;if(!(P.PENDING!==l&&P.PAYING!==l||r!==w.ZXYS&&r!==w.BWYL)){const e={[w.ZXYS]:"/internet/productDetail/package",[w.BWYL]:"/internet/productDetail"};return d.push({path:e[r],query:{productCode:r,saleChannelId:o,agentCode:I,tenantId:H,agencyCode:n,orderNo:y}}),!0}return!1})())return;const{id:l,extInfo:{templateId:r,pageCode:s,extraInfo:i},agencyId:c,insurerCode:p,orderStatus:v}=u.value,m={insurerCode:p,productCode:null==(a=null==(t=null==(e=u.value.insuredList)?void 0:e[0])?void 0:t.productList[0])?void 0:a.productCode,tenantId:u.value.tenantId,agencyCode:u.value.agencyId,agentCode:u.value.saleUserId,saleChannelId:null==i?void 0:i.saleChannelId,extraMap:{...null==(o=null==(n=u.value)?void 0:n.extInfo)?void 0:o.extraInfo,orderNo:u.value.orderNo}};U.value=!0,R(m).then((e=>{if(console.log("投保链接==",e.data),"10000"===e.code)if([$.LONG,$.NIANJIN].includes(B(`${r}`))){const t=e.data.split("?")[1],a=M.parse(t);d.push({path:q[v],query:{...a,extraInfo:a.extraInfo,orderNo:y,templateId:r}})}else window.location.href=e.data}))}};return N((()=>{h({orderNo:y,agentCode:I,tenantId:H}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(u.value=a)}))})),(e,a)=>{const d=L,y=_,I=S("loading");return n(),f(y,{"theme-vars":s(t)},{default:p((()=>{var e,t,a,y,b,C,k,g,N,h,L,_;return[s(u)?(n(),o("div",V,[i("div",ee,[c(W,null,{label:p((()=>{var e,t,a,n;return[i("div",te,[i("div",ae,l(null==(a=null==(t=null==(e=s(u))?void 0:e.insuredList[0])?void 0:t.productList[0])?void 0:a.productName),1),i("div",ne,l(((null==(n=s(u))?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:p((()=>{var e;return[i("div",oe,l(s(u)?s(D)[null==(e=s(u))?void 0:e.orderStatus]:""),1)]})),_:1}),c(W,{label:"投保单号",content:null==(e=s(u))?void 0:e.orderNo},null,8,["content"]),c(W,{label:"创建时间",content:s(Y)(null==(t=s(u))?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),c(W,{label:"投保人",content:null==(y=null==(a=s(u))?void 0:a.holder)?void 0:y.name},null,8,["content"]),(n(!0),o(v,null,m((null==(b=s(u))?void 0:b.insuredList)||[],((e,t)=>(n(),f(W,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),c(Q,{"product-data":null==(N=null==(g=null==(k=null==(C=s(u))?void 0:C.insuredList)?void 0:k[0])?void 0:g.productList)?void 0:N[0],"total-premium":s(u).orderAmount,class:"insure-info"},null,8,["product-data","total-premium"]),x((n(),o("div",null,[(null==(h=s(u))?void 0:h.orderTopStatus)===s(P).PENDING?(n(),o("div",le,[c(d,{type:"primary",onClick:j(z,["stop"])},{default:p((()=>[T("删除")])),_:1},8,["onClick"]),c(d,{type:"primary",onClick:j(X,["stop"])},{default:p((()=>[T("去处理")])),_:1},8,["onClick"])])):r("",!0),(null==(L=s(u))?void 0:L.orderTopStatus)===s(P).PAYING?(n(),o("div",re,[c(d,{type:"primary",onClick:j(z,["stop"])},{default:p((()=>[T("删除")])),_:1},8,["onClick"]),c(d,{type:"primary",onClick:j(X,["stop"])},{default:p((()=>[T("去支付")])),_:1},8,["onClick"])])):r("",!0),(null==(_=s(u))?void 0:_.orderTopStatus)===s(P).TIMEOUT?(n(),o("div",se,[c(d,{type:"primary",onClick:j(z,["stop"])},{default:p((()=>[T("删除")])),_:1},8,["onClick"])])):r("",!0)])),[[I,s(U)]])])):r("",!0)]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-e356e3ba"]]);export{de as default};
