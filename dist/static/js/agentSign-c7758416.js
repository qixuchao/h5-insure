import{d as e,ad as a,ae as i,i as s,h as t,bW as n,j as r,ao as o,ap as d,aH as l,l as c,o as u,c as g,b as f,a as p,u as m,w as h,v,aP as y,aG as S,cN as b,cO as j,ai as I,T as _,cP as w,bJ as E,aj as N,cQ as O,ar as L}from"./index-67e7dac2.js";import{b as T}from"./product-e57fe98b.js";import{g as C,m as V}from"./trial-68edb64e.js";import{_ as A}from"./SignPart-4fbfe240.js";import{u as D}from"./useOrder-638192ba.js";import{N as P}from"./notice-33e6eedd.js";import"./PolicyInfo-a5b4e160.js";import{p as q}from"./utils-dc6caff1.js";import{g as G}from"./utils-85238c86.js";import"./index-2e922e12.js";import"./cloneDeep-0992ab18.js";import"./infoCollection-4d83360f.js";import"./trial-b0463c9f.js";const x={class:"long-verify"},z={class:"header"},B={class:"verify-content"},R={class:"footer-button"},$=e({__name:"agentSign",setup(e){a((()=>i((()=>import("./index-80432e8c.js")),["static/js/index-80432e8c.js","static/css/index-bf024e9b.css","static/js/index-67e7dac2.js","static/css/index-78940258.css"]))),a((()=>i((()=>import("./index-cd470894.js")),["static/js/index-cd470894.js","static/css/index-fa4edf2a.css","static/js/index-67e7dac2.js","static/css/index-78940258.css","static/js/theme-94cf7d00.js","static/js/index-f2af212d.js","static/css/index-bbfdd7ec.css","static/js/utils-85238c86.js","static/js/infoCollection-4d83360f.js","static/js/trial-b0463c9f.js"])));const $=s(),k=t(),{productCode:M="",tenantId:U,agentCode:F="",agencyCode:H,saleChannelId:J,saleUserId:Q,orderNo:W,orderCode:K,extraInfo:X,isShare:Y,insurerCode:Z,preview:ee}=$.query;let ae={};try{ae=JSON.parse(decodeURIComponent(X))}catch(ue){}const ie=D(),se=`${window.origin}/baseInsurance/long/phoneVerify?${n.stringify({...$.query,orderNo:K||W})}`,te=r(),ne=o.get(`${d}_userInfo`),re=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{name:(null==ne?void 0:ne.name)||""},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]}}),oe=r({sign:[],verify:[],scribing:""}),de=()=>{if(ee)return void y(S.SIGN,$.query);const e=[];te.value&&oe.value.sign.includes("1")&&e.push(te.value.validateSign()),Promise.all(e).then((e=>{b({bizObjectId:[],bizObjectType:j.AGENT,orderId:ie.value.id,tenantId:U}).then((({code:e,data:a})=>{"10000"===e&&a&&k.push({path:I.sign,query:$.query})}))})).catch((e=>{_(e.message)}))};r();const le=(e,a,i)=>{var s;w(e,a,null==(s=ie.value)?void 0:s.id,U,i).then((()=>{W&&C({orderNo:K||W,tenantId:U}).then((({code:e,data:a})=>{if("10000"===e){Object.assign(ie.value,a);const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===P.AGENT&&30===a.category&&e.push(a.fileBase64)})),re.value.agent.signData=e}}))}))};r({imgUrl:"",desc:"",title:"",link:se});l((()=>{(async()=>{let e={};const{code:a,data:i}=await C({orderNo:W,tenantId:U});"10000"===a&&(Object.assign(ie.value,i),e=q(i.insuredList[0].productList),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===P.AGENT&&30===e.category&&re.value.agent.signData.push(e.fileBase64)}))),T(e).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===P.AGENT&&re.value.agent.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:G(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),V(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=E(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&oe.value.sign.push(a.code),"1"===a.code?re.value.agent.isSign=!0:"2"===a.code?re.value.holder.isSign=!0:"3"===a.code?re.value.insured.isSign=!0:"4"===a.code?re.value.holder.isShareSign=!0:"5"===a.code&&(re.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&oe.value.verify.push(a.code),"1"===a.code?re.value.holder.isVerify=!0:"2"===a.code&&(re.value.insured.isVerify=!0)}))}))}}))})()}));const ce=r();return c((()=>{setTimeout((async()=>{ce.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const i=N,s=O,t=L;return u(),g("div",x,[f(i),p("div",z,[f(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),p("div",B,[f(A,{ref_key:"agentSignRef",ref:te,"order-detail":m(ie),"sign-string":m(re).agent.signData,"show-sign":m(re).agent.isSign,"show-verify":m(re).agent.isVerify,"file-list":m(re).agent.fileList,"personal-info":m(re).agent.personalInfo,disabled:!!m(Y),title:"代理人",onHandleSign:a[0]||(a[0]=e=>le("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"])]),p("div",R,[f(t,{type:"primary",onClick:de},{default:h((()=>[v("确定")])),_:1})])])}}});export{$ as default};
