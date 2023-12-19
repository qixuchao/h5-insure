import{d as e,i,h as a,bW as s,j as n,aG as t,l as r,o,c as d,b as l,a as u,u as c,F as f,s as g,p,f as m,w as v,v as h,cP as S,aP as y,aF as b,cN as I,cO as j,T as w,aH as N,bH as D,ak as L,cQ as O,ar as E}from"./index-aaa8bb0a.js";import{b as C}from"./product-8c233683.js";import{g as R,m as U}from"./trial-f688ef19.js";import{_ as V}from"./SignPart-cf05312e.js";import{u as k}from"./useOrder-3b64102a.js";import{N as q}from"./notice-33e6eedd.js";import"./PolicyInfo-26794306.js";import{p as P}from"./utils-bb06aba8.js";import{g as _}from"./utils-d9f93827.js";import"./index-d10a93c2.js";import"./cloneDeep-5804d04e.js";import"./infoCollection-88d162d3.js";import"./trial-039b421f.js";const B={class:"long-verify"},T={class:"header"},x={class:"verify-content"},z={class:"footer-button footer-bar"},H=e({__name:"insuredSign",setup(e){const H=i(),F=a(),{tenantId:M,orderNo:$,orderCode:A,extraInfo:G,isShare:J,insurerCode:Q,preview:W}=H.query;let K={};try{K=JSON.parse(decodeURIComponent(G))}catch(te){}const X=k(),Y=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...H.query,orderNo:A||$})}`,Z=n(),ee=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ie=(e,i,a)=>{var s;S(e,i,null==(s=X.value)?void 0:s.id,M,a).then((()=>{$&&R({orderNo:A||$,tenantId:M}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.tenantOrderAttachmentList.forEach((i=>{i.objectType===q.INSURED&&30===i.category&&e[i.objectId].push(i.fileBase64)})),ee.value.insured.signData=e}}))}))},ae=n({sign:[],verify:[],scribing:""}),se=()=>{if(W)return void y(b.SIGN,H.query);const e=[];Z.value&&((J?ae.value.sign.includes("5"):ae.value.sign.includes("3"))&&e.push(...(Z.value||[]).map((e=>e.validateSign()))),ae.value.verify.includes("2")&&e.push(...(Z.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{I({bizObjectId:X.value.insuredList.map((e=>e.id)),bizObjectType:j.INSURED,orderId:X.value.id,tenantId:M}).then((({code:e,data:i})=>{if("10000"===e&&i){if(J)return void w("已完成");F.push({path:N.sign,query:H.query})}}))})).catch((e=>{w(e.message)}))};n({imgUrl:"",desc:"",title:"",link:Y});t((()=>{(async()=>{let e={};const{code:i,data:a}=await R({orderNo:A||$,tenantId:M});"10000"===i&&(Object.assign(X.value,a),ee.value.insured.personalInfo=a.insuredList.map((e=>(e.isCert=1,e))),e=P(a.insuredList[0].productList),a.tenantOrderAttachmentList.forEach((e=>{e.objectType===q.INSURED&&30===e.category&&e.objectId&&(ee.value.insured.signData[e.objectId]?ee.value.insured.signData[e.objectId].push(e.fileBase64):ee.value.insured.signData[e.objectId]=[e.fileBase64])}))),C(e).then((({code:e,data:i})=>{var a;if("10000"===e){const{signMaterialMap:e}=(null==(a=i.productMaterialPlanVOList)?void 0:a[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===q.INSURED&&ee.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:_(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),U(e).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=D(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&ae.value.sign.push(i.code),"1"===i.code?ee.value.agent.isSign=!0:"2"===i.code?ee.value.holder.isSign=!0:"3"===i.code?ee.value.insured.isSign=!0:"4"===i.code?ee.value.holder.isShareSign=!0:"5"===i.code&&(ee.value.insured.isShareSign=!0)}))}))}}))})()}));const ne=n();return r((()=>{setTimeout((async()=>{ne.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,i)=>{const a=L,s=O,n=E;return o(),d("div",B,[l(a),u("div",T,[l(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),u("div",x,[!c(J)||c(ee).insured.isShareSign?(o(!0),d(f,{key:0},g(c(ee).insured.personalInfo||[],(e=>(o(),p(V,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Z,"data-source":[],"order-detail":c(X),"sign-string":c(ee).insured.signData[e.id],"show-sign":c(J)?c(ee).insured.isShareSign:c(ee).insured.isSign,"show-verify":c(ee).insured.isVerify,"file-list":c(ee).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>ie("INSURED",i,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):m("",!0)]),u("div",z,[l(n,{type:"primary",class:"submit-btn",onClick:se},{default:v((()=>[h("确定")])),_:1})])])}}});export{H as default};
