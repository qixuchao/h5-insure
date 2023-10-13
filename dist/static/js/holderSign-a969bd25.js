import{d as e,i as a,h as i,bD as s,cv as t,j as n,k as r,aj as o,z as l,aE as d,ah as u,o as c,c as v,b as f,a as p,u as h,m as g,f as m,a0 as y,w as I,a8 as S,aK as b,T as j,a6 as O,co as N,cw as L,bs as x,aa as E,cp as D,cx as T,ag as C,cy as k}from"./index-98996f16.js";import{b as q}from"./product-db5994fe.js";import{g as w,m as R}from"./trial-3c79dbb5.js";import{_ as V}from"./SignPart-677271dd.js";import{u as H}from"./useOrder-75c654e5.js";import{N as P}from"./notice-33e6eedd.js";import{c as U,e as z,s as $,b as _}from"./verify-98a4dd26.js";import"./PolicyInfo-1f8c3553.js";import{a as A,P as M}from"./constants-62d1c4af.js";import{c as B}from"./scribing-1c53edb5.js";import{p as F}from"./utils-a3db66a1.js";import{g as G}from"./utils-a95dc846.js";import"./index-0ef134b0.js";import"./infoCollection-039b769a.js";import"./trial-77e9c583.js";const J={class:"long-verify"},K={class:"header"},Y={class:"verify-content"},Q={class:"footer-button"},W=e({__name:"holderSign",setup(e){const W=a(),X=i(),{productCode:Z="",tenantId:ee,agentCode:ae="",agencyCode:ie,saleChannelId:se,saleUserId:te,orderNo:ne,orderCode:re,extraInfo:oe,isShare:le,insurerCode:de,preview:ue}=W.query;let ce={};try{ce=JSON.parse(decodeURIComponent(oe))}catch(Ne){}const ve=H(),fe=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...W.query,orderNo:re||ne})}`,pe=new t({source:"localStorage"}),he=n(),ge=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),me=n({}),ye=n({}),Ie=n({sign:[],verify:[],scribing:""}),Se=r((()=>{var e,a;const{age:i,relationToHolder:s,id:t}=(null==(a=null==(e=ge.value.insured)?void 0:e.personalInfo)?void 0:a[0])||{};return`${s}`===o.CERT||i<18})),be=()=>{if(ue)return void b(A.SIGN,W.query);const e=[];he.value&&((le?Ie.value.sign.includes("4"):Ie.value.sign.includes("2"))&&e.push(he.value.validateSign()),Ie.value.verify.includes("1")&&e.push(he.value.validateVerify())),Promise.all(e).then((e=>{!Ie.value.scribing||me.value.status?z(ve.value).then((({code:e,data:a})=>{"10000"===e&&(a.authStatus===`${O.YES}`?X.push({path:M.payAuth,query:W.query}):Promise.all([$({bizObjectId:[ve.value.holder.id],bizObjectType:N.HOLDER,orderId:ve.value.id,tenantId:ee}),Se.value&&$({bizObjectId:[ve.value.insuredList[0].id],bizObjectType:N.INSURED,orderId:ve.value.id,tenantId:ee})]).then((e=>{"10000"===e[0].code&&X.push({path:M.sign,query:W.query})})))})):j("请先完成风险抄录")})).catch((e=>{j(e.message)}))},je=()=>{ne&&w({orderNo:re||ne,tenantId:ee}).then((({code:e,data:a})=>{var i,s,t,n;if("10000"===e){const e=[];ve.value.tenantOrderAttachmentList.forEach((a=>{a.objectType===P.HOlDER&&30===a.category&&e.push(a.fileBase64)})),ge.value.holder.signData=e,Object.assign(ye.value,{type:L[a.extInfo.transcriptionType],signInfo:null==(s=null==(i=a.riskTranscriptionList)?void 0:i[0])?void 0:s.uri,text:null==(n=null==(t=a.riskTranscriptionList)?void 0:t[0])?void 0:n.content,status:!!a.extInfo.transcriptionStatus})}}))};n({imgUrl:"",desc:"",title:"",link:fe});const Oe=e=>{const{type:a,text:i}=me.value,s={...W.query,orderNo:re||ne,text:i,orderId:ve.value.id};"handle"===a?X.push({path:"scribing",query:s}):B({content:i,image:e,orderNo:re||ne,tenantId:ee,transcriptionType:k.AUTO}).then((({code:e})=>{"10000"===e&&je()}))};return l([()=>ye.value,()=>me.value],(()=>{Object.assign(me.value,{type:ye.value.type||me.value.type,text:ye.value.text||me.value.text,status:ye.value.status||me.value.status,signInfo:ye.value.signInfo||me.value.signInfo})}),{deep:!0,immediate:!0}),d((()=>{(async()=>{var e,a,i,s;let t={};const{code:n,data:r}=await w({orderNo:re||ne,tenantId:ee});"10000"===n&&(Object.assign(ve.value,r),ge.value.holder.personalInfo={...r.holder,isCert:1},ge.value.insured.personalInfo=r.insuredList.map((e=>(e.isCert=1,e))),t=F(r.insuredList[0].productList),Object.assign(ye.value,{type:L[r.extInfo.transcriptionType],signInfo:null==(a=null==(e=r.riskTranscriptionList)?void 0:e[0])?void 0:a.uri,text:null==(s=null==(i=r.riskTranscriptionList)?void 0:i[0])?void 0:s.content,status:!!r.extInfo.transcriptionStatus}),ve.value.tenantOrderAttachmentList.forEach((e=>{e.objectType===P.HOlDER&&30===e.category&&ge.value.holder.signData.push(e.fileBase64)}))),q(t).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===P.HOlDER&&ge.value.holder.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:G(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),R(t).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=x(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&Ie.value.sign.push(a.code),"1"===a.code?ge.value.agent.isSign=!0:"2"===a.code?ge.value.holder.isSign=!0:"3"===a.code?ge.value.insured.isSign=!0:"4"===a.code?ge.value.holder.isShareSign=!0:"5"===a.code&&(ge.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(me.value.text=e.remark,Ie.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?me.value.type="handle":me.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&Ie.value.verify.push(a.code),"1"===a.code?ge.value.holder.isVerify=!0:"2"===a.code&&(ge.value.insured.isVerify=!0)}))}))}}))})();const e=u.get("verifyData");if(e){const{serialNo:a,certNo:i,name:s}=e;U({certiNo:i,orderNo:re||ne,serialNo:a,tenantId:ee,userName:s}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(pe.remove("verifyData"),je())}))}})),(e,a)=>{const i=E,s=D,t=T,n=C;return c(),v("div",J,[f(i),p("div",K,[f(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),p("div",Y,[!h(le)||h(ge).holder.isShareSign?(c(),g(V,{key:0,ref_key:"holderSignRef",ref:he,"order-detail":h(ve),"sign-string":h(ge).holder.signData,"show-sign":h(le)?h(ge).holder.isShareSign:h(ge).holder.isSign,"show-verify":h(ge).holder.isVerify,"file-list":h(ge).holder.fileList,"personal-info":h(ge).holder.personalInfo,title:"投保人",onHandleSign:a[0]||(a[0]=e=>((e,a,i)=>{var s,t,n,r;const o=[_(e,a,null==(s=ve.value)?void 0:s.id,ee,i)],{id:l}=(null==(n=null==(t=ge.value.insured)?void 0:t.personalInfo)?void 0:n[0])||{};Se.value&&o.push(_("INSURED",a,null==(r=ve.value)?void 0:r.id,ee,l)),Promise.all(o).then((e=>{}))})("HOLDER",e,h(ge).holder.personalInfo.id))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):m("",!0)]),h(Ie).scribing?(c(),g(t,y({key:0},h(me),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:Oe}),null,16)):m("",!0),p("div",Q,[f(n,{type:"primary",onClick:be},{default:I((()=>[S("确定")])),_:1})])])}}});export{W as default};
