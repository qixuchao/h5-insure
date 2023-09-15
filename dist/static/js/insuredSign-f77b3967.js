import{d as e,h as i,g as s,bv as a,i as r,av as n,o as t,c as o,b as d,a as l,u,F as c,n as f,l as g,q as p,w as m,a8 as v,aB as h,cd as S,s as y,T as j,bk as b,aa as I,ce as L,ag as N}from"./index-9df177ad.js";import{b as O}from"./product-0f09cd57.js";import{g as w,m as D}from"./trial-d6c6a013.js";import{_ as E}from"./SignPart-6a03336d.js";import{u as q}from"./useOrder-07639ec3.js";import{M as R}from"./product-585b0e6f.js";import{N as V}from"./notice-33e6eedd.js";import{s as k,a as C}from"./verify-ad7441e3.js";import"./PolicyInfo-91cac552.js";import{a as U}from"./constants-fe95ef6f.js";import{a as _}from"./utils-543a217d.js";import"./useAttachment-c6077559.js";import"./utils-fb848e2a.js";import"./infoCollection-9ed0730a.js";import"./trial-94d9af9e.js";import"./index-cb3c8680.js";const T={class:"long-verify"},x={class:"header"},M={class:"verify-content"},P={class:"footer-button footer-bar"},A=e({__name:"insuredSign",setup(e){const A=i(),G=s(),{tenantId:H,orderNo:z,orderCode:B,extraInfo:F,isShare:$,insurerCode:J,preview:K}=A.query;let Q={};try{Q=JSON.parse(decodeURIComponent(F))}catch(se){}const W=q(),X=`${window.origin}/baseInsurance/long/phoneVerify?${a.stringify({...A.query,orderNo:B||z})}`,Y=r(),Z=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ee=r({sign:[],verify:[],scribing:""}),ie=()=>{if(K)return void h(U.SIGN,A.query);const e=[];Y.value&&(($?ee.value.sign.includes("5"):ee.value.sign.includes("3"))&&e.push(...(Y.value||[]).map((e=>e.validateSign()))),ee.value.verify.includes("2")&&e.push(...(Y.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{C({bizObjectId:W.value.insuredList.map((e=>e.id)),bizObjectType:S.INSURED,orderId:W.value.id,tenantId:H}).then((({code:e,data:i})=>{"10000"===e&&i&&G.push({path:y.sign,query:A.query})}))})).catch((e=>{j(e.message)}))};r({imgUrl:"",desc:"",title:"",link:X});return n((()=>{(async()=>{let e={};const{code:i,data:s}=await w({orderNo:B||z,tenantId:H});"10000"===i&&(Object.assign(W.value,s),Z.value.insured.personalInfo=s.insuredList.map((e=>(e.isCert=1,e))),e=_(s.insuredList[0].productList),s.tenantOrderAttachmentList.forEach((e=>{e.objectType===V.INSURED&&21===e.category&&(Z.value.insured.signData[e.objectId]=e.fileBase64)}))),O(e).then((({code:e,data:i})=>{var s;if("10000"===e){const{productMaterialMap:e}=(null==(s=i.productMaterialPlanVOList)?void 0:s[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===R.SIGN)).forEach((e=>{e.noticeObject===V.AGENT?Z.value.agent.fileList.push(e):e.noticeObject===V.HOlDER?Z.value.holder.fileList.push(e):e.noticeObject===V.INSURED&&Z.value.insured.fileList.push(e)}))}})),D(e).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=b(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&ee.value.sign.push(i.code),"1"===i.code?Z.value.agent.isSign=!0:"2"===i.code?Z.value.holder.isSign=!0:"3"===i.code?Z.value.insured.isSign=!0:"4"===i.code?Z.value.holder.isShareSign=!0:"5"===i.code&&(Z.value.insured.isShareSign=!0)}))}))}}))})()})),(e,i)=>{const s=I,a=L,r=N;return t(),o("div",T,[d(s),l("div",x,[d(a,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),l("div",M,[!u($)||u(Z).insured.isShareSign?(t(!0),o(c,{key:0},f(u(Z).insured.personalInfo||[],(e=>(t(),g(E,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Y,"data-source":[],"order-detail":u(W),"sign-string":u(Z).insured.signData[e.id],"show-sign":u($)?u(Z).insured.isShareSign:u(Z).insured.isSign,"show-verify":u(Z).insured.isVerify,"file-list":u(Z).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>((e,i,s)=>{var a;k(e,i,null==(a=W.value)?void 0:a.id,H,s)})("INSURED",i,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):p("",!0)]),l("div",P,[d(r,{type:"primary",class:"submit-btn",onClick:ie},{default:m((()=>[v("确定")])),_:1})])])}}});export{A as default};
