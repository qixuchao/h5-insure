import{d as l,a4 as a,a5 as e,t,j as s,k as n,d6 as i,o as r,m as u,bQ as o,u as d,w as c,a as v,c as _,F as C,q as m,d3 as p,b as A,V as E,f,g as L,I,ae as y}from"./index-2251e077.js";import{C as b}from"./infoCollection-a05c9b62.js";const k={class:"spec"},O={class:"rich-text"},S={key:1,class:"spec"},x={class:"rich-text"},T={key:1,class:"spec"},M={class:"rich-text"},h=l({name:"ScrollInfo"}),g=l({...h,props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(l,{expose:h}){const g=l,F=a((()=>e((()=>import("./index-2251e077.js").then((function(l){return l.dX}))),["static/js/index-2251e077.js","static/css/index-7c45b48b.css"])));a((()=>e((()=>import("./index-1d29db77.js")),["static/js/index-1d29db77.js","static/css/index-c0276d05.css","static/js/index-2251e077.js","static/css/index-7c45b48b.css"])));const R=a((()=>e((()=>import("./index-2251e077.js").then((function(l){return l.dV}))),["static/js/index-2251e077.js","static/css/index-7c45b48b.css"]))),P=a((()=>e((()=>import("./index-0985d291.js")),["static/js/index-0985d291.js","static/css/index-7b3feb06.css","static/js/index-2251e077.js","static/css/index-7c45b48b.css"]))),W=a((()=>e((()=>import("./index-ab824cff.js")),["static/js/index-ab824cff.js","static/css/index-194b9c66.css","static/js/index-2251e077.js","static/css/index-7c45b48b.css","static/js/index-eaeb5258.js"]))),{dataSource:D}=t(g),j=s(),N=s([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),V=n((()=>{var l,a;return null==(a=null==(l=D.value.SPECIAL_FEATURE)?void 0:l.spec)?void 0:a.length})),U=n((()=>{var l,a,e,t;const s=null==(l=D.value.CLAIM_FLOW)?void 0:l.processCaseType;return!!(s===b.WORD&&(null==(a=D.value.CLAIM_FLOW)?void 0:a.processContent)||s===b.IMAGE&&(null==(t=null==(e=D.value.CLAIM_FLOW)?void 0:e.processCasePicList)?void 0:t.length))})),w=n((()=>{var l,a,e,t,s;const n=null==(a=null==(l=D.value)?void 0:l.CLAIM_CASE)?void 0:a.claimCaseType;return!!(n===b.WORD&&(null==(e=D.value.CLAIM_CASE)?void 0:e.claimContent)||n===b.IMAGE&&(null==(s=null==(t=D.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:s.length))})),Q=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.ISSUE_NOTICE)?void 0:a.noticeContent})),z=n((()=>{var l,a;return null==(a=null==(l=D.value)?void 0:l.FAQ)?void 0:a.length})),G=n((()=>{let l=[...N.value];return V.value||(l=l.filter((l=>"tab1"!==l.slotName))),U.value||w.value||(l=l.filter((l=>"tab2"!==l.slotName))),l}));return h({handleClickTab:()=>{var l;return null==(l=j.value)?void 0:l.handleClickTab}}),(l,a)=>{const e=I,t=y,s=i("dompurify-html");return r(),u(d(F),{ref_key:"scrollRef",ref:j,class:"tabs",list:d(G),sticky:"",scrollspy:""},o({tab3:c((()=>[L(l.$slots,"form")])),_:2},[d(V)?{name:"tab1",fn:c((()=>{var l;return[v("div",k,[(r(!0),_(C,null,m((null==(l=d(D).SPECIAL_FEATURE)?void 0:l.spec)||[],((l,a)=>(r(),u(p,{key:a},{fallback:c((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>[(r(),u(e,{key:a,class:"detail-img",width:"100%",src:l},null,8,["src"]))])),_:2},1024)))),128)),A(d(R))])]})),key:"0"}:void 0,d(U)||d(w)||d(Q)||d(z)?{name:"tab2",fn:c((()=>{var l,a;return[d(U)?(r(),_(C,{key:0},[(null==(l=d(D).CLAIM_FLOW)?void 0:l.processCaseType)===d(b).WORD?(r(),u(d(P),{key:0,class:"tab-card",title:"理赔说明"},{default:c((()=>{var l;return[E(v("div",O,null,512),[[s,null==(l=d(D).CLAIM_FLOW)?void 0:l.processContent]])]})),_:1})):(r(),_("div",S,[(r(),u(p,null,{fallback:c((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>{var l;return[(r(!0),_(C,null,m((null==(l=d(D).CLAIM_FLOW)?void 0:l.processCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(d(R))],64)):f("",!0),d(w)?(r(),_(C,{key:1},[(null==(a=d(D).CLAIM_CASE)?void 0:a.claimCaseType)===d(b).WORD?(r(),u(d(P),{key:0,class:"tab-card",title:"理赔案例"},{default:c((()=>{var l;return[E(v("div",x,null,512),[[s,null==(l=d(D).CLAIM_CASE)?void 0:l.claimContent]])]})),_:1})):(r(),_("div",T,[(r(),u(p,null,{fallback:c((()=>[A(t,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:c((()=>{var l;return[(r(!0),_(C,null,m((null==(l=d(D).CLAIM_CASE)?void 0:l.claimCasePicList)||[],((l,a)=>(r(),u(e,{key:a,width:"100%",src:l,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),A(d(R))],64)):f("",!0),d(Q)?(r(),_(C,{key:2},[A(d(P),{class:"tab-card",title:"投保须知"},{default:c((()=>{var l;return[E(v("div",M,null,512),[[s,null==(l=d(D).ISSUE_NOTICE)?void 0:l.noticeContent]])]})),_:1}),A(d(R))],64)):f("",!0),d(z)?(r(),_(C,{key:3},[A(d(P),{title:"常见问题"},{default:c((()=>{var l,a;return[A(d(W),{list:null==(a=null==(l=d(D).FAQ)?void 0:l[0])?void 0:a.data},null,8,["list"])]})),_:1}),A(d(R))],64)):f("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});export{g as default};
