import{d as e,i as a,h as i,bK as t,cP as s,j as n,k as r,am as o,z as l,az as d,ak as u,cQ as c,o as v,c as f,b as p,a as h,u as g,m,f as y,a0 as I,w as S,a8 as b,aF as j,ay as O,T as N,cR as L,a6 as x,aa as D,cH as E,cI as T,cS as C,cJ as k,bA as q,ab as w,cK as R,cT as V,aj as H,cU as P}from"./index-081cd25a.js";import{b as U}from"./product-f146346c.js";import{g as z,m as A}from"./trial-291f24e5.js";import{_ as $}from"./SignPart-2d8a9804.js";import{u as _}from"./useOrder-67d8c659.js";import{N as F}from"./notice-33e6eedd.js";import"./PolicyInfo-3e8fa534.js";import{c as M}from"./scribing-0911b4cc.js";import{p as B}from"./utils-add51a7f.js";import{g as J}from"./utils-e9c1c4d1.js";import"./index-c05e4cdb.js";import"./cloneDeep-1309e4a1.js";import"./infoCollection-6d4c4fa9.js";import"./trial-d7088865.js";const K={class:"long-verify"},G={class:"header"},Q={class:"verify-content"},Y={class:"footer-button"},W=e({__name:"holderSign",setup(e){const W=a(),X=i(),{productCode:Z="",tenantId:ee,agentCode:ae="",agencyCode:ie,saleChannelId:te,saleUserId:se,orderNo:ne,orderCode:re,extraInfo:oe,isShare:le,insurerCode:de,preview:ue}=W.query;let ce={};try{ce=JSON.parse(decodeURIComponent(oe))}catch(Ne){}const ve=_(),fe=`${window.origin}/baseInsurance/long/phoneVerify?${t.stringify({...W.query,orderNo:re||ne})}`,pe=new s({source:"localStorage"}),he=n(),ge=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),me=n({}),ye=n({}),Ie=n({sign:[],verify:[],scribing:""}),Se=r((()=>{var e,a;const{age:i,relationToHolder:t,id:s}=(null==(a=null==(e=ge.value.insured)?void 0:e.personalInfo)?void 0:a[0])||{};return`${t}`===o.CERT||i<18})),be=()=>{if(ue)return void j(O.SIGN,W.query);const e=[];he.value&&((le?Ie.value.sign.includes("4"):Ie.value.sign.includes("2"))&&e.push(he.value.validateSign()),Ie.value.verify.includes("1")&&e.push(he.value.validateVerify())),Promise.all(e).then((e=>{!Ie.value.scribing||me.value.status?L(ve.value).then((({code:e,data:a})=>{"10000"===e&&(a.authStatus===`${x.YES}`?X.push({path:D.payAuth,query:W.query}):Promise.all([E({bizObjectId:[ve.value.holder.id],bizObjectType:T.HOLDER,orderId:ve.value.id,tenantId:ee}),Se.value&&E({bizObjectId:[ve.value.insuredList[0].id],bizObjectType:T.INSURED,orderId:ve.value.id,tenantId:ee})]).then((e=>{if("10000"===e[0].code){if(le)return void N("已完成");X.push({path:D.sign,query:W.query})}})))})):N("请先完成风险抄录")})).catch((e=>{N(e.message)}))},je=()=>{ne&&z({orderNo:re||ne,tenantId:ee}).then((({code:e,data:a})=>{var i,t,s,n;if("10000"===e){const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===F.HOlDER&&30===a.category&&e.push(a.fileBase64)})),ge.value.holder.signData=e,Object.assign(ye.value,{type:C[a.extInfo.transcriptionType],signInfo:null==(t=null==(i=a.riskTranscriptionList)?void 0:i[0])?void 0:t.uri,text:null==(n=null==(s=a.riskTranscriptionList)?void 0:s[0])?void 0:n.content,status:!!a.extInfo.transcriptionStatus})}}))};n({imgUrl:"",desc:"",title:"",link:fe});const Oe=e=>{const{type:a,text:i}=me.value,t={...W.query,orderNo:re||ne,text:i,orderId:ve.value.id};"handle"===a?X.push({path:"scribing",query:t}):M({content:i,image:e,orderNo:re||ne,tenantId:ee,transcriptionType:P.AUTO}).then((({code:e})=>{"10000"===e&&je()}))};return l([()=>ye.value,()=>me.value],(()=>{Object.assign(me.value,{type:ye.value.type||me.value.type,text:ye.value.text||me.value.text,status:ye.value.status||me.value.status,signInfo:ye.value.signInfo||me.value.signInfo})}),{deep:!0,immediate:!0}),d((()=>{(async()=>{var e,a,i,t;let s={};const{code:n,data:r}=await z({orderNo:re||ne,tenantId:ee});"10000"===n&&(Object.assign(ve.value,r),ge.value.holder.personalInfo={...r.holder,isCert:1},ge.value.insured.personalInfo=r.insuredList.map((e=>(e.isCert=1,e))),s=B(r.insuredList[0].productList),Object.assign(ye.value,{type:C[r.extInfo.transcriptionType],signInfo:null==(a=null==(e=r.riskTranscriptionList)?void 0:e[0])?void 0:a.uri,text:null==(t=null==(i=r.riskTranscriptionList)?void 0:i[0])?void 0:t.content,status:!!r.extInfo.transcriptionStatus}),ve.value.tenantOrderAttachmentList.forEach((e=>{e.objectType===F.HOlDER&&30===e.category&&ge.value.holder.signData.push(e.fileBase64)}))),U(s).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===F.HOlDER&&ge.value.holder.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:J(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),A(s).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=q(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&Ie.value.sign.push(a.code),"1"===a.code?ge.value.agent.isSign=!0:"2"===a.code?ge.value.holder.isSign=!0:"3"===a.code?ge.value.insured.isSign=!0:"4"===a.code?ge.value.holder.isShareSign=!0:"5"===a.code&&(ge.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(me.value.text=e.remark,Ie.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?me.value.type="handle":me.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&Ie.value.verify.push(a.code),"1"===a.code?ge.value.holder.isVerify=!0:"2"===a.code&&(ge.value.insured.isVerify=!0)}))}))}}))})();const e=u.get("verifyData");if(e){const{serialNo:a,certNo:i,name:t}=e;c({certiNo:i,orderNo:re||ne,serialNo:a,tenantId:ee,userName:t}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(pe.remove("verifyData"),je())}))}})),(e,a)=>{const i=w,t=R,s=V,n=H;return v(),f("div",K,[p(i),h("div",G,[p(t,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),h("div",Q,[!g(le)||g(ge).holder.isShareSign?(v(),m($,{key:0,ref_key:"holderSignRef",ref:he,"order-detail":g(ve),"sign-string":g(ge).holder.signData,"show-sign":g(le)?g(ge).holder.isShareSign:g(ge).holder.isSign,"show-verify":g(ge).holder.isVerify,"file-list":g(ge).holder.fileList,"personal-info":g(ge).holder.personalInfo,title:"投保人",onHandleSign:a[0]||(a[0]=e=>((e,a,i)=>{var t,s,n,r;const o=[k(e,a,null==(t=ve.value)?void 0:t.id,ee,i)],{id:l}=(null==(n=null==(s=ge.value.insured)?void 0:s.personalInfo)?void 0:n[0])||{};Se.value&&o.push(k("INSURED",a,null==(r=ve.value)?void 0:r.id,ee,l)),Promise.all(o).then((e=>{je()}))})("HOLDER",e,g(ge).holder.personalInfo.id))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):y("",!0)]),g(Ie).scribing?(v(),m(s,I({key:0},g(me),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:Oe}),null,16)):y("",!0),h("div",Y,[p(n,{type:"primary",onClick:be},{default:S((()=>[b("确定")])),_:1})])])}}});export{W as default};
