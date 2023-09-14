import{d as l,a4 as a,a5 as e,t,i as s,j as n,cX as i,o as r,l as u,bQ as o,u as c,w as d,a as v,c as _,F as C,n as m,cV as p,b as A,V as f,q as E,f as L,I,ae as y}from"./index-a6b4898c.js";import{C as b}from"./infoCollection-8df6e167.js";const k={class:"spec"},O={class:"rich-text"},S={key:1,class:"spec"},x={class:"rich-text"},M={key:1,class:"spec"},T={class:"rich-text"},h=l({name:"ScrollInfo"}),F=l({...h,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:h}){const F=l,g=a((()=>e((()=>import("./index-a6b4898c.js").then((function(l){return l.dO}))),["static/js/index-a6b4898c.js","static/css/index-858bf1e3.css"])));a((()=>e((()=>import("./index-b446d806.js")),["static/js/index-b446d806.js","static/css/index-c0276d05.css","static/js/index-a6b4898c.js","static/css/index-858bf1e3.css"])));const R=a((()=>e((()=>import("./index-a6b4898c.js").then((function(l){return l.dM}))),["static/js/index-a6b4898c.js","static/css/index-858bf1e3.css"]))),P=a((()=>e((()=>import("./index-c8551241.js")),["static/js/index-c8551241.js","static/css/index-7b3feb06.css","static/js/index-a6b4898c.js","static/css/index-858bf1e3.css"]))),W=a((()=>e((()=>import("./index-1e6f20f3.js")),["static/js/index-1e6f20f3.js","static/css/index-194b9c66.css","static/js/index-a6b4898c.js","static/css/index-858bf1e3.css","static/js/index-6592753b.js"]))),{dataSource:D}=t(F),j=s(),N=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),V=n((()=>{var l,a;return null==(a=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:a.length})),U=n((()=>{var l,a,e,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(a=D.value.CLAIM_FLOW)?void 0:a.processContent)||s===b.IMAGE&&(null==(t=null==(e=D.value.CLAIM_FLOW)?void 0:e.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,a,e,t,s;const n=null==(a=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:a.claimCaseType;return!!(n===b.WORD&&(null==(e=D.value.CLAIM_CASE)?void 0:e.claimContent)||n===b.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),Q=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:a.noticeContent})),z=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.FAQ)?void 0:a.length})),G=n((()=>{let l=[...N.value];return V.value||(l=l.filter((l=>"tab1"!==l.slotName))),U.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return h({handleClickTab:()=>{var l;return null==(l=j.value)?void 0:l.handleClickTab}}),(l,a)=>{const e=I,t=y,s=i("dompurify-html");return r(),u(c(g),{ref_key:"scrollRef",ref:j,class:"tabs",list:c(G),sticky:"",scrollspy:""},o({tab3:d((()=>[L(l.$slots,"form")])),_:2},[c(V)?{name:"tab1",fn:d((()=>{var l;return[v("div",k,[(r(!0),_(C,null,m((null==(l=c(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,a)=>(r(),u(p,{key:a},{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>[(r(),u(e,{key:a,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(c(R))])]})),key:"0"}:void 0,c(U)||c(w)||c(Q)||c(z)?{name:"tab2",fn:d((()=>{var l,a;return[c(U)?(r(),_(C,{key:0},[(null==(l=c(D).CLAIM_FLOW)?void 0:l.processCaseType)===c(b).WORD?(r(),u(c(P),{key:0,class:"tab-card",title:"理赔说明"},{default:d((()=>{var l;return[f(v("div",O,null,512),[[s,null==(l=c(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",S,[(r(),u(p,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,m((null==(l=c(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(R))],64)):E("",!0),c(w)?(r(),_(C,{key:1},[(null==(a=c(D).CLAIM_CASE)?void 0:a.claimCaseType)===c(b).WORD?(r(),u(c(P),{key:0,class:"tab-card",title:"理赔案例"},{default:d((()=>{var l;return[f(v("div",x,null,512),[[s,null==(l=c(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",M,[(r(),u(p,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,m((null==(l=c(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(R))],64)):E("",!0),c(Q)?(r(),_(C,{key:2},[A(c(P),{class:"tab-card",title:"投保须知"},{default:d((()=>{var l;return[f(v("div",T,null,512),[[s,null==(l=c(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(c(R))],64)):E("",!0),c(z)?(r(),_(C,{key:3},[A(c(P),{title:"常见问题"},{default:d((()=>{var l,a;return[A(c(W),{list:null==(a=null==(l=c(D).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}),A(c(R))],64)):E("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{F as default};
