!function(){var e=document.createElement("style");e.innerHTML=".page-question-notice[data-v-946bddbc]{background:var(--zaui-global-bg, #f2f5fc)}.page-question-notice[data-v-946bddbc] .com-card:last-child{margin-bottom:2rem}.page-question-notice .van-cell[data-v-946bddbc]{display:flex;align-items:center}.page-question-notice .van-cell[data-v-946bddbc] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.56rem}.page-question-notice .van-cell[data-v-946bddbc] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-question-notice[data-v-946bddbc] .is-active .van-cell__value span{color:var(--zaui-brand, #0d6efe)}.content[data-v-946bddbc]{display:flex;padding:.98667rem 0 .66667rem}.content .bx[data-v-946bddbc]{display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1}.content .bx .txt[data-v-946bddbc]{font-size:.34667rem;font-weight:500;color:#343434;margin-top:.18667rem}.content .bx .wechat[data-v-946bddbc]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#00bc70;border-radius:50%}.content .bx .wechat img[data-v-946bddbc]{width:.72rem;height:.58667rem}.content .bx .friend[data-v-946bddbc]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#f2f7f8;border-radius:50%}.content .bx .friend img[data-v-946bddbc]{width:.64rem;height:.64rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-9974b414.js","./inform-legacy-24a61084.js","./index-legacy-dd101abb.js","./notice-legacy-fe9e1ef6.js","./useStorage-legacy-8b848512.js","./verify-legacy-a23a5fc6.js"],(function(e){"use strict";var t,a,n,i,o,l,c,d,r,s,u,g,v,b,f,p,m,y,h,C,k,q,x,j,T,_,N,I,P,D,w,S;return{setters:[function(e){t=e.h,a=e.aa,n=e.P,i=e.G,o=e.j,l=e.r,c=e.k,d=e.m,r=e.n,s=e.s,u=e.p,g=e.H,v=e.M,b=e.B,f=e.F,p=e.A,m=e.E,y=e.T},function(e){h=e.l},function(e){C=e._,k=e.g,q=e.n,x=e.N,j=e.b},function(e){T=e.Q,_=e.a,N=e.I,I=e.H,P=e.b,D=e.c},function(e){w=e.s},function(e){S=e.g}],execute:function(){const z={class:"footer-button"},F=m("下一步");e("default",C(t({setup(e){const t=a(),m=n(),{productCode:C="MMBBSF",agentCode:A="65434444",tenantId:M=9991000007,agencyCode:$="3311222",insurerCode:B="zhongan",productCategory:H=1,templateId:O=1,orderNo:E="2022080217103534947"}=m.query,L=i([]),R=i({});i(!1);const G=i([]),Q=i([]),U=e=>L.value.filter((t=>t.objectType===e)),W=e=>{var a;w.set("questionData",e),t.push({path:"/healthNotice",query:{materialType:null!=e&&e.materialSource?"product":"question",questionnaireType:null!=e&&e.materialSource?1:e.questionnaireType,orderId:null===(a=R.value)||void 0===a?void 0:a.id,...m.query}})},J=()=>{[...G.value,...Q.value,...L.value].every((e=>1===e.isDone))?(Object.assign(R.value,{pageCode:"questionNotice",tenantOrderNoticeList:L.value}),q({...R.value,extInfo:{...R.value.extInfo,pageCode:"questionNotice",buttonCode:x.questionNotice},venderCode:B}).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&t.push({path:j[a.pageAction.data.nextPageCode],query:m.query})}))):y("请完成所有告知进行下一步")};return o((()=>{(()=>{const e={insurerCode:B,orderNo:E,productCategory:H,tenantId:M};Promise.all([h({...e,noticeType:I,objectType:P}),h({...e,noticeType:D,objectType:N})]).then((([{code:e,data:t},{code:a,data:n}])=>{"10000"===e&&"10000"===a&&(L.value=[...t,...n])}))})(),(()=>{const e={orderNo:E,productCode:C,tenantId:M,objectType:P};S({...e}).then((({code:e,data:t})=>{"10000"===e&&(Q.value=t||[])})),S({...e,objectType:N}).then((({code:e,data:t})=>{"10000"===e&&(G.value=t||[])}))})(),k({orderNo:E,saleUserId:A,tenantId:M}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(R.value,t)}))})),(e,t)=>{const a=l("van-cell"),n=l("ProCard"),i=l("van-button"),o=l("ProPageWrap");return c(),d(o,{class:"page-question-notice"},{default:r((()=>[s(n,{title:"投保人"},{default:r((()=>[(c(!0),u(f,null,g(U(b(_)),(e=>(c(),d(a,{key:e.id,class:v({"is-active":e.isDone===b(T)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===b(_)?"已完成":"去完成"),onClick:t=>W(e)},null,8,["class","title","value","onClick"])))),128)),(c(!0),u(f,null,g(Q.value,(e=>(c(),d(a,{key:e.id,class:v({"is-active":e.isDone===b(T)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===b(_)?"已完成":"去完成"),onClick:t=>W(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),s(n,{title:"被保人"},{default:r((()=>[(c(!0),u(f,null,g(U(b(T)),(e=>(c(),d(a,{key:e.id,class:v({"is-active":e.isDone===b(T)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===b(_)?"已完成":"去完成"),onClick:t=>W(e)},null,8,["class","title","value","onClick"])))),128)),(c(!0),u(f,null,g(G.value,(e=>(c(),d(a,{key:e.id,class:v({"is-active":e.isDone===b(T)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===b(_)?"已完成":"去完成"),onClick:t=>W(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),p("div",z,[s(i,{type:"primary",onClick:J},{default:r((()=>[F])),_:1})])])),_:1})}}}),[["__scopeId","data-v-946bddbc"]]))}}}))}();
