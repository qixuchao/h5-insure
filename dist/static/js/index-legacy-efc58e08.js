!function(){var e=document.createElement("style");e.innerHTML=".page-question-notice[data-v-89a99994]{background:#f2f5fc}.page-question-notice[data-v-89a99994] .com-card:last-child{margin-bottom:2rem}.page-question-notice .van-cell[data-v-89a99994]{display:flex;align-items:center}.page-question-notice .van-cell[data-v-89a99994] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.56rem}.page-question-notice .van-cell[data-v-89a99994] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-question-notice[data-v-89a99994] .is-active .van-cell__value span{color:#0d6efe}.content[data-v-89a99994]{display:flex;padding:.98667rem 0 .66667rem}.content .bx[data-v-89a99994]{display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1}.content .bx .txt[data-v-89a99994]{font-size:.34667rem;font-weight:500;color:#343434;margin-top:.18667rem}.content .bx .wechat[data-v-89a99994]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#00bc70;border-radius:50%}.content .bx .wechat img[data-v-89a99994]{width:.72rem;height:.58667rem}.content .bx .friend[data-v-89a99994]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#f2f7f8;border-radius:50%}.content .bx .friend img[data-v-89a99994]{width:.64rem;height:.64rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-b51aec28.js","./inform-legacy-b2b93a26.js","./index-legacy-96c45d53.js","./notice-legacy-95c31078.js","./useStorage-legacy-654155fa.js","./verify-legacy-718a1836.js"],(function(e){"use strict";var t,a,n,i,o,l,c,r,s,d,u,g,v,f,p,m,y,h,C,b,k,x,j,q,T,_,I,P,D;return{setters:[function(e){t=e.g,a=e.a9,n=e.O,i=e.E,o=e.h,l=e.r,c=e.j,r=e.k,s=e.m,d=e.p,u=e.n,g=e.G,v=e.A,f=e.F,p=e.z,m=e.C,y=e.T,h=e.L},function(e){C=e.l},function(e){b=e._,k=e.r,x=e.n,j=e.P},function(e){q=e.Q,T=e.a,_=e.I,I=e.H},function(e){P=e.s},function(e){D=e.g}],execute:function(){const N={class:"footer-button"},w=m("下一步");e("default",b(t({setup(e){const t=a(),m=n(),{productCode:b="MMBBSF",agentCode:S="65434444",tenantId:F=9991000007,agencyCode:z="3311222",insurerCode:A="zhongan",productCategory:O=1,templateId:$=1,orderNo:L="2022080217103534947"}=m.query,M=i([]),B=i({});i(!1);const E=i([]),H=i([]),R=e=>M.value.filter((t=>t.objectType===e)),G=e=>{var a;P.set("questionData",e),t.push({path:"/healthNotice",query:{materialType:null!=e&&e.materialSource?"product":"question",questionnaireType:null!=e&&e.materialSource?1:e.questionnaireType,orderId:null===(a=B.value)||void 0===a?void 0:a.id,...m.query}})},Q=()=>{[...E.value,...H.value,...M.value].every((e=>1===e.isDone))?(Object.assign(B.value,{pageCode:"questionNotice",tenantOrderNoticeList:M.value}),x({...B.value,extInfo:{...B.value.extInfo,pageCode:"questionNotice"},venderCode:A}).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&t.push({path:j[a.pageAction.data.nextPageCode],query:m.query})}))):y("请完成所有告知进行下一步")};return o((()=>{(()=>{const e={insurerCode:A,orderNo:L,productCategory:O,tenantId:F};Promise.all([C({...e,noticeType:4,objectType:1}),C({...e,noticeType:5,objectType:2})]).then((([{code:e,data:t},{code:a,data:n}])=>{"10000"===e&&"10000"===a&&(M.value=[...t,...n])}))})(),(()=>{const e={orderNo:L,productCode:b,tenantId:F,objectType:I};D({...e}).then((({code:e,data:t})=>{"10000"===e&&(H.value=t||[])})),D({...e,objectType:_}).then((({code:e,data:t})=>{"10000"===e&&(E.value=t||[])}))})(),k({orderNo:L,saleUserId:S,tenantId:F}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(B.value,t)}))})),(e,t)=>{const a=l("van-cell"),n=l("ProCard"),i=l("van-button"),o=l("ProPageWrap");return c(),r(o,{class:"page-question-notice"},{default:s((()=>[d(n,{title:"投保人"},{default:s((()=>[(c(!0),u(f,null,g(R(v(q)),(e=>(c(),r(a,{key:e.id,class:h({"is-active":e.isDone===v(T)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===v(q)?"已完成":"去完成"),onClick:t=>G(e)},null,8,["class","title","value","onClick"])))),128)),(c(!0),u(f,null,g(H.value,(e=>(c(),r(a,{key:e.id,class:h({"is-active":e.isDone===v(T)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===v(q)?"已完成":"去完成"),onClick:t=>G(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),d(n,{title:"被保人"},{default:s((()=>[(c(!0),u(f,null,g(R(v(T)),(e=>(c(),r(a,{key:e.id,class:h({"is-active":e.isDone===v(T)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===v(q)?"已完成":"去完成"),onClick:t=>G(e)},null,8,["class","title","value","onClick"])))),128)),(c(!0),u(f,null,g(E.value,(e=>(c(),r(a,{key:e.id,class:h({"is-active":e.isDone===v(T)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===v(q)?"已完成":"去完成"),onClick:t=>G(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),p("div",N,[d(i,{type:"primary",onClick:Q},{default:s((()=>[w])),_:1})])])),_:1})}}}),[["__scopeId","data-v-89a99994"]]))}}}))}();
