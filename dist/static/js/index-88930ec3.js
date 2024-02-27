import{d as l,aV as a,aW as e,dQ as t,t as s,j as n,k as i,dD as r,o as u,p as o,ak as c,u as d,w as v,a as _,c as C,F as m,s as p,dR as A,b as f,bg as E,f as L,g as I,I as y,b2 as k}from"./index-97c91859.js";import{C as b}from"./infoCollection-f01ff1c0.js";const O={class:"spec"},S={class:"rich-text"},x={key:1,class:"spec"},T={class:"rich-text"},g={key:1,class:"spec"},h={class:"rich-text"},M=l({name:"ScrollInfo"}),F=l({...M,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:M}){const F=l,R=a((()=>e((()=>import("./index-97c91859.js").then((function(l){return l.et}))),["static/js/index-97c91859.js","static/css/index-5706e38b.css"])));a((()=>e((()=>import("./index-a9e472a5.js")),["static/js/index-a9e472a5.js","static/css/index-c0276d05.css","static/js/index-97c91859.js","static/css/index-5706e38b.css"])));const P=a((()=>e((()=>import("./index-97c91859.js").then((function(l){return l.er}))),["static/js/index-97c91859.js","static/css/index-5706e38b.css"]))),W=a((()=>e((()=>import("./index-a29bb2f1.js")),["static/js/index-a29bb2f1.js","static/css/index-7b3feb06.css","static/js/index-97c91859.js","static/css/index-5706e38b.css"]))),D=a((()=>e((()=>import("./index-902c56b1.js")),["static/js/index-902c56b1.js","static/css/index-194b9c66.css","static/js/index-97c91859.js","static/css/index-5706e38b.css","static/js/index-afa6d65e.js"]))),j=t(),{dataSource:N}=s(F),U=n(),V=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),Q=i((()=>{var l,a;return null==(a=null==(l=N.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:a.length})),w=i((()=>{var l,a,e,t;const s=null==(l=N.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(a=N.value.CLAIM_FLOW)?void 0:a.processContent)||s===b.IMAGE&&(null==(t=null==(e=N.value.CLAIM_FLOW)?void 0:e.processCasePicList)?void 0:t.length))})),z=i((()=>{var l,a,e,t,s;const n=null==(a=null==(l=N.value)?void 0:l.CLAIM_CASE)?void 0:a.claimCaseType;return!!(n===b.WORD&&(null==(e=N.value.CLAIM_CASE)?void 0:e.claimContent)||n===b.IMAGE&&(null==(s=null==(t=N.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),G=i((()=>{var l,a;return null==(a=null==(l=N.value)?void 0:l.ISSUE_NOTICE)?void 0:a.noticeContent})),$=i((()=>Object.keys(j).length)),q=i((()=>{var l,a;return(null==(a=null==(l=N.value)?void 0:l.FAQ)?void 0:a.length)&&$.value})),B=i((()=>{let l=[...V.value];return Q.value||(l=l.filter((l=>"tab1"!==l.slotName))),w.value||z.value||(l=l.filter((l=>"tab2"!==l.slotName))),j&&(l=l.map((l=>("tab3"===l.slotName&&(l.title="常见问题"),l)))),l}));return M({handleClickTab:()=>{var l;return null==(l=U.value)?void 0:l.handleClickTab}}),(l,a)=>{const e=y,t=k,s=r("dompurify-html");return u(),o(d(R),{ref_key:"scrollRef",ref:U,class:"tabs",list:d(B),sticky:"",scrollspy:""},c({tab3:v((()=>[d($)?I(l.$slots,"form",{key:0}):(u(),o(d(W),{key:1,title:"常见问题"},{default:v((()=>{var l,a;return[f(d(D),{list:null==(a=null==(l=d(N).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}))])),_:2},[d(Q)?{name:"tab1",fn:v((()=>{var l;return[_("div",O,[(u(!0),C(m,null,p((null==(l=d(N).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,a)=>(u(),o(A,{key:a},{fallback:v((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>[(u(),o(e,{key:a,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),f(d(P))])]})),key:"0"}:void 0,d(w)||d(z)||d(G)||d(q)?{name:"tab2",fn:v((()=>{var l,a;return[d(w)?(u(),C(m,{key:0},[(null==(l=d(N).CLAIM_FLOW)?void 0:l.processCaseType)===d(b).WORD?(u(),o(d(W),{key:0,class:"tab-card",title:"理赔说明"},{default:v((()=>{var l;return[E(_("div",S,null,512),[[s,null==(l=d(N).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(u(),C("div",x,[(u(),o(A,null,{fallback:v((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=d(N).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,a)=>(u(),o(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(d(P))],64)):L("",!0),d(z)?(u(),C(m,{key:1},[(null==(a=d(N).CLAIM_CASE)?void 0:a.claimCaseType)===d(b).WORD?(u(),o(d(W),{key:0,class:"tab-card",title:"理赔案例"},{default:v((()=>{var l;return[E(_("div",T,null,512),[[s,null==(l=d(N).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(u(),C("div",g,[(u(),o(A,null,{fallback:v((()=>[f(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:v((()=>{var l;return[(u(!0),C(m,null,p((null==(l=d(N).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,a)=>(u(),o(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),f(d(P))],64)):L("",!0),d(G)?(u(),C(m,{key:2},[f(d(W),{class:"tab-card",title:"投保须知"},{default:v((()=>{var l;return[E(_("div",h,null,512),[[s,null==(l=d(N).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),f(d(P))],64)):L("",!0),d(q)?(u(),C(m,{key:3},[f(d(W),{title:"常见问题"},{default:v((()=>{var l,a;return[f(d(D),{list:null==(a=null==(l=d(N).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}),f(d(P))],64)):L("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{F as default};
