import{d as e,r as i,G as a,y as s,N as n,Z as t,b as r,c as l,e as o,w as d,i as u,$ as c,f,a0 as v,Y as g,h as p,j as h,g as m,V as y,C as S,a1 as I,a2 as b,u as w,a as j,K as C,a3 as N,o as k,s as O,U as L,a4 as V,a5 as T,a6 as E,a7 as _,n as x,T as D,D as U,P as R,a8 as B,a9 as P,aa as A,W as q,m as M,ab as Y,B as F,ac as G,ad as H}from"./index-6cc8434a.js";import{a as $,q as J}from"./product-579c2635.js";import{n as W}from"./nextStep-426fa138.js";import{g as K,i as X}from"./trial-ef9e8715.js";import{u as Z}from"./useAttachment-f5571407.js";import{S as z,f as Q,a as ee,s as ie}from"./verify-d38c8640.js";import{u as ae}from"./useOrder-c56f7891.js";import{M as se}from"./product-585b0e6f.js";import{t as ne}from"./PayInfo-886bc908.js";import{P as te,B as re}from"./constants-7afb7c3d.js";import{c as le}from"./scribing-f46408cc.js";import"./core-6edac259.js";import"./constant-8927d485.js";import"./utils-eddde60c.js";import"./infoCollection-ca271a49.js";import"./trial-6c386662.js";import"./merge-c5599fa4.js";import"./keysIn-a287568b.js";import"./isObjectLike-a9798079.js";import"./_getTag-7f09858e.js";import"./debounce-6981b306.js";import"./phoneVerify-14645321.js";import"./index-82acb600.js";import"./useDicData-17599ad4.js";import"./bankCard-a98a211b.js";const oe={class:"com-sign-part"},de={class:"people"},ue={class:"name"},ce={key:0,class:"verify-item"},fe=u("div",{class:"label"},"证件号码",-1),ve={class:"no"},ge={class:"sign-status"},pe={class:"status"},he=["src"],me={key:1,class:"sign-desc"},ye={class:"sign-body"},Se={class:"date"},Ie={class:"file"},be=e({name:"signPart"}),we=e({...be,props:{signString:{default:""},personalInfo:{default:()=>({})},fileList:{},title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:w,emit:j}){const C=e,N=i({}),k=i(""),O=i([]),L=i({});i(!0);const V=i(!1),T=i(0),{fileList:E}=Z(L,O),_=e=>`${e}`===S.CERT,x=a((()=>s().format("YYYY-MM-DD"))),D=()=>{var e,i;j("handleVerify",null==(e=N.value)?void 0:e.name,null==(i=N.value)?void 0:i.certNo)},U=()=>{V.value=!1},R=i(),B=()=>{R.value&&R.value.rewrite()},P=()=>{C.disabled||R.value&&R.value.openSign()},A=e=>{j("handleSign",e)};return w({validateSign:()=>new Promise(((e,i)=>{k.value?e(!0):i(new Error(`请${C.title}完成签名后，去支付`))})),validateVerify:()=>new Promise(((e,i)=>{var a;(null==(a=C.personalInfo)?void 0:a.isCert)!==g.YES?i(new Error(`请${C.title}完成认证后，去支付`)):e(!0)}))}),n((()=>C.signString),(()=>{k.value=C.signString}),{immediate:!0}),n((()=>C.personalInfo),(()=>{N.value=C.personalInfo}),{deep:!0,immediate:!0}),(e,i)=>{const a=I,s=b,n=t("AttachmentList"),S=t("FilePreview");return r(),l("div",oe,[o(s,{title:e.title,class:"card"},{extra:d((()=>{var i,a,s,n;return[u("div",de,[u("div",ue,c(null==(i=f(N))?void 0:i.name),1),e.showVerify&&_(null==(a=f(N))?void 0:a.certType)?(r(),l("div",{key:0,class:v(["status",{verified:(null==(s=f(N))?void 0:s.isCert)===f(g).YES}])},c((null==(n=f(N))?void 0:n.isCert)===f(g).YES?"已认证":"待认证"),3)):p("",!0)])]})),default:d((()=>{var i,s,n,t;return[e.showVerify&&(null==(i=f(N))?void 0:i.certNo)?(r(),l("div",ce,[fe,u("div",ve,c(null==(s=f(N))?void 0:s.certNo),1),(null==(n=f(N))?void 0:n.isCert)!==f(g).YES&&_(null==(t=f(N))?void 0:t.certType)?(r(),l("div",{key:0,class:"action",onClick:D},[h(" 去认证 "),o(a,{name:"right_arrow",class:"icon"})])):p("",!0)])):p("",!0)]})),_:1},8,["title"]),e.showSign?(r(),m(s,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:d((()=>[u("div",ge,[u("div",pe,c(f(k)?"已签名":"未签名"),1),e.disabled?p("",!0):(r(),l("div",{key:0,class:"resign",onClick:B},"重签"))])])),default:d((()=>{var e;return[o(z,{ref_key:"signRef",ref:R,modelValue:f(k),"onUpdate:modelValue":i[0]||(i[0]=e=>y(k)?k.value=e:null),class:"sign",onSubmitSign:A},{signImg:d((({data:e})=>[u("div",{class:"sign-board",onClick:P},[e?(r(),l("img",{key:0,src:e,class:"sign-img",alt:""},null,8,he)):(r(),l("span",me,"请签名"))])])),_:1},8,["modelValue"]),u("div",ye,[u("div",Se,"签名日期： "+c(f(x)),1),u("div",Ie,[(null==(e=f(E))?void 0:e.length)?(r(),m(n,{key:0,"attachment-list":f(E),"pre-text":"签名将被用于以下文件：",onPreviewFile:i[1]||(i[1]=e=>(e=>{T.value=e,V.value=!0})(e))},null,8,["attachment-list"])):p("",!0)])])]})),_:1},8,["title"])):p("",!0),f(V)?(r(),m(S,{key:1,show:f(V),"onUpdate:show":i[2]||(i[2]=e=>y(V)?V.value=e:null),"content-list":f(E),"is-only-view":"","active-index":f(T),text:"关闭",onOnCloseFilePreviewByMask:U},null,8,["show","content-list","active-index"])):p("",!0)])}}}),je=1,Ce=2,Ne=3;const ke={class:"long-verify"},Oe={class:"header"},Le={class:"verify-content"},Ve={class:"footer-button footer-bar"},Te=u("div",{class:"text"},"刷新",-1),Ee=e({__name:"verify",setup(e){const a=w(),s=j(),{productCode:t="",tenantId:c,agentCode:v="",agencyCode:y,saleChannelId:S,saleUserId:b,orderNo:Z,orderCode:z,extraInfo:oe,isShare:de,insurerCode:ue,preview:ce}=a.query;let fe={};try{fe=JSON.parse(decodeURIComponent(oe))}catch(Ye){}const ve=ae(),ge=`${window.origin}/baseInsurance/long/phoneVerify?${C.stringify({...a.query,orderNo:z||Z})}`,pe=new N({source:"localStorage"});i({});const he=i({}),me=i(),ye=i(),Se=i(),Ie=i({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),be=i({text:"",type:"",signInfo:""}),Ee=i({text:"",type:"",signInfo:""}),_e=(e,i)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),ee({callbackUrl:a,certiNo:i,faceAuthMode:"TENCENT",userName:e,tenantId:c}).then((({code:a,data:s})=>{if("10000"===a){const{originalUrl:a,serialNo:n}=s;window.location.href=a,O.set("verifyData",{serialNo:n,certNo:i,name:e})}}))},xe=(e,i,a)=>{var s;ie(e,i,null==(s=ve.value)?void 0:s.id,c,a)},De=i({sign:[],verify:[],scribing:""}),Ue=()=>{if(ce)return void x(te.SIGN,a.query);const e=[];me.value&&De.value.sign.includes("1")&&e.push(me.value.validateSign()),ye.value&&((de?De.value.sign.includes("4"):De.value.sign.includes("2"))&&e.push(ye.value.validateSign()),De.value.verify.includes("1")&&e.push(ye.value.validateVerify())),Se.value&&((de?De.value.sign.includes("5"):De.value.sign.includes("3"))&&e.push(...(Se.value||[]).map((e=>e.validateSign()))),De.value.verify.includes("2")&&e.push(...(Se.value||[]).map((e=>e.validateVerify())))),Promise.all(e).then((e=>{!De.value.scribing||be.value.signInfo?Z&&K({orderNo:z||Z,saleUserId:b,tenantId:c}).then((({code:e,data:i})=>{"10000"===e&&U.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{Object.assign(ve.value,{extInfo:{...ve.value.extInfo,buttonCode:re.SIGN,pageCode:te.SIGN}}),W(ve.value,((e,i)=>{i===R.JUMP_URL&&(window.location.href=e.paymentUrl)}))}))})):D("请先完成风险抄录")})).catch((e=>{D(e.message)}))},Re=i(),Be=()=>{me.value&&De.value.sign.includes("1")&&me.value.validateSign().then((()=>{Re.value&&Re.value.handleShare()})).catch((()=>{D("请完成代理人签字后进行分享")}))},Pe=(e=!1)=>{Z&&K({orderNo:z||Z,tenantId:c}).then((({code:i,data:a})=>{var s,n,t;"10000"===i&&(e&&((null==(s=null==a?void 0:a.holder)?void 0:s.isCert)===g.NO||(null==a?void 0:a.insuredList.some((e=>e.isCert===g.NO)))?D("用户未完身份认证及签字"):(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.HOLDER)))&&(null==a?void 0:a.tenantOrderAttachmentList.find((e=>e.category===B.ELECTRIC_SIGN&&e.objectType===P.INSURED)))||D("用户未完身份认证及签字")),Object.assign(ve.value,a),Ie.value.holder.personalInfo=a.holder,Ie.value.insured.personalInfo=a.insuredList,Object.assign(Ee.value,{type:A[a.extInfo.transcriptionType],signInfo:null==(t=null==(n=a.riskTranscriptionList)?void 0:n[0])?void 0:t.thumbnail}),a.tenantOrderAttachmentList.forEach((e=>{e.objectType===je?Ie.value.holder.signData=e.fileBase64:e.objectType===Ne?Ie.value.agent.signData=e.fileBase64:e.objectType===Ce&&(Ie.value.insured.signData[e.objectId]=e.fileBase64)})))}))},Ae=()=>{Pe(!0)},qe=i({imgUrl:"",desc:"",title:"",link:ge}),Me=e=>{const{type:i,text:n}=be.value;"handle"===i?s.push({path:"scribing",query:{...a.query,text:n,orderId:ve.value.id}}):le({content:n,image:e,orderNo:Z,tenantId:c,transcriptionType:H.AUTO}).then((({code:e})=>{"10000"===e&&Pe()}))};return n([()=>Ee.value,()=>be.value],(()=>{Object.assign(be.value,Ee.value)}),{deep:!0,immediate:!0}),k((()=>{$({productCode:t,tenantId:c}).then((({data:e,code:i})=>{if("10000"===i){const{wxShareConfig:i,showWXShare:a,title:s,desc:n,image:t}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(qe.value,{...i,imgUrl:i.image,isShare:a}):Object.assign(qe.value,{title:s,desc:n,imgUrl:t,isShare:a}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&q(e.BASIC_INFO.themeType)}})),J({productCode:t}).then((({code:e,data:i})=>{var a;if("10000"===e){const{productMaterialMap:e}=(null==(a=i.productInsureMaterialVOList)?void 0:a[0])||{};(Object.values(e||{})||[]).flat().filter((e=>e.materialType===se.SIGN)).forEach((e=>{e.noticeObject===Ne?Ie.value.agent.fileList.push(e):e.noticeObject===je?Ie.value.holder.fileList.push(e):e.noticeObject===Ce&&Ie.value.insured.fileList.push(e)}))}})),X({productCode:t,isTenant:!ce}).then((({data:e,code:i})=>{var a;if("10000"===i){he.value=e;const{productFactor:i}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{},{signInfo:s}=ne(i);s.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&De.value.sign.push(i.code),"1"===i.code?Ie.value.agent.isSign=!0:"2"===i.code?Ie.value.holder.isSign=!0:"3"===i.code?Ie.value.insured.isSign=!0:"4"===i.code?Ie.value.holder.isShareSign=!0:"5"===i.code&&(Ie.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(Ee.value.text=e.remark,De.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?Ee.value.type="handle":Ee.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((i=>{e.required&&De.value.verify.push(i.code),"1"===i.code?Ie.value.holder.isVerify=!0:"2"===i.code&&(Ie.value.insured.isVerify=!0)}))}))}})),Pe();const e=O.get("verifyData");if(e){const{serialNo:i,certNo:a,name:s}=e;Q({certiNo:a,orderNo:z||Z,serialNo:i,tenantId:c,userName:s}).then((e=>{const{code:i,data:a}=e;"10000"===i&&(pe.remove("verifyData"),Pe())}))}})),(e,i)=>{const a=M,s=Y,n=I,t=F,c=G;return r(),l("div",ke,[o(a),u("div",Oe,[o(s,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),u("div",Le,[o(we,{ref_key:"agentSignRef",ref:me,"order-detail":f(ve),"sign-string":f(Ie).agent.signData,"show-sign":f(Ie).agent.isSign,"show-verify":f(Ie).agent.isVerify,"file-list":f(Ie).agent.fileList,"personal-info":f(Ie).agent.personalInfo,disabled:!!f(de),title:"代理人",onHandleSign:i[0]||(i[0]=e=>xe("AGENT",e))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","disabled"]),!f(de)||f(Ie).holder.isShareSign?(r(),m(we,{key:0,ref_key:"holderSignRef",ref:ye,"order-detail":f(ve),"sign-string":f(Ie).holder.signData,"show-sign":f(de)?f(Ie).holder.isShareSign:f(Ie).holder.isSign,"show-verify":f(Ie).holder.isVerify,"file-list":f(Ie).holder.fileList,"personal-info":f(Ie).holder.personalInfo,title:"投保人",onHandleSign:i[1]||(i[1]=e=>xe("HOLDER",e,f(Ie).holder.personalInfo.id)),onHandleVerify:_e},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):p("",!0),!f(de)||f(Ie).insured.isShareSign?(r(!0),l(L,{key:1},V(f(Ie).insured.personalInfo||[],(e=>(r(),m(we,{key:e.id,ref_for:!0,ref_key:"insuredSignRef",ref:Se,"data-source":[],"order-detail":f(ve),"sign-string":f(Ie).insured.signData[e.id],"show-sign":f(de)?f(Ie).insured.isShareSign:f(Ie).insured.isSign,"show-verify":f(Ie).insured.isVerify,"file-list":f(Ie).insured.fileList,"personal-info":e||{},title:"被保人",onHandleSign:i=>xe("INSURED",i,e.id),onHandleVerify:_e},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","onHandleSign"])))),128)):p("",!0)]),u("div",Ve,[u("div",{class:"refresh-btn",onClick:Ae},[u("div",null,[o(n,{name:"refresh"})]),Te]),!f(de)&&f(T)()?(r(),m(_,E({key:0,ref_key:"shareRef",ref:Re},f(qe)),{default:d((()=>[o(t,{plain:"",type:"primary",class:"share-btn",onClick:Be},{default:d((()=>[h("分享")])),_:1})])),_:1},16)):p("",!0),o(t,{type:"primary",class:"submit-btn",onClick:Ue},{default:d((()=>[h("确认支付")])),_:1})]),f(De).scribing.type?(r(),m(c,E({key:0},f(be),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:Me}),null,16)):p("",!0)])}}});export{Ee as default};
