import{d as t,aq as e,b as a,c as n,$ as o,h as l,f as s,ae as r,i as d,ag as i,G as c,e as u,w as p,U as v,a4 as m,bT as f,a2 as y,g as I,c5 as b,u as k,a as C,r as g,R as N,l as _,B as h,bM as L,ct as D,cI as S,y as x,b4 as j,c$ as T,j as R,bU as A,b6 as P,D as Y,T as G,K as M,d1 as $}from"./index-6cc8434a.js";import{d as w}from"./order-f12cac64.js";import{j as E}from"./trial-ef9e8715.js";import{e as U,g as q}from"./infoCollection-ca271a49.js";import{b as O,R as F}from"./trial-6c386662.js";import{g as H,s as J}from"./core-6edac259.js";const K={class:"com-field-info"},B={key:0,class:"label"},W={class:"content"};var z=i(t({__name:"fieldInfo",props:{label:{type:String,default:""},content:{type:String,default:""}},setup(t){const i=e();return(e,c)=>(a(),n("div",K,[t.label?(a(),n("div",B,o(t.label),1)):l("",!0),s(i).label?r(e.$slots,"label",{key:1},void 0,!0):l("",!0),d("div",W,o(t.content),1),s(i).content?r(e.$slots,"content",{key:2},void 0,!0):l("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const Q={class:"com-insured-part-wrapper"},V={class:"content-wrapper"},X={class:"product-name"},Z={class:"risk-item"};var tt=i(t({__name:"InsuredPart",props:{productData:{default:()=>({})},totalPremium:{default:0}},setup(t){const e=t,l=c((()=>{var t,a;const n={riderRiskList:[],amount:0},o=null==(t=e.productData)?void 0:t.riskList.find((t=>t.riskType===F.MAIN_RISK));return Object.assign(n,o),null==(a=e.productData)||a.riskList.forEach((t=>{n.riderRiskList.push(t.riskName||"")})),n}));return(t,e)=>{const r=f,i=y;return a(),n("div",Q,[u(i,{title:"保障信息"},{default:p((()=>[d("div",V,[d("div",X,o(t.productData.productName),1),d("div",Z,[u(r,{title:"保障期间",content:s(l).coveragePeriodDesc},null,8,["content"]),u(r,{title:"交费期间",content:s(l).chargePeriodDesc},null,8,["content"]),u(r,{title:"交费方式",content:s(O)[s(l).paymentFrequency]},null,8,["content"]),(a(!0),n(v,null,m(s(l).riderRiskList,((t,e)=>(a(),I(r,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),u(r,{title:"保障金额",content:(s(l).initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),u(r,{title:"首期保费",class:"price",content:(t.totalPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-51eb63ba"]]);const et={key:0,class:"page-order-detail"},at={class:"card"},nt={class:"header"},ot={class:"product-name"},lt={class:"company-name"},st={class:"status"},rt={key:0,class:"footer-button"},dt={key:1,class:"footer-button"},it={key:2,class:"footer-button"};var ct=i(t({__name:"index",setup(t){const e=b(),r=k(),i=C(),c=g(),{query:{orderNo:f,agentCode:y,tenantId:O,abbreviation:F,productCategory:K}}=r,B=()=>{Y.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{c.value&&w(c.value.id,c.value.orderStatus).then((t=>{const{code:e,data:a}=t;"10000"===e&&G.success("删除成功")}))}))},W=g(!1),Q=()=>{var t,e,a,n,o;if(c.value){const{id:l,extInfo:{templateId:s,pageCode:r,extraInfo:d},agencyId:u,insurerCode:p,orderStatus:v}=c.value,m={insurerCode:p,productCode:null==(a=null==(e=null==(t=c.value.insuredList)?void 0:t[0])?void 0:e.productList[0])?void 0:a.productCode,tenantId:c.value.tenantId,agencyCode:c.value.agencyId,agentCode:c.value.saleUserId,saleChannelId:null==d?void 0:d.saleChannelId,extraMap:{...null==(o=null==(n=c.value)?void 0:n.extInfo)?void 0:o.extraInfo,orderNo:c.value.orderNo}};W.value=!0,E(m).then((t=>{if(console.log("投保链接==",t.data),"10000"===t.code)if([U.LONG,U.NIANJIN].includes(q(`${s}`))){const e=t.data.split("?")[1],a=M.parse(e);i.push({path:$[v],query:{...a,extraInfo:a.extraInfo,orderNo:f,templateId:s}})}else window.location.href=t.data}))}},V=()=>{if(c.value){const{extInfo:{templateId:t}}=c.value;[U.LONG,U.NIANJIN].includes(q(`${t}`))?Q():H(c.value).then((({code:t,data:e})=>{"10000"===t&&J(e)}))}};return N((()=>{_({orderNo:f,agentCode:y,tenantId:O}).then((t=>{const{code:e,data:a}=t;"10000"===e&&(c.value=a)}))})),(t,r)=>{const i=h,f=L,y=D("loading");return a(),I(f,{"theme-vars":s(e)},{default:p((()=>{var t,e,r,f,b,k,C,g,N,_,h,L;return[s(c)?(a(),n("div",et,[d("div",at,[u(z,null,{label:p((()=>{var t,e,a,n;return[d("div",nt,[d("div",ot,o(null==(a=null==(e=null==(t=s(c))?void 0:t.insuredList[0])?void 0:e.productList[0])?void 0:a.productName),1),d("div",lt,o(((null==(n=s(c))?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:p((()=>{var t;return[d("div",st,o(s(c)?s(S)[null==(t=s(c))?void 0:t.orderStatus]:""),1)]})),_:1}),u(z,{label:"投保单号",content:null==(t=s(c))?void 0:t.orderNo},null,8,["content"]),u(z,{label:"创建时间",content:s(x)(null==(e=s(c))?void 0:e.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),u(z,{label:"投保人",content:null==(f=null==(r=s(c))?void 0:r.holder)?void 0:f.name},null,8,["content"]),(a(!0),n(v,null,m((null==(b=s(c))?void 0:b.insuredList)||[],((t,e)=>(a(),I(z,{key:e,label:"被保人",content:t.name},null,8,["content"])))),128))]),u(tt,{"product-data":null==(N=null==(g=null==(C=null==(k=s(c))?void 0:k.insuredList)?void 0:C[0])?void 0:g.productList)?void 0:N[0],"total-premium":s(c).orderAmount,class:"insure-info"},null,8,["product-data","total-premium"]),j((a(),n("div",null,[(null==(_=s(c))?void 0:_.orderTopStatus)===s(T).PENDING?(a(),n("div",rt,[u(i,{type:"primary",onClick:A(B,["stop"])},{default:p((()=>[R("删除")])),_:1},8,["onClick"]),s(P).UNDERWRITING_FAILED!==s(c).orderStatus?(a(),I(i,{key:0,type:"primary",onClick:A(Q,["stop"])},{default:p((()=>[R("去处理")])),_:1},8,["onClick"])):l("",!0)])):l("",!0),(null==(h=s(c))?void 0:h.orderTopStatus)===s(T).PAYING?(a(),n("div",dt,[u(i,{type:"primary",onClick:A(B,["stop"])},{default:p((()=>[R("删除")])),_:1},8,["onClick"]),u(i,{type:"primary",onClick:A(V,["stop"])},{default:p((()=>[R("去支付")])),_:1},8,["onClick"])])):l("",!0),(null==(L=s(c))?void 0:L.orderTopStatus)===s(T).TIMEOUT?(a(),n("div",it,[u(i,{type:"primary",onClick:A(B,["stop"])},{default:p((()=>[R("删除")])),_:1},8,["onClick"])])):l("",!0)])),[[y,s(W)]])])):l("",!0)]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-a69a4838"]]);export{ct as default};
