import{d as e,aV as a,aW as i,i as s,h as n,c5 as t,cd as o,j as r,ad as l,af as c,bc as d,l as u,o as g,c as f,b as m,a as p,u as v,w as h,v as y,q as b,bj as S,bb as j,cO as I,cP as _,y as w,T as E,cQ as O,bO as N,a$ as V,cR as L,b3 as T}from"./index-c3cf1687.js";import{b as C}from"./product-a26614c3.js";import{g as q,m as A}from"./trial-68058ee6.js";import{_ as D,q as P,a as $}from"./qianming-e27e9d77.js";import{u as x}from"./useOrder-efbb7134.js";import{N as G}from"./notice-a66a7f8f.js";import"./PolicyInfo-56d27203.js";import{p as R}from"./utils-f325dc8a.js";import{g as z}from"./utils-2209ca51.js";import"./index-37849be1.js";import"./cloneDeep-a998f2d4.js";import"./utils-bb9ebdc9.js";import"./createProposal-6be996f8.js";import"./trial-7cc2dfd6.js";import"./infoCollection-e9e6e95d.js";const B={class:"long-verify"},U={class:"header"},k={class:"verify-content"},M={class:"footer-button"},F={class:"content-inner"},H=["src"],J=p("h4",null,"本次签名已完成",-1),Q=p("p",null,"感谢您对本次投保的签字确认，后续流程由销售人员在您的配合下进行",-1),W=e({__name:"agentSign",setup(e){a((()=>i((()=>import("./index-7b6f7202.js")),["static/js/index-7b6f7202.js","static/css/index-4822eb94.css","static/js/index-c3cf1687.js","static/css/index-dbb15c91.css"]))),a((()=>i((()=>import("./index-9f261cc3.js")),["static/js/index-9f261cc3.js","static/css/index-fa4edf2a.css","static/js/index-c3cf1687.js","static/css/index-dbb15c91.css","static/js/theme-94cf7d00.js","static/js/index-ca5fa9a2.js","static/css/index-bbfdd7ec.css","static/js/utils-2209ca51.js","static/js/infoCollection-e9e6e95d.js","static/js/trial-7cc2dfd6.js"])));const W=s(),K=n(),{productCode:X="",tenantId:Y,agentCode:Z="",agencyCode:ee,saleChannelId:ae,saleUserId:ie,orderNo:se,orderCode:ne,extraInfo:te,isShare:oe,insurerCode:re,preview:le}=W.query;let ce={};try{ce=JSON.parse(decodeURIComponent(te))}catch(je){}const de=x(),ue=`${window.origin}/baseInsurance/long/phoneVerify?${t.stringify({...W.query,orderNo:ne||se})}`,[ge,fe]=o(!1),me=r(),pe=l.get(`${c}_userInfo`),ve=r({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{name:(null==pe?void 0:pe.name)||""},isSign:!1,isVerify:!1,isShareSign:!1,signData:[],compositionSign:""}}),he=r({sign:[],verify:[],scribing:""}),ye=()=>{if(le)return void S(j.SIGN,W.query);const e=[];me.value&&he.value.sign.includes("1")&&e.push(me.value.validateSign()),Promise.all(e).then((e=>{I({bizObjectId:[],bizObjectType:_.AGENT,orderId:de.value.id,tenantId:Y}).then((({code:e,data:a})=>{"10000"===e&&a&&K.push({path:w.sign,query:W.query})}))})).catch((e=>{E(e.message)}))};r();const be=(e,a,i)=>{var s;O(e,a,null==(s=de.value)?void 0:s.id,Y,i).then((()=>{se&&q({orderNo:ne||se,tenantId:Y}).then((({code:e,data:a})=>{if("10000"===e){Object.assign(de.value,a);const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===G.AGENT&&(30===a.category?e.push(a.fileBase64):21===a.category&&(ve.value.agent.compositionSign=a.uri))})),ve.value.agent.signData=e}}))}))};r({imgUrl:"",desc:"",title:"",link:ue});d((()=>{(async()=>{let e={};const{code:a,data:i}=await q({orderNo:se,tenantId:Y});"10000"===a&&(Object.assign(de.value,i),e=R(i.insuredList[0].productList),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===G.AGENT&&(30===e.category?ve.value.agent.signData.push(e.fileBase64):21===e.category&&(ve.value.agent.compositionSign=e.uri))}))),C(e).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===G.AGENT&&ve.value.agent.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:z(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),A(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=N(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&he.value.sign.push(a.code),"1"===a.code?ve.value.agent.isSign=!0:"2"===a.code?ve.value.holder.isSign=!0:"3"===a.code?ve.value.insured.isSign=!0:"4"===a.code?ve.value.holder.isShareSign=!0:"5"===a.code&&(ve.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&he.value.verify.push(a.code),"1"===a.code?ve.value.holder.isVerify=!0:"2"===a.code&&(ve.value.insured.isVerify=!0)}))}))}}))})()}));const Se=r();return u((()=>{setTimeout((async()=>{Se.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{var i,s;const n=V,t=L,o=T;return g(),f("div",B,[m(n),p("div",U,[m(t,{type:"warning",content:`本人${null==(i=v(pe))?void 0:i.name}已面晤投保人、被保险人(被保险人为未成年人的，还包括其法定监护人)，投保过程中的告知事项已逐一向投保人、被保险人/法定监护人当面询问，并亲自见证投保人、被保险人/法定监护人在电子投保单上签名。如有不实见证或报告，本人愿承担相应的法律责任。请${null==(s=v(pe))?void 0:s.name}签名确认。`},null,8,["content"])]),p("div",k,[m(D,{ref_key:"agentSignRef",ref:me,"order-detail":v(de),"sign-string":v(ve).agent.signData,"show-sign":v(ve).agent.isSign,"show-verify":v(ve).agent.isVerify,"file-list":v(ve).agent.fileList,"personal-info":v(ve).agent.personalInfo,"composition-sign":v(ve).agent.compositionSign,disabled:!!v(oe),title:"销售人员",onHandleSign:a[0]||(a[0]=e=>be("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","composition-sign","disabled"])]),p("div",M,[m(o,{type:"primary",onClick:ye},{default:h((()=>[y("确定")])),_:1})]),m($,{modelValue:v(ge),"onUpdate:modelValue":a[1]||(a[1]=e=>b(ge)?ge.value=e:null),onClose:a[2]||(a[2]=e=>v(fe)(!1))},{default:h((()=>[p("div",F,[p("img",{src:v(P),alt:"",class:"header-img"},null,8,H),J,Q])])),_:1},8,["modelValue"])])}}});export{W as default};
