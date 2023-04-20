import{E as e,d as t,aX as a,c as n,y as r,z as o,h as d,g as l,k as s,f as i,K as u,i as c,w as p,R as v,U as f,e as m,V as I,bh as y,u as C,a as g,r as k,a0 as b,m as N,B as h,b as _,ac as L,co as O,v as P,af as S,cE as D,j as Y,bu as T,D as $,T as j,O as x,cG as R,cF as E}from"./index-f6fa5ecc.js";import{d as G}from"./order-f5ee94de.js";import{f as w}from"./trial-d6f8cdcc.js";import{g as q,h as A}from"./infoCollection-3913f4d9.js";import{R as M,I as U,P as B,b as H}from"./trial-dfc2b426.js";import{p as W}from"./pageJump-1ad97747.js";import"./pdfh5-008ca364.js";const X={class:"com-field-info"},F={key:0,class:"label"},J={class:"content"};var K=e(t({__name:"fieldInfo",props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,u)=>(n(),r("div",X,[e.label?(n(),r("div",F,o(e.label),1)):d("",!0),l(t).label?s(a.$slots,"label",{key:1},void 0,!0):d("",!0),i("div",J,o(e.content),1),l(t).content?s(a.$slots,"content",{key:2},void 0,!0):d("",!0)]))}}),[["__scopeId","data-v-d673262c"]]);const V={class:"com-insured-part-wrapper"},Z={class:"content-wrapper"},z={class:"product-name"},Q={class:"risk-item"};var ee=e(t({__name:"InsuredPart",props:{productData:{default:()=>({})}},setup(e){const t=e,a=u((()=>{var e,a;const n={riderRiskList:[],amount:0},r=null==(e=t.productData)?void 0:e.tenantOrderRiskList.find((e=>e.riskType===M.MAIN_RISK));return Object.assign(n,r),null==(a=t.productData)||a.tenantOrderRiskList.forEach((e=>{n.riderRiskList.push(e.riskName||"")})),n})),d=(e,t)=>-1!==t.indexOf("$")?t.replace("$",`${e}`):`${e||""}${t}`;return(t,s)=>{const u=I,C=y;return n(),r("div",V,[c(C,{title:"保障信息"},{default:p((()=>[i("div",Z,[i("div",z,o(e.productData.productName),1),i("div",Q,[c(u,{title:"保障期间",content:d(l(a).insurancePeriodValue,l(U)[l(a).insurancePeriodType])},null,8,["content"]),c(u,{title:"交费期间",content:d(l(a).paymentPeriod,l(B)[l(a).paymentPeriodType])},null,8,["content"]),c(u,{title:"交费方式",content:l(H)[l(a).paymentFrequency]},null,8,["content"]),(n(!0),r(v,null,f(l(a).riderRiskList,((e,t)=>(n(),m(u,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),c(u,{title:"首期保费",class:"price",content:e.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-620b42ef"]]);const te={key:0,class:"page-order-detail"},ae={class:"card"},ne={class:"header"},re={class:"product-name"},oe={class:"company-name"},de={class:"status"},le={key:0,class:"footer-button"},se={key:1,class:"footer-button"},ie={key:2,class:"footer-button"};var ue=e(t({__name:"index",setup(e){const t=C(),a=g(),s=k(),{query:{orderNo:u,agentCode:I,tenantId:y,abbreviation:M,productCategory:U}}=t,B=()=>{$.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{s.value&&G(s.value.id,s.value.orderStatus).then((e=>{const{code:t,data:a}=e;"10000"===t&&j.success("删除成功")}))}))},H=()=>{var e,t;if(!s.value)return!1;const{agencyId:n,saleChannelId:r,orderTopStatus:o}=s.value,d=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;if(!(D.PENDING!==o&&D.PAYING!==o||d!==E.ZXYS&&d!==E.BWYL)){const e={[E.ZXYS]:"/internet/productDetail/package",[E.BWYL]:"/internet/productDetail"};return a.push({path:e[d],query:{productCode:d,saleChannelId:r,agentCode:I,tenantId:y,agencyCode:n,orderNo:u}}),!0}return!1},X=k(!1),F=()=>{var e,t;if(s.value){if(H())return;const{id:n,extInfo:{templateId:r,pageCode:o,extraInfo:d},agencyId:l,venderCode:i,orderStatus:c}=s.value,p={insurerCode:i,productCode:null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode,tenantId:s.value.tenantId,agencyCode:s.value.agencyId,agentCode:s.value.agentCode,saleChannelId:null==d?void 0:d.saleChannelId};X.value=!0,w(p).then((e=>{if(console.log("投保链接==",e.data),"10000"===e.code)if([q.LONG,q.NIANJIN].includes(A(`${r}`))){const t=e.data.split("?")[1],n=x.parse(t);a.push({path:R[c],query:{...n,extraInfo:n.extraInfo,orderNo:u}})}else window.location.href=`${e.data}&orderNo=${u}`}))}},J=()=>{var e,t;if(s.value){if(H())return;const{id:a,saleUserId:n,extInfo:{templateId:r},agencyId:o,venderCode:d}=s.value,l=null==(t=null==(e=s.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0])?void 0:t.productCode;W("payInfo",{productCode:l,orderNo:u,orderId:a,saleUserId:n,templateId:r,tenantId:y,productCategory:U,insurerCode:d,agencyCode:o})}};return b((()=>{N({orderNo:u,agentCode:I,tenantId:y}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(s.value=a)}))})),(e,t)=>{const a=h,u=_("ProPageWrap"),I=L("loading");return n(),m(u,null,{default:p((()=>{var e,t,u,y,C,g,k,b,N,h,_;return[l(s)?(n(),r("div",te,[i("div",ae,[c(K,null,{label:p((()=>{var e,t,a,n;return[i("div",ne,[i("div",re,o(null==(a=null==(t=null==(e=l(s))?void 0:e.tenantOrderInsuredList[0])?void 0:t.tenantOrderProductList[0])?void 0:a.productName),1),i("div",oe,o(((null==(n=l(s))?void 0:n.abbreviation)||"").substring(0,6)),1)])]})),content:p((()=>{var e;return[i("div",de,o(l(s)?l(O)[null==(e=l(s))?void 0:e.orderStatus]:""),1)]})),_:1}),c(K,{label:"投保单号",content:null==(e=l(s))?void 0:e.orderNo},null,8,["content"]),c(K,{label:"创建时间",content:l(P)(null==(t=l(s))?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),c(K,{label:"投保人",content:null==(y=null==(u=l(s))?void 0:u.tenantOrderHolder)?void 0:y.name},null,8,["content"]),(n(!0),r(v,null,f((null==(C=l(s))?void 0:C.tenantOrderInsuredList)||[],((e,t)=>(n(),m(K,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),c(ee,{"product-data":null==(b=null==(k=null==(g=l(s))?void 0:g.tenantOrderInsuredList[0])?void 0:k.tenantOrderProductList)?void 0:b[0],class:"insure-info"},null,8,["product-data"]),S((n(),r("div",null,[(null==(N=l(s))?void 0:N.orderTopStatus)===l(D).PENDING?(n(),r("div",le,[c(a,{type:"primary",onClick:T(B,["stop"])},{default:p((()=>[Y("删除")])),_:1},8,["onClick"]),c(a,{type:"primary",onClick:T(F,["stop"])},{default:p((()=>[Y("去处理")])),_:1},8,["onClick"])])):d("",!0),(null==(h=l(s))?void 0:h.orderTopStatus)===l(D).PAYING?(n(),r("div",se,[c(a,{type:"primary",onClick:T(B,["stop"])},{default:p((()=>[Y("删除")])),_:1},8,["onClick"]),c(a,{type:"primary",onClick:T(J,["stop"])},{default:p((()=>[Y("去支付")])),_:1},8,["onClick"])])):d("",!0),(null==(_=l(s))?void 0:_.orderTopStatus)===l(D).TIMEOUT?(n(),r("div",ie,[c(a,{type:"primary",onClick:T(B,["stop"])},{default:p((()=>[Y("删除")])),_:1},8,["onClick"])])):d("",!0)])),[[I,l(X)]])])):d("",!0)]})),_:1})}}}),[["__scopeId","data-v-a45cf5cc"]]);export{ue as default};
