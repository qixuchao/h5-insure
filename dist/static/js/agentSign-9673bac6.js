import{d as e,a4 as a,a5 as i,i as s,h as t,bC as n,j as r,af as o,ag as d,aG as l,o as c,c as u,b as f,a as g,u as m,w as p,a8 as h,aM as v,cC as y,cD as S,T as b,cE as j,bw as I,aa as E,cF as _,ai as N}from"./index-6027c89f.js";import{b as L}from"./product-97435431.js";import{g as O,m as C}from"./trial-7231c90e.js";import{_ as w}from"./SignPart-ea9fe9e8.js";import{u as T}from"./useOrder-61df55c3.js";import{N as V}from"./notice-33e6eedd.js";import"./PolicyInfo-5b6c3072.js";import{a as A,P as D}from"./constants-4b08cf92.js";import{p as q}from"./utils-6ca648e1.js";import{g as G}from"./utils-dad0fa14.js";import"./index-841879df.js";import"./infoCollection-c7c3a2b1.js";import"./trial-7ba34a46.js";const P={class:"long-verify"},x={class:"header"},M={class:"verify-content"},R={class:"footer-button"},$=e({__name:"agentSign",setup(e){a((()=>i((()=>import("./index-23c5a6ed.js")),["static/js/index-23c5a6ed.js","static/css/index-bf024e9b.css","static/js/index-6027c89f.js","static/css/index-f1c5cfcb.css"]))),a((()=>i((()=>import("./index-d4b61b23.js")),["static/js/index-d4b61b23.js","static/css/index-fa4edf2a.css","static/js/index-6027c89f.js","static/css/index-f1c5cfcb.css","static/js/theme-94cf7d00.js","static/js/index-d80b4fc7.js","static/css/index-bbfdd7ec.css","static/js/utils-dad0fa14.js","static/js/infoCollection-c7c3a2b1.js","static/js/trial-7ba34a46.js"])));const $=s(),k=t(),{productCode:F="",tenantId:U,agentCode:z="",agencyCode:B,saleChannelId:H,saleUserId:J,orderNo:K,orderCode:Q,extraInfo:W,isShare:X,insurerCode:Y,preview:Z}=$.query;let ee={};try{ee=JSON.parse(decodeURIComponent(W))}catch(le){}const ae=T(),ie=`${window.origin}/baseInsurance/long/phoneVerify?${n.stringify({...$.query,orderNo:Q||K})}`,se=r(),te=o.get(`${d}_userInfo`),ne=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{name:(null==te?void 0:te.name)||""},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]}}),re=r({sign:[],verify:[],scribing:""}),oe=()=>{if(Z)return void v(A.SIGN,$.query);const e=[];se.value&&re.value.sign.includes("1")&&e.push(se.value.validateSign()),Promise.all(e).then((e=>{y({bizObjectId:[],bizObjectType:S.AGENT,orderId:ae.value.id,tenantId:U}).then((({code:e,data:a})=>{"10000"===e&&a&&k.push({path:D.sign,query:$.query})}))})).catch((e=>{b(e.message)}))};r();const de=(e,a,i)=>{var s;j(e,a,null==(s=ae.value)?void 0:s.id,U,i).then((()=>{K&&O({orderNo:Q||K,tenantId:U}).then((({code:e,data:a})=>{if("10000"===e){Object.assign(ae.value,a);const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===V.AGENT&&30===a.category&&e.push(a.fileBase64)})),ne.value.agent.signData=e}}))}))};r({imgUrl:"",desc:"",title:"",link:ie});return l((()=>{(async()=>{let e={};const{code:a,data:i}=await O({orderNo:K,tenantId:U});"10000"===a&&(Object.assign(ae.value,i),e=q(i.insuredList[0].productList),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===V.AGENT&&30===e.category&&ne.value.agent.signData.push(e.fileBase64)}))),L(e).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===V.AGENT&&ne.value.agent.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:G(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),C(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=I(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&re.value.sign.push(a.code),"1"===a.code?ne.value.agent.isSign=!0:"2"===a.code?ne.value.holder.isSign=!0:"3"===a.code?ne.value.insured.isSign=!0:"4"===a.code?ne.value.holder.isShareSign=!0:"5"===a.code&&(ne.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&re.value.verify.push(a.code),"1"===a.code?ne.value.holder.isVerify=!0:"2"===a.code&&(ne.value.insured.isVerify=!0)}))}))}}))})()})),(e,a)=>{const i=E,s=_,t=N;return c(),u("div",P,[f(i),g("div",x,[f(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),g("div",M,[f(w,{ref_key:"agentSignRef",ref:se,"order-detail":m(ae),"sign-string":m(ne).agent.signData,"show-sign":m(ne).agent.isSign,"show-verify":m(ne).agent.isVerify,"file-list":m(ne).agent.fileList,"personal-info":m(ne).agent.personalInfo,disabled:!!m(X),title:"代理人",onHandleSign:a[0]||(a[0]=e=>de("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"])]),g("div",R,[f(t,{type:"primary",onClick:oe},{default:p((()=>[h("确定")])),_:1})])])}}});export{$ as default};
