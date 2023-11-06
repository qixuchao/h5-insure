import{d as e,i,h as a,bF as s,j as n,aG as t,o as r,c as o,b as d,a as l,u,F as c,q as f,m as g,f as p,w as m,a8 as h,cD as v,aM as S,cB as y,cC as b,T as I,s as j,bw as D,aa as N,cE as L,ai as w}from"./index-8fb28a8d.js";import{b as E}from"./product-12606cee.js";import{g as O,m as C}from"./trial-655f09cc.js";import{_ as q}from"./SignPart-0aa21d4f.js";import{u as R}from"./useOrder-633e1c2a.js";import{N as U}from"./notice-33e6eedd.js";import"./PolicyInfo-9f711ab0.js";import{a as V}from"./constants-4b08cf92.js";import{p as _}from"./utils-22779fe8.js";import{g as k}from"./utils-95a76685.js";import"./index-28709569.js";import"./infoCollection-059b51d9.js";import"./trial-8e21d4b7.js";const x={class:"long-verify"},B={class:"header"},M={class:"verify-content"},P={class:"footer-button footer-bar"},T=e({__name:"insuredSign",setup(e){const T=i(),F=a(),{tenantId:$,orderNo:z,orderCode:A,extraInfo:G,isShare:H,insurerCode:J,preview:K}=T.query;let Q={};try{Q=JSON.parse(decodeURIComponent(G))}catch(se){}const W=R(),X=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...T.query,orderNo:A||z})}`,Y=n(),Z=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ee=(e,i,a)=>{var s;v(e,i,null==(s=W.value)?void 0:s.id,$,a).then((()=>{z&&O({orderNo:A||z,tenantId:$}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.tenantOrderAttachmentList.forEach((i=>{i.objectType===U.INSURED&&30===i.category&&e[i.objectId].push(i.fileBase64)})),Z.value.insured.signData=e}}))}))},ie=n({sign:[],verify:[],scribing:""}),ae=()=>{if(K)return void S(V.SIGN,T.query);const e=[];Y.value&&((H?ie.value.sign.includes("5"):ie.value.sign.includes("3"))&&e.push(...(Y.value||[]).map((e=>e.validateSign()))),ie.value.verify.includes("2")&&e.push(...(Y.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{y({bizObjectId:W.value.insuredList.map((e=>e.id)),bizObjectType:b.INSURED,orderId:W.value.id,tenantId:$}).then((({code:e,data:i})=>{if("10000"===e&&i){if(H)return void I("已完成");F.push({path:j.sign,query:T.query})}}))})).catch((e=>{I(e.message)}))};n({imgUrl:"",desc:"",title:"",link:X});return t((()=>{(async()=>{let e={};const{code:i,data:a}=await O({orderNo:A||z,tenantId:$});"10000"===i&&(Object.assign(W.value,a),Z.value.insured.personalInfo=a.insuredList.map((e=>(e.isCert=1,e))),e=_(a.insuredList[0].productList),a.tenantOrderAttachmentList.forEach((e=>{e.objectType===U.INSURED&&30===e.category&&e.objectId&&(Z.value.insured.signData[e.objectId]?Z.value.insured.signData[e.objectId].push(e.fileBase64):Z.value.insured.signData[e.objectId]=[e.fileBase64])}))),E(e).then((({code:e,data:i})=>{var a;if("10000"===e){const{signMaterialMap:e}=(null==(a=i.productMaterialPlanVOList)?void 0:a[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===U.INSURED&&Z.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:k(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),C(e).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=D(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&ie.value.sign.push(i.code),"1"===i.code?Z.value.agent.isSign=!0:"2"===i.code?Z.value.holder.isSign=!0:"3"===i.code?Z.value.insured.isSign=!0:"4"===i.code?Z.value.holder.isShareSign=!0:"5"===i.code&&(Z.value.insured.isShareSign=!0)}))}))}}))})()})),(e,i)=>{const a=N,s=L,n=w;return r(),o("div",x,[d(a),l("div",B,[d(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),l("div",M,[!u(H)||u(Z).insured.isShareSign?(r(!0),o(c,{key:0},f(u(Z).insured.personalInfo||[],(e=>(r(),g(q,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Y,"data-source":[],"order-detail":u(W),"sign-string":u(Z).insured.signData[e.id],"show-sign":u(H)?u(Z).insured.isShareSign:u(Z).insured.isSign,"show-verify":u(Z).insured.isVerify,"file-list":u(Z).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>ee("INSURED",i,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):p("",!0)]),l("div",P,[d(n,{type:"primary",class:"submit-btn",onClick:ae},{default:m((()=>[h("确定")])),_:1})])])}}});export{T as default};
