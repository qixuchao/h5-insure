import{G as t,d as e,a$ as a,c as n,A as o,E as l,h as r,g as s,k as d,f as i,L as c,i as u,w as p,U as v,V as f,e as m,W as y,bl as C,u as I,a as b,r as g,a1 as k,m as h,B as N,b as _,ae as L,cr as S,y as D,ag as Y,cI as P,j,by as T,D as x,T as A,Q as G,cK as $,cJ as w}from"./index-7d43a0c3.js";import{d as E}from"./order-e3bcb49b.js";import{d as R}from"./trial-e17c2ed1.js";import{f as q,g as M}from"./infoCollection-f467342b.js";import{R as W,d as B}from"./trial-b6d9463b.js";import"./pdfh5-008ca364.js";const O={class:"com-field-info"},H={key:0,class:"label"},J={class:"content"};var K=t(e({__name:"fieldInfo",props:{label:{type:String,default:""},content:{type:String,default:""}},setup(t){const e=a();return(a,c)=>(n(),o("div",O,[t.label?(n(),o("div",H,l(t.label),1)):r("",!0),s(e).label?d(a.$slots,"label",{key:1},void 0,!0):r("",!0),i("div",J,l(t.content),1),s(e).content?d(a.$slots,"content",{key:2},void 0,!0):r("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const U={class:"com-insured-part-wrapper"},X={class:"content-wrapper"},Z={class:"product-name"},F={class:"risk-item"};var Q=t(e({__name:"InsuredPart",props:{productData:{default:()=>({})}},setup(t){const e=t,a=c((()=>{var t,a;const n={riderRiskList:[],amount:0},o=null==(t=e.productData)?void 0:t.riskList.find((t=>t.riskType===W.MAIN_RISK));return Object.assign(n,o),null==(a=e.productData)||a.riskList.forEach((t=>{n.riderRiskList.push(t.riskName||"")})),n}));return(e,r)=>{const d=y,c=C;return n(),o("div",U,[u(c,{title:"保障信息"},{default:p((()=>[i("div",X,[i("div",Z,l(t.productData.productName),1),i("div",F,[u(d,{title:"保障期间",content:s(a).coveragePeriodDesc},null,8,["content"]),u(d,{title:"交费期间",content:s(a).chargePeriodDesc},null,8,["content"]),u(d,{title:"交费方式",content:s(B)[s(a).paymentFrequency]},null,8,["content"]),(n(!0),o(v,null,f(s(a).riderRiskList,((t,e)=>(n(),m(d,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),u(d,{title:"保障金额",content:(s(a).initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),u(d,{title:"首期保费",class:"price",content:(s(a).initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-8406916a"]]);const V={key:0,class:"page-order-detail"},z={class:"card"},tt={class:"header"},et={class:"product-name"},at={class:"company-name"},nt={class:"status"},ot={key:0,class:"footer-button"},lt={key:1,class:"footer-button"},rt={key:2,class:"footer-button"};var st=t(e({__name:"index",setup(t){const e=I(),a=b(),d=g(),{query:{orderNo:c,agentCode:y,tenantId:C,abbreviation:W,productCategory:B}}=e,O=()=>{x.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{d.value&&E(d.value.id,d.value.orderStatus).then((t=>{const{code:e,data:a}=t;"10000"===e&&A.success("删除成功")}))}))},H=g(!1),J=()=>{var t,e,n;if(d.value){if((()=>{var t,e,n;if(!d.value)return!1;const{agencyId:o,saleChannelId:l,orderTopStatus:r}=d.value,s=null==(n=null==(e=null==(t=d.value.insuredList)?void 0:t[0])?void 0:e.productList[0])?void 0:n.productCode;if(!(P.PENDING!==r&&P.PAYING!==r||s!==w.ZXYS&&s!==w.BWYL)){const t={[w.ZXYS]:"/internet/productDetail/package",[w.BWYL]:"/internet/productDetail"};return a.push({path:t[s],query:{productCode:s,saleChannelId:l,agentCode:y,tenantId:C,agencyCode:o,orderNo:c}}),!0}return!1})())return;const{id:o,extInfo:{templateId:l,pageCode:r,extraInfo:s},agencyId:i,venderCode:u,orderStatus:p}=d.value,v={insurerCode:u,productCode:null==(n=null==(e=null==(t=d.value.insuredList)?void 0:t[0])?void 0:e.productList[0])?void 0:n.productCode,tenantId:d.value.tenantId,agencyCode:d.value.agencyId,agentCode:d.value.agentCode,saleChannelId:null==s?void 0:s.saleChannelId};H.value=!0,R(v).then((t=>{if(console.log("投保链接==",t.data),"10000"===t.code)if([q.LONG,q.NIANJIN].includes(M(`${l}`))){const e=t.data.split("?")[1],n=G.parse(e);a.push({path:$[p],query:{...n,extraInfo:n.extraInfo,orderNo:c}})}else window.location.href=`${t.data}&orderNo=${c}`}))}};return k((()=>{h({orderNo:c,agentCode:y,tenantId:C}).then((t=>{const{code:e,data:a}=t;"10000"===e&&(d.value=a)}))})),(t,e)=>{const a=N,c=_("ProPageWrap"),y=L("loading");return n(),m(c,null,{default:p((()=>{var t,e,c,C,I,b,g,k,h,N,_,L;return[s(d)?(n(),o("div",V,[i("div",z,[u(K,null,{label:p((()=>{var t,e,a,n;return[i("div",tt,[i("div",et,l(null==(a=null==(e=null==(t=s(d))?void 0:t.insuredList[0])?void 0:e.productList[0])?void 0:a.productName),1),i("div",at,l(((null==(n=s(d))?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:p((()=>{var t;return[i("div",nt,l(s(d)?s(S)[null==(t=s(d))?void 0:t.orderStatus]:""),1)]})),_:1}),u(K,{label:"投保单号",content:null==(t=s(d))?void 0:t.orderNo},null,8,["content"]),u(K,{label:"创建时间",content:s(D)(null==(e=s(d))?void 0:e.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),u(K,{label:"投保人",content:null==(C=null==(c=s(d))?void 0:c.holder)?void 0:C.name},null,8,["content"]),(n(!0),o(v,null,f((null==(I=s(d))?void 0:I.insuredList)||[],((t,e)=>(n(),m(K,{key:e,label:"被保人",content:t.name},null,8,["content"])))),128))]),u(Q,{"product-data":null==(h=null==(k=null==(g=null==(b=s(d))?void 0:b.insuredList)?void 0:g[0])?void 0:k.productList)?void 0:h[0],class:"insure-info"},null,8,["product-data"]),Y((n(),o("div",null,[(null==(N=s(d))?void 0:N.orderTopStatus)===s(P).PENDING?(n(),o("div",ot,[u(a,{type:"primary",onClick:T(O,["stop"])},{default:p((()=>[j("删除")])),_:1},8,["onClick"]),u(a,{type:"primary",onClick:T(J,["stop"])},{default:p((()=>[j("去处理")])),_:1},8,["onClick"])])):r("",!0),(null==(_=s(d))?void 0:_.orderTopStatus)===s(P).PAYING?(n(),o("div",lt,[u(a,{type:"primary",onClick:T(O,["stop"])},{default:p((()=>[j("删除")])),_:1},8,["onClick"]),u(a,{type:"primary",onClick:T(J,["stop"])},{default:p((()=>[j("去支付")])),_:1},8,["onClick"])])):r("",!0),(null==(L=s(d))?void 0:L.orderTopStatus)===s(P).TIMEOUT?(n(),o("div",rt,[u(a,{type:"primary",onClick:T(O,["stop"])},{default:p((()=>[j("删除")])),_:1},8,["onClick"])])):r("",!0)])),[[y,s(H)]])])):r("",!0)]})),_:1})}}}),[["__scopeId","data-v-342d9b1f"]]);export{st as default};
