import{G as e,d as t,b6 as a,b as n,c as o,E as l,h as r,f as s,k as d,i,L as u,e as c,w as p,U as v,V as m,g as f,W as y,b3 as I,u as b,a as C,r as g,a1 as k,m as N,B as h,bz as L,ae as _,cr as S,z as D,ag as Y,cK as P,j as x,bA as j,D as T,T as A,Q as G,cM as M,cL as w}from"./index-a5acf6e2.js";import{d as E}from"./order-4b9482a9.js";import{d as R}from"./trial-d2cae786.js";import{e as q,g as W}from"./infoCollection-0c16be7c.js";import{R as B,b as O}from"./trial-41b13718.js";import"./pdfh5-008ca364.js";const U={class:"com-field-info"},$={key:0,class:"label"},z={class:"content"};var H=e(t({__name:"fieldInfo",props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,u)=>(n(),o("div",U,[e.label?(n(),o("div",$,l(e.label),1)):r("",!0),s(t).label?d(a.$slots,"label",{key:1},void 0,!0):r("",!0),i("div",z,l(e.content),1),s(t).content?d(a.$slots,"content",{key:2},void 0,!0):r("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const K={class:"com-insured-part-wrapper"},X={class:"content-wrapper"},Z={class:"product-name"},F={class:"risk-item"};var J=e(t({__name:"InsuredPart",props:{productData:{default:()=>({})},totalPremium:{default:0}},setup(e){const t=e,a=u((()=>{var e,a;const n={riderRiskList:[],amount:0},o=null==(e=t.productData)?void 0:e.riskList.find((e=>e.riskType===B.MAIN_RISK));return Object.assign(n,o),null==(a=t.productData)||a.riskList.forEach((e=>{n.riderRiskList.push(e.riskName||"")})),n}));return(t,r)=>{const d=y,u=I;return n(),o("div",K,[c(u,{title:"保障信息"},{default:p((()=>[i("div",X,[i("div",Z,l(e.productData.productName),1),i("div",F,[c(d,{title:"保障期间",content:s(a).coveragePeriodDesc},null,8,["content"]),c(d,{title:"交费期间",content:s(a).chargePeriodDesc},null,8,["content"]),c(d,{title:"交费方式",content:s(O)[s(a).paymentFrequency]},null,8,["content"]),(n(!0),o(v,null,m(s(a).riderRiskList,((e,t)=>(n(),f(d,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),c(d,{title:"保障金额",content:(s(a).initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),c(d,{title:"首期保费",class:"price",content:(e.totalPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-51eb63ba"]]);const Q={key:0,class:"page-order-detail"},V={class:"card"},ee={class:"header"},te={class:"product-name"},ae={class:"company-name"},ne={class:"status"},oe={key:0,class:"footer-button"},le={key:1,class:"footer-button"},re={key:2,class:"footer-button"};var se=e(t({__name:"index",setup(e){const t=b(),a=C(),d=g(),{query:{orderNo:u,agentCode:y,tenantId:I,abbreviation:B,productCategory:O}}=t,U=()=>{T.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{d.value&&E(d.value.id,d.value.orderStatus).then((e=>{const{code:t,data:a}=e;"10000"===t&&A.success("删除成功")}))}))},$=g(!1),z=()=>{var e,t,n,o,l;if(d.value){if((()=>{var e,t,n;if(!d.value)return!1;const{agencyId:o,saleChannelId:l,orderTopStatus:r}=d.value,s=null==(n=null==(t=null==(e=d.value.insuredList)?void 0:e[0])?void 0:t.productList[0])?void 0:n.productCode;if(!(P.PENDING!==r&&P.PAYING!==r||s!==w.ZXYS&&s!==w.BWYL)){const e={[w.ZXYS]:"/internet/productDetail/package",[w.BWYL]:"/internet/productDetail"};return a.push({path:e[s],query:{productCode:s,saleChannelId:l,agentCode:y,tenantId:I,agencyCode:o,orderNo:u}}),!0}return!1})())return;const{id:r,extInfo:{templateId:s,pageCode:i,extraInfo:c},agencyId:p,insurerCode:v,orderStatus:m}=d.value,f={insurerCode:v,productCode:null==(n=null==(t=null==(e=d.value.insuredList)?void 0:e[0])?void 0:t.productList[0])?void 0:n.productCode,tenantId:d.value.tenantId,agencyCode:d.value.agencyId,agentCode:d.value.saleUserId,saleChannelId:null==c?void 0:c.saleChannelId,extraMap:{...null==(l=null==(o=d.value)?void 0:o.extInfo)?void 0:l.extraInfo,orderNo:d.value.orderNo}};$.value=!0,R(f).then((e=>{if(console.log("投保链接==",e.data),"10000"===e.code)if([q.LONG,q.NIANJIN].includes(W(`${s}`))){const t=e.data.split("?")[1],n=G.parse(t);a.push({path:M[m],query:{...n,extraInfo:n.extraInfo,orderNo:u}})}else window.location.href=e.data}))}};return k((()=>{N({orderNo:u,agentCode:y,tenantId:I}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(d.value=a)}))})),(e,t)=>{const a=h,u=L("ProPageWrap"),y=_("loading");return n(),f(u,null,{default:p((()=>{var e,t,u,I,b,C,g,k,N,h,L,_;return[s(d)?(n(),o("div",Q,[i("div",V,[c(H,null,{label:p((()=>{var e,t,a,n;return[i("div",ee,[i("div",te,l(null==(a=null==(t=null==(e=s(d))?void 0:e.insuredList[0])?void 0:t.productList[0])?void 0:a.productName),1),i("div",ae,l(((null==(n=s(d))?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:p((()=>{var e;return[i("div",ne,l(s(d)?s(S)[null==(e=s(d))?void 0:e.orderStatus]:""),1)]})),_:1}),c(H,{label:"投保单号",content:null==(e=s(d))?void 0:e.orderNo},null,8,["content"]),c(H,{label:"创建时间",content:s(D)(null==(t=s(d))?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),c(H,{label:"投保人",content:null==(I=null==(u=s(d))?void 0:u.holder)?void 0:I.name},null,8,["content"]),(n(!0),o(v,null,m((null==(b=s(d))?void 0:b.insuredList)||[],((e,t)=>(n(),f(H,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),c(J,{"product-data":null==(N=null==(k=null==(g=null==(C=s(d))?void 0:C.insuredList)?void 0:g[0])?void 0:k.productList)?void 0:N[0],"total-premium":s(d).orderAmount,class:"insure-info"},null,8,["product-data","total-premium"]),Y((n(),o("div",null,[(null==(h=s(d))?void 0:h.orderTopStatus)===s(P).PENDING?(n(),o("div",oe,[c(a,{type:"primary",onClick:j(U,["stop"])},{default:p((()=>[x("删除")])),_:1},8,["onClick"]),c(a,{type:"primary",onClick:j(z,["stop"])},{default:p((()=>[x("去处理")])),_:1},8,["onClick"])])):r("",!0),(null==(L=s(d))?void 0:L.orderTopStatus)===s(P).PAYING?(n(),o("div",le,[c(a,{type:"primary",onClick:j(U,["stop"])},{default:p((()=>[x("删除")])),_:1},8,["onClick"]),c(a,{type:"primary",onClick:j(z,["stop"])},{default:p((()=>[x("去支付")])),_:1},8,["onClick"])])):r("",!0),(null==(_=s(d))?void 0:_.orderTopStatus)===s(P).TIMEOUT?(n(),o("div",re,[c(a,{type:"primary",onClick:j(U,["stop"])},{default:p((()=>[x("删除")])),_:1},8,["onClick"])])):r("",!0)])),[[y,s($)]])])):r("",!0)]})),_:1})}}}),[["__scopeId","data-v-70ecbf43"]]);export{se as default};
