!function(){var e=document.createElement("style");e.innerHTML=".page-question-notice[data-v-698a4f87]{background:var(--zaui-global-bg, #f2f5fc)}.page-question-notice[data-v-698a4f87] .com-card:last-child{margin-bottom:2rem}.page-question-notice .van-cell[data-v-698a4f87]{display:flex;align-items:center}.page-question-notice .van-cell[data-v-698a4f87] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.56rem}.page-question-notice .van-cell[data-v-698a4f87] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-question-notice[data-v-698a4f87] .is-active .van-cell__value span{color:var(--van-primary-color, var(--zaui-brand))}.content[data-v-698a4f87]{display:flex;padding:.98667rem 0 .66667rem}.content .bx[data-v-698a4f87]{display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1}.content .bx .txt[data-v-698a4f87]{font-size:.34667rem;font-weight:500;color:#343434;margin-top:.18667rem}.content .bx .wechat[data-v-698a4f87]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#00bc70;border-radius:50%}.content .bx .wechat img[data-v-698a4f87]{width:.72rem;height:.58667rem}.content .bx .friend[data-v-698a4f87]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#f2f7f8;border-radius:50%}.content .bx .friend img[data-v-698a4f87]{width:.64rem;height:.64rem}\n",document.head.appendChild(e),System.register(["./index-legacy-cb3bdc8a.js","./inform-legacy-db9a95ee.js","./notice-legacy-eefb6daa.js","./verify-legacy-0b957af1.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,a,n,i,o,l,c,r,d,s,u,f,g,v,p,m,y,h,b,C,k,x,q,j,_,T,N,I,w,D,P,S,z,F,M;return{setters:[function(e){t=e._,a=e.d,n=e.u,i=e.a,o=e.r,l=e.G,c=e.C,r=e.b,d=e.c,s=e.e,u=e.w,f=e.f,g=e.h,v=e.F,p=e.i,m=e.g,y=e.L,h=e.j,b=e.n,C=e.p,k=e.H,x=e.T,q=e.M,j=e.N,_=e.O,T=e.P,N=e.B},function(e){I=e.l},function(e){w=e.Q,D=e.a,P=e.H,S=e.b,z=e.I,F=e.c},function(e){M=e.g},function(){}],execute:function(){const O={class:"footer-button"};e("default",t(a({__name:"index",setup(e){const t=n(),a=i(),{productCode:$="MMBBSF",agentCode:A="65434444",tenantId:B=9991000007,agencyCode:H="3311222",insurerCode:L="zhongan",productCategory:R=1,templateId:E=1,orderNo:G="2022080217103534947"}=a.query,Q=o([]),U=o({});o(!1);const W=o([]),J=o([]),K=e=>Q.value.filter((t=>t.objectType===e)),V=e=>{var n;k.set("questionData",e),t.push({path:"/healthNotice",query:{materialType:null!=e&&e.materialSource?"product":"question",questionnaireType:null!=e&&e.materialSource?1:e.questionnaireType,orderId:null===(n=U.value)||void 0===n?void 0:n.id,...a.query}})},X=()=>{[...W.value,...J.value,...Q.value].every((e=>1===e.isDone))?(Object.assign(U.value,{pageCode:"questionNotice",tenantOrderNoticeList:Q.value}),q({...U.value,extInfo:{...U.value.extInfo,pageCode:"questionNotice",buttonCode:j.questionNotice},venderCode:L}).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&t.push({path:_[n.pageAction.data.nextPageCode],query:a.query})}))):x("请完成所有告知进行下一步")};return l((()=>{(()=>{const e={insurerCode:L,orderNo:G,productCategory:R,tenantId:B};Promise.all([I({...e,noticeType:P,objectType:S}),I({...e,noticeType:z,objectType:F})]).then((([{code:e,data:t},{code:a,data:n}])=>{"10000"===e&&"10000"===a&&(Q.value=[...t,...n])}))})(),(()=>{const e={orderNo:G,productCode:$,tenantId:B,objectType:S};M({...e}).then((({code:e,data:t})=>{"10000"===e&&(J.value=t||[])})),M({...e,objectType:F}).then((({code:e,data:t})=>{"10000"===e&&(W.value=t||[])}))})(),C({orderNo:G,saleUserId:A,tenantId:B}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(U.value,t)}))})),(e,t)=>{const a=c,n=T,i=N,o=r("ProPageWrap");return d(),s(o,{class:"page-question-notice"},{default:u((()=>[f(n,{title:"投保人"},{default:u((()=>[(d(!0),g(v,null,p(K(m(w)),(e=>(d(),s(a,{key:e.id,class:y({"is-active":e.isDone===m(D)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===m(w)?"已完成":"去完成"),onClick:t=>V(e)},null,8,["class","title","value","onClick"])))),128)),(d(!0),g(v,null,p(m(J),(e=>(d(),s(a,{key:e.id,class:y({"is-active":e.isDone===m(D)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===m(w)?"已完成":"去完成"),onClick:t=>V(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),f(n,{title:"被保人"},{default:u((()=>[(d(!0),g(v,null,p(K(m(D)),(e=>(d(),s(a,{key:e.id,class:y({"is-active":e.isDone===m(D)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===m(w)?"已完成":"去完成"),onClick:t=>V(e)},null,8,["class","title","value","onClick"])))),128)),(d(!0),g(v,null,p(m(W),(e=>(d(),s(a,{key:e.id,class:y({"is-active":e.isDone===m(D)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===m(w)?"已完成":"去完成"),onClick:t=>V(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),h("div",O,[f(i,{type:"primary",onClick:X},{default:u((()=>[b("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-698a4f87"]]))}}}))}();
