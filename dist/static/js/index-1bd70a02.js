import{_ as e,d as l,j as a,r as n,k as o,E as i,o as t,c as r,a as m,e as u,u as s,b as c,f as p,F as d,bp as f,aR as v,aC as y,aD as I}from"./index-360b56eb.js";import{I as b}from"./index-e17b429e.js";import"./infoCollection-4da27e16.js";import"./trial-75ba1e51.js";const k=e=>(y("data-v-58cbb30d"),e=e(),I(),e),x={class:"com-payment-type"},V={class:"title"},h={key:0,class:"custom-cell check-btn-cell"},g=k((()=>m("div",{class:"cell-label"},"保障方案",-1))),F={class:"cell-content"},q={key:1,class:"custom-cell check-btn-cell"},E=k((()=>m("div",{class:"cell-label"},"交费方式",-1))),L={class:"cell-content"},C={key:2,class:"custom-cell check-btn-cell"},P=k((()=>m("div",{class:"cell-label"},"交费期间",-1))),U={class:"cell-content"},j={key:3,class:"custom-cell common-cell"},D=k((()=>m("div",{class:"cell-label"},"实付保费",-1))),N={key:0,class:"cell-content actual-premium"},T={class:"cell-content actual-premium"},w={key:0,class:"actual-premium actual-premium-month-tip"},_=l({name:"paymentType"});var R=e(l({..._,props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},planList:{default:()=>[]}},setup(e){const l=e;a({});const y=n({formInfo:l.formInfo}),I=a(),k=a(),_=a([]),R=a([]),$=o((()=>{var e;return!!(null==(e=l.planList)?void 0:e.length)})),A=o((()=>{var e,a;if(null==(e=l.premiumInfo)?void 0:e.premiumLoadingText)return l.premiumInfo.premiumLoadingText;if(l.tenantProductDetail.length){const e=((null==l?void 0:l.tenantProductDetail)||[]).find((e=>e.planCode===y.formInfo.planCode||!e.planCode))||{},{premium:n,minActualUnit:o}=(e.data||[]).find((e=>e.paymentFrequency===y.formInfo.paymentFrequency))||{};return(null==(a=l.premiumInfo)?void 0:a.premium)?`${l.premiumInfo.premium||""}${o}`:n}return""})),O=o((()=>{if(k){const{premiumExplain:e,premiumExplainViewName:l,premiumExplainUri:a}=k.value||{};return{premiumExplain:e,premiumExplainUri:a,premiumExplainViewName:l}}return null}));o((()=>O.value&&O.value.premiumExplain&&O.value.premiumExplainViewName));const z=o((()=>{var e;if(I.value&&I.value.paymentFrequency){return((null==(e=I.value.paymentFrequency)?void 0:e.split(","))||[]).length>1}return!1}));return i((()=>l.riskInfo),(()=>{var e,a;const{productRiskInsureLimitVO:n}=l.riskInfo||{};if(n){const{paymentFrequencyList:l=[],paymentPeriodValueList:o}=n||{};y.formInfo.paymentFrequency=null==(e=null==l?void 0:l[0])?void 0:e.code,y.formInfo.chargePeriod=null==(a=null==o?void 0:o[0])?void 0:a.code,_.value=o,R.value=l}}),{deep:!0,immediate:!0}),(e,a)=>{var n;const o=f,i=v;return t(),r(d,null,[m("div",x,[m("div",V,u(s(z)?"交费方式":"保障计划"),1),s($)?(t(),r("div",h,[g,m("div",F,[c(o,{modelValue:s(y).formInfo.planCode,"onUpdate:modelValue":a[0]||(a[0]=e=>s(y).formInfo.planCode=e),options:e.planList,prop:{value:"planCode",label:"planName"}},null,8,["modelValue","options"])])])):p("",!0),s(R).length>1?(t(),r("div",q,[E,m("div",L,[c(o,{modelValue:s(y).formInfo.paymentFrequency,"onUpdate:modelValue":a[1]||(a[1]=e=>s(y).formInfo.paymentFrequency=e),prop:{label:"value",value:"code"},options:s(R)},null,8,["modelValue","options"])])])):p("",!0),s(_).length>1?(t(),r("div",C,[P,m("div",U,[c(o,{modelValue:s(y).formInfo.chargePeriod,"onUpdate:modelValue":a[2]||(a[2]=e=>s(y).formInfo.chargePeriod=e),prop:{label:"value",value:"code"},options:s(_)},null,8,["modelValue","options"])])])):p("",!0),c(b,{"form-info":s(y).formInfo,"risk-info":e.riskInfo},null,8,["form-info","risk-info"]),s(A)?(t(),r("div",j,[D,(null==(n=l.premiumInfo)?void 0:n.premiumLoadingText)?(t(),r("div",N,u(s(A)),1)):(t(),r(d,{key:1},[m("div",T,u(s(A)),1),"5"===s(y).formInfo.paymentFrequency?(t(),r("div",w," 共12期 ")):p("",!0)],64))])):p("",!0)]),c(i)],64)}}}),[["__scopeId","data-v-58cbb30d"]]);export{R as default};
