import{d as e,i,h as a,c6 as s,j as t,aR as n,l as r,o,c as d,b as l,a as c,u,F as f,s as g,p,f as m,w as v,v as h,cP as S,aY as y,aQ as I,cN as b,cO as j,T as w,aS as D,bP as N,aD as L,cQ as O,aI as E}from"./index-6a9cf46c.js";import{b as R}from"./product-d0dc031e.js";import{g as C,m as P}from"./trial-41b6fd53.js";import{_ as U}from"./SignPart-9b9a5737.js";import{u as V}from"./useOrder-d313309a.js";import{a as q}from"./notice-15e726ee.js";import"./PolicyInfo-6c553e35.js";import{p as _}from"./utils-91ecdfd9.js";import{g as k}from"./utils-64e52959.js";import"./index-1c9b6281.js";import"./cloneDeep-793b0cc9.js";import"./utils-e3b5b413.js";import"./createProposal-e1f6da83.js";import"./trial-d6373768.js";import"./infoCollection-974452d5.js";const B={class:"long-verify"},T={class:"header"},x={class:"verify-content"},z={class:"footer-button footer-bar"},M=e({__name:"insuredSign",setup(e){const M=i(),$=a(),{tenantId:A,orderNo:F,orderCode:H,extraInfo:Q,isShare:G,insurerCode:J,preview:Y}=M.query;let K={};try{K=JSON.parse(decodeURIComponent(Q))}catch(ne){}const W=V(),X=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...M.query,orderNo:H||F})}`,Z=t(),ee=t({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ie=(e,i,a)=>{var s;S(e,i,null==(s=W.value)?void 0:s.id,A,a).then((()=>{F&&C({orderNo:H||F,tenantId:A}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.tenantOrderAttachmentList.forEach((i=>{i.objectType===q.INSURED&&30===i.category&&e[i.objectId].push(i.fileBase64)})),ee.value.insured.signData=e}}))}))},ae=t({sign:[],verify:[],scribing:""}),se=()=>{if(Y)return void y(I.SIGN,M.query);const e=[];Z.value&&((G?ae.value.sign.includes("5"):ae.value.sign.includes("3"))&&e.push(...(Z.value||[]).map((e=>e.validateSign()))),ae.value.verify.includes("2")&&e.push(...(Z.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{b({bizObjectId:W.value.insuredList.map((e=>e.id)),bizObjectType:j.INSURED,orderId:W.value.id,tenantId:A}).then((({code:e,data:i})=>{if("10000"===e&&i){if(G)return void w("已完成");$.push({path:D.sign,query:M.query})}}))})).catch((e=>{w(e.message)}))};t({imgUrl:"",desc:"",title:"",link:X});n((()=>{(async()=>{let e={};const{code:i,data:a}=await C({orderNo:H||F,tenantId:A});"10000"===i&&(Object.assign(W.value,a),ee.value.insured.personalInfo=a.insuredList.map((e=>(e.isCert=1,e))),e=_(a.insuredList[0].productList),a.tenantOrderAttachmentList.forEach((e=>{e.objectType===q.INSURED&&30===e.category&&e.objectId&&(ee.value.insured.signData[e.objectId]?ee.value.insured.signData[e.objectId].push(e.fileBase64):ee.value.insured.signData[e.objectId]=[e.fileBase64])}))),R(e).then((({code:e,data:i})=>{var a;if("10000"===e){const{signMaterialMap:e}=(null==(a=i.productMaterialPlanVOList)?void 0:a[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===q.INSURED&&ee.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:k(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),P(e).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=N(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&ae.value.sign.push(i.code),"1"===i.code?ee.value.agent.isSign=!0:"2"===i.code?ee.value.holder.isSign=!0:"3"===i.code?ee.value.insured.isSign=!0:"4"===i.code?ee.value.holder.isShareSign=!0:"5"===i.code&&(ee.value.insured.isShareSign=!0)}))}))}}))})()}));const te=t();return r((()=>{setTimeout((async()=>{te.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,i)=>{const a=L,s=O,t=E;return o(),d("div",B,[l(a),c("div",T,[l(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),c("div",x,[!u(G)||u(ee).insured.isShareSign?(o(!0),d(f,{key:0},g(u(ee).insured.personalInfo||[],(e=>(o(),p(U,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Z,"data-source":[],"order-detail":u(W),"sign-string":u(ee).insured.signData[e.id],"show-sign":u(G)?u(ee).insured.isShareSign:u(ee).insured.isSign,"show-verify":u(ee).insured.isVerify,"file-list":u(ee).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>ie("INSURED",i,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):m("",!0)]),c("div",z,[l(t,{type:"primary",class:"submit-btn",onClick:se},{default:v((()=>[h("确定")])),_:1})])])}}});export{M as default};
