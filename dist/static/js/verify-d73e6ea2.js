import{d as e,r as a,L as i,y as s,R as n,b as t,c as l,A as r,i as o,w as d,f as u,E as c,g as f,F as v,Z as g,h,j as p,e as m,a3 as y,C as S,ab as b,b4 as I,u as w,Q as C,ar as j,o as N,s as _,U as k,V as L,aX as O,aY as V,aa as E,bA as D,n as T,D as x,P as R,T as U,ba as P,aQ as B,a4 as A,bB as F,B as Y}from"./index-94402cfa.js";import{a as H,q as M}from"./product-e6bb73ac.js";import{n as q}from"./nextStep-9786b9b6.js";import{g as G,i as $}from"./trial-30551091.js";import{u as W}from"./useAttachment-8eabe962.js";import{_ as J,f as Q,a as X,s as Z}from"./verify-9e08baee.js";import{u as z}from"./useOrder-c76f7809.js";import{t as K}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-d4edb8b3.js";/* empty css              */import"./useDicData-f4b2efeb.js";import"./bankCard-82da1d42.js";import{P as ee,B as ae}from"./constants-7afb7c3d.js";import"./pdfh5-008ca364.js";import"./core-4839da8a.js";import"./constant-8927d485.js";import"./utils-4c3d0d65.js";import"./infoCollection-d37b6eea.js";import"./trial-8a336249.js";import"./phoneVerify-04df90e5.js";import"./_initCloneObject-da8458a4.js";import"./isObjectLike-a9798079.js";const ie={class:"com-sign-part"},se={class:"people"},ne={class:"name"},te={key:0,class:"verify-item"},le=u("div",{class:"label"},"证件号码",-1),re={class:"no"},oe={class:"sign-status"},de={class:"status"},ue=["src"],ce={key:1,class:"sign-desc"},fe={class:"sign-body"},ve={class:"date"},ge={class:"file"},he=e({name:"signPart"}),pe=e({...he,props:{signString:{default:""},personalInfo:{default:()=>({})},fileList:null,title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:w,emit:C}){const j=e,N=a({}),_=a(""),k=a([]),L=a({});a(!0);const O=a(!1),V=a(0),{fileList:E}=W(L,k),D=e=>`${e}`===S.CERT,T=i((()=>s().format("YYYY-MM-DD"))),x=()=>{var e,a;C("handleVerify",null==(e=N.value)?void 0:e.name,null==(a=N.value)?void 0:a.certNo)},R=()=>{O.value=!1},U=a(),P=()=>{U.value&&U.value.rewrite()},B=()=>{j.disabled||U.value&&U.value.openSign()},A=e=>{C("handleSign",e)};return w({validateSign:()=>new Promise(((e,a)=>{_.value?e(!0):a(new Error(`请${j.title}完成签名后，去支付`))})),validateVerify:()=>new Promise(((e,a)=>{var i;(null==(i=j.personalInfo)?void 0:i.isCert)!==g.YES?a(new Error(`请${j.title}完成认证后，去支付`)):e(!0)}))}),n((()=>j.signString),(()=>{_.value=j.signString}),{immediate:!0}),n((()=>j.personalInfo),(()=>{N.value=j.personalInfo}),{deep:!0,immediate:!0}),(a,i)=>{const s=b,n=I,S=t("AttachmentList"),w=t("FilePreview");return l(),r("div",ie,[o(n,{title:e.title,class:"card"},{extra:d((()=>{var a,i,s,n;return[u("div",se,[u("div",ne,c(null==(a=f(N))?void 0:a.name),1),e.showVerify&&D(null==(i=f(N))?void 0:i.certType)?(l(),r("div",{key:0,class:v(["status",{verified:(null==(s=f(N))?void 0:s.isCert)===f(g).YES}])},c((null==(n=f(N))?void 0:n.isCert)===f(g).YES?"已认证":"待认证"),3)):h("",!0)])]})),default:d((()=>{var a,i,n,t;return[e.showVerify&&(null==(a=f(N))?void 0:a.certNo)?(l(),r("div",te,[le,u("div",re,c(null==(i=f(N))?void 0:i.certNo),1),(null==(n=f(N))?void 0:n.isCert)!==f(g).YES&&D(null==(t=f(N))?void 0:t.certType)?(l(),r("div",{key:0,class:"action",onClick:x},[p(" 去认证 "),o(s,{name:"right_arrow",class:"icon"})])):h("",!0)])):h("",!0)]})),_:1},8,["title"]),e.showSign?(l(),m(n,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:d((()=>[u("div",oe,[u("div",de,c(f(_)?"已签名":"未签名"),1),e.disabled?h("",!0):(l(),r("div",{key:0,class:"resign",onClick:P},"重签"))])])),default:d((()=>{var e;return[o(J,{ref_key:"signRef",ref:U,modelValue:f(_),"onUpdate:modelValue":i[0]||(i[0]=e=>y(_)?_.value=e:null),class:"sign",onSubmitSign:A},{signImg:d((({data:e})=>[u("div",{class:"sign-board",onClick:B},[e?(l(),r("img",{key:0,src:e,class:"sign-img",alt:""},null,8,ue)):(l(),r("span",ce,"请签名"))])])),_:1},8,["modelValue"]),u("div",fe,[u("div",ve,"签名日期： "+c(f(T)),1),u("div",ge,[(null==(e=f(E))?void 0:e.length)?(l(),m(S,{key:0,"attachment-list":f(E),"pre-text":"签名将被用于以下文件：",onPreviewFile:i[1]||(i[1]=e=>(e=>{V.value=e,O.value=!0})(e))},null,8,["attachment-list"])):h("",!0)])])]})),_:1},8,["title"])):h("",!0),f(O)?(l(),m(w,{key:1,show:f(O),"onUpdate:show":i[2]||(i[2]=e=>y(O)?O.value=e:null),"content-list":f(E),"is-only-view":"","active-index":f(V),text:"关闭",onOnCloseFilePreviewByMask:R},null,8,["show","content-list","active-index"])):h("",!0)])}}}),me=2,ye=1,Se=2,be=3;const Ie={class:"long-verify"},we={class:"header"},Ce={class:"verify-content"},je={class:"footer-button footer-bar"},Ne=u("div",{class:"text"},"刷新",-1),_e=e({__name:"verify",setup(e){const i=w(),{productCode:s="",tenantId:n,agentCode:c="",agencyCode:v,saleChannelId:y,saleUserId:S,orderNo:I,orderCode:W,extraInfo:J,isShare:ie,insurerCode:se,preview:ne}=i.query;let te={};try{te=JSON.parse(decodeURIComponent(J))}catch(Te){}const le=z(),re=`${window.origin}/baseInsurance/long/phoneVerify?${C.stringify({...i.query,orderNo:W||I})}`;console.log("shareLink",re);const oe=new j({source:"localStorage"});a({});const de=a({}),ue=a(),ce=a(),fe=a(),ve=a({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ge=(e,a)=>{let i=window.location.href;i=i.includes("orderCode")?i:i.replace("orderNo","orderCode"),X({callbackUrl:i,certiNo:a,faceAuthMode:"TENCENT",userName:e,tenantId:n}).then((({code:i,data:s})=>{if("10000"===i){const{originalUrl:i,serialNo:n}=s;window.location.href=i,_.set("verifyData",{serialNo:n,certNo:a,name:e})}}))},he=(e,a,i)=>{var s;Z(e,a,null==(s=le.value)?void 0:s.id,n,i)},_e=a({sign:[],verify:[]}),ke=()=>{if(ne)return void T(ee.SIGN,i.query);const e=[];ue.value&&_e.value.sign.includes("1")&&e.push(ue.value.validateSign()),ce.value&&((ie?_e.value.sign.includes("4"):_e.value.sign.includes("2"))&&e.push(ce.value.validateSign()),_e.value.verify.includes("1")&&e.push(ce.value.validateVerify())),fe.value&&((ie?_e.value.sign.includes("5"):_e.value.sign.includes("3"))&&e.push(...(fe.value||[]).map((e=>e.validateSign()))),_e.value.verify.includes("2")&&e.push(...(fe.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{I&&G({orderNo:W||I,saleUserId:S,tenantId:n}).then((({code:e,data:a})=>{"10000"===e&&x.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{Object.assign(le.value,{extInfo:{...le.value.extInfo,buttonCode:ae.SIGN,pageCode:ee.SIGN}}),q(le.value,((e,a)=>{a===R.JUMP_URL&&(window.location.href=e.paymentUrl)}))}))}))})).catch((e=>{U(e.message)}))},Le=a(),Oe=()=>{ue.value.validateSign().then((()=>{Le.value&&Le.value.handleShare()})).catch((()=>{U("请完成代理人签字后进行分享")}))},Ve=(e=!1)=>{I&&G({orderNo:W||I,tenantId:n}).then((({code:a,data:i})=>{var s;"10000"===a&&(e&&((null==(s=null==i?void 0:i.holder)?void 0:s.isCert)===g.NO||(null==i?void 0:i.insuredList.some((e=>e.isCert===g.NO)))?U("用户未完身份认证及签字"):(null==i?void 0:i.tenantOrderAttachmentList.find((e=>e.category===P.ELECTRIC_SIGN&&e.objectType===B.HOLDER)))&&(null==i?void 0:i.tenantOrderAttachmentList.find((e=>e.category===P.ELECTRIC_SIGN&&e.objectType===B.INSURED)))||U("用户未完身份认证及签字")),Object.assign(le.value,i),ve.value.holder.personalInfo=i.holder,ve.value.insured.personalInfo=i.insuredList,i.tenantOrderAttachmentList.forEach((e=>{e.objectType===ye?ve.value.holder.signData=e.fileBase64:e.objectType===be?ve.value.agent.signData=e.fileBase64:e.objectType===Se&&(ve.value.insured.signData[e.objectId]=e.fileBase64)})))}))},Ee=()=>{Ve(!0)},De=a({imgUrl:"",desc:"",title:"",link:re});return N((()=>{H({productCode:s,tenantId:n}).then((({data:e,code:a})=>{if("10000"===a){const{wxShareConfig:a,showWXShare:i,title:s,desc:n,image:t}=(null==e?void 0:e.PRODUCT_LIST)||{};i?Object.assign(De.value,{...a,imgUrl:a.image,isShare:i}):Object.assign(De.value,{title:s,desc:n,imgUrl:t,isShare:i}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&A(e.BASIC_INFO.themeType)}})),M({productCode:s}).then((({code:e,data:a})=>{var i;if("10000"===e){const{productMaterialMap:e}=(null==(i=a.productInsureMaterialVOList)?void 0:i[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===me)).forEach((e=>{e.noticeObject===be?ve.value.agent.fileList.push(e):e.noticeObject===ye?ve.value.holder.fileList.push(e):e.noticeObject===Se&&ve.value.insured.fileList.push(e)}))}})),$({productCode:s,isTenant:!ne}).then((({data:e,code:a})=>{var i;if("10000"===a){de.value=e;const{productFactor:a}=(null==(i=e.productPlanInsureVOList)?void 0:i[0])||{},{signInfo:s}=K(a);s.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&_e.value.sign.push(a.code),"1"===a.code?ve.value.agent.isSign=!0:"2"===a.code?ve.value.holder.isSign=!0:"3"===a.code?ve.value.insured.isSign=!0:"4"===a.code?ve.value.holder.isShareSign=!0:"5"===a.code&&(ve.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&_e.value.verify.push(a.code),"1"===a.code?ve.value.holder.isVerify=!0:"2"===a.code&&(ve.value.insured.isVerify=!0)}))}))}})),Ve();const e=_.get("verifyData");if(e){const{serialNo:a,certNo:i,name:s}=e;Q({certiNo:i,orderNo:W||I,serialNo:a,tenantId:n,userName:s}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(oe.remove("verifyData"),Ve())}))}})),(e,a)=>{const i=F,s=b,n=Y,c=t("ProPageWrap");return l(),m(c,null,{default:d((()=>[u("div",Ie,[u("div",we,[o(i,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),u("div",Ce,[o(pe,{ref_key:"agentSignRef",ref:ue,"order-detail":f(le),"sign-string":f(ve).agent.signData,"show-sign":f(ve).agent.isSign,"show-verify":f(ve).agent.isVerify,"file-list":f(ve).agent.fileList,"personal-info":f(ve).agent.personalInfo,disabled:!!f(ie),title:"代理人",onHandleSign:a[0]||(a[0]=e=>he("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"]),!f(ie)||f(ve).holder.isShareSign?(l(),m(pe,{key:0,ref_key:"holderSignRef",ref:ce,"order-detail":f(le),"sign-string":f(ve).holder.signData,"show-sign":f(ie)?f(ve).holder.isShareSign:f(ve).holder.isSign,"show-verify":f(ve).holder.isVerify,"file-list":f(ve).holder.fileList,"personal-info":f(ve).holder.personalInfo,title:"投保人",onHandleSign:a[1]||(a[1]=e=>he("HOLDER",e,f(ve).holder.personalInfo.id)),onHandleVerify:ge},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):h("",!0),!f(ie)||f(ve).insured.isShareSign?(l(!0),r(k,{key:1},L(f(ve).insured.personalInfo||[],(e=>(l(),m(pe,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:fe,"data-source":[],"order-detail":f(le),"sign-string":f(ve).insured.signData[e.id],"show-sign":f(ie)?f(ve).insured.isShareSign:f(ve).insured.isSign,"show-verify":f(ve).insured.isVerify,"file-list":f(ve).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:a=>he("INSURED",a,e.id),onHandleVerify:ge},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):h("",!0)]),u("div",je,[u("div",{class:"refresh-btn",onClick:Ee},[u("div",null,[o(s,{name:"refresh"})]),Ne]),!f(ie)&&f(O)()?(l(),m(V,E({key:0,ref_key:"shareRef",ref:Le},f(De),{onClick:D(Oe,["stop"])}),{default:d((()=>[o(n,{plain:"",type:"primary",class:"share-btn"},{default:d((()=>[p("分享")])),_:1})])),_:1},16,["onClick"])):h("",!0),o(n,{type:"primary",class:"submit-btn",onClick:ke},{default:d((()=>[p("确认支付")])),_:1})])])])),_:1})}}});export{_e as default};
