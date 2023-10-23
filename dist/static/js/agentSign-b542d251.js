import{d as e,a4 as a,a5 as i,i as s,h as t,bF as n,j as r,aE as o,o as d,c as l,b as c,a as u,u as f,w as g,a8 as m,aJ as p,cv as h,T as v,bu as y,aa as S,cw as b,ag as j}from"./index-26f63535.js";import{b as I}from"./product-f34d3292.js";import{g as E,m as _}from"./trial-5d8293a4.js";import{_ as N}from"./SignPart-29fcd1b7.js";import{u as L}from"./useOrder-a95ed2dc.js";import{N as O}from"./notice-33e6eedd.js";import{s as w,b as T}from"./verify-42a2c909.js";import"./PolicyInfo-21816b07.js";import{a as C,P as V}from"./constants-4b08cf92.js";import{p as A}from"./utils-120279df.js";import{g as D}from"./utils-ff01eafd.js";import"./index-930b6b06.js";import"./infoCollection-4876e6a1.js";import"./trial-501c6119.js";const q={class:"long-verify"},P={class:"header"},x={class:"verify-content"},G={class:"footer-button"},R=e({__name:"agentSign",setup(e){a((()=>i((()=>import("./index-9ad6459c.js")),["static/js/index-9ad6459c.js","static/css/index-bf024e9b.css","static/js/index-26f63535.js","static/css/index-10f6931b.css"]))),a((()=>i((()=>import("./index-6b39e44c.js")),["static/js/index-6b39e44c.js","static/css/index-fa4edf2a.css","static/js/index-26f63535.js","static/css/index-10f6931b.css","static/js/theme-94cf7d00.js","static/js/index-9d67cd5d.js","static/css/index-bbfdd7ec.css","static/js/utils-ff01eafd.js","static/js/infoCollection-4876e6a1.js","static/js/trial-501c6119.js"])));const R=s(),k=t(),{productCode:F="",tenantId:M,agentCode:U="",agencyCode:$,saleChannelId:z,saleUserId:B,orderNo:J,orderCode:H,extraInfo:K,isShare:Q,insurerCode:W,preview:X}=R.query;let Y={};try{Y=JSON.parse(decodeURIComponent(K))}catch(re){}const Z=L(),ee=`${window.origin}/baseInsurance/long/phoneVerify?${n.stringify({...R.query,orderNo:H||J})}`,ae=r(),ie=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]}}),se=r({sign:[],verify:[],scribing:""}),te=()=>{if(X)return void p(C.SIGN,R.query);const e=[];ae.value&&se.value.sign.includes("1")&&e.push(ae.value.validateSign()),Promise.all(e).then((e=>{w({bizObjectId:[],bizObjectType:h.AGENT,orderId:Z.value.id,tenantId:M}).then((({code:e,data:a})=>{"10000"===e&&a&&k.push({path:V.sign,query:R.query})}))})).catch((e=>{v(e.message)}))};r();const ne=(e,a,i)=>{var s;T(e,a,null==(s=Z.value)?void 0:s.id,M,i).then((()=>{J&&E({orderNo:H||J,tenantId:M}).then((({code:e,data:a})=>{if("10000"===e){Object.assign(Z.value,a);const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===O.AGENT&&30===a.category&&e.push(a.fileBase64)})),ie.value.agent.signData=e}}))}))};r({imgUrl:"",desc:"",title:"",link:ee});return o((()=>{(async()=>{let e={};const{code:a,data:i}=await E({orderNo:J,tenantId:M});"10000"===a&&(Object.assign(Z.value,i),e=A(i.insuredList[0].productList),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===O.AGENT&&30===e.category&&ie.value.agent.signData.push(e.fileBase64)}))),I(e).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===O.AGENT&&ie.value.agent.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:D(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),_(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=y(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&se.value.sign.push(a.code),"1"===a.code?ie.value.agent.isSign=!0:"2"===a.code?ie.value.holder.isSign=!0:"3"===a.code?ie.value.insured.isSign=!0:"4"===a.code?ie.value.holder.isShareSign=!0:"5"===a.code&&(ie.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&se.value.verify.push(a.code),"1"===a.code?ie.value.holder.isVerify=!0:"2"===a.code&&(ie.value.insured.isVerify=!0)}))}))}}))})()})),(e,a)=>{const i=S,s=b,t=j;return d(),l("div",q,[c(i),u("div",P,[c(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),u("div",x,[c(N,{ref_key:"agentSignRef",ref:ae,"order-detail":f(Z),"sign-string":f(ie).agent.signData,"show-sign":f(ie).agent.isSign,"show-verify":f(ie).agent.isVerify,"file-list":f(ie).agent.fileList,"personal-info":f(ie).agent.personalInfo,disabled:!!f(Q),title:"代理人",onHandleSign:a[0]||(a[0]=e=>ne("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"])]),u("div",G,[c(t,{type:"primary",onClick:te},{default:g((()=>[m("确定")])),_:1})])])}}});export{R as default};
