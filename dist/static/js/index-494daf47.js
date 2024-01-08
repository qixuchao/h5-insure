import{d as l,af as e,ag as a,dQ as t,t as s,j as n,k as i,dA as r,o as u,p as o,bL as c,u as d,w as v,a as _,c as C,F as m,s as p,dR as A,b as L,aL as f,f as E,g as I,I as y,ao as k}from"./index-08ec7e17.js";import{C as b}from"./infoCollection-40e62926.js";const O={class:"spec"},S={class:"rich-text"},x={key:1,class:"spec"},T={class:"rich-text"},g={key:1,class:"spec"},h={class:"rich-text"},M=l({name:"ScrollInfo"}),F=l({...M,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:M}){const F=l,R=e((()=>a((()=>import("./index-08ec7e17.js").then((function(l){return l.et}))),["static/js/index-08ec7e17.js","static/css/index-0849ef7c.css"])));e((()=>a((()=>import("./index-adc9b9ae.js")),["static/js/index-adc9b9ae.js","static/css/index-c0276d05.css","static/js/index-08ec7e17.js","static/css/index-0849ef7c.css"])));const P=e((()=>a((()=>import("./index-08ec7e17.js").then((function(l){return l.er}))),["static/js/index-08ec7e17.js","static/css/index-0849ef7c.css"]))),W=e((()=>a((()=>import("./index-25e855d4.js")),["static/js/index-25e855d4.js","static/css/index-7b3feb06.css","static/js/index-08ec7e17.js","static/css/index-0849ef7c.css"]))),j=e((()=>a((()=>import("./index-4f749352.js")),["static/js/index-4f749352.js","static/css/index-194b9c66.css","static/js/index-08ec7e17.js","static/css/index-0849ef7c.css","static/js/index-22f93598.js"]))),D=t(),{dataSource:N}=s(F),U=n(),Q=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),V=i((()=>{var l,e;return null==(e=null==(l=N.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:e.length})),w=i((()=>{var l,e,a,t;const s=null==(l=N.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(e=N.value.CLAIM_FLOW)?void 0:e.processContent)||s===b.IMAGE&&(null==(t=null==(a=N.value.CLAIM_FLOW)?void 0:a.processCasePicList)?void 0:t.length))})),z=i((()=>{var l,e,a,t,s;const n=null==(e=null==(l=N.value)?void 0:l.CLAIM_CASE)?void 0:e.claimCaseType;return!!(n===b.WORD&&(null==(a=N.value.CLAIM_CASE)?void 0:a.claimContent)||n===b.IMAGE&&(null==(s=null==(t=N.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),G=i((()=>{var l,e;return null==(e=null==(l=N.value)?void 0:l.ISSUE_NOTICE)?void 0:e.noticeContent})),$=i((()=>Object.keys(D).length)),q=i((()=>{var l,e;return(null==(e=null==(l=N.value)?void 0:l.FAQ)?void 0:e.length)&&$.value})),B=i((()=>{let l=[...Q.value];return V.value||(l=l.filter((l=>"tab1"!==l.slotName))),w.value||z.value||(l=l.filter((l=>"tab2"!==l.slotName))),D&&(l=l.map((l=>("tab3"===l.slotName&&(l.title="常见问题"),l)))),l}));return M({handleClickTab:()=>{var l;return null==(l=U.value)?void 0:l.handleClickTab}}),(l,e)=>{const a=y,t=k,s=r("dompurify-html");return u(),o(d(R),{ref_key:"scrollRef",ref:U,class:"tabs",list:d(B),sticky:"",scrollspy:""},c({tab3:v((()=>[d($)?I(l.$slots,"form",{key:0}):(u(),o(d(W),{key:1,title:"常见问题"},{default:v((()=>{var l,e;return[L(d(j),{list:null==(e=null==(l=d(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}))])),_:2},[d(V)?{name:"tab1",fn:v((()=>{var l;return[_("div",O,[(u(!0),C(m,null,p((null==(l=d(N).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,e)=>(u(),o(A,{key:e},{fallback:v((()=>[L(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>[(u(),o(a,{key:e,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),L(d(P))])]})),key:"0"}:void 0,d(w)||d(z)||d(G)||d(q)?{name:"tab2",fn:v((()=>{var l,e;return[d(w)?(u(),C(m,{key:0},[(null==(l=d(N).CLAIM_FLOW)?void 0:l.processCaseType)===d(b).WORD?(u(),o(d(W),{key:0,class:"tab-card",title:"理赔说明"},{default:v((()=>{var l;return[f(_("div",S,null,512),[[s,null==(l=d(N).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(u(),C("div",x,[(u(),o(A,null,{fallback:v((()=>[L(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=d(N).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),L(d(P))],64)):E("",!0),d(z)?(u(),C(m,{key:1},[(null==(e=d(N).CLAIM_CASE)?void 0:e.claimCaseType)===d(b).WORD?(u(),o(d(W),{key:0,class:"tab-card",title:"理赔案例"},{default:v((()=>{var l;return[f(_("div",T,null,512),[[s,null==(l=d(N).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(u(),C("div",g,[(u(),o(A,null,{fallback:v((()=>[L(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=d(N).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,e)=>(u(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),L(d(P))],64)):E("",!0),d(G)?(u(),C(m,{key:2},[L(d(W),{class:"tab-card",title:"投保须知"},{default:v((()=>{var l;return[f(_("div",h,null,512),[[s,null==(l=d(N).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),L(d(P))],64)):E("",!0),d(q)?(u(),C(m,{key:3},[L(d(W),{title:"常见问题"},{default:v((()=>{var l,e;return[L(d(j),{list:null==(e=null==(l=d(N).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}),L(d(P))],64)):E("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{F as default};
