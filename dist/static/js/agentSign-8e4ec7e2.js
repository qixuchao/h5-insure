import{d as e,a4 as a,a5 as i,i as s,h as t,bJ as n,j as r,ag as o,ah as d,aJ as l,o as c,c as u,b as g,a as f,u as p,w as m,a8 as h,aP as v,aI as b,cG as y,cH as S,aa as j,T as I,cI as _,bz as E,ab as N,cJ as L,aj as O}from"./index-1eabcd9c.js";import{b as T}from"./product-da9299d8.js";import{g as w,m as C}from"./trial-26c69a7d.js";import{_ as V}from"./SignPart-5447b01b.js";import{u as A}from"./useOrder-1db0be1f.js";import{N as D}from"./notice-33e6eedd.js";import"./PolicyInfo-153e9637.js";import{p as q}from"./utils-2bb3c2c9.js";import{g as G}from"./utils-2bd8f304.js";import"./index-ce0506ee.js";import"./cloneDeep-53d41e62.js";import"./infoCollection-e7bbb5cd.js";import"./trial-ecbd0c97.js";const P={class:"long-verify"},x={class:"header"},J={class:"verify-content"},R={class:"footer-button"},$=e({__name:"agentSign",setup(e){a((()=>i((()=>import("./index-d146426d.js")),["static/js/index-d146426d.js","static/css/index-bf024e9b.css","static/js/index-1eabcd9c.js","static/css/index-7af33e5c.css"]))),a((()=>i((()=>import("./index-689bfa70.js")),["static/js/index-689bfa70.js","static/css/index-fa4edf2a.css","static/js/index-1eabcd9c.js","static/css/index-7af33e5c.css","static/js/theme-94cf7d00.js","static/js/index-5d5be8f5.js","static/css/index-bbfdd7ec.css","static/js/utils-2bd8f304.js","static/js/infoCollection-e7bbb5cd.js","static/js/trial-ecbd0c97.js"])));const $=s(),k=t(),{productCode:z="",tenantId:M,agentCode:U="",agencyCode:B,saleChannelId:F,saleUserId:H,orderNo:K,orderCode:Q,extraInfo:W,isShare:X,insurerCode:Y,preview:Z}=$.query;let ee={};try{ee=JSON.parse(decodeURIComponent(W))}catch(le){}const ae=A(),ie=`${window.origin}/baseInsurance/long/phoneVerify?${n.stringify({...$.query,orderNo:Q||K})}`,se=r(),te=o.get(`${d}_userInfo`),ne=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{name:(null==te?void 0:te.name)||""},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]}}),re=r({sign:[],verify:[],scribing:""}),oe=()=>{if(Z)return void v(b.SIGN,$.query);const e=[];se.value&&re.value.sign.includes("1")&&e.push(se.value.validateSign()),Promise.all(e).then((e=>{y({bizObjectId:[],bizObjectType:S.AGENT,orderId:ae.value.id,tenantId:M}).then((({code:e,data:a})=>{"10000"===e&&a&&k.push({path:j.sign,query:$.query})}))})).catch((e=>{I(e.message)}))};r();const de=(e,a,i)=>{var s;_(e,a,null==(s=ae.value)?void 0:s.id,M,i).then((()=>{K&&w({orderNo:Q||K,tenantId:M}).then((({code:e,data:a})=>{if("10000"===e){Object.assign(ae.value,a);const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===D.AGENT&&30===a.category&&e.push(a.fileBase64)})),ne.value.agent.signData=e}}))}))};r({imgUrl:"",desc:"",title:"",link:ie});return l((()=>{(async()=>{let e={};const{code:a,data:i}=await w({orderNo:K,tenantId:M});"10000"===a&&(Object.assign(ae.value,i),e=q(i.insuredList[0].productList),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===D.AGENT&&30===e.category&&ne.value.agent.signData.push(e.fileBase64)}))),T(e).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===D.AGENT&&ne.value.agent.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:G(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),C(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=E(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&re.value.sign.push(a.code),"1"===a.code?ne.value.agent.isSign=!0:"2"===a.code?ne.value.holder.isSign=!0:"3"===a.code?ne.value.insured.isSign=!0:"4"===a.code?ne.value.holder.isShareSign=!0:"5"===a.code&&(ne.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&re.value.verify.push(a.code),"1"===a.code?ne.value.holder.isVerify=!0:"2"===a.code&&(ne.value.insured.isVerify=!0)}))}))}}))})()})),(e,a)=>{const i=N,s=L,t=O;return c(),u("div",P,[g(i),f("div",x,[g(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),f("div",J,[g(V,{ref_key:"agentSignRef",ref:se,"order-detail":p(ae),"sign-string":p(ne).agent.signData,"show-sign":p(ne).agent.isSign,"show-verify":p(ne).agent.isVerify,"file-list":p(ne).agent.fileList,"personal-info":p(ne).agent.personalInfo,disabled:!!p(X),title:"代理人",onHandleSign:a[0]||(a[0]=e=>de("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"])]),f("div",R,[g(t,{type:"primary",onClick:oe},{default:m((()=>[h("确定")])),_:1})])])}}});export{$ as default};
