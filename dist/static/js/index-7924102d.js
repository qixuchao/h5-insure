import{G as e,d as a,r as l,V as i,b as t,c as s,i as n,$ as o,h as d,E as u,f as r,c0 as c,z as v,j as m,aN as p,g as f,S as b,aD as h,aE as g,e as A,w as y,a7 as k,a0 as C,B as w,aO as V,aP as R,bz as I,L as S,T as x,aW as N,bo as P,bE as M,aY as E,ai as O,aK as _,F as U,a$ as j,bH as L,u as B,a as T,aZ as H,Z,a6 as F,a3 as z,ab as Q,aa as G,c1 as q,bq as D}from"./index-9e81d346.js";import{C as K}from"./index-234ee734.js";import{b as W,c as J,g as $}from"./proposalList-df4894d4.js";import{q as X,p as Y,c as ee,a as ae}from"./compositionProposal-f6d17921.js";import{P as le}from"./index-25dbb009.js";import{S as ie,_ as te}from"./box-title-d767e088.js";import{_ as se}from"./index-35310a4d.js";import{C as ne}from"./index-3d2df3c0.js";import{d as oe}from"./trial-7a766c2e.js";/* empty css              */import{S as de}from"./index-3e85d93a.js";const ue={class:"container head-cover"},re={class:"info-detail"},ce={class:"name"},ve={class:"img"},me={key:0,src:"/static/png/male-441ae760.png"},pe={key:1,src:"/static/png/female-2dc8cc10.png"},fe={clase:"p1"},be={class:"p2"},he={class:"fe"},ge=(e=>(h("data-v-07cb0a74"),e=e(),g(),e))((()=>n("div",{class:"line"},null,-1))),Ae={class:"tp"};var ye=e(a({__name:"InsuranceList",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,h=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保额",dataIndex:"initialAmount"},{title:"保障期间",dataIndex:"coveragePeriod",width:110},{title:"交费期间",dataIndex:"chargePeriod",width:110},{title:"保费",dataIndex:"initialPremium",width:120}],g=l([]),A=e=>{const a=e.split("_");if("to_life"===e)return"保终身";switch(a[0]){case"year":return`${a[1]}年`;case"month":return`${a[1]}月`;case"day":return`${a[1]}天`;case"to":return`保至${a[1]}岁`;default:return""}},y=e=>{const a=e.split("_");switch(a[0]){case"year":return`${a[1]}年交`;case"month":return`${a[1]}月交`;case"to":return`交至${a[1]}岁`;case"single":return"趸缴";default:return""}};return i((()=>a.info),(e=>{(e=>{const a=[];null==e||e.forEach((e=>{const{riskName:l,initialAmount:i,coveragePeriod:t,chargePeriod:s,initialPremium:n}=e;a.push({riskName:l,initialAmount:i,coveragePeriod:A(t),chargePeriod:y(s),initialPremium:n})})),g.value=a})(null==e?void 0:e.proposalProductRiskVOList)}),{deep:!0,immediate:!0}),(l,i)=>{var A,y,k,C,w,V,R;return t(),s("div",ue,[n("div",re,[n("div",ce,[n("div",ve,[(null==(A=a.info)?void 0:A.gender)?(t(),s(o,{key:0},[(R=null==(y=a.info)?void 0:y.gender,R===+b.MALE?(t(),s("img",me)):(t(),s("img",pe)))],64)):d("",!0)]),n("div",null,[n("p",fe,u(null==(k=a.info)?void 0:k.name),1),n("p",be,u(r(c)[null==(C=a.info)?void 0:C.gender])+"，"+u(r(v)().diff(null==(w=e.info)?void 0:w.birthday,"y"))+"岁",1)])]),n("div",he,[m(" 首年保费： "),n("span",null,"¥"+u(r(p)(null==(V=a.info)?void 0:V.totalPremium)),1)])]),ge,n("div",Ae,[r(g).length>0?(t(),f(le,{key:0,columns:h,class:"table","data-source":r(g)},null,8,["data-source"])):d("",!0)])])}}}),[["__scopeId","data-v-07cb0a74"]]);const ke=e=>(h("data-v-f8272ed6"),e=e(),g(),e),Ce={class:"container"},we=ke((()=>n("div",{class:"common-title"},"利益演示",-1))),Ve={key:0,class:"benefit"},Re={key:0,class:"box-title box-title-chart"},Ie=ke((()=>n("img",{src:te,alt:""},null,-1))),Se=ke((()=>n("img",{src:te,alt:""},null,-1))),xe={key:1},Ne={class:"box"},Pe={class:"box-title"},Me=ke((()=>n("img",{src:te,alt:""},null,-1))),Ee=ke((()=>n("img",{src:te,alt:""},null,-1))),Oe={class:"box-price"},_e={class:"text1"},Ue={class:"text2"},je={key:2,style:{width:"100%, minWidth: 338px"}},Le={class:"slider"},Be=[ke((()=>n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAASFBMVEVHcEwNbv8Mbf8TcP8Nbv8Nb/8Nb/8Nbv8qf/8Nb/8Nbv8Mb/8PcP8Nbv8Pcv8Mb/8Pb/8PcP8Ocf8Nbv8Ob/8Vf/8Nbv8Nbv+Jn3KrAAAAF3RSTlMAlLEZ0ID47wZx3WBTiDGeOUQk57UMuVjVO7sAAAHeSURBVHjarVjZkoMgEARkuURIXI///9Mtga0igkGZ6RcThXa6cTiGfIMbJ8aNFEIazqbRkR4Mmsn9BMn08IxFjdt+gW1Ut2lW/bt/wa9e70Wjc0lm8XSaqF9MLlHfiOrFM0dc1kG5zDX+aoVDU0vBrKo8tkykBvRrUDNPNHS4HE2aqPh8zfNOoUeaa6ok/U0uYEWuv+2jsKSKcQ/wijShfGw7VuOJzzS5BR1b24o/oqa75aco2s/hvpnJbcwmvPnUQ/F0t4Hy3fzT0jiiDV2FuvitfIxn4fMDx19nYZ48hj+J0+n/Yyj+oWSVMcIOBE/kmgdESRdoFpI65kMx9BEN4pgzoysjIKAYUsq5LQUECGkLvw5KRrrBjv7Dv9W2n8gGuxOjVP1ESiZF6QrTJglxRZZ1ZZwjY7wA4OIHMB0XBSFSB8MUFBoCggkuH/m7wIiWY+4IdB5G5IMoWSaa/WnAlukmiQhO5Zj2JsoOokIk20SyJKpI420iXkqrmO14k8eVZqMNP9oHiZYiaEmLNo1gTWxoUy3a5I+2HGEtkGhLNtomAmtbg7zRgm/9sDej8O0x/oYdfoTAP9TAj1nwgx/+URR+OIYf15ELCPCSBn6RBV72gRei8Etj+MU6tPLhH41GXfO43AIjAAAAAElFTkSuQmCC",alt:""},null,-1)))],Te={style:{flex:"1",margin:"0px 5px"}},He={class:"custom-button"},Ze=[ke((()=>n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAS1BMVEVHcEwNb/8Nbv8Ocf8Mbv8Nbf8Nbv8Qcf8zmf8Nbv8Nbv8Wbv8Ocv8Nb/8Nb/8NcP8Nbf8PcP8cjf8Nbv8Nbv8NcP8OcP8Nbv8Nbv+sb0c3AAAAGHRSTlMAXpwhsunxPwX5khcy3m5xzVQJ0oh0Rrn3uGXUAAACAUlEQVR42q2YWZKFIAxFg4KAiLM+9r/SLgNdj24VFXM+tMrhmkCCJJCiYTOfrNBa2InPrIEcTMsr94+KtwYeMbKPO+HDxvsyi3AJxHJPSnWxjOVFPc91wW0s1Sm4RE7RiDTRC6qJRm2SV+bUzqP5oA5uD1w7T500quyDTF2ePlIHqb5MuBVMLwwkMEVw/dS9QftPXQZe4w3XAxzCgjkKLlHBKHZoj0M6uEXnkAObpEa/V7jJWqF3cjcZeN2WcJvS4pf/vaH6cPU+4du9ghgfhys8YvWRCRESL7XwkNZtyMixCecdHlNg3ql4LtHZY5gQDI5R/Z+IGXHdOItno53T5izGcVUZwbMkHZM4DknnlsggbfKEjP6axPwk5glB/c25z2ZQmStUbiZ90LjtQQ65QsC3++Y3qoZ8oQFjOShWKl9IVcEjf84WCpaEkGrfCLU+nBme3gg1PgDm7aTeCKntgRk9tPBGCCyO8oTHN0JoywR2n7BGxnS4UsgYs09cC2KXaEy7CzTbpZsAjSMVI9wlAmLmTZtMiMw1ssEmm36ygCRLEbKkJVtGqBY2sqWWbPEn+x1R/SDJftlkmwiqbQ3ZRotq60e/GQWZLkPSBYmk2rCTlRCERQ19mRUXfu2TMsQNVKUoVXFMVa5TNRCoWhpUTRb6tg99I4q+NUbfrAuoJ+3DH6O5cGG4augGAAAAAElFTkSuQmCC",alt:""},null,-1)))],Fe=ke((()=>n("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),ze={class:"btn-two"};var Qe=e(a({__name:"Benefit",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,c=l(0),v=l(0),b=l(0),h=l(),g=l(0),I=l(!0),S=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=(null==e?void 0:e.benefitRiskResultVOList[c.value])||{};v.value=a.ageBegin+1,g.value=a.ageBegin+1,b.value=a.ageEnd},x=()=>{var e,l,i;const t=null==(l=null==(e=a.info)?void 0:e.benefitRiskResultVOList)?void 0:l[c.value],{a:s,year:n}=((e,a)=>{const l=[],i=[];for(let t=e,s=0;t<=a;t++,s++)l.push(t.toString()),i.push(s+1);return{a:l,year:i}})(v.value,b.value),o={index:s.indexOf(g.value.toString()),age:s,year:n,result:null==(i=null==t?void 0:t.benefitRiskItemResultVOList)?void 0:i[0]};h.value=o},N=()=>{g.value>b.value-1||(g.value+=1,x())},P=()=>{g.value>v.value&&(g.value-=1,x())},M=e=>{c.value=e.name,S(a.info),x()},E=e=>{I.value="1"===e};return i((()=>a.info),(e=>{e&&(S(e),x())}),{deep:!0,immediate:!0}),i(g,(()=>{x()})),(e,l)=>{const i=ie,S=w,x=V,O=R;return t(),s("div",Ce,[we,A(O,{active:r(c),"title-active-color":"#0d6efe","title-inactive-color":"#393D46",shrink:"",onClickTab:M},{default:y((()=>{var e;return[(t(!0),s(o,null,k(null==(e=a.info)?void 0:e.benefitRiskResultVOList,((e,a)=>(t(),f(x,{key:a,name:a,title:e.productName},{default:y((()=>{var e,w,V,R,x,M,O,_,U,j,L,B,T,H,Z,F;return[a==r(c)?(t(),s("div",Ve,[r(I)?d("",!0):(t(),s("div",Re,[Ie,n("div",null,[m(" 保单年度"),n("span",null,u(null==(V=null==(e=r(h))?void 0:e.year)?void 0:V[null==(w=r(h))?void 0:w.index]),1),m("年度，被保人"),n("span",null,u(null==(M=null==(R=r(h))?void 0:R.age)?void 0:M[null==(x=r(h))?void 0:x.index]),1),m("岁时 ")]),Se])),r(I)?(t(),s("div",xe,[n("div",Ne,[n("div",Pe,[Me,n("div",null,[m(" 保单年度"),n("span",null,"  "+u(null==(U=null==(O=r(h))?void 0:O.year)?void 0:U[null==(_=r(h))?void 0:_.index])+"  ",1),m("年度，被保人"),n("span",null,"  "+u(null==(B=null==(j=r(h))?void 0:j.age)?void 0:B[null==(L=r(h))?void 0:L.index])+"  ",1),m("岁时 ")]),Ee]),n("div",Oe,[(t(!0),s(o,null,k(null==(H=null==(T=r(h))?void 0:T.result)?void 0:H.headers,((e,a)=>{var l,i,o,d,c;return t(),s("div",{key:a,style:{width:"33%"}},[n("p",_e,u(r(p)(Number(null==(c=null==(d=null==(i=null==(l=r(h))?void 0:l.result)?void 0:i.dataList)?void 0:d[null==(o=r(h))?void 0:o.index])?void 0:c[a]))||"--"),1),n("p",Ue,u(e)+"(元）",1)])})),128))])])])):d("",!0),r(I)?d("",!0):(t(),s("div",je,[A(se,{min:r(v),max:r(b),current:r(g),data:null==(F=null==(Z=r(h))?void 0:Z.result)?void 0:F.benefitRiskItemList},null,8,["min","max","current","data"])])),n("div",Le,[n("div",{class:"add lf",onClick:P},Be),n("div",Te,[r(v)?(t(),f(i,{key:0,modelValue:r(g),"onUpdate:modelValue":l[0]||(l[0]=e=>C(g)?g.value=e:null),min:r(v),max:r(b),"bar-height":"8px"},{button:y((()=>[n("div",He,u(r(g))+" 岁",1)])),_:1},8,["modelValue","min","max"])):d("",!0)]),n("div",{class:"add rg",onClick:N},Ze)]),Fe,n("div",ze,[A(S,{round:"",plain:!r(I),type:"primary",class:"btn",onClick:l[1]||(l[1]=e=>E("1"))},{default:y((()=>[m("图表展示")])),_:1},8,["plain"]),A(S,{round:"",plain:r(I),type:"primary",class:"btn",onClick:l[2]||(l[2]=e=>E("2"))},{default:y((()=>[m("趋势展示")])),_:1},8,["plain"])])])):d("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])}}}),[["__scopeId","data-v-f8272ed6"]]),Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAJFBMVEVHcEwGev8Ie/8He/8QhP8Hff8Lff8ff/8Kf/8HeP8Jev8KfP88zNEzAAAADHRSTlMATTtEDx4rCBgkNDEC504AAAAAu0lEQVR42t2TzRKDMAiEV35CSN7/fTtiKOnBWz2034nZRRxYBdCJeQgKGczUz6odgSLRS2hAPxaST6XQQVm25bUUCFxlUM1c3ljeKG9m6cvzFCbs3ZXkJAN61CRIhKI3FjRtTbFzCoZ/QSlX35an2HjmORPPc0Jvs9VHsm01/kLrJcY18mMoGyAcliExCktw0t0FO+Le8WOY3QnO8RUX/RQ8T1QRVUj0cLZzefMb2UY9tmzH9iOLqiDZhBeX/QTFelEoEAAAAABJRU5ErkJggg==";const qe={class:"container"},De={class:"common-title"},Ke={class:"title"},We=(e=>(h("data-v-b9c0979e"),e=e(),g(),e))((()=>n("img",{src:Ge,class:"ig"},null,-1))),Je={class:"product-detail"},$e=["innerHTML"];var Xe=e(a({__name:"LiabilityByRisk",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,i=l([]);return(e,l)=>{var d;const c=K,v=ne;return t(),s("div",qe,[(t(!0),s(o,null,k(null==(d=a.info)?void 0:d.liabilityByRiskVOList,((e,a)=>(t(),s("div",{key:a},[n("div",De,[n("div",Ke,[We,m(" "+u(e.riskName),1)])]),n("div",Je,[A(v,{modelValue:r(i),"onUpdate:modelValue":l[0]||(l[0]=e=>C(i)?i.value=e:null),"is-link":!1,border:!1,size:"middle"},{default:y((()=>[(t(!0),s(o,null,k(e.proposalRiskLiabilityVOList,((e,a)=>(t(),f(c,{key:a,title:e.liabilityName,name:a,"value-class":"price",value:e.liabilityIndemnityContent},{default:y((()=>[n("div",{innerHTML:e.liabilityDesc},null,8,$e)])),_:2},1032,["title","name","value"])))),128))])),_:2},1032,["modelValue"])])])))),128))])}}}),[["__scopeId","data-v-b9c0979e"]]);const Ye={class:"container"},ea={class:"common-title"},aa={class:"title"},la=(e=>(h("data-v-16042596"),e=e(),g(),e))((()=>n("img",{src:Ge,class:"ig"},null,-1))),ia={class:"product-detail"};var ta=e(a({__name:"LiabilityByRes",props:{info:{type:Object,default:()=>{}}},setup(e){const a=e,i=l([]);return(e,l)=>{var d;const c=I,v=K,p=ne;return t(),s("div",Ye,[(t(!0),s(o,null,k(null==(d=a.info)?void 0:d.liabilityByTopTypeVOList,((e,a)=>(t(),s("div",{key:a},[n("div",null,[n("div",ea,[n("div",aa,[la,m(" "+u(e.liabilityTopTypeName),1)])]),n("div",ia,[A(p,{modelValue:r(i),"onUpdate:modelValue":l[0]||(l[0]=e=>C(i)?i.value=e:null),"is-link":!1,border:!1,size:"middle"},{default:y((()=>[(t(!0),s(o,null,k(Object.keys(e.proposalRiskLiabilityVOMap),((l,i)=>(t(),f(v,{key:i+a,title:l,name:i+a,"value-class":"price"},{default:y((()=>[(t(!0),s(o,null,k(e.proposalRiskLiabilityVOMap[l],(e=>(t(),f(c,{key:e.liabilityId,title:e.liabilityName,content:e.liabilityIndemnityContent||""},null,8,["title","content"])))),128))])),_:2},1032,["title","name"])))),128))])),_:2},1032,["modelValue"])])])])))),128))])}}}),[["__scopeId","data-v-16042596"]]);const sa=e=>(h("data-v-654d11f6"),e=e(),g(),e),na={class:"com-insured-product-wrapper"},oa={class:"container"},da=sa((()=>n("span",{class:"clear-all"},null,-1))),ua=sa((()=>n("span",{class:"title"}," 选择投保产品 ",-1))),ra={class:"popup-body"},ca={class:"cell-title"},va={class:"title"},ma={class:"error-message"},pa={class:"footer-button"};var fa=e(a({__name:"index",props:{isShow:{type:Boolean,default:!0},dataSource:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:a}){const d=e,c="已通过计划书进行投保",v="产品未授权，无法进行投保",p="产品暂不支持计划书转投保",b=l(""),h=l(null),g=l({isShow:d.isShow}),V=S((()=>e=>1===e.insured?c:1!==e.authStatus?v:1!==e.insureMethod?p:"")),R=()=>{a("close")},I=()=>{if(!b.value)return x("请选择投保产品");a("finished",h.value)};return i((()=>d.isShow),(e=>{g.value.isShow=e})),(a,l)=>{const i=N,d=P,c=M,v=E,p=w,S=O;return t(),s("div",na,[A(S,{show:r(g).isShow,"onUpdate:show":l[1]||(l[1]=e=>r(g).isShow=e),position:"bottom",onClose:R},{default:y((()=>[n("div",oa,[n("div",{class:"popup-header"},[da,ua,n("span",{onClick:R},"X")]),n("div",ra,[A(v,{modelValue:r(b),"onUpdate:modelValue":l[0]||(l[0]=e=>C(b)?b.value=e:null)},{default:y((()=>[A(c,null,{default:y((()=>[(t(!0),s(o,null,k(e.dataSource,(e=>(t(),f(d,{key:e.productCode,onClick:a=>{return l=e,void(V.value(l)||(h.value=l,b.value=l.productCode));var l}},{"right-icon":y((()=>[A(i,{name:e.productCode,disabled:!!r(V)(e)},null,8,["name","disabled"])])),title:y((()=>[n("div",ca,[n("div",va,[n("p",null,u(e.productName),1),n("span",ma,u(r(V)(e)),1)])])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),n("div",pa,[A(p,{block:"",type:"primary",onClick:I},{default:y((()=>[m("立即投保")])),_:1})])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-654d11f6"]]);const ba={class:"popup-body"},ha={class:""},ga={class:"radio-wrap"},Aa=["onClick"],ya={class:"footer"},ka=a({name:"themeSelect"}),Ca=a({...ka,props:{show:{type:Boolean,default:!1},themeList:{default:()=>[]}},emits:["submit","update:show"],setup(e,{emit:a}){var i,d;const c=e,{show:v,themeList:p}=r(c),b=l(null==(i=null==p?void 0:p[0])?void 0:i.id),h=l(null==(d=null==p?void 0:p[0])?void 0:d.id),g=()=>{var e;a("submit",h.value?b.value||(null==(e=null==p?void 0:p[0])?void 0:e.id):h.value)};return(e,l)=>{const i=de,d=P,c=N,V=M,R=E,I=w,S=j;return t(),f(S,{show:r(v),"onUpdate:show":l[2]||(l[2]=e=>C(v)?v.value=e:null),class:"theme-select-wrap",title:"选择计划书封面",onClose:l[3]||(l[3]=e=>a("update:show",!1))},{default:y((()=>[n("div",ba,[A(d,{center:"",title:"封面图"},{"right-icon":y((()=>[A(i,{modelValue:r(h),"onUpdate:modelValue":l[0]||(l[0]=e=>C(h)?h.value=e:null),"inactive-value":0,"active-value":r(p)[0].id,size:"0.7rem"},null,8,["modelValue","active-value"])])),_:1}),n("div",ha,[A(R,{modelValue:r(b),"onUpdate:modelValue":l[1]||(l[1]=e=>C(b)?b.value=e:null)},{default:y((()=>[A(V,{inset:""},{default:y((()=>[n("div",ga,[(t(!0),s(o,null,k(r(p),(e=>(t(),s("div",{key:e.id,class:"radio-item"},[n("div",{class:"radio-img",style:_({backgroundImage:`url(${e.showConfig.thumbnailImage})`}),onClick:a=>{return l=e.id,void(0!==h.value&&(b.value=l));var l}},[A(c,{name:e.id,disabled:0===r(h)},null,8,["name","disabled"])],12,Aa),n("span",{class:U(""+(r(b)===e.id?"checked":""))},u(e.name),3)])))),128))])])),_:1})])),_:1},8,["modelValue"])])]),n("div",ya,[A(I,{type:"primary",disabled:!(r(b)||!r(h)),block:"",onClick:g},{default:y((()=>[m("确定")])),_:1},8,["disabled"])])])),_:1},8,["show"])}}});const wa=e=>(h("data-v-036e81a2"),e=e(),g(),e),Va={class:"head-bg"},Ra={class:"container"},Ia=wa((()=>n("div",{class:"common-title"},"保险公司简介",-1))),Sa={style:{"line-height":"36px"}},xa=wa((()=>n("span",{class:"poiner"},null,-1))),Na={key:0,class:"footer-btn"};var Pa=e(a({__name:"index",setup(e){const a=L(),c=l(!0),p=B(),h=T(),{isShare:g,id:V,themeId:R,preview:I}=p.query,N=l(),P=l(""),M=l(""),E=l({}),O=l([]);l();const[_,j]=H(),[le,ie]=H(),te=l([]),se=l([]),de=l(),ue=l("share");let re="";const ce=()=>{c.value=!c.value},ve=S((()=>!!O.value.filter((e=>1===e.authStatus&&1===e.insureMethod)).length)),me=S((()=>"1"==`${I}`));i((()=>N.value),(e=>{if(M.value)return;const{gender:a,name:l,birthday:i}=e;v().diff(i,"y"),(e=>e===+b.MALE)(a)?M.value=`${l}先生的计划书`:M.value=`${l}女士的计划书`}));const pe=e=>{E.value={title:M,desc:"您的贴心保险管家",link:e,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"}},fe=e=>{const{productCode:a,insurerCode:l,tenantProductCode:i}=e;ee({productCode:a,proposalId:V}).then((({code:e,data:a,message:t})=>{"10000"===e&&(a?oe({insurerCode:l,productCode:i,proposalId:V}).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a)})):x(t))}))},be=()=>{var e,a;1===(null==(e=O.value)?void 0:e.length)?fe(null==(a=O.value)?void 0:a[0]):j(!0)},he=e=>{ue.value="pdf",V?(x.loading({message:"PDF生成中...",forbidClick:!0}),$({id:V,themeHistoryId:e}).then((e=>{const{code:a,message:l}=e;"10000"===a&&(x.clear(),l?h.push(`/pdfViewer?url=${encodeURIComponent(l)}&title=${encodeURIComponent(M.value)}`):x("计划书为空"))}))):x("PDF生成失败")},ge=async e=>{if(e){const{code:a,data:l}=await ae({themeId:e,proposalId:V});"10000"===a&&(ie(!1),"pdf"===ue.value?he(l):(re=`${q}/proposalCover?id=${V}&isShare=1&tenantId=${P.value}&themeId=${l}`,pe(re),setTimeout(de.value.handleShare,100)))}else ie(!1),"pdf"===ue.value?he():(re=`${q}/proposalCover?id=${V}&isShare=1&tenantId=${P.value}`,pe(re),setTimeout(de.value.handleShare,100))},Ae=()=>{ue.value="pdf",se.value.length?ie(!0):he()};return Z((()=>{if(p.query.token){new F({source:"localStorage"}).set("token",p.query.token)}g||(Y({proposalId:V}).then((({code:e,data:a})=>{"10000"===e&&(O.value=a)})),(async()=>{const{code:e,data:a}=await X();"10000"===e&&(se.value=a||[])})()),(async()=>{try{let e=null;e=g?await W(`${V}?tenantId=${p.query.tenantId}`):await J(V);const{code:a,data:l}=e;if("10000"===a){const e=(null==l?void 0:l.proposalInsuredVOList[0])||{};N.value=e,M.value=l.proposalName,P.value=null==l?void 0:l.tenantId,re=`${q}/proposalCover?id=${V}&isShare=1&tenantId=${P.value}`,pe(re)}}catch(e){x("接口请求失败")}})()})),(e,l)=>{const i=K,v=ne,p=w,b=D,h=z("ProPageWrap");return t(),f(h,null,{default:y((()=>[A(b,{"theme-vars":r(a)},{default:y((()=>{var e;return[n("div",{class:U(["page-composition-proposal",{"page-proposal-bottom":!r(g)}])},[n("div",Va,u(r(M)),1),A(ye,{info:r(N)},null,8,["info"]),n("div",{class:"switch-btn",onClick:ce},u(r(c)?"按责任显示":"按险种显示"),1),r(c)?(t(),f(Xe,{key:0,info:r(N)},null,8,["info"])):(t(),f(ta,{key:1,info:r(N)},null,8,["info"])),(null==(e=r(N))?void 0:e.benefitRiskResultVOList)?(t(),f(Qe,{key:2,info:r(N)},null,8,["info"])):d("",!0),n("div",Ra,[Ia,A(v,{modelValue:r(te),"onUpdate:modelValue":l[0]||(l[0]=e=>C(te)?te.value=e:null),"is-link":!1,border:!1,size:"middle"},{default:y((()=>{var e;return[(t(!0),s(o,null,k(null==(e=r(N))?void 0:e.insurerInfoVOList,((e,a)=>(t(),f(i,{key:a,name:a,"value-class":"price"},{title:y((()=>[n("div",Sa,[xa,m(" "+u(null==e?void 0:e.insurerName),1)])])),default:y((()=>[m(" "+u(e.insurerDesc),1)])),_:2},1032,["name"])))),128))]})),_:1},8,["modelValue"])])],2),r(g)||r(me)?d("",!0):(t(),s("div",Na,[A(Q,{ref_key:"shareButtonRef",ref:de,title:r(E).title,desc:r(E).desc,link:r(E).link,"img-url":r(E).imgUrl},{default:y((()=>[A(p,{type:"primary",class:"share-btn",onClick:l[1]||(l[1]=G((()=>(ue.value="share",void(se.value.length?ie(!0):de.value.handleShare(E.value)))),["stop"]))},{default:y((()=>[m("分享")])),_:1})])),_:1},8,["title","desc","link","img-url"]),A(p,{plain:"",type:"primary",class:"btn",onClick:Ae},{default:y((()=>[m("生成PDF")])),_:1}),r(ve)?(t(),f(p,{key:0,type:"primary",class:"btn",onClick:be},{default:y((()=>[m("立即投保")])),_:1})):d("",!0)])),r(_)?(t(),f(fa,{key:1,"is-show":r(_),"data-source":r(O),onFinished:fe,onClose:l[2]||(l[2]=e=>r(j)(!1))},null,8,["is-show","data-source"])):d("",!0),(t(),f(Ca,{key:+r(le),show:r(le),"onUpdate:show":l[3]||(l[3]=e=>C(le)?le.value=e:null),"theme-list":r(se),onSubmit:ge},null,8,["show","theme-list"]))]})),_:1},8,["theme-vars"])])),_:1})}}}),[["__scopeId","data-v-036e81a2"]]);export{Pa as default};
