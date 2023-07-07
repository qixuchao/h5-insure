import{d as t,an as e,b as a,c as n,$ as o,h as l,f as r,ac as s,i as d,ar as i,G as u,e as c,w as p,U as v,a4 as m,bz as f,a2 as y,g as I,bJ as C,u as b,a as k,r as g,R as N,l as h,B as _,bs as L,ci as S,cx as D,y as Y,b2 as x,cQ as P,j as R,a7 as T,b4 as j,D as A,T as G,K as E,cS as w,cR as M}from"./index-4c13af5f.js";import{d as q}from"./order-3406c302.js";import{h as U}from"./trial-19b6a995.js";import{e as $,g as B}from"./infoCollection-abd81e4e.js";import{b as O,R as W}from"./trial-aac7a580.js";const F={class:"com-field-info"},H={key:0,class:"label"},J={class:"content"};var K=i(t({__name:"fieldInfo",props:{label:{type:String,default:""},content:{type:String,default:""}},setup(t){const i=e();return(e,u)=>(a(),n("div",F,[t.label?(a(),n("div",H,o(t.label),1)):l("",!0),r(i).label?s(e.$slots,"label",{key:1},void 0,!0):l("",!0),d("div",J,o(t.content),1),r(i).content?s(e.$slots,"content",{key:2},void 0,!0):l("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const X={class:"com-insured-part-wrapper"},Z={class:"content-wrapper"},z={class:"product-name"},Q={class:"risk-item"};var V=i(t({__name:"InsuredPart",props:{productData:{default:()=>({})},totalPremium:{default:0}},setup(t){const e=t,l=u((()=>{var t,a;const n={riderRiskList:[],amount:0},o=null==(t=e.productData)?void 0:t.riskList.find((t=>t.riskType===W.MAIN_RISK));return Object.assign(n,o),null==(a=e.productData)||a.riskList.forEach((t=>{n.riderRiskList.push(t.riskName||"")})),n}));return(t,e)=>{const s=f,i=y;return a(),n("div",X,[c(i,{title:"保障信息"},{default:p((()=>[d("div",Z,[d("div",z,o(t.productData.productName),1),d("div",Q,[c(s,{title:"保障期间",content:r(l).coveragePeriodDesc},null,8,["content"]),c(s,{title:"交费期间",content:r(l).chargePeriodDesc},null,8,["content"]),c(s,{title:"交费方式",content:r(O)[r(l).paymentFrequency]},null,8,["content"]),(a(!0),n(v,null,m(r(l).riderRiskList,((t,e)=>(a(),I(s,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),c(s,{title:"保障金额",content:(r(l).initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),c(s,{title:"首期保费",class:"price",content:(t.totalPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-51eb63ba"]]);const tt={key:0,class:"page-order-detail"},et={class:"card"},at={class:"header"},nt={class:"product-name"},ot={class:"company-name"},lt={class:"status"},rt={key:0,class:"footer-button"},st={key:1,class:"footer-button"},dt={key:2,class:"footer-button"};var it=i(t({__name:"index",setup(t){const e=C(),s=b(),i=k(),u=g(),{query:{orderNo:f,agentCode:y,tenantId:O,abbreviation:W,productCategory:F}}=s,H=()=>{A.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{u.value&&q(u.value.id,u.value.orderStatus).then((t=>{const{code:e,data:a}=t;"10000"===e&&G.success("删除成功")}))}))},J=g(!1),X=()=>{var t,e,a,n,o;if(u.value){if((()=>{var t,e,a;if(!u.value)return!1;const{agencyId:n,saleChannelId:o,orderTopStatus:l}=u.value,r=null==(a=null==(e=null==(t=u.value.insuredList)?void 0:t[0])?void 0:e.productList[0])?void 0:a.productCode;if(!(P.PENDING!==l&&P.PAYING!==l||r!==M.ZXYS&&r!==M.BWYL)){const t={[M.ZXYS]:"/internet/productDetail/package",[M.BWYL]:"/internet/productDetail"};return i.push({path:t[r],query:{productCode:r,saleChannelId:o,agentCode:y,tenantId:O,agencyCode:n,orderNo:f}}),!0}return!1})())return;const{id:l,extInfo:{templateId:r,pageCode:s,extraInfo:d},agencyId:c,insurerCode:p,orderStatus:v}=u.value,m={insurerCode:p,productCode:null==(a=null==(e=null==(t=u.value.insuredList)?void 0:t[0])?void 0:e.productList[0])?void 0:a.productCode,tenantId:u.value.tenantId,agencyCode:u.value.agencyId,agentCode:u.value.saleUserId,saleChannelId:null==d?void 0:d.saleChannelId,extraMap:{...null==(o=null==(n=u.value)?void 0:n.extInfo)?void 0:o.extraInfo,orderNo:u.value.orderNo}};J.value=!0,U(m).then((t=>{if(console.log("投保链接==",t.data),"10000"===t.code)if([$.LONG,$.NIANJIN].includes(B(`${r}`))){const e=t.data.split("?")[1],a=E.parse(e);i.push({path:w[v],query:{...a,extraInfo:a.extraInfo,orderNo:f,templateId:r}})}else window.location.href=t.data}))}};return N((()=>{h({orderNo:f,agentCode:y,tenantId:O}).then((t=>{const{code:e,data:a}=t;"10000"===e&&(u.value=a)}))})),(t,s)=>{const i=_,f=L,y=S("loading");return a(),I(f,{"theme-vars":r(e)},{default:p((()=>{var t,e,s,f,C,b,k,g,N,h,_,L;return[r(u)?(a(),n("div",tt,[d("div",et,[c(K,null,{label:p((()=>{var t,e,a,n;return[d("div",at,[d("div",nt,o(null==(a=null==(e=null==(t=r(u))?void 0:t.insuredList[0])?void 0:e.productList[0])?void 0:a.productName),1),d("div",ot,o(((null==(n=r(u))?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:p((()=>{var t;return[d("div",lt,o(r(u)?r(D)[null==(t=r(u))?void 0:t.orderStatus]:""),1)]})),_:1}),c(K,{label:"投保单号",content:null==(t=r(u))?void 0:t.orderNo},null,8,["content"]),c(K,{label:"创建时间",content:r(Y)(null==(e=r(u))?void 0:e.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),c(K,{label:"投保人",content:null==(f=null==(s=r(u))?void 0:s.holder)?void 0:f.name},null,8,["content"]),(a(!0),n(v,null,m((null==(C=r(u))?void 0:C.insuredList)||[],((t,e)=>(a(),I(K,{key:e,label:"被保人",content:t.name},null,8,["content"])))),128))]),c(V,{"product-data":null==(N=null==(g=null==(k=null==(b=r(u))?void 0:b.insuredList)?void 0:k[0])?void 0:g.productList)?void 0:N[0],"total-premium":r(u).orderAmount,class:"insure-info"},null,8,["product-data","total-premium"]),x((a(),n("div",null,[(null==(h=r(u))?void 0:h.orderTopStatus)===r(P).PENDING?(a(),n("div",rt,[c(i,{type:"primary",onClick:T(H,["stop"])},{default:p((()=>[R("删除")])),_:1},8,["onClick"]),r(j).UNDERWRITING_FAILED!==r(u).orderStatus?(a(),I(i,{key:0,type:"primary",onClick:T(X,["stop"])},{default:p((()=>[R("去处理")])),_:1},8,["onClick"])):l("",!0)])):l("",!0),(null==(_=r(u))?void 0:_.orderTopStatus)===r(P).PAYING?(a(),n("div",st,[c(i,{type:"primary",onClick:T(H,["stop"])},{default:p((()=>[R("删除")])),_:1},8,["onClick"]),c(i,{type:"primary",onClick:T(X,["stop"])},{default:p((()=>[R("去支付")])),_:1},8,["onClick"])])):l("",!0),(null==(L=r(u))?void 0:L.orderTopStatus)===r(P).TIMEOUT?(a(),n("div",dt,[c(i,{type:"primary",onClick:T(H,["stop"])},{default:p((()=>[R("删除")])),_:1},8,["onClick"])])):l("",!0)])),[[y,r(J)]])])):l("",!0)]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-3969a483"]]);export{it as default};
