import{d as e,i,h as a,ce as s,c5 as o,cX as n,j as t,k as r,ah as l,E as d,bc as u,b4 as c,cY as p,l as v,o as f,c as g,b as h,a as m,u as y,p as I,f as S,a8 as b,w as j,v as w,q as O,bj as N,bb as T,T as x,cP as L,cQ as q,cZ as D,aY as E,y as C,c4 as k,c_ as V,bO as R,a$ as P,cS as $,c$ as _,b3 as U,cR as z,d0 as H}from"./index-d6f6d527.js";import{g as A,m as B}from"./trial-57d9822d.js";import{_ as F}from"./SignPart-c665158c.js";import{u as Y}from"./useOrder-e0a4cc43.js";import{N as G}from"./notice-dd5e1d1a.js";import"./PolicyInfo-765e84dc.js";import{c as J}from"./scribing-4bd7c302.js";import{p as M}from"./utils-c83c4ee5.js";import{i as Q}from"./core-49f8c1e7.js";import{_ as W}from"./MessagePopup-de22ab1b.js";import{q as X}from"./qianming-ece13dd4.js";import"./index-81fe16bb.js";import"./cloneDeep-ddabc67b.js";import"./utils-6fc810bd.js";import"./createProposal-f2e4b92c.js";import"./trial-445275f4.js";import"./utils-b07ee1da.js";import"./infoCollection-82a9c136.js";const Z={class:"long-verify"},K={class:"header"},ee={class:"verify-content"},ie={class:"footer-button"},ae={class:"content-inner"},se=["src"],oe=m("h4",null,"本次签名已完成",-1),ne=m("p",null,"感谢您对本次投保的签字确认，后续流程由销售人员在您的配合下进行",-1),te=e({__name:"holderSign",setup(e){const te=i(),re=a(),[le,de]=s(!1),{productCode:ue="",tenantId:ce,agentCode:pe="",agencyCode:ve,saleChannelId:fe,saleUserId:ge,orderNo:he,orderCode:me,extraInfo:ye,isShare:Ie,insurerCode:Se,preview:be}=te.query;let je={};try{je=JSON.parse(decodeURIComponent(ye))}catch($e){}const we=Y(),Oe=`${window.origin}/baseInsurance/long/phoneVerify?${o.stringify({...te.query,orderNo:me||he})}`,Ne=new n({source:"localStorage"}),Te=t(),xe=t({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:[],compositionSign:""},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},compositionSign:""},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",compositionSign:""}}),Le=t({}),qe=t({}),De=t({sign:[],verify:[],scribing:""}),Ee=r((()=>{var e,i;const{age:a,relationToHolder:s,id:o}=(null==(i=null==(e=xe.value.insured)?void 0:e.personalInfo)?void 0:i[0])||{};return`${s}`===l.CERT||a<18})),Ce=()=>{if(be)return void N(T.SIGN,te.query);const e=[];Te.value&&((Ie?De.value.sign.includes("4"):De.value.sign.includes("2"))&&e.push(Te.value.validateSign()),De.value.verify.includes("1")&&e.push(Te.value.validateVerify())),Promise.all(e).then((e=>{!De.value.scribing||Le.value.status?Promise.all([L({bizObjectId:[we.value.holder.id],bizObjectType:q.HOLDER,orderId:we.value.id,tenantId:ce,shareFlag:Ie?1:2}),Ee.value&&L({bizObjectId:[we.value.insuredList[0].id],bizObjectType:q.INSURED,orderId:we.value.id,tenantId:ce})]).then((e=>{"10000"===e[0].code&&D(we.value).then((({code:e,data:i})=>{if("10000"===e)if(i.authStatus===`${E.YES}`)re.push({path:C.payAuth,query:te.query});else{if(Ie)return de(!0),void setTimeout((()=>{Q?k.closeWindow():window.close()}),1500);re.push({path:C.sign,query:te.query})}}))})):x("请先完成风险抄录")})).catch((e=>{x(e.message)}))},ke=()=>{he&&A({orderNo:me||he,tenantId:ce}).then((({code:e,data:i})=>{var a,s,o,n;if("10000"===e){const e=[];i.tenantOrderAttachmentList.forEach((i=>{i.objectType===G.HOlDER&&(30===i.category?e.push(i.fileBase64):21===i.category&&(xe.value.holder.compositionSign=i.uri))})),xe.value.holder.signData=e,Object.assign(qe.value,{type:V[i.extInfo.transcriptionType],signInfo:null==(s=null==(a=i.riskTranscriptionList)?void 0:a[0])?void 0:s.uri,text:null==(n=null==(o=i.riskTranscriptionList)?void 0:o[0])?void 0:n.content,status:!!i.extInfo.transcriptionStatus})}}))},Ve=(e,i,a)=>new Promise(((s,o)=>{var n;z(e,i,null==(n=we.value)?void 0:n.id,ce,a).then((({code:e,message:i})=>{"10000"===e?s():o(i)})).catch((e=>{o(e)}))}));t({imgUrl:"",desc:"",title:"",link:Oe});const Re=e=>{const{type:i,text:a}=Le.value,s={...te.query,orderNo:me||he,text:a,orderId:we.value.id};"handle"===i?re.push({path:"scribing",query:s}):J({content:a,image:e,orderNo:me||he,tenantId:ce,transcriptionType:H.AUTO}).then((({code:e})=>{"10000"===e&&ke()}))};d([()=>qe.value,()=>Le.value],(()=>{Object.assign(Le.value,{type:qe.value.type||Le.value.type,text:qe.value.text||Le.value.text,status:qe.value.status||Le.value.status,signInfo:qe.value.signInfo||Le.value.signInfo})}),{deep:!0,immediate:!0}),u((()=>{(async()=>{var e,i,a,s;let o={};const{code:n,data:t}=await A({orderNo:me||he,tenantId:ce});"10000"===n&&(Object.assign(we.value,t),xe.value.holder.personalInfo={...t.holder,isCert:1},xe.value.insured.personalInfo=t.insuredList.map((e=>(e.isCert=1,e))),o=M(t.insuredList[0].productList),Object.assign(qe.value,{type:V[t.extInfo.transcriptionType],signInfo:null==(i=null==(e=t.riskTranscriptionList)?void 0:e[0])?void 0:i.uri,text:null==(s=null==(a=t.riskTranscriptionList)?void 0:a[0])?void 0:s.content,status:!!t.extInfo.transcriptionStatus}),we.value.tenantOrderAttachmentList.forEach((e=>{e.objectType===G.HOlDER&&(30===e.category?xe.value.holder.signData.push(e.fileBase64):21===e.category&&(xe.value.holder.compositionSign=e.uri))}))),B(o).then((({data:e,code:i})=>{if("10000"===i){const{signInfo:i}=R(e.productFactor);i.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((i=>{e.required&&De.value.sign.push(i.code),"1"===i.code?xe.value.agent.isSign=!0:"2"===i.code?xe.value.holder.isSign=!0:"3"===i.code?xe.value.insured.isSign=!0:"4"===i.code?xe.value.holder.isShareSign=!0:"5"===i.code&&(xe.value.insured.isShareSign=!0)})),"riskNotificationCopy"===e.name&&(Le.value.text=e.remark,De.value.scribing=e.required,e.columns.forEach((e=>{"1"===e.code?Le.value.type="handle":Le.value.type="auto"}))),"customerFace"===e.name&&e.columns.forEach((i=>{e.required&&De.value.verify.push(i.code),"1"===i.code?xe.value.holder.isVerify=!0:"2"===i.code&&(xe.value.insured.isVerify=!0)}))}))}}))})();const e=c.get("verifyData");if(e){const{serialNo:i,certNo:a,name:s}=e;p({certiNo:a,orderNo:me||he,serialNo:i,tenantId:ce,userName:s}).then((e=>{const{code:i,data:a}=e;"10000"===i&&(Ne.remove("verifyData"),ke())}))}}));const Pe=t();return v((()=>{setTimeout((async()=>{Pe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,i)=>{var a,s,o;const n=P,t=$,r=_,l=U;return f(),g("div",Z,[h(n),m("div",K,[h(t,{type:"warning",content:(null==(a=y(xe).holder.personalInfo)?void 0:a.name)&&`本人${null==(s=y(xe).holder.personalInfo)?void 0:s.name}已阅读并同意签署《电子投保单》（投保信息确认）、《人身保险投保提示书》、《免责说明书》、《产品说明书》（一年期以上产品）、《风险告知问卷》（万能型产品）、《风险承受能力测评问卷》（新型产品）。请投保人：${null==(o=y(xe).holder.personalInfo)?void 0:o.name}签名确认。`},null,8,["content"])]),m("div",ee,[!y(Ie)||y(xe).holder.isShareSign?(f(),I(F,{key:0,ref_key:"holderSignRef",ref:Te,"order-detail":y(we),"sign-string":y(xe).holder.signData,"show-sign":y(Ie)?y(xe).holder.isShareSign:y(xe).holder.isSign,"show-verify":y(xe).holder.isVerify,"file-list":y(xe).holder.fileList,"personal-info":y(xe).holder.personalInfo,"composition-sign":y(xe).holder.compositionSign,title:"投保人",onHandleSign:i[0]||(i[0]=e=>((e,i,a)=>{var s,o;const n=[Ve(e,i,a)];null==(o=null==(s=xe.value.insured)?void 0:s.personalInfo)||o[0],Ee.value&&n.push(Ve("INSURED",i,a)),Promise.all(n).then((e=>{ke()}),(e=>{x(e[0])}))})("HOLDER",e,y(xe).holder.personalInfo.id))},null,8,["order-detail","sign-string","show-sign","show-verify","file-list","personal-info","composition-sign"])):S("",!0)]),y(De).scribing?(f(),I(r,b({key:0},y(Le),{title:"为了保障您的权益请抄录以下声明内容",onOnSubmit:Re}),null,16)):S("",!0),m("div",ie,[h(l,{type:"primary",onClick:Ce},{default:j((()=>[w("确定")])),_:1})]),h(W,{modelValue:y(le),"onUpdate:modelValue":i[1]||(i[1]=e=>O(le)?le.value=e:null),onClose:i[2]||(i[2]=e=>y(de)(!1))},{default:j((()=>[m("div",ae,[m("img",{src:y(X),alt:"",class:"header-img"},null,8,se),oe,ne])])),_:1},8,["modelValue"])])}}});export{te as default};
