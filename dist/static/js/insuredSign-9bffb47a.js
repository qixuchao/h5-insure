import{d as e,i as a,h as i,c5 as s,j as n,aG as t,l as r,o,c as d,b as l,a as u,u as c,F as f,s as g,p,f as m,w as v,v as h,cO as S,aP as y,aF as b,cM as I,cN as j,T as w,aH as D,bH as N,ak as L,cP as O,ar as E}from"./index-658553ed.js";import{b as C}from"./product-a3afb0a6.js";import{g as R,m as U}from"./trial-70537526.js";import{_ as V}from"./SignPart-7a98ac37.js";import{u as k}from"./useOrder-154341ab.js";import{a as q}from"./notice-640b84c1.js";import"./PolicyInfo-7a1773fb.js";import{p as P}from"./utils-a1652653.js";import{g as _}from"./utils-aac527b3.js";import"./index-6b947052.js";import"./cloneDeep-f093226b.js";import"./infoCollection-c65d277e.js";import"./trial-86408057.js";const B={class:"long-verify"},T={class:"header"},x={class:"verify-content"},z={class:"footer-button footer-bar"},H=e({__name:"insuredSign",setup(e){const H=a(),M=i(),{tenantId:F,orderNo:$,orderCode:A,extraInfo:G,isShare:J,insurerCode:K,preview:Q}=H.query;let W={};try{W=JSON.parse(decodeURIComponent(G))}catch(te){}const X=k(),Y=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...H.query,orderNo:A||$})}`,Z=n(),ee=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ae=(e,a,i)=>{var s;S(e,a,null==(s=X.value)?void 0:s.id,F,i).then((()=>{$&&R({orderNo:A||$,tenantId:F}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.tenantOrderAttachmentList.forEach((a=>{a.objectType===q.INSURED&&30===a.category&&e[a.objectId].push(a.fileBase64)})),ee.value.insured.signData=e}}))}))},ie=n({sign:[],verify:[],scribing:""}),se=()=>{if(Q)return void y(b.SIGN,H.query);const e=[];Z.value&&((J?ie.value.sign.includes("5"):ie.value.sign.includes("3"))&&e.push(...(Z.value||[]).map((e=>e.validateSign()))),ie.value.verify.includes("2")&&e.push(...(Z.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{I({bizObjectId:X.value.insuredList.map((e=>e.id)),bizObjectType:j.INSURED,orderId:X.value.id,tenantId:F}).then((({code:e,data:a})=>{if("10000"===e&&a){if(J)return void w("已完成");M.push({path:D.sign,query:H.query})}}))})).catch((e=>{w(e.message)}))};n({imgUrl:"",desc:"",title:"",link:Y});t((()=>{(async()=>{let e={};const{code:a,data:i}=await R({orderNo:A||$,tenantId:F});"10000"===a&&(Object.assign(X.value,i),ee.value.insured.personalInfo=i.insuredList.map((e=>(e.isCert=1,e))),e=P(i.insuredList[0].productList),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===q.INSURED&&30===e.category&&e.objectId&&(ee.value.insured.signData[e.objectId]?ee.value.insured.signData[e.objectId].push(e.fileBase64):ee.value.insured.signData[e.objectId]=[e.fileBase64])}))),C(e).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===q.INSURED&&ee.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:_(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),U(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=N(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&ie.value.sign.push(a.code),"1"===a.code?ee.value.agent.isSign=!0:"2"===a.code?ee.value.holder.isSign=!0:"3"===a.code?ee.value.insured.isSign=!0:"4"===a.code?ee.value.holder.isShareSign=!0:"5"===a.code&&(ee.value.insured.isShareSign=!0)}))}))}}))})()}));const ne=n();return r((()=>{setTimeout((async()=>{ne.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const i=L,s=O,n=E;return o(),d("div",B,[l(i),u("div",T,[l(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),u("div",x,[!c(J)||c(ee).insured.isShareSign?(o(!0),d(f,{key:0},g(c(ee).insured.personalInfo||[],(e=>(o(),p(V,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Z,"data-source":[],"order-detail":c(X),"sign-string":c(ee).insured.signData[e.id],"show-sign":c(J)?c(ee).insured.isShareSign:c(ee).insured.isSign,"show-verify":c(ee).insured.isVerify,"file-list":c(ee).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:a=>ae("INSURED",a,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):m("",!0)]),u("div",z,[l(n,{type:"primary",class:"submit-btn",onClick:se},{default:v((()=>[h("确定")])),_:1})])])}}});export{H as default};
