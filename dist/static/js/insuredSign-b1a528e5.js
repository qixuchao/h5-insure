import{d as e,i,h as a,ce as s,c5 as n,j as o,bc as t,l as r,o as l,c as d,b as u,a as c,u as f,F as g,s as p,p as m,f as v,w as h,v as S,q as b,cQ as y,bj as j,bb as I,cO as w,cP as D,c4 as N,bd as L,T as O,bO as E,a$ as V,cR as q,b3 as C}from"./index-d3f9fc28.js";import{b as R}from"./product-8a7a82f0.js";import{g as U,m as _}from"./trial-c58bb7da.js";import{_ as B,q as P}from"./qianming-9d14ef01.js";import{u as T}from"./useOrder-d193ce0d.js";import{N as k}from"./notice-f5946ff5.js";import"./PolicyInfo-bee3f88f.js";import{p as $}from"./utils-78748ddc.js";import{g as x}from"./utils-d7484c67.js";import{i as z}from"./core-898274a1.js";import{_ as M}from"./MessagePopup-2aa067f1.js";import"./index-8ab3e63b.js";import"./cloneDeep-66e92211.js";import"./utils-cc08f6dd.js";import"./createProposal-aafa0128.js";import"./trial-7691e47a.js";import"./infoCollection-9abada6b.js";const F={class:"long-verify"},A={class:"header"},H={class:"verify-content"},G={class:"footer-button footer-bar"},J={class:"content-inner"},Q=["src"],W=c("h4",null,"本次签名已完成",-1),K=c("p",null,"感谢您对本次投保的签字确认，后续流程由销售人员在您的配合下进行",-1),X=e({__name:"insuredSign",setup(e){const X=i(),Y=a(),{tenantId:Z,orderNo:ee,orderCode:ie,extraInfo:ae,isShare:se,insurerCode:ne,preview:oe}=X.query;let te={};try{te=JSON.parse(decodeURIComponent(ae))}catch(he){}const re=T(),[le,de]=s(!1),ue=`${window.origin}/baseInsurance/long/phoneVerify?${n.stringify({...X.query,orderNo:ie||ee})}`,ce=o(),fe=o({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},compositionSign:""},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ge=(e,i,a)=>{var s;y(e,i,null==(s=re.value)?void 0:s.id,Z,a).then((()=>{ee&&U({orderNo:ie||ee,tenantId:Z}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.tenantOrderAttachmentList.forEach((i=>{i.objectType===k.INSURED&&(30===i.category?e[i.objectId]?e[i.objectId].push(i.fileBase64):e[i.objectId]=[i.fileBase64]:21===i.category&&(fe.value.insured.compositionSign=i.uri))})),fe.value.insured.signData=e}}))}))},pe=o({sign:[],verify:[],scribing:""}),me=()=>{if(oe)return void j(I.SIGN,X.query);const e=[];ce.value&&((se?pe.value.sign.includes("5"):pe.value.sign.includes("3"))&&e.push(...(ce.value||[]).map((e=>e.validateSign()))),pe.value.verify.includes("2")&&e.push(...(ce.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{w({bizObjectId:re.value.insuredList.map((e=>e.id)),bizObjectType:D.INSURED,orderId:re.value.id,tenantId:Z,shareFlag:se?1:2}).then((({code:e,data:i})=>{if("10000"===e&&i){if(se)return de(!0),void setTimeout((()=>{z?N.closeWindow():window.close()}),2e3);Y.push({path:L.sign,query:X.query})}}))})).catch((e=>{O(e.message)}))};o({imgUrl:"",desc:"",title:"",link:ue});t((()=>{(async()=>{let e={};const{code:i,data:a}=await U({orderNo:ie||ee,tenantId:Z});"10000"===i&&(Object.assign(re.value,a),fe.value.insured.personalInfo=a.insuredList.map((e=>(e.isCert=1,e))),e=$(a.insuredList[0].productList),a.tenantOrderAttachmentList.forEach((e=>{e.objectType===k.INSURED&&e.objectId&&(30===e.category?fe.value.insured.signData[e.objectId]?fe.value.insured.signData[e.objectId].push(e.fileBase64):fe.value.insured.signData[e.objectId]=[e.fileBase64]:21===e.category&&(fe.value.insured.compositionSign=e.uri))}))),R(e).then((({code:e,data:i})=>{var a;if("10000"===e){const{signMaterialMap:e}=(null==(a=i.productMaterialPlanVOList)?void 0:a[1])||{};(Object.values(e||[]).flat()||[]).forEach((e=>{e.noticeObject===k.INSURED&&fe.value.insured.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:x(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),_(e).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=E(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&pe.value.sign.push(i.code),"1"===i.code?fe.value.agent.isSign=!0:"2"===i.code?fe.value.holder.isSign=!0:"3"===i.code?fe.value.insured.isSign=!0:"4"===i.code?fe.value.holder.isShareSign=!0:"5"===i.code&&(fe.value.insured.isShareSign=!0)}))}))}}))})()}));const ve=o();return r((()=>{setTimeout((async()=>{ve.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,i)=>{var a,s,n,o;const t=V,r=q,y=C;return l(),d("div",F,[u(t),c("div",A,[u(r,{type:"warning",content:(null==(s=null==(a=f(fe).insured.personalInfo)?void 0:a[0])?void 0:s.name)&&`本人${null==(o=null==(n=f(fe).insured.personalInfo)?void 0:n[0])?void 0:o.name}已阅读并同意签署《电子投保单》（投保信息确认）`},null,8,["content"])]),c("div",H,[!f(se)||f(fe).insured.isShareSign?(l(!0),d(g,{key:0},p(f(fe).insured.personalInfo||[],(e=>(l(),m(B,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:ce,"data-source":[],"order-detail":f(re),"sign-string":f(fe).insured.signData[e.id],"show-sign":f(se)?f(fe).insured.isShareSign:f(fe).insured.isSign,"show-verify":f(fe).insured.isVerify,"file-list":f(fe).insured.fileList,"personal-info":e||{},"composition-sign":f(fe).insured.compositionSign,title:"被保险人",onHandleSign:i=>ge("INSURED",i,e.id)},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","composition-sign","onHandleSign"])))),128)):v("",!0)]),c("div",G,[u(y,{type:"primary",class:"submit-btn",onClick:me},{default:h((()=>[S("确定")])),_:1})]),u(M,{modelValue:f(le),"onUpdate:modelValue":i[0]||(i[0]=e=>b(le)?le.value=e:null),onClose:i[1]||(i[1]=e=>f(de)(!1))},{default:h((()=>[c("div",J,[c("img",{src:f(P),alt:"",class:"header-img"},null,8,Q),W,K])])),_:1},8,["modelValue"])])}}});export{X as default};
