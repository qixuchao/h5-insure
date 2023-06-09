import{d as e}from"./debounce-6981b306.js";import{c as a}from"./cloneDeep-f5e28e96.js";import{d as l,A as i,o as t,Z as s,V as n,b as o,c as r,a7 as d,$ as u,f as c,e as p,w as v,h as m,k as f,G as k,at as I,r as y,g as b,i as L,aG as h,aH as g,aI as V,ap as R,L as C,aJ as P,aK as x,F as O,E as T,aL as w,al as _,aD as S,aE as D,aA as F,j,aM as E,aN as M,a0 as N,a4 as A,B as Y,aO as U,aP as $,u as B,a as X,W as q,p as K,P as Q,q as W,aQ as H,T as G}from"./index-086d754e.js";import{P as z}from"./index-bea9ce90.js";import{_ as J}from"./index-5bf6d3ba.js";/* empty css              */import{S as Z}from"./index-30b2823d.js";import{P as ee}from"./index-79629ff1.js";import{S as ae,_ as le}from"./box-title-b40ad766.js";import{_ as ie}from"./index-a23f5bb8.js";import{_ as te}from"./empty-ae586b6c.js";import{R as se}from"./trial-f9913bd8.js";import{u as ne,b as oe,p as re,q as de,a as ue}from"./trial-88d6204a.js";import{P as ce}from"./config-98e8d477.js";import{i as pe}from"./isNaN-beb28144.js";import{u as ve}from"./useOrder-e4bd569a.js";import{t as me}from"./utils-4e91d207.js";import{P as fe,B as ke}from"./constants-7afb7c3d.js";import{n as Ie}from"./nextStep-5dedb596.js";import"./isObjectLike-a9798079.js";import"./keysIn-b1e7a5ec.js";import"./_getTag-5c78de73.js";import"./infoCollection-0cf1df26.js";import"./merge-84cb998c.js";import"./index-ba27456b.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-2ddb6591.js";import"./phoneVerify-43a5fd96.js";import"./useDicData-349e65c5.js";import"./bankCard-8478ffae.js";import"./createProposal-d9ec9a00.js";import"./core-3ef14d11.js";import"./constant-8927d485.js";const ye={key:0},be={key:0,class:"risk2-field"},Le=l({name:"ProductRiskList"});var he=k(l({...Le,props:{dataSource:{type:Array,default:()=>[]},productInfo:{type:Object,default:()=>({productCode:"",productName:""})},showMainRisk:{type:Boolean,default:()=>!0},defaultValue:{type:Object,default:()=>{}}},emits:["trialChange"],setup(e,{emit:a}){const l=e,k=i({loading:!1,show:!0,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},disabledRiskInfo:[],risksDefaultValue:{}}),y=e=>{const a=[];return e.riskLiabilityInfoVOList.map((e=>(1!=+e.showFlag&&a.push({...e}),[]))),a},b=(e,i,t)=>{var s;k.riskIsInsure[i].data=e;const n=[...k.disabledRiskInfo];null==(s=l.dataSource.insureProductRiskVOList)||s.forEach((e=>{if(1!==e.mainRiskFlag){const a=k.riskIsInsure[e.riskId];a.data&&Object.keys(a.data).length>0&&"1"===a.selected&&n.push(a.data)}})),a("trialChange",n,t)},L=(e,a)=>{var i;null==(i=l.dataSource.productRiskRelationVOList)||i.forEach((l=>{1!==l.collocationType&&(a.riskId===l.riskId?(k.riskIsInsure[a.riskId]&&k.riskIsInsure[a.riskId].selected,2===l.collocationType&&k.riskIsInsure[l.collocationRiskId]&&(k.riskIsInsure[l.collocationRiskId].selected=e),3===l.collocationType&&k.riskIsInsure[l.collocationRiskId]&&"1"===e&&(k.riskIsInsure[l.collocationRiskId].selected="1"===e?"2":"1")):a.riskId===l.collocationRiskId&&(3===l.collocationType&&"1"===e&&k.riskIsInsure[l.riskId]&&(k.riskIsInsure[l.riskId].selected="1"===e?"2":"1"),2===l.collocationType&&k.riskIsInsure[l.riskId]&&(k.riskIsInsure[l.riskId].selected=e)))})),"2"===e?b({},a.riskId):(e=>{var a,l,i,t,s,n,o,r,d,u,c,p;if(1!==(null==e?void 0:e.factorDisPlayFlag)){const v=null==(a=null==e?void 0:e.productRiskInsureLimitVO)?void 0:a.amountPremiumConfigVO,m={riskCategory:e.riskCategory,riskCode:e.riskCode,riskName:e.riskName,riskId:e.riskId,riskType:e.riskType,mainRiskId:e.mainRiskId,mainRiskCode:e.mainRiskCode,liabilityList:y(e)};m.chargePeriod=(null==(i=null==(l=null==e?void 0:e.productRiskInsureLimitVO)?void 0:l.paymentPeriodValueList)?void 0:i.length)>0&&(null==(t=null==e?void 0:e.productRiskInsureLimitVO)?void 0:t.paymentPeriodValueList[0].code)||null,m.coveragePeriod=(null==(n=null==(s=null==e?void 0:e.productRiskInsureLimitVO)?void 0:s.insurancePeriodValueList)?void 0:n.length)>0&&(null==(o=null==e?void 0:e.productRiskInsureLimitVO)?void 0:o.insurancePeriodValueList[0].code)||null,m.paymentFrequency=(null==(d=null==(r=null==e?void 0:e.productRiskInsureLimitVO)?void 0:r.paymentFrequencyList)?void 0:d.length)>0&&(null==(u=null==e?void 0:e.productRiskInsureLimitVO)?void 0:u.paymentFrequencyList[0].code)||null;let f=0;1===v.displayType?f=(null==v?void 0:v.minStepValue)>0?null==v?void 0:v.minStepValue:0:3===v.displayType&&2===v.requireCopies?f=(null==(c=null==v?void 0:v.displayValues)?void 0:c.length)>0?null==v?void 0:v.displayValues[0].value:0:3===v.displayType&&1===v.requireCopies?(f=(null==(p=null==v?void 0:v.displayValues)?void 0:p.length)>0?null==v?void 0:v.displayValues[0].value:0,m.copy=v.minCopiesValue):2===v.displayType?m.copy=v.minCopiesValue:f=0,1===v.saleMethod?m.initialAmount=f:m.initialPremium=f,b(m,e.riskId)}})(a)};return t((()=>{(()=>{var e,a;k.disabledRiskInfo=[];let i=null;if(null==(e=l.dataSource.insureProductRiskVOList)||e.forEach((e=>{var a;const t=1!==e.mainRiskFlag?null==(a=l.dataSource.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId)):{};1===e.mainRiskFlag&&(i=e),k.riskIsInsure[e.riskId]?(k.riskIsInsure[e.riskId].data=null,k.riskIsInsure[e.riskId].relation=t,k.riskIsInsure[e.riskId].isMust=!1):k.riskIsInsure[e.riskId]={selected:"2",data:null,relation:t,isMust:!1}})),i){const e=null==(a=l.dataSource.productRiskRelationVOList)?void 0:a.filter((e=>e.riskId===i.riskId));if(!e)return;null==e||e.forEach((e=>{var a,i,t,s,n,o,r,d,u,c,p,v,m,f,I;if(2===e.collocationType){k.riskIsInsure[e.collocationRiskId].selected="1",k.riskIsInsure[e.collocationRiskId].isMust=!0;const L=null==(a=l.dataSource.insureProductRiskVOList)?void 0:a.find((a=>e.collocationRiskId===a.riskId));if(L&&1!==L.factorDisPlayFlag&&(null==(i=null==L?void 0:L.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO)){const a=null==(t=L.riskLiabilityInfoVOList)?void 0:t.every((e=>1!==e.showFlag)),l=null==(s=null==L?void 0:L.productRiskInsureLimitVO)?void 0:s.amountPremiumConfigVO;if(a){k.riskIsInsure[e.collocationRiskId].isDisabled=!0;const a={riskCategory:L.riskCategory,riskCode:L.riskCode,riskName:L.riskName,riskId:L.riskId,riskType:L.riskType,mainRiskId:L.mainRiskId,mainRiskCode:L.mainRiskCode,liabilityList:y(L)};a.chargePeriod=(null==(o=null==(n=null==L?void 0:L.productRiskInsureLimitVO)?void 0:n.paymentPeriodValueList)?void 0:o.length)>0&&(null==(r=null==L?void 0:L.productRiskInsureLimitVO)?void 0:r.paymentPeriodValueList[0].code)||null,a.coveragePeriod=(null==(u=null==(d=null==L?void 0:L.productRiskInsureLimitVO)?void 0:d.insurancePeriodValueList)?void 0:u.length)>0&&(null==(c=null==L?void 0:L.productRiskInsureLimitVO)?void 0:c.insurancePeriodValueList[0].code)||null,a.paymentFrequency=(null==(v=null==(p=null==L?void 0:L.productRiskInsureLimitVO)?void 0:p.paymentFrequencyList)?void 0:v.length)>0&&(null==(m=null==L?void 0:L.productRiskInsureLimitVO)?void 0:m.paymentFrequencyList[0].code)||null;let i=0;1===l.displayType?i=(null==l?void 0:l.minStepValue)>0?null==l?void 0:l.minStepValue:0:3===l.displayType&&2===l.requireCopies?i=(null==(f=null==l?void 0:l.displayValues)?void 0:f.length)>0?null==l?void 0:l.displayValues[0].value:0:3===l.displayType&&1===l.requireCopies?(i=(null==(I=null==l?void 0:l.displayValues)?void 0:I.length)>0?null==l?void 0:l.displayValues[0].value:0,a.copy=l.minCopiesValue):2===l.displayType&&(a.copy=l.minCopiesValue),1===l.saleMethod?a.initialAmount=i:a.initialPremium=i,k.disabledRiskInfo.push(a),b(a,L.riskId)}}}3===e.collocationType&&(k.riskIsInsure[e.collocationRiskId].selected="2",k.riskIsInsure[e.collocationRiskId].isMust=!0)}))}})()})),s((()=>{k.loading=!0})),n((()=>k.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),n((()=>l.defaultValue),(e=>{(null==e?void 0:e.length)>0&&e.forEach((e=>{k.risksDefaultValue[e.riskCode]=e,k.riskIsInsure[e.riskId]?(k.riskIsInsure[e.riskId].selected="1",b(e,e.riskId)):k.riskIsInsure[e.riskId]={selected:"1",isMust:!1}}))}),{deep:!0,immediate:!0}),(a,l)=>{const i=Z,t=I;return o(!0),r(u,null,d(e.dataSource.insureProductRiskVOList,(l=>{var s,n;return o(),r(u,{key:l.riskCode},[(!e.showMainRisk&&1!==l.mainRiskFlag||e.showMainRisk)&&(null==(n=null==(s=c(k).riskIsInsure)?void 0:s[l.riskId])?void 0:n.relation)?(o(),r("div",ye,[p(t,{modelValue:c(k).riskIsInsure[l.riskId].selected,"onUpdate:modelValue":e=>c(k).riskIsInsure[l.riskId].selected=e,label:l.riskName,name:"selected","label-width":"50%",border:!1,class:"risk-select-field risk-name"},{input:v((()=>[p(i,{modelValue:c(k).riskIsInsure[l.riskId].selected,"onUpdate:modelValue":e=>c(k).riskIsInsure[l.riskId].selected=e,"active-value":"1","inactive-value":"2",size:"0.74rem",disabled:c(k).riskIsInsure[l.riskId].isMust,style:{"margin-right":"8px"},onChange:e=>L(e,l)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"]),"1"===c(k).riskIsInsure[l.riskId].selected?(o(),r("div",be,[p(J,{modelValue:c(k).riskIsInsure[l.riskId].data,"onUpdate:modelValue":e=>c(k).riskIsInsure[l.riskId].data=e,"origin-data":l,"product-factor":e.dataSource.productFactor,"default-value":c(k).risksDefaultValue[l.riskCode],onTrialChange:(e,a)=>b(e,l.riskId,a)},null,8,["modelValue","onUpdate:modelValue","origin-data","product-factor","default-value","onTrialChange"])])):m("",!0),1===l.exemptFlag&&"1"===c(k).riskIsInsure[l.riskId].selected?f(a.$slots,"holderForm",{key:1},void 0,!0):m("",!0)])):m("",!0)],64)})),128)}}}),[["__scopeId","data-v-04703dac"]]);const ge={class:"pro-radio-wrap"},Ve=l({name:"PlanSelect"}),Re=l({...Ve,props:{planList:{default:()=>[]},defaultPlan:{default:()=>{}}},emits:["planChange"],setup(e,{emit:a}){const l=e,i=y("");let t=!1;return s((()=>{l.defaultPlan&&(t=!0,i.value=l.defaultPlan.planCode)})),n((()=>i),(e=>{t||a("planChange",i.value),t&&(t=!1)}),{deep:!0,immediate:!0}),(a,t)=>{const s=h,n=g;return e.planList.length>0?(o(),b(n,{key:0,modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),label:"保障计划",name:"planCode",class:"risk-select-field"},{input:v((()=>[L("div",ge,[p(s,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),options:l.planList.map((e=>({label:e.planName,value:e.planCode})))},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):m("",!0)}}});var Ce=k(l({__name:"ScrollWrap",props:{moduleValue:{type:Number,default:0},scrollX:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!1}},emits:["update:modelValue","update:needFixed"],setup(e,{emit:a}){const l=e,t=i({offsetX:0,offsetY:0,startX:0,startY:0}),d=y(null),u=y(null),{width:p,height:v}=V(d),{width:m,height:k}=V(u),I=R("PRO_TABLE_KEY"),b=C((()=>{const e=p.value>m.value+4;return a("update:needFixed",e),e})),L=C((()=>v.value>k.value+4)),{direction:h}=P(d,{passive:!1,onSwipeStart(e){const{clientX:a,clientY:l}=e.touches[0];t.startX=a,t.startY=l},onSwipe(e){const{clientX:a,clientY:l}=e.touches[0];if(["LEFT","RIGHT"].includes(h.value)){const e=t.offsetX-(t.startX-a);e>-p.value+m.value&&e<0&&(t.offsetX=e,I.state.offsetX=t.offsetX),t.startX=a}if(["UP","DOWN"].includes(h.value)){const e=t.offsetY-(t.startY-l);e>-v.value+k.value&&e<0&&(t.offsetY=e,I.state.offsetY=t.offsetY),t.startY=l}},onSwipeEnd(e){}}),g=C((()=>l.scrollX||l.scrollY?`transform: translate(${l.scrollX?`${t.offsetX}px`:0},${l.scrollY?`${t.offsetY}px`:0} );`:""));return n((()=>null==I?void 0:I.state),(()=>{const{offsetX:e,offsetY:a}=(null==I?void 0:I.state)||{};b.value&&(t.offsetX=e),L.value&&(t.offsetY=a)}),{deep:!0,immediate:!0}),s((()=>{var e;u.value=null==(e=d.value)?void 0:e.parentElement})),(e,a)=>(o(),r("div",{ref_key:"swiperEl",ref:d,class:"scroll-wrap",style:x(c(g))},[f(e.$slots,"default",{},void 0,!0)],4))}}),[["__scopeId","data-v-0ba94815"]]);const Pe={class:"pro-com-table-wrap"},xe={ref:"tableHeadRef",class:"com-table"},Oe={class:"com-table-head"},Te={class:"com-table-row"},we={ref:"tableBodyRef",class:"com-table"},_e={class:"com-table-head"},Se={class:"com-table-row"},De={class:"com-table-body"};var Fe=k(l({__name:"Table",props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},translateY:{type:Number,default:0}},emits:["update:modelValue","update:needFixed"],setup(e,{emit:a}){const l=e=>{a("update:needFixed",e)};return(a,i)=>(o(),r("div",Pe,[p(Ce,{ref:"tableScroll",class:"pro-table-head","scroll-x":"","onUpdate:needFixed":l},{default:v((()=>[L("table",xe,[L("thead",Oe,[L("tr",Te,[(o(!0),r(u,null,d(e.columns,((e,a)=>(o(),r("th",{key:a,class:O(["table-cell",`table-cell-${a}`]),style:x({minWidth:`${e.width||80}px`})},T(e.title),7)))),128))])])],512)])),_:1},512),p(Ce,{ref:"tableScroll",class:"pro-table-body","scroll-y":"","scroll-x":""},{default:v((()=>[L("table",we,[L("thead",_e,[L("tr",Se,[(o(!0),r(u,null,d(e.columns,((e,a)=>(o(),r("th",{key:a,class:O(["table-cell",`table-cell-${a}`]),style:x({minWidth:`${e.width||80}px`})},T(e.title),7)))),128))])]),L("tbody",De,[(o(!0),r(u,null,d(e.data,((a,l)=>(o(),r("tr",{key:l,class:"com-table-row"},[(o(!0),r(u,null,d(e.columns,((e,i)=>(o(),r("td",{key:i,class:O(["table-cell"])},[L("span",null,T(e.render?e.render(a,l):a[e.key]),1)])))),128))])))),128))])],512)])),_:1},512)]))}}),[["__scopeId","data-v-f37eb4be"]]);const je=e=>(S("data-v-0cf962f9"),e=e(),D(),e),Ee={key:0,class:"pro-table-wrap"},Me={key:1,class:"no-data-wrap"},Ne=[je((()=>L("img",{src:te,alt:"暂无数据"},null,-1))),je((()=>L("span",null,"暂无数据～",-1)))];var Ae=k(l({__name:"ProTable",props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},setup(e){const a=e;y(null),y(null);const l=i({translateY:0,translateX:0,offsetX:0,offsetY:0,needFixed:!1});w("PRO_TABLE_KEY",{state:l});const t=C((()=>_(a.columns)?a.columns.filter((e=>e.fixed)):[])),s=e=>{l.needFixed=e};return(a,i)=>e.data&&e.data.length?(o(),r("div",Ee,[p(Fe,{"translate-y":c(l).translateY,"onUpdate:translateY":i[0]||(i[0]=e=>c(l).translateY=e),columns:e.columns,data:e.data,"onUpdate:needFixed":s},null,8,["translate-y","columns","data"]),c(l).needFixed?(o(),b(Fe,{key:0,"translate-y":c(l).translateY,"onUpdate:translateY":i[1]||(i[1]=e=>c(l).translateY=e),class:"pro-table-fixed",style:{width:"160px"},columns:c(t),data:e.data},null,8,["translate-y","columns","data"])):m("",!0)])):(o(),r("div",Me,Ne))}}),[["__scopeId","data-v-0cf962f9"]]);const Ye={class:"benefit-table"},Ue=l({__name:"BenefitTable",props:{dataSource:null},setup(e){const a=e,l=C((()=>_(a.dataSource.headers)?a.dataSource.headers.map(((e,a)=>({title:e,key:`header_${a}`,fixed:a<2}))):[])),i=C((()=>_(a.dataSource.dataList)?a.dataSource.dataList.map((e=>{const a={};return e.forEach(((e,l)=>{a[`header_${l}`]=e})),a})):[]));return(e,a)=>(o(),r("div",Ye,[p(Ae,{columns:c(l),data:c(i),"is-clone":!0},null,8,["columns","data"])]))}});const $e=e=>(S("data-v-5e4dfbe9"),e=e(),D(),e),Be={key:0,class:"benefit-container"},Xe={key:0,class:"benefit"},qe=$e((()=>L("div",{class:"line"},null,-1))),Ke={class:"box-title box-title-chart"},Qe=$e((()=>L("img",{class:"tl",src:le,alt:""},null,-1))),We=$e((()=>L("img",{class:"transform-z180 tr",src:le,alt:""},null,-1))),He={key:0},Ge={class:"box"},ze={class:"box-title"},Je=$e((()=>L("img",{class:"tl",src:le,alt:""},null,-1))),Ze=$e((()=>L("img",{class:"transform-z180 tr",src:le,alt:""},null,-1))),ea={class:"box-price"},aa={class:"text1"},la={class:"text2"},ia={key:1},ta={key:2,style:{width:"100%, minWidth: 338px"}},sa={class:"slider"},na={style:{flex:"1",margin:"0px 5px"}},oa={class:"custom-button"},ra=$e((()=>L("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),da={class:"btn-two"},ua={key:1,class:"benefit-container"},ca={key:0},pa={class:"benefit"},va=$e((()=>L("div",{class:"line"},null,-1))),ma=$e((()=>L("div",null,[L("div",{class:"box"},[L("p",{class:"box-title"},[L("img",{class:"tl",src:le,alt:""}),j(" 保单年度"),L("span",null,"-"),j("年度，被保人"),L("span",null,"-"),j("岁时 "),L("img",{class:"transform-z180 tr",src:le,alt:""})]),L("div",{class:"box-price"})])],-1))),fa={class:"slider"},ka={class:"opt lf"},Ia={style:{flex:"1",margin:"0px 5px"}},ya=$e((()=>L("div",{class:"custom-button"},"0 岁",-1))),ba={class:"opt rg"},La=$e((()=>L("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),ha={class:"btn-two"},ga={key:1,class:"empty-box"},Va=l({name:"Benefit"});var Ra=k(l({...Va,props:{dataSource:{default:()=>({showTypeList:["1"]})},productInfo:{default:()=>null}},setup(e){var a;const l=e,i="1",t="2",s="3",f=y(0),k=y(0),I=y(0),h=y(),g=y(0),V=y(null==(a=l.dataSource.showTypeList)?void 0:a[0]),R=y(),C=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[f.value];k.value=a.ageBegin+1,g.value=a.ageBegin+1,I.value=a.ageEnd},P=()=>{var e,a,i,t,s,n;const o=null==(a=null==(e=l.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:a[f.value];R.value=null==(s=null==(t=null==(i=l.dataSource)?void 0:i.benefitRiskResultVOList)?void 0:t[f.value].benefitRiskTableResultVOList)?void 0:s[0];const{a:r,year:d}=((e,a)=>{const l=[],i=[];for(let t=e,s=0;t<=a;t++,s++)l.push(t.toString()),i.push(s+1);return{a:l,year:i}})(k.value,I.value),u={index:r.indexOf(g.value.toString()),age:r,year:d,result:null==(n=null==o?void 0:o.benefitRiskItemResultVOList)?void 0:n[0]};h.value=u},x=()=>{g.value>I.value-1||(g.value+=1,P())},O=()=>{g.value>k.value&&(g.value-=1,P())},w=e=>{f.value=e.name,C(l.dataSource),P()};return n((()=>l.dataSource),(e=>{var a;e&&(C(e),P(),V.value=null==(a=e.showTypeList)?void 0:a[0])}),{deep:!0,immediate:!0}),n(g,(()=>{P()})),(a,n)=>{var y;const C=A,P=ae,_=Y,S=U,D=$,B=ee;return(null==(y=e.dataSource)?void 0:y.benefitRiskResultVOList)?(o(),r("div",Be,[p(D,{active:c(f),onClickTab:w},{default:v((()=>{var e;return[(o(!0),r(u,null,d(null==(e=l.dataSource)?void 0:e.benefitRiskResultVOList,((e,a)=>(o(),b(S,{key:a,name:a,title:e.riskName},{default:v((()=>{var e,y,w,S,D,A,Y,U,$,B,X,q,K,Q,W,H;return[a==c(f)?(o(),r("div",Xe,[qe,F(L("p",Ke,[Qe,j(" 保单年度"),L("span",null,T(null==(w=null==(e=c(h))?void 0:e.year)?void 0:w[null==(y=c(h))?void 0:y.index]),1),j("年度，被保人"),L("span",null,T(null==(A=null==(S=c(h))?void 0:S.age)?void 0:A[null==(D=c(h))?void 0:D.index]),1),j("岁时 "),We],512),[[E,c(V)===t]]),c(V)===i?(o(),r("div",He,[L("div",Ge,[L("p",ze,[Je,j(" 保单年度"),L("span",null,T(null==($=null==(Y=c(h))?void 0:Y.year)?void 0:$[null==(U=c(h))?void 0:U.index]),1),j("年度，被保人"),L("span",null,T(null==(q=null==(B=c(h))?void 0:B.age)?void 0:q[null==(X=c(h))?void 0:X.index]),1),j("岁时 "),Ze]),L("div",ea,[(o(!0),r(u,null,d(null==(Q=null==(K=c(h))?void 0:K.result)?void 0:Q.headers,((e,a)=>{var l,i,t,s,n,d,u,p,v,m;return o(),r("div",{key:a,style:{width:"33%"}},[L("p",aa,T(("0"==(null==(n=null==(s=null==(i=null==(l=c(h))?void 0:l.result)?void 0:i.dataList)?void 0:s[null==(t=c(h))?void 0:t.index])?void 0:n[a])?"0":c(M)(Number(null==(m=null==(v=null==(u=null==(d=c(h))?void 0:d.result)?void 0:u.dataList)?void 0:v[null==(p=c(h))?void 0:p.index])?void 0:m[a])))||"0"),1),L("p",la,T(e)+"(元）",1)])})),128))])])])):m("",!0),c(V)===s?(o(),r("div",ia,[p(Ue,{"data-source":c(R)},null,8,["data-source"])])):m("",!0),c(V)==t?(o(),r("div",ta,[p(ie,{min:c(k),max:c(I),current:c(g),data:null==(H=null==(W=c(h))?void 0:W.result)?void 0:H.benefitRiskItemList},null,8,["min","max","current","data"])])):m("",!0),c(V)!=s?(o(),r(u,{key:3},[L("div",sa,[L("div",{class:"opt lf",onClick:O},[p(C,{name:"minus"})]),L("div",na,[c(k)?(o(),b(P,{key:0,modelValue:c(g),"onUpdate:modelValue":n[0]||(n[0]=e=>N(g)?g.value=e:null),min:c(k),max:c(I),"bar-height":"8px"},{button:v((()=>[L("div",oa,T(c(g))+" 岁",1)])),_:1},8,["modelValue","min","max"])):m("",!0)]),L("div",{class:"opt rg",onClick:x},[p(C,{name:"plus"})])]),ra],64)):m("",!0),L("div",da,[l.dataSource.showTypeList.includes(i)?(o(),b(_,{key:0,round:"",plain:c(V)!==i,type:"primary",class:"btn",onClick:n[1]||(n[1]=e=>V.value=i)},{default:v((()=>[j("图表展示")])),_:1},8,["plain"])):m("",!0),l.dataSource.showTypeList.includes(t)?(o(),b(_,{key:1,round:"",plain:c(V)!==t,type:"primary",class:"btn",onClick:n[2]||(n[2]=e=>V.value=t)},{default:v((()=>[j("趋势展示")])),_:1},8,["plain"])):m("",!0),l.dataSource.showTypeList.includes(s)?(o(),b(_,{key:2,round:"",plain:c(V)!==s,type:"primary",class:"btn",onClick:n[3]||(n[3]=e=>V.value=s)},{default:v((()=>[j("表格展示")])),_:1},8,["plain"])):m("",!0)])])):m("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(o(),r("div",ua,[l.productInfo?(o(),r("div",ca,[p(D,{active:c(f),onClickTab:w},{default:v((()=>[(o(),b(S,{key:1,name:1,title:e.productInfo.insureProductRiskVOList[0].riskName},{default:v((()=>[L("div",pa,[va,ma,L("div",fa,[L("div",ka,[p(C,{name:"minus"})]),L("div",Ia,[p(P,{modelValue:c(g),"onUpdate:modelValue":n[4]||(n[4]=e=>N(g)?g.value=e:null),min:0,max:80,"bar-height":"8px",disabled:""},{button:v((()=>[ya])),_:1},8,["modelValue"])]),L("div",ba,[p(C,{name:"plus"})])]),La,L("div",ha,[p(_,{round:"",plain:!0,type:"primary",class:"btn",disabled:""},{default:v((()=>[j("图表展示")])),_:1}),p(_,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:v((()=>[j("趋势展示")])),_:1}),p(_,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:v((()=>[j("表格展示")])),_:1})])])])),_:1},8,["title"]))])),_:1},8,["active"])])):(o(),r("div",ga,[p(B,{title:"试算结果正在计算中...","empty-class":"empty-select"})]))]))}}}),[["__scopeId","data-v-5e4dfbe9"]]);const Ca={key:0,class:"head-warning-wrap"},Pa=L("div",{class:"warning-icon"},[L("span",null,"!")],-1),xa={class:"warning-text"},Oa=l({name:"HeadWaring"}),Ta=l({...Oa,props:{labels:{default:()=>[]}},setup:e=>(a,l)=>e.labels.length>0?(o(),r("div",Ca,[Pa,L("div",xa,[(o(!0),r(u,null,d(e.labels,(e=>(o(),r("span",{key:e},T(e),1)))),128))])])):m("",!0)}),wa=(e,a,l)=>{const i=e,{holder:t}=l,s=l.insuredList[0],n=(a||"").split("_");if(n.length<2)return a;if(pe(Number(n[1])))return a;if(n[1]-=1,1===i.exemptFlag){if("to"===n[0]){let e=0;1===i.exemptType?(null==t?void 0:t.birthday)&&(e=parseInt(""+((new Date).getTime()-new Date(t.birthday).getTime())/31536e6,10)):2===i.exemptType&&(null==s?void 0:s.birthday)&&(e=parseInt(""+(+(new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)),n[1]=+n[1]-e}n[0]="year"}return n.join("_")},_a=(e,a)=>{const l=[],i={};return null==e||e.forEach((e=>{i[e.riskId]=e})),null==a||a.forEach((e=>{var a,t,s,n;const{collocationType:o,collocationRiskId:r,riskId:d}=e;switch(o){case 2:{const e=null==(a=i[d])?void 0:a.riskName,s=null==(t=i[r])?void 0:t.riskName;l.push(`${e} 和 ${s} 必须同时投保`);break}case 3:{const e=null==(s=i[d])?void 0:s.riskName,a=null==(n=i[r])?void 0:n.riskName;l.push(`${e} 和 ${a} 不能同时投保`);break}}})),l};const Sa={class:"com-body"},Da={class:"trial-body"},Fa={class:"container"},ja=(e=>(S("data-v-27c79744"),e=e(),D(),e))((()=>L("div",{class:"empty"},null,-1))),Ea=l({name:"TrialBody"});var Ma=k(l({...Ea,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1},defaultOrder:{default:()=>({})}},emits:["trialStart","trialEnd","update:userData"],setup(l,{expose:d,emit:u}){const k=l,I=y(null),h=B();X();const{tenantId:g,templateId:V,preview:R}=h.query,P=y(),x=i({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1,isQuerying:!1,currentPlanCode:""}),O=ve();y();const T=y(),w=y(k.dataSource),S=y([]),D=e=>{const{holder:a,insuredList:l}=e||{};a&&(x.submitData.holder=a),l&&l.length>0&&l.forEach(((e,a)=>{var l;x.submitData.insuredList&&x.submitData.insuredList.length>a?x.submitData.insuredList[a]=e:((null==(l=x.submitData)?void 0:l.insuredList)||(x.submitData.insuredList=[]),x.submitData.insuredList.push(e))}))},F=C((()=>k.productInfo.planList&&k.productInfo.planList.length>2)),j=(e,a)=>{if(e){const l=["birthday","age","gender","id"];a.includes("occupationCodeList")&&l.push("occupationClass"),Object.keys(e).forEach((i=>{[...a,...l].includes(i)||(e[i]=null)}))}},E=(e,a=(e=>!0))=>_(e)?e.filter(a).map((e=>e.code)):[],M=()=>{console.log("--current plan = ",w.value),console.log("---current submit = ",x.submitData);const e=a(x.submitData);if(!F.value)return e;const{1:l,2:i,3:t}=w.value.productFactor||{};if(e.holder&&j(e.holder,E(l)),e.insuredList){const a=["productList","beneficiaryList"],l=E(i,(e=>"2"!==String(e.subModuleType))),s=E(i,(e=>"2"===String(e.subModuleType))),n=_(s),o=E(t),r=_(o);e.insuredList.forEach(((e,i)=>{var t,d;j(e,[...i>=1&&n?s:l,...a,...r?["insuredBeneficiaryType"]:[]]),(null==(t=e.beneficiaryList)?void 0:t.length)>0&&(r?e.beneficiaryList.forEach((e=>j(e,o))):e.beneficiaryList.length=0),e.planCode=w.value.planCode;const u=(null==(d=e.productList[0])?void 0:d.riskList)||[],c=w.value.insureProductRiskVOList||[];if(u&&c){const a=u.filter((e=>null!==c.find((a=>a.riskCode===e.riskCode))));e.productList[0].riskList=a}}))}return e},N=y(),A=y({}),Y=["annuityDrawDate","coveragePeriod","chargePeriod","paymentFrequency"],U=e=>{var a,l,i,t,s,n;if(null==(l=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:l.productRiskDyInsureFactorVOList){const a=[];if(null==(i=w.value)||i.insureProductRiskVOList.forEach((l=>{var i,t;const s=null==(t=null==(i=null==e?void 0:e.data)?void 0:i[0])?void 0:t.productRiskDyInsureFactorVOList.find((e=>e.riskCode===l.riskCode));if(s){l.productRiskInsureLimitVO={...l.productRiskInsureLimitVO,...s};const e=x.riskList.find((e=>e.riskCode===l.riskCode));let i=!1;ce.forEach((a=>{if(Y.indexOf(a.valueKey)>=0){const t=l.productRiskInsureLimitVO[a.configKey];if(t&&e){const l=t.find((l=>l.code===e[a.valueKey]));if(l&&2===l.useFlag){const l=t.find((e=>1===e.defaultFlag));e[a.valueKey]=l.code,i=!0}}}})),i&&a.push({...e,...s,riskCode:l.riskCode})}})),a.length>0&&(null==(n=null==(s=null==(t=x.defaultValue)?void 0:t.insuredList)?void 0:s[0])?void 0:n.productList))return a.forEach((e=>{var a,l,i;x.defaultValue.insuredList[0].productList=null==(i=null==(l=null==(a=x.defaultValue)?void 0:a.insuredList)?void 0:l[0])?void 0:i.productList.map((a=>(a.riskList=null==a?void 0:a.riskList.map((a=>(a.riskCode===e.riskCode&&(a=e),a))),a)))})),!1}return!0},$=async(e,a=!0)=>{x.trialMsg="试算中...",x.trialResultPremium=0,x.loading=!0,u("trialStart");let l=!1;if(a){const{code:a}=await ne(e);l="10000"===a}!l&&a||(x.isQuerying=!0,k.hideBenefit||oe(e).then((e=>{e.data&&e.code===H&&(A.value=e.data)})).finally((()=>{x.loading=!1})),re(e).then((a=>{var l,i;if(a.data&&a.code===H){(null==(l=null==a?void 0:a.data)?void 0:l.errorInfo)&&G(`${null==(i=null==a?void 0:a.data)?void 0:i.errorInfo}`),x.trialMsg="",x.trialResultPremium=a.data.initialPremium,x.trialResult=a.data;const t={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((e=>{t[e.riskCode]={initialAmount:e.initialAmount,initialPremium:e.initialPremium}})),N.value=t,u("trialEnd",a.data,e)}})).finally((()=>{x.loading=!1,x.isQuerying=!1})))},Z=e((async()=>{console.log(">>>>>调用试算<<<<<",x.ifPersonalInfoSuccess,P.value.canTrail());const{productCode:e,productName:a}=k.productInfo||{};if(x.ifPersonalInfoSuccess||P.value.canTrail()){x.submitData.productCode=e,x.submitData.productName=a,x.submitData.tenantId=k.productInfo.tenantId,x.riskList=x.riskList.map((e=>(e=>{var a,l,i,t;const s=null==(a=w.value.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(s&&1!==s.mainRiskFlag){const a=null==(i=null==(l=w.value)?void 0:l.productRiskRelationVOList)?void 0:i.filter((e=>{var a;if(e.collocationRiskId===s.riskId&&3!==e.collocationType){const l=null==(a=w.value.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(l&&l.riskType===se.MAIN_RISK)return!0}return!1})),n=a.length>0?a[0]:null;if(n){const a=null==(t=x.riskList)?void 0:t.find((e=>e.riskId===n.riskId));ce.forEach((l=>{l.ruleKey&&s.productRiskInsureLimitVO&&a&&(1===s.productRiskInsureLimitVO[l.ruleKey]&&(e[l.valueKey]=a[l.valueKey]),3===s.productRiskInsureLimitVO[l.ruleKey]&&(1!==s.exemptFlag?e[l.valueKey]=wa(s,a[l.valueKey],x.submitData):e[l.valueKey]=wa(s,a[l.ruleValueKey],x.submitData)))}))}}return e})(e))),x.submitData.insuredList&&x.submitData.insuredList.forEach((l=>{l.productList=[{productCode:e,productName:a,riskList:x.riskList}]}));const l=M();console.log(">>>数据构建<<<",l),await $(l)}}),300),ee=async e=>{var a;const{insuredList:l,isFirstInsuredChange:i}=e;if(D(e),x.ifPersonalInfoSuccess=!0,i){console.log("处理第一被保人修改的dy变化"),x.isQuerying=!0;const e=await de({calcProductFactorList:[{planCode:w.value.planCode,productCode:k.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=w.value.insureProductRiskVOList)?void 0:a[0]}]}],...l[0]});if(x.isQuerying=!1,!U(e))return}console.log("投被保人的信息回传 ",e),Z()},ae=async(e,l)=>{var i,t,s,n;if(l){const o=a(e);delete o.insurancePeriodValueList,delete o.paymentFrequencyList,delete o.paymentPeriodValueList;if(Y.indexOf(l.key)>=0&&`${l.oldValue}`!=`${l.newValue}`){const a={};switch(l.key){case"annuityDrawDate":a.changeType=3;break;case"coveragePeriod":a.changeType=2;break;case"chargePeriod":a.changeType=1}const r=null==(t=null==(i=x.submitData)?void 0:i.insuredList)?void 0:t[0],d=null==(n=null==(s=w.value)?void 0:s.insureProductRiskVOList)?void 0:n.find((a=>a.riskCode===e.riskCode));if(!x.isAutoChange){x.isQuerying=!0;const l=await de({calcProductFactorList:[{planCode:w.value.planCode,productCode:k.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:d,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...o,...a}}]}],...r});x.isQuerying=!1;const i=U(l);return i||(x.isAutoChange=!0),i}x.isAutoChange=!1}}return!0},le=async(e,a)=>{x.mainRiskVO=e;await ae(e,a)&&(x.riskList.length>0&&(x.riskList[0]=e),console.log("标准险种的信息回传",e),Z())},ie=async(e,a)=>{if(x.riskList=[x.mainRiskVO,...e],console.log("附加险列表数据回传",e),a){const l=e.find((e=>e.riskCode===a.riskCode));if(!(await ae(l,a)))return}Z()},te=e=>{var a,l,i,t;x.userData=e,x.defaultValue=e;const s=(null==(a=e.insuredList)?void 0:a[0].productList.findIndex((e=>e.planCode===w.value.planCode)))||0;x.planIndex=-1===s?0:s,x.riskList=(null==(t=null==(i=null==(l=null==e?void 0:e.insuredList)?void 0:l[0].productList)?void 0:i[x.planIndex])?void 0:t.riskList)||[],$(e,!0)},pe=async e=>{var a;if(k.defaultData){const e=k.defaultData.find((e=>e.productCode===k.productInfo.productCode))||k.defaultData[0];te(e),D(null==(a=k.defaultData)?void 0:a[0])}else S.value.push(w.value.planCode),await(async()=>{var e;const a=await ue({calcProductFactorList:[{planCode:w.value.planCode,productCode:k.productInfo.productCode}]});if(a.data){const l=a.data.find((e=>e.productCode===k.productInfo.productCode))||a.data[0];te(l),D(null==(e=a.data)?void 0:e[0])}})()},ye=async e=>{var a,l;const i=k.productInfo.planList.findIndex((a=>a.planCode===e)),t=(null==(l=null==(a=x.defaultValue)?void 0:a.insuredList)?void 0:l[0].productList.findIndex((a=>a.planCode===e)))||0,s=i>=0?k.productInfo.planList[i]:null;s&&(x.currentPlanCode=e,w.value=s,x.planIndex=t>=0?t:0,x.defaultValue.insuredList[0].productList[x.planIndex].riskList=x.riskList,S.value.findIndex((a=>a===e))<0&&S.value.push(e))};t((()=>{var e,a;x.select={},x.list=[],x.userData={},x.riskIsInsure={},x.submitData={},x.riskList=[{}],x.mainRiskVO={},x.ifPersonalInfoSuccess=!1,x.trialMsg="",x.trialResultPremium=0,x.riskIsInsure={},null==(a=null==(e=w.value)?void 0:e.insureProductRiskVOList)||a.forEach((e=>{var a;const l=null==(a=w.value.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId));l&&(x.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:l})}))})),s((()=>{w.value=k.dataSource,x.loading=!0,x.show=!0,x.isAniShow=!0,x.isSkipFirstTrial=!0,x.hadSkipFirstTrial=!1,q((()=>{pe()}))}));return d({getTrialSuccessFlag:()=>x.trialResultPremium>0,validate:()=>P.value.validate(!1),validateTrialFields:()=>P.value.validateTrialFields(),validateHolder:e=>{var a;return null==(a=P.value)?void 0:a.validateHolder(e)},getUserData:()=>({...x.userData}),onShare:e=>{var a;x.trialResultPremium&&(null==(a=I.value)||a.validate().then((()=>{Object.assign(O.value,k.defaultOrder,{extInfo:{...O.value.extInfo,buttonCode:ke.TRIAL_PREMIUM,pageCode:fe.TRIAL_PREMIUM,templateId:V}});const a=me(k.productInfo,N.value,O.value);Ie(a,((a,l)=>{l===Q.JUMP_PAGE&&(T.value.link=`${window.location.href}&isShare=1&orderNo=${a.orderNo}`,e())})),console.log("---- validate success ----")})))},onNext:()=>{var e;const{productCode:a,productName:l}=k.productInfo;R?K(fe.TRIAL_PREMIUM,h.query):x.trialResultPremium&&(null==(e=I.value)||e.validate().then((()=>{Object.assign(O.value,k.defaultOrder,{extInfo:{templateId:V,...O.value.extInfo,...k.defaultOrder.extInfo||{},buttonCode:ke.TRIAL_PREMIUM,pageCode:fe.TRIAL_PREMIUM}}),console.log("dealMixData()",M());const e=me({...M(),productCode:a,productName:l},x.trialResult,O.value);Ie(e,((e,a)=>{a===Q.JUMP_PAGE&&W(e.nextPageCode,{...h.query,orderNo:e.orderNo})})),console.log("---- validate success ----")})),x.loading=!1,x.show=!0,x.isAniShow=!0)},dealMixData:M}),n((()=>x.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),n((()=>x.userData),(e=>{if(e){const{holder:a,insuredList:l}=e||{},i={holder:a,insuredList:l};Object.assign(x.submitData,i),u("update:userData",i)}}),{deep:!0}),n((()=>k.dataSource),(e=>{w.value=e}),{deep:!0,immediate:!0}),(e,a)=>{var i,t,s,n,d,u,k,y;return o(),r("div",Sa,[f(e.$slots,"trialHead",{},void 0,!0),L("div",Da,[p(Ta,{labels:c(_a)((null==(i=w.value)?void 0:i.insureProductRiskVOList)||[],w.value.productRiskRelationVOList)},null,8,["labels"]),L("div",Fa,[!l.hideBenefit&&(null==(t=A.value)?void 0:t.benefitRiskResultVOList)?(o(),b(Ra,{key:0,class:"benefit-wrap","data-source":A.value,"product-info":w.value,"show-type-list":A.value.showTypList},null,8,["data-source","product-info","show-type-list"])):m("",!0),c(F)?(o(),b(Re,{key:1,"plan-list":l.productInfo.planList,"default-plan":w.value,onPlanChange:ye},null,8,["plan-list","default-plan"])):m("",!0),w.value.productFactor?(o(),b(c(z),{ref_key:"personalInfoRef",ref:P,key:w.value.planCode,modelValue:c(x).userData,"onUpdate:modelValue":a[0]||(a[0]=e=>c(x).userData=e),"is-trial":l.isTrial,"product-factor":w.value.productFactor,"multi-insured-config":null==(s=w.value)?void 0:s.multiInsuredConfigVO,onTrailChange:ee},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):m("",!0),(o(),b(J,{ref_key:"insureInfosRef",ref:I,key:w.value.planCode,"origin-data":null==(n=w.value.insureProductRiskVOList)?void 0:n[0],"product-factor":w.value.productFactor,"default-value":c(x).defaultValue?null==(u=null==(d=c(x).defaultValue)?void 0:d.insuredList[0].productList[c(x).planIndex])?void 0:u.riskList[0]:null,"trial-result":c(x).trialResult,onTrialChange:le},null,8,["origin-data","product-factor","default-value","trial-result"])),w.value.insureProductRiskVOList?(o(),b(he,{key:w.value.planCode,"data-source":w.value,"show-main-risk":!1,"default-value":c(x).defaultValue?null==(y=null==(k=c(x).defaultValue)?void 0:k.insuredList[0].productList[c(x).planIndex])?void 0:y.riskList:[],onTrialChange:ie},{holderForm:v((()=>{var e;return[l.isTrial&&l.dataSource.productFactor?(o(),b(c(z),{key:0,ref_key:"personalInfoRef",ref:P,modelValue:c(x).userData,"onUpdate:modelValue":a[1]||(a[1]=e=>c(x).userData=e),"is-trial":l.isTrial,"is-only-holder":!0,"product-factor":l.dataSource.productFactor,"multi-insured-config":null==(e=l.dataSource)?void 0:e.multiInsuredConfigVO,onTrailChange:ee},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):m("",!0)]})),_:1},8,["data-source","default-value"])):m("",!0),ja])]),f(e.$slots,"trialBtn",{trialData:c(x).submitData,riskPremium:c(x).trialResult,loading:c(x).isQuerying,personalInfoRef:P.value},void 0,!0)])}}}),[["__scopeId","data-v-27c79744"]]);export{Ma as default};
