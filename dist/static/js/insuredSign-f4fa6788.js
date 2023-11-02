import{d as e,i,h as a,bF as s,j as n,aG as r,o as t,c as o,b as d,a as l,u,F as c,q as f,m as g,f as p,w as m,a8 as v,aL as h,cw as S,T as y,s as b,bw as j,aa as I,cx as L,ai as N}from"./index-01270b83.js";import{b as D}from"./product-4239e9da.js";import{g as w,m as E}from"./trial-65c717b1.js";import{_ as O}from"./SignPart-e2419837.js";import{u as q}from"./useOrder-f9592c3c.js";import{N as C}from"./notice-33e6eedd.js";import{b as R,s as U}from"./verify-7e03b77b.js";import"./PolicyInfo-9052d80d.js";import{a as V}from"./constants-4b08cf92.js";import{p as _}from"./utils-8a3e6480.js";import{g as k}from"./utils-600e8464.js";import"./index-feff7b35.js";import"./infoCollection-f09007f3.js";import"./trial-4c3d8912.js";const x={class:"long-verify"},P={class:"header"},T={class:"verify-content"},B={class:"footer-button footer-bar"},F=e({__name:"insuredSign",setup(e){const F=i(),M=a(),{tenantId:$,orderNo:z,orderCode:A,extraInfo:G,isShare:H,insurerCode:J,preview:K}=F.query;let Q={};try{Q=JSON.parse(decodeURIComponent(G))}catch(se){}const W=q(),X=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...F.query,orderNo:A||z})}`,Y=n(),Z=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ee=(e,i,a)=>{var s;R(e,i,null==(s=W.value)?void 0:s.id,$,a).then((()=>{z&&w({orderNo:A||z,tenantId:$}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.tenantOrderAttachmentList.forEach((i=>{i.objectType===C.INSURED&&30===i.category&&e[i.objectId].push(i.fileBase64)})),Z.value.insured.signData=e}}))}))},ie=n({sign:[],verify:[],scribing:""}),ae=()=>{if(K)return void h(V.SIGN,F.query);const e=[];Y.value&&((H?ie.value.sign.includes("5"):ie.value.sign.includes("3"))&&e.push(...(Y.value||[]).map((e=>e.validateSign()))),ie.value.verify.includes("2")&&e.push(...(Y.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{U({bizObjectId:W.value.insuredList.map((e=>e.id)),bizObjectType:S.INSURED,orderId:W.value.id,tenantId:$}).then((({code:e,data:i})=>{if("10000"===e&&i){if(H)return void y("已完成");M.push({path:b.sign,query:F.query})}}))})).catch((e=>{y(e.message)}))};n({imgUrl:"",desc:"",title:"",link:X});return r((()=>{(async()=>{let e={};const{code:i,data:a}=await w({orderNo:A||z,tenantId:$});"10000"===i&&(Object.assign(W.value,a),Z.value.insured.personalInfo=a.insuredList.map((e=>(e.isCert=1,e))),e=_(a.insuredList[0].productList),a.tenantOrderAttachmentList.forEach((e=>{e.objectType===C.INSURED&&30===e.category&&e.objectId&&(Z.value.insured.signData[e.objectId]?Z.value.insured.signData[e.objectId].push(e.fileBase64):Z.value.insured.signData[e.objectId]=[e.fileBase64])}))),D(e).then((({code:e,data:i})=>{var a;if("10000"===e){const{signMaterialMap:e}=(null==(a=i.productMaterialPlanVOList)?void 0:a[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===C.INSURED&&Z.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:k(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),E(e).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=j(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&ie.value.sign.push(i.code),"1"===i.code?Z.value.agent.isSign=!0:"2"===i.code?Z.value.holder.isSign=!0:"3"===i.code?Z.value.insured.isSign=!0:"4"===i.code?Z.value.holder.isShareSign=!0:"5"===i.code&&(Z.value.insured.isShareSign=!0)}))}))}}))})()})),(e,i)=>{const a=I,s=L,n=N;return t(),o("div",x,[d(a),l("div",P,[d(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),l("div",T,[!u(H)||u(Z).insured.isShareSign?(t(!0),o(c,{key:0},f(u(Z).insured.personalInfo||[],(e=>(t(),g(O,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Y,"data-source":[],"order-detail":u(W),"sign-string":u(Z).insured.signData[e.id],"show-sign":u(H)?u(Z).insured.isShareSign:u(Z).insured.isSign,"show-verify":u(Z).insured.isVerify,"file-list":u(Z).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>ee("INSURED",i,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):p("",!0)]),l("div",B,[d(n,{type:"primary",class:"submit-btn",onClick:ae},{default:m((()=>[v("确定")])),_:1})])])}}});export{F as default};
