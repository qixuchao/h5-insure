import{d as e,a4 as a,a5 as i,i as s,h as t,bF as n,j as r,aG as o,o as d,c as l,b as c,a as u,u as f,w as g,a8 as p,aM as m,cB as h,cC as v,T as y,cD as S,bw as b,aa as j,cE as I,ai as E}from"./index-4705aaa0.js";import{b as _}from"./product-0f57a379.js";import{g as N,m as L}from"./trial-1e93a22e.js";import{_ as O}from"./SignPart-06d523bf.js";import{u as w}from"./useOrder-8955cec1.js";import{N as C}from"./notice-33e6eedd.js";import"./PolicyInfo-1f3ea1ab.js";import{a as T,P as V}from"./constants-4b08cf92.js";import{p as A}from"./utils-7aa848fd.js";import{g as D}from"./utils-5fb2762f.js";import"./index-ef6d0499.js";import"./infoCollection-602de8d1.js";import"./trial-e598285a.js";const q={class:"long-verify"},G={class:"header"},P={class:"verify-content"},x={class:"footer-button"},M=e({__name:"agentSign",setup(e){a((()=>i((()=>import("./index-2a287bfd.js")),["static/js/index-2a287bfd.js","static/css/index-bf024e9b.css","static/js/index-4705aaa0.js","static/css/index-d5fdc031.css"]))),a((()=>i((()=>import("./index-8e0eab52.js")),["static/js/index-8e0eab52.js","static/css/index-fa4edf2a.css","static/js/index-4705aaa0.js","static/css/index-d5fdc031.css","static/js/theme-94cf7d00.js","static/js/index-e7ae0bb3.js","static/css/index-bbfdd7ec.css","static/js/utils-5fb2762f.js","static/js/infoCollection-602de8d1.js","static/js/trial-e598285a.js"])));const M=s(),R=t(),{productCode:k="",tenantId:B,agentCode:F="",agencyCode:U,saleChannelId:$,saleUserId:z,orderNo:H,orderCode:J,extraInfo:K,isShare:Q,insurerCode:W,preview:X}=M.query;let Y={};try{Y=JSON.parse(decodeURIComponent(K))}catch(re){}const Z=w(),ee=`${window.origin}/baseInsurance/long/phoneVerify?${n.stringify({...M.query,orderNo:J||H})}`,ae=r(),ie=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]}}),se=r({sign:[],verify:[],scribing:""}),te=()=>{if(X)return void m(T.SIGN,M.query);const e=[];ae.value&&se.value.sign.includes("1")&&e.push(ae.value.validateSign()),Promise.all(e).then((e=>{h({bizObjectId:[],bizObjectType:v.AGENT,orderId:Z.value.id,tenantId:B}).then((({code:e,data:a})=>{"10000"===e&&a&&R.push({path:V.sign,query:M.query})}))})).catch((e=>{y(e.message)}))};r();const ne=(e,a,i)=>{var s;S(e,a,null==(s=Z.value)?void 0:s.id,B,i).then((()=>{H&&N({orderNo:J||H,tenantId:B}).then((({code:e,data:a})=>{if("10000"===e){Object.assign(Z.value,a);const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===C.AGENT&&30===a.category&&e.push(a.fileBase64)})),ie.value.agent.signData=e}}))}))};r({imgUrl:"",desc:"",title:"",link:ee});return o((()=>{(async()=>{let e={};const{code:a,data:i}=await N({orderNo:H,tenantId:B});"10000"===a&&(Object.assign(Z.value,i),e=A(i.insuredList[0].productList),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===C.AGENT&&30===e.category&&ie.value.agent.signData.push(e.fileBase64)}))),_(e).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===C.AGENT&&ie.value.agent.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:D(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),L(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=b(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&se.value.sign.push(a.code),"1"===a.code?ie.value.agent.isSign=!0:"2"===a.code?ie.value.holder.isSign=!0:"3"===a.code?ie.value.insured.isSign=!0:"4"===a.code?ie.value.holder.isShareSign=!0:"5"===a.code&&(ie.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&se.value.verify.push(a.code),"1"===a.code?ie.value.holder.isVerify=!0:"2"===a.code&&(ie.value.insured.isVerify=!0)}))}))}}))})()})),(e,a)=>{const i=j,s=I,t=E;return d(),l("div",q,[c(i),u("div",G,[c(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),u("div",P,[c(O,{ref_key:"agentSignRef",ref:ae,"order-detail":f(Z),"sign-string":f(ie).agent.signData,"show-sign":f(ie).agent.isSign,"show-verify":f(ie).agent.isVerify,"file-list":f(ie).agent.fileList,"personal-info":f(ie).agent.personalInfo,disabled:!!f(Q),title:"代理人",onHandleSign:a[0]||(a[0]=e=>ne("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"])]),u("div",x,[c(t,{type:"primary",onClick:te},{default:g((()=>[p("确定")])),_:1})])])}}});export{M as default};
