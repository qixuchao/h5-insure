import{d as e,r as i,I as a,s,v as n,a4 as t,b as r,c as l,e as o,w as d,f as u,x as c,i as f,y as g,af as v,Z as h,g as p,Y as m,ad as y,C as S,Q as w,a7 as I,u as b,a as j,ah as C,o as _,W as k,X as V,D as E,P as N,F as x,T as L,ai as D,B as O,aj as P}from"./index-3300826d.js";import{q as T}from"./product-276c1373.js";import{n as R}from"./nextStep-576c2fe1.js";import{g as U,i as Y}from"./trial-fa78661d.js";import{u as M}from"./useAttachment-f13b9a4a.js";import{_ as A,f as B,s as F}from"./verify-95966968.js";import{u as H}from"./useOrder-2c46487b.js";import{O as q}from"./order-1732f29e.js";import{t as G}from"./SchemaRenderField.vue_vue_type_style_index_0_scoped_true_lang-fe6cebc4.js";/* empty css              */import"./bankCard-07bf592d.js";import{p as $}from"./pageJump-ce50f880.js";import"./pdfh5-008ca364.js";import"./core-13a4c4c2.js";import"./constant-c3f28a3b.js";import"./utils-a8052624.js";import"./infoCollection-aa0e608b.js";import"./trial-28355e02.js";import"./phoneVerify-2f15fb99.js";import"./keysIn-3ff85984.js";import"./isObjectLike-a9798079.js";const J={class:"com-sign-part"},W={class:"people"},Q={class:"name"},X={key:0,class:"verify-item"},Z=u("div",{class:"label"},"证件号码",-1),z={class:"no"},K={class:"sign-status"},ee={class:"status"},ie=["src"],ae={key:1,class:"sign-desc"},se={class:"sign-body"},ne={class:"date"},te={class:"file"},re=e({name:"signPart"}),le=e({...re,props:{signString:{default:""},personalInfo:{default:()=>({})},fileList:null,title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:b,emit:j}){const C=e,_=i({}),k=i(""),V=i([]),E=i({});i(!0);const N=i(!1),x=i(0),{fileList:L}=M(E,V),D=e=>`${e}`===S.CERT,O=a((()=>s().format("YYYY-MM-DD"))),P=()=>{var e,i;j("handleVerify",null==(e=_.value)?void 0:e.name,null==(i=_.value)?void 0:i.certNo)},T=()=>{N.value=!1},R=i(),U=()=>{R.value&&R.value.rewrite()},Y=()=>{R.value&&R.value.openSign()},B=e=>{j("handleSign",e)};return b({validateSign:()=>new Promise(((e,i)=>{k.value?e(!0):i(new Error(`请${C.title}成签名后，去支付`))})),validateVerify:()=>new Promise(((e,i)=>{var a,s;(null==(s=null==(a=C.personalInfo)?void 0:a.extInfo)?void 0:s.isCert)!==v.YES?i(new Error(`请${C.title}完成认证后，去支付`)):e(!0)}))}),n((()=>C.signString),(()=>{k.value=C.signString}),{immediate:!0}),n((()=>C.personalInfo),(()=>{_.value=C.personalInfo}),{deep:!0,immediate:!0}),(i,a)=>{const s=w,n=I,S=t("AttachmentList"),b=t("FilePreview");return r(),l("div",J,[o(n,{title:e.title,class:"card"},{extra:d((()=>{var i,a,s,n,t,o;return[u("div",W,[u("div",Q,c(null==(i=f(_))?void 0:i.name),1),e.showVerify&&D(null==(a=f(_))?void 0:a.certType)?(r(),l("div",{key:0,class:g(["status",{verified:(null==(n=null==(s=f(_))?void 0:s.extInfo)?void 0:n.isCert)===f(v).YES}])},c((null==(o=null==(t=f(_))?void 0:t.extInfo)?void 0:o.isCert)===f(v).YES?"已认证":"待认证"),3)):h("",!0)])]})),default:d((()=>{var i,a,n,t,d;return[e.showVerify&&(null==(i=f(_))?void 0:i.certNo)?(r(),l("div",X,[Z,u("div",z,c(null==(a=f(_))?void 0:a.certNo),1),(null==(t=null==(n=f(_))?void 0:n.extInfo)?void 0:t.isCert)!==f(v).YES&&D(null==(d=f(_))?void 0:d.certType)?(r(),l("div",{key:0,class:"action",onClick:P},[p(" 去认证 "),o(s,{name:"right_arrow",class:"icon"})])):h("",!0)])):h("",!0)]})),_:1},8,["title"]),e.showSign?(r(),m(n,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:d((()=>[u("div",K,[u("div",ee,c(f(k)?"已签名":"未签名"),1),u("div",{class:"resign",onClick:U},"重签")])])),default:d((()=>{var e;return[o(A,{ref_key:"signRef",ref:R,modelValue:f(k),"onUpdate:modelValue":a[0]||(a[0]=e=>y(k)?k.value=e:null),class:"sign",onSubmitSign:B},{signImg:d((({data:e})=>[u("div",{class:"sign-board",onClick:Y},[e?(r(),l("img",{key:0,src:e,class:"sign-img",alt:""},null,8,ie)):(r(),l("span",ae,"请签名"))])])),_:1},8,["modelValue"]),u("div",se,[u("div",ne,"签名日期： "+c(f(O)),1),u("div",te,[(null==(e=f(L))?void 0:e.length)?(r(),m(S,{key:0,"attachment-list":f(L),"pre-text":"签名将被用于以下文件：",onPreviewFile:a[1]||(a[1]=e=>(e=>{x.value=e,N.value=!0})(e))},null,8,["attachment-list"])):h("",!0)])])]})),_:1},8,["title"])):h("",!0),f(N)?(r(),m(b,{key:1,show:f(N),"onUpdate:show":a[2]||(a[2]=e=>y(N)?N.value=e:null),"content-list":f(L),"is-only-view":"","active-index":f(x),text:"关闭",onOnCloseFilePreviewByMask:T},null,8,["show","content-list","active-index"])):h("",!0)])}}}),oe=2,de=1,ue=2,ce=3;const fe={class:"long-verify"},ge={class:"header"},ve={class:"verify-content"},he={class:"footer-button footer-bar"},pe=u("div",{class:"text"},"刷新",-1),me=e({__name:"verify",setup(e){const a=b(),s=j(),{productCode:n="",tenantId:c,agentCode:g="",agencyCode:v,saleChannelId:y,saleUserId:S,orderNo:I,orderCode:M,extraInfo:A,isShare:J,insurerCode:W,preview:Q}=a.query;let X={};try{X=JSON.parse(decodeURIComponent(A))}catch(we){}const Z=H(),z=window.location.href,K=new C({source:"localStorage"});i({});const ee=i({}),ie=()=>{},ae=i(),se=i(),ne=i(),te=i({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),re=(e,i)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),B({callbackUrl:a,certiNo:i,faceAuthMode:"TENCENT",userName:e,tenantId:c}).then((({code:a,data:s})=>{if("10000"===a){const{originalUrl:a,serialNo:n}=s;window.location.href=a,K.set("verifyData",{serialNo:n,certNo:i,name:e})}}))},me=(e,i,a)=>{var s;F(e,i,null==(s=Z.value)?void 0:s.id,c,a)},ye=()=>{Promise.all([ae.value.validateSign(),se.value.validateSign(),...(ne.value||[]).map((e=>e.validateSign())),se.value.validateVerify(),...(ne.value||[]).map((e=>e.validateVerify()))]).then((e=>{U({orderNo:M||I,saleUserId:S,tenantId:c}).then((({code:e,data:i})=>{"10000"===e&&([q.PENDING,q.PAYMENT_FAILED,q.UNDER_WRITING_SUCCESS].includes(i.orderStatus)?E.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{Object.assign(Z.value,{extInfo:{...Z.value.extInfo,buttonCode:"",pageCode:"sign"}}),R(Z.value,((e,i)=>{i===N.JUMP_PAGE&&s.push({path:x[e.nextPageCode],query:{...a.query,orderNo:M||I}})}))})):$("paymentResult",a.query))}))})).catch((e=>{L(e.message)}))},Se=()=>{T({productCode:n}).then((({code:e,data:i})=>{var a;if("10000"===e){const{productMaterialMap:e}=(null==(a=i.productInsureMaterialVOList)?void 0:a[0])||{};(Object.values(e)||[]).flat().filter((e=>e.materialType===oe)).forEach((e=>{e.noticeObject===ce?te.value.agent.fileList.push(e):e.noticeObject===de?te.value.holder.fileList.push(e):e.noticeObject===ue&&te.value.insured.fileList.push(e)}))}})),Y({productCode:n,isTenant:!Q}).then((({data:e,code:i})=>{var a;if("10000"===i){ee.value=e;const{productFactor:i}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{},{signInfo:s}=G(i);s.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((e=>{"1"===e.code?te.value.agent.isSign=!0:"2"===e.code?te.value.holder.isSign=!0:"3"===e.code?te.value.insured.isSign=!0:"4"===e.code?te.value.holder.isShareSign=!0:"5"===e.code&&(te.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((e=>{"1"===e.code?te.value.holder.isVerify=!0:"2"===e.code&&(te.value.insured.isVerify=!0)}))}))}})),U({orderNo:M||I,tenantId:c}).then((({code:e,data:i})=>{"10000"===e&&(Object.assign(Z.value,i),te.value.holder.personalInfo=i.tenantOrderHolder,te.value.insured.personalInfo=i.tenantOrderInsuredList,i.tenantOrderAttachmentList.forEach((e=>{e.objectType===de?te.value.holder.signData=e.fileBase64:e.objectType===ce?te.value.agent.signData=e.fileBase64:e.objectType===ue&&(te.value.insured.signData[e.objectId]=e.fileBase64)})))}))};return _((()=>{Se()})),(e,i)=>{const a=D,s=w,n=O,c=P,g=t("ProPageWrap");return r(),m(g,null,{default:d((()=>[u("div",fe,[u("div",ge,[o(a,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),u("div",ve,[o(le,{ref_key:"agentSignRef",ref:ae,"data-source":[],"order-detail":f(Z),"sign-string":f(te).agent.signData,"show-sign":f(te).agent.isSign,"show-verify":f(te).agent.isVerify,"show-share-sign":f(te).agent.isShareSign,"file-list":f(te).agent.fileList,"personal-info":f(te).agent.personalInfo,title:"代理人",onHandleSign:i[0]||(i[0]=e=>me("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","show-share-sign","file-list","personal-info"]),o(le,{ref_key:"holderSignRef",ref:se,"data-source":[],"order-detail":f(Z),"sign-string":f(te).holder.signData,"show-sign":f(te).holder.isSign,"show-verify":f(te).holder.isVerify,"show-share-sign":f(te).holder.isShareSign,"file-list":f(te).holder.fileList,"personal-info":f(te).holder.personalInfo,title:"投保人",onHandleSign:i[1]||(i[1]=e=>me("HOLDER",e,f(te).holder.personalInfo.id)),onHandleVerify:re},null,8,["order-detail","sign-string","show-sign","show-verify","show-share-sign","file-list","personal-info"]),(r(!0),l(k,null,V(f(te).insured.personalInfo||[],(e=>(r(),m(le,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:ne,"data-source":[],"order-detail":f(Z),"sign-string":f(te).insured.signData[e.id],"show-sign":f(te).insured.isSign,"show-verify":f(te).insured.isVerify,"show-share-sign":f(te).insured.isShareSign,"file-list":f(te).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>me("INSURED",i,e.id),onHandleVerify:re},null,8,["order-detail","sign-string","show-sign","show-verify","show-share-sign","file-list","personal-info","onHandleSign"])))),128))]),u("div",he,[f(J)?h("",!0):(r(),l("div",{key:0,class:"refresh-btn",onClick:ie},[u("div",null,[o(s,{name:"refresh"})]),pe])),f(J)?h("",!0):(r(),m(c,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:f(z)},{default:d((()=>[o(n,{plain:"",type:"primary",class:"share-btn"},{default:d((()=>[p("分享")])),_:1})])),_:1},8,["link"])),o(n,{type:"primary",class:"submit-btn",onClick:ye},{default:d((()=>[p("提交")])),_:1})])])])),_:1})}}});export{me as default};
