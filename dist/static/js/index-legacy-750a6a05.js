!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-question[data-v-40ec5510] .body{background-color:#f2f5fc;padding:0!important;margin-bottom:1.6rem}.com-question[data-v-40ec5510] .body .com-radio-btn{justify-content:flex-start}.question-item[data-v-40ec5510]{background-color:#fff;margin-bottom:.26667rem;padding:0 .4rem}.question-item .problem[data-v-40ec5510]{min-height:1.41333rem;font-size:.4rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:1.41333rem}.com-document[data-v-c7bd0da4]{padding:0 .53333rem}.com-document .title[data-v-c7bd0da4]{font-size:.42667rem;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#393d46;line-height:.6rem;margin:.53333rem 0}.com-document .content[data-v-c7bd0da4]{font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.64rem;padding-bottom:2.66667rem}.com-pdf-viewer[data-v-4c70488e]{background-color:#f7f8fc;padding:.4rem .4rem 0}.com-pdf-viewer .pdf-wapper[data-v-4c70488e]{height:100vh;width:100%;overflow:auto;border-radius:.26667rem;margin-bottom:2rem}.pdf-viewer[data-v-4c70488e]{word-break:break-all}.pdf-viewer .title[data-v-4c70488e]{color:var(--van-primary-color)}.pdf-viewer .loading[data-v-4c70488e]{height:9.33333rem;display:flex;justify-content:center;align-items:center}@charset "UTF-8";.iframe-wrap iframe[data-v-1ac7e729]{width:100%;height:80vh}\n',document.head.appendChild(e),System.register(["./vendor-legacy-6afbc92b.js","./index-legacy-18d3d8f1.js","./index-legacy-7010c8b9.js","./inform-legacy-92380853.js","./useStorage-legacy-2f3b2251.js"],(function(e){"use strict";var t,n,o,r,a,i,u,l,d,s,c,m,p,f,v,g,y,b,h,C,S,k,I,w,_,T,q,j,P,V,x,Q,N,U,O;return{setters:[function(e){t=e.g,n=e.aj,o=e.Q,r=e.C,a=e.ak,i=e.r,u=e.h,l=e.j,d=e.k,s=e.n,c=e.m,m=e.E,p=e.y,f=e.I,v=e.F,g=e.s,y=e.al,b=e.z,h=e.B,C=e.T,S=e.ab,k=e.G,I=e.a8,w=e.a9,_=e.aa,T=e.x,q=e.M,j=e.L},function(e){P=e._,V=e.i,x=e.k},function(e){Q=e.a},function(e){N=e.g,U=e.s},function(e){O=e.s}],execute:function(){const A={class:"problem"},F={class:"footer-button"},D=h("提交");var z=P(t({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const h=e;n();const S=o(),k=r([]),{questionnaireType:I}=S.query,{orderNo:w="2022021815432987130620",productCode:_="CQ75CQ76",templateId:T=1,agentCode:q="65434444",orderId:j=13005,tenantId:P=9991000007}=S.query,N={1:"投保人",2:"被保人",3:"代理人"},U=r([]),O=e=>e?JSON.parse(e).map((e=>({title:e.value,value:e.uid}))):[],z=()=>{U.value.some((e=>{var t;return["undefined",""].includes(e.singleAnswer)||0===(null===(t=e.multipleChoose)||void 0===t?void 0:t.length)}))?C("请完成所有题目进行下一步"):t("onSubmitCurrentStatus",1,JSON.stringify(U.value))},E=()=>{Q({orderNo:w,saleUserId:q,tenantId:P}).then((({code:e,data:t})=>{if("10000"===e){const e=t.tenantOrderNoticeList.findIndex((e=>1===e.isDone&&+e.objectId===h.currentPageInfo[0].questionnaireId));U.value=-1!==e?(e=>JSON.parse(e))(t.tenantOrderNoticeList[e].content):h.currentPageInfo.map((e=>2===e.questionType?{multipleChoose:[],...e}:{singleAnswer:3===e.questionType?0:"",...e}))}}))};return a((()=>{k.value=[],E()})),(e,t)=>{const n=i("van-radio"),o=i("van-cell"),r=i("van-cell-group"),a=i("van-radio-group"),h=i("van-checkbox"),C=i("van-checkbox-group"),S=i("van-field"),w=i("van-button"),_=i("ProPageWrap");return u(),l(_,{class:"com-question"},{default:d((()=>[s(x,{title:`${N[b(I)]}健康告知书`},{default:d((()=>[(u(!0),c(v,null,m(U.value,((e,i)=>(u(),c("div",{key:i,class:"question-item"},[p("div",A,f(i+1)+". "+f(e.title),1),1===e.questionType?(u(),l(a,{key:0,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t},{default:d((()=>[s(r,{inset:""},{default:d((()=>[(u(!0),c(v,null,m(O(e.options),((t,r)=>(u(),l(o,{key:r,title:t.title,clickable:"",onClick:t=>e.singleAnswer=r},{"right-icon":d((()=>[s(n,{name:r},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):g("",!0),2===e.questionType?(u(),l(C,{key:1,modelValue:e.multipleChoose,"onUpdate:modelValue":t=>e.multipleChoose=t},{default:d((()=>[s(r,{inset:""},{default:d((()=>[(u(!0),c(v,null,m(O(e.options),((e,n)=>(u(),l(o,{key:e.uid,clickable:"",title:e.title,onClick:e=>(e=>{k.value[e].toggle()})(n)},{"right-icon":d((()=>[s(h,{ref_for:!0,ref:e=>k.value[n]=e,shape:"square",name:n,onClick:t[0]||(t[0]=y((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):g("",!0),3===e.questionType?(u(),l(V,{key:2,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,options:[{label:"是",value:"Y"},{label:"否",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):g("",!0),4===e.questionType?(u(),l(r,{key:3,inset:""},{default:d((()=>[s(S,{modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):g("",!0)])))),128))])),_:1},8,["title"]),p("div",F,[s(w,{type:"primary",block:"",onClick:z},{default:d((()=>[D])),_:1})])])),_:1})}}}),[["__scopeId","data-v-40ec5510"]]);const E={class:"com-document"},L={class:"title"},J={class:"content"},M={class:"footer-button"},W=h("了解并继续");var B=P(t({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,o)=>{const r=i("van-button"),a=i("ProPageWrap"),c=S("dompurify-html");return u(),l(a,null,{default:d((()=>{var e,a;return[p("div",E,[p("div",L,f(null===(e=n.currentPageInfo[0])||void 0===e?void 0:e.title),1),k(p("div",J,null,512),[[c,null===(a=n.currentPageInfo[0])||void 0===a?void 0:a.content]]),p("div",M,[s(r,{type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[W])),_:1})])])]})),_:1})}}}),[["__scopeId","data-v-c7bd0da4"]]);const G={class:"com-pdf-viewer"},H=["id","isee_pdf"],R={class:"footer-button"},Y=h("部分为是"),$=h("以上皆否");var K=P(t({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;I.exports.GlobalWorkerOptions.workerSrc=w;const o=_(),a=r(!1),m=r(!0),f=T((()=>["png","jpg","jpeg"].some((e=>n.url.includes(e))))),v=async()=>{a.value=!0,setTimeout((()=>{(()=>{const e=document.getElementById(o);if(e.hasChildNodes())return void(m.value=!1);I.exports.getDocument({url:n.url}).promise.then((t=>{const n=t.numPages;for(let o=1;o<=n;o++)t.getPage(o).then((t=>{const n=t.getViewport({scale:1}),o=document.createElement("canvas"),r=o.getContext("2d");o.width=n.width,o.height=n.height,o.style.width="100%",e.append(o);const a={canvasContext:r,viewport:n};t.render(a),m.value=!1}))}))})()}),0)};return q((()=>{v()})),(e,r)=>{const a=i("van-image"),m=i("van-button");return u(),c("div",G,[b(f)?(u(),l(a,{key:0,width:"100%",height:"80vh",fit:"contain",src:n.url},null,8,["src"])):(u(),c("div",{key:1,id:b(o),isee_pdf:e.pdfUrl,class:"pdf-wapper"},null,8,H)),p("div",R,[s(m,{plain:"",type:"primary",onClick:r[0]||(r[0]=e=>t("onSubmitCurrentStatus",2))},{default:d((()=>[Y])),_:1}),s(m,{type:"primary",onClick:r[1]||(r[1]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[$])),_:1})])])}}}),[["__scopeId","data-v-4c70488e"]]);const X={class:"iframe-wrap"},Z=["src"],ee={class:"footer-button"},te=h("部分为是"),ne=h("以上皆否");var oe=P(t({props:{url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,o)=>{const r=i("van-button");return u(),c("div",X,[p("iframe",{src:n.url,frameborder:"0"},null,8,Z),p("div",ee,[s(r,{plain:"",type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",2))},{default:d((()=>[te])),_:1}),s(r,{type:"primary",onClick:o[1]||(o[1]=e=>t("onSubmitCurrentStatus",1))},{default:d((()=>[ne])),_:1})])])}}}),[["__scopeId","data-v-1ac7e729"]]);const re={1:4,2:5,3:9},ae={class:"com-health-notice"};e("default",t({setup(e){const t=n(),r=o(),a=O.get("questionData"),{questionnaireType:i}=r.query,{orderNo:d="2022021815432987130620",productCode:s="CQ75CQ76",templateId:m=1,agentCode:p="65434444",orderId:f=13005,tenantId:v=9991000007}=r.query,y=j({pageData:{},currentQuestionInfo:[]}),h=T((()=>"2"===i)),C=T((()=>{var e;return"1"===i&&[1].includes(null===(e=y.currentQuestionInfo[0])||void 0===e?void 0:e.textType)})),S=T((()=>{var e;return"1"===i&&[2].includes(null===(e=y.currentQuestionInfo[0])||void 0===e?void 0:e.textType)})),k=T((()=>{var e;return"1"===i&&[3].includes(null===(e=y.currentQuestionInfo[0])||void 0===e?void 0:e.textType)})),I=(e,n)=>{var o;const{id:r,objectType:u}=a;U({content:n||(null===(o=y.currentQuestionInfo[0])||void 0===o?void 0:o.content),contentType:i,isDone:e,noticeType:re[u],objectId:r,objectType:u,orderId:y.pageData.id,orderNo:d,tenantId:9991000007}).then((({code:e,data:n})=>{"10000"===e&&t.go(-1)}))};return q((()=>{Q({orderNo:d,saleUserId:p,tenantId:v}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(y.pageData,t)}));const{insurerCode:e,id:t,objectType:n,productCategory:o}=a;N({insurerCode:e,id:t,objectType:n,productCategory:o,orderNo:d,tenantId:v}).then((({code:e,data:t})=>{"10000"===e&&(y.currentQuestionInfo=t)}))})),(e,t)=>{var n,o;return u(),c("div",ae,[b(h)?(u(),l(z,{key:0,"current-page-info":b(y).currentQuestionInfo,onOnSubmitCurrentStatus:I},null,8,["current-page-info"])):g("",!0),b(S)?(u(),l(B,{key:1,"current-page-info":b(y).currentQuestionInfo,onOnSubmitCurrentStatus:I},null,8,["current-page-info"])):g("",!0),b(C)?(u(),l(K,{key:2,url:null===(n=b(y).currentQuestionInfo[0])||void 0===n?void 0:n.content,onOnSubmitCurrentStatus:I},null,8,["url"])):g("",!0),b(k)?(u(),l(oe,{key:3,url:null===(o=b(y).currentQuestionInfo[0])||void 0===o?void 0:o.content,onOnSubmitCurrentStatus:I},null,8,["url"])):g("",!0)])}}}))}}}))}();
