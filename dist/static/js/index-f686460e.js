var ue=Object.defineProperty,le=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var z=(u,o,n)=>o in u?ue(u,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[o]=n,Q=(u,o)=>{for(var n in o||(o={}))ce.call(o,n)&&z(u,n,o[n]);if(Y)for(var n of Y(o))de.call(o,n)&&z(u,n,o[n]);return u},K=(u,o)=>le(u,ie(o));import{g as U,ak as Z,O as ee,E as j,al as pe,r as _,j as s,k as v,m as d,p as h,n as $,G as M,z as S,J as W,F as R,t as D,am as _e,A as k,C as N,T as me,ac as fe,H as ve,a9 as X,aa as ge,ab as ye,y as F,h as te,M as Ce}from"./vendor-95deb895.js";import{_ as J,j as he,l as be,r as ne}from"./index-194a043d.js";import{s as ke,g as Se}from"./inform-3cc3c8c2.js";import{s as Ee}from"./useStorage-7cd61e89.js";import{N as Ie}from"./notice-9e0d47fe.js";const we={class:"problem"},Pe={class:"footer-button"},$e=N("\u63D0\u4EA4"),De=U({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(u,{emit:o}){const n=u;Z();const e=ee(),a=j([]),{questionnaireType:m}=e.query,{orderNo:E="2022021815432987130620",productCode:B="CQ75CQ76",templateId:T=1,agentCode:g="65434444",orderId:b=13005,tenantId:r=9991000007}=e.query,I={"1":"\u6295\u4FDD\u4EBA","2":"\u88AB\u4FDD\u4EBA","3":"\u4EE3\u7406\u4EBA"},f=j([]),x=t=>{a.value[t].toggle()},w=t=>t?JSON.parse(t).map(l=>({title:l.value,value:l.uid})):[],y=()=>{f.value.some(l=>{var p;return["undefined",""].includes(l.singleAnswer)||((p=l.multipleChoose)==null?void 0:p.length)===0})?me("\u8BF7\u5B8C\u6210\u6240\u6709\u9898\u76EE\u8FDB\u884C\u4E0B\u4E00\u6B65"):o("onSubmitCurrentStatus",1,JSON.stringify(f.value))},q=t=>JSON.parse(t),O=()=>{ne({orderNo:E,saleUserId:g,tenantId:r}).then(({code:t,data:l})=>{if(t==="10000"){const p=l.tenantOrderNoticeList.findIndex(i=>i.isDone===1&&+i.objectId===n.currentPageInfo[0].questionnaireId);p!==-1?f.value=q(l.tenantOrderNoticeList[p].content):f.value=n.currentPageInfo.map(i=>i.questionType===2?Q({multipleChoose:[]},i):Q({singleAnswer:i.questionType===3?0:""},i))}})};return pe(()=>{a.value=[],O()}),(t,l)=>{const p=_("van-radio"),i=_("van-cell"),P=_("van-cell-group"),V=_("van-radio-group"),G=_("van-checkbox"),oe=_("van-checkbox-group"),se=_("van-field"),re=_("van-button"),ae=_("ProPageWrap");return s(),v(ae,{class:"com-question"},{default:d(()=>[h(be,{title:`${I[k(m)]}\u5065\u5EB7\u544A\u77E5\u4E66`},{default:d(()=>[(s(!0),$(R,null,M(f.value,(c,H)=>(s(),$("div",{key:H,class:"question-item"},[S("div",we,W(H+1)+". "+W(c.title),1),c.questionType===1?(s(),v(V,{key:0,modelValue:c.singleAnswer,"onUpdate:modelValue":C=>c.singleAnswer=C},{default:d(()=>[h(P,{inset:""},{default:d(()=>[(s(!0),$(R,null,M(w(c.options),(C,A)=>(s(),v(i,{key:A,title:C.title,clickable:"",onClick:L=>c.singleAnswer=A},{"right-icon":d(()=>[h(p,{name:A},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])):D("",!0),c.questionType===2?(s(),v(oe,{key:1,modelValue:c.multipleChoose,"onUpdate:modelValue":C=>c.multipleChoose=C},{default:d(()=>[h(P,{inset:""},{default:d(()=>[(s(!0),$(R,null,M(w(c.options),(C,A)=>(s(),v(i,{key:C.uid,clickable:"",title:C.title,onClick:L=>x(A)},{"right-icon":d(()=>[h(G,{ref_for:!0,ref:L=>a.value[A]=L,shape:"square",name:A,onClick:l[0]||(l[0]=_e(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])):D("",!0),c.questionType===3?(s(),v(he,{key:2,modelValue:c.singleAnswer,"onUpdate:modelValue":C=>c.singleAnswer=C,options:[{label:"\u662F",value:"Y"},{label:"\u5426",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):D("",!0),c.questionType===4?(s(),v(P,{key:3,inset:""},{default:d(()=>[h(se,{modelValue:c.singleAnswer,"onUpdate:modelValue":C=>c.singleAnswer=C,placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):D("",!0)]))),128))]),_:1},8,["title"]),S("div",Pe,[h(re,{type:"primary",block:"",onClick:y},{default:d(()=>[$e]),_:1})])]),_:1})}}});var Te=J(De,[["__scopeId","data-v-40ec5510"]]);const Ae={class:"com-document"},xe={class:"title"},Ve={class:"content"},Ne={class:"footer-button"},Be=N("\u4E86\u89E3\u5E76\u7EE7\u7EED"),qe=U({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(u,{emit:o}){const n=u;return(e,a)=>{const m=_("van-button"),E=_("ProPageWrap"),B=fe("dompurify-html");return s(),v(E,null,{default:d(()=>{var T,g;return[S("div",Ae,[S("div",xe,W((T=n.currentPageInfo[0])==null?void 0:T.title),1),ve(S("div",Ve,null,512),[[B,(g=n.currentPageInfo[0])==null?void 0:g.content]]),S("div",Ne,[h(m,{type:"primary",onClick:a[0]||(a[0]=b=>o("onSubmitCurrentStatus",1))},{default:d(()=>[Be]),_:1})])])]}),_:1})}}});var Oe=J(qe,[["__scopeId","data-v-c7bd0da4"]]);const Fe={class:"com-pdf-viewer"},Ue=["id","isee_pdf"],Qe={class:"footer-button"},je=N("\u90E8\u5206\u4E3A\u662F"),Je=N("\u4EE5\u4E0A\u7686\u5426"),Le=U({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(u,{emit:o}){const n=u;X.exports.GlobalWorkerOptions.workerSrc=ge;const e=ye(),a=j(!1),m=j(!0),E=F(()=>["png","jpg","jpeg"].some(g=>n.url.includes(g))),B=()=>{const g=document.getElementById(e);if(g.hasChildNodes()){m.value=!1;return}X.exports.getDocument({url:n.url}).promise.then(r=>{const I=r.numPages;for(let f=1;f<=I;f++)r.getPage(f).then(x=>{const w=x.getViewport({scale:1}),y=document.createElement("canvas"),q=y.getContext("2d");y.width=w.width,y.height=w.height,y.style.width="100%",g.append(y);const O={canvasContext:q,viewport:w};x.render(O),m.value=!1})})},T=async()=>{a.value=!0,setTimeout(()=>{B()},0)};return te(()=>{T()}),(g,b)=>{const r=_("van-image"),I=_("van-button");return s(),$("div",Fe,[k(E)?(s(),v(r,{key:0,width:"100%",height:"80vh",fit:"contain",src:n.url},null,8,["src"])):(s(),$("div",{key:1,id:k(e),isee_pdf:g.pdfUrl,class:"pdf-wapper"},null,8,Ue)),S("div",Qe,[h(I,{plain:"",type:"primary",onClick:b[0]||(b[0]=f=>o("onSubmitCurrentStatus",2))},{default:d(()=>[je]),_:1}),h(I,{type:"primary",onClick:b[1]||(b[1]=f=>o("onSubmitCurrentStatus",1))},{default:d(()=>[Je]),_:1})])])}}});var Me=J(Le,[["__scopeId","data-v-517754da"]]);const Re={class:"iframe-wrap"},We=["src"],Ge={class:"footer-button"},He=N("\u90E8\u5206\u4E3A\u662F"),Ye=N("\u4EE5\u4E0A\u7686\u5426"),ze=U({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(u,{emit:o}){const n=u;return(e,a)=>{const m=_("van-button");return s(),$("div",Re,[S("iframe",{src:n.url,frameborder:"0"},null,8,We),S("div",Ge,[h(m,{plain:"",type:"primary",onClick:a[0]||(a[0]=E=>o("onSubmitCurrentStatus",2))},{default:d(()=>[He]),_:1}),h(m,{type:"primary",onClick:a[1]||(a[1]=E=>o("onSubmitCurrentStatus",1))},{default:d(()=>[Ye]),_:1})])])}}});var Ke=J(ze,[["__scopeId","data-v-1ac7e729"]]);const Xe={class:"com-health-notice"},rt=U({setup(u){const o=Z(),n=ee(),e=Ee.get("questionData"),{questionnaireType:a="1",orderNo:m="2022021815432987130620",productCode:E="CQ75CQ76",templateId:B=1,agentCode:T="65434444",orderId:g=13005,tenantId:b=9991000007}=n.query&&n.query,r=Ce({pageData:{},currentQuestionInfo:[]}),I=F(()=>a==="2"),f=F(()=>{var t;return a==="1"&&([1].includes((t=r.currentQuestionInfo[0])==null?void 0:t.textType)||(e==null?void 0:e.materialSource)===1)}),x=F(()=>{var t;return a==="1"&&([2].includes((t=r.currentQuestionInfo[0])==null?void 0:t.textType)||(e==null?void 0:e.materialSource)===2)}),w=F(()=>{var t;return a==="1"&&([3].includes((t=r.currentQuestionInfo[0])==null?void 0:t.textType)||(e==null?void 0:e.materialSource)===3)}),y=(t,l)=>{var P;const{id:p,objectType:i}=e;ke({content:l||((P=r.currentQuestionInfo[0])==null?void 0:P.content),contentType:a,isDone:t,noticeType:Ie[i],objectId:p,objectType:i,orderId:r.pageData.id,orderNo:m,tenantId:b}).then(({code:V,data:G})=>{console.log(V),V==="10000"&&o.go(-1)})},q=()=>{ne({orderNo:m,saleUserId:T,tenantId:b}).then(({code:t,data:l})=>{t==="10000"&&Object.assign(r.pageData,l)})},O=()=>{const{insurerCode:t,id:l,objectType:p,productCategory:i}=e;Se({insurerCode:t,id:l,objectType:p,productCategory:i,orderNo:m,tenantId:b}).then(({code:P,data:V})=>{P==="10000"&&(r.currentQuestionInfo=V)})};return te(()=>{q(),(e==null?void 0:e.materialSource)?(r.currentQuestionInfo=[K(Q({},e==null?void 0:e.materialSource),{title:e==null?void 0:e.materialName,content:e==null?void 0:e.materialContent})],console.log("===>",r.currentQuestionInfo)):O()}),(t,l)=>{var p,i;return s(),$("div",Xe,[k(I)?(s(),v(Te,{key:0,"current-page-info":k(r).currentQuestionInfo,onOnSubmitCurrentStatus:y},null,8,["current-page-info"])):D("",!0),k(x)?(s(),v(Oe,{key:1,"current-page-info":k(r).currentQuestionInfo,onOnSubmitCurrentStatus:y},null,8,["current-page-info"])):D("",!0),k(f)?(s(),v(Me,{key:2,url:(p=k(r).currentQuestionInfo[0])==null?void 0:p.content,onOnSubmitCurrentStatus:y},null,8,["url"])):D("",!0),k(w)?(s(),v(Ke,{key:3,url:(i=k(r).currentQuestionInfo[0])==null?void 0:i.content,onOnSubmitCurrentStatus:y},null,8,["url"])):D("",!0)])}}});export{rt as default};
