import{G as e,d as a,r as l,R as i,c as t,A as s,f as n,h as o,E as d,g as u,c6 as r,y as c,j as v,at as m,e as p,S as f,al as b,am as h,i as g,w as A,U as k,V as y,a2 as C,B as w,au as V,av as R,W as I,L as N,b8 as S,aA as x,bM as M,ba as U,bD as j,bw as P,F as E,ak as _,u as O,a as B,ac as L,a1 as T,aq as H,b as F,aF as Z,bx as Q,c7 as z,T as G}from"./index-4b076a64.js";import{C as q}from"./index-90465574.js";import{b as D,c as K,g as W}from"./proposalList-68e409b4.js";import{q as J,p as X,c as $,a as Y}from"./compositionProposal-8f273b11.js";import{P as ee}from"./index-0184cac2.js";import{S as ae,_ as le}from"./box-title-97234e1d.js";import{_ as ie}from"./index-e1e9c71b.js";import{C as te}from"./index-7ef23191.js";import{d as se}from"./trial-dc09a508.js";/* empty css              */import{S as ne}from"./index-e02c34bd.js";import"./pdfh5-008ca364.js";import"./echarts-ac920fed.js";const oe={class:"container head-cover"},de={class:"info-detail"},ue={class:"name"},re={class:"img"},ce={key:0,src:"/static/png/male-441ae760.png"},ve={key:1,src:"/static/png/female-2dc8cc10.png"},me={clase:"p1"},pe={class:"p2"},fe={class:"fe"},be=(e=>(b("data-v-0ae855a4"),e=e(),h(),e))((()=>n("div",{class:"line"},null,-1))),he={class:"tp"};var ge=e(a({__name:"InsuranceList",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,b=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保额",dataIndex:"amount"},{title:"保障期间",dataIndex:"coveragePeriod",width:110},{title:"缴费期间",dataIndex:"chargePeriod",width:110},{title:"保费",dataIndex:"premium",width:120}],h=l([]),g=e=>e===+f.MALE,A=e=>{const a=e.split("_");if("to_life"===e)return"保终身";switch(a[0]){case"year":return`${a[1]}年`;case"month":return`${a[1]}月`;case"day":return`${a[1]}天`;case"to":return`保至${a[1]}岁`;default:return""}},k=e=>{const a=e.split("_");switch(a[0]){case"year":return`${a[1]}年交`;case"month":return`${a[1]}月交`;case"to":return`交至${a[1]}岁`;case"single":return"趸缴";default:return""}};return i((()=>a.info),(e=>{(e=>{const a=[];null==e||e.forEach((e=>{const{riskName:l,amount:i,coveragePeriod:t,chargePeriod:s,premium:n}=e;a.push({riskName:l,amount:i,coveragePeriod:A(t),chargePeriod:k(s),premium:n})})),h.value=a})(null==e?void 0:e.proposalProductRiskVOList)}),{deep:!0,immediate:!0}),(l,i)=>{var f,A,k,y,C,w;return t(),s("div",oe,[n("div",de,[n("div",ue,[n("div",re,[g(null==(f=a.info)?void 0:f.gender)?(t(),s("img",ce)):o("",!0),g(null==(A=a.info)?void 0:A.gender)?o("",!0):(t(),s("img",ve))]),n("div",null,[n("p",me,d(null==(k=a.info)?void 0:k.name),1),n("p",pe,d(u(r)[null==(y=a.info)?void 0:y.gender])+"，"+d(u(c)().diff(null==(C=e.info)?void 0:C.birthday,"y"))+"岁",1)])]),n("div",fe,[v(" 首年保费： "),n("span",null,"¥"+d(u(m)(null==(w=a.info)?void 0:w.totalPremium)),1)])]),be,n("div",he,[u(h).length>0?(t(),p(ee,{key:0,columns:b,class:"table","data-source":u(h)},null,8,["data-source"])):o("",!0)])])}}}),[["__scopeId","data-v-0ae855a4"]]);const Ae=e=>(b("data-v-f8272ed6"),e=e(),h(),e),ke={class:"container"},ye=Ae((()=>n("div",{class:"common-title"},"利益演示",-1))),Ce={key:0,class:"benefit"},we={key:0,class:"box-title box-title-chart"},Ve=Ae((()=>n("img",{src:le,alt:""},null,-1))),Re=Ae((()=>n("img",{src:le,alt:""},null,-1))),Ie={key:1},Ne={class:"box"},Se={class:"box-title"},xe=Ae((()=>n("img",{src:le,alt:""},null,-1))),Me=Ae((()=>n("img",{src:le,alt:""},null,-1))),Ue={class:"box-price"},je={class:"text1"},Pe={class:"text2"},Ee={key:2,style:{width:"100%, minWidth: 338px"}},_e={class:"slider"},Oe=[Ae((()=>n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAASFBMVEVHcEwNbv8Mbf8TcP8Nbv8Nb/8Nb/8Nbv8qf/8Nb/8Nbv8Mb/8PcP8Nbv8Pcv8Mb/8Pb/8PcP8Ocf8Nbv8Ob/8Vf/8Nbv8Nbv+Jn3KrAAAAF3RSTlMAlLEZ0ID47wZx3WBTiDGeOUQk57UMuVjVO7sAAAHeSURBVHjarVjZkoMgEARkuURIXI///9Mtga0igkGZ6RcThXa6cTiGfIMbJ8aNFEIazqbRkR4Mmsn9BMn08IxFjdt+gW1Ut2lW/bt/wa9e70Wjc0lm8XSaqF9MLlHfiOrFM0dc1kG5zDX+aoVDU0vBrKo8tkykBvRrUDNPNHS4HE2aqPh8zfNOoUeaa6ok/U0uYEWuv+2jsKSKcQ/wijShfGw7VuOJzzS5BR1b24o/oqa75aco2s/hvpnJbcwmvPnUQ/F0t4Hy3fzT0jiiDV2FuvitfIxn4fMDx19nYZ48hj+J0+n/Yyj+oWSVMcIOBE/kmgdESRdoFpI65kMx9BEN4pgzoysjIKAYUsq5LQUECGkLvw5KRrrBjv7Dv9W2n8gGuxOjVP1ESiZF6QrTJglxRZZ1ZZwjY7wA4OIHMB0XBSFSB8MUFBoCggkuH/m7wIiWY+4IdB5G5IMoWSaa/WnAlukmiQhO5Zj2JsoOokIk20SyJKpI420iXkqrmO14k8eVZqMNP9oHiZYiaEmLNo1gTWxoUy3a5I+2HGEtkGhLNtomAmtbg7zRgm/9sDej8O0x/oYdfoTAP9TAj1nwgx/+URR+OIYf15ELCPCSBn6RBV72gRei8Etj+MU6tPLhH41GXfO43AIjAAAAAElFTkSuQmCC",alt:""},null,-1)))],Be={style:{flex:"1",margin:"0px 5px"}},Le={class:"custom-button"},Te=[Ae((()=>n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAS1BMVEVHcEwNb/8Nbv8Ocf8Mbv8Nbf8Nbv8Qcf8zmf8Nbv8Nbv8Wbv8Ocv8Nb/8Nb/8NcP8Nbf8PcP8cjf8Nbv8Nbv8NcP8OcP8Nbv8Nbv+sb0c3AAAAGHRSTlMAXpwhsunxPwX5khcy3m5xzVQJ0oh0Rrn3uGXUAAACAUlEQVR42q2YWZKFIAxFg4KAiLM+9r/SLgNdj24VFXM+tMrhmkCCJJCiYTOfrNBa2InPrIEcTMsr94+KtwYeMbKPO+HDxvsyi3AJxHJPSnWxjOVFPc91wW0s1Sm4RE7RiDTRC6qJRm2SV+bUzqP5oA5uD1w7T500quyDTF2ePlIHqb5MuBVMLwwkMEVw/dS9QftPXQZe4w3XAxzCgjkKLlHBKHZoj0M6uEXnkAObpEa/V7jJWqF3cjcZeN2WcJvS4pf/vaH6cPU+4du9ghgfhys8YvWRCRESL7XwkNZtyMixCecdHlNg3ql4LtHZY5gQDI5R/Z+IGXHdOItno53T5izGcVUZwbMkHZM4DknnlsggbfKEjP6axPwk5glB/c25z2ZQmStUbiZ90LjtQQ65QsC3++Y3qoZ8oQFjOShWKl9IVcEjf84WCpaEkGrfCLU+nBme3gg1PgDm7aTeCKntgRk9tPBGCCyO8oTHN0JoywR2n7BGxnS4UsgYs09cC2KXaEy7CzTbpZsAjSMVI9wlAmLmTZtMiMw1ssEmm36ygCRLEbKkJVtGqBY2sqWWbPEn+x1R/SDJftlkmwiqbQ3ZRotq60e/GQWZLkPSBYmk2rCTlRCERQ19mRUXfu2TMsQNVKUoVXFMVa5TNRCoWhpUTRb6tg99I4q+NUbfrAuoJ+3DH6O5cGG4augGAAAAAElFTkSuQmCC",alt:""},null,-1)))],He=Ae((()=>n("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Fe={class:"btn-two"};var Ze=e(a({__name:"Benefit",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,r=l(0),c=l(0),f=l(0),b=l(),h=l(0),I=l(!0),N=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=(null==e?void 0:e.benefitRiskResultVOList[r.value])||{};c.value=a.ageBegin+1,h.value=a.ageBegin+1,f.value=a.ageEnd},S=()=>{var e,l,i;const t=null==(l=null==(e=a.info)?void 0:e.benefitRiskResultVOList)?void 0:l[r.value],{a:s,year:n}=((e,a)=>{const l=[],i=[];for(let t=e,s=0;t<=a;t++,s++)l.push(t.toString()),i.push(s+1);return{a:l,year:i}})(c.value,f.value),o={index:s.indexOf(h.value.toString()),age:s,year:n,result:null==(i=null==t?void 0:t.benefitRiskItemResultVOList)?void 0:i[0]};b.value=o},x=()=>{h.value>f.value-1||(h.value+=1,S())},M=()=>{h.value>c.value&&(h.value-=1,S())},U=e=>{r.value=e.name,N(a.info),S()},j=e=>{I.value="1"===e};return i((()=>a.info),(e=>{e&&(N(e),S())}),{deep:!0,immediate:!0}),i(h,(()=>{S()})),(e,l)=>{const i=ae,N=w,S=V,P=R;return t(),s("div",ke,[ye,g(P,{active:u(r),"title-active-color":"#0d6efe","title-inactive-color":"#393D46",shrink:"",onClickTab:U},{default:A((()=>{var e;return[(t(!0),s(k,null,y(null==(e=a.info)?void 0:e.benefitRiskResultVOList,((e,a)=>(t(),p(S,{key:a,name:a,title:e.productName},{default:A((()=>{var e,w,V,R,S,U,P,E,_,O,B,L,T,H,F,Z;return[a==u(r)?(t(),s("div",Ce,[u(I)?o("",!0):(t(),s("div",we,[Ve,n("div",null,[v(" 保单年度"),n("span",null,d(null==(V=null==(e=u(b))?void 0:e.year)?void 0:V[null==(w=u(b))?void 0:w.index]),1),v("年度，被保人"),n("span",null,d(null==(U=null==(R=u(b))?void 0:R.age)?void 0:U[null==(S=u(b))?void 0:S.index]),1),v("岁时 ")]),Re])),u(I)?(t(),s("div",Ie,[n("div",Ne,[n("div",Se,[xe,n("div",null,[v(" 保单年度"),n("span",null,"  "+d(null==(_=null==(P=u(b))?void 0:P.year)?void 0:_[null==(E=u(b))?void 0:E.index])+"  ",1),v("年度，被保人"),n("span",null,"  "+d(null==(L=null==(O=u(b))?void 0:O.age)?void 0:L[null==(B=u(b))?void 0:B.index])+"  ",1),v("岁时 ")]),Me]),n("div",Ue,[(t(!0),s(k,null,y(null==(H=null==(T=u(b))?void 0:T.result)?void 0:H.headers,((e,a)=>{var l,i,o,r,c;return t(),s("div",{key:a,style:{width:"33%"}},[n("p",je,d(u(m)(Number(null==(c=null==(r=null==(i=null==(l=u(b))?void 0:l.result)?void 0:i.dataList)?void 0:r[null==(o=u(b))?void 0:o.index])?void 0:c[a]))||"--"),1),n("p",Pe,d(e)+"(元）",1)])})),128))])])])):o("",!0),u(I)?o("",!0):(t(),s("div",Ee,[g(ie,{min:u(c),max:u(f),current:u(h),data:null==(Z=null==(F=u(b))?void 0:F.result)?void 0:Z.benefitRiskItemList},null,8,["min","max","current","data"])])),n("div",_e,[n("div",{class:"add lf",onClick:M},Oe),n("div",Be,[u(c)?(t(),p(i,{key:0,modelValue:u(h),"onUpdate:modelValue":l[0]||(l[0]=e=>C(h)?h.value=e:null),min:u(c),max:u(f),"bar-height":"8px"},{button:A((()=>[n("div",Le,d(u(h))+" 岁",1)])),_:1},8,["modelValue","min","max"])):o("",!0)]),n("div",{class:"add rg",onClick:x},Te)]),He,n("div",Fe,[g(N,{round:"",plain:!u(I),type:"primary",class:"btn",onClick:l[1]||(l[1]=e=>j("1"))},{default:A((()=>[v("图表展示")])),_:1},8,["plain"]),g(N,{round:"",plain:u(I),type:"primary",class:"btn",onClick:l[2]||(l[2]=e=>j("2"))},{default:A((()=>[v("趋势展示")])),_:1},8,["plain"])])])):o("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])}}}),[["__scopeId","data-v-f8272ed6"]]),Qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAJFBMVEVHcEwGev8Ie/8He/8QhP8Hff8Lff8ff/8Kf/8HeP8Jev8KfP88zNEzAAAADHRSTlMATTtEDx4rCBgkNDEC504AAAAAu0lEQVR42t2TzRKDMAiEV35CSN7/fTtiKOnBWz2034nZRRxYBdCJeQgKGczUz6odgSLRS2hAPxaST6XQQVm25bUUCFxlUM1c3ljeKG9m6cvzFCbs3ZXkJAN61CRIhKI3FjRtTbFzCoZ/QSlX35an2HjmORPPc0Jvs9VHsm01/kLrJcY18mMoGyAcliExCktw0t0FO+Le8WOY3QnO8RUX/RQ8T1QRVUj0cLZzefMb2UY9tmzH9iOLqiDZhBeX/QTFelEoEAAAAABJRU5ErkJggg==";const ze={class:"container"},Ge={class:"common-title"},qe={class:"title"},De=(e=>(b("data-v-e1a00146"),e=e(),h(),e))((()=>n("img",{src:Qe,class:"ig"},null,-1))),Ke={class:"product-detail"},We=["innerHTML"];var Je=e(a({__name:"LiabilityByRisk",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e;return(e,l)=>{var i;const o=q,u=te;return t(),s("div",ze,[(t(!0),s(k,null,y(null==(i=a.info)?void 0:i.liabilityByRiskVOList,((e,a)=>(t(),s("div",{key:a},[n("div",Ge,[n("div",qe,[De,v(" "+d(e.riskName),1)])]),n("div",Ke,[g(u,{modelValue:e.riskName1,"onUpdate:modelValue":a=>e.riskName1=a,accordion:"","is-link":!1,border:!1,size:"middle"},{default:A((()=>[(t(!0),s(k,null,y(e.proposalRiskLiabilityVOList,((e,a)=>(t(),p(o,{key:a,title:e.liabilityName,name:a,"value-class":"price",value:e.liabilityIndemnityContent},{default:A((()=>[n("div",{innerHTML:e.liabilityDesc},null,8,We)])),_:2},1032,["title","name","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])))),128))])}}}),[["__scopeId","data-v-e1a00146"]]);const Xe={class:"container"},$e={class:"common-title"},Ye={class:"title"},ea=(e=>(b("data-v-4990fe38"),e=e(),h(),e))((()=>n("img",{src:Qe,class:"ig"},null,-1))),aa={class:"product-detail"};var la=e(a({__name:"LiabilityByRes",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e;return(e,l)=>{var i;const o=I,u=q,r=te;return t(),s("div",Xe,[(t(!0),s(k,null,y(null==(i=a.info)?void 0:i.liabilityByTopTypeVOList,((e,a)=>(t(),s("div",{key:a},[n("div",null,[n("div",$e,[n("div",Ye,[ea,v(" "+d(e.liabilityTopTypeName),1)])]),n("div",aa,[g(r,{modelValue:e.riskName1,"onUpdate:modelValue":a=>e.riskName1=a,accordion:"","is-link":!1,border:!1,size:"middle"},{default:A((()=>[(t(!0),s(k,null,y(Object.keys(e.proposalRiskLiabilityVOMap),((a,l)=>(t(),p(u,{key:l,title:a,name:l,"value-class":"price"},{default:A((()=>[(t(!0),s(k,null,y(e.proposalRiskLiabilityVOMap[a],(e=>(t(),p(o,{key:e.liabilityId,title:e.liabilityName,content:e.liabilityIndemnityContent||""},null,8,["title","content"])))),128))])),_:2},1032,["title","name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])])])))),128))])}}}),[["__scopeId","data-v-4990fe38"]]);const ia=e=>(b("data-v-ca64694e"),e=e(),h(),e),ta={class:"com-insured-product-wrapper"},sa={class:"container"},na=ia((()=>n("span",{class:"clear-all"},null,-1))),oa=ia((()=>n("span",{class:"title"}," 选择投保产品 ",-1))),da={class:"popup-body"},ua={class:"cell-title"},ra={class:"title"},ca={class:"error-message"},va={class:"footer-button"};var ma=e(a({__name:"index",props:{isShow:{type:Boolean,default:!0},dataSource:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:a}){const o=e,r="已通过计划书进行投保",c="产品未授权，无法进行投保",m="产品暂不支持计划书转投保",f=l(""),b=l(null),h=l({isShow:o.isShow}),V=N((()=>e=>1===e.insured?r:1!==e.authStatus?c:1!==e.insureMethod?m:"")),R=()=>{a("close")};return i((()=>o.isShow),(e=>{h.value.isShow=e})),(l,i)=>{const o=S,r=x,c=M,m=U,I=w,N=j;return t(),s("div",ta,[g(N,{show:u(h).isShow,"onUpdate:show":i[2]||(i[2]=e=>u(h).isShow=e),position:"bottom",onClose:R},{default:A((()=>[n("div",sa,[n("div",{class:"popup-header"},[na,oa,n("span",{onClick:R},"X")]),n("div",da,[g(m,{modelValue:u(f),"onUpdate:modelValue":i[0]||(i[0]=e=>C(f)?f.value=e:null)},{default:A((()=>[g(c,null,{default:A((()=>[(t(!0),s(k,null,y(e.dataSource,(e=>(t(),p(r,{key:e.productCode,onClick:a=>{return l=e,void(V.value(l)||(b.value=l,f.value=l.productCode));var l}},{"right-icon":A((()=>[g(o,{name:e.productCode,disabled:!!u(V)(e)},null,8,["name","disabled"])])),title:A((()=>[n("div",ua,[n("div",ra,[n("p",null,d(e.productName),1),n("span",ca,d(u(V)(e)),1)])])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),n("div",va,[g(I,{block:"",type:"primary",disabled:!u(f),onClick:i[1]||(i[1]=e=>a("finished",u(b)))},{default:A((()=>[v("立即投保")])),_:1},8,["disabled"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-ca64694e"]]);const pa={class:"popup-body"},fa={class:""},ba={class:"radio-wrap"},ha=["onClick"],ga={class:"footer"},Aa=a({name:"themeSelect"}),ka=a({...Aa,props:{show:{type:Boolean,default:!1},themeList:{default:()=>[]}},emits:["submit","update:show"],setup(e,{emit:a}){var i,o;const r=e,{show:c,themeList:m}=u(r),f=l(null==(i=null==m?void 0:m[0])?void 0:i.id),b=l(null==(o=null==m?void 0:m[0])?void 0:o.id),h=()=>{var e;a("submit",b.value?f.value||(null==(e=null==m?void 0:m[0])?void 0:e.id):b.value)};return(e,l)=>{const i=ne,o=x,r=S,V=M,R=U,I=w,N=_;return t(),p(N,{show:u(c),"onUpdate:show":l[2]||(l[2]=e=>C(c)?c.value=e:null),class:"theme-select-wrap",title:"选择计划书封面",onClose:l[3]||(l[3]=e=>a("update:show",!1))},{default:A((()=>[n("div",pa,[g(o,{center:"",title:"封面图"},{"right-icon":A((()=>[g(i,{modelValue:u(b),"onUpdate:modelValue":l[0]||(l[0]=e=>C(b)?b.value=e:null),"inactive-value":0,"active-value":u(m)[0].id,size:"24"},null,8,["modelValue","active-value"])])),_:1}),n("div",fa,[g(R,{modelValue:u(f),"onUpdate:modelValue":l[1]||(l[1]=e=>C(f)?f.value=e:null)},{default:A((()=>[g(V,{inset:""},{default:A((()=>[n("div",ba,[(t(!0),s(k,null,y(u(m),(e=>(t(),s("div",{key:e.id,class:"radio-item"},[n("div",{class:"radio-img",style:P({backgroundImage:`url(${e.showConfig.thumbnailImage})`}),onClick:a=>{return l=e.id,void(f.value=l);var l}},[g(r,{name:e.id},null,8,["name"])],12,ha),n("span",{class:E(""+(u(f)===e.id?"checked":""))},d(e.name),3)])))),128))])])),_:1})])),_:1},8,["modelValue"])])]),n("div",ga,[g(I,{type:"primary",disabled:!(u(f)||!u(b)),block:"",onClick:h},{default:A((()=>[v("确定")])),_:1},8,["disabled"])])])),_:1},8,["show"])}}});const ya=e=>(b("data-v-608c0890"),e=e(),h(),e),Ca={class:"head-bg"},wa={class:"container"},Va=ya((()=>n("div",{class:"common-title"},"保险公司简介",-1))),Ra=ya((()=>n("span",{class:"poiner"},null,-1))),Ia={key:0,class:"footer-btn"};var Na=e(a({__name:"index",setup(e){const a=l(!0),r=O(),m=B(),{isShare:b,id:h,themeId:V}=r.query,R=l(),I=l(""),S=l(""),x=l({}),M=l([]);l();const[U,j]=L(),[P,_]=L(),ee=l(""),ae=l([]),le=l(),ie=l("share");let ne="";const oe=()=>{a.value=!a.value},de=N((()=>!!M.value.filter((e=>1===e.authStatus&&1===e.insureMethod)).length));i((()=>R.value),(e=>{const{gender:a,name:l,birthday:i}=e,t=c().diff(i,"y");(e=>e===+f.MALE)(a)?S.value=`${l||t}岁先生的计划书`:S.value=`${l||t}岁女士的计划书`}));const ue=e=>{var a;x.value={title:`${null==(a=R.value)?void 0:a.name}的计划书`,desc:"您的贴心保险管家",link:e,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"}},re=e=>{const{productCode:a,insurerCode:l,tenantProductCode:i}=e;$({productCode:a,proposalId:h}).then((({code:e,data:a,message:t})=>{"10000"===e&&(a?se({insurerCode:l,productCode:i,proposalId:h}).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a)})):G(t))}))},ce=()=>{var e,a;1===(null==(e=M.value)?void 0:e.length)?re(null==(a=M.value)?void 0:a[0]):j(!0)},ve=e=>{ie.value="pdf",h?(G.loading({message:"PDF生成中...",forbidClick:!0}),W({id:h,themeHistoryId:e}).then((e=>{const{code:a,message:l}=e;"10000"===a&&(G.clear(),l?m.push(`/pdfViewer?url=${encodeURIComponent(l)}&title=${encodeURIComponent(S.value)}`):G("计划书为空"))}))):G("PDF生成失败")},me=async e=>{if(e){const{code:a,data:l}=await Y({themeId:e,proposalId:h});"10000"===a&&(_(!1),"pdf"===ie.value?ve(l):(ne=`${z}/proposalCover?id=${h}&isShare=1&tenantId=${I.value}&themeId=${l}`,ue(ne),setTimeout(le.value.handleShare,100)))}else _(!1),"pdf"===ie.value?ve():(ne=`${z}/proposalCover?id=${h}&isShare=1&tenantId=${I.value}`,ue(ne),setTimeout(le.value.handleShare,100))},pe=()=>{ie.value="pdf",ae.value.length?_(!0):ve()};return T((()=>{if(r.query.token){new H({source:"localStorage"}).set("token",r.query.token)}b||(X({proposalId:h}).then((({code:e,data:a})=>{"10000"===e&&(M.value=a)})),(async()=>{const{code:e,data:a}=await J();"10000"===e&&(ae.value=a||[])})()),(async()=>{try{let e=null;e=b?await D(`${h}?tenantId=${r.query.tenantId}`):await K(h);const{code:a,data:l}=e;if("10000"===a){const e=(null==l?void 0:l.proposalInsuredVOList[0])||{};R.value=e,I.value=null==l?void 0:l.tenantId,ne=`${z}/proposalCover?id=${h}&isShare=1&tenantId=${I.value}`,ue(ne)}}catch(e){G("接口请求失败")}})()})),(e,l)=>{const i=q,r=te,c=w,m=F("ProPageWrap");return t(),p(m,null,{default:A((()=>[n("div",{class:E(["page-composition-proposal",{"page-proposal-bottom":!u(b)}])},[n("div",Ca,d(u(S)),1),g(ge,{info:u(R)},null,8,["info"]),n("div",{class:"switch-btn",onClick:oe},d(u(a)?"按责任显示":"按险种显示"),1),u(a)?(t(),p(Je,{key:0,info:u(R)},null,8,["info"])):(t(),p(la,{key:1,info:u(R)},null,8,["info"])),g(Ze,{info:u(R)},null,8,["info"]),n("div",wa,[Va,g(r,{modelValue:u(ee),"onUpdate:modelValue":l[0]||(l[0]=e=>C(ee)?ee.value=e:null),accordion:"","is-link":!1,border:!1,size:"middle"},{default:A((()=>{var e;return[(t(!0),s(k,null,y(null==(e=u(R))?void 0:e.insurerInfoVOList,((e,a)=>(t(),p(i,{key:a,name:a,"value-class":"price"},{title:A((()=>[n("div",null,[Ra,v(" "+d(null==e?void 0:e.insurerName),1)])])),default:A((()=>[v(" "+d(e.insurerDesc),1)])),_:2},1032,["name"])))),128))]})),_:1},8,["modelValue"])])],2),u(b)?o("",!0):(t(),s("div",Ia,[g(Z,{ref_key:"shareButtonRef",ref:le,title:u(x).title,desc:u(x).desc,link:u(x).link,"img-url":u(x).imgUrl},{default:A((()=>[g(c,{type:"primary",class:"share-btn",onClick:l[1]||(l[1]=Q((()=>(ie.value="share",void(ae.value.length?_(!0):le.value.handleShare()))),["stop"]))},{default:A((()=>[v("分享")])),_:1})])),_:1},8,["title","desc","link","img-url"]),g(c,{plain:"",type:"primary",class:"btn",onClick:pe},{default:A((()=>[v("生成PDF")])),_:1}),u(de)?(t(),p(c,{key:0,type:"primary",class:"btn",onClick:ce},{default:A((()=>[v("立即投保")])),_:1})):o("",!0)])),u(U)?(t(),p(ma,{key:1,"is-show":u(U),"data-source":u(M),onFinished:re,onClose:l[2]||(l[2]=e=>u(j)(!1))},null,8,["is-show","data-source"])):o("",!0),(t(),p(ka,{key:+u(P),show:u(P),"onUpdate:show":l[3]||(l[3]=e=>C(P)?P.value=e:null),"theme-list":u(ae),onSubmit:me},null,8,["show","theme-list"]))])),_:1})}}}),[["__scopeId","data-v-608c0890"]]);export{Na as default};
