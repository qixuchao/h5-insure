import{G as e,d as a,r as l,R as t,a1 as n,c as s,A as i,f as o,g as u,i as r,h as c,aa as d,ab as v,L as p,Z as m,ac as A,ad as C,ae as f,U as _,V as y,F as k,E,e as g,j as L,af as b,w as h,a2 as I,ag as S,ah as w,ai as x,$ as O,W as T,aj as U,ak as F,al as M,am as R,X as P,Y as N,an as j,a6 as V,ao as B,ap as W,k as D}from"./index-abbaf02a.js";import{o as G}from"./utils-6c45c7a1.js";import{C as $}from"./infoCollection-90ebdeef.js";const Q={class:"com-video"},z=["src"],H=["src"];var q=e(a({__name:"Video",props:{src:null},setup(e){const a=e,v=l(!1),p=l("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASAQMAAAC+UBZMAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURf/////+/0xnxC0AAAArSURBVHjaFcSxEQAQEACwvFMofwylEdjsR0eRwCFS0jH+i6BoJalpEw/7u0clA1/PTeAgAAAAAElFTkSuQmCC");return t((()=>a),(e=>{p.value=`${window.location.origin}/api/app/common/file/generateLink?type=2&url=${e.src}`}),{deep:!0,immediate:!0}),n((()=>{})),(e,l)=>{const t=d;return s(),i("div",Q,[o("img",{src:u(p),class:"cover-image",onClick:l[0]||(l[0]=e=>v.value=!0)},null,8,z),r(t,{name:"play",class:"cover-image-play",onClick:l[1]||(l[1]=e=>v.value=!0)}),u(v)?(s(),i("video",{key:0,src:a.src,autoplay:"",controls:"",class:"banner-video",onEnded:l[2]||(l[2]=e=>v.value=!1)},null,40,H)):c("",!0)])}}}),[["__scopeId","data-v-38686bfe"]]);const K={class:"guarantee-list"},Y=(e=>(M("data-v-0d8cdcd6"),e=e(),R(),e))((()=>o("span",null,"保障计划",-1))),Z={key:0,class:"plan-list"},J=["onClick"],X={key:2,class:"feerate-view"},ee={key:0},ae={class:"extinfo-info-list"},le={class:"guarantee-detail"},te={class:"content"},ne=a({name:"guarantee"});var se=e(a({...ne,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:a}){var n,M;const R=e;v((e=>({"3f16335a":u(P)})));const P=l(""),N=l((null==(M=null==(n=R.planList)?void 0:n[0])?void 0:M.planCode)||void 0),j=l(),V=l([]),B=l([]),W=l(),D=p((()=>!!R.planList.length));t([()=>R.dataSource,()=>N.value],(()=>{var e,a;V.value=((null==(a=((null==(e=R.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===N.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${m.YES}`))}),{immediate:!0,deep:!0});const $=p((()=>{var e;return(null==(e=R.dataSource)?void 0:e.rateUri)||""})),Q=p((()=>!!(W.value&&W.value.paymentFrequencyValue&&W.value.premiumUnit&&$))),[z,H]=A(!1),q=p((()=>{var e;return!(!V.value||!(null==(e=V.value)?void 0:e.length))&&(V.value.length>R.count&&(!!R.isShowClose||!z.value))})),ne=()=>{H()},se=p((()=>{var e;return V.value&&(null==(e=V.value)?void 0:e.length)?V.value.length<=R.count||z.value?V.value:V.value.slice(0,R.count):[]})),ie=l(!1),oe=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(w()?x("",a.target.href):window.open(a.target.href))},ue=()=>{ie.value=!0,O((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",oe,!1)}))};C((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",oe,!1)}));const re=()=>{G({fileType:"pdf",fileUri:$.value})},ce=e=>{N.value=R.planList[e.name].planCode};return(l,t)=>{var n,v;const p=T,m=U,A=F,C=f("dompurify-html");return s(),i(_,null,[o("div",K,[o("div",{class:"header"},[Y,o("span",{onClick:ue},"查看详情")]),u(D)?(s(),i("div",Z,[(s(!0),i(_,null,y(e.planList,((e,l)=>(s(),i("div",{key:`${e.planCode}_${l}`,class:k("plan-list-item "+(e.planCode===u(N)?"plan-list-item-active":"")),onClick:l=>{return t=e.planCode,N.value=t,j.value=R.planList.findIndex((e=>e.planCode===t)),void a("updateActivePlan",t);var t}},[o("span",null,E(e.planName),1)],10,J)))),128))])):c("",!0),(s(!0),i(_,null,y(u(se),((e,a)=>(s(),g(p,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),u(q)?(s(),i("div",{key:1,class:"show-more",onClick:ne},[L(E(u(z)?"收起":"查看更多")+" ",1),r(d,{name:"arrow-down-dobule",class:k(["icon",{showMore:u(z)}])},null,8,["class"])])):c("",!0),u(Q)?(s(),i("div",X,[o("span",null,E(`${(null==(n=u(W))?void 0:n.paymentFrequencyValue)||""}${(null==(v=u(W))?void 0:v.premiumUnit)||""}`),1),u($)?(s(),i("span",{key:0,onClick:re},"查看保费")):c("",!0)])):c("",!0)]),r(b),r(A,{show:u(ie),"onUpdate:show":t[1]||(t[1]=e=>I(ie)?ie.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:h((()=>[u(B)&&u(B).length>0?(s(),i("div",ee,[o("div",ae,[(s(!0),i(_,null,y(u(B),((e,a)=>(s(),g(p,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),r(b)])):c("",!0),u(D)?(s(),g(m,{key:1,active:u(j),"onUpdate:active":t[0]||(t[0]=e=>I(j)?j.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:ce},null,8,["active","list"])):c("",!0),o("div",le,[(s(!0),i(_,null,y(u(V),((e,a)=>(s(),i("div",{key:a,class:"guarantee-item"},[r(p,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),S(o("div",te,null,512),[[C,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-0d8cdcd6"]]);const ie={class:"spec"},oe={class:"rich-text"},ue={key:1,class:"spec"},re={class:"rich-text"},ce={key:1,class:"spec"},de={class:"rich-text"},ve=a({name:"ScrollInfo"}),pe=a({...ve,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(e,{expose:a}){const t=e,n=P((()=>N((()=>import("./index-abbaf02a.js").then((function(e){return e.cO}))),["static/js/index-abbaf02a.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"])));P((()=>N((()=>import("./index-f9fcfb15.js")),["static/js/index-f9fcfb15.js","static/css/index-f22f2764.css","static/js/index-abbaf02a.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"])));const v=P((()=>N((()=>import("./index-abbaf02a.js").then((function(e){return e.cM}))),["static/js/index-abbaf02a.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),m=P((()=>N((()=>import("./index-9f5ab1fe.js")),["static/js/index-9f5ab1fe.js","static/css/index-7b3feb06.css","static/js/index-abbaf02a.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),A=P((()=>N((()=>import("./index-8186a56d.js")),["static/js/index-8186a56d.js","static/css/index-194b9c66.css","static/js/index-abbaf02a.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/index-164c80d3.js"]))),{dataSource:C}=j(t),k=l(),E=l([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),L=p((()=>{var e,a;return null==(a=null==(e=C.value.SPECIAL_FEATURE)?void 0:e.spec)?void 0:a.length})),b=p((()=>{var e,a,l,t;const n=null==(e=C.value.CLAIM_FLOW)?void 0:e.processCaseType;return!!(n===$.WORD&&(null==(a=C.value.CLAIM_FLOW)?void 0:a.processContent)||n===$.IMAGE&&(null==(t=null==(l=C.value.CLAIM_FLOW)?void 0:l.processCasePicList)?void 0:t.length))})),I=p((()=>{var e,a,l,t,n;const s=null==(a=null==(e=C.value)?void 0:e.CLAIM_CASE)?void 0:a.claimCaseType;return!!(s===$.WORD&&(null==(l=C.value.CLAIM_CASE)?void 0:l.claimContent)||s===$.IMAGE&&(null==(n=null==(t=C.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:n.length))})),w=p((()=>{var e,a;return null==(a=null==(e=C.value)?void 0:e.ISSUE_NOTICE)?void 0:a.noticeContent})),x=p((()=>{var e,a;return null==(a=null==(e=C.value)?void 0:e.FAQ)?void 0:a.length})),O=p((()=>{let e=[...E.value];return L.value||(e=e.filter((e=>"tab1"!==e.slotName))),b.value||I.value||(e=e.filter((e=>"tab2"!==e.slotName))),e}));return a({handleClickTab:()=>{var e;return null==(e=k.value)?void 0:e.handleClickTab}}),(e,a)=>{const l=V,t=d,p=f("dompurify-html");return s(),g(u(n),{ref_key:"scrollRef",ref:k,class:"tabs",list:u(O),sticky:"",scrollspy:""},B({tab3:h((()=>[D(e.$slots,"form")])),_:2},[u(L)?{name:"tab1",fn:h((()=>{var e;return[o("div",ie,[(s(!0),i(_,null,y((null==(e=u(C).SPECIAL_FEATURE)?void 0:e.spec)||[],((e,a)=>(s(),g(W,{key:a},{fallback:h((()=>[r(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:h((()=>[(s(),g(l,{key:a,class:"detail-img",width:"100%",src:e},null,8,["src"]))])),_:2},1024)))),128)),r(u(v))])]})),key:"0"}:void 0,u(b)||u(I)||u(w)||u(x)?{name:"tab2",fn:h((()=>{var e,a;return[u(b)?(s(),i(_,{key:0},[(null==(e=u(C).CLAIM_FLOW)?void 0:e.processCaseType)===u($).WORD?(s(),g(u(m),{key:0,class:"tab-card",title:"理赔说明"},{default:h((()=>{var e;return[S(o("div",oe,null,512),[[p,null==(e=u(C).CLAIM_FLOW)?void 0:e.processContent]])]})),_:1})):(s(),i("div",ue,[(s(),g(W,null,{fallback:h((()=>[r(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:h((()=>{var e;return[(s(!0),i(_,null,y((null==(e=u(C).CLAIM_FLOW)?void 0:e.processCasePicList)||[],((e,a)=>(s(),g(l,{key:a,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),r(u(v))],64)):c("",!0),u(I)?(s(),i(_,{key:1},[(null==(a=u(C).CLAIM_CASE)?void 0:a.claimCaseType)===u($).WORD?(s(),g(u(m),{key:0,class:"tab-card",title:"理赔案例"},{default:h((()=>{var e;return[S(o("div",re,null,512),[[p,null==(e=u(C).CLAIM_CASE)?void 0:e.claimContent]])]})),_:1})):(s(),i("div",ce,[(s(),g(W,null,{fallback:h((()=>[r(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:h((()=>{var e;return[(s(!0),i(_,null,y((null==(e=u(C).CLAIM_CASE)?void 0:e.claimCasePicList)||[],((e,a)=>(s(),g(l,{key:a,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),r(u(v))],64)):c("",!0),u(w)?(s(),i(_,{key:2},[r(u(m),{class:"tab-card",title:"投保须知"},{default:h((()=>{var e;return[S(o("div",de,null,512),[[p,null==(e=u(C).ISSUE_NOTICE)?void 0:e.noticeContent]])]})),_:1}),r(u(v))],64)):c("",!0),u(x)?(s(),i(_,{key:3},[r(u(m),{title:"常见问题"},{default:h((()=>{var e,a;return[r(u(A),{list:null==(a=null==(e=u(C).FAQ)?void 0:e[0])?void 0:a.data},null,8,["list"])]})),_:1}),r(u(v))],64)):c("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{se as G,q as V,pe as _};
