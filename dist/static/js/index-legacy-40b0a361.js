!function(){var e=document.createElement("style");e.innerHTML=".com-question[data-v-43eb6cf6] .body{background-color:var(--zaui-global-bg, #f2f5fc);padding:0!important;margin-bottom:1.6rem}.com-question[data-v-43eb6cf6] .body .com-radio-btn{justify-content:flex-start}.question-item[data-v-43eb6cf6]{background-color:#fff;margin-bottom:.26667rem;padding:0 .4rem}.question-item .problem[data-v-43eb6cf6]{min-height:1.41333rem;font-size:.4rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:1.41333rem}.com-document[data-v-6e53a5c6]{padding:0 .53333rem}.com-document .title[data-v-6e53a5c6]{font-size:.42667rem;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#393d46;line-height:.6rem;margin:.53333rem 0}.com-document .content[data-v-6e53a5c6]{font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.64rem;padding-bottom:2.66667rem}.com-pdf-viewer[data-v-a4e458ca]{background-color:#f7f8fc;padding:.4rem .4rem 0}.com-pdf-viewer .pdf-wapper[data-v-a4e458ca]{height:100vh;width:100%;overflow:auto;border-radius:.26667rem;margin-bottom:2rem}.pdf-viewer[data-v-a4e458ca]{word-break:break-all}.pdf-viewer .title[data-v-a4e458ca]{color:var(--van-primary-color)}.pdf-viewer .loading[data-v-a4e458ca]{height:9.33333rem;display:flex;justify-content:center;align-items:center}.iframe-wrap iframe[data-v-1fc4d3ec]{width:100%;height:80vh}\n",document.head.appendChild(e),System.register(["./index-legacy-0b5a78eb.js","./pdfdist-legacy-70b86b2a.js","./pdf_viewer-legacy-49167d18.js","./inform-legacy-b0c1c078.js","./useStorage-legacy-2cb11efd.js","./notice-legacy-6932be1e.js"],(function(e){"use strict";var t,n,a,o,r,i,l,u,c,d,s,m,p,f,g,y,v,b,h,C,S,k,I,w,_,q,T,j,P,V,x,N,Q,O,A,U;return{setters:[function(e){t=e._,n=e.d,a=e.u,o=e.a,r=e.r,i=e.o,l=e.b,u=e.c,c=e.e,d=e.w,s=e.f,m=e.g,p=e.h,f=e.i,g=e.t,y=e.F,v=e.j,b=e.k,h=e.P,C=e.l,S=e.m,k=e.n,I=e.T,w=e.p,_=e.q,q=e.s,T=e.v,j=e.x,P=e.y,V=e.z,x=e.A},function(e){N=e.p},function(){},function(e){Q=e.s,O=e.g},function(e){A=e.s},function(e){U=e.N}],execute:function(){const D={class:"problem"},F={class:"footer-button"},z=k("提交");var E=t(n({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;a();const k=o(),_=r([]),{questionnaireType:q}=k.query,{orderNo:T="2022021815432987130620",productCode:j="CQ75CQ76",templateId:P=1,agentCode:V="65434444",orderId:x=13005,tenantId:N=9991000007}=k.query,Q={1:"投保人",2:"被保人",3:"代理人"},O=r([]),A=e=>e?JSON.parse(e).map((e=>({title:e.value,value:e.uid}))):[],U=()=>{(O.value||[]).filter((e=>0===e.singleAnswer||e.singleAnswer||e.multipleChoose?.length)).length!==O.value.length?I("请完成所有题目进行下一步"):t("onSubmitCurrentStatus",1,JSON.stringify(O.value))},E=()=>{w({orderNo:T,saleUserId:V,tenantId:N}).then((({code:e,data:t})=>{if("10000"===e){const e=t.tenantOrderNoticeList.findIndex((e=>1===e.isDone&&+e.objectId===n.currentPageInfo[0].questionnaireId));O.value=-1!==e?(e=>JSON.parse(e))(t.tenantOrderNoticeList[e].content):n.currentPageInfo.map((e=>2===e.questionType?{multipleChoose:[],...e}:{singleAnswer:3===e.questionType?0:"",...e}))}}))};return i((()=>{_.value=[],E()})),(e,t)=>{const n=l("van-radio"),a=l("van-cell"),o=l("van-cell-group"),r=l("van-radio-group"),i=l("van-checkbox"),k=l("van-checkbox-group"),I=l("van-field"),w=l("van-button"),T=l("ProPageWrap");return u(),c(T,{class:"com-question"},{default:d((()=>[s(S,{title:`${Q[C(q)]}健康告知书`},{default:d((()=>[(u(!0),m(y,null,p(O.value,((e,l)=>(u(),m("div",{key:l,class:"question-item"},[f("div",D,g(l+1)+". "+g(e.title),1),1===e.questionType?(u(),c(r,{key:0,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t},{default:d((()=>[s(o,{inset:""},{default:d((()=>[(u(!0),m(y,null,p(A(e.options),((t,o)=>(u(),c(a,{key:o,title:t.title,clickable:"",onClick:t=>e.singleAnswer=o},{"right-icon":d((()=>[s(n,{name:o},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):v("",!0),2===e.questionType?(u(),c(k,{key:1,modelValue:e.multipleChoose,"onUpdate:modelValue":t=>e.multipleChoose=t},{default:d((()=>[s(o,{inset:""},{default:d((()=>[(u(!0),m(y,null,p(A(e.options),((e,n)=>(u(),c(a,{key:e.uid,clickable:"",title:e.title,onClick:e=>(e=>{_.value[e].toggle()})(n)},{"right-icon":d((()=>[s(i,{ref_for:!0,ref:e=>_.value[n]=e,shape:"square",name:n,onClick:t[0]||(t[0]=b((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):v("",!0),3===e.questionType?(u(),c(h,{key:2,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,options:[{label:"是",value:"Y"},{label:"否",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),4===e.questionType?(u(),c(o,{key:3,inset:""},{default:d((()=>[s(I,{modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):v("",!0)])))),128))])),_:1},8,["title"]),f("div",F,[s(w,{type:"primary",block:"",onClick:U},{default:d((()=>[z])),_:1})])])),_:1})}}}),[["__scopeId","data-v-43eb6cf6"]]);const J={class:"com-document"},L={class:"title"},W={class:"content"},M={class:"footer-button"},B=k("了解并继续");var G=t(n({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,a)=>{const o=l("van-button"),r=l("ProPageWrap"),i=_("dompurify-html");return u(),c(r,null,{default:d((()=>[f("div",J,[f("div",L,g(n.currentPageInfo[0]?.title),1),q(f("div",W,null,512),[[i,n.currentPageInfo[0]?.content]]),f("div",M,[s(o,{type:"primary",onClick:a[0]||(a[0]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[B])),_:1})])])])),_:1})}}}),[["__scopeId","data-v-6e53a5c6"]]);const H={class:"com-pdf-viewer"},R=["id","isee_pdf"],Y={key:2,class:"footer-button"},$=k("部分为是"),K=k("以上皆否"),X={key:3,class:"footer-button"},Z=k("了解并继续");var ee=t(n({props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;N.exports.GlobalWorkerOptions.workerSrc=T;const a=j(),o=r(!1),i=r(!0),p=P((()=>["png","jpg","jpeg"].some((e=>n.url.includes(e))))),f=async()=>{o.value=!0,setTimeout((()=>{(()=>{const e=document.getElementById(a);if(e.hasChildNodes())return void(i.value=!1);N.exports.getDocument({url:n.url}).promise.then((t=>{const n=t.numPages;for(let a=1;a<=n;a++)t.getPage(a).then((t=>{const n=t.getViewport({scale:1}),a=document.createElement("canvas"),o=a.getContext("2d");a.width=n.width,a.height=n.height,a.style.width="100%",e.append(a);const r={canvasContext:o,viewport:n};t.render(r),i.value=!1}))}))})()}),0)};return V((()=>{f()})),(e,o)=>{const r=l("van-image"),i=l("van-button");return u(),m("div",H,[C(p)?(u(),c(r,{key:0,width:"100%",height:"80vh",fit:"contain",src:n.url},null,8,["src"])):(u(),m("div",{key:1,id:C(a),isee_pdf:e.pdfUrl,class:"pdf-wapper"},null,8,R)),"question"===n.materialType?(u(),m("div",Y,[s(i,{plain:"",type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",2))},{default:d((()=>[$])),_:1}),s(i,{type:"primary",onClick:o[1]||(o[1]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[K])),_:1})])):(u(),m("div",X,[s(i,{type:"primary",onClick:o[2]||(o[2]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[Z])),_:1})]))])}}}),[["__scopeId","data-v-a4e458ca"]]);const te={class:"iframe-wrap"},ne=["src"],ae={key:0,class:"footer-button"},oe=k("部分为是"),re=k("以上皆否"),ie={key:1,class:"footer-button"},le=k("了解并继续");var ue=t(n({props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,a)=>{const o=l("van-button");return u(),m("div",te,[f("iframe",{src:n.url,frameborder:"0"},null,8,ne),"question"===n.materialType?(u(),m("div",ae,[s(o,{plain:"",type:"primary",onClick:a[0]||(a[0]=e=>t("onSubmitCurrentStatus",2))},{default:d((()=>[oe])),_:1}),s(o,{type:"primary",onClick:a[1]||(a[1]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[re])),_:1})])):(u(),m("div",ie,[s(o,{type:"primary",onClick:a[2]||(a[2]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[le])),_:1})]))])}}}),[["__scopeId","data-v-1fc4d3ec"]]);const ce={class:"com-health-notice"};e("default",n({setup(e){const t=a(),n=o(),r=A.get("questionData"),{materialType:i="question",questionnaireType:l="1",orderNo:d="2022021815432987130620",productCode:s="CQ75CQ76",templateId:p=1,agentCode:f="65434444",orderId:g=13005,tenantId:y=9991000007}=n.query&&n.query,b=x({pageData:{},currentQuestionInfo:[]}),h=P((()=>"2"===l)),S=P((()=>"1"===l&&([1].includes(b.currentQuestionInfo[0]?.textType)||1===r?.materialSource))),k=P((()=>"1"===l&&([2].includes(b.currentQuestionInfo[0]?.textType)||2===r?.materialSource))),I=P((()=>"1"===l&&([3].includes(b.currentQuestionInfo[0]?.textType)||3===r?.materialSource))),_=(e,n)=>{const{id:a,objectType:o,noticeObject:i,materialSource:u}=r;Q({content:n||b.currentQuestionInfo[0]?.content,contentType:l||"3",isDone:e,noticeType:U[o]||"99",objectId:a,objectType:o||i,orderId:b.pageData.id,orderNo:d,tenantId:y}).then((({code:e,data:n})=>{"10000"===e&&t.go(-1)}))};return V((()=>{w({orderNo:d,saleUserId:f,tenantId:y}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(b.pageData,t)})),r?.materialSource?b.currentQuestionInfo=[{...r?.materialSource,title:r?.materialName,content:r?.materialContent}]:(()=>{const{insurerCode:e,id:t,objectType:n,productCategory:a}=r;O({insurerCode:e,id:t,objectType:n,productCategory:a,orderNo:d,tenantId:y}).then((({code:e,data:t})=>{"10000"===e&&(b.currentQuestionInfo=t)}))})()})),(e,t)=>(u(),m("div",ce,[C(h)?(u(),c(E,{key:0,"current-page-info":C(b).currentQuestionInfo,onOnSubmitCurrentStatus:_},null,8,["current-page-info"])):v("",!0),C(k)?(u(),c(G,{key:1,"material-type":C(i),"current-page-info":C(b).currentQuestionInfo,onOnSubmitCurrentStatus:_},null,8,["material-type","current-page-info"])):v("",!0),C(S)?(u(),c(ee,{key:2,"material-type":C(i),url:C(b).currentQuestionInfo[0]?.content,onOnSubmitCurrentStatus:_},null,8,["material-type","url"])):v("",!0),C(I)?(u(),c(ue,{key:3,"material-type":C(i),url:C(b).currentQuestionInfo[0]?.content,onOnSubmitCurrentStatus:_},null,8,["material-type","url"])):v("",!0)]))}}))}}}))}();
