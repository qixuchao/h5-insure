!function(){var e=document.createElement("style");e.innerHTML=".com-question[data-v-6ef8a76f] .body{background-color:var(--zaui-global-bg, #f2f5fc);padding:0!important;margin-bottom:1.6rem}.com-question[data-v-6ef8a76f] .body .com-radio-btn{justify-content:flex-start}.question-item[data-v-6ef8a76f]{background-color:#fff;margin-bottom:.26667rem;padding:0 .4rem}.question-item .problem[data-v-6ef8a76f]{min-height:1.41333rem;font-size:.4rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:1.41333rem}.com-document[data-v-6e53a5c6]{padding:0 .53333rem}.com-document .title[data-v-6e53a5c6]{font-size:.42667rem;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#393d46;line-height:.6rem;margin:.53333rem 0}.com-document .content[data-v-6e53a5c6]{font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.64rem;padding-bottom:2.66667rem}.com-pdf-viewer[data-v-a4e458ca]{background-color:#f7f8fc;padding:.4rem .4rem 0}.com-pdf-viewer .pdf-wapper[data-v-a4e458ca]{height:100vh;width:100%;overflow:auto;border-radius:.26667rem;margin-bottom:2rem}.pdf-viewer[data-v-a4e458ca]{word-break:break-all}.pdf-viewer .title[data-v-a4e458ca]{color:var(--van-primary-color)}.pdf-viewer .loading[data-v-a4e458ca]{height:9.33333rem;display:flex;justify-content:center;align-items:center}.iframe-wrap iframe[data-v-1fc4d3ec]{width:100%;height:80vh}\n",document.head.appendChild(e),System.register(["./vendor-legacy-2ed1ad67.js","./index-legacy-3c14629b.js","./inform-legacy-59a6e2af.js","./useStorage-legacy-4c2bd524.js","./notice-legacy-fe9e1ef6.js"],(function(e){"use strict";var t,n,o,a,r,i,l,u,d,c,s,m,p,f,v,g,y,b,h,C,S,k,I,w,_,T,q,P,j,V,N,Q,x,O,U,A;return{setters:[function(e){t=e.g,n=e.a9,o=e.O,a=e.E,r=e.aa,i=e.r,l=e.j,u=e.k,d=e.m,c=e.p,s=e.n,m=e.G,p=e.z,f=e.J,v=e.F,g=e.t,y=e.ab,b=e.A,h=e.C,C=e.T,S=e.af,k=e.H,I=e.ac,w=e.ad,_=e.ae,T=e.y,q=e.h,P=e.M},function(e){j=e._,V=e.P,N=e.a,Q=e.g},function(e){x=e.s,O=e.g},function(e){U=e.s},function(e){A=e.N}],execute:function(){const D={class:"problem"},F={class:"footer-button"},z=h("提交");var E=j(t({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const h=e;n();const S=o(),k=a([]),{questionnaireType:I}=S.query,{orderNo:w="2022021815432987130620",productCode:_="CQ75CQ76",templateId:T=1,agentCode:q="65434444",orderId:P=13005,tenantId:j=9991000007}=S.query,x={1:"投保人",2:"被保人",3:"代理人"},O=a([]),U=e=>e?JSON.parse(e).map((e=>({title:e.value,value:e.uid}))):[],A=()=>{O.value.some((e=>{var t;return["undefined",""].includes(e.singleAnswer)||0===(null===(t=e.multipleChoose)||void 0===t?void 0:t.length)}))?C("请完成所有题目进行下一步"):t("onSubmitCurrentStatus",1,JSON.stringify(O.value))},E=()=>{Q({orderNo:w,saleUserId:q,tenantId:j}).then((({code:e,data:t})=>{if("10000"===e){const e=t.tenantOrderNoticeList.findIndex((e=>1===e.isDone&&+e.objectId===h.currentPageInfo[0].questionnaireId));O.value=-1!==e?(e=>JSON.parse(e))(t.tenantOrderNoticeList[e].content):h.currentPageInfo.map((e=>2===e.questionType?{multipleChoose:[],...e}:{singleAnswer:3===e.questionType?0:"",...e}))}}))};return r((()=>{k.value=[],E()})),(e,t)=>{const n=i("van-radio"),o=i("van-cell"),a=i("van-cell-group"),r=i("van-radio-group"),h=i("van-checkbox"),C=i("van-checkbox-group"),S=i("van-field"),w=i("van-button"),_=i("ProPageWrap");return l(),u(_,{class:"com-question"},{default:d((()=>[c(N,{title:`${x[b(I)]}健康告知书`},{default:d((()=>[(l(!0),s(v,null,m(O.value,((e,i)=>(l(),s("div",{key:i,class:"question-item"},[p("div",D,f(i+1)+". "+f(e.title),1),1===e.questionType?(l(),u(r,{key:0,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t},{default:d((()=>[c(a,{inset:""},{default:d((()=>[(l(!0),s(v,null,m(U(e.options),((t,a)=>(l(),u(o,{key:a,title:t.title,clickable:"",onClick:t=>e.singleAnswer=a},{"right-icon":d((()=>[c(n,{name:a},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):g("",!0),2===e.questionType?(l(),u(C,{key:1,modelValue:e.multipleChoose,"onUpdate:modelValue":t=>e.multipleChoose=t},{default:d((()=>[c(a,{inset:""},{default:d((()=>[(l(!0),s(v,null,m(U(e.options),((e,n)=>(l(),u(o,{key:e.uid,clickable:"",title:e.title,onClick:e=>(e=>{k.value[e].toggle()})(n)},{"right-icon":d((()=>[c(h,{ref_for:!0,ref:e=>k.value[n]=e,shape:"square",name:n,onClick:t[0]||(t[0]=y((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):g("",!0),3===e.questionType?(l(),u(V,{key:2,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,options:[{label:"是",value:"Y"},{label:"否",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):g("",!0),4===e.questionType?(l(),u(a,{key:3,inset:""},{default:d((()=>[c(S,{modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):g("",!0)])))),128))])),_:1},8,["title"]),p("div",F,[c(w,{type:"primary",block:"",onClick:A},{default:d((()=>[z])),_:1})])])),_:1})}}}),[["__scopeId","data-v-6ef8a76f"]]);const J={class:"com-document"},L={class:"title"},M={class:"content"},W={class:"footer-button"},G=h("了解并继续");var H=j(t({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,o)=>{const a=i("van-button"),r=i("ProPageWrap"),s=S("dompurify-html");return l(),u(r,null,{default:d((()=>{var e,r;return[p("div",J,[p("div",L,f(null===(e=n.currentPageInfo[0])||void 0===e?void 0:e.title),1),k(p("div",M,null,512),[[s,null===(r=n.currentPageInfo[0])||void 0===r?void 0:r.content]]),p("div",W,[c(a,{type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[G])),_:1})])])]})),_:1})}}}),[["__scopeId","data-v-6e53a5c6"]]);const B={class:"com-pdf-viewer"},R=["id","isee_pdf"],Y={key:2,class:"footer-button"},$=h("部分为是"),K=h("以上皆否"),X={key:3,class:"footer-button"},Z=h("了解并继续");var ee=j(t({props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;I.exports.GlobalWorkerOptions.workerSrc=w;const o=_(),r=a(!1),m=a(!0),p=T((()=>["png","jpg","jpeg"].some((e=>n.url.includes(e))))),f=async()=>{r.value=!0,setTimeout((()=>{(()=>{const e=document.getElementById(o);if(e.hasChildNodes())return void(m.value=!1);I.exports.getDocument({url:n.url}).promise.then((t=>{const n=t.numPages;for(let o=1;o<=n;o++)t.getPage(o).then((t=>{const n=t.getViewport({scale:1}),o=document.createElement("canvas"),a=o.getContext("2d");o.width=n.width,o.height=n.height,o.style.width="100%",e.append(o);const r={canvasContext:a,viewport:n};t.render(r),m.value=!1}))}))})()}),0)};return q((()=>{f()})),(e,a)=>{const r=i("van-image"),m=i("van-button");return l(),s("div",B,[b(p)?(l(),u(r,{key:0,width:"100%",height:"80vh",fit:"contain",src:n.url},null,8,["src"])):(l(),s("div",{key:1,id:b(o),isee_pdf:e.pdfUrl,class:"pdf-wapper"},null,8,R)),"question"===n.materialType?(l(),s("div",Y,[c(m,{plain:"",type:"primary",onClick:a[0]||(a[0]=e=>t("onSubmitCurrentStatus",2))},{default:d((()=>[$])),_:1}),c(m,{type:"primary",onClick:a[1]||(a[1]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[K])),_:1})])):(l(),s("div",X,[c(m,{type:"primary",onClick:a[2]||(a[2]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[Z])),_:1})]))])}}}),[["__scopeId","data-v-a4e458ca"]]);const te={class:"iframe-wrap"},ne=["src"],oe={key:0,class:"footer-button"},ae=h("部分为是"),re=h("以上皆否"),ie={key:1,class:"footer-button"},le=h("了解并继续");var ue=j(t({props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,o)=>{const a=i("van-button");return l(),s("div",te,[p("iframe",{src:n.url,frameborder:"0"},null,8,ne),"question"===n.materialType?(l(),s("div",oe,[c(a,{plain:"",type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",2))},{default:d((()=>[ae])),_:1}),c(a,{type:"primary",onClick:o[1]||(o[1]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[re])),_:1})])):(l(),s("div",ie,[c(a,{type:"primary",onClick:o[2]||(o[2]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[le])),_:1})]))])}}}),[["__scopeId","data-v-1fc4d3ec"]]);const de={class:"com-health-notice"};e("default",t({setup(e){const t=n(),a=o(),r=U.get("questionData"),{materialType:i="question",questionnaireType:d="1",orderNo:c="2022021815432987130620",productCode:m="CQ75CQ76",templateId:p=1,agentCode:f="65434444",orderId:v=13005,tenantId:y=9991000007}=a.query&&a.query,h=P({pageData:{},currentQuestionInfo:[]}),C=T((()=>"2"===d)),S=T((()=>{var e;return"1"===d&&([1].includes(null===(e=h.currentQuestionInfo[0])||void 0===e?void 0:e.textType)||1===(null==r?void 0:r.materialSource))})),k=T((()=>{var e;return"1"===d&&([2].includes(null===(e=h.currentQuestionInfo[0])||void 0===e?void 0:e.textType)||2===(null==r?void 0:r.materialSource))})),I=T((()=>{var e;return"1"===d&&([3].includes(null===(e=h.currentQuestionInfo[0])||void 0===e?void 0:e.textType)||3===(null==r?void 0:r.materialSource))})),w=(e,n)=>{var o;const{id:a,objectType:i,noticeObject:l,materialSource:u}=r;x({content:n||(null===(o=h.currentQuestionInfo[0])||void 0===o?void 0:o.content),contentType:d||"3",isDone:e,noticeType:A[i]||"99",objectId:a,objectType:i||l,orderId:h.pageData.id,orderNo:c,tenantId:y}).then((({code:e,data:n})=>{"10000"===e&&t.go(-1)}))};return q((()=>{Q({orderNo:c,saleUserId:f,tenantId:y}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(h.pageData,t)})),null!=r&&r.materialSource?h.currentQuestionInfo=[{...null==r?void 0:r.materialSource,title:null==r?void 0:r.materialName,content:null==r?void 0:r.materialContent}]:(()=>{const{insurerCode:e,id:t,objectType:n,productCategory:o}=r;O({insurerCode:e,id:t,objectType:n,productCategory:o,orderNo:c,tenantId:y}).then((({code:e,data:t})=>{"10000"===e&&(h.currentQuestionInfo=t)}))})()})),(e,t)=>{var n,o;return l(),s("div",de,[b(C)?(l(),u(E,{key:0,"current-page-info":b(h).currentQuestionInfo,onOnSubmitCurrentStatus:w},null,8,["current-page-info"])):g("",!0),b(k)?(l(),u(H,{key:1,"material-type":b(i),"current-page-info":b(h).currentQuestionInfo,onOnSubmitCurrentStatus:w},null,8,["material-type","current-page-info"])):g("",!0),b(S)?(l(),u(ee,{key:2,"material-type":b(i),url:null===(n=b(h).currentQuestionInfo[0])||void 0===n?void 0:n.content,onOnSubmitCurrentStatus:w},null,8,["material-type","url"])):g("",!0),b(I)?(l(),u(ue,{key:3,"material-type":b(i),url:null===(o=b(h).currentQuestionInfo[0])||void 0===o?void 0:o.content,onOnSubmitCurrentStatus:w},null,8,["material-type","url"])):g("",!0)])}}}))}}}))}();
