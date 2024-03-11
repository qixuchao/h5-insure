import{d as e,i,h as s,bY as a,bP as n,j as o,aR as t,l as r,o as l,c as d,b as u,a as c,u as f,F as g,s as m,p,f as v,w as h,v as S,q as b,cA as y,aY as I,aQ as j,cy as w,cz as N,bO as D,aS as L,T as E,bv as O,aE as V,cB as q,aI as C}from"./index-dca1ad48.js";import{b as R}from"./product-548b17e9.js";import{g as U,m as _}from"./trial-77611b0f.js";import{_ as B}from"./SignPart-b75d8664.js";import{u as P}from"./useOrder-7b05da50.js";import{N as T}from"./notice-dd7032b0.js";import"./PolicyInfo-55e02a65.js";import{p as k}from"./utils-9a2b4dd8.js";import{g as z}from"./utils-be76649e.js";import{i as x}from"./core-f0b92a99.js";import{_ as M}from"./MessagePopup-645956eb.js";import{q as $}from"./qianming-ece13dd4.js";import"./index-4eed6d0e.js";import"./utils-391b223f.js";import"./createProposal-7c057ff1.js";import"./trial-8c8f64f2.js";import"./infoCollection-e09b4c41.js";const A={class:"long-verify"},F={class:"header"},H={class:"verify-content"},Y={class:"footer-button footer-bar"},G={class:"content-inner"},J=["src"],Q=c("h4",null,"本次签名已完成",-1),W=c("p",null,"感谢您对本次投保的签字确认，后续流程由销售人员在您的配合下进行",-1),K=e({__name:"insuredSign",setup(e){const K=i(),X=s(),{tenantId:Z,orderNo:ee,orderCode:ie,extraInfo:se,isShare:ae,insurerCode:ne,preview:oe}=K.query;let te={};try{te=JSON.parse(decodeURIComponent(se))}catch(he){}const re=P(),[le,de]=a(!1),ue=`${window.origin}/baseInsurance/long/phoneVerify?${n.stringify({...K.query,orderNo:ie||ee})}`,ce=o(),fe=o({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},compositionSign:""},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ge=(e,i,s)=>{var a;y(e,i,null==(a=re.value)?void 0:a.id,Z,s).then((({code:e,message:i})=>{"10000"===e&&ee&&U({orderNo:ie||ee,tenantId:Z}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.tenantOrderAttachmentList.forEach((i=>{i.objectType===T.INSURED&&(30===i.category?e[i.objectId]?e[i.objectId].push(i.fileBase64):e[i.objectId]=[i.fileBase64]:21===i.category&&(fe.value.insured.compositionSign=i.uri))})),fe.value.insured.signData=e}}))}))},me=o({sign:[],verify:[],scribing:""}),pe=()=>{if(oe)return void I(j.SIGN,K.query);const e=[];ce.value&&((ae?me.value.sign.includes("5"):me.value.sign.includes("3"))&&e.push(...(ce.value||[]).map((e=>e.validateSign()))),me.value.verify.includes("2")&&e.push(...(ce.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{w({bizObjectId:re.value.insuredList.map((e=>e.id)),bizObjectType:N.INSURED,orderId:re.value.id,tenantId:Z,shareFlag:ae?1:2}).then((({code:e,data:i})=>{if("10000"===e&&i){if(ae)return de(!0),void setTimeout((()=>{x?D.closeWindow():window.close()}),2e3);X.push({path:L.sign,query:K.query})}}))})).catch((e=>{E(e.message)}))};o({imgUrl:"",desc:"",title:"",link:ue});t((()=>{(async()=>{let e={};const{code:i,data:s}=await U({orderNo:ie||ee,tenantId:Z});"10000"===i&&(Object.assign(re.value,s),fe.value.insured.personalInfo=s.insuredList.map((e=>(e.isCert=1,e))),e=k(s.insuredList[0].productList),s.tenantOrderAttachmentList.forEach((e=>{e.objectType===T.INSURED&&e.objectId&&(30===e.category?fe.value.insured.signData[e.objectId]?fe.value.insured.signData[e.objectId].push(e.fileBase64):fe.value.insured.signData[e.objectId]=[e.fileBase64]:21===e.category&&(fe.value.insured.compositionSign=e.uri))}))),R(e).then((({code:e,data:i})=>{var s;if("10000"===e){const{signMaterialMap:e}=(null==(s=i.productMaterialPlanVOList)?void 0:s[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===T.INSURED&&fe.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:z(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),_(e).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=O(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&me.value.sign.push(i.code),"1"===i.code?fe.value.agent.isSign=!0:"2"===i.code?fe.value.holder.isSign=!0:"3"===i.code?fe.value.insured.isSign=!0:"4"===i.code?fe.value.holder.isShareSign=!0:"5"===i.code&&(fe.value.insured.isShareSign=!0)}))}))}}))})()}));const ve=o();return r((()=>{setTimeout((async()=>{ve.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,i)=>{var s,a,n,o;const t=V,r=q,y=C;return l(),d("div",A,[u(t),c("div",F,[u(r,{type:"warning",content:(null==(a=null==(s=f(fe).insured.personalInfo)?void 0:s[0])?void 0:a.name)&&`本人${null==(o=null==(n=f(fe).insured.personalInfo)?void 0:n[0])?void 0:o.name}已阅读并同意签署《电子投保单》（投保信息确认）`},null,8,["content"])]),c("div",H,[!f(ae)||f(fe).insured.isShareSign?(l(!0),d(g,{key:0},m(f(fe).insured.personalInfo||[],(e=>(l(),p(B,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:ce,"data-source":[],"order-detail":f(re),"sign-string":f(fe).insured.signData[e.id],"show-sign":f(ae)?f(fe).insured.isShareSign:f(fe).insured.isSign,"show-verify":f(fe).insured.isVerify,"file-list":f(fe).insured.fileList,"personal-info":e||{},"composition-sign":f(fe).insured.compositionSign,title:"被保险人",onHandleSign:i=>ge("INSURED",i,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","composition-sign","onHandleSign"])))),128)):v("",!0)]),c("div",Y,[u(y,{type:"primary",class:"submit-btn",onClick:pe},{default:h((()=>[S("确定")])),_:1})]),u(M,{modelValue:f(le),"onUpdate:modelValue":i[0]||(i[0]=e=>b(le)?le.value=e:null),onClose:i[1]||(i[1]=e=>f(de)(!1))},{default:h((()=>[c("div",G,[c("img",{src:f($),alt:"",class:"header-img"},null,8,J),Q,W])])),_:1},8,["modelValue"])])}}});export{K as default};
