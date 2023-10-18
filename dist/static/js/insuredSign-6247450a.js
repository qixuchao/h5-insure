import{d as e,i as a,h as i,bD as s,j as n,aE as r,o as t,c as o,b as d,a as l,u,F as c,q as f,m as g,f as p,w as m,a8 as v,aK as h,cr as S,s as y,T as b,bs as j,aa as I,cs as D,ag as N}from"./index-e476314a.js";import{b as L}from"./product-cd980f13.js";import{g as E,m as w}from"./trial-22d8b641.js";import{_ as O}from"./SignPart-2a3d186f.js";import{u as q}from"./useOrder-5aa74a5b.js";import{N as C}from"./notice-33e6eedd.js";import{b as R,s as U}from"./verify-cf023989.js";import"./PolicyInfo-160abd99.js";import{a as V}from"./constants-4b08cf92.js";import{p as _}from"./utils-d1f91c38.js";import{g as k}from"./utils-e98f2de6.js";import"./index-7b176bb5.js";import"./infoCollection-a0cf47c2.js";import"./trial-e54aa4f3.js";const x={class:"long-verify"},P={class:"header"},T={class:"verify-content"},B={class:"footer-button footer-bar"},M=e({__name:"insuredSign",setup(e){const M=a(),$=i(),{tenantId:z,orderNo:A,orderCode:F,extraInfo:H,isShare:G,insurerCode:J,preview:K}=M.query;let Q={};try{Q=JSON.parse(decodeURIComponent(H))}catch(se){}const W=q(),X=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...M.query,orderNo:F||A})}`,Y=n(),Z=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ee=(e,a,i)=>{var s;R(e,a,null==(s=W.value)?void 0:s.id,z,i).then((()=>{A&&E({orderNo:F||A,tenantId:z}).then((({code:e,data:a})=>{if("10000"===e){const e={};W.value.tenantOrderAttachmentList.forEach((a=>{a.objectType===C.INSURED&&30===a.category&&e[a.objectId].push(a.fileBase64)})),Z.value.insured.signData=e}}))}))},ae=n({sign:[],verify:[],scribing:""}),ie=()=>{if(K)return void h(V.SIGN,M.query);const e=[];Y.value&&((G?ae.value.sign.includes("5"):ae.value.sign.includes("3"))&&e.push(...(Y.value||[]).map((e=>e.validateSign()))),ae.value.verify.includes("2")&&e.push(...(Y.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{U({bizObjectId:W.value.insuredList.map((e=>e.id)),bizObjectType:S.INSURED,orderId:W.value.id,tenantId:z}).then((({code:e,data:a})=>{"10000"===e&&a&&$.push({path:y.sign,query:M.query})}))})).catch((e=>{b(e.message)}))};n({imgUrl:"",desc:"",title:"",link:X});return r((()=>{(async()=>{let e={};const{code:a,data:i}=await E({orderNo:F||A,tenantId:z});"10000"===a&&(Object.assign(W.value,i),Z.value.insured.personalInfo=i.insuredList.map((e=>(e.isCert=1,e))),e=_(i.insuredList[0].productList),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===C.INSURED&&30===e.category&&e.objectId&&(Z.value.insured.signData[e.objectId]?Z.value.insured.signData[e.objectId].push(e.fileBase64):Z.value.insured.signData[e.objectId]=[e.fileBase64])}))),L(e).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===C.INSURED&&Z.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:k(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),w(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=j(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&ae.value.sign.push(a.code),"1"===a.code?Z.value.agent.isSign=!0:"2"===a.code?Z.value.holder.isSign=!0:"3"===a.code?Z.value.insured.isSign=!0:"4"===a.code?Z.value.holder.isShareSign=!0:"5"===a.code&&(Z.value.insured.isShareSign=!0)}))}))}}))})()})),(e,a)=>{const i=I,s=D,n=N;return t(),o("div",x,[d(i),l("div",P,[d(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),l("div",T,[!u(G)||u(Z).insured.isShareSign?(t(!0),o(c,{key:0},f(u(Z).insured.personalInfo||[],(e=>(t(),g(O,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Y,"data-source":[],"order-detail":u(W),"sign-string":u(Z).insured.signData[e.id],"show-sign":u(G)?u(Z).insured.isShareSign:u(Z).insured.isSign,"show-verify":u(Z).insured.isVerify,"file-list":u(Z).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:a=>ee("INSURED",a,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):p("",!0)]),l("div",B,[d(n,{type:"primary",class:"submit-btn",onClick:ie},{default:m((()=>[v("确定")])),_:1})])])}}});export{M as default};
