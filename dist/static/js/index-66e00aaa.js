import{d as l,a4 as a,a5 as e,t,j as s,k as n,dz as i,o as r,p as u,bT as o,u as c,w as d,a as v,c as _,F as C,s as p,dF as m,b as f,V as A,f as E,g as L,I,af as y}from"./index-86787787.js";import{C as k}from"./infoCollection-df55a2f9.js";const b={class:"spec"},O={class:"rich-text"},S={key:1,class:"spec"},T={class:"rich-text"},x={key:1,class:"spec"},M={class:"rich-text"},h=l({name:"ScrollInfo"}),F=l({...h,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:h}){const F=l,g=a((()=>e((()=>import("./index-86787787.js").then((function(l){return l.er}))),["static/js/index-86787787.js","static/css/index-972c27e5.css"])));a((()=>e((()=>import("./index-0f4ce986.js")),["static/js/index-0f4ce986.js","static/css/index-c0276d05.css","static/js/index-86787787.js","static/css/index-972c27e5.css"])));const R=a((()=>e((()=>import("./index-86787787.js").then((function(l){return l.ep}))),["static/js/index-86787787.js","static/css/index-972c27e5.css"]))),P=a((()=>e((()=>import("./index-7a21b5f8.js")),["static/js/index-7a21b5f8.js","static/css/index-7b3feb06.css","static/js/index-86787787.js","static/css/index-972c27e5.css"]))),W=a((()=>e((()=>import("./index-8b7fc492.js")),["static/js/index-8b7fc492.js","static/css/index-194b9c66.css","static/js/index-86787787.js","static/css/index-972c27e5.css","static/js/index-45ed969e.js"]))),{dataSource:D}=t(F),j=s(),N=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),U=n((()=>{var l,a;return null==(a=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:a.length})),V=n((()=>{var l,a,e,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===k.WORD&&(null==(a=D.value.CLAIM_FLOW)?void 0:a.processContent)||s===k.IMAGE&&(null==(t=null==(e=D.value.CLAIM_FLOW)?void 0:e.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,a,e,t,s;const n=null==(a=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:a.claimCaseType;return!!(n===k.WORD&&(null==(e=D.value.CLAIM_CASE)?void 0:e.claimContent)||n===k.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),z=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:a.noticeContent})),Q=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.FAQ)?void 0:a.length})),G=n((()=>{let l=[...N.value];return U.value||(l=l.filter((l=>"tab1"!==l.slotName))),V.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return h({handleClickTab:()=>{var l;return null==(l=j.value)?void 0:l.handleClickTab}}),(l,a)=>{const e=I,t=y,s=i("dompurify-html");return r(),u(c(g),{ref_key:"scrollRef",ref:j,class:"tabs",list:c(G),sticky:"",scrollspy:""},o({tab3:d((()=>[L(l.$slots,"form")])),_:2},[c(U)?{name:"tab1",fn:d((()=>{var l;return[v("div",b,[(r(!0),_(C,null,p((null==(l=c(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,a)=>(r(),u(m,{key:a},{fallback:d((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>[(r(),u(e,{key:a,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),f(c(R))])]})),key:"0"}:void 0,c(V)||c(w)||c(z)||c(Q)?{name:"tab2",fn:d((()=>{var l,a;return[c(V)?(r(),_(C,{key:0},[(null==(l=c(D).CLAIM_FLOW)?void 0:l.processCaseType)===c(k).WORD?(r(),u(c(P),{key:0,class:"tab-card",title:"理赔说明"},{default:d((()=>{var l;return[A(v("div",O,null,512),[[s,null==(l=c(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",S,[(r(),u(m,null,{fallback:d((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,p((null==(l=c(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(c(R))],64)):E("",!0),c(w)?(r(),_(C,{key:1},[(null==(a=c(D).CLAIM_CASE)?void 0:a.claimCaseType)===c(k).WORD?(r(),u(c(P),{key:0,class:"tab-card",title:"理赔案例"},{default:d((()=>{var l;return[A(v("div",T,null,512),[[s,null==(l=c(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",x,[(r(),u(m,null,{fallback:d((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,p((null==(l=c(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(c(R))],64)):E("",!0),c(z)?(r(),_(C,{key:2},[f(c(P),{class:"tab-card",title:"投保须知"},{default:d((()=>{var l;return[A(v("div",M,null,512),[[s,null==(l=c(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),f(c(R))],64)):E("",!0),c(Q)?(r(),_(C,{key:3},[f(c(P),{title:"常见问题"},{default:d((()=>{var l,a;return[f(c(W),{list:null==(a=null==(l=c(D).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}),f(c(R))],64)):E("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{F as default};
