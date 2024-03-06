import{d as l,aV as e,aW as a,dQ as t,t as s,j as n,k as i,dD as r,o as u,p as o,ak as d,u as c,w as v,a as _,c as C,F as m,s as p,dR as A,b as E,bg as f,f as L,g as I,I as y,b2 as b}from"./index-30a3e375.js";import{C as k}from"./infoCollection-a47eac90.js";const O={class:"spec"},S={class:"rich-text"},x={key:1,class:"spec"},T={class:"rich-text"},g={key:1,class:"spec"},h={class:"rich-text"},M=l({name:"ScrollInfo"}),F=l({...M,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:M}){const F=e((()=>a((()=>import("./index-30a3e375.js").then((function(l){return l.eu}))),["static/js/index-30a3e375.js","static/css/index-ad586028.css"])));e((()=>a((()=>import("./index-8e4d2bef.js")),["static/js/index-8e4d2bef.js","static/css/index-c0276d05.css","static/js/index-30a3e375.js","static/css/index-ad586028.css"])));const R=e((()=>a((()=>import("./index-30a3e375.js").then((function(l){return l.es}))),["static/js/index-30a3e375.js","static/css/index-ad586028.css"]))),P=e((()=>a((()=>import("./index-b9424bc0.js")),["static/js/index-b9424bc0.js","static/css/index-7b3feb06.css","static/js/index-30a3e375.js","static/css/index-ad586028.css"]))),W=e((()=>a((()=>import("./index-acdb2249.js")),["static/js/index-acdb2249.js","static/css/index-194b9c66.css","static/js/index-30a3e375.js","static/css/index-ad586028.css","static/js/index-70b9fb4a.js"]))),D=t(),j=l,{dataSource:N}=s(j),U=n(),V=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),Q=i((()=>{var l,e;return null==(e=null==(l=N.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:e.length})),w=i((()=>{var l,e,a,t;const s=null==(l=N.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===k.WORD&&(null==(e=N.value.CLAIM_FLOW)?void 0:e.processContent)||s===k.IMAGE&&(null==(t=null==(a=N.value.CLAIM_FLOW)?void 0:a.processCasePicList)?void 0:t.length))})),z=i((()=>{var l,e,a,t,s;const n=null==(e=null==(l=N.value)?void 0:l.CLAIM_CASE)?void 0:e.claimCaseType;return!!(n===k.WORD&&(null==(a=N.value.CLAIM_CASE)?void 0:a.claimContent)||n===k.IMAGE&&(null==(s=null==(t=N.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),G=i((()=>{var l,e;return null==(e=null==(l=N.value)?void 0:l.ISSUE_NOTICE)?void 0:e.noticeContent})),$=i((()=>Object.keys(D).length)),q=i((()=>{var l,e;return(null==(e=null==(l=N.value)?void 0:l.FAQ)?void 0:e.length)&&$.value})),B=i((()=>{let l=[...V.value];return Q.value||(l=l.filter((l=>"tab1"!==l.slotName))),w.value||z.value||(l=l.filter((l=>"tab2"!==l.slotName))),D&&(l=l.map((l=>("tab3"===l.slotName&&(l.title="常见问题"),l)))),l}));return M({handleClickTab:()=>{var l;return null==(l=U.value)?void 0:l.handleClickTab}}),(l,e)=>{const a=y,t=b,s=r("dompurify-html");return u(),o(c(F),{ref_key:"scrollRef",ref:U,class:"tabs",list:c(B),sticky:"",scrollspy:""},d({tab3:v((()=>[c($)?I(l.$slots,"form",{key:0}):(u(),o(c(P),{key:1,title:"常见问题"},{default:v((()=>{var l,e;return[E(c(W),{list:null==(e=null==(l=c(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}))])),_:2},[c(Q)?{name:"tab1",fn:v((()=>{var l;return[_("div",O,[(u(!0),C(m,null,p((null==(l=c(N).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,e)=>(u(),o(A,{key:e},{fallback:v((()=>[E(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>[(u(),o(a,{key:e,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),E(c(R))])]})),key:"0"}:void 0,c(w)||c(z)||c(G)||c(q)?{name:"tab2",fn:v((()=>{var l,e;return[c(w)?(u(),C(m,{key:0},[(null==(l=c(N).CLAIM_FLOW)?void 0:l.processCaseType)===c(k).WORD?(u(),o(c(P),{key:0,class:"tab-card",title:"理赔说明"},{default:v((()=>{var l;return[f(_("div",S,null,512),[[s,null==(l=c(N).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(u(),C("div",x,[(u(),o(A,null,{fallback:v((()=>[E(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=c(N).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),E(c(R))],64)):L("",!0),c(z)?(u(),C(m,{key:1},[(null==(e=c(N).CLAIM_CASE)?void 0:e.claimCaseType)===c(k).WORD?(u(),o(c(P),{key:0,class:"tab-card",title:"理赔案例"},{default:v((()=>{var l;return[f(_("div",T,null,512),[[s,null==(l=c(N).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(u(),C("div",g,[(u(),o(A,null,{fallback:v((()=>[E(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=c(N).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),E(c(R))],64)):L("",!0),c(G)?(u(),C(m,{key:2},[E(c(P),{class:"tab-card",title:"投保须知"},{default:v((()=>{var l;return[f(_("div",h,null,512),[[s,null==(l=c(N).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),E(c(R))],64)):L("",!0),c(q)?(u(),C(m,{key:3},[E(c(P),{title:"常见问题"},{default:v((()=>{var l,e;return[E(c(W),{list:null==(e=null==(l=c(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}),E(c(R))],64)):L("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{F as default};
