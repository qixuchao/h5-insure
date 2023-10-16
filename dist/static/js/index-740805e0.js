import{d as l,a4 as e,a5 as a,t,j as s,k as n,d6 as i,o as r,m as u,bN as o,u as c,w as d,a as v,c as _,F as C,q as m,d3 as p,b as A,V as f,f as E,g as L,I,ae as y}from"./index-3fe09367.js";import{C as b}from"./infoCollection-d02e7991.js";const k={class:"spec"},O={class:"rich-text"},S={key:1,class:"spec"},x={class:"rich-text"},T={key:1,class:"spec"},M={class:"rich-text"},h=l({name:"ScrollInfo"}),g=l({...h,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:h}){const g=l,F=e((()=>a((()=>import("./index-3fe09367.js").then((function(l){return l.dX}))),["static/js/index-3fe09367.js","static/css/index-b5404890.css"])));e((()=>a((()=>import("./index-37892b1f.js")),["static/js/index-37892b1f.js","static/css/index-c0276d05.css","static/js/index-3fe09367.js","static/css/index-b5404890.css"])));const R=e((()=>a((()=>import("./index-3fe09367.js").then((function(l){return l.dV}))),["static/js/index-3fe09367.js","static/css/index-b5404890.css"]))),P=e((()=>a((()=>import("./index-1b6345e5.js")),["static/js/index-1b6345e5.js","static/css/index-7b3feb06.css","static/js/index-3fe09367.js","static/css/index-b5404890.css"]))),W=e((()=>a((()=>import("./index-8a1c1b66.js")),["static/js/index-8a1c1b66.js","static/css/index-194b9c66.css","static/js/index-3fe09367.js","static/css/index-b5404890.css","static/js/index-8197291d.js"]))),{dataSource:D}=t(g),N=s(),j=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),V=n((()=>{var l,e;return null==(e=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:e.length})),U=n((()=>{var l,e,a,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(e=D.value.CLAIM_FLOW)?void 0:e.processContent)||s===b.IMAGE&&(null==(t=null==(a=D.value.CLAIM_FLOW)?void 0:a.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,e,a,t,s;const n=null==(e=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:e.claimCaseType;return!!(n===b.WORD&&(null==(a=D.value.CLAIM_CASE)?void 0:a.claimContent)||n===b.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),z=n((()=>{var l,e;return null==(e=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:e.noticeContent})),Q=n((()=>{var l,e;return null==(e=null==(l=D.value)?void 0:l.FAQ)?void 0:e.length})),G=n((()=>{let l=[...j.value];return V.value||(l=l.filter((l=>"tab1"!==l.slotName))),U.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return h({handleClickTab:()=>{var l;return null==(l=N.value)?void 0:l.handleClickTab}}),(l,e)=>{const a=I,t=y,s=i("dompurify-html");return r(),u(c(F),{ref_key:"scrollRef",ref:N,class:"tabs",list:c(G),sticky:"",scrollspy:""},o({tab3:d((()=>[L(l.$slots,"form")])),_:2},[c(V)?{name:"tab1",fn:d((()=>{var l;return[v("div",k,[(r(!0),_(C,null,m((null==(l=c(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,e)=>(r(),u(p,{key:e},{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>[(r(),u(a,{key:e,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(c(R))])]})),key:"0"}:void 0,c(U)||c(w)||c(z)||c(Q)?{name:"tab2",fn:d((()=>{var l,e;return[c(U)?(r(),_(C,{key:0},[(null==(l=c(D).CLAIM_FLOW)?void 0:l.processCaseType)===c(b).WORD?(r(),u(c(P),{key:0,class:"tab-card",title:"理赔说明"},{default:d((()=>{var l;return[f(v("div",O,null,512),[[s,null==(l=c(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",S,[(r(),u(p,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,m((null==(l=c(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,e)=>(r(),u(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(R))],64)):E("",!0),c(w)?(r(),_(C,{key:1},[(null==(e=c(D).CLAIM_CASE)?void 0:e.claimCaseType)===c(b).WORD?(r(),u(c(P),{key:0,class:"tab-card",title:"理赔案例"},{default:d((()=>{var l;return[f(v("div",x,null,512),[[s,null==(l=c(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",T,[(r(),u(p,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,m((null==(l=c(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,e)=>(r(),u(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(R))],64)):E("",!0),c(z)?(r(),_(C,{key:2},[A(c(P),{class:"tab-card",title:"投保须知"},{default:d((()=>{var l;return[f(v("div",M,null,512),[[s,null==(l=c(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(c(R))],64)):E("",!0),c(Q)?(r(),_(C,{key:3},[A(c(P),{title:"常见问题"},{default:d((()=>{var l,e;return[A(c(W),{list:null==(e=null==(l=c(D).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}),A(c(R))],64)):E("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{g as default};
