import{d as e,r as i,L as a,z as s,V as n,a3 as t,b as r,c as l,e as o,w as d,i as c,E as u,f,F as v,Y as g,h,j as p,g as m,a0 as y,C as S,a4 as I,a5 as b,u as w,Q as C,a6 as j,o as N,t as k,$ as L,a7 as V,a8 as O,a9 as E,aa as _,ab as D,p as T,D as x,P as U,T as R,ac as B,ad as P,a1 as A,n as F,ae as M,B as Y}from"./index-2e3a6352.js";import{a as H,q as G}from"./product-76cc4a97.js";import{n as $}from"./nextStep-368b1633.js";import{g as q,i as J}from"./trial-c4d9975e.js";import{u as z}from"./useAttachment-ef7251eb.js";import{_ as Q,f as W,a as X,s as K}from"./verify-b326060b.js";import{u as Z}from"./useOrder-230ef36e.js";import{M as ee}from"./product-5e78cf8a.js";import{t as ie}from"./PayInfo-0de4f16b.js";import{P as ae,B as se}from"./constants-7afb7c3d.js";import"./core-74cfa190.js";import"./constant-8927d485.js";import"./utils-f211dc4e.js";import"./infoCollection-c7f15fc6.js";import"./trial-c7294b8f.js";import"./merge-c5599fa4.js";import"./keysIn-a287568b.js";import"./isObjectLike-a9798079.js";import"./_getTag-7f09858e.js";import"./debounce-6981b306.js";import"./phoneVerify-b77499d2.js";import"./index-79d4fb4f.js";import"./useDicData-2bf20232.js";import"./bankCard-317909d8.js";const ne={class:"com-sign-part"},te={class:"people"},re={class:"name"},le={key:0,class:"verify-item"},oe=c("div",{class:"label"},"证件号码",-1),de={class:"no"},ce={class:"sign-status"},ue={class:"status"},fe=["src"],ve={key:1,class:"sign-desc"},ge={class:"sign-body"},he={class:"date"},pe={class:"file"},me=e({name:"signPart"}),ye=e({...me,props:{signString:{default:""},personalInfo:{default:()=>({})},fileList:{},title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:w,emit:C}){const j=e,N=i({}),k=i(""),L=i([]),V=i({});i(!0);const O=i(!1),E=i(0),{fileList:_}=z(V,L),D=e=>`${e}`===S.CERT,T=a((()=>s().format("YYYY-MM-DD"))),x=()=>{var e,i;C("handleVerify",null==(e=N.value)?void 0:e.name,null==(i=N.value)?void 0:i.certNo)},U=()=>{O.value=!1},R=i(),B=()=>{R.value&&R.value.rewrite()},P=()=>{j.disabled||R.value&&R.value.openSign()},A=e=>{C("handleSign",e)};return w({validateSign:()=>new Promise(((e,i)=>{k.value?e(!0):i(new Error(`请${j.title}完成签名后，去支付`))})),validateVerify:()=>new Promise(((e,i)=>{var a;(null==(a=j.personalInfo)?void 0:a.isCert)!==g.YES?i(new Error(`请${j.title}完成认证后，去支付`)):e(!0)}))}),n((()=>j.signString),(()=>{k.value=j.signString}),{immediate:!0}),n((()=>j.personalInfo),(()=>{N.value=j.personalInfo}),{deep:!0,immediate:!0}),(e,i)=>{const a=I,s=b,n=t("AttachmentList"),S=t("FilePreview");return r(),l("div",ne,[o(s,{title:e.title,class:"card"},{extra:d((()=>{var i,a,s,n;return[c("div",te,[c("div",re,u(null==(i=f(N))?void 0:i.name),1),e.showVerify&&D(null==(a=f(N))?void 0:a.certType)?(r(),l("div",{key:0,class:v(["status",{verified:(null==(s=f(N))?void 0:s.isCert)===f(g).YES}])},u((null==(n=f(N))?void 0:n.isCert)===f(g).YES?"已认证":"待认证"),3)):h("",!0)])]})),default:d((()=>{var i,s,n,t;return[e.showVerify&&(null==(i=f(N))?void 0:i.certNo)?(r(),l("div",le,[oe,c("div",de,u(null==(s=f(N))?void 0:s.certNo),1),(null==(n=f(N))?void 0:n.isCert)!==f(g).YES&&D(null==(t=f(N))?void 0:t.certType)?(r(),l("div",{key:0,class:"action",onClick:x},[p(" 去认证 "),o(a,{name:"right_arrow",class:"icon"})])):h("",!0)])):h("",!0)]})),_:1},8,["title"]),e.showSign?(r(),m(s,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:d((()=>[c("div",ce,[c("div",ue,u(f(k)?"已签名":"未签名"),1),e.disabled?h("",!0):(r(),l("div",{key:0,class:"resign",onClick:B},"重签"))])])),default:d((()=>{var e;return[o(Q,{ref_key:"signRef",ref:R,modelValue:f(k),"onUpdate:modelValue":i[0]||(i[0]=e=>y(k)?k.value=e:null),class:"sign",onSubmitSign:A},{signImg:d((({data:e})=>[c("div",{class:"sign-board",onClick:P},[e?(r(),l("img",{key:0,src:e,class:"sign-img",alt:""},null,8,fe)):(r(),l("span",ve,"请签名"))])])),_:1},8,["modelValue"]),c("div",ge,[c("div",he,"签名日期： "+u(f(T)),1),c("div",pe,[(null==(e=f(_))?void 0:e.length)?(r(),m(n,{key:0,"attachment-list":f(_),"pre-text":"签名将被用于以下文件：",onPreviewFile:i[1]||(i[1]=e=>(e=>{E.value=e,O.value=!0})(e))},null,8,["attachment-list"])):h("",!0)])])]})),_:1},8,["title"])):h("",!0),f(O)?(r(),m(S,{key:1,show:f(O),"onUpdate:show":i[2]||(i[2]=e=>y(O)?O.value=e:null),"content-list":f(_),"is-only-view":"","active-index":f(E),text:"关闭",onOnCloseFilePreviewByMask:U},null,8,["show","content-list","active-index"])):h("",!0)])}}}),Se=1,Ie=2,be=3;const we={class:"long-verify"},Ce={class:"header"},je={class:"verify-content"},Ne={class:"footer-button footer-bar"},ke=c("div",{class:"text"},"刷新",-1),Le=e({__name:"verify",setup(e){const a=w(),{productCode:s="",tenantId:n,agentCode:t="",agencyCode:u,saleChannelId:v,saleUserId:y,orderNo:S,orderCode:b,extraInfo:z,isShare:Q,insurerCode:ne,preview:te}=a.query;let re={};try{re=JSON.parse(decodeURIComponent(z))}catch(Te){}const le=Z(),oe=`${window.origin}/baseInsurance/long/phoneVerify?${C.stringify({...a.query,orderNo:b||S})}`;console.log("shareLink",oe);const de=new j({source:"localStorage"});i({});const ce=i({}),ue=i(),fe=i(),ve=i(),ge=i({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),he=(e,i)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),X({callbackUrl:a,certiNo:i,faceAuthMode:"TENCENT",userName:e,tenantId:n}).then((({code:a,data:s})=>{if("10000"===a){const{originalUrl:a,serialNo:n}=s;window.location.href=a,k.set("verifyData",{serialNo:n,certNo:i,name:e})}}))},pe=(e,i,a)=>{var s;K(e,i,null==(s=le.value)?void 0:s.id,n,a)},me=i({sign:[],verify:[]}),Le=()=>{if(te)return void T(ae.SIGN,a.query);const e=[];ue.value&&me.value.sign.includes("1")&&e.push(ue.value.validateSign()),fe.value&&((Q?me.value.sign.includes("4"):me.value.sign.includes("2"))&&e.push(fe.value.validateSign()),me.value.verify.includes("1")&&e.push(fe.value.validateVerify())),ve.value&&((Q?me.value.sign.includes("5"):me.value.sign.includes("3"))&&e.push(...(ve.value||[]).map((e=>e.validateSign()))),me.value.verify.includes("2")&&e.push(...(ve.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{S&&q({orderNo:b||S,saleUserId:y,tenantId:n}).then((({code:e,data:i})=>{"10000"===e&&x.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{Object.assign(le.value,{extInfo:{...le.value.extInfo,buttonCode:se.SIGN,pageCode:ae.SIGN}}),$(le.value,((e,i)=>{i===U.JUMP_URL&&(window.location.href=e.paymentUrl)}))}))}))})).catch((e=>{R(e.message)}))},Ve=i(),Oe=()=>{ue.value.validateSign().then((()=>{Ve.value&&Ve.value.handleShare()})).catch((()=>{R("请完成代理人签字后进行分享")}))},Ee=(e=!1)=>{S&&q({orderNo:b||S,tenantId:n}).then((({code:i,data:a})=>{var s;"10000"===i&&(e&&((null==(s=null==a?void 0:a.holder)?void 0:s.isCert)===g.NO||(null==a?void 0:a.insuredList.some((e=>e.isCert===g.NO)))?R("用户未完身份认证及签字"):(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.HOLDER)))&&(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.INSURED)))||R("用户未完身份认证及签字")),Object.assign(le.value,a),ge.value.holder.personalInfo=a.holder,ge.value.insured.personalInfo=a.insuredList,a.tenantOrderAttachmentList.forEach((e=>{e.objectType===Se?ge.value.holder.signData=e.fileBase64:e.objectType===be?ge.value.agent.signData=e.fileBase64:e.objectType===Ie&&(ge.value.insured.signData[e.objectId]=e.fileBase64)})))}))},_e=()=>{Ee(!0)},De=i({imgUrl:"",desc:"",title:"",link:oe});return N((()=>{H({productCode:s,tenantId:n}).then((({data:e,code:i})=>{if("10000"===i){const{wxShareConfig:i,showWXShare:a,title:s,desc:n,image:t}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(De.value,{...i,imgUrl:i.image,isShare:a}):Object.assign(De.value,{title:s,desc:n,imgUrl:t,isShare:a}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&A(e.BASIC_INFO.themeType)}})),G({productCode:s}).then((({code:e,data:i})=>{var a;if("10000"===e){const{productMaterialMap:e}=(null==(a=i.productInsureMaterialVOList)?void 0:a[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===ee.SIGN)).forEach((e=>{e.noticeObject===be?ge.value.agent.fileList.push(e):e.noticeObject===Se?ge.value.holder.fileList.push(e):e.noticeObject===Ie&&ge.value.insured.fileList.push(e)}))}})),J({productCode:s,isTenant:!te}).then((({data:e,code:i})=>{var a;if("10000"===i){ce.value=e;const{productFactor:i}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{},{signInfo:s}=ie(i);s.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&me.value.sign.push(i.code),"1"===i.code?ge.value.agent.isSign=!0:"2"===i.code?ge.value.holder.isSign=!0:"3"===i.code?ge.value.insured.isSign=!0:"4"===i.code?ge.value.holder.isShareSign=!0:"5"===i.code&&(ge.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((i=>{e.required&&me.value.verify.push(i.code),"1"===i.code?ge.value.holder.isVerify=!0:"2"===i.code&&(ge.value.insured.isVerify=!0)}))}))}})),Ee();const e=k.get("verifyData");if(e){const{serialNo:i,certNo:a,name:s}=e;W({certiNo:a,orderNo:b||S,serialNo:i,tenantId:n,userName:s}).then((e=>{const{code:i,data:a}=e;"10000"===i&&(de.remove("verifyData"),Ee())}))}})),(e,i)=>{const a=F,s=M,n=I,t=Y;return r(),l("div",we,[o(a),c("div",Ce,[o(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),c("div",je,[o(ye,{ref_key:"agentSignRef",ref:ue,"order-detail":f(le),"sign-string":f(ge).agent.signData,"show-sign":f(ge).agent.isSign,"show-verify":f(ge).agent.isVerify,"file-list":f(ge).agent.fileList,"personal-info":f(ge).agent.personalInfo,disabled:!!f(Q),title:"代理人",onHandleSign:i[0]||(i[0]=e=>pe("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"]),!f(Q)||f(ge).holder.isShareSign?(r(),m(ye,{key:0,ref_key:"holderSignRef",ref:fe,"order-detail":f(le),"sign-string":f(ge).holder.signData,"show-sign":f(Q)?f(ge).holder.isShareSign:f(ge).holder.isSign,"show-verify":f(ge).holder.isVerify,"file-list":f(ge).holder.fileList,"personal-info":f(ge).holder.personalInfo,title:"投保人",onHandleSign:i[1]||(i[1]=e=>pe("HOLDER",e,f(ge).holder.personalInfo.id)),onHandleVerify:he},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):h("",!0),!f(Q)||f(ge).insured.isShareSign?(r(!0),l(L,{key:1},V(f(ge).insured.personalInfo||[],(e=>(r(),m(ye,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:ve,"data-source":[],"order-detail":f(le),"sign-string":f(ge).insured.signData[e.id],"show-sign":f(Q)?f(ge).insured.isShareSign:f(ge).insured.isSign,"show-verify":f(ge).insured.isVerify,"file-list":f(ge).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>pe("INSURED",i,e.id),onHandleVerify:he},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):h("",!0)]),c("div",Ne,[c("div",{class:"refresh-btn",onClick:_e},[c("div",null,[o(n,{name:"refresh"})]),ke]),!f(Q)&&f(O)()?(r(),m(D,E({key:0,ref_key:"shareRef",ref:Ve},f(De),{onClick:_(Oe,["stop"])}),{default:d((()=>[o(t,{plain:"",type:"primary",class:"share-btn"},{default:d((()=>[p("分享")])),_:1})])),_:1},16,["onClick"])):h("",!0),o(t,{type:"primary",class:"submit-btn",onClick:Le},{default:d((()=>[p("确认支付")])),_:1})])])}}});export{Le as default};
