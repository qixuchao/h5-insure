import{bd as e,cg as i,d as a,j as t,r as l,bs as s,l as o,E as n,o as r,c as u,b as d,u as c,F as p,f as v,aS as m,aG as f,s as k,w as I,g as y,_ as g,bq as h,bo as L,p as V,a as C,bp as R,i as P,h as b,k as O,aI as D,aJ as T,T as w,M as F,aO as x,aP as S,aQ as N,aj as _,aR as j,aC as E,aD as M,af as A,ag as U,ah as q,q as B,v as K,ch as $,bH as Q,ak as H,al as J}from"./index-282e95dd.js";import{_ as G,P as z}from"./PolicyInfo-fa798934.js";import{u as W,c as X,h as Y,d as Z,q as ee,g as ie,i as ae}from"./trial-cb6dee49.js";import{_ as te}from"./TrialButton-e62eb01b.js";import{n as le}from"./nextStep-b8f9d79b.js";import{u as se}from"./useAttachment-1037e3bd.js";import{a as oe,c as ne}from"./product-47b42f4e.js";import{g as re}from"./utils-b388d5c2.js";import{u as ue}from"./useOrder-018a9d30.js";import{P as de,B as ce}from"./constants-7afb7c3d.js";import{t as pe,P as ve}from"./utils-3cf349ed.js";import{c as me}from"./cloneDeep-2f072f71.js";import{B as fe,P as ke,R as Ie,a as ye}from"./index-b1eac698.js";import{o as ge}from"./index-de590a0b.js";import{B as he}from"./index-6a8eee6b.js";import{R as Le}from"./trial-448a4f37.js";import"./index-43b400fc.js";import"./format-31cde443.js";import"./core-c9efec7d.js";import"./infoCollection-ca1bf8b9.js";import"./createProposal-42f1ef77.js";import"./index-2c0b83cd.js";import"./index-27156592.js";import"./gender-bdd67324.js";import"./product-7bbf9c44.js";import"./index-01f0f2c4.js";function Ve(a){return function(a){return"number"==typeof a||e(a)&&"[object Number]"==i(a)}(a)&&a!=+a}const Ce=a({name:"InsureInfos"}),Re=a({...Ce,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["trialChange"],setup(e,{expose:i,emit:a}){const f=e,k=t(null),I=t({}),y=t({}),g=l({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:f.defaultValue,changeData:null,sValues:I.value});s("premium"),y.value=s("enumList")||{},o((()=>{}));const h=e=>{f.originData.mainRiskFlag,I.value.riskCategory=f.originData.riskCategory,I.value.riskCode=f.originData.riskCode,I.value.riskId=f.originData.riskId,I.value.riskType=f.originData.riskType,I.value.riskName=f.originData.riskName,I.value.riskType=f.originData.riskType,I.value.mainRiskCode=f.originData.mainRiskCode,I.value.mainRiskId=f.originData.mainRiskId,e?a("trialChange",I.value,e):a("trialChange",I.value)},L=(e,i)=>{i?I.value[i.key]=i.newValue:ge(e).forEach((i=>{I.value[i]=e[i]})),h(i)},V=e=>{var i,a;1==+(null==(a=null==(i=f.originData)?void 0:i.productRiskInsureLimitVO)?void 0:a.amountPremiumConfigVO.saleMethod)?g.basicsAmount=null==e?void 0:e.initialAmount:g.basicsAmount=null==e?void 0:e.initialPremium,ge(e).forEach((i=>{I.value[i]=e[i]})),h()},C=e=>{I.value.liabilityList=e,h()};return n((()=>f.defaultValue),(e=>{e&&(console.log("--default change ",e),g.defaultValues=me(e),I.value={...e})}),{deep:!0,immediate:!0}),n((()=>I.value),(e=>{g.sValues=e}),{deep:!0,immediate:!0}),i({validate:async()=>{var e;await(null==(e=k.value)?void 0:e.validate())}}),(e,i)=>{var a,t,l,s,o,n;const f=m;return 1===(null==(a=e.originData)?void 0:a.factorDisPlayFlag)?(r(),u(p,{key:0},[d(f,{title:"保障计划",class:"insurePlan","show-divider":!1}),d(c(fe),{"v-model":c(g).sValues,"origin-data":null==(l=null==(t=e.originData)?void 0:t.productRiskInsureLimitVO)?void 0:l.amountPremiumConfigVO,"defalut-value":c(g).defaultValues,"trial-result":e.trialResult,onTrialChange:V},null,8,["v-model","origin-data","defalut-value","trial-result"]),d(c(ke),{"v-model":c(g).sValues,"use-data":c(g).sValues,"origin-data":e.originData.productRiskInsureLimitVO,"risk-info":e.originData,"default-value":c(g).defaultValues,onTrialChange:L},null,8,["v-model","use-data","origin-data","risk-info","default-value"]),d(c(Ie),{"data-source-folmulate":c(I),"data-source":e.originData,params:{amountUnit:null==(o=null==(s=e.originData)?void 0:s.productRiskInsureLimitVO)?void 0:o.amountPremiumConfigVO.displayUnit,basicsAmount:c(g).basicsAmount,basicsPremium:c(g).basicsPremium,riskId:null==(n=e.originData)?void 0:n.riskId},"default-value":c(g).defaultValues,onTrialChange:C},null,8,["data-source-folmulate","data-source","params","default-value"])],64)):v("",!0)}}});const Pe={key:0},be={key:0,class:"risk2-field"},Oe=a({name:"ProductRiskList"});var De=g(a({...Oe,props:{dataSource:{type:Array,default:()=>[]},productInfo:{type:Object,default:()=>({productCode:"",productName:""})},showMainRisk:{type:Boolean,default:()=>!0},defaultValue:{type:Object,default:()=>{}}},emits:["trialChange"],setup(e,{emit:i}){const a=e,t=l({loading:!1,show:!0,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},disabledRiskInfo:[],risksDefaultValue:{}}),s=e=>{const i=[];return e.riskLiabilityInfoVOList.map((e=>(1!=+e.showFlag&&i.push({...e}),[]))),i},m=(e,l,s)=>{var o;t.riskIsInsure[l].data=e;const n=[...t.disabledRiskInfo];null==(o=a.dataSource.insureProductRiskVOList)||o.forEach((e=>{if(1!==e.mainRiskFlag){const i=t.riskIsInsure[e.riskId];i.data&&Object.keys(i.data).length>0&&"1"===i.selected&&n.push(i.data)}})),i("trialChange",n,s)},g=(e,i)=>{var l;null==(l=a.dataSource.productRiskRelationVOList)||l.forEach((a=>{1!==a.collocationType&&(i.riskId===a.riskId?(t.riskIsInsure[i.riskId]&&t.riskIsInsure[i.riskId].selected,2===a.collocationType&&t.riskIsInsure[a.collocationRiskId]&&(t.riskIsInsure[a.collocationRiskId].selected=e),3===a.collocationType&&t.riskIsInsure[a.collocationRiskId]&&"1"===e&&(t.riskIsInsure[a.collocationRiskId].selected="1"===e?"2":"1")):i.riskId===a.collocationRiskId&&(3===a.collocationType&&"1"===e&&t.riskIsInsure[a.riskId]&&(t.riskIsInsure[a.riskId].selected="1"===e?"2":"1"),2===a.collocationType&&t.riskIsInsure[a.riskId]&&(t.riskIsInsure[a.riskId].selected=e)))})),"2"===e?m({},i.riskId):(e=>{var i,a,t,l,o,n,r,u,d,c,p,v;if(1!==(null==e?void 0:e.factorDisPlayFlag)){const f=null==(i=null==e?void 0:e.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO,k={riskCategory:e.riskCategory,riskCode:e.riskCode,riskName:e.riskName,riskId:e.riskId,riskType:e.riskType,mainRiskId:e.mainRiskId,mainRiskCode:e.mainRiskCode,liabilityList:s(e)};k.chargePeriod=(null==(t=null==(a=null==e?void 0:e.productRiskInsureLimitVO)?void 0:a.paymentPeriodValueList)?void 0:t.length)>0&&(null==(l=null==e?void 0:e.productRiskInsureLimitVO)?void 0:l.paymentPeriodValueList[0].code)||null,k.coveragePeriod=(null==(n=null==(o=null==e?void 0:e.productRiskInsureLimitVO)?void 0:o.insurancePeriodValueList)?void 0:n.length)>0&&(null==(r=null==e?void 0:e.productRiskInsureLimitVO)?void 0:r.insurancePeriodValueList[0].code)||null,k.paymentFrequency=(null==(d=null==(u=null==e?void 0:e.productRiskInsureLimitVO)?void 0:u.paymentFrequencyList)?void 0:d.length)>0&&(null==(c=null==e?void 0:e.productRiskInsureLimitVO)?void 0:c.paymentFrequencyList[0].code)||null;let I=0;1===f.displayType?I=(null==f?void 0:f.minStepValue)>0?null==f?void 0:f.minStepValue:0:3===f.displayType&&2===f.requireCopies?I=(null==(p=null==f?void 0:f.displayValues)?void 0:p.length)>0?null==f?void 0:f.displayValues[0].value:0:3===f.displayType&&1===f.requireCopies?(I=(null==(v=null==f?void 0:f.displayValues)?void 0:v.length)>0?null==f?void 0:f.displayValues[0].value:0,k.copy=f.minCopiesValue):2===f.displayType?k.copy=f.minCopiesValue:I=0,1===f.saleMethod?k.initialAmount=I:k.initialPremium=I,m(k,e.riskId)}})(i)};return f((()=>{(()=>{var e,i;t.disabledRiskInfo=[];let l=null;if(null==(e=a.dataSource.insureProductRiskVOList)||e.forEach((e=>{var i;const s=1!==e.mainRiskFlag?null==(i=a.dataSource.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId)):{};1===e.mainRiskFlag&&(l=e),t.riskIsInsure[e.riskId]?(t.riskIsInsure[e.riskId].data=null,t.riskIsInsure[e.riskId].relation=s,t.riskIsInsure[e.riskId].isMust=!1):t.riskIsInsure[e.riskId]={selected:"2",data:null,relation:s,isMust:!1}})),l){const e=null==(i=a.dataSource.productRiskRelationVOList)?void 0:i.filter((e=>e.riskId===l.riskId));if(!e)return;null==e||e.forEach((e=>{var i,l,o,n,r,u,d,c,p,v,f,k,I,y,g;if(2===e.collocationType){t.riskIsInsure[e.collocationRiskId].selected="1",t.riskIsInsure[e.collocationRiskId].isMust=!0;const h=null==(i=a.dataSource.insureProductRiskVOList)?void 0:i.find((i=>e.collocationRiskId===i.riskId));if(h&&1!==h.factorDisPlayFlag&&(null==(l=null==h?void 0:h.productRiskInsureLimitVO)?void 0:l.amountPremiumConfigVO)){const i=null==(o=h.riskLiabilityInfoVOList)?void 0:o.every((e=>1!==e.showFlag)),a=null==(n=null==h?void 0:h.productRiskInsureLimitVO)?void 0:n.amountPremiumConfigVO;if(i){t.riskIsInsure[e.collocationRiskId].isDisabled=!0;const i={riskCategory:h.riskCategory,riskCode:h.riskCode,riskName:h.riskName,riskId:h.riskId,riskType:h.riskType,mainRiskId:h.mainRiskId,mainRiskCode:h.mainRiskCode,liabilityList:s(h)};i.chargePeriod=(null==(u=null==(r=null==h?void 0:h.productRiskInsureLimitVO)?void 0:r.paymentPeriodValueList)?void 0:u.length)>0&&(null==(d=null==h?void 0:h.productRiskInsureLimitVO)?void 0:d.paymentPeriodValueList[0].code)||null,i.coveragePeriod=(null==(p=null==(c=null==h?void 0:h.productRiskInsureLimitVO)?void 0:c.insurancePeriodValueList)?void 0:p.length)>0&&(null==(v=null==h?void 0:h.productRiskInsureLimitVO)?void 0:v.insurancePeriodValueList[0].code)||null,i.paymentFrequency=(null==(k=null==(f=null==h?void 0:h.productRiskInsureLimitVO)?void 0:f.paymentFrequencyList)?void 0:k.length)>0&&(null==(I=null==h?void 0:h.productRiskInsureLimitVO)?void 0:I.paymentFrequencyList[0].code)||null;let l=0;1===a.displayType?l=(null==a?void 0:a.minStepValue)>0?null==a?void 0:a.minStepValue:0:3===a.displayType&&2===a.requireCopies?l=(null==(y=null==a?void 0:a.displayValues)?void 0:y.length)>0?null==a?void 0:a.displayValues[0].value:0:3===a.displayType&&1===a.requireCopies?(l=(null==(g=null==a?void 0:a.displayValues)?void 0:g.length)>0?null==a?void 0:a.displayValues[0].value:0,i.copy=a.minCopiesValue):2===a.displayType&&(i.copy=a.minCopiesValue),1===a.saleMethod?i.initialAmount=l:i.initialPremium=l,t.disabledRiskInfo.push(i),m(i,h.riskId)}}}3===e.collocationType&&(t.riskIsInsure[e.collocationRiskId].selected="2",t.riskIsInsure[e.collocationRiskId].isMust=!0)}))}})()})),o((()=>{t.loading=!0})),n((()=>t.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),n((()=>a.defaultValue),(e=>{(null==e?void 0:e.length)>0&&e.forEach((e=>{t.risksDefaultValue[e.riskCode]=e,t.riskIsInsure[e.riskId]?(t.riskIsInsure[e.riskId].selected="1",m(e,e.riskId)):t.riskIsInsure[e.riskId]={selected:"1",isMust:!1}}))}),{deep:!0,immediate:!0}),(i,a)=>{const l=h,s=L;return r(!0),u(p,null,k(e.dataSource.insureProductRiskVOList,(a=>{var o,n;return r(),u(p,{key:a.riskCode},[(!e.showMainRisk&&1!==a.mainRiskFlag||e.showMainRisk)&&(null==(n=null==(o=c(t).riskIsInsure)?void 0:o[a.riskId])?void 0:n.relation)?(r(),u("div",Pe,[d(s,{modelValue:c(t).riskIsInsure[a.riskId].selected,"onUpdate:modelValue":e=>c(t).riskIsInsure[a.riskId].selected=e,label:a.riskName,name:"selected","label-width":"50%",border:!1,class:"risk-select-field risk-name"},{input:I((()=>[d(l,{modelValue:c(t).riskIsInsure[a.riskId].selected,"onUpdate:modelValue":e=>c(t).riskIsInsure[a.riskId].selected=e,"active-value":"1","inactive-value":"2",size:"0.68rem",disabled:c(t).riskIsInsure[a.riskId].isMust,style:{"margin-right":"8px"},onChange:e=>g(e,a)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"]),"1"===c(t).riskIsInsure[a.riskId].selected?(r(),u("div",be,[d(Re,{modelValue:c(t).riskIsInsure[a.riskId].data,"onUpdate:modelValue":e=>c(t).riskIsInsure[a.riskId].data=e,"origin-data":a,"product-factor":e.dataSource.productFactor,"default-value":c(t).risksDefaultValue[a.riskCode],onTrialChange:(e,i)=>m(e,a.riskId,i)},null,8,["modelValue","onUpdate:modelValue","origin-data","product-factor","default-value","onTrialChange"])])):v("",!0),1===a.exemptFlag&&"1"===c(t).riskIsInsure[a.riskId].selected?y(i.$slots,"holderForm",{key:1},void 0,!0):v("",!0)])):v("",!0)],64)})),128)}}}),[["__scopeId","data-v-58a61f59"]]);const Te={class:"pro-radio-wrap"},we=a({name:"PlanSelect"}),Fe=a({...we,props:{planList:{default:()=>[]},defaultPlan:{default:()=>{}}},emits:["planChange"],setup(e,{emit:i}){const a=e,l=t("");let s=!1;return o((()=>{a.defaultPlan&&(s=!0,l.value=a.defaultPlan.planCode)})),n((()=>l),(e=>{s||i("planChange",l.value),s&&(s=!1)}),{deep:!0,immediate:!0}),(e,i)=>{const t=R,s=L;return e.planList.length>0?(r(),V(s,{key:0,modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=e=>l.value=e),label:"保障计划",name:"planCode",class:"risk-select-field"},{input:I((()=>[C("div",Te,[d(t,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=e=>l.value=e),options:a.planList.map((e=>({label:e.planName,value:e.planCode})))},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):v("",!0)}}}),xe=(e,i,a)=>{const t=e,{holder:l}=a,s=a.insuredList[0],o=(i||"").split("_");if(o.length<2)return i;if(Ve(Number(o[1])))return i;if(o[1]-=1,1===t.exemptFlag){if("to"===o[0]){let e=0;1===t.exemptType?(null==l?void 0:l.birthday)&&(e=parseInt(""+((new Date).getTime()-new Date(l.birthday).getTime())/31536e6,10)):2===t.exemptType&&(null==s?void 0:s.birthday)&&(e=parseInt(""+(+(new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)),o[1]=+o[1]-e}o[0]="year"}return o.join("_")},Se=(e,i)=>{const a=[],t={};return null==e||e.forEach((e=>{t[e.riskId]=e})),null==i||i.forEach((e=>{var i,l,s,o;const{collocationType:n,collocationRiskId:r,riskId:u}=e;switch(n){case 2:{const e=null==(i=t[u])?void 0:i.riskName,s=null==(l=t[r])?void 0:l.riskName;a.push(`${e} 和 ${s} 必须同时投保`);break}case 3:{const e=null==(s=t[u])?void 0:s.riskName,i=null==(o=t[r])?void 0:o.riskName;a.push(`${e} 和 ${i} 不能同时投保`);break}}})),a};const Ne={class:"com-body"},_e={class:"trial-body"},je={class:"container"},Ee={class:"container"},Me={class:"container"},Ae=(e=>(E("data-v-48af32c8"),e=e(),M(),e))((()=>C("div",{class:"empty"},null,-1))),Ue=a({name:"TrialBody"});var qe=g(a({...Ue,props:{selfKey:{default:""},dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1},defaultOrder:{default:()=>({})}},emits:["trialStart","trialEnd","update:userData","closeCustomerPopoup"],setup(e,{expose:i,emit:a}){const s=e,p=t(null),m=P();b();const{tenantId:k,templateId:g,preview:h}=m.query,L=t(),R=l({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1,isQuerying:!1,currentPlanCode:""}),E=ue();t();const M=t(),A=t(s.dataSource),U=t([]),q=e=>{const{holder:i,insuredList:a}=e||{};i&&(R.submitData.holder=i),a&&a.length>0&&a.forEach(((e,i)=>{var a;R.submitData.insuredList&&R.submitData.insuredList.length>i?R.submitData.insuredList[i]=e:((null==(a=R.submitData)?void 0:a.insuredList)||(R.submitData.insuredList=[]),R.submitData.insuredList.push(e))}))},B=O((()=>s.productInfo.planList&&s.productInfo.planList.length>2)),K=(e,i)=>{if(e){const a=["birthday","age","gender","id"];i.includes("occupationCodeList")&&a.push("occupationClass"),Object.keys(e).forEach((t=>{[...i,...a].includes(t)||(e[t]=null)}))}},$=e=>{console.log("我是客户数据",e),a("closeCustomerPopoup",e)},Q=(e,i=(e=>!0))=>x(e)?e.filter(i).map((e=>e.code)):[],H=()=>{console.log("--current plan = ",A.value),console.log("---current submit = ",R.submitData);const e=me(R.submitData);if(!B.value)return e;const{1:i,2:a,3:t}=A.value.productFactor||{};if(e.holder&&K(e.holder,Q(i)),e.insuredList){const i=["productList","beneficiaryList"],l=Q(a,(e=>"2"!==String(e.subModuleType))),s=Q(a,(e=>"2"===String(e.subModuleType))),o=x(s),n=Q(t),r=x(n);e.insuredList.forEach(((e,a)=>{var t,u,d;K(e,[...a>=1&&o?s:l,...i,...r?["insuredBeneficiaryType"]:[]]),(null==(t=e.beneficiaryList)?void 0:t.length)>0&&(r?e.beneficiaryList.forEach((e=>K(e,n))):e.beneficiaryList.length=0),e.planCode=A.value.planCode;const c=(null==(d=null==(u=e.productList)?void 0:u[0])?void 0:d.riskList)||[],p=A.value.insureProductRiskVOList||[];if(c.length&&p){const i=c.filter((e=>null!==p.find((i=>i.riskCode===e.riskCode))));e.productList[0].riskList=i}}))}return e},J=t(),z=t({}),ie=["annuityDrawDate","coveragePeriod","chargePeriod","paymentFrequency"],ae=e=>{var i,a,t,l,s,o;if(null==(a=null==(i=null==e?void 0:e.data)?void 0:i[0])?void 0:a.productRiskDyInsureFactorVOList){const i=[];if(null==(t=A.value)||t.insureProductRiskVOList.forEach((a=>{var t,l;const s=null==(l=null==(t=null==e?void 0:e.data)?void 0:t[0])?void 0:l.productRiskDyInsureFactorVOList.find((e=>e.riskCode===a.riskCode));if(s){a.productRiskInsureLimitVO={...a.productRiskInsureLimitVO,...s};const e=R.riskList.find((e=>e.riskCode===a.riskCode));let t=!1;ve.forEach((i=>{if(ie.indexOf(i.valueKey)>=0){const l=a.productRiskInsureLimitVO[i.configKey];if(l&&e){const a=l.find((a=>a.code===e[i.valueKey]));if(a&&2===a.useFlag){const a=l.find((e=>1===e.defaultFlag));e[i.valueKey]=a.code,t=!0}}}})),t&&i.push({...e,...s,riskCode:a.riskCode})}})),i.length>0&&(null==(o=null==(s=null==(l=R.defaultValue)?void 0:l.insuredList)?void 0:s[0])?void 0:o.productList))return i.forEach((e=>{var i,a,t;R.defaultValue.insuredList[0].productList=null==(t=null==(a=null==(i=R.defaultValue)?void 0:i.insuredList)?void 0:a[0])?void 0:t.productList.map((i=>(i.riskList=null==i?void 0:i.riskList.map((i=>(i.riskCode===e.riskCode&&(i=e),i))),i)))})),!1}return!0},te=D((async(e,i=!0)=>{R.trialMsg="试算中...",R.trialResultPremium=0,R.loading=!0,a("trialStart");let t=!1;if(i){const{code:i}=await W(e);t="10000"===i}!t&&i||(R.isQuerying=!0,s.hideBenefit||X(e).then((e=>{e.data&&e.code===T&&(z.value=e.data)})).finally((()=>{R.loading=!1})),Y(e).then((i=>{var t,l;if(i.data&&i.code===T){(null==(t=null==i?void 0:i.data)?void 0:t.errorInfo)&&w(`${null==(l=null==i?void 0:i.data)?void 0:l.errorInfo}`),R.trialMsg="",R.trialResultPremium=i.data.initialPremium,R.trialResult=i.data;const s={};i.data.riskPremiumDetailVOList&&i.data.riskPremiumDetailVOList.length&&i.data.riskPremiumDetailVOList.forEach((e=>{s[e.riskCode]={initialAmount:e.initialAmount,initialPremium:e.initialPremium}})),J.value=s,a("trialEnd",i.data,e)}})).finally((()=>{R.loading=!1,R.isQuerying=!1})))}),500),se=D((async()=>{console.log(">>>>>调用试算<<<<<",R.ifPersonalInfoSuccess,L.value.canTrail());const{productCode:e,productName:i}=s.productInfo||{};if(R.ifPersonalInfoSuccess||L.value.canTrail()){R.submitData.productCode=e,R.submitData.productName=i,R.submitData.tenantId=s.productInfo.tenantId,R.riskList=R.riskList.map((e=>(e=>{var i,a,t,l;const s=null==(i=A.value.insureProductRiskVOList)?void 0:i.find((i=>e.riskId===i.riskId));if(s&&1!==s.mainRiskFlag){const i=null==(t=null==(a=A.value)?void 0:a.productRiskRelationVOList)?void 0:t.filter((e=>{var i;if(e.collocationRiskId===s.riskId&&3!==e.collocationType){const a=null==(i=A.value.insureProductRiskVOList)?void 0:i.find((i=>e.riskId===i.riskId));if(a&&a.riskType===Le.MAIN_RISK)return!0}return!1})),o=i.length>0?i[0]:null;if(o){const i=null==(l=R.riskList)?void 0:l.find((e=>e.riskId===o.riskId));ve.forEach((a=>{a.ruleKey&&s.productRiskInsureLimitVO&&i&&(1===s.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=i[a.valueKey]),3===s.productRiskInsureLimitVO[a.ruleKey]&&(1!==s.exemptFlag?e[a.valueKey]=xe(s,i[a.valueKey],R.submitData):e[a.valueKey]=xe(s,i[a.ruleValueKey],R.submitData)))}))}}return e})(e))),R.submitData.insuredList&&R.submitData.insuredList.forEach((a=>{a.productList=[{productCode:e,productName:i,riskList:R.riskList}]}));const a=H();console.log(">>>数据构建<<<",a),await te(a)}}),300),oe=async e=>{console.log("人的信息更改了"),q(e),R.ifPersonalInfoSuccess=!0,console.log("处理第一被保人修改的dy变化"),se()};O((()=>{var e;return((null==(e=R.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")})),n((()=>{var e;return((null==(e=R.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")}),D((async e=>{var i;if(A.value.insureProductRiskVOList&&e){const e=R.userData.insuredList.filter((e=>e.birthday))||[];if(!e.length)return;const a=await Z({calcProductFactorList:[{planCode:A.value.planCode,productCode:s.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(i=A.value.insureProductRiskVOList)?void 0:i[0]}]}],insuredVOList:e});ae(a)}})),{});const ne=async(e,i)=>{var a,t;if(i){const l=me(e);delete l.insurancePeriodValueList,delete l.paymentFrequencyList,delete l.paymentPeriodValueList;if(ie.indexOf(i.key)>=0&&`${i.oldValue}`!=`${i.newValue}`){const o={};switch(i.key){case"annuityDrawDate":o.changeType=3;break;case"coveragePeriod":o.changeType=2;break;case"chargePeriod":o.changeType=1;break;case"paymentFrequency":o.changeType=4}const n=null==(t=null==(a=A.value)?void 0:a.insureProductRiskVOList)?void 0:t.find((i=>i.riskCode===e.riskCode));if(!R.isAutoChange){R.isQuerying=!0;const i=R.userData.insuredList.filter((e=>e.birthday))||[];if(!i.length)return!1;const a=await Z({calcProductFactorList:[{planCode:A.value.planCode,productCode:s.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:n,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...l,...o}}]}],insuredVOList:i});R.isQuerying=!1;const t=ae(a);return t||(R.isAutoChange=!0),t}R.isAutoChange=!1}}return!0},re=async(e,i)=>{R.mainRiskVO=e;await ne(e,i)&&(R.riskList.length>0&&(R.riskList[0]=e),console.log("标准险种的信息回传",e),se())},fe=async(e,i)=>{if(R.riskList=[R.mainRiskVO,...e],console.log("附加险列表数据回传",e),i){const a=e.find((e=>e.riskCode===i.riskCode));if(!(await ne(a,i)))return}se()},ke=e=>{var i,a,t,l;R.userData=e,R.defaultValue=e;const s=(null==(i=e.insuredList)?void 0:i[0].productList.findIndex((e=>e.planCode===A.value.planCode)))||0;R.planIndex=-1===s?0:s,R.riskList=(null==(l=null==(t=null==(a=null==e?void 0:e.insuredList)?void 0:a[0].productList)?void 0:t[R.planIndex])?void 0:l.riskList)||[],te(e,!0)},Ie=async e=>{var i;if(s.defaultData){const e=s.defaultData.find((e=>e.productCode===s.productInfo.productCode))||s.defaultData[0];ke(e),q(null==(i=s.defaultData)?void 0:i[0])}else U.value.push(A.value.planCode),await(async()=>{var e;const i=await ee({calcProductFactorList:[{planCode:A.value.planCode,productCode:s.productInfo.productCode}]});if(i.data){const a=i.data.find((e=>e.productCode===s.productInfo.productCode))||i.data[0];ke(a),q(null==(e=i.data)?void 0:e[0])}})()},ge=async e=>{var i,a;const t=s.productInfo.planList.findIndex((i=>i.planCode===e)),l=(null==(a=null==(i=R.defaultValue)?void 0:i.insuredList)?void 0:a[0].productList.findIndex((i=>i.planCode===e)))||0,o=t>=0?s.productInfo.planList[t]:null;o&&(R.currentPlanCode=e,A.value=o,R.planIndex=l>=0?l:0,R.defaultValue.insuredList[0].productList[R.planIndex].riskList=R.riskList,U.value.findIndex((i=>i===e))<0&&U.value.push(e))};f((()=>{var e,i;R.select={},R.list=[],R.userData={},R.riskIsInsure={},R.submitData={},R.riskList=[{}],R.mainRiskVO={},R.ifPersonalInfoSuccess=!1,R.trialMsg="",R.trialResultPremium=0,R.riskIsInsure={},null==(i=null==(e=A.value)?void 0:e.insureProductRiskVOList)||i.forEach((e=>{var i;const a=null==(i=A.value.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId));a&&(R.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:a})}))})),o((()=>{A.value=s.dataSource,R.loading=!0,R.show=!0,R.isAniShow=!0,R.isSkipFirstTrial=!0,R.hadSkipFirstTrial=!1,F((()=>{Ie()}))}));return i({getTrialSuccessFlag:()=>R.trialResultPremium>0,validate:()=>L.value.validate(!1),validateTrialFields:()=>L.value.validateTrialFields(),validateHolder:e=>{var i;return null==(i=L.value)?void 0:i.validateHolder(e)},getUserData:()=>({...R.userData}),onShare:e=>{var i;R.trialResultPremium&&(null==(i=p.value)||i.validate().then((()=>{Object.assign(E.value,s.defaultOrder,{extInfo:{...E.value.extInfo,buttonCode:ce.TRIAL_PREMIUM,pageCode:de.TRIAL_PREMIUM,templateId:g}});const i=pe(s.productInfo,J.value,E.value);le(i,((i,a)=>{a===N.JUMP_PAGE&&(M.value.link=`${window.location.href}&isShare=1&orderNo=${i.orderNo}`,e())})),console.log("---- validate success ----")})))},onNext:()=>{var e;const{productCode:i,productName:a}=s.productInfo;h?S(de.TRIAL_PREMIUM,m.query):R.trialResultPremium&&(null==(e=p.value)||e.validate().then((()=>{Object.assign(E.value,s.defaultOrder,{extInfo:{templateId:g,...E.value.extInfo,...s.defaultOrder.extInfo||{},buttonCode:ce.TRIAL_PREMIUM,pageCode:de.TRIAL_PREMIUM}}),console.log("dealMixData()",H());const e=pe({...H(),productCode:i,productName:a},R.trialResult,E.value);le(e,((e,i)=>{i===N.JUMP_PAGE&&_(e.nextPageCode,{...m.query,orderNo:e.orderNo})})),console.log("---- validate success ----")})),R.loading=!1,R.show=!0,R.isAniShow=!0)},dealMixData:H}),n((()=>R.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),n((()=>R.userData),(e=>{if(e){const{holder:i,insuredList:t}=e||{},l={holder:i,insuredList:t};Object.assign(R.submitData,l),a("update:userData",l)}}),{deep:!0}),n((()=>s.dataSource),(e=>{A.value=e}),{deep:!0,immediate:!0}),(e,i)=>{var a,t,l,s,o,n,m,f;const k=j;return r(),u("div",Ne,[y(e.$slots,"trialHead",{},void 0,!0),C("div",_e,[d(G,{labels:c(Se)((null==(a=A.value)?void 0:a.insureProductRiskVOList)||[],A.value.productRiskRelationVOList)},null,8,["labels"]),C("div",je,[!e.hideBenefit&&(null==(t=z.value)?void 0:t.benefitRiskResultVOList)?(r(),V(he,{key:0,class:"benefit-wrap","data-source":z.value,"product-info":A.value,"show-type-list":z.value.showTypList},null,8,["data-source","product-info","show-type-list"])):v("",!0),c(B)?(r(),V(Fe,{key:1,"plan-list":e.productInfo.planList,"default-plan":A.value,onPlanChange:ge},null,8,["plan-list","default-plan"])):v("",!0),A.value.productFactor?(r(),V(c(ye),{ref_key:"personalInfoRef",ref:L,key:A.value.planCode,modelValue:c(R).userData,"onUpdate:modelValue":i[0]||(i[0]=e=>c(R).userData=e),"is-trial":e.isTrial,"product-factor":A.value.productFactor,"multi-insured-config":null==(l=A.value)?void 0:l.multiInsuredConfigVO,onTrailChange:oe,onCloseCustomerPopoup:$},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):v("",!0)]),d(k,{size:"large"}),C("div",Ee,[(r(),V(Re,{ref_key:"insureInfosRef",ref:p,key:A.value.planCode,"origin-data":null==(s=A.value.insureProductRiskVOList)?void 0:s[0],"product-factor":A.value.productFactor,"default-value":c(R).defaultValue?null==(n=null==(o=c(R).defaultValue)?void 0:o.insuredList[0].productList[c(R).planIndex])?void 0:n.riskList[0]:null,"trial-result":c(R).trialResult,onTrialChange:re},null,8,["origin-data","product-factor","default-value","trial-result"]))]),C("div",Me,[A.value.insureProductRiskVOList?(r(),V(De,{key:A.value.planCode,"data-source":A.value,"show-main-risk":!1,"default-value":c(R).defaultValue?null==(f=null==(m=c(R).defaultValue)?void 0:m.insuredList[0].productList[c(R).planIndex])?void 0:f.riskList:[],onTrialChange:fe},{holderForm:I((()=>{var a;return[e.isTrial&&e.dataSource.productFactor?(r(),V(c(ye),{key:0,ref_key:"personalInfoRef",ref:L,modelValue:c(R).userData,"onUpdate:modelValue":i[1]||(i[1]=e=>c(R).userData=e),"is-trial":e.isTrial,"is-only-holder":!0,"product-factor":e.dataSource.productFactor,"multi-insured-config":null==(a=e.dataSource)?void 0:a.multiInsuredConfigVO,onTrailChange:oe},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):v("",!0)]})),_:1},8,["data-source","default-value"])):v("",!0)]),Ae]),y(e.$slots,"trialBtn",{trialData:c(R).submitData,riskPremium:c(R).trialResult,loading:c(R).isQuerying,personalInfoRef:L.value},void 0,!0)])}}}),[["__scopeId","data-v-48af32c8"]]);const Be={class:"long-info-collection"},Ke=a({__name:"infoCollection",setup(e){const i=A((()=>U((()=>import("./index-ae47e438.js")),["static/js/index-ae47e438.js","static/css/index-fa4edf2a.css","static/js/index-282e95dd.js","static/css/index-839a5189.css","static/js/theme-94cf7d00.js","static/js/index-43b400fc.js","static/css/index-bbfdd7ec.css","static/js/utils-b388d5c2.js","static/js/infoCollection-ca1bf8b9.js","static/js/trial-448a4f37.js"]))),a=A((()=>U((()=>import("./index-10ec7602.js")),["static/js/index-10ec7602.js","static/css/index-bf024e9b.css","static/js/index-282e95dd.js","static/css/index-839a5189.css"]))),s=P(),o=ue(),{productCode:n="",tenantId:p,agentCode:m="",agencyCode:k,saleChannelId:y,isShare:g,orderNo:h,extraInfo:L,insurerCode:C,preview:R}=s.query;let b={};try{b=JSON.parse(decodeURIComponent(L))}catch(we){}const D=l({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),T=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,F=t({imgUrl:"",desc:"",title:"",link:T}),x=t();t();const j=t(),E=t({}),M=t({}),G=t([]),W=t(),X=t({}),Y=t(!1),Z=t(!1),ee=t(0),ve=t(!0),{fileList:me,mustReadFileCount:fe,popupFileList:ke}=se(X,W),Ie=t(!1),ye=t(!1),ge=()=>{Z.value=!1,ve.value=!0,G.value.length<1||(Y.value=!0)},he=()=>{Y.value=!1,Z.value=!1,ve.value=!0};t({}),t(!1),t([{}]);const Le=t(""),Ve=t(0),Ce=t(!1);t(),t(),t(),O((()=>{var e,i;const{insureProductRiskVOList:a}=(null==(i=null==(e=M.value)?void 0:e.productPlanInsureVOList)?void 0:i[0])||{};return(a||[]).find((e=>e.mainRiskFlag===q.YES))}));const Re=t(0);t({});const Pe=t(),be=()=>{Le.value="试算中...",Ve.value=0,Ce.value=!0},Oe=(e,i)=>{Le.value="",Re.value=e.premium,Ve.value=e,Pe.value=i,Ce.value=!1},De=async()=>{var e,i;if(R)return void S(de.INFO_COLLECTION,s.query);if(!Ve.value)return;const a=[];j.value&&a.push(null==(e=j.value)?void 0:e.validate(!1)),x.value&&a.push(null==(i=x.value)?void 0:i.validate(!1)),Promise.all(a).then((()=>{if(!Ie.value)return void w("请勾选投保人阅读并接受");Object.assign(o.value,{extInfo:{...o.value.extInfo,buttonCode:ce.INFO_COLLECTION,pageCode:de.INFO_COLLECTION}});const e=j.value.dealMixData(),i=pe({...e,productCode:n,productName:M.value.productName},Ve.value,o.value);le(i,((e,i)=>{i===N.JUMP_PAGE&&_(e.nextPageCode,s.query)}))}))};l({tenantOrderPayInfoList:[]});const Te=async()=>{oe({productCode:n,tenantId:p}).then((({data:e,code:i})=>{if("10000"===i){E.value=e;const{wxShareConfig:i,showWXShare:a,title:t,desc:l,image:s}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(F.value,{...i,imgUrl:i.image,isShare:a}):Object.assign(F.value,{title:t,desc:l,imgUrl:s,isShare:a}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&$(e.BASIC_INFO.themeType)}})),h&&await ie({orderNo:h,tenantId:p}).then((({code:e,data:i})=>{var a;if("10000"===e){if(Ve.value=i.orderAmount,(null==(a=i.insuredList)?void 0:a.length)>0){const{planCode:e}=i.insuredList[0];D.defaultPlanCode=e}Object.assign(o.value,i,{tenantOrderPayInfoList:i.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:n}),D.defaultValue=o.value,ye.value=!0}})),ne({productCode:n}).then((({code:e,data:i})=>{var a,t,l,s;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:o}=i;W.value=e||[];const{basicInfo:{questionnaireType:n},questions:r,questionnaireName:u}=(null==(a=null==o?void 0:o[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};n&&(G.value=2===n?[{attachmentName:u,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:u,attachmentUri:null==(t=null==r?void 0:r[0])?void 0:t.content,attachmentType:re(String(null==(l=null==r?void 0:r[0])?void 0:l.textType),null==(s=null==r?void 0:r[0])?void 0:s.content)}])}})),await ae({productCode:n,isTenant:!R}).then((({data:e,code:i})=>{var a;if("10000"===i){M.value=e,X.value=e.productPlanInsureVOList.find((e=>!D.defaultPlanCode||e.planCode===D.defaultPlanCode))||{};const{payInfo:i}=Q(null==(a=X.value)?void 0:a.productFactor);D.payInfo={...D.payInfo,...i}}}))};return f((()=>{Te()})),(e,t)=>{var l,s,m,f,k,y;const h=H,L=J;return r(),u("div",Be,[d(h),c(ye)||c(R)?(r(),V(qe,{key:0,ref_key:"personalInfoRef",ref:j,"data-source":c(X),"product-info":{productCode:c(n),productName:c(M).productName,insurerCode:c(C),tenantId:c(p),planList:c(M).productPlanInsureVOList},"tenant-product-detail":c(E),"hide-benefit":"","default-data":[c(D).defaultValue],onTrialStart:be,onTrialEnd:Oe,"onUpdate:userData":t[0]||(t[0]=e=>c(D).userData=e)},null,8,["data-source","product-info","tenant-product-detail","default-data"])):v("",!0),c(D).payInfo.schema.length?(r(),V(c(z),{key:1,ref_key:"payInfoRef",ref:x,modelValue:c(o).tenantOrderPayInfoList,"onUpdate:modelValue":t[1]||(t[1]=e=>c(o).tenantOrderPayInfoList=e),schema:c(D).payInfo.schema,"is-view":c(D).isView,"user-data":c(D).userData},null,8,["modelValue","schema","is-view","user-data"])):v("",!0),d(L,null,{default:I((()=>{var e;return[(null==(e=c(me))?void 0:e.length)?(r(),V(c(a),{key:0,modelValue:c(Ie),"onUpdate:modelValue":t[2]||(t[2]=e=>B(Ie)?Ie.value=e:null),"has-bg-color":!1,"attachment-list":c(me),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:t[3]||(t[3]=e=>(e=>{ee.value=e,Z.value=!0})(e))},null,8,["modelValue","attachment-list"])):v("",!0)]})),_:1}),c(Z)?(r(),V(c(i),{key:2,show:c(Z),"onUpdate:show":t[4]||(t[4]=e=>B(Z)?Z.value=e:null),"content-list":c(ve)?c(me):c(ke),"is-only-view":c(ve),"active-index":c(ee),text:c(ve)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":c(ve)?0:c(fe),onSubmit:ge,onOnCloseFilePreviewByMask:he},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):v("",!0),d(te,{"is-share":c(F).isShare&&!c(g),premium:null==(l=c(Ve))?void 0:l.initialPremium,"share-info":c(F),"loading-text":c(Le),"payment-frequency":(null==(y=null==(k=null==(f=null==(m=null==(s=c(Pe))?void 0:s.insuredList)?void 0:m[0].productList)?void 0:f[0].riskList)?void 0:k[0])?void 0:y.paymentFrequency)+"","tenant-product-detail":c(E),"handle-share":e=>(e=>{j.value.validateHolder(["mobile"]).then((()=>{Object.assign(o.value,{extInfo:{...o.value.extInfo,buttonCode:ce.INFO_COLLECTION,pageCode:de.INFO_COLLECTION}});const i=j.value.getUserData(),a=pe({...Pe.value,holder:null==i?void 0:i.holder},Ve.value||{},o.value);le(a,((i,a)=>{a===N.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{w("请录入投保人手机号后进行分享")}))})(e),disabled:!c(Ve),onHandleClick:De},{default:I((()=>[K("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{Ke as default};
