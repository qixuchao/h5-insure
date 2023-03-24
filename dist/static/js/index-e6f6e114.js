import{ac as e,_ as n,d as a,r as o,J as t,am as r,E as l,S as i,ag as s,aI as u,aK as c,c as m,g as d,i as f,m as p,f as v,j as I,F as D,t as y,w as k,aV as Y,n as b,l as V,V as g,B as S,b9 as w,a7 as h,X as L,Y as E,a2 as M}from"./index-8dcf7554.js";import{m as $,n as O}from"./infoCollection-fc3860dd.js";import"./trial-d7fb7924.js";import"./pdfh5-008ca364.js";const x=(n,a="YYYY-MM-DD")=>e(n).format(a),C=(n,a=0,o="day",t="YYYY-MM-DD")=>e(n).add(a,o).format(t),N=(n,a=0,o="day",t="YYYY-MM-DD")=>e(n).subtract(a,o).format(t);const T=e=>(L("data-v-8f4f620c"),e=e(),E(),e),U={class:"com-period-cell"},_={key:0,class:"period-custom-cell period-check-btn-cell"},P=T((()=>f("div",{class:"period-cell-label"},"保障期间",-1))),R={class:"period-cell-content"},F=T((()=>f("div",{class:"period-cell-label"},"生效日期",-1))),q={class:"period-cell-content period-custom-cell-content"},A=T((()=>f("div",{class:"period-cell-label"},"保障期限",-1))),j={class:"period-cell-content period-custom-cell-content"},H={key:2,class:"period-custom-cell period-common-cell"},X=T((()=>f("div",{class:"period-cell-label"},"保障期限",-1))),B={class:"period-cell-content"},J=T((()=>f("div",{class:"picker-custom-title"},"保险开始生效日期",-1))),K=b("确 定");var z=n(a({props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})}},emits:["onReset","onUpdate","onVerify"],setup(n,{expose:a,emit:b}){const L=n;o({});const E=(e,n)=>"year"===e?`${n}年`:"month"===e?`${n}月`:"day"===e?`${n}日`:n,M=o(new Date),T=t({formInfo:L.formInfo}),z=o(!0);o([]),r((()=>T.formInfo.insuranceStartDate),(e=>{e&&"string"==typeof e&&(M.value=new Date(e))}));const G=l((()=>{var e;const{insurancePeriodValueList:n=[]}=(null==(e=L.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n.length?(T.formInfo.coveragePeriod||(T.formInfo.coveragePeriod=n[0].code),n):[]})),Q=l((()=>{var e;const{insuranceStartType:n}=(null==(e=L.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),W=l((()=>{var e;const{insuranceEndType:n}=(null==(e=L.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),[Z,ee]=i(!1),ne=()=>{z.value&&ee(!0)},ae=l((()=>{var e,n;if(`${Q.value}`===$.CUSTOM_DAY){const a=null==(n=null==(e=L.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(a&&a.indexOf(",")){const[e,n]=a.split(",");return new Date(C(new Date,Number(e),"day"))}}return new Date(C(new Date,1,"day"))})),oe=l((()=>{var e,n;if(`${Q.value}`===$.CUSTOM_DAY){const a=null==(n=null==(e=L.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(!a)return new Date;if(a.indexOf(",")){const[e,n]=a.split(",");return new Date(C(new Date,Number(n),"day"))}const o=C(new Date,Number(a),"day");return new Date(o)}return new Date})),te=e=>{T.formInfo.insuranceStartDate=`${x(e)} 00:00:00`,ee(!1)},re=()=>{ee(!1)};return r((()=>L.riskInfo),(()=>{const{productRiskInsureLimitVO:e}=L.riskInfo||{};if(e){const{insurancePeriodValueList:n,paymentFrequencyList:a=[]}=e||{};G.value=n}}),{deep:!0,immediate:!0}),r([()=>Q.value,()=>T.formInfo.coveragePeriod,()=>T.formInfo.insuranceStartDate,()=>L.riskInfo],(()=>{var n,a;if(!T.formInfo.coveragePeriod)return;const[o,t]=T.formInfo.coveragePeriod.split("_");if(!T.formInfo.insuranceStartDate)if(`${Q.value}`===$.CUSTOM_DAY){const e=null==(a=null==(n=L.riskInfo)?void 0:n.productRiskInsureLimitVO)?void 0:a.maxInsuranceDay;if(e)if(e.indexOf(",")){const[n,a]=e.split(",");T.formInfo.insuranceStartDate=`${C(new Date,Number(n),"day")} 00:00:00`,z.value=n!==a}else T.formInfo.insuranceStartDate=`${C(new Date,e,"day")} 00:00:00`;else T.formInfo.insuranceStartDate=`${C(new Date,1,"day")} 00:00:00`}else`${Q.value}`===$.NEXT_DAY?T.formInfo.insuranceStartDate=`${C(new Date,1,"day")} 00:00:00`:T.formInfo.insuranceStartDate=`${x(new Date)} 00:00:00`;if("to"!==o)N(T.formInfo.insuranceStartDate,1,"day"),`${W.value}`===O.CURRENT_DAY?T.formInfo.insuranceEndDate=`${e(T.formInfo.insuranceStartDate).add(Number(t),o).subtract(1,"day").format("YYYY-MM-DD")} 23:59:59`:T.formInfo.insuranceEndDate=`${C(T.formInfo.insuranceStartDate,Number(t),o)} 00:00:00`;else{let e=T.formInfo.tenantOrderInsuredList[0].birthday;T.formInfo.tenantOrderInsuredList[0].certType===s.CERT&&T.formInfo.tenantOrderInsuredList[0].certNo&&u(T.formInfo.tenantOrderInsuredList[0].certNo)&&(e=c(T.formInfo.tenantOrderInsuredList[0].certNo));const n=`${N(e,1,"day")} 00:00:00`;"single"===t&&(T.formInfo.insuranceEndDate="9999-99-99 23:59:59"),`${W.value}`===O.CURRENT_DAY?T.formInfo.insuranceEndDate=`${C(n,Number(t),o)} 23:59:59`:T.formInfo.insuranceEndDate=`${C(e,Number(t),o)} 00:00:00`}}),{immediate:!0,deep:!0}),a({}),(e,n)=>{const a=V,o=g,t=S,r=w,l=h;return m(),d(D,null,[f("div",U,[p(G).length>1?(m(),d("div",_,[P,f("div",R,[v(a,{modelValue:p(T).formInfo.coveragePeriod,"onUpdate:modelValue":n[0]||(n[0]=e=>p(T).formInfo.coveragePeriod=e),prop:{label:"value",value:"code"},options:p(G)},null,8,["modelValue","options"])])])):I("",!0),p(Q)+""===p($).CUSTOM_DAY?(m(),d("div",{key:1,class:"period-custom-cell period-common-cell",onClick:ne},[z.value?(m(),d(D,{key:0},[F,f("div",q,[f("span",null,y(p(T).formInfo.insuranceStartDate?p(x)(p(T).formInfo.insuranceStartDate,"YYYY.MM.DD HH:mm:ss"):""),1),v(o,{class:"custom--arrow-right",name:"arrow-right"})])],64)):(m(),d(D,{key:1},[A,f("div",j,[f("span",null,y(p(T).formInfo.insuranceStartDate?p(x)(p(T).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+y(p(T).formInfo.insuranceEndDate?p(x)(p(T).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])],64))])):I("",!0),p(Q)+""!==p($).CUSTOM_DAY?(m(),d("div",H,[X,f("div",B,y(p(T).formInfo.insuranceStartDate?p(x)(p(T).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+y(p(T).formInfo.insuranceEndDate?p(x)(p(T).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])):I("",!0)]),v(l,{show:p(Z),"onUpdate:show":n[3]||(n[3]=e=>Y(Z)?Z.value=e:null),height:340,closeable:!0},{default:k((()=>[v(r,{modelValue:M.value,"onUpdate:modelValue":n[2]||(n[2]=e=>M.value=e),type:"date",title:"保险开始生效日期","min-date":p(ae),"max-date":p(oe),formatter:E,"visible-item-count":5,class:"custom-date-picker",onConfirm:te,onCancel:re},{cancel:k((()=>[])),title:k((()=>[J])),confirm:k((()=>[v(t,{type:"primary",round:"",block:"",class:"linear-btn custom-picker-btn",onClick:n[1]||(n[1]=e=>Z.value=!1)},{default:k((()=>[K])),_:1})])),_:1},8,["modelValue","min-date","max-date"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-8f4f620c"]]);const G=e=>(L("data-v-77fd8b83"),e=e(),E(),e),Q={class:"com-payment-type"},W={class:"title"},Z={key:0,class:"custom-cell check-btn-cell"},ee=G((()=>f("div",{class:"cell-label"},"保障方案",-1))),ne={class:"cell-content"},ae={key:1,class:"custom-cell check-btn-cell"},oe=G((()=>f("div",{class:"cell-label"},"交费方式",-1))),te={class:"cell-content"},re={key:2,class:"custom-cell check-btn-cell"},le=G((()=>f("div",{class:"cell-label"},"交费期间",-1))),ie={class:"cell-content"},se={key:3,class:"custom-cell common-cell"},ue=G((()=>f("div",{class:"cell-label"},"实付保费",-1))),ce={key:0,class:"cell-content actual-premium"},me={class:"cell-content actual-premium"},de={key:0,class:"actual-premium actual-premium-month-tip"};var fe=n(a({props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},planList:{default:()=>[]}},setup(e){const n=e;o({});const a=t({formInfo:n.formInfo}),i=o(),s=o(),u=o([]),c=o([]),k=l((()=>{var e;return!!(null==(e=n.planList)?void 0:e.length)})),Y=l((()=>{var e,o;if(null==(e=n.premiumInfo)?void 0:e.premiumLoadingText)return n.premiumInfo.premiumLoadingText;if(n.tenantProductDetail.length){const e=((null==n?void 0:n.tenantProductDetail)||[]).find((e=>e.planCode===a.formInfo.planCode||!e.planCode))||{},{premium:t,minActualUnit:r}=(e.data||[]).find((e=>e.paymentFrequency===a.formInfo.paymentFrequency))||{};return(null==(o=n.premiumInfo)?void 0:o.premium)?`${n.premiumInfo.premium||""}${r}`:t}return""})),b=l((()=>{if(s){const{premiumExplain:e,premiumExplainViewName:n,premiumExplainUri:a}=s.value||{};return{premiumExplain:e,premiumExplainUri:a,premiumExplainViewName:n}}return null}));l((()=>b.value&&b.value.premiumExplain&&b.value.premiumExplainViewName));const g=l((()=>{var e;if(i.value&&i.value.paymentFrequency){return((null==(e=i.value.paymentFrequency)?void 0:e.split(","))||[]).length>1}return!1}));return r((()=>n.riskInfo),(()=>{var e,o;const{productRiskInsureLimitVO:t}=n.riskInfo||{};if(t){const{paymentFrequencyList:n=[],paymentPeriodValueList:r}=t||{};a.formInfo.paymentFrequency=null==(e=null==n?void 0:n[0])?void 0:e.code,a.formInfo.chargePeriod=null==(o=null==r?void 0:r[0])?void 0:o.code,u.value=r,c.value=n}}),{deep:!0,immediate:!0}),(o,t)=>{var r;const l=V,i=M;return m(),d(D,null,[f("div",Q,[f("div",W,y(p(g)?"交费方式":"保障计划"),1),p(k)?(m(),d("div",Z,[ee,f("div",ne,[v(l,{modelValue:p(a).formInfo.planCode,"onUpdate:modelValue":t[0]||(t[0]=e=>p(a).formInfo.planCode=e),options:e.planList,prop:{value:"planCode",label:"planName"}},null,8,["modelValue","options"])])])):I("",!0),c.value.length>1?(m(),d("div",ae,[oe,f("div",te,[v(l,{modelValue:p(a).formInfo.paymentFrequency,"onUpdate:modelValue":t[1]||(t[1]=e=>p(a).formInfo.paymentFrequency=e),prop:{label:"value",value:"code"},options:c.value},null,8,["modelValue","options"])])])):I("",!0),u.value.length>1?(m(),d("div",re,[le,f("div",ie,[v(l,{modelValue:p(a).formInfo.chargePeriod,"onUpdate:modelValue":t[2]||(t[2]=e=>p(a).formInfo.chargePeriod=e),prop:{label:"value",value:"code"},options:u.value},null,8,["modelValue","options"])])])):I("",!0),v(z,{"form-info":p(a).formInfo,"risk-info":e.riskInfo},null,8,["form-info","risk-info"]),p(Y)?(m(),d("div",se,[ue,(null==(r=n.premiumInfo)?void 0:r.premiumLoadingText)?(m(),d("div",ce,y(p(Y)),1)):(m(),d(D,{key:1},[f("div",me,y(p(Y)),1),"5"===p(a).formInfo.paymentFrequency?(m(),d("div",de," 共12期 ")):I("",!0)],64))])):I("",!0)]),v(i)],64)}}}),[["__scopeId","data-v-77fd8b83"]]);export{fe as default};
