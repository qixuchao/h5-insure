!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.page-question-notice[data-v-0d6f9892]{background:#f2f5fc}.page-question-notice[data-v-0d6f9892] .com-card:last-child{margin-bottom:2rem}.page-question-notice .van-cell[data-v-0d6f9892]{display:flex;align-items:center}.page-question-notice .van-cell[data-v-0d6f9892] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.56rem}.page-question-notice .van-cell[data-v-0d6f9892] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-question-notice[data-v-0d6f9892] .is-active .van-cell__value span{color:#0d6efe}.content[data-v-0d6f9892]{display:flex;padding:.98667rem 0 .66667rem}.content .bx[data-v-0d6f9892]{display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1}.content .bx .txt[data-v-0d6f9892]{font-size:.34667rem;font-weight:500;color:#343434;margin-top:.18667rem}.content .bx .wechat[data-v-0d6f9892]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#00bc70;border-radius:50%}.content .bx .wechat img[data-v-0d6f9892]{width:.72rem;height:.58667rem}.content .bx .friend[data-v-0d6f9892]{display:flex;align-items:center;justify-content:center;width:1.38667rem;height:1.38667rem;background:#f2f7f8;border-radius:50%}.content .bx .friend img[data-v-0d6f9892]{width:.64rem;height:.64rem}\n',document.head.appendChild(e),System.register(["./pengyouquan-legacy-96912475.js","./vendor-legacy-6a0a73a6.js","./inform-legacy-c64c5460.js","./index-legacy-be44285a.js","./useStorage-legacy-93cc294b.js","./index-legacy-f03afd46.js"],(function(e){"use strict";var t,n,a,i,o,s,c,l,r,d,u,f,g,h,v,m,p,y,b,x,k,w,q,C,_,j,S,T;return{setters:[function(e){t=e._,n=e.a},function(e){a=e.g,i=e.ae,o=e.Q,s=e.L,c=e.M,l=e.r,r=e.h,d=e.m,u=e.n,f=e.k,g=e.j,h=e.F,v=e.E,m=e.s,p=e.y,y=e.z,b=e.B,x=e.a1,k=e.a2,w=e.w,q=e.T,C=e.J},function(e){_=e.l},function(e){j=e.a},function(e){S=e.s},function(e){T=e._}],execute:function(){const D=e=>(x("data-v-0d6f9892"),e=e(),k(),e),P={class:"footer-button"},F=b("分享"),N=b("下一步"),M={class:"content"},Q=[D((()=>p("div",{class:"wechat"},[p("img",{src:t,alt:""})],-1))),D((()=>p("div",{class:"txt"},"微信好友",-1)))],z={class:"bx"},I=[D((()=>p("img",{src:n,alt:""},null,-1)))],U=D((()=>p("div",{class:"txt"},"朋友圈",-1)));e("default",T(a({setup(e){const t=i(),n=o();n.query;const a=s({listQuestions:[],pageData:{},showShare:!1,tenantOrderNoticeList:[]}),b=e=>a.listQuestions.filter((t=>t.objectType===e)),x=e=>{const t={title:"告知书",desc:"客户告知书",link:`${window.location.href}?isShare=1`,imgUrl:"",success(){}};w.ready((()=>{"1"===e?w.onMenuShareAppMessage(t):w.onMenuShareTimeline(t)}))},k=e=>{S.set("questionData",e),t.push({path:"/healthNotice",query:{questionnaireType:e.questionnaireType}})},T=()=>{a.listQuestions.every((e=>1===e.isDone))?t.push({path:"/verify",query:n.query}):q("请完成所有告知进行下一步")};return c((()=>{(()=>{const e={insurerCode:"andainsurer",orderNo:"2022021815432987130620",productCategory:1,tenantId:9991000007};Promise.all([_({...e,noticeType:4,objectType:1}),_({...e,noticeType:5,objectType:2})]).then((([{code:e,data:t},{code:n,data:i}])=>{"10000"===e&&"10000"===n&&(a.listQuestions=[...t,...i])}))})(),j({orderNo:"2022021815432987130620",saleUserId:"D1234567-1",tenantId:"9991000007"}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(a.pageData,t)}))})),(e,t)=>{const n=l("van-cell"),i=l("ProCard"),o=l("van-button"),s=l("ZaPageWrap"),c=l("van-action-sheet");return r(),d(h,null,[u(s,{class:"page-question-notice"},{default:f((()=>[b(1).length>0?(r(),g(i,{key:0,title:"投保人"},{default:f((()=>[(r(!0),d(h,null,v(b(1),(e=>(r(),g(n,{key:e.id,class:C({"is-active":2===e.isDone}),title:`《${e.questionnaireName}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>k(e)},null,8,["class","title","value","onClick"])))),128))])),_:1})):m("",!0),b(2).length>0?(r(),g(i,{key:1,title:"被保人"},{default:f((()=>[(r(!0),d(h,null,v(b(2),(e=>(r(),g(n,{key:e.id,class:C({"is-active":2===e.isDone}),title:`《${e.questionnaireName}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>k(e)},null,8,["class","title","value","onClick"])))),128))])),_:1})):m("",!0),p("div",P,[u(o,{plain:"",type:"primary",onClick:t[0]||(t[0]=e=>y(a).showShare=!0)},{default:f((()=>[F])),_:1}),u(o,{type:"primary",onClick:T},{default:f((()=>[N])),_:1})])])),_:1}),u(c,{show:y(a).showShare,"onUpdate:show":t[3]||(t[3]=e=>y(a).showShare=e),"cancel-text":"取消","close-on-click-action":""},{default:f((()=>[p("div",M,[p("div",{class:"bx",onClick:t[1]||(t[1]=e=>x("1"))},Q),p("div",z,[p("div",{class:"friend",onClick:t[2]||(t[2]=e=>x("2"))},I),U])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-0d6f9892"]]))}}}))}();
