import{d as l,ax as e,ay as a,dP as t,t as s,j as n,k as i,dB as r,o as u,p as o,aj as c,u as d,w as v,a as _,c as C,F as f,s as m,dQ as p,b as A,aU as E,f as L,g as y,I,aG as k}from"./index-fef381c5.js";import{C as b}from"./infoCollection-66ecfab8.js";const O={class:"spec"},S={class:"rich-text"},x={key:1,class:"spec"},T={class:"rich-text"},h={key:1,class:"spec"},M={class:"rich-text"},g=l({name:"ScrollInfo"}),F=l({...g,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:g}){const F=e((()=>a((()=>import("./index-fef381c5.js").then((function(l){return l.es}))),["static/js/index-fef381c5.js","static/css/index-a7bf09dc.css"])));e((()=>a((()=>import("./index-efc78ecb.js")),["static/js/index-efc78ecb.js","static/css/index-c0276d05.css","static/js/index-fef381c5.js","static/css/index-a7bf09dc.css"])));const P=e((()=>a((()=>import("./index-fef381c5.js").then((function(l){return l.eq}))),["static/js/index-fef381c5.js","static/css/index-a7bf09dc.css"]))),R=e((()=>a((()=>import("./index-0f1370c0.js")),["static/js/index-0f1370c0.js","static/css/index-7b3feb06.css","static/js/index-fef381c5.js","static/css/index-a7bf09dc.css"]))),W=e((()=>a((()=>import("./index-c0185914.js")),["static/js/index-c0185914.js","static/css/index-194b9c66.css","static/js/index-fef381c5.js","static/css/index-a7bf09dc.css","static/js/index-2307d65a.js"]))),j=t(),D=l,{dataSource:N}=s(D),U=n(),Q=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),V=i((()=>{var l,e;return null==(e=null==(l=N.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:e.length})),w=i((()=>{var l,e,a,t;const s=null==(l=N.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(e=N.value.CLAIM_FLOW)?void 0:e.processContent)||s===b.IMAGE&&(null==(t=null==(a=N.value.CLAIM_FLOW)?void 0:a.processCasePicList)?void 0:t.length))})),z=i((()=>{var l,e,a,t,s;const n=null==(e=null==(l=N.value)?void 0:l.CLAIM_CASE)?void 0:e.claimCaseType;return!!(n===b.WORD&&(null==(a=N.value.CLAIM_CASE)?void 0:a.claimContent)||n===b.IMAGE&&(null==(s=null==(t=N.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),G=i((()=>{var l,e;return null==(e=null==(l=N.value)?void 0:l.ISSUE_NOTICE)?void 0:e.noticeContent})),q=i((()=>Object.keys(j).length)),B=i((()=>{var l,e;return(null==(e=null==(l=N.value)?void 0:l.FAQ)?void 0:e.length)&&q.value})),$=i((()=>{let l=[...Q.value];return V.value||(l=l.filter((l=>"tab1"!==l.slotName))),w.value||z.value||(l=l.filter((l=>"tab2"!==l.slotName))),j&&(l=l.map((l=>("tab3"===l.slotName&&(l.title="常见问题"),l)))),l}));return g({handleClickTab:()=>{var l;return null==(l=U.value)?void 0:l.handleClickTab}}),(l,e)=>{const a=I,t=k,s=r("dompurify-html");return u(),o(d(F),{ref_key:"scrollRef",ref:U,class:"tabs",list:d($),sticky:"",scrollspy:""},c({tab3:v((()=>[d(q)?y(l.$slots,"form",{key:0}):(u(),o(d(R),{key:1,title:"常见问题"},{default:v((()=>{var l,e;return[A(d(W),{list:null==(e=null==(l=d(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}))])),_:2},[d(V)?{name:"tab1",fn:v((()=>{var l;return[_("div",O,[(u(!0),C(f,null,m((null==(l=d(N).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,e)=>(u(),o(p,{key:e},{fallback:v((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>[(u(),o(a,{key:e,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(d(P))])]})),key:"0"}:void 0,d(w)||d(z)||d(G)||d(B)?{name:"tab2",fn:v((()=>{var l,e;return[d(w)?(u(),C(f,{key:0},[(null==(l=d(N).CLAIM_FLOW)?void 0:l.processCaseType)===d(b).WORD?(u(),o(d(R),{key:0,class:"tab-card",title:"理赔说明"},{default:v((()=>{var l;return[E(_("div",S,null,512),[[s,null==(l=d(N).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(u(),C("div",x,[(u(),o(p,null,{fallback:v((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(f,null,m((null==(l=d(N).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(d(P))],64)):L("",!0),d(z)?(u(),C(f,{key:1},[(null==(e=d(N).CLAIM_CASE)?void 0:e.claimCaseType)===d(b).WORD?(u(),o(d(R),{key:0,class:"tab-card",title:"理赔案例"},{default:v((()=>{var l;return[E(_("div",T,null,512),[[s,null==(l=d(N).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(u(),C("div",h,[(u(),o(p,null,{fallback:v((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(f,null,m((null==(l=d(N).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(d(P))],64)):L("",!0),d(G)?(u(),C(f,{key:2},[A(d(R),{class:"tab-card",title:"投保须知"},{default:v((()=>{var l;return[E(_("div",M,null,512),[[s,null==(l=d(N).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(d(P))],64)):L("",!0),d(B)?(u(),C(f,{key:3},[A(d(R),{title:"常见问题"},{default:v((()=>{var l,e;return[A(d(W),{list:null==(e=null==(l=d(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}),A(d(P))],64)):L("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{F as default};
