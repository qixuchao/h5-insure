import{d as l,aV as a,aW as e,dP as t,t as s,j as n,k as i,dC as r,o as u,p as o,ak as d,u as c,w as v,a as _,c as C,F as m,s as p,dQ as A,b as f,bg as E,f as L,g as I,I as y,b2 as k}from"./index-4d5fa34d.js";import{C as b}from"./infoCollection-5f2115ca.js";const O={class:"spec"},S={class:"rich-text"},x={key:1,class:"spec"},T={class:"rich-text"},g={key:1,class:"spec"},h={class:"rich-text"},M=l({name:"ScrollInfo"}),F=l({...M,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:M}){const F=l,P=a((()=>e((()=>import("./index-4d5fa34d.js").then((function(l){return l.es}))),["static/js/index-4d5fa34d.js","static/css/index-59abbbb4.css"])));a((()=>e((()=>import("./index-855e7698.js")),["static/js/index-855e7698.js","static/css/index-c0276d05.css","static/js/index-4d5fa34d.js","static/css/index-59abbbb4.css"])));const R=a((()=>e((()=>import("./index-4d5fa34d.js").then((function(l){return l.eq}))),["static/js/index-4d5fa34d.js","static/css/index-59abbbb4.css"]))),W=a((()=>e((()=>import("./index-c465ce10.js")),["static/js/index-c465ce10.js","static/css/index-7b3feb06.css","static/js/index-4d5fa34d.js","static/css/index-59abbbb4.css"]))),j=a((()=>e((()=>import("./index-d2799c48.js")),["static/js/index-d2799c48.js","static/css/index-194b9c66.css","static/js/index-4d5fa34d.js","static/css/index-59abbbb4.css","static/js/index-3f4d8b2b.js"]))),D=t(),{dataSource:N}=s(F),U=n(),V=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),Q=i((()=>{var l,a;return null==(a=null==(l=N.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:a.length})),w=i((()=>{var l,a,e,t;const s=null==(l=N.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(a=N.value.CLAIM_FLOW)?void 0:a.processContent)||s===b.IMAGE&&(null==(t=null==(e=N.value.CLAIM_FLOW)?void 0:e.processCasePicList)?void 0:t.length))})),z=i((()=>{var l,a,e,t,s;const n=null==(a=null==(l=N.value)?void 0:l.CLAIM_CASE)?void 0:a.claimCaseType;return!!(n===b.WORD&&(null==(e=N.value.CLAIM_CASE)?void 0:e.claimContent)||n===b.IMAGE&&(null==(s=null==(t=N.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),G=i((()=>{var l,a;return null==(a=null==(l=N.value)?void 0:l.ISSUE_NOTICE)?void 0:a.noticeContent})),q=i((()=>Object.keys(D).length)),$=i((()=>{var l,a;return(null==(a=null==(l=N.value)?void 0:l.FAQ)?void 0:a.length)&&q.value})),B=i((()=>{let l=[...V.value];return Q.value||(l=l.filter((l=>"tab1"!==l.slotName))),w.value||z.value||(l=l.filter((l=>"tab2"!==l.slotName))),D&&(l=l.map((l=>("tab3"===l.slotName&&(l.title="常见问题"),l)))),l}));return M({handleClickTab:()=>{var l;return null==(l=U.value)?void 0:l.handleClickTab}}),(l,a)=>{const e=y,t=k,s=r("dompurify-html");return u(),o(c(P),{ref_key:"scrollRef",ref:U,class:"tabs",list:c(B),sticky:"",scrollspy:""},d({tab3:v((()=>[c(q)?I(l.$slots,"form",{key:0}):(u(),o(c(W),{key:1,title:"常见问题"},{default:v((()=>{var l,a;return[f(c(j),{list:null==(a=null==(l=c(N).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}))])),_:2},[c(Q)?{name:"tab1",fn:v((()=>{var l;return[_("div",O,[(u(!0),C(m,null,p((null==(l=c(N).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,a)=>(u(),o(A,{key:a},{fallback:v((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>[(u(),o(e,{key:a,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),f(c(R))])]})),key:"0"}:void 0,c(w)||c(z)||c(G)||c($)?{name:"tab2",fn:v((()=>{var l,a;return[c(w)?(u(),C(m,{key:0},[(null==(l=c(N).CLAIM_FLOW)?void 0:l.processCaseType)===c(b).WORD?(u(),o(c(W),{key:0,class:"tab-card",title:"理赔说明"},{default:v((()=>{var l;return[E(_("div",S,null,512),[[s,null==(l=c(N).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(u(),C("div",x,[(u(),o(A,null,{fallback:v((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=c(N).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,a)=>(u(),o(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(c(R))],64)):L("",!0),c(z)?(u(),C(m,{key:1},[(null==(a=c(N).CLAIM_CASE)?void 0:a.claimCaseType)===c(b).WORD?(u(),o(c(W),{key:0,class:"tab-card",title:"理赔案例"},{default:v((()=>{var l;return[E(_("div",T,null,512),[[s,null==(l=c(N).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(u(),C("div",g,[(u(),o(A,null,{fallback:v((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=c(N).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,a)=>(u(),o(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(c(R))],64)):L("",!0),c(G)?(u(),C(m,{key:2},[f(c(W),{class:"tab-card",title:"投保须知"},{default:v((()=>{var l;return[E(_("div",h,null,512),[[s,null==(l=c(N).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),f(c(R))],64)):L("",!0),c($)?(u(),C(m,{key:3},[f(c(W),{title:"常见问题"},{default:v((()=>{var l,a;return[f(c(j),{list:null==(a=null==(l=c(N).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}),f(c(R))],64)):L("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{F as default};
