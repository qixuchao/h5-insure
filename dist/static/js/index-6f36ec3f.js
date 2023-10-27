import{d as l,a4 as a,a5 as e,t,j as s,k as n,dd as i,o as r,m as u,bS as o,u as d,w as c,a as v,c as _,F as C,q as m,da as p,b as f,V as A,f as E,g as L,I,ae as y}from"./index-1dfa3d8b.js";import{C as b}from"./infoCollection-46cb283d.js";const k={class:"spec"},S={class:"rich-text"},O={key:1,class:"spec"},x={class:"rich-text"},T={key:1,class:"spec"},M={class:"rich-text"},h=l({name:"ScrollInfo"}),g=l({...h,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:h}){const g=l,F=a((()=>e((()=>import("./index-1dfa3d8b.js").then((function(l){return l.e2}))),["static/js/index-1dfa3d8b.js","static/css/index-57d74d44.css"])));a((()=>e((()=>import("./index-8ea3fc12.js")),["static/js/index-8ea3fc12.js","static/css/index-c0276d05.css","static/js/index-1dfa3d8b.js","static/css/index-57d74d44.css"])));const R=a((()=>e((()=>import("./index-1dfa3d8b.js").then((function(l){return l.e0}))),["static/js/index-1dfa3d8b.js","static/css/index-57d74d44.css"]))),P=a((()=>e((()=>import("./index-c76ca5e8.js")),["static/js/index-c76ca5e8.js","static/css/index-7b3feb06.css","static/js/index-1dfa3d8b.js","static/css/index-57d74d44.css"]))),W=a((()=>e((()=>import("./index-a86ff23d.js")),["static/js/index-a86ff23d.js","static/css/index-194b9c66.css","static/js/index-1dfa3d8b.js","static/css/index-57d74d44.css","static/js/index-21e0e573.js"]))),{dataSource:D}=t(g),j=s(),N=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),U=n((()=>{var l,a;return null==(a=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:a.length})),V=n((()=>{var l,a,e,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(a=D.value.CLAIM_FLOW)?void 0:a.processContent)||s===b.IMAGE&&(null==(t=null==(e=D.value.CLAIM_FLOW)?void 0:e.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,a,e,t,s;const n=null==(a=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:a.claimCaseType;return!!(n===b.WORD&&(null==(e=D.value.CLAIM_CASE)?void 0:e.claimContent)||n===b.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),z=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:a.noticeContent})),Q=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.FAQ)?void 0:a.length})),G=n((()=>{let l=[...N.value];return U.value||(l=l.filter((l=>"tab1"!==l.slotName))),V.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return h({handleClickTab:()=>{var l;return null==(l=j.value)?void 0:l.handleClickTab}}),(l,a)=>{const e=I,t=y,s=i("dompurify-html");return r(),u(d(F),{ref_key:"scrollRef",ref:j,class:"tabs",list:d(G),sticky:"",scrollspy:""},o({tab3:c((()=>[L(l.$slots,"form")])),_:2},[d(U)?{name:"tab1",fn:c((()=>{var l;return[v("div",k,[(r(!0),_(C,null,m((null==(l=d(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,a)=>(r(),u(p,{key:a},{fallback:c((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>[(r(),u(e,{key:a,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),f(d(R))])]})),key:"0"}:void 0,d(V)||d(w)||d(z)||d(Q)?{name:"tab2",fn:c((()=>{var l,a;return[d(V)?(r(),_(C,{key:0},[(null==(l=d(D).CLAIM_FLOW)?void 0:l.processCaseType)===d(b).WORD?(r(),u(d(P),{key:0,class:"tab-card",title:"理赔说明"},{default:c((()=>{var l;return[A(v("div",S,null,512),[[s,null==(l=d(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",O,[(r(),u(p,null,{fallback:c((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>{var l;return[(r(!0),_(C,null,m((null==(l=d(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(d(R))],64)):E("",!0),d(w)?(r(),_(C,{key:1},[(null==(a=d(D).CLAIM_CASE)?void 0:a.claimCaseType)===d(b).WORD?(r(),u(d(P),{key:0,class:"tab-card",title:"理赔案例"},{default:c((()=>{var l;return[A(v("div",x,null,512),[[s,null==(l=d(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",T,[(r(),u(p,null,{fallback:c((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>{var l;return[(r(!0),_(C,null,m((null==(l=d(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(d(R))],64)):E("",!0),d(z)?(r(),_(C,{key:2},[f(d(P),{class:"tab-card",title:"投保须知"},{default:c((()=>{var l;return[A(v("div",M,null,512),[[s,null==(l=d(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),f(d(R))],64)):E("",!0),d(Q)?(r(),_(C,{key:3},[f(d(P),{title:"常见问题"},{default:c((()=>{var l,a;return[f(d(W),{list:null==(a=null==(l=d(D).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}),f(d(R))],64)):E("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{g as default};
