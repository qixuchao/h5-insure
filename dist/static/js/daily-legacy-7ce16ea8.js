!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-play-bar[data-v-781f304f]{margin-top:.26667rem;display:flex;align-items:center}.com-play-bar .voice[data-v-781f304f]{display:flex;min-width:1.73333rem;height:1.01333rem;line-height:1.01333rem;background:var(--voice-background);border-radius:.26667rem;font-size:.37333rem;color:var(--voice-text-color)}.com-play-bar .voice .voice-icon[data-v-781f304f]{margin-left:.4rem;margin-right:.13333rem}.com-play-bar .close-icon[data-v-781f304f]{font-size:.50667rem;margin-left:.34667rem;color:#e0e0e0}\n',document.head.appendChild(e),System.register(["./vendor-legacy-f56233fa.js","./play-legacy-eb74976c.js","./index-legacy-9604cbf9.js","./record-legacy-3e0564fe.js","./plugin-vue_export-helper-legacy-57eac467.js"],(function(e){"use strict";var t,a,i,r,o,c,l,n,s,d,y,u,p,v,f,m,g,h,b,C,k,w,S,B;return{setters:[function(e){t=e.g,a=e.Q,i=e.ag,r=e.a9,o=e.a4,c=e.k,l=e.m,n=e.y,s=e.n,d=e.z,y=e.B,u=e.I,p=e.A,v=e.a1,f=e.G,m=e.H},function(e){g=e.Z},function(e){h=e.f,b=e.b,C=e.a},function(e){k=e.b,w=e.v,S=e.p},function(e){B=e._}],execute:function(){const T={class:"com-play-bar"},j=["onClick"],x=t({props:{url:{type:String,default:"",require:!0},duration:{type:[Number,String],default:0,require:!0},watchToStop:{type:[Number,String,Object],default:""},showDelete:{type:Boolean,default:!1}},emits:["deleteClick"],setup(e,{emit:t}){const C=e,B=h(),x=a(),{playingUrl:I,playStatus:_}=i(B),P=()=>{"playing"===_.value&&I.value===C.url?w():S(C.url)},q=()=>{t("deleteClick")};return r((()=>{k()})),o(x,(()=>{k()})),o((()=>C.watchToStop),(()=>{k()})),(t,a)=>(c(),l("div",T,[n("div",{class:"voice",style:p({width:Number(e.duration)/60*100+"%"}),onClick:v(P,["stop"])},[s(g,{play:d(I)===e.url&&"playing"===d(_),class:"voice-icon"},null,8,["play"]),y(" "+u(e.duration)+'" ',1)],12,j),f(s(b,{name:"close",class:"close-icon",onClick:v(q,["stop"])},null,8,["onClick"]),[[m,e.showDelete]])]))}});e("Z",B(x,[["__scopeId","data-v-781f304f"]]));e("g",(e=>C.post("/activity/v1/daily/record/searchByPageWithPersonal",e))),e("a",(e=>C.post("/activity/v1/daily/record/searchByPageWithPeopleView",e))),e("b",(e=>C.post("/activity/v1/daily/record/searchByPageWithLogView",e))),e("s",(e=>C.post("/activity/v1/daily/record/saveOrUpdate",e))),e("d",(e=>C.get(`/activity/v1/daily/record/removeByDailyId?dailyId=${e}`))),e("q",(e=>C.post("/activity/v1/daily/record/findByCondition",e))),e("c",(()=>C.post("/activity/v1/querySingleList",{dictCode:"ACTIVITY_LOG_TAG"})))}}}))}();
