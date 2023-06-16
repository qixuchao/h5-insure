import{d as l,R as e,U as a,aA as t,r as s,L as n,cg as i,b as r,g as u,au as o,f as c,w as d,i as v,c as _,$ as C,a7 as m,cd as p,e as A,b2 as f,h as E,k as L,bU as I,a4 as b}from"./index-330ed3b8.js";import{C as y}from"./infoCollection-b30fe485.js";const k={class:"spec"},O={class:"rich-text"},S={key:1,class:"spec"},T={class:"rich-text"},x={key:1,class:"spec"},h={class:"rich-text"},M=l({name:"ScrollInfo"}),g=l({...M,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:M}){const g=l,R=e((()=>a((()=>import("./index-330ed3b8.js").then((function(l){return l.cV}))),["static/js/index-330ed3b8.js","static/css/index-9494d932.css"])));e((()=>a((()=>import("./index-171316f1.js")),["static/js/index-171316f1.js","static/css/index-f22f2764.css","static/js/index-330ed3b8.js","static/css/index-9494d932.css"])));const F=e((()=>a((()=>import("./index-330ed3b8.js").then((function(l){return l.cT}))),["static/js/index-330ed3b8.js","static/css/index-9494d932.css"]))),P=e((()=>a((()=>import("./index-ff8849d8.js")),["static/js/index-ff8849d8.js","static/css/index-7b3feb06.css","static/js/index-330ed3b8.js","static/css/index-9494d932.css"]))),W=e((()=>a((()=>import("./index-a7b5653d.js")),["static/js/index-a7b5653d.js","static/css/index-194b9c66.css","static/js/index-330ed3b8.js","static/css/index-9494d932.css","static/js/index-d9c6b505.js"]))),{dataSource:D}=t(g),N=s(),U=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),j=n((()=>{var l,e;return null==(e=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:e.length})),V=n((()=>{var l,e,a,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===y.WORD&&(null==(e=D.value.CLAIM_FLOW)?void 0:e.processContent)||s===y.IMAGE&&(null==(t=null==(a=D.value.CLAIM_FLOW)?void 0:a.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,e,a,t,s;const n=null==(e=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:e.claimCaseType;return!!(n===y.WORD&&(null==(a=D.value.CLAIM_CASE)?void 0:a.claimContent)||n===y.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),z=n((()=>{var l,e;return null==(e=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:e.noticeContent})),Q=n((()=>{var l,e;return null==(e=null==(l=D.value)?void 0:l.FAQ)?void 0:e.length})),G=n((()=>{let l=[...U.value];return j.value||(l=l.filter((l=>"tab1"!==l.slotName))),V.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return M({handleClickTab:()=>{var l;return null==(l=N.value)?void 0:l.handleClickTab}}),(l,e)=>{const a=I,t=b,s=i("dompurify-html");return r(),u(c(R),{ref_key:"scrollRef",ref:N,class:"tabs",list:c(G),sticky:"",scrollspy:""},o({tab3:d((()=>[L(l.$slots,"form")])),_:2},[c(j)?{name:"tab1",fn:d((()=>{var l;return[v("div",k,[(r(!0),_(C,null,m((null==(l=c(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,e)=>(r(),u(p,{key:e},{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>[(r(),u(a,{key:e,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(c(F))])]})),key:"0"}:void 0,c(V)||c(w)||c(z)||c(Q)?{name:"tab2",fn:d((()=>{var l,e;return[c(V)?(r(),_(C,{key:0},[(null==(l=c(D).CLAIM_FLOW)?void 0:l.processCaseType)===c(y).WORD?(r(),u(c(P),{key:0,class:"tab-card",title:"理赔说明"},{default:d((()=>{var l;return[f(v("div",O,null,512),[[s,null==(l=c(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",S,[(r(),u(p,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,m((null==(l=c(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,e)=>(r(),u(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(F))],64)):E("",!0),c(w)?(r(),_(C,{key:1},[(null==(e=c(D).CLAIM_CASE)?void 0:e.claimCaseType)===c(y).WORD?(r(),u(c(P),{key:0,class:"tab-card",title:"理赔案例"},{default:d((()=>{var l;return[f(v("div",T,null,512),[[s,null==(l=c(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",x,[(r(),u(p,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,m((null==(l=c(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,e)=>(r(),u(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(F))],64)):E("",!0),c(z)?(r(),_(C,{key:2},[A(c(P),{class:"tab-card",title:"投保须知"},{default:d((()=>{var l;return[f(v("div",h,null,512),[[s,null==(l=c(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(c(F))],64)):E("",!0),c(Q)?(r(),_(C,{key:3},[A(c(P),{title:"常见问题"},{default:d((()=>{var l,e;return[A(c(W),{list:null==(e=null==(l=c(D).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}),A(c(F))],64)):E("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{g as default};
