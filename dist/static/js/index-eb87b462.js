import{d as l,ay as e,az as a,dB as t,t as s,j as n,k as i,c9 as r,o as u,p as o,ak as c,u as d,w as v,a as _,c as C,F as m,s as p,dC as A,b as f,aV as E,f as L,g as y,I,aH as k}from"./index-2cd6533c.js";import{C as b}from"./infoCollection-ee8e29ff.js";const O={class:"spec"},S={class:"rich-text"},h={key:1,class:"spec"},x={class:"rich-text"},T={key:1,class:"spec"},M={class:"rich-text"},g=l({name:"ScrollInfo"}),F=l({...g,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:g}){const F=l,R=e((()=>a((()=>import("./index-2cd6533c.js").then((function(l){return l.eh}))),["static/js/index-2cd6533c.js","static/css/index-efad381f.css"])));e((()=>a((()=>import("./index-6b947443.js")),["static/js/index-6b947443.js","static/css/index-c0276d05.css","static/js/index-2cd6533c.js","static/css/index-efad381f.css"])));const P=e((()=>a((()=>import("./index-2cd6533c.js").then((function(l){return l.ef}))),["static/js/index-2cd6533c.js","static/css/index-efad381f.css"]))),W=e((()=>a((()=>import("./index-7793acc9.js")),["static/js/index-7793acc9.js","static/css/index-7b3feb06.css","static/js/index-2cd6533c.js","static/css/index-efad381f.css"]))),j=e((()=>a((()=>import("./index-1af752d5.js")),["static/js/index-1af752d5.js","static/css/index-194b9c66.css","static/js/index-2cd6533c.js","static/css/index-efad381f.css","static/js/index-6a76c839.js"]))),D=t(),{dataSource:N}=s(F),U=n(),V=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),w=i((()=>{var l,e;return null==(e=null==(l=N.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:e.length})),z=i((()=>{var l,e,a,t;const s=null==(l=N.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(e=N.value.CLAIM_FLOW)?void 0:e.processContent)||s===b.IMAGE&&(null==(t=null==(a=N.value.CLAIM_FLOW)?void 0:a.processCasePicList)?void 0:t.length))})),Q=i((()=>{var l,e,a,t,s;const n=null==(e=null==(l=N.value)?void 0:l.CLAIM_CASE)?void 0:e.claimCaseType;return!!(n===b.WORD&&(null==(a=N.value.CLAIM_CASE)?void 0:a.claimContent)||n===b.IMAGE&&(null==(s=null==(t=N.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),G=i((()=>{var l,e;return null==(e=null==(l=N.value)?void 0:l.ISSUE_NOTICE)?void 0:e.noticeContent})),B=i((()=>Object.keys(D).length)),H=i((()=>{var l,e;return(null==(e=null==(l=N.value)?void 0:l.FAQ)?void 0:e.length)&&B.value})),$=i((()=>{let l=[...V.value];return w.value||(l=l.filter((l=>"tab1"!==l.slotName))),z.value||Q.value||(l=l.filter((l=>"tab2"!==l.slotName))),D&&(l=l.map((l=>("tab3"===l.slotName&&(l.title="常见问题"),l)))),l}));return g({handleClickTab:()=>{var l;return null==(l=U.value)?void 0:l.handleClickTab}}),(l,e)=>{const a=I,t=k,s=r("dompurify-html");return u(),o(d(R),{ref_key:"scrollRef",ref:U,class:"tabs",list:d($),sticky:"",scrollspy:""},c({tab3:v((()=>[d(B)?y(l.$slots,"form",{key:0}):(u(),o(d(W),{key:1,title:"常见问题"},{default:v((()=>{var l,e;return[f(d(j),{list:null==(e=null==(l=d(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}))])),_:2},[d(w)?{name:"tab1",fn:v((()=>{var l;return[_("div",O,[(u(!0),C(m,null,p((null==(l=d(N).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,e)=>(u(),o(A,{key:e},{fallback:v((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>[(u(),o(a,{key:e,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),f(d(P))])]})),key:"0"}:void 0,d(z)||d(Q)||d(G)||d(H)?{name:"tab2",fn:v((()=>{var l,e;return[d(z)?(u(),C(m,{key:0},[(null==(l=d(N).CLAIM_FLOW)?void 0:l.processCaseType)===d(b).WORD?(u(),o(d(W),{key:0,class:"tab-card",title:"理赔说明"},{default:v((()=>{var l;return[E(_("div",S,null,512),[[s,null==(l=d(N).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(u(),C("div",h,[(u(),o(A,null,{fallback:v((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=d(N).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(d(P))],64)):L("",!0),d(Q)?(u(),C(m,{key:1},[(null==(e=d(N).CLAIM_CASE)?void 0:e.claimCaseType)===d(b).WORD?(u(),o(d(W),{key:0,class:"tab-card",title:"理赔案例"},{default:v((()=>{var l;return[E(_("div",x,null,512),[[s,null==(l=d(N).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(u(),C("div",T,[(u(),o(A,null,{fallback:v((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=d(N).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(d(P))],64)):L("",!0),d(G)?(u(),C(m,{key:2},[f(d(W),{class:"tab-card",title:"投保须知"},{default:v((()=>{var l;return[E(_("div",M,null,512),[[s,null==(l=d(N).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),f(d(P))],64)):L("",!0),d(H)?(u(),C(m,{key:3},[f(d(W),{title:"常见问题"},{default:v((()=>{var l,e;return[f(d(j),{list:null==(e=null==(l=d(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}),f(d(P))],64)):L("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{F as default};
