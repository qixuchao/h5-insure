var ue=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var z=(i,t,e)=>t in i?ue(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,L=(i,t)=>{for(var e in t||(t={}))ae.call(t,e)&&z(i,e,t[e]);if(Y)for(var e of Y(t))ie.call(t,e)&&z(i,e,t[e]);return i};import{g as O,aj as K,Q as X,C as F,ak as le,r as _,h as n,j as v,k as c,n as h,m as T,E as J,y as E,I as R,F as M,s as x,al as ce,z as b,B as V,T as de,ab as pe,G as _e,a8 as H,a9 as me,aa as fe,x as N,M as Z,L as ve}from"./vendor-413031aa.js";import{_ as U,i as ge,k as ye}from"./index-78c8ea05.js";import{a as ee}from"./index-2f50a653.js";import{g as Ce,s as he}from"./inform-85d9a6ad.js";import{s as be}from"./useStorage-c8da9245.js";const ke={class:"problem"},Se={class:"footer-button"},Ee=V("\u63D0\u4EA4"),Ie=O({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(i,{emit:t}){const e=i;K();const k=X(),o=F([]),{questionnaireType:m}=k.query,{orderNo:I="2022021815432987130620",productCode:B="CQ75CQ76",templateId:D=1,agentCode:g="65434444",orderId:S=13005,tenantId:r=9991000007}=k.query,w={"1":"\u6295\u4FDD\u4EBA","2":"\u88AB\u4FDD\u4EBA","3":"\u4EE3\u7406\u4EBA"},f=F([]),Q=a=>{o.value[a].toggle()},P=a=>a?JSON.parse(a).map(u=>({title:u.value,value:u.uid})):[],y=()=>{f.value.some(u=>{var d;return["undefined",""].includes(u.singleAnswer)||((d=u.multipleChoose)==null?void 0:d.length)===0})?de("\u8BF7\u5B8C\u6210\u6240\u6709\u9898\u76EE\u8FDB\u884C\u4E0B\u4E00\u6B65"):t("onSubmitCurrentStatus",1,JSON.stringify(f.value))},q=a=>JSON.parse(a),s=()=>{ee({orderNo:I,saleUserId:g,tenantId:r}).then(({code:a,data:u})=>{if(a==="10000"){const d=u.tenantOrderNoticeList.findIndex(p=>p.isDone===1&&+p.objectId===e.currentPageInfo[0].questionnaireId);d!==-1?f.value=q(u.tenantOrderNoticeList[d].content):f.value=e.currentPageInfo.map(p=>p.questionType===2?L({multipleChoose:[]},p):L({singleAnswer:p.questionType===3?0:""},p))}})};return le(()=>{o.value=[],s()}),(a,u)=>{const d=_("van-radio"),p=_("van-cell"),$=_("van-cell-group"),W=_("van-radio-group"),te=_("van-checkbox"),ne=_("van-checkbox-group"),oe=_("van-field"),se=_("van-button"),re=_("ProPageWrap");return n(),v(re,{class:"com-question"},{default:c(()=>[h(ye,{title:`${w[b(m)]}\u5065\u5EB7\u544A\u77E5\u4E66`},{default:c(()=>[(n(!0),T(M,null,J(f.value,(l,G)=>(n(),T("div",{key:G,class:"question-item"},[E("div",ke,R(G+1)+". "+R(l.title),1),l.questionType===1?(n(),v(W,{key:0,modelValue:l.singleAnswer,"onUpdate:modelValue":C=>l.singleAnswer=C},{default:c(()=>[h($,{inset:""},{default:c(()=>[(n(!0),T(M,null,J(P(l.options),(C,A)=>(n(),v(p,{key:A,title:C.title,clickable:"",onClick:j=>l.singleAnswer=A},{"right-icon":c(()=>[h(d,{name:A},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])):x("",!0),l.questionType===2?(n(),v(ne,{key:1,modelValue:l.multipleChoose,"onUpdate:modelValue":C=>l.multipleChoose=C},{default:c(()=>[h($,{inset:""},{default:c(()=>[(n(!0),T(M,null,J(P(l.options),(C,A)=>(n(),v(p,{key:C.uid,clickable:"",title:C.title,onClick:j=>Q(A)},{"right-icon":c(()=>[h(te,{ref_for:!0,ref:j=>o.value[A]=j,shape:"square",name:A,onClick:u[0]||(u[0]=ce(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])):x("",!0),l.questionType===3?(n(),v(ge,{key:2,modelValue:l.singleAnswer,"onUpdate:modelValue":C=>l.singleAnswer=C,options:[{label:"\u662F",value:"Y"},{label:"\u5426",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):x("",!0),l.questionType===4?(n(),v($,{key:3,inset:""},{default:c(()=>[h(oe,{modelValue:l.singleAnswer,"onUpdate:modelValue":C=>l.singleAnswer=C,placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):x("",!0)]))),128))]),_:1},8,["title"]),E("div",Se,[h(se,{type:"primary",block:"",onClick:y},{default:c(()=>[Ee]),_:1})])]),_:1})}}});var we=U(Ie,[["__scopeId","data-v-40ec5510"]]);const Pe={class:"com-document"},$e={class:"title"},Te={class:"content"},xe={class:"footer-button"},De=V("\u4E86\u89E3\u5E76\u7EE7\u7EED"),Ae=O({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(i,{emit:t}){const e=i;return(k,o)=>{const m=_("van-button"),I=_("ProPageWrap"),B=pe("dompurify-html");return n(),v(I,null,{default:c(()=>{var D,g;return[E("div",Pe,[E("div",$e,R((D=e.currentPageInfo[0])==null?void 0:D.title),1),_e(E("div",Te,null,512),[[B,(g=e.currentPageInfo[0])==null?void 0:g.content]]),E("div",xe,[h(m,{type:"primary",onClick:o[0]||(o[0]=S=>t("onSubmitCurrentStatus",1))},{default:c(()=>[De]),_:1})])])]}),_:1})}}});var Qe=U(Ae,[["__scopeId","data-v-c7bd0da4"]]);const Ve={class:"com-pdf-viewer"},Be=["id","isee_pdf"],qe={class:"footer-button"},Ne=V("\u90E8\u5206\u4E3A\u662F"),Oe=V("\u4EE5\u4E0A\u7686\u5426"),Fe=O({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(i,{emit:t}){const e=i;H.exports.GlobalWorkerOptions.workerSrc=me;const k=fe(),o=F(!1),m=F(!0),I=N(()=>["png","jpg","jpeg"].some(g=>e.url.includes(g))),B=()=>{const g=document.getElementById(k);if(g.hasChildNodes()){m.value=!1;return}H.exports.getDocument({url:e.url}).promise.then(r=>{const w=r.numPages;for(let f=1;f<=w;f++)r.getPage(f).then(Q=>{const P=Q.getViewport({scale:1}),y=document.createElement("canvas"),q=y.getContext("2d");y.width=P.width,y.height=P.height,y.style.width="100%",g.append(y);const s={canvasContext:q,viewport:P};Q.render(s),m.value=!1})})},D=async()=>{o.value=!0,setTimeout(()=>{B()},0)};return Z(()=>{D()}),(g,S)=>{const r=_("van-image"),w=_("van-button");return n(),T("div",Ve,[b(I)?(n(),v(r,{key:0,width:"100%",height:"80vh",fit:"contain",src:e.url},null,8,["src"])):(n(),T("div",{key:1,id:b(k),isee_pdf:g.pdfUrl,class:"pdf-wapper"},null,8,Be)),E("div",qe,[h(w,{plain:"",type:"primary",onClick:S[0]||(S[0]=f=>t("onSubmitCurrentStatus",2))},{default:c(()=>[Ne]),_:1}),h(w,{type:"primary",onClick:S[1]||(S[1]=f=>t("onSubmitCurrentStatus",1))},{default:c(()=>[Oe]),_:1})])])}}});var Ue=U(Fe,[["__scopeId","data-v-4c70488e"]]);const je={class:"iframe-wrap"},Le=["src"],Je={class:"footer-button"},Me=V("\u90E8\u5206\u4E3A\u662F"),Re=V("\u4EE5\u4E0A\u7686\u5426"),We=O({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(i,{emit:t}){const e=i;return(k,o)=>{const m=_("van-button");return n(),T("div",je,[E("iframe",{src:e.url,frameborder:"0"},null,8,Le),E("div",Je,[h(m,{plain:"",type:"primary",onClick:o[0]||(o[0]=I=>t("onSubmitCurrentStatus",2))},{default:c(()=>[Me]),_:1}),h(m,{type:"primary",onClick:o[1]||(o[1]=I=>t("onSubmitCurrentStatus",1))},{default:c(()=>[Re]),_:1})])])}}});var Ge=U(We,[["__scopeId","data-v-1ac7e729"]]);const Ye={1:4,2:5,3:9},ze={class:"com-health-notice"},nt=O({setup(i){const t=K(),e=X(),k=be.get("questionData"),{questionnaireType:o}=e.query,{orderNo:m="2022021815432987130620",productCode:I="CQ75CQ76",templateId:B=1,agentCode:D="65434444",orderId:g=13005,tenantId:S=9991000007}=e.query,r=ve({pageData:{},currentQuestionInfo:[]}),w=N(()=>o==="2"),f=N(()=>{var s;return o==="1"&&[1].includes((s=r.currentQuestionInfo[0])==null?void 0:s.textType)}),Q=N(()=>{var s;return o==="1"&&[2].includes((s=r.currentQuestionInfo[0])==null?void 0:s.textType)}),P=N(()=>{var s;return o==="1"&&[3].includes((s=r.currentQuestionInfo[0])==null?void 0:s.textType)}),y=(s,a)=>{var p;const{id:u,objectType:d}=k;he({content:a||((p=r.currentQuestionInfo[0])==null?void 0:p.content),contentType:o,isDone:s,noticeType:Ye[d],objectId:u,objectType:d,orderId:r.pageData.id,orderNo:m,tenantId:9991000007}).then(({code:$,data:W})=>{console.log($),$==="10000"&&t.go(-1)})},q=()=>{ee({orderNo:m,saleUserId:D,tenantId:S}).then(({code:s,data:a})=>{s==="10000"&&Object.assign(r.pageData,a)})};return Z(()=>{q();const{insurerCode:s,id:a,objectType:u,productCategory:d}=k;Ce({insurerCode:s,id:a,objectType:u,productCategory:d,orderNo:m,tenantId:S}).then(({code:p,data:$})=>{p==="10000"&&(r.currentQuestionInfo=$)})}),(s,a)=>{var u,d;return n(),T("div",ze,[b(w)?(n(),v(we,{key:0,"current-page-info":b(r).currentQuestionInfo,onOnSubmitCurrentStatus:y},null,8,["current-page-info"])):x("",!0),b(Q)?(n(),v(Qe,{key:1,"current-page-info":b(r).currentQuestionInfo,onOnSubmitCurrentStatus:y},null,8,["current-page-info"])):x("",!0),b(f)?(n(),v(Ue,{key:2,url:(u=b(r).currentQuestionInfo[0])==null?void 0:u.content,onOnSubmitCurrentStatus:y},null,8,["url"])):x("",!0),b(P)?(n(),v(Ge,{key:3,url:(d=b(r).currentQuestionInfo[0])==null?void 0:d.content,onOnSubmitCurrentStatus:y},null,8,["url"])):x("",!0)])}}});export{nt as default};
