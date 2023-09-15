import{d as e,h as a,g as i,bv as s,ci as t,i as r,z as n,av as o,ah as l,o as d,c as u,b as c,a as f,u as v,l as p,q as g,a0 as h,w as y,a8 as m,aj as I,aB as S,T as b,a6 as j,cd as N,cj as O,bk as L,aa as T,ce as E,ck as x,ag as D,cl as k}from"./index-9df177ad.js";import{b as q}from"./product-0f09cd57.js";import{g as C,m as w}from"./trial-d6c6a013.js";import{_ as R}from"./SignPart-6a03336d.js";import{u as V}from"./useOrder-07639ec3.js";import{M as U}from"./product-585b0e6f.js";import{N as A}from"./notice-33e6eedd.js";import{f as H,s as P,b as _,a as B}from"./verify-ad7441e3.js";import"./PolicyInfo-91cac552.js";import{a as G,P as M}from"./constants-fe95ef6f.js";import{c as $}from"./scribing-3c3444f1.js";import{p as z}from"./utils-543a217d.js";import"./useAttachment-c6077559.js";import"./utils-fb848e2a.js";import"./infoCollection-9ed0730a.js";import"./trial-94d9af9e.js";import"./index-cb3c8680.js";const F={class:"long-verify"},J={class:"header"},Y={class:"verify-content"},K={class:"footer-button"},Q=e({__name:"holderSign",setup(e){const Q=a(),W=i(),{productCode:X="",tenantId:Z,agentCode:ee="",agencyCode:ae,saleChannelId:ie,saleUserId:se,orderNo:te,orderCode:re,extraInfo:ne,isShare:oe,insurerCode:le,preview:de}=Q.query;let ue={};try{ue=JSON.parse(decodeURIComponent(ne))}catch(je){}const ce=V(),fe=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...Q.query,orderNo:re||te})}`,ve=new t({source:"localStorage"}),pe=r(),ge=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),he=r({}),ye=r({}),me=r({sign:[],verify:[],scribing:""}),Ie=()=>{if(de)return void S(G.SIGN,Q.query);const e=[];pe.value&&((oe?me.value.sign.includes("4"):me.value.sign.includes("2"))&&e.push(pe.value.validateSign()),me.value.verify.includes("1")&&e.push(pe.value.validateVerify())),Promise.all(e).then((e=>{!me.value.scribing||he.value.status?_(ce.value).then((({code:e,data:a})=>{"10000"===e&&(a.authStatus===`${j.YES}`?W.push({path:M.payAuth,query:Q.query}):B({bizObjectId:[ce.value.holder.id],bizObjectType:N.HOLDER,orderId:ce.value.id,tenantId:Z}).then((({code:e,data:a})=>{"10000"===e&&a&&W.push({path:M.sign,query:Q.query})})))})):b("请先完成风险抄录")})).catch((e=>{b(e.message)}))},Se=()=>{te&&C({orderNo:re||te,tenantId:Z}).then((({code:e,data:a})=>{var i,s,t,r;"10000"===e&&(Object.assign(ce.value,a),ge.value.holder.personalInfo=a.holder,Object.assign(ye.value,{type:O[a.extInfo.transcriptionType],signInfo:null==(s=null==(i=a.riskTranscriptionList)?void 0:i[0])?void 0:s.uri,text:null==(r=null==(t=a.riskTranscriptionList)?void 0:t[0])?void 0:r.content,status:!!a.extInfo.transcriptionStatus}))}))};r({imgUrl:"",desc:"",title:"",link:fe});const be=e=>{const{type:a,text:i}=he.value,s={...Q.query,orderNo:re||te,text:i,orderId:ce.value.id};"handle"===a?W.push({path:"scribing",query:s}):$({content:i,image:e,orderNo:re||te,tenantId:Z,transcriptionType:k.AUTO}).then((({code:e})=>{"10000"===e&&Se()}))};return n([()=>ye.value,()=>he.value],(()=>{Object.assign(he.value,{type:ye.value.type||he.value.type,text:ye.value.text||he.value.text,status:ye.value.status||he.value.status,signInfo:ye.value.signInfo||he.value.signInfo})}),{deep:!0,immediate:!0}),o((()=>{(async()=>{var e,a,i,s;let t={};const{code:r,data:n}=await C({orderNo:re||te,tenantId:Z});"10000"===r&&(Object.assign(ce.value,n),ge.value.holder.personalInfo={...n.holder,isCert:1},ge.value.insured.personalInfo.push(...n.insuredList),t=z(n.insuredList[0].productList),Object.assign(ye.value,{type:O[n.extInfo.transcriptionType],signInfo:null==(a=null==(e=n.riskTranscriptionList)?void 0:e[0])?void 0:a.uri,text:null==(s=null==(i=n.riskTranscriptionList)?void 0:i[0])?void 0:s.content,status:!!n.extInfo.transcriptionStatus}),ce.value.tenantOrderAttachmentList.forEach((e=>{e.objectType===A.HOlDER&&21===e.category?ge.value.holder.signData=e.fileBase64:e.objectType===A.AGENT?ge.value.agent.signData=e.fileBase64:e.objectType===A.INSURED&&(ge.value.insured.signData[e.objectId]=e.fileBase64)}))),q(t).then((({code:e,data:a})=>{var i;if("10000"===e){const{productMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===U.SIGN)).forEach((e=>{e.noticeObject===A.AGENT?ge.value.agent.fileList.push(e):e.noticeObject===A.HOlDER?ge.value.holder.fileList.push(e):e.noticeObject===A.INSURED&&ge.value.insured.fileList.push(e)}))}})),w(t).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=L(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&me.value.sign.push(a.code),"1"===a.code?ge.value.agent.isSign=!0:"2"===a.code?ge.value.holder.isSign=!0:"3"===a.code?ge.value.insured.isSign=!0:"4"===a.code?ge.value.holder.isShareSign=!0:"5"===a.code&&(ge.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(he.value.text=e.remark,me.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?he.value.type="handle":he.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&me.value.verify.push(a.code),"1"===a.code?ge.value.holder.isVerify=!0:"2"===a.code&&(ge.value.insured.isVerify=!0)}))}))}}))})();const e=l.get("verifyData");if(e){const{serialNo:a,certNo:i,name:s}=e;H({certiNo:i,orderNo:re||te,serialNo:a,tenantId:Z,userName:s}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(ve.remove("verifyData"),Se())}))}})),(e,a)=>{const i=T,s=E,t=x,r=D;return d(),u("div",F,[c(i),f("div",J,[c(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),f("div",Y,[!v(oe)||v(ge).holder.isShareSign?(d(),p(R,{key:0,ref_key:"holderSignRef",ref:pe,"order-detail":v(ce),"sign-string":v(ge).holder.signData,"show-sign":v(oe)?v(ge).holder.isShareSign:v(ge).holder.isSign,"show-verify":v(ge).holder.isVerify,"file-list":v(ge).holder.fileList,"personal-info":v(ge).holder.personalInfo,title:"投保人",onHandleSign:a[0]||(a[0]=e=>((e,a,i)=>{var s,t;P(e,a,null==(s=ce.value)?void 0:s.id,Z,i);const{age:r,relationToHolder:n,id:o}=ge.value.insured.personalInfo[0];(`${n}`===I.CERT||r<18)&&P("INSURED",a,null==(t=ce.value)?void 0:t.id,Z,o)})("HOLDER",e,v(ge).holder.personalInfo.id))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):g("",!0)]),v(me).scribing?(d(),p(t,h({key:0},v(he),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:be}),null,16)):g("",!0),f("div",K,[c(r,{type:"primary",onClick:Ie},{default:y((()=>[m("确定")])),_:1})])])}}});export{Q as default};
