import{d as e,i,h as a,bJ as s,j as n,az as r,o as t,c as o,b as d,a as l,u as c,F as u,q as f,m as g,f as p,w as m,a8 as h,cI as v,aF as S,ay as y,cG as b,cH as I,T as j,s as N,bA as D,ab as L,cJ as w,aj as E}from"./index-9122cfbb.js";import{b as O}from"./product-ce89f11d.js";import{g as q,m as C}from"./trial-5797106b.js";import{_ as R}from"./SignPart-7cec752d.js";import{u as U}from"./useOrder-3c315169.js";import{N as V}from"./notice-33e6eedd.js";import"./PolicyInfo-c0ce791e.js";import{p as _}from"./utils-65f89903.js";import{g as k}from"./utils-3450c38b.js";import"./index-589aab9a.js";import"./infoCollection-dc018a1d.js";import"./trial-49fabf97.js";const x={class:"long-verify"},P={class:"header"},T={class:"verify-content"},z={class:"footer-button footer-bar"},A=e({__name:"insuredSign",setup(e){const A=i(),B=a(),{tenantId:F,orderNo:H,orderCode:J,extraInfo:M,isShare:$,insurerCode:G,preview:K}=A.query;let Q={};try{Q=JSON.parse(decodeURIComponent(M))}catch(se){}const W=U(),X=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...A.query,orderNo:J||H})}`,Y=n(),Z=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ee=(e,i,a)=>{var s;v(e,i,null==(s=W.value)?void 0:s.id,F,a).then((()=>{H&&q({orderNo:J||H,tenantId:F}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.tenantOrderAttachmentList.forEach((i=>{i.objectType===V.INSURED&&30===i.category&&e[i.objectId].push(i.fileBase64)})),Z.value.insured.signData=e}}))}))},ie=n({sign:[],verify:[],scribing:""}),ae=()=>{if(K)return void S(y.SIGN,A.query);const e=[];Y.value&&(($?ie.value.sign.includes("5"):ie.value.sign.includes("3"))&&e.push(...(Y.value||[]).map((e=>e.validateSign()))),ie.value.verify.includes("2")&&e.push(...(Y.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{b({bizObjectId:W.value.insuredList.map((e=>e.id)),bizObjectType:I.INSURED,orderId:W.value.id,tenantId:F}).then((({code:e,data:i})=>{if("10000"===e&&i){if($)return void j("已完成");B.push({path:N.sign,query:A.query})}}))})).catch((e=>{j(e.message)}))};n({imgUrl:"",desc:"",title:"",link:X});return r((()=>{(async()=>{let e={};const{code:i,data:a}=await q({orderNo:J||H,tenantId:F});"10000"===i&&(Object.assign(W.value,a),Z.value.insured.personalInfo=a.insuredList.map((e=>(e.isCert=1,e))),e=_(a.insuredList[0].productList),a.tenantOrderAttachmentList.forEach((e=>{e.objectType===V.INSURED&&30===e.category&&e.objectId&&(Z.value.insured.signData[e.objectId]?Z.value.insured.signData[e.objectId].push(e.fileBase64):Z.value.insured.signData[e.objectId]=[e.fileBase64])}))),O(e).then((({code:e,data:i})=>{var a;if("10000"===e){const{signMaterialMap:e}=(null==(a=i.productMaterialPlanVOList)?void 0:a[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===V.INSURED&&Z.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:k(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),C(e).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=D(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&ie.value.sign.push(i.code),"1"===i.code?Z.value.agent.isSign=!0:"2"===i.code?Z.value.holder.isSign=!0:"3"===i.code?Z.value.insured.isSign=!0:"4"===i.code?Z.value.holder.isShareSign=!0:"5"===i.code&&(Z.value.insured.isShareSign=!0)}))}))}}))})()})),(e,i)=>{const a=L,s=w,n=E;return t(),o("div",x,[d(a),l("div",P,[d(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),l("div",T,[!c($)||c(Z).insured.isShareSign?(t(!0),o(u,{key:0},f(c(Z).insured.personalInfo||[],(e=>(t(),g(R,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Y,"data-source":[],"order-detail":c(W),"sign-string":c(Z).insured.signData[e.id],"show-sign":c($)?c(Z).insured.isShareSign:c(Z).insured.isSign,"show-verify":c(Z).insured.isVerify,"file-list":c(Z).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>ee("INSURED",i,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):p("",!0)]),l("div",z,[d(n,{type:"primary",class:"submit-btn",onClick:ae},{default:m((()=>[h("确定")])),_:1})])])}}});export{A as default};
