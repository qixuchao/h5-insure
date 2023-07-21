import{d as e,r as i,G as a,y as s,N as n,Z as t,b as r,c as l,e as o,w as d,i as u,$ as c,f,a0 as v,Y as g,h as p,j as h,g as m,V as y,C as S,a1 as b,a2 as I,u as w,a as j,K as C,a3 as N,o as k,s as O,U as L,a4 as V,a5 as T,a6 as E,a7 as _,n as x,T as D,D as U,P as R,a8 as B,a9 as P,aa as A,W as q,m as M,ab as Y,B as F,ac as G,ad as H}from"./index-59e4fb8c.js";import{a as $,q as J}from"./product-2d169e39.js";import{n as W}from"./nextStep-fd2d691d.js";import{g as K,i as X}from"./trial-b1f13c63.js";import{u as Z}from"./useAttachment-cb86ac47.js";import{S as z,f as Q,a as ee,s as ie}from"./verify-52fd0eb6.js";import{u as ae}from"./useOrder-abdde6af.js";import{M as se}from"./product-585b0e6f.js";import{t as ne}from"./PayInfo-9dec65db.js";import{P as te,B as re}from"./constants-7afb7c3d.js";import{c as le}from"./scribing-6bfb2e84.js";import{m as oe}from"./merge-12f1f658.js";import"./core-e7741020.js";import"./constant-8927d485.js";import"./utils-f4f15412.js";import"./infoCollection-e9441244.js";import"./trial-49579844.js";import"./keysIn-193626ca.js";import"./isObjectLike-a9798079.js";import"./_getTag-0acae921.js";import"./debounce-592a0672.js";import"./phoneVerify-d5c242fd.js";import"./index-363c64b3.js";import"./useDicData-d0a54c8f.js";import"./bankCard-add99bb6.js";const de={class:"com-sign-part"},ue={class:"people"},ce={class:"name"},fe={key:0,class:"verify-item"},ve=u("div",{class:"label"},"证件号码",-1),ge={class:"no"},pe={class:"sign-status"},he={class:"status"},me=["src"],ye={key:1,class:"sign-desc"},Se={class:"sign-body"},be={class:"date"},Ie={class:"file"},we=e({name:"signPart"}),je=e({...we,props:{signString:{default:""},personalInfo:{default:()=>({})},fileList:{},title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:w,emit:j}){const C=e,N=i({}),k=i(""),O=i([]),L=i({});i(!0);const V=i(!1),T=i(0),{fileList:E}=Z(L,O),_=e=>`${e}`===S.CERT,x=a((()=>s().format("YYYY-MM-DD"))),D=()=>{var e,i;j("handleVerify",null==(e=N.value)?void 0:e.name,null==(i=N.value)?void 0:i.certNo)},U=()=>{V.value=!1},R=i(),B=()=>{R.value&&R.value.rewrite()},P=()=>{C.disabled||R.value&&R.value.openSign()},A=e=>{j("handleSign",e)};return w({validateSign:()=>new Promise(((e,i)=>{k.value?e(!0):i(new Error(`请${C.title}完成签名后，去支付`))})),validateVerify:()=>new Promise(((e,i)=>{var a;(null==(a=C.personalInfo)?void 0:a.isCert)!==g.YES?i(new Error(`请${C.title}完成认证后，去支付`)):e(!0)}))}),n((()=>C.signString),(()=>{k.value=C.signString}),{immediate:!0}),n((()=>C.personalInfo),(()=>{N.value=C.personalInfo}),{deep:!0,immediate:!0}),(e,i)=>{const a=b,s=I,n=t("AttachmentList"),S=t("FilePreview");return r(),l("div",de,[o(s,{title:e.title,class:"card"},{extra:d((()=>{var i,a,s,n;return[u("div",ue,[u("div",ce,c(null==(i=f(N))?void 0:i.name),1),e.showVerify&&_(null==(a=f(N))?void 0:a.certType)?(r(),l("div",{key:0,class:v(["status",{verified:(null==(s=f(N))?void 0:s.isCert)===f(g).YES}])},c((null==(n=f(N))?void 0:n.isCert)===f(g).YES?"已认证":"待认证"),3)):p("",!0)])]})),default:d((()=>{var i,s,n,t;return[e.showVerify&&(null==(i=f(N))?void 0:i.certNo)?(r(),l("div",fe,[ve,u("div",ge,c(null==(s=f(N))?void 0:s.certNo),1),(null==(n=f(N))?void 0:n.isCert)!==f(g).YES&&_(null==(t=f(N))?void 0:t.certType)?(r(),l("div",{key:0,class:"action",onClick:D},[h(" 去认证 "),o(a,{name:"right_arrow",class:"icon"})])):p("",!0)])):p("",!0)]})),_:1},8,["title"]),e.showSign?(r(),m(s,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:d((()=>[u("div",pe,[u("div",he,c(f(k)?"已签名":"未签名"),1),e.disabled?p("",!0):(r(),l("div",{key:0,class:"resign",onClick:B},"重签"))])])),default:d((()=>{var e;return[o(z,{ref_key:"signRef",ref:R,modelValue:f(k),"onUpdate:modelValue":i[0]||(i[0]=e=>y(k)?k.value=e:null),class:"sign",onSubmitSign:A},{signImg:d((({data:e})=>[u("div",{class:"sign-board",onClick:P},[e?(r(),l("img",{key:0,src:e,class:"sign-img",alt:""},null,8,me)):(r(),l("span",ye,"请签名"))])])),_:1},8,["modelValue"]),u("div",Se,[u("div",be,"签名日期： "+c(f(x)),1),u("div",Ie,[(null==(e=f(E))?void 0:e.length)?(r(),m(n,{key:0,"attachment-list":f(E),"pre-text":"签名将被用于以下文件：",onPreviewFile:i[1]||(i[1]=e=>(e=>{T.value=e,V.value=!0})(e))},null,8,["attachment-list"])):p("",!0)])])]})),_:1},8,["title"])):p("",!0),f(V)?(r(),m(S,{key:1,show:f(V),"onUpdate:show":i[2]||(i[2]=e=>y(V)?V.value=e:null),"content-list":f(E),"is-only-view":"","active-index":f(T),text:"关闭",onOnCloseFilePreviewByMask:U},null,8,["show","content-list","active-index"])):p("",!0)])}}}),Ce=1,Ne=2,ke=3;const Oe={class:"long-verify"},Le={class:"header"},Ve={class:"verify-content"},Te={class:"footer-button footer-bar"},Ee=u("div",{class:"text"},"刷新",-1),_e=e({__name:"verify",setup(e){const a=w(),s=j(),{productCode:t="",tenantId:c,agentCode:v="",agencyCode:y,saleChannelId:S,saleUserId:I,orderNo:Z,orderCode:z,extraInfo:de,isShare:ue,insurerCode:ce,preview:fe}=a.query;let ve={};try{ve=JSON.parse(decodeURIComponent(de))}catch(Fe){}const ge=ae(),pe=`${window.origin}/baseInsurance/long/phoneVerify?${C.stringify({...a.query,orderNo:z||Z})}`,he=new N({source:"localStorage"});i({});const me=i({}),ye=i(),Se=i(),be=i(),Ie=i({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),we=i({text:"",type:"",signInfo:""}),_e=i({text:"",type:"",signInfo:""}),xe=(e,i)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),ee({callbackUrl:a,certiNo:i,faceAuthMode:"TENCENT",userName:e,tenantId:c}).then((({code:a,data:s})=>{if("10000"===a){const{originalUrl:a,serialNo:n}=s;window.location.href=a,O.set("verifyData",{serialNo:n,certNo:i,name:e})}}))},De=(e,i,a)=>{var s;ie(e,i,null==(s=ge.value)?void 0:s.id,c,a)},Ue=i({sign:[],verify:[],scribing:""}),Re=()=>{if(fe)return void x(te.SIGN,a.query);const e=[];ye.value&&Ue.value.sign.includes("1")&&e.push(ye.value.validateSign()),Se.value&&((ue?Ue.value.sign.includes("4"):Ue.value.sign.includes("2"))&&e.push(Se.value.validateSign()),Ue.value.verify.includes("1")&&e.push(Se.value.validateVerify())),be.value&&((ue?Ue.value.sign.includes("5"):Ue.value.sign.includes("3"))&&e.push(...(be.value||[]).map((e=>e.validateSign()))),Ue.value.verify.includes("2")&&e.push(...(be.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{!Ue.value.scribing||we.value.signInfo?Z&&K({orderNo:z||Z,saleUserId:I,tenantId:c}).then((({code:e,data:i})=>{"10000"===e&&U.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{Object.assign(ge.value,{extInfo:{...ge.value.extInfo,buttonCode:re.SIGN,pageCode:te.SIGN}}),W(ge.value,((e,i)=>{i===R.JUMP_URL&&(window.location.href=e.paymentUrl)}))}))})):D("请先完成风险抄录")})).catch((e=>{D(e.message)}))},Be=i(),Pe=()=>{ye.value&&Ue.value.sign.includes("1")&&ye.value.validateSign().then((()=>{Be.value&&Be.value.handleShare()})).catch((()=>{D("请完成代理人签字后进行分享")}))},Ae=(e=!1)=>{Z&&K({orderNo:z||Z,tenantId:c}).then((({code:i,data:a})=>{var s,n,t;"10000"===i&&(e&&((null==(s=null==a?void 0:a.holder)?void 0:s.isCert)===g.NO||(null==a?void 0:a.insuredList.some((e=>e.isCert===g.NO)))?D("用户未完身份认证及签字"):(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.HOLDER)))&&(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.INSURED)))||D("用户未完身份认证及签字")),Object.assign(ge.value,a),Ie.value.holder.personalInfo=a.holder,Ie.value.insured.personalInfo=a.insuredList,Object.assign(_e.value,{type:A[a.extInfo.transcriptionType],signInfo:null==(t=null==(n=a.riskTranscriptionList)?void 0:n[0])?void 0:t.thumbnail}),a.tenantOrderAttachmentList.forEach((e=>{e.objectType===Ce?Ie.value.holder.signData=e.fileBase64:e.objectType===ke?Ie.value.agent.signData=e.fileBase64:e.objectType===Ne&&(Ie.value.insured.signData[e.objectId]=e.fileBase64)})))}))},qe=()=>{Ae(!0)},Me=i({imgUrl:"",desc:"",title:"",link:pe}),Ye=e=>{const{type:i,text:n}=we.value;"handle"===i?s.push({path:"scribing",query:{...a.query,text:n,orderId:ge.value.id}}):le({content:n,image:e,orderNo:Z,tenantId:c,transcriptionType:H.AUTO}).then((({code:e})=>{"10000"===e&&Ae()}))};return n([()=>_e.value,()=>we.value],(()=>{oe(we.value,_e.value)}),{deep:!0,immediate:!0}),k((()=>{$({productCode:t,tenantId:c}).then((({data:e,code:i})=>{if("10000"===i){const{wxShareConfig:i,showWXShare:a,title:s,desc:n,image:t}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(Me.value,{...i,imgUrl:i.image,isShare:a}):Object.assign(Me.value,{title:s,desc:n,imgUrl:t,isShare:a}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&q(e.BASIC_INFO.themeType)}})),J({productCode:t}).then((({code:e,data:i})=>{var a;if("10000"===e){const{productMaterialMap:e}=(null==(a=i.productInsureMaterialVOList)?void 0:a[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===se.SIGN)).forEach((e=>{e.noticeObject===ke?Ie.value.agent.fileList.push(e):e.noticeObject===Ce?Ie.value.holder.fileList.push(e):e.noticeObject===Ne&&Ie.value.insured.fileList.push(e)}))}})),X({productCode:t,isTenant:!fe}).then((({data:e,code:i})=>{var a;if("10000"===i){me.value=e;const{productFactor:i}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{},{signInfo:s}=ne(i);s.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&Ue.value.sign.push(i.code),"1"===i.code?Ie.value.agent.isSign=!0:"2"===i.code?Ie.value.holder.isSign=!0:"3"===i.code?Ie.value.insured.isSign=!0:"4"===i.code?Ie.value.holder.isShareSign=!0:"5"===i.code&&(Ie.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(_e.value.text=e.remark,console.log("schema",e),Ue.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?_e.value.type="handle":_e.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((i=>{e.required&&Ue.value.verify.push(i.code),"1"===i.code?Ie.value.holder.isVerify=!0:"2"===i.code&&(Ie.value.insured.isVerify=!0)}))}))}})),Ae();const e=O.get("verifyData");if(e){const{serialNo:i,certNo:a,name:s}=e;Q({certiNo:a,orderNo:z||Z,serialNo:i,tenantId:c,userName:s}).then((e=>{const{code:i,data:a}=e;"10000"===i&&(he.remove("verifyData"),Ae())}))}})),(e,i)=>{const a=M,s=Y,n=b,t=F,c=G;return r(),l("div",Oe,[o(a),u("div",Le,[o(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),u("div",Ve,[o(je,{ref_key:"agentSignRef",ref:ye,"order-detail":f(ge),"sign-string":f(Ie).agent.signData,"show-sign":f(Ie).agent.isSign,"show-verify":f(Ie).agent.isVerify,"file-list":f(Ie).agent.fileList,"personal-info":f(Ie).agent.personalInfo,disabled:!!f(ue),title:"代理人",onHandleSign:i[0]||(i[0]=e=>De("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"]),!f(ue)||f(Ie).holder.isShareSign?(r(),m(je,{key:0,ref_key:"holderSignRef",ref:Se,"order-detail":f(ge),"sign-string":f(Ie).holder.signData,"show-sign":f(ue)?f(Ie).holder.isShareSign:f(Ie).holder.isSign,"show-verify":f(Ie).holder.isVerify,"file-list":f(Ie).holder.fileList,"personal-info":f(Ie).holder.personalInfo,title:"投保人",onHandleSign:i[1]||(i[1]=e=>De("HOLDER",e,f(Ie).holder.personalInfo.id)),onHandleVerify:xe},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):p("",!0),!f(ue)||f(Ie).insured.isShareSign?(r(!0),l(L,{key:1},V(f(Ie).insured.personalInfo||[],(e=>(r(),m(je,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:be,"data-source":[],"order-detail":f(ge),"sign-string":f(Ie).insured.signData[e.id],"show-sign":f(ue)?f(Ie).insured.isShareSign:f(Ie).insured.isSign,"show-verify":f(Ie).insured.isVerify,"file-list":f(Ie).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>De("INSURED",i,e.id),onHandleVerify:xe},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):p("",!0)]),u("div",Te,[u("div",{class:"refresh-btn",onClick:qe},[u("div",null,[o(n,{name:"refresh"})]),Ee]),!f(ue)&&f(T)()?(r(),m(_,E({key:0,ref_key:"shareRef",ref:Be},f(Me)),{default:d((()=>[o(t,{plain:"",type:"primary",class:"share-btn",onClick:Pe},{default:d((()=>[h("分享")])),_:1})])),_:1},16)):p("",!0),o(t,{type:"primary",class:"submit-btn",onClick:Re},{default:d((()=>[h("确认支付")])),_:1})]),f(Ue).scribing?(r(),m(c,E({key:0},f(we),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:Ye}),null,16)):p("",!0)])}}});export{_e as default};
