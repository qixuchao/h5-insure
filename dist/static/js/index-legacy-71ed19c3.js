!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-quersion[data-v-0b921519] .body{background-color:#f2f5fc;padding:0!important;margin-bottom:1.6rem}.com-quersion[data-v-0b921519] .body .com-radio-btn{justify-content:flex-start}.question-item[data-v-0b921519]{background-color:#fff;margin-bottom:.26667rem;padding:0 .4rem}.question-item .problem[data-v-0b921519]{min-height:1.41333rem;font-size:.4rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:1.41333rem}.com-document[data-v-27a7d770]{padding:0 .53333rem}.com-document .title[data-v-27a7d770]{font-size:.42667rem;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#393d46;line-height:.6rem;margin:.53333rem 0}.com-document .content[data-v-27a7d770]{font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.64rem;margin-bottom:2.66667rem}.com-pdf-viewer[data-v-4c70488e]{background-color:#f7f8fc;padding:.4rem .4rem 0}.com-pdf-viewer .pdf-wapper[data-v-4c70488e]{height:100vh;width:100%;overflow:auto;border-radius:.26667rem;margin-bottom:2rem}.pdf-viewer[data-v-4c70488e]{word-break:break-all}.pdf-viewer .title[data-v-4c70488e]{color:var(--van-primary-color)}.pdf-viewer .loading[data-v-4c70488e]{height:9.33333rem;display:flex;justify-content:center;align-items:center}@charset "UTF-8";.iframe-wrap iframe[data-v-1ac7e729]{width:100%;height:80vh}\n',document.head.appendChild(e),System.register(["./vendor-legacy-17b21673.js","./index-legacy-94ed15a9.js","./pdf.worker.entry-legacy-921e221c.js","./pdf_viewer-legacy-67f51d36.js","./inform-legacy-bf2867c9.js","./useStorage-legacy-131b69ad.js"],(function(e){"use strict";var t,n,o,r,a,u,i,l,d,c,s,m,p,f,v,g,y,b,h,C,k,S,_,I,w,P,T,j,q,Q,x,V,F,N,O,U;return{setters:[function(e){t=e.g,n=e.Q,o=e.C,r=e.L,a=e.v,u=e.X,i=e.ag,l=e.r,d=e.h,c=e.j,s=e.k,m=e.n,p=e.m,f=e.E,v=e.y,g=e.I,y=e.z,b=e.a6,h=e.F,C=e.s,k=e.ah,S=e.B,_=e.ak,I=e.G,w=e.x,P=e.M,T=e.af},function(e){j=e._,q=e.h,Q=e.j},function(e){x=e.w,V=e.n},function(e){F=e.p},function(e){N=e.g,O=e.s},function(e){U=e.s}],execute:function(){const z={class:"problem"},D={class:"footer-button"},E=S("提交");var M=j(t({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const S=e,_=n(),I=o([]),{questionnaireType:w}=_.query,P={1:"投保人",2:"被保人",3:"代理人"},T=r({radioCheckedProblem:"",checked:[],modelValue:"",inputValue:"",listQuestions:[]}),{radioCheckedProblem:j,checked:x,modelValue:V,inputValue:F,listQuestions:N}=a(T),O=e=>e?JSON.parse(e).map((e=>({title:e.value,value:e.uid}))):[];u((()=>S.currentPageInfo),(e=>{N.value=e}),{deep:!0,immediate:!0});const U=()=>{t("onSubmitCurrentStatus",1)};return i((()=>{I.value=[]})),(e,t)=>{const n=l("van-radio"),o=l("van-cell"),r=l("van-cell-group"),a=l("van-radio-group"),u=l("van-checkbox"),i=l("van-checkbox-group"),S=l("van-field"),_=l("van-button"),T=l("ProPageWrap");return d(),c(T,{class:"com-quersion"},{default:s((()=>[m(Q,{title:`${P[y(w)]}健康告知书`},{default:s((()=>[(d(!0),p(h,null,f(y(N),((e,l)=>(d(),p("div",{key:l,class:"question-item"},[v("div",z,g(l+1)+". "+g(e.title),1),1===e.questionType?(d(),c(a,{key:0,modelValue:y(j),"onUpdate:modelValue":t[0]||(t[0]=e=>b(j)?j.value=e:null)},{default:s((()=>[m(r,{inset:""},{default:s((()=>[(d(!0),p(h,null,f(O(e.options),((e,t)=>(d(),c(o,{key:t,title:e.title,clickable:"",onClick:t=>j.value=e.value},{"right-icon":s((()=>[m(n,{name:e.value},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue"])):C("",!0),2===e.questionType?(d(),c(i,{key:1,modelValue:y(x),"onUpdate:modelValue":t[2]||(t[2]=e=>b(x)?x.value=e:null)},{default:s((()=>[m(r,{inset:""},{default:s((()=>[(d(!0),p(h,null,f(O(e.options),((e,n)=>(d(),c(o,{key:e.uid,clickable:"",title:e.title,onClick:e=>(e=>{I.value[e].toggle()})(n)},{"right-icon":s((()=>[m(u,{ref_for:!0,ref:e=>I.value[n]=e,shape:"square",name:e,onClick:t[1]||(t[1]=k((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue"])):C("",!0),3===e.questionType?(d(),c(q,{key:2,"model-value":y(V),options:[{label:"是",value:"Y"},{label:"否",value:"N"}]},null,8,["model-value"])):C("",!0),4===e.questionType?(d(),c(r,{key:3,inset:""},{default:s((()=>[m(S,{modelValue:y(F),"onUpdate:modelValue":t[3]||(t[3]=e=>b(F)?F.value=e:null),placeholder:"请输入"},null,8,["modelValue"])])),_:1})):C("",!0)])))),128))])),_:1},8,["title"]),v("div",D,[m(_,{type:"primary",block:"",onClick:U},{default:s((()=>[E])),_:1})])])),_:1})}}}),[["__scopeId","data-v-0b921519"]]);const W={class:"title"},B={class:"content"},G={class:"footer-button"},L=S("了解并继续");var H=j(t({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,o)=>{const r=l("van-button"),a=l("ProPageWrap"),u=_("dompurify-html");return d(),c(a,{class:"com-document"},{default:s((()=>{var e,a;return[v("div",W,g(null===(e=n.currentPageInfo[0])||void 0===e?void 0:e.title),1),I(v("div",B,null,512),[[u,null===(a=n.currentPageInfo[0])||void 0===a?void 0:a.content]]),v("div",G,[m(r,{type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",1))},{default:s((()=>[L])),_:1})])]})),_:1})}}}),[["__scopeId","data-v-27a7d770"]]);const J={class:"com-pdf-viewer"},R=["id","isee_pdf"],X={class:"footer-button"},Y=S("部分为是"),$=S("以上皆否");var A=j(t({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;F.exports.GlobalWorkerOptions.workerSrc=x;const r=V(),a=o(!1),u=o(!0),i=w((()=>["png","jpg","jpeg"].some((e=>n.url.includes(e))))),f=async()=>{a.value=!0,setTimeout((()=>{(()=>{const e=document.getElementById(r);if(e.hasChildNodes())return void(u.value=!1);F.exports.getDocument({url:n.url}).promise.then((t=>{const n=t.numPages;for(let o=1;o<=n;o++)t.getPage(o).then((t=>{const n=t.getViewport({scale:1}),o=document.createElement("canvas"),r=o.getContext("2d");o.width=n.width,o.height=n.height,o.style.width="100%",e.append(o);const a={canvasContext:r,viewport:n};t.render(a),u.value=!1}))}))})()}),0)};return P((()=>{f()})),(e,o)=>{const a=l("van-image"),u=l("van-button");return d(),p("div",J,[y(i)?(d(),c(a,{key:0,width:"100%",height:"80vh",fit:"contain",src:n.url},null,8,["src"])):(d(),p("div",{key:1,id:y(r),isee_pdf:e.pdfUrl,class:"pdf-wapper"},null,8,R)),v("div",X,[m(u,{plain:"",type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",2))},{default:s((()=>[Y])),_:1}),m(u,{type:"primary",onClick:o[1]||(o[1]=e=>t("onSubmitCurrentStatus",1))},{default:s((()=>[$])),_:1})])])}}}),[["__scopeId","data-v-4c70488e"]]);const K={class:"iframe-wrap"},Z=["src"],ee={class:"footer-button"},te=S("部分为是"),ne=S("以上皆否");var oe=j(t({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,o)=>{const r=l("van-button");return d(),p("div",K,[v("iframe",{src:n.url,frameborder:"0"},null,8,Z),v("div",ee,[m(r,{plain:"",type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",2))},{default:s((()=>[te])),_:1}),m(r,{type:"primary",onClick:o[1]||(o[1]=e=>t("onSubmitCurrentStatus",1))},{default:s((()=>[ne])),_:1})])])}}}),[["__scopeId","data-v-1ac7e729"]]);const re={class:"com-health-notice"};e("default",t({setup(e){const t=T(),o=n(),a=U.get("questionData"),{questionnaireType:u}=o.query,{orderNo:i="2022021815432987130620",productCode:l="CQ75CQ76",templateId:s=1,orderId:m=13005,tenantId:f=9991000007}=o.query,v={1:4,2:5,3:9},g=r({pageData:{},currentQuestionInfo:[]}),b=w((()=>"2"===u)),h=w((()=>{var e;return"1"===u&&[1].includes(null===(e=g.currentQuestionInfo[0])||void 0===e?void 0:e.textType)})),k=w((()=>{var e;return"1"===u&&[2].includes(null===(e=g.currentQuestionInfo[0])||void 0===e?void 0:e.textType)})),S=w((()=>{var e;return"1"===u&&[3].includes(null===(e=g.currentQuestionInfo[0])||void 0===e?void 0:e.textType)})),_=e=>{var n;const{id:o,objectType:r}=a;O({content:null===(n=g.currentQuestionInfo[0])||void 0===n?void 0:n.content,contentType:u,isDone:e,noticeType:v[r],objectId:o,objectType:r,orderId:m,orderNo:i,tenantId:9991000007}).then((({code:e,data:n})=>{"10000"===e&&t.go(-1)}))};return P((()=>{const{insurerCode:e,id:t,objectType:n,productCategory:o}=a;N({insurerCode:e,id:t,objectType:n,productCategory:o,orderNo:i,tenantId:f}).then((({code:e,data:t})=>{"10000"===e&&(g.currentQuestionInfo=t)}))})),(e,t)=>{var n,o;return d(),p("div",re,[y(b)?(d(),c(M,{key:0,"current-page-info":y(g).currentQuestionInfo,onOnSubmitCurrentStatus:_},null,8,["current-page-info"])):C("",!0),y(k)?(d(),c(H,{key:1,"current-page-info":y(g).currentQuestionInfo,onOnSubmitCurrentStatus:_},null,8,["current-page-info"])):C("",!0),y(h)?(d(),c(A,{key:2,url:null===(n=y(g).currentQuestionInfo[0])||void 0===n?void 0:n.content,onOnSubmitCurrentStatus:_},null,8,["url"])):C("",!0),y(S)?(d(),c(oe,{key:3,url:null===(o=y(g).currentQuestionInfo[0])||void 0===o?void 0:o.content,onOnSubmitCurrentStatus:_},null,8,["url"])):C("",!0)])}}}))}}}))}();
