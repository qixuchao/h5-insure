import{ah as e,d as n,k as a,r as o,z as t,l as r,j as l,ad as i,cu as s,ae as c,o as u,c as m,a as d,u as f,b as p,s as v,F as I,e as D,w as y,p as k,a8 as Y,_ as b,aK as V,aG as S,aR as g,bi as w,ao as h,ap as L,aq as M,aA as E}from"./index-dc5ec44c.js";import{d as $,e as O}from"./infoCollection-9802e33b.js";import"./trial-ce912ff9.js";const C=(n,a="YYYY-MM-DD")=>e(n).format(a),x=(n,a=0,o="day",t="YYYY-MM-DD")=>e(n).add(a,o).format(t),T=(n,a=0,o="day",t="YYYY-MM-DD")=>e(n).subtract(a,o).format(t);const N=e=>(L("data-v-4160504e"),e=e(),M(),e),P={class:"com-period-cell"},U={key:0,class:"period-custom-cell period-check-btn-cell"},_=N((()=>d("div",{class:"period-cell-label"},"保障期间",-1))),R={class:"period-cell-content"},q=N((()=>d("div",{class:"period-cell-label"},"生效日期",-1))),F={class:"period-cell-content period-custom-cell-content"},A=N((()=>d("div",{class:"period-cell-label"},"保障期限",-1))),j={class:"period-cell-content period-custom-cell-content"},H={key:2,class:"period-custom-cell period-common-cell"},z=N((()=>d("div",{class:"period-cell-label"},"保障期限",-1))),G={class:"period-cell-content"},K=N((()=>d("div",{class:"picker-custom-title"},"保险开始生效日期",-1))),X=n({name:"insurancePeriodCell"});var B=b(n({...X,props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})}},emits:["onReset","onUpdate","onVerify"],setup(n,{expose:b,emit:L}){const M=n;a({});const E=(e,n)=>"year"===e?`${n}年`:"month"===e?`${n}月`:"day"===e?`${n}日`:n,N=a(new Date),X=o({formInfo:M.formInfo}),B=a(!0);a([]),t((()=>X.formInfo.insuranceStartDate),(e=>{e&&"string"==typeof e&&(N.value=new Date(e))}));const J=r((()=>{var e;const{insurancePeriodValueList:n=[]}=(null==(e=M.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n.length?(X.formInfo.coveragePeriod||(X.formInfo.coveragePeriod=n[0].code),n):[]})),Q=r((()=>{var e;const{insuranceStartType:n}=(null==(e=M.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),W=r((()=>{var e;const{insuranceEndType:n}=(null==(e=M.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),[Z,ee]=l(!1),ne=()=>{B.value&&ee(!0)},ae=r((()=>{var e,n;if(`${Q.value}`===$.CUSTOM_DAY){const a=null==(n=null==(e=M.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(a&&a.indexOf(",")){const[e,n]=a.split(",");return new Date(x(new Date,Number(e),"day"))}}return new Date(x(new Date,1,"day"))})),oe=r((()=>{var e,n;if(`${Q.value}`===$.CUSTOM_DAY){const a=null==(n=null==(e=M.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(!a)return new Date;if(a.indexOf(",")){const[e,n]=a.split(",");return new Date(x(new Date,Number(n),"day"))}const o=x(new Date,Number(a),"day");return new Date(o)}return new Date})),te=e=>{X.formInfo.insuranceStartDate=`${C(e)} 00:00:00`,ee(!1)},re=()=>{ee(!1)};return t((()=>M.riskInfo),(()=>{const{productRiskInsureLimitVO:e}=M.riskInfo||{};if(e){const{insurancePeriodValueList:n,paymentFrequencyList:a=[]}=e||{};J.value=n}}),{deep:!0,immediate:!0}),t([()=>Q.value,()=>X.formInfo.coveragePeriod,()=>X.formInfo.insuranceStartDate,()=>M.riskInfo],(()=>{var n,a;if(!X.formInfo.coveragePeriod)return;const[o,t]=X.formInfo.coveragePeriod.split("_");if(!X.formInfo.insuranceStartDate)if(`${Q.value}`===$.CUSTOM_DAY){const e=null==(a=null==(n=M.riskInfo)?void 0:n.productRiskInsureLimitVO)?void 0:a.insuranceStartTime;if(e)if(e.indexOf(",")){const[n,a]=e.split(",");X.formInfo.insuranceStartDate=`${x(new Date,Number(n),"day")} 00:00:00`,console.log("start",n,a),B.value=n!==a}else X.formInfo.insuranceStartDate=`${x(new Date,e,"day")} 00:00:00`;else X.formInfo.insuranceStartDate=`${x(new Date,1,"day")} 00:00:00`}else`${Q.value}`===$.NEXT_DAY?X.formInfo.insuranceStartDate=`${x(new Date,1,"day")} 00:00:00`:X.formInfo.insuranceStartDate=`${C(new Date)} 00:00:00`;if("to"!==o)T(X.formInfo.insuranceStartDate,1,"day"),`${W.value}`===O.CURRENT_DAY?X.formInfo.insuranceEndDate=`${e(X.formInfo.insuranceStartDate).add(Number(t),o).subtract(1,"day").format("YYYY-MM-DD")} 23:59:59`:X.formInfo.insuranceEndDate=`${x(X.formInfo.insuranceStartDate,Number(t),o)} 00:00:00`;else{let e=X.formInfo.tenantOrderInsuredList[0].birthday;X.formInfo.tenantOrderInsuredList[0].certType===i.CERT&&X.formInfo.tenantOrderInsuredList[0].certNo&&s(X.formInfo.tenantOrderInsuredList[0].certNo)&&(e=c(X.formInfo.tenantOrderInsuredList[0].certNo));const n=`${T(e,1,"day")} 00:00:00`;"single"===t&&(X.formInfo.insuranceEndDate="9999-99-99 23:59:59"),`${W.value}`===O.CURRENT_DAY?X.formInfo.insuranceEndDate=`${x(n,Number(t),o)} 23:59:59`:X.formInfo.insuranceEndDate=`${x(e,Number(t),o)} 00:00:00`}}),{immediate:!0,deep:!0}),b({}),(e,n)=>{const a=V,o=S,t=g,r=w,l=h;return u(),m(I,null,[d("div",P,[f(J).length>1?(u(),m("div",U,[_,d("div",R,[p(a,{modelValue:f(X).formInfo.coveragePeriod,"onUpdate:modelValue":n[0]||(n[0]=e=>f(X).formInfo.coveragePeriod=e),prop:{label:"value",value:"code"},options:f(J)},null,8,["modelValue","options"])])])):v("",!0),f(Q)+""===f($).CUSTOM_DAY?(u(),m("div",{key:1,class:"period-custom-cell period-common-cell",onClick:ne},[f(B)?(u(),m(I,{key:0},[q,d("div",F,[d("span",null,D(f(X).formInfo.insuranceStartDate?f(C)(f(X).formInfo.insuranceStartDate,"YYYY.MM.DD HH:mm:ss"):""),1),p(o,{class:"custom--arrow-right",name:"arrow-right"})])],64)):(u(),m(I,{key:1},[A,d("div",j,[d("span",null,D(f(X).formInfo.insuranceStartDate?f(C)(f(X).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+D(f(X).formInfo.insuranceEndDate?f(C)(f(X).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])],64))])):v("",!0),f(Q)+""!==f($).CUSTOM_DAY?(u(),m("div",H,[z,d("div",G,D(f(X).formInfo.insuranceStartDate?f(C)(f(X).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+D(f(X).formInfo.insuranceEndDate?f(C)(f(X).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])):v("",!0)]),p(l,{show:f(Z),"onUpdate:show":n[3]||(n[3]=e=>k(Z)?Z.value=e:null),height:340,closeable:!0},{default:y((()=>[p(r,{modelValue:f(N),"onUpdate:modelValue":n[2]||(n[2]=e=>k(N)?N.value=e:null),type:"date",title:"保险开始生效日期","min-date":f(ae),"max-date":f(oe),formatter:E,"visible-item-count":5,class:"custom-date-picker",onConfirm:te,onCancel:re},{cancel:y((()=>[])),title:y((()=>[K])),confirm:y((()=>[p(t,{type:"primary",round:"",block:"",class:"linear-btn custom-picker-btn",onClick:n[1]||(n[1]=e=>Z.value=!1)},{default:y((()=>[Y("确 定")])),_:1})])),_:1},8,["modelValue","min-date","max-date"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-4160504e"]]);const J=e=>(L("data-v-58cbb30d"),e=e(),M(),e),Q={class:"com-payment-type"},W={class:"title"},Z={key:0,class:"custom-cell check-btn-cell"},ee=J((()=>d("div",{class:"cell-label"},"保障方案",-1))),ne={class:"cell-content"},ae={key:1,class:"custom-cell check-btn-cell"},oe=J((()=>d("div",{class:"cell-label"},"交费方式",-1))),te={class:"cell-content"},re={key:2,class:"custom-cell check-btn-cell"},le=J((()=>d("div",{class:"cell-label"},"交费期间",-1))),ie={class:"cell-content"},se={key:3,class:"custom-cell common-cell"},ce=J((()=>d("div",{class:"cell-label"},"实付保费",-1))),ue={key:0,class:"cell-content actual-premium"},me={class:"cell-content actual-premium"},de={key:0,class:"actual-premium actual-premium-month-tip"},fe=n({name:"paymentType"});var pe=b(n({...fe,props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},planList:{default:()=>[]}},setup(e){const n=e;a({});const l=o({formInfo:n.formInfo}),i=a(),s=a(),c=a([]),y=a([]),k=r((()=>{var e;return!!(null==(e=n.planList)?void 0:e.length)})),Y=r((()=>{var e,a;if(null==(e=n.premiumInfo)?void 0:e.premiumLoadingText)return n.premiumInfo.premiumLoadingText;if(n.tenantProductDetail.length){const e=((null==n?void 0:n.tenantProductDetail)||[]).find((e=>e.planCode===l.formInfo.planCode||!e.planCode))||{},{premium:o,minActualUnit:t}=(e.data||[]).find((e=>e.paymentFrequency===l.formInfo.paymentFrequency))||{};return(null==(a=n.premiumInfo)?void 0:a.premium)?`${n.premiumInfo.premium||""}${t}`:o}return""})),b=r((()=>{if(s){const{premiumExplain:e,premiumExplainViewName:n,premiumExplainUri:a}=s.value||{};return{premiumExplain:e,premiumExplainUri:a,premiumExplainViewName:n}}return null}));r((()=>b.value&&b.value.premiumExplain&&b.value.premiumExplainViewName));const S=r((()=>{var e;if(i.value&&i.value.paymentFrequency){return((null==(e=i.value.paymentFrequency)?void 0:e.split(","))||[]).length>1}return!1}));return t((()=>n.riskInfo),(()=>{var e,a;const{productRiskInsureLimitVO:o}=n.riskInfo||{};if(o){const{paymentFrequencyList:n=[],paymentPeriodValueList:t}=o||{};l.formInfo.paymentFrequency=null==(e=null==n?void 0:n[0])?void 0:e.code,l.formInfo.chargePeriod=null==(a=null==t?void 0:t[0])?void 0:a.code,c.value=t,y.value=n}}),{deep:!0,immediate:!0}),(e,a)=>{var o;const t=V,r=E;return u(),m(I,null,[d("div",Q,[d("div",W,D(f(S)?"交费方式":"保障计划"),1),f(k)?(u(),m("div",Z,[ee,d("div",ne,[p(t,{modelValue:f(l).formInfo.planCode,"onUpdate:modelValue":a[0]||(a[0]=e=>f(l).formInfo.planCode=e),options:e.planList,prop:{value:"planCode",label:"planName"}},null,8,["modelValue","options"])])])):v("",!0),f(y).length>1?(u(),m("div",ae,[oe,d("div",te,[p(t,{modelValue:f(l).formInfo.paymentFrequency,"onUpdate:modelValue":a[1]||(a[1]=e=>f(l).formInfo.paymentFrequency=e),prop:{label:"value",value:"code"},options:f(y)},null,8,["modelValue","options"])])])):v("",!0),f(c).length>1?(u(),m("div",re,[le,d("div",ie,[p(t,{modelValue:f(l).formInfo.chargePeriod,"onUpdate:modelValue":a[2]||(a[2]=e=>f(l).formInfo.chargePeriod=e),prop:{label:"value",value:"code"},options:f(c)},null,8,["modelValue","options"])])])):v("",!0),p(B,{"form-info":f(l).formInfo,"risk-info":e.riskInfo},null,8,["form-info","risk-info"]),f(Y)?(u(),m("div",se,[ce,(null==(o=n.premiumInfo)?void 0:o.premiumLoadingText)?(u(),m("div",ue,D(f(Y)),1)):(u(),m(I,{key:1},[d("div",me,D(f(Y)),1),"5"===f(l).formInfo.paymentFrequency?(u(),m("div",de," 共12期 ")):v("",!0)],64))])):v("",!0)]),p(r)],64)}}}),[["__scopeId","data-v-58cbb30d"]]);export{pe as default};
