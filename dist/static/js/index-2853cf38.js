import{d as l,af as e,ag as a,t,j as s,k as n,dz as i,o as r,p as o,bL as u,u as d,w as c,a as v,c as _,F as C,s as p,dO as m,b as A,aL as f,f as L,g as E,I,ao as y}from"./index-ee94b5d2.js";import{C as b}from"./infoCollection-a19f38c2.js";const k={class:"spec"},O={class:"rich-text"},S={key:1,class:"spec"},x={class:"rich-text"},T={key:1,class:"spec"},M={class:"rich-text"},g=l({name:"ScrollInfo"}),h=l({...g,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:g}){const h=l,F=e((()=>a((()=>import("./index-ee94b5d2.js").then((function(l){return l.es}))),["static/js/index-ee94b5d2.js","static/css/index-3ce2d7e3.css"])));e((()=>a((()=>import("./index-f2fa2eea.js")),["static/js/index-f2fa2eea.js","static/css/index-c0276d05.css","static/js/index-ee94b5d2.js","static/css/index-3ce2d7e3.css"])));const R=e((()=>a((()=>import("./index-ee94b5d2.js").then((function(l){return l.eq}))),["static/js/index-ee94b5d2.js","static/css/index-3ce2d7e3.css"]))),P=e((()=>a((()=>import("./index-dc741c0d.js")),["static/js/index-dc741c0d.js","static/css/index-7b3feb06.css","static/js/index-ee94b5d2.js","static/css/index-3ce2d7e3.css"]))),W=e((()=>a((()=>import("./index-76dbd69b.js")),["static/js/index-76dbd69b.js","static/css/index-194b9c66.css","static/js/index-ee94b5d2.js","static/css/index-3ce2d7e3.css","static/js/index-823c7599.js"]))),{dataSource:D}=t(h),j=s(),N=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),U=n((()=>{var l,e;return null==(e=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:e.length})),V=n((()=>{var l,e,a,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(e=D.value.CLAIM_FLOW)?void 0:e.processContent)||s===b.IMAGE&&(null==(t=null==(a=D.value.CLAIM_FLOW)?void 0:a.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,e,a,t,s;const n=null==(e=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:e.claimCaseType;return!!(n===b.WORD&&(null==(a=D.value.CLAIM_CASE)?void 0:a.claimContent)||n===b.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),z=n((()=>{var l,e;return null==(e=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:e.noticeContent})),Q=n((()=>{var l,e;return null==(e=null==(l=D.value)?void 0:l.FAQ)?void 0:e.length})),G=n((()=>{let l=[...N.value];return U.value||(l=l.filter((l=>"tab1"!==l.slotName))),V.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return g({handleClickTab:()=>{var l;return null==(l=j.value)?void 0:l.handleClickTab}}),(l,e)=>{const a=I,t=y,s=i("dompurify-html");return r(),o(d(F),{ref_key:"scrollRef",ref:j,class:"tabs",list:d(G),sticky:"",scrollspy:""},u({tab3:c((()=>[E(l.$slots,"form")])),_:2},[d(U)?{name:"tab1",fn:c((()=>{var l;return[v("div",k,[(r(!0),_(C,null,p((null==(l=d(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,e)=>(r(),o(m,{key:e},{fallback:c((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>[(r(),o(a,{key:e,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(d(R))])]})),key:"0"}:void 0,d(V)||d(w)||d(z)||d(Q)?{name:"tab2",fn:c((()=>{var l,e;return[d(V)?(r(),_(C,{key:0},[(null==(l=d(D).CLAIM_FLOW)?void 0:l.processCaseType)===d(b).WORD?(r(),o(d(P),{key:0,class:"tab-card",title:"理赔说明"},{default:c((()=>{var l;return[f(v("div",O,null,512),[[s,null==(l=d(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",S,[(r(),o(m,null,{fallback:c((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>{var l;return[(r(!0),_(C,null,p((null==(l=d(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,e)=>(r(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(d(R))],64)):L("",!0),d(w)?(r(),_(C,{key:1},[(null==(e=d(D).CLAIM_CASE)?void 0:e.claimCaseType)===d(b).WORD?(r(),o(d(P),{key:0,class:"tab-card",title:"理赔案例"},{default:c((()=>{var l;return[f(v("div",x,null,512),[[s,null==(l=d(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",T,[(r(),o(m,null,{fallback:c((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>{var l;return[(r(!0),_(C,null,p((null==(l=d(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,e)=>(r(),o(a,{key:e,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(d(R))],64)):L("",!0),d(z)?(r(),_(C,{key:2},[A(d(P),{class:"tab-card",title:"投保须知"},{default:c((()=>{var l;return[f(v("div",M,null,512),[[s,null==(l=d(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(d(R))],64)):L("",!0),d(Q)?(r(),_(C,{key:3},[A(d(P),{title:"常见问题"},{default:c((()=>{var l,e;return[A(d(W),{list:null==(e=null==(l=d(D).FAQ)?void 0:l[0])?void 0:e.data},null,8,["list"])]})),_:1}),A(d(R))],64)):L("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{h as default};
