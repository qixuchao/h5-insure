var K=Object.defineProperty;var G=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var J=(a,t,e)=>t in a?K(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,O=(a,t)=>{for(var e in t||(t={}))Z.call(t,e)&&J(a,e,t[e]);if(G)for(var e of G(t))ee.call(t,e)&&J(a,e,t[e]);return a};import{g as N,Q as X,C as R,L as Y,v as te,X as ne,ag as oe,r as d,h as o,j as m,k as l,n as y,m as x,E as j,y as P,I as W,F as M,s as A,ah as se,z as g,B as D,T as ue,ak as re,G as ae,x as q,M as H,af as ie}from"./vendor-f01850c4.js";import{_ as F,h as le,j as ce}from"./index-0dd1165e.js";import{w as pe,n as de}from"./pdf.worker.entry-7b192890.js";import{p as z}from"./pdf_viewer-9f7fe5eb.js";import{g as _e,s as me}from"./inform-c510d95f.js";import{s as fe}from"./useStorage-a8a163c9.js";const ve={class:"problem"},ge={class:"footer-button"},ye=D("\u63D0\u4EA4"),he=N({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(a,{emit:t}){const e=a,b=X(),s=R([]),{questionnaireType:f}=b.query,E={"1":"\u6295\u4FDD\u4EBA","2":"\u88AB\u4FDD\u4EBA","3":"\u4EE3\u7406\u4EBA"},V=Y({listQuestions:[]}),{listQuestions:h}=te(V),_=c=>{s.value[c].toggle()},C=c=>c?JSON.parse(c).map(n=>({title:n.value,value:n.uid})):[];ne(()=>e.currentPageInfo,c=>{h.value=c.map((n,k)=>n.questionType===2?O({multipleChoose:[]},n):O({singleAnswer:n.questionType===3?0:""},n))},{deep:!0,immediate:!0});const i=()=>{h.value.some(n=>{var k;return["undefined",""].includes(n.singleAnswer)||((k=n.multipleChoose)==null?void 0:k.length)===0})?ue("\u8BF7\u5B8C\u6210\u6240\u6709\u9898\u76EE\u8FDB\u884C\u4E0B\u4E00\u6B65"):t("onSubmitCurrentStatus",1,JSON.stringify(h.value))};return oe(()=>{s.value=[]}),(c,n)=>{const k=d("van-radio"),w=d("van-cell"),p=d("van-cell-group"),u=d("van-radio-group"),I=d("van-checkbox"),$=d("van-checkbox-group"),S=d("van-field"),Q=d("van-button"),B=d("ProPageWrap");return o(),m(B,{class:"com-quersion"},{default:l(()=>[y(ce,{title:`${E[g(f)]}\u5065\u5EB7\u544A\u77E5\u4E66`},{default:l(()=>[(o(!0),x(M,null,j(g(h),(r,L)=>(o(),x("div",{key:L,class:"question-item"},[P("div",ve,W(L+1)+". "+W(r.title),1),r.questionType===1?(o(),m(u,{key:0,modelValue:r.singleAnswer,"onUpdate:modelValue":v=>r.singleAnswer=v},{default:l(()=>[y(p,{inset:""},{default:l(()=>[(o(!0),x(M,null,j(C(r.options),(v,T)=>(o(),m(w,{key:T,title:v.title,clickable:"",onClick:U=>r.singleAnswer=T},{"right-icon":l(()=>[y(k,{name:T},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])):A("",!0),r.questionType===2?(o(),m($,{key:1,modelValue:r.multipleChoose,"onUpdate:modelValue":v=>r.multipleChoose=v},{default:l(()=>[y(p,{inset:""},{default:l(()=>[(o(!0),x(M,null,j(C(r.options),(v,T)=>(o(),m(w,{key:v.uid,clickable:"",title:v.title,onClick:U=>_(T)},{"right-icon":l(()=>[y(I,{ref_for:!0,ref:U=>s.value[T]=U,shape:"square",name:T,onClick:n[0]||(n[0]=se(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])):A("",!0),r.questionType===3?(o(),m(le,{key:2,modelValue:r.singleAnswer,"onUpdate:modelValue":v=>r.singleAnswer=v,options:[{label:"\u662F",value:"Y"},{label:"\u5426",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):A("",!0),r.questionType===4?(o(),m(p,{key:3,inset:""},{default:l(()=>[y(S,{modelValue:r.singleAnswer,"onUpdate:modelValue":v=>r.singleAnswer=v,placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):A("",!0)]))),128))]),_:1},8,["title"]),P("div",ge,[y(Q,{type:"primary",block:"",onClick:i},{default:l(()=>[ye]),_:1})])]),_:1})}}});var Ce=F(he,[["__scopeId","data-v-41012a55"]]);const ke={class:"title"},be={class:"content"},Se={class:"footer-button"},Ee=D("\u4E86\u89E3\u5E76\u7EE7\u7EED"),we=N({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(a,{emit:t}){const e=a;return(b,s)=>{const f=d("van-button"),E=d("ProPageWrap"),V=re("dompurify-html");return o(),m(E,{class:"com-document"},{default:l(()=>{var h,_;return[P("div",ke,W((h=e.currentPageInfo[0])==null?void 0:h.title),1),ae(P("div",be,null,512),[[V,(_=e.currentPageInfo[0])==null?void 0:_.content]]),P("div",Se,[y(f,{type:"primary",onClick:s[0]||(s[0]=C=>t("onSubmitCurrentStatus",1))},{default:l(()=>[Ee]),_:1})])]}),_:1})}}});var Ie=F(we,[["__scopeId","data-v-27a7d770"]]);const $e={class:"com-pdf-viewer"},xe=["id","isee_pdf"],Ae={class:"footer-button"},Pe=D("\u90E8\u5206\u4E3A\u662F"),Te=D("\u4EE5\u4E0A\u7686\u5426"),Ve=N({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(a,{emit:t}){const e=a;z.exports.GlobalWorkerOptions.workerSrc=pe;const b=de(),s=R(!1),f=R(!0),E=q(()=>["png","jpg","jpeg"].some(_=>e.url.includes(_))),V=()=>{const _=document.getElementById(b);if(_.hasChildNodes()){f.value=!1;return}z.exports.getDocument({url:e.url}).promise.then(i=>{const c=i.numPages;for(let n=1;n<=c;n++)i.getPage(n).then(k=>{const w=k.getViewport({scale:1}),p=document.createElement("canvas"),u=p.getContext("2d");p.width=w.width,p.height=w.height,p.style.width="100%",_.append(p);const I={canvasContext:u,viewport:w};k.render(I),f.value=!1})})},h=async()=>{s.value=!0,setTimeout(()=>{V()},0)};return H(()=>{h()}),(_,C)=>{const i=d("van-image"),c=d("van-button");return o(),x("div",$e,[g(E)?(o(),m(i,{key:0,width:"100%",height:"80vh",fit:"contain",src:e.url},null,8,["src"])):(o(),x("div",{key:1,id:g(b),isee_pdf:_.pdfUrl,class:"pdf-wapper"},null,8,xe)),P("div",Ae,[y(c,{plain:"",type:"primary",onClick:C[0]||(C[0]=n=>t("onSubmitCurrentStatus",2))},{default:l(()=>[Pe]),_:1}),y(c,{type:"primary",onClick:C[1]||(C[1]=n=>t("onSubmitCurrentStatus",1))},{default:l(()=>[Te]),_:1})])])}}});var Qe=F(Ve,[["__scopeId","data-v-4c70488e"]]);const Be={class:"iframe-wrap"},De=["src"],qe={class:"footer-button"},Ne=D("\u90E8\u5206\u4E3A\u662F"),Fe=D("\u4EE5\u4E0A\u7686\u5426"),Ue=N({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(a,{emit:t}){const e=a;return(b,s)=>{const f=d("van-button");return o(),x("div",Be,[P("iframe",{src:e.url,frameborder:"0"},null,8,De),P("div",qe,[y(f,{plain:"",type:"primary",onClick:s[0]||(s[0]=E=>t("onSubmitCurrentStatus",2))},{default:l(()=>[Ne]),_:1}),y(f,{type:"primary",onClick:s[1]||(s[1]=E=>t("onSubmitCurrentStatus",1))},{default:l(()=>[Fe]),_:1})])])}}});var Oe=F(Ue,[["__scopeId","data-v-1ac7e729"]]);const je={class:"com-health-notice"},Xe=N({setup(a){const t=ie(),e=X(),b=fe.get("questionData"),{questionnaireType:s}=e.query,{orderNo:f="2022021815432987130620",productCode:E="CQ75CQ76",templateId:V=1,orderId:h=13005,tenantId:_=9991000007}=e.query,C={1:4,2:5,3:9},i=Y({pageData:{},currentQuestionInfo:[]}),c=q(()=>s==="2"),n=q(()=>{var u;return s==="1"&&[1].includes((u=i.currentQuestionInfo[0])==null?void 0:u.textType)}),k=q(()=>{var u;return s==="1"&&[2].includes((u=i.currentQuestionInfo[0])==null?void 0:u.textType)}),w=q(()=>{var u;return s==="1"&&[3].includes((u=i.currentQuestionInfo[0])==null?void 0:u.textType)}),p=(u,I)=>{var Q;const{id:$,objectType:S}=b;me({content:I||((Q=i.currentQuestionInfo[0])==null?void 0:Q.content),contentType:s,isDone:u,noticeType:C[S],objectId:$,objectType:S,orderId:h,orderNo:f,tenantId:9991000007}).then(({code:B,data:r})=>{console.log(B),B==="10000"&&t.go(-1)})};return H(()=>{const{insurerCode:u,id:I,objectType:$,productCategory:S}=b;_e({insurerCode:u,id:I,objectType:$,productCategory:S,orderNo:f,tenantId:_}).then(({code:Q,data:B})=>{Q==="10000"&&(i.currentQuestionInfo=B)})}),(u,I)=>{var $,S;return o(),x("div",je,[g(c)?(o(),m(Ce,{key:0,"current-page-info":g(i).currentQuestionInfo,onOnSubmitCurrentStatus:p},null,8,["current-page-info"])):A("",!0),g(k)?(o(),m(Ie,{key:1,"current-page-info":g(i).currentQuestionInfo,onOnSubmitCurrentStatus:p},null,8,["current-page-info"])):A("",!0),g(n)?(o(),m(Qe,{key:2,url:($=g(i).currentQuestionInfo[0])==null?void 0:$.content,onOnSubmitCurrentStatus:p},null,8,["url"])):A("",!0),g(w)?(o(),m(Oe,{key:3,url:(S=g(i).currentQuestionInfo[0])==null?void 0:S.content,onOnSubmitCurrentStatus:p},null,8,["url"])):A("",!0)])}}});export{Xe as default};
