!function(){var e=document.createElement("style");e.innerHTML=".page-question-notice[data-v-25e63565]{background:#f2f5fc}.page-question-notice[data-v-25e63565] .com-card:last-child{margin-bottom:2rem}.page-question-notice .van-cell[data-v-25e63565]{display:flex;align-items:center}.page-question-notice .van-cell[data-v-25e63565] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.56rem}.page-question-notice .van-cell[data-v-25e63565] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-question-notice[data-v-25e63565] .is-active .van-cell__value span{color:#0d6efe}.content[data-v-25e63565]{display:flex;padding:.98667rem 0 .66667rem}.content .bx[data-v-25e63565]{display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1}.content .bx .txt[data-v-25e63565]{font-size:.34667rem;font-weight:500;color:#343434;margin-top:.18667rem}.content .bx .wechat[data-v-25e63565]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#00bc70;border-radius:50%}.content .bx .wechat img[data-v-25e63565]{width:.72rem;height:.58667rem}.content .bx .friend[data-v-25e63565]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#f2f7f8;border-radius:50%}.content .bx .friend img[data-v-25e63565]{width:.64rem;height:.64rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-dce51240.js","./inform-legacy-fada8768.js","./index-legacy-006fbe12.js","./index-legacy-274f6e79.js","./useStorage-legacy-741f3b94.js"],(function(e){"use strict";var t,n,a,i,o,l,c,r,d,s,u,g,f,v,p,m,y,h,C,b,x,q,j,k;return{setters:[function(e){t=e.g,n=e.aj,a=e.Q,i=e.E,o=e.h,l=e.r,c=e.j,r=e.k,d=e.m,s=e.n,u=e.G,g=e.F,f=e.t,v=e.z,p=e.p,m=e.C,y=e.T,h=e.L},function(e){C=e.l},function(e){b=e.a,x=e.n},function(e){q=e._,j=e.P},function(e){k=e.s}],execute:function(){const _={class:"footer-button"},P=m("下一步");e("default",q(t({setup(e){const t=n(),m=a(),{productCode:q="MMBBSF",agentCode:T="65434444",tenantId:w=9991000007,agencyCode:I="3311222",insurerCode:N="zhongan",productCategory:S=1,templateId:D=1,orderNo:F="2022080217103534947"}=m.query,z=i([]),A=i({});i(!1);const L=e=>z.value.filter((t=>t.objectType===e)),M=e=>{var n;k.set("questionData",e),t.push({path:"/healthNotice",query:{questionnaireType:e.questionnaireType,orderId:null===(n=A.value)||void 0===n?void 0:n.id,...m.query}})},O=()=>{z.value.every((e=>1===e.isDone))?(Object.assign(A.value,{pageCode:"questionNotice",tenantOrderNoticeList:z.value}),x({...A.value,extInfo:{...A.value.extInfo,pageCode:"questionNotice"},venderCode:N}).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&t.push({path:j[n.pageAction.data.nextPageCode],query:m.query})}))):y("请完成所有告知进行下一步")};return o((()=>{(()=>{const e={insurerCode:N,orderNo:F,productCategory:S,tenantId:w};Promise.all([C({...e,noticeType:4,objectType:1}),C({...e,noticeType:5,objectType:2})]).then((([{code:e,data:t},{code:n,data:a}])=>{"10000"===e&&"10000"===n&&(z.value=[...t,...a])}))})(),b({orderNo:F,saleUserId:T,tenantId:w}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(A.value,t)}))})),(e,t)=>{const n=l("van-cell"),a=l("ProCard"),i=l("van-button"),o=l("ProPageWrap");return c(),r(o,{class:"page-question-notice"},{default:d((()=>[L(1).length>0?(c(),r(a,{key:0,title:"投保人"},{default:d((()=>[(c(!0),s(g,null,u(L(1),(e=>(c(),r(n,{key:e.id,class:h({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>M(e)},null,8,["class","title","value","onClick"])))),128))])),_:1})):f("",!0),L(2).length>0?(c(),r(a,{key:1,title:"被保人"},{default:d((()=>[(c(!0),s(g,null,u(L(2),(e=>(c(),r(n,{key:e.id,class:h({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>M(e)},null,8,["class","title","value","onClick"])))),128))])),_:1})):f("",!0),v("div",_,[p(i,{type:"primary",onClick:O},{default:d((()=>[P])),_:1})])])),_:1})}}}),[["__scopeId","data-v-25e63565"]]))}}}))}();
