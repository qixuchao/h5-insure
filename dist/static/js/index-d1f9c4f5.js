import{_ as e,d as a,r as l,a7 as t,c as i,g as s,i as n,j as o,t as u,l as d,aL as v,$ as r,aK as c,e as m,n as p,aM as f,K as A,L as b,b as g,f as h,w as k,F as y,h as P,x as V,J as w,B as C,ay as R,a as I,u as S,G as x,y as O,S as N,k as M,aN as U,T as E,aO as B}from"./index-ede405b0.js";import{a as L,b as j,g as T}from"./proposalList-7535756b.js";import{q as Q,p as Z,c as z,a as D}from"./compositionProposal-222bc30e.js";import{P as K}from"./index-eb9412b8.js";import{_ as X}from"./index-94090615.js";import{_ as J}from"./index-d9ebb1c4.js";import"./pdfdist-66c75904.js";import"./echarts-3d5e6073.js";const G=e=>(A("data-v-0ae855a4"),e=e(),b(),e),F={class:"container head-cover"},H={class:"info-detail"},q={class:"name"},_={class:"img"},W={key:0,src:"/static/assets/male.441ae760.png"},Y={key:1,src:"/static/assets/female.2dc8cc10.png"},$={clase:"p1"},ee={class:"p2"},ae={class:"fe"},le=p(" 首年保费： "),te=G((()=>n("div",{class:"line"},null,-1))),ie={class:"tp"};var se=e(a({props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,p=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保额",dataIndex:"amount"},{title:"保障期间",dataIndex:"coveragePeriod",width:110},{title:"缴费期间",dataIndex:"chargePeriod",width:110},{title:"保费",dataIndex:"premium",width:120}],A=l([]),b=e=>e===+f.MALE,g=e=>{const a=e.split("_");if("to_life"===e)return"保终身";switch(a[0]){case"year":return`${a[1]}年`;case"month":return`${a[1]}月`;case"day":return`${a[1]}天`;case"to":return`保至${a[1]}岁`;default:return""}},h=e=>{const a=e.split("_");switch(a[0]){case"year":return`${a[1]}年交`;case"month":return`${a[1]}月交`;case"to":return`交至${a[1]}岁`;case"single":return"趸缴";default:return""}};return t((()=>a.info),(e=>{(e=>{const a=[];null==e||e.forEach((e=>{const{riskName:l,amount:t,coveragePeriod:i,chargePeriod:s,premium:n}=e;a.push({riskName:l,amount:t,coveragePeriod:g(i),chargePeriod:h(s),premium:n})})),A.value=a})(null==e?void 0:e.proposalProductRiskVOList)}),{deep:!0,immediate:!0}),(l,t)=>{var f,g,h,k,y,P;return i(),s("div",F,[n("div",H,[n("div",q,[n("div",_,[b(null==(f=a.info)?void 0:f.gender)?(i(),s("img",W)):o("",!0),b(null==(g=a.info)?void 0:g.gender)?o("",!0):(i(),s("img",Y))]),n("div",null,[n("p",$,u(null==(h=a.info)?void 0:h.name),1),n("p",ee,u(d(v)[null==(k=a.info)?void 0:k.gender])+"，"+u(d(r)().diff(null==(y=e.info)?void 0:y.birthday,"y"))+"岁",1)])]),n("div",ae,[le,n("span",null,"¥"+u(d(c)(null==(P=a.info)?void 0:P.totalPremium)),1)])]),te,n("div",ie,[A.value.length>0?(i(),m(K,{key:0,columns:p,class:"table","data-source":A.value},null,8,["data-source"])):o("",!0)])])}}}),[["__scopeId","data-v-0ae855a4"]]),ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAABYlBMVEVHcEzb7f/r9P/a8P/T6f/////P5//p+//X///////q9v+62v/z+f/D3f/w9//E5P+52//x+P/R6v/z+f/J4//g9P/h8P/w9//g7/+32v/b7P/b7f+62/+72//L4/+83P/D4P/i8P/o8//u9v+32P/O5f/K4//w9v/S6P/////g7//Q5//d7v/f7v+83P/a7P/e7f/D4P/O5f/x9v/K4v+/3f/x+P+72v/z+f/J4v+73P/1+f/0+//0+f/R6f/o8//l8f+/3P+52v/N5v+22v/x9//Q5//g7v/a7P+22f/3/P/O5f/0+v/j8P/i7//g7v/w9//d7v/r9f/O5P/R5v/d7f/e7v+22P/v9//D3//I4v/O5f/b6/+12P/u9f/1+v/v9v+93P/N5P/u9v/f7v/z+f/d7f+42f/L4/+22P/O5f/c7P+62v/h7//1+v/v9//J4v/Q5v/H4f/x9//j8P++3f8KzdOCAAAAYXRSTlMAhy4jCwIQEQYEO6S0ISMyxa45+PYZ53urj7RXOfij8EB9iOZgkcm7aAH1YLn5me9HScRbeHjyKd6ZzohH6imvcFlycWrD4N/gv2C/47vEXY+XTtGn6tbihLbq+MDb05za7zgX5AAAAvJJREFUeNrtVWdX20AQPGPL3eAKmNiYDqaG3kLvJbQEQkmTm5AtB4zJ/8+V3ZOe/MIXPvEe90me2/Gc9nZGhJBPwZWFSBMxV1P73uXoRwvg7v8SH5jxmYBvNpxZSrrY43KxWH/Ix6bl3ulYtVAqVRwScO6Wc7n7xwEXAq4l1dA07VuIav8p1ik9P9cMe83D1UKhRPmor0yVOf1xEenjqsr5YYUEgZ7vgb2e5ypXr3QAEK1x+v3jkwvE/1K6Zmi6niIrRXZ4yh+E6s/PVL1A6ZcADFF6mdOjAkgxcUOj9G1yTNU5PQLVa9Uq5VdKlX0ARmo1If7UIoAWqm4wcb2PRPDwbVDdTdX54dsBWMXDx70C8KapPFefJ00xSq/n870eqPa0incfk3f5FegzCMwydUPXA/T5MMbevddPcPlbmfrwqQQ8RznW+U6fvPaAqtLGH7j5TS0PBtu4NpZ3d4w6nBYgO9I5tThJLGtyPBzoy5L39UbX6+/9MMZm/uWpKzdOncGnTsz8Q8PMV16cefA7nfmI8LvNcQWb48p2xxnguFf6fUX43ZY2JVva5Oxpo0LaBIvM7y9mXbkh68DveoomrXh3mbTOYVC3JG2uMWk1qh5WaM5zdTPns//J+XtrzrPD6zTnX/eVeV9veLmnz64vfBbAd+FwnLqtJS1b/UNOKxDaTm4KA/kXmGV2ms0hO2FTtx+VgLefWS6+ZbI308zvSWrgxJyY+Z9eLL4Sfp9IYLED/L6BwAb4PUnIL/T7Ouyto9/P8aDo91sFPJRBv4fIAvp9Darb0e9XAHyQfl8VwLz0+waZQ7/vQPUJ+n0CgC3p9y4BdKno902yA37Pn0H1Oap/J1BdA78/ueGqVPC73kUOUd2POY3qQ9jL3ZpQvyGwbpg8Zf+g7Q6K1l0T2WjR+Q4JRO9442/lVSQyvPPpFEuXtuP6w28eNtirvUKpdV0xgdWju1y802MCnkDGSB/M47/hjtxO2ABvSCFZ+Ys+KiE+J/8AdlNUC0LetfoAAAAASUVORK5CYII=";const oe=e=>(A("data-v-50f28e3f"),e=e(),b(),e),ue={class:"container"},de=oe((()=>n("div",{class:"common-title"},"利益演示",-1))),ve={key:0,class:"benefit"},re={class:"benefit-title"},ce=oe((()=>n("div",{class:"line"},null,-1))),me={key:0,class:"box-title box-title-chart"},pe=oe((()=>n("img",{src:ne,alt:""},null,-1))),fe=p(" 保单年度"),Ae=p("年度，被保人"),be=p("岁时 "),ge=oe((()=>n("img",{src:ne,alt:""},null,-1))),he={key:1},ke={class:"box"},ye={class:"box-title"},Pe=oe((()=>n("img",{src:ne,alt:""},null,-1))),Ve=p(" 保单年度"),we=p("年度，被保人"),Ce=p("岁时 "),Re=oe((()=>n("img",{src:ne,alt:""},null,-1))),Ie={class:"box-price"},Se={class:"text1"},xe={class:"text2"},Oe={key:2,style:{width:"100%, minWidth: 338px"}},Ne={class:"slider"},Me=[oe((()=>n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAASFBMVEVHcEwNbv8Mbf8TcP8Nbv8Nb/8Nb/8Nbv8qf/8Nb/8Nbv8Mb/8PcP8Nbv8Pcv8Mb/8Pb/8PcP8Ocf8Nbv8Ob/8Vf/8Nbv8Nbv+Jn3KrAAAAF3RSTlMAlLEZ0ID47wZx3WBTiDGeOUQk57UMuVjVO7sAAAHeSURBVHjarVjZkoMgEARkuURIXI///9Mtga0igkGZ6RcThXa6cTiGfIMbJ8aNFEIazqbRkR4Mmsn9BMn08IxFjdt+gW1Ut2lW/bt/wa9e70Wjc0lm8XSaqF9MLlHfiOrFM0dc1kG5zDX+aoVDU0vBrKo8tkykBvRrUDNPNHS4HE2aqPh8zfNOoUeaa6ok/U0uYEWuv+2jsKSKcQ/wijShfGw7VuOJzzS5BR1b24o/oqa75aco2s/hvpnJbcwmvPnUQ/F0t4Hy3fzT0jiiDV2FuvitfIxn4fMDx19nYZ48hj+J0+n/Yyj+oWSVMcIOBE/kmgdESRdoFpI65kMx9BEN4pgzoysjIKAYUsq5LQUECGkLvw5KRrrBjv7Dv9W2n8gGuxOjVP1ESiZF6QrTJglxRZZ1ZZwjY7wA4OIHMB0XBSFSB8MUFBoCggkuH/m7wIiWY+4IdB5G5IMoWSaa/WnAlukmiQhO5Zj2JsoOokIk20SyJKpI420iXkqrmO14k8eVZqMNP9oHiZYiaEmLNo1gTWxoUy3a5I+2HGEtkGhLNtomAmtbg7zRgm/9sDej8O0x/oYdfoTAP9TAj1nwgx/+URR+OIYf15ELCPCSBn6RBV72gRei8Etj+MU6tPLhH41GXfO43AIjAAAAAElFTkSuQmCC",alt:""},null,-1)))],Ue={style:{flex:"1",margin:"0px 5px"}},Ee={class:"custom-button"},Be=[oe((()=>n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAS1BMVEVHcEwNb/8Nbv8Ocf8Mbv8Nbf8Nbv8Qcf8zmf8Nbv8Nbv8Wbv8Ocv8Nb/8Nb/8NcP8Nbf8PcP8cjf8Nbv8Nbv8NcP8OcP8Nbv8Nbv+sb0c3AAAAGHRSTlMAXpwhsunxPwX5khcy3m5xzVQJ0oh0Rrn3uGXUAAACAUlEQVR42q2YWZKFIAxFg4KAiLM+9r/SLgNdj24VFXM+tMrhmkCCJJCiYTOfrNBa2InPrIEcTMsr94+KtwYeMbKPO+HDxvsyi3AJxHJPSnWxjOVFPc91wW0s1Sm4RE7RiDTRC6qJRm2SV+bUzqP5oA5uD1w7T500quyDTF2ePlIHqb5MuBVMLwwkMEVw/dS9QftPXQZe4w3XAxzCgjkKLlHBKHZoj0M6uEXnkAObpEa/V7jJWqF3cjcZeN2WcJvS4pf/vaH6cPU+4du9ghgfhys8YvWRCRESL7XwkNZtyMixCecdHlNg3ql4LtHZY5gQDI5R/Z+IGXHdOItno53T5izGcVUZwbMkHZM4DknnlsggbfKEjP6axPwk5glB/c25z2ZQmStUbiZ90LjtQQ65QsC3++Y3qoZ8oQFjOShWKl9IVcEjf84WCpaEkGrfCLU+nBme3gg1PgDm7aTeCKntgRk9tPBGCCyO8oTHN0JoywR2n7BGxnS4UsgYs09cC2KXaEy7CzTbpZsAjSMVI9wlAmLmTZtMiMw1ssEmm36ygCRLEbKkJVtGqBY2sqWWbPEn+x1R/SDJftlkmwiqbQ3ZRotq60e/GQWZLkPSBYmk2rCTlRCERQ19mRUXfu2TMsQNVKUoVXFMVa5TNRCoWhpUTRb6tg99I4q+NUbfrAuoJ+3DH6O5cGG4augGAAAAAElFTkSuQmCC",alt:""},null,-1)))],Le=oe((()=>n("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),je={class:"btn-two"},Te=p("图表展示"),Qe=p("趋势展示");var Ze=e(a({props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,v=l(0),r=l(0),p=l(0),f=l(),A=l(0),b=l(!0),V=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[v.value];r.value=a.ageBegin+1,A.value=a.ageBegin+1,p.value=a.ageEnd},w=()=>{var e,l,t;const i=null==(l=null==(e=a.info)?void 0:e.benefitRiskResultVOList)?void 0:l[v.value],{a:s,year:n}=((e,a)=>{const l=[],t=[];for(let i=e,s=0;i<=a;i++,s++)l.push(i.toString()),t.push(s+1);return{a:l,year:t}})(r.value,p.value),o={index:s.indexOf(A.value.toString()),age:s,year:n,result:null==(t=null==i?void 0:i.benefitRiskItemResultVOList)?void 0:t[0]};f.value=o},C=()=>{A.value>p.value-1||(A.value+=1,w())},R=()=>{A.value>r.value&&(A.value-=1,w())},I=e=>{v.value=e.name,V(a.info),w()},S=e=>{b.value="1"===e};return t((()=>a.info),(e=>{e&&(V(e),w())}),{deep:!0,immediate:!0}),t(A,(()=>{w()})),(e,l)=>{const t=g("van-slider"),V=g("van-button"),w=g("van-tab"),x=g("van-tabs");return i(),s("div",ue,[de,h(x,{active:v.value,"title-active-color":"#0d6efe","title-inactive-color":"#393D46",shrink:"",onClickTab:I},{default:k((()=>{var e;return[(i(!0),s(y,null,P(null==(e=a.info)?void 0:e.benefitRiskResultVOList,((e,a)=>(i(),m(w,{key:a,name:a,title:e.riskName},{default:k((()=>{var g,w,I,x,O,N,M,U,E,B,L,j,T,Q,Z,z;return[a==v.value?(i(),s("div",ve,[n("div",re,u(null==e?void 0:e.riskName),1),ce,b.value?o("",!0):(i(),s("p",me,[pe,fe,n("span",null,u(null==(I=null==(g=f.value)?void 0:g.year)?void 0:I[null==(w=f.value)?void 0:w.index]),1),Ae,n("span",null,u(null==(N=null==(x=f.value)?void 0:x.age)?void 0:N[null==(O=f.value)?void 0:O.index]),1),be,ge])),b.value?(i(),s("div",he,[n("div",ke,[n("p",ye,[Pe,Ve,n("span",null,u(null==(E=null==(M=f.value)?void 0:M.year)?void 0:E[null==(U=f.value)?void 0:U.index]),1),we,n("span",null,u(null==(j=null==(B=f.value)?void 0:B.age)?void 0:j[null==(L=f.value)?void 0:L.index]),1),Ce,Re]),n("div",Ie,[(i(!0),s(y,null,P(null==(Q=null==(T=f.value)?void 0:T.result)?void 0:Q.headers,((e,a)=>{var l,t,o,v,r;return i(),s("div",{key:a,style:{width:"33%"}},[n("p",Se,u(d(c)(Number(null==(r=null==(v=null==(t=null==(l=f.value)?void 0:l.result)?void 0:t.dataList)?void 0:v[null==(o=f.value)?void 0:o.index])?void 0:r[a]))),1),n("p",xe,u(e)+"(元）",1)])})),128))])])])):o("",!0),b.value?o("",!0):(i(),s("div",Oe,[h(X,{min:r.value,max:p.value,current:A.value,data:null==(z=null==(Z=f.value)?void 0:Z.result)?void 0:z.benefitRiskItemList},null,8,["min","max","current","data"])])),n("div",Ne,[n("div",{class:"add lf",onClick:R},Me),n("div",Ue,[r.value?(i(),m(t,{key:0,modelValue:A.value,"onUpdate:modelValue":l[0]||(l[0]=e=>A.value=e),min:r.value,max:p.value,"bar-height":"8px"},{button:k((()=>[n("div",Ee,u(A.value)+" 岁",1)])),_:1},8,["modelValue","min","max"])):o("",!0)]),n("div",{class:"add rg",onClick:C},Be)]),Le,n("div",je,[h(V,{round:"",plain:!b.value,type:"primary",class:"btn",onClick:l[1]||(l[1]=e=>S("1"))},{default:k((()=>[Te])),_:1},8,["plain"]),h(V,{round:"",plain:b.value,type:"primary",class:"btn",onClick:l[2]||(l[2]=e=>S("2"))},{default:k((()=>[Qe])),_:1},8,["plain"])])])):o("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])}}}),[["__scopeId","data-v-50f28e3f"]]),ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAJFBMVEVHcEwGev8Ie/8He/8QhP8Hff8Lff8ff/8Kf/8HeP8Jev8KfP88zNEzAAAADHRSTlMATTtEDx4rCBgkNDEC504AAAAAu0lEQVR42t2TzRKDMAiEV35CSN7/fTtiKOnBWz2034nZRRxYBdCJeQgKGczUz6odgSLRS2hAPxaST6XQQVm25bUUCFxlUM1c3ljeKG9m6cvzFCbs3ZXkJAN61CRIhKI3FjRtTbFzCoZ/QSlX35an2HjmORPPc0Jvs9VHsm01/kLrJcY18mMoGyAcliExCktw0t0FO+Le8WOY3QnO8RUX/RQ8T1QRVUj0cLZzefMb2UY9tmzH9iOLqiDZhBeX/QTFelEoEAAAAABJRU5ErkJggg==";const De={class:"container"},Ke={class:"common-title"},Xe={class:"title"},Je=(e=>(A("data-v-524d386a"),e=e(),b(),e))((()=>n("img",{src:ze,class:"ig"},null,-1))),Ge={class:"product-detail"};var Fe=e(a({props:{info:{type:Object,default:()=>{}}},setup(e){const a=e;return(e,l)=>{var t;const o=g("van-collapse-item"),d=g("van-collapse");return i(),s("div",De,[(i(!0),s(y,null,P(null==(t=a.info)?void 0:t.liabilityByRiskVOList,((e,a)=>(i(),s("div",{key:a},[n("div",Ke,[n("div",Xe,[Je,p(" "+u(e.riskName),1)])]),n("div",Ge,[h(d,{modelValue:e.riskName1,"onUpdate:modelValue":a=>e.riskName1=a,accordion:"","is-link":!1,border:!1,size:"middle"},{default:k((()=>[(i(!0),s(y,null,P(e.proposalRiskLiabilityVOList,((e,a)=>(i(),m(o,{key:a,title:e.liabilityName,name:a,"value-class":"price",value:e.liabilityIndemnityContent},{default:k((()=>[p(u(e.liabilityDesc),1)])),_:2},1032,["title","name","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])))),128))])}}}),[["__scopeId","data-v-524d386a"]]);const He={class:"container"},qe={class:"common-title"},_e={class:"title"},We=(e=>(A("data-v-4990fe38"),e=e(),b(),e))((()=>n("img",{src:ze,class:"ig"},null,-1))),Ye={class:"product-detail"};var $e=e(a({props:{info:{type:Object,default:()=>{}}},setup(e){const a=e;return(e,l)=>{var t;const o=g("ProCell"),d=g("van-collapse-item"),v=g("van-collapse");return i(),s("div",He,[(i(!0),s(y,null,P(null==(t=a.info)?void 0:t.liabilityByTopTypeVOList,((e,a)=>(i(),s("div",{key:a},[n("div",null,[n("div",qe,[n("div",_e,[We,p(" "+u(e.liabilityTopTypeName),1)])]),n("div",Ye,[h(v,{modelValue:e.riskName1,"onUpdate:modelValue":a=>e.riskName1=a,accordion:"","is-link":!1,border:!1,size:"middle"},{default:k((()=>[(i(!0),s(y,null,P(Object.keys(e.proposalRiskLiabilityVOMap),((a,l)=>(i(),m(d,{key:l,title:a,name:l,"value-class":"price"},{default:k((()=>[(i(!0),s(y,null,P(e.proposalRiskLiabilityVOMap[a],(e=>(i(),m(o,{key:e.liabilityId,title:e.liabilityName,content:e.liabilityIndemnityContent||""},null,8,["title","content"])))),128))])),_:2},1032,["title","name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])])))),128))])}}}),[["__scopeId","data-v-4990fe38"]]);const ea=e=>(A("data-v-ca64694e"),e=e(),b(),e),aa={class:"com-insured-product-wrapper"},la={class:"container"},ta=ea((()=>n("span",{class:"clear-all"},null,-1))),ia=ea((()=>n("span",{class:"title"}," 选择投保产品 ",-1))),sa={class:"popup-body"},na={class:"cell-title"},oa={class:"title"},ua={class:"error-message"},da={class:"footer-button"},va=p("立即投保");var ra=e(a({props:{isShow:{type:Boolean,default:!0},dataSource:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:a}){const o=e,v="已通过计划书进行投保",r="产品未授权，无法进行投保",c="产品暂不支持计划书转投保",p=l(""),f=l(null),A=l({isShow:o.isShow}),b=V((()=>e=>1===e.insured?v:1!==e.authStatus?r:1!==e.insureMethod?c:"")),w=()=>{a("close")};return t((()=>o.isShow),(e=>{A.value.isShow=e})),(l,t)=>{const o=g("van-radio"),v=g("VanCell"),r=g("van-cell-group"),c=g("van-radio-group"),V=g("VanButton"),C=g("VanPopup");return i(),s("div",aa,[h(C,{show:A.value.isShow,"onUpdate:show":t[2]||(t[2]=e=>A.value.isShow=e),position:"bottom",onClose:w},{default:k((()=>[n("div",la,[n("div",{class:"popup-header"},[ta,ia,n("span",{onClick:w},"X")]),n("div",sa,[h(c,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=e=>p.value=e)},{default:k((()=>[h(r,null,{default:k((()=>[(i(!0),s(y,null,P(e.dataSource,(e=>(i(),m(v,{key:e.productCode,onClick:a=>{return l=e,void(b.value(l)||(f.value=l,p.value=l.productCode));var l}},{"right-icon":k((()=>[h(o,{name:e.productCode,disabled:!!d(b)(e)},null,8,["name","disabled"])])),title:k((()=>[n("div",na,[n("div",oa,[n("p",null,u(e.productName),1),n("span",ua,u(d(b)(e)),1)])])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),n("div",da,[h(V,{block:"",type:"primary",disabled:!p.value,onClick:t[1]||(t[1]=e=>a("finished",f.value))},{default:k((()=>[va])),_:1},8,["disabled"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-ca64694e"]]);const ca={class:"popup-body"},ma={class:""},pa={class:"radio-wrap"},fa=["onClick"],Aa={class:"footer"},ba=p("确定"),ga=a({props:{show:{type:Boolean,default:!1},themeList:{default:()=>[]}},emits:["submit","update:show"],setup(e,{emit:a}){var t,o;const v=e,{show:r,themeList:c}=d(v),p=l(null==(t=null==c?void 0:c[0])?void 0:t.id),f=l(null==(o=null==c?void 0:c[0])?void 0:o.id),A=()=>{var e;a("submit",f.value?p.value||(null==(e=null==c?void 0:c[0])?void 0:e.id):f.value)};return(e,l)=>{const t=g("van-switch"),o=g("van-cell"),v=g("VanRadio"),b=g("VanCellGroup"),V=g("VanRadioGroup"),I=g("VanButton"),S=g("ProPopup");return i(),m(S,{show:d(r),"onUpdate:show":l[2]||(l[2]=e=>R(r)?r.value=e:null),class:"theme-select-wrap",title:"选择计划书封面",onClose:l[3]||(l[3]=e=>a("update:show",!1))},{default:k((()=>[n("div",ca,[h(o,{center:"",title:"封面图"},{"right-icon":k((()=>[h(t,{modelValue:f.value,"onUpdate:modelValue":l[0]||(l[0]=e=>f.value=e),"inactive-value":0,"active-value":d(c)[0].id,size:"24"},null,8,["modelValue","active-value"])])),_:1}),n("div",ma,[h(V,{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=e=>p.value=e)},{default:k((()=>[h(b,{inset:""},{default:k((()=>[n("div",pa,[(i(!0),s(y,null,P(d(c),(e=>(i(),s("div",{key:e.id,class:"radio-item"},[n("div",{class:"radio-img",style:w({backgroundImage:`url(${e.showConfig.thumbnailImage})`}),onClick:a=>{return l=e.id,void(p.value=l);var l}},[h(v,{name:e.id},null,8,["name"])],12,fa),n("span",{class:C(""+(p.value===e.id?"checked":""))},u(e.name),3)])))),128))])])),_:1})])),_:1},8,["modelValue"])])]),n("div",Aa,[h(I,{type:"primary",disabled:!(p.value||!f.value),block:"",onClick:A},{default:k((()=>[ba])),_:1},8,["disabled"])])])),_:1},8,["show"])}}});const ha=e=>(A("data-v-50b0e2c8"),e=e(),b(),e),ka={class:"page-composition-proposal"},ya={class:"head-bg"},Pa={class:"container"},Va=ha((()=>n("div",{class:"common-title"},"保险公司简介",-1))),wa=ha((()=>n("span",{class:"poiner"},null,-1))),Ca={key:0,class:"footer-btn"},Ra=p("分享"),Ia=p("生成PDF"),Sa=p("立即投保");var xa=e(a({setup(e){const a=l(!0),v=I(),c=S(),{isShare:A,id:b,themeId:w}=v.query,C=l(),K=l(""),X=l(""),G=l({}),F=l([]);l();const[H,q]=x(),[_,W]=x(),Y=l(""),$=l([]),ee=l(),ae=l("share");let le="";const te=()=>{a.value=!a.value},ie=V((()=>!!F.value.filter((e=>1===e.authStatus&&1===e.insureMethod)).length));t((()=>C.value),(e=>{const{gender:a,name:l,birthday:t}=e,i=r().diff(t,"y");(e=>e===+f.MALE)(a)?X.value=`${l||i}岁先生的计划书`:X.value=`${l||i}岁女士的计划书`}));const ne=e=>{var a;G.value={title:`${null==(a=C.value)?void 0:a.name}的计划书`,desc:"您的贴心保险管家",link:e,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"}},oe=e=>{const{productCode:a,insurerCode:l,tenantProductCode:t}=e;z({productCode:a,proposalId:b}).then((({code:e,data:a,message:i})=>{"10000"===e&&(a?B({insurerCode:l,productCode:t,proposalId:b}).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a)})):E(i))}))},ue=()=>{var e,a;1===(null==(e=F.value)?void 0:e.length)?oe(null==(a=F.value)?void 0:a[0]):q(!0)},de=e=>{ae.value="pdf",b?(E.loading({message:"PDF生成中...",forbidClick:!0}),T({id:b,themeHistoryId:e}).then((e=>{const{code:a,message:l}=e;"10000"===a&&(E.clear(),l?c.push(`/pdfViewer?url=${encodeURIComponent(l)}&title=${X.value}`):E("计划书为空"))}))):E("PDF生成失败")},ve=async e=>{if(e){const{code:a,data:l}=await D({themeId:e,proposalId:b});"10000"===a&&(W(!1),"pdf"===ae.value?de(l):(le=`${U}/proposalCover?id=${b}&isShare=1&tenantId=${K.value}&themeId=${l}`,ne(le),setTimeout(ee.value.handleShare,100)))}else W(!1),"pdf"===ae.value?de():(le=`${U}/proposalCover?id=${b}&isShare=1&tenantId=${K.value}`,ne(le),setTimeout(ee.value.handleShare,100))},re=()=>{ae.value="pdf",$.value.length?W(!0):de()};return O((()=>{if(v.query.token){new N({source:"localStorage"}).set("token",v.query.token)}A||(Z({proposalId:b}).then((({code:e,data:a})=>{"10000"===e&&(F.value=a)})),(async()=>{const{code:e,data:a}=await Q();"10000"===e&&($.value=a||[])})()),(async()=>{try{let e=null;e=A?await L(`${b}?tenantId=${v.query.tenantId}`):await j(b);const{code:a,data:l}=e;if("10000"===a){const e=(null==l?void 0:l.proposalInsuredVOList[0])||{};C.value=e,K.value=null==l?void 0:l.tenantId,le=`${U}/proposalCover?id=${b}&isShare=1&tenantId=${K.value}`,ne(le)}}catch(e){E("接口请求失败")}})()})),(e,l)=>{const t=g("van-collapse-item"),v=g("van-collapse"),r=g("van-button"),c=g("ProPageWrap");return i(),m(c,null,{default:k((()=>[n("div",ka,[n("div",ya,u(X.value),1),h(se,{info:C.value},null,8,["info"]),n("div",{class:"switch-btn",onClick:te},u(a.value?"按责任显示":"按险种显示"),1),a.value?(i(),m(Fe,{key:0,info:C.value},null,8,["info"])):(i(),m($e,{key:1,info:C.value},null,8,["info"])),h(Ze,{info:C.value},null,8,["info"]),n("div",Pa,[Va,h(v,{modelValue:Y.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Y.value=e),accordion:"","is-link":!1,border:!1,size:"middle"},{default:k((()=>{var e;return[(i(!0),s(y,null,P(null==(e=C.value)?void 0:e.insurerInfoVOList,((e,a)=>(i(),m(t,{key:a,name:a,"value-class":"price"},{title:k((()=>[n("div",null,[wa,p(" "+u(null==e?void 0:e.insurerName),1)])])),default:k((()=>[p(" "+u(e.insurerDesc),1)])),_:2},1032,["name"])))),128))]})),_:1},8,["modelValue"])])]),d(A)?o("",!0):(i(),s("div",Ca,[h(J,{ref_key:"shareButtonRef",ref:ee,title:G.value.title,desc:G.value.desc,link:G.value.link,"img-url":G.value.imgUrl},{default:k((()=>[h(r,{type:"primary",class:"share-btn",onClick:l[1]||(l[1]=M((()=>(ae.value="share",void($.value.length?W(!0):ee.value.handleShare()))),["stop"]))},{default:k((()=>[Ra])),_:1})])),_:1},8,["title","desc","link","img-url"]),h(r,{plain:"",type:"primary",class:"btn",onClick:re},{default:k((()=>[Ia])),_:1}),d(ie)?(i(),m(r,{key:0,type:"primary",class:"btn",onClick:ue},{default:k((()=>[Sa])),_:1})):o("",!0)])),d(H)?(i(),m(ra,{key:1,"is-show":d(H),"data-source":F.value,onFinished:oe,onClose:l[2]||(l[2]=e=>d(q)(!1))},null,8,["is-show","data-source"])):o("",!0),(i(),m(ga,{key:+d(_),show:d(_),"onUpdate:show":l[3]||(l[3]=e=>R(_)?_.value=e:null),"theme-list":$.value,onSubmit:ve},null,8,["show","theme-list"]))])),_:1})}}}),[["__scopeId","data-v-50b0e2c8"]]);export{xa as default};
