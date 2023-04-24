import{G as e,d as a,r as l,R as t,c as i,A as s,f as n,h as o,E as d,g as u,c4 as r,y as c,j as v,at as m,e as p,S as f,al as b,am as g,i as h,w as A,U as k,V as y,a2 as C,B as V,au as w,av as R,W as I,L as N,b6 as S,aC as x,bK as M,b8 as U,bB as j,bu as P,F as E,ak as O,u as _,a as B,ab as L,a1 as T,aq as H,b as F,az as Z,bv as Q,c5 as z,T as G,c6 as q}from"./index-9598ace6.js";import{C as K}from"./index-ececb340.js";import{b as D,c as J,g as W}from"./proposalList-e419d715.js";import{q as X,p as $,c as Y,a as ee}from"./compositionProposal-5d0d2ad7.js";import{P as ae}from"./index-9fba9d48.js";import{S as le,_ as te}from"./box-title-f44098ba.js";import{_ as ie}from"./index-db45950c.js";import{C as se}from"./index-c8a1afd3.js";import{d as ne}from"./trial-cc947973.js";/* empty css              */import{S as oe}from"./index-b3de4e89.js";import"./pdfh5-008ca364.js";import"./echarts-ac920fed.js";const de={class:"container head-cover"},ue={class:"info-detail"},re={class:"name"},ce={class:"img"},ve={key:0,src:"/static/png/male-441ae760.png"},me={key:1,src:"/static/png/female-2dc8cc10.png"},pe={clase:"p1"},fe={class:"p2"},be={class:"fe"},ge=(e=>(b("data-v-0ae855a4"),e=e(),g(),e))((()=>n("div",{class:"line"},null,-1))),he={class:"tp"};var Ae=e(a({__name:"InsuranceList",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,b=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保额",dataIndex:"amount"},{title:"保障期间",dataIndex:"coveragePeriod",width:110},{title:"缴费期间",dataIndex:"chargePeriod",width:110},{title:"保费",dataIndex:"premium",width:120}],g=l([]),h=e=>e===+f.MALE,A=e=>{const a=e.split("_");if("to_life"===e)return"保终身";switch(a[0]){case"year":return`${a[1]}年`;case"month":return`${a[1]}月`;case"day":return`${a[1]}天`;case"to":return`保至${a[1]}岁`;default:return""}},k=e=>{const a=e.split("_");switch(a[0]){case"year":return`${a[1]}年交`;case"month":return`${a[1]}月交`;case"to":return`交至${a[1]}岁`;case"single":return"趸缴";default:return""}};return t((()=>a.info),(e=>{(e=>{const a=[];null==e||e.forEach((e=>{const{riskName:l,amount:t,coveragePeriod:i,chargePeriod:s,premium:n}=e;a.push({riskName:l,amount:t,coveragePeriod:A(i),chargePeriod:k(s),premium:n})})),g.value=a})(null==e?void 0:e.proposalProductRiskVOList)}),{deep:!0,immediate:!0}),(l,t)=>{var f,A,k,y,C,V;return i(),s("div",de,[n("div",ue,[n("div",re,[n("div",ce,[h(null==(f=a.info)?void 0:f.gender)?(i(),s("img",ve)):o("",!0),h(null==(A=a.info)?void 0:A.gender)?o("",!0):(i(),s("img",me))]),n("div",null,[n("p",pe,d(null==(k=a.info)?void 0:k.name),1),n("p",fe,d(u(r)[null==(y=a.info)?void 0:y.gender])+"，"+d(u(c)().diff(null==(C=e.info)?void 0:C.birthday,"y"))+"岁",1)])]),n("div",be,[v(" 首年保费： "),n("span",null,"¥"+d(u(m)(null==(V=a.info)?void 0:V.totalPremium)),1)])]),ge,n("div",he,[u(g).length>0?(i(),p(ae,{key:0,columns:b,class:"table","data-source":u(g)},null,8,["data-source"])):o("",!0)])])}}}),[["__scopeId","data-v-0ae855a4"]]);const ke=e=>(b("data-v-0a70e812"),e=e(),g(),e),ye={class:"container"},Ce=ke((()=>n("div",{class:"common-title"},"利益演示",-1))),Ve={key:0,class:"benefit"},we=ke((()=>n("div",{class:"line"},null,-1))),Re={key:0,class:"box-title box-title-chart"},Ie=ke((()=>n("img",{src:te,alt:""},null,-1))),Ne=ke((()=>n("img",{src:te,alt:""},null,-1))),Se={key:1},xe={class:"box"},Me={class:"box-title"},Ue=ke((()=>n("img",{src:te,alt:""},null,-1))),je=ke((()=>n("img",{src:te,alt:""},null,-1))),Pe={class:"box-price"},Ee={class:"text1"},Oe={class:"text2"},_e={key:2,style:{width:"100%, minWidth: 338px"}},Be={class:"slider"},Le=[ke((()=>n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAASFBMVEVHcEwNbv8Mbf8TcP8Nbv8Nb/8Nb/8Nbv8qf/8Nb/8Nbv8Mb/8PcP8Nbv8Pcv8Mb/8Pb/8PcP8Ocf8Nbv8Ob/8Vf/8Nbv8Nbv+Jn3KrAAAAF3RSTlMAlLEZ0ID47wZx3WBTiDGeOUQk57UMuVjVO7sAAAHeSURBVHjarVjZkoMgEARkuURIXI///9Mtga0igkGZ6RcThXa6cTiGfIMbJ8aNFEIazqbRkR4Mmsn9BMn08IxFjdt+gW1Ut2lW/bt/wa9e70Wjc0lm8XSaqF9MLlHfiOrFM0dc1kG5zDX+aoVDU0vBrKo8tkykBvRrUDNPNHS4HE2aqPh8zfNOoUeaa6ok/U0uYEWuv+2jsKSKcQ/wijShfGw7VuOJzzS5BR1b24o/oqa75aco2s/hvpnJbcwmvPnUQ/F0t4Hy3fzT0jiiDV2FuvitfIxn4fMDx19nYZ48hj+J0+n/Yyj+oWSVMcIOBE/kmgdESRdoFpI65kMx9BEN4pgzoysjIKAYUsq5LQUECGkLvw5KRrrBjv7Dv9W2n8gGuxOjVP1ESiZF6QrTJglxRZZ1ZZwjY7wA4OIHMB0XBSFSB8MUFBoCggkuH/m7wIiWY+4IdB5G5IMoWSaa/WnAlukmiQhO5Zj2JsoOokIk20SyJKpI420iXkqrmO14k8eVZqMNP9oHiZYiaEmLNo1gTWxoUy3a5I+2HGEtkGhLNtomAmtbg7zRgm/9sDej8O0x/oYdfoTAP9TAj1nwgx/+URR+OIYf15ELCPCSBn6RBV72gRei8Etj+MU6tPLhH41GXfO43AIjAAAAAElFTkSuQmCC",alt:""},null,-1)))],Te={style:{flex:"1",margin:"0px 5px"}},He={class:"custom-button"},Fe=[ke((()=>n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAS1BMVEVHcEwNb/8Nbv8Ocf8Mbv8Nbf8Nbv8Qcf8zmf8Nbv8Nbv8Wbv8Ocv8Nb/8Nb/8NcP8Nbf8PcP8cjf8Nbv8Nbv8NcP8OcP8Nbv8Nbv+sb0c3AAAAGHRSTlMAXpwhsunxPwX5khcy3m5xzVQJ0oh0Rrn3uGXUAAACAUlEQVR42q2YWZKFIAxFg4KAiLM+9r/SLgNdj24VFXM+tMrhmkCCJJCiYTOfrNBa2InPrIEcTMsr94+KtwYeMbKPO+HDxvsyi3AJxHJPSnWxjOVFPc91wW0s1Sm4RE7RiDTRC6qJRm2SV+bUzqP5oA5uD1w7T500quyDTF2ePlIHqb5MuBVMLwwkMEVw/dS9QftPXQZe4w3XAxzCgjkKLlHBKHZoj0M6uEXnkAObpEa/V7jJWqF3cjcZeN2WcJvS4pf/vaH6cPU+4du9ghgfhys8YvWRCRESL7XwkNZtyMixCecdHlNg3ql4LtHZY5gQDI5R/Z+IGXHdOItno53T5izGcVUZwbMkHZM4DknnlsggbfKEjP6axPwk5glB/c25z2ZQmStUbiZ90LjtQQ65QsC3++Y3qoZ8oQFjOShWKl9IVcEjf84WCpaEkGrfCLU+nBme3gg1PgDm7aTeCKntgRk9tPBGCCyO8oTHN0JoywR2n7BGxnS4UsgYs09cC2KXaEy7CzTbpZsAjSMVI9wlAmLmTZtMiMw1ssEmm36ygCRLEbKkJVtGqBY2sqWWbPEn+x1R/SDJftlkmwiqbQ3ZRotq60e/GQWZLkPSBYmk2rCTlRCERQ19mRUXfu2TMsQNVKUoVXFMVa5TNRCoWhpUTRb6tg99I4q+NUbfrAuoJ+3DH6O5cGG4augGAAAAAElFTkSuQmCC",alt:""},null,-1)))],Ze=ke((()=>n("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Qe={class:"btn-two"};var ze=e(a({__name:"Benefit",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,r=l(0),c=l(0),f=l(0),b=l(),g=l(0),I=l(!0),N=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=(null==e?void 0:e.benefitRiskResultVOList[r.value])||{};c.value=a.ageBegin+1,g.value=a.ageBegin+1,f.value=a.ageEnd},S=()=>{var e,l,t;const i=null==(l=null==(e=a.info)?void 0:e.benefitRiskResultVOList)?void 0:l[r.value],{a:s,year:n}=((e,a)=>{const l=[],t=[];for(let i=e,s=0;i<=a;i++,s++)l.push(i.toString()),t.push(s+1);return{a:l,year:t}})(c.value,f.value),o={index:s.indexOf(g.value.toString()),age:s,year:n,result:null==(t=null==i?void 0:i.benefitRiskItemResultVOList)?void 0:t[0]};b.value=o},x=()=>{g.value>f.value-1||(g.value+=1,S())},M=()=>{g.value>c.value&&(g.value-=1,S())},U=e=>{r.value=e.name,N(a.info),S()},j=e=>{I.value="1"===e};return t((()=>a.info),(e=>{e&&(N(e),S())}),{deep:!0,immediate:!0}),t(g,(()=>{S()})),(e,l)=>{const t=le,N=V,S=w,P=R;return i(),s("div",ye,[Ce,h(P,{active:u(r),"title-active-color":"#0d6efe","title-inactive-color":"#393D46",shrink:"",onClickTab:U},{default:A((()=>{var e;return[(i(!0),s(k,null,y(null==(e=a.info)?void 0:e.benefitRiskResultVOList,((e,a)=>(i(),p(S,{key:a,name:a,title:e.productName},{default:A((()=>{var e,V,w,R,S,U,P,E,O,_,B,L,T,H,F,Z;return[a==u(r)?(i(),s("div",Ve,[we,u(I)?o("",!0):(i(),s("p",Re,[Ie,v(" 保单年度"),n("span",null,d(null==(w=null==(e=u(b))?void 0:e.year)?void 0:w[null==(V=u(b))?void 0:V.index]),1),v("年度，被保人"),n("span",null,d(null==(U=null==(R=u(b))?void 0:R.age)?void 0:U[null==(S=u(b))?void 0:S.index]),1),v("岁时 "),Ne])),u(I)?(i(),s("div",Se,[n("div",xe,[n("p",Me,[Ue,v(" 保单年度"),n("span",null,d(null==(O=null==(P=u(b))?void 0:P.year)?void 0:O[null==(E=u(b))?void 0:E.index]),1),v("年度，被保人"),n("span",null,d(null==(L=null==(_=u(b))?void 0:_.age)?void 0:L[null==(B=u(b))?void 0:B.index]),1),v("岁时 "),je]),n("div",Pe,[(i(!0),s(k,null,y(null==(H=null==(T=u(b))?void 0:T.result)?void 0:H.headers,((e,a)=>{var l,t,o,r,c;return i(),s("div",{key:a,style:{width:"33%"}},[n("p",Ee,d(u(m)(Number(null==(c=null==(r=null==(t=null==(l=u(b))?void 0:l.result)?void 0:t.dataList)?void 0:r[null==(o=u(b))?void 0:o.index])?void 0:c[a]))),1),n("p",Oe,d(e)+"(元）",1)])})),128))])])])):o("",!0),u(I)?o("",!0):(i(),s("div",_e,[h(ie,{min:u(c),max:u(f),current:u(g),data:null==(Z=null==(F=u(b))?void 0:F.result)?void 0:Z.benefitRiskItemList},null,8,["min","max","current","data"])])),n("div",Be,[n("div",{class:"add lf",onClick:M},Le),n("div",Te,[u(c)?(i(),p(t,{key:0,modelValue:u(g),"onUpdate:modelValue":l[0]||(l[0]=e=>C(g)?g.value=e:null),min:u(c),max:u(f),"bar-height":"8px"},{button:A((()=>[n("div",He,d(u(g))+" 岁",1)])),_:1},8,["modelValue","min","max"])):o("",!0)]),n("div",{class:"add rg",onClick:x},Fe)]),Ze,n("div",Qe,[h(N,{round:"",plain:!u(I),type:"primary",class:"btn",onClick:l[1]||(l[1]=e=>j("1"))},{default:A((()=>[v("图表展示")])),_:1},8,["plain"]),h(N,{round:"",plain:u(I),type:"primary",class:"btn",onClick:l[2]||(l[2]=e=>j("2"))},{default:A((()=>[v("趋势展示")])),_:1},8,["plain"])])])):o("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])}}}),[["__scopeId","data-v-0a70e812"]]),Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAJFBMVEVHcEwGev8Ie/8He/8QhP8Hff8Lff8ff/8Kf/8HeP8Jev8KfP88zNEzAAAADHRSTlMATTtEDx4rCBgkNDEC504AAAAAu0lEQVR42t2TzRKDMAiEV35CSN7/fTtiKOnBWz2034nZRRxYBdCJeQgKGczUz6odgSLRS2hAPxaST6XQQVm25bUUCFxlUM1c3ljeKG9m6cvzFCbs3ZXkJAN61CRIhKI3FjRtTbFzCoZ/QSlX35an2HjmORPPc0Jvs9VHsm01/kLrJcY18mMoGyAcliExCktw0t0FO+Le8WOY3QnO8RUX/RQ8T1QRVUj0cLZzefMb2UY9tmzH9iOLqiDZhBeX/QTFelEoEAAAAABJRU5ErkJggg==";const qe={class:"container"},Ke={class:"common-title"},De={class:"title"},Je=(e=>(b("data-v-524d386a"),e=e(),g(),e))((()=>n("img",{src:Ge,class:"ig"},null,-1))),We={class:"product-detail"};var Xe=e(a({__name:"LiabilityByRisk",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e;return(e,l)=>{var t;const o=K,u=se;return i(),s("div",qe,[(i(!0),s(k,null,y(null==(t=a.info)?void 0:t.liabilityByRiskVOList,((e,a)=>(i(),s("div",{key:a},[n("div",Ke,[n("div",De,[Je,v(" "+d(e.riskName),1)])]),n("div",We,[h(u,{modelValue:e.riskName1,"onUpdate:modelValue":a=>e.riskName1=a,accordion:"","is-link":!1,border:!1,size:"middle"},{default:A((()=>[(i(!0),s(k,null,y(e.proposalRiskLiabilityVOList,((e,a)=>(i(),p(o,{key:a,title:e.liabilityName,name:a,"value-class":"price",value:e.liabilityIndemnityContent},{default:A((()=>[v(d(e.liabilityDesc),1)])),_:2},1032,["title","name","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])))),128))])}}}),[["__scopeId","data-v-524d386a"]]);const $e={class:"container"},Ye={class:"common-title"},ea={class:"title"},aa=(e=>(b("data-v-4990fe38"),e=e(),g(),e))((()=>n("img",{src:Ge,class:"ig"},null,-1))),la={class:"product-detail"};var ta=e(a({__name:"LiabilityByRes",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e;return(e,l)=>{var t;const o=I,u=K,r=se;return i(),s("div",$e,[(i(!0),s(k,null,y(null==(t=a.info)?void 0:t.liabilityByTopTypeVOList,((e,a)=>(i(),s("div",{key:a},[n("div",null,[n("div",Ye,[n("div",ea,[aa,v(" "+d(e.liabilityTopTypeName),1)])]),n("div",la,[h(r,{modelValue:e.riskName1,"onUpdate:modelValue":a=>e.riskName1=a,accordion:"","is-link":!1,border:!1,size:"middle"},{default:A((()=>[(i(!0),s(k,null,y(Object.keys(e.proposalRiskLiabilityVOMap),((a,l)=>(i(),p(u,{key:l,title:a,name:l,"value-class":"price"},{default:A((()=>[(i(!0),s(k,null,y(e.proposalRiskLiabilityVOMap[a],(e=>(i(),p(o,{key:e.liabilityId,title:e.liabilityName,content:e.liabilityIndemnityContent||""},null,8,["title","content"])))),128))])),_:2},1032,["title","name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])])))),128))])}}}),[["__scopeId","data-v-4990fe38"]]);const ia=e=>(b("data-v-ca64694e"),e=e(),g(),e),sa={class:"com-insured-product-wrapper"},na={class:"container"},oa=ia((()=>n("span",{class:"clear-all"},null,-1))),da=ia((()=>n("span",{class:"title"}," 选择投保产品 ",-1))),ua={class:"popup-body"},ra={class:"cell-title"},ca={class:"title"},va={class:"error-message"},ma={class:"footer-button"};var pa=e(a({__name:"index",props:{isShow:{type:Boolean,default:!0},dataSource:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:a}){const o=e,r="已通过计划书进行投保",c="产品未授权，无法进行投保",m="产品暂不支持计划书转投保",f=l(""),b=l(null),g=l({isShow:o.isShow}),w=N((()=>e=>1===e.insured?r:1!==e.authStatus?c:1!==e.insureMethod?m:"")),R=()=>{a("close")};return t((()=>o.isShow),(e=>{g.value.isShow=e})),(l,t)=>{const o=S,r=x,c=M,m=U,I=V,N=j;return i(),s("div",sa,[h(N,{show:u(g).isShow,"onUpdate:show":t[2]||(t[2]=e=>u(g).isShow=e),position:"bottom",onClose:R},{default:A((()=>[n("div",na,[n("div",{class:"popup-header"},[oa,da,n("span",{onClick:R},"X")]),n("div",ua,[h(m,{modelValue:u(f),"onUpdate:modelValue":t[0]||(t[0]=e=>C(f)?f.value=e:null)},{default:A((()=>[h(c,null,{default:A((()=>[(i(!0),s(k,null,y(e.dataSource,(e=>(i(),p(r,{key:e.productCode,onClick:a=>{return l=e,void(w.value(l)||(b.value=l,f.value=l.productCode));var l}},{"right-icon":A((()=>[h(o,{name:e.productCode,disabled:!!u(w)(e)},null,8,["name","disabled"])])),title:A((()=>[n("div",ra,[n("div",ca,[n("p",null,d(e.productName),1),n("span",va,d(u(w)(e)),1)])])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),n("div",ma,[h(I,{block:"",type:"primary",disabled:!u(f),onClick:t[1]||(t[1]=e=>a("finished",u(b)))},{default:A((()=>[v("立即投保")])),_:1},8,["disabled"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-ca64694e"]]);const fa={class:"popup-body"},ba={class:""},ga={class:"radio-wrap"},ha=["onClick"],Aa={class:"footer"},ka=a({name:"themeSelect"}),ya=a({...ka,props:{show:{type:Boolean,default:!1},themeList:{default:()=>[]}},emits:["submit","update:show"],setup(e,{emit:a}){var t,o;const r=e,{show:c,themeList:m}=u(r),f=l(null==(t=null==m?void 0:m[0])?void 0:t.id),b=l(null==(o=null==m?void 0:m[0])?void 0:o.id),g=()=>{var e;a("submit",b.value?f.value||(null==(e=null==m?void 0:m[0])?void 0:e.id):b.value)};return(e,l)=>{const t=oe,o=x,r=S,w=M,R=U,I=V,N=O;return i(),p(N,{show:u(c),"onUpdate:show":l[2]||(l[2]=e=>C(c)?c.value=e:null),class:"theme-select-wrap",title:"选择计划书封面",onClose:l[3]||(l[3]=e=>a("update:show",!1))},{default:A((()=>[n("div",fa,[h(o,{center:"",title:"封面图"},{"right-icon":A((()=>[h(t,{modelValue:u(b),"onUpdate:modelValue":l[0]||(l[0]=e=>C(b)?b.value=e:null),"inactive-value":0,"active-value":u(m)[0].id,size:"24"},null,8,["modelValue","active-value"])])),_:1}),n("div",ba,[h(R,{modelValue:u(f),"onUpdate:modelValue":l[1]||(l[1]=e=>C(f)?f.value=e:null)},{default:A((()=>[h(w,{inset:""},{default:A((()=>[n("div",ga,[(i(!0),s(k,null,y(u(m),(e=>(i(),s("div",{key:e.id,class:"radio-item"},[n("div",{class:"radio-img",style:P({backgroundImage:`url(${e.showConfig.thumbnailImage})`}),onClick:a=>{return l=e.id,void(f.value=l);var l}},[h(r,{name:e.id},null,8,["name"])],12,ha),n("span",{class:E(""+(u(f)===e.id?"checked":""))},d(e.name),3)])))),128))])])),_:1})])),_:1},8,["modelValue"])])]),n("div",Aa,[h(I,{type:"primary",disabled:!(u(f)||!u(b)),block:"",onClick:g},{default:A((()=>[v("确定")])),_:1},8,["disabled"])])])),_:1},8,["show"])}}});const Ca=e=>(b("data-v-5b0e0cca"),e=e(),g(),e),Va={class:"head-bg"},wa={class:"container"},Ra=Ca((()=>n("div",{class:"common-title"},"保险公司简介",-1))),Ia=Ca((()=>n("span",{class:"poiner"},null,-1))),Na={key:0,class:"footer-btn"};var Sa=e(a({__name:"index",setup(e){const a=l(!0),r=_(),m=B(),{isShare:b,id:g,themeId:w}=r.query,R=l(),I=l(""),S=l(""),x=l({}),M=l([]);l();const[U,j]=L(),[P,O]=L(),ae=l(""),le=l([]),te=l(),ie=l("share");let oe="";const de=()=>{a.value=!a.value},ue=N((()=>!!M.value.filter((e=>1===e.authStatus&&1===e.insureMethod)).length));t((()=>R.value),(e=>{const{gender:a,name:l,birthday:t}=e,i=c().diff(t,"y");(e=>e===+f.MALE)(a)?S.value=`${l||i}岁先生的计划书`:S.value=`${l||i}岁女士的计划书`}));const re=e=>{var a;x.value={title:`${null==(a=R.value)?void 0:a.name}的计划书`,desc:"您的贴心保险管家",link:e,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"}},ce=e=>{const{productCode:a,insurerCode:l,tenantProductCode:t}=e;let i={};try{const e=q().get("userInfo");i=e&&JSON.parse(e)}catch(s){}Y({productCode:a,proposalId:g}).then((({code:e,data:a,message:s})=>{"10000"===e&&(a?ne({insurerCode:l,productCode:t,proposalId:g,agencyCode:i.agencyCode,agentCode:i.agentCode,tenantId:i.tenantId}).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a)})):G(s))}))},ve=()=>{var e,a;1===(null==(e=M.value)?void 0:e.length)?ce(null==(a=M.value)?void 0:a[0]):j(!0)},me=e=>{ie.value="pdf",g?(G.loading({message:"PDF生成中...",forbidClick:!0}),W({id:g,themeHistoryId:e}).then((e=>{const{code:a,message:l}=e;"10000"===a&&(G.clear(),l?m.push(`/pdfViewer?url=${encodeURIComponent(l)}&title=${S.value}`):G("计划书为空"))}))):G("PDF生成失败")},pe=async e=>{if(e){const{code:a,data:l}=await ee({themeId:e,proposalId:g});"10000"===a&&(O(!1),"pdf"===ie.value?me(l):(oe=`${z}/proposalCover?id=${g}&isShare=1&tenantId=${I.value}&themeId=${l}`,re(oe),setTimeout(te.value.handleShare,100)))}else O(!1),"pdf"===ie.value?me():(oe=`${z}/proposalCover?id=${g}&isShare=1&tenantId=${I.value}`,re(oe),setTimeout(te.value.handleShare,100))},fe=()=>{ie.value="pdf",le.value.length?O(!0):me()};return T((()=>{if(r.query.token){new H({source:"localStorage"}).set("token",r.query.token)}b||($({proposalId:g}).then((({code:e,data:a})=>{"10000"===e&&(M.value=a)})),(async()=>{const{code:e,data:a}=await X();"10000"===e&&(le.value=a||[])})()),(async()=>{try{let e=null;e=b?await D(`${g}?tenantId=${r.query.tenantId}`):await J(g);const{code:a,data:l}=e;if("10000"===a){const e=(null==l?void 0:l.proposalInsuredVOList[0])||{};R.value=e,I.value=null==l?void 0:l.tenantId,oe=`${z}/proposalCover?id=${g}&isShare=1&tenantId=${I.value}`,re(oe)}}catch(e){G("接口请求失败")}})()})),(e,l)=>{const t=K,r=se,c=V,m=F("ProPageWrap");return i(),p(m,null,{default:A((()=>[n("div",{class:E(["page-composition-proposal",{"page-proposal-bottom":!u(b)}])},[n("div",Va,d(u(S)),1),h(Ae,{info:u(R)},null,8,["info"]),n("div",{class:"switch-btn",onClick:de},d(u(a)?"按责任显示":"按险种显示"),1),u(a)?(i(),p(Xe,{key:0,info:u(R)},null,8,["info"])):(i(),p(ta,{key:1,info:u(R)},null,8,["info"])),h(ze,{info:u(R)},null,8,["info"]),n("div",wa,[Ra,h(r,{modelValue:u(ae),"onUpdate:modelValue":l[0]||(l[0]=e=>C(ae)?ae.value=e:null),accordion:"","is-link":!1,border:!1,size:"middle"},{default:A((()=>{var e;return[(i(!0),s(k,null,y(null==(e=u(R))?void 0:e.insurerInfoVOList,((e,a)=>(i(),p(t,{key:a,name:a,"value-class":"price"},{title:A((()=>[n("div",null,[Ia,v(" "+d(null==e?void 0:e.insurerName),1)])])),default:A((()=>[v(" "+d(e.insurerDesc),1)])),_:2},1032,["name"])))),128))]})),_:1},8,["modelValue"])])],2),u(b)?o("",!0):(i(),s("div",Na,[h(Z,{ref_key:"shareButtonRef",ref:te,title:u(x).title,desc:u(x).desc,link:u(x).link,"img-url":u(x).imgUrl},{default:A((()=>[h(c,{type:"primary",class:"share-btn",onClick:l[1]||(l[1]=Q((()=>(ie.value="share",void(le.value.length?O(!0):te.value.handleShare()))),["stop"]))},{default:A((()=>[v("分享")])),_:1})])),_:1},8,["title","desc","link","img-url"]),h(c,{plain:"",type:"primary",class:"btn",onClick:fe},{default:A((()=>[v("生成PDF")])),_:1}),u(ue)?(i(),p(c,{key:0,type:"primary",class:"btn",onClick:ve},{default:A((()=>[v("立即投保")])),_:1})):o("",!0)])),u(U)?(i(),p(pa,{key:1,"is-show":u(U),"data-source":u(M),onFinished:ce,onClose:l[2]||(l[2]=e=>u(j)(!1))},null,8,["is-show","data-source"])):o("",!0),(i(),p(ya,{key:+u(P),show:u(P),"onUpdate:show":l[3]||(l[3]=e=>C(P)?P.value=e:null),"theme-list":u(le),onSubmit:pe},null,8,["show","theme-list"]))])),_:1})}}}),[["__scopeId","data-v-5b0e0cca"]]);export{Sa as default};
