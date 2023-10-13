import{d as e,i,h as a,bD as s,j as n,aE as r,o as t,c as o,b as d,a as l,u,F as c,q as f,m as g,f as p,w as m,a8 as v,aK as h,co as S,s as y,T as b,bs as j,aa as I,cp as D,ag as N}from"./index-1944b73e.js";import{b as L}from"./product-06911278.js";import{g as E,m as w}from"./trial-3ebd1bf2.js";import{_ as O}from"./SignPart-c7007120.js";import{u as q}from"./useOrder-d75ce373.js";import{N as C}from"./notice-33e6eedd.js";import{b as R,s as U}from"./verify-26e0eeba.js";import"./PolicyInfo-0fe615e6.js";import{a as V}from"./constants-62d1c4af.js";import{p as _}from"./utils-f2fc3aa4.js";import{g as k}from"./utils-b1737165.js";import"./index-b6edec75.js";import"./infoCollection-71197b1c.js";import"./trial-8fd0665a.js";const x={class:"long-verify"},P={class:"header"},T={class:"verify-content"},B={class:"footer-button footer-bar"},M=e({__name:"insuredSign",setup(e){const M=i(),$=a(),{tenantId:z,orderNo:A,orderCode:F,extraInfo:H,isShare:G,insurerCode:J,preview:K}=M.query;let Q={};try{Q=JSON.parse(decodeURIComponent(H))}catch(se){}const W=q(),X=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...M.query,orderNo:F||A})}`,Y=n(),Z=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ee=(e,i,a)=>{var s;R(e,i,null==(s=W.value)?void 0:s.id,z,a).then((()=>{A&&E({orderNo:F||A,tenantId:z}).then((({code:e,data:i})=>{if("10000"===e){const e={};W.value.tenantOrderAttachmentList.forEach((i=>{i.objectType===C.INSURED&&30===i.category&&e[i.objectId].push(i.fileBase64)})),Z.value.insured.signData=e}}))}))},ie=n({sign:[],verify:[],scribing:""}),ae=()=>{if(K)return void h(V.SIGN,M.query);const e=[];Y.value&&((G?ie.value.sign.includes("5"):ie.value.sign.includes("3"))&&e.push(...(Y.value||[]).map((e=>e.validateSign()))),ie.value.verify.includes("2")&&e.push(...(Y.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{U({bizObjectId:W.value.insuredList.map((e=>e.id)),bizObjectType:S.INSURED,orderId:W.value.id,tenantId:z}).then((({code:e,data:i})=>{"10000"===e&&i&&$.push({path:y.sign,query:M.query})}))})).catch((e=>{b(e.message)}))};n({imgUrl:"",desc:"",title:"",link:X});return r((()=>{(async()=>{let e={};const{code:i,data:a}=await E({orderNo:F||A,tenantId:z});"10000"===i&&(Object.assign(W.value,a),Z.value.insured.personalInfo=a.insuredList.map((e=>(e.isCert=1,e))),e=_(a.insuredList[0].productList),a.tenantOrderAttachmentList.forEach((e=>{e.objectType===C.INSURED&&30===e.category&&e.objectId&&(Z.value.insured.signData[e.objectId]?Z.value.insured.signData[e.objectId].push(e.fileBase64):Z.value.insured.signData[e.objectId]=[e.fileBase64])}))),L(e).then((({code:e,data:i})=>{var a;if("10000"===e){const{signMaterialMap:e}=(null==(a=i.productMaterialPlanVOList)?void 0:a[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===C.INSURED&&Z.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:k(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),w(e).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=j(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&ie.value.sign.push(i.code),"1"===i.code?Z.value.agent.isSign=!0:"2"===i.code?Z.value.holder.isSign=!0:"3"===i.code?Z.value.insured.isSign=!0:"4"===i.code?Z.value.holder.isShareSign=!0:"5"===i.code&&(Z.value.insured.isShareSign=!0)}))}))}}))})()})),(e,i)=>{const a=I,s=D,n=N;return t(),o("div",x,[d(a),l("div",P,[d(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),l("div",T,[!u(G)||u(Z).insured.isShareSign?(t(!0),o(c,{key:0},f(u(Z).insured.personalInfo||[],(e=>(t(),g(O,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Y,"data-source":[],"order-detail":u(W),"sign-string":u(Z).insured.signData[e.id],"show-sign":u(G)?u(Z).insured.isShareSign:u(Z).insured.isSign,"show-verify":u(Z).insured.isVerify,"file-list":u(Z).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>ee("INSURED",i,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):p("",!0)]),l("div",B,[d(n,{type:"primary",class:"submit-btn",onClick:ae},{default:m((()=>[v("确定")])),_:1})])])}}});export{M as default};
