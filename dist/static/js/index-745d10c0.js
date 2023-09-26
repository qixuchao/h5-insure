import{d as e,j as a,r as i,bc as l,O as t,z as s,o,c as n,b as r,u,F as d,f as c,aN as p,aE as v,q as m,w as f,g as k,_ as I,ba as y,b8 as g,m as b,a as h,b9 as L,bX as V,k as R,bY as C,bZ as P,n as O,e as x,b_ as D,aJ as T,aC as w,aD as S,V as _,a8 as F,W as E,aH as j,p as N,ae as M,ag as A,b$ as Y,c0 as U,i as $,h as B,aF as X,aG as q,T as K,E as z,aK as H,aL as Q,a9 as W,aM as G}from"./index-d58dc756.js";import{c as J}from"./cloneDeep-44de4472.js";import{B as Z,P as ee,R as ae,a as ie}from"./index-d0d6cef6.js";import{o as le}from"./index-de590a0b.js";import{_ as te}from"./index-c69edd68.js";import{S as se,_ as oe}from"./box-title-3fe58956.js";import{_ as ne}from"./index-1e257b51.js";import{_ as re}from"./empty-ae586b6c.js";import{R as ue}from"./trial-686d78dd.js";import{_ as de,P as ce,B as pe}from"./constants-a2e360ce.js";import{u as ve,c as me,h as fe,d as ke,q as Ie}from"./trial-4ac0ac03.js";import{P as ye}from"./config-98e8d477.js";import{i as ge}from"./isNaN-c37cdab1.js";import{u as be}from"./useOrder-f5fe61cb.js";import{t as he}from"./utils-7aaf5faf.js";import{n as Le}from"./nextStep-d13d4ba2.js";import"./index-b9ad6e6b.js";import"./infoCollection-6d3e4b86.js";import"./index-c6a87661.js";import"./PolicyInfo-4caa9355.js";import"./search-0a8e6251.js";import"./product-7bbf9c44.js";import"./createProposal-b8be4480.js";import"./core-e395518b.js";import"./constants-b6eb977d.js";const Ve=e({name:"InsureInfos"}),Re=e({...Ve,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["trialChange"],setup(e,{expose:v,emit:m}){const f=e,k=a(null),I=a({}),y=a({}),g=i({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:f.defaultValue,changeData:null,sValues:I.value});l("premium"),y.value=l("enumList")||{},t((()=>{}));const b=e=>{f.originData.mainRiskFlag,I.value.riskCategory=f.originData.riskCategory,I.value.riskCode=f.originData.riskCode,I.value.riskId=f.originData.riskId,I.value.riskType=f.originData.riskType,I.value.riskName=f.originData.riskName,I.value.riskType=f.originData.riskType,I.value.mainRiskCode=f.originData.mainRiskCode,I.value.mainRiskId=f.originData.mainRiskId,e?m("trialChange",I.value,e):m("trialChange",I.value)},h=(e,a)=>{a?I.value[a.key]=a.newValue:le(e).forEach((a=>{I.value[a]=e[a]})),b(a)},L=e=>{var a,i;1==+(null==(i=null==(a=f.originData)?void 0:a.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO.saleMethod)?g.basicsAmount=null==e?void 0:e.initialAmount:g.basicsAmount=null==e?void 0:e.initialPremium,le(e).forEach((a=>{I.value[a]=e[a]})),b()},V=e=>{I.value.liabilityList=e,b()};return s((()=>f.defaultValue),(e=>{e&&(console.log("--default change ",e),g.defaultValues=J(e),I.value={...e})}),{deep:!0,immediate:!0}),s((()=>I.value),(e=>{g.sValues=e}),{deep:!0,immediate:!0}),v({validate:async()=>{var e;await(null==(e=k.value)?void 0:e.validate())}}),(e,a)=>{var i,l,t,s,v,m;const f=p;return 1===(null==(i=e.originData)?void 0:i.factorDisPlayFlag)?(o(),n(d,{key:0},[r(f,{title:"保障计划",class:"insurePlan","show-divider":!1}),r(u(Z),{"v-model":u(g).sValues,"origin-data":null==(t=null==(l=e.originData)?void 0:l.productRiskInsureLimitVO)?void 0:t.amountPremiumConfigVO,"defalut-value":u(g).defaultValues,"trial-result":e.trialResult,onTrialChange:L},null,8,["v-model","origin-data","defalut-value","trial-result"]),r(u(ee),{"v-model":u(g).sValues,"use-data":u(g).sValues,"origin-data":e.originData.productRiskInsureLimitVO,"risk-info":e.originData,"default-value":u(g).defaultValues,onTrialChange:h},null,8,["v-model","use-data","origin-data","risk-info","default-value"]),r(u(ae),{"data-source-folmulate":u(I),"data-source":e.originData,params:{amountUnit:null==(v=null==(s=e.originData)?void 0:s.productRiskInsureLimitVO)?void 0:v.amountPremiumConfigVO.displayUnit,basicsAmount:u(g).basicsAmount,basicsPremium:u(g).basicsPremium,riskId:null==(m=e.originData)?void 0:m.riskId},"default-value":u(g).defaultValues,onTrialChange:V},null,8,["data-source-folmulate","data-source","params","default-value"])],64)):c("",!0)}}});const Ce={key:0},Pe={key:0,class:"risk2-field"},Oe=e({name:"ProductRiskList"});var xe=I(e({...Oe,props:{dataSource:{type:Array,default:()=>[]},productInfo:{type:Object,default:()=>({productCode:"",productName:""})},showMainRisk:{type:Boolean,default:()=>!0},defaultValue:{type:Object,default:()=>{}}},emits:["trialChange"],setup(e,{emit:a}){const l=e,p=i({loading:!1,show:!0,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},disabledRiskInfo:[],risksDefaultValue:{}}),I=e=>{const a=[];return e.riskLiabilityInfoVOList.map((e=>(1!=+e.showFlag&&a.push({...e}),[]))),a},b=(e,i,t)=>{var s;p.riskIsInsure[i].data=e;const o=[...p.disabledRiskInfo];null==(s=l.dataSource.insureProductRiskVOList)||s.forEach((e=>{if(1!==e.mainRiskFlag){const a=p.riskIsInsure[e.riskId];a.data&&Object.keys(a.data).length>0&&"1"===a.selected&&o.push(a.data)}})),a("trialChange",o,t)},h=(e,a)=>{var i;null==(i=l.dataSource.productRiskRelationVOList)||i.forEach((i=>{1!==i.collocationType&&(a.riskId===i.riskId?(p.riskIsInsure[a.riskId]&&p.riskIsInsure[a.riskId].selected,2===i.collocationType&&p.riskIsInsure[i.collocationRiskId]&&(p.riskIsInsure[i.collocationRiskId].selected=e),3===i.collocationType&&p.riskIsInsure[i.collocationRiskId]&&"1"===e&&(p.riskIsInsure[i.collocationRiskId].selected="1"===e?"2":"1")):a.riskId===i.collocationRiskId&&(3===i.collocationType&&"1"===e&&p.riskIsInsure[i.riskId]&&(p.riskIsInsure[i.riskId].selected="1"===e?"2":"1"),2===i.collocationType&&p.riskIsInsure[i.riskId]&&(p.riskIsInsure[i.riskId].selected=e)))})),"2"===e?b({},a.riskId):(e=>{var a,i,l,t,s,o,n,r,u,d,c,p;if(1!==(null==e?void 0:e.factorDisPlayFlag)){const v=null==(a=null==e?void 0:e.productRiskInsureLimitVO)?void 0:a.amountPremiumConfigVO,m={riskCategory:e.riskCategory,riskCode:e.riskCode,riskName:e.riskName,riskId:e.riskId,riskType:e.riskType,mainRiskId:e.mainRiskId,mainRiskCode:e.mainRiskCode,liabilityList:I(e)};m.chargePeriod=(null==(l=null==(i=null==e?void 0:e.productRiskInsureLimitVO)?void 0:i.paymentPeriodValueList)?void 0:l.length)>0&&(null==(t=null==e?void 0:e.productRiskInsureLimitVO)?void 0:t.paymentPeriodValueList[0].code)||null,m.coveragePeriod=(null==(o=null==(s=null==e?void 0:e.productRiskInsureLimitVO)?void 0:s.insurancePeriodValueList)?void 0:o.length)>0&&(null==(n=null==e?void 0:e.productRiskInsureLimitVO)?void 0:n.insurancePeriodValueList[0].code)||null,m.paymentFrequency=(null==(u=null==(r=null==e?void 0:e.productRiskInsureLimitVO)?void 0:r.paymentFrequencyList)?void 0:u.length)>0&&(null==(d=null==e?void 0:e.productRiskInsureLimitVO)?void 0:d.paymentFrequencyList[0].code)||null;let f=0;1===v.displayType?f=(null==v?void 0:v.minStepValue)>0?null==v?void 0:v.minStepValue:0:3===v.displayType&&2===v.requireCopies?f=(null==(c=null==v?void 0:v.displayValues)?void 0:c.length)>0?null==v?void 0:v.displayValues[0].value:0:3===v.displayType&&1===v.requireCopies?(f=(null==(p=null==v?void 0:v.displayValues)?void 0:p.length)>0?null==v?void 0:v.displayValues[0].value:0,m.copy=v.minCopiesValue):2===v.displayType?m.copy=v.minCopiesValue:f=0,1===v.saleMethod?m.initialAmount=f:m.initialPremium=f,b(m,e.riskId)}})(a)};return v((()=>{(()=>{var e,a;p.disabledRiskInfo=[];let i=null;if(null==(e=l.dataSource.insureProductRiskVOList)||e.forEach((e=>{var a;const t=1!==e.mainRiskFlag?null==(a=l.dataSource.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId)):{};1===e.mainRiskFlag&&(i=e),p.riskIsInsure[e.riskId]?(p.riskIsInsure[e.riskId].data=null,p.riskIsInsure[e.riskId].relation=t,p.riskIsInsure[e.riskId].isMust=!1):p.riskIsInsure[e.riskId]={selected:"2",data:null,relation:t,isMust:!1}})),i){const e=null==(a=l.dataSource.productRiskRelationVOList)?void 0:a.filter((e=>e.riskId===i.riskId));if(!e)return;null==e||e.forEach((e=>{var a,i,t,s,o,n,r,u,d,c,v,m,f,k,y;if(2===e.collocationType){p.riskIsInsure[e.collocationRiskId].selected="1",p.riskIsInsure[e.collocationRiskId].isMust=!0;const g=null==(a=l.dataSource.insureProductRiskVOList)?void 0:a.find((a=>e.collocationRiskId===a.riskId));if(g&&1!==g.factorDisPlayFlag&&(null==(i=null==g?void 0:g.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO)){const a=null==(t=g.riskLiabilityInfoVOList)?void 0:t.every((e=>1!==e.showFlag)),i=null==(s=null==g?void 0:g.productRiskInsureLimitVO)?void 0:s.amountPremiumConfigVO;if(a){p.riskIsInsure[e.collocationRiskId].isDisabled=!0;const a={riskCategory:g.riskCategory,riskCode:g.riskCode,riskName:g.riskName,riskId:g.riskId,riskType:g.riskType,mainRiskId:g.mainRiskId,mainRiskCode:g.mainRiskCode,liabilityList:I(g)};a.chargePeriod=(null==(n=null==(o=null==g?void 0:g.productRiskInsureLimitVO)?void 0:o.paymentPeriodValueList)?void 0:n.length)>0&&(null==(r=null==g?void 0:g.productRiskInsureLimitVO)?void 0:r.paymentPeriodValueList[0].code)||null,a.coveragePeriod=(null==(d=null==(u=null==g?void 0:g.productRiskInsureLimitVO)?void 0:u.insurancePeriodValueList)?void 0:d.length)>0&&(null==(c=null==g?void 0:g.productRiskInsureLimitVO)?void 0:c.insurancePeriodValueList[0].code)||null,a.paymentFrequency=(null==(m=null==(v=null==g?void 0:g.productRiskInsureLimitVO)?void 0:v.paymentFrequencyList)?void 0:m.length)>0&&(null==(f=null==g?void 0:g.productRiskInsureLimitVO)?void 0:f.paymentFrequencyList[0].code)||null;let l=0;1===i.displayType?l=(null==i?void 0:i.minStepValue)>0?null==i?void 0:i.minStepValue:0:3===i.displayType&&2===i.requireCopies?l=(null==(k=null==i?void 0:i.displayValues)?void 0:k.length)>0?null==i?void 0:i.displayValues[0].value:0:3===i.displayType&&1===i.requireCopies?(l=(null==(y=null==i?void 0:i.displayValues)?void 0:y.length)>0?null==i?void 0:i.displayValues[0].value:0,a.copy=i.minCopiesValue):2===i.displayType&&(a.copy=i.minCopiesValue),1===i.saleMethod?a.initialAmount=l:a.initialPremium=l,p.disabledRiskInfo.push(a),b(a,g.riskId)}}}3===e.collocationType&&(p.riskIsInsure[e.collocationRiskId].selected="2",p.riskIsInsure[e.collocationRiskId].isMust=!0)}))}})()})),t((()=>{p.loading=!0})),s((()=>p.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),s((()=>l.defaultValue),(e=>{(null==e?void 0:e.length)>0&&e.forEach((e=>{p.risksDefaultValue[e.riskCode]=e,p.riskIsInsure[e.riskId]?(p.riskIsInsure[e.riskId].selected="1",b(e,e.riskId)):p.riskIsInsure[e.riskId]={selected:"1",isMust:!1}}))}),{deep:!0,immediate:!0}),(a,i)=>{const l=y,t=g;return o(!0),n(d,null,m(e.dataSource.insureProductRiskVOList,(i=>{var s,v;return o(),n(d,{key:i.riskCode},[(!e.showMainRisk&&1!==i.mainRiskFlag||e.showMainRisk)&&(null==(v=null==(s=u(p).riskIsInsure)?void 0:s[i.riskId])?void 0:v.relation)?(o(),n("div",Ce,[r(t,{modelValue:u(p).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>u(p).riskIsInsure[i.riskId].selected=e,label:i.riskName,name:"selected","label-width":"50%",border:!1,class:"risk-select-field risk-name"},{input:f((()=>[r(l,{modelValue:u(p).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>u(p).riskIsInsure[i.riskId].selected=e,"active-value":"1","inactive-value":"2",size:"0.68rem",disabled:u(p).riskIsInsure[i.riskId].isMust,style:{"margin-right":"8px"},onChange:e=>h(e,i)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"]),"1"===u(p).riskIsInsure[i.riskId].selected?(o(),n("div",Pe,[r(Re,{modelValue:u(p).riskIsInsure[i.riskId].data,"onUpdate:modelValue":e=>u(p).riskIsInsure[i.riskId].data=e,"origin-data":i,"product-factor":e.dataSource.productFactor,"default-value":u(p).risksDefaultValue[i.riskCode],onTrialChange:(e,a)=>b(e,i.riskId,a)},null,8,["modelValue","onUpdate:modelValue","origin-data","product-factor","default-value","onTrialChange"])])):c("",!0),1===i.exemptFlag&&"1"===u(p).riskIsInsure[i.riskId].selected?k(a.$slots,"holderForm",{key:1},void 0,!0):c("",!0)])):c("",!0)],64)})),128)}}}),[["__scopeId","data-v-58a61f59"]]);const De={class:"pro-radio-wrap"},Te=e({name:"PlanSelect"}),we=e({...Te,props:{planList:{default:()=>[]},defaultPlan:{default:()=>{}}},emits:["planChange"],setup(e,{emit:i}){const l=e,n=a("");let u=!1;return t((()=>{l.defaultPlan&&(u=!0,n.value=l.defaultPlan.planCode)})),s((()=>n),(e=>{u||i("planChange",n.value),u&&(u=!1)}),{deep:!0,immediate:!0}),(e,a)=>{const i=L,t=g;return e.planList.length>0?(o(),b(t,{key:0,modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),label:"保障计划",name:"planCode",class:"risk-select-field"},{input:f((()=>[h("div",De,[r(i,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),options:l.planList.map((e=>({label:e.planName,value:e.planCode})))},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):c("",!0)}}});var Se=I(e({__name:"ScrollWrap",props:{moduleValue:{type:Number,default:0},scrollX:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!1}},emits:["update:modelValue","update:needFixed"],setup(e,{emit:r}){const d=e,c=i({offsetX:0,offsetY:0,startX:0,startY:0}),p=a(null),v=a(null),{width:m,height:f}=V(p),{width:I,height:y}=V(v),g=l("PRO_TABLE_KEY"),b=R((()=>{const e=m.value>I.value+4;return r("update:needFixed",e),e})),h=R((()=>f.value>y.value+4)),{direction:L}=C(p,{passive:!1,onSwipeStart(e){const{clientX:a,clientY:i}=e.touches[0];c.startX=a,c.startY=i},onSwipe(e){const{clientX:a,clientY:i}=e.touches[0];if(["LEFT","RIGHT"].includes(L.value)){const e=c.offsetX-(c.startX-a);e>-m.value+I.value&&e<0&&(c.offsetX=e,g.state.offsetX=c.offsetX),c.startX=a}if(["UP","DOWN"].includes(L.value)){const e=c.offsetY-(c.startY-i);e>-f.value+y.value&&e<0&&(c.offsetY=e,g.state.offsetY=c.offsetY),c.startY=i}},onSwipeEnd(e){}}),O=R((()=>d.scrollX||d.scrollY?`transform: translate(${d.scrollX?`${c.offsetX}px`:0},${d.scrollY?`${c.offsetY}px`:0} );`:""));return s((()=>null==g?void 0:g.state),(()=>{const{offsetX:e,offsetY:a}=(null==g?void 0:g.state)||{};b.value&&(c.offsetX=e),h.value&&(c.offsetY=a)}),{deep:!0,immediate:!0}),t((()=>{var e;v.value=null==(e=p.value)?void 0:e.parentElement})),(e,a)=>(o(),n("div",{ref_key:"swiperEl",ref:p,class:"scroll-wrap",style:P(u(O))},[k(e.$slots,"default",{},void 0,!0)],4))}}),[["__scopeId","data-v-0ba94815"]]);const _e={class:"pro-com-table-wrap"},Fe={ref:"tableHeadRef",class:"com-table"},Ee={class:"com-table-head"},je={class:"com-table-row"},Ne={ref:"tableBodyRef",class:"com-table"},Me={class:"com-table-head"},Ae={class:"com-table-row"},Ye={class:"com-table-body"};var Ue=I(e({__name:"Table",props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},translateY:{type:Number,default:0}},emits:["update:modelValue","update:needFixed"],setup(e,{emit:a}){const i=e=>{a("update:needFixed",e)};return(a,l)=>(o(),n("div",_e,[r(Se,{ref:"tableScroll",class:"pro-table-head","scroll-x":"","onUpdate:needFixed":i},{default:f((()=>[h("table",Fe,[h("thead",Ee,[h("tr",je,[(o(!0),n(d,null,m(e.columns,((e,a)=>(o(),n("th",{key:a,class:O(["table-cell",`table-cell-${a}`]),style:P({minWidth:`${e.width||80}px`})},x(e.title),7)))),128))])])],512)])),_:1},512),r(Se,{ref:"tableScroll",class:"pro-table-body","scroll-y":"","scroll-x":""},{default:f((()=>[h("table",Ne,[h("thead",Me,[h("tr",Ae,[(o(!0),n(d,null,m(e.columns,((e,a)=>(o(),n("th",{key:a,class:O(["table-cell",`table-cell-${a}`]),style:P({minWidth:`${e.width||80}px`})},x(e.title),7)))),128))])]),h("tbody",Ye,[(o(!0),n(d,null,m(e.data,((a,i)=>(o(),n("tr",{key:i,class:"com-table-row"},[(o(!0),n(d,null,m(e.columns,((e,l)=>(o(),n("td",{key:l,class:O(["table-cell"])},[h("span",null,x(e.render?e.render(a,i):a[e.key]),1)])))),128))])))),128))])],512)])),_:1},512)]))}}),[["__scopeId","data-v-f37eb4be"]]);const $e=e=>(w("data-v-0cf962f9"),e=e(),S(),e),Be={key:0,class:"pro-table-wrap"},Xe={key:1,class:"no-data-wrap"},qe=[$e((()=>h("img",{src:re,alt:"暂无数据"},null,-1))),$e((()=>h("span",null,"暂无数据～",-1)))];var Ke=I(e({__name:"ProTable",props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},setup(e){const l=e;a(null),a(null);const t=i({translateY:0,translateX:0,offsetX:0,offsetY:0,needFixed:!1});D("PRO_TABLE_KEY",{state:t});const s=R((()=>T(l.columns)?l.columns.filter((e=>e.fixed)):[])),d=e=>{t.needFixed=e};return(a,i)=>e.data&&e.data.length?(o(),n("div",Be,[r(Ue,{"translate-y":u(t).translateY,"onUpdate:translateY":i[0]||(i[0]=e=>u(t).translateY=e),columns:e.columns,data:e.data,"onUpdate:needFixed":d},null,8,["translate-y","columns","data"]),u(t).needFixed?(o(),b(Ue,{key:0,"translate-y":u(t).translateY,"onUpdate:translateY":i[1]||(i[1]=e=>u(t).translateY=e),class:"pro-table-fixed",style:{width:"160px"},columns:s.value,data:e.data},null,8,["translate-y","columns","data"])):c("",!0)])):(o(),n("div",Xe,qe))}}),[["__scopeId","data-v-0cf962f9"]]);const ze={class:"benefit-table"},He=e({__name:"BenefitTable",props:{dataSource:{}},setup(e){const a=e,i=R((()=>T(a.dataSource.headers)?a.dataSource.headers.map(((e,a)=>({title:e,key:`header_${a}`,fixed:a<2}))):[])),l=R((()=>T(a.dataSource.dataList)?a.dataSource.dataList.map((e=>{const a={};return e.forEach(((e,i)=>{a[`header_${i}`]=e})),a})):[]));return(e,a)=>(o(),n("div",ze,[r(Ke,{columns:u(i),data:u(l),"is-clone":!0},null,8,["columns","data"])]))}});const Qe=e=>(w("data-v-5e4dfbe9"),e=e(),S(),e),We={key:0,class:"benefit-container"},Ge={key:0,class:"benefit"},Je=Qe((()=>h("div",{class:"line"},null,-1))),Ze={class:"box-title box-title-chart"},ea=Qe((()=>h("img",{class:"tl",src:oe,alt:""},null,-1))),aa=Qe((()=>h("img",{class:"transform-z180 tr",src:oe,alt:""},null,-1))),ia={key:0},la={class:"box"},ta={class:"box-title"},sa=Qe((()=>h("img",{class:"tl",src:oe,alt:""},null,-1))),oa=Qe((()=>h("img",{class:"transform-z180 tr",src:oe,alt:""},null,-1))),na={class:"box-price"},ra={class:"text1"},ua={class:"text2"},da={key:1},ca={key:2,style:{width:"100%, minWidth: 338px"}},pa={class:"slider"},va={style:{flex:"1",margin:"0px 5px"}},ma={class:"custom-button"},fa=Qe((()=>h("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),ka={class:"btn-two"},Ia={key:1,class:"benefit-container"},ya={key:0},ga={class:"benefit"},ba=Qe((()=>h("div",{class:"line"},null,-1))),ha=Qe((()=>h("div",null,[h("div",{class:"box"},[h("p",{class:"box-title"},[h("img",{class:"tl",src:oe,alt:""}),F(" 保单年度"),h("span",null,"-"),F("年度，被保人"),h("span",null,"-"),F("岁时 "),h("img",{class:"transform-z180 tr",src:oe,alt:""})]),h("div",{class:"box-price"})])],-1))),La={class:"slider"},Va={class:"opt lf"},Ra={style:{flex:"1",margin:"0px 5px"}},Ca=Qe((()=>h("div",{class:"custom-button"},"0 岁",-1))),Pa={class:"opt rg"},Oa=Qe((()=>h("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),xa={class:"btn-two"},Da={key:1,class:"empty-box"},Ta=e({name:"Benefit"});var wa=I(e({...Ta,props:{dataSource:{default:()=>({showTypeList:["1"]})},productInfo:{default:()=>null}},setup(e){var i;const l=e,t="1",p="2",v="3",k=a(0),I=a(0),y=a(0),g=a(),L=a(0),V=a(null==(i=l.dataSource.showTypeList)?void 0:i[0]),R=a(),C=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[k.value];I.value=a.ageBegin+1,L.value=a.ageBegin+1,y.value=a.ageEnd},P=()=>{var e,a,i,t,s,o;const n=null==(a=null==(e=l.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:a[k.value];R.value=null==(s=null==(t=null==(i=l.dataSource)?void 0:i.benefitRiskResultVOList)?void 0:t[k.value].benefitRiskTableResultVOList)?void 0:s[0];const{a:r,year:u}=((e,a)=>{const i=[],l=[];for(let t=e,s=0;t<=a;t++,s++)i.push(t.toString()),l.push(s+1);return{a:i,year:l}})(I.value,y.value),d={index:r.indexOf(L.value.toString()),age:r,year:u,result:null==(o=null==n?void 0:n.benefitRiskItemResultVOList)?void 0:o[0]};g.value=d},O=()=>{L.value>y.value-1||(L.value+=1,P())},D=()=>{L.value>I.value&&(L.value-=1,P())},T=e=>{k.value=e.name,C(l.dataSource),P()};return s((()=>l.dataSource),(e=>{var a;e&&(C(e),P(),V.value=null==(a=e.showTypeList)?void 0:a[0])}),{deep:!0,immediate:!0}),s(L,(()=>{P()})),(e,a)=>{var i;const s=M,C=se,P=A,w=Y,S=U,$=te;return(null==(i=e.dataSource)?void 0:i.benefitRiskResultVOList)?(o(),n("div",We,[r(S,{active:u(k),onClickTab:T},{default:f((()=>{var e;return[(o(!0),n(d,null,m(null==(e=l.dataSource)?void 0:e.benefitRiskResultVOList,((e,i)=>(o(),b(w,{key:i,name:i,title:e.riskName},{default:f((()=>{var e,T,w,S,M,A,Y,U,$,B,X,q,K,z,H,Q;return[i==u(k)?(o(),n("div",Ge,[Je,_(h("p",Ze,[ea,F(" 保单年度"),h("span",null,x(null==(w=null==(e=u(g))?void 0:e.year)?void 0:w[null==(T=u(g))?void 0:T.index]),1),F("年度，被保人"),h("span",null,x(null==(A=null==(S=u(g))?void 0:S.age)?void 0:A[null==(M=u(g))?void 0:M.index]),1),F("岁时 "),aa],512),[[E,u(V)===p]]),u(V)===t?(o(),n("div",ia,[h("div",la,[h("p",ta,[sa,F(" 保单年度"),h("span",null,x(null==($=null==(Y=u(g))?void 0:Y.year)?void 0:$[null==(U=u(g))?void 0:U.index]),1),F("年度，被保人"),h("span",null,x(null==(q=null==(B=u(g))?void 0:B.age)?void 0:q[null==(X=u(g))?void 0:X.index]),1),F("岁时 "),oa]),h("div",na,[(o(!0),n(d,null,m(null==(z=null==(K=u(g))?void 0:K.result)?void 0:z.headers,((e,a)=>{var i,l,t,s,r,d,c,p,v,m;return o(),n("div",{key:a,style:{width:"33%"}},[h("p",ra,x(("0"==(null==(r=null==(s=null==(l=null==(i=u(g))?void 0:i.result)?void 0:l.dataList)?void 0:s[null==(t=u(g))?void 0:t.index])?void 0:r[a])?"0":u(j)(Number(null==(m=null==(v=null==(c=null==(d=u(g))?void 0:d.result)?void 0:c.dataList)?void 0:v[null==(p=u(g))?void 0:p.index])?void 0:m[a])))||"0"),1),h("p",ua,x(e)+"(元）",1)])})),128))])])])):c("",!0),u(V)===v?(o(),n("div",da,[r(He,{"data-source":u(R)},null,8,["data-source"])])):c("",!0),u(V)==p?(o(),n("div",ca,[r(ne,{min:u(I),max:u(y),current:u(L),data:null==(Q=null==(H=u(g))?void 0:H.result)?void 0:Q.benefitRiskItemList},null,8,["min","max","current","data"])])):c("",!0),u(V)!=v?(o(),n(d,{key:3},[h("div",pa,[h("div",{class:"opt lf",onClick:D},[r(s,{name:"minus"})]),h("div",va,[u(I)?(o(),b(C,{key:0,modelValue:u(L),"onUpdate:modelValue":a[0]||(a[0]=e=>N(L)?L.value=e:null),min:u(I),max:u(y),"bar-height":"8px"},{button:f((()=>[h("div",ma,x(u(L))+" 岁",1)])),_:1},8,["modelValue","min","max"])):c("",!0)]),h("div",{class:"opt rg",onClick:O},[r(s,{name:"plus"})])]),fa],64)):c("",!0),h("div",ka,[l.dataSource.showTypeList.includes(t)?(o(),b(P,{key:0,round:"",plain:u(V)!==t,type:"primary",class:"btn",onClick:a[1]||(a[1]=e=>V.value=t)},{default:f((()=>[F("图表展示")])),_:1},8,["plain"])):c("",!0),l.dataSource.showTypeList.includes(p)?(o(),b(P,{key:1,round:"",plain:u(V)!==p,type:"primary",class:"btn",onClick:a[2]||(a[2]=e=>V.value=p)},{default:f((()=>[F("趋势展示")])),_:1},8,["plain"])):c("",!0),l.dataSource.showTypeList.includes(v)?(o(),b(P,{key:2,round:"",plain:u(V)!==v,type:"primary",class:"btn",onClick:a[3]||(a[3]=e=>V.value=v)},{default:f((()=>[F("表格展示")])),_:1},8,["plain"])):c("",!0)])])):c("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(o(),n("div",Ia,[l.productInfo?(o(),n("div",ya,[r(S,{active:u(k),onClickTab:T},{default:f((()=>[(o(),b(w,{key:1,name:1,title:e.productInfo.insureProductRiskVOList[0].riskName},{default:f((()=>[h("div",ga,[ba,ha,h("div",La,[h("div",Va,[r(s,{name:"minus"})]),h("div",Ra,[r(C,{modelValue:u(L),"onUpdate:modelValue":a[4]||(a[4]=e=>N(L)?L.value=e:null),min:0,max:80,"bar-height":"8px",disabled:""},{button:f((()=>[Ca])),_:1},8,["modelValue"])]),h("div",Pa,[r(s,{name:"plus"})])]),Oa,h("div",xa,[r(P,{round:"",plain:!0,type:"primary",class:"btn",disabled:""},{default:f((()=>[F("图表展示")])),_:1}),r(P,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:f((()=>[F("趋势展示")])),_:1}),r(P,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:f((()=>[F("表格展示")])),_:1})])])])),_:1},8,["title"]))])),_:1},8,["active"])])):(o(),n("div",Da,[r($,{title:"试算结果正在计算中...","empty-class":"empty-select"})]))]))}}}),[["__scopeId","data-v-5e4dfbe9"]]);const Sa=(e,a,i)=>{const l=e,{holder:t}=i,s=i.insuredList[0],o=(a||"").split("_");if(o.length<2)return a;if(ge(Number(o[1])))return a;if(o[1]-=1,1===l.exemptFlag){if("to"===o[0]){let e=0;1===l.exemptType?(null==t?void 0:t.birthday)&&(e=parseInt(""+((new Date).getTime()-new Date(t.birthday).getTime())/31536e6,10)):2===l.exemptType&&(null==s?void 0:s.birthday)&&(e=parseInt(""+(+(new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)),o[1]=+o[1]-e}o[0]="year"}return o.join("_")},_a=(e,a)=>{const i=[],l={};return null==e||e.forEach((e=>{l[e.riskId]=e})),null==a||a.forEach((e=>{var a,t,s,o;const{collocationType:n,collocationRiskId:r,riskId:u}=e;switch(n){case 2:{const e=null==(a=l[u])?void 0:a.riskName,s=null==(t=l[r])?void 0:t.riskName;i.push(`${e} 和 ${s} 必须同时投保`);break}case 3:{const e=null==(s=l[u])?void 0:s.riskName,a=null==(o=l[r])?void 0:o.riskName;i.push(`${e} 和 ${a} 不能同时投保`);break}}})),i};const Fa={class:"com-body"},Ea={class:"trial-body"},ja={class:"container"},Na={class:"container"},Ma={class:"container"},Aa=(e=>(w("data-v-48af32c8"),e=e(),S(),e))((()=>h("div",{class:"empty"},null,-1))),Ya=e({name:"TrialBody"});var Ua=I(e({...Ya,props:{selfKey:{default:""},dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1},defaultOrder:{default:()=>({})}},emits:["trialStart","trialEnd","update:userData","closeCustomerPopoup"],setup(e,{expose:l,emit:d}){const p=e,m=a(null),I=$();B();const{tenantId:y,templateId:g,preview:L}=I.query,V=a(),C=i({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1,isQuerying:!1,currentPlanCode:""}),P=be();a();const O=a(),x=a(p.dataSource),D=a([]),w=e=>{const{holder:a,insuredList:i}=e||{};a&&(C.submitData.holder=a),i&&i.length>0&&i.forEach(((e,a)=>{var i;C.submitData.insuredList&&C.submitData.insuredList.length>a?C.submitData.insuredList[a]=e:((null==(i=C.submitData)?void 0:i.insuredList)||(C.submitData.insuredList=[]),C.submitData.insuredList.push(e))}))},S=R((()=>p.productInfo.planList&&p.productInfo.planList.length>2)),_=(e,a)=>{if(e){const i=["birthday","age","gender","id"];a.includes("occupationCodeList")&&i.push("occupationClass"),Object.keys(e).forEach((l=>{[...a,...i].includes(l)||(e[l]=null)}))}},F=e=>{console.log("我是客户数据",e),d("closeCustomerPopoup",e)},E=(e,a=(e=>!0))=>T(e)?e.filter(a).map((e=>e.code)):[],j=()=>{console.log("--current plan = ",x.value),console.log("---current submit = ",C.submitData);const e=J(C.submitData);if(!S.value)return e;const{1:a,2:i,3:l}=x.value.productFactor||{};if(e.holder&&_(e.holder,E(a)),e.insuredList){const a=["productList","beneficiaryList"],t=E(i,(e=>"2"!==String(e.subModuleType))),s=E(i,(e=>"2"===String(e.subModuleType))),o=T(s),n=E(l),r=T(n);e.insuredList.forEach(((e,i)=>{var l,u,d;_(e,[...i>=1&&o?s:t,...a,...r?["insuredBeneficiaryType"]:[]]),(null==(l=e.beneficiaryList)?void 0:l.length)>0&&(r?e.beneficiaryList.forEach((e=>_(e,n))):e.beneficiaryList.length=0),e.planCode=x.value.planCode;const c=(null==(d=null==(u=e.productList)?void 0:u[0])?void 0:d.riskList)||[],p=x.value.insureProductRiskVOList||[];if(c.length&&p){const a=c.filter((e=>null!==p.find((a=>a.riskCode===e.riskCode))));e.productList[0].riskList=a}}))}return e},N=a(),M=a({}),A=["annuityDrawDate","coveragePeriod","chargePeriod","paymentFrequency"],Y=e=>{var a,i,l,t,s,o;if(null==(i=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:i.productRiskDyInsureFactorVOList){const a=[];if(null==(l=x.value)||l.insureProductRiskVOList.forEach((i=>{var l,t;const s=null==(t=null==(l=null==e?void 0:e.data)?void 0:l[0])?void 0:t.productRiskDyInsureFactorVOList.find((e=>e.riskCode===i.riskCode));if(s){i.productRiskInsureLimitVO={...i.productRiskInsureLimitVO,...s};const e=C.riskList.find((e=>e.riskCode===i.riskCode));let l=!1;ye.forEach((a=>{if(A.indexOf(a.valueKey)>=0){const t=i.productRiskInsureLimitVO[a.configKey];if(t&&e){const i=t.find((i=>i.code===e[a.valueKey]));if(i&&2===i.useFlag){const i=t.find((e=>1===e.defaultFlag));e[a.valueKey]=i.code,l=!0}}}})),l&&a.push({...e,...s,riskCode:i.riskCode})}})),a.length>0&&(null==(o=null==(s=null==(t=C.defaultValue)?void 0:t.insuredList)?void 0:s[0])?void 0:o.productList))return a.forEach((e=>{var a,i,l;C.defaultValue.insuredList[0].productList=null==(l=null==(i=null==(a=C.defaultValue)?void 0:a.insuredList)?void 0:i[0])?void 0:l.productList.map((a=>(a.riskList=null==a?void 0:a.riskList.map((a=>(a.riskCode===e.riskCode&&(a=e),a))),a)))})),!1}return!0},U=X((async(e,a=!0)=>{C.trialMsg="试算中...",C.trialResultPremium=0,C.loading=!0,d("trialStart");let i=!1;if(a){const{code:a}=await ve(e);i="10000"===a}!i&&a||(C.isQuerying=!0,p.hideBenefit||me(e).then((e=>{e.data&&e.code===q&&(M.value=e.data)})).finally((()=>{C.loading=!1})),fe(e).then((a=>{var i,l;if(a.data&&a.code===q){(null==(i=null==a?void 0:a.data)?void 0:i.errorInfo)&&K(`${null==(l=null==a?void 0:a.data)?void 0:l.errorInfo}`),C.trialMsg="",C.trialResultPremium=a.data.initialPremium,C.trialResult=a.data;const t={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((e=>{t[e.riskCode]={initialAmount:e.initialAmount,initialPremium:e.initialPremium}})),N.value=t,d("trialEnd",a.data,e)}})).finally((()=>{C.loading=!1,C.isQuerying=!1})))}),500),Z=X((async()=>{console.log(">>>>>调用试算<<<<<",C.ifPersonalInfoSuccess,V.value.canTrail());const{productCode:e,productName:a}=p.productInfo||{};if(C.ifPersonalInfoSuccess||V.value.canTrail()){C.submitData.productCode=e,C.submitData.productName=a,C.submitData.tenantId=p.productInfo.tenantId,C.riskList=C.riskList.map((e=>(e=>{var a,i,l,t;const s=null==(a=x.value.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(s&&1!==s.mainRiskFlag){const a=null==(l=null==(i=x.value)?void 0:i.productRiskRelationVOList)?void 0:l.filter((e=>{var a;if(e.collocationRiskId===s.riskId&&3!==e.collocationType){const i=null==(a=x.value.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(i&&i.riskType===ue.MAIN_RISK)return!0}return!1})),o=a.length>0?a[0]:null;if(o){const a=null==(t=C.riskList)?void 0:t.find((e=>e.riskId===o.riskId));ye.forEach((i=>{i.ruleKey&&s.productRiskInsureLimitVO&&a&&(1===s.productRiskInsureLimitVO[i.ruleKey]&&(e[i.valueKey]=a[i.valueKey]),3===s.productRiskInsureLimitVO[i.ruleKey]&&(1!==s.exemptFlag?e[i.valueKey]=Sa(s,a[i.valueKey],C.submitData):e[i.valueKey]=Sa(s,a[i.ruleValueKey],C.submitData)))}))}}return e})(e))),C.submitData.insuredList&&C.submitData.insuredList.forEach((i=>{i.productList=[{productCode:e,productName:a,riskList:C.riskList}]}));const i=j();console.log(">>>数据构建<<<",i),await U(i)}}),300),ee=async e=>{console.log("人的信息更改了"),w(e),C.ifPersonalInfoSuccess=!0,console.log("处理第一被保人修改的dy变化"),Z()};R((()=>{var e;return((null==(e=C.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")})),s((()=>{var e;return((null==(e=C.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")}),X((async e=>{var a;if(x.value.insureProductRiskVOList&&e){const e=C.userData.insuredList.filter((e=>e.birthday))||[];if(!e.length)return;const i=await ke({calcProductFactorList:[{planCode:x.value.planCode,productCode:p.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=x.value.insureProductRiskVOList)?void 0:a[0]}]}],insuredVOList:e});Y(i)}})),{});const ae=async(e,a)=>{var i,l;if(a){const t=J(e);delete t.insurancePeriodValueList,delete t.paymentFrequencyList,delete t.paymentPeriodValueList;if(A.indexOf(a.key)>=0&&`${a.oldValue}`!=`${a.newValue}`){const s={};switch(a.key){case"annuityDrawDate":s.changeType=3;break;case"coveragePeriod":s.changeType=2;break;case"chargePeriod":s.changeType=1;break;case"paymentFrequency":s.changeType=4}const o=null==(l=null==(i=x.value)?void 0:i.insureProductRiskVOList)?void 0:l.find((a=>a.riskCode===e.riskCode));if(!C.isAutoChange){C.isQuerying=!0;const a=C.userData.insuredList.filter((e=>e.birthday))||[];if(!a.length)return!1;const i=await ke({calcProductFactorList:[{planCode:x.value.planCode,productCode:p.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:o,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...t,...s}}]}],insuredVOList:a});C.isQuerying=!1;const l=Y(i);return l||(C.isAutoChange=!0),l}C.isAutoChange=!1}}return!0},le=async(e,a)=>{C.mainRiskVO=e;await ae(e,a)&&(C.riskList.length>0&&(C.riskList[0]=e),console.log("标准险种的信息回传",e),Z())},te=async(e,a)=>{if(C.riskList=[C.mainRiskVO,...e],console.log("附加险列表数据回传",e),a){const i=e.find((e=>e.riskCode===a.riskCode));if(!(await ae(i,a)))return}Z()},se=e=>{var a,i,l,t;C.userData=e,C.defaultValue=e;const s=(null==(a=e.insuredList)?void 0:a[0].productList.findIndex((e=>e.planCode===x.value.planCode)))||0;C.planIndex=-1===s?0:s,C.riskList=(null==(t=null==(l=null==(i=null==e?void 0:e.insuredList)?void 0:i[0].productList)?void 0:l[C.planIndex])?void 0:t.riskList)||[],U(e,!0)},oe=async e=>{var a;if(p.defaultData){const e=p.defaultData.find((e=>e.productCode===p.productInfo.productCode))||p.defaultData[0];se(e),w(null==(a=p.defaultData)?void 0:a[0])}else D.value.push(x.value.planCode),await(async()=>{var e;const a=await Ie({calcProductFactorList:[{planCode:x.value.planCode,productCode:p.productInfo.productCode}]});if(a.data){const i=a.data.find((e=>e.productCode===p.productInfo.productCode))||a.data[0];se(i),w(null==(e=a.data)?void 0:e[0])}})()},ne=async e=>{var a,i;const l=p.productInfo.planList.findIndex((a=>a.planCode===e)),t=(null==(i=null==(a=C.defaultValue)?void 0:a.insuredList)?void 0:i[0].productList.findIndex((a=>a.planCode===e)))||0,s=l>=0?p.productInfo.planList[l]:null;s&&(C.currentPlanCode=e,x.value=s,C.planIndex=t>=0?t:0,C.defaultValue.insuredList[0].productList[C.planIndex].riskList=C.riskList,D.value.findIndex((a=>a===e))<0&&D.value.push(e))};v((()=>{var e,a;C.select={},C.list=[],C.userData={},C.riskIsInsure={},C.submitData={},C.riskList=[{}],C.mainRiskVO={},C.ifPersonalInfoSuccess=!1,C.trialMsg="",C.trialResultPremium=0,C.riskIsInsure={},null==(a=null==(e=x.value)?void 0:e.insureProductRiskVOList)||a.forEach((e=>{var a;const i=null==(a=x.value.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId));i&&(C.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:i})}))})),t((()=>{x.value=p.dataSource,C.loading=!0,C.show=!0,C.isAniShow=!0,C.isSkipFirstTrial=!0,C.hadSkipFirstTrial=!1,z((()=>{oe()}))}));return l({getTrialSuccessFlag:()=>C.trialResultPremium>0,validate:()=>V.value.validate(!1),validateTrialFields:()=>V.value.validateTrialFields(),validateHolder:e=>{var a;return null==(a=V.value)?void 0:a.validateHolder(e)},getUserData:()=>({...C.userData}),onShare:e=>{var a;C.trialResultPremium&&(null==(a=m.value)||a.validate().then((()=>{Object.assign(P.value,p.defaultOrder,{extInfo:{...P.value.extInfo,buttonCode:pe.TRIAL_PREMIUM,pageCode:ce.TRIAL_PREMIUM,templateId:g}});const a=he(p.productInfo,N.value,P.value);Le(a,((a,i)=>{i===Q.JUMP_PAGE&&(O.value.link=`${window.location.href}&isShare=1&orderNo=${a.orderNo}`,e())})),console.log("---- validate success ----")})))},onNext:()=>{var e;const{productCode:a,productName:i}=p.productInfo;L?H(ce.TRIAL_PREMIUM,I.query):C.trialResultPremium&&(null==(e=m.value)||e.validate().then((()=>{Object.assign(P.value,p.defaultOrder,{extInfo:{templateId:g,...P.value.extInfo,...p.defaultOrder.extInfo||{},buttonCode:pe.TRIAL_PREMIUM,pageCode:ce.TRIAL_PREMIUM}}),console.log("dealMixData()",j());const e=he({...j(),productCode:a,productName:i},C.trialResult,P.value);Le(e,((e,a)=>{a===Q.JUMP_PAGE&&W(e.nextPageCode,{...I.query,orderNo:e.orderNo})})),console.log("---- validate success ----")})),C.loading=!1,C.show=!0,C.isAniShow=!0)},dealMixData:j}),s((()=>C.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),s((()=>C.userData),(e=>{if(e){const{holder:a,insuredList:i}=e||{},l={holder:a,insuredList:i};Object.assign(C.submitData,l),d("update:userData",l)}}),{deep:!0}),s((()=>p.dataSource),(e=>{x.value=e}),{deep:!0,immediate:!0}),(e,a)=>{var i,l,t,s,d,p,v,I;const y=G;return o(),n("div",Fa,[k(e.$slots,"trialHead",{},void 0,!0),h("div",Ea,[r(de,{labels:u(_a)((null==(i=x.value)?void 0:i.insureProductRiskVOList)||[],x.value.productRiskRelationVOList)},null,8,["labels"]),h("div",ja,[!e.hideBenefit&&(null==(l=M.value)?void 0:l.benefitRiskResultVOList)?(o(),b(wa,{key:0,class:"benefit-wrap","data-source":M.value,"product-info":x.value,"show-type-list":M.value.showTypList},null,8,["data-source","product-info","show-type-list"])):c("",!0),u(S)?(o(),b(we,{key:1,"plan-list":e.productInfo.planList,"default-plan":x.value,onPlanChange:ne},null,8,["plan-list","default-plan"])):c("",!0),x.value.productFactor?(o(),b(u(ie),{ref_key:"personalInfoRef",ref:V,key:x.value.planCode,modelValue:u(C).userData,"onUpdate:modelValue":a[0]||(a[0]=e=>u(C).userData=e),"is-trial":e.isTrial,"product-factor":x.value.productFactor,"multi-insured-config":null==(t=x.value)?void 0:t.multiInsuredConfigVO,onTrailChange:ee,onCloseCustomerPopoup:F},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):c("",!0)]),r(y,{size:"large"}),h("div",Na,[(o(),b(Re,{ref_key:"insureInfosRef",ref:m,key:x.value.planCode,"origin-data":null==(s=x.value.insureProductRiskVOList)?void 0:s[0],"product-factor":x.value.productFactor,"default-value":u(C).defaultValue?null==(p=null==(d=u(C).defaultValue)?void 0:d.insuredList[0].productList[u(C).planIndex])?void 0:p.riskList[0]:null,"trial-result":u(C).trialResult,onTrialChange:le},null,8,["origin-data","product-factor","default-value","trial-result"]))]),h("div",Ma,[x.value.insureProductRiskVOList?(o(),b(xe,{key:x.value.planCode,"data-source":x.value,"show-main-risk":!1,"default-value":u(C).defaultValue?null==(I=null==(v=u(C).defaultValue)?void 0:v.insuredList[0].productList[u(C).planIndex])?void 0:I.riskList:[],onTrialChange:te},{holderForm:f((()=>{var i;return[e.isTrial&&e.dataSource.productFactor?(o(),b(u(ie),{key:0,ref_key:"personalInfoRef",ref:V,modelValue:u(C).userData,"onUpdate:modelValue":a[1]||(a[1]=e=>u(C).userData=e),"is-trial":e.isTrial,"is-only-holder":!0,"product-factor":e.dataSource.productFactor,"multi-insured-config":null==(i=e.dataSource)?void 0:i.multiInsuredConfigVO,onTrailChange:ee},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):c("",!0)]})),_:1},8,["data-source","default-value"])):c("",!0)]),Aa]),k(e.$slots,"trialBtn",{trialData:u(C).submitData,riskPremium:u(C).trialResult,loading:u(C).isQuerying,personalInfoRef:V.value},void 0,!0)])}}}),[["__scopeId","data-v-48af32c8"]]);export{Ua as default};
