import{G as e,d as t,b0 as a,c as n,A as o,E as l,h as r,g as s,k as d,f as i,L as c,i as u,w as p,U as v,V as m,e as f,W as y,bo as C,u as I,a as g,r as k,a1 as b,m as h,B as N,b as _,ae as L,cq as S,y as D,ag as Y,cH as P,j,bB as T,D as x,T as A,Q as G,cJ as q,cI as w}from"./index-de4790d4.js";import{d as E}from"./order-11685085.js";import{d as R}from"./trial-4fc0cb09.js";import{e as $,g as B}from"./infoCollection-1e34e0dc.js";import{R as M,d as W}from"./trial-aa6d98c3.js";import"./pdfh5-008ca364.js";const H={class:"com-field-info"},O={key:0,class:"label"},J={class:"content"};var U=e(t({__name:"fieldInfo",props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,c)=>(n(),o("div",H,[e.label?(n(),o("div",O,l(e.label),1)):r("",!0),s(t).label?d(a.$slots,"label",{key:1},void 0,!0):r("",!0),i("div",J,l(e.content),1),s(t).content?d(a.$slots,"content",{key:2},void 0,!0):r("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const X={class:"com-insured-part-wrapper"},Z={class:"content-wrapper"},F={class:"product-name"},K={class:"risk-item"};var Q=e(t({__name:"InsuredPart",props:{productData:{default:()=>({})}},setup(e){const t=e,a=c((()=>{var e,a;const n={riderRiskList:[],amount:0},o=null==(e=t.productData)?void 0:e.riskList.find((e=>e.riskType===M.MAIN_RISK));return Object.assign(n,o),null==(a=t.productData)||a.riskList.forEach((e=>{n.riderRiskList.push(e.riskName||"")})),n}));return(t,r)=>{const d=y,c=C;return n(),o("div",X,[u(c,{title:"保障信息"},{default:p((()=>[i("div",Z,[i("div",F,l(e.productData.productName),1),i("div",K,[u(d,{title:"保障期间",content:s(a).coveragePeriodDesc},null,8,["content"]),u(d,{title:"交费期间",content:s(a).chargePeriodDesc},null,8,["content"]),u(d,{title:"交费方式",content:s(W)[s(a).paymentFrequency]},null,8,["content"]),(n(!0),o(v,null,m(s(a).riderRiskList,((e,t)=>(n(),f(d,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),u(d,{title:"保障金额",content:(s(a).initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),u(d,{title:"首期保费",class:"price",content:(s(a).initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-8406916a"]]);const V={key:0,class:"page-order-detail"},z={class:"card"},ee={class:"header"},te={class:"product-name"},ae={class:"company-name"},ne={class:"status"},oe={key:0,class:"footer-button"},le={key:1,class:"footer-button"},re={key:2,class:"footer-button"};var se=e(t({__name:"index",setup(e){const t=I(),a=g(),d=k(),{query:{orderNo:c,agentCode:y,tenantId:C,abbreviation:M,productCategory:W}}=t,H=()=>{x.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{d.value&&E(d.value.id,d.value.orderStatus).then((e=>{const{code:t,data:a}=e;"10000"===t&&A.success("删除成功")}))}))},O=k(!1),J=()=>{var e,t,n;if(d.value){if((()=>{var e,t,n;if(!d.value)return!1;const{agencyId:o,saleChannelId:l,orderTopStatus:r}=d.value,s=null==(n=null==(t=null==(e=d.value.insuredList)?void 0:e[0])?void 0:t.productList[0])?void 0:n.productCode;if(!(P.PENDING!==r&&P.PAYING!==r||s!==w.ZXYS&&s!==w.BWYL)){const e={[w.ZXYS]:"/internet/productDetail/package",[w.BWYL]:"/internet/productDetail"};return a.push({path:e[s],query:{productCode:s,saleChannelId:l,agentCode:y,tenantId:C,agencyCode:o,orderNo:c}}),!0}return!1})())return;const{id:o,extInfo:{templateId:l,pageCode:r,extraInfo:s},agencyId:i,venderCode:u,orderStatus:p}=d.value,v={insurerCode:u,productCode:null==(n=null==(t=null==(e=d.value.insuredList)?void 0:e[0])?void 0:t.productList[0])?void 0:n.productCode,tenantId:d.value.tenantId,agencyCode:d.value.agencyId,agentCode:d.value.agentCode,saleChannelId:null==s?void 0:s.saleChannelId};O.value=!0,R(v).then((e=>{if(console.log("投保链接==",e.data),"10000"===e.code)if([$.LONG,$.NIANJIN].includes(B(`${l}`))){const t=e.data.split("?")[1],n=G.parse(t);console.log("234242",q[p]),a.push({path:q[p],query:{...n,extraInfo:n.extraInfo,orderNo:c}})}else window.location.href=`${e.data}&orderNo=${c}`}))}};return b((()=>{h({orderNo:c,agentCode:y,tenantId:C}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(d.value=a)}))})),(e,t)=>{const a=N,c=_("ProPageWrap"),y=L("loading");return n(),f(c,null,{default:p((()=>{var e,t,c,C,I,g,k,b,h,N,_,L;return[s(d)?(n(),o("div",V,[i("div",z,[u(U,null,{label:p((()=>{var e,t,a,n;return[i("div",ee,[i("div",te,l(null==(a=null==(t=null==(e=s(d))?void 0:e.insuredList[0])?void 0:t.productList[0])?void 0:a.productName),1),i("div",ae,l(((null==(n=s(d))?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:p((()=>{var e;return[i("div",ne,l(s(d)?s(S)[null==(e=s(d))?void 0:e.orderStatus]:""),1)]})),_:1}),u(U,{label:"投保单号",content:null==(e=s(d))?void 0:e.orderNo},null,8,["content"]),u(U,{label:"创建时间",content:s(D)(null==(t=s(d))?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),u(U,{label:"投保人",content:null==(C=null==(c=s(d))?void 0:c.holder)?void 0:C.name},null,8,["content"]),(n(!0),o(v,null,m((null==(I=s(d))?void 0:I.insuredList)||[],((e,t)=>(n(),f(U,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),u(Q,{"product-data":null==(h=null==(b=null==(k=null==(g=s(d))?void 0:g.insuredList)?void 0:k[0])?void 0:b.productList)?void 0:h[0],class:"insure-info"},null,8,["product-data"]),Y((n(),o("div",null,[(null==(N=s(d))?void 0:N.orderTopStatus)===s(P).PENDING?(n(),o("div",oe,[u(a,{type:"primary",onClick:T(H,["stop"])},{default:p((()=>[j("删除")])),_:1},8,["onClick"]),u(a,{type:"primary",onClick:T(J,["stop"])},{default:p((()=>[j("去处理")])),_:1},8,["onClick"])])):r("",!0),(null==(_=s(d))?void 0:_.orderTopStatus)===s(P).PAYING?(n(),o("div",le,[u(a,{type:"primary",onClick:T(H,["stop"])},{default:p((()=>[j("删除")])),_:1},8,["onClick"]),u(a,{type:"primary",onClick:T(J,["stop"])},{default:p((()=>[j("去支付")])),_:1},8,["onClick"])])):r("",!0),(null==(L=s(d))?void 0:L.orderTopStatus)===s(P).TIMEOUT?(n(),o("div",re,[u(a,{type:"primary",onClick:T(H,["stop"])},{default:p((()=>[j("删除")])),_:1},8,["onClick"])])):r("",!0)])),[[y,s(O)]])])):r("",!0)]})),_:1})}}}),[["__scopeId","data-v-3c8972b7"]]);export{se as default};
