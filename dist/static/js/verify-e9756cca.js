import{d as e,r as a,L as i,z as s,V as n,a3 as t,b as l,c as r,e as o,w as d,i as c,E as u,f,F as v,Y as g,h,j as p,g as m,a0 as y,C as S,a4 as b,a5 as I,u as w,Q as C,a6 as j,o as N,t as k,$ as _,a7 as L,a8 as V,a9 as O,aa as E,ab as D,p as T,D as x,P as R,T as U,ac as B,ad as P,a1 as A,n as F,ae as Y,B as H}from"./index-c26f5a93.js";import{a as M,q as $}from"./product-d78387f3.js";import{n as q}from"./nextStep-39295eaa.js";import{g as G,i as J}from"./trial-44de14b5.js";import{u as W}from"./useAttachment-b620ecda.js";import{_ as z,f as Q,a as X,s as K}from"./verify-79913f96.js";import{u as Z}from"./useOrder-df0ef165.js";import{t as ee}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-fdba5f9b.js";/* empty css              */import"./useDicData-0f88d076.js";import"./bankCard-629ea58c.js";import{P as ae,B as ie}from"./constants-7afb7c3d.js";import"./core-a8795616.js";import"./constant-8927d485.js";import"./utils-1af35aa3.js";import"./infoCollection-c963ab8b.js";import"./trial-d2eb8ecc.js";import"./merge-84cb998c.js";import"./keysIn-b1e7a5ec.js";import"./isObjectLike-a9798079.js";import"./phoneVerify-abb10f52.js";const se={class:"com-sign-part"},ne={class:"people"},te={class:"name"},le={key:0,class:"verify-item"},re=c("div",{class:"label"},"证件号码",-1),oe={class:"no"},de={class:"sign-status"},ce={class:"status"},ue=["src"],fe={key:1,class:"sign-desc"},ve={class:"sign-body"},ge={class:"date"},he={class:"file"},pe=e({name:"signPart"}),me=e({...pe,props:{signString:{default:""},personalInfo:{default:()=>({})},fileList:null,title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:w,emit:C}){const j=e,N=a({}),k=a(""),_=a([]),L=a({});a(!0);const V=a(!1),O=a(0),{fileList:E}=W(L,_),D=e=>`${e}`===S.CERT,T=i((()=>s().format("YYYY-MM-DD"))),x=()=>{var e,a;C("handleVerify",null==(e=N.value)?void 0:e.name,null==(a=N.value)?void 0:a.certNo)},R=()=>{V.value=!1},U=a(),B=()=>{U.value&&U.value.rewrite()},P=()=>{j.disabled||U.value&&U.value.openSign()},A=e=>{C("handleSign",e)};return w({validateSign:()=>new Promise(((e,a)=>{k.value?e(!0):a(new Error(`请${j.title}完成签名后，去支付`))})),validateVerify:()=>new Promise(((e,a)=>{var i;(null==(i=j.personalInfo)?void 0:i.isCert)!==g.YES?a(new Error(`请${j.title}完成认证后，去支付`)):e(!0)}))}),n((()=>j.signString),(()=>{k.value=j.signString}),{immediate:!0}),n((()=>j.personalInfo),(()=>{N.value=j.personalInfo}),{deep:!0,immediate:!0}),(a,i)=>{const s=b,n=I,S=t("AttachmentList"),w=t("FilePreview");return l(),r("div",se,[o(n,{title:e.title,class:"card"},{extra:d((()=>{var a,i,s,n;return[c("div",ne,[c("div",te,u(null==(a=f(N))?void 0:a.name),1),e.showVerify&&D(null==(i=f(N))?void 0:i.certType)?(l(),r("div",{key:0,class:v(["status",{verified:(null==(s=f(N))?void 0:s.isCert)===f(g).YES}])},u((null==(n=f(N))?void 0:n.isCert)===f(g).YES?"已认证":"待认证"),3)):h("",!0)])]})),default:d((()=>{var a,i,n,t;return[e.showVerify&&(null==(a=f(N))?void 0:a.certNo)?(l(),r("div",le,[re,c("div",oe,u(null==(i=f(N))?void 0:i.certNo),1),(null==(n=f(N))?void 0:n.isCert)!==f(g).YES&&D(null==(t=f(N))?void 0:t.certType)?(l(),r("div",{key:0,class:"action",onClick:x},[p(" 去认证 "),o(s,{name:"right_arrow",class:"icon"})])):h("",!0)])):h("",!0)]})),_:1},8,["title"]),e.showSign?(l(),m(n,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:d((()=>[c("div",de,[c("div",ce,u(f(k)?"已签名":"未签名"),1),e.disabled?h("",!0):(l(),r("div",{key:0,class:"resign",onClick:B},"重签"))])])),default:d((()=>{var e;return[o(z,{ref_key:"signRef",ref:U,modelValue:f(k),"onUpdate:modelValue":i[0]||(i[0]=e=>y(k)?k.value=e:null),class:"sign",onSubmitSign:A},{signImg:d((({data:e})=>[c("div",{class:"sign-board",onClick:P},[e?(l(),r("img",{key:0,src:e,class:"sign-img",alt:""},null,8,ue)):(l(),r("span",fe,"请签名"))])])),_:1},8,["modelValue"]),c("div",ve,[c("div",ge,"签名日期： "+u(f(T)),1),c("div",he,[(null==(e=f(E))?void 0:e.length)?(l(),m(S,{key:0,"attachment-list":f(E),"pre-text":"签名将被用于以下文件：",onPreviewFile:i[1]||(i[1]=e=>(e=>{O.value=e,V.value=!0})(e))},null,8,["attachment-list"])):h("",!0)])])]})),_:1},8,["title"])):h("",!0),f(V)?(l(),m(w,{key:1,show:f(V),"onUpdate:show":i[2]||(i[2]=e=>y(V)?V.value=e:null),"content-list":f(E),"is-only-view":"","active-index":f(O),text:"关闭",onOnCloseFilePreviewByMask:R},null,8,["show","content-list","active-index"])):h("",!0)])}}}),ye=2,Se=1,be=2,Ie=3;const we={class:"long-verify"},Ce={class:"header"},je={class:"verify-content"},Ne={class:"footer-button footer-bar"},ke=c("div",{class:"text"},"刷新",-1),_e=e({__name:"verify",setup(e){const i=w(),{productCode:s="",tenantId:n,agentCode:t="",agencyCode:u,saleChannelId:v,saleUserId:y,orderNo:S,orderCode:I,extraInfo:W,isShare:z,insurerCode:se,preview:ne}=i.query;let te={};try{te=JSON.parse(decodeURIComponent(W))}catch(Te){}const le=Z(),re=`${window.origin}/baseInsurance/long/phoneVerify?${C.stringify({...i.query,orderNo:I||S})}`;console.log("shareLink",re);const oe=new j({source:"localStorage"});a({});const de=a({}),ce=a(),ue=a(),fe=a(),ve=a({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ge=(e,a)=>{let i=window.location.href;i=i.includes("orderCode")?i:i.replace("orderNo","orderCode"),X({callbackUrl:i,certiNo:a,faceAuthMode:"TENCENT",userName:e,tenantId:n}).then((({code:i,data:s})=>{if("10000"===i){const{originalUrl:i,serialNo:n}=s;window.location.href=i,k.set("verifyData",{serialNo:n,certNo:a,name:e})}}))},he=(e,a,i)=>{var s;K(e,a,null==(s=le.value)?void 0:s.id,n,i)},pe=a({sign:[],verify:[]}),_e=()=>{if(ne)return void T(ae.SIGN,i.query);const e=[];ce.value&&pe.value.sign.includes("1")&&e.push(ce.value.validateSign()),ue.value&&((z?pe.value.sign.includes("4"):pe.value.sign.includes("2"))&&e.push(ue.value.validateSign()),pe.value.verify.includes("1")&&e.push(ue.value.validateVerify())),fe.value&&((z?pe.value.sign.includes("5"):pe.value.sign.includes("3"))&&e.push(...(fe.value||[]).map((e=>e.validateSign()))),pe.value.verify.includes("2")&&e.push(...(fe.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{S&&G({orderNo:I||S,saleUserId:y,tenantId:n}).then((({code:e,data:a})=>{"10000"===e&&x.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{Object.assign(le.value,{extInfo:{...le.value.extInfo,buttonCode:ie.SIGN,pageCode:ae.SIGN}}),q(le.value,((e,a)=>{a===R.JUMP_URL&&(window.location.href=e.paymentUrl)}))}))}))})).catch((e=>{U(e.message)}))},Le=a(),Ve=()=>{ce.value.validateSign().then((()=>{Le.value&&Le.value.handleShare()})).catch((()=>{U("请完成代理人签字后进行分享")}))},Oe=(e=!1)=>{S&&G({orderNo:I||S,tenantId:n}).then((({code:a,data:i})=>{var s;"10000"===a&&(e&&((null==(s=null==i?void 0:i.holder)?void 0:s.isCert)===g.NO||(null==i?void 0:i.insuredList.some((e=>e.isCert===g.NO)))?U("用户未完身份认证及签字"):(null==i?void 0:i.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.HOLDER)))&&(null==i?void 0:i.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.INSURED)))||U("用户未完身份认证及签字")),Object.assign(le.value,i),ve.value.holder.personalInfo=i.holder,ve.value.insured.personalInfo=i.insuredList,i.tenantOrderAttachmentList.forEach((e=>{e.objectType===Se?ve.value.holder.signData=e.fileBase64:e.objectType===Ie?ve.value.agent.signData=e.fileBase64:e.objectType===be&&(ve.value.insured.signData[e.objectId]=e.fileBase64)})))}))},Ee=()=>{Oe(!0)},De=a({imgUrl:"",desc:"",title:"",link:re});return N((()=>{M({productCode:s,tenantId:n}).then((({data:e,code:a})=>{if("10000"===a){const{wxShareConfig:a,showWXShare:i,title:s,desc:n,image:t}=(null==e?void 0:e.PRODUCT_LIST)||{};i?Object.assign(De.value,{...a,imgUrl:a.image,isShare:i}):Object.assign(De.value,{title:s,desc:n,imgUrl:t,isShare:i}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&A(e.BASIC_INFO.themeType)}})),$({productCode:s}).then((({code:e,data:a})=>{var i;if("10000"===e){const{productMaterialMap:e}=(null==(i=a.productInsureMaterialVOList)?void 0:i[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===ye)).forEach((e=>{e.noticeObject===Ie?ve.value.agent.fileList.push(e):e.noticeObject===Se?ve.value.holder.fileList.push(e):e.noticeObject===be&&ve.value.insured.fileList.push(e)}))}})),J({productCode:s,isTenant:!ne}).then((({data:e,code:a})=>{var i;if("10000"===a){de.value=e;const{productFactor:a}=(null==(i=e.productPlanInsureVOList)?void 0:i[0])||{},{signInfo:s}=ee(a);s.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&pe.value.sign.push(a.code),"1"===a.code?ve.value.agent.isSign=!0:"2"===a.code?ve.value.holder.isSign=!0:"3"===a.code?ve.value.insured.isSign=!0:"4"===a.code?ve.value.holder.isShareSign=!0:"5"===a.code&&(ve.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&pe.value.verify.push(a.code),"1"===a.code?ve.value.holder.isVerify=!0:"2"===a.code&&(ve.value.insured.isVerify=!0)}))}))}})),Oe();const e=k.get("verifyData");if(e){const{serialNo:a,certNo:i,name:s}=e;Q({certiNo:i,orderNo:I||S,serialNo:a,tenantId:n,userName:s}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(oe.remove("verifyData"),Oe())}))}})),(e,a)=>{const i=F,s=Y,n=b,t=H;return l(),r("div",we,[o(i),c("div",Ce,[o(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),c("div",je,[o(me,{ref_key:"agentSignRef",ref:ce,"order-detail":f(le),"sign-string":f(ve).agent.signData,"show-sign":f(ve).agent.isSign,"show-verify":f(ve).agent.isVerify,"file-list":f(ve).agent.fileList,"personal-info":f(ve).agent.personalInfo,disabled:!!f(z),title:"代理人",onHandleSign:a[0]||(a[0]=e=>he("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"]),!f(z)||f(ve).holder.isShareSign?(l(),m(me,{key:0,ref_key:"holderSignRef",ref:ue,"order-detail":f(le),"sign-string":f(ve).holder.signData,"show-sign":f(z)?f(ve).holder.isShareSign:f(ve).holder.isSign,"show-verify":f(ve).holder.isVerify,"file-list":f(ve).holder.fileList,"personal-info":f(ve).holder.personalInfo,title:"投保人",onHandleSign:a[1]||(a[1]=e=>he("HOLDER",e,f(ve).holder.personalInfo.id)),onHandleVerify:ge},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):h("",!0),!f(z)||f(ve).insured.isShareSign?(l(!0),r(_,{key:1},L(f(ve).insured.personalInfo||[],(e=>(l(),m(me,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:fe,"data-source":[],"order-detail":f(le),"sign-string":f(ve).insured.signData[e.id],"show-sign":f(z)?f(ve).insured.isShareSign:f(ve).insured.isSign,"show-verify":f(ve).insured.isVerify,"file-list":f(ve).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:a=>he("INSURED",a,e.id),onHandleVerify:ge},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):h("",!0)]),c("div",Ne,[c("div",{class:"refresh-btn",onClick:Ee},[c("div",null,[o(n,{name:"refresh"})]),ke]),!f(z)&&f(V)()?(l(),m(D,O({key:0,ref_key:"shareRef",ref:Le},f(De),{onClick:E(Ve,["stop"])}),{default:d((()=>[o(t,{plain:"",type:"primary",class:"share-btn"},{default:d((()=>[p("分享")])),_:1})])),_:1},16,["onClick"])):h("",!0),o(t,{type:"primary",class:"submit-btn",onClick:_e},{default:d((()=>[p("确认支付")])),_:1})])])}}});export{_e as default};
