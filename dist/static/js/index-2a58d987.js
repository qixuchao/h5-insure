import{d as l,af as a,ag as e,t,j as s,k as n,dA as i,o as r,p as o,bL as u,u as c,w as d,a as v,c as _,F as C,s as p,dP as m,b as A,aL as f,f as L,g as E,I,ao as y}from"./index-4f5b90d5.js";import{C as b}from"./infoCollection-20921412.js";const k={class:"spec"},O={class:"rich-text"},S={key:1,class:"spec"},x={class:"rich-text"},T={key:1,class:"spec"},M={class:"rich-text"},g=l({name:"ScrollInfo"}),h=l({...g,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:g}){const h=l,F=a((()=>e((()=>import("./index-4f5b90d5.js").then((function(l){return l.et}))),["static/js/index-4f5b90d5.js","static/css/index-21dea172.css"])));a((()=>e((()=>import("./index-6996a253.js")),["static/js/index-6996a253.js","static/css/index-c0276d05.css","static/js/index-4f5b90d5.js","static/css/index-21dea172.css"])));const P=a((()=>e((()=>import("./index-4f5b90d5.js").then((function(l){return l.er}))),["static/js/index-4f5b90d5.js","static/css/index-21dea172.css"]))),R=a((()=>e((()=>import("./index-b0cfbe2c.js")),["static/js/index-b0cfbe2c.js","static/css/index-7b3feb06.css","static/js/index-4f5b90d5.js","static/css/index-21dea172.css"]))),W=a((()=>e((()=>import("./index-88f17dc8.js")),["static/js/index-88f17dc8.js","static/css/index-194b9c66.css","static/js/index-4f5b90d5.js","static/css/index-21dea172.css","static/js/index-728216d8.js"]))),{dataSource:D}=t(h),j=s(),N=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),U=n((()=>{var l,a;return null==(a=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:a.length})),V=n((()=>{var l,a,e,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(a=D.value.CLAIM_FLOW)?void 0:a.processContent)||s===b.IMAGE&&(null==(t=null==(e=D.value.CLAIM_FLOW)?void 0:e.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,a,e,t,s;const n=null==(a=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:a.claimCaseType;return!!(n===b.WORD&&(null==(e=D.value.CLAIM_CASE)?void 0:e.claimContent)||n===b.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),z=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:a.noticeContent})),Q=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.FAQ)?void 0:a.length})),G=n((()=>{let l=[...N.value];return U.value||(l=l.filter((l=>"tab1"!==l.slotName))),V.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return g({handleClickTab:()=>{var l;return null==(l=j.value)?void 0:l.handleClickTab}}),(l,a)=>{const e=I,t=y,s=i("dompurify-html");return r(),o(c(F),{ref_key:"scrollRef",ref:j,class:"tabs",list:c(G),sticky:"",scrollspy:""},u({tab3:d((()=>[E(l.$slots,"form")])),_:2},[c(U)?{name:"tab1",fn:d((()=>{var l;return[v("div",k,[(r(!0),_(C,null,p((null==(l=c(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,a)=>(r(),o(m,{key:a},{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>[(r(),o(e,{key:a,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(c(P))])]})),key:"0"}:void 0,c(V)||c(w)||c(z)||c(Q)?{name:"tab2",fn:d((()=>{var l,a;return[c(V)?(r(),_(C,{key:0},[(null==(l=c(D).CLAIM_FLOW)?void 0:l.processCaseType)===c(b).WORD?(r(),o(c(R),{key:0,class:"tab-card",title:"理赔说明"},{default:d((()=>{var l;return[f(v("div",O,null,512),[[s,null==(l=c(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",S,[(r(),o(m,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,p((null==(l=c(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,a)=>(r(),o(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(P))],64)):L("",!0),c(w)?(r(),_(C,{key:1},[(null==(a=c(D).CLAIM_CASE)?void 0:a.claimCaseType)===c(b).WORD?(r(),o(c(R),{key:0,class:"tab-card",title:"理赔案例"},{default:d((()=>{var l;return[f(v("div",x,null,512),[[s,null==(l=c(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",T,[(r(),o(m,null,{fallback:d((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:d((()=>{var l;return[(r(!0),_(C,null,p((null==(l=c(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,a)=>(r(),o(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(c(P))],64)):L("",!0),c(z)?(r(),_(C,{key:2},[A(c(R),{class:"tab-card",title:"投保须知"},{default:d((()=>{var l;return[f(v("div",M,null,512),[[s,null==(l=c(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(c(P))],64)):L("",!0),c(Q)?(r(),_(C,{key:3},[A(c(R),{title:"常见问题"},{default:d((()=>{var l,a;return[A(c(W),{list:null==(a=null==(l=c(D).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}),A(c(P))],64)):L("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{h as default};
