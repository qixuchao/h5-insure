import{d as l,aV as e,aW as a,dQ as t,t as s,j as n,k as i,dD as r,o as u,p as o,aj as d,u as c,w as v,a as _,c as C,F as m,s as p,dR as f,b as A,bg as E,f as L,g as I,I as y,b2 as k}from"./index-eade0f5c.js";import{C as b}from"./infoCollection-461b79ee.js";const O={class:"spec"},S={class:"rich-text"},x={key:1,class:"spec"},T={class:"rich-text"},g={key:1,class:"spec"},h={class:"rich-text"},M=l({name:"ScrollInfo"}),F=l({...M,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:M}){const F=l,R=e((()=>a((()=>import("./index-eade0f5c.js").then((function(l){return l.eu}))),["static/js/index-eade0f5c.js","static/css/index-53ee4d9d.css"])));e((()=>a((()=>import("./index-47a3ff30.js")),["static/js/index-47a3ff30.js","static/css/index-c0276d05.css","static/js/index-eade0f5c.js","static/css/index-53ee4d9d.css"])));const P=e((()=>a((()=>import("./index-eade0f5c.js").then((function(l){return l.es}))),["static/js/index-eade0f5c.js","static/css/index-53ee4d9d.css"]))),W=e((()=>a((()=>import("./index-cdf8d836.js")),["static/js/index-cdf8d836.js","static/css/index-7b3feb06.css","static/js/index-eade0f5c.js","static/css/index-53ee4d9d.css"]))),j=e((()=>a((()=>import("./index-329e1c61.js")),["static/js/index-329e1c61.js","static/css/index-194b9c66.css","static/js/index-eade0f5c.js","static/css/index-53ee4d9d.css","static/js/index-b4ac37cb.js"]))),D=t(),{dataSource:N}=s(F),U=n(),V=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),Q=i((()=>{var l,e;return null==(e=null==(l=N.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:e.length})),w=i((()=>{var l,e,a,t;const s=null==(l=N.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(e=N.value.CLAIM_FLOW)?void 0:e.processContent)||s===b.IMAGE&&(null==(t=null==(a=N.value.CLAIM_FLOW)?void 0:a.processCasePicList)?void 0:t.length))})),z=i((()=>{var l,e,a,t,s;const n=null==(e=null==(l=N.value)?void 0:l.CLAIM_CASE)?void 0:e.claimCaseType;return!!(n===b.WORD&&(null==(a=N.value.CLAIM_CASE)?void 0:a.claimContent)||n===b.IMAGE&&(null==(s=null==(t=N.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),G=i((()=>{var l,e;return null==(e=null==(l=N.value)?void 0:l.ISSUE_NOTICE)?void 0:e.noticeContent})),$=i((()=>Object.keys(D).length)),q=i((()=>{var l,e;return(null==(e=null==(l=N.value)?void 0:l.FAQ)?void 0:e.length)&&$.value})),B=i((()=>{let l=[...V.value];return Q.value||(l=l.filter((l=>"tab1"!==l.slotName))),w.value||z.value||(l=l.filter((l=>"tab2"!==l.slotName))),D&&(l=l.map((l=>("tab3"===l.slotName&&(l.title="常见问题"),l)))),l}));return M({handleClickTab:()=>{var l;return null==(l=U.value)?void 0:l.handleClickTab}}),(l,e)=>{const a=y,t=k,s=r("dompurify-html");return u(),o(c(R),{ref_key:"scrollRef",ref:U,class:"tabs",list:c(B),sticky:"",scrollspy:""},d({tab3:v((()=>[c($)?I(l.$slots,"form",{key:0}):(u(),o(c(W),{key:1,title:"常见问题"},{default:v((()=>{var l,e;return[A(c(j),{list:null==(e=null==(l=c(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}))])),_:2},[c(Q)?{name:"tab1",fn:v((()=>{var l;return[_("div",O,[(u(!0),C(m,null,p((null==(l=c(N).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,e)=>(u(),o(f,{key:e},{fallback:v((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>[(u(),o(a,{key:e,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(c(P))])]})),key:"0"}:void 0,c(w)||c(z)||c(G)||c(q)?{name:"tab2",fn:v((()=>{var l,e;return[c(w)?(u(),C(m,{key:0},[(null==(l=c(N).CLAIM_FLOW)?void 0:l.processCaseType)===c(b).WORD?(u(),o(c(W),{key:0,class:"tab-card",title:"理赔说明"},{default:v((()=>{var l;return[E(_("div",S,null,512),[[s,null==(l=c(N).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(u(),C("div",x,[(u(),o(f,null,{fallback:v((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=c(N).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(P))],64)):L("",!0),c(z)?(u(),C(m,{key:1},[(null==(e=c(N).CLAIM_CASE)?void 0:e.claimCaseType)===c(b).WORD?(u(),o(c(W),{key:0,class:"tab-card",title:"理赔案例"},{default:v((()=>{var l;return[E(_("div",T,null,512),[[s,null==(l=c(N).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(u(),C("div",g,[(u(),o(f,null,{fallback:v((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=c(N).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(P))],64)):L("",!0),c(G)?(u(),C(m,{key:2},[A(c(W),{class:"tab-card",title:"投保须知"},{default:v((()=>{var l;return[E(_("div",h,null,512),[[s,null==(l=c(N).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(c(P))],64)):L("",!0),c(q)?(u(),C(m,{key:3},[A(c(W),{title:"常见问题"},{default:v((()=>{var l,e;return[A(c(j),{list:null==(e=null==(l=c(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}),A(c(P))],64)):L("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{F as default};
