import{ad as e,_ as n,d as a,r as o,J as t,an as r,E as l,S as i,ah as s,aJ as c,aL as u,c as d,h as f,f as m,w as p,j as v,g as I,k as D,F as y,t as k,a7 as Y,n as b,m as V,V as S,bT as w,B as g,bi as h,a8 as E,X as L,Y as _,e as O,a2 as M}from"./index-f03140d4.js";import{m as x,n as C}from"./infoCollection-494ff537.js";import"./trial-58dc58d8.js";import"./pdfh5-008ca364.js";const N=(n,a="YYYY-MM-DD")=>e(n).format(a),P=(n,a=0,o="day",t="YYYY-MM-DD")=>e(n).add(a,o).format(t),U=(n,a=0,o="day",t="YYYY-MM-DD")=>e(n).subtract(a,o).format(t);const T=e=>(L("data-v-003d209e"),e=e(),_(),e),R={class:"com-period-cell"},$={key:0,class:"period-custom-cell period-check-btn-cell"},F=T((()=>v("div",{class:"period-cell-label"},"保障期间",-1))),q={class:"period-cell-content"},A=T((()=>v("div",{class:"period-cell-label"},"生效日期",-1))),j={class:"period-cell-content period-custom-cell-content"},H=T((()=>v("div",{class:"period-cell-label"},"保障期限",-1))),J={class:"period-cell-content period-custom-cell-content"},X={key:2,class:"period-custom-cell period-common-cell"},B=T((()=>v("div",{class:"period-cell-label"},"保障期限",-1))),z={class:"period-cell-content"},G=T((()=>v("div",{class:"picker-custom-title"},"保险开始生效日期",-1)));var K=n(a({__name:"index",props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})}},emits:["onReset","onUpdate","onVerify"],setup(n,{expose:a,emit:L}){const _=n;o({});const O=(e,n)=>"year"===e?`${n}年`:"month"===e?`${n}月`:"day"===e?`${n}日`:n,M=o(new Date),T=t({formInfo:_.formInfo}),K=o(!0),Q=o();o([]),r((()=>T.formInfo.insuranceStartDate),(e=>{e&&"string"==typeof e&&(M.value=new Date(e))}));const W=l((()=>{var e;const{insurancePeriodValueList:n=[]}=(null==(e=_.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n.length?(T.formInfo.coveragePeriod||(T.formInfo.coveragePeriod=n[0].code),n):[]})),Z=l((()=>{var e;const{insuranceStartType:n}=(null==(e=_.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),ee=l((()=>{var e;const{insuranceEndType:n}=(null==(e=_.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),[ne,ae]=i(!1),oe=()=>{K.value&&ae(!0)},te=l((()=>{var e,n;if(Z.value===x.CUSTOM_DAY){const a=null==(n=null==(e=_.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(a&&a.indexOf(",")){const[e,n]=a.split(",");return new Date(P(new Date,Number(e),"day"))}}return new Date(P(new Date,1,"day"))})),re=l((()=>{var e,n;if(Z.value===x.CUSTOM_DAY){const a=null==(n=null==(e=_.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(!a)return new Date;if(a.indexOf(",")){const[e,n]=a.split(",");return new Date(P(new Date,Number(n),"day"))}const o=P(new Date,Number(a),"day");return new Date(o)}return new Date})),le=e=>{T.formInfo.insuranceStartDate=`${N(e)} 00:00:00`,ae(!1)},ie=()=>{ae(!1)};return r((()=>_.riskInfo),(()=>{const{productRiskInsureLimitVO:e}=_.riskInfo||{};if(e){const{amountPremiumConfigVO:n,insurancePeriodValueList:a,paymentFrequencyList:o=[],paymentPeriodValueList:t}=e||{};W.value=a}}),{deep:!0,immediate:!0}),r([()=>Z.value,()=>T.formInfo.coveragePeriod,()=>T.formInfo.insuranceStartDate,()=>Q.value],(()=>{var n,a;if(!T.formInfo.coveragePeriod)return;const[o,t]=T.formInfo.coveragePeriod.split("_");if(!T.formInfo.insuranceStartDate)if(Z.value===x.CUSTOM_DAY){const e=null==(a=null==(n=_.riskInfo)?void 0:n.productRiskInsureLimitVO)?void 0:a.maxInsuranceDay;if(e)if(e.indexOf(",")){const[n,a]=e.split(",");T.formInfo.insuranceStartDate=`${P(new Date,Number(n),"day")} 00:00:00`,K.value=n!==a}else T.formInfo.insuranceStartDate=`${P(new Date,e,"day")} 00:00:00`;else T.formInfo.insuranceStartDate=`${P(new Date,1,"day")} 00:00:00`}else Z.value===x.NEXT_DAY?T.formInfo.insuranceStartDate=`${P(new Date,1,"day")} 00:00:00`:T.formInfo.insuranceStartDate=`${N(new Date)} 00:00:00`;if("to"!==o)U(T.formInfo.insuranceStartDate,1,"day"),ee.value===C.CURRENT_DAY?T.formInfo.insuranceEndDate=`${e(new Date(T.formInfo.insuranceStartDate)).add(Number(t),o).subtract(1,"day")} 23:59:59`:T.formInfo.insuranceEndDate=`${P(T.formInfo.insuranceStartDate,Number(t),o)} 00:00:00`;else{let e=T.formInfo.tenantOrderInsuredList[0].birthday;T.formInfo.tenantOrderInsuredList[0].certType===s.CERT&&T.formInfo.tenantOrderInsuredList[0].certNo&&c(T.formInfo.tenantOrderInsuredList[0].certNo)&&(e=u(T.formInfo.tenantOrderInsuredList[0].certNo));const n=`${U(e,1,"day")} 00:00:00`;"single"===t&&(T.formInfo.insuranceEndDate="9999-99-99 23:59:59"),ee.value===C.CURRENT_DAY?T.formInfo.insuranceEndDate=`${P(n,Number(t),o)} 23:59:59`:T.formInfo.insuranceEndDate=`${P(e,Number(t),o)} 00:00:00`}}),{immediate:!0}),a({}),(e,n)=>{const a=V,o=S,t=w,r=g,l=h,i=E;return d(),f(y,null,[m(t,null,{default:p((()=>[v("div",R,[I(W).length>1?(d(),f("div",$,[F,v("div",q,[m(a,{modelValue:I(T).formInfo.coveragePeriod,"onUpdate:modelValue":n[0]||(n[0]=e=>I(T).formInfo.coveragePeriod=e),prop:{label:"value",value:"code"},options:I(W)},null,8,["modelValue","options"])])])):D("",!0),I(Z)===I(x).CUSTOM_DAY?(d(),f("div",{key:1,class:"period-custom-cell period-common-cell",onClick:oe},[I(K)?(d(),f(y,{key:0},[A,v("div",j,[v("span",null,k(I(T).formInfo.insuranceStartDate?I(N)(I(T).formInfo.insuranceStartDate,"YYYY.MM.DD HH:mm:ss"):""),1),m(o,{class:"custom--arrow-right",name:"arrow-right"})])],64)):(d(),f(y,{key:1},[H,v("div",J,[v("span",null,k(I(T).formInfo.insuranceStartDate?I(N)(I(T).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+k(I(T).formInfo.insuranceEndDate?I(N)(I(T).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])],64))])):D("",!0),I(Z)!==I(x).CUSTOM_DAY?(d(),f("div",X,[B,v("div",z,k(I(T).formInfo.insuranceStartDate?I(N)(I(T).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+k(I(T).formInfo.insuranceEndDate?I(N)(I(T).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])):D("",!0)])])),_:1}),m(i,{show:I(ne),"onUpdate:show":n[3]||(n[3]=e=>Y(ne)?ne.value=e:null),height:340,closeable:!0},{default:p((()=>[m(l,{modelValue:I(M),"onUpdate:modelValue":n[2]||(n[2]=e=>Y(M)?M.value=e:null),type:"date",title:"保险开始生效日期","min-date":I(te),"max-date":I(re),formatter:O,"visible-item-count":5,class:"custom-date-picker",onConfirm:le,onCancel:ie},{cancel:p((()=>[])),title:p((()=>[G])),confirm:p((()=>[m(r,{type:"primary",round:"",block:"",class:"linear-btn custom-picker-btn",onClick:n[1]||(n[1]=e=>ne.value=!1)},{default:p((()=>[b("确 定")])),_:1})])),_:1},8,["modelValue","min-date","max-date"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-003d209e"]]);const Q=e=>(L("data-v-cfd68946"),e=e(),_(),e),W={class:"com-payment-type"},Z={class:"title"},ee={key:0,class:"custom-cell check-btn-cell"},ne=Q((()=>v("div",{class:"cell-label"},"保障方案",-1))),ae={class:"cell-content"},oe={key:1,class:"custom-cell check-btn-cell"},te=Q((()=>v("div",{class:"cell-label"},"交费方式",-1))),re={class:"cell-content"},le={key:2,class:"custom-cell check-btn-cell"},ie=Q((()=>v("div",{class:"cell-label"},"交费期间",-1))),se={class:"cell-content"};var ce=n(a({__name:"index",props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},planList:{default:()=>[]}},setup(e){const n=e;o({});const a=t({formInfo:n.formInfo}),i=o(),s=o();o([]);const c=o([]),u=o([]),y=l((()=>{var e;return!!(null==(e=n.planList)?void 0:e.length)}));l((()=>{var e;return"1"===String(null==(e=i.value)?void 0:e.paymentFrequencyFlag)}));const Y=l((()=>{if(s){const{premiumExplain:e,premiumExplainViewName:n,premiumExplainUri:a}=s.value||{};return{premiumExplain:e,premiumExplainUri:a,premiumExplainViewName:n}}return null}));l((()=>Y.value&&Y.value.premiumExplain&&Y.value.premiumExplainViewName));const b=l((()=>{var e;if(i.value&&i.value.paymentFrequency){return((null==(e=i.value.paymentFrequency)?void 0:e.split(","))||[]).length>1}return!1})),S=e=>{a.formInfo.planCode=e};return r((()=>n.riskInfo),(()=>{var e,o;const{productRiskInsureLimitVO:t}=n.riskInfo||{};if(t){const{paymentFrequencyList:n=[],paymentPeriodValueList:r}=t||{};a.formInfo.paymentFrequency=null==(e=null==n?void 0:n[0])?void 0:e.code,a.formInfo.chargePeriod=null==(o=null==r?void 0:r[0])?void 0:o.code,c.value=r,u.value=n}}),{deep:!0,immediate:!0}),(n,o)=>{const t=V,r=M,l=w;return d(),O(l,null,{default:p((()=>[v("div",W,[v("div",Z,k(I(b)?"交费方式":"保障计划"),1),I(y)?(d(),f("div",ee,[ne,v("div",ae,[m(t,{modelValue:I(a).formInfo.planCode,"onUpdate:modelValue":o[0]||(o[0]=e=>I(a).formInfo.planCode=e),options:e.planList,prop:{value:"planCode",label:"planName"},onChange:S},null,8,["modelValue","options"])])])):D("",!0),I(u).length>1?(d(),f("div",oe,[te,v("div",re,[m(t,{modelValue:I(a).formInfo.paymentFrequency,"onUpdate:modelValue":o[1]||(o[1]=e=>I(a).formInfo.paymentFrequency=e),prop:{label:"value",value:"code"},options:I(u)},null,8,["modelValue","options"])])])):D("",!0),I(c).length>1?(d(),f("div",le,[ie,v("div",se,[m(t,{modelValue:I(a).formInfo.chargePeriod,"onUpdate:modelValue":o[2]||(o[2]=e=>I(a).formInfo.chargePeriod=e),prop:{label:"value",value:"code"},options:I(c)},null,8,["modelValue","options"])])])):D("",!0),m(K,{"form-info":I(a).formInfo,"risk-info":e.riskInfo},null,8,["form-info","risk-info"])]),m(r)])),_:1})}}}),[["__scopeId","data-v-cfd68946"]]);export{ce as default};
