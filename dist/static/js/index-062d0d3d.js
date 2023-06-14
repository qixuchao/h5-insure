import{d as e,ap as t,b as a,c as n,E as o,h as l,f as r,k as s,i as d,G as i,L as u,e as c,w as p,$ as v,a7 as m,bz as f,a5 as y,g as I,bI as C,u as b,a as k,r as g,Z as N,m as h,B as L,bs as _,cf as S,cs as D,z as Y,b2 as x,cL as P,j as T,aa as j,D as A,T as G,Q as M,cN as w,cM as E}from"./index-4989475c.js";import{d as R}from"./order-19cff0cd.js";import{d as q}from"./trial-23f93457.js";import{e as $,g as B}from"./infoCollection-e57b7b71.js";import{b as O,R as Z}from"./trial-36131a3f.js";const z={class:"com-field-info"},H={key:0,class:"label"},U={class:"content"};var W=i(e({__name:"fieldInfo",props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const i=t();return(t,u)=>(a(),n("div",z,[e.label?(a(),n("div",H,o(e.label),1)):l("",!0),r(i).label?s(t.$slots,"label",{key:1},void 0,!0):l("",!0),d("div",U,o(e.content),1),r(i).content?s(t.$slots,"content",{key:2},void 0,!0):l("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const X={class:"com-insured-part-wrapper"},F={class:"content-wrapper"},J={class:"product-name"},K={class:"risk-item"};var Q=i(e({__name:"InsuredPart",props:{productData:{default:()=>({})},totalPremium:{default:0}},setup(e){const t=e,l=u((()=>{var e,a;const n={riderRiskList:[],amount:0},o=null==(e=t.productData)?void 0:e.riskList.find((e=>e.riskType===Z.MAIN_RISK));return Object.assign(n,o),null==(a=t.productData)||a.riskList.forEach((e=>{n.riderRiskList.push(e.riskName||"")})),n}));return(e,t)=>{const s=f,i=y;return a(),n("div",X,[c(i,{title:"保障信息"},{default:p((()=>[d("div",F,[d("div",J,o(e.productData.productName),1),d("div",K,[c(s,{title:"保障期间",content:r(l).coveragePeriodDesc},null,8,["content"]),c(s,{title:"交费期间",content:r(l).chargePeriodDesc},null,8,["content"]),c(s,{title:"交费方式",content:r(O)[r(l).paymentFrequency]},null,8,["content"]),(a(!0),n(v,null,m(r(l).riderRiskList,((e,t)=>(a(),I(s,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),c(s,{title:"保障金额",content:(r(l).initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),c(s,{title:"首期保费",class:"price",content:(e.totalPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-51eb63ba"]]);const V={key:0,class:"page-order-detail"},ee={class:"card"},te={class:"header"},ae={class:"product-name"},ne={class:"company-name"},oe={class:"status"},le={key:0,class:"footer-button"},re={key:1,class:"footer-button"},se={key:2,class:"footer-button"};var de=i(e({__name:"index",setup(e){const t=C(),s=b(),i=k(),u=g(),{query:{orderNo:f,agentCode:y,tenantId:O,abbreviation:Z,productCategory:z}}=s,H=()=>{A.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{u.value&&R(u.value.id,u.value.orderStatus).then((e=>{const{code:t,data:a}=e;"10000"===t&&G.success("删除成功")}))}))},U=g(!1),X=()=>{var e,t,a,n,o;if(u.value){if((()=>{var e,t,a;if(!u.value)return!1;const{agencyId:n,saleChannelId:o,orderTopStatus:l}=u.value,r=null==(a=null==(t=null==(e=u.value.insuredList)?void 0:e[0])?void 0:t.productList[0])?void 0:a.productCode;if(!(P.PENDING!==l&&P.PAYING!==l||r!==E.ZXYS&&r!==E.BWYL)){const e={[E.ZXYS]:"/internet/productDetail/package",[E.BWYL]:"/internet/productDetail"};return i.push({path:e[r],query:{productCode:r,saleChannelId:o,agentCode:y,tenantId:O,agencyCode:n,orderNo:f}}),!0}return!1})())return;const{id:l,extInfo:{templateId:r,pageCode:s,extraInfo:d},agencyId:c,insurerCode:p,orderStatus:v}=u.value,m={insurerCode:p,productCode:null==(a=null==(t=null==(e=u.value.insuredList)?void 0:e[0])?void 0:t.productList[0])?void 0:a.productCode,tenantId:u.value.tenantId,agencyCode:u.value.agencyId,agentCode:u.value.saleUserId,saleChannelId:null==d?void 0:d.saleChannelId,extraMap:{...null==(o=null==(n=u.value)?void 0:n.extInfo)?void 0:o.extraInfo,orderNo:u.value.orderNo}};U.value=!0,q(m).then((e=>{if(console.log("投保链接==",e.data),"10000"===e.code)if([$.LONG,$.NIANJIN].includes(B(`${r}`))){const t=e.data.split("?")[1],a=M.parse(t);i.push({path:w[v],query:{...a,extraInfo:a.extraInfo,orderNo:f,templateId:r}})}else window.location.href=e.data}))}};return N((()=>{h({orderNo:f,agentCode:y,tenantId:O}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(u.value=a)}))})),(e,s)=>{const i=L,f=_,y=S("loading");return a(),I(f,{"theme-vars":r(t)},{default:p((()=>{var e,t,s,f,C,b,k,g,N,h,L,_;return[r(u)?(a(),n("div",V,[d("div",ee,[c(W,null,{label:p((()=>{var e,t,a,n;return[d("div",te,[d("div",ae,o(null==(a=null==(t=null==(e=r(u))?void 0:e.insuredList[0])?void 0:t.productList[0])?void 0:a.productName),1),d("div",ne,o(((null==(n=r(u))?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:p((()=>{var e;return[d("div",oe,o(r(u)?r(D)[null==(e=r(u))?void 0:e.orderStatus]:""),1)]})),_:1}),c(W,{label:"投保单号",content:null==(e=r(u))?void 0:e.orderNo},null,8,["content"]),c(W,{label:"创建时间",content:r(Y)(null==(t=r(u))?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),c(W,{label:"投保人",content:null==(f=null==(s=r(u))?void 0:s.holder)?void 0:f.name},null,8,["content"]),(a(!0),n(v,null,m((null==(C=r(u))?void 0:C.insuredList)||[],((e,t)=>(a(),I(W,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),c(Q,{"product-data":null==(N=null==(g=null==(k=null==(b=r(u))?void 0:b.insuredList)?void 0:k[0])?void 0:g.productList)?void 0:N[0],"total-premium":r(u).orderAmount,class:"insure-info"},null,8,["product-data","total-premium"]),x((a(),n("div",null,[(null==(h=r(u))?void 0:h.orderTopStatus)===r(P).PENDING?(a(),n("div",le,[c(i,{type:"primary",onClick:j(H,["stop"])},{default:p((()=>[T("删除")])),_:1},8,["onClick"]),c(i,{type:"primary",onClick:j(X,["stop"])},{default:p((()=>[T("去处理")])),_:1},8,["onClick"])])):l("",!0),(null==(L=r(u))?void 0:L.orderTopStatus)===r(P).PAYING?(a(),n("div",re,[c(i,{type:"primary",onClick:j(H,["stop"])},{default:p((()=>[T("删除")])),_:1},8,["onClick"]),c(i,{type:"primary",onClick:j(X,["stop"])},{default:p((()=>[T("去支付")])),_:1},8,["onClick"])])):l("",!0),(null==(_=r(u))?void 0:_.orderTopStatus)===r(P).TIMEOUT?(a(),n("div",se,[c(i,{type:"primary",onClick:j(H,["stop"])},{default:p((()=>[T("删除")])),_:1},8,["onClick"])])):l("",!0)])),[[y,r(U)]])])):l("",!0)]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-e356e3ba"]]);export{de as default};
