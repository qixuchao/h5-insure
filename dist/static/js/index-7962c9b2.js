var ue=Object.defineProperty,le=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var Z=(u,o,t)=>o in u?ue(u,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[o]=t,L=(u,o)=>{for(var t in o||(o={}))ce.call(o,t)&&Z(u,t,o[t]);if(X)for(var t of X(o))de.call(o,t)&&Z(u,t,o[t]);return u},ee=(u,o)=>le(u,ie(o));import{g as U,a9 as ne,O as oe,E as M,aa as pe,r as f,j as s,k as g,m as l,p as v,n as E,G,z as x,J as Y,F as H,t as D,ab as _e,A as m,C as P,T as me,af as fe,H as ve,ac as te,ad as ye,ae as ge,y as F,h as se,M as Ce}from"./vendor-9d7eb2ed.js";import{_ as R,P as he,a as be,g as re}from"./index-1be2f5bc.js";import{s as Ee,g as Se}from"./inform-0485c34f.js";import{s as ke}from"./useStorage-3a488872.js";import{N as Ie}from"./notice-8f6df5db.js";const Te={class:"problem"},$e={class:"footer-button"},we=P("\u63D0\u4EA4"),De=U({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(u,{emit:o}){const t=u;ne();const e=oe(),a=M([]),{questionnaireType:c}=e.query,{orderNo:C="2022021815432987130620",productCode:N="CQ75CQ76",templateId:V=1,agentCode:y="65434444",orderId:k=13005,tenantId:I=9991000007}=e.query,r={"1":"\u6295\u4FDD\u4EBA","2":"\u88AB\u4FDD\u4EBA","3":"\u4EE3\u7406\u4EBA"},p=M([]),q=h=>{a.value[h].toggle()},$=h=>h?JSON.parse(h).map(n=>({title:n.value,value:n.uid})):[],T=()=>{p.value.some(n=>{var _;return["undefined",""].includes(n.singleAnswer)||((_=n.multipleChoose)==null?void 0:_.length)===0})?me("\u8BF7\u5B8C\u6210\u6240\u6709\u9898\u76EE\u8FDB\u884C\u4E0B\u4E00\u6B65"):o("onSubmitCurrentStatus",1,JSON.stringify(p.value))},w=h=>JSON.parse(h),B=()=>{re({orderNo:C,saleUserId:y,tenantId:I}).then(({code:h,data:n})=>{if(h==="10000"){const _=n.tenantOrderNoticeList.findIndex(i=>i.isDone===1&&+i.objectId===t.currentPageInfo[0].questionnaireId);_!==-1?p.value=w(n.tenantOrderNoticeList[_].content):p.value=t.currentPageInfo.map(i=>i.questionType===2?L({multipleChoose:[]},i):L({singleAnswer:i.questionType===3?0:""},i))}})};return pe(()=>{a.value=[],B()}),(h,n)=>{const _=f("van-radio"),i=f("van-cell"),S=f("van-cell-group"),O=f("van-radio-group"),j=f("van-checkbox"),Q=f("van-checkbox-group"),J=f("van-field"),z=f("van-button"),ae=f("ProPageWrap");return s(),g(ae,{class:"com-question"},{default:l(()=>[v(be,{title:`${r[m(c)]}\u5065\u5EB7\u544A\u77E5\u4E66`},{default:l(()=>[(s(!0),E(H,null,G(p.value,(d,K)=>(s(),E("div",{key:K,class:"question-item"},[x("div",Te,Y(K+1)+". "+Y(d.title),1),d.questionType===1?(s(),g(O,{key:0,modelValue:d.singleAnswer,"onUpdate:modelValue":b=>d.singleAnswer=b},{default:l(()=>[v(S,{inset:""},{default:l(()=>[(s(!0),E(H,null,G($(d.options),(b,A)=>(s(),g(i,{key:A,title:b.title,clickable:"",onClick:W=>d.singleAnswer=A},{"right-icon":l(()=>[v(_,{name:A},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])):D("",!0),d.questionType===2?(s(),g(Q,{key:1,modelValue:d.multipleChoose,"onUpdate:modelValue":b=>d.multipleChoose=b},{default:l(()=>[v(S,{inset:""},{default:l(()=>[(s(!0),E(H,null,G($(d.options),(b,A)=>(s(),g(i,{key:b.uid,clickable:"",title:b.title,onClick:W=>q(A)},{"right-icon":l(()=>[v(j,{ref_for:!0,ref:W=>a.value[A]=W,shape:"square",name:A,onClick:n[0]||(n[0]=_e(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])):D("",!0),d.questionType===3?(s(),g(he,{key:2,modelValue:d.singleAnswer,"onUpdate:modelValue":b=>d.singleAnswer=b,options:[{label:"\u662F",value:"Y"},{label:"\u5426",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):D("",!0),d.questionType===4?(s(),g(S,{key:3,inset:""},{default:l(()=>[v(J,{modelValue:d.singleAnswer,"onUpdate:modelValue":b=>d.singleAnswer=b,placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):D("",!0)]))),128))]),_:1},8,["title"]),x("div",$e,[v(z,{type:"primary",block:"",onClick:T},{default:l(()=>[we]),_:1})])]),_:1})}}});var Pe=R(De,[["__scopeId","data-v-6ef8a76f"]]);const Ae={class:"com-document"},xe={class:"title"},Ve={class:"content"},qe={class:"footer-button"},Ne=P("\u4E86\u89E3\u5E76\u7EE7\u7EED"),Be=U({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(u,{emit:o}){const t=u;return(e,a)=>{const c=f("van-button"),C=f("ProPageWrap"),N=fe("dompurify-html");return s(),g(C,null,{default:l(()=>{var V,y;return[x("div",Ae,[x("div",xe,Y((V=t.currentPageInfo[0])==null?void 0:V.title),1),ve(x("div",Ve,null,512),[[N,(y=t.currentPageInfo[0])==null?void 0:y.content]]),x("div",qe,[v(c,{type:"primary",onClick:a[0]||(a[0]=k=>o("onSubmitCurrentStatus",1))},{default:l(()=>[Ne]),_:1})])])]}),_:1})}}});var Oe=R(Be,[["__scopeId","data-v-6e53a5c6"]]);const Fe={class:"com-pdf-viewer"},Ue=["id","isee_pdf"],je={key:2,class:"footer-button"},Qe=P("\u90E8\u5206\u4E3A\u662F"),Je=P("\u4EE5\u4E0A\u7686\u5426"),Le={key:3,class:"footer-button"},Me=P("\u4E86\u89E3\u5E76\u7EE7\u7EED"),Re=U({props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(u,{emit:o}){const t=u;te.exports.GlobalWorkerOptions.workerSrc=ye;const e=ge(),a=M(!1),c=M(!0),C=F(()=>["png","jpg","jpeg"].some(y=>t.url.includes(y))),N=()=>{const y=document.getElementById(e);if(y.hasChildNodes()){c.value=!1;return}te.exports.getDocument({url:t.url}).promise.then(I=>{const r=I.numPages;for(let p=1;p<=r;p++)I.getPage(p).then(q=>{const $=q.getViewport({scale:1}),T=document.createElement("canvas"),w=T.getContext("2d");T.width=$.width,T.height=$.height,T.style.width="100%",y.append(T);const B={canvasContext:w,viewport:$};q.render(B),c.value=!1})})},V=async()=>{a.value=!0,setTimeout(()=>{N()},0)};return se(()=>{V()}),(y,k)=>{const I=f("van-image"),r=f("van-button");return s(),E("div",Fe,[m(C)?(s(),g(I,{key:0,width:"100%",height:"80vh",fit:"contain",src:t.url},null,8,["src"])):(s(),E("div",{key:1,id:m(e),isee_pdf:y.pdfUrl,class:"pdf-wapper"},null,8,Ue)),t.materialType==="question"?(s(),E("div",je,[v(r,{plain:"",type:"primary",onClick:k[0]||(k[0]=p=>o("onSubmitCurrentStatus",2))},{default:l(()=>[Qe]),_:1}),v(r,{type:"primary",onClick:k[1]||(k[1]=p=>o("onSubmitCurrentStatus",1))},{default:l(()=>[Je]),_:1})])):(s(),E("div",Le,[v(r,{type:"primary",onClick:k[2]||(k[2]=p=>o("onSubmitCurrentStatus",1))},{default:l(()=>[Me]),_:1})]))])}}});var We=R(Re,[["__scopeId","data-v-a4e458ca"]]);const Ge={class:"iframe-wrap"},He=["src"],Ye={key:0,class:"footer-button"},ze=P("\u90E8\u5206\u4E3A\u662F"),Ke=P("\u4EE5\u4E0A\u7686\u5426"),Xe={key:1,class:"footer-button"},Ze=P("\u4E86\u89E3\u5E76\u7EE7\u7EED"),et=U({props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(u,{emit:o}){const t=u;return(e,a)=>{const c=f("van-button");return s(),E("div",Ge,[x("iframe",{src:t.url,frameborder:"0"},null,8,He),t.materialType==="question"?(s(),E("div",Ye,[v(c,{plain:"",type:"primary",onClick:a[0]||(a[0]=C=>o("onSubmitCurrentStatus",2))},{default:l(()=>[ze]),_:1}),v(c,{type:"primary",onClick:a[1]||(a[1]=C=>o("onSubmitCurrentStatus",1))},{default:l(()=>[Ke]),_:1})])):(s(),E("div",Xe,[v(c,{type:"primary",onClick:a[2]||(a[2]=C=>o("onSubmitCurrentStatus",1))},{default:l(()=>[Ze]),_:1})]))])}}});var tt=R(et,[["__scopeId","data-v-1fc4d3ec"]]);const nt={class:"com-health-notice"},it=U({setup(u){const o=ne(),t=oe(),e=ke.get("questionData"),{materialType:a="question",questionnaireType:c="1",orderNo:C="2022021815432987130620",productCode:N="CQ75CQ76",templateId:V=1,agentCode:y="65434444",orderId:k=13005,tenantId:I=9991000007}=t.query&&t.query,r=Ce({pageData:{},currentQuestionInfo:[]}),p=F(()=>c==="2"),q=F(()=>{var n;return c==="1"&&([1].includes((n=r.currentQuestionInfo[0])==null?void 0:n.textType)||(e==null?void 0:e.materialSource)===1)}),$=F(()=>{var n;return c==="1"&&([2].includes((n=r.currentQuestionInfo[0])==null?void 0:n.textType)||(e==null?void 0:e.materialSource)===2)}),T=F(()=>{var n;return c==="1"&&([3].includes((n=r.currentQuestionInfo[0])==null?void 0:n.textType)||(e==null?void 0:e.materialSource)===3)}),w=(n,_)=>{var Q;const{id:i,objectType:S,noticeObject:O,materialSource:j}=e;Ee({content:_||((Q=r.currentQuestionInfo[0])==null?void 0:Q.content),contentType:c||"3",isDone:n,noticeType:Ie[S]||"99",objectId:i,objectType:S||O,orderId:r.pageData.id,orderNo:C,tenantId:I}).then(({code:J,data:z})=>{console.log(J),J==="10000"&&o.go(-1)})},B=()=>{re({orderNo:C,saleUserId:y,tenantId:I}).then(({code:n,data:_})=>{n==="10000"&&Object.assign(r.pageData,_)})},h=()=>{const{insurerCode:n,id:_,objectType:i,productCategory:S}=e;Se({insurerCode:n,id:_,objectType:i,productCategory:S,orderNo:C,tenantId:I}).then(({code:O,data:j})=>{O==="10000"&&(r.currentQuestionInfo=j)})};return se(()=>{B(),(e==null?void 0:e.materialSource)?(r.currentQuestionInfo=[ee(L({},e==null?void 0:e.materialSource),{title:e==null?void 0:e.materialName,content:e==null?void 0:e.materialContent})],console.log("===>",r.currentQuestionInfo)):h()}),(n,_)=>{var i,S;return s(),E("div",nt,[m(p)?(s(),g(Pe,{key:0,"current-page-info":m(r).currentQuestionInfo,onOnSubmitCurrentStatus:w},null,8,["current-page-info"])):D("",!0),m($)?(s(),g(Oe,{key:1,"material-type":m(a),"current-page-info":m(r).currentQuestionInfo,onOnSubmitCurrentStatus:w},null,8,["material-type","current-page-info"])):D("",!0),m(q)?(s(),g(We,{key:2,"material-type":m(a),url:(i=m(r).currentQuestionInfo[0])==null?void 0:i.content,onOnSubmitCurrentStatus:w},null,8,["material-type","url"])):D("",!0),m(T)?(s(),g(tt,{key:3,"material-type":m(a),url:(S=m(r).currentQuestionInfo[0])==null?void 0:S.content,onOnSubmitCurrentStatus:w},null,8,["material-type","url"])):D("",!0)])}}});export{it as default};
