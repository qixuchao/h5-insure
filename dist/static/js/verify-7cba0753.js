import{d as e,r as i,G as a,y as s,L as n,bz as t,b as l,c as r,e as o,w as d,i as c,Q as u,f,ac as v,Y as g,h,j as p,g as m,Z as y,C as S,a7 as b,b2 as I,u as w,K as C,aq as j,o as N,s as k,M as _,N as L,aV as O,a5 as V,bA as E,aW as D,n as T,D as x,P as R,T as U,bg as B,aO as P,$ as A,m as F,bB as M,B as Y}from"./index-779cecf9.js";import{a as H,q}from"./product-c1d4d1df.js";import{n as G}from"./nextStep-b6b73041.js";import{g as $,i as W}from"./trial-27028c91.js";import{u as J}from"./useAttachment-6693a04c.js";import{_ as z,f as K,a as Q,s as X}from"./verify-f3cb8848.js";import{u as Z}from"./useOrder-1b363ec1.js";import{t as ee}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-81fea27c.js";/* empty css              */import"./useDicData-d205d0ee.js";import"./bankCard-c903cb13.js";import{P as ie,B as ae}from"./constants-7afb7c3d.js";import"./pdfh5-008ca364.js";import"./core-d3c88158.js";import"./constant-8927d485.js";import"./utils-66c7bcbe.js";import"./infoCollection-d7438166.js";import"./trial-0a278f3f.js";import"./merge-e7788e50.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./phoneVerify-bd28443a.js";const se={class:"com-sign-part"},ne={class:"people"},te={class:"name"},le={key:0,class:"verify-item"},re=c("div",{class:"label"},"证件号码",-1),oe={class:"no"},de={class:"sign-status"},ce={class:"status"},ue=["src"],fe={key:1,class:"sign-desc"},ve={class:"sign-body"},ge={class:"date"},he={class:"file"},pe=e({name:"signPart"}),me=e({...pe,props:{signString:{default:""},personalInfo:{default:()=>({})},fileList:null,title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:w,emit:C}){const j=e,N=i({}),k=i(""),_=i([]),L=i({});i(!0);const O=i(!1),V=i(0),{fileList:E}=J(L,_),D=e=>`${e}`===S.CERT,T=a((()=>s().format("YYYY-MM-DD"))),x=()=>{var e,i;C("handleVerify",null==(e=N.value)?void 0:e.name,null==(i=N.value)?void 0:i.certNo)},R=()=>{O.value=!1},U=i(),B=()=>{U.value&&U.value.rewrite()},P=()=>{j.disabled||U.value&&U.value.openSign()},A=e=>{C("handleSign",e)};return w({validateSign:()=>new Promise(((e,i)=>{k.value?e(!0):i(new Error(`请${j.title}完成签名后，去支付`))})),validateVerify:()=>new Promise(((e,i)=>{var a;(null==(a=j.personalInfo)?void 0:a.isCert)!==g.YES?i(new Error(`请${j.title}完成认证后，去支付`)):e(!0)}))}),n((()=>j.signString),(()=>{k.value=j.signString}),{immediate:!0}),n((()=>j.personalInfo),(()=>{N.value=j.personalInfo}),{deep:!0,immediate:!0}),(i,a)=>{const s=b,n=I,S=t("AttachmentList"),w=t("FilePreview");return l(),r("div",se,[o(n,{title:e.title,class:"card"},{extra:d((()=>{var i,a,s,n;return[c("div",ne,[c("div",te,u(null==(i=f(N))?void 0:i.name),1),e.showVerify&&D(null==(a=f(N))?void 0:a.certType)?(l(),r("div",{key:0,class:v(["status",{verified:(null==(s=f(N))?void 0:s.isCert)===f(g).YES}])},u((null==(n=f(N))?void 0:n.isCert)===f(g).YES?"已认证":"待认证"),3)):h("",!0)])]})),default:d((()=>{var i,a,n,t;return[e.showVerify&&(null==(i=f(N))?void 0:i.certNo)?(l(),r("div",le,[re,c("div",oe,u(null==(a=f(N))?void 0:a.certNo),1),(null==(n=f(N))?void 0:n.isCert)!==f(g).YES&&D(null==(t=f(N))?void 0:t.certType)?(l(),r("div",{key:0,class:"action",onClick:x},[p(" 去认证 "),o(s,{name:"right_arrow",class:"icon"})])):h("",!0)])):h("",!0)]})),_:1},8,["title"]),e.showSign?(l(),m(n,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:d((()=>[c("div",de,[c("div",ce,u(f(k)?"已签名":"未签名"),1),e.disabled?h("",!0):(l(),r("div",{key:0,class:"resign",onClick:B},"重签"))])])),default:d((()=>{var e;return[o(z,{ref_key:"signRef",ref:U,modelValue:f(k),"onUpdate:modelValue":a[0]||(a[0]=e=>y(k)?k.value=e:null),class:"sign",onSubmitSign:A},{signImg:d((({data:e})=>[c("div",{class:"sign-board",onClick:P},[e?(l(),r("img",{key:0,src:e,class:"sign-img",alt:""},null,8,ue)):(l(),r("span",fe,"请签名"))])])),_:1},8,["modelValue"]),c("div",ve,[c("div",ge,"签名日期： "+u(f(T)),1),c("div",he,[(null==(e=f(E))?void 0:e.length)?(l(),m(S,{key:0,"attachment-list":f(E),"pre-text":"签名将被用于以下文件：",onPreviewFile:a[1]||(a[1]=e=>(e=>{V.value=e,O.value=!0})(e))},null,8,["attachment-list"])):h("",!0)])])]})),_:1},8,["title"])):h("",!0),f(O)?(l(),m(w,{key:1,show:f(O),"onUpdate:show":a[2]||(a[2]=e=>y(O)?O.value=e:null),"content-list":f(E),"is-only-view":"","active-index":f(V),text:"关闭",onOnCloseFilePreviewByMask:R},null,8,["show","content-list","active-index"])):h("",!0)])}}}),ye=2,Se=1,be=2,Ie=3;const we={class:"long-verify"},Ce={class:"header"},je={class:"verify-content"},Ne={class:"footer-button footer-bar"},ke=c("div",{class:"text"},"刷新",-1),_e=e({__name:"verify",setup(e){const a=w(),{productCode:s="",tenantId:n,agentCode:t="",agencyCode:u,saleChannelId:v,saleUserId:y,orderNo:S,orderCode:I,extraInfo:J,isShare:z,insurerCode:se,preview:ne}=a.query;let te={};try{te=JSON.parse(decodeURIComponent(J))}catch(Te){}const le=Z(),re=`${window.origin}/baseInsurance/long/phoneVerify?${C.stringify({...a.query,orderNo:I||S})}`;console.log("shareLink",re);const oe=new j({source:"localStorage"});i({});const de=i({}),ce=i(),ue=i(),fe=i(),ve=i({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ge=(e,i)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),Q({callbackUrl:a,certiNo:i,faceAuthMode:"TENCENT",userName:e,tenantId:n}).then((({code:a,data:s})=>{if("10000"===a){const{originalUrl:a,serialNo:n}=s;window.location.href=a,k.set("verifyData",{serialNo:n,certNo:i,name:e})}}))},he=(e,i,a)=>{var s;X(e,i,null==(s=le.value)?void 0:s.id,n,a)},pe=i({sign:[],verify:[]}),_e=()=>{if(ne)return void T(ie.SIGN,a.query);const e=[];ce.value&&pe.value.sign.includes("1")&&e.push(ce.value.validateSign()),ue.value&&((z?pe.value.sign.includes("4"):pe.value.sign.includes("2"))&&e.push(ue.value.validateSign()),pe.value.verify.includes("1")&&e.push(ue.value.validateVerify())),fe.value&&((z?pe.value.sign.includes("5"):pe.value.sign.includes("3"))&&e.push(...(fe.value||[]).map((e=>e.validateSign()))),pe.value.verify.includes("2")&&e.push(...(fe.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{S&&$({orderNo:I||S,saleUserId:y,tenantId:n}).then((({code:e,data:i})=>{"10000"===e&&x.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{Object.assign(le.value,{extInfo:{...le.value.extInfo,buttonCode:ae.SIGN,pageCode:ie.SIGN}}),G(le.value,((e,i)=>{i===R.JUMP_URL&&(window.location.href=e.paymentUrl)}))}))}))})).catch((e=>{U(e.message)}))},Le=i(),Oe=()=>{ce.value.validateSign().then((()=>{Le.value&&Le.value.handleShare()})).catch((()=>{U("请完成代理人签字后进行分享")}))},Ve=(e=!1)=>{S&&$({orderNo:I||S,tenantId:n}).then((({code:i,data:a})=>{var s;"10000"===i&&(e&&((null==(s=null==a?void 0:a.holder)?void 0:s.isCert)===g.NO||(null==a?void 0:a.insuredList.some((e=>e.isCert===g.NO)))?U("用户未完身份认证及签字"):(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.HOLDER)))&&(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.INSURED)))||U("用户未完身份认证及签字")),Object.assign(le.value,a),ve.value.holder.personalInfo=a.holder,ve.value.insured.personalInfo=a.insuredList,a.tenantOrderAttachmentList.forEach((e=>{e.objectType===Se?ve.value.holder.signData=e.fileBase64:e.objectType===Ie?ve.value.agent.signData=e.fileBase64:e.objectType===be&&(ve.value.insured.signData[e.objectId]=e.fileBase64)})))}))},Ee=()=>{Ve(!0)},De=i({imgUrl:"",desc:"",title:"",link:re});return N((()=>{H({productCode:s,tenantId:n}).then((({data:e,code:i})=>{if("10000"===i){const{wxShareConfig:i,showWXShare:a,title:s,desc:n,image:t}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(De.value,{...i,imgUrl:i.image,isShare:a}):Object.assign(De.value,{title:s,desc:n,imgUrl:t,isShare:a}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&A(e.BASIC_INFO.themeType)}})),q({productCode:s}).then((({code:e,data:i})=>{var a;if("10000"===e){const{productMaterialMap:e}=(null==(a=i.productInsureMaterialVOList)?void 0:a[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===ye)).forEach((e=>{e.noticeObject===Ie?ve.value.agent.fileList.push(e):e.noticeObject===Se?ve.value.holder.fileList.push(e):e.noticeObject===be&&ve.value.insured.fileList.push(e)}))}})),W({productCode:s,isTenant:!ne}).then((({data:e,code:i})=>{var a;if("10000"===i){de.value=e;const{productFactor:i}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{},{signInfo:s}=ee(i);s.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&pe.value.sign.push(i.code),"1"===i.code?ve.value.agent.isSign=!0:"2"===i.code?ve.value.holder.isSign=!0:"3"===i.code?ve.value.insured.isSign=!0:"4"===i.code?ve.value.holder.isShareSign=!0:"5"===i.code&&(ve.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((i=>{e.required&&pe.value.verify.push(i.code),"1"===i.code?ve.value.holder.isVerify=!0:"2"===i.code&&(ve.value.insured.isVerify=!0)}))}))}})),Ve();const e=k.get("verifyData");if(e){const{serialNo:i,certNo:a,name:s}=e;K({certiNo:a,orderNo:I||S,serialNo:i,tenantId:n,userName:s}).then((e=>{const{code:i,data:a}=e;"10000"===i&&(oe.remove("verifyData"),Ve())}))}})),(e,i)=>{const a=F,s=M,n=b,t=Y;return l(),r("div",we,[o(a),c("div",Ce,[o(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),c("div",je,[o(me,{ref_key:"agentSignRef",ref:ce,"order-detail":f(le),"sign-string":f(ve).agent.signData,"show-sign":f(ve).agent.isSign,"show-verify":f(ve).agent.isVerify,"file-list":f(ve).agent.fileList,"personal-info":f(ve).agent.personalInfo,disabled:!!f(z),title:"代理人",onHandleSign:i[0]||(i[0]=e=>he("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"]),!f(z)||f(ve).holder.isShareSign?(l(),m(me,{key:0,ref_key:"holderSignRef",ref:ue,"order-detail":f(le),"sign-string":f(ve).holder.signData,"show-sign":f(z)?f(ve).holder.isShareSign:f(ve).holder.isSign,"show-verify":f(ve).holder.isVerify,"file-list":f(ve).holder.fileList,"personal-info":f(ve).holder.personalInfo,title:"投保人",onHandleSign:i[1]||(i[1]=e=>he("HOLDER",e,f(ve).holder.personalInfo.id)),onHandleVerify:ge},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):h("",!0),!f(z)||f(ve).insured.isShareSign?(l(!0),r(_,{key:1},L(f(ve).insured.personalInfo||[],(e=>(l(),m(me,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:fe,"data-source":[],"order-detail":f(le),"sign-string":f(ve).insured.signData[e.id],"show-sign":f(z)?f(ve).insured.isShareSign:f(ve).insured.isSign,"show-verify":f(ve).insured.isVerify,"file-list":f(ve).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>he("INSURED",i,e.id),onHandleVerify:ge},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):h("",!0)]),c("div",Ne,[c("div",{class:"refresh-btn",onClick:Ee},[c("div",null,[o(n,{name:"refresh"})]),ke]),!f(z)&&f(O)()?(l(),m(D,V({key:0,ref_key:"shareRef",ref:Le},f(De),{onClick:E(Oe,["stop"])}),{default:d((()=>[o(t,{plain:"",type:"primary",class:"share-btn"},{default:d((()=>[p("分享")])),_:1})])),_:1},16,["onClick"])):h("",!0),o(t,{type:"primary",class:"submit-btn",onClick:_e},{default:d((()=>[p("确认支付")])),_:1})])])}}});export{_e as default};
