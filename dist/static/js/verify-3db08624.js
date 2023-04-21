import{d as e,r as i,L as a,y as s,R as n,b as t,c as l,A as o,i as r,w as d,f as u,E as c,g as f,F as v,Z as g,h,j as p,e as m,a2 as y,C as S,ae as w,bi as I,u as b,aq as C,o as j,s as _,U as N,V as k,ay as L,az as O,a9 as V,bv as x,n as E,D as T,P as D,T as R,bw as P,bx as U,a3 as B,by as H,B as A}from"./index-7c427e78.js";import{a as F,q as M}from"./product-4628cbdf.js";import{n as Y}from"./nextStep-4c18a28c.js";import{g as q,i as G}from"./trial-ba45f3de.js";import{u as $}from"./useAttachment-3bd36092.js";import{_ as J,f as W,a as z,s as Z}from"./verify-434326c1.js";import{u as K}from"./useOrder-8d95f3a1.js";import{t as Q}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-dac8d42c.js";/* empty css              */import"./bankCard-8951abc8.js";import{P as X,B as ee}from"./constants-7afb7c3d.js";import"./pdfh5-008ca364.js";import"./core-2f46f8e8.js";import"./constant-8927d485.js";import"./utils-8ae9e796.js";import"./infoCollection-746e0e94.js";import"./trial-5c57c8b5.js";import"./phoneVerify-c0ad95ea.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";const ie={class:"com-sign-part"},ae={class:"people"},se={class:"name"},ne={key:0,class:"verify-item"},te=u("div",{class:"label"},"证件号码",-1),le={class:"no"},oe={class:"sign-status"},re={class:"status"},de=["disabled"],ue=["src"],ce={key:1,class:"sign-desc"},fe={class:"sign-body"},ve={class:"date"},ge={class:"file"},he=e({name:"signPart"}),pe=e({...he,props:{signString:{default:""},personalInfo:{default:()=>({})},fileList:null,title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:b,emit:C}){const j=e,_=i({}),N=i(""),k=i([]),L=i({});i(!0);const O=i(!1),V=i(0),{fileList:x}=$(L,k),E=e=>`${e}`===S.CERT,T=a((()=>s().format("YYYY-MM-DD"))),D=()=>{var e,i;C("handleVerify",null==(e=_.value)?void 0:e.name,null==(i=_.value)?void 0:i.certNo)},R=()=>{O.value=!1},P=i(),U=()=>{P.value&&P.value.rewrite()},B=()=>{j.disabled||P.value&&P.value.openSign()},H=e=>{C("handleSign",e)};return b({validateSign:()=>new Promise(((e,i)=>{N.value?e(!0):i(new Error(`请${j.title}完成签名后，去支付`))})),validateVerify:()=>new Promise(((e,i)=>{var a,s;(null==(s=null==(a=j.personalInfo)?void 0:a.extInfo)?void 0:s.isCert)!==g.YES?i(new Error(`请${j.title}完成认证后，去支付`)):e(!0)}))}),n((()=>j.signString),(()=>{N.value=j.signString}),{immediate:!0}),n((()=>j.personalInfo),(()=>{_.value=j.personalInfo}),{deep:!0,immediate:!0}),(i,a)=>{const s=w,n=I,S=t("AttachmentList"),b=t("FilePreview");return l(),o("div",ie,[r(n,{title:e.title,class:"card"},{extra:d((()=>{var i,a,s,n,t,r;return[u("div",ae,[u("div",se,c(null==(i=f(_))?void 0:i.name),1),e.showVerify&&E(null==(a=f(_))?void 0:a.certType)?(l(),o("div",{key:0,class:v(["status",{verified:(null==(n=null==(s=f(_))?void 0:s.extInfo)?void 0:n.isCert)===f(g).YES}])},c((null==(r=null==(t=f(_))?void 0:t.extInfo)?void 0:r.isCert)===f(g).YES?"已认证":"待认证"),3)):h("",!0)])]})),default:d((()=>{var i,a,n,t,d;return[e.showVerify&&(null==(i=f(_))?void 0:i.certNo)?(l(),o("div",ne,[te,u("div",le,c(null==(a=f(_))?void 0:a.certNo),1),(null==(t=null==(n=f(_))?void 0:n.extInfo)?void 0:t.isCert)!==f(g).YES&&E(null==(d=f(_))?void 0:d.certType)?(l(),o("div",{key:0,class:"action",onClick:D},[p(" 去认证 "),r(s,{name:"right_arrow",class:"icon"})])):h("",!0)])):h("",!0)]})),_:1},8,["title"]),e.showSign?(l(),m(n,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:d((()=>[u("div",oe,[u("div",re,c(f(N)?"已签名":"未签名"),1),u("div",{disabled:e.disabled,class:"resign",onClick:U},"重签",8,de)])])),default:d((()=>{var e;return[r(J,{ref_key:"signRef",ref:P,modelValue:f(N),"onUpdate:modelValue":a[0]||(a[0]=e=>y(N)?N.value=e:null),class:"sign",onSubmitSign:H},{signImg:d((({data:e})=>[u("div",{class:"sign-board",onClick:B},[e?(l(),o("img",{key:0,src:e,class:"sign-img",alt:""},null,8,ue)):(l(),o("span",ce,"请签名"))])])),_:1},8,["modelValue"]),u("div",fe,[u("div",ve,"签名日期： "+c(f(T)),1),u("div",ge,[(null==(e=f(x))?void 0:e.length)?(l(),m(S,{key:0,"attachment-list":f(x),"pre-text":"签名将被用于以下文件：",onPreviewFile:a[1]||(a[1]=e=>(e=>{V.value=e,O.value=!0})(e))},null,8,["attachment-list"])):h("",!0)])])]})),_:1},8,["title"])):h("",!0),f(O)?(l(),m(b,{key:1,show:f(O),"onUpdate:show":a[2]||(a[2]=e=>y(O)?O.value=e:null),"content-list":f(x),"is-only-view":"","active-index":f(V),text:"关闭",onOnCloseFilePreviewByMask:R},null,8,["show","content-list","active-index"])):h("",!0)])}}}),me=2,ye=1,Se=2,we=3;const Ie={class:"long-verify"},be={class:"header"},Ce={class:"verify-content"},je={class:"footer-button footer-bar"},_e=u("div",{class:"text"},"刷新",-1),Ne=e({__name:"verify",setup(e){const a=b(),{productCode:s="",tenantId:n,agentCode:c="",agencyCode:v,saleChannelId:y,saleUserId:S,orderNo:I,orderCode:$,extraInfo:J,isShare:ie,insurerCode:ae,preview:se}=a.query;let ne={};try{ne=JSON.parse(decodeURIComponent(J))}catch(Ee){}const te=K(),le=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,oe=new C({source:"localStorage"});i({});const re=i({}),de=i(),ue=i(),ce=i(),fe=i({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ve=(e,i)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),z({callbackUrl:a,certiNo:i,faceAuthMode:"TENCENT",userName:e,tenantId:n}).then((({code:a,data:s})=>{if("10000"===a){const{originalUrl:a,serialNo:n}=s;window.location.href=a,_.set("verifyData",{serialNo:n,certNo:i,name:e})}}))},ge=(e,i,a)=>{var s;Z(e,i,null==(s=te.value)?void 0:s.id,n,a)},he=i({sign:[],verify:[]}),Ne=()=>{if(se)return void E(X.SIGN,a.query);const e=[];de.value&&he.value.sign.includes("1")&&e.push(de.value.validateSign()),ue.value&&((ie?he.value.sign.includes("4"):he.value.sign.includes("2"))&&e.push(ue.value.validateSign()),he.value.verify.includes("1")&&e.push(ue.value.validateVerify())),ce.value&&((ie?he.value.sign.includes("5"):he.value.sign.includes("3"))&&e.push(...(ce.value||[]).map((e=>e.validateSign()))),he.value.verify.includes("2")&&e.push(...(ce.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{I&&q({orderNo:$||I,saleUserId:S,tenantId:n}).then((({code:e,data:i})=>{"10000"===e&&T.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{Object.assign(te.value,{extInfo:{...te.value.extInfo,buttonCode:ee.SIGN,pageCode:X.SIGN}}),Y(te.value,((e,i)=>{i===D.JUMP_URL&&(window.location.href=e.paymentUrl)}))}))}))})).catch((e=>{R(e.message)}))},ke=i(),Le=()=>{de.value.validateSign().then((()=>{ke.value&&(console.log("234242"),ke.value.handleShare())})).catch((()=>{R("请完成代理人签字后进行分享")}))},Oe=(e=!1)=>{I&&q({orderNo:$||I,tenantId:n}).then((({code:i,data:a})=>{var s,n;"10000"===i&&(e&&((null==(n=null==(s=null==a?void 0:a.tenantOrderHolder)?void 0:s.extInfo)?void 0:n.isCert)===g.NO||(null==a?void 0:a.tenantOrderInsuredList.some((e=>{var i;return(null==(i=e.extInfo)?void 0:i.isCert)===g.NO})))?R("用户未完身份认证及签字"):(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===P.ELECTRIC_SIGN&&e.objectType===U.HOLDER)))&&(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===P.ELECTRIC_SIGN&&e.objectType===U.INSURED)))||R("用户未完身份认证及签字")),Object.assign(te.value,a),fe.value.holder.personalInfo=a.tenantOrderHolder,fe.value.insured.personalInfo=a.tenantOrderInsuredList,a.tenantOrderAttachmentList.forEach((e=>{e.objectType===ye?fe.value.holder.signData=e.fileBase64:e.objectType===we?fe.value.agent.signData=e.fileBase64:e.objectType===Se&&(fe.value.insured.signData[e.objectId]=e.fileBase64)})))}))},Ve=()=>{Oe(!0)},xe=i({imgUrl:"",desc:"",title:"",link:le});return j((()=>{F({productCode:s,tenantId:n}).then((({data:e,code:i})=>{var a;if("10000"===i){let i={};if(null==(a=null==e?void 0:e.PRODUCT_LIST)?void 0:a.wxShareConfig){const{title:a,desc:s,image:n}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{},[t=""]=n||[];i={title:a,desc:s,image:t}}else{const{title:a,desc:s,image:n}=(null==e?void 0:e.PRODUCT_LIST)||{};i={title:a,desc:s,image:n}}B(e.BASIC_INFO.themeType),Object.assign(xe.value,i)}})),M({productCode:s}).then((({code:e,data:i})=>{var a;if("10000"===e){const{productMaterialMap:e}=(null==(a=i.productInsureMaterialVOList)?void 0:a[0])||{};(Object.values(e)||[]).flat().filter((e=>e.materialType===me)).forEach((e=>{e.noticeObject===we?fe.value.agent.fileList.push(e):e.noticeObject===ye?fe.value.holder.fileList.push(e):e.noticeObject===Se&&fe.value.insured.fileList.push(e)}))}})),G({productCode:s,isTenant:!se}).then((({data:e,code:i})=>{var a;if("10000"===i){re.value=e;const{productFactor:i}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{},{signInfo:s}=Q(i);console.log("signInfo",s),s.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&he.value.sign.push(i.code),"1"===i.code?fe.value.agent.isSign=!0:"2"===i.code?fe.value.holder.isSign=!0:"3"===i.code?fe.value.insured.isSign=!0:"4"===i.code?fe.value.holder.isShareSign=!0:"5"===i.code&&(fe.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((i=>{e.required&&he.value.verify.push(i.code),"1"===i.code?fe.value.holder.isVerify=!0:"2"===i.code&&(fe.value.insured.isVerify=!0)}))}))}})),Oe();const e=_.get("verifyData");if(e){const{serialNo:i,certNo:a,name:s}=e;W({certiNo:a,orderNo:$||I,serialNo:i,tenantId:n,userName:s}).then((e=>{const{code:i,data:a}=e;"10000"===i&&(oe.remove("verifyData"),Oe())}))}})),(e,i)=>{const a=H,s=w,n=A,c=t("ProPageWrap");return l(),m(c,null,{default:d((()=>[u("div",Ie,[u("div",be,[r(a,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),u("div",Ce,[r(pe,{ref_key:"agentSignRef",ref:de,"data-source":[],"order-detail":f(te),"sign-string":f(fe).agent.signData,"show-sign":f(fe).agent.isSign,"show-verify":f(fe).agent.isVerify,"show-share-sign":f(fe).agent.isShareSign,"file-list":f(fe).agent.fileList,"personal-info":f(fe).agent.personalInfo,disabled:!!f(ie),title:"代理人",onHandleSign:i[0]||(i[0]=e=>ge("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","show-share-sign","file-list","personal-info","disabled"]),!f(ie)||f(fe).holder.isShareSign?(l(),m(pe,{key:0,ref_key:"holderSignRef",ref:ue,"order-detail":f(te),"sign-string":f(fe).holder.signData,"show-sign":f(fe).holder.isSign,"show-verify":f(fe).holder.isVerify,"show-share-sign":f(fe).holder.isShareSign,"file-list":f(fe).holder.fileList,"personal-info":f(fe).holder.personalInfo,title:"投保人",onHandleSign:i[1]||(i[1]=e=>ge("HOLDER",e,f(fe).holder.personalInfo.id)),onHandleVerify:ve},null,8,["order-detail","sign-string","show-sign","show-verify","show-share-sign","file-list","personal-info"])):h("",!0),!f(ie)||f(fe).insured.isShareSign?(l(!0),o(N,{key:1},k(f(fe).insured.personalInfo||[],(e=>(l(),m(pe,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:ce,"data-source":[],"order-detail":f(te),"sign-string":f(fe).insured.signData[e.id],"show-sign":f(fe).insured.isSign,"show-verify":f(fe).insured.isVerify,"show-share-sign":f(fe).insured.isShareSign,"file-list":f(fe).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>ge("INSURED",i,e.id),onHandleVerify:ve},null,8,["order-detail","sign-string","show-sign","show-verify","show-share-sign","file-list","personal-info","onHandleSign"])))),128)):h("",!0)]),u("div",je,[u("div",{class:"refresh-btn",onClick:Ve},[u("div",null,[r(s,{name:"refresh"})]),_e]),!f(ie)&&f(L)()?(l(),m(O,V({key:0,ref_key:"shareRef",ref:ke},f(xe),{onClick:x(Le,["stop"])}),{default:d((()=>[r(n,{plain:"",type:"primary",class:"share-btn"},{default:d((()=>[p("分享")])),_:1})])),_:1},16,["onClick"])):h("",!0),r(n,{type:"primary",class:"submit-btn",onClick:Ne},{default:d((()=>[p("确认支付")])),_:1})])])])),_:1})}}});export{Ne as default};
