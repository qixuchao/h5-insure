import{d as e,i as a,h as i,bK as t,cP as s,j as n,k as r,am as o,A as l,az as d,ak as u,cQ as c,l as v,o as f,c as p,b as h,a as g,u as m,p as y,f as I,a0 as S,w as b,a8 as j,aF as O,ay as N,T as L,cR as T,a6 as w,aa as x,cH as D,cI as E,cS as C,cJ as k,bA as q,ab as R,cK as V,cT as H,aj as z,cU as P}from"./index-37af9da6.js";import{b as U}from"./product-0b4a7c84.js";import{g as A,m as $}from"./trial-ec1e4111.js";import{_}from"./SignPart-79b8e92f.js";import{u as B}from"./useOrder-a5c556f3.js";import{N as F}from"./notice-33e6eedd.js";import"./PolicyInfo-b04e1747.js";import{c as M}from"./scribing-fcb76bf0.js";import{p as J}from"./utils-36620771.js";import{g as K}from"./utils-247ef90f.js";import"./index-b32a8249.js";import"./cloneDeep-ce4dc7ec.js";import"./infoCollection-a733896c.js";import"./trial-d750509a.js";const G={class:"long-verify"},Q={class:"header"},Y={class:"verify-content"},W={class:"footer-button"},X=e({__name:"holderSign",setup(e){const X=a(),Z=i(),{productCode:ee="",tenantId:ae,agentCode:ie="",agencyCode:te,saleChannelId:se,saleUserId:ne,orderNo:re,orderCode:oe,extraInfo:le,isShare:de,insurerCode:ue,preview:ce}=X.query;let ve={};try{ve=JSON.parse(decodeURIComponent(le))}catch(Te){}const fe=B(),pe=`${window.origin}/baseInsurance/long/phoneVerify?${t.stringify({...X.query,orderNo:oe||re})}`,he=new s({source:"localStorage"}),ge=n(),me=n({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:[]},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{}},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:""}}),ye=n({}),Ie=n({}),Se=n({sign:[],verify:[],scribing:""}),be=r((()=>{var e,a;const{age:i,relationToHolder:t,id:s}=(null==(a=null==(e=me.value.insured)?void 0:e.personalInfo)?void 0:a[0])||{};return`${t}`===o.CERT||i<18})),je=()=>{if(ce)return void O(N.SIGN,X.query);const e=[];ge.value&&((de?Se.value.sign.includes("4"):Se.value.sign.includes("2"))&&e.push(ge.value.validateSign()),Se.value.verify.includes("1")&&e.push(ge.value.validateVerify())),Promise.all(e).then((e=>{!Se.value.scribing||ye.value.status?T(fe.value).then((({code:e,data:a})=>{"10000"===e&&(a.authStatus===`${w.YES}`?Z.push({path:x.payAuth,query:X.query}):Promise.all([D({bizObjectId:[fe.value.holder.id],bizObjectType:E.HOLDER,orderId:fe.value.id,tenantId:ae}),be.value&&D({bizObjectId:[fe.value.insuredList[0].id],bizObjectType:E.INSURED,orderId:fe.value.id,tenantId:ae})]).then((e=>{if("10000"===e[0].code){if(de)return void L("已完成");Z.push({path:x.sign,query:X.query})}})))})):L("请先完成风险抄录")})).catch((e=>{L(e.message)}))},Oe=()=>{re&&A({orderNo:oe||re,tenantId:ae}).then((({code:e,data:a})=>{var i,t,s,n;if("10000"===e){const e=[];a.tenantOrderAttachmentList.forEach((a=>{a.objectType===F.HOlDER&&30===a.category&&e.push(a.fileBase64)})),me.value.holder.signData=e,Object.assign(Ie.value,{type:C[a.extInfo.transcriptionType],signInfo:null==(t=null==(i=a.riskTranscriptionList)?void 0:i[0])?void 0:t.uri,text:null==(n=null==(s=a.riskTranscriptionList)?void 0:s[0])?void 0:n.content,status:!!a.extInfo.transcriptionStatus})}}))};n({imgUrl:"",desc:"",title:"",link:pe});const Ne=e=>{const{type:a,text:i}=ye.value,t={...X.query,orderNo:oe||re,text:i,orderId:fe.value.id};"handle"===a?Z.push({path:"scribing",query:t}):M({content:i,image:e,orderNo:oe||re,tenantId:ae,transcriptionType:P.AUTO}).then((({code:e})=>{"10000"===e&&Oe()}))};l([()=>Ie.value,()=>ye.value],(()=>{Object.assign(ye.value,{type:Ie.value.type||ye.value.type,text:Ie.value.text||ye.value.text,status:Ie.value.status||ye.value.status,signInfo:Ie.value.signInfo||ye.value.signInfo})}),{deep:!0,immediate:!0}),d((()=>{(async()=>{var e,a,i,t;let s={};const{code:n,data:r}=await A({orderNo:oe||re,tenantId:ae});"10000"===n&&(Object.assign(fe.value,r),me.value.holder.personalInfo={...r.holder,isCert:1},me.value.insured.personalInfo=r.insuredList.map((e=>(e.isCert=1,e))),s=J(r.insuredList[0].productList),Object.assign(Ie.value,{type:C[r.extInfo.transcriptionType],signInfo:null==(a=null==(e=r.riskTranscriptionList)?void 0:e[0])?void 0:a.uri,text:null==(t=null==(i=r.riskTranscriptionList)?void 0:i[0])?void 0:t.content,status:!!r.extInfo.transcriptionStatus}),fe.value.tenantOrderAttachmentList.forEach((e=>{e.objectType===F.HOlDER&&30===e.category&&me.value.holder.signData.push(e.fileBase64)}))),U(s).then((({code:e,data:a})=>{var i;if("10000"===e){const{signMaterialMap:e}=(null==(i=a.productMaterialPlanVOList)?void 0:i[1])||{};(Object.values(e||{}).flat()||[]).forEach((e=>{e.noticeObject===F.HOlDER&&me.value.holder.fileList.push({attachmentName:e.materialName,attachmentList:[{...e,materialSource:K(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)}]})}))}})),$(s).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=q(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&Se.value.sign.push(a.code),"1"===a.code?me.value.agent.isSign=!0:"2"===a.code?me.value.holder.isSign=!0:"3"===a.code?me.value.insured.isSign=!0:"4"===a.code?me.value.holder.isShareSign=!0:"5"===a.code&&(me.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(ye.value.text=e.remark,Se.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?ye.value.type="handle":ye.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&Se.value.verify.push(a.code),"1"===a.code?me.value.holder.isVerify=!0:"2"===a.code&&(me.value.insured.isVerify=!0)}))}))}}))})();const e=u.get("verifyData");if(e){const{serialNo:a,certNo:i,name:t}=e;c({certiNo:i,orderNo:oe||re,serialNo:a,tenantId:ae,userName:t}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(he.remove("verifyData"),Oe())}))}}));const Le=n();return v((()=>{setTimeout((async()=>{Le.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const i=R,t=V,s=H,n=z;return f(),p("div",G,[h(i),g("div",Q,[h(t,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"})]),g("div",Y,[!m(de)||m(me).holder.isShareSign?(f(),y(_,{key:0,ref_key:"holderSignRef",ref:ge,"order-detail":m(fe),"sign-string":m(me).holder.signData,"show-sign":m(de)?m(me).holder.isShareSign:m(me).holder.isSign,"show-verify":m(me).holder.isVerify,"file-list":m(me).holder.fileList,"personal-info":m(me).holder.personalInfo,title:"投保人",onHandleSign:a[0]||(a[0]=e=>((e,a,i)=>{var t,s,n,r;const o=[k(e,a,null==(t=fe.value)?void 0:t.id,ae,i)],{id:l}=(null==(n=null==(s=me.value.insured)?void 0:s.personalInfo)?void 0:n[0])||{};be.value&&o.push(k("INSURED",a,null==(r=fe.value)?void 0:r.id,ae,l)),Promise.all(o).then((e=>{Oe()}))})("HOLDER",e,m(me).holder.personalInfo.id))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info"])):I("",!0)]),m(Se).scribing?(f(),y(s,S({key:0},m(ye),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:Ne}),null,16)):I("",!0),g("div",W,[h(n,{type:"primary",onClick:je},{default:b((()=>[j("确定")])),_:1})])])}}});export{X as default};
