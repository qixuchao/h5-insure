!function(){var e=document.createElement("style");e.innerHTML=".page-question-notice[data-v-41cd2673]{background:var(--zaui-global-bg, #f2f5fc)}.page-question-notice[data-v-41cd2673] .com-card:last-child{margin-bottom:2rem}.page-question-notice .van-cell[data-v-41cd2673]{display:flex;align-items:center}.page-question-notice .van-cell[data-v-41cd2673] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.56rem}.page-question-notice .van-cell[data-v-41cd2673] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-question-notice[data-v-41cd2673] .is-active .van-cell__value span{color:var(--zaui-brand, #0d6efe)}.content[data-v-41cd2673]{display:flex;padding:.98667rem 0 .66667rem}.content .bx[data-v-41cd2673]{display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1}.content .bx .txt[data-v-41cd2673]{font-size:.34667rem;font-weight:500;color:#343434;margin-top:.18667rem}.content .bx .wechat[data-v-41cd2673]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#00bc70;border-radius:50%}.content .bx .wechat img[data-v-41cd2673]{width:.72rem;height:.58667rem}.content .bx .friend[data-v-41cd2673]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#f2f7f8;border-radius:50%}.content .bx .friend img[data-v-41cd2673]{width:.64rem;height:.64rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./inform-legacy-77a57720.js","./index-legacy-13de687e.js","./notice-legacy-fe9e1ef6.js","./useStorage-legacy-1fc06b57.js","./verify-legacy-9e1717ab.js"],(function(e){"use strict";var t,a,n,i,o,l,c,d,r,s,u,g,v,f,p,m,y,h,b,C,k,x,j,q,T,_,I,D,N,P,w;return{setters:[function(e){t=e.g,a=e.a9,n=e.O,i=e.E,o=e.h,l=e.r,c=e.j,d=e.k,r=e.m,s=e.p,u=e.n,g=e.G,v=e.L,f=e.A,p=e.F,m=e.z,y=e.C,h=e.T},function(e){b=e.l},function(e){C=e._,k=e.g,x=e.n,j=e.c},function(e){q=e.Q,T=e.a,_=e.I,I=e.H,D=e.b,N=e.c},function(e){P=e.s},function(e){w=e.g}],execute:function(){const S={class:"footer-button"},z=y("下一步");e("default",C(t({setup(e){const t=a(),y=n(),{productCode:C="MMBBSF",agentCode:F="65434444",tenantId:A=9991000007,agencyCode:O="3311222",insurerCode:$="zhongan",productCategory:L=1,templateId:M=1,orderNo:B="2022080217103534947"}=y.query,E=i([]),H=i({});i(!1);const R=i([]),G=i([]),Q=e=>E.value.filter((t=>t.objectType===e)),U=e=>{var a;P.set("questionData",e),t.push({path:"/healthNotice",query:{materialType:null!=e&&e.materialSource?"product":"question",questionnaireType:null!=e&&e.materialSource?1:e.questionnaireType,orderId:null===(a=H.value)||void 0===a?void 0:a.id,...y.query}})},W=()=>{[...R.value,...G.value,...E.value].every((e=>1===e.isDone))?(Object.assign(H.value,{pageCode:"questionNotice",tenantOrderNoticeList:E.value}),x({...H.value,extInfo:{...H.value.extInfo,pageCode:"questionNotice"},venderCode:$}).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&t.push({path:j[a.pageAction.data.nextPageCode],query:y.query})}))):h("请完成所有告知进行下一步")};return o((()=>{(()=>{const e={insurerCode:$,orderNo:B,productCategory:L,tenantId:A};Promise.all([b({...e,noticeType:I,objectType:D}),b({...e,noticeType:N,objectType:_})]).then((([{code:e,data:t},{code:a,data:n}])=>{"10000"===e&&"10000"===a&&(E.value=[...t,...n])}))})(),(()=>{const e={orderNo:B,productCode:C,tenantId:A,objectType:D};w({...e}).then((({code:e,data:t})=>{"10000"===e&&(G.value=t||[])})),w({...e,objectType:_}).then((({code:e,data:t})=>{"10000"===e&&(R.value=t||[])}))})(),k({orderNo:B,saleUserId:F,tenantId:A}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(H.value,t)}))})),(e,t)=>{const a=l("van-cell"),n=l("ProCard"),i=l("van-button"),o=l("ProPageWrap");return c(),d(o,{class:"page-question-notice"},{default:r((()=>[s(n,{title:"投保人"},{default:r((()=>[(c(!0),u(p,null,g(Q(f(T)),(e=>(c(),d(a,{key:e.id,class:v({"is-active":e.isDone===f(q)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===f(T)?"已完成":"去完成"),onClick:t=>U(e)},null,8,["class","title","value","onClick"])))),128)),(c(!0),u(p,null,g(G.value,(e=>(c(),d(a,{key:e.id,class:v({"is-active":e.isDone===f(q)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===f(T)?"已完成":"去完成"),onClick:t=>U(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),s(n,{title:"被保人"},{default:r((()=>[(c(!0),u(p,null,g(Q(f(q)),(e=>(c(),d(a,{key:e.id,class:v({"is-active":e.isDone===f(q)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===f(T)?"已完成":"去完成"),onClick:t=>U(e)},null,8,["class","title","value","onClick"])))),128)),(c(!0),u(p,null,g(R.value,(e=>(c(),d(a,{key:e.id,class:v({"is-active":e.isDone===f(q)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===f(T)?"已完成":"去完成"),onClick:t=>U(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),m("div",S,[s(i,{type:"primary",onClick:W},{default:r((()=>[z])),_:1})])])),_:1})}}}),[["__scopeId","data-v-41cd2673"]]))}}}))}();
