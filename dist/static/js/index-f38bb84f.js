import{h as Z,r as y,$ as se,m as s,s as A,B as e,x as O,L as E,C as D,d as he,n as x,G as w,a5 as H,a6 as W,k as g,t as C,p as f,F as L,H as U,A as Ae,E as Ee,M as Ve,U as ge,P as Be,aa as we,R as me,j as Fe,ac as De,T as J}from"./vendor-902054a7.js";import{a as Ie,b as Re,g as Se}from"./proposalList-bbe7c1e2.js";import{q as xe,p as $e,c as Me,a as Ne}from"./compositionProposal-62d0b634.js";import{_ as Y,a2 as Oe,a1 as be,a3 as ye,S as Le,a4 as de,a5 as Ue}from"./index-119d3d1b.js";import{P as Te}from"./index-9e002567.js";import{_ as je}from"./index-cdd18df0.js";import{_ as Qe}from"./index-d5f3635a.js";var ze="/static/assets/male.441ae760.png",Ze="/static/assets/female.2dc8cc10.png";const Xe=o=>(H("data-v-0ae855a4"),o=o(),W(),o),Ge={class:"container head-cover"},Ke={class:"info-detail"},qe={class:"name"},Je={class:"img"},He={key:0,src:ze},We={key:1,src:Ze},Ye={clase:"p1"},et={class:"p2"},tt={class:"fe"},st=w(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),ot=Xe(()=>e("div",{class:"line"},null,-1)),at={class:"tp"},nt=Z({props:{info:{type:Object,default:()=>{}}},setup(o){const m=o,B=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"riskName",width:180},{title:"\u4FDD\u989D",dataIndex:"amount"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"coveragePeriod",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"chargePeriod",width:110},{title:"\u4FDD\u8D39",dataIndex:"premium",width:120}],P=y([]),c=u=>u===+ye.MALE,t=u=>{const n=u.split("_");if(u==="to_life")return"\u4FDD\u7EC8\u8EAB";switch(n[0]){case"year":return`${n[1]}\u5E74`;case"month":return`${n[1]}\u6708`;case"day":return`${n[1]}\u5929`;case"to":return`\u4FDD\u81F3${n[1]}\u5C81`;default:return""}},v=u=>{const n=u.split("_");switch(n[0]){case"year":return`${n[1]}\u5E74\u4EA4`;case"month":return`${n[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${n[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}},r=u=>{const n=[];u==null||u.forEach(a=>{const{riskName:_,amount:b,coveragePeriod:$,chargePeriod:I,premium:l}=a;n.push({riskName:_,amount:b,coveragePeriod:t($),chargePeriod:v(I),premium:l})}),P.value=n};return se(()=>m.info,u=>{r(u==null?void 0:u.proposalProductRiskVOList)},{deep:!0,immediate:!0}),(u,n)=>{var a,_,b,$,I,l;return s(),A("div",Ge,[e("div",Ke,[e("div",qe,[e("div",Je,[c((a=m.info)==null?void 0:a.gender)?(s(),A("img",He)):O("",!0),c((_=m.info)==null?void 0:_.gender)?O("",!0):(s(),A("img",We))]),e("div",null,[e("p",Ye,E((b=m.info)==null?void 0:b.name),1),e("p",et,E(D(Oe)[($=m.info)==null?void 0:$.gender])+"\uFF0C"+E(D(he)().diff((I=o.info)==null?void 0:I.birthday,"y"))+"\u5C81",1)])]),e("div",tt,[st,e("span",null,"\xA5"+E(D(be)((l=m.info)==null?void 0:l.totalPremium)),1)])]),ot,e("div",at,[P.value.length>0?(s(),x(Te,{key:0,columns:B,class:"table","data-source":P.value},null,8,["data-source"])):O("",!0)])])}}});var ut=Y(nt,[["__scopeId","data-v-0ae855a4"]]),re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAABYlBMVEVHcEzb7f/r9P/a8P/T6f/////P5//p+//X///////q9v+62v/z+f/D3f/w9//E5P+52//x+P/R6v/z+f/J4//g9P/h8P/w9//g7/+32v/b7P/b7f+62/+72//L4/+83P/D4P/i8P/o8//u9v+32P/O5f/K4//w9v/S6P/////g7//Q5//d7v/f7v+83P/a7P/e7f/D4P/O5f/x9v/K4v+/3f/x+P+72v/z+f/J4v+73P/1+f/0+//0+f/R6f/o8//l8f+/3P+52v/N5v+22v/x9//Q5//g7v/a7P+22f/3/P/O5f/0+v/j8P/i7//g7v/w9//d7v/r9f/O5P/R5v/d7f/e7v+22P/v9//D3//I4v/O5f/b6/+12P/u9f/1+v/v9v+93P/N5P/u9v/f7v/z+f/d7f+42f/L4/+22P/O5f/c7P+62v/h7//1+v/v9//J4v/Q5v/H4f/x9//j8P++3f8KzdOCAAAAYXRSTlMAhy4jCwIQEQYEO6S0ISMyxa45+PYZ53urj7RXOfij8EB9iOZgkcm7aAH1YLn5me9HScRbeHjyKd6ZzohH6imvcFlycWrD4N/gv2C/47vEXY+XTtGn6tbihLbq+MDb05za7zgX5AAAAvJJREFUeNrtVWdX20AQPGPL3eAKmNiYDqaG3kLvJbQEQkmTm5AtB4zJ/8+V3ZOe/MIXPvEe90me2/Gc9nZGhJBPwZWFSBMxV1P73uXoRwvg7v8SH5jxmYBvNpxZSrrY43KxWH/Ix6bl3ulYtVAqVRwScO6Wc7n7xwEXAq4l1dA07VuIav8p1ik9P9cMe83D1UKhRPmor0yVOf1xEenjqsr5YYUEgZ7vgb2e5ypXr3QAEK1x+v3jkwvE/1K6Zmi6niIrRXZ4yh+E6s/PVL1A6ZcADFF6mdOjAkgxcUOj9G1yTNU5PQLVa9Uq5VdKlX0ARmo1If7UIoAWqm4wcb2PRPDwbVDdTdX54dsBWMXDx70C8KapPFefJ00xSq/n870eqPa0incfk3f5FegzCMwydUPXA/T5MMbevddPcPlbmfrwqQQ8RznW+U6fvPaAqtLGH7j5TS0PBtu4NpZ3d4w6nBYgO9I5tThJLGtyPBzoy5L39UbX6+/9MMZm/uWpKzdOncGnTsz8Q8PMV16cefA7nfmI8LvNcQWb48p2xxnguFf6fUX43ZY2JVva5Oxpo0LaBIvM7y9mXbkh68DveoomrXh3mbTOYVC3JG2uMWk1qh5WaM5zdTPns//J+XtrzrPD6zTnX/eVeV9veLmnz64vfBbAd+FwnLqtJS1b/UNOKxDaTm4KA/kXmGV2ms0hO2FTtx+VgLefWS6+ZbI308zvSWrgxJyY+Z9eLL4Sfp9IYLED/L6BwAb4PUnIL/T7Ouyto9/P8aDo91sFPJRBv4fIAvp9Darb0e9XAHyQfl8VwLz0+waZQ7/vQPUJ+n0CgC3p9y4BdKno902yA37Pn0H1Oap/J1BdA78/ueGqVPC73kUOUd2POY3qQ9jL3ZpQvyGwbpg8Zf+g7Q6K1l0T2WjR+Q4JRO9442/lVSQyvPPpFEuXtuP6w28eNtirvUKpdV0xgdWju1y802MCnkDGSB/M47/hjtxO2ABvSCFZ+Ys+KiE+J/8AdlNUC0LetfoAAAAASUVORK5CYII=",lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAASFBMVEVHcEwNbv8Mbf8TcP8Nbv8Nb/8Nb/8Nbv8qf/8Nb/8Nbv8Mb/8PcP8Nbv8Pcv8Mb/8Pb/8PcP8Ocf8Nbv8Ob/8Vf/8Nbv8Nbv+Jn3KrAAAAF3RSTlMAlLEZ0ID47wZx3WBTiDGeOUQk57UMuVjVO7sAAAHeSURBVHjarVjZkoMgEARkuURIXI///9Mtga0igkGZ6RcThXa6cTiGfIMbJ8aNFEIazqbRkR4Mmsn9BMn08IxFjdt+gW1Ut2lW/bt/wa9e70Wjc0lm8XSaqF9MLlHfiOrFM0dc1kG5zDX+aoVDU0vBrKo8tkykBvRrUDNPNHS4HE2aqPh8zfNOoUeaa6ok/U0uYEWuv+2jsKSKcQ/wijShfGw7VuOJzzS5BR1b24o/oqa75aco2s/hvpnJbcwmvPnUQ/F0t4Hy3fzT0jiiDV2FuvitfIxn4fMDx19nYZ48hj+J0+n/Yyj+oWSVMcIOBE/kmgdESRdoFpI65kMx9BEN4pgzoysjIKAYUsq5LQUECGkLvw5KRrrBjv7Dv9W2n8gGuxOjVP1ESiZF6QrTJglxRZZ1ZZwjY7wA4OIHMB0XBSFSB8MUFBoCggkuH/m7wIiWY+4IdB5G5IMoWSaa/WnAlukmiQhO5Zj2JsoOokIk20SyJKpI420iXkqrmO14k8eVZqMNP9oHiZYiaEmLNo1gTWxoUy3a5I+2HGEtkGhLNtomAmtbg7zRgm/9sDej8O0x/oYdfoTAP9TAj1nwgx/+URR+OIYf15ELCPCSBn6RBV72gRei8Etj+MU6tPLhH41GXfO43AIjAAAAAElFTkSuQmCC",it="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAS1BMVEVHcEwNb/8Nbv8Ocf8Mbv8Nbf8Nbv8Qcf8zmf8Nbv8Nbv8Wbv8Ocv8Nb/8Nb/8NcP8Nbf8PcP8cjf8Nbv8Nbv8NcP8OcP8Nbv8Nbv+sb0c3AAAAGHRSTlMAXpwhsunxPwX5khcy3m5xzVQJ0oh0Rrn3uGXUAAACAUlEQVR42q2YWZKFIAxFg4KAiLM+9r/SLgNdj24VFXM+tMrhmkCCJJCiYTOfrNBa2InPrIEcTMsr94+KtwYeMbKPO+HDxvsyi3AJxHJPSnWxjOVFPc91wW0s1Sm4RE7RiDTRC6qJRm2SV+bUzqP5oA5uD1w7T500quyDTF2ePlIHqb5MuBVMLwwkMEVw/dS9QftPXQZe4w3XAxzCgjkKLlHBKHZoj0M6uEXnkAObpEa/V7jJWqF3cjcZeN2WcJvS4pf/vaH6cPU+4du9ghgfhys8YvWRCRESL7XwkNZtyMixCecdHlNg3ql4LtHZY5gQDI5R/Z+IGXHdOItno53T5izGcVUZwbMkHZM4DknnlsggbfKEjP6axPwk5glB/c25z2ZQmStUbiZ90LjtQQ65QsC3++Y3qoZ8oQFjOShWKl9IVcEjf84WCpaEkGrfCLU+nBme3gg1PgDm7aTeCKntgRk9tPBGCCyO8oTHN0JoywR2n7BGxnS4UsgYs09cC2KXaEy7CzTbpZsAjSMVI9wlAmLmTZtMiMw1ssEmm36ygCRLEbKkJVtGqBY2sqWWbPEn+x1R/SDJftlkmwiqbQ3ZRotq60e/GQWZLkPSBYmk2rCTlRCERQ19mRUXfu2TMsQNVKUoVXFMVa5TNRCoWhpUTRb6tg99I4q+NUbfrAuoJ+3DH6O5cGG4augGAAAAAElFTkSuQmCC";const j=o=>(H("data-v-50f28e3f"),o=o(),W(),o),ct={class:"container"},rt=j(()=>e("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),dt={key:0,class:"benefit"},vt={class:"benefit-title"},_t=j(()=>e("div",{class:"line"},null,-1)),pt={key:0,class:"box-title box-title-chart"},ft=j(()=>e("img",{src:re,alt:""},null,-1)),mt=w(" \u4FDD\u5355\u5E74\u5EA6"),ht=w("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),At=w("\u5C81\u65F6 "),gt=j(()=>e("img",{src:re,alt:""},null,-1)),bt={key:1},yt={class:"box"},Ct={class:"box-title"},Pt=j(()=>e("img",{src:re,alt:""},null,-1)),kt=w(" \u4FDD\u5355\u5E74\u5EA6"),Et=w("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),Vt=w("\u5C81\u65F6 "),Bt=j(()=>e("img",{src:re,alt:""},null,-1)),wt={class:"box-price"},Ft={class:"text1"},Dt={class:"text2"},It={key:2,style:{width:"100%, minWidth: 338px"}},Rt={class:"slider"},St=j(()=>e("img",{src:lt,alt:""},null,-1)),xt=[St],$t={style:{flex:"1",margin:"0px 5px"}},Mt={class:"custom-button"},Nt=j(()=>e("img",{src:it,alt:""},null,-1)),Ot=[Nt],Lt=j(()=>e("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),Ut={class:"btn-two"},Tt=w("\u56FE\u8868\u5C55\u793A"),jt=w("\u8D8B\u52BF\u5C55\u793A"),Qt=Z({props:{info:{type:Object,default:()=>{}}},setup(o){const m=o,B=y(0),P=y(0),c=y(0),t=y(),v=y(0),r=y(!0),u=(l,k)=>{const R=[],h=[];for(let F=l,p=0;F<=k;F++,p++)R.push(F.toString()),h.push(p+1);return{a:R,year:h}},n=l=>{if(!(l!=null&&l.benefitRiskResultVOList))return;const k=l==null?void 0:l.benefitRiskResultVOList[B.value];P.value=k.ageBegin+1,v.value=k.ageBegin+1,c.value=k.ageEnd},a=()=>{var F,p,Q;const l=(p=(F=m.info)==null?void 0:F.benefitRiskResultVOList)==null?void 0:p[B.value],{a:k,year:R}=u(P.value,c.value),h={index:k.indexOf(v.value.toString()),age:k,year:R,result:(Q=l==null?void 0:l.benefitRiskItemResultVOList)==null?void 0:Q[0]};t.value=h},_=()=>{v.value>c.value-1||(v.value+=1,a())},b=()=>{v.value>P.value&&(v.value-=1,a())},$=l=>{B.value=l.name,n(m.info),a()},I=l=>{l==="1"?r.value=!0:r.value=!1};return se(()=>m.info,l=>{l&&(n(l),a())},{deep:!0,immediate:!0}),se(v,()=>{a()}),(l,k)=>{const R=g("van-slider"),h=g("van-button"),F=g("van-tab"),p=g("van-tabs");return s(),A("div",ct,[rt,C(p,{active:B.value,"title-active-color":"#0d6efe","title-inactive-color":"#393D46",shrink:"",onClickTab:$},{default:f(()=>{var Q;return[(s(!0),A(L,null,U((Q=m.info)==null?void 0:Q.benefitRiskResultVOList,(X,ee)=>(s(),x(F,{key:ee,name:ee,title:X.riskName},{default:f(()=>{var G,oe,ae,ne,te,ue,le,K,ie,ce,d,i,V,M,N,q;return[ee==B.value?(s(),A("div",dt,[e("div",vt,E(X==null?void 0:X.riskName),1),_t,r.value?O("",!0):(s(),A("p",pt,[ft,mt,e("span",null,E((ae=(G=t.value)==null?void 0:G.year)==null?void 0:ae[(oe=t.value)==null?void 0:oe.index]),1),ht,e("span",null,E((ue=(ne=t.value)==null?void 0:ne.age)==null?void 0:ue[(te=t.value)==null?void 0:te.index]),1),At,gt])),r.value?(s(),A("div",bt,[e("div",yt,[e("p",Ct,[Pt,kt,e("span",null,E((ie=(le=t.value)==null?void 0:le.year)==null?void 0:ie[(K=t.value)==null?void 0:K.index]),1),Et,e("span",null,E((i=(ce=t.value)==null?void 0:ce.age)==null?void 0:i[(d=t.value)==null?void 0:d.index]),1),Vt,Bt]),e("div",wt,[(s(!0),A(L,null,U((M=(V=t.value)==null?void 0:V.result)==null?void 0:M.headers,(S,T)=>{var z,ve,_e,pe,fe;return s(),A("div",{key:T,style:{width:"33%"}},[e("p",Ft,E(D(be)(Number((fe=(pe=(ve=(z=t.value)==null?void 0:z.result)==null?void 0:ve.dataList)==null?void 0:pe[(_e=t.value)==null?void 0:_e.index])==null?void 0:fe[T]))),1),e("p",Dt,E(S)+"(\u5143\uFF09",1)])}),128))])])])):O("",!0),r.value?O("",!0):(s(),A("div",It,[C(je,{min:P.value,max:c.value,current:v.value,data:(q=(N=t.value)==null?void 0:N.result)==null?void 0:q.benefitRiskItemList},null,8,["min","max","current","data"])])),e("div",Rt,[e("div",{class:"add lf",onClick:b},xt),e("div",$t,[P.value?(s(),x(R,{key:0,modelValue:v.value,"onUpdate:modelValue":k[0]||(k[0]=S=>v.value=S),min:P.value,max:c.value,"bar-height":"8px"},{button:f(()=>[e("div",Mt,E(v.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):O("",!0)]),e("div",{class:"add rg",onClick:_},Ot)]),Lt,e("div",Ut,[C(h,{round:"",plain:!r.value,type:"primary",class:"btn",onClick:k[1]||(k[1]=S=>I("1"))},{default:f(()=>[Tt]),_:1},8,["plain"]),C(h,{round:"",plain:r.value,type:"primary",class:"btn",onClick:k[2]||(k[2]=S=>I("2"))},{default:f(()=>[jt]),_:1},8,["plain"])])])):O("",!0)]}),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])])}}});var zt=Y(Qt,[["__scopeId","data-v-50f28e3f"]]),Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAJFBMVEVHcEwGev8Ie/8He/8QhP8Hff8Lff8ff/8Kf/8HeP8Jev8KfP88zNEzAAAADHRSTlMATTtEDx4rCBgkNDEC504AAAAAu0lEQVR42t2TzRKDMAiEV35CSN7/fTtiKOnBWz2034nZRRxYBdCJeQgKGczUz6odgSLRS2hAPxaST6XQQVm25bUUCFxlUM1c3ljeKG9m6cvzFCbs3ZXkJAN61CRIhKI3FjRtTbFzCoZ/QSlX35an2HjmORPPc0Jvs9VHsm01/kLrJcY18mMoGyAcliExCktw0t0FO+Le8WOY3QnO8RUX/RQ8T1QRVUj0cLZzefMb2UY9tmzH9iOLqiDZhBeX/QTFelEoEAAAAABJRU5ErkJggg==";const Zt=o=>(H("data-v-524d386a"),o=o(),W(),o),Xt={class:"container"},Gt={class:"common-title"},Kt={class:"title"},qt=Zt(()=>e("img",{src:Ce,class:"ig"},null,-1)),Jt={class:"product-detail"},Ht=Z({props:{info:{type:Object,default:()=>{}}},setup(o){const m=o;return(B,P)=>{var v;const c=g("van-collapse-item"),t=g("van-collapse");return s(),A("div",Xt,[(s(!0),A(L,null,U((v=m.info)==null?void 0:v.liabilityByRiskVOList,(r,u)=>(s(),A("div",{key:u},[e("div",Gt,[e("div",Kt,[qt,w(" "+E(r.riskName),1)])]),e("div",Jt,[C(t,{modelValue:r.riskName1,"onUpdate:modelValue":n=>r.riskName1=n,accordion:"","is-link":!1,border:!1,size:"middle"},{default:f(()=>[(s(!0),A(L,null,U(r.proposalRiskLiabilityVOList,(n,a)=>(s(),x(c,{key:a,title:n.liabilityName,name:a,"value-class":"price",value:n.liabilityIndemnityContent},{default:f(()=>[w(E(n.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128))])}}});var Wt=Y(Ht,[["__scopeId","data-v-524d386a"]]);const Yt=o=>(H("data-v-4990fe38"),o=o(),W(),o),es={class:"container"},ts={class:"common-title"},ss={class:"title"},os=Yt(()=>e("img",{src:Ce,class:"ig"},null,-1)),as={class:"product-detail"},ns=Z({props:{info:{type:Object,default:()=>{}}},setup(o){const m=o;return(B,P)=>{var r;const c=g("ProCell"),t=g("van-collapse-item"),v=g("van-collapse");return s(),A("div",es,[(s(!0),A(L,null,U((r=m.info)==null?void 0:r.liabilityByTopTypeVOList,(u,n)=>(s(),A("div",{key:n},[e("div",null,[e("div",ts,[e("div",ss,[os,w(" "+E(u.liabilityTopTypeName),1)])]),e("div",as,[C(v,{modelValue:u.riskName1,"onUpdate:modelValue":a=>u.riskName1=a,accordion:"","is-link":!1,border:!1,size:"middle"},{default:f(()=>[(s(!0),A(L,null,U(Object.keys(u.proposalRiskLiabilityVOMap),(a,_)=>(s(),x(t,{key:_,title:a,name:_,"value-class":"price"},{default:f(()=>[(s(!0),A(L,null,U(u.proposalRiskLiabilityVOMap[a],b=>(s(),x(c,{key:b.liabilityId,title:b.liabilityName,content:b.liabilityIndemnityContent||""},null,8,["title","content"]))),128))]),_:2},1032,["title","name"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]))),128))])}}});var us=Y(ns,[["__scopeId","data-v-4990fe38"]]);const Pe=o=>(H("data-v-ca64694e"),o=o(),W(),o),ls={class:"com-insured-product-wrapper"},is={class:"container"},cs=Pe(()=>e("span",{class:"clear-all"},null,-1)),rs=Pe(()=>e("span",{class:"title"}," \u9009\u62E9\u6295\u4FDD\u4EA7\u54C1 ",-1)),ds={class:"popup-body"},vs={class:"cell-title"},_s={class:"title"},ps={class:"error-message"},fs={class:"footer-button"},ms=w("\u7ACB\u5373\u6295\u4FDD"),hs=Z({props:{isShow:{type:Boolean,default:!0},dataSource:{default:()=>[]}},emits:["close","finished"],setup(o,{emit:m}){const B=o,P={insured:"\u5DF2\u901A\u8FC7\u8BA1\u5212\u4E66\u8FDB\u884C\u6295\u4FDD",unAuth:"\u4EA7\u54C1\u672A\u6388\u6743\uFF0C\u65E0\u6CD5\u8FDB\u884C\u6295\u4FDD",off:"\u4EA7\u54C1\u5DF2\u4E0B\u67B6\uFF0C\u65E0\u6CD5\u8FDB\u884C\u6295\u4FDD",cps:"\u4EA7\u54C1\u6682\u4E0D\u652F\u6301\u8BA1\u5212\u4E66\u8F6C\u6295\u4FDD"},c=y(""),t=y(null),v=y({isShow:B.isShow}),r=Ae(()=>a=>a.insured===1?P.insured:a.authStatus!==1?P.unAuth:a.insureMethod!==1?P.cps:""),u=a=>{r.value(a)||(t.value=a,c.value=a.productCode)},n=()=>{m("close")};return se(()=>B.isShow,a=>{v.value.isShow=a}),(a,_)=>{const b=g("van-radio"),$=g("VanCell"),I=g("van-cell-group"),l=g("van-radio-group"),k=g("VanButton"),R=g("VanPopup");return s(),A("div",ls,[C(R,{show:v.value.isShow,"onUpdate:show":_[2]||(_[2]=h=>v.value.isShow=h),position:"bottom",onClose:n},{default:f(()=>[e("div",is,[e("div",{class:"popup-header"},[cs,rs,e("span",{onClick:n},"X")]),e("div",ds,[C(l,{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=h=>c.value=h)},{default:f(()=>[C(I,null,{default:f(()=>[(s(!0),A(L,null,U(o.dataSource,h=>(s(),x($,{key:h.productCode,onClick:F=>u(h)},{"right-icon":f(()=>[C(b,{name:h.productCode,disabled:!!D(r)(h)},null,8,["name","disabled"])]),title:f(()=>[e("div",vs,[e("div",_s,[e("p",null,E(h.productName),1),e("span",ps,E(D(r)(h)),1)])])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),e("div",fs,[C(k,{block:"",type:"primary",disabled:!c.value,onClick:_[1]||(_[1]=h=>m("finished",t.value))},{default:f(()=>[ms]),_:1},8,["disabled"])])])]),_:1},8,["show"])])}}});var As=Y(hs,[["__scopeId","data-v-ca64694e"]]);const gs={class:"popup-body"},bs={class:""},ys={class:"radio-wrap"},Cs=["onClick"],Ps={class:"footer"},ks=w("\u786E\u5B9A"),Es=Z({props:{show:{type:Boolean,default:!1},themeList:{default:()=>[]}},emits:["submit","update:show"],setup(o,{emit:m}){var n,a;const B=o,{show:P,themeList:c}=D(B),t=y((n=c==null?void 0:c[0])==null?void 0:n.id),v=y((a=c==null?void 0:c[0])==null?void 0:a.id),r=_=>{t.value=_},u=()=>{var _;m("submit",v.value?t.value||((_=c==null?void 0:c[0])==null?void 0:_.id):v.value)};return(_,b)=>{const $=g("van-switch"),I=g("van-cell"),l=g("VanRadio"),k=g("VanCellGroup"),R=g("VanRadioGroup"),h=g("VanButton"),F=g("ProPopup");return s(),x(F,{show:D(P),"onUpdate:show":b[2]||(b[2]=p=>ge(P)?P.value=p:null),class:"theme-select-wrap",title:"\u9009\u62E9\u8BA1\u5212\u4E66\u5C01\u9762",onClose:b[3]||(b[3]=p=>m("update:show",!1))},{default:f(()=>[e("div",gs,[C(I,{center:"",title:"\u5C01\u9762\u56FE"},{"right-icon":f(()=>[C($,{modelValue:v.value,"onUpdate:modelValue":b[0]||(b[0]=p=>v.value=p),"inactive-value":0,"active-value":D(c)[0].id,size:"24"},null,8,["modelValue","active-value"])]),_:1}),e("div",bs,[C(R,{modelValue:t.value,"onUpdate:modelValue":b[1]||(b[1]=p=>t.value=p)},{default:f(()=>[C(k,{inset:""},{default:f(()=>[e("div",ys,[(s(!0),A(L,null,U(D(c),p=>(s(),A("div",{key:p.id,class:"radio-item"},[e("div",{class:"radio-img",style:Ee({backgroundImage:`url(${p.showConfig.thumbnailImage})`}),onClick:Q=>r(p.id)},[C(l,{name:p.id},null,8,["name"])],12,Cs),e("span",{class:Ve(`${t.value===p.id?"checked":""}`)},E(p.name),3)]))),128))])]),_:1})]),_:1},8,["modelValue"])])]),e("div",Ps,[C(h,{type:"primary",disabled:!(t.value||!v.value),block:"",onClick:u},{default:f(()=>[ks]),_:1},8,["disabled"])])]),_:1},8,["show"])}}});const ke=o=>(H("data-v-50b0e2c8"),o=o(),W(),o),Vs={class:"page-composition-proposal"},Bs={class:"head-bg"},ws={class:"container"},Fs=ke(()=>e("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),Ds=ke(()=>e("span",{class:"poiner"},null,-1)),Is={key:0,class:"footer-btn"},Rs=w("\u5206\u4EAB"),Ss=w("\u751F\u6210PDF"),xs=w("\u7ACB\u5373\u6295\u4FDD"),$s=Z({setup(o){const m=y(!0),B=Be(),P=we(),{isShare:c,id:t,themeId:v}=B.query,r=y(),u=y(""),n=y(""),a=y({}),_=y([]);y();const[b,$]=me(),[I,l]=me(),k=y(""),R=y([]),h=y(),F=y("share");let p="";const Q=()=>{m.value=!m.value},X=d=>d===+ye.MALE,ee=Ae(()=>!!_.value.filter(i=>i.authStatus===1&&i.insureMethod===1).length);se(()=>r.value,d=>{const{gender:i,name:V,birthday:M}=d,N=he().diff(M,"y");X(i)?n.value=`${V||N}\u5C81\u5148\u751F\u7684\u8BA1\u5212\u4E66`:n.value=`${V||N}\u5C81\u5973\u58EB\u7684\u8BA1\u5212\u4E66`});const G=d=>{var i;a.value={title:`${(i=r.value)==null?void 0:i.name}\u7684\u8BA1\u5212\u4E66`,desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:d,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"}},oe=async()=>{try{let d=null;c?d=await Ie(`${t}?tenantId=${B.query.tenantId}`):d=await Re(t);const{code:i,data:V}=d;if(i==="10000"){const M=(V==null?void 0:V.proposalInsuredVOList[0])||{};r.value=M,u.value=V==null?void 0:V.tenantId,p=`${de}/proposalCover?id=${t}&isShare=1&tenantId=${u.value}`,G(p)}}catch{J("\u63A5\u53E3\u8BF7\u6C42\u5931\u8D25")}},ae=async()=>{const{code:d,data:i}=await xe();d==="10000"&&(R.value=i||[])},ne=()=>{$e({proposalId:t}).then(({code:d,data:i})=>{d==="10000"&&(_.value=i)})},te=d=>{const{productCode:i,insurerCode:V,tenantProductCode:M}=d;Me({productCode:i,proposalId:t}).then(({code:N,data:q,message:S})=>{N==="10000"&&(q?Ue({insurerCode:V,productCode:M,proposalId:t}).then(({code:T,data:z})=>{T==="10000"&&(window.location.href=z)}):J(S))})},ue=()=>{var d,i;((d=_.value)==null?void 0:d.length)===1?te((i=_.value)==null?void 0:i[0]):$(!0)},le=()=>{F.value="share",R.value.length?l(!0):h.value.handleShare()},K=d=>{if(F.value="pdf",!t){J("PDF\u751F\u6210\u5931\u8D25");return}J.loading({message:"PDF\u751F\u6210\u4E2D...",forbidClick:!0}),Se({id:t,themeHistoryId:d}).then(i=>{const{code:V,message:M}=i;V==="10000"&&(J.clear(),M?P.push(`/pdfViewer?url=${encodeURIComponent(M)}&title=${n.value}`):J("\u8BA1\u5212\u4E66\u4E3A\u7A7A"))})},ie=async d=>{if(!d)l(!1),F.value==="pdf"?K():(p=`${de}/proposalCover?id=${t}&isShare=1&tenantId=${u.value}`,G(p),setTimeout(h.value.handleShare,100));else{const{code:i,data:V}=await Ne({themeId:d,proposalId:t});i==="10000"&&(l(!1),F.value==="pdf"?K(V):(p=`${de}/proposalCover?id=${t}&isShare=1&tenantId=${u.value}&themeId=${V}`,G(p),setTimeout(h.value.handleShare,100)))}},ce=()=>{F.value="pdf",R.value.length?l(!0):K()};return Fe(()=>{B.query.token&&new Le({source:"localStorage"}).set("token",B.query.token),c||(ne(),ae()),oe()}),(d,i)=>{const V=g("van-collapse-item"),M=g("van-collapse"),N=g("van-button"),q=g("ProPageWrap");return s(),x(q,null,{default:f(()=>[e("div",Vs,[e("div",Bs,E(n.value),1),C(ut,{info:r.value},null,8,["info"]),e("div",{class:"switch-btn",onClick:Q},E(m.value?"\u6309\u8D23\u4EFB\u663E\u793A":"\u6309\u9669\u79CD\u663E\u793A"),1),m.value?(s(),x(Wt,{key:0,info:r.value},null,8,["info"])):(s(),x(us,{key:1,info:r.value},null,8,["info"])),C(zt,{info:r.value},null,8,["info"]),e("div",ws,[Fs,C(M,{modelValue:k.value,"onUpdate:modelValue":i[0]||(i[0]=S=>k.value=S),accordion:"","is-link":!1,border:!1,size:"middle"},{default:f(()=>{var S;return[(s(!0),A(L,null,U((S=r.value)==null?void 0:S.insurerInfoVOList,(T,z)=>(s(),x(V,{key:z,name:z,"value-class":"price"},{title:f(()=>[e("div",null,[Ds,w(" "+E(T==null?void 0:T.insurerName),1)])]),default:f(()=>[w(" "+E(T.insurerDesc),1)]),_:2},1032,["name"]))),128))]}),_:1},8,["modelValue"])])]),D(c)?O("",!0):(s(),A("div",Is,[C(Qe,{ref_key:"shareButtonRef",ref:h,title:a.value.title,desc:a.value.desc,link:a.value.link,"img-url":a.value.imgUrl},{default:f(()=>[C(N,{type:"primary",class:"share-btn",onClick:i[1]||(i[1]=De(()=>le(),["stop"]))},{default:f(()=>[Rs]),_:1})]),_:1},8,["title","desc","link","img-url"]),C(N,{plain:"",type:"primary",class:"btn",onClick:ce},{default:f(()=>[Ss]),_:1}),D(ee)?(s(),x(N,{key:0,type:"primary",class:"btn",onClick:ue},{default:f(()=>[xs]),_:1})):O("",!0)])),D(b)?(s(),x(As,{key:1,"is-show":D(b),"data-source":_.value,onFinished:te,onClose:i[2]||(i[2]=S=>D($)(!1))},null,8,["is-show","data-source"])):O("",!0),(s(),x(Es,{key:+D(I),show:D(I),"onUpdate:show":i[3]||(i[3]=S=>ge(I)?I.value=S:null),"theme-list":R.value,onSubmit:ie},null,8,["show","theme-list"]))]),_:1})}}});var Qs=Y($s,[["__scopeId","data-v-50b0e2c8"]]);export{Qs as default};
