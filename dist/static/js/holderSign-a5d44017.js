import{d as e,i as a,h as i,bF as t,cC as s,j as n,k as r,aj as o,B as l,aE as d,ah as u,o as c,c as v,b as f,a as p,u as h,m as g,f as m,a0 as y,w as I,a8 as S,aJ as b,T as j,a6 as O,cv as N,cD as L,bu as E,aa as x,cw as D,cE as C,ag as T,cF as k}from"./index-26f63535.js";import{b as q}from"./product-f34d3292.js";import{g as w,m as R}from"./trial-5d8293a4.js";import{_ as V}from"./SignPart-29fcd1b7.js";import{u as H}from"./useOrder-a95ed2dc.js";import{N as P}from"./notice-33e6eedd.js";import{c as U,e as $,s as _,b as z}from"./verify-42a2c909.js";import"./PolicyInfo-21816b07.js";import{a as A,P as F}from"./constants-4b08cf92.js";import{c as B}from"./scribing-fba624cc.js";import{p as M}from"./utils-120279df.js";import{g as J}from"./utils-ff01eafd.js";import"./index-930b6b06.js";import"./infoCollection-4876e6a1.js";import"./trial-501c6119.js";const G={class:"long-verify"},Y={class:"header"},K={class:"verify-content"},Q={class:"footer-button"},W=e({__name:"holderSign",setup(e){const W=a(),X=i(),{productCode:Z="",tenantId:ee,agentCode:ae="",agencyCode:ie,saleChannelId:te,saleUserId:se,orderNo:ne,orderCode:re,extraInfo:oe,isShare:le,insurerCode:de,preview:ue}=W.query;let ce={};try{ce=JSON.parse(decodeURIComponent(oe))}catch(Ne){}const ve=H(),fe=`${window.origin}/baseInsurance/long/phoneVerify?${t.stringify({...W.query,orderNo:re||ne})}`,pe=new s({source:"localStorage"}),he=n(),ge=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),me=n({}),ye=n({}),Ie=n({sign:[],verify:[],scribing:""}),Se=r((()=>{var e,a;const{age:i,relationToHolder:t,id:s}=(null==(a=null==(e=ge.value.insured)?void 0:e.personalInfo)?void 0:a[0])||{};return`${t}`===o.CERT||i<18})),be=()=>{if(ue)return void b(A.SIGN,W.query);const e=[];he.value&&((le?Ie.value.sign.includes("4"):Ie.value.sign.includes("2"))&&e.push(he.value.validateSign()),Ie.value.verify.includes("1")&&e.push(he.value.validateVerify())),Promise.all(e).then((e=>{!Ie.value.scribing||me.value.status?$(ve.value).then((({code:e,data:a})=>{"10000"===e&&(a.authStatus===`${O.YES}`?X.push({path:F.payAuth,query:W.query}):Promise.all([_({bizObjectId:[ve.value.holder.id],bizObjectType:N.HOLDER,orderId:ve.value.id,tenantId:ee}),Se.value&&_({bizObjectId:[ve.value.insuredList[0].id],bizObjectType:N.INSURED,orderId:ve.value.id,tenantId:ee})]).then((e=>{if("10000"===e[0].code){if(le)return void j("已完成");X.push({path:F.sign,query:W.query})}})))})):j("请先完成风险抄录")})).catch((e=>{j(e.message)}))},je=()=>{ne&&w({orderNo:re||ne,tenantId:ee}).then((({code:e,data:a})=>{var i,t,s,n;if("10000"===e){const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===P.HOlDER&&30===a.category&&e.push(a.fileBase64)})),ge.value.holder.signData=e,Object.assign(ye.value,{type:L[a.extInfo.transcriptionType],signInfo:null==(t=null==(i=a.riskTranscriptionList)?void 0:i[0])?void 0:t.uri,text:null==(n=null==(s=a.riskTranscriptionList)?void 0:s[0])?void 0:n.content,status:!!a.extInfo.transcriptionStatus})}}))};n({imgUrl:"",desc:"",title:"",link:fe});const Oe=e=>{const{type:a,text:i}=me.value,t={...W.query,orderNo:re||ne,text:i,orderId:ve.value.id};"handle"===a?X.push({path:"scribing",query:t}):B({content:i,image:e,orderNo:re||ne,tenantId:ee,transcriptionType:k.AUTO}).then((({code:e})=>{"10000"===e&&je()}))};return l([()=>ye.value,()=>me.value],(()=>{Object.assign(me.value,{type:ye.value.type||me.value.type,text:ye.value.text||me.value.text,status:ye.value.status||me.value.status,signInfo:ye.value.signInfo||me.value.signInfo})}),{deep:!0,immediate:!0}),d((()=>{(async()=>{var e,a,i,t;let s={};const{code:n,data:r}=await w({orderNo:re||ne,tenantId:ee});"10000"===n&&(Object.assign(ve.value,r),ge.value.holder.personalInfo={...r.holder,isCert:1},ge.value.insured.personalInfo=r.insuredList.map((e=>(e.isCert=1,e))),s=M(r.insuredList[0].productList),Object.assign(ye.value,{type:L[r.extInfo.transcriptionType],signInfo:null==(a=null==(e=r.riskTranscriptionList)?void 0:e[0])?void 0:a.uri,text:null==(t=null==(i=r.riskTranscriptionList)?void 0:i[0])?void 0:t.content,status:!!r.extInfo.transcriptionStatus}),ve.value.tenantOrderAttachmentList.forEach((e=>{e.objectType===P.HOlDER&&30===e.category&&ge.value.holder.signData.push(e.fileBase64)}))),q(s).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===P.HOlDER&&ge.value.holder.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:J(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),R(s).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=E(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&Ie.value.sign.push(a.code),"1"===a.code?ge.value.agent.isSign=!0:"2"===a.code?ge.value.holder.isSign=!0:"3"===a.code?ge.value.insured.isSign=!0:"4"===a.code?ge.value.holder.isShareSign=!0:"5"===a.code&&(ge.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(me.value.text=e.remark,Ie.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?me.value.type="handle":me.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&Ie.value.verify.push(a.code),"1"===a.code?ge.value.holder.isVerify=!0:"2"===a.code&&(ge.value.insured.isVerify=!0)}))}))}}))})();const e=u.get("verifyData");if(e){const{serialNo:a,certNo:i,name:t}=e;U({certiNo:i,orderNo:re||ne,serialNo:a,tenantId:ee,userName:t}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(pe.remove("verifyData"),je())}))}})),(e,a)=>{const i=x,t=D,s=C,n=T;return c(),v("div",G,[f(i),p("div",Y,[f(t,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),p("div",K,[!h(le)||h(ge).holder.isShareSign?(c(),g(V,{key:0,ref_key:"holderSignRef",ref:he,"order-detail":h(ve),"sign-string":h(ge).holder.signData,"show-sign":h(le)?h(ge).holder.isShareSign:h(ge).holder.isSign,"show-verify":h(ge).holder.isVerify,"file-list":h(ge).holder.fileList,"personal-info":h(ge).holder.personalInfo,title:"投保人",onHandleSign:a[0]||(a[0]=e=>((e,a,i)=>{var t,s,n,r;const o=[z(e,a,null==(t=ve.value)?void 0:t.id,ee,i)],{id:l}=(null==(n=null==(s=ge.value.insured)?void 0:s.personalInfo)?void 0:n[0])||{};Se.value&&o.push(z("INSURED",a,null==(r=ve.value)?void 0:r.id,ee,l)),Promise.all(o).then((e=>{je()}))})("HOLDER",e,h(ge).holder.personalInfo.id))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):m("",!0)]),h(Ie).scribing?(c(),g(s,y({key:0},h(me),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:Oe}),null,16)):m("",!0),p("div",Q,[f(n,{type:"primary",onClick:be},{default:I((()=>[S("确定")])),_:1})])])}}});export{W as default};
