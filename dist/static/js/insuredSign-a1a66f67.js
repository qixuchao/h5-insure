import{d as e,h as a,g as i,bx as s,bN as t,i as n,z as r,av as o,af as l,o as d,c as u,b as c,a as f,u as v,F as p,n as g,l as m,q as h,ac as y,w as b,aw as S,a8 as I,a0 as j,ad as N,aB as C,T as O,az as T,aC as L,a6 as E,b8 as x,aL as D,bO as k,bV as w,aa as U,bK as _,ae as R,am as V,bT as A,bU as q}from"./index-8adcf781.js";import{a as B,b as G}from"./product-bf3a5d86.js";import{n as F}from"./nextStep-c9e3ce28.js";import{g as H,i as M}from"./trial-4664166c.js";import{_ as P,N as z}from"./notice-0b71066d.js";import{u as J}from"./useOrder-d39898d7.js";import{M as $}from"./product-585b0e6f.js";import{f as K,b as W,s as X}from"./verify-8b402e8e.js";import{t as Q}from"./index-418b3936.js";import"./PayInfo-49e70372.js";import{P as Y,B as Z}from"./constants-71331306.js";import{c as ee}from"./scribing-a3ec8e8e.js";import"./core-aba111df.js";import"./constant-8927d485.js";import"./useAttachment-5d1acbba.js";import"./utils-4e05533a.js";import"./infoCollection-16cd423f.js";import"./trial-31da5ed8.js";import"./merge-e7788e50.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./_getTag-0507d0b1.js";import"./debounce-6981b306.js";import"./phoneVerify-d0716a19.js";import"./index-54fb4308.js";import"./useDicData-6e736c53.js";import"./bankCard-1d10c001.js";const ae={class:"long-verify"},ie={class:"header"},se={class:"verify-content"},te={class:"footer-button footer-bar"},ne=f("div",{class:"text"},"刷新",-1),re=e({__name:"insuredSign",setup(e){const re=a(),oe=i(),{productCode:le="",tenantId:de,agentCode:ue="",agencyCode:ce,saleChannelId:fe,saleUserId:ve,orderNo:pe,orderCode:ge,extraInfo:me,isShare:he,insurerCode:ye,preview:be}=re.query;let Se={};try{Se=JSON.parse(decodeURIComponent(me))}catch(Ge){}const Ie=J(),je=`${window.origin}/baseInsurance/long/phoneVerify?${s.stringify({...re.query,orderNo:ge||pe})}`,Ne=new t({source:"localStorage"});n({});const Ce=n({}),Oe=n(),Te=n(),Le=n(),Ee=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),xe=n({}),De=n({}),ke=(e,a)=>{let i=window.location.href;i=i.includes("orderCode")?i:i.replace(/orderNo/g,"orderCode"),W({callbackUrl:i,certiNo:a,faceAuthMode:"TENCENT",userName:e,tenantId:de}).then((({code:i,data:s})=>{if("10000"===i){const{originalUrl:i,serialNo:t}=s;window.location.href=i,l.set("verifyData",{serialNo:t,certNo:a,name:e})}}))},we=n({sign:[],verify:[],scribing:""}),Ue=()=>{if(be)return void C(Y.SIGN,re.query);const e=[];Oe.value&&we.value.sign.includes("1")&&e.push(Oe.value.validateSign()),Te.value&&((he?we.value.sign.includes("4"):we.value.sign.includes("2"))&&e.push(Te.value.validateSign()),we.value.verify.includes("1")&&e.push(Te.value.validateVerify())),Le.value&&((he?we.value.sign.includes("5"):we.value.sign.includes("3"))&&e.push(...(Le.value||[]).map((e=>e.validateSign()))),we.value.verify.includes("2")&&e.push(...(Le.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{!we.value.scribing||xe.value.status?pe&&H({orderNo:ge||pe,saleUserId:ve,tenantId:de}).then((({code:e,data:a})=>{"10000"===e&&T.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{Object.assign(Ie.value,{extInfo:{...Ie.value.extInfo,buttonCode:Z.SIGN,pageCode:Y.SIGN}}),F(Ie.value,((e,a)=>{a===L.JUMP_URL&&(window.location.href=e.paymentUrl)}))}))})):O("请先完成风险抄录")})).catch((e=>{O(e.message)}))},_e=n(),Re=()=>{Oe.value&&we.value.sign.includes("1")&&Oe.value.validateSign().then((()=>{_e.value&&_e.value.handleShare()})).catch((()=>{O("请完成代理人签字后进行分享")}))},Ve=(e=!1)=>{pe&&H({orderNo:ge||pe,tenantId:de}).then((({code:a,data:i})=>{var s,t,n,r,o;"10000"===a&&(e&&((null==(s=null==i?void 0:i.holder)?void 0:s.isCert)===E.NO||(null==i?void 0:i.insuredList.some((e=>e.isCert===E.NO)))?O("用户未完身份认证及签字"):(null==i?void 0:i.tenantOrderAttachmentList.find((e=>e.category===x.ELECTRIC_SIGN&&e.objectType===D.HOLDER)))&&(null==i?void 0:i.tenantOrderAttachmentList.find((e=>e.category===x.ELECTRIC_SIGN&&e.objectType===D.INSURED)))||O("用户未完身份认证及签字")),Object.assign(Ie.value,i),Ee.value.holder.personalInfo=i.holder,Ee.value.insured.personalInfo=i.insuredList,Object.assign(De.value,{type:k[i.extInfo.transcriptionType],signInfo:null==(n=null==(t=i.riskTranscriptionList)?void 0:t[0])?void 0:n.uri,text:null==(o=null==(r=i.riskTranscriptionList)?void 0:r[0])?void 0:o.content,status:!!i.extInfo.transcriptionStatus}),i.tenantOrderAttachmentList.forEach((e=>{e.objectType===z.HOlDER?Ee.value.holder.signData=e.fileBase64:e.objectType===z.AGENT?Ee.value.agent.signData=e.fileBase64:e.objectType===z.INSURED&&(Ee.value.insured.signData[e.objectId]=e.fileBase64)})))}))},Ae=()=>{Ve(!0)},qe=n({imgUrl:"",desc:"",title:"",link:je}),Be=e=>{const{type:a,text:i}=xe.value,s={...re.query,orderNo:ge||pe,text:i,orderId:Ie.value.id};"handle"===a?oe.push({path:"scribing",query:s}):ee({content:i,image:e,orderNo:ge||pe,tenantId:de,transcriptionType:q.AUTO}).then((({code:e})=>{"10000"===e&&Ve()}))};return r([()=>De.value,()=>xe.value],(()=>{Object.assign(xe.value,{type:De.value.type||xe.value.type,text:De.value.text||xe.value.text,status:De.value.status||xe.value.status,signInfo:De.value.signInfo||xe.value.signInfo})}),{deep:!0,immediate:!0}),o((()=>{B({productCode:le,tenantId:de}).then((({data:e,code:a})=>{if("10000"===a){const{wxShareConfig:a,showWXShare:i,title:s,desc:t,image:n}=(null==e?void 0:e.PRODUCT_LIST)||{};i?Object.assign(qe.value,{...a,imgUrl:a.image,isShare:i}):Object.assign(qe.value,{title:s,desc:t,imgUrl:n,isShare:i}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&w(e.BASIC_INFO.themeType)}})),G({productCode:le}).then((({code:e,data:a})=>{var i;if("10000"===e){const{productMaterialMap:e}=(null==(i=a.productInsureMaterialVOList)?void 0:i[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===$.SIGN)).forEach((e=>{e.noticeObject===z.AGENT?Ee.value.agent.fileList.push(e):e.noticeObject===z.HOlDER?Ee.value.holder.fileList.push(e):e.noticeObject===z.INSURED&&Ee.value.insured.fileList.push(e)}))}})),M({productCode:le,isTenant:!be}).then((({data:e,code:a})=>{var i;if("10000"===a){Ce.value=e;const{productFactor:a}=(null==(i=e.productPlanInsureVOList)?void 0:i[0])||{},{signInfo:s}=Q(a);s.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&we.value.sign.push(a.code),"1"===a.code?Ee.value.agent.isSign=!0:"2"===a.code?Ee.value.holder.isSign=!0:"3"===a.code?Ee.value.insured.isSign=!0:"4"===a.code?Ee.value.holder.isShareSign=!0:"5"===a.code&&(Ee.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(xe.value.text=e.remark,we.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?xe.value.type="handle":xe.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&we.value.verify.push(a.code),"1"===a.code?Ee.value.holder.isVerify=!0:"2"===a.code&&(Ee.value.insured.isVerify=!0)}))}))}})),Ve();const e=l.get("verifyData");if(e){const{serialNo:a,certNo:i,name:s}=e;K({certiNo:i,orderNo:ge||pe,serialNo:a,tenantId:de,userName:s}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(Ne.remove("verifyData"),Ve())}))}})),(e,a)=>{const i=U,s=_,t=R,n=V,r=A;return d(),u("div",ae,[c(i),f("div",ie,[c(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),f("div",se,[!v(he)||v(Ee).insured.isShareSign?(d(!0),u(p,{key:0},g(v(Ee).insured.personalInfo||[],(e=>(d(),m(P,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Le,"data-source":[],"order-detail":v(Ie),"sign-string":v(Ee).insured.signData[e.id],"show-sign":v(he)?v(Ee).insured.isShareSign:v(Ee).insured.isSign,"show-verify":v(Ee).insured.isVerify,"file-list":v(Ee).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:a=>((e,a,i)=>{var s;X(e,a,null==(s=Ie.value)?void 0:s.id,de,i)})("INSURED",a,e.id),onHandleVerify:ke},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):h("",!0)]),f("div",te,[f("div",{class:"refresh-btn",onClick:Ae},[f("div",null,[c(t,{name:"refresh"})]),ne]),!v(he)&&v(y)()?(d(),m(N,j({key:0,ref_key:"shareRef",ref:_e},v(qe)),{default:b((()=>[c(n,{plain:"",type:"primary",class:"share-btn",onClick:S(Re,["stop"])},{default:b((()=>[I("分享")])),_:1},8,["onClick"])])),_:1},16)):h("",!0),c(n,{type:"primary",class:"submit-btn",onClick:Ue},{default:b((()=>[I("确认支付")])),_:1})]),v(we).scribing?(d(),m(r,j({key:0},v(xe),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:Be}),null,16)):h("",!0)])}}});export{re as default};
