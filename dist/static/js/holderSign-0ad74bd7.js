import{d as e,h as a,g as i,bx as t,bN as s,i as o,z as r,av as n,af as l,o as d,c,b as u,a as f,u as p,l as v,q as g,a0 as h,a6 as m,T as y,b8 as b,aL as j,bO as I,aa as S,bK as N,bT as L,bU as O}from"./index-13276606.js";import{b as T}from"./product-1b06a8ee.js";import"./core-be9a5a6c.js";import{g as E,m as D}from"./trial-2029f8e4.js";import{_ as C,N as x}from"./notice-ad8c1158.js";import{u as k}from"./useOrder-f558f159.js";import{M as w}from"./product-585b0e6f.js";import{f as R,b as U,s as A}from"./verify-8f5c8d4a.js";import{t as V}from"./index-c6bddb0d.js";import"./PayInfo-e924e591.js";import{c as q}from"./scribing-5762f10f.js";import{p as H}from"./utils-6fc00a71.js";import"./useAttachment-5468aa34.js";import"./utils-2a1e5dae.js";import"./infoCollection-10237666.js";import"./trial-8ab22cb4.js";import"./merge-e7788e50.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./_getTag-0507d0b1.js";import"./debounce-6981b306.js";import"./phoneVerify-4bfbbde3.js";import"./index-55f73278.js";import"./useDicData-019864ff.js";import"./bankCard-77e2767a.js";const _={class:"long-verify"},B={class:"header"},G={class:"verify-content"},M=e({__name:"holderSign",setup(e){const M=a(),F=i(),{productCode:$="",tenantId:z,agentCode:J="",agencyCode:K,saleChannelId:P,saleUserId:Q,orderNo:W,orderCode:X,extraInfo:Y,isShare:Z,insurerCode:ee,preview:ae}=M.query;let ie={};try{ie=JSON.parse(decodeURIComponent(Y))}catch(ve){}const te=k(),se=`${window.origin}/baseInsurance/long/phoneVerify?${t.stringify({...M.query,orderNo:X||W})}`,oe=new s({source:"localStorage"});o({}),o({}),o();const re=o();o();const ne=o({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),le=o({}),de=o({}),ce=(e,a)=>{let i=window.location.href;i=i.includes("orderCode")?i:i.replace(/orderNo/g,"orderCode"),U({callbackUrl:i,certiNo:a,faceAuthMode:"TENCENT",userName:e,tenantId:z}).then((({code:i,data:t})=>{if("10000"===i){const{originalUrl:i,serialNo:s}=t;window.location.href=i,l.set("verifyData",{serialNo:s,certNo:a,name:e})}}))},ue=o({sign:[],verify:[],scribing:""});o();const fe=(e=!1)=>{W&&E({orderNo:X||W,tenantId:z}).then((({code:a,data:i})=>{var t,s,o,r,n;"10000"===a&&(e&&((null==(t=null==i?void 0:i.holder)?void 0:t.isCert)===m.NO||(null==i?void 0:i.insuredList.some((e=>e.isCert===m.NO)))?y("用户未完身份认证及签字"):(null==i?void 0:i.tenantOrderAttachmentList.find((e=>e.category===b.ELECTRIC_SIGN&&e.objectType===j.HOLDER)))&&(null==i?void 0:i.tenantOrderAttachmentList.find((e=>e.category===b.ELECTRIC_SIGN&&e.objectType===j.INSURED)))||y("用户未完身份认证及签字")),Object.assign(te.value,i),ne.value.holder.personalInfo=i.holder,ne.value.insured.personalInfo=i.insuredList,Object.assign(de.value,{type:I[i.extInfo.transcriptionType],signInfo:null==(o=null==(s=i.riskTranscriptionList)?void 0:s[0])?void 0:o.uri,text:null==(n=null==(r=i.riskTranscriptionList)?void 0:r[0])?void 0:n.content,status:!!i.extInfo.transcriptionStatus}),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===x.HOlDER?ne.value.holder.signData=e.fileBase64:e.objectType===x.AGENT?ne.value.agent.signData=e.fileBase64:e.objectType===x.INSURED&&(ne.value.insured.signData[e.objectId]=e.fileBase64)})))}))};o({imgUrl:"",desc:"",title:"",link:se});const pe=e=>{const{type:a,text:i}=le.value,t={...M.query,orderNo:X||W,text:i,orderId:te.value.id};"handle"===a?F.push({path:"scribing",query:t}):q({content:i,image:e,orderNo:X||W,tenantId:z,transcriptionType:O.AUTO}).then((({code:e})=>{"10000"===e&&fe()}))};return r([()=>de.value,()=>le.value],(()=>{Object.assign(le.value,{type:de.value.type||le.value.type,text:de.value.text||le.value.text,status:de.value.status||le.value.status,signInfo:de.value.signInfo||le.value.signInfo})}),{deep:!0,immediate:!0}),n((()=>{(async()=>{var e,a,i,t;let s={};const{code:o,data:r}=await E({orderNo:X||W,tenantId:z});"10000"===o&&(Object.assign(te.value,r),ne.value.holder.personalInfo=r.holder,ne.value.insured.personalInfo=r.insuredList,s=H(r.insuredList[0].productList),Object.assign(de.value,{type:I[r.extInfo.transcriptionType],signInfo:null==(a=null==(e=r.riskTranscriptionList)?void 0:e[0])?void 0:a.uri,text:null==(t=null==(i=r.riskTranscriptionList)?void 0:i[0])?void 0:t.content,status:!!r.extInfo.transcriptionStatus}),r.tenantOrderAttachmentList.forEach((e=>{e.objectType===x.HOlDER?ne.value.holder.signData=e.fileBase64:e.objectType===x.AGENT?ne.value.agent.signData=e.fileBase64:e.objectType===x.INSURED&&(ne.value.insured.signData[e.objectId]=e.fileBase64)}))),T({productCode:$}).then((({code:e,data:a})=>{var i;if("10000"===e){const{productMaterialMap:e}=(null==(i=a.productInsureMaterialVOList)?void 0:i[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===w.SIGN)).forEach((e=>{e.noticeObject===x.AGENT?ne.value.agent.fileList.push(e):e.noticeObject===x.HOlDER?ne.value.holder.fileList.push(e):e.noticeObject===x.INSURED&&ne.value.insured.fileList.push(e)}))}})),D(s).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=V(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&ue.value.sign.push(a.code),"1"===a.code?ne.value.agent.isSign=!0:"2"===a.code?ne.value.holder.isSign=!0:"3"===a.code?ne.value.insured.isSign=!0:"4"===a.code?ne.value.holder.isShareSign=!0:"5"===a.code&&(ne.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(le.value.text=e.remark,ue.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?le.value.type="handle":le.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&ue.value.verify.push(a.code),"1"===a.code?ne.value.holder.isVerify=!0:"2"===a.code&&(ne.value.insured.isVerify=!0)}))}))}})),fe()})();const e=l.get("verifyData");if(e){const{serialNo:a,certNo:i,name:t}=e;R({certiNo:i,orderNo:X||W,serialNo:a,tenantId:z,userName:t}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(oe.remove("verifyData"),fe())}))}})),(e,a)=>{const i=S,t=N,s=L;return d(),c("div",_,[u(i),f("div",B,[u(t,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),f("div",G,[!p(Z)||p(ne).holder.isShareSign?(d(),v(C,{key:0,ref_key:"holderSignRef",ref:re,"order-detail":p(te),"sign-string":p(ne).holder.signData,"show-sign":p(Z)?p(ne).holder.isShareSign:p(ne).holder.isSign,"show-verify":p(ne).holder.isVerify,"file-list":p(ne).holder.fileList,"personal-info":p(ne).holder.personalInfo,title:"投保人",onHandleSign:a[0]||(a[0]=e=>((e,a,i)=>{var t;A(e,a,null==(t=te.value)?void 0:t.id,z,i)})("HOLDER",e,p(ne).holder.personalInfo.id)),onHandleVerify:ce},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):g("",!0)]),p(ue).scribing?(d(),v(s,h({key:0},p(le),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:pe}),null,16)):g("",!0)])}}});export{M as default};
