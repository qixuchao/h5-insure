import{d as e,af as a,ag as i,i as s,h as t,c5 as n,j as r,ad as o,ap as l,aG as d,l as c,o as u,c as f,b as g,a as p,u as m,w as h,v,aP as y,aF as S,cO as j,cP as I,y as b,T as _,cQ as w,bH as E,ak as N,cR as O,ar as L}from"./index-7bdfed5a.js";import{b as T}from"./product-59334515.js";import{g as C,m as V}from"./trial-a3ff1874.js";import{_ as A}from"./SignPart-247116df.js";import{u as D}from"./useOrder-77efe614.js";import{N as P}from"./notice-a80c6426.js";import"./PolicyInfo-891103f4.js";import{p as q}from"./utils-ef2363e8.js";import{g as G}from"./utils-ae1ae40d.js";import"./index-2365fbfc.js";import"./cloneDeep-7f591603.js";import"./infoCollection-aa621fc4.js";import"./trial-86c4f979.js";const x={class:"long-verify"},R={class:"header"},k={class:"verify-content"},z={class:"footer-button"},B=e({__name:"agentSign",setup(e){a((()=>i((()=>import("./index-6279cad9.js")),["static/js/index-6279cad9.js","static/css/index-793d1580.css","static/js/index-7bdfed5a.js","static/css/index-267a9c4a.css"]))),a((()=>i((()=>import("./index-36c58515.js")),["static/js/index-36c58515.js","static/css/index-fa4edf2a.css","static/js/index-7bdfed5a.js","static/css/index-267a9c4a.css","static/js/theme-94cf7d00.js","static/js/index-67103431.js","static/css/index-bbfdd7ec.css","static/js/utils-ae1ae40d.js","static/js/infoCollection-aa621fc4.js","static/js/trial-86c4f979.js"])));const B=s(),$=t(),{productCode:F="",tenantId:M,agentCode:U="",agencyCode:H,saleChannelId:J,saleUserId:Q,orderNo:K,orderCode:W,extraInfo:X,isShare:Y,insurerCode:Z,preview:ee}=B.query;let ae={};try{ae=JSON.parse(decodeURIComponent(X))}catch(ue){}const ie=D(),se=`${window.origin}/baseInsurance/long/phoneVerify?${n.stringify({...B.query,orderNo:W||K})}`,te=r(),ne=o.get(`${l}_userInfo`),re=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{name:(null==ne?void 0:ne.name)||""},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]}}),oe=r({sign:[],verify:[],scribing:""}),le=()=>{if(ee)return void y(S.SIGN,B.query);const e=[];te.value&&oe.value.sign.includes("1")&&e.push(te.value.validateSign()),Promise.all(e).then((e=>{j({bizObjectId:[],bizObjectType:I.AGENT,orderId:ie.value.id,tenantId:M}).then((({code:e,data:a})=>{"10000"===e&&a&&$.push({path:b.sign,query:B.query})}))})).catch((e=>{_(e.message)}))};r();const de=(e,a,i)=>{var s;w(e,a,null==(s=ie.value)?void 0:s.id,M,i).then((()=>{K&&C({orderNo:W||K,tenantId:M}).then((({code:e,data:a})=>{if("10000"===e){Object.assign(ie.value,a);const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===P.AGENT&&30===a.category&&e.push(a.fileBase64)})),re.value.agent.signData=e}}))}))};r({imgUrl:"",desc:"",title:"",link:se});d((()=>{(async()=>{let e={};const{code:a,data:i}=await C({orderNo:K,tenantId:M});"10000"===a&&(Object.assign(ie.value,i),e=q(i.insuredList[0].productList),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===P.AGENT&&30===e.category&&re.value.agent.signData.push(e.fileBase64)}))),T(e).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===P.AGENT&&re.value.agent.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:G(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),V(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=E(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&oe.value.sign.push(a.code),"1"===a.code?re.value.agent.isSign=!0:"2"===a.code?re.value.holder.isSign=!0:"3"===a.code?re.value.insured.isSign=!0:"4"===a.code?re.value.holder.isShareSign=!0:"5"===a.code&&(re.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&oe.value.verify.push(a.code),"1"===a.code?re.value.holder.isVerify=!0:"2"===a.code&&(re.value.insured.isVerify=!0)}))}))}}))})()}));const ce=r();return c((()=>{setTimeout((async()=>{ce.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const i=N,s=O,t=L;return u(),f("div",x,[g(i),p("div",R,[g(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),p("div",k,[g(A,{ref_key:"agentSignRef",ref:te,"order-detail":m(ie),"sign-string":m(re).agent.signData,"show-sign":m(re).agent.isSign,"show-verify":m(re).agent.isVerify,"file-list":m(re).agent.fileList,"personal-info":m(re).agent.personalInfo,disabled:!!m(Y),title:"代理人",onHandleSign:a[0]||(a[0]=e=>de("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"])]),p("div",z,[g(t,{type:"primary",onClick:le},{default:h((()=>[v("确定")])),_:1})])])}}});export{B as default};
