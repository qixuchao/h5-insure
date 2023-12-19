import{d as l,af as a,ag as e,t,j as s,k as n,dz as i,o as r,p as u,bM as o,u as d,w as c,a as v,c as _,F as C,s as p,dO as m,b as A,aL as f,f as E,g as L,I,ao as y}from"./index-53e50d90.js";import{C as k}from"./infoCollection-c9ff59bd.js";const b={class:"spec"},O={class:"rich-text"},S={key:1,class:"spec"},x={class:"rich-text"},M={key:1,class:"spec"},T={class:"rich-text"},g=l({name:"ScrollInfo"}),h=l({...g,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:g}){const h=l,F=a((()=>e((()=>import("./index-53e50d90.js").then((function(l){return l.eu}))),["static/js/index-53e50d90.js","static/css/index-839a5189.css"])));a((()=>e((()=>import("./index-0aa3f122.js")),["static/js/index-0aa3f122.js","static/css/index-c0276d05.css","static/js/index-53e50d90.js","static/css/index-839a5189.css"])));const R=a((()=>e((()=>import("./index-53e50d90.js").then((function(l){return l.es}))),["static/js/index-53e50d90.js","static/css/index-839a5189.css"]))),P=a((()=>e((()=>import("./index-6a9daa32.js")),["static/js/index-6a9daa32.js","static/css/index-7b3feb06.css","static/js/index-53e50d90.js","static/css/index-839a5189.css"]))),W=a((()=>e((()=>import("./index-ef339811.js")),["static/js/index-ef339811.js","static/css/index-194b9c66.css","static/js/index-53e50d90.js","static/css/index-839a5189.css","static/js/index-dc47c6cb.js"]))),{dataSource:D}=t(h),j=s(),N=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),U=n((()=>{var l,a;return null==(a=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:a.length})),V=n((()=>{var l,a,e,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===k.WORD&&(null==(a=D.value.CLAIM_FLOW)?void 0:a.processContent)||s===k.IMAGE&&(null==(t=null==(e=D.value.CLAIM_FLOW)?void 0:e.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,a,e,t,s;const n=null==(a=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:a.claimCaseType;return!!(n===k.WORD&&(null==(e=D.value.CLAIM_CASE)?void 0:e.claimContent)||n===k.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),z=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:a.noticeContent})),Q=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.FAQ)?void 0:a.length})),G=n((()=>{let l=[...N.value];return U.value||(l=l.filter((l=>"tab1"!==l.slotName))),V.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return g({handleClickTab:()=>{var l;return null==(l=j.value)?void 0:l.handleClickTab}}),(l,a)=>{const e=I,t=y,s=i("dompurify-html");return r(),u(d(F),{ref_key:"scrollRef",ref:j,class:"tabs",list:d(G),sticky:"",scrollspy:""},o({tab3:c((()=>[L(l.$slots,"form")])),_:2},[d(U)?{name:"tab1",fn:c((()=>{var l;return[v("div",b,[(r(!0),_(C,null,p((null==(l=d(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,a)=>(r(),u(m,{key:a},{fallback:c((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>[(r(),u(e,{key:a,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(d(R))])]})),key:"0"}:void 0,d(V)||d(w)||d(z)||d(Q)?{name:"tab2",fn:c((()=>{var l,a;return[d(V)?(r(),_(C,{key:0},[(null==(l=d(D).CLAIM_FLOW)?void 0:l.processCaseType)===d(k).WORD?(r(),u(d(P),{key:0,class:"tab-card",title:"理赔说明"},{default:c((()=>{var l;return[f(v("div",O,null,512),[[s,null==(l=d(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",S,[(r(),u(m,null,{fallback:c((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>{var l;return[(r(!0),_(C,null,p((null==(l=d(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(d(R))],64)):E("",!0),d(w)?(r(),_(C,{key:1},[(null==(a=d(D).CLAIM_CASE)?void 0:a.claimCaseType)===d(k).WORD?(r(),u(d(P),{key:0,class:"tab-card",title:"理赔案例"},{default:c((()=>{var l;return[f(v("div",x,null,512),[[s,null==(l=d(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",M,[(r(),u(m,null,{fallback:c((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>{var l;return[(r(!0),_(C,null,p((null==(l=d(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(d(R))],64)):E("",!0),d(z)?(r(),_(C,{key:2},[A(d(P),{class:"tab-card",title:"投保须知"},{default:c((()=>{var l;return[f(v("div",T,null,512),[[s,null==(l=d(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(d(R))],64)):E("",!0),d(Q)?(r(),_(C,{key:3},[A(d(P),{title:"常见问题"},{default:c((()=>{var l,a;return[A(d(W),{list:null==(a=null==(l=d(D).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}),A(d(R))],64)):E("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{h as default};
