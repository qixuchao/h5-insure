import{d as e,h as a,g as i,bA as s,cr as t,i as r,z as n,aE as o,ah as l,o as d,c as u,b as c,a as f,u as v,l as p,q as h,a0 as g,w as m,a8 as y,aj as I,aK as S,T as b,a6 as j,ck as O,cs as N,bq as L,aa as x,cl as E,ct as q,ag as T,cu as C}from"./index-8067fbb0.js";import{b as D}from"./product-8a4026f6.js";import{g as k,m as w}from"./trial-c7cbecff.js";import{_ as R}from"./SignPart-8c858301.js";import{u as V}from"./useOrder-3c8c8246.js";import{N as H}from"./notice-33e6eedd.js";import{f as P,s as U,b as z,a as $}from"./verify-4dfaa745.js";import"./PolicyInfo-49ed47c1.js";import{a as _,P as A}from"./constants-fe95ef6f.js";import{c as M}from"./scribing-17c99b68.js";import{p as F}from"./utils-9a0d00f8.js";import{g as B}from"./utils-182eadb5.js";import"./index-03d4bfe9.js";import"./infoCollection-98ba0512.js";import"./trial-67ba3d02.js";const G={class:"long-verify"},J={class:"header"},K={class:"verify-content"},Y={class:"footer-button"},Q=e({__name:"holderSign",setup(e){const Q=a(),W=i(),{productCode:X="",tenantId:Z,agentCode:ee="",agencyCode:ae,saleChannelId:ie,saleUserId:se,orderNo:te,orderCode:re,extraInfo:ne,isShare:oe,insurerCode:le,preview:de}=Q.query;let ue={};try{ue=JSON.parse(decodeURIComponent(ne))}catch(je){}const ce=V(),fe=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...Q.query,orderNo:re||te})}`,ve=new t({source:"localStorage"}),pe=r(),he=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ge=r({}),me=r({}),ye=r({sign:[],verify:[],scribing:""}),Ie=()=>{if(de)return void S(_.SIGN,Q.query);const e=[];pe.value&&((oe?ye.value.sign.includes("4"):ye.value.sign.includes("2"))&&e.push(pe.value.validateSign()),ye.value.verify.includes("1")&&e.push(pe.value.validateVerify())),Promise.all(e).then((e=>{!ye.value.scribing||ge.value.status?z(ce.value).then((({code:e,data:a})=>{"10000"===e&&(a.authStatus===`${j.YES}`?W.push({path:A.payAuth,query:Q.query}):Promise.all([$({bizObjectId:[ce.value.holder.id],bizObjectType:O.HOLDER,orderId:ce.value.id,tenantId:Z}),$({bizObjectId:[ce.value.insuredList[0].id],bizObjectType:O.INSURED,orderId:ce.value.id,tenantId:Z})]).then((e=>{"10000"===e[0].code&&"10000"===e[1].code&&W.push({path:A.sign,query:Q.query})})))})):b("请先完成风险抄录")})).catch((e=>{b(e.message)}))},Se=()=>{te&&k({orderNo:re||te,tenantId:Z}).then((({code:e,data:a})=>{var i,s,t,r;"10000"===e&&(Object.assign(ce.value,a),he.value.holder.personalInfo=a.holder,Object.assign(me.value,{type:N[a.extInfo.transcriptionType],signInfo:null==(s=null==(i=a.riskTranscriptionList)?void 0:i[0])?void 0:s.uri,text:null==(r=null==(t=a.riskTranscriptionList)?void 0:t[0])?void 0:r.content,status:!!a.extInfo.transcriptionStatus}))}))};r({imgUrl:"",desc:"",title:"",link:fe});const be=e=>{const{type:a,text:i}=ge.value,s={...Q.query,orderNo:re||te,text:i,orderId:ce.value.id};"handle"===a?W.push({path:"scribing",query:s}):M({content:i,image:e,orderNo:re||te,tenantId:Z,transcriptionType:C.AUTO}).then((({code:e})=>{"10000"===e&&Se()}))};return n([()=>me.value,()=>ge.value],(()=>{Object.assign(ge.value,{type:me.value.type||ge.value.type,text:me.value.text||ge.value.text,status:me.value.status||ge.value.status,signInfo:me.value.signInfo||ge.value.signInfo})}),{deep:!0,immediate:!0}),o((()=>{(async()=>{var e,a,i,s;let t={};const{code:r,data:n}=await k({orderNo:re||te,tenantId:Z});"10000"===r&&(Object.assign(ce.value,n),he.value.holder.personalInfo={...n.holder,isCert:1},he.value.insured.personalInfo.push(...n.insuredList),t=F(n.insuredList[0].productList),Object.assign(me.value,{type:N[n.extInfo.transcriptionType],signInfo:null==(a=null==(e=n.riskTranscriptionList)?void 0:e[0])?void 0:a.uri,text:null==(s=null==(i=n.riskTranscriptionList)?void 0:i[0])?void 0:s.content,status:!!n.extInfo.transcriptionStatus}),ce.value.tenantOrderAttachmentList.forEach((e=>{e.objectType===H.HOlDER&&30===e.category&&he.value.holder.signData.push(e.fileBase64)}))),D(t).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===H.HOlDER&&he.value.holder.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:B(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),w(t).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=L(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&ye.value.sign.push(a.code),"1"===a.code?he.value.agent.isSign=!0:"2"===a.code?he.value.holder.isSign=!0:"3"===a.code?he.value.insured.isSign=!0:"4"===a.code?he.value.holder.isShareSign=!0:"5"===a.code&&(he.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(ge.value.text=e.remark,ye.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?ge.value.type="handle":ge.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&ye.value.verify.push(a.code),"1"===a.code?he.value.holder.isVerify=!0:"2"===a.code&&(he.value.insured.isVerify=!0)}))}))}}))})();const e=l.get("verifyData");if(e){const{serialNo:a,certNo:i,name:s}=e;P({certiNo:i,orderNo:re||te,serialNo:a,tenantId:Z,userName:s}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(ve.remove("verifyData"),Se())}))}})),(e,a)=>{const i=x,s=E,t=q,r=T;return d(),u("div",G,[c(i),f("div",J,[c(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),f("div",K,[!v(oe)||v(he).holder.isShareSign?(d(),p(R,{key:0,ref_key:"holderSignRef",ref:pe,"order-detail":v(ce),"sign-string":v(he).holder.signData,"show-sign":v(oe)?v(he).holder.isShareSign:v(he).holder.isSign,"show-verify":v(he).holder.isVerify,"file-list":v(he).holder.fileList,"personal-info":v(he).holder.personalInfo,title:"投保人",onHandleSign:a[0]||(a[0]=e=>((e,a,i)=>{var s,t;U(e,a,null==(s=ce.value)?void 0:s.id,Z,i);const{age:r,relationToHolder:n,id:o}=he.value.insured.personalInfo[0];(`${n}`===I.CERT||r<18)&&U("INSURED",a,null==(t=ce.value)?void 0:t.id,Z,o)})("HOLDER",e,v(he).holder.personalInfo.id))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):h("",!0)]),v(ye).scribing?(d(),p(t,g({key:0},v(ge),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:be}),null,16)):h("",!0),f("div",Y,[c(r,{type:"primary",onClick:Ie},{default:m((()=>[y("确定")])),_:1})])])}}});export{Q as default};
