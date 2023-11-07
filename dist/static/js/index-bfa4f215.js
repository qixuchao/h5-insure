import{d as l,a4 as e,a5 as a,t,j as s,k as n,dn as i,o as r,m as u,bP as o,u as c,w as d,a as v,c as _,F as C,q as m,du as p,b as A,V as f,f as E,g as L,I,ae as y}from"./index-8120d8cf.js";import{C as k}from"./infoCollection-d8c37848.js";const b={class:"spec"},O={class:"rich-text"},S={key:1,class:"spec"},x={class:"rich-text"},T={key:1,class:"spec"},M={class:"rich-text"},h=l({name:"ScrollInfo"}),g=l({...h,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:h}){const g=l,F=e((()=>a((()=>import("./index-8120d8cf.js").then((function(l){return l.ek}))),["static/js/index-8120d8cf.js","static/css/index-f1c5cfcb.css"])));e((()=>a((()=>import("./index-037981d4.js")),["static/js/index-037981d4.js","static/css/index-c0276d05.css","static/js/index-8120d8cf.js","static/css/index-f1c5cfcb.css"])));const P=e((()=>a((()=>import("./index-8120d8cf.js").then((function(l){return l.ei}))),["static/js/index-8120d8cf.js","static/css/index-f1c5cfcb.css"]))),R=e((()=>a((()=>import("./index-6ee87831.js")),["static/js/index-6ee87831.js","static/css/index-7b3feb06.css","static/js/index-8120d8cf.js","static/css/index-f1c5cfcb.css"]))),W=e((()=>a((()=>import("./index-ca085379.js")),["static/js/index-ca085379.js","static/css/index-194b9c66.css","static/js/index-8120d8cf.js","static/css/index-f1c5cfcb.css","static/js/index-cbc20c9b.js"]))),{dataSource:D}=t(g),j=s(),N=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),U=n((()=>{var l,e;return null==(e=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:e.length})),V=n((()=>{var l,e,a,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===k.WORD&&(null==(e=D.value.CLAIM_FLOW)?void 0:e.processContent)||s===k.IMAGE&&(null==(t=null==(a=D.value.CLAIM_FLOW)?void 0:a.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,e,a,t,s;const n=null==(e=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:e.claimCaseType;return!!(n===k.WORD&&(null==(a=D.value.CLAIM_CASE)?void 0:a.claimContent)||n===k.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),z=n((()=>{var l,e;return null==(e=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:e.noticeContent})),Q=n((()=>{var l,e;return null==(e=null==(l=D.value)?void 0:l.FAQ)?void 0:e.length})),G=n((()=>{let l=[...N.value];return U.value||(l=l.filter((l=>"tab1"!==l.slotName))),V.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return h({handleClickTab:()=>{var l;return null==(l=j.value)?void 0:l.handleClickTab}}),(l,e)=>{const a=I,t=y,s=i("dompurify-html");return r(),u(c(F),{ref_key:"scrollRef",ref:j,class:"tabs",list:c(G),sticky:"",scrollspy:""},o({tab3:d((()=>[L(l.$slots,"form")])),_:2},[c(U)?{name:"tab1",fn:d((()=>{var l;return[v("div",b,[(r(!0),_(C,null,m((null==(l=c(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,e)=>(r(),u(p,{key:e},{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>[(r(),u(a,{key:e,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(c(P))])]})),key:"0"}:void 0,c(V)||c(w)||c(z)||c(Q)?{name:"tab2",fn:d((()=>{var l,e;return[c(V)?(r(),_(C,{key:0},[(null==(l=c(D).CLAIM_FLOW)?void 0:l.processCaseType)===c(k).WORD?(r(),u(c(R),{key:0,class:"tab-card",title:"理赔说明"},{default:d((()=>{var l;return[f(v("div",O,null,512),[[s,null==(l=c(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",S,[(r(),u(p,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,m((null==(l=c(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,e)=>(r(),u(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(P))],64)):E("",!0),c(w)?(r(),_(C,{key:1},[(null==(e=c(D).CLAIM_CASE)?void 0:e.claimCaseType)===c(k).WORD?(r(),u(c(R),{key:0,class:"tab-card",title:"理赔案例"},{default:d((()=>{var l;return[f(v("div",x,null,512),[[s,null==(l=c(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",T,[(r(),u(p,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,m((null==(l=c(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,e)=>(r(),u(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(P))],64)):E("",!0),c(z)?(r(),_(C,{key:2},[A(c(R),{class:"tab-card",title:"投保须知"},{default:d((()=>{var l;return[f(v("div",M,null,512),[[s,null==(l=c(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(c(P))],64)):E("",!0),c(Q)?(r(),_(C,{key:3},[A(c(R),{title:"常见问题"},{default:d((()=>{var l,e;return[A(c(W),{list:null==(e=null==(l=c(D).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}),A(c(P))],64)):E("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{g as default};
