import{i as e,r as a,$ as l,m as t,s as i,B as s,x as n,L as o,C as u,d,n as v,G as r,a5 as c,a6 as m,l as p,t as f,p as A,F as b,H as g,A as h,E as k,M as y,U as P,P as V,aa as w,R as C,k as R,ac as I,T as S}from"./vendor-86ac9d42.js";import{a as x,b as O,g as N}from"./proposalList-a61089ff.js";import{q as M,p as U,c as E,a as B}from"./compositionProposal-7ce71a2a.js";import{_ as L,a2 as j,a1 as T,a3 as Q,S as Z,a4 as z,a5 as D}from"./index-0db00022.js";import{P as X}from"./index-d2233a13.js";import{_ as K}from"./index-4c5835f3.js";import{_ as G}from"./index-a5c5317c.js";const J=e=>(c("data-v-0ae855a4"),e=e(),m(),e),F={class:"container head-cover"},H={class:"info-detail"},q={class:"name"},_={class:"img"},W={key:0,src:"/static/assets/male.441ae760.png"},Y={key:1,src:"/static/assets/female.2dc8cc10.png"},$={clase:"p1"},ee={class:"p2"},ae={class:"fe"},le=r(" 首年保费： "),te=J((()=>s("div",{class:"line"},null,-1))),ie={class:"tp"};var se=L(e({props:{info:{type:Object,default:()=>{}}},setup(e){const r=e,c=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保额",dataIndex:"amount"},{title:"保障期间",dataIndex:"coveragePeriod",width:110},{title:"缴费期间",dataIndex:"chargePeriod",width:110},{title:"保费",dataIndex:"premium",width:120}],m=a([]),p=e=>e===+Q.MALE,f=e=>{const a=e.split("_");if("to_life"===e)return"保终身";switch(a[0]){case"year":return`${a[1]}年`;case"month":return`${a[1]}月`;case"day":return`${a[1]}天`;case"to":return`保至${a[1]}岁`;default:return""}},A=e=>{const a=e.split("_");switch(a[0]){case"year":return`${a[1]}年交`;case"month":return`${a[1]}月交`;case"to":return`交至${a[1]}岁`;case"single":return"趸缴";default:return""}};return l((()=>r.info),(e=>{(e=>{const a=[];null==e||e.forEach((e=>{const{riskName:l,amount:t,coveragePeriod:i,chargePeriod:s,premium:n}=e;a.push({riskName:l,amount:t,coveragePeriod:f(i),chargePeriod:A(s),premium:n})})),m.value=a})(null==e?void 0:e.proposalProductRiskVOList)}),{deep:!0,immediate:!0}),(a,l)=>{var f,A,b,g,h,k;return t(),i("div",F,[s("div",H,[s("div",q,[s("div",_,[p(null==(f=r.info)?void 0:f.gender)?(t(),i("img",W)):n("",!0),p(null==(A=r.info)?void 0:A.gender)?n("",!0):(t(),i("img",Y))]),s("div",null,[s("p",$,o(null==(b=r.info)?void 0:b.name),1),s("p",ee,o(u(j)[null==(g=r.info)?void 0:g.gender])+"，"+o(u(d)().diff(null==(h=e.info)?void 0:h.birthday,"y"))+"岁",1)])]),s("div",ae,[le,s("span",null,"¥"+o(u(T)(null==(k=r.info)?void 0:k.totalPremium)),1)])]),te,s("div",ie,[m.value.length>0?(t(),v(X,{key:0,columns:c,class:"table","data-source":m.value},null,8,["data-source"])):n("",!0)])])}}}),[["__scopeId","data-v-0ae855a4"]]),ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAABYlBMVEVHcEzb7f/r9P/a8P/T6f/////P5//p+//X///////q9v+62v/z+f/D3f/w9//E5P+52//x+P/R6v/z+f/J4//g9P/h8P/w9//g7/+32v/b7P/b7f+62/+72//L4/+83P/D4P/i8P/o8//u9v+32P/O5f/K4//w9v/S6P/////g7//Q5//d7v/f7v+83P/a7P/e7f/D4P/O5f/x9v/K4v+/3f/x+P+72v/z+f/J4v+73P/1+f/0+//0+f/R6f/o8//l8f+/3P+52v/N5v+22v/x9//Q5//g7v/a7P+22f/3/P/O5f/0+v/j8P/i7//g7v/w9//d7v/r9f/O5P/R5v/d7f/e7v+22P/v9//D3//I4v/O5f/b6/+12P/u9f/1+v/v9v+93P/N5P/u9v/f7v/z+f/d7f+42f/L4/+22P/O5f/c7P+62v/h7//1+v/v9//J4v/Q5v/H4f/x9//j8P++3f8KzdOCAAAAYXRSTlMAhy4jCwIQEQYEO6S0ISMyxa45+PYZ53urj7RXOfij8EB9iOZgkcm7aAH1YLn5me9HScRbeHjyKd6ZzohH6imvcFlycWrD4N/gv2C/47vEXY+XTtGn6tbihLbq+MDb05za7zgX5AAAAvJJREFUeNrtVWdX20AQPGPL3eAKmNiYDqaG3kLvJbQEQkmTm5AtB4zJ/8+V3ZOe/MIXPvEe90me2/Gc9nZGhJBPwZWFSBMxV1P73uXoRwvg7v8SH5jxmYBvNpxZSrrY43KxWH/Ix6bl3ulYtVAqVRwScO6Wc7n7xwEXAq4l1dA07VuIav8p1ik9P9cMe83D1UKhRPmor0yVOf1xEenjqsr5YYUEgZ7vgb2e5ypXr3QAEK1x+v3jkwvE/1K6Zmi6niIrRXZ4yh+E6s/PVL1A6ZcADFF6mdOjAkgxcUOj9G1yTNU5PQLVa9Uq5VdKlX0ARmo1If7UIoAWqm4wcb2PRPDwbVDdTdX54dsBWMXDx70C8KapPFefJ00xSq/n870eqPa0incfk3f5FegzCMwydUPXA/T5MMbevddPcPlbmfrwqQQ8RznW+U6fvPaAqtLGH7j5TS0PBtu4NpZ3d4w6nBYgO9I5tThJLGtyPBzoy5L39UbX6+/9MMZm/uWpKzdOncGnTsz8Q8PMV16cefA7nfmI8LvNcQWb48p2xxnguFf6fUX43ZY2JVva5Oxpo0LaBIvM7y9mXbkh68DveoomrXh3mbTOYVC3JG2uMWk1qh5WaM5zdTPns//J+XtrzrPD6zTnX/eVeV9veLmnz64vfBbAd+FwnLqtJS1b/UNOKxDaTm4KA/kXmGV2ms0hO2FTtx+VgLefWS6+ZbI308zvSWrgxJyY+Z9eLL4Sfp9IYLED/L6BwAb4PUnIL/T7Ouyto9/P8aDo91sFPJRBv4fIAvp9Darb0e9XAHyQfl8VwLz0+waZQ7/vQPUJ+n0CgC3p9y4BdKno902yA37Pn0H1Oap/J1BdA78/ueGqVPC73kUOUd2POY3qQ9jL3ZpQvyGwbpg8Zf+g7Q6K1l0T2WjR+Q4JRO9442/lVSQyvPPpFEuXtuP6w28eNtirvUKpdV0xgdWju1y802MCnkDGSB/M47/hjtxO2ABvSCFZ+Ys+KiE+J/8AdlNUC0LetfoAAAAASUVORK5CYII=";const oe=e=>(c("data-v-50f28e3f"),e=e(),m(),e),ue={class:"container"},de=oe((()=>s("div",{class:"common-title"},"利益演示",-1))),ve={key:0,class:"benefit"},re={class:"benefit-title"},ce=oe((()=>s("div",{class:"line"},null,-1))),me={key:0,class:"box-title box-title-chart"},pe=oe((()=>s("img",{src:ne,alt:""},null,-1))),fe=r(" 保单年度"),Ae=r("年度，被保人"),be=r("岁时 "),ge=oe((()=>s("img",{src:ne,alt:""},null,-1))),he={key:1},ke={class:"box"},ye={class:"box-title"},Pe=oe((()=>s("img",{src:ne,alt:""},null,-1))),Ve=r(" 保单年度"),we=r("年度，被保人"),Ce=r("岁时 "),Re=oe((()=>s("img",{src:ne,alt:""},null,-1))),Ie={class:"box-price"},Se={class:"text1"},xe={class:"text2"},Oe={key:2,style:{width:"100%, minWidth: 338px"}},Ne={class:"slider"},Me=[oe((()=>s("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAASFBMVEVHcEwNbv8Mbf8TcP8Nbv8Nb/8Nb/8Nbv8qf/8Nb/8Nbv8Mb/8PcP8Nbv8Pcv8Mb/8Pb/8PcP8Ocf8Nbv8Ob/8Vf/8Nbv8Nbv+Jn3KrAAAAF3RSTlMAlLEZ0ID47wZx3WBTiDGeOUQk57UMuVjVO7sAAAHeSURBVHjarVjZkoMgEARkuURIXI///9Mtga0igkGZ6RcThXa6cTiGfIMbJ8aNFEIazqbRkR4Mmsn9BMn08IxFjdt+gW1Ut2lW/bt/wa9e70Wjc0lm8XSaqF9MLlHfiOrFM0dc1kG5zDX+aoVDU0vBrKo8tkykBvRrUDNPNHS4HE2aqPh8zfNOoUeaa6ok/U0uYEWuv+2jsKSKcQ/wijShfGw7VuOJzzS5BR1b24o/oqa75aco2s/hvpnJbcwmvPnUQ/F0t4Hy3fzT0jiiDV2FuvitfIxn4fMDx19nYZ48hj+J0+n/Yyj+oWSVMcIOBE/kmgdESRdoFpI65kMx9BEN4pgzoysjIKAYUsq5LQUECGkLvw5KRrrBjv7Dv9W2n8gGuxOjVP1ESiZF6QrTJglxRZZ1ZZwjY7wA4OIHMB0XBSFSB8MUFBoCggkuH/m7wIiWY+4IdB5G5IMoWSaa/WnAlukmiQhO5Zj2JsoOokIk20SyJKpI420iXkqrmO14k8eVZqMNP9oHiZYiaEmLNo1gTWxoUy3a5I+2HGEtkGhLNtomAmtbg7zRgm/9sDej8O0x/oYdfoTAP9TAj1nwgx/+URR+OIYf15ELCPCSBn6RBV72gRei8Etj+MU6tPLhH41GXfO43AIjAAAAAElFTkSuQmCC",alt:""},null,-1)))],Ue={style:{flex:"1",margin:"0px 5px"}},Ee={class:"custom-button"},Be=[oe((()=>s("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAS1BMVEVHcEwNb/8Nbv8Ocf8Mbv8Nbf8Nbv8Qcf8zmf8Nbv8Nbv8Wbv8Ocv8Nb/8Nb/8NcP8Nbf8PcP8cjf8Nbv8Nbv8NcP8OcP8Nbv8Nbv+sb0c3AAAAGHRSTlMAXpwhsunxPwX5khcy3m5xzVQJ0oh0Rrn3uGXUAAACAUlEQVR42q2YWZKFIAxFg4KAiLM+9r/SLgNdj24VFXM+tMrhmkCCJJCiYTOfrNBa2InPrIEcTMsr94+KtwYeMbKPO+HDxvsyi3AJxHJPSnWxjOVFPc91wW0s1Sm4RE7RiDTRC6qJRm2SV+bUzqP5oA5uD1w7T500quyDTF2ePlIHqb5MuBVMLwwkMEVw/dS9QftPXQZe4w3XAxzCgjkKLlHBKHZoj0M6uEXnkAObpEa/V7jJWqF3cjcZeN2WcJvS4pf/vaH6cPU+4du9ghgfhys8YvWRCRESL7XwkNZtyMixCecdHlNg3ql4LtHZY5gQDI5R/Z+IGXHdOItno53T5izGcVUZwbMkHZM4DknnlsggbfKEjP6axPwk5glB/c25z2ZQmStUbiZ90LjtQQ65QsC3++Y3qoZ8oQFjOShWKl9IVcEjf84WCpaEkGrfCLU+nBme3gg1PgDm7aTeCKntgRk9tPBGCCyO8oTHN0JoywR2n7BGxnS4UsgYs09cC2KXaEy7CzTbpZsAjSMVI9wlAmLmTZtMiMw1ssEmm36ygCRLEbKkJVtGqBY2sqWWbPEn+x1R/SDJftlkmwiqbQ3ZRotq60e/GQWZLkPSBYmk2rCTlRCERQ19mRUXfu2TMsQNVKUoVXFMVa5TNRCoWhpUTRb6tg99I4q+NUbfrAuoJ+3DH6O5cGG4augGAAAAAElFTkSuQmCC",alt:""},null,-1)))],Le=oe((()=>s("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),je={class:"btn-two"},Te=r("图表展示"),Qe=r("趋势展示");var Ze=L(e({props:{info:{type:Object,default:()=>{}}},setup(e){const d=e,r=a(0),c=a(0),m=a(0),h=a(),k=a(0),y=a(!0),P=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[r.value];c.value=a.ageBegin+1,k.value=a.ageBegin+1,m.value=a.ageEnd},V=()=>{var e,a,l;const t=null==(a=null==(e=d.info)?void 0:e.benefitRiskResultVOList)?void 0:a[r.value],{a:i,year:s}=((e,a)=>{const l=[],t=[];for(let i=e,s=0;i<=a;i++,s++)l.push(i.toString()),t.push(s+1);return{a:l,year:t}})(c.value,m.value),n={index:i.indexOf(k.value.toString()),age:i,year:s,result:null==(l=null==t?void 0:t.benefitRiskItemResultVOList)?void 0:l[0]};h.value=n},w=()=>{k.value>m.value-1||(k.value+=1,V())},C=()=>{k.value>c.value&&(k.value-=1,V())},R=e=>{r.value=e.name,P(d.info),V()},I=e=>{y.value="1"===e};return l((()=>d.info),(e=>{e&&(P(e),V())}),{deep:!0,immediate:!0}),l(k,(()=>{V()})),(e,a)=>{const l=p("van-slider"),P=p("van-button"),V=p("van-tab"),S=p("van-tabs");return t(),i("div",ue,[de,f(S,{active:r.value,"title-active-color":"#0d6efe","title-inactive-color":"#393D46",shrink:"",onClickTab:R},{default:A((()=>{var e;return[(t(!0),i(b,null,g(null==(e=d.info)?void 0:e.benefitRiskResultVOList,((e,d)=>(t(),v(V,{key:d,name:d,title:e.riskName},{default:A((()=>{var p,V,R,S,x,O,N,M,U,E,B,L,j,Q,Z,z;return[d==r.value?(t(),i("div",ve,[s("div",re,o(null==e?void 0:e.riskName),1),ce,y.value?n("",!0):(t(),i("p",me,[pe,fe,s("span",null,o(null==(R=null==(p=h.value)?void 0:p.year)?void 0:R[null==(V=h.value)?void 0:V.index]),1),Ae,s("span",null,o(null==(O=null==(S=h.value)?void 0:S.age)?void 0:O[null==(x=h.value)?void 0:x.index]),1),be,ge])),y.value?(t(),i("div",he,[s("div",ke,[s("p",ye,[Pe,Ve,s("span",null,o(null==(U=null==(N=h.value)?void 0:N.year)?void 0:U[null==(M=h.value)?void 0:M.index]),1),we,s("span",null,o(null==(L=null==(E=h.value)?void 0:E.age)?void 0:L[null==(B=h.value)?void 0:B.index]),1),Ce,Re]),s("div",Ie,[(t(!0),i(b,null,g(null==(Q=null==(j=h.value)?void 0:j.result)?void 0:Q.headers,((e,a)=>{var l,n,d,v,r;return t(),i("div",{key:a,style:{width:"33%"}},[s("p",Se,o(u(T)(Number(null==(r=null==(v=null==(n=null==(l=h.value)?void 0:l.result)?void 0:n.dataList)?void 0:v[null==(d=h.value)?void 0:d.index])?void 0:r[a]))),1),s("p",xe,o(e)+"(元）",1)])})),128))])])])):n("",!0),y.value?n("",!0):(t(),i("div",Oe,[f(K,{min:c.value,max:m.value,current:k.value,data:null==(z=null==(Z=h.value)?void 0:Z.result)?void 0:z.benefitRiskItemList},null,8,["min","max","current","data"])])),s("div",Ne,[s("div",{class:"add lf",onClick:C},Me),s("div",Ue,[c.value?(t(),v(l,{key:0,modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e),min:c.value,max:m.value,"bar-height":"8px"},{button:A((()=>[s("div",Ee,o(k.value)+" 岁",1)])),_:1},8,["modelValue","min","max"])):n("",!0)]),s("div",{class:"add rg",onClick:w},Be)]),Le,s("div",je,[f(P,{round:"",plain:!y.value,type:"primary",class:"btn",onClick:a[1]||(a[1]=e=>I("1"))},{default:A((()=>[Te])),_:1},8,["plain"]),f(P,{round:"",plain:y.value,type:"primary",class:"btn",onClick:a[2]||(a[2]=e=>I("2"))},{default:A((()=>[Qe])),_:1},8,["plain"])])])):n("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])}}}),[["__scopeId","data-v-50f28e3f"]]),ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAJFBMVEVHcEwGev8Ie/8He/8QhP8Hff8Lff8ff/8Kf/8HeP8Jev8KfP88zNEzAAAADHRSTlMATTtEDx4rCBgkNDEC504AAAAAu0lEQVR42t2TzRKDMAiEV35CSN7/fTtiKOnBWz2034nZRRxYBdCJeQgKGczUz6odgSLRS2hAPxaST6XQQVm25bUUCFxlUM1c3ljeKG9m6cvzFCbs3ZXkJAN61CRIhKI3FjRtTbFzCoZ/QSlX35an2HjmORPPc0Jvs9VHsm01/kLrJcY18mMoGyAcliExCktw0t0FO+Le8WOY3QnO8RUX/RQ8T1QRVUj0cLZzefMb2UY9tmzH9iOLqiDZhBeX/QTFelEoEAAAAABJRU5ErkJggg==";const De={class:"container"},Xe={class:"common-title"},Ke={class:"title"},Ge=(e=>(c("data-v-524d386a"),e=e(),m(),e))((()=>s("img",{src:ze,class:"ig"},null,-1))),Je={class:"product-detail"};var Fe=L(e({props:{info:{type:Object,default:()=>{}}},setup(e){const a=e;return(e,l)=>{var n;const u=p("van-collapse-item"),d=p("van-collapse");return t(),i("div",De,[(t(!0),i(b,null,g(null==(n=a.info)?void 0:n.liabilityByRiskVOList,((e,a)=>(t(),i("div",{key:a},[s("div",Xe,[s("div",Ke,[Ge,r(" "+o(e.riskName),1)])]),s("div",Je,[f(d,{modelValue:e.riskName1,"onUpdate:modelValue":a=>e.riskName1=a,accordion:"","is-link":!1,border:!1,size:"middle"},{default:A((()=>[(t(!0),i(b,null,g(e.proposalRiskLiabilityVOList,((e,a)=>(t(),v(u,{key:a,title:e.liabilityName,name:a,"value-class":"price",value:e.liabilityIndemnityContent},{default:A((()=>[r(o(e.liabilityDesc),1)])),_:2},1032,["title","name","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])))),128))])}}}),[["__scopeId","data-v-524d386a"]]);const He={class:"container"},qe={class:"common-title"},_e={class:"title"},We=(e=>(c("data-v-4990fe38"),e=e(),m(),e))((()=>s("img",{src:ze,class:"ig"},null,-1))),Ye={class:"product-detail"};var $e=L(e({props:{info:{type:Object,default:()=>{}}},setup(e){const a=e;return(e,l)=>{var n;const u=p("ProCell"),d=p("van-collapse-item"),c=p("van-collapse");return t(),i("div",He,[(t(!0),i(b,null,g(null==(n=a.info)?void 0:n.liabilityByTopTypeVOList,((e,a)=>(t(),i("div",{key:a},[s("div",null,[s("div",qe,[s("div",_e,[We,r(" "+o(e.liabilityTopTypeName),1)])]),s("div",Ye,[f(c,{modelValue:e.riskName1,"onUpdate:modelValue":a=>e.riskName1=a,accordion:"","is-link":!1,border:!1,size:"middle"},{default:A((()=>[(t(!0),i(b,null,g(Object.keys(e.proposalRiskLiabilityVOMap),((a,l)=>(t(),v(d,{key:l,title:a,name:l,"value-class":"price"},{default:A((()=>[(t(!0),i(b,null,g(e.proposalRiskLiabilityVOMap[a],(e=>(t(),v(u,{key:e.liabilityId,title:e.liabilityName,content:e.liabilityIndemnityContent||""},null,8,["title","content"])))),128))])),_:2},1032,["title","name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])])))),128))])}}}),[["__scopeId","data-v-4990fe38"]]);const ea=e=>(c("data-v-ca64694e"),e=e(),m(),e),aa={class:"com-insured-product-wrapper"},la={class:"container"},ta=ea((()=>s("span",{class:"clear-all"},null,-1))),ia=ea((()=>s("span",{class:"title"}," 选择投保产品 ",-1))),sa={class:"popup-body"},na={class:"cell-title"},oa={class:"title"},ua={class:"error-message"},da={class:"footer-button"},va=r("立即投保");var ra=L(e({props:{isShow:{type:Boolean,default:!0},dataSource:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:n}){const d=e,r="已通过计划书进行投保",c="产品未授权，无法进行投保",m="产品暂不支持计划书转投保",k=a(""),y=a(null),P=a({isShow:d.isShow}),V=h((()=>e=>1===e.insured?r:1!==e.authStatus?c:1!==e.insureMethod?m:"")),w=()=>{n("close")};return l((()=>d.isShow),(e=>{P.value.isShow=e})),(a,l)=>{const d=p("van-radio"),r=p("VanCell"),c=p("van-cell-group"),m=p("van-radio-group"),h=p("VanButton"),C=p("VanPopup");return t(),i("div",aa,[f(C,{show:P.value.isShow,"onUpdate:show":l[2]||(l[2]=e=>P.value.isShow=e),position:"bottom",onClose:w},{default:A((()=>[s("div",la,[s("div",{class:"popup-header"},[ta,ia,s("span",{onClick:w},"X")]),s("div",sa,[f(m,{modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e)},{default:A((()=>[f(c,null,{default:A((()=>[(t(!0),i(b,null,g(e.dataSource,(e=>(t(),v(r,{key:e.productCode,onClick:a=>{return l=e,void(V.value(l)||(y.value=l,k.value=l.productCode));var l}},{"right-icon":A((()=>[f(d,{name:e.productCode,disabled:!!u(V)(e)},null,8,["name","disabled"])])),title:A((()=>[s("div",na,[s("div",oa,[s("p",null,o(e.productName),1),s("span",ua,o(u(V)(e)),1)])])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),s("div",da,[f(h,{block:"",type:"primary",disabled:!k.value,onClick:l[1]||(l[1]=e=>n("finished",y.value))},{default:A((()=>[va])),_:1},8,["disabled"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-ca64694e"]]);const ca={class:"popup-body"},ma={class:""},pa={class:"radio-wrap"},fa=["onClick"],Aa={class:"footer"},ba=r("确定"),ga=e({props:{show:{type:Boolean,default:!1},themeList:{default:()=>[]}},emits:["submit","update:show"],setup(e,{emit:l}){var n,d;const r=e,{show:c,themeList:m}=u(r),h=a(null==(n=null==m?void 0:m[0])?void 0:n.id),V=a(null==(d=null==m?void 0:m[0])?void 0:d.id),w=()=>{var e;l("submit",V.value?h.value||(null==(e=null==m?void 0:m[0])?void 0:e.id):V.value)};return(e,a)=>{const n=p("van-switch"),d=p("van-cell"),r=p("VanRadio"),C=p("VanCellGroup"),R=p("VanRadioGroup"),I=p("VanButton"),S=p("ProPopup");return t(),v(S,{show:u(c),"onUpdate:show":a[2]||(a[2]=e=>P(c)?c.value=e:null),class:"theme-select-wrap",title:"选择计划书封面",onClose:a[3]||(a[3]=e=>l("update:show",!1))},{default:A((()=>[s("div",ca,[f(d,{center:"",title:"封面图"},{"right-icon":A((()=>[f(n,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),"inactive-value":0,"active-value":u(m)[0].id,size:"24"},null,8,["modelValue","active-value"])])),_:1}),s("div",ma,[f(R,{modelValue:h.value,"onUpdate:modelValue":a[1]||(a[1]=e=>h.value=e)},{default:A((()=>[f(C,{inset:""},{default:A((()=>[s("div",pa,[(t(!0),i(b,null,g(u(m),(e=>(t(),i("div",{key:e.id,class:"radio-item"},[s("div",{class:"radio-img",style:k({backgroundImage:`url(${e.showConfig.thumbnailImage})`}),onClick:a=>{return l=e.id,void(h.value=l);var l}},[f(r,{name:e.id},null,8,["name"])],12,fa),s("span",{class:y(""+(h.value===e.id?"checked":""))},o(e.name),3)])))),128))])])),_:1})])),_:1},8,["modelValue"])])]),s("div",Aa,[f(I,{type:"primary",disabled:!(h.value||!V.value),block:"",onClick:w},{default:A((()=>[ba])),_:1},8,["disabled"])])])),_:1},8,["show"])}}});const ha=e=>(c("data-v-50b0e2c8"),e=e(),m(),e),ka={class:"page-composition-proposal"},ya={class:"head-bg"},Pa={class:"container"},Va=ha((()=>s("div",{class:"common-title"},"保险公司简介",-1))),wa=ha((()=>s("span",{class:"poiner"},null,-1))),Ca={key:0,class:"footer-btn"},Ra=r("分享"),Ia=r("生成PDF"),Sa=r("立即投保");var xa=L(e({setup(e){const c=a(!0),m=V(),k=w(),{isShare:y,id:L,themeId:j}=m.query,T=a(),X=a(""),K=a(""),J=a({}),F=a([]);a();const[H,q]=C(),[_,W]=C(),Y=a(""),$=a([]),ee=a(),ae=a("share");let le="";const te=()=>{c.value=!c.value},ie=h((()=>!!F.value.filter((e=>1===e.authStatus&&1===e.insureMethod)).length));l((()=>T.value),(e=>{const{gender:a,name:l,birthday:t}=e,i=d().diff(t,"y");(e=>e===+Q.MALE)(a)?K.value=`${l||i}岁先生的计划书`:K.value=`${l||i}岁女士的计划书`}));const ne=e=>{var a;J.value={title:`${null==(a=T.value)?void 0:a.name}的计划书`,desc:"您的贴心保险管家",link:e,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"}},oe=e=>{const{productCode:a,insurerCode:l,tenantProductCode:t}=e;E({productCode:a,proposalId:L}).then((({code:e,data:a,message:i})=>{"10000"===e&&(a?D({insurerCode:l,productCode:t,proposalId:L}).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a)})):S(i))}))},ue=()=>{var e,a;1===(null==(e=F.value)?void 0:e.length)?oe(null==(a=F.value)?void 0:a[0]):q(!0)},de=e=>{ae.value="pdf",L?(S.loading({message:"PDF生成中...",forbidClick:!0}),N({id:L,themeHistoryId:e}).then((e=>{const{code:a,message:l}=e;"10000"===a&&(S.clear(),l?k.push(`/pdfViewer?url=${encodeURIComponent(l)}&title=${K.value}`):S("计划书为空"))}))):S("PDF生成失败")},ve=async e=>{if(e){const{code:a,data:l}=await B({themeId:e,proposalId:L});"10000"===a&&(W(!1),"pdf"===ae.value?de(l):(le=`${z}/proposalCover?id=${L}&isShare=1&tenantId=${X.value}&themeId=${l}`,ne(le),setTimeout(ee.value.handleShare,100)))}else W(!1),"pdf"===ae.value?de():(le=`${z}/proposalCover?id=${L}&isShare=1&tenantId=${X.value}`,ne(le),setTimeout(ee.value.handleShare,100))},re=()=>{ae.value="pdf",$.value.length?W(!0):de()};return R((()=>{if(m.query.token){new Z({source:"localStorage"}).set("token",m.query.token)}y||(U({proposalId:L}).then((({code:e,data:a})=>{"10000"===e&&(F.value=a)})),(async()=>{const{code:e,data:a}=await M();"10000"===e&&($.value=a||[])})()),(async()=>{try{let e=null;e=y?await x(`${L}?tenantId=${m.query.tenantId}`):await O(L);const{code:a,data:l}=e;if("10000"===a){const e=(null==l?void 0:l.proposalInsuredVOList[0])||{};T.value=e,X.value=null==l?void 0:l.tenantId,le=`${z}/proposalCover?id=${L}&isShare=1&tenantId=${X.value}`,ne(le)}}catch(e){S("接口请求失败")}})()})),(e,a)=>{const l=p("van-collapse-item"),d=p("van-collapse"),m=p("van-button"),h=p("ProPageWrap");return t(),v(h,null,{default:A((()=>[s("div",ka,[s("div",ya,o(K.value),1),f(se,{info:T.value},null,8,["info"]),s("div",{class:"switch-btn",onClick:te},o(c.value?"按责任显示":"按险种显示"),1),c.value?(t(),v(Fe,{key:0,info:T.value},null,8,["info"])):(t(),v($e,{key:1,info:T.value},null,8,["info"])),f(Ze,{info:T.value},null,8,["info"]),s("div",Pa,[Va,f(d,{modelValue:Y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.value=e),accordion:"","is-link":!1,border:!1,size:"middle"},{default:A((()=>{var e;return[(t(!0),i(b,null,g(null==(e=T.value)?void 0:e.insurerInfoVOList,((e,a)=>(t(),v(l,{key:a,name:a,"value-class":"price"},{title:A((()=>[s("div",null,[wa,r(" "+o(null==e?void 0:e.insurerName),1)])])),default:A((()=>[r(" "+o(e.insurerDesc),1)])),_:2},1032,["name"])))),128))]})),_:1},8,["modelValue"])])]),u(y)?n("",!0):(t(),i("div",Ca,[f(G,{ref_key:"shareButtonRef",ref:ee,title:J.value.title,desc:J.value.desc,link:J.value.link,"img-url":J.value.imgUrl},{default:A((()=>[f(m,{type:"primary",class:"share-btn",onClick:a[1]||(a[1]=I((()=>(ae.value="share",void($.value.length?W(!0):ee.value.handleShare()))),["stop"]))},{default:A((()=>[Ra])),_:1})])),_:1},8,["title","desc","link","img-url"]),f(m,{plain:"",type:"primary",class:"btn",onClick:re},{default:A((()=>[Ia])),_:1}),u(ie)?(t(),v(m,{key:0,type:"primary",class:"btn",onClick:ue},{default:A((()=>[Sa])),_:1})):n("",!0)])),u(H)?(t(),v(ra,{key:1,"is-show":u(H),"data-source":F.value,onFinished:oe,onClose:a[2]||(a[2]=e=>u(q)(!1))},null,8,["is-show","data-source"])):n("",!0),(t(),v(ga,{key:+u(_),show:u(_),"onUpdate:show":a[3]||(a[3]=e=>P(_)?_.value=e:null),"theme-list":$.value,onSubmit:ve},null,8,["show","theme-list"]))])),_:1})}}}),[["__scopeId","data-v-50b0e2c8"]]);export{xa as default};
