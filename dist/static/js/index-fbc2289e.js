import{l as e,a,P as l}from"./index-567c873e.js";import{d as i,A as t,o as s,a1 as n,R as o,b as r,c as u,V as d,U as c,f as p,e as v,w as f,h as m,k,G as I,aM as y,r as L,g as h,i as b,aN as g,aO as V,aY as R,aS as C,L as x,aZ as P,a_ as O,F as T,E as w,a$ as S,aQ as D,al as _,am as F,ag as E,j as M,aA as N,b0 as A,a2 as Y,aa as U,B as $,b1 as j,b2 as B,u as X,a as q,$ as K,p as Q,au as H,T as W,P as z,q as G}from"./index-325daa40.js";import{_ as J}from"./index-619dcf1c.js";/* empty css              */import{S as Z}from"./index-c7314228.js";import{P as ee}from"./index-0fc5532d.js";import{S as ae,_ as le}from"./box-title-499e1817.js";import{_ as ie}from"./index-c8330a7e.js";import{_ as te}from"./empty-ae586b6c.js";import{R as se}from"./trial-e4064343.js";import{u as ne,b as oe,p as re,q as ue,c as de}from"./trial-adea73d1.js";import{u as ce}from"./useOrder-41f2e5ff.js";import{t as pe}from"./utils-4eeca896.js";import{P as ve,B as fe}from"./constants-7afb7c3d.js";import{n as me}from"./nextStep-f0717ada.js";const ke={key:0},Ie={key:0,class:"risk2-field"},ye=i({name:"ProductRiskList"});var Le=I(i({...ye,props:{dataSource:{type:Array,default:()=>[]},productInfo:{type:Object,default:()=>({productCode:"",productName:""})},showMainRisk:{type:Boolean,default:()=>!0},defaultValue:{type:Object,default:()=>{}}},emits:["trialChange"],setup(e,{emit:a}){const l=e,i=t({loading:!1,show:!0,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},disabledRiskInfo:[],risksDefaultValue:{}}),I=e=>{const a=[];return e.riskLiabilityInfoVOList.map((e=>(1!=+e.showFlag&&a.push({...e}),[]))),a},L=(e,t,s)=>{var n;i.riskIsInsure[t].data=e;const o=[...i.disabledRiskInfo];null==(n=l.dataSource.insureProductRiskVOList)||n.forEach((e=>{if(1!==e.mainRiskFlag){const a=i.riskIsInsure[e.riskId];a.data&&Object.keys(a.data).length>0&&"1"===a.selected&&o.push(a.data)}})),a("trialChange",o,s)},h=(e,a)=>{var t;null==(t=l.dataSource.productRiskRelationVOList)||t.forEach((l=>{1!==l.collocationType&&(a.riskId===l.riskId?(i.riskIsInsure[a.riskId]&&i.riskIsInsure[a.riskId].selected,2===l.collocationType&&i.riskIsInsure[l.collocationRiskId]&&(i.riskIsInsure[l.collocationRiskId].selected=e),3===l.collocationType&&i.riskIsInsure[l.collocationRiskId]&&"1"===e&&(i.riskIsInsure[l.collocationRiskId].selected="1"===e?"2":"1")):a.riskId===l.collocationRiskId&&(3===l.collocationType&&"1"===e&&i.riskIsInsure[l.riskId]&&(i.riskIsInsure[l.riskId].selected="1"===e?"2":"1"),2===l.collocationType&&i.riskIsInsure[l.riskId]&&(i.riskIsInsure[l.riskId].selected=e)))})),"2"===e?L({},a.riskId):(e=>{var a,l,i,t,s,n,o,r,u,d,c,p;if(1!==(null==e?void 0:e.factorDisPlayFlag)){const v=null==(a=null==e?void 0:e.productRiskInsureLimitVO)?void 0:a.amountPremiumConfigVO,f={riskCategory:e.riskCategory,riskCode:e.riskCode,riskName:e.riskName,riskId:e.riskId,riskType:e.riskType,mainRiskId:e.mainRiskId,mainRiskCode:e.mainRiskCode,liabilityList:I(e)};f.chargePeriod=(null==(i=null==(l=null==e?void 0:e.productRiskInsureLimitVO)?void 0:l.paymentPeriodValueList)?void 0:i.length)>0&&(null==(t=null==e?void 0:e.productRiskInsureLimitVO)?void 0:t.paymentPeriodValueList[0].code)||null,f.coveragePeriod=(null==(n=null==(s=null==e?void 0:e.productRiskInsureLimitVO)?void 0:s.insurancePeriodValueList)?void 0:n.length)>0&&(null==(o=null==e?void 0:e.productRiskInsureLimitVO)?void 0:o.insurancePeriodValueList[0].code)||null,f.paymentFrequency=(null==(u=null==(r=null==e?void 0:e.productRiskInsureLimitVO)?void 0:r.paymentFrequencyList)?void 0:u.length)>0&&(null==(d=null==e?void 0:e.productRiskInsureLimitVO)?void 0:d.paymentFrequencyList[0].code)||null;let m=0;1===v.displayType?m=(null==v?void 0:v.minStepValue)>0?null==v?void 0:v.minStepValue:0:3===v.displayType&&2===v.requireCopies?m=(null==(c=null==v?void 0:v.displayValues)?void 0:c.length)>0?null==v?void 0:v.displayValues[0].value:0:3===v.displayType&&1===v.requireCopies?(m=(null==(p=null==v?void 0:v.displayValues)?void 0:p.length)>0?null==v?void 0:v.displayValues[0].value:0,f.copy=v.minCopiesValue):2===v.displayType?f.copy=v.minCopiesValue:m=0,1===v.saleMethod?f.initialAmount=m:f.initialPremium=m,L(f,e.riskId)}})(a)};return s((()=>{(()=>{var e,a;i.disabledRiskInfo=[];let t=null;if(null==(e=l.dataSource.insureProductRiskVOList)||e.forEach((e=>{var a;const s=1!==e.mainRiskFlag?null==(a=l.dataSource.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId)):{};1===e.mainRiskFlag&&(t=e),i.riskIsInsure[e.riskId]?(i.riskIsInsure[e.riskId].data=null,i.riskIsInsure[e.riskId].relation=s,i.riskIsInsure[e.riskId].isMust=!1):i.riskIsInsure[e.riskId]={selected:"2",data:null,relation:s,isMust:!1}})),t){const e=null==(a=l.dataSource.productRiskRelationVOList)?void 0:a.filter((e=>e.riskId===t.riskId));if(!e)return;null==e||e.forEach((e=>{var a,t,s,n,o,r,u,d,c,p,v,f,m,k,y;if(2===e.collocationType){i.riskIsInsure[e.collocationRiskId].selected="1",i.riskIsInsure[e.collocationRiskId].isMust=!0;const h=null==(a=l.dataSource.insureProductRiskVOList)?void 0:a.find((a=>e.collocationRiskId===a.riskId));if(h&&1!==h.factorDisPlayFlag&&(null==(t=null==h?void 0:h.productRiskInsureLimitVO)?void 0:t.amountPremiumConfigVO)){const a=null==(s=h.riskLiabilityInfoVOList)?void 0:s.every((e=>1!==e.showFlag)),l=null==(n=null==h?void 0:h.productRiskInsureLimitVO)?void 0:n.amountPremiumConfigVO;if(a){i.riskIsInsure[e.collocationRiskId].isDisabled=!0;const a={riskCategory:h.riskCategory,riskCode:h.riskCode,riskName:h.riskName,riskId:h.riskId,riskType:h.riskType,mainRiskId:h.mainRiskId,mainRiskCode:h.mainRiskCode,liabilityList:I(h)};a.chargePeriod=(null==(r=null==(o=null==h?void 0:h.productRiskInsureLimitVO)?void 0:o.paymentPeriodValueList)?void 0:r.length)>0&&(null==(u=null==h?void 0:h.productRiskInsureLimitVO)?void 0:u.paymentPeriodValueList[0].code)||null,a.coveragePeriod=(null==(c=null==(d=null==h?void 0:h.productRiskInsureLimitVO)?void 0:d.insurancePeriodValueList)?void 0:c.length)>0&&(null==(p=null==h?void 0:h.productRiskInsureLimitVO)?void 0:p.insurancePeriodValueList[0].code)||null,a.paymentFrequency=(null==(f=null==(v=null==h?void 0:h.productRiskInsureLimitVO)?void 0:v.paymentFrequencyList)?void 0:f.length)>0&&(null==(m=null==h?void 0:h.productRiskInsureLimitVO)?void 0:m.paymentFrequencyList[0].code)||null;let t=0;1===l.displayType?t=(null==l?void 0:l.minStepValue)>0?null==l?void 0:l.minStepValue:0:3===l.displayType&&2===l.requireCopies?t=(null==(k=null==l?void 0:l.displayValues)?void 0:k.length)>0?null==l?void 0:l.displayValues[0].value:0:3===l.displayType&&1===l.requireCopies?(t=(null==(y=null==l?void 0:l.displayValues)?void 0:y.length)>0?null==l?void 0:l.displayValues[0].value:0,a.copy=l.minCopiesValue):2===l.displayType&&(a.copy=l.minCopiesValue),1===l.saleMethod?a.initialAmount=t:a.initialPremium=t,i.disabledRiskInfo.push(a),L(a,h.riskId)}}}3===e.collocationType&&(i.riskIsInsure[e.collocationRiskId].selected="2",i.riskIsInsure[e.collocationRiskId].isMust=!0)}))}})()})),n((()=>{i.loading=!0})),o((()=>i.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),o((()=>l.defaultValue),(e=>{(null==e?void 0:e.length)>0&&e.forEach((e=>{i.risksDefaultValue[e.riskCode]=e,i.riskIsInsure[e.riskId]?(i.riskIsInsure[e.riskId].selected="1",L(e,e.riskId)):i.riskIsInsure[e.riskId]={selected:"1",isMust:!1}}))}),{deep:!0,immediate:!0}),(a,l)=>{const t=Z,s=y;return r(!0),u(c,null,d(e.dataSource.insureProductRiskVOList,(l=>{var n,o;return r(),u(c,{key:l.riskCode},[(!e.showMainRisk&&1!==l.mainRiskFlag||e.showMainRisk)&&(null==(o=null==(n=p(i).riskIsInsure)?void 0:n[l.riskId])?void 0:o.relation)?(r(),u("div",ke,[v(s,{modelValue:p(i).riskIsInsure[l.riskId].selected,"onUpdate:modelValue":e=>p(i).riskIsInsure[l.riskId].selected=e,label:l.riskName,name:"selected","label-width":"50%",border:!1,class:"risk-select-field risk-name"},{input:f((()=>[v(t,{modelValue:p(i).riskIsInsure[l.riskId].selected,"onUpdate:modelValue":e=>p(i).riskIsInsure[l.riskId].selected=e,"active-value":"1","inactive-value":"2",size:"0.74rem",disabled:p(i).riskIsInsure[l.riskId].isMust,style:{"margin-right":"8px"},onChange:e=>h(e,l)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"]),"1"===p(i).riskIsInsure[l.riskId].selected?(r(),u("div",Ie,[v(J,{modelValue:p(i).riskIsInsure[l.riskId].data,"onUpdate:modelValue":e=>p(i).riskIsInsure[l.riskId].data=e,"origin-data":l,"product-factor":e.dataSource.productFactor,"default-value":p(i).risksDefaultValue[l.riskCode],onTrialChange:(e,a)=>L(e,l.riskId,a)},null,8,["modelValue","onUpdate:modelValue","origin-data","product-factor","default-value","onTrialChange"])])):m("",!0),1===l.exemptFlag&&"1"===p(i).riskIsInsure[l.riskId].selected?k(a.$slots,"holderForm",{key:1},void 0,!0):m("",!0)])):m("",!0)],64)})),128)}}}),[["__scopeId","data-v-04703dac"]]);const he={class:"pro-radio-wrap"},be=i({name:"PlanSelect"}),ge=i({...be,props:{planList:{default:()=>[]},defaultPlan:{default:()=>{}}},emits:["planChange"],setup(e,{emit:a}){const l=e,i=L("");let t=!1;return n((()=>{l.defaultPlan&&(t=!0,i.value=l.defaultPlan.planCode)})),o((()=>i),(e=>{t||a("planChange",i.value),t&&(t=!1)}),{deep:!0,immediate:!0}),(a,t)=>{const s=g,n=V;return e.planList.length>0?(r(),h(n,{key:0,modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),label:"保障计划",name:"planCode",class:"risk-select-field"},{input:f((()=>[b("div",he,[v(s,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),options:l.planList.map((e=>({label:e.planName,value:e.planCode})))},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):m("",!0)}}});var Ve=I(i({__name:"ScrollWrap",props:{moduleValue:{type:Number,default:0},scrollX:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!1}},emits:["update:modelValue","update:needFixed"],setup(e,{emit:a}){const l=e,i=t({offsetX:0,offsetY:0,startX:0,startY:0}),s=L(null),d=L(null),{width:c,height:v}=R(s),{width:f,height:m}=R(d),I=C("PRO_TABLE_KEY"),y=x((()=>{const e=c.value>f.value+4;return a("update:needFixed",e),e})),h=x((()=>v.value>m.value+4)),{direction:b}=P(s,{passive:!1,onSwipeStart(e){const{clientX:a,clientY:l}=e.touches[0];i.startX=a,i.startY=l},onSwipe(e){const{clientX:a,clientY:l}=e.touches[0];if(["LEFT","RIGHT"].includes(b.value)){const e=i.offsetX-(i.startX-a);e>-c.value+f.value&&e<0&&(i.offsetX=e,I.state.offsetX=i.offsetX),i.startX=a}if(["UP","DOWN"].includes(b.value)){const e=i.offsetY-(i.startY-l);e>-v.value+m.value&&e<0&&(i.offsetY=e,I.state.offsetY=i.offsetY),i.startY=l}},onSwipeEnd(e){}}),g=x((()=>l.scrollX||l.scrollY?`transform: translate(${l.scrollX?`${i.offsetX}px`:0},${l.scrollY?`${i.offsetY}px`:0} );`:""));return o((()=>null==I?void 0:I.state),(()=>{const{offsetX:e,offsetY:a}=(null==I?void 0:I.state)||{};y.value&&(i.offsetX=e),h.value&&(i.offsetY=a)}),{deep:!0,immediate:!0}),n((()=>{var e;d.value=null==(e=s.value)?void 0:e.parentElement})),(e,a)=>(r(),u("div",{ref_key:"swiperEl",ref:s,class:"scroll-wrap",style:O(p(g))},[k(e.$slots,"default",{},void 0,!0)],4))}}),[["__scopeId","data-v-0ba94815"]]);const Re={class:"pro-com-table-wrap"},Ce={ref:"tableHeadRef",class:"com-table"},xe={class:"com-table-head"},Pe={class:"com-table-row"},Oe={ref:"tableBodyRef",class:"com-table"},Te={class:"com-table-head"},we={class:"com-table-row"},Se={class:"com-table-body"};var De=I(i({__name:"Table",props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},translateY:{type:Number,default:0}},emits:["update:modelValue","update:needFixed"],setup(e,{emit:a}){const l=e=>{a("update:needFixed",e)};return(a,i)=>(r(),u("div",Re,[v(Ve,{ref:"tableScroll",class:"pro-table-head","scroll-x":"","onUpdate:needFixed":l},{default:f((()=>[b("table",Ce,[b("thead",xe,[b("tr",Pe,[(r(!0),u(c,null,d(e.columns,((e,a)=>(r(),u("th",{key:a,class:T(["table-cell",`table-cell-${a}`]),style:O({minWidth:`${e.width||80}px`})},w(e.title),7)))),128))])])],512)])),_:1},512),v(Ve,{ref:"tableScroll",class:"pro-table-body","scroll-y":"","scroll-x":""},{default:f((()=>[b("table",Oe,[b("thead",Te,[b("tr",we,[(r(!0),u(c,null,d(e.columns,((e,a)=>(r(),u("th",{key:a,class:T(["table-cell",`table-cell-${a}`]),style:O({minWidth:`${e.width||80}px`})},w(e.title),7)))),128))])]),b("tbody",Se,[(r(!0),u(c,null,d(e.data,((a,l)=>(r(),u("tr",{key:l,class:"com-table-row"},[(r(!0),u(c,null,d(e.columns,((e,i)=>(r(),u("td",{key:i,class:T(["table-cell"])},[b("span",null,w(e.render?e.render(a,l):a[e.key]),1)])))),128))])))),128))])],512)])),_:1},512)]))}}),[["__scopeId","data-v-f37eb4be"]]);const _e=e=>(_("data-v-0cf962f9"),e=e(),F(),e),Fe={key:0,class:"pro-table-wrap"},Ee={key:1,class:"no-data-wrap"},Me=[_e((()=>b("img",{src:te,alt:"暂无数据"},null,-1))),_e((()=>b("span",null,"暂无数据～",-1)))];var Ne=I(i({__name:"ProTable",props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},setup(e){const a=e;L(null),L(null);const l=t({translateY:0,translateX:0,offsetX:0,offsetY:0,needFixed:!1});S("PRO_TABLE_KEY",{state:l});const i=x((()=>D(a.columns)?a.columns.filter((e=>e.fixed)):[])),s=e=>{l.needFixed=e};return(a,t)=>e.data&&e.data.length?(r(),u("div",Fe,[v(De,{"translate-y":p(l).translateY,"onUpdate:translateY":t[0]||(t[0]=e=>p(l).translateY=e),columns:e.columns,data:e.data,"onUpdate:needFixed":s},null,8,["translate-y","columns","data"]),p(l).needFixed?(r(),h(De,{key:0,"translate-y":p(l).translateY,"onUpdate:translateY":t[1]||(t[1]=e=>p(l).translateY=e),class:"pro-table-fixed",style:{width:"160px"},columns:p(i),data:e.data},null,8,["translate-y","columns","data"])):m("",!0)])):(r(),u("div",Ee,Me))}}),[["__scopeId","data-v-0cf962f9"]]);const Ae={class:"benefit-table"},Ye=i({__name:"BenefitTable",props:{dataSource:null},setup(e){const a=e,l=x((()=>D(a.dataSource.headers)?a.dataSource.headers.map(((e,a)=>({title:e,key:`header_${a}`,fixed:a<2}))):[])),i=x((()=>D(a.dataSource.dataList)?a.dataSource.dataList.map((e=>{const a={};return e.forEach(((e,l)=>{a[`header_${l}`]=e})),a})):[]));return(e,a)=>(r(),u("div",Ae,[v(Ne,{columns:p(l),data:p(i),"is-clone":!0},null,8,["columns","data"])]))}});const Ue=e=>(_("data-v-5e4dfbe9"),e=e(),F(),e),$e={key:0,class:"benefit-container"},je={key:0,class:"benefit"},Be=Ue((()=>b("div",{class:"line"},null,-1))),Xe={class:"box-title box-title-chart"},qe=Ue((()=>b("img",{class:"tl",src:le,alt:""},null,-1))),Ke=Ue((()=>b("img",{class:"transform-z180 tr",src:le,alt:""},null,-1))),Qe={key:0},He={class:"box"},We={class:"box-title"},ze=Ue((()=>b("img",{class:"tl",src:le,alt:""},null,-1))),Ge=Ue((()=>b("img",{class:"transform-z180 tr",src:le,alt:""},null,-1))),Je={class:"box-price"},Ze={class:"text1"},ea={class:"text2"},aa={key:1},la={key:2,style:{width:"100%, minWidth: 338px"}},ia={class:"slider"},ta={style:{flex:"1",margin:"0px 5px"}},sa={class:"custom-button"},na=Ue((()=>b("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),oa={class:"btn-two"},ra={key:1,class:"benefit-container"},ua={key:0},da={class:"benefit"},ca=Ue((()=>b("div",{class:"line"},null,-1))),pa=Ue((()=>b("div",null,[b("div",{class:"box"},[b("p",{class:"box-title"},[b("img",{class:"tl",src:le,alt:""}),M(" 保单年度"),b("span",null,"-"),M("年度，被保人"),b("span",null,"-"),M("岁时 "),b("img",{class:"transform-z180 tr",src:le,alt:""})]),b("div",{class:"box-price"})])],-1))),va={class:"slider"},fa={class:"opt lf"},ma={style:{flex:"1",margin:"0px 5px"}},ka=Ue((()=>b("div",{class:"custom-button"},"0 岁",-1))),Ia={class:"opt rg"},ya=Ue((()=>b("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),La={class:"btn-two"},ha={key:1,class:"empty-box"},ba=i({name:"Benefit"});var ga=I(i({...ba,props:{dataSource:{default:()=>({showTypeList:["1"]})},productInfo:{default:()=>null}},setup(e){var a;const l=e,i="1",t="2",s="3",n=L(0),k=L(0),I=L(0),y=L(),g=L(0),V=L(null==(a=l.dataSource.showTypeList)?void 0:a[0]),R=L(),C=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[n.value];k.value=a.ageBegin+1,g.value=a.ageBegin+1,I.value=a.ageEnd},x=()=>{var e,a,i,t,s,o;const r=null==(a=null==(e=l.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:a[n.value];R.value=null==(s=null==(t=null==(i=l.dataSource)?void 0:i.benefitRiskResultVOList)?void 0:t[n.value].benefitRiskTableResultVOList)?void 0:s[0];const{a:u,year:d}=((e,a)=>{const l=[],i=[];for(let t=e,s=0;t<=a;t++,s++)l.push(t.toString()),i.push(s+1);return{a:l,year:i}})(k.value,I.value),c={index:u.indexOf(g.value.toString()),age:u,year:d,result:null==(o=null==r?void 0:r.benefitRiskItemResultVOList)?void 0:o[0]};y.value=c},P=()=>{g.value>I.value-1||(g.value+=1,x())},O=()=>{g.value>k.value&&(g.value-=1,x())},T=e=>{n.value=e.name,C(l.dataSource),x()};return o((()=>l.dataSource),(e=>{var a;e&&(C(e),x(),V.value=null==(a=e.showTypeList)?void 0:a[0])}),{deep:!0,immediate:!0}),o(g,(()=>{x()})),(a,o)=>{var L;const C=U,x=ae,S=$,D=j,_=B,F=ee;return(null==(L=e.dataSource)?void 0:L.benefitRiskResultVOList)?(r(),u("div",$e,[v(_,{active:p(n),onClickTab:T},{default:f((()=>{var e;return[(r(!0),u(c,null,d(null==(e=l.dataSource)?void 0:e.benefitRiskResultVOList,((e,a)=>(r(),h(D,{key:a,name:a,title:e.riskName},{default:f((()=>{var e,L,T,D,_,F,U,$,j,B,X,q,K,Q,H,W;return[a==p(n)?(r(),u("div",je,[Be,E(b("p",Xe,[qe,M(" 保单年度"),b("span",null,w(null==(T=null==(e=p(y))?void 0:e.year)?void 0:T[null==(L=p(y))?void 0:L.index]),1),M("年度，被保人"),b("span",null,w(null==(F=null==(D=p(y))?void 0:D.age)?void 0:F[null==(_=p(y))?void 0:_.index]),1),M("岁时 "),Ke],512),[[N,p(V)===t]]),p(V)===i?(r(),u("div",Qe,[b("div",He,[b("p",We,[ze,M(" 保单年度"),b("span",null,w(null==(j=null==(U=p(y))?void 0:U.year)?void 0:j[null==($=p(y))?void 0:$.index]),1),M("年度，被保人"),b("span",null,w(null==(q=null==(B=p(y))?void 0:B.age)?void 0:q[null==(X=p(y))?void 0:X.index]),1),M("岁时 "),Ge]),b("div",Je,[(r(!0),u(c,null,d(null==(Q=null==(K=p(y))?void 0:K.result)?void 0:Q.headers,((e,a)=>{var l,i,t,s,n,o,d,c,v,f;return r(),u("div",{key:a,style:{width:"33%"}},[b("p",Ze,w(("0"==(null==(n=null==(s=null==(i=null==(l=p(y))?void 0:l.result)?void 0:i.dataList)?void 0:s[null==(t=p(y))?void 0:t.index])?void 0:n[a])?"0":p(A)(Number(null==(f=null==(v=null==(d=null==(o=p(y))?void 0:o.result)?void 0:d.dataList)?void 0:v[null==(c=p(y))?void 0:c.index])?void 0:f[a])))||"0"),1),b("p",ea,w(e)+"(元）",1)])})),128))])])])):m("",!0),p(V)===s?(r(),u("div",aa,[v(Ye,{"data-source":p(R)},null,8,["data-source"])])):m("",!0),p(V)==t?(r(),u("div",la,[v(ie,{min:p(k),max:p(I),current:p(g),data:null==(W=null==(H=p(y))?void 0:H.result)?void 0:W.benefitRiskItemList},null,8,["min","max","current","data"])])):m("",!0),p(V)!=s?(r(),u(c,{key:3},[b("div",ia,[b("div",{class:"opt lf",onClick:O},[v(C,{name:"minus"})]),b("div",ta,[p(k)?(r(),h(x,{key:0,modelValue:p(g),"onUpdate:modelValue":o[0]||(o[0]=e=>Y(g)?g.value=e:null),min:p(k),max:p(I),"bar-height":"8px"},{button:f((()=>[b("div",sa,w(p(g))+" 岁",1)])),_:1},8,["modelValue","min","max"])):m("",!0)]),b("div",{class:"opt rg",onClick:P},[v(C,{name:"plus"})])]),na],64)):m("",!0),b("div",oa,[l.dataSource.showTypeList.includes(i)?(r(),h(S,{key:0,round:"",plain:p(V)!==i,type:"primary",class:"btn",onClick:o[1]||(o[1]=e=>V.value=i)},{default:f((()=>[M("图表展示")])),_:1},8,["plain"])):m("",!0),l.dataSource.showTypeList.includes(t)?(r(),h(S,{key:1,round:"",plain:p(V)!==t,type:"primary",class:"btn",onClick:o[2]||(o[2]=e=>V.value=t)},{default:f((()=>[M("趋势展示")])),_:1},8,["plain"])):m("",!0),l.dataSource.showTypeList.includes(s)?(r(),h(S,{key:2,round:"",plain:p(V)!==s,type:"primary",class:"btn",onClick:o[3]||(o[3]=e=>V.value=s)},{default:f((()=>[M("表格展示")])),_:1},8,["plain"])):m("",!0)])])):m("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(r(),u("div",ra,[l.productInfo?(r(),u("div",ua,[v(_,{active:p(n),onClickTab:T},{default:f((()=>[(r(),h(D,{key:1,name:1,title:e.productInfo.insureProductRiskVOList[0].riskName},{default:f((()=>[b("div",da,[ca,pa,b("div",va,[b("div",fa,[v(C,{name:"minus"})]),b("div",ma,[v(x,{modelValue:p(g),"onUpdate:modelValue":o[4]||(o[4]=e=>Y(g)?g.value=e:null),min:0,max:80,"bar-height":"8px",disabled:""},{button:f((()=>[ka])),_:1},8,["modelValue"])]),b("div",Ia,[v(C,{name:"plus"})])]),ya,b("div",La,[v(S,{round:"",plain:!0,type:"primary",class:"btn",disabled:""},{default:f((()=>[M("图表展示")])),_:1}),v(S,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:f((()=>[M("趋势展示")])),_:1}),v(S,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:f((()=>[M("表格展示")])),_:1})])])])),_:1},8,["title"]))])),_:1},8,["active"])])):(r(),u("div",ha,[v(F,{title:"试算结果正在计算中...","empty-class":"empty-select"})]))]))}}}),[["__scopeId","data-v-5e4dfbe9"]]);const Va={key:0,class:"head-warning-wrap"},Ra=b("div",{class:"warning-icon"},[b("span",null,"!")],-1),Ca={class:"warning-text"},xa=i({name:"HeadWaring"}),Pa=i({...xa,props:{labels:{default:()=>[]}},setup:e=>(a,l)=>e.labels.length>0?(r(),u("div",Va,[Ra,b("div",Ca,[(r(!0),u(c,null,d(e.labels,(e=>(r(),u("span",{key:e},w(e),1)))),128))])])):m("",!0)}),Oa=(a,l,i)=>{const t=a,{holder:s}=i,n=i.insuredList[0],o=(l||"").split("_");if(o.length<2)return l;if(e.exports.isNaN(Number(o[1])))return l;if(o[1]-=1,1===t.exemptFlag){if("to"===o[0]){let e=0;1===t.exemptType?(null==s?void 0:s.birthday)&&(e=parseInt(""+((new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)):2===t.exemptType&&(null==n?void 0:n.birthday)&&(e=parseInt(""+(+(new Date).getTime()-new Date(n.birthday).getTime())/31536e6,10)),o[1]=+o[1]-e}o[0]="year"}return o.join("_")},Ta=(e,a)=>{const l=[],i={};return null==e||e.forEach((e=>{i[e.riskId]=e})),null==a||a.forEach((e=>{var a,t,s,n;const{collocationType:o,collocationRiskId:r,riskId:u}=e;switch(o){case 2:{const e=null==(a=i[u])?void 0:a.riskName,s=null==(t=i[r])?void 0:t.riskName;l.push(`${e} 和 ${s} 必须同时投保`);break}case 3:{const e=null==(s=i[u])?void 0:s.riskName,a=null==(n=i[r])?void 0:n.riskName;l.push(`${e} 和 ${a} 不能同时投保`);break}}})),l};const wa={class:"com-body"},Sa={class:"trial-body"},Da={class:"container"},_a=(e=>(_("data-v-1023fdf5"),e=e(),F(),e))((()=>b("div",{class:"empty"},null,-1))),Fa=i({name:"TrialBody"});var Ea=I(i({...Fa,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1},defaultOrder:{default:()=>({})}},emits:["trialStart","trialEnd","update:userData"],setup(i,{expose:d,emit:c}){const I=i,y=L(null),g=X();q();const{tenantId:V,templateId:R,preview:C}=g.query,P=L(),O=t({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1,isQuerying:!1,currentPlanCode:""}),T=ce();L();const w=L(),S=L(I.dataSource),_=L([]),F=e=>{const{holder:a,insuredList:l}=e||{};a&&(O.submitData.holder=a),l&&l.length>0&&l.forEach(((e,a)=>{var l;O.submitData.insuredList&&O.submitData.insuredList.length>a?O.submitData.insuredList[a]=e:((null==(l=O.submitData)?void 0:l.insuredList)||(O.submitData.insuredList=[]),O.submitData.insuredList.push(e))}))},E=x((()=>I.productInfo.planList&&I.productInfo.planList.length>2)),M=(e,a)=>{if(e){const l=["birthday","age","gender","id"];a.includes("occupationCodeList")&&l.push("occupationClass"),Object.keys(e).forEach((i=>{[...a,...l].includes(i)||(e[i]=null)}))}},N=(e,a=(e=>!0))=>D(e)?e.filter(a).map((e=>e.code)):[],A=()=>{console.log("--current plan = ",S.value),console.log("---current submit = ",O.submitData);const a=e.exports.cloneDeep(O.submitData);if(!E.value)return a;const{1:l,2:i,3:t}=S.value.productFactor||{};if(a.holder&&M(a.holder,N(l)),a.insuredList){const e=["productList","beneficiaryList"],l=N(i,(e=>"2"!==String(e.subModuleType))),s=N(i,(e=>"2"===String(e.subModuleType))),n=D(s),o=N(t),r=D(o);a.insuredList.forEach(((a,i)=>{var t,u;M(a,[...i>=1&&n?s:l,...e,...r?["insuredBeneficiaryType"]:[]]),(null==(t=a.beneficiaryList)?void 0:t.length)>0&&(r?a.beneficiaryList.forEach((e=>M(e,o))):a.beneficiaryList.length=0),a.planCode=S.value.planCode;const d=(null==(u=a.productList[0])?void 0:u.riskList)||[],c=S.value.insureProductRiskVOList||[];if(d&&c){const e=d.filter((e=>null!==c.find((a=>a.riskCode===e.riskCode))));a.productList[0].riskList=e}}))}return a},Y=L(),U=L({}),$=["annuityDrawDate","coveragePeriod","chargePeriod","paymentFrequency"],j=e=>{var a,i,t,s,n,o;if(null==(i=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:i.productRiskDyInsureFactorVOList){const a=[];if(null==(t=S.value)||t.insureProductRiskVOList.forEach((i=>{var t,s;const n=null==(s=null==(t=null==e?void 0:e.data)?void 0:t[0])?void 0:s.productRiskDyInsureFactorVOList.find((e=>e.riskCode===i.riskCode));if(n){i.productRiskInsureLimitVO={...i.productRiskInsureLimitVO,...n};const e=O.riskList.find((e=>e.riskCode===i.riskCode));let t=!1;l.forEach((a=>{if($.indexOf(a.valueKey)>=0){const l=i.productRiskInsureLimitVO[a.configKey];if(l&&e){const i=l.find((l=>l.code===e[a.valueKey]));if(i&&2===i.useFlag){const i=l.find((e=>1===e.defaultFlag));e[a.valueKey]=i.code,t=!0}}}})),t&&a.push({...e,...n,riskCode:i.riskCode})}})),a.length>0&&(null==(o=null==(n=null==(s=O.defaultValue)?void 0:s.insuredList)?void 0:n[0])?void 0:o.productList))return a.forEach((e=>{var a,l,i;O.defaultValue.insuredList[0].productList=null==(i=null==(l=null==(a=O.defaultValue)?void 0:a.insuredList)?void 0:l[0])?void 0:i.productList.map((a=>(a.riskList=null==a?void 0:a.riskList.map((a=>(a.riskCode===e.riskCode&&(a=e),a))),a)))})),!1}return!0},B=async(e,a=!0)=>{O.trialMsg="试算中...",O.trialResultPremium=0,O.loading=!0,c("trialStart");let l=!1;if(a){const{code:a}=await ne(e);l="10000"===a}!l&&a||(O.isQuerying=!0,I.hideBenefit||oe(e).then((e=>{e.data&&e.code===H&&(U.value=e.data)})).finally((()=>{O.loading=!1})),re(e).then((a=>{var l,i;if(a.data&&a.code===H){(null==(l=null==a?void 0:a.data)?void 0:l.errorInfo)&&W(`${null==(i=null==a?void 0:a.data)?void 0:i.errorInfo}`),O.trialMsg="",O.trialResultPremium=a.data.initialPremium,O.trialResult=a.data;const t={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((e=>{t[e.riskCode]={initialAmount:e.initialAmount,initialPremium:e.initialPremium}})),Y.value=t,c("trialEnd",a.data,e)}})).finally((()=>{O.loading=!1,O.isQuerying=!1})))},Z=e.exports.debounce((async()=>{console.log(">>>>>调用试算<<<<<",O.ifPersonalInfoSuccess,P.value.canTrail());const{productCode:e,productName:a}=I.productInfo||{};if(O.ifPersonalInfoSuccess||P.value.canTrail()){O.submitData.productCode=e,O.submitData.productName=a,O.submitData.tenantId=I.productInfo.tenantId,O.riskList=O.riskList.map((e=>(e=>{var a,i,t,s;const n=null==(a=S.value.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(n&&1!==n.mainRiskFlag){const a=null==(t=null==(i=S.value)?void 0:i.productRiskRelationVOList)?void 0:t.filter((e=>{var a;if(e.collocationRiskId===n.riskId&&3!==e.collocationType){const l=null==(a=S.value.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(l&&l.riskType===se.MAIN_RISK)return!0}return!1})),o=a.length>0?a[0]:null;if(o){const a=null==(s=O.riskList)?void 0:s.find((e=>e.riskId===o.riskId));l.forEach((l=>{l.ruleKey&&n.productRiskInsureLimitVO&&a&&(1===n.productRiskInsureLimitVO[l.ruleKey]&&(e[l.valueKey]=a[l.valueKey]),3===n.productRiskInsureLimitVO[l.ruleKey]&&(1!==n.exemptFlag?e[l.valueKey]=Oa(n,a[l.valueKey],O.submitData):e[l.valueKey]=Oa(n,a[l.ruleValueKey],O.submitData)))}))}}return e})(e))),O.submitData.insuredList&&O.submitData.insuredList.forEach((l=>{l.productList=[{productCode:e,productName:a,riskList:O.riskList}]}));const i=A();console.log(">>>数据构建<<<",i),await B(i)}}),300),ee=async e=>{var a;const{insuredList:l,isFirstInsuredChange:i}=e;if(F(e),O.ifPersonalInfoSuccess=!0,i){console.log("处理第一被保人修改的dy变化"),O.isQuerying=!0;const e=await ue({calcProductFactorList:[{planCode:S.value.planCode,productCode:I.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=S.value.insureProductRiskVOList)?void 0:a[0]}]}],...l[0]});if(O.isQuerying=!1,!j(e))return}console.log("投被保人的信息回传 ",e),Z()},ae=async(a,l)=>{var i,t,s,n;if(l){const o=e.exports.cloneDeep(a);delete o.insurancePeriodValueList,delete o.paymentFrequencyList,delete o.paymentPeriodValueList;if($.indexOf(l.key)>=0&&`${l.oldValue}`!=`${l.newValue}`){const e={};switch(l.key){case"annuityDrawDate":e.changeType=3;break;case"coveragePeriod":e.changeType=2;break;case"chargePeriod":e.changeType=1}const r=null==(t=null==(i=O.submitData)?void 0:i.insuredList)?void 0:t[0],u=null==(n=null==(s=S.value)?void 0:s.insureProductRiskVOList)?void 0:n.find((e=>e.riskCode===a.riskCode));if(!O.isAutoChange){O.isQuerying=!0;const l=await ue({calcProductFactorList:[{planCode:S.value.planCode,productCode:I.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:u,insureRiskEditReqVO:{riskId:a.riskId,riskCode:a.riskCode,...o,...e}}]}],...r});O.isQuerying=!1;const i=j(l);return i||(O.isAutoChange=!0),i}O.isAutoChange=!1}}return!0},le=async(e,a)=>{O.mainRiskVO=e;await ae(e,a)&&(O.riskList.length>0&&(O.riskList[0]=e),console.log("标准险种的信息回传",e),Z())},ie=async(e,a)=>{if(O.riskList=[O.mainRiskVO,...e],console.log("附加险列表数据回传",e),a){const l=e.find((e=>e.riskCode===a.riskCode));if(!(await ae(l,a)))return}Z()},te=e=>{var a,l,i,t;O.userData=e,O.defaultValue=e;const s=(null==(a=e.insuredList)?void 0:a[0].productList.findIndex((e=>e.planCode===S.value.planCode)))||0;O.planIndex=-1===s?0:s,O.riskList=(null==(t=null==(i=null==(l=null==e?void 0:e.insuredList)?void 0:l[0].productList)?void 0:i[O.planIndex])?void 0:t.riskList)||[],B(e,!0)},ke=async e=>{var a;if(I.defaultData){const e=I.defaultData.find((e=>e.productCode===I.productInfo.productCode))||I.defaultData[0];te(e),F(null==(a=I.defaultData)?void 0:a[0])}else _.value.push(S.value.planCode),await(async()=>{var e;const a=await de({calcProductFactorList:[{planCode:S.value.planCode,productCode:I.productInfo.productCode}]});if(a.data){const l=a.data.find((e=>e.productCode===I.productInfo.productCode))||a.data[0];te(l),F(null==(e=a.data)?void 0:e[0])}})()},Ie=async e=>{var a,l;const i=I.productInfo.planList.findIndex((a=>a.planCode===e)),t=(null==(l=null==(a=O.defaultValue)?void 0:a.insuredList)?void 0:l[0].productList.findIndex((a=>a.planCode===e)))||0,s=i>=0?I.productInfo.planList[i]:null;s&&(O.currentPlanCode=e,S.value=s,O.planIndex=t>=0?t:0,O.defaultValue.insuredList[0].productList[O.planIndex].riskList=O.riskList,_.value.findIndex((a=>a===e))<0&&_.value.push(e))};s((()=>{var e,a;O.select={},O.list=[],O.userData={},O.riskIsInsure={},O.submitData={},O.riskList=[{}],O.mainRiskVO={},O.ifPersonalInfoSuccess=!1,O.trialMsg="",O.trialResultPremium=0,O.riskIsInsure={},null==(a=null==(e=S.value)?void 0:e.insureProductRiskVOList)||a.forEach((e=>{var a;const l=null==(a=S.value.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId));l&&(O.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:l})}))})),n((()=>{S.value=I.dataSource,O.loading=!0,O.show=!0,O.isAniShow=!0,O.isSkipFirstTrial=!0,O.hadSkipFirstTrial=!1,K((()=>{ke()}))}));return d({getTrialSuccessFlag:()=>O.trialResultPremium>0,validate:()=>P.value.validate(!1),validateTrialFields:()=>P.value.validateTrialFields(),validateHolder:e=>{var a;return null==(a=P.value)?void 0:a.validateHolder(e)},getUserData:()=>({...O.userData}),onShare:e=>{var a;O.trialResultPremium&&(null==(a=y.value)||a.validate().then((()=>{Object.assign(T.value,I.defaultOrder,{extInfo:{...T.value.extInfo,buttonCode:fe.TRIAL_PREMIUM,pageCode:ve.TRIAL_PREMIUM,templateId:R}});const a=pe(I.productInfo,Y.value,T.value);me(a,((a,l)=>{l===z.JUMP_PAGE&&(w.value.link=`${window.location.href}&isShare=1&orderNo=${a.orderNo}`,e())})),console.log("---- validate success ----")})))},onNext:()=>{var e;const{productCode:a,productName:l}=I.productInfo;C?Q(ve.TRIAL_PREMIUM,g.query):O.trialResultPremium&&(null==(e=y.value)||e.validate().then((()=>{Object.assign(T.value,I.defaultOrder,{extInfo:{templateId:R,...T.value.extInfo,...I.defaultOrder.extInfo||{},buttonCode:fe.TRIAL_PREMIUM,pageCode:ve.TRIAL_PREMIUM}}),console.log("dealMixData()",A());const e=pe({...A(),productCode:a,productName:l},O.trialResult,T.value);me(e,((e,a)=>{a===z.JUMP_PAGE&&G(e.nextPageCode,{...g.query,orderNo:e.orderNo})})),console.log("---- validate success ----")})),O.loading=!1,O.show=!0,O.isAniShow=!0)},dealMixData:A}),o((()=>O.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),o((()=>O.userData),(e=>{if(e){const{holder:a,insuredList:l}=e||{},i={holder:a,insuredList:l};Object.assign(O.submitData,i),c("update:userData",i)}}),{deep:!0}),o((()=>I.dataSource),(e=>{S.value=e}),{deep:!0,immediate:!0}),(e,l)=>{var t,s,n,o,d,c,I,L;return r(),u("div",wa,[k(e.$slots,"trialHead",{},void 0,!0),b("div",Sa,[v(Pa,{labels:p(Ta)((null==(t=S.value)?void 0:t.insureProductRiskVOList)||[],S.value.productRiskRelationVOList)},null,8,["labels"]),b("div",Da,[!i.hideBenefit&&(null==(s=U.value)?void 0:s.benefitRiskResultVOList)?(r(),h(ga,{key:0,class:"benefit-wrap","data-source":U.value,"product-info":S.value,"show-type-list":U.value.showTypList},null,8,["data-source","product-info","show-type-list"])):m("",!0),p(E)?(r(),h(ge,{key:1,"plan-list":i.productInfo.planList,"default-plan":S.value,onPlanChange:Ie},null,8,["plan-list","default-plan"])):m("",!0),S.value.productFactor?(r(),h(p(a),{ref_key:"personalInfoRef",ref:P,key:S.value.planCode,modelValue:p(O).userData,"onUpdate:modelValue":l[0]||(l[0]=e=>p(O).userData=e),"is-trial":i.isTrial,"product-factor":S.value.productFactor,"multi-insured-config":null==(n=S.value)?void 0:n.multiInsuredConfigVO,onTrailChange:ee},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):m("",!0),(r(),h(J,{ref_key:"insureInfosRef",ref:y,key:S.value.planCode,"origin-data":null==(o=S.value.insureProductRiskVOList)?void 0:o[0],"product-factor":S.value.productFactor,"default-value":p(O).defaultValue?null==(c=null==(d=p(O).defaultValue)?void 0:d.insuredList[0].productList[p(O).planIndex])?void 0:c.riskList[0]:null,"trial-result":p(O).trialResult,onTrialChange:le},null,8,["origin-data","product-factor","default-value","trial-result"])),S.value.insureProductRiskVOList?(r(),h(Le,{key:S.value.planCode,"data-source":S.value,"show-main-risk":!1,"default-value":p(O).defaultValue?null==(L=null==(I=p(O).defaultValue)?void 0:I.insuredList[0].productList[p(O).planIndex])?void 0:L.riskList:[],onTrialChange:ie},{holderForm:f((()=>{var e;return[i.isTrial&&i.dataSource.productFactor?(r(),h(p(a),{key:0,ref_key:"personalInfoRef",ref:P,modelValue:p(O).userData,"onUpdate:modelValue":l[1]||(l[1]=e=>p(O).userData=e),"is-trial":i.isTrial,"is-only-holder":!0,"product-factor":i.dataSource.productFactor,"multi-insured-config":null==(e=i.dataSource)?void 0:e.multiInsuredConfigVO,onTrailChange:ee},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):m("",!0)]})),_:1},8,["data-source","default-value"])):m("",!0),_a])]),k(e.$slots,"trialBtn",{trialData:p(O).submitData,riskPremium:p(O).trialResult,loading:p(O).isQuerying,personalInfoRef:P.value},void 0,!0)])}}}),[["__scopeId","data-v-1023fdf5"]]);export{Ea as T};
