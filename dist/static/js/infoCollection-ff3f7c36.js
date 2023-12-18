import{bd as e,cg as a,d as i,j as t,r as l,bs as s,l as o,E as n,o as r,c as u,b as d,u as c,F as p,f as v,aS as m,aH as f,s as k,w as I,g as y,_ as g,bq as h,bo as L,p as V,a as C,bp as R,i as P,h as O,k as b,aI as D,aJ as T,T as w,M as F,aO as x,aP as S,aQ as N,ai as _,aR as E,aD as j,aE as M,ae as A,af as U,ag as q,q as B,v as K,ch as $,bJ as Q,ak as H,al as J}from"./index-fd9ed705.js";import{_ as G,P as z}from"./PolicyInfo-ceee3db7.js";import{u as W,c as X,h as Y,d as Z,q as ee,g as ae,i as ie}from"./trial-ce3ee623.js";import{_ as te}from"./TrialButton-4e81b888.js";import{n as le}from"./nextStep-64078f34.js";import{u as se}from"./useAttachment-608acc38.js";import{a as oe,c as ne}from"./product-1fd2b694.js";import{g as re}from"./utils-3b8bee91.js";import{u as ue}from"./useOrder-44313ef8.js";import{P as de,B as ce}from"./constants-7afb7c3d.js";import{t as pe,P as ve}from"./utils-8a7e39c9.js";import{c as me}from"./cloneDeep-651db0b6.js";import{B as fe,P as ke,R as Ie,a as ye}from"./index-e1a1b519.js";import{o as ge}from"./index-de590a0b.js";import{B as he}from"./index-7e8aa1ab.js";import{R as Le}from"./trial-71a920e2.js";import"./index-e507090a.js";import"./format-31cde443.js";import"./core-0bc63e0f.js";import"./infoCollection-67c34215.js";import"./createProposal-22735d43.js";import"./index-a710aaeb.js";import"./index-8cd730de.js";import"./gender-bdd67324.js";import"./product-7bbf9c44.js";import"./index-7487abd0.js";function Ve(i){return function(i){return"number"==typeof i||e(i)&&"[object Number]"==a(i)}(i)&&i!=+i}const Ce=i({name:"InsureInfos"}),Re=i({...Ce,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["trialChange"],setup(e,{expose:a,emit:i}){const f=e,k=t(null),I=t({}),y=t({}),g=l({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:f.defaultValue,changeData:null,sValues:I.value});s("premium"),y.value=s("enumList")||{},o((()=>{}));const h=e=>{f.originData.mainRiskFlag,I.value.riskCategory=f.originData.riskCategory,I.value.riskCode=f.originData.riskCode,I.value.riskId=f.originData.riskId,I.value.riskType=f.originData.riskType,I.value.riskName=f.originData.riskName,I.value.riskType=f.originData.riskType,I.value.mainRiskCode=f.originData.mainRiskCode,I.value.mainRiskId=f.originData.mainRiskId,e?i("trialChange",I.value,e):i("trialChange",I.value)},L=(e,a)=>{a?I.value[a.key]=a.newValue:ge(e).forEach((a=>{I.value[a]=e[a]})),h(a)},V=e=>{var a,i;1==+(null==(i=null==(a=f.originData)?void 0:a.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO.saleMethod)?g.basicsAmount=null==e?void 0:e.initialAmount:g.basicsAmount=null==e?void 0:e.initialPremium,ge(e).forEach((a=>{I.value[a]=e[a]})),h()},C=e=>{I.value.liabilityList=e,h()};return n((()=>f.defaultValue),(e=>{e&&(console.log("--default change ",e),g.defaultValues=me(e),I.value={...e})}),{deep:!0,immediate:!0}),n((()=>I.value),(e=>{g.sValues=e}),{deep:!0,immediate:!0}),a({validate:async()=>{var e;await(null==(e=k.value)?void 0:e.validate())}}),(e,a)=>{var i,t,l,s,o,n;const f=m;return 1===(null==(i=e.originData)?void 0:i.factorDisPlayFlag)?(r(),u(p,{key:0},[d(f,{title:"保障计划",class:"insurePlan","show-divider":!1}),d(c(fe),{"v-model":c(g).sValues,"origin-data":null==(l=null==(t=e.originData)?void 0:t.productRiskInsureLimitVO)?void 0:l.amountPremiumConfigVO,"defalut-value":c(g).defaultValues,"trial-result":e.trialResult,onTrialChange:V},null,8,["v-model","origin-data","defalut-value","trial-result"]),d(c(ke),{"v-model":c(g).sValues,"use-data":c(g).sValues,"origin-data":e.originData.productRiskInsureLimitVO,"risk-info":e.originData,"default-value":c(g).defaultValues,onTrialChange:L},null,8,["v-model","use-data","origin-data","risk-info","default-value"]),d(c(Ie),{"data-source-folmulate":c(I),"data-source":e.originData,params:{amountUnit:null==(o=null==(s=e.originData)?void 0:s.productRiskInsureLimitVO)?void 0:o.amountPremiumConfigVO.displayUnit,basicsAmount:c(g).basicsAmount,basicsPremium:c(g).basicsPremium,riskId:null==(n=e.originData)?void 0:n.riskId},"default-value":c(g).defaultValues,onTrialChange:C},null,8,["data-source-folmulate","data-source","params","default-value"])],64)):v("",!0)}}});const Pe={key:0},Oe={key:0,class:"risk2-field"},be=i({name:"ProductRiskList"});var De=g(i({...be,props:{dataSource:{type:Array,default:()=>[]},productInfo:{type:Object,default:()=>({productCode:"",productName:""})},showMainRisk:{type:Boolean,default:()=>!0},defaultValue:{type:Object,default:()=>{}}},emits:["trialChange"],setup(e,{emit:a}){const i=e,t=l({loading:!1,show:!0,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},disabledRiskInfo:[],risksDefaultValue:{}}),s=e=>{const a=[];return e.riskLiabilityInfoVOList.map((e=>(1!=+e.showFlag&&a.push({...e}),[]))),a},m=(e,l,s)=>{var o;t.riskIsInsure[l].data=e;const n=[...t.disabledRiskInfo];null==(o=i.dataSource.insureProductRiskVOList)||o.forEach((e=>{if(1!==e.mainRiskFlag){const a=t.riskIsInsure[e.riskId];a.data&&Object.keys(a.data).length>0&&"1"===a.selected&&n.push(a.data)}})),a("trialChange",n,s)},g=(e,a)=>{var l;null==(l=i.dataSource.productRiskRelationVOList)||l.forEach((i=>{1!==i.collocationType&&(a.riskId===i.riskId?(t.riskIsInsure[a.riskId]&&t.riskIsInsure[a.riskId].selected,2===i.collocationType&&t.riskIsInsure[i.collocationRiskId]&&(t.riskIsInsure[i.collocationRiskId].selected=e),3===i.collocationType&&t.riskIsInsure[i.collocationRiskId]&&"1"===e&&(t.riskIsInsure[i.collocationRiskId].selected="1"===e?"2":"1")):a.riskId===i.collocationRiskId&&(3===i.collocationType&&"1"===e&&t.riskIsInsure[i.riskId]&&(t.riskIsInsure[i.riskId].selected="1"===e?"2":"1"),2===i.collocationType&&t.riskIsInsure[i.riskId]&&(t.riskIsInsure[i.riskId].selected=e)))})),"2"===e?m({},a.riskId):(e=>{var a,i,t,l,o,n,r,u,d,c,p,v;if(1!==(null==e?void 0:e.factorDisPlayFlag)){const f=null==(a=null==e?void 0:e.productRiskInsureLimitVO)?void 0:a.amountPremiumConfigVO,k={riskCategory:e.riskCategory,riskCode:e.riskCode,riskName:e.riskName,riskId:e.riskId,riskType:e.riskType,mainRiskId:e.mainRiskId,mainRiskCode:e.mainRiskCode,liabilityList:s(e)};k.chargePeriod=(null==(t=null==(i=null==e?void 0:e.productRiskInsureLimitVO)?void 0:i.paymentPeriodValueList)?void 0:t.length)>0&&(null==(l=null==e?void 0:e.productRiskInsureLimitVO)?void 0:l.paymentPeriodValueList[0].code)||null,k.coveragePeriod=(null==(n=null==(o=null==e?void 0:e.productRiskInsureLimitVO)?void 0:o.insurancePeriodValueList)?void 0:n.length)>0&&(null==(r=null==e?void 0:e.productRiskInsureLimitVO)?void 0:r.insurancePeriodValueList[0].code)||null,k.paymentFrequency=(null==(d=null==(u=null==e?void 0:e.productRiskInsureLimitVO)?void 0:u.paymentFrequencyList)?void 0:d.length)>0&&(null==(c=null==e?void 0:e.productRiskInsureLimitVO)?void 0:c.paymentFrequencyList[0].code)||null;let I=0;1===f.displayType?I=(null==f?void 0:f.minStepValue)>0?null==f?void 0:f.minStepValue:0:3===f.displayType&&2===f.requireCopies?I=(null==(p=null==f?void 0:f.displayValues)?void 0:p.length)>0?null==f?void 0:f.displayValues[0].value:0:3===f.displayType&&1===f.requireCopies?(I=(null==(v=null==f?void 0:f.displayValues)?void 0:v.length)>0?null==f?void 0:f.displayValues[0].value:0,k.copy=f.minCopiesValue):2===f.displayType?k.copy=f.minCopiesValue:I=0,1===f.saleMethod?k.initialAmount=I:k.initialPremium=I,m(k,e.riskId)}})(a)};return f((()=>{(()=>{var e,a;t.disabledRiskInfo=[];let l=null;if(null==(e=i.dataSource.insureProductRiskVOList)||e.forEach((e=>{var a;const s=1!==e.mainRiskFlag?null==(a=i.dataSource.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId)):{};1===e.mainRiskFlag&&(l=e),t.riskIsInsure[e.riskId]?(t.riskIsInsure[e.riskId].data=null,t.riskIsInsure[e.riskId].relation=s,t.riskIsInsure[e.riskId].isMust=!1):t.riskIsInsure[e.riskId]={selected:"2",data:null,relation:s,isMust:!1}})),l){const e=null==(a=i.dataSource.productRiskRelationVOList)?void 0:a.filter((e=>e.riskId===l.riskId));if(!e)return;null==e||e.forEach((e=>{var a,l,o,n,r,u,d,c,p,v,f,k,I,y,g;if(2===e.collocationType){t.riskIsInsure[e.collocationRiskId].selected="1",t.riskIsInsure[e.collocationRiskId].isMust=!0;const h=null==(a=i.dataSource.insureProductRiskVOList)?void 0:a.find((a=>e.collocationRiskId===a.riskId));if(h&&1!==h.factorDisPlayFlag&&(null==(l=null==h?void 0:h.productRiskInsureLimitVO)?void 0:l.amountPremiumConfigVO)){const a=null==(o=h.riskLiabilityInfoVOList)?void 0:o.every((e=>1!==e.showFlag)),i=null==(n=null==h?void 0:h.productRiskInsureLimitVO)?void 0:n.amountPremiumConfigVO;if(a){t.riskIsInsure[e.collocationRiskId].isDisabled=!0;const a={riskCategory:h.riskCategory,riskCode:h.riskCode,riskName:h.riskName,riskId:h.riskId,riskType:h.riskType,mainRiskId:h.mainRiskId,mainRiskCode:h.mainRiskCode,liabilityList:s(h)};a.chargePeriod=(null==(u=null==(r=null==h?void 0:h.productRiskInsureLimitVO)?void 0:r.paymentPeriodValueList)?void 0:u.length)>0&&(null==(d=null==h?void 0:h.productRiskInsureLimitVO)?void 0:d.paymentPeriodValueList[0].code)||null,a.coveragePeriod=(null==(p=null==(c=null==h?void 0:h.productRiskInsureLimitVO)?void 0:c.insurancePeriodValueList)?void 0:p.length)>0&&(null==(v=null==h?void 0:h.productRiskInsureLimitVO)?void 0:v.insurancePeriodValueList[0].code)||null,a.paymentFrequency=(null==(k=null==(f=null==h?void 0:h.productRiskInsureLimitVO)?void 0:f.paymentFrequencyList)?void 0:k.length)>0&&(null==(I=null==h?void 0:h.productRiskInsureLimitVO)?void 0:I.paymentFrequencyList[0].code)||null;let l=0;1===i.displayType?l=(null==i?void 0:i.minStepValue)>0?null==i?void 0:i.minStepValue:0:3===i.displayType&&2===i.requireCopies?l=(null==(y=null==i?void 0:i.displayValues)?void 0:y.length)>0?null==i?void 0:i.displayValues[0].value:0:3===i.displayType&&1===i.requireCopies?(l=(null==(g=null==i?void 0:i.displayValues)?void 0:g.length)>0?null==i?void 0:i.displayValues[0].value:0,a.copy=i.minCopiesValue):2===i.displayType&&(a.copy=i.minCopiesValue),1===i.saleMethod?a.initialAmount=l:a.initialPremium=l,t.disabledRiskInfo.push(a),m(a,h.riskId)}}}3===e.collocationType&&(t.riskIsInsure[e.collocationRiskId].selected="2",t.riskIsInsure[e.collocationRiskId].isMust=!0)}))}})()})),o((()=>{t.loading=!0})),n((()=>t.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),n((()=>i.defaultValue),(e=>{(null==e?void 0:e.length)>0&&e.forEach((e=>{t.risksDefaultValue[e.riskCode]=e,t.riskIsInsure[e.riskId]?(t.riskIsInsure[e.riskId].selected="1",m(e,e.riskId)):t.riskIsInsure[e.riskId]={selected:"1",isMust:!1}}))}),{deep:!0,immediate:!0}),(a,i)=>{const l=h,s=L;return r(!0),u(p,null,k(e.dataSource.insureProductRiskVOList,(i=>{var o,n;return r(),u(p,{key:i.riskCode},[(!e.showMainRisk&&1!==i.mainRiskFlag||e.showMainRisk)&&(null==(n=null==(o=c(t).riskIsInsure)?void 0:o[i.riskId])?void 0:n.relation)?(r(),u("div",Pe,[d(s,{modelValue:c(t).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>c(t).riskIsInsure[i.riskId].selected=e,label:i.riskName,name:"selected","label-width":"50%",border:!1,class:"risk-select-field risk-name"},{input:I((()=>[d(l,{modelValue:c(t).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>c(t).riskIsInsure[i.riskId].selected=e,"active-value":"1","inactive-value":"2",size:"0.68rem",disabled:c(t).riskIsInsure[i.riskId].isMust,style:{"margin-right":"8px"},onChange:e=>g(e,i)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"]),"1"===c(t).riskIsInsure[i.riskId].selected?(r(),u("div",Oe,[d(Re,{modelValue:c(t).riskIsInsure[i.riskId].data,"onUpdate:modelValue":e=>c(t).riskIsInsure[i.riskId].data=e,"origin-data":i,"product-factor":e.dataSource.productFactor,"default-value":c(t).risksDefaultValue[i.riskCode],onTrialChange:(e,a)=>m(e,i.riskId,a)},null,8,["modelValue","onUpdate:modelValue","origin-data","product-factor","default-value","onTrialChange"])])):v("",!0),1===i.exemptFlag&&"1"===c(t).riskIsInsure[i.riskId].selected?y(a.$slots,"holderForm",{key:1},void 0,!0):v("",!0)])):v("",!0)],64)})),128)}}}),[["__scopeId","data-v-58a61f59"]]);const Te={class:"pro-radio-wrap"},we=i({name:"PlanSelect"}),Fe=i({...we,props:{planList:{default:()=>[]},defaultPlan:{default:()=>{}}},emits:["planChange"],setup(e,{emit:a}){const i=e,l=t("");let s=!1;return o((()=>{i.defaultPlan&&(s=!0,l.value=i.defaultPlan.planCode)})),n((()=>l),(e=>{s||a("planChange",l.value),s&&(s=!1)}),{deep:!0,immediate:!0}),(e,a)=>{const t=R,s=L;return e.planList.length>0?(r(),V(s,{key:0,modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e),label:"保障计划",name:"planCode",class:"risk-select-field"},{input:I((()=>[C("div",Te,[d(t,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),options:i.planList.map((e=>({label:e.planName,value:e.planCode})))},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):v("",!0)}}}),xe=(e,a,i)=>{const t=e,{holder:l}=i,s=i.insuredList[0],o=(a||"").split("_");if(o.length<2)return a;if(Ve(Number(o[1])))return a;if(o[1]-=1,1===t.exemptFlag){if("to"===o[0]){let e=0;1===t.exemptType?(null==l?void 0:l.birthday)&&(e=parseInt(""+((new Date).getTime()-new Date(l.birthday).getTime())/31536e6,10)):2===t.exemptType&&(null==s?void 0:s.birthday)&&(e=parseInt(""+(+(new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)),o[1]=+o[1]-e}o[0]="year"}return o.join("_")},Se=(e,a)=>{const i=[],t={};return null==e||e.forEach((e=>{t[e.riskId]=e})),null==a||a.forEach((e=>{var a,l,s,o;const{collocationType:n,collocationRiskId:r,riskId:u}=e;switch(n){case 2:{const e=null==(a=t[u])?void 0:a.riskName,s=null==(l=t[r])?void 0:l.riskName;i.push(`${e} 和 ${s} 必须同时投保`);break}case 3:{const e=null==(s=t[u])?void 0:s.riskName,a=null==(o=t[r])?void 0:o.riskName;i.push(`${e} 和 ${a} 不能同时投保`);break}}})),i};const Ne={class:"com-body"},_e={class:"trial-body"},Ee={class:"container"},je={class:"container"},Me={class:"container"},Ae=(e=>(j("data-v-48af32c8"),e=e(),M(),e))((()=>C("div",{class:"empty"},null,-1))),Ue=i({name:"TrialBody"});var qe=g(i({...Ue,props:{selfKey:{default:""},dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1},defaultOrder:{default:()=>({})}},emits:["trialStart","trialEnd","update:userData","closeCustomerPopoup"],setup(e,{expose:a,emit:i}){const s=e,p=t(null),m=P();O();const{tenantId:k,templateId:g,preview:h}=m.query,L=t(),R=l({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1,isQuerying:!1,currentPlanCode:""}),j=ue();t();const M=t(),A=t(s.dataSource),U=t([]),q=e=>{const{holder:a,insuredList:i}=e||{};a&&(R.submitData.holder=a),i&&i.length>0&&i.forEach(((e,a)=>{var i;R.submitData.insuredList&&R.submitData.insuredList.length>a?R.submitData.insuredList[a]=e:((null==(i=R.submitData)?void 0:i.insuredList)||(R.submitData.insuredList=[]),R.submitData.insuredList.push(e))}))},B=b((()=>s.productInfo.planList&&s.productInfo.planList.length>2)),K=(e,a)=>{if(e){const i=["birthday","age","gender","id"];a.includes("occupationCodeList")&&i.push("occupationClass"),Object.keys(e).forEach((t=>{[...a,...i].includes(t)||(e[t]=null)}))}},$=e=>{console.log("我是客户数据",e),i("closeCustomerPopoup",e)},Q=(e,a=(e=>!0))=>x(e)?e.filter(a).map((e=>e.code)):[],H=()=>{console.log("--current plan = ",A.value),console.log("---current submit = ",R.submitData);const e=me(R.submitData);if(!B.value)return e;const{1:a,2:i,3:t}=A.value.productFactor||{};if(e.holder&&K(e.holder,Q(a)),e.insuredList){const a=["productList","beneficiaryList"],l=Q(i,(e=>"2"!==String(e.subModuleType))),s=Q(i,(e=>"2"===String(e.subModuleType))),o=x(s),n=Q(t),r=x(n);e.insuredList.forEach(((e,i)=>{var t,u,d;K(e,[...i>=1&&o?s:l,...a,...r?["insuredBeneficiaryType"]:[]]),(null==(t=e.beneficiaryList)?void 0:t.length)>0&&(r?e.beneficiaryList.forEach((e=>K(e,n))):e.beneficiaryList.length=0),e.planCode=A.value.planCode;const c=(null==(d=null==(u=e.productList)?void 0:u[0])?void 0:d.riskList)||[],p=A.value.insureProductRiskVOList||[];if(c.length&&p){const a=c.filter((e=>null!==p.find((a=>a.riskCode===e.riskCode))));e.productList[0].riskList=a}}))}return e},J=t(),z=t({}),ae=["annuityDrawDate","coveragePeriod","chargePeriod","paymentFrequency"],ie=e=>{var a,i,t,l,s,o;if(null==(i=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:i.productRiskDyInsureFactorVOList){const a=[];if(null==(t=A.value)||t.insureProductRiskVOList.forEach((i=>{var t,l;const s=null==(l=null==(t=null==e?void 0:e.data)?void 0:t[0])?void 0:l.productRiskDyInsureFactorVOList.find((e=>e.riskCode===i.riskCode));if(s){i.productRiskInsureLimitVO={...i.productRiskInsureLimitVO,...s};const e=R.riskList.find((e=>e.riskCode===i.riskCode));let t=!1;ve.forEach((a=>{if(ae.indexOf(a.valueKey)>=0){const l=i.productRiskInsureLimitVO[a.configKey];if(l&&e){const i=l.find((i=>i.code===e[a.valueKey]));if(i&&2===i.useFlag){const i=l.find((e=>1===e.defaultFlag));e[a.valueKey]=i.code,t=!0}}}})),t&&a.push({...e,...s,riskCode:i.riskCode})}})),a.length>0&&(null==(o=null==(s=null==(l=R.defaultValue)?void 0:l.insuredList)?void 0:s[0])?void 0:o.productList))return a.forEach((e=>{var a,i,t;R.defaultValue.insuredList[0].productList=null==(t=null==(i=null==(a=R.defaultValue)?void 0:a.insuredList)?void 0:i[0])?void 0:t.productList.map((a=>(a.riskList=null==a?void 0:a.riskList.map((a=>(a.riskCode===e.riskCode&&(a=e),a))),a)))})),!1}return!0},te=D((async(e,a=!0)=>{R.trialMsg="试算中...",R.trialResultPremium=0,R.loading=!0,i("trialStart");let t=!1;if(a){const{code:a}=await W(e);t="10000"===a}!t&&a||(R.isQuerying=!0,s.hideBenefit||X(e).then((e=>{e.data&&e.code===T&&(z.value=e.data)})).finally((()=>{R.loading=!1})),Y(e).then((a=>{var t,l;if(a.data&&a.code===T){(null==(t=null==a?void 0:a.data)?void 0:t.errorInfo)&&w(`${null==(l=null==a?void 0:a.data)?void 0:l.errorInfo}`),R.trialMsg="",R.trialResultPremium=a.data.initialPremium,R.trialResult=a.data;const s={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((e=>{s[e.riskCode]={initialAmount:e.initialAmount,initialPremium:e.initialPremium}})),J.value=s,i("trialEnd",a.data,e)}})).finally((()=>{R.loading=!1,R.isQuerying=!1})))}),500),se=D((async()=>{console.log(">>>>>调用试算<<<<<",R.ifPersonalInfoSuccess,L.value.canTrail());const{productCode:e,productName:a}=s.productInfo||{};if(R.ifPersonalInfoSuccess||L.value.canTrail()){R.submitData.productCode=e,R.submitData.productName=a,R.submitData.tenantId=s.productInfo.tenantId,R.riskList=R.riskList.map((e=>(e=>{var a,i,t,l;const s=null==(a=A.value.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(s&&1!==s.mainRiskFlag){const a=null==(t=null==(i=A.value)?void 0:i.productRiskRelationVOList)?void 0:t.filter((e=>{var a;if(e.collocationRiskId===s.riskId&&3!==e.collocationType){const i=null==(a=A.value.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(i&&i.riskType===Le.MAIN_RISK)return!0}return!1})),o=a.length>0?a[0]:null;if(o){const a=null==(l=R.riskList)?void 0:l.find((e=>e.riskId===o.riskId));ve.forEach((i=>{i.ruleKey&&s.productRiskInsureLimitVO&&a&&(1===s.productRiskInsureLimitVO[i.ruleKey]&&(e[i.valueKey]=a[i.valueKey]),3===s.productRiskInsureLimitVO[i.ruleKey]&&(1!==s.exemptFlag?e[i.valueKey]=xe(s,a[i.valueKey],R.submitData):e[i.valueKey]=xe(s,a[i.ruleValueKey],R.submitData)))}))}}return e})(e))),R.submitData.insuredList&&R.submitData.insuredList.forEach((i=>{i.productList=[{productCode:e,productName:a,riskList:R.riskList}]}));const i=H();console.log(">>>数据构建<<<",i),await te(i)}}),300),oe=async e=>{console.log("人的信息更改了"),q(e),R.ifPersonalInfoSuccess=!0,console.log("处理第一被保人修改的dy变化"),se()};b((()=>{var e;return((null==(e=R.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")})),n((()=>{var e;return((null==(e=R.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")}),D((async e=>{var a;if(A.value.insureProductRiskVOList&&e){const e=R.userData.insuredList.filter((e=>e.birthday))||[];if(!e.length)return;const i=await Z({calcProductFactorList:[{planCode:A.value.planCode,productCode:s.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=A.value.insureProductRiskVOList)?void 0:a[0]}]}],insuredVOList:e});ie(i)}})),{});const ne=async(e,a)=>{var i,t;if(a){const l=me(e);delete l.insurancePeriodValueList,delete l.paymentFrequencyList,delete l.paymentPeriodValueList;if(ae.indexOf(a.key)>=0&&`${a.oldValue}`!=`${a.newValue}`){const o={};switch(a.key){case"annuityDrawDate":o.changeType=3;break;case"coveragePeriod":o.changeType=2;break;case"chargePeriod":o.changeType=1;break;case"paymentFrequency":o.changeType=4}const n=null==(t=null==(i=A.value)?void 0:i.insureProductRiskVOList)?void 0:t.find((a=>a.riskCode===e.riskCode));if(!R.isAutoChange){R.isQuerying=!0;const a=R.userData.insuredList.filter((e=>e.birthday))||[];if(!a.length)return!1;const i=await Z({calcProductFactorList:[{planCode:A.value.planCode,productCode:s.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:n,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...l,...o}}]}],insuredVOList:a});R.isQuerying=!1;const t=ie(i);return t||(R.isAutoChange=!0),t}R.isAutoChange=!1}}return!0},re=async(e,a)=>{R.mainRiskVO=e;await ne(e,a)&&(R.riskList.length>0&&(R.riskList[0]=e),console.log("标准险种的信息回传",e),se())},fe=async(e,a)=>{if(R.riskList=[R.mainRiskVO,...e],console.log("附加险列表数据回传",e),a){const i=e.find((e=>e.riskCode===a.riskCode));if(!(await ne(i,a)))return}se()},ke=e=>{var a,i,t,l;R.userData=e,R.defaultValue=e;const s=(null==(a=e.insuredList)?void 0:a[0].productList.findIndex((e=>e.planCode===A.value.planCode)))||0;R.planIndex=-1===s?0:s,R.riskList=(null==(l=null==(t=null==(i=null==e?void 0:e.insuredList)?void 0:i[0].productList)?void 0:t[R.planIndex])?void 0:l.riskList)||[],te(e,!0)},Ie=async e=>{var a;if(s.defaultData){const e=s.defaultData.find((e=>e.productCode===s.productInfo.productCode))||s.defaultData[0];ke(e),q(null==(a=s.defaultData)?void 0:a[0])}else U.value.push(A.value.planCode),await(async()=>{var e;const a=await ee({calcProductFactorList:[{planCode:A.value.planCode,productCode:s.productInfo.productCode}]});if(a.data){const i=a.data.find((e=>e.productCode===s.productInfo.productCode))||a.data[0];ke(i),q(null==(e=a.data)?void 0:e[0])}})()},ge=async e=>{var a,i;const t=s.productInfo.planList.findIndex((a=>a.planCode===e)),l=(null==(i=null==(a=R.defaultValue)?void 0:a.insuredList)?void 0:i[0].productList.findIndex((a=>a.planCode===e)))||0,o=t>=0?s.productInfo.planList[t]:null;o&&(R.currentPlanCode=e,A.value=o,R.planIndex=l>=0?l:0,R.defaultValue.insuredList[0].productList[R.planIndex].riskList=R.riskList,U.value.findIndex((a=>a===e))<0&&U.value.push(e))};f((()=>{var e,a;R.select={},R.list=[],R.userData={},R.riskIsInsure={},R.submitData={},R.riskList=[{}],R.mainRiskVO={},R.ifPersonalInfoSuccess=!1,R.trialMsg="",R.trialResultPremium=0,R.riskIsInsure={},null==(a=null==(e=A.value)?void 0:e.insureProductRiskVOList)||a.forEach((e=>{var a;const i=null==(a=A.value.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId));i&&(R.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:i})}))})),o((()=>{A.value=s.dataSource,R.loading=!0,R.show=!0,R.isAniShow=!0,R.isSkipFirstTrial=!0,R.hadSkipFirstTrial=!1,F((()=>{Ie()}))}));return a({getTrialSuccessFlag:()=>R.trialResultPremium>0,validate:()=>L.value.validate(!1),validateTrialFields:()=>L.value.validateTrialFields(),validateHolder:e=>{var a;return null==(a=L.value)?void 0:a.validateHolder(e)},getUserData:()=>({...R.userData}),onShare:e=>{var a;R.trialResultPremium&&(null==(a=p.value)||a.validate().then((()=>{Object.assign(j.value,s.defaultOrder,{extInfo:{...j.value.extInfo,buttonCode:ce.TRIAL_PREMIUM,pageCode:de.TRIAL_PREMIUM,templateId:g}});const a=pe(s.productInfo,J.value,j.value);le(a,((a,i)=>{i===N.JUMP_PAGE&&(M.value.link=`${window.location.href}&isShare=1&orderNo=${a.orderNo}`,e())})),console.log("---- validate success ----")})))},onNext:()=>{var e;const{productCode:a,productName:i}=s.productInfo;h?S(de.TRIAL_PREMIUM,m.query):R.trialResultPremium&&(null==(e=p.value)||e.validate().then((()=>{Object.assign(j.value,s.defaultOrder,{extInfo:{templateId:g,...j.value.extInfo,...s.defaultOrder.extInfo||{},buttonCode:ce.TRIAL_PREMIUM,pageCode:de.TRIAL_PREMIUM}}),console.log("dealMixData()",H());const e=pe({...H(),productCode:a,productName:i},R.trialResult,j.value);le(e,((e,a)=>{a===N.JUMP_PAGE&&_(e.nextPageCode,{...m.query,orderNo:e.orderNo})})),console.log("---- validate success ----")})),R.loading=!1,R.show=!0,R.isAniShow=!0)},dealMixData:H}),n((()=>R.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),n((()=>R.userData),(e=>{if(e){const{holder:a,insuredList:t}=e||{},l={holder:a,insuredList:t};Object.assign(R.submitData,l),i("update:userData",l)}}),{deep:!0}),n((()=>s.dataSource),(e=>{A.value=e}),{deep:!0,immediate:!0}),(e,a)=>{var i,t,l,s,o,n,m,f;const k=E;return r(),u("div",Ne,[y(e.$slots,"trialHead",{},void 0,!0),C("div",_e,[d(G,{labels:c(Se)((null==(i=A.value)?void 0:i.insureProductRiskVOList)||[],A.value.productRiskRelationVOList)},null,8,["labels"]),C("div",Ee,[!e.hideBenefit&&(null==(t=z.value)?void 0:t.benefitRiskResultVOList)?(r(),V(he,{key:0,class:"benefit-wrap","data-source":z.value,"product-info":A.value,"show-type-list":z.value.showTypList},null,8,["data-source","product-info","show-type-list"])):v("",!0),c(B)?(r(),V(Fe,{key:1,"plan-list":e.productInfo.planList,"default-plan":A.value,onPlanChange:ge},null,8,["plan-list","default-plan"])):v("",!0),A.value.productFactor?(r(),V(c(ye),{ref_key:"personalInfoRef",ref:L,key:A.value.planCode,modelValue:c(R).userData,"onUpdate:modelValue":a[0]||(a[0]=e=>c(R).userData=e),"is-trial":e.isTrial,"product-factor":A.value.productFactor,"multi-insured-config":null==(l=A.value)?void 0:l.multiInsuredConfigVO,onTrailChange:oe,onCloseCustomerPopoup:$},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):v("",!0)]),d(k,{size:"large"}),C("div",je,[(r(),V(Re,{ref_key:"insureInfosRef",ref:p,key:A.value.planCode,"origin-data":null==(s=A.value.insureProductRiskVOList)?void 0:s[0],"product-factor":A.value.productFactor,"default-value":c(R).defaultValue?null==(n=null==(o=c(R).defaultValue)?void 0:o.insuredList[0].productList[c(R).planIndex])?void 0:n.riskList[0]:null,"trial-result":c(R).trialResult,onTrialChange:re},null,8,["origin-data","product-factor","default-value","trial-result"]))]),C("div",Me,[A.value.insureProductRiskVOList?(r(),V(De,{key:A.value.planCode,"data-source":A.value,"show-main-risk":!1,"default-value":c(R).defaultValue?null==(f=null==(m=c(R).defaultValue)?void 0:m.insuredList[0].productList[c(R).planIndex])?void 0:f.riskList:[],onTrialChange:fe},{holderForm:I((()=>{var i;return[e.isTrial&&e.dataSource.productFactor?(r(),V(c(ye),{key:0,ref_key:"personalInfoRef",ref:L,modelValue:c(R).userData,"onUpdate:modelValue":a[1]||(a[1]=e=>c(R).userData=e),"is-trial":e.isTrial,"is-only-holder":!0,"product-factor":e.dataSource.productFactor,"multi-insured-config":null==(i=e.dataSource)?void 0:i.multiInsuredConfigVO,onTrailChange:oe},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):v("",!0)]})),_:1},8,["data-source","default-value"])):v("",!0)]),Ae]),y(e.$slots,"trialBtn",{trialData:c(R).submitData,riskPremium:c(R).trialResult,loading:c(R).isQuerying,personalInfoRef:L.value},void 0,!0)])}}}),[["__scopeId","data-v-48af32c8"]]);const Be={class:"long-info-collection"},Ke=i({__name:"infoCollection",setup(e){const a=A((()=>U((()=>import("./index-df44085f.js")),["static/js/index-df44085f.js","static/css/index-fa4edf2a.css","static/js/index-fd9ed705.js","static/css/index-f7829d26.css","static/js/theme-94cf7d00.js","static/js/index-e507090a.js","static/css/index-bbfdd7ec.css","static/js/utils-3b8bee91.js","static/js/infoCollection-67c34215.js","static/js/trial-71a920e2.js"]))),i=A((()=>U((()=>import("./index-0cb680e0.js")),["static/js/index-0cb680e0.js","static/css/index-bf024e9b.css","static/js/index-fd9ed705.js","static/css/index-f7829d26.css"]))),s=P(),o=ue(),{productCode:n="",tenantId:p,agentCode:m="",agencyCode:k,saleChannelId:y,isShare:g,orderNo:h,extraInfo:L,insurerCode:C,preview:R}=s.query;let O={};try{O=JSON.parse(decodeURIComponent(L))}catch(we){}const D=l({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),T=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,F=t({imgUrl:"",desc:"",title:"",link:T}),x=t();t();const E=t(),j=t({}),M=t({}),G=t([]),W=t(),X=t({}),Y=t(!1),Z=t(!1),ee=t(0),ve=t(!0),{fileList:me,mustReadFileCount:fe,popupFileList:ke}=se(X,W),Ie=t(!1),ye=t(!1),ge=()=>{Z.value=!1,ve.value=!0,G.value.length<1||(Y.value=!0)},he=()=>{Y.value=!1,Z.value=!1,ve.value=!0};t({}),t(!1),t([{}]);const Le=t(""),Ve=t(0),Ce=t(!1);t(),t(),t(),b((()=>{var e,a;const{insureProductRiskVOList:i}=(null==(a=null==(e=M.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(i||[]).find((e=>e.mainRiskFlag===q.YES))}));const Re=t(0);t({});const Pe=t(),Oe=()=>{Le.value="试算中...",Ve.value=0,Ce.value=!0},be=(e,a)=>{Le.value="",Re.value=e.premium,Ve.value=e,Pe.value=a,Ce.value=!1},De=async()=>{var e,a;if(R)return void S(de.INFO_COLLECTION,s.query);if(!Ve.value)return;const i=[];E.value&&i.push(null==(e=E.value)?void 0:e.validate(!1)),x.value&&i.push(null==(a=x.value)?void 0:a.validate(!1)),Promise.all(i).then((()=>{if(!Ie.value)return void w("请勾选投保人阅读并接受");Object.assign(o.value,{extInfo:{...o.value.extInfo,buttonCode:ce.INFO_COLLECTION,pageCode:de.INFO_COLLECTION}});const e=E.value.dealMixData(),a=pe({...e,productCode:n,productName:M.value.productName},Ve.value,o.value);le(a,((e,a)=>{a===N.JUMP_PAGE&&_(e.nextPageCode,s.query)}))}))};l({tenantOrderPayInfoList:[]});const Te=async()=>{oe({productCode:n,tenantId:p}).then((({data:e,code:a})=>{if("10000"===a){j.value=e;const{wxShareConfig:a,showWXShare:i,title:t,desc:l,image:s}=(null==e?void 0:e.PRODUCT_LIST)||{};i?Object.assign(F.value,{...a,imgUrl:a.image,isShare:i}):Object.assign(F.value,{title:t,desc:l,imgUrl:s,isShare:i}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&$(e.BASIC_INFO.themeType)}})),h&&await ae({orderNo:h,tenantId:p}).then((({code:e,data:a})=>{var i;if("10000"===e){if(Ve.value=a.orderAmount,(null==(i=a.insuredList)?void 0:i.length)>0){const{planCode:e}=a.insuredList[0];D.defaultPlanCode=e}Object.assign(o.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:n}),D.defaultValue=o.value,ye.value=!0}})),ne({productCode:n}).then((({code:e,data:a})=>{var i,t,l,s;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:o}=a;W.value=e||[];const{basicInfo:{questionnaireType:n},questions:r,questionnaireName:u}=(null==(i=null==o?void 0:o[0])?void 0:i.questionnaireDetailResponseVO)||{basicInfo:{}};n&&(G.value=2===n?[{attachmentName:u,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:u,attachmentUri:null==(t=null==r?void 0:r[0])?void 0:t.content,attachmentType:re(String(null==(l=null==r?void 0:r[0])?void 0:l.textType),null==(s=null==r?void 0:r[0])?void 0:s.content)}])}})),await ie({productCode:n,isTenant:!R}).then((({data:e,code:a})=>{var i;if("10000"===a){M.value=e,X.value=e.productPlanInsureVOList.find((e=>!D.defaultPlanCode||e.planCode===D.defaultPlanCode))||{};const{payInfo:a}=Q(null==(i=X.value)?void 0:i.productFactor);D.payInfo={...D.payInfo,...a}}}))};return f((()=>{Te()})),(e,t)=>{var l,s,m,f,k,y;const h=H,L=J;return r(),u("div",Be,[d(h),c(ye)||c(R)?(r(),V(qe,{key:0,ref_key:"personalInfoRef",ref:E,"data-source":c(X),"product-info":{productCode:c(n),productName:c(M).productName,insurerCode:c(C),tenantId:c(p),planList:c(M).productPlanInsureVOList},"tenant-product-detail":c(j),"hide-benefit":"","default-data":[c(D).defaultValue],onTrialStart:Oe,onTrialEnd:be,"onUpdate:userData":t[0]||(t[0]=e=>c(D).userData=e)},null,8,["data-source","product-info","tenant-product-detail","default-data"])):v("",!0),c(D).payInfo.schema.length?(r(),V(c(z),{key:1,ref_key:"payInfoRef",ref:x,modelValue:c(o).tenantOrderPayInfoList,"onUpdate:modelValue":t[1]||(t[1]=e=>c(o).tenantOrderPayInfoList=e),schema:c(D).payInfo.schema,"is-view":c(D).isView,"user-data":c(D).userData},null,8,["modelValue","schema","is-view","user-data"])):v("",!0),d(L,null,{default:I((()=>{var e;return[(null==(e=c(me))?void 0:e.length)?(r(),V(c(i),{key:0,modelValue:c(Ie),"onUpdate:modelValue":t[2]||(t[2]=e=>B(Ie)?Ie.value=e:null),"has-bg-color":!1,"attachment-list":c(me),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:t[3]||(t[3]=e=>(e=>{ee.value=e,Z.value=!0})(e))},null,8,["modelValue","attachment-list"])):v("",!0)]})),_:1}),c(Z)?(r(),V(c(a),{key:2,show:c(Z),"onUpdate:show":t[4]||(t[4]=e=>B(Z)?Z.value=e:null),"content-list":c(ve)?c(me):c(ke),"is-only-view":c(ve),"active-index":c(ee),text:c(ve)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":c(ve)?0:c(fe),onSubmit:ge,onOnCloseFilePreviewByMask:he},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):v("",!0),d(te,{"is-share":c(F).isShare&&!c(g),premium:null==(l=c(Ve))?void 0:l.initialPremium,"share-info":c(F),"loading-text":c(Le),"payment-frequency":(null==(y=null==(k=null==(f=null==(m=null==(s=c(Pe))?void 0:s.insuredList)?void 0:m[0].productList)?void 0:f[0].riskList)?void 0:k[0])?void 0:y.paymentFrequency)+"","tenant-product-detail":c(j),"handle-share":e=>(e=>{E.value.validateHolder(["mobile"]).then((()=>{Object.assign(o.value,{extInfo:{...o.value.extInfo,buttonCode:ce.INFO_COLLECTION,pageCode:de.INFO_COLLECTION}});const a=E.value.getUserData(),i=pe({...Pe.value,holder:null==a?void 0:a.holder},Ve.value||{},o.value);le(i,((a,i)=>{i===N.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{w("请录入投保人手机号后进行分享")}))})(e),disabled:!c(Ve),onHandleClick:De},{default:I((()=>[K("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{Ke as default};
