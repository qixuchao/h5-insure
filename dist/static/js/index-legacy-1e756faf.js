!function(){var e=document.createElement("style");e.innerHTML=".com-question[data-v-5d98a972] .body{background-color:var(--zaui-global-bg, #f2f5fc);padding:0!important;margin-bottom:1.6rem}.com-question[data-v-5d98a972] .body .com-radio-btn{justify-content:flex-start}.question-item[data-v-5d98a972]{background-color:#fff;margin-bottom:.26667rem;padding:0 .4rem}.question-item .problem[data-v-5d98a972]{min-height:1.41333rem;font-size:.4rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:1.41333rem}.com-document[data-v-6e53a5c6]{padding:0 .53333rem}.com-document .title[data-v-6e53a5c6]{font-size:.42667rem;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#393d46;line-height:.6rem;margin:.53333rem 0}.com-document .content[data-v-6e53a5c6]{font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.64rem;padding-bottom:2.66667rem}.com-pdf-viewer[data-v-573d8b28]{background-color:#f7f8fc;padding:.4rem .4rem 0}.com-pdf-viewer .pdf-wapper[data-v-573d8b28]{height:100vh;width:100%;overflow:auto;border-radius:.26667rem;margin-bottom:2rem}.pdf-viewer[data-v-573d8b28]{word-break:break-all}.pdf-viewer .title[data-v-573d8b28]{color:var(--van-primary-color)}.pdf-viewer .loading[data-v-573d8b28]{height:9.33333rem;display:flex;justify-content:center;align-items:center}.iframe-wrap iframe[data-v-1fc4d3ec]{width:100%;height:80vh}\n",document.head.appendChild(e),System.register(["./index-legacy-b3b7dca5.js","./pdfh5-legacy-9f98dc45.js","./inform-legacy-e80378d4.js","./notice-legacy-eefb6daa.js"],(function(e){"use strict";var t,n,o,r,a,i,l,u,d,s,c,m,p,f,v,g,y,b,C,S,h,I,k,_,w,q,T,P,j,Q,V,N,A,O,U,x,D,F,z,$,J,L,E,H;return{setters:[function(e){t=e._,n=e.d,o=e.u,r=e.a,a=e.r,i=e.o,l=e.b,u=e.c,d=e.e,s=e.w,c=e.f,m=e.P,p=e.g,f=e.h,v=e.F,g=e.i,y=e.j,b=e.t,C=e.k,S=e.l,h=e.m,I=e.n,k=e.T,_=e.p,w=e.R,q=e.C,T=e.q,P=e.s,j=e.v,Q=e.x,V=e.y,N=e.B,A=e.z,O=e.A,U=e.D,x=e.E,D=e.G,F=e.I,z=e.H,$=e.J},function(e){J=e.P},function(e){L=e.s,E=e.g},function(e){H=e.N}],execute:function(){const M={class:"problem"},R={class:"footer-button"};var W=t(n({__name:"question",props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;o();const A=r(),O=a([]),{questionnaireType:U}=A.query,{orderNo:x="2022021815432987130620",productCode:D="CQ75CQ76",templateId:F=1,agentCode:z="65434444",orderId:$=13005,tenantId:J=9991000007}=A.query,L={1:"投保人",2:"被保人",3:"代理人"},E=a([]),H=e=>e?JSON.parse(e).map((e=>({title:e.value,value:e.uid}))):[],W=()=>{(E.value||[]).filter((e=>{var t;return 0===e.singleAnswer||e.singleAnswer||(null===(t=e.multipleChoose)||void 0===t?void 0:t.length)})).length!==E.value.length?k("请完成所有题目进行下一步"):t("onSubmitCurrentStatus",1,JSON.stringify(E.value))},B=()=>{_({orderNo:x,saleUserId:z,tenantId:J}).then((({code:e,data:t})=>{if("10000"===e){const e=t.tenantOrderNoticeList.findIndex((e=>1===e.isDone&&+e.objectId===n.currentPageInfo[0].questionnaireId));E.value=-1!==e?(e=>JSON.parse(e))(t.tenantOrderNoticeList[e].content):n.currentPageInfo.map((e=>2===e.questionType?{multipleChoose:[],...e}:{singleAnswer:3===e.questionType?0:"",...e}))}}))};return i((()=>{O.value=[],B()})),(e,t)=>{const n=w,o=q,r=T,a=P,i=j,k=Q,_=V,A=N,x=l("ProPageWrap");return u(),d(x,{class:"com-question"},{default:s((()=>[c(m,{title:`${L[p(U)]}健康告知书`},{default:s((()=>[(u(!0),f(v,null,g(E.value,((e,l)=>(u(),f("div",{key:l,class:"question-item"},[y("div",M,b(l+1)+". "+b(e.title),1),1===e.questionType?(u(),d(a,{key:0,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t},{default:s((()=>[c(r,{inset:""},{default:s((()=>[(u(!0),f(v,null,g(H(e.options),((t,r)=>(u(),d(o,{key:r,title:t.title,clickable:"",onClick:t=>e.singleAnswer=r},{"right-icon":s((()=>[c(n,{name:r},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):C("",!0),2===e.questionType?(u(),d(k,{key:1,modelValue:e.multipleChoose,"onUpdate:modelValue":t=>e.multipleChoose=t},{default:s((()=>[c(r,{inset:""},{default:s((()=>[(u(!0),f(v,null,g(H(e.options),((e,n)=>(u(),d(o,{key:e.uid,clickable:"",title:e.title,onClick:e=>(e=>{O.value[e].toggle()})(n)},{"right-icon":s((()=>[c(i,{ref_for:!0,ref:e=>O.value[n]=e,shape:"square",name:n,onClick:t[0]||(t[0]=S((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):C("",!0),3===e.questionType?(u(),d(h,{key:2,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,options:[{label:"是",value:"Y"},{label:"否",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):C("",!0),4===e.questionType?(u(),d(r,{key:3,inset:""},{default:s((()=>[c(_,{modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):C("",!0)])))),128))])),_:1},8,["title"]),y("div",R,[c(A,{type:"primary",block:"",onClick:W},{default:s((()=>[I("提交")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-5d98a972"]]);const B={class:"com-document"},G={class:"title"},Y={class:"content"},K={class:"footer-button"};var X=t(n({__name:"InsuranceNotice",props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,o)=>{const r=N,a=l("ProPageWrap"),i=A("dompurify-html");return u(),d(a,null,{default:s((()=>{var e,a;return[y("div",B,[y("div",G,b(null===(e=n.currentPageInfo[0])||void 0===e?void 0:e.title),1),O(y("div",Y,null,512),[[i,null===(a=n.currentPageInfo[0])||void 0===a?void 0:a.content]]),y("div",K,[c(r,{type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",1))},{default:s((()=>[I("了解并继续")])),_:1})])])]})),_:1})}}}),[["__scopeId","data-v-6e53a5c6"]]);const Z={class:"com-pdf-viewer"},ee=["id","isee_pdf"],te={key:2,class:"footer-button"},ne={key:3,class:"footer-button"};var oe=t(n({__name:"file",props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e,o=U(),r=a(!1);a(!0);const i=a(null),l=x((()=>["png","jpg","jpeg"].some((e=>n.url.includes(e))))),m=async()=>{r.value=!0,setTimeout((()=>{(()=>{try{var e;i.value=new J(`#${o}`,{pdfurl:n.url,renderType:"canvas",lazy:!0}),null===(e=i.value)||void 0===e||e.on("complete",((e,t,n)=>{console.log(`状态：${e}，信息：${t}，耗时：${n}毫秒`),"error"===e&&k("文件损坏，无法打开！")}))}catch(t){console.log("error",t)}})()}),0)};return D((()=>{m()})),(e,r)=>{const a=F,i=N;return u(),f("div",Z,[p(l)?(u(),d(a,{key:0,width:"100%",height:"80vh",fit:"contain",src:n.url},null,8,["src"])):(u(),f("div",{key:1,id:p(o),isee_pdf:e.pdfUrl,class:"pdf-wapper"},null,8,ee)),"question"===n.materialType?(u(),f("div",te,[c(i,{plain:"",type:"primary",onClick:r[0]||(r[0]=e=>t("onSubmitCurrentStatus",2))},{default:s((()=>[I("部分为是")])),_:1}),c(i,{type:"primary",onClick:r[1]||(r[1]=e=>t("onSubmitCurrentStatus",1))},{default:s((()=>[I("以上皆否")])),_:1})])):(u(),f("div",ne,[c(i,{type:"primary",onClick:r[2]||(r[2]=e=>t("onSubmitCurrentStatus",1))},{default:s((()=>[I("了解并继续")])),_:1})]))])}}}),[["__scopeId","data-v-573d8b28"]]);const re={class:"iframe-wrap"},ae=["src"],ie={key:0,class:"footer-button"},le={key:1,class:"footer-button"};var ue=t(n({__name:"link",props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,o)=>{const r=N;return u(),f("div",re,[y("iframe",{src:n.url,frameborder:"0"},null,8,ae),"question"===n.materialType?(u(),f("div",ie,[c(r,{plain:"",type:"primary",onClick:o[0]||(o[0]=e=>t("onSubmitCurrentStatus",2))},{default:s((()=>[I("部分为是")])),_:1}),c(r,{type:"primary",onClick:o[1]||(o[1]=e=>t("onSubmitCurrentStatus",1))},{default:s((()=>[I("以上皆否")])),_:1})])):(u(),f("div",le,[c(r,{type:"primary",onClick:o[2]||(o[2]=e=>t("onSubmitCurrentStatus",1))},{default:s((()=>[I("了解并继续")])),_:1})]))])}}}),[["__scopeId","data-v-1fc4d3ec"]]);const de={class:"com-health-notice"};e("default",n({__name:"index",setup(e){const t=o(),n=r(),a=z.get("questionData"),{materialType:i="question",questionnaireType:l="1",orderNo:s="2022021815432987130620",productCode:c="CQ75CQ76",templateId:m=1,agentCode:v="65434444",orderId:g=13005,tenantId:y=9991000007}=n.query&&n.query,b=$({pageData:{},currentQuestionInfo:[]}),S=x((()=>"2"===l)),h=x((()=>{var e;return"1"===l&&([1].includes(null===(e=b.currentQuestionInfo[0])||void 0===e?void 0:e.textType)||1===(null==a?void 0:a.materialSource))})),I=x((()=>{var e;return"1"===l&&([2].includes(null===(e=b.currentQuestionInfo[0])||void 0===e?void 0:e.textType)||2===(null==a?void 0:a.materialSource))})),k=x((()=>{var e;return"1"===l&&([3].includes(null===(e=b.currentQuestionInfo[0])||void 0===e?void 0:e.textType)||3===(null==a?void 0:a.materialSource))})),w=(e,n)=>{var o;const{id:r,objectType:i,noticeObject:u,materialSource:d}=a;L({content:n||(null===(o=b.currentQuestionInfo[0])||void 0===o?void 0:o.content),contentType:l||"3",isDone:e,noticeType:H[i]||"99",objectId:r,objectType:i||u,orderId:b.pageData.id,orderNo:s,tenantId:y}).then((({code:e,data:n})=>{"10000"===e&&t.go(-1)}))};return D((()=>{_({orderNo:s,saleUserId:v,tenantId:y}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(b.pageData,t)})),null!=a&&a.materialSource?(b.currentQuestionInfo=[{...null==a?void 0:a.materialSource,title:null==a?void 0:a.materialName,content:null==a?void 0:a.materialContent}],console.log("===>",b.currentQuestionInfo)):(()=>{const{insurerCode:e,id:t,objectType:n,productCategory:o}=a;E({insurerCode:e,id:t,objectType:n,productCategory:o,orderNo:s,tenantId:y}).then((({code:e,data:t})=>{"10000"===e&&(b.currentQuestionInfo=t)}))})()})),(e,t)=>{var n,o;return u(),f("div",de,[p(S)?(u(),d(W,{key:0,"current-page-info":p(b).currentQuestionInfo,onOnSubmitCurrentStatus:w},null,8,["current-page-info"])):C("",!0),p(I)?(u(),d(X,{key:1,"material-type":p(i),"current-page-info":p(b).currentQuestionInfo,onOnSubmitCurrentStatus:w},null,8,["material-type","current-page-info"])):C("",!0),p(h)?(u(),d(oe,{key:2,"material-type":p(i),url:null===(n=p(b).currentQuestionInfo[0])||void 0===n?void 0:n.content,onOnSubmitCurrentStatus:w},null,8,["material-type","url"])):C("",!0),p(k)?(u(),d(ue,{key:3,"material-type":p(i),url:null===(o=p(b).currentQuestionInfo[0])||void 0===o?void 0:o.content,onOnSubmitCurrentStatus:w},null,8,["material-type","url"])):C("",!0)])}}}))}}}))}();
